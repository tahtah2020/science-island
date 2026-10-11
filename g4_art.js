/* Science Island · Grade 4 · drawings made in code (SVG) for Chapters 1 to 3.
   Shared by the chapters' games (habitat.html, butterfly.html, garden.html), the tap pictures of the question pages (quiz.html)
   and the maps (tools/make_g4_maps.js). Nothing here is copied from the school book: every animal and plant is drawn with simple shapes.
   Every drawing is a function that returns SVG markup around its own origin (see the note above each one).
   window.G4ART = the drawings; window.CH_DIAGRAMS gets the tap pictures:
     Chapter 1: hidePlaces (grass | stone | rock | sand) · nileDesert (nile | desert) · fennec (ears | feet | tail) · desertDay (hole | sand | dune)
     Chapter 2: butterflyStages (egg | larva | pupa | adult) · insectBody (head | thorax | abdomen) · insectSide (antennae | wings | legs) · whoIsInsect (grasshopper | spider | pillbug)
     Chapter 3: seedKinds (sunflower | chickpea | fava) · sowDepth (heap | right | deep) · seedlingLeaves (seedleaf | trueleaf) · flowerFruit (bud | flower | fruit) · plantBody (leaves | stem | roots) */
(function () {
  'use strict';
  const T = (en, ar) => (window.SI ? window.SI.T(en, ar) : en);
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const lerp = (a, b, t) => a + (b - a) * t;
  const f1 = n => (Math.round(n * 10) / 10).toString();
  const hex2rgb = h => [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16));
  const mix = (a, b, t) => { const A = hex2rgb(a), B = hex2rgb(b); t = clamp(t, 0, 1); return '#' + A.map((v, i) => Math.round(lerp(v, B[i], t)).toString(16).padStart(2, '0')).join(''); };
  const at = (x, y, k, inner, rot) => `<g transform="translate(${f1(x)} ${f1(y)})${rot ? ` rotate(${rot})` : ''}${k != null && k !== 1 ? ` scale(${k})` : ''}">${inner}</g>`;
  const flip = inner => `<g transform="scale(-1 1)">${inner}</g>`;
  const shadow = (rx, ry = rx * .22) => `<ellipse cx="0" cy="2" rx="${rx}" ry="${f1(ry)}" fill="#000" opacity=".1"/>`;
  let uid = 0;
  function blob(pts) {
    const n = pts.length, P = i => pts[((i % n) + n) % n];
    let d = `M${f1(pts[0][0])} ${f1(pts[0][1])}`;
    for (let i = 0; i < n; i++) {
      const p0 = P(i - 1), p1 = P(i), p2 = P(i + 1), p3 = P(i + 2);
      d += `C${f1(p1[0] + (p2[0] - p0[0]) / 6)} ${f1(p1[1] + (p2[1] - p0[1]) / 6)} ${f1(p2[0] - (p3[0] - p1[0]) / 6)} ${f1(p2[1] - (p3[1] - p1[1]) / 6)} ${f1(p2[0])} ${f1(p2[1])}`;
    }
    return d + 'Z';
  }
  /* a pointed leaf from (0,0) to (len,0); wid = half width */
  const leafPath = (len, wid) => `M0 0C${f1(len * .3)} ${f1(-wid)} ${f1(len * .75)} ${f1(-wid)} ${len} 0C${f1(len * .75)} ${f1(wid)} ${f1(len * .3)} ${f1(wid)} 0 0Z`;
  const leaf = (x, y, len, wid, rot, fill = '#6fbf63', line = '#4f9f52') => `<g transform="translate(${f1(x)} ${f1(y)}) rotate(${rot})"><path d="${leafPath(len, wid)}" fill="${fill}" stroke="${line}" stroke-width="1.4" stroke-linejoin="round"/><path d="M2 0H${f1(len - 3)}" stroke="${line}" stroke-width="1" opacity=".6"/></g>`;
  const eye = (x, y, r = 3) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#2a2320"/><circle cx="${f1(x + r * .3)}" cy="${f1(y - r * .35)}" r="${f1(r * .33)}" fill="#fff"/>`;

  /* ================= Chapter 1 · animals. Origin: on the ground, under the middle of the animal ================= */
  /* a sitting fox. ears: 1 = the fennec fox's very big ears, about .45 = a forest fox. The fennec is about 100 wide and 132 tall */
  function fox(o = {}) {
    const k = o.ears == null ? 1 : o.ears, fur = o.fur || '#f3d9a4', line = o.line || '#c99b5a', belly = o.belly || '#fff6e0', inner = o.inner || '#f6b8a2';
    const ear = s => `<path d="M${s * 21} -70L${f1(s * (20 + 16 * k))} ${f1(-76 - 52 * k)}L${s * 3} -84Z" fill="${fur}" stroke="${line}" stroke-width="2.4" stroke-linejoin="round"/>
      <path d="M${s * 17} -74L${f1(s * (18 + 12 * k))} ${f1(-78 - 40 * k)}L${s * 7} -82Z" fill="${inner}"/>`;
    return `${shadow(40)}
      <path d="M20 -4C50 0 62 -22 52 -42C46 -32 40 -24 24 -24Z" fill="${fur}" stroke="${line}" stroke-width="2.4" stroke-linejoin="round"/><path d="M52 -42C56 -34 55 -26 50 -20C48 -28 49 -34 52 -42Z" fill="${o.tip || '#8a6a45'}"/>
      <path d="M-24 0C-28 -30 -16 -54 0 -54C16 -54 28 -30 24 0Z" fill="${fur}" stroke="${line}" stroke-width="2.4" stroke-linejoin="round"/>
      <path d="M-11 -2C-13 -24 -7 -42 0 -42C7 -42 13 -24 11 -2Z" fill="${belly}"/>
      <g class="feet"><ellipse cx="-10" cy="-2" rx="8" ry="5" fill="${belly}" stroke="${line}" stroke-width="2"/><ellipse cx="10" cy="-2" rx="8" ry="5" fill="${belly}" stroke="${line}" stroke-width="2"/></g>
      ${ear(-1)}${ear(1)}
      <path d="${blob([[0, -90], [18, -84], [24, -70], [14, -56], [0, -50], [-14, -56], [-24, -70], [-18, -84]])}" fill="${fur}" stroke="${line}" stroke-width="2.4" stroke-linejoin="round"/>
      <path d="${blob([[0, -68], [9, -62], [6, -53], [0, -50], [-6, -53], [-9, -62]])}" fill="${belly}"/>
      ${eye(-10, -71, 3.6)}${eye(10, -71, 3.6)}<ellipse cx="0" cy="-59" rx="3.4" ry="2.6" fill="#2a2320"/><path d="M0 -56.5v3M0 -53.5c-2 2 -4 2 -5 1M0 -53.5c2 2 4 2 5 1" fill="none" stroke="#2a2320" stroke-width="1.3" stroke-linecap="round"/>`;
  }
  /* jerboa in the middle of a jump: long back legs, long tail with a tuft. About 96 wide, 84 tall */
  function jerboa() {
    const fur = '#e8c9a0', line = '#b0834f';
    return `${shadow(30)}
      <path d="M-16 -44C-44 -50 -56 -30 -50 -10" fill="none" stroke="${line}" stroke-width="3" stroke-linecap="round"/><path d="M-50 -10l-5 10l10 -4z" fill="#3a2d25"/><circle cx="-53" cy="3" r="3.4" fill="#fff" stroke="#3a2d25" stroke-width="1"/>
      <path d="M-6 -34L-24 -18L-4 -8L-26 -1" fill="none" stroke="${line}" stroke-width="6.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M-6 -34L-24 -18L-4 -8L-26 -1" fill="none" stroke="${fur}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
      <ellipse cx="2" cy="-44" rx="21" ry="15" transform="rotate(-18 2 -44)" fill="${fur}" stroke="${line}" stroke-width="2.2"/>
      <ellipse cx="6" cy="-38" rx="11" ry="7" transform="rotate(-18 6 -38)" fill="#fff6e0"/>
      <ellipse cx="17" cy="-74" rx="5" ry="13" transform="rotate(-16 17 -74)" fill="${fur}" stroke="${line}" stroke-width="2"/><ellipse cx="26" cy="-73" rx="5" ry="13" transform="rotate(8 26 -73)" fill="${fur}" stroke="${line}" stroke-width="2"/><ellipse cx="26" cy="-72" rx="2.4" ry="9" transform="rotate(8 26 -72)" fill="#f6b8a2"/>
      <circle cx="24" cy="-56" r="12.5" fill="${fur}" stroke="${line}" stroke-width="2.2"/>${eye(28, -58, 3.4)}<circle cx="36" cy="-53" r="2" fill="#2a2320"/>
      <path d="M36 -53l8 -3M36 -52l8 2" stroke="${line}" stroke-width="1" stroke-linecap="round"/><path d="M14 -40l9 7" stroke="${line}" stroke-width="3.4" stroke-linecap="round"/>`;
  }
  /* lizard seen from the side, resting. About 110 wide, 30 tall */
  function lizard(o = {}) {
    const c = o.fill || '#c9b27a', line = o.line || '#8f7a48';
    return `${shadow(46, 5)}
      <path d="M-18 -10C-40 -8 -56 -4 -60 -1C-48 -1 -34 -3 -18 -4Z" fill="${c}" stroke="${line}" stroke-width="2" stroke-linejoin="round"/>
      <path d="M-14 -5l-10 5M-8 -4l-2 5M20 -5l10 5M14 -4l2 5" stroke="${line}" stroke-width="3.4" stroke-linecap="round"/>
      <ellipse cx="2" cy="-10" rx="24" ry="7.5" fill="${c}" stroke="${line}" stroke-width="2"/>
      <path d="${blob([[22, -15], [38, -17], [48, -12], [38, -7], [24, -6]])}" fill="${c}" stroke="${line}" stroke-width="2"/>${eye(38, -13, 2.2)}
      <path d="M-12 -14c6 -3 16 -3 24 0" fill="none" stroke="${line}" stroke-width="1.2" opacity=".6"/><g fill="${line}" opacity=".5"><circle cx="-8" cy="-10" r="1.6"/><circle cx="2" cy="-11" r="1.6"/><circle cx="12" cy="-10" r="1.6"/></g>`;
  }
  /* frog, sitting. About 66 wide, 50 tall */
  function frog() {
    return `${shadow(28)}
      <ellipse cx="-22" cy="-6" rx="13" ry="7" fill="#6fbf63" stroke="#3f8f4c" stroke-width="2"/><ellipse cx="22" cy="-6" rx="13" ry="7" fill="#6fbf63" stroke="#3f8f4c" stroke-width="2"/>
      <path d="${blob([[0, -40], [22, -32], [26, -14], [14, -2], [-14, -2], [-26, -14], [-22, -32]])}" fill="#7cc86e" stroke="#3f8f4c" stroke-width="2.2"/>
      <ellipse cx="0" cy="-12" rx="14" ry="9" fill="#e6f5c9"/>
      <circle cx="-12" cy="-40" r="8" fill="#7cc86e" stroke="#3f8f4c" stroke-width="2"/><circle cx="12" cy="-40" r="8" fill="#7cc86e" stroke="#3f8f4c" stroke-width="2"/>${eye(-12, -40, 4)}${eye(12, -40, 4)}
      <path d="M-11 -26q11 7 22 0" fill="none" stroke="#3f8f4c" stroke-width="2" stroke-linecap="round"/>`;
  }
  /* bee. Origin: its middle. About 50 wide, 36 tall */
  function bee() {
    return `<ellipse cx="-4" cy="-14" rx="12" ry="8" transform="rotate(-25 -4 -14)" fill="#dff1f8" stroke="#8fb6cb" stroke-width="1.4" opacity=".9"/><ellipse cx="8" cy="-15" rx="12" ry="8" transform="rotate(20 8 -15)" fill="#dff1f8" stroke="#8fb6cb" stroke-width="1.4" opacity=".9"/>
      <ellipse cx="0" cy="0" rx="20" ry="12" fill="#f7c93e" stroke="#3a2d25" stroke-width="2"/><path d="M-8 -11v22M2 -12v24M11 -10v20" stroke="#3a2d25" stroke-width="4"/>
      <circle cx="-20" cy="0" r="8" fill="#3a2d25"/><circle cx="-23" cy="-2" r="2" fill="#fff"/><path d="M-24 -7l-6 -8M-19 -8l-2 -9" stroke="#3a2d25" stroke-width="1.6" stroke-linecap="round"/><path d="M20 0l7 0" stroke="#3a2d25" stroke-width="2.4" stroke-linecap="round"/>`;
  }
  /* a white water bird (egret) standing. About 56 wide, 104 tall */
  function waterBird() {
    return `${shadow(22, 4)}
      <path d="M-4 -34v34M6 -34v34M-10 0h10M0 0h12" stroke="#3a3a3a" stroke-width="2.4" stroke-linecap="round"/>
      <path d="${blob([[-22, -52], [-6, -64], [14, -58], [20, -44], [8, -32], [-12, -32], [-26, -40]])}" fill="#fff" stroke="#b9cdda" stroke-width="2"/>
      <path d="M-24 -42l-10 10l14 -4z" fill="#fff" stroke="#b9cdda" stroke-width="1.6" stroke-linejoin="round"/>
      <path d="M12 -56C22 -66 6 -78 12 -92" fill="none" stroke="#b9cdda" stroke-width="9.5" stroke-linecap="round"/><path d="M12 -56C22 -66 6 -78 12 -92" fill="none" stroke="#fff" stroke-width="6.5" stroke-linecap="round"/>
      <circle cx="13" cy="-95" r="7.5" fill="#fff" stroke="#b9cdda" stroke-width="2"/><path d="M19 -97l18 3l-18 4z" fill="#f2b134" stroke="#c98c1c" stroke-width="1.2" stroke-linejoin="round"/>${eye(15, -96, 1.8)}`;
  }
  /* grasshopper, side view. About 84 wide, 44 tall */
  function grasshopper() {
    const g = '#8fcf6a', d = '#4f9f52';
    return `${shadow(34, 4)}
      <path d="M-8 -14L-26 -34L-34 -4" fill="none" stroke="${d}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/><path d="M-8 -14L-26 -34L-34 -4" fill="none" stroke="${g}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M2 -10l-2 9M12 -10l4 9" stroke="${d}" stroke-width="2.6" stroke-linecap="round"/>
      <path d="${blob([[-38, -12], [-10, -22], [14, -22], [24, -16], [14, -8], [-12, -7]])}" fill="${g}" stroke="${d}" stroke-width="2"/>
      <path d="M-36 -13C-18 -20 0 -20 12 -19" fill="none" stroke="${d}" stroke-width="1.4" opacity=".7"/>
      <ellipse cx="27" cy="-18" rx="9" ry="10" fill="${g}" stroke="${d}" stroke-width="2"/>${eye(30, -21, 2.6)}
      <path d="M28 -28C30 -40 40 -46 48 -46M24 -28C22 -40 30 -50 38 -52" fill="none" stroke="${d}" stroke-width="1.6" stroke-linecap="round"/>`;
  }
  /* pill bug (woodlouse). About 60 wide, 30 tall */
  function pillbug() {
    let seg = '', legs = '';
    for (let i = 0; i < 6; i++) { const x = -20 + i * 8; seg += `<path d="M${x} -24C${x - 3} -16 ${x - 3} -9 ${x} -3" fill="none" stroke="#5d6a78" stroke-width="1.4"/>`; }
    for (let i = 0; i < 7; i++) legs += `<path d="M${-22 + i * 7} -3l-2 5" stroke="#5d6a78" stroke-width="2" stroke-linecap="round"/>`;
    return `${shadow(26, 4)}${legs}<path d="M-28 -3C-28 -20 -14 -27 0 -27C14 -27 28 -20 28 -3Z" fill="#9aa7b4" stroke="#5d6a78" stroke-width="2" stroke-linejoin="round"/>${seg}
      <path d="M26 -8l8 -6M27 -5l9 -1" stroke="#5d6a78" stroke-width="1.5" stroke-linecap="round"/><circle cx="22" cy="-10" r="1.6" fill="#2a2320"/><path d="M-18 -21C-8 -25 8 -25 18 -21" fill="none" stroke="#fff" stroke-width="2" opacity=".4" stroke-linecap="round"/>`;
  }
  /* spider seen from above: two body parts and eight legs. Origin: its middle. About 84 wide, 70 tall */
  function spider() {
    let legs = '';
    [[-1, -32, -34, -44, -14], [-1, -38, -10, -46, 6], [-1, -36, 12, -44, 26], [-1, -28, 28, -34, 40]].forEach(([s, x1, y1, x2, y2]) => {
      [1, -1].forEach(m => { legs += `<path d="M${m * 8} ${y1 > 0 ? 2 : -4}L${m * -x1} ${y1}L${m * -x2} ${y2}" fill="none" stroke="#5b3f2c" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>`; });
    });
    return `${legs}<ellipse cx="0" cy="10" rx="15" ry="18" fill="#8a5f3c" stroke="#5b3f2c" stroke-width="2"/><ellipse cx="0" cy="-12" rx="10" ry="10" fill="#9c6f48" stroke="#5b3f2c" stroke-width="2"/>
      <circle cx="-4" cy="-16" r="1.8" fill="#2a2320"/><circle cx="4" cy="-16" r="1.8" fill="#2a2320"/><path d="M-6 6q6 6 12 0" fill="none" stroke="#5b3f2c" stroke-width="1.4" opacity=".7"/>`;
  }
  /* scarab (dung beetle) pushing its ball. About 100 wide, 62 tall. ball: false = the beetle alone */
  function scarab(o = {}) {
    const ball = o.ball !== false;
    return `${shadow(ball ? 44 : 24, 5)}
      ${ball ? `<circle cx="24" cy="-28" r="27" fill="#9a7446" stroke="#6f5231" stroke-width="2.2"/><g fill="#6f5231" opacity=".55"><circle cx="14" cy="-38" r="3"/><circle cx="32" cy="-20" r="3.4"/><circle cx="26" cy="-42" r="2.2"/><circle cx="12" cy="-18" r="2.4"/><circle cx="38" cy="-36" r="2.2"/></g>` : ''}
      <path d="M-34 -6l-10 6M-24 -4l-4 5M-12 -8l8 -14M-16 -14l10 -16" stroke="#1d2630" stroke-width="3" stroke-linecap="round"/>
      <ellipse cx="-24" cy="-16" rx="17" ry="12" transform="rotate(-24 -24 -16)" fill="#2c3a4a" stroke="#1d2630" stroke-width="2"/><path d="M-36 -12C-28 -22 -18 -26 -10 -24" fill="none" stroke="#5f7890" stroke-width="2" stroke-linecap="round" opacity=".8"/>
      <circle cx="-40" cy="-6" r="6.5" fill="#2c3a4a" stroke="#1d2630" stroke-width="2"/><path d="M-45 -9l-5 -5M-42 -12l-1 -7" stroke="#1d2630" stroke-width="1.6" stroke-linecap="round"/>`;
  }
  /* camel, side view. About 120 wide, 96 tall */
  function camel() {
    const c = '#d9a86a', line = '#a8773f';
    return `${shadow(46, 6)}
      <path d="M-30 -40V-2M-18 -40V-2M18 -40V-2M30 -40V-2" stroke="${line}" stroke-width="7" stroke-linecap="round"/><path d="M-30 -40V-2M-18 -40V-2M18 -40V-2M30 -40V-2" stroke="${c}" stroke-width="4" stroke-linecap="round"/>
      <path d="${blob([[-40, -46], [-30, -62], [-8, -66], [0, -86], [14, -84], [22, -66], [38, -58], [40, -44], [20, -36], [-22, -36]])}" fill="${c}" stroke="${line}" stroke-width="2.2"/>
      <path d="M36 -56C46 -70 44 -86 50 -94" fill="none" stroke="${line}" stroke-width="11" stroke-linecap="round"/><path d="M36 -56C46 -70 44 -86 50 -94" fill="none" stroke="${c}" stroke-width="7.5" stroke-linecap="round"/>
      <path d="${blob([[46, -100], [58, -100], [66, -92], [60, -86], [48, -88]])}" fill="${c}" stroke="${line}" stroke-width="2"/>${eye(55, -95, 1.8)}<path d="M47 -100l-3 -6" stroke="${line}" stroke-width="2.4" stroke-linecap="round"/>
      <path d="M-40 -48c-6 6 -6 14 -4 20" fill="none" stroke="${line}" stroke-width="2.2" stroke-linecap="round"/>`;
  }

  /* ================= Chapter 1 · plants and places. Origin: on the ground, under the middle ================= */
  /* acacia: thin trunk, flat crown of tiny leaves. About 130 wide, 104 tall */
  function acacia() {
    return `${shadow(30, 5)}<path d="M-3 0C-2 -30 -10 -44 -26 -62M0 -30C6 -46 16 -54 30 -62M-8 -44C-4 -56 0 -60 2 -66" fill="none" stroke="#7a5a3a" stroke-width="6" stroke-linecap="round"/>
      <path d="${blob([[-62, -66], [-40, -84], [-8, -92], [26, -90], [54, -80], [64, -66], [40, -60], [0, -58], [-40, -60]])}" fill="#8fbf62" stroke="#5f9548" stroke-width="2.2"/>
      <path d="${blob([[-44, -72], [-20, -84], [10, -86], [36, -80], [20, -72], [-16, -70]])}" fill="#a5cf78" opacity=".8"/>`;
  }
  /* colocynth: a small striped gourd on the sand with its vine. About 60 wide, 44 tall */
  function colocynth() {
    let st = '';
    [-14, -7, 0, 7, 14].forEach(x => { st += `<path d="M${x} -37C${f1(x * 1.5)} -26 ${f1(x * 1.5)} -12 ${x} -3" fill="none" stroke="#f1e08a" stroke-width="2.4" stroke-linecap="round"/>`; });
    return `${shadow(26, 4)}<path d="M-2 -38C-14 -48 -30 -40 -44 -44" fill="none" stroke="#5f9548" stroke-width="2.6" stroke-linecap="round"/>${leaf(-30, -42, 16, 7, -150)}${leaf(-18, -46, 14, 6, -60)}
      <circle cx="0" cy="-20" r="19" fill="#7fb85a" stroke="#4f8a3c" stroke-width="2.2"/>${st}<path d="M0 -39v-5" stroke="#4f8a3c" stroke-width="3" stroke-linecap="round"/>`;
  }
  /* lotus on its floating leaf. Origin: middle of the leaf. About 90 wide, 60 tall */
  function lotus() {
    let pet = '';
    [-62, -31, 0, 31, 62].forEach(a => { pet += `<path d="M0 -6C-8 -20 -6 -34 0 -42C6 -34 8 -20 0 -6Z" transform="rotate(${a} 0 -6)" fill="${Math.abs(a) > 40 ? '#f7a8c4' : '#fbc4d6'}" stroke="#e07fa3" stroke-width="1.4" stroke-linejoin="round"/>`; });
    return `<ellipse cx="0" cy="0" rx="44" ry="13" fill="#6fbf7a" stroke="#3f8f57" stroke-width="2"/><path d="M0 0L30 -8M0 0L-34 -4M0 0L10 10" stroke="#3f8f57" stroke-width="1.2" opacity=".6"/><path d="M0 0l22 13l-10 -13z" fill="#8fd3ee"/>
      ${pet}<circle cx="0" cy="-12" r="5" fill="#f7d04a" stroke="#d9a51e" stroke-width="1.2"/>`;
  }
  /* papyrus: tall stems with a round head of fine rays. About 90 wide, 120 tall */
  function papyrus() {
    const head = (x, y, r) => { let s = ''; for (let a = -160; a <= -20; a += 14) { const an = a * Math.PI / 180; s += `M${x} ${y}L${f1(x + Math.cos(an) * r)} ${f1(y + Math.sin(an) * r)}`; } for (let a = -200; a <= 20; a += 44) { const an = a * Math.PI / 180; s += `M${x} ${y}L${f1(x + Math.cos(an) * r * .7)} ${f1(y + Math.sin(an) * r * .7)}`; } return `<path d="${s}" stroke="#7fbf62" stroke-width="2.2" stroke-linecap="round"/>`; };
    return `<path d="M-14 0C-16 -40 -22 -70 -28 -92M2 0C2 -40 4 -80 6 -108M16 0C18 -36 26 -60 34 -80" fill="none" stroke="#5f9548" stroke-width="4" stroke-linecap="round"/>
      ${head(-28, -92, 22)}${head(6, -108, 26)}${head(34, -80, 20)}`;
  }
  /* date palm. About 110 wide, 130 tall */
  function palm() {
    let fr = '';
    [-150, -120, -90, -60, -30].forEach((a, i) => { fr += `<path d="M0 -104C${f1(Math.cos(a * Math.PI / 180) * 30)} ${f1(-104 + Math.sin(a * Math.PI / 180) * 34)} ${f1(Math.cos(a * Math.PI / 180) * 52)} ${f1(-104 + Math.sin(a * Math.PI / 180) * 30 + 6)} ${f1(Math.cos(a * Math.PI / 180) * 58)} ${f1(-104 + Math.sin(a * Math.PI / 180) * 20 + 22)}" fill="none" stroke="${i % 2 ? '#5f9548' : '#74b05a'}" stroke-width="9" stroke-linecap="round"/>`; });
    return `${shadow(24, 5)}<path d="M-6 0C-4 -40 -6 -70 -2 -104H4C8 -70 6 -40 8 0Z" fill="#a8845a" stroke="#7a5a3a" stroke-width="2"/><path d="M-5 -20h12M-5 -40h11M-4 -60h9M-3 -80h7" stroke="#7a5a3a" stroke-width="1.6" opacity=".7"/>
      ${fr}<g fill="#c9772e"><circle cx="-6" cy="-98" r="4"/><circle cx="4" cy="-96" r="4"/><circle cx="-1" cy="-92" r="4"/></g>`;
  }
  /* orange tree. About 84 wide, 100 tall */
  function orangeTree() {
    return `${shadow(26, 5)}<rect x="-5" y="-40" width="10" height="42" rx="4" fill="#9a7446"/><g fill="#6fbf63" stroke="#4f9f52" stroke-width="2.2"><circle cx="-20" cy="-56" r="22"/><circle cx="20" cy="-56" r="22"/><circle cx="0" cy="-76" r="25"/></g>
      <g fill="#f79a2e" stroke="#d97a12" stroke-width="1.2"><circle cx="-22" cy="-52" r="6"/><circle cx="16" cy="-48" r="6"/><circle cx="2" cy="-72" r="6"/><circle cx="24" cy="-70" r="5"/><circle cx="-10" cy="-86" r="5"/></g>`;
  }
  const grassTuft = (k = 1) => `<g transform="scale(${k})"><path d="M-14 0C-14 -16 -20 -26 -24 -32M-7 0C-8 -20 -10 -34 -8 -44M0 0C0 -22 4 -36 2 -50M8 0C8 -18 14 -30 18 -38M15 0C16 -12 22 -20 28 -24" fill="none" stroke="#6fb46a" stroke-width="4" stroke-linecap="round"/><path d="M-3 0C-3 -14 -1 -24 -4 -34M11 0C11 -12 12 -22 10 -30" fill="none" stroke="#8fcf7a" stroke-width="3.4" stroke-linecap="round"/></g>`;
  /* a flat stone lying on the ground. About 76 wide, 26 tall */
  const stone = () => `${shadow(36, 5)}<path d="${blob([[-36, -2], [-30, -16], [-8, -24], [18, -22], [34, -12], [36, -2], [0, 2]])}" fill="#b9b3a8" stroke="#8a8478" stroke-width="2.2"/><path d="M-22 -14C-10 -20 8 -20 22 -14" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" opacity=".45"/>`;
  /* a big rock. About 120 wide, 84 tall */
  const rock = () => `<path d="${blob([[-58, 0], [-52, -36], [-30, -66], [6, -80], [38, -66], [56, -34], [60, 0]])}" fill="#c8b596" stroke="#96825f" stroke-width="2.4"/><path d="M-34 -52C-14 -70 14 -72 34 -56" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".4"/><path d="M-10 -78C-4 -50 6 -30 2 0M24 -70C30 -48 34 -24 44 0" fill="none" stroke="#96825f" stroke-width="1.6" opacity=".5"/>`;
  const sun = (r = 26) => { let rays = ''; for (let a = 0; a < 12; a++) { const an = a * 30 * Math.PI / 180; rays += `M${f1(Math.cos(an) * r * 1.25)} ${f1(Math.sin(an) * r * 1.25)}L${f1(Math.cos(an) * r * 1.6)} ${f1(Math.sin(an) * r * 1.6)}`; } return `<path d="${rays}" stroke="#ffd24a" stroke-width="${f1(r * .16)}" stroke-linecap="round"/><circle r="${r}" fill="#ffd24a" stroke="#f2b134" stroke-width="2.4"/>`; };
  const moon = (r = 20, sky = '#27365e') => `<circle r="${r}" fill="#fdf3c4"/><circle cx="${f1(-r * .35)}" cy="${f1(-r * .2)}" r="${f1(r * .88)}" fill="${sky}"/>`;


  /* ================= Chapter 2 · how a butterfly grows ================= */
  /* a big leaf of the plant the larvae eat. Origin: where it joins the stem (left end); it points to the right. About 150 long.
     under: true = its underside (paler), holes: eating marks */
  function bigLeaf(o = {}) {
    const fill = o.under ? '#a9d98c' : '#7cc86e', line = '#4f9f52';
    let veins = '';
    for (let i = 1; i <= 5; i++) { const x = i * 23; veins += `M${x} 0L${x + 14} ${f1(-26 + Math.abs(3 - i) * 5)}M${x} 0L${x + 14} ${f1(26 - Math.abs(3 - i) * 5)}`; }
    const holes = (o.holes || []).map(([x, y, r]) => `<path d="${blob([[x - r, y], [x - r * .4, y - r * .9], [x + r * .7, y - r * .6], [x + r, y + r * .2], [x + r * .2, y + r], [x - r * .7, y + r * .7]])}" fill="${o.bg || '#fdf3dc'}" stroke="${line}" stroke-width="1.2"/>`).join('');
    return `<path d="${leafPath(150, 44)}" fill="${fill}" stroke="${line}" stroke-width="2.4" stroke-linejoin="round"/><path d="M0 0H146" stroke="${line}" stroke-width="2.2"/><path d="${veins}" stroke="${line}" stroke-width="1.2" opacity=".55" fill="none"/>${holes}`;
  }
  /* butterfly egg: a tiny cream dome. Origin: its base. About 12 wide, 14 tall (draw it bigger with at(...)) */
  const egg = () => `<path d="M-6 0C-7 -9 -3 -14 0 -14C3 -14 7 -9 6 0Z" fill="#fff6d8" stroke="#cdb98f" stroke-width="1.2" stroke-linejoin="round"/><path d="M-2 -12V-1M2 -12V-1" stroke="#cdb98f" stroke-width=".8" opacity=".8"/>`;
  /* larva (caterpillar) walking to the right. Origin: on the leaf, under its middle. size 0 … 1: a newly hatched brown larva … a big striped one.
     About 26 … 86 long. skin: true = the old skin it has just taken off lies behind it */
  function larva(o = {}) {
    const k = o.size == null ? 1 : clamp(o.size, 0, 1), n = Math.round(lerp(5, 11, k)), r = lerp(4.2, 8.6, k), step = r * 1.15, x0 = -((n - 1) * step) / 2;
    const young = k < .3;
    let s = '', legs = '';
    for (let i = 0; i < n; i++) {
      const x = x0 + i * step, y = -r - (i === n - 1 ? r * .15 : Math.sin(i * 1.4) * r * .12);
      const fill = i === n - 1 ? (young ? '#4a3626' : '#2f2a28') : young ? (i % 2 ? '#8a6240' : '#9c7550') : ['#fff8e6', '#2f2a28', '#f7d04a'][i % 3];
      if (i < n - 1 && i % 2 === 0) legs += `<path d="M${f1(x)} ${f1(-r * .3)}l0 ${f1(r * .45)}" stroke="#2f2a28" stroke-width="${f1(r * .32)}" stroke-linecap="round"/>`;
      s += `<circle cx="${f1(x)}" cy="${f1(y)}" r="${f1(r)}" fill="${fill}" stroke="#2f2a28" stroke-width="${f1(lerp(1, 1.6, k))}"/>`;
    }
    const hx = x0 + (n - 1) * step, hy = -r * 1.15;
    const horns = young ? '' : `<path d="M${f1(hx + r * .3)} ${f1(hy - r * .8)}C${f1(hx + r)} ${f1(hy - r * 2.2)} ${f1(hx + r * 1.8)} ${f1(hy - r * 2.4)} ${f1(hx + r * 2.2)} ${f1(hy - r * 2)}M${f1(x0 + step)} ${f1(-r * 1.9)}C${f1(x0)} ${f1(-r * 3)} ${f1(x0 - r)} ${f1(-r * 3)} ${f1(x0 - r * 1.4)} ${f1(-r * 2.6)}" fill="none" stroke="#2f2a28" stroke-width="${f1(r * .22)}" stroke-linecap="round"/>`;
    const skin = o.skin ? `<path d="M${f1(x0 - step * 2.6)} ${f1(-r * .1)}c${f1(-r)} ${f1(-r * 1.4)} ${f1(r)} ${f1(-r * 1.8)} ${f1(r * 1.6)} ${f1(-r * .6)}c${f1(r * .6)} ${f1(-r)} ${f1(r * 1.6)} ${f1(-r * .4)} ${f1(r * 1.2)} ${f1(r * .6)}z" fill="#e9dcc0" stroke="#b9a57c" stroke-width="1" opacity=".9" stroke-dasharray="2 2"/>` : '';
    return `${skin}${legs}${horns}${s}<circle cx="${f1(hx + r * .3)}" cy="${f1(hy)}" r="${f1(r * .22)}" fill="#fff"/>`;
  }
  /* pupa (chrysalis) hanging from a leaf or stem. Origin: the point it hangs from. About 34 wide, 62 tall.
     split: 0 … 1 = the back splits open; empty: true = the empty case after the butterfly came out */
  function pupa(o = {}) {
    const sp = clamp(o.split || 0, 0, 1), fill = o.empty ? '#e6e9dc' : '#7fd0a6', line = o.empty ? '#a9b39c' : '#3f9b78';
    return `<path d="M0 0v8" stroke="#3a2d25" stroke-width="3" stroke-linecap="round"/>
      <path d="${blob([[0, 8], [10, 12], [16, 26], [14, 44], [6, 58], [0, 62], [-6, 58], [-14, 44], [-16, 26], [-10, 12]])}" fill="${fill}" stroke="${line}" stroke-width="2" opacity="${o.empty ? .8 : 1}"/>
      ${o.empty ? '' : `<path d="M-13 22C-5 18 5 18 13 22" fill="none" stroke="#f1d66a" stroke-width="2.6" stroke-linecap="round"/><g fill="#f1d66a"><circle cx="-6" cy="36" r="1.5"/><circle cx="5" cy="40" r="1.5"/><circle cx="0" cy="50" r="1.5"/></g><path d="M-9 14C-11 26 -9 44 -3 56" fill="none" stroke="#fff" stroke-width="2" opacity=".45" stroke-linecap="round"/>`}
      ${sp > 0 || o.empty ? `<path d="M2 12l${f1(-4 - sp * 3)} 10l${f1(6 + sp * 4)} 8l${f1(-6 - sp * 4)} 10l5 8" fill="none" stroke="#2f2a28" stroke-width="${f1(1.2 + sp * 1.6)}" stroke-linejoin="round" stroke-linecap="round"/>` : ''}`;
  }
  const WING = { fill: '#f39a3c', dark: '#2f2a28', vein: '#b9621a' };
  /* one wing shape with its black border and white dots; the caller places and scales it */
  function wingShape(pts, dots) {
    const d = blob(pts), inner = blob(pts.map(([x, y]) => [x * .86, y * .86]));
    return `<path d="${d}" fill="${WING.dark}" stroke="${WING.dark}" stroke-width="1.5"/><path d="${inner}" fill="${WING.fill}" transform="translate(${f1(pts[0][0] * .1)} ${f1(pts[0][1] * .1)})"/>
      ${dots.map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r || 1.8}" fill="#fff"/>`).join('')}`;
  }
  /* butterfly seen from above, wings open: 4 wings, 3 body parts, 6 legs on the thorax, 2 antennae. Origin: middle of the thorax.
     About 150 wide, 110 tall. parts: true = head, thorax and abdomen in three clear colours (for the body-parts picture) */
  function butterflyTop(o = {}) {
    const fore = [[4, -6], [26, -40], [58, -50], [72, -34], [64, -8], [34, 2]], hind = [[4, 2], [36, 4], [58, 18], [54, 40], [30, 46], [10, 28]];
    const fd = [[60, -42], [67, -30], [64, -16], [48, -47], [36, -42]], hd = [[52, 20], [52, 34], [38, 43], [22, 40]];
    const wings = `${wingShape(hind, hd)}${wingShape(fore, fd)}<path d="M8 -6L56 -36M8 -4L62 -18M8 4L50 24M8 6L34 38" stroke="${WING.vein}" stroke-width="1" opacity=".7"/>`;
    const C = o.parts ? { head: '#e5533d', thorax: '#f2b134', abdomen: '#4c9be8' } : { head: '#2f2a28', thorax: '#3a3432', abdomen: '#4a403a' };
    const legs = o.legs === false ? '' : [[-6, -16, -6], [-9, -2, 0], [-6, 14, 8]].map(([dx, y1, dy]) => `<path d="M-4 ${dy - 2}L${-14 + dx} ${y1}M4 ${dy - 2}L${14 - dx} ${y1}" stroke="#2f2a28" stroke-width="1.8" stroke-linecap="round"/>`).join('');
    return `${wings}${flip(wings)}${legs}
      <ellipse cx="0" cy="26" rx="5" ry="20" fill="${C.abdomen}" stroke="#2f2a28" stroke-width="1.4"/><path d="M-4.5 16h9M-5 24h10M-4.5 32h9M-3.5 40h7" stroke="#2f2a28" stroke-width=".9" opacity=".6"/>
      <ellipse cx="0" cy="-2" rx="7" ry="10" fill="${C.thorax}" stroke="#2f2a28" stroke-width="1.4"/>
      <circle cx="0" cy="-17" r="6.5" fill="${C.head}" stroke="#2f2a28" stroke-width="1.4"/><circle cx="-3.4" cy="-19" r="1.6" fill="#fff"/><circle cx="3.4" cy="-19" r="1.6" fill="#fff"/>
      <path d="M-2 -23C-6 -36 -12 -42 -18 -44M2 -23C6 -36 12 -42 18 -44" fill="none" stroke="#2f2a28" stroke-width="1.6" stroke-linecap="round"/><circle cx="-18" cy="-44" r="2" fill="#2f2a28"/><circle cx="18" cy="-44" r="2" fill="#2f2a28"/>`;
  }
  /* butterfly seen from the side, wings held up, standing. Origin: under its feet. About 96 wide, 104 tall.
     wrinkle: 1 = just out of the pupa, wings small and wrinkled … 0 = wings stretched out */
  function butterflySide(o = {}) {
    const w = clamp(o.wrinkle || 0, 0, 1), k = lerp(1, .42, w);
    const fore = [[0, 0], [-8, -34], [10, -66], [38, -72], [50, -52], [40, -22], [20, -4]], hind = [[0, 0], [22, -2], [44, -8], [50, 10], [36, 24], [14, 18]];
    const wing = `<g transform="translate(-2 -34) scale(${f1(k)})">${wingShape(hind, [[44, 8], [36, 18], [22, 16]])}${wingShape(fore, [[40, -62], [46, -48], [42, -32], [24, -66], [10, -56]])}
      <path d="M2 -4L30 -64M4 -2L44 -40M4 0L42 8M4 2L26 18" stroke="${WING.vein}" stroke-width="1" opacity=".7"/>${w > .3 ? `<path d="M6 -40q8 6 4 14t8 12M22 -52q-4 10 6 16" fill="none" stroke="${WING.dark}" stroke-width="1.6" opacity=".6"/>` : ''}</g>`;
    return `<path d="M-14 -30L-22 -2M-8 -30L-8 -2M-2 -30L6 -2" stroke="#2f2a28" stroke-width="2" stroke-linecap="round"/>
      ${wing}
      <ellipse cx="16" cy="-26" rx="20" ry="5.5" transform="rotate(14 16 -26)" fill="#4a403a" stroke="#2f2a28" stroke-width="1.4"/>
      <ellipse cx="-8" cy="-33" rx="10" ry="7.5" fill="#3a3432" stroke="#2f2a28" stroke-width="1.4"/><g fill="#fff"><circle cx="-10" cy="-35" r="1.3"/><circle cx="-5" cy="-31" r="1.3"/></g>
      <circle cx="-22" cy="-38" r="6.5" fill="#2f2a28"/><circle cx="-24" cy="-40" r="2" fill="#fff"/>
      <path d="M-25 -44C-30 -58 -38 -64 -46 -64M-21 -44C-22 -58 -26 -68 -32 -72" fill="none" stroke="#2f2a28" stroke-width="1.6" stroke-linecap="round"/><circle cx="-46" cy="-64" r="2" fill="#2f2a28"/><circle cx="-32" cy="-72" r="2" fill="#2f2a28"/>
      <path d="M-27 -34c-5 3 -6 7 -3 9" fill="none" stroke="#2f2a28" stroke-width="1.6" stroke-linecap="round"/>`;
  }
  /* a head of small flowers on a stalk (the butterfly's food). Origin: bottom of the stalk. About 60 wide, 70 tall */
  function flowerHead() {
    let fl = '';
    [[-16, -52, '#f79ac0'], [0, -58, '#f7d04a'], [16, -52, '#f79ac0'], [-8, -44, '#f7d04a'], [8, -44, '#fbb65a'], [-22, -42, '#fbb65a'], [22, -42, '#f7d04a'], [0, -48, '#f79ac0']].forEach(([x, y, c]) => { fl += `<circle cx="${x}" cy="${y}" r="7" fill="${c}" stroke="#fff" stroke-width="1.2"/><circle cx="${x}" cy="${y}" r="2" fill="#e2603f"/>`; });
    return `<path d="M0 0C-2 -16 2 -30 0 -44" fill="none" stroke="#5f9548" stroke-width="4" stroke-linecap="round"/>${leaf(0, -14, 22, 8, -20)}${leaf(0, -22, 22, 8, 200)}${fl}`;
  }
  /* dragonfly from above. Origin: its middle. About 110 wide, 76 tall */
  function dragonfly() {
    const w = (r, y) => `<ellipse cx="30" cy="${y}" rx="26" ry="7" transform="rotate(${r} 4 ${y})" fill="#dff1f8" stroke="#6ea3c0" stroke-width="1.4" opacity=".9"/>`;
    const wings = w(-16, -12) + w(12, -4);
    return `${wings}${flip(wings)}<path d="M0 0V40" stroke="#2a7a9a" stroke-width="5" stroke-linecap="round"/><path d="M-2 10h4M-2 18h4M-2 26h4M-2 34h4" stroke="#18506a" stroke-width="1"/>
      <ellipse cx="0" cy="-8" rx="6" ry="9" fill="#3aa0c4" stroke="#18506a" stroke-width="1.4"/><circle cx="0" cy="-21" r="7" fill="#3aa0c4" stroke="#18506a" stroke-width="1.4"/><circle cx="-4" cy="-23" r="3" fill="#18506a"/><circle cx="4" cy="-23" r="3" fill="#18506a"/>`;
  }
  /* ant, side view. About 66 wide, 34 tall */
  function ant() {
    return `${shadow(26, 4)}<path d="M-6 -12l-8 12M0 -12l0 12M6 -12l10 12" stroke="#2f2a28" stroke-width="2.2" stroke-linecap="round"/>
      <ellipse cx="-20" cy="-16" rx="13" ry="9" fill="#3a3432"/><ellipse cx="0" cy="-15" rx="8" ry="6" fill="#3a3432"/><circle cx="16" cy="-18" r="8" fill="#3a3432"/><circle cx="19" cy="-20" r="2" fill="#fff"/>
      <path d="M20 -25C22 -34 28 -38 34 -38M16 -26C16 -34 20 -40 26 -42" fill="none" stroke="#2f2a28" stroke-width="1.6" stroke-linecap="round"/>`;
  }

  /* ================= Chapter 3 · how a plant grows ================= */
  /* seeds, each drawn lying down. Origin: its middle. kind: sunflower (about 46 long) | chickpea (about 22) | fava (about 44) | bean (about 40) */
  function seed(kind) {
    if (kind === 'chickpea') return `<path d="${blob([[-10, 2], [-8, -9], [2, -12], [11, -6], [11, 5], [3, 11], [-6, 9]])}" fill="#f1dfa0" stroke="#c9ab5c" stroke-width="1.6"/><path d="M8 -8l6 -3" stroke="#c9ab5c" stroke-width="2.4" stroke-linecap="round"/><path d="M-5 -5c4 -3 8 -3 11 0M-4 4c4 2 7 2 10 0" fill="none" stroke="#c9ab5c" stroke-width="1" opacity=".8"/>`;
    if (kind === 'fava') return `<path d="${blob([[-22, 0], [-16, -13], [2, -16], [18, -11], [22, 2], [14, 13], [-6, 15], [-18, 10]])}" fill="#e3c9a0" stroke="#a8875a" stroke-width="1.8"/><path d="M-10 13c6 2 14 2 20 -2" fill="none" stroke="#3a2d25" stroke-width="3.4" stroke-linecap="round"/><path d="M-12 -8c8 -5 18 -5 26 -1" fill="none" stroke="#fff" stroke-width="2" opacity=".4" stroke-linecap="round"/>`;
    if (kind === 'bean') return `<path d="${blob([[-20, 1], [-16, -10], [-2, -13], [14, -10], [20, 0], [14, 9], [4, 8], [-4, 5], [-12, 9]])}" fill="#fbf6ea" stroke="#cdbf9f" stroke-width="1.8"/><ellipse cx="-2" cy="6" rx="4" ry="1.8" fill="#e9dcc0"/>`;
    return `<path d="M-23 0C-14 -13 8 -14 23 0C8 14 -14 13 -23 0Z" fill="#f4f1ea" stroke="#3a3432" stroke-width="1.8" stroke-linejoin="round"/><path d="M-18 -2C-8 -9 8 -9 18 -1M-18 2C-8 9 8 9 18 1M-20 0H20" fill="none" stroke="#3a3432" stroke-width="2.6" stroke-linecap="round"/>`;
  }
  /* a block of soil seen from the side. Origin: top middle (the ground line). w wide, h deep */
  function soil(w = 200, h = 80) {
    let dots = '';
    for (let i = 0; i < Math.round(w * h / 900); i++) { const x = ((i * 53) % w) - w / 2 + 6, y = 10 + ((i * 37) % (h - 16)); dots += `<circle cx="${f1(x)}" cy="${y}" r="${1.4 + (i % 3) * .7}" fill="#6f4c2c" opacity=".55"/>`; }
    return `<path d="M${-w / 2} 0h${w}v${h - 12}a12 12 0 0 1 -12 12h${-(w - 24)}a12 12 0 0 1 -12 -12z" fill="#8a5f38"/><path d="M${-w / 2} 0h${w}v10h${-w}z" fill="#74502e"/>${dots}`;
  }
  /* roots under the ground line. Origin: where the stem meets the soil. depth: how far down the main root goes */
  function roots(depth = 60, spread = 1) {
    const d = depth, s = spread;
    return `<path d="M0 0C-2 ${f1(d * .4)} 3 ${f1(d * .7)} 0 ${d}M0 ${f1(d * .15)}C${f1(-12 * s)} ${f1(d * .25)} ${f1(-22 * s)} ${f1(d * .3)} ${f1(-30 * s)} ${f1(d * .5)}M0 ${f1(d * .2)}C${f1(12 * s)} ${f1(d * .3)} ${f1(24 * s)} ${f1(d * .35)} ${f1(32 * s)} ${f1(d * .55)}M0 ${f1(d * .45)}C${f1(-10 * s)} ${f1(d * .55)} ${f1(-16 * s)} ${f1(d * .7)} ${f1(-20 * s)} ${f1(d * .86)}M0 ${f1(d * .5)}C${f1(10 * s)} ${f1(d * .6)} ${f1(16 * s)} ${f1(d * .74)} ${f1(18 * s)} ${f1(d * .9)}M${f1(-18 * s)} ${f1(d * .34)}l${f1(-8 * s)} ${f1(d * .06)}M${f1(20 * s)} ${f1(d * .4)}l${f1(9 * s)} ${f1(d * .05)}"
      fill="none" stroke="#f1e6c8" stroke-width="2.6" stroke-linecap="round"/>`;
  }
  /* true leaf of the sunflower, with its jagged (toothed) edge: a short stalk, then the blade, from (0,0) to (len,0) */
  function trueLeaf(x, y, len, rot) {
    const st = len * .16, L = len - st, W = len * .3, n = 6, env = t => W * Math.pow(Math.sin(Math.PI * Math.pow(t, .62)), .9);
    let top = '', bot = '';
    for (let i = 1; i < 2 * n; i++) { const t = i / (2 * n), xx = st + L * t, w = env(t) * (i % 2 ? 1 : .8); top += `L${f1(xx)} ${f1(-w)}`; bot = `L${f1(xx)} ${f1(w)}` + bot; }
    return `<g transform="translate(${f1(x)} ${f1(y)}) rotate(${rot})"><path d="M0 0H${f1(st)}" stroke="#5fae58" stroke-width="2.2" stroke-linecap="round"/><path d="M${f1(st)} 0${top}L${len} 0${bot}Z" fill="#5fae58" stroke="#3f8a44" stroke-width="1.3" stroke-linejoin="round"/>
      <path d="M${f1(st)} 0H${f1(len - 4)}M${f1(st + L * .3)} 0l${f1(L * .14)} ${f1(-W * .55)}M${f1(st + L * .3)} 0l${f1(L * .14)} ${f1(W * .55)}M${f1(st + L * .56)} 0l${f1(L * .12)} ${f1(-W * .4)}M${f1(st + L * .56)} 0l${f1(L * .12)} ${f1(W * .4)}" stroke="#3f8a44" stroke-width=".9" fill="none" opacity=".75"/></g>`;
  }
  /* round seed leaf (cotyledon): from (0,0) to (len,0) */
  const seedLeaf = (x, y, len, rot) => `<g transform="translate(${f1(x)} ${f1(y)}) rotate(${rot})"><path d="M0 0C${f1(len * .2)} ${f1(-len * .36)} ${f1(len * .9)} ${f1(-len * .4)} ${len} 0C${f1(len * .9)} ${f1(len * .4)} ${f1(len * .2)} ${f1(len * .36)} 0 0Z" fill="#9ad67c" stroke="#5fae58" stroke-width="1.4" stroke-linejoin="round"/><path d="M2 0H${f1(len - 5)}" stroke="#5fae58" stroke-width="1" opacity=".7"/></g>`;
  /* the sunflower's head. Origin: its middle. r = radius of the dark middle. seeds: true = withered, full of seeds */
  function sunHead(r = 16, seedsOnly = false) {
    let pet = '', dots = '';
    const n = 16;
    for (let i = 0; i < n; i++) pet += `<path d="M0 ${-r * .8}C${f1(-r * .34)} ${f1(-r * 1.5)} ${f1(-r * .2)} ${f1(-r * 2)} 0 ${f1(-r * 2.15)}C${f1(r * .2)} ${f1(-r * 2)} ${f1(r * .34)} ${f1(-r * 1.5)} 0 ${-r * .8}Z" transform="rotate(${i * 360 / n})" fill="${seedsOnly ? '#b9a86a' : i % 2 ? '#f7c93e' : '#fbd657'}" stroke="${seedsOnly ? '#8c7c44' : '#e0a81e'}" stroke-width="1"/>`;
    if (seedsOnly) for (let i = 0; i < 26; i++) { const a = i * 2.4, d = r * .92 * Math.sqrt((i + .5) / 26); dots += `<ellipse cx="${f1(Math.cos(a) * d)}" cy="${f1(Math.sin(a) * d)}" rx="${f1(r * .14)}" ry="${f1(r * .09)}" transform="rotate(${f1(a * 57.3)} ${f1(Math.cos(a) * d)} ${f1(Math.sin(a) * d)})" fill="#f4f1ea" stroke="#2a2320" stroke-width=".8"/>`; }
    return `${seedsOnly ? `<g transform="scale(.62)">${pet}</g>` : pet}<circle r="${r}" fill="${seedsOnly ? '#3a2d25' : '#6b4423'}" stroke="#3a2d25" stroke-width="1.6"/>${seedsOnly ? dots : `<circle r="${f1(r * .55)}" fill="#8a5a2c" opacity=".7"/>`}`;
  }
  /* the sunflower at each step of its life. Origin: where the stem meets the soil.
     stage: 1 sprout coming out · 2 two round seed leaves · 3 true leaves above the seed leaves · 4 tall plant with a bud · 5 flower · 6 withered head full of seeds
     roots: true = draw the roots under the ground line (put soil() behind it first). The stage-5 plant is about 150 tall */
  function sunflower(o = {}) {
    const st = o.stage || 5, R = o.roots ? roots([0, 22, 34, 48, 64, 70, 70][st], [0, .5, .7, .9, 1.1, 1.2, 1.2][st]) : '';
    const stem = (h, w = 4) => `<path d="M0 0C${f1(-h * .03)} ${f1(-h * .4)} ${f1(h * .03)} ${f1(-h * .7)} 0 ${-h}" fill="none" stroke="#5fae58" stroke-width="${w}" stroke-linecap="round"/>`;
    if (st === 1) return `${R}<path d="M0 0C-2 -10 2 -18 10 -20" fill="none" stroke="#b9dc8a" stroke-width="4.5" stroke-linecap="round"/>${at(14, -19, .5, seed('sunflower'), -30)}`;
    if (st === 2) return `${R}${stem(34)}${seedLeaf(0, -34, 26, -152)}${seedLeaf(0, -34, 26, -28)}${o.coat === false ? '' : at(18, -2, .42, seed('sunflower'), 12)}`;
    if (st === 3) return `${R}${stem(58)}${seedLeaf(0, -28, 24, -170)}${seedLeaf(0, -28, 24, -10)}${trueLeaf(0, -56, 38, -150)}${trueLeaf(0, -56, 38, -30)}${trueLeaf(0, -58, 16, -90)}`;
    const h = st === 4 ? 104 : 120;
    let lv = '';
    [[.18, 50, -168], [.3, 52, -14], [.44, 46, -160], [.56, 44, -22], [.7, 36, -152], [.8, 32, -30]].forEach(([t, len, rot]) => { lv += trueLeaf(0, -h * t, len, rot); });
    const top = st === 4 ? `<path d="M0 ${-h}c-10 -2 -14 -12 -10 -20c6 -6 14 -6 20 0c4 8 0 18 -10 20z" fill="#7cc86e" stroke="#3f8a44" stroke-width="1.6"/><path d="M-8 ${-h - 8}l8 -14l8 14" fill="none" stroke="#3f8a44" stroke-width="1.4"/>`
      : `<g transform="translate(0 ${-h - 18})${st === 6 ? ' rotate(14)' : ''}">${sunHead(17, st === 6)}</g>`;
    return `${R}${stem(h, 5.5)}${lv}${top}`;
  }
  /* fava bean plant. Origin: where the stem meets the soil. About 90 wide, 130 tall. stage: 'sprout' | 'leaves' | 'flowers' | 'pods' */
  function fava(o = {}) {
    const stg = o.stage || 'leaves', R = o.roots ? roots(stg === 'sprout' ? 34 : 60, stg === 'sprout' ? .6 : 1) : '';
    if (stg === 'sprout') return `${R}<path d="M0 0C-1 -14 1 -24 0 -34" fill="none" stroke="#5fae58" stroke-width="4" stroke-linecap="round"/>${leaf(0, -34, 22, 11, -150, '#8fd27a')}${leaf(0, -34, 22, 11, -30, '#8fd27a')}${leaf(0, -34, 12, 6, -90, '#a5dc8c')}`;
    const h = 118; let lv = '', extra = '';
    [.2, .36, .52, .68, .84].forEach((t, i) => { const y = -h * t, s = i % 2 ? 1 : -1; lv += `<path d="M0 ${f1(y)}l${s * 16} -8" stroke="#5fae58" stroke-width="2.4" stroke-linecap="round"/>${leaf(s * 14, y - 7, 22, 8, s > 0 ? -34 : -146, '#7cc86e')}${leaf(s * 14, y - 7, 22, 8, s > 0 ? 6 : 174, '#6fbf63')}${leaf(s * 26, y - 12, 16, 6, s > 0 ? -60 : -120, '#8fd27a')}`; });
    if (stg === 'flowers') [.44, .6, .76].forEach((t, i) => { const y = -h * t, s = i % 2 ? -1 : 1; extra += `<g transform="translate(${s * 7} ${f1(y)})"><path d="M0 0c${s * 4} -9 ${s * 14} -10 ${s * 16} -2c${s * -2} 7 ${s * -10} 9 ${s * -16} 2z" fill="#fff" stroke="#b9a7c9" stroke-width="1.2"/><circle cx="${s * 10}" cy="-1" r="3" fill="#3a2d4a"/></g>`; });
    if (stg === 'pods') [.36, .52, .68].forEach((t, i) => { const y = -h * t, s = i % 2 ? -1 : 1; extra += `<path d="M${s * 3} ${f1(y)}C${s * 14} ${f1(y + 6)} ${s * 16} ${f1(y + 26)} ${s * 9} ${f1(y + 36)}C${s * 2} ${f1(y + 26)} ${s * 2} ${f1(y + 10)} ${s * 3} ${f1(y)}Z" fill="#8fcf6a" stroke="#4f9f52" stroke-width="1.6" stroke-linejoin="round"/><path d="M${s * 8} ${f1(y + 10)}q${s * 3} 4 0 8q${s * 3} 4 0 8" fill="none" stroke="#4f9f52" stroke-width="1" opacity=".7"/>`; });
    return `${R}<path d="M0 0C-3 ${-h * .4} 3 ${-h * .7} 0 ${-h}" fill="none" stroke="#5fae58" stroke-width="5" stroke-linecap="round"/>${lv}${extra}${leaf(0, -h, 14, 6, -90, '#a5dc8c')}`;
  }
  /* a flower bud, an open flower, and the fruit that grows from the flower's base. Origin: bottom of the stalk. About 60 wide, 90 tall */
  function bud() { return `<path d="M0 0C-2 -20 2 -36 0 -52" fill="none" stroke="#5fae58" stroke-width="4" stroke-linecap="round"/>${leaf(0, -18, 22, 8, -24)}<path d="M0 -50C-11 -54 -13 -70 0 -84C13 -70 11 -54 0 -50Z" fill="#8fd27a" stroke="#3f8a44" stroke-width="1.8" stroke-linejoin="round"/><path d="M0 -52v-28M-6 -56c2 -8 4 -16 6 -24M6 -56c-2 -8 -4 -16 -6 -24" fill="none" stroke="#3f8a44" stroke-width="1" opacity=".7"/><path d="M0 -84c-2 2 -3 5 -2 8l2 -2l2 2c1 -3 0 -6 -2 -8z" fill="#f79ac0"/>`; }
  function bloom(o = {}) {
    const wilt = clamp(o.wilt || 0, 0, 1); let pet = '';
    for (let i = 0; i < 6; i++) pet += `<path d="M0 0C-9 -8 -9 -22 0 -28C9 -22 9 -8 0 0Z" transform="rotate(${i * 60 + wilt * (i % 2 ? 40 : -30)}) scale(${f1(1 - wilt * .45)})" fill="${mix('#f79ac0', '#b98a6a', wilt)}" stroke="${mix('#e06a9a', '#8a6a4a', wilt)}" stroke-width="1.2" stroke-linejoin="round"/>`;
    return `<path d="M0 0C-2 -20 2 -36 0 -52" fill="none" stroke="#5fae58" stroke-width="4" stroke-linecap="round"/>${leaf(0, -18, 22, 8, -24)}
      <path d="M-7 -52C-8 -${f1(60 + wilt * 6)} 8 -${f1(60 + wilt * 6)} 7 -52C5 -48 -5 -48 -7 -52Z" fill="#7cc86e" stroke="#3f8a44" stroke-width="1.6" transform="scale(${f1(1 + wilt * .5)} 1)"/>
      <g transform="translate(0 ${f1(-64 - wilt * 4)})">${pet}<circle r="${f1(6 - wilt * 3)}" fill="#f7d04a" stroke="#d9a51e" stroke-width="1.2"/></g>`;
  }
  function fruit(o = {}) {
    const open = o.open, sd = open ? `<g fill="#3a2d25">${[-14, -4, 6, 16].map((y, i) => `<ellipse cx="${i % 2 ? 3 : -3}" cy="${-66 + y + 8}" rx="4.4" ry="5.4"/>`).join('')}</g>` : '';
    return `<path d="M0 0C-2 -16 2 -28 0 -40" fill="none" stroke="#5fae58" stroke-width="4" stroke-linecap="round"/>${leaf(0, -16, 22, 8, -24)}
      <path d="${blob([[0, -40], [14, -48], [17, -66], [10, -84], [0, -90], [-10, -84], [-17, -66], [-14, -48]])}" fill="${open ? '#f6e3b0' : '#e8804a'}" stroke="${open ? '#c9a45c' : '#b9521d'}" stroke-width="2"/>${sd}
      ${open ? '' : '<path d="M-9 -54C-12 -66 -8 -78 -2 -84" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" opacity=".45"/>'}<path d="M0 -90l-5 -7M0 -90l5 -7M0 -90v-8" stroke="#8a6a4a" stroke-width="1.6" stroke-linecap="round"/>`;
  }
  /* watering can, tipped to pour. Origin: bottom middle. About 96 wide, 70 tall. pour: true = drops */
  function wateringCan(o = {}) {
    return `<path d="M-26 0V-44h52V0z" fill="#8fd3ee" stroke="#5aa9cd" stroke-width="3" stroke-linejoin="round"/><path d="M26 -32L58 -52l6 8L26 -14z" fill="#8fd3ee" stroke="#5aa9cd" stroke-width="3" stroke-linejoin="round"/>
      <path d="M-26 -36C-52 -40 -52 -8 -26 -10" fill="none" stroke="#5aa9cd" stroke-width="6" stroke-linecap="round"/><path d="M-18 -34v26" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".5"/>
      ${o.pour ? '<g fill="#6cbde8"><path d="M66 -42c2 3 3 4 3 6a3 3 0 0 1-6 0c0-2 1-3 3-6z"/><path d="M74 -30c2 3 3 4 3 6a3 3 0 0 1-6 0c0-2 1-3 3-6z"/><path d="M64 -24c2 3 3 4 3 6a3 3 0 0 1-6 0c0-2 1-3 3-6z"/><path d="M72 -12c2 3 3 4 3 6a3 3 0 0 1-6 0c0-2 1-3 3-6z"/></g>' : ''}`;
  }
  /* ruler standing on the ground. Origin: its bottom-left corner. h = its height in drawing units, each `unit` is one mark; labels every 5 marks */
  function ruler(h = 120, unit = 8) {
    let ticks = '';
    for (let i = 0; i * unit <= h - 4; i++) ticks += `<path d="M0 ${-i * unit}h${i % 5 === 0 ? 9 : 5}" stroke="#7a5a2a" stroke-width="1.2"/>${i % 5 === 0 && i ? `<text x="11" y="${-i * unit + 3}" font-size="7" font-weight="800" fill="#7a5a2a" font-family="Nunito,Arial,sans-serif">${i}</text>` : ''}`;
    return `<rect x="0" y="${-h}" width="20" height="${h}" rx="2" fill="#ffe9a8" stroke="#c9a23c" stroke-width="1.6"/>${ticks}`;
  }


  /* a big insect seen from above, drawn large so that each body part is easy to tap: head, thorax (with the 6 legs and 4 wings), abdomen.
     Origin: middle of the thorax; the head points to the left. About 250 wide, 170 tall */
  function insectBig(o = {}) {
    const C = o.plain ? { head: '#8a6a4a', thorax: '#8a6a4a', abdomen: '#8a6a4a' } : { head: '#f08a6c', thorax: '#f7cf5a', abdomen: '#7fb8e6' }, line = '#3a2d25';
    const leg = (x, a, b) => `<path d="M${x} ${a > 0 ? 18 : -18}L${x + b} ${a}L${x + b * 1.9} ${a * 1.28}" fill="none" stroke="${line}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>`;
    const wing = (rot, len) => `<path d="M6 0C${f1(len * .3)} -22 ${f1(len * .9)} -26 ${len} -6C${f1(len * .9)} 10 ${f1(len * .3)} 10 6 0Z" transform="rotate(${rot})" fill="#dff1f8" stroke="#8fb6cb" stroke-width="1.6" opacity=".85"/>`;
    return `${wing(-52, 92)}${wing(-22, 104)}${wing(52, 92).replace('-22', '22').replace('-26', '26').replace('-6C', '6C')}${wing(22, 104).replace('-22', '22').replace('-26', '26').replace('-6C', '6C')}
      ${leg(-14, -52, -12)}${leg(0, -58, 2)}${leg(14, -52, 14)}${leg(-14, 52, -12)}${leg(0, 58, 2)}${leg(14, 52, 14)}
      <ellipse cx="78" cy="0" rx="52" ry="30" fill="${C.abdomen}" stroke="${line}" stroke-width="2.6"/><path d="M52 -26V26M72 -30V30M92 -28V28M110 -22V22" stroke="${line}" stroke-width="1.4" opacity=".45"/>
      <ellipse cx="0" cy="0" rx="30" ry="24" fill="${C.thorax}" stroke="${line}" stroke-width="2.6"/>
      <circle cx="-52" cy="0" r="24" fill="${C.head}" stroke="${line}" stroke-width="2.6"/><ellipse cx="-62" cy="-13" rx="6" ry="8" fill="${line}"/><ellipse cx="-62" cy="13" rx="6" ry="8" fill="${line}"/><circle cx="-64" cy="-15" r="2" fill="#fff"/><circle cx="-64" cy="11" r="2" fill="#fff"/>
      <path d="M-70 -14C-86 -30 -98 -34 -112 -30M-70 14C-86 30 -98 34 -112 30" fill="none" stroke="${line}" stroke-width="3" stroke-linecap="round"/><path d="M-76 -3l-7 3l7 3" fill="none" stroke="${line}" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>`;
  }

  /* ================= tap pictures for the question pages (340 wide) ================= */
  const hot = (id, label, inner) => `<g class="hot" data-id="${id}" role="button" tabindex="0" aria-label="${label}">${inner}</g>`;
  const svgOpen = (h, label) => `<svg class="diagram" viewBox="0 0 340 ${h}" role="img" aria-label="${label}">`;
  const frame = (h, fill) => `<rect width="340" height="${h}" rx="14" fill="${fill}"/>`;
  const ground = (h, y, fill, line) => `<path d="M0 ${y}h340v${h - y - 14}a14 14 0 0 1-14 14h-312a14 14 0 0 1-14-14z" fill="${fill}"/>${line ? `<rect y="${y}" width="340" height="6" fill="${line}"/>` : ''}`;
  const tile = (x, y, w, h, fill, inner) => `<g transform="translate(${x} ${y})"><rect width="${w}" height="${h}" rx="10" fill="${fill}" stroke="#fff" stroke-width="3"/>${inner}</g>`;
  const ringRect = (x, y, w, h) => `<rect class="ring" x="${x}" y="${y}" width="${w}" height="${h}" rx="14"/>`;
  const ringEl = (cx, cy, rx, ry) => `<ellipse class="ring" cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}"/>`;

  /* Chapter 1 */
  function hidePlaces() {
    return `${svgOpen(240, T('A dry place: a clump of grass, a flat stone, a big rock in the sun, and open hot sand', 'مكان جاف: حشائش، وحجر مسطح، وصخرة كبيرة في الشمس، ورمال ساخنة مكشوفة'))}
      ${frame(240, '#cdeaf7')}${at(300, 36, 1, sun(18))}${ground(240, 150, '#f1d9a0', '#e3c583')}
      <path d="M0 196q40 -10 80 0t80 0t80 0t100 0" fill="none" stroke="#e3c583" stroke-width="3" opacity=".7"/>
      ${at(40, 152, .9, grassTuft())}${at(62, 156, 1.15, grassTuft())}${at(86, 152, .8, grassTuft())}
      ${at(158, 160, 1.05, stone())}${at(268, 156, .95, rock())}
      ${hot('grass', T('In the grass', 'بين الحشائش'), ringEl(62, 122, 50, 44))}
      ${hot('stone', T('Under the stone', 'أسفل الحجر'), ringEl(158, 146, 48, 26))}
      ${hot('rock', T('On the sunny rock', 'فوق الصخرة المشمسة'), ringEl(268, 110, 58, 54))}
      ${hot('sand', T('In the middle of the hot sand', 'وسط الرمال الساخنة'), ringEl(150, 208, 84, 20))}</svg>`;
  }
  function nileDesert() {
    return `${svgOpen(230, T('Two habitats side by side: the bank of the Nile River on the left, and the desert on the right', 'موطنان جنبًا إلى جنب: ضفاف نهر النيل على اليسار، والصحراء على اليمين'))}
      <defs><clipPath id="ndL"><rect width="166" height="230" rx="14"/></clipPath><clipPath id="ndR"><rect x="174" width="166" height="230" rx="14"/></clipPath></defs>
      <g clip-path="url(#ndL)"><rect width="170" height="230" fill="#cdeaf7"/><rect y="96" width="170" height="70" fill="#8fd3ee"/><path d="M0 112q14 -6 28 0t28 0t28 0t28 0t28 0t30 0M0 138q14 -6 28 0t28 0t28 0t28 0t28 0t30 0" fill="none" stroke="#fff" stroke-width="2.4" opacity=".7"/>
        <path d="M0 160C40 148 110 150 170 162V230H0Z" fill="#a8dc86"/><path d="M0 196C50 186 120 190 170 198V230H0Z" fill="#8a5f38" opacity=".55"/>
        ${at(30, 180, .9, palm())}${at(96, 176, .55, grassTuft())}${at(124, 182, .7, grassTuft())}${at(146, 174, .5, grassTuft())}${at(70, 190, .6, grassTuft())}</g>
      <g clip-path="url(#ndR)"><rect x="174" width="170" height="230" fill="#fbe9c6"/>${at(306, 40, 1, sun(18))}
        <path d="M174 150C210 116 250 118 286 140C306 150 326 148 340 140V230H174Z" fill="#f1d9a0"/><path d="M174 186C214 164 262 172 300 190C318 198 332 196 340 192V230H174Z" fill="#e9c583"/>
        <path d="M190 206q20 -8 40 0t40 0t40 0" fill="none" stroke="#d9b06a" stroke-width="2.4" opacity=".7"/>${at(226, 178, .5, rock())}</g>
      ${hot('nile', T('Along the Nile River', 'ضفاف نهر النيل'), ringRect(6, 6, 154, 218))}${hot('desert', T('The desert', 'الصحراء'), ringRect(180, 6, 154, 218))}</svg>`;
  }
  function fennec() {
    return `${svgOpen(250, T('A fennec fox sitting on the sand: its ears, its feet and its tail', 'ثعلب الفنك جالس على الرمال: أذناه وقدماه وذيله'))}
      ${frame(250, '#fbe9c6')}${ground(250, 196, '#f1d9a0', '#e3c583')}${at(160, 214, 1.5, fox())}
      ${hot('ears', T('The ears', 'الأذنان'), ringEl(160, 58, 76, 46))}${hot('feet', T('The feet', 'القدمان'), ringEl(160, 212, 40, 16))}${hot('tail', T('The tail', 'الذيل'), ringEl(240, 170, 28, 34))}</svg>`;
  }
  function desertDay() {
    return `${svgOpen(240, T('The desert in the daytime, cut open to show the ground: a dune in the sun, open sand, and a cool hole under the ground', 'الصحراء في النهار، ومقطع يبيّن ما تحت الأرض: كثيب رملي في الشمس، ورمال مكشوفة، وجُحر بارد تحت الأرض'))}
      ${frame(240, '#fde7b0')}${at(60, 40, 1, sun(22))}
      <path d="M0 118C60 112 120 116 170 112C200 108 220 60 262 56C300 54 320 100 340 106V226a14 14 0 0 1-14 14H14a14 14 0 0 1-14-14Z" fill="#f1d9a0"/>
      <path d="M0 128C60 122 120 126 176 122C230 118 300 122 340 118V226a14 14 0 0 1-14 14H14a14 14 0 0 1-14-14Z" fill="#c9a36a"/>
      <path d="M52 124C60 150 84 160 104 170" fill="none" stroke="#7a5a3a" stroke-width="16" stroke-linecap="round"/><ellipse cx="132" cy="186" rx="44" ry="26" fill="#7a5a3a"/>
      <path d="M52 124C60 150 84 160 104 170" fill="none" stroke="#5d452c" stroke-width="10" stroke-linecap="round"/><ellipse cx="132" cy="186" rx="38" ry="21" fill="#5d452c"/>
      <g fill="#b98f5c" opacity=".7"><circle cx="230" cy="160" r="3"/><circle cx="270" cy="190" r="4"/><circle cx="300" cy="150" r="3"/><circle cx="30" cy="190" r="4"/><circle cx="210" cy="212" r="3"/></g>
      ${hot('dune', T('On top of the dune, in the sun', 'فوق الكثيب الرملي في الشمس'), ringEl(262, 78, 52, 28))}${hot('sand', T('On the open sand', 'على الرمال المكشوفة'), ringEl(140, 104, 46, 16))}${hot('hole', T('In the hole under the ground', 'في الجُحر تحت الأرض'), ringEl(132, 186, 52, 32))}</svg>`;
  }

  /* Chapter 2 */
  const stagePic = {
    egg: () => `${at(8, 56, .44, bigLeaf({ under: true }))}${at(40, 56, 1.5, egg())}`,
    larva: () => `${at(4, 64, .46, bigLeaf({ holes: [[112, -14, 10]], bg: '#e6f3f8' }))}${at(34, 62, .62, larva({ size: 1 }))}`,
    pupa: () => `<path d="M6 16C30 10 54 12 70 20" fill="none" stroke="#5f9548" stroke-width="4" stroke-linecap="round"/>${at(22, 17, .3, bigLeaf(), 164)}${at(40, 15, 1.05, pupa())}`,
    adult: () => `${at(30, 94, .7, flowerHead())}${at(42, 62, .56, butterflySide())}`
  };
  function butterflyStages() {
    const order = ['pupa', 'egg', 'adult', 'larva'], names = { egg: T('Picture of the egg', 'صورة البيضة'), larva: T('Picture of the larva', 'صورة اليرقة'), pupa: T('Picture of the pupa', 'صورة الشرنقة'), adult: T('Picture of the adult', 'صورة الحشرة البالغة') };
    return `${svgOpen(120, T('Four pictures of a butterfly at different times of its life, not in order', 'أربع صور للفراشة في أوقات مختلفة من حياتها، غير مرتبة'))}
      ${order.map((k, i) => tile(4 + i * 84, 6, 80, 108, '#e6f3f8', stagePic[k]()) + hot(k, names[k], ringRect(4 + i * 84, 6, 80, 108))).join('')}</svg>`;
  }
  function insectBody() {
    return `${svgOpen(210, T('An insect seen from above: its body has three parts', 'حشرة من أعلى: جسمها مكوَّن من ثلاثة أجزاء'))}
      ${frame(210, '#eef7e6')}${at(152, 105, 1.02, insectBig())}
      ${hot('head', T('The first part, with the eyes and the antennae', 'الجزء الأول، وعليه العينان وقرنا الاستشعار'), ringEl(96, 105, 30, 32))}${hot('thorax', T('The middle part', 'الجزء الأوسط'), ringEl(152, 105, 26, 30))}${hot('abdomen', T('The last part', 'الجزء الأخير'), ringEl(234, 105, 56, 36))}</svg>`;
  }
  function insectSide() {
    return `${svgOpen(240, T('A butterfly seen from the side, standing on a flower', 'فراشة من الجانب، واقفة على زهرة'))}
      ${frame(240, '#e6f3f8')}${ground(240, 214, '#bfe59c')}${at(160, 228, 1.25, flowerHead())}${at(172, 152, 1.3, butterflySide())}
      ${hot('antennae', T('The two long thin parts on the head', 'الجزءان الطويلان الرفيعان على الرأس'), ringEl(122, 62, 32, 24))}${hot('wings', T('The wide coloured parts', 'الأجزاء العريضة الملوّنة'), ringEl(208, 76, 50, 58))}${hot('legs', T('The thin parts it stands on', 'الأجزاء الرفيعة التي تقف عليها'), ringEl(160, 136, 30, 18))}</svg>`;
  }
  function whoIsInsect() {
    const pic = { spider: at(52, 50, .95, spider()), grasshopper: at(52, 80, 1.05, grasshopper()), pillbug: at(50, 74, 1.4, pillbug()) };
    const names = { spider: T('The animal with eight legs', 'الحيوان الذي له ثماني أرجل'), grasshopper: T('The green animal with six legs', 'الحيوان الأخضر الذي له ست أرجل'), pillbug: T('The grey animal with many legs', 'الحيوان الرمادي الذي له أرجل كثيرة') };
    return `${svgOpen(116, T('Three small animals: one with eight legs, one green with six legs, one grey with many legs', 'ثلاثة حيوانات صغيرة: واحد له ثماني أرجل، وواحد أخضر له ست أرجل، وواحد رمادي له أرجل كثيرة'))}
      ${['spider', 'grasshopper', 'pillbug'].map((k, i) => tile(5 + i * 112, 6, 106, 104, '#fdf3dc', pic[k]) + hot(k, names[k], ringRect(5 + i * 112, 6, 106, 104))).join('')}</svg>`;
  }

  /* Chapter 3 */
  function seedKinds() {
    const pic = { fava: at(53, 54, 1.6, seed('fava')), sunflower: at(53, 54, 1.7, seed('sunflower'), -20), chickpea: at(53, 54, 1.9, seed('chickpea')) };
    const names = { fava: T('The flat seed with a dark line', 'البذرة المسطحة التي بها خط داكن'), sunflower: T('The seed with black and white stripes', 'البذرة التي بها خطوط سوداء وبيضاء'), chickpea: T('The small light yellow seed', 'البذرة الصغيرة ذات اللون الأصفر الفاتح') };
    return `${svgOpen(116, T('Three different seeds', 'ثلاث بذور مختلفة'))}
      ${['fava', 'sunflower', 'chickpea'].map((k, i) => tile(5 + i * 112, 6, 106, 104, '#f6e7cf', pic[k]) + hot(k, names[k], ringRect(5 + i * 112, 6, 106, 104))).join('')}</svg>`;
  }
  function sowDepth() {
    const cm = n => T(`${n} cm`, `${n} سم`), txt = (x, y, s) => `<text x="${x}" y="${y}" text-anchor="middle" font-size="12" font-weight="900" fill="#fff" font-family="Nunito,Cairo,Arial,sans-serif">${s}</text>`;
    return `${svgOpen(220, T('Soil cut open to show three seeds: one under a high pile of soil, one in a hole about 1 cm deep, one in a very deep hole', 'مقطع في التربة يبيّن ثلاث بذور: واحدة فوقها كومة عالية من التربة، وواحدة في حفرة عمقها حوالي ١ سم، وواحدة في حفرة عميقة جدًّا'))}
      ${frame(220, '#cdeaf7')}${at(170, 78, 1, soil(340, 142))}
      <path d="M22 78C36 40 46 20 58 20C70 20 80 40 94 78Z" fill="#8a5f38"/><path d="M34 62c10 -22 16 -34 24 -34" fill="none" stroke="#a9794a" stroke-width="3" stroke-linecap="round"/>${at(58, 72, .5, seed('sunflower'))}
      <path d="M160 78v16a10 8 0 0 0 20 0v-16z" fill="#74502e"/>${at(170, 92, .5, seed('sunflower'))}<path d="M190 78v16" stroke="#fff" stroke-width="2"/><path d="M186 78h8M186 94h8" stroke="#fff" stroke-width="2"/>${txt(214, 91, cm(1))}
      <path d="M270 78v104a10 8 0 0 0 20 0v-104z" fill="#74502e"/>${at(280, 180, .5, seed('sunflower'))}<path d="M300 78v104" stroke="#fff" stroke-width="2"/><path d="M296 78h8M296 182h8" stroke="#fff" stroke-width="2"/>${txt(318, 134, cm(10))}
      ${hot('heap', T('The seed under a high pile of soil', 'البذرة التي فوقها كومة عالية من التربة'), ringRect(8, 8, 100, 204))}${hot('right', T('The seed in a hole about 1 cm deep', 'البذرة في حفرة عمقها حوالي ١ سم'), ringRect(124, 8, 108, 204))}${hot('deep', T('The seed in a very deep hole', 'البذرة في حفرة عميقة جدًّا'), ringRect(246, 8, 86, 204))}</svg>`;
  }
  function seedlingLeaves() {
    return `${svgOpen(240, T('A young sunflower: two round leaves below, and leaves with jagged edges above them', 'نبتة عباد شمس صغيرة: ورقتان مستديرتان في الأسفل، وفوقهما أوراق حوافها مسننة'))}
      ${frame(240, '#e6f3f8')}${ground(240, 208, '#8a5f38', '#74502e')}${at(170, 210, 2.3, sunflower({ stage: 3 }))}
      ${hot('trueleaf', T('The leaves with jagged edges, at the top', 'الأوراق ذات الحواف المسننة، في الأعلى'), ringEl(170, 60, 100, 38))}${hot('seedleaf', T('The two round leaves, lower down', 'الورقتان المستديرتان، في الأسفل'), ringEl(170, 146, 66, 20))}</svg>`;
  }
  function flowerFruit() {
    const pic = { flower: at(53, 100, 1, bloom()), fruit: at(53, 100, 1, fruit()), bud: at(53, 100, 1, bud()) };
    const names = { flower: T('The open flower', 'الزهرة المتفتحة'), fruit: T('The swollen part with no petals', 'الجزء المنتفخ الذي ليس له بتلات'), bud: T('The closed green part', 'الجزء الأخضر المغلق') };
    return `${svgOpen(116, T('Three pictures of the top of a plant at different times, not in order', 'ثلاث صور لأعلى النبات في أوقات مختلفة، غير مرتبة'))}
      ${['flower', 'fruit', 'bud'].map((k, i) => tile(5 + i * 112, 6, 106, 104, '#e6f3f8', pic[k]) + hot(k, names[k], ringRect(5 + i * 112, 6, 106, 104))).join('')}</svg>`;
  }
  function plantBody() {
    let lv = '';
    [[.56, 48, -166], [.64, 50, -16], [.76, 42, -158], [.84, 40, -24], [.94, 30, -150], [.98, 26, -34]].forEach(([t, len, rot]) => { lv += trueLeaf(0, -128 * t, len, rot); });
    return `${svgOpen(250, T('A whole plant: the parts above the ground and the parts under the ground', 'نبات كامل: الأجزاء التي فوق الأرض والأجزاء التي تحت الأرض'))}
      ${frame(250, '#e6f3f8')}${at(170, 150, 1, soil(340, 100))}
      ${at(170, 150, 1, `${roots(78, 1.9)}<path d="M0 0C-3 -50 3 -90 0 -128" fill="none" stroke="#5fae58" stroke-width="7" stroke-linecap="round"/>${lv}`)}
      ${hot('leaves', T('The wide flat green parts', 'الأجزاء الخضراء العريضة المسطحة'), ringEl(170, 46, 96, 40))}${hot('stem', T('The long part that stands up', 'الجزء الطويل القائم'), ringEl(170, 116, 24, 30))}${hot('roots', T('The parts under the ground', 'الأجزاء التي تحت الأرض'), ringEl(170, 198, 92, 42))}</svg>`;
  }

  window.G4ART = { at, flip, blob, mix, leaf, leafPath, eye, shadow, fox, jerboa, lizard, frog, bee, waterBird, grasshopper, pillbug, spider, scarab, camel,
    acacia, colocynth, lotus, papyrus, palm, orangeTree, grassTuft, stone, rock, sun, moon,
    bigLeaf, egg, larva, pupa, butterflyTop, butterflySide, flowerHead, dragonfly, ant,
    seed, soil, roots, trueLeaf, seedLeaf, sunHead, sunflower, fava, bud, bloom, fruit, wateringCan, ruler, insectBig };
  window.CH_DIAGRAMS = Object.assign(window.CH_DIAGRAMS || {}, { hidePlaces, nileDesert, fennec, desertDay, butterflyStages, insectBody, insectSide, whoIsInsect,
    seedKinds, sowDepth, seedlingLeaves, flowerFruit, plantBody });
})();
