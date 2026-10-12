/* Owner tool (not part of the game): draws the maps and page backgrounds of Prep 1 from the drawing functions in p1_art.js (and the shared shapes of g4_art.js).
   Run from the site folder:  node tools/make_p1_maps.js   ->  assets/map_p1u1.svg, bg_p1u1.svg (and the next units as they are added)
   STOPS are the five stops in map pixels (1224 x 1285), the same as the other maps; keep them in step with map.stops in chapters.js (percent). */
const fs = require('fs'), vm = require('vm'), path = require('path');
const ROOT = path.join(__dirname, '..');
const ctx = { window: {} };
['g4_art.js', 'p1_art.js'].forEach(f => vm.runInNewContext(fs.readFileSync(path.join(ROOT, f), 'utf8'), ctx));
const A = ctx.window.G4ART, P = ctx.window.P1ART, at = A.at;   // A: shared shapes (blob, sun…), P: the Prep 1 drawings
let seed = 5; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
const f = n => (Math.round(n * 10) / 10);
function curve(pts) { let d = `M${pts[0][0]} ${pts[0][1]}`; for (let i = 0; i < pts.length - 1; i++) { const p0 = pts[Math.max(0, i - 1)], p1 = pts[i], p2 = pts[i + 1], p3 = pts[Math.min(pts.length - 1, i + 2)];
  d += `C${f(p1[0] + (p2[0] - p0[0]) / 6)} ${f(p1[1] + (p2[1] - p0[1]) / 6)} ${f(p2[0] - (p3[0] - p1[0]) / 6)} ${f(p2[1] - (p3[1] - p1[1]) / 6)} ${p2[0]} ${p2[1]}`; } return d; }

const W = 1224, H = 1285;
const SHORE = [[612, 58], [850, 84], [1050, 170], [1156, 350], [1170, 580], [1140, 820], [1096, 1030], [950, 1170], [740, 1226], [500, 1222], [290, 1170], [128, 1030], [66, 810], [58, 570], [96, 340], [214, 170], [400, 86]];
const LAND = SHORE.map(([x, y]) => [612 + (x - 612) * .93, 642 + (y - 642) * .935]);
const STOPS = [[300, 1060], [760, 900], [420, 680], [800, 470], [560, 200]];
const TR = [[190, 1150], STOPS[0], [540, 1030], STOPS[1], [640, 780], STOPS[2], [590, 560], STOPS[3], [720, 310], STOPS[4], [470, 120]];

const tuft = (x, y, c = '#6fb46a') => `<path d="M${x - 8} ${y}q2 -14 6 -16M${x} ${y}q0 -18 2 -22M${x + 8} ${y}q-1 -12 -6 -16" fill="none" stroke="${c}" stroke-width="3.4" stroke-linecap="round"/>`;
const cloud = (x, y, k, o = 1) => `<g transform="translate(${x} ${y}) scale(${k})" fill="#fff" opacity="${o}"><ellipse cx="0" cy="0" rx="60" ry="22"/><ellipse cx="-26" cy="-16" rx="30" ry="22"/><ellipse cx="20" cy="-22" rx="36" ry="27"/></g>`;
const tree = (x, y, k, cols = ['#7cc86e', '#4f9f52']) => `<g transform="translate(${x} ${y}) scale(${k})"><ellipse cx="0" cy="4" rx="34" ry="9" fill="#000" opacity=".1"/><rect x="-7" y="-46" width="14" height="50" rx="5" fill="#9a7446"/>
  <g fill="${cols[0]}" stroke="${cols[1]}" stroke-width="3"><circle cx="-24" cy="-62" r="27"/><circle cx="24" cy="-62" r="27"/><circle cx="0" cy="-88" r="32"/></g><circle cx="-10" cy="-96" r="9" fill="#fff" opacity=".22"/></g>`;
const bench = (x, y, w) => `<g transform="translate(${x} ${y})"><ellipse cx="0" cy="34" rx="${w / 2 + 6}" ry="9" fill="#000" opacity=".08"/><rect x="${-w / 2}" y="0" width="${w}" height="14" rx="5" fill="#d9b27c" stroke="#a8834f" stroke-width="3"/><path d="M${-w / 2 + 14} 14v20M${w / 2 - 14} 14v20" stroke="#a8834f" stroke-width="7" stroke-linecap="round"/></g>`;
const board = (x, y, w, h, inner) => `<g transform="translate(${x} ${y})"><path d="M${-w / 2 + 20} ${h / 2}v46M${w / 2 - 20} ${h / 2}v46" stroke="#a8834f" stroke-width="8" stroke-linecap="round"/><rect x="${-w / 2}" y="${-h / 2}" width="${w}" height="${h}" rx="14" fill="#fff8ea" stroke="#a8834f" stroke-width="5"/>${inner}</g>`;
const sunAt = (x, y, k) => at(x, y, k, A.sun(26));

/* the island every map starts from: sea, shore, land (its own colours), the trail and the five stops. inside = drawn on the land, under the trail */
function island(land, sand, inside, trail = ['#dcc48a', '#fbf0cf', '#e6cf96']) {
  const blob = A.blob;
  let s = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}">
<defs>
  <linearGradient id="sea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c6ecf8"/><stop offset="1" stop-color="#8fd3ee"/></linearGradient>
  <linearGradient id="land" x1=".1" y1=".95" x2=".9" y2=".05">${land.map(([o, c]) => `<stop offset="${o}" stop-color="${c}"/>`).join('')}</linearGradient>
  <linearGradient id="sand" x1=".1" y1=".95" x2=".9" y2=".05"><stop offset="0" stop-color="${sand[0]}"/><stop offset="1" stop-color="${sand[1]}"/></linearGradient>
  <clipPath id="landClip"><path d="${blob(LAND)}"/></clipPath>
</defs>
<rect width="${W}" height="${H}" fill="url(#sea)"/>
<g fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".6">`;
  [[90, 150], [1060, 1190], [1130, 90], [60, 1215], [200, 1250], [1010, 60], [30, 720], [1195, 700]].forEach(([x, y]) => { s += `<path d="M${x - 22} ${y}q11 -10 22 0t22 0"/>`; });
  s += `</g>
<path d="${blob(SHORE.map(([x, y]) => [612 + (x - 612) * 1.035, 642 + (y - 642) * 1.03]))}" fill="#fff" opacity=".55"/>
<path d="${blob(SHORE)}" fill="url(#sand)" stroke="#e3cf9b" stroke-width="4"/>
<path d="${blob(LAND)}" fill="url(#land)"/>
<g clip-path="url(#landClip)">${inside}</g>
<path d="${curve(TR)}" fill="none" stroke="${trail[0]}" stroke-width="44" stroke-linecap="round"/><path d="${curve(TR)}" fill="none" stroke="${trail[1]}" stroke-width="34" stroke-linecap="round"/>
<path d="${curve(TR)}" fill="none" stroke="${trail[2]}" stroke-width="5" stroke-linecap="round" stroke-dasharray="4 22"/>`;
  STOPS.forEach(([x, y]) => { s += `<ellipse cx="${x}" cy="${y + 6}" rx="62" ry="40" fill="${trail[1]}" stroke="${trail[0]}" stroke-width="5"/>`; });
  return s;
}
function save(name, s) { s = s.replace(/\n\s+/g, '\n'); fs.writeFileSync(path.join(ROOT, 'assets', name), s); console.log(name, (s.length / 1024).toFixed(1) + ' KB'); }

/* ---------- Unit 1 · The Matter: a science park of atoms, the periodic table and beakers ---------- */
(function () {
  seed = 17;
  let inside = `<ellipse cx="300" cy="1010" rx="260" ry="150" fill="#bfe3f3" opacity=".55"/><ellipse cx="920" cy="1010" rx="250" ry="150" fill="#d9e8c4" opacity=".6"/><ellipse cx="930" cy="330" rx="280" ry="200" fill="#dcd6f3" opacity=".55"/><ellipse cx="290" cy="320" rx="230" ry="160" fill="#c4e79f" opacity=".6"/>`;
  for (let i = 0; i < 40; i++) inside += tuft(f(90 + rnd() * 1040), f(140 + rnd() * 1040));
  let s = island([[0, '#c3e6a6'], [.5, '#d4ecc2'], [1, '#dfe8f3']], ['#f3e6b8', '#ecebdc'], inside);
  /* 1 a big model of an atom (lithium: 2, 1) on a stand */
  s += `<g transform="translate(176 880)"><path d="M0 70v60" stroke="#8e98a3" stroke-width="10" stroke-linecap="round"/><ellipse cx="0" cy="134" rx="46" ry="12" fill="#8e98a3"/>${at(0, 0, 1.15, P.atom([2, 1], { p: 3, n: 4, b: 7, r0: 34, dr: 26, er: 6, spin: 30 }))}</g>`;
  /* 2 the periodic table, as a sign */
  s += board(1010, 880, 250, 150, at(-108, -58, .68, P.ptCells(0, 0, 18, { gap: 8 })));
  /* 3 the beakers: table salt in water and sand in water */
  s += bench(230, 640, 190) + at(180, 640, .8, P.beaker({ fill: '#a9dcf5' })) + at(280, 640, .8, P.beaker({ fill: '#c9d8c0', sand: true }));
  /* the A groups, as a sign */
  s += board(900, 300, 240, 120, P.GROUPS.map((g, i) => `<rect x="${-104 + i * 26}" y="-40" width="24" height="80" rx="5" fill="${P.GROUP_COL[i]}"/>`).join('') + P.GROUP_ROWS[1].map((e, i) => P.ltrText(-92 + i * 26, 6, e, { fs: 13 })).join(''));
  /* molecules floating around: oxygen, carbon dioxide-like pairs and water-like groups */
  [[560, 480, '#ef7d6b', '#ef7d6b', 20], [1080, 560, '#5aa6e0', '#5aa6e0', -30], [560, 905, '#ef7d6b', '#5aa6e0', 40], [660, 1170, '#ef7d6b', '#ef7d6b', -10], [1050, 1090, '#ef7d6b', '#5aa6e0', 70], [420, 420, '#5aa6e0', '#5aa6e0', 10]]
    .forEach(([x, y, a, b, r]) => { s += at(x, y, 2.2, P.diatomic(a, b, 8, r)); });
  s += at(1000, 680, 1.5, P.carbonGroup([[0, 0], [26, 0], [52, 0], [26, -26]], [[0, 1], [1, 2], [1, 3]]));
  s += tree(330, 850, .85) + tree(420, 1195, .8, ['#96d47c', '#5fae58']) + tree(800, 1190, .8) + tree(250, 330, .7) + tree(1060, 440, .8, ['#96d47c', '#5fae58']);
  s += sunAt(1090, 140, 2.2) + cloud(140, 110, .8, .85) + cloud(930, 70, .7, .85) + '</svg>';
  save('map_p1u1.svg', s);

  let b = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice">
<defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d3e9f8"/><stop offset=".55" stop-color="#e8f1fb"/><stop offset=".56" stop-color="#d9e4ee"/><stop offset="1" stop-color="#c9d8e6"/></linearGradient></defs>
<rect width="1600" height="1000" fill="url(#g)"/>
${cloud(260, 170, 1.5, .9)}${cloud(820, 110, 1.1, .8)}${cloud(1300, 200, 1, .7)}
<path d="M0 820C300 790 620 840 900 812C1180 784 1400 810 1600 802V1000H0Z" fill="#d9b27c"/><path d="M0 820C300 790 620 840 900 812C1180 784 1400 810 1600 802" fill="none" stroke="#a8834f" stroke-width="6" opacity=".5"/>`;
  b += at(220, 460, 2.4, P.atom([2, 8, 1], { p: 11, n: 12, b: 4, r0: 30, dr: 18, er: 5, spin: 10 }));
  b += `<g opacity=".9">${at(1180, 360, 1.6, P.ptCells(0, 0, 18, { gap: 8 }))}</g>`;
  b += at(560, 840, 1.6, P.beaker({ fill: '#a9dcf5' })) + at(740, 840, 1.6, P.beaker({ fill: '#c9d8c0', sand: true })) + at(960, 840, 1.4, P.beaker({ fill: '#f7c6d3', level: .4 }));
  [[700, 300, '#ef7d6b', '#ef7d6b', 20], [900, 420, '#5aa6e0', '#ef7d6b', -30], [1450, 760, '#ef7d6b', '#5aa6e0', 50], [420, 720, '#5aa6e0', '#5aa6e0', -20]].forEach(([x, y, a, c, r]) => { b += at(x, y, 3, P.diatomic(a, c, 8, r)); });
  b += at(1260, 900, 2, P.carbonGroup([[0, 0], [26, 0], [52, 0], [78, 0]], [[0, 1], [1, 2], [2, 3]])) + '</svg>';
  save('bg_p1u1.svg', b);
})();
