/* Science Island · Grade 6 · drawings made in code (SVG) for Chapter 2 "Respiration" and Chapter 3 "Digestion".
   Shared by the two games (breath.html, foodtrip.html), the tap pictures of the question pages (quiz.html) and the maps (tools/make_g6_maps.js).
   Nothing here is copied from the school book: every object is drawn with simple shapes.
   Every drawing is a function that returns SVG markup around its own origin (see the note above each one).
   window.G6BODY = the drawings; window.CH_DIAGRAMS gets the tap pictures:
     Chapter 2: breathBags (milky | clear) · airways (nose | windpipe | lungs) · gasExchange (toBlood | toAir)
     Chapter 3: digestTract (foodpipe | stomach | liver | small | large) · salivaTubes (blue | same) · gutWalls (villi | flat) · cloths (loops | flat) */
(function () {
  'use strict';
  const T = (en, ar) => (window.SI ? window.SI.T(en, ar) : en);
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const f1 = n => (Math.round(n * 10) / 10).toString();
  const at = (x, y, k, inner, rot) => `<g transform="translate(${f1(x)} ${f1(y)})${rot ? ` rotate(${rot})` : ''}${k != null && k !== 1 ? ` scale(${k})` : ''}">${inner}</g>`;
  const SKIN = { fill: '#fbe6cf', line: '#d9b38c' };
  const OK = '#2e9e6b';
  const FONT = 'font-family="Nunito,Cairo,Arial,sans-serif"';
  const text = (x, y, s, size = 13, fill = '#1f3d57', w = 900) => `<text x="${f1(x)}" y="${f1(y)}" text-anchor="middle" font-size="${size}" font-weight="${w}" fill="${fill}" ${FONT}>${s}</text>`;

  /* an arrow from (x1,y1) to (x2,y2); bend pushes the middle sideways */
  function arrow(x1, y1, x2, y2, bend = 0, color = '#3a8fd0', w = 5) {
    const mx = (x1 + x2) / 2 + bend, my = (y1 + y2) / 2, a = Math.atan2(y2 - my, x2 - mx) * 180 / Math.PI;
    return `<path d="M${f1(x1)} ${f1(y1)}Q${f1(mx)} ${f1(my)} ${f1(x2)} ${f1(y2)}" fill="none" stroke="${color}" stroke-width="${w}" stroke-linecap="round"/><path d="M0 0l${-w * 2.6} ${-w * 1.5}v${w * 3}z" fill="${color}" transform="translate(${f1(x2)} ${f1(y2)}) rotate(${f1(a)})"/>`;
  }

  /* ================= Chapter 2 · Respiration ================= */
  /* a plastic bag tied at the top. Origin: the middle of its bottom. About 96 wide and 124 tall when full.
     puff: 0 = empty and flat … 1 = full of air; liquid: true = a little liquid at the bottom; milky: 0 = colourless and clear … 1 = milky white */
  function bag(o = {}) {
    const p = clamp(o.puff == null ? 1 : o.puff, 0, 1), w = 22 + 26 * p, m = clamp(o.milky || 0, 0, 1);
    const body = `M-9 -104C${f1(-w * .7)} -98 ${f1(-w - 2)} -70 ${f1(-w)} -34C${f1(-w + 1)} -12 ${f1(-w * .7)} 0 0 0C${f1(w * .7)} 0 ${f1(w - 1)} -12 ${f1(w)} -34C${f1(w + 2)} -70 ${f1(w * .7)} -98 9 -104Z`;
    const liq = o.liquid ? `<path d="M${f1(-w + 3)} -22q${f1(w - 3)} -7 ${f1(2 * w - 6)} 0C${f1(w - 5)} -6 ${f1(w * .62)} -3 0 -3C${f1(-w * .62)} -3 ${f1(-w + 5)} -6 ${f1(-w + 3)} -22Z" fill="${m > .02 ? '#ffffff' : '#bfe3f5'}" opacity="${f1(.65 + m * .35)}" stroke="${m > .5 ? '#c9c4a8' : '#8fc6e6'}" stroke-width="${m > .5 ? 2 : 1.4}"/>
      ${m > .5 ? `<g fill="#ddd8c0"><circle cx="${f1(-w * .35)}" cy="-13" r="2.3"/><circle cx="${f1(w * .1)}" cy="-10" r="2"/><circle cx="${f1(w * .42)}" cy="-15" r="2.2"/></g>` : ''}` : '';
    return `<path d="${body}" fill="rgba(214,238,249,.45)" stroke="#6aa9cc" stroke-width="2.6" stroke-linejoin="round"/>${liq}
      <path d="M${f1(-w * .62)} -78C${f1(-w * .8)} -62 ${f1(-w * .78)} -46 ${f1(-w * .7)} -34" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".75"/>
      <path d="M-9 -104l-9 -17l11 6l7 -9l7 9l11 -6l-9 17z" fill="rgba(214,238,249,.8)" stroke="#6aa9cc" stroke-width="2.2" stroke-linejoin="round"/>
      <rect x="-10" y="-108" width="20" height="7" rx="3" fill="#e2603f" stroke="#b3442a" stroke-width="1.4"/>`;
  }

  /* the head and the upper body, seen from the front. Origin: the middle of the top of the head. About 184 wide; h = total height.
     mouth: 'open' = an open mouth (eating) */
  function body(o = {}) {
    const h = o.h || 246;
    return `<path d="M-13 60C-13 74 -40 78 -62 84C-82 90 -92 104 -92 128V${h}H92V128C92 104 82 90 62 84C40 78 13 74 13 60Z" fill="${SKIN.fill}" stroke="${SKIN.line}" stroke-width="3" stroke-linejoin="round"/>
      <path d="M-31 28q-9 5 -1 16M31 28q9 5 1 16" fill="${SKIN.fill}" stroke="${SKIN.line}" stroke-width="3" stroke-linecap="round"/>
      <circle cx="0" cy="34" r="31" fill="${SKIN.fill}" stroke="${SKIN.line}" stroke-width="3"/>
      <path d="M-28 22C-24 2 24 2 28 22C16 12 -16 12 -28 22Z" fill="#5a4334"/>
      <circle cx="-11" cy="29" r="2.6" fill="#3a2d25"/><circle cx="11" cy="29" r="2.6" fill="#3a2d25"/>
      <path d="M-3 37q3 5 6 0" fill="none" stroke="#c99a72" stroke-width="2.2" stroke-linecap="round"/>
      ${o.mouth === 'open' ? `<ellipse cx="0" cy="50" rx="8" ry="5.5" fill="#b3414f" stroke="#8e2f3c" stroke-width="1.6"/>` : `<path d="M-8 48q8 6 16 0" fill="none" stroke="#b3414f" stroke-width="2.4" stroke-linecap="round"/>`}`;
  }
  /* the windpipe and the two lungs, drawn over body(). Same origin as body().
     hi: 'nose' | 'windpipe' | 'lungs' = that part gets a green outline */
  function airways(o = {}) {
    const hi = o.hi, st = (id, c, w) => (hi === id ? `stroke="${OK}" stroke-width="5"` : `stroke="${c}" stroke-width="${w}"`);
    const lungL = 'M-9 112C-30 98 -60 118 -66 164C-70 196 -62 216 -42 216C-24 216 -9 206 -9 186Z', lungR = 'M9 112C30 98 60 118 66 164C70 196 62 216 42 216C30 216 22 210 16 200C24 190 20 178 9 172Z';
    return `${hi === 'nose' ? `<rect x="-20" y="28" width="40" height="30" rx="12" fill="none" stroke="${OK}" stroke-width="5"/>` : ''}
      <path d="${lungL}" fill="#f6b3b9" ${st('lungs', '#d0707c', 2.6)} stroke-linejoin="round"/><path d="${lungR}" fill="#f6b3b9" ${st('lungs', '#d0707c', 2.6)} stroke-linejoin="round"/>
      <path d="M0 118Q-12 128 -28 142M0 118Q12 128 28 142" fill="none" stroke="#8a9aaa" stroke-width="8" stroke-linecap="round"/><path d="M0 118Q-12 128 -28 142M0 118Q12 128 28 142" fill="none" stroke="#dfe8ef" stroke-width="4" stroke-linecap="round"/>
      <path d="M-28 142l-16 8M-28 142l-6 24M-34 166l-14 10M-34 166l4 22M28 142l16 8M28 142l8 22M36 164l12 12" fill="none" stroke="#c96a76" stroke-width="2.4" stroke-linecap="round"/>
      <rect x="-7" y="60" width="14" height="60" rx="5" fill="#dfe8ef" ${st('windpipe', '#8a9aaa', 2.4)}/>
      <path d="M-6 70h12M-6 80h12M-6 90h12M-6 100h12M-6 110h12" stroke="#8a9aaa" stroke-width="1.8"/>`;
  }
  /* gas exchange, zoomed in: a tiny air sac of the lung with a blood vessel around it. Origin: its top-left corner; 300 wide, 180 tall.
     Blood flows from left (blue: rich in carbon dioxide) to right (red: rich in oxygen).
     labels: true = the words Air and Blood; arrows: draws the two arrows in one dark colour (the tap picture);
     o2: true = the oxygen arrow in its own colour with its name; co2: the same for carbon dioxide; dots: 0 … 1 = little dots on their way */
  const C_O2 = '#2f8fd0', C_CO2 = '#7a6a8f';
  function exchange(o = {}) {
    const dot = (x, y, c) => `<circle cx="${f1(x)}" cy="${f1(y)}" r="5" fill="${c}" stroke="#fff" stroke-width="1.6"/>`;
    const k = o.dots == null ? -1 : clamp(o.dots, 0, 1);
    let s = `<defs><linearGradient id="g6vessel" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#6f9fe0"/><stop offset=".4" stop-color="#6f9fe0"/><stop offset=".62" stop-color="#e2606a"/><stop offset="1" stop-color="#e2606a"/></linearGradient></defs>
      <circle cx="150" cy="64" r="56" fill="#f1f9fd" stroke="#e39aa4" stroke-width="5"/>
      <path d="M8 156C80 156 96 122 150 122C204 122 220 156 292 156" fill="none" stroke="#5b2a36" stroke-width="32" opacity=".28"/>
      <path d="M8 156C80 156 96 122 150 122C204 122 220 156 292 156" fill="none" stroke="url(#g6vessel)" stroke-width="27"/>
      <path d="M30 150l9 6l-9 6M262 150l9 6l-9 6" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" opacity=".9"/>`;
    if (o.labels) s += text(150, 44, T('Air', 'الهواء'), 15) + text(76, 160, T('Blood', 'الدم'), 13, '#fff');
    if (o.arrows) s += arrow(122, 134, 122, 92, 0, '#1f3d57', 5) + arrow(178, 88, 178, 130, 0, '#1f3d57', 5);
    if (o.co2) s += arrow(122, 134, 122, 92, 0, C_CO2, 5);
    if (o.o2) s += arrow(178, 88, 178, 130, 0, C_O2, 5);
    if (k >= 0 && o.o2) s += dot(196, 76 + 52 * k, C_O2) + dot(162, 70 + 54 * ((k + .5) % 1), C_O2);
    if (k >= 0 && o.co2) s += dot(104, 132 - 50 * k, C_CO2) + dot(138, 134 - 52 * ((k + .5) % 1), C_CO2);
    return s;
  }
  /* a fish. Origin: its middle. About 130 wide, 64 tall. gills: true = the red gills show under the gill cover */
  function fish(o = {}) {
    return `<path d="M44 0l26 -22v44z" fill="#8fc0d8" stroke="#4f86a6" stroke-width="2.4" stroke-linejoin="round"/>
      <path d="M-62 0C-44 -30 20 -32 48 0C20 32 -44 30 -62 0Z" fill="#b9dcea" stroke="#4f86a6" stroke-width="2.6" stroke-linejoin="round"/>
      <path d="M-14 -24q10 -14 26 -6l-8 10z" fill="#8fc0d8" stroke="#4f86a6" stroke-width="2.2" stroke-linejoin="round"/>
      ${o.gills ? `<path d="M-30 -17q14 17 0 34" fill="none" stroke="#d94f5f" stroke-width="7" stroke-linecap="round"/><path d="M-30 -17q14 17 0 34" fill="none" stroke="#f3a3ac" stroke-width="2" stroke-dasharray="2 5" stroke-linecap="round"/>` : ''}
      <path d="M-34 -18q12 18 0 36" fill="none" stroke="#4f86a6" stroke-width="2.6" stroke-linecap="round"/>
      <circle cx="-46" cy="-5" r="4.4" fill="#fff" stroke="#2a3a48" stroke-width="1.6"/><circle cx="-47" cy="-5" r="1.9" fill="#2a3a48"/><path d="M-61 5q5 3 9 1" fill="none" stroke="#4f86a6" stroke-width="2" stroke-linecap="round"/>`;
  }

  /* ================= Chapter 3 · Digestion ================= */
  /* the digestive tract inside the body, drawn over body({ h: 356, mouth: 'open' }). Same origin as body().
     hi: 'mouth' | 'foodpipe' | 'stomach' | 'liver' | 'small' | 'large' = that organ gets a green outline;
     food: the same names (and 'out'), or [x, y] = where the bite of food is now; liver: false = without the liver */
  const GUT = {
    foodpipe: 'M0 55V150',
    stomach: 'M-2 150C4 140 30 138 46 152C60 166 56 196 36 204C22 210 8 204 0 196C-6 190 -14 192 -20 196L-24 186C-14 180 -8 178 -4 172C0 164 -4 158 -2 150Z',
    liver: 'M-9 147C-30 135 -62 142 -70 164C-72 178 -60 186 -44 184C-30 182 -19 173 -9 169Z',
    small: 'M-22 191C-38 198 -40 228 -24 240H22C36 240 36 254 22 254H-22C-36 254 -36 268 -22 268H22C36 268 36 282 22 282H-22C-36 282 -38 294 -52 296',
    large: 'M-57 298V232C-57 221 -50 216 -41 216H41C50 216 57 221 57 232V290C57 304 44 310 28 310H11C4 310 0 314 0 321V334'
  };
  const GUTPOS = { mouth: [0, 50], foodpipe: [0, 104], stomach: [28, 176], small: [0, 261], large: [57, 262], out: [0, 348] };
  function gut(o = {}) {
    const hi = o.hi, lw = id => (hi === id ? 5 : 2.4), lc = (id, c) => (hi === id ? OK : c);
    const tube = (id, d, w, c1, c2) => `<path d="${d}" fill="none" stroke="${lc(id, c2)}" stroke-width="${w + (hi === id ? 7 : 4)}" stroke-linecap="round" stroke-linejoin="round"/><path d="${d}" fill="none" stroke="${c1}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`;
    const p = Array.isArray(o.food) ? o.food : o.food && GUTPOS[o.food];
    return `${hi === 'mouth' ? `<ellipse cx="0" cy="50" rx="15" ry="11" fill="none" stroke="${OK}" stroke-width="5"/>` : ''}
      ${o.liver === false ? '' : `<path d="${GUT.liver}" fill="#b5644c" stroke="${lc('liver', '#87402e')}" stroke-width="${lw('liver')}" stroke-linejoin="round"/>`}
      ${tube('foodpipe', GUT.foodpipe, 6, '#f0b3cd', '#b9708f')}
      <path d="${GUT.stomach}" fill="#f6bd5f" stroke="${lc('stomach', '#c88a2c')}" stroke-width="${lw('stomach')}" stroke-linejoin="round"/>
      ${tube('small', GUT.small, 9, '#f9cdb0', '#d98f6d')}${tube('large', GUT.large, 14, '#cfa9de', '#9a6fb0')}
      ${arrow(0, 340, 0, 352, 0, '#3a8fd0', 3.4)}
      ${p ? `<circle cx="${p[0]}" cy="${p[1]}" r="7.5" fill="#7cc86e" stroke="#2f7a3a" stroke-width="2.4"/><circle cx="${p[0] - 2}" cy="${p[1] - 2}" r="2" fill="#fff" opacity=".8"/>` : ''}`;
  }
  /* a test tube. Origin: the middle of its bottom. h = height (default 96). level: 0 … 1 = how full; color: the liquid;
     swab: true = a cotton swab stands in it; drop: a colour = one drop falling into it */
  function tube(o = {}) {
    const h = o.h || 96, lv = (h - 12) * clamp(o.level == null ? .5 : o.level, 0, 1);
    return `${o.swab ? `<path d="M3 ${-h - 24}L-1 -20" stroke="#c9a877" stroke-width="3" stroke-linecap="round"/><ellipse cx="-1.5" cy="-18" rx="5" ry="8" fill="#fff" stroke="#b9c4cf" stroke-width="1.6"/>` : ''}
      <path d="M-9.5 ${f1(-lv - 10)}V-12A9.5 9.5 0 0 0 9.5 -12V${f1(-lv - 10)}Z" fill="${o.color || '#ebe5cf'}" opacity=".94"/>
      <path d="M-12 ${-h}V-12A12 12 0 0 0 12 -12V${-h}" fill="rgba(214,238,249,.28)" stroke="#6aa9cc" stroke-width="2.6"/><path d="M-15 ${-h}h30" stroke="#6aa9cc" stroke-width="3.4" stroke-linecap="round"/>
      <path d="M-7 ${-h + 10}V-22" stroke="#fff" stroke-width="2.6" stroke-linecap="round" opacity=".7"/>
      ${o.drop ? `<path d="M0 ${-h - 30}c-6 9 -6 14 0 14c6 0 6 -5 0 -14z" fill="${o.drop}"/>` : ''}`;
  }
  /* a beaker of water. Origin: the middle of its bottom. w, h = size; level: 0 … 1; steam: true = wisps of steam (hot water); back: true = only the water and the back, front: true = only the glass in front */
  function beaker(o = {}) {
    const w = o.w || 132, h = o.h || 92, lv = (h - 8) * clamp(o.level == null ? .6 : o.level, 0, 1);
    const water = `<rect x="${-w / 2 + 4}" y="${f1(-lv - 4)}" width="${w - 8}" height="${f1(lv)}" rx="5" fill="${o.color || '#f7c9b0'}" opacity=".75"/><path d="M${-w / 2 + 4} ${f1(-lv - 4)}h${w - 8}" stroke="#e39a78" stroke-width="2" opacity=".8"/>`;
    const glass = `<path d="M${-w / 2 - 6} ${-h}h8V-8a8 8 0 0 0 8 8H${w / 2 - 10}a8 8 0 0 0 8 -8V${-h}h8" fill="none" stroke="#6aa9cc" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/>
      <path d="M${w / 2 - 22} ${-h + 18}h10M${w / 2 - 22} ${-h + 34}h10M${w / 2 - 22} ${-h + 50}h10" stroke="#6aa9cc" stroke-width="2" stroke-linecap="round"/>`;
    const steam = o.steam ? [-w * .28, 0, w * .28].map(x => `<path d="M${f1(x)} ${-h - 6}c-6 -8 6 -12 0 -22" fill="none" stroke="#b9c4cf" stroke-width="3" stroke-linecap="round" opacity=".8"/>`).join('') : '';
    return o.back ? water : o.front ? glass + steam : water + glass + steam;
  }
  /* a dropper. Origin: its tip (pointing down). color = the liquid inside */
  const dropper = (o = {}) => `<path d="M-3 0l-2 -34h10l-2 34z" fill="${o.color || '#9a5a2b'}" opacity=".9" stroke="#6aa9cc" stroke-width="1.8" stroke-linejoin="round"/><rect x="-7" y="-40" width="14" height="7" rx="2" fill="#b9c4cf" stroke="#7d8a98" stroke-width="1.6"/><ellipse cx="0" cy="-54" rx="9" ry="15" fill="#e2603f" stroke="#b3442a" stroke-width="2"/>`;
  /* a piece of the inner wall of the small intestine, cut open and seen from the side. Origin: its bottom-left corner; w wide.
     kind: 'flat' = a smooth wall, 'villi' = a wall with its small bumps standing close together (each with tiny blood vessels inside) */
  function wall(o = {}) {
    const w = o.w || 132, n = Math.floor((w - 6) / 21), x0 = (w - n * 21) / 2 + 2.5;
    let s = `<rect x="0" y="-20" width="${w}" height="20" rx="4" fill="#f0a39a" stroke="#c9756b" stroke-width="2.4"/><path d="M6 -10h${w - 12}" stroke="#e2606a" stroke-width="3" stroke-linecap="round"/><path d="M6 -5h${w - 12}" stroke="#6f9fe0" stroke-width="3" stroke-linecap="round"/>`;
    if (o.kind === 'villi') for (let i = 0; i < n; i++) {
      const x = x0 + i * 21;
      s += `<path d="M${f1(x)} -19V-56a8 8 0 0 1 16 0V-19Z" fill="#fbd5cc" stroke="#c9756b" stroke-width="2.2" stroke-linejoin="round"/><path d="M${f1(x + 5)} -12V-54" stroke="#e2606a" stroke-width="2.2" stroke-linecap="round"/><path d="M${f1(x + 11)} -6V-54" stroke="#6f9fe0" stroke-width="2.2" stroke-linecap="round"/><path d="M${f1(x + 5)} -54a3 3 0 0 1 6 0" fill="none" stroke="#9a6fb0" stroke-width="2.2"/>`;
    }
    else s += `<rect x="0" y="-29" width="${w}" height="10" rx="3" fill="#fbd5cc" stroke="#c9756b" stroke-width="2.2"/>`;
    return s;
  }
  /* a strip of cloth seen from the side. Origin: its bottom-left corner; w wide. kind: 'loops' = a towel with many loop-like threads, 'flat' = a flat cloth */
  function cloth(o = {}) {
    const w = o.w || 132; let s = '';
    if (o.kind === 'loops') for (let x = 5; x < w - 6; x += 7.5) s += `<path d="M${f1(x)} -13c-4 -17 10 -17 6 0" fill="none" stroke="#3f7fbf" stroke-width="2.6" stroke-linecap="round"/>`;
    return `${s}<rect x="0" y="-14" width="${w}" height="14" rx="4" fill="#8fc0ea" stroke="#3f7fbf" stroke-width="2.4"/><path d="M6 -7h${w - 12}" stroke="#3f7fbf" stroke-width="1.6" stroke-dasharray="5 5" opacity=".7"/>`;
  }
  /* a drop of water. Origin: its middle */
  const drop = (c = '#58b5e8', k = 1) => `<path d="M0 ${-9 * k}c${-8 * k} ${11 * k} ${-8 * k} ${18 * k} 0 ${18 * k}c${8 * k} 0 ${8 * k} ${-7 * k} 0 ${-18 * k}z" fill="${c}" stroke="#2f8fd0" stroke-width="1.4"/>`;

  /* ---------- things for the maps and the backgrounds ---------- */
  /* a loaf of flat bread, an apple and a bowl of rice. Origin: the middle of the bottom */
  const bread = () => `<ellipse cx="0" cy="2" rx="46" ry="7" fill="#000" opacity=".1"/><path d="M-42 0C-46 -26 -22 -40 0 -40C22 -40 46 -26 42 0Z" fill="#e7b877" stroke="#b8833f" stroke-width="2.6" stroke-linejoin="round"/><path d="M-20 -30l8 10M0 -34l8 10M20 -30l8 10" stroke="#b8833f" stroke-width="2.6" stroke-linecap="round"/>`;
  const apple = () => `<ellipse cx="0" cy="2" rx="30" ry="6" fill="#000" opacity=".1"/><path d="M0 -4C-16 4 -34 -8 -32 -32C-30 -52 -12 -56 0 -48C12 -56 30 -52 32 -32C34 -8 16 4 0 -4Z" fill="#e2545a" stroke="#a8323a" stroke-width="2.6" stroke-linejoin="round"/><path d="M-20 -36q2 -8 9 -10" fill="none" stroke="#fff" stroke-width="3.4" stroke-linecap="round" opacity=".6"/><path d="M0 -48q2 -10 8 -14" fill="none" stroke="#7a5a2a" stroke-width="3" stroke-linecap="round"/><path d="M8 -60q12 -8 18 2q-10 8 -18 -2z" fill="#7cc86e" stroke="#4f9f52" stroke-width="1.8"/>`;
  const rice = () => `<ellipse cx="0" cy="2" rx="44" ry="7" fill="#000" opacity=".1"/><path d="M-36 -26C-30 -46 30 -46 36 -26Z" fill="#fffdf4" stroke="#d6cfb4" stroke-width="2.4" stroke-linejoin="round"/><path d="M-40 -26h80c0 18 -14 26 -40 26s-40 -8 -40 -26z" fill="#6fb3cf" stroke="#3f86a6" stroke-width="2.6" stroke-linejoin="round"/><path d="M-30 -16h60" stroke="#c3e8f4" stroke-width="3" stroke-linecap="round"/>`;
  /* a pair of lungs on its own (a sign). Origin: the top of the windpipe. About 140 wide, 160 tall */
  const lungsSign = () => at(0, -60, 1, airways({}));

  /* ================= tap pictures for the question pages ================= */
  const hot = (id, label, inner) => `<g class="hot" data-id="${id}" role="button" tabindex="0" aria-label="${label}">${inner}</g>`;
  const svgOpen = (w, h, label) => `<svg class="diagram" viewBox="0 0 ${w} ${h}" role="img" aria-label="${label}">`;
  const frame = (w, h, fill) => `<rect width="${w}" height="${h}" rx="14" fill="${fill}"/>`;
  const ringRect = (x, y, w, h, r = 14) => `<rect class="ring" x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}"/>`;
  const bench = (w, y, h) => `<rect y="${y}" width="${w}" height="${h - y}" fill="#d9b27c"/><rect y="${y}" width="${w}" height="5" fill="#a8834f" opacity=".6"/>`;

  function breathBags() {
    return `${svgOpen(340, 190, T('Two tied plastic bags with a little liquid at the bottom: in one the liquid is milky white, in the other it is colourless and clear', 'كيسان بلاستيكيان مغلقان في قاع كلٍّ منهما قليل من سائل: في أحدهما السائل متعكر ولونه أبيض، وفي الآخر شفاف عديم اللون'))}
      ${frame(340, 190, '#eef6fb')}${bench(340, 160, 190)}${at(100, 164, 1.15, bag({ liquid: true, milky: 1 }))}${at(240, 164, 1.15, bag({ liquid: true, milky: 0 }))}
      ${hot('milky', T('The bag with the milky white liquid', 'الكيس الذي فيه سائل متعكر أبيض'), ringRect(34, 8, 132, 174))}${hot('clear', T('The bag with the colourless, clear liquid', 'الكيس الذي فيه سائل شفاف عديم اللون'), ringRect(174, 8, 132, 174))}</svg>`;
  }
  function airwaysPic() {
    return `${svgOpen(250, 256, T('The upper body from the front: the nose and mouth, a tube that goes down the neck, and two organs in the chest', 'الجزء العلوي من الجسم من الأمام: الأنف والفم، وأنبوبة تنزل في الرقبة، وعضوان في الصدر'))}
      ${frame(250, 256, '#eef6fb')}${at(125, 6, 1, body({ h: 246 }) + airways({}))}
      ${hot('nose', T('The nose and the mouth', 'الأنف والفم'), ringRect(99, 28, 52, 34))}${hot('windpipe', T('The tube in the neck', 'الأنبوبة التي في الرقبة'), ringRect(103, 66, 44, 46))}${hot('lungs', T('The two organs in the chest', 'العضوان اللذان في الصدر'), ringRect(52, 116, 146, 110))}</svg>`;
  }
  function gasExchange() {
    return `${svgOpen(340, 196, T('A tiny air sac of the lung with a blood vessel around it. One arrow goes from the air into the blood, and one arrow goes from the blood into the air', 'حويصلة هوائية صغيرة في الرئة حولها وعاء دموي. سهم يتجه من الهواء إلى الدم، وسهم يتجه من الدم إلى الهواء'))}
      ${frame(340, 196, '#fdf3dc')}${at(20, 8, 1, exchange({ labels: true, arrows: true }))}
      ${hot('toAir', T('The arrow that goes from the blood into the air', 'السهم المتجه من الدم إلى الهواء'), ringRect(114, 88, 52, 62))}${hot('toBlood', T('The arrow that goes from the air into the blood', 'السهم المتجه من الهواء إلى الدم'), ringRect(174, 88, 52, 62))}</svg>`;
  }
  function digestTract() {
    const k = .9, X = 125, Y = -38, p = (x, y) => [f1(X + x * k), f1(Y + y * k)];
    const r = (x, y, w, h) => { const [a, b] = p(x, y); return ringRect(a, b, f1(w * k), f1(h * k), 12); };
    const [ox, oy] = p(-74, 208), [ix, iy] = p(-45, 231);
    const ringFrame = `<path class="ring" fill-rule="evenodd" d="M${ox} ${oy}h${f1(148 * k)}v${f1(120 * k)}h${f1(-148 * k)}zM${ix} ${iy}h${f1(90 * k)}v${f1(62 * k)}h${f1(-90 * k)}z"/>`;
    return `${svgOpen(250, 282, T('The inside of the body from the front: a tube that goes down from the mouth, a bag, a dark organ beside it, a long thin coiled tube, and a wide tube around it', 'الجسم من الداخل من الأمام: أنبوبة تنزل من الفم، وكيس، وبجانبه عضو داكن، وأنبوبة طويلة رفيعة ملتفة، وأنبوبة عريضة تحيط بها'))}
      <defs><clipPath id="g6tractClip"><rect width="250" height="282" rx="14"/></clipPath></defs>${frame(250, 282, '#eef6fb')}<g clip-path="url(#g6tractClip)">${at(X, Y, k, body({ h: 372, mouth: 'open' }) + gut({}))}</g>
      ${hot('foodpipe', T('The tube that goes down from the mouth', 'الأنبوبة التي تنزل من الفم'), r(-24, 68, 48, 62))}${hot('liver', T('The dark organ on the left of the picture', 'العضو الداكن في يسار الصورة'), r(-80, 134, 70, 58))}
      ${hot('stomach', T('The bag after the tube', 'الكيس الذي بعد الأنبوبة'), r(-6, 134, 70, 72))}${hot('large', T('The wide tube around the coiled tube', 'الأنبوبة العريضة التي تحيط بالأنبوبة الملتفة'), ringFrame)}${hot('small', T('The long thin coiled tube', 'الأنبوبة الطويلة الرفيعة الملتفة'), r(-43, 233, 86, 58))}</svg>`;
  }
  const IODINE = { blue: '#2b3158', same: '#f0dc9c' };
  function salivaTubes() {
    return `${svgOpen(340, 190, T('Two test tubes after the iodine solution was added: in one the liquid is blue-black, in the other the colour did not change', 'أنبوبتا اختبار بعد إضافة محلول اليود: في إحداهما السائل أزرق داكن، وفي الأخرى لم يتغير اللون'))}
      ${frame(340, 190, '#eef6fb')}${bench(340, 160, 190)}${at(104, 162, 1.35, tube({ level: .6, color: IODINE.blue }))}${at(236, 162, 1.35, tube({ level: .6, color: IODINE.same }))}
      ${hot('blue', T('The test tube with the blue-black liquid', 'أنبوبة الاختبار التي فيها سائل أزرق داكن'), ringRect(44, 8, 120, 174))}${hot('same', T('The test tube whose colour did not change', 'أنبوبة الاختبار التي لم يتغير لونها'), ringRect(176, 8, 120, 174))}</svg>`;
  }
  function gutWalls() {
    return `${svgOpen(340, 150, T('Two pieces of an inner wall seen from the side: one has many small bumps standing close together, the other is flat', 'قطعتان من جدار داخلي من الجانب: إحداهما عليها نتوءات صغيرة كثيرة متقاربة، والأخرى مسطَّحة'))}
      ${frame(340, 150, '#fdf3dc')}${at(22, 112, 1, wall({ kind: 'villi', w: 138 }))}${at(180, 112, 1, wall({ kind: 'flat', w: 138 }))}
      ${hot('villi', T('The wall with the small bumps', 'الجدار الذي عليه نتوءات صغيرة'), ringRect(12, 26, 158, 98))}${hot('flat', T('The flat wall', 'الجدار المسطَّح'), ringRect(170, 26, 158, 98))}</svg>`;
  }
  function cloths() {
    return `${svgOpen(340, 130, T('Two strips of cloth seen from the side: one has many loop-like threads, the other is flat', 'قطعتا قماش من الجانب: إحداهما عليها خيوط كثيرة على شكل حلقات، والأخرى مسطَّحة'))}
      ${frame(340, 130, '#eef6fb')}${at(22, 92, 1, cloth({ kind: 'flat', w: 138 }))}${at(180, 92, 1, cloth({ kind: 'loops', w: 138 }))}
      ${hot('flat', T('The flat cloth', 'قطعة القماش المسطَّحة'), ringRect(12, 30, 158, 76))}${hot('loops', T('The cloth with many loop-like threads', 'قطعة القماش التي عليها خيوط على شكل حلقات'), ringRect(170, 30, 158, 76))}</svg>`;
  }

  window.G6BODY = { at, text, arrow, bag, body, airways, exchange, fish, gut, GUTPOS, tube, beaker, dropper, wall, cloth, drop, bread, apple, rice, lungsSign, IODINE, C_O2, C_CO2 };
  window.CH_DIAGRAMS = Object.assign(window.CH_DIAGRAMS || {}, { breathBags, airways: airwaysPic, gasExchange, digestTract, salivaTubes, gutWalls, cloths });
})();
