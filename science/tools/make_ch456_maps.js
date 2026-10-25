/* Owner tool (not part of the game): draws the maps and page backgrounds of Grade 5 Chapters 4, 5, 6 and 7 from the chapters' own drawing functions.
   Run from the site folder:  node science/tools/make_ch456_maps.js
   ->  science/assets/map_ch4.svg, bg_ch4.svg · map_ch5.svg, bg_ch5.svg · map_ch6.svg, bg_ch6.svg
   STOPS are the five stops in map pixels (1224 x 1285); keep them in step with map.stops in chapters.js (percent), the same as Chapter 3. */
const fs = require('fs'), vm = require('vm'), path = require('path');
const ROOT = path.join(__dirname, '..', '..');
const load = f => { const ctx = { window: {} }; vm.runInNewContext(fs.readFileSync(path.join(ROOT, 'science', f), 'utf8'), ctx); return ctx.window; };
const A4 = load('ch4_art.js').CH4ART, A5 = load('ch5_art.js').CH5ART, A6 = load('ch6_art.js').CH6ART;
const f = n => (Math.round(n * 10) / 10);
const W = 1224, H = 1285;
const SHORE = [[612, 58], [850, 84], [1050, 170], [1156, 350], [1170, 580], [1140, 820], [1096, 1030], [950, 1170], [740, 1226], [500, 1222], [290, 1170], [128, 1030], [66, 810], [58, 570], [96, 340], [214, 170], [400, 86]];
const LAND = SHORE.map(([x, y]) => [612 + (x - 612) * .93, 642 + (y - 642) * .935]);
const STOPS = [[300, 1060], [760, 900], [420, 680], [800, 470], [560, 200]];
let seed = 5; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
function blob(pts) { const n = pts.length, P = i => pts[((i % n) + n) % n]; let d = `M${f(pts[0][0])} ${f(pts[0][1])}`;
  for (let i = 0; i < n; i++) { const p0 = P(i - 1), p1 = P(i), p2 = P(i + 1), p3 = P(i + 2);
    d += `C${f(p1[0] + (p2[0] - p0[0]) / 6)} ${f(p1[1] + (p2[1] - p0[1]) / 6)} ${f(p2[0] - (p3[0] - p1[0]) / 6)} ${f(p2[1] - (p3[1] - p1[1]) / 6)} ${f(p2[0])} ${f(p2[1])}`; } return d + 'Z'; }
function curve(pts) { let d = `M${pts[0][0]} ${pts[0][1]}`; for (let i = 0; i < pts.length - 1; i++) { const p0 = pts[Math.max(0, i - 1)], p1 = pts[i], p2 = pts[i + 1], p3 = pts[Math.min(pts.length - 1, i + 2)];
  d += `C${f(p1[0] + (p2[0] - p0[0]) / 6)} ${f(p1[1] + (p2[1] - p0[1]) / 6)} ${f(p2[0] - (p3[0] - p1[0]) / 6)} ${f(p2[1] - (p3[1] - p1[1]) / 6)} ${p2[0]} ${p2[1]}`; } return d; }
const tree = (x, y, k, cols) => `<g transform="translate(${x} ${y}) scale(${k})"><ellipse cx="0" cy="4" rx="34" ry="9" fill="#000" opacity=".1"/><rect x="-7" y="-46" width="14" height="50" rx="5" fill="#9a7446"/>
  <g fill="${cols[0]}" stroke="${cols[1]}" stroke-width="3"><circle cx="-24" cy="-62" r="27"/><circle cx="24" cy="-62" r="27"/><circle cx="0" cy="-88" r="32"/></g><circle cx="-10" cy="-96" r="9" fill="#fff" opacity=".22"/></g>`;
const tuft = (x, y) => `<path d="M${x - 8} ${y}q2 -14 6 -16M${x} ${y}q0 -18 2 -22M${x + 8} ${y}q-1 -12 -6 -16" fill="none" stroke="#6fb46a" stroke-width="3.4" stroke-linecap="round"/>`;
const cloud = (x, y, k, o = 1) => `<g transform="translate(${x} ${y}) scale(${k})" fill="#fff" opacity="${o}"><ellipse cx="0" cy="0" rx="60" ry="22"/><ellipse cx="-26" cy="-16" rx="30" ry="22"/><ellipse cx="20" cy="-22" rx="36" ry="27"/></g>`;
const at = (x, y, k, inner, rot = 0) => `<g transform="translate(${x} ${y}) rotate(${rot}) scale(${k})">${inner}</g>`;
const GREEN = ['#7cc86e', '#4f9f52'], GREEN2 = ['#96d47c', '#5fae58'];

/* ---------- the island: sea, beach, grass, the trail with its five stops. scenery(s) draws what is special to a chapter ---------- */
function island(scenery, tint) {
  seed = 5;
  let s = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}">
<defs><linearGradient id="sea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c6ecf8"/><stop offset="1" stop-color="#8fd3ee"/></linearGradient>
<linearGradient id="land" x1=".1" y1=".95" x2=".9" y2=".05"><stop offset="0" stop-color="${tint[0]}"/><stop offset=".6" stop-color="${tint[1]}"/><stop offset="1" stop-color="${tint[2]}"/></linearGradient>
<linearGradient id="sand" x1=".1" y1=".95" x2=".9" y2=".05"><stop offset="0" stop-color="#f6e3ae"/><stop offset="1" stop-color="#ece7d8"/></linearGradient><clipPath id="landClip"><path d="${blob(LAND)}"/></clipPath></defs>
<rect width="${W}" height="${H}" fill="url(#sea)"/><g fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".6">`;
  [[90, 150], [1060, 1190], [1130, 90], [60, 1215], [200, 1250], [1010, 60], [30, 720], [1195, 700]].forEach(([x, y]) => { s += `<path d="M${x - 22} ${y}q11 -10 22 0t22 0"/>`; });
  s += `</g><path d="${blob(SHORE.map(([x, y]) => [612 + (x - 612) * 1.035, 642 + (y - 642) * 1.03]))}" fill="#fff" opacity=".55"/><path d="${blob(SHORE)}" fill="url(#sand)" stroke="#e3cf9b" stroke-width="4"/>
<path d="${blob(LAND)}" fill="url(#land)"/><g clip-path="url(#landClip)"><ellipse cx="300" cy="1010" rx="260" ry="150" fill="#fff" opacity=".18"/><ellipse cx="900" cy="330" rx="250" ry="190" fill="#fff" opacity=".16"/>`;
  for (let i = 0; i < 34; i++) { const x = 90 + rnd() * 1040, y = 200 + rnd() * 980; s += tuft(f(x), f(y)); }
  s += '</g>';
  const TR = [[190, 1150], STOPS[0], [540, 1030], STOPS[1], [640, 780], STOPS[2], [590, 560], STOPS[3], [720, 310], STOPS[4], [470, 120]];
  s += `<path d="${curve(TR)}" fill="none" stroke="#dcc48a" stroke-width="44" stroke-linecap="round"/><path d="${curve(TR)}" fill="none" stroke="#fbf0cf" stroke-width="34" stroke-linecap="round"/>
<path d="${curve(TR)}" fill="none" stroke="#e6cf96" stroke-width="5" stroke-linecap="round" stroke-dasharray="4 22"/>`;
  STOPS.forEach(([x, y]) => { s += `<ellipse cx="${x}" cy="${y + 6}" rx="62" ry="40" fill="#fbf0cf" stroke="#dcc48a" stroke-width="5"/>`; });
  s += scenery() + `${cloud(1085, 118, 1.15, .95)}${cloud(930, 70, .7, .85)}${cloud(140, 110, .8, .85)}</svg>`;
  return s.replace(/\n\s+/g, '\n');
}
const write = (n, s) => { fs.writeFileSync(path.join(ROOT, 'science', 'assets', n), s); console.log(n, (s.length / 1024).toFixed(1) + ' KB'); };

/* ---------- Chapter 4: pots, the sun, a dark box, fertilizer ---------- */
const sunBig = (x, y) => { let rays = ''; for (let a = 0; a < 12; a++) { const an = a * 30 * Math.PI / 180; rays += `M${f(x + Math.cos(an) * 74)} ${f(y + Math.sin(an) * 74)}L${f(x + Math.cos(an) * 98)} ${f(y + Math.sin(an) * 98)}`; }
  return `<path d="${rays}" stroke="#ffd24a" stroke-width="10" stroke-linecap="round"/><circle cx="${x}" cy="${y}" r="60" fill="#ffd24a" stroke="#f2b134" stroke-width="5"/>`; };
const s4 = () => sunBig(1110, 1182) + at(150, 1130, 2.2, A4.pot({ label: 'A', h: .6, leaf: 1, th: 1, big: 1 })) + at(1010, 920, 2, A4.box()) + at(250, 640, 1.9, A4.pot({ label: 'B', h: .98, leaf: 0, th: 0, big: .3 }))
  + at(640, 1140, 1.8, A4.pot({ label: 'A', h: 1, leaf: 1, th: .9, big: 1, fert: true })) + at(1030, 560, 2, A4.bag()) + at(400, 420, 1.6, A4.plant({ h: .9, leaf: 1, th: .9, big: 1 }))
  + tree(118, 950, 1.05, GREEN) + tree(170, 470, 1, GREEN2) + tree(330, 250, .95, GREEN) + tree(760, 1185, .8, GREEN);
const bg4 = () => bg(['#bfe7f8', '#e9f6ee'], '#cfeaa6', '#b4e092', '#a9794a', k => at(k.x, k.y, k.s, A4.plant({ h: .5 + k.r * .5, leaf: 1, th: .9, big: .9 })), 'sun');
/* ---------- Chapter 5: luffa flowers, a microscope, a bee ---------- */
const s5 = () => at(250, 1130, 2.3, A5.flower({ sex: 'female' })) + at(1010, 940, 2.2, A5.flower({ sex: 'male', dots: true })) + at(250, 640, 1.7, A5.microscope({ light: true })) + at(1000, 560, 1.9, A5.flower({ sex: 'female', wither: true, fruit: 1 }))
  + at(520, 430, 2.2, A5.bee()) + at(640, 1090, 1.4, A5.flower({ sex: 'male' })) + tree(118, 950, 1.05, GREEN) + tree(170, 470, 1, GREEN2) + tree(900, 260, .95, GREEN) + tree(760, 1185, .8, GREEN);
/* ---------- Chapter 6: people of every age, a bed, a ball, food ---------- */
const s6 = () => at(140, 1160, 2.2, A6.person({ age: 'infant' })) + at(300, 1190, 1.6, A6.person({ age: 'child', shirt: '#f2b134' })) + at(960, 1010, 1.5, A6.person({ age: 'youth', shirt: '#9a7fd1' })) + at(1060, 1020, 1.5, A6.person({ age: 'adult', shirt: '#4fa3c7' }))
  + at(1000, 560, 1.6, A6.person({ age: 'old', shirt: '#6fb48a' })) + at(230, 640, 1.8, A6.bed()) + at(1010, 780, 2, A6.ball()) + at(620, 440, 1.8, A6.food()) + tree(118, 950, 1.05, GREEN) + tree(170, 470, 1, GREEN2) + tree(900, 260, .95, GREEN) + tree(760, 1185, .8, GREEN);

/* ---------- Chapter 7: a nest with eggs, a pond with a fish and eggs, paw prints, a milk bowl (drawn in code: an SVG map cannot load the photos) ---------- */
const nest7 = () => `<ellipse cx="0" cy="8" rx="66" ry="14" fill="#000" opacity=".1"/><path d="M-62 -6Q-60 22 0 24Q60 22 62 -6Z" fill="#b98b57" stroke="#8a6334" stroke-width="4"/>
  <path d="M-58 0q14 8 28 0t28 0t28 0t28 0M-50 12q14 8 28 0t28 0t28 0" stroke="#8a6334" stroke-width="3" fill="none"/>
  <ellipse cx="-24" cy="-14" rx="17" ry="22" fill="#fffaf0" stroke="#d9cdb0" stroke-width="3"/><ellipse cx="6" cy="-18" rx="17" ry="22" fill="#fff3dc" stroke="#d9cdb0" stroke-width="3"/><ellipse cx="34" cy="-12" rx="16" ry="21" fill="#fffaf0" stroke="#d9cdb0" stroke-width="3"/>`;
const fish7 = c => `<path d="M-40 0Q-10 -26 26 -6L44 -20V20L26 6Q-10 26 -40 0Z" fill="${c}" stroke="#2f6f8e" stroke-width="3.4" stroke-linejoin="round"/><circle cx="-24" cy="-4" r="4" fill="#1f3d57"/><path d="M-6 -12q6 12 0 24" stroke="#2f6f8e" stroke-width="2.6" fill="none"/>`;
const pond7 = () => `<ellipse cx="0" cy="0" rx="150" ry="74" fill="#8fd3ee" stroke="#5fb3d6" stroke-width="5"/><ellipse cx="-30" cy="-16" rx="80" ry="22" fill="#fff" opacity=".25"/>`
  + at(-40, 6, 1, fish7('#f59a3a')) + [[60, 20], [74, 30], [86, 18], [70, 6], [94, 34], [100, 12]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="7" fill="#fffbe8" stroke="#d9cdb0" stroke-width="2"/><circle cx="${x + 1}" cy="${y}" r="2.2" fill="#3a4a5a"/>`).join('');
const paw7 = () => `<g fill="#8a6a4a" opacity=".55"><ellipse cx="0" cy="0" rx="14" ry="12"/><circle cx="-14" cy="-16" r="6"/><circle cx="-4" cy="-22" r="6"/><circle cx="8" cy="-22" r="6"/><circle cx="17" cy="-14" r="6"/></g>`;
const bowl7 = () => `<ellipse cx="0" cy="6" rx="52" ry="10" fill="#000" opacity=".1"/><path d="M-46 -14H46Q42 14 0 16Q-42 14 -46 -14Z" fill="#e2603f" stroke="#a9432b" stroke-width="4"/><ellipse cx="0" cy="-14" rx="46" ry="10" fill="#fffdf6" stroke="#a9432b" stroke-width="4"/>`;
const s7 = () => at(220, 1140, 1.9, nest7()) + at(1000, 960, 1.5, pond7()) + at(250, 650, 1.7, bowl7()) + at(1010, 560, 1.9, nest7())
  + [[620, 1150, -20], [680, 1110, -10], [740, 1150, 0], [430, 420, 10], [490, 380, 20]].map(([x, y, r]) => at(x, y, 1.3, paw7(), r)).join('')
  + tree(118, 950, 1.05, GREEN) + tree(170, 470, 1, GREEN2) + tree(900, 260, .95, GREEN) + tree(760, 1185, .8, GREEN);
const eggBg = k => at(k.x, k.y, .7, `<ellipse cx="0" cy="-18" rx="14" ry="19" fill="#fffaf0" stroke="#d9cdb0" stroke-width="3"/>`);

/* ---------- page background: a soft landscape under a light veil ---------- */
function bg(sky, hill1, hill2, ground, plantFn, kind) {
  seed = 9;
  let b = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${sky[0]}"/><stop offset=".55" stop-color="${sky[1]}"/><stop offset=".56" stop-color="${hill1}"/><stop offset="1" stop-color="${hill2}"/></linearGradient></defs>
<rect width="1600" height="1000" fill="url(#g)"/><circle cx="1330" cy="170" r="92" fill="#ffe08a"/><circle cx="1330" cy="170" r="130" fill="#ffe08a" opacity=".3"/>${cloud(260, 170, 1.5, .9)}${cloud(820, 110, 1.1, .8)}${cloud(1100, 300, .9, .7)}
<path d="M0 560C200 510 420 536 640 524C900 510 1200 480 1600 534V1000H0Z" fill="${hill1}"/><path d="M0 650C260 612 520 668 820 640C1100 614 1360 630 1600 610V1000H0Z" fill="${hill2}"/><path d="M0 760C300 730 620 780 900 752C1180 724 1400 750 1600 742V1000H0Z" fill="${ground}"/>`;
  for (let r = 0; r < 3; r++) for (let c = 0; c < 13; c++) b += plantFn({ x: f(60 + c * 124 + rnd() * 30), y: 806 + r * 68, s: .8 + rnd() * .2, r: r / 2 });
  b += `${tree(120, 640, 1.5, GREEN)}${tree(1480, 660, 1.4, GREEN2)}${tree(1380, 600, 1, GREEN)}${tree(240, 600, 1, GREEN2)}</svg>`;
  return b.replace(/\n\s+/g, '\n');
}
const petalBg = k => at(k.x, k.y, .9, `<path d="M0 0V-34" stroke="#7cc86e" stroke-width="5" stroke-linecap="round"/>${[0, 72, 144, 216, 288].map(a => `<ellipse cx="0" cy="-48" rx="7" ry="13" transform="rotate(${a} 0 -34)" fill="#ffd84f" stroke="#e0a82a" stroke-width="1.6"/>`).join('')}<circle cx="0" cy="-34" r="6" fill="#e2a42a"/>`);
const kidBg = k => at(k.x, k.y, .8, `<circle cx="0" cy="-14" r="13" fill="#e2603f" stroke="#a9432b" stroke-width="2.4"/><path d="M0 -27q2 -8 8 -10" stroke="#5a8f3f" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M0 -27q-6 -6 -12 -2q6 6 12 2z" fill="#6fbf63" stroke="#3f8f46" stroke-width="1.4"/>`);

write('map_ch4.svg', island(s4, ['#bfe59c', '#cfeaa6', '#dcefc4']));
write('bg_ch4.svg', bg4());
write('map_ch5.svg', island(s5, ['#d6e8a0', '#e6efb0', '#f6f0c6']));
write('bg_ch5.svg', bg(['#c9ecf8', '#f4f6dc'], '#d3ebb0', '#bfe090', '#b88a52', petalBg, 'flower'));
write('map_ch6.svg', island(s6, ['#f1d6b8', '#f6e3cc', '#fbf0e4']));
write('bg_ch6.svg', bg(['#fbd9c8', '#fdf0e6'], '#f3ddc4', '#ebcca8', '#d9b48a', kidBg, 'kids'));
write('map_ch7.svg', island(s7, ['#f6e3a8', '#f8ecc4', '#fcf4dc']));
write('bg_ch7.svg', bg(['#fde8bf', '#fff6e3'], '#f3e3b2', '#e9d394', '#cfa96a', eggBg, 'eggs'));
