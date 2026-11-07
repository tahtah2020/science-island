/* «حوض متفوّق» Motafawek aquarium (owner, 7 Nov 2026), on aquarium.html.
   Every student of the «نجوم متفوّق» board (top 30) is a fish; the current player's fish is always there (local points).
   - The fish grows with points (sizeOf) and changes into another FISH with the player's level (owner: a fish never turns
     into a turtle): level 1 = small fish drawn in code in the student's own colour, 2 = blue round fish, 3 = clownfish,
     4 = angelfish, 5 = shining angelfish, 6 = golden angelfish. The leader wears a crown.
   - The turtle and the octopus live in the tank anyway (owner); castle, ship, treasure chest (opens when the weekly team goal
     of «نجوم متفوّق» is reached) and Reesho the diver sit on the sand. Pictures: owner's ChatGPT sheets cut out with PIL
     into assets/aquarium/ (bg.jpg, fish_*.webp, turtle, octopus, castle, ship, chest_closed/open, reesho_diver).
   - Tap the water = food pellets fall; nearby fish swim to them and eat them (owner's choice).
   Usage: SI_Aquarium(document.getElementById('tank'), { msg: element for the message }) */
(function () {
  'use strict';
  const A = 'assets/aquarium/';
  const TEAM_GOAL = 5000;   // same as champions.html
  const COLORS = ['#ff7a59', '#ffb627', '#4cc9f0', '#f15bb5', '#7bd389', '#9b5de5', '#00bbf9', '#fee440', '#ff006e', '#3a86ff', '#fb5607', '#06d6a0'];
  const hash = s => { let h = 0; for (const c of String(s)) h = (h * 31 + c.codePointAt(0)) | 0; return Math.abs(h); };
  /* size keeps growing with points: 0 → 30 px, 400 → 56, 1600 → 82, 2500 → 95, capped at 110 */
  const sizeOf = sc => Math.min(110, 30 + 13 * Math.sqrt(Math.max(0, sc) / 100));
  const shade = (hex, k) => { const n = parseInt(hex.slice(1), 16); const f = c => Math.max(0, Math.min(255, Math.round(c * k))); return `rgb(${f(n >> 16)},${f((n >> 8) & 255)},${f(n & 255)})`; };
  /* the fish for each level: [picture or null (drawn), aspect h/w, Arabic name, English name, extra class] */
  const KINDS = {
    1: [null, .6, 'سمكة صغيرة', 'little fish', ''],
    2: ['fish_round', .82, 'السمكة الزرقاء', 'blue fish', 'hue'],
    3: ['fish_clown', .78, 'سمكة المهرج', 'clownfish', ''],
    4: ['fish_angel', 1.09, 'سمكة الملاك', 'angelfish', 'hue'],
    5: ['fish_angel', 1.09, 'سمكة الملاك اللامعة', 'shining angelfish', 'shine'],
    6: ['fish_angel', 1.09, 'سمكة الملاك الذهبية', 'golden angelfish', 'gold']
  };
  const kindOf = sc => KINDS[Math.min(6, (SI.levelInfo ? SI.levelInfo(sc).n : 1))] || KINDS[1];

  function drawnFish(color, id) {
    const dark = shade(color, .72), light = shade(color, 1.25);
    return `<svg viewBox="-8 -34 116 68" aria-hidden="true"><defs><linearGradient id="g${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${light}"/><stop offset=".6" stop-color="${color}"/><stop offset="1" stop-color="${dark}"/></linearGradient></defs>
      <g class="tail"><path d="M18 0 L-6 -22 Q0 0 -6 22Z" fill="${dark}"/></g>
      <path d="M44 -20 Q58 -34 70 -18Z" fill="${dark}"/>
      <ellipse cx="52" cy="0" rx="42" ry="24" fill="url(#g${id})" stroke="#1f3d57" stroke-width="3"/>
      <path d="M40 -22 Q34 0 40 22" fill="none" stroke="${light}" stroke-width="5" opacity=".7"/>
      <circle cx="78" cy="-5" r="8" fill="#fff" stroke="#1f3d57" stroke-width="1.5"/><circle cx="80" cy="-5" r="4.5" fill="#1f3d57"/><circle cx="81.5" cy="-7" r="1.6" fill="#fff"/>
      <path d="M86 8 Q91 11 86 13" fill="none" stroke="#1f3d57" stroke-width="2" stroke-linecap="round"/></svg>`;
  }
  const CROWN = '<svg class="crown" viewBox="-62 -76 124 88" aria-hidden="true"><path d="M-52 6 L-58 -52 L-27 -26 L0 -66 L27 -26 L58 -52 L52 6Z" fill="#f2b134" stroke="#c98c10" stroke-width="6" stroke-linejoin="round"/><circle cx="0" cy="-68" r="9" fill="#e2603f"/></svg>';

  const CSS = `
.aq{position:relative;height:220px;border-radius:22px;overflow:hidden;border:4px solid #bfeaf7;box-shadow:0 10px 28px rgba(31,61,87,.28),inset 0 0 0 2px rgba(255,255,255,.35);
  background:#1d7fd0 url(${A}bg.jpg) center bottom/cover no-repeat;touch-action:manipulation;cursor:pointer;user-select:none;-webkit-user-select:none}
.aq .bub{position:absolute;bottom:14%;width:9px;height:9px;border-radius:50%;border:2px solid rgba(255,255,255,.75);animation:aqBub linear infinite;pointer-events:none}
@keyframes aqBub{from{transform:translateY(0);opacity:.9}to{transform:translateY(-110vh);opacity:0}}
.aq .dec{position:absolute;bottom:2%;pointer-events:none;filter:drop-shadow(0 4px 4px rgba(0,40,80,.25))}
.aq .octo{animation:aqBob 3s ease-in-out infinite}
@keyframes aqBob{0%,100%{transform:translateY(0) rotate(-2deg)}50%{transform:translateY(-8px) rotate(2deg)}}
.aq .diver{animation:aqBob 4s ease-in-out infinite}
.aq .say{position:absolute;bottom:calc(2% + var(--h));right:3%;max-width:46%;background:#fff;color:#1f3d57;border-radius:14px;padding:5px 10px;font:800 13px "Cairo","Nunito",sans-serif;box-shadow:0 3px 10px rgba(0,0,0,.2);pointer-events:none;direction:rtl;transition:opacity .4s}
.aq .say::after{content:"";position:absolute;bottom:-7px;right:24px;border:8px solid transparent;border-top-color:#fff;border-bottom:0}
.aq .turtle{position:absolute;left:0;top:0;pointer-events:none;will-change:transform}
.aq .turtle img{display:block;width:100%;transition:transform .4s}
.aq .fish{position:absolute;left:0;top:0;cursor:pointer;will-change:transform;border:0;background:none;padding:0}
.aq .fish .body{display:block;position:relative;transition:transform .3s}
.aq .fish .body img,.aq .fish .body>svg{display:block;width:100%;height:auto;overflow:visible}
.aq .fish .body.hue img{filter:hue-rotate(var(--hue))}
.aq .fish .body.shine img{filter:drop-shadow(0 0 5px #fff) drop-shadow(0 0 9px #8fe3ff)}
.aq .fish .body.gold img{filter:sepia(.55) saturate(2.2) hue-rotate(-12deg) brightness(1.08) drop-shadow(0 0 7px #ffd95a)}
.aq .fish .tail{transform-origin:18px 0;animation:aqTail .5s ease-in-out infinite alternate}
@keyframes aqTail{from{transform:scaleY(.8) rotate(-8deg)}to{transform:scaleY(1.05) rotate(8deg)}}
.aq .fish .body>svg.crown{position:absolute;width:34%;left:38%;top:-24%;height:auto}
.aq .fish.me .body{filter:drop-shadow(0 0 5px #fff) drop-shadow(0 0 10px #ffe9a0)}
.aq .fish.chomp .body{animation:aqChomp .3s}
@keyframes aqChomp{50%{scale:1.15}}
.aq .tag{position:absolute;left:50%;bottom:100%;transform:translateX(-50%);white-space:nowrap;font:900 12px "Cairo","Nunito",sans-serif;color:#1f3d57;background:#fff;border-radius:999px;padding:1px 8px;box-shadow:0 2px 6px rgba(0,0,0,.2);pointer-events:none}
.aq .fish:not(.me) .tag{opacity:0;transition:opacity .2s}
.aq .fish.show .tag{opacity:1;z-index:5}
.aq .fish:focus-visible{outline:3px solid #fff;border-radius:12px}
.aq .pel{position:absolute;left:0;top:0;width:8px;height:8px;margin:-4px 0 0 -4px;border-radius:50%;background:radial-gradient(circle at 35% 35%,#ffd08a,#c9752a);box-shadow:0 1px 2px rgba(0,0,0,.3);pointer-events:none}
.aq .pop{position:absolute;width:14px;height:14px;margin:-7px 0 0 -7px;border-radius:50%;border:2px solid #fff;pointer-events:none;animation:aqPop .5s ease-out forwards}
@keyframes aqPop{from{transform:scale(.4);opacity:1}to{transform:scale(1.8);opacity:0}}
.aq .aqTitle{position:absolute;top:8px;right:12px;font:900 15px "Cairo",sans-serif;color:#fff;text-shadow:0 2px 4px rgba(0,0,0,.35);direction:rtl;pointer-events:none}
@media (prefers-reduced-motion:reduce){.aq .bub,.aq .octo,.aq .diver,.aq .fish .tail{animation:none}}`;

  window.SI_Aquarium = async function (el, opts = {}) {
    if (!el || !window.SI) return;
    if (!document.getElementById('aq-css')) { const st = document.createElement('style'); st.id = 'aq-css'; st.textContent = CSS; document.head.appendChild(st); }
    const T = SI.T, esc = SI.esc, me = SI.player(), reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.classList.add('aq');
    el.setAttribute('aria-label', T('Aquarium: every student is a fish that grows with points. Tap the water to feed the fish.', 'حوض السمك: كل طالب سمكة بتكبر مع نقاطه. اضغط في الماء علشان تأكّل السمك.'));
    const W = () => el.clientWidth, Hh = () => el.clientHeight;
    const sand = () => Hh() * .86;                                     // where the sand starts in bg.jpg (bottom 14 %)
    const dw = (pct, min, max) => `width:clamp(${min}px,${pct}%,${max}px)`;
    el.innerHTML = `<span class="aqTitle">${T('🐠 Motafawek aquarium', '🐠 حوض متفوّق')}</span>
      <img class="dec" src="${A}castle.webp" alt="" style="left:1%;${dw(17, 62, 170)}">
      <img class="dec octo" src="${A}octopus.webp" alt="" style="left:19%;bottom:4%;${dw(11, 44, 100)}">
      <img class="dec" id="aqChest" src="${A}chest_closed.webp" alt="" style="left:41%;${dw(14, 54, 140)}">
      <img class="dec" src="${A}ship.webp" alt="" style="left:58%;${dw(18, 66, 180)}">
      <img class="dec diver" src="${A}reesho_diver.webp" alt="" style="right:1%;${dw(13, 56, 120)}">`;
    for (let i = 0; i < 8; i++) { const b = document.createElement('i'); b.className = 'bub'; b.style.cssText = `left:${6 + Math.random() * 88}%;animation-duration:${5 + Math.random() * 5}s;animation-delay:${Math.random() * 6}s;scale:${.6 + Math.random() * .8}`; el.appendChild(b); }
    /* Reesho the diver says how to feed (hidden after the first feeding) */
    const say = document.createElement('div'); say.className = 'say';
    say.textContent = T('Tap the water to feed the fish! 🍤', 'اضغط في الماء وأكّل السمك! 🍤');
    say.style.setProperty('--h', 'clamp(70px, 18%, 150px)'); el.appendChild(say);

    /* the turtle swims across now and then */
    const tu = document.createElement('div'); tu.className = 'turtle'; tu.innerHTML = `<img src="${A}turtle.webp" alt="">`; el.appendChild(tu);
    const turtle = { el: tu, img: tu.firstChild, w: Math.max(60, Math.min(110, W() * .13)), x: -120, y: 0, vx: 16, wait: 2 };
    tu.style.width = turtle.w + 'px';

    /* students: the board's top 30 + me (my fish always, from my own points) */
    let rows = [], myId = null;
    try { myId = me ? await SI.LB.myId() : null; } catch (e) {}
    try { rows = ((await SI.LB.top(30)).rows || []).filter(r => r && r.name); } catch (e) {}
    const myXP = me ? Math.round((SI.xp && SI.xp()) || 0) : 0;
    if (me && myId && !rows.some(r => r.id === myId)) rows.push({ id: myId, name: me.name, score: myXP });
    rows.forEach(r => { if (r.id === myId) r.score = Math.max(r.score || 0, myXP); });
    const topScore = rows.reduce((m, r) => Math.max(m, r.score || 0), 0);

    const fishes = rows.map((r, i) => {
      const isMe = !!myId && r.id === myId, score = r.score || 0, size = sizeOf(score) * Math.max(.62, Math.min(1, W() / 800)), k = kindOf(score);   // smaller fish in a phone-sized tank
      const h = hash(r.id || r.name), color = COLORS[h % COLORS.length];
      const b = document.createElement('button'); b.type = 'button'; b.className = 'fish' + (isMe ? ' me' : '');
      b.style.width = size + 'px';
      b.setAttribute('aria-label', `${r.name}: ${score} · ${T(k[3], k[2])}`);
      const pic = k[0] ? `<img src="${A}${k[0]}.webp" alt="" draggable="false">` : drawnFish(color, i);
      b.innerHTML = `<span class="body ${k[4]}" style="--hue:${(h % 7) * 50}deg">${pic}${score && score === topScore ? CROWN : ''}</span><span class="tag">${isMe ? T('Your fish', 'سمكتك') + ' · ' : ''}${esc(r.name)} · ${score}</span>`;
      b.onclick = e => { e.stopPropagation(); b.classList.add('show'); clearTimeout(b._t); b._t = setTimeout(() => b.classList.remove('show'), 2500); };
      b.onpointerdown = e => e.stopPropagation();
      el.appendChild(b);
      const speed = (isMe ? 34 : 18 + Math.random() * 22) * (1.25 - size / 160);
      return { b, body: b.querySelector('.body'), tag: b.querySelector('.tag'), size, hgt: size * k[1], speed,
        x: Math.random() * Math.max(10, W() - size), y: 30 + Math.random() * Math.max(10, sand() - 70 - size * k[1]), vx: (Math.random() < .5 ? -1 : 1) * speed, ph: Math.random() * 6, ty: 0 };
    });

    /* the message under the tank: points, and how far to the next fish */
    if (opts.msg) {
      if (!me) opts.msg.innerHTML = T('🐟 Every student has a fish that grows with points. Sign in and get yours!', '🐟 كل طالب له سمكة بتكبر مع نقاطه. سجّل اسمك وخد سمكتك!');
      else {
        const li = SI.levelInfo(myXP), nx = li.to ? KINDS[Math.min(6, li.n + 1)] : null;
        opts.msg.innerHTML = T(`🐟 Your fish has <b>${myXP}</b> points.`, `🐟 سمكتك عندها <b>${myXP}</b> نقطة.`) + ' '
          + (nx ? T(`${li.to - myXP} more points and it becomes a <b>${nx[3]}</b>!`, SI.G(`باقي <b>${li.to - myXP}</b> نقطة وتتحول لـ<b>${nx[2]}</b>! العب أكتر.`, `باقي <b>${li.to - myXP}</b> نقطة وتتحول لـ<b>${nx[2]}</b>! العبي أكتر.`))
                : T('It is the golden angelfish: play more and it keeps growing!', SI.G('دي سمكة الملاك الذهبية: العب أكتر وهتفضل تكبر!', 'دي سمكة الملاك الذهبية: العبي أكتر وهتفضل تكبر!')));
      }
    }
    /* the treasure chest opens when everybody together reached this week's team goal */
    SI.LB.weekTotal && SI.LB.weekTotal().then(t => { if (t !== null && t >= TEAM_GOAL) el.querySelector('#aqChest').src = A + 'chest_open.webp'; }).catch(() => {});

    /* drawing: only the body turns, the name tag stays readable and inside the glass */
    const draw = f => {
      f.b.style.transform = `translate(${f.x}px,${f.y + Math.sin(f.ph) * 5}px)`;
      const d = f.vx < 0 ? -1 : 1; if (f.d !== d) { f.d = d; f.body.style.transform = `scaleX(${d})`; }
      const edge = f.x + f.size / 2 > W() - 90 ? 'r' : f.x + f.size / 2 < 90 ? 'l' : '';
      if (f.edge !== edge) { f.edge = edge; f.tag.style.cssText = edge === 'r' ? 'left:auto;right:0;transform:none' : edge === 'l' ? 'left:0;transform:none' : ''; }
    };
    fishes.forEach(draw);
    if (reduce) { say.hidden = true; return; }

    /* food: a tap in the water drops a few pellets; they sink to the sand and fade there */
    const pels = [];
    el.addEventListener('pointerdown', e => {
      const r = el.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top;
      if (y > sand() + 10) return;
      say.style.opacity = '0';
      for (let i = 0; i < 4 && pels.length < 40; i++) {
        const p = { x: x + (Math.random() - .5) * 26, y: y + (Math.random() - .5) * 14, vy: 20 + Math.random() * 14, ph: Math.random() * 6, rest: 0, el: document.createElement('i') };
        p.el.className = 'pel'; el.appendChild(p.el); pels.push(p);
      }
      if (SI.sfx && SI.sfx.tick) try { SI.sfx.tick(); } catch (err) {}
    });
    const eat = (f, i) => {
      const p = pels[i]; pels.splice(i, 1); p.el.remove();
      const pop = document.createElement('i'); pop.className = 'pop'; pop.style.left = p.x + 'px'; pop.style.top = p.y + 'px'; el.appendChild(pop); setTimeout(() => pop.remove(), 520);
      f.b.classList.remove('chomp'); void f.b.offsetWidth; f.b.classList.add('chomp');
    };

    let last = performance.now(), on = true, raf = 0;
    const step = t => {
      const dt = Math.min(.05, (t - last) / 1000); last = t;
      const w = W(), sd = sand();
      /* pellets */
      for (let i = pels.length - 1; i >= 0; i--) {
        const p = pels[i];
        if (p.y < sd - 4) { p.y += p.vy * dt; p.ph += dt * 3; p.x += Math.sin(p.ph) * dt * 10; }
        else if ((p.rest += dt) > 6) { p.el.remove(); pels.splice(i, 1); continue; }
        p.el.style.transform = `translate(${p.x}px,${p.y}px)`; p.el.style.opacity = p.rest > 4 ? String(1 - (p.rest - 4) / 2) : '';
      }
      /* fish: chase the nearest pellet within reach, otherwise drift */
      fishes.forEach(f => {
        f.ph += dt * 2;
        const cx = f.x + f.size / 2, cy = f.y + f.hgt / 2;
        let best = -1, bd = 1e9;
        pels.forEach((p, i) => { const d = Math.hypot(p.x - cx, p.y - cy); if (d < bd) { bd = d; best = i; } });
        if (best >= 0 && bd < Math.max(260, w * .45)) {
          const p = pels[best], sp = f.speed * 2.2 + 28, dx = p.x - cx, dy = p.y - cy, n = Math.hypot(dx, dy) || 1;
          f.vx = (dx / n) * sp || f.vx; f.x += f.vx * dt; f.y += (dy / n) * sp * dt; f.ty = 0;
          if (n < Math.max(14, f.size * .4)) eat(f, best);
        } else {
          if (Math.abs(f.vx) > f.speed * 1.05) f.vx = Math.sign(f.vx) * f.speed;   // calm down after a meal
          f.x += f.vx * dt;
          if (Math.random() < dt * .15) f.ty = 30 + Math.random() * Math.max(10, sd - 70 - f.hgt);
          if (f.ty) f.y += (f.ty - f.y) * dt * .6;
          if (Math.random() < dt * .05) f.vx = -f.vx;
        }
        if (f.x < 0) { f.x = 0; f.vx = Math.abs(f.vx) || f.speed; } else if (f.x > w - f.size) { f.x = w - f.size; f.vx = -Math.abs(f.vx) || -f.speed; }
        f.y = Math.max(24, Math.min(sd - f.hgt * .7, f.y));
        draw(f);
      });
      /* the turtle: crosses the tank slowly, rests off screen, comes back the other way */
      if (turtle.wait > 0) { turtle.wait -= dt; if (turtle.wait <= 0) { turtle.y = sd * (.45 + Math.random() * .3); turtle.x = turtle.vx > 0 ? -turtle.w : w; } }
      else {
        turtle.x += turtle.vx * dt;
        if (turtle.x > w + 10 || turtle.x < -turtle.w - 10) { turtle.vx = -turtle.vx; turtle.wait = 6 + Math.random() * 8; }
        tu.style.transform = `translate(${turtle.x}px,${turtle.y + Math.sin(t / 900) * 6}px)`;
        turtle.img.style.transform = `scaleX(${turtle.vx > 0 ? 1 : -1})`;
      }
      if (on) raf = requestAnimationFrame(step);
    };
    tu.style.transform = 'translate(-200px,0)';
    raf = requestAnimationFrame(step);
    /* stop when the tank is off screen or the tab is hidden */
    const go = v => { if (v && !on) { on = true; last = performance.now(); raf = requestAnimationFrame(step); } else if (!v) { on = false; cancelAnimationFrame(raf); } };
    if ('IntersectionObserver' in window) new IntersectionObserver(es => go(es[0].isIntersecting)).observe(el);
    document.addEventListener('visibilitychange', () => go(document.visibilityState === 'visible'));
  };
})();
