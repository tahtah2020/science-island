/* Math · Grade 4 pictures, drawn in code (CH_DIAGRAMS). Used by q.fig (a picture above a question) or q.diagram + q.pic (tap).
     placeTable  (tap)  ids b1 · m100 m10 m1 · t100 t10 t1 · u100 u10 u1     q.pic = { num: '345532' }  (digits are put in the columns from the right)
   The table is drawn like the school book's: milliards, millions, thousands, ones, each group with its own colour, ones on the right.
     rectFig    (fig)  a rectangle with its side labels   q.pic = { w, h, top, right, bottom, left, mid }   (w, h only set the shape; empty label = no label)
     polyFig    (fig)  a shape made of rectangles          q.pic = { pts: [[x, y]…] (y grows down, clockwise), labs: [label of edge i→i+1, …] }
   Unit 5 and 6 (owner's Gemini pictures of vehicles, math/assets/veh_<name>.webp, and the bus stop background bg_busstop.jpg, 2 Nov 2026):
     vehFig     (fig)  1-6 vehicles in a row or two, each with an optional label   q.pic = { items: [['car', '4 seats'], ['bus', '?'], …] }
                       names: walk sailboat bicycle motorbike car truck bus metro fasttrain cruise plane ferry
     tapeFig    (fig)  a tape diagram for a multiplicative comparison   q.pic = { n: 5, box: '2', one: '2', total: '10', top: 'Tape A', bottom: 'Tape B' } (empty = not written)
     arrayFig   (fig)  an array of dots, r rows and c columns            q.pic = { r: 4, c: 6 } or { cards: [2, 5] } (dot cards: rows × columns of cards with 5 dots each, like a die)
     skipLine   (fig)  a number line 0..max with jumps of each step       q.pic = { max: 30, steps: [3, 5], upto: 12, bus: true, stop: 18 } (upto: jumps stop there; bus: the bus stop picture above the line)
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


  /* a label for a side: number and unit kept together left to right */
  const lab = (x, y, t, anchor = 'middle') => t ? `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}" text-anchor="${anchor}" direction="ltr" unicode-bidi="embed" font-size="15" font-weight="900" fill="${INK}">${esc(t)}</text>` : '';
  function rectFig(q) {
    const p = (q && q.pic) || { w: 4, h: 3 };
    const k = Math.min(220 / p.w, 110 / p.h, 26), W = Math.max(p.w * k, 34), H = Math.max(p.h * k, 26);
    const x = (340 - W) / 2, y = 26 + (130 - H) / 2;
    let s = `<svg class="diagram" viewBox="0 0 340 190" role="img" aria-label="${esc(T('A rectangle with the lengths of its sides', 'مستطيل مكتوب عليه أطوال أضلاعه'))}"><rect width="340" height="190" rx="14" fill="${PAPER}"/>`;
    s += `<rect x="${x}" y="${y}" width="${W}" height="${H}" fill="#9fb4d6" stroke="${INK}" stroke-width="3"/>`;
    s += lab(170, y - 8, p.top) + lab(170, y + H + 20, p.bottom) + lab(x - 8, y + H / 2 + 5, p.left, 'end') + lab(x + W + 8, y + H / 2 + 5, p.right, 'start');
    if (p.mid) s += `<text x="170" y="${y + H / 2 + 5}" text-anchor="middle" font-size="13" font-weight="900" fill="${INK}">${esc(p.mid)}</text>`;
    return s + '</svg>';
  }
  function polyFig(q) {
    const p = (q && q.pic) || { pts: [[0, 0], [2, 0], [2, 1], [0, 1]], labs: [] };
    const xs = p.pts.map(a => a[0]), ys = p.pts.map(a => a[1]);
    const w = Math.max(...xs) - Math.min(...xs), h = Math.max(...ys) - Math.min(...ys);
    const k = Math.min(200 / w, 150 / h), ox = (340 - w * k) / 2 - Math.min(...xs) * k, oy = 24 + (160 - h * k) / 2 - Math.min(...ys) * k;
    const P = p.pts.map(a => [ox + a[0] * k, oy + a[1] * k]);
    let s = `<svg class="diagram" viewBox="0 0 340 210" role="img" aria-label="${esc(T('A shape made of rectangles with the lengths of some sides', 'شكل مكوّن من مستطيلات مكتوب عليه أطوال بعض أضلاعه'))}"><rect width="340" height="210" rx="14" fill="${PAPER}"/>`;
    s += `<path d="M${P.map(a => a[0].toFixed(1) + ' ' + a[1].toFixed(1)).join('L')}Z" fill="#9fb4d6" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>`;
    P.forEach((a, i) => {
      const b = P[(i + 1) % P.length], t = (p.labs || [])[i];
      if (!t) return;
      const mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2, dx = b[0] - a[0], dy = b[1] - a[1], len = Math.hypot(dx, dy) || 1;
      const nx = dy / len, ny = -dx / len;                       // outward normal for a clockwise outline (y down)
      if (Math.abs(nx) > Math.abs(ny)) s += lab(mx + nx * 8, my + 5, t, nx > 0 ? 'start' : 'end');
      else s += lab(mx, my + (ny > 0 ? 20 : -8), t);
    });
    return s + '</svg>';
  }

  /* ---------- Units 5-6: vehicles (owner's pictures), tape diagrams, arrays, skip-counting lines ---------- */
  const VEH = { walk: 'a child walking', sailboat: 'a sailboat', bicycle: 'a bicycle', motorbike: 'a motorbike', car: 'a car', truck: 'a truck', bus: 'a bus',
    metro: 'a metro train', fasttrain: 'a high-speed train', cruise: 'a cruise ship', plane: 'a passenger airplane', ferry: 'a ferry' };
  const VEHAR = { walk: 'طفل يمشي', sailboat: 'مركب شراعي', bicycle: 'دراجة', motorbike: 'دراجة نارية', car: 'سيارة', truck: 'شاحنة', bus: 'حافلة',
    metro: 'قطار مترو', fasttrain: 'قطار سريع', cruise: 'سفينة سياحية', plane: 'طائرة ركاب', ferry: 'عبّارة' };
  const vimg = (name, x, y, w, h) => `<image href="math/assets/veh_${name}.webp" x="${x}" y="${y}" width="${w}" height="${h}" preserveAspectRatio="xMidYMax meet"/>`;
  function vehFig(q) {
    const p = (q && q.pic) || { items: [['car', ''], ['walk', '']] }, it = p.items, n = it.length, rows = n > 3 ? 2 : 1, per = Math.ceil(n / rows);
    const cw = 320 / per, ch = 92, H = 16 + rows * (ch + 26);
    let s = `<svg class="diagram" viewBox="0 0 340 ${H}" role="img" aria-label="${esc(T('Pictures of ' + it.map(a => VEH[a[0]]).join(', '), 'صور: ' + it.map(a => VEHAR[a[0]]).join('، ')))}"><rect width="340" height="${H}" rx="14" fill="${PAPER}"/>`;
    it.forEach((a, i) => {
      const r = Math.floor(i / per), k0 = i % per, inRow = r === rows - 1 ? n - per * (rows - 1) : per, k = T('l', 'r') === 'r' ? inRow - 1 - k0 : k0, x0 = 10 + (320 - inRow * cw) / 2 + k * cw, y0 = 10 + r * (ch + 26);
      s += vimg(a[0], x0 + 6, y0, cw - 12, ch - 4);
      if (a[1]) s += `<text x="${(x0 + cw / 2).toFixed(1)}" y="${y0 + ch + 16}" text-anchor="middle" font-size="14" font-weight="900" fill="${INK}">${esc(a[1])}</text>`;
    });
    return s + '</svg>';
  }
  function tapeFig(q) {
    const p = (q && q.pic) || { n: 5, box: '2', one: '2' }, n = p.n, bw = Math.min(46, 250 / n), x0 = (340 - bw * n) / 2 + (p.top || p.bottom ? 26 : 0);
    let s = `<svg class="diagram" viewBox="0 0 340 150" role="img" aria-label="${esc(T('A tape diagram: a long tape made of equal parts and a short tape of one part', 'نموذج شريطي: شريط طويل من أجزاء متساوية وشريط قصير من جزء واحد'))}"><rect width="340" height="150" rx="14" fill="${PAPER}"/>`;
    const name = (y, t) => t ? `<text x="${x0 - 8}" y="${y}" text-anchor="end" font-size="12" font-weight="900" fill="${INK}">${esc(t)}</text>` : '';
    for (let i = 0; i < n; i++) s += `<rect x="${(x0 + i * bw).toFixed(1)}" y="28" width="${bw.toFixed(1)}" height="34" fill="#9fd3bf" stroke="${INK}" stroke-width="2.5"/>` + (p.box ? `<text x="${(x0 + i * bw + bw / 2).toFixed(1)}" y="51" text-anchor="middle" direction="ltr" font-size="${bw < 30 ? 12 : 15}" font-weight="900" fill="${INK}">${esc(p.box)}</text>` : '');
    s += name(50, p.top) + `<rect x="${x0}" y="84" width="${bw.toFixed(1)}" height="34" fill="#f5c9a0" stroke="${INK}" stroke-width="2.5"/>` + (p.one ? `<text x="${(x0 + bw / 2).toFixed(1)}" y="107" text-anchor="middle" direction="ltr" font-size="15" font-weight="900" fill="${INK}">${esc(p.one)}</text>` : '') + name(106, p.bottom);
    if (p.total) s += `<path d="M${x0} 20 v-6 h${(bw * n).toFixed(1)} v6" fill="none" stroke="${INK}" stroke-width="2"/><text x="${(x0 + bw * n / 2).toFixed(1)}" y="11" text-anchor="middle" direction="ltr" font-size="13" font-weight="900" fill="${INK}">${esc(p.total)}</text>`;
    return s + '</svg>';
  }
  function arrayFig(q) {
    const cp = q && q.pic && q.pic.cards;
    if (cp) {   /* dot cards: each card shows 5 dots like the face of a die */
      const [R, C] = cp, cw = Math.min(56, 300 / C), x0 = (340 - cw * C) / 2, y0 = (190 - cw * R) / 2, D = [[.25, .25], [.75, .25], [.5, .5], [.25, .75], [.75, .75]];
      let s = `<svg class="diagram" viewBox="0 0 340 190" role="img" aria-label="${esc(T('Dot cards with 5 dots on each card', 'بطاقات نقاط على كل بطاقة 5 نقاط'))}"><rect width="340" height="190" rx="14" fill="${PAPER}"/>`;
      for (let r = 0; r < R; r++) for (let c = 0; c < C; c++) {
        const x = x0 + c * cw, y = y0 + r * cw;
        s += `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${cw.toFixed(1)}" height="${cw.toFixed(1)}" fill="#fff" stroke="${INK}" stroke-width="2"/>` + D.map(d => `<circle cx="${(x + d[0] * cw).toFixed(1)}" cy="${(y + d[1] * cw).toFixed(1)}" r="${(cw * 0.09).toFixed(1)}" fill="${INK}"/>`).join('');
      }
      return s + '</svg>';
    }
    const p = (q && q.pic) || { r: 4, c: 6 }, gap = p.groups ? 10 : 0, d = Math.min(26, 250 / (p.c + (p.groups ? p.c / p.groups : 0)), 140 / p.r);
    const W = p.c * d + (p.groups ? Math.floor((p.c - 1) / p.groups) * gap : 0), H = p.r * d, x0 = (340 - W) / 2, y0 = 16 + (150 - H) / 2;
    let s = `<svg class="diagram" viewBox="0 0 340 190" role="img" aria-label="${esc(T('An array of dots in equal rows and columns', 'مصفوفة من النقاط في صفوف وأعمدة متساوية'))}"><rect width="340" height="190" rx="14" fill="${PAPER}"/>`;
    for (let r = 0; r < p.r; r++) for (let c = 0; c < p.c; c++) {
      const x = x0 + c * d + (p.groups ? Math.floor(c / p.groups) * gap : 0) + d / 2, y = y0 + r * d + d / 2;
      s += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${(d * 0.33).toFixed(1)}" fill="${['#e2603f', '#23799f', '#2e9e6b', '#f2b134'][r % 4]}"/>`;
    }
    return s + '</svg>';
  }
  const STEPC = ['#e2603f', '#23799f', '#2e9e6b'];
  function skipLine(q) {
    const p = (q && q.pic) || { max: 30, steps: [3] }, max = p.max, top = p.bus ? 96 : 30, H = top + 66, k = 316 / max, X = v => 12 + v * k, ly = top + 34;
    let s = `<svg class="diagram" viewBox="0 0 340 ${H}" role="img" aria-label="${esc(T('A number line from 0 to ' + max + ' with equal jumps', 'خط أعداد من 0 إلى ' + max + ' عليه قفزات متساوية'))}"><rect width="340" height="${H}" rx="14" fill="${PAPER}"/>`;
    if (p.bus) s += `<image href="math/assets/bg_busstop.jpg" x="0" y="0" width="340" height="${top + 10}" preserveAspectRatio="xMidYMid slice" style="clip-path:inset(0 round 14px 14px 0 0)"/>` + vimg('bus', 8, top - 52, 96, 50);
    s += `<line x1="8" y1="${ly}" x2="334" y2="${ly}" stroke="${INK}" stroke-width="2.5"/>`;
    for (let v = 0; v <= max; v++) {
      const big = v % 5 === 0;
      s += `<line x1="${X(v).toFixed(1)}" y1="${ly - (big ? 7 : 4)}" x2="${X(v).toFixed(1)}" y2="${ly + (big ? 7 : 4)}" stroke="${INK}" stroke-width="${big ? 2 : 1.2}"/>`;
      if (big || max <= 20) s += `<text x="${X(v).toFixed(1)}" y="${ly + 22}" text-anchor="middle" direction="ltr" font-size="${big ? 12 : 10}" font-weight="800" fill="${INK}">${v}</text>`;
    }
    (p.steps || []).forEach((st, j) => {
      for (let v = 0; v + st <= (p.upto || max); v += st) {
        const a = X(v), b = X(v + st), h = 10 + j * 7 + Math.min(14, st * k / 4);
        s += `<path d="M${a.toFixed(1)} ${ly - 3} Q${((a + b) / 2).toFixed(1)} ${(ly - 3 - h * 2).toFixed(1)} ${b.toFixed(1)} ${ly - 3}" fill="none" stroke="${STEPC[j % 3]}" stroke-width="2.4"/>`;
      }
    });
    if (p.stop != null) { const hx = X(p.stop); s += `<path d="M${(hx - 9).toFixed(1)} ${ly - 4} v-12 l9 -9 l9 9 v12 z" fill="#e2603f" stroke="${INK}" stroke-width="1.5"/><rect x="${(hx - 3).toFixed(1)}" y="${ly - 11}" width="6" height="7" fill="#fff"/>`; }
    return s + '</svg>';
  }

  window.CH_DIAGRAMS = Object.assign(window.CH_DIAGRAMS || {}, { placeTable, rectFig, polyFig, vehFig, tapeFig, arrayFig, skipLine });
  window.G4MATH = { placeCols };
})();
