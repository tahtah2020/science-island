/* Science Island · Grade 6 · drawings made in code (SVG) for Chapter 5 "Photosynthesis".
   Shared by the chapter's game (photolab.html) and the pictures of the question pages (quiz.html).
   Nothing here is copied from the school book: every object is drawn with simple shapes.
   Every drawing is a function that returns SVG markup around its own origin (see the note above each one).
   window.G6PLANT = the drawings; window.CH_DIAGRAMS gets the pictures:
     leafABC (tap: leafA | leafB | leafC; pic.stage 'ready' | 'day') · dayNight (tap: dayTime | nightTime; pic.only 'day' | 'night') · bagPlant (picture only; pic.sun) · photo (a generated picture, pic.img + pic.label)
   The pictures never show the answer: no gas arrows, no blue leaves, no starch labels. */
(function () {
  'use strict';
  const T = (en, ar) => (window.SI ? window.SI.T(en, ar == null ? en : ar) : en);
  const f1 = n => (Math.round(n * 10) / 10).toString();
  const at = (x, y, k, inner, rot) => `<g transform="translate(${f1(x)} ${f1(y)})${rot ? ` rotate(${rot})` : ''}${k != null && k !== 1 ? ` scale(${k})` : ''}">${inner}</g>`;
  const GREEN = '#58a85a', GREEN_D = '#3d8244', PALE = '#e9efc6', BLUE_D = '#1d2c68', TAN = '#e2cf9b';
  const FONT = 'Nunito,Cairo,Arial,sans-serif';
  const text = (x, y, s, size = 14, fill = '#1f3d57', anchor = 'middle') => `<text x="${f1(x)}" y="${f1(y)}" text-anchor="${anchor}" font-family="${FONT}" font-size="${size}" font-weight="900" fill="${fill}" direction="ltr">${s}</text>`;

  /* the sun. Origin: its middle. r = radius of the disc */
  function sun(r = 20) {
    let rays = '';
    for (let i = 0; i < 12; i++) { const a = i * Math.PI / 6; rays += `<path d="M${f1(Math.cos(a) * (r + 5))} ${f1(Math.sin(a) * (r + 5))}L${f1(Math.cos(a) * (r + 13))} ${f1(Math.sin(a) * (r + 13))}" stroke="#f2b134" stroke-width="3.2" stroke-linecap="round"/>`; }
    return `${rays}<circle r="${r}" fill="#ffd24a" stroke="#f2b134" stroke-width="2.4"/><circle cx="${f1(-r * .3)}" cy="${f1(-r * .3)}" r="${f1(r * .3)}" fill="#fff3b0" opacity=".7"/>`;
  }
  /* a crescent moon and two stars. Origin: the middle of the moon */
  function moon(r = 18) {
    return `<path d="M${f1(r * .2)} ${f1(-r)}A${r} ${r} 0 1 0 ${f1(r * .2)} ${r}A${f1(r * .75)} ${f1(r * .75)} 0 0 1 ${f1(r * .2)} ${f1(-r)}Z" fill="#fff4c2" stroke="#e6d38a" stroke-width="1.6"/>
      <path d="M${f1(r * 1.6)} ${f1(-r * .6)}l2 5l5 2l-5 2l-2 5l-2 -5l-5 -2l5 -2z" fill="#fff4c2"/><path d="M${f1(-r * 1.5)} ${f1(r * .7)}l1.5 3.6l3.6 1.5l-3.6 1.5l-1.5 3.6l-1.5 -3.6l-3.6 -1.5l3.6 -1.5z" fill="#fff4c2"/>`;
  }
  /* a round green leaf, like the ones of the plant in the experiment. Origin: where its stalk joins the stem (the leaf spreads upwards).
     o.color = the colour of the blade; o.vein = the colour of the veins; o.stalk = the length of the stalk */
  function leaf(o = {}) {
    const w = o.w || 34, h = o.h || 40, c = o.color || GREEN, v = o.vein || GREEN_D, s = o.stalk == null ? 10 : o.stalk;
    return `<path d="M0 0V${-s}" stroke="${GREEN_D}" stroke-width="3" stroke-linecap="round"/>
      <path d="M0 ${-s}C${-w} ${-s - h * .1} ${-w * 1.05} ${-s - h * .75} ${f1(-w * .35)} ${-s - h}Q0 ${-s - h * .82} ${f1(w * .35)} ${-s - h}C${f1(w * 1.05)} ${-s - h * .75} ${w} ${-s - h * .1} 0 ${-s}Z" fill="${c}" stroke="${v}" stroke-width="1.8" stroke-linejoin="round"/>
      <path d="M0 ${-s}V${-s - h * .78}M0 ${-s - h * .3}L${f1(-w * .55)} ${-s - h * .5}M0 ${-s - h * .3}L${f1(w * .55)} ${-s - h * .5}M0 ${-s - h * .55}L${f1(-w * .4)} ${-s - h * .75}M0 ${-s - h * .55}L${f1(w * .4)} ${-s - h * .75}" fill="none" stroke="${v}" stroke-width="1.4" stroke-linecap="round" opacity=".75"/>`;
  }
  /* a leaf wrapped in aluminum foil. Origin: like leaf() */
  function foilLeaf(o = {}) {
    const w = (o.w || 34) + 4, h = (o.h || 40) + 4, s = o.stalk == null ? 10 : o.stalk;
    return `<path d="M0 0V${-s}" stroke="${GREEN_D}" stroke-width="3" stroke-linecap="round"/>
      <path d="M0 ${-s + 2}C${-w} ${-s - h * .1} ${-w * 1.1} ${-s - h * .8} ${f1(-w * .3)} ${-s - h - 2}Q0 ${-s - h * .8} ${f1(w * .3)} ${-s - h - 2}C${f1(w * 1.1)} ${-s - h * .8} ${w} ${-s - h * .1} 0 ${-s + 2}Z" fill="#cfd5db" stroke="#8d97a1" stroke-width="2" stroke-linejoin="round"/>
      <path d="M${f1(-w * .5)} ${-s - h * .25}l${f1(w * .35)} ${-h * .22}M${f1(w * .1)} ${-s - h * .15}l${f1(w * .4)} ${-h * .25}M${f1(-w * .3)} ${-s - h * .62}l${f1(w * .3)} ${-h * .15}" stroke="#fff" stroke-width="2.4" stroke-linecap="round" opacity=".85"/>
      <path d="M${f1(-w * .6)} ${-s - h * .5}l${f1(w * .3)} ${-h * .12}" stroke="#a9b2bb" stroke-width="1.6" stroke-linecap="round"/>`;
  }
  /* a flower pot. Origin: the middle of its top edge */
  function pot(o = {}) {
    const w = o.w || 56;
    return `<path d="M${-w / 2} 0h${w}l${f1(-w * .1)} ${w * .62}h${f1(-w * .8)}z" fill="#d98a5b" stroke="#b86a3e" stroke-width="2" stroke-linejoin="round"/><rect x="${f1(-w / 2 - 3)}" y="-4" width="${w + 6}" height="9" rx="3" fill="#e69a69" stroke="#b86a3e" stroke-width="2"/><path d="M${f1(-w * .36)} 14v${w * .2}" stroke="#f3b78f" stroke-width="3" stroke-linecap="round" opacity=".7"/>`;
  }
  /* the experiment plant: a pot with a stem that carries three leaves (left A, middle B, right C).
     o.state = { A, B, C }: 'green' | 'foil'. o.labels = draw the letters. Origin: the middle of the top of the pot */
  function plantABC(o = {}) {
    const st = o.state || { A: 'foil', B: 'foil', C: 'foil' };
    const spots = { A: [-48, -62, -24], B: [0, -86, 0], C: [48, -62, 24] };
    let body = `<path d="M0 0V-60" stroke="${GREEN_D}" stroke-width="5" stroke-linecap="round"/><path d="M0 -30L-30 -56M0 -30L30 -56" stroke="${GREEN_D}" stroke-width="3.6" stroke-linecap="round" fill="none"/>`;
    ['A', 'B', 'C'].forEach(k => {
      const [x, y, r] = spots[k], big = { w: 36, h: 42, stalk: 6 };
      body += at(x, y + 22, 1, st[k] === 'foil' ? foilLeaf(big) : leaf(big), r);
      if (o.labels !== false) body += text(x, y - 36 + (k === 'B' ? -4 : 0), k, 16, '#1f3d57');
    });
    return `${body}${pot({})}`;
  }
  /* a bushy plant: a stem and eight leaves. Origin: the middle of the top of its pot. k = 1 is about 120 tall */
  function bush(o = {}) {
    const L = [[-6, -34, -62, .95], [6, -42, 58, .95], [-4, -58, -42, 1], [4, -66, 40, 1], [0, -84, -12, 1.05], [0, -96, 14, .9], [-3, -76, -80, .8], [3, -80, 82, .8]];
    let s = `<path d="M0 0V-100" stroke="${GREEN_D}" stroke-width="5" stroke-linecap="round"/>`;
    L.forEach(([x, y, r, k]) => { s += at(x, y, k, leaf({ w: 22, h: 28, stalk: 6, color: o.color }), r); });
    return `${s}${pot({ w: 54 })}`;
  }
  /* a clear plastic bag over the plant, tied at the base with a twist tie. Origin: like bush() */
  function bagOver() {
    return `<path d="M-48 8C-66 -30 -64 -128 -26 -138C-8 -144 8 -144 26 -138C64 -128 66 -30 48 8Z" fill="rgba(200,236,252,.38)" stroke="#6aa9cc" stroke-width="2.4" stroke-linejoin="round"/>
      <path d="M-36 -110C-40 -80 -38 -50 -34 -20" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".7" fill="none"/>
      <path d="M-30 6C-14 12 14 12 30 6" fill="none" stroke="#e2603f" stroke-width="4" stroke-linecap="round"/>`;
  }
  const ground = (w, y, h) => `<rect y="${y}" width="${w}" height="${h}" fill="#d9b27c"/><rect y="${y}" width="${w}" height="5" fill="#a8834f" opacity=".6"/>`;

  /* ---- the steps of the starch test (game): Origin: the middle of the bottom of the glass ---- */
  function beaker(o = {}) {
    const w = o.w || 70, h = o.h || 80, lvl = o.level == null ? .62 : o.level, liq = o.liquid || '#bfe3f2';
    return `<rect x="${-w / 2 + 3}" y="${f1(-h * lvl)}" width="${w - 6}" height="${f1(h * lvl - 2)}" fill="${liq}" opacity=".85"/>
      <path d="M${-w / 2} ${-h}V-4a6 6 0 0 0 6 6h${w - 12}a6 6 0 0 0 6 -6V${-h}" fill="none" stroke="#6aa9cc" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M${-w / 2 - 4} ${-h}h${w + 8}" stroke="#6aa9cc" stroke-width="2.6" stroke-linecap="round"/>
      <path d="M${f1(-w / 2 + 8)} ${-h + 10}V-14" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".7"/>`;
  }
  /* steam above hot water */
  const steam = (n = 3) => Array.from({ length: n }, (_, i) => `<path d="M${-14 + i * 14} 0c-6 -8 6 -14 0 -24" fill="none" stroke="#9aa8b3" stroke-width="2.6" stroke-linecap="round" opacity=".7"/>`).join('');
  /* the petri dish with a leaf in iodine. Origin: the middle of its bottom. color = the colour of the leaf */
  function dish(o = {}) {
    return `<ellipse cx="0" cy="-8" rx="62" ry="15" fill="#e8a03a" stroke="#6aa9cc" stroke-width="2.6"/><ellipse cx="0" cy="-10" rx="56" ry="11" fill="#f3b24d" opacity=".9"/>
      <path d="M-34 -9C-20 -22 22 -22 34 -9C22 0 -20 0 -34 -9Z" fill="${o.color || PALE}" stroke="#a89f77" stroke-width="1.4"/><path d="M-30 -9H30" stroke="#a89f77" stroke-width="1.2" opacity=".6"/>`;
  }
  /* a leaf lying in a glass: the colour tells the step */
  const leafIn = (color, x = 0, y = -30) => `<path d="M${x - 17} ${y}C${x - 8} ${y - 20} ${x + 8} ${y - 20} ${x + 17} ${y}C${x + 8} ${y + 14} ${x - 8} ${y + 14} ${x - 17} ${y}Z" fill="${color}" stroke="#7d8a6a" stroke-width="1.4"/>`;

  /* ================= pictures for the question pages (340 wide) ================= */
  const hot = (id, label, inner) => `<g class="hot" data-id="${id}" role="button" tabindex="0" aria-label="${label}">${inner}</g>`;
  const svgOpen = (h, label) => `<svg class="diagram" viewBox="0 0 340 ${h}" role="img" aria-label="${label}">`;
  const frame = (h, fill) => `<rect width="340" height="${h}" rx="14" fill="${fill}"/>`;
  const ringRect = (x, y, w, h) => `<rect class="ring" x="${x}" y="${y}" width="${w}" height="${h}" rx="14"/>`;
  const E = s => s;

  /* three leaves A, B, C on one plant. pic.stage: 'ready' = all three wrapped in foil (the day before); 'day' (default) = B is uncovered and in the sun */
  function leafABC(q) {
    const stage = (q && q.pic && q.pic.stage) || 'day', ready = stage === 'ready', isTap = !!(q && q.type === 'tap');
    const state = ready ? { A: 'foil', B: 'foil', C: 'foil' } : { A: 'foil', B: 'green', C: 'foil' };
    const lab = ready ? E('A plant with three leaves, A, B and C, each wrapped in aluminum foil') : E('A plant with three leaves, A, B and C. A and C are wrapped in aluminum foil, B is uncovered and the sun shines on it');
    return `${svgOpen(200, lab)}${frame(200, ready ? '#e8eef6' : '#eef6fb')}
      ${ready ? at(292, 34, .6, moon(16)) : at(290, 36, .9, sun(18))}${ground(340, 178, 22)}
      ${at(170, 146, 1, plantABC({ state }))}
      ${isTap ? hot('leafA', E('Leaf A'), ringRect(76, 64, 90, 84)) + hot('leafB', E('Leaf B'), ringRect(125, 16, 90, 86)) + hot('leafC', E('Leaf C'), ringRect(174, 64, 90, 84)) : ''}</svg>`;
  }
  /* day and night side by side (pic.only = 'day' or 'night' draws one wide panel). No gas arrows: they would give the answers away */
  function dayNight(q) {
    const only = q && q.pic && q.pic.only;
    const day = (x0, w) => `<rect x="${x0}" width="${w}" height="200" fill="#d9eefb"/>${at(x0 + w * .22, 36, .95, sun(17))}${at(x0 + w / 2, 142, 1, bush())}`;
    const night = (x0, w) => `<rect x="${x0}" width="${w}" height="200" fill="#26325c"/>${at(x0 + w * .72, 38, .95, moon(16))}${at(x0 + w / 2, 142, 1, bush({ color: '#3f7a4a' }))}<circle cx="${x0 + w * .15}" cy="30" r="1.6" fill="#fff"/><circle cx="${x0 + w * .38}" cy="52" r="1.4" fill="#fff"/><circle cx="${x0 + w * .86}" cy="78" r="1.6" fill="#fff"/>`;
    const lab = only === 'night' ? E('A plant outside at night, with the moon in the sky') : only === 'day' ? E('A plant outside in the daytime, with the sun in the sky') : E('Two pictures of the same plant: on the left it is daytime with the sun in the sky, on the right it is night with the moon in the sky');
    if (only) {
      const body = only === 'night' ? night(0, 340) : day(0, 340);
      return `${svgOpen(200, lab)}<defs><clipPath id="g6dnClip"><rect width="340" height="200" rx="14"/></clipPath></defs><g clip-path="url(#g6dnClip)">${body}${ground(340, 172, 28).replace('#d9b27c', only === 'night' ? '#6b5636' : '#d9b27c')}</g></svg>`;
    }
    return `${svgOpen(200, lab)}<defs><clipPath id="g6dnClip"><rect width="340" height="200" rx="14"/></clipPath></defs><g clip-path="url(#g6dnClip)">${day(0, 170)}${night(170, 170)}${ground(170, 172, 28)}<rect x="170" y="172" width="170" height="28" fill="#6b5636"/><path d="M170 0V200" stroke="#fff" stroke-width="3"/></g>
      ${q && q.type === 'tap' ? hot('dayTime', E('The picture with the sun'), ringRect(5, 5, 160, 190)) + hot('nightTime', E('The picture with the moon'), ringRect(175, 5, 160, 190)) : ''}</svg>`;
  }
  /* a plant under a clear bag in the sun (no gas shown) */
  function bagPlant(q) {
    const sunny = !q || !q.pic || q.pic.sun !== false;
    return `${svgOpen(210, E('A plant in a pot covered with a clear plastic bag that is tied at the bottom, standing outside in the sun'))}${frame(210, sunny ? '#d9eefb' : '#26325c')}
      ${sunny ? at(278, 38, 1, sun(19)) : at(278, 40, 1, moon(17))}${ground(340, 176, 34)}${at(170, 146, 1, bush() + bagOver())}</svg>`;
  }

  /* a generated picture above a question: q.pic = { img: 'g6_bag_sun', label: '…' } (science/assets/<img>.webp). The label describes the scene and never the answer */
  function photo(q) {
    const pc = (q && q.pic) || {};
    return `${svgOpen(300, E(pc.label || 'A picture'))}<defs><clipPath id="g6phClip"><rect width="340" height="300" rx="14"/></clipPath></defs><g clip-path="url(#g6phClip)"><rect width="340" height="300" fill="#eef6fb"/><image href="science/assets/${pc.img}.webp" x="20" y="0" width="300" height="300" preserveAspectRatio="xMidYMid slice"/></g></svg>`;
  }

  window.G6PLANT = { at, text, sun, moon, leaf, foilLeaf, pot, plantABC, bush, bagOver, beaker, steam, dish, leafIn, ground, GREEN, PALE, BLUE_D, TAN };
  window.CH_DIAGRAMS = Object.assign(window.CH_DIAGRAMS || {}, { leafABC, dayNight, bagPlant, photo });
})();
