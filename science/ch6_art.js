/* Science Island · Chapter 6 "Human Growth and Reproduction" · drawings made in code (SVG).
   Shared by the chapter's game (growthpath.html), the tap pictures of the question pages (quiz.html) and the map (tools/make_ch456_maps.js).
     person(o)    a simple figure. o.age = 'infant' | 'child' | 'youth' | 'adult' | 'old'; o.hair = hair colour; o.shirt = clothes colour;
                  o.f = a girl or a woman. Origin: the feet (an infant sits, so its origin is its bottom)
     food(), bed(), ball()   the three conditions for healthy growth: a healthy diet, enough sleep, proper exercise
   window.CH_DIAGRAMS adds this chapter's tap pictures: lifeStages, healthyHabits.
   The school book (pages 64-71): the stages are infancy, childhood, youth, adulthood, old age. Infancy starts at birth, after about 9 months inside
   the mother's body; infants are very small and depend on their mothers for food, care and protection. In childhood humans start walking, talking and
   going to school; bones and muscles get stronger. The book prints features only for these two stages, so the questions ask only about them. */
(function () {
  'use strict';
  const T = (en, ar) => (window.SI ? window.SI.T(en, ar) : en);
  const f1 = n => (Math.round(n * 10) / 10).toString();
  const SKIN = '#f2c9a0', SKIN_LN = '#d49d6f';

  const SIZE = { infant: 44, child: 82, youth: 112, adult: 134, old: 124 };
  function person(o = {}) {
    const age = o.age || 'adult', H = SIZE[age], hair = o.hair || (age === 'old' ? '#d9dde2' : '#5b3b26'), shirt = o.shirt || '#4fa3c7', f = !!o.f;
    const pants = age === 'child' ? '#5b7fb0' : '#4a5f7a';
    if (age === 'infant') {   // a baby sitting down, big head, a diaper
      return `<ellipse cx="0" cy="2" rx="26" ry="5" fill="#000" opacity=".1"/>
        <path d="M-16 -6Q-22 -22 -10 -30H10Q22 -22 16 -6Z" fill="#fff8ea" stroke="#d9cdb0" stroke-width="2.4" stroke-linejoin="round"/>
        <path d="M-22 -22q-8 -8 -2 -14M22 -22q8 -8 2 -14" stroke="${SKIN_LN}" stroke-width="5.5" stroke-linecap="round" fill="none"/><path d="M-22 -22q-8 -8 -2 -14M22 -22q8 -8 2 -14" stroke="${SKIN}" stroke-width="3.5" stroke-linecap="round" fill="none"/>
        <ellipse cx="-12" cy="-4" rx="9" ry="5" fill="${SKIN}" stroke="${SKIN_LN}" stroke-width="2"/><ellipse cx="12" cy="-4" rx="9" ry="5" fill="${SKIN}" stroke="${SKIN_LN}" stroke-width="2"/>
        <circle cx="0" cy="-44" r="17" fill="${SKIN}" stroke="${SKIN_LN}" stroke-width="2.4"/><path d="M-4 -61q4 -4 8 0" stroke="${hair}" stroke-width="3" fill="none" stroke-linecap="round"/>
        <circle cx="-6" cy="-45" r="1.9" fill="#3a2f1a"/><circle cx="6" cy="-45" r="1.9" fill="#3a2f1a"/><path d="M-4 -38q4 4 8 0" stroke="#c86a5a" stroke-width="1.8" fill="none" stroke-linecap="round"/><circle cx="-11" cy="-39" r="3" fill="#f6a99a" opacity=".6"/><circle cx="11" cy="-39" r="3" fill="#f6a99a" opacity=".6"/>`;
    }
    const hr = H * (age === 'child' ? .15 : .105), hy = -H + hr + 2, legH = H * .42, tw = H * (age === 'child' ? .26 : .24), ty = -legH, tt = -H + hr * 2 + 4;
    const lean = age === 'old' ? 6 : 0;
    let s = `<ellipse cx="0" cy="2" rx="${f1(H * .24)}" ry="5" fill="#000" opacity=".1"/>`;
    if (age === 'child') s += `<rect x="${f1(-tw * .78)}" y="${f1(tt + 4)}" width="${f1(tw * .56)}" height="${f1(H * .3)}" rx="6" fill="#e2603f" stroke="#a9432b" stroke-width="2"/>`;
    s += `<rect x="${f1(-tw * .46)}" y="${f1(-legH)}" width="${f1(tw * .38)}" height="${f1(legH - 3)}" rx="4" fill="${pants}"/><rect x="${f1(tw * .08)}" y="${f1(-legH)}" width="${f1(tw * .38)}" height="${f1(legH - 3)}" rx="4" fill="${pants}"/>
      <ellipse cx="${f1(-tw * .28)}" cy="-2" rx="${f1(tw * .3)}" ry="4" fill="#3a2f1a"/><ellipse cx="${f1(tw * .28)}" cy="-2" rx="${f1(tw * .3)}" ry="4" fill="#3a2f1a"/>`;
    if (f && age !== 'child') s += `<path d="M${f1(-tw * .6)} ${f1(ty + 2)}L${f1(-tw * .8)} ${f1(-legH * .45)}H${f1(tw * .8)}L${f1(tw * .6)} ${f1(ty + 2)}Z" fill="${shirt}" opacity=".95"/>`;
    s += `<g transform="translate(${lean} 0)"><path d="M${f1(-tw * .55)} ${f1(ty + 4)}V${f1(tt + 8)}Q${f1(-tw * .55)} ${f1(tt)} ${f1(-tw * .3)} ${f1(tt)}H${f1(tw * .3)}Q${f1(tw * .55)} ${f1(tt)} ${f1(tw * .55)} ${f1(tt + 8)}V${f1(ty + 4)}Z" fill="${shirt}" stroke="${f1(0) && '#2f6f8e'}" stroke-width="2" stroke-linejoin="round"/>
      <path d="M${f1(-tw * .55)} ${f1(tt + 8)}l${f1(-tw * .3)} ${f1(H * .17)}M${f1(tw * .55)} ${f1(tt + 8)}l${f1(tw * .3)} ${f1(H * .17)}" stroke="${shirt}" stroke-width="${f1(H * .07)}" stroke-linecap="round"/>
      <circle cx="${f1(-tw * .86)}" cy="${f1(tt + 8 + H * .18)}" r="${f1(H * .035)}" fill="${SKIN}"/><circle cx="${f1(tw * .86)}" cy="${f1(tt + 8 + H * .18)}" r="${f1(H * .035)}" fill="${SKIN}"/>
      <circle cx="0" cy="${f1(hy)}" r="${f1(hr)}" fill="${SKIN}" stroke="${SKIN_LN}" stroke-width="2.2"/>
      <path d="M${f1(-hr)} ${f1(hy)}Q${f1(-hr)} ${f1(hy - hr * 1.15)} 0 ${f1(hy - hr * 1.1)}Q${f1(hr)} ${f1(hy - hr * 1.15)} ${f1(hr)} ${f1(hy)}Q${f1(hr * .5)} ${f1(hy - hr * .5)} 0 ${f1(hy - hr * .55)}Q${f1(-hr * .5)} ${f1(hy - hr * .5)} ${f1(-hr)} ${f1(hy)}Z" fill="${hair}"/>
      ${f ? `<path d="M${f1(-hr)} ${f1(hy)}V${f1(hy + hr * 1.2)}M${f1(hr)} ${f1(hy)}V${f1(hy + hr * 1.2)}" stroke="${hair}" stroke-width="${f1(hr * .38)}" stroke-linecap="round"/>` : ''}
      <circle cx="${f1(-hr * .38)}" cy="${f1(hy + hr * .1)}" r="${f1(Math.max(1.5, hr * .11))}" fill="#3a2f1a"/><circle cx="${f1(hr * .38)}" cy="${f1(hy + hr * .1)}" r="${f1(Math.max(1.5, hr * .11))}" fill="#3a2f1a"/>
      <path d="M${f1(-hr * .3)} ${f1(hy + hr * .5)}q${f1(hr * .3)} ${f1(hr * .26)} ${f1(hr * .6)} 0" stroke="#c86a5a" stroke-width="2" fill="none" stroke-linecap="round"/></g>`;
    if (age === 'old') s += `<path d="M${f1(tw * 1.0)} ${f1(-H * .38)}V-2" stroke="#8a5f38" stroke-width="4" stroke-linecap="round"/><path d="M${f1(tw * 1.0)} ${f1(-H * .38)}q-6 -6 -10 0" stroke="#8a5f38" stroke-width="4" fill="none" stroke-linecap="round"/>`;
    return s;
  }

  /* ---------- the three conditions ---------- */
  function food() {
    return `<g><path d="M-52 0V-52L-44 -62H-18L-10 -52V0Z" fill="#f4faff" stroke="#9fc4d6" stroke-width="2.4" stroke-linejoin="round"/><path d="M-50 -34H-12V-2H-50Z" fill="#dff1fb"/><path d="M-50 -34H-12" stroke="#9fc4d6" stroke-width="2"/>
      <circle cx="18" cy="-22" r="20" fill="#e2603f" stroke="#a9432b" stroke-width="2.4"/><path d="M18 -42q2 -8 8 -10" stroke="#5a8f3f" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M18 -42q-6 -6 -12 -2q6 6 12 2z" fill="#6fbf63" stroke="#3f8f46" stroke-width="1.6"/>
      <path d="M44 0L56 -50L66 -2Z" fill="#f59a3a" stroke="#c46f1f" stroke-width="2.4" stroke-linejoin="round"/><path d="M56 -50q-6 -8 -10 -4M56 -50q2 -10 8 -10M56 -50q8 -6 12 -2" stroke="#5a8f3f" stroke-width="3" fill="none" stroke-linecap="round"/></g>`;
  }
  function bed() {
    return `<g><rect x="-62" y="-26" width="124" height="22" rx="6" fill="#c9a06a" stroke="#8a6334" stroke-width="2.6"/><rect x="-62" y="-52" width="14" height="48" rx="4" fill="#b98b57" stroke="#8a6334" stroke-width="2.6"/>
      <rect x="-52" y="-42" width="112" height="18" rx="8" fill="#9fd6f2" stroke="#6aa9cc" stroke-width="2.4"/><rect x="-46" y="-52" width="32" height="14" rx="7" fill="#fff" stroke="#cfd8de" stroke-width="2.2"/>
      <circle cx="-30" cy="-60" r="9" fill="${SKIN}" stroke="${SKIN_LN}" stroke-width="2" transform="translate(0 6)"/>
      <text x="22" y="-64" font-family="Nunito,sans-serif" font-size="20" font-weight="900" fill="#6a7fb8">Z</text><text x="38" y="-78" font-family="Nunito,sans-serif" font-size="15" font-weight="900" fill="#6a7fb8">z</text></g>
      <path d="M52 -112a24 24 0 1 0 14 40a19 19 0 1 1 -14 -40z" fill="#ffd24a" stroke="#e0a82a" stroke-width="2.4" transform="translate(-30 -2) scale(.82)"/>`;
  }
  function ball() {
    return `<g><circle cx="0" cy="-26" r="26" fill="#fff" stroke="#3a4a5a" stroke-width="2.8"/><path d="M0 -40l12 8l-4 14h-16l-4 -14z" fill="#3a4a5a"/><path d="M0 -40V-52M12 -32l12 -4M8 -18l8 12M-8 -18l-8 12M-12 -32l-12 -4" stroke="#3a4a5a" stroke-width="2.4" stroke-linecap="round"/>
      <path d="M-50 -10q-10 -10 0 -20M-58 -4q-14 -16 0 -34" stroke="#8fd3ee" stroke-width="3" fill="none" stroke-linecap="round" opacity=".8"/></g>`;
  }

  /* ---------- tap pictures ---------- */
  const hot = (id, label, inner) => `<g class="hot" data-id="${id}" role="button" tabindex="0" aria-label="${label}">${inner}</g>`;
  const back = (w, h) => `<rect width="${w}" height="${h}" rx="14" fill="#fff4ec"/><path d="M0 ${h - 26}h${w}v12a14 14 0 0 1-14 14h-${w - 28}a14 14 0 0 1-14-14z" fill="#f7d9c2"/>`;
  function lifeStages() {
    const ar = T(false, true), ids = ['infancy', 'childhood', 'youth', 'adulthood', 'oldage'], xs = [38, 96, 156, 220, 286];
    const pos = ar ? xs.map(x => 340 - x) : xs;
    const ages = ['infant', 'child', 'youth', 'adult', 'old'], shirts = ['#fff', '#f2b134', '#9a7fd1', '#4fa3c7', '#6fb48a'];
    const names = [T('The baby', 'الرضيع'), T('The child with a school bag', 'الطفل الذي يحمل حقيبة مدرسية'), T('The tall young person', 'الشاب الطويل'), T('The tallest grown-up', 'الشخص البالغ الأطول'), T('The grown-up with white hair and a stick', 'الشخص ذو الشعر الأبيض والعصا')];
    return `<svg class="diagram" viewBox="0 0 340 200" role="img" aria-label="${T('Five people of different ages standing in a row, from the smallest to the oldest', 'خمسة أشخاص من أعمار مختلفة في صف، من الأصغر إلى الأكبر سنًّا')}">${back(340, 200)}
      ${ages.map((a, i) => `<g transform="translate(${pos[i]} 172)">${person({ age: a, shirt: shirts[i], f: i === 3 })}</g>`).join('')}
      ${ids.map((id, i) => hot(id, names[i], `<rect class="ring" x="${pos[i] - 28}" y="${172 - SIZE[ages[i]] - 22}" width="56" height="${SIZE[ages[i]] + 34}" rx="12"/>`)).join('')}</svg>`;
  }
  function healthyHabits() {
    const ar = T(false, true), xs = ar ? [262, 170, 78] : [78, 170, 262];
    const L = [T('Milk, an apple and a carrot', 'كوب لبن وتفاحة وجزرة'), T('A bed with a moon', 'سرير وقمر'), T('A ball', 'كرة')];
    return `<svg class="diagram" viewBox="0 0 340 170" role="img" aria-label="${T('Three pictures: milk, fruit and a vegetable; a bed under the moon; and a ball', 'ثلاث صور: لبن وفاكهة وخضار؛ سرير تحت القمر؛ وكرة')}">${back(340, 170)}
      <g transform="translate(${xs[0]} 128) scale(.9)">${food()}</g><g transform="translate(${xs[1]} 134)">${bed()}</g><g transform="translate(${xs[2]} 134) scale(1.1)">${ball()}</g>
      ${['diet', 'sleep', 'exercise'].map((id, i) => hot(id, L[i], `<rect class="ring" x="${xs[i] - 42}" y="22" width="84" height="122" rx="14"/>`)).join('')}</svg>`;
  }

  window.CH6ART = { person, food, bed, ball, SIZE };
  window.CH_DIAGRAMS = Object.assign(window.CH_DIAGRAMS || {}, { lifeStages, healthyHabits });
})();
