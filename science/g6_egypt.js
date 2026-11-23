/* Science Island · Grade 6 · drawings made in code (SVG) for Chapter 8 "Food Chains in Egypt".
   Shared by the chapter's game (egyptchain.html) and the pictures of the question pages (quiz.html). Self-contained: common.js loads only this one art file.
   The organisms are generated pictures (science/assets/g6_i_<name>.webp, transparent); the arrows, the frame and the tap targets are drawn here.
   window.G6EGYPT = the helpers; window.CH_DIAGRAMS gets: egyptRow (tap: egAlgae | egTilapia | egPerch | egCroc | egSeeds | egJerboa | egViper | egFennec | egPapyrus | egHopper | egFrog | egHeron;
   pic.chain = 'nile' | 'desert' | 'papyrus' or a list of names) and photo. */
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

  /* a generated organism picture. Origin: the middle of the picture. name = grass | grasshopper | frog | snake | owl | eagle | rabbit | lion */
  const icon = (name, size = 50) => `<image href="science/assets/g6_i_${name}.webp" x="${-size / 2}" y="${-size / 2}" width="${size}" height="${size}"/>`;
  /* a red arrow pointing right. Origin: its middle. len = length */
  const arrow = (len = 22, color = '#d6453d') => `<path d="M${-len / 2} 0H${len / 2 - 4}" stroke="${color}" stroke-width="4" stroke-linecap="round"/><path d="M${len / 2 - 9} -7L${len / 2} 0L${len / 2 - 9} 7Z" fill="${color}" stroke="${color}" stroke-width="1.5" stroke-linejoin="round"/>`;
  const TAPID = { algae: 'egAlgae', tilapia: 'egTilapia', perch: 'egPerch', crocodile: 'egCroc', seeds: 'egSeeds', jerboa: 'egJerboa', viper: 'egViper', fennec: 'egFennec', papyrus: 'egPapyrus', grasshopper: 'egHopper', frog: 'egFrog', heron: 'egHeron', vulture: 'egVulture', shrimp: 'egShrimp', shrub: 'egShrub' };
  const NAME = { algae: 'The algae', tilapia: 'The Nile tilapia', perch: 'The Nile perch', crocodile: 'The Nile crocodile', seeds: 'The shrub seeds', jerboa: 'The jerboa', viper: 'The viper', fennec: 'The fennec fox', papyrus: 'The papyrus', grasshopper: 'The grasshopper', frog: 'The frog', heron: 'The heron bird', vulture: 'The Egyptian vulture', shrimp: 'The shrimp', shrub: 'The desert shrub' };
  const CHAINS = { nile: ['algae', 'tilapia', 'perch', 'crocodile'], desert: ['seeds', 'jerboa', 'viper', 'fennec'], papyrus: ['papyrus', 'grasshopper', 'frog', 'heron'] };
  const CHAIN = CHAINS.nile;

  /* ================= pictures for the question pages (340 wide) ================= */
  const hot = (id, label, inner) => `<g class="hot" data-id="${id}" role="button" tabindex="0" aria-label="${label}">${inner}</g>`;
  const svgOpen = (h, label) => `<svg class="diagram" viewBox="0 0 340 ${h}" role="img" aria-label="${label}">`;
  const frame = (h, fill) => `<rect width="340" height="${h}" rx="14" fill="${fill}"/>`;
  const ringRect = (x, y, w, h) => `<rect class="ring" x="${x}" y="${y}" width="${w}" height="${h}" rx="14"/>`;
  const E = s => s;

  /* a food chain as a row of organisms joined by arrows (eaten -> eater). Tap: a chain organism */
  function egyptRow(q) {
    const isTap = !!(q && q.type === 'tap'), chain = Array.isArray(q && q.pic && q.pic.chain) ? q.pic.chain : (CHAINS[(q && q.pic && q.pic.chain) || 'nile'] || CHAIN), n = chain.length;
    const step = (340 - 24) / n, size = Math.min(54, step - 18);
    let s = `${svgOpen(128, E('A food chain: ' + chain.join(', then ') + ', joined by arrows that point from the one that is eaten to the one that eats it'))}${frame(128, (q && q.pic && q.pic.chain === 'nile' || !(q && q.pic && q.pic.chain)) ? '#e1f2fa' : (q.pic.chain === 'desert' ? '#f8ecd0' : '#e6f4dc'))}`;
    chain.forEach((nm, i) => {
      const cx = 12 + step * (i + .5);
      s += at(cx, 64, 1, icon(nm, size));
      if (i < n - 1) s += at(cx + step / 2, 64, 1, arrow(Math.max(14, step - size - 2)));
      if (isTap) s += hot(TAPID[nm], E(NAME[nm]), ringRect(cx - size / 2 - 4, 64 - size / 2 - 4, size + 8, size + 8));
    });
    return s + '</svg>';
  }






  /* a generated picture above a question: q.pic = { img: 'g6_bag_sun', label: '…' } (science/assets/<img>.webp). The label describes the scene and never the answer */
  function photo(q) {
    const pc = (q && q.pic) || {};
    return `${svgOpen(300, E(pc.label || 'A picture'))}<defs><clipPath id="g6phClip"><rect width="340" height="300" rx="14"/></clipPath></defs><g clip-path="url(#g6phClip)"><rect width="340" height="300" fill="#eef6fb"/><image href="science/assets/${pc.img}.webp" x="20" y="0" width="300" height="300" preserveAspectRatio="xMidYMid slice"/></g></svg>`;
  }

  window.G6EGYPT = { at, text, sun, leaf, ground, icon, arrow, CHAIN, CHAINS, GREEN, GREEN_D };
  window.CH_DIAGRAMS = Object.assign(window.CH_DIAGRAMS || {}, { egyptRow, photo });
})();
