/* Motafawek · Math · Grade 5 · drawings made in code (SVG).
   Shared by the unit game (math-decimals.html), the pictures of the question pages (quiz.html) and the map (math/tools/make_m_maps.js).
   Nothing here is copied from the school book: the grids, the place value chart and the number line are drawn with simple shapes.
   window.M5ART = the building blocks; window.CH_DIAGRAMS gets the pictures a question can show (q.fig) or tap (q.diagram):
     Unit 1: gridShade   (gA | gB | gC)                       three 10 × 10 grids, q.pic = { vals: [0.3, 0.35, 0.5] }
             placeChart  (hundreds | tens | ones | tenths | hundredths | thousandths)   q.pic = { num: '34.527' }
             numLine     (n0 … n10)                           q.pic = { from: 7, to: 8, at: 7.7 | null, step: 0.1 }
             gridModel   (picture only)                       q.pic = { a: 0.45, b: 0.84, mode: 'add' | 'sub' }
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

  window.M5ART = { COL, T, f1, esc, at, num, lab, hot, ringRect, svgOpen, grid100, slices, PLACES, digitsOf, chart, chartHots, line };
  window.CH_DIAGRAMS = Object.assign(window.CH_DIAGRAMS || {}, { placeChart, numLine, gridShade, gridModel });
})();
