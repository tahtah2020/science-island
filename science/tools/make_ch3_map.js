/* Owner tool (not part of the game): draws Chapter 3's map and page background from the chapter's own drawing functions.
   Run from the site folder:  node science/tools/make_ch3_map.js   ->  science/assets/map_ch3.svg, assets/bg_ch3.svg
   STOPS are the five stops in map pixels (1224 x 1285); keep them in step with map.stops in chapters.js (percent). */
const fs = require('fs'), vm = require('vm'), path = require('path');
const ROOT = path.join(__dirname, '..');
const ctx = { window: {} }; vm.runInNewContext(fs.readFileSync(path.join(ROOT, 'ch3_art.js'), 'utf8'), ctx);
const A = ctx.window.CH3ART;
let seed = 5; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
const f = n => (Math.round(n * 10) / 10);
const blob = pts => A.blob(pts);
function curve(pts) { let d = `M${pts[0][0]} ${pts[0][1]}`; for (let i = 0; i < pts.length - 1; i++) { const p0 = pts[Math.max(0, i - 1)], p1 = pts[i], p2 = pts[i + 1], p3 = pts[Math.min(pts.length - 1, i + 2)];
  d += `C${f(p1[0] + (p2[0] - p0[0]) / 6)} ${f(p1[1] + (p2[1] - p0[1]) / 6)} ${f(p2[0] - (p3[0] - p1[0]) / 6)} ${f(p2[1] - (p3[1] - p1[1]) / 6)} ${p2[0]} ${p2[1]}`; } return d; }

const W = 1224, H = 1285;
const SHORE = [[612, 58], [850, 84], [1050, 170], [1156, 350], [1170, 580], [1140, 820], [1096, 1030], [950, 1170], [740, 1226], [500, 1222], [290, 1170], [128, 1030], [66, 810], [58, 570], [96, 340], [214, 170], [400, 86]];
const LAND = SHORE.map(([x, y]) => [612 + (x - 612) * .93, 642 + (y - 642) * .935]);
const STOPS = [[300, 1060], [760, 900], [420, 680], [800, 470], [560, 200]];

const tree = (x, y, k, cols) => `<g transform="translate(${x} ${y}) scale(${k})"><ellipse cx="0" cy="4" rx="34" ry="9" fill="#000" opacity=".1"/><rect x="-7" y="-46" width="14" height="50" rx="5" fill="#9a7446"/>
  <g fill="${cols[0]}" stroke="${cols[1]}" stroke-width="3"><circle cx="-24" cy="-62" r="27"/><circle cx="24" cy="-62" r="27"/><circle cx="0" cy="-88" r="32"/></g>
  <circle cx="-10" cy="-96" r="9" fill="#fff" opacity=".22"/></g>`;
const tuft = (x, y) => `<path d="M${x - 8} ${y}q2 -14 6 -16M${x} ${y}q0 -18 2 -22M${x + 8} ${y}q-1 -12 -6 -16" fill="none" stroke="#6fb46a" stroke-width="3.4" stroke-linecap="round"/>`;
const cloud = (x, y, k, o = 1) => `<g transform="translate(${x} ${y}) scale(${k})" fill="#fff" opacity="${o}"><ellipse cx="0" cy="0" rx="60" ry="22"/><ellipse cx="-26" cy="-16" rx="30" ry="22"/><ellipse cx="20" cy="-22" rx="36" ry="27"/></g>`;
/* a young bean plant: the bigger g, the taller */
const seedling = (x, y, k, g = 1) => `<g transform="translate(${x} ${y}) scale(${k})"><path d="M0 0C-4 ${-14 * g} 4 ${-26 * g} 0 ${-40 * g}" fill="none" stroke="#7cc86e" stroke-width="5" stroke-linecap="round"/>
  <path d="M0 ${-40 * g}c-8 -14 -26 -12 -30 0c12 8 24 6 30 0z" fill="#6fbf63" stroke="#4f9f52" stroke-width="2"/><path d="M0 ${-40 * g}c8 -14 26 -12 30 0c-12 8 -24 6 -30 0z" fill="#7cc86e" stroke="#4f9f52" stroke-width="2"/></g>`;
/* a garden bed with rows of seedlings */
const bed = (x, y, w, h, rows, cols, g) => { let s = `<g transform="translate(${x} ${y})"><rect x="0" y="0" width="${w}" height="${h}" rx="18" fill="#a9794a" stroke="#8a5f38" stroke-width="5"/>`;
  for (let r = 0; r < rows; r++) { const yy = (h / (rows + .2)) * (r + .8); s += `<path d="M14 ${f(yy + 6)}h${w - 28}" stroke="#8a5f38" stroke-width="5" stroke-linecap="round" opacity=".55"/>`;
    for (let c = 0; c < cols; c++) s += seedling(f(26 + c * ((w - 52) / (cols - 1))), f(yy + 4), .5 + rnd() * .12, g); }
  return s + '</g>'; };
const can = (x, y, k) => `<g transform="translate(${x} ${y}) scale(${k})"><ellipse cx="0" cy="4" rx="46" ry="9" fill="#000" opacity=".1"/><path d="M-30 0V-46h60V0z" fill="#8fd3ee" stroke="#5aa9cd" stroke-width="4" stroke-linejoin="round"/><path d="M30 -34L66 -58" stroke="#5aa9cd" stroke-width="9" stroke-linecap="round"/><ellipse cx="70" cy="-61" rx="9" ry="13" transform="rotate(34 70 -61)" fill="#8fd3ee" stroke="#5aa9cd" stroke-width="4"/>
  <path d="M-30 -36C-58 -40 -58 -8 -30 -10" fill="none" stroke="#5aa9cd" stroke-width="7" stroke-linecap="round"/><g fill="#6cbde8"><circle cx="84" cy="-40" r="4"/><circle cx="92" cy="-26" r="4"/><circle cx="78" cy="-22" r="4"/></g></g>`;

let s = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}">
<defs>
  <linearGradient id="sea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c6ecf8"/><stop offset="1" stop-color="#8fd3ee"/></linearGradient>
  <linearGradient id="land" x1=".1" y1=".95" x2=".9" y2=".05"><stop offset="0" stop-color="#bfe59c"/><stop offset=".5" stop-color="#cfeaa6"/><stop offset=".8" stop-color="#dcefc4"/><stop offset="1" stop-color="#e2eef2"/></linearGradient>
  <linearGradient id="sand" x1=".1" y1=".95" x2=".9" y2=".05"><stop offset="0" stop-color="#f6e3ae"/><stop offset="1" stop-color="#ece7d8"/></linearGradient>
  <clipPath id="landClip"><path d="${blob(LAND)}"/></clipPath>
</defs>
<rect width="${W}" height="${H}" fill="url(#sea)"/>
<g fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".6">`;
[[90, 150], [1060, 1190], [1130, 90], [60, 1215], [200, 1250], [1010, 60], [30, 720], [1195, 700]].forEach(([x, y]) => { s += `<path d="M${x - 22} ${y}q11 -10 22 0t22 0"/>`; });
s += `</g>
<path d="${blob(SHORE.map(([x, y]) => [612 + (x - 612) * 1.035, 642 + (y - 642) * 1.03]))}" fill="#fff" opacity=".55"/>
<path d="${blob(SHORE)}" fill="url(#sand)" stroke="#e3cf9b" stroke-width="4"/>
<path d="${blob(LAND)}" fill="url(#land)"/>
<g clip-path="url(#landClip)">
  <ellipse cx="300" cy="1010" rx="260" ry="150" fill="#a8dc86" opacity=".55"/><ellipse cx="900" cy="1020" rx="240" ry="140" fill="#b4e092" opacity=".6"/>
  <ellipse cx="980" cy="300" rx="250" ry="200" fill="#e4f0f6" opacity=".9"/><ellipse cx="300" cy="300" rx="230" ry="160" fill="#d6edb4" opacity=".6"/>`;
for (let i = 0; i < 60; i++) { const x = 760 + rnd() * 420, y = 110 + rnd() * 400; if (x + y * .8 > 1120) s += `<circle cx="${f(x)}" cy="${f(y)}" r="${f(2.5 + rnd() * 2.5)}" fill="#fff" opacity=".9"/>`; }
for (let i = 0; i < 34; i++) { const x = 90 + rnd() * 1040, y = 560 + rnd() * 620; s += tuft(f(x), f(y)); }
s += '</g>';
/* the trail between the stops */
const TR = [[190, 1150], STOPS[0], [540, 1030], STOPS[1], [640, 780], STOPS[2], [590, 560], STOPS[3], [720, 310], STOPS[4], [470, 120]];
s += `<path d="${curve(TR)}" fill="none" stroke="#dcc48a" stroke-width="44" stroke-linecap="round"/><path d="${curve(TR)}" fill="none" stroke="#fbf0cf" stroke-width="34" stroke-linecap="round"/>
  <path d="${curve(TR)}" fill="none" stroke="#e6cf96" stroke-width="5" stroke-linecap="round" stroke-dasharray="4 22"/>`;
STOPS.forEach(([x, y]) => { s += `<ellipse cx="${x}" cy="${y + 6}" rx="62" ry="40" fill="#fbf0cf" stroke="#dcc48a" stroke-width="5"/>`; });
/* garden beds: from tiny sprouts to bigger seedlings */
s += bed(820, 1010, 250, 120, 2, 5, .55) + bed(120, 760, 190, 120, 2, 4, 1) + bed(880, 640, 210, 110, 2, 4, .8);
/* trees and a watering can */
const GREEN = ['#7cc86e', '#4f9f52'], GREEN2 = ['#96d47c', '#5fae58'];
s += tree(118, 950, 1.05, GREEN) + tree(420, 1195, .8, GREEN2) + tree(170, 470, 1, GREEN2) + tree(330, 250, .95, GREEN) + tree(250, 330, .8, GREEN2) + tree(760, 1185, .8, GREEN);
s += can(900, 1004, .9);
/* the big kidney bean, and the opened seed with its embryo */
s += `<g transform="translate(150 1120) rotate(-10) scale(1.7)"><ellipse cx="0" cy="34" rx="58" ry="10" fill="#000" opacity=".1"/>${A.bean()}</g>`;
s += `<g transform="translate(640 1140)"><g transform="scale(1.25)">${A.dish(78)}</g><g transform="translate(0 -52) scale(1.25)">${A.beanSplit({ open: 1 })}</g></g>`;
/* the three experiments: A sprouts in a warm place; B is dry, under water, or in the refrigerator */
s += `<g transform="translate(250 620) scale(1.5)">${A.station({ label: 'A', g: 1, thermo: false })}</g>`;
s += `<g transform="translate(1010 900) scale(1.35)">${A.station({ air: false, thermo: false })}</g>`;
s += `<g transform="translate(1010 520) scale(1.45)">${A.station({ label: 'B', warm: false })}</g>`;
s += `<g transform="translate(400 420) scale(1.4)">${A.station({ dark: true, g: .9, thermo: false })}</g>`;
/* sun over the warm side, clouds over the cold corner */
let rays = ''; for (let a = 0; a < 12; a++) { const an = a * 30 * Math.PI / 180; rays += `M${f(1110 + Math.cos(an) * 74)} ${f(1182 + Math.sin(an) * 74)}L${f(1110 + Math.cos(an) * 98)} ${f(1182 + Math.sin(an) * 98)}`; }
s += `<path d="${rays}" stroke="#ffd24a" stroke-width="10" stroke-linecap="round"/><circle cx="1110" cy="1182" r="60" fill="#ffd24a" stroke="#f2b134" stroke-width="5"/>
  ${cloud(1085, 118, 1.15, .95)}${cloud(930, 70, .7, .85)}${cloud(140, 110, .8, .85)}`;
s += '</svg>';
s = s.replace(/\n\s+/g, '\n');
fs.writeFileSync(path.join(ROOT, 'assets', 'map_ch3.svg'), s);
console.log('map', (s.length / 1024).toFixed(1) + ' KB');

/* background for the game and question pages (sits under a light veil): a garden with beds of seedlings */
seed = 9;
let b = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice">
<defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#bfe7f8"/><stop offset=".55" stop-color="#e9f6ee"/><stop offset=".56" stop-color="#cfeaa6"/><stop offset="1" stop-color="#b4e092"/></linearGradient></defs>
<rect width="1600" height="1000" fill="url(#g)"/>
<circle cx="1330" cy="170" r="92" fill="#ffe08a"/><circle cx="1330" cy="170" r="130" fill="#ffe08a" opacity=".3"/>
${cloud(260, 170, 1.5, .9)}${cloud(820, 110, 1.1, .8)}${cloud(1100, 300, .9, .7)}
<path d="M0 560C200 510 420 536 640 524C900 510 1200 480 1600 534V1000H0Z" fill="#c4e79f"/>
<path d="M0 650C260 612 520 668 820 640C1100 614 1360 630 1600 610V1000H0Z" fill="#b4e092"/>
<path d="M0 760C300 730 620 780 900 752C1180 724 1400 750 1600 742V1000H0Z" fill="#a9794a"/>
<path d="M0 800h1600M0 868h1600M0 936h1600" stroke="#8a5f38" stroke-width="8" opacity=".35"/>`;
for (let r = 0; r < 3; r++) for (let c = 0; c < 13; c++) b += seedling(f(60 + c * 124 + rnd() * 30), 806 + r * 68, .9 + rnd() * .3, .5 + r * .22);
for (let i = 0; i < 14; i++) { const x = 40 + rnd() * 1520, y = 600 + rnd() * 120; b += tuft(f(x), f(y)); }
b += `${tree(120, 640, 1.5, GREEN)}${tree(1480, 660, 1.4, GREEN2)}${tree(1380, 600, 1, GREEN)}${tree(240, 600, 1, GREEN2)}</svg>`;
b = b.replace(/\n\s+/g, '\n');
fs.writeFileSync(path.join(ROOT, 'assets', 'bg_ch3.svg'), b);
console.log('bg', (b.length / 1024).toFixed(1) + ' KB');
