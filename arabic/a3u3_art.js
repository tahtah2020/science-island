/* الصف الثالث · اللغة العربية · الوحدة الثالثة «أحب بلدي» · رسوم الأسئلة.
   الملف قائم بذاته (common.js يحمّل ملف art واحدًا لكل وحدة).
   a3Photo: صور صاحب الموقع (Gemini) في arabic/assets/a3_*.webp: q.pic = { src: [...], label }؛ الوصف الصوتي label يصف الصورة ولا يذكر الإجابة أبدًا.
   كل رسم يقبل q.pic.plain (الرسم الداخلي فقط للألعاب). */
(function () {
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  /* a3Photo: صور من تصميم صاحب الموقع (Gemini) في arabic/assets/a3_*.webp، صورة أو صورتان لسؤال واحد؛ q.pic = { src: ['a3_flower_proud'], label } والوصف لا يذكر الإجابة */
  const IMG = id => `arabic/assets/${id}.webp`;
  let pid = 0;
  function a3Photo(q) {
    const src = (q && q.pic && q.pic.src) || [], n = Math.max(1, src.length);
    const w = 340, h = n === 1 ? 210 : 170, size = n === 1 ? 190 : 156, gx = w / n;
    let defs = '', s = `<rect width="${w}" height="${h}" rx="14" fill="#fbf6e6"/>`;
    src.forEach((f, i) => {
      const id = 'a3u3c' + (++pid), x = gx * i + gx / 2 - size / 2, y = (h - size) / 2;
      defs += `<clipPath id="${id}"><rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${size}" height="${size}" rx="20"/></clipPath>`;
      s += `<image href="${IMG(f)}" x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${size}" height="${size}" preserveAspectRatio="xMidYMid slice" clip-path="url(#${id})"/>`
        + `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${size}" height="${size}" rx="20" fill="none" stroke="#d8c9a6" stroke-width="2"/>`;
    });
    const inner = `<defs>${defs}</defs>${s}`;
    return (q && q.pic && q.pic.plain) ? inner
      : `<svg class="diagram" viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc((q && q.pic && q.pic.label) || 'صورة للسؤال')}">${inner}</svg>`;
  }

  window.CH_DIAGRAMS = Object.assign(window.CH_DIAGRAMS || {}, { a3Photo });
})();
