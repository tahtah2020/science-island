/* Motafawek · Math · Grade 5 · drawings made in code (SVG).
   Shared by the unit game (math-decimals.html), the pictures of the question pages (quiz.html) and the map (math/tools/make_m_maps.js).
   Nothing here is copied from the school book: the grids, the place value chart and the number line are drawn with simple shapes.
   window.M5ART = the building blocks; window.CH_DIAGRAMS gets the pictures a question can show (q.fig) or tap (q.diagram):
     Unit 1: gridShade   (gA | gB | gC)                       three 10 × 10 grids, q.pic = { vals: [0.3, 0.35, 0.5] }
             placeChart  (hundreds | tens | ones | tenths | hundredths | thousandths)   q.pic = { num: '34.527' }
             numLine     (n0 … n10)                           q.pic = { from: 7, to: 8, at: 7.7 | null, step: 0.1 }
             gridModel   (picture only)                       q.pic = { a: 0.45, b: 0.84, mode: 'add' | 'sub' }
     Unit 2: barModel    (picture only)                       part-to-whole bar, q.pic = { whole: '492.64', parts: ['396.48', 'x'] }  ('x' parts are drawn as an unknown)
             factorTree  (picture only)                       q.pic = { tree: { v: 24, c: [{ v: 4, c: [{ v: 2 }, { v: 2 }] }, { v: 6, c: [{ v: 2 }, { v: 3 }] }] } }, a node with q: true shows "?"
                                                              primes are drawn in circles, composite numbers in squares (as the book asks)
             multVenn    (mvL | mvM | mvR)                    two circles "Multiples of a" and "Multiples of b", q.pic = { a: 3, b: 4, upTo: 12, show: [numbers drawn], blank: true }
             skipLine    (picture only)                       a time line with the first bus marked, q.pic = { from: 3, to: 13, first: 3, pm: 12 }  (no jumps: the picture never shows the answer)
     Unit 3: areaModel   (picture only)                       q.pic = { top: ['200','30','4'], left: ['20','7'], cells: [[…],[…]], hi: [r, c], fill }  ('' empty, '?' unknown)
             unitGrid    (picture only)                       q.pic = { rows: 8, parts: [5, 4] }  (the distributive property)
             longMult    (picture only)                       q.pic = { a: '76', b: '24', parts: ['304', '1,520'], total: '1,824', carry: '1' }  ('?' = an empty box)
   Every Unit 2 and Unit 3 picture honours q.pic.plain (inner markup only, for the game scene).
   The numbers on every picture stay left to right, also for an Arabic player (as in the school book).
   The names read by screen readers describe what is drawn, never the answer. */
(function () {
  'use strict';
  const T = (en, ar) => (window.SI ? window.SI.T(en, ar) : en);
  const f1 = n => (Math.round(n * 10) / 10).toString();
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const at = (x, y, k, inner) => `<g transform="translate(${f1(x)} ${f1(y)})${k != null && k !== 1 ? ` scale(${k})` : ''}">${inner}</g>`;
  const num = (x, y, s, o = {}) => `<text x="${f1(x)}" y="${f1(y)}" text-anchor="${o.anchor || 'middle'}" direction="ltr" unicode-bidi="embed" font-size="${o.fs || 16}" font-weight="${o.fw || 900}" fill="${o.fill || COL.ink}">${esc(s)}</text>`;
  const lab = (x, y, s, o = {}) => `<text x="${f1(x)}" y="${f1(y)}" text-anchor="${o.anchor || 'middle'}" font-size="${o.fs || 11}" font-weight="${o.fw || 800}" fill="${o.fill || COL.ink}">${esc(s)}</text>`;
  const hot = (id, name, inner) => `<g class="hot" data-id="${id}" role="button" tabindex="0" aria-label="${esc(name)}">${inner}</g>`;
  const ringRect = (x, y, w, h, rx = 10) => `<rect class="ring" x="${f1(x)}" y="${f1(y)}" width="${f1(w)}" height="${f1(h)}" rx="${rx}"/>`;
  const svgOpen = (h, name) => `<svg class="diagram" viewBox="0 0 340 ${h}" role="img" aria-label="${esc(name)}">`;
  const COL = { ink: '#1f3d57', line: '#9db3c4', paper: '#fffaf0', tenth: '#f2a24a', tenthD: '#c9761a', hundredth: '#79c69a', hundredthD: '#3f9a6a', thousandth: '#5aa7e0', thousandthD: '#2f78b5',
    whole: '#bcd9f2', wholeD: '#7fb0dc', dec: '#f4c1de', decD: '#d98ab8', yellow: '#f7cf4d', green: '#79c69a', x: '#c0392b' };

  /* ================= the 10 × 10 grid (one whole) ================= */
  /* n hundredths shaded, whole columns (tenths) first. colours: 'split' = full columns orange and the loose squares green (as tenths and hundredths),
     or one colour for all. x = those cells get a cross (subtraction model). Origin: top left, size × size */
  function grid100(x, y, size, n, o = {}) {
    const c = size / 10, cells = [];
    for (let i = 0; i < 100; i++) {
      const col = Math.floor(i / 10), row = i % 10, on = i < n, cross = o.x && i >= (o.xFrom == null ? 100 : o.xFrom) && i < n;
      let fill = '#fff';
      if (on) fill = o.fill ? o.fill : (o.split === false ? COL.tenth : (i < Math.floor(n / 10) * 10 ? COL.tenth : COL.hundredth));
      if (o.second && i >= (o.secondFrom || 0) && on) fill = o.second;
      cells.push(`<rect x="${f1(x + col * c)}" y="${f1(y + row * c)}" width="${f1(c)}" height="${f1(c)}" fill="${fill}" stroke="${COL.line}" stroke-width=".8"/>`);
      if (cross) cells.push(`<path d="M${f1(x + col * c + c * .22)} ${f1(y + row * c + c * .22)}L${f1(x + col * c + c * .78)} ${f1(y + row * c + c * .78)}M${f1(x + col * c + c * .78)} ${f1(y + row * c + c * .22)}L${f1(x + col * c + c * .22)} ${f1(y + row * c + c * .78)}" stroke="${COL.x}" stroke-width="${f1(Math.max(1.4, c * .13))}" stroke-linecap="round"/>`);
    }
    return cells.join('') + `<rect x="${f1(x)}" y="${f1(y)}" width="${f1(size)}" height="${f1(size)}" fill="none" stroke="${COL.ink}" stroke-width="1.6"/>`;
  }
  /* one hundredth square cut into ten slices (thousandths); k slices shaded. Origin: top left */
  function slices(x, y, size, k) {
    const w = size / 10; let s = '';
    for (let i = 0; i < 10; i++) s += `<rect x="${f1(x + i * w)}" y="${f1(y)}" width="${f1(w)}" height="${f1(size)}" fill="${i < k ? COL.thousandth : '#fff'}" stroke="${COL.line}" stroke-width=".8"/>`;
    return s + `<rect x="${f1(x)}" y="${f1(y)}" width="${f1(size)}" height="${f1(size)}" fill="none" stroke="${COL.ink}" stroke-width="1.6"/>`;
  }

  /* ================= the place value chart ================= */
  const PLACES = [
    { id: 'hundreds', w: 42, en: 'Hundreds', ar: 'مئات', c: 'w' }, { id: 'tens', w: 42, en: 'Tens', ar: 'عشرات', c: 'w' }, { id: 'ones', w: 42, en: 'Ones', ar: 'آحاد', c: 'w' },
    { id: 'dot', w: 22, en: '', ar: '', c: 'dot' },
    { id: 'tenths', w: 54, en: 'Tenths', ar: 'أجزاء من عشرة', c: 'd' }, { id: 'hundredths', w: 54, en: 'Hundredths', ar: 'أجزاء من مئة', c: 'd' }, { id: 'thousandths', w: 54, en: 'Thousandths', ar: 'أجزاء من ألف', c: 'd' }
  ];
  /* the digits of a number text, placed in the columns: digitsOf('34.527') = { tens:'3', ones:'4', tenths:'5', … } */
  function digitsOf(s) {
    s = String(s); const [w, d = ''] = s.split('.'), out = {};
    [...w].reverse().forEach((ch, i) => { const id = ['ones', 'tens', 'hundreds'][i]; if (id) out[id] = ch; });
    [...d].forEach((ch, i) => { const id = ['tenths', 'hundredths', 'thousandths'][i]; if (id) out[id] = ch; });
    return out;
  }
  /* the chart as markup at (x, y). o.num = the number; o.show = only these columns hold digits; o.hl = a column to colour; o.hot = columns that can be tapped;
     o.hideHead = no names above the columns; o.rows = a second number below (for addition). Width 308, height 36 + 50 per row */
  function chart(x, y, o = {}) {
    const d = digitsOf(o.num || ''), rows = o.rows || [o.num], head = o.hideHead ? 0 : 36, rowH = 48;
    let cx = x, s = '';
    PLACES.forEach(p => {
      const fill = p.c === 'w' ? COL.whole : p.c === 'd' ? COL.dec : '#fff', stroke = p.c === 'w' ? COL.wholeD : p.c === 'd' ? COL.decD : 'none';
      if (!o.hideHead && p.c !== 'dot') {
        const words = T(p.en, p.ar).split(' '), two = words.length > 1 && p.w < 60, fit = Math.max(...words.map(w => w.length), 1), fz = Math.min(10.5, (p.w - 4) / (fit * .52));
        s += `<rect x="${f1(cx)}" y="${f1(y)}" width="${p.w}" height="${head}" fill="${fill}" stroke="${stroke}" stroke-width="1.4"/>`;
        s += two ? lab(cx + p.w / 2, y + 15, words.slice(0, Math.ceil(words.length / 2)).join(' '), { fs: Math.min(9.5, fz) }) + lab(cx + p.w / 2, y + 28, words.slice(Math.ceil(words.length / 2)).join(' '), { fs: Math.min(9.5, fz) })
          : lab(cx + p.w / 2, y + 23, words.join(' '), { fs: fz });
      }
      rows.forEach((r, ri) => {
        const dr = digitsOf(r || ''), ry = y + head + ri * rowH, on = o.hl === p.id;
        if (p.c === 'dot') { s += num(cx + p.w / 2, ry + 34, '.', { fs: 28 }); return; }
        s += `<rect x="${f1(cx)}" y="${f1(ry)}" width="${p.w}" height="${rowH}" fill="${on ? '#fff3c4' : '#fff'}" stroke="${stroke}" stroke-width="1.4"/>`;
        if (dr[p.id] != null && (!o.show || o.show.includes(p.id))) s += num(cx + p.w / 2, ry + 33, dr[p.id], { fs: 26 });
      });
      cx += p.w;
    });
    return s;
  }
  function chartHots(x, y, ids, h) {
    let cx = x, s = '';
    PLACES.forEach(p => { if (p.c !== 'dot' && ids.includes(p.id)) s += hot(p.id, T(p.en, p.ar), ringRect(cx + 1, y, p.w - 2, h, 6)); cx += p.w; });
    return s;
  }
  function placeChart(q) {
    const p = (q && q.pic) || { num: '34.527' };
    return svgOpen(110, T('A place value chart with a number written in it', 'جدول قيمة مكانية فيه عدد مكتوب')) + `<rect width="340" height="110" rx="14" fill="${COL.paper}"/>`
      + chart(16, 12, { num: p.num, hl: p.hl }) + chartHots(16, 12, PLACES.map(z => z.id), 84) + '</svg>';
  }

  /* ================= the number line ================= */
  /* 11 ticks from `from` to `to`. o.at = a flag at a value; o.all = label every tick; ids n0 … n10 are the ticks (tap targets) */
  function line(x, y, w, o = {}) {
    const from = o.from, to = o.to, k = i => from + (to - from) * i / 10, fmt = v => (Math.round(v * 1000) / 1000).toString(), step = w / 10;
    let s = `<path d="M${f1(x - 10)} ${f1(y)}H${f1(x + w + 10)}" stroke="${COL.ink}" stroke-width="3" stroke-linecap="round"/>`;
    for (let i = 0; i <= 10; i++) {
      const big = i === 0 || i === 5 || i === 10, px = x + i * step;
      s += `<path d="M${f1(px)} ${f1(y - (big ? 12 : 7))}V${f1(y + (big ? 12 : 7))}" stroke="${COL.ink}" stroke-width="${big ? 3 : 2}" stroke-linecap="round"/>`;
      if (o.all || big) s += num(px, y + 30, fmt(k(i)), { fs: big ? 13 : 10.5, fw: big ? 900 : 800 });
    }
    if (o.at != null) {
      const px = x + ((o.at - from) / (to - from)) * w;
      s += `<path d="M${f1(px)} ${f1(y - 6)}V${f1(y - 44)}" stroke="${COL.x}" stroke-width="3"/><path d="M${f1(px)} ${f1(y - 44)}h26l-7 9l7 9h-26Z" fill="${COL.x}"/>`;
      s += num(px + 2, y - 54, fmt(o.at), { fs: 14, fill: COL.x });
    }
    return s;
  }
  function numLine(q) {
    const p = (q && q.pic) || { from: 7, to: 8, at: 7.7 }, x = 24, w = 292, y = 78, step = w / 10;
    let hots = '';
    for (let i = 0; i <= 10; i++) hots += hot('n' + i, T('Tick ' + i, 'العلامة ' + i), ringRect(x + i * step - 14, y - 22, 28, 52, 8));
    return svgOpen(122, T('A number line with ten equal steps', 'خط أعداد مقسوم إلى عشر خطوات متساوية')) + `<rect width="340" height="122" rx="14" fill="${COL.paper}"/>`
      + line(x, y, w, p) + hots + '</svg>';
  }

  /* ================= three grids: which one is shaded to show the number? ================= */
  function gridShade(q) {
    const vals = ((q && q.pic) || { vals: [0.3, 0.35, 0.5] }).vals, size = 92, gap = 14, x0 = (340 - (3 * size + 2 * gap)) / 2;
    let s = svgOpen(142, T('Three grids with different parts shaded', 'ثلاث شبكات بأجزاء مظللة مختلفة')) + `<rect width="340" height="142" rx="14" fill="${COL.paper}"/>`;
    vals.forEach((v, i) => {
      const x = x0 + i * (size + gap);
      s += grid100(x, 12, size, Math.round(v * 100)) + lab(x + size / 2, 128, ['1', '2', '3'][i], { fs: 14, fw: 900 });
      s += hot('g' + 'ABC'[i], T('Grid ' + (i + 1), 'الشبكة ' + (i + 1)), ringRect(x - 4, 8, size + 8, size + 8, 8));
    });
    return s + '</svg>';
  }

  /* ================= a model of an addition or a subtraction (picture only) ================= */
  function gridModel(q) {
    const p = (q && q.pic) || { a: 0.45, b: 0.84, mode: 'add' }, A = Math.round(p.a * 100), B = Math.round(p.b * 100), sub = p.mode === 'sub';
    const total = sub ? A : A + B, nGrids = Math.max(1, Math.ceil(total / 100)), size = nGrids > 2 ? 86 : 110, gap = 18, x0 = (340 - (nGrids * size + (nGrids - 1) * gap)) / 2;
    let s = svgOpen(size + 40, sub ? T('A model of a subtraction on grids', 'نموذج لعملية طرح على شبكات') : T('A model of an addition on grids', 'نموذج لعملية جمع على شبكات')) + `<rect width="340" height="${size + 40}" rx="14" fill="${COL.paper}"/>`;
    for (let g = 0; g < nGrids; g++) {
      const base = g * 100, left = Math.min(100, Math.max(0, total - base)), x = x0 + g * (size + gap), y = 14;
      if (sub) s += grid100(x, y, size, left, { fill: COL.green, x: true, xFrom: Math.max(0, A - B - base) });
      else s += grid100(x, y, size, left, { fill: COL.yellow, second: COL.green, secondFrom: Math.max(0, A - base) });
    }
    return s + '</svg>';
  }

  /* ================= Unit 2 ================= */
  const C2 = { box: '#fff', boxD: '#7fb0dc', prime: '#e2603f', comp: '#2f78b5', purple: '#9a7fc4', sand: '#f6e3bd', sandD: '#c9a25e', a: '#f8c9a0', aD: '#e08a3c', b: '#bfe0f5', bD: '#4ea5d9' };
  const PL = q => !!(q && q.pic && q.pic.plain);
  const open2 = (q, h, name) => (PL(q) ? '' : svgOpen(h, name) + `<rect width="340" height="${h}" rx="14" fill="${COL.paper}"/>`);
  const close2 = q => (PL(q) ? '' : '</svg>');
  const isPrime = n => { if (n < 2) return false; for (let d = 2; d * d <= n; d++) if (n % d === 0) return false; return true; };

  /* a part-to-whole bar model: the whole on top, the parts under it (an 'x' part is the unknown) */
  function barModel(q) {
    const p = (q && q.pic) || { whole: '492.64', parts: ['396.48', 'x'] }, n = p.parts.length, x0 = 20, w = 300, y = 18;
    let s = open2(q, 128, T('A part-to-whole bar model', 'نموذج شريطي للأجزاء والكل'));
    const unk = v => /^[a-zA-Z]$/.test(String(v));
    s += `<rect x="${x0}" y="${y}" width="${w}" height="42" rx="8" fill="#e3d6f4" stroke="${C2.purple}" stroke-width="2.5"/>`
      + lab(x0 + w / 2, y + 13, T('Whole', 'الكل'), { fs: 10 }) + num(x0 + w / 2, y + 30, p.whole, { fs: 17, fill: unk(p.whole) ? C2.prime : COL.ink });
    const ws = p.w || p.parts.map(() => 1), tot = ws.reduce((a, b) => a + b, 0); let cx = x0;
    p.parts.forEach((v, i) => {
      const pw = w * ws[i] / tot;
      s += `<rect x="${f1(cx)}" y="${y + 50}" width="${f1(pw)}" height="42" rx="8" fill="${unk(v) ? '#fde3d8' : C2.sand}" stroke="${unk(v) ? C2.prime : C2.sandD}" stroke-width="2.5"${unk(v) ? ' stroke-dasharray="6 4"' : ''}/>`
        + lab(cx + pw / 2, y + 63, T('Part', 'جزء'), { fs: 10 }) + num(cx + pw / 2, y + 81, v, { fs: unk(v) ? 19 : 16, fill: unk(v) ? C2.prime : COL.ink });
      cx += pw;
    });
    return s + close2(q);
  }

  /* a factor tree: the number on top in a box, primes in circles, composite numbers in squares */
  function factorTree(q) {
    const root = JSON.parse(JSON.stringify(((q && q.pic) || { tree: { v: 24, c: [{ v: 4, c: [{ v: 2 }, { v: 2 }] }, { v: 6, c: [{ v: 2 }, { v: 3 }] }] } }).tree));
    let leaves = 0, depth = 0;
    (function walk(n, d) { depth = Math.max(depth, d); if (!n.c) n.i = leaves++; else n.c.forEach(c => walk(c, d + 1)); })(root, 0);
    const gapX = Math.min(70, 290 / Math.max(1, leaves - 1 || 1)), x0 = (340 - (leaves - 1) * gapX) / 2, dy = 56, H = 36 + depth * dy + 30;
    (function place(n, d) { n.d = d; if (n.c) { n.c.forEach(c => place(c, d + 1)); n.x = n.c.reduce((a, c) => a + c.x, 0) / n.c.length; } else n.x = x0 + n.i * gapX; })(root, 0);
    let lines = '', nodes = '';
    (function draw(n) {
      const y = 34 + n.d * dy;
      if (n.c) n.c.forEach(c => { lines += `<path d="M${f1(n.x)} ${y + 15}L${f1(c.x)} ${34 + c.d * dy - 16}" stroke="${C2.purple}" stroke-width="2.6" stroke-linecap="round"/>`; draw(c); });
      const t = n.q ? '?' : String(n.v), pr = !n.q && isPrime(n.v);
      if (n.d === 0) nodes += `<rect x="${f1(n.x - 26)}" y="${y - 16}" width="52" height="32" rx="7" fill="#fff" stroke="${C2.boxD}" stroke-width="3"/>` + num(n.x, y + 6, t, { fs: 18 });
      else if (n.q) nodes += `<rect x="${f1(n.x - 16)}" y="${y - 16}" width="32" height="32" rx="16" fill="#fff" stroke="${COL.line}" stroke-width="3" stroke-dasharray="5 4"/>` + num(n.x, y + 6, '?', { fs: 18, fill: C2.prime });
      else if (pr) nodes += `<circle cx="${f1(n.x)}" cy="${y}" r="16" fill="#fff" stroke="${C2.prime}" stroke-width="3"/>` + num(n.x, y + 6, t, { fs: 16, fill: C2.prime });
      else nodes += `<rect x="${f1(n.x - 17)}" y="${y - 16}" width="34" height="32" rx="4" fill="#fff" stroke="${C2.comp}" stroke-width="3"/>` + num(n.x, y + 6, t, { fs: 16, fill: C2.comp });
    })(root);
    return open2(q, H, T('A factor tree', 'شجرة عوامل')) + lines + nodes + close2(q);
  }

  /* two circles: the multiples of a and of b (up to the upTo-th multiple); show = which numbers are drawn, blank = only the labels */
  function multVenn(q) {
    const p = (q && q.pic) || { a: 3, b: 4, upTo: 12 }, A = p.a, B = p.b, k = p.upTo || 12;
    const mA = [], mB = [];
    for (let i = 1; i <= k; i++) { mA.push(A * i); mB.push(B * i); }
    const both = mA.filter(v => mB.includes(v)), onlyA = mA.filter(v => !both.includes(v)), onlyB = mB.filter(v => !both.includes(v));
    const show = p.blank ? [] : (p.show || mA.concat(mB));
    const H = 196, cy = 112, r = 78, cxA = 118, cxB = 222;
    let s = open2(q, H, T('Two overlapping circles for the multiples of two numbers', 'دائرتان متداخلتان لمضاعفات عددين'));
    s += `<circle cx="${cxA}" cy="${cy}" r="${r}" fill="${C2.a}" fill-opacity=".75" stroke="${C2.aD}" stroke-width="2.5"/><circle cx="${cxB}" cy="${cy}" r="${r}" fill="${C2.b}" fill-opacity=".7" stroke="${C2.bD}" stroke-width="2.5"/>`;
    s += lab(cxA - 22, 22, T('Multiples of ' + A, 'مضاعفات العدد ' + A), { fs: 12, fw: 900 }) + lab(cxB + 22, 22, T('Multiples of ' + B, 'مضاعفات العدد ' + B), { fs: 12, fw: 900 });
    const put = (arr, cx, w) => { const vis = arr.filter(v => show.includes(v)), per = 3; vis.forEach((v, i) => { s += num(cx + ((i % per) - (Math.min(per, vis.length) - 1) / 2) * w, cy - 30 + Math.floor(i / per) * 22 + (vis.length <= 3 ? 30 : 0), String(v), { fs: 13 }); }); };
    put(onlyA, cxA - 34, 22); put(onlyB, cxB + 34, 22);
    const vb = both.filter(v => show.includes(v)); vb.forEach((v, i) => { s += num(170, cy - (vb.length - 1) * 11 + i * 22 + 5, String(v), { fs: 13 }); });
    if (!PL(q) && q && q.type === 'tap') s += hot('mvL', T('The left part, inside the first circle only', 'الجزء الأيسر داخل الدائرة الأولى فقط'), ringRect(cxA - r + 4, cy - 46, 76, 92, 14))
      + hot('mvM', T('The middle part, inside both circles', 'الجزء الأوسط داخل الدائرتين'), ringRect(146, cy - 52, 48, 104, 14))
      + hot('mvR', T('The right part, inside the second circle only', 'الجزء الأيمن داخل الدائرة الثانية فقط'), ringRect(cxB + r - 80, cy - 46, 76, 92, 14));
    return s + close2(q);
  }

  /* a time line of whole hours (a.m. until noon, then p.m.), the first bus marked; no jumps are drawn */
  function skipLine(q) {
    const p = (q && q.pic) || { from: 3, to: 13, first: 3 }, n = p.to - p.from, x0 = 22, w = 296, y = 70, st = w / n;
    let s = open2(q, 118, T('A time line with the first bus marked', 'خط زمني عليه أول أتوبيس'));
    s += `<path d="M${x0 - 10} ${y}H${x0 + w + 10}" stroke="${COL.ink}" stroke-width="2.4"/><path d="M${x0 - 14} ${y}l8 -5v10zM${x0 + w + 14} ${y}l-8 -5v10z" fill="${COL.ink}"/>`;
    for (let i = 0; i <= n; i++) {
      const h = p.from + i, x = x0 + i * st, hh = h > 12 ? h - 12 : h;
      s += `<path d="M${f1(x)} ${y - 8}V${y + 8}" stroke="${COL.ink}" stroke-width="2"/>` + num(x, y + 24, hh + ':00', { fs: n > 8 ? 9.5 : 11, fw: 800 });
      if (h === p.from) s += lab(x, y + 37, T('a.m.', 'صباحًا'), { fs: 9 });
      if (h === 12) s += lab(x, y + 37, T('p.m.', 'مساءً'), { fs: 9 });
    }
    const fx = x0 + (p.first - p.from) * st;
    s += `<g transform="translate(${f1(fx - 16)} ${y - 44})"><rect width="32" height="22" rx="5" fill="${C2.prime}"/><rect x="4" y="4" width="9" height="7" rx="1.5" fill="#fff"/><rect x="16" y="4" width="9" height="7" rx="1.5" fill="#fff"/><circle cx="8" cy="23" r="3.5" fill="${COL.ink}"/><circle cx="24" cy="23" r="3.5" fill="${COL.ink}"/></g>`;
    return s + close2(q);
  }

  /* ================= Unit 3 ================= */
  const C3 = { line: '#5c7d96', head: '#e3d6f4', headD: '#9a7fc4', cell: '#fff', fill: ['#ffe2b8', '#d4ecdf', '#d7e8f8', '#f8d9e6'], hi: '#fff3c4', hiD: '#f2b134', q: '#e2603f' };
  /* the area model of multiplication (book p66-77): place values on top and at the side, a partial product in each cell.
     q.pic = { top: ['200','30','4'], left: ['20','7'], cells: [['4,000','600','80'], ['1,400','210','28']], hi: [row, col], fill: true }
     a cell '' is empty, '?' is the unknown; fill = colour the cells already written (the game fills the model cell by cell) */
  function areaModel(q) {
    const p = (q && q.pic) || { top: ['200', '30', '4'], left: ['20', '7'], cells: [['', '', ''], ['', '', '']] };
    const nc = p.top.length, nr = p.left.length, x0 = 52, w = 340 - x0 - 14, cw = w / nc, ch = nr > 2 ? 40 : 46, y0 = 30, H = y0 + nr * ch + 14;
    const fs = n => (String(n).length > 6 ? 12 : String(n).length > 4 ? 14 : 16);
    let s = open2(q, H, T('An area model: a rectangle split into parts by place value', 'نموذج مساحة المستطيل مقسم حسب القيمة المكانية'));
    p.top.forEach((v, c) => { s += num(x0 + (c + .5) * cw, y0 - 9, v, { fs: 15, fill: C3.headD }); });
    p.left.forEach((v, r) => { s += num(x0 - 22, y0 + (r + .5) * ch + 5, v, { fs: 15, fill: C3.headD }); });
    p.left.forEach((_, r) => p.top.forEach((__, c) => {
      const v = ((p.cells || [])[r] || [])[c] || '', isHi = p.hi && p.hi[0] === r && p.hi[1] === c, x = x0 + c * cw, y = y0 + r * ch;
      const bg = isHi ? C3.hi : p.fill && v && v !== '?' ? C3.fill[(r * nc + c) % 4] : C3.cell;
      s += `<rect x="${f1(x)}" y="${y}" width="${f1(cw)}" height="${ch}" fill="${bg}" stroke="${isHi ? C3.hiD : C3.line}" stroke-width="${isHi ? 3.5 : 2}"/>`;
      if (v === '?') s += num(x + cw / 2, y + ch / 2 + 7, '?', { fs: 20, fill: C3.q });
      else if (v) s += num(x + cw / 2, y + ch / 2 + 5, v, { fs: fs(v) });
    }));
    if (p.hi) { const [r, c] = p.hi; s += `<rect x="${f1(x0 + c * cw)}" y="${y0 + r * ch}" width="${f1(cw)}" height="${ch}" fill="none" stroke="${C3.hiD}" stroke-width="3.5"/>`; }
    return s + close2(q);
  }
  /* a grid of unit squares split into two coloured rectangles (the distributive property, book p68-69): q.pic = { rows: 8, parts: [5, 4] } */
  function unitGrid(q) {
    const p = (q && q.pic) || { rows: 8, parts: [5, 4] }, cols = p.parts.reduce((a, b) => a + b, 0), u = Math.min(18, 250 / Math.max(cols, p.rows)), x0 = (340 - cols * u) / 2 + 8, y0 = 26, H = y0 + p.rows * u + 12;
    const cs = ['#7cc8ec', '#f7cf4d', '#9ed7b6'];
    let s = open2(q, H, T('A grid of unit squares split into coloured rectangles', 'شبكة مربعات وحدة مقسمة إلى مستطيلات ملونة'));
    let cx = x0;
    p.parts.forEach((k, i) => {
      for (let r = 0; r < p.rows; r++) for (let c = 0; c < k; c++) s += `<rect x="${f1(cx + c * u)}" y="${f1(y0 + r * u)}" width="${f1(u)}" height="${f1(u)}" fill="${cs[i % 3]}" stroke="${COL.ink}" stroke-width="1"/>`;
      s += num(cx + k * u / 2, y0 - 8, String(k), { fs: 14 });
      cx += k * u;
    });
    s += num(x0 - 14, y0 + p.rows * u / 2 + 5, String(p.rows), { fs: 14 });
    return s + close2(q);
  }
  /* the standard algorithm written in columns (book p72-75): q.pic = { a: '76', b: '24', parts: ['304', '1,520'], total: '1,824', carry: '1' }
     a '?' inside a string is drawn as an empty box; parts or total can be left out */
  function longMult(q) {
    const p = (q && q.pic) || { a: '76', b: '24' }, rows = [p.a, '× ' + p.b].concat(p.parts || []), st = 12, xr = 230;
    const nRows = rows.length + (p.total ? 1 : 0), H = 30 + nRows * 26 + 10;
    let s = open2(q, H, T('A multiplication written in columns', 'عملية ضرب مكتوبة رأسيًا'));
    const row = (str, y, col) => {
      const ch = String(str).split(''); let x = xr;
      for (let i = ch.length - 1; i >= 0; i--) {
        const c = ch[i];
        if (c === '?') s += `<rect x="${f1(x - 9)}" y="${y - 16}" width="18" height="21" rx="3" fill="#fff" stroke="${C3.q}" stroke-width="2" stroke-dasharray="4 3"/>`;
        else if (c === ',') { s += num(x + 3, y, c, { fs: 18, fill: col || COL.ink, fw: 800 }); x -= 5; continue; }   // a comma sits between two digits and takes a narrow column
        else if (c !== ' ') s += num(x, y, c, { fs: 18, fill: col || COL.ink, fw: 800 });
        x -= c === ' ' ? 7 : st;
      }
    };
    let y = 40;
    if (p.carry) row(p.carry, 22, C3.q);
    rows.forEach((r, i) => {
      row(i >= 2 && i === rows.length - 1 && rows.length > 3 ? '+ ' + r : r, y);
      if (i === 1 || (p.total && i === rows.length - 1)) s += `<path d="M${xr - 110} ${y + 8}H${xr + 12}" stroke="${COL.ink}" stroke-width="2.4"/>`;
      y += 26;
    });
    if (p.total) row(p.total, y, '#2e7d5b');
    return s + close2(q);
  }

  window.M5ART = { COL, T, f1, esc, at, num, lab, hot, ringRect, svgOpen, grid100, slices, PLACES, digitsOf, chart, chartHots, line, isPrime };
  window.CH_DIAGRAMS = Object.assign(window.CH_DIAGRAMS || {}, { placeChart, numLine, gridShade, gridModel, barModel, factorTree, multVenn, skipLine, areaModel, unitGrid, longMult });
})();
