/* English · Grade 4 pictures, drawn in code (CH_DIAGRAMS). Nothing is copied from the school book.
   Unit 1 "The Five Senses":
     fiveSenses  (tap) ids eye · ear · nose · tongue · palm      five round badges, each with a simple drawing of a part of the body
                         q.pic = { plain: true } draws the inner markup only (no frame and no tap rings) for the game scene.
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

  window.CH_DIAGRAMS = Object.assign(window.CH_DIAGRAMS || {}, { fiveSenses });
  window.E4ART = { D, POS, TINT, R, NAMES, at, hot, ringEl, INK, f1, esc, FONT };
})();
