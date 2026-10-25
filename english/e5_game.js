/* Shared scene and helpers for the English Grade 5 games of Units 4-6 (english-town.html, english-resources.html, english-everglades.html).
   Loaded after english/g5_art.js and game_kit.js. window.E5Game(opts) makes the kit game and returns small helpers:
     set(mode, o)   the scene: 'set' (a six-picture card of g5_art.js, o.key), 'card' (lines of text, '___' = a gap), 'word' (one big word), 'photo' (one of the owner's pictures, o.sub = a picture id or a file name, o.word = a caption)
     ask(...)       a question on the current scene · fillCard(...) a sentence with a gap on a card · sortCards(...) one card at a time with buttons ('@id' as the 4th item shows that picture)
     spotSet(key, id, ...) tap one picture of a six-picture card
   Rule (owner, 25 Oct 2026): the scene is set right before EVERY question, and it never shows the answer. */
(function () {
  'use strict';
  window.E5Game = function (opts) {
    const T = SI.T, G = SI.G, E = window.E5ART, D = window.CH_DIAGRAMS;
    const L = s => `<span dir="ltr">${s}</span>`;
    const kw = s => `<b class="kw">${s}</b>`;
    const VW = 340, VH = 300, FONT = 'Nunito, Cairo, sans-serif', INK = '#1f3d57';
    const sc = { mode: 'set', key: opts.setKey, fill: '', lines: [], word: '', sub: '' };
    const BASE = `<rect width="${VW}" height="${VH}" rx="14" fill="${opts.base || '#eef5fb'}"/>`;
    const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
    const txt = (x, y, s, o = {}) => `<text x="${x}" y="${y}" text-anchor="middle" direction="ltr" font-family="${FONT}" font-size="${o.fs || 24}" font-weight="${o.w || 800}" fill="${o.fill || INK}">${esc(s)}</text>`;
    const cardSvg = () => {
      let s = BASE + `<rect x="16" y="34" width="308" height="232" rx="20" fill="#fffaf0" stroke="#d8c9a6" stroke-width="3"/>`;
      const n = sc.lines.length, step = n > 4 ? 34 : 40, y0 = 154 - (n - 1) * step / 2;
      sc.lines.forEach((line, i) => {
        const parts = String(line).split('___'), y = y0 + i * step;
        const len = parts.join(sc.fill || '_____').length, fs = Math.min(23, Math.floor(284 / (len * .58)));
        if (parts.length === 1) { s += txt(170, y, line, { fs }); return; }
        const gap = sc.fill ? `<tspan fill="#2e9e6b">${esc(sc.fill)}</tspan>` : '<tspan fill="#e2603f">_____</tspan>';
        s += `<text x="170" y="${y}" text-anchor="middle" direction="ltr" font-family="${FONT}" font-size="${fs}" font-weight="800" fill="${INK}">${esc(parts[0])}${gap}${esc(parts[1])}</text>`;
      });
      return s;
    };
    const wordSvg = () => BASE + `<rect x="30" y="60" width="280" height="170" rx="24" fill="#fff" stroke="#d8c9a6" stroke-width="4"/>`
      + txt(170, 160, sc.word, { fs: Math.min(64, Math.floor(250 / (Math.max(4, sc.word.length) * .6))), w: 900, fill: '#23799f' });
    const photoSvg = () => {
      const k = sc.word ? 196 : 236, x = (VW - k) / 2, y = sc.word ? 30 : 32, file = E.PHOTO(sc.sub) || sc.sub;
      return BASE + `<rect x="${x - 8}" y="${y - 8}" width="${k + 16}" height="${k + 16}" rx="24" fill="#fff" stroke="#d8c9a6" stroke-width="3"/><clipPath id="phc"><rect x="${x}" y="${y}" width="${k}" height="${k}" rx="18"/></clipPath>`
        + `<image href="english/assets/${file}.jpg" x="${x}" y="${y}" width="${k}" height="${k}" clip-path="url(#phc)"/>` + (sc.word ? txt(170, 278, sc.word, { fs: Math.min(24, Math.floor(320 / (sc.word.length * .58))) }) : '');
    };
    function render() {
      const m = sc.mode;
      if (m === 'set') return BASE + `<g transform="translate(0 25)">${D[sc.key]({ pic: { plain: true } })}</g>`;
      if (m === 'card') return cardSvg();
      if (m === 'word') return wordSvg();
      if (m === 'photo') return photoSvg();
      return BASE;
    }
    const g = G4Game({ ch: opts.ch, logo: opts.logo, title: opts.title, sub: opts.sub, bg: opts.bg, bgc: opts.bgc, label: opts.label, render, view: [VW, VH] });
    const set = (mode, o) => { Object.assign(sc, { mode, key: sc.key, fill: '', lines: [], word: '', sub: '' }, o || {}); g.paint(); };
    const rings = key => { const r = D[key].rings(); return Object.keys(r).map(id => { const [x, y, w, h] = r[id]; return { id, name: E.NAMES[id], ring: E.ringEl(x + w / 2, y + h / 2 + 25, w / 2, h / 2) }; }); };
    async function spotSet(key, id, sayEn, sayAr, hintEn, hintAr, okEn, okAr) {
      set('set', { key });
      g.say(T(sayEn, sayAr), 'think');
      await g.spot(rings(key), id, { hint: T(hintEn, hintAr), ok: T(okEn, okAr) });
    }
    async function ask(sayEn, sayAr, options, correct, hintEn, hintAr, okEn, okAr) {
      g.say(T(sayEn, sayAr), 'think');
      await g.choice({ options, correct, hint: T(hintEn, hintAr), ok: T(okEn, okAr) });
    }
    async function fillCard(lines, options, correct, sayEn, sayAr, hintEn, hintAr, okEn, okAr) {
      set('card', { lines });
      g.say(T(sayEn, sayAr), 'think');
      await g.choice({ options, correct, hint: T(hintEn, hintAr), ok: T(okEn, okAr), reveal: () => { sc.fill = correct; g.paint(); } });
    }
    async function sortCards(buttons, cards, scene, prompt) {
      for (const [word, side, why, pic] of g.shuffle(cards)) {
        if (pic && pic[0] === '@') set('photo', { word, sub: pic.slice(1) });
        else if (scene === 'card') set('card', { lines: Array.isArray(word) ? word : [word] });
        else set('word', { word });
        g.say(prompt || T('Choose the right button.', 'اختار الزرار الصح.'), 'think');
        await g.pick({ buttons, correct: side, ok: T(`Yes! ${why}`, `صح! ${L(why)}`), no: T(`Not quite. ${why}`, `قرّبت. ${L(why)}`) });
      }
      g.setTray(null);
    }
    const missionFrom = () => Math.max(1, +new URLSearchParams(location.search).get('m') || 1);   // ?m=N opens the missions at mission N (owner's checks)
    return { g, T, G, E, D, L, kw, sc, set, spotSet, ask, fillCard, sortCards, missionFrom, P: (m, f) => G(m, f || m) };
  };
})();
