/* Grade 3 · Mathematics (Languages track) · Chapter 7 "Mental Math", Term 1 2026/2027
   Source: Ministry book "Primary 3 Mathematics, Term 1" (English), Chapter 7 (pages 76–81): lessons 7-1 and 7-2 and "Review and Practice".
   Follows questions_mg3u7_ar.js phrasing by phrasing (same ids, types, levels and answers; check_questions checks the parity).
   Idea letters: W lesson 1, X lesson 2. Boss ideas: W6, X6.
   Owner (6 Nov 2026): easy first, slow rise, few hard questions (Boss only), a hint on every phrasing that never gives the answer; word problems as pictures.
   The book's method: start with the highest place value: ① calculate only the tens place ② next, the ones place (33 + 46: 33 + 40 = 73, then 73 + 6 = 79).
   Picture: two jumps on an open number line (g3Jumps): the tens jump, then the ones jump, the asked point "?".
   Review notes:
   - Answers of "Try", "Exercise" and "Review and Practice" are not printed in the book; all are computed.
   - The book has no word problems in this chapter; a few (the fruit seller) use the book's own exercise numbers, with the things drawn.
   - The owner's market picture (Gemini) goes with a question that does not count what is in it. */
(function () {
window.CHAPTER = { id: 'mg3u7', title: 'Mental Math', grade: 'Grade 3', track: 'Languages' };

const num = (level, q, answer, calc, hint, extra = {}) => Object.assign({ type: 'num', mode: 'normal', level, q, answer: String(answer), calc, hint }, extra);
const mc = (level, q, options, hint, extra = {}) => Object.assign({ type: 'mc', mode: 'normal', level, q, options, answer: 0, hint }, extra);
const asBoss = v => Object.assign(v, { level: 'hard', mode: 'boss' });

/* a + b or a − b in the book's two steps, with the jumps picture */
const op = (level, a, b, sign, extra = {}) => {
  const t = Math.floor(b / 10) * 10, o = b % 10, plus = sign === '+', r = plus ? a + b : a - b, mid = plus ? a + t : a - t, S = plus ? '+' : '−';
  const jumps = [t, o].filter(Boolean);
  let hint, explain;
  if (t && o) { hint = `First: ${a} ${S} ${t} (only the tens), then ${plus ? 'add' : 'take away'} ${o}.`; explain = `① ${a} ${S} ${t} = ${mid}\n② ${mid} ${S} ${o} = ${r}`; }
  else if (t) { hint = `${plus ? 'Add' : 'Take away'} only the tens: ${Math.floor(a / 10)} tens ${S} ${t / 10} tens; the ones stay ${a % 10}.`; explain = `${a} ${S} ${t} = ${r}`; }
  else { hint = plus ? `Start at ${a} and count on ${o}. Do you pass a new ten?` : `Start at ${a} and count back ${o}. Do you go down to a smaller ten?`; explain = `${a} ${S} ${o} = ${r}`; }
  return num(level, `${a} ${S} ${b} = ?`, r, `${a}${plus ? '+' : '-'}${b}`, hint, Object.assign({ fig: 'g3Jumps', pic: { a, jumps, sign, know: 1 }, explain }, extra));
};
const add = (level, a, b, extra) => op(level, a, b, '+', extra);
const sub = (level, a, b, extra) => op(level, a, b, '-', extra);
const fast = v => Object.assign(v, { mode: 'timed', seconds: 20 });
/* the first step of the two: "a + b: ① a + (tens of b) = ?" */
const step1 = (level, a, b, sign) => {
  const t = Math.floor(b / 10) * 10, plus = sign === '+', S = plus ? '+' : '−', r = plus ? a + t : a - t;
  return num(level, `We calculate ${a} ${S} ${b} using mental math.\nStep ① : ${a} ${S} ${t} = ?`, r, `${a}${plus ? '+' : '-'}${t}`, `${plus ? 'Add' : 'Take away'} only the tens; the ones ${a % 10} do not change.`, { fig: 'g3Jumps', pic: { a, jumps: [t], sign, know: 1 }, explain: `${a} ${S} ${t} = ${r}` });
};
const step2 = (level, a, b, sign) => {
  const t = Math.floor(b / 10) * 10, o = b % 10, plus = sign === '+', S = plus ? '+' : '−', m = plus ? a + t : a - t, r = plus ? m + o : m - o;
  return num(level, `We calculate ${a} ${S} ${b} using mental math.\nStep ① : ${a} ${S} ${t} = ${m}\nStep ② : ${m} ${S} ${o} = ?`, r, `${m}${plus ? '+' : '-'}${o}`, `Start at ${m} and count ${plus ? 'on' : 'back'} ${o}.`, { fig: 'g3Jumps', pic: { a, jumps: [t, o], sign, know: 2 }, explain: `${m} ${S} ${o} = ${r}, so ${a} ${S} ${b} = ${r}.` });
};

window.IDEAS = [
  /* ---------- Lesson 1 · Mental Math for Addition (pp. 76–77) ---------- */
  { id: 'W1', lesson: 1, concept: 'Adding whole tens', explain: 'When we add whole tens, only the tens digit changes: 24 + 30: 2 tens + 3 tens = 5 tens, and the ones 4 stay. The answer is 54.',
    variants: [fast(add('easy', 24, 30)), fast(add('easy', 13, 20)), fast(add('easy', 27, 60)), add('easy', 39, 20), add('easy', 15, 60), add('easy', 14, 30), add('easy', 48, 20), add('easy', 36, 40)] },
  { id: 'W2', lesson: 1, concept: 'Adding ones', explain: 'We start at the number and count on. If we reach a new ten, the tens digit goes up: 37 + 8 = 45 (37 + 3 = 40, then 40 + 5 = 45).',
    variants: [fast(add('easy', 66, 3)), fast(add('easy', 74, 6)), fast(add('easy', 24, 3)), add('easy', 31, 8), add('medium', 37, 8), add('medium', 87, 8), add('medium', 33, 7), add('medium', 48, 7), add('medium', 45, 5), add('medium', 29, 5), add('medium', 57, 6)] },
  { id: 'W3', lesson: 1, concept: 'The two steps of mental addition', explain: 'For mental math in addition, start by thinking about the highest place value: ① first, calculate only the tens place ② next, calculate the ones place. Example: 33 + 46: 33 + 40 = 73, then 73 + 6 = 79.',
    variants: [
      mc('easy', 'We want to calculate 33 + 46 using mental math.\nWhat is the first step?', ['33 + 40', '33 + 6', '3 + 6', '30 + 4'], 'Start with the highest place value: the tens.', { explain: 'First, calculate only the tens place: 33 + 40 = 73.' }),
      mc('easy', 'For mental math in addition, start by thinking about ...', ['the highest place value (the tens)', 'the lowest place value (the ones)', 'only the bigger number'], 'Look at the book’s example: 33 + 46 → 33 + 40 first.', { explain: 'We start with the highest place value, then the ones.' }),
      step1('easy', 33, 46, '+'), step2('easy', 33, 46, '+'),
      step1('easy', 51, 46, '+'), step2('easy', 51, 46, '+'),
      step1('easy', 45, 38, '+'), step2('medium', 45, 38, '+'),
      mc('medium', 'We want to calculate 45 + 38 using mental math.\nWhat is the second step after 45 + 30 = 75?', ['75 + 8', '75 + 38', '45 + 8', '75 + 30'], 'After the tens, the ones are left. How many ones are in 38?', { explain: '② 75 + 8 = 83.' })
    ] },
  { id: 'W4', lesson: 1, concept: 'Adding two 2-digit numbers (no new ten)', explain: 'We add the tens first, then the ones: 34 + 32: 34 + 30 = 64, then 64 + 2 = 66.',
    variants: [add('easy', 34, 32), add('easy', 62, 15), add('easy', 21, 53), add('easy', 24, 71), add('easy', 43, 25), add('easy', 23, 41), add('easy', 52, 7), add('easy', 25, 50), add('easy', 41, 6)] },
  { id: 'W5', lesson: 1, concept: 'Adding two 2-digit numbers (passing a ten)', explain: 'If adding the ones passes ten, the tens digit goes up: 27 + 13: 27 + 10 = 37, then 37 + 3 = 40.',
    variants: [add('medium', 27, 13), add('medium', 12, 48), add('medium', 17, 59), add('medium', 18, 73), add('medium', 15, 15), add('medium', 39, 12), add('medium', 26, 36), add('medium', 57, 6), add('medium', 74, 4), add('medium', 68, 4), add('medium', 75, 9), add('medium', 83, 5),
      add('medium', 34, 25, { q: 'A fruit seller has 34 oranges, then he brings 25 more oranges.\nHow many oranges does he have now? Use mental math.', unit: 'oranges', fig: undefined, pic: undefined, story: [['orange', 34, '34 oranges'], ['orange', 25, 'brings 25']] }),
      add('medium', 46, 13, { q: 'A basket has 46 apples, and the seller puts 13 more apples in it.\nHow many apples are in the basket now? Use mental math.', unit: 'apples', fig: undefined, pic: undefined, story: [['apple', 46, '46 apples'], ['apple', 13, 'puts in 13']] })] },
  { id: 'W6', lesson: 1, boss: true, concept: 'Challenge: mental addition', explain: 'Two steps: ① add the tens ② then add the ones, and watch out when the ones pass ten.',
    variants: [asBoss(add('hard', 32, 49)), asBoss(add('hard', 76, 17)), asBoss(add('hard', 58, 34)), asBoss(add('hard', 65, 28)), asBoss(add('hard', 77, 16)), asBoss(add('hard', 35, 27)), asBoss(add('hard', 47, 24)), asBoss(add('hard', 45, 38))] },

  /* ---------- Lesson 2 · Mental Math for Subtraction (pp. 78–79) ---------- */
  { id: 'X1', lesson: 2, concept: 'Taking away whole tens', explain: 'When we take away whole tens, only the tens digit changes: 54 − 20: 5 tens − 2 tens = 3 tens, and the ones 4 stay. The answer is 34.',
    variants: [fast(sub('easy', 54, 20)), fast(sub('easy', 83, 20)), fast(sub('easy', 97, 60)), sub('easy', 63, 40), sub('easy', 87, 60), sub('easy', 54, 30), sub('easy', 96, 50), sub('easy', 85, 60), sub('easy', 47, 20)] },
  { id: 'X2', lesson: 2, concept: 'Taking away ones', explain: 'We start at the number and count back. If we go below the ten, the tens digit goes down: 37 − 8 = 29 (37 − 7 = 30, then 30 − 1 = 29).',
    variants: [fast(sub('easy', 48, 6)), fast(sub('easy', 59, 4)), sub('easy', 76, 5), sub('medium', 37, 8), sub('medium', 66, 9), sub('medium', 74, 6), sub('medium', 87, 8), sub('medium', 31, 3), sub('medium', 44, 8), sub('medium', 43, 7), sub('medium', 92, 5), sub('medium', 75, 8)] },
  { id: 'X3', lesson: 2, concept: 'The two steps of mental subtraction', explain: 'For mental math in subtraction as well, start by thinking about the highest place value: ① first, only the tens place ② next, the ones place. Example: 62 − 39: 62 − 30 = 32, then 32 − 9 = 23.',
    variants: [
      mc('easy', 'We want to calculate 62 − 39 using mental math.\nWhat is the first step?', ['62 − 30', '62 − 9', '2 − 9', '60 − 3'], 'In subtraction as well, start with the tens.', { explain: 'First, take away only the tens: 62 − 30 = 32.' }),
      step1('easy', 62, 39, '-'), step2('medium', 62, 39, '-'),
      step1('easy', 51, 26, '-'), step2('medium', 51, 26, '-'),
      step1('easy', 100, 42, '-'), step2('medium', 100, 42, '-'),
      mc('medium', 'We want to calculate 100 − 38 using mental math.\nWhat is the second step after 100 − 30 = 70?', ['70 − 8', '100 − 8', '70 − 38', '70 + 8'], 'After the tens, take the ones away from the result.', { explain: '② 70 − 8 = 62.' })
    ] },
  { id: 'X4', lesson: 2, concept: 'Taking away a 2-digit number', explain: 'We take away the tens first, then the ones: 84 − 32: 84 − 30 = 54, then 54 − 2 = 52.',
    variants: [sub('easy', 84, 32), sub('easy', 33, 12), sub('easy', 45, 23), sub('easy', 65, 24), sub('easy', 56, 13), sub('medium', 72, 48), sub('medium', 62, 15), sub('medium', 93, 17), sub('medium', 61, 17), sub('medium', 87, 43), sub('medium', 42, 18),
      sub('medium', 63, 40, { q: 'The seller had 63 apples, and he sold 40 of them.\nHow many apples are left? Use mental math.', unit: 'apples', fig: undefined, pic: undefined, story: [['apple', 63, 'had 63'], ['apple', 40, 'sold 40']] }),
      sub('medium', 45, 23, { q: 'A box has 45 oranges. The seller takes 23 oranges out.\nHow many oranges are left in the box? Use mental math.', unit: 'oranges', fig: undefined, pic: undefined, story: [['orange', 45, '45 in the box'], ['orange', 23, 'takes 23']] })] },
  { id: 'X5', lesson: 2, concept: 'Taking away from 100', explain: '100 = 10 tens. 100 − 42: ① 100 − 40 = 60 ② 60 − 2 = 58.',
    variants: [fast(sub('easy', 100, 30)), sub('easy', 100, 60), sub('medium', 100, 59), sub('medium', 100, 47), sub('medium', 100, 86), sub('medium', 100, 71), sub('medium', 100, 53), sub('medium', 100, 27), sub('medium', 100, 38), sub('medium', 100, 65)] },
  { id: 'X6', lesson: 2, boss: true, concept: 'Challenge: mental subtraction', explain: 'Two steps: ① take away the tens ② then take away the ones, and watch out when you go below the ten.',
    variants: [asBoss(sub('hard', 94, 35)), asBoss(sub('hard', 82, 47)), asBoss(sub('hard', 100, 84)), asBoss(sub('hard', 100, 93)), asBoss(sub('hard', 71, 26)), asBoss(sub('hard', 53, 29)), asBoss(sub('hard', 64, 19)), asBoss(sub('hard', 98, 76))] }
];

/* word problems: the things and how many (owner, 6 Nov 2026) */
window.IDEAS.forEach(I => I.variants.forEach(v => {
  if (v.story) { v.fig = 'g3Story'; v.pic = { parts: v.story.map(([icon, k, label]) => ({ icon, n: k, label })) }; delete v.story; }
  else if (v.fig === undefined) { delete v.fig; delete v.pic; }
}));
/* the owner's market picture with a question that does not count what is in it */
window.IDEAS[2].variants.push(mc('easy', 'Sara and Mazen are at the market. They want to calculate 51 + 46 using mental math.\nWhat do they start with?', ['51 + 40', '51 + 6', '1 + 6', '50 + 40'], 'Start with the highest place value: the tens.', { fig: 'g3Photo', pic: { src: 'math/assets/g3/market.jpg' }, explain: '① 51 + 40 = 91 ② 91 + 6 = 97.' }));
})();
