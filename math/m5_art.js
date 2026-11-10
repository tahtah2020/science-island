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
     Unit 4: divModel    (picture only)                       q.pic = { div: '31', top: ['100','10','6'], cells: [['3,622','3,100','522'], …], hi: c }  (each cell: what is left, − product, new remainder)
             longDiv     (picture only)                       q.pic = { div: '43', num: '8,858', quo: '26', steps: [['86', 1], ['258', 0], …], r: 'R 2' }
     Unit 5: tenthsGrid  (picture only)                       q.pic = { a: 3, b: 4 }  (rows and columns in tenths; overlap darker; the product is never printed)
             jumpLine    (picture only)                       q.pic = { step: 0.3, n: 3, to: 3 }  (equal jumps, the landing point not labelled)
             placeSlide  (picture only)                       q.pic = { num: '25.4' }  (place-value boxes, whole part blue, decimal part orange, the decimal point between)
     Unit 6: exprCard    (picture only)                       q.pic = { expr: '56.5 × 2.3 − 15 + 12.7', lines: ['…'], ask: true }  (× ÷ coral, + − blue, parentheses purple; lines = rewritten after each step)
             busRoute    (picture only)                       q.pic = { expr, stop: 1-4 }  (Ali's bus at the stop asked, earlier stops ticked)
             tilePlus    (picture only)                       q.pic = { stages: [1, 2, 3], ask: 4 }  (Yaseen's tiles, every tile drawn; the asked stage is a «?» card)
             ioTable     (picture only)                       q.pic = { rows: [[1, 8], [2, '?']], ask: 1, bikes: true }  (Arabic: input column on the right, as the book)
             seqStrip    (picture only)                       q.pic = { nums: ['5', '10', '?'] }  (the rule is never written)
             saveFig, vaseFig, bikeFig (picture only)          Kamel's savings, Hoda's 16 vases, Mounir's ride (Lesson 3 story problems)
   Every Unit 2 to 6 picture honours q.pic.plain (inner markup only, for the game scene).
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

  /* ================= Unit 4 ================= */
  /* the area model of division (book p81-82): the divisor at the side, a chunk of the quotient on top of each cell,
     and in each cell "what is left − divisor × chunk = new remainder". q.pic = { div: '31', top: ['100','10','6'], cells: [['3,622','3,100','522'], …] }
     a value '?' is the unknown, '' is empty; a cell can be left out (null) to draw an empty box */
  function divModel(q) {
    const p = (q && q.pic) || { div: '31', top: ['100', '10', '6'], cells: [['3,622', '3,100', '522'], ['522', '310', '212'], ['212', '186', '26']] };
    const n = p.top.length, x0 = 44, w = 340 - x0 - 10, cw = w / n, y0 = 30, h = 82, H = y0 + h + 14;
    const fs = s => (String(s).length > 5 ? 12.5 : 14.5);
    let s = open2(q, H, T('An area model of division: chunks of the quotient on top, the divisor at the side', 'نموذج مساحة المستطيل للقسمة: أجزاء خارج القسمة في الأعلى والمقسوم عليه في الجانب'));
    s += num(x0 - 20, y0 + h / 2 + 6, p.div || '?', { fs: 16, fill: p.div === '?' ? C3.q : C3.headD });
    p.top.forEach((t, c) => {
      const x = x0 + c * cw, cell = (p.cells || [])[c];
      s += num(x + cw / 2, y0 - 9, t, { fs: 15, fill: t === '?' ? C3.q : C3.headD });
      s += `<rect x="${f1(x)}" y="${y0}" width="${f1(cw)}" height="${h}" fill="${p.hi === c ? C3.hi : '#fff'}" stroke="${p.hi === c ? C3.hiD : C3.line}" stroke-width="${p.hi === c ? 3.5 : 2}"/>`;
      if (!cell) return;
      const [a, b, r] = cell, cx = x + cw / 2 + 6;
      const col = z => (z === '?' ? C3.q : COL.ink);
      if (a) s += num(cx, y0 + 24, a, { fs: fs(a), fill: col(a) });
      if (b) s += num(cx - 4, y0 + 46, '− ' + b, { fs: fs(b), fill: col(b) }) + `<path d="M${f1(x + 10)} ${y0 + 53}H${f1(x + cw - 8)}" stroke="${COL.ink}" stroke-width="1.6"/>`;
      if (r) s += num(cx, y0 + 70, r, { fs: fs(r), fill: col(r) });
    });
    return s + close2(q);
  }
  /* long division written the school way (book p85-89): q.pic = { div: '43', num: '8,858', quo: '26', steps: [['86', 1], ['258', 0], ['258', 0], ['0', 0]] }
     each step = [text, how many digits of the dividend are to its right]; steps at even places are subtracted (a − sign and a line under them).
     A '?' in quo or a step is drawn as an empty box. Commas of the dividend take no column. */
  function longDiv(q) {
    const p = (q && q.pic) || { div: '43', num: '1,376' }, digits = String(p.num).replace(/,/g, ''), st = 15, steps = p.steps || [];
    const xr = 250, H = 64 + steps.length * 24 + 8, yN = 52;
    let s = open2(q, H, T('A long division written in columns', 'عملية قسمة مطوّلة مكتوبة رأسيًا'));
    const cols = digits.replace('.', '').length, colX = i => xr - (cols - 1 - i) * st;   // x of the i-th digit (the point takes no column)          // x of the i-th digit of the dividend
    const put = (str, xRight, y, col) => {                         // right-aligned digits, '?' = box
      const ch = String(str).replace(/,/g, '').split(''); let x = xRight;
      for (let i = ch.length - 1; i >= 0; i--) {
        if (ch[i] === '.') { s += num(x + st / 2, y, '.', { fs: 18, fill: col || COL.ink, fw: 800 }); continue; }   // the decimal point takes no column
        if (ch[i] === '?') s += `<rect x="${f1(x - 8)}" y="${y - 16}" width="16" height="20" rx="3" fill="#fff" stroke="${C3.q}" stroke-width="2" stroke-dasharray="4 3"/>`;
        else s += num(x, y, ch[i], { fs: 18, fill: col || COL.ink, fw: 800 });
        x -= st;
      }
    };
    put(digits, xr, yN);
    const x0 = colX(0) - 12;
    s += `<path d="M${f1(x0)} ${yN + 8}Q${f1(x0 + 8)} ${yN - 6} ${f1(x0)} ${yN - 22}H${xr + 12}" fill="none" stroke="${COL.ink}" stroke-width="2.4"/>`;
    s += num(x0 - 10, yN, String(p.div), { fs: 18, fw: 800, anchor: 'end' });
    if (p.quo != null) put(p.quo, xr, yN - 30, '#2e7d5b');
    steps.forEach(([t, r], i) => {
      const y = yN + 26 + i * 24, xR = xr - r * st;
      put(t, xR, y);
      if (i % 2 === 0) { const len = String(t).replace(/[,.]/g, '').length; s += num(xR - len * st - 2, y, '−', { fs: 18, fw: 800 }) + `<path d="M${f1(xR - len * st - 6)} ${y + 6}H${f1(xR + 9)}" stroke="${COL.ink}" stroke-width="1.8"/>`; }
    });
    if (p.r) s += lab(xr + 30, yN - 34, p.r, { fs: 12, fw: 900, fill: C3.q });
    return s + close2(q);
  }

  /* ================= Unit 5 ================= */
  /* tenths × tenths on a 10 × 10 grid (book p97-98): a rows shaded one way, b columns the other way; the overlap is darker.
     q.pic = { a: 3, b: 4 }  (a, b in tenths). The overlap is not counted for the child: the picture never prints the product */
  function tenthsGrid(q) {
    const p = (q && q.pic) || { a: 3, b: 4 }, u = 15, x0 = (340 - 10 * u) / 2, y0 = 14, H = y0 + 10 * u + 14;
    let s = open2(q, H, T('A 10 by 10 grid with tenths shaded across and down', 'شبكة 10 × 10 مظلل فيها أجزاء من عشرة أفقيًا ورأسيًا'));
    for (let r = 0; r < 10; r++) for (let c = 0; c < 10; c++) {
      const A = r < p.a, B = c < p.b, fill = A && B ? '#7f6bc4' : A ? '#f7cf4d' : B ? '#9ed2f0' : '#fff';
      s += `<rect x="${x0 + c * u}" y="${y0 + r * u}" width="${u}" height="${u}" fill="${fill}" stroke="${COL.line}" stroke-width=".8"/>`;
    }
    s += `<rect x="${x0}" y="${y0}" width="${10 * u}" height="${10 * u}" fill="none" stroke="${COL.ink}" stroke-width="2"/>`;
    return s + close2(q);
  }
  /* equal jumps on a number line from 0 to `to`, ticks every 0.1 (book p95): q.pic = { step: 0.3, n: 3, to: 3 }; the landing point is not labelled */
  function jumpLine(q) {
    const p = (q && q.pic) || { step: 0.3, n: 3, to: 3 }, x0 = 20, w = 300, y = 80, sc = w / p.to, H = 112;
    let s = open2(q, H, T('Equal jumps on a number line', 'قفزات متساوية على خط الأعداد'));
    s += `<path d="M${x0} ${y}H${x0 + w}" stroke="${COL.ink}" stroke-width="2.2"/>`;
    for (let i = 0; i <= p.to * 10; i++) { const x = x0 + i * sc / 10, big = i % 10 === 0; s += `<path d="M${f1(x)} ${y - (big ? 9 : 5)}V${y + (big ? 9 : 5)}" stroke="${COL.ink}" stroke-width="${big ? 2 : 1}"/>`; if (big) s += num(x, y + 24, String(i / 10), { fs: 13 }); }
    for (let k = 0; k < p.n; k++) {
      const a = x0 + k * p.step * sc, b = x0 + (k + 1) * p.step * sc, m = (a + b) / 2, hgt = Math.min(34, (b - a) * .7);
      s += `<path d="M${f1(a)} ${y - 4}Q${f1(m)} ${f1(y - 4 - hgt * 1.6)} ${f1(b)} ${y - 4}" fill="none" stroke="${C2.prime}" stroke-width="2.4"/><path d="M${f1(b)} ${y - 4}l-6 -5m6 5l-7 2" stroke="${C2.prime}" stroke-width="2.2" fill="none"/>`;
      s += num(m, f1(y - 8 - hgt * .8), '+' + p.step, { fs: 10.5, fill: C2.prime });
    }
    return s + close2(q);
  }
  /* a number in place-value boxes with its decimal point (book p92): q.pic = { num: '25.4' }; the game slides the point */
  function placeSlide(q) {
    const p = (q && q.pic) || { num: '25.4' }, raw = String(p.num), digits = raw.replace('.', '').split(''), dot = raw.includes('.') ? raw.indexOf('.') : raw.length;
    const bw = 34, gap = 6, n = digits.length, wAll = n * bw + (n - 1) * gap, x0 = (340 - wAll) / 2, y0 = 22, H = 80;
    let s = open2(q, H, T('A number in place-value boxes with its decimal point', 'عدد في خانات القيمة المكانية مع العلامة العشرية'));
    digits.forEach((d, i) => { const x = x0 + i * (bw + gap); s += `<rect x="${f1(x)}" y="${y0}" width="${bw}" height="42" rx="6" fill="${i < dot ? '#e3eef8' : '#fde7d6'}" stroke="${COL.line}" stroke-width="2"/>` + num(x + bw / 2, y0 + 29, d, { fs: 22 }); });
    if (dot > 0 && dot < n) s += `<circle cx="${f1(x0 + dot * (bw + gap) - gap / 2)}" cy="${y0 + 38}" r="4.5" fill="${C2.prime}"/>`;
    return s + close2(q);
  }

  /* ================= Unit 6 · Numerical Expressions and Patterns ================= */
  const isAr = () => T('en', 'ar') === 'ar';
  const OPC = { md: '#e2603f', as: '#2f78b5', par: '#8a63c4' };
  /* an expression in colour: × ÷ coral, + − blue, parentheses purple; numbers ink. Returns a <text> centred at x */
  function exprText(x, y, expr, fs, o = {}) {
    const toks = String(expr).split(' ');
    const sp = toks.map(t => {
      let fill = o.fill || COL.ink;
      if (t === '×' || t === '÷') fill = OPC.md; else if (t === '+' || t === '−') fill = OPC.as;
      const parts = t.split(/([()\[\]])/).filter(Boolean);
      return parts.map(pc => `<tspan fill="${/[()\[\]]/.test(pc) ? OPC.par : fill}"${/[()\[\]]/.test(pc) ? ' font-weight="900"' : ''}>${esc(pc)}</tspan>`).join('');
    }).join(' ');
    return `<text x="${f1(x)}" y="${f1(y)}" text-anchor="middle" direction="ltr" unicode-bidi="embed" font-size="${f1(fs)}" font-weight="${o.fw || 900}" fill="${COL.ink}">${sp}</text>`;
  }
  const fitFs = (s, max = 21, w = 318) => Math.min(max, w / (String(s).length * 0.56));
  /* the expression on a card; lines = the expression rewritten after each step; ask = a last line «= ?» (book p121: «rewrite the expression after each step») */
  function exprCard(q) {
    const p = (q && q.pic) || { expr: '56.5 × 2.3 − 15 + 12.7' }, lines = p.lines || [], n = lines.length + (p.ask ? 1 : 0);
    const H = 70 + n * 30 + 6;
    let s = open2(q, H, T('A numerical expression', 'تعبير عددي'));
    const fs = fitFs(p.expr);
    s += `<rect x="10" y="12" width="320" height="48" rx="12" fill="#fff" stroke="${COL.line}" stroke-width="2"/>` + exprText(170, 36 + fs * .36, p.expr, fs);
    let y = 60;
    lines.forEach(l => { y += 30; const f = fitFs('= ' + l, 18); s += exprText(170, y + 4, '= ' + l, f, { fw: 800 }); });
    if (p.ask) { y += 30; s += `<text x="170" y="${y + 4}" text-anchor="middle" direction="ltr" unicode-bidi="embed" font-size="18" font-weight="900" fill="${C2.prime}">= ?</text>`; }
    return s + close2(q);
  }
  /* a small bus (book p122 «Tour bus»), facing right */
  const busIcon = (x, y, k = 1) => at(x, y, k, `<rect x="-20" y="-14" width="40" height="22" rx="5" fill="#d9413a" stroke="#8f2420" stroke-width="1.5"/><rect x="-16" y="-10" width="9" height="7" rx="1.5" fill="#e8f4fb"/><rect x="-5" y="-10" width="9" height="7" rx="1.5" fill="#e8f4fb"/><rect x="6" y="-10" width="10" height="9" rx="1.5" fill="#e8f4fb"/><rect x="-20" y="1" width="40" height="3" fill="#f7cf4d"/><circle cx="-11" cy="9" r="4.2" fill="#333"/><circle cx="11" cy="9" r="4.2" fill="#333"/><circle cx="-11" cy="9" r="1.6" fill="#ccc"/><circle cx="11" cy="9" r="1.6" fill="#ccc"/>`);
  /* Ali's bus route: the expression on a sign, four stops on a road, the bus at the stop asked (earlier stops ticked) */
  function busRoute(q) {
    const p = (q && q.pic) || { expr: '300.53 − 11.04 × 0.2 ÷ 0.01 + 13.07', stop: 1 }, H = 150;
    let s = open2(q, H, T('A bus route with four stops', 'مسار أتوبيس فيه أربع محطات'));
    const fs = fitFs(p.expr, 18);
    s += `<rect x="10" y="10" width="320" height="38" rx="10" fill="#fff" stroke="${COL.line}" stroke-width="2"/>` + exprText(170, 29 + fs * .36, p.expr, fs);
    const y = 112, xs = [52, 130, 208, 286];
    s += `<rect x="12" y="${y - 6}" width="316" height="22" rx="11" fill="#8a8f96"/><path d="M22 ${y + 5}H318" stroke="#fff" stroke-width="2" stroke-dasharray="10 8"/>`;
    xs.forEach((x, i) => {
      const k = i + 1, done = k < p.stop, now = k === p.stop;
      s += `<path d="M${x} ${y - 6}V${y - 34}" stroke="${COL.ink}" stroke-width="2.4"/>`;
      s += `<circle cx="${x}" cy="${y - 44}" r="13" fill="${now ? C2.prime : done ? '#79c69a' : '#fff'}" stroke="${COL.ink}" stroke-width="2"/>` + num(x, y - 39, done ? '✓' : String(k), { fs: 14, fill: now || done ? '#fff' : COL.ink });
      s += lab(x, y + 34, T('Stop ' + k, 'المحطة ' + k), { fs: 11 });
    });
    s += busIcon(xs[Math.max(0, Math.min(3, (p.stop || 1) - 1))] - 34, y - 8, .9);
    return s + close2(q);
  }
  /* Yaseen's tiles (book p127): stage n = a plus with arms of n tiles (4n + 1 tiles), every tile drawn; ask = a «?» card for that stage */
  function tilePlus(q) {
    const p = (q && q.pic) || { stages: [1, 2, 3] }, st = p.stages || [1, 2, 3];
    const c = st.length === 1 ? 22 : 13, gap = 16, askW = p.ask ? 64 : 0;
    const widths = st.map(n => (2 * n + 1) * c), total = widths.reduce((a, b) => a + b, 0) + gap * (st.length - (p.ask ? 0 : 1)) + askW;
    const maxH = (2 * Math.max(...st) + 1) * c, H = maxH + 50;
    let s = open2(q, H, T('A pattern of square tiles', 'نمط من البلاط'));
    const tile = (x, y) => `<rect x="${f1(x - c * .36)}" y="${f1(y - c * .36)}" width="${f1(c * .72)}" height="${f1(c * .72)}" transform="rotate(45 ${f1(x)} ${f1(y)})" fill="#f2a24a" stroke="#b9671a" stroke-width="1.2"/>`;
    let x = (340 - total) / 2;
    const cy = 12 + maxH / 2;
    st.forEach((n, i) => {
      const w = widths[i], cx = x + w / 2;
      for (let k = -n; k <= n; k++) { s += tile(cx + k * c, cy); if (k) s += tile(cx, cy + k * c); }
      s += lab(cx, H - 14, T('Stage ' + n, 'المرحلة ' + n), { fs: 11 });
      x += w + gap;
    });
    if (p.ask) {
      s += `<rect x="${f1(x)}" y="${f1(cy - 30)}" width="${askW}" height="60" rx="10" fill="#fff" stroke="${C2.prime}" stroke-width="2.4" stroke-dasharray="6 4"/>` + num(x + askW / 2, cy + 10, '?', { fs: 30, fill: C2.prime });
      s += lab(x + askW / 2, H - 14, T('Stage ' + p.ask, 'المرحلة ' + p.ask), { fs: 11, fill: C2.prime });
    }
    return s + close2(q);
  }
  /* a small bicycle */
  const bikeIcon = (x, y, k = 1, col = '#2f78b5') => at(x, y, k, `<circle cx="-8" cy="3" r="6" fill="none" stroke="#333" stroke-width="2"/><circle cx="8" cy="3" r="6" fill="none" stroke="#333" stroke-width="2"/><path d="M-8 3L-2 -6H6L8 3M-2 -6L0 3H-8M0 3L6 -6M-3 -9H0M5 -9H9" fill="none" stroke="${col}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`);
  /* an input / output table (book p128-130); rows = [[in, out], …], ask = row with the «?»; bikes = draw the bicycles of each input. Arabic: input on the right (as the book) */
  function ioTable(q) {
    const p = (q && q.pic) || { rows: [[1, 8], [2, 16]] }, rows = p.rows, rh = 26, top = 12, hh = 30, ar = isAr();
    const cw = p.bikes ? 150 : 110, W = cw * 2, x0 = (340 - W) / 2, H = top + hh + rows.length * rh + 14;
    let s = open2(q, H, T('An input and output table', 'جدول المُدخل والمُخرج'));
    const xin = ar ? x0 + cw : x0, xout = ar ? x0 : x0 + cw;
    s += `<rect x="${x0}" y="${top}" width="${W}" height="${hh + rows.length * rh}" rx="10" fill="#fff" stroke="${C2.purple}" stroke-width="2"/>`;
    s += `<path d="M${x0 + 1} ${top + hh}H${x0 + W - 1}" stroke="${C2.purple}" stroke-width="2"/><rect x="${x0 + 1}" y="${top + 1}" width="${W - 2}" height="${hh - 1}" rx="9" fill="#e6dcf3"/><path d="M${x0 + cw} ${top}V${top + hh + rows.length * rh}" stroke="${C2.purple}" stroke-width="1.5"/>`;
    s += lab(xin + cw / 2, top + 20, p.bikes ? T('Bicycles (input)', 'عدد الدراجات (المُدخل)') : T('Input', 'المُدخل'), { fs: 12 }) + lab(xout + cw / 2, top + 20, p.bikes ? T('Wheels (output)', 'عدد العجلات (المُخرج)') : T('Output', 'المُخرج'), { fs: 12 });
    rows.forEach((r, i) => {
      const y = top + hh + i * rh, asked = i === p.ask;
      if (i) s += `<path d="M${x0 + 1} ${y}H${x0 + W - 1}" stroke="#e1d6ef" stroke-width="1"/>`;
      const cell = (x, v) => v === '?' ? `<rect x="${f1(x + cw / 2 - 20)}" y="${y + 3}" width="40" height="${rh - 6}" rx="6" fill="#fde3db" stroke="${C2.prime}" stroke-width="1.6"/>` + num(x + cw / 2, y + 18, '?', { fs: 15, fill: C2.prime }) : num(x + cw / 2, y + 18, String(v), { fs: 15, fill: asked ? C2.prime : COL.ink });
      if (p.bikes && r[0] !== '?') {
        const n = +r[0];
        s += num(xin + 18, y + 18, String(n), { fs: 15 });
        if (n <= 5) for (let k = 0; k < n; k++) s += bikeIcon(xin + 46 + k * 21, y + 13, .8);
        else s += bikeIcon(xin + 52, y + 13, .8) + num(xin + 82, y + 18, '× ' + n, { fs: 12, fill: '#2f78b5' });
      } else s += cell(xin, r[0]);
      s += cell(xout, r[1]);
    });
    return s + close2(q);
  }
  /* a set of numbers in boxes with arrows between them (book p128); the rule is never written */
  function seqStrip(q) {
    const p = (q && q.pic) || { nums: ['5', '10', '20'] }, n = p.nums.length, bw = 44, gap = 12, W = n * bw + (n - 1) * gap, x0 = (340 - W) / 2, H = 64;
    let s = open2(q, H, T('A set of numbers', 'مجموعة من الأعداد'));
    p.nums.forEach((v, i) => {
      const x = x0 + i * (bw + gap), qm = v === '?';
      s += `<rect x="${f1(x)}" y="14" width="${bw}" height="36" rx="8" fill="${qm ? '#fde3db' : '#fff'}" stroke="${qm ? C2.prime : COL.line}" stroke-width="2"${qm ? ' stroke-dasharray="5 3"' : ''}/>` + num(x + bw / 2, 38, v, { fs: v.length > 3 ? 14 : 17, fill: qm ? C2.prime : COL.ink });
      if (i < n - 1) s += `<path d="M${f1(x + bw + 2)} 32H${f1(x + bw + gap - 2)}m-4 -3l4 3l-4 3" fill="none" stroke="${COL.ink}" stroke-width="1.6"/>`;
    });
    return s + close2(q);
  }
  /* a banknote */
  const note = (x, y, v, w = 44, col = '#9fd3b0', dark = '#3f9a6a') => `<rect x="${f1(x - w / 2)}" y="${f1(y - 11)}" width="${w}" height="22" rx="4" fill="${col}" stroke="${dark}" stroke-width="1.6"/><circle cx="${f1(x - w / 2 + 7)}" cy="${f1(y)}" r="3" fill="none" stroke="${dark}" stroke-width="1.2"/>` + num(x + 4, y + 5, v, { fs: 13, fill: '#1f4d35' });
  /* Kamel's savings (book p126): 1,000 LE now, and each of 4 weeks 50 LE + 30 LE */
  function saveFig(q) {
    const H = 150, ar = isAr();
    let s = open2(q, H, T('Kamel’s savings', 'مدخرات كامل'));
    const bx = ar ? 290 : 50;
    s += `<rect x="${bx - 38}" y="30" width="76" height="70" rx="12" fill="#fff4d6" stroke="#c9a25e" stroke-width="2"/>` + note(bx, 60, '1,000', 58, '#f7d98a', '#b8862b') + lab(bx, 88, T('he has', 'معه الآن'), { fs: 11 });
    const wx = ar ? [214, 160, 106, 52] : [126, 180, 234, 288];
    wx.forEach((x, i) => {
      s += `<rect x="${x - 25}" y="26" width="50" height="86" rx="10" fill="#f3f8fc" stroke="${COL.line}" stroke-width="1.6"/>` + note(x, 52, '50', 40) + note(x, 82, '30', 40, '#bfe0f5', '#4ea5d9');
      s += lab(x, 128, T('week ' + (i + 1), 'أسبوع ' + (i + 1)), { fs: 11 });
    });
    s += lab(ar ? 133 : 207, 18, T('job 1 + job 2, every week', 'الوظيفة 1 + الوظيفة 2 كل أسبوع'), { fs: 11, fill: '#3f9a6a' });
    s += lab(bx, 128, T('LE', 'جنيه'), { fs: 11 });
    return s + close2(q);
  }
  /* Hoda's vases (book p126): 15.75 L in the jug, 16 identical vases, 3.75 L left */
  function vaseFig(q) {
    const H = 156, ar = isAr();
    let s = open2(q, H, T('A jug of water and 16 vases', 'إبريق ماء و16 زهرية'));
    const jug = (x, y, k, level) => at(x, y, k, `<path d="M-22 -40H22L26 34Q26 44 16 44H-16Q-26 44 -26 34Z" fill="#fff" stroke="#4ea5d9" stroke-width="2.4"/><path d="M${-25 + (1 - level) * 0} ${44 - 84 * level}H25L26 34Q26 44 16 44H-16Q-26 44 -26 34Z" fill="#9ed2f0" opacity=".85"/><path d="M22 -30Q40 -24 36 0Q34 14 25 16" fill="none" stroke="#4ea5d9" stroke-width="3"/>`);
    const jx = ar ? 292 : 48;
    s += jug(jx, 64, 1, .9) + num(jx, 128, '15.75', { fs: 14 }) + lab(jx, 144, T('L at the start', 'لترًا في البداية'), { fs: 10.5 });
    const vase = (x, y) => `<path d="M${x - 5} ${y - 16}H${x + 5}L${x + 3} ${y - 10}Q${x + 10} ${y - 2} ${x + 6} ${y + 9}H${x - 6}Q${x - 10} ${y - 2} ${x - 3} ${y - 10}Z" fill="#f4c1de" stroke="#d98ab8" stroke-width="1.4"/>`;
    const vx0 = ar ? 96 : 104;
    for (let i = 0; i < 16; i++) s += vase(vx0 + (i % 8) * 20, 44 + Math.floor(i / 8) * 38);
    s += lab(vx0 + 70, 120, T('16 identical vases', '16 زهرية متطابقة'), { fs: 11 });
    s += `<path d="M${ar ? 262 : 78} 64H${ar ? 250 : 90}m${ar ? 5 : -5} -4l${ar ? -5 : 5} 4l${ar ? 5 : -5} 4" fill="none" stroke="${COL.ink}" stroke-width="1.6"/>`;
    const lx = ar ? 40 : 300;
    s += jug(lx, 72, .55, .35) + num(lx, 112, '3.75', { fs: 13 }) + lab(lx, 128, T('L left', 'لترًا متبقية'), { fs: 10.5 });
    return s + close2(q);
  }
  /* Mounir's ride (book p126): a cyclist on a 38.7 km road and a clock showing 2 hours */
  function bikeFig(q) {
    const H = 140, ar = isAr();
    let s = open2(q, H, T('A cyclist on a road and a clock', 'راكب دراجة على طريق وساعة'));
    s += `<rect x="14" y="96" width="312" height="14" rx="7" fill="#8a8f96"/><path d="M24 103H316" stroke="#fff" stroke-width="1.6" stroke-dasharray="9 7"/>`;
    s += `<path d="M24 80V88M316 80V88M24 84H316" stroke="${C2.prime}" stroke-width="2"/>` + `<rect x="128" y="70" width="84" height="22" rx="11" fill="#fff" stroke="${C2.prime}" stroke-width="1.6"/>` + num(156, 86, '38.7', { fs: 14, fill: C2.prime }) + lab(190, 86, T('km', 'كم'), { fs: 12, fill: C2.prime });
    const rx = ar ? 290 : 50, flagX = ar ? 30 : 312;
    s += at(rx, 80, 1.25, `<circle cx="-9" cy="6" r="7" fill="none" stroke="#333" stroke-width="2"/><circle cx="9" cy="6" r="7" fill="none" stroke="#333" stroke-width="2"/><path d="M-9 6L-2 -4H7L9 6M-2 -4L0 6H-9M0 6L7 -4" fill="none" stroke="#2f78b5" stroke-width="2" stroke-linejoin="round"/><path d="M-1 -6L3 -18L9 -6" fill="none" stroke="#f2a24a" stroke-width="3" stroke-linecap="round"/><circle cx="4" cy="-22" r="4" fill="#f2c9a0"/>`);
    s += `<path d="M${flagX} 96V58" stroke="${COL.ink}" stroke-width="2"/><path d="M${flagX} 58h${ar ? 16 : -16}l${ar ? -4 : 4} 6l${ar ? 4 : -4} 6h${ar ? -16 : 16}" fill="#79c69a" stroke="#3f9a6a" stroke-width="1.2"/>`;
    const cx = 170, cy = 34;
    s += `<circle cx="${cx}" cy="${cy}" r="20" fill="#fff" stroke="${COL.ink}" stroke-width="2"/>`;
    for (let h = 0; h < 12; h++) { const a = h * Math.PI / 6; s += `<path d="M${f1(cx + 16 * Math.sin(a))} ${f1(cy - 16 * Math.cos(a))}L${f1(cx + 19 * Math.sin(a))} ${f1(cy - 19 * Math.cos(a))}" stroke="${COL.ink}" stroke-width="1.4"/>`; }
    s += `<path d="M${cx} ${cy}V${cy - 13}M${cx} ${cy}L${f1(cx + 8 * Math.sin(Math.PI / 3))} ${f1(cy - 8 * Math.cos(Math.PI / 3))}" stroke="${COL.ink}" stroke-width="2.2" stroke-linecap="round"/>`;
    s += lab(ar ? cx - 52 : cx + 52, cy + 5, T('2 hours', 'ساعتان'), { fs: 13, fill: COL.ink });
    return s + close2(q);
  }

  window.M5ART = { COL, T, f1, esc, at, num, lab, hot, ringRect, svgOpen, grid100, slices, PLACES, digitsOf, chart, chartHots, line, isPrime };
  window.CH_DIAGRAMS = Object.assign(window.CH_DIAGRAMS || {}, { placeChart, numLine, gridShade, gridModel, barModel, factorTree, multVenn, skipLine, areaModel, unitGrid, longMult, divModel, longDiv, tenthsGrid, jumpLine, placeSlide, exprCard, busRoute, tilePlus, ioTable, seqStrip, saveFig, vaseFig, bikeFig });
})();
