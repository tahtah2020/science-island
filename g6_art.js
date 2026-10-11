/* Science Island · Grade 6 · drawings made in code (SVG) for Chapter 1 "Conditions for Burning".
   Shared by the chapter's game (flame.html), the tap pictures of the question pages (quiz.html) and the map (tools/make_g6_maps.js).
   Nothing here is copied from the school book: every object is drawn with simple shapes.
   Every drawing is a function that returns SVG markup around its own origin (see the note above each one).
   window.G6ART = the drawings; window.CH_DIAGRAMS gets the tap pictures:
     jarSetups (closed | open | gaps) · airBar (n2 | o2 | co2) · gasJars (n2 | o2 | co2) · limeJars (clear | milky) */
(function () {
  'use strict';
  const T = (en, ar) => (window.SI ? window.SI.T(en, ar) : en);
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const f1 = n => (Math.round(n * 10) / 10).toString();
  const at = (x, y, k, inner, rot) => `<g transform="translate(${f1(x)} ${f1(y)})${rot ? ` rotate(${rot})` : ''}${k != null && k !== 1 ? ` scale(${k})` : ''}">${inner}</g>`;
  const GLASS = { fill: 'rgba(196,232,248,.32)', line: '#6aa9cc', shine: '#fff' };

  /* a flame. Origin: its base (the top of the wick). k = size: 1 is a normal candle flame (about 14 wide, 30 tall), 0 = no flame.
     bright: true = the dazzling flame of burning in oxygen (a glow around it) */
  function flame(k = 1, o = {}) {
    k = clamp(k, 0, 3); if (k <= 0.02) return '';
    const glow = o.bright ? `<circle cx="0" cy="-16" r="34" fill="#fff3b0" opacity=".55"/><circle cx="0" cy="-16" r="22" fill="#fff8d6" opacity=".7"/>` : '';
    return `<g transform="scale(${f1(k)})">${glow}
      <path d="M0 2C-9 -4 -8 -15 0 -31C8 -15 9 -4 0 2Z" fill="${o.bright ? '#ffd24a' : '#f79a2e'}" stroke="${o.bright ? '#f2b134' : '#e2603f'}" stroke-width="1.2" stroke-linejoin="round"/>
      <path d="M0 1C-4.5 -3 -4 -9 0 -18C4 -9 4.5 -3 0 1Z" fill="${o.bright ? '#fffbe0' : '#ffe08a'}"/></g>`;
  }
  /* a thin wisp of smoke going up. Origin: where it starts. o = opacity 0 … 1 */
  const smoke = (o = 1, h = 44) => o <= 0.02 ? '' : `<path d="M0 0C-7 ${f1(-h * .25)} 7 ${f1(-h * .5)} -1 ${f1(-h * .75)}C-5 ${f1(-h * .88)} 2 ${f1(-h * .95)} 0 ${-h}" fill="none" stroke="#8f98a3" stroke-width="3" stroke-linecap="round" opacity="${f1(o * .75)}"/>`;
  /* a candle standing up. Origin: the middle of its bottom. h = height of the wax.
     lit: size of the flame (0 = out, 1 = normal); smoke: 0 … 1 (just gone out); bright: burning in oxygen */
  function candle(o = {}) {
    const h = o.h || 46, w = o.w || 14, lit = o.lit == null ? 1 : o.lit;
    return `<rect x="${-w / 2}" y="${-h}" width="${w}" height="${h}" rx="3" fill="#fff6df" stroke="#cdb98f" stroke-width="1.6"/>
      <path d="M${-w / 2 + 2} ${-h + 3}q3 5 0 10" fill="none" stroke="#e6d6ad" stroke-width="2" stroke-linecap="round"/>
      <path d="M0 ${-h}v-6" stroke="#3a2d25" stroke-width="1.8" stroke-linecap="round"/>
      ${at(0, -h - 6, 1, flame(lit, { bright: o.bright }))}${lit <= 0.02 ? at(0, -h - 7, 1, smoke(o.smoke || 0)) : ''}`;
  }
  /* the wooden board and the flat piece of clay the candle stands on. Origin: the middle of the top of the board.
     gap: true = a piece of the clay is cut away at the front, so there is a gap under the wall of the jar */
  function base(o = {}) {
    const w = o.w || 150;
    const clay = o.gap
      ? `<path d="M${-w * .34} -11h${w * .07}v11h${-w * .07}a6 6 0 0 1 0 -11z" fill="#6fb8a8" stroke="#4a9484" stroke-width="2" stroke-linejoin="round"/><path d="M${-w * .05} -11h${w * .39}a6 6 0 0 1 0 11h${-w * .39}z" fill="#6fb8a8" stroke="#4a9484" stroke-width="2" stroke-linejoin="round"/>`
      : `<rect x="${-w * .34}" y="-11" width="${w * .68}" height="11" rx="5.5" fill="#6fb8a8" stroke="#4a9484" stroke-width="2"/>`;
    return `<rect x="${-w / 2}" y="0" width="${w}" height="11" rx="3" fill="#d9b27c" stroke="#a8834f" stroke-width="2"/><path d="M${-w / 2 + 8} 5.5h${w - 16}" stroke="#a8834f" stroke-width="1.2" opacity=".5"/>${clay}`;
  }
  /* a glass gas jar. Origin: the middle of its bottom edge. About 78 wide and 118 tall.
     bottom: true = an ordinary jar with a bottom (false = the bottomless jar that stands on the clay);
     lid: 'on' | 'aside' (leaning beside the mouth, the top is open) | '' ; back: true = only the back half (draw things inside, then the front) */
  function jar(o = {}) {
    const w = o.w || 78, h = o.h || 118, nw = w * .62, sh = h * .2, bottom = o.bottom;
    const body = `M${-w / 2} 0V${-h + sh + 10}C${-w / 2} ${-h + sh - 4} ${-nw / 2} ${-h + sh} ${-nw / 2} ${-h + 8}V${-h}H${nw / 2}V${-h + 8}C${nw / 2} ${-h + sh} ${w / 2} ${-h + sh - 4} ${w / 2} ${-h + sh + 10}V0`;
    const lid = o.lid === 'on' ? `<rect x="${-nw / 2 - 9}" y="${-h - 7}" width="${nw + 18}" height="7" rx="2.5" fill="#b9c4cf" stroke="#7d8a98" stroke-width="2"/>`
      : o.lid === 'aside' ? `<g transform="translate(${w / 2 + 22} ${-6}) rotate(-72)"><rect x="${-nw / 2 - 9}" y="-7" width="${nw + 18}" height="7" rx="2.5" fill="#b9c4cf" stroke="#7d8a98" stroke-width="2"/></g>` : '';
    return `<path d="${body}${bottom ? 'Z' : ''}" fill="${GLASS.fill}" stroke="${GLASS.line}" stroke-width="3" stroke-linejoin="round"/>
      <rect x="${-nw / 2 - 4}" y="${-h - 1}" width="${nw + 8}" height="6" rx="3" fill="#d6eef9" stroke="${GLASS.line}" stroke-width="2"/>
      <path d="M${-w / 2 + 9} ${-h + sh + 16}V-16" stroke="${GLASS.shine}" stroke-width="4" stroke-linecap="round" opacity=".6"/>${lid}`;
  }
  /* liquid at the bottom of a jar (limewater). Origin and width as the jar. milky: 0 = colourless and clear … 1 = milky white */
  function liquid(o = {}) {
    const w = (o.w || 78) - 6, lv = o.level || 26, m = clamp(o.milky || 0, 0, 1);
    return `<path d="M${-w / 2} -2V${-lv}q${w / 4} -5 ${w / 2} 0t${w / 2} 0V-2z" fill="${m > .02 ? '#ffffff' : '#bfe3f5'}" opacity="${f1(.6 + m * .4)}" stroke="${m > .5 ? '#c9c4a8' : '#8fc6e6'}" stroke-width="${m > .5 ? 2 : 1.4}"/>
      ${m > .5 ? `<g fill="#ddd8c0" opacity=".95"><circle cx="${-w * .2}" cy="${-lv * .5}" r="2.4"/><circle cx="${w * .12}" cy="${-lv * .35}" r="2"/><circle cx="${w * .28}" cy="${-lv * .62}" r="2.2"/></g>` : ''}`;
  }
  /* the combustion spoon: a wire with a small cup that holds a short candle. Origin: the bottom of the cup. The wire is `wire` long */
  function spoon(o = {}) {
    const wire = o.wire || 120;
    return `<path d="M13 -4V${-wire}q0 -8 -8 -8" fill="none" stroke="#6b7682" stroke-width="3" stroke-linecap="round"/><path d="M-11 -6h24" stroke="#6b7682" stroke-width="3" stroke-linecap="round"/>
      <path d="M-11 -7a11 7 0 0 0 22 0z" fill="#9aa7b4" stroke="#6b7682" stroke-width="2"/>${at(0, -7, 1, candle({ h: o.h || 22, w: 10, lit: o.lit, smoke: o.smoke, bright: o.bright }))}`;
  }
  /* a curved arrow that shows moving air, from (x1,y1) to (x2,y2); bend pushes the middle sideways */
  function airArrow(x1, y1, x2, y2, bend = 0, color = '#3a8fd0') {
    const mx = (x1 + x2) / 2 + bend, my = (y1 + y2) / 2, a = Math.atan2(y2 - my, x2 - mx) * 180 / Math.PI;
    return `<path d="M${x1} ${y1}Q${f1(mx)} ${f1(my)} ${x2} ${y2}" fill="none" stroke="${color}" stroke-width="5" stroke-linecap="round" opacity=".9"/><path d="M0 0l-13 -7v14z" fill="${color}" transform="translate(${x2} ${y2}) rotate(${f1(a)})"/>`;
  }
  /* the gases of the air as one bar. Origin: its top-left corner. Nitrogen about 78%, oxygen about 21%; the last thin part
     (carbon dioxide and other gases, less than 1%) is drawn a little wider than it really is so that it can be seen */
  const BAR = { n2: ['#bfe3f2', .78], o2: ['#cfead2', .21], co2: ['#f6c9cf', .03] };
  function airBar(w = 300, h = 46, o = {}) {
    const usable = w / (1 + BAR.co2[1] - .01), wn = usable * BAR.n2[1], wo = usable * BAR.o2[1], wc = w - wn - wo;
    const fit = (t, ww, fs) => f1(Math.min(fs, (ww - 8) / (Math.max(1, t.length) * .56)));   // a label never spills out of its part of the bar
    const lab = (x, ww, t1, t2) => o.labels ? `<text x="${f1(x + ww / 2)}" y="${f1(h / 2 - 2)}" text-anchor="middle" font-size="${fit(t1, ww, o.fs || 12)}" font-weight="900" fill="#1f3d57">${t1}</text><text x="${f1(x + ww / 2)}" y="${f1(h / 2 + 14)}" text-anchor="middle" font-size="${fit(t2, ww, (o.fs || 12) - 1.5)}" font-weight="800" fill="#3a5c75">${t2}</text>` : '';
    return { wn, wo, wc, svg: `<rect x="0" y="0" width="${f1(wn)}" height="${h}" fill="${BAR.n2[0]}" stroke="#2a3a48" stroke-width="1.6"/><rect x="${f1(wn)}" y="0" width="${f1(wo)}" height="${h}" fill="${BAR.o2[0]}" stroke="#2a3a48" stroke-width="1.6"/><rect x="${f1(wn + wo)}" y="0" width="${f1(wc)}" height="${h}" fill="${BAR.co2[0]}" stroke="#2a3a48" stroke-width="1.6"/>
      ${lab(0, wn, o.n2 || '', o.n2p || '')}${lab(wn, wo, o.o2 || '', o.o2p || '')}` };
  }
  /* a name tag on a jar. Origin: its middle */
  const tag = (s, w = 70) => `<rect x="${-w / 2}" y="-11" width="${w}" height="22" rx="6" fill="#fff" stroke="#7d8a98" stroke-width="1.6"/><text x="0" y="5" text-anchor="middle" font-size="11.5" font-weight="900" fill="#1f3d57" font-family="Nunito,Cairo,Arial,sans-serif">${s}</text>`;
  const GAS = { n2: () => T('Nitrogen', 'النيتروجين'), o2: () => T('Oxygen', 'الأكسجين'), co2: () => T('Carbon dioxide', 'ثاني أكسيد الكربون') };

  /* ---------- things for the map and the backgrounds ---------- */
  /* an oil lantern. Origin: the middle of its bottom. About 70 wide, 120 tall */
  function lantern() {
    return `<ellipse cx="0" cy="3" rx="34" ry="7" fill="#000" opacity=".1"/><path d="M-22 0h44l-5 -16h-34z" fill="#b08a4a" stroke="#7a5a2a" stroke-width="2.4" stroke-linejoin="round"/>
      <path d="M-20 -16C-30 -40 -26 -62 -14 -72H14C26 -62 30 -40 20 -16Z" fill="rgba(255,236,170,.75)" stroke="#7a5a2a" stroke-width="2.4"/>${at(0, -24, 1.25, flame(1))}
      <path d="M-16 -72h32l-4 -14h-24z" fill="#b08a4a" stroke="#7a5a2a" stroke-width="2.4" stroke-linejoin="round"/><path d="M-10 -86C-14 -112 14 -112 10 -86" fill="none" stroke="#7a5a2a" stroke-width="3.4" stroke-linecap="round"/>`;
  }
  /* a camp fire. Origin: the middle of its bottom. About 90 wide, 80 tall */
  function campfire() {
    return `<ellipse cx="0" cy="3" rx="44" ry="8" fill="#000" opacity=".1"/><g stroke="#6f4c2c" stroke-width="2"><rect x="-40" y="-12" width="80" height="12" rx="6" fill="#a9794a" transform="rotate(10)"/><rect x="-40" y="-12" width="80" height="12" rx="6" fill="#b98858" transform="rotate(-10)"/></g>
      ${at(-12, -10, 1.5, flame(1))}${at(12, -10, 1.3, flame(1))}${at(0, -12, 2.1, flame(1))}`;
  }
  /* a row of solar panels. Origin: the middle of its bottom. About 120 wide, 60 tall */
  function solar() {
    let cells = '';
    for (let i = 1; i < 4; i++) cells += `<path d="M${-50 + i * 25} -52l-8 40" stroke="#bfe3f2" stroke-width="1.6"/>`;
    return `<path d="M-30 0v-14M30 0v-14" stroke="#7d8a98" stroke-width="5" stroke-linecap="round"/><path d="M-50 -52h100l-8 40h-100z" fill="#2f6fae" stroke="#1f4f80" stroke-width="2.6" stroke-linejoin="round"/>${cells}<path d="M-54 -32h100" stroke="#bfe3f2" stroke-width="1.6"/>`;
  }

  /* ================= tap pictures for the question pages (340 wide) ================= */
  const hot = (id, label, inner) => `<g class="hot" data-id="${id}" role="button" tabindex="0" aria-label="${label}">${inner}</g>`;
  const svgOpen = (h, label) => `<svg class="diagram" viewBox="0 0 340 ${h}" role="img" aria-label="${label}">`;
  const frame = (h, fill) => `<rect width="340" height="${h}" rx="14" fill="${fill}"/>`;
  const ringRect = (x, y, w, h) => `<rect class="ring" x="${x}" y="${y}" width="${w}" height="${h}" rx="14"/>`;

  /* one candle in a bottomless jar on clay. Origin: the middle of the top of the board */
  function setup(o = {}) {
    return `${base({ w: 96, gap: o.gap })}${at(0, -11, 1, candle({ h: 34, lit: o.lit == null ? 1 : o.lit, smoke: o.smoke }))}${at(0, -9, .92, jar({ lid: o.lid }))}`;
  }
  function jarSetups() {
    const names = { closed: T('The jar with its lid on and no gap', 'الوعاء المغطى بغطاء وبدون فتحة'), open: T('The jar with no lid', 'الوعاء بدون غطاء'), gaps: T('The jar with no lid and a gap cut in the clay at the bottom', 'الوعاء بدون غطاء ومعه فتحة في الصلصال من الأسفل') };
    const pic = { open: setup({}), closed: setup({ lid: 'on' }), gaps: setup({ gap: true }) };
    return `${svgOpen(190, T('Three candles burning inside bottomless glass jars that stand on clay: one jar has a lid, one has no lid, and one has no lid and a gap at the bottom', 'ثلاث شموع مشتعلة داخل أوعية زجاجية بدون قاع فوق صلصال: وعاء عليه غطاء، ووعاء بدون غطاء، ووعاء بدون غطاء ومعه فتحة من الأسفل'))}
      ${frame(190, '#eef6fb')}${['open', 'closed', 'gaps'].map((k, i) => at(58 + i * 112, 164, 1, pic[k]) + hot(k, names[k], ringRect(6 + i * 112, 8, 104, 174))).join('')}</svg>`;
  }
  function airBarPic() {
    const B = airBar(292, 50);
    return `${svgOpen(110, T('A bar that shows the gases of the air: a very long part, a shorter part and a very thin part', 'شريط يبيّن غازات الهواء الجوي: جزء طويل جدًّا، وجزء أقصر، وجزء رفيع جدًّا'))}
      ${frame(110, '#fdf3dc')}${at(16, 30, 1, B.svg)}
      ${hot('n2', T('The longest part of the bar', 'أطول جزء في الشريط'), ringRect(18, 22, f1(B.wn - 6), 66))}${hot('o2', T('The middle part of the bar', 'الجزء الأوسط في الشريط'), ringRect(f1(16 + B.wn + 3), 22, f1(B.wo - 8), 66))}${hot('co2', T('The thinnest part, at the end of the bar', 'أرفع جزء، في آخر الشريط'), ringRect(f1(16 + B.wn + B.wo - 2), 14, 34, 82))}</svg>`;
  }
  function gasJars() {
    const names = { n2: T('The jar of nitrogen', 'وعاء النيتروجين'), o2: T('The jar of oxygen', 'وعاء الأكسجين'), co2: T('The jar of carbon dioxide', 'وعاء ثاني أكسيد الكربون') };
    return `${svgOpen(190, T('Three closed jars, each filled with a different gas: nitrogen, oxygen and carbon dioxide', 'ثلاثة أوعية مغلقة، في كل وعاء غاز مختلف: النيتروجين، والأكسجين، وثاني أكسيد الكربون'))}
      ${frame(190, '#eef6fb')}<rect y="158" width="340" height="32" fill="#d9b27c"/><rect y="158" width="340" height="5" fill="#a8834f" opacity=".6"/>
      ${['n2', 'o2', 'co2'].map((k, i) => at(58 + i * 112, 160, 1, jar({ bottom: true, lid: 'on' }) + at(0, -44, 1, tag(GAS[k](), k === 'co2' ? 96 : 70))) + hot(k, names[k], ringRect(6 + i * 112, 8, 104, 174))).join('')}</svg>`;
  }
  function limeJars() {
    const j = m => jar({ bottom: true, lid: 'on' }) + liquid({ milky: m, level: 30 });
    return `${svgOpen(190, T('Two closed jars with a liquid at the bottom: in one the liquid is colourless and clear, in the other it is milky white', 'وعاءان مغلقان في قاع كلٍّ منهما سائل: في أحدهما السائل شفاف عديم اللون، وفي الآخر متعكر ولونه أبيض'))}
      ${frame(190, '#eef6fb')}<rect y="158" width="340" height="32" fill="#d9b27c"/><rect y="158" width="340" height="5" fill="#a8834f" opacity=".6"/>
      ${at(100, 160, 1.1, j(1))}${at(240, 160, 1.1, j(0))}
      ${hot('milky', T('The jar with the milky white liquid', 'الوعاء الذي فيه سائل متعكر أبيض'), ringRect(34, 8, 132, 174))}${hot('clear', T('The jar with the colourless, clear liquid', 'الوعاء الذي فيه سائل شفاف عديم اللون'), ringRect(174, 8, 132, 174))}</svg>`;
  }

  window.G6ART = { at, flame, smoke, candle, base, jar, liquid, spoon, airArrow, airBar, tag, GAS, lantern, campfire, solar, setup };
  window.CH_DIAGRAMS = Object.assign(window.CH_DIAGRAMS || {}, { jarSetups, airBar: airBarPic, gasJars, limeJars });
})();
