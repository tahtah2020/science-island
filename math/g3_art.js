/* Math · Grade 3 pictures, drawn in code (CH_DIAGRAMS). Used by q.fig (a picture above a question). Numbers are written in Arabic-Indic digits (٠١٢…)
   like the Arabic school book; an English reader sees 0-9.
     g3Groups  (fig)  equal groups in rows (a × b = b rows of a): q.pic = { per: 7, n: 2, add: 1 }   add: 1 = one more row (green, dashed), -1 = the last row taken away (faded, crossed)
     g3Split   (fig)  a dot array cut into two parts (distributive rule): q.pic = { per: 3, n: 9, cut: 4, labels: true }   rows = n, dots per row = per, line after `cut` rows
     g3Branch  (fig)  the book's «تفكيك» bracket: a × b → two rows (part × kept = box) → المجموع: q.pic = { a: 6, b: 7, split: 1, parts: [5, 2], res: ['', ''], sum: '?' }  split = 0 breaks a, 1 breaks b (coral); value '?' = asked (gold «؟»), '' = empty box
     g3Boxes   (fig)  containers holding the same number of things: q.pic = { n: 4, per: 10, kind: 'pencil' | 'candy' | 'apple' | 'seat' | 'ball', empty: 2 }   empty = extra empty boxes
     g3Target  (fig)  a throwing target with rings of points and the throws on it: q.pic = { zones: [3, 2, 1, 0], hits: [0, 1, 3, 6] }
     g3Score   (fig)  the book's score table: q.pic = { pts: [3, 2, 1, 0], hits: [0, 1, 3, 6], tot: ['', '', '', ''], sum: '' }  (rows: النقاط، عدد الرميات، إجمالي عدد النقاط)
   Unit 2 (time):
     g3Clock     (fig)  a clock with the hands at h:m, and optionally the move as an arc: q.pic = { h: 3, m: 10, move: 20 }  (move > 0 forward, < 0 back; the end time is never drawn)
     g3TimeLine  (fig)  the book's time number line, 5 minutes a tick, hours named: q.pic = { from: '8:30', to: '9:30', marks: ['8:45', '?'], jumps: [['8:45', '9:00', '15 د']] }
     g3Stopwatch (fig)  a stopwatch: q.pic = { kind: 'analog' | 'digital', s: 15 }
   Unit 3 (division):
     g3Share  (fig)  things shared equally: a child over each plate: q.pic = { total: 12, groups: 3, kind: 'cookie' | 'candy' | 'apple' | 'pencil' }   (groups = number of plates)
     g3Tape   (fig)  the book's comparison bars: a long bar and a short bar under it: q.pic = { big: 15, small: 3, unit: 'سم', segs: true, noSmall }   segs: dashed cuts along the long bar; noSmall: only the long bar (a ribbon cut into equal pieces)
   Unit 4 (column addition and subtraction):
     g3Column (fig)  the book's column sum: digits under their place names, the sign on the right, an empty answer row: q.pic = { a: 375, b: 283, op: '+' | '-' }
   Unit 5 (length):
     g3Measure (fig)  a piece of measuring tape, 1 cm a tick, labelled every 10 cm and at each metre, with an arrow: q.pic = { from: 290, to: 330, at: 315 }  (all in cm)
     g3Map     (fig)  the book's little map: the road (two parts, via a corner) and the straight line between two places: q.pic = { a: 'بيت دينا', b: 'المدرسة', l1: 700, l2: 550, d: 1100, ia: 'house', ib: 'school' }
   Unit 6 (data) — icons are the owner's pictures (Gemini, 6 Nov 2026), cut to math/assets/g3/ic_<name>.webp:
     g3Scale (fig)  the scale alone: q.pic = { max: 20, ticks: 10, labels: [0, 20], ask: 5 | 'step' }  ask n = gold «؟» at mark n; 'step' = gold «؟» over one mark
     g3Tally (fig)  the book's tally table, a row per kind: q.pic = { rows: [['التفاح', 'apple', 13], …] }   n = tally marks drawn (groups of five); other: [3, 4] tints those rows gold and adds a gold «أخرى» row with «؟» (the rows to be put together into «أخرى»)
     g3Bars  (fig)  the book's bar graph: q.pic = { title, unit: 'تلاميذ', max: 10, step: 1, bars: [['أحمر', null, 9, '#e85a6b'], ['التفاح', 'apple', 3]] }   labels at 0, max/2 and max; value null = no bar yet
     g3Table (fig)  a table that reads from the right: q.pic = { title, unit, head: ['', 'الفصل ١', …], rows: [['كرة القدم', 11, 9, 10, '؟'], …] }
     g3Photo (fig)  one of the owner's scenes: q.pic = { src: 'math/assets/g3/bridge.jpg' }
   Word problems (owner, 6 Nov 2026: every word problem is shown as a picture — the things, how many, and the people they go to):
     g3Story (fig)  panels side by side (the first on the right): q.pic = { parts: [{ icon: 'orange', n: 15 }, { icon: 'kid', n: 5 }] }
                    icon = an owner icon (ic_<name>.webp) or a drawn one: kid, adult, rose, notebook, paper, cube, bottle, coin, shoe, bag, cow, train, pencil, candy, ball, page
                    n ≤ 30 → n copies drawn; bigger n (or big: true) → one large icon and «× n»; label replaces the number under the panel.
                    No sign between the panels: the operation is the child's job.
   Screen-reader names describe the drawing, never the answer. */
(function () {
  'use strict';
  const AR = () => (window.SI ? window.SI.isAr() : true);
  const T = (en, ar) => (window.SI ? window.SI.T(en, ar) : ar);
  const QM = () => (AR() ? '؟' : '?');
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const dg = t => AR() ? String(t).replace(/[0-9]/g, d => '٠١٢٣٤٥٦٧٨٩'[d]) : String(t);
  const INK = '#1f3d57', PAPER = '#fffaf0', W = 340;
  const COL = ['#e2603f', '#23799f', '#2e9e6b', '#f2b134', '#9b6bd3', '#e58bb0', '#4ea5d9', '#c98b4a', '#79c69a', '#f08a4b'];
  const f1 = n => Math.round(n * 10) / 10;
  /* a label with Arabic words (e.g. «٢٠ دقيقة») is set right-to-left, so the number stays on the right of its word */
  const rtlAttr = s => /[\u0621-\u064A]/.test(String(s)) ? ' direction="rtl" unicode-bidi="embed"' : '';
  const txt = (x, y, s, o = {}) => `<text x="${f1(x)}" y="${f1(y)}"${rtlAttr(s)} text-anchor="middle" font-family="Cairo, Nunito, sans-serif" font-weight="${o.w || 800}" font-size="${o.fs || 16}" fill="${o.fill || INK}">${rtlAttr(s) ? '\u200F' : ''}${esc(s)}</text>`;
  const svg = (h, name, inner) => `<svg class="diagram" viewBox="0 0 ${W} ${h}" role="img" aria-label="${esc(name)}"><rect width="${W}" height="${h}" rx="14" fill="${PAPER}"/>${inner}</svg>`;

  /* a wrapped candy */
  const candy = (x, y, r, c) => `<g transform="translate(${f1(x)} ${f1(y)})"><path d="M${f1(-r * 1.9)} ${f1(-r * .7)}L${f1(-r * .8)} 0L${f1(-r * 1.9)} ${f1(r * .7)}Z M${f1(r * 1.9)} ${f1(-r * .7)}L${f1(r * .8)} 0L${f1(r * 1.9)} ${f1(r * .7)}Z" fill="${c}" opacity=".75"/><circle r="${f1(r)}" fill="${c}" stroke="#fff" stroke-width="${f1(r * .22)}"/></g>`;

  function g3Groups(q) {
    const p = (q && q.pic) || { per: 7, n: 2, add: 1 }, rows = p.n + (p.add > 0 ? 1 : 0), per = p.per;
    const cw = Math.min(30, 236 / per), rh = Math.min(30, 196 / rows), H = rows * rh + 34, x0 = (W - per * cw) / 2 + 18, y0 = 18;
    let s = '';
    for (let r = 0; r < rows; r++) {
      const extra = p.add > 0 && r === rows - 1, gone = p.add < 0 && r === rows - 1, y = y0 + r * rh;
      s += `<rect x="${f1(x0 - 8)}" y="${f1(y + 2)}" width="${f1(per * cw + 16)}" height="${f1(rh - 5)}" rx="${f1(rh / 2.4)}" fill="${extra ? '#e3f6ea' : '#f4ead3'}" stroke="${extra ? '#2e9e6b' : '#d9c9a6'}" stroke-width="2.4"${extra ? ' stroke-dasharray="6 4"' : ''}/>`;
      for (let c = 0; c < per; c++) s += `<circle cx="${f1(x0 + c * cw + cw / 2)}" cy="${f1(y + rh / 2)}" r="${f1(Math.min(cw, rh) * .3)}" fill="${extra ? '#2e9e6b' : COL[r % COL.length]}" stroke="#fff" stroke-width="1.6"/>`;
      if (gone) s += `<rect x="${f1(x0 - 8)}" y="${f1(y + 2)}" width="${f1(per * cw + 16)}" height="${f1(rh - 5)}" rx="${f1(rh / 2.4)}" fill="${PAPER}" opacity=".62"/><path d="M${f1(x0 - 4)} ${f1(y + rh / 2)}H${f1(x0 + per * cw + 4)}" stroke="#e2603f" stroke-width="4" stroke-linecap="round"/>`;
      s += txt(x0 - 26, y + rh / 2 + 6, extra ? '+' : gone ? '−' : '', { fs: 20, fill: extra ? '#2e9e6b' : '#e2603f' });
    }
    return svg(H, T(`Rows of ${per} dots`, `صفوف في كل صف ${dg(per)} نقاط`), s);
  }

  function g3Split(q) {
    const p = (q && q.pic) || { per: 3, n: 9, cut: 4 }, d = Math.min(24, 200 / p.per, 170 / p.n), gap = 14;
    const H = p.n * d + gap + 30, x0 = (W - p.per * d) / 2, y0 = 14;
    let s = '';
    for (let r = 0; r < p.n; r++) {
      const y = y0 + r * d + (r >= p.cut ? gap : 0) + d / 2, top = r < p.cut;
      for (let c = 0; c < p.per; c++) s += `<circle cx="${f1(x0 + c * d + d / 2)}" cy="${f1(y)}" r="${f1(d * .34)}" fill="${top ? '#23799f' : '#f08a4b'}"/>`;
    }
    const ly = y0 + p.cut * d + gap / 2;
    s += `<path d="M${f1(x0 - 22)} ${f1(ly)}H${f1(x0 + p.per * d + 22)}" stroke="#e2603f" stroke-width="3" stroke-dasharray="7 5" stroke-linecap="round"/>`;
    if (p.labels) {
      const lx = x0 + p.per * d + 54;
      s += txt(lx, y0 + p.cut * d / 2 + 6, `${dg(p.cut)} × ${dg(p.per)}`, { fs: 15, fill: '#23799f' }).replace('<text', '<text direction="rtl"');
      s += txt(lx, y0 + p.cut * d + gap + (p.n - p.cut) * d / 2 + 6, `${dg(p.n - p.cut)} × ${dg(p.per)}`, { fs: 15, fill: '#d0662c' }).replace('<text', '<text direction="rtl"');
    }
    return svg(H, T(`${p.n} rows of ${p.per} dots, cut into two parts`, `${dg(p.n)} صفوف في كل صف ${dg(p.per)} نقاط، مقسومة إلى جزأين`), s);
  }

  /* the book's «تفكيك» bracket: the product on the right, a bracket opening to two rows, a line, then «المجموع».
     The number being broken up is coral (with «نفكّكه» under it) and so are its two parts; the number that stays is navy.
     Values: a number is shown, '?' is the asked spot (gold dashed «؟»), '' is an empty box. */
  function g3Branch(q) {
    const p = (q && q.pic) || { a: 6, b: 7, split: 1, parts: [5, 2], res: ['', ''], sum: '' };
    const SPL = '#e2603f', SPLBG = '#fde3da', ASK = '#d99a12', ASKBG = '#fff4d6', ar = AR();
    const res = p.res || ['', ''], H = 198;
    const wOf = k => k.op ? 22 : k.box ? 54 : 16 * String(k.t).length + 14;
    /* one token: a number (optionally coral pill), a sign, or a result box */
    const tok = (k, cx, y) => {
      if (k.op) return txt(cx, y + 7, k.t, { fs: 20, fill: '#5b7489' });
      const ask = k.t === '?', empty = k.t === '' || k.t === undefined, w = wOf(k) - 6;
      if (k.box || ask || empty) {
        return `<rect x="${f1(cx - w / 2)}" y="${f1(y - 17)}" width="${f1(w)}" height="34" rx="8" fill="${ask ? ASKBG : '#fff'}" stroke="${ask ? ASK : '#8fa6b8'}" stroke-width="2.2"${ask ? ' stroke-dasharray="5 4"' : ''}/>`
          + (empty ? '' : txt(cx, y + 8, ask ? QM() : dg(k.t), { fs: 20, fill: ask ? ASK : k.c || INK }));
      }
      return (k.hl ? `<rect x="${f1(cx - w / 2)}" y="${f1(y - 16)}" width="${f1(w)}" height="32" rx="16" fill="${SPLBG}" stroke="${SPL}" stroke-width="2"/>` : '')
        + txt(cx, y + 8, dg(k.t), { fs: 22, fill: k.c || INK });
    };
    /* lay tokens out from xr leftwards in Arabic (first token on the right), rightwards from xl in English */
    const row = (ks, x0, y) => {
      let s = '', x = x0;
      const list = ar ? ks : ks.slice().reverse();
      const pos = [];
      list.forEach(k => { const w = wOf(k); pos.push(x - w / 2); x -= w; });
      list.forEach((k, i) => { s += tok(k, pos[i], y); });
      return { s, left: x };
    };
    const kept = p.split === 0 ? p.b : p.a, big = p.split === 0 ? p.a : p.b;
    const num = (t, isSplit) => ({ t, c: isSplit ? SPL : INK, hl: isSplit && t !== '?' && t !== '' });
    /* the product a × b on the right */
    const ex = [num(p.a, p.split === 0), { op: 1, t: '×' }, num(p.b, p.split === 1)];
    const ey = 78, top = row(ex, 332, ey);
    let s = top.s;
    /* «نفكّكه» under the number that is broken up */
    const exW = ex.map(wOf), splitX = p.split === 0 ? 332 - exW[0] / 2 : 332 - exW[0] - exW[1] - exW[2] / 2;
    s += txt(splitX, ey + 36, T('break up', 'نفكّكه'), { fs: 12, fill: SPL });
    /* the bracket */
    const bx = top.left - 4, rx = bx - 30, y1 = 36, y2 = 120;
    s += `<path d="M${f1(rx)} ${y1}L${f1(bx)} ${ey}L${f1(rx)} ${y2}" fill="none" stroke="${INK}" stroke-width="2.4" stroke-linejoin="round"/>`;
    /* the two rows: the kept number stays in its place, the part takes the broken number's place */
    const rowToks = i => {
      const part = num(p.parts[i], true), stay = num(kept, false);
      const pair = p.split === 0 ? [part, { op: 1, t: '×' }, stay] : [stay, { op: 1, t: '×' }, part];
      return pair.concat([{ op: 1, t: '=' }, { t: res[i], box: 1, c: INK }]);
    };
    const r1 = row(rowToks(0), rx - 8, y1), r2 = row(rowToks(1), rx - 8, y2);
    s += r1.s + r2.s;
    /* the line and the sum */
    const left = Math.min(r1.left, r2.left), ly = y2 + 26;
    s += `<path d="M${f1(left - 4)} ${ly}H${f1(rx - 4)}" stroke="${INK}" stroke-width="2"/>`;
    const boxX = ar ? left + 27 : rx - 8 - 27;
    s += tok({ t: p.sum, box: 1 }, boxX, ly + 24);
    s += txt(ar ? boxX + 70 : boxX - 70, ly + 30, T('Total', 'المجموع'), { fs: 16 });
    const name = T(`Breaking up ${big} to work out ${p.a} × ${p.b}`, `تفكيك العدد ${dg(big)} لحساب ${dg(p.a)} × ${dg(p.b)}`);
    return svg(H, name, s);
  }

  /* things that go in the boxes */
  const ITEM = {
    pencil: (x, y, k, i) => `<g transform="translate(${f1(x)} ${f1(y)}) scale(${k})"><rect x="-3" y="-11" width="6" height="18" fill="${COL[i % 4]}"/><path d="M-3 7L0 13L3 7Z" fill="#f2d3a0"/><path d="M-1 11L0 13L1 11Z" fill="${INK}"/><rect x="-3" y="-13" width="6" height="3" fill="#e58bb0"/></g>`,
    candy: (x, y, k, i) => candy(x, y, 5 * k, COL[i % 6]),
    apple: (x, y, k) => `<g transform="translate(${f1(x)} ${f1(y)}) scale(${k})"><circle r="6.5" fill="#e2603f"/><path d="M0 -6q1 -4 4 -5" stroke="#7a4a24" stroke-width="1.6" fill="none"/><path d="M1 -7q4 -3 6 0q-3 2 -6 0" fill="#2e9e6b"/></g>`,
    seat: (x, y, k) => `<g transform="translate(${f1(x)} ${f1(y)}) scale(${k})"><circle cy="-6" r="4" fill="#f2c9a0"/><path d="M-6 8q0 -10 6 -10t6 10Z" fill="#4ea5d9"/></g>`,
    ball: (x, y, k, i) => `<g transform="translate(${f1(x)} ${f1(y)}) scale(${k})"><circle r="6.5" fill="${COL[(i + 2) % 6]}"/><path d="M-6 -1q6 4 12 0" stroke="#fff" stroke-width="1.5" fill="none"/></g>`
  };
  function g3Boxes(q) {
    const p = (q && q.pic) || { n: 4, per: 10, kind: 'pencil' }, total = p.n + (p.empty || 0), kind = ITEM[p.kind] ? p.kind : 'pencil';
    const perRow = total <= 5 ? total : Math.ceil(total / 2), rowsB = Math.ceil(total / perRow);
    const bw = Math.min(62, 316 / perRow - 6), bh = bw * (kind === 'seat' ? .78 : .86), H = rowsB * (bh + 30) + 12;
    const x0 = (W - perRow * (bw + 6) + 6) / 2;
    let s = '';
    for (let b = 0; b < total; b++) {
      const col = b % perRow, row = Math.floor(b / perRow), x = x0 + col * (bw + 6), y = 10 + row * (bh + 30), full = b < p.n;
      if (kind === 'seat') s += `<rect x="${f1(x)}" y="${f1(y)}" width="${f1(bw)}" height="${f1(bh)}" rx="10" fill="#f2b134" stroke="#b07d14" stroke-width="2.4"/><rect x="${f1(x + 5)}" y="${f1(y + 5)}" width="${f1(bw - 10)}" height="${f1(bh * .62)}" rx="5" fill="#d9eef8" stroke="#b07d14" stroke-width="1.5"/><circle cx="${f1(x + bw * .25)}" cy="${f1(y + bh)}" r="5" fill="${INK}"/><circle cx="${f1(x + bw * .75)}" cy="${f1(y + bh)}" r="5" fill="${INK}"/>`;
      else s += `<rect x="${f1(x)}" y="${f1(y)}" width="${f1(bw)}" height="${f1(bh)}" rx="9" fill="${kind === 'apple' ? '#f4e2c2' : '#fff'}" stroke="#c98b4a" stroke-width="2.6"/>`;
      if (full) {
        const cols = p.per > 6 ? 5 : Math.min(p.per, 3), rws = Math.ceil(p.per / cols), cw = (bw - 10) / cols, rh = (bh * (kind === 'seat' ? .62 : 1) - 10) / Math.max(rws, 1), k = Math.min(cw, rh) / 15;
        for (let i = 0; i < p.per; i++) s += ITEM[kind](x + 5 + (i % cols + .5) * cw, y + 5 + (Math.floor(i / cols) + .5) * rh, k, i);
      }
      s += txt(x + bw / 2, y + bh + (kind === 'seat' ? 22 : 19), full ? dg(p.per) : dg(0), { fs: 14, fill: full ? INK : '#9aa9b5' });
    }
    return svg(H, T(`${total} boxes`, `${dg(total)} صناديق`), s);
  }

  function g3Target(q) {
    const p = (q && q.pic) || { zones: [3, 2, 1, 0], hits: [0, 1, 3, 6] }, n = p.zones.length, cx = 120, cy = 112, R = 96, rw = R / n;
    const RING = ['#e2603f', '#f2b134', '#4ea5d9', '#bfe8d6', '#fffaf0'];
    let s = '';
    for (let i = n - 1; i >= 0; i--) s += `<circle cx="${cx}" cy="${cy}" r="${f1(rw * (i + 1))}" fill="${RING[i] || '#fff'}" stroke="${INK}" stroke-width="2"/>`;
    let seed = 7; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
    p.zones.forEach((z, i) => {
      const r0 = i === 0 ? 0 : rw * i, r1 = rw * (i + 1);
      s += txt(cx, i === 0 ? cy - rw * .3 : cy - (r0 + r1) / 2 + 6, dg(z), { fs: 14, fill: i === 0 ? '#fff' : INK });
      for (let h = 0; h < (p.hits[i] || 0); h++) {
        const a = i === 0 ? Math.PI * (.2 + .6 * (h + .5) / Math.max(p.hits[i], 1)) : Math.PI * (.15 + 1.7 * (h + .5) / Math.max(p.hits[i], 1)) + rnd() * .2 + (i % 2 ? .3 : 0), rr = i === 0 ? rw * .5 : (r0 + r1) / 2;
        const x = cx + Math.cos(a) * rr, y = cy + Math.sin(a) * rr;
        s += `<g transform="translate(${f1(x)} ${f1(y)})"><circle r="5.4" fill="${INK}" stroke="#fff" stroke-width="2"/></g>`;
      }
    });
    /* the key on the side: points of each ring */
    p.zones.forEach((z, i) => {
      const y = 30 + i * 40;
      s += `<circle cx="300" cy="${y}" r="13" fill="${RING[i] || '#fff'}" stroke="${INK}" stroke-width="2"/>` + txt(300, y + 5, dg(z), { fs: 13, fill: i === 0 ? '#fff' : INK }) + txt(258, y + 6, T('pts', 'نقاط'), { fs: 13, w: 700 });
    });
    return svg(224, T('A target with rings of points and the throws on it', 'هدف فيه مناطق نقاط وعليه الرميات'), s);
  }

  function g3Score(q) {
    const p = (q && q.pic) || { pts: [3, 2, 1, 0], hits: [0, 1, 3, 6] }, n = p.pts.length, ar = AR();
    const head = 112, lw = 52, cw = Math.min(44, (W - 24 - head - lw) / n), tw = head + n * cw + lw, x0 = (W - tw) / 2, rh = 34, H = rh * 3 + 24;
    const rows = [[T('Points', 'النقاط'), p.pts.map(dg), T('Total', 'المجموع')], [T('Throws', 'عدد الرميات'), p.hits.map(dg), dg(p.hits.reduce((a, b) => a + b, 0))], [T('Total points', 'إجمالي عدد النقاط'), (p.tot || p.pts.map(() => '')).map(t => t === '' ? '' : dg(t)), p.sum == null ? '' : dg(p.sum)]];
    /* the book's table reads from the right: the row names on the right for an Arabic reader */
    const colX = k => k === n ? (ar ? x0 : x0 + head + n * cw) : ar ? x0 + tw - head - (k + 1) * cw : x0 + head + k * cw, headX = ar ? x0 + tw - head : x0;
    let s = '';
    rows.forEach(([name, cells, last], r) => {
      const y = 12 + r * rh, bg = r === 0 ? '#fde3cf' : '#fff';
      s += `<rect x="${f1(headX)}" y="${y}" width="${head}" height="${rh}" fill="#fde3cf" stroke="${INK}" stroke-width="1.6"/>` + txt(headX + head / 2, y + 22, name, { fs: 13 });
      cells.forEach((c, k) => { s += `<rect x="${f1(colX(k))}" y="${y}" width="${f1(cw)}" height="${rh}" fill="${bg}" stroke="${INK}" stroke-width="1.6"/>` + (c === '?' || c === QM() ? txt(colX(k) + cw / 2, y + 23, QM(), { fs: 17, fill: '#e2603f' }) : txt(colX(k) + cw / 2, y + 22, c, { fs: 15 })); });
      s += `<rect x="${f1(colX(n))}" y="${y}" width="${lw}" height="${rh}" fill="${r === 0 ? '#fde3cf' : '#f6f1e4'}" stroke="${INK}" stroke-width="1.6"/>` + txt(colX(n) + lw / 2, y + 22, last === '?' ? QM() : last, { fs: r === 0 ? 12 : 15, fill: last === '?' ? '#e2603f' : INK });
    });
    return svg(H, T('A score table: points, throws and total points', 'جدول النقاط: النقاط وعدد الرميات وإجمالي عدد النقاط'), s);
  }


  /* ---------- Unit 2 · time ---------- */
  const mins = t => { const [h, m] = String(t).split(':').map(Number); return h * 60 + m; };
  const clockTxt = t => { const h = Math.floor(t / 60), m = t % 60; return dg(`${(h + 11) % 12 + 1}:${String(m).padStart(2, '0')}`); };
  function face(cx, cy, R, o = {}) {
    let s = `<circle cx="${cx}" cy="${cy}" r="${R + 6}" fill="${o.rim || '#c94f54'}"/><circle cx="${cx}" cy="${cy}" r="${R}" fill="#fff" stroke="${INK}" stroke-width="2"/>`;
    for (let i = 0; i < 60; i++) { const a = i * Math.PI / 30, l = i % 5 ? 4 : 8; s += `<path d="M${f1(cx + Math.sin(a) * R)} ${f1(cy - Math.cos(a) * R)}L${f1(cx + Math.sin(a) * (R - l))} ${f1(cy - Math.cos(a) * (R - l))}" stroke="${INK}" stroke-width="${i % 5 ? 1 : 2}"/>`; }
    for (let i = 1; i <= 12; i++) { const a = i * Math.PI / 6, v = o.sec ? i * 5 : i; s += txt(cx + Math.sin(a) * (R - (o.sec ? 18 : 17)), cy - Math.cos(a) * (R - (o.sec ? 18 : 17)) + 5, dg(v), { fs: o.sec ? 12 : 14 }); }
    return s;
  }
  function g3Clock(q) {
    const p = (q && q.pic) || { h: 3, m: 10 }, cx = 170, cy = 104, R = 84, mv = p.move || 0;
    let s = face(cx, cy, R);
    if (mv) {   /* the move: an arc along the rim from the minute hand, with its length written */
      const a0 = p.m * Math.PI / 30, a1 = (p.m + mv) * Math.PI / 30, r = R + 16, big = Math.abs(mv) > 30 ? 1 : 0, sw = mv > 0 ? 1 : 0;
      const P = a => `${f1(cx + Math.sin(a) * r)} ${f1(cy - Math.cos(a) * r)}`;
      s += `<path d="M${P(a0)}A${r} ${r} 0 ${big} ${sw} ${P(a1)}" fill="none" stroke="#d6337f" stroke-width="4" stroke-linecap="round"/>`;
      const tip = [cx + Math.sin(a1) * r, cy - Math.cos(a1) * r], dir = mv > 0 ? 1 : -1, dx = Math.cos(a1) * dir, dy = Math.sin(a1) * dir;
      const bk = [tip[0] - dx * 11, tip[1] - dy * 11];
      s += `<path d="M${f1(bk[0] - dy * 7)} ${f1(bk[1] + dx * 7)}L${f1(tip[0])} ${f1(tip[1])}L${f1(bk[0] + dy * 7)} ${f1(bk[1] - dx * 7)}" fill="none" stroke="#d6337f" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>`;
      s += txt(40, 30, T(`${Math.abs(mv)} min`, `${dg(Math.abs(mv))} دقيقة`), { fs: 15, fill: '#d6337f' }) + txt(40, 50, mv > 0 ? T('later', 'بعد') : T('earlier', 'قبل'), { fs: 13, fill: '#d6337f' });
    }
    const ha = ((p.h % 12) + p.m / 60) * Math.PI / 6, ma = p.m * Math.PI / 30;
    s += `<path d="M${cx} ${cy}L${f1(cx + Math.sin(ha) * R * .5)} ${f1(cy - Math.cos(ha) * R * .5)}" stroke="#e2603f" stroke-width="7" stroke-linecap="round"/>`;
    s += `<path d="M${cx} ${cy}L${f1(cx + Math.sin(ma) * R * .78)} ${f1(cy - Math.cos(ma) * R * .78)}" stroke="#23799f" stroke-width="5" stroke-linecap="round"/><circle cx="${cx}" cy="${cy}" r="6" fill="${INK}"/>`;
    return svg(212, T('A clock', 'ساعة حائط'), s);
  }
  function g3TimeLine(q) {
    const p = (q && q.pic) || { from: '8:30', to: '9:30', marks: ['8:45'] }, a = mins(p.from), b = mins(p.to), X = t => 34 + (t - a) / (b - a) * 272, ly = 112;
    let s = `<path d="M14 ${ly}H326" stroke="${INK}" stroke-width="2.4"/>`;
    for (let t = a; t <= b; t += 5) { const hr = t % 60 === 0; s += `<path d="M${f1(X(t))} ${ly - (hr ? 14 : 8)}V${ly + (hr ? 14 : 8)}" stroke="${INK}" stroke-width="${hr ? 3 : 1.6}"/>`; if (hr) s += `<rect x="${f1(X(t) - 26)}" y="${ly + 18}" width="52" height="24" rx="5" fill="#fde3cf"/>` + txt(X(t), ly + 36, clockTxt(t), { fs: 14 }); }
    (p.marks || []).forEach((m, i) => {
      const unknown = m.startsWith('?'), t = unknown ? mins(m.slice(1)) : mins(m), y = 22 + (i % 2) * 0;
      s += `<rect x="${f1(X(t) - 30)}" y="${y}" width="60" height="28" rx="5" fill="#fff" stroke="${unknown ? '#e2603f' : INK}" stroke-width="2"${unknown ? ' stroke-dasharray="5 3"' : ''}/>` + txt(X(t), y + 20, unknown ? QM() : clockTxt(t), { fs: 15, fill: unknown ? '#e2603f' : INK });
      s += `<path d="M${f1(X(t))} ${y + 28}V${ly - 4}" stroke="${unknown ? '#e2603f' : INK}" stroke-width="2"/><path d="M${f1(X(t) - 5)} ${ly - 11}L${f1(X(t))} ${ly - 3}L${f1(X(t) + 5)} ${ly - 11}" fill="none" stroke="${unknown ? '#e2603f' : INK}" stroke-width="2"/>`;
    });
    (p.jumps || []).forEach(([u, v, lab], i) => {
      const x1 = X(mins(u)), x2 = X(mins(v)), y = ly + 56 + i * 0;
      s += `<path d="M${f1(x1)} ${ly + 4}V${y}H${f1(x2)}V${ly + 4}" fill="none" stroke="#d6337f" stroke-width="2.2"/>` + txt((x1 + x2) / 2, y + 18, lab.replace(/\d+/g, n => dg(n)), { fs: 14, fill: '#d6337f' });
    });
    return svg((p.jumps || []).length ? 200 : 168, T('A time number line, every mark is 5 minutes', 'خط أعداد للوقت، كل علامة ٥ دقائق'.replace('٥', dg(5))), s);
  }
  function g3Stopwatch(q) {
    const p = (q && q.pic) || { kind: 'analog', s: 15 };
    if (p.kind === 'digital') {
      let s = `<rect x="70" y="16" width="200" height="180" rx="80" fill="#f2c230" stroke="#b08a14" stroke-width="4"/><rect x="118" y="6" width="40" height="18" rx="5" fill="#f2c230" stroke="#b08a14" stroke-width="3"/><rect x="182" y="6" width="40" height="18" rx="5" fill="#f2c230" stroke="#b08a14" stroke-width="3"/>`;
      s += `<rect x="96" y="68" width="148" height="70" rx="12" fill="#e9f0e4" stroke="#5c6f82" stroke-width="3"/>`;
      s += `<text x="170" y="118" text-anchor="middle" direction="ltr" font-family="Cairo, monospace" font-weight="800" font-size="34" fill="${INK}">${esc(dg('0:' + String(p.s).padStart(2, '0')))}</text>`;
      s += txt(170, 166, T('stopwatch', 'ساعة إيقاف'), { fs: 13, fill: '#7a5a10' });
      return svg(206, T('A digital stopwatch', 'ساعة إيقاف رقمية'), s);
    }
    const cx = 170, cy = 112, R = 78;
    let s = `<rect x="160" y="10" width="20" height="16" rx="3" fill="#9aa9b5" stroke="${INK}" stroke-width="2"/><circle cx="170" cy="10" r="7" fill="none" stroke="${INK}" stroke-width="3"/>` + face(cx, cy, R, { sec: true, rim: '#8d99a6' });
    s += `<circle cx="${cx}" cy="${cy - 30}" r="15" fill="none" stroke="#9aa9b5" stroke-width="1.6"/>`;
    const a = p.s * Math.PI / 30;
    s += `<path d="M${f1(cx - Math.sin(a) * 14)} ${f1(cy + Math.cos(a) * 14)}L${f1(cx + Math.sin(a) * R * .82)} ${f1(cy - Math.cos(a) * R * .82)}" stroke="#f08a4b" stroke-width="4" stroke-linecap="round"/><circle cx="${cx}" cy="${cy}" r="5" fill="#f08a4b"/>`;
    return svg(204, T('A stopwatch with one hand', 'ساعة إيقاف لها عقرب واحد'), s);
  }


  /* ---------- Unit 3 · division ---------- */
  const cookie = (x, y, k) => `<g transform="translate(${f1(x)} ${f1(y)}) scale(${k})"><circle r="7" fill="#c98b4a" stroke="#8a5a28" stroke-width="1.4"/><circle cx="-2.5" cy="-2" r="1.3" fill="#5a3a14"/><circle cx="2.5" cy="1" r="1.3" fill="#5a3a14"/><circle cx="-1" cy="3" r="1.1" fill="#5a3a14"/></g>`;
  const kid = (x, y, i) => { const skin = ['#f2c9a0', '#c98b5a', '#e8b48a', '#8a5a3a'][i % 4], hair = ['#5a3a14', '#1f1f1f', '#e2a33a', '#3a2a1a'][i % 4];
    return `<g transform="translate(${f1(x)} ${f1(y)})"><circle r="15" fill="${skin}"/><path d="M-15 -2q2 -16 15 -16t15 16q-6 -8 -15 -8t-15 8Z" fill="${hair}"/><circle cx="-5" cy="1" r="1.8" fill="${INK}"/><circle cx="5" cy="1" r="1.8" fill="${INK}"/><path d="M-5 7q5 4 10 0" stroke="${INK}" stroke-width="1.6" fill="none" stroke-linecap="round"/></g>`; };
  function g3Share(q) {
    const p = (q && q.pic) || { total: 12, groups: 3, kind: 'cookie' }, g = p.groups, per = Math.round(p.total / g);
    const pw = Math.min(96, 320 / g - 8), x0 = (W - g * (pw + 8) + 8) / 2, H = 170;
    const draw = (x, y, k, i) => p.kind === 'cookie' || !ITEM[p.kind] ? cookie(x, y, k) : ITEM[p.kind](x, y, k, i);
    let s = '';
    for (let i = 0; i < g; i++) {
      const x = x0 + i * (pw + 8);
      s += kid(x + pw / 2, 34, i) + `<rect x="${f1(x)}" y="62" width="${f1(pw)}" height="92" rx="14" fill="#fff" stroke="#e58bb0" stroke-width="3"/>`;
      const cols = per > 4 ? 3 : 2, rows = Math.ceil(per / cols), cw = (pw - 12) / cols, rh = Math.min(26, 80 / rows), k = Math.min(cw, rh) / 17;
      for (let j = 0; j < per; j++) s += draw(x + 6 + (j % cols + .5) * cw, 70 + (Math.floor(j / cols) + .5) * rh, k, j);
    }
    return svg(H, T(`Things shared equally on ${g} plates`, `أشياء موزّعة بالتساوي على ${dg(g)} أطباق`), s);
  }
  function g3Tape(q) {
    const p = (q && q.pic) || { big: 15, small: 3, unit: 'سم' }, L = 280, x0 = 30, sw = L * p.small / p.big, u = p.unit || '';
    const lab = n => dg(n) + (u ? ' ' + u : '');
    let s = `<rect x="${x0}" y="44" width="${L}" height="30" rx="4" fill="#c9d3dc" stroke="${INK}" stroke-width="2"/>`;
    if (p.segs) for (let k = 1; k < Math.round(p.big / p.small); k++) s += `<path d="M${f1(x0 + k * sw)} 44V74" stroke="${INK}" stroke-width="1.6" stroke-dasharray="4 3"/>`;
    s += `<path d="M${x0} 36q${L / 2} -14 ${L} 0" fill="none" stroke="${INK}" stroke-width="1.6" stroke-dasharray="3 3"/>` + txt(x0 + L / 2, 24, lab(p.big), { fs: 15 });
    if (!p.noSmall) s += `<rect x="${x0}" y="92" width="${f1(sw)}" height="30" rx="4" fill="#f6b5cf" stroke="${INK}" stroke-width="2"/>` + txt(x0 + sw / 2, 144, lab(p.small), { fs: 15, fill: '#c0306d' });
    return svg(158, T('A long bar and a short bar', 'شريط طويل وشريط قصير'), s);
  }


  /* ---------- Unit 4 · column addition and subtraction ---------- */
  function g3Column(q) {
    const p = (q && q.pic) || { a: 375, b: 283, op: '+' }, A = String(p.a), B = String(p.b);
    const cols = Math.max(A.length, B.length, String(p.op === '-' ? p.a - p.b : p.op === 'x' ? p.a * p.b : p.a + p.b).length), cw = 46, x0 = (W - cols * cw) / 2 - 18, y0 = 42, rh = 40;
    const PLACE = [T('ones', 'آحاد'), T('tens', 'عشرات'), T('hund.', 'مئات'), T('thou.', 'آلاف')];
    const colX = k => x0 + (cols - 1 - k) * cw;   /* k = place (0 ones) from the right: numbers stay left to right */
    let s = '';
    for (let k = 0; k < cols; k++) {
      const x = colX(k);
      s += `<rect x="${f1(x + 2)}" y="${y0 - 6}" width="${cw - 4}" height="${rh * 3 + 16}" rx="8" fill="${['#e3f2fb', '#fde8d6', '#e6f4e6', '#f1e6f8'][k] || '#f4f4f4'}"/>`;
      s += txt(x + cw / 2, y0 - 14, PLACE[k] || '', { fs: 11, w: 700, fill: '#5c6f82' });
    }
    const row = (str, y) => { for (let i = 0; i < str.length; i++) { const k = str.length - 1 - i; s += txt(colX(k) + cw / 2, y, dg(str[i]), { fs: 26 }); } };
    row(A, y0 + 28); row(B, y0 + 28 + rh);
    s += txt(AR() ? x0 + cols * cw + 24 : x0 - 20, y0 + 28 + rh, p.op === '-' ? '−' : p.op === 'x' ? '×' : '+', { fs: 28, fill: '#e2603f' });
    s += `<path d="M${f1(AR() ? x0 : x0 - 40)} ${y0 + 2 * rh + 6}H${f1(AR() ? x0 + cols * cw + 40 : x0 + cols * cw)}" stroke="${INK}" stroke-width="3"/>`;
    for (let k = 0; k < cols; k++) s += `<rect x="${f1(colX(k) + 8)}" y="${y0 + 2 * rh + 14}" width="${cw - 16}" height="${rh - 8}" rx="6" fill="#fff" stroke="#9aa9b5" stroke-width="1.6" stroke-dasharray="4 3"/>`;
    return svg(y0 + 3 * rh + 26, T('A column sum with an empty answer row', 'عملية رأسية والناتج فارغ'), s);
  }


  /* ---------- Unit 5 · length ---------- */
  function g3Measure(q) {
    const p = (q && q.pic) || { from: 290, to: 330, at: 315 }, x0 = 20, L = 300, X = v => x0 + (v - p.from) / (p.to - p.from) * L, top = 62;
    let s = `<rect x="${x0 - 8}" y="${top}" width="${L + 16}" height="58" rx="6" fill="#fdf3c4" stroke="#b08a14" stroke-width="2.4"/>`;
    for (let v = p.from; v <= p.to; v++) {
      const big = v % 10 === 0, mid = v % 5 === 0, h = big ? 22 : mid ? 15 : 9;
      s += `<path d="M${f1(X(v))} ${top}V${top + h}" stroke="${INK}" stroke-width="${big ? 2 : 1.2}"/>`;
      if (big) s += v % 100 === 0 ? txt(X(v), top + 44, `${dg(v / 100)} ${T('m', 'م')}`, { fs: 14, fill: '#c0306d' }) : txt(X(v), top + 44, dg(v % 100), { fs: 13 });
      if (mid && !big) s += `<path d="M${f1(X(v) - 3)} ${top + 18}L${f1(X(v))} ${top + 23}L${f1(X(v) + 3)} ${top + 18}" fill="none" stroke="${INK}" stroke-width="1.2"/>`;
    }
    const ax = X(p.at);
    s += `<path d="M${f1(ax)} 18V${top - 4}" stroke="#e2603f" stroke-width="7"/><path d="M${f1(ax - 11)} ${top - 16}L${f1(ax)} ${top - 2}L${f1(ax + 11)} ${top - 16}Z" fill="#e2603f"/>`;
    return svg(136, T('A piece of measuring tape with an arrow', 'جزء من شريط القياس وعليه سهم'), s);
  }
  const placeIcon = (kind, x, y) => kind === 'park'
    ? `<g transform="translate(${x} ${y})"><rect x="-14" y="6" width="28" height="6" rx="2" fill="#8a5a28"/><circle cy="-6" r="13" fill="#2e9e6b"/><circle cx="-9" cy="0" r="9" fill="#3fae6f"/><circle cx="9" cy="0" r="9" fill="#3fae6f"/></g>`
    : kind === 'school' ? `<g transform="translate(${x} ${y})"><rect x="-16" y="-10" width="32" height="24" fill="#fff" stroke="${INK}" stroke-width="2"/><path d="M-18 -10L0 -22L18 -10Z" fill="#9aa9b5" stroke="${INK}" stroke-width="2"/><rect x="-4" y="4" width="8" height="10" fill="${INK}"/><circle cy="-13" r="3" fill="#4ea5d9"/></g>`
    : kind === 'mall' ? `<g transform="translate(${x} ${y})"><rect x="-15" y="-18" width="30" height="32" fill="#e9eef3" stroke="${INK}" stroke-width="2"/>${[0, 1, 2].map(r => [0, 1, 2].map(c => `<rect x="${-11 + c * 8}" y="${-14 + r * 9}" width="5" height="6" fill="#4ea5d9"/>`).join('')).join('')}</g>`
    : `<g transform="translate(${x} ${y})"><rect x="-15" y="-8" width="30" height="22" fill="${kind === 'house2' ? '#d9c8ef' : '#fde3cf'}" stroke="${INK}" stroke-width="2"/><path d="M-19 -8L0 -22L19 -8Z" fill="${kind === 'house2' ? '#9b6bd3' : '#e2603f'}" stroke="${INK}" stroke-width="2"/><rect x="-4" y="3" width="8" height="11" fill="#8a5a28"/></g>`;
  function g3Map(q) {
    const p = (q && q.pic) || { a: 'بيت دينا', b: 'المدرسة', l1: 700, l2: 550, d: 1100 }, A = [70, 150], C = [190, 44], B = [292, 132];
    const m = v => `${dg(v)} ${T('m', 'م')}`;
    let s = `<rect x="10" y="10" width="320" height="196" rx="10" fill="#d6ecbf"/>`;
    s += `<path d="M${A[0]} ${A[1]}L${C[0]} ${C[1]}L${B[0]} ${B[1]}" fill="none" stroke="#fff" stroke-width="22" stroke-linejoin="round"/><path d="M${A[0]} 10V206" stroke="#fff" stroke-width="20" opacity=".8"/>`;
    const arrow = (P, Q, lab, off) => {
      const mx = (P[0] + Q[0]) / 2, my = (P[1] + Q[1]) / 2, dx = Q[0] - P[0], dy = Q[1] - P[1], l = Math.hypot(dx, dy), nx = -dy / l, ny = dx / l;
      const head = (X, Y, ux, uy) => `<path d="M${f1(X - ux * 9 + uy * 5)} ${f1(Y - uy * 9 - ux * 5)}L${f1(X)} ${f1(Y)}L${f1(X - ux * 9 - uy * 5)} ${f1(Y - uy * 9 + ux * 5)}" fill="none" stroke="#e2603f" stroke-width="2.2"/>`;
      return `<path d="M${f1(P[0] + dx / l * 8)} ${f1(P[1] + dy / l * 8)}L${f1(Q[0] - dx / l * 8)} ${f1(Q[1] - dy / l * 8)}" stroke="#e2603f" stroke-width="2.2"/>` + head(Q[0] - dx / l * 8, Q[1] - dy / l * 8, dx / l, dy / l) + head(P[0] + dx / l * 8, P[1] + dy / l * 8, -dx / l, -dy / l)
        + `<rect x="${f1(mx + nx * off - 30)}" y="${f1(my + ny * off - 12)}" width="60" height="22" rx="6" fill="#fffaf0" opacity=".92"/>` + txt(mx + nx * off, my + ny * off + 5, lab, { fs: 13 });
    };
    s += arrow(A, C, m(p.l1), -16) + arrow(C, B, m(p.l2), -16) + arrow(A, B, m(p.d), 18);
    [A, B, C].forEach(P => { s += `<circle cx="${P[0]}" cy="${P[1]}" r="5" fill="${INK}"/>`; });
    s += placeIcon(p.ia || 'house', 40, 112) + txt(Math.max(42, String(p.a).length * 3.7 + 14), 196, p.a, { fs: 13 }) + placeIcon(p.ib || 'park', 300, 92) + txt(Math.min(296, 326 - String(p.b).length * 3.7), 170, p.b, { fs: 13 });
    return svg(216, T('A small map with a road and a straight line', 'خريطة صغيرة فيها طريق وخط مستقيم'), s);
  }


  /* ---------- Unit 6 · data ---------- */
  const ICON = k => k ? `math/assets/g3/ic_${k}.webp` : '';
  const img = (k, x, y, sz) => k ? `<image href="${ICON(k)}" x="${f1(x - sz / 2)}" y="${f1(y - sz / 2)}" width="${sz}" height="${sz}" preserveAspectRatio="xMidYMid meet"/>` : '';
  function tallyMarks(n, x, y, h) {   /* groups of five: four upright strokes and a fifth across them, left to right */
    let s = '', gx = x;
    for (let g = 0; g < Math.ceil(n / 5); g++) {
      const k = Math.min(5, n - g * 5);
      for (let i = 0; i < Math.min(k, 4); i++) s += `<path d="M${f1(gx + i * 6)} ${y}V${y + h}" stroke="${INK}" stroke-width="2.2" stroke-linecap="round"/>`;
      if (k === 5) s += `<path d="M${f1(gx - 4)} ${f1(y + h * .72)}L${f1(gx + 22)} ${f1(y + h * .28)}" stroke="${INK}" stroke-width="2.2" stroke-linecap="round"/>`;
      gx += 34;
    }
    return s;
  }
  function g3Tally(q) {
    const p = (q && q.pic) || { rows: [['التفاح', 'apple', 13]] }, rh = 40, nameW = 124, x0 = 14, tw = 312;
    /* other: indexes of rows that go into «أخرى» — tinted gold, and a gold «أخرى» row with «؟» is added at the bottom.
       Arabic: names on the right; English (Languages track): names on the left like the English book. Marks always run left to right. */
    const ar = AR(), nx = ar ? x0 + tw - nameW : x0, mx = ar ? x0 : x0 + nameW, ix = ar ? x0 + tw - 20 : x0 + 20, tx = ar ? x0 + tw - nameW / 2 - 16 : x0 + nameW / 2 + 16;
    const oth = p.other || [], GOLD = '#d99a12', rows = p.rows.length + (oth.length ? 1 : 0), H = rows * rh + 20 + (oth.length ? 8 : 0);
    let s = '';
    p.rows.forEach(([name, icon, n], r) => {
      const y = 10 + r * rh, o = oth.includes(r);
      s += `<rect x="${nx}" y="${y}" width="${nameW}" height="${rh}" fill="${o ? '#ffe7a3' : '#fde3cf'}" stroke="${INK}" stroke-width="1.6"/><rect x="${mx}" y="${y}" width="${tw - nameW}" height="${rh}" fill="${o ? '#fff4d6' : '#fff'}" stroke="${INK}" stroke-width="1.6"/>`;
      s += img(icon, ix, y + rh / 2, 28) + txt(icon ? tx : nx + nameW / 2, y + 26, name, { fs: name.length > 10 ? 11.5 : 14 });
      s += tallyMarks(n, mx + 14, y + 9, 22);
    });
    if (oth.length) {
      const y = 18 + p.rows.length * rh;
      s += `<rect x="${nx}" y="${y}" width="${nameW}" height="${rh}" fill="${GOLD}" stroke="${INK}" stroke-width="1.6"/><rect x="${mx}" y="${y}" width="${tw - nameW}" height="${rh}" fill="#fff" stroke="${GOLD}" stroke-width="2.4" stroke-dasharray="6 4"/>`;
      s += txt(nx + nameW / 2, y + 27, T('Other', 'أخرى'), { fs: 17, fill: '#fff' }) + txt(mx + (tw - nameW) / 2, y + 28, QM(), { fs: 22, fill: GOLD });
    }
    return svg(H, T('A tally table', 'جدول علامات العدّ'), s);
  }
  /* the book's scale (المقياس) on its own: 0 at the bottom, `ticks` marks up to `max`, numbers only where `labels` says;
     ask: a tick number → gold «؟» at that mark; ask: 'step' → gold «؟» bracket over one mark (how much one mark is worth) */
  function g3Scale(q) {
    const p = (q && q.pic) || { max: 10, ticks: 10, labels: [0, 10], ask: 5 }, n = p.ticks, sp = Math.min(22, 250 / n), H = n * sp + 56, ax = 176, y0 = H - 26, Y = i => y0 - i * sp, GOLD = '#d99a12';
    let s = `<path d="M${ax} ${f1(Y(n) - 10)}V${y0}" stroke="${INK}" stroke-width="3" stroke-linecap="round"/>`;
    for (let i = 0; i <= n; i++) {
      const big = i === 0 || i === n || (p.labels || []).includes(i * p.max / n);
      s += `<path d="M${ax - (big ? 14 : 9)} ${f1(Y(i))}H${ax + (big ? 14 : 9)}" stroke="${INK}" stroke-width="${big ? 2.6 : 1.8}"/>`;
      if ((p.labels || []).includes(i * p.max / n)) s += txt(ax - 34, Y(i) + 6, dg(i * p.max / n), { fs: 16 });
    }
    if (typeof p.ask === 'number') {
      const y = Y(p.ask);
      s += `<path d="M${ax + 16} ${f1(y)}H${ax + 46}" stroke="${GOLD}" stroke-width="2.4"/><path d="M${ax + 16} ${f1(y)}l9 -5v10z" fill="${GOLD}"/>`
        + `<rect x="${ax + 48}" y="${f1(y - 14)}" width="40" height="28" rx="7" fill="#fff4d6" stroke="${GOLD}" stroke-width="2.2" stroke-dasharray="5 4"/>` + txt(ax + 68, y + 7, QM(), { fs: 18, fill: GOLD });
    } else if (p.ask === 'step') {
      const ya = Y(0), yb = Y(1), xm = ax + 22;
      s += `<path d="M${ax + 14} ${f1(ya)}h8V${f1(yb)}h-8" fill="none" stroke="${GOLD}" stroke-width="2.4"/><path d="M${xm} ${f1((ya + yb) / 2)}H${xm + 22}" stroke="${GOLD}" stroke-width="2.4"/>`
        + `<rect x="${xm + 24}" y="${f1((ya + yb) / 2 - 14)}" width="40" height="28" rx="7" fill="#fff4d6" stroke="${GOLD}" stroke-width="2.2" stroke-dasharray="5 4"/>` + txt(xm + 44, (ya + yb) / 2 + 7, QM(), { fs: 18, fill: GOLD });
    }
    return svg(H, T(`A scale from 0 to ${p.max} with ${n} marks`, `مقياس من ${dg(0)} إلى ${dg(p.max)} فيه ${dg(n)} علامات`), s);
  }
  function g3Bars(q) {
    const p = (q && q.pic) || { max: 10, step: 1, bars: [] }, nb = p.bars.length, gx = 54, gw = 250, gy = 50, gh = 186, Y = v => gy + gh - v / p.max * gh;
    /* title or unit '?' = the asked spot: a gold dashed box with «؟» (the book's [ ] and ( ) to fill in) */
    const askBox = (cx, cy, w) => `<rect x="${f1(cx - w / 2)}" y="${f1(cy - 13)}" width="${w}" height="26" rx="7" fill="#fff4d6" stroke="#d99a12" stroke-width="2.2" stroke-dasharray="5 4"/>` + txt(cx, cy + 7, QM(), { fs: 18, fill: '#d99a12' });
    let s = p.title === '?' ? askBox(178, 16, 150) : txt(178, 20, p.title || '', { fs: 14 });
    s += p.unit === '?' ? askBox(30, 26, 32) + `<path d="M11 13q-7 13 0 26M49 13q7 13 0 26" fill="none" stroke="${INK}" stroke-width="2.2" stroke-linecap="round"/>` : p.unit ? txt(30, 38, `(${p.unit})`, { fs: 11, w: 700 }) : '';
    s += `<rect x="${gx}" y="${gy}" width="${gw}" height="${gh}" fill="#fff" stroke="${INK}" stroke-width="2"/>`;
    for (let v = p.step; v < p.max; v += p.step) s += `<path d="M${gx} ${f1(Y(v))}H${gx + gw}" stroke="${v === p.max / 2 ? INK : '#9aa9b5'}" stroke-width="${v === p.max / 2 ? 1.6 : 1}"${v === p.max / 2 ? '' : ' stroke-dasharray="3 3"'}/>`;
    [0, p.max / 2, p.max].forEach(v => { s += txt(gx - 16, Y(v) + 5, dg(v), { fs: 13 }); });
    const bw = gw / nb;
    p.bars.forEach(([name, icon, v, col], i) => {
      const cx = gx + bw * (i + .5);
      s += `<path d="M${f1(gx + bw * (i + 1))} ${gy}V${gy + gh}" stroke="#d4dbe2" stroke-width="1"/>`;
      if (v != null) s += `<rect x="${f1(cx - bw * .28)}" y="${f1(Y(v))}" width="${f1(bw * .56)}" height="${f1(gy + gh - Y(v))}" fill="${col || ['#e85a6b', '#6cc4ef', '#79c69a', '#b9bec4'][i % 4]}" stroke="${INK}" stroke-width="1.6"/>`;
      s += img(icon, cx, gy + gh + 18, 24) + txt(cx, gy + gh + (icon ? 46 : 22), name, { fs: name.length > 6 ? 10 : 12 });
    });
    return svg(gy + gh + 56, T('A bar graph', 'أعمدة بيانية'), s);
  }
  function g3Table(q) {
    const p = (q && q.pic) || { head: [], rows: [] }, cols = p.head.length, first = 92, cw = Math.min(62, (316 - first) / (cols - 1)), tw = first + cw * (cols - 1), x0 = (W - tw) / 2, rh = 30, top = p.title ? 32 : 10;
    const ar = AR(), colX = c => ar ? (c === 0 ? x0 + tw - first : x0 + tw - first - c * cw) : (c === 0 ? x0 : x0 + first + (c - 1) * cw), colW = c => c === 0 ? first : cw;
    let s = p.title ? txt(170, 22, p.title + (p.unit ? `   (${p.unit})` : ''), { fs: 13 }) : '';
    [p.head].concat(p.rows).forEach((row, r) => row.forEach((v, c) => {
      const y = top + r * rh, hd = r === 0 || c === 0, unk = v === QM() || v === '?';
      s += `<rect x="${f1(colX(c))}" y="${y}" width="${f1(colW(c))}" height="${rh}" fill="${hd ? '#fde3cf' : '#fff'}" stroke="${INK}" stroke-width="1.4"/>`;
      s += txt(colX(c) + colW(c) / 2, y + 20, unk ? QM() : typeof v === 'number' ? dg(v) : v, { fs: unk ? 16 : 13, fill: unk ? '#e2603f' : INK, w: hd ? 800 : 700 });
    }));
    return svg(top + (p.rows.length + 1) * rh + 12, T('A table', 'جدول'), s);
  }
  function g3Photo(q) {
    const p = (q && q.pic) || {}, h = 190;
    return svg(h, T('A picture', 'صورة'), `<clipPath id="g3ph"><rect x="8" y="8" width="324" height="${h - 16}" rx="12"/></clipPath><image href="${p.src}" x="8" y="8" width="324" height="${h - 16}" preserveAspectRatio="xMidYMid slice" clip-path="url(#g3ph)"/>`);
  }


  /* ---------- Word problems as pictures ---------- */
  const OWNER = new Set(['apple', 'strawberry', 'banana', 'orange', 'car', 'bus', 'motorbike', 'truck', 'taxi', 'police', 'dog', 'cat', 'cat2', 'rabbit', 'dolphin', 'horse', 'cake', 'cake2', 'pie', 'biscuit', 'picturebook', 'picturebook2', 'refbook', 'sciencebook', 'clipboard', 'math', 'english', 'pe', 'music', 'drawing', 'other',
    /* third set (unit 10) */
    'chocolate', 'juice', 'medal', 'bouquet', 'cakebox', 'snackbox', 'pencils', 'sandwich', 'paperbox', 'banknote', 'coin2', 'paperbundle', 'notebook2', 'lake', 'runner', 'basket',
    /* fourth set (English units 1-3) */
    'pudding', 'jelly', 'water', 'block', 'train2', 'aquarium', 'flowershop', 'schoolbus',
    /* fifth set (English units 4-6, 7 Nov 2026) */
    'teddy', 'stationery', 'soccer', 'meal', 'sneakers', 'handbag', 'cow3', 'peach', 'grape',
    /* second Gemini set (6 Nov 2026, units 7-9) */
    'cookie', 'candy2', 'paper2', 'seed', 'plate', 'boxopen', 'box', 'bench', 'wheel', 'can', 'wagon', 'ribbon', 'pencil2', 'marble', 'books', 'backpack', 'boy', 'girl', 'boy2', 'girl2', 'teacher', 'father', 'grandma', 'kids']);
  const CHILD = ['boy', 'girl', 'boy2', 'girl2'];   /* 'child' in a story = the owner's four children in turn */
  const PAPER_C = ['#f6b5cf', '#bfe3f5', '#c7ecd2', '#fde7a8', '#e3d4f6'];
  const DRAWN = {   /* each drawn in a box of side 1 around (0,0); scaled by the caller */
    rose: i => `<path d="M0 .45V-.05" stroke="#2e9e6b" stroke-width=".07"/><path d="M0 .2q.18-.12 .26 0q-.14 .1-.26 0" fill="#2e9e6b"/><circle cy="-.2" r=".24" fill="#e2603f"/><circle cx="-.1" cy="-.26" r=".13" fill="#f08080"/><circle cx=".1" cy="-.15" r=".11" fill="#c94f54"/>`,
    notebook: i => `<rect x="-.32" y="-.42" width=".64" height=".84" rx=".05" fill="${['#4ea5d9', '#e2603f', '#2e9e6b', '#9b6bd3'][i % 4]}" stroke="${INK}" stroke-width=".04"/><rect x="-.2" y="-.28" width=".4" height=".14" fill="#fff"/>${[-.3, -.1, .1, .3].map(y => `<circle cx="-.32" cy="${y}" r=".04" fill="#fff" stroke="${INK}" stroke-width=".02"/>`).join('')}`,
    paper: i => `<path d="M-.36 -.36H.2L.36 -.2V.36H-.36Z" fill="${PAPER_C[i % 5]}" stroke="${INK}" stroke-width=".035"/><path d="M.2 -.36V-.2H.36" fill="none" stroke="${INK}" stroke-width=".035"/>`,
    page: i => `<path d="M-.32 -.42H.2L.32 -.3V.42H-.32Z" fill="#fff" stroke="${INK}" stroke-width=".035"/>${[-.2, -.06, .08, .22].map(y => `<path d="M-.2 ${y}H.2" stroke="#9aa9b5" stroke-width=".035"/>`).join('')}`,
    cube: i => `<path d="M0 -.38L.34 -.2V.2L0 .38L-.34 .2V-.2Z" fill="${['#f2b134', '#6cc4ef', '#79c69a', '#f6b5cf'][i % 4]}" stroke="${INK}" stroke-width=".04"/><path d="M-.34 -.2L0 -.02L.34 -.2M0 -.02V.38" fill="none" stroke="${INK}" stroke-width=".035"/>`,
    bottle: i => `<rect x="-.08" y="-.46" width=".16" height=".1" rx=".02" fill="#4ea5d9"/><path d="M-.12 -.36H.12L.18 -.24V.42H-.18V-.24Z" fill="#d9eef8" stroke="#4ea5d9" stroke-width=".04"/><rect x="-.18" y="-.02" width=".36" height=".18" fill="#4ea5d9" opacity=".6"/>`,
    coin: i => `<circle r=".4" fill="#f2c230" stroke="#b08a14" stroke-width=".06"/><circle r=".3" fill="none" stroke="#b08a14" stroke-width=".03"/><text y=".12" text-anchor="middle" font-family="Cairo, sans-serif" font-weight="800" font-size=".34" fill="#7a5a10">ج</text>`,
    shoe: i => `<path d="M-.44 .12Q-.44 -.12 -.3 -.16L-.12 -.3Q.0 -.3 .04 -.16Q.2 -.08 .36 -.04Q.46 0 .46 .12Z" fill="#e2603f" stroke="${INK}" stroke-width=".035" stroke-linejoin="round"/><path d="M-.46 .12H.48V.22H-.46Z" fill="#fff" stroke="${INK}" stroke-width=".035"/><path d="M-.1 -.2L.0 -.1M-.04 -.24L.06 -.13M.02 -.18L.12 -.08" stroke="#fff" stroke-width=".035"/>`,
    bag: i => `<path d="M-.16 -.3Q0 -.48 .16 -.3" fill="none" stroke="${INK}" stroke-width=".05"/><rect x="-.32" y="-.3" width=".64" height=".72" rx=".12" fill="#9b6bd3" stroke="${INK}" stroke-width=".04"/><rect x="-.2" y=".02" width=".4" height=".24" rx=".05" fill="#c9b2ec" stroke="${INK}" stroke-width=".03"/>`,
    cow: i => `<ellipse cy=".08" rx=".38" ry=".22" fill="#fff" stroke="${INK}" stroke-width=".04"/><circle cx="-.12" cy=".05" r=".08" fill="${INK}"/><circle cx=".14" cy=".14" r=".06" fill="${INK}"/><circle cx=".38" cy="-.1" r=".14" fill="#fff" stroke="${INK}" stroke-width=".04"/><ellipse cx=".46" cy="-.06" rx=".07" ry=".05" fill="#f6b5cf"/>${[-.26, -.1, .12, .26].map(x => `<path d="M${x} .26V.42" stroke="${INK}" stroke-width=".05"/>`).join('')}`,
    train: i => `<rect x="-.46" y="-.26" width=".92" height=".42" rx=".08" fill="#79c69a" stroke="${INK}" stroke-width=".04"/>${[-.32, -.08, .16].map(x => `<rect x="${x}" y="-.18" width=".16" height=".14" fill="#e6f6fb"/>`).join('')}<circle cx="-.26" cy=".2" r=".09" fill="${INK}"/><circle cx=".26" cy=".2" r=".09" fill="${INK}"/>`,
    pencil: i => `<rect x="-.07" y="-.4" width=".14" height=".64" fill="${COL[i % 4]}"/><path d="M-.07 .24L0 .42L.07 .24Z" fill="#f2d3a0"/><rect x="-.07" y="-.46" width=".14" height=".08" fill="#e58bb0"/>`,
    candy: i => `<path d="M-.42 -.14L-.18 0L-.42 .14Z M.42 -.14L.18 0L.42 .14Z" fill="${COL[i % 6]}" opacity=".75"/><circle r=".2" fill="${COL[i % 6]}" stroke="#fff" stroke-width=".04"/>`,
    ball: i => `<circle r=".36" fill="${COL[(i + 2) % 6]}"/><path d="M-.34 -.05q.34 .22 .68 0" stroke="#fff" stroke-width=".06" fill="none"/>`,
    adult: i => `<g transform="scale(1.35)"><circle cy="-.22" r=".13" fill="${['#f2c9a0', '#c98b5a', '#e8b48a'][i % 3]}"/><path d="M-.11 -.3q.11 -.12 .22 0q-.11 -.04 -.22 0Z" fill="#3a2a1a"/><path d="M-.22 .34V.04Q-.22 -.07 0 -.07T.22 .04V.34Z" fill="${['#23799f', '#9b6bd3', '#2e9e6b'][i % 3]}"/></g>`
  };
  function drawThing(key, x, y, sz, i) {
    if (key === 'child') return img(CHILD[i % 4], x, y, sz);
    if (key === 'kid') return `<g transform="translate(${f1(x)} ${f1(y)}) scale(${f1(sz / 34)})">${kid(0, 0, i)}</g>`;
    if (OWNER.has(key)) return img(key, x, y, sz);
    return DRAWN[key] ? `<g transform="translate(${f1(x)} ${f1(y)}) scale(${f1(sz)})">${DRAWN[key](i)}</g>` : '';
  }
  function g3Story(q) {
    const p = (q && q.pic) || { parts: [] }, parts = p.parts, np = parts.length, gap = 10, pw = (W - 20 - gap * (np - 1)) / np, H = 196, ar = AR();
    let s = '';
    parts.forEach((pt, k) => {
      const x = ar ? W - 10 - (k + 1) * pw - k * gap : 10 + k * (pw + gap), y = 10, ph = 150, n = pt.n;
      s += `<rect x="${f1(x)}" y="${y}" width="${f1(pw)}" height="${ph}" rx="14" fill="#fff" stroke="#e8d9bd" stroke-width="2"/>`;
      if (n != null && n <= 30 && !pt.big && n > 0) {
        const cols = Math.ceil(Math.sqrt(n * pw / ph)), rows = Math.ceil(n / cols), cw = (pw - 12) / cols, rh = (ph - 12) / rows, sz = Math.min(cw, rh) * .9;
        for (let i = 0; i < n; i++) s += drawThing(pt.icon, x + 6 + (i % cols + .5) * cw, y + 6 + (Math.floor(i / cols) + .5) * rh, sz, i);
      } else {
        s += drawThing(pt.icon, x + pw / 2, y + ph / 2 - (n != null ? 14 : 0), Math.min(pw * .6, 78), 0);
        if (n != null && n > 0) s += txt(x + pw / 2, y + ph - 14, `× ${dg(n)}`, { fs: 18, fill: '#c0306d' });
      }
      const lab = pt.label != null ? pt.label : n != null ? dg(n) + (pt.unit ? ' ' + pt.unit : '') : '';
      if (lab) s += txt(x + pw / 2, y + ph + 26, lab, { fs: Math.max(10, Math.min(15, pw / (String(lab).length * .52))) });   /* long labels shrink to the panel width */
    });
    return svg(H, T('A picture of the problem', 'صورة المسألة'), s);
  }


  /* ---------- Unit 7 · mental maths: the book's two steps as jumps on an open number line ---------- */
  /* pic: { a, jumps: [40, 6], sign: '+'|'-', know: how many points are written (1 = only the start) } */
  function g3Jumps(q) {
    const p = (q && q.pic) || { a: 33, jumps: [40, 6], sign: '+', know: 1 }, sg = p.sign === '-' ? -1 : 1, pts = [p.a];
    p.jumps.forEach(j => pts.push(pts[pts.length - 1] + sg * j));
    /* widths: every jump at least 70 px, the rest shared by size */
    const tot = p.jumps.reduce((a, b) => a + b, 0), free = 280 - 70 * p.jumps.length, ws = p.jumps.map(j => 70 + free * j / tot);
    const xs = [sg > 0 ? 30 : 310]; ws.forEach(w => xs.push(xs[xs.length - 1] + sg * w));
    const y = 100, CJ = ['#e2603f', '#23799f'];
    let s = `<path d="M14 ${y}H326" stroke="${INK}" stroke-width="3" stroke-linecap="round"/>`;
    p.jumps.forEach((j, k) => {
      const x1 = xs[k], x2 = xs[k + 1], mx = (x1 + x2) / 2, h = 34 + Math.min(26, Math.abs(x2 - x1) / 6);
      s += `<path d="M${f1(x1)} ${y - 4}Q${f1(mx)} ${f1(y - 2 * h)} ${f1(x2)} ${y - 4}" fill="none" stroke="${CJ[k % 2]}" stroke-width="3"/>`
        + (() => { const dx = x2 - mx, dy = 2 * h, l = Math.hypot(dx, dy), ux = dx / l, uy = dy / l, tx = x2, ty = y - 4;
          return `<path d="M${f1(tx - ux * 12 - uy * 7)} ${f1(ty - uy * 12 + ux * 7)}L${f1(tx)} ${f1(ty)}L${f1(tx - ux * 12 + uy * 7)} ${f1(ty - uy * 12 - ux * 7)}Z" fill="${CJ[k % 2]}"/>`; })();
      const lx = mx, ly = y - h - 8;
      s += `<rect x="${f1(lx - 28)}" y="${f1(ly - 16)}" width="56" height="26" rx="13" fill="#fff" stroke="${CJ[k % 2]}" stroke-width="2"/>` + `<text x="${f1(lx)}" y="${f1(ly + 3)}" text-anchor="middle" direction="ltr" font-family="Cairo, Nunito, sans-serif" font-weight="800" font-size="16" fill="${CJ[k % 2]}">⁦${sg > 0 ? '+' : '−'} ${dg(j)}⁩</text>`;
    });
    pts.forEach((v, k) => {
      const known = k < (p.know || 1), x = xs[k];
      s += `<path d="M${f1(x)} ${y - 8}V${y + 8}" stroke="${INK}" stroke-width="3"/>`;
      s += known ? txt(x, y + 32, dg(v), { fs: 19 }) : `<rect x="${f1(x - 22)}" y="${y + 13}" width="44" height="28" rx="7" fill="#fff4d6" stroke="#d99a12" stroke-width="2.2" stroke-dasharray="5 4"/>` + txt(x, y + 34, QM(), { fs: 18, fill: '#d99a12' });
    });
    return svg(150, T('Jumps on a number line', 'قفزات على خط الأعداد'), s);
  }


  /* ---------- Unit 8 · division with a remainder ---------- */
  /* pic: { total, per, icon, box: 'plate'|'box', need: true = an extra dashed container for the leftovers (lesson 4) } */
  function g3Rem(q) {
    const p = (q && q.pic) || { total: 17, per: 3, icon: 'cookie' }, g = Math.floor(p.total / p.per), r = p.total % p.per;
    const lw = r && !p.need ? 64 : 0, slots = g + (r && p.need ? 1 : 0), cw = Math.min(76, (318 - lw - (lw ? 10 : 0)) / slots), cols = p.per > 4 ? 3 : 2, rows = Math.ceil(p.per / cols);
    const ch = Math.max(56, rows * Math.min(26, (cw - 10) / cols) + 14), x0 = (W - slots * cw - lw - (lw ? 10 : 0)) / 2, y0 = 18, H = y0 + ch + 40;
    const box = (x, w, dashed) => p.box === 'box'
      ? `<rect x="${f1(x + 3)}" y="${y0}" width="${f1(w - 6)}" height="${f1(ch)}" rx="5" fill="${dashed ? '#fff' : '#f3dcb8'}" stroke="${dashed ? '#d99a12' : '#a8763f'}" stroke-width="2.4"${dashed ? ' stroke-dasharray="6 4"' : ''}/>`
      : `<rect x="${f1(x + 3)}" y="${y0}" width="${f1(w - 6)}" height="${f1(ch)}" rx="${f1(Math.min(24, ch / 2))}" fill="#fff" stroke="${dashed ? '#d99a12' : '#e58bb0'}" stroke-width="2.6"${dashed ? ' stroke-dasharray="6 4"' : ''}/>`;
    const fill = (x, w, n) => { let t = ''; const c = n > 4 ? 3 : Math.min(cols, n || 1), rr = Math.ceil(n / c), iw = (w - 14) / c, ih = (ch - 10) / Math.max(rows, rr), sz = Math.min(iw, ih) * .92;
      for (let j = 0; j < n; j++) t += drawThing(p.icon, x + 7 + (j % c + .5) * iw, y0 + 5 + (Math.floor(j / c) + .5) * ih, sz, j); return t; };
    let s = '';
    for (let k = 0; k < g; k++) { const x = x0 + k * cw; s += box(x, cw, false) + fill(x, cw, p.per); }
    if (r) {
      if (p.need) { const x = x0 + g * cw; s += box(x, cw, true) + fill(x, cw, r); }
      else { const x = x0 + g * cw + 10; s += `<rect x="${f1(x)}" y="${y0}" width="${lw}" height="${f1(ch)}" rx="14" fill="#fff4d6" stroke="#d99a12" stroke-width="2.4" stroke-dasharray="6 4"/>` + fill(x, lw, r) + txt(x + lw / 2, y0 + ch + 26, T('left', 'الباقي'), { fs: 14, fill: '#b07d14' }); }
    }
    return svg(H, T(`${p.total} things in groups of ${p.per}`, `${dg(p.total)} في مجموعات من ${dg(p.per)}`), s);
  }


  /* ---------- Unit 9 · numbers greater than 10 000 ---------- */
  const big = v => dg(String(v).replace(/\B(?=(\d{3})+(?!\d))/g, ' '));   /* 865 000: narrow no-break space keeps the number in one piece in Arabic text */
  /* the book's place-value table: ones on the right, «الألوف» under the left three; pic: { n, fill: digits shown, ask: place 0-5 with «؟» } */
  function g3Place(q) {
    const p = (q && q.pic) || { n: 865000, fill: true }, cw = 52, x0 = (W - 6 * cw) / 2 - 3, y0 = 14, hh = 34, dh = 44;
    const NAMES = AR() ? ['الآحاد', 'العشرات', 'المئات', 'الألوف', 'عشرات الألوف', 'مئات الألوف'] : ['Ones', 'Tens', 'Hundreds', 'Thousands', 'Ten Thousands', 'Hundred Thousands'], ds = String(p.n || '').split('').reverse();
    const X = k => x0 + (5 - k) * cw + (k >= 3 ? 0 : 6);
    let s = '';
    for (let k = 0; k < 6; k++) {
      const x = X(k), a = p.ask === k;
      s += `<rect x="${f1(x)}" y="${y0}" width="${cw}" height="${hh}" fill="${a ? '#ffe7a3' : k >= 3 ? '#e3f2fb' : '#fde8d6'}" stroke="${INK}" stroke-width="1.4"/>`;
      const nm = NAMES[k].split(' ');
      s += nm.length > 1 ? txt(x + cw / 2, y0 + 14, nm[0], { fs: 10, w: 700 }) + txt(x + cw / 2, y0 + 28, nm[1], { fs: 10, w: 700 }) : txt(x + cw / 2, y0 + 22, nm[0], { fs: 11, w: 700 });
      s += `<rect x="${f1(x)}" y="${y0 + hh}" width="${cw}" height="${dh}" fill="${a ? '#fff4d6' : '#fff'}" stroke="${a ? '#d99a12' : INK}" stroke-width="${a ? 2.4 : 1.4}"/>`;
      if (a) s += txt(x + cw / 2, y0 + hh + 30, QM(), { fs: 22, fill: '#d99a12' });
      else if (p.fill && ds[k] != null) s += txt(x + cw / 2, y0 + hh + 31, dg(ds[k]), { fs: 24, fill: k >= 3 ? '#23799f' : '#e2603f' });
    }
    s += `<rect x="${f1(X(5))}" y="${y0 + hh + dh}" width="${3 * cw}" height="24" fill="#e3f2fb" stroke="${INK}" stroke-width="1.4"/>` + txt(X(4) + cw / 2, y0 + hh + dh + 17, T('Thousands', 'الألوف'), { fs: 12 });
    return svg(y0 + hh + dh + 34, T('A place-value table', 'جدول القيمة المكانية'), s);
  }
  /* cards of 100 000 / 10 000 / 1000 …: pic: { parts: [[value, count], …] } — the biggest card first on the left, like the digits */
  function g3Bundles(q) {
    const p = (q && q.pic) || { parts: [[100000, 4], [10000, 7], [1000, 2]] }, np = p.parts.length, sw = 300 / np, x0 = 20;
    const CC = { 100000: ['#9b6bd3', '#efe6fb'], 10000: ['#23799f', '#e3f2fb'], 1000: ['#2e9e6b', '#e6f4e6'], 100: ['#e2603f', '#fde8d6'], 10: ['#d99a12', '#fff4d6'], 1: ['#5c6f82', '#eef1f4'] };
    let s = '';
    p.parts.forEach(([v, c], k) => {
      const cx = x0 + sw * (k + .5), [st, bg] = CC[v] || CC[1], w = Math.min(84, sw - 14), h = 34;
      for (let i = 0; i < c; i++) { const x = cx - w / 2 - 12 + i * (24 / Math.max(1, c - 1)), y = 22 + i * (60 / Math.max(1, c - 1));
        s += `<rect x="${f1(x)}" y="${f1(y)}" width="${f1(w)}" height="${h}" rx="6" fill="${bg}" stroke="${st}" stroke-width="2.2"/>` + txt(x + w / 2, y + 23, big(v), { fs: v >= 100000 ? 13 : 14, fill: st }); }
      s += `<rect x="${f1(cx - 30)}" y="132" width="60" height="28" rx="14" fill="${st}"/>` + txt(cx, 152, `× ${dg(c)}`, { fs: 17, fill: '#fff' });
    });
    return svg(172, T('Number cards', 'بطاقات أعداد'), s);
  }
  /* number line, smaller numbers on the left; pic: { from, to, major, minor: ticks between labels (10), marks: [[v, 'أ'], …], hide: [values without a label] } */
  function g3NumLine(q) {
    const p = (q && q.pic) || { from: 80000, to: 120000, major: 10000, marks: [[84000, 'أ'], [115000, 'ب']] }, minor = p.minor || 10, x0 = 26, L = 288, X = v => x0 + (v - p.from) / (p.to - p.from) * L, y = 84, step = p.major / minor;
    let s = `<path d="M${x0 - 10} ${y}H${x0 + L + 10}" stroke="${INK}" stroke-width="2.6"/>`;
    for (let v = p.from, i = 0; v <= p.to + 1e-6; v += step, i++) {
      const M = i % minor === 0, half = minor % 2 === 0 && i % minor === minor / 2;
      s += `<path d="M${f1(X(v))} ${y}V${y + (M ? 16 : half ? 11 : 7)}" stroke="${INK}" stroke-width="${M ? 2.4 : 1.4}"/>`;
      if (M && !(p.hide || []).includes(v)) s += txt(X(v), y - 14, big(v), { fs: 12.5 });
    }
    (p.marks || []).forEach(([v, lab]) => {
      const x = X(v);
      s += `<path d="M${f1(x)} ${y + 50}V${y + 20}" stroke="#e2603f" stroke-width="2.6"/><path d="M${f1(x - 6)} ${y + 28}L${f1(x)} ${y + 18}L${f1(x + 6)} ${y + 28}" fill="#e2603f"/>`
        + `<circle cx="${f1(x)}" cy="${y + 64}" r="13" fill="#fff" stroke="#e2603f" stroke-width="2.2"/>` + txt(x, y + 70, lab, { fs: 15, fill: '#e2603f' });
    });
    return svg(170, T('A number line', 'خط الأعداد'), s);
  }

  window.G3ART = { dg, big };
  window.CH_DIAGRAMS = Object.assign(window.CH_DIAGRAMS || {}, { g3Groups, g3Split, g3Branch, g3Boxes, g3Target, g3Score, g3Clock, g3TimeLine, g3Stopwatch, g3Share, g3Tape, g3Column, g3Measure, g3Map, g3Tally, g3Scale, g3Bars, g3Table, g3Photo, g3Story, g3Jumps, g3Rem, g3Place, g3Bundles, g3NumLine });
})();
