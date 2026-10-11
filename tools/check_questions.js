/* Owner tool (not part of the game): checks every questions*.js file before a release.
   Run from the site folder:  node tools/check_questions.js
   It checks: ids (one capital letter + number, never used twice in a language), answers inside their lists, tap targets that
   exist in the drawings, table columns that are all used, cards of a "build" answer that are all different, the underlined
   word of a "fix" question, and that each Arabic file mirrors its English file (same ideas, same phrasings, same answers).
   When a chapter adds tap pictures, add their targets to TAPS below. */
const fs = require('fs'), path = require('path'), ROOT = process.argv[2] || path.join(__dirname, '..');
const TAPS = { armBent: ['in', 'out'], armStraight: ['in', 'out'], armJoints: ['shoulder', 'elbow', 'wrist'], skeleton: ['skull', 'ribs', 'backbone'], plantYear: ['sprout', 'flower', 'fruit', 'wither'], lizardSummer: ['rock', 'crevice', 'sand'], lizardWinter: ['rock', 'crevice', 'sand'],
  seedParts: ['coat', 'embryo', 'cotyledon'], iodineSeeds: ['ungerminated', 'germinated'], cupsWater: ['A', 'B'], cupsAir: ['A', 'B'], cupsTemp: ['A', 'B'] };
let bad = 0; const allIds = {};
for (const f of fs.readdirSync(ROOT).filter(f => /^questions.*\.js$/.test(f))) {
  const w = {}; new Function('window', fs.readFileSync(path.join(ROOT, f), 'utf8'))(w);
  const err = m => { bad++; console.log(f + ': ' + m); };
  const lang = /_ar\.js$/.test(f) ? 'ar' : 'en', ids = new Set();
  let nv = 0, core = 0;
  w.IDEAS.forEach(I => {
    if (!/^[A-Z]\d+$/.test(I.id)) err('bad id ' + I.id);
    if (ids.has(I.id)) err('duplicate id ' + I.id); ids.add(I.id);
    const k = lang + ':' + I.id; if (allIds[k]) err(`id ${I.id} also in ${allIds[k]}`); allIds[k] = f;
    if (!I.bonus) core++;
    if (!I.explain || !I.concept) err(I.id + ' no explain/concept');
    I.variants.forEach((v, i) => {
      nv++; const at = `${I.id}.${i + 1}`;
      if (!v.q) err(at + ' no q'); if (!v.level) err(at + ' no level');
      if (v.mode === 'timed' && !v.seconds) err(at + ' timed without seconds');
      if (I.boss && v.mode !== 'boss') err(at + ' boss idea, variant not boss');
      const idx = (a, n) => Number.isInteger(a) && a >= 0 && a < n;
      if (v.type === 'tf') { if (![0, 1].includes(v.answer)) err(at + ' tf answer'); }
      else if (v.type === 'mc' || v.type === 'fill') { if (!idx(v.answer, v.options.length)) err(at + ' answer range'); if (new Set(v.options).size !== v.options.length) err(at + ' duplicate options'); if (v.type === 'fill' && !v.q.includes('___')) err(at + ' fill without gap'); }
      else if (v.type === 'multi') { if (!v.answer.length || !v.answer.every(a => idx(a, v.options.length)) || v.answer.length >= v.options.length) err(at + ' multi answer'); }
      else if (v.type === 'order') { if (v.answer.slice().sort().join() !== v.items.map((_, i) => i).join()) err(at + ' order answer'); }
      else if (v.type === 'match') { if (v.answer.length !== v.left.length || !v.answer.every(a => idx(a, v.right.length))) err(at + ' match answer'); }
      else if (v.type === 'table') { if (v.answer.length !== v.items.length || !v.answer.every(a => idx(a, v.cols.length))) err(at + ' table answer'); if (new Set(v.items).size !== v.items.length) err(at + ' table duplicate items'); v.cols.forEach((_, c) => { if (!v.answer.includes(c)) err(at + ' empty column'); }); }
      else if (v.type === 'tap') { if (!TAPS[v.diagram] || !TAPS[v.diagram].includes(v.answer)) err(at + ' tap target'); }
      else if (v.type === 'fix') { if (!v.q.includes(v.wrong)) err(at + ' wrong word not in sentence'); if (!v.answer) err(at + ' fix answer'); if ([...v.answer].filter(c => /\p{L}/u.test(c)).length > 18) err(at + ' answer too long for tiles'); }
      else if (v.type === 'term') { if (!v.answer || [...v.answer].filter(c => /\p{L}/u.test(c)).length > 18) err(at + ' term answer'); }
      else if (v.type === 'build') { const all = v.parts.concat(v.extra || []); if (new Set(all).size !== all.length) err(at + ' duplicate cards'); if (v.parts.length < 2) err(at + ' too few parts'); if (!v.style) err(at + ' build without style'); }
      else err(at + ' unknown type ' + v.type);
    });
  });
  console.log(`${f}: ${w.IDEAS.length} ideas (${core} core), ${nv} phrasings`);
}
// EN/AR parity
for (const [en, ar] of [['questions.js', 'questions_ar.js'], ['questions_ch2.js', 'questions_ch2_ar.js']]) {
  const L = f => { const w = {}; new Function('window', fs.readFileSync(path.join(ROOT, f), 'utf8'))(w); return w.IDEAS; };
  const E = L(en), A = L(ar);
  E.forEach((I, k) => { const J = A[k]; if (!J || J.id !== I.id) { bad++; return console.log('parity id', en, I.id); }
    if (J.variants.length !== I.variants.length) { bad++; console.log('parity count', I.id); }
    I.variants.forEach((v, i) => { const u = J.variants[i]; if (u && (u.type !== v.type || JSON.stringify(u.answer) !== JSON.stringify(v.answer)) && !['term', 'fix'].includes(v.type)) { bad++; console.log('parity', I.id + '.' + (i + 1), v.type, u.type); } }); });
}
console.log(bad ? bad + ' PROBLEMS' : 'all good');
process.exit(bad ? 1 : 0);
