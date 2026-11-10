/* English · Grade 4 pictures, drawn in code (CH_DIAGRAMS). Nothing is copied from the school book.
   Unit 1 "The Five Senses":
     fiveSenses  (tap) ids eye · ear · nose · tongue · palm      five round badges, each with a simple drawing of a part of the body
                         q.pic = { plain: true } draws the inner markup only (no frame and no tap rings) for the game scene.
   Unit 2 "My Community" (10 Nov 2026, no owner pictures: drawn in code):
     helping6 (tap) ids plant · help · collect · clean · volunteer · feed   six ways to help the community (book p 26 "Listen and number", p 37 "Look and write")
     fvWords  (tap) ids wVan · wFactory · wVest · wForest · wFrog · wFlag · wViolin · wView   the eight /f/ and /v/ words of p 32 (ids start with w: admin TAP already has 'factory')
       both honour q.pic.plain; q.pic.only = [ids] draws only those badges (the game uses it), q.pic.cols overrides the grid.
   Screen-reader names say what is drawn ("an open eye"), as the question itself asks about the sense.
   window.E4ART = the pieces the game and the map script reuse. */
(function () {
  'use strict';
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const f1 = n => (Math.round(n * 10) / 10).toString();
  const INK = '#1f3d57';
  const FONT = 'Nunito, Cairo, sans-serif';
  const hot = (id, name, inner) => `<g class="hot" data-id="${id}" role="button" tabindex="0" aria-label="${esc(name)}">${inner}</g>`;
  const ringEl = (cx, cy, rx, ry) => `<ellipse class="ring" cx="${f1(cx)}" cy="${f1(cy)}" rx="${f1(rx)}" ry="${f1(ry)}"/>`;
  const wrap = (w, h, label, inner, plain) => (plain ? inner : `<svg class="diagram" viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(label)}">${inner}</svg>`);
  const at = (x, y, k, inner) => `<g transform="translate(${f1(x)} ${f1(y)})${k && k !== 1 ? ` scale(${k})` : ''}">${inner}</g>`;

  /* ---------- the five drawings, each about 70 wide around its own centre (0,0) ---------- */
  const D = {
    eye: () => `<path d="M-30 0Q0 -26 30 0Q0 26 -30 0Z" fill="#fff" stroke="${INK}" stroke-width="2.4" stroke-linejoin="round"/>`
      + `<circle r="13" fill="#4f86c6" stroke="${INK}" stroke-width="2"/><circle r="6" fill="${INK}"/><circle cx="-4" cy="-4" r="2.6" fill="#fff"/>`
      + `<path d="M-24 -9L-30 -17M-12 -17L-15 -26M0 -20V-30M12 -17L15 -26M24 -9L30 -17" stroke="${INK}" stroke-width="2.4" stroke-linecap="round"/>`,
    ear: () => `<path d="M-6 -30C-26 -30 -28 -4 -18 8C-12 15 -12 20 -8 26C-2 34 14 30 12 16C10 6 22 4 22 -10C22 -26 8 -30 -6 -30Z" fill="#f6c9a4" stroke="#b9805a" stroke-width="2.4" stroke-linejoin="round"/>`
      + `<path d="M-4 -20C-14 -20 -14 -4 -8 4C-4 9 -2 14 2 16" fill="none" stroke="#b9805a" stroke-width="2.4" stroke-linecap="round"/>`
      + `<path d="M-38 -6q-6 8 0 16M-46 -12q-10 14 0 28" fill="none" stroke="#8aa5b8" stroke-width="2.2" stroke-linecap="round"/>`,
    nose: () => `<path d="M-4 -32C-4 -14 -14 8 -20 16C-24 24 -12 30 -2 28C8 32 22 28 20 20C18 14 8 6 8 -4C8 -16 4 -26 -4 -32Z" fill="#f6c9a4" stroke="#b9805a" stroke-width="2.4" stroke-linejoin="round"/>`
      + `<ellipse cx="-8" cy="22" rx="4.4" ry="3" fill="#b9805a"/><ellipse cx="10" cy="22" rx="4" ry="2.8" fill="#b9805a"/>`
      + `<g transform="translate(-34 -18)"><circle r="6" fill="#f2b134"/>${[0, 72, 144, 216, 288].map(a => `<ellipse cx="0" cy="-10" rx="4.6" ry="6" fill="#e2603f" transform="rotate(${a})"/>`).join('')}<circle r="4" fill="#f2b134"/></g>`,
    tongue: () => `<path d="M-32 -8Q0 -34 32 -8Q26 16 0 18Q-26 16 -32 -8Z" fill="#e2603f" stroke="#a8341c" stroke-width="2.4" stroke-linejoin="round"/>`
      + `<path d="M-22 -4H22Q20 14 0 16Q-20 14 -22 -4Z" fill="#7a1f1a"/>`
      + `<path d="M-12 -2H12V16Q0 36 -12 16Z" fill="#f4838a" stroke="#c4525a" stroke-width="2.2" stroke-linejoin="round"/><path d="M0 4V20" stroke="#c4525a" stroke-width="2" stroke-linecap="round"/>`,
    palm: () => `<path d="M-18 30V4L-24 -6C-27 -12 -20 -16 -16 -10L-10 -2V-24C-10 -30 -2 -30 -2 -24V-8V-30C-2 -36 6 -36 6 -30V-8V-26C6 -32 14 -32 14 -26V-4V-16C14 -22 22 -22 22 -16V8C22 20 18 30 14 30Z" fill="#f6c9a4" stroke="#b9805a" stroke-width="2.4" stroke-linejoin="round"/>`
  };
  const NAMES = { eye: 'an open eye', ear: 'an ear', nose: 'a nose next to a flower', tongue: 'a mouth with a tongue', palm: 'an open hand' };
  /* positions of the five badges in the 340 x 250 card: three on top, two below */
  const POS = { eye: [62, 62], ear: [170, 62], nose: [278, 62], tongue: [116, 178], palm: [224, 178] };
  const TINT = { eye: '#e1effb', ear: '#e8f6e2', nose: '#fdeee0', tongue: '#fbe3e8', palm: '#f1e8fb' };
  const R = 46;

  /* ================= fiveSenses (340 x 250) ================= */
  function fiveSenses(q) {
    const plain = !!(q && q.pic && q.pic.plain);
    let s = plain ? '' : `<rect width="340" height="250" rx="14" fill="#fbf6e6"/>`;
    Object.keys(POS).forEach(id => {
      const [x, y] = POS[id];
      s += at(x, y, 1, `<circle r="${R}" fill="${TINT[id]}" stroke="#fff" stroke-width="3"/><circle r="${R}" fill="none" stroke="#d8c9a6" stroke-width="1.4"/><g transform="scale(.9)">${D[id]()}</g>`);
    });
    if (!plain) Object.keys(POS).forEach(id => { const [x, y] = POS[id]; s += hot(id, NAMES[id], ringEl(x, y, R, R)); });
    return wrap(340, 250, 'Five round pictures: an eye, an ear, a nose, a tongue and a hand', s, plain);
  }
  fiveSenses.rings = () => { const o = {}; Object.keys(POS).forEach(id => { o[id] = [POS[id][0] - R, POS[id][1] - R, R * 2, R * 2]; }); return o; };

  /* ================= Unit 2 · My Community ================= */
  const SK = '#f6c9a4', SKL = '#b9805a';
  const head = (x, y, r, hair) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${SK}" stroke="${SKL}" stroke-width="2"/>${hair || ''}<circle cx="${x - r * .35}" cy="${y - r * .05}" r="1.5" fill="${INK}"/><circle cx="${x + r * .35}" cy="${y - r * .05}" r="1.5" fill="${INK}"/><path d="M${x - r * .3} ${y + r * .38}q${r * .3} ${r * .25} ${r * .6} 0" fill="none" stroke="#7a4a2a" stroke-width="1.5" stroke-linecap="round"/>`;
  const C = {
    plant: () => `<path d="M-30 26Q0 8 30 26Z" fill="#a0703c" stroke="#7a4a2a" stroke-width="2.2" stroke-linejoin="round"/>`
      + `<path d="M0 18V-14" stroke="#4f9f52" stroke-width="4" stroke-linecap="round"/><path d="M0 -2Q-18 -6 -20 -20Q-4 -20 0 -2Z" fill="#6fbf63" stroke="#4f9f52" stroke-width="2"/><path d="M0 -10Q16 -16 20 -30Q4 -30 0 -10Z" fill="#6fbf63" stroke="#4f9f52" stroke-width="2"/>`
      + `<g transform="translate(18 -4) rotate(-20)"><path d="M0 0H22V16H0Z" fill="#6fa8dc" stroke="#3c74a8" stroke-width="2.2" stroke-linejoin="round"/><path d="M0 4L-16 -6" stroke="#3c74a8" stroke-width="4" stroke-linecap="round"/><path d="M22 2Q32 2 28 14" fill="none" stroke="#3c74a8" stroke-width="2.6"/></g>`
      + `<g fill="#6fb8e8"><circle cx="-2" cy="-28" r="2.4"/><circle cx="-8" cy="-22" r="2.2"/></g>`,
    help: () => `<path d="M-26 34L-22 2H-6L-2 34Z" fill="#9aa9b8" stroke="#5f6f80" stroke-width="2"/>` + head(-14, -10, 11, `<path d="M-25 -12q0 -12 11 -12t11 12q-4 -6 -11 -6t-11 6Z" fill="#e6e6e6" stroke="#a9a9a9" stroke-width="1.4"/>`)
      + `<path d="M-30 6L-36 34" stroke="#7a4a2a" stroke-width="3.4" stroke-linecap="round"/>`
      + `<path d="M8 34L11 10H25L28 34Z" fill="#2e9e6b" stroke="#1f7a50" stroke-width="2"/>` + head(18, -2, 9.5, `<path d="M8.5 -4q0 -10 9.5 -10t9.5 10q-4 -5 -9.5 -5t-9.5 5Z" fill="#5a3a22"/>`)
      + `<path d="M-6 14Q2 20 11 14" fill="none" stroke="${SKL}" stroke-width="3.4" stroke-linecap="round"/>`,
    collect: () => `<path d="M-24 -6Q-28 30 -6 32H10Q30 30 24 -6Z" fill="#6fa8dc" stroke="#3c74a8" stroke-width="2.4" stroke-linejoin="round"/><path d="M-24 -6Q0 -2 24 -6L16 -16Q0 -10 -16 -16Z" fill="#8fbde6" stroke="#3c74a8" stroke-width="2" stroke-linejoin="round"/>`
      + `<g transform="translate(-30 10) rotate(-30)"><rect x="-5" y="-14" width="10" height="24" rx="3" fill="#cfe8f6" stroke="#5f8fb0" stroke-width="2"/><rect x="-3" y="-19" width="6" height="6" fill="#2e9e6b"/></g>`
      + `<g transform="translate(32 22)"><rect x="-7" y="-10" width="14" height="18" rx="2" fill="#e2603f" stroke="#a8341c" stroke-width="2"/></g>`,
    clean: () => `<path d="M20 -34L-4 14" stroke="#a0703c" stroke-width="5" stroke-linecap="round"/><path d="M-4 14L-26 22L-20 34L4 24Z" fill="#f2b134" stroke="#c98a14" stroke-width="2.2" stroke-linejoin="round"/>`
      + `<path d="M-22 26L-24 34M-14 24L-16 33M-6 21L-6 30" stroke="#c98a14" stroke-width="2"/>`
      + `<g fill="#c8b48a"><circle cx="-34" cy="30" r="3"/><circle cx="-40" cy="24" r="2.4"/><circle cx="-30" cy="20" r="2"/></g><g fill="none" stroke="#c8b48a" stroke-width="2" stroke-linecap="round"><path d="M-36 14q-6 -4 -2 -10"/></g>`,
    volunteer: () => `<path d="M-28 -4H28V32H-28Z" fill="#d9a066" stroke="#9a6a34" stroke-width="2.4" stroke-linejoin="round"/><path d="M-28 -4L-20 -16H20L28 -4" fill="#e8b97e" stroke="#9a6a34" stroke-width="2.2" stroke-linejoin="round"/>`
      + `<circle cx="-12" cy="-14" r="8" fill="#e2603f" stroke="#a8341c" stroke-width="2"/><circle cx="4" cy="-16" r="8" fill="#f2b134" stroke="#c98a14" stroke-width="2"/><path d="M14 -10L20 -26L26 -10Z" fill="#6fbf63" stroke="#4f9f52" stroke-width="2"/>`
      + `<path d="M0 26C-14 16 -12 6 -5 6C-2 6 0 9 0 11C0 9 2 6 5 6C12 6 14 16 0 26Z" fill="#ef6a7a" stroke="#c0394e" stroke-width="1.8"/>`,
    feed: () => `<ellipse cx="18" cy="28" rx="18" ry="7" fill="#6fa8dc" stroke="#3c74a8" stroke-width="2.2"/><g fill="#a0703c"><circle cx="12" cy="23" r="3"/><circle cx="19" cy="22" r="3"/><circle cx="25" cy="24" r="3"/></g>`
      + `<path d="M-30 -8Q-30 -30 -10 -30Q8 -30 8 -10Q8 12 -10 14Q-30 14 -30 -8Z" fill="#d9a066" stroke="#8a5a28" stroke-width="2.4"/>`
      + `<path d="M-28 -24Q-40 -10 -32 4Q-26 -8 -24 -22Z" fill="#8a5a28"/><path d="M4 -26Q16 -12 8 2Q2 -10 0 -22Z" fill="#8a5a28"/>`
      + `<ellipse cx="-11" cy="2" rx="9" ry="7" fill="#f3d3a8"/><ellipse cx="-11" cy="-1" rx="4" ry="3" fill="${INK}"/><circle cx="-18" cy="-12" r="2.6" fill="${INK}"/><circle cx="-4" cy="-12" r="2.6" fill="${INK}"/><path d="M-11 6v4" stroke="${INK}" stroke-width="1.6"/><path d="M-12 10q2 6 5 1" fill="#ef6a7a"/>`
  };
  const CNAMES = { plant: 'a small tree in the soil and a watering can', help: 'a young man holding an old man’s arm', collect: 'a full trash bag with a bottle and a can', clean: 'a broom sweeping dust', volunteer: 'a box of food with a heart', feed: 'a dog next to a bowl of food' };
  const CTINT = { plant: '#e8f6e2', help: '#e1effb', collect: '#fdeee0', clean: '#fbf3d6', volunteer: '#fbe3e8', feed: '#f1e8fb' };
  const W8 = {
    wVan: () => `<path d="M-34 14V-14Q-34 -18 -30 -18H14Q22 -18 28 -6L34 4V14Z" fill="#fff" stroke="${INK}" stroke-width="2.4" stroke-linejoin="round"/><path d="M16 -14L26 -2H16Z" fill="#cfe8f6" stroke="${INK}" stroke-width="1.8"/><rect x="-28" y="-12" width="36" height="12" rx="2" fill="#cfe8f6" stroke="${INK}" stroke-width="1.8"/><circle cx="-20" cy="16" r="7" fill="${INK}"/><circle cx="20" cy="16" r="7" fill="${INK}"/><circle cx="-20" cy="16" r="2.4" fill="#ccc"/><circle cx="20" cy="16" r="2.4" fill="#ccc"/>`,
    wFactory: () => `<path d="M-34 24V-4L-20 -14V-4L-6 -14V-4L8 -14V24Z" fill="#c9b8a4" stroke="#7a6a58" stroke-width="2.2" stroke-linejoin="round"/><rect x="12" y="-30" width="12" height="54" fill="#a8938a" stroke="#7a6a58" stroke-width="2.2"/><rect x="24" y="4" width="10" height="20" fill="#c9b8a4" stroke="#7a6a58" stroke-width="2"/><g fill="#6fa8dc"><rect x="-28" y="6" width="8" height="8"/><rect x="-14" y="6" width="8" height="8"/><rect x="0" y="6" width="6" height="8"/></g><g fill="#e6e9ee" stroke="#b9c2cc" stroke-width="1.4"><circle cx="20" cy="-36" r="5"/><circle cx="26" cy="-42" r="6"/></g>`,
    wVest: () => `<path d="M-14 -28L-26 -20V28H-2V-6L0 -10L2 -6V28H26V-20L14 -28L6 -12H-6Z" fill="#d8f04a" stroke="#8aa020" stroke-width="2.2" stroke-linejoin="round"/><path d="M-26 6H-2M2 6H26M-26 16H-2M2 16H26" stroke="#c4cfd8" stroke-width="4"/>`,
    wForest: () => [[-22, 10, 1], [0, 2, 1.25], [22, 10, 1]].map(([x, y, k]) => `<g transform="translate(${x} ${y}) scale(${k})"><rect x="-3" y="10" width="6" height="12" fill="#8a5a28"/><path d="M0 -26L14 0H6L16 14H-16L-6 0H-14Z" fill="#4f9f52" stroke="#2f7a3a" stroke-width="2" stroke-linejoin="round"/></g>`).join(''),
    wFrog: () => `<ellipse cy="10" rx="28" ry="18" fill="#6fbf63" stroke="#3f8a3a" stroke-width="2.4"/><circle cx="-13" cy="-10" r="10" fill="#6fbf63" stroke="#3f8a3a" stroke-width="2.4"/><circle cx="13" cy="-10" r="10" fill="#6fbf63" stroke="#3f8a3a" stroke-width="2.4"/><circle cx="-13" cy="-11" r="5" fill="#fff"/><circle cx="13" cy="-11" r="5" fill="#fff"/><circle cx="-12" cy="-11" r="2.6" fill="${INK}"/><circle cx="14" cy="-11" r="2.6" fill="${INK}"/><path d="M-12 8Q0 16 12 8" fill="none" stroke="#2f6a2a" stroke-width="2.2" stroke-linecap="round"/>`,
    wFlag: () => `<path d="M-30 -30V34" stroke="#7a6a58" stroke-width="3.4" stroke-linecap="round"/><rect x="-28" y="-28" width="58" height="13" fill="#ce1126"/><rect x="-28" y="-15" width="58" height="13" fill="#fff" stroke="#ddd" stroke-width=".8"/><rect x="-28" y="-2" width="58" height="13" fill="#1a1a1a"/><path d="M1 -12L-3 -6H5Z" fill="#c09300"/><circle cx="1" cy="-9" r="2.4" fill="#c09300"/>`,
    wViolin: () => `<g transform="rotate(-30)"><path d="M0 -14C-10 -14 -12 -6 -8 -2C-14 2 -14 18 0 18C14 18 14 2 8 -2C12 -6 10 -14 0 -14Z" fill="#b9652a" stroke="#7a3e14" stroke-width="2.2"/><rect x="-2.5" y="-36" width="5" height="24" fill="#3a2a1a"/><path d="M-3 4h6" stroke="#3a2a1a" stroke-width="2"/><path d="M-1 -34V12M1 -34V12" stroke="#e6e0d0" stroke-width=".8"/></g><path d="M-30 -20L30 22" stroke="#7a4a2a" stroke-width="2.4" stroke-linecap="round"/>`,
    wView: () => `<rect x="-34" y="-26" width="68" height="52" rx="6" fill="#cfe8f6"/><circle cx="18" cy="-12" r="7" fill="#f2b134"/><path d="M-34 10Q-16 -10 0 6Q14 -6 34 8V26H-34Z" fill="#6fbf63"/><path d="M-34 18Q0 8 34 20V26H-34Z" fill="#4f9f52"/><rect x="-34" y="-26" width="68" height="52" rx="6" fill="none" stroke="#5f8fb0" stroke-width="2.2"/>`
  };
  const WNAMES = { wVan: 'a white van', wFactory: 'a factory with a chimney', wVest: 'a yellow safety vest', wForest: 'three green trees', wFrog: 'a green frog', wFlag: 'a red, white and black flag', wViolin: 'a violin and its bow', wView: 'green hills under the sun' };
  const WTINT = { wVan: '#e1effb', wFactory: '#f3ece4', wVest: '#f5f9d6', wForest: '#e2f4dc', wFrog: '#e8f6e2', wFlag: '#fbe9e9', wViolin: '#fbeedd', wView: '#e3f2fb' };
  function grid(q, ids, draw, names, tints, w, h, cols, r, label) {
    const pic = (q && q.pic) || {}, plain = !!pic.plain, only = pic.only || ids, n = only.length, c = pic.cols || Math.min(cols, n), rows = Math.ceil(n / c);
    const gx = w / c, gy = h / rows, pos = {};
    only.forEach((id, i) => { const row = Math.floor(i / c), inRow = row === rows - 1 ? n - row * c : c, x0 = (w - inRow * gx) / 2; pos[id] = [x0 + gx * (i % c) + gx / 2, gy * row + gy / 2]; });
    let s = plain ? '' : `<rect width="${w}" height="${h}" rx="14" fill="#fbf6e6"/>`;
    only.forEach(id => { const [x, y] = pos[id]; s += at(x, y, 1, `<circle r="${r}" fill="${tints[id]}" stroke="#fff" stroke-width="3"/><circle r="${r}" fill="none" stroke="#d8c9a6" stroke-width="1.4"/><g transform="scale(${f1(r / 46 * .95)})">${draw[id]()}</g>`); });
    if (!plain) only.forEach(id => { const [x, y] = pos[id]; s += hot(id, names[id], ringEl(x, y, r, r)); });
    return { svg: wrap(w, h, label, s, plain), pos };
  }
  const H6 = ['plant', 'help', 'collect', 'clean', 'volunteer', 'feed'], F8 = ['wVan', 'wFactory', 'wVest', 'wForest', 'wFrog', 'wFlag', 'wViolin', 'wView'];
  function helping6(q) { return grid(q, H6, C, CNAMES, CTINT, 340, 250, 3, 50, 'Six round pictures of ways to help the community').svg; }
  helping6.rings = q => { const { pos } = grid(q, H6, C, CNAMES, CTINT, 340, 250, 3, 50, ''); const o = {}; Object.keys(pos).forEach(id => { o[id] = [pos[id][0] - 50, pos[id][1] - 50, 100, 100]; }); return o; };
  function fvWords(q) { return grid(q, F8, W8, WNAMES, WTINT, 340, 190, 4, 38, 'Eight round pictures: a van, a factory, a vest, a forest, a frog, a flag, a violin and a view').svg; }
  fvWords.rings = q => { const { pos } = grid(q, F8, W8, WNAMES, WTINT, 340, 190, 4, 38, ''); const o = {}; Object.keys(pos).forEach(id => { o[id] = [pos[id][0] - 38, pos[id][1] - 38, 76, 76]; }); return o; };

  window.CH_DIAGRAMS = Object.assign(window.CH_DIAGRAMS || {}, { fiveSenses, helping6, fvWords });
  window.E4ART = { D, POS, TINT, R, NAMES, at, hot, ringEl, INK, f1, esc, FONT, C, CNAMES, CTINT, W8, WNAMES, WTINT, head };
})();
