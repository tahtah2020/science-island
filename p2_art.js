/* Science Island · Prep 2 · drawings made in code (SVG).
   Shared by the unit game (heatlab.html), the tap pictures of the question pages (quiz.html) and the maps (tools/make_p2_maps.js).
   Nothing here is copied from the school book: every object is drawn with simple shapes.
   Every drawing is a function that returns SVG markup around its own origin (see the note above each one).
   window.P2ART = the drawings; window.CH_DIAGRAMS gets the tap pictures:
     Unit 1: particleStates (solid | liquid | gas) · syringes (air | water | sand) · stateCycle (melt | freeze | evap | cond | subl | depo)
             heatingCurve (solid | melting | liquid | boiling | gas) · systems3 (open | closed | isolated) · spoons (metal | wood | plastic)
             heatPot (rad | cond | conv)
   The names read by screen readers describe what is drawn, never the answer. */
(function () {
  'use strict';
  const T = (en, ar) => (window.SI ? window.SI.T(en, ar) : en);
  const f1 = n => (Math.round(n * 10) / 10).toString();
  const at = (x, y, k, inner, rot) => `<g transform="translate(${f1(x)} ${f1(y)})${rot ? ` rotate(${rot})` : ''}${k != null && k !== 1 ? ` scale(${k})` : ''}">${inner}</g>`;
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const ltrText = (x, y, s, o = {}) => `<text x="${f1(x)}" y="${f1(y)}" text-anchor="${o.anchor || 'middle'}" direction="ltr" unicode-bidi="embed" font-size="${o.fs || 14}" font-weight="${o.fw || 900}" fill="${o.fill || '#1f3d57'}">${esc(s)}</text>`;
  const label = (x, y, s, o = {}) => `<text x="${f1(x)}" y="${f1(y)}" text-anchor="${o.anchor || 'middle'}"${o.anchor && o.anchor !== 'middle' ? ' direction="ltr"' : ''} font-size="${o.fs || 13}" font-weight="${o.fw || 800}" fill="${o.fill || '#1f3d57'}">${esc(s)}</text>`;
  const hot = (id, name, inner) => `<g class="hot" data-id="${id}" role="button" tabindex="0" aria-label="${esc(name)}">${inner}</g>`;
  const svgOpen = (h, name) => `<svg class="diagram" viewBox="0 0 340 ${h}" role="img" aria-label="${esc(name)}">`;
  const frame = (h, fill) => `<rect width="340" height="${h}" rx="14" fill="${fill}"/>`;
  const ringRect = (x, y, w, h, rx = 12) => `<rect class="ring" x="${f1(x)}" y="${f1(y)}" width="${f1(w)}" height="${f1(h)}" rx="${rx}"/>`;
  const ringCircle = (x, y, r) => `<circle class="ring" cx="${f1(x)}" cy="${f1(y)}" r="${f1(r)}"/>`;
  const AR = () => !!(window.SI && window.SI.isAr && window.SI.isAr());

  const COL = { ink: '#1f3d57', glass: 'rgba(196,232,248,.35)', glassLine: '#6aa9cc', water: '#a9dcf5', waterD: '#6cbfe6', ice: '#e6f6fd', iceLine: '#9cd2ea',
    hot: '#e5533d', cold: '#3f93db', gain: '#e0457b', lose: '#3f9bd8', particle: '#4f8fd0', particleD: '#2d6aa8', metal: '#a9b4bf', metalD: '#6f7c88', wood: '#d9a86a', woodD: '#9c7038', plastic: '#7cc6a4', plasticD: '#3f9a72' };

  /* a small seeded random generator: the same picture every time */
  const rng = s => () => (s = (s * 16807) % 2147483647) / 2147483647;

  /* ================= particles ================= */
  /* one particle (a shiny ball). Origin: its centre */
  const dot = (x, y, r = 5, c = COL.particle, d = COL.particleD) => `<circle cx="${f1(x)}" cy="${f1(y)}" r="${r}" fill="${c}" stroke="${d}" stroke-width="1.2"/><circle cx="${f1(x - r * .32)}" cy="${f1(y - r * .34)}" r="${f1(r * .3)}" fill="#fff" opacity=".5"/>`;
  /* the places of the particles of one state inside a w × h box (origin: top left).
     solid: packed in rows · liquid: close together, no order · gas: few and far apart */
  function particlePlaces(kind, w, h, r = 5) {
    const out = [], R = rng(kind === 'solid' ? 11 : kind === 'liquid' ? 23 : 37), step = r * 2.15;
    if (kind === 'solid') {
      const cols = Math.floor((w - 4) / step), rows = Math.floor((h - 4) / step), ox = (w - cols * step) / 2 + step / 2, oy = (h - rows * step) / 2 + step / 2;
      for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) out.push([ox + i * step, oy + j * step]);
      return out;
    }
    const n = kind === 'liquid' ? Math.round(w * h / (step * step) * .62) : Math.max(6, Math.round(w * h / (step * step) * .12));
    const min = kind === 'liquid' ? step * .98 : step * 2.2;
    for (let t = 0; out.length < n && t < 4000; t++) {
      const p = [r + 1 + R() * (w - 2 * r - 2), r + 1 + R() * (h - 2 * r - 2)];
      if (out.every(q => Math.hypot(q[0] - p[0], q[1] - p[1]) >= min)) out.push(p);
    }
    return out;
  }
  /* the particles of one state; t (0…1, optional) shakes them: solids vibrate in place, liquids slide, gases fly */
  function particles(kind, w, h, o = {}) {
    const r = o.r || 5, t = o.t || 0, pts = particlePlaces(kind, w, h, r), amp = kind === 'solid' ? 1.2 : kind === 'liquid' ? 2.6 : 7;
    return pts.map(([x, y], i) => {
      const a = t * Math.PI * 2 + i * 1.7, dx = Math.cos(a * (1 + i % 3 * .3)) * amp, dy = Math.sin(a * (1.2 + i % 2 * .4)) * amp;
      const X = Math.max(r, Math.min(w - r, x + dx)), Y = Math.max(r, Math.min(h - r, y + dy));
      return dot(X, Y, r, o.c, o.d);
    }).join('');
  }
  /* a round "magnifier" view of the particles. Origin: its centre */
  function lens(kind, R = 44, o = {}) {
    const id = 'lens' + kind + Math.round(R) + (o.k || '');
    return `<defs><clipPath id="${id}"><circle r="${R - 3}"/></clipPath></defs><circle r="${R}" fill="#ffffff" stroke="#8fb8d4" stroke-width="3.4"/>
      <g clip-path="url(#${id})">${at(-R, -R, 1, particles(kind, 2 * R, 2 * R, o))}</g><circle r="${R}" fill="none" stroke="#5b8fb4" stroke-width="2"/>`;
  }

  /* ================= lab things ================= */
  /* a beaker. Origin: bottom centre. level 0…1, fill colour, ice: cubes, steam, bubbles, oil (yellow) */
  function beaker(o = {}) {
    const w = o.w || 70, h = o.h || 84, lv = o.level == null ? .6 : o.level, top = -h, wl = -h * lv;
    let s = `<ellipse cx="0" cy="3" rx="${w / 2 + 6}" ry="6" fill="#000" opacity=".08"/>`;
    if (lv > 0) s += `<path d="M${-w / 2 + 3} ${f1(wl)}H${w / 2 - 3}V-6Q${w / 2 - 3} -2 ${w / 2 - 8} -2H${-w / 2 + 8}Q${-w / 2 + 3} -2 ${-w / 2 + 3} -6Z" fill="${o.fill || COL.water}" opacity=".9"/>
      <path d="M${-w / 2 + 3} ${f1(wl)}H${w / 2 - 3}" stroke="${o.line || COL.waterD}" stroke-width="2"/>`;
    if (o.ice) {
      const cubes = [[-18, -14, -8], [8, -12, 10], [-4, -30, 4], [18, -30, -14], [-22, -34, 16]].slice(0, o.ice === true ? 5 : o.ice);
      s += cubes.map(([x, y, r]) => at(x, y, 1, `<rect x="-10" y="-10" width="20" height="20" rx="4" fill="${COL.ice}" stroke="${COL.iceLine}" stroke-width="2"/><path d="M-6 -6l5 0" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/>`, r)).join('');
    }
    if (o.bubbles) { const R = rng(5); for (let i = 0; i < o.bubbles; i++) s += `<circle cx="${f1(-w / 2 + 10 + R() * (w - 20))}" cy="${f1(wl + 6 + R() * (-wl - 14))}" r="${f1(2 + R() * 2.5)}" fill="#fff" opacity=".85" stroke="${COL.waterD}" stroke-width="1"/>`; }
    s += `<path d="M${-w / 2} ${top}V-8Q${-w / 2} 0 ${-w / 2 + 8} 0H${w / 2 - 8}Q${w / 2} 0 ${w / 2} -8V${top}" fill="${COL.glass}" stroke="${COL.glassLine}" stroke-width="3" stroke-linejoin="round"/>
      <path d="M${-w / 2 - 5} ${top}H${w / 2 + 5}" stroke="${COL.glassLine}" stroke-width="3" stroke-linecap="round"/><path d="M${-w / 2 + 7} ${top + 10}V-12" stroke="#fff" stroke-width="3" opacity=".6" stroke-linecap="round"/>`;
    if (o.steam) s += steam(0, top - 4, o.steam);
    return s;
  }
  /* wavy steam lines going up from (x, y) */
  function steam(x, y, n = 3, k = 1) {
    let s = '';
    for (let i = 0; i < n; i++) { const dx = (i - (n - 1) / 2) * 16 * k; s += `<path d="M${f1(x + dx)} ${f1(y)}c-6 -8 6 -14 0 -22s6 -14 0 -22" fill="none" stroke="#b8c7d3" stroke-width="${f1(3 * k)}" stroke-linecap="round" opacity=".85"/>`; }
    return s;
  }
  /* a burner on a small stand. Origin: the top of the flame's base (the beaker stands about 6 above). on: the flame is lit */
  function burner(on = true, k = 1) {
    return at(0, 0, k, `<path d="M-38 6H38M-30 6L-38 60M30 6L38 60" stroke="#7d8996" stroke-width="5" stroke-linecap="round"/>
      <rect x="-12" y="34" width="24" height="26" rx="5" fill="#8a7bc6" stroke="#5e519b" stroke-width="2.4"/><rect x="-4" y="26" width="8" height="9" fill="#5e519b"/>
      ${on ? `<path d="M0 26C-10 18 -8 8 0 -2C8 8 10 18 0 26Z" fill="#f7a23b"/><path d="M0 24C-5 19 -4 13 0 7C4 13 5 19 0 24Z" fill="#fde07a"/>` : ''}`);
  }
  /* a thermometer. Origin: centre of the bulb. t = temperature, from min to max on a tube of length len */
  function thermometer(t, o = {}) {
    const min = o.min == null ? -40 : o.min, max = o.max == null ? 120 : o.max, len = o.len || 120, k = Math.max(0, Math.min(1, (t - min) / (max - min)));
    const col = o.col || COL.hot;
    let s = `<rect x="-6" y="${-len - 6}" width="12" height="${len + 6}" rx="6" fill="#ffffff" stroke="#7d8996" stroke-width="2"/>
      <rect x="-2.5" y="${f1(-8 - (len - 6) * k)}" width="5" height="${f1(8 + (len - 6) * k)}" rx="2.5" fill="${col}"/><circle r="9" fill="${col}" stroke="#7d8996" stroke-width="2"/>`;
    if (o.ticks) o.ticks.forEach(v => { const y = -8 - (len - 6) * (v - min) / (max - min); s += `<path d="M6 ${f1(y)}h6" stroke="#7d8996" stroke-width="1.6"/>${ltrText(14, y + 4, String(v), { fs: 10, anchor: 'start', fill: '#5b6976' })}`; });
    return s;
  }
  /* a syringe standing up with its stopper at the bottom. content: 'air' | 'water' | 'sand'; push 0…1 moves the plunger down (only air gets smaller). Origin: the tip */
  function syringe(content, push = 0) {
    const top = -150, base = -18, gas = content === 'air', fillTop = gas ? base - (100 - 46 * push) : base - 64;
    const plunger = fillTop;
    const fill = content === 'water' ? `<rect x="-17" y="${f1(fillTop)}" width="34" height="${f1(base - fillTop)}" fill="${COL.water}"/><path d="M-17 ${f1(fillTop)}H17" stroke="${COL.waterD}" stroke-width="2"/>`
      : content === 'sand' ? `<rect x="-17" y="${f1(fillTop)}" width="34" height="${f1(base - fillTop)}" fill="#f1d58e"/>${Array.from({ length: 34 }, (_, i) => { const R = rng(i + 3); return `<circle cx="${f1(-14 + R() * 28)}" cy="${f1(fillTop + 4 + R() * (base - fillTop - 8))}" r="1.4" fill="#b6913f"/>`; }).join('')}`
      : `<rect x="-17" y="${f1(fillTop)}" width="34" height="${f1(base - fillTop)}" fill="#f4fbff"/>${Array.from({ length: 7 }, (_, i) => { const R = rng(i + 9); return `<circle cx="${f1(-12 + R() * 24)}" cy="${f1(fillTop + 6 + R() * (base - fillTop - 12))}" r="2.6" fill="none" stroke="#9cc6de" stroke-width="1.4"/>`; }).join('')}`;
    return `${fill}
      <rect x="-20" y="${top}" width="40" height="${-top + base}" rx="4" fill="${COL.glass}" stroke="${COL.glassLine}" stroke-width="3"/>
      <path d="M-30 ${top + 6}H30" stroke="${COL.glassLine}" stroke-width="4" stroke-linecap="round"/>
      <rect x="-17" y="${f1(plunger - 8)}" width="34" height="8" rx="2" fill="#6fb3a0" stroke="#3f8f7a" stroke-width="1.6"/><rect x="-4" y="${f1(top - 30)}" width="8" height="${f1(plunger - 8 - top + 30)}" fill="#8fcab8" stroke="#3f8f7a" stroke-width="1.4"/>
      <rect x="-18" y="${top - 36}" width="36" height="8" rx="3" fill="#6fb3a0" stroke="#3f8f7a" stroke-width="1.6"/>
      <path d="M-8 ${base}L-5 ${base + 10}H5L8 ${base}" fill="${COL.glass}" stroke="${COL.glassLine}" stroke-width="2.4"/><rect x="-8" y="${base + 8}" width="16" height="10" rx="3" fill="#e6a93c" stroke="#b67a17" stroke-width="1.6"/>`;
  }
  /* a pot of water on a fire (side view). Origin: middle of the pot's bottom. o.loops: convection arrows; o.waves: radiation from the fire */
  function potOnFire(o = {}) {
    let s = '';
    /* the fire */
    s += `<g transform="translate(0 30)"><path d="M-46 24L-26 6M-14 26L14 2M26 6L46 24" stroke="#8a5a32" stroke-width="9" stroke-linecap="round"/>
      <path d="M-34 8C-40 -6 -30 -16 -26 -26C-20 -14 -12 -14 -12 -26C-2 -16 0 -6 0 -30C10 -14 14 -10 16 -24C24 -12 30 -6 26 -22C38 -10 40 2 34 8Z" fill="#f7a23b"/>
      <path d="M-20 8C-24 -2 -16 -8 -14 -14C-8 -6 -4 -8 -2 -16C6 -8 10 -4 12 -12C18 -2 20 4 18 8Z" fill="#fde07a"/></g>`;
    /* the pot */
    s += `<path d="M-60 -70V-6Q-60 0 -54 0H54Q60 0 60 -6V-70" fill="#cfd6dd" stroke="#6f7c88" stroke-width="3"/><path d="M-56 -56H56V-6Q56 -3 52 -3H-52Q-56 -3 -56 -6Z" fill="${COL.water}"/>
      <path d="M-64 -70H64" stroke="#6f7c88" stroke-width="4" stroke-linecap="round"/>
      <path d="M60 -50H122" stroke="${o.hotHandle ? '#c94a35' : '#5b4a3b'}" stroke-width="10" stroke-linecap="round"/><path d="M60 -50H96" stroke="#6f7c88" stroke-width="10" stroke-linecap="round"/>`;
    if (o.handleHeat) s += `<path d="M60 -50H${f1(60 + 62 * o.handleHeat)}" stroke="#e5533d" stroke-width="10" stroke-linecap="round" opacity=".85"/>`;
    if (o.loops !== false) {
      const loop = (cx, dir) => `<path d="M${cx - 18 * dir} -12C${cx - 22 * dir} -34 ${cx - 16 * dir} -46 ${cx} -46C${cx + 16 * dir} -46 ${cx + 22 * dir} -30 ${cx + 18 * dir} -14" fill="none" stroke="#2f76b6" stroke-width="2.6" stroke-dasharray="${o.dash || '0'}"/><path d="M${cx + 18 * dir} -14l${-5 * dir} -6m${5 * dir} 6l${3 * dir} -7" stroke="#2f76b6" stroke-width="2.6" stroke-linecap="round" fill="none"/>`;
      s += loop(-26, 1) + loop(26, -1);
    }
    if (o.waves !== false) {
      const wave = (x, y, a) => at(x, y, 1, `<path d="M0 0c4 -4 8 4 12 0s8 4 12 0s8 4 12 0" fill="none" stroke="#e5533d" stroke-width="2.6" stroke-linecap="round"/><path d="M36 0l-6 -4m6 4l-6 4" stroke="#e5533d" stroke-width="2.6" stroke-linecap="round"/>`, a);
      s += wave(-56, 40, 200) + wave(-60, 22, 170) + wave(56, 40, -20) + wave(60, 22, 10);
    }
    return s;
  }
  /* a spoon standing in a beaker. kind: metal | wood | plastic. Origin: the bottom of the spoon */
  function spoon(kind, len = 120) {
    const c = { metal: [COL.metal, COL.metalD], wood: [COL.wood, COL.woodD], plastic: [COL.plastic, COL.plasticD] }[kind];
    return `<path d="M-3.5 -14V${-len}Q0 ${-len - 4} 3.5 ${-len}V-14" fill="${c[0]}" stroke="${c[1]}" stroke-width="1.6"/><ellipse cx="0" cy="-8" rx="9" ry="13" fill="${c[0]}" stroke="${c[1]}" stroke-width="1.6"/>`;
  }
  /* a thermos flask with a pump top. Origin: bottom centre */
  function thermos(k = 1) {
    return at(0, 0, k, `<ellipse cx="0" cy="3" rx="34" ry="6" fill="#000" opacity=".08"/><rect x="-28" y="-118" width="56" height="118" rx="12" fill="#b9c3cc" stroke="#6f7c88" stroke-width="3"/>
      <rect x="-20" y="-110" width="7" height="100" rx="3" fill="#fff" opacity=".5"/><path d="M-24 -118V-134Q-24 -142 -16 -142H16Q24 -142 24 -134V-118Z" fill="#3b4752"/>
      <path d="M-12 -142V-150H22Q30 -150 30 -144" fill="none" stroke="#3b4752" stroke-width="6" stroke-linecap="round"/><path d="M28 -100Q46 -98 46 -76Q46 -54 28 -52" fill="none" stroke="#3b4752" stroke-width="7" stroke-linecap="round"/>`);
  }
  /* a soft-drink can sitting in ice. Origin: bottom centre of the ice heap */
  function canInIce(k = 1) {
    const cube = (x, y, r) => at(x, y, 1, `<rect x="-11" y="-11" width="22" height="22" rx="4" fill="${COL.ice}" stroke="${COL.iceLine}" stroke-width="2"/>`, r);
    return at(0, 0, k, `${cube(-40, -10, 10)}${cube(40, -10, -8)}${cube(-20, -6, -14)}${cube(22, -4, 18)}
      <rect x="-24" y="-104" width="48" height="96" rx="8" fill="#3d7fd1" stroke="#245a9e" stroke-width="3"/><path d="M-20 -104Q0 -112 20 -104" fill="none" stroke="#9fb3c4" stroke-width="4"/>
      <rect x="-16" y="-80" width="32" height="30" rx="5" fill="#ffffff" opacity=".85"/><path d="M-10 -66h20" stroke="#3d7fd1" stroke-width="4" stroke-linecap="round"/>
      ${[[-14, -30], [10, -40], [-6, -92], [14, -88], [-16, -58]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="2.2" fill="#ffffff" opacity=".9"/>`).join('')}
      ${cube(-30, 2, 4)}${cube(0, 4, -6)}${cube(30, 2, 12)}`);
  }
  /* an open pot of boiling water on a hot plate. Origin: bottom centre of the plate */
  function boilingPot(k = 1) {
    return at(0, 0, k, `<rect x="-50" y="-16" width="100" height="16" rx="5" fill="#4b5560"/><ellipse cx="0" cy="-16" rx="38" ry="4" fill="#e5533d"/>
      <path d="M-40 -84V-24Q-40 -18 -34 -18H34Q40 -18 40 -24V-84" fill="#cfd6dd" stroke="#6f7c88" stroke-width="3"/><path d="M-37 -72H37V-24Q37 -21 33 -21H-33Q-37 -21 -37 -24Z" fill="${COL.water}"/>
      ${[[-20, -40], [0, -54], [18, -36], [-8, -30], [24, -60]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="4" fill="#fff" opacity=".9" stroke="${COL.waterD}" stroke-width="1"/>`).join('')}
      <path d="M40 -64H74" stroke="#5b4a3b" stroke-width="8" stroke-linecap="round"/>${steam(0, -90, 3)}`);
  }

  /* ================= the tap pictures ================= */
  /* three magnifiers: solid, liquid, gas. In Arabic the solid is on the right (as in the book) */
  function particleStates() {
    const X = { solid: AR() ? 280 : 60, liquid: 170, gas: AR() ? 60 : 280 };
    const name = { solid: T('Particles packed in neat rows', 'جسيمات متلاصقة في صفوف منتظمة'), liquid: T('Particles close together, not in rows', 'جسيمات متقاربة غير منتظمة'), gas: T('A few particles far apart', 'جسيمات قليلة متباعدة') };
    return `${svgOpen(150, T('Three round views of particles: packed in rows, close together without order, and far apart', 'ثلاث صور مكبَّرة للجسيمات: متلاصقة في صفوف، ومتقاربة بلا ترتيب، ومتباعدة'))}
      ${frame(150, '#eef6fb')}${['solid', 'liquid', 'gas'].map(k => at(X[k], 72, 1, lens(k, 50))).join('')}
      ${['solid', 'liquid', 'gas'].map((k, i) => ltrText(X[k], 140, `(${i + 1})`, { fs: 12.5 })).join('')}
      ${['solid', 'liquid', 'gas'].map(k => hot(k, name[k], ringCircle(X[k], 72, 56))).join('')}</svg>`;
  }
  /* three closed syringes: air, water, fine sand (labelled) */
  function syringes() {
    const order = AR() ? ['air', 'water', 'sand'] : ['sand', 'water', 'air'], xs = [62, 170, 278];
    const nm = { air: T('Air', 'هواء'), water: T('Water', 'ماء'), sand: T('Fine sand', 'رمل ناعم') };
    return `${svgOpen(232, T('Three syringes closed with a stopper: one with air, one with water and one with fine sand', 'ثلاثة محاقن مغلقة بسدادة: بها هواء وماء ورمل ناعم'))}
      ${frame(232, '#f3f8fd')}${order.map((k, i) => at(xs[i], 196, 1, syringe(k))).join('')}
      ${order.map((k, i) => label(xs[i] + (i === 1 ? 0 : 0), 226, nm[k], { fs: 13 })).join('')}
      ${order.map((k, i) => hot(k, T(`The syringe with ${nm[k].toLowerCase()}`, `المحقن الذي به ${nm[k]}`), ringRect(xs[i] - 38, 8, 76, 222))).join('')}</svg>`;
  }
  /* solid, liquid and gas with six arrows between them, numbered (1)…(6). Pink: heat gained, blue: heat lost.
     Drawn left to right (solid on the left); in Arabic the picture is mirrored so the solid is on the right, as in the book */
  const CYCLE = {
    melt: [112, 182, 228, 182], freeze: [228, 154, 112, 154],
    evap: [246, 130, 196, 80], cond: [214, 42, 308, 112],
    subl: [94, 130, 144, 80], depo: [126, 42, 32, 112]
  };
  const CYCLE_NUM = { melt: 4, freeze: 1, evap: 6, cond: 2, subl: 3, depo: 5 };
  const CYCLE_GAIN = { melt: 1, evap: 1, subl: 1 };
  function stateCycle() {
    const mx = x => (AR() ? 340 - x : x), SX = mx(70), LX = mx(270), Y = 220, GX = 170, GY = 46;
    let s = `${svgOpen(246, T('A block of solid, a beaker of liquid and a cloud of gas, with six numbered arrows between them; pink arrows mean heat is gained and blue arrows mean heat is lost', 'مكعب صلب وكأس سائل وسحابة غاز، وبينها ستة أسهم مرقمة؛ الأسهم الوردية اكتساب طاقة حرارية والزرقاء فقد طاقة حرارية'))}${frame(246, '#f7f9fc')}
      <rect x="${SX - 34}" y="${Y - 62}" width="68" height="58" rx="6" fill="#bcd9f2" stroke="#5f97c9" stroke-width="2.6"/>${label(SX, Y + 16, T('Solid', 'صلب'), { fs: 13 })}
      ${at(LX, Y - 4, .72, beaker({ fill: COL.water, level: .6 }))}${label(LX, Y + 16, T('Liquid', 'سائل'), { fs: 13 })}
      <circle cx="${GX}" cy="${GY}" r="30" fill="#ffffff" stroke="#c9d6e2" stroke-width="2"/>${at(GX - 28, GY - 28, 1, particles('gas', 56, 56, { r: 3.2 }))}${label(GX, GY + 46, T('Gas', 'غاز'), { fs: 13 })}`;
    const nums = [];
    Object.keys(CYCLE).forEach(k => {
      const [a, b, c, d] = CYCLE[k], x1 = mx(a), x2 = mx(c), col = CYCLE_GAIN[k] ? COL.gain : COL.lose;
      const ang = Math.atan2(d - b, x2 - x1), ux = Math.cos(ang), uy = Math.sin(ang);
      s += `<path d="M${f1(x1)} ${b}L${f1(x2 - ux * 10)} ${f1(d - uy * 10)}" stroke="${col}" stroke-width="7" stroke-linecap="round"/>${at(x2, d, 1, '<path d="M2 0L-13 -9L-13 9Z" fill="' + col + '"/>', f1(ang * 180 / Math.PI))}`;
      /* the number sits beside the middle of the arrow, on its outer side */
      const mxp = (x1 + x2) / 2, myp = (b + d) / 2, side = (k === 'freeze' || k === 'cond' || k === 'depo') ? 1 : -1;
      let nx = mxp - uy * 20 * side, ny = myp + ux * 20 * side;
      if (k === 'melt') { nx = mxp; ny = b + 20; } if (k === 'freeze') { nx = mxp; ny = b - 20; }
      nums.push([k, nx, ny]);
    });
    nums.forEach(([k, x, y]) => { s += `<circle cx="${f1(x)}" cy="${f1(y)}" r="11" fill="#ffffff" stroke="#9fb3c4" stroke-width="2"/>${ltrText(x, y + 4.5, String(CYCLE_NUM[k]), { fs: 12.5 })}`; });
    /* the key, between the solid and the liquid */
    s += `<rect x="112" y="216" width="116" height="28" rx="8" fill="#ffffff" stroke="#e1e8ef"/>
      <rect x="120" y="222" width="22" height="5" rx="2" fill="${COL.gain}"/>${label(181, 228, T('heat gained', 'اكتساب طاقة'), { fs: 10 })}
      <rect x="120" y="233" width="22" height="5" rx="2" fill="${COL.lose}"/>${label(181, 240, T('heat lost', 'فقد طاقة'), { fs: 10 })}`;
    nums.forEach(([k, x, y]) => { s += hot(k, T(`Arrow number ${CYCLE_NUM[k]}`, `السهم رقم ${CYCLE_NUM[k]}`), ringCircle(x, y, 17)); });
    return s + '</svg>';
  }
  /* the heating curve of water: temperature against time, with flat parts at 0 °C and 100 °C. Axes stay left to right as in the book */
  const CURVE = { x0: 52, y0: 176, xs: [52, 92, 124, 196, 268, 316], tmin: -40, tmax: 140, h: 156 };
  const cY = t => CURVE.y0 - (t - CURVE.tmin) / (CURVE.tmax - CURVE.tmin) * CURVE.h;
  function heatingCurve() {
    const X = CURVE.xs, pts = [[X[0], cY(-40)], [X[1], cY(0)], [X[2], cY(0)], [X[3], cY(100)], [X[4], cY(100)], [X[5], cY(140)]];
    let s = `${svgOpen(208, T('A graph of temperature against time while ice is heated: it rises, stays flat at 0, rises, stays flat at 100, then rises again', 'منحنى درجة الحرارة مع الزمن أثناء تسخين الثلج: ترتفع، ثم تثبت عند 0، ثم ترتفع، ثم تثبت عند 100، ثم ترتفع'))}${frame(208, '#fbfdff')}
      <path d="M${CURVE.x0} 14V${CURVE.y0 + 4}H326" stroke="#5b6976" stroke-width="2.4" fill="none"/><path d="M326 ${CURVE.y0 + 4}l-8 -5v10z" fill="#5b6976"/><path d="M${CURVE.x0} 14l-5 8h10z" fill="#5b6976"/>
      ${[-40, 0, 100].map(t => `<path d="M${CURVE.x0 - 5} ${f1(cY(t))}H${CURVE.x0}" stroke="#5b6976" stroke-width="2"/>${ltrText(CURVE.x0 - 8, cY(t) + 4, String(t), { fs: 11, anchor: 'end', fill: '#5b6976' })}<path d="M${CURVE.x0} ${f1(cY(t))}H316" stroke="#e1e8ef" stroke-width="1.4" stroke-dasharray="4 4"/>`).join('')}
      ${ltrText(CURVE.x0 + 4, 12, '°C', { fs: 11, anchor: 'start', fill: '#5b6976' })}${label(318, 200, T('time (min)', 'الزمن (min)'), { fs: 11, fill: '#5b6976', anchor: 'end' })}
      <path d="M${pts.map(p => `${f1(p[0])} ${f1(p[1])}`).join('L')}" fill="none" stroke="${COL.gain}" stroke-width="5" stroke-linejoin="round" stroke-linecap="round"/>
      ${pts.slice(1, 5).map(p => `<circle cx="${f1(p[0])}" cy="${f1(p[1])}" r="4" fill="#fff" stroke="${COL.gain}" stroke-width="2.4"/>`).join('')}`;
    const seg = [['solid', T('The first rising part, below 0', 'الجزء الأول الصاعد تحت الصفر')], ['melting', T('The flat part at 0', 'الجزء الأفقي عند الصفر')], ['liquid', T('The rising part from 0 to 100', 'الجزء الصاعد من 0 إلى 100')], ['boiling', T('The flat part at 100', 'الجزء الأفقي عند 100')], ['gas', T('The last rising part, above 100', 'الجزء الأخير الصاعد فوق 100')]];
    seg.forEach(([id, nm], i) => {
      const a = pts[i], b = pts[i + 1], len = Math.hypot(b[0] - a[0], b[1] - a[1]), ang = Math.atan2(b[1] - a[1], b[0] - a[0]) * 180 / Math.PI;
      s += hot(id, nm, at((a[0] + b[0]) / 2, (a[1] + b[1]) / 2, 1, `<rect class="ring" x="${f1(-len / 2 + 5)}" y="-13" width="${f1(len - 10)}" height="26" rx="13"/>`, f1(ang)));
    });
    return s + '</svg>';
  }
  /* three systems, numbered: an open pot of boiling water, a can in ice, a thermos */
  function systems3() {
    const xs = AR() ? [282, 170, 58] : [58, 170, 282];
    return `${svgOpen(196, T('Three things: (1) an open pot of boiling water on a hot plate, (2) a can of soft drink in ice, (3) a thermos flask', 'ثلاثة أشياء: (1) إناء مفتوح به ماء يغلي على سخان، (2) عبوة مشروب غازي في ثلج، (3) حافظ حرارة (ترمس)'))}${frame(196, '#f3f8fd')}
      ${at(xs[0], 168, .82, boilingPot())}${at(xs[1], 168, .9, canInIce())}${at(xs[2], 168, .82, thermos())}
      ${xs.map((x, i) => ltrText(x, 188, `(${i + 1})`, { fs: 12.5 })).join('')}
      ${hot('open', T('Picture 1: the open pot of boiling water', 'الصورة 1: الإناء المفتوح الذي به ماء يغلي'), ringRect(xs[0] - 52, 10, 104, 182))}
      ${hot('closed', T('Picture 2: the can in ice', 'الصورة 2: العبوة الموضوعة في الثلج'), ringRect(xs[1] - 52, 10, 104, 182))}
      ${hot('isolated', T('Picture 3: the thermos flask', 'الصورة 3: حافظ الحرارة'), ringRect(xs[2] - 52, 10, 104, 182))}</svg>`;
  }
  /* three spoons in a beaker of hot water: metal, wood, plastic (labelled) */
  function spoons() {
    const kinds = AR() ? ['metal', 'wood', 'plastic'] : ['plastic', 'wood', 'metal'], xs = [134, 170, 206], rot = [-14, 0, 14];
    const nm = { metal: T('Metal', 'معدن'), wood: T('Wood', 'خشب'), plastic: T('Plastic', 'بلاستيك') };
    let s = `${svgOpen(220, T('A beaker of hot water at 100 degrees with three spoons in it: metal, wood and plastic', 'كأس بها ماء درجة حرارته 100 وبها ثلاث ملاعق: معدن وخشب وبلاستيك'))}${frame(220, '#f3f8fd')}
      <rect y="196" width="340" height="24" fill="#d9b27c"/>`;
    s += at(170, 196, 1.25, beaker({ fill: COL.water, level: .7, w: 90, h: 100 }));
    kinds.forEach((k, i) => { s += at(xs[i], 186, 1, spoon(k, 150), rot[i]); });
    s += `<rect x="208" y="160" width="44" height="20" rx="10" fill="#ffffff" opacity=".9"/>` + ltrText(230, 175, '100°C', { fs: 11.5 });
    const tip = i => [xs[i] + Math.sin(rot[i] * Math.PI / 180) * 150, 186 - Math.cos(rot[i] * Math.PI / 180) * 150];
    kinds.forEach((k, i) => { const [x, y] = tip(i); s += label(x + (i - 1) * 34, y - 14, nm[k], { fs: 13 }); });
    kinds.forEach((k, i) => { const [x, y] = tip(i); s += hot(k, T(`The ${nm[k].toLowerCase()} spoon`, `ملعقة ${nm[k] === 'معدن' ? 'المعدن' : nm[k] === 'خشب' ? 'الخشب' : 'البلاستيك'}`), ringRect(x + (i - 1) * 34 - 30, y - 32, 60, 62, 12)); });
    return s + '</svg>';
  }
  /* a pot of water on a fire, with three numbers: (1) the waves from the fire, (2) the handle, (3) the loops in the water */
  function heatPot() {
    const flip = AR() ? -1 : 1, cx = 160;
    const g = `<g transform="translate(${cx} 132) scale(${flip} 1)">${potOnFire()}</g>`;
    const num = (x, y, n) => `<circle cx="${x}" cy="${y}" r="12" fill="#ffffff" stroke="#9fb3c4" stroke-width="2"/>${ltrText(x, y + 4.5, `${n}`, { fs: 13 })}`;
    const P = { rad: [cx - 104 * flip, 150], cond: [cx + 122 * flip, 60], conv: [cx, 104] };
    return `${svgOpen(214, T('A pot of water on a fire with three numbers: 1 beside the wavy lines coming from the fire, 2 on the handle, 3 on the curved arrows inside the water', 'إناء به ماء على النار وعليه ثلاثة أرقام: 1 بجوار الخطوط المتموجة الخارجة من النار، و2 على يد الإناء، و3 على الأسهم المنحنية داخل الماء'))}${frame(214, '#fff8ef')}
      ${g}${num(P.rad[0], P.rad[1], 1)}${num(P.cond[0], P.cond[1], 2)}${num(P.conv[0], P.conv[1], 3)}
      ${hot('rad', T('Number 1', 'الرقم 1'), ringRect(P.rad[0] - 34, P.rad[1] - 34, 68, 64))}
      ${hot('cond', T('Number 2', 'الرقم 2'), ringRect(P.cond[0] - 40, P.cond[1] - 22, 80, 40))}
      ${hot('conv', T('Number 3', 'الرقم 3'), ringRect(cx - 54, 76, 108, 52))}</svg>`;
  }

  window.P2ART = { at, f1, esc, ltrText, label, COL, rng, dot, particlePlaces, particles, lens, beaker, steam, burner, thermometer, syringe, potOnFire, spoon, thermos, canInIce, boilingPot, cY, CURVE };
  window.CH_DIAGRAMS = Object.assign(window.CH_DIAGRAMS || {}, { particleStates, syringes, stateCycle, heatingCurve, systems3, spoons, heatPot });
})();
