/* Science Island · Chapter 5 "From Flower to Fruit" · drawings made in code (SVG).
   Shared by the chapter's game (flowerlab.html), the tap pictures of the question pages (quiz.html) and the map (tools/make_ch456_maps.js).
     flower(o)       a luffa flower seen from the side. o.sex = 'male' (a stamen with yellow pollen, no swelling) or 'female' (a pistil with a split tip
                     and a swelling at the base); o.wither = the flower has dried up; o.fruit = how far the swelling has grown into a fruit (0 … 1);
                     o.bag = covered with a paper bag; o.dots = pollen grains floating beside the stamen. Origin: the bottom of the stalk
     microscope(o)   a microscope with its nine parts. o.light = the reflector shines
     field(o)        what you see through the eyepiece: o.mag = 'low' (wide and bright) or 'high' (narrow and dark); o.dx, o.dy shift the grains
     bee(), slideKit(), pollenGrain()
   window.CH_DIAGRAMS adds this chapter's tap pictures: luffaFlowers, flowerParts, microscope, pollinationBags.
   The school book (pages 52-63) names: male flower = stamen in the centre, yellow pollen; female flower = pistil in the centre, swelling at the base;
   from the outside of a flower: sepal, petal, pistil. Microscope parts (page 56): eyepiece lens, tube, arm, adjustment knob, revolving nosepiece,
   objective lens, clips, stage, reflector. */
(function () {
  'use strict';
  const T = (en, ar) => (window.SI ? window.SI.T(en, ar) : en);
  const f1 = n => (Math.round(n * 10) / 10).toString();

  const PETAL = '#ffd84f', PETAL_LN = '#e0a82a', GREEN = '#6fbf63', GREEN_LN = '#3f8f46';
  const petal = (len, wid, rot, shade = 0) => `<g transform="rotate(${rot})"><path d="M0 0C${f1(len * .15)} ${f1(-wid)} ${f1(len * .85)} ${f1(-wid * 1.05)} ${f1(len)} 0C${f1(len * .85)} ${f1(wid * 1.05)} ${f1(len * .15)} ${f1(wid)} 0 0Z" fill="${shade ? '#ffe27a' : PETAL}" stroke="${PETAL_LN}" stroke-width="1.8" stroke-linejoin="round"/>
    <path d="M${f1(len * .12)} 0H${f1(len * .8)}" stroke="${PETAL_LN}" stroke-width="1.2" opacity=".5"/></g>`;
  const sepal = (len, rot) => `<g transform="rotate(${rot})"><path d="M0 0C${f1(len * .3)} -5 ${f1(len * .7)} -4 ${f1(len)} 0C${f1(len * .7)} 4 ${f1(len * .3)} 5 0 0Z" fill="${GREEN}" stroke="${GREEN_LN}" stroke-width="1.6" stroke-linejoin="round"/></g>`;
  const grain = (x, y, r = 3.6) => `<g transform="translate(${f1(x)} ${f1(y)})"><circle r="${r}" fill="#ffd24a" stroke="#d9a21f" stroke-width="1"/><circle cx="${f1(-r * .3)}" cy="${f1(-r * .3)}" r="${f1(r * .3)}" fill="#fff6c8" opacity=".9"/></g>`;
  const pollenGrain = grain;

  /* ---------- the luffa flower. The head sits at B = (0, -66) ---------- */
  const BY = -66;
  function flower(o = {}) {
    const female = o.sex === 'female', fr = o.fruit || 0, wither = !!o.wither;
    const pc = wither ? '#c9b27a' : PETAL, plnc = wither ? '#9a8450' : PETAL_LN;
    let s = '';
    /* stalk and (female) swelling / fruit */
    if (female) {
      const ry = 20 + 34 * fr, rx = 11 + 7 * fr, cy = BY + 4 + ry;
      s += `<path d="M0 0V${f1(cy - ry)}" stroke="#7cc86e" stroke-width="7" stroke-linecap="round"/>`;
      s += `<ellipse cx="0" cy="${f1(BY + 6 + ry)}" rx="${f1(rx)}" ry="${f1(ry)}" fill="${wither && !fr ? '#d9d28a' : '#8fd07f'}" stroke="${wither && !fr ? '#b3aa5e' : GREEN_LN}" stroke-width="2.2"/>
        <path d="M0 ${f1(BY + 6 + ry - ry + 6)}V${f1(BY + 6 + ry + ry - 6)}M${f1(-rx * .5)} ${f1(BY + 6 + ry - ry * .7)}V${f1(BY + 6 + ry + ry * .7)}M${f1(rx * .5)} ${f1(BY + 6 + ry - ry * .7)}V${f1(BY + 6 + ry + ry * .7)}" stroke="${GREEN_LN}" stroke-width="1.2" opacity=".45" fill="none"/>`;
    } else {
      s += `<path d="M0 0V${BY + 4}" stroke="#7cc86e" stroke-width="5" stroke-linecap="round"/>`;
    }
    s += `<g transform="translate(0 ${BY})">`;
    /* sepals (green, under the petals) */
    s += sepal(19, 158) + sepal(19, 22) + sepal(15, 100);
    if (wither) {
      s += petal(30, 9, 150) + petal(30, 9, 30) + petal(26, 8, 128) + petal(26, 8, 52);
      s = s.replace(new RegExp(PETAL.replace('#', '#'), 'g'), pc).replace(new RegExp(PETAL_LN, 'g'), plnc);
    } else {
      s += petal(38, 11, -146) + petal(38, 11, -34) + petal(38, 11, -118, 1) + petal(38, 11, -62, 1);
    }
    /* the middle part */
    if (!wither) {
      if (female) {
        s += `<path d="M-4 0V-26M4 0V-26" stroke="#5fae58" stroke-width="1" fill="none"/><rect x="-5" y="-28" width="10" height="28" rx="4" fill="#8fd07f" stroke="${GREEN_LN}" stroke-width="2"/>
          <path d="M0 -28L-9 -41M0 -28V-44M0 -28L9 -41" stroke="${GREEN_LN}" stroke-width="2.4" stroke-linecap="round"/><circle cx="-9" cy="-42" r="3.6" fill="#c8ec9a" stroke="${GREEN_LN}" stroke-width="1.6"/><circle cx="0" cy="-45" r="3.6" fill="#c8ec9a" stroke="${GREEN_LN}" stroke-width="1.6"/><circle cx="9" cy="-42" r="3.6" fill="#c8ec9a" stroke="${GREEN_LN}" stroke-width="1.6"/>`;
      } else {
        s += `<rect x="-3.5" y="-30" width="7" height="30" rx="3" fill="#f4e7a4" stroke="#cdb458" stroke-width="2"/>
          <ellipse cx="0" cy="-34" rx="11" ry="8" fill="#ffd24a" stroke="#d9a21f" stroke-width="2"/>${grain(-5, -36, 2.6)}${grain(3, -38, 2.6)}${grain(6, -32, 2.4)}${grain(-3, -31, 2.2)}`;
        if (o.dots) s += grain(22, -44) + grain(30, -34, 3) + grain(18, -56, 3) + grain(34, -50, 3.2) + grain(26, -62, 2.8);
      }
    }
    s += '</g>';
    if (o.bag) s += `<path d="M-30 ${BY - 56}h60l6 -10h-72z" fill="#e9ddc4" stroke="#b9a578" stroke-width="2"/><path d="M-36 ${BY - 66}L-30 ${BY + 22}H30L36 ${BY - 66}z" fill="#f3ead6" opacity=".72" stroke="#b9a578" stroke-width="2.2" stroke-linejoin="round"/>`;
    return s;
  }

  /* ---------- a bee ---------- */
  function bee() {
    return `<g><ellipse cx="-12" cy="-12" rx="9" ry="14" transform="rotate(-30 -12 -12)" fill="#e6f6ff" stroke="#8fc6e3" stroke-width="2" opacity=".9"/><ellipse cx="2" cy="-14" rx="9" ry="13" transform="rotate(20 2 -14)" fill="#e6f6ff" stroke="#8fc6e3" stroke-width="2" opacity=".9"/>
      <ellipse cx="0" cy="0" rx="19" ry="12" fill="#ffd24a" stroke="#c78f10" stroke-width="2.4"/><path d="M-5 -11V11M5 -11V11" stroke="#3a2f1a" stroke-width="5"/><circle cx="-20" cy="-2" r="8" fill="#3a2f1a"/><circle cx="-23" cy="-4" r="2" fill="#fff"/>
      <path d="M-24 -9q-4 -8 -8 -8M-19 -10q-1 -8 -4 -10" stroke="#3a2f1a" stroke-width="1.8" fill="none" stroke-linecap="round"/>${grain(10, 14, 3.4)}${grain(2, 15, 3)}</g>`;
  }

  /* ---------- the microscope. Origin: bottom middle of the foot; about 190 tall ---------- */
  function microscope(o = {}) {
    return `<ellipse cx="0" cy="4" rx="84" ry="8" fill="#000" opacity=".1"/>
      <path d="M-78 0V-12Q-78 -18 -70 -18H70Q78 -18 78 -12V0Z" fill="#5f7f95" stroke="#3d5a6e" stroke-width="3" stroke-linejoin="round"/>
      <path d="M48 -18V-150C48 -190 24 -200 8 -196" fill="none" stroke="#6e92a8" stroke-width="22" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M48 -18V-150C48 -190 24 -200 8 -196" fill="none" stroke="#8fb3c8" stroke-width="13" stroke-linecap="round" stroke-linejoin="round" opacity=".6"/>
      <rect x="-14" y="-206" width="28" height="86" rx="5" fill="#9bb7c8" stroke="#3d5a6e" stroke-width="3"/>
      <rect x="-9" y="-232" width="18" height="30" rx="4" fill="#3d5a6e" stroke="#2a4152" stroke-width="2.4"/><rect x="-11" y="-236" width="22" height="7" rx="3" fill="#2a4152"/>
      <ellipse cx="0" cy="-118" rx="26" ry="6.5" fill="#6e92a8" stroke="#3d5a6e" stroke-width="2.6"/><rect x="-24" y="-118" width="48" height="8" rx="3" fill="#7fa3b8" stroke="#3d5a6e" stroke-width="2.4"/>
      <rect x="-20" y="-110" width="8" height="26" rx="2.6" fill="#4a6a80" stroke="#2a4152" stroke-width="2"/><rect x="-6" y="-110" width="9" height="34" rx="2.6" fill="#33505f" stroke="#2a4152" stroke-width="2"/><rect x="9" y="-110" width="8" height="22" rx="2.6" fill="#4a6a80" stroke="#2a4152" stroke-width="2"/>
      <rect x="-58" y="-62" width="116" height="10" rx="3" fill="#7fa3b8" stroke="#3d5a6e" stroke-width="2.8"/><rect x="-58" y="-52" width="116" height="4" fill="#5f7f95"/>
      <rect x="-46" y="-70" width="20" height="8" rx="3" fill="#d6dde2" stroke="#7a8b96" stroke-width="2"/><rect x="26" y="-70" width="20" height="8" rx="3" fill="#d6dde2" stroke="#7a8b96" stroke-width="2"/>
      <rect x="-14" y="-70" width="30" height="3" rx="1.5" fill="#fff" opacity=".7"/>
      <path d="M-14 -18V-36" stroke="#5f7f95" stroke-width="6" stroke-linecap="round"/>
      <ellipse cx="-14" cy="-40" rx="26" ry="7" transform="rotate(-14 -14 -40)" fill="${o.light ? '#fff6c0' : '#cfe3ee'}" stroke="#3d5a6e" stroke-width="2.6"/>
      <circle cx="48" cy="-92" r="15" fill="#33505f" stroke="#2a4152" stroke-width="2.8"/><circle cx="48" cy="-92" r="7" fill="#7fa3b8" stroke="#2a4152" stroke-width="2"/><path d="M41 -92h14M48 -99v14" stroke="#2a4152" stroke-width="2" opacity=".6"/>`;
  }

  /* ---------- what you see in the eyepiece ---------- */
  const GR = [[-.52, -.2, 1], [-.1, -.46, 1], [.34, -.34, 1], [.1, .02, 1.15], [-.36, .26, 1], [.46, .24, 1], [-.02, .5, 1], [.62, -.02, .8], [-.64, .06, .8]];
  function field(o = {}) {
    const hi = o.mag === 'high', R = 62, dx = o.dx || 0, dy = o.dy || 0;
    const k = hi ? 2.3 : 1, sh = hi ? 'rgba(20,28,46,.6)' : 'rgba(255,250,224,0)';
    let s = `<defs><clipPath id="fv"><circle r="${R}"/></clipPath></defs><circle r="${R + 5}" fill="#2a4152"/><circle r="${R}" fill="${hi ? '#a9b7bd' : '#f4f2e2'}"/><g clip-path="url(#fv)">`;
    GR.forEach(([x, y, m]) => { s += grain(x * R * .8 * (hi ? 1.3 : 1) + dx, y * R * .8 * (hi ? 1.3 : 1) + dy, 6.5 * k * m); });
    s += `<circle r="${R}" fill="${sh}"/></g><circle r="${R}" fill="none" stroke="#2a4152" stroke-width="3"/>`;
    return s;
  }

  /* ---------- a slide with a cover glass (page 56) ---------- */
  function slideKit(o = {}) {
    const lift = o.lift || 0;
    return `<rect x="-52" y="-6" width="104" height="20" rx="3" fill="#e6f4fb" stroke="#8fb6cb" stroke-width="2.6"/>
      ${o.drop ? `<ellipse cx="0" cy="3" rx="18" ry="5" fill="#9fd6f2" opacity=".85"/>` : ''}${o.pollen ? grain(-6, 2, 3) + grain(4, 3, 3) + grain(0, 0, 3) + grain(8, 0, 2.6) : ''}
      ${o.cover ? `<g transform="translate(0 ${-lift})" opacity=".9"><path d="M-20 -8L20 -8L20 -3L-20 -3Z" fill="#fff" stroke="#8fb6cb" stroke-width="2"/></g>` : ''}`;
  }

  /* ---------- tap pictures ---------- */
  const hot = (id, label, inner) => `<g class="hot" data-id="${id}" role="button" tabindex="0" aria-label="${label}">${inner}</g>`;
  const back = (w, h) => `<rect width="${w}" height="${h}" rx="14" fill="#eaf7ee"/><path d="M0 ${h - 22}h${w}v8a14 14 0 0 1-14 14h-${w - 28}a14 14 0 0 1-14-14z" fill="#cfeaa6"/>`;
  function twoFlowers(targets, label) {
    const ar = T(false, true), xf = ar ? 246 : 98, xm = ar ? 98 : 246, k = 1.62, y0 = 216;
    const at = (x, dx, dy) => [f1(x + dx * k), f1(y0 + dy * k)];
    const ring = (x, dx, dy, rx, ry) => { const [cx, cy] = at(x, dx, dy); return `<ellipse class="ring" cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}"/>`; };
    const h = [];
    if (targets === 'sex') {
      h.push(hot('female', T('The flower with a swelling at its base', 'الزهرة التي لها انتفاخ عند قاعدتها'), `<rect class="ring" x="${xf - 70}" y="14" width="140" height="194" rx="16"/>`));
      h.push(hot('male', T('The flower without a swelling', 'الزهرة التي ليس لها انتفاخ'), `<rect class="ring" x="${xm - 70}" y="14" width="140" height="194" rx="16"/>`));
    } else {
      h.push(hot('swelling', T('The bulge under the flower on the left', 'الانتفاخ تحت الزهرة التي على اليسار'), ring(xf, 0, -42, 22, 36)));
      h.push(hot('pistil', T('The green part in the middle of the flower with the bulge', 'الجزء الأخضر في وسط الزهرة التي لها انتفاخ'), ring(xf, 0, -92, 15, 34)));
      h.push(hot('stamen', T('The part in the middle of the flower without a bulge', 'الجزء الذي في وسط الزهرة التي ليس لها انتفاخ'), ring(xm, 0, -90, 14, 30)));
      h.push(hot('pollen', T('The yellow powder floating next to the flower without a bulge', 'المسحوق الأصفر الطافي بجانب الزهرة التي ليس لها انتفاخ'), ring(xm, 27, -118, 16, 20)));
      h.push(hot('petal', T('One of the large yellow parts around the middle', 'أحد الأجزاء الصفراء الكبيرة حول الوسط'), ring(xf, -22, -78, 18, 16)));
      h.push(hot('sepal', T('One of the small green leaves under the yellow parts', 'إحدى الأوراق الخضراء الصغيرة تحت الأجزاء الصفراء'), ring(xf, -11, -61, 12, 7)));
    }
    return `<svg class="diagram" viewBox="0 0 340 230" role="img" aria-label="${label}">${back(340, 230)}
      <g transform="translate(${xf} ${y0}) scale(${k})">${flower({ sex: 'female' })}</g><g transform="translate(${xm} ${y0}) scale(${k})">${flower({ sex: 'male', dots: true })}</g>${h.join('')}</svg>`;
  }
  const luffaFlowers = () => twoFlowers('sex', T('Two luffa flowers. The one on the left has a swelling just below its petals. The one on the right has no swelling.', 'زهرتان من اللوف. الزهرة التي على اليسار لها انتفاخ أسفل البتلات مباشرة. الزهرة التي على اليمين ليس لها انتفاخ.'));
  const flowerParts = () => twoFlowers('parts', T('Two luffa flowers. The one on the left has a swelling at its base and a green part with a split tip in the middle. The one on the right has yellow powder around the part in its middle.', 'زهرتان من اللوف. الزهرة التي على اليسار لها انتفاخ عند القاعدة وجزء أخضر مشقوق الطرف في الوسط. الزهرة التي على اليمين حول الجزء الذي في وسطها مسحوق أصفر.'));

  function microscopePic() {
    const k = 1, tx = 170, ty = 246;
    const ring = (cx, cy, rx, ry) => `<ellipse class="ring" cx="${f1(tx + cx * k)}" cy="${f1(ty + cy * k)}" rx="${rx}" ry="${ry}"/>`;
    const H = [
      ['eyepiece', T('The lens you look through', 'العدسة التي تنظر منها'), ring(0, -218, 20, 20)],
      ['tube', T('The long tube under the eyepiece', 'الأنبوب الطويل تحت العدسة العينية'), ring(0, -168, 20, 36)],
      ['arm', T('The curved handle at the back', 'المقبض المنحني في الخلف'), ring(40, -170, 22, 30)],
      ['knob', T('The round wheel on the side', 'العجلة المستديرة على الجانب'), ring(48, -92, 22, 22)],
      ['nosepiece', T('The disc that holds the lenses', 'القرص الذي يحمل العدسات'), ring(0, -118, 34, 12)],
      ['objective', T('The small lenses under the disc', 'العدسات الصغيرة تحت القرص'), ring(-2, -92, 26, 22)],
      ['clips', T('The two small bars on the platform', 'القضيبان الصغيران على المنصة'), ring(0, -70, 60, 10)],
      ['stage', T('The platform', 'المنصة'), ring(0, -52, 64, 9)],
      ['reflector', T('The mirror at the bottom', 'المرآة في الأسفل'), ring(-14, -40, 32, 13)]
    ];
    return `<svg class="diagram" viewBox="0 0 340 262" role="img" aria-label="${T('A microscope', 'مجهر')}">${back(340, 262)}
      <g transform="translate(${tx} ${ty}) scale(${k})">${microscope({ light: true })}</g>${H.map(([id, lab, r]) => hot(id, lab, r)).join('')}</svg>`;
  }

  function pollinationBags() {
    const ar = T(false, true), xa = ar ? 246 : 98, xb = ar ? 98 : 246, k = 1.2, y0 = 214;
    return `<svg class="diagram" viewBox="0 0 340 230" role="img" aria-label="${T('Two female luffa flowers after a few days. Flower A got pollen from a male flower. Flower B did not. The swelling of A has grown into a fruit. Flower B has withered and has no fruit.', 'زهرتان مؤنثتان من اللوف بعد عدة أيام. الزهرة (أ) وضعنا عليها حبوب لقاح من زهرة مذكرة. الزهرة (ب) لم نضع عليها. انتفاخ (أ) نما وصار ثمرة. الزهرة (ب) ذبلت وليس بها ثمرة.')}">${back(340, 230)}
      <g transform="translate(${xa} ${y0 - 66}) scale(${k})">${flower({ sex: 'female', wither: true, fruit: 1 })}</g>
      <g transform="translate(${xb} ${y0 - 14}) scale(${k})">${flower({ sex: 'female', wither: true, fruit: 0 })}</g>
      <circle cx="${xa}" cy="26" r="15" fill="#fff8ea" stroke="#cdb98f" stroke-width="2"/><text x="${xa}" y="32" text-anchor="middle" font-family="Nunito,sans-serif" font-size="18" font-weight="900" fill="#1f3d57" direction="ltr">${T('A', 'أ')}</text>
      <circle cx="${xb}" cy="26" r="15" fill="#fff8ea" stroke="#cdb98f" stroke-width="2"/><text x="${xb}" y="32" text-anchor="middle" font-family="Nunito,sans-serif" font-size="18" font-weight="900" fill="#1f3d57" direction="ltr">${T('B', 'ب')}</text>
      ${hot('A', T('Flower A', 'الزهرة (أ)'), `<rect class="ring" x="${xa - 70}" y="46" width="140" height="170" rx="16"/>`)}
      ${hot('B', T('Flower B', 'الزهرة (ب)'), `<rect class="ring" x="${xb - 70}" y="46" width="140" height="170" rx="16"/>`)}</svg>`;
  }

  window.CH5ART = { flower, bee, microscope, field, slideKit, grain, pollenGrain, petal, sepal };
  window.CH_DIAGRAMS = Object.assign(window.CH_DIAGRAMS || {}, { luffaFlowers, flowerParts, microscope: microscopePic, pollinationBags });
})();
