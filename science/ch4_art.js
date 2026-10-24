/* Science Island · Chapter 4 "Conditions for Growth" · drawings made in code (SVG).
   Shared by the chapter's game (growlab.html), the tap pictures of the question pages (quiz.html) and the map (tools/make_ch456_maps.js).
     plant(o)      a kidney bean seedling. o.h = height (0 … 1), o.leaf = leaf colour (1 dark green … 0 yellowish),
                   o.th = stem thickness (0 thin … 1 thick), o.big = leaf size (0 small … 1 big). Origin: where the stem meets the soil
     pot(o)        a flower pot with its seedling. o.label = 'A' or 'B', o.box = covered with a dark cardboard box, o.fert = fertilizer on the soil
     station(o)    a pot in its place: in the sun (o.sun) or under a dark box (o.box)
     sun(r)        the sun · box() the dark cardboard box · bag() a bag of fertilizer · ruler(h)
     look(kind)    the seedlings after about a week: 'sunA' (with sunlight), 'sunB' (without), 'fertA' (water only), 'fertB' (with fertilizer)
   window.CH_DIAGRAMS adds this chapter's tap pictures: potsSun, plantsSun, potsFert, plantsFert.
   What the school book shows (pages 44-49): with sunlight = dark green leaves, thick strong stem; without sunlight = yellowish leaves,
   thin and long stem; with fertilizer = taller, bigger and stronger plant. */
(function () {
  'use strict';
  const T = (en, ar) => (window.SI ? window.SI.T(en, ar) : en);
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const f1 = n => (Math.round(n * 10) / 10).toString();
  const hex2rgb = h => [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16));
  const mix = (a, b, t) => { const A = hex2rgb(a), B = hex2rgb(b); t = clamp(t, 0, 1); return '#' + A.map((v, i) => Math.round(A[i] + (B[i] - A[i]) * t).toString(16).padStart(2, '0')).join(''); };

  /* one leaf: a pointed oval that starts at (0,0) and points to the right; rot turns it */
  const leaf = (len, wid, rot, col) => `<g transform="rotate(${rot})"><path d="M0 0C${f1(len * .2)} ${f1(-wid)} ${f1(len * .75)} ${f1(-wid)} ${f1(len)} 0C${f1(len * .75)} ${f1(wid)} ${f1(len * .2)} ${f1(wid)} 0 0Z" fill="${col}" stroke="${mix(col, '#1d5a2c', .45)}" stroke-width="1.6" stroke-linejoin="round"/>
    <path d="M2 0H${f1(len * .86)}" stroke="${mix(col, '#1d5a2c', .4)}" stroke-width="1.2" opacity=".7"/></g>`;

  /* ---------- the seedling ---------- */
  function plant(o = {}) {
    const h = clamp(o.h == null ? .6 : o.h, 0, 1), lc = clamp(o.leaf == null ? 1 : o.leaf, 0, 1), th = clamp(o.th == null ? 1 : o.th, 0, 1), big = clamp(o.big == null ? 1 : o.big, 0, 1);
    const H = 34 + 78 * h, w = 2.6 + 5.4 * th, col = mix('#cfc760', '#2f8d49', lc), col2 = mix('#dcd56e', '#3fa458', lc);
    const L = 11 + 15 * big, W = 5 + 6 * big, lean = (1 - th) * 7;
    let s = `<path d="M0 0C${f1(-lean * .3)} ${f1(-H * .35)} ${f1(lean)} ${f1(-H * .7)} ${f1(lean)} ${f1(-H)}" fill="none" stroke="${mix('#cfc760', '#5fae58', lc * .6 + .3)}" stroke-width="${f1(w)}" stroke-linecap="round"/>`;
    [[.42, 1], [.68, -1]].forEach(([t, side], i) => {
      const y = -H * t, x = lean * t * t;
      s += `<g transform="translate(${f1(x)} ${f1(y)})">${side > 0 ? leaf(L * (1 - i * .1), W, -28 - i * 8, col) : leaf(L * (1 - i * .1), W, 180 + 28 + i * 8, col2)}</g>`;
    });
    s += `<g transform="translate(${f1(lean)} ${f1(-H)})">${leaf(L * .95, W, -62, col2)}${leaf(L * .95, W, 180 + 62, col)}${leaf(L * .8, W * .9, -90, col)}</g>`;
    return s;
  }

  /* ---------- pot, box, sun, fertilizer ---------- */
  const potBody = label => `<ellipse cx="0" cy="3" rx="42" ry="7" fill="#000" opacity=".1"/>
    <path d="M-34 -50L-28 -2Q0 6 28 -2L34 -50Z" fill="#d98a5f" stroke="#a9623b" stroke-width="2.6" stroke-linejoin="round"/>
    <rect x="-39" y="-60" width="78" height="14" rx="6" fill="#e59b72" stroke="#a9623b" stroke-width="2.6"/>
    <ellipse cx="0" cy="-58" rx="33" ry="5" fill="#6b4a2a"/>
    ${label ? `<circle cx="0" cy="-24" r="12" fill="#fff8ea" stroke="#a9623b" stroke-width="2"/><text x="0" y="-19" text-anchor="middle" font-family="Nunito,sans-serif" font-size="15" font-weight="900" fill="#1f3d57" direction="ltr">${label}</text>` : ''}`;
  const pellets = () => [[-18, -57, 0], [-6, -55, 1], [10, -58, 0], [20, -55, 1], [2, -61, 0], [-24, -60, 1]].map(([x, y, a]) => `<circle cx="${x}" cy="${y}" r="2.6" fill="${a ? '#fff' : '#f3ecd8'}" stroke="#cfc4a6" stroke-width=".8"/>`).join('');
  function pot(o = {}) {
    return `${potBody(o.label)}<g transform="translate(0 -58)">${o.noPlant ? '' : plant(o)}</g>${o.fert ? pellets() : ''}`;
  }
  function sun(r = 24) {
    let rays = ''; for (let a = 0; a < 12; a++) { const an = a * Math.PI / 6; rays += `M${f1(Math.cos(an) * (r + 6))} ${f1(Math.sin(an) * (r + 6))}L${f1(Math.cos(an) * (r + 15))} ${f1(Math.sin(an) * (r + 15))}`; }
    return `<path d="${rays}" stroke="#ffd24a" stroke-width="4" stroke-linecap="round"/><circle r="${r}" fill="#ffd24a" stroke="#f2b134" stroke-width="3"/><circle cx="-7" cy="-7" r="${f1(r * .3)}" fill="#fff" opacity=".4"/>`;
  }
  /* the dark cardboard box that covers a pot. Origin: bottom middle */
  function box() {
    return `<ellipse cx="0" cy="3" rx="56" ry="8" fill="#000" opacity=".14"/>
      <path d="M-50 0V-96h100V0z" fill="#b98b57" stroke="#8a6334" stroke-width="3" stroke-linejoin="round"/>
      <path d="M-50 -96L-40 -108H40L50 -96" fill="#c99d66" stroke="#8a6334" stroke-width="3" stroke-linejoin="round"/>
      <path d="M-50 -60H50" stroke="#8a6334" stroke-width="2" opacity=".4"/><path d="M-30 -46h60" stroke="#8a6334" stroke-width="3" stroke-linecap="round" opacity=".35"/>
      <rect x="-14" y="-84" width="28" height="9" rx="4" fill="#7b5628" opacity=".5"/>`;
  }
  /* a bag of fertilizer. Origin: bottom middle */
  function bag() {
    return `<ellipse cx="0" cy="3" rx="30" ry="6" fill="#000" opacity=".1"/><path d="M-26 0V-62L-18 -72H18L26 -62V0Z" fill="#fff8ea" stroke="#cdb98f" stroke-width="2.6" stroke-linejoin="round"/>
      <path d="M-18 -72Q0 -62 18 -72" fill="none" stroke="#cdb98f" stroke-width="2.6"/><rect x="-18" y="-50" width="36" height="26" rx="8" fill="#bfe8d6" stroke="#7fc4a7" stroke-width="2"/>
      <path d="M0 -30V-44M0 -38C-6 -44 -10 -40 -10 -40M0 -34C6 -40 10 -36 10 -36" fill="none" stroke="#2e9e6b" stroke-width="2.4" stroke-linecap="round"/>`;
  }
  function ruler(h = 120) {
    let t = ''; for (let i = 0; i <= h; i += 10) t += `<path d="M0 ${-i}h${i % 50 === 0 ? 14 : 8}" stroke="#7a6a3c" stroke-width="1.6"/>`;
    return `<rect x="-6" y="${-h - 6}" width="30" height="${h + 12}" rx="4" fill="#f3dc8f" stroke="#c9ad55" stroke-width="2"/>${t}`;
  }

  /* a pot in its place: the sun above it, or a dark box over it */
  function station(o = {}) {
    const light = o.sun ? `<g transform="translate(40 -150)">${sun(18)}</g><path d="M-30 -120L-22 -92M0 -126V-96M30 -120L22 -92" stroke="#ffd24a" stroke-width="3" stroke-linecap="round" opacity=".7"/>` : '';
    if (o.box) return `<g>${box()}</g>${o.label ? `<circle cx="0" cy="-48" r="15" fill="#fff8ea" stroke="#8a6334" stroke-width="2.4"/><text x="0" y="-42" text-anchor="middle" font-family="Nunito,sans-serif" font-size="19" font-weight="900" fill="#1f3d57" direction="ltr">${o.label}</text>` : ''}`;
    return `${light}${pot(o)}`;
  }

  /* what the seedlings look like after about a week (book: Check page 49 and the pictures on pages 44 and 46) */
  const LOOK = {
    sunA: { h: .62, leaf: 1, th: 1, big: 1 },          // with sunlight: dark green leaves, thick strong stem
    sunB: { h: .98, leaf: 0, th: 0, big: .3 },         // without sunlight: yellowish leaves, thin and long stem
    fertA: { h: .42, leaf: .85, th: .45, big: .45 },   // water only
    fertB: { h: 1, leaf: 1, th: .9, big: 1 }           // with fertilizer: taller, bigger and stronger
  };
  const look = kind => LOOK[kind];

  /* ---------- tap pictures for the question pages ---------- */
  const hot = (id, label, inner) => `<g class="hot" data-id="${id}" role="button" tabindex="0" aria-label="${label}">${inner}</g>`;
  const bench = (w, h, y) => `<rect width="${w}" height="${h}" rx="14" fill="#eaf5fb"/><path d="M0 ${y}h${w}v${h - y - 14}a14 14 0 0 1-14 14h-${w - 28}a14 14 0 0 1-14-14z" fill="#e4c394"/><rect y="${y}" width="${w}" height="7" fill="#d2ab78"/>`;
  const pots = (a, b, label, tall) => {
    const ar = T(false, true), xa = ar ? 248 : 92, xb = ar ? 92 : 248;   // Arabic reads from the right: pot (أ) on the right, like the school book
    return `<svg class="diagram" viewBox="0 0 340 250" role="img" aria-label="${label}">${bench(340, 250, 212)}
      <g transform="translate(${xa} 220)">${a}</g><g transform="translate(${xb} 220)">${b}</g>
      ${hot('A', T('Pot A', 'الإناء (أ)'), `<rect class="ring" x="${xa - 78}" y="10" width="156" height="226" rx="16"/>`)}
      ${hot('B', T('Pot B', 'الإناء (ب)'), `<rect class="ring" x="${xb - 78}" y="10" width="156" height="226" rx="16"/>`)}</svg>`;
  };
  const potsSun = () => pots(station({ label: 'A', sun: true, h: .3, leaf: 1, th: 1, big: .7 }), station({ label: 'B', box: true }),
    T('Pot A is in a place that gets a lot of sunlight. Pot B is covered with a dark box that blocks the sunlight.', 'الإناء (أ) في مكان يصله الكثير من ضوء الشمس. الإناء (ب) مغطى بصندوق مظلم يمنع ضوء الشمس.'));
  const plantsSun = () => pots(pot(Object.assign({ label: 'A' }, LOOK.sunA)), pot(Object.assign({ label: 'B' }, LOOK.sunB)),
    T('Two seedlings after about a week. Seedling A has dark green leaves and a thick stem. Seedling B has yellowish leaves and a thin, long stem.', 'نبتتان بعد حوالي أسبوع. للنبتة (أ) أوراق خضراء داكنة وساق سميكة. للنبتة (ب) أوراق مائلة للاصفرار وساق رفيعة وطويلة.'));
  const potsFert = () => pots(`${pot({ label: 'A', h: .25, leaf: 1, th: .8, big: .5 })}<g transform="translate(66 0)"></g>`, `${pot({ label: 'B', h: .25, leaf: 1, th: .8, big: .5, fert: true })}`,
    T('Both pots get sunlight. Pot A gets only water. Pot B gets water mixed with a fixed amount of fertilizer.', 'الإناءان يصلهما ضوء الشمس. الإناء (أ) يُسقى بالماء فقط. الإناء (ب) يُسقى بماء مخلوط بكمية محددة من السماد.'));
  const plantsFert = () => pots(pot(Object.assign({ label: 'A' }, LOOK.fertA)), pot(Object.assign({ label: 'B', fert: true }, LOOK.fertB)),
    T('Two seedlings in the same place. Seedling A is smaller. Seedling B is much taller and bigger.', 'نبتتان في نفس المكان. النبتة (أ) أصغر. النبتة (ب) أطول وأكبر بكثير.'));

  window.CH4ART = { plant, pot, station, sun, box, bag, ruler, look, mix, leaf };
  window.CH_DIAGRAMS = Object.assign(window.CH_DIAGRAMS || {}, { potsSun, plantsSun, potsFert, plantsFert });
})();
