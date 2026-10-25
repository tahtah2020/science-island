/* Science Island · Grade 5 Chapter 7 "Animal Growth and Reproduction" · pictures.
   Every animal picture here is one of the owner's pictures (sheet sent 25 Oct 2026, cropped without its caption, science/assets/ch7_*.jpg):
     ch7_catkit (mother cat with kittens), ch7_kitten, ch7_dog, ch7_camel, ch7_gazelle, ch7_fox, ch7_fish, ch7_fisheggs (eggs hatching),
     ch7_chicken (hen with chicks), ch7_frog, ch7_eagle, ch7_coral (coral reef).
   Shared by the game (nursery.html), the tap pictures of the question pages (quiz.html) and the map (science/tools/make_ch7_map.js).
   window.CH_DIAGRAMS adds: ch7Kittens, ch7Six, ch7Hatch, ch7Reserves. Each takes q and honours q.pic.plain (inner markup only, for games).
   Screen-reader names say what is in the picture, never the answer. */
(function () {
  'use strict';
  const T = (en, ar) => (window.SI ? window.SI.T(en, ar) : en);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const f1 = n => (Math.round(n * 10) / 10).toString();

  /* id → photo file and what it shows (for screen readers) */
  const PH = {
    c7cat: ['catkit', ['A grown-up cat lying down with small kittens', 'قطة كبيرة نائمة ومعها قطط صغيرة']],
    c7kitten: ['kitten', ['A small kitten sitting', 'قطة صغيرة جالسة']],
    c7dog: ['dog', ['A brown and white dog', 'كلب بني وأبيض']],
    c7camel: ['camel', ['A camel in the desert', 'جمل في الصحراء']],
    c7gazelle: ['gazelle', ['A gazelle with long horns', 'غزال بقرنين طويلين']],
    c7fox: ['fox', ['A fox with very big ears', 'ثعلب بأذنين كبيرتين جدًّا']],
    c7fish: ['fish', ['A fish swimming among water plants', 'سمكة تسبح بين نباتات الماء']],
    c7eggs: ['fisheggs', ['Small round clear things on sand under water', 'أشياء صغيرة مستديرة شفافة على الرمل تحت الماء']],
    c7chicken: ['chicken', ['A hen with small yellow chicks', 'دجاجة ومعها كتاكيت صفراء صغيرة']],
    c7frog: ['frog', ['A green frog', 'ضفدع أخضر']],
    c7eagle: ['eagle', ['A big bird flying', 'طائر كبير يطير']],
    c7coral: ['coral', ['Colourful corals and small fish under the sea', 'شعاب مرجانية ملونة وأسماك صغيرة تحت البحر']]
  };
  const src = id => `science/assets/ch7_${PH[id][0]}.jpg`;
  const nameOf = id => T(PH[id][1][0], PH[id][1][1]);
  let uid = 0;
  /* one round photo badge centred at (cx, cy) */
  function photo(id, cx, cy, r) {
    const k = 'c7p' + (++uid);
    return `<clipPath id="${k}"><circle cx="${f1(cx)}" cy="${f1(cy)}" r="${f1(r)}"/></clipPath><circle cx="${f1(cx)}" cy="${f1(cy)}" r="${f1(r + 4)}" fill="#fff"/>`
      + `<image href="${src(id)}" x="${f1(cx - r)}" y="${f1(cy - r)}" width="${f1(r * 2)}" height="${f1(r * 2)}" preserveAspectRatio="xMidYMid slice" clip-path="url(#${k})"/>`
      + `<circle cx="${f1(cx)}" cy="${f1(cy)}" r="${f1(r)}" fill="none" stroke="#e3cf9b" stroke-width="1.6"/>`;
  }
  /* one rounded-square photo (for game scenes) */
  function card(id, x, y, w, h, rx = 16) {
    const k = 'c7c' + (++uid);
    return `<clipPath id="${k}"><rect x="${f1(x)}" y="${f1(y)}" width="${f1(w)}" height="${f1(h)}" rx="${rx}"/></clipPath><rect x="${f1(x - 4)}" y="${f1(y - 4)}" width="${f1(w + 8)}" height="${f1(h + 8)}" rx="${rx + 3}" fill="#fff"/>`
      + `<image href="${src(id)}" x="${f1(x)}" y="${f1(y)}" width="${f1(w)}" height="${f1(h)}" preserveAspectRatio="xMidYMid slice" clip-path="url(#${k})"/>`;
  }
  const hot = (id, inner) => `<g class="hot" data-id="${id}" role="button" tabindex="0" aria-label="${esc(nameOf(id))}">${inner}</g>`;
  const ring = (cx, cy, r) => `<circle class="ring" cx="${f1(cx)}" cy="${f1(cy)}" r="${f1(r)}"/>`;
  const wrap = (w, h, label, inner, plain) => (plain ? inner : `<svg class="diagram" viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(label)}">${inner}</svg>`);
  const back = (w, h) => `<rect width="${w}" height="${h}" rx="14" fill="#fff8ea"/>`;

  /* a set of round photos laid out in a grid; returns a diagram function */
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
  const PAIR = [[90, 95], [250, 95]];
  const SIX = [[62, 66], [170, 66], [278, 66], [62, 184], [170, 184], [278, 184]];

  const ch7Kittens = makeSet(['c7cat', 'c7kitten'], 340, 190, PAIR, 76, () => T('Two pictures of cats', 'صورتان لقطط'));
  const ch7Six = makeSet(['c7dog', 'c7camel', 'c7gazelle', 'c7fox', 'c7chicken', 'c7fish'], 340, 250, SIX, 48, () => T('Six animals', 'ستة حيوانات'));
  const ch7Hatch = makeSet(['c7fish', 'c7eggs'], 340, 190, PAIR, 76, () => T('Two pictures under the water', 'صورتان تحت الماء'));
  const ch7Reserves = makeSet(['c7coral', 'c7gazelle'], 340, 190, PAIR, 76, () => T('Two places where animals live', 'مكانان تعيش فيهما الحيوانات'));

  window.CH7ART = { PH, src, nameOf, photo, card };
  window.CH_DIAGRAMS = Object.assign(window.CH_DIAGRAMS || {}, { ch7Kittens, ch7Six, ch7Hatch, ch7Reserves });
})();
