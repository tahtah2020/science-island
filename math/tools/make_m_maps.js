/* Owner tool (not part of the game): draws the map and page background of the Math units from math/m5_art.js and the shared shapes of science/g4_art.js.
   Run from the site folder:  node math/tools/make_m_maps.js   ->  math/assets/map_m5c1.svg, bg_m5c1.svg
   STOPS are the five stops in map pixels (1224 x 1285); keep them in step with map.stops in chapters.js (percent). */
const fs = require('fs'), vm = require('vm'), path = require('path');
const ROOT = path.join(__dirname, '..', '..');
const ctx = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(ROOT, 'science/g4_art.js'), 'utf8'), ctx);
vm.runInNewContext(fs.readFileSync(path.join(ROOT, 'math/m5_art.js'), 'utf8'), ctx);
const A = ctx.window.G4ART, M = ctx.window.M5ART, at = A.at;
let seed = 11; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
const f = n => Math.round(n * 10) / 10;
function curve(pts) { let d = `M${pts[0][0]} ${pts[0][1]}`; for (let i = 0; i < pts.length - 1; i++) { const p0 = pts[Math.max(0, i - 1)], p1 = pts[i], p2 = pts[i + 1], p3 = pts[Math.min(pts.length - 1, i + 2)];
  d += `C${f(p1[0] + (p2[0] - p0[0]) / 6)} ${f(p1[1] + (p2[1] - p0[1]) / 6)} ${f(p2[0] - (p3[0] - p1[0]) / 6)} ${f(p2[1] - (p3[1] - p1[1]) / 6)} ${p2[0]} ${p2[1]}`; } return d; }
const W = 1224, H = 1285;
const SHORE = [[612, 58], [850, 84], [1050, 170], [1156, 350], [1170, 580], [1140, 820], [1096, 1030], [950, 1170], [740, 1226], [500, 1222], [290, 1170], [128, 1030], [66, 810], [58, 570], [96, 340], [260, 150]];
const LAND = SHORE.map(([x, y]) => [612 + (x - 612) * .93, 642 + (y - 642) * .935]);
/* percent in chapters.js: [25,82] [62,70] [34,53] [65,37] [46,16] */
const STOPS = [[306, 1054], [759, 900], [416, 681], [796, 476], [563, 206]];
const TR = [[190, 1150], STOPS[0], [540, 1030], STOPS[1], [640, 780], STOPS[2], [590, 560], STOPS[3], [720, 310], STOPS[4], [470, 120]];
const tuft = (x, y, c = '#6fb46a') => `<path d="M${x - 8} ${y}q2 -14 6 -16M${x} ${y}q0 -18 2 -22M${x + 8} ${y}q-1 -12 -6 -16" fill="none" stroke="${c}" stroke-width="3.4" stroke-linecap="round"/>`;
const cloud = (x, y, k, o = 1) => `<g transform="translate(${x} ${y}) scale(${k})" fill="#fff" opacity="${o}"><ellipse cx="0" cy="0" rx="60" ry="22"/><ellipse cx="-26" cy="-16" rx="30" ry="22"/><ellipse cx="22" cy="-22" rx="34" ry="26"/></g>`;
const boat = (x, y, k) => `<g transform="translate(${x} ${y}) scale(${k})"><path d="M-60 0H60L44 26H-44Z" fill="#c98b4a" stroke="#8a5a28" stroke-width="4" stroke-linejoin="round"/><path d="M0 -4V-84" stroke="#8a5a28" stroke-width="5"/><path d="M4 -82L52 -12H4Z" fill="#fffaf0" stroke="#d9c9a6" stroke-width="3" stroke-linejoin="round"/><path d="M-70 36q12 -9 24 0t24 0t24 0t24 0t24 0" fill="none" stroke="#fff" stroke-width="4" opacity=".7"/></g>`;
const crate = (x, y, k, n) => `<g transform="translate(${x} ${y}) scale(${k})"><rect x="-26" y="-26" width="52" height="52" rx="6" fill="#e0b070" stroke="#8a5a28" stroke-width="4"/><path d="M-26 -8H26M-26 10H26" stroke="#8a5a28" stroke-width="3"/>${M.num(0, 8, n, { fs: 17, fill: '#5a3a14' })}</g>`;
function island(land, sand, inside, trail = ['#dcc48a', '#fbf0cf', '#e6cf96']) {
  let s = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}">
<defs>
  <linearGradient id="sea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c6ecf8"/><stop offset="1" stop-color="#8fd3ee"/></linearGradient>
  <linearGradient id="land" x1=".1" y1=".95" x2=".9" y2=".05">${land.map(([o, c]) => `<stop offset="${o}" stop-color="${c}"/>`).join('')}</linearGradient>
  <linearGradient id="sand" x1=".1" y1=".95" x2=".9" y2=".05"><stop offset="0" stop-color="${sand[0]}"/><stop offset="1" stop-color="${sand[1]}"/></linearGradient>
  <clipPath id="landClip"><path d="${A.blob(LAND)}"/></clipPath>
</defs>
<rect width="${W}" height="${H}" fill="url(#sea)"/>
<g fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".6">`;
  [[90, 150], [1060, 1190], [1130, 90], [60, 1215], [200, 1250], [1010, 60], [30, 720], [1195, 700]].forEach(([x, y]) => { s += `<path d="M${x - 22} ${y}q11 -10 22 0t22 0"/>`; });
  s += `</g>
<path d="${A.blob(SHORE.map(([x, y]) => [612 + (x - 612) * 1.035, 642 + (y - 642) * 1.03]))}" fill="#fff" opacity=".55"/>
<path d="${A.blob(SHORE)}" fill="url(#sand)" stroke="#e3cf9b" stroke-width="4"/>
<path d="${A.blob(LAND)}" fill="url(#land)"/>
<g clip-path="url(#landClip)">${inside}</g>
<path d="${curve(TR)}" fill="none" stroke="${trail[0]}" stroke-width="44" stroke-linecap="round"/><path d="${curve(TR)}" fill="none" stroke="${trail[1]}" stroke-width="34" stroke-linecap="round"/>
<path d="${curve(TR)}" fill="none" stroke="${trail[2]}" stroke-width="5" stroke-linecap="round" stroke-dasharray="4 22"/>`;
  STOPS.forEach(([x, y]) => { s += `<ellipse cx="${x}" cy="${y + 6}" rx="62" ry="40" fill="${trail[1]}" stroke="${trail[0]}" stroke-width="5"/>`; });
  return s;
}
function save(name, s) { s = s.replace(/\n\s+/g, '\n'); fs.writeFileSync(path.join(ROOT, 'math/assets', name), s); console.log(name, (s.length / 1024).toFixed(1) + ' KB'); }
const board = (x, y, w, h, inner) => `<g transform="translate(${x} ${y})"><path d="M${-w / 2 + 20} ${h / 2}v46M${w / 2 - 20} ${h / 2}v46" stroke="#a8834f" stroke-width="8" stroke-linecap="round"/><rect x="${-w / 2}" y="${-h / 2}" width="${w}" height="${h}" rx="14" fill="#fffaf0" stroke="#a8834f" stroke-width="6"/>${inner}</g>`;

/* ---------- Unit 1 · Decimal Dock: a harbour on the Nile with grids, a big place value chart, a number line and crates ---------- */
(function () {
  let inside = `<ellipse cx="300" cy="1010" rx="270" ry="160" fill="#fdecc8" opacity=".8"/><ellipse cx="930" cy="1000" rx="250" ry="150" fill="#d8efd0" opacity=".7"/><ellipse cx="930" cy="320" rx="280" ry="200" fill="#fde0bd" opacity=".6"/><ellipse cx="300" cy="330" rx="230" ry="160" fill="#d9eef0" opacity=".7"/>`;
  /* a river bend through the middle of the island */
  inside += `<path d="M-20 560C220 520 330 760 640 700S980 520 1260 600" fill="none" stroke="#8fd3ee" stroke-width="70" stroke-linecap="round" opacity=".9"/><path d="M-20 560C220 520 330 760 640 700S980 520 1260 600" fill="none" stroke="#c6ecf8" stroke-width="12" stroke-linecap="round" stroke-dasharray="2 34" opacity=".9"/>`;
  for (let i = 0; i < 30; i++) { const x = f(90 + rnd() * 1040), y = f(140 + rnd() * 1040); if (!(y > 500 && y < 760)) inside += tuft(x, y); }
  let s = island([[0, '#fbe6b8'], [.5, '#e0efc4'], [1, '#f6e3bd']], ['#f3e6b8', '#f6efd2'], inside);
  s += at(180, 1140, 1, boat(0, 0, 1.2)) + boat(980, 640, 1.1) + boat(300, 640, .8);
  s += board(230, 800, 300, 150, M.grid100(-60, -56, 112, 35) ).replace('rx="14"', 'rx="14"');
  s += board(1010, 1010, 320, 150, '<g transform="translate(-155 -48) scale(.98)">' + M.chart(0, 0, { num: '3.405', hideHead: true }) + '</g>');
  s += board(900, 240, 320, 120, '<g transform="translate(-140 -4) scale(.92)">' + M.line(0, 0, 280, { from: 7, to: 8, at: 7.7 }) + '</g>');
  s += crate(540, 1180, 1, '0.5') + crate(590, 1190, .9, '0.05') + crate(640, 1182, .8, '0.005');
  s += at(300, 330, 1.3, A.palm()) + at(470, 880, 1.1, A.palm()) + at(860, 820, 1.2, A.palm()) + at(1060, 480, 1, A.papyrus()) + at(190, 560, 1, A.papyrus());
  s += at(1090, 140, 2.2, A.sun(26)) + cloud(140, 110, .8, .85) + cloud(560, 70, .7, .85) + '</svg>';
  save('map_m5c1.svg', s);

  let b = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice">
<defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d6ecf8"/><stop offset=".6" stop-color="#fdf3dc"/><stop offset="1" stop-color="#fbe3b8"/></linearGradient></defs>
<rect width="1600" height="1000" fill="url(#g)"/>
${cloud(260, 170, 1.5, .9)}${cloud(820, 110, 1.1, .8)}${cloud(1300, 200, 1, .7)}
<path d="M0 760C300 730 620 790 900 760C1180 730 1400 760 1600 750V1000H0Z" fill="#8fd3ee"/><path d="M0 800C300 780 620 830 900 800C1180 780 1400 805 1600 795V1000H0Z" fill="#6fbfe0" opacity=".6"/>
${boat(300, 800, 2)}${boat(1180, 790, 1.5)}
<g opacity=".55">${M.grid100(120, 120, 220, 35)}${M.grid100(1280, 330, 200, 7)}</g>
${at(1300, 150, 2.4, A.sun(26))}</svg>`;
  save('bg_m5c1.svg', b);
})();

/* ---------- Grade 4 · Unit 1 (Place Value Nest) and Unit 2 (Ant Colony Count): an island of ant hills ---------- */
const antHill = (x, y, k, ants = 8) => { let a = ''; for (let i = 0; i < ants; i++) { const ax = f(-44 + ((i * 37) % 88)), ay = f(-6 - ((i * 23) % 36)); a += `<ellipse cx="${ax}" cy="${ay}" rx="4.5" ry="3" fill="#5a3a1e"/>`; }
  return `<g transform="translate(${x} ${y}) scale(${k})"><path d="M-70 0Q-34 -12 -20 -58Q0 -96 20 -58Q34 -12 70 0Z" fill="#d9a85c" stroke="#a8773a" stroke-width="4" stroke-linejoin="round"/>${a}</g>`; };
function g4Island(id, accent, sign) {
  seed = 23;
  let inside = `<ellipse cx="300" cy="1010" rx="270" ry="160" fill="#f6dfb0" opacity=".8"/><ellipse cx="930" cy="1000" rx="250" ry="150" fill="#d8efd0" opacity=".7"/><ellipse cx="930" cy="320" rx="280" ry="200" fill="#f3d6a8" opacity=".6"/><ellipse cx="300" cy="300" rx="250" ry="180" fill="#e4efc8" opacity=".6"/>`;
  for (let i = 0; i < 30; i++) { const x = f(90 + rnd() * 1040), y = f(140 + rnd() * 1040); inside += tuft(x, y); }
  let s = island([[0, '#f7e0b0'], [.5, '#e3efc4'], [1, '#f4dcae']], ['#f3e6b8', '#f6efd2'], inside);
  s += antHill(190, 780, 1.5, 10) + antHill(1010, 1010, 1.7, 14) + antHill(940, 300, 1.4, 9) + antHill(300, 330, 1.2, 8) + antHill(560, 1110, 1.1, 6);
  s += sign.map(([x, y, k, n]) => crate(x, y, k, n)).join('');
  s += at(470, 880, 1.1, A.palm()) + at(860, 820, 1.2, A.palm()) + at(1060, 480, 1, A.papyrus()) + at(190, 560, 1, A.papyrus());
  s += at(1090, 140, 2.2, A.sun(26)) + cloud(140, 110, .8, .85) + cloud(560, 70, .7, .85) + '</svg>';
  save('map_' + id + '.svg', s);
  let b = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice">
<defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d6ecf8"/><stop offset=".6" stop-color="#fdf3dc"/><stop offset="1" stop-color="${accent}"/></linearGradient></defs>
<rect width="1600" height="1000" fill="url(#g)"/>
${cloud(260, 170, 1.5, .9)}${cloud(820, 110, 1.1, .8)}${cloud(1300, 200, 1, .7)}
<path d="M0 800C300 770 620 830 900 800C1180 770 1400 800 1600 790V1000H0Z" fill="#e8c88a"/><path d="M0 860C300 840 620 890 900 860C1180 840 1400 865 1600 855V1000H0Z" fill="#d9b06a" opacity=".7"/>
${antHill(300, 820, 2.6, 12)}${antHill(1200, 830, 2, 9)}
${at(1300, 150, 2.4, A.sun(26))}</svg>`;
  save('bg_' + id + '.svg', b);
}
g4Island('mg4u1', '#fbe3b8', [[540, 1180, 1, '1,000'], [590, 1190, .9, '100'], [640, 1182, .8, '10']]);
g4Island('mg4u2', '#f6e0c2', [[540, 1180, 1, '+'], [590, 1190, .9, '−'], [640, 1182, .8, '=']]);
g4Island('mg4u3', '#e3eedb', [[540, 1180, 1, 'km'], [590, 1190, .9, 'kg'], [640, 1182, .8, 'L']]);
g4Island('mg4u4', '#dceaf6', [[540, 1180, 1, 'P'], [590, 1190, .9, 'A'], [640, 1182, .8, 'm²']]);
g4Island('mg4u5', '#fbe7d4', [[540, 1180, 1, '×'], [590, 1190, .9, '3×4'], [640, 1182, .8, '×10']]);
g4Island('mg4u6', '#e6e0f5', [[540, 1180, 1, '24'], [590, 1190, .9, 'GCF'], [640, 1182, .8, '2,4,6']]);
g4Island('mg4u7', '#d9eef0', [[540, 1180, 1, '×'], [590, 1190, .9, '÷'], [640, 1182, .8, 'R3']]);
g4Island('mg4u8', '#f6e2d0', [[540, 1180, 1, '( )'], [590, 1190, .9, '×÷'], [640, 1182, .8, '+−']]);
g4Island('mg6u1', '#fbe3b8', [[540, 1180, 1, '2'], [590, 1190, .9, '3'], [640, 1182, .8, '5']]);
g4Island('mg6u2', '#e9e3f6', [[540, 1180, 1, '−'], [590, 1190, .9, '0'], [640, 1182, .8, '+']]);

/* ---------- Grade 5 · Unit 2 · Sinai Number Trail: a desert island with red mountains, sand dunes, the gulf, a factor tree and a Venn board ---------- */
(function () {
  seed = 31;
  const D = ctx.window.CH_DIAGRAMS;
  const mountain = (x, y, k, c1 = '#c8664a', c2 = '#a44a33') => `<g transform="translate(${x} ${y}) scale(${k})"><path d="M-120 0L-40 -130L-10 -96L30 -160L120 0Z" fill="${c1}" stroke="${c2}" stroke-width="5" stroke-linejoin="round"/><path d="M30 -160L52 -110L36 -100L60 -60" fill="none" stroke="${c2}" stroke-width="4" stroke-linecap="round"/></g>`;
  const dune = (x, y, k) => `<g transform="translate(${x} ${y}) scale(${k})"><path d="M-110 0Q-40 -60 20 -40Q70 -26 110 0Z" fill="#efc77f" stroke="#d6a457" stroke-width="4"/><path d="M-60 -20Q-10 -44 40 -30" fill="none" stroke="#fff3d6" stroke-width="4" stroke-linecap="round"/></g>`;
  const bus = (x, y, k) => `<g transform="translate(${x} ${y}) scale(${k})"><rect x="-50" y="-34" width="100" height="44" rx="10" fill="#e2603f" stroke="#a8432a" stroke-width="4"/><rect x="-40" y="-26" width="22" height="16" rx="3" fill="#fff"/><rect x="-12" y="-26" width="22" height="16" rx="3" fill="#fff"/><rect x="16" y="-26" width="22" height="16" rx="3" fill="#fff"/><circle cx="-28" cy="12" r="9" fill="#1f3d57"/><circle cx="28" cy="12" r="9" fill="#1f3d57"/></g>`;
  let inside = `<ellipse cx="300" cy="1010" rx="270" ry="160" fill="#f6d9a2" opacity=".8"/><ellipse cx="930" cy="1000" rx="250" ry="150" fill="#f3cf96" opacity=".7"/><ellipse cx="930" cy="320" rx="280" ry="200" fill="#f0c9a0" opacity=".6"/>`;
  /* the gulf: a strip of sea down the right side */
  inside += `<path d="M1130 100C1040 360 1090 640 1010 860S1040 1180 1100 1300H1300V100Z" fill="#8fd3ee" opacity=".95"/><path d="M1120 160C1050 380 1095 640 1030 860" fill="none" stroke="#c6ecf8" stroke-width="10" stroke-linecap="round" stroke-dasharray="2 30"/>`;
  for (let i = 0; i < 18; i++) { const x = f(90 + rnd() * 880), y = f(140 + rnd() * 1040); inside += tuft(x, y, '#9aa860'); }
  let s = island([[0, '#f8deac'], [.5, '#f3d39a'], [1, '#f6dcb4']], ['#f3e6b8', '#f6efd2'], inside, ['#d8b77a', '#fbf0cf', '#e2c58e']);
  s += mountain(250, 330, 1.5) + mountain(420, 300, 1.1, '#d27b5a', '#a8553a') + mountain(840, 330, 1);
  s += dune(200, 900, 1.2) + dune(560, 1140, 1) + dune(860, 1150, 1.1);
  s += bus(560, 860, 1.1);
  s += board(240, 640, 260, 190, '<g transform="translate(-118 -92) scale(.7)">' + D.factorTree({ pic: { plain: true, tree: { v: 24, c: [{ v: 4, c: [{ v: 2 }, { v: 2 }] }, { v: 6, c: [{ v: 2 }, { v: 3 }] }] } } }) + '</g>');
  s += board(930, 700, 270, 170, '<g transform="translate(-130 -84) scale(.77)">' + D.multVenn({ pic: { plain: true, a: 3, b: 4, upTo: 12, show: [3, 6, 4, 8, 12, 24] } }) + '</g>');
  s += crate(400, 1150, 1, 'x') + crate(458, 1162, .9, '+') + crate(510, 1154, .8, '=');
  s += at(1090, 140, 2.2, A.sun(26)) + cloud(140, 110, .8, .85) + cloud(600, 70, .7, .85) + '</svg>';
  save('map_m5c2.svg', s);
  let b = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice">
<defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d6ecf8"/><stop offset=".6" stop-color="#fdf0d8"/><stop offset="1" stop-color="#f6d6a4"/></linearGradient></defs>
<rect width="1600" height="1000" fill="url(#g)"/>
${cloud(260, 170, 1.5, .9)}${cloud(820, 110, 1.1, .8)}${cloud(1300, 200, 1, .7)}
${mountain(240, 760, 2.4)}${mountain(560, 760, 1.6, '#d27b5a', '#a8553a')}${mountain(1360, 760, 2)}
<path d="M0 760C300 730 620 790 900 760C1180 730 1400 760 1600 750V1000H0Z" fill="#efc77f"/><path d="M0 820C300 800 620 850 900 820C1180 800 1400 825 1600 815V1000H0Z" fill="#e2b56a" opacity=".7"/>
${at(1300, 150, 2.4, A.sun(26))}</svg>`;
  save('bg_m5c2.svg', b);
})();

/* ---------- Grade 5 · Unit 3 · Corniche Tilers: an Alexandria island with the sea wall, lamp posts, a fort, tiled plazas and an area-model board ---------- */
(function () {
  seed = 37;
  const D = ctx.window.CH_DIAGRAMS;
  const lampPost = (x, y, k) => `<g transform="translate(${x} ${y}) scale(${k})"><path d="M0 0V-90" stroke="#5c6f82" stroke-width="6"/><circle cx="0" cy="-96" r="11" fill="#ffd66b"/><circle cx="0" cy="-96" r="22" fill="#ffd66b" opacity=".3"/></g>`;
  const fort = (x, y, k) => `<g transform="translate(${x} ${y}) scale(${k})"><rect x="-90" y="-70" width="180" height="70" fill="#e9d2a2" stroke="#b08a52" stroke-width="5"/><rect x="-36" y="-130" width="72" height="62" fill="#efdcb2" stroke="#b08a52" stroke-width="5"/>`
    + `<path d="M-90 -70v-14h18v14M-54 -70v-14h18v14M36 -70v-14h18v14M72 -70v-14h18v14M-36 -130v-14h18v14M18 -130v-14h18v14" fill="#e9d2a2" stroke="#b08a52" stroke-width="4"/><path d="M-14 0v-30a14 14 0 0 1 28 0v30" fill="#8a5a28"/></g>`;
  const plaza = (x, y, k, cols) => { let t = ''; for (let r = 0; r < 3; r++) for (let c = 0; c < 4; c++) t += `<rect x="${-80 + c * 40}" y="${-60 + r * 40}" width="40" height="40" fill="${cols[(r * 4 + c) % cols.length]}" stroke="#fffaf0" stroke-width="4"/>`; return `<g transform="translate(${x} ${y}) scale(${k})">${t}</g>`; };
  let inside = `<ellipse cx="300" cy="1010" rx="270" ry="160" fill="#f4dfb6" opacity=".8"/><ellipse cx="930" cy="1000" rx="250" ry="150" fill="#e8e3c8" opacity=".7"/><ellipse cx="930" cy="320" rx="280" ry="200" fill="#efe0c0" opacity=".6"/>`;
  /* the Corniche: a bay of sea down the left side with its curved sea wall */
  inside += `<path d="M90 160C230 400 150 640 250 880S170 1160 120 1300H-80V160Z" fill="#7cc4e6"/><path d="M100 170C240 410 160 640 260 880S180 1160 130 1290" fill="none" stroke="#d9c4a0" stroke-width="18" stroke-linecap="round"/>`;
  for (let i = 0; i < 18; i++) { const x = f(320 + rnd() * 720), y = f(160 + rnd() * 1000); inside += tuft(x, y); }
  let s = island([[0, '#f6e4bd'], [.5, '#eadfbe'], [1, '#f2dcb0']], ['#f3e6b8', '#f6efd2'], inside);
  s += lampPost(290, 470, 1) + lampPost(270, 760, 1) + lampPost(300, 1020, 1);
  s += fort(900, 300, 1.1) + boat(150, 560, .9);
  s += plaza(560, 1140, .8, ['#ffe2b8', '#d4ecdf', '#d7e8f8', '#f8d9e6']) + plaza(1000, 600, .7, ['#d4ecdf', '#ffe2b8', '#f8d9e6', '#d7e8f8']);
  s += board(620, 610, 280, 160, '<g transform="translate(-136 -66) scale(.8)">' + D.areaModel({ pic: { plain: true, top: ['200', '30', '4'], left: ['20', '7'], cells: [['4,000', '600', '80'], ['1,400', '210', '28']], fill: true } }) + '</g>');
  s += crate(400, 1150, 1, '×') + crate(458, 1162, .9, '10') + crate(512, 1154, .8, '=');
  s += at(1090, 140, 2.2, A.sun(26)) + cloud(140, 110, .8, .85) + cloud(600, 70, .7, .85) + '</svg>';
  save('map_m5c3.svg', s);
  let b = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice">
<defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d6ecf8"/><stop offset=".55" stop-color="#fdf0d8"/><stop offset="1" stop-color="#eadfbe"/></linearGradient></defs>
<rect width="1600" height="1000" fill="url(#g)"/>
${cloud(260, 170, 1.5, .9)}${cloud(820, 110, 1.1, .8)}${cloud(1300, 200, 1, .7)}
<path d="M0 700H1600V820H0Z" fill="#7cc4e6"/><path d="M0 812H1600V840H0Z" fill="#d9c4a0"/><path d="M0 840H1600V1000H0Z" fill="#eadfbe"/>
${fort(1280, 700, 1.6)}${boat(420, 760, 1.3)}${lampPost(160, 840, 1.4)}${lampPost(700, 840, 1.4)}${plaza(1000, 930, 1, ['#ffe2b8', '#d4ecdf', '#d7e8f8', '#f8d9e6'])}
${at(1300, 150, 2.4, A.sun(26))}</svg>`;
  save('bg_m5c3.svg', b);
})();

/* ---------- Grade 5 · Unit 4 · Market Bakery Packers: a market island with striped stalls, bread baskets, crates and an area-model board ---------- */
(function () {
  seed = 41;
  const D = ctx.window.CH_DIAGRAMS;
  const stall = (x, y, k, c) => { let a = ''; for (let i = 0; i < 6; i++) a += `<path d="M${-90 + i * 30} -90h30v26q-15 10 -30 0Z" fill="${i % 2 ? '#fffaf0' : c}"/>`;
    return `<g transform="translate(${x} ${y}) scale(${k})"><path d="M-80 -64V0M80 -64V0" stroke="#8a5a28" stroke-width="7"/>${a}<rect x="-90" y="-20" width="180" height="26" rx="4" fill="#c98b4a" stroke="#8a5a28" stroke-width="4"/></g>`; };
  const loaves = (x, y, k) => `<g transform="translate(${x} ${y}) scale(${k})"><path d="M-40 0H40L32 26H-32Z" fill="#c98b4a" stroke="#8a5a28" stroke-width="4"/><ellipse cx="-16" cy="-4" rx="18" ry="10" fill="#e2a85a"/><ellipse cx="14" cy="-6" rx="18" ry="10" fill="#e2a85a"/><ellipse cx="0" cy="-16" rx="18" ry="10" fill="#f0bf78"/></g>`;
  let inside = `<ellipse cx="300" cy="1010" rx="270" ry="160" fill="#f6dfb0" opacity=".8"/><ellipse cx="930" cy="1000" rx="250" ry="150" fill="#f3d6b8" opacity=".7"/><ellipse cx="930" cy="320" rx="280" ry="200" fill="#e8e0f0" opacity=".5"/>`;
  for (let i = 0; i < 22; i++) { const x = f(90 + rnd() * 1040), y = f(160 + rnd() * 1000); inside += tuft(x, y); }
  let s = island([[0, '#f7e2b8'], [.5, '#f1dcc0'], [1, '#f4dcae']], ['#f3e6b8', '#f6efd2'], inside);
  s += stall(260, 420, 1.1, '#e2603f') + stall(930, 330, 1, '#4ea5d9') + stall(980, 980, 1, '#79c69a');
  s += loaves(250, 470, 1.1) + loaves(930, 370, 1) + loaves(560, 1150, 1) + loaves(200, 900, 1.2);
  s += board(600, 640, 290, 150, '<g transform="translate(-140 -58) scale(.82)">' + D.divModel({ pic: { plain: true, div: '7', top: ['300', '10', '5'], cells: [['2,207', '2,100', '107'], ['107', '70', '37'], ['37', '35', '2']] } }) + '</g>');
  s += crate(400, 1150, 1, '÷') + crate(458, 1162, .9, '12') + crate(512, 1154, .8, 'R');
  s += at(1090, 140, 2.2, A.sun(26)) + cloud(140, 110, .8, .85) + cloud(600, 70, .7, .85) + '</svg>';
  save('map_m5c4.svg', s);
  let b = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice">
<defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d6ecf8"/><stop offset=".6" stop-color="#fdf0d8"/><stop offset="1" stop-color="#f1d6b0"/></linearGradient></defs>
<rect width="1600" height="1000" fill="url(#g)"/>
${cloud(260, 170, 1.5, .9)}${cloud(820, 110, 1.1, .8)}${cloud(1300, 200, 1, .7)}
<path d="M0 820H1600V1000H0Z" fill="#e8c88a"/>${stall(260, 820, 2.2, '#e2603f')}${stall(1320, 820, 2, '#4ea5d9')}${loaves(800, 900, 2)}
${at(1300, 150, 2.4, A.sun(26))}</svg>`;
  save('bg_m5c4.svg', b);
})();

/* ---------- Grade 5 · Unit 5 · Decimal Adventure: an adventure island with tents, flags, signposts, a compass rose and a tenths-grid board ---------- */
(function () {
  seed = 43;
  const D = ctx.window.CH_DIAGRAMS;
  const tent = (x, y, k, c) => `<g transform="translate(${x} ${y}) scale(${k})"><path d="M-70 0L0 -90L70 0Z" fill="${c}" stroke="#7a3a24" stroke-width="5" stroke-linejoin="round"/><path d="M0 -90V0M-16 0L0 -30L16 0" stroke="#fffaf0" stroke-width="5" fill="none"/><path d="M0 -90V-140" stroke="#5c6f82" stroke-width="5"/><path d="M0 -140h40l-10 12h-30z" fill="#f2b134"/></g>`;
  const post = (x, y, k, t) => `<g transform="translate(${x} ${y}) scale(${k})"><path d="M0 0V-90" stroke="#8a5a28" stroke-width="8"/><path d="M-6 -90h70l14 14l-14 14h-70z" fill="#e0b070" stroke="#8a5a28" stroke-width="4"/>${M.num(32, -70, t, { fs: 18, fill: '#5a3a14' })}</g>`;
  const compass = (x, y, k) => `<g transform="translate(${x} ${y}) scale(${k})"><circle r="46" fill="#fffaf0" stroke="#8a5a28" stroke-width="6"/><path d="M0 -38L10 0L0 38L-10 0Z" fill="#e2603f"/><path d="M-38 0L0 -10L38 0L0 10Z" fill="#4ea5d9" opacity=".8"/><circle r="6" fill="#1f3d57"/></g>`;
  let inside = `<ellipse cx="300" cy="1010" rx="270" ry="160" fill="#e4f1d0" opacity=".8"/><ellipse cx="930" cy="1000" rx="250" ry="150" fill="#d8efd0" opacity=".7"/><ellipse cx="930" cy="320" rx="280" ry="200" fill="#e6f0d8" opacity=".6"/>`;
  for (let i = 0; i < 26; i++) { const x = f(90 + rnd() * 1040), y = f(160 + rnd() * 1000); inside += tuft(x, y); }
  let s = island([[0, '#e6f3d6'], [.5, '#dcefcf'], [1, '#e8f0d0']], ['#f3e6b8', '#f6efd2'], inside);
  s += tent(250, 470, 1.1, '#e2603f') + tent(960, 420, 1, '#4ea5d9') + tent(1000, 1100, .9, '#79c69a');
  s += post(220, 920, 1.1, '0.1') + post(880, 700, 1, '× 10') + compass(560, 1150, 1);
  s += board(600, 640, 220, 200, '<g transform="translate(-102 -84) scale(.6)">' + D.tenthsGrid({ pic: { plain: true, a: 3, b: 4 } }) + '</g>');
  s += crate(400, 1150, 1, '0.1') + crate(458, 1162, .9, '×') + crate(512, 1154, .8, '÷');
  s += at(1090, 140, 2.2, A.sun(26)) + cloud(140, 110, .8, .85) + cloud(600, 70, .7, .85) + '</svg>';
  save('map_m5c5.svg', s);
  let b = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice">
<defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d6ecf8"/><stop offset=".6" stop-color="#eef6e4"/><stop offset="1" stop-color="#d8ecc4"/></linearGradient></defs>
<rect width="1600" height="1000" fill="url(#g)"/>
${cloud(260, 170, 1.5, .9)}${cloud(820, 110, 1.1, .8)}${cloud(1300, 200, 1, .7)}
<path d="M-50 820Q300 560 650 820Z" fill="#9ed7b6"/><path d="M900 820Q1250 520 1650 820Z" fill="#79c69a"/>
<path d="M0 820H1600V1000H0Z" fill="#e8d3a0"/>${tent(260, 860, 2, '#e2603f')}${tent(1360, 860, 1.8, '#4ea5d9')}${compass(800, 920, 1.3)}
${at(1300, 150, 2.4, A.sun(26))}</svg>`;
  save('bg_m5c5.svg', b);
})();

/* ---------- Grade 5 · Unit 6 · Numerical Expressions and Patterns: a town island with a bus road and four stops, a tiled plaza (Yaseen's pattern), bicycles and an expression board ---------- */
(function () {
  const keepSeed = seed; seed = 61;   /* the seed is put back at the end so the maps after this block stay byte-identical */
  const D = ctx.window.CH_DIAGRAMS;
  const stopSign = (x, y, k, n) => `<g transform="translate(${x} ${y}) scale(${k})"><path d="M0 0V-80" stroke="#1f3d57" stroke-width="6"/><circle cy="-96" r="22" fill="#e2603f" stroke="#1f3d57" stroke-width="4"/>${M.num(0, -88, String(n), { fs: 22, fill: '#fff' })}</g>`;
  const plaza = (x, y, k) => { let t = ''; for (let r = -3; r <= 3; r++) for (let c = -3; c <= 3; c++) { if (r && c) continue; t += `<rect x="${c * 34 - 13}" y="${r * 34 - 13}" width="26" height="26" transform="rotate(45 ${c * 34} ${r * 34})" fill="#f2a24a" stroke="#b9671a" stroke-width="3"/>`; } return `<g transform="translate(${x} ${y}) scale(${k})"><rect x="-130" y="-130" width="260" height="260" rx="30" fill="#f6e3bd" stroke="#c9a25e" stroke-width="5"/>${t}</g>`; };
  const bike = (x, y, k, c) => `<g transform="translate(${x} ${y}) scale(${k})"><circle cx="-26" cy="8" r="20" fill="none" stroke="#333" stroke-width="6"/><circle cx="26" cy="8" r="20" fill="none" stroke="#333" stroke-width="6"/><path d="M-26 8L-6 -20H20L26 8M-6 -20L0 8H-26M0 8L20 -20M-10 -28H2M14 -30H28" fill="none" stroke="${c}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/></g>`;
  const bus = (x, y, k) => `<g transform="translate(${x} ${y}) scale(${k})"><rect x="-80" y="-56" width="160" height="88" rx="16" fill="#d9413a" stroke="#8f2420" stroke-width="5"/>${[-64, -24, 16].map(c => `<rect x="${c}" y="-42" width="34" height="28" rx="5" fill="#e8f4fb"/>`).join('')}<rect x="54" y="-42" width="18" height="40" rx="4" fill="#e8f4fb"/><rect x="-80" y="0" width="160" height="10" fill="#f7cf4d"/><circle cx="-44" cy="36" r="16" fill="#333"/><circle cx="44" cy="36" r="16" fill="#333"/><circle cx="-44" cy="36" r="6" fill="#ccc"/><circle cx="44" cy="36" r="6" fill="#ccc"/></g>`;
  let inside = `<ellipse cx="300" cy="1010" rx="270" ry="160" fill="#fde9c8" opacity=".8"/><ellipse cx="930" cy="1000" rx="250" ry="150" fill="#e4f1d6" opacity=".7"/><ellipse cx="930" cy="320" rx="280" ry="200" fill="#efe3f5" opacity=".6"/>`;
  /* the bus road across the island */
  inside += `<path d="M-20 880C260 820 380 960 640 900S1000 800 1260 860" fill="none" stroke="#8a8f96" stroke-width="64" stroke-linecap="round"/><path d="M-20 880C260 820 380 960 640 900S1000 800 1260 860" fill="none" stroke="#fff" stroke-width="5" stroke-dasharray="26 22"/>`;
  for (let i = 0; i < 24; i++) { const x = f(90 + rnd() * 1040), y = f(160 + rnd() * 1000); if (!(y > 800 && y < 980)) inside += tuft(x, y); }
  let s = island([[0, '#fbe6c8'], [.5, '#ece4f3'], [1, '#e4f1d6']], ['#f3e6b8', '#f6efd2'], inside);
  s += stopSign(150, 860, 1, 1) + stopSign(470, 935, 1, 2) + stopSign(800, 870, 1, 3) + stopSign(1110, 840, 1, 4) + bus(640, 870, .9);
  s += plaza(260, 420, 1) + bike(980, 1080, 1.1, '#2f78b5') + bike(1080, 1100, 1, '#79c69a');
  s += board(930, 260, 300, 120, '<g transform="translate(-140 -40) scale(.82)">' + D.seqStrip({ pic: { plain: true, nums: ['5', '10', '20', '40', '?'] } }) + '</g>');
  s += board(600, 640, 300, 110, '<g transform="translate(-140 -30)">' + `<rect x="0" y="0" width="280" height="56" rx="12" fill="#fff" stroke="#9db3c4" stroke-width="3"/>` + `<text x="140" y="38" text-anchor="middle" direction="ltr" font-size="26" font-weight="900" fill="#1f3d57">5 + <tspan fill="#8a63c4">(</tspan>2 <tspan fill="#e2603f">×</tspan> 3<tspan fill="#8a63c4">)</tspan> <tspan fill="#2f78b5">−</tspan> 1</text></g>`);
  s += crate(400, 1150, 1, '( )') + crate(458, 1162, .9, '×÷') + crate(512, 1154, .8, '+−');
  s += at(1090, 140, 2.2, A.sun(26)) + cloud(140, 110, .8, .85) + cloud(600, 70, .7, .85) + '</svg>';
  save('map_m5c6.svg', s);
  let b = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice">
<defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d6ecf8"/><stop offset=".6" stop-color="#f6eefa"/><stop offset="1" stop-color="#ece0f2"/></linearGradient></defs>
<rect width="1600" height="1000" fill="url(#g)"/>
${cloud(260, 170, 1.5, .9)}${cloud(820, 110, 1.1, .8)}${cloud(1300, 200, 1, .7)}
<path d="M0 820H1600V1000H0Z" fill="#b9bdc2"/><path d="M0 900H1600" stroke="#fff" stroke-width="8" stroke-dasharray="40 34"/>${bus(380, 830, 1.6)}${stopSign(1000, 840, 1.6, 1)}${bike(1320, 860, 1.5, '#2f78b5')}
${at(1300, 150, 2.4, A.sun(26))}</svg>`;
  save('bg_m5c6.svg', b);
  seed = keepSeed;
})();

/* ---------- Grade 3 · Unit 1 · Multiplication Rules: a fair island with candy rows, a throwing target, pencil boxes and a ten-seat bus ---------- */
(function () {
  seed = 57;
  vm.runInNewContext(fs.readFileSync(path.join(ROOT, 'math/g3_art.js'), 'utf8'), ctx);
  const D = ctx.window.CH_DIAGRAMS;
  const strip = s => s.replace(/^<svg[^>]*>/, '').replace(/<\/svg>$/, '');
  const target = (x, y, k) => `<g transform="translate(${x} ${y}) scale(${k})"><path d="M-30 50L0 -10L30 50" stroke="#8a5a28" stroke-width="7" fill="none" stroke-linecap="round"/>${['#fffaf0', '#bfe8d6', '#4ea5d9', '#f2b134', '#e2603f'].map((c, i) => `<circle r="${60 - i * 12}" fill="${c}" stroke="#1f3d57" stroke-width="3"/>`).join('')}<circle cx="16" cy="-10" r="5" fill="#1f3d57"/><circle cx="-22" cy="20" r="5" fill="#1f3d57"/><circle cx="4" cy="30" r="5" fill="#1f3d57"/></g>`;
  const jar = (x, y, k, c) => `<g transform="translate(${x} ${y}) scale(${k})"><rect x="-30" y="-56" width="60" height="70" rx="16" fill="#e6f6fb" stroke="#7fb0dc" stroke-width="4"/><rect x="-22" y="-66" width="44" height="14" rx="5" fill="${c}"/>${[[-12, -30], [10, -34], [-4, -12], [14, -6], [-16, -2]].map(([a, b], i) => `<circle cx="${a}" cy="${b}" r="9" fill="${['#e2603f', '#f2b134', '#2e9e6b', '#9b6bd3', '#e58bb0'][i]}" stroke="#fff" stroke-width="2"/>`).join('')}</g>`;
  const bus = (x, y, k) => `<g transform="translate(${x} ${y}) scale(${k})"><rect x="-80" y="-50" width="160" height="70" rx="16" fill="#f2b134" stroke="#b07d14" stroke-width="5"/>${[0, 1, 2, 3].map(i => `<rect x="${-68 + i * 36}" y="-40" width="28" height="26" rx="5" fill="#d9eef8" stroke="#b07d14" stroke-width="3"/>`).join('')}<circle cx="-46" cy="22" r="14" fill="#1f3d57"/><circle cx="46" cy="22" r="14" fill="#1f3d57"/><text x="0" y="12" text-anchor="middle" font-family="Cairo, sans-serif" font-weight="800" font-size="22" fill="#5a3a14">١٠</text></g>`;
  const pbox = (x, y, k) => `<g transform="translate(${x} ${y}) scale(${k})"><rect x="-44" y="-20" width="88" height="40" rx="8" fill="#fff" stroke="#c98b4a" stroke-width="4"/>${[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => `<rect x="${-38 + i * 8}" y="-14" width="5" height="26" fill="${['#e2603f', '#23799f', '#2e9e6b', '#f2b134'][i % 4]}"/>`).join('')}</g>`;
  let inside = `<ellipse cx="300" cy="1010" rx="270" ry="160" fill="#fde8d0" opacity=".8"/><ellipse cx="930" cy="1000" rx="250" ry="150" fill="#e4f1d0" opacity=".7"/><ellipse cx="930" cy="320" rx="280" ry="200" fill="#fdeedd" opacity=".6"/>`;
  for (let i = 0; i < 26; i++) { const x = f(90 + rnd() * 1040), y = f(160 + rnd() * 1000); inside += tuft(x, y); }
  let s = island([[0, '#e6f3d6'], [.5, '#f3ecd0'], [1, '#e8f0d0']], ['#f3e6b8', '#f6efd2'], inside);
  s += jar(250, 470, 1.4, '#e2603f') + target(960, 430, 1.2) + bus(980, 1090, .9) + pbox(220, 900, 1.1) + pbox(880, 690, 1);
  s += board(600, 640, 300, 200, '<g transform="translate(-150 -86) scale(.88)">' + strip(D.g3Groups({ pic: { per: 6, n: 3, add: 1 } })) + '</g>');
  s += crate(400, 1150, 1, '×') + crate(458, 1162, .9, '١٠') + crate(512, 1154, .8, '٠');
  s += at(1090, 140, 2.2, A.sun(26)) + cloud(140, 110, .8, .85) + cloud(600, 70, .7, .85) + '</svg>';
  save('map_mg3u1.svg', s);
  let b = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice">
<defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d6ecf8"/><stop offset=".6" stop-color="#fdf0dc"/><stop offset="1" stop-color="#f5dcc0"/></linearGradient></defs>
<rect width="1600" height="1000" fill="url(#g)"/>
${cloud(260, 170, 1.5, .9)}${cloud(820, 110, 1.1, .8)}${cloud(1300, 200, 1, .7)}
<path d="M0 820H1600V1000H0Z" fill="#e8d3a0"/>${jar(240, 840, 2, '#e2603f')}${target(1360, 760, 1.6)}${bus(800, 900, 1.3)}
${at(1300, 150, 2.4, A.sun(26))}</svg>`;
  save('bg_mg3u1.svg', b);
})();

/* ---------- Grade 3 · Unit 2 · Time and Duration: a station island with a clock tower, a train, a bus and stopwatches ---------- */
(function () {
  seed = 61;
  const D = ctx.window.CH_DIAGRAMS;
  const strip = s => s.replace(/^<svg[^>]*>/, '').replace(/<\/svg>$/, '');
  const tower = (x, y, k) => `<g transform="translate(${x} ${y}) scale(${k})"><rect x="-34" y="-150" width="68" height="150" fill="#e0b070" stroke="#8a5a28" stroke-width="5"/><path d="M-44 -150L0 -200L44 -150Z" fill="#c94f54" stroke="#8a3a2a" stroke-width="5" stroke-linejoin="round"/><circle cy="-112" r="26" fill="#fff" stroke="#1f3d57" stroke-width="4"/><path d="M0 -112V-130M0 -112L12 -106" stroke="#1f3d57" stroke-width="4" stroke-linecap="round"/><rect x="-14" y="-40" width="28" height="40" rx="12" fill="#8a5a28"/></g>`;
  const train = (x, y, k) => `<g transform="translate(${x} ${y}) scale(${k})">${[0, 1, 2].map(i => `<rect x="${-120 + i * 82}" y="-46" width="76" height="52" rx="10" fill="${['#4ea5d9', '#79c69a', '#f2b134'][i]}" stroke="#1f3d57" stroke-width="4"/><rect x="${-110 + i * 82}" y="-36" width="24" height="18" rx="3" fill="#e6f6fb"/><rect x="${-80 + i * 82}" y="-36" width="24" height="18" rx="3" fill="#e6f6fb"/><circle cx="${-102 + i * 82}" cy="10" r="10" fill="#1f3d57"/><circle cx="${-64 + i * 82}" cy="10" r="10" fill="#1f3d57"/>`).join('')}<path d="M-140 22H130" stroke="#8a5a28" stroke-width="5"/></g>`;
  const watch = (x, y, k) => `<g transform="translate(${x} ${y}) scale(${k})"><rect x="-8" y="-52" width="16" height="12" rx="3" fill="#9aa9b5" stroke="#1f3d57" stroke-width="3"/><circle r="40" fill="#fff" stroke="#8d99a6" stroke-width="8"/><path d="M0 0L22 -20" stroke="#f08a4b" stroke-width="5" stroke-linecap="round"/><circle r="4" fill="#f08a4b"/></g>`;
  let inside = `<ellipse cx="300" cy="1010" rx="270" ry="160" fill="#e4f1d0" opacity=".8"/><ellipse cx="930" cy="1000" rx="250" ry="150" fill="#dcecf6" opacity=".7"/><ellipse cx="930" cy="320" rx="280" ry="200" fill="#fdeedd" opacity=".6"/>`;
  for (let i = 0; i < 26; i++) { const x = f(90 + rnd() * 1040), y = f(160 + rnd() * 1000); inside += tuft(x, y); }
  let s = island([[0, '#e6f3d6'], [.5, '#e9efd8'], [1, '#e8f0d0']], ['#f3e6b8', '#f6efd2'], inside);
  s += tower(250, 560, 1.2) + train(940, 470, .9) + watch(220, 900, 1.1) + watch(900, 700, .9);
  s += board(600, 640, 260, 220, '<g transform="translate(-118 -92) scale(.7)">' + strip(D.g3Clock({ pic: { h: 3, m: 10, move: 20 } })) + '</g>');
  s += crate(400, 1150, 1, '٦٠') + crate(458, 1162, .9, 'د') + crate(512, 1154, .8, 'ث');
  s += at(1090, 140, 2.2, A.sun(26)) + cloud(140, 110, .8, .85) + cloud(600, 70, .7, .85) + '</svg>';
  save('map_mg3u2.svg', s);
  let b = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice">
<defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d6ecf8"/><stop offset=".6" stop-color="#eef4f8"/><stop offset="1" stop-color="#dfe9d4"/></linearGradient></defs>
<rect width="1600" height="1000" fill="url(#g)"/>
${cloud(260, 170, 1.5, .9)}${cloud(820, 110, 1.1, .8)}${cloud(1300, 200, 1, .7)}
<path d="M0 820H1600V1000H0Z" fill="#e8d3a0"/>${tower(220, 840, 2)}${train(1200, 860, 1.6)}${watch(700, 900, 1.3)}
${at(1300, 150, 2.4, A.sun(26))}</svg>`;
  save('bg_mg3u2.svg', b);
})();

/* ---------- Grade 3 · Unit 3 · Division: a picnic island where things are shared on plates, ribbons to compare ---------- */
(function () {
  seed = 67;
  const D = ctx.window.CH_DIAGRAMS;
  const strip = s => s.replace(/^<svg[^>]*>/, '').replace(/<\/svg>$/, '');
  const plate = (x, y, k, c) => `<g transform="translate(${x} ${y}) scale(${k})"><ellipse rx="50" ry="20" fill="#fff" stroke="#e58bb0" stroke-width="5"/>${[-22, 0, 22].map((a, i) => `<circle cx="${a}" cy="-6" r="11" fill="${c}" stroke="#8a5a28" stroke-width="2"/>`).join('')}</g>`;
  const ribbon = (x, y, k) => `<g transform="translate(${x} ${y}) scale(${k})"><rect x="-120" y="-16" width="240" height="22" rx="4" fill="#c9d3dc" stroke="#1f3d57" stroke-width="3"/><rect x="-120" y="16" width="60" height="22" rx="4" fill="#f6b5cf" stroke="#1f3d57" stroke-width="3"/></g>`;
  const blanket = (x, y, k) => `<g transform="translate(${x} ${y}) scale(${k})"><path d="M-110 -50L110 -50L140 50L-140 50Z" fill="#f08a4b"/>${[-80, -20, 40].map(a => `<path d="M${a} -50L${a + 40} 50" stroke="#fff" stroke-width="10" opacity=".55"/>`).join('')}</g>`;
  let inside = `<ellipse cx="300" cy="1010" rx="270" ry="160" fill="#fde8d0" opacity=".8"/><ellipse cx="930" cy="1000" rx="250" ry="150" fill="#e4f1d0" opacity=".7"/><ellipse cx="930" cy="320" rx="280" ry="200" fill="#fdeedd" opacity=".6"/>`;
  for (let i = 0; i < 26; i++) { const x = f(90 + rnd() * 1040), y = f(160 + rnd() * 1000); inside += tuft(x, y); }
  let s = island([[0, '#e6f3d6'], [.5, '#f3ecd0'], [1, '#e8f0d0']], ['#f3e6b8', '#f6efd2'], inside);
  s += blanket(260, 520, 1) + plate(200, 500, .9, '#c98b4a') + plate(320, 540, .9, '#c98b4a') + ribbon(940, 470, 1) + plate(900, 760, 1, '#e2603f') + plate(230, 900, 1, '#f2b134');
  s += board(600, 640, 300, 190, '<g transform="translate(-150 -80) scale(.88)">' + strip(D.g3Share({ pic: { total: 12, groups: 3, kind: 'cookie' } })) + '</g>');
  s += crate(400, 1150, 1, '÷') + crate(458, 1162, .9, '٣') + crate(512, 1154, .8, '٤');
  s += at(1090, 140, 2.2, A.sun(26)) + cloud(140, 110, .8, .85) + cloud(600, 70, .7, .85) + '</svg>';
  save('map_mg3u3.svg', s);
  let b = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice">
<defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d6ecf8"/><stop offset=".6" stop-color="#fdf0e6"/><stop offset="1" stop-color="#e7efd2"/></linearGradient></defs>
<rect width="1600" height="1000" fill="url(#g)"/>
${cloud(260, 170, 1.5, .9)}${cloud(820, 110, 1.1, .8)}${cloud(1300, 200, 1, .7)}
<path d="M0 820H1600V1000H0Z" fill="#cfe3b0"/>${blanket(300, 880, 1.8)}${plate(260, 860, 1.4, '#c98b4a')}${ribbon(1250, 870, 1.6)}
${at(1300, 150, 2.4, A.sun(26))}</svg>`;
  save('bg_mg3u3.svg', b);
})();

/* ---------- Grade 3 · Unit 4 · Addition and Subtraction: a market island with price tags, a book stall and a flower cart ---------- */
(function () {
  seed = 71;
  const D = ctx.window.CH_DIAGRAMS;
  const strip = s => s.replace(/^<svg[^>]*>/, '').replace(/<\/svg>$/, '');
  const stall = (x, y, k, c) => `<g transform="translate(${x} ${y}) scale(${k})"><rect x="-80" y="-30" width="160" height="80" rx="6" fill="#f6efd2" stroke="#8a5a28" stroke-width="5"/><path d="M-96 -30L-80 -80H80L96 -30Z" fill="${c}" stroke="#8a3a2a" stroke-width="4" stroke-linejoin="round"/>${[-60, -20, 20, 60].map(a => `<path d="M${a} -80V-30" stroke="#fff" stroke-width="8" opacity=".5"/>`).join('')}</g>`;
  const tag = (x, y, k, t) => `<g transform="translate(${x} ${y}) scale(${k})"><path d="M-40 -20H30L48 0L30 20H-40Z" fill="#f2b134" stroke="#b07d14" stroke-width="3"/><circle cx="34" cy="0" r="4" fill="#fff"/><text x="-6" y="8" text-anchor="middle" font-family="Cairo, sans-serif" font-weight="800" font-size="20" fill="#5a3a14">${t}</text></g>`;
  const books = (x, y, k) => `<g transform="translate(${x} ${y}) scale(${k})">${['#e2603f', '#23799f', '#2e9e6b', '#9b6bd3', '#f2b134'].map((c, i) => `<rect x="${-50 + i * 20}" y="${-50 + (i % 2) * 6}" width="17" height="${50 - (i % 2) * 6}" rx="2" fill="${c}" stroke="#1f3d57" stroke-width="2"/>`).join('')}</g>`;
  let inside = `<ellipse cx="300" cy="1010" rx="270" ry="160" fill="#fde8d0" opacity=".8"/><ellipse cx="930" cy="1000" rx="250" ry="150" fill="#e4f1d0" opacity=".7"/><ellipse cx="930" cy="320" rx="280" ry="200" fill="#fdeedd" opacity=".6"/>`;
  for (let i = 0; i < 26; i++) { const x = f(90 + rnd() * 1040), y = f(160 + rnd() * 1000); inside += tuft(x, y); }
  let s = island([[0, '#e6f3d6'], [.5, '#f3ecd0'], [1, '#e8f0d0']], ['#f3e6b8', '#f6efd2'], inside);
  s += stall(260, 520, 1.1, '#e2603f') + books(260, 540, 1) + stall(940, 470, 1, '#23799f') + tag(930, 480, 1.1, '٢٤٦') + tag(230, 900, 1.2, '٤٨٥') + tag(900, 760, 1, '١٠٠٠');
  s += board(600, 640, 300, 210, '<g transform="translate(-140 -90) scale(.82)">' + strip(D.g3Column({ pic: { a: 375, b: 283, op: '+' } })) + '</g>');
  s += crate(400, 1150, 1, '+') + crate(458, 1162, .9, '−') + crate(512, 1154, .8, '١');
  s += at(1090, 140, 2.2, A.sun(26)) + cloud(140, 110, .8, .85) + cloud(600, 70, .7, .85) + '</svg>';
  save('map_mg3u4.svg', s);
  let b = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice">
<defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d6ecf8"/><stop offset=".6" stop-color="#fdf0dc"/><stop offset="1" stop-color="#f1e2c6"/></linearGradient></defs>
<rect width="1600" height="1000" fill="url(#g)"/>
${cloud(260, 170, 1.5, .9)}${cloud(820, 110, 1.1, .8)}${cloud(1300, 200, 1, .7)}
<path d="M0 820H1600V1000H0Z" fill="#e8d3a0"/>${stall(260, 820, 1.8, '#e2603f')}${stall(1320, 830, 1.6, '#23799f')}${tag(800, 900, 1.6, '٢٠٠')}
${at(1300, 150, 2.4, A.sun(26))}</svg>`;
  save('bg_mg3u4.svg', b);
})();

/* ---------- Grade 3 · Unit 5 · Length: a town island with roads, a straight path, a measuring tape and a km sign ---------- */
(function () {
  seed = 73;
  const D = ctx.window.CH_DIAGRAMS;
  const strip = s => s.replace(/^<svg[^>]*>/, '').replace(/<\/svg>$/, '');
  const tapeRoll = (x, y, k) => `<g transform="translate(${x} ${y}) scale(${k})"><circle r="44" fill="#f2b134" stroke="#b07d14" stroke-width="5"/><circle r="14" fill="#fff" stroke="#b07d14" stroke-width="4"/><rect x="40" y="18" width="160" height="22" fill="#fdf3c4" stroke="#b08a14" stroke-width="3"/>${[0, 1, 2, 3, 4, 5, 6, 7].map(i => `<path d="M${52 + i * 20} 18V${i % 2 ? 26 : 32}" stroke="#1f3d57" stroke-width="2"/>`).join('')}</g>`;
  const sign = (x, y, k, t) => `<g transform="translate(${x} ${y}) scale(${k})"><path d="M0 0V-90" stroke="#8a5a28" stroke-width="7"/><path d="M-50 -110H40L60 -92L40 -74H-50Z" fill="#2e9e6b" stroke="#1f6e46" stroke-width="4"/><text x="0" y="-84" text-anchor="middle" font-family="Cairo, sans-serif" font-weight="800" font-size="26" fill="#fff">${t}</text></g>`;
  const house = (x, y, k, c) => `<g transform="translate(${x} ${y}) scale(${k})"><rect x="-34" y="-20" width="68" height="50" fill="#fde3cf" stroke="#1f3d57" stroke-width="4"/><path d="M-42 -20L0 -54L42 -20Z" fill="${c}" stroke="#1f3d57" stroke-width="4"/><rect x="-9" y="6" width="18" height="24" fill="#8a5a28"/></g>`;
  let inside = `<ellipse cx="300" cy="1010" rx="270" ry="160" fill="#e4f1d0" opacity=".8"/><ellipse cx="930" cy="1000" rx="250" ry="150" fill="#dcecf6" opacity=".7"/><ellipse cx="930" cy="320" rx="280" ry="200" fill="#fdeedd" opacity=".6"/>`;
  for (let i = 0; i < 26; i++) { const x = f(90 + rnd() * 1040), y = f(160 + rnd() * 1000); inside += tuft(x, y); }
  let s = island([[0, '#e6f3d6'], [.5, '#e9efd8'], [1, '#e8f0d0']], ['#f3e6b8', '#f6efd2'], inside);
  s += house(230, 520, 1.2, '#e2603f') + house(960, 480, 1.1, '#9b6bd3') + sign(900, 820, 1, '١ كم') + tapeRoll(200, 900, 1);
  s += board(600, 640, 300, 210, '<g transform="translate(-150 -92) scale(.86)">' + strip(D.g3Map({ pic: { a: 'بيت دينا', b: 'المدرسة', l1: 700, l2: 550, d: 1100, ia: 'house', ib: 'school' } })) + '</g>');
  s += crate(400, 1150, 1, 'م') + crate(458, 1162, .9, 'كم') + crate(512, 1154, .8, 'سم');
  s += at(1090, 140, 2.2, A.sun(26)) + cloud(140, 110, .8, .85) + cloud(600, 70, .7, .85) + '</svg>';
  save('map_mg3u5.svg', s);
  let b = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice">
<defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d6ecf8"/><stop offset=".6" stop-color="#eef4f8"/><stop offset="1" stop-color="#dfe9d4"/></linearGradient></defs>
<rect width="1600" height="1000" fill="url(#g)"/>
${cloud(260, 170, 1.5, .9)}${cloud(820, 110, 1.1, .8)}${cloud(1300, 200, 1, .7)}
<path d="M0 820H1600V1000H0Z" fill="#cfe3b0"/>${house(220, 860, 1.8, '#e2603f')}${sign(1350, 900, 1.5, '١ كم')}${tapeRoll(760, 900, 1.3)}
${at(1300, 150, 2.4, A.sun(26))}</svg>`;
  save('bg_mg3u5.svg', b);
})();

/* ---------- Grade 3 · Unit 6 · Organizing Data: a survey island with a bar-graph board, a tally board and clipboards ---------- */
(function () {
  seed = 79;
  const D = ctx.window.CH_DIAGRAMS;
  const strip = s => s.replace(/^<svg[^>]*>/, '').replace(/<\/svg>$/, '');
  const clip = (x, y, k) => `<g transform="translate(${x} ${y}) scale(${k})"><rect x="-34" y="-44" width="68" height="88" rx="6" fill="#c98b4a" stroke="#8a5a28" stroke-width="4"/><rect x="-26" y="-34" width="52" height="70" fill="#fff"/><rect x="-14" y="-52" width="28" height="14" rx="4" fill="#9aa9b5" stroke="#1f3d57" stroke-width="3"/>${[0, 1, 2].map(i => `<path d="M-18 ${-20 + i * 18}h8" stroke="#2e9e6b" stroke-width="4"/><path d="M-4 ${-20 + i * 18}h22" stroke="#9aa9b5" stroke-width="4"/>`).join('')}</g>`;
  const tallyBoard = (x, y, k) => `<g transform="translate(${x} ${y}) scale(${k})"><rect x="-70" y="-40" width="140" height="80" rx="8" fill="#2f5d50" stroke="#8a5a28" stroke-width="6"/>${[0, 1].map(g => [0, 1, 2, 3].map(i => `<path d="M${-50 + g * 50 + i * 9} -20V20" stroke="#fff" stroke-width="4" stroke-linecap="round"/>`).join('') + `<path d="M${-56 + g * 50} 12L${-18 + g * 50} -12" stroke="#fff" stroke-width="4" stroke-linecap="round"/>`).join('')}</g>`;
  let inside = `<ellipse cx="300" cy="1010" rx="270" ry="160" fill="#fde8d0" opacity=".8"/><ellipse cx="930" cy="1000" rx="250" ry="150" fill="#e4f1d0" opacity=".7"/><ellipse cx="930" cy="320" rx="280" ry="200" fill="#fdeedd" opacity=".6"/>`;
  for (let i = 0; i < 26; i++) { const x = f(90 + rnd() * 1040), y = f(160 + rnd() * 1000); inside += tuft(x, y); }
  let s = island([[0, '#e6f3d6'], [.5, '#f3ecd0'], [1, '#e8f0d0']], ['#f3e6b8', '#f6efd2'], inside);
  s += tallyBoard(260, 500, 1.2) + clip(950, 470, 1.1) + clip(230, 900, 1) + tallyBoard(900, 780, .9);
  s += board(600, 640, 300, 230, '<g transform="translate(-145 -100) scale(.82)">' + strip(D.g3Bars({ title: '', max: 10, step: 1, bars: [['', null, 9], ['', null, 7], ['', null, 3], ['', null, 6]] })) + '</g>');
  s += crate(400, 1150, 1, '٥') + crate(458, 1162, .9, '١٠') + crate(512, 1154, .8, '٢٠');
  s += at(1090, 140, 2.2, A.sun(26)) + cloud(140, 110, .8, .85) + cloud(600, 70, .7, .85) + '</svg>';
  save('map_mg3u6.svg', s);
  let b = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice">
<defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d6ecf8"/><stop offset=".6" stop-color="#fdf0e6"/><stop offset="1" stop-color="#e7efd2"/></linearGradient></defs>
<rect width="1600" height="1000" fill="url(#g)"/>
${cloud(260, 170, 1.5, .9)}${cloud(820, 110, 1.1, .8)}${cloud(1300, 200, 1, .7)}
<path d="M0 820H1600V1000H0Z" fill="#cfe3b0"/>${tallyBoard(260, 860, 1.6)}${clip(1320, 870, 1.4)}
${at(1300, 150, 2.4, A.sun(26))}</svg>`;
  save('bg_mg3u6.svg', b);
})();

/* ---------- Grade 3 · Units 7-10: mental maths (jumps), division with remainders (plates), big numbers (number line) ---------- */
[['mg3u7', 83, 'g3Jumps', { a: 33, jumps: [40, 6], sign: '+', know: 1 }, ['#e6f3d6', '#fdf0d8', '#e8f0d0'], '#fdeedd', ['+', '−', '١٠']],
 ['mg3u8', 89, 'g3Rem', { total: 17, per: 3, icon: 'candy' }, ['#f3e6f6', '#fdeedd', '#e8f0d0'], '#f6e3ef', ['÷', '٣', 'ب']],
 ['mg3u9', 97, 'g3NumLine', { from: 80000, to: 120000, major: 10000, marks: [[84000, 'أ']] }, ['#e3eef8', '#eef3e0', '#e8f0d0'], '#e3eef8', ['١٠٠٠', '٠٠٠', '>']],
 ['mg3u10', 101, 'g3Column', { a: 26, b: 3, op: 'x' }, ['#fdeee0', '#eef6e6', '#e8f0d0'], '#fde3cf', ['×', '١٠', '٣']]
].forEach(([id, sd, fig, pic, pal, blob, crates]) => {
  seed = sd;
  const D = ctx.window.CH_DIAGRAMS;
  const strip = s => s.replace(/^<svg[^>]*>/, '').replace(/<\/svg>$/, '');
  const coin = (x, y, k, t) => `<g transform="translate(${x} ${y}) scale(${k})"><circle r="40" fill="#f2c230" stroke="#b08a14" stroke-width="6"/><circle r="30" fill="none" stroke="#b08a14" stroke-width="3"/><text y="12" text-anchor="middle" font-family="Cairo, sans-serif" font-weight="800" font-size="34" fill="#7a5a10">${t}</text></g>`;
  let inside = `<ellipse cx="300" cy="1010" rx="270" ry="160" fill="${blob}" opacity=".8"/><ellipse cx="930" cy="1000" rx="250" ry="150" fill="#e4f1d0" opacity=".7"/><ellipse cx="930" cy="320" rx="280" ry="200" fill="#fdeedd" opacity=".6"/>`;
  for (let i = 0; i < 26; i++) { const x = f(90 + rnd() * 1040), y = f(160 + rnd() * 1000); inside += tuft(x, y); }
  let s = island([[0, pal[0]], [.5, pal[1]], [1, pal[2]]], ['#f3e6b8', '#f6efd2'], inside);
  s += coin(250, 500, 1.2, crates[0]) + coin(960, 470, 1.1, crates[1]) + coin(230, 900, 1, crates[2]);
  s += board(600, 640, 300, 210, '<g transform="translate(-150 -92) scale(.86)">' + strip(D[fig]({ pic })) + '</g>');
  s += crate(400, 1150, 1, crates[0]) + crate(458, 1162, .9, crates[1]) + crate(512, 1154, .8, crates[2]);
  s += at(1090, 140, 2.2, A.sun(26)) + cloud(140, 110, .8, .85) + cloud(600, 70, .7, .85) + '</svg>';
  save(`map_${id}.svg`, s);
  let b = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice">
<defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d6ecf8"/><stop offset=".6" stop-color="${pal[1]}"/><stop offset="1" stop-color="#e7efd2"/></linearGradient></defs>
<rect width="1600" height="1000" fill="url(#g)"/>
${cloud(260, 170, 1.5, .9)}${cloud(820, 110, 1.1, .8)}${cloud(1300, 200, 1, .7)}
<path d="M0 820H1600V1000H0Z" fill="#cfe3b0"/>${coin(260, 880, 1.6, crates[0])}${coin(1330, 880, 1.4, crates[1])}
${at(1300, 150, 2.4, A.sun(26))}</svg>`;
  save(`bg_${id}.svg`, b);
});
