/* Science Island · Prep 1 · drawings made in code (SVG).
   Shared by the unit games (atomlab.html …), the tap pictures of the question pages (quiz.html) and the maps (tools/make_p1_maps.js).
   Nothing here is copied from the school book: every object is drawn with simple shapes.
   Every drawing is a function that returns SVG markup around its own origin (see the note above each one).
   window.P1ART = the drawings; window.CH_DIAGRAMS gets the tap pictures:
     Unit 1: atomParts (nucleus | electron | proton | neutron) · energyLevels (K | L | M | N) · ptBlocks (s | p | d | f)
             ptGroups (g1 … g7 | g0) · particleBoxes (element | compound | mixture) · mixBeakers (hetero | homo)
             bondTypes (ionic | single | double | triple) · carbonShapes (straight | branched | cyclic) */
(function () {
  'use strict';
  const T = (en, ar) => (window.SI ? window.SI.T(en, ar) : en);
  const f1 = n => (Math.round(n * 10) / 10).toString();
  const at = (x, y, k, inner, rot) => `<g transform="translate(${f1(x)} ${f1(y)})${rot ? ` rotate(${rot})` : ''}${k != null && k !== 1 ? ` scale(${k})` : ''}">${inner}</g>`;
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  /* text that must stay left to right inside an Arabic picture (symbols, numbers with signs) */
  const ltrText = (x, y, s, o = {}) => `<text x="${f1(x)}" y="${f1(y)}" text-anchor="${o.anchor || 'middle'}" direction="ltr" unicode-bidi="embed" font-size="${o.fs || 14}" font-weight="${o.fw || 900}" fill="${o.fill || '#1f3d57'}"${o.family ? ` font-family="${o.family}"` : ''}>${esc(s)}</text>`;
  const label = (x, y, s, o = {}) => `<text x="${f1(x)}" y="${f1(y)}" text-anchor="${o.anchor || 'middle'}" font-size="${o.fs || 13}" font-weight="${o.fw || 800}" fill="${o.fill || '#1f3d57'}">${esc(s)}</text>`;

  const COL = {
    proton: '#ef6b57', protonD: '#c4483a', neutron: '#b4c0cc', neutronD: '#7f8d9b', electron: '#3f93db', electronD: '#22679f',
    orbit: '#8fbfe0', ink: '#1f3d57', glass: 'rgba(196,232,248,.35)', glassLine: '#6aa9cc'
  };

  /* ================= the atom ================= */
  /* one ball of the nucleus. kind: 'p' (proton, marked +) or 'n' (neutron). Origin: its centre */
  function ball(kind, r = 7, mark) {
    const fill = kind === 'p' ? COL.proton : COL.neutron, line = kind === 'p' ? COL.protonD : COL.neutronD;
    return `<circle r="${r}" fill="${fill}" stroke="${line}" stroke-width="${f1(r * .18)}"/><circle cx="${f1(-r * .32)}" cy="${f1(-r * .34)}" r="${f1(r * .3)}" fill="#fff" opacity=".45"/>
      ${mark && kind === 'p' ? `<path d="M${f1(-r * .45)} 0h${f1(r * .9)}M0 ${f1(-r * .45)}v${f1(r * .9)}" stroke="#fff" stroke-width="${f1(r * .22)}" stroke-linecap="round"/>` : ''}`;
  }
  /* a nucleus of p protons and n neutrons packed in a round cluster. Origin: its centre. b = radius of one ball.
     More than 30 particles are drawn as 30 (a big nucleus still looks big). */
  function nucleus(p, n, b = 7) {
    const total = Math.min(30, p + n), pp = Math.round(total * p / Math.max(1, p + n));
    const pts = [];
    for (let i = 0; i < total; i++) { const a = i * 2.39996, rr = b * 1.05 * Math.sqrt(i + .4); pts.push({ x: Math.cos(a) * rr, y: Math.sin(a) * rr }); }
    /* protons and neutrons spread evenly through the cluster */
    const kinds = pts.map((_, i) => (Math.floor((i + 1) * pp / total) > Math.floor(i * pp / total) ? 'p' : 'n'));
    return pts.map((q, i) => ({ q, k: kinds[i] })).sort((a, c) => a.q.y - c.q.y).map(({ q, k }) => at(q.x, q.y, 1, ball(k, b))).join('');
  }
  const nucleusR = (p, n, b = 7) => b * 1.05 * Math.sqrt(Math.min(30, p + n) + .4) + b;
  /* one electron. Origin: its centre */
  const electron = (r = 5.5) => `<circle r="${r}" fill="${COL.electron}" stroke="${COL.electronD}" stroke-width="1.2"/><circle cx="${f1(-r * .3)}" cy="${f1(-r * .3)}" r="${f1(r * .32)}" fill="#fff" opacity=".6"/>`;
  /* an atom: nucleus and its energy levels with the electrons. Origin: the centre.
     levels: electrons in each level, e.g. [2, 8, 1]. o.p / o.n: protons and neutrons (default p = all electrons, n = p).
     o.r0: radius of the first level, o.dr: space between levels, o.b: ball size, o.er: electron size, o.spin: turn the electrons (degrees),
     o.hi: index of a level drawn thicker, o.ghost: [level, slot] of an electron drawn faint (it is leaving) */
  function atom(levels, o = {}) {
    const p = o.p != null ? o.p : levels.reduce((a, c) => a + c, 0), n = o.n != null ? o.n : p;
    const b = o.b || 6, nr = nucleusR(p, n, b), r0 = Math.max(o.r0 || 30, nr + 10), dr = o.dr || 20, er = o.er || 5;
    let s = '';
    levels.forEach((_, i) => { s += `<circle r="${f1(r0 + i * dr)}" fill="none" stroke="${COL.orbit}" stroke-width="${o.hi === i ? 3.6 : 2}"${o.hi === i ? '' : ' stroke-dasharray="1 0"'}/>`; });
    s += nucleus(p, n, b);
    levels.forEach((cnt, i) => {
      const R = r0 + i * dr, off = ((o.spin || 0) + i * 23) * Math.PI / 180;
      for (let k = 0; k < cnt; k++) {
        const a = off + k * 2 * Math.PI / cnt - Math.PI / 2;
        const faint = o.ghost && o.ghost[0] === i && o.ghost[1] === k;
        s += `<g opacity="${faint ? .25 : 1}">${at(Math.cos(a) * R, Math.sin(a) * R, 1, electron(er))}</g>`;
      }
    });
    return s;
  }
  /* where electron k of level i of the same atom() is drawn (for rings and animations) */
  function electronAt(levels, i, k, o = {}) {
    const p = o.p != null ? o.p : levels.reduce((a, c) => a + c, 0), n = o.n != null ? o.n : p;
    const nr = nucleusR(p, n, o.b || 6), r0 = Math.max(o.r0 || 30, nr + 10), dr = o.dr || 20;
    const R = r0 + i * dr, off = ((o.spin || 0) + i * 23) * Math.PI / 180, a = off + k * 2 * Math.PI / levels[i] - Math.PI / 2;
    return { x: Math.cos(a) * R, y: Math.sin(a) * R, R };
  }

  /* ================= substances ================= */
  /* a molecule of two balls. Origin: its middle. a, b = colours; rot = degrees */
  const diatomic = (ca, cb, r = 8, rot = 0) => `<g transform="rotate(${rot})"><circle cx="${-r * .8}" cy="0" r="${r}" fill="${ca}" stroke="#1f3d57" stroke-opacity=".35" stroke-width="1.4"/><circle cx="${r * .8}" cy="0" r="${r}" fill="${cb}" stroke="#1f3d57" stroke-opacity=".35" stroke-width="1.4"/><circle cx="${f1(-r * 1.05)}" cy="${f1(-r * .3)}" r="${f1(r * .3)}" fill="#fff" opacity=".45"/></g>`;
  /* a beaker with a liquid. Origin: the middle of its bottom. o.w, o.h; o.level (0…1); o.fill: liquid colour; o.sand: grains at the bottom */
  function beaker(o = {}) {
    const w = o.w || 70, h = o.h || 86, lv = o.level == null ? .62 : o.level, top = -h, lh = h * lv;
    let grains = '';
    if (o.sand) for (let i = 0; i < 26; i++) { const gx = -w / 2 + 6 + ((i * 37) % (w - 12)), gy = -4 - ((i * 13) % 9); grains += `<circle cx="${gx}" cy="${gy}" r="${2 + (i % 3) * .6}" fill="${i % 2 ? '#e2b964' : '#c99a43'}"/>`; }
    return `<path d="M${-w / 2} ${top}v${h - 6}q0 6 6 6h${w - 12}q6 0 6 -6v${-(h - 6)}" fill="${COL.glass}" stroke="${COL.glassLine}" stroke-width="2.6" stroke-linejoin="round"/>
      ${lh > 2 ? `<path d="M${-w / 2 + 2} ${-lh}h${w - 4}v${lh - 8}q0 6 -6 6h${-(w - 16)}q-6 0 -6 -6z" fill="${o.fill || '#9fd3f0'}" opacity=".75"/>` : ''}${grains}
      <path d="M${-w / 2 - 4} ${top}h${w + 8}" stroke="${COL.glassLine}" stroke-width="3" stroke-linecap="round"/>
      <path d="M${-w / 2 + 7} ${top + 10}v${h - 30}" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".7"/>`;
  }

  /* ================= tap pictures for the question pages (340 wide) ================= */
  const hot = (id, name, inner) => `<g class="hot" data-id="${id}" role="button" tabindex="0" aria-label="${esc(name)}">${inner}</g>`;
  const svgOpen = (h, name) => `<svg class="diagram" viewBox="0 0 340 ${h}" role="img" aria-label="${esc(name)}">`;
  const frame = (h, fill) => `<rect width="340" height="${h}" rx="14" fill="${fill}"/>`;
  const ringRect = (x, y, w, h, rx = 12) => `<rect class="ring" x="${f1(x)}" y="${f1(y)}" width="${f1(w)}" height="${f1(h)}" rx="${rx}"/>`;
  const ringCircle = (x, y, r) => `<circle class="ring" cx="${f1(x)}" cy="${f1(y)}" r="${f1(r)}"/>`;

  /* an atom (lithium-like: 3 protons, 4 neutrons, electrons 2 and 1) and a zoomed bubble with one proton and one neutron */
  function atomParts() {
    const L = [2, 1], O = { p: 3, n: 4, b: 7.5, r0: 40, dr: 30, er: 6.5, spin: 40 }, cx = 108, cy = 104;
    const e = electronAt(L, 1, 0, O);
    return `${svgOpen(208, T('An atom with its nucleus and electrons, and a zoomed view of two particles of the nucleus', 'ذرة بنواتها وإلكتروناتها، وصورة مكبَّرة لجسيمين من النواة'))}
      ${frame(208, '#eef6fb')}
      ${at(cx, cy, 1, atom(L, O))}
      <path d="M${cx + 16} ${cy - 10}L236 58M${cx + 16} ${cy + 10}L236 150" stroke="#9fb3c4" stroke-width="2" stroke-dasharray="5 5"/>
      <circle cx="262" cy="104" r="62" fill="#fff" stroke="#9fb3c4" stroke-width="3"/>
      ${at(240, 104, 1, ball('p', 19, true))}${at(286, 104, 1, ball('n', 19))}
      ${hot('nucleus', T('The middle of the atom', 'مركز الذرة'), ringCircle(cx, cy, 27))}
      ${hot('electron', T('The small particle on the outer circle', 'الجسيم الصغير على الدائرة الخارجية'), ringCircle(cx + e.x, cy + e.y, 15))}
      ${hot('proton', T('The particle with the + sign', 'الجسيم الذي عليه علامة +'), ringCircle(240, 104, 24))}
      ${hot('neutron', T('The particle with no sign', 'الجسيم الذي ليس عليه علامة'), ringCircle(286, 104, 24))}</svg>`;
  }
  /* the energy levels K, L, M, N as lines, closer and closer together, with "the energy increases" */
  const LEVEL_Y = { K: 182, L: 124, M: 86, N: 58 };
  function energyLevels() {
    const lines = ['K', 'L', 'M', 'N'].map((k, i) => `<path d="M104 ${LEVEL_Y[k]}H316" stroke="#4d9fd6" stroke-width="3" stroke-linecap="round"/>${ltrText(96, LEVEL_Y[k] + 5, `${k} (n = ${i + 1})`, { fs: 12.5, anchor: 'end' })}`).join('');
    const bands = { K: [166, 32], L: [108, 32], M: [73, 26], N: [44, 26] };
    return `${svgOpen(206, T('Four energy levels drawn as lines; the higher the line, the more energy', 'أربعة مستويات طاقة مرسومة كخطوط؛ كلما ارتفع الخط زادت الطاقة'))}
      ${frame(206, '#f3f8fd')}
      <path d="M14 190V30" stroke="#e2603f" stroke-width="4" stroke-linecap="round"/><path d="M4 42l10 -14l10 14" fill="none" stroke="#e2603f" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      <text x="0" y="0" transform="translate(32 112) rotate(-90)" text-anchor="middle" font-size="12" font-weight="900" fill="#c4483a">${esc(T('Energy increases', 'تزداد الطاقة'))}</text>
      ${lines}
      ${['K', 'L', 'M', 'N'].map(k => hot(k, T(`Level ${k}`, `المستوى ${k}`), ringRect(98, bands[k][0], 226, bands[k][1], 10))).join('')}</svg>`;
  }
  /* the modern periodic table: 18 groups, 7 periods and the two rows of the f-block, coloured by block */
  const BLOCK_COL = { s: '#f7c6d3', p: '#c6e2f6', d: '#fde6a4', f: '#cfeccb' };
  function ptCells(x0, y0, c, o = {}) {
    let s = '';
    const cell = (col, row, blk) => `<rect x="${f1(x0 + col * c)}" y="${f1(y0 + row * c)}" width="${f1(c - 1.6)}" height="${f1(c - 1.6)}" rx="2" fill="${BLOCK_COL[blk]}" stroke="#ffffff" stroke-width=".6"/>`;
    for (let r = 0; r < 7; r++) for (let g = 0; g < 18; g++) {
      if (r === 0 && g > 0 && g < 17) continue;
      if ((r === 1 || r === 2) && g > 1 && g < 12) continue;
      s += cell(g, r, g < 2 ? (r === 0 && g === 0 ? 's' : 's') : g < 12 ? 'd' : 'p');
    }
    const fy = 7 * c + (o.gap || 6);
    for (let r = 0; r < 2; r++) for (let g = 2; g < 16; g++) s += cell(g, 0, 'f').replace(`y="${f1(y0)}"`, `y="${f1(y0 + fy + r * c)}"`);
    return s;
  }
  function ptBlocks() {
    const x0 = 26, y0 = 14, c = 16, fy = y0 + 7 * c + 8;
    return `${svgOpen(170, T('The modern periodic table, coloured in four parts: two columns on the left, a wide middle part, six columns on the right, and two rows at the bottom', 'الجدول الدوري الحديث ملوَّن في أربعة أجزاء: عمودان في اليسار، وجزء عريض في المنتصف، وستة أعمدة في اليمين، وصفّان في الأسفل'))}
      ${frame(170, '#f7f9fc')}${ptCells(x0, y0, c, { gap: 8 })}
      ${hot('s', T('The two columns on the left', 'العمودان في اليسار'), ringRect(x0 - 4, y0 - 4, 2 * c + 6, 7 * c + 6, 8))}
      ${hot('d', T('The wide part in the middle', 'الجزء العريض في المنتصف'), ringRect(x0 + 2 * c - 2, y0 + 3 * c - 4, 10 * c + 4, 4 * c + 6, 8))}
      ${hot('p', T('The six columns on the right', 'الأعمدة الستة في اليمين'), ringRect(x0 + 12 * c - 2, y0 - 4, 6 * c + 4, 7 * c + 6, 8))}
      ${hot('f', T('The two rows at the bottom', 'الصفان في الأسفل'), ringRect(x0 + 2 * c - 4, fy - 4, 14 * c + 6, 2 * c + 6, 8))}</svg>`;
  }
  /* the main groups (A groups) of periods 2, 3 and 4, with the group names on top */
  const GROUPS = ['1A', '2A', '3A', '4A', '5A', '6A', '7A', '0'];
  const GROUP_ROWS = [['Li', 'Be', 'B', 'C', 'N', 'O', 'F', 'Ne'], ['Na', 'Mg', 'Al', 'Si', 'P', 'S', 'Cl', 'Ar'], ['K', 'Ca', 'Ga', 'Ge', 'As', 'Se', 'Br', 'Kr']];
  const GROUP_COL = ['#f7c6d3', '#fbd9b0', '#c6e2f6', '#c6e2f6', '#c6e2f6', '#c6e2f6', '#d9cdf6', '#cfeccb'];
  function ptGroups() {
    const x0 = 14, w = 39, y0 = 40, h = 40;
    let s = '';
    GROUPS.forEach((g, i) => {
      s += ltrText(x0 + i * w + w / 2, 28, g, { fs: 14 });
      GROUP_ROWS.forEach((row, r) => { s += `<rect x="${x0 + i * w + 2}" y="${y0 + r * h + 2}" width="${w - 4}" height="${h - 4}" rx="7" fill="${GROUP_COL[i]}" stroke="#ffffff" stroke-width="1.5"/>${ltrText(x0 + i * w + w / 2, y0 + r * h + 26, row[i], { fs: 15 })}`; });
    });
    const ids = ['g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'g7', 'g0'];
    return `${svgOpen(170, T('The A groups of the periodic table: 1A, 2A, 3A, 4A, 5A, 6A, 7A and 0, with the elements of periods 2, 3 and 4', 'مجموعات A في الجدول الدوري: 1A و2A و3A و4A و5A و6A و7A و0، وفيها عناصر الدورات 2 و3 و4'))}
      ${frame(170, '#f7f9fc')}${s}
      ${ids.map((id, i) => hot(id, T(`Group ${GROUPS[i]}`, `المجموعة ${GROUPS[i]}`), ringRect(x0 + i * w + 1, 12, w - 2, 3 * h + y0 - 10, 9))).join('')}</svg>`;
  }
  /* three boxes of particles: a mixture (two kinds of molecules), an element (one kind, one type of atom), a compound (one kind, two types of atoms) */
  function particleBoxes() {
    const R = '#ef7d6b', B = '#5aa6e0', spots = [[22, 30, 20], [62, 26, -30], [40, 62, 60], [78, 70, 10], [20, 92, -60], [62, 104, 30]];
    const box = (x, kinds) => `<rect x="${x}" y="22" width="100" height="128" rx="12" fill="#ffffff" stroke="#9fb3c4" stroke-width="2.4"/>` +
      spots.map(([dx, dy, rot], i) => at(x + dx + 4, 22 + dy, 1, diatomic(kinds[i][0], kinds[i][1], 7.5, rot))).join('');
    const mixture = [[R, R], [B, B], [R, R], [B, B], [B, B], [R, R]], element = spots.map(() => [R, R]), compound = spots.map(() => [R, B]);
    return `${svgOpen(166, T('Three boxes of particles: in the first there are two kinds of molecules; in the second every molecule is two red atoms; in the third every molecule is a red atom joined to a blue atom', 'ثلاثة صناديق من الجسيمات: في الأول نوعان من الجزيئات، وفي الثاني كل جزيء من ذرتين حمراوين، وفي الثالث كل جزيء من ذرة حمراء مرتبطة بذرة زرقاء'))}
      ${frame(166, '#f3f8fd')}${box(boxX(0), mixture)}${box(boxX(1), element)}${box(boxX(2), compound)}
      ${['(1)', '(2)', '(3)'].map((t, i) => ltrText(boxX(i) + 50, 15, t, { fs: 12.5 })).join('')}
      ${hot('mixture', T('Box 1: two kinds of molecules', 'الصندوق 1: نوعان من الجزيئات'), ringRect(boxX(0) - 4, 18, 108, 136))}
      ${hot('element', T('Box 2: molecules of two red atoms', 'الصندوق 2: جزيئات من ذرتين حمراوين'), ringRect(boxX(1) - 4, 18, 108, 136))}
      ${hot('compound', T('Box 3: molecules of a red and a blue atom', 'الصندوق 3: جزيئات من ذرة حمراء وذرة زرقاء'), ringRect(boxX(2) - 4, 18, 108, 136))}</svg>`;
  }
  function boxX(i) { return 10 + i * 110; }
  /* two beakers: table salt in water (clear) and sand in water (grains at the bottom), with their names */
  function mixBeakers() {
    return `${svgOpen(176, T('Two beakers: table salt in water, which looks clear, and sand in water, with sand at the bottom', 'كأسان: ملح طعام في الماء ويبدو شفافًا، ورمل في الماء والرمل في القاع'))}
      ${frame(176, '#eef6fb')}<rect y="142" width="340" height="34" fill="#d9b27c"/><rect y="142" width="340" height="5" fill="#a8834f" opacity=".6"/>
      ${at(95, 142, 1.05, beaker({ fill: '#a9dcf5' }))}${at(245, 142, 1.05, beaker({ fill: '#c9d8c0', sand: true }))}
      ${label(95, 166, T('Table salt + water', 'ملح طعام + ماء'), { fs: 12.5 })}${label(245, 166, T('Sand + water', 'رمل + ماء'), { fs: 12.5 })}
      ${hot('homo', T('Table salt in water', 'ملح الطعام في الماء'), ringRect(40, 34, 110, 140))}${hot('hetero', T('Sand in water', 'الرمل في الماء'), ringRect(190, 34, 110, 140))}</svg>`;
  }
  /* four bonds written with Lewis dots: ionic [Na]+[Cl]-, H-Cl, O=O, N≡N */
  const dots = (x, y, pairs) => pairs.map(([dx, dy]) => `<circle cx="${f1(x + dx)}" cy="${f1(y + dy)}" r="2.3" fill="${COL.electron}"/>`).join('');
  const twoDots = (x, y, side) => side === 't' ? dots(x, y, [[-4, -21], [4, -21]]) : side === 'b' ? dots(x, y, [[-4, 7], [4, 7]]) : side === 'l' ? dots(x, y, [[-15, -11], [-15, -3]]) : dots(x, y, [[15, -11], [15, -3]]);
  function bondCard(kind) {
    const sym = (x, y, s) => ltrText(x, y, s, { fs: 20 });
    if (kind === 'ionic') return `${ltrText(40, 47, '[Na]', { fs: 19 })}${ltrText(67, 35, '+', { fs: 14 })}${ltrText(87, 47, '[', { fs: 19 })}${sym(112, 47, 'Cl')}${ltrText(138, 47, ']', { fs: 19 })}${ltrText(148, 35, '−', { fs: 14 })}${twoDots(112, 47, 't')}${twoDots(112, 47, 'b')}${twoDots(112, 47, 'l')}${twoDots(112, 47, 'r')}`;
    const line = (x1, x2, y) => `<path d="M${x1} ${y}H${x2}" stroke="#1f3d57" stroke-width="2.6" stroke-linecap="round"/>`;
    if (kind === 'single') return `${sym(50, 47, 'H')}${line(62, 86, 40)}${sym(104, 47, 'Cl')}${twoDots(104, 47, 't')}${twoDots(104, 47, 'b')}${twoDots(104, 47, 'r')}`;
    if (kind === 'double') return `${sym(56, 47, 'O')}${line(68, 92, 36)}${line(68, 92, 44)}${sym(104, 47, 'O')}${twoDots(56, 47, 't')}${twoDots(56, 47, 'b')}${twoDots(104, 47, 't')}${twoDots(104, 47, 'b')}`;
    return `${sym(56, 47, 'N')}${line(68, 92, 33)}${line(68, 92, 40)}${line(68, 92, 47)}${sym(104, 47, 'N')}${twoDots(56, 47, 'l')}${twoDots(104, 47, 'r')}`;
  }
  function bondTypes() {
    const pos = [['ionic', 10, 10], ['single', 172, 10], ['double', 10, 96], ['triple', 172, 96]];
    const names = { ionic: T('Sodium and chloride ions in brackets with charges', 'أيونا الصوديوم والكلوريد بين أقواس مع شحنتيهما'), single: T('H and Cl joined by one line', 'H و Cl بينهما شَرطة واحدة'), double: T('Two O joined by two lines', 'ذرتا O بينهما شَرطتان'), triple: T('Two N joined by three lines', 'ذرتا N بينهما ثلاث شَرطات') };
    return `${svgOpen(184, T('Four molecules written with Lewis dots: [Na]+[Cl]−, H−Cl, O=O and N≡N', 'أربعة جزيئات بتمثيل لويس النقطي: [Na]+[Cl]− و H−Cl و O=O و N≡N'))}
      ${frame(184, '#f7f9fc')}${pos.map(([k, x, y]) => `<rect x="${x}" y="${y}" width="158" height="78" rx="12" fill="#ffffff" stroke="#c9d6e2" stroke-width="2"/>${at(x, y + 2, 1, bondCard(k))}`).join('')}
      ${pos.map(([k, x, y]) => hot(k, names[k], ringRect(x - 2, y - 2, 162, 82))).join('')}</svg>`;
  }
  /* carbon atoms bonded as a straight chain, a branched chain and a ring */
  const cBall = (x, y, r = 9) => `<circle cx="${f1(x)}" cy="${f1(y)}" r="${r}" fill="#5f6b77" stroke="#3b444d" stroke-width="1.6"/><circle cx="${f1(x - 3)}" cy="${f1(y - 3)}" r="2.6" fill="#fff" opacity=".45"/>`;
  const cLink = (a, b) => `<path d="M${f1(a[0])} ${f1(a[1])}L${f1(b[0])} ${f1(b[1])}" stroke="#8e98a3" stroke-width="5" stroke-linecap="round"/>`;
  function carbonGroup(pts, links) { return links.map(([i, j]) => cLink(pts[i], pts[j])).join('') + pts.map(q => cBall(q[0], q[1])).join(''); }
  function carbonShapes() {
    const straight = [[18, 76], [44, 76], [70, 76], [96, 76]].map(([x, y]) => [x + 4, y]);
    const branched = [[128, 84], [154, 84], [180, 84], [206, 84], [167, 58]];
    const ring = Array.from({ length: 5 }, (_, i) => { const a = -Math.PI / 2 + i * 2 * Math.PI / 5; return [276 + Math.cos(a) * 26, 80 + Math.sin(a) * 26]; });
    return `${svgOpen(150, T('Carbon atoms joined in three ways: in one straight line, in a line with a side branch, and in a closed ring', 'ذرات كربون مرتبطة بثلاث طرق: في خط واحد مستقيم، وفي خط له فرع جانبي، وفي حلقة مغلقة'))}
      ${frame(150, '#f7f9fc')}
      ${carbonGroup(straight, [[0, 1], [1, 2], [2, 3]])}${carbonGroup(branched, [[0, 1], [1, 2], [2, 3], [1, 4]])}${carbonGroup(ring, [[0, 1], [1, 2], [2, 3], [3, 4], [4, 0]])}
      ${hot('straight', T('The carbon atoms in one straight line', 'ذرات الكربون في خط واحد مستقيم'), ringRect(6, 40, 112, 74))}
      ${hot('branched', T('The line of carbon atoms with a side branch', 'خط ذرات الكربون الذي له فرع جانبي'), ringRect(116, 36, 104, 78))}
      ${hot('cyclic', T('The carbon atoms in a closed ring', 'ذرات الكربون في حلقة مغلقة'), ringRect(232, 30, 92, 96))}</svg>`;
  }

  window.P1ART = { at, f1, esc, ltrText, label, COL, ball, nucleus, nucleusR, electron, atom, electronAt, diatomic, beaker, ptCells, BLOCK_COL, GROUPS, GROUP_ROWS, GROUP_COL, bondCard, carbonGroup, cBall };
  window.CH_DIAGRAMS = Object.assign(window.CH_DIAGRAMS || {}, { atomParts, energyLevels, ptBlocks, ptGroups, particleBoxes, mixBeakers, bondTypes, carbonShapes });
})();
