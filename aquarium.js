/* «حوض ريشو» Motafawek aquarium (owner, 7 Nov 2026): every student is a fish of his own colour, swimming in the tank;
   the fish grows with the student's total points (the «نجوم متفوّق» board, top 30), the current player's fish is marked
   «سمكتك» and is always there (from the device's points even before the board answers). Everything is drawn in code.
   Usage: SI_Aquarium(document.getElementById('tank'), { msg: element for the message }) */
(function () {
  'use strict';
  const NS = 'http://www.w3.org/2000/svg';
  const COLORS = ['#ff7a59', '#ffb627', '#4cc9f0', '#f15bb5', '#7bd389', '#9b5de5', '#00bbf9', '#fee440', '#ff006e', '#3a86ff', '#fb5607', '#06d6a0'];
  const hash = s => { let h = 0; for (const c of String(s)) h = (h * 31 + c.codePointAt(0)) | 0; return Math.abs(h); };
  /* size grows with points but never ends: 0 → 26 px, 100 → 39, 400 → 52, 1600 → 78, 2500 → 91, capped at 104 */
  const sizeOf = sc => Math.min(104, 26 + 13 * Math.sqrt(Math.max(0, sc) / 100));
  const shade = (hex, k) => { const n = parseInt(hex.slice(1), 16); const f = c => Math.max(0, Math.min(255, Math.round(c * k))); return `rgb(${f(n >> 16)},${f((n >> 8) & 255)},${f(n & 255)})`; };

  function fishSVG(color, id, crown) {
    const dark = shade(color, .72), light = shade(color, 1.25);
    return `<svg viewBox="-8 -34 116 68" aria-hidden="true"><defs><linearGradient id="g${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${light}"/><stop offset=".6" stop-color="${color}"/><stop offset="1" stop-color="${dark}"/></linearGradient></defs>
      <g class="tail"><path d="M18 0 L-6 -22 Q0 0 -6 22Z" fill="${dark}"/></g>
      <path d="M44 -20 Q58 -34 70 -18Z" fill="${dark}"/>
      <ellipse cx="52" cy="0" rx="42" ry="24" fill="url(#g${id})" stroke="${dark}" stroke-width="2.5"/>
      <path d="M40 -22 Q34 0 40 22" fill="none" stroke="${light}" stroke-width="5" opacity=".7"/>
      <path d="M56 6 Q50 18 40 14" fill="${dark}" opacity=".8"/>
      <circle cx="78" cy="-5" r="8" fill="#fff"/><circle cx="80" cy="-5" r="4.5" fill="#1f3d57"/><circle cx="81.5" cy="-7" r="1.6" fill="#fff"/>
      <path d="M88 8 Q92 10 88 12" fill="none" stroke="${dark}" stroke-width="2" stroke-linecap="round"/>
      ${crown ? '<path d="M38 -22 L36 -36 L46 -29 L52 -40 L58 -29 L68 -36 L66 -22Z" fill="#f2b134" stroke="#c98c10" stroke-width="2" stroke-linejoin="round"/>' : ''}
    </svg>`;
  }

  const CSS = `
.aq{position:relative;height:200px;border-radius:22px;overflow:hidden;border:3px solid #8fd3ee;box-shadow:0 8px 24px rgba(31,61,87,.22);
  background:linear-gradient(180deg,#5fd0ec 0%,#2a9fd0 40%,#16679b 100%);touch-action:pan-y}
.aq .rays{position:absolute;inset:0;background:repeating-linear-gradient(105deg,rgba(255,255,255,.10) 0 18px,transparent 18px 60px);mask-image:linear-gradient(#000,transparent 75%);-webkit-mask-image:linear-gradient(#000,transparent 75%);animation:aqRay 9s ease-in-out infinite alternate}
@keyframes aqRay{to{transform:translateX(-30px)}}
.aq .bed{position:absolute;left:0;right:0;bottom:0;height:46px}
.aq .weed{transform-origin:50% 100%;animation:aqWeed 4s ease-in-out infinite alternate}
@keyframes aqWeed{from{transform:skewX(-6deg)}to{transform:skewX(6deg)}}
.aq .bub{position:absolute;bottom:20px;width:8px;height:8px;border-radius:50%;border:2px solid rgba(255,255,255,.7);animation:aqBub linear infinite}
@keyframes aqBub{from{transform:translateY(0);opacity:.9}to{transform:translateY(-200px);opacity:0}}
.aq .fish{position:absolute;left:0;top:0;cursor:pointer;will-change:transform;border:0;background:none;padding:0}
.aq .fish svg{display:block;width:100%;height:auto;overflow:visible;transition:transform .25s}
.aq .fish .tail{transform-origin:18px 0;animation:aqTail .5s ease-in-out infinite alternate}
@keyframes aqTail{from{transform:scaleY(.8) rotate(-8deg)}to{transform:scaleY(1.05) rotate(8deg)}}
.aq .fish.me{filter:drop-shadow(0 0 6px #fff) drop-shadow(0 0 10px #ffe9a0)}
.aq .tag{position:absolute;left:50%;bottom:100%;transform:translateX(-50%);white-space:nowrap;font:900 12px "Cairo","Nunito",sans-serif;color:#1f3d57;background:#fff;border-radius:999px;padding:1px 8px;box-shadow:0 2px 6px rgba(0,0,0,.2);pointer-events:none}
.aq .fish:not(.me) .tag{opacity:0;transition:opacity .2s}
.aq .fish.show .tag{opacity:1}
.aq .fish:focus-visible{outline:3px solid #fff;border-radius:12px}
.aq .aqTitle{position:absolute;top:8px;right:12px;font:900 15px "Cairo",sans-serif;color:#fff;text-shadow:0 2px 4px rgba(0,0,0,.35);direction:rtl}
@media (min-width:640px){.aq{height:230px}}
@media (prefers-reduced-motion:reduce){.aq .rays,.aq .weed,.aq .bub,.aq .fish .tail{animation:none}}`;

  window.SI_Aquarium = async function (el, opts = {}) {
    if (!el || !window.SI) return;
    if (!document.getElementById('aq-css')) { const st = document.createElement('style'); st.id = 'aq-css'; st.textContent = CSS; document.head.appendChild(st); }
    const T = SI.T, esc = SI.esc, me = SI.player(), reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.classList.add('aq'); el.setAttribute('role', 'img'); el.setAttribute('aria-label', T('Aquarium: every student is a fish that grows with points', 'حوض السمك: كل طالب سمكة تكبر مع نقاطه'));
    /* sea bed: sand, rocks and swaying weeds drawn in code */
    let weeds = '';
    [[6, 70, '#2e9e6b'], [14, 52, '#47b67c'], [30, 64, '#2e9e6b'], [62, 58, '#47b67c'], [78, 74, '#2e9e6b'], [92, 54, '#3aa873']].forEach(([x, h, c], i) => {
      weeds += `<path class="weed" style="animation-delay:${i * .6}s" d="M${x * 10} 60 q-14 -${h * .35} 4 -${h * .55} q14 -${h * .2} -4 -${h * .45}" fill="none" stroke="${c}" stroke-width="9" stroke-linecap="round"/>`;
    });
    el.innerHTML = `<div class="rays"></div><span class="aqTitle">${T('🐠 Motafawek aquarium', '🐠 حوض متفوّق')}</span>
      <svg class="bed" viewBox="0 0 1000 60" preserveAspectRatio="none" aria-hidden="true">${weeds}
        <path d="M0 40 Q150 22 320 38 T660 34 T1000 36 L1000 60 L0 60Z" fill="#f3d9a4"/>
        <ellipse cx="420" cy="44" rx="46" ry="16" fill="#9aa8b5"/><ellipse cx="455" cy="48" rx="28" ry="11" fill="#b8c4cf"/><ellipse cx="860" cy="46" rx="34" ry="12" fill="#9aa8b5"/>
      </svg>`;
    for (let i = 0; i < 7; i++) { const b = document.createElement('i'); b.className = 'bub'; b.style.cssText = `left:${8 + Math.random() * 84}%;animation-duration:${4 + Math.random() * 4}s;animation-delay:${Math.random() * 5}s;transform:scale(${.6 + Math.random() * .8})`; el.appendChild(b); }

    /* students: the board's top 30 + me (my fish always, from my own points) */
    let rows = [], myId = null;
    try { myId = me ? await SI.LB.myId() : null; } catch (e) {}
    try { rows = ((await SI.LB.top(30)).rows || []).filter(r => r && r.name); } catch (e) {}
    const myXP = me ? Math.round((SI.xp && SI.xp()) || 0) : 0;
    if (me && myId && !rows.some(r => r.id === myId)) rows.push({ id: myId, name: me.name, score: myXP });
    const topScore = rows.reduce((m, r) => Math.max(m, r.score || 0), 0);

    const W = () => el.clientWidth, H = () => el.clientHeight - 40;
    const fishes = rows.map((r, i) => {
      const isMe = !!myId && r.id === myId, size = sizeOf(isMe ? Math.max(r.score, myXP) : r.score);
      const color = COLORS[hash(r.id || r.name) % COLORS.length];
      const b = document.createElement('button'); b.type = 'button'; b.className = 'fish' + (isMe ? ' me' : '');
      b.style.width = size + 'px';
      b.setAttribute('aria-label', `${r.name} ${r.score}`);
      b.innerHTML = fishSVG(color, i, r.score && r.score === topScore) + `<span class="tag">${isMe ? T('Your fish', SI.G('سمكتك', 'سمكتك')) + ' · ' : ''}${esc(r.name)} · ${isMe ? Math.max(r.score, myXP) : r.score}</span>`;
      b.onclick = () => { b.classList.add('show'); clearTimeout(b._t); b._t = setTimeout(() => b.classList.remove('show'), 2500); };
      el.appendChild(b);
      const speed = (isMe ? 34 : 18 + Math.random() * 22) * (1.2 - size / 160);
      return { b, svg: b.querySelector('svg'), size, x: Math.random() * Math.max(10, W() - size), y: 30 + Math.random() * Math.max(10, H() - 40), vx: (Math.random() < .5 ? -1 : 1) * speed, ph: Math.random() * 6, ty: 0, isMe };
    });

    /* the message under the tank */
    if (opts.msg) {
      opts.msg.innerHTML = me
        ? T(`🐟 Your fish has <b>${myXP}</b> points. Play more and it grows bigger!`, SI.G(`🐟 سمكتك عندها <b>${myXP}</b> نقطة. العب أكتر علشان سمكتك تكبر!`, `🐟 سمكتك عندها <b>${myXP}</b> نقطة. العبي أكتر علشان سمكتك تكبر!`))
        : T('🐟 Every student has a fish that grows with points. Sign in and get yours!', '🐟 كل طالب له سمكة بتكبر مع نقاطه. سجّل اسمك وخد سمكتك!');
    }

    /* swimming: a slow drift left and right with a gentle wave; turn at the glass */
    const draw = f => { f.b.style.transform = `translate(${f.x}px,${f.y + Math.sin(f.ph) * 6}px)`; const d = f.vx < 0 ? -1 : 1; if (f.d !== d) { f.d = d; f.svg.style.transform = `scaleX(${d})`; } };   // only the drawing turns, the name tag stays readable
    fishes.forEach(draw);
    if (reduce) return;
    let last = performance.now(), on = true, raf = 0;
    const step = t => {
      const dt = Math.min(.05, (t - last) / 1000); last = t;
      const w = W(), h = H();
      fishes.forEach(f => {
        f.x += f.vx * dt; f.ph += dt * 2;
        if (f.x < 0) { f.x = 0; f.vx = Math.abs(f.vx); } else if (f.x > w - f.size) { f.x = w - f.size; f.vx = -Math.abs(f.vx); }
        if (Math.random() < dt * .15) f.ty = 30 + Math.random() * Math.max(10, h - 40);   // now and then pick a new depth
        if (f.ty) f.y += (f.ty - f.y) * dt * .6;
        if (Math.random() < dt * .05) f.vx = -f.vx;                                          // and sometimes turn around
        draw(f);
      });
      if (on) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    /* stop when the tank is off screen or the tab is hidden */
    const go = v => { if (v && !on) { on = true; last = performance.now(); raf = requestAnimationFrame(step); } else if (!v) { on = false; cancelAnimationFrame(raf); } };
    if ('IntersectionObserver' in window) new IntersectionObserver(es => go(es[0].isIntersecting)).observe(el);
    document.addEventListener('visibilitychange', () => go(document.visibilityState === 'visible'));
  };
})();
