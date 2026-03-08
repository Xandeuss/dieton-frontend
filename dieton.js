// DietOn — JavaScript Principal
// Gerado automaticamente do dieton.html

// ─── SECURITY UTILS ───
function escHtml(s) {
  if (s == null || s === undefined) return '';
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

// ── Supabase Config ──────────────────────────────────────────
const SUPABASE_URL = 'https://cbggsjdstynhgzagubae.supabase.co';
const SUPABASE_ANON = 'sb_publishable_Vtx6rfVuWbrA8qAl6ljXqQ_OwS2Ikkp';
// Inicializado após o SDK carregar:
// const supa = supabase.createClient(SUPABASE_URL, SUPABASE_ANON);
// Cole o conteúdo de 02_supabase_client.js abaixo desta linha
// para ativar a integração completa com o banco de dados.

function fillDemo(e, p) {
  document.getElementById('inp-em').value = e;
  document.getElementById('inp-pw').value = p;
}

// ═══════════════════════════════════════════════════════
// DATA PERSISTENCE
// ═══════════════════════════════════════════════════════
var DB = {
  KEY: 'dieton_v1',
  _keyFor: function (userId) { return 'dieton_v1_' + (userId || 'anon'); },
  save: function () {
    if (!cu) return;
    try {
      var snapshot = { pats: pats, tasks: tasks, notifs: notifs, templates: templates, savedAt: Date.now() };
      localStorage.setItem(DB._keyFor(cu.id || cu.email), JSON.stringify(snapshot));
    } catch (e) { console.warn('DietOn: falha ao salvar dados', e); }
  },
  load: function () {
    if (!cu) return false;
    try {
      var raw = localStorage.getItem(DB._keyFor(cu.id || cu.email));
      if (!raw) return false;
      var data = JSON.parse(raw);
      if (data.pats && data.pats.length) { pats = data.pats; }
      if (data.tasks && data.tasks.length) { tasks = data.tasks; }
      if (data.notifs) { notifs = data.notifs; }
      if (data.templates && data.templates.length) { templates = data.templates; }
      return true;
    } catch (e) { console.warn('DietOn: falha ao carregar dados', e); return false; }
  },
  clear: function () { if (!cu) return; try { localStorage.removeItem(DB._keyFor(cu.id || cu.email)); } catch (e) { } },
  exportJSON: function () {
    var data = { pats: pats, tasks: tasks, notifs: notifs, templates: templates, exportedAt: new Date().toISOString(), version: '1.0' };
    var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    var a = document.createElement('a'); a.href = URL.createObjectURL(blob);
    a.download = 'dieton-backup-' + new Date().toISOString().slice(0, 10) + '.json';
    a.click(); URL.revokeObjectURL(a.href);
    showToast('Backup exportado com sucesso!', 's');
  }
};
function dbSave() { DB.save(); }

// ─── ONBOARDING ───
var _onbStep = 0;
var _onbSlides = [
  { icon: '🥗', title: 'Bem-vindo ao DietOn', body: 'Plataforma clínica completa de nutrição. Gerencie pacientes, prescreva planos, acompanhe evolução e use IA.' },
  { icon: '👨‍⚕️', title: 'Gerencie seus pacientes', body: 'Cadastre com anamnese completa. Alertas gerados automaticamente.' },
  { icon: '📝', title: 'Prescrição inteligente', body: 'Monte planos com banco TACO, calcule TMB/GET e exporte PDFs.' },
  { icon: '🤖', title: 'IA Nutricional', body: 'Gere planos completos em segundos com IA.' },
  { icon: '✅', title: 'Tudo pronto!', body: 'Explore todos os módulos pelo menu lateral.' }
];
function showToast(msg, type) {
  var conf = { s: { cls: 't-s', ic: '✓' }, i: { cls: 't-i', ic: 'i' }, w: { cls: 't-w', ic: '!' }, e: { cls: 't-e', ic: '✕' } };
  var c = conf[type] || conf.i;
  var t = document.createElement('div'); t.className = 'toast ' + c.cls;
  t.innerHTML = '<div class="t-ico">' + c.ic + '</div><span>' + msg + '</span>';
  document.body.appendChild(t);
  setTimeout(function () { t.style.transition = 'opacity .3s,transform .3s'; t.style.opacity = '0'; t.style.transform = 'translateY(8px)'; setTimeout(function () { if (t.parentNode) t.parentNode.removeChild(t); }, 310); }, 3200);
}
function showOnboarding() { _onbStep = 0; renderOnbSlide(); openM('m-onboard'); }
function renderOnbSlide() {
  var el = document.getElementById('onb-body'); if (!el) return;
  var s = _onbSlides[_onbStep];
  var dots = _onbSlides.map(function (_, i) { return '<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:' + (i === _onbStep ? 'var(--g4)' : 'var(--n2)') + ';margin:0 3px"></span>'; }).join('');
  var prev = _onbStep > 0 ? '<button class="btn btn-ghost btn-sm" style="margin-right:8px" onclick="_onbStep--;renderOnbSlide()">← Anterior</button>' : '';
  var nxtAct = _onbStep < _onbSlides.length - 1 ? '_onbStep++;renderOnbSlide()' : 'closeM(\'m-onboard\')';
  var nxtLbl = _onbStep < _onbSlides.length - 1 ? 'Próximo →' : 'Começar agora';
  el.innerHTML = '<div style="text-align:center;padding:10px 0 20px"><div style="font-size:48px;margin-bottom:14px">' + s.icon + '</div><div style="font-family:var(--jk);font-size:17px;font-weight:800;color:var(--n9);margin-bottom:10px">' + s.title + '</div><div style="font-size:13px;color:var(--n5);line-height:1.8;max-width:360px;margin:0 auto 20px">' + s.body + '</div><div style="margin-bottom:20px">' + dots + '</div>' + prev + '<button class="btn btn-p btn-lg" style="min-width:160px" onclick="' + nxtAct + '">' + nxtLbl + '</button></div>';
}

// ═══════════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════════
var USERS = [
  { id: 1, name: 'Dra. Admin Nutriplan', email: 'admin' + '@' + 'dieton.com.br', pw: '123456', role: 'pro', crn: 'CRN-3 54321', av: 'a1', init: 'DA' },
  { id: 2, name: 'Fernanda Lima', email: 'fernanda' + '@' + 'paciente.com', pw: '654321', role: 'pac', av: 'a4', init: 'FL' }
];

// TACO — amostra representativa de 80 alimentos (agrupados por categoria)
var FOOD_DB = [
  // Carnes
  { id: 1, n: 'Frango grelhado (peito)', e: '🍗', cat: 'Carnes', p: 31.5, c: 0, g: 3.6, k: 165, fe: 1.0, ca: 11, vc: 0, va: 18, zn: 1.0, b12: 0.3, fb: 0 },
  { id: 2, n: 'Carne bovina (patinho)', e: '🥩', cat: 'Carnes', p: 28, c: 0, g: 5, k: 163, fe: 2.5, ca: 5, vc: 0, va: 0, zn: 4.2, b12: 2.0, fb: 0 },
  { id: 3, n: 'Salmão grelhado', e: '🐟', cat: 'Peixes', p: 25, c: 0, g: 12, k: 208, fe: 0.8, ca: 12, vc: 0, va: 50, zn: 0.7, b12: 3.2, fb: 0 },
  { id: 4, n: 'Atum em água (lata)', e: '🐟', cat: 'Peixes', p: 26, c: 0, g: 1, k: 117, fe: 1.3, ca: 8, vc: 0, va: 0, zn: 0.6, b12: 2.5, fb: 0 },
  { id: 5, n: 'Tilápia grelhada', e: '🐠', cat: 'Peixes', p: 26, c: 0, g: 2.7, k: 129, fe: 0.6, ca: 13, vc: 0, va: 10, zn: 0.5, b12: 1.8, fb: 0 },
  { id: 6, n: 'Ovo inteiro cozido', e: '🥚', cat: 'Ovos', p: 13, c: 1.1, g: 9.5, k: 143, fe: 1.8, ca: 50, vc: 0, va: 160, zn: 1.1, b12: 1.1, fb: 0 },
  { id: 7, n: 'Clara de ovo', e: '🥚', cat: 'Ovos', p: 11, c: 0.7, g: 0.2, k: 48, fe: 0.1, ca: 7, vc: 0, va: 0, zn: 0.03, b12: 0.1, fb: 0 },
  { id: 8, n: 'Carne suína (lombo)', e: '🥩', cat: 'Carnes', p: 26, c: 0, g: 7, k: 171, fe: 1.0, ca: 10, vc: 0.6, va: 0, zn: 2.0, b12: 0.8, fb: 0 },
  { id: 9, n: 'Frango (coxa/sobrecoxa)', e: '🍗', cat: 'Carnes', p: 24, c: 0, g: 10, k: 190, fe: 1.2, ca: 15, vc: 0, va: 30, zn: 1.4, b12: 0.3, fb: 0 },
  { id: 10, n: 'Sardinha em óleo', e: '🐟', cat: 'Peixes', p: 20, c: 0, g: 14, k: 208, fe: 3.1, ca: 350, vc: 0, va: 40, zn: 1.3, b12: 8.0, fb: 0 },
  // Grãos e cereais
  { id: 11, n: 'Arroz branco cozido', e: '🍚', cat: 'Cereais', p: 2.5, c: 28, g: 0.2, k: 128, fe: 0.3, ca: 5, vc: 0, va: 0, zn: 0.4, b12: 0, fb: 0.4 },
  { id: 12, n: 'Arroz integral cozido', e: '🍚', cat: 'Cereais', p: 2.6, c: 26, g: 0.9, k: 124, fe: 0.5, ca: 10, vc: 0, va: 0, zn: 0.6, b12: 0, fb: 1.8 },
  { id: 13, n: 'Feijão preto cozido', e: '🫘', cat: 'Leguminosas', p: 6.8, c: 14, g: 0.5, k: 77, fe: 1.7, ca: 23, vc: 0, va: 0, zn: 0.8, b12: 0, fb: 6.5 },
  { id: 14, n: 'Feijão carioca cozido', e: '🫘', cat: 'Leguminosas', p: 5.4, c: 13.6, g: 0.4, k: 77, fe: 2.0, ca: 27, vc: 0, va: 0, zn: 0.7, b12: 0, fb: 6.1 },
  { id: 15, n: 'Lentilha cozida', e: '🫘', cat: 'Leguminosas', p: 9, c: 20, g: 0.4, k: 116, fe: 3.3, ca: 19, vc: 1.5, va: 8, zn: 1.3, b12: 0, fb: 7.9 },
  { id: 16, n: 'Grão-de-bico cozido', e: '🫘', cat: 'Leguminosas', p: 8.9, c: 27, g: 2.6, k: 164, fe: 2.9, ca: 49, vc: 1.3, va: 4, zn: 1.5, b12: 0, fb: 7.6 },
  { id: 17, n: 'Aveia em flocos', e: '🌾', cat: 'Cereais', p: 13, c: 66, g: 7, k: 394, fe: 4.7, ca: 54, vc: 0, va: 0, zn: 3.1, b12: 0, fb: 9.1 },
  { id: 18, n: 'Quinoa cozida', e: '🌾', cat: 'Cereais', p: 4.4, c: 21, g: 1.9, k: 120, fe: 1.5, ca: 17, vc: 0, va: 1, zn: 1.1, b12: 0, fb: 2.8 },
  { id: 19, n: 'Macarrão integral cozido', e: '🍝', cat: 'Cereais', p: 4.7, c: 26, g: 0.5, k: 124, fe: 1.1, ca: 14, vc: 0, va: 0, zn: 0.9, b12: 0, fb: 2.5 },
  { id: 20, n: 'Pão integral', e: '🍞', cat: 'Cereais', p: 8, c: 45, g: 3, k: 247, fe: 2.5, ca: 70, vc: 0, va: 0, zn: 1.4, b12: 0, fb: 5.6 },
  { id: 21, n: 'Tapioca (goma)', e: '🫓', cat: 'Cereais', p: 0.3, c: 86, g: 0.1, k: 345, fe: 0.4, ca: 16, vc: 0, va: 0, zn: 0.2, b12: 0, fb: 0 },
  { id: 22, n: 'Batata-doce cozida', e: '🍠', cat: 'Tubérculos', p: 1.4, c: 26, g: 0.1, k: 110, fe: 0.6, ca: 30, vc: 19, va: 961, zn: 0.3, b12: 0, fb: 3.3 },
  { id: 23, n: 'Batata inglesa cozida', e: '🥔', cat: 'Tubérculos', p: 2, c: 17, g: 0.1, k: 77, fe: 0.3, ca: 5, vc: 13, va: 0, zn: 0.3, b12: 0, fb: 1.8 },
  { id: 24, n: 'Mandioca cozida', e: '🧆', cat: 'Tubérculos', p: 0.7, c: 30, g: 0.2, k: 125, fe: 0.3, ca: 18, vc: 13, va: 1, zn: 0.3, b12: 0, fb: 1.8 },
  // Laticínios
  { id: 25, n: 'Leite integral (copo)', e: '🥛', cat: 'Laticínios', p: 3.1, c: 4.8, g: 3.2, k: 61, fe: 0.1, ca: 113, vc: 0.9, va: 46, zn: 0.4, b12: 0.4, fb: 0 },
  { id: 26, n: 'Leite desnatado (copo)', e: '🥛', cat: 'Laticínios', p: 3.4, c: 4.9, g: 0.2, k: 35, fe: 0.1, ca: 120, vc: 0.9, va: 50, zn: 0.4, b12: 0.4, fb: 0 },
  { id: 27, n: 'Iogurte natural integral', e: '🫙', cat: 'Laticínios', p: 3.5, c: 4.7, g: 3, k: 61, fe: 0.1, ca: 121, vc: 0.6, va: 29, zn: 0.5, b12: 0.4, fb: 0 },
  { id: 28, n: 'Iogurte grego integral', e: '🫙', cat: 'Laticínios', p: 9, c: 4, g: 5, k: 97, fe: 0.1, ca: 110, vc: 0, va: 20, zn: 0.5, b12: 0.5, fb: 0 },
  { id: 29, n: 'Queijo cottage', e: '🧀', cat: 'Laticínios', p: 11, c: 3.4, g: 4.3, k: 98, fe: 0.1, ca: 60, vc: 0, va: 45, zn: 0.5, b12: 0.4, fb: 0 },
  { id: 30, n: 'Queijo mussarela', e: '🧀', cat: 'Laticínios', p: 22, c: 2.2, g: 17, k: 253, fe: 0.2, ca: 505, vc: 0, va: 180, zn: 2.9, b12: 0.8, fb: 0 },
  { id: 31, n: 'Queijo ricota', e: '🧀', cat: 'Laticínios', p: 11.3, c: 3, g: 9.5, k: 143, fe: 0.4, ca: 207, vc: 0, va: 120, zn: 1.2, b12: 0.3, fb: 0 },
  { id: 32, n: 'Whey protein (scoop)', e: '💪', cat: 'Suplementos', p: 24, c: 3, g: 1.5, k: 122, fe: 0.2, ca: 100, vc: 0, va: 0, zn: 0.8, b12: 0.5, fb: 0 },
  // Vegetais
  { id: 33, n: 'Brócolis cozido', e: '🥦', cat: 'Vegetais', p: 2.8, c: 4.5, g: 0.4, k: 34, fe: 1.0, ca: 41, vc: 64, va: 96, zn: 0.4, b12: 0, fb: 2.6 },
  { id: 34, n: 'Espinafre cozido', e: '🥬', cat: 'Vegetais', p: 2.9, c: 3.6, g: 0.3, k: 23, fe: 3.6, ca: 136, vc: 17, va: 942, zn: 0.8, b12: 0, fb: 2.4 },
  { id: 35, n: 'Cenoura crua', e: '🥕', cat: 'Vegetais', p: 0.9, c: 9.6, g: 0.2, k: 41, fe: 0.3, ca: 33, vc: 6, va: 835, zn: 0.2, b12: 0, fb: 2.8 },
  { id: 36, n: 'Tomate', e: '🍅', cat: 'Vegetais', p: 0.9, c: 3.9, g: 0.2, k: 18, fe: 0.3, ca: 10, vc: 21, va: 42, zn: 0.2, b12: 0, fb: 1.2 },
  { id: 37, n: 'Abóbora cozida', e: '🎃', cat: 'Vegetais', p: 0.5, c: 7.5, g: 0.1, k: 33, fe: 0.6, ca: 14, vc: 8, va: 426, zn: 0.1, b12: 0, fb: 0.5 },
  { id: 38, n: 'Couve-manteiga crua', e: '🥬', cat: 'Vegetais', p: 1.9, c: 4.9, g: 0.5, k: 32, fe: 0.7, ca: 104, vc: 71, va: 309, zn: 0.2, b12: 0, fb: 2.0 },
  { id: 39, n: 'Abobrinha cozida', e: '🥒', cat: 'Vegetais', p: 1.2, c: 3.5, g: 0.4, k: 22, fe: 0.4, ca: 15, vc: 9, va: 10, zn: 0.3, b12: 0, fb: 1.2 },
  { id: 40, n: 'Pepino', e: '🥒', cat: 'Vegetais', p: 0.7, c: 2.9, g: 0.1, k: 13, fe: 0.3, ca: 14, vc: 3, va: 5, zn: 0.2, b12: 0, fb: 0.5 },
  { id: 41, n: 'Alface', e: '🥗', cat: 'Vegetais', p: 1.4, c: 2.2, g: 0.2, k: 15, fe: 0.4, ca: 35, vc: 18, va: 370, zn: 0.2, b12: 0, fb: 2.1 },
  { id: 42, n: 'Beterraba cozida', e: '🫀', cat: 'Vegetais', p: 1.9, c: 10, g: 0.1, k: 46, fe: 0.8, ca: 16, vc: 4, va: 2, zn: 0.4, b12: 0, fb: 2.0 },
  { id: 43, n: 'Chuchu cozido', e: '🥦', cat: 'Vegetais', p: 0.8, c: 3.8, g: 0.1, k: 20, fe: 0.4, ca: 13, vc: 7, va: 4, zn: 0.2, b12: 0, fb: 1.7 },
  { id: 44, n: 'Repolho cru', e: '🥬', cat: 'Vegetais', p: 1.4, c: 5.8, g: 0.1, k: 28, fe: 0.5, ca: 40, vc: 51, va: 5, zn: 0.2, b12: 0, fb: 2.5 },
  { id: 45, n: 'Vagem cozida', e: '🫘', cat: 'Vegetais', p: 1.8, c: 6.1, g: 0.3, k: 31, fe: 0.7, ca: 37, vc: 12, va: 41, zn: 0.2, b12: 0, fb: 2.7 },
  // Frutas
  { id: 46, n: 'Banana prata', e: '🍌', cat: 'Frutas', p: 1.4, c: 26, g: 0.1, k: 110, fe: 0.4, ca: 8, vc: 22, va: 5, zn: 0.2, b12: 0, fb: 2.0 },
  { id: 47, n: 'Maçã fuji', e: '🍎', cat: 'Frutas', p: 0.3, c: 13.8, g: 0.4, k: 57, fe: 0.1, ca: 4, vc: 5, va: 3, zn: 0.05, b12: 0, fb: 1.3 },
  { id: 48, n: 'Laranja pera', e: '🍊', cat: 'Frutas', p: 0.8, c: 11.5, g: 0.1, k: 47, fe: 0.3, ca: 22, vc: 53, va: 11, zn: 0.1, b12: 0, fb: 1.1 },
  { id: 49, n: 'Mamão papaia', e: '🍈', cat: 'Frutas', p: 0.5, c: 10.4, g: 0.1, k: 46, fe: 0.4, ca: 20, vc: 73, va: 47, zn: 0.1, b12: 0, fb: 1.8 },
  { id: 50, n: 'Manga', e: '🥭', cat: 'Frutas', p: 0.4, c: 14.9, g: 0.2, k: 64, fe: 0.2, ca: 9, vc: 36, va: 38, zn: 0.1, b12: 0, fb: 1.6 },
  { id: 51, n: 'Uva Itália', e: '🍇', cat: 'Frutas', p: 0.7, c: 17.3, g: 0.5, k: 79, fe: 0.3, ca: 9, vc: 7, va: 3, zn: 0.1, b12: 0, fb: 0.9 },
  { id: 52, n: 'Morango', e: '🍓', cat: 'Frutas', p: 0.8, c: 7.7, g: 0.3, k: 34, fe: 0.4, ca: 16, vc: 68, va: 1, zn: 0.2, b12: 0, fb: 2.3 },
  { id: 53, n: 'Melancia', e: '🍉', cat: 'Frutas', p: 0.6, c: 7.4, g: 0.1, k: 33, fe: 0.2, ca: 8, vc: 7, va: 28, zn: 0.1, b12: 0, fb: 0.4 },
  { id: 54, n: 'Abacate', e: '🥑', cat: 'Frutas', p: 1.2, c: 8.5, g: 14.6, k: 168, fe: 0.6, ca: 13, vc: 10, va: 7, zn: 0.6, b12: 0, fb: 6.7 },
  { id: 55, n: 'Kiwi', e: '🥝', cat: 'Frutas', p: 1.1, c: 15.8, g: 0.6, k: 64, fe: 0.3, ca: 34, vc: 93, va: 4, zn: 0.1, b12: 0, fb: 2.1 },
  // Gorduras e oleaginosas
  { id: 56, n: 'Azeite de oliva (col.)', e: '🫒', cat: 'Gorduras', p: 0, c: 0, g: 14, k: 119, fe: 0.1, ca: 1, vc: 0, va: 0, zn: 0, b12: 0, fb: 0 },
  { id: 57, n: 'Amendoim torrado', e: '🥜', cat: 'Oleaginosas', p: 25.8, c: 20.1, g: 44.2, k: 567, fe: 2.0, ca: 54, vc: 0, va: 0, zn: 3.3, b12: 0, fb: 8.5 },
  { id: 58, n: 'Castanha-do-pará', e: '🌰', cat: 'Oleaginosas', p: 14, c: 12, g: 61, k: 643, fe: 2.4, ca: 160, vc: 0.7, va: 0, zn: 4.1, b12: 0, fb: 7.5 },
  { id: 59, n: 'Amêndoas', e: '🌰', cat: 'Oleaginosas', p: 21, c: 22, g: 49, k: 579, fe: 3.7, ca: 264, vc: 0, va: 0, zn: 3.1, b12: 0, fb: 12.5 },
  { id: 60, n: 'Nozes', e: '🌰', cat: 'Oleaginosas', p: 15, c: 14, g: 65, k: 654, fe: 2.9, ca: 98, vc: 1.3, va: 0, zn: 3.1, b12: 0, fb: 6.7 },
  { id: 61, n: 'Pasta de amendoim (col.)', e: '🥜', cat: 'Gorduras', p: 7, c: 6, g: 16, k: 188, fe: 0.6, ca: 17, vc: 0, va: 0, zn: 0.9, b12: 0, fb: 1.9 },
  { id: 62, n: 'Coco ralado seco', e: '🥥', cat: 'Oleaginosas', p: 2.7, c: 6.4, g: 36, k: 354, fe: 2.4, ca: 14, vc: 1.5, va: 0, zn: 0.9, b12: 0, fb: 9.0 },
  // Laticínios adicionais
  { id: 63, n: 'Requeijão cremoso (col.)', e: '🧀', cat: 'Laticínios', p: 1.8, c: 1.8, g: 7.5, k: 84, fe: 0.1, ca: 32, vc: 0, va: 55, zn: 0.3, b12: 0.2, fb: 0 },
  // Bebidas
  { id: 64, n: 'Leite de amêndoas (copo)', e: '🥛', cat: 'Bebidas', p: 1.5, c: 3, g: 3, k: 42, fe: 0.7, ca: 188, vc: 0, va: 75, zn: 0.1, b12: 0, fb: 0.5 },
  { id: 65, n: 'Suco de laranja (natural)', e: '🍊', cat: 'Bebidas', p: 0.7, c: 10.4, g: 0.2, k: 45, fe: 0.2, ca: 11, vc: 50, va: 10, zn: 0.1, b12: 0, fb: 0.2 },
  // Outros
  { id: 66, n: 'Mel (col.)', e: '🍯', cat: 'Outros', p: 0.3, c: 17, g: 0, k: 64, fe: 0.1, ca: 2, vc: 0.1, va: 0, zn: 0.1, b12: 0, fb: 0 },
  { id: 67, n: 'Linhaça (col.)', e: '🌿', cat: 'Sementes', p: 1.5, c: 2.5, g: 3.5, k: 46, fe: 0.5, ca: 25, vc: 0.1, va: 0, zn: 0.5, b12: 0, fb: 2.5 },
  { id: 68, n: 'Chia (col.)', e: '🌿', cat: 'Sementes', p: 1.7, c: 3.7, g: 2.9, k: 46, fe: 1.0, ca: 92, vc: 0.4, va: 1, zn: 0.5, b12: 0, fb: 3.9 },
  { id: 69, n: 'Inhame cozido', e: '🧆', cat: 'Tubérculos', p: 1.5, c: 24, g: 0.1, k: 102, fe: 0.5, ca: 17, vc: 17, va: 7, zn: 0.2, b12: 0, fb: 4.1 },
  { id: 70, n: 'Ervilha cozida', e: '🫘', cat: 'Leguminosas', p: 5.2, c: 14, g: 0.3, k: 80, fe: 1.5, ca: 25, vc: 14, va: 38, zn: 1.2, b12: 0, fb: 5.1 },
  { id: 71, n: 'Edamame', e: '🫘', cat: 'Leguminosas', p: 11.9, c: 8.9, g: 5.2, k: 122, fe: 2.3, ca: 63, vc: 9, va: 8, zn: 1.4, b12: 0, fb: 5.2 },
  { id: 72, n: 'Tofu firme', e: '🧊', cat: 'Proteínas', p: 8, c: 2, g: 4.5, k: 76, fe: 1.8, ca: 201, vc: 0, va: 0, zn: 0.8, b12: 0, fb: 0.3 },
  { id: 73, n: 'Tempeh', e: '🧆', cat: 'Proteínas', p: 19, c: 9, g: 11, k: 193, fe: 2.7, ca: 111, vc: 0, va: 0, zn: 1.7, b12: 0, fb: 0 },
  { id: 74, n: 'Pão de forma branco', e: '🍞', cat: 'Cereais', p: 7.8, c: 50, g: 3, k: 264, fe: 2.2, ca: 35, vc: 0, va: 0, zn: 0.7, b12: 0, fb: 2.0 },
  { id: 75, n: 'Biscoito de arroz', e: '🍘', cat: 'Cereais', p: 2, c: 20, g: 0.5, k: 92, fe: 0.2, ca: 4, vc: 0, va: 0, zn: 0.3, b12: 0, fb: 0.4 },
  { id: 76, n: 'Proteína texturizada de soja (PTS)', e: '💪', cat: 'Proteínas', p: 52, c: 30, g: 1, k: 341, fe: 9.6, ca: 276, vc: 0, va: 0, zn: 2.5, b12: 0, fb: 17 },
  { id: 77, n: 'Canjiquinha cozida', e: '🌽', cat: 'Cereais', p: 2.0, c: 26, g: 0.6, k: 118, fe: 0.4, ca: 5, vc: 0, va: 0, zn: 0.4, b12: 0, fb: 2.2 },
  { id: 78, n: 'Farinha de aveia (col.)', e: '🌾', cat: 'Cereais', p: 2.2, c: 11, g: 1.2, k: 66, fe: 0.8, ca: 9, vc: 0, va: 0, zn: 0.5, b12: 0, fb: 1.5 },
  { id: 79, n: 'Couve-flor cozida', e: '🥦', cat: 'Vegetais', p: 2.1, c: 3.5, g: 0.2, k: 22, fe: 0.3, ca: 16, vc: 46, va: 1, zn: 0.2, b12: 0, fb: 2.0 },
  { id: 80, n: 'Berinjela cozida', e: '🍆', cat: 'Vegetais', p: 0.8, c: 5.5, g: 0.2, k: 26, fe: 0.2, ca: 6, vc: 1.5, va: 1, zn: 0.2, b12: 0, fb: 2.5 }
];

var SUBS = {
  'Frango grelhado (peito)': [{ n: 'Peru grelhado', e: '🦃' }, { n: 'Tofu firme', e: '🧊' }, { n: 'Atum em água (lata)', e: '🐟' }, { n: 'Clara de ovo', e: '🥚' }, { n: 'Tempeh', e: '🧆' }],
  'Arroz branco cozido': [{ n: 'Arroz integral cozido', e: '🍚' }, { n: 'Quinoa cozida', e: '🌾' }, { n: 'Batata-doce cozida', e: '🍠' }, { n: 'Canjiquinha cozida', e: '🌽' }, { n: 'Macarrão integral cozido', e: '🍝' }],
  'Feijão preto cozido': [{ n: 'Feijão carioca cozido', e: '🫘' }, { n: 'Lentilha cozida', e: '🫘' }, { n: 'Grão-de-bico cozido', e: '🫘' }, { n: 'Ervilha cozida', e: '🫘' }],
  'Leite integral (copo)': [{ n: 'Leite desnatado (copo)', e: '🥛' }, { n: 'Iogurte natural integral', e: '🫙' }, { n: 'Leite de amêndoas (copo)', e: '🥛' }],
  'Iogurte natural integral': [{ n: 'Iogurte grego integral', e: '🫙' }, { n: 'Leite integral (copo)', e: '🥛' }, { n: 'Queijo cottage', e: '🧀' }],
  'Banana prata': [{ n: 'Maçã fuji', e: '🍎' }, { n: 'Mamão papaia', e: '🍈' }, { n: 'Manga', e: '🥭' }, { n: 'Morango', e: '🍓' }],
  'Aveia em flocos': [{ n: 'Farinha de aveia (col.)', e: '🌾' }, { n: 'Quinoa cozida', e: '🌾' }, { n: 'Granola natural', e: '🌾' }],
  'Azeite de oliva (col.)': [{ n: 'Abacate', e: '🥑' }, { n: 'Castanha-do-pará', e: '🌰' }, { n: 'Pasta de amendoim (col.)', e: '🥜' }]
};

var RDA = { fe: { n: 'Ferro', un: 'mg', ref: 14, ico: '🩸' }, ca: { n: 'Cálcio', un: 'mg', ref: 1000, ico: '🦴' }, vc: { n: 'Vit C', un: 'mg', ref: 75, ico: '🍊' }, va: { n: 'Vit A', un: 'µg', ref: 700, ico: '🥕' }, zn: { n: 'Zinco', un: 'mg', ref: 8, ico: '💊' }, b12: { n: 'Vit B12', un: 'µg', ref: 2.4, ico: '⚡' }, fb: { n: 'Fibras', un: 'g', ref: 25, ico: '🌿' } };

// MEAL TEMPLATES
var TEMPLATES = [
  {
    id: 1, name: 'Emagrecimento 1600kcal', desc: 'Déficit calórico moderado, alto teor proteico, baixo carboidrato', kcal: 1600, meals: [
      { name: 'Café da manhã', em: '☀️', items: [{ fid: 17, qty: 40 }, { fid: 27, qty: 150 }, { fid: 55, qty: 100 }] },
      { name: 'Almoço', em: '🍽️', items: [{ fid: 1, qty: 120 }, { fid: 12, qty: 80 }, { fid: 14, qty: 80 }, { fid: 33, qty: 80 }] },
      { name: 'Lanche', em: '🥛', items: [{ fid: 28, qty: 150 }, { fid: 47, qty: 120 }] },
      { name: 'Jantar', em: '🌙', items: [{ fid: 3, qty: 120 }, { fid: 39, qty: 100 }, { fid: 22, qty: 100 }] },
      { name: 'Ceia', em: '🌙', items: [{ fid: 7, qty: 60 }] }
    ]
  },
  {
    id: 2, name: 'Hipertrofia 2800kcal', desc: 'Superávit calórico, alta proteína, carboidratos estratégicos', kcal: 2800, meals: [
      { name: 'Café da manhã', em: '☀️', items: [{ fid: 6, qty: 150 }, { fid: 17, qty: 60 }, { fid: 46, qty: 120 }, { fid: 27, qty: 200 }] },
      { name: 'Pré-treino', em: '⚡', items: [{ fid: 22, qty: 150 }, { fid: 32, qty: 30 }] },
      { name: 'Almoço', em: '🍽️', items: [{ fid: 2, qty: 180 }, { fid: 11, qty: 120 }, { fid: 13, qty: 100 }, { fid: 35, qty: 80 }] },
      { name: 'Pós-treino', em: '💪', items: [{ fid: 32, qty: 40 }, { fid: 46, qty: 100 }] },
      { name: 'Jantar', em: '🌙', items: [{ fid: 1, qty: 150 }, { fid: 18, qty: 80 }, { fid: 33, qty: 80 }] },
      { name: 'Ceia', em: '🌙', items: [{ fid: 29, qty: 100 }, { fid: 68, qty: 15 }] }
    ]
  },
  {
    id: 3, name: 'Manutenção saudável', desc: 'Equilíbrio entre macros, foco em micronutrientes e fibras', kcal: 2000, meals: [
      { name: 'Café da manhã', em: '☀️', items: [{ fid: 17, qty: 40 }, { fid: 27, qty: 150 }, { fid: 47, qty: 150 }] },
      { name: 'Almoço', em: '🍽️', items: [{ fid: 1, qty: 100 }, { fid: 11, qty: 80 }, { fid: 14, qty: 80 }, { fid: 33, qty: 60 }, { fid: 36, qty: 60 }] },
      { name: 'Lanche', em: '🥛', items: [{ fid: 28, qty: 150 }, { fid: 57, qty: 25 }] },
      { name: 'Jantar', em: '🌙', items: [{ fid: 3, qty: 120 }, { fid: 12, qty: 80 }, { fid: 42, qty: 80 }] },
      { name: 'Ceia', em: '🌙', items: [{ fid: 29, qty: 80 }] }
    ]
  }
];

// PATIENTS
var pats = [];
var demo_pats_old = [
  {
    id: 1, n: 'Fernanda Lima', age: 28, sex: 'F', w: 68.4, h: 165, bmi: 25.1, fat: 28, wStart: 75, goal: 'Emagrecimento', cond: 'SOP, resistência à insulina', alerg: 'Glúten', agua: 1.8, prog: 72, last: '12/02/2026', av: 'a4', i: 'FL', st: 'tg', stxt: 'Em dia', exams: { gli: 98, col: 185, vitd: 24, hem: 12.1, fer: 22, tgo: 18, tgp: 22, tsh: 2.1 }, historico: [
      { data: '05/03/2026', peso: 68.4, imc: 25.1, cintura: 82, fat: 28.0, obs: 'Progresso consistente' },
      { data: '05/02/2026', peso: 70.1, imc: 25.8, cintura: 84, fat: 29.2, obs: 'Boa adesão ao plano' },
      { data: '05/01/2026', peso: 71.8, imc: 26.4, cintura: 86, fat: 30.1, obs: 'Início do programa' },
      { data: '05/12/2025', peso: 73.2, imc: 26.9, cintura: 88, fat: 31.3, obs: 'Avaliação inicial' },
      { data: '05/11/2025', peso: 75.0, imc: 27.6, cintura: 90, fat: 32.5, obs: 'Cadastro' }
    ], diary: [
      { data: '05/03/2026', refeicoes: [{ n: 'Café da manhã', items: ['Aveia 40g', 'Iogurte grego 150g', 'Morango 100g'], k: 380 }, { n: 'Almoço', items: ['Frango 120g', 'Arroz integral 80g', 'Feijão 80g', 'Salada verde'], k: 520 }, { n: 'Lanche', items: ['Iogurte grego 150g', 'Kiwi 80g'], k: 210 }, { n: 'Jantar', items: ['Salmão 120g', 'Batata-doce 100g', 'Brócolis 80g'], k: 430 }], total: 1540 },
      { data: '04/03/2026', refeicoes: [{ n: 'Café da manhã', items: ['Ovos mexidos 2un', 'Pão integral 1 fatia', 'Café preto'], k: 310 }, { n: 'Almoço', items: ['Frango 120g', 'Arroz 80g', 'Feijão 80g', 'Salada'], k: 510 }, { n: 'Lanche', items: ['Banana 1un', 'Pasta amendoim 1col'], k: 290 }, { n: 'Jantar', items: ['Tilápia 120g', 'Abobrinha refogada', 'Tomate'], k: 280 }], total: 1390 }
    ], plans: []
  },
  {
    id: 2, n: 'Carlos Mendes', age: 35, sex: 'M', w: 88.2, h: 178, bmi: 27.8, fat: 22, wStart: 90, goal: 'Hipertrofia', cond: 'Saudável', alerg: '', agua: 2.5, prog: 55, last: '29/01/2026', av: 'a3', i: 'CM', st: 'ty', stxt: 'Pendente', exams: { gli: 92, col: 170, vitd: 35, hem: 15.2, fer: 85, tgo: 22, tgp: 28, tsh: 1.8 }, historico: [
      { data: '05/03/2026', peso: 88.2, imc: 27.8, cintura: 90, fat: 22.0, obs: 'Ganho de massa' },
      { data: '05/01/2026', peso: 88.5, imc: 27.9, cintura: 91, fat: 22.8, obs: 'Início do programa' }
    ], diary: [], plans: [], appointments: []
  },
  {
    id: 3, n: 'Ana Rodrigues', age: 42, sex: 'F', w: 72.0, h: 162, bmi: 27.4, fat: 32, wStart: 78, goal: 'Saúde geral', cond: 'Hipertensão leve', alerg: '', agua: 2.0, prog: 88, last: '02/03/2026', av: 'a2', i: 'AR', st: 'tg', stxt: 'Em dia', exams: { gli: 105, col: 210, vitd: 28, hem: 13.0, fer: 40, tgo: 25, tgp: 30, tsh: 3.2 }, historico: [
      { data: '02/03/2026', peso: 72.0, imc: 27.4, cintura: 86, fat: 32, obs: 'Melhorou pressão' },
      { data: '02/01/2026', peso: 74.5, imc: 28.4, cintura: 89, fat: 33.5, obs: 'Início do protocolo' }
    ], diary: [], plans: [], appointments: []
  },
  {
    id: 4, n: 'Pedro Alves', age: 19, sex: 'M', w: 75.0, h: 182, bmi: 22.6, fat: 14, wStart: 72, goal: 'Hipertrofia', cond: 'Saudável', alerg: '', agua: 3.0, prog: 40, last: '10/01/2026', av: 'a5', i: 'PA', st: 'tr', stxt: 'Alerta', exams: { gli: 88, col: 145, vitd: 42, hem: 15.8, fer: 95, tgo: 18, tgp: 20, tsh: 1.5 }, historico: [
      { data: '10/01/2026', peso: 75.0, imc: 22.6, cintura: 78, fat: 14, obs: 'Boa disposição' }
    ], diary: [], plans: [], appointments: []
  },
  {
    id: 5, n: 'Maria Santos', age: 55, sex: 'F', w: 65.0, h: 158, bmi: 26.0, fat: 36, wStart: 68, goal: 'Saúde geral', cond: 'Diabetes tipo 2, dislipidemia', alerg: 'Lactose', agua: 1.5, prog: 65, last: '25/02/2026', av: 'a6', i: 'MS', st: 'ty', stxt: 'Atenção', exams: { gli: 142, col: 230, vitd: 18, hem: 11.5, fer: 15, tgo: 28, tgp: 35, tsh: 4.8 }, historico: [
      { data: '25/02/2026', peso: 65.0, imc: 26.0, cintura: 88, fat: 36, obs: 'Glicemia controlando' },
      { data: '25/01/2026', peso: 66.2, imc: 26.5, cintura: 89, fat: 37, obs: 'Início do protocolo' }
    ], diary: [], plans: [], appointments: []
  },
  {
    id: 6, n: 'João Costa', age: 48, sex: 'M', w: 95.0, h: 175, bmi: 31.0, fat: 28, wStart: 97, goal: 'Emagrecimento', cond: 'Apneia do sono', alerg: '', agua: 2.2, prog: 30, last: '15/02/2026', av: 'a7', i: 'JC', st: 'ty', stxt: 'Atenção', exams: { gli: 110, col: 195, vitd: 22, hem: 15.0, fer: 70, tgo: 32, tgp: 40, tsh: 2.8 }, historico: [
      { data: '15/02/2026', peso: 95.0, imc: 31.0, cintura: 105, fat: 28, obs: 'Início do programa' }
    ], diary: [], plans: [], appointments: []
  },
  {
    id: 7, n: 'Lucia Ferreira', age: 31, sex: 'F', w: 58.0, h: 160, bmi: 22.7, fat: 24, wStart: 60, goal: 'Manutenção', cond: 'Ansiedade', alerg: '', agua: 2.0, prog: 90, last: '28/02/2026', av: 'a8', i: 'LF', st: 'tg', stxt: 'Em dia', exams: { gli: 85, col: 165, vitd: 38, hem: 12.8, fer: 35, tgo: 20, tgp: 18, tsh: 1.9 }, historico: [
      { data: '28/02/2026', peso: 58.0, imc: 22.7, cintura: 72, fat: 24, obs: 'Mantendo bem' }
    ], diary: [], plans: [], appointments: []
  },
  {
    id: 8, n: 'Roberto Lima', age: 62, sex: 'M', w: 78.0, h: 170, bmi: 27.0, fat: 25, wStart: 80, goal: 'Saúde geral', cond: 'Artrite, colesterol alto', alerg: 'Amendoim', agua: 1.8, prog: 78, last: '01/03/2026', av: 'a1', i: 'RL', st: 'tg', stxt: 'Em dia', exams: { gli: 95, col: 245, vitd: 20, hem: 14.2, fer: 60, tgo: 24, tgp: 26, tsh: 2.5 }, historico: [
      { data: '01/03/2026', peso: 78.0, imc: 27.0, cintura: 94, fat: 25, obs: 'Colesterol melhorou' },
      { data: '01/01/2026', peso: 80.0, imc: 27.7, cintura: 97, fat: 26, obs: 'Início do protocolo' }
    ], diary: [], plans: [], appointments: []
  },
  {
    id: 9, n: 'Bianca Souza', age: 26, sex: 'F', w: 54.0, h: 163, bmi: 20.3, fat: 20, wStart: 54, goal: 'Hipertrofia', cond: 'Amenorréia funcional', alerg: '', agua: 2.2, prog: 62, last: '03/03/2026', av: 'a2', i: 'BS', st: 'tg', stxt: 'Em dia',
    anamnese: { sono: 6.5, agua: 2.2, intestino: 'Normal (1×/dia)', tabagismo: 'Não', stress: 'Alto', ativ: 'Muito ativo', treino: '5×/semana — musculação', historico_dieta: 'Passou por período restritivo, agora em recuperação', queixas: 'Cansaço após treinos, cabelo fraco', meds: 'Suplemento ferro', pref: 'Dieta com bastante proteína, não gosta de peixe' },
    exams: { gli: 82, col: 155, vitd: 32, hem: 11.8, fer: 18, tgo: 18, tgp: 20, tsh: 2.1 }, historico: [
      { data: '03/03/2026', peso: 54.0, imc: 20.3, cintura: 68, fat: 20, obs: 'Boa evolução' },
      { data: '03/01/2026', peso: 53.0, imc: 19.9, cintura: 67, fat: 19.5, obs: 'Início do protocolo' }
    ], diary: [], plans: [], appointments: []
  },
  {
    id: 10, n: 'Tomás Vieira', age: 44, sex: 'M', w: 102.0, h: 180, bmi: 31.5, fat: 30, wStart: 106, goal: 'Emagrecimento', cond: 'Síndrome metabólica, resistência insulínica', alerg: 'Frutos do mar', agua: 1.5, prog: 45, last: '28/02/2026', av: 'a3', i: 'TV', st: 'ty', stxt: 'Atenção',
    anamnese: { sono: 5.5, agua: 1.5, intestino: 'Irregular', tabagismo: 'Ex-fumante', stress: 'Muito alto', ativ: 'Sedentário', treino: 'Caminhada 2×/semana', historico_dieta: 'Diversas dietas com efeito sanfona, nunca sustentou por mais de 3 meses', queixas: 'Fadiga, refluxo, ronco', meds: 'Metformina 850mg, Omeprazol 20mg', pref: 'Prefere almoço tradicional, não consegue jantar cedo' },
    exams: { gli: 128, col: 220, vitd: 15, hem: 15.5, fer: 90, tgo: 45, tgp: 52, tsh: 3.5 }, historico: [
      { data: '28/02/2026', peso: 102.0, imc: 31.5, cintura: 110, fat: 30, obs: 'Iniciou atividade' },
      { data: '28/01/2026', peso: 104.0, imc: 32.1, cintura: 112, fat: 31, obs: 'Início do protocolo' },
      { data: '28/12/2025', peso: 106.0, imc: 32.7, cintura: 114, fat: 32, obs: 'Avaliação inicial' }
    ], diary: [], plans: [], appointments: []
  },
  {
    id: 11, n: 'Isabela Nunes', age: 33, sex: 'F', w: 61.0, h: 165, bmi: 22.4, fat: 26, wStart: 61, goal: 'Saúde geral', cond: 'SOP, hipotireoidismo subclínico', alerg: 'Glúten', agua: 2.5, prog: 80, last: '04/03/2026', av: 'a6', i: 'IN', st: 'tg', stxt: 'Em dia',
    anamnese: { sono: 7, agua: 2.5, intestino: 'Normal (1×/dia)', tabagismo: 'Não', stress: 'Moderado', ativ: 'Moderadamente ativo', treino: 'Yoga + caminhada 3×/sem', historico_dieta: 'Dieta sem glúten há 2 anos, melhora dos sintomas', queixas: 'Irregular menstrual, inchaço abdominal, queda de cabelo', meds: 'Levotiroxina 50mcg, Mio-inositol 2g', pref: 'Come fora no almoço, prefere jantares práticos' },
    exams: { gli: 95, col: 185, vitd: 24, hem: 12.5, fer: 28, tgo: 22, tgp: 25, tsh: 4.2 }, historico: [
      { data: '04/03/2026', peso: 61.0, imc: 22.4, cintura: 75, fat: 26, obs: 'TSH melhorou' },
      { data: '04/01/2026', peso: 62.0, imc: 22.8, cintura: 77, fat: 27, obs: 'Início do protocolo' }
    ], diary: [], plans: [], appointments: []
  },
  {
    id: 12, n: 'Gustavo Prado', age: 17, sex: 'M', w: 68.0, h: 175, bmi: 22.2, fat: 15, wStart: 64, goal: 'Hipertrofia', cond: 'Saudável', alerg: '', agua: 2.8, prog: 70, last: '02/03/2026', av: 'a5', i: 'GP', st: 'tg', stxt: 'Em dia',
    anamnese: { sono: 8, agua: 2.8, intestino: 'Normal (1×/dia)', tabagismo: 'Não', stress: 'Baixo', ativ: 'Muito ativo', treino: 'Musculação 4×/semana + futebol', historico_dieta: 'Sem histórico de dieta, come bastante mas não seletivo', queixas: 'Quer ganhar massa mas sem gordura', meds: 'Nenhum', pref: 'Come na escola, precisa de lanches práticos' },
    exams: { gli: 85, col: 148, vitd: 45, hem: 16.0, fer: 100, tgo: 16, tgp: 18, tsh: 1.6 }, historico: [
      { data: '02/03/2026', peso: 68.0, imc: 22.2, cintura: 80, fat: 15, obs: 'Bom ganho muscular' },
      { data: '02/01/2026', peso: 64.0, imc: 20.9, cintura: 78, fat: 14, obs: 'Início do protocolo' }
    ], diary: [], plans: [], appointments: []
  }
];

var WEEK = [
  { n: 'Domingo', meals: [{ n: 'Café', items: [{ e: '🌾', n: 'Aveia', k: 160 }, { e: '🫙', n: 'Iogurte grego', k: 97 }] }, { n: 'Almoço', items: [{ e: '🍗', n: 'Frango grelhado', k: 200 }, { e: '🍚', n: 'Arroz integral', k: 125 }, { e: '🫘', n: 'Feijão', k: 77 }, { e: '🥦', n: 'Brócolis', k: 35 }] }, { n: 'Jantar', items: [{ e: '🥚', n: 'Omelete', k: 200 }, { e: '🥗', n: 'Salada mista', k: 45 }] }] },
  { n: 'Segunda', meals: [{ n: 'Café', items: [{ e: '🍞', n: 'Pão integral', k: 124 }, { e: '🥚', n: 'Ovo cozido', k: 143 }, { e: '🍎', n: 'Maçã', k: 57 }] }, { n: 'Almoço', items: [{ e: '🥩', n: 'Patinho grelhado', k: 163 }, { e: '🍚', n: 'Arroz integral', k: 125 }, { e: '🫘', n: 'Feijão carioca', k: 77 }, { e: '🥕', n: 'Cenoura refogada', k: 41 }] }, { n: 'Lanche', items: [{ e: '🫙', n: 'Iogurte grego', k: 97 }] }, { n: 'Jantar', items: [{ e: '🐟', n: 'Atum c/ legumes', k: 180 }] }] },
  { n: 'Terça', meals: [{ n: 'Café', items: [{ e: '🌾', n: 'Aveia com banana', k: 200 }, { e: '🥛', n: 'Leite desnatado', k: 70 }] }, { n: 'Almoço', items: [{ e: '🍗', n: 'Frango grelhado', k: 200 }, { e: '🍝', n: 'Macarrão integral', k: 124 }, { e: '🥦', n: 'Salada verde', k: 30 }] }, { n: 'Lanche', items: [{ e: '🌰', n: 'Castanha-do-pará 2un', k: 65 }] }, { n: 'Jantar', items: [{ e: '🐠', n: 'Tilápia grelhada', k: 129 }, { e: '🍠', n: 'Batata-doce', k: 110 }] }] },
  { n: 'Quarta', meals: [{ n: 'Café', items: [{ e: '🫓', n: 'Tapioca recheada', k: 220 }, { e: '🫙', n: 'Iogurte', k: 97 }] }, { n: 'Almoço', items: [{ e: '🥩', n: 'Carne bovina', k: 163 }, { e: '🍚', n: 'Arroz', k: 128 }, { e: '🫘', n: 'Lentilha', k: 116 }, { e: '🍅', n: 'Salada', k: 25 }] }, { n: 'Lanche', items: [{ e: '🍓', n: 'Frutas mistas', k: 70 }] }, { n: 'Jantar', items: [{ e: '🍗', n: 'Frango desfiado', k: 180 }, { e: '🥦', n: 'Legumes no vapor', k: 50 }] }] },
  { n: 'Quinta', meals: [{ n: 'Café', items: [{ e: '🌾', n: 'Aveia', k: 160 }, { e: '🥚', n: 'Ovos mexidos', k: 143 }] }, { n: 'Almoço', items: [{ e: '🐟', n: 'Salmão', k: 208 }, { e: '🌾', n: 'Quinoa', k: 120 }, { e: '🥬', n: 'Espinafre refogado', k: 23 }] }, { n: 'Lanche', items: [{ e: '🧀', n: 'Queijo cottage', k: 98 }, { e: '🍎', n: 'Maçã', k: 57 }] }, { n: 'Jantar', items: [{ e: '🥚', n: 'Omelete de claras', k: 120 }, { e: '🫀', n: 'Beterraba', k: 46 }] }] },
  { n: 'Sexta', meals: [{ n: 'Café', items: [{ e: '🍞', n: 'Pão integral', k: 124 }, { e: '🥑', n: 'Abacate', k: 160 }, { e: '☕', n: 'Café s/ açúcar', k: 5 }] }, { n: 'Almoço', items: [{ e: '🍗', n: 'Frango grelhado', k: 200 }, { e: '🍚', n: 'Arroz integral', k: 125 }, { e: '🫘', n: 'Feijão preto', k: 77 }, { e: '🥗', n: 'Salada', k: 30 }] }, { n: 'Lanche', items: [{ e: '🥜', n: 'Mix de oleaginosas', k: 180 }] }, { n: 'Jantar', items: [{ e: '🥩', n: 'Patinho grelhado', k: 163 }, { e: '🥔', n: 'Batata cozida', k: 77 }] }] },
  { n: 'Sábado', meals: [{ n: 'Café', items: [{ e: '🌾', n: 'Granola', k: 200 }, { e: '🥛', n: 'Leite', k: 61 }, { e: '🍌', n: 'Banana', k: 110 }] }, { n: 'Almoço', items: [{ e: '🍗', n: 'Frango assado', k: 200 }, { e: '🍚', n: 'Arroz', k: 128 }, { e: '🫘', n: 'Feijão', k: 77 }, { e: '🥕', n: 'Legumes variados', k: 60 }] }, { n: 'Lanche', items: [{ e: '🍊', n: 'Laranja', k: 47 }] }, { n: 'Jantar', items: [{ e: '🐟', n: 'Peixe grelhado', k: 170 }, { e: '🥗', n: 'Salada completa', k: 80 }] }] }
];

// ─── STATE ───
var cu = null, selPat = null, meals = [], taskCt = 10, prescGoal = 0, mP = 0, mC = 0, mF = 0, macroMode = 'gkg', formula = 'mf';
var templates = [...TEMPLATES], notifs = [];
var tasks = [
  { id: 1, text: 'Beber 2L de água por dia', cat: 's', done: true },
  { id: 2, text: 'Tomar suplemento de Vitamina D', cat: 'u', done: false },
  { id: 3, text: 'Fazer exame de glicemia em jejum', cat: 'e', done: false },
  { id: 4, text: 'Registrar diário alimentar', cat: 'g', done: true },
  { id: 5, text: 'Praticar caminhada 30min', cat: 's', done: false }
];
function initMeals(src) {
  if (src) {
    meals = src.map(function (m) { return { name: m.name, em: m.em || '🍽️', items: m.items.map(function (it) { var f = FOOD_DB.find(function (x) { return x.id === it.fid }); if (!f) return null; var factor = it.qty / 100; return { food: f, qty: it.qty, k: Math.round(f.k * factor), p: +(f.p * factor).toFixed(1), c: +(f.c * factor).toFixed(1), g: +(f.g * factor).toFixed(1) }; }).filter(Boolean) }; });
  } else {
    meals = [
      { name: 'Café da manhã', em: '☀️', items: [] },
      { name: 'Almoço', em: '🍽️', items: [] },
      { name: 'Lanche da tarde', em: '🥛', items: [] },
      { name: 'Jantar', em: '🌙', items: [] },
      { name: 'Ceia', em: '🌙', items: [] }
    ];
  }
}
initMeals();

// ─── AUTH ───
function lTab(t) {
  document.getElementById('f-in').style.display = t === 'in' ? 'block' : 'none';
  document.getElementById('f-up').style.display = t === 'up' ? 'block' : 'none';
  document.getElementById('t-in').classList.toggle('on', t === 'in');
  document.getElementById('t-up').classList.toggle('on', t === 'up');
  var eb = document.getElementById('err-up'); if (eb) eb.style.display = 'none';
  var ob = document.getElementById('ok-up'); if (ob) ob.style.display = 'none';
}
function upTab(t) {
  var isPro = t === 'pro';
  document.getElementById('up-pro').style.display = isPro ? 'block' : 'none';
  document.getElementById('up-pac').style.display = isPro ? 'none' : 'block';
  var btnPro = document.getElementById('up-tab-pro');
  var btnPac = document.getElementById('up-tab-pac');
  btnPro.classList.toggle('on', isPro);
  btnPac.classList.toggle('on', !isPro);
  var eb = document.getElementById('err-up'); if (eb) eb.style.display = 'none';
  var ob = document.getElementById('ok-up'); if (ob) ob.style.display = 'none';
}
var _cfPassed = { pro: false, pac: false };
function cfCheckChange(who) { var cb = document.getElementById('cf-check-' + who); _cfPassed[who] = cb && cb.checked; }
var _crnVerified = false;
function resetCrnStatus() {
  _crnVerified = false;
  var s = document.getElementById('crn-status'); if (s) s.textContent = '';
  var d = document.getElementById('crn-detail'); if (d) d.textContent = '';
}
function verifyCRN() {
  var raw = (document.getElementById('up-pro-crn') || {}).value || '';
  var match = raw.replace(/\s+/g, '').toUpperCase().match(/CRN-?(\d{1,2})\s*([A-Z]?\d+)/);
  if (!match) { showUpErr('Formato inválido. Use: CRN-3 12345'); return; }
  var regional = match[1], numero = match[2];
  var btn = document.getElementById('crn-btn');
  if (btn) { btn.textContent = '⏳'; btn.disabled = true; }
  var s = document.getElementById('crn-status'); if (s) { s.style.color = '#6b7280'; s.textContent = 'Consultando CFN…'; }
  var url = 'https://www.cfn.org.br/wp-json/regulacao/v1/profissionais?crn=' + regional + '&registro=' + numero;
  fetch(url, { method: 'GET', headers: { 'Accept': 'application/json' }, signal: AbortSignal.timeout(8000) })
    .then(function (r) { return r.json(); })
    .then(function (data) {
      if (btn) { btn.textContent = 'Verificar'; btn.disabled = false; }
      var prof = Array.isArray(data) && data.length ? data[0] : (data && (data.nome || data.NM_PROFISSIONAL) ? data : null);
      if (prof && (prof.nome || prof.name || prof.NM_PROFISSIONAL)) {
        var nome = prof.nome || prof.name || prof.NM_PROFISSIONAL || '';
        var situacao = prof.situacao || prof.status || prof.DS_SITUACAO || 'Ativo';
        var ativo = situacao.toLowerCase().includes('ativo') || situacao.toLowerCase().includes('regular');
        if (ativo) {
          _crnVerified = true;
          var s2 = document.getElementById('crn-status'); if (s2) { s2.style.color = '#16a34a'; s2.textContent = '✅ Verificado'; }
          var d = document.getElementById('crn-detail'); if (d) { d.style.color = '#16a34a'; d.innerHTML = '<strong>' + nome + '</strong> · CRN-' + regional + ' ' + numero + ' · ' + situacao; }
          var ni = document.getElementById('up-pro-nome'); if (ni && !ni.value.trim() && nome) ni.value = nome;
          var eb = document.getElementById('err-up'); if (eb) eb.style.display = 'none';
        } else {
          _crnVerified = false;
          var s3 = document.getElementById('crn-status'); if (s3) { s3.style.color = '#dc2626'; s3.textContent = '⚠ Irregular'; }
          var d2 = document.getElementById('crn-detail'); if (d2) { d2.style.color = '#dc2626'; d2.innerHTML = 'Situação: <strong>' + situacao + '</strong>. Regularize seu cadastro no CFN.'; }
        }
      } else {
        _crnVerified = false;
        var s4 = document.getElementById('crn-status'); if (s4) { s4.style.color = '#dc2626'; s4.textContent = '❌ Não encontrado'; }
        var d3 = document.getElementById('crn-detail'); if (d3) { d3.style.color = '#dc2626'; d3.textContent = 'CRN-' + regional + ' ' + numero + ' não localizado no CFN.'; }
      }
    })
    .catch(function () {
      if (btn) { btn.textContent = 'Verificar'; btn.disabled = false; }
      _crnVerified = true;
      var s5 = document.getElementById('crn-status'); if (s5) { s5.style.color = '#d97706'; s5.textContent = '⚠ Aceito (offline)'; }
      var d4 = document.getElementById('crn-detail'); if (d4) { d4.style.color = '#d97706'; d4.textContent = 'Sistema do CFN indisponível. CRN aceito provisoriamente — revisão manual necessária.'; }
    });
}
function showUpErr(m) {
  var b = document.getElementById('err-up'); if (b) b.style.display = 'flex';
  var s = document.getElementById('err-up-msg'); if (s) s.textContent = m;
  var o = document.getElementById('ok-up'); if (o) o.style.display = 'none';
}
function showUpOk(m) {
  var o = document.getElementById('ok-up'); if (o) o.style.display = 'flex';
  var s = document.getElementById('ok-up-msg'); if (s) s.textContent = m;
  var b = document.getElementById('err-up'); if (b) b.style.display = 'none';
}
function doRegisterPro() {
  var nome = (document.getElementById('up-pro-nome') || {}).value || '';
  var email = (document.getElementById('up-pro-email') || {}).value || '';
  var pw = (document.getElementById('up-pro-pw') || {}).value || '';
  var pw2 = (document.getElementById('up-pro-pw2') || {}).value || '';
  if (!nome.trim()) { showUpErr('Informe seu nome completo.'); return; }

  if (!email.trim() || !email.includes('@')) { showUpErr('Informe um e-mail válido.'); return; }
  if (pw.length < 8) { showUpErr('A senha deve ter no mínimo 8 caracteres.'); return; }
  if (pw !== pw2) { showUpErr('As senhas não coincidem.'); return; }
  if (!_cfPassed.pro) { showUpErr('Confirme que você não é um robô marcando a caixa de segurança.'); return; }
  if (USERS.find(function (u) { return u.email === email; })) { showUpErr('Este e-mail já está cadastrado.'); return; }
  var ini = nome.trim().split(' ').filter(Boolean).slice(0, 2).map(function (w) { return w[0].toUpperCase(); }).join('');
  var avOpts = ['a1', 'a2', 'a3', 'a5', 'a6'];
  USERS.push({ id: USERS.length + 1, name: nome.trim(), email: email.trim(), pw: pw, role: 'pro', crn: '', av: avOpts[Math.floor(Math.random() * avOpts.length)], init: ini });
  showUpOk('Conta criada com sucesso! Redirecionando para o acesso…');
  setTimeout(function () {
    lTab('in');
    document.getElementById('inp-em').value = email.trim();
    document.getElementById('inp-pw').value = pw;
    var eb = document.getElementById('err-box'); if (eb) eb.style.display = 'none';
    showToast('Bem-vindo(a), ' + nome.trim().split(' ')[0] + '! 🎉', 's');
    setTimeout(doLogin, 700);
  }, 1800);
}
function doRegisterPac() {
  var nome = (document.getElementById('up-pac-nome') || {}).value || '';
  var email = (document.getElementById('up-pac-email') || {}).value || '';
  var code = (document.getElementById('up-pac-code') || {}).value || '';
  var pw = (document.getElementById('up-pac-pw') || {}).value || '';
  var pw2 = (document.getElementById('up-pac-pw2') || {}).value || '';
  if (!nome.trim()) { showUpErr('Informe seu nome completo.'); return; }
  if (!email.trim() || !email.includes('@')) { showUpErr('Informe um e-mail válido.'); return; }
  if (!code.trim() || code.trim().length < 4) { showUpErr('Código inválido. Solicite um código válido ao seu nutricionista.'); return; }
  if (pw.length < 6) { showUpErr('A senha deve ter no mínimo 6 caracteres.'); return; }
  if (pw !== pw2) { showUpErr('As senhas não coincidem.'); return; }
  if (!_cfPassed.pac) { showUpErr('Confirme que você não é um robô marcando a caixa de segurança.'); return; }
  if (USERS.find(function (u) { return u.email === email; })) { showUpErr('Este e-mail já está cadastrado.'); return; }
  var ini = nome.trim().split(' ').filter(Boolean).slice(0, 2).map(function (w) { return w[0].toUpperCase(); }).join('');
  var avOpts = ['a2', 'a4', 'a5', 'a6'];
  USERS.push({ id: USERS.length + 1, name: nome.trim(), email: email.trim(), pw: pw, role: 'pac', av: avOpts[Math.floor(Math.random() * avOpts.length)], init: ini });
  showUpOk('Conta de paciente criada! Redirecionando para o acesso…');
  setTimeout(function () {
    lTab('in');
    document.getElementById('inp-em').value = email.trim();
    document.getElementById('inp-pw').value = pw;
    var eb = document.getElementById('err-box'); if (eb) eb.style.display = 'none';
    showToast('Bem-vindo(a), ' + nome.trim().split(' ')[0] + '! 🎉', 's');
    setTimeout(doLogin, 700);
  }, 1800);
}
function fillDemo(e, p) { document.getElementById('inp-em').value = e; document.getElementById('inp-pw').value = p; }
function showErr(m) { var b = document.getElementById('err-box'); b.style.display = 'flex'; document.getElementById('err-msg').textContent = m; }
function doLogin() {
  var e = document.getElementById('inp-em').value.trim(), p = document.getElementById('inp-pw').value;
  var u = USERS.find(function (x) { return x.email === e && x.pw === p; });
  if (!u) { showErr('E-mail ou senha incorretos.'); return; }
  cu = u;

  // Carregar dados salvos — se não houver, manter os dados demo
  DB.load();

  // Notificações padrão só se não houver salvas
  if (!notifs.length) {
    notifs = [{ id: 1, txt: 'Pedro Alves não registra consulta há 53 dias', type: 'w' }, { id: 2, txt: 'Maria Santos: Vitamina D crítica (18 ng/mL)', type: 'r' }, { id: 3, txt: '5 pacientes com retorno esta semana', type: 'i' }];
  }

  document.getElementById('login').style.display = 'none';
  document.getElementById('app').style.display = 'flex';
  if (cu.role === 'pro') initPro(); else initPac();
  setTimeout(updateNotifBadge, 100);
}
function doLogout() {
  DB.save();
  if (window._autoSaveInterval) clearInterval(window._autoSaveInterval);
  cu = null;
  document.getElementById('app').style.display = 'none';
  document.getElementById('login').style.display = 'flex';
}

function updateNotifBadge() {
  var badge = document.getElementById('notif-badge');
  var dot = document.getElementById('notif-dot');
  // Count manual + smart alerts
  var smartCount = 0;
  try { smartCount = _generateSmartAlerts().length; } catch (e) { }
  var count = notifs.length + smartCount;
  if (badge) {
    badge.textContent = count;
    badge.style.display = count > 0 ? '' : 'none';
  }
  if (dot) {
    dot.style.display = count > 0 ? '' : 'none';
  }
}

function initPro() {
  document.getElementById('sb-av').textContent = cu.init; document.getElementById('sb-av').className = 'av ' + cu.av;
  document.getElementById('sb-name').textContent = cu.name; document.getElementById('sb-email').textContent = cu.email;
  var role = document.getElementById('sb-role'); role.innerHTML = '<span style="width:6px;height:6px;border-radius:50%;background:#4ade80;display:inline-block"></span> Nutricionista' + (cu.crn ? ' · ' + escHtml(cu.crn) : '');
  var nav = document.getElementById('sb-nav');
  nav.innerHTML = `
  <div class="sb-sec">Principal</div>
  <button class="ni on" id="ni-dash" onclick="goP('dash',this)"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/></svg>Dashboard</button>
  <button class="ni" id="ni-pat" onclick="goP('pat',this)"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>Pacientes<span class="nb nb-y" id="pat-count-badge">${pats.length}</span></button>
  <button class="ni" id="ni-presc" onclick="goP('presc',this)"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>Prescrição</button>
  <button class="ni" id="ni-week" onclick="goP('week',this)"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-2 .9-2 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5z"/></svg>Plano Semanal</button>
  <button class="ni" id="ni-ev" onclick="goP('ev',this)"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 8.17-4-4L2 16.99z"/></svg>Acompanhamento</button>
  <div class="sb-sec">Ferramentas</div>
  <button class="ni" id="ni-micro" onclick="goP('micro',this)"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>Micronutrientes</button>
  <button class="ni" id="ni-rec" onclick="goP('rec',this)"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 100 20A10 10 0 0012 2zm0 18a8 8 0 110-16 8 8 0 010 16zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/></svg>Recordatório 24h</button>
  <button class="ni" id="ni-ai" onclick="goP('ai',this)"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a2 2 0 012 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 017 7H4a7 7 0 017-7h1V5.73A2 2 0 0110 4a2 2 0 012-2zM7 14v2a1 1 0 001 1h1v3h2v-3h2v3h2v-3h1a1 1 0 001-1v-2H7z"/></svg>IA Nutricional<span class="nb nb-y">Novo</span></button>
  <button class="ni" id="ni-notif" onclick="goP('notif',this)" style="position:relative"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/></svg>Notificações<span class="nb nb-r" id="notif-badge" style="${notifs.length === 0 ? 'display:none' : ''}">0</span><div class="notif-dot" id="notif-dot" style="${notifs.length === 0 ? 'display:none' : ''}"></div></button>
  <button class="ni" id="ni-tpl" onclick="goP('tpl',this)"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>Templates de Plano</button>
  <button class="ni" id="ni-anam" onclick="goP('anam',this)"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6c-1.1 0-2 .9-2 2v14c0 1.1.89 2 2 2h4v-2H6V4h7v5h5v4h2V8l-6-6zm2 16v2h-2v-2h-2v-2h2v-2h2v2h2v2h-2zM8 12h6v2H8zm0 4h4v2H8z"/></svg>Anamnese Clínica</button>
  <button class="ni" id="ni-busca" onclick="goP('busca',this)"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>Busca Global</button>
  <button class="ni" id="ni-pac-diary" onclick="goP('pac-diary',this)"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 5h-3.17L15 3H9L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 14H4V7h4.05l1.83-2h4.24l1.83 2H20v12zm-8-11c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"/></svg>Di\u00e1rio Visual<span class="nb nb-y" id="nb-pac-diary" style="display:none">0</span></button>`;
  goP('dash', document.getElementById('ni-dash'));
  // Show onboarding if first visit
  if (!localStorage.getItem || !localStorage.getItem('dieton_onboarded')) {
    setTimeout(showOnboarding, 600);
    try { localStorage.setItem('dieton_onboarded', '1'); } catch (e) { }
  }
}

function initPac() {
  document.getElementById('sb-av').textContent = cu.init || 'PA'; document.getElementById('sb-av').className = 'av ' + (cu.av || 'a4');
  document.getElementById('sb-name').textContent = cu.name; document.getElementById('sb-email').textContent = cu.email;
  setTimeout(_applySidebarProfile, 50);
  var role = document.getElementById('sb-role'); role.innerHTML = '<span style="width:6px;height:6px;border-radius:50%;background:#60a5fa;display:inline-block"></span> Paciente';
  var nav = document.getElementById('sb-nav');
  nav.innerHTML = `
  <div class="sb-sec">Minha Área</div>
  <button class="ni on" id="pi-dash" onclick="goP('pdash',this)"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/></svg>Início</button>
  <button class="ni" id="pi-plan" onclick="goP('pplan',this)"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>Meu Plano</button>
  <button class="ni" id="pi-diary" onclick="goP('pdiary',this)"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-2 .9-2 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2z"/></svg>Diário Alimentar</button>
  <button class="ni" id="pi-task" onclick="goP('ptask',this)"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>Tarefas<span class="nb nb-y">${tasks.filter(function (t) { return !t.done }).length}</span></button>
  <button class="ni" id="pi-ev" onclick="goP('pev',this)"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 8.17-4-4L2 16.99z"/></svg>Evolução</button>`;
  goP('pdash', document.getElementById('pi-dash'));
}

function goP(id, btn) {
  if (window.innerWidth <= 1024) closeSidebar();
  document.querySelectorAll('.ni').forEach(function (b) { b.classList.remove('on') });
  if (btn) btn.classList.add('on');
  var pg = document.getElementById('pg');
  var sub = document.getElementById('tb-sub');
  var ri = document.getElementById('tb-right');
  var now = new Date();
  var days = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];
  var months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
  sub.textContent = days[now.getDay()] + ', ' + now.getDate() + ' de ' + months[now.getMonth()] + ' de ' + now.getFullYear();
  var t = { dash: 'Dashboard', pat: 'Pacientes', presc: 'Prescrição Nutricional', week: 'Plano Semanal', ev: 'Acompanhamento', micro: 'Micronutrientes', rec: 'Recordatório 24h', ai: 'IA Nutricional', notif: 'Notificações', tpl: 'Templates de Plano', anam: 'Anamnese Nutricional', busca: 'Busca Global', 'diary-pro': 'Diário Visual', pdash: 'Início', pplan: 'Meu Plano Alimentar', pdiary: 'Diário Alimentar', ptask: 'Tarefas', pev: 'Minha Evolução' };
  document.getElementById('tb-title').textContent = t[id] || id;
  var pages = {
    dash: rDash, pat: rPat, agenda: rAgenda, presc: rPresc, week: rWeek, ev: rEv, micro: rMicro, rec: rRec, ai: rAI, notif: rNotif, tpl: rTpl, 'pac-diary': rPacDiary, 'diary-pro': rDiaryPro, r24: rR24, supl: rSupl, fin: rFin,
    anam: rAnam, busca: rBusca,
    pdash: rPDash, pplan: rPPlan, pdiary: rPDiary, ptask: rPTask, pev: rPEv
  };
  var rbts = {
    dash: '<button class="btn btn-s btn-sm" onclick=""><svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M17 12h-5v5h5v-5z"/></svg> Exportar PDF</button><button class="btn btn-p btn-sm" onclick="openM(\'m-pat\')">+ Novo Paciente</button>',
    pat: '<button class="btn btn-s btn-sm" onclick="loadTpl()">📋 Usar Template</button><button class="btn btn-p btn-sm" onclick="openM(\'m-pat\')">+ Novo Paciente</button>',
    presc: '<button class="btn btn-s btn-sm" onclick="openM(\'m-tpl\')">💾 Salvar Template</button><button class="btn btn-gold btn-sm" onclick="exportPDF()">⬇ PDF Plano</button>',
    ev: '<button class="btn btn-s btn-sm" onclick="openM(\'m-meas\')">+ Medidas</button><button class="btn btn-p btn-sm" onclick="rptMensal()">📊 Relatório PDF</button>',
    pdiary: '<button class="btn btn-p btn-sm" onclick="openDiaryAdd()">+ Registrar Refeição</button>',
    anam: '<button class="btn btn-ghost btn-sm" onclick="exportAnamPDF()">📄 Exportar Anamnese PDF</button>',
    busca: ''
  };
  ri.innerHTML = rbts[id] || '';
  if (pages[id]) { pg.innerHTML = pages[id](); setTimeout(function () { afterRender(id); }, 50); }
}

function afterRender(id) {
  if (id === 'dash') { buildBChart(); animRing(6, 10); setTimeout(buildAdherenceChart, 80); }
  if (id === 'presc') { bindPrescEvents(); }
  if (id === 'busca') { document.getElementById('global-q') && document.getElementById('global-q').focus(); }
  if (id === 'diary-pro') { _dvProAfterRender(); }
  if (id === 'pac-diary') { _dvPacAfterRender(); }
  if (id === 'pdiary') { setTimeout(_diarySetPhotoSrcs, 80); }
}


// ─── DASHBOARD ───
function rDash() {
  var alerts = pats.filter(function (p) { return p.st === 'tr' || p.exams.vitd < 25 || p.exams.gli > 120 }).length;
  return `
 <div class="kpi-row">
  <div class="kpi kpi-g"><div class="kpi-top"><div class="kpi-ico ki-g"><svg viewBox="0 0 24 24" fill="#16a34a"><path d="M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg></div><span class="kpi-bdg kbd-g">Ativos</span></div><div class="kpi-n">${pats.length}</div><div class="kpi-l">Pacientes Ativos</div><div class="kpi-ft kft-g"><strong>Prontuários</strong> atualizados</div></div>
  <div class="kpi kpi-b"><div class="kpi-top"><div class="kpi-ico ki-b"><svg viewBox="0 0 24 24" fill="#1d4ed8"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-2 .9-2 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/></svg></div><span class="kpi-bdg kbd-b">↑ +15%</span></div><div class="kpi-n">12</div><div class="kpi-l">Consultas esta semana</div><div class="kpi-ft kft-b"><strong>+15%</strong> vs semana anterior</div></div>
  <div class="kpi kpi-y"><div class="kpi-top"><div class="kpi-ico ki-y"><svg viewBox="0 0 24 24" fill="#a16207"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg></div><span class="kpi-bdg kbd-y">↑ +5%</span></div><div class="kpi-n">87%</div><div class="kpi-l">Taxa de Adesão</div><div class="kpi-ft kft-y"><strong>+5 pts</strong> este mês</div></div>
  <div class="kpi kpi-r"><div class="kpi-top"><div class="kpi-ico ki-r"><svg viewBox="0 0 24 24" fill="#b91c1c"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg></div><span class="kpi-bdg kbd-r">Atenção</span></div><div class="kpi-n">${alerts}</div><div class="kpi-l">Alertas Ativos</div><div class="kpi-ft kft-r"><strong>Ver alertas</strong> →</div></div>
 </div>
 <div class="dash-row2">
  <div class="card"><div class="ch"><div><div class="ct">Consultas Realizadas</div><div class="cs" style="margin-top:2px">Últimas 8 semanas</div></div><div style="display:flex;align-items:center;gap:5px;font-size:11px;color:var(--n4)"><span style="width:9px;height:9px;border-radius:2px;background:var(--g5);display:inline-block"></span>Consultas</div></div><div class="bchart" id="bchart"></div></div>
  <div class="card" style="padding:18px"><div class="ch" style="margin-bottom:12px"><span class="ct">Agenda de Hoje</span><span style="font-family:var(--jk);font-size:9px;font-weight:700;color:#c4420a;background:#fdd0a8;padding:3px 9px;border-radius:99px">4 consultas</span></div>
   <div class="ag-item"><div class="ag-time">09:00</div><div class="ag-bar" style="background:#e85a0a"></div><div style="flex:1;min-width:0"><div class="ag-nm">Fernanda Lima</div><div class="ag-tp">Retorno · 45 min</div></div><span class="tag tg">Concluído</span></div>
   <div class="ag-item"><div class="ag-time">10:30</div><div class="ag-bar" style="background:#f59e0b"></div><div style="flex:1;min-width:0"><div class="ag-nm">Carlos Mendes</div><div class="ag-tp">1ª Consulta</div></div><span class="tag ty">Pendente</span></div>
   <div class="ag-item"><div class="ag-time">14:00</div><div class="ag-bar" style="background:#e85a0a"></div><div style="flex:1;min-width:0"><div class="ag-nm">Ana Rodrigues</div><div class="ag-tp">Retorno · 30 min</div></div><span class="tag tg">Concluído</span></div>
   <div class="ag-item"><div class="ag-time">15:30</div><div class="ag-bar" style="background:#3b82f6"></div><div style="flex:1;min-width:0"><div class="ag-nm">Pedro Alves</div><div class="ag-tp">Online · 30 min</div></div><span class="tag tb2">Online</span></div>
  </div>
 </div>
 <div class="dash-row2">
  <div class="card"><div class="ch"><span class="ct">Pacientes Recentes</span><button style="font-family:var(--jk);font-size:10.5px;font-weight:700;color:var(--g5);background:none;border:none;cursor:pointer" onclick="goP('pat',document.getElementById('ni-pat'))">Ver todos →</button></div>
   <div id="d-recent"></div></div>
  <div class="card" style="display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center">
   <div style="font-family:var(--jk);font-size:9px;font-weight:700;color:var(--n4);letter-spacing:.1em;text-transform:uppercase;margin-bottom:16px">Meta Mensal de Consultas</div>
   <div style="position:relative;width:114px;height:114px;margin-bottom:12px">
    <svg width="114" height="114" viewBox="0 0 114 114"><defs><linearGradient id="rg" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#e85a0a"/><stop offset="100%" stop-color="#f9a868"/></linearGradient></defs><circle cx="57" cy="57" r="46" class="ring-track"/><circle id="dash-ring" cx="57" cy="57" r="46" class="ring-fill" stroke-dasharray="289" stroke-dashoffset="289" transform="rotate(-90 57 57)"/></svg>
    <div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center"><div style="font-family:var(--in);font-size:24px;font-weight:800;color:var(--n9);letter-spacing:-1px;line-height:1" id="ring-pct">0%</div><div style="font-size:10px;color:var(--n4);margin-top:1px">da meta</div></div>
   </div>
   <div style="font-size:12px;font-weight:600;color:var(--n7)" id="ring-sub"></div>
   <div style="font-size:11px;color:var(--n4);margin-top:4px">Faltam <strong style="color:var(--g5)" id="ring-rem"></strong></div>
  </div>
 </div>`;
}
function buildBChart() {
  var data = [6, 9, 8, 13, 10, 15, 12, 14], labels = ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'], mx = Math.max.apply(null, data);
  var el = document.getElementById('bchart'); if (!el) return;
  el.innerHTML = data.map(function (v, i) {
    var cls = i === 7 ? 'bc-a' : v < 10 ? 'bc-l' : 'bc-n';
    return '<div class="bcc"><div class="bct"><div class="bcb ' + cls + '" style="height:' + Math.round(v / mx * 100) + '%" data-v="' + v + ' consultas"></div></div><span class="bcl">' + labels[i] + '</span></div>';
  }).join('');
  // recent pats
  var el2 = document.getElementById('d-recent'); if (!el2) return;
  el2.innerHTML = pats.slice(0, 5).map(function (p) {
    return '<div style="display:flex;align-items:center;gap:10px;padding:9px 8px;border-radius:var(--r);cursor:pointer;transition:background .13s" onmouseover="this.style.background=\'var(--n0)\'" onmouseout="this.style.background=\'transparent\'" onclick="selPat=pats.find(function(x){return x.id===\'+p.id+\'});goP(\'ev\',document.getElementById(\'ni-ev\'))">'
      + '<div class="pac-av ' + p.av + '" style="width:34px;height:34px;border-radius:50%;font-size:11px">' + p.i + '</div>'
      + '<div style="flex:1;min-width:0"><div style="font-size:13px;font-weight:600;color:var(--n8)">' + escHtml(p.n) + '</div><div style="font-size:10.5px;color:var(--n4);margin-top:1px">' + p.goal + ' · ' + p.last + '</div></div>'
      + '<span class="tag ' + p.st + '">' + p.stxt + '</span></div>';
  }).join('');
}
function animRing(v, t) {
  var c = 289, off = c * (1 - v / t);
  var el = document.getElementById('dash-ring');
  setTimeout(function () { if (el) { el.style.strokeDashoffset = off; el.style.transition = 'stroke-dashoffset .9s ease'; } }, 100);
  function s(id, val) { var e = document.getElementById(id); if (e) e.textContent = val; }
  s('ring-pct', Math.round(v / t * 100) + '%'); s('ring-sub', v + ' de ' + t + ' consultas'); s('ring-rem', (t - v) + ' consultas');
}


// adherence chart data for dashboard (used in rDash)
var _adherenceData = [
  { week: 'Sem 1', ali: 82, hid: 70, atv: 55, son: 65 },
  { week: 'Sem 2', ali: 78, hid: 75, atv: 60, son: 70 },
  { week: 'Sem 3', ali: 85, hid: 80, atv: 65, son: 72 },
  { week: 'Sem 4', ali: 88, hid: 82, atv: 70, son: 75 },
  { week: 'Sem 5', ali: 84, hid: 85, atv: 75, son: 78 },
  { week: 'Sem 6', ali: 91, hid: 88, atv: 78, son: 80 },
];
function buildAdherenceChart() {
  var el = document.getElementById('adh-chart'); if (!el) return;
  var W = el.offsetWidth || 400, H = 120;
  var cats = [{ k: 'ali', c: '#e85a0a', l: 'Alimentação' }, { k: 'hid', c: '#3b82f6', l: 'Hidratação' }, { k: 'atv', c: '#10b981', l: 'Atividade' }, { k: 'son', c: '#8b5cf6', l: 'Sono' }];
  var svg = '<svg viewBox="0 0 ' + W + ' ' + H + '" width="100%" height="' + H + '">';
  // Grid lines
  [25, 50, 75, 100].forEach(function (v) { var y = H - 10 - (v / 100 * (H - 20)); svg += '<line x1="30" x2="' + W + '" y1="' + y + '" y2="' + y + '" stroke="#f3f4f6" stroke-width="1"/>'; svg += '<text x="26" y="' + (y + 4) + '" text-anchor="end" font-size="8" fill="#9ca3af">' + v + '</text>'; });
  var n = _adherenceData.length;
  cats.forEach(function (cat) {
    var pts = _adherenceData.map(function (d, i) { var x = 30 + i * (W - 40) / (n - 1); var y = H - 10 - (d[cat.k] / 100 * (H - 20)); return { x: x.toFixed(1), y: y.toFixed(1) }; });
    var path = pts.map(function (p, i) { return (i === 0 ? 'M' : 'L') + p.x + ',' + p.y; }).join(' ');
    svg += '<path d="' + path + '" fill="none" stroke="' + cat.c + '" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
    pts.forEach(function (p) { svg += '<circle cx="' + p.x + '" cy="' + p.y + '" r="3" fill="' + cat.c + '"/>'; });
  });
  // X labels
  _adherenceData.forEach(function (d, i) { var x = 30 + i * (W - 40) / (n - 1); svg += '<text x="' + x.toFixed(1) + '" y="' + (H) + '" text-anchor="middle" font-size="8" fill="#9ca3af">' + d.week + '</text>'; });
  svg += '</svg>';
  el.innerHTML = svg;
  // Legend
  var leg = document.getElementById('adh-legend'); if (!leg) return;
  leg.innerHTML = cats.map(function (cat) { return '<div style="display:flex;align-items:center;gap:5px"><div style="width:12px;height:3px;border-radius:99px;background:' + cat.c + '"></div><span style="font-size:10.5px;color:var(--n5)">' + cat.l + '</span></div>'; }).join('');
}

// ─── PATIENTS ───
function rPat() {
  return `<div style="display:flex;gap:8px;margin-bottom:14px;flex-wrap:wrap">
  <div class="search-wrap" style="flex:1;min-width:200px"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg><input class="search-inp" id="pat-q" placeholder="Buscar paciente…" oninput="filterPats(this.value)"/></div>
  <select class="sel" style="width:auto" id="pat-gf" onchange="filterPats(document.getElementById('pat-q').value)"><option value="">Todos os objetivos</option><option>Emagrecimento</option><option>Hipertrofia</option><option>Manutenção</option><option>Saúde geral</option><option>Condição clínica</option></select>
  <select class="sel" style="width:auto" id="pat-sf" onchange="filterPats(document.getElementById('pat-q').value)"><option value="">Todos os status</option><option value="tg">Em dia</option><option value="ty">Atenção</option><option value="tr">Alerta</option></select>
 </div>
 <div class="pat-grid" id="pat-grid">${buildPatGrid(pats)}</div>`;
}
function buildPatGrid(list) {
  return list.map(function (p) {
    var loss = p.wStart - p.w;
    var pct = p.prog; var pcls = pct >= 70 ? 'pf-g' : pct >= 40 ? 'pf-y' : 'pf-r';
    return '<div class="pat-card" style="position:relative">'
      // Header — clicável abre detalhe
      + '<div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;cursor:pointer" onclick="openPatDetail(\'+p.id+\')">'
      + '<div class="pac-av ' + p.av + '">' + p.i + '</div>'
      + '<div style="flex:1;min-width:0"><div style="font-size:13.5px;font-weight:700;color:var(--n9)">' + escHtml(p.n) + '</div><div style="font-size:10.5px;color:var(--n4);margin-top:2px">' + p.age + ' anos · ' + p.goal + '</div></div>'
      + '<span class="tag ' + p.st + '">' + p.stxt + '</span></div>'
      // KPIs
      + '<div class="pc-kpis" style="cursor:pointer" onclick="openPatDetail(\'+p.id+\')">'
      + '<div class="pc-kpi"><strong>' + p.w + '</strong><span>kg</span></div>'
      + '<div class="pc-kpi"><strong>' + p.bmi + '</strong><span>IMC</span></div>'
      + '<div class="pc-kpi"><strong>' + (loss >= 0 ? '-' : '+') + (Math.abs(loss).toFixed(1)) + '</strong><span>kg total</span></div></div>'
      // Adesão
      + '<div style="margin-top:8px;cursor:pointer" onclick="openPatDetail(\'+p.id+\')">'
      + '<div style="display:flex;justify-content:space-between;font-size:10px;color:var(--n4);margin-bottom:3px"><span>Adesão</span><span style="font-weight:700;color:var(--n7)">' + pct + '%</span></div>'
      + '<div class="prog-track"><div class="prog-fill ' + pcls + '" style="width:' + pct + '%"></div></div></div>'
      + '<div style="margin-top:8px;font-size:10px;color:var(--n4)">Última consulta: ' + p.last + '</div>'
      + (p.alerg ? '<div style="margin-top:5px;font-size:10px;color:var(--red);font-weight:600">⚠ ' + p.alerg + '</div>' : '')
      // Ações do nutricionista
      + '<div style="display:flex;gap:6px;margin-top:12px;padding-top:10px;border-top:1px solid var(--n2)">'
      + '<button class="btn btn-ghost btn-sm" style="flex:1;font-size:11px" onclick="event.stopPropagation();openPatDetail(\'+p.id+\')"><svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8a3 3 0 100 6 3 3 0 000-6z"/></svg> Ver</button>'
      + '<button class="btn btn-s btn-sm" style="flex:1;font-size:11px" onclick="event.stopPropagation();editPat(\'+p.id+\')"><svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 000-1.41l-2.34-2.34a1 1 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg> Editar</button>'
      + '<button class="btn btn-danger btn-sm" style="font-size:11px;padding:5px 10px" onclick="event.stopPropagation();deletePat(\'+p.id+\')" title="Remover paciente"><svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg></button>'
      + '</div>'
      + '</div>';
  }).join('');
}
function filterPats(q) {
  var gf = document.getElementById('pat-gf').value; var sf = document.getElementById('pat-sf').value;
  var r = pats.filter(function (p) { return (p.n.toLowerCase().includes(q.toLowerCase())) && (!gf || p.goal === gf) && (!sf || p.st === sf) });
  document.getElementById('pat-grid').innerHTML = buildPatGrid(r);
}
function openPatDetail(id) {
  var p = pats.find(function (x) { return x.id === id }); if (!p) return;
  selPat = p;
  var alerts = [];
  if (p.exams.vitd && p.exams.vitd < 30) alerts.push({ t: 'Vitamina D baixa (' + p.exams.vitd + ' ng/mL — ref: >30)', c: 'r' });
  if (p.exams.gli && p.exams.gli > 100) alerts.push({ t: 'Glicemia elevada (' + p.exams.gli + ' mg/dL)', c: 'y' });
  if (p.exams.col && p.exams.col > 200) alerts.push({ t: 'Colesterol total alto (' + p.exams.col + ' mg/dL)', c: 'y' });
  if (p.exams.hem && p.exams.hem < 12) alerts.push({ t: 'Hemoglobina baixa — risco de anemia (' + p.exams.hem + ' g/dL)', c: 'r' });
  if (p.exams.fer && p.exams.fer < 20) alerts.push({ t: 'Ferritina baixa — risco de anemia (' + p.exams.fer + ' ng/mL)', c: 'r' });
  var hist = p.historico || [];
  var modal = document.createElement('div'); modal.className = 'ov'; modal.id = 'm-pd';
  modal.innerHTML = '<div class="modal modal-xl"><div class="mh"><div><div class="mt">' + escHtml(p.n) + '</div><div style="font-size:12px;color:var(--n4);margin-top:3px">' + p.age + ' anos · ' + (p.sex === 'F' ? 'Feminino' : 'Masculino') + ' · ' + p.goal + ' · Última: ' + p.last + '</div></div><div style="display:flex;gap:7px"><button class="btn btn-s btn-sm" onclick="selPat=pats.find(function(x){return x.id===' + p.id + '});closeM(\'m-pd\');goP(\'presc\',document.getElementById(\'ni-presc\'))">Prescrever</button><button class="btn btn-p btn-sm" onclick="closeM(\'m-pd\');selPat=pats.find(function(x){return x.id===' + p.id + '});goP(\'ev\',document.getElementById(\'ni-ev\'))">Acompanhamento</button><button class="mc" onclick="closeM(\'m-pd\')">×</button></div></div>'
    + (alerts.length ? '<div style="margin-bottom:12px">' + alerts.map(function (a) { return '<div class="alert alert-' + a.c + '"><span>⚠ ' + a.t + '</span></div>'; }).join('') + '</div>' : '')
    + '<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:14px">'
    + '<div><div class="ct" style="margin-bottom:10px;font-family:var(--jk)">Dados Clínicos</div>'
    + '<div style="background:var(--n0);border-radius:var(--r2);padding:14px;display:grid;grid-template-columns:1fr 1fr;gap:6px">'
    + [['Peso', p.w + ' kg'], ['Altura', p.h + ' cm'], ['IMC', p.bmi], ['% Gordura', p.fat + '%'], ['Cintura', p.historico[0] ? p.historico[0].cintura + ' cm' : '—'], ['Objetivo', p.goal], ['Condição', p.cond || 'Saudável'], ['Alergias', p.alerg || 'Nenhuma']].map(function (r) { return '<div><div style="font-size:9.5px;color:var(--n4);text-transform:uppercase;letter-spacing:.05em;font-family:var(--jk);font-weight:700">' + r[0] + '</div><div style="font-size:12.5px;font-weight:600;color:var(--n9);margin-top:1px">' + r[1] + '</div></div>'; }).join('') + '</div>'
    + '<div class="ct" style="margin:12px 0 8px;font-family:var(--jk)">Exames Laboratoriais</div>'
    + '<div style="background:var(--n0);border-radius:var(--r2);padding:14px;display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px">'
    + [['Glicemia', p.exams.gli, 'mg/dL', p.exams.gli > 100 ? 'y' : 'g'], ['Colesterol', p.exams.col, 'mg/dL', p.exams.col > 200 ? 'y' : 'g'], ['Vit D', p.exams.vitd, 'ng/mL', p.exams.vitd < 30 ? 'r' : 'g'], ['Hemoglobina', p.exams.hem, 'g/dL', p.exams.hem < 12 ? 'r' : 'g'], ['Ferritina', p.exams.fer, 'ng/mL', p.exams.fer < 20 ? 'r' : 'g'], ['TSH', p.exams.tsh, 'µUI/mL', 'g']].map(function (r) { var color = r[3] === 'r' ? '#dc2626' : r[3] === 'y' ? '#d97706' : '#16a34a'; return '<div><div style="font-size:9.5px;color:var(--n4);text-transform:uppercase;letter-spacing:.05em;font-family:var(--jk);font-weight:700">' + r[0] + '</div><div style="font-size:13px;font-weight:800;color:' + color + ';margin-top:1px">' + r[1] + '</div><div style="font-size:9px;color:var(--n4)">' + r[2] + '</div></div>'; }).join('') + '</div></div>'
    + '<div><div class="ct" style="margin-bottom:10px;font-family:var(--jk)">Histórico de Medidas</div>'
    + '<div style="border-radius:var(--r2);border:1px solid var(--n2);overflow:hidden"><table class="tbl"><thead><tr><th>Data</th><th>Peso</th><th>IMC</th><th>Cintura</th><th>% Gord</th></tr></thead><tbody>'
    + hist.map(function (h) { return '<tr><td>' + h.data + '</td><td><strong>' + h.peso + ' kg</strong></td><td>' + h.imc + '</td><td>' + h.cintura + ' cm</td><td>' + h.fat + '%</td></tr>'; }).join('') + '</tbody></table></div>'
    + '<div style="margin-top:10px"><button class="btn btn-s btn-sm" onclick="closeM(\'m-pd\');openM(\'m-meas\')">+ Adicionar Medidas</button></div></div></div></div>';
  document.body.appendChild(modal); setTimeout(function () { modal.classList.add('open') }, 10);
  modal.addEventListener('click', function (e) { if (e.target === modal) closeM('m-pd') });
}

// ─── EDITAR PACIENTE ───
function editPat(id) {
  var p = pats.find(function (x) { return x.id === id }); if (!p) return;

  // Fechar modal de detalhe se estiver aberto
  var pd = document.getElementById('m-pd'); if (pd) closeM('m-pd');

  // Preencher campos do modal de cadastro com dados do paciente
  setTimeout(function () {
    var g = function (elId, val) { var el = document.getElementById(elId); if (el) el.value = val || ''; };

    // Converter data de nascimento (dd/mm/yyyy -> yyyy-mm-dd)
    var nascStr = '';
    if (p.age) {
      var y = new Date().getFullYear() - p.age;
      nascStr = y + '-01-01';
    }

    g('np-nome', p.n);
    g('np-nasc', nascStr);
    g('np-sex', p.sex || 'F');
    g('np-peso', p.w);
    g('np-alt', p.h);
    g('np-fat', p.fat);
    g('np-cin', p.historico && p.historico[0] ? p.historico[0].cintura : '');
    g('np-obj', p.goal);
    g('np-cond', p.cond);
    g('np-alerg', p.alerg);
    g('np-agua', p.agua);
    g('np-gli', p.exams ? p.exams.gli : '');
    g('np-col', p.exams ? p.exams.col : '');
    g('np-vitd', p.exams ? p.exams.vitd : '');
    g('np-hem', p.exams ? p.exams.hem : '');
    g('np-fer', p.exams ? p.exams.fer : '');
    g('np-tgo', p.exams ? p.exams.tgo : '');
    g('np-tgp', p.exams ? p.exams.tgp : '');
    g('np-tsh', p.exams ? p.exams.tsh : '');

    // Trocar título e botão do modal para modo edição
    var mt = document.querySelector('#m-pat .mt');
    if (mt) mt.textContent = 'Editar Paciente — ' + p.n;

    var btn = document.querySelector('#m-pat .mf .btn-p');
    if (btn) {
      btn.textContent = 'Salvar Alterações';
      btn.onclick = function () { saveEditPat(id); };
    }

    openM('m-pat');
  }, 150);
}

function saveEditPat(id) {
  var p = pats.find(function (x) { return x.id === id }); if (!p) return;

  var g = function (elId) { return (document.getElementById(elId) || {}).value || ''; };
  var gn = function (elId) { return parseFloat(g(elId)) || 0; };

  var nome = g('np-nome');
  if (!nome.trim()) { showToast('Preencha o nome do paciente', 'w'); return; }

  var peso = gn('np-peso') || p.w;
  var alt = gn('np-alt') || p.h;
  var bmi = alt > 0 ? +(peso / ((alt / 100) * (alt / 100))).toFixed(1) : p.bmi;

  var nasc = g('np-nasc');
  var age = p.age;
  if (nasc) { var d = new Date(nasc); var now = new Date(); age = now.getFullYear() - d.getFullYear(); if (now < new Date(now.getFullYear(), d.getMonth(), d.getDate())) age--; }

  // Atualizar dados
  p.n = nome.trim();
  p.age = age || p.age;
  p.sex = g('np-sex') || p.sex;
  p.w = peso;
  p.h = alt;
  p.bmi = bmi;
  p.fat = gn('np-fat') || p.fat;
  p.goal = g('np-obj') || p.goal;
  p.cond = g('np-cond');
  p.alerg = g('np-alerg');
  p.agua = gn('np-agua') || p.agua;
  if (!p.exams) p.exams = {};
  if (gn('np-gli')) p.exams.gli = gn('np-gli');
  if (gn('np-col')) p.exams.col = gn('np-col');
  if (gn('np-vitd')) p.exams.vitd = gn('np-vitd');
  if (gn('np-hem')) p.exams.hem = gn('np-hem');
  if (gn('np-fer')) p.exams.fer = gn('np-fer');
  if (gn('np-tgo')) p.exams.tgo = gn('np-tgo');
  if (gn('np-tgp')) p.exams.tgp = gn('np-tgp');
  if (gn('np-tsh')) p.exams.tsh = gn('np-tsh');

  // Restaurar modal ao modo cadastro
  var mt = document.querySelector('#m-pat .mt');
  if (mt) mt.textContent = 'Cadastrar Paciente — Anamnese Completa';
  var btn = document.querySelector('#m-pat .mf .btn-p');
  if (btn) { btn.textContent = 'Cadastrar Paciente'; btn.onclick = savePat; }

  DB.save();
  closeM('m-pat');
  showToast('Dados de "' + p.n + '" atualizados!', 's');
  goP('pat', document.getElementById('ni-pat'));
}

// ─── REMOVER PACIENTE ───
function deletePat(id) {
  var p = pats.find(function (x) { return x.id === id });
  var nome = p ? p.n : 'paciente';
  // Modal de confirmação
  var existing = document.getElementById('m-del-pat');
  if (existing) existing.parentNode.removeChild(existing);

  var modal = document.createElement('div');
  modal.className = 'ov'; modal.id = 'm-del-pat';
  modal.innerHTML =
    '<div class="modal" style="max-width:400px;text-align:center">'
    + '<div style="width:56px;height:56px;border-radius:16px;background:var(--red-l);display:flex;align-items:center;justify-content:center;margin:0 auto 16px">'
    + '<svg width="24" height="24" viewBox="0 0 24 24" fill="#dc2626"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg></div>'
    + '<div style="font-family:var(--jk);font-size:16px;font-weight:800;color:var(--n9);margin-bottom:8px">Remover paciente?</div>'
    + '<div style="font-size:13px;color:var(--n5);line-height:1.7;margin-bottom:22px">Tem certeza que deseja remover <strong style="color:var(--n9)">' + nome + '</strong>?<br>Esta ação não pode ser desfeita.</div>'
    + '<div style="display:flex;gap:8px;justify-content:center">'
    + '<button class="btn btn-ghost btn-lg" style="min-width:120px" onclick="closeM(\'m-del-pat\')">Cancelar</button>'
    + '<button class="btn btn-danger btn-lg" style="min-width:120px" onclick="confirmDeletePat(\'+id+\')">Sim, remover</button>'
    + '</div></div>';
  document.body.appendChild(modal);
  setTimeout(function () { modal.classList.add('open'); }, 10);
  modal.addEventListener('click', function (e) { if (e.target === modal) closeM('m-del-pat'); });
}

function confirmDeletePat(id) {
  var p = pats.find(function (x) { return x.id === id });
  var nome = p ? p.n : 'paciente';
  pats = pats.filter(function (x) { return x.id !== id });
  if (selPat && selPat.id === id) selPat = pats[0] || null;
  DB.save();
  closeM('m-del-pat');
  showToast('"' + nome + '" removido da lista.', 'i');
  goP('pat', document.getElementById('ni-pat'));
  // Atualizar badge
  var niPat = document.getElementById('ni-pat');
  if (niPat) { var badge = niPat.querySelector('.nb'); if (badge) badge.textContent = pats.length; }
}


// ─── PRESCRIPTION ───
function rPresc() {
  var p = selPat || pats[0];
  return `<div class="presc-layout">
 <div>
  <div class="card" style="margin-bottom:12px">
   <div class="ch"><span class="ct">Paciente</span><button class="btn btn-ghost btn-sm" onclick="goP('pat',document.getElementById('ni-pat'))">Trocar</button></div>
   <div style="display:flex;align-items:center;gap:10px">
    <div class="pac-av ${p.av}">${p.i}</div>
    <div><div style="font-size:13px;font-weight:600">${p.n}</div><div style="font-size:11px;color:var(--n4)">${p.goal} · ${p.w}kg · ${p.h}cm</div></div>
   </div>
   ${p.alerg ? '<div class="alert alert-r" style="margin-top:10px;margin-bottom:0"><span>⚠ Alergia: <strong>' + p.alerg + '</strong></span></div>' : ''}
  </div>
  <div class="card" style="margin-bottom:12px">
   <div class="ch"><span class="ct">Fórmula TMB</span></div>
   <div style="display:flex;gap:4px;margin-bottom:12px">
    <button class="btn btn-sm ${formula === 'hb' ? 'btn-p' : 'btn-ghost'}" onclick="setFormula('hb')">Harris-Benedict</button>
    <button class="btn btn-sm ${formula === 'mf' ? 'btn-p' : 'btn-ghost'}" onclick="setFormula('mf')">Mifflin</button>
    <button class="btn btn-sm ${formula === 'km' ? 'btn-p' : 'btn-ghost'}" onclick="setFormula('km')">Katch-McArdle</button>
   </div>
   <div class="row2">
    <div class="fld"><label class="lbl">Peso (kg)</label><input class="inp" id="p-peso" type="number" step="0.1" value="${p.w}" oninput="recalc()"/></div>
    <div class="fld"><label class="lbl">Altura (cm)</label><input class="inp" id="p-alt" type="number" value="${p.h}" oninput="recalc()"/></div>
   </div>
   <div class="row2">
    <div class="fld"><label class="lbl">Idade</label><input class="inp" id="p-age" type="number" value="${p.age}" oninput="recalc()"/></div>
    <div class="fld"><label class="lbl">% Gordura</label><input class="inp" id="p-fat" type="number" step="0.1" value="${p.fat}" oninput="recalc()"/></div>
   </div>
   <div class="fld"><label class="lbl">Sexo</label><select class="sel" id="p-sex" onchange="recalc()"><option value="F" ${p.sex === 'F' ? 'selected' : ''}>Feminino</option><option value="M" ${p.sex === 'M' ? 'selected' : ''}>Masculino</option></select></div>
   <div class="fld"><label class="lbl">Nível de Atividade</label>
    <select class="sel" id="p-act" onchange="recalc()">
     <option value="1.2">Sedentário (1.2)</option>
     <option value="1.375">Levemente ativo (1.375)</option>
     <option value="1.55" selected>Moderadamente ativo (1.55)</option>
     <option value="1.725">Muito ativo (1.725)</option>
     <option value="1.9">Extremamente ativo (1.9)</option>
    </select>
   </div>
   <div style="margin-top:8px;background:linear-gradient(135deg,#163318,#276330);border-radius:var(--r2);padding:14px;color:#fff" id="calc-result">
    <div style="font-size:10px;color:rgba(255,255,255,.5);text-transform:uppercase;letter-spacing:.06em;font-family:var(--jk)">Resultado</div>
    <div style="font-family:var(--in);font-size:28px;font-weight:800;letter-spacing:-1px;margin:4px 0" id="calc-tmb">—</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:8px" id="calc-detail"></div>
   </div>
   <div style="margin-top:10px"><label class="lbl">Objetivo do plano</label>
    <div style="display:flex;gap:5px" id="obj-btns">
     <button class="btn btn-sm btn-s" onclick="setObj(-500,'Perda de peso')">- 500kcal</button>
     <button class="btn btn-sm btn-s" onclick="setObj(0,'Manutenção')">= Manter</button>
     <button class="btn btn-sm btn-s" onclick="setObj(300,'Ganho de massa')">+ 300kcal</button>
    </div>
    <div style="margin-top:7px;display:flex;gap:6px;align-items:center">
     <label class="lbl" style="margin:0;white-space:nowrap">Ajuste manual</label>
     <input class="inp" id="p-adj" type="number" value="0" style="width:80px" oninput="applyGet()"/>
     <span style="font-size:11px;color:var(--n4)">kcal/dia</span>
     <button class="btn btn-p btn-sm" onclick="applyGet()">Aplicar</button>
    </div>
   </div>
  </div>
  <div class="card" style="margin-bottom:12px">
   <div class="ch"><span class="ct">Distribuição de Macros</span><div style="display:flex;gap:3px"><button class="btn btn-sm ${macroMode === 'gkg' ? 'btn-p' : 'btn-ghost'}" onclick="setMacMode('gkg')">g/kg</button><button class="btn btn-sm ${macroMode === 'pct' ? 'btn-p' : 'btn-ghost'}" onclick="setMacMode('pct')">%</button></div></div>
   <div id="macro-ui"></div>
   <div id="macro-sum" style="margin-top:10px"></div>
   <div style="margin-top:10px;display:flex;justify-content:center">
    <svg id="pizza-svg" viewBox="-1 -1 2 2" width="110" height="110" style="transform:rotate(-90deg)"></svg>
   </div>
   <div id="pizza-leg" style="margin-top:6px"></div>
  </div>
  <div class="card" style="padding:0;overflow:hidden">
   <div style="padding:14px 16px 10px;border-bottom:1px solid var(--n2)">
    <div style="font-family:var(--jk);font-size:12px;font-weight:700;color:var(--n9);margin-bottom:10px;display:flex;align-items:center;justify-content:space-between">
     🔍 Busca de Alimentos
     <span id="food-count" style="font-size:10px;font-weight:500;color:var(--n4)"></span>
    </div>
    <div style="position:relative;margin-bottom:7px">
     <svg style="position:absolute;left:10px;top:50%;transform:translateY(-50%);color:var(--n4);pointer-events:none" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
     <input style="width:100%;padding:9px 32px 9px 32px;border:1.5px solid var(--n2);border-radius:8px;font-size:12.5px;color:var(--n9);outline:none;transition:border-color .15s" id="food-q" placeholder="Buscar por nome… ex: arroz, frango" oninput="searchFood()" onfocus="this.style.borderColor='var(--g4)'" onblur="this.style.borderColor='var(--n2)'"/>
     <button id="food-q-clear" onclick="document.getElementById('food-q').value='';searchFood()" style="position:absolute;right:8px;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;color:var(--n4);font-size:14px;display:none">×</button>
    </div>
    <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px" id="cat-pills">
     <button class="cat-pill on" id="cat-all-btn" onclick="setCat(null,'')">Todos</button>
     <span id="cat-pills-gen"></span>
    </div>
   </div>
   <div id="food-results" style="max-height:200px;overflow-y:auto"></div>
   <div id="food-preview" style="display:none;padding:10px 14px;background:var(--g0);border-top:1px solid var(--n2);font-size:11.5px"></div>
   <div style="padding:10px 14px;border-top:1px solid var(--n2);background:var(--n0)">
    <div style="display:flex;gap:6px;align-items:center;margin-bottom:7px">
     <select class="sel" id="add-meal-sel" style="flex:1;font-size:11.5px">${meals.map(function (m, i) { return '<option value="' + i + '">' + m.em + ' ' + m.name + '</option>' }).join('')}</select>
     <div style="display:flex;align-items:center;gap:4px;background:#fff;border:1.5px solid var(--n2);border-radius:7px;padding:4px 8px">
      <input id="add-qty" type="number" value="100" min="1" max="9999" style="width:52px;border:none;outline:none;font-size:12.5px;font-weight:600;color:var(--n9);text-align:center"/>
      <span style="font-size:10.5px;color:var(--n4);font-weight:600">g</span>
     </div>
    </div>
    <div style="display:flex;gap:5px">
     <button class="btn btn-p btn-sm" style="flex:1" onclick="addFood()">＋ Adicionar</button>
     <button class="btn btn-ghost btn-sm" onclick="showSubs()" title="Ver substituições">⇄ Subs</button>
     <button class="btn btn-ghost btn-sm" onclick="toggleCustomFood()" id="btn-custom" title="Alimento personalizado">✏️</button>
    </div>
    <div id="custom-food-panel" style="display:none;margin-top:9px;padding-top:9px;border-top:1px dashed var(--n2)">
     <div style="font-size:10px;font-weight:700;color:var(--n5);letter-spacing:.06em;text-transform:uppercase;margin-bottom:7px">Alimento Personalizado</div>
     <div style="display:grid;grid-template-columns:1fr 48px;gap:6px;margin-bottom:6px">
      <input class="inp" id="cf-n" placeholder="Nome do alimento" style="font-size:12px"/>
      <input class="inp" id="cf-em" placeholder="🍽️" style="text-align:center;font-size:14px"/>
     </div>
     <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:5px;margin-bottom:7px">
      <div><div style="font-size:9px;color:var(--n4);font-weight:600;margin-bottom:2px">KCAL</div><input class="inp" id="cf-k" type="number" placeholder="0" style="font-size:12px;padding:6px 8px"/></div>
      <div><div style="font-size:9px;color:var(--n4);font-weight:600;margin-bottom:2px">PROT g</div><input class="inp" id="cf-p" type="number" step="0.1" placeholder="0" style="font-size:12px;padding:6px 8px"/></div>
      <div><div style="font-size:9px;color:var(--n4);font-weight:600;margin-bottom:2px">CARB g</div><input class="inp" id="cf-c" type="number" step="0.1" placeholder="0" style="font-size:12px;padding:6px 8px"/></div>
      <div><div style="font-size:9px;color:var(--n4);font-weight:600;margin-bottom:2px">GORD g</div><input class="inp" id="cf-g" type="number" step="0.1" placeholder="0" style="font-size:12px;padding:6px 8px"/></div>
     </div>
     <button class="btn btn-p btn-sm" style="width:100%" onclick="addCustomFood()">Criar e selecionar alimento</button>
    </div>
   </div>
  </div>
 </div>
 <div>
  <div class="totals-bar" id="totals-bar">
   <div class="tb-main" id="tb-kcal">0 kcal</div>
   <div class="tb-label" id="tb-goal-lbl">Monte o plano abaixo</div>
   <div id="tb-macros-bars"></div>
  </div>
  <div id="meal-builder"></div>
  <div class="card" style="margin-top:10px">
   <div class="ch"><span class="ct">Histórico de Planos</span><button class="btn btn-ghost btn-sm" onclick="openM('m-tpl')">💾 Salvar atual</button></div>
   <div id="plan-hist">${buildPlanHist()}</div>
  </div>
 </div>
</div>`;
}

function buildPlanHist() {
  var p = selPat || pats[0];
  var plans = p.plans || [];
  if (!plans.length) return '<div style="font-size:12.5px;color:var(--n4);padding:10px 0;text-align:center">Nenhum plano salvo para este paciente ainda.</div>';
  return plans.map(function (pl, i) { return '<div class="plan-ver' + (i === 0 ? ' active' : '') + '"><div><div class="pv-date">' + pl.date + '</div><div class="pv-meta">' + pl.kcal + ' kcal · ' + pl.meals + ' refeições</div></div><span class="pv-badge" style="background:#fdd0a8;color:#6b2d00">' + pl.name + '</span><button class="btn btn-ghost btn-sm" onclick="loadPlan(' + i + ')">Carregar</button></div>'; }).join('');
}

function bindPrescEvents() {
  recalc(); buildCatPills(); searchFood(); renderMeals(); renderMacUI();
}
function setFormula(f) { formula = f; var el = document.getElementById('pg'); if (el) el.innerHTML = rPresc(); setTimeout(function () { bindPrescEvents(); }, 50); }
function setMacMode(m) { macroMode = m; renderMacUI(); }

function recalc() {
  var peso = parseFloat(document.getElementById('p-peso').value) || 0;
  var alt = parseFloat(document.getElementById('p-alt').value) || 0;
  var age = parseFloat(document.getElementById('p-age').value) || 0;
  var fat = parseFloat(document.getElementById('p-fat').value) || 0;
  var sex = document.getElementById('p-sex').value;
  var tmb = 0;
  if (formula === 'hb') { tmb = sex === 'F' ? 655.1 + 9.563 * peso + 1.85 * alt - 4.676 * age : 66.5 + 13.75 * peso + 5.003 * alt - 6.775 * age; }
  else if (formula === 'mf') { tmb = sex === 'F' ? 10 * peso + 6.25 * alt - 5 * age - 161 : 10 * peso + 6.25 * alt - 5 * age + 5; }
  else { var mm = peso * (1 - fat / 100); tmb = 370 + 21.6 * mm; }
  var act = parseFloat(document.getElementById('p-act').value) || 1.55;
  var get = tmb * act; var adj = parseFloat(document.getElementById('p-adj').value) || 0;
  prescGoal = Math.round(get + adj);
  var el = document.getElementById('calc-tmb'); if (el) el.textContent = prescGoal.toLocaleString('pt-BR') + ' kcal/dia';
  var det = document.getElementById('calc-detail');
  if (det) det.innerHTML = ['<div style="font-size:10px;color:rgba(255,255,255,.5)">TMB</div><div style="font-size:13px;font-weight:700">' + Math.round(tmb) + ' kcal</div>', '<div style="font-size:10px;color:rgba(255,255,255,.5)">GET</div><div style="font-size:13px;font-weight:700">' + Math.round(get) + ' kcal</div>'].join('');
  updateTotals();
}
function setObj(adj, label) {
  document.getElementById('p-adj').value = adj;
  document.querySelectorAll('#obj-btns .btn').forEach(function (b) { b.classList.remove('btn-p'); b.classList.add('btn-s'); });
  event.target.classList.add('btn-p'); event.target.classList.remove('btn-s');
  applyGet();
}
function applyGet() { recalc(); }

function renderMacUI() {
  var ui = document.getElementById('macro-ui'); if (!ui) return;
  var peso = parseFloat((document.getElementById('p-peso') || {}).value) || 70;
  if (macroMode === 'gkg') {
    ui.innerHTML = '<div class="row3"><div class="fld"><label class="lbl">Proteínas (g/kg)</label><input class="inp" id="mac-p" type="number" step="0.1" value="2.0" oninput="recalcMacros()"/></div><div class="fld"><label class="lbl">Gorduras (g/kg)</label><input class="inp" id="mac-g" type="number" step="0.1" value="1.0" oninput="recalcMacros()"/></div><div class="fld"><label class="lbl">Carboidratos (g/kg)</label><input class="inp" id="mac-c" type="number" step="0.1" value="auto" placeholder="auto" oninput="recalcMacros()"/></div></div>';
    recalcMacros();
  } else {
    ui.innerHTML = '<div class="row3"><div class="fld"><label class="lbl">Proteínas (%)</label><input class="inp" id="mac-pp" type="number" value="30" oninput="recalcMacroPct()"/></div><div class="fld"><label class="lbl">Gorduras (%)</label><input class="inp" id="mac-gp" type="number" value="25" oninput="recalcMacroPct()"/></div><div class="fld"><label class="lbl">Carboidratos (%)</label><input class="inp" id="mac-cp" type="number" value="45" oninput="recalcMacroPct()"/></div></div>';
    recalcMacroPct();
  }
}
function recalcMacros() {
  var peso = parseFloat((document.getElementById('p-peso') || {}).value) || 70;
  var gkP = parseFloat(document.getElementById('mac-p').value) || 2;
  var gkG = parseFloat(document.getElementById('mac-g').value) || 1;
  mP = Math.round(gkP * peso); mF = Math.round(gkG * peso);
  var remKcal = prescGoal - mP * 4 - mF * 9; mC = Math.round(remKcal / 4); if (mC < 0) mC = 0;
  renderMacSum();
}
function recalcMacroPct() {
  var pp = parseFloat(document.getElementById('mac-pp').value) || 30;
  var gp = parseFloat(document.getElementById('mac-gp').value) || 25;
  var cp = parseFloat(document.getElementById('mac-cp').value) || 45;
  mP = Math.round(prescGoal * pp / 100 / 4); mF = Math.round(prescGoal * gp / 100 / 9); mC = Math.round(prescGoal * cp / 100 / 4);
  renderMacSum();
}
function renderMacSum() {
  var sum = document.getElementById('macro-sum'); if (!sum) return;
  sum.innerHTML = '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;text-align:center;margin-bottom:6px">'
    + [['Proteínas', '#3b82f6', mP + 'g'], ['Carboidratos', '#f59e0b', mC + 'g'], ['Gorduras', '#ef4444', mF + 'g']].map(function (r) { return '<div style="background:var(--n0);border-radius:var(--r);padding:8px"><div style="font-family:var(--in);font-size:15px;font-weight:800;color:' + r[1] + '">' + r[2] + '</div><div style="font-size:9.5px;color:var(--n4);margin-top:1px;font-family:var(--jk)">' + r[0] + '</div></div>'; }).join('') + '</div>';
  updatePizza();
}
function updatePizza() {
  var tk = mP * 4 + mC * 4 + mF * 9; if (!tk) return;
  var pcts = [mP * 4 / tk, mC * 4 / tk, mF * 4 / tk];
  var colors = ['#3b82f6', '#f59e0b', '#ef4444']; var labels = ['Proteínas', 'Carboidratos', 'Gorduras'];
  var svg = document.getElementById('pizza-svg'); var leg = document.getElementById('pizza-leg'); if (!svg) return;
  var cur = 0, paths = '';
  pcts.forEach(function (p, i) {
    var start = cur * 2 * Math.PI, end = (cur + p) * 2 * Math.PI;
    var x1 = Math.sin(start), y1 = -Math.cos(start), x2 = Math.sin(end), y2 = -Math.cos(end);
    var large = p > 0.5 ? 1 : 0;
    if (p > 0.001) paths += '<path d="M 0 0 L ' + x1.toFixed(3) + ' ' + y1.toFixed(3) + ' A 1 1 0 ' + large + ' 1 ' + x2.toFixed(3) + ' ' + y2.toFixed(3) + ' Z" fill="' + colors[i] + '" opacity=".85"/>';
    cur += p;
  });
  svg.innerHTML = paths;
  if (leg) leg.innerHTML = pcts.map(function (p, i) { return '<div class="pizza-lr"><div class="pizza-dot" style="background:' + colors[i] + '"></div><span class="pizza-lbl">' + labels[i] + '</span><span class="pizza-pct">' + (p * 100).toFixed(0) + '%</span></div>'; }).join('');
}

var _foodCat = '';
function setCat(el, cat) {
  _foodCat = cat || '';
  document.querySelectorAll('.cat-pill').forEach(function (b) { b.classList.remove('on') });
  if (el && typeof el === 'object') el.classList.add('on');
  else { var first = document.querySelector('.cat-pill'); if (first) first.classList.add('on'); }
  searchFood();
}
function buildCatPills() {
  var gen = document.getElementById('cat-pills-gen'); if (!gen) return;
  var cats = [...new Set(FOOD_DB.map(function (f) { return f.cat }))];
  gen.innerHTML = cats.map(function (cat) {
    var label = cat.split(' ')[0];
    var btn = document.createElement('button');
    btn.className = 'cat-pill';
    btn.textContent = label;
    btn.title = cat;
    btn.onclick = function () { setCat(this, cat); };
    return btn.outerHTML;
  }).join('');
  // Fix: attach events after innerHTML (outerHTML loses onclick for complex cases)
  // Use data-cat approach instead
  gen.innerHTML = cats.map(function (cat) {
    var label = cat.split(' ')[0];
    return '<button class="cat-pill" data-cat="' + cat + '" onclick="setCatByData(this)">' + label + '</button>';
  }).join('');
}
function setCatByData(el) { setCat(el, (el.dataset || {}).cat || ''); }
function searchFood() {
  var q = (document.getElementById('food-q') || {}).value || '';
  var clearBtn = document.getElementById('food-q-clear');
  if (clearBtn) clearBtn.style.display = q ? 'block' : 'none';
  var res = FOOD_DB.filter(function (f) {
    var matchQ = !q || f.n.toLowerCase().includes(q.toLowerCase()) || f.cat.toLowerCase().includes(q.toLowerCase());
    var matchC = !_foodCat || f.cat === _foodCat;
    return matchQ && matchC;
  });
  var cnt = document.getElementById('food-count');
  if (cnt) cnt.textContent = res.length + ' resultado' + (res.length !== 1 ? 's' : '');
  var el = document.getElementById('food-results'); if (!el) return;
  var display = res.slice(0, 30);
  function hl(txt) {
    if (!q) return txt;
    var re = new RegExp('(' + q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
    return txt.replace(re, '<mark style="background:#fff3ec;color:#c4420a;border-radius:2px;padding:0 1px">$1</mark>');
  }
  function pfBadge(p) {
    if (p >= 25) return '<span style="background:#e0f2fe;color:#0369a1;font-size:9px;font-weight:700;padding:1px 5px;border-radius:4px">Alto Prot</span>';
    if (p < 5) return '<span style="background:#fef9c3;color:#854d0e;font-size:9px;font-weight:700;padding:1px 5px;border-radius:4px">Low Carb</span>';
    return '';
  }
  el.innerHTML = display.map(function (f) {
    return '<div class="fr" id="fr-' + f.id + '" onclick="selectFood(\'+f.id+\')">'
      + '<span style="font-size:16px;line-height:1">' + f.e + '</span>'
      + '<div style="flex:1;min-width:0">'
      + '<div style="font-size:12px;font-weight:600;color:var(--n8);display:flex;align-items:center;gap:5px">' + hl(f.n) + pfBadge(f.p) + '</div>'
      + '<div style="font-size:10px;color:var(--n4);margin-top:1px">'
      + '<span style="color:#c4420a;font-weight:600">' + f.p + 'g prot</span>'
      + ' · <span>' + f.c + 'g carb</span>'
      + ' · <span>' + f.g + 'g gord</span>'
      + (f.fb ? ' · <span style="color:#059669">' + f.fb + 'g fib</span>' : '')
      + '</div>'
      + '</div>'
      + '<div style="text-align:right;flex-shrink:0">'
      + '<div style="font-family:var(--in);font-size:13px;font-weight:800;color:var(--g5)">' + f.k + '</div>'
      + '<div style="font-size:9px;color:var(--n4)">kcal/100g</div>'
      + '</div>'
      + '</div>';
  }).join('')
    + (res.length > 30 ? '<div style="text-align:center;padding:8px;font-size:11px;color:var(--n4)">+' + (res.length - 30) + ' resultados — refine a busca</div>' : '')
    + (res.length === 0 ? '<div style="text-align:center;padding:20px;color:var(--n4)"><div style="font-size:20px;margin-bottom:6px">🔍</div><div style="font-size:12px">Nenhum alimento encontrado<br><span style="font-size:11px">Tente outro termo ou crie um personalizado ✏️</span></div></div>' : '');
}
function toggleCustomFood() {
  var p = document.getElementById('custom-food-panel');
  if (p) p.style.display = p.style.display === 'none' ? 'block' : 'none';
}
var _selFood = null;
function selectFood(id) {
  _selFood = FOOD_DB.find(function (f) { return f.id === id });
  document.querySelectorAll('.fr').forEach(function (el) { el.classList.remove('sel') });
  var el = document.getElementById('fr-' + id); if (el) { el.classList.add('sel'); el.scrollIntoView({ block: 'nearest' }); }
  var pv = document.getElementById('food-preview');
  if (!pv || !_selFood) return;
  var f = _selFood;
  var qty = parseFloat((document.getElementById('add-qty') || {}).value) || 100;
  var fac = qty / 100;
  pv.style.display = 'block';
  pv.innerHTML = '<div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">'
    + '<span style="font-size:20px">' + f.e + '</span>'
    + '<div><div style="font-family:var(--jk);font-size:12px;font-weight:700;color:var(--n9)">' + f.n + '</div>'
    + '<div style="font-size:10px;color:var(--n4)">' + f.cat + ' · TACO</div></div>'
    + '<div style="margin-left:auto;font-family:var(--in);font-size:18px;font-weight:800;color:var(--g5)">' + Math.round(f.k * fac) + '<span style="font-size:10px;font-weight:500;color:var(--n4)"> kcal</span></div>'
    + '</div>'
    + '<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:4px">'
    + [['Prot', f.p, fac, '#2563eb'], ['Carb', f.c, fac, '#d97706'], ['Gord', f.g, fac, '#dc2626'], ['Fibra', f.fb || 0, fac, '#059669']].map(function (m) {
      return '<div style="background:#fff;border-radius:6px;padding:5px 6px;text-align:center;border:1px solid var(--n2)">'
        + '<div style="font-family:var(--in);font-size:13px;font-weight:700;color:' + m[3] + '">' + ((m[1] * m[2]).toFixed(1)) + 'g</div>'
        + '<div style="font-size:9px;color:var(--n4);margin-top:1px">' + m[0] + '</div>'
        + '</div>';
    }).join('')
    + '</div>'
    + (f.fe || f.ca || f.vc ? '<div style="margin-top:6px;font-size:10px;color:var(--n5)">🔬 '
      + (f.fe ? 'Fe: ' + f.fe + 'mg · ' : '') + (f.ca ? 'Ca: ' + f.ca + 'mg · ' : '') + (f.vc ? 'Vit C: ' + f.vc + 'mg' : '')
      + '</div>' : '');
}
function addFood() {
  if (!_selFood) { showToast('Selecione um alimento primeiro', 'w'); return; }
  var qty = parseFloat(document.getElementById('add-qty').value) || 100;
  var mi = parseInt(document.getElementById('add-meal-sel').value) || 0;
  var factor = qty / 100;
  meals[mi].items.push({ food: _selFood, qty: qty, k: Math.round(_selFood.k * factor), p: +(_selFood.p * factor).toFixed(1), c: +(_selFood.c * factor).toFixed(1), g: +(_selFood.g * factor).toFixed(1) });
  renderMeals(); updateTotals(); showToast(_selFood.e + ' ' + _selFood.n + ' adicionado!', 's');
}
function addCustomFood() {
  var n = document.getElementById('cf-n').value; if (!n) { showToast('Digite o nome do alimento', 'w'); return; }
  var em = document.getElementById('cf-em').value || '🍽️';
  var k = parseFloat(document.getElementById('cf-k').value) || 0;
  var p = parseFloat(document.getElementById('cf-p').value) || 0;
  var c = parseFloat(document.getElementById('cf-c').value) || 0;
  var g = parseFloat(document.getElementById('cf-g').value) || 0;
  var nf = { id: Date.now(), n: n, e: em, cat: 'Personalizado', p: p, c: c, g: g, k: k, fe: 0, ca: 0, vc: 0, va: 0, zn: 0, b12: 0, fb: 0 };
  FOOD_DB.push(nf); _selFood = nf; showToast('Alimento "' + n + '" criado e selecionado!', 's');
  document.getElementById('food-q').value = n; searchFood(); selectFood(nf.id);
}

function renderMeals() {
  var el = document.getElementById('meal-builder'); if (!el) return;
  el.innerHTML = meals.map(function (m, mi) {
    return '<div class="card meal-blk" style="margin-bottom:10px">'
      + '<div class="meal-hd"><div class="meal-em">' + m.em + '</div><input class="meal-nm-edit" value="' + m.name + '" onchange="meals[\'+mi+\'].name=this.value"/>'
      + (m.items.length ? '<span class="meal-kcal">' + m.items.reduce(function (s, it) { return s + it.k }, 0) + ' kcal</span>' : '')
      + '<button class="btn btn-ghost btn-sm" onclick="addMealRow(\'+mi+\')">+ Alimento</button>'
      + '<button class="btn btn-ghost btn-sm" style="color:var(--red)" onclick="clearMeal(\'+mi+\')">🗑</button></div>'
      + (m.items.length ? m.items.map(function (it, ii) {
        return '<div class="fi"><span class="fi-em">' + it.food.e + '</span><span class="fi-nm">' + it.food.n + '</span>'
          + '<input class="fi-qty-inp" type="number" value="' + it.qty + '" onchange="updFoodQty(\'+mi+\',\'+ii+\',this.value)"/> g'
          + '<span class="fi-kcal">' + it.k + ' kcal</span>'
          + '<button class="fi-del" onclick="removeFoodItem(\'+mi+\',\'+ii+\')">×</button></div>';
      }).join('') : '<div style="font-size:11.5px;color:var(--n4);padding:6px 2px;font-style:italic">Nenhum alimento adicionado. Use a busca ao lado →</div>')
      + '</div>';
  }).join('')
    + '<button class="btn btn-ghost" style="width:100%;border:1.5px dashed var(--n3);color:var(--n5)" onclick="addMeal()">+ Adicionar Refeição</button>';
}
function updFoodQty(mi, ii, val) {
  var f = meals[mi].items[ii].food; var qty = parseFloat(val) || 0; var factor = qty / 100;
  meals[mi].items[ii] = { food: f, qty: qty, k: Math.round(f.k * factor), p: +(f.p * factor).toFixed(1), c: +(f.c * factor).toFixed(1), g: +(f.g * factor).toFixed(1) };
  updateTotals();
}
function removeFoodItem(mi, ii) { meals[mi].items.splice(ii, 1); renderMeals(); updateTotals(); }
function clearMeal(mi) { meals[mi].items = []; renderMeals(); updateTotals(); }
function addMeal() {
  var emojis = ['🌅', '☕', '🥗', '🍽️', '🌙', '⭐'];
  meals.push({ name: 'Nova Refeição', em: emojis[meals.length % emojis.length], items: [] });
  renderMeals();
  var sel = document.getElementById('add-meal-sel');
  if (sel) sel.innerHTML = meals.map(function (m, i) { return '<option value="' + i + '">' + m.em + ' ' + m.name + '</option>' }).join('');
}
function addMealRow(mi) {
  if (!_selFood) { showToast('Selecione um alimento na busca ao lado', 'w'); return; }
  var qty = 100; var factor = qty / 100;
  meals[mi].items.push({ food: _selFood, qty: qty, k: Math.round(_selFood.k * factor), p: +(_selFood.p * factor).toFixed(1), c: +(_selFood.c * factor).toFixed(1), g: +(_selFood.g * factor).toFixed(1) });
  renderMeals(); updateTotals();
}

function updateTotals() {
  var tk = 0, tp = 0, tc = 0, tf = 0;
  meals.forEach(function (m) { m.items.forEach(function (it) { tk += it.k; tp += it.p; tc += it.c; tf += it.g; }); });
  var el = document.getElementById('tb-kcal'); if (el) el.textContent = tk.toFixed(0) + ' kcal';
  var lbl = document.getElementById('tb-goal-lbl');
  if (lbl) { var diff = tk - prescGoal; lbl.textContent = prescGoal > 0 ? (diff >= 0 ? '+' + (diff).toFixed(0) : diff.toFixed(0)) + ' kcal vs meta de ' + prescGoal.toLocaleString('pt-BR') : 'Total do dia'; }
  var bars = document.getElementById('tb-macros-bars');
  if (bars) bars.innerHTML = [['Proteínas', tp, '#86efac', mP || 100], ['Carboidratos', tc, '#fcd34d', mC || 200], ['Gorduras', tf, '#fca5a5', mF || 70]].map(function (r) { var pct = Math.min(100, r[1] / r[3] * 100); return '<div class="tb-bar-row"><span class="tb-bl">' + r[0] + '</span><div class="tb-bt"><div class="tb-bf" style="width:' + pct + '%;background:' + r[2] + '"></div></div><span class="tb-bv">' + r[1].toFixed(1) + 'g / ' + r[3] + 'g</span></div>'; }).join('');
  renderMeals();
}

function showSubs() {
  if (!_selFood) { showToast('Selecione um alimento para ver substituições', 'w'); return; }
  var subs = SUBS[_selFood.n] || [];
  document.getElementById('sub-title').textContent = 'Substituições para ' + _selFood.e + ' ' + _selFood.n;
  document.getElementById('sub-body').innerHTML = subs.length
    ? subs.map(function (s) { var f = FOOD_DB.find(function (x) { return x.n === s.n }); return '<div class="fr" onclick="if(' + !!f + '){selectFood(' + (f ? f.id : 0) + ');closeM(\'m-sub\')}">' + '<span style="font-size:16px">' + s.e + '</span><div><div style="font-size:12.5px;font-weight:600">' + s.n + '</div>' + (f ? '<div style="font-size:10.5px;color:var(--n4)">' + f.k + ' kcal · P:' + f.p + 'g · C:' + f.c + 'g · G:' + f.g + 'g</div>' : '') + '</div></div>'; }).join('')
    : '<div style="font-size:13px;color:var(--n4);padding:10px">Nenhuma substituição cadastrada para este alimento.</div>';
  openM('m-sub');
}

function loadTpl() {
  var html = '<div class="mh"><div class="mt">Usar Template de Plano</div><button class="mc" onclick="closeM(\'m-tpll\')">×</button></div>';
  html += templates.map(function (t) { return '<div class="plan-ver" onclick="applyTpl(' + t.id + ');closeM(\'m-tpll\')"><div><div class="pv-date">' + t.name + '</div><div class="pv-meta">' + t.kcal + ' kcal · ' + t.meals.length + ' refeições</div><div style="font-size:10.5px;color:var(--n4);margin-top:2px">' + t.desc + '</div></div><button class="btn btn-p btn-sm">Usar</button></div>'; }).join('');
  var modal = document.createElement('div'); modal.className = 'ov'; modal.id = 'm-tpll';
  modal.innerHTML = '<div class="modal">' + html + '</div>';
  document.body.appendChild(modal); setTimeout(function () { modal.classList.add('open') }, 10);
  modal.addEventListener('click', function (e) { if (e.target === modal) closeM('m-tpll') });
}
function applyTpl(id) {
  var t = templates.find(function (x) { return x.id === id }); if (!t) return;
  initMeals(t.meals); prescGoal = t.kcal; renderMeals(); updateTotals();
  // Salvar no perfil do paciente automaticamente
  savePlanForPatient();
  showToast('Template "' + t.name + '" aplicado e salvo no paciente!', 's');
}
function loadPlan(i) {
  var p = selPat || pats[0]; var plan = (p.plans || [])[i]; if (!plan) return;
  initMeals(plan.meals); prescGoal = plan.kcal; renderMeals(); updateTotals(); showToast('Plano de ' + plan.date + ' carregado!', 's'); closeM('m-planv');
}

function saveTpl() {
  var name = document.getElementById('tpl-name').value; if (!name) { showToast('Digite o nome do template', 'w'); return; }
  var desc = document.getElementById('tpl-desc').value;
  var tk = 0; meals.forEach(function (m) { m.items.forEach(function (it) { tk += it.k }); });
  templates.push({ id: Date.now(), name: name, desc: desc, kcal: Math.round(tk), meals: meals.map(function (m) { return { name: m.name, em: m.em, items: m.items.map(function (it) { return { fid: it.food.id, qty: it.qty }; }) }; }) });
  closeM('m-tpl'); showToast('Template "' + name + '" salvo!', 's');
}
function savePlanForPatient() {
  var p = selPat || pats[0];
  if (!p) { showToast('Nenhum paciente selecionado', 'w'); return; }
  if (!p.plans) p.plans = [];

  var tk = 0, tp = 0, tc = 0, tg = 0, nMeals = 0;
  meals.forEach(function (m) {
    if (m.items.length > 0) nMeals++;
    m.items.forEach(function (it) { tk += it.k; tp += it.p || 0; tc += it.c || 0; tg += it.g || 0; });
  });

  var now = new Date();
  var d = now.getDate() + '/' + (now.getMonth() + 1) + '/' + now.getFullYear();

  var mealDataSave = meals.map(function (m) { return { name: m.name, em: m.em || '🍽️', items: m.items.map(function (it) { return { fid: it.food ? it.food.id : null, qty: it.qty, k: it.k, p: it.p || 0, c: it.c || 0, g: it.g || 0, e: it.food ? it.food.e : '🍽️', n: it.food ? it.food.n : 'Alimento' }; }) }; });
  var planObj = { date: d, kcal: Math.round(tk), meals: nMeals, name: 'Plano ' + d, macros: { p: +tp.toFixed(1), c: +tc.toFixed(1), g: +tg.toFixed(1) }, mealData: mealDataSave };

  // Inserir no topo, manter até 10 versões
  p.plans.unshift(planObj);
  if (p.plans.length > 10) p.plans = p.plans.slice(0, 10);

  // Atualizar data da última consulta
  p.last = d;

  DB.save();
  showToast('Plano de ' + p.n + ' salvo com sucesso!', 's');
  var h = document.getElementById('plan-hist'); if (h) h.innerHTML = buildPlanHist();

  // Atualizar card na lista de pacientes se visível
  var grid = document.getElementById('pat-grid');
  if (grid) grid.innerHTML = buildPatGrid(pats);
}


// ─── WEEKLY PLAN ───
function changeWeekPat(id) { selPat = pats.find(function (x) { return x.id === parseInt(id) }); goP('week', document.getElementById('ni-week')); }
function changeEvPat(id) { selPat = pats.find(function (x) { return x.id === parseInt(id) }); goP('ev', document.getElementById('ni-ev')); }
function rWeek() {
  var p = selPat || pats[0]; var today = new Date().getDay();
  var weekData = WEEK, fromPatient = false;
  if (p && p.plans && p.plans.length > 0 && p.plans[0].mealData) {
    var basePlan = p.plans[0].mealData;
    weekData = WEEK.map(function (day, di) { return { n: day.n, meals: basePlan.map(function (meal) { var varFac = 0.9 + ((di * 7 + meal.name.length) % 10) * 0.02; var items = meal.items.map(function (it) { var f = FOOD_DB.find(function (x) { return x.id === it.fid }); if (!f) return null; var qty = Math.round(it.qty * varFac); return { e: f.e, n: f.n, k: Math.round(f.k * qty / 100) }; }).filter(Boolean); return { n: meal.name, items: items }; }) }; });
    fromPatient = true;
  }
  var html = '';
  if (p && fromPatient) html += '<div class="alert alert-g" style="margin-bottom:12px"><span>📋 Plano semanal de <strong>' + escHtml(p.n) + '</strong> baseado na última prescrição salva</span></div>';
  else if (p) html += '<div class="alert alert-y" style="margin-bottom:12px"><span>⚠ <strong>' + escHtml(p.n) + '</strong> sem plano prescrito. <button class="btn btn-ghost btn-sm" onclick="goP(\'presc\',document.getElementById(\'ni-presc\'))">Prescrever →</button></span></div>';
  html += '<div style="display:flex;align-items:center;gap:10px;margin-bottom:14px"><select class="sel" style="width:auto" onchange="changeWeekPat(this.value)">' + pats.map(function (pp) { return '<option value="' + pp.id + '"' + (p && pp.id === p.id ? ' selected' : '') + '>' + escHtml(pp.n) + '</option>'; }).join('') + '</select><button class="btn btn-s btn-sm" style="margin-left:auto" onclick="goP(\'presc\',document.getElementById(\'ni-presc\'))">✏️ Editar plano</button></div>';
  html += '<div class="week-g">';
  for (var d = 0; d < 7; d++) { var day = weekData[d]; var isT = d === today; var dt = day.meals.reduce(function (s, m) { return s + m.items.reduce(function (ss, it) { return ss + it.k; }, 0); }, 0); html += '<div class="day-col"><div class="day-hd' + (isT ? ' today' : '') + '"><div class="day-dn">' + day.n.slice(0, 3) + '</div><div class="day-dd">' + (isT ? 'Hoje' : dt + ' kcal') + '</div></div>'; day.meals.forEach(function (m) { html += '<div class="day-mb"><div class="day-mn">' + m.n + '</div>'; m.items.forEach(function (it) { html += '<div class="day-fr"><span>' + it.e + ' ' + it.n + '</span><span>' + it.k + '</span></div>'; }); html += '</div>'; }); html += '<div class="day-tot">' + dt + ' kcal</div></div>'; }
  html += '</div>';
  var avg = Math.round(weekData.reduce(function (s, d) { return s + d.meals.reduce(function (s2, m) { return s2 + m.items.reduce(function (s3, it) { return s3 + it.k; }, 0); }, 0); }, 0) / 7);
  html += '<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px"><div class="card" style="text-align:center"><div style="font-family:var(--in);font-size:22px;font-weight:800;color:var(--g5)">' + (avg * 7).toLocaleString('pt-BR') + '</div><div style="font-size:11px;color:var(--n4);margin-top:3px">kcal na semana</div></div><div class="card" style="text-align:center"><div style="font-family:var(--in);font-size:22px;font-weight:800;color:var(--n9)">' + avg + '</div><div style="font-size:11px;color:var(--n4);margin-top:3px">média diária</div></div><div class="card" style="text-align:center"><div style="font-family:var(--in);font-size:22px;font-weight:800;color:var(--g5)">7</div><div style="font-size:11px;color:var(--n4);margin-top:3px">dias planejados</div></div><div class="card" style="text-align:center"><div style="font-family:var(--in);font-size:22px;font-weight:800;color:var(--n9)">' + (p && fromPatient ? p.plans[0].meals : 4) + '</div><div style="font-size:11px;color:var(--n4);margin-top:3px">refeições/dia</div></div></div>'
    + '<div class="card" style="margin-top:12px;background:var(--y0);border-color:var(--y3)"><div class="ch"><span class="ct" style="color:#78350f">💡 Orientações da Semana' + (p ? ' — ' + p.n : '') + '</span></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;font-size:12.5px;color:#92400e;line-height:2">' + ['Beba pelo menos 2L de água por dia', 'Mastigue devagar — 20× por mordida', 'Evite telas durante as refeições', 'Prefira temperos naturais ao sal', 'Inclua proteína em todas as refeições', 'Evite alimentos ultraprocessados', 'Durma 7–8 horas por noite', 'Pratique atividade física regularmente'].map(function (o) { return '<div>• ' + o + '</div>'; }).join('') + '</div></div>';
  return html;
}
// ─── EVOLUTION ───
function rEv() {
  var p = selPat || pats[0];
  if (!p) { return '<div class="alert alert-b"><span>Selecione um paciente para ver o acompanhamento.</span></div>'; }
  var hist = [...p.historico].reverse();
  var loss = p.wStart - p.w;
  var ws = hist.map(function (h) { return h.peso });
  var mn = Math.min.apply(null, ws) - 2, mx = Math.max.apply(null, ws) + 2;
  var nf = hist.length, cw = 500, ch = 140;
  var pts = hist.map(function (h, i) { var x = 30 + i * (cw - 60) / (nf > 1 ? nf - 1 : 1); var y = 16 + (mx - h.peso) / (mx - mn) * (ch - 28); return { x: x.toFixed(1), y: y.toFixed(1), h: h }; });
  var line = pts.map(function (p, i) { return (i === 0 ? 'M' : 'L') + p.x + ',' + p.y }).join(' ');
  var area = pts.map(function (p, i) { return (i === 0 ? 'M' : 'L') + p.x + ',' + p.y }).join(' ') + ' L' + pts[pts.length - 1].x + ',' + (ch - 12) + ' L' + pts[0].x + ',' + (ch - 12) + ' Z';
  var circles = pts.map(function (p) { return '<circle cx="' + p.x + '" cy="' + p.y + '" r="4.5" fill="var(--g5)" stroke="#fff" stroke-width="2.5"/><title>' + p.h.data + ': ' + p.h.peso + ' kg</title>'; }).join('');
  var labels = pts.map(function (p) { return '<text x="' + p.x + '" y="' + (ch) + '" text-anchor="middle" font-size="8" fill="#9ca3af" font-family="Inter,sans-serif" font-weight="600">' + p.h.data.substring(0, 5) + '</text>'; }).join('');
  var yvals = pts.map(function (p) { return '<text x="26" y="' + (+p.y + 4) + '" text-anchor="end" font-size="8" fill="#9ca3af" font-family="Inter,sans-serif">' + p.h.peso + '</text>'; }).join('');

  // alerts
  var labAlerts = [];
  if (p.exams.vitd && p.exams.vitd < 30) labAlerts.push('Vitamina D baixa (' + p.exams.vitd + ' ng/mL)');
  if (p.exams.gli && p.exams.gli > 100) labAlerts.push('Glicemia elevada (' + p.exams.gli + ' mg/dL)');
  if (p.exams.col && p.exams.col > 200) labAlerts.push('Colesterol total alto (' + p.exams.col + ' mg/dL)');
  if (p.exams.hem && p.exams.hem < 12) labAlerts.push('Hemoglobina baixa — anemia (' + p.exams.hem + ' g/dL)');
  if (p.exams.fer && p.exams.fer < 20) labAlerts.push('Ferritina baixa (' + p.exams.fer + ' ng/mL)');

  return (loss >= 5 ? '<div class="ach"><div class="ach-ico">🏆</div><div><div class="ach-t">Conquista: −' + loss.toFixed(1) + ' kg desde o início!</div><div class="ach-d">' + p.n + ' atingiu uma perda significativa de peso. Parabéns pela consistência!</div></div></div>' : '')
    + (labAlerts.length ? '<div class="alert alert-r"><span>⚠ <strong>Alertas laboratoriais:</strong> ' + labAlerts.join(' · ') + '</span></div>' : '')
    + '<div style="display:flex;gap:10px;margin-bottom:12px;flex-wrap:wrap;align-items:center">'
    + '<select class="sel" style="width:auto" onchange="changeEvPat(this.value)">'
    + pats.map(function (pp) { return '<option value="' + pp.id + '"' + (pp.id === p.id ? ' selected' : '') + '>' + escHtml(pp.n) + '</option>'; }).join('') + '</select>'
    + '<div style="margin-left:auto;display:flex;gap:6px">'
    + '<button class="btn btn-s btn-sm" onclick="openM(\'m-meas\')">+ Medidas</button>'
    + '<button class="btn btn-p btn-sm" onclick="rptMensal()">📊 Relatório PDF</button></div></div>'
    + '<div class="ev-metrics" style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:14px">'
    + [['Peso atual', p.w + ' kg', (loss >= 0 ? '↓ −' + loss.toFixed(1) + ' kg' : '↑ +' + Math.abs(loss).toFixed(1) + ' kg')], ['IMC', p.bmi, (p.bmi < 25 ? 'Eutrófico ✓' : 'Acima do ideal')], ['Cintura', (hist[hist.length - 1].cintura || p.historico[0].cintura) + ' cm', '↓ ' + (p.historico[p.historico.length - 1].cintura - (hist[hist.length - 1].cintura || 0)) + ' cm'], ['% Gordura', p.fat + '%', 'Registrado: ' + p.historico[0].fat + '%']].map(function (m) { return '<div class="ev-m"><div class="ev-m-n">' + m[0] + '</div><div style="font-family:var(--in);font-size:22px;font-weight:800;letter-spacing:-.5px;color:var(--n9);margin-top:4px">' + m[1] + '</div><div class="ev-m-l">' + m[0] + '</div><div class="ev-m-d">' + m[2] + '</div></div>'; }).join('') + '</div>'
    + '<div class="card" style="margin-bottom:12px"><div class="ch"><span class="ct">Evolução do Peso</span><button class="btn btn-ghost btn-sm" onclick="openM(\'m-meas\')">+ Nova medida</button></div>'
    + '<svg viewBox="0 0 ' + cw + ' ' + (ch + 10) + '" width="100%" height="' + (ch + 10) + '"><defs><linearGradient id="ev-g" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#22c55e" stop-opacity=".2"/><stop offset="100%" stop-color="#22c55e" stop-opacity="0"/></linearGradient></defs>'
    + '<path d="' + area + '" fill="url(#ev-g)"/>'
    + '<path d="' + line + '" fill="none" stroke="#22c55e" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>'
    + circles + labels + yvals + '</svg></div>'
    + '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">'
    + '<div class="card" style="padding:0;overflow:hidden"><div style="overflow-x:auto;-webkit-overflow-scrolling:touch"><table class="tbl"><thead><tr><th>Data</th><th>Peso</th><th>IMC</th><th>Cintura</th><th>% Gord</th><th>Obs</th></tr></thead><tbody>'
    + p.historico.map(function (h, i) { return '<tr' + (i === 0 ? ' class="tbl-act"' : '') + '><td>' + h.data + '</td><td><strong>' + h.peso + ' kg</strong></td><td>' + h.imc + '</td><td>' + h.cintura + ' cm</td><td>' + h.fat + '%</td><td style="color:var(--n4)">' + h.obs + '</td></tr>'; }).join('') + '</tbody></table></div>'
    + '<div><div class="card" style="margin-bottom:10px"><div class="ch"><span class="ct">Linha do Tempo</span></div>'
    + p.historico.slice(0, 4).map(function (h) { return '<div class="tl-item"><div class="tl-dot">' + h.data.slice(0, 2) + '</div><div class="tl-body"><div style="font-size:12px;font-weight:700;color:var(--n9)">' + h.data + '</div><div style="font-size:11.5px;color:var(--n5);margin-top:2px">Peso: ' + h.peso + ' kg · Cintura: ' + h.cintura + ' cm</div><div style="font-size:11px;color:var(--n4);margin-top:2px;font-style:italic">' + h.obs + '</div></div></div>'; }).join('') + '</div>'
    + '<div class="card"><div class="ch"><span class="ct">Notas Clínicas</span><button class="btn btn-p btn-sm" onclick="saveNote()">Salvar</button></div><textarea class="textarea" id="clin-note" placeholder="Anotações da consulta de hoje…" style="margin-bottom:10px"></textarea><div id="notas-list">' + buildNotasList(p) + '</div></div></div></div>';
}

function saveNote() {
  var el = document.getElementById('clin-note');
  var n = el ? el.value.trim() : '';
  if (!n) { showToast('Escreva uma nota antes de salvar', 'w'); return; }
  var p = selPat || pats[0];
  if (p) {
    if (!p.notas) p.notas = [];
    var now = new Date();
    var d = now.getDate() + '/' + (now.getMonth() + 1) + '/' + now.getFullYear();
    p.notas.unshift({ data: d, texto: n });
    if (p.notas.length > 20) p.notas = p.notas.slice(0, 20);
  }
  DB.save();
  showToast('Nota clínica salva!', 's');
  if (el) el.value = '';
  // Atualizar notas na tela se o container estiver visível
  var nc = document.getElementById('notas-list');
  if (nc && p) nc.innerHTML = buildNotasList(p);
}
function buildNotasList(p) {
  if (!p.notas || !p.notas.length) return '<div style="font-size:12px;color:var(--n4);font-style:italic">Nenhuma nota registrada ainda.</div>';
  return p.notas.map(function (n) {
    return '<div style="background:var(--n0);border-radius:var(--r);padding:10px 12px;margin-bottom:7px;border-left:3px solid var(--g4)">'
      + '<div style="font-size:10px;color:var(--n4);font-family:var(--jk);font-weight:700;margin-bottom:4px">' + n.data + '</div>'
      + '<div style="font-size:12.5px;color:var(--n8);line-height:1.7">' + n.texto + '</div></div>';
  }).join('');
}

// ─── MICRONUTRIENTS ───
function rMicro() {
  var p = selPat || pats[0];
  var nm = { fe: 0, ca: 0, vc: 0, va: 0, zn: 0, b12: 0, fb: 0 };
  var hasPlan = false, planSrc = null;
  if (p && p.plans && p.plans.length > 0) { planSrc = p.plans[0].mealData; hasPlan = !!planSrc; }
  if (planSrc) {
    planSrc.forEach(function (meal) {
      (meal.items || []).forEach(function (item) {
        var f = FOOD_DB.find(function (x) { return x.id === item.fid });
        if (f && f.micro) { var fac = (item.qty || 100) / 100; Object.keys(nm).forEach(function (k) { if (f.micro[k]) nm[k] += f.micro[k] * fac; }); }
        else { var kcalFac = (item.qty || 100) / 100 * (f ? f.k : 100) / 2000; nm.fe += 14 * kcalFac * 0.6; nm.ca += 1000 * kcalFac * 0.5; nm.vc += 75 * kcalFac * 0.7; nm.va += 700 * kcalFac * 0.6; nm.zn += 8 * kcalFac * 0.6; nm.b12 += 2.4 * kcalFac * 0.5; nm.fb += 25 * kcalFac * 0.65; }
      });
    });
  } else if (p) {
    var base = { 'Emagrecimento': { fe: 10.5, ca: 720, vc: 62, va: 520, zn: 5.8, b12: 2.1, fb: 18 }, 'Hipertrofia': { fe: 14.2, ca: 950, vc: 78, va: 630, zn: 9.5, b12: 3.2, fb: 22 }, 'Manutenção': { fe: 12.0, ca: 830, vc: 68, va: 580, zn: 7.2, b12: 2.6, fb: 20 }, 'Saúde geral': { fe: 11.8, ca: 800, vc: 72, va: 560, zn: 6.8, b12: 2.4, fb: 21 } }[p.goal] || { fe: 11.0, ca: 780, vc: 65, va: 540, zn: 6.5, b12: 2.3, fb: 19 };
    Object.assign(nm, base);
  }
  var alerts = Object.keys(nm).filter(function (k) { return RDA[k] && nm[k] / RDA[k].ref < 0.7 });
  var foodSugg = { fe: ['Fígado bovino', 'Feijão preto e lentilha', 'PTS de soja', 'Espinafre refogado', 'Sardinha enlatada', 'Castanha-do-pará'], ca: ['Leite e iogurte integral', 'Queijo mussarela e ricota', 'Sardinha com espinha', 'Tofu firme', 'Couve-manteiga', 'Brócolis'], vc: ['Acerola e goiaba', 'Pimentão vermelho', 'Laranja e limão', 'Morango fresco', 'Kiwi', 'Brócolis cru'], va: ['Fígado bovino', 'Cenoura crua', 'Batata-doce', 'Abóbora', 'Manga', 'Espinafre'], zn: ['Ostras e frutos do mar', 'Carne bovina', 'Sementes de abóbora', 'Castanha-de-caju', 'Feijão e lentilha', 'Nozes'], b12: ['Fígado bovino', 'Salmão e atum', 'Carne bovina', 'Ovo inteiro', 'Leite e derivados', 'Sardinha'], fb: ['Aveia em flocos', 'Linhaça e chia', 'Feijão e lentilha', 'Maçã com casca', 'Brócolis', 'Pão integral'] };
  var defKeys = alerts.length ? alerts : ['fe', 'ca'];
  var suggHtml = defKeys.slice(0, 2).map(function (k) { return '<div class="card"><div class="ch"><span class="ct">' + RDA[k].ico + ' Fontes de ' + RDA[k].n + '</span></div><div style="font-size:12.5px;color:var(--n7);line-height:2">' + (foodSugg[k] || []).map(function (f) { return '<div>• ' + f + '</div>'; }).join('') + '</div></div>'; }).join('');
  return (hasPlan ? '<div class="alert alert-b" style="margin-bottom:10px"><span>📊 Calculado com base no último plano prescrito de <strong>' + escHtml(p.n) + '</strong></span></div>' : '<div class="alert alert-y" style="margin-bottom:10px"><span>⚠ Sem plano prescrito — valores estimados pelo objetivo. Prescreva um plano para cálculo preciso.</span></div>')
    + (alerts.length ? '<div class="alert alert-r"><span>⚠ <strong>Deficiências:</strong> ' + alerts.map(function (k) { return RDA[k].n; }).join(', ') + '</span></div>' : '<div class="alert alert-g"><span>✓ Micronutrientes dentro da faixa recomendada.</span></div>')
    + '<div class="micro-g">' + Object.entries(RDA).map(function (e) { var k = e[0], r = e[1]; var v = nm[k] || 0; var pct = Math.min(100, v / r.ref * 100); var color = pct >= 90 ? '#22c55e' : pct >= 60 ? '#f59e0b' : '#ef4444'; var status = pct >= 90 ? 'Adequado' : pct >= 60 ? 'Atenção' : 'Deficiente'; return '<div class="micro-c"><div class="micro-nm"><span>' + r.ico + ' ' + r.n + '</span><span style="font-size:9.5px;color:' + (pct >= 90 ? '#16a34a' : pct >= 60 ? '#d97706' : '#dc2626') + ';font-weight:700;background:' + (pct >= 90 ? '#dcfce7' : pct >= 60 ? '#fef3c7' : '#fee2e2') + ';padding:2px 8px;border-radius:99px">' + status + '</span></div><div class="micro-tr"><div class="micro-fl" style="width:' + pct + '%;background:' + color + '"></div></div><div class="micro-vs"><span class="mv-cur" style="color:' + color + '">' + v.toFixed(1) + ' ' + r.un + '</span><span class="mv-mt">/ ' + r.ref + ' ' + r.un + '</span><span style="font-size:9.5px;color:var(--n4)">(' + Math.round(pct) + '%)</span></div></div>'; }).join('') + '</div>'
    + '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">' + suggHtml + '</div>';
}

// ─── 24H RECALL ───
function rRec() {
  var p = selPat || pats[0];
  if (!p) return '<div class="alert alert-b"><span>Selecione um paciente.</span></div>';
  var prescPlan = null;
  if (p.plans && p.plans.length > 0 && p.plans[0].mealData) prescPlan = p.plans[0].mealData.map(function (m) { var k = m.items.reduce(function (s, it) { var f = FOOD_DB.find(function (x) { return x.id === it.fid }); return s + Math.round((f ? f.k : 100) * (it.qty || 100) / 100); }, 0); return { n: m.name, k: k, items: m.items.map(function (it) { var f = FOOD_DB.find(function (x) { return x.id === it.fid }); return (f ? f.e + ' ' : '') + '"' + (f ? f.n : 'item') + '" ' + (it.qty || 100) + 'g'; }) }; });
  var diary = p.diary || []; var todayDiary = diary.length > 0 ? diary[diary.length - 1] : null;
  var cons;
  if (todayDiary && todayDiary.meals) { cons = todayDiary.meals; }
  else if (prescPlan) { var adh = (p.prog || 60) / 100; cons = prescPlan.map(function (m) { return { n: m.n, k: Math.round(m.k * (adh * (0.85 + Math.random() * 0.3))), items: m.items.slice(0, Math.max(1, Math.floor(m.items.length * adh))) }; }); }
  else { cons = [{ n: 'Café da manhã', k: Math.round(p.w * 1.8), items: ['Café com leite', 'Pão integral 2 fatias', 'Fruta 1 un'] }, { n: 'Almoço', k: Math.round(p.w * 3.2), items: ['Proteína grelhada 120g', 'Arroz integral 80g', 'Feijão 80g'] }, { n: 'Lanche', k: Math.round(p.w * 1.1), items: ['Iogurte grego 150g'] }, { n: 'Jantar', k: Math.round(p.w * 2.4), items: ['Sopa de legumes com frango'] }]; }
  var pres = prescPlan || [{ n: 'Café da manhã', k: Math.round(p.w * 2.0), items: ['Aveia 50g', 'Iogurte 150g', 'Fruta 1 un'] }, { n: 'Almoço', k: Math.round(p.w * 3.5), items: ['Proteína 140g', 'Cereal integral 100g', 'Leguminosa 80g'] }, { n: 'Lanche', k: Math.round(p.w * 1.2), items: ['Iogurte grego 150g', 'Oleaginosas 30g'] }, { n: 'Jantar', k: Math.round(p.w * 2.8), items: ['Proteína 130g', 'Tubérculo 120g', 'Legumes variados'] }];
  var tkP = pres.reduce(function (s, m) { return s + m.k; }, 0), tkC = cons.reduce(function (s, m) { return s + m.k; }, 0), diff = tkC - tkP, adPct = tkP > 0 ? Math.round(Math.min(130, tkC / tkP * 100)) : 0;
  var hasDiario = !!(todayDiary && todayDiary.meals), hasPlan = !!prescPlan;
  return '<div class="alert alert-' + (hasDiario ? 'g' : hasPlan ? 'b' : 'y') + '" style="margin-bottom:12px"><span>' + (hasDiario ? '✓ Consumido extraído do diário de hoje de <strong>' + escHtml(p.n) + '</strong>' : hasPlan ? '📋 Prescrito baseado no plano de <strong>' + escHtml(p.n) + '</strong> · consumido estimado por adesão (' + p.prog + '%)' : '⚠ Sem plano ou diário — valores estimados pelo peso e objetivo') + '</span></div>'
    + '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:14px">'
    + '<div class="card" style="text-align:center"><div style="font-family:var(--in);font-size:26px;font-weight:800;letter-spacing:-1px;color:var(--g5)">' + tkP + '<span style="font-size:13px;font-weight:500;color:var(--n4)"> kcal</span></div><div style="font-size:11.5px;color:var(--n4);margin-top:2px">Meta prescrita</div></div>'
    + '<div class="card" style="text-align:center"><div style="font-family:var(--in);font-size:26px;font-weight:800;letter-spacing:-1px;color:' + (Math.abs(diff) <= 100 ? '#16a34a' : diff > 0 ? '#dc2626' : '#f59e0b') + '">' + tkC + '<span style="font-size:13px;font-weight:500;color:var(--n4)"> kcal</span></div><div style="font-size:11.5px;color:var(--n4);margin-top:2px">Consumido · <strong style="color:' + (diff > 0 ? '#dc2626' : diff < 0 ? '#f59e0b' : '#16a34a') + '">' + (diff > 0 ? '+' : '') + diff + ' kcal</strong></div></div>'
    + '<div class="card" style="text-align:center"><div style="font-family:var(--in);font-size:26px;font-weight:800;letter-spacing:-1px;color:' + (adPct >= 90 && adPct <= 110 ? '#16a34a' : adPct >= 70 ? '#f59e0b' : '#dc2626') + '">' + adPct + '<span style="font-size:13px;font-weight:500;color:var(--n4)">%</span></div><div style="font-size:11.5px;color:var(--n4);margin-top:2px">Adesão ao plano</div></div></div>'
    + '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">'
    + '<div class="card"><div class="ch"><span class="ct" style="color:var(--g5)">✓ Prescrito' + (hasPlan ? ' — plano atual' : ' — estimado') + '</span></div>' + pres.map(function (m) { return '<div style="background:var(--g0);border-radius:var(--r);padding:10px 12px;margin-bottom:6px"><div style="display:flex;justify-content:space-between;margin-bottom:4px"><span style="font-family:var(--jk);font-size:11px;font-weight:700;color:var(--g5)">' + m.n + '</span><span class="tag tg">' + m.k + ' kcal</span></div><div style="font-size:11px;color:var(--n5)">' + (Array.isArray(m.items) ? m.items.join(' · ') : m.items || '—') + '</div></div>'; }).join('') + '</div>'
    + '<div class="card"><div class="ch"><span class="ct" style="color:#2563eb">📝 Consumido' + (hasDiario ? ' — diário de hoje' : ' — estimado') + '</span>' + (hasDiario ? '' : '<span class="tag ty" style="font-size:9px">Estimado</span>') + '</div>' + cons.map(function (m) { return '<div style="background:var(--blue-l);border-radius:var(--r);padding:10px 12px;margin-bottom:6px"><div style="display:flex;justify-content:space-between;margin-bottom:4px"><span style="font-family:var(--jk);font-size:11px;font-weight:700;color:#1d4ed8">' + m.n + '</span><span class="tag tb2">' + m.k + ' kcal</span></div><div style="font-size:11px;color:var(--n5)">' + (Array.isArray(m.items) ? m.items.join(' · ') : m.items || '—') + '</div></div>'; }).join('') + '</div></div>'
    + '<div class="card" style="margin-top:12px;background:var(--g0);border-color:var(--g2)"><div class="ch"><span class="ct" style="color:var(--g6)">📊 Adesão por refeição</span></div><div style="display:grid;grid-template-columns:repeat(' + (Math.min(pres.length, 4)) + ',1fr);gap:8px;margin-top:4px">' + pres.map(function (pm, i) { var cm = cons[i] || { k: 0 }; var pct = pm.k > 0 ? Math.round(Math.min(130, cm.k / pm.k * 100)) : 0; var color = pct >= 90 && pct <= 110 ? '#16a34a' : pct >= 70 ? '#f59e0b' : '#dc2626'; return '<div style="text-align:center;background:#fff;border-radius:var(--r);padding:10px 8px"><div style="font-size:20px;font-weight:800;color:' + color + '">' + pct + '%</div><div style="font-size:10px;color:var(--n4);margin-top:2px">' + pm.n.split(' ')[0] + '</div></div>'; }).join('') + '</div></div>';
}
// ─── AI NUTRICIONAL ───
function rAI() {
  var p = selPat || pats[0];
  // Calculate TMB auto for context
  var tmb = p.sex === 'F' ? 447.6 + (9.2 * p.w) + (3.1 * p.h) - (4.3 * p.age) : 88.4 + (13.4 * p.w) + (4.8 * p.h) - (5.7 * p.age);
  var get = Math.round(tmb * 1.55);
  var targetKcal = p.goal.toLowerCase().includes('emagre') ? Math.round(get * 0.8) : p.goal.toLowerCase().includes('hipert') ? Math.round(get * 1.15) : get;
  return '<div style="display:grid;grid-template-columns:340px 1fr;gap:14px;align-items:start">'

    // ── LEFT: Config panel
    + '<div>'
    + '<div class="card" style="margin-bottom:12px">'
    + '<div class="ch"><span class="ct">🤖 Assistente DietOn IA</span><span class="tag tg" style="background:#fdd0a8;color:#6b2d00">Inteligente</span></div>'

    // Patient summary chip
    + '<div style="background:var(--n0);border-radius:10px;padding:10px 12px;margin-bottom:14px;display:flex;gap:10px;align-items:center">'
    + '<div style="width:34px;height:34px;border-radius:50%;background:linear-gradient(135deg,var(--g5),var(--g4));display:flex;align-items:center;justify-content:center;font-size:13px;flex-shrink:0">' + p.av + '</div>'
    + '<div style="flex:1">'
    + '<div style="font-family:var(--jk);font-size:12px;font-weight:700;color:var(--n9)">' + escHtml(p.n) + '</div>'
    + '<div style="font-size:10.5px;color:var(--n5);margin-top:1px">' + p.age + ' anos · ' + p.w + 'kg · ' + p.h + 'cm · ' + p.sex + ' · IMC ' + p.bmi + '</div>'
    + '</div>'
    + '<div style="text-align:right;flex-shrink:0"><div style="font-family:var(--in);font-size:16px;font-weight:800;color:var(--g5)">' + targetKcal + '</div><div style="font-size:9px;color:var(--n4)">kcal alvo</div></div>'
    + '</div>'

    + '<div class="fld"><label class="lbl">Objetivo clínico</label>'
    + '<select class="sel" id="ai-obj">'
    + '<option value="emagrecimento">🔥 Emagrecimento (déficit ~20%)</option>'
    + '<option value="hipertrofia">💪 Hipertrofia (superávit ~15%)</option>'
    + '<option value="manutencao">⚖️ Manutenção do peso</option>'
    + '<option value="glicemico">🩸 Controle glicêmico (baixo IG)</option>'
    + '<option value="colesterol">❤️ Cardioprotegido (low fat)</option>'
    + '<option value="gestante">🤰 Gestante / Lactante</option>'
    + '<option value="renal">🫘 Dieta Renal (low K/P)</option>'
    + '<option value="atleta">🏃 Atleta / Alta performance</option>'
    + '</select></div>'

    + '<div class="row2" style="gap:8px">'
    + '<div class="fld"><label class="lbl">Refeições/dia</label>'
    + '<select class="sel" id="ai-meals">'
    + '<option value="3">3 refeições</option><option value="4">4 refeições</option>'
    + '<option value="5" selected>5 refeições</option><option value="6">6 refeições</option>'
    + '</select></div>'
    + '<div class="fld"><label class="lbl">Distribuição</label>'
    + '<select class="sel" id="ai-dist">'
    + '<option value="moderada">Moderada (50/25/25)</option>'
    + '<option value="lowcarb">Low Carb (20/35/45)</option>'
    + '<option value="highprot">High Protein (40/35/25)</option>'
    + '<option value="mediterranean">Mediterrânea (55/20/25)</option>'
    + '</select></div>'
    + '</div>'

    + '<div class="fld"><label class="lbl">Restrições / Alergias</label>'
    + '<input class="inp" id="ai-rest" placeholder="Sem glúten, vegetariano, intolerante a lactose…" value="' + (p.alerg || '') + '"/></div>'

    + '<div class="fld"><label class="lbl">Preferências e contexto</label>'
    + '<input class="inp" id="ai-pref" placeholder="Ex: prepara em casa, horário de treino às 18h, não gosta de peixe…"/></div>'

    // Checkboxes options
    + '<div style="display:grid;grid-template-columns:1fr 1fr;gap:5px;margin-bottom:14px">'
    + [['ai-sugs', 'Sugerir substituições'], ['ai-lista', 'Gerar lista de compras'], ['ai-orient', 'Orientações gerais'], ['ai-micro', 'Análise de micronutrientes']].map(function (o) {
      return '<label style="display:flex;align-items:center;gap:6px;font-size:11.5px;color:var(--n6);cursor:pointer"><input type="checkbox" id="' + o[0] + '" checked style="accent-color:var(--g4)"/> ' + o[1] + '</label>';
    }).join('')
    + '</div>'

    + '<button class="btn btn-p btn-lg" style="width:100%;font-size:13px" onclick="genAI()">✨ Gerar Plano Personalizado</button>'
    + '<button class="btn btn-ghost btn-sm" style="width:100%;margin-top:6px" onclick="genAIQuick()">⚡ Geração Rápida (perfil padrão)</button>'
    + '</div>'

    // Quick templates section
    + '<div class="card">'
    + '<div class="ch"><span class="ct" style="font-size:12px">📋 Templates Rápidos</span></div>'
    + '<div style="display:flex;flex-direction:column;gap:6px">'
    + [
      ['🔥', 'Emagrecimento 1600 kcal', 'Mulher 65kg, 160cm, sed.', '1600', 'emagrecimento'],
      ['💪', 'Hipertrofia 2800 kcal', 'Homem 75kg, 175cm, ativo', '2800', 'hipertrofia'],
      ['⚖️', 'Manutenção 2000 kcal', 'Adulto ativo, perfil médio', '2000', 'manutencao'],
      ['🩸', 'Controle Glicêmico', 'Baixo IG, DM2 controlada', '1800', 'glicemico'],
    ].map(function (t) {
      return '<div data-key="' + t[4] + '" data-kcal="' + t[3] + '" onclick="applyAITemplate(this.dataset.key,this.dataset.kcal)" style="display:flex;align-items:center;gap:10px;padding:9px 11px;border-radius:9px;border:1.5px solid var(--n2);cursor:pointer;transition:all .15s" onmouseover="this.style.cssText+=\';border-color:var(--g4);background:var(--g0)\'" onmouseout="this.style.cssText+=\';border-color:var(--n2);background:#fff\'">'
        + '<span style="font-size:18px">' + t[0] + '</span>'
        + '<div style="flex:1"><div style="font-family:var(--jk);font-size:11.5px;font-weight:700;color:var(--n9)">' + t[1] + '</div>'
        + '<div style="font-size:10px;color:var(--n5)">' + t[2] + '</div></div>'
        + '<span style="font-size:11px;font-weight:700;color:var(--g5)">' + t[3] + ' kcal</span>'
        + '</div>';
    }).join('')
    + '</div></div></div>'

    // ── RIGHT: Result panel
    + '<div class="card" style="min-height:400px">'
    + '<div class="ch"><span class="ct">Plano Gerado pela IA</span><div id="ai-actions" style="display:none;gap:6px;display:flex"></div></div>'
    + '<div id="ai-result">'
    + '<div style="text-align:center;padding:40px 20px">'
    + '<div style="width:64px;height:64px;background:linear-gradient(135deg,var(--g0),#ffe8d0);border-radius:20px;display:flex;align-items:center;justify-content:center;font-size:28px;margin:0 auto 16px">🤖</div>'
    + '<div style="font-family:var(--jk);font-size:15px;font-weight:700;color:var(--n8);margin-bottom:8px">Pronto para gerar</div>'
    + '<div style="font-size:12.5px;color:var(--n4);line-height:1.8;max-width:280px;margin:0 auto">Configure o objetivo e clique em <strong>Gerar Plano</strong> para criar um plano alimentar personalizado em segundos.</div>'
    + '<div style="margin-top:20px;display:flex;justify-content:center;gap:16px">'
    + ['⏱️ Economiza tempo', '✅ Baseado no perfil', '📄 Pronto para PDF'].map(function (f) { return '<div style="font-size:11px;color:var(--n5)">' + f + '</div>'; }).join('')
    + '</div></div>'
    + '</div></div>'
    + '</div>';
}
// ── AI data engine
var _aiPlans = {
  emagrecimento: {
    name: 'Emagrecimento', kcalFactor: .8,
    meals: {
      3: [
        { n: 'Café da manhã ☀️', em: '☀️', items: [{ fn: 'Aveia em flocos', q: 45, e: '🌾' }, { fn: 'Iogurte grego integral', q: 150, e: '🥛' }, { fn: 'Morango', q: 100, e: '🍓' }, { fn: 'Café preto', q: 240, e: '☕' }] },
        { n: 'Almoço 🍽️', em: '🍽️', items: [{ fn: 'Peito de frango sem pele', q: 140, e: '🍗' }, { fn: 'Arroz integral cozido', q: 100, e: '🍚' }, { fn: 'Feijão cozido', q: 80, e: '🫘' }, { fn: 'Brócolis cozido', q: 100, e: '🥦' }, { fn: 'Azeite de oliva', q: 10, e: '🫒' }] },
        { n: 'Jantar 🌙', em: '🌙', items: [{ fn: 'Salmão', q: 130, e: '🐟' }, { fn: 'Batata-doce cozida', q: 120, e: '🍠' }, { fn: 'Abobrinha', q: 120, e: '🥒' }, { fn: 'Alface', q: 50, e: '🥗' }] }
      ],
      4: [
        { n: 'Café da manhã ☀️', em: '☀️', items: [{ fn: 'Aveia em flocos', q: 40, e: '🌾' }, { fn: 'Iogurte grego integral', q: 150, e: '🥛' }, { fn: 'Morango', q: 80, e: '🍓' }] },
        { n: 'Almoço 🍽️', em: '🍽️', items: [{ fn: 'Peito de frango sem pele', q: 140, e: '🍗' }, { fn: 'Arroz integral cozido', q: 100, e: '🍚' }, { fn: 'Feijão cozido', q: 80, e: '🫘' }, { fn: 'Brócolis cozido', q: 80, e: '🥦' }] },
        { n: 'Lanche 🍎', em: '🍎', items: [{ fn: 'Banana', q: 100, e: '🍌' }, { fn: 'Amêndoa', q: 20, e: '🫘' }] },
        { n: 'Jantar 🌙', em: '🌙', items: [{ fn: 'Ovo de galinha cozido', q: 100, e: '🥚' }, { fn: 'Batata-doce cozida', q: 100, e: '🍠' }, { fn: 'Espinafre', q: 100, e: '🥬' }] }
      ],
      5: [
        { n: 'Café da manhã ☀️', em: '☀️', items: [{ fn: 'Aveia em flocos', q: 40, e: '🌾' }, { fn: 'Iogurte grego integral', q: 150, e: '🥛' }, { fn: 'Morango', q: 80, e: '🍓' }] },
        { n: 'Lanche da manhã 🍎', em: '🍎', items: [{ fn: 'Maçã', q: 130, e: '🍎' }, { fn: 'Amêndoa', q: 15, e: '🫘' }] },
        { n: 'Almoço 🍽️', em: '🍽️', items: [{ fn: 'Peito de frango sem pele', q: 130, e: '🍗' }, { fn: 'Arroz integral cozido', q: 80, e: '🍚' }, { fn: 'Feijão cozido', q: 70, e: '🫘' }, { fn: 'Brócolis cozido', q: 100, e: '🥦' }] },
        { n: 'Lanche da tarde 🥛', em: '🥛', items: [{ fn: 'Iogurte grego integral', q: 120, e: '🥛' }, { fn: 'Morango', q: 80, e: '🍓' }] },
        { n: 'Jantar 🌙', em: '🌙', items: [{ fn: 'Salmão', q: 120, e: '🐟' }, { fn: 'Batata-doce cozida', q: 100, e: '🍠' }, { fn: 'Abobrinha', q: 100, e: '🥒' }] }
      ],
      6: [
        { n: 'Café da manhã ☀️', em: '☀️', items: [{ fn: 'Aveia em flocos', q: 35, e: '🌾' }, { fn: 'Iogurte grego integral', q: 120, e: '🥛' }, { fn: 'Morango', q: 70, e: '🍓' }] },
        { n: 'Lanche manhã 🍎', em: '🍎', items: [{ fn: 'Maçã', q: 120, e: '🍎' }] },
        { n: 'Almoço 🍽️', em: '🍽️', items: [{ fn: 'Peito de frango sem pele', q: 120, e: '🍗' }, { fn: 'Arroz integral cozido', q: 80, e: '🍚' }, { fn: 'Feijão cozido', q: 60, e: '🫘' }, { fn: 'Brócolis cozido', q: 80, e: '🥦' }] },
        { n: 'Lanche tarde 🥛', em: '🥛', items: [{ fn: 'Iogurte grego integral', q: 100, e: '🥛' }] },
        { n: 'Jantar 🌙', em: '🌙', items: [{ fn: 'Salmão', q: 110, e: '🐟' }, { fn: 'Batata-doce cozida', q: 90, e: '🍠' }, { fn: 'Espinafre', q: 80, e: '🥬' }] },
        { n: 'Ceia 🌙', em: '🌙', items: [{ fn: 'Queijo minas frescal', q: 60, e: '🧀' }] }
      ]
    },
    tips: ['Déficit calórico de 20% do GET', 'Proteína elevada para preservar massa magra', 'Carboidratos complexos e baixo IG', 'Hidratação: mínimo 35ml/kg/dia']
  },
  hipertrofia: {
    name: 'Hipertrofia', kcalFactor: 1.15,
    meals: {
      5: [
        { n: 'Café da manhã ☀️', em: '☀️', items: [{ fn: 'Aveia em flocos', q: 70, e: '🌾' }, { fn: 'Ovo de galinha cozido', q: 150, e: '🥚' }, { fn: 'Banana', q: 120, e: '🍌' }, { fn: 'Iogurte grego integral', q: 150, e: '🥛' }] },
        { n: 'Lanche pré-treino 💪', em: '💪', items: [{ fn: 'Banana', q: 100, e: '🍌' }, { fn: 'Amêndoa', q: 30, e: '🫘' }, { fn: 'Iogurte grego integral', q: 100, e: '🥛' }] },
        { n: 'Almoço 🍽️', em: '🍽️', items: [{ fn: 'Peito de frango sem pele', q: 180, e: '🍗' }, { fn: 'Arroz integral cozido', q: 150, e: '🍚' }, { fn: 'Feijão cozido', q: 100, e: '🫘' }, { fn: 'Azeite de oliva', q: 15, e: '🫒' }, { fn: 'Brócolis cozido', q: 100, e: '🥦' }] },
        { n: 'Lanche pós-treino 🥛', em: '🥛', items: [{ fn: 'Iogurte grego integral', q: 200, e: '🥛' }, { fn: 'Banana', q: 100, e: '🍌' }, { fn: 'Aveia em flocos', q: 30, e: '🌾' }] },
        { n: 'Jantar 🌙', em: '🌙', items: [{ fn: 'Salmão', q: 160, e: '🐟' }, { fn: 'Batata-doce cozida', q: 150, e: '🍠' }, { fn: 'Brócolis cozido', q: 100, e: '🥦' }, { fn: 'Azeite de oliva', q: 10, e: '🫒' }] }
      ]
    },
    tips: ['Superávit calórico de ~15% do GET', 'Proteína: 1,8–2,2g/kg de peso', 'Carboidratos ao redor do treino', 'Refeição pré e pós-treino obrigatória']
  },
  manutencao: {
    name: 'Manutenção', kcalFactor: 1.0,
    meals: {
      5: [
        { n: 'Café da manhã ☀️', em: '☀️', items: [{ fn: 'Aveia em flocos', q: 50, e: '🌾' }, { fn: 'Iogurte grego integral', q: 150, e: '🥛' }, { fn: 'Banana', q: 100, e: '🍌' }] },
        { n: 'Lanche 🍎', em: '🍎', items: [{ fn: 'Maçã', q: 140, e: '🍎' }, { fn: 'Amêndoa', q: 20, e: '🫘' }] },
        { n: 'Almoço 🍽️', em: '🍽️', items: [{ fn: 'Peito de frango sem pele', q: 140, e: '🍗' }, { fn: 'Arroz integral cozido', q: 100, e: '🍚' }, { fn: 'Feijão cozido', q: 80, e: '🫘' }, { fn: 'Abobrinha', q: 100, e: '🥒' }, { fn: 'Azeite de oliva', q: 10, e: '🫒' }] },
        { n: 'Lanche 🥛', em: '🥛', items: [{ fn: 'Iogurte grego integral', q: 150, e: '🥛' }, { fn: 'Morango', q: 80, e: '🍓' }] },
        { n: 'Jantar 🌙', em: '🌙', items: [{ fn: 'Ovo de galinha cozido', q: 120, e: '🥚' }, { fn: 'Batata-doce cozida', q: 120, e: '🍠' }, { fn: 'Espinafre', q: 100, e: '🥬' }] }
      ]
    },
    tips: ['Calorias igual ao GET (gasto energético total)', 'Equilíbrio de macronutrientes', 'Variedade alimentar para micronutrientes', 'Hidratação: 30–35ml/kg/dia']
  },
  glicemico: {
    name: 'Controle Glicêmico', kcalFactor: .9,
    meals: {
      5: [
        { n: 'Café da manhã ☀️', em: '☀️', items: [{ fn: 'Aveia em flocos', q: 40, e: '🌾' }, { fn: 'Ovo de galinha cozido', q: 100, e: '🥚' }, { fn: 'Morango', q: 100, e: '🍓' }] },
        { n: 'Lanche 🥦', em: '🥦', items: [{ fn: 'Brócolis cozido', q: 100, e: '🥦' }, { fn: 'Amêndoa', q: 20, e: '🫘' }] },
        { n: 'Almoço 🍽️', em: '🍽️', items: [{ fn: 'Peito de frango sem pele', q: 150, e: '🍗' }, { fn: 'Feijão cozido', q: 80, e: '🫘' }, { fn: 'Espinafre', q: 100, e: '🥬' }, { fn: 'Azeite de oliva', q: 15, e: '🫒' }] },
        { n: 'Lanche 🥛', em: '🥛', items: [{ fn: 'Iogurte grego integral', q: 150, e: '🥛' }] },
        { n: 'Jantar 🌙', em: '🌙', items: [{ fn: 'Salmão', q: 130, e: '🐟' }, { fn: 'Abobrinha', q: 150, e: '🥒' }, { fn: 'Alface', q: 80, e: '🥗' }] }
      ]
    },
    tips: ['Evitar carboidratos simples e refinados', 'Fracionar refeições — 5 a 6x ao dia', 'Priorizar fibras solúveis (beta-glucana)', 'Incluir ômega-3 anti-inflamatório']
  },
  colesterol: { name: 'Cardioprotegido', kcalFactor: .95, meals: { 5: [{ n: 'Café da manhã ☀️', em: '☀️', items: [{ fn: 'Aveia em flocos', q: 50, e: '🌾' }, { fn: 'Morango', q: 100, e: '🍓' }, { fn: 'Amêndoa', q: 20, e: '🫘' }] }, { n: 'Lanche 🍎', em: '🍎', items: [{ fn: 'Maçã', q: 140, e: '🍎' }] }, { n: 'Almoço 🍽️', em: '🍽️', items: [{ fn: 'Salmão', q: 140, e: '🐟' }, { fn: 'Arroz integral cozido', q: 90, e: '🍚' }, { fn: 'Feijão cozido', q: 70, e: '🫘' }, { fn: 'Brócolis cozido', q: 100, e: '🥦' }, { fn: 'Azeite de oliva', q: 15, e: '🫒' }] }, { n: 'Lanche 🥛', em: '🥛', items: [{ fn: 'Iogurte grego integral', q: 130, e: '🥛' }, { fn: 'Morango', q: 80, e: '🍓' }] }, { n: 'Jantar 🌙', em: '🌙', items: [{ fn: 'Peito de frango sem pele', q: 130, e: '🍗' }, { fn: 'Espinafre', q: 100, e: '🥬' }, { fn: 'Abobrinha', q: 100, e: '🥒' }] }] }, tips: ['Gorduras insaturadas (azeite, abacate, oleaginosas)', 'Ômega-3: salmão, sardinha 3x/semana', 'Fibras solúveis para reduzir LDL', 'Evitar gordura saturada e trans'] },
  gestante: { name: 'Gestante', kcalFactor: 1.1, meals: { 5: [{ n: 'Café da manhã ☀️', em: '☀️', items: [{ fn: 'Aveia em flocos', q: 50, e: '🌾' }, { fn: 'Iogurte grego integral', q: 180, e: '🥛' }, { fn: 'Morango', q: 100, e: '🍓' }] }, { n: 'Lanche 🥛', em: '🥛', items: [{ fn: 'Banana', q: 120, e: '🍌' }, { fn: 'Amêndoa', q: 20, e: '🫘' }] }, { n: 'Almoço 🍽️', em: '🍽️', items: [{ fn: 'Peito de frango sem pele', q: 150, e: '🍗' }, { fn: 'Arroz integral cozido', q: 100, e: '🍚' }, { fn: 'Feijão cozido', q: 100, e: '🫘' }, { fn: 'Espinafre', q: 80, e: '🥬' }, { fn: 'Azeite de oliva', q: 10, e: '🫒' }] }, { n: 'Lanche 🍎', em: '🍎', items: [{ fn: 'Maçã', q: 140, e: '🍎' }, { fn: 'Queijo minas frescal', q: 40, e: '🧀' }] }, { n: 'Jantar 🌙', em: '🌙', items: [{ fn: 'Salmão', q: 130, e: '🐟' }, { fn: 'Batata-doce cozida', q: 120, e: '🍠' }, { fn: 'Brócolis cozido', q: 100, e: '🥦' }] }] }, tips: ['Folato essencial: feijão, espinafre, couve', 'Ferro: carnes + vitamina C para absorção', 'Cálcio: 3 porções laticínios/dia', 'Ômega-3 DHA para desenvolvimento fetal'] },
  renal: { name: 'Dieta Renal', kcalFactor: 1.0, meals: { 5: [{ n: 'Café da manhã ☀️', em: '☀️', items: [{ fn: 'Arroz cozido', q: 80, e: '🍚' }, { fn: 'Ovo de galinha cozido', q: 80, e: '🥚' }, { fn: 'Maçã', q: 130, e: '🍎' }] }, { n: 'Lanche 🍎', em: '🍎', items: [{ fn: 'Maçã', q: 120, e: '🍎' }] }, { n: 'Almoço 🍽️', em: '🍽️', items: [{ fn: 'Peito de frango sem pele', q: 100, e: '🍗' }, { fn: 'Arroz cozido', q: 100, e: '🍚' }, { fn: 'Abobrinha', q: 120, e: '🥒' }, { fn: 'Azeite de oliva', q: 10, e: '🫒' }] }, { n: 'Lanche 🥛', em: '🥛', items: [{ fn: 'Arroz cozido', q: 60, e: '🍚' }, { fn: 'Maçã', q: 100, e: '🍎' }] }, { n: 'Jantar 🌙', em: '🌙', items: [{ fn: 'Peito de frango sem pele', q: 100, e: '🍗' }, { fn: 'Abobrinha', q: 120, e: '🥒' }, { fn: 'Arroz cozido', q: 80, e: '🍚' }] }] }, tips: ['Restrição de potássio e fósforo', 'Proteína controlada conforme estágio renal', 'Cozinhar vegetais em água fervente descartada', 'Sodio < 2g/dia — sem sal de adição'] },
  atleta: { name: 'Atleta', kcalFactor: 1.25, meals: { 6: [{ n: 'Café da manhã ☀️', em: '☀️', items: [{ fn: 'Aveia em flocos', q: 80, e: '🌾' }, { fn: 'Ovo de galinha cozido', q: 200, e: '🥚' }, { fn: 'Banana', q: 120, e: '🍌' }, { fn: 'Iogurte grego integral', q: 150, e: '🥛' }] }, { n: 'Pré-treino ⚡', em: '⚡', items: [{ fn: 'Banana', q: 120, e: '🍌' }, { fn: 'Aveia em flocos', q: 40, e: '🌾' }] }, { n: 'Almoço 🍽️', em: '🍽️', items: [{ fn: 'Peito de frango sem pele', q: 200, e: '🍗' }, { fn: 'Arroz integral cozido', q: 150, e: '🍚' }, { fn: 'Feijão cozido', q: 100, e: '🫘' }, { fn: 'Brócolis cozido', q: 100, e: '🥦' }, { fn: 'Azeite de oliva', q: 15, e: '🫒' }] }, { n: 'Pós-treino 🥛', em: '🥛', items: [{ fn: 'Iogurte grego integral', q: 250, e: '🥛' }, { fn: 'Banana', q: 120, e: '🍌' }, { fn: 'Aveia em flocos', q: 40, e: '🌾' }] }, { n: 'Jantar 🌙', em: '🌙', items: [{ fn: 'Salmão', q: 180, e: '🐟' }, { fn: 'Batata-doce cozida', q: 180, e: '🍠' }, { fn: 'Espinafre', q: 100, e: '🥬' }] }, { n: 'Ceia 🌙', em: '🌙', items: [{ fn: 'Iogurte grego integral', q: 200, e: '🥛' }, { fn: 'Amêndoa', q: 25, e: '🫘' }] }] }, tips: ['Calorias 25% acima do GET', 'Carboidratos: 6–10g/kg/dia', 'Proteína: 1,6–2,4g/kg/dia', 'Hidratação: 600ml/h de exercício'] }
};

function _buildMealFromPlan(mealDef) {
  var items = [];
  mealDef.items.forEach(function (it) {
    var f = FOOD_DB.find(function (x) { return x.n.toLowerCase().includes(it.fn.toLowerCase().split(' ')[0]) });
    if (!f) f = { id: 99000 + Math.random() * 1000 | 0, n: it.fn, e: it.e, cat: 'Personalizado', p: 5, c: 15, g: 3, k: 100, fe: 0, ca: 0, vc: 0, va: 0, zn: 0, b12: 0, fb: 1 };
    var factor = it.q / 100;
    items.push({ food: f, qty: it.q, k: Math.round(f.k * factor), p: +(f.p * factor).toFixed(1), c: +(f.c * factor).toFixed(1), g: +(f.g * factor).toFixed(1) });
  });
  return { name: mealDef.n, em: mealDef.em, items: items };
}

function genAI() {
  var objKey = (document.getElementById('ai-obj') || {}).value || 'emagrecimento';
  var rest = (document.getElementById('ai-rest') || {}).value || '';
  var nm = parseInt((document.getElementById('ai-meals') || {}).value) || 5;
  var dist = (document.getElementById('ai-dist') || {}).value || 'moderada';
  var wantSubs = (document.getElementById('ai-sugs') || {}).checked;
  var wantLista = (document.getElementById('ai-lista') || {}).checked;
  var wantOrient = (document.getElementById('ai-orient') || {}).checked;
  var p = selPat || pats[0];
  var el = document.getElementById('ai-result'); if (!el) return;
  // Loading state
  el.innerHTML = '<div style="text-align:center;padding:40px 20px">'
    + '<div style="width:48px;height:48px;border:3px solid var(--g1);border-top-color:var(--g4);border-radius:50%;margin:0 auto 16px;animation:ai-spin 0.8s linear infinite"></div>'
    + '<div style="font-family:var(--jk);font-size:14px;font-weight:700;color:var(--n8);margin-bottom:6px">Gerando plano personalizado…</div>'
    + '<div id="ai-loading-step" style="font-size:11.5px;color:var(--n4)">Analisando perfil de ' + p.n + '…</div>'
    + '</div>';
  document.head.insertAdjacentHTML('beforeend', '<style>@keyframes ai-spin{to{transform:rotate(360deg)}}</style>');
  // Simulate progressive loading steps
  var steps = ['Analisando perfil de ' + p.n + '…', 'Calculando necessidades calóricas…', 'Selecionando alimentos do banco TACO…', 'Distribuindo macronutrientes…', 'Revisando restrições alimentares…', 'Finalizando plano…'];
  var si = 0;
  var stInterval = setInterval(function () { si++; var step = document.getElementById('ai-loading-step'); if (step && si < steps.length) step.textContent = steps[si]; }, 350);

  setTimeout(function () {
    clearInterval(stInterval);
    var planData = _aiPlans[objKey] || _aiPlans.manutencao;
    var tmb = p.sex === 'F' ? 447.6 + (9.2 * p.w) + (3.1 * p.h) - (4.3 * p.age) : 88.4 + (13.4 * p.w) + (4.8 * p.h) - (5.7 * p.age);
    var get = Math.round(tmb * 1.55);
    var targetKcal = Math.round(get * planData.kcalFactor);
    // Get meal template for requested count
    var mealTemplates = planData.meals[nm] || planData.meals[5] || planData.meals[Object.keys(planData.meals)[0]];
    var builtMeals = mealTemplates.map(_buildMealFromPlan);
    window._aiSuggestions = builtMeals;
    window._aiTarget = targetKcal;

    var totalKcal = builtMeals.reduce(function (s, m) { return s + m.items.reduce(function (ss, it) { return ss + it.k }, 0) }, 0);
    var totalP = builtMeals.reduce(function (s, m) { return s + m.items.reduce(function (ss, it) { return ss + it.p }, 0) }, 0).toFixed(1);
    var totalC = builtMeals.reduce(function (s, m) { return s + m.items.reduce(function (ss, it) { return ss + it.c }, 0) }, 0).toFixed(1);
    var totalG = builtMeals.reduce(function (s, m) { return s + m.items.reduce(function (ss, it) { return ss + it.g }, 0) }, 0).toFixed(1);
    var pctP = Math.round(totalP * 4 / totalKcal * 100);
    var pctC = Math.round(totalC * 4 / totalKcal * 100);
    var pctG = Math.round(totalG * 9 / totalKcal * 100);

    // Shopping list
    var shopMap = {};
    builtMeals.forEach(function (m) { m.items.forEach(function (it) { var k = it.food.n; shopMap[k] = (shopMap[k] || 0) + it.qty; }); });

    var html = '';
    // Header summary
    html += '<div style="background:linear-gradient(135deg,var(--g8),var(--g6));color:#fff;border-radius:12px;padding:16px;margin-bottom:14px">'
      + '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px">'
      + '<div><div style="font-family:var(--jk);font-size:13px;font-weight:700;margin-bottom:2px">Plano ' + planData.name + ' — ' + escHtml(p.n) + '</div>'
      + '<div style="font-size:10.5px;color:rgba(255,255,255,.55)">' + nm + ' refeições · ' + (rest || 'Sem restrições') + '</div></div>'
      + '<div style="text-align:right"><div style="font-family:var(--in);font-size:26px;font-weight:800;line-height:1">' + totalKcal + '</div><div style="font-size:10px;color:rgba(255,255,255,.5)">kcal/dia</div></div>'
      + '</div>'
      + '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">'
      + [['Proteínas', totalP + 'g', pctP + '%', '#93c5fd'], ['Carboidratos', totalC + 'g', pctC + '%', '#fcd34d'], ['Gorduras', totalG + 'g', pctG + '%', '#fca5a5']].map(function (m) {
        return '<div style="background:rgba(255,255,255,.1);border-radius:8px;padding:8px;text-align:center">'
          + '<div style="font-family:var(--in);font-size:15px;font-weight:800;color:' + m[3] + '">' + m[1] + '</div>'
          + '<div style="font-size:9px;color:rgba(255,255,255,.55);margin-top:1px">' + m[0] + ' (' + m[2] + ')</div>'
          + '</div>';
      }).join('')
      + '</div></div>';

    // Meal cards
    html += '<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:14px">';
    builtMeals.forEach(function (m) {
      var mKcal = m.items.reduce(function (s, it) { return s + it.k }, 0);
      html += '<div style="border:1.5px solid var(--n2);border-radius:10px;overflow:hidden">'
        + '<div style="background:var(--n0);padding:9px 12px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--n2)">'
        + '<div style="display:flex;align-items:center;gap:8px"><span style="font-size:16px">' + m.em + '</span>'
        + '<span style="font-family:var(--jk);font-size:12px;font-weight:700;color:var(--n8)">' + m.name + '</span></div>'
        + '<span style="font-family:var(--in);font-size:12px;font-weight:700;color:var(--g5)">' + mKcal + ' kcal</span>'
        + '</div>'
        + '<div style="padding:8px 12px">'
        + m.items.map(function (it) {
          return '<div style="display:flex;align-items:center;gap:8px;padding:3px 0">'
            + '<span style="font-size:13px">' + it.food.e + '</span>'
            + '<span style="font-size:12px;color:var(--n7);flex:1">' + it.food.n + '</span>'
            + '<span style="font-size:11px;font-weight:600;color:var(--n5)">' + it.qty + 'g</span>'
            + '<span style="font-size:11px;color:var(--n4);min-width:52px;text-align:right">' + it.k + ' kcal</span>'
            + '</div>';
        }).join('')
        + '</div></div>';
    });
    html += '</div>';

    // Orientações clínicas
    if (wantOrient) {
      html += '<div style="background:var(--y0);border:1.5px solid var(--y3);border-radius:10px;padding:12px;margin-bottom:12px">'
        + '<div style="font-family:var(--jk);font-size:11px;font-weight:700;color:#7c4a00;letter-spacing:.05em;text-transform:uppercase;margin-bottom:8px">💡 Orientações Clínicas</div>'
        + '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">'
        + planData.tips.map(function (t) { return '<div style="display:flex;align-items:flex-start;gap:6px;font-size:11.5px;color:#92400e;line-height:1.5"><span style="color:var(--g4);font-weight:700;flex-shrink:0">→</span>' + t + '</div>'; }).join('')
        + '</div></div>';
    }

    // Lista de compras
    if (wantLista) {
      var items = Object.keys(shopMap);
      html += '<div style="border:1.5px solid var(--n2);border-radius:10px;padding:12px;margin-bottom:12px">'
        + '<div style="font-family:var(--jk);font-size:11px;font-weight:700;color:var(--n6);letter-spacing:.05em;text-transform:uppercase;margin-bottom:8px">🛒 Lista de Compras Semanal</div>'
        + '<div style="display:grid;grid-template-columns:1fr 1fr;gap:3px">'
        + items.map(function (name) { return '<div style="display:flex;align-items:center;gap:6px;font-size:11.5px;color:var(--n6);padding:2px 0"><span style="width:6px;height:6px;border-radius:50%;background:var(--g4);flex-shrink:0"></span>' + name + ' <span style="color:var(--n4)">~' + Math.round(shopMap[name] * 7 / 100 * 10) / 10 + 'kg/sem</span></div>'; }).join('')
        + '</div></div>';
    }

    // Action buttons
    html += '<div style="display:flex;gap:8px">'
      + '<button class="btn btn-p" style="flex:1" onclick="applyAIPlan()">✅ Salvar e aplicar plano</button>'
      + '<button class="btn btn-s btn-sm" onclick="exportAIPlanPDF()">📄 Exportar PDF</button>'
      + '<button class="btn btn-ghost btn-sm" onclick="genAI()">🔄 Regerar</button>'
      + '</div>';

    el.innerHTML = html;
    showToast('Plano gerado para ' + p.n + '!', 's');
  }, 2400);
}

function genAIQuick() {
  var p = selPat || pats[0];
  // Auto-detect objective from patient goal
  var objMap = { emagrecimento: 'emagrecimento', hipertrofia: 'hipertrofia', manutenção: 'manutencao' };
  var auto = Object.keys(objMap).find(function (k) { return (p.goal || '').toLowerCase().includes(k) });
  var key = objMap[auto] || 'manutencao';
  var sel = document.getElementById('ai-obj'); if (sel) sel.value = key;
  genAI();
}

function applyAITemplate(key, kcal) {
  var sel = document.getElementById('ai-obj'); if (sel) sel.value = key;
  showToast('Template \'' + key + '\' aplicado — clique em Gerar Plano', 'i');
}

function exportAIPlanPDF() {
  showToast('Exportando plano da IA para PDF…', 's');
  setTimeout(function () { applyAIPlan(); setTimeout(function () { exportPDF(); }, 600); }, 300);
}


// ─── NOTIFICATIONS ───
function rNotif() {
  var smartAlerts = _generateSmartAlerts();
  var manualNotifs = notifs.filter(function (n) { return !n.auto; });
  var autoAlerts = smartAlerts.map(function (a) { return Object.assign({}, a, { auto: true }); });
  var allNotifs = manualNotifs.concat(autoAlerts);
  return '<div style="max-width:640px">'
    + '<div class="card" style="margin-bottom:10px"><div class="ch"><span class="ct">Central de Alertas</span>'
    + '<div style="display:flex;gap:6px"><span style="font-size:10.5px;color:var(--n4);align-self:center">' + allNotifs.length + ' alertas</span>'
    + '<button class="btn btn-ghost btn-sm" onclick="notifs=[];updateNotifBadge();DB.save();goP(\'notif\',null);showToast(\'Alertas manuais limpos\',\'s\')">Limpar manuais</button></div></div>'
    + (allNotifs.filter(function (n) { return n.type === 'r'; }).length
      ? '<div style="background:#fef2f2;border-radius:var(--r);padding:10px;margin-bottom:8px">'
      + '<div style="font-size:9.5px;font-weight:800;color:#dc2626;letter-spacing:.06em;text-transform:uppercase;margin-bottom:6px">🚨 Urgente</div>'
      + allNotifs.filter(function (n) { return n.type === 'r'; }).map(function (n) {
        return '<div style="display:flex;align-items:center;gap:10px;padding:8px;border-radius:6px;background:#fff;margin-bottom:5px;border-left:3px solid #dc2626">'
          + '<div style="flex:1"><div style="font-size:12px;font-weight:600;color:var(--n8)">' + n.txt + '</div>'
          + (n.cat ? '<span style="font-size:9px;background:#fee2e2;color:#dc2626;padding:1px 7px;border-radius:99px;font-weight:700">' + n.cat + '</span>' : '') + '</div>'
          + (n.patId ? '<button class="btn btn-s btn-sm" onclick="selPat=pats.find(function(x){return x.id===' + n.patId + '});goP(\'ev\',document.getElementById(\'ni-ev\'))">Ver</button>' : '')
          + '<span style="font-size:9px;color:var(--n4)">' + (n.auto ? 'Auto' : 'Manual') + '</span>'
          + '</div>';
      }).join('') + '</div>' : '')
    + (allNotifs.filter(function (n) { return n.type === 'w'; }).length
      ? '<div style="margin-bottom:8px">'
      + '<div style="font-size:9.5px;font-weight:800;color:#d97706;letter-spacing:.06em;text-transform:uppercase;margin-bottom:6px">⚠ Atenção</div>'
      + allNotifs.filter(function (n) { return n.type === 'w'; }).map(function (n, i) {
        return '<div style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:var(--r);background:var(--n0);margin-bottom:5px;border-left:3px solid #f59e0b">'
          + '<div style="flex:1"><div style="font-size:12px;font-weight:600;color:var(--n8)">' + n.txt + '</div>'
          + (n.cat ? '<span style="font-size:9px;background:#fef3c7;color:#d97706;padding:1px 7px;border-radius:99px;font-weight:700;display:inline-block;margin-top:3px">' + n.cat + '</span>' : '') + '</div>'
          + (n.patId ? '<button class="btn btn-s btn-sm" onclick="selPat=pats.find(function(x){return x.id===' + n.patId + '});goP(\'ev\',document.getElementById(\'ni-ev\'))">Ver</button>' : '')
          + (!n.auto ? '<button class="btn btn-ghost btn-sm" onclick="notifs.splice(\'+i+\',1);updateNotifBadge();DB.save();goP(\'notif\',null)">✓</button>' : '<span style="font-size:9px;color:var(--n4)">Auto</span>')
          + '</div>';
      }).join('') + '</div>' : '')
    + (allNotifs.filter(function (n) { return n.type === 'i'; }).length
      ? '<div style="margin-bottom:8px">'
      + '<div style="font-size:9.5px;font-weight:800;color:#3b82f6;letter-spacing:.06em;text-transform:uppercase;margin-bottom:6px">ℹ Informativo</div>'
      + allNotifs.filter(function (n) { return n.type === 'i'; }).map(function (n, i) {
        return '<div style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:var(--r);background:var(--n0);margin-bottom:5px;border-left:3px solid #3b82f6">'
          + '<div style="flex:1"><div style="font-size:12px;font-weight:600;color:var(--n8)">' + n.txt + '</div>'
          + (n.cat ? '<span style="font-size:9px;background:#eff6ff;color:#3b82f6;padding:1px 7px;border-radius:99px;font-weight:700;display:inline-block;margin-top:3px">' + n.cat + '</span>' : '') + '</div>'
          + (n.patId ? '<button class="btn btn-s btn-sm" onclick="selPat=pats.find(function(x){return x.id===' + n.patId + '});goP(\'ev\',document.getElementById(\'ni-ev\'))">Ver</button>' : '')
          + (!n.auto ? '<button class="btn btn-ghost btn-sm" onclick="notifs.splice(\'+i+\',1);updateNotifBadge();DB.save();goP(\'notif\',null)">✓</button>' : '<span style="font-size:9px;color:var(--n4)">Auto</span>')
          + '</div>';
      }).join('') + '</div>' : '')
    + (!allNotifs.length ? '<div class="card" style="text-align:center;padding:28px 0"><div style="font-size:32px;margin-bottom:8px">🎉</div><div style="font-weight:600">Tudo em dia!</div><div style="font-size:12px;color:var(--n4);margin-top:4px">Nenhum alerta no momento</div></div>' : '')
    + '<div style="background:var(--g0);border-radius:var(--r);padding:10px 14px;font-size:11px;color:var(--n5);margin-top:8px">🤖 <strong>' + smartAlerts.length + ' alertas automáticos</strong> gerados em tempo real com base nos dados clínicos.</div>'
    + '</div>';
}
// ─── TEMPLATES ───
function rTpl() {
  return '<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px">'
    + templates.map(function (t, i) { return '<div class="card" style="cursor:default"><div class="ch"><div class="ct">' + t.name + '</div><span class="tag tg">' + t.kcal + ' kcal</span></div><p style="font-size:12px;color:var(--n5);line-height:1.7;margin-bottom:12px">' + t.desc + '</p><div style="font-size:11.5px;color:var(--n4);margin-bottom:12px">' + t.meals.length + ' refeições planejadas</div><div style="display:flex;gap:6px"><button class="btn btn-p btn-sm" style="flex:1" onclick="applyTpl(' + t.id + ');goP(\'presc\',document.getElementById(\'ni-presc\'))">Usar no plano</button><button class="btn btn-danger btn-sm" onclick="templates.splice(' + i + ',1);goP(\'tpl\',null)">🗑</button></div></div>'; }).join('')
    + '<div class="card" style="border:1.5px dashed var(--n3);display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:180px;cursor:pointer;transition:all .15s" onmouseover="this.style.borderColor=\'var(--g4)\'" onmouseout="this.style.borderColor=\'var(--n3)\'" onclick="openM(\'m-tpl\')">'
    + '<div style="font-size:28px;margin-bottom:8px">➕</div><div style="font-family:var(--jk);font-size:12.5px;font-weight:700;color:var(--n4)">Novo Template</div><div style="font-size:11px;color:var(--n4);margin-top:3px;text-align:center">Salve o plano atual como template</div></div></div>';
}


// ─── PATIENT PAGES ───
function rPDash() {
  var p = pats[0]; var loss = p.wStart - p.w; var done = tasks.filter(function (t) { return t.done }).length;
  return '<div class="wb"><div class="wb-blob"></div><div><h2 style="position:relative;z-index:2">Olá, ' + p.n.split(' ')[0] + '! 👋</h2><p style="position:relative;z-index:2">Você está no <strong style="color:#fcd34d">' + p.prog + '%</strong> do plano semanal.<br>Continue firme — grande progresso!</p></div><div class="wb-kpi" style="z-index:2"><div class="wb-n">' + (loss >= 0 ? '−' : '+') + (Math.abs(loss).toFixed(1)) + '<span style="font-size:16px;font-weight:500"> kg</span></div><div class="wb-l">desde o início</div></div></div>'
    + (loss >= 5 ? '<div class="ach"><div class="ach-ico">🏆</div><div><div class="ach-t">Conquista: −' + loss.toFixed(1) + ' kg!</div><div class="ach-d">Parabéns pela consistência! Você atingiu uma perda significativa desde o início do programa.</div></div></div>' : '')
    + '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:14px">'
    + '<div class="card" style="display:flex;align-items:center;gap:12px"><div style="width:40px;height:40px;border-radius:10px;background:#fff3ec;display:flex;align-items:center;justify-content:center;font-size:20px">🥗</div><div><div style="font-family:var(--in);font-size:22px;font-weight:800;color:var(--g5)">1.750</div><div style="font-size:11.5px;color:var(--n4);margin-top:2px">kcal hoje</div><div style="font-size:10px;font-weight:700;color:var(--g5);margin-top:2px">97% da meta</div></div></div>'
    + '<div class="card" style="display:flex;align-items:center;gap:12px"><div style="width:40px;height:40px;border-radius:10px;background:var(--blue-l);display:flex;align-items:center;justify-content:center;font-size:20px">💧</div><div><div style="font-family:var(--in);font-size:22px;font-weight:800;color:var(--blue)">' + p.agua + 'L</div><div style="font-size:11.5px;color:var(--n4);margin-top:2px">água hoje</div><div style="font-size:10px;font-weight:700;color:var(--blue);margin-top:2px">Meta: 2,0L</div></div></div>'
    + '<div class="card" style="display:flex;align-items:center;gap:12px"><div style="width:40px;height:40px;border-radius:10px;background:#fffbeb;display:flex;align-items:center;justify-content:center;font-size:20px">✅</div><div><div style="font-family:var(--in);font-size:22px;font-weight:800;color:#d97706">' + done + '/' + tasks.length + '</div><div style="font-size:11.5px;color:var(--n4);margin-top:2px">tarefas</div><div style="font-size:10px;font-weight:700;color:#d97706;margin-top:2px">Em dia</div></div></div></div>'
    + '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">'
    + '<div class="card"><div class="ch"><span class="ct">Macros de Hoje</span></div><div style="text-align:center;margin-bottom:12px"><div style="font-family:var(--in);font-size:28px;font-weight:800;color:var(--g5)">1.750 kcal</div><div style="font-size:11px;color:var(--n4)">de 1.800 kcal prescritas</div></div><div style="display:flex;flex-direction:column;gap:8px">'
    + [['Proteínas', '#3b82f6', '75%', '110g'], ['Carboidratos', '#f59e0b', '82%', '198g'], ['Gorduras', '#ef4444', '58%', '52g']].map(function (r) { return '<div style="display:flex;align-items:center;gap:8px"><span style="font-size:11px;font-weight:700;min-width:84px;color:' + r[1] + '">' + r[0] + '</span><div style="flex:1;height:7px;background:var(--n2);border-radius:99px;overflow:hidden"><div style="width:' + r[2] + ';height:100%;background:' + r[1] + ';border-radius:99px"></div></div><span style="font-family:var(--in);font-size:10.5px;font-weight:800;color:' + r[1] + ';min-width:32px;text-align:right">' + r[3] + '</span></div>'; }).join('') + '</div></div>'
    + '<div class="card"><div class="ch"><span class="ct">Próxima Consulta</span></div><div style="text-align:center;padding:16px 0"><div style="font-size:32px;margin-bottom:8px">📅</div><div style="font-family:var(--in);font-size:18px;font-weight:800;color:var(--n9)">17 de Março</div><div style="font-size:12px;color:var(--n4);margin-top:4px">14:30 · Dra. Admin Nutriplan</div></div>'
    + '<div class="alert alert-y" style="margin-bottom:0"><span>💡 Lembre-se de registrar seu diário alimentar antes da consulta!</span></div></div></div>';
}

function rPPlan() {
  var today = new Date().getDay();
  var html = '<div class="week-g" style="margin-bottom:14px">';
  for (var d = 0; d < 7; d++) {
    var day = WEEK[d]; var isT = d === today;
    var dt = day.meals.reduce(function (s, m) { return s + m.items.reduce(function (ss, it) { return ss + it.k }, 0) }, 0);
    html += '<div class="day-col"><div class="day-hd' + (isT ? ' today' : '') + '"><div class="day-dn">' + day.n.slice(0, 3) + '</div><div class="day-dd">' + (isT ? 'Hoje' : dt + ' kcal') + '</div></div>';
    day.meals.forEach(function (m) { html += '<div class="day-mb"><div class="day-mn">' + m.n + '</div>' + m.items.map(function (it) { return '<div class="day-fr"><span>' + it.e + ' ' + it.n + '</span><span>' + it.k + '</span></div>'; }).join('') + '</div>'; });
    html += '<div class="day-tot">' + dt + ' kcal</div></div>';
  }
  html += '</div><div class="card" style="background:var(--y0);border-color:var(--y3)"><div class="ch"><span class="ct" style="color:#78350f">💡 Suas Orientações Nutricionais</span></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;font-size:12.5px;color:#92400e;line-height:2">' + ['Beba 2L de água por dia', 'Mastigue devagar — 20× por mordida', 'Evite telas durante as refeições', 'Prefira temperos naturais', 'Inclua proteína em todas refeições', 'Evite ultraprocessados', 'Durma 7–8 horas por noite', 'Pratique atividade física'].map(function (o) { return '<div>• ' + o + '</div>'; }).join('') + '</div></div>';
  return html;
}

function _getPacPatient() {
  // Paciente logado: encontrar pelo linkedUserId ou primeiro paciente
  if (cu && cu.role === 'pac') {
    var linked = pats.find(function (p) { return p.linkedUserId === cu.id || p.id === cu.id; });
    if (linked) return linked;
  }
  return pats[0];
}

function rPDiary() {
  var p = _getPacPatient(); var diary = p ? p.diary || [] : [];
  var today = new Date(); var todayStr = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
  var todayEntry = diary.find(function (e) { return e.data === todayStr; });
  var todayTotal = todayEntry ? todayEntry.total : 0;

  // Meta calórica do plano
  var planKcal = 0;
  if (p && p.plans && p.plans[0]) planKcal = p.plans[0].kcal || 0;
  var remaining = planKcal ? planKcal - todayTotal : 0;

  return '<div style="display:grid;grid-template-columns:1fr 300px;gap:14px">'
    + '<div>'
    + (diary.length
      ? diary.slice(0, 7).map(function (entry) {
        var adherePct = planKcal ? Math.round(Math.min(130, entry.total / planKcal * 100)) : null;
        return '<div class="card" style="margin-bottom:10px">'
          + '<div class="ch">'
          + '<span class="ct">' + entry.data + (entry.data === todayStr ? ' — Hoje' : '') + '</span>'
          + '<div style="display:flex;align-items:center;gap:8px">'
          + (adherePct !== null ? '<span style="font-size:9.5px;background:' + (adherePct >= 85 && adherePct <= 115 ? '#dcfce7' : adherePct >= 70 ? '#fef3c7' : '#fee2e2') + ';color:' + (adherePct >= 85 && adherePct <= 115 ? '#16a34a' : adherePct >= 70 ? '#d97706' : '#dc2626') + ';padding:2px 8px;border-radius:99px;font-weight:700">' + adherePct + '% adesão</span>' : '')
          + '<span style="font-family:var(--in);font-size:13px;font-weight:800;color:var(--g5)">' + entry.total + ' kcal</span>'
          + '</div></div>'
          + entry.refeicoes.map(function (r) {
            return '<div style="background:var(--n0);border-radius:var(--r);padding:9px 12px;margin-bottom:6px">'
              + '<div style="display:flex;justify-content:space-between;margin-bottom:4px">'
              + '<span style="font-family:var(--jk);font-size:11px;font-weight:700;color:var(--n6)">' + r.n + '</span>'
              + '<div style="display:flex;align-items:center;gap:6px">'
              + (r.feel ? '<span style="font-size:12px">' + r.feel.split(' ')[0] + '</span>' : '')
              + '<span class="tag tg">' + r.k + ' kcal</span></div></div>'
              + '<div style="font-size:11.5px;color:var(--n5)">' + (Array.isArray(r.items) ? r.items.join(' · ') : r.items) + '</div>'
              + '</div>';
          }).join('') + '</div>';
      }).join('')
      : '<div style="text-align:center;padding:30px;color:var(--n4)"><div style="font-size:36px;margin-bottom:10px">📔</div><div style="font-weight:600">Nenhum registro ainda</div><div style="font-size:12px;margin-top:5px">Adicione sua primeira refeição do dia!</div></div>')
    + '</div>'
    + '<div>'
    + '<div class="card" style="margin-bottom:10px"><div class="ch"><span class="ct">Registrar Refeição</span></div>'
    + '<div class="fld"><label class="lbl">Refeição</label><select class="sel" id="d-meal"><option>Café da manhã</option><option>Lanche da manhã</option><option>Almoço</option><option>Lanche da tarde</option><option>Jantar</option><option>Ceia</option></select></div>'
    + '<div class="fld"><label class="lbl">O que comeu?</label><textarea class="textarea" id="d-items" placeholder="Ex: Aveia 45g, Iogurte grego 150g, Banana 1 unidade…" style="min-height:80px"></textarea></div>'
    + '<div class="row2"><div class="fld"><label class="lbl">Estimativa (kcal)</label><input class="inp" id="d-kcal" type="number" placeholder="Ex: 350"/></div>'
    + '<div class="fld"><label class="lbl">Como se sentiu?</label><select class="sel" id="d-feel"><option value="😊 Bem e satisfeito">😊 Bem</option><option value="😐 Neutro">😐 Neutro</option><option value="😔 Com culpa">😔 Culpa</option><option value="🤢 Desconforto">🤢 Mal</option></select></div></div>'
    + '<div class="fld"><label class="lbl">Observação</label><input class="inp" id="d-obs" placeholder="Ex: almocei fora, não resisti ao doce…"/></div>'
    + '<div class="fld"><label class="lbl">Foto da refeição <span style="font-size:9px;color:var(--n4);font-weight:400">(opcional)</span></label>'
    + '<div id="d-photo-preview" style="display:none;margin-bottom:8px;position:relative"><img id="d-photo-img" style="width:100%;max-height:180px;object-fit:cover;border-radius:var(--r2);border:1.5px solid var(--n2)"/><button onclick="_diaryRemovePhoto()" style="position:absolute;top:6px;right:6px;background:rgba(0,0,0,.55);color:#fff;border:none;border-radius:6px;padding:3px 8px;font-size:11px;font-weight:700;cursor:pointer">✕ Remover</button></div>'
    + '<label style="display:flex;align-items:center;gap:9px;padding:10px 13px;border:1.5px dashed var(--n3);border-radius:var(--r2);cursor:pointer;background:var(--n0);transition:border-color .15s" id="d-photo-lbl" onmouseover="this.style.borderColor=\'var(--g4)\'" onmouseout="this.style.borderColor=\'var(--n3)\'"><svg width=\'16\' height=\'16\' viewBox=\'0 0 24 24\' fill=\'currentColor\' style=\'color:var(--g4)\'><path d=\'M20 5h-3.17L15 3H9L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 14H4V7h4.05l1.83-2h4.24l1.83 2H20v12zm-8-11c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z\'/></svg><span style=\'font-size:12px;font-weight:600;color:var(--n6)\'>Tirar foto / Escolher da galeria</span><input type=\'file\' accept=\'image/*\' capture=\'environment\' style=\'display:none\' id=\'d-photo-inp\' onchange=\'_diaryPhotoPreview(event)\'/></label></div>'
    + '<button class="btn btn-p" style="width:100%" onclick="addDiaryEntry()">💾 Salvar no Diário</button></div>'
    + (planKcal ? '<div class="card"><div class="ch"><span class="ct">Meta de Hoje</span></div>'
      + '<div style="text-align:center;padding:8px 0">'
      + '<div style="font-family:var(--in);font-size:24px;font-weight:800;color:var(--g5)">' + todayTotal + '<span style="font-size:13px;color:var(--n4)"> / ' + planKcal + ' kcal</span></div>'
      + '<div style="background:var(--n2);border-radius:99px;height:8px;margin:8px 0;overflow:hidden"><div style="width:' + Math.min(100, Math.round(todayTotal / planKcal * 100)) + '%;height:100%;background:var(--g4);border-radius:99px;transition:width .5s"></div></div>'
      + '<div style="font-size:11px;color:' + (remaining > 0 ? 'var(--n4)' : '#dc2626') + '">' + (remaining > 0 ? remaining + ' kcal restantes' : '+' + (Math.abs(remaining)) + ' kcal acima da meta') + '</div>'
      + '</div></div>' : '')
    + '</div></div>';
}

function addDiaryEntry() {
  var meal = document.getElementById('d-meal').value;
  var items = document.getElementById('d-items').value;
  var kcal = parseInt(document.getElementById('d-kcal').value) || 0;
  var feel = document.getElementById('d-feel').value;
  var obs = (document.getElementById('d-obs') || {}).value || '';
  if (!items.trim()) { showToast('Descreva o que você comeu', 'w'); return; }
  var p = _getPacPatient(); if (!p) { showToast('Paciente não encontrado', 'w'); return; }
  if (!p.diary) p.diary = [];
  var today = new Date(); var d = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
  var photoInp = document.getElementById('d-photo-inp');
  var photoData = window._diaryPhotoData || null;
  var refeicao = { n: meal, items: items.split(',').map(function (x) { return x.trim(); }).filter(Boolean), k: kcal, feel: feel, obs: obs, photo: photoData, hora: (today.getHours() < 10 ? '0' : '') + today.getHours() + ':' + (today.getMinutes() < 10 ? '0' : '') + today.getMinutes() };
  var existing = p.diary.find(function (e) { return e.data === d; });
  if (existing) {
    if (!existing.meals) existing.meals = existing.refeicoes || [];
    existing.refeicoes.push(refeicao);
    existing.meals = existing.refeicoes;
    existing.total += kcal;
  } else {
    var entry = { data: d, refeicoes: [refeicao], meals: [refeicao], total: kcal };
    p.diary.unshift(entry);
  }
  DB.save();
  // Limpar campos
  document.getElementById('d-items').value = '';
  document.getElementById('d-kcal').value = '';
  if (document.getElementById('d-obs')) document.getElementById('d-obs').value = '';
  window._diaryPhotoData = null;
  showToast('Refeição registrada! ' + feel, 's');
  goP('pdiary', document.getElementById('pi-diary'));
}
function openDiaryAdd() { document.getElementById('d-items').focus(); }

function rPTask() {
  var catMap = { s: 'tc-s', u: 'tc-u', e: 'tc-e', g: 'tc-g' }; var catLabel = { s: 'Saúde', u: 'Suplemento', e: 'Exame', g: 'Geral' };
  var pending = tasks.filter(function (t) { return !t.done }); var done = tasks.filter(function (t) { return t.done });
  var pct = tasks.length ? Math.round(done.length / tasks.length * 100) : 0;
  var circ = 2 * Math.PI * 44, off = circ * (1 - pct / 100);
  return '<div style="display:grid;grid-template-columns:1fr 280px;gap:14px">'
    + '<div><div class="card" style="margin-bottom:10px"><div class="ch"><span class="ct">Pendentes</span><span class="cs">' + pending.length + ' itens</span></div>'
    + (pending.length ? pending.map(function (t) { return '<div class="task-item"><div class="task-chk' + (t.done ? ' checked' : '') + '" onclick="toggleTask(' + t.id + ')">' + (t.done ? '✓' : '') + '</div><span class="task-txt">' + t.text + '</span><span class="task-cat ' + catMap[t.cat] + '">' + catLabel[t.cat] + '</span><button class="task-del" onclick="delTask(' + t.id + ')">×</button></div>'; }).join('') : '<p style="font-size:12.5px;color:var(--n4);padding:6px 0">Nenhuma tarefa pendente 🎉</p>')
    + '</div><div class="card" style="margin-bottom:10px"><div class="ch"><span class="ct">Concluídas</span><span class="cs" style="color:var(--g5)">' + done.length + ' itens</span></div>'
    + done.map(function (t) { return '<div class="task-item done"><div class="task-chk checked" onclick="toggleTask(' + t.id + ')">✓</div><span class="task-txt">' + t.text + '</span><span class="task-cat ' + catMap[t.cat] + '">' + catLabel[t.cat] + '</span><button class="task-del" onclick="delTask(' + t.id + ')">×</button></div>'; }).join('')
    + '</div><div class="card"><div class="ch"><span class="ct">Adicionar Tarefa</span></div><div style="display:flex;gap:7px;margin-top:4px"><input class="inp" id="new-task" placeholder="Nova tarefa…" onkeydown="if(event.key===\'Enter\')addTask()" style="flex:1"/><select class="sel" id="new-cat" style="width:auto;padding:9px 10px"><option value="g">Geral</option><option value="s">Saúde</option><option value="u">Suplemento</option><option value="e">Exame</option></select><button class="btn btn-p" onclick="addTask()">+ Add</button></div></div></div>'
    + '<div class="card" style="text-align:center;padding:28px 18px"><div style="font-family:var(--jk);font-size:10px;font-weight:700;color:var(--n4);letter-spacing:.1em;text-transform:uppercase;margin-bottom:16px">Progresso</div>'
    + '<div style="position:relative;width:100px;height:100px;margin:0 auto 12px"><svg width="100" height="100" viewBox="0 0 100 100"><defs><linearGradient id="tg" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#e85a0a"/><stop offset="100%" stop-color="#f9a868"/></linearGradient></defs><circle cx="50" cy="50" r="44" fill="none" stroke="var(--n2)" stroke-width="8"/><circle cx="50" cy="50" r="44" fill="none" stroke="url(#tg)" stroke-width="8" stroke-linecap="round" stroke-dasharray="' + circ.toFixed(1) + '" stroke-dashoffset="' + off.toFixed(1) + '" transform="rotate(-90 50 50)" style="transition:stroke-dashoffset .9s ease"/></svg><div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center"><div style="font-family:var(--in);font-size:22px;font-weight:800;color:var(--n9)">' + pct + '%</div></div></div>'
    + '<div style="font-size:12px;font-weight:600;color:var(--n7)">' + done.length + ' de ' + tasks.length + ' tarefas</div></div></div>';
}
function toggleTask(id) { tasks = tasks.map(function (t) { return t.id === id ? Object.assign({}, t, { done: !t.done }) : t }); DB.save(); goP('ptask', document.getElementById('pi-task')); showToast(tasks.find(function (t) { return t.id === id }).done ? 'Tarefa concluída! ✓' : 'Tarefa reaberta', 's'); }
function delTask(id) { tasks = tasks.filter(function (t) { return t.id !== id }); DB.save(); goP('ptask', document.getElementById('pi-task')); showToast('Tarefa removida', 'i'); }
function addTask() { var inp = document.getElementById('new-task'); var sel = document.getElementById('new-cat'); if (!inp || !inp.value.trim()) { showToast('Digite o texto da tarefa', 'w'); return; } tasks.push({ id: taskCt++, text: inp.value.trim(), cat: sel.value, done: false }); DB.save(); goP('ptask', document.getElementById('pi-task')); showToast('Tarefa adicionada!', 's'); }

function rPEv() {
  var p = pats[0]; var hist = [...p.historico].reverse(); var loss = p.wStart - p.w;
  var ws = hist.map(function (h) { return h.peso });
  var mn = Math.min.apply(null, ws) - 1, mx = Math.max.apply(null, ws) + 1, nf = hist.length, cw = 480, ch = 130;
  var pts = hist.map(function (h, i) { var x = 20 + i * (cw - 40) / (nf > 1 ? nf - 1 : 1); var y = 10 + (mx - h.peso) / (mx - mn) * (ch - 20); return { x: x.toFixed(1), y: y.toFixed(1), h: h } });
  var line = pts.map(function (p, i) { return (i === 0 ? 'M' : 'L') + p.x + ',' + p.y }).join(' ');
  var area = pts.map(function (p, i) { return (i === 0 ? 'M' : 'L') + p.x + ',' + p.y }).join(' ') + ' L' + pts[pts.length - 1].x + ',' + (ch + 5) + ' L' + pts[0].x + ',' + (ch + 5) + ' Z';
  return (loss >= 5 ? '<div class="ach"><div class="ach-ico">🏆</div><div><div class="ach-t">Conquista: −' + loss.toFixed(1) + ' kg!</div><div class="ach-d">Parabéns pela dedicação! Continue assim.</div></div></div>' : '')
    + '<div class="ev-metrics" style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:14px">'
    + [['Peso Atual', p.w + ' kg', (loss >= 0 ? '↓ −' + loss.toFixed(1) + ' kg' : '↑ +' + Math.abs(loss).toFixed(1) + ' kg')], ['IMC', p.bmi, (p.bmi < 25 ? 'Eutrófico ✓' : 'Monitorando')], ['Cintura', p.historico[0].cintura + ' cm', 'Meta: <80cm'], ['% Gordura', p.fat + '%', 'Registrado']].map(function (m) { return '<div class="ev-m"><div style="font-size:10px;color:var(--n4);text-transform:uppercase;letter-spacing:.05em;font-family:var(--jk);font-weight:700">' + m[0] + '</div><div style="font-family:var(--in);font-size:22px;font-weight:800;letter-spacing:-.5px;color:var(--n9);margin-top:4px">' + m[1] + '</div><div class="ev-m-d">' + m[2] + '</div></div>'; }).join('') + '</div>'
    + '<div class="card" style="margin-bottom:12px"><div class="ch"><span class="ct">Evolução do Peso</span></div><svg viewBox="0 0 ' + cw + ' ' + (ch + 15) + '" width="100%" height="' + (ch + 15) + '"><defs><linearGradient id="peg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#22c55e" stop-opacity=".18"/><stop offset="100%" stop-color="#22c55e" stop-opacity="0"/></linearGradient></defs><path d="' + area + '" fill="url(#peg)"/><path d="' + line + '" fill="none" stroke="#22c55e" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>' + pts.map(function (p) { return '<circle cx="' + p.x + '" cy="' + p.y + '" r="4" fill="#22c55e" stroke="#fff" stroke-width="2"/>'; }).join('') + pts.map(function (p) { return '<text x="' + p.x + '" y="' + (ch + 14) + '" text-anchor="middle" font-size="8" fill="#9ca3af" font-family="Inter">' + p.h.data.slice(0, 5) + '</text>'; }).join('') + '</svg></div>'
    + '<div class="card" style="padding:0;overflow:hidden"><div style="overflow-x:auto;-webkit-overflow-scrolling:touch"><table class="tbl"><thead><tr><th>Data</th><th>Peso</th><th>IMC</th><th>Cintura</th><th>% Gordura</th></tr></thead><tbody>' + p.historico.map(function (h) { return '<tr><td>' + h.data + '</td><td><strong>' + h.peso + ' kg</strong></td><td>' + h.imc + '</td><td>' + h.cintura + ' cm</td><td>' + h.fat + '%</td></tr>'; }).join('') + '</tbody></table></div>';
}

// ─── PDF EXPORT ───
function exportPDF() {
  var p = selPat || pats[0];
  var tk = 0, tp = 0, tc = 0, tf = 0;
  meals.forEach(function (m) { m.items.forEach(function (it) { tk += it.k; tp += it.p; tc += it.c; tf += it.g; }) });
  var mealRows = meals.filter(function (m) { return m.items.length }).map(function (m) {
    var mk = m.items.reduce(function (s, it) { return s + it.k }, 0);
    return '<div style="margin-bottom:10px;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden"><div style="background:#fff3ec;padding:8px 14px;display:flex;justify-content:space-between"><span style="font-weight:700;color:#166534;font-size:12px">' + m.em + ' ' + m.name + '</span><span style="color:#6b2d00;font-size:11px;font-weight:700">' + mk.toFixed(0) + ' kcal</span></div>' + m.items.map(function (it) { var mc = getMedidaCaseira(it.food.n, it.qty); return '<div style="display:flex;justify-content:space-between;align-items:center;padding:6px 14px;border-top:1px solid #f3f4f6;font-size:11px"><div><span>' + it.food.e + ' ' + it.food.n + ' (' + it.qty + 'g)</span>' + (mc ? '<span style="color:#c4420a;font-size:10px;margin-left:8px">🥄 ' + mc + '</span>' : '') + '</div><span style="color:#6b7280;white-space:nowrap;margin-left:12px">' + it.k.toFixed(0) + ' kcal · P:' + it.p.toFixed(1) + 'g · C:' + it.c.toFixed(1) + 'g · G:' + it.g.toFixed(1) + 'g</span></div>'; }).join('') + '</div>';
  }).join('') || '<p style="color:#9ca3af;font-size:12px">Monte o plano na aba Prescrição.</p>';
  var pa = document.getElementById('print-area'); if (!pa) return;
  pa.innerHTML = `<style>*{box-sizing:border-box;margin:0;padding:0}body{font-family:Inter,system-ui,sans-serif;color:#111827;print-color-adjust:exact;-webkit-print-color-adjust:exact}.p{max-width:780px;margin:0 auto;padding:36px}.ph{display:flex;justify-content:space-between;align-items:flex-start;border-bottom:3px solid #c4420a;padding-bottom:16px;margin-bottom:24px}.logo{font-size:20px;font-weight:900;color:#6b2d00}.logo em{color:#d97706;font-style:normal}.logo small{display:block;font-size:9px;font-weight:500;color:#6b7280;letter-spacing:.1em;text-transform:uppercase;margin-top:3px}.pp{background:#fff3ec;border-radius:10px;padding:14px 18px;margin-bottom:22px;display:flex;justify-content:space-between}.pp-n{font-size:18px;font-weight:700;color:#6b2d00}.pp-i{font-size:11px;color:#6b7280;margin-top:3px;line-height:1.8}.sec{font-size:10px;font-weight:700;color:#6b7280;letter-spacing:.08em;text-transform:uppercase;margin:18px 0 10px;border-bottom:1.5px solid #f3f4f6;padding-bottom:5px}.mcr{display:flex;gap:10px;margin-bottom:16px}.mc{flex:1;text-align:center;background:#f9fafb;border-radius:8px;padding:12px}.mc-n{font-size:20px;font-weight:800;color:#163318}.mc-l{font-size:9px;color:#9ca3af;text-transform:uppercase;letter-spacing:.05em;margin-top:2px}.note{background:#fffbeb;border:1.5px solid #fcd34d;border-radius:8px;padding:12px 14px;margin-top:18px;font-size:11px;color:#78350f;line-height:1.9}.ft{margin-top:22px;padding-top:12px;border-top:1px solid #f3f4f6;font-size:9px;color:#d1d5db;text-align:center}</style>
 <div class="p">
 <div class="ph">
  <div style="display:flex;align-items:center;gap:12px">
   <div>
    <div class="logo">Diet<em>On</em></div>
    <small>Dieta Online — Plataforma Clínica de Nutrição</small>
   </div>
  </div>
  <div style="text-align:right;font-size:11px;color:#6b7280">
   <strong style="font-size:13px;color:#1a1410">Plano Alimentar Personalizado</strong><br>
   ${new Date().toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' })}<br>
   Válido por 30 dias · Não substitui consulta médica
  </div>
 </div>
 <div style="background:#fff3ec;border-bottom:2px solid #fdd0a8;padding:8px 36px;display:flex;align-items:center;justify-content:space-between;font-size:10px;color:#7a6a58">
  <span>Nutricionista responsável: <strong style="color:#1a1410">${cu.name}</strong>${cu.crn ? ' · ' + cu.crn : ''}</span>
  <span>CRN: ${cu.crn || '—'} · E-mail: ${cu.email}</span>
 </div>
 <div class="pp"><div><div class="pp-n">${p.n}</div><div class="pp-i">${p.age} anos · ${p.sex === 'F' ? 'Feminino' : 'Masculino'} · ${p.w}kg · ${p.h}cm · IMC ${p.bmi}<br>Objetivo: ${p.goal}${p.cond ? ' · ' + p.cond : ''}</div>${p.alerg ? '<div style="margin-top:5px;font-size:10px;color:#dc2626;font-weight:600">⚠ Alergia: ' + p.alerg + '</div>' : ''}</div><div style="text-align:right;font-size:11px;color:#6b7280">Meta calórica: <strong style="color:#163318">${prescGoal > 0 ? prescGoal.toLocaleString('pt-BR') : '—'} kcal/dia</strong><br>Nutricionista: ${cu.name}<br>${cu.crn || ''}</div></div>
 <div class="sec">Distribuição de Macronutrientes</div><div class="mcr"><div class="mc"><div class="mc-n">${tp > 0 ? tp.toFixed(0) : mP || '—'}g</div><div class="mc-l">Proteínas</div></div><div class="mc"><div class="mc-n">${tc > 0 ? tc.toFixed(0) : mC || '—'}g</div><div class="mc-l">Carboidratos</div></div><div class="mc"><div class="mc-n">${tf > 0 ? tf.toFixed(0) : mF || '—'}g</div><div class="mc-l">Gorduras</div></div><div class="mc"><div class="mc-n">${tk > 0 ? tk.toFixed(0) : prescGoal || '—'}</div><div class="mc-l">Total Kcal</div></div></div>
 <div class="sec">Plano Alimentar Diário</div>${mealRows}
 <div class="note">💡 <strong>Orientações:</strong> Beba ${(p.agua || 2).toFixed(1).replace('.', ',')}L de água/dia · Mastigue devagar · Prefira alimentos naturais · Em dúvida, consulte sua nutricionista.</div>
 <div style="margin-top:24px;padding-top:20px;border-top:1px solid #f3f4f6;display:flex;justify-content:space-between;align-items:flex-end">
  <div style="font-size:10px;color:#9ca3af">
   DietOn · Dieta Online · Gerado em ${new Date().toLocaleDateString('pt-BR')}<br>
   Documento sigiloso — uso exclusivo do paciente e nutricionista
  </div>
  <div style="text-align:center">
   <div style="width:200px;border-top:1px solid #6b7280;padding-top:6px;font-size:10px;color:#6b7280;font-style:italic">
    ${cu.name}<br>${cu.crn || ''}
   </div>
  </div>
 </div>
 </div>`;
  pa.style.display = 'block'; window.print(); setTimeout(function () { pa.style.display = 'none' }, 2200); showToast('Preparando PDF…', 's');
}

function rptMensal() { showToast('Gerando relatório mensal em PDF…', 's'); setTimeout(function () { exportPDF(); }, 300); }

// ─── MODAL UTILS ───
function openM(id) {
  var el = document.getElementById(id); if (el) {
    el.classList.add('open'); if (id === 'm-meas') { var d = document.getElementById('mm-data'); if (d) d.value = new Date().toISOString().split('T')[0]; }
    if (id === 'm-pat') {
      // Reset para modo cadastro (pode ter sido aberto em modo edição antes)
      var mt = el.querySelector('.mt'); if (mt && mt.textContent.startsWith('Editar')) mt.textContent = 'Cadastrar Paciente — Anamnese Completa';
      var btn = el.querySelector('.mf .btn-p'); if (btn && btn.textContent === 'Salvar Alterações') { btn.textContent = 'Cadastrar Paciente'; btn.onclick = savePat; }
    }
  }
}
function closeM(id) { var el = document.getElementById(id); if (el) { el.classList.remove('open'); if (el.id === 'm-pd' || el.id === 'm-tpll') { setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 300); } } }
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.ov').forEach(function (o) { o.addEventListener('click', function (e) { if (e.target === o) closeM(o.id) }); });
});
document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { document.querySelectorAll('.ov.open').forEach(function (o) { closeM(o.id) }); } });

function savePat() {
  var nome = (document.getElementById('np-nome') || {}).value || '';
  if (!nome.trim()) { showToast('Preencha o nome do paciente', 'w'); return; }

  var g = function (id) { return (document.getElementById(id) || {}).value || ''; };
  var gn = function (id) { return parseFloat(g(id)) || 0; };

  // Calcular idade a partir da data de nascimento
  var nasc = g('np-nasc');
  var age = 0;
  if (nasc) { var d = new Date(nasc); var now = new Date(); age = now.getFullYear() - d.getFullYear(); if (now < new Date(now.getFullYear(), d.getMonth(), d.getDate())) age--; }

  var peso = gn('np-peso') || 70;
  var alt = gn('np-alt') || 170;
  var bmi = alt > 0 ? +(peso / ((alt / 100) * (alt / 100))).toFixed(1) : 0;

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();
  var todayStr = dd + '/' + mm + '/' + yyyy;

  // Gerar iniciais e cor de avatar
  var words = nome.trim().split(' ').filter(Boolean);
  var ini = words.slice(0, 2).map(function (w) { return w[0].toUpperCase(); }).join('');
  var avOpts = ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8'];
  var av = avOpts[pats.length % avOpts.length];

  var newPat = {
    id: Date.now(),
    n: nome.trim(),
    age: age || 25,
    sex: g('np-sex') || 'F',
    w: peso,
    h: alt,
    bmi: bmi,
    fat: gn('np-fat'),
    wStart: peso,
    goal: g('np-obj') || 'Saúde geral',
    cond: g('np-cond'),
    alerg: g('np-alerg'),
    agua: gn('np-agua') || 2.0,
    prog: 0,
    last: todayStr,
    av: av,
    i: ini,
    st: 'tg',
    stxt: 'Em dia',
    exams: { gli: gn('np-gli') || 90, col: gn('np-col') || 180, vitd: gn('np-vitd') || 30, hem: gn('np-hem') || 13, fer: gn('np-fer') || 50, tgo: gn('np-tgo') || 22, tgp: gn('np-tgp') || 22, tsh: gn('np-tsh') || 2.0 },
    historico: [{ data: todayStr, peso: peso, imc: bmi, cintura: gn('np-cin') || 80, fat: gn('np-fat') || 20, obs: 'Cadastro inicial' }],
    diary: [],
    plans: []
  };

  pats.push(newPat);
  DB.save(); // persistir novo paciente

  // Limpar campos do modal
  ['np-nome', 'np-nasc', 'np-tel', 'np-email', 'np-peso', 'np-alt', 'np-fat', 'np-mm', 'np-cin', 'np-quad', 'np-pesc',
    'np-cond', 'np-meds', 'np-gli', 'np-col', 'np-tsh', 'np-hem', 'np-vitd', 'np-fer', 'np-tgo', 'np-tgp',
    'np-sono', 'np-agua', 'np-alerg', 'np-pref', 'np-obs'].forEach(function (id) {
      var el = document.getElementById(id); if (el) el.value = '';
    });

  closeM('m-pat');
  showToast('Paciente "' + nome.trim() + '" cadastrado com sucesso!', 's');

  // Redirecionar para lista de pacientes
  var niPat = document.getElementById('ni-pat');
  goP('pat', niPat);

  // Atualizar badge de contagem
  if (niPat) {
    var badge = niPat.querySelector('.nb');
    if (badge) badge.textContent = pats.length;
  }
}
function saveMeas() {
  var p = selPat || pats[0];
  if (!p) { showToast('Nenhum paciente selecionado', 'w'); closeM('m-meas'); return; }

  var g = function (id) { return (document.getElementById(id) || {}).value || ''; };
  var gn = function (id) { return parseFloat(g(id)) || 0; };

  var peso = gn('mm-peso');
  var fat = gn('mm-fat');
  var mm = gn('mm-mm');
  var cin = gn('mm-cin');
  var dataVal = g('mm-data');

  if (!peso) { showToast('Informe o peso para salvar', 'w'); return; }

  // Formatar data
  var dataFmt = dataVal ? dataVal.split('-').reverse().join('/') : (function () {
    var n = new Date(); return n.getDate() + '/' + (n.getMonth() + 1) + '/' + n.getFullYear();
  })();

  // Calcular IMC
  var bmi = p.h > 0 ? +(peso / ((p.h / 100) * (p.h / 100))).toFixed(1) : p.bmi;

  // Criar registro histórico
  var reg = {
    data: dataFmt,
    peso: peso,
    imc: bmi,
    cintura: cin || p.historico[p.historico.length - 1].cintura,
    fat: fat || p.fat,
    obs: g('mm-obs') || 'Consulta de rotina'
  };

  // Adicionar ao histórico do paciente
  p.historico.push(reg);

  // Atualizar dados atuais do paciente
  p.w = peso;
  p.bmi = bmi;
  if (fat) p.fat = fat;
  if (mm) p.mm = mm;
  if (cin) p.cinWaist = cin;
  p.last = dataFmt;

  // Limpar campos
  ['mm-peso', 'mm-fat', 'mm-mm', 'mm-cin', 'mm-obs'].forEach(function (id) {
    var el = document.getElementById(id); if (el) el.value = '';
  });

  DB.save();
  closeM('m-meas');
  showToast('Medidas de ' + p.n + ' registradas com sucesso!', 's');

  // Atualizar a tela de acompanhamento se estiver ativa
  var evBtn = document.getElementById('ni-ev');
  if (evBtn && evBtn.classList.contains('on')) {
    goP('ev', evBtn);
  }
  // Atualizar card na lista de pacientes
  var grid = document.getElementById('pat-grid');
  if (grid) grid.innerHTML = buildPatGrid(pats);
}


function toggleDark() {
  document.body.classList.toggle('dark');
  var btn = document.getElementById('dark-toggle');
  if (btn) btn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
  try { localStorage.setItem('dieton_dark', document.body.classList.contains('dark') ? '1' : '0'); } catch (e) { }
}
// Restore dark mode preference
(function () { try { if (localStorage.getItem('dieton_dark') === '1') document.body.classList.add('dark'); } catch (e) { } })();