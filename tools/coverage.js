/* Owner tool: the coverage report of one chapter or unit, counted from its questions files (no counting by hand).
   Run from the site folder:
     node tools/coverage.js p2u1                      Arabic file if the chapter has one, else English
     node tools/coverage.js p2u1 --lang en
     node tools/coverage.js p2u1 --book 14,9,11,12    the school book's question count per lesson, for the comparison column
     node tools/coverage.js p2u1 --left "…" --left "…"  concepts left out (no printed answer, open-ended…), listed at the end
     node tools/coverage.js --all                     one line per chapter of the whole site
   Output: Markdown in Arabic, ready to paste into the chat. */
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '..'), args = process.argv.slice(2);
const opt = k => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : null; };
const many = k => args.reduce((a, x, i) => (x === k ? a.concat(args[i + 1]) : a), []);
const load = f => { const w = {}; new Function('window', fs.readFileSync(path.join(ROOT, f), 'utf8'))(w); return w; };
const CH = load('chapters.js').CHAPTERS;
const TYPE = { mc: 'اختيار', tf: 'صح/خطأ', fill: 'أكمل', multi: 'اختر كل الصحيح', order: 'رتّب', match: 'وصّل', tap: 'اضغط على الصورة', table: 'جدول', term: 'المصطلح', fix: 'صحّح', build: 'كوّن الإجابة' };
const BUILD = { why: 'علّل', whatif: 'ماذا يحدث لو', function: 'الوظيفة', define: 'عرّف' };
const typeOf = v => (v.type === 'build' && BUILD[v.style]) || (v.style === 'odd' ? 'المختلف' : TYPE[v.type] || v.type);

if (args.includes('--all')) {
  console.log('| المعرّف | الصف | العنوان | جاهز | الأفكار (أساسية) EN | AR | الصياغات EN | AR |\n|---|---|---|---|---|---|---|---|');
  CH.forEach(c => {
    const s = f => { if (!f || !fs.existsSync(path.join(ROOT, f))) return ['—', '—']; const I = load(f).IDEAS; return [`${I.length} (${I.filter(x => !x.bonus).length})`, I.reduce((n, x) => n + x.variants.length, 0)]; };
    const e = s(c.questions), a = s(c.questionsAr);
    if (e[0] === '—' && a[0] === '—') return;
    console.log(`| ${c.id} | ${c.grade || 'g5'} | ${c.titleAr || c.title} | ${c.ready ? '✓' : '—'} | ${e[0]} | ${a[0]} | ${e[1]} | ${a[1]} |`);
  });
  process.exit(0);
}

const id = args.find(a => !a.startsWith('--') && !args[args.indexOf(a) - 1]?.startsWith('--'));
const c = CH.find(x => x.id === id);
if (!c) { console.log('usage: node tools/coverage.js <chapter id> [--lang ar|en] [--book n,n,n] [--left "…"]   ·   ids: ' + CH.filter(x => x.questions || x.questionsAr).map(x => x.id).join(' ')); process.exit(1); }
const lang = opt('--lang') || (c.questionsAr ? 'ar' : 'en'), file = lang === 'ar' ? c.questionsAr : c.questions;
if (!file) { console.log(`${id} has no ${lang} questions file`); process.exit(1); }
const IDEAS = load(file).IDEAS, lessons = (lang === 'ar' && c.lessonsAr) || c.lessons || [];
const book = (opt('--book') || '').split(',').filter(Boolean).map(Number);
const word = c.grade && /^p/.test(c.grade) ? 'الوحدة' : 'الفصل';

const core = IDEAS.filter(I => !I.bonus), bonus = IDEAS.filter(I => I.bonus);
const nv = L => L.reduce((n, I) => n + I.variants.length, 0);
const out = [];
out.push(`## تقرير التغطية · ${word} «${c.titleAr || c.title}» (${lang === 'ar' ? 'عربي' : 'English'})`, '');
out.push(`**${core.length}** فكرة أساسية من الكتاب بـ **${nv(core)}** صياغة، و**${bonus.length}** فكرة إضافية بـ ${nv(bonus)} صياغة. أسئلة الزعيم: ${IDEAS.filter(I => I.boss).map(I => I.id).join('، ') || 'لا يوجد'}.`, '');

out.push('### عدد الأسئلة لكل درس', '', `| الدرس | أفكار أساسية | صياغات الموقع | أسئلة الكتاب |`, '|---|---|---|---|');
const nLessons = Math.max(lessons.length, ...IDEAS.map(I => I.lesson));
for (let l = 1; l <= nLessons; l++) {
  const L = core.filter(I => I.lesson === l);
  out.push(`| ${l}. ${lessons[l - 1] || ''} | ${L.length} | ${nv(L)} | ${book[l - 1] != null ? book[l - 1] : '—'} |`);
}
out.push(`| **المجموع** | **${core.length}** | **${nv(core)}** | ${book.length ? '**' + book.reduce((a, b) => a + b, 0) + '**' : '—'} |`, '');

out.push('### المفاهيم وطريقة تغطيتها', '');
for (let l = 1; l <= nLessons; l++) {
  const L = IDEAS.filter(I => I.lesson === l); if (!L.length) continue;
  out.push(`**الدرس ${l}: ${lessons[l - 1] || ''}**`, '');
  L.forEach(I => {
    const kinds = {}; I.variants.forEach(v => { const k = typeOf(v); kinds[k] = (kinds[k] || 0) + 1; });
    const tags = [I.boss ? '👑 زعيم' : '', I.bonus ? (I.guide ? '★ من الدليل' : '★ إثرائي') : ''].filter(Boolean).join(' · ');
    out.push(`- ${I.id} ${I.concept}${tags ? ' (' + tags + ')' : ''}: ${Object.entries(kinds).map(([k, n]) => n > 1 ? `${k} ×${n}` : k).join('، ')}`);
  });
  out.push('');
}

const timed = IDEAS.reduce((n, I) => n + I.variants.filter(v => v.mode === 'timed').length, 0);
const levels = {}; IDEAS.forEach(I => I.variants.forEach(v => { levels[v.level] = (levels[v.level] || 0) + 1; }));
out.push(`الصياغات بالوقت: ${timed} من ${nv(IDEAS)} (${Math.round(100 * timed / nv(IDEAS))}٪). المستويات: سهل ${levels.easy || 0}، متوسط ${levels.medium || 0}، صعب ${levels.hard || 0}.`, '');

const left = many('--left');
out.push('### مفاهيم لم تُغطَّ', '');
out.push(left.length ? left.map(s => '- ' + s).join('\n') : '- (اكتبها بـ --left: ما لم يُسأل عنه ولماذا)');
console.log(out.join('\n'));
