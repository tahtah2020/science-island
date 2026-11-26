/* Owner tool: one command for a release.
   Run from the site folder:
     node tools/release.js                       checks the questions and bumps the cache stamp in every page
     node tools/release.js --title "…" --item "…" --item "…" [--link "label|href|ch"]
                                                  also adds a dated entry at the top of changes.js (a --link goes with the item before it)
     node tools/release.js --dry                  shows what would change, writes nothing
   Steps: 1) node tools/check_questions.js must end with "all good" (stops otherwise)
          2) the stamp ?v=YYYYMMDDtHHMMSS (UTC) is set in every .html page: unique for every release
          3) the optional changes.js entry
   It does not commit or push: review with "git diff --stat", then commit. */
const fs = require('fs'), path = require('path'), { execFileSync } = require('child_process');
const ROOT = path.join(__dirname, '..');
const args = process.argv.slice(2), dry = args.includes('--dry');

// 1) questions
try { execFileSync('node', [path.join(__dirname, 'check_questions.js')], { cwd: ROOT, stdio: 'pipe' }); console.log('✓ questions: all good'); }
catch (e) { console.log(String(e.stdout || '').split('\n').filter(l => !/ideas \(/.test(l)).join('\n')); console.log('✗ questions check failed, nothing was changed'); process.exit(1); }

// 2) cache stamp
const pages = fs.readdirSync(ROOT).filter(f => f.endsWith('.html'));
/* stamp = YYYYMMDD + 't' + HHMMSS (UTC): unique for every release, also when several sessions release on the same day
   (the old one-letter stamp ran past «z» into «{» on 26 Nov 2026 and two sessions once shared «c», so phones kept an old common.js).
   STAMP_RE also matches the old forms (a letter, digits, stray «{») so they are cleaned up. */
const STAMP_RE = /\?v=\d{8}[a-z0-9{]*/g;
const stamps = new Set(); pages.forEach(f => (fs.readFileSync(path.join(ROOT, f), 'utf8').match(STAMP_RE) || []).forEach(s => stamps.add(s.slice(3))));
const d = new Date(), p2 = n => String(n).padStart(2, '0');
const day = `${d.getFullYear()}${p2(d.getMonth() + 1)}${p2(d.getDate())}`;
const stamp = `${d.getUTCFullYear()}${p2(d.getUTCMonth() + 1)}${p2(d.getUTCDate())}t${p2(d.getUTCHours())}${p2(d.getUTCMinutes())}${p2(d.getUTCSeconds())}`;
let changed = 0, refs = 0;
pages.forEach(f => {
  const p = path.join(ROOT, f), src = fs.readFileSync(p, 'utf8');
  const out = src.replace(STAMP_RE, () => { refs++; return '?v=' + stamp; });
  if (out !== src) { changed++; if (!dry) fs.writeFileSync(p, out); }
});
const missing = pages.filter(f => /src="(common|chapters)\.js"/.test(fs.readFileSync(path.join(ROOT, f), 'utf8')));
console.log(`✓ stamp ${[...stamps].join(', ') || '(none)'} → ${stamp}: ${refs} links in ${changed} of ${pages.length} pages`);
if (missing.length) console.log('! pages loading common.js or chapters.js without a stamp: ' + missing.join(', '));

// 3) changes.js entry
const title = (args[args.indexOf('--title') + 1] && args.includes('--title')) ? args[args.indexOf('--title') + 1] : null;
if (title) {
  const items = []; args.forEach((a, i) => {
    if (a === '--item') items.push({ text: args[i + 1] });
    if (a === '--link' && items.length) { const [label, href, ch] = args[i + 1].split('|'); const L = items[items.length - 1].links = items[items.length - 1].links || []; L.push(Object.assign({ label, href }, ch ? { ch } : {})); }
  });
  const q = s => "'" + String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'";
  const item = it => `      { text: ${q(it.text)}${it.links ? `, links: [${it.links.map(l => `{ label: ${q(l.label)}, href: ${q(l.href)}${l.ch ? `, ch: ${q(l.ch)}` : ''} }`).join(', ')}]` : ''} }`;
  const date = `${day.slice(0, 4)}-${day.slice(4, 6)}-${day.slice(6)}`;
  const entry = `  { date: '${date}', title: ${q(title)},\n    items: [\n${(items.length ? items : [{ text: title }]).map(item).join(',\n')}\n    ] },\n`;
  const p = path.join(ROOT, 'changes.js'), src = fs.readFileSync(p, 'utf8'), at = src.indexOf('window.CHANGES = [');
  if (at < 0) { console.log('✗ changes.js: "window.CHANGES = [" not found'); process.exit(1); }
  const cut = src.indexOf('\n', at) + 1;
  if (!dry) fs.writeFileSync(p, src.slice(0, cut) + entry + src.slice(cut));
  try { if (!dry) { const w = {}; new Function('window', fs.readFileSync(p, 'utf8'))(w); if (!Array.isArray(w.CHANGES)) throw 0; } console.log(`✓ changes.js: "${title}" with ${items.length || 1} item(s)`); }
  catch (e) { fs.writeFileSync(p, src); console.log('✗ changes.js would not load; restored'); process.exit(1); }
}
console.log(dry ? '(dry run: nothing written)' : 'Next: git diff --stat, update README.md if needed, then commit and push.');
