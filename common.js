/* Motafawek · shared helpers: storage, online progress + recovery code, player, chapters, XP levels, daily streak, sounds, Arabic voice, Champions board */
(function () {
  'use strict';
  const HOME = 'index.html', CHAPTERS_PAGE = 'chapters.html';
  /* the release stamp from <script src="common.js?v=..."> is added to every file this script loads,
     so after an update no phone mixes new pages with old cached files. Change it in every page on each release. */
  const VER = ((/[?&]v=([^&]+)/.exec((document.currentScript || {}).src || '') || [])[1]) || '';
  const vq = u => (VER ? u + (u.includes('?') ? '&' : '?') + 'v=' + VER : u);
  const KEY = 'si.v2';
  const store = {
    load() { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } },
    save(o) { try { localStorage.setItem(KEY, JSON.stringify(o)); } catch (e) {} },
    update(fn) { const s = this.load(); fn(s); this.save(s); return s; }
  };
  const rid = () => Math.random().toString(36).slice(2, 10) + Date.now().toString(36);

  /* ---------- players (several children can share one device) ---------- */
  const players = () => store.load().players || {};
  const player = () => { const s = store.load(); return (s.players || {})[s.current] ? Object.assign({ id: s.current }, s.players[s.current]) : null; };
  function addPlayer(p) {
    const id = rid();
    store.update(s => { s.players = s.players || {}; s.players[id] = { name: p.name, grade: p.grade || 'g5', track: p.track || 'lang', g: p.g || '' }; s.current = id; });
    return player();
  }
  /* ---------- language: an Arabic-track player sees the site in Arabic, right to left ----------
     T(en, ar) picks the text for the current player; static HTML carries data-ar (inner HTML),
     data-ar-label (aria-label + title) and data-ar-ph (placeholder), swapped in by applyLang(). */
  const LANG_OVR = (/[#&]lang=(ar|en)\b/.exec(location.hash) || [])[1];   // owner preview links can force a language: #preview=M1.1&lang=ar
  /* a subject taught in Arabic on both tracks (Studies) is shown fully in Arabic, right to left, to the Languages track too */
  const arSubject = () => { try { const s = subjectById(subjectId()); return !!(s && s.lang && s.lang.lang === 'ar' && s.lang.ar === 'ar'); } catch (e) { return false; } };
  const enSubject = () => { try { const s = subjectById(subjectId()); return !!(s && s.lang && s.lang.lang === 'en' && s.lang.ar === 'en'); } catch (e) { return false; } };   // English: English only on both tracks
  const isAr = () => (LANG_OVR ? LANG_OVR === 'ar' : (enSubject() ? false : ((player() || {}).track === 'ar' || arSubject())));
  const T = (en, ar) => (isAr() && ar != null ? ar : en);
  const chTitle = c => (c ? (isAr() && c.titleAr) || c.title : '');
  const RTL_CSS = `
html[dir=rtl] body{font-family:"Cairo","Nunito",system-ui,-apple-system,"Segoe UI",sans-serif}
html[dir=rtl] .opt,html[dir=rtl] .choice,html[dir=rtl] .lvlbox,html[dir=rtl] .ch,html[dir=rtl] .coachCard{text-align:right}
html[dir=rtl] .opt .num{margin-left:0;margin-right:auto}
html[dir=rtl] .story{border-left:0;border-right:6px solid #9fdcc4}
html[dir=rtl] .badge,html[dir=rtl] .colhead,html[dir=rtl] .banner small,html[dir=rtl] .you{text-transform:none;letter-spacing:0}
html[dir=rtl] .float{right:auto;left:10px}
html[dir=rtl] .timer span{right:auto;left:8px}`;
  /* the owner signed in on admin.html on this device (kept 30 days): unlocks quiz.html#preview */
  const OWNER_KEY = 'si.owner';
  function isOwner() { try { return +localStorage.getItem(OWNER_KEY) > Date.now(); } catch (e) { return false; } }
  function setOwner(v) { try { if (v) { localStorage.setItem(OWNER_KEY, String(Date.now() + 30 * 864e5)); localStorage.setItem('si.notrack', '1'); } else localStorage.removeItem(OWNER_KEY); } catch (e) {} }   // the owner's device stays out of the statistics even after signing out
  function applyLang() {
    const h = document.documentElement;
    if (!isAr() || h.hasAttribute('data-bilingual')) return;   // the home page stays bilingual
    h.lang = 'ar'; h.dir = 'rtl'; h.classList.add('ar-track');
    if (!document.getElementById('rtlCss')) { const st = document.createElement('style'); st.id = 'rtlCss'; st.textContent = RTL_CSS; document.head.appendChild(st); }
    document.querySelectorAll('[data-ar]').forEach(e => { e.innerHTML = e.dataset.ar; });
    document.querySelectorAll('[data-ar-label]').forEach(e => { e.setAttribute('aria-label', e.dataset.arLabel); if (e.hasAttribute('title')) e.title = e.dataset.arLabel; });
    document.querySelectorAll('[data-ar-ph]').forEach(e => { e.placeholder = e.dataset.arPh; });
  }
  /* boy or girl: Reesho talks to each child the right way ("يا بطل" / "يا بطلة") */
  const gender = () => ((player() || {}).g || '');
  const G = (m, f) => (gender() === 'f' ? f : m);
  function setGender(g) { store.update(s => { const p = (s.players || {})[s.current]; if (p) p.g = g === 'f' ? 'f' : 'm'; }); }
  /* how long since this player was last here: decides Reesho's greeting */
  function visit() {
    const p = player(); if (!p) return { kind: 'hello', days: 0 };
    const t = today(), days = p.seen ? Math.max(0, dayDiff(p.seen, t)) : -1;
    store.update(s => { const q = (s.players || {})[s.current]; if (q) q.seen = t; });
    return { kind: days < 0 ? 'intro' : days === 0 ? 'hello' : days === 1 ? 'back' : days < 7 ? 'miss' : 'missbig', days };
  }
  function usePlayer(id) { store.update(s => { if ((s.players || {})[id]) s.current = id; }); return player(); }
  function requirePlayer() { const p = player(); if (!p || !p.name) { location.href = HOME; return null; } return p; }
  /* per-player progress shared by all chapters: xp, daily streak, the chapter being played (cur) */
  function prof() { const s = store.load(); return ((s.profiles || {})[s.current]) || {}; }
  function updateProf(fn) { store.update(s => { s.profiles = s.profiles || {}; const p = s.profiles[s.current] = s.profiles[s.current] || {}; fn(p); const q = (s.players || {})[s.current]; if (q) { q.dirty = q.dirty || 2; q.dv = (q.dv || 0) + 1; } }); return prof(); }

  /* ---------- chapters (the list lives in chapters.js) ----------
     Each chapter keeps its own progress in profile.ch[chapterId]:
     quest and game (best, stars, plays), cards (review schedule), lastVar (last phrasing), dailyLast */
  /* grades: a player belongs to one grade (chosen on the home page) and sees that grade's chapters and tests only.
     A chapter or test without `grade` in chapters.js belongs to Grade 5, the first grade the site had. */
  const GRADES = { g4: ['Grade 4', 'الصف الرابع'], g5: ['Grade 5', 'الصف الخامس'], g6: ['Grade 6', 'الصف السادس'], p1: ['Prep 1', 'الصف الأول الإعدادي'], p2: ['Prep 2', 'الصف الثاني الإعدادي'] };
  const grade = () => ((player() || {}).grade || 'g5');
  const chGrade = c => (c && c.grade) || 'g5';
  const gradeName = g => { const n = GRADES[g || grade()] || GRADES.g5; return T(n[0], n[1]); };
  /* the preparatory-stage books are made of units («الوحدة»), not chapters («الفصل»): the pages name them the way the book does.
     c = a chapter (its grade decides); without it the player's grade decides */
  const UNIT_GRADES = { p1: true, p2: true };
  const isUnits = c => !!UNIT_GRADES[c ? chGrade(c) : grade()] || ['math', 'studies', 'english'].includes(c ? chSubject(c) : subjectId());   // the Math, Social Studies and English books are made of units («الوحدة») in every grade
  const chWord = c => (isUnits(c) ? T('Unit', 'الوحدة') : T('Chapter', 'الفصل'));
  const chWords = c => (isUnits(c) ? T('Units', 'الوحدات') : T('Chapters', 'الفصول'));
  const questName = c => (isUnits(c) ? T('Unit Quest', 'تحدي الوحدة') : T('Chapter Quest', 'تحدي الفصل'));
  /* subjects (chapters.js: window.SUBJECTS). A chapter or test without `subject` belongs to Science, the first subject the site had.
     A subject's `lang` says which questions file each track reads: { lang: 'en', ar: 'ar' } (the default: Languages track English,
     Arabic track Arabic), { lang: 'ar', ar: 'ar' } for a subject taught in Arabic on both tracks, { lang: 'en', ar: 'en' } for English. */
  const subjects = () => (window.SUBJECTS || [{ id: 'science', title: 'Science', titleAr: 'العلوم', icon: '🔬' }]).filter(s => !s.hidden);
  const subjectById = id => subjects().find(s => s.id === id) || (window.SUBJECTS || []).find(s => s.id === id) || null;
  const chSubject = c => (c && c.subject) || 'science';
  const subjectId = () => prof().subj || chSubject(chapterById(prof().cur)) || 'science';
  const subject = () => subjectById(subjectId()) || subjects()[0];
  function setSubject(id) { if (subjectById(id)) updateProf(p => { p.subj = id; p.curAt = Date.now(); }); return subject(); }
  const subjectName = s => { s = s || subject(); return s ? T(s.title, s.titleAr) : ''; };
  /* the questions file this player reads for chapter c (null when there is none in that language) */
  const contentAr = c => { const L = (subjectById(chSubject(c)) || {}).lang; return L ? L[isAr() ? 'ar' : 'lang'] === 'ar' : isAr(); };
  const qFile = c => (c ? (contentAr(c) ? c.questionsAr : c.questions) || null : null);
  const allChapters = () => window.CHAPTERS || [];
  const chapters = () => allChapters().filter(c => chGrade(c) === grade() && chSubject(c) === subjectId());
  const chapterById = id => allChapters().find(c => c.id === id) || null;
  const chapterId = () => prof().cur || null;
  const chapter = () => chapterById(chapterId());
  function setChapter(id) { const c = chapterById(id); if (c) updateProf(p => { p.cur = id; p.subj = chSubject(c); p.curAt = Date.now(); }); return chapter(); }
  /* pages inside a chapter call this; a game page passes its own chapter id */
  function requireChapter(id) {
    if (id) setChapter(id);
    const c = chapter();
    if (!chReady(c)) { location.href = CHAPTERS_PAGE; return null; }
    return c;
  }
  /* open for this player: marked ready, in the player's grade (the owner may look at every grade),
     and for the Arabic track it also needs its Arabic questions */
  function chReady(c) { return !!(c && c.ready && qFile(c) && (chGrade(c) === grade() || isOwner())); }   // a chapter opens only in a language it has questions for
  function chProf(id) { id = id || chapterId(); return ((prof().ch || {})[id]) || {}; }
  function updateChProf(fn, id) {
    id = id || chapterId(); if (!id) return {};
    updateProf(p => { p.ch = p.ch || {}; const c = p.ch[id] = p.ch[id] || {}; fn(c); });
    return chProf(id);
  }
  function chapterStars(id) {
    const c = chapterById(id) || {}, p = chProf(id);
    return { got: ((p.quest || {}).stars || 0) + ((p.game || {}).stars || 0), of: c.game ? 6 : 3 };
  }
  function applyTheme() {
    const c = chapter(); if (!c || !c.theme) return;
    Object.keys(c.theme).forEach(k => document.documentElement.style.setProperty('--' + k, c.theme[k]));
  }
  function loadQuestions() {
    const c = chapter();
    return new Promise((res, rej) => {
      const src = qFile(c);   // the file of the player's track (Arabic-track players get the Arabic file)
      if (!src) return rej(new Error('This chapter has no questions yet.'));
      window.IDEAS = undefined;
      const add = (file, ok, bad) => { const el = document.createElement('script'); el.src = vq(file); el.onload = ok; el.onerror = bad; document.head.appendChild(el); };
      const questions = () => add(src, () => (Array.isArray(window.IDEAS) ? res(window.IDEAS) : rej(new Error('No questions in ' + src))), () => rej(new Error('Could not load ' + src)));
      if (c.art && !window.CH_DIAGRAMS) add(c.art, questions, () => rej(new Error('Could not load ' + c.art)));   // the chapter's own tap pictures
      else questions();
    });
  }
  /* one chapter's ideas in the player's language (null when the chapter has no file for that language).
     Used by the Exam Hall, which mixes several chapters; the chapter's own drawings are loaded first. */
  const loaded = {};
  const addScript = file => new Promise((res, rej) => { const el = document.createElement('script'); el.src = vq(file); el.onload = res; el.onerror = () => rej(new Error('Could not load ' + file)); document.head.appendChild(el); });
  async function loadIdeas(c) {
    const src = qFile(c);
    if (!src) return null;
    if (c.art && !loaded[c.art]) { await addScript(c.art); loaded[c.art] = true; }
    window.IDEAS = undefined;
    await addScript(src);
    return Array.isArray(window.IDEAS) ? window.IDEAS : null;
  }
  /* monthly tests (chapters.js: window.EXAMS). examParts: the chapters of a test that this player can be asked about */
  const exams = () => (window.EXAMS || []).filter(e => (e.grade || 'g5') === grade() && chSubject(e) === subjectId());   // this grade's tests in the chosen subject
  /* a test opens for its own grade only (the owner may open every grade's test) */
  const examById = id => { const e = id ? (window.EXAMS || []).find(x => x.id === id) : exams()[0]; return e && ((e.grade || 'g5') === grade() || isOwner()) ? e : null; };
  const examParts = ex => ((ex && ex.parts) || []).map(p => Object.assign({}, p, { c: chapterById(p.ch) })).filter(p => p.c && qFile(p.c));
  /* what a test covers, for its card and its first page: "Chapters 1, 2, 3", or "Unit 1 · Lessons 1 to 3" for a test on part of one unit.
     Chapters the test only touches (max) are not named. */
  function examScope(ex, parts) {
    parts = (parts || examParts(ex)).filter(p => p.max == null);
    if (!parts.length) return '';
    const c = parts[0].c;
    if (parts.length === 1 && parts[0].lessons) {
      const L = parts[0].lessons.slice().sort((a, b) => a - b), run = L.length > 1 && L[L.length - 1] - L[0] === L.length - 1;
      const span = run ? T(`Lessons ${L[0]} to ${L[L.length - 1]}`, `الدروس من ${L[0]} إلى ${L[L.length - 1]}`)
        : T(`Lesson${L.length > 1 ? 's' : ''} ${L.join(', ')}`, `${L.length > 1 ? 'الدروس' : 'الدرس'} ${L.join('، ')}`);
      return `${chWord(c)} ${c.n} · ${span}`;
    }
    const names = parts.map(p => p.c.n).join(T(', ', '، '));
    return `${parts.length === 1 ? chWord(c) : chWords(c)} ${names}`;
  }

  /* saves made before the site had several chapters all belong to Chapter 1: move them into ch.ch1 */
  (function migrate() {
    const s = store.load(); let changed = false;
    const best = (a, b) => { if (!a) return b; if (!b) return a; return Object.assign({}, a, b, { best: Math.max(a.best || 0, b.best || 0), stars: Math.max(a.stars || 0, b.stars || 0), plays: (a.plays || 0) + (b.plays || 0) }); };
    Object.keys(s.profiles || {}).forEach(k => {
      const p = s.profiles[k];
      if (!p || !(p.quest || p.arm || p.cards || p.lastVar || (p.daily && !p.ch))) return;
      p.ch = p.ch || {}; const c = p.ch.ch1 = p.ch.ch1 || {};
      if (p.quest) c.quest = best(c.quest, p.quest);
      if (p.arm) c.game = best(c.game, p.arm);
      if (p.cards) c.cards = Object.assign(c.cards || {}, p.cards);
      if (p.lastVar) c.lastVar = Object.assign(c.lastVar || {}, p.lastVar);
      if (p.daily && p.daily.last && !c.dailyLast) c.dailyLast = p.daily.last;
      delete p.quest; delete p.arm; delete p.cards; delete p.lastVar;
      if (!p.cur) p.cur = 'ch1';
      changed = true;
    });
    if (changed) store.save(s);
  })();

  /* names: first name or nickname, letters only, simple word filter */
  const BLOCK = ['stupid', 'idiot', 'dumb', 'fuck', 'shit', 'sex', 'kill', 'hate', 'حمار', 'غبي', 'غبية', 'كلب', 'زفت', 'وسخ', 'خول', 'شرموط', 'متخلف', 'حيوان', 'تافه'];
  function checkName(raw) {
    const n = String(raw || '').replace(/\s+/g, ' ').trim();
    if (n.length < 2) return { ok: false, msg: 'Write at least 2 letters.\nاكتب حرفين على الأقل' };
    if (n.length > 14) return { ok: false, msg: 'Use 14 letters or fewer.\nاستخدم 14 حرفًا أو أقل' };
    if (!/^[\p{L}\p{M} ]+$/u.test(n)) return { ok: false, msg: 'Use letters only.\nاستخدم الحروف فقط' };
    const low = n.toLowerCase();
    if (BLOCK.some(w => low.includes(w))) return { ok: false, msg: 'Please choose a kind name.\nاختر اسمًا لطيفًا' };
    return { ok: true, name: n };
  }

  /* ---------- XP and levels ---------- */
  /* level names are general on purpose: XP is shared by every chapter (and later every subject), so a name must fit them all.
     Arabic names come as [boy, girl]. */
  const LEVELS = [[0, 'Rookie'], [300, 'Explorer'], [800, 'Thinker'], [1500, 'Star'], [2500, 'Champion'], [4000, 'Legend']];
  const LEVELS_AR = [['مبتدئ', 'مبتدئة'], ['مستكشف', 'مستكشفة'], ['مفكّر', 'مفكّرة'], ['نجم', 'نجمة'], ['بطل', 'بطلة'], ['متفوّق', 'متفوّقة']];
  function levelInfo(xp) {
    let i = 0; LEVELS.forEach((l, k) => { if (xp >= l[0]) i = k; });
    const nxt = LEVELS[i + 1], nm = k => T(LEVELS[k][1], G(LEVELS_AR[k][0], LEVELS_AR[k][1]));
    return { n: i + 1, title: nm(i), xp, from: LEVELS[i][0], to: nxt ? nxt[0] : null, pct: nxt ? (xp - LEVELS[i][0]) / (nxt[0] - LEVELS[i][0]) : 1, next: nxt ? nm(i + 1) : null };
  }
  const xp = () => prof().xp || 0;
  function addXP(n) { let b = 0, a = 0; updateProf(p => { b = p.xp || 0; p.xp = b + Math.max(0, Math.round(n)); a = p.xp; }); sync.dirty(); return { before: levelInfo(b), after: levelInfo(a), gained: a - b, gems: Math.floor(a / GEM_XP) - Math.floor(b / GEM_XP) }; }

  /* ---------- gems «جواهر» and Reesho's wardrobe ----------
     One gem for every GEM_XP points of XP. XP only grows, so the balance is floor(xp / GEM_XP) - spent: nothing extra is stored
     while earning, every activity that calls addXP pays gems, and players who already have XP start with their gems.
     profile.wardrobe = { spent, owned: [item ids], worn: { slot: item id } }. Gems are free to earn and never bought with money. */
  const GEM_XP = 5;
  const wardrobe = () => { const w = prof().wardrobe || {}; return { spent: w.spent || 0, owned: w.owned || [], worn: w.worn || {} }; };
  const gems = () => Math.max(0, Math.floor(xp() / GEM_XP) - wardrobe().spent);
  /* buy an item: id and price come from wardrobe.html's list; returns true when bought */
  function buyItem(id, price) {
    let ok = false;
    updateProf(p => {
      const w = p.wardrobe = p.wardrobe || {}; w.owned = w.owned || []; w.worn = w.worn || {}; w.spent = w.spent || 0;
      if (w.owned.includes(id) || price < 0 || Math.floor((p.xp || 0) / GEM_XP) - w.spent < price) return;
      w.spent += price; w.owned.push(id); ok = true;
    });
    if (ok) sync.dirty();
    return ok;
  }
  /* wear an owned item in its slot, or take the slot off with id = null */
  function wearItem(slot, id) {
    updateProf(p => { const w = p.wardrobe = p.wardrobe || {}; w.owned = w.owned || []; w.worn = w.worn || {}; if (!id) delete w.worn[slot]; else if (w.owned.includes(id)) w.worn[slot] = id; });
    return wardrobe().worn;
  }

  /* ---------- daily challenge streak ----------
     One streak for the player (any chapter's Daily 5 keeps it alive); "done today" is per chapter. */
  const pad = n => String(n).padStart(2, '0');
  const today = () => { const d = new Date(); return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`; };
  const dayDiff = (a, b) => Math.round((Date.parse(b) - Date.parse(a)) / 864e5);
  function dailyState() {
    const d = prof().daily || {}, t = today();
    const alive = !!d.last && (d.last === t || dayDiff(d.last, t) === 1);
    return { done: chProf().dailyLast === t, streak: alive ? (d.streak || 0) : 0 };
  }
  function completeDaily() {
    let st = 0;
    updateProf(p => { const d = p.daily || {}, t = today(); if (d.last !== t) { d.streak = d.last && dayDiff(d.last, t) === 1 ? (d.streak || 0) + 1 : 1; d.last = t; } p.daily = d; st = d.streak; });
    updateChProf(c => { c.dailyLast = today(); });
    return st;
  }

  /* ---------- week of the Champions board (resets every Saturday) ---------- */
  function weekKey(date = new Date()) {
    const d = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    d.setDate(d.getDate() - ((d.getDay() + 1) % 7));          // back to Saturday
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  }
  function weekEndsIn() {
    const now = new Date(), start = new Date(weekKey(now) + 'T00:00:00');
    const end = new Date(start); end.setDate(end.getDate() + 7);
    return end - now;
  }

  /* ---------- sound engine: one AudioContext for the effects and for Reesho's voice ---------- */
  const isMuted = () => !!store.load().muted;
  let ac = null, fxOut = null, voiceOut = null, talking = null;
  function audio() {
    if (!ac) {
      const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return null;
      ac = new AC();
      fxOut = ac.createGain(); fxOut.connect(ac.destination);      // effects: levels below are set so that effect + voice never clip
      voiceOut = ac.createGain(); voiceOut.gain.value = .8; voiceOut.connect(ac.destination);
    }
    if (ac.state === 'suspended') { try { const r = ac.resume(); if (r && r.catch) r.catch(() => {}); } catch (e) {} }
    return ac;
  }
  function hush() {
    try { if (talking) talking.stop(); } catch (e) {} talking = null;
    try { Object.keys(els).forEach(id => els[id].pause()); } catch (e) {}
    try { speechSynthesis.cancel(); } catch (e) {}
  }
  const setMuted = v => { store.update(s => { s.muted = !!v; }); if (v) hush(); };

  /* one soft note: quick attack, bell-like decay; options: at (delay), d (length), v (volume),
     type, parts ([multiple, level] overtones), to (slide to this pitch), lp (low-pass cut-off) */
  function note(f, o = {}) {
    if (isMuted()) return;
    try {
      const a = audio(); if (!a) return;
      const d = o.d || .25, t = a.currentTime + (o.at || 0), g = a.createGain();
      const v = o.v || .1;
      g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(v, t + .008); g.gain.exponentialRampToValueAtTime(v * .03, t + d); g.gain.linearRampToValueAtTime(0, t + d + .03);
      if (o.lp) { const lp = a.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = o.lp; g.connect(lp); lp.connect(fxOut); } else g.connect(fxOut);
      (o.parts || [[1, 1]]).forEach(([mul, amp]) => {
        const osc = a.createOscillator(), pg = a.createGain();
        osc.type = o.type || 'sine'; osc.frequency.setValueAtTime(f * mul, t);
        if (o.to) osc.frequency.exponentialRampToValueAtTime(o.to * mul, t + d);
        pg.gain.value = amp; osc.connect(pg); pg.connect(g); osc.start(t); osc.stop(t + d + .06);
      });
    } catch (e) {}
  }
  const CHIME = [[1, 1], [2, .35], [3, .12]];                 // warm bell: the note plus two quiet overtones
  const SOFT = [[1, 1], [2, .4], [3, .15]];                   // rounder, so low notes still sound on phone speakers
  const sfx = {
    ok() { note(784, { d: .25, v: .16, parts: CHIME }); note(1046.5, { d: .45, v: .18, parts: CHIME, at: .09 }); },                 // G5 up to C6
    bad() { note(329.6, { d: .22, v: .2, parts: SOFT, to: 294 }); note(261.6, { d: .38, v: .2, parts: SOFT, to: 233, at: .17 }); },   // two soft falling notes, no buzzer
    win() { [523.25, 659.25, 784, 1046.5].forEach((f, i) => note(f, { d: .3, v: .14, parts: CHIME, at: i * .1 })); [1046.5, 1318.5, 1568].forEach(f => note(f, { d: .9, v: .06, parts: CHIME, at: .42 })); },
    tick() { note(1400, { d: .06, v: .1 }); },
    beep() { note(988, { d: .12, v: .13, parts: [[1, 1], [2, .2]] }); },
    boss() { note(110, { d: .5, v: .3, to: 55 }); [146.83, 174.61, 220, 293.66].forEach((f, i) => note(f, { d: .32, v: .13, type: 'sawtooth', lp: 900, at: .05 + i * .15 })); },
    level() { [523.25, 659.25, 784].forEach((f, i) => note(f, { d: .18, v: .14, parts: CHIME, at: i * .09 })); [1046.5, 1318.5, 1568].forEach(f => note(f, { d: .8, v: .07, parts: CHIME, at: .3 })); }
  };

  /* ---------- Reesho's Arabic voice ----------
     Recorded clips live in assets/voice/<id>.mp3 and play through the same AudioContext as the
     effects, so one tap unlocks them all (phones block sound that does not follow a tap).
     A clip that is missing falls back to the device's Arabic text-to-speech, or stays silent.
     The rating clips (rate, better, thanks) are only ever played in Reesho's own recorded voice. */
  const VOICE = {
    ok: ['ok1', 'ok2', 'ok3', 'ok4', 'ok5', 'ok6', 'ok7', 'ok8'], bad: ['bad1', 'bad2', 'bad3', 'bad4'], streak: ['streak'], boss: ['boss'],
    box: ['box'], finish: ['finish'], hello: ['hello'], level: ['level'], champion: ['champion'],
    rate: ['rate'], better: ['better'], thanks: ['thanks'],
    intro: ['intro'], back: ['back'], miss: ['miss'], missbig: ['missbig'], bye: ['bye']
  };
  const VOICE_TEXT = {
    ok1: 'رائع!', ok2: 'ممتاز!', ok3: 'أحسنت!', ok4: 'عظيم!', ok5: 'برافو عليك!', ok6: 'يا سلام عليك!', ok7: 'شاطر!', ok8: 'كده تمام!',
    bad1: 'حاول مرة تانية', bad2: 'قربت! جرّب تاني', bad3: 'ولا يهمك، جرّب تاني', bad4: 'فكّر تاني براحتك',
    streak: 'ما شاء الله! إنت نار!', boss: 'استعد للتحدي الكبير!', box: 'مفاجأة!',
    finish: 'أحسنت يا بطل! خلّصت المهمة', hello: 'أهلًا يا بطل!', level: 'مبروك! طلعت مستوى جديد', champion: 'إنت من الأبطال!',
    rate: 'استنى يا بطل! قولّي رأيك في اللعبة', better: 'ولا يهمك! قولّي نضيف إيه علشان تبقى أحلى؟', thanks: 'شكرًا يا بطل! رأيك مهم عندي',
    intro: 'أهلًا يا بطل! أنا ريشو، صاحبك في متفوّق. هنلعب ونتعلم سوا. مستعد للمغامرة؟',
    back: 'أهلًا بيك تاني يا بطل! يلا نكمل', miss: 'وحشتني يا بطل! يلا نكمّل اللي بدأناه',
    missbig: 'أخيرًا شوفتك! وحشتني أوي أوي! يلا بينا', bye: 'باي يا بطل! هستناك بكرة عشان نكمّل سوا',
    /* girls: the same phrase in the feminine (file name ends in _f). A phrase that is the same for both has no _f. */
    ok3_f: 'عاش يا بطلة!', ok5_f: 'برافو عليكي!', ok6_f: 'يا سلام عليكي!', ok7_f: 'شاطرة!',
    bad1_f: 'حاولي تاني', bad2_f: 'هانت! مرة كمان', bad3_f: 'ولا يهمّك، حاولي مرة كمان', bad4_f: 'فكّري تاني براحتك',
    streak_f: 'ما شاء الله عليكي!', finish_f: 'عاش يا بطلة! خلّصتي المهمة', hello_f: 'أهلًا يا بطلة!',
    level_f: 'مبروك! طلعتي مستوى أعلى', champion_f: 'إنتي من البطلات!',
    rate_f: 'استنّي يا بطلة! إيه رايك في اللعبة؟', better_f: 'ولا يهمّك! عايزانا نضيف إيه؟', thanks_f: 'شكرًا يا بطلة! رايك يهمّني أوي',
    intro_f: 'أهلًا يا بطلة! أنا ريشو، صاحبك في متفوّق. هنلعب ونتعلم سوا. مستعدة للمغامرة؟',
    back_f: 'أهلًا بيكي تاني يا بطلة! يلا نكمل', miss_f: 'وحشتيني يا بطلة! يلا نكمّل اللي بدأناه',
    missbig_f: 'أخيرًا شوفتك! وحشتيني أوي أوي! يلا بينا', bye_f: 'باي يا بطلة! هستناكي بكرة عشان نكمّل سوا'
  };
  const NO_ROBOT = { rate: 1, better: 1, thanks: 1, intro: 1, back: 1, miss: 1, missbig: 1, bye: 1 };   // silent until the recorded clip is uploaded
  Object.keys(VOICE_TEXT).forEach(id => { if (/_f$/.test(id)) NO_ROBOT[id] = 1; });   // a girl never hears the boy's phrase or the robot voice
  const LEAD = { finish: .45, box: .45, level: .35, boss: .7, rate: .3, thanks: .3 };   // seconds Reesho waits so the effect is heard first (default .12)
  const clipsFor = () => Object.keys(VOICE_TEXT).filter(id => (/_f$/.test(id) ? gender() === 'f' : !(gender() === 'f' && VOICE_TEXT[id + '_f'])));   // only this child's versions
  const raw = {}, decoded = {}, bufs = {}, els = {}, missing = {}, lastId = {};
  let noFetch = location.protocol === 'file:', lastVoiceAt = 0;
  function arabicVoice() {
    try { return (speechSynthesis.getVoices() || []).find(v => /^ar/i.test(v.lang)) || null; } catch (e) { return null; }
  }
  try { speechSynthesis && speechSynthesis.addEventListener && speechSynthesis.addEventListener('voiceschanged', arabicVoice); } catch (e) {}
  const robot = id => { if (!NO_ROBOT[id]) speak(VOICE_TEXT[id]); };
  function speak(text) {
    try {
      const v = arabicVoice(); if (!v || !text) return;
      speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text); u.voice = v; u.lang = v.lang; u.rate = 1.05; u.pitch = 1.5; u.volume = 1;
      speechSynthesis.speak(u);
    } catch (e) {}
  }
  function fetchClip(id) {
    if (noFetch) return Promise.resolve(null);
    return raw[id] || (raw[id] = fetch(vq(`assets/voice/${id}.mp3`)).then(
      r => { if (!r.ok) { missing[id] = true; return null; } return r.arrayBuffer(); },
      () => { noFetch = true; return null; }));               // page opened from a file, or offline: use <audio> instead
  }
  function clip(id) {
    if (bufs[id]) return Promise.resolve(bufs[id]);
    return fetchClip(id).then(data => {
      const a = audio(); if (!data || !a) return null;
      return decoded[id] || (decoded[id] = new Promise(res => {
        try { const p = a.decodeAudioData(data, b => res(bufs[id] = b), () => { missing[id] = true; res(null); }); if (p && p.catch) p.catch(() => {}); }
        catch (e) { missing[id] = true; res(null); }
      }));
    });
  }
  function playBuffer(buf, lead, asked) {
    const a = audio(); if (!a) return;
    const go = () => {
      if (isMuted() || Date.now() - asked > 1500) return;      // too late to make sense
      try { if (talking) talking.stop(); } catch (e) {}
      const s = a.createBufferSource(); s.buffer = buf; s.connect(voiceOut);
      s.onended = () => { if (talking === s) talking = null; };
      s.start(a.currentTime + lead); talking = s;
    };
    if (a.state === 'running') return go();
    try { const r = a.resume(); if (r && r.then) r.then(go, () => {}); else go(); } catch (e) {}
  }
  function playElement(id) {
    let a = els[id];
    if (!a) { a = els[id] = new Audio(vq(`assets/voice/${id}.mp3`)); a.preload = 'auto'; a.addEventListener('error', () => { missing[id] = true; }); }
    try { a.currentTime = 0; } catch (e) {}
    const p = a.play();
    if (p && p.catch) p.catch(e => { if (e && e.name === 'NotAllowedError') return; missing[id] = true; robot(id); });
  }
  function pick(kind) {                                        // never the same phrase twice in a row
    const list = VOICE[kind]; let id;
    do { id = list[Math.floor(Math.random() * list.length)]; } while (list.length > 1 && id === lastId[kind]);
    return (lastId[kind] = id);
  }
  function voice(kind) {
    if (isMuted() || !VOICE[kind]) return;
    const now = Date.now(); if (now - lastVoiceAt < 700) return; lastVoiceAt = now;   // never talk over itself
    let id = pick(kind); const lead = LEAD[kind] || .12;
    if (gender() === 'f' && VOICE_TEXT[id + '_f']) id += '_f';   // the girl's version of a gendered phrase
    if (missing[id]) return robot(id);
    if (noFetch) return playElement(id);
    audio();                                                   // unlock inside the tap
    clip(id).then(buf => {
      if (buf) return playBuffer(buf, lead, now);
      if (Date.now() - now > 1500 || isMuted()) return;
      if (missing[id]) return robot(id);
      playElement(id);
    });
  }
  /* fetch the clips while the page is idle, decode them on the first tap or key press */
  window.addEventListener('load', () => setTimeout(() => clipsFor().forEach(fetchClip), 400));
  const prime = () => { if (!isMuted() && audio()) clipsFor().forEach(clip); };
  ['pointerdown', 'keydown', 'touchstart'].forEach(ev => window.addEventListener(ev, prime, { once: true, passive: true, capture: true }));

  /* ---------- Reesho says hello and goodbye ----------
     greet(): after the child taps their name (so the voice may play). Kind from visit(): intro (first time),
     hello (same day), back (yesterday), miss (2-6 days), missbig (a week or more).
     bye(): the 👋 button. Browsers do not let a page talk when the tab is being closed, so goodbye is a button. */
  function greetText(kind, days) {
    const n = esc((player() || {}).name || ''), ar = isAr();
    const A = {
      intro: G(`أهلًا يا <b>${n}</b>! 👋 أنا <b>ريشو</b>، صاحبك في متفوّق. هنلعب ونتعلم سوا، وكل إجابة صح هتكسبك نجوم ونقط. جاهز للمغامرة؟`,
               `أهلًا يا <b>${n}</b>! 👋 أنا <b>ريشو</b>، صاحبك في متفوّق. هنلعب ونتعلم سوا، وكل إجابة صح هتكسبك نجوم ونقط. جاهزة للمغامرة؟`),
      hello: G(`أهلًا يا <b>${n}</b>! جاهز نكمل؟`, `أهلًا يا <b>${n}</b>! جاهزة نكمل؟`),
      back: G(`أهلًا بيك تاني يا <b>${n}</b>! 😊 مبسوط إنك رجعت النهارده.`, `أهلًا بيكي تاني يا <b>${n}</b>! 😊 مبسوط إنك رجعتي النهارده.`),
      miss: G(`وحشتني يا <b>${n}</b>! 🥰 بقالك ${days} أيام مجيتش. يلا نكمّل اللي بدأناه!`, `وحشتيني يا <b>${n}</b>! 🥰 بقالك ${days} أيام مجيتيش. يلا نكمّل اللي بدأناه!`),
      missbig: G(`أخيرًا رجعت يا <b>${n}</b>! 🎉 وحشتني أوي أوي، وكنت مستنيك. يلا بينا!`, `أخيرًا رجعتي يا <b>${n}</b>! 🎉 وحشتيني أوي أوي، وكنت مستنيكي. يلا بينا!`)
    };
    const E = {
      intro: `Hi <b>${n}</b>! 👋 I’m <b>Reesho</b>, your friend on Motafawek. We’ll play and learn together, and every right answer wins you stars and points. Ready for an adventure?`,
      hello: `Hi <b>${n}</b>! Ready to carry on?`,
      back: `Welcome back, <b>${n}</b>! 😊 Great to see you again today.`,
      miss: `I missed you, <b>${n}</b>! 🥰 It’s been ${days} days. Let’s pick up where we left off!`,
      missbig: `You’re back, <b>${n}</b>! 🎉 I missed you so much. Let’s go!`
    };
    return ar ? A[kind] : E[kind];
  }
  function popup(html) {
    const o = document.createElement('div'); o.className = 'overlay'; o.innerHTML = `<div class="panel" role="dialog" aria-modal="true" dir="${isAr() ? 'rtl' : 'ltr'}" style="font-family:${isAr() ? 'Cairo,Nunito' : 'Nunito,Cairo'},sans-serif">${html}</div>`;
    document.body.appendChild(o); return o;
  }
  function greet(v) {
    v = v || visit();
    const big = v.kind === 'intro' || v.kind === 'missbig';
    return new Promise(res => {
      const o = popup(`<img src="assets/parrot_${big ? 'celebrate' : 'wave'}.png" alt="" style="height:${big ? 170 : 140}px;width:auto">
        <p style="font-size:19px">${greetText(v.kind, v.days)}</p>
        <div class="acts"><button class="btn primary big" type="button">${T('Let’s go ▸', 'يلا بينا ◂')}</button></div>`);
      voice(v.kind);
      const go = () => { if (o.isConnected) { o.remove(); res(); } };
      o.querySelector('button').onclick = () => { sfx.tick(); go(); };
      o.querySelector('button').focus();
    });
  }
  function bye(home) {
    const n = esc((player() || {}).name || ''), st = dailyState().streak, ar = isAr();
    const txt = ar
      ? G(`باي يا <b>${n}</b>! 👋 النهارده اتعلمت حاجات حلوة. ارجع بكرة علشان خماسية اليوم ونكمل سوا!`, `باي يا <b>${n}</b>! 👋 النهارده اتعلمتي حاجات حلوة. ارجعي بكرة علشان خماسية اليوم ونكمل سوا!`)
        + (st ? G(` متنساش سلسلتك 🔥 ${st} يوم!`, ` متنسيش سلسلتك 🔥 ${st} يوم!`) : '')
      : `Bye, <b>${n}</b>! 👋 You learned great things today. Come back tomorrow for your Daily 5 and we’ll carry on together!` + (st ? ` Don’t lose your 🔥 ${st} day streak!` : '');
    const o = popup(`<img src="assets/parrot_wave.png" alt="" style="height:150px;width:auto"><p style="font-size:19px">${txt}</p>
      <div class="acts"><button class="btn primary" type="button" data-k="go">${T('Bye 👋', 'باي 👋')}</button><button class="btn" type="button" data-k="stay">${T('I’ll play a bit more', G('هكمّل شوية', 'هكمّل شوية'))}</button></div>`);
    o.querySelector('[data-k="stay"]').onclick = () => { sfx.tick(); o.remove(); };
    o.querySelector('[data-k="go"]').onclick = e => {
      e.currentTarget.disabled = true; voice('bye');
      setTimeout(() => { location.href = home || HOME; }, isMuted() ? 200 : 3500);   // let Reesho finish saying goodbye (about 3 s)
    };
  }

  /* ---------- Champions board: Firebase when configured, this device otherwise ---------- */
  const FB = 'https://www.gstatic.com/firebasejs/10.12.2/';
  const LB = {
    _db: undefined, _fs: null, base: FB,
    async ready() {
      if (this._db !== undefined) return this._db;
      const cfg = window.FIREBASE_CONFIG;
      if (!cfg || !cfg.projectId) return (this._db = null);
      try {
        const app = await import(FB + 'firebase-app.js'), fs = await import(FB + 'firebase-firestore.js');
        this._fs = fs; this._db = fs.getFirestore(app.initializeApp(cfg));
      } catch (e) { console.warn('Champions board is offline:', e); this._db = null; }
      return this._db;
    },
    board() { const p = player() || {}; return `${p.grade || 'g5'}-${p.track || 'lang'}-${chapterId() || 'ch1'}-${weekKey()}`; },   // one board per chapter
    localRows() {
      const b = (store.load().board || {})[this.board()] || {};
      return Object.entries(b).map(([id, v]) => Object.assign({ id }, v)).sort((a, c) => c.score - a.score);
    },
    async submit(score) {
      const p = player(); if (!p || !p.name) return { saved: false };
      score = Math.round(score);
      store.update(s => {
        s.board = s.board || {}; const k = this.board(), b = s.board[k] = s.board[k] || {};
        if (!b[p.id] || b[p.id].score < score) b[p.id] = { name: p.name, score };
      });
      const db = await this.ready(); if (!db) return { saved: true, online: false };
      const fs = this._fs, ref = fs.doc(db, 'boards', this.board(), 'scores', p.id);
      try {
        const snap = await fs.getDoc(ref);
        if (!snap.exists() || snap.data().score < score) await fs.setDoc(ref, { name: p.name, score, at: fs.serverTimestamp() });
        return { saved: true, online: true };
      } catch (e) { console.warn(e); return { saved: true, online: false }; }
    },
    async top(n = 10) {
      const db = await this.ready();
      if (db) {
        try {
          const fs = this._fs, q = fs.query(fs.collection(db, 'boards', this.board(), 'scores'), fs.orderBy('score', 'desc'), fs.limit(n));
          const ss = await fs.getDocs(q);
          return { online: true, rows: ss.docs.map(d => Object.assign({ id: d.id }, d.data())) };
        } catch (e) { console.warn(e); }
      }
      return { online: false, rows: this.localRows().slice(0, n) };
    },
    async me() {
      const p = player(); if (!p) return null;
      const db = await this.ready();
      if (db) {
        try {
          const fs = this._fs, col = fs.collection(db, 'boards', this.board(), 'scores');
          const snap = await fs.getDoc(fs.doc(col, p.id)); if (!snap.exists()) return null;
          const score = snap.data().score;
          const c = await fs.getCountFromServer(fs.query(col, fs.where('score', '>', score)));
          return { score, rank: c.data().count + 1, online: true };
        } catch (e) { console.warn(e); }
      }
      const rows = this.localRows(), i = rows.findIndex(r => r.id === p.id);
      return i < 0 ? null : { score: rows[i].score, rank: i + 1, online: false };
    }
  };

  /* ---------- progress saved online + recovery code «رمز الاستعادة» ----------
     The device save (localStorage si.v2) stays the main copy; each player is also mirrored to Firestore
     `progress/{id}`, where id = the first 32 hex letters of SHA-256("motafawek:" + code). The code
     (8 letters, shown as XXXX-XXXX) is the only key: rules allow `get` of one document, never `list`,
     so nobody can see another child's file without that child's code. The same code will open the
     parent page later (sync.fetch(code) reads a file without touching this device).
     Writes: once when a player gets a code, then once after each finished game, quest, Daily 5, review
     or exam (addXP marks the save dirty) and after a wardrobe purchase. A page opened with nothing new
     only reads, once per browser session, to pick up progress made on another device.
     Merge (local × server): numbers keep the higher value, lists are joined, dates keep the later one,
     Review cards keep the higher box, unfinished runs keep the newer one; XP adds what each side earned
     since the last sync. The current chapter/subject follow whichever side changed them last (curAt); worn items stay local.
     Any profile change marks the save to send: at once after a finished activity, otherwise on the next page
     opened or when the tab is hidden (so «Continue» on another device starts where the child stopped). */
  const CODE_ABC = '23456789ABCDEFGHJKMNPQRSTUVWXYZ';               // no 0/O, 1/I/L: easy to read aloud and copy
  const SYNC_SKIP_PAGES = /(^|\/)(admin|reviews|progress)\.html$/;
  const sync = {
    _busy: null, _t: 0,
    enabled() {
      if (window.SI_SYNC_OFF) return false;
      if (window.SI_SYNC_FORCE) return true;
      return location.protocol === 'https:' && !/^(localhost|127\.)/.test(location.hostname) && !SYNC_SKIP_PAGES.test(location.pathname);
    },
    newCode() {
      const a = new Uint32Array(8); crypto.getRandomValues(a);
      return Array.from(a, n => CODE_ABC[n % CODE_ABC.length]).join('');
    },
    /* what a child types: spaces, dashes, lowercase and Arabic digits are fine */
    clean(raw) {
      return String(raw || '').replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d)).toUpperCase().replace(/[^0-9A-Z]/g, '');
    },
    valid(code) { return code.length === 8 && [...code].every(ch => CODE_ABC.includes(ch)); },
    show(code) { return code ? code.slice(0, 4) + '-' + code.slice(4) : ''; },
    async docId(code) {
      const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode('motafawek:' + code));
      return Array.from(new Uint8Array(buf), b => b.toString(16).padStart(2, '0')).join('').slice(0, 32);
    },
    async ref(code) {
      const db = await LB.ready(); if (!db || !(window.crypto && crypto.subtle)) return null;
      return LB._fs.doc(db, 'progress', await this.docId(code));
    },
    code() { return (player() || {}).code || ''; },
    /* ---- merge ---- */
    merge(L, S, baseXp) {
      L = L || {}; S = S || {};
      const out = mergeVal(L, S, '', '');
      const lx = L.xp || 0, sx = S.xp || 0, b = baseXp == null ? Math.min(lx, sx) : baseXp;
      out.xp = Math.max(lx, sx, sx + lx - b);
      pickWhere(out, L, S);
      return out;
    },
    pack(p, profile) { return { v: 1, name: p.name, grade: p.grade || 'g5', track: p.track || 'lang', g: p.g || '', data: JSON.stringify(profile || {}) }; },
    unpack(d) { let prof = {}; try { prof = JSON.parse(d.data || '{}') || {}; } catch (e) {} return { name: d.name || '', grade: d.grade || 'g5', track: d.track || 'lang', g: d.g || '', prof }; },
    dirty() { store.update(s => { const p = (s.players || {})[s.current]; if (p) { p.dirty = 1; p.dv = (p.dv || 0) + 1; } }); this.soon(); },
    soon() { if (!this.enabled()) return; clearTimeout(this._t); this._t = setTimeout(() => this.run(), 400); },
    /* one sync of the current player: give a code if missing, read the server copy, merge, write only when something is new */
    run() {
      if (this._busy) return this._busy.then(() => this.run());
      const go = (async () => {
        const id = store.load().current, p = player();
        if (!p || !p.name || p.name === 'Admin' || !this.enabled()) return { ok: false };
        const db = await LB.ready(); if (!db || !(window.crypto && crypto.subtle)) return { ok: false };
        const fs = LB._fs, local = JSON.parse(JSON.stringify(prof())), dv0 = p.dv || 0;
        let code = p.code, merged = null, wrote = false;
        if (!code) {                                                  // first time: a new code and the whole device save
          for (let i = 0; i < 4 && !merged; i++) {
            const c = this.newCode(), r = await this.ref(c);
            await fs.runTransaction(db, async tx => {
              const snap = await tx.get(r); if (snap.exists()) return;   // taken (very unlikely): try another code
              tx.set(r, Object.assign(this.pack(p, local), { at: fs.serverTimestamp() }));
              merged = local; code = c; wrote = true;
            });
          }
          if (!merged) return { ok: false };
        } else {
          const r = await this.ref(code);
          await fs.runTransaction(db, async tx => {
            const snap = await tx.get(r);
            const server = snap.exists() ? this.unpack(snap.data()).prof : null;
            merged = server ? this.merge(local, server, p.sb) : local;
            const same = server && JSON.stringify(merged) === JSON.stringify(server) && snap.data().name === p.name && snap.data().grade === (p.grade || 'g5') && snap.data().track === (p.track || 'lang') && (snap.data().g || '') === (p.g || '');
            wrote = !same;
            if (wrote) tx.set(r, Object.assign(this.pack(p, merged), { at: fs.serverTimestamp() }));
          });
        }
        /* back into the device save; anything earned while we were away is kept */
        store.update(s => {
          const q = (s.players || {})[id]; if (!q) return;
          s.profiles = s.profiles || {};
          const now = s.profiles[id] || {}, extra = (now.xp || 0) - (local.xp || 0);
          const next = mergeVal(now, merged, '', '');
          next.xp = (merged.xp || 0) + Math.max(0, extra);
          pickWhere(next, now, merged);
          s.profiles[id] = next;
          q.code = code; q.sb = merged.xp || 0; if ((q.dv || 0) === dv0) delete q.dirty;
        });
        try { sessionStorage.setItem('si.synced.' + id, '1'); } catch (e) {}
        document.dispatchEvent(new CustomEvent('si-sync', { detail: { code, wrote } }));
        return { ok: true, code, wrote };
      })().catch(e => { console.warn('Progress sync:', e); return { ok: false }; });
      this._busy = go.finally(() => { this._busy = null; });
      return go;
    },
    /* on page open: sync when this player has no code yet, has unsent progress, or was not read in this browser session */
    auto() {
      if (!this.enabled()) return;
      const s = store.load(), p = (s.players || {})[s.current];
      if (!p || !p.name || p.name === 'Admin') return;
      let seen = false; try { seen = sessionStorage.getItem('si.synced.' + s.current) === '1'; } catch (e) {}
      if (!p.code || p.dirty || !seen) setTimeout(() => this.run(), 1200);
      document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') { const q = player(); if (q && q.code && q.dirty) this.run(); } });
    },
    /* read a file by its code without changing this device (recovery screen now, parent page later) */
    async fetch(raw) {
      const code = this.clean(raw);
      if (!this.valid(code)) return { ok: false, why: 'format' };
      const r = await this.ref(code); if (!r) return { ok: false, why: 'offline' };
      try {
        const snap = await Promise.race([LB._fs.getDoc(r), new Promise((_, no) => setTimeout(() => no(new Error('timeout')), 10000))]);
        if (!snap.exists()) return { ok: false, why: 'unknown' };
        return Object.assign({ ok: true, code }, this.unpack(snap.data()));
      } catch (e) { console.warn(e); return { ok: false, why: 'offline' }; }
    },
    /* the recovery code typed on a device: the child comes back with all progress, merged with what this device has */
    async restore(raw) {
      const f = await this.fetch(raw); if (!f.ok) return f;
      let id = Object.keys(players()).find(k => players()[k].code === f.code);
      store.update(s => {
        s.players = s.players || {}; s.profiles = s.profiles || {};
        if (!id) {                                                  // a returning child: Reesho says «welcome back», not his introduction
          const y = new Date(Date.now() - 864e5), seen = `${y.getFullYear()}-${pad(y.getMonth() + 1)}-${pad(y.getDate())}`;
          id = rid(); s.players[id] = { name: f.name, grade: f.grade, track: f.track, g: f.g, code: f.code, sb: f.prof.xp || 0, seen }; s.profiles[id] = f.prof;
        }
        else {
          const q = s.players[id];
          s.profiles[id] = this.merge(s.profiles[id] || {}, f.prof, q.sb);
          q.sb = f.prof.xp || 0; q.dirty = 1;
        }
        s.current = id;
      });
      if (players()[id].dirty) this.run();
      return Object.assign({ ok: true }, player());
    }
  };
  const SYNC_NEWER = new Set(['run', 'gameRun']);                     // unfinished runs: the newer one
  const SYNC_LOCAL = new Set(['cur', 'subj', 'worn', 'lastVar']);    // this device's choices
  const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
  /* where the child stopped (chapter + subject): the side that changed it last */
  function pickWhere(out, a, b) {
    const src = (b.curAt || 0) > (a.curAt || 0) ? b : a;
    ['cur', 'subj', 'curAt'].forEach(k => { if (src[k] !== undefined) out[k] = src[k]; });
  }
  function mergeVal(a, b, key, parent) {
    if (a === undefined) return b === undefined ? undefined : JSON.parse(JSON.stringify(b));
    if (b === undefined || b === null) return a;
    if (a === null) return SYNC_NEWER.has(key) ? null : JSON.parse(JSON.stringify(b));   // a run finished here stays finished
    if (SYNC_LOCAL.has(key)) return a;
    if (SYNC_NEWER.has(key)) return (b.at || 0) > (a.at || 0) ? b : a;
    if (key === 'daily' && typeof a === 'object') {
      const la = a.last || '', lb = b.last || '';
      return la > lb ? a : lb > la ? b : Object.assign({}, a, { streak: Math.max(a.streak || 0, b.streak || 0) });
    }
    if (parent === 'cards' && typeof a === 'object') return (b.box || 0) > (a.box || 0) ? b : a;   // Review: the higher box
    if (Array.isArray(a) && Array.isArray(b)) return Array.from(new Set(a.concat(b)));
    if (typeof a === 'number' && typeof b === 'number') return Math.max(a, b);
    if (typeof a === 'string' && typeof b === 'string') return DATE_RE.test(a) && DATE_RE.test(b) ? (a > b ? a : b) : a;
    if (typeof a === 'object' && typeof b === 'object' && !Array.isArray(a) && !Array.isArray(b)) {
      const o = {};
      new Set(Object.keys(a).concat(Object.keys(b))).forEach(k => { const v = mergeVal(a[k], b[k], k, key); if (v !== undefined) o[k] = v; });
      return o;
    }
    return a;
  }
  /* the code shown to the child: a small chip; tapping it explains what to do with it */
  const SYNC_CSS = `
.si-code{display:inline-flex;align-items:center;gap:6px;margin-top:8px;padding:6px 12px;border:0;border-radius:999px;background:#e3f1f7;color:#1f3d57;font:800 13px "Nunito","Cairo",system-ui,sans-serif;cursor:pointer;box-shadow:0 2px 6px rgba(31,61,87,.12)}
.si-code b{font-family:ui-monospace,Menlo,Consolas,monospace;letter-spacing:1px;font-size:14px;direction:ltr;unicode-bidi:isolate}
.si-code:focus-visible{outline:3px solid #f7b267;outline-offset:2px}
.si-acts{display:flex;gap:10px;justify-content:center;flex-wrap:wrap}
.si-codebig{font:900 30px ui-monospace,Menlo,Consolas,monospace;letter-spacing:3px;direction:ltr;margin:10px 0;color:#23799f;user-select:all}`;
  function codeCss() { if (!document.getElementById('siCodeCss')) { const st = document.createElement('style'); st.id = 'siCodeCss'; st.textContent = RATE_CSS + SYNC_CSS; document.head.appendChild(st); } }
  function codeChip(box) {
    if (!box) return;
    const paint = () => {
      const c = sync.code(); let b = box.querySelector('.si-code');
      if (!c) { if (b) b.remove(); return; }
      codeCss();
      if (!b) { b = document.createElement('button'); b.type = 'button'; b.className = 'si-code'; box.appendChild(b); b.onclick = () => { sfx.tick(); codeInfo(); }; }
      b.innerHTML = `🔑 ${T('Recovery code', 'رمز الاستعادة')} <b>${esc(sync.show(c))}</b>`;
      b.setAttribute('aria-label', T('Recovery code ', 'رمز الاستعادة ') + sync.show(c));
    };
    paint(); document.addEventListener('si-sync', paint);
  }
  function codeInfo() {
    codeCss();
    const c = sync.show(sync.code()), o = document.createElement('div');
    o.className = 'rt-ov'; o.setAttribute('role', 'dialog'); o.setAttribute('aria-modal', 'true');
    if (isAr()) o.dir = 'rtl';
    o.innerHTML = `<div class="rt-p"><h2 style="margin:4px 0 6px;font-size:20px">🔑 ${T('Your recovery code', G('رمز الاستعادة بتاعك', 'رمز الاستعادة بتاعك'))}</h2>
      <div class="si-codebig">${esc(c)}</div>
      <p style="margin:6px 0 14px;line-height:1.6">${T('Your progress is saved online. Ask Mum or Dad to write this code down or take a photo of it. On a new phone, or if the browser is cleared, tap «I have a recovery code» on the first page and type it to get everything back.',
        'تقدّمك محفوظ على الإنترنت. خلّي بابا أو ماما يكتبوا الرمز ده أو يصوّروه. لو غيّرت الجهاز أو اتمسح المتصفح، اضغط «عندي رمز استعادة» في الصفحة الأولى واكتبه، وكل حاجة هترجع.')}</p>
      <div class="si-acts"><button class="btn" type="button" data-k="copy">📋 ${T('Copy', 'نسخ')}</button><button class="btn primary" type="button" data-k="ok">${T('OK', 'تمام')}</button></div></div>`;
    document.body.appendChild(o);
    const close = () => o.remove();
    o.querySelector('[data-k="ok"]').onclick = close;
    o.addEventListener('click', e => { if (e.target === o) close(); });
    o.querySelector('[data-k="copy"]').onclick = e => { try { navigator.clipboard.writeText(c); e.currentTarget.textContent = '✓ ' + T('Copied', 'اتنسخ'); } catch (er) {} };
    o.querySelector('[data-k="ok"]').focus({ preventScroll: true });
  }
  sync.chip = codeChip; sync.info = codeInfo;

  /* ---------- small UI helpers ---------- */
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  ['wave', 'think', 'celebrate', 'thumbs', 'sad', 'point'].forEach(p => { const i = new Image(); i.src = `assets/parrot_${p}.png`; });

  /* ---------- visitor statistics (Google Analytics 4) ----------
     Counts page views with approximate location (city) only. No player names, no codes and no typed text are
     sent, and the data is not used for advertising. Runs on the published site only, not on local copies.
     Every hit carries the player's grade, track, subject and the number of players on the device (user properties
     and event parameters), so the owner can split the numbers by grade or subject.
     The owner's own visits are NOT counted: a device signed in on admin.html, a player named «Admin», the owner
     pages, and any device opened once with ?notrack=1 (undo with ?notrack=0) send nothing.
     Events (SI.ga): question_answer (every question: chapter, idea id, lesson, correct first try 1/0, mode),
     quiz_start / quiz_complete (+ seconds), game_start / game_complete (+ seconds, mistakes), game_mistake. */
  const GA_ID = 'G-XP595P45PX';
  const NOTRACK_KEY = 'si.notrack';
  const OWNER_PAGES = /^(admin|reviews|progress)\.html$/;
  const PAGE_NAMES = { 'math-cage.html': "Reesho’s Cage", 'math-adventure.html': "Decimal Adventure", 'math-bakery.html': "Market Bakery Packers", 'math-corniche.html': "Corniche Tilers", 'math-sinai.html': "Sinai Number Trail", 'studies-treasures.html': "Egypt’s Treasure Hunt", 'studies-civ.html': "Time Trip to Ancient Egypt", 'english-everglades.html': "Everglades Journey", 'english-resources.html': "Resource Rangers", 'english-town.html': "Town and Village Tour", 'waterlab.html': "Water Journey", 'weatherlab.html': "Weather Station", 'nursery.html': "Animal Nursery", 'english-weather.html': "Weather Watch", 'english-body.html': "Healthy Body Hero", 'english-nile.html': "Nile Explorer", 'growthpath.html': "Growth Path", 'flowerlab.html': "Flower Lab", 'growlab.html': "Growth Lab", 'bloodtrip.html': "Blood Express", 'math-climb.html': "Climb the Line", 'math-boxes.html': "Food Bank Packers", 'studies-arab.html': "Arab Homeland Explorer", 'english-senses.html': "Senses Explorer", 'studies-city.html': "City Planner", 'studies-compass.html': 'Compass Trail', 'studies-egypt.html': 'Egypt Explorer', 'math-addsub.html': "Ant Colony Count", 'math-placevalue.html': "Place Value Nest", 'index.html': 'Home', 'chapters.html': 'Chapters', 'map.html': 'Island map', 'arm.html': 'Arm Mechanic', 'seasons.html': 'Season Explorer', 'seedlab.html': 'Seed Lab', 'flame.html': 'Flame Lab', 'breath.html': 'Breath Lab', 'foodtrip.html': 'Food Journey', 'habitat.html': 'Habitat Explorer', 'butterfly.html': 'Butterfly Garden', 'garden.html': 'My Little Garden', 'atomlab.html': 'Atom Lab', 'heatlab.html': 'Heat Lab', 'math-decimals.html': 'Decimal Dock', 'forcelab.html': 'Force Lab', 'celllab.html': 'Cell Lab', 'skywatch.html': 'Sky Watch', 'wardrobe.html': 'Reesho wardrobe', 'champions.html': 'Champions', 'contact.html': 'Contact', 'reviews.html': 'Owner page',
    'quiz.html': 'Chapter Quest', 'quiz.html#quest': 'Chapter Quest', 'quiz.html#daily': 'Daily 5', 'quiz.html#review': 'Review', 'quiz.html#exam=oct': 'Exam Hall', 'quiz.html#exam=eg4oct': 'Exam Hall', 'quiz.html#exam=eg5oct': 'Exam Hall', 'quiz.html#exam=g4m1': 'Exam Hall', 'quiz.html#exam=sg4oct': 'Exam Hall', 'quiz.html#exam=sg5oct': 'Exam Hall', 'quiz.html#exam=sg6oct': 'Exam Hall', 'quiz.html#exam=mg6oct': 'Exam Hall', 'quiz.html#exam=g6oct': 'Exam Hall', 'quiz.html#exam=g6m1': 'Exam Hall', 'quiz.html#exam=p1oct': 'Exam Hall', 'quiz.html#exam=p2oct': 'Exam Hall' };
  function pageName() {
    const file = location.pathname.split('/').pop() || 'index.html';
    return PAGE_NAMES[file + location.hash] || PAGE_NAMES[file] || document.title;
  }
  function pageName() {
    const file = location.pathname.split('/').pop() || 'index.html';
    return PAGE_NAMES[file + location.hash] || PAGE_NAMES[file] || document.title;
  }
  function trackingOff() {
    try {
      if (/[?&]notrack=1\b/.test(location.search)) localStorage.setItem(NOTRACK_KEY, '1');
      if (/[?&]notrack=0\b/.test(location.search)) localStorage.removeItem(NOTRACK_KEY);
      const file = location.pathname.split('/').pop() || 'index.html';
      return localStorage.getItem(NOTRACK_KEY) === '1' || isOwner() || OWNER_PAGES.test(file) || /^admin$/i.test(((player() || {}).name || '').trim());
    } catch (e) { return false; }
  }
  /* what every hit says about the player (no name) */
  function gaContext() {
    const p = player() || {}, c = chapterById(prof().cur);
    return { grade: p.grade || 'none', track: p.track || 'none', gender: p.g || 'none', subject: p.grade ? subjectId() : 'none',
      chapter: (c && c.id) || 'none', players_on_device: String(Object.keys(players()).length) };
  }
  const GA_ON = (() => { try { return !!GA_ID && location.protocol === 'https:' && !/^(localhost|127\.)/.test(location.hostname) && !trackingOff(); } catch (e) { return false; } })();
  function ga(name, params) {
    try {
      if (!GA_ON || !window.gtag || trackingOff()) return;
      const x = gaContext();
      window.gtag('set', 'user_properties', { grade: x.grade, track: x.track, gender: x.gender, players_on_device: x.players_on_device });
      window.gtag('event', name, Object.assign(x, params || {}));
    } catch (e) {}
  }
  try {
    if (GA_ON) {
      const x = gaContext();
      window.dataLayer = window.dataLayer || [];
      window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
      window.gtag('consent', 'default', { ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied', analytics_storage: 'granted' });
      window.gtag('js', new Date());
      window.gtag('set', 'user_properties', { grade: x.grade, track: x.track, gender: x.gender, players_on_device: x.players_on_device });
      window.gtag('config', GA_ID, Object.assign({ page_title: pageName(), allow_google_signals: false, allow_ad_personalization_signals: false }, x));
      const g = document.createElement('script'); g.async = true; g.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
      document.head.appendChild(g);
    }
  } catch (e) {}

  /* ---------- "How was it?" : Reesho asks for a rating, once per chapter ----------
     Shown when the player leaves a results screen or leaves the chapter map (a browser cannot
     show a page of ours at the moment its tab is closed, so we ask at these moments instead).
     Reesho asks out loud (voice clips rate / better / thanks). The child picks one face and may add
     one line in Arabic or English. A low rating (1 or 2) always asks what to add or change: quick
     choices plus the line, and it is not sent without one of them. Skipping counts as asked.
     Answers go to Firestore `feedback/{random id}`: players can only write; the owner reads them,
     signed in, on reviews.html. An answer that could not be sent waits on the device (`fb` in the
     save) and is sent the next time a page opens. */
  const RATE_CHOICES = [
    { v: 1, face: '😕', en: 'Not fun', ar: 'مش ممتع', mood: 'sad', say: 'No worries! Tell me what to add.', sayAr: 'ولا يهمك! قولّي نضيف إيه؟' },
    { v: 2, face: '😐', en: 'It’s OK', ar: 'عادي', mood: 'think', say: 'Thanks! How can I make it better?', sayAr: 'شكرًا! أخليها أحلى إزاي؟' },
    { v: 3, face: '😊', en: 'I liked it', ar: 'أعجبني', mood: 'thumbs', say: 'Yay! Thank you!', sayAr: 'شكرًا ليك!' },
    { v: 4, face: '😍', en: 'Lovely', ar: 'جميل', mood: 'thumbs', say: 'That makes me so happy!', sayAr: 'فرّحتني أوي!' },
    { v: 5, face: '🤩', en: 'Amazing', ar: 'رائع', mood: 'celebrate', say: 'Woohoo! High five!', sayAr: 'يا سلام! كفّك!' }
  ];
  const RATE_WANTS = [                                              // quick answers to "what should Reesho add or change?"
    { k: 'games', i: '🎮', en: 'More games', ar: 'ألعاب أكتر' },
    { k: 'easier', i: '🙂', en: 'Easier questions', ar: 'أسئلة أسهل' },
    { k: 'harder', i: '💪', en: 'Harder questions', ar: 'أسئلة أصعب' },
    { k: 'time', i: '⏱️', en: 'More time', ar: 'وقت أطول' },
    { k: 'sound', i: '🔊', en: 'Better sounds', ar: 'أصوات أحلى' },
    { k: 'pictures', i: '🖼️', en: 'More pictures', ar: 'صور أكتر' }
  ];
  const RATE_LOW = 2;                                               // 1 and 2 are the low ratings
  const RATE_TEXT_MAX = 120;
  const RATE_CSS = `
.rt-ov{position:fixed;inset:0;z-index:60;display:flex;align-items:center;justify-content:center;overscroll-behavior:contain;
  padding:max(12px,env(safe-area-inset-top)) max(12px,env(safe-area-inset-right)) max(12px,env(safe-area-inset-bottom)) max(12px,env(safe-area-inset-left));
  background:rgba(31,61,87,.42);-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);animation:rt-fade .2s;
  font-family:"Nunito","Cairo",system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;color:#1f3d57}
.rt-ov *{box-sizing:border-box}
.rt-ov [hidden]{display:none!important}
.rt-p{background:#fff8ea;border-radius:28px;padding:18px 20px;width:100%;max-width:470px;max-height:100%;overflow-y:auto;-webkit-overflow-scrolling:touch;
  overscroll-behavior:contain;text-align:center;box-shadow:0 14px 40px rgba(31,61,87,.35);animation:rt-pop .28s cubic-bezier(.2,1.3,.5,1)}
.rt-ar{display:block;direction:rtl;unicode-bidi:isolate;font-family:"Cairo","Nunito",system-ui,sans-serif}
.rt-head{display:flex;align-items:flex-end;gap:10px;text-align:left}
.rt-head img{height:104px;width:auto;flex:none;transition:transform .2s}
.rt-head img.rt-hop{animation:rt-hop .45s}
.rt-bub{flex:1;min-width:0;background:#fff;border:3px solid #cfe3ee;border-radius:20px;padding:10px 14px;font-weight:800;font-size:16.5px;line-height:1.35}
.rt-bub b{font-weight:900}
.rt-bub .rt-ar{font-size:15.5px;text-align:right;color:#3a5c75}
.rt-q{margin:12px 0 8px;font-size:21px;font-weight:900;line-height:1.25}
.rt-q .rt-ar{font-size:18px;color:#3a5c75;text-align:center}
.rt-faces{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:6px}
.rt-face{display:flex;flex-direction:column;align-items:center;justify-content:flex-start;gap:2px;font:inherit;color:inherit;cursor:pointer;min-width:0;
  background:#fff;border:3px solid #cfe3ee;border-radius:16px;padding:8px 2px 7px;transition:transform .12s,border-color .12s,background .12s}
.rt-face i{font-style:normal;font-size:32px;line-height:1.15}
.rt-face span{font-size:12.5px;font-weight:900;line-height:1.2;overflow-wrap:anywhere}
.rt-face .rt-ar{font-size:13px;font-weight:800;color:#3a5c75}
.rt-face:hover{border-color:var(--primary,#23799f)}
.rt-face:focus-visible,.rt-in:focus-visible,.rt-btn:focus-visible,.rt-skip:focus-visible{outline:3px solid #f7b267;outline-offset:2px}
.rt-face[aria-pressed="true"]{border-color:var(--primary,#23799f);background:#e3f1f7;transform:translateY(-3px) scale(1.04);box-shadow:0 5px 0 var(--primary,#23799f)}
.rt-face[aria-pressed="true"] i{animation:rt-hop .45s}
.rt-lab{display:block;margin:14px 2px 5px;font-size:14.5px;font-weight:800;text-align:left;color:#3a5c75}
.rt-lab .rt-ar{text-align:right;font-size:14px}
.rt-in{display:block;width:100%;font:inherit;font-size:17px;font-weight:700;color:#1f3d57;background:#fff;border:3px solid #cfe3ee;border-radius:14px;padding:10px 14px}
.rt-in:focus{outline:none;border-color:var(--primary,#23799f)}
.rt-note{margin:5px 2px 0;font-size:12px;font-weight:700;color:#5d7a8f;text-align:left;line-height:1.3}
.rt-note .rt-ar{text-align:right}
.rt-wants{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:6px}
.rt-want{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1px;min-width:0;min-height:58px;font:inherit;color:inherit;cursor:pointer;
  background:#fff;border:3px solid #cfe3ee;border-radius:14px;padding:6px 3px;font-size:12.5px;font-weight:900;line-height:1.2;transition:border-color .12s,background .12s}
.rt-want .rt-ar{font-size:13px;font-weight:800;color:#3a5c75}
.rt-want:hover{border-color:var(--primary,#23799f)}
.rt-want:focus-visible{outline:3px solid #f7b267;outline-offset:2px}
.rt-want[aria-pressed="true"]{border-color:var(--primary,#23799f);background:#e3f1f7;box-shadow:inset 0 0 0 1px var(--primary,#23799f)}
.rt-more.rt-nudge .rt-want{animation:rt-nudge .5s}
.rt-low .rt-head img{height:70px}
.rt-low .rt-q{font-size:18px;margin:8px 0 6px}.rt-low .rt-q .rt-ar{font-size:16px}
.rt-low .rt-lab{margin-top:9px}
/* the buttons stay in view while the pop-up scrolls inside itself */
.rt-acts{display:flex;flex-direction:column;align-items:center;gap:4px;position:sticky;bottom:-18px;z-index:1;
  margin:6px -20px -18px;padding:10px 20px 18px;background:linear-gradient(rgba(255,248,234,0),#fff8ea 10px)}
.rt-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;font:inherit;font-weight:900;font-size:19px;border:0;border-radius:16px;padding:11px 30px;min-height:52px;min-width:200px;cursor:pointer;
  background:var(--primary,#23799f);color:#fff;box-shadow:0 4px 0 var(--primary-d,#1b6182);transition:transform .08s}
.rt-btn:active{transform:translateY(2px);box-shadow:0 2px 0 var(--primary-d,#1b6182)}
.rt-btn:disabled{opacity:.45;cursor:default}
.rt-skip{font:inherit;font-size:15px;font-weight:800;color:#3a5c75;background:none;border:0;padding:9px 14px;min-height:40px;cursor:pointer;text-decoration:underline}
.rt-done{display:flex;flex-direction:column;align-items:center;gap:6px;padding:8px 0 4px}
.rt-done img{height:150px;animation:rt-hop .6s}
.rt-done h2{margin:0;font-size:28px;font-weight:900}
.rt-done p{margin:0;font-size:17px;font-weight:800;color:#3a5c75}
@keyframes rt-fade{from{opacity:0}to{opacity:1}}
@keyframes rt-pop{from{opacity:0;transform:scale(.9)}to{opacity:1;transform:none}}
@keyframes rt-nudge{0%,100%{transform:none}25%{transform:translateX(-4px)}75%{transform:translateX(4px)}}
@keyframes rt-hop{0%,100%{transform:none}35%{transform:translateY(-9px) scale(1.12)}70%{transform:translateY(2px)}}
@media (max-width:520px){
  .rt-p{padding:14px 12px;border-radius:24px}
  .rt-head img{height:78px}
  .rt-bub{font-size:15px;padding:8px 11px}.rt-bub .rt-ar{font-size:14.5px}
  .rt-q{font-size:19px;margin:10px 0 7px}.rt-q .rt-ar{font-size:16.5px}
  .rt-faces{gap:4px}
  .rt-face{border-width:2px;border-radius:13px;padding:7px 1px 6px}
  .rt-face i{font-size:27px}
  .rt-face span{font-size:11px}.rt-face .rt-ar{font-size:11.5px}
  .rt-lab{margin-top:11px}
  .rt-want{border-width:2px;border-radius:12px;min-height:50px;font-size:11.5px}.rt-want .rt-ar{font-size:12px}
  .rt-low .rt-head img{height:56px}
  .rt-low .rt-q{font-size:16.5px;margin:6px 0 5px}.rt-low .rt-q .rt-ar{font-size:15px}
  .rt-low .rt-face{padding:5px 1px 4px}.rt-low .rt-face i{font-size:23px}
  .rt-acts{bottom:-14px;margin:4px -12px -14px;padding:8px 12px 14px}
  .rt-done img{height:120px}
}
@media (max-width:340px){ .rt-face span{font-size:10px}.rt-face .rt-ar{font-size:10.5px}.rt-face i{font-size:24px} }
@media (max-width:340px),(max-height:600px) and (orientation:portrait){
  .rt-p{padding:12px 10px}
  .rt-head img{height:60px}
  .rt-bub{font-size:14px;padding:6px 10px}.rt-bub .rt-ar{font-size:13.5px}
  .rt-q{font-size:16.5px;margin:8px 0 6px}.rt-q .rt-ar{font-size:15.5px}
  .rt-lab{margin:9px 2px 4px;font-size:13.5px}.rt-lab .rt-ar{font-size:13px}
  .rt-in{padding:8px 12px;font-size:16px}
  .rt-note{font-size:11px}
  .rt-want{min-height:46px;font-size:10.5px;padding:4px 2px}.rt-want .rt-ar{font-size:11px}
  .rt-acts{bottom:-12px;margin:2px -10px -12px;padding:6px 10px 12px;gap:0}
  .rt-btn{min-height:46px;padding:8px 24px;font-size:17px}
}
@media (max-height:520px) and (orientation:landscape){
  .rt-p{max-width:640px;padding:10px 16px}
  .rt-head img{height:54px}
  .rt-bub{font-size:14.5px;padding:6px 10px}.rt-bub .rt-ar{display:none}
  .rt-q{font-size:17px;margin:6px 0 5px}.rt-q .rt-ar{display:inline;font-size:16px;margin-left:8px}
  .rt-face{flex-direction:row;flex-wrap:wrap;justify-content:center;gap:0 5px;padding:4px 2px}
  .rt-face i{font-size:22px}
  .rt-lab{margin:7px 2px 3px;display:flex;justify-content:space-between;gap:10px}
  .rt-in{padding:7px 12px;font-size:16px}
  .rt-note{display:none}
  .rt-wants{grid-template-columns:repeat(6,minmax(0,1fr))}
  .rt-want{min-height:44px;font-size:11px;padding:3px 2px}.rt-want .rt-ar{font-size:11.5px}
  .rt-acts{flex-direction:row;justify-content:center;gap:10px;bottom:-10px;margin:2px -16px -10px;padding:6px 16px 10px}
  .rt-btn{min-height:44px;padding:8px 26px;font-size:17px}
  .rt-done img{height:84px}
}
@media (prefers-reduced-motion:reduce){ .rt-ov,.rt-ov *{animation:none!important;transition:none!important} }`;

  const rateText = v => String(v == null ? '' : v).replace(/\s+/g, ' ').trim().slice(0, RATE_TEXT_MAX);
  function ratePlayed(id) {
    const c = chProf(id);
    return !!((c.quest || {}).plays || (c.game || {}).plays || c.dailyLast || Object.keys(c.cards || {}).length);
  }
  /* true when this player has finished something in the chapter and has not been asked yet */
  function rateDue(id) {
    id = id || chapterId(); const p = player();
    return !!(p && p.name && chapterById(id) && !chProf(id).rate && ratePlayed(id));
  }
  let rateSending = false;
  async function rateFlush() {
    if (rateSending || !(store.load().fb || []).length) return;
    rateSending = true;
    try {
      const db = await LB.ready(); if (!db) return;                 // no online board on this page: keep waiting
      const fs = LB._fs;
      for (const it of store.load().fb || []) {
        const data = Object.assign({}, it); delete data.id; data.at = fs.serverTimestamp();
        try {
          await Promise.race([fs.setDoc(fs.doc(db, 'feedback', it.id), data), new Promise((_, no) => setTimeout(() => no(new Error('timeout')), 8000))]);
          store.update(s => { s.fb = (s.fb || []).filter(x => x.id !== it.id); });
        } catch (e) { console.warn('Feedback is waiting on this device:', (e && e.code) || e); break; }
      }
    } catch (e) { console.warn(e); } finally { rateSending = false; }
  }
  function rateSave(choice, text, from, id, wants) {
    const p = player() || {};
    updateChProf(c => { c.rate = { v: choice ? choice.v : 0, on: today() }; }, id);   // v 0 = asked and skipped
    if (!choice) return;
    store.update(s => {
      s.fb = (s.fb || []).slice(-29);                                // the document id is random, so it cannot be guessed from the Champions board
      s.fb.push({ id: rid(), rating: choice.v, label: choice.en, text: rateText(text), wants: (wants || []).join(','), chapter: id, grade: p.grade || 'g5', track: p.track || 'lang', name: p.name || '', from: from || '' });
    });
    ga('chapter_rating', { rating: choice.v, rating_label: choice.en, chapter: id });   // number only, no name and no text
    rateFlush();
  }
  let rateOpen = null;
  /* shows the rating pop-up; the promise ends when the child has sent or skipped it */
  function rateAsk(from, id) {
    if (rateOpen) return rateOpen;
    id = id || chapterId();
    const ch = chapterById(id), p = player();
    if (!ch || !p) return Promise.resolve(false);
    if (!document.getElementById('rt-css')) { const st = document.createElement('style'); st.id = 'rt-css'; st.textContent = RATE_CSS; document.head.appendChild(st); }
    return (rateOpen = new Promise(res => {
      const back = document.activeElement;
      const o = document.createElement('div'); o.className = 'rt-ov';
      o.innerHTML = `<div class="rt-p" role="dialog" aria-modal="true" aria-labelledby="rt-q">
        <div class="rt-head">
          <img id="rt-koko" src="assets/parrot_wave.png" alt="">
          <div class="rt-bub" id="rt-bub" aria-live="polite">Wait, <b>${esc(p.name)}</b>! Can I ask you something?<span class="rt-ar">استنى يا بطل! ممكن أسألك سؤال؟</span></div>
        </div>
        <h2 class="rt-q" id="rt-q">How was <b>${esc(ch.title)}</b>?<span class="rt-ar">إيه رأيك في الفصل ده؟</span></h2>
        <div class="rt-faces" role="group" aria-label="Pick one">
          ${RATE_CHOICES.map(c => `<button type="button" class="rt-face" data-v="${c.v}" aria-pressed="false"><i aria-hidden="true">${c.face}</i><span>${c.en}</span><span class="rt-ar">${c.ar}</span></button>`).join('')}
        </div>
        <div class="rt-more" id="rt-more" hidden>
          <p class="rt-lab" id="rt-wl">What should Reesho add or change?<span class="rt-ar">نضيف إيه أو نغيّر إيه؟</span></p>
          <div class="rt-wants" role="group" aria-labelledby="rt-wl">
            ${RATE_WANTS.map(w => `<button type="button" class="rt-want" data-k="${w.k}" aria-pressed="false"><span>${w.i} ${w.en}</span><span class="rt-ar">${w.ar}</span></button>`).join('')}
          </div>
        </div>
        <label class="rt-lab" for="rt-in" id="rt-lab"></label>
        <input class="rt-in" id="rt-in" type="text" dir="auto" maxlength="${RATE_TEXT_MAX}" autocomplete="off" enterkeyhint="send" placeholder="I wish… · نفسي في…">
        <p class="rt-note">Please don’t write phone numbers or addresses.<span class="rt-ar">من فضلك لا تكتب أرقام تليفونات أو عناوين</span></p>
        <div class="rt-acts">
          <button type="button" class="rt-btn" id="rt-send" disabled>Send ▸</button>
          <button type="button" class="rt-skip" id="rt-skip">Not now · مش دلوقتي</button>
        </div>
      </div>`;
      document.body.appendChild(o);
      const q = s => o.querySelector(s), faces = [...o.querySelectorAll('.rt-face')], input = q('#rt-in'), send = q('#rt-send'), koko = q('#rt-koko');
      const more = q('#rt-more'), wantBtns = [...o.querySelectorAll('.rt-want')];
      const LAB = { free: 'Tell Reesho more, in one line (if you like)<span class="rt-ar">اكتب رأيك في سطر واحد (لو تحب)</span>',
        low: 'Or write your idea in one line<span class="rt-ar">أو اكتب فكرتك في سطر واحد</span>' };
      q('#rt-lab').innerHTML = LAB.free;
      const wanted = () => wantBtns.filter(b => b.getAttribute('aria-pressed') === 'true').map(b => b.dataset.k);
      wantBtns.forEach(b => b.onclick = () => { b.setAttribute('aria-pressed', b.getAttribute('aria-pressed') !== 'true'); sfx.tick(); });
      let pick = null, closed = false;
      const close = (sent) => {
        if (closed) return; closed = true;
        document.removeEventListener('keydown', onKey, true);
        o.remove(); rateOpen = null;
        try { if (back && back.focus && document.contains(back)) back.focus({ preventScroll: true }); } catch (e) {}
        if (sent && pick && pick.v >= 3 && tgDue()) tgAsk('rating').then(() => res(sent));   // after a good rating: a light invitation to the Telegram channel
        else res(sent);
      };
      const bub = (en, ar) => { q('#rt-bub').innerHTML = `${en}<span class="rt-ar">${ar}</span>`; };
      faces.forEach(b => b.onclick = () => {
        pick = RATE_CHOICES.find(c => c.v === +b.dataset.v);
        faces.forEach(x => x.setAttribute('aria-pressed', x === b));
        send.disabled = false; sfx.tick();
        koko.src = `assets/parrot_${pick.mood}.png`; koko.classList.remove('rt-hop'); void koko.offsetWidth; koko.classList.add('rt-hop');
        bub(pick.say, pick.sayAr);
        const low = pick.v <= RATE_LOW;                              // a low rating: Reesho must ask what to add or change
        if (low && more.hidden) voice('better');
        more.hidden = !low; q('.rt-p').classList.toggle('rt-low', low); q('#rt-lab').innerHTML = low ? LAB.low : LAB.free;
        input.placeholder = low ? 'I want… · عايز…' : 'I wish… · نفسي في…';
        if (low) setTimeout(() => { try { more.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); } catch (e) {} }, 60);
      });
      const submit = () => {
        if (closed) return;
        if (!pick) { bub('First tap one of the faces!', 'اختار وش من الوشوش الأول'); koko.src = 'assets/parrot_point.png'; faces[2].focus(); return; }
        const low = pick.v <= RATE_LOW, wants = low ? wanted() : [];
        if (low && !wants.length && !rateText(input.value)) {
          bub('Pick one of these, or write your idea!', 'اختار حاجة من دول أو اكتب فكرتك'); koko.src = 'assets/parrot_point.png';
          more.classList.remove('rt-nudge'); void more.offsetWidth; more.classList.add('rt-nudge');
          try { more.scrollIntoView({ block: 'nearest' }); } catch (e) {}
          return;
        }
        rateSave(pick, input.value, from, id, wants);
        sfx.ok(); voice('thanks');
        q('.rt-p').innerHTML = `<div class="rt-done" role="status"><img src="assets/parrot_celebrate.png" alt="">
          <h2>Thank you, ${esc(p.name)}!</h2><p class="rt-ar">شكرًا يا بطل! رأيك وصل لريشو</p></div>`;
        const said = bufs.thanks ? (LEAD.thanks + bufs.thanks.duration) * 1000 + 250 : 0;   // wait for Reesho's whole "thank you" before moving on
        setTimeout(() => close(true), isMuted() ? 1500 : Math.max(1800, Math.min(said, 6000)));
      };
      send.onclick = submit;
      input.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); submit(); } });
      input.addEventListener('focus', () => setTimeout(() => { try { input.scrollIntoView({ block: 'center' }); } catch (e) {} }, 350));   // stay above the phone keyboard
      q('#rt-skip').onclick = () => { rateSave(null, '', from, id); close(false); };
      function onKey(e) {
        if (closed) return;
        if (e.key === 'Escape') { e.preventDefault(); q('#rt-skip').click(); return; }
        if (e.key !== 'Tab') return;                                 // keep the keyboard inside the pop-up
        const f = [...o.querySelectorAll('button:not(:disabled), input')]; if (!f.length) return;
        const first = f[0], last = f[f.length - 1];
        if (!o.contains(document.activeElement)) { e.preventDefault(); first.focus(); }
        else if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
      document.addEventListener('keydown', onKey, true);
      try { faces[faces.length - 1].focus({ preventScroll: true }); } catch (e) {}
      voice('rate');                                               // Reesho asks out loud (the pop-up always follows a tap, so phones allow the sound)
    }));
  }
  /* asks before the player follows one of the "leaving" links or buttons inside `root`, then lets the click go on */
  function rateGuard(root, selector, from) {
    let busy = false, asked = false;                                 // asked: at most once per page, even if the save failed
    root.addEventListener('click', e => {
      const a = e.target && e.target.closest ? e.target.closest(selector) : null;
      if (!a || busy || asked || e.ctrlKey || e.metaKey || e.shiftKey || !rateDue()) return;
      e.preventDefault(); e.stopPropagation();
      busy = true;
      rateAsk(from).then(() => { asked = true; busy = false; a.click(); });
    }, true);
  }
  window.addEventListener('load', () => setTimeout(rateFlush, 2500));

  /* ---------- the Telegram channel: a light invitation to follow what is new on the site ----------
     The players are children, so Reesho talks to the child but the invitation is for a parent ("ask Mum or Dad").
     Kept for the whole device in store.tg: seen = the last day the pop-up was shown, no = the last "not now", go = the channel button was tapped.
     The pop-up comes at most once in 7 days, not for 30 days after "not now", and never again after the button was tapped.
     It never appears during play: only after a good rating, or when a child taps a chapter that is still closed (tgSoon).
     Any link with data-tg="place" counts as tapping the channel button; the place goes to the statistics (telegram_click). */
  const TG_URL = 'https://t.me/motafawek';
  const TG_ICON = '<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path fill="currentColor" d="M21.9 4.3 18.7 19.6c-.2 1.1-.9 1.3-1.8.8l-4.9-3.6-2.4 2.3c-.3.3-.5.5-1 .5l.4-5 9.1-8.2c.4-.4-.1-.5-.6-.2L6.2 13.3l-4.8-1.5c-1-.3-1.1-1 .2-1.5L20.5 3c.9-.3 1.6.2 1.4 1.3z"/></svg>';
  const TG_CSS = `
.tg-p{max-width:430px}
.tg-p .rt-head{align-items:center}
.tg-p[dir=rtl] .rt-head{text-align:right}
.tg-p .rt-bub{font-size:17px;line-height:1.5}
.tg-go{background:#229ed9!important;box-shadow:0 4px 0 #1b7fb0!important;text-decoration:none}
.tg-go:active{box-shadow:0 2px 0 #1b7fb0!important}
.tg-note{margin:10px 2px 0;font-size:13px;font-weight:700;color:#5d7a8f;line-height:1.4}`;
  const tgState = () => store.load().tg || {};
  const tgMark = k => store.update(s => { s.tg = s.tg || {}; s.tg[k] = today(); });
  const tgEvent = (name, from) => ga(name, { from: from || '' });
  const tgJoined = () => !!tgState().go;
  function tgDue() { const t = tgState(), d = today(); return !t.go && !(t.seen && dayDiff(t.seen, d) < 7) && !(t.no && dayDiff(t.no, d) < 30); }
  document.addEventListener('click', e => {
    const a = e.target && e.target.closest ? e.target.closest('a[data-tg]') : null;
    if (a) { tgMark('go'); tgEvent('telegram_click', a.dataset.tg); }
  }, true);
  let tgOpen = null;
  /* the pop-up. o.html: Reesho's words (otherwise the usual invitation); o.asked: the child asked for it (tgSoon), so closing it is not a "not now" */
  function tgAsk(from, o) {
    if (tgOpen) return tgOpen;
    o = o || {};
    [['rt-css', RATE_CSS], ['tg-css', TG_CSS]].forEach(([id, css]) => { if (!document.getElementById(id)) { const st = document.createElement('style'); st.id = id; st.textContent = css; document.head.appendChild(st); } });
    const joined = tgJoined();
    tgMark('seen'); tgEvent('telegram_shown', from);
    return (tgOpen = new Promise(res => {
      const back = document.activeElement, ov = document.createElement('div'); ov.className = 'rt-ov';
      const words = o.html || T('Want to know when a new chapter or game arrives? Ask Mum or Dad to follow the <b>Motafawek</b> channel on Telegram.',
        G('عايز تعرف أول ما ينزل فصل جديد أو لعبة جديدة؟ خلّي بابا أو ماما يتابعوا قناة <b>متفوّق</b> على تليجرام.', 'عايزة تعرفي أول ما ينزل فصل جديد أو لعبة جديدة؟ خلّي بابا أو ماما يتابعوا قناة <b>متفوّق</b> على تليجرام.'));
      ov.innerHTML = `<div class="rt-p tg-p" role="dialog" aria-modal="true" aria-labelledby="tg-bub"${isAr() ? ' dir="rtl"' : ''}>
        <div class="rt-head"><img src="assets/parrot_point.png" alt=""><div class="rt-bub" id="tg-bub">${words}</div></div>
        ${joined ? '' : `<p class="tg-note">${T('The channel is for parents: only news about the site, no chat.', 'القناة لأولياء الأمور: أخبار الموقع فقط، بدون محادثات.')}</p>`}
        <div class="rt-acts">
          ${joined ? '' : `<a class="rt-btn tg-go" id="tg-go" href="${TG_URL}" target="_blank" rel="noopener" data-tg="${esc(from || '')}">${TG_ICON}<span>${T('Open the channel', 'افتح القناة')}</span></a>`}
          <button type="button" class="${joined ? 'rt-btn' : 'rt-skip'}" id="tg-no">${joined || o.asked ? T('OK', 'تمام') : T('Not now', 'مش دلوقتي')}</button>
        </div></div>`;
      document.body.appendChild(ov);
      let closed = false;
      const close = how => {
        if (closed) return; closed = true;
        document.removeEventListener('keydown', onKey, true);
        if (how === 'no' && !o.asked && !joined) { tgMark('no'); tgEvent('telegram_later', from); }
        ov.remove(); tgOpen = null;
        try { if (back && back.focus && document.contains(back)) back.focus({ preventScroll: true }); } catch (e) {}
        res(how === 'go');
      };
      const go = ov.querySelector('#tg-go'), no = ov.querySelector('#tg-no');
      if (go) go.addEventListener('click', () => setTimeout(() => close('go'), 0));   // the link opens in a new tab; the click is counted by the [data-tg] listener
      no.onclick = () => { sfx.tick(); close('no'); };
      function onKey(e) {
        if (closed) return;
        if (e.key === 'Escape') { e.preventDefault(); close('no'); return; }
        if (e.key !== 'Tab') return;                                 // keep the keyboard inside the pop-up
        const f = [go, no].filter(Boolean), first = f[0], last = f[f.length - 1];
        if (!ov.contains(document.activeElement)) { e.preventDefault(); first.focus(); }
        else if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
      document.addEventListener('keydown', onKey, true);
      try { (go || no).focus({ preventScroll: true }); } catch (e) {}
    }));
  }
  /* a child tapped a chapter that is not open yet: Reesho says it is coming, and where the news will be */
  function tgSoon(title) {
    const t = `<b>${esc(title || '')}</b>`;
    return tgAsk('soon', { asked: true, html: tgJoined()
      ? T(`${t} is coming soon! I will announce it on the Telegram channel.`, `${t} جاي قريب! هنعلن عنه في قناة تليجرام.`)
      : T(`${t} is coming soon! Want to know as soon as it opens? Ask Mum or Dad to follow the <b>Motafawek</b> channel on Telegram.`,
        G(`${t} جاي قريب! عايز تعرف أول ما يتفتح؟ خلّي بابا أو ماما يتابعوا قناة <b>متفوّق</b> على تليجرام.`, `${t} جاي قريب! عايزة تعرفي أول ما يتفتح؟ خلّي بابا أو ماما يتابعوا قناة <b>متفوّق</b> على تليجرام.`)) });
  }
  const tg = { URL: TG_URL, ICON: TG_ICON, due: tgDue, ask: tgAsk, soon: tgSoon, joined: tgJoined };
  const rate = { due: rateDue, ask: rateAsk, guard: rateGuard, flush: rateFlush, CHOICES: RATE_CHOICES, WANTS: RATE_WANTS };

  window.SI = { HOME, CHAPTERS_PAGE, store, players, player, addPlayer, usePlayer, requirePlayer, prof, updateProf,
    subjects, subjectById, chSubject, subjectId, subject, setSubject, subjectName, contentAr, qFile,
    grade, gradeName, chGrade, isUnits, chWord, chWords, questName, chapters, allChapters, chapterById, chapterId, chapter, setChapter, requireChapter, chProf, updateChProf, chapterStars, chReady, applyTheme, loadQuestions, loadIdeas, exams, examById, examParts, examScope, checkName, LEVELS, levelInfo, xp, addXP, GEM_XP, gems, wardrobe, buyItem, wearItem, today, dailyState, completeDaily,
    weekKey, weekEndsIn, isMuted, setMuted, sfx, voice, speak, LB, sync, rate, tg, esc, NAME: 'Reesho', isAr, T, chTitle, applyLang, isOwner, setOwner, ga,
    gender, G, setGender, visit, greet, bye, VOICE_TEXT };
  applyLang();
  sync.auto();
})();
