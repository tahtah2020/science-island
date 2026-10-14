/* Owner tool (not part of the game): draws the maps and page backgrounds of Prep 2 from the drawing functions in p2_art.js (and the shared shapes of g4_art.js).
   Run from the site folder:  node science/tools/make_p2_maps.js   ->  science/assets/map_p2u1.svg, bg_p2u1.svg (and the next units as they are added)
   STOPS are the five stops in map pixels (1224 x 1285), the same as the other maps; keep them in step with map.stops in chapters.js (percent). */
const fs = require('fs'), vm = require('vm'), path = require('path');
const ROOT = path.join(__dirname, '..');
const ctx = { window: {} };
['g4_art.js', 'p2_art.js'].forEach(f => vm.runInNewContext(fs.readFileSync(path.join(ROOT, f), 'utf8'), ctx));
const A = ctx.window.G4ART, P = ctx.window.P2ART, at = A.at;   // A: shared shapes (blob, sun…), P: the Prep 2 drawings
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

/* ---------- Unit 1 · Matter and Energy: a frozen shore with icebergs, a lab of flames and thermometers, and a warm sunny beach ---------- */
(function () {
  seed = 29;
  const iceberg = (x, y, k) => `<g transform="translate(${x} ${y}) scale(${k})"><path d="M-70 0L-46 -60L-18 -86L8 -70L30 -104L58 -40L76 0Z" fill="#f4fbff" stroke="#9cd2ea" stroke-width="4" stroke-linejoin="round"/><path d="M-18 -86L-8 -30L-30 0M30 -104L22 -40L40 0" fill="none" stroke="#cdeaf6" stroke-width="4"/><path d="M-82 2H88" stroke="#8fd3ee" stroke-width="6" stroke-linecap="round"/></g>`;
  const flake = (x, y, k) => `<g transform="translate(${x} ${y}) scale(${k})" stroke="#ffffff" stroke-width="3" stroke-linecap="round">${[0, 60, 120].map(a => `<path d="M0 -10V10" transform="rotate(${a})"/>`).join('')}</g>`;
  const wave = (x, y, k, col = '#e5533d') => `<g transform="translate(${x} ${y}) scale(${k})"><path d="M0 0c6 -6 12 6 18 0s12 6 18 0s12 6 18 0" fill="none" stroke="${col}" stroke-width="4" stroke-linecap="round"/><path d="M54 0l-9 -6m9 6l-9 6" stroke="${col}" stroke-width="4" stroke-linecap="round"/></g>`;
  let inside = `<ellipse cx="300" cy="1010" rx="270" ry="160" fill="#e9f6fc" opacity=".85"/><ellipse cx="930" cy="1000" rx="250" ry="150" fill="#ffe2c4" opacity=".7"/><ellipse cx="930" cy="320" rx="280" ry="200" fill="#fde9b8" opacity=".6"/><ellipse cx="300" cy="330" rx="230" ry="160" fill="#d6ecf7" opacity=".7"/>`;
  for (let i = 0; i < 34; i++) { const x = f(90 + rnd() * 1040), y = f(140 + rnd() * 1040); inside += x < 560 && y > 800 ? flake(x, y, .9) : tuft(x, y); }
  let s = island([[0, '#cfe9f5'], [.5, '#dff0d0'], [1, '#f6e3bd']], ['#f3e6b8', '#ecebdc'], inside);
  /* 1 icebergs and ice cubes by the cold shore */
  s += iceberg(150, 960, 1.05) + iceberg(420, 1180, .7);
  [[250, 1150, 10], [300, 1170, -8], [270, 1190, 20]].forEach(([x, y, r]) => { s += `<rect x="${x - 18}" y="${y - 18}" width="36" height="36" rx="7" transform="rotate(${r} ${x} ${y})" fill="#f4fbff" stroke="#9cd2ea" stroke-width="4"/>`; });
  /* 2 a beaker of boiling water on a burner, with a big thermometer */
  s += at(1000, 950, 1.9, P.burner(true)) + at(1000, 956, 1.9, P.beaker({ fill: '#a9dcf5', level: .55, bubbles: 8, steam: 3 })) + at(1110, 960, 1.5, P.thermometer(100, { min: -20, max: 120, len: 130 }));
  /* 3 the three states, as a sign */
  s += board(230, 610, 300, 130, ['solid', 'liquid', 'gas'].map((k, i) => at(-96 + i * 96, -6, 1, P.lens(k, 38, { r: 4.2, k: 'm' + i }))).join(''));
  /* 4 a pot on a campfire (conduction, convection, radiation) */
  s += at(1000, 400, 1.15, P.potOnFire());
  /* the warm sun sends its rays (radiation) */
  s += sunAt(1090, 140, 2.2) + wave(980, 170, 1.4, '#f0a43a') + wave(1010, 230, 1.4, '#f0a43a');
  /* a kettle-like pot of steam and a thermos near the trail */
  s += at(590, 1170, 1.1, P.thermos()) + at(440, 450, 1, P.boilingPot());
  s += tree(820, 1190, .8, ['#96d47c', '#5fae58']) + tree(330, 330, .7, ['#9fd6c9', '#5aa697']) + tree(470, 830, .75);
  s += cloud(140, 110, .8, .85) + cloud(560, 70, .7, .85) + '</svg>';
  save('map_p2u1.svg', s);

  let b = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice">
<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#d6ecf8"/><stop offset=".5" stop-color="#eef4fb"/><stop offset="1" stop-color="#fbe9d6"/></linearGradient></defs>
<rect width="1600" height="1000" fill="url(#g)"/>
${cloud(260, 170, 1.5, .9)}${cloud(820, 110, 1.1, .8)}${cloud(1300, 200, 1, .7)}
<path d="M0 820C300 790 620 840 900 812C1180 784 1400 810 1600 802V1000H0Z" fill="#d9b27c"/><path d="M0 820C300 790 620 840 900 812C1180 784 1400 810 1600 802" fill="none" stroke="#a8834f" stroke-width="6" opacity=".5"/>`;
  b += iceberg(200, 830, 1.8);
  b += at(560, 840, 2, P.beaker({ fill: '#a9dcf5', level: .4, ice: true })) + at(780, 840, 2, P.beaker({ fill: '#a9dcf5', level: .6 })) + at(1000, 840, 2, P.beaker({ fill: '#a9dcf5', level: .5, bubbles: 7, steam: 3 }));
  b += at(1220, 600, 2.4, P.lens('gas', 60, { r: 6, k: 'bg1' })) + at(380, 420, 1.8, P.lens('solid', 60, { r: 6, k: 'bg2' }));
  b += sunAt(1450, 150, 2.6) + wave(1300, 180, 1.8, '#f0a43a') + '</svg>';
  save('bg_p2u1.svg', b);
})();
