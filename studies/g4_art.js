/* Social Studies · Grade 4 pictures, drawn in code (CH_DIAGRAMS). Nothing is copied from the school book: every plan, map and icon is drawn here with simple shapes.
   Used by q.fig (a picture above a question), q.diagram + q.pic (tap), and by the game studies-compass.html (pic.plain = the inner markup only, no frame and no tap rings).
   Unit 1 «اتجاهاتنا ترسم خطواتنا»:
     compassTown  (tap) ids house · mosque · school · hospital · market · bus · museum · church     the park in the middle, eight places around it, only the north is named
     sunFacing    (tap) ids ahead · behind · right · left                                           a child facing the rising sun, seen from above (the sun is ahead)
     schoolPlan   (tap) ids gate · security · library · theatre · playground · garden · art · teachers · principal
     mapParts     (tap) ids title · rose · key · scale                                              a simple map of Egypt: the four parts of a map
     mapCities    (tap) ids cairo · sohag · aswan · hurghada                                        the same map: cities
     pathPlans    (tap) ids p1 · p2 · p3                                                            three routes from the house to the park (650 m, 500 m, 1000 m)
     skyViews     (tap) ids plane · satellite                                                       a plane and a satellite taking pictures
     mapKinds     (tap) ids hand · digital                                                          a hand-drawn map and a map on a phone
     sourceCards  (tap) ids papyrus · carving · article · book     q.pic = { set: 'pca' } (letters of the three cards: p c a b)
   Texts are Arabic (the book is Arabic for both tracks). Screen-reader names describe the picture, never the answer.
   window.S4ART = the pieces the game and the map script reuse. */
(function () {
  'use strict';
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const f1 = n => (Math.round(n * 10) / 10).toString();
  const INK = '#1f3d57', PAPER = '#fffaf0';
  const FONT = 'Cairo, Nunito, sans-serif';
  const txt = (x, y, s, o = {}) => `<text x="${f1(x)}" y="${f1(y)}" text-anchor="${o.anchor || 'middle'}" direction="ltr" font-family="${FONT}" font-size="${o.fs || 11}" font-weight="${o.w || 800}" fill="${o.fill || INK}"${o.halo ? ' stroke="#fff" stroke-width="3" paint-order="stroke" stroke-linejoin="round"' : ''}${o.rot ? ` transform="rotate(${o.rot} ${f1(x)} ${f1(y)})"` : ''}>${esc(s)}</text>`;
  const hot = (id, name, inner) => `<g class="hot" data-id="${id}" role="button" tabindex="0" aria-label="${esc(name)}">${inner}</g>`;
  const ringRect = (x, y, w, h, r = 12) => `<rect class="ring" x="${f1(x)}" y="${f1(y)}" width="${f1(w)}" height="${f1(h)}" rx="${r}"/>`;
  const ringEl = (cx, cy, rx, ry) => `<ellipse class="ring" cx="${f1(cx)}" cy="${f1(cy)}" rx="${f1(rx)}" ry="${f1(ry)}"/>`;
  const wrap = (w, h, label, inner, plain) => (plain ? inner : `<svg class="diagram" viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(label)}">${inner}</svg>`);
  const at = (x, y, k, inner) => `<g transform="translate(${f1(x)} ${f1(y)})${k && k !== 1 ? ` scale(${k})` : ''}">${inner}</g>`;

  /* ================= small icons, each about 32 wide around its own centre (0,0) ================= */
  const I = {
    house: () => `<path d="M-14 -2L0 -15L14 -2Z" fill="#e2603f" stroke="#b24428" stroke-width="1.6" stroke-linejoin="round"/><rect x="-11" y="-2" width="22" height="16" fill="#fbe3b8" stroke="#c9a15c" stroke-width="1.6"/><rect x="-3.5" y="4" width="7" height="10" rx="1" fill="#8a5a28"/><rect x="5" y="1" width="5" height="5" fill="#9fd4ee"/>`,
    mosque: () => `<rect x="9" y="-12" width="5" height="26" fill="#f1e2bd" stroke="#b9a066" stroke-width="1.4"/><path d="M8.5 -12L11.5 -19L14.5 -12Z" fill="#2e9e6b"/><rect x="-14" y="2" width="22" height="12" fill="#f6ecd0" stroke="#b9a066" stroke-width="1.4"/><path d="M-12 2A9 9 0 0 1 6 2Z" fill="#2e9e6b" stroke="#237047" stroke-width="1.4"/><path d="M-3 -9v-4" stroke="#c9a15c" stroke-width="1.6"/><circle cx="-3" cy="-14" r="1.6" fill="#f2b134"/>`,
    school: () => `<rect x="-14" y="-4" width="28" height="18" fill="#f4a58f" stroke="#c4694f" stroke-width="1.6"/><path d="M-16 -4L0 -13L16 -4Z" fill="#c4694f"/><rect x="-3" y="5" width="6" height="9" fill="#8a5a28"/><rect x="-11" y="0" width="5" height="5" fill="#fff6e0"/><rect x="6" y="0" width="5" height="5" fill="#fff6e0"/><path d="M0 -13v-8" stroke="#8a5a28" stroke-width="1.4"/><path d="M0 -21h8v5h-8z" fill="#e2603f"/>`,
    hospital: () => `<rect x="-14" y="-10" width="28" height="24" rx="2" fill="#f4f8fb" stroke="#8aa5b8" stroke-width="1.6"/><rect x="-3" y="-8" width="6" height="14" fill="#e2603f"/><rect x="-7" y="-4" width="14" height="6" fill="#e2603f"/><rect x="-3.5" y="7" width="7" height="7" fill="#9fd4ee"/>`,
    market: () => `<path d="M-15 -6H15L12 -14H-12Z" fill="#e2603f"/><path d="M-15 -6h6v4a3 3 0 0 1-6 0zM-9 -6h6v4a3 3 0 0 1-6 0zM-3 -6h6v4a3 3 0 0 1-6 0zM3 -6h6v4a3 3 0 0 1-6 0zM9 -6h6v4a3 3 0 0 1-6 0z" fill="#fff6e0" stroke="#e2603f" stroke-width="1"/><rect x="-12" y="-2" width="24" height="16" fill="#e8c88a" stroke="#a8773a" stroke-width="1.4"/><circle cx="-5" cy="4" r="3" fill="#e2603f"/><circle cx="2" cy="5" r="3" fill="#f2b134"/><circle cx="8" cy="4" r="2.6" fill="#6fbf63"/>`,
    bus: () => `<rect x="-16" y="-10" width="32" height="20" rx="5" fill="#f2b134" stroke="#c98a14" stroke-width="1.6"/><rect x="-12" y="-6" width="7" height="6" fill="#d8eefa"/><rect x="-3" y="-6" width="7" height="6" fill="#d8eefa"/><rect x="6" y="-6" width="7" height="6" fill="#d8eefa"/><circle cx="-8" cy="11" r="3.6" fill="#3a5c75" stroke="#fff" stroke-width="1.2"/><circle cx="8" cy="11" r="3.6" fill="#3a5c75" stroke="#fff" stroke-width="1.2"/>`,
    museum: () => `<path d="M-16 -4L0 -15L16 -4Z" fill="#d8b878" stroke="#a8864c" stroke-width="1.6" stroke-linejoin="round"/><rect x="-13" y="-3" width="26" height="3" fill="#e8d3a2"/><rect x="-11" y="0" width="4" height="12" fill="#f1e2bd" stroke="#b9a066" stroke-width="1"/><rect x="-2" y="0" width="4" height="12" fill="#f1e2bd" stroke="#b9a066" stroke-width="1"/><rect x="7" y="0" width="4" height="12" fill="#f1e2bd" stroke="#b9a066" stroke-width="1"/><rect x="-15" y="12" width="30" height="3" fill="#d8b878"/>`,
    church: () => `<rect x="-6" y="-12" width="12" height="26" fill="#f6ecd0" stroke="#b9a066" stroke-width="1.4"/><path d="M-6 -12L0 -19L6 -12Z" fill="#c4694f"/><path d="M0 -26v8M-3 -23h6" stroke="#f2b134" stroke-width="1.8" stroke-linecap="round"/><rect x="-16" y="2" width="11" height="12" fill="#f1e2bd" stroke="#b9a066" stroke-width="1.4"/><rect x="5" y="2" width="11" height="12" fill="#f1e2bd" stroke="#b9a066" stroke-width="1.4"/><rect x="-2.5" y="5" width="5" height="9" rx="2.5" fill="#8a5a28"/>`,
    light: () => `<rect x="-6" y="-14" width="12" height="28" rx="4" fill="#3a5c75"/><circle cx="0" cy="-8" r="3.4" fill="#e2603f"/><circle cx="0" cy="0" r="3.4" fill="#f2b134"/><circle cx="0" cy="8" r="3.4" fill="#2e9e6b"/>`,
    shop: () => `<path d="M-14 -4H14L11 -12H-11Z" fill="#6fa8dc"/><path d="M-14 -4h7v4a3.5 3.5 0 0 1-7 0zM-7 -4h7v4a3.5 3.5 0 0 1-7 0zM0 -4h7v4a3.5 3.5 0 0 1-7 0zM7 -4h7v4a3.5 3.5 0 0 1-7 0z" fill="#fff6e0" stroke="#6fa8dc" stroke-width="1"/><rect x="-11" y="0" width="22" height="14" fill="#f3d9a4" stroke="#c99b5a" stroke-width="1.4"/><rect x="-3.5" y="5" width="7" height="9" fill="#8a5a28"/>`,
    library: () => `<rect x="-14" y="-12" width="28" height="26" rx="2" fill="#9fc8e6" stroke="#5f8fb4" stroke-width="1.6"/><path d="M-9 -7h18M-9 0h18M-9 7h18" stroke="#fff" stroke-width="2"/><rect x="-8" y="-12" width="3" height="5" fill="#e2603f"/><rect x="-3" y="-12" width="3" height="5" fill="#f2b134"/><rect x="2" y="-12" width="3" height="5" fill="#6fbf63"/>`,
    park: () => `<ellipse cx="0" cy="8" rx="20" ry="8" fill="#8fd08a" stroke="#5aa862" stroke-width="1.6"/><rect x="-3" y="-2" width="6" height="12" fill="#8a5a28"/><circle cx="0" cy="-8" r="11" fill="#6fbf63" stroke="#4f9f52" stroke-width="1.6"/><circle cx="-12" cy="4" r="6" fill="#6fbf63"/><circle cx="12" cy="3" r="6" fill="#6fbf63"/>`,
    papyrus: () => `<path d="M-13 -12C-17 -9 -17 9 -13 12H11C15 9 15 -9 11 -12Z" fill="#e8cf94" stroke="#a8864c" stroke-width="1.6"/><path d="M-13 -12C-9 -9 -9 9 -13 12" fill="#d8b878" stroke="#a8864c" stroke-width="1.4"/><circle cx="-1" cy="-5" r="2.2" fill="#7a5a30"/><path d="M-1 -2v9M-5 2h8M4 -5h5M4 0h5M4 5h5" stroke="#7a5a30" stroke-width="1.6" stroke-linecap="round"/>`,
    carving: () => `<path d="M-14 14V-6Q-14 -14 0 -14Q14 -14 14 -6V14Z" fill="#d8c19a" stroke="#a8864c" stroke-width="1.8"/><circle cx="-6" cy="-5" r="2.4" fill="#7a5a30"/><path d="M-9 0q3 -3 6 0M3 -6h7M3 -1h7M3 4h7M-8 6q4 3 8 0" fill="none" stroke="#7a5a30" stroke-width="1.6" stroke-linecap="round"/>`,
    article: () => `<rect x="-14" y="-12" width="28" height="24" rx="2" fill="#f7f4ec" stroke="#8a97a3" stroke-width="1.6"/><rect x="-10" y="-8" width="20" height="5" fill="#3a5c75"/><path d="M-10 1h8M-10 5h8M-10 9h8M2 1h8M2 5h8M2 9h8" stroke="#8a97a3" stroke-width="1.6"/>`,
    book: () => `<path d="M-14 -12H10Q14 -12 14 -8V10Q14 12 11 12H-14Z" fill="#6f4fa0" stroke="#4c3378" stroke-width="1.6"/><rect x="-11" y="-9" width="22" height="6" rx="1" fill="#e8d6ff"/><path d="M-14 12V8H11" fill="none" stroke="#fff6e0" stroke-width="2"/>`,
    astrolabe: () => `<circle r="14" fill="#e8c35c" stroke="#a8864c" stroke-width="2"/><circle r="9" fill="none" stroke="#a8864c" stroke-width="1.4"/><path d="M0 -14v-5" stroke="#a8864c" stroke-width="3" stroke-linecap="round"/><circle cy="-21" r="2.6" fill="none" stroke="#a8864c" stroke-width="1.6"/><path d="M-9 4L9 -4M0 -9V9" stroke="#a8864c" stroke-width="1.6"/>`,
    pin: () => `<path d="M0 12C-8 2 -9 -2 -9 -6A9 9 0 0 1 9 -6C9 -2 8 2 0 12Z" fill="#e2603f" stroke="#b24428" stroke-width="1.6"/><circle cy="-6" r="3.2" fill="#fff"/>`
  };
  const ICON_R = 30;
  /* a circle badge with an icon */
  const badge = (x, y, icon, tint = '#fff8e8') => `<g transform="translate(${f1(x)} ${f1(y)})"><circle r="${ICON_R}" fill="${tint}" stroke="#fff" stroke-width="3"/><circle r="${ICON_R}" fill="none" stroke="#d8c9a6" stroke-width="1.4"/>${I[icon]()}</g>`;

  /* ================= 1 · compassTown: the park in the middle, eight places around it (340 x 340) ================= */
  const TOWN = [
    { id: 'house', a: 0, ico: 'house', ar: 'المنزل', tint: '#fdeee0' },
    { id: 'mosque', a: 45, ico: 'mosque', ar: 'المسجد', tint: '#e4f4e8' },
    { id: 'school', a: 90, ico: 'school', ar: 'المدرسة', tint: '#fde4dc' },
    { id: 'hospital', a: 135, ico: 'hospital', ar: 'المستشفى', tint: '#e8f2fa' },
    { id: 'market', a: 180, ico: 'market', ar: 'السوق', tint: '#fdf0d4' },
    { id: 'bus', a: 225, ico: 'bus', ar: 'محطة الحافلات', tint: '#fdf3d0' },
    { id: 'museum', a: 270, ico: 'museum', ar: 'المتحف', tint: '#f5ead2' },
    { id: 'church', a: 315, ico: 'church', ar: 'الكنيسة', tint: '#f0eadf' }
  ];
  const TC = { x: 170, y: 172, r: 112 };
  const townPos = a => ({ x: TC.x + TC.r * Math.sin(a * Math.PI / 180), y: TC.y - TC.r * Math.cos(a * Math.PI / 180) });
  function compassTown(q) {
    const plain = !!(q && q.pic && q.pic.plain), P = townPos;
    let s = plain ? '' : `<rect width="340" height="340" rx="14" fill="#fbf6e6"/>`;
    /* the 8-point star */
    const star = (r1, r2, fill) => { let d = ''; for (let k = 0; k < 16; k++) { const a = k * 22.5 * Math.PI / 180, r = k % 2 ? r2 : r1; d += (k ? 'L' : 'M') + f1(TC.x + r * Math.sin(a)) + ' ' + f1(TC.y - r * Math.cos(a)); } return `<path d="${d}Z" fill="${fill}" stroke="#c9b98e" stroke-width="1.4" stroke-linejoin="round"/>`; };
    s += star(100, 34, '#f1e6c8') + `<path d="M${TC.x} ${TC.y - 100}V${TC.y + 100}M${TC.x - 100} ${TC.y}H${TC.x + 100}" stroke="#c9b98e" stroke-width="1.4" stroke-dasharray="3 5"/>`;
    s += `<circle cx="${TC.x}" cy="${TC.y}" r="40" fill="#bfe8c0" stroke="#fff" stroke-width="3"/>` + at(TC.x, TC.y - 4, 1.15, I.park()) + txt(TC.x, TC.y + 34, 'الحديقة', { fs: 11, halo: true });
    TOWN.forEach(p => { const { x, y } = P(p.a); s += badge(x, y, p.ico, p.tint) + txt(x, y + ICON_R + 12, p.ar, { fs: 11, halo: true }); });
    s += `<rect x="40" y="16" width="70" height="26" rx="13" fill="#fff" stroke="#c9b98e" stroke-width="1.4"/>` + txt(68, 34, 'الشمال', { fs: 11.5 }) + `<path d="M96 36V22M91 27l5 -6l5 6" fill="none" stroke="${INK}" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>`;
    if (!plain) TOWN.forEach(p => { const { x, y } = P(p.a); s += hot(p.id, p.ar, ringRect(x - 38, y - 36, 76, 84, 16)); });
    return wrap(340, 340, 'خريطة صغيرة: حديقة في الوسط وحولها ثمانية أماكن، والشمال إلى أعلى', s, plain);
  }
  compassTown.rings = () => TOWN.map(p => { const { x, y } = townPos(p.a); return { id: p.id, name: p.ar, x, y }; });

  /* ================= 2 · sunFacing: a child seen from above, facing the rising sun (340 x 260) ================= */
  function arrow(x1, y1, x2, y2, col = '#2f8fd0') {
    const a = Math.atan2(y2 - y1, x2 - x1), hx = 12, hy = 9, bx = x2 - Math.cos(a) * hx, by = y2 - Math.sin(a) * hx, nx = -Math.sin(a), ny = Math.cos(a);
    return `<path d="M${f1(x1)} ${f1(y1)}L${f1(bx)} ${f1(by)}" stroke="${col}" stroke-width="7" stroke-linecap="round"/><path d="M${f1(x2)} ${f1(y2)}L${f1(bx + nx * hy)} ${f1(by + ny * hy)}L${f1(bx - nx * hy)} ${f1(by - ny * hy)}Z" fill="${col}"/>`;
  }
  function sunFacing(q) {
    const plain = !!(q && q.pic && q.pic.plain);
    let s = plain ? '' : `<defs><linearGradient id="sfSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffd9a0"/><stop offset=".55" stop-color="#cfe8f6"/></linearGradient></defs><rect width="340" height="260" rx="14" fill="url(#sfSky)"/>`;
    s += `<rect y="96" width="340" height="164" fill="#bfe3a0"/><path d="M0 96Q85 82 170 96T340 96V104H0Z" fill="#a9d68a"/>`;
    let rays = ''; for (let k = 0; k < 14; k++) { const a = (k * 360 / 14) * Math.PI / 180; rays += `M${f1(170 + Math.cos(a) * 30)} ${f1(40 + Math.sin(a) * 30)}L${f1(170 + Math.cos(a) * 42)} ${f1(40 + Math.sin(a) * 42)}`; }
    s += `<path d="${rays}" stroke="#ffc83a" stroke-width="4" stroke-linecap="round"/><circle cx="170" cy="40" r="24" fill="#ffd24a" stroke="#f2b134" stroke-width="3"/>`;
    /* the child, from above: arms out to the sides, head with a nose pointing ahead */
    s += `<ellipse cx="170" cy="172" rx="52" ry="9" fill="#000" opacity=".08"/><path d="M118 168Q144 158 170 160Q196 158 222 168L222 178Q196 172 170 174Q144 172 118 178Z" fill="#7a5ec4" stroke="#5a3f9e" stroke-width="2.4" stroke-linejoin="round"/><ellipse cx="170" cy="168" rx="26" ry="14" fill="#7a5ec4" stroke="#5a3f9e" stroke-width="2.4"/><circle cx="170" cy="162" r="14" fill="#f1c9a0" stroke="#c99b6e" stroke-width="2"/><path d="M170 140l5 8h-10z" fill="#f1c9a0" stroke="#c99b6e" stroke-width="1.6" stroke-linejoin="round"/><path d="M158 158q12 -14 24 0" fill="#3a2a20" stroke="#3a2a20" stroke-width="2"/>`;
    s += arrow(170, 128, 170, 76) + arrow(170, 196, 170, 246) + arrow(214, 172, 302, 172) + arrow(126, 172, 38, 172);
    if (!plain) {
      s += hot('ahead', 'السهم الذي أمام الطفل', ringRect(146, 66, 48, 64)) + hot('behind', 'السهم الذي خلف الطفل', ringRect(146, 192, 48, 62))
        + hot('right', 'السهم الذي على يمين الطفل', ringRect(210, 142, 98, 60)) + hot('left', 'السهم الذي على يسار الطفل', ringRect(32, 142, 98, 60));
    }
    return wrap(340, 260, 'طفل يقف مواجهًا الشمس عند شروقها وحوله أربعة أسهم: أمامه وخلفه ويمينه ويساره', s, plain);
  }
  sunFacing.rings = () => ({ ahead: [146, 66, 48, 64], behind: [146, 192, 48, 62], right: [210, 142, 98, 60], left: [32, 142, 98, 60] });

  /* ================= 3 · schoolPlan: the plan of a school seen from above (340 x 290) ================= */
  const SP = {
    wall: [6, 6, 328, 276],
    classes: { x0: 68, y: 10, w: 44, h: 52, n: 6 },
    rooms: [
      { id: 'wc', x: 10, y: 10, w: 54, h: 44, fill: '#dcdcdc', ar: ['دورة', 'مياه'] },
      { id: 'art', x: 10, y: 58, w: 54, h: 46, fill: '#f7d56a', ar: ['التربية', 'الفنية'] },
      { id: 'media', x: 10, y: 108, w: 54, h: 46, fill: '#f7d56a', ar: ['الوسائط', 'التعليمية'] },
      { id: 'teachers', x: 10, y: 158, w: 54, h: 46, fill: '#8fc7ec', ar: ['غرفة', 'المعلمين'] },
      { id: 'principal', x: 10, y: 208, w: 54, h: 48, fill: '#8fc7ec', ar: ['غرفة', 'المدير'] }
    ],
    theatre: { x: 96, y: 78, w: 52, h: 60 }, library: { x: 96, y: 144, w: 52, h: 60 },
    playground: { x: 168, y: 78, w: 100, h: 130 }, garden: { x: 282, y: 78, w: 46, h: 84 },
    security: { x: 70, y: 232, w: 26, h: 40 }, gate: { x: 104, w: 36 }, exit: { x: 276, y: 238, w: 34 }
  };
  function schoolPlan(q) {
    const plain = !!(q && q.pic && q.pic.plain), c = SP.classes;
    let s = plain ? '' : `<rect width="340" height="290" rx="14" fill="#f7f1df"/>`;
    s += `<rect x="6" y="6" width="328" height="276" rx="6" fill="#fff4c9" stroke="#3a5c75" stroke-width="4"/>`;
    for (let k = 0; k < c.n; k++) s += `<rect x="${c.x0 + k * c.w}" y="${c.y}" width="${c.w - 2}" height="${c.h}" rx="3" fill="#fbe0e6" stroke="#c98a9a" stroke-width="1.6"/>` + txt(c.x0 + k * c.w + c.w / 2 - 1, c.y + 26, 'غرفة', { fs: 9.5 }) + txt(c.x0 + k * c.w + c.w / 2 - 1, c.y + 38, 'دراسة', { fs: 9.5 });
    SP.rooms.forEach(r => { s += `<rect x="${r.x}" y="${r.y}" width="${r.w}" height="${r.h}" rx="3" fill="${r.fill}" stroke="#3a5c75" stroke-width="1.6"/>` + txt(r.x + r.w / 2, r.y + r.h / 2 - 2, r.ar[0], { fs: 10 }) + txt(r.x + r.w / 2, r.y + r.h / 2 + 11, r.ar[1], { fs: 10 }); });
    const T = SP.theatre, L = SP.library, PG = SP.playground, GD = SP.garden, SC = SP.security;
    s += `<rect x="${T.x}" y="${T.y}" width="${T.w}" height="${T.h}" rx="3" fill="#f4a24c" stroke="#b86f1c" stroke-width="1.8"/>` + txt(T.x + T.w / 2, T.y + 28, 'مسرح', { fs: 10.5 }) + txt(T.x + T.w / 2, T.y + 42, 'المدرسة', { fs: 10.5 });
    s += `<rect x="${L.x}" y="${L.y}" width="${L.w}" height="${L.h}" rx="3" fill="#fffaf0" stroke="#3a5c75" stroke-width="1.8"/>` + txt(L.x + L.w / 2, L.y + 28, 'مكتبة', { fs: 10.5 }) + txt(L.x + L.w / 2, L.y + 42, 'المدرسة', { fs: 10.5 });
    s += `<rect x="${PG.x}" y="${PG.y}" width="${PG.w}" height="${PG.h}" rx="4" fill="#4f9f52" stroke="#fff" stroke-width="3"/><circle cx="${PG.x + PG.w / 2}" cy="${PG.y + PG.h / 2}" r="16" fill="none" stroke="#fff" stroke-width="2.4"/><path d="M${PG.x} ${PG.y + PG.h / 2}H${PG.x + PG.w}" stroke="#fff" stroke-width="2.4"/>` + txt(PG.x + PG.w / 2, PG.y + PG.h / 2 + 34, 'الملعب', { fs: 11, fill: '#fff' });
    s += `<rect x="${GD.x}" y="${GD.y}" width="${GD.w}" height="${GD.h}" rx="4" fill="#9bd642" stroke="#fff" stroke-width="3"/>` + txt(GD.x + GD.w / 2, GD.y + 36, 'حديقة', { fs: 10 }) + txt(GD.x + GD.w / 2, GD.y + 49, 'المدرسة', { fs: 10 });
    s += `<circle cx="196" cy="228" r="6" fill="none" stroke="${INK}" stroke-width="2"/><circle cx="196" cy="228" r="1.8" fill="${INK}"/>` + txt(196, 248, 'سارية العلم', { fs: 9.5 }) + txt(260, 226, 'فناء', { fs: 12, fill: '#b99b4a' });
    s += `<rect x="${SC.x}" y="${SC.y}" width="${SC.w}" height="${SC.h}" rx="3" fill="#e8e0d0" stroke="#3a5c75" stroke-width="1.6"/>` + txt(SC.x + SC.w / 2, SC.y + 18, 'الأمن', { fs: 9.5 });
    s += `<rect x="${SP.gate.x}" y="278" width="${SP.gate.w}" height="8" rx="2" fill="#fff4c9"/>` + `<path d="M${SP.gate.x} 282H${SP.gate.x + SP.gate.w}" stroke="#e2603f" stroke-width="4" stroke-dasharray="6 4"/>` + txt(SP.gate.x + SP.gate.w / 2, 264, 'باب المدرسة', { fs: 10, fill: '#c0392b' });
    s += `<rect x="${SP.exit.x}" y="278" width="${SP.exit.w}" height="8" rx="2" fill="#fff4c9"/><path d="M${SP.exit.x} 282H${SP.exit.x + SP.exit.w}" stroke="#2e9e6b" stroke-width="4" stroke-dasharray="6 4"/>` + txt(SP.exit.x + SP.exit.w / 2, 270, 'مخرج طوارئ', { fs: 9, fill: '#237047' });
    if (!plain) {
      const A = (id, name, x, y, w, h) => hot(id, name, ringRect(x, y, w, h, 6));
      s += A('gate', 'باب المدرسة', SP.gate.x - 4, 250, SP.gate.w + 8, 36) + A('security', 'غرفة الأمن', SC.x, SC.y, SC.w, SC.h) + A('library', 'مكتبة المدرسة', L.x, L.y, L.w, L.h) + A('theatre', 'مسرح المدرسة', T.x, T.y, T.w, T.h)
        + A('playground', 'ملعب المدرسة', PG.x, PG.y, PG.w, PG.h) + A('garden', 'حديقة المدرسة', GD.x, GD.y, GD.w, GD.h) + A('art', 'غرفة التربية الفنية', 10, 58, 54, 46) + A('teachers', 'غرفة المعلمين', 10, 158, 54, 46) + A('principal', 'غرفة مدير المدرسة', 10, 208, 54, 48);
    }
    return wrap(340, 290, 'مخطط مدرسة من الأعلى: غرف دراسة في الصف العلوي، وغرف الإدارة على اليسار، وفي الوسط المسرح والمكتبة والملعب والحديقة، وباب المدرسة في أسفل المخطط', s, plain);
  }

  /* ================= 4 · the map of Egypt (340 x 392): simple, from longitude and latitude ================= */
  const LON0 = 24.2, LAT0 = 31.9, KX = 24.5, MY = 54;
  const mx = lon => 8 + (lon - LON0) * KX, my = lat => MY + (LAT0 - lat) * KX;
  const poly = pts => pts.map(([lo, la], i) => (i ? 'L' : 'M') + f1(mx(lo)) + ' ' + f1(my(la))).join('') + 'Z';
  const line = pts => pts.map(([lo, la], i) => (i ? 'L' : 'M') + f1(mx(lo)) + ' ' + f1(my(la))).join('');
  const EGYPT = [[25.15, 31.57], [26.5, 31.5], [27.25, 31.35], [28.5, 30.95], [29.9, 31.2], [30.4, 31.5], [31.0, 31.6], [31.8, 31.5], [32.3, 31.28], [33.2, 31.1], [34.27, 31.23], [34.9, 29.5], [34.55, 28.5], [34.25, 27.75], [33.9, 28.2], [33.6, 28.8], [33.0, 29.6], [32.55, 29.95], [32.45, 29.6], [32.6, 29.1], [33.2, 28.2], [33.8, 27.25], [33.95, 26.7], [34.4, 26.0], [34.9, 25.1], [35.3, 24.2], [35.6, 23.5], [36.3, 22.8], [36.9, 22.0], [31.5, 22.0], [25.0, 22.0]];
  const NILE = [[32.9, 24.05], [32.65, 25.7], [32.7, 26.15], [31.7, 26.55], [31.2, 27.2], [30.8, 28.1], [31.1, 29.07], [31.25, 30.05]];
  const DELTA_R = [[31.25, 30.05], [30.9, 30.6], [30.4, 31.45]], DELTA_D = [[31.25, 30.05], [31.5, 30.7], [31.8, 31.5]];
  const CITIES = { cairo: { lo: 31.25, la: 30.05, ar: 'القاهرة', dx: -8, dy: -8, anchor: 'end', cap: true }, sohag: { lo: 31.7, la: 26.55, ar: 'سوهاج', dx: -8, dy: 4, anchor: 'end' }, aswan: { lo: 32.9, la: 24.09, ar: 'أسوان', dx: 8, dy: 4, anchor: 'start' }, hurghada: { lo: 33.8, la: 27.25, ar: 'الغردقة', dx: 8, dy: 4, anchor: 'start' } };
  const KEY = [['#c58d52', 'مناطق مرتفعة'], ['#f6ecae', 'مناطق متوسطة الارتفاع'], ['#b8dc8f', 'مناطق قليلة الارتفاع'], ['#5fb36b', 'مناطق تحت مستوى سطح البحر']];
  function egyptMap(q, mode) {
    const plain = !!(q && q.pic && q.pic.plain);
    let s = plain ? '' : `<rect width="340" height="440" rx="14" fill="${PAPER}"/>`;
    s += `<rect x="6" y="${MY - 12}" width="328" height="270" rx="6" fill="#cfeaf8" stroke="#3a5c75" stroke-width="2.4"/>`;
    s += `<clipPath id="egClip"><path d="${poly(EGYPT)}"/></clipPath><path d="${poly(EGYPT)}" fill="#f6ecae" stroke="#8a6a3a" stroke-width="1.8" stroke-linejoin="round"/>`;
    /* heights, coloured like the key */
    s += `<g clip-path="url(#egClip)">`
      + `<path d="${poly([[25.0, 31.6], [29.5, 31.5], [31.5, 31.7], [31.5, 30.6], [29.3, 30.9], [27, 30.7], [25, 31.0]])}" fill="#b8dc8f"/>`
      + `<path d="${poly([[34.9, 29.5], [34.55, 28.5], [34.25, 27.75], [33.9, 28.2], [33.6, 28.8], [33.0, 29.6], [33.6, 29.85], [34.3, 29.9]])}" fill="#c58d52"/>`
      + `<path d="${poly([[32.6, 27.9], [33.8, 27.3], [34.4, 26.0], [34.9, 25.1], [35.4, 24.0], [36.2, 22.6], [36.9, 22.0], [35.2, 22.0], [34.3, 23.2], [33.5, 24.6], [32.8, 26.2], [32.4, 27.4]])}" fill="#c58d52"/>`
      + `<path d="${poly([[25.0, 22.0], [26.8, 22.0], [26.9, 23.4], [26.0, 24.0], [25.0, 23.8]])}" fill="#c58d52"/>`
      + `<ellipse cx="${f1(mx(27.7))}" cy="${f1(my(29.9))}" rx="${f1(KX * 1.2)}" ry="${f1(KX * .3)}" fill="#5fb36b"/>`
      + `<path d="${line(NILE.concat([[31.25, 30.05]]))}" fill="none" stroke="#b8dc8f" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>`
      + `<path d="${poly([[30.2, 31.5], [31.9, 31.55], [31.4, 30.4], [30.9, 30.1]])}" fill="#b8dc8f"/></g>`;
    s += `<path d="${poly([[32.88, 23.97], [32.55, 23.4], [32.7, 22.7], [31.9, 22.1], [31.4, 22.05], [31.7, 22.7], [32.2, 23.3]])}" fill="#8fd3ee" stroke="#2f8fd0" stroke-width="1.4"/>`;
    s += `<path d="${line(NILE)}" fill="none" stroke="#2f8fd0" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/><path d="${line(DELTA_R)}M${f1(mx(DELTA_D[0][0]))} ${f1(my(DELTA_D[0][1]))}${DELTA_D.slice(1).map(([lo, la]) => 'L' + f1(mx(lo)) + ' ' + f1(my(la))).join('')}" fill="none" stroke="#2f8fd0" stroke-width="2" stroke-linecap="round"/>`;
    s += `<path d="${line([[32.3, 31.27], [32.45, 30.5], [32.55, 29.97]])}" fill="none" stroke="#2f8fd0" stroke-width="2" stroke-dasharray="1 0"/>`;
    s += `<path d="${poly(EGYPT)}" fill="none" stroke="#c0392b" stroke-width="1.4" stroke-dasharray="6 3 1.5 3" opacity=".85"/>`;
    /* names of seas and neighbours */
    s += txt(mx(28.8), MY + 6, 'البحر المتوسط', { fs: 11, fill: '#2f6f9f' }) + txt(mx(35.9), my(25.3), 'البحر الأحمر', { fs: 11, fill: '#2f6f9f', rot: 62 }) + txt(mx(24.9) + 6, my(26.5), 'ليبيا', { fs: 10, fill: '#8a6a3a', anchor: 'start' }) + txt(mx(28.5), my(21.75), 'السودان', { fs: 10, fill: '#8a6a3a' }) + txt(mx(34.7), my(31.6), 'فلسطين', { fs: 9, fill: '#8a6a3a' });
    s += txt(mx(30.35), my(27.85), 'نهر النيل', { fs: 10, fill: '#1f6f9f', rot: -78, halo: true });
    /* cities */
    Object.entries(CITIES).forEach(([id, c]) => {
      const x = mx(c.lo), y = my(c.la);
      s += c.cap ? `<rect x="${f1(x - 4.5)}" y="${f1(y - 4.5)}" width="9" height="9" fill="#e2273a" stroke="#fff" stroke-width="1.4"/>` : `<circle cx="${f1(x)}" cy="${f1(y)}" r="4" fill="#222" stroke="#fff" stroke-width="1.4"/>`;
      s += txt(x + c.dx, y + c.dy, c.ar, { fs: 11, anchor: c.anchor, halo: true });
    });
    /* the title, the compass rose, the scale and the key: the four parts of a map */
    s += txt(170, 30, 'خريطة جمهورية مصر العربية', { fs: 15 });
    const RX = 306, RY = 98;
    s += `<g transform="translate(${RX} ${RY})"><path d="M0 -22L5 -5L22 0L5 5L0 22L-5 5L-22 0L-5 -5Z" fill="#fff" stroke="${INK}" stroke-width="1.6" stroke-linejoin="round"/><path d="M0 -22L5 -5L0 0L-5 -5Z" fill="${INK}"/>${txt(0, -27, 'ش', { fs: 11 })}</g>`;
    const SX = 224, SY = 414, U = 22;
    s += `<path d="M${SX} ${SY - 8}V${SY}H${SX + 2 * U}V${SY - 8}M${SX + U} ${SY - 4}V${SY}" fill="none" stroke="${INK}" stroke-width="2"/><rect x="${SX}" y="${SY - 4}" width="${U}" height="4" fill="${INK}"/>` + txt(SX, SY + 13, '0', { fs: 9.5 }) + txt(SX + U, SY + 13, '100', { fs: 9.5 }) + txt(SX + 2 * U, SY + 13, '200', { fs: 9.5 }) + txt(SX + 2 * U + 22, SY + 13, 'كم', { fs: 9.5 });
    const KY = 336;
    s += `<rect x="10" y="${KY - 12}" width="190" height="${KEY.length * 17 + 4 + 40}" rx="8" fill="#fff" stroke="#3a5c75" stroke-width="1.8"/>`;
    KEY.forEach(([c, l], i) => { s += `<rect x="18" y="${KY + i * 17 - 6}" width="22" height="11" fill="${c}" stroke="#8a6a3a" stroke-width=".8"/>` + txt(48, KY + i * 17 + 3, l, { fs: 10, anchor: 'start' }); });
    const ky2 = KY + KEY.length * 17;
    s += `<path d="M18 ${ky2 - 2}q5 -6 10 0t10 0" fill="none" stroke="#2f8fd0" stroke-width="2.2"/>` + txt(48, ky2 + 2, 'نهر النيل', { fs: 10, anchor: 'start' }) + `<rect x="110" y="${ky2 - 6}" width="22" height="11" fill="#cfeaf8" stroke="#2f8fd0" stroke-width=".8"/>` + txt(138, ky2 + 3, 'بحار', { fs: 10, anchor: 'start' });
    s += `<rect x="18" y="${ky2 + 8}" width="9" height="9" fill="#e2273a"/>` + txt(48, ky2 + 16, 'العاصمة', { fs: 10, anchor: 'start' }) + `<circle cx="113" cy="${ky2 + 12.5}" r="4" fill="#222"/>` + txt(138, ky2 + 16, 'مدينة', { fs: 10, anchor: 'start' });
    if (!plain) {
      if (mode === 'parts') s += hot('title', 'عنوان الخريطة', ringRect(40, 8, 260, 30, 10)) + hot('rose', 'وردة بوصلة', ringEl(RX, RY, 32, 36)) + hot('key', 'مربع الألوان والرموز في أسفل الخريطة', ringRect(8, KY - 14, 194, 108, 10)) + hot('scale', 'الخط المدرّج في أسفل الخريطة', ringRect(SX - 12, SY - 18, 2 * U + 58, 36, 8));
      else Object.entries(CITIES).forEach(([id, c]) => { s += hot(id, c.ar, ringEl(mx(c.lo), my(c.la), 26, 20)); });
    }
    return wrap(340, 440, 'خريطة مبسطة لجمهورية مصر العربية بألوانها ومفتاحها ومقياس رسمها ووردة البوصلة', s, plain);
  }
  const mapParts = q => egyptMap(q, 'parts'), mapCities = q => egyptMap(q, 'cities');
  mapCities.at = id => ({ x: mx(CITIES[id].lo), y: my(CITIES[id].la), name: CITIES[id].ar });
  mapParts.rings = () => ({ title: [40, 8, 260, 30], rose: [274, 62, 64, 72], key: [8, 322, 194, 108], scale: [212, 396, 102, 36] });

  /* ================= 5 · pathPlans: three routes from the house to the park (340 x 262) ================= */
  const PANELS = [
    { id: 'p1', x: 232, hx: 52, tint: '#e3f1fb', title: 'المخطط الأول', len: '650 م', d: 'M52 186C14 170 12 150 40 140S96 128 74 112S34 100 54 82', marks: [[22, 168, 'school'], [88, 126, 'shop'], [28, 108, 'light']] },
    { id: 'p2', x: 118, hx: 36, tint: '#e8f6e0', title: 'المخطط الثاني', len: '500 م', d: 'M36 190L72 76', marks: [[70, 144, 'library']] },
    { id: 'p3', x: 4, hx: 32, tint: '#fde8ee', title: 'المخطط الثالث', len: '1000 م', d: 'M32 188V158H78V130H40V104H74V84', marks: [[20, 140, 'mosque'], [86, 168, 'school'], [22, 92, 'library'], [88, 108, 'light']], repair: [58, 144] }
  ];
  function pathPlans(q) {
    const plain = !!(q && q.pic && q.pic.plain);
    let s = plain ? '' : `<rect width="340" height="262" rx="14" fill="#fbf6e6"/>`;
    PANELS.forEach(p => {
      s += `<g transform="translate(${p.x} 4)"><rect width="104" height="254" rx="12" fill="${p.tint}" stroke="#fff" stroke-width="3"/>` + txt(52, 20, p.title, { fs: 11.5 });
      s += at(52, 56, .95, I.park()) + at(p.hx, 216, .95, I.house());
      s += `<path d="${p.d}" fill="none" stroke="#5a6672" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/><path d="${p.d}" fill="none" stroke="#fff" stroke-width="1.8" stroke-dasharray="5 5" stroke-linecap="round" stroke-linejoin="round"/>`;
      p.marks.forEach(([x, y, ic]) => { s += at(x, y, .62, `<circle r="20" fill="#fff" opacity=".9"/>` + I[ic]()); });
      if (p.repair) s += at(p.repair[0], p.repair[1], 1, `<circle r="8" fill="#e2273a" stroke="#fff" stroke-width="2"/><path d="M-4 0H4" stroke="#fff" stroke-width="2.4"/>`);
      s += txt(52, 244, p.len, { fs: 12 }) + '</g>';
    });
    if (!plain) PANELS.forEach(p => { s += hot(p.id, p.title, ringRect(p.x, 4, 104, 254, 12)); });
    return wrap(340, 262, 'ثلاثة مخططات لطرق مختلفة من البيت إلى الحديقة، لكل طريق طوله وعدد معالمه', s, plain);
  }
  pathPlans.rings = () => PANELS.map(p => ({ id: p.id, name: p.title, x: p.x, y: 4, w: 104, h: 254 }));

  /* ================= 6 · skyViews: a plane and a satellite (340 x 250) ================= */
  function skyViews(q) {
    const plain = !!(q && q.pic && q.pic.plain);
    let s = plain ? '' : `<rect width="340" height="250" rx="14" fill="#fbf6e6"/>`;
    /* left: a plane close to the ground, a narrow view */
    s += `<g><rect x="6" y="6" width="160" height="238" rx="12" fill="#cfe8f6"/><rect x="6" y="196" width="160" height="48" rx="0" fill="#8fd08a"/><path d="M6 196H166" stroke="#5aa862" stroke-width="3"/>`
      + `<path d="M86 92L60 196H112Z" fill="#fff" opacity=".55"/><path d="M86 92L60 196M86 92L112 196" stroke="#f2b134" stroke-width="2" stroke-dasharray="5 4"/><rect x="60" y="192" width="52" height="8" rx="3" fill="#ffd24a" opacity=".8"/>`
      + `<g transform="translate(86 74)"><path d="M-30 4Q0 -6 30 4L26 10Q0 4 -26 10Z" fill="#fff" stroke="#8aa5b8" stroke-width="2" stroke-linejoin="round"/><path d="M-4 -2L-26 -22L-18 -22L8 -2ZM-4 8L-26 28L-18 28L8 8Z" fill="#e8eef3" stroke="#8aa5b8" stroke-width="2" stroke-linejoin="round"/><path d="M26 6L36 -6L40 -6L34 6Z" fill="#e2603f"/></g>`
      + at(36, 226, .7, I.house()) + at(136, 226, .7, I.house()) + `</g>`;
    /* right: a satellite in space, a wide view of the earth below */
    s += `<g><rect x="174" y="6" width="160" height="238" rx="12" fill="#1b2b4d"/>`
      + [[190, 24], [226, 50], [300, 28], [318, 70], [204, 90], [286, 100], [330, 120]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1.8" fill="#fff" opacity=".85"/>`).join('')
      + `<path d="M174 244V200Q254 172 334 200V244Z" fill="#5aa8d8"/><path d="M200 206q18 -8 30 4q-10 10 -30 -4zM270 198q22 -4 36 8q-16 8 -36 -8z" fill="#8fd08a"/>`
      + `<path d="M254 82L196 198H312Z" fill="#fff" opacity=".28"/><path d="M254 82L196 198M254 82L312 198" stroke="#f2b134" stroke-width="2" stroke-dasharray="5 4"/>`
      + `<g transform="translate(254 62)"><rect x="-8" y="-9" width="16" height="18" rx="3" fill="#cfd8e0" stroke="#8aa5b8" stroke-width="2"/><rect x="-44" y="-7" width="30" height="14" fill="#3d6fd0" stroke="#fff" stroke-width="1.6"/><rect x="14" y="-7" width="30" height="14" fill="#3d6fd0" stroke="#fff" stroke-width="1.6"/><path d="M-36 -7v14M-28 -7v14M-20 -7v14M20 -7v14M28 -7v14M36 -7v14" stroke="#fff" stroke-width="1"/><circle cy="12" r="4" fill="#f2b134"/></g></g>`;
    if (!plain) s += hot('plane', 'الطائرة وما تغطيه تحتها', ringRect(6, 6, 160, 238, 12)) + hot('satellite', 'القمر الصناعي وما يغطيه تحته', ringRect(174, 6, 160, 238, 12));
    return wrap(340, 250, 'طائرة قريبة من سطح الأرض تغطي مساحة صغيرة، وقمر صناعي في الفضاء يغطي مساحة أوسع', s, plain);
  }
  skyViews.rings = () => ({ plane: [6, 6, 160, 238], satellite: [174, 6, 160, 238] });

  /* ================= 7 · mapKinds: a hand-drawn map and a map on a phone (340 x 250) ================= */
  function mapKinds(q) {
    const plain = !!(q && q.pic && q.pic.plain);
    let s = plain ? '' : `<rect width="340" height="250" rx="14" fill="#fbf6e6"/>`;
    s += `<g transform="rotate(-3 86 124)"><rect x="12" y="22" width="150" height="196" rx="4" fill="#f4ecd6" stroke="#c9b98e" stroke-width="2"/>`
      + `<path d="M26 60q30 -14 60 4t60 -6M30 100q24 12 52 -2t64 8M40 60q-6 40 10 84t-4 60M120 70q10 30 -4 62t14 70" fill="none" stroke="#7a7a7a" stroke-width="2.4" stroke-linecap="round" stroke-dasharray="1 0"/>`
      + `<path d="M60 142q22 -10 48 4" fill="none" stroke="#9a9a9a" stroke-width="1.6"/>` + `<rect x="64" y="108" width="26" height="18" fill="none" stroke="#7a7a7a" stroke-width="2"/><circle cx="124" cy="176" r="9" fill="none" stroke="#7a7a7a" stroke-width="2"/></g>`
      + `<g transform="translate(138 182) rotate(35)"><rect x="-6" y="-40" width="12" height="52" fill="#f2b134" stroke="#c98a14" stroke-width="1.6"/><path d="M-6 12L0 26L6 12Z" fill="#f1c9a0" stroke="#c99b6e" stroke-width="1.4"/><path d="M-2 21L0 26L2 21Z" fill="#3a2a20"/><rect x="-6" y="-48" width="12" height="9" rx="2" fill="#e2603f"/></g>`;
    s += `<rect x="198" y="8" width="104" height="234" rx="16" fill="#2a3340"/><rect x="204" y="20" width="92" height="210" rx="8" fill="#eef3f6"/><circle cx="250" cy="14" r="2" fill="#555"/>`
      + `<path d="M204 70H296M204 120H296M204 170H296M236 20V230M270 20V230" stroke="#fff" stroke-width="6"/><path d="M204 70H296M204 120H296M204 170H296M236 20V230M270 20V230" stroke="#d5dde3" stroke-width="1.4"/>`
      + `<rect x="212" y="30" width="22" height="34" rx="4" fill="#cfe9c6"/><rect x="274" y="126" width="18" height="38" rx="4" fill="#cfe9c6"/><path d="M296 176l-30 30" stroke="#8fd3ee" stroke-width="8"/>`
      + `<path d="M270 200V120H236V70" fill="none" stroke="#2f6fd0" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>` + at(236, 64, 1, I.pin()) + `<circle cx="270" cy="204" r="7" fill="#2f6fd0" stroke="#fff" stroke-width="2.4"/>`;
    if (!plain) s += hot('hand', 'خريطة مرسومة بقلم الرصاص على ورقة', ringRect(8, 8, 160, 236, 12)) + hot('digital', 'خريطة تظهر على شاشة هاتف', ringRect(190, 4, 120, 242, 18));
    return wrap(340, 250, 'خريطتان: واحدة مرسومة باليد على ورقة، وأخرى على شاشة هاتف ذكي', s, plain);
  }
  mapKinds.rings = () => ({ hand: [8, 8, 160, 236], digital: [190, 4, 120, 242] });

  /* ================= 8 · sourceCards: three source cards in a row (340 x 150) ================= */
  const SRC = { p: { id: 'papyrus', ico: 'papyrus', ar: ['بردية من', 'ورق البردي'], tint: '#fdf0d4' }, c: { id: 'carving', ico: 'carving', ar: ['نقش على', 'جدار معبد'], tint: '#f5ead2' }, a: { id: 'article', ico: 'article', ar: ['مقال في', 'جريدة'], tint: '#e8f2fa' }, b: { id: 'book', ico: 'book', ar: ['موسوعة', 'عن مصر القديمة'], tint: '#efe4fa' } };
  function sourceCards(q) {
    const plain = !!(q && q.pic && q.pic.plain), set = String((q && q.pic && q.pic.set) || 'pca').split('');
    let s = plain ? '' : `<rect width="340" height="150" rx="14" fill="#fbf6e6"/>`;
    set.forEach((k, i) => { const c = SRC[k], x = 8 + i * 112; s += `<g transform="translate(${x} 8)"><rect width="104" height="134" rx="12" fill="${c.tint}" stroke="#fff" stroke-width="3"/>` + at(52, 54, 1.7, I[c.ico]()) + txt(52, 104, c.ar[0], { fs: 11 }) + txt(52, 119, c.ar[1], { fs: 11 }) + '</g>'; });
    if (!plain) set.forEach((k, i) => { const c = SRC[k]; s += hot(c.id, c.ar.join(' '), ringRect(8 + i * 112, 8, 104, 134, 12)); });
    return wrap(340, 150, 'ثلاث بطاقات لمصادر معلومات: ' + set.map(k => SRC[k].ar.join(' ')).join('، '), s, plain);
  }

  /* ---------- a compass for the map and the game ---------- */
  const compass = (r = 40) => `<circle r="${r}" fill="#fff6dc" stroke="#a8864c" stroke-width="${f1(r / 9)}"/><circle r="${f1(r * .82)}" fill="none" stroke="#a8864c" stroke-width="1.4" stroke-dasharray="2 4"/><path d="M0 ${-r * .75}L${r * .16} 0L0 ${r * .75}L${-r * .16} 0Z" fill="#cfd8e0" stroke="#8aa5b8" stroke-width="1.4"/><path d="M0 ${-r * .75}L${r * .16} 0L${-r * .16} 0Z" fill="#e2273a"/><circle r="${f1(r * .07)}" fill="#3a5c75"/>`;

  window.CH_DIAGRAMS = Object.assign(window.CH_DIAGRAMS || {}, { compassTown, sunFacing, schoolPlan, mapParts, mapCities, pathPlans, skyViews, mapKinds, sourceCards });
  window.S4ART = { I, icon: I, badge, at, txt, hot, ringRect, ringEl, compass, townPos, TOWN, TC, mx, my, EGYPT, CITIES, KEY, PANELS, SP, arrow, INK, PAPER, f1, esc };
})();
