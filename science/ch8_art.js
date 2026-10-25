/* Science Island · Grade 5 Chapter 8 "Changes in Weather" · pictures.
   The owner's 12 pictures (sent 25 Oct 2026, the "Gemini Notebook" mark cropped away, no captions): science/assets/ch8_*.jpg
     rain (cloud with rain) · snow (cloud with snow) · sun · clouds (many small clouds) · dark (dark rain clouds) · compass · tower · palm · boat · sat (weather satellite) · radar (weather radar) · sand (sandstorm)
   Also drawn in code: grid(n) = the sky cut into 8 blocks with n of them covered by clouds (cloud cover).
   Shared by the game (weatherlab.html), the tap pictures of the question pages and the map (science/tools/make_ch8_map.js).
   window.CH_DIAGRAMS adds: ch8Sky, ch8Refs, ch8Tools, ch8Dust, ch8Grid. Each takes q and honours q.pic.plain. Screen-reader names describe the picture, never the answer. */
(function () {
  'use strict';
  const T = (en, ar) => (window.SI ? window.SI.T(en, ar) : en);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const f1 = n => (Math.round(n * 10) / 10).toString();
  const PH = {
    c8sun: ['sun', 'A smiling sun in a blue sky', 'شمس مبتسمة في سماء زرقاء'], c8clouds: ['clouds', 'Many small smiling clouds together', 'غيوم صغيرة كثيرة مبتسمة معًا'],
    c8rain: ['rain', 'A grey cloud with drops falling', 'سحابة رمادية تتساقط منها قطرات'], c8snow: ['snow', 'A cloud with white stars falling', 'سحابة تتساقط منها نجوم بيضاء'],
    c8dark: ['dark', 'Dark blue clouds with drops falling', 'غيوم زرقاء داكنة تتساقط منها قطرات'], c8compass: ['compass', 'A round gold tool with a red and blue needle', 'أداة ذهبية مستديرة بإبرة حمراء وزرقاء'],
    c8tower: ['tower', 'A tall stone tower', 'برج حجري عالٍ'], c8palm: ['palm', 'A palm tree with dates', 'نخلة عليها تمر'], c8boat: ['boat', 'A wooden boat with a white sail on the water', 'مركب خشبي بشراع أبيض على الماء'],
    c8sat: ['sat', 'A machine with panels and a dish in space', 'آلة لها ألواح وطبق في الفضاء'], c8radar: ['radar', 'A white ball on top of a small building', 'كرة بيضاء فوق مبنى صغير'], c8sand: ['sand', 'A swirling orange cloud over sand dunes', 'سحابة برتقالية دوّارة فوق كثبان رملية']
  };
  const src = id => `science/assets/ch8_${PH[id][0]}.jpg`;
  const nameOf = id => T(PH[id][1], PH[id][2]);
  let uid = 0;
  function photo(id, cx, cy, r) {
    const k = 'c8p' + (++uid);
    return `<clipPath id="${k}"><circle cx="${f1(cx)}" cy="${f1(cy)}" r="${f1(r)}"/></clipPath><circle cx="${f1(cx)}" cy="${f1(cy)}" r="${f1(r + 4)}" fill="#fff"/>`
      + `<image href="${src(id)}" x="${f1(cx - r)}" y="${f1(cy - r)}" width="${f1(r * 2)}" height="${f1(r * 2)}" preserveAspectRatio="xMidYMid slice" clip-path="url(#${k})"/><circle cx="${f1(cx)}" cy="${f1(cy)}" r="${f1(r)}" fill="none" stroke="#c9d8ea" stroke-width="1.6"/>`;
  }
  function card(id, x, y, w, h, rx = 16) {
    const k = 'c8c' + (++uid);
    return `<clipPath id="${k}"><rect x="${f1(x)}" y="${f1(y)}" width="${f1(w)}" height="${f1(h)}" rx="${rx}"/></clipPath><rect x="${f1(x - 4)}" y="${f1(y - 4)}" width="${f1(w + 8)}" height="${f1(h + 8)}" rx="${rx + 3}" fill="#fff"/>`
      + `<image href="${src(id)}" x="${f1(x)}" y="${f1(y)}" width="${f1(w)}" height="${f1(h)}" preserveAspectRatio="xMidYMid slice" clip-path="url(#${k})"/>`;
  }
  /* the sky cut into 8 blocks (4 x 2), n of them covered by clouds. x, y, w, h = the whole grid. Blocks are covered in a fixed scattered order. */
  const ORDER = [1, 6, 3, 4, 0, 7, 2, 5];
  function grid(n, x, y, w, h, opts = {}) {
    const bw = w / 4, bh = h / 2, cov = new Set(ORDER.slice(0, n));
    let s = `<rect x="${f1(x)}" y="${f1(y)}" width="${f1(w)}" height="${f1(h)}" rx="12" fill="${opts.sky || '#bfe3f7'}"/>`;
    for (let i = 0; i < 8; i++) {
      const bx = x + (i % 4) * bw, by = y + Math.floor(i / 4) * bh;
      if (cov.has(i)) s += `<g transform="translate(${f1(bx + bw / 2)} ${f1(by + bh / 2)}) scale(${f1(Math.min(bw, bh * 1.5) / 74)})"><ellipse cx="0" cy="6" rx="30" ry="12" fill="#fff"/><ellipse cx="-14" cy="-2" rx="16" ry="14" fill="#fff"/><ellipse cx="8" cy="-8" rx="19" ry="17" fill="#fff"/><ellipse cx="22" cy="4" rx="14" ry="11" fill="#fff"/><path d="M-30 12Q0 20 30 12" stroke="#d6e4f2" stroke-width="3" fill="none"/></g>`;
    }
    s += `<g stroke="#7fa6c9" stroke-width="2.2" fill="none" stroke-dasharray="6 6"><path d="M${f1(x + bw)} ${f1(y)}V${f1(y + h)}M${f1(x + 2 * bw)} ${f1(y)}V${f1(y + h)}M${f1(x + 3 * bw)} ${f1(y)}V${f1(y + h)}M${f1(x)} ${f1(y + bh)}H${f1(x + w)}"/></g><rect x="${f1(x)}" y="${f1(y)}" width="${f1(w)}" height="${f1(h)}" rx="12" fill="none" stroke="#7fa6c9" stroke-width="3"/>`;
    return s;
  }
  const hot = (id, inner) => `<g class="hot" data-id="${id}" role="button" tabindex="0" aria-label="${esc(nameOf(id))}">${inner}</g>`;
  const ring = (cx, cy, r) => `<circle class="ring" cx="${f1(cx)}" cy="${f1(cy)}" r="${f1(r)}"/>`;
  const wrap = (w, h, label, inner, plain) => (plain ? inner : `<svg class="diagram" viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(label)}">${inner}</svg>`);
  const back = (w, h) => `<rect width="${w}" height="${h}" rx="14" fill="#f1f7fd"/>`;
  function makeSet(ids, w, h, slots, r, label) {
    const ar = T(false, true);
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
  const PAIR = [[90, 95], [250, 95]], FOUR = [[62, 66], [170, 66], [278, 66], [116, 184], [224, 184]];
  const Q4 = [[90, 70], [250, 70], [90, 180], [250, 180]];
  const ch8Sky = makeSet(['c8sun', 'c8clouds', 'c8rain', 'c8snow'], 340, 250, Q4, 48, () => T('Four pictures of the sky', 'أربع صور للسماء'));
  const ch8Refs = makeSet(['c8tower', 'c8palm', 'c8boat', 'c8compass'], 340, 250, Q4, 48, () => T('Four pictures', 'أربع صور'));
  const ch8Tools = makeSet(['c8sat', 'c8radar'], 340, 190, PAIR, 76, () => T('Two machines that watch the weather', 'آلتان تراقبان الطقس'));
  const ch8Dust = makeSet(['c8sand', 'c8clouds'], 340, 190, PAIR, 76, () => T('Two pictures of the sky', 'صورتان للسماء'));
  /* ch8Grid: a figure above the question (q.n = covered blocks) */
  function ch8Grid(q) {
    const n = (q && q.n) || 0, plain = !!(q && q.pic && q.pic.plain);
    return wrap(340, 170, T(`The sky cut into 8 blocks, ${n} covered by clouds`, `السماء مقسّمة إلى ٨ مربعات، ${n} منها مغطاة بالغيوم`), (plain ? '' : back(340, 170)) + grid(n, 50, 20, 240, 130), plain);
  }
  window.CH8ART = { PH, src, nameOf, photo, card, grid };
  window.CH_DIAGRAMS = Object.assign(window.CH_DIAGRAMS || {}, { ch8Sky, ch8Refs, ch8Tools, ch8Dust, ch8Grid });
})();
