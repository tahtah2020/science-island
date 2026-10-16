/* Math · Grade 4 pictures, drawn in code (CH_DIAGRAMS). Used by q.fig (a picture above a question) or q.diagram + q.pic (tap).
     placeTable  (tap)  ids b1 · m100 m10 m1 · t100 t10 t1 · u100 u10 u1     q.pic = { num: '345532' }  (digits are put in the columns from the right)
   The table is drawn like the school book's: milliards, millions, thousands, ones, each group with its own colour, ones on the right.
   The numbers stay left to right, also for an Arabic player. Screen-reader names describe the table, never the answer. */
(function () {
  'use strict';
  const T = (en, ar) => (window.SI ? window.SI.T(en, ar) : en);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const INK = '#1f3d57', PAPER = '#fffaf0';
  /* groups from the right: units, thousands, millions, billions */
  const GROUPS = [
    { key: 'u', ar: 'الوحدات', en: 'Ones', head: '#7fb0dc', cell: '#bcd9f2', n: 3 },
    { key: 't', ar: 'الألوف', en: 'Thousands', head: '#f5c93f', cell: '#fbe38c', n: 3 },
    { key: 'm', ar: 'الملايين', en: 'Millions', head: '#8fa383', cell: '#c3cfba', n: 3 },
    { key: 'b', ar: 'المليارات', en: 'Milliards', head: '#eba98a', cell: '#f5d3c2', n: 1 }
  ];
  const PLACE = [{ k: 1, ar: 'آحاد', en: 'ones', s: 'O' }, { k: 10, ar: 'عشرات', en: 'tens', s: 'T' }, { k: 100, ar: 'مئات', en: 'hundreds', s: 'H' }];
  const hot = (id, name, inner) => `<g class="hot" data-id="${id}" role="button" tabindex="0" aria-label="${esc(name)}">${inner}</g>`;

  /* column layout (x of the left edge and width inside the 340-wide picture); the billions column is wider so its name fits */
  const WB = 44, CW = 30, ORDER = ['b1', 'm100', 'm10', 'm1', 't100', 't10', 't1', 'u100', 'u10', 'u1'];
  function placeCols() {
    const total = WB + 9 * CW, left = (340 - total) / 2, out = {};
    ORDER.forEach((id, k) => { out[id] = k === 0 ? { x: left, w: WB } : { x: left + WB + (k - 1) * CW, w: CW }; });
    return out;
  }
  /* q.pic.plain: the table only (no tap rings, no svg wrapper) so a game can draw it inside its own scene */
  function placeTable(q) {
    const p = (q && q.pic) || { num: '345532' }, digits = String(p.num).replace(/[^0-9]/g, '').split('').reverse();
    const hh = 24, sh = 22, ch = 40, y0 = 14, C = placeCols(), plain = !!p.plain;
    let s = plain ? '' : `<svg class="diagram" viewBox="0 0 340 112" role="img" aria-label="${esc(T('A place value table with milliards, millions, thousands and ones', 'جدول للقيمة المكانية فيه المليارات والملايين والألوف والوحدات'))}"><rect width="340" height="112" rx="14" fill="${PAPER}"/>`;
    for (let g = 3; g >= 0; g--) {
      const G = GROUPS[g], first = ORDER[g === 3 ? 0 : 1 + (2 - g) * 3], last = ORDER[g === 3 ? 0 : 3 + (2 - g) * 3];
      const x = C[first].x, w = C[last].x + C[last].w - x;
      s += `<rect x="${x}" y="${y0}" width="${w}" height="${hh}" rx="6" fill="${G.head}"/><text x="${x + w / 2}" y="${y0 + 16}" text-anchor="middle" font-size="${G.n === 1 ? 10 : 12}" font-weight="900" fill="${INK}">${esc(T(G.en, G.ar))}</text>`;
    }
    ORDER.forEach((id, k) => {
      const gi = id[0] === 'b' ? 3 : id[0] === 'm' ? 2 : id[0] === 't' ? 1 : 0, ii = id[0] === 'b' ? 0 : id[1] === '1' && id.length === 2 ? 0 : id.length === 3 && id[1] === '1' ? 1 : 2;
      const place = id === 'b1' ? PLACE[0] : id.endsWith('100') ? PLACE[2] : id.endsWith('10') ? PLACE[1] : PLACE[0];
      const G = GROUPS[gi], cx = C[id].x, cw = C[id].w, idx = id === 'b1' ? 9 : gi * 3 + (id.endsWith('100') ? 2 : id.endsWith('10') ? 1 : 0), d = digits[idx];
      const inner = `<rect x="${cx + 1}" y="${y0 + hh + 2}" width="${cw - 2}" height="${sh}" rx="4" fill="${G.head}" opacity=".55"/>`
        + `<text x="${cx + cw / 2}" y="${y0 + hh + 17}" text-anchor="middle" font-size="8.5" font-weight="800" fill="${INK}">${esc(T(place.s, place.ar))}</text>`
        + (plain ? '' : `<rect class="ring" x="${cx}" y="${y0 + hh}" width="${cw}" height="${sh + ch + 4}" rx="6"/>`)
        + `<rect x="${cx + 1}" y="${y0 + hh + sh + 4}" width="${cw - 2}" height="${ch}" rx="4" fill="${G.cell}"/>`
        + (d != null ? `<text x="${cx + cw / 2}" y="${y0 + hh + sh + 4 + 28}" text-anchor="middle" direction="ltr" unicode-bidi="embed" font-size="22" font-weight="900" fill="${INK}">${d}</text>` : '');
      s += plain ? inner : hot(id, T(G.en + ' ' + place.en, place.ar + ' ' + G.ar), inner);
    });
    return plain ? s : s + '</svg>';
  }
  placeTable.cols = placeCols;

  window.CH_DIAGRAMS = Object.assign(window.CH_DIAGRAMS || {}, { placeTable });
  window.G4MATH = { placeCols };
})();
