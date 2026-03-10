// DietOn Service Worker v1.5
// Cache-first for static assets, network-first for API calls

const CACHE_NAME = 'dieton-v1.5';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/dieton.js',
  '/dieton.css',
  '/api.js',
  '/manifest.json',
  'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700;800;900&display=swap'
];

// Install — cache static assets
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(STATIC_ASSETS.filter(function(url) {
        return !url.startsWith('https://fonts');
      }));
    }).then(function() {
      return self.skipWaiting();
    })
  );
});

// Activate — clean old caches
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(key) { return key !== CACHE_NAME; })
            .map(function(key) { return caches.delete(key); })
      );
    }).then(function() {
      return self.clients.claim();
    })
  );
});

// Fetch — strategy based on request type
self.addEventListener('fetch', function(event) {
  var url = event.request.url;

  // API calls: network-first, no cache
  if (url.includes('railway.app') || url.includes('supabase.co') || url.includes('anthropic.com')) {
    event.respondWith(
      fetch(event.request).catch(function() {
        return new Response(JSON.stringify({ error: 'offline' }), {
          headers: { 'Content-Type': 'application/json' }
        });
      })
    );
    return;
  }

  // Static assets: cache-first
  if (event.request.method === 'GET') {
    event.respondWith(
      caches.match(event.request).then(function(cached) {
        if (cached) return cached;
        return fetch(event.request).then(function(response) {
          // Cache successful responses for our domain
          if (response && response.status === 200 && response.type === 'basic') {
            var clone = response.clone();
            caches.open(CACHE_NAME).then(function(cache) {
              cache.put(event.request, clone);
            });
          }
          return response;
        }).catch(function() {
          // Offline fallback for navigation requests
          if (event.request.mode === 'navigate') {
            return caches.match('/index.html');
          }
        });
      })
    );
  }
});

// Background sync for patient data
self.addEventListener('sync', function(event) {
  if (event.tag === 'sync-patients') {
    event.waitUntil(
      // Clients will handle sync via apiUpdatePatient
      self.clients.matchAll().then(function(clients) {
        clients.forEach(function(client) {
          client.postMessage({ type: 'SYNC_REQUESTED' });
        });
      })
    );
  }
});

// Push notifications
self.addEventListener('push', function(event) {
  var data = {};
  try { data = event.data.json(); } catch(e) { data = { title: 'DietOn', body: event.data ? event.data.text() : 'Nova notificação' }; }
  event.waitUntil(
    self.registration.showNotification(data.title || 'DietOn', {
      body: data.body || '',
      icon: '/icons/icon-192.png',
      badge: '/icons/icon-192.png',
      tag: data.tag || 'dieton',
      data: data
    })
  );
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('/')
  );
});
