/* Owner tool (not part of the game): draws the maps and page backgrounds of Grade 4, Chapters 1 to 3, from the drawing functions in g4_art.js.
   Run from the site folder:  node science/tools/make_g4_maps.js   ->  science/assets/map_g4c1.svg … map_g4c3.svg, assets/bg_g4c1.svg … bg_g4c3.svg
   STOPS are the five stops in map pixels (1224 x 1285), the same for the three maps; keep them in step with map.stops in chapters.js (percent). */
const fs = require('fs'), vm = require('vm'), path = require('path');
const ROOT = path.join(__dirname, '..');
const ctx = { window: {} }; vm.runInNewContext(fs.readFileSync(path.join(ROOT, 'g4_art.js'), 'utf8'), ctx);
const A = ctx.window.G4ART, at = A.at;
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
const flower = (x, y, k, c) => `<g transform="translate(${x} ${y}) scale(${k})"><path d="M0 0v-16" stroke="#5f9548" stroke-width="3" stroke-linecap="round"/><g fill="${c}">${[0, 72, 144, 216, 288].map(a => `<circle cx="${f(Math.cos(a * Math.PI / 180) * 6)}" cy="${f(-20 + Math.sin(a * Math.PI / 180) * 6)}" r="5"/>`).join('')}</g><circle cx="0" cy="-20" r="3.4" fill="#f7d04a"/></g>`;

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
const sunAt = (x, y, k) => at(x, y, k, A.sun(26));

/* ---------- Chapter 1 · Nature in Our Surroundings: the bank of the Nile on one side, the desert on the other ---------- */
(function () {
  seed = 5;
  const river = [[20, 520], [118, 660], [150, 810], [112, 950], [150, 1090], [262, 1196], [400, 1270]];
  let inside = `<ellipse cx="260" cy="980" rx="330" ry="260" fill="#a8dc86" opacity=".6"/><ellipse cx="930" cy="330" rx="330" ry="260" fill="#f3d79b" opacity=".7"/>
    <path d="M620 300C720 230 840 236 930 290C1010 338 1090 330 1180 290V520H620Z" fill="#eecb8a" opacity=".55"/><path d="M700 640C800 580 920 590 1010 640C1080 680 1130 676 1180 650V820H700Z" fill="#eecb8a" opacity=".45"/>
    <path d="${curve(river)}" fill="none" stroke="#5fb4dc" stroke-width="92" stroke-linecap="round"/><path d="${curve(river)}" fill="none" stroke="#8fd3ee" stroke-width="78" stroke-linecap="round"/>
    <path d="${curve(river)}" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-dasharray="26 34" opacity=".7"/>`;
  for (let i = 0; i < 46; i++) { const x = 150 + rnd() * 560, y = 620 + rnd() * 580; if (x + (1285 - y) * .9 < 1050) inside += tuft(f(x), f(y)); }
  for (let i = 0; i < 26; i++) { const x = 560 + rnd() * 600, y = 120 + rnd() * 700; if (x - y * .7 > 330) inside += `<path d="M${f(x - 14)} ${f(y)}q7 -6 14 0t14 0" fill="none" stroke="#dcb873" stroke-width="3" stroke-linecap="round" opacity=".8"/>`; }
  let s = island([[0, '#bfe59c'], [.42, '#d5ecae'], [.58, '#f4e2b0'], [1, '#f6dca0']], ['#f6e3ae', '#f3e0b4'], inside);
  s += at(128, 800, 1.5, A.lotus()) + at(140, 1052, 1.2, A.lotus());
  s += at(250, 900, 1.5, A.palm()) + at(226, 716, 1.25, A.papyrus()) + at(470, 1200, 1.1, A.papyrus());
  s += at(206, 996, 1.3, A.frog()) + at(350, 1198, 1.15, A.waterBird()) + at(640, 1160, 1.5, A.orangeTree()) + at(560, 1090, 1.2, A.bee());
  s += at(880, 1090, 1.3, A.grasshopper()) + at(960, 1010, 1, A.grassTuft()) + at(1000, 1016, 1.3, A.grassTuft());
  s += at(1010, 540, 1.9, A.acacia()) + at(170, 470, 1.2, A.acacia()) + at(900, 322, 1.25, A.fox()) + at(1004, 880, 1.5, A.jerboa()) + at(906, 742, 1.45, A.camel());
  s += at(380, 420, 1.5, A.rock()) + at(374, 300, 1.15, A.lizard()) + at(1040, 316, 1.5, A.colocynth()) + at(330, 250, 1.2, A.scarab()) + at(820, 200, 1, A.stone());
  s += sunAt(1090, 140, 2.2) + cloud(140, 110, .8, .85) + cloud(300, 66, .6, .8) + '</svg>';
  save('map_g4c1.svg', s);

  let b = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice">
<defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#bfe7f8"/><stop offset=".6" stop-color="#f6efd8"/><stop offset="1" stop-color="#f1d9a0"/></linearGradient></defs>
<rect width="1600" height="1000" fill="url(#g)"/><circle cx="1330" cy="170" r="92" fill="#ffe08a"/><circle cx="1330" cy="170" r="130" fill="#ffe08a" opacity=".3"/>
${cloud(260, 170, 1.5, .9)}${cloud(820, 110, 1.1, .8)}
<path d="M700 620C900 500 1150 520 1320 600C1440 656 1540 640 1600 610V1000H700Z" fill="#f1d9a0"/><path d="M820 760C1000 690 1220 700 1380 770C1480 812 1560 800 1600 786V1000H820Z" fill="#e9c583"/>
<path d="M0 600C200 560 460 580 700 640C760 656 800 700 820 760V1000H0Z" fill="#c4e79f"/><path d="M0 700C240 660 500 700 760 780V1000H0Z" fill="#a8dc86"/>
<path d="M0 820C200 790 420 800 640 860C760 892 860 950 900 1000H0Z" fill="#8fd3ee"/><path d="M40 880q30 -12 60 0t60 0t60 0M300 930q30 -12 60 0t60 0t60 0" fill="none" stroke="#fff" stroke-width="5" opacity=".7"/>`;
  b += at(150, 740, 2.6, A.palm()) + at(420, 780, 2, A.papyrus()) + at(620, 820, 1.6, A.grassTuft()) + at(1180, 740, 2.6, A.acacia()) + at(1460, 860, 2, A.rock()) + at(980, 900, 2, A.colocynth()) + '</svg>';
  save('bg_g4c1.svg', b);
})();

/* ---------- Chapter 2 · How Insects Grow: a meadow of flowers, with the four stages of the butterfly ---------- */
(function () {
  seed = 11;
  const COL = ['#f79ac0', '#f7d04a', '#fbb65a', '#c7a7e0', '#fff'];
  let inside = `<ellipse cx="300" cy="1010" rx="260" ry="150" fill="#a8dc86" opacity=".55"/><ellipse cx="900" cy="1020" rx="240" ry="140" fill="#b4e092" opacity=".6"/><ellipse cx="930" cy="330" rx="280" ry="210" fill="#d6edb4" opacity=".7"/><ellipse cx="300" cy="320" rx="230" ry="160" fill="#c4e79f" opacity=".6"/>`;
  for (let i = 0; i < 40; i++) inside += tuft(f(90 + rnd() * 1040), f(140 + rnd() * 1040));
  for (let i = 0; i < 70; i++) inside += flower(f(90 + rnd() * 1040), f(150 + rnd() * 1040), f(.8 + rnd() * .5), COL[i % COL.length]);
  let s = island([[0, '#bfe59c'], [.5, '#cfeaa6'], [1, '#dff0c2']], ['#f6e3ae', '#ece7d8'], inside);
  /* 1 egg under a leaf · 2 larva eating · 3 pupa hanging · 4 adult */
  s += at(70, 1130, 1.25, A.bigLeaf({ under: true }), -8) + at(158, 1118, 3, A.egg());
  s += at(560, 1160, 1.35, A.bigLeaf({ holes: [[112, -14, 10], [62, 16, 8]], bg: '#cfeaa6' }), -6) + at(660, 1146, 1.25, A.larva({ size: 1 }));
  s += `<path d="M150 560C210 540 280 546 330 570" fill="none" stroke="#5f9548" stroke-width="9" stroke-linecap="round"/>` + at(190, 552, .8, A.bigLeaf(), 196) + at(250, 556, 2.1, A.pupa());
  s += at(1004, 560, 1.7, A.flowerHead()) + at(1012, 462, 1.5, A.butterflySide());
  s += at(1010, 880, 1.35, A.butterflyTop(), 24) + at(400, 400, 1.1, A.butterflyTop(), -18) + at(880, 280, 1, A.butterflyTop(), 8);
  s += at(118, 960, 1.6, A.flowerHead()) + at(170, 480, 1.4, A.flowerHead()) + at(900, 1090, 1.5, A.flowerHead()) + at(960, 760, 1.5, A.flowerHead()) + at(170, 820, 1.4, A.flowerHead()) + at(760, 1200, 1.3, A.flowerHead());
  s += at(330, 250, 1.1, A.dragonfly(), 30) + at(1060, 700, 1.3, A.bee()) + at(420, 1196, 1.2, A.grasshopper()) + at(860, 660, 1.2, A.ant());
  s += sunAt(1090, 140, 2.2) + cloud(140, 110, .8, .85) + cloud(930, 70, .7, .85) + '</svg>';
  save('map_g4c2.svg', s);

  seed = 3;
  let b = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice">
<defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#bfe7f8"/><stop offset=".55" stop-color="#e9f6ee"/><stop offset=".56" stop-color="#cfeaa6"/><stop offset="1" stop-color="#b4e092"/></linearGradient></defs>
<rect width="1600" height="1000" fill="url(#g)"/><circle cx="1330" cy="170" r="92" fill="#ffe08a"/><circle cx="1330" cy="170" r="130" fill="#ffe08a" opacity=".3"/>
${cloud(260, 170, 1.5, .9)}${cloud(820, 110, 1.1, .8)}${cloud(1100, 300, .9, .7)}
<path d="M0 560C200 510 420 536 640 524C900 510 1200 480 1600 534V1000H0Z" fill="#c4e79f"/><path d="M0 680C260 642 520 698 820 670C1100 644 1360 660 1600 640V1000H0Z" fill="#b4e092"/>`;
  for (let i = 0; i < 60; i++) b += flower(f(20 + rnd() * 1560), f(620 + rnd() * 360), f(1.2 + rnd() * .9), COL[i % COL.length]);
  for (let i = 0; i < 24; i++) b += tuft(f(40 + rnd() * 1520), f(600 + rnd() * 380));
  b += at(240, 900, 2.6, A.flowerHead()) + at(1380, 920, 2.8, A.flowerHead()) + at(300, 420, 1.5, A.butterflyTop(), -16) + at(1120, 480, 1.3, A.butterflyTop(), 20) + at(700, 360, 1, A.butterflyTop(), 6)
    + tree(120, 640, 1.5) + tree(1480, 660, 1.4, ['#96d47c', '#5fae58']) + '</svg>';
  save('bg_g4c2.svg', b);
})();

/* ---------- Chapter 3 · How Plants Grow: a garden where the sunflower goes from seed to seed ---------- */
(function () {
  seed = 7;
  const bed = (x, y, w, h, n, plant) => { let s = `<g transform="translate(${x} ${y})"><rect width="${w}" height="${h}" rx="18" fill="#a9794a" stroke="#8a5f38" stroke-width="5"/><path d="M14 ${f(h * .7)}h${w - 28}" stroke="#8a5f38" stroke-width="5" stroke-linecap="round" opacity=".55"/>`;
    for (let c = 0; c < n; c++) s += at(f(30 + c * ((w - 60) / Math.max(1, n - 1))), f(h * .7), 1, plant()); return s + '</g>'; };
  let inside = `<ellipse cx="300" cy="1010" rx="260" ry="150" fill="#a8dc86" opacity=".55"/><ellipse cx="900" cy="1020" rx="240" ry="140" fill="#b4e092" opacity=".6"/><ellipse cx="960" cy="320" rx="260" ry="200" fill="#d6edb4" opacity=".7"/><ellipse cx="300" cy="300" rx="230" ry="160" fill="#c4e79f" opacity=".6"/>`;
  for (let i = 0; i < 40; i++) inside += tuft(f(90 + rnd() * 1040), f(140 + rnd() * 1040));
  let s = island([[0, '#bfe59c'], [.5, '#cfeaa6'], [1, '#dcefc4']], ['#f6e3ae', '#ece7d8'], inside);
  /* seeds, then the beds in the order the plant grows */
  s += `<g transform="translate(150 1120)"><ellipse cx="0" cy="26" rx="84" ry="14" fill="#000" opacity=".08"/>${at(-44, 0, 1.7, A.seed('fava'), -10)}${at(20, -8, 1.8, A.seed('sunflower'), -24)}${at(64, 14, 1.9, A.seed('chickpea'))}</g>`;
  s += at(640, 1170, 1.25, A.wateringCan({ pour: true }));
  s += bed(830, 1000, 240, 110, 4, () => at(0, 0, 1.1, A.sunflower({ stage: 2, coat: false })));
  s += bed(110, 770, 200, 110, 3, () => at(0, 0, 1, A.sunflower({ stage: 3 })));
  s += bed(880, 690, 210, 100, 3, () => at(0, 0, .82, A.sunflower({ stage: 4 })));
  s += at(1010, 540, 1.25, A.sunflower({ stage: 5 })) + at(926, 420, 1, A.sunflower({ stage: 5 })) + at(250, 640, 1.3, A.sunflower({ stage: 5 }));
  s += at(400, 430, 1.15, A.sunflower({ stage: 6 })) + at(320, 300, .9, A.sunflower({ stage: 6 }));
  s += at(170, 480, 1.2, A.fava({ stage: 'flowers' })) + at(880, 290, 1.1, A.fava({ stage: 'pods' })) + at(770, 1210, .9, A.fava({ stage: 'leaves' }));
  s += at(430, 1210, 1.1, A.bud()) + at(500, 1216, 1.1, A.bloom()) + at(1060, 900, 1.2, A.fruit({ open: true }));
  s += sunAt(1110, 1170, 2.2) + cloud(1085, 118, 1.15, .95) + cloud(930, 70, .7, .85) + cloud(140, 110, .8, .85) + '</svg>';
  save('map_g4c3.svg', s);

  let b = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice">
<defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#bfe7f8"/><stop offset=".55" stop-color="#e9f6ee"/><stop offset=".56" stop-color="#cfeaa6"/><stop offset="1" stop-color="#b4e092"/></linearGradient></defs>
<rect width="1600" height="1000" fill="url(#g)"/><circle cx="1330" cy="170" r="92" fill="#ffe08a"/><circle cx="1330" cy="170" r="130" fill="#ffe08a" opacity=".3"/>
${cloud(260, 170, 1.5, .9)}${cloud(820, 110, 1.1, .8)}${cloud(1100, 300, .9, .7)}
<path d="M0 560C200 510 420 536 640 524C900 510 1200 480 1600 534V1000H0Z" fill="#c4e79f"/><path d="M0 650C260 612 520 668 820 640C1100 614 1360 630 1600 610V1000H0Z" fill="#b4e092"/>
<path d="M0 780C300 750 620 800 900 772C1180 744 1400 770 1600 762V1000H0Z" fill="#a9794a"/><path d="M0 850h1600M0 930h1600" stroke="#8a5f38" stroke-width="8" opacity=".35"/>`;
  for (let c = 0; c < 9; c++) b += at(90 + c * 180, 800, 1.5 + (c % 3) * .15, A.sunflower({ stage: c % 4 === 3 ? 4 : 5 }));
  for (let c = 0; c < 11; c++) b += at(40 + c * 150, 900, 1.6, A.sunflower({ stage: c % 2 ? 2 : 3, coat: false }));
  b += '</svg>';
  save('bg_g4c3.svg', b);
})();
