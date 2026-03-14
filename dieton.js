// DietOn — JavaScript Principal
// Gerado automaticamente do dieton.html

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
// DATA
// ═══════════════════════════════════════════════════════
var USERS = [
  { id: 1, name: 'Dra. Ana Nutricionista', email: 'admin' + '@' + 'dieton.com.br', pw: '123456', role: 'pro', crn: 'CRN-3 54321', av: 'a1', init: 'AN' },
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
var pats = [
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
  { id: 9, n: 'Bianca Souza', age: 26, sex: 'F', w: 54.0, h: 163, bmi: 20.3, fat: 20, wStart: 54, goal: 'Hipertrofia', cond: 'Amenorreia funcional', alerg: '', agua: 2.2, prog: 62, last: '03/03/2026', av: 'a2', i: 'BS', st: 'tg', stxt: 'Em dia', anamnese: { sono: 6.5, agua: 2.2, intestino: 'Normal', stress: 'Alto', ativ: 'Muito ativo', treino: 'Musculacao 5x/semana', historico_dieta: 'Periodo restritivo', queixas: 'Cansaco apos treinos', meds: 'Suplemento ferro', pref: 'Dieta proteica' }, exams: { gli: 82, col: 155, vitd: 32, hem: 11.8, fer: 18, tgo: 18, tgp: 20, tsh: 2.1 }, historico: [{ data: '03/03/2026', peso: 54.0, imc: 20.3, cintura: 68, fat: 20, obs: 'Boa evolucao' }, { data: '03/01/2026', peso: 53.0, imc: 19.9, cintura: 67, fat: 19.5, obs: 'Inicio' }], diary: [], plans: [], appointments: [] },
  { id: 10, n: 'Tomas Vieira', age: 44, sex: 'M', w: 102.0, h: 180, bmi: 31.5, fat: 30, wStart: 106, goal: 'Emagrecimento', cond: 'Sindrome metabolica', alerg: 'Frutos do mar', agua: 1.5, prog: 45, last: '28/02/2026', av: 'a3', i: 'TV', st: 'ty', stxt: 'Atencao', anamnese: { sono: 5.5, agua: 1.5, intestino: 'Irregular', stress: 'Muito alto', ativ: 'Sedentario', treino: 'Caminhada 2x/semana', historico_dieta: 'Efeito sanfona', queixas: 'Fadiga, refluxo', meds: 'Metformina 850mg', pref: 'Almoco tradicional' }, exams: { gli: 128, col: 220, vitd: 15, hem: 15.5, fer: 90, tgo: 45, tgp: 52, tsh: 3.5 }, historico: [{ data: '28/02/2026', peso: 102.0, imc: 31.5, cintura: 110, fat: 30, obs: 'Iniciou atividade' }, { data: '28/01/2026', peso: 104.0, imc: 32.1, cintura: 112, fat: 31, obs: 'Inicio' }], diary: [], plans: [], appointments: [] },
  { id: 11, n: 'Isabela Nunes', age: 33, sex: 'F', w: 61.0, h: 165, bmi: 22.4, fat: 26, wStart: 61, goal: 'Saude geral', cond: 'SOP, hipotireoidismo subclinico', alerg: 'Gluten', agua: 2.5, prog: 80, last: '04/03/2026', av: 'a6', i: 'IN', st: 'tg', stxt: 'Em dia', anamnese: { sono: 7, agua: 2.5, intestino: 'Normal', stress: 'Moderado', ativ: 'Moderadamente ativo', treino: 'Yoga + caminhada 3x/semana', historico_dieta: 'Dieta sem gluten ha 2 anos', queixas: 'Irregular menstrual', meds: 'Levotiroxina 50mcg', pref: 'Come fora no almoco' }, exams: { gli: 95, col: 185, vitd: 24, hem: 12.5, fer: 28, tgo: 22, tgp: 25, tsh: 4.2 }, historico: [{ data: '04/03/2026', peso: 61.0, imc: 22.4, cintura: 75, fat: 26, obs: 'TSH melhorou' }, { data: '04/01/2026', peso: 62.0, imc: 22.8, cintura: 77, fat: 27, obs: 'Inicio' }], diary: [], plans: [], appointments: [] },
  { id: 12, n: 'Gustavo Prado', age: 17, sex: 'M', w: 68.0, h: 175, bmi: 22.2, fat: 15, wStart: 64, goal: 'Hipertrofia', cond: 'Saudavel', alerg: '', agua: 2.8, prog: 70, last: '02/03/2026', av: 'a5', i: 'GP', st: 'tg', stxt: 'Em dia', anamnese: { sono: 8, agua: 2.8, intestino: 'Normal', stress: 'Baixo', ativ: 'Muito ativo', treino: 'Musculacao 4x/semana + futebol', historico_dieta: 'Sem historico', queixas: 'Quer ganhar massa', meds: 'Nenhum', pref: 'Come na escola' }, exams: { gli: 85, col: 148, vitd: 45, hem: 16.0, fer: 100, tgo: 16, tgp: 18, tsh: 1.6 }, historico: [{ data: '02/03/2026', peso: 68.0, imc: 22.2, cintura: 80, fat: 15, obs: 'Bom ganho muscular' }, { data: '02/01/2026', peso: 64.0, imc: 20.9, cintura: 78, fat: 14, obs: 'Inicio' }], diary: [], plans: [], appointments: [] }
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
  var invCode = (document.getElementById('up-pac-code') || {}).value || '';
  var pw = (document.getElementById('up-pac-pw') || {}).value || '';
  var pw2 = (document.getElementById('up-pac-pw2') || {}).value || '';
  if (!nome.trim()) { showUpErr('Informe seu nome completo.'); return; }
  if (!email.trim() || !email.includes('@')) { showUpErr('Informe um e-mail válido.'); return; }
  if (pw.length < 6) { showUpErr('A senha deve ter pelo menos 6 caracteres.'); return; }
  if (pw !== pw2) { showUpErr('As senhas não conferem.'); return; }
  if (USERS.find(function (x) { return x.email === email.trim(); })) { showUpErr('Este e-mail já está cadastrado.'); return; }

  // Validar código de convite se fornecido
  var linkedNutriId = null;
  if (invCode.trim()) {
    var nutri = USERS.find(function (u) {
      if (u.role !== 'pro') return false;
      var prof = userProfiles[u.id];
      return prof && prof.inviteCode && prof.inviteCode.toUpperCase() === invCode.trim().toUpperCase();
    });
    // Also check persistent invites store
    if (!nutri) {
      try {
        var inv = JSON.parse(localStorage.getItem('dieton_invites') || '{}');
        nutri = USERS.find(function (u) {
          return u.role === 'pro' && inv[u.id] && inv[u.id].toUpperCase() === invCode.trim().toUpperCase();
        });
      } catch (e) { }
    }
    if (!nutri) { showUpErr('Código de convite inválido. Verifique com seu nutricionista.'); return; }
    linkedNutriId = nutri.id;
  }

  var init = nome.trim().split(' ').filter(function (w) { return w.length > 0; }).slice(0, 2).map(function (w) { return w[0].toUpperCase(); }).join('');
  var avColors = ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8'];
  var newUser = {
    id: Date.now(), name: nome.trim(), email: email.trim(), pw: pw, role: 'pac',
    av: avColors[Math.floor(Math.random() * avColors.length)], init: init, linkedNutriId: linkedNutriId
  };
  USERS.push(newUser);
  // Auto-criar paciente vinculado
  var newPat = {
    id: newUser.id, n: nome.trim(), age: 0, sex: 'F', w: 0, h: 0, bmi: 0, fat: 0, wStart: 0,
    goal: 'Saúde geral', cond: '', alerg: '', agua: 2, prog: 0, last: '—', av: newUser.av, i: init,
    st: 'tg', stxt: 'Novo', linkedUserId: newUser.id,
    exams: { gli: 0, col: 0, vitd: 0, hem: 0, fer: 0, tgo: 0, tgp: 0, tsh: 0 },
    historico: [], diary: [], plans: [], appointments: [], notas: []
  };
  pats.push(newPat);
  DB.save();
  showUpOk('Conta criada com sucesso!' + (linkedNutriId ? ' Vinculado à sua nutricionista.' : ' Complete seu perfil após o login.'));
  setTimeout(function () {
    cu = newUser;
    document.getElementById('login').style.display = 'none';
    document.getElementById('app').style.display = 'flex';
    initPac();
    setTimeout(updateNotifBadge, 100); setTimeout(updatePatBadge, 100);
  }, 1200);
}
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
  setTimeout(updateNotifBadge, 100); setTimeout(updatePatBadge, 100);
}
function doLogout() {
  DB.save();
  if (window._autoSaveInterval) clearInterval(window._autoSaveInterval);
  cu = null;
  document.getElementById('app').style.display = 'none';
  document.getElementById('login').style.display = 'flex';
}


function updatePatBadge() {
  var b = document.getElementById('pat-count-badge');
  if (b) b.textContent = pats.length;
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

function initPro(){
 document.getElementById('sb-av').textContent=cu.init;document.getElementById('sb-av').className='av '+cu.av;
 document.getElementById('sb-name').textContent=cu.name;document.getElementById('sb-email').textContent=cu.email;
 var role=document.getElementById('sb-role');role.innerHTML='<span style="width:6px;height:6px;border-radius:50%;background:#4ade80;display:inline-block"></span> Nutricionista'+(cu.crn?' · '+cu.crn:'');
 var nav=document.getElementById('sb-nav');
 nav.innerHTML=`
  <div class="sb-sec">Principal</div>
  <button class="ni on" id="ni-dash" onclick="goP('dash',this)"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/></svg>Dashboard</button>
  <button class="ni" id="ni-pat" onclick="goP('pat',this)"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>Pacientes<span class="nb nb-y" id="pat-count-badge">${pats.length}</span></button>
  <button class="ni" id="ni-presc" onclick="goP('presc',this)"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>Prescrição</button>
  <button class="ni" id="ni-week" onclick="goP('week',this)"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-2 .9-2 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5z"/></svg>Plano Semanal</button>
  <button class="ni" id="ni-fin" onclick="goP('fin',this)"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg>Financeiro</button>
  <button class="ni" id="ni-ev" onclick="goP('ev',this)"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 8.17-4-4L2 16.99z"/></svg>Acompanhamento</button>
  <button class="ni" id="ni-supl" onclick="goP('supl',this)"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.5 10h-2v5h2v-5zm4 0h-2v5h2v-5zm8.5 7H4v2h15v-2zm-4.5-7h-2v5h2v-5zM11.5 1L2 6v2h19V6l-9.5-5z"/></svg>Suplementação</button>
  <div class="sb-sec">Ferramentas</div>
  <button class="ni" id="ni-micro" onclick="goP('micro',this)"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>Micronutrientes</button>
  <button class="ni" id="ni-rec" onclick="goP('rec',this)"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 100 20A10 10 0 0012 2zm0 18a8 8 0 110-16 8 8 0 010 16zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/></svg>Recordatório 24h</button>
  <button class="ni" id="ni-ai" onclick="goP('ai',this)"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a2 2 0 012 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 017 7H4a7 7 0 017-7h1V5.73A2 2 0 0110 4a2 2 0 012-2zM7 14v2a1 1 0 001 1h1v3h2v-3h2v3h2v-3h1a1 1 0 001-1v-2H7z"/></svg>IA Nutricional<span class="nb nb-y">Novo</span></button>
  <button class="ni" id="ni-notif" onclick="goP('notif',this)" style="position:relative"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/></svg>Notificações<span class="nb nb-r" id="notif-badge" style="${notifs.length===0?'display:none':''}">0</span><div class="notif-dot" id="notif-dot" style="${notifs.length===0?'display:none':''}"></div></button>
  <button class="ni" id="ni-tpl" onclick="goP('tpl',this)"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>Templates de Plano</button>
  <button class="ni" id="ni-anam" onclick="goP('anam',this)"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6c-1.1 0-2 .9-2 2v14c0 1.1.89 2 2 2h4v-2H6V4h7v5h5v4h2V8l-6-6zm2 16v2h-2v-2h-2v-2h2v-2h2v2h2v2h-2zM8 12h6v2H8zm0 4h4v2H8z"/></svg>Anamnese Clínica</button>
  <button class="ni" id="ni-agenda" onclick="goP('agenda',this)"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-2 .9-2 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5z"/></svg>Agenda</button>
  <button class="ni" id="ni-chat" onclick="goP('chat',this)"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>Mensagens<span class="nb nb-g" id="nb-chat" style="display:none">0</span></button>
  <button class="ni" id="ni-busca" onclick="goP('busca',this)"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>Busca Global</button>
  <button class="ni" id="ni-pac-diary" onclick="goP('pac-diary',this)"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 5h-3.17L15 3H9L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 14H4V7h4.05l1.83-2h4.24l1.83 2H20v12zm-8-11c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"/></svg>Di\u00e1rio Visual<span class="nb nb-y" id="nb-pac-diary" style="display:none">0</span></button>`;
 goP('dash',document.getElementById('ni-dash'));
 // Show onboarding if first visit
 if(!localStorage.getItem||!localStorage.getItem('dieton_onboarded')){
  setTimeout(showOnboarding,600);
  try{localStorage.setItem('dieton_onboarded','1');}catch(e){}
 }
}

function initPac(){
 document.getElementById('sb-av').textContent=cu.init||'PA';
 document.getElementById('sb-av').className='av '+(cu.av||'a4');
 document.getElementById('sb-name').textContent=cu.name;
 document.getElementById('sb-email').textContent=cu.email;
 setTimeout(_applySidebarProfile,50);
 var role=document.getElementById('sb-role');
 role.innerHTML='<span style="width:6px;height:6px;border-radius:50%;background:#60a5fa;display:inline-block"></span> Paciente';

 // ★ CRITICAL: Find and set selPat to the patient record matching this user
 var myPat = pats.find(function(p){
  return (p.email && p.email.toLowerCase()===(cu.email||'').toLowerCase())
    || (p._uid && p._uid===cu.id)
    || (p._backendId && p._backendId===cu.id);
 });
 // Fallback: if nurse added the patient by name matching
 if (!myPat && cu.name) {
  myPat = pats.find(function(p){
   return p.n && p.n.toLowerCase() === cu.name.toLowerCase();
  });
 }
 // If still nothing and only one patient, use it (single-patient demo)
 if (!myPat && pats.length === 1) myPat = pats[0];
 selPat = myPat || null;

 var nav=document.getElementById('sb-nav');
 nav.innerHTML=`
  <div class="sb-sec">Minha Área</div>
  <button class="ni on" id="pi-dash" onclick="goP('pdash',this)"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/></svg>Início</button>
  <button class="ni" id="pi-plan" onclick="goP('pplan',this)"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>Meu Plano</button>
  <button class="ni" id="pi-diary" onclick="goP('pdiary',this)"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-2 .9-2 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2z"/></svg>Diário Alimentar</button>
  <button class="ni" id="pi-task" onclick="goP('ptask',this)"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>Tarefas<span class="nb nb-y">${tasks.filter(function(t){return!t.done}).length}</span></button>
  <button class="ni" id="pi-ev" onclick="goP('pev',this)"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 8.17-4-4L2 16.99z"/></svg>Evolução</button>
  <button class="ni" id="pi-supl" onclick="goP('psupl',this)"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.5 10h-2v7h2v-7zm4 0h-2v7h2v-7zm8.5 9H4v2h15v-2zm-4.5-9h-2v7h2v-7zM11.5 1L2 6v2h19V6l-9.5-5z"/></svg>Suplementos</button>
  <button class="ni" id="pi-vdiary" onclick="goP('pac-diary',this)"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 5h-3.17L15 3H9L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 14H4V7h4.05l1.83-2h4.24l1.83 2H20v12zm-8-11c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"/></svg>Diário de Fotos</button>
  <button class="ni" id="pi-chat" onclick="openChatFromPat()"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>Falar com Nutricionista</button>`;

 goP('pdash',document.getElementById('pi-dash'));
}

function goP(id,btn){
 if(window.innerWidth<=1024){closeSidebar();}

 if(window.innerWidth<=1024)closeSidebar();
 document.querySelectorAll('.ni').forEach(function(b){b.classList.remove('on')});
 if(btn)btn.classList.add('on');
 var pg=document.getElementById('pg');
 var sub=document.getElementById('tb-sub');
 var ri=document.getElementById('tb-right');
 var now=new Date();
 var days=['domingo','segunda-feira','terça-feira','quarta-feira','quinta-feira','sexta-feira','sábado'];
 var months=['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];
 sub.textContent=days[now.getDay()]+', '+now.getDate()+' de '+months[now.getMonth()]+' de '+now.getFullYear();
 var t={dash:'Dashboard',pat:'Pacientes',presc:'Prescrição Nutricional',week:'Plano Semanal',ev:'Acompanhamento',micro:'Micronutrientes',rec:'Recordatório 24h',ai:'IA Nutricional',notif:'Notificações',tpl:'Templates de Plano',anam:'Anamnese Clínica',busca:'Busca Global','pac-diary':'Diário do Paciente',supl:'Suplementação',psupl:'Minha Suplementação',fin:'Financeiro',agenda:'Agenda',chat:'Mensagens',pdash:'Início',pplan:'Meu Plano Alimentar',pdiary:'Diário Alimentar',ptask:'Minhas Tarefas',pev:'Minha Evolução','diary-pro':'Diário Visual',pdash:'Início',pplan:'Meu Plano Alimentar',pdiary:'Diário Alimentar',ptask:'Tarefas',pev:'Minha Evolução'};
 document.getElementById('tb-title').textContent=t[id]||id;
 var pages={
  dash:rDash,pat:rPat,agenda:rAgenda,presc:rPresc,week:rWeek,ev:rEv,micro:rMicro,rec:rRec,ai:rAI,notif:rNotif,tpl:rTpl,'pac-diary':rPacDiary,'diary-pro':rDiaryPro,
  anam:rAnam,busca:rBusca,supl:rSupl,psupl:rPSupl,fin:rFin,chat:rChat,
  pdash:rPDash,pplan:rPPlan,pdiary:rPDiary,ptask:rPTask,pev:rPEv,psupl:rPSupl
 };
 var rbts={
  dash:'<button class="btn btn-s btn-sm" onclick=""><svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M17 12h-5v5h5v-5z"/></svg> Exportar PDF</button><button class="btn btn-p btn-sm" onclick="openM(\'m-pat\')">+ Novo Paciente</button>',
  pat:'<button class="btn btn-s btn-sm" onclick="loadTpl()">📋 Usar Template</button><button class="btn btn-p btn-sm" onclick="openM(\'m-pat\')">+ Novo Paciente</button>',
  presc:'<button class="btn btn-s btn-sm" onclick="openM(\'m-tpl\')">💾 Salvar Template</button><button class="btn btn-gold btn-sm" onclick="exportPDF()">⬇ PDF Plano</button>',
  ev:'<button class="btn btn-s btn-sm" onclick="openM(\'m-meas\')">+ Medidas</button><button class="btn btn-p btn-sm" onclick="rptMensal()">📊 Relatório PDF</button>',
  pdiary:'<button class="btn btn-p btn-sm" onclick="openDiaryAdd()">+ Registrar Refeição</button>',
  anam:'<button class="btn btn-ghost btn-sm" onclick="exportAnamPDF()">📄 Exportar Anamnese PDF</button>',
  busca:'',
  pdash:'',
  pplan:'',
  pdiary:'<button class="btn btn-p btn-sm" onclick="openDiaryAdd()">+ Registrar Refeição</button>',
  ptask:'',
  pev:'',
  psupl:''
 };
 var _helpBtn='<button id="dark-toggle" class="btn btn-ghost btn-sm" onclick="toggleDark()" style="font-size:16px;padding:4px 8px" title="Alternar modo escuro">🌙</button><button class="btn btn-ghost btn-sm" onclick="showTour()" style="font-size:11px">📖 Tutorial</button>';
  ri.innerHTML=_helpBtn+(rbts[id]||'');
 // Sync dark toggle icon with current state
 var _dt=document.getElementById('dark-toggle');
 if(_dt) _dt.textContent=document.body.classList.contains('dark')?'☀️':'🌙';
 if(pages[id]){
  try{
   pg.innerHTML=pages[id]();
   setTimeout(function(){try{afterRender(id);}catch(e){console.warn('afterRender error',id,e);}},50);
  }catch(e){
   console.error('Page render error',id,e);
   pg.innerHTML='<div style="padding:60px;text-align:center"><div style="font-size:40px;margin-bottom:12px">⚠️</div>'
    +'<div style="font-weight:700;color:var(--n7);margin-bottom:8px">Erro ao carregar a página</div>'
    +'<div style="font-size:12px;color:var(--n4);margin-bottom:16px">'+escHtml(e.message)+'</div>'
    +'<button class="btn btn-p" onclick="location.reload()">↺ Recarregar</button></div>';
  }
 }
}

function afterRender(id){
 if(id==='dash'){buildBChart();animRing(6,10);setTimeout(buildAdherenceChart,80);}
 if(id==='presc'){bindPrescEvents();}
 if(id==='busca'){document.getElementById('global-q')&&document.getElementById('global-q').focus();}
 if(id==='diary-pro'){_dvProAfterRender();}
 if(id==='pac-diary'){_dvPacAfterRender();}
 if(id==='pdiary'){setTimeout(_diarySetPhotoSrcs,80);}
}


// ─── DASHBOARD ───
function rDash(){
 var alerts = pats.filter(function(p){return p.st==='tr'||(p.exams&&(p.exams.vitd<25||p.exams.gli>120));}).length;
 var now = new Date();
 var todayStr = now.toISOString().slice(0,10);
 var monthStart = new Date(now.getFullYear(), now.getMonth(), 1);

 // Real stats
 var todayAppts=[], monthAppts=0, nextAppts=[];
 pats.forEach(function(p){
  (p.appointments||[]).forEach(function(a){
   var d = new Date(a.isoDate||a.date||'');
   var ds = (a.isoDate||a.date||'').slice(0,10);
   if(ds===todayStr) todayAppts.push({p:p.n, a:a});
   if(d>=monthStart && d<=now) monthAppts++;
   if(d>now) nextAppts.push({p:p.n, a:a, d:d});
  });
 });
 nextAppts.sort(function(a,b){return a.d-b.d;});

 var receita = (cu&&cu.financeiro||[]).reduce(function(s,r){return s+(r.status==='pago'?r.valor:0);},0);
 var pendente = (cu&&cu.financeiro||[]).reduce(function(s,r){return s+(r.status==='pendente'?r.valor:0);},0);
 var newPats = pats.filter(function(p){return new Date(p.since||p.dataCadastro||'')>=monthStart;}).length;
 var smartAlertCount = 0;
 try{smartAlertCount = _generateSmartAlerts().length;}catch(e){}

 // Build KPI row
 var kpiRow = '<div class="kpi-row">'
  +'<div class="kpi kpi-g"><div class="kpi-top"><div class="kpi-ico ki-g"><svg viewBox="0 0 24 24" fill="#16a34a"><path d="M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg></div>'
  +'<span class="kpi-bdg kbd-g">'+(newPats>0?'↑ +'+newPats+' novo'+(newPats>1?'s':''):'—')+'</span></div>'
  +'<div class="kpi-n">'+pats.length+'</div><div class="kpi-l">Pacientes Ativos</div>'
  +'<div class="kpi-ft kft-g">'+(newPats>0?'<strong>+'+newPats+'</strong> novos este mês':'Nenhum novo este mês')+'</div></div>'

  +'<div class="kpi kpi-b"><div class="kpi-top"><div class="kpi-ico ki-b"><svg viewBox="0 0 24 24" fill="#1d4ed8"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-2 .9-2 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/></svg></div>'
  +'<span class="kpi-bdg kbd-b">'+(todayAppts.length>0?todayAppts.length+' hoje':'—')+'</span></div>'
  +'<div class="kpi-n">'+monthAppts+'</div><div class="kpi-l">Consultas/Mês</div>'
  +'<div class="kpi-ft kft-b">'+(todayAppts.length>0?'<strong>'+todayAppts.length+'</strong> consulta(s) hoje':'Nenhuma consulta hoje')+'</div></div>'

  +'<div class="kpi kpi-y"><div class="kpi-top"><div class="kpi-ico ki-y"><svg viewBox="0 0 24 24" fill="#a16207"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg></div>'
  +'<span class="kpi-bdg kbd-y">'+(pendente>0?'R$ '+pendente.toFixed(0)+' pend.':'—')+'</span></div>'
  +'<div class="kpi-n">R$ '+receita.toFixed(0)+'</div><div class="kpi-l">Receita do Mês</div>'
  +'<div class="kpi-ft kft-y">'+(pendente>0?'<strong>R$ '+pendente.toFixed(0)+'</strong> pendente':'Sem pendências')+'</div></div>'

  +'<div class="kpi kpi-r" onclick="goP(\'notif\',document.getElementById(\'ni-notif\'))" style="cursor:pointer"><div class="kpi-top"><div class="kpi-ico ki-r"><svg viewBox="0 0 24 24" fill="#b91c1c"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg></div>'
  +'<span class="kpi-bdg kbd-r">'+(alerts+smartAlertCount>0?'Ativo':'')+'</span></div>'
  +'<div class="kpi-n">'+(alerts+smartAlertCount)+'</div><div class="kpi-l">Alertas Clínicos</div>'
  +'<div class="kpi-ft kft-r">'+(alerts+smartAlertCount>0?'<strong>Ver alertas</strong> →':'Nenhum alerta')+'</div></div>'
  +'</div>';

 // Build today's agenda
 var agendaItems = '';
 if(todayAppts.length===0){
  agendaItems = '<div style="text-align:center;padding:24px 0;color:var(--n4);font-size:12.5px">📅 Nenhuma consulta hoje</div>';
 } else {
  todayAppts.slice(0,4).forEach(function(item){
   var a=item.a;
   var statusTag = a.status==='done'?'tg':a.status==='cancel'?'tr':'ty';
   var statusTxt = a.status==='done'?'Concluído':a.status==='cancel'?'Cancelado':'Pendente';
   agendaItems += '<div class="ag-item">'
    +'<div class="ag-time">'+(a.time||'—')+'</div>'
    +'<div class="ag-bar" style="background:#e85a0a"></div>'
    +'<div style="flex:1;min-width:0"><div class="ag-nm">'+escHtml(item.p)+'</div>'
    +'<div class="ag-tp">'+escHtml(a.type||'Consulta')+'</div></div>'
    +'<span class="tag '+statusTag+'">'+statusTxt+'</span></div>';
  });
 }
 if(nextAppts.length>0){
  agendaItems += '<div style="margin-top:10px;padding-top:10px;border-top:1px solid var(--n1);font-size:11px;color:var(--n5)">'
   +'Próxima: <strong style="color:var(--n8)">'+escHtml(nextAppts[0].p)+'</strong> em '
   +nextAppts[0].d.toLocaleDateString('pt-BR')+'</div>';
 }

 // Build alerts section
 var alertItems = '';
 try{
  var al = _buildSmartAlerts();
  if(!al||!al.length){
   alertItems = '<div style="text-align:center;padding:24px;color:var(--n5);font-size:12.5px">✅ Nenhum alerta clínico ativo</div>';
  } else {
   al.slice(0,4).forEach(function(a){
    var bg = a.c==='r'?'#fef2f2':a.c==='y'?'#fffbeb':'#eff6ff';
    alertItems += '<div style="display:flex;align-items:flex-start;gap:10px;padding:10px 0;border-bottom:1px solid var(--n1)">'
     +'<div style="width:32px;height:32px;border-radius:8px;background:'+bg+';display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0">'+(a.ic||'⚠️')+'</div>'
     +'<div style="flex:1;min-width:0"><div style="font-size:12px;font-weight:700;color:var(--n8)">'+escHtml(a.p||'')+'</div>'
     +'<div style="font-size:11px;color:var(--n5);margin-top:2px">'+escHtml(a.t||'')+'</div></div>'
     +'<button onclick="openPatById('+a.pid+')" style="font-size:10px;border:1px solid var(--n2);background:#fff;border-radius:6px;padding:3px 8px;cursor:pointer;color:var(--g5);font-weight:700">Ver</button></div>';
   });
  }
 }catch(e){
  alertItems = '<div style="text-align:center;padding:24px;color:var(--n5);font-size:12.5px">✅ Nenhum alerta clínico ativo</div>';
 }

 return kpiRow
  +'<div class="card" style="margin-bottom:14px"><div class="ch"><span class="ct">⚡ Ações Rápidas</span></div><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(110px,1fr));gap:8px">'+[['➕','Nova Consulta',"openM(\'m-consult\')"],['📋','Paciente',"openM(\'m-pat\')"],['💊','Prescrição',"goP(\'presc\',document.getElementById(\'ni-presc\')"],['📊','Evolução',"goP(\'ev\',document.getElementById(\'ni-ev\'))"],['💬','Chat',"goP(\'chat\',document.getElementById(\'ni-chat\'))"],['💰','Financeiro',"goP(\'fin\',document.getElementById(\'ni-fin\'))"]].map(function(a){return'<button class="btn btn-ghost" onclick="'+a[2]+'" style="display:flex;flex-direction:column;align-items:center;gap:4px;padding:10px 6px;font-size:11px;font-weight:600;border-radius:10px;min-height:58px;touch-action:manipulation"><span style="font-size:18px">'+a[0]+'</span>'+a[1]+'</button>';}).join('')+'</div></div>'
  +'<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:14px">'
  +'<div class="card"><div class="ch" style="margin-bottom:12px"><span class="ct">Consultas (8 semanas)</span><span class="cs">'+monthAppts+' este mês</span></div><div class="bchart" id="bchart"></div></div>'
  +'<div class="card" style="padding:18px"><div class="ch" style="margin-bottom:12px"><span class="ct">Agenda de Hoje</span>'
  +'<span style="font-family:var(--jk);font-size:9px;font-weight:700;color:#c4420a;background:#fdd0a8;padding:3px 9px;border-radius:99px">'+todayAppts.length+' consulta'+(todayAppts.length!==1?'s':'')+'</span></div>'
  +agendaItems+'</div>'
  +'</div>'
  +'<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px">'
  +'<div class="card"><div class="ch"><span class="ct">Aderência dos Pacientes</span><button class="btn btn-ghost btn-sm" onclick="goP(\'ev\',document.getElementById(\'ni-ev\'))">Ver todos →</button></div><div id="adh-chart"></div></div>'
  +'<div class="card"><div class="ch"><span class="ct">Pacientes com Alertas</span><button class="btn btn-ghost btn-sm" onclick="goP(\'notif\',document.getElementById(\'ni-notif\'))">Ver alertas →</button></div>'
  +alertItems+'</div>'
  +'</div>';
}
function buildBChart() {
  var now = new Date(), dow = now.getDay();
  var startW = new Date(now); startW.setDate(now.getDate() - (dow === 0 ? 6 : dow - 1));
  var allAppts = []; pats.forEach(function (p) { (p.appointments || []).forEach(function (a) { allAppts.push(a); }); });
  var data = [], labels = [];
  for (var w = 7; w >= 0; w--) {
    var ws = new Date(startW); ws.setDate(ws.getDate() - w * 7);
    var we = new Date(ws); we.setDate(ws.getDate() + 6);
    data.push(allAppts.filter(function (a) { return a.isoDate >= ws.toISOString().slice(0, 10) && a.isoDate <= we.toISOString().slice(0, 10); }).length);
    labels.push('S' + (8 - w));
  }
  var totalAppts = data.reduce(function (s, v) { return s + v; }, 0);
  var el = document.getElementById('bchart'); if (!el) return;
  if (!totalAppts) {
    el.innerHTML = '<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;padding:30px 0;color:var(--n4);font-size:12.5px;gap:8px">'
      + '<svg width="32" height="32" viewBox="0 0 24 24" fill="var(--n3)"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-2 .9-2 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/></svg>'
      + '<span>Nenhuma consulta registrada ainda</span></div>';
    if (el2) { el2.innerHTML = ''; }
    return;
  }
  var data_mx = Math.max.apply(null, data) || 1, labels = ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'];
  if (!el) return;
  el.innerHTML = data.map(function (v, i) {
    var cls = i === 7 ? 'bc-a' : v < 10 ? 'bc-l' : 'bc-n';
    return '<div class="bcc"><div class="bct"><div class="bcb ' + cls + '" style="height:' + Math.round(v / data_mx * 100) + '%" data-v="' + v + ' consultas"></div></div><span class="bcl">' + labels[i] + '</span></div>';
  }).join('');
  // recent pats
  if (!el2) return;
  el2.innerHTML = pats.slice(0, 5).map(function (p) {
    return '<div style="display:flex;align-items:center;gap:10px;padding:9px 8px;border-radius:var(--r);cursor:pointer;transition:background .13s" onmouseover="this.style.background=\'var(--n0)\'" onmouseout="this.style.background=\'transparent\'" onclick="selPat=pats.find(function(x){return x.id===' + p.id + '});goP(\'ev\',document.getElementById(\'ni-ev\'))">'
      + '<div class="pac-av ' + p.av + '" style="width:34px;height:34px;border-radius:50%;font-size:11px">' + p.i + '</div>'
      + '<div style="flex:1;min-width:0"><div style="font-size:13px;font-weight:600;color:var(--n8)">' + p.n + '</div><div style="font-size:10.5px;color:var(--n4);margin-top:1px">' + p.goal + ' · ' + p.last + '</div></div>'
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

// ─── PATIENTS ───
function rPat(){
 return`<div style="display:flex;align-items:center;gap:8px;margin-bottom:14px;flex-wrap:wrap">
  <div class="search-wrap" style="flex:1;min-width:180px"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg><input class="search-inp" id="pat-q" placeholder="Buscar paciente…" oninput="filterPats(this.value)"/></div>
  <select class="sel" style="width:auto" id="pat-gf" onchange="filterPats(document.getElementById('pat-q').value)"><option value="">Todos os objetivos</option><option>Emagrecimento</option><option>Hipertrofia</option><option>Manutenção</option><option>Saúde geral</option><option>Condição clínica</option></select>
  <select class="sel" style="width:auto" id="pat-sf" onchange="filterPats(document.getElementById('pat-q').value)"><option value="">Todos os status</option><option value="tg">Em dia</option><option value="ty">Atenção</option><option value="tr">Alerta</option></select>
 </div>
 <div class="pat-grid" id="pat-grid">${buildPatGrid(pats)}</div>`;
}
function buildPatGrid(list){
 return list.map(function(p){
  var loss = (p.wStart||p.w||0) - (p.w||0);
  var pct = p.prog||0;
  var pcls = pct>=70?'pf-g':pct>=40?'pf-y':'pf-r';
  var pid = p.id;
  return '<div class="pat-card" style="position:relative">'
  // Header — click opens detail
  +'<div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;cursor:pointer" onclick="openPatDetail('+pid+')">'
  +'<div class="pac-av '+(p.av||'a1')+'">'+escHtml(p.i||p.n[0])+'</div>'
  +'<div style="flex:1;min-width:0">'
  +'<div style="font-size:13.5px;font-weight:700;color:var(--n9)">'+escHtml(p.n)+'</div>'
  +'<div style="font-size:10.5px;color:var(--n4);margin-top:2px">'+(p.age||'—')+' anos · '+escHtml(p.goal||'—')+'</div></div>'
  +'<span class="tag '+(p.st||'tg')+'">'+escHtml(p.stxt||'Em dia')+'</span></div>'
  // KPIs row
  +'<div class="pc-kpis" style="cursor:pointer" onclick="openPatDetail('+pid+')">'
  +'<div class="pc-kpi"><strong>'+(p.w||'—')+'</strong><span>kg</span></div>'
  +'<div class="pc-kpi"><strong>'+(p.bmi||'—')+'</strong><span>IMC</span></div>'
  +'<div class="pc-kpi"><strong>'+(loss>=0?'−':'+')+(Math.abs(loss).toFixed(1))+'</strong><span>kg total</span></div></div>'
  // Adherence
  +'<div style="margin-top:8px;cursor:pointer" onclick="openPatDetail('+pid+')">'
  +'<div style="display:flex;justify-content:space-between;font-size:10px;color:var(--n4);margin-bottom:3px"><span>Adesão</span><span style="font-weight:700;color:var(--n7)">'+pct+'%</span></div>'
  +'<div class="prog-track"><div class="prog-fill '+pcls+'" style="width:'+pct+'%"></div></div></div>'
  +'<div style="margin-top:8px;font-size:10px;color:var(--n4)">Última consulta: '+escHtml(p.last||'—')+'</div>'
  +(p.alerg?'<div style="margin-top:5px;font-size:10px;color:var(--red);font-weight:600">⚠ '+escHtml(p.alerg)+'</div>':'')
  // Action buttons
  +'<div style="display:flex;gap:6px;margin-top:12px;padding-top:10px;border-top:1px solid var(--n2)">'
  +'<button class="btn btn-ghost btn-sm" style="flex:1;font-size:11px" onclick="event.stopPropagation();openPatDetail('+pid+')">'
  +'<svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8a3 3 0 100 6 3 3 0 000-6z"/></svg> Ver</button>'
  +'<button class="btn btn-s btn-sm" style="flex:1;font-size:11px" onclick="event.stopPropagation();editPat('+pid+')">'
  +'<svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 000-1.41l-2.34-2.34a1 1 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg> Editar</button>'
  +'<button class="btn btn-danger btn-sm" style="font-size:11px;padding:5px 10px" onclick="event.stopPropagation();deletePat('+pid+')" title="Remover">'
  +'<svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg></button>'
  +'</div>'
  +'</div>';
 }).join('');
}
function filterPats(q){
 var gf=document.getElementById('pat-gf').value;var sf=document.getElementById('pat-sf').value;
 var r=pats.filter(function(p){return(p.n.toLowerCase().includes(q.toLowerCase()))&&(!gf||p.goal===gf)&&(!sf||p.st===sf)});
 document.getElementById('pat-grid').innerHTML=buildPatGrid(r);
}

function openPatSupl(id) {
  selPat = pats.find(function (x) { return x.id == id; });
  closeM('m-pd');
  // Navigate directly to supl page — ni-supl is always in the sidebar DOM
  setTimeout(function () {
    var suplBtn = document.getElementById('ni-supl');
    goP('supl', suplBtn || null);
  }, 80);
}
function openPatDetail(id){
 var p=pats.find(function(x){return x.id==id});if(!p)return;
 selPat=p;
 var alerts=[];
 if(p.exams.vitd&&p.exams.vitd<30)alerts.push({t:'Vitamina D baixa ('+p.exams.vitd+' ng/mL — ref: >30)',c:'r'});
 if(p.exams.gli&&p.exams.gli>100)alerts.push({t:'Glicemia elevada ('+p.exams.gli+' mg/dL)',c:'y'});
 if(p.exams.col&&p.exams.col>200)alerts.push({t:'Colesterol total alto ('+p.exams.col+' mg/dL)',c:'y'});
 if(p.exams.hem&&p.exams.hem<12)alerts.push({t:'Hemoglobina baixa — risco de anemia ('+p.exams.hem+' g/dL)',c:'r'});
 if(p.exams.fer&&p.exams.fer<20)alerts.push({t:'Ferritina baixa — risco de anemia ('+p.exams.fer+' ng/mL)',c:'r'});
 var hist=p.historico||[];
 var modal=document.createElement('div');modal.className='ov';modal.id='m-pd';
 modal.innerHTML='<div class="modal modal-xl"><div class="mh"><div><div class="mt">'+p.n+'</div><div style="font-size:12px;color:var(--n4);margin-top:3px">'+p.age+' anos · '+(p.sex==='F'?'Feminino':'Masculino')+' · '+p.goal+' · Última: '+p.last+'</div></div><div style="display:flex;gap:7px"><button class="btn btn-s btn-sm" onclick="selPat=pats.find(function(x){return x.id==='+p.id+'});closeM(\'m-pd\');goP(\'presc\',document.getElementById(\'ni-presc\'))">Prescrever</button><button class="btn btn-p btn-sm" onclick="closeM(\'m-pd\');selPat=pats.find(function(x){return x.id==='+p.id+'});goP(\'ev\',document.getElementById(\'ni-ev\'))">Acompanhamento</button><button class="mc" onclick="closeM(\'m-pd\')">×</button></div></div>'
 +(alerts.length?'<div style="margin-bottom:12px">'+alerts.map(function(a){return'<div class="alert alert-'+a.c+'"><span>⚠ '+a.t+'</span></div>';}).join('')+'</div>':'')
 +'<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:14px">'
 +'<div><div class="ct" style="margin-bottom:10px;font-family:var(--jk)">Dados Clínicos</div>'
 +'<div style="background:var(--n0);border-radius:var(--r2);padding:14px;display:grid;grid-template-columns:1fr 1fr;gap:6px">'
 +[['Peso',p.w+' kg'],['Altura',p.h+' cm'],['IMC',p.bmi],['% Gordura',p.fat+'%'],['Cintura',p.historico[0]?p.historico[0].cintura+' cm':'—'],['Objetivo',p.goal],['Condição',p.cond||'Saudável'],['Alergias',p.alerg||'Nenhuma']].map(function(r){return'<div><div style="font-size:9.5px;color:var(--n4);text-transform:uppercase;letter-spacing:.05em;font-family:var(--jk);font-weight:700">'+r[0]+'</div><div style="font-size:12.5px;font-weight:600;color:var(--n9);margin-top:1px">'+r[1]+'</div></div>';}).join('')+'</div>'
 +'<div class="ct" style="margin:12px 0 8px;font-family:var(--jk)">Exames Laboratoriais</div>'
 +'<div style="background:var(--n0);border-radius:var(--r2);padding:14px;display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px">'
 +[['Glicemia',p.exams.gli,'mg/dL',p.exams.gli>100?'y':'g'],['Colesterol',p.exams.col,'mg/dL',p.exams.col>200?'y':'g'],['Vit D',p.exams.vitd,'ng/mL',p.exams.vitd<30?'r':'g'],['Hemoglobina',p.exams.hem,'g/dL',p.exams.hem<12?'r':'g'],['Ferritina',p.exams.fer,'ng/mL',p.exams.fer<20?'r':'g'],['TSH',p.exams.tsh,'µUI/mL','g']].map(function(r){var color=r[3]==='r'?'#dc2626':r[3]==='y'?'#d97706':'#16a34a';return'<div><div style="font-size:9.5px;color:var(--n4);text-transform:uppercase;letter-spacing:.05em;font-family:var(--jk);font-weight:700">'+r[0]+'</div><div style="font-size:13px;font-weight:800;color:'+color+';margin-top:1px">'+r[1]+'</div><div style="font-size:9px;color:var(--n4)">'+r[2]+'</div></div>';}).join('')+'</div></div>'
 +'<div><div class="ct" style="margin-bottom:10px;font-family:var(--jk)">Histórico de Medidas</div>'
 +'<div style="border-radius:var(--r2);border:1px solid var(--n2);overflow:hidden"><table class="tbl"><thead><tr><th>Data</th><th>Peso</th><th>IMC</th><th>Cintura</th><th>% Gord</th></tr></thead><tbody>'
 +hist.map(function(h){return'<tr><td>'+h.data+'</td><td><strong>'+h.peso+' kg</strong></td><td>'+h.imc+'</td><td>'+h.cintura+' cm</td><td>'+h.fat+'%</td></tr>';}).join('')+'</tbody></table></div>'
 +'<div style="margin-top:10px"><button class="btn btn-s btn-sm" onclick="closeM(\'m-pd\');openM(\'m-meas\')">+ Adicionar Medidas</button></div></div></div></div>';
 document.body.appendChild(modal);setTimeout(function(){modal.classList.add('open')},10);
 modal.addEventListener('click',function(e){if(e.target===modal)closeM('m-pd')});
}

// ─── EDITAR PACIENTE ───
function editPat(id){
 var p=pats.find(function(x){return x.id==id});if(!p)return;

 // Fechar modal de detalhe se estiver aberto
 var pd=document.getElementById('m-pd');if(pd)closeM('m-pd');

 // Preencher campos do modal de cadastro com dados do paciente
 setTimeout(function(){
  var g=function(elId,val){var el=document.getElementById(elId);if(el)el.value=val||'';};

  // Converter data de nascimento (dd/mm/yyyy -> yyyy-mm-dd)
  var nascStr='';
  if(p.age){
   var y=new Date().getFullYear()-p.age;
   nascStr=y+'-01-01';
  }

  g('np-nome',p.n);
  g('np-nasc',nascStr);
  g('np-sex',p.sex||'F');
  g('np-peso',p.w);
  g('np-alt',p.h);
  g('np-fat',p.fat);
  g('np-cin',p.historico&&p.historico[0]?p.historico[0].cintura:'');
  g('np-obj',p.goal);
  g('np-cond',p.cond);
  g('np-alerg',p.alerg);
  g('np-agua',p.agua);
  g('np-gli',p.exams?p.exams.gli:'');
  g('np-col',p.exams?p.exams.col:'');
  g('np-vitd',p.exams?p.exams.vitd:'');
  g('np-hem',p.exams?p.exams.hem:'');
  g('np-fer',p.exams?p.exams.fer:'');
  g('np-tgo',p.exams?p.exams.tgo:'');
  g('np-tgp',p.exams?p.exams.tgp:'');
  g('np-tsh',p.exams?p.exams.tsh:'');

  // Trocar título e botão do modal para modo edição
  var mt=document.querySelector('#m-pat .mt');
  if(mt)mt.textContent='Editar Paciente — '+p.n;

  var btn=document.querySelector('#m-pat .mf .btn-p');
  if(btn){
   btn.textContent='Salvar Alterações';
   btn.onclick=function(){saveEditPat(id);};
  }

  openM('m-pat');
 },150);
}

function saveEditPat(id){
 var p=pats.find(function(x){return x.id==id});if(!p)return;

 var g=function(elId){return(document.getElementById(elId)||{}).value||'';};
 var gn=function(elId){return parseFloat(g(elId))||0;};

 var nome=g('np-nome');
 if(!nome.trim()){showToast('Preencha o nome do paciente','w');return;}

 var peso=gn('np-peso')||p.w;
 var alt=gn('np-alt')||p.h;
 var bmi=alt>0?+(peso/((alt/100)*(alt/100))).toFixed(1):p.bmi;

 var nasc=g('np-nasc');
 var age=p.age;
 if(nasc){var d=new Date(nasc);var now=new Date();age=now.getFullYear()-d.getFullYear();if(now<new Date(now.getFullYear(),d.getMonth(),d.getDate()))age--;}

 // Atualizar dados
 p.n=nome.trim();
 p.age=age||p.age;
 p.sex=g('np-sex')||p.sex;
 p.w=peso;
 p.h=alt;
 p.bmi=bmi;
 p.fat=gn('np-fat')||p.fat;
 p.goal=g('np-obj')||p.goal;
 p.cond=g('np-cond');
 p.alerg=g('np-alerg');
 p.agua=gn('np-agua')||p.agua;
 if(!p.exams)p.exams={};
 if(gn('np-gli'))p.exams.gli=gn('np-gli');
 if(gn('np-col'))p.exams.col=gn('np-col');
 if(gn('np-vitd'))p.exams.vitd=gn('np-vitd');
 if(gn('np-hem'))p.exams.hem=gn('np-hem');
 if(gn('np-fer'))p.exams.fer=gn('np-fer');
 if(gn('np-tgo'))p.exams.tgo=gn('np-tgo');
 if(gn('np-tgp'))p.exams.tgp=gn('np-tgp');
 if(gn('np-tsh'))p.exams.tsh=gn('np-tsh');

 // Restaurar modal ao modo cadastro
 var mt=document.querySelector('#m-pat .mt');
 if(mt)mt.textContent='Cadastrar Paciente — Anamnese Completa';
 var btn=document.querySelector('#m-pat .mf .btn-p');
 if(btn){btn.textContent='Cadastrar Paciente';btn.onclick=savePat;}

 DB.save();
 closeM('m-pat');
 showToast('Dados de "'+p.n+'" atualizados!','s');
 goP('pat',document.getElementById('ni-pat'));
}

// ─── REMOVER PACIENTE ───
function deletePat(id){
 var p=pats.find(function(x){return x.id==id});
 var nome=p?p.n:'paciente';
 // Modal de confirmação
 var existing=document.getElementById('m-del-pat');
 if(existing)existing.parentNode.removeChild(existing);

 var modal=document.createElement('div');
 modal.className='ov';modal.id='m-del-pat';
 modal.innerHTML=
  '<div class="modal" style="max-width:400px;text-align:center">'
  +'<div style="width:56px;height:56px;border-radius:16px;background:var(--red-l);display:flex;align-items:center;justify-content:center;margin:0 auto 16px">'
  +'<svg width="24" height="24" viewBox="0 0 24 24" fill="#dc2626"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg></div>'
  +'<div style="font-family:var(--jk);font-size:16px;font-weight:800;color:var(--n9);margin-bottom:8px">Remover paciente?</div>'
  +'<div style="font-size:13px;color:var(--n5);line-height:1.7;margin-bottom:22px">Tem certeza que deseja remover <strong style="color:var(--n9)">'+nome+'</strong>?<br>Esta ação não pode ser desfeita.</div>'
  +'<div style="display:flex;gap:8px;justify-content:center">'
  +'<button class="btn btn-ghost btn-lg" style="min-width:120px" onclick="closeM(\'m-del-pat\')">Cancelar</button>'
  +'<button class="btn btn-danger btn-lg" style="min-width:120px" onclick="confirmDeletePat(\'+id+\')">Sim, remover</button>'
  +'</div></div>';
 document.body.appendChild(modal);
 setTimeout(function(){modal.classList.add('open');},10);
 modal.addEventListener('click',function(e){if(e.target===modal)closeM('m-del-pat');});
}

function confirmDeletePat(id) {
  var p = pats.find(function (x) { return x.id == id });
  var nome = p ? p.n : 'paciente';
  pats = pats.filter(function (x) { return x.id != id });
  if (selPat && selPat.id === id) selPat = pats[0] || null;
  DB.save();
  closeM('m-del-pat');
  updatePatBadge(); showToast('"' + nome + '" removido da lista.', 'i');
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
  <div class="card">
   <div class="ch"><span class="ct">Busca de Alimentos</span></div>
   <select class="sel" id="food-cat" style="margin-bottom:8px" onchange="searchFood()"><option value="">Todas as categorias</option>${[...new Set(FOOD_DB.map(function (f) { return f.cat }))].map(function (c) { return '<option>' + c + '</option>' }).join('')}</select>
   <div class="search-wrap" style="margin-bottom:8px"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg><input class="search-inp" id="food-q" placeholder="Buscar alimento…" oninput="searchFood()"/></div>
   <div style="font-size:10px;color:var(--n4);margin-bottom:5px" id="food-count"></div>
   <div id="food-results" style="max-height:180px;overflow-y:auto;-webkit-overflow-scrolling:touch"></div>
   <div class="preview-box" id="food-preview"></div>
   <div style="display:flex;flex-direction:column;gap:8px;margin-top:10px">
    <div style="display:flex;gap:7px;align-items:center">
     <select class="sel" id="add-meal-sel" style="flex:1;min-height:40px;font-size:13px">${meals.map(function (m, i) { return '<option value="' + i + '">' + m.em + ' ' + m.name + '</option>' }).join('')}</select>
     <input class="inp" id="add-qty" type="number" value="100" inputmode="decimal" style="width:72px;min-height:40px;font-size:13px;text-align:center"/>
     <span style="font-size:11px;color:var(--n4);flex-shrink:0">g</span>
    </div>
    <div style="display:flex;gap:6px">
     <button class="btn btn-p" style="flex:1;padding:11px 8px;font-size:13px;font-weight:700;min-height:44px;touch-action:manipulation" onclick="addFood()">+ Adicionar à Refeição</button>
     <button class="btn btn-ghost btn-sm" style="min-height:44px;touch-action:manipulation" onclick="showSubs()">⇄ Subst.</button>
    </div>
   </div>
   <details style="margin-top:10px">
    <summary style="font-size:12px;font-weight:600;color:var(--g5);cursor:pointer;font-family:var(--jk)">+ Alimento personalizado</summary>
    <div style="padding:10px 0">
     <div class="row2" style="margin-bottom:6px"><input class="inp" id="cf-n" placeholder="Nome"/><input class="inp" id="cf-em" placeholder="Emoji" style="width:60px"/></div>
     <div class="row4"><input class="inp" id="cf-k" type="number" placeholder="kcal"/><input class="inp" id="cf-p" type="number" step="0.1" placeholder="Prot g"/><input class="inp" id="cf-c" type="number" step="0.1" placeholder="Carb g"/><input class="inp" id="cf-g" type="number" step="0.1" placeholder="Gord g"/></div>
     <button class="btn btn-p btn-sm" style="margin-top:6px" onclick="addCustomFood()">Adicionar alimento personalizado</button>
    </div>
   </details>
  </div>
 </div>
 <div>
  <div id="nutrient-chart-panel" style="margin-bottom:0"></div>
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
  return plans.map(function (pl, i) { return '<div class="plan-ver' + (i === 0 ? ' active' : '') + '"><div><div class="pv-date">' + pl.date + '</div><div class="pv-meta">' + pl.kcal + ' kcal · ' + pl.meals + ' refeições</div></div><span class="pv-badge" style="background:#dcfce7;color:#15803d">' + pl.name + '</span><button class="btn btn-ghost btn-sm" onclick="loadPlan(' + i + ')">Carregar</button></div>'; }).join('');
}

function bindPrescEvents() {
  recalc(); searchFood(); renderMeals(); renderMacUI();
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
  sum.innerHTML = '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:6px;text-align:center;margin-bottom:6px">'
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

function searchFood(){
 var q=(document.getElementById('food-q')||{}).value||'';
 var cat=(document.getElementById('food-cat')||{}).value||'';
 var res=FOOD_DB.filter(function(f){return f.n.toLowerCase().includes(q.toLowerCase())&&(!cat||f.cat===cat);}).slice(0,30);
 var cnt=document.getElementById('food-count');
 if(cnt)cnt.textContent=res.length+' de '+FOOD_DB.length+' alimentos';
 var el=document.getElementById('food-results');if(!el)return;
 if(!res.length){
  el.innerHTML='<div style="padding:16px;text-align:center;color:var(--n4);font-size:12px">Nenhum alimento encontrado</div>';
  return;
 }
 el.innerHTML=res.map(function(f){
  return '<div class="fr" id="fr-'+f.id+'" onclick="selectFood('+f.id+')" style="padding:10px 12px;min-height:48px;touch-action:manipulation;cursor:pointer">'
   +'<span style="font-size:16px;flex-shrink:0">'+f.e+'</span>'
   +'<div style="flex:1;min-width:0;margin:0 8px">'
   +'<div style="font-size:13px;font-weight:600;color:var(--n8);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">'+f.n+'</div>'
   +'<div style="font-size:11px;color:var(--n4)">P:'+f.p+'g · C:'+f.c+'g · G:'+f.g+'g</div>'
   +'</div>'
   +'<div style="text-align:right;flex-shrink:0">'
   +'<div style="font-size:12px;font-weight:700;color:var(--g5)">'+f.k+'</div>'
   +'<div style="font-size:10px;color:var(--n4)">kcal/100g</div>'
   +'</div></div>';
 }).join('');
}
var _selFood = null;
function selectFood(id){
 _selFood=FOOD_DB.find(function(f){return f.id===id;});
 document.querySelectorAll('.fr').forEach(function(el){el.classList.remove('sel');});
 var el=document.getElementById('fr-'+id);
 if(el) el.classList.add('sel');
 var pv=document.getElementById('food-preview');
 if(pv&&_selFood){
  pv.style.display='block';
  pv.innerHTML='<div style="display:flex;align-items:center;gap:10px;padding:10px 12px;background:var(--g0);border:1.5px solid var(--g3);border-radius:10px;margin-top:8px">'
   +'<div style="flex:1;min-width:0">'
   +'<div style="font-weight:700;font-size:13px;color:var(--n9);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+_selFood.e+' '+escHtml(_selFood.n)+'</div>'
   +'<div style="font-size:11px;color:var(--n5);margin-top:2px">'+_selFood.k+' kcal · P:'+_selFood.p+'g · C:'+_selFood.c+'g · G:'+_selFood.g+'g</div>'
   +'</div>'
   +'<button class="btn btn-p" style="flex-shrink:0;padding:10px 14px;font-size:13px;font-weight:700;min-height:44px;touch-action:manipulation" onclick="addFood()">+ Adicionar</button>'
   +'</div>';
  // Scroll preview into view on mobile
  setTimeout(function(){pv.scrollIntoView({block:'nearest',behavior:'smooth'});},80);
 }
}
function addFood(){
 if(!_selFood){showToast('Selecione um alimento primeiro','w');return;}
 var qty=parseFloat(document.getElementById('add-qty').value)||100;
 var mi=parseInt(document.getElementById('add-meal-sel').value)||0;
 var factor=qty/100;
 meals[mi].items.push({
  food:_selFood, qty:qty,
  k:Math.round(_selFood.k*factor),
  p:+(_selFood.p*factor).toFixed(1),
  c:+(_selFood.c*factor).toFixed(1),
  g:+(_selFood.g*factor).toFixed(1)
 });
 // Show nutrient panel on first add
 var panel=document.getElementById('nutrient-chart-panel');
 if(panel){panel.style.display='block'; panel.style.marginBottom='10px';}
 renderMeals(); updateTotals();
 showToast(_selFood.e+' '+_selFood.n+' adicionado!','s');
 // Reset qty to 100 for next add
 var qtyEl=document.getElementById('add-qty');
 if(qtyEl)qtyEl.value='100';
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
      + '<div class="meal-hd"><div class="meal-em">' + m.em + '</div><input class="meal-nm-edit" value="' + m.name + '" onchange="meals[' + mi + '].name=this.value"/>'
      + (m.items.length ? '<span class="meal-kcal">' + m.items.reduce(function (s, it) { return s + it.k }, 0) + ' kcal</span>' : '')
      + '<button class="btn btn-ghost btn-sm" onclick="addMealRow(' + mi + ')">+ Alimento</button>'
      + '<button class="btn btn-ghost btn-sm" style="color:var(--red)" onclick="clearMeal(' + mi + ')">🗑</button></div>'
      + (m.items.length ? m.items.map(function (it, ii) {
        return '<div class="fi"><span class="fi-em">' + it.food.e + '</span><span class="fi-nm">' + it.food.n + '</span>'
          + '<input class="fi-qty-inp" type="number" value="' + it.qty + '" onchange="updFoodQty(' + mi + ',' + ii + ',this.value)"/> g'
          + '<span class="fi-kcal">' + it.k + ' kcal</span>'
          + '<button class="fi-del" onclick="removeFoodItem(' + mi + ',' + ii + ')">×</button></div>';
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

function updateTotals(){
 var tk=0,tp=0,tc=0,tf=0,tfb=0,tna=0;
 meals.forEach(function(m){
  m.items.forEach(function(it){
   tk+=it.k; tp+=it.p; tc+=it.c; tf+=it.g;
   if(it.food){tfb+=(it.food.fb||0)*(it.qty/100); tna+=(it.food.na||0)*(it.qty/100);}
  });
 });
 // Top bar
 var el=document.getElementById('tb-kcal');
 if(el)el.textContent=tk.toFixed(0)+' kcal';
 var lbl=document.getElementById('tb-goal-lbl');
 if(lbl){
  var diff=tk-prescGoal;
  lbl.textContent=prescGoal>0?(diff>=0?'+'+diff.toFixed(0):diff.toFixed(0))+' kcal vs meta de '+prescGoal.toLocaleString('pt-BR'):'Total do dia';
 }
 var bars=document.getElementById('tb-macros-bars');
 if(bars)bars.innerHTML=[['Proteínas',tp,'#86efac',mP||100],['Carboidratos',tc,'#fcd34d',mC||200],['Gorduras',tf,'#fca5a5',mF||70]].map(function(r){
  var pct=Math.min(100,r[1]/r[3]*100);
  return '<div class="tb-bar-row"><span class="tb-bl">'+r[0]+'</span><div class="tb-bt"><div class="tb-bf" style="width:'+pct+'%;background:'+r[2]+'"></div></div><span class="tb-bv">'+r[1].toFixed(1)+'g / '+r[3]+'g</span></div>';
 }).join('');
 // Nutrient chart panel
 _renderNutrientChart(tk,tp,tc,tf,tfb,tna);
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
  var t = templates.find(function (x) { return x.id == id }); if (!t) return;
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
  var p = selPat || pats[0];
  var today = new Date().getDay();

  // Usar plano do paciente se disponível, senão o WEEK padrão
  var weekData = WEEK;
  var fromPatient = false;
  if (p && p.plans && p.plans.length > 0 && p.plans[0].mealData) {
    // Distribuir o plano prescrito pelos 7 dias da semana
    var basePlan = p.plans[0].mealData;
    weekData = WEEK.map(function (day, di) {
      var varFac = 0.9 + ((di * 7) % 10) * 0.02;
      var dayMeals = basePlan.map(function (meal) {
        var items = meal.items.map(function (it) {
          var e = it.e, n = it.n, k = it.k;
          if (!n && it.fid) { var f = FOOD_DB.find(function (x) { return x.id === it.fid }); if (f) { e = f.e; n = f.n; k = Math.round(f.k * (it.qty || 100) / 100); } }
          if (!n) return null;
          return { e: e || '🍽️', n: n, k: Math.round((k || 0) * varFac) };
        }).filter(Boolean);
        return { n: meal.name || meal.n, items: items };
      });
      return { n: day.n, meals: dayMeals };
    });
    fromPatient = true;
  }

  var html = '';
  if (p && fromPatient) {
    html += '<div class="alert alert-g" style="margin-bottom:12px"><span>📋 Plano semanal de <strong>' + p.n + '</strong> baseado na última prescrição salva</span></div>';
  } else if (p) {
    html += '<div class="alert alert-y" style="margin-bottom:12px"><span>⚠ <strong>' + p.n + '</strong> não possui plano prescrito. Exibindo plano padrão. <button class="btn btn-ghost btn-sm" onclick="goP(\'presc\',document.getElementById(\'ni-presc\'))">Prescrever agora →</button></span></div>';
  }

  // Selector de paciente
  html += '<div style="display:flex;align-items:center;gap:10px;margin-bottom:14px">'
    + '<select class="sel" style="width:auto" onchange="changeWeekPat(this.value)">'
    + pats.map(function (pp) { return '<option value="' + pp.id + '"' + (p && pp.id === p.id ? ' selected' : '') + '>' + pp.n + '</option>'; }).join('') + '</select>'
    + '<span style="font-size:11.5px;color:var(--n4)">' + weekData.length + ' dias planejados</span>'
    + '<button class="btn btn-s btn-sm" style="margin-left:auto" onclick="goP(\'presc\',document.getElementById(\'ni-presc\'))">✏️ Editar plano</button>'
    + '</div>';

  html += '<div class="week-scroll"><div class="week-g">';
  for (var d = 0; d < 7; d++) {
    var day = weekData[d]; var isT = d === today;
    var dt = day.meals.reduce(function (s, m) { return s + m.items.reduce(function (ss, it) { return ss + it.k; }, 0); }, 0);
    html += '<div class="day-col"><div class="day-hd' + (isT ? ' today' : '') + '"><div class="day-dn">' + day.n.slice(0, 3) + '</div><div class="day-dd">' + (isT ? 'Hoje' : dt + ' kcal') + '</div></div>';
    day.meals.forEach(function (m) {
      html += '<div class="day-mb"><div class="day-mn">' + m.n + '</div>';
      m.items.forEach(function (it) { html += '<div class="day-fr"><span>' + it.e + ' ' + it.n + '</span><span>' + it.k + '</span></div>'; });
      html += '</div>';
    });
    html += '<div class="day-tot">' + dt + ' kcal</div></div>';
  }
  html += '</div>';

  var avg = Math.round(weekData.reduce(function (s, d) { return s + d.meals.reduce(function (s2, m) { return s2 + m.items.reduce(function (s3, it) { return s3 + it.k; }, 0); }, 0); }, 0) / 7);

  html += '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px">'
    + '<div class="card" style="text-align:center"><div style="font-family:var(--in);font-size:22px;font-weight:800;color:var(--g5)">' + (avg * 7).toLocaleString('pt-BR') + '</div><div style="font-size:11px;color:var(--n4);margin-top:3px">kcal na semana</div></div>'
    + '<div class="card" style="text-align:center"><div style="font-family:var(--in);font-size:22px;font-weight:800;color:var(--n9)">' + avg + '</div><div style="font-size:11px;color:var(--n4);margin-top:3px">média diária</div></div>'
    + '<div class="card" style="text-align:center"><div style="font-family:var(--in);font-size:22px;font-weight:800;color:var(--g5)">7</div><div style="font-size:11px;color:var(--n4);margin-top:3px">dias planejados</div></div>'
    + '<div class="card" style="text-align:center"><div style="font-family:var(--in);font-size:22px;font-weight:800;color:var(--n9)">' + (p && fromPatient ? p.plans[0].meals : 4) + '</div><div style="font-size:11px;color:var(--n4);margin-top:3px">refeições/dia</div></div></div>'
    + '<div class="card" style="margin-top:12px;background:var(--y0);border-color:var(--y3)"><div class="ch"><span class="ct" style="color:#78350f">💡 Orientações da Semana' + (p ? ' — ' + p.n : '') + '</span></div>'
    + '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;font-size:12.5px;color:#92400e;line-height:2">'
    + ['Beba pelo menos 2L de água por dia', 'Mastigue devagar — 20× por mordida', 'Evite telas durante as refeições', 'Prefira temperos naturais ao sal', 'Inclua proteína em todas as refeições', 'Evite alimentos ultraprocessados', 'Durma 7–8 horas por noite', 'Pratique atividade física regularmente'].map(function (o) { return '<div>• ' + o + '</div>'; }).join('') + '</div></div>';
  return html;
}
// ─── EVOLUTION ───
function rEv() {
  var p = selPat || pats[0];
  if (!p) { return '<div class="alert alert-b"><span>Selecione um paciente para ver o acompanhamento.</span></div>'; }
  var hist = [...(p.historico||[])].reverse();
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
    + pats.map(function (pp) { return '<option value="' + pp.id + '"' + (pp.id === p.id ? ' selected' : '') + '>' + pp.n + '</option>'; }).join('') + '</select>'
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

  // Calcular micronutrientes a partir do plano mais recente do paciente
  // Cada food no FOOD_DB tem micro estimados: fe, ca, vc, va, zn, b12, fb
  // Se não tiver plano salvo, usa estimativas baseadas no peso do paciente
  var nm = { fe: 0, ca: 0, vc: 0, va: 0, zn: 0, b12: 0, fb: 0 };
  var hasPlan = false;

  // Tentar calcular do plano atual ativo (meals global se for o paciente selecionado)
  var planSrc = null;
  if (p.plans && p.plans.length > 0) { planSrc = p.plans[0].mealData; hasPlan = true; }

  if (planSrc) {
    planSrc.forEach(function (meal) {
      (meal.items || []).forEach(function (item) {
        var f = FOOD_DB.find(function (x) { return x.id === item.fid });
        if (f && f.micro) {
          var fac = (item.qty || 100) / 100;
          Object.keys(nm).forEach(function (k) { if (f.micro[k]) nm[k] += f.micro[k] * fac; });
        } else {
          // Estimativa por kcal quando não há dados de micro
          var kcalFac = (item.qty || 100) / 100 * (f ? f.k : 100) / 2000;
          nm.fe += 14 * kcalFac * 0.6; nm.ca += 1000 * kcalFac * 0.5; nm.vc += 75 * kcalFac * 0.7;
          nm.va += 700 * kcalFac * 0.6; nm.zn += 8 * kcalFac * 0.6; nm.b12 += 2.4 * kcalFac * 0.5; nm.fb += 25 * kcalFac * 0.65;
        }
      });
    });
  } else {
    // Sem plano: estimar baseado no objetivo e exames do paciente
    var base = {
      'Emagrecimento': { fe: 10.5, ca: 720, vc: 62, va: 520, zn: 5.8, b12: 2.1, fb: 18 },
      'Hipertrofia': { fe: 14.2, ca: 950, vc: 78, va: 630, zn: 9.5, b12: 3.2, fb: 22 },
      'Manutenção': { fe: 12.0, ca: 830, vc: 68, va: 580, zn: 7.2, b12: 2.6, fb: 20 },
      'Saúde geral': { fe: 11.8, ca: 800, vc: 72, va: 560, zn: 6.8, b12: 2.4, fb: 21 }
    }[p.goal] || { fe: 11.0, ca: 780, vc: 65, va: 540, zn: 6.5, b12: 2.3, fb: 19 };
    Object.assign(nm, base);
  }

  var alerts = Object.keys(nm).filter(function (k) { return RDA[k] && nm[k] / RDA[k].ref < 0.7 });
  var excess = Object.keys(nm).filter(function (k) { return RDA[k] && nm[k] / RDA[k].ref > 1.5 });

  // Montar sugestões de alimentos para os nutrientes deficientes
  var foodSugg = {
    fe: ['Fígado bovino', 'Feijão preto e lentilha', 'PTS (proteína de soja)', 'Espinafre refogado', 'Sardinha enlatada', 'Castanha-do-pará'],
    ca: ['Leite e iogurte integral', 'Queijo mussarela e ricota', 'Sardinha com espinha', 'Tofu firme', 'Couve-manteiga', 'Brócolis cozido'],
    vc: ['Acerola e goiaba', 'Pimentão vermelho', 'Laranja e limão', 'Morango fresco', 'Kiwi', 'Brócolis cru'],
    va: ['Fígado bovino', 'Cenoura crua', 'Batata-doce', 'Abóbora', 'Manga', 'Espinafre'],
    zn: ['Ostras e frutos do mar', 'Carne bovina', 'Sementes de abóbora', 'Castanha-de-caju', 'Feijão e lentilha', 'Nozes'],
    b12: ['Fígado bovino', 'Salmão e atum', 'Carne bovina', 'Ovo inteiro', 'Leite e derivados', 'Sardinha'],
    fb: ['Aveia em flocos', 'Linhaça e chia', 'Feijão e lentilha', 'Maçã com casca', 'Brócolis', 'Pão integral']
  };

  var defKeys = alerts.length ? alerts : ['fe', 'ca'];
  var suggHtml = defKeys.slice(0, 2).map(function (k) {
    return '<div class="card"><div class="ch"><span class="ct">' + RDA[k].ico + ' Fontes de ' + RDA[k].n + '</span>'
      + (nm[k] / RDA[k].ref < 0.7 ? '<span class="tag tr" style="font-size:9px">Deficiente</span>' : '')
      + '</div><div style="font-size:12.5px;color:var(--n7);line-height:2">'
      + (foodSugg[k] || []).map(function (f) { return '<div>• ' + f + '</div>'; }).join('') + '</div></div>';
  }).join('');

  return (hasPlan
    ? '<div class="alert alert-b" style="margin-bottom:10px"><span>📊 Calculado com base no último plano prescrito de <strong>' + p.n + '</strong></span></div>'
    : '<div class="alert alert-y" style="margin-bottom:10px"><span>⚠ Paciente sem plano prescrito — valores estimados pelo objetivo clínico. Prescreva um plano para cálculo preciso.</span></div>')
    + (alerts.length ? '<div class="alert alert-r"><span>⚠ <strong>Deficiências:</strong> ' + alerts.map(function (k) { return RDA[k].n; }).join(', ') + ' — Abaixo de 70% da IDR</span></div>' : '')
    + (excess.length ? '<div class="alert alert-y"><span>💡 <strong>Acima do ideal:</strong> ' + excess.map(function (k) { return RDA[k].n; }).join(', ') + ' — revisar se necessário</span></div>' : '')
    + (!alerts.length && !excess.length ? '<div class="alert alert-g"><span>✓ Todos os micronutrientes dentro da faixa recomendada para o plano atual.</span></div>' : '')
    + '<div class="micro-g">'
    + Object.entries(RDA).map(function (e) {
      var k = e[0], r = e[1]; var v = nm[k] || 0;
      var pct = Math.min(100, v / r.ref * 100);
      var color = pct >= 90 ? '#22c55e' : pct >= 60 ? '#f59e0b' : '#ef4444';
      var status = pct >= 90 ? 'Adequado' : pct >= 60 ? 'Atenção' : 'Deficiente';
      return '<div class="micro-c">'
        + '<div class="micro-nm"><span>' + r.ico + ' ' + r.n + '</span>'
        + '<span style="font-size:9.5px;color:' + (pct >= 90 ? '#16a34a' : pct >= 60 ? '#d97706' : '#dc2626') + ';font-weight:700;background:' + (pct >= 90 ? '#dcfce7' : pct >= 60 ? '#fef3c7' : '#fee2e2') + ';padding:2px 8px;border-radius:99px">' + status + '</span></div>'
        + '<div class="micro-tr"><div class="micro-fl" style="width:' + pct + '%;background:' + color + '"></div></div>'
        + '<div class="micro-vs"><span class="mv-cur" style="color:' + color + '">' + v.toFixed(1) + ' ' + r.un + '</span><span class="mv-mt">/ ' + r.ref + ' ' + r.un + '</span><span style="font-size:9.5px;color:var(--n4)">(' + Math.round(pct) + '%)</span></div>'
        + '</div>';
    }).join('') + '</div>'
    + '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">' + suggHtml + '</div>';
}

// ─── 24H RECALL ───
function rRec() {
  var p = selPat || pats[0];
  if (!p) return '<div class="alert alert-b"><span>Selecione um paciente.</span></div>';

  // Plano prescrito — usar o último plano salvo do paciente
  var prescPlan = null;
  if (p.plans && p.plans.length > 0) {
    var pd = p.plans[0];
    if (pd.mealData) prescPlan = pd.mealData.map(function (m) {
      var k = m.items.reduce(function (s, it) { var f = FOOD_DB.find(function (x) { return x.id === it.fid }); return s + Math.round((f ? f.k : 100) * (it.qty || 100) / 100); }, 0);
      return { n: m.name, k: k, items: m.items.map(function (it) { var f = FOOD_DB.find(function (x) { return x.id === it.fid }); return (f ? f.e + ' ' : '') + '"' + (f ? f.n : 'item') + '" ' + (it.qty || 100) + 'g'; }) };
    });
  }

  // Diário do paciente — usar entradas mais recentes
  var diary = p.diary || [];
  var todayDiary = diary.length > 0 ? diary[diary.length - 1] : null;

  // Consumido: do diário real ou estimado por adesão
  var cons;
  if (todayDiary && todayDiary.meals) {
    cons = todayDiary.meals;
  } else if (prescPlan) {
    var adh = (p.prog || 60) / 100;
    cons = prescPlan.map(function (m) { return { n: m.n, k: Math.round(m.k * (adh * (0.85 + Math.random() * 0.3))), items: m.items.slice(0, Math.max(1, Math.floor(m.items.length * adh))) }; });
  } else {
    cons = [
      { n: 'Café da manhã', k: Math.round(p.w * 1.8), items: ['Café com leite', 'Pão integral 2 fatias', 'Fruta 1 un'] },
      { n: 'Almoço', k: Math.round(p.w * 3.2), items: ['Proteína grelhada 120g', 'Arroz integral 80g', 'Feijão 80g', 'Salada verde'] },
      { n: 'Lanche', k: Math.round(p.w * 1.1), items: ['Iogurte grego 150g'] },
      { n: 'Jantar', k: Math.round(p.w * 2.4), items: ['Sopa de legumes com frango', 'Fruta 1 un'] }
    ];
  }

  var pres = prescPlan || [
    { n: 'Café da manhã', k: Math.round(p.w * 2.0), items: ['Aveia 50g', 'Iogurte 150g', 'Fruta 1 un'] },
    { n: 'Almoço', k: Math.round(p.w * 3.5), items: ['Proteína 140g', 'Cereal integral 100g', 'Leguminosa 80g'] },
    { n: 'Lanche', k: Math.round(p.w * 1.2), items: ['Iogurte grego 150g', 'Oleaginosas 30g'] },
    { n: 'Jantar', k: Math.round(p.w * 2.8), items: ['Proteína 130g', 'Tubérculo 120g', 'Legumes variados'] }
  ];

  var tkP = pres.reduce(function (s, m) { return s + m.k; }, 0);
  var tkC = cons.reduce(function (s, m) { return s + m.k; }, 0);
  var diff = tkC - tkP;
  var adPct = tkP > 0 ? Math.round(Math.min(130, tkC / tkP * 100)) : 0;
  var hasDiario = !!(todayDiary && todayDiary.meals);
  var hasPlan = !!prescPlan;

  return '<div class="alert alert-' + (hasDiario ? 'g' : hasPlan ? 'b' : 'y') + '" style="margin-bottom:12px"><span>'
    + (hasDiario ? '✓ Consumido extraído do diário de hoje de <strong>' + p.n + '</strong>'
      : hasPlan ? '📋 Prescrito baseado no plano de <strong>' + p.n + '</strong> · consumido estimado por adesão (' + p.prog + '%)'
        : '⚠ Sem plano ou diário — valores estimados pelo peso e objetivo') + '</span></div>'
    + '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:10px;margin-bottom:14px">'
    + '<div class="card" style="text-align:center"><div style="font-family:var(--in);font-size:26px;font-weight:800;letter-spacing:-1px;color:var(--g5)">' + tkP + '<span style="font-size:13px;font-weight:500;color:var(--n4)"> kcal</span></div><div style="font-size:11.5px;color:var(--n4);margin-top:2px">Meta prescrita</div></div>'
    + '<div class="card" style="text-align:center"><div style="font-family:var(--in);font-size:26px;font-weight:800;letter-spacing:-1px;color:' + (Math.abs(diff) <= 100 ? '#16a34a' : diff > 0 ? '#dc2626' : '#f59e0b') + '">' + tkC + '<span style="font-size:13px;font-weight:500;color:var(--n4)"> kcal</span></div><div style="font-size:11.5px;color:var(--n4);margin-top:2px">Consumido · <strong style="color:' + (diff > 0 ? '#dc2626' : diff < 0 ? '#f59e0b' : '#16a34a') + '">' + (diff > 0 ? '+' : '') + diff + ' kcal</strong></div></div>'
    + '<div class="card" style="text-align:center"><div style="font-family:var(--in);font-size:26px;font-weight:800;letter-spacing:-1px;color:' + (adPct >= 90 && adPct <= 110 ? '#16a34a' : adPct >= 70 ? '#f59e0b' : '#dc2626') + '">' + adPct + '<span style="font-size:13px;font-weight:500;color:var(--n4)">%</span></div><div style="font-size:11.5px;color:var(--n4);margin-top:2px">Adesão ao plano</div></div></div>'
    + '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">'
    + '<div class="card"><div class="ch"><span class="ct" style="color:var(--g5)">✓ Prescrito' + (hasPlan ? ' — plano atual' : ' — estimado') + '</span></div>'
    + pres.map(function (m) { return '<div style="background:var(--g0);border-radius:var(--r);padding:10px 12px;margin-bottom:6px"><div style="display:flex;justify-content:space-between;margin-bottom:4px"><span style="font-family:var(--jk);font-size:11px;font-weight:700;color:var(--g5)">' + m.n + '</span><span class="tag tg">' + m.k + ' kcal</span></div><div style="font-size:11px;color:var(--n5)">' + (Array.isArray(m.items) ? m.items.join(' · ') : m.items || '—') + '</div></div>'; }).join('') + '</div>'
    + '<div class="card"><div class="ch"><span class="ct" style="color:#2563eb">📝 Consumido' + (hasDiario ? ' — diário de hoje' : ' — estimado') + '</span>' + (hasDiario ? '' : '<span class="tag ty" style="font-size:9px">Estimado</span>') + '</div>'
    + cons.map(function (m) { return '<div style="background:var(--blue-l);border-radius:var(--r);padding:10px 12px;margin-bottom:6px"><div style="display:flex;justify-content:space-between;margin-bottom:4px"><span style="font-family:var(--jk);font-size:11px;font-weight:700;color:#1d4ed8">' + m.n + '</span><span class="tag tb2">' + m.k + ' kcal</span></div><div style="font-size:11px;color:var(--n5)">' + (Array.isArray(m.items) ? m.items.join(' · ') : m.items || '—') + '</div></div>'; }).join('') + '</div></div>'
    + '<div class="card" style="margin-top:12px;background:var(--g0);border-color:var(--g2)"><div class="ch"><span class="ct" style="color:var(--g6)">📊 Adesão por refeição</span></div>'
    + '<div style="display:grid;grid-template-columns:repeat(' + (Math.min(pres.length, 4)) + ',1fr);gap:8px;margin-top:4px">'
    + pres.map(function (pm, i) { var cm = cons[i] || { k: 0 }; var pct = pm.k > 0 ? Math.round(Math.min(130, cm.k / pm.k * 100)) : 0; var color = pct >= 90 && pct <= 110 ? '#16a34a' : pct >= 70 ? '#f59e0b' : '#dc2626'; return '<div style="text-align:center;background:#fff;border-radius:var(--r);padding:10px 8px"><div style="font-size:20px;font-weight:800;color:' + color + '">' + pct + '%</div><div style="font-size:10px;color:var(--n4);margin-top:2px">' + pm.n.split(' ')[0] + '</div></div>'; }).join('')
    + '</div></div>';
}
// ─── AI NUTRICIONAL ───
function rAI(){
 var p=selPat||pats[0];
 // Calculate TMB auto for context
 var tmb=p.sex==='F'?447.6+(9.2*p.w)+(3.1*p.h)-(4.3*p.age):88.4+(13.4*p.w)+(4.8*p.h)-(5.7*p.age);
 var get=Math.round(tmb*1.55);
 var targetKcal=p.goal.toLowerCase().includes('emagre')?Math.round(get*0.8):p.goal.toLowerCase().includes('hipert')?Math.round(get*1.15):get;
 return'<div style="display:grid;grid-template-columns:340px 1fr;gap:14px;align-items:start">'

 // ── LEFT: Config panel
 +'<div>'
 +'<div class="card" style="margin-bottom:12px">'
 +'<div class="ch"><span class="ct">🤖 Assistente DietOn IA</span><span class="tag tg" style="background:#fdd0a8;color:#6b2d00">Inteligente</span></div>'

 // Patient summary chip
 +'<div style="background:var(--n0);border-radius:10px;padding:10px 12px;margin-bottom:14px;display:flex;gap:10px;align-items:center">'
 +'<div style="width:34px;height:34px;border-radius:50%;background:linear-gradient(135deg,var(--g5),var(--g4));display:flex;align-items:center;justify-content:center;font-size:13px;flex-shrink:0">'+p.av+'</div>'
 +'<div style="flex:1">'
 +'<div style="font-family:var(--jk);font-size:12px;font-weight:700;color:var(--n9)">'+p.n+'</div>'
 +'<div style="font-size:10.5px;color:var(--n5);margin-top:1px">'+p.age+' anos · '+p.w+'kg · '+p.h+'cm · '+p.sex+' · IMC '+p.bmi+'</div>'
 +'</div>'
 +'<div style="text-align:right;flex-shrink:0"><div style="font-family:var(--in);font-size:16px;font-weight:800;color:var(--g5)">'+targetKcal+'</div><div style="font-size:9px;color:var(--n4)">kcal alvo</div></div>'
 +'</div>'

 +'<div class="fld"><label class="lbl">Objetivo clínico</label>'
 +'<select class="sel" id="ai-obj">'
 +'<option value="emagrecimento">🔥 Emagrecimento (déficit ~20%)</option>'
 +'<option value="hipertrofia">💪 Hipertrofia (superávit ~15%)</option>'
 +'<option value="manutencao">⚖️ Manutenção do peso</option>'
 +'<option value="glicemico">🩸 Controle glicêmico (baixo IG)</option>'
 +'<option value="colesterol">❤️ Cardioprotegido (low fat)</option>'
 +'<option value="gestante">🤰 Gestante / Lactante</option>'
 +'<option value="renal">🫘 Dieta Renal (low K/P)</option>'
 +'<option value="atleta">🏃 Atleta / Alta performance</option>'
 +'</select></div>'

 +'<div class="row2" style="gap:8px">'
 +'<div class="fld"><label class="lbl">Refeições/dia</label>'
 +'<select class="sel" id="ai-meals">'
 +'<option value="3">3 refeições</option><option value="4">4 refeições</option>'
 +'<option value="5" selected>5 refeições</option><option value="6">6 refeições</option>'
 +'</select></div>'
 +'<div class="fld"><label class="lbl">Distribuição</label>'
 +'<select class="sel" id="ai-dist">'
 +'<option value="moderada">Moderada (50/25/25)</option>'
 +'<option value="lowcarb">Low Carb (20/35/45)</option>'
 +'<option value="highprot">High Protein (40/35/25)</option>'
 +'<option value="mediterranean">Mediterrânea (55/20/25)</option>'
 +'</select></div>'
 +'</div>'

 +'<div class="fld"><label class="lbl">Restrições / Alergias</label>'
 +'<input class="inp" id="ai-rest" placeholder="Sem glúten, vegetariano, intolerante a lactose…" value="'+(p.alerg||'')+'"/></div>'

 +'<div class="fld"><label class="lbl">Preferências e contexto</label>'
 +'<input class="inp" id="ai-pref" placeholder="Ex: prepara em casa, horário de treino às 18h, não gosta de peixe…"/></div>'

 // Checkboxes options
 +'<div style="display:grid;grid-template-columns:1fr 1fr;gap:5px;margin-bottom:14px">'
 +[['ai-sugs','Sugerir substituições'],['ai-lista','Gerar lista de compras'],['ai-orient','Orientações gerais'],['ai-micro','Análise de micronutrientes']].map(function(o){
  return'<label style="display:flex;align-items:center;gap:6px;font-size:11.5px;color:var(--n6);cursor:pointer"><input type="checkbox" id="'+o[0]+'" checked style="accent-color:var(--g4)"/> '+o[1]+'</label>';
 }).join('')
 +'</div>'

 +'<button class="btn btn-p btn-lg" style="width:100%;font-size:13px" onclick="genAI()">✨ Gerar Plano Personalizado</button>'
 +'<button class="btn btn-ghost btn-sm" style="width:100%;margin-top:6px" onclick="genAIQuick()">⚡ Geração Rápida (perfil padrão)</button>'
 +'</div>'

 // Quick templates section
 +'<div class="card">'
 +'<div class="ch"><span class="ct" style="font-size:12px">📋 Templates Rápidos</span></div>'
 +'<div style="display:flex;flex-direction:column;gap:6px">'
 +[
   ['🔥','Emagrecimento 1600 kcal','Mulher 65kg, 160cm, sed.','1600','emagrecimento'],
   ['💪','Hipertrofia 2800 kcal','Homem 75kg, 175cm, ativo','2800','hipertrofia'],
   ['⚖️','Manutenção 2000 kcal','Adulto ativo, perfil médio','2000','manutencao'],
   ['🩸','Controle Glicêmico','Baixo IG, DM2 controlada','1800','glicemico'],
 ].map(function(t){
  return'<div data-key="'+t[4]+'" data-kcal="'+t[3]+'" onclick="applyAITemplate(this.dataset.key,this.dataset.kcal)" style="display:flex;align-items:center;gap:10px;padding:9px 11px;border-radius:9px;border:1.5px solid var(--n2);cursor:pointer;transition:all .15s" onmouseover="this.style.cssText+=\';border-color:var(--g4);background:var(--g0)\'" onmouseout="this.style.cssText+=\';border-color:var(--n2);background:#fff\'">'
  +'<span style="font-size:18px">'+t[0]+'</span>'
  +'<div style="flex:1"><div style="font-family:var(--jk);font-size:11.5px;font-weight:700;color:var(--n9)">'+t[1]+'</div>'
  +'<div style="font-size:10px;color:var(--n5)">'+t[2]+'</div></div>'
  +'<span style="font-size:11px;font-weight:700;color:var(--g5)">'+t[3]+' kcal</span>'
  +'</div>';
 }).join('')
 +'</div></div></div>'

 // ── RIGHT: Result panel
 +'<div class="card" style="min-height:400px">'
 +'<div class="ch"><span class="ct">Plano Gerado pela IA</span><div id="ai-actions" style="display:none;gap:6px;display:flex"></div></div>'
 +'<div id="ai-result">'
 +'<div style="text-align:center;padding:40px 20px">'
 +'<div style="width:64px;height:64px;background:linear-gradient(135deg,var(--g0),#ffe8d0);border-radius:20px;display:flex;align-items:center;justify-content:center;font-size:28px;margin:0 auto 16px">🤖</div>'
 +'<div style="font-family:var(--jk);font-size:15px;font-weight:700;color:var(--n8);margin-bottom:8px">Pronto para gerar</div>'
 +'<div style="font-size:12.5px;color:var(--n4);line-height:1.8;max-width:280px;margin:0 auto">Configure o objetivo e clique em <strong>Gerar Plano</strong> para criar um plano alimentar personalizado em segundos.</div>'
 +'<div style="margin-top:20px;display:flex;justify-content:center;gap:16px">'
 +['⏱️ Economiza tempo','✅ Baseado no perfil','📄 Pronto para PDF'].map(function(f){return'<div style="font-size:11px;color:var(--n5)">'+f+'</div>';}).join('')
 +'</div></div>'
 +'</div></div>'
 +'</div>';
}
function genAI() {
  var obj = document.getElementById('ai-obj').value;
  var rest = document.getElementById('ai-rest').value;
  var nm = parseInt(document.getElementById('ai-meals').value);
  var p = selPat || pats[0];
  var el = document.getElementById('ai-result');
  el.innerHTML = '<div style="text-align:center;padding:24px 0"><div style="font-size:28px;animation:spin 1s linear infinite;display:inline-block">⚙️</div><div style="font-weight:600;margin-top:10px">Gerando plano personalizado…</div></div>';
  document.head.insertAdjacentHTML('beforeend', '<style>@keyframes spin{to{transform:rotate(360deg)}}</style>');
  setTimeout(function () {
    var mealNames = ['Café da manhã ☀️', 'Lanche da manhã 🥛', 'Almoço 🍽️', 'Lanche da tarde 🥛', 'Jantar 🌙', 'Ceia 🌙'].slice(0, nm);
    var suggestions = [
      { meal: 'Café da manhã ☀️', foods: 'Aveia 45g + Iogurte grego 150g + Morango 80g + Café s/ açúcar', kcal: 390 },
      { meal: 'Lanche da manhã 🥛', foods: 'Banana 1un + Pasta de amendoim 1 col', kcal: 230 },
      { meal: 'Almoço 🍽️', foods: 'Frango grelhado 140g + Arroz integral 100g + Feijão 80g + Brócolis 100g + Salada à vontade', kcal: 580 },
      { meal: 'Lanche da tarde 🥛', foods: 'Iogurte grego 150g + Granola 20g', kcal: 200 },
      { meal: 'Jantar 🌙', foods: 'Salmão 120g + Batata-doce 120g + Abobrinha grelhada 100g', kcal: 450 },
      { meal: 'Ceia 🌙', foods: 'Queijo cottage 80g + Kiwi 1un', kcal: 130 }
    ].slice(0, nm);
    var total = suggestions.reduce(function (s, m) { return s + m.kcal }, 0);
    el.innerHTML = '<div class="alert alert-g"><span>✅ Plano gerado com sucesso para <strong>' + p.n + '</strong> — Objetivo: ' + obj + (rest ? ' · Sem: ' + rest : '') + '</span></div>'
      + '<div style="margin-bottom:12px">' + suggestions.map(function (s) { return '<div style="background:var(--n0);border-radius:var(--r);padding:10px 12px;margin-bottom:6px"><div style="display:flex;justify-content:space-between;margin-bottom:3px"><strong style="font-family:var(--jk);font-size:11.5px">' + s.meal + '</strong><span class="tag tg">' + s.kcal + ' kcal</span></div><div style="font-size:11.5px;color:var(--n5)">' + s.foods + '</div></div>'; }).join('') + '</div>'
      + '<div style="background:linear-gradient(135deg,#163318,#276330);color:#fff;border-radius:var(--r2);padding:14px;display:flex;justify-content:space-between;align-items:center"><div><div style="font-family:var(--in);font-size:22px;font-weight:800">' + total + ' kcal</div><div style="font-size:10.5px;color:rgba(255,255,255,.5)">total diário</div></div><button class="btn btn-gold" onclick="applyAIPlan()">✅ Salvar e aplicar plano →</button></div>';
    window._aiSuggestions = suggestions;
  }, 2200);
}
function applyAIPlan() {
  if (!window._aiSuggestions) return;
  var sug = window._aiSuggestions;

  // Suporte a dois formatos:
  // Formato A (genAI avançado): [{name, em, items:[{food,qty,k,p,c,g}]}]
  // Formato B (genAI simples):  [{meal, foods, kcal}] — strings descritivas
  if (sug[0] && sug[0].items) {
    // Formato A — usar diretamente
    meals = sug.map(function (m) { return { name: m.name || m.meal, em: m.em || '🍽️', items: m.items }; });
  } else {
    // Formato B — fallback com fids padrão
    var fallbackFids = [{ meal: 'Café da manhã', em: '☀️', fids: [17, 28, 52] }, { meal: 'Lanche da manhã', em: '🥛', fids: [46, 61] }, { meal: 'Almoço', em: '🍽️', fids: [1, 12, 14, 33] }, { meal: 'Lanche da tarde', em: '🥛', fids: [28] }, { meal: 'Jantar', em: '🌙', fids: [3, 22, 39] }, { meal: 'Ceia', em: '🌙', fids: [29, 55] }].slice(0, sug.length);
    meals = fallbackFids.map(function (m) { return { name: m.meal, em: m.em, items: m.fids.map(function (id) { var f = FOOD_DB.find(function (x) { return x.id == id; }); if (!f) return null; var qty = 100, fac = qty / 100; return { food: f, qty: qty, k: Math.round(f.k * fac), p: +(f.p * fac).toFixed(1), c: +(f.c * fac).toFixed(1), g: +(f.g * fac).toFixed(1) }; }).filter(Boolean) }; });
  }

  // Salvar automaticamente no perfil do paciente
  savePlanForPatient();
  showToast('Plano da IA salvo no perfil de ' + (selPat || pats[0]).n + '! Confira o Plano Semanal.', 's');
  setTimeout(function () { goP('week', document.getElementById('ni-week')) }, 900);
}

// ─── NOTIFICATIONS ───
function _generateSmartAlerts() {
  var al = [];
  pats.forEach(function (p) {
    var ex = p.exams || {};
    if (ex.vitd < 20) al.push({ type: 'r', txt: 'Vitamina D crítica (' + ex.vitd + ' ng/mL) — ' + p.n, cat: 'Vitamina D', patId: p.id, patName: p.n, auto: true });
    else if (ex.vitd < 30) al.push({ type: 'w', txt: 'Vitamina D insuficiente (' + ex.vitd + ' ng/mL) — ' + p.n, cat: 'Vitamina D', patId: p.id, patName: p.n, auto: true });
    if (ex.gli > 125) al.push({ type: 'r', txt: 'Glicemia elevada (' + ex.gli + ' mg/dL) — ' + p.n, cat: 'Glicemia', patId: p.id, patName: p.n, auto: true });
    else if (ex.gli > 100) al.push({ type: 'w', txt: 'Glicemia limítrofe (' + ex.gli + ' mg/dL) — ' + p.n, cat: 'Glicemia', patId: p.id, patName: p.n, auto: true });
    if (ex.col > 240) al.push({ type: 'r', txt: 'Colesterol muito alto (' + ex.col + ' mg/dL) — ' + p.n, cat: 'Colesterol', patId: p.id, patName: p.n, auto: true });
    else if (ex.col > 200) al.push({ type: 'w', txt: 'Colesterol elevado (' + ex.col + ' mg/dL) — ' + p.n, cat: 'Colesterol', patId: p.id, patName: p.n, auto: true });
    if (ex.hem < 11) al.push({ type: 'r', txt: 'Anemia (' + ex.hem + ' g/dL) — ' + p.n, cat: 'Hemoglobina', patId: p.id, patName: p.n, auto: true });
    else if (ex.hem < 12.5) al.push({ type: 'w', txt: 'Hemoglobina no limite (' + ex.hem + ' g/dL) — ' + p.n, cat: 'Hemoglobina', patId: p.id, patName: p.n, auto: true });
    if (ex.fer < 15) al.push({ type: 'r', txt: 'Ferritina crítica (' + ex.fer + ' ng/mL) — ' + p.n, cat: 'Ferritina', patId: p.id, patName: p.n, auto: true });
    else if (ex.fer < 30) al.push({ type: 'w', txt: 'Ferritina baixa (' + ex.fer + ' ng/mL) — ' + p.n, cat: 'Ferritina', patId: p.id, patName: p.n, auto: true });
    if (ex.tsh > 5) al.push({ type: 'r', txt: 'TSH elevado (' + ex.tsh + ') — ' + p.n, cat: 'TSH', patId: p.id, patName: p.n, auto: true });
    if (ex.tgo > 40 || ex.tgp > 40) al.push({ type: 'r', txt: 'Transaminases elevadas — ' + p.n, cat: 'Fígado', patId: p.id, patName: p.n, auto: true });
    if ((p.prog || 0) < 30) al.push({ type: 'w', txt: 'Baixa adesão (' + p.prog + '%) — ' + p.n, cat: 'Adesão', patId: p.id, patName: p.n, auto: true });
  });
  return al;
}


function showTour() {
  var steps = [
    { title: 'Bem-vindo ao DietOn! 🎉', body: 'Este tutorial rápido vai mostrar as principais funcionalidades da plataforma.' },
    { title: 'Dashboard', body: 'Aqui você acompanha em tempo real: pacientes ativos, consultas da semana, taxa de adesão e alertas clínicos — todos calculados dos seus dados reais.' },
    { title: 'Agenda', body: 'Gerencie suas consultas, visualize o calendário mensal e acompanhe os agendamentos de cada paciente.' },
    { title: 'Financeiro', body: 'Registre cobranças, marque pagamentos como recebidos e acompanhe o resumo financeiro do seu consultório.' },
    { title: 'Pacientes', body: 'Cadastre e gerencie seus pacientes. Clique em "Ver" para acessar o perfil completo com dados clínicos, exames e histórico.' },
    { title: 'Prescrição', body: 'Monte planos alimentares personalizados com cálculo automático de macros e calorias por refeição.' },
    { title: 'Suplementação', body: 'Acesse o perfil do paciente e prescreva suplementos. O paciente verá a lista no próprio app.' },
    { title: 'IA Nutricional', body: 'Use inteligência artificial para gerar sugestões de planos, analisar exames e obter recomendações clínicas baseadas nos dados do paciente.' },
    { title: 'Pronto! ✅', body: 'Você já pode usar o DietOn. Clique no botão "Tutorial" a qualquer momento para rever este guia.' },
  ];
  var step = 0;
  var ov = document.createElement('div');
  ov.id = 'm-tour';
  ov.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.55);z-index:9999;display:flex;align-items:center;justify-content:center;animation:fadeIn .2s';
  function render() {
    var s = steps[step];
    var dots = steps.map(function (_, i) { return '<div style="width:7px;height:7px;border-radius:50%;background:' + (i === step ? 'var(--g5)' : 'var(--n3)') + ';transition:background .2s"></div>'; }).join('');
    ov.innerHTML = '<div style="background:#fff;border-radius:20px;padding:32px;max-width:420px;width:90%;box-shadow:0 20px 60px rgba(0,0,0,.2);position:relative">'
      + '<button onclick="document.body.removeChild(document.getElementById(\'m-tour\'))" style="position:absolute;top:16px;right:16px;background:var(--n1);border:none;width:28px;height:28px;border-radius:50%;cursor:pointer;font-size:16px;color:var(--n5);display:flex;align-items:center;justify-content:center">×</button>'
      + '<div style="font-size:11px;font-weight:700;color:var(--g5);text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px">Passo ' + (step + 1) + ' de ' + steps.length + '</div>'
      + '<div style="font-size:18px;font-weight:800;color:var(--n9);margin-bottom:12px;line-height:1.3">' + s.title + '</div>'
      + '<div style="font-size:13.5px;color:var(--n6);line-height:1.7;margin-bottom:24px">' + s.body + '</div>'
      + '<div style="display:flex;gap:5px;justify-content:center;margin-bottom:20px">' + dots + '</div>'
      + '<div style="display:flex;gap:8px;justify-content:flex-end">'
      + (step > 0 ? '<button onclick="window._tourStep(' + step + '-1)" class="btn btn-ghost btn-sm">← Anterior</button>' : '')
      + (step < steps.length - 1
        ? '<button onclick="window._tourStep(' + step + '+1)" class="btn btn-p btn-sm">Próximo →</button>'
        : '<button onclick="document.body.removeChild(document.getElementById(\'m-tour\'))" class="btn btn-p btn-sm">Concluir ✓</button>')
      + '</div></div>';
  }
  window._tourStep = function (s) { step = s; render(); };
  document.body.appendChild(ov);
  render();
}
function _clearAllNotifs() { notifs = []; updateNotifBadge(); if (typeof DB !== "undefined") DB.save(); goP("notif", null); showToast("Todas as notificações limpas", "s"); }
function _clearNotifs() { notifs = []; updateNotifBadge(); if (typeof DB !== 'undefined') DB.save(); goP('notif', null); showToast('Alertas limpos', 's'); }
function _removeNotif(idx) { notifs.splice(idx, 1); updateNotifBadge(); if (typeof DB !== 'undefined') DB.save(); goP('notif', null); }
function _goPatEv(pid) { selPat = pats.find(function (x) { return x.id === pid; }); goP('ev', document.getElementById('ni-ev')); }
function _showDay(d) { showDayConsultas(d); }
function rNotif(){
 var smartAlerts=_generateSmartAlerts();
 var manualNotifs=notifs.filter(function(n){return !n.auto;});
 var autoAlerts=smartAlerts.map(function(a){return Object.assign({},a,{auto:true});});
 var allNotifs=manualNotifs.concat(autoAlerts);
 return'<div style="max-width:640px">'
 +'<div class="card" style="margin-bottom:10px"><div class="ch"><span class="ct">Central de Alertas</span>'
 +'<div style="display:flex;gap:6px"><span style="font-size:10.5px;color:var(--n4);align-self:center">'+allNotifs.length+' alertas</span>'
 +'<button class="btn btn-ghost btn-sm" onclick="notifs=[];updateNotifBadge();DB.save();goP(\'notif\',null);showToast(\'Alertas manuais limpos\',\'s\')">Limpar manuais</button><button class="btn btn-danger btn-sm" onclick="_clearAllNotifs()">Limpar todas</button></div></div>'
 +(allNotifs.filter(function(n){return n.type==='r';}).length
  ?'<div style="background:#fef2f2;border-radius:var(--r);padding:10px;margin-bottom:8px">'
  +'<div style="font-size:9.5px;font-weight:800;color:#dc2626;letter-spacing:.06em;text-transform:uppercase;margin-bottom:6px">🚨 Urgente</div>'
  +allNotifs.filter(function(n){return n.type==='r';}).map(function(n){
   return'<div style="display:flex;align-items:center;gap:10px;padding:8px;border-radius:6px;background:#fff;margin-bottom:5px;border-left:3px solid #dc2626">'
   +'<div style="flex:1"><div style="font-size:12px;font-weight:600;color:var(--n8)">'+n.txt+'</div>'
   +(n.cat?'<span style="font-size:9px;background:#fee2e2;color:#dc2626;padding:1px 7px;border-radius:99px;font-weight:700">'+n.cat+'</span>':'')+'</div>'
   +(n.patId?'<button class="btn btn-s btn-sm" onclick="selPat=pats.find(function(x){return x.id==='+n.patId+'});goP(\'ev\',document.getElementById(\'ni-ev\'))">Ver</button>':'')
   +'<span style="font-size:9px;color:var(--n4)">'+(n.auto?'Auto':'Manual')+'</span>'
   +'</div>';
  }).join('')+'</div>':'')
 +(allNotifs.filter(function(n){return n.type==='w';}).length
  ?'<div style="margin-bottom:8px">'
  +'<div style="font-size:9.5px;font-weight:800;color:#d97706;letter-spacing:.06em;text-transform:uppercase;margin-bottom:6px">⚠ Atenção</div>'
  +allNotifs.filter(function(n){return n.type==='w';}).map(function(n,i){
   return'<div style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:var(--r);background:var(--n0);margin-bottom:5px;border-left:3px solid #f59e0b">'
   +'<div style="flex:1"><div style="font-size:12px;font-weight:600;color:var(--n8)">'+n.txt+'</div>'
   +(n.cat?'<span style="font-size:9px;background:#fef3c7;color:#d97706;padding:1px 7px;border-radius:99px;font-weight:700;display:inline-block;margin-top:3px">'+n.cat+'</span>':'')+'</div>'
   +(n.patId?'<button class="btn btn-s btn-sm" onclick="selPat=pats.find(function(x){return x.id==='+n.patId+'});goP(\'ev\',document.getElementById(\'ni-ev\'))">Ver</button>':'')
   +(!n.auto?'<button class="btn btn-ghost btn-sm" onclick="notifs.splice(\'+i+\',1);updateNotifBadge();DB.save();goP(\'notif\',null)">✓</button>':'<span style="font-size:9px;color:var(--n4)">Auto</span>')
   +'</div>';
  }).join('')+'</div>':'')
 +(allNotifs.filter(function(n){return n.type==='i';}).length
  ?'<div style="margin-bottom:8px">'
  +'<div style="font-size:9.5px;font-weight:800;color:#3b82f6;letter-spacing:.06em;text-transform:uppercase;margin-bottom:6px">ℹ Informativo</div>'
  +allNotifs.filter(function(n){return n.type==='i';}).map(function(n,i){
   return'<div style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:var(--r);background:var(--n0);margin-bottom:5px;border-left:3px solid #3b82f6">'
   +'<div style="flex:1"><div style="font-size:12px;font-weight:600;color:var(--n8)">'+n.txt+'</div>'
   +(n.cat?'<span style="font-size:9px;background:#eff6ff;color:#3b82f6;padding:1px 7px;border-radius:99px;font-weight:700;display:inline-block;margin-top:3px">'+n.cat+'</span>':'')+'</div>'
   +(n.patId?'<button class="btn btn-s btn-sm" onclick="selPat=pats.find(function(x){return x.id==='+n.patId+'});goP(\'ev\',document.getElementById(\'ni-ev\'))">Ver</button>':'')
   +(!n.auto?'<button class="btn btn-ghost btn-sm" onclick="notifs.splice(\'+i+\',1);updateNotifBadge();DB.save();goP(\'notif\',null)">✓</button>':'<span style="font-size:9px;color:var(--n4)">Auto</span>')
   +'</div>';
  }).join('')+'</div>':'')
 +(!allNotifs.length?'<div class="card" style="text-align:center;padding:28px 0"><div style="font-size:32px;margin-bottom:8px">🎉</div><div style="font-weight:600">Tudo em dia!</div><div style="font-size:12px;color:var(--n4);margin-top:4px">Nenhum alerta no momento</div></div>':'')
 +'<div style="background:var(--g0);border-radius:var(--r);padding:10px 14px;font-size:11px;color:var(--n5);margin-top:8px">🤖 <strong>'+smartAlerts.length+' alertas automáticos</strong> gerados em tempo real com base nos dados clínicos.</div>'
 +'</div>';
}

// ─── TEMPLATES ───
function rTpl(){
 var html='<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:14px">';
 if(!templates||!templates.length){
  return '<div style="text-align:center;padding:60px"><div style="font-size:48px;margin-bottom:16px">📁</div>'
   +'<div style="font-weight:800;font-size:15px;color:var(--n7);margin-bottom:8px">Nenhum template salvo</div>'
   +'<div style="font-size:12.5px;color:var(--n4)">Acesse <strong>Prescrição</strong>, monte um plano e clique em <strong>Salvar como Template</strong>.</div></div>';
 }
 html+=templates.map(function(t,i){
  var totalKcal=0,totalProt=0,totalCarb=0,totalGord=0;
  (t.mealData||[]).forEach(function(meal){
   (meal.items||[]).forEach(function(it){
    var f=FOOD_DB.find(function(x){return x.id===it.fid;});
    if(f){var fac=(it.qty||100)/100;totalKcal+=Math.round(f.k*fac);totalProt+=+(f.p*fac).toFixed(1);totalCarb+=+(f.c*fac).toFixed(1);totalGord+=+(f.g*fac).toFixed(1);}
   });
  });
  var kcal=totalKcal||t.kcal||0;
  return '<div class="card" style="cursor:default;display:flex;flex-direction:column">'
   +'<div class="ch"><div class="ct">'+escHtml(t.name||'Template')+'</div><span class="tag tg">'+kcal+' kcal</span></div>'
   +'<p style="font-size:12px;color:var(--n5);line-height:1.6;margin-bottom:10px;flex:1">'+escHtml(t.desc||'')+'</p>'
   // Macro pills
   +'<div style="display:flex;gap:6px;margin-bottom:12px;flex-wrap:wrap">'
   +'<span style="font-size:10px;font-weight:700;background:#eff6ff;color:#1d4ed8;border-radius:99px;padding:3px 9px">P: '+totalProt.toFixed(0)+'g</span>'
   +'<span style="font-size:10px;font-weight:700;background:#fffbeb;color:#b45309;border-radius:99px;padding:3px 9px">C: '+totalCarb.toFixed(0)+'g</span>'
   +'<span style="font-size:10px;font-weight:700;background:#fef2f2;color:#b91c1c;border-radius:99px;padding:3px 9px">G: '+totalGord.toFixed(0)+'g</span>'
   +'</div>'
   // Meal list preview
   +'<div style="font-size:11px;color:var(--n5);margin-bottom:12px;display:flex;flex-wrap:wrap;gap:4px">'
   +(t.mealData||[]).map(function(m){return '<span style="background:var(--n1);border-radius:6px;padding:2px 7px">'+(m.em||'🍽️')+' '+(m.name||m.n||'')+'</span>';}).join('')
   +'</div>'
   +'<div style="display:flex;gap:6px">'
   +'<button class="btn btn-p btn-sm" style="flex:1" onclick="applyTpl('+t.id+');goP(\'presc\',document.getElementById(\'ni-presc\'))">📋 Usar no Plano</button>'
   +'<button class="btn btn-ghost btn-sm" onclick="duplicateTpl('+i+')" title="Duplicar">⧉</button>'
   +'<button class="btn btn-danger btn-sm" onclick="deleteTpl('+i+')">🗑</button>'
   +'</div></div>';
 }).join('');
 html+='</div>';
 return html;
}


// ─── PATIENT PAGES ───
function rPDash(){
 // Get the patient: logged patient finds their own record
 var p = selPat;
 if (!p) {
  return '<div style="padding:60px;text-align:center">'
   +'<div style="font-size:48px;margin-bottom:16px">👤</div>'
   +'<div style="font-weight:800;font-size:15px;color:var(--n7);margin-bottom:8px">Perfil não vinculado</div>'
   +'<div style="font-size:12.5px;color:var(--n4)">Seu cadastro ainda não foi vinculado pelo nutricionista.<br>Entre em contato para solicitar o vínculo.</div>'
   +'</div>';
 }

 var now = new Date();
 var diaSemana = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'][now.getDay()];
 var loss = (p.wStart||p.w||0) - (p.w||0);
 var done = tasks.filter(function(t){return t.done;}).length;
 var totalTasks = tasks.length;

 // Calc macros from prescribed plan
 var planKcal=0, planProt=0, planCarb=0, planGord=0;
 var planSrc = (p.plans&&p.plans.length) ? p.plans[0].mealData : (p.meals||[]);
 (planSrc||[]).forEach(function(meal){
  (meal.items||[]).forEach(function(it){
   var f=FOOD_DB.find(function(x){return x.id===it.fid;});
   if(f){var fac=(it.qty||100)/100;planKcal+=Math.round(f.k*fac);planProt+=+(f.p*fac).toFixed(1);planCarb+=+(f.c*fac).toFixed(1);planGord+=+(f.g*fac).toFixed(1);}
  });
 });
 var prescKcal = planKcal || p.meta || 1800;

 // Today's diary
 var todayISO = new Date().toISOString().slice(0,10);
 var todayEntry = (p.diary||[]).find(function(d){return d.isoDate===todayISO;});
 var todayKcal = todayEntry ? (todayEntry.totalKcal||0) : 0;
 var todayPct = prescKcal>0 ? Math.min(100, Math.round(todayKcal/prescKcal*100)) : 0;
 var todayColor = todayPct>110?'#ef4444':todayPct>90?'#22c55e':todayPct>60?'#f59e0b':'#3b82f6';

 // Next appointment for this patient
 var nextAppt = null;
 (p.appointments||[]).forEach(function(a){
  var d = new Date(a.isoDate||a.date||'');
  if(d > now && (!nextAppt || d < new Date(nextAppt.isoDate||nextAppt.date||''))) nextAppt = a;
 });

 // Supplements count
 var suplAtivos = (p.suplementos||[]).filter(function(s){return s.aderindo!==false;}).length;

 // Last weight from historico
 var lastW = p.w;
 var hist = p.historico||[];
 if (hist.length > 1) lastW = hist[hist.length-1].peso || p.w;

 var html = '';

 // Welcome banner
 html += '<div style="background:linear-gradient(135deg,#e85a0a,#c4420a);border-radius:16px;padding:20px 24px;color:#fff;margin-bottom:18px;position:relative;overflow:hidden">'
  +'<div style="position:absolute;right:-20px;top:-20px;width:120px;height:120px;border-radius:50%;background:rgba(255,255,255,.08)"></div>'
  +'<div style="position:absolute;right:30px;bottom:-30px;width:80px;height:80px;border-radius:50%;background:rgba(255,255,255,.05)"></div>'
  +'<div style="position:relative;z-index:1">'
  +'<div style="font-size:11px;font-weight:700;opacity:.8;text-transform:uppercase;letter-spacing:.06em;margin-bottom:4px">'+diaSemana+', '+now.toLocaleDateString('pt-BR')+'</div>'
  +'<div style="font-size:21px;font-weight:900;margin-bottom:4px">Olá, '+escHtml(p.n.split(' ')[0])+'! 👋</div>'
  +'<div style="font-size:13px;opacity:.9;margin-bottom:14px">'+
   (planKcal ? 'Meta calórica: '+prescKcal+' kcal/dia' : 'Acompanhe sua evolução aqui.')+
  '</div>'
  +'<div style="display:flex;gap:20px">'
  +'<div><div style="font-size:20px;font-weight:900">'+lastW+'</div><div style="font-size:10px;opacity:.75">kg atual</div></div>'
  +(loss!==0?'<div style="opacity:.3;font-size:18px">|</div>'
    +'<div><div style="font-size:20px;font-weight:900">'+(loss>0?'−'+loss.toFixed(1):'+'+Math.abs(loss).toFixed(1))+'</div><div style="font-size:10px;opacity:.75">kg desde início</div></div>':'')
  +'<div style="opacity:.3;font-size:18px">|</div>'
  +'<div><div style="font-size:20px;font-weight:900">'+(p.bmi||'—')+'</div><div style="font-size:10px;opacity:.75">IMC</div></div>'
  +'</div></div></div>';

 // KPI grid 3 cols
 html += '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:16px">';
 // Kcal
 html += '<div class="card" style="padding:14px;display:flex;align-items:center;gap:10px">'
  +'<div style="width:38px;height:38px;border-radius:10px;background:#fff3ec;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">🥗</div>'
  +'<div><div style="font-size:18px;font-weight:800;color:var(--g5);line-height:1">'+(planKcal||'—')+'</div>'
  +'<div style="font-size:10px;color:var(--n4);margin-top:2px">kcal prescritas</div></div></div>';
 // Água
 html += '<div class="card" style="padding:14px;display:flex;align-items:center;gap:10px">'
  +'<div style="width:38px;height:38px;border-radius:10px;background:#eff6ff;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">💧</div>'
  +'<div><div style="font-size:18px;font-weight:800;color:#3b82f6;line-height:1">'+(p.agua||2.0)+'L</div>'
  +'<div style="font-size:10px;color:var(--n4);margin-top:2px">meta de água</div></div></div>';
 // Tarefas
 html += '<div class="card" style="padding:14px;display:flex;align-items:center;gap:10px">'
  +'<div style="width:38px;height:38px;border-radius:10px;background:#fffbeb;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">✅</div>'
  +'<div><div style="font-size:18px;font-weight:800;color:#d97706;line-height:1">'+done+'/'+totalTasks+'</div>'
  +'<div style="font-size:10px;color:var(--n4);margin-top:2px">tarefas</div></div></div>';
 html += '</div>';

 // Macros + Next appt row
 html += '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:16px">';
 // Macros card
 html += '<div class="card"><div class="ch"><span class="ct">Macros Prescritos</span></div>';
 if (planKcal) {
  html += '<div style="text-align:center;margin-bottom:10px">'
   +'<div style="font-size:24px;font-weight:900;color:var(--g5)">'+planKcal+' kcal</div>'
   +'<div style="font-size:11px;color:var(--n4)">Meta: '+prescKcal+' kcal</div></div>'
   +'<div style="display:flex;flex-direction:column;gap:7px">';
  [['Proteínas','#3b82f6',planProt,150,planProt.toFixed(0)+'g'],
   ['Carboidratos','#f59e0b',planCarb,250,planCarb.toFixed(0)+'g'],
   ['Gorduras','#ef4444',planGord,65,planGord.toFixed(0)+'g']].forEach(function(r){
   var pct = r[2]>0 ? Math.min(Math.round(r[2]/r[3]*100),100) : 0;
   html += '<div style="display:flex;align-items:center;gap:7px">'
    +'<span style="font-size:10.5px;font-weight:700;min-width:80px;color:'+r[1]+'">'+r[0]+'</span>'
    +'<div style="flex:1;height:6px;background:var(--n2);border-radius:99px;overflow:hidden">'
    +'<div style="width:'+pct+'%;height:100%;background:'+r[1]+';border-radius:99px"></div></div>'
    +'<span style="font-size:10px;font-weight:800;color:'+r[1]+';min-width:28px;text-align:right">'+r[4]+'</span></div>';
  });
  html += '</div>';
 } else {
  html += '<div style="text-align:center;padding:20px;color:var(--n4);font-size:12px">Plano não prescrito ainda.<br>Aguarde orientação do nutricionista.</div>';
 }
 html += '</div>';
 // Next consult card
 html += '<div class="card"><div class="ch"><span class="ct">Próxima Consulta</span></div>'
  +'<div style="text-align:center;padding:14px 0">'
  +'<div style="font-size:30px;margin-bottom:8px">📅</div>';
 if (nextAppt) {
  var nd = new Date(nextAppt.isoDate||nextAppt.date||'');
  html += '<div style="font-size:17px;font-weight:800;color:var(--n9)">'+nd.toLocaleDateString('pt-BR',{day:'numeric',month:'long'})+'</div>';
  if (nextAppt.time) html += '<div style="font-size:12px;color:var(--n5);margin-top:4px">⏰ '+escHtml(nextAppt.time)+'</div>';
  if (nextAppt.type) html += '<div style="font-size:11px;color:var(--n4);margin-top:3px">'+escHtml(nextAppt.type)+'</div>';
 } else {
  html += '<div style="font-size:13px;color:var(--n5)">Nenhuma agendada</div>'
   +'<div style="font-size:11px;color:var(--n4);margin-top:4px">Contate seu nutricionista para agendar</div>';
 }
 html += '</div><div class="alert alert-y" style="margin-bottom:0"><span>💡 Registre seu diário alimentar antes da consulta!</span></div></div>';
 html += '</div>';

 // Supplements + achievement
 if (suplAtivos > 0) {
  html += '<div class="card" style="margin-bottom:12px">'
   +'<div class="ch"><span class="ct">💊 Suplementos Ativos</span>'
   +'<button class="btn btn-ghost btn-sm" onclick="goP(\'psupl\',document.getElementById(\'pi-supl\'))">Ver todos →</button></div>'
   +'<div style="display:flex;flex-wrap:wrap;gap:6px">'
   +(p.suplementos||[]).filter(function(s){return s.aderindo!==false;}).slice(0,6).map(function(s){
    return '<span style="font-size:11px;font-weight:600;background:var(--g0);border:1px solid var(--g2);color:var(--g6);border-radius:8px;padding:4px 10px">💊 '+escHtml(s.nome||'')+(s.dose?' · '+escHtml(s.dose):'')+'</span>';
   }).join('')
   +'</div></div>';
 }

 // Achievement
 if (loss >= 5) {
  html += '<div class="ach"><div class="ach-ico">🏆</div><div>'
   +'<div class="ach-t">Conquista: −'+loss.toFixed(1)+' kg!</div>'
   +'<div class="ach-d">Parabéns pela consistência! Objetivo sendo alcançado.</div>'
   +'</div></div>';
 }

 return html;
}
function rPPlan(){
 var p = selPat || (cu&&cu.role==='pac' ? pats.find(function(x){return x.email===cu.email||x._uid===cu.id;}) : null) || pats[0];
 if(!p) return '<div style="padding:60px;text-align:center;color:var(--n4)">Nenhum paciente encontrado.</div>';
 var planSrc = p.plans&&p.plans.length ? p.plans[0].mealData : (p.meals||[]);
 if(!planSrc||!planSrc.length){
  planSrc = [
   {name:'Café da manhã',em:'☀️',items:[{fid:6,qty:150},{fid:11,qty:50}]},
   {name:'Almoço',em:'🍽️',items:[{fid:1,qty:120},{fid:11,qty:80},{fid:13,qty:80}]},
   {name:'Lanche',em:'🍎',items:[{fid:41,qty:1},{fid:19,qty:30}]},
   {name:'Jantar',em:'🌙',items:[{fid:3,qty:120},{fid:12,qty:80}]}
  ];
 }
 var _planIsDemo = !(p.plans&&p.plans.length>0);
 var today = new Date().getDay();
 // Build weekly view from plan (repeat same plan for 7 days with small variation note)
 var dayNames = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'];
 var html = '<div style="margin-bottom:14px">';
 // Show the plan meals
 var totalKcal=0, totalProt=0, totalCarb=0, totalGord=0;
 planSrc.forEach(function(meal){
  (meal.items||[]).forEach(function(it){
   var f=FOOD_DB.find(function(x){return x.id===it.fid;});
   if(f){var fac=(it.qty||100)/100;totalKcal+=Math.round(f.k*fac);totalProt+=+(f.p*fac).toFixed(1);totalCarb+=+(f.c*fac).toFixed(1);totalGord+=+(f.g*fac).toFixed(1);}
  });
 });
 // Macros summary
 html += _planIsDemo ? '<div class="alert alert-y" style="margin-bottom:14px"><span>📋 Plano modelo — seu nutricionista ainda não prescreveu um plano personalizado.</span></div>' : '';
 html += '<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:18px">';
 [['🔥',totalKcal+' kcal','Energia','#e85a0a'],
  ['🥩',totalProt.toFixed(0)+'g','Proteína','#3b82f6'],
  ['🌾',totalCarb.toFixed(0)+'g','Carbs','#f59e0b'],
  ['🥑',totalGord.toFixed(0)+'g','Gordura','#10b981']].forEach(function(m){
  html+='<div style="background:#fff;border:1.5px solid var(--n2);border-radius:12px;padding:12px;text-align:center">'
   +'<div style="font-size:20px;margin-bottom:4px">'+m[0]+'</div>'
   +'<div style="font-family:var(--in);font-size:18px;font-weight:800;color:'+m[3]+'">'+m[1]+'</div>'
   +'<div style="font-size:10.5px;color:var(--n4);margin-top:2px">'+m[2]+'</div></div>';
 });
 html += '</div>';
 // Meals
 planSrc.forEach(function(meal){
  var mealKcal=0;
  (meal.items||[]).forEach(function(it){var f=FOOD_DB.find(function(x){return x.id===it.fid;});if(f){var fac=(it.qty||100)/100;mealKcal+=Math.round(f.k*fac);}});
  html += '<div style="background:#fff;border:1.5px solid var(--n2);border-radius:14px;padding:14px 16px;margin-bottom:10px">';
  html += '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">';
  html += '<div style="font-weight:800;font-size:13.5px;color:var(--n9)">'+(meal.em||'🍽️')+' '+(meal.name||meal.n||'Refeição')+'</div>';
  html += '<span style="font-size:11px;font-weight:700;color:var(--g5);background:var(--g0);padding:3px 10px;border-radius:99px">'+mealKcal+' kcal</span>';
  html += '</div>';
  (meal.items||[]).forEach(function(it){
   var f=FOOD_DB.find(function(x){return x.id===it.fid;});
   if(!f)return;
   var fac=(it.qty||100)/100;
   html+='<div style="display:flex;align-items:center;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--n1)">'
    +'<div style="display:flex;align-items:center;gap:8px">'
    +'<span style="font-size:15px">'+(f.e||'🍽️')+'</span>'
    +'<span style="font-size:12.5px;color:var(--n7)">'+escHtml(f.n)+'</span></div>'
    +'<div style="display:flex;gap:12px;font-size:11px;color:var(--n5)">'
    +'<span>'+it.qty+'g</span>'
    +'<span style="font-weight:700;color:var(--n8)">'+Math.round(f.k*fac)+' kcal</span>'
    +'</div></div>';
  });
  html += '</div>';
 });
 html += '</div>';
 // Orientações
 var orientacoes = (p.orientacoes && p.orientacoes.length) ? p.orientacoes : ['Beba 2L de água por dia','Mastigue devagar','Evite telas durante refeições','Inclua proteína em todas as refeições','Prefira temperos naturais'];
 html += '<div class="card" style="background:var(--y0);border-color:var(--y3)"><div class="ch"><span class="ct" style="color:#78350f">💡 Orientações do Nutricionista</span></div>'
  +'<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;font-size:12.5px;color:#92400e;line-height:1.8">'
  +orientacoes.map(function(o){return '<div>• '+escHtml(o)+'</div>';}).join('')
  +'</div></div>';
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

function rPDiary(){
 var p=_getPacPatient();
 if(!p) return '<div style="text-align:center;padding:48px;color:var(--n4)">Faça login para acessar o diário.</div>';
 var diary=p.diary||[];
 var today=new Date();
 var todayISO=today.toISOString().slice(0,10);
 var planKcal=(p.plans&&p.plans[0])?p.plans[0].kcal||0:0;

 // Find or create today entry
 var todayEntry=diary.find(function(e){return(e.isoDate||e.date||'')=== todayISO;});
 var todayKcal=todayEntry?todayEntry.totalKcal||0:0;
 var pct=planKcal?Math.min(100,Math.round(todayKcal/planKcal*100)):0;
 var remaining=planKcal?planKcal-todayKcal:0;

 var html='';

 // ── Today summary card
 html+='<div class="card" style="margin-bottom:14px">'
  +'<div class="ch"><span class="ct">Hoje — '+today.toLocaleDateString("pt-BR",{weekday:"long",day:"2-digit",month:"long"})+'</span>'
  +'<button class="btn btn-p btn-sm" onclick="_openAddMeal()">+ Registrar refeição</button></div>'
  +(planKcal?
   '<div style="margin-bottom:12px">'
   +'<div style="display:flex;justify-content:space-between;font-size:11px;color:var(--n5);margin-bottom:4px">'
   +'<span>'+todayKcal+' kcal consumidas</span>'
   +'<span>Meta: '+planKcal+' kcal</span></div>'
   +'<div style="height:10px;background:var(--n1);border-radius:99px;overflow:hidden">'
   +'<div style="width:'+pct+'%;height:100%;background:'+(pct>100?'#ef4444':'var(--g4)')+';border-radius:99px;transition:width .5s"></div></div>'
   +'<div style="font-size:11px;color:'+(remaining>0?'var(--n4)':'#ef4444')+';margin-top:4px;text-align:right">'
   +(remaining>0?'Faltam '+remaining+' kcal':'Acima da meta em '+Math.abs(remaining)+' kcal')+'</div>'
   +'</div>':'')
  +(todayEntry&&todayEntry.meals&&todayEntry.meals.length?
   todayEntry.meals.map(function(m,i){
    return'<div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-top:1px solid var(--n1)">'
     +'<div style="font-size:20px">'+( m.emoji||'🍽️')+'</div>'
     +'<div style="flex:1"><div style="font-size:12.5px;font-weight:700;color:var(--n8)">'+escHtml(m.name)+'</div>'
     +(m.foods&&m.foods.length?'<div style="font-size:11px;color:var(--n4)">'+m.foods.map(function(f){return escHtml(f);}).join(', ')+'</div>':'')
     +'</div>'
     +'<div style="font-family:var(--in);font-size:13px;font-weight:700;color:var(--g4)">'+m.kcal+' kcal</div>'
     +'<button onclick="_removeDiaryMeal(\''+todayISO+'\','+i+')" style="background:none;border:none;cursor:pointer;color:var(--n3);font-size:15px;padding:0 4px">✕</button>'
     +'</div>';
   }).join('')
   :'<div style="text-align:center;padding:16px;color:var(--n4);font-size:12px">Nenhuma refeição registrada hoje.<br>Toque em "+ Registrar refeição" para começar.</div>')
  +'</div>';

 // ── Weekly bar chart
 var diary7=diary.slice(-7);
 if(diary7.length>0){
  var maxK=Math.max.apply(null,diary7.map(function(d){return d.totalKcal||0;}));
  maxK=Math.max(maxK,planKcal||2000);
  var dNames=['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'];
  var wAvg=Math.round(diary7.reduce(function(s,d){return s+(d.totalKcal||0);},0)/diary7.length);
  html+='<div class="card" style="margin-bottom:14px"><div class="ch" style="margin-bottom:8px">'
   +'<span class="ct">Últimos 7 dias</span>'
   +'<span style="font-size:11px;color:var(--n4)">Média: <strong>'+wAvg+' kcal</strong></span></div>'
   +'<div style="display:flex;align-items:flex-end;gap:4px;height:80px">';
  diary7.forEach(function(d){
   var h=Math.max(3,Math.round((d.totalKcal||0)/maxK*76));
   var over=(planKcal&&(d.totalKcal||0)>planKcal);
   var dd=new Date(d.isoDate||'');
   html+='<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:2px">'
    +'<div style="font-size:8px;color:var(--n4)">'+(d.totalKcal||'—')+'</div>'
    +'<div style="width:100%;height:'+h+'px;background:'+(over?'#ef4444':(d.totalKcal?'var(--g4)':'var(--n2)'))+';border-radius:3px 3px 0 0"></div>'
    +'<div style="font-size:9px;color:var(--n5)">'+(isNaN(dd)?'':dNames[dd.getDay()])+'</div>'
    +'</div>';
  });
  html+='</div></div>';
 }

 // ── History
 var pastDays=diary.slice().reverse().filter(function(d){return(d.isoDate||d.date||'')!==todayISO;}).slice(0,10);
 if(pastDays.length){
  html+='<div class="card"><div class="ch"><span class="ct">Histórico</span></div>';
  pastDays.forEach(function(d){
   var dt=new Date(d.isoDate||'');
   html+='<div style="display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid var(--n1)">'
    +'<div style="min-width:80px"><div style="font-size:12px;font-weight:700;color:var(--n8)">'
    +(isNaN(dt)?d.isoDate:dt.toLocaleDateString('pt-BR',{day:'2-digit',month:'short'}))+'</div>'
    +(d.meals&&d.meals.length?'<div style="font-size:10px;color:var(--n4)">'+d.meals.length+' refeições</div>':'')
    +'</div>'
    +'<div style="flex:1;height:6px;background:var(--n1);border-radius:99px;overflow:hidden">'
    +'<div style="width:'+Math.min(100,planKcal?(d.totalKcal||0)/planKcal*100:50)+'%;height:100%;background:var(--g4);border-radius:99px"></div></div>'
    +'<div style="font-family:var(--in);font-size:13px;font-weight:700;color:var(--n7);min-width:60px;text-align:right">'+(d.totalKcal||0)+' kcal</div>'
    +'</div>';
  });
  html+='</div>';
 }

 return html;
}


function _diaryPhotoPreview(ev) {
  var file = ev.target.files[0];
  if (!file) return;
  if (file.size > 6 * 1024 * 1024) { showToast('Foto muito grande (máx 6MB)', 'w'); return; }
  var reader = new FileReader();
  reader.onload = function (e) {
    window._diaryPhotoData = e.target.result;
    var prev = document.getElementById('d-photo-preview');
    var img = document.getElementById('d-photo-img');
    if (prev && img) { img.src = e.target.result; prev.style.display = 'block'; }
    var lbl = document.getElementById('d-photo-lbl');
    if (lbl) lbl.style.display = 'none';
  };
  reader.readAsDataURL(file);
}
function _diaryRemovePhoto() {
  window._diaryPhotoData = null;
  var prev = document.getElementById('d-photo-preview');
  var inp = document.getElementById('d-photo-inp');
  var lbl = document.getElementById('d-photo-lbl');
  if (prev) prev.style.display = 'none';
  if (inp) inp.value = '';
  if (lbl) lbl.style.display = 'flex';
}

function _diarySetPhotoSrcs() {
  var p = _getPacPatient();
  if (!p || !p.diary) return;
  var imgs = document.querySelectorAll('[data-ph="1"]');
  var allMeals = [];
  p.diary.forEach(function (e) { (e.refeicoes || []).forEach(function (r) { if (r.photo) allMeals.push(r); }); });
  var photoIdx = 0;
  imgs.forEach(function (img) {
    if (allMeals[photoIdx] && allMeals[photoIdx].photo) {
      img.src = allMeals[photoIdx].photo;
      img.style.cursor = 'zoom-in';
      img.onclick = function () { _dvLightboxSrc(allMeals[photoIdx].photo); };
    }
    photoIdx++;
  });
}
function _dvLightboxSrc(src) {
  var lb = document.createElement('div');
  lb.className = 'dv-lightbox';
  lb.onclick = function () { document.body.removeChild(lb); };
  var img = document.createElement('img'); img.src = src;
  lb.appendChild(img); document.body.appendChild(lb);
}
function _dvLightboxDirect(imgEl) {
  var src = decodeURIComponent(imgEl.getAttribute('data-fullsrc'));
  var lb = document.createElement('div');
  lb.className = 'dv-lightbox';
  lb.onclick = function () { document.body.removeChild(lb); };
  var img = document.createElement('img');
  img.src = src;
  lb.appendChild(img);
  document.body.appendChild(lb);
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
  setTimeout(_diarySetPhotoSrcs, 80);
}
function openDiaryAdd() { document.getElementById('d-items').focus(); }

function rPTask(){
 var catMap={s:'tc-s',u:'tc-u',e:'tc-e',g:'tc-g'};var catLabel={s:'Saúde',u:'Suplemento',e:'Exame',g:'Geral'};
 var pending=tasks.filter(function(t){return!t.done});var done=tasks.filter(function(t){return t.done});
 var pct=tasks.length?Math.round(done.length/tasks.length*100):0;
 var circ=2*Math.PI*44,off=circ*(1-pct/100);
 return'<div style="display:grid;grid-template-columns:minmax(0,1fr) min(280px,100%);gap:14px">'
 +'<div><div class="card" style="margin-bottom:10px"><div class="ch"><span class="ct">Pendentes</span><span class="cs">'+pending.length+' itens</span></div>'
 +(pending.length?pending.map(function(t){return'<div class="task-item"><div class="task-chk'+(t.done?' checked':'')+'" onclick="toggleTask('+t.id+')">'+(t.done?'✓':'')+'</div><span class="task-txt">'+t.text+'</span><span class="task-cat '+catMap[t.cat]+'">'+catLabel[t.cat]+'</span><button class="task-del" onclick="delTask('+t.id+')">×</button></div>';}).join(''):'<p style="font-size:12.5px;color:var(--n4);padding:6px 0">Nenhuma tarefa pendente 🎉</p>')
 +'</div><div class="card" style="margin-bottom:10px"><div class="ch"><span class="ct">Concluídas</span><span class="cs" style="color:var(--g5)">'+done.length+' itens</span></div>'
 +done.map(function(t){return'<div class="task-item done"><div class="task-chk checked" onclick="toggleTask('+t.id+')">✓</div><span class="task-txt">'+t.text+'</span><span class="task-cat '+catMap[t.cat]+'">'+catLabel[t.cat]+'</span><button class="task-del" onclick="delTask('+t.id+')">×</button></div>';}).join('')
 +'</div><div class="card"><div class="ch"><span class="ct">Adicionar Tarefa</span></div><div style="display:flex;gap:7px;margin-top:4px"><input class="inp" id="new-task" placeholder="Nova tarefa…" onkeydown="if(event.key===\'Enter\')addTask()" style="flex:1"/><select class="sel" id="new-cat" style="width:auto;padding:9px 10px"><option value="g">Geral</option><option value="s">Saúde</option><option value="u">Suplemento</option><option value="e">Exame</option></select><button class="btn btn-p" onclick="addTask()">+ Add</button></div></div></div>'
 +'<div class="card" style="text-align:center;padding:28px 18px"><div style="font-family:var(--jk);font-size:10px;font-weight:700;color:var(--n4);letter-spacing:.1em;text-transform:uppercase;margin-bottom:16px">Progresso</div>'
 +'<div style="position:relative;width:100px;height:100px;margin:0 auto 12px"><svg width="100" height="100" viewBox="0 0 100 100"><defs><linearGradient id="tg" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#e85a0a"/><stop offset="100%" stop-color="#f9a868"/></linearGradient></defs><circle cx="50" cy="50" r="44" fill="none" stroke="var(--n2)" stroke-width="8"/><circle cx="50" cy="50" r="44" fill="none" stroke="url(#tg)" stroke-width="8" stroke-linecap="round" stroke-dasharray="'+circ.toFixed(1)+'" stroke-dashoffset="'+off.toFixed(1)+'" transform="rotate(-90 50 50)" style="transition:stroke-dashoffset .9s ease"/></svg><div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center"><div style="font-family:var(--in);font-size:22px;font-weight:800;color:var(--n9)">'+pct+'%</div></div></div>'
 +'<div style="font-size:12px;font-weight:600;color:var(--n7)">'+done.length+' de '+tasks.length+' tarefas</div></div></div>';
}
function toggleTask(id) { tasks = tasks.map(function (t) { return t.id === id ? Object.assign({}, t, { done: !t.done }) : t }); DB.save(); goP('ptask', document.getElementById('pi-task')); showToast(tasks.find(function (t) { return t.id === id }).done ? 'Tarefa concluída! ✓' : 'Tarefa reaberta', 's'); }
function delTask(id) { tasks = tasks.filter(function (t) { return t.id !== id }); DB.save(); goP('ptask', document.getElementById('pi-task')); showToast('Tarefa removida', 'i'); }
function addTask() { var inp = document.getElementById('new-task'); var sel = document.getElementById('new-cat'); if (!inp || !inp.value.trim()) { showToast('Digite o texto da tarefa', 'w'); return; } tasks.push({ id: taskCt++, text: inp.value.trim(), cat: sel.value, done: false }); DB.save(); goP('ptask', document.getElementById('pi-task')); showToast('Tarefa adicionada!', 's'); }

function rPEv(){
 var p=selPat||_getPacPatient()||pats[0];if(!p){return '<div style="padding:40px;text-align:center;color:var(--n4)">Nenhum dado disponível.</div>';}var hist=[...p.historico].reverse();var loss=p.wStart-p.w;
 var ws=hist.map(function(h){return h.peso||0}).filter(function(w){return w>0;});
 if(!ws.length){return'<div style="padding:40px;text-align:center"><div style="font-size:40px;margin-bottom:12px">📈</div><div style="font-weight:700;color:var(--n7)">Nenhuma medida ainda</div><div style="font-size:12px;color:var(--n4);margin-top:6px">Seu nutricionista vai registrar suas evoluções nas consultas.</div></div>';}
 var mn=Math.min.apply(null,ws)-1,mx=Math.max.apply(null,ws)+1,nf=hist.length,cw=480,ch=130;
 var pts=hist.map(function(h,i){var x=20+i*(cw-40)/(nf>1?nf-1:1);var y=10+(mx-h.peso)/(mx-mn)*(ch-20);return{x:x.toFixed(1),y:y.toFixed(1),h:h}});
 var line=pts.map(function(p,i){return(i===0?'M':'L')+p.x+','+p.y}).join(' ');
 var area=pts.map(function(p,i){return(i===0?'M':'L')+p.x+','+p.y}).join(' ')+' L'+pts[pts.length-1].x+','+(ch+5)+' L'+pts[0].x+','+(ch+5)+' Z';
 return(loss>=5?'<div class="ach"><div class="ach-ico">🏆</div><div><div class="ach-t">Conquista: −'+loss.toFixed(1)+' kg!</div><div class="ach-d">Parabéns pela dedicação! Continue assim.</div></div></div>':'')
 +'<div class="ev-metrics" style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:14px">'
 +[['Peso Atual',p.w+' kg',(loss>=0?'↓ −'+loss.toFixed(1)+' kg':'↑ +'+Math.abs(loss).toFixed(1)+' kg')],['IMC',p.bmi,(p.bmi<25?'Eutrófico ✓':'Monitorando')],['Cintura',p.historico[0].cintura+' cm','Meta: <80cm'],['% Gordura',p.fat+'%','Registrado']].map(function(m){return'<div class="ev-m"><div style="font-size:10px;color:var(--n4);text-transform:uppercase;letter-spacing:.05em;font-family:var(--jk);font-weight:700">'+m[0]+'</div><div style="font-family:var(--in);font-size:22px;font-weight:800;letter-spacing:-.5px;color:var(--n9);margin-top:4px">'+m[1]+'</div><div class="ev-m-d">'+m[2]+'</div></div>';}).join('')+'</div>'
 +'<div class="card" style="margin-bottom:12px"><div class="ch"><span class="ct">Evolução do Peso</span></div><svg viewBox="0 0 '+cw+' '+(ch+15)+'" width="100%" height="'+(ch+15)+'"><defs><linearGradient id="peg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#22c55e" stop-opacity=".18"/><stop offset="100%" stop-color="#22c55e" stop-opacity="0"/></linearGradient></defs><path d="'+area+'" fill="url(#peg)"/><path d="'+line+'" fill="none" stroke="#22c55e" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>'+pts.map(function(p){return'<circle cx="'+p.x+'" cy="'+p.y+'" r="4" fill="#22c55e" stroke="#fff" stroke-width="2"/>';}).join('')+pts.map(function(p){return'<text x="'+p.x+'" y="'+(ch+14)+'" text-anchor="middle" font-size="8" fill="#9ca3af" font-family="Inter">'+p.h.data.slice(0,5)+'</text>';}).join('')+'</svg></div>'
 +'<div class="card" style="padding:0;overflow:hidden"><div style="overflow-x:auto;-webkit-overflow-scrolling:touch"><table class="tbl"><thead><tr><th>Data</th><th>Peso</th><th>IMC</th><th>Cintura</th><th>% Gordura</th></tr></thead><tbody>'+p.historico.map(function(h){return'<tr><td>'+h.data+'</td><td><strong>'+h.peso+' kg</strong></td><td>'+h.imc+'</td><td>'+h.cintura+' cm</td><td>'+h.fat+'%</td></tr>';}).join('')+'</tbody></table></div>';
}

// ─── PDF EXPORT ───

// ── EXPORTAÇÃO GOOGLE CALENDAR / iCAL ──────────────────────────

// ── LGPD — Lei Geral de Proteção de Dados ──────────────────────
function _lgpdConsent() {
  var p = _anamPat || selPat || pats[0]; if (!p) return;
  if (!p.anamnese) p.anamnese = {};
  var now = new Date();
  p.anamnese.lgpd_consent = true;
  p.anamnese.lgpd_date = now.toLocaleDateString('pt-BR') + ' às ' + now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  p.anamnese.lgpd_ip = 'local';
  DB.save();
  showToast('Consentimento LGPD registrado ✅', 's');
  goP('anam', document.querySelector('[onclick*=\'anam\']'));
}

function _lgpdRevoke() {
  var p = _anamPat || selPat || pats[0]; if (!p) return;
  if (!confirm('Revogar consentimento de ' + p.n + '? Isso não elimina os dados, mas registra a revogação.')) return;
  if (!p.anamnese) p.anamnese = {};
  p.anamnese.lgpd_consent = false;
  p.anamnese.lgpd_revoked = new Date().toLocaleDateString('pt-BR');
  DB.save();
  showToast('Consentimento revogado. Dados mantidos conforme CFN.', 'w');
  goP('anam', document.querySelector('[onclick*=\'anam\']'));
}

function _lgpdExport() {
  var p = _anamPat || selPat || pats[0]; if (!p) return;
  // Export all patient data as JSON (portability right)
  var exportData = {
    exportDate: new Date().toISOString(),
    paciente: { nome: p.n, idade: p.age, sexo: p.sex, peso: p.w, altura: p.h, imc: p.bmi },
    anamnese: p.anamnese || {},
    exames: p.exams || {},
    historico: p.historico || [],
    diario: p.diary || [],
    consultas: p.appointments || [],
    lgpd: { finalidade: 'Acompanhamento nutricional clínico', baseLegal: 'Art.7 VIII LGPD', retencao: '5 anos (CFN 600/2018)' }
  };
  var blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.href = url;
  a.download = 'dieton_dados_' + p.n.replace(/\s+/g, '_') + '.json';
  a.click();
  URL.revokeObjectURL(url);
  showToast('Dados do paciente exportados (direito de portabilidade LGPD)', 's');
}

function _lgpdDelete() {
  var p = _anamPat || selPat || pats[0]; if (!p) return;
  if (!confirm('⚠️ ATENÇÃO: Eliminar todos os dados de ' + p.n + '?\n\nEsta ação é irreversível. Confirma?')) return;
  if (!confirm('Confirmação final: eliminar TODOS os dados de ' + p.n + '?')) return;
  // Clear sensitive data, keep minimal record
  p.anamnese = { lgpd_deleted: true, lgpd_delete_date: new Date().toISOString() };
  p.historico = []; p.diary = []; p.appointments = []; p.exams = { vitd: 0, gli: 0, col: 0, tsh: 0, hem: 0, fer: 0, tgo: 0, tgp: 0 };
  p.n = '[Dados eliminados - LGPD]';
  DB.save();
  showToast('Dados eliminados conforme solicitação LGPD', 's');
  goP('pat', document.getElementById('ni-pat'));
}
function exportICS() {
  var lines = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//DietOn//PT', 'CALSCALE:GREGORIAN', 'METHOD:PUBLISH'];
  var hasEvents = false;

  pats.forEach(function (p) {
    (p.appointments || []).forEach(function (a) {
      if (!a.isoDate) return;
      hasEvents = true;
      var dt = new Date(a.isoDate + 'T' + (a.hour || '08:00') + ':00');
      var dtEnd = new Date(dt.getTime() + 60 * 60 * 1000); // +1h
      function pad(n) { return n < 10 ? '0' + n : n; }
      function fmtDT(d) {
        return d.getFullYear() + pad(d.getMonth() + 1) + pad(d.getDate())
          + 'T' + pad(d.getHours()) + pad(d.getMinutes()) + '00';
      }
      var uid = a.id || ('dieton-' + p.id + '-' + dt.getTime()) + '@dieton.app';
      lines.push('BEGIN:VEVENT');
      lines.push('UID:' + uid);
      lines.push('DTSTART:' + fmtDT(dt));
      lines.push('DTEND:' + fmtDT(dtEnd));
      lines.push('SUMMARY:Consulta – ' + p.n);
      lines.push('DESCRIPTION:Paciente: ' + p.n + '\\nTipo: ' + (a.type || 'Consulta') + '\\nDietOn');
      lines.push('STATUS:' + (a.status === 'done' ? 'COMPLETED' : 'CONFIRMED'));
      lines.push('END:VEVENT');
    });
  });

  lines.push('END:VCALENDAR');

  if (!hasEvents) { showToast('Nenhuma consulta agendada para exportar', 'w'); return; }

  var blob = new Blob([lines.join('\r\n')], { type: 'text/calendar;charset=utf-8' });
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.href = url;
  a.download = 'dieton_agenda.ics';
  a.click();
  URL.revokeObjectURL(url);
  showToast('Arquivo .ics baixado! Importe no Google Calendar ou iCal', 's');
}
function exportPDF() {
  var p = selPat || pats[0];
  if (!p) { showToast('Selecione um paciente', 'w'); return; }

  var now = new Date();
  var dStr = now.getDate() + '/' + (now.getMonth() + 1) + '/' + now.getFullYear();

  // Calcular totais do plano atual
  var tk = 0, tp = 0, tc = 0, tf = 0;
  meals.forEach(function (m) { m.items.forEach(function (it) { tk += it.k; tp += it.p || 0; tc += it.c || 0; tf += it.g || 0; }); });

  // Evolução de peso
  var hist = p.historico || [];
  var firstW = hist.length ? hist[hist.length - 1].peso : p.wStart;
  var delta = (p.w - firstW).toFixed(1);
  var deltaSign = delta > 0 ? '+' : '';

  // Alertas de exames
  var labAlerts = [];
  var ex = p.exams || {};
  if (ex.vitd && ex.vitd < 30) labAlerts.push({ n: 'Vitamina D', v: ex.vitd + ' ng/mL', ref: '<30', status: 'Baixa' });
  if (ex.gli && ex.gli > 100) labAlerts.push({ n: 'Glicemia', v: ex.gli + ' mg/dL', ref: '>100', status: 'Elevada' });
  if (ex.col && ex.col > 200) labAlerts.push({ n: 'Colesterol', v: ex.col + ' mg/dL', ref: '>200', status: 'Alto' });
  if (ex.hem && ex.hem < 12) labAlerts.push({ n: 'Hemoglobina', v: ex.hem + ' g/dL', ref: '<12', status: 'Baixa' });
  if (ex.fer && ex.fer < 20) labAlerts.push({ n: 'Ferritina', v: ex.fer + ' ng/mL', ref: '<20', status: 'Baixa' });

  // Notas clínicas
  var notas = p.notas || [];

  // Nutricionista
  var nutName = cu ? cu.name : 'Nutricionista';
  var nutCrn = cu ? cu.crn : '';

  var html = '<!DOCTYPE html><html><head><meta charset="UTF-8"/>'
    + '<style>'
    + '*{margin:0;padding:0;box-sizing:border-box}'
    + 'body{font-family:Inter,Arial,sans-serif;color:#1a1210;background:#fff;font-size:11pt}'
    + '@page{margin:18mm 16mm}'
    + '.header{display:flex;align-items:center;justify-content:space-between;border-bottom:2.5px solid #e85a0a;padding-bottom:12px;margin-bottom:18px}'
    + '.logo{font-family:Arial Black,sans-serif;font-size:22pt;font-weight:900;color:#e85a0a;letter-spacing:-1px}'
    + '.logo span{color:#1a1210}'
    + '.hinfo{text-align:right;font-size:8.5pt;color:#78685a}'
    + '.section{margin-bottom:18px}'
    + '.sec-title{font-size:9pt;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:#e85a0a;border-left:3px solid #e85a0a;padding-left:8px;margin-bottom:8px}'
    + '.pat-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px}'
    + '.pat-field{background:#faf7f4;border-radius:6px;padding:7px 10px}'
    + '.pat-label{font-size:7.5pt;color:#a89080;font-weight:700;letter-spacing:.04em;text-transform:uppercase}'
    + '.pat-value{font-size:10pt;font-weight:700;color:#1a1210;margin-top:2px}'
    + '.metrics{display:grid;grid-template-columns:repeat(5,1fr);gap:8px;margin-bottom:12px}'
    + '.metric{background:#fff3ec;border-radius:8px;padding:8px 10px;text-align:center}'
    + '.metric-val{font-size:16pt;font-weight:800;color:#e85a0a}'
    + '.metric-lbl{font-size:7.5pt;color:#a89080;margin-top:2px}'
    + '.meal-card{border:1px solid #e8ddd5;border-radius:6px;margin-bottom:6px;overflow:hidden}'
    + '.meal-head{background:#faf7f4;padding:6px 10px;font-weight:700;font-size:9pt;display:flex;justify-content:space-between}'
    + '.meal-item{display:flex;justify-content:space-between;padding:4px 10px;font-size:8.5pt;border-bottom:1px solid #f4eee8}'
    + '.meal-item:last-child{border-bottom:none}'
    + 'table{width:100%;border-collapse:collapse;font-size:8.5pt}'
    + 'th{background:#faf7f4;font-weight:700;padding:5px 8px;text-align:left;border-bottom:1.5px solid #e8ddd5;font-size:7.5pt;text-transform:uppercase;letter-spacing:.04em}'
    + 'td{padding:5px 8px;border-bottom:1px solid #f4eee8}'
    + '.alert-row{background:#fef2f2;color:#dc2626}'
    + '.ok-row{color:#16a34a}'
    + '.footer{border-top:1.5px solid #e8ddd5;padding-top:12px;display:flex;justify-content:space-between;align-items:flex-end;margin-top:24px}'
    + '.sign-line{border-top:1px solid #1a1210;width:200px;text-align:center;padding-top:4px;font-size:8.5pt;color:#3d2e1f}'
    + '.note-item{background:#faf7f4;border-left:3px solid #e85a0a;border-radius:0 6px 6px 0;padding:7px 10px;margin-bottom:6px}'
    + '.note-date{font-size:7.5pt;color:#a89080;font-weight:700;margin-bottom:3px}'
    + '.note-text{font-size:9pt;color:#3d2e1f;line-height:1.6}'
    + '</style></head><body>'

    // Header
    + '<div class="header">'
    + '<div><div class="logo">Diet<span>On</span></div><div style="font-size:8pt;color:#a89080;margin-top:2px">Plataforma Clínica de Nutrição</div></div>'
    + '<div class="hinfo"><div style="font-weight:700;font-size:10pt;color:#1a1210">' + nutName + '</div><div>' + nutCrn + '</div><div>Emitido em: ' + dStr + '</div></div>'
    + '</div>'

    // Dados do paciente
    + '<div class="section">'
    + '<div class="sec-title">Identificação do Paciente</div>'
    + '<div class="pat-grid">'
    + '<div class="pat-field"><div class="pat-label">Nome</div><div class="pat-value">' + p.n + '</div></div>'
    + '<div class="pat-field"><div class="pat-label">Idade / Sexo</div><div class="pat-value">' + p.age + ' anos · ' + (p.sex === 'F' ? 'Feminino' : 'Masculino') + '</div></div>'
    + '<div class="pat-field"><div class="pat-label">Objetivo</div><div class="pat-value">' + p.goal + '</div></div>'
    + '<div class="pat-field"><div class="pat-label">Condições</div><div class="pat-value">' + (p.cond || '—') + '</div></div>'
    + '<div class="pat-field"><div class="pat-label">Alergias</div><div class="pat-value">' + (p.alerg || 'Nenhuma') + '</div></div>'
    + '<div class="pat-field"><div class="pat-label">Última consulta</div><div class="pat-value">' + p.last + '</div></div>'
    + '</div></div>'

    // Métricas
    + '<div class="section">'
    + '<div class="sec-title">Composição Corporal Atual</div>'
    + '<div class="metrics">'
    + '<div class="metric"><div class="metric-val">' + p.w + '</div><div class="metric-lbl">Peso (kg)</div></div>'
    + '<div class="metric"><div class="metric-val">' + p.h + '</div><div class="metric-lbl">Altura (cm)</div></div>'
    + '<div class="metric"><div class="metric-val">' + p.bmi + '</div><div class="metric-lbl">IMC</div></div>'
    + '<div class="metric"><div class="metric-val">' + p.fat + '%</div><div class="metric-lbl">% Gordura</div></div>'
    + '<div class="metric"><div class="metric-val" style="color:' + (delta < 0 ? '#16a34a' : '#dc2626') + '">' + deltaSign + delta + '</div><div class="metric-lbl">Δ Peso (kg)</div></div>'
    + '</div></div>'

    // Histórico
    + (hist.length ? '<div class="section"><div class="sec-title">Histórico de Evolução</div>'
      + '<table><thead><tr><th>Data</th><th>Peso (kg)</th><th>IMC</th><th>Cintura (cm)</th><th>% Gordura</th><th>Observação</th></tr></thead><tbody>'
      + hist.slice(-6).reverse().map(function (h) { return '<tr><td>' + h.data + '</td><td><strong>' + h.peso + '</strong></td><td>' + h.imc + '</td><td>' + h.cintura + '</td><td>' + h.fat + '</td><td style="color:#78685a">' + h.obs + '</td></tr>'; }).join('')
      + '</tbody></table></div>' : '')

    // Exames
    + (Object.keys(ex).some(function (k) { return ex[k]; }) ? '<div class="section"><div class="sec-title">Exames Laboratoriais</div>'
      + '<table><thead><tr><th>Exame</th><th>Resultado</th><th>Referência</th><th>Status</th></tr></thead><tbody>'
      + [['Glicemia', 'gli', 'mg/dL', 70, 100], ['Colesterol total', 'col', 'mg/dL', 0, 200], ['TSH', 'tsh', 'µUI/mL', 0.4, 4.0], ['Hemoglobina', 'hem', 'g/dL', 12, 16], ['Vitamina D', 'vitd', 'ng/mL', 30, 100], ['Ferritina', 'fer', 'ng/mL', 20, 200], ['TGO', 'tgo', 'U/L', 0, 40], ['TGP', 'tgp', 'U/L', 0, 41]].filter(function (r) { return ex[r[1]]; }).map(function (r) {
        var v = ex[r[1]]; var ok = v >= r[3] && v <= r[4];
        return '<tr class="' + (ok ? 'ok-row' : 'alert-row') + '"><td>' + r[0] + '</td><td><strong>' + v + '</strong></td><td>' + r[3] + (r[4] < 9999 ? '–' + r[4] : '+') + '</td><td>' + (ok ? '✓ Normal' : '⚠ Atenção') + '</td></tr>';
      }).join('') + '</tbody></table></div>' : '')

    // Plano alimentar
    + (meals.some(function (m) { return m.items.length; }) ? '<div class="section"><div class="sec-title">Plano Alimentar Prescrito</div>'
      + (tk ? '<div style="display:flex;gap:16px;margin-bottom:10px;flex-wrap:wrap">'
        + '<span style="font-size:8.5pt;color:#78685a">Total: <strong style="color:#e85a0a;font-size:11pt">' + Math.round(tk) + ' kcal</strong></span>'
        + '<span style="font-size:8.5pt;color:#78685a">Proteínas: <strong>' + tp.toFixed(1) + 'g</strong></span>'
        + '<span style="font-size:8.5pt;color:#78685a">Carboidratos: <strong>' + tc.toFixed(1) + 'g</strong></span>'
        + '<span style="font-size:8.5pt;color:#78685a">Gorduras: <strong>' + tf.toFixed(1) + 'g</strong></span>'
        + '</div>' : '')
      + meals.filter(function (m) { return m.items.length; }).map(function (m) {
        var mk = m.items.reduce(function (s, it) { return s + it.k; }, 0);
        return '<div class="meal-card">'
          + '<div class="meal-head"><span>' + m.em + ' ' + m.name + '</span><span style="color:#e85a0a">' + mk + ' kcal</span></div>'
          + m.items.map(function (it) { return '<div class="meal-item"><span>' + it.food.e + ' ' + it.food.n + '</span><span style="color:#78685a">' + it.qty + 'g · ' + it.k + ' kcal</span></div>'; }).join('')
          + '</div>';
      }).join('') + '</div>' : '')

    // Notas clínicas
    + (notas.length ? '<div class="section"><div class="sec-title">Notas Clínicas</div>'
      + notas.slice(0, 5).map(function (n) { return '<div class="note-item"><div class="note-date">' + n.data + '</div><div class="note-text">' + n.texto + '</div></div>'; }).join('')
      + '</div>' : '')

    // Alertas
    + (labAlerts.length ? '<div class="section"><div class="sec-title" style="color:#dc2626;border-left-color:#dc2626">⚠ Alertas Laboratoriais</div>'
      + '<div style="background:#fef2f2;border-radius:6px;padding:10px 14px">'
      + labAlerts.map(function (a) { return '<div style="display:flex;gap:12px;font-size:9pt;padding:3px 0;border-bottom:1px solid #fee2e2"><strong style="min-width:100px">' + a.n + '</strong><span style="color:#dc2626">' + a.v + '</span><span style="color:#78685a">(ref: ' + a.ref + ')</span></div>'; }).join('')
      + '</div></div>' : '')

    // Assinatura
    + '<div class="footer">'
    + '<div style="font-size:8pt;color:#a89080">Documento gerado pelo sistema DietOn em ' + dStr + '<br/>Este relatório não substitui consulta médica.</div>'
    + '<div style="text-align:center">'
    + '<div class="sign-line">' + nutName + '<br/><span style="font-size:7.5pt;color:#a89080">' + nutCrn + '</span></div>'
    + '</div>'
    + '</div>'
    + '</body></html>';

  var win = window.open('', '_blank');
  win.document.write(html);
  win.document.close();
  win.focus();
  setTimeout(function () { win.print(); }, 500);
}


function rptMensal() { showToast('Gerando relatório mensal em PDF…', 's'); setTimeout(function () { exportPDF(); }, 300); }

// ─── MODAL UTILS ───
function openM(id){var el=document.getElementById(id);if(el){el.classList.add('open');if(id==='m-meas'){var d=document.getElementById('mm-data');if(d)d.value=new Date().toISOString().split('T')[0];}
  if(id==='m-pat'){
   // Reset para modo cadastro (pode ter sido aberto em modo edição antes)
   var mt=el.querySelector('.mt');if(mt&&mt.textContent.startsWith('Editar'))mt.textContent='Cadastrar Paciente — Anamnese Completa';
   var btn=el.querySelector('.mf .btn-p');if(btn&&btn.textContent==='Salvar Alterações'){btn.textContent='Cadastrar Paciente';btn.onclick=savePat;}
  }
 }}
function closeM(id){var el=document.getElementById(id);if(el){el.classList.remove('open');if(el.id==='m-pd'||el.id==='m-tpll'){setTimeout(function(){if(el.parentNode)el.parentNode.removeChild(el);},300);}}}
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.ov').forEach(function (o) { o.addEventListener('click', function (e) { if (e.target === o) closeM(o.id) }); });
});
document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { document.querySelectorAll('.ov.open').forEach(function (o) { closeM(o.id) }); } });

function savePat(){
 var nome=(document.getElementById('np-nome')||{}).value||'';
 if(!nome.trim()){showToast('Preencha o nome do paciente','w');return;}

 var g=function(id){return(document.getElementById(id)||{}).value||'';};
 var gn=function(id){return parseFloat(g(id))||0;};

 // Calcular idade a partir da data de nascimento
 var nasc=g('np-nasc');
 var age=0;
 if(nasc){var d=new Date(nasc);var now=new Date();age=now.getFullYear()-d.getFullYear();if(now<new Date(now.getFullYear(),d.getMonth(),d.getDate()))age--;}

 var peso=gn('np-peso')||70;
 var alt=gn('np-alt')||170;
 var bmi=alt>0?+(peso/((alt/100)*(alt/100))).toFixed(1):0;

 var today=new Date();
 var dd=String(today.getDate()).padStart(2,'0');
 var mm=String(today.getMonth()+1).padStart(2,'0');
 var yyyy=today.getFullYear();
 var todayStr=dd+'/'+mm+'/'+yyyy;

 // Gerar iniciais e cor de avatar
 var words=nome.trim().split(' ').filter(Boolean);
 var ini=words.slice(0,2).map(function(w){return w[0].toUpperCase();}).join('');
 var avOpts=['a1','a2','a3','a4','a5','a6','a7','a8'];
 var av=avOpts[pats.length%avOpts.length];

 var newPat={
  id:Date.now(),
  n:nome.trim(),
  age:age||25,
  sex:g('np-sex')||'F',
  w:peso,
  h:alt,
  bmi:bmi,
  fat:gn('np-fat'),
  wStart:peso,
  goal:g('np-obj')||'Saúde geral',
  cond:g('np-cond'),
  alerg:g('np-alerg'),
  agua:gn('np-agua')||2.0,
  prog:0,
  last:todayStr,
  av:av,
  i:ini,
  st:'tg',
  stxt:'Em dia',
  exams:{gli:gn('np-gli')||90,col:gn('np-col')||180,vitd:gn('np-vitd')||30,hem:gn('np-hem')||13,fer:gn('np-fer')||50,tgo:gn('np-tgo')||22,tgp:gn('np-tgp')||22,tsh:gn('np-tsh')||2.0},
  historico:[{data:todayStr,peso:peso,imc:bmi,cintura:gn('np-cin')||80,fat:gn('np-fat')||20,obs:'Cadastro inicial'}],
  diary:[],
  plans:[],
  appointments:[],
  suplementos:[],
  orientacoes:[],
  tel:g('np-tel')||'',
  email:g('np-email')||'',
  obs:g('np-obs')||'',
  since:new Date().toISOString().slice(0,10)
 };

 pats.push(newPat);
 DB.save();
 if(typeof apiCreatePatient==='function'){
  apiCreatePatient(newPat).then(function(res){
   if(res&&res.id){newPat._backendId=res.id;DB.save();}
  }).catch(function(){});
 } // persistir novo paciente

 // Limpar campos do modal
 ['np-nome','np-nasc','np-tel','np-email','np-peso','np-alt','np-fat','np-mm','np-cin','np-quad','np-pesc',
  'np-cond','np-meds','np-gli','np-col','np-tsh','np-hem','np-vitd','np-fer','np-tgo','np-tgp',
  'np-sono','np-agua','np-alerg','np-pref','np-obs'].forEach(function(id){
  var el=document.getElementById(id);if(el)el.value='';
 });

 closeM('m-pat');
 showToast('Paciente "'+nome.trim()+'" cadastrado com sucesso!','s');

 // Redirecionar para lista de pacientes
 var niPat=document.getElementById('ni-pat');
 goP('pat',niPat);

 // Atualizar badge de contagem
 if(niPat){
  var badge=niPat.querySelector('.nb');
  if(badge)badge.textContent=pats.length;
 }
}
function saveMeas(){
 var p=selPat||pats[0];
 if(!p){showToast('Nenhum paciente selecionado','w');closeM('m-meas');return;}

 var g=function(id){return(document.getElementById(id)||{}).value||'';};
 var gn=function(id){return parseFloat(g(id))||0;};

 var peso=gn('mm-peso');
 var fat=gn('mm-fat');
 var mm=gn('mm-mm');
 var cin=gn('mm-cin');
 var dataVal=g('mm-data');

 if(!peso){showToast('Informe o peso para salvar','w');return;}

 // Formatar data
 var dataFmt=dataVal?dataVal.split('-').reverse().join('/'):(function(){
  var n=new Date();return n.getDate()+'/'+(n.getMonth()+1)+'/'+n.getFullYear();
 })();

 // Calcular IMC
 var bmi=p.h>0?+(peso/((p.h/100)*(p.h/100))).toFixed(1):p.bmi;

 // Criar registro histórico
 var reg={
  data:dataFmt,
  peso:peso,
  imc:bmi,
  cintura:cin||p.historico[p.historico.length-1].cintura,
  fat:fat||p.fat,
  obs:g('mm-obs')||'Consulta de rotina'
 };

 // Adicionar ao histórico do paciente
 p.historico.push(reg);

 // Atualizar dados atuais do paciente
 p.w=peso;
 p.bmi=bmi;
 if(fat)p.fat=fat;
 if(mm)p.mm=mm;
 if(cin)p.cinWaist=cin;
 p.last=dataFmt;

 // Limpar campos
 ['mm-peso','mm-fat','mm-mm','mm-cin','mm-obs'].forEach(function(id){
  var el=document.getElementById(id);if(el)el.value='';
 });

 DB.save();
 closeM('m-meas');
 showToast('Medidas de '+p.n+' registradas com sucesso!','s');

 // Atualizar a tela de acompanhamento se estiver ativa
 var evBtn=document.getElementById('ni-ev');
 if(evBtn&&evBtn.classList.contains('on')){
  goP('ev',evBtn);
 }
 // Atualizar card na lista de pacientes
 var grid=document.getElementById('pat-grid');
 if(grid)grid.innerHTML=buildPatGrid(pats);
}

// ─── DARK MODE ───
function toggleDark(){
 var isDark=document.body.classList.toggle('dark');
 var btn=document.getElementById('dark-toggle');
 if(btn) btn.textContent=isDark?'☀️':'🌙';
 try{ localStorage.setItem('dieton_dark', isDark?'1':'0'); }catch(ex){}
}

// ══════════════════════════════════════════════════════════════════
// PERFIL DO USUÁRIO
// ══════════════════════════════════════════════════════════════════
var userProfiles = {}; // chave: user id → {photo, bio, inviteCode}

function _getProfile(uid) {
  if (!userProfiles[uid]) userProfiles[uid] = { photo: null, bio: '', inviteCode: null };
  return userProfiles[uid];
}

function _genInviteCode(name, userId) {
  // Deterministic: same userId always gets same code
  var prefix = (name || 'NUT').replace(/[^A-Za-z]/g, '').toUpperCase().slice(0, 3);
  // Use userId as seed for deterministic number
  var seed = 0;
  String(userId || 'x').split('').forEach(function (c) { seed = (seed * 31 + c.charCodeAt(0)) & 0xffff; });
  var num = 1000 + (seed % 9000);
  var code = prefix + '-' + num;
  // Persist in dieton_invites
  try {
    var inv = JSON.parse(localStorage.getItem('dieton_invites') || '{}');
    inv[userId] = code;
    localStorage.setItem('dieton_invites', JSON.stringify(inv));
  } catch (e) { }
  return code;
}

function _getInviteCode(userId, name) {
  // Always retrieve from localStorage first for consistency
  try {
    var inv = JSON.parse(localStorage.getItem('dieton_invites') || '{}');
    if (inv[userId]) return inv[userId];
  } catch (e) { }
  return _genInviteCode(name, userId);
}

function openProfile() {
  if (!cu) return;
  var prof = _getProfile(cu.id);

  // Preencher campos
  document.getElementById('prof-name').value = cu.name || '';
  document.getElementById('prof-email').value = cu.email || '';
  document.getElementById('prof-bio').value = prof.bio || '';

  // Foto ou avatar
  var avEl = document.getElementById('prof-av-display');
  if (prof.photo) {
    avEl.innerHTML = '<img src="' + prof.photo + '" style="width:90px;height:90px;border-radius:50%;object-fit:cover"/>';
  } else {
    avEl.className = 'av-lg av ' + (cu.av || 'a1');
    avEl.textContent = cu.init || '?';
    avEl.style.cssText = 'width:90px;height:90px;font-size:28px;font-weight:800;font-family:var(--jk);display:flex;align-items:center;justify-content:center;border-radius:50%';
  }

  // Seção de convite — só nutricionista
  // Invite code
  var invSec = document.getElementById('prof-invite-section');
  if (cu.role === 'pro') {
    invSec.style.display = 'block';

    // PRIORIDADE: Primeiro o que veio do banco (cu.invite_code)
    // Se não tiver, aí sim olha o cache ou calcula.
    prof.inviteCode = cu.invite_code || _getInviteCode(cu.id, cu.name);

    document.getElementById('prof-invite-code').textContent = prof.inviteCode;
  } else {
    invSec.style.display = 'none';
  }

  // Mostrar campo CRN só para nutricionista
  var crnSec = document.getElementById('prof-crn-section');
  if (crnSec) crnSec.style.display = cu.role === 'pro' ? 'block' : 'none';
  var crnInp = document.getElementById('prof-crn');
  if (crnInp) crnInp.value = cu.crn || '';
  document.getElementById('prof-title').textContent = cu.role === 'pro' ? 'Perfil da Nutricionista' : 'Meu Perfil';
  openM('m-profile');
}

function loadProfilePhoto(inp) {
  if (!inp.files || !inp.files[0]) return;
  var reader = new FileReader();
  reader.onload = function (e) {
    var avEl = document.getElementById('prof-av-display');
    avEl.innerHTML = '<img src="' + e.target.result + '" style="width:90px;height:90px;border-radius:50%;object-fit:cover"/>';
    // Guardar temporariamente para saveProfile usar
    window._pendingPhoto = e.target.result;
  };
  reader.readAsDataURL(inp.files[0]);
}

function saveProfile() {
  if (!cu) return;
  var prof = _getProfile(cu.id);

  var newName = document.getElementById('prof-name').value.trim();
  var newEmail = document.getElementById('prof-email').value.trim();
  var newBio = document.getElementById('prof-bio').value.trim();

  if (!newName) { showToast('Informe o nome', 'w'); return; }

  // Atualizar cu
  cu.name = newName;
  if (newEmail) cu.email = newEmail;
  prof.bio = newBio;
  var crnInp = document.getElementById('prof-crn');
  if (crnInp) cu.crn = crnInp.value.trim();
  if (window._pendingPhoto) { prof.photo = window._pendingPhoto; window._pendingPhoto = null; }

  // Atualizar sidebar imediatamente
  _applySidebarProfile();

  // Persistir
  DB.save();
  closeM('m-profile');
  showToast('Perfil atualizado!', 's');
}

function _applySidebarProfile() {
  if (!cu) return;
  var prof = _getProfile(cu.id);

  // Nome e email
  var nameEl = document.getElementById('sb-name');
  var emailEl = document.getElementById('sb-email');
  if (nameEl) nameEl.textContent = cu.name;
  if (emailEl) emailEl.textContent = prof.bio || cu.email;

  // Avatar: foto ou iniciais
  var avEl = document.getElementById('sb-av');
  if (avEl) {
    if (prof.photo) {
      avEl.style.backgroundImage = 'url(' + prof.photo + ')';
      avEl.style.backgroundSize = 'cover';
      avEl.style.backgroundPosition = 'center';
      avEl.textContent = '';
    } else {
      avEl.style.backgroundImage = '';
      avEl.className = 'av ' + (cu.av || 'a1');
      avEl.textContent = cu.init || '';
    }
  }
}

function copyInviteCode() {
  var code = document.getElementById('prof-invite-code').textContent;
  if (!code || code === '—') return;
  try {
    navigator.clipboard.writeText(code).then(function () { showToast('Código copiado: ' + code, 's'); });
  } catch (e) {
    // Fallback
    var ta = document.createElement('textarea'); ta.value = code; document.body.appendChild(ta); ta.select(); document.execCommand('copy'); document.body.removeChild(ta);
    showToast('Código copiado: ' + code, 's');
  }
}

function regenInviteCode() {
  if (!cu) return;
  if (typeof doRegenInviteCode === 'function') {
    doRegenInviteCode();
  } else {
    // Fallback local se a API não estiver carregada
    var prof = _getProfile(cu.id);
    prof.inviteCode = _getInviteCode(cu.id, cu.name);
    document.getElementById('prof-invite-code').textContent = prof.inviteCode;
    showToast('Novo código calculado localmente!', 's');
  }
}


// ══════════════════════════════════════════════════════════════════
// AGENDA / CONSULTAS
// ══════════════════════════════════════════════════════════════════
var _calYear, _calMonth;

function rAgenda() {
  var now = new Date();
  if (!_calYear) { _calYear = now.getFullYear(); _calMonth = now.getMonth(); }
  return _buildAgendaHTML();
}

function _buildAgendaHTML() {
  var now = new Date();
  var yr = _calYear, mo = _calMonth;
  var firstDay = new Date(yr, mo, 1).getDay();
  var daysInMonth = new Date(yr, mo + 1, 0).getDate();
  var monthNames = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  var dayNames = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

  // Coletar todas as consultas do mês
  var allAppts = [];
  pats.forEach(function (p) {
    (p.appointments || []).forEach(function (a) {
      allAppts.push(Object.assign({}, a, { patName: p.n, patId: p.id, patAv: p.av, patInit: p.i }));
    });
  });

  // Próximas consultas (futuras)
  var upcoming = allAppts.filter(function (a) { return new Date(a.isoDate) >= now; })
    .sort(function (a, b) { return new Date(a.isoDate) - new Date(b.isoDate) });

  // Consultas do dia selecionado
  var todayStr = now.toISOString().slice(0, 10);

  var html = '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">'
    + '<div style="display:flex;align-items:center;gap:10px">'
    + '<button class="btn btn-ghost btn-sm" onclick="_calNav(-1)">‹</button>'
    + '<span style="font-family:var(--jk);font-size:14px;font-weight:800;color:var(--n9)">' + monthNames[mo] + ' ' + yr + '</span>'
    + '<button class="btn btn-ghost btn-sm" onclick="_calNav(1)">›</button>'
    + '<button class="btn btn-ghost btn-sm" onclick="_calToday()">Hoje</button>'
    + '</div>'
    + '<div style="display:flex;gap:7px">'
    + '<button class="btn btn-s btn-sm" onclick="exportICS()" title="Exportar para Google Calendar / iCal"><svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-2 .9-2 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/></svg> .ics / Google Cal</button>'
    + '<button class="btn btn-p btn-sm" onclick="openNewConsulta()">+ Nova Consulta</button>'
    + '</div>'
    + '</div>'
    + '<div class="agenda-cal">'
    + '<div>'
    + '<div class="cal-grid" style="margin-bottom:4px">' + dayNames.map(function (d) { return '<div class="cal-head">' + d + '</div>'; }).join('') + '</div>'
    + '<div class="cal-grid">';

  // Empty cells before first day
  for (var i = 0; i < firstDay; i++) html += '<div class="cal-day other-month"></div>';

  for (var d = 1; d <= daysInMonth; d++) {
    var dateStr = yr + '-' + (mo + 1 < 10 ? '0' : '') + (mo + 1) + '-' + (d < 10 ? '0' : '') + d;
    var isToday = dateStr === now.toISOString().slice(0, 10);
    var dayAppts = allAppts.filter(function (a) { return a.isoDate && a.isoDate.slice(0, 10) === dateStr; });
    var isPast = new Date(yr, mo, d) < new Date(now.getFullYear(), now.getMonth(), now.getDate());
    html += '<div class="cal-day' + (isToday ? ' today' : '') + (dayAppts.length ? ' has-ev' : '') + (isPast ? ' past-day' : '') + '" onclick="_showDay(dateStr)">'
      + '<div class="cal-dn">' + d + '</div>'
      + dayAppts.slice(0, 2).map(function (a) { return '<div class="cal-ev' + (a.type === 'retorno' ? ' retorno' : '') + (isPast ? ' past' : '') + '" title="' + a.patName + '">' + a.time + ' ' + a.patInit + '</div>'; }).join('')
      + (dayAppts.length > 2 ? '<div style="font-size:8px;color:var(--n4)">+' + (dayAppts.length - 2) + ' mais</div>' : '')
      + '</div>';
  }

  html += '</div></div>'
    + '<div>'
    + '<div class="card" style="margin-bottom:10px"><div class="ch"><span class="ct">Próximas Consultas</span><span class="cs">' + upcoming.length + ' agendadas</span></div>'
    + (upcoming.length
      ? upcoming.slice(0, 6).map(function (a) {
        var dObj = new Date(a.isoDate);
        var dStr = dObj.getDate() + '/' + (dObj.getMonth() + 1) + '/' + dObj.getFullYear();
        var typeLabel = { primeira: '1ª consulta', retorno: 'Retorno', online: 'Online', avaliacao: 'Aval. corporal', emergencia: 'Urgência' }[a.type] || a.type;
        return '<div class="cons-card' + (a.type === 'retorno' ? ' retorno' : '') + '" onclick="_showDay(a.isoDate.slice(0,10))">'
          + '<div class="cons-time">' + a.time + '</div>'
          + '<div class="cons-info"><div class="cons-pat">' + a.patName + '</div><div class="cons-type">' + dStr + ' · ' + typeLabel + ' · ' + a.dur + ' min</div></div>'
          + '<div class="av ' + a.patAv + '" style="width:26px;height:26px;font-size:9px;font-weight:800;flex-shrink:0">' + a.patInit + '</div>'
          + '</div>';
      }).join('')
      : '<div style="text-align:center;padding:16px;color:var(--n4);font-size:12px">Nenhuma consulta agendada</div>')
    + '</div>'
    + '<div class="card"><div class="ch"><span class="ct">Estatísticas do Mês</span></div>'
    + _buildAgendaStats(allAppts, yr, mo)
    + '</div>'
    + '</div>'
    + '</div>'
    + '<div id="day-consultas"></div>';

  return html;
}

function _buildAgendaStats(allAppts, yr, mo) {
  var monthAppts = allAppts.filter(function (a) {
    var d = new Date(a.isoDate); return d.getFullYear() === yr && d.getMonth() === mo;
  });
  var past = monthAppts.filter(function (a) { return new Date(a.isoDate) < new Date(); });
  var typeCount = {};
  monthAppts.forEach(function (a) { typeCount[a.type] = (typeCount[a.type] || 0) + 1; });
  return '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">'
    + '<div style="background:var(--g0);border-radius:var(--r);padding:10px;text-align:center"><div style="font-family:var(--in);font-size:22px;font-weight:800;color:var(--g5)">' + monthAppts.length + '</div><div style="font-size:10.5px;color:var(--n4)">Total agendadas</div></div>'
    + '<div style="background:var(--g0);border-radius:var(--r);padding:10px;text-align:center"><div style="font-family:var(--in);font-size:22px;font-weight:800;color:#16a34a">' + past.length + '</div><div style="font-size:10.5px;color:var(--n4)">Realizadas</div></div>'
    + '</div>'
    + (Object.keys(typeCount).length ? '<div style="margin-top:8px">' + Object.keys(typeCount).map(function (t) { var lbl = { primeira: '1ª consulta', retorno: 'Retorno', online: 'Online', avaliacao: 'Aval. corp.', emergencia: 'Urgência' }[t] || t; return '<div style="display:flex;justify-content:space-between;font-size:11.5px;color:var(--n6);padding:3px 0"><span>' + lbl + '</span><span style="font-weight:700;color:var(--n9)">' + typeCount[t] + '</span></div>'; }).join('') + '</div>' : '');
}

function _calNav(dir) { _calMonth += dir; if (_calMonth > 11) { _calMonth = 0; _calYear++; } if (_calMonth < 0) { _calMonth = 11; _calYear--; } var btn = document.getElementById('ni-agenda'); goP('agenda', btn); }
function _calToday() { var n = new Date(); _calYear = n.getFullYear(); _calMonth = n.getMonth(); var btn = document.getElementById('ni-agenda'); goP('agenda', btn); }

function showDayConsultas(dateStr) {
  var allAppts = [];
  pats.forEach(function (p) { (p.appointments || []).forEach(function (a) { allAppts.push(Object.assign({}, a, { patName: p.n, patId: p.id, patAv: p.av, patInit: p.i })); }); });
  var dayAppts = allAppts.filter(function (a) { return a.isoDate && a.isoDate.slice(0, 10) === dateStr; }).sort(function (a, b) { return a.time.localeCompare(b.time); });
  var cont = document.getElementById('day-consultas');
  if (!cont) return;
  if (!dayAppts.length) { cont.innerHTML = ''; return; }
  var dObj = new Date(dateStr + 'T12:00:00');
  var dFmt = dObj.getDate() + '/' + (dObj.getMonth() + 1) + '/' + dObj.getFullYear();
  cont.innerHTML = '<div class="card" style="margin-top:12px"><div class="ch"><span class="ct">Consultas — ' + dFmt + '</span><span class="cs">' + dayAppts.length + ' agendadas</span></div>'
    + dayAppts.map(function (a, i) {
      var typeLabel = { primeira: '1ª consulta', retorno: 'Retorno', online: 'Online', avaliacao: 'Aval. corporal', emergencia: 'Urgência' }[a.type] || a.type;
      var isPast = new Date(a.isoDate) < new Date();
      return '<div class="cons-card' + (isPast ? ' past' : '') + (a.type === 'retorno' ? ' retorno' : '') + '">'
        + '<div class="cons-time">' + a.time + '</div>'
        + '<div class="cons-info"><div class="cons-pat">' + a.patName + '</div><div class="cons-type">' + typeLabel + ' · ' + a.dur + ' min' + (a.obs ? ' · ' + a.obs : '') + '</div></div>'
        + '<div style="display:flex;gap:6px">'
        + '<button class="btn btn-s btn-sm" onclick="_goPatEv(\'+a.patId+\')">Ver</button>'
        + '<button class="btn btn-ghost btn-sm" onclick="deleteConsulta(\'+a.patId+\',\'+a.id+\')">🗑</button>'
        + '</div>'
        + '</div>';
    }).join('') + '</div>';
}

function openNewConsulta(patId) {
  // Preencher select de pacientes
  var sel = document.getElementById('cons-pat');
  if (sel) { sel.innerHTML = pats.map(function (p) { return '<option value="' + p.id + '"' + (patId && p.id === patId ? ' selected' : '') + '>' + p.n + '</option>'; }).join(''); }
  // Data padrão: hoje
  var d = document.getElementById('cons-date');
  if (d) d.value = new Date().toISOString().slice(0, 10);
  document.getElementById('cons-modal-title').textContent = 'Nova Consulta';
  openM('m-consult');
}

function saveConsulta() {
  var patId = parseInt(document.getElementById('cons-pat').value);
  var date = document.getElementById('cons-date').value;
  var time = document.getElementById('cons-time').value;
  var type = document.getElementById('cons-type').value;
  var dur = document.getElementById('cons-dur').value;
  var obs = document.getElementById('cons-obs').value;
  if (!date || !time) { showToast('Informe data e horário', 'w'); return; }
  var p = pats.find(function (x) { return x.id === patId; });
  if (!p) { showToast('Paciente não encontrado', 'w'); return; }
  if (!p.appointments) p.appointments = [];
  var appt = {
    id: 'appt_' + Date.now(),
    isoDate: date + 'T' + time + ':00',
    time: time,
    type: type,
    dur: parseInt(dur),
    obs: obs,
    createdAt: new Date().toISOString()
  };
  p.appointments.push(appt);
  p.appointments.sort(function (a, b) { return new Date(a.isoDate) - new Date(b.isoDate); });
  DB.save();
  closeM('m-consult');
  document.getElementById('cons-obs').value = '';
  showToast('Consulta agendada para ' + p.n + '!', 's');
  // Gerar alerta automático de retorno se tipo for retorno
  if (type === 'retorno') {
    _checkAndAddRetornoAlert(p, date);
  }
  // Refresh agenda
  var btn = document.getElementById('ni-agenda');
  if (btn && btn.classList.contains('on')) goP('agenda', btn);
}

function deleteConsulta(patId, apptId) {
  var p = pats.find(function (x) { return x.id === patId; });
  if (!p) return;
  p.appointments = (p.appointments || []).filter(function (a) { return a.id !== apptId; });
  DB.save();
  showToast('Consulta removida', 'i');
  var btn = document.getElementById('ni-agenda');
  if (btn && btn.classList.contains('on')) goP('agenda', btn);
  var dc = document.getElementById('day-consultas'); if (dc) dc.innerHTML = '';
}


// ══ SIDEBAR MOBILE ══
function toggleSidebar() {
  var sb = document.getElementById('sb');
  var ov = document.getElementById('sb-overlay');
  if (!sb) return;
  var isOpen = sb.classList.contains('mob-open');
  if (isOpen) { closeSidebar(); } else {
    sb.classList.add('mob-open');
    if (ov) { ov.classList.add('open'); ov.style.display = 'block'; }
    document.body.style.overflow = 'hidden';
  }
}
function closeSidebar() {
  var sb = document.getElementById('sb');
  var ov = document.getElementById('sb-overlay');
  if (sb) sb.classList.remove('mob-open');
  if (ov) { ov.classList.remove('open'); setTimeout(function () { ov.style.display = 'none'; }, 250); }
  document.body.style.overflow = '';
}
// Fechar sidebar ao navegar (mobile)
var _origGoP = window.goP;
// Patch goP to close sidebar on mobile nav
(function () { try { if (localStorage.getItem('dieton_dark') === '1') { document.body.classList.add('dark'); var b = document.getElementById('dark-toggle'); if (b) b.textContent = '☀️'; } } catch (e) { } })();

// ══════════════════════════════════════════════════════════════════
// DIETON — CAMADA DE PERSISTÊNCIA (localStorage)
// Para migrar para Firebase/Supabase: substitua apenas as funções
// DB.save() e DB.load() abaixo. O resto do app não muda.
// ══════════════════════════════════════════════════════════════════
var DB = {
  KEY: 'dieton_v1',

  _keyFor: function (userId) {
    return 'dieton_v1_' + (userId || 'anon');
  },

  save: function () {
    if (!cu) return;
    try {
      var snapshot = {
        pats: pats,
        tasks: tasks,
        notifs: notifs,
        templates: templates,
        userProfiles: userProfiles,
        savedAt: Date.now()
      };
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
      if (data.userProfiles) { userProfiles = data.userProfiles; }
      return true;
    } catch (e) { console.warn('DietOn: falha ao carregar dados', e); return false; }
  },

  clear: function () {
    if (!cu) return;
    try { localStorage.removeItem(DB._keyFor(cu.id || cu.email)); } catch (e) { }
  },

  // Exportar backup JSON — caminho para futura migração para backend
  exportJSON: function () {
    var data = { pats: pats, tasks: tasks, notifs: notifs, templates: templates, exportedAt: new Date().toISOString(), version: '1.0' };
    var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    var a = document.createElement('a'); a.href = URL.createObjectURL(blob);
    a.download = 'dieton-backup-' + new Date().toISOString().slice(0, 10) + '.json';
    a.click(); URL.revokeObjectURL(a.href);
    showToast('Backup exportado com sucesso!', 's');
  },

  // Importar backup JSON
  importJSON: function (file) {
    var reader = new FileReader();
    reader.onload = function (e) {
      try {
        var data = JSON.parse(e.target.result);
        if (data.pats) pats = data.pats;
        if (data.tasks) tasks = data.tasks;
        if (data.templates) templates = data.templates;
        DB.save();
        showToast('Dados importados! Recarregue a tela.', 's');
        setTimeout(function () { location.reload(); }, 1500);
      } catch (err) { showToast('Arquivo inválido.', 'w'); }
    };
    reader.readAsText(file);
  }
};

// Auto-save: salva sempre que pats, tasks ou templates mudam
// (chamado nos pontos certos do app — savePat, saveMeas, etc.)
function dbSave() { DB.save(); }



// ─── ONBOARDING ───
var _onbStep = 0;
var _onbSlides = [
  {
    icon: '🍊', color: '#e85a0a', bg: 'linear-gradient(135deg,#fff7ed,#ffedd5)',
    title: 'Bem-vindo ao DietOn!', subtitle: 'Sua clínica de nutrição completa',
    body: 'Você está a poucos passos de transformar sua prática clínica. Este guia rápido vai mostrar tudo que você pode fazer aqui.',
    tips: [], action: 'Começar tour →'
  },
  {
    icon: '👥', color: '#16a34a', bg: 'linear-gradient(135deg,#f0fdf4,#dcfce7)',
    title: '1. Cadastre seus pacientes', subtitle: 'Anamnese completa em minutos',
    body: 'Clique em <strong>+ Novo Paciente</strong> no topo da tela para cadastrar com anamnese completa.',
    tips: ['📏 Peso, altura, % gordura e circunferências', '🩺 Exames laboratoriais e histórico clínico', '🍽️ Hábitos alimentares e restrições', '⚠️ Alertas automáticos para casos críticos'],
    action: 'Próximo →'
  },
  {
    icon: '📋', color: '#1d4ed8', bg: 'linear-gradient(135deg,#eff6ff,#dbeafe)',
    title: '2. Prescreva planos alimentares', subtitle: '597 alimentos com tabela TACO',
    body: 'No perfil do paciente, abra a aba <strong>Prescrição</strong> para montar planos personalizados.',
    tips: ['🔢 TMB e GET calculados automaticamente', '🥩 Busca inteligente no banco TACO completo', '📊 Distribuição de macros em tempo real', '📄 Exportação em PDF com seu CRN'],
    action: 'Próximo →'
  },
  {
    icon: '🤖', color: '#7c3aed', bg: 'linear-gradient(135deg,#f5f3ff,#ede9fe)',
    title: '3. Use a IA Nutricional', subtitle: 'Planos completos em segundos',
    body: 'No menu lateral, clique em <strong>IA Nutricional</strong> para gerar planos com inteligência artificial.',
    tips: ['🎯 8 objetivos clínicos disponíveis', '🛒 Lista de compras gerada automaticamente', '⚡ Plano completo em menos de 30 segundos', '✏️ Edite e adapte antes de salvar'],
    action: 'Próximo →'
  },
  {
    icon: '📈', color: '#0891b2', bg: 'linear-gradient(135deg,#ecfeff,#cffafe)',
    title: '4. Acompanhe a evolução', subtitle: 'Gráficos e histórico completo',
    body: 'Na aba <strong>Evolução</strong> do paciente, registre consultas e veja o progresso ao longo do tempo.',
    tips: ['📉 Gráficos de peso, IMC e composição corporal', '📔 Diário alimentar do paciente', '📸 Fotos de progresso', '🔔 Alertas de adesão ao plano'],
    action: 'Próximo →'
  },
  {
    icon: '✅', color: '#e85a0a', bg: 'linear-gradient(135deg,#fff7f3,#ffe4d6)',
    title: 'Tudo pronto!', subtitle: 'Comece agora mesmo',
    body: 'Explore o menu lateral para acessar todos os módulos. O botão <strong>?</strong> no topo sempre traz este guia de volta.',
    tips: ['💡 Comece cadastrando seu primeiro paciente', '🔑 Gere seu código de convite em Perfil', '🌙 Modo escuro disponível no menu lateral', '💾 Seus dados são salvos automaticamente'],
    action: 'Começar agora 🚀'
  }
];

// ═══ FINANCEIRO ═════════════════════════════════════════════════

function _todayAgendaCount() {
  var today = new Date().toISOString().slice(0, 10);
  var ct = 0; pats.forEach(function (p) { (p.appointments || []).forEach(function (a) { if (a.isoDate && a.isoDate.slice(0, 10) === today) ct++; }); });
  return ct + ' consulta' + (ct !== 1 ? 's' : '');
}
function _buildTodayAgenda() {
  var today = new Date().toISOString().slice(0, 10);
  var now = new Date();
  var nowStr = String(now.getHours()).padStart(2, '0') + ':' + String(now.getMinutes()).padStart(2, '0');
  var appts = [];
  pats.forEach(function (p) { (p.appointments || []).forEach(function (a) { if (a.isoDate && a.isoDate.slice(0, 10) === today) appts.push(Object.assign({}, a, { patName: p.n, patId: p.id })); }); });
  appts.sort(function (a, b) { return (a.time || '').localeCompare(b.time || ''); });
  if (!appts.length) return '<div style="text-align:center;padding:20px;color:var(--n4);font-size:12px">Sem consultas hoje.</div>';
  return appts.map(function (a) {
    var isPast = a.status === 'concluido' || (a.time && a.time < nowStr);
    var barClr = a.type === 'retorno' ? '#f59e0b' : a.type === 'online' ? '#3b82f6' : '#e85a0a';
    var tagCls = a.status === 'concluido' ? 'tg' : isPast ? 'ty' : 'tb2';
    var tagTxt = a.status === 'concluido' ? 'Concluído' : isPast ? 'Pendente' : 'Agendado';
    var typeTxt = a.type === 'retorno' ? 'Retorno' : a.type === 'online' ? 'Online' : '1ª Consulta';
    return '<div class="ag-item">'
      + '<div class="ag-time">' + (a.time || '--:--') + '</div>'
      + '<div class="ag-bar" style="background:' + barClr + '"></div>'
      + '<div style="flex:1;min-width:0"><div class="ag-nm">' + a.patName + '</div>'
      + '<div class="ag-tp">' + typeTxt + (a.duration ? ' · ' + a.duration + ' min' : '') + '</div></div>'
      + '<span class="tag ' + tagCls + '">' + tagTxt + '</span>'
      + '</div>';
  }).join('');
}

// ═══ SUPLEMENTAÇÃO (visão do paciente) ═════════════════════════
function rPSupl() {
  var p = selPat || pats[0];
  if (!p) return '<div style="padding:20px;color:var(--n4)">Nenhum paciente selecionado.</div>';
  if (!p.suplementos) p.suplementos = [];

  apiGetSupplements(p.id).then(function (list) {
    if (list && list.length) {
      p.suplementos = list.map(function (s) {
        return { id: s.id, nome: s.name || s.nome, dose: s.dose, frequencia: s.frequency || s.frequencia, obs: s.obs || s.notes };
      });
      DB.save();
      var btn = document.getElementById('pi-supl');
      if (btn && btn.classList.contains('on')) goP('psupl', btn);
    }
  }).catch(function () { });

  var list = p.suplementos.length
    ? p.suplementos.map(function (s, i) {
      return '<div style="background:#fff;border-radius:12px;border:1px solid var(--n2);padding:14px 16px;margin-bottom:8px;display:flex;align-items:center;gap:12px">'
        + '<div style="width:40px;height:40px;border-radius:10px;background:#f0fdf4;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0">💊</div>'
        + '<div style="flex:1"><div style="font-weight:700;font-size:13px;color:var(--n9)">' + escHtml(s.nome || '') + '</div>'
        + '<div style="font-size:11.5px;color:var(--n5);margin-top:2px">' + escHtml(s.dose || '') + (s.frequencia ? ' · ' + escHtml(s.frequencia) : '') + '</div>'
        + (s.obs ? '<div style="font-size:11px;color:var(--n4);margin-top:2px">' + escHtml(s.obs) + '</div>' : '')
        + '</div></div>';
    }).join('')
    : '<div style="text-align:center;padding:36px 0"><div style="font-size:36px;margin-bottom:10px">💊</div>'
    + '<div style="font-weight:600;color:var(--n6);margin-bottom:4px">Nenhum suplemento prescrito</div>'
    + '<div style="font-size:12px;color:var(--n4)">Sua nutricionista adicionará suplementos aqui.</div></div>';

  return '<div class="ch"><span class="ct">💊 Minha Suplementação</span></div>'
    + '<div style="background:#f0fdf4;border-radius:10px;padding:12px 14px;margin-bottom:16px;font-size:12px;color:#166534">'
    + '✅ Tome seus suplementos conforme prescrito. Em caso de dúvidas, consulte sua nutricionista.</div>'
    + list;
}

// ═══ SUPLEMENTAÇÃO (visão do nutricionista — dentro do perfil do paciente) ═══
function rSupl() {
  var p = selPat;
  if (!p) {
    // Mostrar lista de pacientes para selecionar
    if (!pats.length) return '<div style="padding:60px;text-align:center"><div style="font-size:48px;margin-bottom:16px">💊</div><div style="font-weight:700;font-size:16px;color:var(--n7);margin-bottom:8px">Nenhum paciente cadastrado</div><div style="font-size:13px;color:var(--n4)">Cadastre um paciente primeiro para gerenciar suplementos.</div></div>';
    return '<div style="max-width:520px;margin:0 auto;padding:28px 0">'
      + '<div style="text-align:center;margin-bottom:24px"><div style="font-size:40px;margin-bottom:10px">💊</div><div style="font-weight:800;font-size:16px;color:var(--n9);margin-bottom:6px">Selecione um paciente</div><div style="font-size:12.5px;color:var(--n5)">Escolha abaixo para ver e gerenciar os suplementos prescritos</div></div>'
      + pats.map(function(p) {
          return '<div onclick="selPat=pats.find(function(x){return x.id==='+p.id+'});goP(\'supl\',document.getElementById(\'ni-supl\'))" style="display:flex;align-items:center;gap:12px;padding:12px 16px;border:1.5px solid var(--n2);border-radius:12px;margin-bottom:8px;cursor:pointer;transition:all .15s;background:#fff" onmouseover="this.style.borderColor=\'var(--g4)\';this.style.background=\'var(--g0)\'" onmouseout="this.style.borderColor=\'var(--n2)\';this.style.background=\'#fff\'">'
            + '<div class="av ' + (p.av||'a1') + '" style="width:38px;height:38px;font-size:13px;flex-shrink:0">' + (p.i||p.n[0]) + '</div>'
            + '<div style="flex:1"><div style="font-weight:700;font-size:13px;color:var(--n9)">' + escHtml(p.n) + '</div><div style="font-size:11px;color:var(--n5)">' + (p.suplementos&&p.suplementos.length ? p.suplementos.length + ' suplemento(s) prescrito(s)' : 'Nenhum suplemento ainda') + '</div></div>'
            + '<svg viewBox="0 0 24 24" fill="currentColor" style="width:16px;height:16px;color:var(--n4)"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>'
            + '</div>';
        }).join('')
      + '</div>';
  }

  if (!p.suplementos) p.suplementos = [];

  // KPIs
  var total = p.suplementos.length;
  var categorias = {};
  p.suplementos.forEach(function(s) { categorias[s.categoria||'Outros'] = (categorias[s.categoria||'Outros']||0)+1; });
  var nCats = Object.keys(categorias).length;
  var aderidos = p.suplementos.filter(function(s){ return s.aderindo !== false; }).length;
  var pctAdesao = total ? Math.round((aderidos/total)*100) : 0;

  var kpis = '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:20px">'
    + _suplKpi('💊', total, 'Prescritos', '#f0fdf4', '#15803d')
    + _suplKpi('📂', nCats, 'Categorias', '#eff6ff', '#1d4ed8')
    + _suplKpi('✅', pctAdesao+'%', 'Adesão', pctAdesao>=80?'#f0fdf4':pctAdesao>=50?'#fffbeb':'#fef2f2', pctAdesao>=80?'#15803d':pctAdesao>=50?'#b45309':'#b91c1c')
    + '</div>';

  // Form de adicionar
  var form = '<div id="supl-form" style="display:none;background:var(--g0);border:1.5px solid var(--g2);border-radius:14px;padding:18px;margin-bottom:18px">'
    + '<div style="font-weight:700;font-size:13px;color:var(--n9);margin-bottom:12px">💊 Prescrever suplemento para ' + escHtml(p.n) + '</div>'
    // Search / autocomplete
    + '<div style="margin-bottom:10px;position:relative">'
    + '<input class="inp" id="sl-busca" placeholder="🔍 Buscar suplemento ou digitar nome..." oninput="suplBusca()" autocomplete="off" style="padding-right:36px">'
    + '<div id="sl-busca-list" style="position:absolute;top:100%;left:0;right:0;background:#fff;border:1px solid var(--n2);border-radius:10px;box-shadow:0 8px 24px rgba(0,0,0,.12);z-index:100;display:none;max-height:200px;overflow-y:auto"></div>'
    + '</div>'
    + '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px">'
    + '<input class="inp" id="sl-nome" placeholder="Nome do suplemento *">'
    + '<input class="inp" id="sl-dose" placeholder="Dose (ex: 2.000 UI, 30g)">'
    + '<input class="inp" id="sl-freq" placeholder="Frequência (ex: 1x ao dia)">'
    + '<input class="inp" id="sl-hora" placeholder="Melhor horário (ex: manhã)">'
    + '</div>'
    + '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:12px">'
    + '<select class="sel" id="sl-cat"><option value="">Categoria...</option>'
    + ['Vitaminas','Minerais','Proteínas','Ácidos Graxos','Aminoácidos','Performance','Intestinal','Colágeno','Sono','Antioxidantes','Superalimentos','Anti-inflamatório','Outros'].map(function(c){return '<option value="'+c+'">'+c+'</option>';}).join('')
    + '</select>'
    + '<select class="sel" id="sl-prioridade"><option value="normal">Prioridade Normal</option><option value="alta">Prioridade Alta</option><option value="essencial">Essencial</option></select>'
    + '</div>'
    + '<input class="inp" id="sl-obs" placeholder="Observações clínicas (ex: tomar com vitamina C para melhor absorção)" style="margin-bottom:12px">'
    + '<div style="display:flex;gap:8px">'
    + '<button class="btn btn-p" onclick="suplAdd()">💊 Prescrever</button>'
    + '<button class="btn btn-ghost" onclick="toggleSuplForm()">Cancelar</button>'
    + '</div></div>';

  // Lista de suplementos agrupados por categoria
  var grouped = {};
  p.suplementos.forEach(function(s, i) {
    var cat = s.categoria || 'Outros';
    if (!grouped[cat]) grouped[cat] = [];
    grouped[cat].push({ s: s, i: i });
  });

  var catIcons = { 'Vitaminas':'🌟','Minerais':'⚡','Proteínas':'💪','Ácidos Graxos':'🐟','Aminoácidos':'🔬','Performance':'🏃','Intestinal':'🦠','Colágeno':'✨','Sono':'🌙','Antioxidantes':'🧬','Superalimentos':'🌿','Anti-inflamatório':'🛡️','Outros':'💊' };

  var lista = '';
  if (!total) {
    lista = '<div style="text-align:center;padding:48px 0">'
      + '<div style="font-size:52px;margin-bottom:16px">💊</div>'
      + '<div style="font-weight:800;font-size:15px;color:var(--n7);margin-bottom:8px">Nenhum suplemento prescrito ainda</div>'
      + '<div style="font-size:12.5px;color:var(--n4);margin-bottom:20px">Clique em <strong>+ Prescrever</strong> para adicionar suplementos para ' + escHtml(p.n) + '</div>'
      + '</div>';
  } else {
    Object.keys(grouped).forEach(function(cat) {
      var items = grouped[cat];
      lista += '<div style="margin-bottom:20px">'
        + '<div style="font-size:11px;font-weight:700;color:var(--n5);letter-spacing:.06em;text-transform:uppercase;margin-bottom:8px;display:flex;align-items:center;gap:6px">'
        + '<span>' + (catIcons[cat]||'💊') + '</span><span>' + cat + '</span>'
        + '<span style="background:var(--n1);color:var(--n6);border-radius:99px;padding:1px 8px;font-size:10px">' + items.length + '</span></div>';

      items.forEach(function(item) {
        var s = item.s; var i = item.i;
        var priColor = s.prioridade==='essencial'?'#b91c1c':s.prioridade==='alta'?'#b45309':'#6b7280';
        var priBg = s.prioridade==='essencial'?'#fef2f2':s.prioridade==='alta'?'#fffbeb':'var(--n0)';
        lista += '<div style="background:#fff;border-radius:14px;border:1.5px solid var(--n2);padding:14px 16px;margin-bottom:8px;transition:box-shadow .15s" onmouseover="this.style.boxShadow=\'0 4px 16px rgba(0,0,0,.08)\'" onmouseout="this.style.boxShadow=\'none\'">'
          + '<div style="display:flex;align-items:flex-start;gap:12px">'
          + '<div style="width:42px;height:42px;border-radius:11px;background:'+priBg+';display:flex;align-items:center;justify-content:center;font-size:21px;flex-shrink:0">' + (catIcons[s.categoria||'Outros']||'💊') + '</div>'
          + '<div style="flex:1;min-width:0">'
          + '<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:3px">'
          + '<div style="font-weight:800;font-size:13.5px;color:var(--n9)">' + escHtml(s.nome||'') + '</div>'
          + (s.prioridade&&s.prioridade!=='normal'?'<span style="font-size:9px;font-weight:700;background:'+priBg+';color:'+priColor+';border-radius:99px;padding:2px 8px;text-transform:uppercase;letter-spacing:.04em">' + (s.prioridade==='essencial'?'⭐ Essencial':'🔺 Alta prioridade') + '</span>':'')
          + '</div>'
          + '<div style="display:flex;gap:14px;flex-wrap:wrap">'
          + (s.dose?'<span style="font-size:11.5px;color:var(--n6);display:flex;align-items:center;gap:4px"><svg viewBox="0 0 24 24" fill="currentColor" style="width:11px;height:11px"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>' + escHtml(s.dose) + '</span>':'')
          + (s.frequencia?'<span style="font-size:11.5px;color:var(--n6);display:flex;align-items:center;gap:4px"><svg viewBox="0 0 24 24" fill="currentColor" style="width:11px;height:11px"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 5h-2v6l5.25 3.15.75-1.23-4.5-2.67V7z"/></svg>' + escHtml(s.frequencia) + '</span>':'')
          + (s.horario?'<span style="font-size:11.5px;color:var(--g5);display:flex;align-items:center;gap:4px">🕐 ' + escHtml(s.horario) + '</span>':'')
          + '</div>'
          + (s.obs?'<div style="font-size:11px;color:var(--n5);margin-top:5px;background:var(--n0);border-radius:6px;padding:5px 8px;font-style:italic">📝 ' + escHtml(s.obs) + '</div>':'')
          + '</div>'
          + '<div style="display:flex;gap:6px;align-items:center;flex-shrink:0">'
          + '<button class="btn btn-ghost btn-sm" onclick="suplToggleAdesao('+p.id+','+i+')" title="'+(s.aderindo===false?'Marcar como ativo':'Marcar como suspenso')+'" style="padding:4px 8px;font-size:11px">'+(s.aderindo===false?'<span style=\'color:#9ca3af\'>⏸ Suspenso</span>':'<span style=\'color:#15803d\'>✅ Ativo</span>')+'</button>'
          + '<button class="btn btn-danger btn-sm" onclick="suplDel('+p.id+','+i+')" style="padding:4px 8px;font-size:11px" title="Remover">✕</button>'
          + '</div></div></div>';
      });
      lista += '</div>';
    });
  }

  // Interaction history / notas
  var notas = p.suplNotas || [];
  var notasHtml = '<div class="card" style="margin-top:16px">'
    + '<div class="ch"><span class="ct">📝 Notas Clínicas</span><button class="btn btn-ghost btn-sm" onclick="suplAddNota('+p.id+')">+ Nota</button></div>'
    + (notas.length ? notas.slice(-5).reverse().map(function(n){ return '<div style="padding:10px 0;border-bottom:1px solid var(--n1);font-size:12px;color:var(--n7)"><span style="color:var(--n4);font-size:10.5px">'+escHtml(n.data||'')+'</span> — '+escHtml(n.txt||'')+'</div>'; }).join('') : '<div style="font-size:12px;color:var(--n4);padding:8px 0">Nenhuma nota ainda. Registre observações sobre a adesão do paciente.</div>')
    + '</div>';

  return '<div class="card" style="margin-bottom:16px">'
    + '<div class="ch"><span class="ct">💊 Suplementação — ' + escHtml(p.n) + '</span>'
    + '<div style="display:flex;gap:8px;align-items:center">'
    + '<button class="btn btn-ghost btn-sm" onclick="selPat=null;goP(\'supl\',document.getElementById(\'ni-supl\'))" style="font-size:11px">↩ Trocar paciente</button>'
    + '<button class="btn btn-p btn-sm" onclick="toggleSuplForm()">+ Prescrever</button>'
    + '</div></div>'
    + kpis + form + lista
    + '</div>'
    + notasHtml;
}
function suplAdd() {
  var p = selPat; if (!p) return;
  var nome = document.getElementById('sl-nome').value.trim();
  if (!nome) { showToast('Informe o nome do suplemento', 'w'); return; }
  if (!p.suplementos) p.suplementos = [];
  var s = {
    nome: nome, dose: document.getElementById('sl-dose').value.trim(),
    frequencia: document.getElementById('sl-freq').value.trim(),
    obs: document.getElementById('sl-obs').value.trim()
  };
  apiAddSupplement(Object.assign({ patient_id: p.id, name: s.nome, frequency: s.frequencia, notes: s.obs }, s));
  p.suplementos.push(s); DB.save();
  closeM('m-supl-add'); showToast('Suplemento adicionado ✅', 's');
  var btn = document.getElementById('ni-supl'); if (btn) goP('supl', btn);
}
function suplDel(patId, idx) {
  var p = pats.find(function (x) { return x.id == patId; }); if (!p || !p.suplementos) return;
  var rem = p.suplementos.splice(idx, 1)[0];
  if (rem && rem.id) apiDeleteSupplement(rem.id);
  DB.save(); showToast('Suplemento removido', 'i');
  var btn = document.getElementById('ni-supl'); if (btn) goP('supl', btn);
}

function rFin(){
 var fin=(cu&&cu.financeiro)||[];
 var now=new Date();
 var _finMonth=window._finFilterMonth||null; // null = all

 // ── Group by month
 var byMonth={};
 fin.forEach(function(r){
  var d=new Date(r.data&&r.data.split('/').length===3?r.data.split('/').reverse().join('-'):r.data||'');
  var key=isNaN(d)?'Sem data':(d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0'));
  if(!byMonth[key])byMonth[key]={label:isNaN(d)?'Sem data':['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'][d.getMonth()]+'/'+String(d.getFullYear()).slice(2),pago:0,pendente:0,items:[]};
  byMonth[key].items.push(r);
  if(r.status==='pago')byMonth[key].pago+=r.valor;
  else byMonth[key].pendente+=r.valor;
 });
 var months=Object.keys(byMonth).sort();

 // ── Annual summary
 var totalPago=fin.filter(function(r){return r.status==='pago';}).reduce(function(s,r){return s+r.valor;},0);
 var totalPend=fin.filter(function(r){return r.status==='pendente';}).reduce(function(s,r){return s+r.valor;},0);
 var totalGeral=totalPago+totalPend;
 var inadimPct=totalGeral>0?Math.round(totalPend/totalGeral*100):0;

 // ── Current month stats
 var mesKey=now.getFullYear()+'-'+String(now.getMonth()+1).padStart(2,'0');
 var mesPago=(byMonth[mesKey]||{}).pago||0;
 var mesPend=(byMonth[mesKey]||{}).pendente||0;

 var html='';

 // ── KPI cards
 html+='<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:14px">';
 [
  ['💰','R$ '+mesPago.toFixed(0),'Recebido no mês','var(--green)','#f0fdf4','#bbf7d0'],
  ['⏳','R$ '+mesPend.toFixed(0),'Pendente no mês','#f59e0b','#fffbeb','#fde68a'],
  ['📊','R$ '+totalPago.toFixed(0),'Total recebido','#3b82f6','#eff6ff','#bfdbfe'],
  ['⚠️',inadimPct+'%','Inadimplência','#ef4444','#fef2f2','#fecaca'],
 ].forEach(function(k){
  html+='<div style="background:'+k[4]+';border:1.5px solid '+k[5]+';border-radius:14px;padding:14px 16px">'
   +'<div style="font-size:18px;margin-bottom:6px">'+k[0]+'</div>'
   +'<div style="font-family:var(--in);font-size:22px;font-weight:800;color:'+k[3]+'">'+k[1]+'</div>'
   +'<div style="font-size:11px;color:var(--n4);margin-top:2px">'+k[2]+'</div></div>';
 });
 html+='</div>';

 // ── Revenue chart (SVG bar chart)
 if(months.length>0){
  var chartMonths=months.slice(-8); // last 8 months
  var maxVal=Math.max.apply(null,chartMonths.map(function(k){return byMonth[k].pago+byMonth[k].pendente;}));
  var cw=500,ch=100,bw=Math.floor((cw-40)/chartMonths.length)-6,gap=6;
  html+='<div class="card" style="margin-bottom:14px"><div class="ch"><span class="ct">Receita por Mês</span><span class="cs">últimos '+chartMonths.length+' meses</span></div>';
  html+='<svg viewBox="0 0 '+cw+' '+(ch+24)+'" width="100%" style="overflow:visible">';
  chartMonths.forEach(function(key,i){
   var m=byMonth[key];
   var x=20+i*(bw+gap);
   var hPago=maxVal>0?Math.round(m.pago/maxVal*ch):0;
   var hPend=maxVal>0?Math.round(m.pendente/maxVal*ch):0;
   var isCurrentMonth=(key===mesKey);
   // Pending (bottom, lighter)
   if(hPend>0) html+='<rect x="'+x+'" y="'+(ch-hPago-hPend)+'" width="'+bw+'" height="'+hPend+'" rx="3" fill="#fde68a"/>';
   // Paid (top, solid)
   if(hPago>0) html+='<rect x="'+x+'" y="'+(ch-hPago)+'" width="'+bw+'" height="'+hPago+'" rx="3" fill="'+(isCurrentMonth?'#e85a0a':'#22c55e')+'"/>';
   if(hPago===0&&hPend===0) html+='<rect x="'+x+'" y="'+(ch-2)+'" width="'+bw+'" height="2" rx="1" fill="var(--n2)"/>';
   // Label
   html+='<text x="'+(x+bw/2)+'" y="'+(ch+16)+'" text-anchor="middle" font-size="9" fill="var(--n4)">'+m.label+'</text>';
   // Value on hover via title
   html+='<title>'+m.label+': R$'+m.pago+' pago / R$'+m.pendente+' pendente</title>';
  });
  // Legend
  html+='<rect x="20" y="-14" width="10" height="8" rx="2" fill="#22c55e"/><text x="34" y="-7" font-size="9" fill="var(--n5)">Recebido</text>';
  html+='<rect x="100" y="-14" width="10" height="8" rx="2" fill="#fde68a"/><text x="114" y="-7" font-size="9" fill="var(--n5)">Pendente</text>';
  html+='</svg></div>';
 }

 // ── Month filter tabs
 html+='<div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:12px">';
 html+='<button class="btn '+((!_finMonth)?'btn-p':'btn-ghost')+' btn-sm" onclick="window._finFilterMonth=null;goP(\'fin\',document.getElementById(\'ni-fin\'))">Todos</button>';
 months.slice(-6).reverse().forEach(function(key){
  var m=byMonth[key];
  html+='<button class="btn '+((window._finFilterMonth===key)?'btn-p':'btn-ghost')+' btn-sm" onclick="window._finFilterMonth=\''+key+'\';goP(\'fin\',document.getElementById(\'ni-fin\'))">'+m.label+'</button>';
 });
 html+='</div>';

 // ── Add new entry form
 html+='<div id="fin-form" style="display:none">'
  +'<div class="card" style="margin-bottom:12px;background:var(--g0);border-color:var(--g3)">'
  +'<div class="ch" style="margin-bottom:10px"><span class="ct">Nova Entrada</span><button class="btn btn-ghost btn-sm" onclick="toggleFinForm()">✕ Fechar</button></div>'
  +'<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">'
  +'<input id="fin-desc" class="sel" placeholder="Descrição (ex: Consulta inicial)"/>'
  +'<input id="fin-val" class="sel" type="number" placeholder="Valor (R$)" min="0" step="0.01"/>'
  +'<select id="fin-pat" class="sel"><option value="">Paciente (opcional)</option>'
  +pats.map(function(p){return'<option value="'+escHtml(p.n)+'">'+escHtml(p.n)+'</option>';}).join('')
  +'</select>'
  +'<input id="fin-date" class="sel" type="date" value="'+new Date().toISOString().slice(0,10)+'"/>'
  +'<select id="fin-status" class="sel"><option value="pago">✅ Pago</option><option value="pendente">⏳ Pendente</option></select>'
  +'<button class="btn btn-p" onclick="finAdd()">💾 Salvar</button>'
  +'</div></div></div>';

 // ── Records filtered
 var filteredMonths=_finMonth?[_finMonth]:months.slice().reverse();
 if(filteredMonths.length===0){
  html+='<div class="card" style="text-align:center;padding:48px"><div style="font-size:40px;margin-bottom:12px">💰</div>'
   +'<div style="font-weight:800;font-size:14px;color:var(--n7);margin-bottom:8px">Nenhum registro financeiro</div>'
   +'<div style="font-size:12px;color:var(--n4);margin-bottom:16px">Comece registrando suas consultas e recebimentos.</div>'
   +'<button class="btn btn-p" onclick="toggleFinForm()">+ Adicionar entrada</button></div>';
 } else {
  filteredMonths.forEach(function(key){
   var m=byMonth[key];if(!m)return;
   var monthTotal=m.pago+m.pendente;
   html+='<div class="card" style="margin-bottom:10px">'
    +'<div class="ch" style="margin-bottom:8px">'
    +'<span class="ct">'+m.label+'</span>'
    +'<div style="display:flex;gap:10px;font-size:11px">'
    +'<span style="color:var(--green);font-weight:700">R$ '+m.pago.toFixed(0)+' recebido</span>'
    +(m.pendente>0?'<span style="color:#f59e0b;font-weight:700">R$ '+m.pendente.toFixed(0)+' pendente</span>':'')
    +'</div></div>';
   m.items.forEach(function(r,i){
    var gi=fin.indexOf(r);
    html+='<div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--n1)">'
     +'<div style="flex:1;min-width:0">'
     +'<div style="font-size:12.5px;font-weight:700;color:var(--n8)">'+escHtml(r.desc||r.descricao||'Sem descrição')+'</div>'
     +(r.pat?'<div style="font-size:10.5px;color:var(--n4)">👤 '+escHtml(r.pat)+'</div>':'')
     +'</div>'
     +'<div style="font-family:var(--in);font-size:14px;font-weight:800;color:'+(r.status==='pago'?'var(--green)':'#f59e0b')+'">R$ '+r.valor.toFixed(2)+'</div>'
     +'<span class="tag '+(r.status==='pago'?'tg':'ty')+'">'+(r.status==='pago'?'Pago':'Pendente')+'</span>'
     +(r.status!=='pago'?'<button class="btn btn-ghost btn-sm" style="font-size:10px" onclick="finPagar('+gi+')">✓ Pagar</button>':'')
     +'<button onclick="finDel('+gi+')" style="background:none;border:none;cursor:pointer;color:var(--n3);font-size:16px;padding:0 4px">✕</button>'
     +'</div>';
   });
   html+='</div>';
  });
 }
 return html;
}
function finAdd(){
 if(!cu)return;
 if(!cu.financeiro)cu.financeiro=[];
 var pac=(document.getElementById('fin-pac')||{}).value||'';
 var val=parseFloat((document.getElementById('fin-val')||{}).value)||0;
 if(!pac||!val){showToast('Preencha paciente e valor','w');return;}
 var today=new Date();
 var r={
  id:Date.now(),
  paciente:pac,
  valor:val,
  data:(document.getElementById('fin-data')||{}).value||today.toLocaleDateString('pt-BR'),
  tipo:(document.getElementById('fin-tipo')||{}).value||'Consulta',
  obs:(document.getElementById('fin-obs')||{}).value||'',
  status:'pendente'
 };
 cu.financeiro.push(r);
 DB.save();
 if(typeof apiAddFinancial==='function')apiAddFinancial(r).catch(function(){});
 // Hide inline form
 var f=document.getElementById('fin-form');
 if(f)f.style.display='none';
 showToast('Cobrança registrada!','s');
 goP('fin',document.getElementById('ni-fin'));
}
function finPagar(idx){
 if(!cu||!cu.financeiro)return;
 cu.financeiro[idx].status='pago';DB.save();
 if(typeof apiPayFinancial==='function')apiPayFinancial(cu.financeiro[idx].id).catch(function(){});
 showToast('Pagamento registrado','s');
 goP('fin',document.getElementById('ni-fin'));
}
function finDel(idx){
 if(!cu||!cu.financeiro)return;
 var rec=cu.financeiro.splice(idx,1)[0];DB.save();
 if(rec&&typeof apiDeleteFinancial==='function')apiDeleteFinancial(rec.id).catch(function(){});
 showToast('Registro removido','i');
 goP('fin',document.getElementById('ni-fin'));
}

function showOnboarding() { _onbStep = 0; renderOnbSlide(); openM('m-onboard'); }
function renderOnbSlide() {
  var el = document.getElementById('onb-body'); if (!el) return;
  var s = _onbSlides[_onbStep];
  var total = _onbSlides.length;
  var pct = Math.round((_onbStep / (total - 1)) * 100);

  var progressBar = '<div style="background:var(--n2);border-radius:99px;height:4px;margin-bottom:20px;overflow:hidden">'
    + '<div style="height:4px;border-radius:99px;background:' + s.color + ';width:' + pct + '%;transition:width .3s ease"></div>'
    + '</div>';

  var tipsList = '';
  if (s.tips && s.tips.length) {
    tipsList = '<div style="background:#fff;border-radius:12px;border:1px solid var(--n2);padding:4px 14px;margin:14px 0;text-align:left">'
      + s.tips.map(function (t) { return '<div style="font-size:12.5px;color:var(--n7);padding:8px 0;border-bottom:1px solid var(--n1);line-height:1.5">' + t + '</div>'; }).join('')
      + '</div>';
  }

  var dots = '<div style="margin-bottom:18px">'
    + _onbSlides.map(function (_, i) {
      return '<span style="display:inline-block;width:' + (i === _onbStep ? '20px' : '7px') + ';height:7px;border-radius:99px;'
        + 'background:' + (i === _onbStep ? s.color : 'var(--n2)') + ';margin:0 2px;transition:all .25s ease"></span>';
    }).join('')
    + '</div>';

  var prev = _onbStep > 0
    ? '<button class="btn btn-ghost btn-sm" onclick="_onbStep--;renderOnbSlide()" style="margin-right:8px">← Voltar</button>'
    : '';
  var nxtAct = _onbStep < total - 1 ? '_onbStep++;renderOnbSlide()' : 'closeM(\'m-onboard\')';

  el.innerHTML = progressBar
    + '<div style="background:' + s.bg + ';border-radius:14px;padding:20px;text-align:center">'
    + '<div style="font-size:44px;margin-bottom:10px">' + s.icon + '</div>'
    + '<div style="font-family:var(--jk);font-size:17px;font-weight:800;color:var(--n9);margin-bottom:4px">' + s.title + '</div>'
    + '<div style="font-size:11px;font-weight:700;color:' + s.color + ';font-family:var(--jk);letter-spacing:.06em;text-transform:uppercase;margin-bottom:10px">' + s.subtitle + '</div>'
    + '<div style="font-size:13px;color:var(--n6);line-height:1.7">' + s.body + '</div>'
    + '</div>'
    + tipsList
    + dots
    + '<div style="display:flex;align-items:center;justify-content:center">'
    + prev
    + '<button class="btn btn-p btn-lg" style="min-width:160px;background:' + s.color + ';border-color:' + s.color + '" onclick="' + nxtAct + '">' + s.action + '</button>'
    + '</div>';
}

// ─── MEDIDAS CASEIRAS ───
var _MC = { 'frango': ['filé médio', 130], 'patinho': ['bife médio', 100], 'salmão': ['filé médio', 120], 'atum': ['lata pequena', 170], 'tilápia': ['filé médio', 120], 'ovo': ['unidade grande', 50], 'aveia': ['xícara de chá rasa', 90], 'arroz cozido': ['colheres de sopa', 25], 'arroz integral': ['colheres de sopa', 25], 'feijão': ['colheres de sopa', 28], 'lentilha': ['colheres de sopa', 25], 'batata-doce': ['batata pequena', 130], 'batata doce': ['batata pequena', 130], 'banana': ['unidade média', 100], 'maçã': ['unidade média', 130], 'laranja': ['unidade média', 130], 'iogurte': ['pote de 200g', 200], 'azeite': ['colher de sopa', 13], 'azeite de oliva': ['colher de sopa', 13], 'queijo cottage': ['colheres de sopa', 30], 'granola': ['colheres de sopa', 15] };
function getMedidaCaseira(foodName, qty) {
  var fl = foodName.toLowerCase();
  var key = Object.keys(_MC).find(function (k) { return fl.indexOf(k) !== -1; });
  if (!key) return null;
  var n = qty / _MC[key][1];
  if (Math.abs(n - 1) < 0.15) return '1 ' + _MC[key][0];
  if (Math.abs(n - 0.5) < 0.1) return 'meia ' + _MC[key][0];
  return (Math.round(n * 10) / 10) + ' ' + _MC[key][0] + 's';
}

// ─── ALERTAS AUTOMÁTICOS ───
function _buildSmartAlerts() {
  var al = [];
  pats.forEach(function (p) {
    if (p.exams.vitd < 20) al.push({ p: p.n, c: 'r', t: 'Vitamina D crítica (' + p.exams.vitd + ' ng/mL)', ac: 'Suplementar 7000UI/dia', ic: '☀️', pid: p.id });
    else if (p.exams.vitd < 30) al.push({ p: p.n, c: 'y', t: 'Vitamina D insuficiente (' + p.exams.vitd + ' ng/mL)', ac: 'Suplementar 4000UI/dia', ic: '☀️', pid: p.id });
    if (p.exams.gli > 125) al.push({ p: p.n, c: 'r', t: 'Glicemia elevada (' + p.exams.gli + ' mg/dL)', ac: 'Revisar carboidratos', ic: '🩸', pid: p.id });
    else if (p.exams.gli > 100) al.push({ p: p.n, c: 'y', t: 'Glicemia limítrofe (' + p.exams.gli + ' mg/dL)', ac: 'Monitorar açúcares', ic: '🩸', pid: p.id });
    if (p.exams.col > 240) al.push({ p: p.n, c: 'r', t: 'Colesterol muito alto (' + p.exams.col + ' mg/dL)', ac: 'Dieta cardioprotetora', ic: '❤️', pid: p.id });
    else if (p.exams.col > 200) al.push({ p: p.n, c: 'y', t: 'Colesterol elevado (' + p.exams.col + ' mg/dL)', ac: 'Aumentar fibras solúveis', ic: '❤️', pid: p.id });
    if (p.exams.hem < 11) al.push({ p: p.n, c: 'r', t: 'Anemia (' + p.exams.hem + ' g/dL)', ac: 'Ferro + vitamina C', ic: '💉', pid: p.id });
    else if (p.exams.hem < 12.5) al.push({ p: p.n, c: 'y', t: 'Hemoglobina no limite (' + p.exams.hem + ' g/dL)', ac: 'Aumentar ferro heme', ic: '💉', pid: p.id });
    if (p.exams.fer < 15) al.push({ p: p.n, c: 'r', t: 'Ferritina crítica (' + p.exams.fer + ' ng/mL)', ac: 'Reposição urgente', ic: '⚡', pid: p.id });
    else if (p.exams.fer < 30) al.push({ p: p.n, c: 'y', t: 'Ferritina baixa (' + p.exams.fer + ' ng/mL)', ac: 'Monitorar e suplementar', ic: '⚡', pid: p.id });
    if (p.exams.tsh > 5) al.push({ p: p.n, c: 'r', t: 'TSH elevado (' + p.exams.tsh + ')', ac: 'Ajustar plano metabólico', ic: '🦋', pid: p.id });
    if (p.exams.tgo > 40 || p.exams.tgp > 40) al.push({ p: p.n, c: 'r', t: 'Transaminases elevadas', ac: 'Dieta hepatoprotetora', ic: '🫁', pid: p.id });
    if (p.prog < 30 && p.st !== 'tg') al.push({ p: p.n, c: 'y', t: 'Baixa adesão (' + p.prog + '%)', ac: 'Contatar paciente', ic: '📊', pid: p.id });
  });
  if (!al.length) return '<div class="card" style="margin-top:12px;background:var(--g0);border-color:var(--g3)"><div class="ch"><span class="ct" style="color:#166534">✅ Sem alertas clínicos</span></div><div style="font-size:12.5px;color:#166534;padding:4px 0">Todos os pacientes dentro dos parâmetros normais.</div></div>';
  var crit = al.filter(function (a) { return a.c === 'r'; }).length;
  var warn = al.filter(function (a) { return a.c === 'y'; }).length;
  var html = '<div class="card" style="margin-top:12px"><div class="ch"><span class="ct">⚠️ Alertas Clínicos</span><div style="display:flex;gap:6px">' + (crit ? '<span class="tag tr">' + crit + ' crítico' + (crit > 1 ? 's' : '') + '</span>' : '') + (warn ? '<span class="tag ty">' + warn + ' atenção</span>' : '') + '</div></div><div style="display:flex;flex-direction:column;gap:6px">';
  al.slice(0, 6).forEach(function (a) {
    var bg = a.c === 'r' ? '#fef2f2' : '#fffbeb'; var bc = a.c === 'r' ? '#fecaca' : '#fef08a'; var tc = a.c === 'r' ? '#b91c1c' : '#92400e'; var vc = a.c === 'r' ? '#dc2626' : '#d97706';
    html += '<div style="display:flex;align-items:flex-start;gap:10px;padding:9px 12px;border-radius:8px;background:' + bg + ';border:1px solid ' + bc + '">'
      + '<span style="font-size:18px;flex-shrink:0">' + a.ic + '</span>'
      + '<div style="flex:1"><div style="font-size:11.5px;font-weight:700;color:' + tc + '">' + a.p + '</div><div style="font-size:11px;color:' + vc + ';margin-top:1px">' + a.t + '</div><div style="font-size:10.5px;color:var(--n5);margin-top:3px">→ ' + a.ac + '</div></div>'
      + '<button class="btn btn-ghost btn-sm" onclick="selPat=pats.find(function(x){return x.id===' + a.pid + '});goP(\'ev\',document.getElementById(\'ni-ev\'))">Ver</button>'
      + '</div>';
  });
  if (al.length > 6) html += '<div style="text-align:center;font-size:11px;color:var(--n4);padding:4px">+' + (al.length - 6) + ' alertas adicionais</div>';
  return html + '</div></div>';
}

// ─── ADERÊNCIA CHART ───
var _adhData = [{ w: 'Sem 1', ali: 82, hid: 70, atv: 55, son: 65 }, { w: 'Sem 2', ali: 78, hid: 75, atv: 60, son: 70 }, { w: 'Sem 3', ali: 85, hid: 80, atv: 65, son: 72 }, { w: 'Sem 4', ali: 88, hid: 82, atv: 70, son: 75 }, { w: 'Sem 5', ali: 84, hid: 85, atv: 75, son: 78 }, { w: 'Sem 6', ali: 91, hid: 88, atv: 78, son: 80 }];
function buildAdherenceChart() {
  var el = document.getElementById('adh-chart'); if (!el) return;
  var W = el.offsetWidth || 400, H = 120;
  var cats = [{ k: 'ali', c: '#e85a0a', l: 'Alimentação' }, { k: 'hid', c: '#3b82f6', l: 'Hidratação' }, { k: 'atv', c: '#10b981', l: 'Atividade' }, { k: 'son', c: '#8b5cf6', l: 'Sono' }];
  var n = _adhData.length;
  var svg = '<svg viewBox="0 0 ' + W + ' ' + H + '" width="100%" height="' + H + '">';
  [25, 50, 75, 100].forEach(function (v) { var y = H - 10 - (v / 100 * (H - 20)); svg += '<line x1="30" x2="' + W + '" y1="' + y + '" y2="' + y + '" stroke="#f3f4f6" stroke-width="1"/><text x="26" y="' + (y + 4) + '" text-anchor="end" font-size="8" fill="#9ca3af">' + v + '</text>'; });
  cats.forEach(function (cat) {
    var pts = _adhData.map(function (d, i) { return { x: (30 + i * (W - 40) / (n - 1)).toFixed(1), y: (H - 10 - (d[cat.k] / 100 * (H - 20))).toFixed(1) }; });
    var path = pts.map(function (p, i) { return (i === 0 ? 'M' : 'L') + p.x + ',' + p.y; }).join(' ');
    svg += '<path d="' + path + '" fill="none" stroke="' + cat.c + '" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
    pts.forEach(function (p) { svg += '<circle cx="' + p.x + '" cy="' + p.y + '" r="3" fill="' + cat.c + '"/>'; });
  });
  _adhData.forEach(function (d, i) { var x = (30 + i * (W - 40) / (n - 1)).toFixed(1); svg += '<text x="' + x + '" y="' + H + '" text-anchor="middle" font-size="8" fill="#9ca3af">' + d.w + '</text>'; });
  svg += '</svg>';
  el.innerHTML = svg;
  var leg = document.getElementById('adh-legend');
  if (leg) leg.innerHTML = cats.map(function (cat) { return '<div style="display:flex;align-items:center;gap:5px"><div style="width:12px;height:3px;border-radius:99px;background:' + cat.c + '"></div><span style="font-size:10.5px;color:var(--n5)">' + cat.l + '</span></div>'; }).join('');
}
function _buildAdhCard() {
  var avg = Math.round(_adhData.reduce(function (s, d) { return s + (d.ali + d.hid + d.atv + d.son) / 4; }, 0) / _adhData.length);
  return '<div class="card" style="margin-top:12px"><div class="ch"><span class="ct">📈 Aderência dos Pacientes</span><div style="display:flex;gap:8px;align-items:center"><div id="adh-legend" style="display:flex;gap:10px"></div><span class="tag tg">' + avg + '% média</span></div></div><div id="adh-chart" style="margin-top:8px"></div></div>';
}

// ─── BUSCA GLOBAL ───
function rBusca(){
 return '<div style="max-width:680px">'
  // Search bar
  +'<div style="position:relative;margin-bottom:20px">'
  +'<input class="inp" id="global-q" placeholder="🔍 Buscar pacientes, alimentos, templates..." oninput="globalSearch()" style="padding-left:44px;font-size:14px;height:48px;border-radius:14px" autofocus>'
  +'<svg viewBox="0 0 24 24" fill="currentColor" style="position:absolute;left:14px;top:50%;transform:translateY(-50%);width:18px;height:18px;color:var(--n4)"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>'
  +'</div>'
  +'<div id="busca-results"></div>'
  // Quick access cards when empty
  +'<div id="busca-shortcuts">'
  +'<div style="font-size:11px;font-weight:700;color:var(--n5);text-transform:uppercase;letter-spacing:.06em;margin-bottom:10px">Acesso Rápido</div>'
  +'<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px">'
  +[['👥','Pacientes','pat','ni-pat'],['📋','Prescrição','presc','ni-presc'],['🤖','IA Nutricional','ai','ni-ai'],
    ['📊','Acompanhamento','ev','ni-ev'],['🗓️','Plano Semanal','week','ni-week'],['📝','Anamnese','anam','ni-anam'],
    ['🔬','Micronutrientes','micro','ni-micro'],['⏱️','Recordatório','rec','ni-rec'],['📁','Templates','tpl','ni-tpl'],
    ['💊','Suplementação','supl','ni-supl'],['💰','Financeiro','fin','ni-fin'],['🗓','Agenda','agenda','ni-agenda']].map(function(m){
    return '<div onclick="goP(\''+m[2]+'\',document.getElementById(\''+m[3]+'\'))" style="padding:12px;border:1.5px solid var(--n2);border-radius:12px;cursor:pointer;transition:all .15s;text-align:center;background:#fff" onmouseover="this.style.borderColor=\'var(--g4)\';this.style.background=\'var(--g0)\'" onmouseout="this.style.borderColor=\'var(--n2)\';this.style.background=\'#fff\'">'
     +'<div style="font-size:22px;margin-bottom:4px">'+m[0]+'</div>'
     +'<div style="font-size:11.5px;font-weight:700;color:var(--n7)">'+m[1]+'</div>'
     +'</div>';
   }).join('')
  +'</div></div></div>';
}
function globalSearch(q){
 var el=document.getElementById('global-results');if(!el)return;
 var ql=(q||document.getElementById('global-q')&&document.getElementById('global-q').value||'').toLowerCase().trim();
 if(ql.length<2){
  el.innerHTML='<div style="text-align:center;padding:30px;color:var(--n4)">Digite ao menos 2 caracteres para buscar</div>';
  return;
 }
 var results=[];
 // Patients
 pats.forEach(function(p){
  var nm=(p.n||'').toLowerCase(),em=(p.email||'').toLowerCase();
  var ob=(p.obj||p.objetivo||'').toLowerCase(),dx=(p.diag||'').toLowerCase();
  if(nm.includes(ql)||em.includes(ql)||ob.includes(ql)||dx.includes(ql)){
   results.push({type:'pac',icon:'👤',title:p.n||'—',sub:(p.obj||p.objetivo||'Sem objetivo')+(p.w?' · '+p.w+'kg':''),onclick:"openPatById("+p.id+")"});
  }
 });
 // Templates
 (templates||[]).forEach(function(t){
  if((t.name||'').toLowerCase().includes(ql)){
   results.push({type:'tpl',icon:'📋',title:t.name,sub:'Template de plano',onclick:"goP('tpl',document.getElementById('ni-tpl'))"});
  }
 });
 // Foods
 var foods=FOOD_DB.filter(function(f){return (f.n||'').toLowerCase().includes(ql);}).slice(0,5);
 foods.forEach(function(f){
  results.push({type:'food',icon:f.e||'🍽️',title:f.n,sub:f.k+'kcal · P:'+f.p+'g C:'+f.c+'g G:'+f.g+'g',onclick:"goP('presc',document.getElementById('ni-presc'))"});
 });

 if(!results.length){
  el.innerHTML='<div style="text-align:center;padding:30px;color:var(--n4)">Nenhum resultado para "'+escHtml(ql)+'"</div>';
  return;
 }

 el.innerHTML=results.map(function(r){
  return '<div class="sr-item" onclick="'+r.onclick+'" style="display:flex;align-items:center;gap:12px;padding:12px 14px;border-radius:12px;cursor:pointer;margin-bottom:6px;border:1.5px solid var(--n2);transition:all .15s" '
   +'onmouseover="this.style.borderColor=\'var(--g4)\';this.style.background=\'var(--g0)\'" '
   +'onmouseout="this.style.borderColor=\'var(--n2)\';this.style.background=\'\'">'
   +'<span style="font-size:22px;flex-shrink:0">'+r.icon+'</span>'
   +'<div style="flex:1;min-width:0">'
   +'<div style="font-weight:700;font-size:13px;color:var(--n9);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">'+escHtml(r.title)+'</div>'
   +'<div style="font-size:11px;color:var(--n5);margin-top:2px">'+escHtml(r.sub)+'</div>'
   +'</div>'
   +'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--n3)" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>'
   +'</div>';
 }).join('');
}


// ─── HELPER ───
function _anamSelChange(pid) { var pp = pats.find(function (x) { return x.id === pid; }); if (pp) { selPat = pp; goP('anam', document.getElementById('ni-anam')); } }

// ─── ANAMNESE CLÍNICA ───
var _anamPat = null;
function rAnam(){
 var p=selPat||pats[0];_anamPat=p;
 var a=p.anamnese||{};
 var alerts=[];
 if(p.exams.vitd<30)alerts.push({c:'r',t:'Vitamina D insuficiente ('+p.exams.vitd+' ng/mL)'});
 if(p.exams.gli>100)alerts.push({c:'y',t:'Glicemia elevada ('+p.exams.gli+' mg/dL)'});
 if(p.exams.col>200)alerts.push({c:'y',t:'Colesterol acima do ideal ('+p.exams.col+' mg/dL)'});
 if(p.exams.hem<12)alerts.push({c:'r',t:'Hemoglobina baixa ('+p.exams.hem+' g/dL)'});
 if(p.exams.fer<20)alerts.push({c:'r',t:'Ferritina baixa ('+p.exams.fer+' ng/mL)'});
 if(p.exams.tsh>4)alerts.push({c:'y',t:'TSH elevado ('+p.exams.tsh+')'});
 if((a.sono||7)<6)alerts.push({c:'y',t:'Sono insuficiente ('+(a.sono||'-')+'h/noite)'});
 if(p.exams.tgo>40||p.exams.tgp>40)alerts.push({c:'r',t:'Transaminases elevadas'});
 var selOpts=pats.map(function(pp){return '<option value="'+pp.id+'"'+(pp.id===p.id?' selected':'')+'>'+pp.n+'</option>';}).join('');
 var examFields=[['Glicemia','an-gli','mg/dL',p.exams.gli],['Colesterol','an-col','mg/dL',p.exams.col],['Vitamina D','an-vitd','ng/mL',p.exams.vitd],['Hemoglobina','an-hem','g/dL',p.exams.hem],['Ferritina','an-fer','ng/mL',p.exams.fer],['TSH','an-tsh','µUI',p.exams.tsh],['TGO','an-tgo','U/L',p.exams.tgo],['TGP','an-tgp','U/L',p.exams.tgp]];
 var examColors={g:'#16a34a',y:'#d97706',r:'#dc2626'};
 function exSt(name,v){return name==='Glicemia'?(v>125?'r':v>100?'y':'g'):name==='Vitamina D'?(v<20?'r':v<30?'y':'g'):name==='Hemoglobina'?(v<11?'r':v<12.5?'y':'g'):name==='Ferritina'?(v<15?'r':v<30?'y':'g'):name==='TSH'?(v>5?'r':v>4?'y':'g'):name==='Colesterol'?(v>240?'r':v>200?'y':'g'):(v>40?'y':'g');}
 var habitItems=[{ic:'😴',lb:'Sono',val:(a.sono||7)+'h/noite',st:(a.sono||7)>=7?'g':(a.sono||7)>=6?'y':'r'},{ic:'💧',lb:'Hidratação',val:(p.agua||2).toFixed(1).replace('.',',')+' L/dia',st:(p.agua||2)>=2?'g':'y'},{ic:'🏃',lb:'Atividade',val:a.ativ||'Não informado',st:(a.ativ&&a.ativ!=='Sedentário')?'g':'y'},{ic:'😰',lb:'Estresse',val:a.stress||'Não informado',st:(a.stress==='Baixo'||a.stress==='Moderado')?'g':'r'},{ic:'🚽',lb:'Intestino',val:a.intestino||'Não informado',st:a.intestino==='Normal'?'g':'y'},{ic:'🚬',lb:'Tabagismo',val:a.tabagismo||'Não informado',st:a.tabagismo==='Não'?'g':'r'}];
 var hBg={g:'#f0fdf4',y:'#fffbeb',r:'#fef2f2'};var hTx={g:'#166534',y:'#92400e',r:'#b91c1c'};
 var habitGrid=habitItems.map(function(h){return '<div style="background:'+hBg[h.st]+';border-radius:9px;padding:12px;text-align:center"><div style="font-size:22px;margin-bottom:6px">'+h.ic+'</div><div style="font-size:10px;color:var(--n4);font-weight:700;text-transform:uppercase">'+h.lb+'</div><div style="font-size:12px;font-weight:700;color:'+hTx[h.st]+';margin-top:3px">'+h.val+'</div></div>';}).join('');
 var alertHtml=alerts.length?'<div class="card" style="margin-bottom:12px"><div class="ch"><span class="ct" style="color:#b91c1c">⚠ Alertas</span><span class="tag tr">'+alerts.length+'</span></div>'+alerts.map(function(al){return '<div style="display:flex;align-items:flex-start;gap:8px;padding:7px 0;border-bottom:1px solid var(--n1)"><span style="width:8px;height:8px;border-radius:50%;background:'+(al.c==='r'?'#dc2626':'#d97706')+';flex-shrink:0;margin-top:4px"></span><span style="font-size:11.5px;color:var(--n7)">'+al.t+'</span></div>';}).join('')+'</div>':'';
 return '<div style="display:grid;grid-template-columns:270px 1fr;gap:14px;align-items:start">'
  +'<div>'
  +'<div class="card" style="margin-bottom:12px"><div class="ch"><span class="ct">Selecionar Paciente</span></div>'
  +'<select class="sel" id="anam-pat-sel" style="width:100%;margin-bottom:10px">'+selOpts+'</select>'
  +'<div style="display:flex;align-items:center;gap:10px;padding:10px;background:var(--n0);border-radius:9px"><div style="width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,var(--g5),var(--g4));display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:800;color:#fff;flex-shrink:0">'+p.i+'</div>'
  +'<div><div style="font-family:var(--jk);font-size:13px;font-weight:700;color:var(--n9)">'+p.n+'</div><div style="font-size:11px;color:var(--n5);margin-top:2px">'+p.age+' anos · '+p.w+'kg · '+p.goal+'</div></div></div></div>'
  +alertHtml
  +'<div class="card" style="margin-bottom:12px"><div class="ch"><span class="ct">Exames</span></div><div style="display:flex;flex-direction:column;gap:4px">'+examFields.map(function(f){var st=exSt(f[0],f[3]);return '<div style="display:flex;align-items:center;gap:8px;padding:5px 0;border-bottom:1px solid var(--n1)"><span style="width:7px;height:7px;border-radius:50%;background:'+examColors[st]+';flex-shrink:0"></span><span style="flex:1;font-size:11.5px;color:var(--n6)">'+f[0]+'</span><span style="font-family:var(--in);font-size:13px;font-weight:700;color:'+examColors[st]+'">'+f[3]+'</span><span style="font-size:10px;color:var(--n4)">'+f[2]+'</span></div>';}).join('')+'</div></div>'
  +'<div class="card"><div class="ch"><span class="ct">Aderência</span></div><div style="display:flex;justify-content:space-between;margin-bottom:5px"><span style="font-size:12px;font-weight:600;color:var(--n7)">Geral</span><span style="font-family:var(--in);font-size:14px;font-weight:800;color:var(--g5)">'+p.prog+'%</span></div><div style="height:10px;background:var(--n2);border-radius:99px;overflow:hidden"><div style="width:'+p.prog+'%;height:100%;background:linear-gradient(90deg,var(--g5),var(--g4));border-radius:99px"></div></div></div>'
  +'</div>'
  +'<div>'
  +'<div class="card" style="margin-bottom:12px"><div class="ch"><span class="ct">Dados Clínicos</span></div>'
  +'<div class="row3" style="gap:8px"><div class="fld"><label class="lbl">Condição / Diagnóstico</label><input class="inp" id="an-cond" value="'+(p.cond||'')+'"/></div><div class="fld"><label class="lbl">Medicamentos</label><input class="inp" id="an-meds" value="'+(a.meds||'')+'"/></div><div class="fld"><label class="lbl">Alergias</label><input class="inp" id="an-alerg" value="'+(p.alerg||'')+'"/></div></div>'
  +'<div class="fld" style="margin-top:8px"><label class="lbl">Queixas principais</label><textarea class="textarea" id="an-queixas">'+(a.queixas||'')+'</textarea></div>'
  +'<div class="fld"><label class="lbl">Histórico de dietas</label><textarea class="textarea" id="an-hist">'+(a.historico_dieta||'')+'</textarea></div>'
  +'</div>'
  +'<div class="card" style="margin-bottom:12px"><div class="ch"><span class="ct">Hábitos de Vida</span></div>'
  +'<div class="row4" style="gap:8px"><div class="fld"><label class="lbl">Sono (h/noite)</label><input class="inp" id="an-sono" type="number" step="0.5" value="'+(a.sono||7)+'"/></div><div class="fld"><label class="lbl">Água (L/dia)</label><input class="inp" id="an-agua" type="number" step="0.1" value="'+(p.agua||2)+'"/></div><div class="fld"><label class="lbl">Estresse</label><select class="sel" id="an-stress"><option'+(a.stress==='Baixo'?' selected':'')+'>Baixo</option><option'+(a.stress==='Moderado'?' selected':'')+'>Moderado</option><option'+(a.stress==='Alto'?' selected':'')+'>Alto</option><option'+(a.stress==='Muito alto'?' selected':'')+'>Muito alto</option></select></div><div class="fld"><label class="lbl">Atividade</label><select class="sel" id="an-ativ"><option'+(a.ativ==='Sedentário'?' selected':'')+'>Sedentário</option><option'+(a.ativ==='Levemente ativo'?' selected':'')+'>Levemente ativo</option><option'+(a.ativ==='Moderadamente ativo'?' selected':'')+'>Moderadamente ativo</option><option'+(a.ativ==='Muito ativo'?' selected':'')+'>Muito ativo</option></select></div></div>'
  +'<div class="fld" style="margin-top:8px"><label class="lbl">Treino</label><input class="inp" id="an-treino" value="'+(a.treino||'')+'"/></div>'
  +'<div style="margin-top:10px;display:grid;grid-template-columns:repeat(3,1fr);gap:8px">'+habitGrid+'</div>'
  +'</div>'
  +'<div class="card" style="margin-bottom:12px"><div class="ch"><span class="ct">Conduta Nutricional</span></div>'
  +'<div class="fld"><label class="lbl">Conduta planejada</label><textarea class="textarea" id="an-conduta" rows="3">'+(a.conduta||'')+'</textarea></div>'
  +'<div class="fld"><label class="lbl">Suplementação</label><textarea class="textarea" id="an-suple" rows="2">'+(a.suplementacao||'')+'</textarea></div>'
  +'<div class="row2" style="gap:8px;margin-top:8px"><div class="fld"><label class="lbl">Meta de peso (kg)</label><input class="inp" id="an-meta" type="number" step="0.1"/></div><div class="fld"><label class="lbl">Próximo retorno</label><input class="inp" id="an-retorno" type="date" value="'+(a.retorno||'')+'"/></div></div></div>'
  +'<div class="card"><div class="ch"><span class="ct">Atualizar Exames</span></div>'
  +'<div class="row4" style="gap:8px">'+examFields.map(function(f){return '<div class="fld"><label class="lbl">'+f[0]+' ('+f[2]+')</label><input class="inp" id="'+f[1]+'" type="number" step="0.1" value="'+f[3]+'"/></div>';}).join('')+'</div>'
  +'<div class="card" style="margin-top:14px;border:1.5px solid #bae6fd;background:#f0f9ff">'
  +'<div class="ch"><span class="ct" style="color:#0369a1">🔒 Consentimento e LGPD</span></div>'
  +'<div style="font-size:12px;color:#0c4a6e;line-height:1.8;margin-bottom:12px">'
  +'<strong>Finalidade:</strong> Tratamento de dados para acompanhamento nutricional clínico.<br>'
  +'<strong>Base legal:</strong> Tutela da saúde — Art. 7º, VIII e Art. 11, II, f (Lei 13.709/2018).<br>'
  +'<strong>Retenção:</strong> 5 anos conforme Resolução CFN nº 600/2018.<br>'
  +'<strong>Controlador:</strong> '+(cu?cu.name+' (CRN '+(cu.crn||'não informado')+')':'—')+'</div>'
  +'<div style="display:flex;flex-direction:column;gap:8px">'
  +(a.lgpd_consent?'<div style="background:#dcfce7;border:1px solid #86efac;border-radius:6px;padding:8px 12px;font-size:12px;color:#15803d;font-weight:600">✅ Consentimento registrado em '+a.lgpd_date+'</div>':'<div style="background:#fff;border:1px solid #bae6fd;border-radius:6px;padding:8px 12px;font-size:12px;color:#374151">⚠️ Consentimento ainda não registrado</div>')
  +'<div style="display:flex;gap:8px;flex-wrap:wrap">'
  +'<button class="btn btn-s btn-sm" onclick="_lgpdConsent()">✅ Registrar Consentimento</button>'
  +'<button class="btn btn-ghost btn-sm" onclick="_lgpdRevoke()">🚫 Revogar Consentimento</button>'
  +'<button class="btn btn-ghost btn-sm" onclick="_lgpdExport()">📤 Exportar Dados do Paciente</button>'
  +'<button class="btn btn-ghost btn-sm" style="color:var(--red)" onclick="_lgpdDelete()">🗑️ Eliminar Dados</button>'
  +'</div></div></div>'
  +'<div style="margin-top:12px;display:flex;gap:8px"><button class="btn btn-p btn-sm" onclick="saveAnam()">💾 Salvar</button><button class="btn btn-gold btn-sm" onclick="exportAnamPDF()">📄 Exportar PDF</button></div></div>'
  +'</div></div>';
}
function saveAnam() {
  var p = _anamPat || selPat || pats[0]; if (!p) return;
  if (!p.anamnese) p.anamnese = {}; var a = p.anamnese;
  function gv(id) { var el = document.getElementById(id); return el ? el.value : ''; }
  p.cond = gv('an-cond') || p.cond; p.alerg = gv('an-alerg') || p.alerg;
  a.meds = gv('an-meds'); a.queixas = gv('an-queixas'); a.historico_dieta = gv('an-hist');
  a.sono = parseFloat(gv('an-sono')) || a.sono; p.agua = parseFloat(gv('an-agua')) || p.agua;
  a.stress = gv('an-stress'); a.ativ = gv('an-ativ'); a.treino = gv('an-treino');
  a.conduta = gv('an-conduta'); a.suplementacao = gv('an-suple'); a.retorno = gv('an-retorno');
  [['an-gli', 'gli'], ['an-col', 'col'], ['an-vitd', 'vitd'], ['an-hem', 'hem'], ['an-fer', 'fer'], ['an-tsh', 'tsh'], ['an-tgo', 'tgo'], ['an-tgp', 'tgp']].forEach(function (f) { var v = parseFloat(gv(f[0])); if (!isNaN(v)) p.exams[f[1]] = v; });
  showToast('Anamnese de ' + p.n + ' salva!', 's');
}
function exportAnamPDF() {
  var p = _anamPat || selPat || pats[0]; if (!p) return;
  var a = p.anamnese || {};
  var today = new Date().toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' });
  var w = window.open('', '_blank', 'width=880,height=700');
  w.document.write('<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8"><title>Anamnese — ' + p.n + '</title><style>*{box-sizing:border-box;margin:0;padding:0}body{font-family:system-ui,sans-serif;color:#1a1410;font-size:12px;line-height:1.6}@media print{@page{size:A4;margin:12mm}.noprint{display:none!important}}.hd{background:linear-gradient(135deg,#1f0d00,#c4420a);color:#fff;padding:18px 28px;display:flex;justify-content:space-between;align-items:center}.brand{font-size:20px;font-weight:800}.brand span{color:#f9a868}.sec{padding:14px 28px;border-bottom:1px solid #f0e8e0}.st{font-size:10px;font-weight:700;color:#c4420a;letter-spacing:.1em;text-transform:uppercase;margin-bottom:10px;padding-bottom:5px;border-bottom:2px solid #fdd0a8}.g2{display:grid;grid-template-columns:1fr 1fr;gap:10px}.g3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px}.g4{display:grid;grid-template-columns:repeat(4,1fr);gap:8px}.f label{font-size:9px;font-weight:700;color:#7a6a58;text-transform:uppercase;letter-spacing:.06em;display:block;margin-bottom:2px}.f .v{font-size:12px;color:#1a1410;font-weight:500}.ex{background:#f9f5f0;border-radius:7px;padding:8px;text-align:center}.ex-v{font-size:15px;font-weight:800}.ft{background:#f9f5f0;padding:10px 28px;display:flex;justify-content:space-between;font-size:10px;color:#7a6a58}</style></head><body>'
    + '<div class="hd"><div><div class="brand">Diet<span>On</span></div><div style="font-size:10px;opacity:.7">DIETA ONLINE</div></div><div style="text-align:center"><div style="font-size:14px;font-weight:700">Ficha de Anamnese Nutricional</div><div style="font-size:10px;opacity:.7">Documento Clínico Confidencial</div></div><div style="text-align:right;font-size:10px;opacity:.8">' + today + '<br>' + cu.name + '<br>' + (cu.crn || '') + '</div></div>'
    + '<div class="sec"><div class="st">Identificação</div><div class="g3"><div class="f"><label>Nome</label><div class="v" style="font-size:14px;font-weight:700">' + p.n + '</div></div><div class="f"><label>Idade / Sexo</label><div class="v">' + p.age + ' anos · ' + (p.sex === 'F' ? 'Feminino' : 'Masculino') + '</div></div><div class="f"><label>Objetivo</label><div class="v">' + p.goal + '</div></div><div class="f"><label>Condição</label><div class="v">' + (p.cond || 'Saudável') + '</div></div><div class="f"><label>Alergias</label><div class="v">' + (p.alerg || 'Nenhuma') + '</div></div><div class="f"><label>Medicamentos</label><div class="v">' + (a.meds || 'Nenhum') + '</div></div></div></div>'
    + '<div class="sec"><div class="st">Dados Antropométricos</div><div class="g4"><div class="ex"><div style="font-size:9px;color:#7a6a58;text-transform:uppercase">Peso</div><div class="ex-v" style="color:#c4420a">' + p.w + ' kg</div></div><div class="ex"><div style="font-size:9px;color:#7a6a58;text-transform:uppercase">Altura</div><div class="ex-v" style="color:#c4420a">' + p.h + ' cm</div></div><div class="ex"><div style="font-size:9px;color:#7a6a58;text-transform:uppercase">IMC</div><div class="ex-v" style="color:#c4420a">' + p.bmi + '</div></div><div class="ex"><div style="font-size:9px;color:#7a6a58;text-transform:uppercase">% Gordura</div><div class="ex-v" style="color:#c4420a">' + p.fat + '%</div></div></div></div>'
    + '<div class="sig-area" style="margin:24px 0;border-top:1px solid #e5e7eb;padding-top:20px">'
    + '<div style="display:grid;grid-template-columns:1fr 1fr;gap:32px">'
    + '<div style="text-align:center">'
    + '<canvas id="sig-pac" width="280" height="90" style="border:1px solid #d1d5db;border-radius:6px;cursor:crosshair;touch-action:none;background:#fafafa"></canvas>'
    + '<div style="font-size:11px;color:#6b7280;margin-top:6px">Assinatura do Paciente — ' + p.n + '</div>'
    + '<div class="noprint" style="display:flex;gap:8px;justify-content:center;margin-top:6px">'
    + '<button onclick="clearSig(\'sig-pac\')" style="font-size:11px;padding:3px 10px;border:1px solid #d1d5db;border-radius:4px;cursor:pointer;background:#fff">Limpar</button>'
    + '</div></div>'
    + '<div style="text-align:center">'
    + '<canvas id="sig-pro" width="280" height="90" style="border:1px solid #d1d5db;border-radius:6px;cursor:crosshair;touch-action:none;background:#fafafa"></canvas>'
    + '<div style="font-size:11px;color:#6b7280;margin-top:6px">Assinatura do Nutricionista — ' + (cu ? cu.name : '') + '</div>'
    + '<div class="noprint" style="display:flex;gap:8px;justify-content:center;margin-top:6px">'
    + '<button onclick="clearSig(\'sig-pro\')" style="font-size:11px;padding:3px 10px;border:1px solid #d1d5db;border-radius:4px;cursor:pointer;background:#fff">Limpar</button>'
    + '</div></div></div></div>'
    + '<div style="background:#f0f9ff;border:1px solid #bae6fd;border-radius:6px;padding:12px 16px;margin:16px 0;font-size:11px;color:#0c4a6e;line-height:1.7">'
    + '<strong>🔒 LGPD — Lei Geral de Proteção de Dados (Lei nº 13.709/2018)</strong><br>'
    + 'Os dados clínicos e nutricionais contidos neste documento são tratados com base na hipótese legal de tutela da saúde (Art. 7º, VIII e Art. 11, II, f). '
    + 'Finalidade: acompanhamento nutricional clínico. Retenção: 5 anos conforme CFN. '
    + 'Controlador: ' + cu.name + ' (CRN ' + (cu.crn || '—') + '). Paciente tem direito de acesso, retificação e eliminação dos dados.'
    + '</div>'
    + '<div class="ft" style="border-top:1px solid #e5e7eb;margin-top:16px"><div>DietOn · ' + p.n + '</div>'
    + '<button class="noprint" onclick="window.print()" style="background:#e85a0a;color:#fff;border:none;padding:6px 16px;border-radius:6px;font-weight:700;cursor:pointer">🖨️ Imprimir / Salvar PDF</button>'
    + '<div>Documento sigiloso · LGPD</div></div>'
    + '<script>'
    + '(function(){function mkSig(id){var c=document.getElementById(id);if(!c)return;var ctx=c.getContext(\'2d\');ctx.strokeStyle=\'#1e293b\';ctx.lineWidth=2;ctx.lineCap=\'round\';var drawing=false,lx=0,ly=0;function pos(e){var r=c.getBoundingClientRect();var x=(e.touches?e.touches[0].clientX:e.clientX)-r.left;var y=(e.touches?e.touches[0].clientY:e.clientY)-r.top;return{x:x,y:y};}c.addEventListener(\'mousedown\',function(e){drawing=true;var p=pos(e);lx=p.x;ly=p.y;});c.addEventListener(\'mousemove\',function(e){if(!drawing)return;var p=pos(e);ctx.beginPath();ctx.moveTo(lx,ly);ctx.lineTo(p.x,p.y);ctx.stroke();lx=p.x;ly=p.y;});c.addEventListener(\'mouseup\',function(){drawing=false;});c.addEventListener(\'touchstart\',function(e){e.preventDefault();drawing=true;var p=pos(e);lx=p.x;ly=p.y;},{passive:false});c.addEventListener(\'touchmove\',function(e){e.preventDefault();if(!drawing)return;var p=pos(e);ctx.beginPath();ctx.moveTo(lx,ly);ctx.lineTo(p.x,p.y);ctx.stroke();lx=p.x;ly=p.y;},{passive:false});c.addEventListener(\'touchend\',function(){drawing=false;});}mkSig(\'sig-pac\');mkSig(\'sig-pro\');window.clearSig=function(id){var c=document.getElementById(id);if(c)c.getContext(\'2d\').clearRect(0,0,c.width,c.height);};}())'
    + '<\/script>'
    + '</body></html>');
  w.document.close(); showToast('Anamnese exportada!', 's');
}

function showToast(msg,type){
 var conf={s:{cls:'t-s',ic:'✓'},i:{cls:'t-i',ic:'i'},w:{cls:'t-w',ic:'!'},e:{cls:'t-e',ic:'✕'}};
 var c=conf[type]||conf.i;
 if(!msg)return;var t=document.createElement('div');t.className='toast '+c.cls;
 t.innerHTML='<div class="t-ico">'+c.ic+'</div><span>'+msg+'</span>';
 document.body.appendChild(t);
 setTimeout(function(){t.style.transition='opacity .3s,transform .3s';t.style.opacity='0';t.style.transform='translateY(8px)';setTimeout(function(){if(t.parentNode)t.parentNode.removeChild(t);},310);},3200);
}


// ══════════════════════════════════════════════════════════════
//  DIÁRIO DE FOTOS — DietOn
// ══════════════════════════════════════════════════════════════

var REACTS = ['👍', '❤️', '😊', '✅', '⚠️', '💪', '🎯', '😮'];
var _dvProFilter = 'all';
var _dvProPatFilter = 'all';

function _dvFmtTime(ts) { return new Date(ts).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }); }
function _dvFmtFull(ts) { return new Date(ts).toLocaleDateString('pt-BR', { weekday: 'short', day: '2-digit', month: '2-digit' }) + ' às ' + _dvFmtTime(ts); }
var _dvMeals = ['☀️ Café da manhã', '🥗 Almoço', '🌙 Jantar', '🍎 Lanche', '🥛 Ceia', '🍽️ Outra'];

// ── PACIENTE ────────────────────────────────────────────────
function rPacDiary(){
  var p=_getPacPatient();
  var patId=p?p.id:'pac';
  var photos=JSON.parse(localStorage.getItem('dieton_diary')||'{}');
  var myPhotos=Object.entries(photos)
    .filter(function(e){return e[0].indexOf('ph_'+patId+'_')===0;})
    .map(function(e){return Object.assign({key:e[0]},e[1]);})
    .sort(function(a,b){return b.ts-a.ts;});

  var unseenReacts=myPhotos.filter(function(e){return e.reactions&&Object.keys(e.reactions).length&&!e.seenByPac;}).length;

  var html='<div style="max-width:680px">';
  html+='<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px">';
  html+='<div><div style="font-family:var(--jk);font-size:16px;font-weight:800;color:var(--n9)">📸 Diário de Fotos</div>';
  html+='<div style="font-size:11.5px;color:var(--n4);margin-top:2px">Registre suas refeições livremente</div></div>';
  html+='<label class="btn btn-p" style="cursor:pointer;gap:7px">';
  html+='<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20 5h-3.17L15 3H9L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 14H4V7h4.05l1.83-2h4.24l1.83 2H20v12zm-8-11c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"/></svg>';
  html+='Nova foto<input type="file" accept="image/*" capture="environment" style="display:none" id="dv-file-inp"/></label>';
  html+='</div>';

  if(unseenReacts){
    html+='<div style="background:var(--g0);border:1.5px solid var(--g2);border-radius:var(--r2);padding:11px 14px;margin-bottom:14px;display:flex;align-items:center;gap:10px;font-size:12.5px;color:var(--g6);font-weight:600">';
    html+='<span style="font-size:20px">🎉</span> Sua nutricionista reagiu a <strong>'+unseenReacts+' foto(s)</strong>!</div>';
  }

  if(!myPhotos.length){
    html+='<div style="text-align:center;padding:60px 20px;background:#fff;border-radius:var(--r3);border:1.5px dashed var(--n2)">';
    html+='<div style="font-size:56px;margin-bottom:12px">🥦</div>';
    html+='<div style="font-family:var(--jk);font-size:15px;font-weight:700;color:var(--n7);margin-bottom:6px">Nenhum registro ainda</div>';
    html+='<div style="font-size:12.5px;color:var(--n4);max-width:280px;margin:0 auto;line-height:1.7">Clique em <strong>Nova foto</strong> acima!</div>';
    html+='</div>';
  }else{
    html+='<div style="display:flex;flex-direction:column;gap:12px">';
    myPhotos.forEach(function(item,idx){
      var hasReact=item.reactions&&Object.keys(item.reactions).length;
      html+='<div class="dv-card">';
      html+='<div style="display:flex;align-items:center;gap:10px;padding:11px 14px;border-bottom:1px solid var(--n2)">';
      html+='<div style="font-size:18px">'+(item.meal?item.meal.split(' ')[0]:'🍽️')+'</div>';
      html+='<div><div style="font-family:var(--jk);font-size:12px;font-weight:700;color:var(--n9)">'+(item.meal||'Refeição')+'</div>';
      html+='<div style="font-size:10.5px;color:var(--n4)">'+_dvFmtFull(item.ts)+'</div></div>';
      if(hasReact) html+='<div style="margin-left:auto;font-size:10px;font-weight:700;padding:3px 9px;border-radius:99px;background:var(--g0);color:var(--g5);font-family:var(--jk)">Reagida ✓</div>';
      html+='<button data-dvdel="'+item.key+'" style="margin-left:'+(hasReact?'4px':'auto')+';width:28px;height:28px;border-radius:7px;border:none;background:var(--red-l);color:var(--red);cursor:pointer;display:flex;align-items:center;justify-content:center" title="Remover"><svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg></button>';
      html+='</div>';
      html+='<img data-dvlb="'+item.key+'" src="data:," style="width:100%;max-height:300px;object-fit:cover;display:block;cursor:zoom-in" loading="lazy">';
      if(item.caption) html+='<div style="padding:9px 14px 4px;font-size:12.5px;color:var(--n6);font-style:italic;line-height:1.6">&ldquo;'+item.caption+'&rdquo;</div>';
      if(hasReact){
        html+='<div style="padding:10px 14px;background:var(--g0);border-top:1px solid var(--g1)">';
        html+='<div style="font-size:10px;font-weight:700;color:var(--g5);font-family:var(--jk);margin-bottom:5px">RESPOSTA DA NUTRICIONISTA</div>';
        html+='<div style="font-size:22px;margin-bottom:'+(item.comment?'7px':'0')+'">'+Object.values(item.reactions).join(' ')+'</div>';
        if(item.comment) html+='<div style="font-size:12.5px;color:var(--n7);line-height:1.7;font-style:italic">💬 '+item.comment+'</div>';
        html+='</div>';
      }
      html+='</div>';
    });
    html+='</div>';
  }
  html+='</div>';
  // Set real src and events after render via afterRender
  window._dvPacPhotos=myPhotos;
  window._dvPacPatId=patId;
  return html;
  myPhotos.forEach(function(item){
    var img=document.querySelector('[data-dvlb="'+item.key+'"]');
    if(img&&item.photo)img.src=item.photo;
  });

  _dvUpdateBadges(patId);
  return html;
}

function _dvPacUpload(ev, patId) {
  var file = ev.target.files[0];
  if (!file) return;
  if (file.size > 6 * 1024 * 1024) { showToast('Foto muito grande (máx 6MB)', 'e'); return; }
  var html = '<div class="mh"><span class="mt">📸 Nova foto de refeição</span></div>';
  html += '<div class="fld"><label class="lbl">Qual refeição?</label><div style="display:grid;grid-template-columns:1fr 1fr;gap:7px" id="dv-meal-grid">';
  _dvMeals.forEach(function (m, i) {
    html += '<button data-meal="' + i + '" style="padding:10px 8px;border-radius:var(--r2);border:1.5px solid var(--n2);background:#fff;font-size:12px;font-weight:600;color:var(--n7);cursor:pointer;text-align:center">' + m + '</button>';
  });
  html += '</div></div>';
  html += '<div class="fld"><label class="lbl">Legenda (opcional)</label><input class="inp" id="dv-newcap" placeholder="Ex: Almoço saudável..."/></div>';
  window._dvPendingFile = file;
  window._dvPendingPatId = patId;
  showModal(html);
  setTimeout(function () {
    document.querySelectorAll('[data-meal]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        _dvPickMeal(_dvMeals[parseInt(btn.getAttribute('data-meal'))]);
      });
      btn.addEventListener('mouseover', function () { btn.style.borderColor = 'var(--g4)'; btn.style.color = 'var(--g5)'; });
      btn.addEventListener('mouseout', function () { btn.style.borderColor = 'var(--n2)'; btn.style.color = 'var(--n7)'; });
    });
  }, 50);
}

function _dvPickMeal(meal) {
  var file = window._dvPendingFile;
  var patId = window._dvPendingPatId;
  var cap = (document.getElementById('dv-newcap') || {}).value || '';
  if (!file || !patId) { closeModal(); return; }
  var reader = new FileReader();
  reader.onload = function (e) {
    var photos = JSON.parse(localStorage.getItem('dieton_diary') || '{}');
    var key = 'ph_' + patId + '_' + Date.now();
    photos[key] = { photo: e.target.result, caption: cap, meal: meal, ts: Date.now(), reactions: {}, comment: '', seenByPac: false };
    localStorage.setItem('dieton_diary', JSON.stringify(photos));
    closeModal();
    rPacDiary();
    showToast('Foto enviada! Sua nutricionista vai visualizar em breve.', 's');
  };
  reader.readAsDataURL(file);
}

function _dvPacDelete(key) {
  if (!confirm('Remover esta foto?')) return;
  var photos = JSON.parse(localStorage.getItem('dieton_diary') || '{}');
  delete photos[key];
  localStorage.setItem('dieton_diary', JSON.stringify(photos));
  rPacDiary();
  showToast('Foto removida.', 's');
}

function _dvLightbox(key) {
  var photos = JSON.parse(localStorage.getItem('dieton_diary') || '{}');
  var entry = photos[key];
  if (!entry || !entry.photo) return;
  var lb = document.createElement('div');
  lb.className = 'dv-lightbox';
  lb.onclick = function () { document.body.removeChild(lb); };
  var img = document.createElement('img');
  img.src = entry.photo;
  lb.appendChild(img);
  document.body.appendChild(lb);
}

// ── NUTRICIONISTA ────────────────────────────────────────────
function rDiaryPro(){
  var photos=JSON.parse(localStorage.getItem('dieton_diary')||'{}');

  // Collect free-form diary photos (ph_patId_ts)
  var freePhotos=Object.entries(photos)
    .map(function(e){return Object.assign({key:e[0],src:'diary'},e[1]);})
    .filter(function(e){return e.photo&&e.key.indexOf('ph_')=== 0;})
    .sort(function(a,b){return b.ts-a.ts;});

  // Collect food diary photos from pats[].diary entries
  var foodPhotos=[];
  pats.forEach(function(p){
    (p.diary||[]).forEach(function(day){
      (day.refeicoes||[]).forEach(function(r){
        if(r.photo){
          var key='food_'+p.id+'_'+day.data+'_'+r.hora;
          foodPhotos.push({
            key:key,photo:r.photo,meal:r.n,ts:new Date(day.data.split('/').reverse().join('-')).getTime()||(Date.now()-86400000),
            caption:(r.items?r.items.join(', '):'')+( r.obs?' — '+r.obs:''),
            reactions:r.photoReactions||{},comment:r.photoComment||'',
            seenByPac:r.photoSeenByPac||false,
            _pat:p,_r:r,src:'food'
          });
        }
      });
    });
  });
  foodPhotos.sort(function(a,b){return b.ts-a.ts;});

  // Merge all photos
  var allPhotos=freePhotos.concat(foodPhotos).sort(function(a,b){return b.ts-a.ts;});

  var pending=allPhotos.filter(function(e){return !e.reactions||!Object.keys(e.reactions).length;}).length;
  var patIds={};
  allPhotos.forEach(function(e){
    var pid=e.src==='food'?String(e._pat.id):e.key.split('_')[1];
    if(pid)patIds[pid]=true;
  });

  var html='<div style="max-width:860px">';
  html+='<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px">';
  html+='<div><div style="font-family:var(--jk);font-size:16px;font-weight:800;color:var(--n9)">📸 Diário Visual dos Pacientes</div>';
  html+='<div style="font-size:11.5px;color:var(--n4);margin-top:2px">Fotos do Diário Alimentar + Diário de Fotos livres</div></div></div>';

  // Stats
  html+='<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-bottom:16px">';
  [{n:allPhotos.length,l:'Total de fotos',c:'var(--n9)'},{n:pending,l:'Aguardando reação',c:pending?'#f59e0b':'#10b981'},{n:allPhotos.length-pending,l:'Já reagidas',c:'#10b981'},{n:Object.keys(patIds).length,l:'Pacientes com fotos',c:'var(--n9)'}].forEach(function(s){
    html+='<div class="dv-stat"><div class="dv-stat-n" style="color:'+s.c+'">'+s.n+'</div><div class="dv-stat-l">'+s.l+'</div></div>';
  });
  html+='</div>';

  // Filters
  html+='<div class="dv-filter">';
  html+='<button data-filter="all" class="dv-filter-btn'+((_dvProFilter==='all')?' on':'')+'">🗂 Todas</button>';
  html+='<button data-filter="pending" class="dv-filter-btn'+((_dvProFilter==='pending')?' on':'')+'">⏳ Sem reação ('+pending+')</button>';
  html+='<button data-filter="done" class="dv-filter-btn'+((_dvProFilter==='done')?' on':'')+'">✅ Já reagidas</button>';
  html+='<button data-filter="food" class="dv-filter-btn'+((_dvProFilter==='food')?' on':'')+'">🥗 Diário Alimentar</button>';
  html+='<button data-filter="free" class="dv-filter-btn'+((_dvProFilter==='free')?' on':'')+'">📸 Fotos livres</button>';
  pats.forEach(function(p){
    html+='<button data-patfilter="'+p.id+'" class="dv-filter-btn'+((_dvProPatFilter===String(p.id))?' on':'')+'">'+p.n.split(' ')[0]+'</button>';
  });
  html+='</div>';

  // Apply filters
  var feed=allPhotos.filter(function(e){
    var hasR=e.reactions&&Object.keys(e.reactions).length;
    if(_dvProFilter==='pending'&&hasR)return false;
    if(_dvProFilter==='done'&&!hasR)return false;
    if(_dvProFilter==='food'&&e.src!=='food')return false;
    if(_dvProFilter==='free'&&e.src!=='free')return false;
    if(_dvProPatFilter!=='all'){
      var pid=e.src==='food'?String(e._pat.id):e.key.split('_')[1];
      if(pid!==String(_dvProPatFilter))return false;
    }
    return true;
  });

  if(!feed.length){
    html+='<div style="text-align:center;padding:60px 20px;background:#fff;border-radius:var(--r3);border:1.5px dashed var(--n2)">';
    html+='<div style="font-size:52px;margin-bottom:12px">📷</div>';
    html+='<div style="font-family:var(--jk);font-size:14px;font-weight:700;color:var(--n6);margin-bottom:6px">Nenhuma foto aqui</div>';
    html+='<div style="font-size:12px;color:var(--n4)">Nenhum resultado para este filtro.</div>';
    html+='</div>';
  }else{
    html+='<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(min(380px,100%),1fr));gap:14px">';
    feed.forEach(function(item,fi){
      var pat=item.src==='food'?item._pat:(pats.find(function(p){return String(p.id)===item.key.split('_')[1];})||{n:'Paciente',av:'a1'});
      var hasReact=item.reactions&&Object.keys(item.reactions).length;
      var isFoodDiary=item.src==='food';
      html+='<div class="dv-card">';
      html+='<div class="dv-card-hd">';
      html+='<div class="av '+(pat.av||'a1')+' dv-card-av" style="width:32px;height:32px;font-size:11px">'+pat.n.split(' ').slice(0,2).map(function(w){return w[0];}).join('')+'</div>';
      html+='<div><div class="dv-card-pat">'+pat.n+'</div><div class="dv-card-meta">'+_dvFmtFull(item.ts)+'</div></div>';
      html+='<div class="dv-card-tag">'+(item.meal||'Refeição')+'</div>';
      if(isFoodDiary) html+='<div style="margin-left:4px;font-size:9px;font-weight:700;padding:2px 7px;border-radius:99px;background:#e0f2fe;color:#0369a1;font-family:var(--jk)">🥗 Diário</div>';
      if(!hasReact) html+='<div style="margin-left:4px;font-size:9px;font-weight:700;padding:2px 7px;border-radius:99px;background:#fef3c7;color:#92400e;font-family:var(--jk)">⏳ Nova</div>';
      html+='</div>';
      html+='<img data-dvlb="'+fi+'" src="data:," style="width:100%;max-height:280px;object-fit:cover;display:block;cursor:zoom-in" loading="lazy">';
      if(item.caption) html+='<div class="dv-card-cap">&ldquo;'+item.caption+'&rdquo;</div>';
      html+='<div class="dv-reactions">';
      html+='<span style="font-size:10px;font-weight:700;color:var(--n4);font-family:var(--jk);margin-right:2px">REAGIR:</span>';
      REACTS.forEach(function(emoji){
        var active=item.reactions&&item.reactions['nutri']===emoji;
        html+='<button data-react="'+fi+'" data-emoji="'+emoji+'" class="dv-react-btn'+(active?' active':'')+'" title="'+emoji+'">'+emoji+'</button>';
      });
      html+='</div>';
      html+='<div class="dv-comment-area">';
      html+='<textarea class="dv-comment-inp" id="cmt_pro_'+fi+'" rows="2" placeholder="Orientação ou feedback sobre esta refeição...">'+(item.comment||'')+'</textarea>';
      html+='<div style="display:flex;justify-content:flex-end;margin-top:6px">';
      html+='<button data-savecmt="'+fi+'" class="btn btn-p btn-sm">💾 Salvar</button>';
      html+='</div></div></div>';
    });
    html+='</div>';
  }
  html+='</div>';

  // Store feed for event handlers
  window._dvProFeed=feed;
  window._dvFoodPhotos=foodPhotos;
  _dvUpdateBadges();
  return html;
}

function _dvFilter(f){_dvProFilter=f;rDiaryPro();}
function _dvFilterPat(id){_dvProPatFilter=(_dvProPatFilter===id)?'all':id;rDiaryPro();}

function _dvReact(fi,emoji){
  var item=(window._dvProFeed||[])[parseInt(fi)];
  if(!item)return;
  if(item.src==='food'){
    if(!item._r.photoReactions)item._r.photoReactions={};
    if(item._r.photoReactions['nutri']===emoji)delete item._r.photoReactions['nutri'];
    else item._r.photoReactions['nutri']=emoji;
    item._r.photoSeenByPac=false;
    item.reactions=item._r.photoReactions;
    DB.save();
  }else{
    var photos=JSON.parse(localStorage.getItem('dieton_diary')||'{}');
    if(!photos[item.key])return;
    if(!photos[item.key].reactions)photos[item.key].reactions={};
    if(photos[item.key].reactions['nutri']===emoji)delete photos[item.key].reactions['nutri'];
    else photos[item.key].reactions['nutri']=emoji;
    photos[item.key].seenByPac=false;
    localStorage.setItem('dieton_diary',JSON.stringify(photos));
  }
  goP('diary-pro',document.getElementById('ni-diary-pro'));
  showToast('Reação salva!','s');
}

function _dvSaveComment(fi){
  var item=(window._dvProFeed||[])[parseInt(fi)];
  if(!item)return;
  var el=document.getElementById('cmt_pro_'+fi);
  if(!el)return;
  var val=el.value.trim();
  if(item.src==='food'){
    item._r.photoComment=val;
    item._r.photoSeenByPac=false;
    DB.save();
  }else{
    var photos=JSON.parse(localStorage.getItem('dieton_diary')||'{}');
    if(!photos[item.key])return;
    photos[item.key].comment=val;
    photos[item.key].seenByPac=false;
    localStorage.setItem('dieton_diary',JSON.stringify(photos));
  }
  showToast('Comentário salvo!','s');
}


function _dvProAfterRender(){
  var feed=window._dvProFeed||[];
  document.querySelectorAll('[data-dvlb]').forEach(function(img){
    var fi=parseInt(img.getAttribute('data-dvlb'));
    if(feed[fi]&&feed[fi].photo)img.src=feed[fi].photo;
    (function(idx){img.addEventListener('click',function(){_dvLightboxSrc(feed[idx].photo);});})(fi);
  });
  document.querySelectorAll('[data-react]').forEach(function(btn){
    btn.addEventListener('click',function(){_dvReact(btn.getAttribute('data-react'),btn.getAttribute('data-emoji'));});
  });
  document.querySelectorAll('[data-savecmt]').forEach(function(btn){
    btn.addEventListener('click',function(){_dvSaveComment(btn.getAttribute('data-savecmt'));});
  });
  document.querySelectorAll('[data-filter]').forEach(function(btn){
    btn.addEventListener('click',function(){_dvFilter(btn.getAttribute('data-filter'));});
  });
  document.querySelectorAll('[data-patfilter]').forEach(function(btn){
    btn.addEventListener('click',function(){_dvFilterPat(btn.getAttribute('data-patfilter'));});
  });
}
function _dvPacAfterRender(){
  var myPhotos=window._dvPacPhotos||[];
  var patId=window._dvPacPatId||'';
  document.querySelectorAll('[data-dvlb]').forEach(function(img){
    var key=img.getAttribute('data-dvlb');
    var item=myPhotos.find(function(p){return p.key===key;});
    if(item&&item.photo)img.src=item.photo;
    (function(k){img.addEventListener('click',function(){_dvLightbox(k);});})(key);
  });
  document.querySelectorAll('[data-dvdel]').forEach(function(btn){
    btn.addEventListener('click',function(){_dvPacDelete(btn.getAttribute('data-dvdel'));});
  });
  var fileInp=document.getElementById('dv-file-inp');
  if(fileInp)fileInp.addEventListener('change',function(ev){_dvPacUpload(ev,patId);});
}
function _dvUpdateBadges(patId){
  var photos=JSON.parse(localStorage.getItem('dieton_diary')||'{}');
  var pending=Object.values(photos).filter(function(e){return e&&e.photo&&(!e.reactions||!Object.keys(e.reactions).length);}).length;
  var bp=document.getElementById('nb-diary-pro');
  if(bp){bp.textContent=pending;bp.style.display=pending?'inline-flex':'none';}
  if(patId){
    var unseen=Object.entries(photos).filter(function(e){return e[0].indexOf('ph_'+patId+'_')===0&&e[1]&&e[1].reactions&&Object.keys(e[1].reactions).length&&!e[1].seenByPac;}).length;
    var bpac=document.getElementById('nb-pac-diary');
    if(bpac){bpac.textContent=unseen;bpac.style.display=unseen?'inline-flex':'none';}
  }
}

// ── CHAT & NEW FEATURES ──

function escHtml(s){
 if(s==null)return'';
 return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}

function rChat(){
 // Ensure msgs array exists on all patients
 pats.forEach(function(p){ if(!p.msgs) p.msgs=[]; });

 var totalUnread = pats.reduce(function(sum,p){
  return sum + p.msgs.filter(function(m){return m.role==='pac'&&!m.read;}).length;
 }, 0);

 // Sort: unread first, then by last message time, then alphabetical
 var sorted = pats.slice().sort(function(a,b){
  var ua = a.msgs.filter(function(m){return m.role==='pac'&&!m.read;}).length;
  var ub = b.msgs.filter(function(m){return m.role==='pac'&&!m.read;}).length;
  if(ua !== ub) return ub - ua;
  var la = a.msgs.length ? a.msgs[a.msgs.length-1].ts||'' : '';
  var lb = b.msgs.length ? b.msgs[b.msgs.length-1].ts||'' : '';
  if(lb !== la) return lb > la ? 1 : -1;
  return (a.n||'').localeCompare(b.n||'');
 });

 var html = '';

 // Header
 html += '<div style="display:flex;align-items:center;gap:8px;margin-bottom:16px">'
  +'<div class="search-wrap" style="flex:1">'
  +'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>'
  +'<input class="search-inp" id="chat-search-inp" placeholder="Buscar paciente..." oninput="_filterChatList(this.value)"/>'
  +'</div>'
  +(totalUnread ? '<span style="background:#ef4444;color:#fff;border-radius:99px;font-size:11px;font-weight:700;padding:3px 10px;flex-shrink:0">'+totalUnread+' não lida'+(totalUnread>1?'s':'')+'</span>' : '')
  +'</div>';

 if(!sorted.length){
  html += '<div class="card" style="text-align:center;padding:48px 20px">'
   +'<div style="font-size:48px;margin-bottom:12px">💬</div>'
   +'<div style="font-weight:800;font-size:15px;color:var(--n8);margin-bottom:6px">Nenhum paciente</div>'
   +'<div style="font-size:12px;color:var(--n4);margin-bottom:16px">Cadastre pacientes para iniciar conversas</div>'
   +'<button class="btn btn-p" onclick="goP(\'pat\',document.getElementById(\'ni-pat\'))">+ Novo Paciente</button>'
   +'</div>';
  return html;
 }

 // Patient list
 sorted.forEach(function(p){
  var msgs = p.msgs||[];
  var last = msgs.length ? msgs[msgs.length-1] : null;
  var unread = msgs.filter(function(m){return m.role==='pac'&&!m.read;}).length;
  var initials = p.n ? p.n.split(' ').slice(0,2).map(function(w){return w[0].toUpperCase();}).join('') : '?';

  var preview, previewColor, previewStyle;
  if(last){
   preview = (last.role==='nutri' ? 'Você: ' : '') + last.txt;
   if(preview.length > 55) preview = preview.slice(0,55)+'…';
   previewColor = unread ? 'var(--n8)' : 'var(--n4)';
   previewStyle = 'normal';
  } else {
   preview = 'Toque para iniciar conversa →';
   previewColor = 'var(--g4)';
   previewStyle = 'italic';
  }

  html += '<div class="chat-row card" data-name="'+escHtml(p.n.toLowerCase())+'" '
   +'onclick="openChat('+p.id+')" '
   +'style="display:flex;align-items:center;gap:12px;padding:12px 14px;margin-bottom:8px;cursor:pointer;'
   +'border-color:'+(unread?'var(--g3)':'var(--n2)')+'!important;'
   +'background:'+(unread?'var(--g0)':'')+'!important">'

   // Avatar
   +'<div class="av '+(p.av||'a1')+'" style="width:46px;height:46px;border-radius:50%;'
   +'display:flex;align-items:center;justify-content:center;font-size:15px;font-weight:800;'
   +'flex-shrink:0;position:relative">'
   +initials
   +(unread ? '<span style="position:absolute;top:-2px;right:-2px;width:12px;height:12px;'
    +'background:#ef4444;border-radius:50%;border:2px solid var(--card-bg,#fff)"></span>' : '')
   +'</div>'

   // Info
   +'<div style="flex:1;min-width:0">'
   +'<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:3px">'
   +'<span style="font-weight:'+(unread?'800':'600')+';font-size:13px;color:var(--n9);'
   +'overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:70%">'+escHtml(p.n)+'</span>'
   +(last ? '<span style="font-size:10px;color:var(--n4);flex-shrink:0">'+last.time+'</span>' : '')
   +'</div>'
   +'<div style="display:flex;justify-content:space-between;align-items:center">'
   +'<span style="font-size:11.5px;color:'+previewColor+';font-style:'+previewStyle+';'
   +'overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:80%">'+escHtml(preview)+'</span>'
   +(unread ? '<span style="background:#ef4444;color:#fff;border-radius:99px;font-size:10px;'
    +'font-weight:700;padding:1px 7px;flex-shrink:0;margin-left:6px">'+unread+'</span>' : '')
   +'</div></div></div>';
 });

 return html;
}

function _chatRow(x, compact){
 var p=x.p, last=x.last, unread=x.unread;
 var initials = p.n ? p.n.split(' ').slice(0,2).map(function(w){return w[0].toUpperCase();}).join('') : '?';
 var preview = last ? (last.role==='nutri'?'Você: ':p.n.split(' ')[0]+': ')+last.txt : 'Toque para iniciar conversa';
 if(preview.length>58) preview=preview.slice(0,58)+'…';

 return '<div class="chat-row" data-name="'+escHtml(p.n.toLowerCase())+'" onclick="openChat('+p.id+')" '
  +'style="display:flex;align-items:center;gap:12px;padding:'+(compact?'12px 14px':'10px 12px')+';border-radius:12px;cursor:pointer;margin-bottom:6px;'
  +'border:1.5px solid '+(unread?'var(--g3)':last?'var(--n1)':'var(--n1)')+';'
  +'background:'+(unread?'var(--g0)':last?'var(--n0)':'transparent')+';transition:all .15s" '
  +'onmouseover="this.style.borderColor=\'var(--g4)\';this.style.background=\'var(--g0)\'" '
  +'onmouseout="this.style.borderColor=\''+(unread?'var(--g3)':last?'var(--n1)':'var(--n1)')+'\';this.style.background=\''+(unread?'var(--g0)':last?'var(--n0)':'transparent')+'\';">'

  // Avatar with unread dot
  +'<div class="av '+(p.av||'a1')+'" style="width:'+(compact?'46':'38')+'px;height:'+(compact?'46':'38')+'px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:'+(compact?'15':'12')+'px;font-weight:800;flex-shrink:0;position:relative">'
  +initials
  +(unread?'<span style="position:absolute;top:-2px;right:-2px;width:12px;height:12px;background:#ef4444;border-radius:50%;border:2px solid var(--n0)"></span>':'')
  +'</div>'

  // Content
  +'<div style="flex:1;min-width:0">'
  +'<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:'+(last?'3':'0')+'px">'
  +'<span style="font-weight:'+(unread?'700':'600')+';font-size:'+(compact?'13':'12.5')+'px;color:var(--n9);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+escHtml(p.n)+'</span>'
  +(last?'<span style="font-size:10px;color:var(--n4);flex-shrink:0;margin-left:8px">'+last.time+'</span>':'')
  +'</div>'
  +(last||!compact
   ?'<div style="display:flex;justify-content:space-between;align-items:center">'
   +'<span style="font-size:11.5px;color:'+(unread?'var(--n7)':last?'var(--n4)':'var(--g4)')+';font-weight:'+(unread?'600':'400')+';overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-style:'+(last?'normal':'italic')+'">'+escHtml(preview)+'</span>'
   +(unread?'<span style="background:#ef4444;color:#fff;border-radius:99px;font-size:10px;font-weight:700;padding:1px 7px;flex-shrink:0;margin-left:6px">'+unread+'</span>':'')
   +'</div>':'')
  +'</div>'

  // Chat icon on right for no-message rows
  +(!last?'<svg width="16" height="16" viewBox="0 0 24 24" fill="var(--g4)" style="flex-shrink:0"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>':'')
  +'</div>';
}

function _filterChatList(q){
 var rows = document.querySelectorAll('.chat-row');
 rows.forEach(function(el){
  var name = el.getAttribute('data-name')||'';
  el.style.display = (!q||name.includes(q.toLowerCase())) ? '' : 'none';
 });
 // Also hide section labels if all rows hidden
}

function _updateChatBadge(){
 var total = pats.reduce(function(s,p){
  return s+(p.msgs||[]).filter(function(m){return m.role==='pac'&&!m.read;}).length;
 },0);
 var badge=document.getElementById('nb-chat');
 if(badge){badge.textContent=total;badge.style.display=total>0?'':'none';}
}

function openChat(patId){
 var p = patId ? pats.find(function(x){return x.id===patId;}) : selPat||pats[0];
 if(!p){showToast('Paciente não encontrado','w');return;}
 if(!p.msgs) p.msgs=[];
 window._chatPat = p;
 var hadUnread = false;
 p.msgs.forEach(function(m){if(m.role==='pac'&&!m.read){m.read=true;hadUnread=true;}});
 if(hadUnread){DB.save();_updateChatBadge();}
 var title=document.getElementById('chat-title');
 if(title) title.textContent='💬 '+p.n;
 _renderChat(p);
 openM('m-chat');
 setTimeout(function(){
  var inp=document.getElementById('chat-input');
  if(inp)inp.focus();
  var box=document.getElementById('chat-msgs');
  if(box)box.scrollTop=box.scrollHeight;
 },150);
}

function _renderChat(p){
 var box=document.getElementById('chat-msgs');
 if(!box)return;
 var msgs=p?(p.msgs||[]):[];
 if(!msgs.length){
  box.innerHTML='<div style="text-align:center;padding:32px 20px">'
   +'<div style="font-size:40px;margin-bottom:12px">💬</div>'
   +'<div style="font-weight:700;font-size:13px;color:var(--n7);margin-bottom:6px">Iniciar conversa com '+escHtml((p&&p.n)||'paciente')+'</div>'
   +'<div style="font-size:11.5px;color:var(--n4)">Digite uma mensagem abaixo para começar</div>'
   +'</div>';
  return;
 }
 box.innerHTML=msgs.map(function(m){
  var isNutri=(m.role==='nutri');
  return'<div style="display:flex;justify-content:'+(isNutri?'flex-end':'flex-start')+';margin-bottom:6px">'
   +'<div style="max-width:78%;background:'+(isNutri?'var(--g4)':'var(--n1)')+';color:'+(isNutri?'#fff':'var(--n8)')+';'
   +'border:1.5px solid '+(isNutri?'transparent':'var(--n2)')+';padding:9px 13px;'
   +'border-radius:'+(isNutri?'16px 16px 4px 16px':'16px 16px 16px 4px')+';font-size:12.5px;line-height:1.5">'
   +escHtml(m.txt)
   +'<div style="font-size:9px;opacity:.55;margin-top:4px;text-align:right">'+m.time+'</div>'
   +'</div></div>';
 }).join('');
 box.scrollTop=box.scrollHeight;
}

function sendChatMsg(){
 var inp=document.getElementById('chat-input');
 if(!inp||!inp.value.trim())return;
 var p=window._chatPat||selPat||pats[0];
 if(!p){showToast('Nenhum paciente selecionado','w');return;}
 if(!p.msgs)p.msgs=[];
 var now=new Date();
 var timeStr=now.toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'});
 p.msgs.push({role:'nutri',txt:inp.value.trim(),time:timeStr,ts:now.toISOString(),read:true});
 inp.value='';
 DB.save();
 _renderChat(p);
 _updateChatBadge();
 var box=document.getElementById('chat-msgs');
 if(box)box.scrollTop=box.scrollHeight;
}

function openChatFromPat(){
 // Patient view — same chat box
 var p=_getPacPatient();if(!p)return;
 if(!p.msgs)p.msgs=[];
 var title=document.getElementById('chat-title');
 if(title)title.textContent='Chat com '+((cu&&cu.name)||'Nutricionista');
 _renderChat(p);
 openM('m-chat');
 setTimeout(function(){
  var inp=document.getElementById('chat-input');if(inp)inp.focus();
  var box=document.getElementById('chat-msgs');if(box)box.scrollTop=box.scrollHeight;
 },150);
}

function sendPatChatMsg(){
 var inp=document.getElementById('chat-input');if(!inp||!inp.value.trim())return;
 var p=_getPacPatient();if(!p)return;
 if(!p.msgs)p.msgs=[];
 var now=new Date();
 var timeStr=now.toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'});
 p.msgs.push({role:'pac',txt:inp.value.trim(),time:timeStr,ts:now.toISOString()});
 inp.value='';
 DB.save();
 _renderChat(p);
 // Add notification to nutricionista
 if(!notifs)notifs=[];
 notifs.unshift({id:Date.now(),txt:'Nova mensagem de '+p.n,type:'i',patId:p.id,patName:p.n,auto:false});
 updateNotifBadge();
}

function _updateNotifBadge(){
 var unread=notifs.filter(function(n){return !n.read;}).length;
 var badge=document.getElementById('notif-badge');
 if(badge){badge.textContent=unread;badge.style.display=unread>0?'':'none';}
}

function _markAllNotifsRead(){
 notifs.forEach(function(n){n.read=true;});
 DB.save();
 goP('notif',document.getElementById('ni-notif'));
 _updateNotifBadge();
}

function _markNotifRead(idx, el){
 if(el){
  el.setAttribute('data-read','1');
  el.style.background='var(--n0)';
  el.style.borderColor='var(--n1)';
  var dot=el.querySelector('[style*="background:#ef4444"]');
  if(dot)dot.remove();
  var title=el.querySelector('div[style*="font-weight"]');
  if(title)title.style.fontWeight='500';
 }
 if(notifs[idx])notifs[idx].read=true;
 DB.save();
 _updateNotifBadge();
}

function _addManualNotif(){
 var patSel=document.getElementById('notif-pat-sel');
 var msgInp=document.getElementById('notif-msg-inp');
 var msg=msgInp?msgInp.value.trim():'';
 if(!msg){showToast('Digite a mensagem','w');return;}
 var patId=patSel?parseInt(patSel.value)||0:0;
 var pat=patId?pats.find(function(p){return p.id===patId;}):null;
 var now=new Date();
 notifs.push({
  msg:msg,pat:pat?pat.n:'',patId:patId,
  time:now.toLocaleString('pt-BR'),ts:now.getTime(),
  tag:'tb',auto:false,read:false
 });
 DB.save();
 showToast('Lembrete criado','s');
 goP('notif',document.getElementById('ni-notif'));
}

function _filterNotifs(type, btn){
 var btns=document.querySelectorAll('#nf-all,#nf-unread,#nf-auto');
 btns.forEach(function(b){b.style.fontWeight='400';b.style.background='';});
 if(btn){btn.style.fontWeight='700';}
 var items=document.querySelectorAll('.notif-item');
 items.forEach(function(el){
  if(type==='all') el.style.display='';
  else if(type==='unread') el.style.display=el.getAttribute('data-read')==='0'?'':'none';
  else if(type==='auto') el.style.display=el.getAttribute('data-auto')==='1'?'':'none';
 });
}

function _openAddMeal(){
 var mo=document.getElementById('m-generic');if(!mo)return;
 mo.querySelector('.m-title').textContent='Registrar Refeição';
 mo.querySelector('.m-body').innerHTML=
  '<div style="display:flex;flex-direction:column;gap:10px">'
  +'<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">'
  +'<div><label class="lbl">Refeição</label>'
  +'<select id="meal-type" class="sel" style="width:100%">'
  +'<option value="☀️ Café da manhã">☀️ Café da manhã</option>'
  +'<option value="🌿 Lanche da manhã">🌿 Lanche da manhã</option>'
  +'<option value="🍽️ Almoço">🍽️ Almoço</option>'
  +'<option value="🍵 Lanche da tarde">🍵 Lanche da tarde</option>'
  +'<option value="🌙 Jantar">🌙 Jantar</option>'
  +'<option value="🌃 Ceia">🌃 Ceia</option>'
  +'</select></div>'
  +'<div><label class="lbl">Calorias (kcal)</label>'
  +'<input id="meal-kcal" class="sel" type="number" placeholder="ex: 450" style="width:100%" min="0"/></div>'
  +'</div>'
  +'<div><label class="lbl">Alimentos (separados por vírgula)</label>'
  +'<input id="meal-foods" class="sel" placeholder="ex: Arroz, Feijão, Frango grelhado" style="width:100%"/></div>'
  +'<div><label class="lbl">Observação (opcional)</label>'
  +'<input id="meal-obs" class="sel" placeholder="Como se sentiu? Teve fome?" style="width:100%"/></div>'
  +'<button class="btn btn-p" onclick="_saveDiaryMeal()" style="width:100%;margin-top:4px">💾 Salvar refeição</button>'
  +'</div>';
 openM('m-generic');
 setTimeout(function(){var el=document.getElementById('meal-kcal');if(el)el.focus();},200);
}

function _saveDiaryMeal(){
 var p=_getPacPatient();if(!p)return;
 var typeEl=document.getElementById('meal-type');
 var kcalEl=document.getElementById('meal-kcal');
 var foodsEl=document.getElementById('meal-foods');
 var obsEl=document.getElementById('meal-obs');
 if(!typeEl||!kcalEl)return;
 var mealFull=typeEl.value;
 var emoji=mealFull.split(' ')[0];
 var name=mealFull.slice(emoji.length+1);
 var kcal=parseInt(kcalEl.value)||0;
 if(!kcal){showToast('Informe as calorias','w');return;}
 var foods=foodsEl&&foodsEl.value?foodsEl.value.split(',').map(function(f){return f.trim();}).filter(Boolean):[];
 var obs=obsEl?obsEl.value:'';
 var today=new Date().toISOString().slice(0,10);
 if(!p.diary)p.diary=[];
 var entry=p.diary.find(function(e){return(e.isoDate||e.date||'')===today;});
 if(!entry){entry={isoDate:today,meals:[],totalKcal:0};p.diary.push(entry);}
 if(!entry.meals)entry.meals=[];
 entry.meals.push({emoji:emoji,name:name,kcal:kcal,foods:foods,obs:obs,time:new Date().toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'})});
 entry.totalKcal=(entry.totalKcal||0)+kcal;
 DB.save();
 closeM('m-generic');
 showToast('✅ Refeição registrada!','s');
 goP('pdiary',document.getElementById('ni-pdiary'));
}

function _removeDiaryMeal(isoDate,mealIdx){
 var p=_getPacPatient();if(!p||!p.diary)return;
 var entry=p.diary.find(function(e){return(e.isoDate||e.date||'')===isoDate;});
 if(!entry||!entry.meals)return;
 entry.totalKcal=(entry.totalKcal||0)-(entry.meals[mealIdx].kcal||0);
 if(entry.totalKcal<0)entry.totalKcal=0;
 entry.meals.splice(mealIdx,1);
 DB.save();
 goP('pdiary',document.getElementById('ni-pdiary'));
}

function _toggleAdvFilters(){
 var el=document.getElementById('adv-filters');
 var tog=document.getElementById('adv-filter-toggle');
 if(!el)return;
 var open=el.style.display!=='none';
 el.style.display=open?'none':'block';
 if(tog)tog.textContent=open?'▼ Expandir':'▲ Recolher';
}

function _clearAdvFilters(){
 ['f-obj','f-status','f-imc','f-appt'].forEach(function(id){
  var el=document.getElementById(id);if(el)el.value='';
 });
 var q=document.getElementById('global-q');if(q)q.value='';
 var res=document.getElementById('search-results');
 if(res)res.innerHTML='<div style="text-align:center;padding:32px;color:var(--n4);font-size:13px">Filtros limpos</div>';
}

function calcTMB(p){
 if(!p||!p.w||!p.h||!p.age) return '';
 var tmb=p.sex==='F'
  ?(10*p.w)+(6.25*p.h)-(5*p.age)-161
  :(10*p.w)+(6.25*p.h)-(5*p.age)+5;
 tmb=Math.round(tmb);
 var levels=[
  ['Sedentário',1.2],['Levemente ativo (1-3x/sem)',1.375],
  ['Moderadamente ativo (3-5x/sem)',1.55],['Muito ativo (6-7x/sem)',1.725],['Atleta',1.9]
 ];
 return '<div class="card" style="margin-bottom:14px">'
  +'<div class="ch"><span class="ct">TMB & Gasto Energético</span><span class="cs">Mifflin-St Jeor</span></div>'
  +'<div style="display:flex;gap:12px;margin-bottom:14px">'
  +'<div style="flex:1;background:var(--g0);border:1.5px solid var(--g3);border-radius:12px;padding:14px;text-align:center">'
  +'<div style="font-size:11px;color:var(--n4);margin-bottom:4px">Taxa Metabólica Basal</div>'
  +'<div style="font-family:var(--in);font-size:30px;font-weight:800;color:var(--g4)">'+tmb+'</div>'
  +'<div style="font-size:10px;color:var(--n4)">kcal/dia em repouso</div></div>'
  +(p.plans&&p.plans[0]
   ?'<div style="flex:1;background:var(--n0);border:1.5px solid var(--n2);border-radius:12px;padding:14px;text-align:center">'
   +'<div style="font-size:11px;color:var(--n4);margin-bottom:4px">Plano prescrito</div>'
   +'<div style="font-family:var(--in);font-size:30px;font-weight:800;color:#3b82f6">'+p.plans[0].kcal+'</div>'
   +'<div style="font-size:10px;color:var(--n4)">kcal/dia</div></div>':'')
  +'</div>'
  +'<div style="font-size:11px;font-weight:700;color:var(--n5);margin-bottom:8px;text-transform:uppercase;letter-spacing:.04em">Gasto por nível de atividade</div>'
  +'<div style="display:flex;flex-direction:column;gap:6px">'
  +levels.map(function(f){
   var kcalAct=Math.round(tmb*f[1]);
   var diff=p.plans&&p.plans[0]?kcalAct-p.plans[0].kcal:0;
   return'<div style="display:flex;align-items:center;gap:10px;padding:8px 12px;background:var(--n0);border-radius:8px">'
    +'<div style="flex:1;font-size:11.5px;color:var(--n7)">'+f[0]+'</div>'
    +'<div style="font-family:var(--in);font-size:13px;font-weight:700;color:var(--n8)">'+kcalAct+' kcal</div>'
    +(diff!==0?'<div style="font-size:10px;color:'+(diff>0?'#ef4444':'#22c55e')+'">'+( diff>0?'+':'')+diff+'</div>':'')
    +'</div>';
  }).join('')
  +'</div></div>';
}

function openPatById(id){
  var p=pats.find(function(x){return x.id==id;});
  if(p){selPat=p;openPatDetail(id);}
}

function duplicateTpl(idx){
 if(!templates[idx])return;
 var t=JSON.parse(JSON.stringify(templates[idx]));
 t.id=Date.now();t.name=t.name+' (cópia)';
 templates.push(t);DB.save();
 showToast('Template duplicado','s');
 goP('tpl',document.getElementById('ni-tpl'));
}

function deleteTpl(idx){
 if(!confirm('Excluir template "'+templates[idx].name+'"?'))return;
 templates.splice(idx,1);
 DB.save();
 showToast('Template excluído','s');
 goP('tpl',document.getElementById('ni-tpl'));
}

function openPlanCompare(){
 var p=selPat||pats[0];if(!p||!p.plans||p.plans.length<2){showToast('Precisa de pelo menos 2 planos salvos','w');return;}
 var p1=p.plans[0],p2=p.plans[1];
 function planSummary(pl){
  var meals=pl.mealData||[];
  var kcal=pl.kcal||0,prot=pl.prot||0,carb=pl.carb||0,gord=pl.gord||0;
  var html='<div style="font-size:10.5px;color:var(--n4);margin-bottom:8px">'+pl.date+'  ·  '+kcal+' kcal</div>';
  html+='<div style="display:flex;gap:8px;margin-bottom:10px">';
  [['P',prot+'g','#3b82f6'],['C',carb+'g','#f59e0b'],['G',gord+'g','#10b981']].forEach(function(m){
   html+='<div style="flex:1;text-align:center;background:var(--n1);border-radius:8px;padding:6px 0">'
    +'<div style="font-weight:800;font-size:13px;color:'+m[2]+'">'+m[1]+'</div>'
    +'<div style="font-size:9px;color:var(--n4)">'+m[0]+'</div></div>';
  });
  html+='</div>';
  meals.forEach(function(meal){
   var mkcal=meal.items?meal.items.reduce(function(s,it){var f=FOOD_DB.find(function(x){return x.id===it.fid;});return s+(f?Math.round(f.k*(it.qty||100)/100):0);},0):0;
   html+='<div style="margin-bottom:6px"><div style="font-size:11.5px;font-weight:700;color:var(--n8);margin-bottom:4px">'+(meal.em||'🍽️')+' '+escHtml(meal.name||'')+'<span style="font-size:10px;color:var(--n4);font-weight:400;margin-left:6px">'+mkcal+' kcal</span></div>';
   (meal.items||[]).forEach(function(it){
    var f=FOOD_DB.find(function(x){return x.id===it.fid;});
    if(f)html+='<div style="font-size:11px;color:var(--n5);padding:2px 0 2px 8px">• '+escHtml(f.n)+' '+it.qty+'g</div>';
   });
   html+='</div>';
  });
  return html;
 }
 var diff=p1.kcal-p2.kcal;
 var mo=document.getElementById('m-generic');
 if(!mo)return;
 mo.querySelector('.m-title').textContent='Comparação de Planos — '+p.n;
 mo.querySelector('.m-body').innerHTML=
  '<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px">'
  +'<div><div style="font-family:var(--jk);font-size:10px;font-weight:700;color:var(--g5);text-transform:uppercase;margin-bottom:8px">Plano Atual</div>'+planSummary(p1)+'</div>'
  +'<div><div style="font-family:var(--jk);font-size:10px;font-weight:700;color:var(--n4);text-transform:uppercase;margin-bottom:8px">Plano Anterior</div>'+planSummary(p2)+'</div>'
  +'</div>'
  +'<div style="margin-top:12px;padding:10px 14px;background:'+(diff>0?'#fef2f2':'#f0fdf4')+';border-radius:10px;font-size:12px;font-weight:700;color:'+(diff>0?'#dc2626':'#16a34a')+'">'
  +(diff>0?'↑ +'+diff+' kcal em relação ao plano anterior':diff<0?'↓ '+Math.abs(diff)+' kcal a menos que o plano anterior':'Mesma quantidade de calorias que o plano anterior')
  +'</div>';
 openM('m-generic');
}

function printPlan(){
 var p=selPat||pats[0];if(!p||!p.plans||!p.plans.length){showToast('Salve um plano primeiro','w');return;}
 var plan=p.plans[0];
 var meals=plan.mealData||[];
 var html='<!DOCTYPE html><html><head><meta charset="UTF-8">'
  +'<title>Plano Alimentar — '+p.n+'</title>'
  +'<style>body{font-family:Arial,sans-serif;font-size:12px;color:#222;padding:20px;max-width:700px;margin:0 auto}'
  +'h1{font-size:18px;color:#e85a0a;margin-bottom:4px}h2{font-size:13px;color:#555;margin-bottom:16px;font-weight:400}'
  +'.meal{margin-bottom:16px;border-left:3px solid #e85a0a;padding-left:10px}'
  +'.meal-title{font-size:13px;font-weight:700;margin-bottom:6px}'
  +'.item{font-size:11px;padding:2px 0;color:#444}.macros{display:flex;gap:20px;margin:12px 0;font-size:11px}'
  +'.macro{text-align:center}.macro-v{font-size:16px;font-weight:700;color:#e85a0a}'
  +'@media print{body{padding:10px}}</style></head><body>'
  +'<h1>Plano Alimentar</h1>'
  +'<h2>'+p.n+' · '+plan.kcal+' kcal/dia · Gerado em '+plan.date+'</h2>'
  +'<div class="macros">'
  +'<div class="macro"><div class="macro-v">'+plan.prot+'g</div><div>Proteína</div></div>'
  +'<div class="macro"><div class="macro-v">'+plan.carb+'g</div><div>Carboidratos</div></div>'
  +'<div class="macro"><div class="macro-v">'+plan.gord+'g</div><div>Gorduras</div></div>'
  +'</div>';
 meals.forEach(function(meal){
  html+='<div class="meal"><div class="meal-title">'+(meal.em||'')+'  '+(meal.name||'')+'</div>';
  (meal.items||[]).forEach(function(it){
   var f=FOOD_DB.find(function(x){return x.id===it.fid;});
   if(f){var fac=(it.qty||100)/100;html+='<div class="item">• '+f.n+' — '+it.qty+'g ('+Math.round(f.k*fac)+' kcal)</div>';}
  });
  html+='</div>';
 });
 var orient=(p.orientacoes&&p.orientacoes.length)?p.orientacoes:['Beba 2L de água por dia','Mastigue devagar','Evite telas durante refeições'];
 html+='<div style="margin-top:20px;border-top:1px solid #ddd;padding-top:12px"><div style="font-weight:700;margin-bottom:6px">💡 Orientações</div>'
  +orient.map(function(o){return'<div class="item">• '+o+'</div>';}).join('')
  +'</div></body></html>';
 var w=window.open('','_blank');if(!w)return;
 w.document.write(html);w.document.close();
 setTimeout(function(){w.print();},400);
}

function savePlan(){
 var p=selPat||pats[0];if(!p){showToast('Nenhum paciente selecionado','w');return;}
 var hasMeals=meals.some(function(m){return m.items.length>0;});
 if(!hasMeals){showToast('Adicione alimentos ao plano antes de salvar','w');return;}
 var totalK=0,totalP=0,totalC=0,totalG=0;
 meals.forEach(function(m){m.items.forEach(function(it){totalK+=it.k;totalP+=it.p;totalC+=it.c;totalG+=it.g;});});
 // Convert meals format to store fid references
 var mealData=meals.map(function(m){
  return{
   name:m.name,
   em:m.em,
   items:m.items.map(function(it){
    return{fid:it.food.id,qty:it.qty,k:it.k,p:it.p,c:it.c,g:it.g};
   })
  };
 });
 var plan={
  id:Date.now(),
  date:new Date().toLocaleDateString('pt-BR'),
  kcal:totalK,prot:totalP,carb:totalC,gord:totalG,
  goal:prescGoal,
  mealData:mealData
 };
 if(!p.plans)p.plans=[];
 p.plans.unshift(plan);
 if(p.plans.length>10)p.plans=p.plans.slice(0,10);
 p.meta=totalK;
 DB.save();
 showToast('✅ Plano salvo para '+p.n+'!','s');
}

function saveWeekPlan(){
 var p=selPat||pats[0];if(!p){showToast('Selecione um paciente','w');return;}
 if(!p.weekPlan)p.weekPlan={};
 // Capture any edited meal names from the week view
 var editedMeals={};
 document.querySelectorAll('[data-week-meal]').forEach(function(el){
  editedMeals[el.dataset.weekMeal]=el.value||el.textContent;
 });
 p.weekPlan={date:new Date().toLocaleDateString('pt-BR'),edits:editedMeals,basePlanId:(p.plans[0]||{}).id};
 DB.save();
 showToast('✅ Plano semanal salvo!','s');
}

function saveRec(){
 var p=selPat||pats[0];if(!p){showToast('Selecione um paciente','w');return;}
 // Collect all rec items from DOM
 var items=[];
 document.querySelectorAll('.rec-item-row').forEach(function(row){
  var meal=row.dataset.meal||'';
  var food=(row.querySelector('.rec-food-input')||{}).value||'';
  var qty=parseFloat((row.querySelector('.rec-qty-input')||{}).value)||0;
  var obs=(row.querySelector('.rec-obs-input')||{}).value||'';
  if(food.trim())items.push({meal:meal,food:food,qty:qty,obs:obs});
 });
 if(!items.length){showToast('Adicione ao menos um alimento','w');return;}
 var totalKcal=0;
 items.forEach(function(it){
  var f=FOOD_DB.find(function(x){return x.n.toLowerCase().includes(it.food.toLowerCase());});
  if(f)totalKcal+=Math.round(f.k*(it.qty||100)/100);
 });
 var rec={
  id:Date.now(),
  date:new Date().toLocaleDateString('pt-BR'),
  isoDate:new Date().toISOString().slice(0,10),
  items:items,
  totalKcal:totalKcal,
  obs:(document.getElementById('rec-obs-geral')||{}).value||''
 };
 if(!p.recordatorios)p.recordatorios=[];
 p.recordatorios.unshift(rec);
 if(p.recordatorios.length>20)p.recordatorios=p.recordatorios.slice(0,20);
 DB.save();
 showToast('✅ Recordatório salvo! Total: ~'+totalKcal+' kcal','s');
 goP('rec',document.getElementById('ni-rec'));
}

function addRecItem(mealName){
 var container=document.getElementById('rec-items-'+mealName.replace(/\s/g,'-'));
 if(!container)return;
 var id='rec-'+Date.now();
 var row=document.createElement('div');
 row.className='rec-item-row';
 row.dataset.meal=mealName;
 row.style.cssText='display:flex;gap:6px;align-items:center;margin-bottom:6px;';
 row.innerHTML='<input class="sel rec-food-input" placeholder="Alimento..." style="flex:2;font-size:12px" />'
  +'<input class="sel rec-qty-input" type="number" placeholder="g" style="width:60px;font-size:12px" value="100"/>'
  +'<input class="sel rec-obs-input" placeholder="Obs..." style="flex:1;font-size:12px"/>'
  +'<button onclick="this.closest(\'.rec-item-row\').remove()" style="background:none;border:none;cursor:pointer;color:var(--red);font-size:16px;padding:0 4px">×</button>';
 container.appendChild(row);
 row.querySelector('.rec-food-input').focus();
}

function genAIQuick(){
 var p=selPat||pats[0];
 // Auto-detect objective from patient goal
 var objMap={emagrecimento:'emagrecimento',hipertrofia:'hipertrofia',manutenção:'manutencao'};
 var auto=Object.keys(objMap).find(function(k){return(p.goal||'').toLowerCase().includes(k)});
 var key=objMap[auto]||'manutencao';
 var sel=document.getElementById('ai-obj');if(sel)sel.value=key;
 genAI();
}

function applyAIGenPlan(){
 var genPlan=window._aiGenPlan;
 if(!genPlan||!genPlan.length){showToast('Nenhum plano gerado ainda','w');return;}
 var p=selPat||pats[0];if(!p){showToast('Selecione um paciente','w');return;}
 // Convert API plan (food names as strings) to meals format for prescription
 meals=genPlan.map(function(m){
  return{
   name:m.name,
   em:m.em||'🍽️',
   items:m.items.map(function(it){
    // Try to match food in DB by name
    var f=FOOD_DB.find(function(x){return x.n.toLowerCase().includes((it.food||'').toLowerCase().slice(0,6));});
    var qty=it.qty||100;
    var fac=qty/100;
    if(f){return{food:f,qty:qty,k:Math.round(f.k*fac),p:+(f.p*fac).toFixed(1),c:+(f.c*fac).toFixed(1),g:+(f.g*fac).toFixed(1)};}
    // Fallback: use kcal from API
    return{food:{id:0,n:it.food,e:'🍽️',k:Math.round((it.kcal||100)/qty*100),p:(it.prot||5),c:(it.carb||15),g:(it.gord||3)},qty:qty,k:it.kcal||100,p:it.prot||5,c:it.carb||15,g:it.gord||3};
   })
  };
 });
 savePlan();
 showToast('✅ Plano da IA aplicado e salvo para '+p.n+'!','s');
 setTimeout(function(){goP('presc',document.getElementById('ni-presc'));},700);
}

function applyAITemplate(key,kcal){
 var sel=document.getElementById('ai-obj');if(sel)sel.value=key;
 showToast('Template \''+key+'\' aplicado — clique em Gerar Plano','i');
}

function exportAIPlanPDF(){
 showToast('Exportando plano da IA para PDF…','s');
 setTimeout(function(){applyAIPlan();setTimeout(function(){exportPDF();},600);},300);
}

function _buildMealFromPlan(mealDef){
 var items=[];
 mealDef.items.forEach(function(it){
  var f=FOOD_DB.find(function(x){return x.n.toLowerCase().includes(it.fn.toLowerCase().split(' ')[0])});
  if(!f)f={id:99000+Math.random()*1000|0,n:it.fn,e:it.e,cat:'Personalizado',p:5,c:15,g:3,k:100,fe:0,ca:0,vc:0,va:0,zn:0,b12:0,fb:1};
  var factor=it.q/100;
  items.push({food:f,qty:it.q,k:Math.round(f.k*factor),p:+(f.p*factor).toFixed(1),c:+(f.c*factor).toFixed(1),g:+(f.g*factor).toFixed(1)});
 });
 return{name:mealDef.n,em:mealDef.em,items:items};
}

function _genAILocal(el, p, objKey, rest, nm, dist, wantSubs, wantLista, wantOri, targetKcal){
 var _aiPlans={
  emagrecimento:{kcalFactor:0.8,prot:0.30,carb:0.35,gord:0.35},
  hipertrofia:{kcalFactor:1.15,prot:0.35,carb:0.40,gord:0.25},
  manutencao:{kcalFactor:1.0,prot:0.25,carb:0.45,gord:0.30},
  saude:{kcalFactor:1.0,prot:0.25,carb:0.45,gord:0.30}
 };
 var plan=_aiPlans[objKey]||_aiPlans.manutencao;
 var tmb=p.sex==='F'?447.6+(9.2*p.w)+(3.1*p.h)-(4.3*p.age):88.4+(13.4*p.w)+(4.8*p.h)-(5.7*p.age);
 var get=Math.round(tmb*1.55);
 var kcal=Math.round(get*plan.kcalFactor);
 var mealSets={
  3:[{n:'Café da manhã',em:'☀️',fids:[6,17,41]},{n:'Almoço',em:'🍽️',fids:[1,11,13,33]},{n:'Jantar',em:'🌙',fids:[3,12,35]}],
  4:[{n:'Café da manhã',em:'☀️',fids:[6,17,41]},{n:'Almoço',em:'🍽️',fids:[1,11,13,33]},{n:'Lanche',em:'🍎',fids:[28,46]},{n:'Jantar',em:'🌙',fids:[3,12,35]}],
  5:[{n:'Café da manhã',em:'☀️',fids:[17,28,6]},{n:'Lanche manhã',em:'🥛',fids:[46,52]},{n:'Almoço',em:'🍽️',fids:[1,11,13,33]},{n:'Lanche tarde',em:'🍎',fids:[28,41]},{n:'Jantar',em:'🌙',fids:[3,12,35]}],
  6:[{n:'Café da manhã',em:'☀️',fids:[17,28,6]},{n:'Lanche manhã',em:'🥛',fids:[46,52]},{n:'Almoço',em:'🍽️',fids:[1,11,13,33,34]},{n:'Lanche tarde',em:'🍎',fids:[28,41]},{n:'Jantar',em:'🌙',fids:[3,12,35]},{n:'Ceia',em:'🌙',fids:[46,29]}]
 };
 var mset=mealSets[nm]||mealSets[5];
 var genMeals=mset.map(function(m){
  var items=m.fids.map(function(id){
   var f=FOOD_DB.find(function(x){return x.id===id;});
   if(!f)return null;
   var qty=100,fac=qty/100;
   return{food:f,qty:qty,k:Math.round(f.k*fac),p:+(f.p*fac).toFixed(1),c:+(f.c*fac).toFixed(1),g:+(f.g*fac).toFixed(1)};
  }).filter(Boolean);
  return{name:m.n,em:m.em,items:items};
 });
 window._aiSuggestions=genMeals;
 var tK=genMeals.reduce(function(s,m){return s+m.items.reduce(function(ss,it){return ss+it.k;},0);},0);
 var html='<div class="alert alert-y" style="margin-bottom:12px"><span>⚠️ Plano gerado localmente (API indisponível) — personalize conforme necessário</span></div>';
 html+='<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:16px">';
 [['🔥',tK+' kcal','Energia','#e85a0a'],['🥩',Math.round(kcal*plan.prot/4)+'g','Proteína','#3b82f6'],['🌾',Math.round(kcal*plan.carb/4)+'g','Carboidratos','#f59e0b'],['🥑',Math.round(kcal*plan.gord/9)+'g','Gorduras','#10b981']].forEach(function(m){
  html+='<div style="background:#fff;border:1.5px solid var(--n2);border-radius:12px;padding:12px;text-align:center"><div style="font-size:20px">'+m[0]+'</div><div style="font-family:var(--in);font-size:18px;font-weight:800;color:'+m[3]+'">'+m[1]+'</div><div style="font-size:10px;color:var(--n4)">'+m[2]+'</div></div>';
 });
 html+='</div>';
 genMeals.forEach(function(m){
  var mK=m.items.reduce(function(s,it){return s+it.k;},0);
  html+='<div class="card" style="margin-bottom:10px"><div class="ch"><span class="ct">'+m.em+' '+escHtml(m.name)+'</span><span class="cs">'+mK+' kcal</span></div>';
  m.items.forEach(function(it){html+='<div class="fi"><span class="fi-em">'+it.food.e+'</span><span class="fi-nm">'+escHtml(it.food.n)+'</span><span style="font-size:11px;color:var(--n4)">'+it.qty+'g</span><span class="fi-kcal">'+it.k+' kcal</span></div>';});
  html+='</div>';
 });
 html+='<div style="display:flex;gap:8px;margin-top:12px"><button class="btn btn-p" style="flex:1" onclick="applyAIPlan()">✅ Aplicar este plano</button><button class="btn btn-ghost" onclick="genAI()">🔄 Tentar novamente</button></div>';
 el.innerHTML=html;
 showToast('Plano local gerado para '+p.n,'s');
}

function setCat(el,cat){
 _foodCat=cat||'';
 document.querySelectorAll('.cat-pill').forEach(function(b){b.classList.remove('on')});
 if(el&&typeof el==='object')el.classList.add('on');
 else{var first=document.querySelector('.cat-pill');if(first)first.classList.add('on');}
 searchFood();
}

function setCatByData(el){setCat(el,(el.dataset||{}).cat||'');}

function buildCatPills(){
 var gen=document.getElementById('cat-pills-gen');if(!gen)return;
 var cats=[...new Set(FOOD_DB.map(function(f){return f.cat}))];
 gen.innerHTML=cats.map(function(cat){
  var label=cat.split(' ')[0];
  var btn=document.createElement('button');
  btn.className='cat-pill';
  btn.textContent=label;
  btn.title=cat;
  btn.onclick=function(){setCat(this,cat);};
  return btn.outerHTML;
 }).join('');
 // Fix: attach events after innerHTML (outerHTML loses onclick for complex cases)
 // Use data-cat approach instead
 gen.innerHTML=cats.map(function(cat){
  var label=cat.split(' ')[0];
  return '<button class="cat-pill" data-cat="'+cat+'" onclick="setCatByData(this)">'+label+'</button>';
 }).join('');
}

function toggleCustomFood(){
 var p=document.getElementById('custom-food-panel');
 if(p)p.style.display=p.style.display==='none'?'block':'none';
}

function calcMicro(){
 goP('micro',document.getElementById('ni-micro'));
}

function removeFood(mi,ii){removeFoodItem(mi,ii);}

function cancelAppt(patId, apptId){
 var p=pats.find(function(x){return x.id===patId;});if(!p)return;
 var a=p.appointments.find(function(x){return x.id===apptId;});if(!a)return;
 a.status='cancel';
 DB.save();
 showToast('Consulta cancelada','w');
 goP('agenda',document.getElementById('ni-agenda'));
}

function doneAppt(patId, apptId){
 var p=pats.find(function(x){return x.id===patId;});if(!p)return;
 var a=p.appointments.find(function(x){return x.id===apptId;});if(!a)return;
 a.status='done';
 p.last=new Date().toLocaleDateString('pt-BR');
 DB.save();
 showToast('Consulta marcada como concluída ✅','s');
 goP('agenda',document.getElementById('ni-agenda'));
}

function _checkAndAddRetornoAlert(p, dateStr){
 if(!p||!dateStr) return;
 var d = new Date(dateStr);
 var txt = 'Retorno agendado: '+p.n+' em '+d.toLocaleDateString('pt-BR');
 if(!notifs) notifs=[];
 var exists = notifs.find(function(n){return n.txt&&n.txt.indexOf(p.n)>=0&&n.txt.indexOf('Retorno')>=0;});
 if(!exists){
  notifs.unshift({id:Date.now(),txt:txt,type:'i',patId:p.id,patName:p.n,auto:true});
  updateNotifBadge();
 }
}

function _buildWeekView(){
 var now=new Date();
 // Get start of current week (Monday)
 var weekOffset=window._weekOffset||0;
 var dayOfWeek=now.getDay();
 var monday=new Date(now);
 monday.setDate(now.getDate()-(dayOfWeek===0?6:dayOfWeek-1)+(weekOffset*7));
 var days=[];
 for(var i=0;i<7;i++){var d=new Date(monday);d.setDate(monday.getDate()+i);days.push(d);}
 var dayNames=['Seg','Ter','Qua','Qui','Sex','Sáb','Dom'];

 // Gather all appointments
 var allAppts=[];
 pats.forEach(function(p){
  (p.appointments||[]).forEach(function(a){
   allAppts.push(Object.assign({},a,{patName:p.n,patId:p.id,patAv:p.av}));
  });
 });

 var html='<div style="display:flex;align-items:center;gap:8px;margin-bottom:14px">'
  +'<button class="btn btn-ghost btn-sm" onclick="window._weekOffset=(window._weekOffset||0)-1;goP(\'agenda\',document.getElementById(\'ni-agenda\'))">‹ Anterior</button>'
  +'<span style="font-family:var(--jk);font-size:12px;font-weight:700;flex:1;text-align:center">'
  +days[0].toLocaleDateString('pt-BR',{day:'2-digit',month:'short'})+' – '+days[6].toLocaleDateString('pt-BR',{day:'2-digit',month:'short',year:'numeric'})+'</span>'
  +'<button class="btn btn-ghost btn-sm" onclick="window._weekOffset=(window._weekOffset||0)+1;goP(\'agenda\',document.getElementById(\'ni-agenda\'))">Próxima ›</button>'
  +'<button class="btn btn-ghost btn-sm" onclick="window._weekOffset=0;goP(\'agenda\',document.getElementById(\'ni-agenda\'))">Hoje</button>'
  +'<button class="btn btn-ghost btn-sm" onclick="window._agView=\'month\';goP(\'agenda\',document.getElementById(\'ni-agenda\'))">📆 Mês</button>'
  +'<button class="btn btn-p btn-sm" onclick="openNewConsulta()">+ Nova Consulta</button>'
  +'</div>';

 // Time slots 07:00-20:00
 var slots=[];
 for(var h=7;h<=20;h++) slots.push(h);

 html+='<div style="overflow-x:auto">';
 html+='<table style="width:100%;border-collapse:collapse;min-width:600px">';
 // Header row
 html+='<tr><th style="width:50px;padding:4px 8px;border:1px solid var(--n2);background:var(--n1);font-size:10px;color:var(--n4)">Hora</th>';
 days.forEach(function(d,i){
  var isToday=d.toDateString()===now.toDateString();
  html+='<th style="padding:6px 4px;border:1px solid var(--n2);background:'+(isToday?'var(--g0)':'var(--n1)')+';font-size:11px;font-weight:700;color:'+(isToday?'var(--g6)':'var(--n7)')+'">'+dayNames[i]+'<br><span style="font-size:10px;font-weight:400">'+d.toLocaleDateString('pt-BR',{day:'2-digit',month:'2-digit'})+'</span></th>';
 });
 html+='</tr>';

 // Slot rows
 slots.forEach(function(h){
  html+='<tr>';
  html+='<td style="padding:4px 6px;border:1px solid var(--n2);font-size:9px;color:var(--n4);text-align:right;vertical-align:top">'+String(h).padStart(2,'0')+':00</td>';
  days.forEach(function(d){
   var dStr=d.toISOString().slice(0,10);
   var isToday=d.toDateString()===now.toDateString();
   var slotAppts=allAppts.filter(function(a){
    return (a.isoDate||'').slice(0,10)===dStr
     && parseInt((a.time||'0:0').split(':')[0])===h;
   });
   html+='<td style="padding:2px 3px;border:1px solid var(--n2);background:'+(isToday?'#fafff8':'#fff')+';vertical-align:top;min-height:28px">';
   slotAppts.forEach(function(a){
    var stColor=a.status==='done'?'#22c55e':a.status==='cancel'?'#ef4444':'#e85a0a';
    html+='<div style="background:'+stColor+';color:#fff;border-radius:4px;padding:2px 5px;font-size:9.5px;font-weight:700;margin-bottom:2px;cursor:pointer;overflow:hidden;white-space:nowrap;text-overflow:ellipsis"'
     +' onclick="showDayConsultas(\''+dStr+'\')" title="'+escHtml(a.patName)+' — '+(a.time||'')+'">'+escHtml(a.patName)+'</div>';
   });
   html+='</td>';
  });
  html+='</tr>';
 });
 html+='</table></div>';

 // Today's list below
 var todayStr=now.toISOString().slice(0,10);
 var todayAppts=allAppts.filter(function(a){return(a.isoDate||'').slice(0,10)===todayStr;});
 if(todayAppts.length>0){
  html+='<div class="card" style="margin-top:14px"><div class="ch"><span class="ct">Consultas de hoje</span></div>';
  todayAppts.forEach(function(a){
   html+='<div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--n1)">'
    +'<div style="font-size:13px;font-weight:800;color:var(--n8);min-width:44px">'+(a.time||'—')+'</div>'
    +'<div style="flex:1"><div style="font-size:12.5px;font-weight:700">'+escHtml(a.patName)+'</div>'
    +'<div style="font-size:10.5px;color:var(--n4)">'+escHtml(a.type||'Consulta')+(a.dur?' · '+a.dur+'min':'')+'</div></div>'
    +'<div style="display:flex;gap:4px">'
    +(a.status!=='done'?'<button class="btn btn-ghost btn-sm" style="font-size:10px;color:var(--green)" onclick="doneAppt('+a.patId+',\''+a.id+'\')">✓ Concluir</button>':'<span class="tag tg">Concluído</span>')
    +(a.status==='cancel'?'<span class="tag tr">Cancelado</span>':'')
    +(a.status==='pendente'?'<button class="btn btn-ghost btn-sm" style="font-size:10px;color:#ef4444" onclick="cancelAppt('+a.patId+',\''+a.id+'\')">✕ Cancelar</button>':'')
    +'</div></div>';
  });
  html+='</div>';
 }
 return html;
}

function suplBusca() {
  var q = (document.getElementById('sl-busca')||{}).value||'';
  var list = document.getElementById('sl-busca-list');
  if (!list) return;
  if (!q.trim()) { list.style.display='none'; return; }
  var q2 = q.toLowerCase();
  var results = SUPL_DB.filter(function(s){ return s.nome.toLowerCase().indexOf(q2)>=0 || s.categoria.toLowerCase().indexOf(q2)>=0; }).slice(0,6);
  if (!results.length) { list.style.display='none'; return; }
  list.innerHTML = results.map(function(s){
    return '<div onclick="suplSelectFromDB(\''+escHtml(s.nome)+'\',\''+escHtml(s.doseDefault)+'\',\''+escHtml(s.freqDefault)+'\',\''+escHtml(s.categoria)+'\')" style="padding:9px 14px;cursor:pointer;border-bottom:1px solid var(--n1);display:flex;gap:10px;align-items:center" onmouseover="this.style.background=\'var(--g0)\'" onmouseout="this.style.background=\'#fff\'">'
      + '<span style="font-size:18px">'+s.icon+'</span>'
      + '<div><div style="font-size:12.5px;font-weight:600;color:var(--n9)">'+escHtml(s.nome)+'</div>'
      + '<div style="font-size:10.5px;color:var(--n4)">'+escHtml(s.doseDefault)+' · '+escHtml(s.freqDefault)+'</div></div>'
      + '</div>';
  }).join('');
  list.style.display = 'block';
}

function suplSelectFromDB(nome, dose, freq, cat) {
  var el = function(id){ return document.getElementById(id); };
  if(el('sl-nome')) el('sl-nome').value = nome;
  if(el('sl-dose')) el('sl-dose').value = dose;
  if(el('sl-freq')) el('sl-freq').value = freq;
  if(el('sl-busca')) el('sl-busca').value = nome;
  if(el('sl-cat')) el('sl-cat').value = cat;
  var list = el('sl-busca-list');
  if(list) list.style.display='none';
}

function toggleSuplForm() {
  var f = document.getElementById('supl-form');
  if (f) {
    _suplFormOpen = !_suplFormOpen;
    f.style.display = _suplFormOpen ? 'block' : 'none';
    if (_suplFormOpen) {
      setTimeout(function(){ var el=document.getElementById('sl-busca'); if(el) el.focus(); }, 50);
    }
  }
}

function suplAddNota(patId) {
  var p = pats.find(function(x){ return x.id==patId; });
  if (!p) return;
  var txt = prompt('Nota clínica sobre suplementação:');
  if (!txt||!txt.trim()) return;
  if (!p.suplNotas) p.suplNotas = [];
  p.suplNotas.push({ txt: txt.trim(), data: new Date().toLocaleDateString('pt-BR') });
  DB.save();
  showToast('Nota salva','s');
  goP('supl', document.getElementById('ni-supl'));
}

function suplToggleAdesao(patId, idx) {
  var p = pats.find(function(x){ return x.id==patId; });
  if (!p||!p.suplementos||!p.suplementos[idx]) return;
  var s = p.suplementos[idx];
  s.aderindo = s.aderindo===false ? true : false;
  DB.save();
  showToast(s.aderindo ? '✅ Marcado como ativo' : '⏸ Suspenso', 's');
  goP('supl', document.getElementById('ni-supl'));
}

function _suplKpi(icon, val, label, bg, color) {
  return '<div style="background:'+bg+';border-radius:12px;padding:14px 16px;text-align:center">'
    + '<div style="font-size:22px;margin-bottom:4px">'+icon+'</div>'
    + '<div style="font-size:22px;font-weight:900;color:'+color+';line-height:1">'+val+'</div>'
    + '<div style="font-size:10.5px;color:var(--n5);margin-top:3px;font-weight:600;text-transform:uppercase;letter-spacing:.04em">'+label+'</div>'
    + '</div>';
}

function toggleFinForm(){
 var f=document.getElementById('fin-form');
 if(f)f.style.display=f.style.display==='block'?'none':'block';
}

function _autoSync(){
 // Debounced auto-sync after local save
 clearTimeout(window._syncTimer);
 window._syncTimer=setTimeout(function(){
  if(typeof apiUpdatePatient==='function'&&selPat){
   apiUpdatePatient(selPat).catch(function(){});
  }
 },3000);
}

function _patchDBsave(){
 if(typeof DB==='undefined'||!DB.save)return;
 if(DB._patched)return;
 var _orig=DB.save.bind(DB);
 DB.save=function(){_orig();_autoSync();};
 DB._patched=true;
}

function _checkAutoReminders(){
 if(!pats||!pats.length)return;
 var now=new Date();
 var today=now.toISOString().slice(0,10);
 var reminders=[];

 pats.forEach(function(p){
  // 1. Paciente sem diário há 3+ dias
  var lastDiary=null;
  if(p.diary&&p.diary.length){
   var sorted=[...p.diary].sort(function(a,b){return(b.isoDate||'')>(a.isoDate||'')?1:-1;});
   lastDiary=sorted[0].isoDate;
  }
  if(lastDiary){
   var diffDays=Math.round((new Date(today)-new Date(lastDiary))/(86400000));
   if(diffDays>=3){
    reminders.push({txt:p.n+' não registra diário há '+diffDays+' dias',type:'y',patId:p.id,patName:p.n,tag:'diary_'+p.id});
   }
  }

  // 2. Consulta em menos de 24h
  (p.appointments||[]).forEach(function(a){
   if(a.status==='done'||a.status==='cancel')return;
   var apptDate=new Date(a.isoDate);
   var diffH=(apptDate-now)/3600000;
   if(diffH>0&&diffH<=24){
    reminders.push({txt:'Consulta com '+p.n+' amanhã às '+a.time,type:'i',patId:p.id,patName:p.n,tag:'appt_'+a.id});
   }
  });

  // 3. Sem consulta há mais de 30 dias
  var lastAppt=null;
  (p.appointments||[]).forEach(function(a){
   if(a.status==='done'&&a.isoDate>( lastAppt||'')){lastAppt=a.isoDate.slice(0,10);}
  });
  if(lastAppt){
   var diffDaysAppt=Math.round((new Date(today)-new Date(lastAppt))/86400000);
   if(diffDaysAppt>=30){
    reminders.push({txt:p.n+' está há '+diffDaysAppt+' dias sem consulta',type:'r',patId:p.id,patName:p.n,tag:'noAppt_'+p.id});
   }
  }
 });

 // Add new reminders that aren't already in notifs
 var added=0;
 reminders.forEach(function(r){
  var exists=(notifs||[]).find(function(n){return n.tag===r.tag;});
  if(!exists){
   if(!notifs)notifs=[];
   notifs.unshift(Object.assign({id:Date.now()+Math.random(),auto:true},r));
   added++;
  }
 });
 if(added>0){updateNotifBadge();DB.save();}
}

function _startReminderLoop(){
 _checkAutoReminders();
 setInterval(_checkAutoReminders,3600000);
}

function tourNext() { if (_tourStep < _tourSteps.length-1) { _tourStep++; _tourRender(); } else { tourEnd(); } }

function tourPrev() { if (_tourStep > 0) { _tourStep--; _tourRender(); } }

function tourEnd() {
  _tourActive = false;
  var ov = document.getElementById('tour-overlay');
  var tip = document.getElementById('tour-tip');
  if (ov) ov.style.display = 'none';
  if (tip) tip.style.display = 'none';
  _tourClearRing();
  try { localStorage.setItem('dieton_tour_done','1'); } catch(e) {}
}

function _tourRender() {
  var s = _tourSteps[_tourStep];
  var total = _tourSteps.length;
  var pct = Math.round((_tourStep/(total-1))*100);
  var prog = document.getElementById('tour-prog'); if (prog) prog.style.width = pct+'%';
  var lbl = document.getElementById('tour-step-lbl'); if (lbl) lbl.textContent = 'Passo '+(_tourStep+1)+' de '+total;
  var ico = document.getElementById('tour-icon'); if (ico) ico.textContent = s.icon;
  var ttl = document.getElementById('tour-title'); if (ttl) ttl.textContent = s.title;
  var bdy = document.getElementById('tour-body'); if (bdy) bdy.innerHTML = s.body;
  var dots = ''; for (var i=0;i<total;i++) { dots+='<span style="display:inline-block;width:'+(i===_tourStep?'18px':'6px')+';height:6px;border-radius:99px;background:'+(i===_tourStep?'#e85a0a':'#d1d5db')+';transition:all .25s ease"></span>'; }
  var dotEl = document.getElementById('tour-dots'); if (dotEl) dotEl.innerHTML = dots;
  var prev = document.getElementById('tour-prev'); if (prev) prev.style.display = _tourStep>0?'block':'none';
  var nxt = document.getElementById('tour-next'); if (nxt) nxt.textContent = _tourStep<total-1?'Próximo →':'Finalizar 🚀';
  var el = (s.el||s.elFallback) ? document.getElementById(s.el||s.elFallback) : null;
  if (!el || s.pos==='center') { _tourClearRing(); _tourPositionCenter(); }
  else { _tourHighlight(el, s.pos); }
}

function _tourClearRing() {
  var ring = document.getElementById('tour-ring');
  var hole = document.getElementById('tour-hole');
  var ov = document.getElementById('tour-overlay');
  if (ring) ring.style.opacity = '0';
  if (hole) { hole.setAttribute('x','0'); hole.setAttribute('y','0'); hole.setAttribute('width','0'); hole.setAttribute('height','0'); }
  if (ov) ov.style.pointerEvents = 'none';
}

function _tourHighlight(el, pos) {
  var rect = el.getBoundingClientRect(); var pad = 8;
  var x=rect.left-pad, y=rect.top-pad, w=rect.width+pad*2, h=rect.height+pad*2;
  var hole = document.getElementById('tour-hole');
  if (hole) { hole.setAttribute('x',x); hole.setAttribute('y',y); hole.setAttribute('width',w); hole.setAttribute('height',h); }
  var ring = document.getElementById('tour-ring');
  if (ring) { ring.style.opacity='1'; ring.style.left=x+'px'; ring.style.top=y+'px'; ring.style.width=w+'px'; ring.style.height=h+'px'; }
  var ov = document.getElementById('tour-overlay'); if (ov) ov.style.pointerEvents='all';
  _tourPositionTip(rect, pos);
}

function _tourPositionCenter() {
  var tip = document.getElementById('tour-tip'); if (!tip) return;
  var tipW=300, vw=window.innerWidth, vh=window.innerHeight;
  tip.style.left=(vw/2-tipW/2)+'px'; tip.style.top=(vh/2-(tip.offsetHeight||220)/2)+'px'; tip.style.width=tipW+'px';
}

function _tourPositionTip(rect, pos) {
  var tip = document.getElementById('tour-tip'); if (!tip) return;
  var tipW=300, tipH=tip.offsetHeight||220, vw=window.innerWidth, vh=window.innerHeight, margin=16, left, top;
  if (pos==='right') { left=Math.min(rect.right+margin+8,vw-tipW-margin); top=Math.max(margin,Math.min(rect.top+rect.height/2-tipH/2,vh-tipH-margin)); }
  else if (pos==='left') { left=Math.max(margin,rect.left-tipW-margin-8); top=Math.max(margin,Math.min(rect.top+rect.height/2-tipH/2,vh-tipH-margin)); }
  else { left=vw/2-tipW/2; top=vh/2-tipH/2; }
  tip.style.left=left+'px'; tip.style.top=top+'px'; tip.style.width=tipW+'px';
}


function _renderNutrientChart(tk,tp,tc,tf,tfb,tna){
 var panel=document.getElementById('nutrient-chart-panel');
 if(!panel)return;
 var tkCal=tp*4+tc*4+tf*9;
 var pPct=tkCal>0?Math.round(tp*4/tkCal*100):0;
 var cPct=tkCal>0?Math.round(tc*4/tkCal*100):0;
 var fPct=tkCal>0?(100-pPct-cPct):0;
 var pMeta=mP||0,cMeta=mC||0,fMeta=mF||0;

 function donutRing(cx,cy,r,ir,start,end,color){
  if(end<=start)return'';
  if(end-start>=Math.PI*2)end=start+Math.PI*1.9999;
  var x1=cx+r*Math.cos(start-Math.PI/2),y1=cy+r*Math.sin(start-Math.PI/2);
  var x2=cx+r*Math.cos(end-Math.PI/2),y2=cy+r*Math.sin(end-Math.PI/2);
  var ix1=cx+ir*Math.cos(start-Math.PI/2),iy1=cy+ir*Math.sin(start-Math.PI/2);
  var ix2=cx+ir*Math.cos(end-Math.PI/2),iy2=cy+ir*Math.sin(end-Math.PI/2);
  var large=(end-start>Math.PI)?1:0;
  return '<path d="M'+x1.toFixed(1)+' '+y1.toFixed(1)+' A'+r+' '+r+' 0 '+large+' 1 '+x2.toFixed(1)+' '+y2.toFixed(1)+' L'+ix2.toFixed(1)+' '+iy2.toFixed(1)+' A'+ir+' '+ir+' 0 '+large+' 0 '+ix1.toFixed(1)+' '+iy1.toFixed(1)+' Z" fill="'+color+'"/>';
 }

 var svg='';
 if(tkCal>0){
  var cx=60,cy=60,r=52,ir=33,cur=0;
  var slices=[[tp*4/tkCal,'#3b82f6'],[tc*4/tkCal,'#f59e0b'],[tf*9/tkCal,'#ef4444']];
  slices.forEach(function(s){
   if(s[0]>0){var start=cur*Math.PI*2,end=(cur+s[0])*Math.PI*2;svg+=donutRing(cx,cy,r,ir,start,end,s[1]);cur+=s[0];}
  });
 } else {
  svg+='<circle cx="60" cy="60" r="52" fill="none" stroke="var(--n2)" stroke-width="19"/>';
 }

 function macroBar(label,val,meta,color,unit){
  var pct=meta>0?Math.min(100,val/meta*100):0;
  var over=meta>0&&val>meta;
  return '<div style="margin-bottom:8px">'
   +'<div style="display:flex;justify-content:space-between;margin-bottom:3px">'
   +'<span style="font-size:11.5px;font-weight:700;color:var(--n8)">'+label+'</span>'
   +'<span style="font-size:11px;color:'+(over?'#ef4444':'var(--n5)')+'">'+val.toFixed(1)+unit+(meta>0?' / '+meta+unit:'')+'</span>'
   +'</div>'
   +'<div style="height:7px;background:var(--n2);border-radius:99px;overflow:hidden">'
   +'<div style="height:100%;width:'+pct+'%;background:'+color+';border-radius:99px;transition:width .4s ease"></div>'
   +'</div></div>';
 }

 var activeMeals=meals.filter(function(m){return m.items.length;}).length||1;
 var kcalPerMeal=(tk/activeMeals).toFixed(0);

 panel.innerHTML=
  '<div class="card" style="margin-bottom:10px">'
  +'<div class="ch"><span class="ct">📊 Nutrientes do Plano</span>'
  +'<span class="cs">Atualiza automaticamente</span></div>'
  +'<div style="display:flex;align-items:flex-start;gap:14px;flex-wrap:wrap">'
  // Donut
  +'<div style="flex-shrink:0;text-align:center">'
  +'<svg width="120" height="120" viewBox="0 0 120 120">'+svg
  +'<text x="60" y="55" text-anchor="middle" font-size="15" font-weight="800" fill="var(--n9)">'+tk.toFixed(0)+'</text>'
  +'<text x="60" y="69" text-anchor="middle" font-size="9" fill="var(--n5)">kcal/dia</text>'
  +'</svg>'
  // Legend dots
  +'<div style="display:flex;justify-content:center;gap:8px;margin-top:2px">'
  +[['P',pPct+'%','#3b82f6'],['C',cPct+'%','#f59e0b'],['G',fPct+'%','#ef4444']].map(function(r){
    return '<div style="display:flex;align-items:center;gap:3px">'
     +'<span style="width:8px;height:8px;border-radius:50%;background:'+r[2]+';display:inline-block"></span>'
     +'<span style="font-size:10px;color:var(--n6)">'+r[0]+' <b style="color:var(--n9)">'+r[1]+'</b></span>'
     +'</div>';
   }).join('')
  +'</div></div>'
  // Macro bars
  +'<div style="flex:1;min-width:160px">'
  +macroBar('🥩 Proteínas',tp,pMeta,'#3b82f6','g')
  +macroBar('🌾 Carboidratos',tc,cMeta,'#f59e0b','g')
  +macroBar('🥑 Gorduras',tf,fMeta,'#ef4444','g')
  +'</div></div>'
  // Extra nutrients grid
  +'<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:7px;margin-top:10px">'
  +[
    ['🌿 Fibras', tfb.toFixed(1)+'g', tfb>=25?'#22c55e':tfb>=15?'#f59e0b':'var(--n5)'],
    ['🧂 Sódio', tna>0?tna.toFixed(0)+'mg':'—', tna>2300?'#ef4444':tna>1500?'#f59e0b':'var(--n5)'],
    ['🍽️ Méd/refeição', kcalPerMeal+' kcal', 'var(--n5)'],
   ].map(function(r){
    return '<div style="background:var(--n0);border-radius:9px;padding:9px;text-align:center;border:1.5px solid var(--n2)">'
     +'<div style="font-size:10.5px;color:var(--n4);margin-bottom:3px">'+r[0]+'</div>'
     +'<div style="font-size:13px;font-weight:800;color:'+r[2]+'">'+r[1]+'</div>'
     +'</div>';
   }).join('')
  +'</div></div>';
}