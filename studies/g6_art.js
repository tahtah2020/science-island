/* Social Studies · Grade 6 pictures, drawn in code (CH_DIAGRAMS). Nothing is copied from the school book: the map of the Arab homeland is a simplified
   drawing made here from rough longitude and latitude points (good enough for a child to find a wing, a sea, a strait or a region, not a survey map).
   Used by q.fig (a picture above a question), q.diagram + q.pic (tap), and by the game studies-arab.html (pic.plain = the inner markup only, no frame and no tap rings).
   Unit 1 «وطننا العربي (خصائص وتحديات)»:
     arabWings     (tap) ids afWing · asWing · redSea                                   the 22 countries in two colours (African wing, Asian wing) and the sea between them
     arabBorders   (tap) ids bAtl · bMed · bTaurus · bZagros · bGulf · bArabSea · bIndian · bSahara   the Arab homeland in one colour with the seas, the mountains and the desert around it; nothing is named
     arabStraits   (tap) ids sHormuz · sSuez · sGibraltar · sMandeb                     four numbered red circles on the four water passages
     arabMountains (tap) ids mAtlas · mRedSea · mHejaz · mZagros · mOman               five brown mountain chains
     arabPlateaus  (tap) ids pNafr · pSham · pNajd · pHadra                             the North African plateau in yellow and the three plateaus of the Arabian peninsula in shades of orange
     arabPlains    (tap) ids plFlood · plCoast · plDesert                                green river plains, purple coastal plains, sandy desert plains
     arabClimate   (tap) ids cMed · cDesert · cTrop                                       green in the north, yellow in the middle, orange in the south; no region is named
     landforms     (tap) ids lfMount · lfPlat · lfOasis · lfDunes · lfWadi · lfPlain      one landscape from the side: a mountain, a flat-topped plateau, an oasis, dunes, a dry valley, a river plain
     mountainRain  (tap) ids slopeWind · slopeLee · peakSnow                              a mountain with rain clouds coming from one side, a snowy peak
     envProblems   (tap) ids eDrought · eDesertif · ePollution · eFlood                   four panels: cracked dry ground, sand over cut trees, smoking chimneys, water in the houses
   Texts are Arabic (the book is Arabic for both tracks). Screen-reader names describe the picture, never the answer.
   window.S6ART = the pieces the game and the map script reuse. */
(function () {
  'use strict';
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const f1 = n => (Math.round(n * 10) / 10).toString();
  const INK = '#1f3d57', PAPER = '#fffaf0';
  const FONT = 'Cairo, Nunito, sans-serif';
  const txt = (x, y, s, o = {}) => `<text x="${f1(x)}" y="${f1(y)}" text-anchor="${o.anchor || 'middle'}" direction="ltr" font-family="${FONT}" font-size="${o.fs || 11}" font-weight="${o.w || 800}" fill="${o.fill || INK}"${o.halo ? ' stroke="#fff" stroke-width="3" paint-order="stroke" stroke-linejoin="round"' : ''}${o.rot ? ` transform="rotate(${o.rot} ${f1(x)} ${f1(y)})"` : ''}>${esc(s)}</text>`;
  const hot = (id, name, inner) => `<g class="hot" data-id="${id}" role="button" tabindex="0" aria-label="${esc(name)}">${inner}</g>`;
  const ringRect = (x, y, w, h, r = 12) => `<rect class="ring" x="${f1(x)}" y="${f1(y)}" width="${f1(w)}" height="${f1(h)}" rx="${r}"/>`;
  const ringEl = (cx, cy, rx, ry, rot) => `<ellipse class="ring" cx="${f1(cx)}" cy="${f1(cy)}" rx="${f1(rx)}" ry="${f1(ry)}"${rot ? ` transform="rotate(${rot} ${f1(cx)} ${f1(cy)})"` : ''}/>`;
  const wrap = (w, h, label, inner, plain) => (plain ? inner : `<svg class="diagram" viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(label)}">${inner}</svg>`);
  const path = pts => pts.map(([x, y], i) => (i ? 'L' : 'M') + f1(x) + ' ' + f1(y)).join('');
  let uid = 0;

  /* ================= the map of the Arab homeland (340 x 270): 4.1 px per degree, longitude -18..61, latitude -13..39 ================= */
  const MW = 340, MH = 270, K = 4.1;
  const mx = lon => 8 + (lon + 18) * K, my = lat => 26 + (39 - lat) * K;
  const P = pts => path(pts.map(([lo, la]) => [mx(lo), my(la)])) + 'Z';
  const PL = pts => path(pts.map(([lo, la]) => [mx(lo), my(la)]));
  const FX = [8, 26, 324, 214];   // the frame of the map: x, y, w, h
  /* land that is not Arab (grey) */
  const OTHER = {
    africa: [[-6, 35.9], [-10, 30], [-13, 27.5], [-17, 21], [-17.5, 14.5], [-16, 12], [-13, 8], [-8, 4.5], [-3, 5], [3, 6], [9, 4], [9.5, 1], [12, -5], [13, -14], [41, -14], [40.5, -10], [39, -5], [41.5, -1.5], [46, 2], [49, 6], [51.3, 11.8], [43.5, 11.6], [41, 14.5], [39, 16], [38.5, 18], [37.3, 21], [36.9, 22], [35.5, 24], [33.8, 27.2], [32.6, 29.9], [32.3, 31.3], [30, 31.5], [29, 30.9], [25, 31.6], [23, 32.6], [20, 32], [19, 30.3], [15.5, 31.5], [13, 32.9], [11, 33.2], [10, 34.5], [11, 37], [9.5, 37.3], [3, 36.8], [-1, 35.6], [-5.5, 35.9]],
    iberia: [[-18, 39], [-9.5, 39], [-9, 37], [-6.3, 36.8], [-5.6, 36], [-2, 36.7], [0, 38.7], [0.4, 39]],
    italy: [[15.6, 38], [16.2, 38.9], [17, 39], [15.5, 39], [12.5, 38.1], [15.3, 37.1]],
    greece: [[21, 37], [22.5, 36.5], [23.5, 38], [24, 39], [20.5, 39]],
    asia: [[26, 39], [26, 38], [27, 37], [28, 36.7], [30.5, 36.3], [32, 36.1], [34, 36.3], [36, 36.7], [36.6, 36.8], [38, 36.8], [40, 37.1], [42.3, 37.2], [44.8, 37.3], [45.5, 35.8], [46, 35], [45.4, 34], [46.1, 33], [47.5, 32], [48, 30.5], [48.6, 30], [50.3, 29.3], [51.5, 27.8], [54, 26.6], [56.3, 27.1], [57.3, 25.8], [61, 25.2], [62, 25], [62, 39]]
  };
  /* the 22 Arab countries: [African wing?, outline]. Comoros are dots in the Indian Ocean. */
  const C = {
    morocco: [1, [[-5.9, 35.8], [-2, 35.1], [-1.7, 34.5], [-1.2, 32.7], [-3.6, 31.6], [-3.7, 30.4], [-5.5, 29.5], [-8.7, 28.7], [-8.7, 27.7], [-8.7, 26], [-12, 26], [-12, 23.4], [-13, 21.3], [-17, 21.3], [-16, 23.8], [-14.5, 26.2], [-13, 27.6], [-11.5, 28.2], [-9.8, 29.5], [-9.6, 31], [-8.5, 33.3], [-6.8, 34]]],
    mauritania: [1, [[-17, 21.3], [-13, 21.3], [-12, 23.4], [-12, 26], [-8.7, 26], [-8.7, 27.3], [-4.8, 25], [-6.5, 25], [-5.5, 16.4], [-5.3, 15], [-11.4, 15.2], [-12.2, 14.6], [-14.5, 16.6], [-16.5, 16.2], [-16, 18], [-16.5, 19.5]]],
    algeria: [1, [[-1.7, 35.1], [-1.2, 32.7], [-3.6, 31.6], [-3.7, 30.4], [-5.5, 29.5], [-8.7, 28.7], [-8.7, 27.3], [-4.8, 25], [1.2, 21], [4, 19.1], [5.8, 19.4], [11.9, 23.5], [10, 24.5], [10, 26], [9.4, 27], [9.9, 29], [9.5, 30.2], [8.4, 32.5], [7.5, 33.4], [8.3, 36.9], [3, 36.8], [-1, 35.6]]],
    tunisia: [1, [[8.3, 36.9], [7.5, 33.4], [8.4, 32.5], [9.5, 30.2], [10.2, 30.5], [11.5, 32.3], [11.1, 33.2], [10, 34.4], [11.1, 35.2], [10.6, 36.4], [11.1, 37.1], [9.8, 37.3]]],
    libya: [1, [[11.5, 32.3], [10.2, 30.5], [9.5, 30.2], [9.9, 29], [9.4, 27], [10, 26], [10, 24.5], [11.9, 23.5], [14, 22.5], [15, 23], [24, 19.5], [24, 20], [25, 20], [25, 22], [25, 31.6], [23, 32.6], [20, 32], [19, 30.3], [15.5, 31.5], [13, 32.9]]],
    egypt: [1, [[25, 31.6], [29, 30.9], [30, 31.5], [32.3, 31.3], [34.2, 31.3], [34.9, 29.5], [34.3, 27.9], [33.8, 27.2], [35.5, 24], [36.9, 22], [25, 22]]],
    sudan: [1, [[25, 22], [36.9, 22], [37.3, 21], [38.5, 18], [37.5, 17], [36.5, 14.3], [36.2, 12.7], [35, 11.5], [34.3, 10.6], [34, 9.5], [33, 10], [31.5, 9.8], [30, 9.8], [27, 9.6], [24, 8.7], [23, 10.5], [22.4, 12.5], [22, 13], [22.5, 14], [24, 15.7], [24, 19.5], [24, 20], [25, 20]]],
    djibouti: [1, [[41.8, 11.8], [43.3, 12.7], [43.5, 11.5], [42.8, 11], [41.8, 11.2]]],
    somalia: [1, [[43.3, 11.4], [45, 10.5], [48, 11.2], [51.2, 11.9], [51, 10.4], [50.8, 8.5], [49, 5.5], [47.8, 4.2], [46, 2], [44, 1], [41.6, -1.6], [41, -0.8], [41, 2.8], [42, 4], [44, 5], [45, 5], [47.9, 8], [44.5, 9], [43, 9.5], [42.8, 11]]],
    saudi: [0, [[35, 29.35], [35.5, 27.5], [36.5, 26], [37.5, 24], [39, 21.5], [40.5, 19], [41.8, 17], [42.8, 16.4], [44, 17.4], [46, 17.2], [47, 16.9], [48.7, 18.2], [52, 19], [55.7, 20], [55, 22.7], [52, 22.8], [51.6, 24.25], [51.2, 24.5], [50.8, 24.75], [50.1, 25.8], [50.2, 26.6], [49.5, 27], [48.5, 28], [48.4, 28.5], [47.7, 28.5], [47, 29], [46.5, 29.1], [44.7, 29.2], [42, 31], [40, 32], [39, 32.2], [37, 31.5], [38, 30.5], [37.5, 30], [36.5, 29.5]]],
    yemen: [0, [[42.8, 16.4], [43, 14.5], [43.4, 12.7], [45, 12.8], [47, 13.4], [49, 14], [51, 15], [52.2, 15.6], [53.1, 16.6], [52, 19], [48.7, 18.2], [47, 16.9], [46, 17.2], [44, 17.4]]],
    oman: [0, [[52, 19], [53.1, 16.6], [55, 17.2], [56.5, 18], [57.7, 19], [58.5, 20.4], [59.8, 22.5], [58.8, 23.6], [57, 23.9], [56.4, 24.9], [56, 24], [55.2, 22.7], [55, 22.7], [55.7, 20]]],
    uae: [0, [[51.6, 24.25], [54, 24.1], [56, 25.7], [56.4, 24.9], [56, 24], [55.2, 22.7], [52, 22.8]]],
    qatar: [0, [[50.8, 24.75], [51.2, 24.5], [51.6, 25.2], [51.5, 26], [51.2, 26.15], [50.8, 25.5]]],
    kuwait: [0, [[46.5, 29.1], [47.7, 28.5], [48.4, 28.5], [48, 29.5], [48.2, 30], [47.7, 30.1], [47.1, 30]]],
    iraq: [0, [[39, 32.2], [40, 32], [42, 31], [44.7, 29.2], [46.5, 29.1], [47.1, 30], [47.7, 30.1], [48.2, 30], [48.6, 30], [48, 30.5], [47.5, 32], [46.1, 33], [45.4, 34], [46, 35], [45.5, 35.8], [44.8, 37.3], [42.3, 37.2], [41.2, 36.6], [41, 34.4], [38.8, 33.4]]],
    syria: [0, [[36.6, 36.8], [38, 36.8], [40, 37.1], [42.3, 37.2], [41.2, 36.6], [41, 34.4], [38.8, 33.4], [36.8, 32.3], [35.8, 32.7], [35.9, 33.3], [36.6, 34.2], [36.4, 34.6], [35.95, 34.65], [35.8, 35.8], [36.2, 36.2]]],
    lebanon: [0, [[35.1, 33.1], [35.6, 33.1], [35.9, 33.3], [36.6, 34.2], [36.4, 34.6], [35.95, 34.65], [35.5, 33.9]]],
    palestine: [0, [[34.2, 31.3], [34.9, 29.5], [35, 29.5], [35.5, 31.5], [35.6, 32.7], [35.1, 33.1], [34.9, 32.4]]],
    jordan: [0, [[35, 29.45], [36.5, 29.5], [37.5, 30], [38, 30.5], [37, 31.5], [39, 32.2], [38.8, 33.4], [36.8, 32.3], [35.8, 32.7], [35.6, 32.7], [35.5, 31.5]]]
  };
  const BAHRAIN = [50.55, 26.05], COMOROS = [[43.3, -11.7], [44.4, -12.2], [43.75, -12.3]];
  const NILE = [[31.2, 31.4], [31.1, 30.1], [30.8, 28.5], [31.1, 27.2], [32.8, 25.6], [32.9, 24.1], [31.6, 22.2], [30.6, 20.6], [31.5, 18.5], [33.4, 17.7], [32.5, 15.6], [33, 13], [32.6, 10.8]];
  const TIGRIS = [[42.7, 37.1], [43.2, 36.3], [44, 34.5], [45.2, 33], [46.4, 31.6], [47.4, 31], [48.2, 30.2]];
  const EUPHR = [[38.5, 36.8], [40, 35.6], [41.2, 34.4], [43, 33.3], [44.5, 32], [46.2, 31], [47.4, 31]];
  const PLAIN_LAND = '#f4e2b3', OTHER_LAND = '#e6e3d8', SEA = '#cfe8f6', LINE = '#c9a96a';

  /* the base map; paint(id) gives each country's colour; extra = markup drawn over the land; over = markup drawn after the borders */
  function base(paint, o = {}) {
    let s = `<rect x="${FX[0]}" y="${FX[1]}" width="${FX[2]}" height="${FX[3]}" rx="4" fill="${SEA}" stroke="#3a5c75" stroke-width="2"/>`;
    const cid = 'arabClip' + (++uid);
    s += `<clipPath id="${cid}f"><rect x="${FX[0]}" y="${FX[1]}" width="${FX[2]}" height="${FX[3]}" rx="4"/></clipPath><g clip-path="url(#${cid}f)">`;
    Object.values(OTHER).forEach(p => { s += `<path d="${P(p)}" fill="${OTHER_LAND}" stroke="#cfcabb" stroke-width=".8" stroke-linejoin="round"/>`; });
    s += o.under || '';
    Object.entries(C).forEach(([id, [, p]]) => { s += `<path d="${P(p)}" fill="${paint(id)}" stroke="none"/>`; });
    s += `<circle cx="${f1(mx(BAHRAIN[0]))}" cy="${f1(my(BAHRAIN[1]))}" r="1.8" fill="${paint('bahrain')}" stroke="#8a6d3b" stroke-width=".6"/>`;
    COMOROS.forEach(([lo, la]) => { s += `<circle cx="${f1(mx(lo))}" cy="${f1(my(la))}" r="1.9" fill="${paint('comoros')}" stroke="#8a6d3b" stroke-width=".6"/>`; });
    if (o.clip) {   // markup cut to the shape of the Arab land
      s += `<clipPath id="${cid}">${Object.values(C).map(([, p]) => `<path d="${P(p)}"/>`).join('')}</clipPath><g clip-path="url(#${cid})">${o.clip}</g>`;
    }
    s += o.extra || '';
    Object.values(C).forEach(([, p]) => { s += `<path d="${P(p)}" fill="none" stroke="${o.border || '#b8955a'}" stroke-width=".7" stroke-dasharray="${o.solid ? '' : '2 1.5'}" stroke-linejoin="round"/>`; });
    s += `<path d="${PL(NILE)}" fill="none" stroke="#3d8fd0" stroke-width="1.3" stroke-linejoin="round"/>`;
    s += `<path d="${PL(TIGRIS)}" fill="none" stroke="#3d8fd0" stroke-width="1.1"/><path d="${PL(EUPHR)}" fill="none" stroke="#3d8fd0" stroke-width="1.1"/>`;
    s += o.over || '';
    s += `</g>`;
    /* a north arrow */
    s += `<g transform="translate(24 210)"><path d="M0 -12L5 4L0 1L-5 4Z" fill="${INK}"/>${txt(0, 15, 'ش', { fs: 9 })}</g>`;
    if (o.egypt !== false) s += txt(mx(28.6), my(25.4), 'مصر', { fs: 9, w: 900, fill: '#7a4a12', halo: true });
    return s;
  }
  const legend = (items, y = 252) => { let s = '', x = 330; items.forEach(([col, label]) => { const w = label.length * 5.6 + 22; x -= w; s += `<rect x="${f1(x)}" y="${y - 7}" width="12" height="10" rx="2" fill="${col}" stroke="#8a6d3b" stroke-width=".6"/>` + txt(x + 15, y + 2, label, { fs: 8.5, anchor: 'start', w: 700 }); x -= 8; }); return s; };
  const frame = plain => (plain ? '' : `<rect width="${MW}" height="${MH}" rx="14" fill="${PAPER}"/>`);
  /* a ring placed in degrees: [lon, lat, rx px, ry px, rotation] */
  const ringAt = r => ringEl(mx(r[0]), my(r[1]), r[2], r[3], r[4]);
  const ringsOf = R => () => Object.fromEntries(Object.entries(R).map(([id, r]) => [id, { cx: mx(r[0]), cy: my(r[1]), rx: r[2], ry: r[3], rot: r[4] || 0 }]));
  const hotAll = (R, NAMES, ids) => ids.map(id => hot(id, NAMES[id], ringAt(R[id]))).join('');

  /* 1 · the two wings */
  const WING_C = ['#f6c9dc', '#f3d39a'];
  const R_WINGS = { afWing: [8, 24, 92, 48], asWing: [47, 23.5, 30, 46, -20], redSea: [37.4, 21.5, 9, 52, -32] };
  const N_WINGS = { afWing: 'مساحة كبيرة ملونة باللون الأصفر في غرب الخريطة', asWing: 'مساحة ملونة باللون الوردي في شرق الخريطة', redSea: 'ممر بحري طويل وضيق بين المساحتين الملونتين' };
  function arabWings(q) {
    const plain = !!(q && q.pic && q.pic.plain);
    let s = frame(plain) + base(id => (id === 'bahrain' ? WING_C[0] : id === 'comoros' ? WING_C[1] : WING_C[C[id][0]]), { solid: true, border: '#a0805a' });
    s += legend([[WING_C[1], 'الجناح الإفريقي'], [WING_C[0], 'الجناح الآسيوي']]);
    if (!plain) s += hotAll(R_WINGS, N_WINGS, ['afWing', 'asWing', 'redSea']);
    return wrap(MW, MH, 'خريطة الوطن العربي ملونة بلونين: الأصفر في الغرب والوردي في الشرق، وبينهما ممر بحري', s, plain);
  }
  arabWings.rings = ringsOf(R_WINGS);

  /* 2 · the natural borders */
  const mtn = (pts, k = 1, col = '#9a5b2e') => { let s = ''; for (let i = 0; i < pts.length - 1; i++) { const [a, b] = [pts[i], pts[i + 1]], n = Math.max(1, Math.round(Math.hypot(mx(b[0]) - mx(a[0]), my(b[1]) - my(a[1])) / (7 * k))); for (let j = 0; j < n; j++) { const t = (j + .5) / n, x = mx(a[0] + (b[0] - a[0]) * t), y = my(a[1] + (b[1] - a[1]) * t); s += `<path d="M${f1(x - 3.4 * k)} ${f1(y + 2.6 * k)}L${f1(x)} ${f1(y - 3.2 * k)}L${f1(x + 3.4 * k)} ${f1(y + 2.6 * k)}Z" fill="${col}" stroke="#fff" stroke-width=".5" stroke-linejoin="round"/>`; } } return s; };
  const TAURUS = [[32, 37.6], [35, 37.8], [38, 38], [41, 38.2]], KURD = [[41.5, 37.9], [43.5, 37.5], [45, 37.4]], ZAGROS = [[45.6, 35.6], [47, 34], [48.8, 32.2], [50.6, 30.3], [52.6, 28.8], [55, 27.7], [56.4, 27.5]];
  const sahara = () => { let s = ''; for (let lo = -12; lo <= 34; lo += 2.4) for (let la = 11.5; la <= 18.6; la += 2.2) { const x = mx(lo + ((la * 7) % 1.2)), y = my(la); s += `<circle cx="${f1(x)}" cy="${f1(y)}" r=".9" fill="#c79a4b"/>`; } return s; };
  const R_BORD = { bAtl: [-14.5, 33, 15, 26], bMed: [17, 35.6, 40, 9], bTaurus: [37, 38, 26, 7], bZagros: [49.6, 32, 26, 7, 37], bGulf: [52, 27.2, 18, 6, 26], bArabSea: [59, 15.5, 11, 22], bIndian: [55, 2, 24, 24], bSahara: [10, 15, 64, 15] };
  const N_BORD = { bAtl: 'مساحة زرقاء واسعة في أقصى غرب الخريطة', bMed: 'بحر أزرق طويل في شمال الخريطة', bTaurus: 'سلسلة جبال بنية في أعلى الخريطة شمال سوريا', bZagros: 'سلسلة جبال بنية طويلة في شرق الخريطة تتجه من الشمال إلى الجنوب الشرقي', bGulf: 'خليج أزرق ضيق في شرق شبه الجزيرة', bArabSea: 'بحر أزرق في أقصى الشرق جنوب عمان', bIndian: 'مساحة زرقاء واسعة في الجنوب الشرقي', bSahara: 'أرض منقطة بنقاط صغيرة جنوب الدول العربية الإفريقية' };
  function arabBorders(q) {
    const plain = !!(q && q.pic && q.pic.plain);
    let s = frame(plain) + base(() => '#f1d98f', { solid: true, border: '#c9a24a', under: sahara(), over: mtn(TAURUS) + mtn(KURD) + mtn(ZAGROS) });
    s += legend([['#f1d98f', 'الوطن العربي'], ['#9a5b2e', 'جبال']]);
    if (!plain) s += hotAll(R_BORD, N_BORD, Object.keys(R_BORD));
    return wrap(MW, MH, 'خريطة الوطن العربي بلون واحد، وحوله بحار ومحيطات وجبال بنية وأرض منقطة في الجنوب', s, plain);
  }
  arabBorders.rings = ringsOf(R_BORD);

  /* 3 · the water passages */
  const STRAITS = { sHormuz: [56.4, 26.6, 1], sSuez: [32.4, 30.4, 2], sGibraltar: [-5.6, 35.95, 3], sMandeb: [43.4, 12.6, 4] };
  const N_STR = { sHormuz: 'دائرة حمراء رقم 1 في الشرق عند مدخل الخليج', sSuez: 'دائرة حمراء رقم 2 بين البحر المتوسط والبحر الأحمر', sGibraltar: 'دائرة حمراء رقم 3 في أقصى الشمال الغربي', sMandeb: 'دائرة حمراء رقم 4 عند الطرف الجنوبي للبحر الأحمر' };
  function arabStraits(q) {
    const plain = !!(q && q.pic && q.pic.plain);
    let s = frame(plain) + base(() => '#f3d39a', { solid: true, border: '#c9a24a' });
    Object.values(STRAITS).forEach(([lo, la, n]) => { const x = mx(lo), y = my(la); s += `<circle cx="${f1(x)}" cy="${f1(y)}" r="8" fill="none" stroke="#e0307a" stroke-width="2"/><circle cx="${f1(x + 9)}" cy="${f1(y - 9)}" r="6" fill="#e0307a"/>` + txt(x + 9, y - 6, String(n), { fs: 8.5, fill: '#fff', w: 900 }); });
    if (!plain) s += Object.entries(STRAITS).map(([id, [lo, la]]) => hot(id, N_STR[id], ringEl(mx(lo) + 3, my(la) - 3, 16, 16))).join('');
    return wrap(MW, MH, 'خريطة الوطن العربي عليها أربع دوائر حمراء مرقمة على ممرات مائية', s, plain);
  }
  arabStraits.rings = () => Object.fromEntries(Object.entries(STRAITS).map(([id, [lo, la]]) => [id, { cx: mx(lo) + 3, cy: my(la) - 3, rx: 16, ry: 16 }]));

  /* 4 · mountains */
  const MOUNT = { mAtlas: [[-8.5, 31], [-5.5, 32.6], [-2.5, 34], [1, 35.2], [4.5, 35.8], [8.5, 35.8]], mRedSea: [[33, 28], [34.4, 25.6], [35.6, 23.2], [36.6, 20.6], [37.2, 18.2]],
    mHejaz: [[36, 28.2], [37.6, 25.5], [39.2, 22.5], [41, 19.4], [42.6, 16.6], [43.9, 14.6], [44.3, 13.4]], mZagros: ZAGROS, mOman: [[56.3, 25.4], [57.2, 23.6], [58.6, 22.8]] };
  const R_MT = { mAtlas: [0, 33.8, 48, 14, -14], mRedSea: [35, 23, 9, 32, -28], mHejaz: [40.2, 21.5, 10, 46, -33], mZagros: [50.6, 31.4, 9, 36, -48], mOman: [57.4, 24, 9, 13, -30] };
  const N_MT = { mAtlas: 'سلسلة جبال في الشمال الغربي', mRedSea: 'سلسلة جبال غرب البحر الأحمر', mHejaz: 'سلسلة جبال طويلة شرق البحر الأحمر', mZagros: 'سلسلة جبال في أقصى الشرق خارج حدود الدول العربية', mOman: 'سلسلة جبال قصيرة في أقصى جنوب شرق شبه الجزيرة' };
  function arabMountains(q) {
    const plain = !!(q && q.pic && q.pic.plain);
    let s = frame(plain) + base(() => PLAIN_LAND, { over: Object.values(MOUNT).map(p => mtn(p, 1.05)).join('') });
    s += legend([['#9a5b2e', 'جبال']]);
    if (!plain) s += hotAll(R_MT, N_MT, Object.keys(R_MT));
    return wrap(MW, MH, 'خريطة الوطن العربي عليها خمس سلاسل جبلية بنية', s, plain);
  }
  arabMountains.rings = ringsOf(R_MT);

  /* 5 · plateaus */
  const SHAM = [[36.6, 34.5], [38.8, 33.6], [41, 34.5], [42.4, 32], [41.5, 30.4], [39, 29.6], [37.6, 30.4], [36.4, 32.4]];
  const NAJD = [[41, 28.3], [44.5, 28.2], [46.8, 26.6], [47, 23.4], [45, 21], [42.6, 21.6], [41.2, 24.2]];
  const HADRA = [[46.4, 15.2], [48.6, 16.3], [51.5, 17], [53, 16.8], [52, 15.4], [49.6, 14.4], [47.2, 14.1]];
  const PL_COL = { pNafr: '#f6c453', pSham: '#e7863a', pNajd: '#f0a25a', pHadra: '#d9682c' };
  const R_PL = { pNafr: [10, 26, 66, 26], pSham: [39.2, 32.1, 13, 10], pNajd: [44, 24.8, 13, 15], pHadra: [49.7, 15.6, 15, 7] };
  const N_PL = { pNafr: 'مساحة صفراء واسعة تغطي شمال إفريقيا', pSham: 'مساحة برتقالية في شمال شبه الجزيرة', pNajd: 'مساحة برتقالية في وسط شبه الجزيرة', pHadra: 'مساحة برتقالية داكنة في جنوب شبه الجزيرة' };
  function arabPlateaus(q) {
    const plain = !!(q && q.pic && q.pic.plain);
    const af = id => (C[id] && C[id][0] === 1) || id === 'comoros';
    const pl = `<path d="${P(SHAM)}" fill="${PL_COL.pSham}"/><path d="${P(NAJD)}" fill="${PL_COL.pNajd}"/><path d="${P(HADRA)}" fill="${PL_COL.pHadra}"/>`;
    let s = frame(plain) + base(id => (af(id) ? PL_COL.pNafr : '#f8ead0'), { clip: pl });
    s += legend([[PL_COL.pNafr, 'هضاب الجناح الإفريقي'], [PL_COL.pSham, 'هضاب الجناح الآسيوي']]);
    if (!plain) s += hotAll(R_PL, N_PL, Object.keys(R_PL));
    return wrap(MW, MH, 'خريطة الوطن العربي: الجزء الإفريقي أصفر، وفي شبه الجزيرة ثلاث مساحات برتقالية في الشمال والوسط والجنوب', s, plain);
  }
  arabPlateaus.rings = ringsOf(R_PL);

  /* 6 · plains */
  const COASTS = [[[-17.2, 16], [-16.3, 20], [-16.5, 23.6], [-13.5, 27.3], [-9.8, 29.7], [-8.6, 33.4], [-5.9, 35.8], [-1, 35.4], [3, 36.8], [9.8, 37.3], [11, 35.6]], [[29.5, 31.1], [32, 31.3]], [[34.3, 31.4], [35, 32.8], [35.6, 34.5], [35.9, 35.9]],
    [[35.3, 28.3], [36.8, 25.4], [39, 21.6], [40.6, 18.8], [42.6, 15.4]], [[48.1, 29.3], [49.6, 27], [50.4, 25.5], [52, 24.2], [55, 24.8]], [[33.8, 27.2], [35.5, 24]]];
  const R_PN = { plFlood: [31.4, 26, 12, 34], plCoast: [-14.6, 25, 9, 26, 25], plDesert: [18, 25, 30, 18] };
  const N_PN = { plFlood: 'شريط أخضر على جانبي نهر في الشمال الشرقي لإفريقيا', plCoast: 'شريط بنفسجي على الساحل الغربي', plDesert: 'مساحة رملية واسعة في وسط شمال إفريقيا' };
  function arabPlains(q) {
    const plain = !!(q && q.pic && q.pic.plain);
    const green = `<path d="${PL(NILE)}" fill="none" stroke="#5fb85a" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/><path d="${PL([[42, 35.6], [43.6, 34], [45, 32.6], [46.8, 31.1], [47.8, 30.4]])}" fill="none" stroke="#5fb85a" stroke-width="10" stroke-linecap="round"/>`;
    const purple = COASTS.map(c => `<path d="${PL(c)}" fill="none" stroke="#b05fc0" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round"/>`).join('');
    let s = frame(plain) + base(() => '#f1d9a6', { clip: purple + green });
    s += legend([['#b05fc0', 'سهول ساحلية'], ['#5fb85a', 'سهول فيضية'], ['#f1d9a6', 'سهول صحراوية']]);
    if (!plain) s += hotAll(R_PN, N_PN, Object.keys(R_PN));
    return wrap(MW, MH, 'خريطة الوطن العربي: أشرطة خضراء على جانبي الأنهار، وأشرطة بنفسجية على السواحل، ومساحات رملية', s, plain);
  }
  arabPlains.rings = ringsOf(R_PN);

  /* 7 · climate regions */
  const MEDA = [[[-10, 31.5], [-1, 33.6], [5, 34.4], [10, 33.8], [11.6, 34], [12, 38], [-10, 38]], [[19.5, 32.3], [23, 32.2], [23, 33.5], [19.5, 33.5]], [[34, 31.6], [36.5, 32.2], [40, 34.4], [44, 35], [46, 35.4], [46, 38], [34, 38]]];
  const TROP = [[[-18, 16.8], [-6, 16.3], [-5, 14], [-18, 14]], [[21.5, 13.4], [27, 12.6], [32, 12.8], [36.5, 13.6], [37.5, 12], [37.5, 8], [21.5, 8]], [[41.5, 12.2], [46, 11], [51.5, 11.4], [52, -3], [41, -3]], [[43, 13.4], [45, 13.2], [45, 12], [43, 12]]];
  const CL = { cMed: '#8cc97a', cDesert: '#f6e27a', cTrop: '#f0973c' };
  const R_CL = { cMed: [0, 34.6, 40, 8, -6], cDesert: [12, 24, 52, 22], cTrop: [46, 5, 12, 22, -20] };
  const N_CL = { cMed: 'شريط أخضر على الأطراف الشمالية', cDesert: 'مساحة صفراء واسعة في الوسط', cTrop: 'مساحة برتقالية في أقصى الجنوب الشرقي لإفريقيا' };
  function arabClimate(q) {
    const plain = !!(q && q.pic && q.pic.plain);
    const over = MEDA.map(p => `<path d="${P(p)}" fill="${CL.cMed}"/>`).join('') + TROP.map(p => `<path d="${P(p)}" fill="${CL.cTrop}"/>`).join('');
    let s = frame(plain) + base(id => (id === 'comoros' ? CL.cTrop : CL.cDesert), { clip: over });
    s += `<path d="M${FX[0]} ${f1(my(23.5))}H${FX[0] + FX[2]}" stroke="#3a5c75" stroke-width=".8" stroke-dasharray="4 3"/><path d="M${FX[0]} ${f1(my(0))}H${FX[0] + FX[2]}" stroke="#3a5c75" stroke-width=".8"/>`;
    s += legend([[CL.cMed, 'أخضر'], [CL.cDesert, 'أصفر'], [CL.cTrop, 'برتقالي']]);
    if (!plain) s += hotAll(R_CL, N_CL, Object.keys(R_CL));
    return wrap(MW, MH, 'خريطة الوطن العربي بثلاثة ألوان: أخضر في الشمال، وأصفر في الوسط، وبرتقالي في الجنوب', s, plain);
  }
  arabClimate.rings = ringsOf(R_CL);

  /* ================= 8 · a landscape from the side (340 x 250) ================= */
  const palm = (x, y, k = 1) => `<g transform="translate(${x} ${y}) scale(${k})"><path d="M0 0C1 -10 -1 -20 2 -30" stroke="#8a5a2b" stroke-width="3" fill="none"/><g fill="#4f9a3e"><path d="M2 -30C-6 -34 -12 -32 -16 -26C-9 -29 -4 -29 2 -30Z"/><path d="M2 -30C10 -35 16 -32 19 -26C12 -29 7 -29 2 -30Z"/><path d="M2 -30C-2 -38 -8 -40 -12 -40C-6 -36 -2 -33 2 -30Z"/><path d="M2 -30C6 -38 12 -40 16 -39C10 -36 6 -33 2 -30Z"/></g></g>`;
  const LF = { lfMount: [44, 92, 40, 70], lfPlat: [116, 118, 40, 44], lfOasis: [190, 170, 34, 26], lfDunes: [266, 160, 46, 30], lfWadi: [190, 222, 60, 18], lfPlain: [300, 210, 34, 30] };
  const N_LF = { lfMount: 'قمة عالية مدببة على اليسار', lfPlat: 'أرض مرتفعة سطحها مستوٍ', lfOasis: 'أرض منخفضة فيها ماء ونخيل', lfDunes: 'تلال رملية صفراء متموجة', lfWadi: 'مجرى جاف متعرج بلا ماء', lfPlain: 'أرض مستوية خضراء بجوار نهر' };
  function landforms(q) {
    const plain = !!(q && q.pic && q.pic.plain);
    let s = plain ? '' : `<rect width="340" height="250" rx="14" fill="${PAPER}"/>`;
    s += `<rect x="6" y="6" width="328" height="238" rx="10" fill="#dff1fb"/>`;
    s += `<path d="M6 178L20 120L44 30L66 96L80 130L96 108L144 108L150 140L166 150L176 168L214 168L222 150L236 140C246 132 258 132 266 140C276 130 290 132 300 146L310 160L334 162V244H6Z" fill="#e9c98e"/>`;
    s += `<path d="M30 70L44 30L58 72Z" fill="#fff" opacity=".85"/><path d="M6 178L20 120L44 30L66 96L80 130L96 150L6 200Z" fill="#b78452" opacity=".75"/>`;
    s += `<path d="M96 108H144L150 140H90Z" fill="#c99760"/><path d="M96 108H144" stroke="#8a5a2b" stroke-width="2"/>`;
    s += `<path d="M168 168C176 178 204 178 214 168Z" fill="#7cc4e8"/>` + palm(176, 168, .8) + palm(206, 168, .75) + palm(192, 166, .9);
    s += `<path d="M236 140C246 128 258 128 266 138C276 126 290 128 300 144" fill="#f3d27e" stroke="#d9b257" stroke-width="2"/>`;
    s += `<path d="M130 228C150 214 170 232 190 220S230 232 252 218" fill="none" stroke="#a87c4a" stroke-width="7" stroke-linecap="round"/><path d="M130 228C150 214 170 232 190 220S230 232 252 218" fill="none" stroke="#d8b680" stroke-width="3" stroke-dasharray="3 5" stroke-linecap="round"/>`;
    s += `<path d="M270 244C280 220 300 200 334 192V244Z" fill="#8fd16f"/><path d="M286 244C296 222 312 206 334 200" fill="none" stroke="#3d8fd0" stroke-width="5" stroke-linecap="round"/>`;
    s += `<circle cx="300" cy="40" r="14" fill="#f2b134"/>`;
    if (!plain) s += Object.entries(LF).map(([id, r]) => hot(id, N_LF[id], ringEl(...r))).join('');
    return wrap(340, 250, 'رسم لمنظر طبيعي من الجانب فيه قمة عالية وأرض مرتفعة مستوية وماء ونخيل وتلال رملية ومجرى جاف وأرض خضراء بجوار نهر', s, plain);
  }
  landforms.rings = () => Object.fromEntries(Object.entries(LF).map(([id, r]) => [id, { cx: r[0], cy: r[1], rx: r[2], ry: r[3] }]));

  /* ================= 9 · a mountain, the wind and the rain (340 x 250) ================= */
  const MR = { slopeWind: [108, 160, 52, 56], slopeLee: [238, 160, 52, 56], peakSnow: [172, 66, 30, 26] };
  const N_MR = { slopeWind: 'السفح الأيسر من الجبل، الذي تأتي منه السحب', slopeLee: 'السفح الأيمن من الجبل، البعيد عن السحب', peakSnow: 'القمة العالية البيضاء' };
  function mountainRain(q) {
    const plain = !!(q && q.pic && q.pic.plain);
    let s = plain ? '' : `<rect width="340" height="250" rx="14" fill="${PAPER}"/>`;
    s += `<rect x="6" y="6" width="328" height="238" rx="10" fill="#dff1fb"/><path d="M6 214H334V244H6Z" fill="#7cc4e8"/>`;
    s += `<path d="M40 216L172 44L300 216Z" fill="#a8774a"/><path d="M40 216L172 44L120 216Z" fill="#8bbf6a"/><path d="M150 72L172 44L196 74L184 70L172 78L160 70Z" fill="#fff"/>`;
    s += `<g fill="#9fb3c4"><ellipse cx="62" cy="70" rx="34" ry="16"/><ellipse cx="96" cy="88" rx="30" ry="14"/><ellipse cx="40" cy="96" rx="24" ry="12"/></g>`;
    for (let i = 0; i < 9; i++) { const x = 52 + i * 9, y = 108 + (i % 3) * 8; s += `<path d="M${x} ${y}l-4 10" stroke="#3d8fd0" stroke-width="2" stroke-linecap="round"/>`; }
    s += `<path d="M12 60H40M16 76H44M20 92H34" stroke="#3a5c75" stroke-width="2.4" stroke-linecap="round"/><path d="M40 60l-6 -4M40 60l-6 4M44 76l-6 -4M44 76l-6 4" stroke="#3a5c75" stroke-width="2.4" stroke-linecap="round"/>`;
    s += `<circle cx="300" cy="40" r="14" fill="#f2b134"/>`;
    if (!plain) s += Object.entries(MR).map(([id, r]) => hot(id, N_MR[id], ringEl(...r))).join('');
    return wrap(340, 250, 'رسم لجبل عالٍ قمته بيضاء، وسحب ورياح تأتي من جهة اليسار، وسفح أخضر وسفح بني', s, plain);
  }
  mountainRain.rings = () => Object.fromEntries(Object.entries(MR).map(([id, r]) => [id, { cx: r[0], cy: r[1], rx: r[2], ry: r[3] }]));

  /* ================= 10 · four environmental problems (340 x 250): four panels ================= */
  const EP = [['eDrought', 8, 8], ['eDesertif', 172, 8], ['ePollution', 8, 128], ['eFlood', 172, 128]];
  const N_EP = { eDrought: 'لوحة فيها أرض متشققة وشمس حارقة', eDesertif: 'لوحة فيها رمال تغطي أرضًا خضراء وجذوع أشجار مقطوعة', ePollution: 'لوحة فيها مداخن مصنع يخرج منها دخان كثيف', eFlood: 'لوحة فيها ماء كثير يغطي البيوت' };
  function envProblems(q) {
    const plain = !!(q && q.pic && q.pic.plain);
    let s = plain ? '' : `<rect width="340" height="250" rx="14" fill="${PAPER}"/>`;
    const W = 160, H = 114;
    EP.forEach(([id, x, y]) => {
      s += `<g transform="translate(${x} ${y})"><rect width="${W}" height="${H}" rx="10" fill="#e9f5fb" stroke="#c9b48a" stroke-width="1.5"/>`;
      if (id === 'eDrought') {
        s += `<circle cx="128" cy="26" r="14" fill="#f29a34"/><path d="M0 62H${W}V${H - 10}Q${W} ${H} ${W - 10} ${H}H10Q0 ${H} 0 ${H - 10}Z" fill="#d9b27a"/>`;
        s += `<path d="M20 74l14 10l-4 12M60 70l-8 16l14 10M96 76l16 8l-6 16M128 72l-10 14l12 10M40 98l18 4" stroke="#8a5a2b" stroke-width="2" fill="none" stroke-linecap="round"/>`;
        s += `<path d="M70 62v-14M70 52l-6 -6M70 50l6 -7" stroke="#8a6d3b" stroke-width="2" fill="none" stroke-linecap="round"/>`;
      } else if (id === 'eDesertif') {
        s += `<path d="M0 64H${W}V${H - 10}Q${W} ${H} ${W - 10} ${H}H10Q0 ${H} 0 ${H - 10}Z" fill="#a9d07e"/><path d="M0 70C30 52 60 58 90 70C110 60 140 56 ${W} 66V${H - 10}Q${W} ${H} ${W - 10} ${H}H10Q0 ${H} 0 ${H - 10}Z" fill="#f0cf7e"/>`;
        s += `<g fill="#9a6a3a"><rect x="40" y="84" width="10" height="10" rx="2"/><rect x="74" y="90" width="12" height="9" rx="2"/><rect x="110" y="82" width="10" height="11" rx="2"/></g><g fill="#c49a6c"><ellipse cx="45" cy="84" rx="5" ry="2"/><ellipse cx="80" cy="90" rx="6" ry="2"/><ellipse cx="115" cy="82" rx="5" ry="2"/></g>`;
        s += `<path d="M14 40h30M20 50h34" stroke="#c9a24a" stroke-width="2.4" stroke-linecap="round"/>`;
      } else if (id === 'ePollution') {
        s += `<path d="M0 84H${W}V${H - 10}Q${W} ${H} ${W - 10} ${H}H10Q0 ${H} 0 ${H - 10}Z" fill="#bfc6cc"/><rect x="40" y="56" width="70" height="30" fill="#8d99a6"/><rect x="52" y="22" width="10" height="36" fill="#6f7c89"/><rect x="82" y="30" width="10" height="28" fill="#6f7c89"/>`;
        s += `<g fill="#5a5a5a" opacity=".8"><circle cx="58" cy="16" r="8"/><circle cx="68" cy="8" r="9"/><circle cx="86" cy="22" r="7"/><circle cx="96" cy="14" r="8"/><circle cx="110" cy="10" r="7"/></g>`;
      } else {
        s += `<rect x="22" y="40" width="40" height="40" fill="#e6c79a"/><path d="M18 42L42 22L66 42Z" fill="#b5653a"/><rect x="92" y="46" width="44" height="34" fill="#e6c79a"/><path d="M88 48L114 28L140 48Z" fill="#b5653a"/>`;
        s += `<path d="M0 66C20 60 40 70 60 64S100 60 120 66S150 62 ${W} 64V${H - 10}Q${W} ${H} ${W - 10} ${H}H10Q0 ${H} 0 ${H - 10}Z" fill="#8a7a52" opacity=".85"/><path d="M10 80q10 -6 20 0t20 0M70 90q10 -6 20 0t20 0M110 78q10 -6 20 0" stroke="#d9cfa8" stroke-width="2" fill="none"/>`;
        s += `<g fill="#9fb3c4"><ellipse cx="40" cy="14" rx="22" ry="9"/><ellipse cx="110" cy="14" rx="26" ry="9"/></g>`;
      }
      s += `</g>`;
      if (!plain) s += hot(id, N_EP[id], ringRect(x + 2, y + 2, W - 4, H - 4, 10));
    });
    return wrap(340, 250, 'أربع لوحات لمشكلات بيئية: أرض متشققة، ورمال فوق جذوع أشجار مقطوعة، ومصنع يخرج منه دخان، وماء يغطي البيوت', s, plain);
  }
  envProblems.rects = () => EP.map(([id, x, y]) => ({ id, x, y, w: 160, h: 114 }));

  window.CH_DIAGRAMS = Object.assign(window.CH_DIAGRAMS || {}, { arabWings, arabBorders, arabStraits, arabMountains, arabPlateaus, arabPlains, arabClimate, landforms, mountainRain, envProblems });
  window.S6ART = { arabWings, arabBorders, arabStraits, arabMountains, arabPlateaus, arabPlains, arabClimate, landforms, mountainRain, envProblems, txt, hot, ringRect, ringEl, wrap, path, f1, esc, mx, my, INK, PAPER, FONT, MW, MH };
})();
