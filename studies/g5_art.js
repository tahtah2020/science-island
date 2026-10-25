/* Social Studies · Grade 5 pictures, drawn in code (CH_DIAGRAMS). Nothing is copied from the school book: every map and block diagram is drawn here with simple shapes.
   Used by q.fig (a picture above a question), q.diagram + q.pic (tap), and by the game studies-egypt.html (pic.plain = the inner markup only, no frame and no tap rings).
   Unit 1 «مصر موقع متميز وطبيعة متنوعة»:
     globeGrid     (tap) ids equator · cancer · capricorn · arctic · antarctic · greenwich      a flat world map with its grid; the lines carry degrees only, never names; Egypt is the red square
     egyptGrid     (fig) no tap targets                                                          Egypt with its longitude and latitude lines, the Tropic of Cancer, Cairo, Aswan, Alexandria
     egyptRegions  (tap) ids delta · valley · fayoum · west · east · sinai                       Egypt in four colours: the Nile unit (delta, valley, Fayoum), the Western Desert, the Eastern Desert, Sinai; no unit is named
     reliefForces  (tap) ids fault · fold                                                        two block diagrams of the ground: one broken and shifted, one bent into waves
     climateMap    (tap) ids med · desert                                                         Egypt in two colours: a narrow green strip on the north coast (Mediterranean region) and yellow for the rest (hot desert region), with five cities; no region is named
     sunRays       (tap) ids rayEq1 · rayS · rayN · rayEq2                                         four Earths, each with an arrow (a sun ray) falling straight on one latitude circle: equator, Tropic of Capricorn, Tropic of Cancer, equator; no season or date is written
     dunes         (fig) no tap targets                                                          sand dunes under the sun, no wind arrows, so the picture never gives the answer
     habitats      (tap) ids envNile · envDesert · envCoast                                       three stacked scenes: a canal bank (papyrus, reeds, white bird), a desert (aloe, prickly pear, palm, camel), a coast (fig tree, mangrove, gull); no word
   Unit 2 «الحضارة المصرية القديمة» (the owner's pictures, 25 Oct 2026, studies/assets/civ_*.jpg, 16 px cropped on every side to remove the generator's corner mark, no captions):
     civEarly   (tap) ids axe · mudbrick · chisel · bardi · nileriver · narmer          a stone tool, a mud-brick house, a metal chisel, a green plant, a river with palms, a carved stone slab
     civGreat   (tap) ids steppyr · khufu · sphinx · lahun · theater · qamh              a step pyramid, a smooth pyramid, a lion with a king's head, a dam with arches, a half-round theatre, an ear of grain
     Six round photos, three on top and three below, in a 340 x 250 card; q.pic.plain = the inner markup only (games).
   Texts are Arabic (the book is Arabic for both tracks). Screen-reader names describe the picture, never the answer.
   window.S5ART = the pieces the game and the map script reuse. */
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
  const path = pts => pts.map(([x, y], i) => (i ? 'L' : 'M') + f1(x) + ' ' + f1(y)).join('');

  /* ================= 1 · the world grid (340 x 300): longitude 0.9 px per degree, latitude 1.4 px per degree ================= */
  const GX = lon => 8 + (lon + 180) * 0.9, GY = lat => 150 - lat * 1.4;
  const LAND = {
    namerica: [[-168, 66], [-140, 70], [-100, 72], [-80, 70], [-60, 60], [-55, 50], [-67, 45], [-75, 38], [-81, 31], [-80, 25], [-90, 29], [-97, 26], [-97, 20], [-90, 21], [-87, 16], [-83, 9], [-78, 8], [-85, 11], [-92, 15], [-105, 20], [-110, 24], [-117, 32], [-124, 40], [-125, 50], [-135, 58], [-148, 60], [-165, 60]],
    samerica: [[-78, 8], [-72, 12], [-62, 10], [-50, 0], [-35, -6], [-39, -15], [-48, -26], [-58, -38], [-65, -42], [-68, -52], [-72, -50], [-74, -40], [-71, -20], [-76, -14], [-81, -6], [-80, 0]],
    africa: [[-17, 21], [-17, 15], [-10, 6], [0, 5], [9, 4], [10, -3], [13, -12], [12, -17], [15, -27], [18, -34], [25, -34], [32, -28], [35, -22], [40, -15], [40, -5], [51, 11], [43, 12], [38, 18], [34, 27], [32, 31], [25, 32], [20, 31], [10, 34], [10, 37], [0, 36], [-6, 36], [-10, 30]],
    eurasia: [[-10, 36], [-9, 43], [-5, 48], [5, 52], [10, 57], [5, 62], [15, 69], [30, 71], [60, 70], [100, 77], [140, 72], [170, 68], [180, 65], [160, 60], [140, 52], [135, 43], [122, 38], [122, 30], [120, 22], [108, 18], [105, 9], [100, 13], [98, 8], [103, 1], [95, 16], [90, 22], [80, 15], [77, 8], [72, 20], [67, 25], [57, 25], [56, 26], [50, 30], [48, 29], [52, 16], [43, 13], [35, 28], [34, 31], [35, 36], [27, 37], [26, 40], [23, 37], [19, 41], [15, 38], [12, 44], [3, 43], [-1, 37]],
    australia: [[114, -22], [122, -18], [131, -12], [137, -12], [142, -11], [146, -19], [153, -27], [150, -37], [141, -38], [130, -32], [115, -34]],
    antarctica: [[-180, -72], [-120, -75], [-60, -70], [0, -70], [60, -68], [120, -66], [180, -72], [180, -90], [-180, -90]]
  };
  const GLINES = [['equator', 0, '0°', '#e2603f', ''], ['cancer', 23.5, '23.5° ش', '#d98b1f', '5 3'], ['capricorn', -23.5, '23.5° ج', '#d98b1f', '5 3'], ['arctic', 66.5, '66.5° ش', '#5b72c0', '5 3'], ['antarctic', -66.5, '66.5° ج', '#5b72c0', '5 3']];
  const GNAME = { equator: 'خط أفقي في منتصف الخريطة', cancer: 'خط أفقي فوق المنتصف يمر بجنوب مصر', capricorn: 'خط أفقي تحت المنتصف', arctic: 'خط أفقي قرب أعلى الخريطة', antarctic: 'خط أفقي قرب أسفل الخريطة', greenwich: 'خط رأسي في منتصف الخريطة' };
  function globeGrid(q) {
    const plain = !!(q && q.pic && q.pic.plain);
    let s = plain ? '' : `<rect width="340" height="300" rx="14" fill="${PAPER}"/>`;
    s += `<rect x="8" y="24" width="324" height="252" rx="4" fill="#cfe8f6" stroke="#3a5c75" stroke-width="2"/>`;
    Object.values(LAND).forEach(p => { s += `<path d="${path(p.map(([lo, la]) => [GX(lo), GY(la)]))}Z" fill="#bfdc8e" stroke="#9bbf6a" stroke-width="1" stroke-linejoin="round"/>`; });
    for (let lo = -150; lo <= 150; lo += 30) {
      if (lo === 0) continue;
      s += `<path d="M${f1(GX(lo))} 24V276" stroke="#6f93a8" stroke-width=".9" stroke-dasharray="2 3" opacity=".8"/>` + txt(GX(lo), 289, Math.abs(lo) + '°' + (lo < 0 ? ' غ' : ' ق'), { fs: 8.5, w: 700, fill: '#3a5c75' });
    }
    s += `<path d="M${f1(GX(0))} 24V276" stroke="#e0307a" stroke-width="2"/>` + txt(GX(0), 289, '0°', { fs: 8.5, w: 800, fill: '#e0307a' });
    GLINES.forEach(([id, la, lab, col, dash]) => {
      s += `<path d="M8 ${f1(GY(la))}H332" stroke="${col}" stroke-width="${id === 'equator' ? 2 : 1.6}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>` + txt(12, GY(la) - 3, lab, { fs: 8.5, w: 800, anchor: 'start', fill: col, halo: true });
    });
    s += `<rect x="${f1(GX(25))}" y="${f1(GY(31.6))}" width="${f1(GX(37) - GX(25))}" height="${f1(GY(22) - GY(31.6))}" fill="#e2273a" stroke="#fff" stroke-width="1"/>` + txt(GX(31) + 12, GY(31.6) - 5, 'مصر', { fs: 10, anchor: 'start', fill: '#b3202e', halo: true });
    if (!plain) {
      ['equator', 'cancer', 'capricorn', 'arctic', 'antarctic'].forEach(id => { const la = GLINES.find(g => g[0] === id)[1]; s += hot(id, GNAME[id], ringRect(8, GY(la) - 12, 324, 24, 6)); });
      s += hot('greenwich', GNAME.greenwich, ringRect(GX(0) - 12, 24, 24, 252, 6));
    }
    return wrap(340, 300, 'خريطة للعالم عليها شبكة من الخطوط الأفقية والرأسية، وتظهر مصر مربعًا أحمر فوق المنتصف بقليل', s, plain);
  }
  globeGrid.lines = () => GLINES.map(([id, la]) => ({ id, y: GY(la) }));

  /* ================= 2 · Egypt from longitude and latitude (340 x 300) ================= */
  const LON0 = 24.2, LAT0 = 32.2, KX = 24.5, MY = 26;
  const mx = lon => 8 + (lon - LON0) * KX, my = lat => MY + (LAT0 - lat) * KX;
  const poly = pts => pts.map(([lo, la], i) => (i ? 'L' : 'M') + f1(mx(lo)) + ' ' + f1(my(la))).join('') + 'Z';
  const line = pts => pts.map(([lo, la], i) => (i ? 'L' : 'M') + f1(mx(lo)) + ' ' + f1(my(la))).join('');
  const EGYPT = [[25.15, 31.57], [26.5, 31.5], [27.25, 31.35], [28.5, 30.95], [29.9, 31.2], [30.4, 31.5], [31.0, 31.6], [31.8, 31.5], [32.3, 31.28], [33.2, 31.1], [34.27, 31.23], [34.9, 29.5], [34.55, 28.5], [34.25, 27.75], [33.9, 28.2], [33.6, 28.8], [33.0, 29.6], [32.55, 29.95], [32.45, 29.6], [32.6, 29.1], [33.2, 28.2], [33.8, 27.25], [33.95, 26.7], [34.4, 26.0], [34.9, 25.1], [35.3, 24.2], [35.6, 23.5], [36.3, 22.8], [36.9, 22.0], [31.5, 22.0], [25.0, 22.0]];
  const NILE = [[32.9, 24.05], [32.65, 25.7], [32.7, 26.15], [31.7, 26.55], [31.2, 27.2], [30.8, 28.1], [31.1, 29.07], [31.25, 30.05]];
  const DELTA_R = [[31.25, 30.05], [30.9, 30.6], [30.4, 31.45]], DELTA_D = [[31.25, 30.05], [31.5, 30.7], [31.8, 31.5]];
  const DELTA = [[31.25, 30.05], [29.9, 30.7], [29.7, 31.7], [32.6, 31.7], [32.4, 30.9], [31.6, 30.1]];
  const SINAI = [[32.3, 31.5], [34.5, 31.5], [34.9, 29.5], [34.55, 28.5], [34.25, 27.75], [33.9, 28.2], [33.6, 28.8], [33.0, 29.6], [32.55, 29.95], [32.4, 30.5]];
  const WEST = [[24.9, 22.0], [24.9, 31.7], [29.7, 31.7], [29.7, 30.7], [31.05, 30.0]].concat(NILE.slice().reverse().slice(1)).concat([[32.9, 22.0]]);
  const EAST = [[31.25, 30.05], [32.55, 29.95], [32.45, 29.6], [32.6, 29.1], [33.2, 28.2], [33.8, 27.25], [33.95, 26.7], [34.4, 26.0], [34.9, 25.1], [35.3, 24.2], [35.6, 23.5], [36.3, 22.8], [37.0, 22.0], [32.9, 22.0]].concat(NILE.slice(0, -1));
  const CAIRO = [31.25, 30.05];

  function egyptBase(s, fill) {
    return s + `<clipPath id="eg5Clip"><path d="${poly(EGYPT)}"/></clipPath><path d="${poly(EGYPT)}" fill="${fill}" stroke="#8a6a3a" stroke-width="1.8" stroke-linejoin="round"/>`;
  }
  function egyptGrid(q) {
    const plain = !!(q && q.pic && q.pic.plain);
    let s = plain ? '' : `<rect width="340" height="300" rx="14" fill="${PAPER}"/>`;
    s += `<rect x="8" y="${MY - 6}" width="324" height="262" rx="6" fill="#cfeaf8" stroke="#3a5c75" stroke-width="2"/>`;
    s = egyptBase(s, '#f8e6b4');
    for (let lo = 26; lo <= 36; lo += 2) s += `<path d="M${f1(mx(lo))} ${MY - 6}V${MY + 256}" stroke="#6f93a8" stroke-width=".8" stroke-dasharray="2 3"/>` + txt(mx(lo), MY + 268, lo + '° ق', { fs: 8.5, w: 700, fill: '#3a5c75' });
    for (let la = 24; la <= 30; la += 2) s += `<path d="M8 ${f1(my(la))}H332" stroke="#6f93a8" stroke-width=".8" stroke-dasharray="2 3"/>` + txt(11, my(la) - 2, la + '° ش', { fs: 8.5, w: 700, anchor: 'start', fill: '#3a5c75' });
    s += txt(mx(25), MY - 10, '25° ق', { fs: 9, w: 900, fill: '#e0307a' }) + txt(mx(37), MY - 10, '37° ق', { fs: 9, w: 900, fill: '#e0307a' });
    s += `<path d="M8 ${f1(my(22))}H332" stroke="#e0307a" stroke-width="1.6"/>` + txt(11, my(22) + 11, '22° ش', { fs: 9, w: 900, anchor: 'start', fill: '#e0307a' });
    s += `<path d="M8 ${f1(my(31.6))}H332" stroke="#e0307a" stroke-width="1.6"/>` + txt(11, my(31.6) - 3, '31°36′ ش', { fs: 9, w: 900, anchor: 'start', fill: '#e0307a' });
    s += `<path d="M8 ${f1(my(23.5))}H332" stroke="#d98b1f" stroke-width="1.8" stroke-dasharray="6 3"/>` + txt(mx(35.4), my(23.5) - 4, '23.5° ش', { fs: 9, w: 900, fill: '#b36c0a', halo: true });
    s += `<path d="${line(NILE)}" fill="none" stroke="#2f8fd0" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><path d="${line(DELTA_R)}M${f1(mx(DELTA_D[0][0]))} ${f1(my(DELTA_D[0][1]))}${DELTA_D.slice(1).map(([lo, la]) => 'L' + f1(mx(lo)) + ' ' + f1(my(la))).join('')}" fill="none" stroke="#2f8fd0" stroke-width="2" stroke-linecap="round"/>`;
    [['القاهرة', 31.25, 30.05, -7, 14, 'end', true], ['الإسكندرية', 29.92, 31.2, -2, 15, 'middle'], ['أسوان', 32.9, 24.09, 7, 4, 'start']].forEach(([n, lo, la, dx, dy, an, cap]) => {
      s += cap ? `<rect x="${f1(mx(lo) - 4.5)}" y="${f1(my(la) - 4.5)}" width="9" height="9" fill="#e2273a" stroke="#fff" stroke-width="1.4"/>` : `<circle cx="${f1(mx(lo))}" cy="${f1(my(la))}" r="3.2" fill="${INK}" stroke="#fff" stroke-width="1.2"/>`;
      s += txt(mx(lo) + dx, my(la) + dy, n, { fs: 10, anchor: an, halo: true });
    });
    return wrap(340, 300, 'خريطة لمصر عليها خطوط الطول ودوائر العرض ومدار السرطان جنوب مصر، وعليها القاهرة والإسكندرية وأسوان', s, plain);
  }

  /* ================= 3 · the four relief units of Egypt (340 x 300) ================= */
  const UNIT = { nile: '#7fcf6f', west: '#f6e3a6', east: '#ecb46a', sinai: '#c98f6a' };
  function egyptRegions(q) {
    const plain = !!(q && q.pic && q.pic.plain);
    let s = plain ? '' : `<rect width="340" height="300" rx="14" fill="${PAPER}"/>`;
    s += `<rect x="8" y="${MY - 6}" width="324" height="262" rx="6" fill="#cfeaf8" stroke="#3a5c75" stroke-width="2"/>`;
    s = egyptBase(s, UNIT.west);
    s += `<g clip-path="url(#eg5Clip)"><path d="${poly(WEST)}" fill="${UNIT.west}"/><path d="${poly(EAST)}" fill="${UNIT.east}"/><path d="${poly(SINAI)}" fill="${UNIT.sinai}"/>`;
    s += `<path d="${poly(DELTA)}" fill="${UNIT.nile}"/><path d="${line(NILE.concat([CAIRO]))}" fill="none" stroke="${UNIT.nile}" stroke-width="11" stroke-linecap="round" stroke-linejoin="round"/><ellipse cx="${f1(mx(30.6))}" cy="${f1(my(29.4))}" rx="14" ry="9" fill="${UNIT.nile}"/><path d="${line([[31.0, 29.1], [30.75, 29.35]])}" stroke="${UNIT.nile}" stroke-width="4" stroke-linecap="round"/></g>`;
    s += `<path d="${line(NILE)}" fill="none" stroke="#2f8fd0" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><path d="${line(DELTA_R)}M${f1(mx(DELTA_D[0][0]))} ${f1(my(DELTA_D[0][1]))}${DELTA_D.slice(1).map(([lo, la]) => 'L' + f1(mx(lo)) + ' ' + f1(my(la))).join('')}" fill="none" stroke="#2f8fd0" stroke-width="2" stroke-linecap="round"/>`;
    s += `<path d="${poly(EGYPT)}" fill="none" stroke="#8a6a3a" stroke-width="1.6" stroke-linejoin="round"/>`;
    s += `<rect x="${f1(mx(CAIRO[0]) - 4.5)}" y="${f1(my(CAIRO[1]) - 4.5)}" width="9" height="9" fill="#e2273a" stroke="#fff" stroke-width="1.4"/>` + txt(mx(CAIRO[0]) + 8, my(CAIRO[1]) + 14, 'القاهرة', { fs: 10, anchor: 'start', halo: true });
    s += txt(mx(28.8), my(31.9) - 3, 'البحر المتوسط', { fs: 10, fill: '#2f6f9f' }) + txt(mx(36.3), my(25.2), 'البحر الأحمر', { fs: 10, fill: '#2f6f9f', rot: 62 });
    s += txt(mx(24.9) + 6, my(23.2), 'ليبيا', { fs: 10, fill: '#8a6a3a', anchor: 'start' }) + txt(mx(30), my(22.0) + 14, 'السودان', { fs: 10, fill: '#8a6a3a' });
    if (!plain) {
      s += hot('west', 'منطقة صفراء فاتحة واسعة غرب النهر', ringEl(...Object.values(egyptRegions.rings().west))) + hot('east', 'منطقة برتقالية بين النهر والبحر الأحمر', ringEl(...Object.values(egyptRegions.rings().east))) + hot('sinai', 'منطقة بنية على شكل مثلث شرق قناة السويس', ringEl(...Object.values(egyptRegions.rings().sinai)));
      s += hot('delta', 'منطقة خضراء على شكل مثلث في الشمال', ringEl(...Object.values(egyptRegions.rings().delta))) + hot('valley', 'شريط أخضر ضيق على جانبي النهر', ringEl(...Object.values(egyptRegions.rings().valley))) + hot('fayoum', 'بقعة خضراء صغيرة غرب النهر جنوب القاهرة', ringEl(...Object.values(egyptRegions.rings().fayoum)));
    }
    return wrap(340, 300, 'خريطة لمصر بأربعة ألوان: أخضر على جانبي النيل وفي الشمال، وأصفر فاتح واسع في الغرب، وبرتقالي في الشرق، وبني في المثلث الشرقي', s, plain);
  }
  egyptRegions.rings = () => ({ west: { cx: mx(27.7), cy: my(26.8), rx: 58, ry: 84 }, east: { cx: mx(33.1), cy: my(26.3), rx: 30, ry: 70 }, sinai: { cx: mx(33.7), cy: my(29.9), rx: 34, ry: 44 }, delta: { cx: mx(31.0), cy: my(30.95), rx: 32, ry: 20 }, valley: { cx: mx(31.8), cy: my(26.8), rx: 14, ry: 66 }, fayoum: { cx: mx(30.6), cy: my(29.4), rx: 16, ry: 12 } });

  /* ================= 4 · forces that shape the ground (340 x 250): two block diagrams, no words ================= */
  function reliefForces(q) {
    const plain = !!(q && q.pic && q.pic.plain);
    let s = plain ? '' : `<rect width="340" height="250" rx="14" fill="${PAPER}"/>`;
    const LAY = [['#7cc46a', 8], ['#a8794f', 26], ['#c9b58a', 30], ['#8a6a4a', 40]];
    /* left panel: a broken ground, one side lifted and the other lowered */
    s += `<rect x="8" y="8" width="160" height="234" rx="12" fill="#e8f4fb" stroke="#c5d9e6" stroke-width="2"/>`;
    let y0 = 98; LAY.forEach(([c, h]) => { s += `<rect x="18" y="${y0 - 6}" width="70" height="${h}" fill="${c}"/>`; y0 += h; });
    y0 = 134; LAY.forEach(([c, h]) => { s += `<rect x="90" y="${y0 - 6}" width="70" height="${h}" fill="${c}"/>`; y0 += h; });
    s += `<path d="M89 90V232" stroke="#5a3b1e" stroke-width="2.4" stroke-dasharray="5 3"/>`;
    s += `<path d="M53 150V112M45 120l8 -9l8 9" fill="none" stroke="#e2603f" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M125 160V198M117 190l8 9l8 -9" fill="none" stroke="#e2603f" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>`;
    /* right panel: a bent ground, squeezed from both sides */
    s += `<rect x="172" y="8" width="160" height="234" rx="12" fill="#e8f4fb" stroke="#c5d9e6" stroke-width="2"/>`;
    const wave = dy => { const pts = []; for (let x = 182; x <= 322; x += 10) pts.push([x, dy + 22 * Math.sin((x - 182) / 140 * Math.PI * 2 + 1)]); return pts; };
    let top = 100; LAY.forEach(([c, h]) => { const a = wave(top), b = wave(top + h); s += `<path d="${path(a)}${path(b.slice().reverse()).replace('M', 'L')}Z" fill="${c}"/>`; top += h; });
    s += `<path d="M184 188h24M200 181l9 7l-9 7" fill="none" stroke="#e2603f" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M320 188h-24M304 181l-9 7l9 7" fill="none" stroke="#e2603f" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>`;
    if (!plain) s += hot('fault', 'الشكل الأيسر: أرض انشقت وارتفع جانبها وانخفض الجانب الآخر', ringRect(8, 8, 160, 234, 12)) + hot('fold', 'الشكل الأيمن: أرض انثنت على شكل موجات بضغط من الجانبين', ringRect(172, 8, 160, 234, 12));
    return wrap(340, 250, 'شكلان لباطن الأرض: واحد انشقت فيه الطبقات وانزلق جانب أعلى من الآخر، وواحد انثنت فيه الطبقات على شكل موجات', s, plain);
  }

  /* ================= 5 · the two climate regions of Egypt (340 x 300): a green strip on the north coast, yellow everywhere else ================= */
  const MED = [[24.9, 31.8], [34.6, 31.8], [34.6, 31.05], [33.3, 30.75], [32.0, 30.6], [30.0, 30.6], [28.5, 30.75], [26.5, 30.85], [24.9, 30.95]];
  function climateMap(q) {
    const plain = !!(q && q.pic && q.pic.plain);
    let s = plain ? '' : `<rect width="340" height="300" rx="14" fill="${PAPER}"/>`;
    s += `<rect x="8" y="${MY - 6}" width="324" height="262" rx="6" fill="#cfeaf8" stroke="#3a5c75" stroke-width="2"/>`;
    s = egyptBase(s, '#f6dc8a');
    s += `<g clip-path="url(#eg5Clip)"><path d="${poly(MED)}" fill="#a9d96a"/></g>`;
    s += `<path d="${line(NILE)}" fill="none" stroke="#2f8fd0" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><path d="${line(DELTA_R)}M${f1(mx(DELTA_D[0][0]))} ${f1(my(DELTA_D[0][1]))}${DELTA_D.slice(1).map(([lo, la]) => 'L' + f1(mx(lo)) + ' ' + f1(my(la))).join('')}" fill="none" stroke="#2f8fd0" stroke-width="2" stroke-linecap="round"/>`;
    s += `<path d="${poly(EGYPT)}" fill="none" stroke="#8a6a3a" stroke-width="1.6" stroke-linejoin="round"/>`;
    s += `<path d="M8 ${f1(my(23.5))}H332" stroke="#d98b1f" stroke-width="1.4" stroke-dasharray="6 3"/>` + txt(mx(35.4), my(23.5) - 4, '23.5° ش', { fs: 9, w: 900, fill: '#b36c0a', halo: true });
    [['الإسكندرية', 29.92, 31.2, 0, -7], ['القاهرة', 31.25, 30.05, 8, 4, 'start'], ['أسوان', 32.9, 24.09, 7, 4, 'start'], ['الخارجة', 30.55, 25.45, 7, 4, 'start'], ['مرسى علم', 34.9, 25.07, -6, 4, 'end']].forEach(([n, lo, la, dx, dy, an]) => {
      s += `<circle cx="${f1(mx(lo))}" cy="${f1(my(la))}" r="3.2" fill="${INK}" stroke="#fff" stroke-width="1.2"/>` + txt(mx(lo) + dx, my(la) + dy, n, { fs: 10, anchor: an || 'middle', halo: true });
    });
    s += txt(mx(28.8), my(31.9) - 3, 'البحر المتوسط', { fs: 10, fill: '#2f6f9f' }) + txt(mx(36.3), my(25.2), 'البحر الأحمر', { fs: 10, fill: '#2f6f9f', rot: 62 });
    if (!plain) {
      const r = climateMap.rings();
      s += hot('med', 'شريط أخضر ضيق على ساحل الشمال', ringRect(r.med.x, r.med.y, r.med.w, r.med.h, 8)) + hot('desert', 'المنطقة الصفراء الواسعة في الوسط والجنوب', ringEl(r.desert.cx, r.desert.cy, r.desert.rx, r.desert.ry));
    }
    return wrap(340, 300, 'خريطة لمصر بلونين: شريط أخضر ضيق على ساحل البحر المتوسط، وأصفر في بقية مساحتها', s, plain);
  }
  climateMap.rings = () => ({ med: { x: mx(24.9), y: my(31.8) - 2, w: mx(34.6) - mx(24.9), h: my(30.6) - my(31.8) + 6 }, desert: { cx: mx(30.3), cy: my(26.4), rx: 66, ry: 74 } });

  /* ================= 6 · where the sun's rays fall straight down, in four positions of the Earth (340 x 300): no names, no dates ================= */
  const RAYS = [{ id: 'rayEq1', lat: 0, x: 8, y: 8 }, { id: 'rayS', lat: -23.5, x: 172, y: 8 }, { id: 'rayN', lat: 23.5, x: 8, y: 152 }, { id: 'rayEq2', lat: 0, x: 172, y: 152 }];
  function sunRays(q) {
    const plain = !!(q && q.pic && q.pic.plain);
    let s = plain ? '' : `<rect width="340" height="300" rx="14" fill="${PAPER}"/>`;
    const R = 46;
    RAYS.forEach(p => {
      const cx = p.x + 70, cy = p.y + 74;
      s += `<rect x="${p.x}" y="${p.y}" width="160" height="140" rx="12" fill="#fff6dc" stroke="#ecd9a0" stroke-width="2"/>`;
      s += `<circle cx="${cx}" cy="${cy}" r="${R}" fill="#8fd0ee" stroke="#3a7ea8" stroke-width="2"/>`;
      [[0, '0°', '#e2603f'], [23.5, '23.5° ش', '#d98b1f'], [-23.5, '23.5° ج', '#d98b1f']].forEach(([la, lab, col]) => {
        const dy = -Math.sin(la * Math.PI / 180) * R, dx = Math.cos(la * Math.PI / 180) * R;
        s += `<path d="M${f1(cx - dx)} ${f1(cy + dy)}H${f1(cx + dx)}" stroke="${col}" stroke-width="1.6"${la ? ' stroke-dasharray="4 3"' : ''}/>` + txt(cx + dx + 3, cy + dy + 3, lab, { fs: 7.5, w: 800, anchor: 'start', fill: col });
      });
      const a = p.lat * Math.PI / 180, ux = -Math.cos(a), uy = -Math.sin(a);
      const x0 = cx + ux * (R + 44), y0 = cy + uy * (R + 44), x1 = cx + ux * (R + 2), y1 = cy + uy * (R + 2);
      s += `<circle cx="${f1(p.x + 14)}" cy="${f1(p.y + 14)}" r="9" fill="#ffd23f" stroke="#e8a317" stroke-width="2"/>`;
      s += `<path d="M${f1(x0)} ${f1(y0)}L${f1(x1)} ${f1(y1)}" stroke="#f08a1c" stroke-width="3.4" stroke-linecap="round"/><path d="M${f1(x1 + ux * 9 - uy * 5)} ${f1(y1 + uy * 9 + ux * 5)}L${f1(x1)} ${f1(y1)}L${f1(x1 + ux * 9 + uy * 5)} ${f1(y1 + uy * 9 - ux * 5)}" stroke="#f08a1c" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`;
      s += `<circle cx="${f1(cx + ux * R)}" cy="${f1(cy + uy * R)}" r="3.4" fill="#e2273a" stroke="#fff" stroke-width="1.2"/>`;
    });
    if (!plain) RAYS.forEach(p => { s += hot(p.id, 'شكل للأرض تسقط عليه أشعة الشمس عند نقطة حمراء', ringRect(p.x, p.y, 160, 140, 12)); });
    return wrap(340, 300, 'أربعة أشكال للأرض والشمس: في كل شكل سهم يمثل شعاع الشمس يسقط على نقطة حمراء عند دائرة عرض مختلفة', s, plain);
  }
  sunRays.rects = () => RAYS.map(p => ({ id: p.id, x: p.x, y: p.y, w: 160, h: 140 }));

  /* ================= 7 · sand dunes (340 x 250, a picture only: no wind arrows, no words) ================= */
  function dunes(q) {
    const plain = !!(q && q.pic && q.pic.plain);
    let s = plain ? '' : `<rect width="340" height="250" rx="14" fill="${PAPER}"/>`;
    s += `<rect x="8" y="8" width="324" height="234" rx="12" fill="#cfe9f7"/><circle cx="268" cy="52" r="22" fill="#ffd23f" stroke="#f2b134" stroke-width="3"/>`;
    const hill = (x0, y0, x1, y1, ymax, c) => `<path d="M${x0} 242V${y0}C${x0 + 50} ${ymax} ${x1 - 70} ${ymax - 12} ${x1} ${y1}V242Z" fill="${c}"/>`;
    s += hill(8, 160, 332, 150, 90, '#f0cf86') + hill(8, 190, 332, 176, 130, '#e6bd6c') + hill(8, 222, 332, 212, 170, '#d9a950');
    for (let i = 0; i < 5; i++) s += `<path d="M${30 + i * 58} ${196 + (i % 2) * 8}q14 -7 28 0M${44 + i * 58} ${214 - (i % 2) * 4}q12 -6 24 0" fill="none" stroke="#c4903f" stroke-width="1.6" stroke-linecap="round"/>`;
    return wrap(340, 250, 'مشهد صحراوي فيه تلال رملية عالية متتابعة تحت سماء صافية وشمس', s, plain);
  }

  /* ================= 8 · three environments of Egypt (340 x 300): the Nile valley, the desert and the coast; no words ================= */
  const ENV = [{ id: 'envNile', y: 8 }, { id: 'envDesert', y: 106 }, { id: 'envCoast', y: 204 }];
  function habitats(q) {
    const plain = !!(q && q.pic && q.pic.plain);
    let s = plain ? '' : `<rect width="340" height="300" rx="14" fill="${PAPER}"/>`;
    const G = '#4a9a3f', G2 = '#6cbd54';
    /* band 1: a canal bank with papyrus, reeds and a white bird */
    let y = 8;
    s += `<rect x="8" y="${y}" width="324" height="92" rx="12" fill="#e4f4fa"/><rect x="8" y="${y + 58}" width="324" height="34" fill="#8fd0ee"/><rect x="8" y="${y + 86}" width="324" height="6" rx="3" fill="#7bbf5e"/>`;
    [[48, 30], [92, 22]].forEach(([x, h]) => { s += `<path d="M${x} ${y + 84}V${y + 84 - h * 2.2}" stroke="${G}" stroke-width="3"/>`; for (let a = -80; a <= 80; a += 20) { const r = a * Math.PI / 180; s += `<path d="M${x} ${y + 84 - h * 2.2}l${f1(Math.sin(r) * 20)} ${f1(-Math.cos(r) * 20 + 4)}" stroke="${G2}" stroke-width="2" stroke-linecap="round"/>`; } });
    for (let i = 0; i < 9; i++) s += `<path d="M${150 + i * 9} ${y + 86}q${i % 2 ? 3 : -3} -30 ${i % 3 - 1} -52" fill="none" stroke="#7fae45" stroke-width="3" stroke-linecap="round"/>`;
    s += `<ellipse cx="274" cy="${y + 62}" rx="15" ry="9" fill="#fff" stroke="#c9d6dc" stroke-width="1.2"/><path d="M285 ${y + 58}q10 -16 4 -30" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round"/><circle cx="290" cy="${y + 27}" r="5" fill="#fff" stroke="#c9d6dc" stroke-width="1"/><path d="M294 ${y + 26}l11 3l-11 2z" fill="#f2a33a"/><path d="M270 ${y + 70}v14M278 ${y + 70}v14" stroke="#7a6a50" stroke-width="2"/>`;
    /* band 2: desert with aloe, prickly pear, a palm and a camel */
    y = 106;
    s += `<rect x="8" y="${y}" width="324" height="92" rx="12" fill="#fbe7b3"/><path d="M8 ${y + 76}C90 ${y + 56} 160 ${y + 84} 250 ${y + 64}S320 ${y + 70} 332 ${y + 72}V${y + 80}a12 12 0 0 1 -12 12H20a12 12 0 0 1 -12 -12Z" fill="#efce7c"/>`;
    for (let a = -60; a <= 60; a += 30) { const r = a * Math.PI / 180; s += `<path d="M44 ${y + 78}q${f1(Math.sin(r) * 14)} ${f1(-Math.cos(r) * 14)} ${f1(Math.sin(r) * 30)} ${f1(-Math.cos(r) * 30)}" stroke="#58a068" stroke-width="5" stroke-linecap="round" fill="none"/>`; }
    [[100, 70, 11, 8], [114, 56, 10, 7], [92, 55, 9, 7]].forEach(([x, dy, rx, ry]) => { s += `<ellipse cx="${x}" cy="${y + dy}" rx="${rx}" ry="${ry}" fill="#5aa05a" stroke="#3f7f45" stroke-width="1.4"/>`; });
    s += `<path d="M168 ${y + 80}q4 -26 -2 -46" stroke="#8a5a2b" stroke-width="5" fill="none" stroke-linecap="round"/>`;
    for (let a = -70; a <= 70; a += 35) { const r = a * Math.PI / 180; s += `<path d="M166 ${y + 34}q${f1(Math.sin(r) * 18)} ${f1(-Math.cos(r) * 8 - 6)} ${f1(Math.sin(r) * 28)} ${f1(-Math.cos(r) * 2 + 8)}" stroke="#3f8f3a" stroke-width="3.4" fill="none" stroke-linecap="round"/>`; }
    s += `<ellipse cx="262" cy="${y + 56}" rx="26" ry="12" fill="#c58a4a"/><path d="M246 ${y + 46}q8 -20 18 0z" fill="#c58a4a"/><path d="M284 ${y + 50}q10 -16 8 -28" stroke="#c58a4a" stroke-width="7" fill="none" stroke-linecap="round"/><ellipse cx="297" cy="${y + 22}" rx="9" ry="6" fill="#c58a4a"/><path d="M244 ${y + 64}v16M254 ${y + 66}v14M270 ${y + 66}v14M280 ${y + 64}v16" stroke="#a9733a" stroke-width="3.4" stroke-linecap="round"/>`;
    /* band 3: a coast with a fig tree, a mangrove in the water and a gull */
    y = 204;
    s += `<rect x="8" y="${y}" width="324" height="88" rx="12" fill="#dff1fa"/><path d="M8 ${y + 58}H150C170 ${y + 58} 180 ${y + 88} 180 ${y + 88}H20a12 12 0 0 1 -12 -12Z" fill="#f0dca0"/><path d="M180 ${y + 56}H320a12 12 0 0 1 12 12V${y + 76}a12 12 0 0 1 -12 12H180Z" fill="#7cc8e8"/>`;
    s += `<path d="M44 ${y + 62}V${y + 34}" stroke="#8a5a2b" stroke-width="5"/><circle cx="44" cy="${y + 26}" r="18" fill="#6aa84f"/><circle cx="36" cy="${y + 30}" r="3" fill="#8b3a62"/><circle cx="52" cy="${y + 22}" r="3" fill="#8b3a62"/><circle cx="46" cy="${y + 34}" r="3" fill="#8b3a62"/>`;
    s += `<path d="M232 ${y + 62}q-14 -10 -26 4M232 ${y + 62}q-6 -14 -6 -24M232 ${y + 62}q8 -14 22 -18M232 ${y + 62}q16 -4 22 8" stroke="#7a5a30" stroke-width="3" fill="none" stroke-linecap="round"/><ellipse cx="232" cy="${y + 34}" rx="26" ry="14" fill="#4f9a5a"/>`;
    s += `<path d="M120 ${y + 24}q14 -14 24 0q10 -14 24 0" fill="none" stroke="#fff" stroke-width="4.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M120 ${y + 24}q14 -14 24 0q10 -14 24 0" fill="none" stroke="#9fb4be" stroke-width="1" stroke-linecap="round"/>`;
    if (!plain) ENV.forEach(p => { s += hot(p.id, p.id === 'envNile' ? 'الشريط العلوي: ضفة ماء فيها نباتات خضراء وطائر أبيض' : p.id === 'envDesert' ? 'الشريط الأوسط: رمال وصبار ونخلة وجمل' : 'الشريط السفلي: شاطئ وبحر وشجرة وطائر محلق', ringRect(8, p.y, 324, 92, 12)); });
    return wrap(340, 300, 'ثلاثة مشاهد فوق بعضها: ضفة ماء بنباتات، وصحراء بصبار وجمل، وساحل بحر بأشجار وطائر', s, plain);
  }
  habitats.rects = () => ENV.map(p => ({ id: p.id, x: 8, y: p.y, w: 324, h: 92 }));


  /* ================= Unit 2 · the owner's photos in two six-picture cards (340 x 250) ================= */
  const CIV = {
    civEarly: ['axe', 'mudbrick', 'chisel', 'bardi', 'nileriver', 'narmer'],
    civGreat: ['steppyr', 'khufu', 'sphinx', 'lahun', 'theater', 'qamh']
  };
  const CIVNAME = { axe: 'حجر رمادي مدبب الطرف', mudbrick: 'بيت صغير من الطين له باب', chisel: 'أداة لها مقبض وطرف معدني مسطح', bardi: 'نبات أخضر له ساق طويلة وأوراق كالريش', nileriver: 'نهر أزرق بين ضفتين خضراوين عليهما نخيل', narmer: 'لوح حجري رمادي منقوش عليه ملك يرفع يده',
    steppyr: 'هرم من درجات فوق بعضها', khufu: 'هرم كبير أملس الجوانب وعند قاعدته أشخاص صغار', sphinx: 'تمثال جسمه جسم أسد ورأسه رأس ملك', lahun: 'بناء له فتحات مقوسة تتدفق منها المياه', theater: 'مدرجات حجرية على شكل نصف دائرة وأعمدة', qamh: 'سنبلة صفراء لها حبوب' };
  const CIVTINT = { axe: '#f3e7d8', mudbrick: '#dff1f7', chisel: '#fdf3c8', bardi: '#fbe3e8', nileriver: '#f6f1df', narmer: '#e1f3ec', steppyr: '#e1effb', khufu: '#dff1f7', sphinx: '#fbe6d4', lahun: '#e8e6fb', theater: '#fdf6d4', qamh: '#e8e6fb' };
  const CSLOT = [[62, 66], [170, 66], [278, 66], [62, 184], [170, 184], [278, 184]], CR = 46;
  function civSet(key, label) {
    const ids = CIV[key];
    function pic(q) {
      const plain = !!(q && q.pic && q.pic.plain);
      let s = plain ? '' : `<rect width="340" height="250" rx="14" fill="#fbf6e6"/>`;
      ids.forEach((id, i) => {
        const [x, y] = CSLOT[i];
        s += `<g transform="translate(${x} ${y})"><clipPath id="s5c-${id}"><circle r="${CR}"/></clipPath><circle r="${CR}" fill="${CIVTINT[id]}"/>`
          + `<image href="studies/assets/civ_${id}.jpg" x="${-CR}" y="${-CR}" width="${CR * 2}" height="${CR * 2}" preserveAspectRatio="xMidYMid slice" clip-path="url(#s5c-${id})"/>`
          + `<circle r="${CR}" fill="none" stroke="#fff" stroke-width="3"/><circle r="${CR}" fill="none" stroke="#d8c9a6" stroke-width="1.4"/></g>`;
      });
      if (!plain) ids.forEach((id, i) => { const [x, y] = CSLOT[i]; s += hot(id, CIVNAME[id], ringEl(x, y, CR, CR)); });
      return wrap(340, 250, label, s, plain);
    }
    pic.rings = () => { const o = {}; ids.forEach((id, i) => { o[id] = [CSLOT[i][0], CSLOT[i][1], CR]; }); return o; };
    return pic;
  }
  const civEarly = civSet('civEarly', 'ست صور مستديرة: أداة حجرية وبيت من الطين وأداة معدنية ونبات أخضر ونهر ولوح حجري منقوش');
  const civGreat = civSet('civGreat', 'ست صور مستديرة: هرم مدرج وهرم أملس وتمثال وسد ومسرح وسنبلة');
  window.CH_DIAGRAMS = Object.assign(window.CH_DIAGRAMS || {}, { globeGrid, egyptGrid, egyptRegions, reliefForces, climateMap, sunRays, dunes, habitats, civEarly, civGreat });
  window.S5ART = { CIV, CIVNAME, civEarly, civGreat, globeGrid, egyptGrid, egyptRegions, reliefForces, climateMap, sunRays, txt, hot, ringRect, ringEl, wrap, path, f1, esc, mx, my, poly, line, EGYPT, NILE, DELTA, SINAI, WEST, EAST, UNIT, INK, PAPER, FONT, GX, GY };
})();
