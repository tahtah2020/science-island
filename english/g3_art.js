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
    dEat: ['g3_eat', 'a girl with a bowl of fruit', ''], dTV: ['g3_tv', 'a boy on a sofa in front of a screen', ''],
    /* Unit 2 · My Family and I (owner's sheets, 12-13 Nov 2026) */
    mbFather: ['g3_father', 'a man with a moustache', '#e1effb'], mbMother: ['g3_mother', 'a woman in a long dress and a scarf', '#fbe9ee'], mbSister: ['g3_sister', 'a girl in a colourful dress', '#fbf3d6'],
    mbBrother: ['g3_brother', 'a boy in shorts', '#e8f6e2'], mbGrandma: ['g3_grandmother', 'an old woman with a walking stick', '#f1e8fb'], mbGrandpa: ['g3_grandfather', 'an old man with glasses and a cap', '#fbeedd'],
    hpTakes: ['g3_takes', 'a man walking with a boy who carries a school bag', ''], hpCooks: ['g3_cooks', 'a woman at the cooker with a pot', ''],
    hpHomework: ['g3_homework2', 'a boy and a girl at a desk with a notebook', ''], hpStory: ['g3_story', 'an old woman and a girl with a book on an armchair', ''],
    jbFarmer: ['g3_farmer', 'a man in a field with white flowers', ''], jbDoctor: ['g3_doctor', 'a woman in a white coat with a stethoscope', ''], jbTeacher: ['g3_teacher', 'a man pointing at a board', ''],
    jbBaker: ['g3_baker', 'a man in a white hat holding a big loaf', ''], jbPilot: ['g3_pilot', 'a man in a cap in front of an airplane', ''],
    cbEid: ['g3_eid', 'a family looking at the moon at night near a mosque', ''], cbSham: ['g3_sham', 'a family having a picnic with coloured eggs', ''],
    cbMother: ['g3_mothersday', 'two children giving a mother a card and a present', ''], cbOctober: ['g3_october', 'soldiers saluting under the Egyptian flag', ''],
    sdExam: ['g3_exam', 'a boy writing on a paper at a desk', ''], sdExit: ['g3_exit', 'a green sign with a running man and an arrow', ''],
    sdPhone: ['g3_phone', 'a mobile', ''], sdPhoto: ['g3_photo', 'a camera on three legs', ''], sdElephant: ['g3_elephant', 'a big grey animal with a long nose', ''],
    /* Unit 3 · New Adventures */
    plHouse: ['g3_house', 'a building with a garden', ''], plLibrary: ['g3_library', 'a room with tall shelves of books', ''], plSuper: ['g3_supermarket', 'shelves of food and a cart', ''],
    plPark: ['g3_park', 'a bench under trees', ''], plStation: ['g3_station', 'a train at a platform', ''], plMuseum: ['g3_museum', 'a big building with a triangle front', ''],
    lmTower: ['g3_tower', 'a tall tower by the river', ''], lmLibrary: ['g3_alexlib', 'a round sloping building by the sea', ''], lmPyramids: ['g3_pyramids', 'three big stone triangles and two camels', ''],
    snBell: ['g3_bell', 'a golden bell', '#fbf3d6'], snBee: ['g3_bee', 'a flying bee', '#e1effb'], snGrass: ['g3_grass', 'green leaves on the ground', '#e8f6e2'], snWell: ['g3_well', 'a round stone wall with a bucket and a roof', '#fbeedd'],
    snDuck: ['g3_duck', 'a yellow bird', '#e1effb'], snSock: ['g3_sock', 'a striped thing for the foot', '#fbe9ee'], snTruck: ['g3_truck', 'a big red car for carrying things', '#e8f6e2'], snLock: ['g3_lock', 'a yellow thing with a keyhole', '#f1e8fb'],
    /* Unit 4 · Let’s Tell Stories! (owner's sheets, 13 Nov 2026) */
    emHappy: ['g3_e_happy', 'a boy at his desk writing with a calm smile', '#e8f6e2'], emSad: ['g3_e_sad', 'a girl with her face on her hands and sad eyes', '#e1effb'],
    emExcited: ['g3_e_excited', 'a girl jumping up with one arm high, laughing', '#fbf3d6'], emAngry: ['g3_e_angry', 'a boy with a red face and tight fists', '#fbe3e3'],
    emShy: ['g3_e_shy', 'a girl with red cheeks hiding her mouth with her hands', '#f1e8fb'], emTired: ['g3_e_tired', 'a boy yawning at his desk', '#e1effb'],
    emBored: ['g3_e_bored', 'two children leaning their heads on their hands', '#fbeedd'], emScared: ['g3_e_scared', 'a boy with wide eyes and hands on his cheeks', '#fbe9ee'],
    emNervous: ['g3_e_nervous', 'a boy biting his nails, a drop of sweat', '#e8f6e2'],
    csCat: ['g3_c_cat', 'an orange and white pet', '#fbf3d6'], csCoat: ['g3_c_coat', 'a purple jacket on a hanger', '#f1e8fb'], csCup: ['g3_c_cup', 'a white cup', '#e1effb'],
    csCold: ['g3_c_cold', 'a boy in a hat and scarf in the snow', ''], csCarry: ['g3_c_carry', 'a girl walking with a big box', '#e8f6e2'], csCity: ['g3_c_city', 'tall buildings', ''],
    csIce: ['g3_c_ice', 'three clear cubes', '#e1effb'], csFace: ['g3_c_face', 'a round smiling head', '#fbeedd'], csPencil: ['g3_c_pencil', 'a yellow thing to write with', '#fbf3d6'],
    /* Unit 5 · Together Is Better (owner's sheets, 13 Nov 2026) */
    twClean: ['g3_ch_clean', 'a father and two children with a vacuum cleaner and a rug', ''], twTidy: ['g3_ch_tidy', 'a girl smoothing a white sheet', ''],
    twShare: ['g3_ch_share', 'a girl giving food from her plate to her sister', ''], twCare: ['g3_ch_care', 'two girls hugging', '#fbe9ee'],
    twWin: ['g3_ch_win', 'boys holding a gold cup', '#fbf3d6'], twCheer: ['g3_ch_cheer', 'a class with arms up', ''],
    twPlant: ['g3_ch_plant', 'two girls putting a small tree in the ground', ''], twDonate: ['g3_ch_donate', 'a boy holding a box of clothes and toys', '#e1effb'],
    avAnswer: ['g3_av_answer', 'children at desks with hands up', ''], avHelp: ['g3_av_help', 'a boy showing his friend a book', ''], avFix: ['g3_av_fix', 'two children with a screwdriver and a chair', ''],
    avPlan: ['g3_av_plan', 'a family looking at a map with a suitcase', ''], avFind: ['g3_av_find', 'a girl taking a book from a shelf', ''],
    gsGum: ['g3_g_gum', 'a girl blowing a pink bubble', '#fbe9ee'], gsDog: ['g3_g_dog', 'a brown and white pet', '#fbeedd'], gsGoat: ['g3_g_goat', 'a white farm animal with horns', '#e8f6e2'],
    gsGate: ['g3_g_gate', 'a wooden door between two stone posts', ''], gsGame: ['g3_g_game', 'two children with a board and small pieces', ''], gsGarden: ['g3_g_garden', 'grass, a tree and flowers', ''],
    gsPage: ['g3_g_page', 'an open book', '#e1effb'], gsHuge: ['g3_g_huge', 'a very big ball and a tiny boy', '#fbf3d6'], gsMagic: ['g3_g_magic', 'a black hat and a wand with sparkles', '#f1e8fb'],
    /* Unit 6 · Dare to Dream (owner's sheets, 13 Nov 2026) */
    glGoal: ['g3_gl_goal', 'a boy in a white coat dreaming of being grown up', ''], glTry: ['g3_gl_try', 'a girl swimming hard in a pool', ''],
    glStep: ['g3_gl_step', 'a boy climbing up big books like stairs', ''], glPlan: ['g3_gl_plan', 'a girl in a helmet with a clipboard pointing at a drawing of a building', ''],
    glPractice: ['g3_gl_practice', 'a boy with a ball and orange cones', ''], glCelebrate: ['g3_gl_celebrate', 'a girl at her desk with both fists up', ''],
    glSuccess: ['g3_gl_success', 'three children with hands together high in the air', ''], glReach: ['g3_gl_reach', 'a boy making a circle with his fingers', ''],
    clSpring: ['g3_cl_spring', 'a tree with pink flowers', ''], clString: ['g3_cl_string', 'a red ball of thin thread', '#fbe9ee'],
    clStreet: ['g3_cl_street', 'a road with houses and white stripes', ''], clScratch: ['g3_cl_scratch', 'a cat with its paws on a post', '#fbf3d6'],
    clScreen: ['g3_la_screen', 'a girl holding a tablet with a smiling face', ''], clSplash: ['g3_la_spray', 'a girl with a hose and lots of water', '']
  };
  /* cut-out pictures used only in single-picture questions: shown whole on a pastel tint */
  const CUT = { g3_uncle: '#e1effb', g3_aunt: '#fbe9ee', g3_cousin: '#e8f6e2', g3_heavybag: '#fbf3d6', g3_blueshirt: '#e1effb', g3_kitten: '#e8f6e2', g3_babysister: '#fbe9ee',
    g3_kite: '#e1effb', g3_balloon: '#fbf3d6', g3_newbook: '#fbeedd', g3_pinkdress: '#fbe9ee', g3_rabbit: '#e8f6e2', g3_lion: '#fbf3d6', g3_monkey: '#fbeedd',
    g3_sandwich: '#fbe9ee', g3_juice: '#e1effb', g3_giraffe: '#e8f6e2', g3_jump: '#e8f6e2', g3_dance: '#fbe9ee' };
  const tintOf = f => { const k = Object.keys(PH).find(id => PH[id][0] === f); return k ? PH[k][2] : (CUT[f] || ''); };
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
  const family6 = gridFig(['mbFather', 'mbMother', 'mbSister', 'mbBrother', 'mbGrandma', 'mbGrandpa'], 340, 240, 3, 100, 'Six people of one family');
  const help4 = gridFig(['hpTakes', 'hpCooks', 'hpHomework', 'hpStory'], 340, 240, 2, 106, 'Four pictures of a family at home and outside');
  const jobs5 = gridFig(['jbFarmer', 'jbDoctor', 'jbTeacher', 'jbBaker', 'jbPilot'], 340, 240, 3, 100, 'Five people at work');
  const celeb4 = gridFig(['cbEid', 'cbSham', 'cbMother', 'cbOctober'], 340, 240, 2, 106, 'Four pictures of special days');
  const sounds5 = gridFig(['sdExam', 'sdExit', 'sdPhone', 'sdPhoto', 'sdElephant'], 340, 240, 3, 100, 'Five pictures');
  const feel9 = gridFig(['emHappy', 'emSad', 'emExcited', 'emAngry', 'emShy', 'emTired', 'emBored', 'emScared', 'emNervous'], 340, 300, 3, 92, 'Nine children with different faces');
  const csound9 = gridFig(['csCat', 'csCoat', 'csCup', 'csCold', 'csCarry', 'csCity', 'csIce', 'csFace', 'csPencil'], 340, 300, 3, 92, 'Nine pictures');
  const team8 = gridFig(['twClean', 'twTidy', 'twShare', 'twCare', 'twWin', 'twCheer', 'twPlant', 'twDonate'], 340, 180, 4, 76, 'Eight pictures of people doing things together');
  const verbs5 = gridFig(['avAnswer', 'avHelp', 'avFix', 'avPlan', 'avFind'], 340, 240, 3, 100, 'Five pictures of people doing things');
  const gsound9 = gridFig(['gsGum', 'gsDog', 'gsGoat', 'gsGate', 'gsGame', 'gsGarden', 'gsPage', 'gsHuge', 'gsMagic'], 340, 300, 3, 92, 'Nine pictures');
  const dream8 = gridFig(['glGoal', 'glTry', 'glStep', 'glPlan', 'glPractice', 'glCelebrate', 'glSuccess', 'glReach'], 340, 180, 4, 76, 'Eight pictures of children with dreams');
  const cluster6 = gridFig(['clSpring', 'clString', 'clStreet', 'clScratch', 'clScreen', 'clSplash'], 340, 240, 3, 100, 'Six pictures');
  const town6 = gridFig(['plHouse', 'plLibrary', 'plSuper', 'plPark', 'plStation', 'plMuseum'], 340, 240, 3, 100, 'Six places in a town');
  const landmarks3 = gridFig(['lmTower', 'lmLibrary', 'lmPyramids'], 340, 130, 3, 100, 'Three famous places in Egypt');
  const sounds8 = gridFig(['snBell', 'snBee', 'snGrass', 'snWell', 'snDuck', 'snSock', 'snTruck', 'snLock'], 340, 180, 4, 76, 'Eight pictures');

  function photo(q) {   // one to three pictures side by side for a single question
    const pic = (q && q.pic) || {}, src = pic.src || [], n = src.length || 1, w = 340, h = 160, gx = w / n, s = n === 1 ? 148 : 136;
    let out = `<rect width="${w}" height="${h}" rx="14" fill="#fbf6e6"/>`;
    src.forEach((f, i) => { out += tile(f, gx * i + gx / 2, h / 2, s, tintOf(f)); });
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
  /* where is the ball? a box (or a table for "under") and a red ball, drawn in code (Unit 3 lesson 3, prepositions of place) */
  function boxAt(x, y, w, open) {
    const h = w * .78, d = w * .26;
    let s = `<path d="M${f1(x)} ${f1(y)}h${f1(w)}v${f1(h)}h${f1(-w)}z" fill="#d9a86c" stroke="#8a5a2b" stroke-width="2.4" stroke-linejoin="round"/>`
      + `<path d="M${f1(x + w)} ${f1(y)}l${f1(d)} ${f1(-d * .7)}v${f1(h)}l${f1(-d)} ${f1(d * .7)}z" fill="#c4935a" stroke="#8a5a2b" stroke-width="2.4" stroke-linejoin="round"/>`;
    s += open ? `<path d="M${f1(x)} ${f1(y)}l${f1(d)} ${f1(-d * .7)}h${f1(w)}l${f1(-d)} ${f1(d * .7)}z" fill="#6b4421" stroke="#8a5a2b" stroke-width="2.4" stroke-linejoin="round"/>`
      : `<path d="M${f1(x)} ${f1(y)}l${f1(d)} ${f1(-d * .7)}h${f1(w)}l${f1(-d)} ${f1(d * .7)}z" fill="#e8c08a" stroke="#8a5a2b" stroke-width="2.4" stroke-linejoin="round"/><path d="M${f1(x + w * .5 + d * .5)} ${f1(y - d * .7)}l${f1(-d)} ${f1(d * .7)}" stroke="#8a5a2b" stroke-width="1.6"/>`;
    return s;
  }
  const ball = (x, y, r = 17) => `<ellipse cx="${f1(x)}" cy="${f1(y + r + 2)}" rx="${f1(r * .9)}" ry="4" fill="#000" opacity=".12"/><circle cx="${f1(x)}" cy="${f1(y)}" r="${r}" fill="#e2603f" stroke="#8f2f17" stroke-width="2.4"/><path d="M${f1(x - r)} ${f1(y)}q${f1(r)} ${f1(r * .6)} ${f1(2 * r)} 0" fill="none" stroke="#fff" stroke-width="3" opacity=".8"/><circle cx="${f1(x - r * .4)}" cy="${f1(y - r * .45)}" r="${f1(r * .22)}" fill="#fff" opacity=".7"/>`;
  function prep(q) {
    const pic = (q && q.pic) || {}, w = pic.w || 'on', G = 146;
    let s = `<rect width="340" height="170" rx="14" fill="#fbf6e6"/><path d="M14 ${G}H326" stroke="#d8c9a6" stroke-width="3" stroke-linecap="round"/>`;
    const B = (open) => boxAt(130, G - 62, 80, open);
    if (w === 'on') s += B() + ball(178, 62);
    else if (w === 'behind') s += ball(228, 74, 21).replace(/<ellipse[^>]*>/, '') + B();
    else if (w === 'in front of') s += B() + ball(166, G - 20, 21);
    else if (w === 'in') s += `<path d="M130 84l14 -14h82v62l-16 14h-80z" fill="#8a5a2b"/><path d="M130 84l14 -14h82l-14 14z" fill="#6b4421"/>` + ball(178, 104, 18) + `<path d="M130 112h80v34h-80z" fill="#d9a86c" stroke="#8a5a2b" stroke-width="2.4" stroke-linejoin="round"/><path d="M210 112l16 -12v34l-16 12z" fill="#c4935a" stroke="#8a5a2b" stroke-width="2.4" stroke-linejoin="round"/><path d="M130 84v28M210 84v28" stroke="#8a5a2b" stroke-width="2.4"/><path d="M210 84l16 -14v30" fill="none" stroke="#8a5a2b" stroke-width="2.4"/>`;
    else if (w === 'between') s += boxAt(40, G - 54, 70) + boxAt(220, G - 54, 70) + ball(165, G - 18);
    else if (w === 'next to') s += B() + ball(258, G - 18);
    else if (w === 'under') s += `<path d="M90 70h160v12H90z" fill="#c4935a" stroke="#8a5a2b" stroke-width="2.4"/><path d="M100 82v${G - 82}M240 82v${G - 82}" stroke="#8a5a2b" stroke-width="8" stroke-linecap="round"/>` + ball(170, G - 18);
    return wrap(340, 170, w === 'under' ? 'A ball and a table' : 'A ball and a box', s, pic.plain);
  }
  window.CH_DIAGRAMS = Object.assign(window.CH_DIAGRAMS || {}, { greet6, rules6, wh3, looks5, people6, feel3, routine8, daily8, photo, clock,
    family6, help4, jobs5, celeb4, sounds5, town6, landmarks3, sounds8, prep, feel9, csound9, team8, verbs5, gsound9, dream8, cluster6 });
  window.E3ART = { PH, CUT, tintOf, tile, photoGrid, clockFace, ringEl, hot, f1, esc, INK, FONT, IMG, prep };
})();
