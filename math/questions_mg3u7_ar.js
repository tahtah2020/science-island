/* الصف الثالث الابتدائي · الرياضيات (عربي) · الوحدة السابعة «الحساب الذهني»، الفصل الدراسي الأول 2026/2027
   المصدر: كتاب الوزارة العربي «الرياضيات - الصف الثالث الابتدائي»، الفصل 7 (صفحات 76–81): الدرسان 7-1 و7-2 وتمرين «مراجعة وتدريب».
   (أول صفحة في ملف الوحدة، ص 75، هي آخر تمرين في الفصل 6 وليست من هذه الوحدة.)
   أرقام الأفكار: W الدرس 1، X الدرس 2 + رقم. أفكار التحدي (Boss): W6, X6.
   طلب المالك (6 نوفمبر 2026): سهل أولًا، تدرّج بطيء، أسئلة صعبة قليلة (فكرة التحدي فقط)، وتلميح في كل سؤال لا يذكر الإجابة، والمسائل الكلامية بالصور.
   طريقة الكتاب: نبدأ بأكبر قيمة مكانية: ① نجمع (أو نطرح) العشرات فقط ② ثم الآحاد. نحتفظ بالعدد الأول ونفكّك الثاني (٣٣ + ٤٦: ٣٣ + ٤٠ = ٧٣، ثم ٧٣ + ٦ = ٧٩).
   الصورة: قفزتان على خط أعداد مفتوح (g3Jumps): قفزة العشرات ثم قفزة الآحاد، والنقطة المطلوبة «؟».
   ملاحظات للمراجعة:
   - إجابات «وقت المحاولة» و«هيا نتدرب» و«مراجعة وتدريب» غير مطبوعة في الكتاب، كلها محسوبة.
   - الكتاب ليس فيه مسائل كلامية في هذه الوحدة؛ أضفنا قليلًا منها (بائع الفاكهة) بأعداد تمارين الكتاب نفسها، مع صورة الأشياء وعددها.
   - صورة السوق من المالك (Gemini) تظهر مع سؤال لا يطلب عدّ ما في الصورة. */
(function () {
window.CHAPTER = { id: 'mg3u7', title: 'الحساب الذهني', grade: 'الصف الثالث', track: 'عربي', arDigits: true };

const num = (level, q, answer, calc, hint, extra = {}) => Object.assign({ type: 'num', mode: 'normal', level, q, answer: String(answer), calc, hint }, extra);
const timed = (level, q, answer, calc, hint, seconds = 20, extra = {}) => Object.assign(num(level, q, answer, calc, hint, extra), { mode: 'timed', seconds });
const mc = (level, q, options, hint, extra = {}) => Object.assign({ type: 'mc', mode: 'normal', level, q, options, answer: 0, hint }, extra);
const tf = (level, q, answer, hint, extra = {}) => Object.assign({ type: 'tf', mode: 'normal', level, q, answer, hint }, extra);
const n = x => String(x).replace(/[0-9]/g, d => '٠١٢٣٤٥٦٧٨٩'[d]);
const asBoss = v => Object.assign(v, { level: 'hard', mode: 'boss' });

/* a + b or a − b in the book's two steps, with the jumps picture */
const op = (level, a, b, sign, extra = {}) => {
  const t = Math.floor(b / 10) * 10, o = b % 10, plus = sign === '+', r = plus ? a + b : a - b, mid = plus ? a + t : a - t, S = plus ? '+' : '−';
  const jumps = [t, o].filter(Boolean);
  let hint, explain;
  if (t && o) { hint = `أولًا: ${n(a)} ${S} ${n(t)} (العشرات فقط)، ثم ${plus ? 'أضف' : 'اطرح'} ${n(o)}.`; explain = `① ${n(a)} ${S} ${n(t)} = ${n(mid)}\n② ${n(mid)} ${S} ${n(o)} = ${n(r)}`; }
  else if (t) { hint = `${plus ? 'أضف' : 'اطرح'} العشرات فقط: ${n(Math.floor(a / 10))} عشرات ${S} ${n(t / 10)} عشرات، والآحاد تبقى ${n(a % 10)}.`; explain = `${n(a)} ${S} ${n(t)} = ${n(r)}`; }
  else { hint = plus ? `ابدأ من ${n(a)} وعُدّ ${n(o)} للأمام. هل تعبر عشرة جديدة؟` : `ابدأ من ${n(a)} وعُدّ ${n(o)} للخلف. هل تنزل إلى عشرة أصغر؟`; explain = `${n(a)} ${S} ${n(o)} = ${n(r)}`; }
  return num(level, `${n(a)} ${S} ${n(b)} = ؟`, r, `${a}${plus ? '+' : '-'}${b}`, hint, Object.assign({ fig: 'g3Jumps', pic: { a, jumps, sign, know: 1 }, explain }, extra));
};
const add = (level, a, b, extra) => op(level, a, b, '+', extra);
const sub = (level, a, b, extra) => op(level, a, b, '-', extra);
const fast = v => Object.assign(v, { mode: 'timed', seconds: 20 });
/* the first step of the two: «a + b: ① a + (tens of b) = ؟» */
const step1 = (level, a, b, sign) => {
  const t = Math.floor(b / 10) * 10, plus = sign === '+', S = plus ? '+' : '−', r = plus ? a + t : a - t;
  return num(level, `نحسب ${n(a)} ${S} ${n(b)} ذهنيًا.\nالخطوة ① : ${n(a)} ${S} ${n(t)} = ؟`, r, `${a}${plus ? '+' : '-'}${t}`, `${plus ? 'أضف' : 'اطرح'} العشرات فقط، والآحاد ${n(a % 10)} لا تتغيّر.`, { fig: 'g3Jumps', pic: { a, jumps: [t], sign, know: 1 }, explain: `${n(a)} ${S} ${n(t)} = ${n(r)}` });
};
const step2 = (level, a, b, sign) => {
  const t = Math.floor(b / 10) * 10, o = b % 10, plus = sign === '+', S = plus ? '+' : '−', m = plus ? a + t : a - t, r = plus ? m + o : m - o;
  return num(level, `نحسب ${n(a)} ${S} ${n(b)} ذهنيًا.\nالخطوة ① : ${n(a)} ${S} ${n(t)} = ${n(m)}\nالخطوة ② : ${n(m)} ${S} ${n(o)} = ؟`, r, `${m}${plus ? '+' : '-'}${o}`, `ابدأ من ${n(m)} و${plus ? 'عُدّ للأمام' : 'عُدّ للخلف'} ${n(o)}.`, { fig: 'g3Jumps', pic: { a, jumps: [t, o], sign, know: 2 }, explain: `${n(m)} ${S} ${n(o)} = ${n(r)}، إذن ${n(a)} ${S} ${n(b)} = ${n(r)}.` });
};

window.IDEAS = [
  /* ---------- الدرس 1 · الحساب الذهني للجمع (ص 76–77) ---------- */
  { id: 'W1', lesson: 1, concept: 'جمع عشرات كاملة', explain: 'عندما نجمع عشرات كاملة نغيّر رقم العشرات فقط: ٢٤ + ٣٠: ٢ عشرات + ٣ عشرات = ٥ عشرات، والآحاد ٤ تبقى. الإجابة ٥٤.',
    variants: [fast(add('easy', 24, 30)), fast(add('easy', 13, 20)), fast(add('easy', 27, 60)), add('easy', 39, 20), add('easy', 15, 60), add('easy', 14, 30), add('easy', 48, 20), add('easy', 36, 40)] },
  { id: 'W2', lesson: 1, concept: 'جمع آحاد', explain: 'نبدأ من العدد ونعدّ للأمام. إذا وصلنا إلى عشرة جديدة يزيد رقم العشرات: ٣٧ + ٨ = ٤٥ (٣٧ + ٣ = ٤٠، ثم ٤٠ + ٥ = ٤٥).',
    variants: [fast(add('easy', 66, 3)), fast(add('easy', 74, 6)), fast(add('easy', 24, 3)), add('easy', 31, 8), add('medium', 37, 8), add('medium', 87, 8), add('medium', 33, 7), add('medium', 48, 7), add('medium', 45, 5), add('medium', 29, 5), add('medium', 57, 6)] },
  { id: 'W3', lesson: 1, concept: 'خطوتا الحساب الذهني للجمع', explain: 'في الحساب الذهني للجمع نبدأ بأكبر قيمة مكانية: ① نجمع العشرات فقط ② ثم نجمع الآحاد. مثال: ٣٣ + ٤٦: ٣٣ + ٤٠ = ٧٣، ثم ٧٣ + ٦ = ٧٩.',
    variants: [
      mc('easy', 'نريد حساب ٣٣ + ٤٦ ذهنيًا.\nما الخطوة الأولى؟', ['٣٣ + ٤٠', '٣٣ + ٦', '٣ + ٦', '٣٠ + ٤'], 'نبدأ بأكبر قيمة مكانية: العشرات.', { explain: 'أولًا نحسب خانة العشرات فقط: ٣٣ + ٤٠ = ٧٣.' }),
      mc('easy', 'في الحساب الذهني للجمع، نبدأ بالتفكير في ...', ['أكبر قيمة مكانية (العشرات)', 'أصغر قيمة مكانية (الآحاد)', 'أكبر العددين فقط'], 'انظر إلى مثال الكتاب: ٣٣ + ٤٦ ← ٣٣ + ٤٠ أولًا.', { explain: 'نبدأ بأكبر قيمة مكانية، ثم الآحاد.' }),
      step1('easy', 33, 46, '+'), step2('easy', 33, 46, '+'),
      step1('easy', 51, 46, '+'), step2('easy', 51, 46, '+'),
      step1('easy', 45, 38, '+'), step2('medium', 45, 38, '+'),
      mc('medium', 'نريد حساب ٤٥ + ٣٨ ذهنيًا.\nما الخطوة الثانية بعد ٤٥ + ٣٠ = ٧٥؟', ['٧٥ + ٨', '٧٥ + ٣٨', '٤٥ + ٨', '٧٥ + ٣٠'], 'بعد العشرات بقيت الآحاد. كم آحادًا في ٣٨؟', { explain: '② ٧٥ + ٨ = ٨٣.' })
    ] },
  { id: 'W4', lesson: 1, concept: 'جمع عددين من رقمين (بدون عبور عشرة)', explain: 'نجمع العشرات أولًا ثم الآحاد: ٣٤ + ٣٢: ٣٤ + ٣٠ = ٦٤، ثم ٦٤ + ٢ = ٦٦.',
    variants: [add('easy', 34, 32), add('easy', 62, 15), add('easy', 21, 53), add('easy', 24, 71), add('easy', 43, 25), add('easy', 23, 41), add('easy', 52, 7), add('easy', 25, 50), add('easy', 41, 6)] },
  { id: 'W5', lesson: 1, concept: 'جمع عددين من رقمين (مع عبور عشرة)', explain: 'إذا تخطّى جمع الآحاد العشرة يزيد رقم العشرات: ٢٧ + ١٣: ٢٧ + ١٠ = ٣٧، ثم ٣٧ + ٣ = ٤٠.',
    variants: [add('medium', 27, 13), add('medium', 12, 48), add('medium', 17, 59), add('medium', 18, 73), add('medium', 15, 15), add('medium', 39, 12), add('medium', 26, 36), add('medium', 57, 6), add('medium', 74, 4), add('medium', 68, 4), add('medium', 75, 9), add('medium', 83, 5),
      add('medium', 34, 25, { q: 'عند بائع الفاكهة ٣٤ برتقالة، ثم أحضر ٢٥ برتقالة أخرى.\nكم برتقالة معه الآن؟ احسب ذهنيًا.', unit: 'برتقالة', fig: undefined, pic: undefined, story: [['orange', 34, '٣٤ برتقالة'], ['orange', 25, 'أحضر ٢٥']] }),
      add('medium', 46, 13, { q: 'في سلة ٤٦ تفاحة، ووضع البائع فيها ١٣ تفاحة أخرى.\nكم تفاحة في السلة الآن؟ احسب ذهنيًا.', unit: 'تفاحة', fig: undefined, pic: undefined, story: [['apple', 46, '٤٦ تفاحة'], ['apple', 13, 'وضع ١٣']] })] },
  { id: 'W6', lesson: 1, boss: true, concept: 'تحدٍّ: الحساب الذهني للجمع', explain: 'خطوتان: ① نجمع العشرات ② ثم نجمع الآحاد، وننتبه عندما يتخطّى جمع الآحاد عشرة.',
    variants: [asBoss(add('hard', 32, 49)), asBoss(add('hard', 76, 17)), asBoss(add('hard', 58, 34)), asBoss(add('hard', 65, 28)), asBoss(add('hard', 77, 16)), asBoss(add('hard', 35, 27)), asBoss(add('hard', 47, 24)), asBoss(add('hard', 45, 38))] },

  /* ---------- الدرس 2 · الحساب الذهني للطرح (ص 78–79) ---------- */
  { id: 'X1', lesson: 2, concept: 'طرح عشرات كاملة', explain: 'عندما نطرح عشرات كاملة نغيّر رقم العشرات فقط: ٥٤ − ٢٠: ٥ عشرات − ٢ عشرات = ٣ عشرات، والآحاد ٤ تبقى. الإجابة ٣٤.',
    variants: [fast(sub('easy', 54, 20)), fast(sub('easy', 83, 20)), fast(sub('easy', 97, 60)), sub('easy', 63, 40), sub('easy', 87, 60), sub('easy', 54, 30), sub('easy', 96, 50), sub('easy', 85, 60), sub('easy', 47, 20)] },
  { id: 'X2', lesson: 2, concept: 'طرح آحاد', explain: 'نبدأ من العدد ونعدّ للخلف. إذا نزلنا تحت العشرة ينقص رقم العشرات: ٣٧ − ٨ = ٢٩ (٣٧ − ٧ = ٣٠، ثم ٣٠ − ١ = ٢٩).',
    variants: [fast(sub('easy', 48, 6)), fast(sub('easy', 59, 4)), sub('easy', 76, 5), sub('medium', 37, 8), sub('medium', 66, 9), sub('medium', 74, 6), sub('medium', 87, 8), sub('medium', 31, 3), sub('medium', 44, 8), sub('medium', 43, 7), sub('medium', 92, 5), sub('medium', 75, 8)] },
  { id: 'X3', lesson: 2, concept: 'خطوتا الحساب الذهني للطرح', explain: 'في الطرح أيضًا نبدأ بأكبر قيمة مكانية: ① نطرح العشرات فقط ② ثم نطرح الآحاد. مثال: ٦٢ − ٣٩: ٦٢ − ٣٠ = ٣٢، ثم ٣٢ − ٩ = ٢٣.',
    variants: [
      mc('easy', 'نريد حساب ٦٢ − ٣٩ ذهنيًا.\nما الخطوة الأولى؟', ['٦٢ − ٣٠', '٦٢ − ٩', '٢ − ٩', '٦٠ − ٣'], 'في الطرح أيضًا نبدأ بالعشرات.', { explain: 'أولًا نطرح العشرات فقط: ٦٢ − ٣٠ = ٣٢.' }),
      step1('easy', 62, 39, '-'), step2('medium', 62, 39, '-'),
      step1('easy', 51, 26, '-'), step2('medium', 51, 26, '-'),
      step1('easy', 100, 42, '-'), step2('medium', 100, 42, '-'),
      mc('medium', 'نريد حساب ١٠٠ − ٣٨ ذهنيًا.\nما الخطوة الثانية بعد ١٠٠ − ٣٠ = ٧٠؟', ['٧٠ − ٨', '١٠٠ − ٨', '٧٠ − ٣٨', '٧٠ + ٨'], 'بعد العشرات نطرح الآحاد من الناتج.', { explain: '② ٧٠ − ٨ = ٦٢.' })
    ] },
  { id: 'X4', lesson: 2, concept: 'طرح عدد من رقمين', explain: 'نطرح العشرات أولًا ثم الآحاد: ٨٤ − ٣٢: ٨٤ − ٣٠ = ٥٤، ثم ٥٤ − ٢ = ٥٢.',
    variants: [sub('easy', 84, 32), sub('easy', 33, 12), sub('easy', 45, 23), sub('easy', 65, 24), sub('easy', 56, 13), sub('medium', 72, 48), sub('medium', 62, 15), sub('medium', 93, 17), sub('medium', 61, 17), sub('medium', 87, 43), sub('medium', 42, 18),
      sub('medium', 63, 40, { q: 'كان مع البائع ٦٣ تفاحة، وباع منها ٤٠ تفاحة.\nكم تفاحة بقيت معه؟ احسب ذهنيًا.', unit: 'تفاحة', fig: undefined, pic: undefined, story: [['apple', 63, 'معه ٦٣'], ['apple', 40, 'باع ٤٠']] }),
      sub('medium', 45, 23, { q: 'في الصندوق ٤٥ برتقالة، أخذ منها البائع ٢٣ برتقالة.\nكم برتقالة بقيت في الصندوق؟ احسب ذهنيًا.', unit: 'برتقالة', fig: undefined, pic: undefined, story: [['orange', 45, 'في الصندوق ٤٥'], ['orange', 23, 'أخذ ٢٣']] })] },
  { id: 'X5', lesson: 2, concept: 'الطرح من ١٠٠', explain: '١٠٠ = ١٠ عشرات. ١٠٠ − ٤٢: ① ١٠٠ − ٤٠ = ٦٠ ② ٦٠ − ٢ = ٥٨.',
    variants: [fast(sub('easy', 100, 30)), sub('easy', 100, 60), sub('medium', 100, 59), sub('medium', 100, 47), sub('medium', 100, 86), sub('medium', 100, 71), sub('medium', 100, 53), sub('medium', 100, 27), sub('medium', 100, 38), sub('medium', 100, 65)] },
  { id: 'X6', lesson: 2, boss: true, concept: 'تحدٍّ: الحساب الذهني للطرح', explain: 'خطوتان: ① نطرح العشرات ② ثم نطرح الآحاد، وننتبه عندما ننزل تحت العشرة.',
    variants: [asBoss(sub('hard', 94, 35)), asBoss(sub('hard', 82, 47)), asBoss(sub('hard', 100, 84)), asBoss(sub('hard', 100, 93)), asBoss(sub('hard', 71, 26)), asBoss(sub('hard', 53, 29)), asBoss(sub('hard', 64, 19)), asBoss(sub('hard', 98, 76))] }
];

/* word problems: the things and how many (owner, 6 Nov 2026) */
window.IDEAS.forEach(I => I.variants.forEach(v => {
  if (v.story) { v.fig = 'g3Story'; v.pic = { parts: v.story.map(([icon, k, label]) => ({ icon, n: k, label })) }; delete v.story; }
  else if (v.fig === undefined) { delete v.fig; delete v.pic; }
}));
/* the owner's market picture with a question that does not count what is in it */
window.IDEAS[2].variants.push(mc('easy', 'سارة ومازن في السوق. يريدان حساب ٥١ + ٤٦ ذهنيًا.\nبماذا يبدأان؟', ['٥١ + ٤٠', '٥١ + ٦', '١ + ٦', '٥٠ + ٤٠'], 'نبدأ بأكبر قيمة مكانية: العشرات.', { fig: 'g3Photo', pic: { src: 'math/assets/g3/market.jpg' }, explain: '① ٥١ + ٤٠ = ٩١ ② ٩١ + ٦ = ٩٧.' }));
})();
