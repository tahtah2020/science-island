/* Science Island · Grade 5 Chapter 9 "Water Cycle" · pictures.
   The owner's 12 pictures (sent 25 Oct 2026, the "Gemini Notebook" mark cropped away, no captions): science/assets/ch9_*.jpg
     laundry (wet shirt on a line under the sun) · puddle (puddle under the sun) · beaker (jar of water covered with plastic wrap and a rubber band)
     glass (glass of water with drops) · icejar (jar of ice with drops outside) · dew (leaf with drops) · mtrain (cloud raining on mountains)
     river (river flowing to the sea) · dam (dam holding a lake) · felucca (sailboat) · micro (microscope) · sprout (seedling in a pot)
   Also drawn in code: cycle() = sea, sun, rising vapor, cloud, rain on a mountain, river back to the sea (no words, no arrows' labels).
   Shared by the game (waterlab.html) and the tap pictures of the question pages.
   window.CH_DIAGRAMS adds: ch9Two, ch9Four, ch9Lab, ch9Tools, ch9Cycle (tap) and ch9Photo, ch9CycleFig (figures above a question; ch9Photo uses q.p = photo id).
   Each takes q and honours q.pic.plain. Screen-reader names describe the picture, never the answer. */
(function () {
  'use strict';
  const T = (en, ar) => (window.SI ? window.SI.T(en, ar) : en);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const f1 = n => (Math.round(n * 10) / 10).toString();
  const PH = {
    c9laundry: ['laundry', 'A wet blue shirt on a line under the sun', 'قميص أزرق مبلول على حبل تحت الشمس'],
    c9puddle: ['puddle', 'A puddle of water under the sun', 'بركة ماء صغيرة تحت الشمس'],
    c9beaker: ['beaker', 'A jar of water covered with plastic wrap and a rubber band', 'برطمان فيه ماء مغطّى بغلاف بلاستيكي ورباط مطاطي'],
    c9glass: ['glass', 'A glass of water with drops', 'كوب ماء عليه قطرات'],
    c9icejar: ['icejar', 'A jar full of ice cubes with drops on it', 'برطمان مليء بمكعبات الثلج وعليه قطرات'],
    c9dew: ['dew', 'A green leaf with shiny drops', 'ورقة خضراء عليها قطرات لامعة'],
    c9mtrain: ['mtrain', 'A grey cloud over mountains with drops falling', 'سحابة رمادية فوق جبال وتسقط منها قطرات'],
    c9river: ['river', 'A river between green banks going to the sea', 'نهر بين ضفاف خضراء يتجه إلى البحر'],
    c9dam: ['dam', 'A big wall of stone holding back a lake', 'جدار حجري كبير يحجز بحيرة'],
    c9felucca: ['felucca', 'A boat with a white sail on calm water', 'مركب بشراع أبيض على ماء هادئ'],
    c9micro: ['micro', 'A tool with lenses, a stage and a knob', 'أداة لها عدسات ومنصة ومقبض'],
    c9sprout: ['sprout', 'A small green seedling in a clay pot', 'شتلة خضراء صغيرة في أصيص فخار']
  };
  const CY = { w9sea: ['The sea', 'البحر'], w9cloud: ['The cloud in the sky', 'السحابة في السماء'], w9rain: ['Rain over the mountain', 'المطر فوق الجبل'], w9river: ['The river on the land', 'النهر على اليابسة'] };
  const src = id => `science/assets/ch9_${PH[id][0]}.jpg`;
  const nameOf = id => (PH[id] ? T(PH[id][1], PH[id][2]) : CY[id] ? T(CY[id][0], CY[id][1]) : id);
  let uid = 0;
  function photo(id, cx, cy, r) {
    const k = 'c9p' + (++uid);
    return `<clipPath id="${k}"><circle cx="${f1(cx)}" cy="${f1(cy)}" r="${f1(r)}"/></clipPath><circle cx="${f1(cx)}" cy="${f1(cy)}" r="${f1(r + 4)}" fill="#fff"/>`
      + `<image href="${src(id)}" x="${f1(cx - r)}" y="${f1(cy - r)}" width="${f1(r * 2)}" height="${f1(r * 2)}" preserveAspectRatio="xMidYMid slice" clip-path="url(#${k})"/><circle cx="${f1(cx)}" cy="${f1(cy)}" r="${f1(r)}" fill="none" stroke="#c9d8ea" stroke-width="1.6"/>`;
  }
  function card(id, x, y, w, h, rx = 16) {
    const k = 'c9c' + (++uid);
    return `<clipPath id="${k}"><rect x="${f1(x)}" y="${f1(y)}" width="${f1(w)}" height="${f1(h)}" rx="${rx}"/></clipPath><rect x="${f1(x - 4)}" y="${f1(y - 4)}" width="${f1(w + 8)}" height="${f1(h + 8)}" rx="${rx + 3}" fill="#fff"/>`
      + `<image href="${src(id)}" x="${f1(x)}" y="${f1(y)}" width="${f1(w)}" height="${f1(h)}" preserveAspectRatio="xMidYMid slice" clip-path="url(#${k})"/>`;
  }
  /* The water cycle drawn in code, in a 340 x 250 box placed at (x, y) and scaled by k. No words.
     Parts (for taps): sea (left bottom), cloud (top), rain (over the mountain, right), river (from the mountain back to the sea).
     opts.vapor = show the rising wavy lines (default true), opts.arrows = the big loop arrows, opts.rain = the falling drops (both default true). */
  const PARTS = { w9sea: [70, 205, 58], w9cloud: [200, 58, 50], w9rain: [262, 120, 34], w9river: [196, 205, 36] };
  function cycle(x = 0, y = 0, k = 1, opts = {}) {
    const vapor = opts.vapor !== false, arrows = opts.arrows !== false, rain = opts.rain !== false;
    let s = `<g transform="translate(${f1(x)} ${f1(y)}) scale(${f1(k)})">`;
    s += `<rect width="340" height="250" rx="14" fill="#e3f2fb"/>`;
    s += `<circle cx="44" cy="44" r="22" fill="#f6c94c"/><g stroke="#f2b134" stroke-width="4" stroke-linecap="round"><path d="M44 10V2M44 86V78M10 44H2M86 44H78M20 20l-6-6M68 68l6 6M20 68l-6 6M68 20l6-6"/></g>`;
    s += `<path d="M0 180Q40 172 80 180T150 182V250H0Z" fill="#5fb3d9"/><path d="M8 196q14-6 28 0M60 214q14-6 28 0M100 196q14-6 28 0" stroke="#d6eef9" stroke-width="3" fill="none" stroke-linecap="round"/>`;
    s += `<path d="M140 250V190Q200 170 230 140L270 92L340 150V250Z" fill="#8cc97a"/><path d="M230 140L270 92L310 125L290 150Z" fill="#b48a62"/><path d="M262 101l8-9 9 8-6 6z" fill="#fff"/>`;
    s += `<path d="M300 150Q262 170 236 190T150 206" stroke="#3d8fc9" stroke-width="12" fill="none" stroke-linecap="round"/><path d="M300 150Q262 170 236 190T150 206" stroke="#7fc3ea" stroke-width="5" fill="none" stroke-linecap="round"/>`;
    if (vapor) s += `<g stroke="#9ccbe6" stroke-width="3.5" fill="none" stroke-linecap="round"><path d="M50 170q-8-12 0-24t0-24"/><path d="M80 166q-8-12 0-24t0-24"/><path d="M110 170q-8-12 0-24t0-24"/></g>`;
    s += `<g fill="#fff" stroke="#9fb9d4" stroke-width="3"><ellipse cx="200" cy="66" rx="56" ry="20"/><ellipse cx="176" cy="52" rx="26" ry="22"/><ellipse cx="212" cy="44" rx="30" ry="26"/><ellipse cx="238" cy="58" rx="20" ry="16"/></g><ellipse cx="200" cy="66" rx="52" ry="16" fill="#fff"/>`;
    if (rain) s += `<g fill="#3d8fc9">${[[240, 100], [256, 116], [272, 98], [284, 122], [250, 134], [268, 140]].map(([a, b]) => `<path d="M${a} ${b}q-5 8 0 11q5-3 0-11z"/>`).join('')}</g>`;
    if (arrows) s += `<g stroke="#e2603f" stroke-width="5" fill="none" stroke-linecap="round"><path d="M28 150Q20 100 70 70Q100 52 130 52"/><path d="M262 170Q240 236 150 236"/></g><path d="M128 42l16 10-16 10z" fill="#e2603f"/><path d="M152 226l-16 10 16 10z" fill="#e2603f"/>`;
    return s + '</g>';
  }
  const hot = (id, inner) => `<g class="hot" data-id="${id}" role="button" tabindex="0" aria-label="${esc(nameOf(id))}">${inner}</g>`;
  const ring = (cx, cy, r) => `<circle class="ring" cx="${f1(cx)}" cy="${f1(cy)}" r="${f1(r)}"/>`;
  const wrap = (w, h, label, inner, plain) => (plain ? inner : `<svg class="diagram" viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(label)}">${inner}</svg>`);
  const back = (w, h) => `<rect width="${w}" height="${h}" rx="14" fill="#f1f7fd"/>`;
  function makeSet(ids, w, h, slots, r, label) {
    function pic(q) {
      const plain = !!(q && q.pic && q.pic.plain);
      let s = plain ? '' : back(w, h);
      ids.forEach((id, i) => { s += photo(id, slots[i][0], slots[i][1], r); });
      if (!plain) ids.forEach((id, i) => { s += hot(id, ring(slots[i][0], slots[i][1], r + 2)); });
      return wrap(w, h, label(), s, plain);
    }
    pic.rings = () => { const o = {}; ids.forEach((id, i) => { o[id] = [slots[i][0] - r, slots[i][1] - r, r * 2, r * 2]; }); return o; };
    return pic;
  }
  const PAIR = [[90, 95], [250, 95]], Q4 = [[90, 70], [250, 70], [90, 180], [250, 180]];
  const ch9Two = makeSet(['c9puddle', 'c9icejar'], 340, 190, PAIR, 76, () => T('Two pictures with water', 'صورتان فيهما ماء'));
  const ch9Lab = makeSet(['c9beaker', 'c9icejar'], 340, 190, PAIR, 76, () => T('Two jars', 'برطمانان'));
  const ch9Tools = makeSet(['c9micro', 'c9sprout'], 340, 190, PAIR, 76, () => T('A tool and a plant', 'أداة ونبات'));
  const ch9Four = makeSet(['c9laundry', 'c9glass', 'c9mtrain', 'c9river'], 340, 250, Q4, 48, () => T('Four pictures with water', 'أربع صور فيها ماء'));
  function ch9Cycle(q) {
    const plain = !!(q && q.pic && q.pic.plain);
    let s = cycle(0, 0, 1);
    if (!plain) Object.keys(PARTS).forEach(id => { const [cx, cy, r] = PARTS[id]; s += hot(id, ring(cx, cy, r)); });
    return wrap(340, 250, T('A drawing of the sea, the sun, a cloud, a mountain and a river', 'رسم للبحر والشمس وسحابة وجبل ونهر'), s, plain);
  }
  ch9Cycle.rings = () => { const o = {}; Object.keys(PARTS).forEach(id => { const [cx, cy, r] = PARTS[id]; o[id] = [cx - r, cy - r, r * 2, r * 2]; }); return o; };
  function ch9CycleFig(q) {
    const plain = !!(q && q.pic && q.pic.plain);
    return wrap(340, 250, T('A drawing of the sea, the sun, a cloud, a mountain and a river', 'رسم للبحر والشمس وسحابة وجبل ونهر'), cycle(0, 0, 1, { arrows: false }), plain);
  }
  /* ch9Photo: one of the owner's pictures above the question (q.p = id) */
  function ch9Photo(q) {
    const id = (q && q.p) || 'c9puddle', plain = !!(q && q.pic && q.pic.plain);
    return wrap(340, 190, nameOf(id), (plain ? '' : back(340, 190)) + card(id, 85, 10, 170, 170), plain);
  }
  window.CH9ART = { PH, src, nameOf, photo, card, cycle, PARTS };
  window.CH_DIAGRAMS = Object.assign(window.CH_DIAGRAMS || {}, { ch9Two, ch9Lab, ch9Tools, ch9Four, ch9Cycle, ch9CycleFig, ch9Photo });
})();
