/* Science Island · Chapter 3 "Conditions for Germination" · drawings made in code (SVG).
   Shared by the chapter's game (seedlab.html), the tap pictures of the question pages (quiz.html) and the map (tools/make_ch3_map.js).
     bean(...)      the kidney bean: whole with its seed coat, peeled, or split into its two cotyledons with the embryo;
                    stain = how blue-black the iodine turned the cotyledon (1 = a lot of starch, about .2 = very faint)
     cup(...)       a plastic cup: moist cotton, dry cotton, or seeds under water; g = how far the seeds have germinated (0 … 1)
     station(...)   a cup in its place: a warm room, inside a dark cardboard box on wooden blocks, or inside the refrigerator
     germinates(c)  the rule of the chapter: water AND air AND an appropriate temperature. Light is not needed.
   window.CH_DIAGRAMS adds this chapter's tap pictures: seedParts, iodineSeeds, cupsWater, cupsAir, cupsTemp. */
(function () {
  'use strict';
  const T = (en, ar) => (window.SI ? window.SI.T(en, ar) : en);
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const lerp = (a, b, t) => a + (b - a) * t;
  const f1 = n => (Math.round(n * 10) / 10).toString();
  const hex2rgb = h => [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16));
  const mix = (a, b, t) => { const A = hex2rgb(a), B = hex2rgb(b); t = clamp(t, 0, 1); return '#' + A.map((v, i) => Math.round(lerp(v, B[i], t)).toString(16).padStart(2, '0')).join(''); };
  let uid = 0;

  /* smooth closed curve through points */
  function blob(pts) {
    const n = pts.length, P = i => pts[((i % n) + n) % n];
    let d = `M${f1(pts[0][0])} ${f1(pts[0][1])}`;
    for (let i = 0; i < n; i++) {
      const p0 = P(i - 1), p1 = P(i), p2 = P(i + 1), p3 = P(i + 2);
      d += `C${f1(p1[0] + (p2[0] - p0[0]) / 6)} ${f1(p1[1] + (p2[1] - p0[1]) / 6)} ${f1(p2[0] - (p3[0] - p1[0]) / 6)} ${f1(p2[1] - (p3[1] - p1[1]) / 6)} ${f1(p2[0])} ${f1(p2[1])}`;
    }
    return d + 'Z';
  }

  const germinates = c => !!(c.water && c.air && c.warm);

  /* ---------- the kidney bean. Origin: its middle. About 104 wide and 64 tall ---------- */
  const KIDNEY = blob([[-52, 2], [-46, -20], [-24, -31], [4, -32], [32, -26], [49, -10], [51, 10], [39, 25], [19, 28], [4, 17], [-10, 15], [-25, 25], [-41, 22]]);
  const SPECKS = [[-34, -8, 5, 3, 20], [-18, -20, 6, 3, -15], [2, -12, 7, 4, 10], [22, -18, 5, 3, 30], [36, -2, 6, 3, -20], [-28, 10, 5, 3, 0], [26, 12, 6, 3, 15], [-6, 0, 4, 2.5, 40], [12, 4, 4, 2.5, -30], [40, 14, 3.5, 2, 0], [-42, 2, 3.5, 2, 60]];
  /* whole seed. coat: 1 = with its red-brown seed coat, 0 = peeled (cream) */
  function beanWhole(coat = 1, wet = 0) {
    const fill = mix('#f4e4bd', '#a3463a', coat), line = mix('#cdb98f', '#6f2c26', coat);
    let sp = '';
    if (coat > .5) SPECKS.forEach(([x, y, rx, ry, r]) => { sp += `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" transform="rotate(${r} ${x} ${y})" fill="#ecd0ad" opacity=".9"/>`; });
    return `<path d="${KIDNEY}" fill="${fill}" stroke="${line}" stroke-width="2.4" stroke-linejoin="round"/>${sp}
      <ellipse cx="-3" cy="15.5" rx="8" ry="3.4" fill="#fff8e6" stroke="${line}" stroke-width="1.4"/>
      <path d="M-36 -14C-22 -26 6 -28 28 -22" fill="none" stroke="#fff" stroke-width="${f1(3 + wet * 2.5)}" stroke-linecap="round" opacity="${f1(.28 + wet * .3)}"/>`;
  }
  /* the seed coat after peeling: an empty, wrinkled skin */
  function coatSkin() {
    return `<path d="M-30 6C-34 -12 -16 -22 4 -20C24 -18 36 -8 30 6C22 0 10 10 0 4C-10 12 -20 0 -30 6Z" fill="#a3463a" stroke="#6f2c26" stroke-width="2" stroke-linejoin="round"/>
      <path d="M-18 -8c8 -6 22 -6 32 0M-10 -2c6 -3 14 -3 20 0" fill="none" stroke="#6f2c26" stroke-width="1.4" stroke-linecap="round" opacity=".6"/>
      <ellipse cx="-12" cy="-12" rx="5" ry="2.6" fill="#ecd0ad" opacity=".9"/><ellipse cx="14" cy="-10" rx="4" ry="2.2" fill="#ecd0ad" opacity=".9"/>`;
  }
  /* one cotyledon (half of the seed), standing upright. Origin: its middle; 54 wide, 92 tall */
  const HALF = blob([[0, -46], [18, -40], [26, -18], [27, 8], [22, 30], [8, 45], [-8, 45], [-22, 30], [-27, 8], [-26, -18], [-18, -40]]);
  function stainShape(k) {   // blue-black where the iodine met the starch
    if (k <= 0.01) return '';
    const s = .35 + .65 * k, id = 'st' + (++uid);
    return `<defs><radialGradient id="${id}"><stop offset="0" stop-color="#141c3d"/><stop offset=".7" stop-color="#24346e"/><stop offset="1" stop-color="#3b4f96" stop-opacity=".0"/></radialGradient></defs>
      <g opacity="${f1(.25 + .75 * k)}"><ellipse cx="0" cy="4" rx="${f1(21 * s)}" ry="${f1(36 * s)}" fill="url(#${id})"/>
      <path d="${blob([[0, -26 * s], [12 * s, -14 * s], [15 * s, 6 * s], [9 * s, 24 * s], [-6 * s, 28 * s], [-14 * s, 10 * s], [-12 * s, -12 * s]])}" fill="#1a2552" opacity=".85"/></g>`;
  }
  function half(o = {}) {
    return `<path d="${HALF}" fill="#f6e8c6" stroke="#cdb98f" stroke-width="2.2" stroke-linejoin="round"/>
      <path d="${blob([[0, -36], [13, -30], [18, -10], [18, 10], [13, 28], [0, 36], [-13, 28], [-18, 10], [-18, -10], [-13, -30]])}" fill="#fbf1d8" opacity=".8"/>
      ${stainShape(o.stain || 0)}
      ${o.embryo ? embryo() : ''}`;
  }
  /* the embryo: the tiny part that will become the leaves, stems and roots. Drawn at the top of a half */
  function embryo() {
    return `<g transform="translate(-2 -30)"><path d="M0 12C-4 6 -5 0 -2 -6" fill="none" stroke="#d9cf8a" stroke-width="5.5" stroke-linecap="round"/>
      <path d="M0 12C-4 6 -5 0 -2 -6" fill="none" stroke="#f3ecb4" stroke-width="3" stroke-linecap="round"/>
      <path d="M-2 -6C-11 -8 -15 -16 -12 -22C-5 -20 -1 -14 -2 -6Z" fill="#dfe08c" stroke="#b9bb62" stroke-width="1.3" stroke-linejoin="round"/>
      <path d="M-2 -6C6 -9 10 -16 8 -22C2 -20 -3 -14 -2 -6Z" fill="#e8e79a" stroke="#b9bb62" stroke-width="1.3" stroke-linejoin="round"/></g>`;
  }
  /* the two cotyledons side by side. open: 0 = closed together, 1 = opened like a book */
  function beanSplit(o = {}) {
    const open = o.open == null ? 1 : o.open, dx = lerp(4, 33, open), rot = lerp(0, 7, open);
    return `<g transform="translate(${f1(-dx)} 0) rotate(${f1(-rot)})">${half({ embryo: true, stain: o.stainL || 0 })}</g>
      <g transform="translate(${f1(dx)} 0) rotate(${f1(rot)})">${half({ stain: o.stain || 0 })}</g>`;
  }
  /* a cotyledon of a seed that germinated a few days ago: the young plant grew out of it */
  function halfGerminated(o = {}) {
    return `<path d="M-4 -36C-14 -54 -10 -78 6 -92" fill="none" stroke="#8fcf7a" stroke-width="6" stroke-linecap="round"/>
      <path d="M6 -92C-8 -98 -20 -92 -24 -80C-10 -76 2 -82 6 -92Z" fill="#6fbf63" stroke="#4f9f52" stroke-width="1.6" stroke-linejoin="round"/>
      <path d="M6 -92C20 -100 34 -94 38 -82C24 -76 10 -82 6 -92Z" fill="#7cc86e" stroke="#4f9f52" stroke-width="1.6" stroke-linejoin="round"/>
      <path d="M-4 -30C-10 -10 -22 10 -30 40M-12 -4C-22 2 -30 2 -38 10M-22 22C-14 28 -12 36 -12 44" fill="none" stroke="#efe6c4" stroke-width="3.6" stroke-linecap="round"/>
      <g transform="translate(6 2) rotate(8) scale(.86)"><path d="${HALF}" fill="#efe2bf" stroke="#cdb98f" stroke-width="2.4" stroke-linejoin="round"/>
        <path d="M-10 -28c6 10 4 30 -4 50M8 -30c4 14 2 34 -2 54" fill="none" stroke="#d6c59a" stroke-width="1.6" stroke-linecap="round" opacity=".8"/>${stainShape(o.stain || 0)}</g>`;
  }
  function bean(o = {}) { return o.split ? beanSplit(o) : beanWhole(o.coat == null ? 1 : o.coat, o.wet || 0); }

  /* ---------- small lab things ---------- */
  function dish(rx = 96) {
    return `<ellipse cx="0" cy="8" rx="${rx + 4}" ry="${f1(rx * .27)}" fill="#000" opacity=".1"/><ellipse cx="0" cy="0" rx="${rx}" ry="${f1(rx * .27)}" fill="#fff" stroke="#b9cdda" stroke-width="2.4"/>
      <ellipse cx="0" cy="-2" rx="${rx - 14}" ry="${f1(rx * .19)}" fill="#f2f8fb" stroke="#dbe7ee" stroke-width="1.6"/>`;
  }
  /* brown bottle of iodine solution. Origin: bottom middle */
  function iodineBottle() {
    return `<ellipse cx="0" cy="2" rx="22" ry="5" fill="#000" opacity=".12"/><path d="M-17 0V-40C-17 -48 -9 -50 -8 -56V-62H8V-56C9 -50 17 -48 17 -40V0Z" fill="#8a4b1d" stroke="#5c3011" stroke-width="2.2" stroke-linejoin="round"/>
      <rect x="-10" y="-74" width="20" height="13" rx="3" fill="#2f2a28"/><rect x="-13" y="-36" width="26" height="22" rx="3" fill="#fff8e6" stroke="#d9c7a0" stroke-width="1.2"/>
      <text x="0" y="-21" text-anchor="middle" font-size="12" font-weight="900" fill="#8a4b1d" font-family="Nunito,Arial,sans-serif">I</text>
      <path d="M-12 -44V-8" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".25"/>`;
  }
  /* dropper pointing down. Origin: its tip. drop: 0 … 1 = a drop falling 34 below the tip */
  function dropper(drop) {
    const d = drop == null ? -1 : drop;
    return `<path d="M-3 -4L-5 -40H5L3 -4Q0 2 -3 -4Z" fill="#fff" fill-opacity=".75" stroke="#8fb6cb" stroke-width="1.8" stroke-linejoin="round"/>
      <path d="M-3.4 -12L-4.4 -30H4.4L3.4 -12Q0 -6 -3.4 -12Z" fill="#a8641f"/>
      <rect x="-7" y="-46" width="14" height="7" rx="2" fill="#2f2a28"/><path d="M-6 -46C-9 -60 -6 -72 0 -72C6 -72 9 -60 6 -46Z" fill="#3a3432"/>
      ${d >= 0 && d < 1 ? `<path transform="translate(0 ${f1(4 + d * 34)})" d="M0 -6C4 0 5 3 5 5A5 5 0 0 1 -5 5C-5 3 -4 0 0 -6Z" fill="#a8641f"/>` : ''}`;
  }
  function thermo(warm, s = 1) {   // small thermometer: red and high when warm, blue and low when cold
    const col = warm ? '#e5533d' : '#4c9be8', h = warm ? 30 : 8;
    return `<g transform="scale(${s})"><rect x="-6" y="-52" width="12" height="62" rx="6" fill="#fff" opacity=".9"/><rect x="-3" y="-46" width="6" height="42" rx="3" fill="#eef3f6" stroke="#9db4c4" stroke-width="1.2"/>
      <rect x="-1.6" y="${-6 - h}" width="3.2" height="${h + 4}" rx="1.6" fill="${col}"/><circle cx="0" cy="2" r="6" fill="${col}" stroke="#9db4c4" stroke-width="1.2"/></g>`;
  }

  /* ---------- a plastic cup. Origin: bottom middle; 80 wide at the top, 96 tall ----------
     water: true/false, air: true/false (false + water = seeds under water; false without water = sealed, dry)
     g: 0 … 1 how far the seeds germinated, label: 'A' | 'B' */
  const SEEDS = [-17, 0, 17];
  function miniBean(x, y, r, split) {
    return `<g transform="translate(${x} ${y}) rotate(${r}) scale(.17)"><path d="${KIDNEY}" fill="#a3463a" stroke="#6f2c26" stroke-width="7"/>${split ? '<path d="M-30 -4C-10 6 14 4 36 -8" fill="none" stroke="#f6e8c6" stroke-width="9" stroke-linecap="round"/>' : ''}</g>`;
  }
  function sprout(x, y, g, k) {
    if (g <= 0.02) return '';
    const h = 62 * g * k, lean = (x / 17) * 5 * g, leaf = clamp((g - .35) / .65, 0, 1) * 13 * k, tx = x + lean, ty = y - h;
    return `<path d="M${x} ${y}c${f1(-2 * g)} ${f1(6 * g)} ${f1(2 * g)} ${f1(12 * g)} ${f1(-1 * g)} ${f1(17 * g)}M${x} ${f1(y + 6 * g)}l${f1(-6 * g)} ${f1(7 * g)}M${x} ${f1(y + 9 * g)}l${f1(6 * g)} ${f1(6 * g)}" fill="none" stroke="#efe6c4" stroke-width="2" stroke-linecap="round"/>
      <path d="M${x} ${y}C${f1(x - 5 * g)} ${f1(y - h * .5)} ${f1(tx + 4 * g)} ${f1(ty + h * .3)} ${f1(tx)} ${f1(ty)}" fill="none" stroke="#8fcf7a" stroke-width="3.2" stroke-linecap="round"/>
      ${leaf > 1 ? `<path d="M${f1(tx)} ${f1(ty)}c${f1(-leaf * .5)} ${f1(-leaf * .8)} ${f1(-leaf * 1.2)} ${f1(-leaf * .6)} ${f1(-leaf * 1.3)} ${f1(leaf * .1)}c${f1(leaf * .6)} ${f1(leaf * .5)} ${f1(leaf)} ${f1(leaf * .3)} ${f1(leaf * 1.3)} ${f1(-leaf * .1)}Z" fill="#6fbf63" stroke="#4f9f52" stroke-width="1.1" stroke-linejoin="round"/>
        <path d="M${f1(tx)} ${f1(ty)}c${f1(leaf * .5)} ${f1(-leaf * .8)} ${f1(leaf * 1.2)} ${f1(-leaf * .6)} ${f1(leaf * 1.3)} ${f1(leaf * .1)}c${f1(-leaf * .6)} ${f1(leaf * .5)} ${f1(-leaf)} ${f1(leaf * .3)} ${f1(-leaf * 1.3)} ${f1(-leaf * .1)}Z" fill="#7cc86e" stroke="#4f9f52" stroke-width="1.1" stroke-linejoin="round"/>` : ''}`;
  }
  function cup(o = {}) {
    const water = o.water !== false, air = o.air !== false, g = clamp(o.g || 0, 0, 1), under = water && !air, id = 'cp' + (++uid);
    const OUT = 'M-40 -96L-31 -3Q0 5 31 -3L40 -96';
    let inside = '', over = '';
    if (under) {
      inside += `<rect x="-42" y="-80" width="84" height="84" fill="#9fd6f2" opacity=".78"/><ellipse cx="0" cy="-80" rx="38.5" ry="5" fill="#c9ebfa" stroke="#7fc6ea" stroke-width="1.4"/>
        <circle cx="-14" cy="-52" r="2.2" fill="#fff" opacity=".7"/><circle cx="10" cy="-62" r="1.6" fill="#fff" opacity=".7"/><circle cx="18" cy="-38" r="1.8" fill="#fff" opacity=".7"/>`;
      inside += miniBean(-17, -11, -10) + miniBean(1, -8, 12) + miniBean(18, -12, -24) + miniBean(-6, -21, 30);
    } else {
      const tint = water ? '#e3f3fb' : '#ffffff', sh = water ? '#c3ddea' : '#dfe9ee';
      inside += `<g fill="${tint}" stroke="${sh}" stroke-width="1.4"><circle cx="-22" cy="-16" r="13"/><circle cx="-4" cy="-20" r="15"/><circle cx="16" cy="-17" r="14"/><circle cx="26" cy="-8" r="10"/><circle cx="-26" cy="-6" r="10"/><circle cx="2" cy="-6" r="13"/></g>`;
      if (water) inside += `<path d="M-32 -2h64" stroke="#9fd6f2" stroke-width="5" stroke-linecap="round" opacity=".8"/>
        <g fill="#6cbde8"><path d="M-22 -22c2 3 3 4 3 6a3 3 0 0 1-6 0c0-2 1-3 3-6z"/><path d="M12 -14c2 3 3 4 3 6a3 3 0 0 1-6 0c0-2 1-3 3-6z"/><path d="M-6 -8c1.6 2.4 2.4 3.2 2.4 4.8a2.4 2.4 0 0 1-4.8 0c0-1.6.8-2.4 2.4-4.8z"/></g>`;
      SEEDS.forEach((x, i) => { over += sprout(x, -36, g, [1, .86, .94][i]) + miniBean(x, -36, [-12, 8, -20][i], g > .08); });   // the sprouts grow out over the rim, so they are not clipped
    }
    const lid = (!air && !water) ? `<path d="M-43 -98h86v7h-86z" fill="#d9e6ee" stroke="#8fb6cb" stroke-width="1.8" stroke-linejoin="round"/><path d="M-41 -90l-6 30M41 -90l6 30M-47 -60q47 14 94 0" fill="none" stroke="#b7d0de" stroke-width="1.6" stroke-linecap="round" stroke-dasharray="5 4"/>` : '';
    return `<ellipse cx="0" cy="3" rx="38" ry="6" fill="#000" opacity=".1"/>
      <defs><clipPath id="${id}"><path d="${OUT}Z"/></clipPath></defs>
      <path d="${OUT}Z" fill="#fff" opacity=".42"/>
      <g clip-path="url(#${id})">${inside}</g>${over}
      <path d="${OUT}" fill="none" stroke="#8fb6cb" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round"/>
      <ellipse cx="0" cy="-96" rx="40" ry="5.4" fill="none" stroke="#8fb6cb" stroke-width="2.2"/>
      <path d="M-32 -84L-26 -22" stroke="#fff" stroke-width="3.4" stroke-linecap="round" opacity=".6"/>${lid}
      ${o.label ? `<g transform="translate(22 -62) rotate(-4)"><rect x="-11" y="-10" width="22" height="20" rx="3" fill="#fff7c9" stroke="#e2cf8a" stroke-width="1.4"/><text x="0" y="6" text-anchor="middle" font-size="15" font-weight="900" fill="#1f3d57" font-family="Nunito,Arial,sans-serif">${o.label}</text></g>` : ''}`;
  }

  /* ---------- a cup in its place. Origin: on the bench under the cup ----------
     warm: true = warm room, false = inside the refrigerator. dark: true = covered with a cardboard box on wooden blocks */
  function station(o = {}) {
    const warm = o.warm !== false;
    let back = '', front = '', lift = 0;
    if (!warm) {
      lift = 26;
      back = `<rect x="-78" y="-172" width="156" height="180" rx="12" fill="#e6eff5" stroke="#a9c0cf" stroke-width="3"/>
        <rect x="-66" y="-160" width="132" height="134" rx="6" fill="#cfe6f5"/><rect x="-66" y="-160" width="132" height="134" rx="6" fill="#6f9cc4" opacity=".16"/>
        <path d="M-66 -26h132" stroke="#a9c0cf" stroke-width="3"/><rect x="-66" y="-24" width="132" height="24" rx="4" fill="#d8e5ee" stroke="#a9c0cf" stroke-width="2"/>
        <rect x="20" y="-156" width="42" height="18" rx="4" fill="#1f3d57"/><text x="41" y="-142.5" text-anchor="middle" font-size="12" font-weight="900" fill="#bfe8ff" font-family="Nunito,Arial,sans-serif">5°C</text>
        <g fill="#fff" font-size="15" font-family="Arial,sans-serif" opacity=".95"><text x="-60" y="-138">❄</text><text x="-22" y="-134">❄</text><text x="-62" y="-66">❄</text><text x="48" y="-70">❄</text><text x="46" y="-112">❄</text></g>`;
      front = `<path d="M78 -166l14 8v152l-14 8z" fill="#d3e0e9" stroke="#a9c0cf" stroke-width="2.4" stroke-linejoin="round"/>`;
    } else if (o.dark) {
      back = `<rect x="-62" y="-150" width="124" height="142" rx="4" fill="#c99a62" stroke="#9a7446" stroke-width="2.6"/><rect x="-52" y="-140" width="104" height="132" rx="3" fill="#4d3a28"/>
        <path d="M-62 -150l10 10M62 -150l-10 10" stroke="#9a7446" stroke-width="2"/>`;
      front = `<rect x="-66" y="-8" width="20" height="9" rx="2" fill="#d9b27c" stroke="#9a7446" stroke-width="1.6"/><rect x="46" y="-8" width="20" height="9" rx="2" fill="#d9b27c" stroke="#9a7446" stroke-width="1.6"/>
        <path d="M-62 -150h124v-10q-62 -10 -124 0z" fill="#d8ab72" stroke="#9a7446" stroke-width="2.2" stroke-linejoin="round"/>`;
    }
    const th = o.thermo === false ? '' : `<g transform="translate(${!warm ? -46 : (o.dark ? -84 : -62)} ${!warm ? -40 - lift : -22})">${thermo(warm, .8)}</g>`;
    return `${back}<g transform="translate(0 ${-lift})">${cup(o)}</g>${front}${th}`;
  }

  /* ---------- backgrounds: the lab wall and bench (420 x 280) ---------- */
  function labBack(o = {}) {
    const night = clamp(o.night || 0, 0, 1), sky = mix('#bfe7f8', '#27365e', night);
    return `<rect width="420" height="280" fill="#fdf3dc"/><rect y="150" width="420" height="82" fill="#f8e9c8"/>
      <g transform="translate(26 22)"><rect x="-6" y="-6" width="92" height="82" rx="8" fill="#fff" stroke="#d9c7a0" stroke-width="3"/><rect width="80" height="70" rx="4" fill="${sky}"/>
        ${night > .5 ? `<circle cx="56" cy="24" r="12" fill="#fdf3c4"/><circle cx="51" cy="20" r="11" fill="${sky}"/><g fill="#fff"><circle cx="16" cy="16" r="1.6"/><circle cx="30" cy="40" r="1.4"/><circle cx="66" cy="52" r="1.5"/><circle cx="14" cy="54" r="1.2"/></g>`
          : `<circle cx="56" cy="24" r="13" fill="#ffd24a"/><circle cx="56" cy="24" r="20" fill="#ffd24a" opacity=".28"/><path d="M0 56q20 -12 40 0t40 0v14H0z" fill="#bfe3a8"/>`}
        <path d="M40 0v70M0 35h80" stroke="#fff" stroke-width="4"/></g>
      <g transform="translate(300 54)"><rect x="-6" y="24" width="112" height="7" rx="3" fill="#d9b27c" stroke="#b48a55" stroke-width="1.6"/>
        <rect x="6" y="-2" width="18" height="26" rx="4" fill="#cfe8f6" stroke="#9fc3d6" stroke-width="1.6"/><rect x="6" y="-6" width="18" height="6" rx="2" fill="#9fc3d6"/>
        <rect x="36" y="2" width="22" height="22" rx="4" fill="#f6d9a8" stroke="#d8b46c" stroke-width="1.6"/><rect x="36" y="-2" width="22" height="6" rx="2" fill="#d8b46c"/>
        <path d="M74 24V6q8 -10 16 0v18z" fill="#d7efd6" stroke="#9fcf9c" stroke-width="1.6"/></g>
      <rect y="226" width="420" height="54" fill="#e4c394"/><rect y="226" width="420" height="8" fill="#d2ab78"/>
      <path d="M30 252h70M150 262h90M300 250h80" stroke="#d2ab78" stroke-width="2" stroke-linecap="round" opacity=".7"/>
      <rect width="420" height="280" fill="#16224a" opacity="${f1(night * .34)}"/>`;
  }
  /* glass of water with the seed soaking in it. Origin: bottom middle */
  function glass(withBean) {
    return `<ellipse cx="0" cy="3" rx="30" ry="6" fill="#000" opacity=".1"/><path d="M-30 -82L-25 -2Q0 5 25 -2L30 -82Z" fill="#fff" opacity=".45"/>
      <path d="M-28 -62L-25 -2Q0 5 25 -2L28 -62Z" fill="#9fd6f2" opacity=".8"/><ellipse cx="0" cy="-62" rx="28" ry="4.4" fill="#c9ebfa" stroke="#7fc6ea" stroke-width="1.4"/>
      ${withBean ? `<g transform="translate(0 -22) rotate(-14) scale(.36)">${beanWhole(1, 1)}</g>` : ''}
      <path d="M-30 -82L-25 -2Q0 5 25 -2L30 -82" fill="none" stroke="#8fb6cb" stroke-width="2.4" stroke-linejoin="round"/><ellipse cx="0" cy="-82" rx="30" ry="4.6" fill="none" stroke="#8fb6cb" stroke-width="2"/>
      <path d="M-22 -70L-18 -18" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".6"/>`;
  }

  /* ---------- tap pictures for the question pages ---------- */
  const hot = (id, label, inner) => `<g class="hot" data-id="${id}" role="button" tabindex="0" aria-label="${label}">${inner}</g>`;
  const bench = (w, h, y) => `<rect width="${w}" height="${h}" rx="14" fill="#fdf3dc"/><path d="M0 ${y}h${w}v${h - y - 14}a14 14 0 0 1-14 14h-${w - 28}a14 14 0 0 1-14-14z" fill="#e4c394"/><rect y="${y}" width="${w}" height="7" fill="#d2ab78"/>`;
  function seedParts() {
    return `<svg class="diagram" viewBox="0 0 340 230" role="img" aria-label="${T('A kidney bean seed: its seed coat on the left, and the seed opened into two halves on the right', 'بذرة فاصوليا: غلاف البذرة على اليسار، والبذرة مفتوحة إلى نصفين على اليمين')}">
      ${bench(340, 230, 176)}
      <g transform="translate(86 124)">${dish(70)}<g transform="translate(0 -22) scale(.92)">${coatSkin()}</g></g>
      <g transform="translate(236 112)">${dish(90)}<g transform="translate(0 -44) scale(1.06)">${beanSplit({ open: 1 })}</g></g>
      ${hot('coat', T('The seed coat', 'غلاف البذرة'), '<ellipse class="ring" cx="86" cy="100" rx="44" ry="30"/>')}
      ${hot('cotyledon', T('The big half of the seed', 'النصف الكبير من البذرة'), '<ellipse class="ring" cx="272" cy="74" rx="30" ry="46"/>')}
      ${hot('embryo', T('The tiny part at the top', 'الجزء الصغير في الأعلى'), '<circle class="ring" cx="194" cy="34" r="21"/>')}</svg>`;
  }
  function iodineSeeds() {
    return `<svg class="diagram" viewBox="0 0 340 230" role="img" aria-label="${T('Two seeds after a drop of iodine solution: one turned dark blue-black, the other shows only a faint colour and has a young plant', 'بذرتان بعد إضافة قطرة من محلول اليود: واحدة تحولت إلى الأزرق الداكن، والأخرى لونها خافت ومعها نبات صغير')}">
      ${bench(340, 230, 176)}
      <g transform="translate(88 150)">${dish(70)}<g transform="translate(0 -46) scale(.94)">${half({ stain: 1 })}</g></g>
      <g transform="translate(250 150)">${dish(70)}<g transform="translate(-2 -40) scale(.94)">${halfGerminated({ stain: .2 })}</g></g>
      ${hot('ungerminated', T('The seed that has not germinated', 'البذرة التي لم تنبت'), '<rect class="ring" x="20" y="38" width="136" height="150" rx="16"/>')}
      ${hot('germinated', T('The seed that has germinated', 'البذرة التي نبتت'), '<rect class="ring" x="182" y="16" width="136" height="172" rx="16"/>')}</svg>`;
  }
  function cups(a, b, label) {
    return `<svg class="diagram" viewBox="0 0 340 250" role="img" aria-label="${label}">
      ${bench(340, 250, 212)}
      <g transform="translate(92 218)">${station(Object.assign({ label: 'A' }, a))}</g><g transform="translate(248 218)">${station(Object.assign({ label: 'B' }, b))}</g>
      ${hot('A', T('Cup A', 'الكوب أ'), '<rect class="ring" x="14" y="12" width="156" height="226" rx="16"/>')}
      ${hot('B', T('Cup B', 'الكوب ب'), '<rect class="ring" x="170" y="12" width="156" height="226" rx="16"/>')}</svg>`;
  }
  const ALL = { water: true, air: true, warm: true };
  window.CH3ART = { bean, beanWhole, beanSplit, half, halfGerminated, coatSkin, embryo, dish, iodineBottle, dropper, thermo, cup, station, labBack, glass, germinates, mix, blob };
  window.CH_DIAGRAMS = Object.assign(window.CH_DIAGRAMS || {}, {
    seedParts, iodineSeeds,
    cupsWater: () => cups(ALL, { water: false, air: true, warm: true }, T('Cup A has cotton moistened with water. Cup B has dry cotton. Both are in the same warm place.', 'الكوب أ فيه قطن مبلل بالماء، والكوب ب فيه قطن جاف، والاثنان في نفس المكان الدافئ.')),
    cupsAir: () => cups(ALL, { water: true, air: false, warm: true }, T('Cup A has seeds on moist cotton. In cup B the seeds are completely under water.', 'الكوب أ فيه بذور على قطن مبلل، والكوب ب فيه بذور مغمورة تمامًا في الماء.')),
    cupsTemp: () => cups({ water: true, air: true, warm: true, dark: true }, { water: true, air: true, warm: false }, T('Cup A is in a warm place under a cardboard box. Cup B is inside the refrigerator.', 'الكوب أ في مكان دافئ تحت صندوق كرتون، والكوب ب داخل الثلاجة.'))
  });
})();
