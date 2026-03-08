/**
 * DietOn — Camada de API
 * 
 * Conecta o frontend (dieton.js) ao backend (FastAPI).
 * 
 * Quando o backend estiver rodando:   API_MODE = true  → usa o servidor
 * Quando estiver offline/local:       API_MODE = false → usa localStorage (modo demo)
 */

// ── Configuração ──────────────────────────────────────────────────
const API_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
  ? 'http://127.0.0.1:8000'
  : 'https://dieton-backend-production-8126.up.railway.app';

const API_BASE_URL = API_URL + '/api/v1';
let API_MODE = false; // começa em false, detecta automaticamente

// Tokens em memória (mais seguro que localStorage para tokens)
let _accessToken = sessionStorage.getItem('dieton_access') || null;
let _refreshToken = sessionStorage.getItem('dieton_refresh') || null;

// ── Detectar se o backend está rodando ────────────────────────────
(async function detectBackend() {
  try {
    const res = await fetch(`${API_URL}/health`, {
      signal: AbortSignal.timeout(5000)
    });
    if (res.ok) {
      API_MODE = true;
      console.log('✅ Backend detectado — modo API ativo');
      // alert('Site Atualizado: Conexão com Servidor OK');
    }
  } catch (e) {
    API_MODE = false;
    console.log('ℹ️ Backend não encontrado — modo local (localStorage)');
  }
})();

function showErr(msg) {
  const box = document.getElementById('err-box');
  const txt = document.getElementById('err-msg');
  if (box && txt) {
    txt.textContent = msg;
    box.style.display = 'flex';
  } else {
    alert(msg); // fallback para mobile se o DOM falhar
  }
}

// ── RECUPERAÇÃO DE SENHA ──────────────────────────────────────────
async function doForgotPassword() {
  const email = document.getElementById('inp-em').value.trim();
  if (!email) {
    showErr('Por favor, informe seu email para recuperar a senha.');
    return;
  }

  // Se estiver em modo local, não há envio de email real
  if (!API_MODE) {
    alert("ℹ️ Em modo offline, a recuperação de senha por email não está disponível. Use o usuário padrão ou inicie o backend.");
    return;
  }

  try {
    const res = await fetch(`${API_BASE_URL}/auth/forgot-password`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email })
    });
    const data = await res.json();

    // Independente de erro ou sucesso, mostramos a mensagem de segurança
    alert(data.message || "Se este email estiver cadastrado, você receberá as instruções em breve.");
  } catch (e) {
    showErr('Erro ao solicitar recuperação de senha.');
  }
}


// ── Helper: fazer chamadas autenticadas ───────────────────────────
async function apiCall(endpoint, method = 'GET', body = null) {
  const headers = { 'Content-Type': 'application/json' };
  if (_accessToken) headers['Authorization'] = `Bearer ${_accessToken}`;

  const res = await fetch(`${API_URL}${endpoint}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : null,
    signal: AbortSignal.timeout(8000)
  });

  // Token expirou → tenta renovar automaticamente
  if (res.status === 401 && _refreshToken) {
    const renewed = await _renewToken();
    if (renewed) {
      headers['Authorization'] = `Bearer ${_accessToken}`;
      return fetch(`${API_URL}${endpoint}`, { method, headers, body: body ? JSON.stringify(body) : null });
    } else {
      doLogout();
      return null;
    }
  }

  return res;
}

// Renova o access token usando o refresh token
async function _renewToken() {
  try {
    const res = await fetch(`${API_URL}/auth/refresh`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ refresh_token: _refreshToken })
    });
    if (res.ok) {
      const data = await res.json();
      _accessToken = data.access_token;
      sessionStorage.setItem('dieton_access', _accessToken);
      return true;
    }
  } catch (e) { }
  return false;
}


// ── LOGIN ─────────────────────────────────────────────────────────
// Substitui a função doLogin() original do dieton.js
async function doLogin() {
  const email = document.getElementById('inp-em').value.trim();
  const pw = document.getElementById('inp-pw').value;

  // Modo local (sem backend)
  if (!API_MODE) {
    const u = USERS.find(x => x.email === email && x.pw === pw);
    if (!u) { showErr('E-mail ou senha incorretos.'); return; }
    cu = u;
    _finishLogin();
    return;
  }

  // Modo API
  try {
    const res = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password: pw })
    });
    const data = await res.json();

    if (!res.ok) { showErr(data.detail || 'E-mail ou senha incorretos.'); return; }

    // Salvar tokens
    _accessToken = data.access_token;
    _refreshToken = data.refresh_token;
    sessionStorage.setItem('dieton_access', _accessToken);
    sessionStorage.setItem('dieton_refresh', _refreshToken);

    // Montar objeto de usuário no formato que o dieton.js espera
    cu = {
      id: data.user_id,
      name: data.name,
      email: email,
      role: data.role,
      pw: pw   // mantido para compatibilidade local
    };

    _finishLogin();
  } catch (e) {
    console.error('Erro no login:', e);
    showErr('Erro de conexão. Tente novamente.');
  }
}

// Parte final do login (igual nos dois modos)
function _finishLogin() {
  if (typeof pats !== 'undefined') pats = [];
  if (typeof tasks !== 'undefined') tasks = [];
  if (typeof notifs !== 'undefined') notifs = [];
  if (typeof templates !== 'undefined') templates = [];
  var hadData = DB.load();
  var isDemoAdmin = cu && cu.email === 'admin@dieton.com.br';
  if (!hadData && isDemoAdmin) {
    notifs = [
      { id: 1, txt: 'Pedro Alves não registra consulta há 53 dias', type: 'w' },
      { id: 2, txt: 'Maria Santos: Vitamina D crítica (18 ng/mL)', type: 'r' },
      { id: 3, txt: '5 pacientes com retorno esta semana', type: 'i' }
    ];
  }
  document.getElementById('login').style.display = 'none';
  document.getElementById('app').style.display = 'flex';
  if (cu.role === 'pro') initPro(); else initPac();
  setTimeout(updateNotifBadge, 100);
}


// ── LOGOUT ────────────────────────────────────────────────────────
async function doLogout() {
  DB.save();
  if (window._autoSaveInterval) clearInterval(window._autoSaveInterval);

  // Revogar token no backend
  if (API_MODE && _refreshToken) {
    try {
      await apiCall('/auth/logout', 'POST', { refresh_token: _refreshToken });
    } catch (e) { }
  }

  // Limpar tokens
  _accessToken = null;
  _refreshToken = null;
  sessionStorage.removeItem('dieton_access');
  sessionStorage.removeItem('dieton_refresh');

  cu = null;
  document.getElementById('app').style.display = 'none';
  document.getElementById('login').style.display = 'flex';
}


// ── CADASTRO — NUTRICIONISTA ──────────────────────────────────────
async function doRegisterPro() {
  const nome = document.getElementById('up-pro-nome').value.trim();
  const email = document.getElementById('up-pro-email').value.trim();
  const pw = document.getElementById('up-pro-pw').value;
  const pw2 = document.getElementById('up-pro-pw2').value;
  const crn = document.getElementById('up-pro-crn').value.trim();

  if (!nome || !email || !pw) { showUpErr('Preencha todos os campos.'); return; }
  if (pw !== pw2) { showUpErr('As senhas não coincidem.'); return; }
  if (pw.length < 8) { showUpErr('Senha deve ter no mínimo 8 caracteres.'); return; }

  // Modo local
  if (!API_MODE) {
    if (USERS.find(u => u.email === email)) { showUpErr('Este e-mail já está cadastrado.'); return; }
    const ini = nome.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase();
    const avOpts = ['👩‍⚕️', '👨‍⚕️', '🧑‍⚕️'];
    USERS.push({ id: USERS.length + 1, name: nome, email, pw, role: 'pro', crn, av: avOpts[0], init: ini });
    document.getElementById('up-pro-email').value = email;
    document.getElementById('up-pro-pw').value = pw;
    showUpOk('Conta criada! Fazendo login...');
    setTimeout(doLogin, 700);
    return;
  }

  // Modo API
  try {
    const res = await fetch(`${API_BASE_URL}/auth/register/pro`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: nome, email, password: pw, crn })
    });
    const data = await res.json();

    if (!res.ok) { showUpErr(data.detail || 'Erro ao criar conta.'); return; }

    showUpOk(`Conta criada! Seu código de convite: ${data.invite_code}`);
    // Auto-login após cadastro
    document.getElementById('up-pro-email').value = email;
    document.getElementById('up-pro-pw').value = pw;
    setTimeout(doLogin, 1500);
  } catch (e) {
    showUpErr('Erro de conexão. Tente novamente.');
  }
}


// ── CADASTRO — PACIENTE ───────────────────────────────────────────
async function doRegisterPac() {
  const nome = document.getElementById('up-pac-nome').value.trim();
  const email = document.getElementById('up-pac-email').value.trim();
  const code = document.getElementById('up-pac-code').value.trim().toUpperCase();
  const pw = document.getElementById('up-pac-pw').value;
  const pw2 = document.getElementById('up-pac-pw2').value;

  if (!nome || !email || !pw || !code) { showUpErr('Preencha todos os campos.'); return; }
  if (pw !== pw2) { showUpErr('As senhas não coincidem.'); return; }

  // Modo local
  if (!API_MODE) {
    if (USERS.find(x => x.email === email)) { showUpErr('Este e-mail já está cadastrado.'); return; }
    const inv = JSON.parse(localStorage.getItem('dieton_invites') || '{}');
    const nutri = USERS.find(u => u.invite_code === code || inv[code] === u.id);
    if (!nutri) { showUpErr('Código de convite inválido.'); return; }
    USERS.push({ id: USERS.length + 1, name: nome, email, pw, role: 'pac', linkedNutriId: nutri.id });
    showUpOk('Conta criada! Fazendo login...');
    document.getElementById('up-pac-email').value = email;
    document.getElementById('up-pac-pw').value = pw;
    setTimeout(doLogin, 700);
    return;
  }

  // Modo API
  try {
    const res = await fetch(`${API_BASE_URL}/auth/register/pac`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: nome, email, password: pw, invite_code: code })
    });
    const data = await res.json();

    if (!res.ok) { showUpErr(data.detail || 'Erro ao criar conta.'); return; }

    showUpOk(`Bem-vindo(a)! Nutricionista: ${data.nutritionist}`);
    document.getElementById('up-pac-email').value = email;
    document.getElementById('up-pac-pw').value = pw;
    setTimeout(doLogin, 1500);
  } catch (e) {
    showUpErr('Erro de conexão. Tente novamente.');
  }
}


// ── Helpers de UI (mantidos por compatibilidade) ──────────────────
function showErr(msg) {
  const el = document.getElementById('login-err');
  if (el) { el.textContent = msg; el.style.display = 'block'; }
}
function showUpErr(msg) {
  const el = document.getElementById('up-err');
  if (el) { el.textContent = msg; el.style.display = 'block'; }
}
function showUpOk(msg) {
  const el = document.getElementById('up-ok');
  if (el) { el.textContent = msg; el.style.display = 'block'; }
}


// ── RECORDATÓRIO 24H ──────────────────────────────────────────────
async function apiGetR24(patientId) {
  if (!API_MODE) {
    try { return JSON.parse(localStorage.getItem('r24_' + patientId) || 'null'); } catch (e) { return null; }
  }
  try {
    const res = await apiCall(`/api/v1/patients/${patientId}/r24`);
    if (!res || !res.ok) return null;
    return await res.json();
  } catch (e) { return null; }
}

async function apiSaveR24(patientId, data) {
  if (!API_MODE) {
    try { localStorage.setItem('r24_' + patientId, JSON.stringify(data)); } catch (e) { }
    return;
  }
  try {
    await apiCall(`/api/v1/patients/${patientId}/r24`, 'POST', {
      record_date: data.date,
      meals: data.meals,
      obs: data.obs || null
    });
  } catch (e) { console.error('Erro ao salvar R24:', e); }
}

async function apiClearR24(patientId) {
  if (!API_MODE) {
    try { localStorage.removeItem('r24_' + patientId); } catch (e) { }
    return;
  }
  try { await apiCall(`/api/v1/patients/${patientId}/r24`, 'DELETE'); } catch (e) { }
}


// ── SUPLEMENTAÇÃO ─────────────────────────────────────────────────
async function apiGetSupplements(patientId) {
  if (!API_MODE) return null;
  try {
    const res = await apiCall(`/api/v1/patients/${patientId}/supplements`);
    if (!res || !res.ok) return null;
    return await res.json();
  } catch (e) { return null; }
}

async function apiAddSupplement(patientId, supl) {
  if (!API_MODE) return null;
  try {
    const res = await apiCall(`/api/v1/patients/${patientId}/supplements`, 'POST', supl);
    if (!res || !res.ok) return null;
    return await res.json();
  } catch (e) { return null; }
}

async function apiUpdateSupplement(patientId, suplId, data) {
  if (!API_MODE) return;
  try { await apiCall(`/api/v1/patients/${patientId}/supplements/${suplId}`, 'PUT', data); } catch (e) { }
}

async function apiDeleteSupplement(patientId, suplId) {
  if (!API_MODE) return;
  try { await apiCall(`/api/v1/patients/${patientId}/supplements/${suplId}`, 'DELETE'); } catch (e) { }
}


// ── FINANCEIRO ────────────────────────────────────────────────────
async function apiGetFinancial() {
  if (!API_MODE) {
    return (cu && cu.financeiro) ? cu.financeiro : [];
  }
  try {
    const res = await apiCall(`/api/v1/financial`);
    if (!res || !res.ok) return [];
    return await res.json();
  } catch (e) { return []; }
}

async function apiAddFinancial(record) {
  if (!API_MODE) {
    if (!cu.financeiro) cu.financeiro = [];
    cu.financeiro.push(record);
    DB.save();
    return;
  }
  try {
    await apiCall(`/api/v1/financial`, 'POST', {
      patient_name: record.paciente,
      record_date: record.data,
      tipo: record.tipo,
      valor: record.valor,
      status: record.status,
      obs: record.obs || null
    });
  } catch (e) { console.error('Erro ao salvar financeiro:', e); }
}

async function apiPayFinancial(recordId) {
  if (!API_MODE) return;
  try { await apiCall(`/api/v1/financial/${recordId}`, 'PUT', { status: 'pago' }); } catch (e) { }
}

async function apiDeleteFinancial(recordId) {
  if (!API_MODE) return;
  try { await apiCall(`/api/v1/financial/${recordId}`, 'DELETE'); } catch (e) { }
}
