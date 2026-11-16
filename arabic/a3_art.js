/* الصف الثالث · اللغة العربية · صور الوحدات (رسوم Gemini التي أرسلها صاحب الموقع، 16 نوفمبر 2026).
   الملف قائم بذاته (common.js يحمّل ملف art واحدًا لكل وحدة). الرسم a3Photo يعرض صورة أو صورتين جنبًا إلى جنب لسؤال واحد:
   q.fig = 'a3Photo', q.pic = { src: ['a3_plant_dark', …], label: 'وصف للقارئ الشاشي — لا يذكر الإجابة أبدًا' }.
   المسار نسبي للصفحة (الصفحات في الجذر). */
(function () {
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const IMG = id => `arabic/assets/${id}.webp`;
  let uid = 0;

  function a3Photo(q) {
    const src = (q && q.pic && q.pic.src) || [], n = Math.max(1, src.length);
    const w = 340, h = n === 1 ? 210 : 170, size = n === 1 ? 190 : 156, gx = w / n;
    let defs = '', s = `<rect width="${w}" height="${h}" rx="14" fill="#fbf6e6"/>`;
    src.forEach((f, i) => {
      const id = 'a3c' + (++uid), x = gx * i + gx / 2 - size / 2, y = (h - size) / 2;
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
