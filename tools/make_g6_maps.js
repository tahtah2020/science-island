/* Owner tool (not part of the game): draws the maps and page backgrounds of Grade 6, Chapters 1 to 3, from the drawing functions in g6_art.js and g6_body.js.
   Run from the site folder:  node tools/make_g6_maps.js   ->  assets/map_g6c1.svg, bg_g6c1.svg, map_g6c2.svg, bg_g6c2.svg, map_g6c3.svg, bg_g6c3.svg
   STOPS are the five stops in map pixels (1224 x 1285), the same as the Grade 4 maps; keep them in step with map.stops in chapters.js (percent). */
const fs = require('fs'), vm = require('vm'), path = require('path');
const ROOT = path.join(__dirname, '..');
const ctx = { window: {} }; vm.runInNewContext(fs.readFileSync(path.join(ROOT, 'g4_art.js'), 'utf8'), ctx); vm.runInNewContext(fs.readFileSync(path.join(ROOT, 'g6_art.js'), 'utf8'), ctx);
vm.runInNewContext(fs.readFileSync(path.join(ROOT, 'g6_body.js'), 'utf8'), ctx);
const A = ctx.window.G4ART, F = ctx.window.G6ART, B = ctx.window.G6BODY, at = A.at;   // A: shared shapes (blob, sun…), F: the Chapter 1 drawings, B: the body drawings of Chapters 2 and 3
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

/* ---------- Chapter 1 · Conditions for Burning: a camp and an open-air lab ---------- */
(function () {
  seed = 13;
  let inside = `<ellipse cx="300" cy="1010" rx="260" ry="150" fill="#a8dc86" opacity=".55"/><ellipse cx="900" cy="1020" rx="240" ry="140" fill="#f3d79b" opacity=".6"/><ellipse cx="940" cy="330" rx="280" ry="210" fill="#f6e3ae" opacity=".7"/><ellipse cx="300" cy="320" rx="230" ry="160" fill="#c4e79f" opacity=".6"/>`;
  for (let i = 0; i < 40; i++) inside += tuft(f(90 + rnd() * 1040), f(140 + rnd() * 1040));
  let s = island([[0, '#bfe59c'], [.5, '#d5ecae'], [1, '#f1e6bd']], ['#f6e3ae', '#ece7d8'], inside);
  const bench = (x, y, w) => `<g transform="translate(${x} ${y})"><ellipse cx="0" cy="34" rx="${w / 2 + 6}" ry="9" fill="#000" opacity=".08"/><rect x="${-w / 2}" y="0" width="${w}" height="14" rx="5" fill="#d9b27c" stroke="#a8834f" stroke-width="3"/><path d="M${-w / 2 + 14} 14v20M${w / 2 - 14} 14v20" stroke="#a8834f" stroke-width="7" stroke-linecap="round"/></g>`;
  /* 1 the candle in the jar: lid on (out), then gaps at the top and the bottom (burning) */
  s += bench(150, 1120, 210) + at(100, 1120, 1.05, F.setup({ lid: 'on', lit: 0, smoke: 1 })) + at(200, 1120, 1.05, F.setup({ gap: true }));
  /* 2 three jars of gas: the candle burns brightly in one of them */
  s += bench(1010, 900, 230) + [-74, 0, 74].map((dx, i) => at(1010 + dx, 900, .82, (i === 1 ? at(-8, -28, 1, F.spoon({ wire: 100, lit: 1.5, bright: true })) : at(-8, -28, 1, F.spoon({ wire: 100, lit: 0, smoke: 1 }))) + F.jar({ bottom: true, lid: 'on' }))).join('');
  /* 3 limewater: clear and milky white */
  s += bench(240, 640, 170) + at(200, 640, .9, F.liquid({ milky: 0, level: 30 }) + F.jar({ bottom: true, lid: 'on' })) + at(282, 640, .9, F.liquid({ milky: 1, level: 30 }) + F.jar({ bottom: true, lid: 'on' }));
  /* the bar of the gases of the air, as a sign */
  s += `<g transform="translate(880 300)"><path d="M-104 30v54M104 30v54" stroke="#a8834f" stroke-width="8" stroke-linecap="round"/><rect x="-124" y="-34" width="248" height="72" rx="12" fill="#fff8ea" stroke="#a8834f" stroke-width="5"/>${at(-110, -20, 1, F.airBar(220, 44).svg)}</g>`;
  s += at(640, 1170, 1.5, F.campfire()) + at(400, 420, 1.25, F.lantern()) + at(330, 260, .9, F.lantern()) + at(170, 480, 1.2, F.campfire());
  s += at(1010, 560, 1.25, F.solar()) + at(900, 700, 1.1, F.solar()) + at(1050, 700, 1.1, F.solar());
  s += tree(118, 950, 1.05) + tree(420, 1195, .8, ['#96d47c', '#5fae58']) + tree(760, 1190, .8) + tree(170, 800, .9, ['#96d47c', '#5fae58']) + tree(250, 330, .7);
  s += at(880, 1090, 1.6, F.candle({ h: 40, lit: 1 })) + at(930, 1100, 1.3, F.candle({ h: 30, lit: 1 })) + at(830, 1100, 1.2, F.candle({ h: 26, lit: 1 }));
  s += sunAt(1090, 140, 2.2) + cloud(140, 110, .8, .85) + cloud(930, 70, .7, .85) + '</svg>';
  save('map_g6c1.svg', s);

  let b = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice">
<defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#cfe6f7"/><stop offset=".5" stop-color="#ffe9c9"/><stop offset=".56" stop-color="#e9dca8"/><stop offset="1" stop-color="#cfe0a0"/></linearGradient></defs>
<rect width="1600" height="1000" fill="url(#g)"/><circle cx="1330" cy="190" r="92" fill="#ffd98a"/><circle cx="1330" cy="190" r="130" fill="#ffd98a" opacity=".3"/>
${cloud(260, 170, 1.5, .9)}${cloud(820, 110, 1.1, .8)}
<path d="M0 560C200 510 420 536 640 524C900 510 1200 480 1600 534V1000H0Z" fill="#e3dba0"/><path d="M0 680C260 642 520 698 820 670C1100 644 1360 660 1600 640V1000H0Z" fill="#cfe0a0"/><path d="M0 820C300 790 620 840 900 812C1180 784 1400 810 1600 802V1000H0Z" fill="#d9b27c"/>`;
  for (let i = 0; i < 22; i++) b += tuft(f(40 + rnd() * 1520), f(620 + rnd() * 180));
  b += at(260, 800, 2.6, F.campfire()) + at(720, 830, 2.4, F.lantern()) + at(1040, 840, 2, F.setup({ gap: true })) + at(1300, 850, 2.2, F.candle({ h: 44, lit: 1 })) + at(1460, 700, 2, F.solar()) + at(1260, 660, 1.6, F.solar())
    + tree(120, 640, 1.5) + tree(520, 620, 1.1, ['#96d47c', '#5fae58']) + '</svg>';
  save('bg_g6c1.svg', b);
})();

/* shared by the maps of Chapters 2 and 3 */
const bench = (x, y, w) => `<g transform="translate(${x} ${y})"><ellipse cx="0" cy="34" rx="${w / 2 + 6}" ry="9" fill="#000" opacity=".08"/><rect x="${-w / 2}" y="0" width="${w}" height="14" rx="5" fill="#d9b27c" stroke="#a8834f" stroke-width="3"/><path d="M${-w / 2 + 14} 14v20M${w / 2 - 14} 14v20" stroke="#a8834f" stroke-width="7" stroke-linecap="round"/></g>`;
const board = (x, y, w, h, inner) => `<g transform="translate(${x} ${y})"><path d="M${-w / 2 + 20} ${h / 2}v46M${w / 2 - 20} ${h / 2}v46" stroke="#a8834f" stroke-width="8" stroke-linecap="round"/><rect x="${-w / 2}" y="${-h / 2}" width="${w}" height="${h}" rx="14" fill="#fff8ea" stroke="#a8834f" stroke-width="5"/>${inner}</g>`;
const swirl = (x, y, k, o = .8) => `<path d="M0 0c16 -14 40 -10 44 6c3 13 -12 20 -20 12M-10 18c22 -6 58 -2 74 14" fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round" opacity="${o}" transform="translate(${x} ${y}) scale(${k})"/>`;

/* ---------- Chapter 2 · Respiration: fresh air, a breath test and a fish pond ---------- */
(function () {
  seed = 29;
  let inside = `<ellipse cx="300" cy="1010" rx="260" ry="150" fill="#a8dc86" opacity=".55"/><ellipse cx="930" cy="1010" rx="250" ry="150" fill="#c9ecb0" opacity=".6"/><ellipse cx="930" cy="330" rx="280" ry="200" fill="#d6f0e6" opacity=".7"/><ellipse cx="290" cy="320" rx="230" ry="160" fill="#b9e6a4" opacity=".6"/>`;
  for (let i = 0; i < 44; i++) inside += tuft(f(90 + rnd() * 1040), f(140 + rnd() * 1040));
  inside += `<ellipse cx="210" cy="640" rx="150" ry="84" fill="#8fd3ee" stroke="#e3cf9b" stroke-width="10"/><ellipse cx="210" cy="640" rx="150" ry="84" fill="none" stroke="#fff" stroke-width="3" opacity=".6"/>`;
  let s = island([[0, '#bfe8a8'], [.5, '#cfeec0'], [1, '#dff3e6']], ['#f3e6b8', '#ecebdc'], inside);
  /* 1 the two bags: our breath (milky white limewater) and room air */
  s += bench(172, 980, 220) + at(120, 980, .95, B.bag({ liquid: true, milky: 1 })) + at(226, 980, .95, B.bag({ liquid: true, milky: 0 }));
  /* 2 the lungs, on a sign */
  s += board(1010, 850, 190, 196, at(0, -150, 1.06, B.airways({})));
  /* 3 the fish pond */
  s += at(180, 632, 1, B.fish({ gills: true })) + `<g transform="translate(262 668) scale(-.7 .7)">${B.fish({ gills: true })}</g>` + `<g fill="#fff" stroke="#6aa9cc" stroke-width="2" opacity=".9"><circle cx="150" cy="590" r="6"/><circle cx="162" cy="574" r="4.4"/><circle cx="142" cy="568" r="3.4"/></g>`;
  /* gas exchange, as a sign */
  s += board(900, 300, 250, 156, at(-105, -64, .7, B.exchange({ o2: true, co2: true })));
  s += tree(150, 1150, .9) + tree(420, 1195, .8, ['#96d47c', '#5fae58']) + tree(770, 1190, .85) + tree(1060, 1090, .9, ['#96d47c', '#5fae58']) + tree(250, 330, .8) + tree(380, 250, .65, ['#96d47c', '#5fae58']) + tree(1040, 560, .95) + tree(930, 640, .7, ['#96d47c', '#5fae58']) + tree(150, 440, .9);
  s += flower(640, 1170, 1.6, '#f39ab0') + flower(690, 1182, 1.3, '#f7d04a') + flower(590, 1186, 1.2, '#9ad0f5') + flower(520, 470, 1.4, '#f39ab0') + flower(1080, 420, 1.3, '#f7d04a') + flower(340, 800, 1.3, '#9ad0f5');
  s += swirl(560, 330, 1.1) + swirl(250, 880, .9) + swirl(900, 1030, 1) + swirl(600, 600, .8, .7);
  s += sunAt(1090, 140, 2.2) + cloud(140, 110, .8, .85) + cloud(930, 70, .7, .85) + '</svg>';
  save('map_g6c2.svg', s);

  let b = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice">
<defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#cfe9f8"/><stop offset=".5" stop-color="#e6f5f4"/><stop offset=".56" stop-color="#cfeaba"/><stop offset="1" stop-color="#b9e0a0"/></linearGradient></defs>
<rect width="1600" height="1000" fill="url(#g)"/><circle cx="1330" cy="180" r="88" fill="#ffe7a8"/><circle cx="1330" cy="180" r="126" fill="#ffe7a8" opacity=".3"/>
${cloud(260, 170, 1.5, .9)}${cloud(820, 110, 1.1, .8)}${cloud(1120, 300, .9, .7)}${swirl(520, 300, 1.6, .7)}${swirl(980, 420, 1.3, .6)}
<path d="M0 560C200 510 420 536 640 524C900 510 1200 480 1600 534V1000H0Z" fill="#cfeaba"/><path d="M0 680C260 642 520 698 820 670C1100 644 1360 660 1600 640V1000H0Z" fill="#b9e0a0"/><path d="M0 830C300 800 620 850 900 822C1180 794 1400 820 1600 812V1000H0Z" fill="#a8d68c"/>`;
  for (let i = 0; i < 26; i++) b += tuft(f(40 + rnd() * 1520), f(620 + rnd() * 200), '#5fa85a');
  b += `<ellipse cx="1180" cy="850" rx="250" ry="70" fill="#8fd3ee" stroke="#e3cf9b" stroke-width="12"/>` + at(1130, 846, 1.5, B.fish({ gills: true })) + `<g transform="translate(1290 866) scale(-1.1 1.1)">${B.fish({ gills: true })}</g>`
    + at(300, 830, 2, B.bag({ liquid: true, milky: 1 })) + at(480, 836, 1.8, B.bag({ liquid: true, milky: 0 })) + flower(700, 900, 3, '#f39ab0') + flower(770, 930, 2.6, '#f7d04a') + flower(640, 940, 2.4, '#9ad0f5')
    + tree(120, 640, 1.5) + tree(620, 610, 1.1, ['#96d47c', '#5fae58']) + tree(1480, 640, 1.4) + tree(960, 600, .9, ['#96d47c', '#5fae58']) + '</svg>';
  save('bg_g6c2.svg', b);
})();

/* ---------- Chapter 3 · Digestion: a picnic, the saliva experiment and the journey of food ---------- */
(function () {
  seed = 41;
  let inside = `<ellipse cx="300" cy="1010" rx="260" ry="150" fill="#f6dfa8" opacity=".6"/><ellipse cx="930" cy="1010" rx="250" ry="150" fill="#f9d9c4" opacity=".6"/><ellipse cx="930" cy="330" rx="280" ry="200" fill="#fbe8cf" opacity=".7"/><ellipse cx="290" cy="320" rx="230" ry="160" fill="#d7ecae" opacity=".6"/>`;
  for (let i = 0; i < 36; i++) inside += tuft(f(90 + rnd() * 1040), f(140 + rnd() * 1040), '#8fc46a');
  let s = island([[0, '#d9eeb0'], [.5, '#f1ecc0'], [1, '#fbe6cf']], ['#f6e3ae', '#f2e8d6'], inside);
  const cloth = (x, y, w, h) => `<g transform="translate(${x} ${y})"><rect x="${-w / 2}" y="${-h / 2}" width="${w}" height="${h}" rx="10" fill="#fff" stroke="#e2603f" stroke-width="4"/><path d="M${-w / 2 + 10} 0h${w - 20}M0 ${-h / 2 + 8}v${h - 16}" stroke="#f4a58f" stroke-width="6" opacity=".7"/></g>`;
  /* 1 a picnic: bread, an apple and a bowl of rice */
  s += cloth(172, 976, 230, 110) + at(114, 990, 1.05, B.bread()) + at(184, 952, .95, B.apple()) + at(236, 1002, .95, B.rice());
  /* 2 the saliva experiment: two test tubes in warm water, one blue-black and one that did not change */
  s += bench(1010, 900, 230) + at(1010, 900, 1.15, B.beaker({ back: true, level: .6 }) + at(-28, -6, 1, B.tube({ level: .55, color: B.IODINE.blue })) + at(28, -6, 1, B.tube({ level: .55, color: B.IODINE.same })) + B.beaker({ front: true, steam: true }));
  /* 3 the wall of the small intestine and a towel */
  s += board(232, 610, 220, 150, at(-78, 44, 1.2, B.wall({ kind: 'villi', w: 130 })));
  s += `<g transform="translate(150 430)"><path d="M-70 0h260" stroke="#a8834f" stroke-width="5" stroke-linecap="round"/><path d="M-70 0v70M190 0v70" stroke="#a8834f" stroke-width="8" stroke-linecap="round"/><rect x="-30" y="-2" width="110" height="86" rx="6" fill="#8fc0ea" stroke="#3f7fbf" stroke-width="4"/><path d="M-20 22h90M-20 44h90M-20 66h90" stroke="#3f7fbf" stroke-width="5" stroke-dasharray="3 7" stroke-linecap="round"/><rect x="100" y="-2" width="70" height="60" rx="6" fill="#f9cdb0" stroke="#d98f6d" stroke-width="4"/></g>`;
  /* the journey of food, as a sign */
  s += board(905, 292, 190, 250, `<g clip-path="url(#signClip)">${at(0, -150, .76, B.body({ h: 380, mouth: 'open' }) + B.gut({}))}</g>`).replace('<g transform="translate(905 292)">', '<g transform="translate(905 292)"><defs><clipPath id="signClip"><rect x="-90" y="-120" width="180" height="240" rx="10"/></clipPath></defs>');
  s += tree(150, 1150, .9, ['#96d47c', '#5fae58']) + tree(420, 1195, .8) + tree(770, 1190, .85, ['#96d47c', '#5fae58']) + tree(1060, 1090, .9) + tree(1040, 560, .95, ['#96d47c', '#5fae58']) + tree(400, 250, .7);
  [[134, 1088], [164, 1076], [154, 1104], [1026, 496], [1058, 486], [1046, 514]].forEach(([x, y]) => { s += `<circle cx="${x}" cy="${y}" r="9" fill="#e2545a" stroke="#a8323a" stroke-width="2.4"/>`; });
  s += at(640, 1176, 1.2, B.apple()) + at(700, 1190, 1, B.bread()) + at(560, 480, 1, B.rice()) + at(1090, 420, 1, B.apple()) + at(330, 820, .9, B.bread()) + at(660, 610, .8, B.apple());
  s += sunAt(1090, 140, 2.2) + cloud(140, 110, .8, .85) + cloud(930, 70, .7, .85) + '</svg>';
  save('map_g6c3.svg', s);

  let b = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice">
<defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d6ecf8"/><stop offset=".5" stop-color="#fde9dc"/><stop offset=".56" stop-color="#eadfa6"/><stop offset="1" stop-color="#d6e3a0"/></linearGradient></defs>
<rect width="1600" height="1000" fill="url(#g)"/><circle cx="1330" cy="190" r="92" fill="#ffd98a"/><circle cx="1330" cy="190" r="130" fill="#ffd98a" opacity=".3"/>
${cloud(260, 170, 1.5, .9)}${cloud(820, 110, 1.1, .8)}
<path d="M0 560C200 510 420 536 640 524C900 510 1200 480 1600 534V1000H0Z" fill="#e6dc9e"/><path d="M0 680C260 642 520 698 820 670C1100 644 1360 660 1600 640V1000H0Z" fill="#d6e3a0"/><path d="M0 820C300 790 620 840 900 812C1180 784 1400 810 1600 802V1000H0Z" fill="#d9b27c"/>`;
  for (let i = 0; i < 22; i++) b += tuft(f(40 + rnd() * 1520), f(620 + rnd() * 180), '#8fc46a');
  b += at(260, 850, 2.4, B.bread()) + at(470, 860, 2.2, B.apple()) + at(700, 868, 2.2, B.rice())
    + at(1100, 880, 2, B.beaker({ back: true, level: .6 }) + at(-28, -6, 1, B.tube({ level: .55, color: B.IODINE.blue })) + at(28, -6, 1, B.tube({ level: .55, color: B.IODINE.same })) + B.beaker({ front: true, steam: true }))
    + at(1330, 880, 1.7, B.wall({ kind: 'villi', w: 130 }))
    + tree(120, 640, 1.5, ['#96d47c', '#5fae58']) + tree(560, 620, 1.1) + tree(1500, 650, 1.3, ['#96d47c', '#5fae58']) + '</svg>';
  save('bg_g6c3.svg', b);
})();
