/* Owner tool (not part of the game): draws the map and page background of the Arabic units with the shared shapes of science/g4_art.js.
   Run from the site folder:  node arabic/tools/make_a_maps.js   ->  arabic/assets/map_ag3u1.svg, bg_ag3u1.svg
   STOPS are the five stops in map pixels (1224 x 1285); keep them in step with map.stops in chapters.js (percent). */
const fs = require('fs'), vm = require('vm'), path = require('path');
const ROOT = path.join(__dirname, '..', '..');
const ctx = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(ROOT, 'science/g4_art.js'), 'utf8'), ctx);
const A = ctx.window.G4ART, at = A.at;
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
function save(name, s) { s = s.replace(/\n\s+/g, '\n'); fs.writeFileSync(path.join(ROOT, 'arabic/assets', name), s); console.log(name, (s.length / 1024).toFixed(1) + ' KB'); }

/* ---- small hand-drawn things for the Arabic island (flat soft pastel, thick outlines) ---- */
const K = '#1f3d57';
const g = (x, y, k, inner) => `<g transform="translate(${x} ${y}) scale(${k})">${inner}</g>`;
const shadow = '<ellipse cy="30" rx="48" ry="12" fill="#000" opacity=".08"/>';
const pot = (x, y, k) => g(x, y, k, `${shadow}<path d="M-26 0h52l-8 34h-36z" fill="#e2603f" stroke="${K}" stroke-width="3" stroke-linejoin="round"/><rect x="-30" y="-8" width="60" height="12" rx="4" fill="#ee7a57" stroke="${K}" stroke-width="3"/><path d="M0 -8v-44" stroke="#3f8f4c" stroke-width="5" stroke-linecap="round"/><path d="M0 -34q-30 -4 -32 -28q28 -2 32 28zM0 -46q30 -4 32 -28q-28 -2 -32 28z" fill="#7cc86e" stroke="#3f8f4c" stroke-width="3" stroke-linejoin="round"/>`);
const book = (x, y, k) => g(x, y, k, `${shadow}<path d="M-46 -26q23 -10 46 4q23 -14 46 -4v52q-23 -10 -46 4q-23 -14 -46 -4z" fill="#fffaf0" stroke="${K}" stroke-width="3.4" stroke-linejoin="round"/><path d="M0 -22v52" stroke="${K}" stroke-width="3"/><path d="M-36 -10q14 -5 28 2M-36 2q14 -5 28 2M-36 14q14 -5 28 2M8 -6q14 -7 28 -2M8 6q14 -7 28 -2M8 18q14 -7 28 -2" fill="none" stroke="#9fb7c6" stroke-width="2.6" stroke-linecap="round"/>`);
const pencil = (x, y, k) => g(x, y, k, `<ellipse cy="34" rx="40" ry="9" fill="#000" opacity=".08"/><g transform="rotate(-35)"><rect x="-9" y="-48" width="18" height="70" fill="#f2b134" stroke="${K}" stroke-width="3"/><path d="M-9 22h18l-9 22z" fill="#fde0bd" stroke="${K}" stroke-width="3" stroke-linejoin="round"/><path d="M-3.5 36h7l-3.5 8z" fill="${K}"/><rect x="-9" y="-60" width="18" height="14" rx="3" fill="#ee7a57" stroke="${K}" stroke-width="3"/></g>`);
const trophy = (x, y, k) => g(x, y, k, `${shadow}<path d="M-24 -40h48v22q0 22 -24 26q-24 -4 -24 -26z" fill="#f2b134" stroke="${K}" stroke-width="3.4" stroke-linejoin="round"/><path d="M-24 -34q-18 0 -16 14q2 12 18 14M24 -34q18 0 16 14q-2 12 -18 14" fill="none" stroke="${K}" stroke-width="3.4" stroke-linecap="round"/><rect x="-6" y="8" width="12" height="14" fill="#f2b134" stroke="${K}" stroke-width="3"/><rect x="-20" y="22" width="40" height="10" rx="3" fill="#d99a12" stroke="${K}" stroke-width="3"/><path d="M0 -32l5 10l11 1.6l-8 7.6l2 11l-10 -5.4l-10 5.4l2 -11l-8 -7.6l11 -1.6z" fill="#fff4d6"/>`);
const hive = (x, y, k) => g(x, y, k, `${shadow}<path d="M-34 24q-6 -52 34 -62q40 10 34 62z" fill="#f6c453" stroke="${K}" stroke-width="3.4" stroke-linejoin="round"/><path d="M-30 4h60M-33 -14h66" stroke="#d99a12" stroke-width="3.4"/><ellipse cx="0" cy="14" rx="9" ry="11" fill="${K}"/>`);
const tree = (x, y, k) => g(x, y, k, `${shadow}<rect x="-6" y="-8" width="12" height="38" rx="3" fill="#a8834f" stroke="${K}" stroke-width="3"/><circle cy="-24" r="30" fill="#8dcf7a" stroke="#3f8f4c" stroke-width="3.4"/><circle cx="-16" cy="-12" r="18" fill="#7cc86e" stroke="#3f8f4c" stroke-width="3"/><circle cx="18" cy="-14" r="16" fill="#9bd987" stroke="#3f8f4c" stroke-width="3"/>`);
const gate = (x, y, k) => g(x, y, k, `${shadow}<rect x="-44" y="-30" width="88" height="56" rx="6" fill="#fde0bd" stroke="${K}" stroke-width="3.4"/><path d="M-52 -30l52 -26l52 26z" fill="#e2603f" stroke="${K}" stroke-width="3.4" stroke-linejoin="round"/><path d="M-14 26v-18a14 14 0 0 1 28 0v18z" fill="#7cc86e" stroke="${K}" stroke-width="3"/><rect x="-36" y="-18" width="14" height="14" fill="#cfe8f6" stroke="${K}" stroke-width="2.6"/><rect x="22" y="-18" width="14" height="14" fill="#cfe8f6" stroke="${K}" stroke-width="2.6"/>`);
const flower = (x, y, k) => g(x, y, k, `<path d="M0 0v30" stroke="#3f8f4c" stroke-width="4" stroke-linecap="round"/>${[0, 72, 144, 216, 288].map(a => `<ellipse cy="-13" rx="7" ry="11" transform="rotate(${a})" fill="#ff9fb2" stroke="#d96a82" stroke-width="2"/>`).join('')}<circle r="7" fill="#f2b134"/>`);
function build(id, deco, bgdeco) {
  seed = 41;
  let inside = `<ellipse cx="300" cy="1010" rx="270" ry="160" fill="#d8efd0" opacity=".8"/><ellipse cx="930" cy="1000" rx="250" ry="150" fill="#fbe9c8" opacity=".7"/><ellipse cx="930" cy="320" rx="280" ry="200" fill="#e6f2c8" opacity=".7"/><ellipse cx="300" cy="360" rx="240" ry="170" fill="#fbe3e3" opacity=".6"/>`;
  for (let i = 0; i < 26; i++) { const x = f(90 + rnd() * 1040), y = f(140 + rnd() * 1040); inside += tuft(x, y); }
  let s = island([[0, '#e1f1c8'], [.5, '#f0f6d4'], [1, '#f7e8c4']], ['#f3e6b8', '#f6efd2'], inside);
  s += deco;
  s += tree(470, 900, 1.2) + tree(880, 820, 1.3) + flower(560, 400, 1) + flower(620, 420, .9) + flower(180, 700, 1) + flower(1060, 640, 1);
  s += at(1090, 140, 2.2, A.sun(26)) + cloud(140, 110, .8, .85) + cloud(560, 70, .7, .85) + '</svg>';
  save('map_' + id + '.svg', s);
  const b = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice">
<defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d6ecf8"/><stop offset=".6" stop-color="#fdf3dc"/><stop offset="1" stop-color="#e4f1c8"/></linearGradient></defs>
<rect width="1600" height="1000" fill="url(#g)"/>
${cloud(260, 170, 1.5, .9)}${cloud(820, 110, 1.1, .8)}${cloud(1300, 200, 1, .7)}
<path d="M0 780C300 750 620 810 900 780C1180 750 1400 780 1600 770V1000H0Z" fill="#bfe3a0"/><path d="M0 840C300 820 620 870 900 840C1180 820 1400 845 1600 835V1000H0Z" fill="#a9d68a" opacity=".7"/>
<path d="M0 900C400 860 900 940 1600 880V1000H0Z" fill="#8fd3ee" opacity=".7"/>
${bgdeco}
${at(1300, 150, 2.4, A.sun(26))}</svg>`;
  save('bg_' + id + '.svg', b);
}

/* Grade 3 · Unit 1 «العمل والأمل»: a plant, a book, the school gate, a trophy, a hive */
build('ag3u1', pot(190, 1000, 1.8) + book(1000, 280, 1.7) + gate(250, 330, 1.6) + trophy(660, 1140, 1.6) + hive(1060, 480, 1.5) + pencil(130, 560, 1.4),
  `${pot(300, 760, 2.4)}${hive(1180, 770, 2.2)}${book(760, 770, 2)}`);

/* Grade 3 · Unit 2 «صفاتي الجميلة»: flowers, a book, a trophy, a heart-like tree, a pencil, a gate */
build('ag3u2', flower(190, 1000, 2.2) + flower(260, 1040, 1.6) + book(1000, 280, 1.7) + tree(250, 330, 1.5) + trophy(660, 1140, 1.6) + pencil(1060, 500, 1.5) + gate(130, 560, 1.3),
  `${flower(300, 780, 3)}${flower(420, 800, 2.4)}${book(760, 770, 2)}${trophy(1180, 770, 2)}`);
