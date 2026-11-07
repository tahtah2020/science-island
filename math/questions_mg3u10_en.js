/* Grade 3 · Mathematics (Languages track) · Chapter 10 "Vertical Multiplication (Part 1)", Term 1 2026/2027
   Source: Ministry book "Primary 3 Mathematics, Term 1" (English), Chapter 10 (pages 106–117): lessons 10-1 to 10-5 and "Review and Practice".
   Follows questions_mg3u10_ar.js phrasing by phrasing (same ids, types, levels and answers; check_questions checks the parity).
   Idea ids: Y21 … Y39 (unit 8 uses Y1–Y19; the lesson is in `lesson`). Boss ideas: Y24, Y28, Y31, Y35, Y39.
   Owner (6 Nov 2026): easy first, slow rise, few hard questions (Boss only), a hint on every phrasing that never gives the answer; every word problem drawn.
   Pictures: owner icons (Gemini sets 3 and 5) and the shop scene shop.jpg; the English book's "keychains" use the owner's keychain icon.
   Vertical multiplication with the book's picture (g3Column, op: 'x'): place names over the columns, the × sign on the left in English, an empty answer row.
   Book words: multiplicand, "multiplied by 10 / by 100", vertical method, ones place, carry over, "Let's calculate using clever ways",
   multiply the two smallest numbers first, parentheses ( ), mathematical sentence, unit.
   Review notes:
   - Exercise answers are not printed in the book (except "How to Solve"); all are computed.
   - Lesson 4: "clever ways" = multiply the two smaller numbers first and put parentheses around them, as the book does (50 × (3 × 3)).
   - Lesson 5: "Write one mathematical sentence" is asked as a choice between sentences; the number answer is typed with its unit beside the box. */
(function () {
window.CHAPTER = { id: 'mg3u10', title: 'Vertical Multiplication (Part 1)', grade: 'Grade 3', track: 'Languages' };

const num = (level, q, answer, calc, hint, extra = {}) => Object.assign({ type: 'num', mode: 'normal', level, q, answer: String(answer), calc, hint }, extra);
const mc = (level, q, options, hint, extra = {}) => Object.assign({ type: 'mc', mode: 'normal', level, q, options, answer: 0, hint }, extra);
const tf = (level, q, answer, hint, extra = {}) => Object.assign({ type: 'tf', mode: 'normal', level, q, answer, hint }, extra);
const c = x => x.toLocaleString('en-US');
const asBoss = v => Object.assign(v, { level: 'hard', mode: 'boss' });
const fast = v => Object.assign(v, { mode: 'timed', seconds: 25 });
const S = (icon, k, label) => ({ icon, n: k, label });
const story = (...parts) => ({ fig: 'g3Story', pic: { parts } });

/* lesson 1: a × b where a is tens or hundreds */
const tens = (level, a, b) => {
  const z = a % 100 === 0 ? 2 : 1, d = a / 10 ** z;
  return num(level, `${a} × ${b} = ?`, a * b, `${a}*${b}`, `Work out ${d} × ${b} first, then add ${z === 1 ? 'one zero' : 'two zeros'} to the answer.`,
    { fig: 'g3Bundles', pic: { parts: [[a, b]] }, explain: `${d} × ${b} = ${d * b}, and ${a} × ${b} = ${c(a * b)} (${z === 1 ? 'ten times' : 'one hundred times'} the answer).` });
};
/* a word problem of buying: count × price */
const buy = (level, q, k, price, icon, what) => num(level, q, k * price, `${price}*${k}`, `The mathematical sentence: ${price} × ${k}. Work out ${price / (price % 100 === 0 ? 100 : 10)} × ${k} first, then add the zeros.`,
  Object.assign(story(S(icon, k, `${k} ${what}`), S('banknote', null, `${price} EGP each`)), { unit: 'EGP', explain: `${price} × ${k} = ${c(price * k)}. Answer: ${c(price * k)} EGP.` }));

/* lessons 2-3: vertical multiplication with the book's column */
const vert = (level, a, b, extra = {}) => {
  const o = a % 10, cr = Math.floor(o * b / 10);
  const hint = `Start from the ones place: ${b} × ${o} = ${o * b}.${cr ? ` Write ${o * b % 10} in the ones place and carry over ${cr} to the tens.` : ''} Then multiply ${b} by the tens digit${cr ? ' and add the carried number' : ''}${a >= 100 ? ', then the hundreds' : ''}.`;
  return num(level, `Let’s calculate using the vertical method:\n${a} × ${b} = ?`, a * b, `${a}*${b}`, hint, Object.assign({ fig: 'g3Column', pic: { a, b, op: 'x' }, explain: `${a} × ${b} = ${c(a * b)}` }, extra));
};
const carryQ = (level, a, b) => {
  const o = a % 10, cr = Math.floor(o * b / 10);
  return num(level, `We calculate ${a} × ${b} using the vertical method.\n${b} × ${o} = ${o * b}: we write ${o * b % 10} in the ones place.\nHow much do we carry over to the tens place?`, cr, `${cr}`, `${o * b} = ${cr} tens and ${o * b % 10} ones.`, { fig: 'g3Column', pic: { a, b, op: 'x' }, explain: `We carry over ${cr} to the tens.` });
};
const tensDigit = (level, a, b) => {
  const o = a % 10, t = Math.floor(a / 10) % 10, cr = Math.floor(o * b / 10), r = (t * b + cr) % 10;
  return num(level, `We calculate ${a} × ${b} using the vertical method.\nWe carried over ${cr} to the tens.\n${b} × ${t}, then add ${cr}. Which digit do we write in the tens place?`, r, `(${t}*${b}+${cr})-${t * b + cr - r}`, `Work out ${b} × ${t} = ${t * b}, then add ${cr}.`, { fig: 'g3Column', pic: { a, b, op: 'x' }, explain: `${t * b} + ${cr} = ${t * b + cr}: we write ${r}${t * b + cr >= 10 ? ` and carry over ${Math.floor((t * b + cr) / 10)}` : ''}.` });
};

/* lesson 4: clever ways "a × b × c = a × (b × c)" */
const smart = (level, a, b, cc, extra = {}) => num(level, `Let’s calculate using clever ways:\n${a} × ${b} × ${cc} = ?`, a * b * cc, `${a}*${b}*${cc}`,
  `Multiply the two smaller numbers first: ${a} × (${b} × ${cc}).`, Object.assign({ explain: `${b} × ${cc} = ${b * cc}, then ${a} × ${b * cc} = ${c(a * b * cc)}.` }, extra));

window.IDEAS = [
  /* ---------- Lesson 1 · Multiplying by Tens and Hundreds (pp. 106–107) ---------- */
  { id: 'Y21', lesson: 1, concept: 'Multiplying tens', explain: 'When the multiplicand is multiplied by 10, the answer is also multiplied by 10: 2 × 4 = 8, so 20 × 4 = 80 (ten times the answer of 2 × 4).',
    variants: [fast(tens('easy', 20, 4)), fast(tens('easy', 30, 2)), tens('easy', 30, 6), tens('easy', 40, 2), tens('easy', 80, 3), tens('easy', 50, 6), tens('medium', 60, 8), tens('medium', 40, 5), tens('medium', 60, 4), tens('medium', 70, 3), tens('medium', 90, 5),
      mc('easy', '2 × 4 = 8\nSo what is 20 × 4?', ['80', '8', '800', '24'], 'The multiplicand is 10 times bigger, so the answer is 10 times bigger too.', { explain: '20 × 4 = 80: ten times the answer of 2 × 4.' })] },
  { id: 'Y22', lesson: 1, concept: 'Multiplying hundreds', explain: 'When the multiplicand is multiplied by 100, the answer is also multiplied by 100: 2 × 4 = 8, so 200 × 4 = 800 (one hundred times).',
    variants: [fast(tens('easy', 200, 4)), tens('easy', 300, 2), tens('easy', 200, 5), tens('medium', 500, 7), tens('medium', 900, 7), tens('medium', 600, 4), tens('medium', 700, 7), tens('medium', 500, 6), tens('medium', 200, 8), tens('medium', 400, 3), tens('medium', 800, 4), tens('medium', 200, 9),
      mc('easy', '5 × 7 = 35\nSo what is 500 × 7?', ['3,500', '350', '35', '35,000'], 'The multiplicand is 100 times bigger, so add two zeros.', { explain: '500 × 7 = 3,500.' })] },
  { id: 'Y23', lesson: 1, concept: 'Buying problems', explain: 'You bought 4 balls that cost 300 EGP each: the mathematical sentence is 300 × 4 = 1,200, and the answer is 1,200 EGP. Write your answer with the unit.',
    variants: [
      buy('easy', 'You bought 3 notebooks that cost 60 EGP each.\nWhat is the total cost in EGP?', 3, 60, 'notebook2', 'notebooks'),
      buy('easy', 'You bought 6 chocolates that cost 20 EGP each.\nWhat is the total cost in EGP?', 6, 20, 'chocolate', 'chocolates'),
      buy('easy', 'A bottle of juice costs 50 EGP. If you buy 6 bottles, what is the total cost in EGP?', 6, 50, 'juice', 'bottles'),
      buy('medium', 'You bought 4 balls that cost 300 EGP each.\nWhat is the total cost in EGP?', 4, 300, 'soccer', 'balls'),
      buy('medium', 'You bought 8 picture books that cost 300 EGP each.\nWhat is the total cost in EGP?', 8, 300, 'picturebook', 'books'),
      buy('medium', 'You bought 8 keychains that cost 300 EGP each.\nWhat is the total cost in EGP?', 8, 300, 'keychain', 'keychains'),
      buy('medium', 'A bouquet costs 200 EGP. If you buy 5 bouquets, what is the total cost in EGP?', 5, 200, 'bouquet', 'bouquets'),
      mc('easy', 'You bought 4 balls that cost 300 EGP each.\nWhich mathematical sentence?', ['300 × 4', '300 + 4', '300 − 4', '300 ÷ 4'], '4 balls with the same price: we repeat 300 four times.', Object.assign(story(S('soccer', 4, '4 balls'), S('banknote', null, '300 EGP each')), { explain: '300 × 4 = 1,200 EGP.' }))
    ] },
  { id: 'Y24', lesson: 1, boss: true, concept: 'Challenge: multiplying tens and hundreds', explain: 'We multiply the digits without the zeros, then add the zeros to the answer.',
    variants: [asBoss(tens('hard', 900, 8)), asBoss(tens('hard', 700, 6)), asBoss(tens('hard', 400, 8)), asBoss(tens('hard', 90, 7)), asBoss(tens('hard', 800, 9)), asBoss(buy('hard', 'You bought 7 bouquets that cost 500 EGP each.\nWhat is the total cost in EGP?', 7, 500, 'bouquet', 'bouquets'))] },

  /* ---------- Lesson 2 · Vertical Multiplication (2-digit × 1-digit) (pp. 108–109) ---------- */
  { id: 'Y25', lesson: 2, concept: 'Vertical multiplication without carrying', explain: 'Align the place values vertically, and start the calculation from the ones place: 43 × 2: 2 × 3 = 6 in the ones, then 2 × 4 = 8 in the tens. The answer is 86.',
    variants: [vert('easy', 43, 2), vert('easy', 21, 4), vert('easy', 23, 3), vert('easy', 41, 2), vert('easy', 31, 3), vert('easy', 23, 2), vert('easy', 42, 2), vert('easy', 63, 3), vert('easy', 83, 2),
      mc('easy', 'When we multiply using the vertical method, we start the calculation from the ...', ['ones place', 'tens place', 'hundreds place'], 'Start from the right side.', { explain: 'We start from the ones place.' })] },
  { id: 'Y26', lesson: 2, concept: 'The carried number', explain: '26 × 3: 3 × 6 = 18: write 8 in the ones place and carry over 1 to the tens place. Then 3 × 2 = 6, add the carried 1: 7 in the tens place. The answer is 78.',
    variants: [carryQ('easy', 26, 3), tensDigit('easy', 26, 3), carryQ('easy', 75, 4), carryQ('easy', 16, 5), tensDigit('medium', 16, 5), carryQ('medium', 79, 8), tensDigit('medium', 34, 3), carryQ('medium', 68, 7), tensDigit('medium', 15, 6),
      tf('easy', 'In 26 × 3 we write all of 18 in the ones place.', 1, 'The ones place holds only one digit.', { explain: 'False: we write 8 in the ones place and carry over 1 to the tens.' })] },
  { id: 'Y27', lesson: 2, concept: 'Vertical multiplication with carrying', explain: 'Remember to carry over and add it after you multiply the tens: 75 × 4: 4 × 5 = 20 (write 0, carry 2), 4 × 7 = 28 + 2 = 30. The answer is 300.',
    variants: [vert('easy', 26, 3), vert('easy', 16, 5), vert('easy', 18, 4), vert('easy', 14, 5), vert('medium', 25, 3), vert('medium', 34, 3), vert('medium', 15, 6), vert('medium', 15, 7), vert('medium', 35, 3), vert('medium', 37, 3), vert('medium', 26, 4), vert('medium', 72, 2), vert('medium', 73, 3), vert('medium', 75, 4), vert('medium', 68, 5)] },
  { id: 'Y28', lesson: 2, boss: true, concept: 'Challenge: 2-digit × 1-digit', explain: 'From the ones, carry over the tens, then multiply the tens and add the carried number.',
    variants: [asBoss(vert('hard', 79, 8)), asBoss(vert('hard', 84, 9)), asBoss(vert('hard', 65, 8)), asBoss(vert('hard', 49, 9)), asBoss(vert('hard', 68, 7)), asBoss(vert('hard', 38, 7)), asBoss(vert('hard', 54, 6)), asBoss(vert('hard', 69, 6)), asBoss(vert('hard', 29, 7)), asBoss(vert('hard', 28, 8)), asBoss(vert('hard', 79, 4)), asBoss(vert('hard', 75, 6))] },

  /* ---------- Lesson 3 · Vertical Multiplication (3-digit × 1-digit) (pp. 110–111) ---------- */
  { id: 'Y29', lesson: 3, concept: '3-digit × 1-digit (little carrying)', explain: 'The same way as 2-digit × 1-digit: align vertically, then the ones, the tens and the hundreds in order. 148 × 2: 2 × 8 = 16 (6, carry 1), 2 × 4 = 8 + 1 = 9, 2 × 1 = 2. The answer is 296.',
    variants: [vert('easy', 312, 3), vert('easy', 321, 3), vert('easy', 113, 2), vert('easy', 213, 3), vert('easy', 321, 2), vert('medium', 148, 2), vert('medium', 426, 2), vert('medium', 124, 3), vert('medium', 183, 3), vert('medium', 182, 4), vert('medium', 236, 4), vert('medium', 484, 2), vert('medium', 375, 2)] },
  { id: 'Y30', lesson: 3, concept: '3-digit × 1-digit (carrying in more places)', explain: '276 × 6: 6 × 6 = 36 (6, carry 3), 6 × 7 = 42 + 3 = 45 (5, carry 4), 6 × 2 = 12 + 4 = 16. The answer is 1,656.',
    variants: [vert('medium', 197, 3), vert('medium', 468, 2), vert('medium', 341, 7), vert('medium', 648, 3), vert('medium', 251, 7), vert('medium', 450, 3), vert('medium', 706, 5), vert('medium', 608, 7), vert('medium', 124, 6), vert('medium', 145, 4), vert('medium', 507, 2), vert('medium', 604, 3), vert('medium', 238, 5),
      tensDigit('medium', 276, 6)] },
  { id: 'Y31', lesson: 3, boss: true, concept: 'Challenge: 3-digit × 1-digit', explain: 'Place by place from the ones, and never forget the carried number in each place.',
    variants: [asBoss(vert('hard', 276, 6)), asBoss(vert('hard', 703, 9)), asBoss(vert('hard', 387, 6)), asBoss(vert('hard', 907, 8)), asBoss(vert('hard', 368, 9)), asBoss(vert('hard', 667, 8)), asBoss(vert('hard', 588, 9)), asBoss(vert('hard', 745, 7)), asBoss(vert('hard', 426, 7)), asBoss(vert('hard', 237, 8)), asBoss(vert('hard', 385, 6))] },

  /* ---------- Lesson 4 · Rules of Multiplication (pp. 112–113) ---------- */
  { id: 'Y32', lesson: 4, concept: 'Multiplying three numbers', explain: 'When multiplying three numbers, the answer will be the same whether you calculate the first two numbers first or the last two numbers first: (40 × 2) × 3 = 240 and 40 × (2 × 3) = 240. You can calculate easily by multiplying the two smallest numbers first.',
    variants: [
      tf('easy', 'When multiplying three numbers, the answer changes if we start with the last two numbers.', 1, 'Try: (40 × 2) × 3 and 40 × (2 × 3).', { explain: 'False: the answer is the same (240).' }),
      mc('easy', 'We calculate 50 × 3 × 3 using a clever way.\nWhich two numbers do we multiply first?', ['3 × 3', '50 × 3'], 'Multiply the two smaller numbers first.', { explain: '50 × (3 × 3) = 50 × 9 = 450.' }),
      mc('easy', 'We calculate 451 × 2 × 5 using a clever way.\nWhich two numbers do we multiply first?', ['2 × 5', '451 × 2'], '2 × 5 = 10, and multiplying by 10 is easy.', { explain: '451 × (2 × 5) = 451 × 10 = 4,510.' }),
      mc('medium', 'Which gives the answer of 40 × 2 × 3?', ['40 × 6', '40 × 5', '42 × 3', '80 × 6'], '2 × 3 = ?', { explain: '40 × (2 × 3) = 40 × 6 = 240.' }),
      num('easy', '50 × 3 × 3 = 50 × (3 × 3) = 50 × ?', 9, '3*3', 'Work out what is in the parentheses.', { explain: '3 × 3 = 9.' })
    ] },
  { id: 'Y33', lesson: 4, concept: 'Clever multiplying with 10', explain: '2 × 5 = 10, so when we see them we multiply them first: 57 × 5 × 2 = 57 × (5 × 2) = 57 × 10 = 570.',
    variants: [smart('easy', 57, 5, 2), smart('easy', 89, 5, 2), smart('easy', 42, 5, 2), smart('easy', 70, 5, 2), smart('easy', 50, 2, 5), smart('medium', 129, 5, 2), smart('medium', 136, 2, 5), smart('medium', 451, 2, 5), smart('medium', 265, 2, 5), smart('medium', 905, 2, 5), smart('medium', 246, 2, 5)] },
  { id: 'Y34', lesson: 4, concept: 'Clever multiplying with tens and hundreds', explain: '80 × 2 × 4 = 80 × (2 × 4) = 80 × 8 = 640.',
    variants: [smart('easy', 20, 3, 3), smart('easy', 30, 2, 3), smart('easy', 40, 2, 4), smart('easy', 50, 3, 3), smart('medium', 80, 2, 4), smart('medium', 70, 3, 3), smart('medium', 90, 2, 4), smart('medium', 60, 3, 2), smart('medium', 50, 2, 4), smart('medium', 300, 3, 2), smart('medium', 800, 2, 3), smart('medium', 600, 4, 2), smart('medium', 900, 3, 3), smart('medium', 11, 4, 2), smart('medium', 13, 3, 2)] },
  { id: 'Y35', lesson: 4, boss: true, concept: 'Challenge: clever ways, then the vertical method', explain: 'Multiply the two smaller numbers first, then work out the answer using the vertical method: 148 × 2 × 3 = 148 × 6 = 888.',
    variants: [[148, 2, 3], [135, 4, 2], [189, 4, 2], [372, 3, 2], [281, 2, 4], [675, 2, 2], [256, 2, 4], [231, 2, 2], [124, 2, 2]].map(([a, b, cc]) => asBoss(smart('hard', a, b, cc, { fig: 'g3Column', pic: { a, b: b * cc, op: 'x' } }))) },

  /* ---------- Lesson 5 · Using Multiplication (pp. 114–115) ---------- */
  { id: 'Y36', lesson: 5, concept: 'Word problems (one sentence)', explain: 'There are 5 buses with 43 people in each bus: the mathematical sentence is 43 × 5 = 215. Answer: 215 people. Always include the unit in the answer.',
    variants: [
      num('easy', 'There are 5 buses. If 43 people ride in each bus, how many people can ride in total?', 215, '43*5', 'The mathematical sentence: 43 × 5. Work it out using the vertical method.', Object.assign(story(S('bus', 5, '5 buses'), S('child', 43, '43 in each bus')), { unit: 'people', explain: '43 × 5 = 215 people.' })),
      num('easy', '58 people rode on each of 3 buses. How many people rode in total?', 174, '58*3', 'The mathematical sentence: 58 × 3.', Object.assign(story(S('bus', 3, '3 buses'), S('child', 58, '58 in each bus')), { unit: 'people', explain: '58 × 3 = 174 people.' })),
      num('easy', 'You make 6 bundles of flowers. Each bundle has 37 flowers.\nHow many flowers do you need in total?', 222, '37*6', 'The mathematical sentence: 37 × 6.', Object.assign(story(S('bouquet', 6, '6 bundles'), S('rose', 37, '37 in each bundle')), { unit: 'flowers', explain: '37 × 6 = 222 flowers.' })),
      num('medium', 'You make 7 bundles of flowers. Each bundle has 28 flowers.\nHow many flowers do you need in total?', 196, '28*7', 'The mathematical sentence: 28 × 7.', Object.assign(story(S('bouquet', 7, '7 bundles'), S('rose', 28, '28 in each bundle')), { unit: 'flowers', explain: '28 × 7 = 196 flowers.' })),
      num('medium', 'There are 6 boxes of snacks, and each box contains 24 snacks.\nHow many snacks are there in total?', 144, '24*6', 'The mathematical sentence: 24 × 6.', Object.assign(story(S('snackbox', 6, '6 boxes'), S('biscuit', 24, '24 in each box')), { unit: 'snacks', explain: '24 × 6 = 144 snacks.' })),
      num('medium', 'You ran around a pond 5 times. The length of one lap is 139 m.\nHow many meters did you run in total?', 695, '139*5', 'The mathematical sentence: 139 × 5.', Object.assign(story(S('lake', null, '139 m a lap'), S('runner', 5, '5 laps')), { unit: 'm', explain: '139 × 5 = 695 m.' })),
      num('medium', 'You will run around a pond that is 168 m long for 3 laps. How many meters will you run in total?', 504, '168*3', 'The mathematical sentence: 168 × 3.', Object.assign(story(S('lake', null, '168 m a lap'), S('runner', 3, '3 laps')), { unit: 'm', explain: '168 × 3 = 504 m.' })),
      num('medium', '53 people rode on each of 5 buses. How many people rode in total?', 265, '53*5', 'The mathematical sentence: 53 × 5.', Object.assign(story(S('bus', 5, '5 buses'), S('child', 53, '53 in each bus')), { unit: 'people', explain: '53 × 5 = 265 people.' })),
      mc('easy', 'You make 6 bundles of flowers. Each bundle has 37 flowers. How many flowers do you need?\nWhich answer is written correctly?', ['222 flowers', '222 bundles', '43 flowers', '222'], 'The question asks "how many flowers": write the unit "flowers" with the number.', Object.assign(story(S('bouquet', 6, '6 bundles'), S('rose', 37, '37 in each bundle')), { explain: '37 × 6 = 222, and the answer is 222 flowers.' }))
    ] },
  { id: 'Y37', lesson: 5, concept: 'One mathematical sentence for three numbers', explain: 'A cake costs 138 EGP, there are 3 cakes in one box, and you buy 2 boxes: 138 × 3 × 2 = 138 × (3 × 2) = 138 × 6 = 828. Answer: 828 EGP.',
    variants: [
      mc('easy', 'A cake costs 138 EGP. There are 3 cakes in one box. If you buy 2 boxes, which one mathematical sentence do you write?', ['138 × 3 × 2', '138 + 3 + 2', '(138 + 3) × 2', '138 × 3'], 'Price of a cake × cakes in a box × number of boxes.', Object.assign(story(S('cakebox', 2, '2 boxes'), S('cake', 3, '3 in a box'), S('banknote', null, '138 EGP a cake')), { explain: '138 × 3 × 2 = 138 × 6 = 828 EGP.' })),
      num('easy', 'A cake costs 138 EGP. There are 3 cakes in one box. If you buy 2 boxes, what is the total cost in EGP?', 828, '138*3*2', 'The sentence: 138 × (3 × 2). Work out the parentheses first.', Object.assign(story(S('cakebox', 2, '2 boxes'), S('cake', 3, '3 in a box'), S('banknote', null, '138 EGP a cake')), { unit: 'EGP', explain: '138 × 6 = 828 EGP.' })),
      num('easy', 'A pencil costs 20 EGP. There are 5 pencils in one box. If you buy 2 boxes, what is the total cost in EGP?', 200, '20*5*2', 'The sentence: 20 × (5 × 2).', Object.assign(story(S('pencils', 2, '2 boxes'), S('pencil2', 5, '5 in a box'), S('banknote', null, '20 EGP a pencil')), { unit: 'EGP', explain: '20 × 10 = 200 EGP.' })),
      num('medium', 'A cake costs 125 EGP. There are 4 cakes in one box. If you buy 2 boxes, what is the total cost in EGP?', 1000, '125*4*2', 'The sentence: 125 × (4 × 2).', Object.assign(story(S('cakebox', 2, '2 boxes'), S('cake', 4, '4 in a box'), S('banknote', null, '125 EGP a cake')), { unit: 'EGP', explain: '125 × 8 = 1,000 EGP.' })),
      num('medium', 'A sandwich costs 105 EGP. There are 2 sandwiches in one box. If you buy 2 boxes, what is the total cost in EGP?', 420, '105*2*2', 'The sentence: 105 × (2 × 2).', Object.assign(story(S('snackbox', 2, '2 boxes'), S('sandwich', 2, '2 in a box'), S('banknote', null, '105 EGP each')), { unit: 'EGP', explain: '105 × 4 = 420 EGP.' })),
      num('medium', 'A sandwich costs 110 EGP. There are 2 sandwiches in one box. If you buy 3 boxes, what is the total cost in EGP?', 660, '110*2*3', 'The sentence: 110 × (2 × 3).', Object.assign(story(S('snackbox', 3, '3 boxes'), S('sandwich', 2, '2 in a box'), S('banknote', null, '110 EGP each')), { unit: 'EGP', explain: '110 × 6 = 660 EGP.' })),
      num('medium', 'A cake costs 138 EGP. There are 5 cakes in one box. If you buy 2 boxes, what is the total cost in EGP?', 1380, '138*5*2', 'The sentence: 138 × (5 × 2). 5 × 2 = 10.', Object.assign(story(S('cakebox', 2, '2 boxes'), S('cake', 5, '5 in a box'), S('banknote', null, '138 EGP a cake')), { unit: 'EGP', explain: '138 × 10 = 1,380 EGP.' })),
      num('medium', 'There are 135 sheets of colored paper in one bundle, and 4 bundles in one box. If you buy 2 boxes, how many sheets of colored paper are there in total?', 1080, '135*4*2', 'The sentence: 135 × (4 × 2).', Object.assign(story(S('paperbox', 2, '2 boxes'), S('paperbundle', 4, '4 bundles a box'), S('paper2', null, '135 in a bundle')), { unit: 'sheets', explain: '135 × 8 = 1,080 sheets.' }))
    ] },
  { id: 'Y38', lesson: 5, concept: 'At the shop', explain: 'Read the problem: what do we know? What do we want? Then write the mathematical sentence and the answer with the unit.',
    variants: [
      mc('easy', 'At the shop: Salma bought 3 bottles of juice that cost 50 EGP each.\nWhich mathematical sentence?', ['50 × 3', '50 + 3', '50 − 3', '50 ÷ 3'], 'Every bottle has the same price, repeated 3 times.', { fig: 'g3Photo', pic: { src: 'math/assets/g3/shop.jpg' }, explain: '50 × 3 = 150 EGP.' }),
      mc('easy', 'At the shop: Omar bought 4 chocolates that cost 20 EGP each.\nHow do we write the answer?', ['80 EGP', '80 chocolates', '24 EGP', '8 EGP'], 'The question asks about the cost, so the unit is EGP.', { fig: 'g3Photo', pic: { src: 'math/assets/g3/shop.jpg' }, explain: '20 × 4 = 80 EGP.' })
    ] },
  { id: 'Y39', lesson: 5, boss: true, concept: 'Challenge: multiplication word problems', explain: 'Write one mathematical sentence, multiply the two smaller numbers first, work it out using the vertical method, and write the unit.',
    variants: [
      asBoss(num('hard', 'A sandwich costs 110 EGP. There are 2 sandwiches in one box. If you buy 3 boxes, what is the total cost in EGP?', 660, '110*2*3', 'The sentence: 110 × (2 × 3).', Object.assign(story(S('snackbox', 3, '3 boxes'), S('sandwich', 2, '2 in a box'), S('banknote', null, '110 EGP')), { unit: 'EGP', explain: '110 × 6 = 660.' }))),
      asBoss(num('hard', 'A cake costs 138 EGP. There are 5 cakes in one box. If you buy 2 boxes, what is the total cost in EGP?', 1380, '138*5*2', 'The sentence: 138 × (5 × 2).', Object.assign(story(S('cakebox', 2, '2 boxes'), S('cake', 5, '5 in a box'), S('banknote', null, '138 EGP')), { unit: 'EGP', explain: '138 × 10 = 1,380.' }))),
      asBoss(num('hard', '53 people rode on each of 5 buses. How many people rode in total?', 265, '53*5', 'The sentence: 53 × 5.', Object.assign(story(S('bus', 5, '5 buses'), S('child', 53, '53 in each bus')), { unit: 'people', explain: '53 × 5 = 265.' }))),
      asBoss(num('hard', 'You ran around a pond 7 times. The length of one lap is 139 m.\nHow many meters did you run in total?', 973, '139*7', 'The sentence: 139 × 7.', Object.assign(story(S('lake', null, '139 m a lap'), S('runner', 7, '7 laps')), { unit: 'm', explain: '139 × 7 = 973 m.' }))),
      asBoss(num('hard', 'There are 135 sheets of colored paper in one bundle, and 4 bundles in one box. If you buy 2 boxes, how many sheets are there in total?', 1080, '135*4*2', 'The sentence: 135 × (4 × 2).', Object.assign(story(S('paperbox', 2, '2 boxes'), S('paperbundle', 4, '4 bundles a box'), S('paper2', null, '135 in a bundle')), { unit: 'sheets', explain: '135 × 8 = 1,080.' })))
    ] }
];
})();
