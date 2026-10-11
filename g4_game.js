/* Science Island · Grade 4 · the game kit shared by habitat.html (Chapter 1), butterfly.html (Chapter 2) and garden.html (Chapter 3).
   It builds the page (top bar, scene, Reesho and his speech bubble), and gives every game the same tools:
     say · next · choice · spot · pick · speedRound · banner · tween · addScore · results.
   choice, spot and pick take reveal(): it is called as soon as the answer is known, to change the scene.
   Each game page only holds its own scene (drawn with g4_art.js) and its three stages: Warm Up, Missions, Speed Round.
   Needs common.js (window.SI) and g4_game.css. Usage:
     const g = G4Game({ ch: 'g4c1', logo: '🦊', title: ['Habitat Explorer', 'مستكشف المَواطن'], sub: ['Chapter 1 · …', 'الفصل ١ · …'],
                        bg: 'assets/bg_g4c1.svg', bgc: '#f6e7c4', label: ['…', '…'], render: () => '<svg markup>' });
     g.run({ intro: '…', stages: [{ name: T('Warm Up', 'التسخين'), fn: stage1 }, …], done: { title: '…', text: '…' } });
   For automated tests: the right choice button, the right tap spot and the right pick button carry data-right;
   window.__g4 = { score, mistakes, results }. page.html#stage2 or #stage3 jumps straight to that stage. */
(function () {
  'use strict';
  window.G4Game = function (cfg) {
    const SI = window.SI, T = SI.T, G = SI.G;
    const $ = (s, r = document) => r.querySelector(s);
    const sleep = ms => new Promise(r => setTimeout(r, ms));
    const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const mk = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
    const btn = (text, cls = '') => { const b = mk('button', 'btn ' + cls, text); b.type = 'button'; return b; };
    const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
    const kw = s => `<b class="kw">${s}</b>`;
    const title = T(cfg.title[0], cfg.title[1]), sub = T(cfg.sub[0], cfg.sub[1]);
    const VW = (cfg.view || [420, 280])[0], VH = (cfg.view || [420, 280])[1];

    /* ---------- the page ---------- */
    document.title = `${title} · ${sub}`;
    document.documentElement.style.setProperty('--bg', cfg.bg ? `url(${cfg.bg})` : 'none');
    if (cfg.bgc) document.documentElement.style.setProperty('--bgc', cfg.bgc);
    const app = mk('div', 'app', `
      <header class="top">
        <div class="brand"><div class="logo" aria-hidden="true">${cfg.logo}</div><div><h1>${title}</h1><p>${sub}</p></div></div>
        <div class="hud">
          <div class="pill" id="stagePill"></div>
          <div class="pill" id="scorePill">${T('Score', 'النقاط')} <b id="score">0</b></div>
          <button class="icon" id="mute" type="button" aria-pressed="false" title="${T('Sound on/off', 'الصوت')}">♪</button>
          <a class="icon" href="map.html" aria-label="${T('Back to the map', 'رجوع للخريطة')}" title="${T('Back to the map', 'رجوع للخريطة')}">⌂</a>
        </div>
      </header>
      <main class="grid">
        <section class="card stageCard" id="stageCard">
          <div class="sceneBox">
            <svg id="scene" viewBox="0 0 ${VW} ${VH}" role="img" aria-label="${T(cfg.label[0], cfg.label[1])}"><g id="gMain"></g><g id="gSpots"></g></svg>
            <div class="veil" id="veil" hidden><div class="veilCard" id="veilCard"></div></div>
          </div>
          <div class="tray" id="tray" hidden></div>
        </section>
        <aside class="card coach">
          <div class="coachRow"><img id="robot" src="assets/parrot_wave.png" alt="${T('Reesho the parrot', 'البغبغان ريشو')}"><div class="bubble" id="bubble" aria-live="polite"></div></div>
          <div class="actions" id="actions"></div>
          <div class="timer" id="timer" hidden><i></i></div>
        </aside>
      </main>`);
    document.body.appendChild(app);
    const gMain = $('#gMain'), gSpots = $('#gSpots'), robot = $('#robot'), bubble = $('#bubble'), actions = $('#actions'), tray = $('#tray');

    /* ---------- drawing ---------- */
    const paint = () => { gMain.innerHTML = cfg.render(); };
    /* change the scene little by little: fn(k) gets k from 0 to 1, then the scene is drawn again */
    function tween(ms, fn) {
      return new Promise(res => {
        if (reduceMotion || ms <= 0) { fn(1); paint(); return res(); }
        const t0 = performance.now();
        const step = now => { const k = Math.min(1, (now - t0) / ms); fn(k * k * (3 - 2 * k)); paint(); if (k < 1) requestAnimationFrame(step); else res(); };
        requestAnimationFrame(step);
      });
    }

    /* ---------- sound ---------- */
    const sfx = { ok() { SI.sfx.ok(); SI.voice('ok'); }, bad() { SI.sfx.bad(); SI.voice('bad'); }, win() { SI.sfx.win(); }, tick() { SI.sfx.tick(); } };
    const muteBtn = $('#mute');
    const paintMute = () => { const m = SI.isMuted(); muteBtn.setAttribute('aria-pressed', m); muteBtn.setAttribute('aria-label', m ? T('Sound off', 'الصوت مغلق') : T('Sound on', 'الصوت شغال')); };
    muteBtn.onclick = () => { SI.setMuted(!SI.isMuted()); paintMute(); };
    paintMute();

    /* ---------- Reesho ---------- */
    function pose(name) { robot.src = `assets/parrot_${name}.png`; robot.classList.remove('hop'); void robot.offsetWidth; robot.classList.add('hop'); }
    function say(html, p) { bubble.innerHTML = html; if (p) pose(p); }

    /* ---------- score ---------- */
    let score = 0, mistakes = 0;
    function addScore(n) {
      if (!n) return;
      score += n; $('#score').textContent = score;
      const p = $('#scorePill'); p.classList.remove('pop'); void p.offsetWidth; p.classList.add('pop');
      const f = mk('span', 'float', '+' + n); p.appendChild(f); setTimeout(() => f.remove(), 1000);
    }
    const miss = () => { mistakes++; };
    function setStage(n, name) { $('#stagePill').innerHTML = T(`Stage ${n}<span class="long"> of 3 · ${name}</span>`, `المرحلة ${n}<span class="long"> من ٣ · ${name}</span>`); }
    function confetti(n = 32) {
      if (reduceMotion) return;
      const colors = ['#f08a6c', '#8fd3ee', '#9fdcc4', '#f7d58a', '#c7a7e0'];
      for (let i = 0; i < n; i++) {
        const c = mk('i', 'confetti'); c.style.left = Math.random() * 100 + 'vw'; c.style.background = colors[i % colors.length];
        c.style.animationDelay = Math.random() * .4 + 's'; c.style.setProperty('--dx', (Math.random() * 140 - 70) + 'px');
        document.body.appendChild(c); setTimeout(() => c.remove(), 2800);
      }
    }
    async function banner(a, b) {
      const e = mk('div', 'banner', `<div><small>${a}</small><strong>${b}</strong></div>`);
      document.body.appendChild(e); await sleep(reduceMotion ? 900 : 1500); e.classList.add('out'); await sleep(320); e.remove();
    }

    /* ---------- one big button: go on, or do the next thing ---------- */
    function next(label = T('Next ▸', 'التالي ◂')) {
      return new Promise(res => {
        actions.innerHTML = '';
        const b = btn(label, 'primary'); b.dataset.next = '1';
        b.onclick = () => { actions.innerHTML = ''; sfx.tick(); res(); };
        actions.appendChild(b); b.focus({ preventScroll: true });
      });
    }

    /* ---------- a question with choices, beside Reesho. Two tries, then the answer is shown ---------- */
    function choice({ options, correct, hint, ok, points = 20, mix = true, reveal }) {
      return new Promise(res => {
        actions.innerHTML = '';
        const wrap = mk('div', 'choices'); let tries = 0, done = false;
        const list = options.map(o => ({ o, right: o === correct }));
        const bs = (mix ? shuffle(list) : list).map(({ o, right }) => {
          const b = btn(o, 'choice');
          if (right) b.dataset.right = '1';
          b.onclick = () => {
            if (done) return;
            tries++;
            if (right) { done = true; b.classList.add('good'); sfx.ok(); addScore(tries === 1 ? points : 5); say(ok, 'thumbs'); finish(tries === 1); }
            else {
              b.classList.add('bad'); b.disabled = true; sfx.bad(); mistakes++;
              if (tries >= 2 || options.length <= 2) { done = true; bs.forEach(x => { if (x.dataset.right) x.classList.add('good'); }); say(T(`The answer is <b>${correct}</b>. ${ok}`, `الإجابة هي <b>${correct}</b>. ${ok}`), 'think'); finish(false); }
              else say(hint, 'sad');
            }
          };
          wrap.appendChild(b); return b;
        });
        actions.appendChild(wrap);
        function finish(first) { bs.forEach(b => { b.disabled = true; }); if (reveal) reveal(first); setTimeout(() => next().then(() => res(first)), 450); }
      });
    }

    /* ---------- tap a place on the scene. spots: [{ id, name, ring }] ; ring = SVG with class "ring" ---------- */
    function spot(spots, correct, { ok, hint, points = 20, reveal }) {
      return new Promise(res => {
        let tries = 0, done = false;
        gSpots.innerHTML = spots.map(s => `<g class="hot" data-id="${s.id}"${s.id === correct ? ' data-right="1"' : ''} role="button" tabindex="0" aria-label="${s.name}">${s.ring}</g>`).join('');
        const hots = [...gSpots.querySelectorAll('.hot')];
        const finish = good => {
          hots.forEach(h => { h.setAttribute('tabindex', '-1'); if (h.dataset.id === correct) h.classList.add('good'); });
          if (reveal) reveal(good);
          if (good) { addScore(tries === 1 ? points : 5); sfx.ok(); confetti(14); say(ok, 'celebrate'); }
          else { sfx.bad(); say(T(`Look at the green ring. ${ok}`, G(`بص على الدايرة الخضراء. ${ok}`, `بصي على الدايرة الخضراء. ${ok}`)), 'think'); }
          next().then(() => { gSpots.innerHTML = ''; res(good && tries === 1); });
        };
        const tap = h => {
          if (done || h.classList.contains('bad')) return;
          tries++;
          if (h.dataset.id === correct) { done = true; finish(true); }
          else { mistakes++; h.classList.add('bad'); sfx.bad(); if (tries >= 2 || spots.length <= 2) { done = true; finish(false); } else say(hint, 'sad'); }
        };
        hots.forEach(h => {
          h.addEventListener('click', () => tap(h));
          h.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); tap(h); } });
        });
      });
    }

    /* ---------- the tray: big buttons under the scene ---------- */
    function setTray(buttons, correct) {
      tray.innerHTML = ''; tray.hidden = !buttons; $('#stageCard').classList.toggle('trayOn', !!buttons);
      if (!buttons) return [];
      tray.className = 'tray n' + buttons.length;
      return buttons.map((x, i) => { const b = btn(x.label, 'pick c' + (x.c == null ? i : x.c)); b.dataset.v = x.value; if (x.value === correct) b.dataset.right = '1'; tray.appendChild(b); return b; });
    }
    /* sort one thing: press its button. One try; the right button is then shown */
    function pick({ buttons, correct, ok, no, points = 10, reveal }) {
      return new Promise(res => {
        const bs = setTray(buttons, correct); let done = false;
        actions.innerHTML = '';
        bs.forEach(b => { b.onclick = async () => {
          if (done) return; done = true;
          const right = b.dataset.v === String(correct);
          bs.forEach(x => { x.disabled = true; if (x.dataset.right) x.classList.add('good'); });
          if (reveal) reveal(right);
          if (right) { sfx.ok(); addScore(points); say(ok, 'thumbs'); await sleep(reduceMotion ? 700 : 1500); }
          else { b.classList.add('bad'); sfx.bad(); mistakes++; say(no || ok, 'think'); await next(); }
          res(right);
        }; });
      });
    }
    function timedPick(buttons, correct, ms) {
      return new Promise(res => {
        const timer = $('#timer'), bar = timer.firstElementChild; timer.hidden = false; bar.style.width = '100%'; bar.classList.remove('low');
        const bs = setTray(buttons, correct), t0 = performance.now(); let done = false;
        const left = () => Math.max(0, 1 - (performance.now() - t0) / ms);
        const end = (b, timeout) => {
          if (done) return; done = true; clearInterval(iv); timer.hidden = true;
          const right = !!b && b.dataset.v === String(correct);
          bs.forEach(x => { x.disabled = true; if (x.dataset.right) x.classList.add('good'); });
          if (b && !right) b.classList.add('bad');
          res({ right, timeout, left: timeout ? 0 : left() });
        };
        const iv = setInterval(() => { const l = left(); bar.style.width = (l * 100) + '%'; bar.classList.toggle('low', l < .3); if (l <= 0) end(null, true); }, 50);
        bs.forEach(b => { b.onclick = () => end(b, false); });
      });
    }
    function veil(html) { const v = $('#veil'); if (html == null) { v.hidden = true; return; } $('#veilCard').innerHTML = html; v.hidden = false; }

    /* ---------- Stage 3: the Speed Round. items: [{ t, ans, why, pic }] ; buttons: [{ label, value }] ---------- */
    async function speedRound({ items, buttons, rounds = 8, ask, intro, think, ms = 12000, show, reveal }) {
      setTray(buttons, null).forEach(b => { b.disabled = true; });
      say(intro, 'point');
      await next(T('Go! ▸', 'يلّا! ◂'));
      const list = shuffle(items).slice(0, rounds); let streak = 0;
      for (let i = 0; i < list.length; i++) {
        const it = list[i];
        if (show) show(it);
        veil(`<small>${T(`Round ${i + 1} of ${list.length}`, `الجولة ${i + 1} من ${list.length}`)}</small>${it.pic ? `<svg viewBox="${it.box || '0 0 120 90'}" aria-hidden="true">${it.pic}</svg>` : ''}<strong>${it.t}</strong><span>${ask}</span>`);
        say(think, 'think');
        const r = await timedPick(buttons, it.ans, ms);
        veil(null);
        if (reveal) reveal(it);
        const name = (buttons.find(b => b.value === it.ans) || {}).label || '';
        const verdict = `<b>${it.t}</b>: ${kw(name)}. ${it.why || ''}`;
        if (r.right) {
          streak++; addScore(10 + Math.round(r.left * 10) + (streak >= 3 ? 5 : 0)); sfx.ok();
          say(T(`Correct! ${streak >= 3 ? `<b class="kw">Streak ×${streak}</b> ` : ''}${verdict}`, `صح! ${streak >= 3 ? `<b class="kw">سلسلة ×${streak}</b> ` : ''}${verdict}`), 'thumbs');
        } else {
          streak = 0; mistakes++; sfx.bad();
          say(T(`${r.timeout ? 'Time’s up!' : 'Not quite.'} ${verdict}`, `${r.timeout ? 'الوقت خلص!' : G('قرّبت!', 'قرّبتي!')} ${verdict}`), 'sad');
        }
        await sleep(reduceMotion ? 1200 : 2500);
      }
      setTray(null);
    }

    /* ---------- start and finish ---------- */
    const store = { load() { return Object.assign({}, SI.chProf(cfg.ch).game || {}); }, save(o) { SI.updateChProf(c => { c.game = o; }, cfg.ch); } };
    function intro(text) {
      return new Promise(res => {
        const s = store.load(), o = mk('div', 'overlay');
        o.innerHTML = `<div class="panel">
          <img class="hero" src="assets/parrot_wave.png" alt="">
          <h2>${title}</h2>
          <p>${text}</p>
          ${s.best ? `<div class="stats"><span>${T('Best score', 'أعلى نتيجة')}: ${s.best}</span><span>${T('Stars', 'النجوم')}: ${'★'.repeat(s.stars || 0)}${'☆'.repeat(3 - (s.stars || 0))}</span></div>` : ''}
          <div class="acts"><button class="btn primary big" id="start" type="button">${T('Start', G('ابدأ', 'ابدئي'))}</button></div>
        </div>`;
        document.body.appendChild(o);
        const b = $('#start', o); b.focus();
        b.onclick = () => { sfx.tick(); o.remove(); res(); };
      });
    }
    function results(done) {
      const stars = mistakes <= 1 ? 3 : mistakes <= 4 ? 2 : 1, prev = store.load(), best = Math.max(prev.best || 0, score);
      store.save(Object.assign({}, prev, { best, stars: Math.max(prev.stars || 0, stars), plays: (prev.plays || 0) + 1 }));
      const gain = SI.addXP(score);
      sfx.win(); SI.voice('finish'); confetti(60);
      const o = mk('div', 'overlay');
      o.innerHTML = `<div class="panel" id="resultsPanel">
        <img class="hero" src="assets/parrot_celebrate.png" alt="">
        <h2>${done.title}</h2>
        <div class="stars" aria-label="${T(`${stars} of 3 stars`, `${stars} من ٣ نجوم`)}">${'★'.repeat(stars)}<span class="off">${'★'.repeat(3 - stars)}</span></div>
        <div class="stats"><span>${T('Score', 'النقاط')}: ${score}</span><span>${T('Best', 'أعلى نتيجة')}: ${best}</span><span>+${gain.gained} XP · ${T('Level', 'المستوى')} ${gain.after.n}</span></div>
        <p>${done.text}</p>
        <div class="acts">
          <a class="btn primary" href="quiz.html#quest">${T('Chapter Quest ▸', 'تحدي الفصل ◂')}</a>
          <a class="btn" href="map.html">${T('Map', 'الخريطة')}</a>
          <button class="btn" id="again" type="button">${T('Play again', G('العب تاني', 'العبي تاني'))}</button>
        </div>
      </div>`;
      document.body.appendChild(o);
      SI.rate.guard(o, 'a[href="map.html"]', 'results');   // Reesho asks for a rating before the player leaves (once per chapter)
      $('#again', o).onclick = () => location.reload();
    }
    async function run({ intro: introText, stages, done }) {
      if (!SI.requirePlayer() || !SI.requireChapter(cfg.ch)) return;   // every game belongs to one chapter
      SI.applyTheme();
      paint(); setStage(1, stages[0].name);
      say(T('Hi! I’m Reesho the parrot.', 'أهلًا! أنا ريشو البغبغان.'), 'wave');
      const jump = +((/^#stage([23])$/.exec(location.hash) || [])[1] || 1);
      await intro(introText);
      for (let i = 0; i < stages.length; i++) {
        if (i + 1 < jump) continue;
        setStage(i + 1, stages[i].name);
        if (i > 0) await banner(T(`Stage ${i + 1}`, `المرحلة ${i + 1}`), stages[i].name);
        setTray(null); veil(null); gSpots.innerHTML = '';
        await stages[i].fn();
      }
      setTray(null);
      results(done);
    }

    const g = { T, G, kw, sleep, shuffle, paint, tween, say, pose, next, choice, spot, pick, timedPick, speedRound, veil, setTray, banner, confetti, addScore, miss, run, sfx, reduceMotion,
      name: () => SI.esc(SI.player().name), view: [VW, VH] };
    window.__g4 = { g, results, get score() { return score; }, get mistakes() { return mistakes; } };
    return g;
  };
})();
