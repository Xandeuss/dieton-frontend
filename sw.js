// DietOn Service Worker v2.0
// Cache-first for static assets, network-first for API calls

const CACHE_NAME = 'dieton-v2.0';
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

  // API calls: network-only, no cache
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

  // JS, CSS, HTML: network-first (always get latest version), fallback to cache
  var isAppFile = url.endsWith('.js') || url.endsWith('.css') || url.endsWith('.html')
    || url.endsWith('/') || url.includes('index.html');

  if (isAppFile && event.request.method === 'GET') {
    event.respondWith(
      fetch(event.request).then(function(response) {
        // Update cache with new version
        if (response && response.status === 200) {
          var clone = response.clone();
          caches.open(CACHE_NAME).then(function(cache) {
            cache.put(event.request, clone);
          });
        }
        return response;
      }).catch(function() {
        // Offline: serve from cache
        return caches.match(event.request).then(function(cached) {
          return cached || caches.match('/index.html');
        });
      })
    );
    return;
  }

  // Other assets (images, fonts): cache-first
  if (event.request.method === 'GET') {
    event.respondWith(
      caches.match(event.request).then(function(cached) {
        if (cached) return cached;
        return fetch(event.request).then(function(response) {
          if (response && response.status === 200 && response.type !== 'opaque') {
            var clone = response.clone();
            caches.open(CACHE_NAME).then(function(cache) {
              cache.put(event.request, clone);
            });
          }
          return response;
        }).catch(function() {
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
