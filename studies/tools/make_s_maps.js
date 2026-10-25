/* Owner tool (not part of the game): draws the map and page background of the Social Studies units from studies/g4_art.js and the shared shapes of science/g4_art.js.
   Run from the site folder:  node studies/tools/make_s_maps.js   ->  studies/assets/map_sg4u1.svg, bg_sg4u1.svg
   STOPS are the five stops in map pixels (1224 x 1285); keep them in step with map.stops in chapters.js (percent). */
const fs = require('fs'), vm = require('vm'), path = require('path');
const ROOT = path.join(__dirname, '..', '..');
const ctx = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(ROOT, 'science/g4_art.js'), 'utf8'), ctx);
vm.runInNewContext(fs.readFileSync(path.join(ROOT, 'studies/g4_art.js'), 'utf8'), ctx);
const A = ctx.window.G4ART, S = ctx.window.S4ART, at = A.at;
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
function save(name, s) { s = s.replace(/\n\s+/g, '\n'); fs.writeFileSync(path.join(ROOT, 'studies/assets', name), s); console.log(name, (s.length / 1024).toFixed(1) + ' KB'); }
const board = (x, y, w, h, inner) => `<g transform="translate(${x} ${y})"><path d="M${-w / 2 + 20} ${h / 2}v46M${w / 2 - 20} ${h / 2}v46" stroke="#a8834f" stroke-width="8" stroke-linecap="round"/><rect x="${-w / 2}" y="${-h / 2}" width="${w}" height="${h}" rx="14" fill="#fffaf0" stroke="#a8834f" stroke-width="6"/>${inner}</g>`;


const rose = (x, y, k) => `<g transform="translate(${x} ${y}) scale(${k})"><circle r="70" fill="#fffaf0" stroke="#a8834f" stroke-width="6"/>${S.compass(60)}</g>`;
const sign = (x, y, w, h, inner) => `<g transform="translate(${x} ${y})"><path d="M${-w / 2 + 20} ${h / 2}v46M${w / 2 - 20} ${h / 2}v46" stroke="#a8834f" stroke-width="8" stroke-linecap="round"/><rect x="${-w / 2}" y="${-h / 2}" width="${w}" height="${h}" rx="14" fill="#fffaf0" stroke="#a8834f" stroke-width="6"/>${inner}</g>`;
const post = (x, y, t) => `<g transform="translate(${x} ${y})"><rect x="-6" y="-60" width="12" height="100" fill="#a8834f"/><path d="M6 -56h60l16 14l-16 14h-60z" fill="#fde0bd" stroke="#a8834f" stroke-width="4" stroke-linejoin="round"/><text x="34" y="-36" text-anchor="middle" direction="ltr" font-family="Cairo,sans-serif" font-size="20" font-weight="900" fill="#1f3d57">${t}</text></g>`;
const bld = (x, y, k, ico) => `<g transform="translate(${x} ${y}) scale(${k})"><ellipse cy="26" rx="46" ry="12" fill="#000" opacity=".08"/>${S.I[ico]()}</g>`;
function build(id, deco, bgdeco, rivers = true) {
  seed = 31;
  let inside = `<ellipse cx="300" cy="1010" rx="270" ry="160" fill="#f6dfb0" opacity=".8"/><ellipse cx="930" cy="1000" rx="250" ry="150" fill="#d8efd0" opacity=".7"/><ellipse cx="930" cy="320" rx="280" ry="200" fill="#f3d6a8" opacity=".6"/><ellipse cx="300" cy="300" rx="250" ry="180" fill="#e4efc8" opacity=".6"/>`;
  /* the Nile: a ribbon across the island */
  inside += `<path d="M1260 120C980 300 1100 520 760 620S300 760 -20 880" fill="none" stroke="#8fd3ee" stroke-width="60" stroke-linecap="round" opacity=".9"/><path d="M1260 120C980 300 1100 520 760 620S300 760 -20 880" fill="none" stroke="#c6ecf8" stroke-width="10" stroke-linecap="round" stroke-dasharray="2 34"/>`;
  for (let i = 0; i < 26; i++) { const x = f(90 + rnd() * 1040), y = f(140 + rnd() * 1040); inside += tuft(x, y); }
  let s = island([[0, '#f7e0b0'], [.5, '#e3efc4'], [1, '#f4dcae']], ['#f3e6b8', '#f6efd2'], inside);
  s += deco;
  s += at(470, 880, 1.1, A.palm()) + at(860, 820, 1.2, A.palm()) + at(560, 360, 1, A.papyrus());
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


build('sg4u1', rose(990, 1010, 1.5) + bld(190, 1000, 1.7, 'school') + bld(1000, 280, 1.6, 'mosque') + bld(250, 330, 1.6, 'house') + bld(660, 1140, 1.5, 'market') + bld(1060, 480, 1.4, 'museum'),
  `${bld(300, 760, 2.4, 'school')}${bld(1180, 770, 2.2, 'house')}${bld(760, 770, 2, 'mosque')}`);
build('sg4u2', bld(190, 1000, 1.7, 'hospital') + bld(1000, 280, 1.6, 'police') + bld(250, 330, 1.6, 'fire') + bld(660, 1140, 1.5, 'market') + bld(1060, 480, 1.4, 'factory') + bld(960, 1010, 1.6, 'school') + bld(130, 560, 1.4, 'post'),
  `${bld(300, 760, 2.4, 'hospital')}${bld(1180, 770, 2.2, 'market')}${bld(760, 770, 2, 'school')}${bld(520, 770, 1.8, 'police')}`);
build('sg5u1', rose(990, 1010, 1.5) + bld(190, 1000, 1.7, 'museum') + bld(1000, 280, 1.6, 'mosque') + bld(250, 330, 1.6, 'house') + bld(660, 1140, 1.5, 'market') + bld(1060, 480, 1.4, 'school'),
  `${bld(300, 760, 2.4, 'museum')}${bld(1180, 770, 2.2, 'house')}${bld(760, 770, 2, 'mosque')}`);
build('sg6u1', rose(990, 1010, 1.5) + bld(190, 1000, 1.7, 'museum') + bld(1000, 280, 1.6, 'mosque') + bld(250, 330, 1.6, 'factory') + bld(660, 1140, 1.5, 'market') + bld(1060, 480, 1.4, 'school') + bld(130, 560, 1.4, 'house'),
  `${bld(300, 760, 2.4, 'museum')}${bld(1180, 770, 2.2, 'factory')}${bld(760, 770, 2, 'mosque')}`);
build('sg5u2', rose(990, 1010, 1.5) + bld(190, 1000, 1.7, 'museum') + bld(1000, 280, 1.6, 'house') + bld(250, 330, 1.6, 'market') + bld(660, 1140, 1.5, 'museum') + bld(1060, 480, 1.4, 'house'),
  `${bld(300, 760, 2.4, 'museum')}${bld(1180, 770, 2.2, 'house')}${bld(760, 770, 2, 'market')}`);
build('sg5u3', rose(990, 1010, 1.5) + bld(190, 1000, 1.7, 'factory') + bld(1000, 280, 1.6, 'house') + bld(250, 330, 1.6, 'market') + bld(660, 1140, 1.5, 'factory') + bld(1060, 480, 1.4, 'school'),
  `${bld(300, 760, 2.4, 'factory')}${bld(1180, 770, 2.2, 'house')}${bld(760, 770, 2, 'market')}`);
