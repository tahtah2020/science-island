/* Motafawek · Math · Grade 6 · drawings made in code (SVG). Self-contained (common.js loads only the chapter's one art file).
   Shared by the unit games (math-boxes.html, math-climb.html), the question pages (quiz.html) and the maps (math/tools/make_m_maps.js).
   Nothing here is copied from the school book: the lines, the circles, the boxes and the fruit bags are drawn with simple shapes.
   window.CH_DIAGRAMS gets the pictures a question can show (q.fig + q.pic) or tap (q.diagram + q.pic):
     Unit 1: vennGCF    (vnL | vnM | vnR)         two circles with the prime factors of two numbers, q.pic = { a: 12, b: 18, blank: 'M' | null }
             factorTree (picture only)            q.pic = { tree: { v: 40, c: [{ v: 4, c: [{ v: 2 }, { v: 2 }] }, { v: 10, c: [{ v: 2 }, { v: 5 }] }] } }, a node with q: true shows "?"
             boxPack    (picture only)            q.pic = { boxes: 4, g: 3, c: 2 }  boxes of grain bags (g) and cheese packs (c)
             bagFrac    (picture only)            q.pic = { bags: [{ n: 4, k: 3, name: 'Persimmons', col: '#f2a24a' }] }  a bag of n pieces, k of them left
     Unit 2: numLine6   (lnA … lnF)               q.pic = { min: -10, max: 10, pts: [{ v: -3, l: 'A', show: true }], arcs: [{ a: 0, b: -2, t: '2' }], vertical: true, lab: 2 }
                                                  pt.t = the letter drawn (Arabic أ ب ج د هـ), the tap id stays 'ln' + pt.l
             setsCircles (stRat | stInt | stNat | stCnt)   rational ⊃ integers ⊃ natural ⊃ counting numbers, q.pic = { samples: true }
   Numbers stay left to right, also for an Arabic player. Names read by screen readers describe what is drawn, never the answer. */
(function () {
  'use strict';
  const T = (en, ar) => (window.SI ? window.SI.T(en, ar) : en);
  const f1 = n => (Math.round(n * 10) / 10).toString();
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const COL = { ink: '#1f3d57', line: '#9db3c4', paper: '#fffaf0', blue: '#bcd9f2', blueD: '#7fb0dc', yellow: '#fbe38c', yellowD: '#e0b93a', green: '#c3e6cf', greenD: '#5aa77f', coral: '#e2603f', pink: '#f5d3c2', purple: '#e3d6f4', purpleD: '#9a7fc4', brown: '#c98b4a', brownD: '#8a5a28' };
  const fmt = v => String(v).replace('-', '−');
  const num = (x, y, s, o = {}) => `<text x="${f1(x)}" y="${f1(y)}" text-anchor="${o.anchor || 'middle'}" direction="ltr" unicode-bidi="embed" font-size="${o.fs || 13}" font-weight="${o.fw || 900}" fill="${o.fill || COL.ink}">${esc(s)}</text>`;
  const lab = (x, y, s, o = {}) => `<text x="${f1(x)}" y="${f1(y)}" text-anchor="${o.anchor || 'middle'}" direction="ltr" unicode-bidi="embed" font-size="${o.fs || 11}" font-weight="${o.fw || 800}" fill="${o.fill || COL.ink}">${esc(s)}</text>`;
  const hot = (id, name, inner) => `<g class="hot" data-id="${id}" role="button" tabindex="0" aria-label="${esc(name)}">${inner}</g>`;
  const svgOpen = (w, h, name) => `<svg class="diagram" viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(name)}"><rect width="${w}" height="${h}" rx="14" fill="${COL.paper}"/>`;
  const isTap = q => !!(q && q.type === 'tap');
  /* q.pic.plain: the drawing only (no svg wrapper, no background, no tap rings) so a game can draw it inside its own scene */
  const PL = q => !!(q && q.pic && q.pic.plain);
  const open_ = (q, w, h, name) => (PL(q) ? '' : svgOpen(w, h, name));
  const close_ = q => (PL(q) ? '' : '</svg>');

  /* ================= a number line (horizontal or vertical) with lettered points ================= */
  function numLine6(q) {
    const p = (q && q.pic) || { min: -5, max: 5, pts: [] }, min = p.min, max = p.max, pts = p.pts || [], arcs = p.arcs || [], tap = isTap(q);
    const span = max - min, step = p.step || 1, lab_ = p.lab || (span <= 10 ? 1 : span <= 20 ? 2 : 5), vert = !!p.vertical;
    const name = T('A number line from ' + fmt(min) + ' to ' + fmt(max) + (pts.length ? ' with some lettered points' : ''), 'خط أعداد من ' + fmt(min) + ' إلى ' + fmt(max) + (pts.length ? ' عليه نقاط مرمّزة بحروف' : ''));
    const lead = (k) => { const v = Math.round((min + k * step) * 1000) / 1000; return v; };
    const N = Math.round(span / step);
    if (!vert) {
      const showV = pts.some(pt => pt.show), H = (arcs.length ? 130 : 108) + (showV ? 14 : 0), X0 = 22, W = 296, Y = arcs.length ? 78 : 62, X = v => X0 + (v - min) / span * W;
      let s = open_(q, 340, H, name);
      s += `<path d="M10 ${Y}H330" stroke="${COL.ink}" stroke-width="3" stroke-linecap="round"/><path d="M18 ${Y - 7}L8 ${Y}L18 ${Y + 7}M322 ${Y - 7}L332 ${Y}L322 ${Y + 7}" fill="none" stroke="${COL.ink}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>`;
      for (let k = 0; k <= N; k++) {
        const v = lead(k), x = X(v), big = Math.abs(v % lab_) < 1e-9 || Math.abs(Math.abs(v % lab_) - lab_) < 1e-9;
        s += `<path d="M${f1(x)} ${Y - (big ? 8 : 5)}V${Y + (big ? 8 : 5)}" stroke="${COL.ink}" stroke-width="${big ? 2.6 : 1.8}"/>`;
        if (big) s += num(x, Y + 26, fmt(v), { fs: 12 });
      }
      arcs.forEach(a => {
        const xa = X(a.a), xb = X(a.b), top = Y - 36;
        s += `<path d="M${f1(xa)} ${Y - 10}V${top}H${f1(xb)}V${Y - 10}" fill="none" stroke="${a.c || COL.blueD}" stroke-width="3" stroke-linejoin="round"/>` + num((xa + xb) / 2, top - 6, a.t, { fs: 13 });
      });
      pts.forEach(pt => {
        const x = X(pt.v), dy = pt.dy != null ? pt.dy : 0, body = `<circle cx="${f1(x)}" cy="${Y}" r="6.5" fill="${pt.c || COL.coral}" stroke="${COL.ink}" stroke-width="2"/>`
          + (pt.l ? num(x, Y - 16 + dy, pt.t || pt.l, { fs: 14 }) : '') + (pt.show ? num(x, Y + 44, fmt(pt.show === true ? pt.v : pt.show), { fs: 11, fill: COL.coral }) : '');
        s += tap ? hot('ln' + pt.l, T('Point ' + pt.l, 'النقطة ' + (pt.t || pt.l)), body + `<circle class="ring" cx="${f1(x)}" cy="${Y}" r="15"/>`) : body;
      });
      return s + close_(q);
    }
    /* vertical: the smallest number at the bottom */
    const H = 330, Y0 = 318, Hh = 300, X = 150, Yv = v => Y0 - (v - min) / span * Hh;
    let s = open_(q, 340, H, name);
    s += `<path d="M${X} ${Y0 + 8}V10" stroke="${COL.ink}" stroke-width="3" stroke-linecap="round"/><path d="M${X - 7} 20L${X} 8L${X + 7} 20M${X - 7} ${Y0 - 2}L${X} ${Y0 + 10}L${X + 7} ${Y0 - 2}" fill="none" stroke="${COL.ink}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>`;
    for (let k = 0; k <= N; k++) {
      const v = lead(k), y = Yv(v), big = Math.abs(v % lab_) < 1e-9 || Math.abs(Math.abs(v % lab_) - lab_) < 1e-9;
      s += `<path d="M${X - (big ? 8 : 5)} ${f1(y)}H${X + (big ? 8 : 5)}" stroke="${COL.ink}" stroke-width="${big ? 2.6 : 1.8}"/>`;
      if (big) s += num(X - 14, y + 4.5, fmt(v), { fs: 12, anchor: 'end' });
    }
    pts.forEach(pt => {
      const y = Yv(pt.v), body = `<circle cx="${X}" cy="${f1(y)}" r="6.5" fill="${pt.c || COL.coral}" stroke="${COL.ink}" stroke-width="2"/>` + (pt.l ? num(X + 22, y + 5, pt.t || pt.l, { fs: 14, anchor: 'start' }) : '') + (pt.show ? num(X + 46, y + 5, fmt(pt.show === true ? pt.v : pt.show), { fs: 11, fill: COL.coral, anchor: 'start' }) : '');
      s += tap ? hot('ln' + pt.l, T('Point ' + pt.l, 'النقطة ' + (pt.t || pt.l)), body + `<circle class="ring" cx="${X}" cy="${f1(y)}" r="15"/>`) : body;
    });
    return s + close_(q);
  }

  /* ================= two circles with the prime factors of two numbers ================= */
  function primeFactors(n) { const out = []; for (let d = 2; n > 1; d++) while (n % d === 0) { out.push(d); n /= d; } return out; }
  function vennParts(a, b) {
    const A = primeFactors(a), B = primeFactors(b).slice(), M = [], L = [];
    A.forEach(x => { const i = B.indexOf(x); if (i >= 0) { M.push(x); B.splice(i, 1); } else L.push(x); });
    return { L, M, R: B };
  }
  function vennGCF(q) {
    const p = (q && q.pic) || { a: 12, b: 18 }, parts = vennParts(p.a, p.b), tap = isTap(q), H = 186;
    let s = open_(q, 340, H, T('A Venn diagram with the prime factors of ' + p.a + ' and ' + p.b, 'شكل فن بالعوامل الأولية للعددين ' + p.a + ' و' + p.b));
    s += `<circle cx="128" cy="108" r="64" fill="${COL.yellow}" fill-opacity=".75" stroke="${COL.yellowD}" stroke-width="3"/><circle cx="212" cy="108" r="64" fill="${COL.blue}" fill-opacity=".75" stroke="${COL.blueD}" stroke-width="3"/>`;
    s += lab(96, 24, T('Prime factors of', 'العوامل الأولية للعدد'), { fs: 9.5 }) + num(96, 38, String(p.a), { fs: 15 }) + lab(170, 20, T('Common', 'المشتركة'), { fs: 9.5 }) + lab(244, 24, T('Prime factors of', 'العوامل الأولية للعدد'), { fs: 9.5 }) + num(244, 38, String(p.b), { fs: 15 });
    const put = (list, cx, key) => {
      const vals = p.blank === key ? ['?'] : list, gap = 24, y0 = 108 - (vals.length - 1) * gap / 2 + 6;
      return vals.map((v, i) => num(cx, y0 + i * gap, String(v), { fs: 20 })).join('');
    };
    s += put(parts.L, 92, 'L') + put(parts.M, 170, 'M') + put(parts.R, 248, 'R');
    if (tap) {
      s += hot('vnL', T('Left circle only', 'الدائرة اليسرى فقط'), '<rect class="ring" x="58" y="60" width="64" height="100" rx="14"/>')
        + hot('vnM', T('Where the circles overlap', 'منطقة تقاطع الدائرتين'), '<rect class="ring" x="138" y="60" width="64" height="100" rx="14"/>')
        + hot('vnR', T('Right circle only', 'الدائرة اليمنى فقط'), '<rect class="ring" x="218" y="60" width="64" height="100" rx="14"/>');
    }
    return s + close_(q);
  }

  /* ================= a factor tree ================= */
  function factorTree(q) {
    const root = ((q && q.pic) || { tree: { v: 40, c: [{ v: 4, c: [{ v: 2 }, { v: 2 }] }, { v: 10, c: [{ v: 2 }, { v: 5 }] }] } }).tree;
    let leaves = 0, depth = 0;
    (function walk(n, d) { depth = Math.max(depth, d); if (!n.c) { n.i = leaves++; } else n.c.forEach(c => walk(c, d + 1)); })(root, 0);
    const W = 340, gapX = Math.min(70, 300 / leaves), x0 = (W - (leaves - 1) * gapX) / 2, dy = 58, H = 40 + depth * dy + 30;
    (function place(n, d) { n.d = d; if (n.c) { n.c.forEach(c => place(c, d + 1)); n.x = n.c.reduce((a, c) => a + c.x, 0) / n.c.length; } else n.x = x0 + n.i * gapX; })(root, 0);
    let lines = '', nodes = '';
    (function draw(n) {
      const y = 36 + n.d * dy;
      if (n.c) n.c.forEach(c => { lines += `<path d="M${f1(n.x)} ${y + 14}L${f1(c.x)} ${36 + c.d * dy - 14}" stroke="${COL.purpleD}" stroke-width="2.6" stroke-linecap="round"/>`; draw(c); });
      const t = n.q ? '?' : String(n.v);
      if (n.d === 0) nodes += `<rect x="${f1(n.x - 24)}" y="${y - 16}" width="48" height="32" rx="7" fill="#fff" stroke="${COL.blueD}" stroke-width="3"/>` + num(n.x, y + 6, t, { fs: 18 });
      else if (!n.c) nodes += `<circle cx="${f1(n.x)}" cy="${y}" r="16" fill="${COL.paper}" stroke="${COL.coral}" stroke-width="3"/>` + num(n.x, y + 6, t, { fs: 17, fill: COL.coral });
      else nodes += num(n.x, y + 6, t, { fs: 18 });
    })(root);
    return open_(q, W, H, T('A factor tree', 'شجرة عوامل')) + lines + nodes + close_(q);
  }

  /* ================= donation boxes with grain bags (g) and cheese packs (c) ================= */
  function boxPack(q) {
    const p = (q && q.pic) || { boxes: 4, g: 3, c: 2 }, perRow = Math.min(p.boxes, 4), rows = Math.ceil(p.boxes / perRow), bw = 62, bh = 84, gap = 10;
    const W = 340, H = rows * (bh + gap) + 14, x0 = (W - (perRow * bw + (perRow - 1) * gap)) / 2;
    let s = open_(q, W, H, T('Donation boxes with grain bags and cheese packs', 'صناديق تبرعات فيها أكياس حبوب وعبوات جبن'));
    for (let b = 0; b < p.boxes; b++) {
      const bx = x0 + (b % perRow) * (bw + gap), by = 8 + Math.floor(b / perRow) * (bh + gap);
      s += `<rect x="${f1(bx)}" y="${by}" width="${bw}" height="${bh}" rx="9" fill="#f3dfb6" stroke="${COL.brownD}" stroke-width="3"/>`;
      const cols = 3, cell = 17, ix = bx + (bw - cols * cell) / 2 + cell / 2;
      for (let i = 0; i < p.g; i++) s += `<rect x="${f1(ix + (i % cols) * cell - 6)}" y="${by + 8 + Math.floor(i / cols) * 17}" width="12" height="13" rx="4" fill="${COL.brown}" stroke="${COL.brownD}" stroke-width="1.5"/>`;
      const gRows = Math.ceil(p.g / cols);
      for (let i = 0; i < p.c; i++) s += `<path d="M${f1(ix + (i % cols) * cell - 6)} ${by + 8 + gRows * 17 + Math.floor(i / cols) * 17 + 13}h12l-3 -12z" fill="${COL.yellow}" stroke="${COL.yellowD}" stroke-width="1.5" stroke-linejoin="round"/>`;
    }
    return s + close_(q);
  }

  /* ================= bags of fruit: n pieces in a full bag, k pieces left ================= */
  function bagFrac(q) {
    const p = (q && q.pic) || { bags: [{ n: 4, k: 3, name: 'Persimmons' }] }, bags = p.bags, per = Math.min(bags.length, 4), rows = Math.ceil(bags.length / per), bw = 74, bh = 96, gap = 12;
    const W = 340, H = rows * (bh + 52) + 10, x0 = (W - (per * bw + (per - 1) * gap)) / 2;
    let s = open_(q, W, H, T('Bags of fruit with some pieces left', 'أكياس فاكهة بقي فيها بعض القطع'));
    bags.forEach((b, i) => {
      const bx = x0 + (i % per) * (bw + gap), by = 22 + Math.floor(i / per) * (bh + 52), col = b.col || '#f2a24a', cols = b.n <= 8 ? 2 : 4, nr = Math.ceil(b.n / cols), cw = (bw - 14) / cols, ch = Math.min(cw, (bh - 14) / nr), r = Math.min(cw, ch) / 2 - 1.5;
      s += `<path d="M${f1(bx + bw / 2)} ${by - 2}l-12 -12h24z" fill="${COL.coral}" stroke="${COL.ink}" stroke-width="2" stroke-linejoin="round"/>`;
      s += `<rect x="${f1(bx)}" y="${by}" width="${bw}" height="${bh}" rx="10" fill="#fff" stroke="${COL.ink}" stroke-width="3"/>`;
      for (let j = 0; j < b.n; j++) {
        const cx = bx + 7 + cw / 2 + (j % cols) * cw, cy = by + 7 + ch / 2 + Math.floor(j / cols) * ch, on = j < b.k;
        s += `<circle cx="${f1(cx)}" cy="${f1(cy)}" r="${f1(r)}" fill="${on ? col : 'none'}" stroke="${on ? COL.ink : COL.line}" stroke-width="${on ? 2 : 1.6}" ${on ? '' : 'stroke-dasharray="3 3"'}/>`;
      }
      s += lab(bx + bw / 2, by + bh + 17, b.name || '', { fs: 11 });
      if (b.show) s += num(bx + bw / 2, by + bh + 34, b.show, { fs: 13, fill: COL.coral });
    });
    return s + close_(q);
  }

  /* ================= the sets of numbers: rational ⊃ integers ⊃ natural ⊃ counting ================= */
  function setsCircles(q) {
    const p = (q && q.pic) || {}, tap = isTap(q), cx = 170, cy = 116, R = [108, 80, 54, 28];
    const ring = (id, name, ro, ri) => {
      const d = `M${cx + ro} ${cy}A${ro} ${ro} 0 1 0 ${cx - ro} ${cy}A${ro} ${ro} 0 1 0 ${cx + ro} ${cy}Z` + (ri ? `M${cx + ri} ${cy}A${ri} ${ri} 0 1 1 ${cx - ri} ${cy}A${ri} ${ri} 0 1 1 ${cx + ri} ${cy}Z` : '');
      return hot(id, name, `<path class="ring" fill-rule="evenodd" d="${d}"/>`);
    };
    let s = open_(q, 340, 232, T('Circles inside circles: rational numbers, integers, natural numbers and counting numbers', 'دوائر داخل دوائر: الأعداد النسبية والصحيحة والطبيعية والعدّية'));
    [[R[0], COL.purple, COL.purpleD], [R[1], COL.green, COL.greenD], [R[2], COL.yellow, COL.yellowD], [R[3], COL.blue, COL.blueD]].forEach(([r, f, st]) => { s += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${f}" stroke="${st}" stroke-width="3"/>`; });
    s += lab(cx, cy - R[0] + 15, T('Rational Numbers', 'الأعداد النسبية'), { fs: 10.5 }) + lab(cx, cy - R[1] + 15, T('Integers', 'الأعداد الصحيحة'), { fs: 10 }) + lab(cx, cy - R[2] + 14, T('Natural Numbers', 'الأعداد الطبيعية'), { fs: 8.8 }) + lab(cx, cy - 6, T('Counting', 'العدّ'), { fs: 8.6 }) + lab(cx, cy + 6, T('Numbers', 'أعداد'), { fs: 8.6 });
    if (p.samples) s += num(cx, cy + 22, '1  2  3', { fs: 10 }) + num(cx, cy - R[2] + 30, '0', { fs: 10 }) + num(cx - 62, cy + 6, '−3', { fs: 11 }) + num(cx + 62, cy + 6, '−7', { fs: 11 }) + num(cx - 88, cy + 30, '0.02', { fs: 11 }) + num(cx + 88, cy + 30, '10.5', { fs: 11 });
    if (tap) s += ring('stRat', T('Rational numbers ring', 'حلقة الأعداد النسبية'), R[0], R[1]) + ring('stInt', T('Integers ring', 'حلقة الأعداد الصحيحة'), R[1], R[2]) + ring('stNat', T('Natural numbers ring', 'حلقة الأعداد الطبيعية'), R[2], R[3]) + ring('stCnt', T('Counting numbers circle', 'دائرة أعداد العدّ'), R[3], 0);
    return s + close_(q);
  }

  window.G6MATH = { primeFactors, vennParts, fmt };
  window.CH_DIAGRAMS = Object.assign(window.CH_DIAGRAMS || {}, { numLine6, vennGCF, factorTree, boxPack, bagFrac, setsCircles });
})();
