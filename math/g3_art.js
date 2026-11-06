/* Math · Grade 3 pictures, drawn in code (CH_DIAGRAMS). Used by q.fig (a picture above a question). Numbers are written in Arabic-Indic digits (٠١٢…)
   like the Arabic school book; an English reader sees 0-9.
     g3Groups  (fig)  equal groups in rows (a × b = b rows of a): q.pic = { per: 7, n: 2, add: 1 }   add: 1 = one more row (green, dashed), -1 = the last row taken away (faded, crossed)
     g3Split   (fig)  a dot array cut into two parts (distributive rule): q.pic = { per: 3, n: 9, cut: 4, labels: true }   rows = n, dots per row = per, line after `cut` rows
     g3Boxes   (fig)  containers holding the same number of things: q.pic = { n: 4, per: 10, kind: 'pencil' | 'candy' | 'apple' | 'seat' | 'ball', empty: 2 }   empty = extra empty boxes
     g3Target  (fig)  a throwing target with rings of points and the throws on it: q.pic = { zones: [3, 2, 1, 0], hits: [0, 1, 3, 6] }
     g3Score   (fig)  the book's score table: q.pic = { pts: [3, 2, 1, 0], hits: [0, 1, 3, 6], tot: ['', '', '', ''], sum: '' }  (rows: النقاط، عدد الرميات، إجمالي عدد النقاط)
   Screen-reader names describe the drawing, never the answer. */
(function () {
  'use strict';
  const AR = () => (window.SI ? window.SI.isAr() : true);
  const T = (en, ar) => (window.SI ? window.SI.T(en, ar) : ar);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const dg = t => AR() ? String(t).replace(/[0-9]/g, d => '٠١٢٣٤٥٦٧٨٩'[d]) : String(t);
  const INK = '#1f3d57', PAPER = '#fffaf0', W = 340;
  const COL = ['#e2603f', '#23799f', '#2e9e6b', '#f2b134', '#9b6bd3', '#e58bb0', '#4ea5d9', '#c98b4a', '#79c69a', '#f08a4b'];
  const f1 = n => Math.round(n * 10) / 10;
  const txt = (x, y, s, o = {}) => `<text x="${f1(x)}" y="${f1(y)}" text-anchor="middle" font-family="Cairo, Nunito, sans-serif" font-weight="${o.w || 800}" font-size="${o.fs || 16}" fill="${o.fill || INK}">${esc(s)}</text>`;
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
      cells.forEach((c, k) => { s += `<rect x="${f1(colX(k))}" y="${y}" width="${f1(cw)}" height="${rh}" fill="${bg}" stroke="${INK}" stroke-width="1.6"/>` + (c === '?' || c === '؟' ? txt(colX(k) + cw / 2, y + 23, '؟', { fs: 17, fill: '#e2603f' }) : txt(colX(k) + cw / 2, y + 22, c, { fs: 15 })); });
      s += `<rect x="${f1(colX(n))}" y="${y}" width="${lw}" height="${rh}" fill="${r === 0 ? '#fde3cf' : '#f6f1e4'}" stroke="${INK}" stroke-width="1.6"/>` + txt(colX(n) + lw / 2, y + 22, last === '?' ? '؟' : last, { fs: r === 0 ? 12 : 15, fill: last === '?' ? '#e2603f' : INK });
    });
    return svg(H, T('A score table: points, throws and total points', 'جدول النقاط: النقاط وعدد الرميات وإجمالي عدد النقاط'), s);
  }

  window.G3ART = { dg };
  window.CH_DIAGRAMS = Object.assign(window.CH_DIAGRAMS || {}, { g3Groups, g3Split, g3Boxes, g3Target, g3Score });
})();
