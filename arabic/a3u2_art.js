/* الصف الثالث · اللغة العربية · الوحدة الثانية «صفاتي الجميلة» · رسوم مرسومة بالكود (صاحب الموقع لم يرسل صورًا لهذه الوحدة).
   الملف قائم بذاته (common.js يحمّل ملف art واحدًا لكل وحدة).
   a3Count: أشياء مرسومة بعددها الدقيق (لأن الإجابة تعتمد على العدد): q.pic = { kind: 'pencil' | 'rose' | 'worker' | 'cup', n, label }.
   a3Face: وجه يعبّر عن شعور: q.pic = { mood: 'happy' | 'sad' | 'angry' | 'surprised', label }.
   a3Photo: صور صاحب الموقع (Gemini): q.pic = { src: [...], label }.
   الوصف الصوتي label يصف الرسم ولا يذكر الإجابة (العدد أو الشعور) أبدًا. كل رسم يقبل q.pic.plain (الرسم الداخلي فقط للألعاب). */
(function () {
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const K = '#1f3d57', W = 340, H = 170;

  const pencil = x => `<g transform="translate(${x} 88) rotate(-28)"><ellipse cy="66" rx="20" ry="5" fill="#000" opacity=".08"/>`
    + `<rect x="-9" y="-56" width="18" height="84" rx="2" fill="#f2b134" stroke="${K}" stroke-width="3"/>`
    + `<rect x="-9" y="-56" width="18" height="12" rx="2" fill="#ee7a57" stroke="${K}" stroke-width="3"/>`
    + `<path d="M-9 28h18l-9 24z" fill="#fde0bd" stroke="${K}" stroke-width="3" stroke-linejoin="round"/><path d="M-3.5 42h7l-3.5 10z" fill="${K}"/></g>`;
  const rose = x => `<g transform="translate(${x} 92)"><ellipse cy="64" rx="22" ry="5" fill="#000" opacity=".08"/>`
    + `<path d="M0 -4v66" stroke="#3f8f4c" stroke-width="5" stroke-linecap="round"/>`
    + `<path d="M0 40q-22 -2 -24 -18q18 0 24 18z" fill="#8dcf7a" stroke="#3f8f4c" stroke-width="2.5" stroke-linejoin="round"/>`
    + `<path d="M0 30q22 -2 24 -18q-18 0 -24 18z" fill="#8dcf7a" stroke="#3f8f4c" stroke-width="2.5" stroke-linejoin="round"/>`
    + `<circle cy="-22" r="26" fill="#e2603f" stroke="${K}" stroke-width="3"/><circle cy="-22" r="16" fill="#ee7a57" stroke="#b9432a" stroke-width="2.5"/>`
    + `<path d="M-8 -22q8 -12 16 0q-8 10 -16 0z" fill="#b9432a"/></g>`;
  const worker = x => `<g transform="translate(${x} 96)"><ellipse cy="62" rx="24" ry="5" fill="#000" opacity=".08"/>`
    + `<path d="M-20 60v-42q0 -16 20 -16t20 16v42z" fill="#f2b134" stroke="${K}" stroke-width="3" stroke-linejoin="round"/><path d="M-10 6l10 14l10 -14" fill="none" stroke="${K}" stroke-width="2.5"/>`
    + `<rect x="-17" y="-2" width="34" height="9" fill="#fff6dc" opacity=".7"/>`
    + `<circle cy="-22" r="15" fill="#e7b98f" stroke="${K}" stroke-width="3"/><path d="M-17 -26q17 -26 34 0z" fill="#ffd34d" stroke="${K}" stroke-width="3" stroke-linejoin="round"/><rect x="-19" y="-27" width="38" height="6" rx="3" fill="#f2b134" stroke="${K}" stroke-width="2.5"/>`
    + `<circle cx="-5" cy="-17" r="1.8" fill="${K}"/><circle cx="5" cy="-17" r="1.8" fill="${K}"/><path d="M-5 -10q5 4 10 0" fill="none" stroke="${K}" stroke-width="2" stroke-linecap="round"/></g>`;
  const cup = x => `<g transform="translate(${x} 100)"><ellipse cy="58" rx="26" ry="5" fill="#000" opacity=".08"/>`
    + `<path d="M-24 -44h48l-7 100h-34z" fill="#e8f6fc" stroke="${K}" stroke-width="3" stroke-linejoin="round" opacity=".95"/>`
    + `<path d="M-21 -8h42l-4 64h-34z" fill="#9ed8f0" opacity=".7"/><path d="M-14 -34l3 80" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".8"/></g>`;
  const KINDS = { pencil, rose, worker, cup };

  function a3Count(q) {
    const p = (q && q.pic) || {}, draw = KINDS[p.kind] || pencil, n = Math.max(1, Math.min(6, p.n || 1));
    const gap = Math.min(78, (W - 40) / n);
    let s = `<rect width="${W}" height="${H}" rx="14" fill="#fbf6e6"/><rect x="14" y="146" width="${W - 28}" height="5" rx="2.5" fill="#e4d6b4"/>`;
    for (let i = 0; i < n; i++) s += draw(W / 2 + (i - (n - 1) / 2) * gap);
    return (p.plain) ? s : `<svg class="diagram" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(p.label || 'صورة للسؤال')}">${s}</svg>`;
  }

  function a3Face(q) {
    const p = (q && q.pic) || {}, m = p.mood || 'happy', cx = W / 2, cy = 88;
    let s = `<rect width="${W}" height="${H}" rx="14" fill="#fbf6e6"/><circle cx="${cx}" cy="${cy}" r="66" fill="#ffd966" stroke="${K}" stroke-width="4"/>`;
    const eye = (x, r) => `<circle cx="${x}" cy="${cy - 10}" r="${r}" fill="${K}"/>`;
    if (m === 'happy') {
      s += `<path d="M${cx - 38} ${cy - 16}q10 -14 24 0M${cx + 14} ${cy - 16}q10 -14 24 0" fill="none" stroke="${K}" stroke-width="5" stroke-linecap="round"/>`
        + `<path d="M${cx - 34} ${cy + 14}q34 44 68 0z" fill="#fff" stroke="${K}" stroke-width="4" stroke-linejoin="round"/>`
        + `<circle cx="${cx - 44}" cy="${cy + 10}" r="9" fill="#ff9fb2" opacity=".6"/><circle cx="${cx + 44}" cy="${cy + 10}" r="9" fill="#ff9fb2" opacity=".6"/>`;
    } else if (m === 'sad') {
      s += eye(cx - 26, 6) + eye(cx + 26, 6)
        + `<path d="M${cx - 40} ${cy - 28}l24 8M${cx + 40} ${cy - 28}l-24 8" stroke="${K}" stroke-width="4.5" stroke-linecap="round"/>`
        + `<path d="M${cx - 26} ${cy + 36}q26 -26 52 0" fill="none" stroke="${K}" stroke-width="5" stroke-linecap="round"/>`
        + `<path d="M${cx - 30} ${cy + 2}q-5 14 0 20q6 -6 0 -20z" fill="#8fd3ee" stroke="${K}" stroke-width="1.8"/>`;
    } else if (m === 'angry') {
      s += `<path d="M${cx - 42} ${cy - 30}l28 12M${cx + 42} ${cy - 30}l-28 12" stroke="${K}" stroke-width="6" stroke-linecap="round"/>`
        + eye(cx - 24, 6) + eye(cx + 24, 6)
        + `<path d="M${cx - 28} ${cy + 38}q28 -22 56 0" fill="none" stroke="${K}" stroke-width="5.5" stroke-linecap="round"/>`
        + `<circle cx="${cx - 48}" cy="${cy + 8}" r="8" fill="#ee7a57" opacity=".55"/><circle cx="${cx + 48}" cy="${cy + 8}" r="8" fill="#ee7a57" opacity=".55"/>`;
    } else {
      s += `<path d="M${cx - 40} ${cy - 34}q14 -12 28 0M${cx + 12} ${cy - 34}q14 -12 28 0" fill="none" stroke="${K}" stroke-width="4.5" stroke-linecap="round"/>`
        + `<circle cx="${cx - 24}" cy="${cy - 10}" r="11" fill="#fff" stroke="${K}" stroke-width="3.5"/><circle cx="${cx + 24}" cy="${cy - 10}" r="11" fill="#fff" stroke="${K}" stroke-width="3.5"/>`
        + `<circle cx="${cx - 24}" cy="${cy - 10}" r="4.5" fill="${K}"/><circle cx="${cx + 24}" cy="${cy - 10}" r="4.5" fill="${K}"/>`
        + `<ellipse cx="${cx}" cy="${cy + 32}" rx="13" ry="17" fill="#8a3b2e" stroke="${K}" stroke-width="4"/>`;
    }
    return (p.plain) ? s : `<svg class="diagram" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(p.label || 'وجه')}">${s}</svg>`;
  }

  /* a3Photo: صور من تصميم صاحب الموقع (Gemini) في arabic/assets/a3_*.webp، صورة أو صورتان لسؤال واحد؛ q.pic = { src: ['a3_flower_proud'], label } والوصف لا يذكر الإجابة */
  const IMG = id => `arabic/assets/${id}.webp`;
  let pid = 0;
  function a3Photo(q) {
    const src = (q && q.pic && q.pic.src) || [], n = Math.max(1, src.length);
    const w = 340, h = n === 1 ? 210 : 170, size = n === 1 ? 190 : 156, gx = w / n;
    let defs = '', s = `<rect width="${w}" height="${h}" rx="14" fill="#fbf6e6"/>`;
    src.forEach((f, i) => {
      const id = 'a3u2c' + (++pid), x = gx * i + gx / 2 - size / 2, y = (h - size) / 2;
      defs += `<clipPath id="${id}"><rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${size}" height="${size}" rx="20"/></clipPath>`;
      s += `<image href="${IMG(f)}" x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${size}" height="${size}" preserveAspectRatio="xMidYMid slice" clip-path="url(#${id})"/>`
        + `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${size}" height="${size}" rx="20" fill="none" stroke="#d8c9a6" stroke-width="2"/>`;
    });
    const inner = `<defs>${defs}</defs>${s}`;
    return (q && q.pic && q.pic.plain) ? inner
      : `<svg class="diagram" viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc((q && q.pic && q.pic.label) || 'صورة للسؤال')}">${inner}</svg>`;
  }

  window.CH_DIAGRAMS = Object.assign(window.CH_DIAGRAMS || {}, { a3Count, a3Face, a3Photo });
})();
