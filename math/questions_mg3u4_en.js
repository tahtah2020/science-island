/* Grade 3 · Mathematics (Languages track) · Chapter 4 "Addition and Subtraction", Term 1 2026/2027
   Source: Ministry book "Primary 3 Mathematics, Term 1" (English), Chapter 4 (pages 44–53): lessons 4-1 to 4-4 and "Review and Practice".
   Follows questions_mg3u4_ar.js phrasing by phrasing (same ids, types, levels; check_questions checks the parity).
   Where the English book prints other numbers than the Arabic book, this file follows the English book and the phrasing carries
   bookDiff: true (the parity check then skips the answer): M2.4 (222 + 368), P2.4 (485 + 235), P2.5 (345 + 153).
   Idea letters: M lesson 1, N lesson 2, O lesson 3, P lesson 4. Boss ideas: M5, N5, O4, P5.
   Owner (6 Nov 2026): easy first, slow rise, few hard questions (Boss only), a hint on every phrasing that never gives the answer.
   Order inside a skill: no carrying/taking → once → 4-digit numbers → (Boss) in every column.
   Book words: vertical method, place value, ones place, carry over 1, take 1 from the next place value, total, increase, cost,
   how many more, difference, change, unit, mathematical sentence.
   Review notes: the book prints only the examples and "How to Solve"; every other answer is computed (calc). */
(function () {
window.CHAPTER = { id: 'mg3u4', title: 'Addition and Subtraction', grade: 'Grade 3', track: 'Languages' };

const num = (level, q, answer, calc, hint, extra = {}) => Object.assign({ type: 'num', mode: 'normal', level, q, answer: String(answer), calc, hint }, extra);
const mc = (level, q, options, hint, extra = {}) => Object.assign({ type: 'mc', mode: 'normal', level, q, options, answer: 0, hint }, extra);
const tf = (level, q, answer, hint, extra = {}) => Object.assign({ type: 'tf', mode: 'normal', level, q, answer, hint }, extra);
const asBoss = v => Object.assign(v, { mode: 'boss', level: 'hard' });
const D = v => Object.assign(v, { bookDiff: true });
const c = x => x.toLocaleString('en-US');
/* column addition / subtraction with the book's picture */
const add = (level, a, b) => num(level, `Let’s calculate using the vertical method:\n${c(a)} + ${c(b)} = ?`, a + b, `${a}+${b}`,
  `Start from the ones place: ${a % 10} + ${b % 10}. If the sum is 10 or more, carry over 1 to the next place value.`,
  { fig: 'g3Column', pic: { a, b, op: '+' }, explain: `${c(a)} + ${c(b)} = ${c(a + b)}.` });
const sub = (level, a, b, hint) => num(level, `Let’s calculate using the vertical method:\n${c(a)} − ${c(b)} = ?`, a - b, `${a}-${b}`,
  hint || `Start from the ones place: ${a % 10} − ${b % 10}. If you can’t subtract, take 1 from the next place value.`,
  { fig: 'g3Column', pic: { a, b, op: '-' }, explain: `${c(a)} − ${c(b)} = ${c(a - b)}.` });
const ZERO = 'If the next place value is 0, take 1 from the first place after it that is not 0, then work the places one by one.';
const subZ = (level, a, b) => sub(level, a, b, `Start from the ones place: ${a % 10} − ${b % 10}. ${ZERO}`);

window.IDEAS = [
  /* ---------- Lesson 1 · Adding 3- and 4-Digit Numbers (pp. 44–45) ---------- */
  { id: 'M1', lesson: 1, concept: 'Vertical addition steps', explain: '1) Line up the numbers vertically by place value. 2) Start from the ones place, and add the digits in the same place value. 3) If the sum is 10 or more, carry over 1 to the next place value.',
    variants: [
      mc('easy', 'In vertical addition, which place do we start from?', ['the ones place', 'the tens place', 'the hundreds place', 'the thousands place'], 'We start from the place on the right of the vertical sum.', { explain: 'We start from the ones place.' }),
      mc('easy', 'In vertical addition, if the sum in a place is 10 or more:', ['carry over 1 to the next place value', 'write 10 in the same place', 'leave the place empty', 'take away 10 and stop'], 'One place can hold only one digit.', { explain: 'We carry over 1 to the next place value.' }),
      tf('easy', 'In vertical addition we line up the numbers vertically by place value.', 0, 'Ones under ones, tens under tens …', { explain: 'True.' })
    ] },
  { id: 'M2', lesson: 1, concept: 'Adding without carrying', explain: 'We add each place on its own: ones with ones, tens with tens, hundreds with hundreds.',
    variants: [add('easy', 132, 416), add('easy', 516, 243), add('easy', 345, 204), D(add('easy', 222, 368))] },
  { id: 'M3', lesson: 1, concept: 'Adding with carrying', explain: 'If the sum in a place is 10 or more, we write the ones digit and carry over 1 to the next place. Example: 375 + 283 = 658.',
    variants: [add('medium', 375, 283), add('medium', 425, 149), add('medium', 102, 79), add('medium', 509, 31), add('medium', 345, 75), add('medium', 145, 69), add('medium', 848, 74), add('medium', 524, 97)] },
  { id: 'M4', lesson: 1, concept: 'Adding 4-digit numbers', explain: 'The method is the same for 4-digit numbers: start from the ones, and carry over 1 when the sum is 10 or more.',
    variants: [add('medium', 5423, 4378), add('medium', 1953, 1297), add('medium', 3328, 4794), add('medium', 1526, 5677)] },
  { id: 'M5', lesson: 1, boss: true, concept: 'Challenge: carrying in every place', explain: 'We work place by place and never forget the 1 we carried.',
    variants: [asBoss(add('hard', 3685, 4973)), asBoss(add('hard', 4756, 2464)), asBoss(add('hard', 6149, 2854)), asBoss(add('hard', 2438, 5275))] },

  /* ---------- Lesson 2 · Subtracting 3- and 4-Digit Numbers (Part 1) (pp. 46–47) ---------- */
  { id: 'N1', lesson: 2, concept: 'Vertical subtraction steps', explain: '1) Line up the numbers vertically by place value. 2) Start from the ones place, and subtract the digits in the same place value. 3) If you can’t subtract, take 1 from the next place value.',
    variants: [
      mc('easy', 'In vertical subtraction, if you can’t subtract in a place:', ['take 1 from the next place value', 'subtract the small digit from the big one', 'write 0', 'leave the place empty'], 'Like 4 − 8: we can’t. We need a ten from the next place.', { explain: 'We take 1 from the next place value.' }),
      mc('easy', 'In vertical subtraction, which place do we start from?', ['the ones place', 'the hundreds place', 'the tens place', 'the thousands place'], 'Just like vertical addition.', { explain: 'We start from the ones place.' }),
      tf('easy', 'In 514 − 182, we can subtract the tens 1 − 8 without taking from the hundreds.', 1, 'Can we take 8 away from 1?', { explain: 'False: 1 is smaller than 8, so we take 1 from the hundreds.' })
    ] },
  { id: 'N2', lesson: 2, concept: 'Subtracting without taking', explain: 'We subtract each place on its own: ones from ones, tens from tens, hundreds from hundreds.',
    variants: [sub('easy', 874, 531), sub('easy', 738, 218), sub('easy', 525, 114), sub('easy', 378, 116), sub('easy', 676, 232)] },
  { id: 'N3', lesson: 2, concept: 'Subtracting by taking 1', explain: 'If we can’t subtract, we take 1 from the next place value. Example: 514 − 182 = 332.',
    variants: [sub('medium', 514, 182), sub('medium', 830, 125), sub('medium', 654, 125), sub('medium', 881, 75), sub('medium', 482, 126), sub('medium', 391, 82), sub('medium', 165, 8), sub('medium', 738, 488)] },
  { id: 'N4', lesson: 2, concept: 'Subtracting 4-digit numbers', explain: 'We use the same subtraction method for 4-digit numbers.',
    variants: [sub('medium', 4622, 2185), sub('medium', 4726, 2184), sub('medium', 5665, 3848), sub('medium', 4450, 2576)] },
  { id: 'N5', lesson: 2, boss: true, concept: 'Challenge: taking in many places', explain: 'If you can’t subtract, take 1 from the next place value each time.',
    variants: [asBoss(sub('hard', 6135, 4987)), asBoss(sub('hard', 9121, 6746)), asBoss(sub('hard', 7867, 3379)), asBoss(sub('hard', 8245, 3678)), asBoss(sub('hard', 9312, 4567))] },

  /* ---------- Lesson 3 · Subtracting 3- and 4-Digit Numbers (Part 2) (pp. 48–49) ---------- */
  { id: 'O1', lesson: 3, concept: 'Taking across a zero', explain: 'If the next place value is 0, you must take from the next place after that. Example: 503 − 185: the tens are 0, so we take 1 from the hundreds.',
    variants: [
      tf('easy', 'If the next place value is 0, you must take from the next place after that.', 0, 'Can we take 1 from zero?', { explain: 'True: we don’t take from 0, we take from the place after it.' }),
      mc('easy', 'In 503 − 185 we can’t do 3 − 5, and the tens place is 0. Where do we take 1 from?', ['the hundreds place', 'the tens place', 'the ones place', 'we don’t take'], 'The tens are 0, so we go on to the next place.', { explain: 'We take 1 from the hundreds place, so the tens become 10.' }),
      mc('medium', 'In 503 − 185, after we take 1 from the hundreds, what do the tens become before we give 1 to the ones?', ['10', '0', '9', '1'], '1 hundred = 10 tens.', { explain: 'The tens become 10, then we give 1 to the ones and they become 9.' })
    ] },
  { id: 'O2', lesson: 3, concept: 'Subtracting with 0 in the tens', explain: 'The tens are 0, so we take 1 from the hundreds, then 1 from the tens for the ones. Example: 703 − 6 = 697.',
    variants: [subZ('medium', 703, 6), subZ('medium', 305, 8), subZ('medium', 501, 7), subZ('medium', 402, 45), subZ('medium', 402, 275), subZ('medium', 903, 684), subZ('medium', 802, 84), subZ('medium', 304, 125)] },
  { id: 'O3', lesson: 3, concept: 'Subtracting from 1,000', explain: 'In 1,000 every place is 0 except the thousands: we take 1 from the thousands and pass through the hundreds and tens to the ones. Example: 1,000 − 464 = 536.',
    variants: [subZ('medium', 1000, 464), subZ('medium', 1000, 217), subZ('medium', 1000, 325), subZ('medium', 1000, 442)] },
  { id: 'O4', lesson: 3, boss: true, concept: 'Challenge: many zeros in 4-digit numbers', explain: 'We take 1 from the first place that is not 0, and work the places one by one.',
    variants: [asBoss(subZ('hard', 1032, 673)), asBoss(subZ('hard', 1005, 394)), asBoss(subZ('hard', 7001, 624)), asBoss(subZ('hard', 3000, 379)), asBoss(subZ('hard', 2060, 681)), asBoss(subZ('hard', 5000, 819))] },

  /* ---------- Lesson 4 · Addition and Subtraction word problems (pp. 50–51) ---------- */
  { id: 'P1', lesson: 4, concept: 'Addition or subtraction?', explain: 'Use addition for problems that ask for the "total", "increase" or "cost". Use subtraction for problems that ask for "how many more", the "difference" or the "change".',
    variants: [
      mc('easy', 'We use addition for problems that ask for the:', ['total cost', 'change', 'difference', 'how many more'], 'Addition makes the number bigger: we put things together.', { explain: 'Addition: total, increase, cost.' }),
      mc('easy', 'We use subtraction for problems that ask for the:', ['change', 'total', 'total cost', 'increase'], 'Subtraction: we take away or compare.', { explain: 'Subtraction: how many more, difference, change.' }),
      tf('easy', 'For word problems, we always include the unit with the final answer.', 0, 'Do we write "731" or "731 EGP"?', { explain: 'True: like "731 EGP".' }),
      mc('medium', 'There are 243 cows and 187 horses on the farm. How many more cows are there than horses?\nWhich mathematical sentence?', ['243 − 187', '243 + 187', '187 − 243', '243 × 187'], '"How many more" asks for the difference.', { explain: '243 − 187 = 56 cows.' })
    ] },
  { id: 'P2', lesson: 4, concept: 'Addition word problems', explain: 'We add when we are asked for the total, an increase or the cost, and we write the unit. Example: 246 + 485 = 731 EGP.',
    variants: [
      num('medium', 'You buy shoes for 246 EGP and a bag for 485 EGP. What is the total cost?', 731, '246+485', '"Total cost" means addition: 246 + 485. Start from the ones.', { unit: 'EGP', explain: '246 + 485 = 731 EGP.' }),
      num('medium', 'There are 475 books. If the number increases by 125 books, how many books will there be?', 600, '475+125', '"Increases" means addition: 475 + 125.', { unit: 'books', explain: '475 + 125 = 600 books.' }),
      num('medium', 'There are 435 roses blooming. If the number increases by 168 roses, how many roses will there be?', 603, '435+168', '"Increases" means addition: 435 + 168.', { unit: 'roses', explain: '435 + 168 = 603 roses.' }),
      D(num('medium', 'There are 485 books. If the number increases by 235 books, how many books will there be?', 720, '485+235', '"Increases" means addition: 485 + 235.', { unit: 'books', explain: '485 + 235 = 720 books.' })),
      D(num('medium', 'There are 345 roses blooming. If the number increases by 153 roses, how many roses will there be?', 498, '345+153', '"Increases" means addition: 345 + 153.', { unit: 'roses', explain: '345 + 153 = 498 roses.' }))
    ] },
  { id: 'P3', lesson: 4, concept: '"How many more" and "difference" problems', explain: 'We subtract the smaller number from the bigger one to find how many more. Example: 243 − 187 = 56 cows.',
    variants: [
      num('medium', 'There are 243 cows and 187 horses on the farm. How many more cows are there than horses?', 56, '243-187', '"How many more" means subtraction: 243 − 187.', { unit: 'cows', explain: '243 − 187 = 56 cows.' }),
      num('medium', 'There is a stationery set for 415 EGP and a soccer ball for 825 EGP. How much more expensive is the soccer ball than the stationery set?', 410, '825-415', '"How much more" means subtraction: 825 − 415.', { unit: 'EGP', explain: '825 − 415 = 410 EGP.' }),
      num('medium', 'There are 602 children and 518 adults at the zoo. How many more children are there than adults?', 84, '602-518', '"How many more" means subtraction: 602 − 518. Careful: the tens are 0.', { unit: 'children', explain: '602 − 518 = 84 children.' }),
      num('medium', 'There is a stationery set for 425 EGP and a soccer ball for 805 EGP. How much more expensive is the soccer ball than the stationery set?', 380, '805-425', '"How much more" means subtraction: 805 − 425.', { unit: 'EGP', explain: '805 − 425 = 380 EGP.' }),
      num('medium', 'There are 508 children and 419 adults at the zoo. How many more children are there than adults?', 89, '508-419', '"How many more" means subtraction: 508 − 419.', { unit: 'children', explain: '508 − 419 = 89 children.' })
    ] },
  { id: 'P4', lesson: 4, concept: '"Change" and "left" problems', explain: 'We subtract what we paid or used from the whole to find what is left. Example: 1,000 − 520 = 480 EGP.',
    variants: [
      num('medium', 'You have 1,000 EGP. You bought a backpack for 520 EGP. How much EGP do you have left?', 480, '1000-520', '"Left" means subtraction: 1,000 − 520.', { unit: 'EGP', explain: '1,000 − 520 = 480 EGP.' }),
      num('medium', 'You bought a meal for 124 EGP and paid with 200 EGP. How much change do you get back?', 76, '200-124', '"Change" means subtraction: 200 − 124.', { unit: 'EGP', explain: '200 − 124 = 76 EGP.' }),
      num('medium', 'You have a 325-page book and read 141 pages. How many pages are left to read?', 184, '325-141', '"Left" means subtraction: 325 − 141.', { unit: 'pages', explain: '325 − 141 = 184 pages.' }),
      num('medium', 'You bought a stuffed animal for 164 EGP and paid with 200 EGP. How much change do you get back?', 36, '200-164', '"Change" means subtraction: 200 − 164.', { unit: 'EGP', explain: '200 − 164 = 36 EGP.' }),
      num('medium', 'You bought a meal for 136 EGP and paid with 200 EGP. How much change do you get back?', 64, '200-136', '"Change" means subtraction: 200 − 136.', { unit: 'EGP', explain: '200 − 136 = 64 EGP.' })
    ] },
  { id: 'P5', lesson: 4, boss: true, concept: 'Challenge: what is left from 1,000', explain: 'We choose the operation from the words of the question, subtract from 1,000 passing through the zeros, and write the unit.',
    variants: [
      asBoss(num('hard', 'There are 1,000 sheets of drawing paper. If you use 347 sheets, how many sheets are left?', 653, '1000-347', '"Left" means subtraction: 1,000 − 347. Take 1 from the thousands and pass through the zeros.', { unit: 'sheets', explain: '1,000 − 347 = 653 sheets.' })),
      asBoss(num('hard', 'You bought books for 805 EGP and paid with 1,000 EGP. How much change do you get back?', 195, '1000-805', '"Change" means subtraction: 1,000 − 805. Take 1 from the thousands and pass through the zeros.', { unit: 'EGP', explain: '1,000 − 805 = 195 EGP.' })),
      asBoss(mc('hard', 'You buy shoes for 246 EGP and a bag for 485 EGP. Which is a right and complete answer for the total cost?', ['Sentence: 246 + 485 = 731. Answer: 731 EGP', 'Sentence: 485 − 246 = 239. Answer: 239 EGP', 'Sentence: 246 + 485 = 621. Answer: 621 EGP', 'Sentence: 246 + 485. Answer: 731'], 'A complete answer has the right sentence, the right result and the unit.', { explain: '246 + 485 = 731. Answer: 731 EGP.' }))
    ] }
];

/* Word problems as pictures (owner, 6 Nov 2026): the things, how many, and who they go to. Key = idea.phrasing (1-based). */
const S = (icon, n, label, more) => Object.assign({ icon, n, label }, more || {});
const STORY = {
  'P1.4': [S('cow', 243, '243 cows'), S('horse', 187, '187 horses')],
  'P2.1': [S('shoe', null, 'shoes 246 EGP'), S('bag', null, 'bag 485 EGP')],
  'P2.2': [S('refbook', 475, '475 books'), S('refbook', 125, '125 more')],
  'P2.3': [S('rose', 435, '435 roses'), S('rose', 168, '168 more')],
  'P2.4': [S('refbook', 485, '485 books'), S('refbook', 235, '235 more')],
  'P2.5': [S('rose', 345, '345 roses'), S('rose', 153, '153 more')],
  'P3.1': [S('cow', 243, '243 cows'), S('horse', 187, '187 horses')],
  'P3.2': [S('pencils', null, 'set 415 EGP'), S('ball', null, 'ball 825 EGP')],
  'P3.3': [S('kid', 602, '602 children'), S('adult', 518, '518 adults')],
  'P3.4': [S('pencils', null, 'set 425 EGP'), S('ball', null, 'ball 805 EGP')],
  'P3.5': [S('kid', 508, '508 children'), S('adult', 419, '419 adults')],
  'P4.1': [S('banknote', null, 'you have 1,000 EGP'), S('backpack', null, 'backpack 520 EGP')],
  'P4.2': [S('banknote', null, 'paid 200 EGP'), S('sandwich', null, 'meal 124 EGP')],
  'P4.3': [S('page', 325, 'book 325 pages'), S('page', 141, 'read 141')],
  'P4.4': [S('banknote', null, 'paid 200 EGP'), S('other', null, 'toy 164 EGP')],
  'P4.5': [S('banknote', null, 'paid 200 EGP'), S('sandwich', null, 'meal 136 EGP')],
  'P5.1': [S('paper', 1000, '1,000 sheets'), S('paper', 347, 'used 347')],
  'P5.2': [S('banknote', null, 'paid 1,000 EGP'), S('books', null, 'books 805 EGP')],
  'P5.3': [S('shoe', null, 'shoes 246 EGP'), S('bag', null, 'bag 485 EGP')]
};
window.IDEAS.forEach(I => I.variants.forEach((v, i) => { const st = STORY[I.id + '.' + (i + 1)]; if (st && !v.fig) Object.assign(v, Array.isArray(st) ? { fig: 'g3Story', pic: { parts: st } } : st); }));
})();
