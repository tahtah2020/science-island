/* Science Island · Grade 6 · drawings made in code (SVG) for Chapter 6 "Transportation of Water in Plants".
   Shared by the chapter's game (watertrek.html) and the pictures of the question pages (quiz.html). Self-contained: common.js loads only this one art file.
   Nothing here is copied from the school book: every object is drawn with simple shapes. The pictures never show the answer (no droplets in the bags, no pores on the leaf).
   window.G6WATER = the drawings; window.CH_DIAGRAMS gets the pictures:
     bagsAB (tap: bagA | bagB) · leafSurface (tap: wUpper | wLower) · waterPath (tap: wRoots | wStems | wLeaves; pic.wilt draws a drooping plant) · photo (a generated picture, pic.img + pic.label) */
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

  /* a water drop with a small friendly face. Origin: the middle of its body. k = scale */
  function drop(k = 1, mood = 'happy') {
    const mouth = mood === 'sad' ? 'M-5 9Q0 4 5 9' : 'M-5 6Q0 12 5 6';
    return `<g transform="scale(${k})"><path d="M0 -24C8 -12 18 -4 18 8C18 19 10 26 0 26C-10 26 -18 19 -18 8C-18 -4 -8 -12 0 -24Z" fill="#59b7ea" stroke="#2f86bd" stroke-width="2.4" stroke-linejoin="round"/>
      <path d="M-9 4C-9 -2 -6 -6 -3 -9" stroke="#fff" stroke-width="3" stroke-linecap="round" fill="none" opacity=".7"/>
      <circle cx="-6" cy="3" r="2.4" fill="#1d2c68"/><circle cx="6" cy="3" r="2.4" fill="#1d2c68"/><path d="${mouth}" stroke="#1d2c68" stroke-width="2" stroke-linecap="round" fill="none"/></g>`;
  }
  /* a plant in the soil, cut open so that the roots show. Origin: the middle of the soil surface; roots reach y = +86, the top of the leaves is about y = -112.
     o.wilt = leaves droop and the stem bends; o.red = { roots, stem, leaves } paints that part red (coloured water) */
  function rootedPlant(o = {}) {
    const red = o.red || {}, wilt = !!o.wilt, ROOT = red.roots ? '#d6453d' : '#a8774a', STEM = red.stem ? '#d6453d' : GREEN_D, LF = red.leaves ? '#e07a5f' : (wilt ? '#a9bf74' : GREEN);
    const soil = `<rect x="-128" y="0" width="256" height="98" rx="10" fill="#b98b5e"/><rect x="-128" y="0" width="256" height="9" rx="4" fill="#8a6338"/><rect x="-128" y="-2" width="256" height="6" fill="#7bbf5e"/>`;
    const roots = `<g fill="none" stroke="${ROOT}" stroke-width="4" stroke-linecap="round"><path d="M0 4V46M0 22C-16 30 -30 44 -42 74M0 22C14 32 28 46 40 76M0 40C-8 56 -12 70 -14 86M0 40C8 56 14 70 18 88M-22 38C-40 40 -62 52 -78 66M24 40C42 42 62 50 80 62"/></g>`;
    const lean = wilt ? 16 : 0;
    const stem = `<path d="M0 4C0 -24 ${lean * .4} -46 ${lean} -64" fill="none" stroke="${STEM}" stroke-width="6" stroke-linecap="round"/>`;
    const spots = wilt ? [[-120, .95], [-92, 1], [-60, .9], [60, .9], [92, 1], [120, .95]] : [[-78, .95], [-50, 1], [-20, 1.05], [20, 1.05], [50, 1], [78, .95]];
    let leaves = '';
    spots.forEach(([r, k], i) => { leaves += at(lean, -60, k, leaf({ w: 28, h: 40, stalk: 6, color: LF, vein: red.leaves ? '#a8362f' : undefined }), r + (wilt ? (r < 0 ? 8 : -8) : 0)); });
    return `${soil}${roots}${stem}${leaves}`;
  }
  /* a leaf seen from the side, as a thick layered slab with a short stalk on the left. Origin: the middle of the slab.
     No pores are drawn unless o.stomata (they would give the answer) */
  function leafSlab(o = {}) {
    const stoma = o.stomata ? [-100, -64, -28, 8, 44, 80, 116].map(x => `<ellipse cx="${x}" cy="19" rx="7" ry="4" fill="#1d4a28" stroke="#0f2f19" stroke-width="1.4"/><ellipse cx="${x}" cy="19" rx="2.2" ry="1.4" fill="#d9f0ff"/>`).join('') : '';
    const cells = [-100, -64, -28, 8, 44, 80, 116].map(x => `<ellipse cx="${x}" cy="0" rx="14" ry="6.5" fill="#cfe8a2" stroke="#8fbc62" stroke-width="1.4"/>`).join('');
    return `<path d="M-142 0H-170" stroke="${GREEN_D}" stroke-width="6" stroke-linecap="round"/>
      <path d="M-142 0Q-142 -24 -112 -24H110Q156 -24 168 0Q156 24 110 24H-112Q-142 24 -142 0Z" fill="#7fc474" stroke="${GREEN_D}" stroke-width="3" stroke-linejoin="round"/>
      <path d="M-124 -15H112Q142 -15 152 -3" fill="none" stroke="#2f6f3a" stroke-width="9" stroke-linecap="round"/>
      <path d="M-124 15H112Q142 15 152 3" fill="none" stroke="#a9dc8f" stroke-width="7" stroke-linecap="round" opacity=".9"/>${cells}${stoma}`;
  }
  /* water vapor: three wavy lines. Origin: the bottom middle */
  const vapor = (n = 3) => Array.from({ length: n }, (_, i) => `<path d="M${-16 + i * 16} 0c-7 -9 7 -16 0 -27" fill="none" stroke="#6aa9cc" stroke-width="3" stroke-linecap="round" opacity=".85"/>`).join('');
  /* a flask. Origin: the middle of its bottom. liquid = the colour of the water */
  function flask(o = {}) {
    const lq = o.liquid || '#d6453d';
    return `<path d="M-14 -96H14V-62L44 -8Q52 4 38 4H-38Q-52 4 -44 -8L-14 -62Z" fill="rgba(210,236,250,.55)" stroke="#6aa9cc" stroke-width="3" stroke-linejoin="round"/>
      <path d="M-35 -20L-26 -34H26L35 -20L42 -6Q46 2 36 2H-36Q-46 2 -42 -6Z" fill="${lq}" opacity=".9"/><path d="M-20 -96H20" stroke="#6aa9cc" stroke-width="4" stroke-linecap="round"/>`;
  }

  /* ================= pictures for the question pages (340 wide) ================= */
  const hot = (id, label, inner) => `<g class="hot" data-id="${id}" role="button" tabindex="0" aria-label="${label}">${inner}</g>`;
  const svgOpen = (h, label) => `<svg class="diagram" viewBox="0 0 340 ${h}" role="img" aria-label="${label}">`;
  const frame = (h, fill) => `<rect width="340" height="${h}" rx="14" fill="${fill}"/>`;
  const ringRect = (x, y, w, h) => `<rect class="ring" x="${x}" y="${y}" width="${w}" height="${h}" rx="14"/>`;
  const E = s => s;

  /* two potted plants in bags (A with leaves, B with none); no drops drawn. Tap: bagA | bagB */
  function bagsAB(q) {
    const isTap = !!(q && q.type === 'tap');
    const bare = `<path d="M0 0V-92" stroke="${GREEN_D}" stroke-width="5" stroke-linecap="round"/>${pot({ w: 54 })}`;
    return `${svgOpen(214, E('Two potted plants in the sun, each covered by a clear plastic bag tied at the bottom: plant A has many leaves and plant B has a bare stem with no leaves'))}${frame(214, '#d9eefb')}
      ${at(170, 34, .8, sun(18))}${ground(340, 178, 36)}
      ${at(92, 168, 1, bush() + bagOver())}${at(248, 168, 1, bare + bagOver())}
      ${text(92, 208, 'A', 17)}${text(248, 208, 'B', 17)}
      ${isTap ? hot('bagA', E('The bag over plant A'), ringRect(26, 24, 132, 158)) + hot('bagB', E('The bag over plant B'), ringRect(182, 24, 132, 158)) : ''}</svg>`;
  }
  /* a leaf seen from the side with the sun above and the ground below. Tap: wUpper | wLower */
  function leafSurface(q) {
    const isTap = !!(q && q.type === 'tap');
    return `${svgOpen(210, E('A leaf seen from the side: the sun shines above it and the ground is below it'))}${frame(210, '#d9eefb')}
      ${at(290, 36, .9, sun(17))}${ground(340, 176, 34)}${at(176, 112, .92, leafSlab())}
      ${isTap ? hot('wUpper', E('The upper surface of the leaf'), ringRect(26, 62, 288, 46)) + hot('wLower', E('The lower surface of the leaf'), ringRect(26, 112, 288, 46)) : ''}</svg>`;
  }
  /* a plant cut open in the soil. Tap: wRoots | wStems | wLeaves. pic.wilt = drooping */
  function waterPath(q) {
    const isTap = !!(q && q.type === 'tap'), wilt = !!(q && q.pic && q.pic.wilt);
    return `${svgOpen(240, E('A plant in the soil, cut open so that its roots, stem and leaves can be seen'))}${frame(240, '#eef6fb')}
      ${at(170, 126, 1, rootedPlant({ wilt }))}
      ${isTap ? hot('wLeaves', E('The leaves'), ringRect(66, 6, 208, 62)) + hot('wStems', E('The stem'), ringRect(146, 70, 48, 56)) + hot('wRoots', E('The roots'), ringRect(80, 128, 180, 100)) : ''}</svg>`;
  }


  /* a generated picture above a question: q.pic = { img: 'g6_bag_sun', label: '…' } (science/assets/<img>.webp). The label describes the scene and never the answer */
  function photo(q) {
    const pc = (q && q.pic) || {};
    return `${svgOpen(300, E(pc.label || 'A picture'))}<defs><clipPath id="g6phClip"><rect width="340" height="300" rx="14"/></clipPath></defs><g clip-path="url(#g6phClip)"><rect width="340" height="300" fill="#eef6fb"/><image href="science/assets/${pc.img}.webp" x="20" y="0" width="300" height="300" preserveAspectRatio="xMidYMid slice"/></g></svg>`;
  }


  window.G6WATER = { at, text, sun, moon, leaf, pot, bush, bagOver, ground, drop, rootedPlant, leafSlab, vapor, flask, GREEN, GREEN_D, PALE };
  window.CH_DIAGRAMS = Object.assign(window.CH_DIAGRAMS || {}, { bagsAB, leafSurface, waterPath, photo });
})();
