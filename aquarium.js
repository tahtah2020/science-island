/* «حوض متفوّق» Motafawek aquarium (owner, 7 Nov 2026), on aquarium.html.
   Every student of the «نجوم متفوّق» board (top 30) is a fish; the current player's fish is always there (local points).
   - The fish grows with points (sizeOf) and changes into another FISH with the player's level (owner: a fish never turns
     into a turtle): level 1 = small fish drawn in code in the student's own colour, 2 = blue round fish, 3 = clownfish,
     4 = angelfish, 5 = shining angelfish, 6 = golden angelfish. The leader wears a crown.
   - The turtle and the octopus live in the tank anyway (owner); castle, ship, treasure chest (opens when the weekly team goal
     of «نجوم متفوّق» is reached) and Reesho the diver sit on the sand. Pictures: owner's ChatGPT sheets cut out with PIL
     into assets/aquarium/ (bg.jpg, fish_*.webp, turtle, octopus, castle, ship, chest_closed/open, reesho_diver).
   - Tap the water = food pellets fall; nearby fish swim to them and eat them (owner's choice).
   - A fish eats only on the days its student earns points (owner, 7 Nov 2026): played today = full size; missed days make it
     hungry, then smaller (−13 % a day from the 2nd day), and after 7 days without points it leaves the tank. Points are never
     lost: the fish comes back at full size the day the student plays again. Last day = the board's `at` (it changes only when
     the score goes up) or, for the player, `prof.lx` (common.js noteGain). Only students active in the last 7 days are read.
   8 Nov 2026 (owner): a WIDE tank that wraps round (360°): drag/swipe left-right and the water moves with you, arrows and the
   mouse wheel too; one zone per grade (grade 3 on the right … prep 2 on the left), each student's fish lives in its grade's
   zone (grade from `cards/{id}`, else the player's own grade, else spread by name); fish keep apart (no pile-up);
   «أين سمكتي؟» button + a small map under the tank (zones, dots, the window you see; tap it to jump). Background = bg.jpg
   tiles, every other one mirrored, so the seams match and the world width is a whole number of tile pairs.
   A student under HATCH points is an EGG on the sand (cracks as the points grow) that hatches into a fish at HATCH.
   10 Nov 2026 (owner): «الشبكة»: after SI.NET_DAYS (3) days without points the player's own fish is caught in a net that hangs
   from the surface (only its owner sees the net: SI.inNet() is local); it stays, whatever the days, until the student cuts its
   5 strings in quiz.html#rescue. Other students away 3+ days sleep on the sand (💤), so nobody sees a classmate in a net.
   «أين سمكتي؟» is always shown (also as a button on the water): it glides to the fish and opens a card with its state:
   egg (name on it, points left to hatch), net (button to the rescue game), or fish (points, next kind).
   Usage: SI_Aquarium(document.getElementById('tank'), { msg, mine: «أين سمكتي؟» button, map: element for the small map }) */
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

  /* the net over the player's fish: a diamond mesh in rope colour, knotted at the top */
  const NET = '<svg class="netov" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><defs><pattern id="aqMesh" width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0H12M0 0V12" stroke="#d9b679" stroke-width="2.4" fill="none"/></pattern></defs>'
    + '<path d="M50 2 C20 8 4 30 6 58 C8 84 30 98 50 98 C70 98 92 84 94 58 C96 30 80 8 50 2Z" fill="url(#aqMesh)" stroke="#9c7a44" stroke-width="3"/><circle cx="50" cy="4" r="4" fill="#9c7a44"/></svg>';
  const HATCH = 100;        // points to hatch the egg into a fish (owner, 8 Nov 2026)
  const ZONES = [['g3', 'Grade 3', 'الصف الثالث', 'G3', 'ثالث'], ['g4', 'Grade 4', 'الصف الرابع', 'G4', 'رابع'], ['g5', 'Grade 5', 'الصف الخامس', 'G5', 'خامس'],
    ['g6', 'Grade 6', 'الصف السادس', 'G6', 'سادس'], ['p1', 'Prep 1', 'الأول الإعدادي', 'P1', '١ إعدادي'], ['p2', 'Prep 2', 'الثاني الإعدادي', 'P2', '٢ إعدادي']];   // [id, name, short name for the map]
  const BG_RATIO = 1400 / 933;   // bg.jpg width / height

  function drawnEgg(color, id, crack) {
    const light = shade(color, 1.35), dark = shade(color, .8);
    const cracks = crack >= 2 ? '<path d="M14 34 L22 40 L18 46 L28 52 L24 58 M46 30 L40 38 L46 44 L38 50" fill="none" stroke="#1f3d57" stroke-width="2.4" stroke-linejoin="round"/>'
      : crack >= 1 ? '<path d="M16 36 L24 42 L20 48 L30 54" fill="none" stroke="#1f3d57" stroke-width="2.4" stroke-linejoin="round"/>' : '';
    return `<svg viewBox="0 0 60 74" aria-hidden="true"><defs><radialGradient id="e${id}" cx=".38" cy=".3" r=".8"><stop offset="0" stop-color="#fff"/><stop offset=".45" stop-color="${light}"/><stop offset="1" stop-color="${dark}"/></radialGradient></defs>
      <ellipse cx="30" cy="70" rx="20" ry="4" fill="rgba(0,40,80,.25)"/>
      <path d="M30 4 C48 4 56 30 56 44 C56 60 45 70 30 70 C15 70 4 60 4 44 C4 30 12 4 30 4Z" fill="url(#e${id})" stroke="#1f3d57" stroke-width="3"/>
      <circle cx="21" cy="28" r="4" fill="${color}" opacity=".7"/><circle cx="38" cy="22" r="3" fill="${color}" opacity=".7"/><circle cx="40" cy="50" r="5" fill="${color}" opacity=".6"/>${cracks}</svg>`;
  }

  const CSS = `
.aq{position:relative;height:220px;border-radius:22px;overflow:hidden;border:4px solid #bfeaf7;box-shadow:0 10px 28px rgba(31,61,87,.28),inset 0 0 0 2px rgba(255,255,255,.35);
  background:#1d7fd0;touch-action:pan-y;cursor:grab;user-select:none;-webkit-user-select:none}
.aq.drag{cursor:grabbing}
.aq .strip{position:absolute;left:0;top:0;bottom:0;display:flex;will-change:transform;pointer-events:none}
.aq .strip i{flex:none;height:100%;background:url(${A}bg.jpg) center bottom/100% 100% no-repeat}
.aq .strip i.m{transform:scaleX(-1)}
.aq .bub{position:absolute;bottom:14%;width:9px;height:9px;border-radius:50%;border:2px solid rgba(255,255,255,.75);animation:aqBub linear infinite;pointer-events:none}
@keyframes aqBub{from{transform:translateY(0);opacity:.9}to{transform:translateY(-110vh);opacity:0}}
.aq .dec{position:absolute;left:0;bottom:2%;pointer-events:none;will-change:transform}
.aq .dec img{display:block;width:100%;filter:drop-shadow(0 4px 4px rgba(0,40,80,.25))}
.aq .octo img{animation:aqBob 3s ease-in-out infinite}
@keyframes aqBob{0%,100%{transform:translateY(0) rotate(-2deg)}50%{transform:translateY(-8px) rotate(2deg)}}
.aq .diver img{animation:aqBob 4s ease-in-out infinite}
.aq .sign{position:absolute;left:0;top:10px;pointer-events:none;will-change:transform;font:900 13px "Cairo","Nunito",sans-serif;color:#1f3d57;background:rgba(255,250,240,.88);border:2px solid #fff;border-radius:999px;padding:2px 12px;white-space:nowrap;box-shadow:0 2px 8px rgba(0,40,80,.2);direction:rtl}
.aq .sign.mine{background:#ffe9a0}
.aq .say{position:absolute;bottom:100%;right:0;width:max-content;max-width:180px;margin-bottom:6px;background:#fff;color:#1f3d57;border-radius:14px;padding:5px 10px;font:800 13px "Cairo","Nunito",sans-serif;box-shadow:0 3px 10px rgba(0,0,0,.2);direction:rtl;transition:opacity .4s}
.aq .say::after{content:"";position:absolute;bottom:-7px;right:24px;border:8px solid transparent;border-top-color:#fff;border-bottom:0}
.aq .turtle{position:absolute;left:0;top:0;pointer-events:none;will-change:transform}
.aq .turtle img{display:block;width:100%;transition:transform .4s}
.aq .fish{position:absolute;left:0;top:0;cursor:pointer;will-change:transform;border:0;background:none;padding:0;touch-action:pan-y}
.aq .fish .body{display:block;position:relative;transition:transform .3s}
.aq .fish .body img,.aq .fish .body>svg{display:block;width:100%;height:auto;overflow:visible;pointer-events:none}
.aq .fish .body.hue img{filter:hue-rotate(var(--hue))}
.aq .fish .body.shine img{filter:drop-shadow(0 0 5px #fff) drop-shadow(0 0 9px #8fe3ff)}
.aq .fish .body.gold img{filter:sepia(.55) saturate(2.2) hue-rotate(-12deg) brightness(1.08) drop-shadow(0 0 7px #ffd95a)}
.aq .fish .tail{transform-origin:18px 0;animation:aqTail .5s ease-in-out infinite alternate}
@keyframes aqTail{from{transform:scaleY(.8) rotate(-8deg)}to{transform:scaleY(1.05) rotate(8deg)}}
.aq .fish .body>svg.crown{position:absolute;width:34%;left:36%;top:-12%;height:auto}
.aq .fish.hungry .body{filter:saturate(.75)}
.aq .fish.starving .body{filter:saturate(.45) brightness(.92);opacity:.85}
.aq .fish.me .body{filter:drop-shadow(0 0 5px #fff) drop-shadow(0 0 10px #ffe9a0)}
.aq .fish.egg .body{animation:aqWob 2.6s ease-in-out infinite;transform-origin:50% 92%}
@keyframes aqWob{0%,70%,100%{transform:rotate(0)}76%{transform:rotate(-7deg)}82%{transform:rotate(6deg)}88%{transform:rotate(-3deg)}}
.aq .fish.chomp .body{animation:aqChomp .3s}
@keyframes aqChomp{50%{scale:1.15}}
.aq .fish.flash .body{animation:aqFlash .45s ease-in-out 4 alternate}
@keyframes aqFlash{to{scale:1.3;filter:drop-shadow(0 0 12px #fff) drop-shadow(0 0 22px #ffd95a)}}
.aq .tag{position:absolute;left:50%;bottom:100%;transform:translateX(-50%);white-space:nowrap;font:900 12px "Cairo","Nunito",sans-serif;color:#1f3d57;background:#fff;border-radius:999px;padding:1px 8px;box-shadow:0 2px 6px rgba(0,0,0,.2);pointer-events:none}
.aq .fish:not(.me) .tag{opacity:0;transition:opacity .2s}
.aq .fish.show .tag{opacity:1;z-index:5}
.aq .fish:focus-visible{outline:3px solid #fff;border-radius:12px}
.aq .pel{position:absolute;left:0;top:0;width:8px;height:8px;margin:-4px 0 0 -4px;border-radius:50%;background:radial-gradient(circle at 35% 35%,#ffd08a,#c9752a);box-shadow:0 1px 2px rgba(0,0,0,.3);pointer-events:none}
.aq .pop{position:absolute;width:14px;height:14px;margin:-7px 0 0 -7px;border-radius:50%;border:2px solid #fff;pointer-events:none;animation:aqPop .5s ease-out forwards}
@keyframes aqPop{from{transform:scale(.4);opacity:1}to{transform:scale(1.8);opacity:0}}
.aq .aqTitle{position:absolute;top:8px;right:12px;font:900 15px "Cairo",sans-serif;color:#fff;text-shadow:0 2px 4px rgba(0,0,0,.35);direction:rtl;pointer-events:none;z-index:6}
.aq .arr{position:absolute;top:50%;margin-top:-22px;width:44px;height:44px;border-radius:50%;border:3px solid #fff;background:rgba(31,61,87,.45);color:#fff;font:900 24px/1 "Nunito",sans-serif;cursor:pointer;z-index:6;display:grid;place-items:center;padding:0 0 3px}
.aq .arr:hover{background:rgba(31,61,87,.7)}
.aq .arr.l{left:8px}.aq .arr.r{right:8px}
.aq .drag-hint{position:absolute;left:50%;bottom:16%;transform:translateX(-50%);font:900 15px "Cairo",sans-serif;color:#fff;background:rgba(31,61,87,.55);border-radius:999px;padding:4px 14px;pointer-events:none;z-index:6;white-space:nowrap;animation:aqHint 1.6s ease-in-out infinite;transition:opacity .5s}
@keyframes aqHint{0%,100%{translate:-14px 0}50%{translate:14px 0}}
.aqmap{position:relative;height:40px;border-radius:14px;overflow:hidden;background:#1d6fa8;border:3px solid #fff;box-shadow:0 3px 10px rgba(31,61,87,.18);cursor:pointer;direction:ltr;touch-action:manipulation}
.aqmap .z{position:absolute;top:0;bottom:0;display:flex;align-items:flex-end;justify-content:center;font:800 10.5px "Cairo",sans-serif;color:rgba(255,255,255,.85);padding-bottom:1px;border-left:1px dashed rgba(255,255,255,.35);white-space:nowrap;overflow:hidden}
.aqmap .z.mine{background:rgba(255,233,160,.22);color:#ffe9a0}
.aqmap .d{position:absolute;top:9px;width:6px;height:6px;margin-left:-3px;border-radius:50%;background:#bfeaf7}
.aqmap .d.me{width:10px;height:10px;margin:-2px 0 0 -5px;background:#ffd95a;border:2px solid #fff;z-index:2}
.aqmap .d.e{background:#fff4d6;border-radius:50% 50% 45% 45%}
.aqmap .win{position:absolute;top:2px;bottom:2px;border:2px solid #fff;border-radius:8px;background:rgba(255,255,255,.14);pointer-events:none}
.aq .fish.net{cursor:pointer}
.aq .fish.net .body{animation:aqSwing 3.2s ease-in-out infinite;transform-origin:50% -40%}
@keyframes aqSwing{0%,100%{rotate:-4deg}50%{rotate:4deg}}
.aq .fish .netov{position:absolute;inset:-22% -12% -18%;width:124%;height:140%;pointer-events:none}
.aq .fish .rope{position:absolute;left:50%;bottom:100%;width:3px;margin-left:-1.5px;background:repeating-linear-gradient(180deg,#c9a46a 0 6px,#9c7a44 6px 9px);pointer-events:none}
.aq .fish.net .tag{bottom:auto;top:105%}
.aq .fish.sleep .body{filter:saturate(.5) brightness(.95);opacity:.8}
.aq .fish .zz{position:absolute;right:-6px;top:-14px;font:900 15px "Nunito",sans-serif;color:#fff;text-shadow:0 1px 3px rgba(0,40,80,.5);animation:aqZz 2.4s ease-in-out infinite;pointer-events:none}
@keyframes aqZz{0%,100%{translate:0 0;opacity:.5}50%{translate:4px -6px;opacity:1}}
.aq .mineBtn{position:absolute;top:44px;left:50%;transform:translateX(-50%);z-index:7;border:3px solid #fff;border-radius:999px;background:#f2b134;color:#1f3d57;font:900 15px "Cairo","Nunito",sans-serif;padding:5px 16px;box-shadow:0 4px 12px rgba(0,40,80,.3);cursor:pointer;white-space:nowrap;animation:aqPulse 2s ease-in-out infinite}
@keyframes aqPulse{0%,100%{scale:1}50%{scale:1.06}}
.aq .card{position:absolute;left:50%;bottom:10px;transform:translateX(-50%);z-index:8;width:min(92%,420px);background:rgba(255,250,240,.97);border:3px solid #fff;border-radius:18px;padding:10px 14px 12px;box-shadow:0 8px 24px rgba(0,40,80,.35);direction:rtl;text-align:center;font:700 14.5px/1.6 "Cairo","Nunito",sans-serif;color:#1f3d57;cursor:default}
.aq .card h3{margin:0 0 2px;font:900 17px "Cairo",sans-serif}
.aq .card p{margin:0 0 8px}
.aq .card .x{position:absolute;top:4px;left:8px;border:0;background:none;font:900 20px "Nunito",sans-serif;color:#3a5c75;cursor:pointer}
.aq .card .btn{display:inline-block}
.aq .card .meter{height:12px;border-radius:999px;background:#e3eef3;overflow:hidden;margin:2px 0 10px}
.aq .card .meter i{display:block;height:100%;background:linear-gradient(90deg,#7bd389,#2e9e6b);border-radius:999px}
@media (prefers-reduced-motion:reduce){.aq .fish.net .body,.aq .fish .zz,.aq .mineBtn{animation:none}}
@media (prefers-reduced-motion:reduce){.aq .bub,.aq .octo img,.aq .diver img,.aq .fish .tail,.aq .fish.egg .body,.aq .drag-hint{animation:none}}`;

  window.SI_Aquarium = async function (el, opts = {}) {
    if (!el || !window.SI) return;
    if (!document.getElementById('aq-css')) { const st = document.createElement('style'); st.id = 'aq-css'; st.textContent = CSS; document.head.appendChild(st); }
    const T = SI.T, esc = SI.esc, me = SI.player(), reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.classList.add('aq');
    el.setAttribute('aria-label', T('Aquarium: every student is a fish that grows with points. Drag to swim around the tank, tap the water to feed the fish.', 'حوض السمك: كل طالب سمكة بتكبر مع نقاطه. اسحب علشان تلف في الحوض، واضغط في الماء علشان تأكّل السمك.'));
    const W = () => el.clientWidth, Hh = () => el.clientHeight;
    const sand = () => Hh() * .86;                                     // where the sand starts in bg.jpg (bottom 14 %)

    /* ---- the world: WW px wide, wraps round; zone i (grade) = [zoneX(i) ± zoneW/2] ---- */
    let WW = 1, zoneW = 1, tileW = 1, camX = 0;
    const NZ = ZONES.length;
    const mod = (a, n) => ((a % n) + n) % n;
    const wdx = (a, b) => mod(a - b + WW / 2, WW) - WW / 2;           // shortest way from b to a, round the tank
    const zoneX = i => (NZ - 1 - i + .5) * zoneW;                       // grade 3 on the right (Arabic reading order)
    const screenX = x => { let s = mod(x - camX, WW); if (s > W() + 160) s -= WW; return s; };
    const strip = document.createElement('div'); strip.className = 'strip';
    function layout() {
      const old = WW;
      tileW = Math.max(200, Hh() * BG_RATIO);
      const want = NZ * Math.max(320, W() * .8);
      WW = Math.ceil(want / (2 * tileW)) * 2 * tileW;                  // whole pairs of tiles: the mirrored seam matches round the wrap
      zoneW = WW / NZ;
      const n = Math.ceil((W() + 2 * tileW) / tileW) + 1;
      strip.innerHTML = Array.from({ length: n }, (_, i) => `<i class="${i % 2 ? 'm' : ''}" style="width:${tileW + 2}px;margin-right:-2px"></i>`).join('');
      return old > 1 ? WW / old : 1;
    }
    layout();

    el.innerHTML = '';   // the page header already says «حوض متفوّق»; the top of the tank shows the grade signs
    el.appendChild(strip);
    for (let i = 0; i < 8; i++) { const b = document.createElement('i'); b.className = 'bub'; b.style.cssText = `left:${6 + Math.random() * 88}%;animation-duration:${5 + Math.random() * 5}s;animation-delay:${Math.random() * 6}s;scale:${.6 + Math.random() * .8}`; el.appendChild(b); }

    /* the students: those who earned points in the last 7 days (top 40) + me */
    let rows = [], myId = null;
    try { myId = me ? await SI.LB.myId() : null; } catch (e) {}
    const DAY = 864e5, midnight = d => { const x = new Date(d); x.setHours(0, 0, 0, 0); return x.getTime(); }, today0 = midnight(Date.now());
    const msOf = v => !v ? 0 : typeof v === 'number' ? v : typeof v.toMillis === 'function' ? v.toMillis() : v.seconds ? v.seconds * 1000 : 0;
    const daysSince = ms => ms ? Math.max(0, Math.round((today0 - midnight(ms)) / DAY)) : 0;
    const GONE = 8;                                                    // 8 days without points: the fish leaves the tank
    try { rows = ((await SI.LB.activeSince(today0 - (GONE - 1) * DAY, 40)).rows || []).filter(r => r && r.name); } catch (e) {}
    rows.forEach(r => { r.days = daysSince(msOf(r.at)); });
    const myXP = me ? Math.round((SI.xp && SI.xp()) || 0) : 0;
    let myDays = null;
    if (me) {
      const lx = (SI.prof && SI.prof().lx) || '', [yy, mm, dd] = lx.split('-').map(Number);
      const local = lx ? daysSince(new Date(yy, mm - 1, dd).getTime()) : null, board = rows.find(r => r.id === myId);
      myDays = local !== null ? (board ? Math.min(local, board.days) : local) : board ? board.days : (myXP ? GONE : 0);
      if (!board) rows.push({ id: myId || 'me', name: me.name, score: myXP, days: myDays, grade: me.grade });
      rows.forEach(r => { if (r.id === myId) { r.score = Math.max(r.score || 0, myXP); r.days = myDays; r.grade = me.grade; } });
    }
    const isMe = r => !!me && (r.id === myId || r.id === 'me');
    rows = rows.filter(r => r.days < GONE || isMe(r)).sort((a, b) => b.score - a.score).slice(0, 30);
    /* the grade of each student (public card), to put the fish in its grade's zone */
    try { const cards = SI.LB.cards ? await SI.LB.cards(rows.filter(r => !r.grade).map(r => r.id)) : {}; rows.forEach(r => { if (!r.grade && cards[r.id]) r.grade = cards[r.id].grade; }); } catch (e) {}
    const zoneOf = r => { const i = ZONES.findIndex(z => z[0] === r.grade); return i >= 0 ? i : hash(r.id || r.name) % NZ; };
    const myZone = me ? Math.max(0, ZONES.findIndex(z => z[0] === me.grade)) : -1;
    const topScore = rows.reduce((m, r) => Math.max(m, r.days < GONE ? r.score || 0 : 0), 0);

    /* decorations, one or two per zone (world x = zone centre + offset in zone widths) */
    const DECOR = [['castle', -.32, 17, 62, 170], ['octopus', .3, 11, 44, 100, 'octo'], ['ship', -.28, 18, 66, 180], ['chest_closed', .3, 14, 54, 140, '', 'aqChest'],
      ['castle', .26, 15, 58, 150], ['octopus', -.3, 10, 42, 90, 'octo'], ['ship', .28, 16, 60, 160], ['castle', -.3, 14, 56, 140]];
    const decs = DECOR.map(([img, off, pct, min, max, cls, id], i) => {
      const d = document.createElement('div'); d.className = 'dec ' + (cls || '');
      d.style.width = `clamp(${min}px,${pct}vw,${max}px)`; if (img === 'octopus') d.style.bottom = '4%';
      d.innerHTML = `<img src="${A}${img}.webp" alt="" draggable="false"${id ? ` id="${id}"` : ''}>`;
      el.appendChild(d); return { el: d, zone: i % NZ, off };
    });
    /* Reesho the diver lives in my grade's zone and says how to swim round and feed */
    const diver = document.createElement('div'); diver.className = 'dec diver'; diver.style.width = 'clamp(56px,13vw,120px)';
    diver.innerHTML = `<div class="say">${T('Drag to swim round the tank, tap the water to feed! 🍤', 'اسحب الحوض علشان تلف، واضغط في الماء وأكّل السمك! 🍤')}</div><img src="${A}reesho_diver.webp" alt="" draggable="false">`;
    el.appendChild(diver); decs.push({ el: diver, zone: myZone >= 0 ? myZone : 2, off: .4 });
    const say = diver.querySelector('.say');
    const signs = ZONES.map((z, i) => { const s = document.createElement('div'); s.className = 'sign' + (i === myZone ? ' mine' : ''); s.textContent = (i === myZone ? '⭐ ' : '') + T(z[1], z[2]); el.appendChild(s); return s; });

    /* the turtle swims across now and then (world coordinates, round the tank) */
    const tu = document.createElement('div'); tu.className = 'turtle'; tu.innerHTML = `<img src="${A}turtle.webp" alt="">`; el.appendChild(tu);
    const turtle = { w: Math.max(60, Math.min(110, W() * .13)), x: 0, y: sand() * .5, vx: 22 };
    tu.style.width = turtle.w + 'px';

    /* fish and eggs */
    const fishes = rows.map((r, i) => {
      const mine = isMe(r), score = r.score || 0, k = kindOf(score), egg = score < HATCH, zone = zoneOf(r);
      const net = mine && !egg && SI.inNet && SI.inNet(), sleep = !mine && !egg && r.days >= (SI.NET_DAYS || 3);
      const hunger = net || r.days <= 1 ? 1 : Math.max(.75, 1 - (r.days - 1) * .13);   // 2 days without points: a little smaller; from day 3 net / sleep
      const scale = Math.max(.62, Math.min(1, W() / 800));
      const size = egg ? (30 + score / HATCH * 16) * scale : sizeOf(score) * scale * hunger;
      const h = hash(r.id || r.name), color = COLORS[h % COLORS.length];
      const b = document.createElement('button'); b.type = 'button';
      b.className = 'fish' + (mine ? ' me' : '') + (egg ? ' egg' : net ? ' net' : sleep ? ' sleep' : r.days >= 1 ? ' hungry' : '');
      b.style.width = size + 'px';
      const left = HATCH - score;
      b.setAttribute('aria-label', egg ? `${r.name}: ${T('egg', 'بيضة')} · ${score}` : `${r.name}: ${score} · ${T(k[3], k[2])}`);
      const pic = egg ? drawnEgg(color, i, score >= HATCH * .7 ? 2 : score >= HATCH * .35 ? 1 : 0) : k[0] ? `<img src="${A}${k[0]}.webp" alt="" draggable="false">` : drawnFish(color, i);
      const label = egg ? `🥚 ${mine ? T('Your egg', 'بيضتك') + ' · ' : ''}${esc(r.name)} · ${T(`${left} to hatch`, `باقي ${left}`)}`
        : `${mine ? T('Your fish', 'سمكتك') + ' · ' : ''}${esc(r.name)} · ${score} ${net ? '🕸' : sleep ? '💤' : r.days ? '😋' : '🍤'}`;
      b.innerHTML = `<span class="body ${egg ? '' : k[4]}" style="--hue:${(h % 7) * 50}deg">${pic}${!egg && score && score === topScore ? CROWN : ''}${net ? NET : ''}${sleep ? '<span class="zz">z<small>z</small></span>' : ''}</span>${net ? '<span class="rope"></span>' : ''}<span class="tag">${label}</span>`;
      b.onclick = e => { e.stopPropagation(); if (moved) return; if (mine) { showCard(); return; } b.classList.add('show'); clearTimeout(b._t); b._t = setTimeout(() => b.classList.remove('show'), 2500); };
      el.appendChild(b);
      const speed = egg || net || sleep ? 0 : (mine ? 34 : 18 + Math.random() * 22) * (1.25 - size / 160);
      const hgt = egg ? size * 74 / 60 : size * k[1];
      return { b, body: b.querySelector('.body'), tag: b.querySelector('.tag'), rope: b.querySelector('.rope'), mine, egg, net, sleep, zone, size, hgt, speed,
        x: zoneX(zone) + (egg ? ((h % 100) / 100 - .5) * zoneW * .7 : (Math.random() - .5) * zoneW * .8),
        y: egg ? 0 : net ? Math.max(70, sand() * .4) : sleep ? sand() - hgt * .85 : 30 + Math.random() * Math.max(10, sand() - 70 - hgt), vx: (Math.random() < .5 ? -1 : 1) * speed, ph: Math.random() * 6, ty: 0 };
    });
    const myFish = fishes.find(f => f.mine);

    /* the message under the tank */
    if (opts.msg) {
      const G = SI.G;
      if (!me) opts.msg.innerHTML = T('🐟 Every student has a fish that grows with points. Sign in and get yours!', '🐟 كل طالب له سمكة بتكبر مع نقاطه. سجّل اسمك وخد سمكتك!');
      else if (myXP < HATCH) opts.msg.innerHTML = T(`🥚 Your fish is still an egg! <b>${HATCH - myXP}</b> more points and it hatches.`,
        G(`🥚 سمكتك لسه بيضة! باقي <b>${HATCH - myXP}</b> نقطة وتفقس. العب علشان تطلع سمكتك!`, `🥚 سمكتك لسه بيضة! باقي <b>${HATCH - myXP}</b> نقطة وتفقس. العبي علشان تطلع سمكتك!`));
      else if (SI.inNet && SI.inNet()) opts.msg.innerHTML = T('🕸 Your fish is caught in a net! Cut its 5 strings: one right answer cuts one string.',
        G('🕸 سمكتك وقعت في الشبكة! اقطع خيوطها الخمسة: كل إجابة صح بتقطع خيط.', '🕸 سمكتك وقعت في الشبكة! اقطعي خيوطها الخمسة: كل إجابة صح بتقطع خيط.'));
      else if (myDays >= GONE) opts.msg.innerHTML = T(`😢 Your fish left the tank: no points for ${myDays} days. Your points are safe: play today and it comes back!`,
        G(`😢 سمكتك خرجت من الحوض لأنك غبت ${myDays} يوم. نقاطك محفوظة: العب النهارده وهترجع!`, `😢 سمكتك خرجت من الحوض لأنك غبتي ${myDays} يوم. نقاطك محفوظة: العبي النهارده وهترجع!`));
      else if (myDays >= 2) opts.msg.innerHTML = T(`😟 Your fish is getting smaller: it has not eaten for ${myDays} days. Play today and it gets its full size back!`,
        G(`😟 سمكتك بتصغر لأنها ما أكلتش من ${myDays} أيام. العب النهارده وترجع لحجمها!`, `😟 سمكتك بتصغر لأنها ما أكلتش من ${myDays} أيام. العبي النهارده وترجع لحجمها!`));
      else if (myDays === 1) opts.msg.innerHTML = T('😋 Your fish is hungry! It eats when you earn points: play today so it does not shrink.',
        G('😋 سمكتك جعانة! بتاكل لما تكسب نقط: العب النهارده علشان ما تصغرش.', '😋 سمكتك جعانة! بتاكل لما تكسبي نقط: العبي النهارده علشان ما تصغرش.'));
      else {
        const li = SI.levelInfo(myXP), nx = li.to ? KINDS[Math.min(6, li.n + 1)] : null;
        opts.msg.innerHTML = T(`🍤 Your fish ate today! It has <b>${myXP}</b> points.`, `🍤 سمكتك أكلت النهارده! عندها <b>${myXP}</b> نقطة.`) + ' '
          + (nx ? T(`${li.to - myXP} more points and it becomes a <b>${nx[3]}</b>!`, G(`باقي <b>${li.to - myXP}</b> نقطة وتتحول لـ<b>${nx[2]}</b>! العب أكتر.`, `باقي <b>${li.to - myXP}</b> نقطة وتتحول لـ<b>${nx[2]}</b>! العبي أكتر.`))
                : T('It is the golden angelfish: play more and it keeps growing!', G('دي سمكة الملاك الذهبية: العب أكتر وهتفضل تكبر!', 'دي سمكة الملاك الذهبية: العبي أكتر وهتفضل تكبر!')));
      }
    }
    SI.LB.weekTotal && SI.LB.weekTotal().then(t => { const c = el.querySelector('#aqChest'); if (c && t !== null && t >= TEAM_GOAL) c.src = A + 'chest_open.webp'; }).catch(() => {});

    /* ---- camera: drag, inertia, arrows, wheel, glide to a point ---- */
    let vel = 0, target = null, moved = false, drag = null;
    const glide = x => { target = mod(x - W() / 2, WW); vel = 0; };
    const startX = myFish ? myFish.x : myZone >= 0 ? zoneX(myZone) : (() => {   // else the busiest zone
      const n = Array(NZ).fill(0); fishes.forEach(f => n[f.zone]++); return zoneX(n.indexOf(Math.max(...n)));
    })();
    camX = mod(startX - W() / 2, WW);
    const hint = document.createElement('div'); hint.className = 'drag-hint'; hint.textContent = T('⇠ drag ⇢', '⇠ اسحب ⇢'); el.appendChild(hint);
    const hideHint = () => { hint.style.opacity = '0'; setTimeout(() => hint.remove(), 600); };
    setTimeout(hideHint, 5000);
    ['l', 'r'].forEach(s => {
      const a = document.createElement('button'); a.type = 'button'; a.className = 'arr ' + s; a.textContent = s === 'l' ? '‹' : '›';
      a.setAttribute('aria-label', T(s === 'l' ? 'Swim left' : 'Swim right', s === 'l' ? 'لف شمال' : 'لف يمين'));
      a.onpointerdown = e => e.stopPropagation();
      a.onclick = e => { e.stopPropagation(); hideHint(); glide(camX + W() / 2 + (s === 'l' ? -1 : 1) * W() * .75); };
      el.appendChild(a);
    });
    el.addEventListener('wheel', e => {
      const d = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.shiftKey ? e.deltaY : 0;
      if (!d) return; e.preventDefault(); target = null; camX = mod(camX + d, WW); hideHint();
    }, { passive: false });

    /* food: a tap (not a drag) in the water drops a few pellets; world coordinates */
    const pels = [];
    const feed = (sx, sy) => {
      if (sy > sand() + 10) return;
      say.style.opacity = '0';
      for (let i = 0; i < 4 && pels.length < 40; i++) {
        const p = { x: mod(camX + sx + (Math.random() - .5) * 26, WW), y: sy + (Math.random() - .5) * 14, vy: 20 + Math.random() * 14, ph: Math.random() * 6, rest: 0, el: document.createElement('i') };
        p.el.className = 'pel'; el.appendChild(p.el); pels.push(p);
      }
      if (SI.sfx && SI.sfx.tick) try { SI.sfx.tick(); } catch (err) {}
    };
    el.addEventListener('pointerdown', e => {
      if (e.button > 0) return;
      const r = el.getBoundingClientRect();
      drag = { id: e.pointerId, x0: e.clientX, y0: e.clientY, cam0: camX, lx: e.clientX, lt: performance.now(), sx: e.clientX - r.left, sy: e.clientY - r.top };
      moved = false; vel = 0; target = null;
    });
    window.addEventListener('pointermove', e => {
      if (!drag || e.pointerId !== drag.id) return;
      const dx = e.clientX - drag.x0;
      if (!moved && Math.abs(dx) > 8 && Math.abs(dx) > Math.abs(e.clientY - drag.y0)) { moved = true; el.classList.add('drag'); hideHint(); }
      if (!moved) return;
      camX = mod(drag.cam0 - dx, WW);
      const t = performance.now(), dt = Math.max(1, t - drag.lt);
      vel = vel * .6 + (-(e.clientX - drag.lx) / dt * 1000) * .4; drag.lx = e.clientX; drag.lt = t;
    });
    const up = e => {
      if (!drag || e.pointerId !== drag.id) return;
      el.classList.remove('drag');
      if (!moved && e.type === 'pointerup' && !e.target.closest('.fish,.arr')) feed(drag.sx, drag.sy);
      if (performance.now() - drag.lt > 120) vel = 0;
      drag = null; setTimeout(() => { moved = false; }, 0);
    };
    window.addEventListener('pointerup', up); window.addEventListener('pointercancel', up);

    /* «أين سمكتي؟» (owner, 10 Nov 2026): always shown, on the page and on the water; glides to the fish (or egg) and opens a
       card that says where it is and what to do: egg → points left to hatch; net → cut the strings; fish → points, next kind */
    const G = SI.G;
    let card = null;
    const closeCard = () => { if (card) { card.remove(); card = null; } };
    function showCard() {
      closeCard();
      let h = '', p = '', act = '';
      if (!me) { h = T('You have no fish yet', 'لسه مالكش سمكة'); p = T('Sign in with your name and you get an egg with your name on it!', G('سجّل اسمك وهتاخد بيضة عليها اسمك!', 'سجّلي اسمك وهتاخدي بيضة عليها اسمك!')); act = `<a class="btn primary" href="index.html">${T('Sign in ▸', 'سجّل اسمك ◂')}</a>`; }
      else if (myFish && myFish.egg) {
        const pct = Math.round(Math.min(1, myXP / HATCH) * 100);
        h = T(`🥚 This is your egg, ${esc(me.name)}!`, `🥚 دي بيضتك يا ${esc(me.name)}!`);
        p = T(`Your fish is inside it. Win <b>${HATCH - myXP}</b> more points and it hatches.`, G(`سمكتك جوّاها. اكسب <b>${HATCH - myXP}</b> نقطة كمان وهتفقس وتطلع سمكتك.`, `سمكتك جوّاها. اكسبي <b>${HATCH - myXP}</b> نقطة كمان وهتفقس وتطلع سمكتك.`))
          + `<div class="meter" aria-label="${pct}%"><i style="width:${pct}%"></i></div>`;
        act = `<a class="btn primary" href="chapters.html">${T('Play and win points ▸', G('العب واكسب نقاط ◂', 'العبي واكسبي نقاط ◂'))}</a>`;
      } else if (myFish && myFish.net) {
        h = T('🕸 Your fish is caught in a net!', '🕸 سمكتك وقعت في الشبكة!');
        p = T(`You were away for ${SI.NET_DAYS}+ days. Answer 5 questions: every right answer cuts one string, and after 5 strings your fish is free!`,
          G(`علشان غبت ${SI.NET_DAYS} أيام أو أكتر. جاوب 5 أسئلة: كل إجابة صح بتقطع خيط، وبعد 5 خيوط سمكتك تخرج حرة!`, `علشان غبتي ${SI.NET_DAYS} أيام أو أكتر. جاوبي 5 أسئلة: كل إجابة صح بتقطع خيط، وبعد 5 خيوط سمكتك تخرج حرة!`));
        act = `<a class="btn primary" href="quiz.html#rescue">${T('✂️ Free my fish', G('✂️ حرّر سمكتك', '✂️ حرّري سمكتك'))}</a>`;
      } else if (myFish) {
        const li = SI.levelInfo(myXP), nx = li.to ? KINDS[Math.min(6, li.n + 1)] : null;
        h = T(`Here is your fish, ${esc(me.name)}! 🐟`, `دي سمكتك يا ${esc(me.name)}! 🐟`);
        p = T(`It has <b>${myXP}</b> points.`, `عندها <b>${myXP}</b> نقطة.`) + ' ' + (nx ? T(`${li.to - myXP} more and it becomes a ${nx[3]}.`, `باقي ${li.to - myXP} نقطة وتتحول لـ${nx[2]}.`) : '')
          + (myDays >= 1 ? ' ' + T('It is hungry: play today!', G('وهي جعانة: العب النهارده!', 'وهي جعانة: العبي النهارده!')) : '');
        act = `<a class="btn primary" href="chapters.html">${T('Play ▸', G('العب ◂', 'العبي ◂'))}</a>`;
      }
      card = document.createElement('div'); card.className = 'card'; card.setAttribute('role', 'dialog');
      card.innerHTML = `<button class="x" type="button" aria-label="${T('Close', 'إغلاق')}">×</button><h3>${h}</h3><p>${p}</p>${act}`;
      card.onpointerdown = e => e.stopPropagation(); card.onclick = e => e.stopPropagation();
      card.querySelector('.x').onclick = closeCard;
      el.appendChild(card);
    }
    const findMine = () => {
      hideHint();
      if (myFish) {
        glide(myFish.x + myFish.size / 2);
        setTimeout(() => { myFish.b.classList.remove('flash'); void myFish.b.offsetWidth; myFish.b.classList.add('flash', 'show');
          setTimeout(() => myFish.b.classList.remove('flash', 'show'), 2200); }, 450);
      }
      setTimeout(showCard, myFish ? 700 : 0);
    };
    const mb = document.createElement('button'); mb.type = 'button'; mb.className = 'mineBtn'; mb.textContent = T('🔍 Where is my fish?', '🔍 أين سمكتي؟');
    mb.onpointerdown = e => e.stopPropagation(); mb.onclick = e => { e.stopPropagation(); findMine(); };
    el.appendChild(mb);
    if (opts.mine) { opts.mine.hidden = false; opts.mine.onclick = findMine; }
    if (myFish && myFish.net) setTimeout(findMine, 900);   // a fish in the net: show it at once
    /* the small map: zones, a dot per fish, the window you see; tap = glide there */
    let mapDots = [], mapWin = [];
    if (opts.map) {
      const m = opts.map; m.classList.add('aqmap');
      m.innerHTML = ZONES.map((z, i) => `<span class="z${i === myZone ? ' mine' : ''}" style="left:${(NZ - 1 - i) / NZ * 100}%;width:${100 / NZ}%">${T(z[3], z[4])}</span>`).join('')
        + fishes.map(f => `<i class="d${f.mine ? ' me' : ''}${f.egg ? ' e' : ''}"></i>`).join('') + '<b class="win"></b><b class="win"></b>';
      mapDots = [...m.querySelectorAll('.d')]; mapWin = [...m.querySelectorAll('.win')];
      m.setAttribute('role', 'img'); m.setAttribute('aria-label', T('Map of the tank: tap a place to swim there', 'خريطة الحوض: اضغط على مكان علشان تروح له'));
      m.onclick = e => { const r = m.getBoundingClientRect(); hideHint(); glide((e.clientX - r.left) / r.width * WW); };
    }
    let mapT = 0;
    const drawMap = () => {
      if (!mapDots.length) return;
      fishes.forEach((f, i) => { mapDots[i].style.left = (mod(f.x + f.size / 2, WW) / WW * 100) + '%'; mapDots[i].style.top = f.egg ? '22px' : (4 + Math.min(1, f.y / sand()) * 18) + 'px'; });
      const a = camX / WW * 100, w = W() / WW * 100;
      mapWin[0].style.cssText = `left:${a}%;width:${Math.min(w, 100 - a)}%`;
      mapWin[1].style.cssText = a + w > 100 ? `left:0;width:${a + w - 100}%` : 'display:none';
    };

    /* ---- drawing ---- */
    const place = (node, x, w, extra = '') => { node.style.transform = `translate(${screenX(x - w / 2)}px,0)${extra}`; };
    const draw = f => {
      const sx = screenX(f.x);
      const y = f.egg ? sand() - f.hgt * .8 : f.net || f.sleep ? f.y : f.y + Math.sin(f.ph) * 5;
      if (f.rope) f.rope.style.height = Math.max(0, y) + 'px';
      f.b.style.transform = `translate(${sx}px,${y}px)`;
      if (!f.egg) { const d = f.vx < 0 ? -1 : 1; if (f.d !== d) { f.d = d; f.body.style.transform = `scaleX(${d})`; } }
      const edge = sx + f.size / 2 > W() - 90 ? 'r' : sx + f.size / 2 < 90 ? 'l' : '';
      if (f.edge !== edge) { f.edge = edge; f.tag.style.cssText = edge === 'r' ? 'left:auto;right:0;transform:none' : edge === 'l' ? 'left:0;transform:none' : ''; }
    };
    const drawWorld = () => {
      strip.style.transform = `translateX(${-mod(camX, 2 * tileW)}px)`;
      decs.forEach(d => place(d.el, zoneX(d.zone) + d.off * zoneW, d.el.offsetWidth));
      signs.forEach((s, i) => place(s, zoneX(i), s.offsetWidth));
      fishes.forEach(draw);
      tu.style.transform = `translate(${screenX(turtle.x)}px,${turtle.y + Math.sin(performance.now() / 900) * 6}px)`;
      turtle.img = turtle.img || tu.firstChild; turtle.img.style.transform = `scaleX(${turtle.vx > 0 ? 1 : -1})`;
    };
    window.addEventListener('resize', () => {
      const k = layout(); if (k === 1) return;
      camX *= k; fishes.forEach(f => { f.x *= k; }); pels.forEach(p => { p.x *= k; }); turtle.x *= k; drawWorld(); drawMap();
    });

    const eat = (f, i) => {
      const p = pels[i]; pels.splice(i, 1); p.el.remove();
      const pop = document.createElement('i'); pop.className = 'pop'; pop.style.left = screenX(p.x) + 'px'; pop.style.top = p.y + 'px'; el.appendChild(pop); setTimeout(() => pop.remove(), 520);
      f.b.classList.remove('chomp'); void f.b.offsetWidth; f.b.classList.add('chomp');
    };
    const swimmers = fishes.filter(f => !f.egg && !f.net && !f.sleep);

    let last = performance.now(), on = true, raf = 0;
    const step = t => {
      const dt = Math.min(.05, (t - last) / 1000); last = t;
      const sd = sand();
      /* camera */
      if (target !== null) { const d = wdx(target, camX); camX = mod(camX + d * Math.min(1, dt * 5), WW); if (Math.abs(d) < 1) target = null; }
      else if (!drag && Math.abs(vel) > 5) { camX = mod(camX + vel * dt, WW); vel *= Math.pow(.05, dt); }
      /* pellets */
      for (let i = pels.length - 1; i >= 0; i--) {
        const p = pels[i];
        if (p.y < sd - 4) { p.y += p.vy * dt; p.ph += dt * 3; p.x = mod(p.x + Math.sin(p.ph) * dt * 10, WW); }
        else if ((p.rest += dt) > 6) { p.el.remove(); pels.splice(i, 1); continue; }
        p.el.style.transform = `translate(${screenX(p.x)}px,${p.y}px)`; p.el.style.opacity = p.rest > 4 ? String(1 - (p.rest - 4) / 2) : '';
      }
      if (!reduce) {
        /* fish: chase the nearest pellet within reach, otherwise drift around home (their grade's zone) */
        swimmers.forEach(f => {
          f.ph += dt * 2;
          const cx = f.x + f.size / 2, cy = f.y + f.hgt / 2;
          let best = -1, bd = 1e9;
          pels.forEach((p, i) => { const d = Math.hypot(wdx(p.x, cx), p.y - cy); if (d < bd) { bd = d; best = i; } });
          if (best >= 0 && bd < Math.max(260, W() * .45)) {
            const p = pels[best], sp = f.speed * 2.2 + 28, dx = wdx(p.x, cx), dy = p.y - cy, n = Math.hypot(dx, dy) || 1;
            f.vx = (dx / n) * sp || f.vx; f.x += f.vx * dt; f.y += (dy / n) * sp * dt; f.ty = 0;
            if (n < Math.max(14, f.size * .4)) eat(f, best);
          } else {
            if (Math.abs(f.vx) > f.speed * 1.05) f.vx = Math.sign(f.vx) * f.speed;   // calm down after a meal
            const home = wdx(zoneX(f.zone), cx);
            if (Math.abs(home) > zoneW * .45 && Math.sign(home) !== Math.sign(f.vx)) f.vx = -f.vx;   // turn back towards home
            f.x += f.vx * dt;
            if (Math.random() < dt * .15) f.ty = 30 + Math.random() * Math.max(10, sd - 70 - f.hgt);
            if (f.ty) f.y += (f.ty - f.y) * dt * .6;
            if (Math.random() < dt * .04 && Math.abs(home) < zoneW * .3) f.vx = -f.vx;
          }
        });
        /* keep apart: two fish that overlap push each other away (mostly up/down, so they pass instead of piling up) */
        for (let i = 0; i < swimmers.length; i++) for (let j = i + 1; j < swimmers.length; j++) {
          const a = swimmers[i], b = swimmers[j];
          const dx = wdx(b.x + b.size / 2, a.x + a.size / 2), dy = (b.y + b.hgt / 2) - (a.y + a.hgt / 2);
          const minX = (a.size + b.size) * .48, minY = (a.hgt + b.hgt) * .55;
          if (Math.abs(dx) < minX && Math.abs(dy) < minY) {
            const push = (1 - Math.abs(dy) / minY) * 60 * dt, sy = dy >= 0 ? 1 : -1, sx = dx >= 0 ? 1 : -1;
            a.y -= sy * push; b.y += sy * push; a.x -= sx * push * .4; b.x += sx * push * .4; a.ty = b.ty = 0;
          }
        }
        swimmers.forEach(f => { f.x = mod(f.x, WW); f.y = Math.max(34, Math.min(sd - f.hgt * .7, f.y)); });
        /* the turtle crosses the whole tank slowly, round and round */
        turtle.x = mod(turtle.x + turtle.vx * dt, WW);
        if (Math.random() < dt * .02) turtle.y = sd * (.4 + Math.random() * .3);
      }
      drawWorld();
      if ((mapT += dt) > .2) { mapT = 0; drawMap(); }
      if (on) raf = requestAnimationFrame(step);
    };
    turtle.x = mod(camX - 60, WW);
    drawWorld(); drawMap();
    raf = requestAnimationFrame(step);
    /* stop when the tank is off screen or the tab is hidden */
    const go = v => { if (v && !on) { on = true; last = performance.now(); raf = requestAnimationFrame(step); } else if (!v) { on = false; cancelAnimationFrame(raf); } };
    if ('IntersectionObserver' in window) new IntersectionObserver(es => go(es[0].isIntersecting)).observe(el);
    document.addEventListener('visibilitychange', () => go(document.visibilityState === 'visible'));
    window.__aq = { fishes, get camX() { return camX; }, get WW() { return WW; }, glide, zoneX };   // test hook
  };
})();
