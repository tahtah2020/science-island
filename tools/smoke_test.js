/* Owner tool: plays the site in a headless browser and reports only what is wrong (screenshots only of failures).
   Run from the site folder:
     node tools/smoke_test.js p2u1                 one chapter, every language it has
     node tools/smoke_test.js p2u1 g6c3 --lang ar  several chapters, one language
     node tools/smoke_test.js --all                every ready chapter (slow)
     node tools/smoke_test.js p2u1 --quick         phone portrait only, game skipped
     node tools/smoke_test.js p2u1 --game-only     only plays the game
   For each chapter and language it:
     1) renders every phrasing of the questions file in quiz.html (window.__quiz.ask) on a phone (390×844), a landscape phone (844×390)
        and a laptop (1366×768), and checks: no script error, the question text is not empty, nothing wider than the screen;
     2) plays the chapter's game to the results panel by clicking [data-right] and [data-next] (games on the kit game_kit.js;
        the three older games arm.html, seasons.html, seedlab.html are only opened and checked for errors).
   Failures are saved in tools/smoke_out/ (ignored by git). Needs Playwright (already in the Claude workspace). */
const fs = require('fs'), path = require('path'), http = require('http');
const ROOT = path.join(__dirname, '..'), OUT = path.join(__dirname, 'smoke_out');
let pw; try { pw = require('playwright'); } catch (e) { pw = require('/opt/npm-tools/node_modules/playwright'); }
const args = process.argv.slice(2), quick = args.includes('--quick'), gameOnly = args.includes('--game-only');
const langOpt = (args[args.indexOf('--lang') + 1] || '').match(/^(ar|en)$/) && args.includes('--lang') ? args[args.indexOf('--lang') + 1] : null;
const load = f => { const w = {}; new Function('window', fs.readFileSync(path.join(ROOT, f), 'utf8'))(w); return w; };
const CH = load('chapters.js').CHAPTERS;
const ids = args.includes('--all') ? CH.filter(c => c.ready).map(c => c.id) : args.filter((a, i) => !a.startsWith('--') && args[i - 1] !== '--lang');
if (!ids.length) { console.log('usage: node tools/smoke_test.js <chapter id>… [--lang ar|en] [--quick] | --all'); process.exit(1); }
const PAR = Math.max(1, +(process.argv.find(a => /^--par=\d+$/.test(a)) || '--par=6').slice(6));   // checks run at the same time
const SIZES = quick ? [[390, 844]] : [[390, 844], [844, 390], [1366, 768]];
const KIT_GAMES_SKIP = ['arm.html', 'seasons.html', 'seedlab.html'];

// a tiny static server on a free port
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.mp3': 'audio/mpeg', '.json': 'application/json' };
const server = http.createServer((q, r) => {
  const f = path.join(ROOT, decodeURIComponent(q.url.split('?')[0].split('#')[0]).replace(/^\/+/, '') || 'index.html');
  if (!f.startsWith(ROOT) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { r.writeHead(404); return r.end(); }
  r.writeHead(200, { 'Content-Type': TYPES[path.extname(f)] || 'application/octet-stream' }); fs.createReadStream(f).pipe(r);
});

(async () => {
  await new Promise(r => server.listen(0, '127.0.0.1', r));
  const BASE = `http://127.0.0.1:${server.address().port}/`;
  fs.rmSync(OUT, { recursive: true, force: true }); fs.mkdirSync(OUT, { recursive: true });
  const browser = await pw.chromium.launch();
  let problems = 0; const t0 = Date.now();
  const fail = async (page, name, msg) => { problems++; console.log('  ✗ ' + name + ': ' + msg); if (page) await page.screenshot({ path: path.join(OUT, name.replace(/[^\w.-]+/g, '_') + '.png') }).catch(() => {}); };

  async function open(c, lang, w, h, url, fast) {
    const ctx = await browser.newContext({ viewport: { width: w, height: h }, reducedMotion: fast ? 'reduce' : 'no-preference' });   // games: shorter animations
    await ctx.route('**/*', r => r.request().url().startsWith(BASE) ? r.continue() : r.abort());   // no Firebase, fonts or analytics
    await ctx.route(/\/chapters\.js(\?|$)/, r => r.fulfill({ contentType: 'text/javascript',   // a chapter under test opens even before ready: true
      body: fs.readFileSync(path.join(ROOT, 'chapters.js'), 'utf8') + `\n;(window.CHAPTERS || []).forEach(c => { if (c.id === ${JSON.stringify(c.id)}) c.ready = true; });` }));
    const player = { name: 'Test', grade: c.grade || 'g5', track: lang === 'ar' ? 'ar' : 'lang', g: 'm', seen: Date.now() };
    await ctx.addInitScript(([p, ch, subj]) => {
      if (localStorage.getItem('si.v2')) return;
      localStorage.setItem('si.v2', JSON.stringify({ players: { t1: p }, current: 't1', profiles: { t1: { cur: ch, subj: subj } }, tg: { no: Date.now() } }));
    }, [player, c.id, c.subject || 'science']);
    const page = await ctx.newPage(), errors = [];
    page.on('pageerror', e => errors.push(e.message));
    page.on('console', m => { if (m.type() === 'error' && !/Failed to load resource|ERR_FAILED|net::/.test(m.text())) errors.push(m.text()); });
    await page.goto(BASE + url, { waitUntil: 'load' });
    return { ctx, page, errors };
  }

  /* every check is a separate job (one questions pass per screen size, one game), run several at a time */
  const jobs = [];
  for (const id of ids) {
    const c = CH.find(x => x.id === id);
    if (!c) { console.log(`? ${id}: not in chapters.js`); problems++; continue; }
    /* lang = the player's track (ar = Arabic track, en = Languages track); the subject decides which file that track reads */
    const SL = ((load('chapters.js').SUBJECTS || []).find(s => s.id === (c.subject || 'science')) || {}).lang;
    const fileFor = l => ((SL ? SL[l === 'ar' ? 'ar' : 'lang'] === 'ar' : l === 'ar') ? c.questionsAr : c.questions);
    for (const lang of ['en', 'ar'].filter(l => fileFor(l) && (!langOpt || langOpt === l))) {
      const all = []; load(fileFor(lang)).IDEAS.forEach(I => I.variants.forEach((v, vi) => all.push(Object.assign({ id: I.id, lesson: I.lesson, concept: I.concept, explain: I.explain, vi }, I.bonus ? { src: 'bonus' } : {}, I.boss ? { boss: true } : {}, v))));
      if (!gameOnly) SIZES.forEach(([w, h]) => jobs.push(() => quiz(c, lang, all, w, h)));
      if (c.game && c.game.href && !quick) jobs.push(() => play(c, lang, c.game.href));
    }
  }

  async function quiz(c, lang, all, w, h) {
    const { ctx, page, errors } = await open(c, lang, w, h, 'quiz.html#quest');
    let bad = 0;
    try {
      await page.waitForSelector('#start', { timeout: 8000 });
      page.click('#start').catch(() => {});   // never awaited: the quest keeps running behind
      await page.waitForFunction(() => window.__quiz && document.querySelector('#area'), null, { timeout: 8000 });
      for (const q of all) {
        const tag = `${c.id}.${lang}.${q.id}.${q.vi + 1}@${w}x${h}`, before = errors.length;
        await page.evaluate(q => {   // the timer of the question shown before is stopped first, as the real page does
          const last = setInterval(() => {}, 1e6); for (let i = 1; i <= last; i++) clearInterval(i);
          document.querySelectorAll('.overlay').forEach(o => o.remove()); window.__quiz.ask(q); }, q);
        await page.waitForTimeout(60);
        const r = await page.evaluate(() => ({ wide: document.documentElement.scrollWidth - innerWidth, text: (document.querySelector('#qtext') || {}).textContent || '', area: (document.querySelector('#area') || {}).childElementCount || 0 }));
        if (errors.length > before) { bad++; await fail(page, tag, 'script error: ' + errors.slice(before).join(' | ')); }
        else if (r.wide > 1) { bad++; await fail(page, tag, `wider than the screen by ${r.wide}px`); }
        else if (!r.text.trim() || !r.area) { bad++; await fail(page, tag, 'empty question or answer area'); }
      }
      if (!bad) console.log(`  ✓ ${c.id} ${lang} questions @${w}x${h}: ${all.length} phrasings`);
    } catch (e) { await fail(page, `${c.id}.${lang}.quiz@${w}x${h}`, e.message.split('\n')[0]); }
    await ctx.close();
  }

  async function play(c, lang, game) {
    const { ctx, page, errors } = await open(c, lang, 390, 844, game, true);
    const tag = `${c.id}.${lang}.${game}`;
    try {
      if (KIT_GAMES_SKIP.includes(game)) {
        await page.waitForTimeout(1500);
        if (errors.length) await fail(page, tag, 'script error: ' + errors.join(' | '));
        else console.log(`  · ${c.id} ${lang} ${game}: older game, opened without errors (not played automatically)`);
      } else {
        const end = Date.now() + 180000; let clicks = 0;
        while (Date.now() < end) {
          if (await page.$('#resultsPanel')) break;
          let b = null;   // "Next" first: a right answer already tapped keeps its data-right
          for (const s of ['[data-next]:visible', '#start:visible', 'button[data-right]:not([disabled]):visible', '.hot[data-right]:visible'])
            if ((b = await page.$(s))) break;
          if (b) {   // a tap spot is clicked in the page: rings drawn one inside another share the same centre
            if (await b.evaluate(e => e.classList.contains('hot'))) await b.evaluate(e => e.dispatchEvent(new MouseEvent('click', { bubbles: true })));
            else await b.click({ timeout: 2000 }).catch(() => {});
            clicks++;
          }
          await page.waitForTimeout(b ? 150 : 250);
        }
        const res = await page.evaluate(() => window.__g4 ? { score: window.__g4.score, mistakes: window.__g4.mistakes } : null);
        const wide = await page.evaluate(() => document.documentElement.scrollWidth - innerWidth);
        if (!(await page.$('#resultsPanel'))) await fail(page, tag, `did not reach the results panel (${clicks} clicks)`);
        else if (errors.length) await fail(page, tag, 'script error: ' + errors.join(' | '));
        else if (wide > 1) await fail(page, tag, `wider than the screen by ${wide}px`);
        else console.log(`  ✓ ${c.id} ${lang} ${game}: results panel, score ${res && res.score}, mistakes ${res && res.mistakes}, ${clicks} clicks`);
      }
    } catch (e) { await fail(page, tag, e.message.split('\n')[0]); }
    await ctx.close();
  }

  console.log(`${jobs.length} checks, ${PAR} at a time`);
  let next = 0;
  await Promise.all(Array.from({ length: PAR }, async () => { while (next < jobs.length) await jobs[next++](); }));
  await browser.close(); server.close();
  console.log(problems ? `${problems} PROBLEMS (screenshots in tools/smoke_out/)` : `all good (${Math.round((Date.now() - t0) / 1000)} s)`);
  process.exit(problems ? 1 : 0);
})().catch(e => { console.error(e); server.close(); process.exit(1); });
