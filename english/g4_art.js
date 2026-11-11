/* English · Grade 4 pictures, drawn in code (CH_DIAGRAMS). Nothing is copied from the school book.
   Unit 1 "The Five Senses":
     fiveSenses  (tap) ids eye · ear · nose · tongue · palm      five round badges, each with a simple drawing of a part of the body
                         q.pic = { plain: true } draws the inner markup only (no frame and no tap rings) for the game scene.
   Unit 2 "My Community" (10 Nov 2026, no owner pictures: drawn in code):
     helping6 (tap) ids plant · help · collect · clean · volunteer · feed   six ways to help the community (book p 26 "Listen and number", p 37 "Look and write")
     fvWords  (tap) ids wVan · wFactory · wVest · wForest · wFrog · wFlag · wViolin · wView   the eight /f/ and /v/ words of p 32 (ids start with w: admin TAP already has 'factory')
       both honour q.pic.plain; q.pic.only = [ids] draws only those badges (the game uses it), q.pic.cols overrides the grid.
   Units 3 and 4 (11 Nov 2026): the owner's Gemini pictures (english/assets/a4_*, e4_*, pb_*.webp, cut from his sheets, plain background removed)
     inside pastel circles (photoGrid). Tap pictures: animals6, actions6, care6, story3, blends6 (unit 3); egypt6, city6, pb8 (unit 4).
     Pictures for one question: photo (q.pic.src = ['a4_lion', …], up to 3 side by side; never a picture that shows the answer in words).
     Drawn in code (the answer is an exact place or a digit): prepBox (q.pic.pos in|on|front|behind|next|between), livingRoom (q.pic.hi = item),
     prepScene (q.pic.kind house|dog), bigNum (q.pic.n, q.pic.hi = index of the digit the arrow points at), footprints (arrows all going into the cave).
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

  /* ================= Units 3 and 4 · the owner's pictures ================= */
  const IMG = id => `english/assets/${id}.webp`;
  const pimg = (id, x, y, s) => id.startsWith('txt:') ? `<text x="${f1(x)}" y="${f1(y + s * .32)}" text-anchor="middle" font-family="${FONT}" font-size="${f1(s * .9)}" font-weight="900" fill="#f2b134" stroke="#c98a14" stroke-width="3">${id.slice(4)}</text>` : `<image href="${IMG(id)}" x="${f1(x - s / 2)}" y="${f1(y - s / 2)}" width="${f1(s)}" height="${f1(s)}" preserveAspectRatio="xMidYMid meet"/>`;
  const PH = {   // id -> [file, screen-reader description (never the answer word when it is asked), tint]
    lion: ['a4_lion', 'a yellow animal with a big mane', '#fbefd2'], monkey: ['a4_monkey', 'a small brown animal with a curly tail', '#f3e6d6'], elephant: ['a4_elephant', 'a big gray animal with a trunk', '#e4ecf3'],
    giraffe: ['a4_giraffe', 'a tall spotted animal with a long neck', '#fbf1d6'], zebra: ['a4_zebra', 'a black and white striped animal', '#eceef2'], bear: ['a4_bear', 'a big brown animal with thick fur', '#f1e4d8'],
    spray: ['a4_spray', 'an elephant spraying water', '#e1effb'], climb: ['a4_climb', 'a monkey on a tree', '#e8f6e2'], run: ['a4_run', 'zebras running together', '#eceef2'],
    fish: ['a4_fish', 'a bear with a fish by a river', '#e1effb'], night: ['a4_night', 'a lion under the moon', '#e3e6f6'], leaves: ['a4_leaves', 'a giraffe at a tall tree', '#e8f6e2'],
    walkdog: ['a4_walkdog', 'a boy walking his dog', '#e1effb'], vet: ['a4_vet', 'a woman with a stethoscope and a dog', '#e4f3f8'], rabbitveg: ['a4_rabbitveg', 'a rabbit with a carrot and lettuce', '#fbe9ee'],
    birdcage: ['a4_birdcage', 'a bird in a cage', '#fbf3d6'], officer: ['a4_officer', 'a woman in green with binoculars among trees', '#e2f4dc'], owner: ['a4_owner', 'a girl giving food to her cat', '#fbe3e8'],
    fox: ['a4_fox', 'a small red-brown animal with a fluffy tail', '#fde6cf'], cave: ['a4_cave', 'a dark hole in rocks', '#ebe6e0'], prints: ['a4_prints', 'marks on the sand', '#f6efd2'],
    frown: ['a4_frown', 'a girl with an unhappy face', '#fbe3e8'], drum: ['a4_drum', 'a drum with two sticks', '#fbf3d6'], plane: ['a4_plane', 'a plane in the sky', '#e1effb'],
    bPlant: ['a4_plant', 'a small green plant in a pot', '#e8f6e2'], draw: ['a4_draw', 'a girl with a pencil and paper', '#e4ecf3'], fruit: ['a4_fruit', 'a bowl of strawberry, grapes, apple and orange', '#fdeee0'],
    pyramids: ['e4_pyramids', 'pyramids in the desert', '#fbf1d6'], nile: ['e4_nile', 'a sailing boat on a river with palm trees', '#e1effb'], tower: ['e4_tower', 'a very tall slim tower', '#eef0f6'],
    siwa: ['e4_siwa', 'a lake with palm trees and a flat rocky hill', '#e8f6e2'], museum: ['e4_museum', 'a pink-red building with an arched door', '#fbe9e9'], khan: ['e4_khan', 'a shop with lanterns and copper plates', '#fbeedd'],
    library: ['e4_library', 'a room with shelves of books', '#fbf3d6'], school: ['e4_school', 'a building with children and school bags', '#e1effb'], mall: ['e4_mall', 'a glass building with shopping bags', '#e4f3f8'],
    post: ['e4_post', 'a green building with a mailbox, letters and a parcel', '#e2f4dc'], hospital: ['e4_hospital', 'a building with a red crescent and an ambulance', '#fbe9e9'], cmuseum: ['e4_cmuseum', 'a building with an old statue in front', '#fbeedd'],
    pBear: ['pb_bear', 'a brown bear', '#f1e4d8'], pPear: ['pb_pear', 'a green pear', '#eef6dc'], pPin: ['pb_pin', 'a pin with a red head', '#fbe9e9'], pBin: ['pb_bin', 'a green trash bin', '#e2f4dc'],
    jDoctor: ['j5_doctor', 'a man in a white coat with a stethoscope', '#e4f3f8'], jNurse: ['j5_nurse', 'a woman in a light blue uniform and cap', '#e1effb'], jTeacher: ['j5_teacher', 'a woman with a pointer and a green board', '#e8f6e2'],
    jEngineer: ['j5_engineer', 'a woman in a yellow helmet and vest', '#fbf3d6'], jFirefighter: ['j5_firefighter', 'a man in a dark uniform with yellow stripes and a red helmet', '#fbe9e9'], jPolice: ['j5_police', 'a man in a white uniform and a dark cap', '#eef0f6'],
    jMentor: ['j5_mentor', 'a woman helping a girl with a notebook', '#f1e8fb'], jPhoto: ['j5_photographer', 'a man with a big camera and a lion far away', '#e8f6e2'], jPuppets: ['j5_puppets', 'a woman with hand puppets and children', '#fbe3e8'],
    jVoice: ['j5_voice', 'a man with headphones and a microphone', '#e1effb'], jCarpenter: ['j5_carpenter', 'a man with a hammer making a wooden chair', '#fbeedd'], jGift: ['j5_gift', 'a box with a ribbon', '#fbf3d6'],
    hStrong: ['h5_strong', 'a neat wooden house', '#e8f6e2'], hWeak: ['h5_weak', 'a crooked broken wooden house', '#fbe9e9'], hFurniture: ['h5_furniture', 'a wooden chair and table', '#fbeedd'],
    hKeys: ['h5_keys', 'three keys on a ring', '#fbf3d6'], hHammer: ['h5_hammer', 'a hammer and nails', '#eef0f6'], hBoards: ['h5_boards', 'three wooden boards', '#fbeedd'],
    seCube: ['se_cube', 'a red box shape', '#fbe9e9'], seSlide: ['se_slide', 'a blue playground slide', '#e1effb'], seStone: ['se_stone', 'a gray rock', '#eef0f6'], seGate: ['se_gate', 'a wooden garden door', '#e8f6e2'],
    seFace: ['se_face', 'a smiling girl', '#fbe3e8'], seRope: ['se_rope', 'a coiled rope', '#fbeedd'], seFlute: ['se_flute', 'a boy playing music', '#e8f6e2'], sePlate: ['se_plate', 'a white dish', '#e4ecf3'], seNine: ['txt:9', 'a big yellow number', '#fbf3d6'],
    fTruck: ['f5_truck', 'a red truck with a ladder', '#fbe9e9'], fHose: ['f5_hose', 'a rolled tube with a nozzle', '#fbf3d6'], fLadder: ['f5_ladder', 'a metal ladder', '#eef0f6'],
    fOxygen: ['f5_oxygen', 'a yellow tank with a mask', '#fbf3d6'], fUniform: ['f5_uniform', 'a dark jacket with yellow stripes and a red helmet', '#e4ecf3'], fStation: ['f5_station', 'a red building with a big garage door', '#fbe9e9'],
    oPaper: ['o5_paper', 'colored paper squares', '#fbf3d6'], oScissors: ['o5_scissors', 'red scissors', '#fbe9e9'], oMarkers: ['o5_markers', 'three markers', '#f1e8fb'], oGlue: ['o5_glue', 'a glue stick', '#e1effb'], oRuler: ['o5_ruler', 'a yellow ruler', '#fbf3d6'], oCoat: ['o5_coat', 'a folded paper white coat', '#e4f3f8'],
    dDress: ['d6_dress', 'a pink party dress', '#fbe3e8'], dCloset: ['d6_closet', 'an open cupboard full of clothes', '#fbeedd'], dPlayground: ['d6_playground', 'swings, a slide and a green field by a school', '#e8f6e2'],
    dCompetition: ['d6_competition', 'children cheering around a gold cup', '#fbf3d6'], dDrawings: ['d6_drawings', 'a picture of a dress on an easel', '#f1e8fb'], dMedal: ['d6_medal', 'a gold medal with a red ribbon', '#fbf3d6'],
    dSign: ['d6_sign', 'a hand writing a name with a pen', '#e4ecf3'], dLetter: ['d6_letter', 'an envelope', '#eef0f6'], dAnnounce: ['d6_announce', 'a boy with a megaphone', '#e1effb'], dWinner: ['d6_winner', 'a happy boy with a medal', '#fbf3d6'],
    dFaded: ['d6_faded', 'an old pale blue dress with a patch', '#e1effb'], dQuiet: ['d6_quiet', 'a girl sitting alone in a classroom', '#eef0f6'],
    cWanda: ['c6_wanda', 'a girl with brown braids and a blue dress', '#f1e8fb'], cPeggy: ['c6_peggy', 'a girl with long red hair and a pink headband', '#fbf3d6'], cMaddie: ['c6_maddie', 'a girl with short blond hair', '#e2f4dc'], cMason: ['c6_mason', 'a young woman with her hair tied back', '#e1effb'],
    pPond: ['pb_pond', 'water with lilies', '#e1effb'], pPeak: ['pb_peak', 'the snowy top of a mountain', '#eef0f6'], pPan: ['pb_pan', 'a frying pan', '#eceef2'], pBat: ['pb_bat', 'a flying animal with wings', '#efe8fb']
  };
  function photoGrid(q, ids, w, h, cols, r, label) {
    const pic = (q && q.pic) || {}, plain = !!pic.plain, only = pic.only || ids, n = only.length, c = pic.cols || Math.min(cols, n), rows = Math.ceil(n / c);
    const gx = w / c, gy = h / rows, pos = {};
    only.forEach((id, i) => { const row = Math.floor(i / c), inRow = row === rows - 1 ? n - row * c : c, x0 = (w - inRow * gx) / 2; pos[id] = [x0 + gx * (i % c) + gx / 2, gy * row + gy / 2]; });
    let s = plain ? '' : `<rect width="${w}" height="${h}" rx="14" fill="#fbf6e6"/>`;
    only.forEach(id => { const [x, y] = pos[id], P = PH[id]; s += `<circle cx="${f1(x)}" cy="${f1(y)}" r="${r}" fill="${P[2]}" stroke="#fff" stroke-width="3"/><circle cx="${f1(x)}" cy="${f1(y)}" r="${r}" fill="none" stroke="#d8c9a6" stroke-width="1.4"/>${pimg(P[0], x, y, r * 1.55)}`; });
    if (!plain) only.forEach(id => { const [x, y] = pos[id]; s += hot(id, PH[id][1], ringEl(x, y, r, r)); });
    return { svg: wrap(w, h, label, s, plain), pos };
  }
  const gridFig = (ids, w, h, cols, r, label) => {
    const fn = q => photoGrid(q, ids, w, h, cols, r, label).svg;
    fn.rings = q => { const { pos } = photoGrid(q, ids, w, h, cols, r, ''); const o = {}; Object.keys(pos).forEach(id => { o[id] = [pos[id][0] - r, pos[id][1] - r, 2 * r, 2 * r]; }); return o; };
    return fn;
  };
  const animals6 = gridFig(['lion', 'monkey', 'elephant', 'giraffe', 'zebra', 'bear'], 340, 240, 3, 52, 'Six round pictures of wild animals');
  const actions6 = gridFig(['spray', 'climb', 'run', 'fish', 'night', 'leaves'], 340, 240, 3, 52, 'Six round pictures of animals doing things');
  const care6 = gridFig(['walkdog', 'vet', 'rabbitveg', 'birdcage', 'officer', 'owner'], 340, 240, 3, 52, 'Six round pictures about caring for animals');
  const story3 = gridFig(['fox', 'cave', 'prints'], 340, 130, 3, 54, 'Three round pictures from the story');
  const blends6 = gridFig(['frown', 'drum', 'plane', 'bPlant', 'draw', 'fruit'], 340, 240, 3, 52, 'Six round pictures');
  const egypt6 = gridFig(['pyramids', 'nile', 'tower', 'siwa', 'museum', 'khan'], 340, 240, 3, 52, 'Six round pictures of famous places in Egypt');
  const city6 = gridFig(['library', 'school', 'mall', 'post', 'hospital', 'cmuseum'], 340, 240, 3, 52, 'Six round pictures of places in a city');
  const pb8 = gridFig(['pBear', 'pPear', 'pPin', 'pBin', 'pPond', 'pPeak', 'pPan', 'pBat'], 340, 190, 4, 38, 'Eight round pictures');
  const jobs6 = gridFig(['jDoctor', 'jNurse', 'jTeacher', 'jEngineer', 'jFirefighter', 'jPolice'], 340, 240, 3, 52, 'Six round pictures of people at work');
  const funjobs4 = gridFig(['jMentor', 'jPhoto', 'jPuppets', 'jVoice'], 340, 240, 2, 54, 'Four round pictures of people at work');
  const house6 = gridFig(['hStrong', 'hWeak', 'hFurniture', 'hKeys', 'hHammer', 'hBoards'], 340, 240, 3, 52, 'Six round pictures from the carpenter story');
  const silentE9 = gridFig(['seNine', 'seCube', 'seStone', 'seRope', 'seFace', 'seFlute', 'seSlide', 'seGate', 'sePlate'], 340, 260, 3, 42, 'Nine round pictures');
  const fire6 = gridFig(['fTruck', 'fHose', 'fLadder', 'fOxygen', 'fUniform', 'fStation'], 340, 240, 3, 52, 'Six round pictures of a firefighter’s things');
  const origami6 = gridFig(['oPaper', 'oScissors', 'oMarkers', 'oGlue', 'oRuler', 'oCoat'], 340, 240, 3, 52, 'Six round pictures of art things');
  const dress10 = gridFig(['dDress', 'dCloset', 'dPlayground', 'dCompetition', 'dDrawings', 'dMedal', 'dSign', 'dLetter', 'dAnnounce', 'dWinner'], 340, 200, 5, 30, 'Ten round pictures of story words');
  const chars4 = gridFig(['cWanda', 'cPeggy', 'cMaddie', 'cMason'], 340, 130, 4, 40, 'Four round pictures of the story people');
  function pens3(q) {   // book Review 2: three pens, the blue one longest (drawn in code: the answer is a length)
    const pen = (x, len, c) => `<g transform="translate(${x} 20)"><rect x="-9" y="0" width="18" height="${len}" rx="8" fill="${c}" stroke="${INK}" stroke-width="2"/><rect x="-9" y="0" width="18" height="16" rx="6" fill="#fff" stroke="${INK}" stroke-width="2"/><path d="M-9 ${len}L0 ${len + 18}L9 ${len}Z" fill="#f6d7a4" stroke="${INK}" stroke-width="2" stroke-linejoin="round"/></g>`;
    return wrap(340, 150, 'Three pens: blue, green and red', `<rect width="340" height="150" rx="14" fill="#fbf6e6"/>${pen(110, 104, '#4f86c6')}${pen(170, 78, '#4f9f52')}${pen(230, 56, '#e2603f')}`, q && q.pic && q.pic.plain);
  }
  function screens2(q) {   // book Review 2: a computer and a small tablet
    const s = `<rect width="340" height="150" rx="14" fill="#fbf6e6"/><rect x="60" y="24" width="150" height="92" rx="6" fill="#2a3a4a" stroke="${INK}" stroke-width="2.4"/><rect x="68" y="32" width="134" height="76" fill="#9fd88a"/><path d="M120 116h30l6 16h-42Z" fill="#9aa9b8" stroke="${INK}" stroke-width="2"/>`
      + `<rect x="246" y="70" width="40" height="58" rx="6" fill="#e2603f" stroke="${INK}" stroke-width="2.4"/><rect x="251" y="76" width="30" height="44" fill="#f6d7a4"/>`;
    return wrap(340, 150, 'A computer and a small tablet', s, q && q.pic && q.pic.plain);
  }
  function photo(q) {   // one to three pictures side by side for a single question
    const src = (q && q.pic && q.pic.src) || [], n = src.length || 1, w = 340, h = 150, gx = w / n;
    let s = `<rect width="${w}" height="${h}" rx="14" fill="#fbf6e6"/>`;
    src.forEach((f, i) => { const x = gx * i + gx / 2; s += `<rect x="${f1(x - 64)}" y="11" width="128" height="128" rx="22" fill="#fff" stroke="#d8c9a6" stroke-width="1.6"/>${pimg(f, x, 75, 118)}`; });
    return wrap(w, h, (q && q.pic && q.pic.label) || 'A picture for the question', s, q && q.pic && q.pic.plain);
  }
  /* --- prepositions, drawn in code --- */
  const kitten = (x, y, k = 1) => at(x, y, k, `<path d="M-15 22Q-17 0 -10 -6H10Q17 0 15 22Z" fill="#d9dde3" stroke="#6b7480" stroke-width="2"/><path d="M14 18Q30 14 26 -2" fill="none" stroke="#6b7480" stroke-width="4" stroke-linecap="round"/>`
    + `<circle cy="-14" r="14" fill="#e4e7ec" stroke="#6b7480" stroke-width="2"/><path d="M-12 -22L-11 -36L-2 -26Z M12 -22L11 -36L2 -26Z" fill="#e4e7ec" stroke="#6b7480" stroke-width="2" stroke-linejoin="round"/>`
    + `<circle cx="-5" cy="-15" r="2.4" fill="${INK}"/><circle cx="5" cy="-15" r="2.4" fill="${INK}"/><path d="M-2 -10h4l-2 2z" fill="#ef8aa0"/>`);
  const kittenHead = (x, y, k = 1) => at(x, y, k, `<circle cy="-14" r="14" fill="#e4e7ec" stroke="#6b7480" stroke-width="2"/><path d="M-12 -22L-11 -36L-2 -26Z M12 -22L11 -36L2 -26Z" fill="#e4e7ec" stroke="#6b7480" stroke-width="2" stroke-linejoin="round"/><circle cx="-5" cy="-15" r="2.4" fill="${INK}"/><circle cx="5" cy="-15" r="2.4" fill="${INK}"/><path d="M-2 -10h4l-2 2z" fill="#ef8aa0"/>`);
  const box = (x, y, open) => at(x, y, 1, `<path d="M-36 0H36V48H-36Z" fill="#f08a3c" stroke="#a8541c" stroke-width="2.4" stroke-linejoin="round"/><path d="M-36 0H36" stroke="#a8541c" stroke-width="2.4"/>${open ? `<path d="M-36 0L-48 -14H-20L-8 0Z M36 0L48 -14H20L8 0Z" fill="#f6a861" stroke="#a8541c" stroke-width="2.2" stroke-linejoin="round"/>` : ''}<path d="M-30 14H30" stroke="#d86f22" stroke-width="2"/>`);
  function prepBox(q) {
    const pos = (q && q.pic && q.pic.pos) || 'in', w = 340, h = 170, fl = `<rect width="${w}" height="${h}" rx="14" fill="#fbf6e6"/><path d="M0 140H${w}" stroke="#e6d8b4" stroke-width="3"/>`;
    let s = fl;
    if (pos === 'in') s += kittenHead(170, 98, 1.15) + box(170, 92, true);
    else if (pos === 'on') s += box(170, 92) + kitten(170, 64, 1.05);
    else if (pos === 'front') s += box(170, 76) + kitten(170, 116, 1.25);
    else if (pos === 'behind') s += kittenHead(190, 104, 1.05) + box(170, 92);
    else if (pos === 'next') s += box(140, 92) + kitten(222, 118, 1.05);
    else s += box(76, 92) + kitten(170, 118, 1.05) + box(264, 92);
    return wrap(w, h, 'A gray cat and an orange box', s, q && q.pic && q.pic.plain);
  }
  function livingRoom(q) {
    const hi = q && q.pic && q.pic.hi, w = 340, h = 230, ring = (x, y, rx, ry) => `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="none" stroke="#e2603f" stroke-width="3.5" stroke-dasharray="7 5"/>`;
    let s = `<rect width="${w}" height="${h}" rx="14" fill="#e6dcf3"/><path d="${[20, 60, 100, 140, 180, 220, 260, 300].map(x => `M${x} 0V160`).join('')}" stroke="#d8cbec" stroke-width="6"/><rect y="160" width="${w}" height="70" fill="#e9c9a0"/>`;
    s += `<rect x="146" y="22" width="44" height="50" rx="3" fill="#fff8e6" stroke="#8a5a28" stroke-width="4"/><circle cx="160" cy="44" r="7" fill="#f6c9a4"/><circle cx="176" cy="44" r="7" fill="#f6c9a4"/><path d="M152 66Q160 54 168 66M168 66Q176 54 184 66" fill="#6fa8dc"/>`;
    s += `<rect x="128" y="124" width="80" height="44" fill="#c99560" stroke="#8a5a28" stroke-width="2.4"/><rect x="138" y="84" width="60" height="40" rx="3" fill="#2a3a4a" stroke="#1a2530" stroke-width="2.4"/><path d="M168 124V118" stroke="#1a2530" stroke-width="4"/>`;
    s += `<path d="M110 168V100" stroke="#8a5a28" stroke-width="3"/><path d="M96 100L104 74H116L124 100Z" fill="#fbe3b0" stroke="#c9a15c" stroke-width="2"/><path d="M100 168H120" stroke="#8a5a28" stroke-width="4"/>`;
    s += `<rect x="236" y="64" width="80" height="6" fill="#8a5a28"/><rect x="242" y="44" width="12" height="20" fill="#e2603f"/><path d="M276 64V52" stroke="#4f9f52" stroke-width="3"/><path d="M276 54Q266 44 270 38Q278 44 276 54Q286 44 284 38Q274 44 276 54Z" fill="#6fbf63"/><rect x="266" y="56" width="20" height="8" fill="#c97a4a"/><rect x="298" y="48" width="10" height="16" fill="#f2b134"/>`;
    const chair = x => `<path d="M${x - 34} 196V150Q${x - 34} 136 ${x - 20} 136H${x + 20}Q${x + 34} 136 ${x + 34} 150V196Z" fill="#4f86c6" stroke="#2f5a8a" stroke-width="2.4"/><rect x="${x - 40}" y="160" width="12" height="36" rx="5" fill="#3c74a8"/><rect x="${x + 28}" y="160" width="12" height="36" rx="5" fill="#3c74a8"/>`;
    s += chair(56) + kittenHead(292, 146, .85) + chair(278);
    s += `<rect x="140" y="186" width="56" height="8" fill="#e2603f" stroke="#a8341c" stroke-width="2"/><path d="M146 194V214M190 194V214" stroke="#a8341c" stroke-width="4"/><rect x="154" y="176" width="22" height="10" rx="3" fill="#f2b134" stroke="#c98a14" stroke-width="1.6"/><circle cx="159" cy="187" r="3" fill="${INK}"/><circle cx="171" cy="187" r="3" fill="${INK}"/>`;
    const R = { picture: [168, 47, 30, 34], cat: [292, 128, 20, 20], car: [165, 181, 18, 12], lamp: [110, 112, 22, 54], table: [168, 200, 38, 20], plant: [276, 52, 16, 18] };
    if (hi && R[hi]) s += ring(...R[hi]);
    return wrap(w, h, 'A living room with a TV, a lamp, two blue chairs, a table, a shelf, a picture and a cat', s);
  }
  function prepScene(q) {
    const kind = (q && q.pic && q.pic.kind) || 'house', w = 340, h = 160;
    let s = `<rect width="${w}" height="${h}" rx="14" fill="#dff0fa"/><rect y="124" width="${w}" height="36" fill="#bfe3a0"/>`;
    if (kind === 'house') {
      s += `<g transform="translate(60 124)"><rect x="-6" y="-40" width="12" height="40" fill="#8a5a28"/><circle cy="-58" r="30" fill="#6fbf63" stroke="#4f9f52" stroke-width="2"/></g>`;
      s += `<g transform="translate(170 124)"><rect x="-34" y="-56" width="68" height="56" fill="#fbe3b8" stroke="#8a6a48" stroke-width="2.4"/><path d="M-42 -56L0 -88L42 -56Z" fill="#c9653c" stroke="#8a6a48" stroke-width="2.4" stroke-linejoin="round"/><rect x="-8" y="-30" width="16" height="30" fill="#8a5a28"/></g>`;
      s += `<g transform="translate(278 124)"><rect x="-40" y="-70" width="80" height="70" fill="#e8b97e" stroke="#9a6a34" stroke-width="2.4"/>${[-28, -6, 16].map(a => `<rect x="${a}" y="-58" width="14" height="14" fill="#cfe8f6" stroke="#9a6a34" stroke-width="1.4"/>`).join('')}<rect x="-8" y="-26" width="16" height="26" fill="#8a5a28"/><path d="M0 -70V-88" stroke="${INK}" stroke-width="2"/><path d="M0 -88H16V-80H0Z" fill="#2e9e6b"/></g>`;
    } else {
      s += `<g transform="translate(170 124)"><rect x="-44" y="-112" width="88" height="112" fill="#f3ece4" stroke="#8a6a48" stroke-width="2.4"/><rect x="-26" y="-92" width="52" height="92" rx="4" fill="#d9423a" stroke="#8a2a24" stroke-width="2.4"/><circle cx="16" cy="-46" r="3" fill="#f2b134"/></g>`;
      s += `<g transform="translate(176 150)"><ellipse cy="-14" rx="22" ry="16" fill="#e8c27a" stroke="#a87a34" stroke-width="2"/><circle cx="-8" cy="-36" r="13" fill="#e8c27a" stroke="#a87a34" stroke-width="2"/><path d="M-20 -40Q-26 -28 -18 -26" fill="#c99a4a"/><circle cx="-11" cy="-38" r="2" fill="${INK}"/><circle cx="-3" cy="-38" r="2" fill="${INK}"/><ellipse cx="-7" cy="-31" rx="3" ry="2" fill="${INK}"/></g>`;
    }
    return wrap(w, h, kind === 'house' ? 'A tree, a house and a school' : 'A dog and a red door', s);
  }
  function bigNum(q) {
    const pic = (q && q.pic) || {}, n = pic.n || '1,000,000,000', hi = pic.hi, w = 340, h = 120, ch = n.split(''), cw = 300 / ch.length;
    let s = `<rect width="${w}" height="${h}" rx="14" fill="#fbf6e6"/>`, d = 0;
    ch.forEach((c, i) => {
      const x = 20 + cw * i + cw / 2, isD = c !== ',';
      s += `<text x="${f1(x)}" y="58" text-anchor="middle" direction="ltr" font-family="${FONT}" font-size="${c === ',' ? 30 : 34}" font-weight="900" fill="${isD && d === hi ? '#e2603f' : INK}">${c}</text>`;
      if (isD && d === hi) s += `<path d="M${f1(x)} 104V74M${f1(x - 7)} 82L${f1(x)} 72L${f1(x + 7)} 82" fill="none" stroke="#e2603f" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/>`;
      if (isD) d++;
    });
    return wrap(w, h, 'The number ' + n, s);
  }
  function footprints(q) {   // the sand in front of the cave: every track goes in, none comes out
    const w = 340, h = 150;
    let s = `<rect width="${w}" height="${h}" rx="14" fill="#f6e7c4"/>${pimg('a4_cave', 280, 72, 130)}`;
    const paw = (x, y) => `<g transform="translate(${x} ${y})"><ellipse rx="5" ry="4" fill="#a87a4a"/><circle cx="-5" cy="-6" r="2" fill="#a87a4a"/><circle cx="0" cy="-8" r="2" fill="#a87a4a"/><circle cx="5" cy="-6" r="2" fill="#a87a4a"/></g>`;
    [[30, 50], [80, 120]].forEach(([y0, y1]) => { for (let i = 0; i < 6; i++) s += paw(26 + i * 34, f1(y0 + (y1 - y0) * 0 + (i % 2) * 8 + (y0 < 60 ? i * 4 : -i * 5))); });
    s += `<path d="M30 100H200M188 92L202 100L188 108" fill="none" stroke="#2e9e6b" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" opacity=".8"/>`;
    return wrap(w, h, 'Animal footprints on the sand in front of a cave', s, q && q.pic && q.pic.plain);
  }

  window.CH_DIAGRAMS = Object.assign(window.CH_DIAGRAMS || {}, { fiveSenses, helping6, fvWords, animals6, actions6, care6, story3, blends6, egypt6, city6, pb8, photo, prepBox, livingRoom, prepScene, bigNum, footprints, jobs6, funjobs4, house6, silentE9, fire6, origami6, dress10, chars4, pens3, screens2 });
  window.E4ART = { D, POS, TINT, R, NAMES, at, hot, ringEl, INK, f1, esc, FONT, C, CNAMES, CTINT, W8, WNAMES, WTINT, head, PH, pimg, IMG, kitten, kittenHead, box };
})();
