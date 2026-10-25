/* Owner tool (not part of the game): draws the map and page background of the English units from english/g4_art.js and the shared shapes of science/g4_art.js.
   Run from the site folder:  node english/tools/make_e_maps.js   ->  english/assets/map_eg4u1.svg, bg_eg4u1.svg, and the same for eg5u1 … eg5u6 (grade 5 uses english/g5_art.js and a palette per unit)
   STOPS are the five stops in map pixels (1224 x 1285); keep them in step with map.stops in chapters.js (percent). */
const fs = require('fs'), vm = require('vm'), path = require('path');
const ROOT = path.join(__dirname, '..', '..');
const ctx = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(ROOT, 'science/g4_art.js'), 'utf8'), ctx);
vm.runInNewContext(fs.readFileSync(path.join(ROOT, 'english/g4_art.js'), 'utf8'), ctx);
vm.runInNewContext(fs.readFileSync(path.join(ROOT, 'english/g5_art.js'), 'utf8'), ctx);
const A = ctx.window.G4ART, E = ctx.window.E4ART, E5 = ctx.window.E5ART, at = A.at;
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
function save(name, s) { s = s.replace(/\n\s+/g, '\n'); fs.writeFileSync(path.join(ROOT, 'english/assets', name), s); console.log(name, (s.length / 1024).toFixed(1) + ' KB'); }

/* a round badge with one of the five drawings, standing in the scenery */
const badge = (x, y, k, id, src = E) => `<g transform="translate(${x} ${y}) scale(${k})"><ellipse cy="52" rx="46" ry="11" fill="#000" opacity=".08"/><circle r="46" fill="${src.TINT[id]}" stroke="#fff" stroke-width="4"/><circle r="46" fill="none" stroke="#d8c9a6" stroke-width="1.6"/><g transform="scale(.9)">${src.D[id]()}</g></g>`;
const flower = (x, y, c) => `<g transform="translate(${x} ${y})"><path d="M0 0V26" stroke="#4f9f52" stroke-width="4" stroke-linecap="round"/>${[0, 72, 144, 216, 288].map(a => `<ellipse cx="0" cy="-9" rx="5.4" ry="8" fill="${c}" transform="rotate(${a})"/>`).join('')}<circle r="5" fill="#f2b134"/></g>`;
const apple = (x, y, k = 1) => `<g transform="translate(${x} ${y}) scale(${k})"><path d="M0 -14Q-18 -20 -22 -2Q-22 22 -6 24Q0 22 6 24Q22 22 22 -2Q18 -20 0 -14Z" fill="#e2603f" stroke="#b24428" stroke-width="2.4" stroke-linejoin="round"/><path d="M0 -14Q2 -26 10 -28" fill="none" stroke="#6b4a2a" stroke-width="3" stroke-linecap="round"/><path d="M4 -22Q16 -30 20 -18Q10 -14 4 -22Z" fill="#6fbf63"/></g>`;
const LILAC = { blobs: ['#e8dcf6', '#d8efd0', '#fbe6d4', '#e4efc8'], land: [[0, '#efe3fb'], [.5, '#e3efc4'], [1, '#f8e4cf']], sand: ['#f3e6b8', '#f6efd2'], sky: ['#e6defa', '#fdf3dc', '#e4f1c8'], hill: ['#bfe3a0', '#a9d68a', '#cdbdf0'], trail: undefined };
function build(id, deco, bgdeco, T = LILAC) {
  seed = 31;
  let inside = `<ellipse cx="300" cy="1010" rx="270" ry="160" fill="${T.blobs[0]}" opacity=".7"/><ellipse cx="930" cy="1000" rx="250" ry="150" fill="${T.blobs[1]}" opacity=".7"/><ellipse cx="930" cy="320" rx="280" ry="200" fill="${T.blobs[2]}" opacity=".6"/><ellipse cx="300" cy="300" rx="250" ry="180" fill="${T.blobs[3]}" opacity=".6"/>`;
  for (let i = 0; i < 26; i++) { const x = f(90 + rnd() * 1040), y = f(140 + rnd() * 1040); inside += tuft(x, y); }
  let s = island(T.land, T.sand, inside, T.trail);
  s += deco;
  s += [[470, 880, '#e2603f'], [860, 820, '#f2b134'], [560, 360, '#a678d8'], [700, 1100, '#e2603f'], [190, 700, '#f2b134'], [1060, 640, '#a678d8']].map(([x, y, c]) => flower(x, y, c)).join('');
  s += at(1090, 140, 2.2, A.sun(26)) + cloud(140, 110, .8, .85) + cloud(560, 70, .7, .85) + '</svg>';
  save('map_' + id + '.svg', s);
  const b = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice">
<defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${T.sky[0]}"/><stop offset=".6" stop-color="${T.sky[1]}"/><stop offset="1" stop-color="${T.sky[2]}"/></linearGradient></defs>
<rect width="1600" height="1000" fill="url(#g)"/>
${cloud(260, 170, 1.5, .9)}${cloud(820, 110, 1.1, .8)}${cloud(1300, 200, 1, .7)}
<path d="M0 780C300 750 620 810 900 780C1180 750 1400 780 1600 770V1000H0Z" fill="${T.hill[0]}"/><path d="M0 840C300 820 620 870 900 840C1180 820 1400 845 1600 835V1000H0Z" fill="${T.hill[1]}" opacity=".7"/>
<path d="M0 900C400 860 900 940 1600 880V1000H0Z" fill="${T.hill[2]}" opacity=".7"/>
${bgdeco}
${at(1300, 150, 2.4, A.sun(26))}</svg>`;
  save('bg_' + id + '.svg', b);
}

build('eg4u1', badge(120, 880, 1.4, 'eye') + badge(1010, 250, 1.4, 'ear') + badge(190, 330, 1.4, 'nose') + badge(640, 1150, 1.3, 'tongue') + badge(1060, 640, 1.4, 'palm') + apple(1000, 1040, 1.5) + apple(140, 600, 1.2),
  `${badge(300, 760, 1.9, 'eye')}${badge(760, 770, 1.7, 'ear')}${badge(1180, 770, 1.8, 'nose')}${apple(520, 800, 2)}`);

/* ---------- grade 5 ---------- */
const b5 = (x, y, k, id) => badge(x, y, k, id, E5);
const reed = (x, y, k = 1) => `<g transform="translate(${x} ${y}) scale(${k})" stroke="#5d9a4a" stroke-width="5" stroke-linecap="round" fill="none"><path d="M-14 0Q-18 -30 -10 -52"/><path d="M0 0Q2 -36 -2 -64"/><path d="M14 0Q18 -28 12 -50"/></g>`;
const cactus = (x, y, k = 1) => `<g transform="translate(${x} ${y}) scale(${k})"><rect x="-9" y="-48" width="18" height="52" rx="9" fill="#6fae5a" stroke="#4d8a42" stroke-width="2.4"/><path d="M-9 -20h-14q-4 0 -4 -4v-14" fill="none" stroke="#6fae5a" stroke-width="12" stroke-linecap="round"/><path d="M9 -28h14q4 0 4 -4v-12" fill="none" stroke="#6fae5a" stroke-width="12" stroke-linecap="round"/></g>`;
const heartDeco = (x, y, k = 1) => `<g transform="translate(${x} ${y}) scale(${k})"><path d="M0 18C-30 -4 -26 -26 -10 -26C-3 -26 0 -20 0 -16C0 -20 3 -26 10 -26C26 -26 30 -4 0 18Z" fill="#ef6a7a" stroke="#c0394e" stroke-width="2.4" stroke-linejoin="round"/></g>`;
const raindrop = (x, y, k = 1) => `<g transform="translate(${x} ${y}) scale(${k})"><path d="M0 -20Q16 2 0 14Q-16 2 0 -20Z" fill="#6fb8e8" stroke="#3c8cc4" stroke-width="2.4"/></g>`;
const NILE = { blobs: ['#d6efe2', '#cfe9b9', '#fbf0c8', '#b9e3e8'], land: [[0, '#d8f1e0'], [.5, '#e3efc4'], [1, '#f6e8c4']], sand: ['#f3e6b8', '#f6efd2'], sky: ['#cdeee6', '#fdf6dc', '#d9efb8'], hill: ['#a9dca0', '#92cf88', '#9fd8d8'] };
const BODY = { blobs: ['#fbd9dd', '#fdeccd', '#e8dcf6', '#d8efd0'], land: [[0, '#fde4e6'], [.5, '#fdf0d6'], [1, '#e8f1d2']], sand: ['#f6e3c2', '#f8eed6'], sky: ['#fbdede', '#fdf3dc', '#e4f1c8'], hill: ['#bfe3a0', '#a9d68a', '#f4c6cc'] };
const WEATHER = { blobs: ['#d6e6f8', '#dfe9c9', '#f6e4cf', '#cfdcee'], land: [[0, '#dbe9f8'], [.5, '#e6efd2'], [1, '#f6e6cf']], sand: ['#f0e4c0', '#f4eed8'], sky: ['#d3e3f6', '#f3f1e2', '#dcebc6'], hill: ['#a9d0a0', '#97c48e', '#b9cde8'] };
build('eg5u1', b5(130, 880, 1.4, 'crocodile') + b5(1010, 270, 1.4, 'weeds') + b5(200, 340, 1.4, 'insect') + b5(660, 1150, 1.3, 'fish') + b5(1060, 640, 1.4, 'bird') + reed(1000, 1040, 1.6) + reed(140, 610, 1.3),
  `${b5(300, 760, 1.9, 'river')}${b5(760, 770, 1.7, 'crocodile')}${b5(1180, 770, 1.8, 'bird')}${reed(520, 820, 2)}`, NILE);
build('eg5u2', b5(130, 880, 1.4, 'heart') + b5(1010, 270, 1.4, 'lungs') + b5(200, 340, 1.4, 'muscle') + b5(660, 1150, 1.3, 'blood') + b5(1060, 640, 1.4, 'vessels') + heartDeco(1000, 1040, 1.8) + heartDeco(140, 610, 1.4),
  `${b5(300, 760, 1.9, 'heart')}${b5(760, 770, 1.7, 'lungs')}${b5(1180, 770, 1.8, 'muscle')}${heartDeco(520, 810, 2)}`, BODY);
build('eg5u3', b5(130, 880, 1.4, 'thunderstorm') + b5(1010, 270, 1.4, 'sandstorm') + b5(200, 340, 1.4, 'flood') + b5(660, 1150, 1.3, 'drought') + b5(1060, 640, 1.4, 'wildfire') + raindrop(1000, 1040, 1.8) + cactus(140, 620, 1.3),
  `${b5(300, 760, 1.9, 'sandstorm')}${b5(760, 770, 1.7, 'thunderstorm')}${b5(1180, 770, 1.8, 'heatwave')}${raindrop(520, 810, 2)}`, WEATHER);

/* ---------- grade 5, units 4-6 (25 Oct 2026): the quiz and games use the owner's photos; the maps use the code drawings map* of g5_art.js ---------- */
const TOWN = { blobs: ['#fde4cf', '#e2f4dc', '#fdf0cf', '#ece2fb'], land: [[0, '#fde9d6'], [.5, '#eef3cf'], [1, '#f8e4cf']], sand: ['#f3e6b8', '#f6efd2'], sky: ['#fde4cf', '#fdf6e4', '#e4f1c8'], hill: ['#bfe3a0', '#a9d68a', '#f6cfa8'] };
const RES = { blobs: ['#e2f4dc', '#fdf0cf', '#dff1f7', '#ece2fb'], land: [[0, '#dff3d6'], [.5, '#eef3cf'], [1, '#f6ead0']], sand: ['#f0e4c0', '#f4eed8'], sky: ['#d9f0dc', '#fdf6e0', '#d9efb8'], hill: ['#a9d6a0', '#92c888', '#d9c89a'] };
const GLADES = { blobs: ['#d6efe2', '#cfe9c9', '#dff1f7', '#e6f2cc'], land: [[0, '#d3ecd9'], [.5, '#dfedc6'], [1, '#e9eccd']], sand: ['#e6e2bb', '#eff0d8'], sky: ['#cfeadf', '#f3f6e2', '#cfe6bd'], hill: ['#96c98e', '#7fb97a', '#a8d4c4'] };
build('eg5u4', b5(130, 880, 1.4, 'mapShop') + b5(1010, 270, 1.4, 'mapCottage') + b5(200, 340, 1.4, 'mapBarn') + b5(660, 1150, 1.3, 'mapWheat') + b5(1060, 640, 1.4, 'mapShop') + reed(1000, 1040, 1.6) + reed(140, 610, 1.3),
  `${b5(300, 760, 1.9, 'mapCottage')}${b5(760, 770, 1.7, 'mapShop')}${b5(1180, 770, 1.8, 'mapBarn')}${reed(520, 820, 2)}`, TOWN);
build('eg5u5', b5(130, 880, 1.4, 'mapSun') + b5(1010, 270, 1.4, 'mapGem') + b5(200, 340, 1.4, 'mapWheat') + b5(660, 1150, 1.3, 'mapGem') + b5(1060, 640, 1.4, 'mapSun') + raindrop(1000, 1040, 1.8) + reed(140, 610, 1.3),
  `${b5(300, 760, 1.9, 'mapGem')}${b5(760, 770, 1.7, 'mapSun')}${b5(1180, 770, 1.8, 'mapWheat')}${raindrop(520, 810, 2)}`, RES);
build('eg5u6', b5(130, 880, 1.4, 'crocodile') + b5(1010, 270, 1.4, 'mapOwl') + b5(200, 340, 1.4, 'mapCanoe') + b5(660, 1150, 1.3, 'mapTurtle') + b5(1060, 640, 1.4, 'bird') + reed(1000, 1040, 1.6) + reed(140, 610, 1.3),
  `${b5(300, 760, 1.9, 'mapCanoe')}${b5(760, 770, 1.7, 'crocodile')}${b5(1180, 770, 1.8, 'mapOwl')}${reed(520, 820, 2)}`, GLADES);
