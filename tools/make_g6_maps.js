/* Owner tool (not part of the game): draws the map and page background of Grade 6, Chapter 1, from the drawing functions in g6_art.js.
   Run from the site folder:  node tools/make_g6_maps.js   ->  assets/map_g6c1.svg, assets/bg_g6c1.svg
   STOPS are the five stops in map pixels (1224 x 1285), the same as the Grade 4 maps; keep them in step with map.stops in chapters.js (percent). */
const fs = require('fs'), vm = require('vm'), path = require('path');
const ROOT = path.join(__dirname, '..');
const ctx = { window: {} }; vm.runInNewContext(fs.readFileSync(path.join(ROOT, 'g4_art.js'), 'utf8'), ctx); vm.runInNewContext(fs.readFileSync(path.join(ROOT, 'g6_art.js'), 'utf8'), ctx);
const A = ctx.window.G4ART, F = ctx.window.G6ART, at = A.at;   // A: shared shapes (blob, sun…), F: the Chapter 1 drawings
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
