/* English · Grade 3 pictures (CH_DIAGRAMS). Nothing is copied from the school book.
   Unit 1 "Let’s Learn Together!" (12 Nov 2026): the owner's Gemini pictures (english/assets/g3_*.webp, cut from his eight sheets;
   the "SCHOOL" word on the school building was painted out, the mirror with a wrong reflection was cut away).
     Tap pictures (rounded tiles, pictures clipped inside): greet6, rules6, wh3, looks5, people6, feel3, routine8, daily8.
     photo  (q.pic.src = ['g3_hello', …], one to three pictures side by side for a single question; never a picture that shows the answer in words)
     clock  (q.pic.h = hour 1-12, drawn in code: the answer is an exact time)
   Every fig honours q.pic.plain (inner markup only, for the game scene) and q.pic.only = [ids] (draws only those tiles).
   Screen-reader names describe the picture, never the word the question asks for. */
(function () {
  'use strict';
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const f1 = n => (Math.round(n * 10) / 10).toString();
  const INK = '#1f3d57', FONT = 'Nunito, Cairo, sans-serif';
  const hot = (id, name, inner) => `<g class="hot" data-id="${id}" role="button" tabindex="0" aria-label="${esc(name)}">${inner}</g>`;
  const ringEl = (cx, cy, rx, ry) => `<ellipse class="ring" cx="${f1(cx)}" cy="${f1(cy)}" rx="${f1(rx)}" ry="${f1(ry)}"/>`;
  const wrap = (w, h, label, inner, plain) => (plain ? inner : `<svg class="diagram" viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(label)}">${inner}</svg>`);
  const IMG = f => `english/assets/${f}.webp`;
  let clipN = 0;
  /* a rounded tile with the picture clipped inside it; cut-out pictures (no background) sit on a pastel tint */
  function tile(file, x, y, s, tint) {
    const id = 'g3c' + (++clipN), r = s * .18, x0 = x - s / 2, y0 = y - s / 2;
    return `<clipPath id="${id}"><rect x="${f1(x0)}" y="${f1(y0)}" width="${f1(s)}" height="${f1(s)}" rx="${f1(r)}"/></clipPath>`
      + `<rect x="${f1(x0)}" y="${f1(y0)}" width="${f1(s)}" height="${f1(s)}" rx="${f1(r)}" fill="${tint || '#fff'}"/>`
      + `<image href="${IMG(file)}" x="${f1(x0)}" y="${f1(y0)}" width="${f1(s)}" height="${f1(s)}" preserveAspectRatio="xMidYMid ${tint ? 'meet' : 'slice'}" clip-path="url(#${id})"/>`
      + `<rect x="${f1(x0)}" y="${f1(y0)}" width="${f1(s)}" height="${f1(s)}" rx="${f1(r)}" fill="none" stroke="#fff" stroke-width="3"/>`
      + `<rect x="${f1(x0)}" y="${f1(y0)}" width="${f1(s)}" height="${f1(s)}" rx="${f1(r)}" fill="none" stroke="#d8c9a6" stroke-width="1.4"/>`;
  }
  /* id -> [file, screen-reader description, tint for cut-out pictures ('' = full scene)] */
  const PH = {
    gHello: ['g3_hello', 'a boy waving his hand', ''], gMorning: ['g3_morning', 'two children and the sun coming up', ''], gMeet: ['g3_meet', 'two boys shaking hands', ''],
    gFine: ['g3_fine', 'a girl asking a friend, the friend shows a thumbs up', ''], gBye: ['g3_goodbye', 'a boy with a bag walking away and waving', ''], gIntro: ['g3_intro', 'a girl with her hand on her chest', ''],
    rRaise: ['g3_raise', 'a boy at his desk with one hand up', ''], rListen: ['g3_listen', 'a girl with her hand behind her ear', ''], rSit: ['g3_sit', 'a boy on a chair', ''],
    rKind: ['g3_kind', 'a girl giving crayons to a friend', ''], rClean: ['g3_clean', 'a boy putting paper in the bin', ''], rShout: ['g3_shout', 'a boy with his hands around his open mouth', ''],
    rOpen: ['g3_openbook', 'a boy with a book on his desk', ''], rStand: ['g3_standup', 'a girl next to her desk', ''],
    whWhale: ['g3_whale', 'a big blue sea animal', '#e1effb'], whWheel: ['g3_wheel', 'a round bicycle part', '#eef0f6'], whWhite: ['g3_shirt', 'a T-shirt on a hanger', ''],
    lTall: ['g3_tallshort', 'a big girl and a small boy', '#e1effb'], lCurly: ['g3_curly', 'a girl with lots of round curls', '#fbeedd'], lLong: ['g3_longhair', 'a girl with hair down to her waist', '#e8f6e2'],
    lShort: ['g3_shorthair', 'a smiling boy', '#e4ecf3'], lEyes: ['g3_browneyes', 'a smiling face', ''], lMona: ['g3_mona', 'a smiling girl', '#fbe9ee'],
    pFunny: ['g3_funny', 'a boy making a silly face and his friends laughing', '#fbf3d6'], pShy: ['g3_shy', 'a girl looking out from behind a book', '#f3e6d6'], pFriendly: ['g3_friendly', 'a boy waving to a group of children', '#e1effb'],
    pHelpful: ['g3_helpful', 'a girl holding a smaller girl’s hand on the grass', '#e8f6e2'], pPolite: ['g3_polite', 'a boy holding a door for an old woman', '#f1e8fb'], pKind: ['g3_giving', 'a girl giving a teddy bear to a little boy', '#fbe9ee'],
    fHappy: ['g3_happy', 'a boy with a big smile', '#fbf3d6'], fSad: ['g3_sad', 'a girl with a tear', '#e1effb'], fAngry: ['g3_angry', 'a boy with his arms crossed and a frown', '#fbe3e3'],
    tWake: ['g3_wakeup', 'a boy stretching in his bed', ''], tTeeth: ['g3_teeth', 'a girl at the sink with a toothbrush', ''], tDressed: ['g3_dressed', 'a boy buttoning his shirt', ''],
    tBed: ['g3_bed', 'a girl putting the blanket straight', ''], tHair: ['g3_hair', 'a girl with a hairbrush', ''], tBreakfast: ['g3_breakfast', 'a boy at the table with an egg and bread', ''],
    tSchool: ['g3_school', 'a girl with a bag on the way to a building', ''], tHomework: ['g3_homework', 'a boy writing at his desk with a lamp', ''],
    dSleep: ['g3_sleep', 'a girl in bed with her eyes closed', ''], dPlay: ['g3_play', 'a boy on a swing', ''], dRead: ['g3_read', 'a girl with an open book on a cushion', ''],
    dSchool: ['g3_school', 'a girl with a bag on the way to a building', ''], dWake: ['g3_wakeup', 'a boy stretching in his bed', ''], dWrite: ['g3_write', 'a boy with a pencil and a notebook', ''],
    dEat: ['g3_eat', 'a girl with a bowl of fruit', ''], dTV: ['g3_tv', 'a boy on a sofa in front of a screen', '']
  };
  function photoGrid(q, ids, w, h, cols, s, label) {
    const pic = (q && q.pic) || {}, plain = !!pic.plain, only = pic.only || ids, n = only.length, c = pic.cols || Math.min(cols, n), rows = Math.ceil(n / c);
    const gx = w / c, gy = h / rows, pos = {};
    only.forEach((id, i) => { const row = Math.floor(i / c), inRow = row === rows - 1 ? n - row * c : c, x0 = (w - inRow * gx) / 2; pos[id] = [x0 + gx * (i % c) + gx / 2, gy * row + gy / 2]; });
    let out = plain ? '' : `<rect width="${w}" height="${h}" rx="14" fill="#fbf6e6"/>`;
    only.forEach(id => { const [x, y] = pos[id], P = PH[id]; out += tile(P[0], x, y, s, P[2]); });
    if (!plain) only.forEach(id => { const [x, y] = pos[id]; out += hot(id, PH[id][1], ringEl(x, y, s * .52, s * .52)); });
    return { svg: wrap(w, h, label, out, plain), pos };
  }
  const gridFig = (ids, w, h, cols, s, label) => {
    const fn = q => photoGrid(q, ids, w, h, cols, s, label).svg;
    fn.rings = q => { const { pos } = photoGrid(q, ids, w, h, cols, s, ''); const o = {}, r = s * .52; Object.keys(pos).forEach(id => { o[id] = [pos[id][0] - r, pos[id][1] - r, 2 * r, 2 * r]; }); return o; };
    return fn;
  };
  const greet6 = gridFig(['gHello', 'gMorning', 'gMeet', 'gFine', 'gBye', 'gIntro'], 340, 240, 3, 100, 'Six pictures of children meeting each other');
  const rules6 = gridFig(['rRaise', 'rListen', 'rSit', 'rKind', 'rClean', 'rShout'], 340, 240, 3, 100, 'Six pictures of children in class');
  const wh3 = gridFig(['whWhale', 'whWheel', 'whWhite'], 340, 130, 3, 100, 'Three pictures');
  const looks5 = gridFig(['lTall', 'lCurly', 'lLong', 'lShort', 'lEyes'], 340, 240, 3, 100, 'Five pictures of children');
  const people6 = gridFig(['pFunny', 'pShy', 'pFriendly', 'pHelpful', 'pPolite', 'pKind'], 340, 240, 3, 100, 'Six pictures of children with other people');
  const feel3 = gridFig(['fHappy', 'fSad', 'fAngry'], 340, 130, 3, 100, 'Three faces');
  const routine8 = gridFig(['tWake', 'tTeeth', 'tDressed', 'tBed', 'tHair', 'tBreakfast', 'tSchool', 'tHomework'], 340, 180, 4, 76, 'Eight pictures of a child’s morning and afternoon');
  const daily8 = gridFig(['dSleep', 'dPlay', 'dRead', 'dSchool', 'dWake', 'dWrite', 'dEat', 'dTV'], 340, 180, 4, 76, 'Eight pictures of things children do every day');

  function photo(q) {   // one to three pictures side by side for a single question
    const pic = (q && q.pic) || {}, src = pic.src || [], n = src.length || 1, w = 340, h = 160, gx = w / n, s = n === 1 ? 148 : 136;
    let out = `<rect width="${w}" height="${h}" rx="14" fill="#fbf6e6"/>`;
    src.forEach((f, i) => { const x = gx * i + gx / 2, id = Object.keys(PH).find(k => PH[k][0] === f), tint = id ? PH[id][2] : ''; out += tile(f, x, h / 2, s, tint); });
    return wrap(w, h, pic.label || 'A picture for the question', out, pic.plain);
  }
  /* an alarm clock showing an exact hour (o’clock), drawn in code */
  function clockFace(cx, cy, r, hr) {
    let s = `<circle cx="${cx}" cy="${cy}" r="${r + 8}" fill="#e2603f" stroke="${INK}" stroke-width="3"/><circle cx="${cx}" cy="${cy}" r="${r}" fill="#fffaf0" stroke="${INK}" stroke-width="2.4"/>`;
    for (let k = 1; k <= 12; k++) {
      const a = k * Math.PI / 6;
      s += `<text x="${f1(cx + Math.sin(a) * r * .76)}" y="${f1(cy - Math.cos(a) * r * .76 + r * .09)}" text-anchor="middle" direction="ltr" font-family="${FONT}" font-size="${f1(r * .24)}" font-weight="900" fill="${INK}">${k}</text>`;
    }
    const ah = (hr % 12) * Math.PI / 6;
    s += `<path d="M${cx} ${cy}L${f1(cx + Math.sin(ah) * r * .48)} ${f1(cy - Math.cos(ah) * r * .48)}" stroke="${INK}" stroke-width="6" stroke-linecap="round"/>`;
    s += `<path d="M${cx} ${cy}L${cx} ${f1(cy - r * .74)}" stroke="#23799f" stroke-width="4" stroke-linecap="round"/><circle cx="${cx}" cy="${cy}" r="5" fill="${INK}"/>`;
    s += `<path d="M${f1(cx - r * .7)} ${f1(cy - r * .95)}l-10 -10M${f1(cx + r * .7)} ${f1(cy - r * .95)}l10 -10" stroke="${INK}" stroke-width="5" stroke-linecap="round"/>`;
    return s;
  }
  function clock(q) {
    const pic = (q && q.pic) || {}, src = pic.src;
    let out = `<rect width="340" height="160" rx="14" fill="#fbf6e6"/>`;
    if (src) { out += tile(src, 96, 80, 136, '') + clockFace(250, 84, 54, pic.h || 7); }
    else out += clockFace(170, 84, 60, pic.h || 7);
    return wrap(340, 160, 'An alarm clock', out, pic.plain);
  }
  window.CH_DIAGRAMS = Object.assign(window.CH_DIAGRAMS || {}, { greet6, rules6, wh3, looks5, people6, feel3, routine8, daily8, photo, clock });
  window.E3ART = { PH, tile, photoGrid, clockFace, ringEl, hot, f1, esc, INK, FONT, IMG };
})();
