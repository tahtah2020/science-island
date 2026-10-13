/* Owner tool: prepares the files of a new chapter or unit, so the work starts from the content and not from setup.
   The chapter must already be listed in chapters.js (the "soon" entries are: ready: false, with its lessons).
   Run from the site folder:
     node tools/new_chapter.js p2u2                                   questions files (English + Arabic) and the chapters.js lines
     node tools/new_chapter.js p2u2 --lang ar                         Arabic file only
     node tools/new_chapter.js p2u2 --game reactlab.html --name "Reaction Lab|معمل التفاعلات" --icon ⚗️
                                                                      also a game page on the kit, its chapters.js entry, map and background names,
                                                                      and its page name for the statistics (PAGE_NAMES in common.js)
     node tools/new_chapter.js p2u2 --dry                             shows the plan, writes nothing
   It never overwrites a file that exists and never sets ready: true (that is the last step, after the checks). */
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '..'), args = process.argv.slice(2), dry = args.includes('--dry');
const opt = k => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : null; };
const rd = f => fs.readFileSync(path.join(ROOT, f), 'utf8');
const load = f => { const w = {}; new Function('window', rd(f))(w); return w; };
const write = (f, s) => { if (fs.existsSync(path.join(ROOT, f))) return console.log('· kept ' + f + ' (exists)'); if (!dry) fs.writeFileSync(path.join(ROOT, f), s); console.log('✓ ' + f); };

const CH = load('chapters.js').CHAPTERS, id = args[0], c = CH.find(x => x.id === id);
if (!c) { console.log('usage: node tools/new_chapter.js <chapter id> [--lang ar|en] [--game file.html --name "En|Ar" --icon 🧪] [--dry]\nnot ready yet: ' + CH.filter(x => !x.ready).map(x => x.id).join(' ')); process.exit(1); }
const grade = c.grade || 'g5', units = /^p/.test(grade), langs = opt('--lang') ? [opt('--lang')] : ['en', 'ar'];
const sameGrade = CH.filter(x => (x.grade || 'g5') === grade);
const prev = sameGrade.filter(x => x.ready && x.map).pop();

// idea letters already used in this grade
const used = {};
sameGrade.forEach(x => [x.questions, x.questionsAr].forEach(f => { if (f && fs.existsSync(path.join(ROOT, f))) load(f).IDEAS.forEach(I => { (used[I.id[0]] = used[I.id[0]] || new Set()).add(x.id); }); }));
const free = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').filter(L => !used[L]);
console.log(`${id} · ${c.title} / ${c.titleAr} · ${grade} · ${(c.lessons || []).length} lessons`);
console.log(`letters used in ${grade}: ${Object.keys(used).sort().map(L => `${L} (${[...used[L]].join(',')})`).join(' ')}`);
console.log(`free letters: ${free.join(' ')}  → pick one letter per lesson\n`);

// 1) questions files
const art = opt('--art') || [`${grade}_art.js`, prev && prev.art].find(f => f && fs.existsSync(path.join(ROOT, f))) || null;
const qf = { en: `questions_${id}.js`, ar: `questions_${id}_ar.js` };
const head = (lang) => {
  const ar = lang === 'ar', ls = (ar ? c.lessonsAr : c.lessons) || [];
  return `/* ${ar ? (c.titleAr || c.title) : c.title} · ${grade} · ${ar ? 'Arabic school book' : 'English school book'}, first term 2026/2027 (pages …)
   Lessons: ${ls.map((l, i) => `${i + 1} ${l}`).join(' · ')}
   Idea letters (one per lesson, unused in ${grade}): …
   Rules: answers of mc/fill at index 0 (the page shuffles) · one Boss idea per lesson (every variant mode:'boss') · about a third timed (10-20 s, easy recall)
          distractors = real misconceptions · term/fix answers ≤ 18 letters · core and Boss only from the school book (outside guide: bonus: true, guide: true)
   Template of one idea:
   { id: 'X1', lesson: 1, concept: '…', explain: '… (from the book)',
     variants: [
       { type: 'mc', mode: 'normal', level: 'easy', q: '…', options: ['right', 'wrong', 'wrong'], answer: 0 },
       { type: 'tf', mode: 'timed', seconds: 12, level: 'easy', q: '…', answer: 0 },
       { type: 'term', mode: 'normal', level: 'medium', q: 'the definition', answer: 'Term' }
     ] }, */
(function () {
${ar ? "const ltr = s => '\\u2066' + s + '\\u2069';\n" : ''}window.CHAPTER = { id: '${id}${ar ? '-ar' : ''}', title: ${JSON.stringify(ar ? c.titleAr || c.title : c.title)} };

window.IDEAS = [
${ls.map((l, i) => `  /* ---------- ${ar ? 'الدرس' : 'Lesson'} ${i + 1} · ${l} ---------- */\n`).join('\n')}
];
})();
`;
};
const isNew = {};
langs.forEach(l => { isNew[l] = !fs.existsSync(path.join(ROOT, qf[l])); write(qf[l], head(l)); });

// 2) chapters.js entry
let chs = rd('chapters.js');
const start = chs.indexOf(`{ id: '${id}'`); let end = start;
for (let depth = 0, i = start; i < chs.length; i++) { if (chs[i] === '{') depth++; if (chs[i] === '}' && --depth === 0) { end = i; break; } }
let entry = chs.slice(start, end);
const add = [];
if (langs.includes('en') && !/questions:/.test(entry)) add.push(`questions: '${qf.en}'`);
if (langs.includes('ar') && !/questionsAr:/.test(entry)) add.push(`questionsAr: '${qf.ar}'`);
if (art && !/\bart:/.test(entry)) add.push(`art: '${art}'`);
if (units && !/questMax:/.test(entry)) add.push('questMax: 24');
const game = opt('--game'), [nameEn, nameAr] = (opt('--name') || 'New Game|لعبة جديدة').split('|'), icon = opt('--icon') || c.icon || '🎮';
const lines = add.length ? ['    ' + add.join(', ') + ','] : [];
if (game && !/game:/.test(entry)) {
  lines.push(`    game: { href: '${game}', name: ${JSON.stringify(nameEn)}, nameAr: ${JSON.stringify(nameAr)}, icon: '${icon}', hint: '…', hintAr: '…' },`);
  lines.push(`    map: { img: 'assets/map_${id}.svg', stops: ${JSON.stringify(prev ? prev.map.stops : [[25, 82, 'right'], [62, 70, 'left'], [34, 53, 'right'], [65, 37, 'left'], [46, 16, 'below']]).replace(/,/g, ', ').replace(/"/g, "'")} },`);
  lines.push(`    cover: 'assets/map_${id}.svg', quizBg: 'assets/bg_${id}.svg',`);
}
if (lines.length) {
  const nl = entry.lastIndexOf('\n'), at = start + (nl >= 0 ? nl + 1 : entry.length);
  // the new lines go before the entry's last line, after a comma on the line above
  const before = chs.slice(0, at).replace(/\s*$/, m => m), body = before.endsWith(',\n') || before.endsWith(', \n') ? before : before.replace(/(\S)(\s*)$/, '$1,$2');
  chs = body + lines.join('\n') + '\n' + chs.slice(at);
  try { const w = {}; new Function('window', chs)(w); if (!w.CHAPTERS.find(x => x.id === id)) throw 0; } catch (e) { console.log('✗ chapters.js edit would break it; add these lines by hand:\n' + lines.join('\n')); process.exit(1); }
  if (!dry) fs.writeFileSync(path.join(ROOT, 'chapters.js'), chs);
  console.log('✓ chapters.js ' + id + ':\n' + lines.join('\n'));
} else console.log('· chapters.js already has the questions lines');

// 3) game page on the kit
if (game) {
  const stamp = (rd('index.html').match(/\?v=(\d{8}[a-z]?)/) || [])[1] || '';
  const v = stamp ? '?v=' + stamp : '';
  const n = c.n || '', unit = units ? ['Unit', 'الوحدة'] : ['Chapter', 'الفصل'];
  write(game, `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${nameEn} · ${c.title}</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@700;800;900&family=Nunito:wght@600;700;800;900&display=swap" rel="stylesheet">
<link rel="stylesheet" href="g4_game.css${v}">
</head>
<body>
<noscript>Please turn on JavaScript to play ${nameEn}.</noscript>
<script src="firebase-config.js${v}"></script>
<script src="chapters.js${v}"></script>
<script src="common.js${v}"></script>
${art ? `<script src="${art}${v}"></script>\n` : ''}<script src="g4_game.js${v}"></script>
<script>
(() => {
'use strict';
/* ${nameEn} · the game of ${c.title} (${grade}). Built on the shared game kit (g4_game.js).
   Stage 1 (Warm Up): … (book pages …)
   Stage 2 (Missions): … (pages …)
   Stage 3 (Speed Round): … (pages …)
   Every T('English', 'عربي') has both languages. The Arabic science sentences follow the Arabic school book. */
const T = SI.T, G = SI.G;
const P = (m, f) => G(m, f || m);   // Arabic for a boy / for a girl
const sc = { mode: 'start' };       // what the scene shows
const VW = 420, VH = 280;          // the kit's default scene size (pass view: [w, h] to G4Game to change it)
function render() {               // the SVG of the scene, drawn in code from sc
  return \`<rect width="\${VW}" height="\${VH}" fill="#eef6fb"/>\`;
}
const g = G4Game({ ch: '${id}', logo: '${icon}', title: [${JSON.stringify(nameEn)}, ${JSON.stringify(nameAr)}], sub: ['${unit[0]} ${n} · ${c.title.replace(/'/g, "\\'")}', '${unit[1]} ${n} · ${(c.titleAr || '').replace(/'/g, "\\'")}'],
  bg: 'assets/bg_${id}.svg', bgc: '${c.tint || '#eef6fb'}', label: [${JSON.stringify(nameEn)}, ${JSON.stringify(nameAr)}], render });

async function stage1() {
  g.say(T('…', P('…')), 'point'); await g.next();
}
async function stage2() {
  const right = T('right', 'صح');   // correct is the text of the right option
  await g.choice({ options: [right, T('wrong', 'غلط')], correct: right, hint: T('Look again.', 'بص تاني.'), ok: T('Yes!', 'برافو!') });
}
async function stage3() {
  await g.speedRound({ items: [{ t: T('…', '…'), ans: 'a' }], rounds: 1, buttons: [{ label: 'A', value: 'a', c: 0 }, { label: 'B', value: 'b', c: 2 }],
    ask: T('A or B?', 'أ ولا ب؟'), intro: T('Speed Round!', 'جولة السرعة!'), think: T('A or B?', 'أ ولا ب؟') });
}

g.run({
  intro: T(\`Hi, <b>\${g.name()}</b>! …\`, \`أهلًا يا <b>\${g.name()}</b>! …\`),
  stages: [{ name: T('Warm Up', 'التسخين'), fn: stage1 }, { name: T('Missions', 'المهمات'), fn: stage2 }, { name: T('Speed Round', 'جولة السرعة'), fn: stage3 }],
  done: { title: T('Well done!', P('برافو عليك!', 'برافو عليكي!')), text: T('…', '…') }
}).catch(err => console.error(err));
})();
</script>
</body>
</html>
`);
  let common = rd('common.js');
  if (!common.includes(`'${game}':`)) {
    common = common.replace("const PAGE_NAMES = { ", `const PAGE_NAMES = { '${game}': ${JSON.stringify(nameEn)}, `);
    if (!dry) fs.writeFileSync(path.join(ROOT, 'common.js'), common);
    console.log(`✓ common.js PAGE_NAMES: '${game}'`);
  }
}

console.log(`
Still by hand:
 1. write the ideas in ${langs.map(l => qf[l]).join(' and ')} (from the book pages)
 2. new tap pictures → ${art || '<grade>_art.js'} (window.CH_DIAGRAMS), their targets in TAPS (tools/check_questions.js), Arabic labels in TAP (admin.html)
 3. ${game ? `the scene and stages of ${game}; ` : ''}map and background: assets/map_${id}.svg, assets/bg_${id}.svg from tools/make_${grade.replace(/\d/, '')}*_maps.js
 4. a monthly test that includes it? window.EXAMS in chapters.js
 5. node tools/check_questions.js → node tools/smoke_test.js ${id} → set ready: true → node tools/release.js --title "…" --item "…"
 6. node tools/coverage.js ${id} --book … --left "…" for the report, and update README.md`);
