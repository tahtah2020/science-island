/* Grade 3 · Mathematics (Languages track) · Chapter 8 "Division with Remainders", Term 1 2026/2027
   Source: Ministry book "Primary 3 Mathematics, Term 1" (English), Chapter 8 (pages 82–91): lessons 8-1 to 8-4 and "Review and Practice".
   Follows questions_mg3u8_ar.js phrasing by phrasing (same ids, types, levels; check_questions checks the parity).
   Where the English book prints other numbers or another question, this file follows the English book and the phrasing carries bookDiff: true:
   - Y9.7: the English book prints 23 ÷ 6 = 4 remainder 3 (wrong; the Arabic book prints 3 remainder 5, right).
   - Y19.5: the English book asks "How many boxes of 4 cans can you make?" (ignore the remainder: 8); the Arabic book asks how many boxes are needed (9).
     Y16.7 keeps the "all the cans" question (9) with the book's numbers.
   Idea ids: Y + number for the whole unit (the lesson is in `lesson`). Boss ideas: Y7, Y11, Y15, Y19.
   Owner (6 Nov 2026): easy first, slow rise, few hard questions (Boss only), a hint on every phrasing that never gives the answer;
   every word problem drawn (the things, how many, and the people, bags or boxes).
   Pictures: owner icons in math/assets/g3/, groups with the remainder like the book (g3Rem), bars for the shelf (g3Tape), the times-table row (g3Table).
   Book words: Dividend, Divisor, "17 ÷ 3 = 5 remainder 2", the Multiplication Table for 3, checking mathematical sentence (4 × 3 + 2 = 14),
   "add 1 to the answer", "you don't need to think about the remainder".
   Review notes: exercise answers are not printed in the book (except "How to Solve"); all are computed. */
(function () {
window.CHAPTER = { id: 'mg3u8', title: 'Division with Remainders', grade: 'Grade 3', track: 'Languages' };

const num = (level, q, answer, calc, hint, extra = {}) => Object.assign({ type: 'num', mode: 'normal', level, q, answer: String(answer), calc, hint }, extra);
const timed = (level, q, answer, calc, hint, seconds = 20, extra = {}) => Object.assign(num(level, q, answer, calc, hint, extra), { mode: 'timed', seconds });
const mc = (level, q, options, hint, extra = {}) => Object.assign({ type: 'mc', mode: 'normal', level, q, options, answer: 0, hint }, extra);
const tf = (level, q, answer, hint, extra = {}) => Object.assign({ type: 'tf', mode: 'normal', level, q, answer, hint }, extra);
const asBoss = v => Object.assign(v, { level: 'hard', mode: 'boss' });
const D = v => Object.assign(v, { bookDiff: true });
const S = (icon, k, label) => ({ icon, n: k, label });
const story = (...parts) => ({ fig: 'g3Story', pic: { parts } });

const Q = (a, b) => Math.floor(a / b), R = (a, b) => a % b;
const ans = (a, b) => `${Q(a, b)} remainder ${R(a, b)}`;
const table = (a, b) => `Use the multiplication table for ${b}: ${[1, 2, 3, 4, 5, 6, 7, 8, 9].map(k => k * b).join(', ')}. Find the largest answer that is smaller than ${a}.`;
const tableFig = b => ({ fig: 'g3Table', pic: { head: ['', 1, 2, 3, 4, 5, 6, 7, 8, 9], rows: [[`Table for ${b}`, ...[1, 2, 3, 4, 5, 6, 7, 8, 9].map(k => k * b)]] } });
/* "a ÷ b = ?" with the whole answer as choices; the wrong ones are the real slips (remainder too big, one too many, remainder forgotten) */
const whole = (level, a, b, extra = {}) => {
  const q = Q(a, b), r = R(a, b), opts = [ans(a, b)];
  [[q - 1, r + b], [q + 1, r], [q, r + 1], [q, 0], [q - 1, r]].forEach(([x, y]) => { const t = `${x} remainder ${y}`; if (x >= 0 && y >= 0 && !opts.includes(t) && opts.length < 4 && !(x * b + y === a && y < b)) opts.push(t); });
  return mc(level, `${a} ÷ ${b} = ?`, opts, table(a, b), Object.assign({ explain: `${b} × ${q} = ${q * b}, and ${a} − ${q * b} = ${r}.\n${a} ÷ ${b} = ${ans(a, b)}` }, extra));
};
const quot = (level, a, b, extra = {}) => num(level, `${a} ÷ ${b}\nWhat is the answer (without the remainder)?`, Q(a, b), `(${a}-${R(a, b)})/${b}`, table(a, b), Object.assign({ explain: `${b} × ${Q(a, b)} = ${Q(a, b) * b} is the largest answer smaller than ${a}, so the answer is ${Q(a, b)}.` }, extra));
const rem = (level, a, b, extra = {}) => num(level, `${a} ÷ ${b} = ${Q(a, b)} remainder ?\nWhat is the remainder?`, R(a, b), `${a}-${b}*${Q(a, b)}`, `The remainder = Dividend − multiplication answer: ${a} − (${b} × ${Q(a, b)}).`, Object.assign({ explain: `${b} × ${Q(a, b)} = ${Q(a, b) * b}, and ${a} − ${Q(a, b) * b} = ${R(a, b)}.` }, extra));
/* lesson 2: "is this answer right?" — answer 0 = true */
const check = (level, a, b, q, r) => {
  const ok = q * b + r === a && r < b;
  return tf(level, `Is this answer correct?\n${a} ÷ ${b} = ${q} remainder ${r}`, ok ? 0 : 1, `Check: is the remainder smaller than ${b}? Then work out ${b} × ${q} + ${r}. Is it ${a}?`,
    { explain: ok ? `The remainder ${r} is smaller than ${b}, and ${b} × ${q} + ${r} = ${a}. The answer is correct.` : r >= b ? `Wrong: the remainder ${r} is not smaller than the Divisor ${b}. Correct: ${a} ÷ ${b} = ${ans(a, b)}.` : `Wrong: ${b} × ${q} + ${r} = ${q * b + r}, not ${a}. Correct: ${a} ÷ ${b} = ${ans(a, b)}.` });
};
const fix = (level, a, b, q, r) => Object.assign(whole(level, a, b), { q: `This answer is wrong:\n${a} ÷ ${b} = ${q} remainder ${r}\nWhat is the correct answer?` });

window.IDEAS = [
  /* ---------- Lesson 1 · Division with a Remainder (pp. 82–83) ---------- */
  { id: 'Y1', lesson: 1, concept: 'What a remainder means', explain: 'When you divide 17 cookies, giving 3 cookies to each person, you can give them to 5 people, and 2 cookies are left over. We write: 17 ÷ 3 = 5 remainder 2.',
    variants: [
      num('easy', 'We have 17 cookies. We give 3 cookies to each person.\nLook at the plates: how many people can we give them to?', 5, '(17-2)/3', 'Each plate is for one person. Count the full plates.', { fig: 'g3Rem', pic: { total: 17, per: 3, icon: 'cookie' }, unit: 'people', explain: '5 plates have 3 cookies, so 5 people.' }),
      num('easy', 'We have 17 cookies. We give 3 cookies to each person.\nHow many cookies are left over?', 2, '17-15', 'Count the cookies outside the plates.', { fig: 'g3Rem', pic: { total: 17, per: 3, icon: 'cookie' }, unit: 'cookies', explain: '2 cookies are left over.' }),
      num('easy', 'There are 11 pieces of candy. Each person gets 3 pieces.\nHow many people can we give them to?', 3, '(11-2)/3', 'Count the full plates.', { fig: 'g3Rem', pic: { total: 11, per: 3, icon: 'candy2' }, unit: 'people', explain: '11 ÷ 3 = 3 remainder 2.' }),
      num('easy', 'We have 14 marbles. We put 4 in each box.\nHow many marbles are left outside the boxes?', 2, '14-12', 'Count what is left outside the boxes.', { fig: 'g3Rem', pic: { total: 14, per: 4, icon: 'marble', box: 'box' }, unit: 'marbles', explain: '14 ÷ 4 = 3 remainder 2.' }),
      mc('easy', '17 cookies, 3 for each person: 5 people and 2 are left over.\nHow do we write this as a mathematical sentence?', ['17 ÷ 3 = 5 remainder 2', '17 ÷ 5 = 3 remainder 2', '17 − 3 = 5 remainder 2', '3 ÷ 17 = 5 remainder 2'], 'Start with the whole number (the Dividend), then ÷ the number each person gets.', { fig: 'g3Rem', pic: { total: 17, per: 3, icon: 'cookie' }, explain: '17 ÷ 3 = 5 remainder 2.' }),
      mc('easy', 'How do we read 17 ÷ 3 = 5 remainder 2?', ['Seventeen divided by three is five remainder two', 'Seventeen times three is five remainder two', 'Three divided by seventeen is five remainder two'], 'We read the sign ÷ as "divided by".', { explain: 'We read it: "Seventeen divided by three is five remainder two".' })
    ] },
  { id: 'Y2', lesson: 1, concept: 'Using the Divisor’s multiplication table', explain: 'For division with a remainder, we use the multiplication table of the Divisor and find the largest multiplication answer that is smaller than the Dividend. 17 ÷ 3: table for 3: … 12, 15, 18. The largest answer smaller than 17 is 15 (3 × 5).',
    variants: [
      num('easy', '17 ÷ 3\nWhat is the largest answer in the multiplication table for 3 that is smaller than 17?', 15, '3*5', 'Look along the table for 3 and stop before you pass 17.', Object.assign(tableFig(3), { explain: '15 is smaller than 17, and 18 is bigger. So 15.' })),
      num('easy', '7 ÷ 2\nWhat is the largest answer in the multiplication table for 2 that is smaller than 7?', 6, '2*3', 'Look along the table for 2 and stop before you pass 7.', Object.assign(tableFig(2), { explain: '6 is smaller than 7, and 8 is bigger.' })),
      num('easy', '60 ÷ 8\nWhat is the largest answer in the multiplication table for 8 that is smaller than 60?', 56, '8*7', 'Look along the table for 8 and stop before you pass 60.', Object.assign(tableFig(8), { explain: '56 is smaller than 60, and 64 is bigger.' })),
      num('medium', '53 ÷ 6\nWhat is the largest answer in the multiplication table for 6 that is smaller than 53?', 48, '6*8', 'Look along the table for 6 and stop before you pass 53.', Object.assign(tableFig(6), { explain: '48 is smaller than 53, and 54 is bigger.' })),
      num('medium', '26 ÷ 8\nWhat is the largest answer in the multiplication table for 8 that is smaller than 26?', 24, '8*3', 'Look along the table for 8 and stop before you pass 26.', Object.assign(tableFig(8), { explain: '24 is smaller than 26, and 32 is bigger.' })),
      mc('easy', 'For division with a remainder, we use the multiplication table of the ...', ['Divisor', 'Dividend', 'remainder'], 'In 17 ÷ 3 we used the table for 3.', { explain: 'We use the multiplication table of the Divisor.' })
    ] },
  { id: 'Y3', lesson: 1, concept: 'The answer (without the remainder)', explain: 'The answer is the number we multiplied the Divisor by to get the largest answer smaller than the Dividend. 7 ÷ 2: 2 × 3 = 6, so the answer is 3.',
    variants: [timed('easy', '9 ÷ 2\nWhat is the answer (without the remainder)?', 4, '(9-1)/2', table(9, 2)), timed('easy', '8 ÷ 3\nWhat is the answer (without the remainder)?', 2, '(8-2)/3', table(8, 3)), quot('easy', 7, 2), quot('easy', 13, 5), quot('easy', 16, 3), quot('easy', 15, 2), quot('medium', 21, 8), quot('medium', 51, 7), quot('medium', 47, 6), quot('medium', 34, 6), quot('medium', 29, 7)] },
  { id: 'Y4', lesson: 1, concept: 'The remainder', explain: 'The remainder is calculated by: (Dividend) − (Multiplication Answer). 17 ÷ 3 = 5 remainder ?: 3 × 5 = 15, and 17 − 15 = 2.',
    variants: [rem('easy', 7, 2), rem('easy', 9, 4), rem('easy', 5, 2), rem('easy', 15, 6), rem('medium', 60, 8), rem('medium', 53, 6), rem('medium', 26, 8), rem('medium', 31, 9), rem('medium', 28, 5), rem('medium', 50, 7)] },
  { id: 'Y5', lesson: 1, concept: 'The answer and the remainder together', explain: 'We find the answer from the multiplication table, then the remainder by subtracting. 22 ÷ 4: 4 × 5 = 20, and 22 − 20 = 2. So 22 ÷ 4 = 5 remainder 2.',
    variants: [whole('easy', 8, 3), whole('easy', 9, 4), whole('easy', 15, 2), whole('easy', 16, 3), whole('medium', 22, 4), whole('medium', 17, 4), whole('medium', 13, 5), whole('medium', 34, 6), whole('medium', 29, 7), whole('medium', 16, 9), whole('medium', 28, 3)] },
  { id: 'Y6', lesson: 1, concept: 'The remainder is smaller than the Divisor', explain: 'The remainder must always be smaller than the Divisor. If the remainder is bigger, we can still give to one more person.',
    variants: [
      mc('easy', 'The remainder must always be ...', ['smaller than the Divisor', 'bigger than the Divisor', 'bigger than the Dividend', 'equal to the Divisor'], 'If 3 pieces are left and each person gets 3, are they really left over?', { explain: 'The remainder is always smaller than the Divisor.' }),
      tf('easy', 'When we divide by 5, the remainder can be 7.', 1, 'Compare 7 with the Divisor 5.', { explain: 'False: 7 is bigger than 5; when dividing by 5 the remainder is smaller than 5.' }),
      tf('easy', 'When we divide by 8, the remainder can be 3.', 0, 'Compare 3 with the Divisor 8.', { explain: 'True: 3 is smaller than 8.' }),
      mc('medium', 'Which number can NOT be the remainder when we divide by 4?', ['4', '3', '2', '1'], 'The remainder is smaller than the Divisor 4.', { explain: '4 is not smaller than 4, so it can’t be a remainder.' }),
      mc('medium', 'Which number can NOT be the remainder when we divide by 6?', ['9', '5', '2', '0'], 'The remainder is smaller than the Divisor 6.', { explain: '9 is bigger than 6.' })
    ] },
  { id: 'Y7', lesson: 1, boss: true, concept: 'Challenge: division with a remainder', explain: 'The Divisor’s table → the largest answer smaller than the Dividend → the remainder by subtracting; the remainder is smaller than the Divisor.',
    variants: [asBoss(whole('hard', 62, 8)), asBoss(whole('hard', 53, 6)), asBoss(whole('hard', 47, 7)), asBoss(whole('hard', 50, 9)), asBoss(whole('hard', 38, 7)), asBoss(whole('hard', 57, 6)), asBoss(whole('hard', 61, 7)), asBoss(whole('hard', 52, 9))] },

  /* ---------- Lesson 2 · Checking the Answer (pp. 84–85) ---------- */
  { id: 'Y8', lesson: 2, concept: 'The checking mathematical sentence', explain: 'We check 14 ÷ 4 = 3 remainder 2 with: 4 × 3 + 2 = 14. If the number you get is the same as the number being divided, the answer is correct!',
    variants: [
      num('easy', 'We check: 14 ÷ 4 = 3 remainder 2\n4 × 3 + 2 = ?', 14, '4*3+2', 'Work out 4 × 3 first, then add the remainder 2.', { explain: '4 × 3 = 12, and 12 + 2 = 14 = the Dividend. The answer is correct.' }),
      num('easy', 'We check: 43 ÷ 5 = 8 remainder 3\n5 × 8 + 3 = ?', 43, '5*8+3', 'Work out 5 × 8 first, then add the remainder 3.', { explain: '5 × 8 = 40, and 40 + 3 = 43.' }),
      num('easy', 'We check: 27 ÷ 5 = 5 remainder 2\n5 × 5 + 2 = ?', 27, '5*5+2', 'Work out 5 × 5 first, then add the remainder 2.', { explain: '25 + 2 = 27.' }),
      num('medium', 'We check: 15 ÷ 4 = 3 remainder 2\n4 × 3 + 2 = ?', 14, '4*3+2', 'Work out 4 × 3 first, then add the remainder 2.', { explain: '14 is not 15, so the answer is wrong. Correct: 15 ÷ 4 = 3 remainder 3.' }),
      mc('easy', 'To check a division answer: Divisor × answer + remainder = ...', ['the Dividend', 'the Divisor', 'the remainder', 'the answer'], 'Try: 4 × 3 + 2 = 14. What is 14 in 14 ÷ 4?', { explain: 'It must equal the Dividend.' }),
      mc('easy', 'How do we check 38 ÷ 9 = 4 remainder 2?', ['9 × 4 + 2', '9 + 4 + 2', '9 × 4 − 2', '38 × 4 + 2'], 'Multiply the Divisor by the answer, then add the remainder.', { explain: '9 × 4 + 2 = 38. The answer is correct.' })
    ] },
  { id: 'Y9', lesson: 2, concept: 'Correct or wrong?', explain: 'We check twice: ① Is the remainder smaller than the Divisor? ② Does Divisor × answer + remainder = Dividend?',
    variants: [check('easy', 27, 5, 5, 2), check('easy', 50, 6, 7, 8), check('easy', 25, 7, 3, 1), check('easy', 35, 4, 9, 3), check('medium', 72, 9, 7, 9), check('medium', 53, 8, 6, 5), D(check('medium', 23, 6, 4, 3)), check('medium', 42, 5, 8, 2), check('medium', 29, 3, 8, 5), check('medium', 37, 4, 9, 1), check('medium', 19, 3, 7, 1), check('medium', 41, 9, 4, 5)] },
  { id: 'Y10', lesson: 2, concept: 'Why is the answer wrong?', explain: '28 ÷ 3 = 8 remainder 4 is wrong because the remainder 4 is bigger than the Divisor 3. Correct: 28 ÷ 3 = 9 remainder 1.',
    variants: [
      mc('easy', '28 ÷ 3 = 8 remainder 4\nWhy is this answer wrong?', ['Because the remainder 4 is bigger than the Divisor 3', 'Because the remainder 4 is smaller than 28', 'Because 28 is an even number', 'The answer is correct'], 'Compare the remainder with the Divisor.', { explain: 'The remainder must be smaller than the Divisor, and 4 > 3.' }),
      mc('easy', '15 ÷ 4 = 3 remainder 2\nWhy is this answer wrong?', ['Because 4 × 3 + 2 = 14, not 15', 'Because the remainder is bigger than the Divisor', 'Because the answer must be 4', 'The answer is correct'], 'Work out 4 × 3 + 2 and compare it with the Dividend.', { explain: '4 × 3 + 2 = 14, not 15. Correct: 3 remainder 3.' }),
      fix('easy', 28, 3, 8, 4), fix('easy', 15, 4, 3, 2), fix('medium', 50, 6, 7, 8), fix('medium', 25, 7, 3, 1), fix('medium', 47, 6, 7, 3), fix('medium', 29, 3, 8, 5)
    ] },
  { id: 'Y11', lesson: 2, boss: true, concept: 'Challenge: correct the mistake', explain: 'If the answer is wrong we find the right one: the Divisor’s table, then the remainder, and we check with the checking sentence.',
    variants: [asBoss(fix('hard', 72, 9, 7, 9)), asBoss(fix('hard', 35, 4, 9, 3)), asBoss(fix('hard', 49, 6, 7, 7)), asBoss(fix('hard', 52, 8, 6, 5)), asBoss(fix('hard', 62, 9, 7, 6)), asBoss(fix('hard', 25, 8, 2, 9)), asBoss(fix('hard', 20, 3, 5, 5)), asBoss(fix('hard', 19, 3, 7, 1))] },

  /* ---------- Lesson 3 · Using Division with a Remainder (Part 1) (pp. 86–87) ---------- */
  { id: 'Y12', lesson: 3, concept: 'How many does each person get?', explain: 'You have 37 candies and divide them equally among 5 people: 37 ÷ 5 = 7 remainder 2. Each person gets 7 candies, and 2 are left over. Pay attention to the units of the answer and the remainder.',
    variants: [
      num('easy', 'You have 37 candies. You divide them equally among 5 people.\nHow many candies does each person get?', 7, '(37-2)/5', table(37, 5), Object.assign(story(S('candy2', 37, '37 candies'), S('child', 5, '5 people')), { unit: 'candies', explain: '37 ÷ 5 = 7 remainder 2: each person gets 7.' })),
      num('easy', 'You have 25 sheets of colored paper. You divide them equally among 7 people.\nHow many sheets does each person get?', 3, '(25-4)/7', table(25, 7), Object.assign(story(S('paper2', 25, '25 sheets'), S('child', 7, '7 people')), { unit: 'sheets', explain: '25 ÷ 7 = 3 remainder 4.' })),
      num('easy', 'You have 40 sheets of colored paper. You divide them equally among 6 people.\nHow many sheets does each person get?', 6, '(40-4)/6', table(40, 6), Object.assign(story(S('paper2', 40, '40 sheets'), S('child', 6, '6 people')), { unit: 'sheets', explain: '40 ÷ 6 = 6 remainder 4.' })),
      num('medium', 'You have a ribbon that is 26 cm long. You divide it equally among 8 people.\nHow many cm does each person get?', 3, '(26-2)/8', table(26, 8), Object.assign(story(S('ribbon', null, '26 cm'), S('child', 8, '8 people')), { unit: 'cm', explain: '26 ÷ 8 = 3 remainder 2: each person gets 3 cm.' })),
      num('medium', 'You have 41 sheets of colored paper. You divide them equally among 5 people.\nHow many sheets does each person get?', 8, '(41-1)/5', table(41, 5), Object.assign(story(S('paper2', 41, '41 sheets'), S('child', 5, '5 people')), { unit: 'sheets', explain: '41 ÷ 5 = 8 remainder 1.' })),
      num('medium', 'You have 56 sheets of colored paper. You divide them equally among 6 people.\nHow many sheets does each person get?', 9, '(56-2)/6', table(56, 6), Object.assign(story(S('paper2', 56, '56 sheets'), S('child', 6, '6 people')), { unit: 'sheets', explain: '56 ÷ 6 = 9 remainder 2.' }))
    ] },
  { id: 'Y13', lesson: 3, concept: 'How many people (or bags)?', explain: 'You have 27 candies and give 4 to each person: 27 ÷ 4 = 6 remainder 3. You can give them to 6 people, and 3 are left over.',
    variants: [
      num('easy', 'There are 11 pieces of candy. Each person gets 3 pieces.\nHow many people can you give them to?', 3, '(11-2)/3', table(11, 3), Object.assign(story(S('candy2', 11, '11 pieces'), S('candy2', 3, '3 each'), S('child', null, '? people')), { unit: 'people', explain: '11 ÷ 3 = 3 remainder 2: 3 people.' })),
      num('easy', 'You have 27 candies. You give 4 candies to each person.\nHow many people can you give them to?', 6, '(27-3)/4', table(27, 4), Object.assign(story(S('candy2', 27, '27 candies'), S('candy2', 4, '4 each'), S('child', null, '? people')), { unit: 'people', explain: '27 ÷ 4 = 6 remainder 3.' })),
      num('easy', 'You have 28 flower seeds. You give 3 seeds to each person.\nHow many people can you give them to?', 9, '(28-1)/3', table(28, 3), Object.assign(story(S('seed', 28, '28 seeds'), S('seed', 3, '3 each'), S('child', null, '? people')), { unit: 'people', explain: '28 ÷ 3 = 9 remainder 1.' })),
      num('medium', 'You have 22 candies. You put 4 candies into each bag.\nHow many bags can you make?', 5, '(22-2)/4', table(22, 4), Object.assign(story(S('candy2', 22, '22 candies'), S('candy2', 4, '4 in a bag'), S('bag', null, '? bags')), { unit: 'bags', explain: '22 ÷ 4 = 5 remainder 2.' })),
      num('medium', 'You have 44 blocks. You give 8 blocks to each person.\nHow many people can you give them to?', 5, '(44-4)/8', table(44, 8), Object.assign(story(S('block', 44, '44 blocks'), S('block', 8, '8 each'), S('child', null, '? people')), { unit: 'people', explain: '44 ÷ 8 = 5 remainder 4.' })),
      num('medium', 'You have 51 pencils. You give 9 pencils to each person.\nHow many people can you give them to?', 5, '(51-6)/9', table(51, 9), Object.assign(story(S('pencil2', 51, '51 pencils'), S('pencil2', 9, '9 each'), S('child', null, '? people')), { unit: 'people', explain: '51 ÷ 9 = 5 remainder 6.' })),
      num('medium', 'You have 45 cookies. You put 6 cookies into each bag.\nHow many bags can you make?', 7, '(45-3)/6', table(45, 6), Object.assign(story(S('cookie', 45, '45 cookies'), S('cookie', 6, '6 in a bag'), S('bag', null, '? bags')), { unit: 'bags', explain: '45 ÷ 6 = 7 remainder 3.' }))
    ] },
  { id: 'Y14', lesson: 3, concept: 'How many are left over?', explain: 'The remainder in a word problem is what is left over. 37 candies among 5 people: 37 ÷ 5 = 7 remainder 2, so 2 candies are left over.',
    variants: [
      num('easy', 'You have 37 candies. You divide them equally among 5 people.\nHow many candies are left over?', 2, '37-5*7', 'Each person gets 7. How many do the five people get together? Take that from 37.', Object.assign(story(S('candy2', 37, '37 candies'), S('child', 5, '5 people')), { unit: 'candies', explain: '37 ÷ 5 = 7 remainder 2.' })),
      num('easy', 'You have 27 candies. You give 4 candies to each person.\nHow many candies are left over?', 3, '27-4*6', 'You can give them to 6 people. Work out 27 − (4 × 6).', Object.assign(story(S('candy2', 27, '27 candies'), S('candy2', 4, '4 each')), { unit: 'candies', explain: '27 ÷ 4 = 6 remainder 3.' })),
      num('easy', 'You have 25 sheets of colored paper. You divide them equally among 7 people.\nHow many sheets are left over?', 4, '25-7*3', 'Each person gets 3 sheets. Work out 25 − (7 × 3).', Object.assign(story(S('paper2', 25, '25 sheets'), S('child', 7, '7 people')), { unit: 'sheets', explain: '25 ÷ 7 = 3 remainder 4.' })),
      num('medium', 'You have 28 flower seeds. You give 3 seeds to each person.\nHow many seeds are left over?', 1, '28-3*9', table(28, 3), Object.assign(story(S('seed', 28, '28 seeds'), S('seed', 3, '3 each')), { unit: 'seed', explain: '28 ÷ 3 = 9 remainder 1.' })),
      num('medium', 'You have 33 flower seeds. You give 7 seeds to each person.\nHow many seeds are left over?', 5, '33-7*4', table(33, 7), Object.assign(story(S('seed', 33, '33 seeds'), S('seed', 7, '7 each')), { unit: 'seeds', explain: '33 ÷ 7 = 4 remainder 5.' })),
      num('medium', 'You have a ribbon that is 60 cm long. You divide it equally among 9 people.\nHow many cm are left over?', 6, '60-9*6', table(60, 9), Object.assign(story(S('ribbon', null, '60 cm'), S('child', 9, '9 people')), { unit: 'cm', explain: '60 ÷ 9 = 6 remainder 6: 6 cm are left over.' }))
    ] },
  { id: 'Y15', lesson: 3, boss: true, concept: 'Challenge: the whole answer with its units', explain: 'We write the mathematical sentence, then the answer with the unit of the answer and the unit of the remainder: "You can give them to 6 people, and 3 candies are left over."',
    variants: [
      asBoss(mc('hard', 'You have 27 candies. You give 4 candies to each person.\nWhat is the whole answer?', ['You can give them to 6 people, and 3 candies are left over', 'You can give them to 4 people, and 6 candies are left over', 'You can give them to 6 people, and 3 people are left over', 'You can give them to 7 people, and 0 candies are left over'], table(27, 4), Object.assign(story(S('candy2', 27, '27 candies'), S('candy2', 4, '4 each'), S('child', null, '? people')), { explain: '27 ÷ 4 = 6 remainder 3.' }))),
      asBoss(mc('hard', 'You have 41 sheets of colored paper. You divide them equally among 5 people.\nWhat is the whole answer?', ['Each person gets 8 sheets, and 1 sheet is left over', 'Each person gets 5 sheets, and 8 sheets are left over', 'Each person gets 7 sheets, and 6 sheets are left over', 'Each person gets 8 sheets, and 5 sheets are left over'], table(41, 5), Object.assign(story(S('paper2', 41, '41 sheets'), S('child', 5, '5 people')), { explain: '41 ÷ 5 = 8 remainder 1.' }))),
      asBoss(mc('hard', 'You have 33 flower seeds. You give 7 seeds to each person.\nWhat is the whole answer?', ['You can give them to 4 people, and 5 seeds are left over', 'You can give them to 5 people, and 4 seeds are left over', 'You can give them to 3 people, and 12 seeds are left over', 'You can give them to 4 people, and 5 people are left over'], table(33, 7), Object.assign(story(S('seed', 33, '33 seeds'), S('seed', 7, '7 each'), S('child', null, '? people')), { explain: '33 ÷ 7 = 4 remainder 5.' }))),
      asBoss(mc('hard', 'You have a ribbon that is 26 cm long. You divide it equally among 8 people.\nWhat is the whole answer?', ['Each person gets 3 cm, and 2 cm are left over', 'Each person gets 2 cm, and 3 cm are left over', 'Each person gets 3 cm, and 2 people are left over', 'Each person gets 4 cm, and 0 cm are left over'], table(26, 8), Object.assign(story(S('ribbon', null, '26 cm'), S('child', 8, '8 people')), { explain: '26 ÷ 8 = 3 remainder 2.' }))),
      asBoss(mc('hard', 'You have 56 sheets of colored paper. You divide them equally among 6 people.\nWhat is the whole answer?', ['Each person gets 9 sheets, and 2 sheets are left over', 'Each person gets 8 sheets, and 8 sheets are left over', 'Each person gets 6 sheets, and 9 sheets are left over', 'Each person gets 9 sheets, and 6 sheets are left over'], table(56, 6), Object.assign(story(S('paper2', 56, '56 sheets'), S('child', 6, '6 people')), { explain: '56 ÷ 6 = 9 remainder 2.' })))
    ] },

  /* ---------- Lesson 4 · Using Division with a Remainder (Part 2) (pp. 88–89) ---------- */
  { id: 'Y16', lesson: 4, concept: 'Add 1 to the answer', explain: 'You have 22 cookies and put 6 on each plate: 22 ÷ 6 = 3 remainder 4. "To put all the cookies" means the remainder (4 cookies) also needs a plate, so we add 1: 4 plates.',
    variants: [
      num('easy', 'You have 22 cookies. You put 6 cookies on each plate.\nHow many plates do you need to put all the cookies on plates?', 4, '(22-4)/6+1', '22 ÷ 6 = 3 remainder 4. The 4 cookies left also need a plate.', { fig: 'g3Story', pic: { parts: [S('cookie', 22, '22 cookies'), S('cookie', 6, '6 on a plate'), S('plate', null, '? plates')] }, unit: 'plates', explain: '22 ÷ 6 = 3 remainder 4. Add 1 for the remainder: 4 plates.' }),
      num('easy', 'There are 43 children. One seat can fit 5 children.\nHow many seats are needed for everyone to sit down?', 9, '(43-3)/5+1', '43 ÷ 5 = 8 remainder 3. Do the 3 children stand?', Object.assign(story(S('child', 43, '43 children'), S('bench', null, '5 on a seat')), { unit: 'seats', explain: '43 ÷ 5 = 8 remainder 3. Add 1: 9 seats.' })),
      num('easy', 'A book has 50 pages. You read 8 pages a day.\nHow many days will it take to finish reading the entire book?', 7, '(50-2)/8+1', '50 ÷ 8 = 6 remainder 2. The 2 pages left need another day.', Object.assign(story(S('page', 50, '50 pages'), S('page', 8, '8 pages a day')), { unit: 'days', explain: '50 ÷ 8 = 6 remainder 2. Add 1: 7 days.' })),
      num('medium', 'You have 44 books. You carry 7 books at a time.\nHow many trips will it take to carry all the books?', 7, '(44-2)/7+1', '44 ÷ 7 = 6 remainder 2. Do you leave the 2 books behind?', Object.assign(story(S('books', 44, '44 books'), S('backpack', null, '7 books a trip')), { unit: 'trips', explain: '44 ÷ 7 = 6 remainder 2. Add 1: 7 trips.' })),
      num('medium', 'There are 50 children. They will ride in carts that hold 6 people each.\nHow many carts are needed for everyone to ride?', 9, '(50-2)/6+1', '50 ÷ 6 = 8 remainder 2. The 2 children left need a cart.', Object.assign(story(S('child', 50, '50 children'), S('wagon', null, '6 in a cart')), { unit: 'carts', explain: '50 ÷ 6 = 8 remainder 2. Add 1: 9 carts.' })),
      num('medium', 'You put 19 balls into boxes, 2 balls per box.\nHow many boxes are needed to put all the balls into boxes?', 10, '(19-1)/2+1', '19 ÷ 2 = 9 remainder 1. And the ball left?', Object.assign(story(S('ball', 19, '19 balls'), S('ball', 2, '2 in a box'), S('box', null, '? boxes')), { unit: 'boxes', explain: '19 ÷ 2 = 9 remainder 1. Add 1: 10 boxes.' })),
      num('medium', 'You are putting 34 cans into boxes, 4 cans per box.\nHow many boxes are needed to put all the cans into boxes?', 9, '(34-2)/4+1', '34 ÷ 4 = 8 remainder 2. The 2 cans left need a box.', Object.assign(story(S('can', 34, '34 cans'), S('can', 4, '4 in a box'), S('box', null, '? boxes')), { unit: 'boxes', explain: '34 ÷ 4 = 8 remainder 2. Add 1: 9 boxes.' })),
      num('medium', 'There are 53 children. One seat can fit 6 children.\nHow many seats are needed for everyone to sit down?', 9, '(53-5)/6+1', '53 ÷ 6 = 8 remainder 5.', Object.assign(story(S('child', 53, '53 children'), S('bench', null, '6 on a seat')), { unit: 'seats', explain: '53 ÷ 6 = 8 remainder 5. Add 1: 9 seats.' })),
      num('medium', 'You have 29 books. You carry 8 books at a time.\nHow many trips will it take to carry all the books?', 4, '(29-5)/8+1', '29 ÷ 8 = 3 remainder 5.', Object.assign(story(S('books', 29, '29 books'), S('backpack', null, '8 books a trip')), { unit: 'trips', explain: '29 ÷ 8 = 3 remainder 5. Add 1: 4 trips.' }))
    ] },
  { id: 'Y17', lesson: 4, concept: 'Ignore the remainder', explain: 'You have 32 balls and put 6 into each box: 32 ÷ 6 = 5 remainder 2. The question asks for the boxes that have exactly 6 balls; the 2 balls don’t make a full box, so we ignore the remainder: 5 boxes.',
    variants: [
      num('easy', 'You have 32 balls. You put 6 balls into each box.\nHow many boxes have 6 balls in them?', 5, '(32-2)/6', '32 ÷ 6 = 5 remainder 2. Do the 2 balls fill a box of 6?', { fig: 'g3Story', pic: { parts: [S('ball', 32, '32 balls'), S('ball', 6, '6 in a box'), S('box', null, '? boxes')] }, unit: 'boxes', explain: '32 ÷ 6 = 5 remainder 2. Ignore the remainder: 5 boxes.' }),
      num('easy', 'You are making toy cars. You have 38 tires. One car needs 4 tires.\nHow many cars can you make?', 9, '(38-2)/4', '38 ÷ 4 = 9 remainder 2. Are 2 tires enough for a car?', Object.assign(story(S('wheel', 38, '38 tires'), S('wheel', 4, '4 for a car'), S('car', null, '? cars')), { unit: 'cars', explain: '38 ÷ 4 = 9 remainder 2. Ignore the remainder: 9 cars.' })),
      num('medium', 'You are placing 3 cm-thick picture books on a 26 cm-wide shelf.\nHow many books can you put on the shelf?', 8, '(26-2)/3', '26 ÷ 3 = 8 remainder 2. Does a book fit in 2 cm?', { fig: 'g3Tape', pic: { big: 26, small: 3, unit: 'cm' }, unit: 'books', explain: '26 ÷ 3 = 8 remainder 2. Ignore the remainder: 8 books.' }),
      num('medium', 'A shelf is 38 cm high. You stack boxes that are 7 cm high.\nHow many boxes can you stack?', 5, '(38-3)/7', '38 ÷ 7 = 5 remainder 3. Does a box fit in 3 cm?', { fig: 'g3Tape', pic: { big: 38, small: 7, unit: 'cm' }, unit: 'boxes', explain: '38 ÷ 7 = 5 remainder 3. Ignore the remainder: 5 boxes.' }),
      num('medium', 'You are placing 4 cm-thick picture books on a 37 cm-wide shelf.\nHow many books can you put on the shelf?', 9, '(37-1)/4', '37 ÷ 4 = 9 remainder 1.', { fig: 'g3Tape', pic: { big: 37, small: 4, unit: 'cm' }, unit: 'books', explain: '37 ÷ 4 = 9 remainder 1. Ignore the remainder: 9 books.' }),
      num('medium', 'A shelf is 45 cm high. You stack boxes that are 8 cm high.\nHow many boxes can you stack?', 5, '(45-5)/8', '45 ÷ 8 = 5 remainder 5.', { fig: 'g3Tape', pic: { big: 45, small: 8, unit: 'cm' }, unit: 'boxes', explain: '45 ÷ 8 = 5 remainder 5. Ignore the remainder: 5 boxes.' })
    ] },
  { id: 'Y18', lesson: 4, concept: 'Add 1 or ignore the remainder?', explain: 'You must decide which way is correct based on the question: if everything must fit ("all the cookies", "everyone to sit down") we add 1; if we count only what is full ("exactly 6", "books on the shelf") we ignore the remainder.',
    variants: [
      mc('easy', '22 cookies, 6 on each plate: 22 ÷ 6 = 3 remainder 4.\nWhy do we need a 4th plate?', ['Because the 4 cookies left also need a plate', 'Because 4 is bigger than 3', 'Because each plate has 4 cookies', 'We don’t need a 4th plate'], 'Look at the cookies on the dashed plate.', { fig: 'g3Rem', pic: { total: 22, per: 6, icon: 'cookie', need: true }, explain: 'We want all the cookies on plates, so the remainder needs a plate: 3 + 1 = 4.' }),
      mc('easy', '32 balls, 6 in each box: 32 ÷ 6 = 5 remainder 2.\nHow many boxes have exactly 6 balls?', ['5 boxes; we ignore the 2 balls', '6 boxes; we add 1', '2 boxes', '32 boxes'], 'Do the 2 balls make a full box of 6?', { fig: 'g3Rem', pic: { total: 32, per: 6, icon: 'ball', box: 'box' }, explain: 'The 2 balls don’t make a full box, so we ignore the remainder.' }),
      mc('medium', 'In which problem do we add 1 to the answer?', ['43 children, 5 on a seat. How many seats are needed for everyone to sit down?', '38 tires, 4 for a car. How many cars can you make?', 'A 26 cm shelf and 3 cm books. How many books fit on the shelf?'], 'Must nobody be left standing?', { explain: 'For everyone to sit down, the children left need one more seat.' }),
      mc('medium', 'In which problem do we ignore the remainder?', ['38 tires, 4 for a car. How many cars can you make?', '50 children, 6 in a cart. How many carts are needed for everyone to ride?', '22 cookies, 6 on a plate. How many plates do you need for all the cookies?'], 'Are the 2 tires left enough to make a car?', { explain: 'The 2 tires are not enough for a car, so we ignore the remainder.' }),
      tf('medium', '50 pages, 8 pages a day: 50 ÷ 8 = 6 remainder 2.\nIt takes 6 days to finish the entire book.', 1, 'The 2 pages left: when do you read them?', { explain: 'False: it takes 7 days, because the 2 pages left need another day.' })
    ] },
  { id: 'Y19', lesson: 4, boss: true, concept: 'Challenge: read the question, then decide', explain: 'We divide, then decide: "for everyone / all the …" → add 1; "exactly / can you make / on the shelf" → ignore the remainder.',
    variants: [
      asBoss(num('hard', 'There are 53 children. One seat can fit 6 children.\nHow many seats are needed for everyone to sit down?', 9, '(53-5)/6+1', 'Is anybody left standing?', Object.assign(story(S('child', 53, '53 children'), S('bench', null, '6 on a seat')), { unit: 'seats', explain: '53 ÷ 6 = 8 remainder 5. Add 1: 9.' }))),
      asBoss(num('hard', 'You are placing 4 cm-thick picture books on a 37 cm-wide shelf.\nHow many books can you put on the shelf?', 9, '(37-1)/4', 'Does a book fit in the remainder?', { fig: 'g3Tape', pic: { big: 37, small: 4, unit: 'cm' }, unit: 'books', explain: '37 ÷ 4 = 9 remainder 1. Ignore the remainder: 9.' })),
      asBoss(num('hard', 'You have 29 books. You carry 8 books at a time.\nHow many trips will it take to carry all the books?', 4, '(29-5)/8+1', 'Are any books left that you have not carried?', Object.assign(story(S('books', 29, '29 books'), S('backpack', null, '8 books a trip')), { unit: 'trips', explain: '29 ÷ 8 = 3 remainder 5. Add 1: 4.' }))),
      asBoss(num('hard', 'A shelf is 45 cm high. You stack boxes that are 8 cm high.\nHow many boxes can you stack?', 5, '(45-5)/8', 'Does a box fit in the remainder?', { fig: 'g3Tape', pic: { big: 45, small: 8, unit: 'cm' }, unit: 'boxes', explain: '45 ÷ 8 = 5 remainder 5. Ignore the remainder: 5.' })),
      D(asBoss(num('hard', 'You are putting 34 cans into boxes, 4 cans per box.\nHow many boxes of 4 cans can you make?', 8, '(34-2)/4', 'Do the cans left make a full box of 4?', Object.assign(story(S('can', 34, '34 cans'), S('can', 4, '4 in a box'), S('box', null, '? boxes')), { unit: 'boxes', explain: '34 ÷ 4 = 8 remainder 2. The 2 cans don’t make a box of 4: 8 boxes.' })))),
      asBoss(num('hard', 'There are 50 children. They will ride in carts that hold 6 people each.\nHow many carts are needed for everyone to ride?', 9, '(50-2)/6+1', 'Is anybody left without a cart?', Object.assign(story(S('child', 50, '50 children'), S('wagon', null, '6 in a cart')), { unit: 'carts', explain: '50 ÷ 6 = 8 remainder 2. Add 1: 9.' })))
    ] }
];
})();
