#!/usr/bin/env node
/* Static lesson pages for search engines (SEO + GEO).
   Reads chapters.js and each ready chapter's Arabic questions file, writes:
     lessons/<subject>-<grade>-<chapter>-l<N>.html   one page per lesson (title, key ideas, sample Q&A, FAQPage schema)
     lessons/<subject>-<grade>.html                  hub per grade and subject
     lessons/index.html                              hub of everything
     sitemap.xml, llms.txt
   Run from the repo root:  node tools/make_seo_pages.js
   Safe to re-run: the lessons/ folder is rebuilt from scratch. Only chapters marked ready: true are used.
   The pages hold our own practice questions and the concept names, never the textbook's text. */
const fs = require('fs'), path = require('path'), vm = require('vm');
const ROOT = path.resolve(__dirname, '..');
const SITE = 'https://motafawek.com';
const TODAY = new Date().toISOString().slice(0, 10);
const MAX_Q = 8;

function load(file) {
  const ctx = { window: {}, console };
  ctx.window.window = ctx.window;
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(path.join(ROOT, file), 'utf8'), ctx, { filename: file });
  return ctx.window;
}

const W = load('chapters.js');
const SUBJECTS = W.SUBJECTS || [];
const CHAPTERS = W.CHAPTERS || [];
const GRADES = { g4: 'الصف الرابع الابتدائي', g5: 'الصف الخامس الابتدائي', g6: 'الصف السادس الابتدائي', p1: 'الصف الأول الإعدادي', p2: 'الصف الثاني الإعدادي' };
const GRADE_ORDER = ['g4', 'g5', 'g6', 'p1', 'p2'];
const UNIT_GRADES = { p1: true, p2: true };
const subj = c => c.subject || 'science';
const grade = c => c.grade || 'g5';
/* people search "علوم الصف الخامس" (no «ال»), so titles use the subject the way a search is written */
const SUBJ_SEARCH = { science: 'علوم', math: 'رياضيات', studies: 'دراسات اجتماعية', arabic: 'لغة عربية', english: 'لغة إنجليزية' };
const subjAr = id => SUBJ_SEARCH[id] || ((SUBJECTS.find(s => s.id === id) || {}).titleAr) || id;
const isUnits = c => !!UNIT_GRADES[grade(c)] || ['math', 'studies', 'english'].includes(subj(c));
const unitWord = c => (isUnits(c) ? 'الوحدة' : 'الفصل');

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const jsonLd = o => JSON.stringify(o).replace(/</g, '\\u003c');
const hash = s => { let h = 7; for (const ch of String(s)) h = (h * 31 + ch.codePointAt(0)) >>> 0; return h; };
function shuffled(arr, seed) {
  const a = arr.map((v, i) => [v, i]); let h = hash(seed);
  for (let i = a.length - 1; i > 0; i--) { h = (h * 1103515245 + 12345) >>> 0; const j = h % (i + 1); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}

/* ---------- choose the practice questions of one lesson ---------- */
const PICTURE = /الصورة|الشكل|الرسم|المخطط|الخريطة|الجدول/;
function plainOk(v) {
  if (!v || v.pic || v.fig || v.diagram || v.img || v.image) return false;
  if (PICTURE.test(v.q || '')) return false;
  if (typeof v.answer !== 'number' && v.type !== 'term') return false;
  if (v.type === 'mc') return Array.isArray(v.options) && v.options.length >= 2 && v.answer >= 0 && v.answer < v.options.length;
  if (v.type === 'fill') return Array.isArray(v.options) && /___/.test(v.q) && v.answer >= 0 && v.answer < v.options.length;
  if (v.type === 'tf') return v.answer === 0 || (v.answer === 1 && !!v.explain);
  if (v.type === 'term') return typeof v.answer === 'string' && v.answer.length > 0 && v.answer.length <= 40;
  return false;
}
const RANK = { mc: 0, fill: 1, term: 2, tf: 3 };
function pick(idea) {
  const c = (idea.variants || []).filter(plainOk);
  if (!c.length) return null;
  c.sort((a, b) => (a.style ? 1 : 0) - (b.style ? 1 : 0) || (a.mode === 'timed' ? 1 : 0) - (b.mode === 'timed' ? 1 : 0) || RANK[a.type] - RANK[b.type]);
  return c[0];
}
function qa(v, seed) {
  if (v.type === 'mc') {
    const opts = shuffled(v.options, seed).map(([t]) => t);
    return { q: v.q, options: opts, a: v.options[v.answer], why: v.explain || '' };
  }
  if (v.type === 'fill') return { q: 'أكمل: ' + v.q, a: v.options[v.answer], why: v.explain || '', filled: v.q.replace('___', v.options[v.answer]) };
  if (v.type === 'term') return { q: v.q + ' ما المصطلح العلمي؟', a: v.answer, why: v.explain || '' };
  return { q: 'صح أم خطأ؟ ' + v.q, a: v.answer === 0 ? 'صحيحة' : 'خاطئة', why: v.explain || '' };
}

/* ---------- page shell ---------- */
const CSS = `:root{--navy:#1f3d57;--ink:#3a5c75;--primary:#23799f;--mint:#bfe8d6;--coral:#e2603f;--gold:#f2b134;--bg:#f4faf8;--card:#fff}
*{box-sizing:border-box}html{-webkit-text-size-adjust:100%}
body{margin:0;background:var(--bg);color:var(--ink);font:17px/1.8 Cairo,Tahoma,"Segoe UI",Arial,sans-serif}
a{color:var(--primary)}
.wrap{max-width:760px;margin:0 auto;padding:16px}
header.top{background:var(--navy);color:#fff}header.top .wrap{display:flex;align-items:center;justify-content:space-between;gap:12px}
header.top a{color:#fff;text-decoration:none;font-weight:800}
nav.crumbs{font-size:14px;margin:8px 0}nav.crumbs a{text-decoration:none}
h1{color:var(--navy);font-size:26px;line-height:1.4;margin:.4em 0}
h2{color:var(--navy);font-size:21px;margin:1.4em 0 .4em}
.lead{background:var(--card);border-radius:14px;padding:14px 16px;border:1px solid #dcebe6}
.cta{display:inline-block;background:var(--coral);color:#fff!important;text-decoration:none;font-weight:800;padding:12px 22px;border-radius:999px;margin:12px 0}
.q{background:var(--card);border-radius:14px;padding:12px 16px;margin:12px 0;border:1px solid #dcebe6}
.q h3{margin:0 0 6px;font-size:18px;color:var(--navy)}
.q ol{margin:.3em 0;padding-inline-start:1.4em}
.ans{background:#e8f7ef;border-radius:10px;padding:6px 12px;margin:8px 0 2px;font-weight:700;color:#1d6b49}
.why{font-size:15px;margin:4px 0 0}
ul.links{padding-inline-start:1.2em}ul.links li{margin:.25em 0}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:10px;padding:0;list-style:none}
.grid a{display:block;background:var(--card);border:1px solid #dcebe6;border-radius:12px;padding:10px 14px;text-decoration:none;font-weight:700}
footer{font-size:14px;margin:28px 0 12px;color:#5d7a8d}`;

function shell({ title, desc, url, body, schema }) {
  return `<!doctype html>
<html lang="ar" dir="rtl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${SITE}${url}">
<meta name="robots" content="index,follow,max-image-preview:large">
<meta name="theme-color" content="#23799f">
<meta property="og:type" content="article">
<meta property="og:site_name" content="متفوّق · Motafawek">
<meta property="og:locale" content="ar_EG">
<meta property="og:url" content="${SITE}${url}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:image" content="${SITE}/assets/banner.jpg">
<meta name="twitter:card" content="summary_large_image">
<script type="application/ld+json">${jsonLd({ '@context': 'https://schema.org', '@graph': schema })}</script>
<style>${CSS}</style>
</head>
<body>
<header class="top"><div class="wrap"><a href="/">متفوّق · Motafawek</a><a href="/lessons/">كل الدروس</a></div></header>
<main class="wrap">
${body}
<footer>متفوّق موقع للتعلم باللعب لطلاب المنهج المصري. هذه أسئلة تدريبية من إعدادنا مرتبطة بدروس الكتاب المدرسي، وليست نصوص الكتاب.</footer>
</main>
<script>
(function(){try{if(location.protocol!=='https:'||/^(localhost|127\\.)/.test(location.hostname))return;
window.dataLayer=window.dataLayer||[];window.gtag=function(){dataLayer.push(arguments)};gtag('js',new Date());
gtag('config','G-XP595P45PX',{allow_google_signals:false,allow_ad_personalization_signals:false});
var s=document.createElement('script');s.async=true;s.src='https://www.googletagmanager.com/gtag/js?id=G-XP595P45PX';document.head.appendChild(s)}catch(e){}})();
</script>
</body>
</html>
`;
}

const ORG = { '@type': 'Organization', '@id': SITE + '/#org', name: 'متفوّق · Motafawek', url: SITE + '/', logo: SITE + '/assets/parrot_wave.png', sameAs: ['https://t.me/motafawek'] };
const EDU = { educationalUse: 'practice', learningResourceType: 'أسئلة تدريبية بالإجابات', audience: { '@type': 'EducationalAudience', educationalRole: 'student' }, isAccessibleForFree: true, publisher: { '@id': SITE + '/#org' }, educationalAlignment: { '@type': 'AlignmentObject', alignmentType: 'educationalSubject', targetName: 'المنهج المصري - الترم الأول 2026/2027' } };
const crumbs = list => '<nav class="crumbs" aria-label="مسار التصفح">' + list.map(([n, u]) => (u ? `<a href="${u}">${esc(n)}</a>` : esc(n))).join(' › ') + '</nav>';
const breadcrumbSchema = list => ({ '@type': 'BreadcrumbList', itemListElement: list.map(([n, u], i) => ({ '@type': 'ListItem', position: i + 1, name: n, item: SITE + (u || '') })).filter(x => x.item !== SITE) });

/* ---------- build ---------- */
const out = path.join(ROOT, 'lessons');
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });

const FULL = [];             // every page's Q&A, written to llms-full.txt
const pages = [];            // { url, priority }
const hubs = {};             // 'subject-grade' -> { subject, grade, units: [...] }
let skipped = [];
const ideasByCh = {};        // chapter id -> its Arabic ideas (used by unit and monthly-test pages)

for (const c of CHAPTERS) {
  if (!c.ready || subj(c) === 'english' || !c.questionsAr) continue;
  let IDEAS;
  try { IDEAS = load(c.questionsAr).IDEAS || []; } catch (e) { skipped.push(c.id + ' (' + e.message + ')'); continue; }
  ideasByCh[c.id] = IDEAS;
  const lessons = c.lessonsAr || [];
  const g = grade(c), s = subj(c);
  const key = s + '-' + g;
  const hub = hubs[key] || (hubs[key] = { s, g, units: [] });
  const unit = { c, lessons: [] };
  hub.units.push(unit);

  lessons.forEach((lessonName, li) => {
    const n = li + 1;
    const ideas = IDEAS.filter(i => !i.bonus && i.lesson === n);
    const items = [];
    for (const idea of ideas) {
      const v = pick(idea); if (!v) continue;
      items.push(qa(v, c.id + idea.id));
      if (items.length >= MAX_Q) break;
    }
    if (items.length < 3) { skipped.push(`${c.id} lesson ${n}: only ${items.length} usable questions`); return; }
    const concepts = ideas.map(i => i.concept).filter(Boolean);
    const slug = `${s}-${g}-${c.id}-l${n}`;
    const url = `/lessons/${slug}.html`;
    unit.lessons.push({ n, name: lessonName, url });

    const gradeAr = GRADES[g], subAr = subjAr(s), uw = unitWord(c);
    const title = `أسئلة على درس ${lessonName} ${subAr} ${gradeAr} ترم أول 2027 بالإجابات | متفوّق`;
    const desc = `أسئلة تدريبية بالإجابات على درس ${lessonName} من ${uw} ${c.titleAr} في ${subAr} ${gradeAr} (المنهج المصري، الترم الأول)، ثم العب واختبر نفسك مع ريشو.`;
    const bc = [['الرئيسية', '/'], ['الدروس', '/lessons/'], [`${subAr} ${gradeAr}`, `/lessons/${key}.html`], [lessonName, null]];

    const qHtml = items.map((it, i) => `<section class="q">
<h3>${i + 1}. ${esc(it.q)}</h3>
${it.options ? '<ol>' + it.options.map(o => `<li>${esc(o)}</li>`).join('') + '</ol>' : ''}
<div class="ans">الإجابة: ${esc(it.a)}</div>
${it.why ? `<p class="why">${esc(it.why)}</p>` : ''}
</section>`).join('\n');

    const sib = unit.lessons; // filled progressively; final nav added after the loop
    const body = `${crumbs(bc)}
<h1>أسئلة على درس ${esc(lessonName)} ${esc(subAr)} ${esc(gradeAr)} – ترم أول</h1>
<p class="lead">هذه الصفحة للطالب وولي الأمر: أسئلة تدريبية بإجاباتها على درس <strong>${esc(lessonName)}</strong> من ${uw} «${esc(c.titleAr)}» في ${esc(subAr)} ${esc(gradeAr)}، للمنهج المصري. جرّب أن تجيب أولًا ثم اقرأ الإجابة.</p>
<a class="cta" href="/index.html">العب هذا الدرس مع ريشو</a>
${items.length ? `<p class="lead"><strong>الخلاصة:</strong> ${esc(items[0].filled || (items[0].q + ' الإجابة: ' + items[0].a))}.</p>` : ''}
${concepts.length ? `<h2>أهم ما يغطيه الدرس</h2>\n<ul class="links">${concepts.map(x => `<li>${esc(x)}</li>`).join('')}</ul>` : ''}
<h2>أسئلة تدريبية بالإجابات</h2>
${qHtml}
<a class="cta" href="/index.html">أكمل التدريب باللعب: أسئلة يومية ومراجعة وامتحان شهري</a>
<!--LESSON_NAV-->`;

    const schema = [
      { '@type': 'WebSite', '@id': SITE + '/#site', url: SITE + '/', name: 'متفوّق · Motafawek', inLanguage: 'ar', publisher: { '@id': SITE + '/#org' } }, ORG,
      breadcrumbSchema(bc),
      { '@type': 'WebPage', '@id': SITE + url, url: SITE + url, name: title, description: desc, inLanguage: 'ar-EG', isPartOf: { '@id': SITE + '/#site' }, dateModified: TODAY, about: `${lessonName} - ${subAr} - ${gradeAr}`, ...EDU, educationalLevel: gradeAr, teaches: concepts },
      { '@type': 'FAQPage', mainEntity: items.map(it => ({ '@type': 'Question', name: it.q, acceptedAnswer: { '@type': 'Answer', text: it.a + (it.why ? ' — ' + it.why : '') } })) }
    ];
    fs.writeFileSync(path.join(out, slug + '.html'), shell({ title, desc, url, body, schema }));
    pages.push({ url, priority: '0.7' });
    FULL.push({ title, url, items });
  });
}

/* ---------- unit tests and monthly reviews: pages that match how people search ("اختبار على الفصل الأول", "مراجعة شهر أكتوبر") ---------- */
const MAX_BIG = 15;
const ORD_M = ['', 'الأول', 'الثاني', 'الثالث', 'الرابع', 'الخامس', 'السادس', 'السابع', 'الثامن', 'التاسع', 'العاشر'];
const ORD_F = ['', 'الأولى', 'الثانية', 'الثالثة', 'الرابعة', 'الخامسة', 'السادسة', 'السابعة', 'الثامنة', 'التاسعة', 'العاشرة'];

function gatherItems(parts, max) {
  const per = [];
  for (const p of parts) {
    const ideas = ideasByCh[p.ch], ch = CHAPTERS.find(x => x.id === p.ch);
    if (!ideas || !ch) continue;
    const only = p.lessons ? new Set(p.lessons) : null;
    for (let n = 1; n <= (ch.lessonsAr || []).length; n++) {
      if (only && !only.has(n)) continue;
      const list = [];
      for (const idea of ideas.filter(i => !i.bonus && i.lesson === n)) { const v = pick(idea); if (v) list.push(qa(v, p.ch + idea.id)); }
      if (list.length) per.push(list);
    }
  }
  const out = [];
  for (let r = 0; out.length < max; r++) {
    let any = false;
    for (const l of per) { if (r < l.length) { out.push(l[r]); any = true; if (out.length >= max) break; } }
    if (!any) break;
  }
  return out;
}
const renderQs = items => items.map((it, i) => `<section class="q">
<h3>${i + 1}. ${esc(it.q)}</h3>
${it.options ? '<ol>' + it.options.map(o => `<li>${esc(o)}</li>`).join('') + '</ol>' : ''}
<div class="ans">الإجابة: ${esc(it.a)}</div>
${it.why ? `<p class="why">${esc(it.why)}</p>` : ''}
</section>`).join('\n');
function writeBigPage({ slug, title, desc, h1, lead, bc, items, extra, about, priority }) {
  const url = `/lessons/${slug}.html`;
  const body = `${crumbs(bc)}
<h1>${esc(h1)}</h1>
<p class="lead">${lead}</p>
<a class="cta" href="/index.html">العب واختبر نفسك مع ريشو</a>
<h2>أسئلة تدريبية بالإجابات</h2>
${renderQs(items)}
<a class="cta" href="/index.html">أكمل التدريب باللعب: أسئلة يومية ومراجعة وامتحان شهري</a>
${extra || ''}`;
  const schema = [
    { '@type': 'WebSite', '@id': SITE + '/#site', url: SITE + '/', name: 'متفوّق · Motafawek', inLanguage: 'ar', publisher: { '@id': SITE + '/#org' } }, ORG,
    breadcrumbSchema(bc),
    { '@type': 'WebPage', '@id': SITE + url, url: SITE + url, name: title, description: desc, inLanguage: 'ar-EG', isPartOf: { '@id': SITE + '/#site' }, dateModified: TODAY, about, ...EDU },
    { '@type': 'FAQPage', mainEntity: items.map(it => ({ '@type': 'Question', name: it.q, acceptedAnswer: { '@type': 'Answer', text: it.a + (it.why ? ' — ' + it.why : '') } })) }
  ];
  fs.writeFileSync(path.join(out, slug + '.html'), shell({ title, desc, url, body, schema }));
  pages.push({ url, priority: priority || '0.8' });
  FULL.push({ title, url, items });
  return url;
}

/* one test page per unit */
for (const hub of Object.values(hubs)) {
  const gradeAr = GRADES[hub.g], subAr = subjAr(hub.s), key = hub.s + '-' + hub.g;
  hub.exams = [];
  for (const unit of hub.units) {
    const c = unit.c;
    const items = gatherItems([{ ch: c.id }], MAX_BIG);
    if (items.length < 8 || !unit.lessons.length) continue;
    const uw = unitWord(c), ord = (uw === 'الوحدة' ? ORD_F : ORD_M)[c.n] || String(c.n);
    const name = `اختبار على ${uw} ${ord} ${subAr} ${gradeAr}`;
    const title = `${name} ترم أول 2027 بالإجابات | متفوّق`;
    const desc = `${name} (المنهج المصري، الترم الأول) بأسئلة وإجابات على كل دروس ${uw} «${c.titleAr}»، مع ألعاب للمراجعة.`;
    const bc = [['الرئيسية', '/'], ['الدروس', '/lessons/'], [`${subAr} ${gradeAr}`, `/lessons/${key}.html`], [`${uw} ${ord}`, null]];
    const url = writeBigPage({
      slug: `${key}-${c.id}`, title, desc, h1: `${name} – ترم أول`, bc, items,
      lead: `اختبار تدريبي بالإجابات على ${uw} ${ord} «${esc(c.titleAr)}» في ${esc(subAr)} ${esc(gradeAr)}، يغطي دروس ${uw === 'الوحدة' ? 'الوحدة' : 'الفصل'} كلها. جرّب أن تجيب أولًا ثم اقرأ الإجابة.`,
      extra: `<h2>دروس ${uw} «${esc(c.titleAr)}»</h2>\n<ul class="links">${unit.lessons.map(x => `<li><a href="${x.url}">${esc(x.name)}</a></li>`).join('')}</ul>`,
      about: `${c.titleAr} - ${subAr} - ${gradeAr}`
    });
    unit.page = { url, name: `${name} – ترم أول` };
  }
}

/* one monthly-review page per monthly test */
for (const e of (W.EXAMS || [])) {
  const s = e.subject || 'science', g = e.grade || 'g5';
  if (s === 'english') continue;
  const hub = hubs[s + '-' + g]; if (!hub) continue;
  const parts = (e.parts || []).filter(p => ideasByCh[p.ch]);
  const items = gatherItems(parts, MAX_BIG);
  if (items.length < 8) { skipped.push(`exam ${e.id}: only ${items.length} usable questions`); continue; }
  const gradeAr = GRADES[g], subAr = subjAr(s), key = s + '-' + g;
  const label = /أكتوبر/.test(e.titleAr) ? 'مراجعة شهر أكتوبر' : 'مراجعة ' + e.titleAr;
  const name = `${label} ${subAr} ${gradeAr}`;
  const title = `${name} ترم أول 2027 بالإجابات | متفوّق`;
  const desc = `${name} (المنهج المصري، الترم الأول): أسئلة تدريبية بالإجابات على المقرر، ثم العب واختبر نفسك قبل امتحان الشهر.`;
  const covered = parts.map(p => { const ch = CHAPTERS.find(x => x.id === p.ch); const ls = (ch.lessonsAr || []).filter((_, i) => !p.lessons || p.lessons.includes(i + 1)); return `<li>${unitWord(ch)} «${esc(ch.titleAr)}»: ${ls.map(esc).join('، ')}</li>`; }).join('');
  const bc = [['الرئيسية', '/'], ['الدروس', '/lessons/'], [`${subAr} ${gradeAr}`, `/lessons/${key}.html`], [label, null]];
  const url = writeBigPage({
    slug: `${key}-review-${e.id}`, title, desc, h1: `${name} – ترم أول`, bc, items,
    lead: `مراجعة تدريبية بالإجابات للمقرر في ${esc(subAr)} ${esc(gradeAr)}. هذه أسئلة من إعدادنا وليست الامتحان الرسمي، والمقرر الرسمي تحدده مدرستك.`,
    extra: `<h2>ما تغطيه هذه المراجعة</h2>\n<ul class="links">${covered}</ul>`,
    about: `${label} - ${subAr} - ${gradeAr}`, priority: '0.9'
  });
  hub.exams.push({ url, name: `${label} – ${subAr} ${gradeAr}` });
}

/* previous / next links inside each unit, written after all lessons of the unit exist */
for (const hub of Object.values(hubs)) {
  for (const unit of hub.units) {
    for (const l of unit.lessons) {
      const file = path.join(out, l.url.split('/').pop());
      const nav = `${unit.page ? `<p><a href="${unit.page.url}">${esc(unit.page.name)}</a></p>\n` : ''}<h2>دروس ${unitWord(unit.c)} «${esc(unit.c.titleAr)}»</h2>\n<ul class="links">${unit.lessons.map(x => `<li>${x.n === l.n ? '<strong>' + esc(x.name) + '</strong>' : `<a href="${x.url}">${esc(x.name)}</a>`}</li>`).join('')}</ul>\n<p><a href="/lessons/${hub.s}-${hub.g}.html">كل دروس ${esc(subjAr(hub.s))} ${esc(GRADES[hub.g])}</a></p>`;
      fs.writeFileSync(file, fs.readFileSync(file, 'utf8').replace('<!--LESSON_NAV-->', nav));
    }
  }
}

/* hubs */
const hubKeys = Object.keys(hubs).filter(k => hubs[k].units.some(u => u.lessons.length))
  .sort((a, b) => GRADE_ORDER.indexOf(hubs[a].g) - GRADE_ORDER.indexOf(hubs[b].g) || a.localeCompare(b));
for (const k of hubKeys) {
  const { s, g, units } = hubs[k];
  const gradeAr = GRADES[g], subAr = subjAr(s), url = `/lessons/${k}.html`;
  const title = `أسئلة ${subAr} ${gradeAr} بالإجابات – كل الدروس | متفوّق`;
  const desc = `أسئلة تدريبية بالإجابات على دروس ${subAr} ${gradeAr} (المنهج المصري، الترم الأول) مرتبة حسب الكتاب المدرسي، مع ألعاب وامتحان شهري.`;
  const bc = [['الرئيسية', '/'], ['الدروس', '/lessons/'], [`${subAr} ${gradeAr}`, null]];
  const exams = hubs[k].exams || [];
  const examHtml = exams.length ? `<h2>مراجعة قبل الامتحان</h2>\n<ul class="links">${exams.map(x => `<li><a href="${x.url}">${esc(x.name)}</a></li>`).join('')}</ul>\n` : '';
  const list = examHtml + units.filter(u => u.lessons.length).map(u => `<h2>${unitWord(u.c)} ${u.c.n}: ${esc(u.c.titleAr)}</h2>\n<ul class="links">${u.page ? `<li><a href="${u.page.url}"><strong>${esc(u.page.name)}</strong></a></li>` : ''}${u.lessons.map(l => `<li><a href="${l.url}">${esc(l.name)}</a></li>`).join('')}</ul>`).join('\n');
  const body = `${crumbs(bc)}\n<h1>أسئلة ${esc(subAr)} ${esc(gradeAr)} بالإجابات</h1>\n<p class="lead">اختر الدرس لتجد أسئلة تدريبية بإجاباتها، ثم العب واختبر نفسك مع ريشو.</p>\n<a class="cta" href="/index.html">ابدأ اللعب</a>\n${list}`;
  const schema = [{ '@type': 'WebSite', '@id': SITE + '/#site', url: SITE + '/', name: 'متفوّق · Motafawek', inLanguage: 'ar', publisher: { '@id': SITE + '/#org' } }, ORG, breadcrumbSchema(bc),
    { '@type': 'CollectionPage', '@id': SITE + url, url: SITE + url, name: title, description: desc, inLanguage: 'ar-EG', isPartOf: { '@id': SITE + '/#site' } }];
  fs.writeFileSync(path.join(out, k + '.html'), shell({ title, desc, url, body, schema }));
  pages.push({ url, priority: '0.8' });
}

{
  const url = '/lessons/', bc = [['الرئيسية', '/'], ['الدروس', null]];
  const title = 'أسئلة وألعاب لكل دروس المنهج المصري: علوم ورياضيات ودراسات | متفوّق';
  const desc = 'اختر صفك ومادتك لتجد أسئلة تدريبية بالإجابات على كل درس في المنهج المصري من الصف الرابع الابتدائي إلى الثاني الإعدادي.';
  const byGrade = GRADE_ORDER.map(g => {
    const ks = hubKeys.filter(k => hubs[k].g === g); if (!ks.length) return '';
    return `<h2>${esc(GRADES[g])}</h2>\n<ul class="grid">${ks.map(k => `<li><a href="/lessons/${k}.html">${esc(subjAr(hubs[k].s))} – ${esc(GRADES[g])}</a></li>`).join('')}</ul>`;
  }).join('\n');
  const body = `${crumbs(bc)}\n<h1>أسئلة وألعاب لكل دروس المنهج المصري</h1>\n<p class="lead">متفوّق موقع للتعلم باللعب. اختر صفك ومادتك لتصل إلى أسئلة كل درس بالإجابات.</p>\n${byGrade}`;
  const schema = [{ '@type': 'WebSite', '@id': SITE + '/#site', url: SITE + '/', name: 'متفوّق · Motafawek', inLanguage: 'ar', publisher: { '@id': SITE + '/#org' } }, ORG, breadcrumbSchema(bc),
    { '@type': 'CollectionPage', '@id': SITE + url, url: SITE + url, name: title, description: desc, inLanguage: 'ar-EG', isPartOf: { '@id': SITE + '/#site' } }];
  fs.writeFileSync(path.join(out, 'index.html'), shell({ title, desc, url, body, schema }));
  pages.push({ url, priority: '0.9' });
}

/* sitemap.xml */
const urls = [{ url: '/', priority: '1.0', freq: 'weekly' }, ...pages.map(p => ({ ...p, freq: 'monthly' })), { url: '/contact.html', priority: '0.3', freq: 'yearly' }];
fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  urls.map(u => `  <url><loc>${SITE}${u.url}</loc><lastmod>${TODAY}</lastmod><changefreq>${u.freq}</changefreq><priority>${u.priority}</priority></url>`).join('\n') + '\n</urlset>\n');

/* llms.txt: a plain summary for AI assistants */
fs.writeFileSync(path.join(ROOT, 'llms.txt'), `# متفوّق · Motafawek

> موقع للتعلم باللعب لطلاب المنهج المصري من الصف الرابع الابتدائي إلى الثاني الإعدادي: ألعاب وأسئلة تفاعلية في العلوم والرياضيات والدراسات الاجتماعية، مع ريشو البغبغان.

## الدروس والأسئلة التدريبية بالإجابات
- [كل الدروس](${SITE}/lessons/)
${hubKeys.map(k => `- [${subjAr(hubs[k].s)} ${GRADES[hubs[k].g]}](${SITE}/lessons/${k}.html)`).join('\n')}

## الموقع
- [الصفحة الرئيسية](${SITE}/)
- [أولياء الأمور والمعلمون](${SITE}/contact.html)

## نسخة كاملة
- [كل الأسئلة بالإجابات كنص واحد](${SITE}/llms-full.txt)
`);

/* llms-full.txt: every practice question with its answer, as plain text for AI assistants */
fs.writeFileSync(path.join(ROOT, 'llms-full.txt'), `# متفوّق · Motafawek: الأسئلة التدريبية بالإجابات (المنهج المصري، الترم الأول 2026/2027)\n\n> أسئلة تدريبية من إعدادنا مرتبطة بدروس الكتاب المدرسي. المصدر: ${SITE}/lessons/\n\n` +
  FULL.map(f => `## ${f.title.replace(/ \| متفوّق$/, '')}\n${SITE}${f.url}\n\n` + f.items.map((it, i) => `${i + 1}. ${it.q}${it.options ? '\n   الاختيارات: ' + it.options.join(' / ') : ''}\n   الإجابة: ${it.a}${it.why ? '\n   التوضيح: ' + it.why : ''}`).join('\n')).join('\n\n') + '\n');

/* home page: crawlable links to every grade/subject hub (between the SEO_LINKS markers in index.html) */
{
  const f = path.join(ROOT, 'index.html'), h = fs.readFileSync(f, 'utf8');
  const block = `<!--SEO_LINKS-->
    <h3>أسئلة بالإجابات على كل درس</h3>
    <ul>
      <li><a href="/lessons/">كل الدروس والأسئلة التدريبية بالإجابات</a></li>
${hubKeys.map(k => `      <li><a href="/lessons/${k}.html">${esc(subjAr(hubs[k].s))} ${esc(GRADES[hubs[k].g])}</a></li>`).join('\n')}
    </ul>
    <!--/SEO_LINKS-->`;
  const re = /<!--SEO_LINKS-->[\s\S]*?<!--\/SEO_LINKS-->/;
  if (re.test(h)) fs.writeFileSync(f, h.replace(re, () => block));
  else console.log('index.html: SEO_LINKS markers missing, home links not written');
}

console.log(`lesson pages: ${pages.filter(p => p.priority === '0.7').length}, hubs: ${hubKeys.length} + index, sitemap urls: ${urls.length}`);
if (skipped.length) console.log('skipped:\n  ' + skipped.join('\n  '));
