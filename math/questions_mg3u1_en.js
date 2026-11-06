/* Grade 3 · Mathematics (Languages track) · Chapter 1 "Rules of Multiplication", Term 1 2026/2027
   Source: Ministry book "Primary 3 Mathematics, Term 1" (English), Chapter 1 (pages 8–19): lessons 1-1 to 1-5 and "Review and Practice".
   The English book is the same book as the Arabic one (same lessons, examples and numbers), so this file follows questions_mg3u1_ar.js
   phrasing by phrasing (same ids, types, levels and answers: check_questions checks the parity).
   Owner (6 Nov 2026): easy first, difficulty rising slowly, few hard questions (Boss ideas only), a hint on every phrasing that never gives the answer,
   and word problems shown as pictures (the things, how many, and who they go to).
   Book words: Multiplicand, Multiplier, answer, break up, times table, Score (Points), Count (Balls), Total Score (Points), mathematical sentence.
   In "7 × 2", 7 is the Multiplicand and 2 is the Multiplier; adding 1 to the Multiplier makes the answer bigger by the Multiplicand.
   Review notes:
   - Lesson 1: the book's "8 × 5 is ... more than 7 × 5" changes the first number; kept as in the book (answer 5 by switching the order).
   - Lesson 3: "There are 10 children. To give 8 apples to each child, how many apples are needed?" answer 80 (worked out, not printed).
   - The distributive split is never written as two products joined by + on one line: the book's bracket drawing g3Branch shows it. */
(function () {
window.CHAPTER = { id: 'mg3u1', title: 'Rules of Multiplication', grade: 'Grade 3', track: 'Languages' };

const num = (level, q, answer, calc, hint, extra = {}) => Object.assign({ type: 'num', mode: 'normal', level, q, answer: String(answer), calc, hint }, extra);
const timed = (level, q, answer, calc, hint, seconds = 20, extra = {}) => Object.assign(num(level, q, answer, calc, hint, extra), { mode: 'timed', seconds });
const boss = (q, answer, calc, hint, extra = {}) => Object.assign(num('hard', q, answer, calc, hint, extra), { mode: 'boss' });
const mc = (level, q, options, hint, extra = {}) => Object.assign({ type: 'mc', mode: 'normal', level, q, options, answer: 0, hint }, extra);
const tf = (level, q, answer, hint, extra = {}) => Object.assign({ type: 'tf', mode: 'normal', level, q, answer, hint }, extra);
const same = 'Look at the number that stays the same in both.';

window.IDEAS = [
  /* ---------- Lesson 1 · Properties of Multiplication (Part 1) (pp. 8–9) ---------- */
  { id: 'A1', lesson: 1, concept: 'Adding 1 to the Multiplier', explain: 'When you add 1 to the Multiplier, the answer gets bigger by the Multiplicand. Example: 7 × 2 = 14 and 7 × 3 = 21: the answer went up by 7.',
    variants: [
      num('easy', 'Look at the picture: 2 rows of dots, and we added a new row.\n7 × 3 is ? more than 7 × 2.', 7, '7*3-7*2', 'Count only the dots in the new green row.', { fig: 'g3Groups', pic: { per: 7, n: 2, add: 1 }, explain: 'The Multiplier went up by 1, so the answer went up by the Multiplicand 7: 14 → 21.' }),
      num('easy', '5 × 3 is ? more than 5 × 2.', 5, '5*3-5*2', 'Count the dots in the new green row.', { fig: 'g3Groups', pic: { per: 5, n: 2, add: 1 }, explain: 'The Multiplier went up by 1, so the answer went up by the Multiplicand 5.' }),
      num('easy', '1 × 4 is ? more than 1 × 3.', 1, '1*4-1*3', 'Each row has 1 dot. How many dots are in the new row?', { fig: 'g3Groups', pic: { per: 1, n: 3, add: 1 }, explain: 'The Multiplier went up by 1, so the answer went up by the Multiplicand 1.' }),
      num('easy', '2 × 5 is ? more than 2 × 4.', 2, '2*5-2*4', same, { explain: 'The Multiplier went up by 1, so the answer went up by the Multiplicand 2.' }),
      num('easy', '5 × 5 is ? more than 5 × 4.', 5, '5*5-5*4', same, { explain: 'The Multiplier went up by 1, so the answer went up by the Multiplicand 5.' })
    ] },
  { id: 'A2', lesson: 1, concept: 'Taking away 1 from the Multiplier', explain: 'When you take away 1 from the Multiplier, the answer gets smaller by the Multiplicand. Example: 7 × 4 = 28 and 7 × 3 = 21: the answer went down by 7.',
    variants: [
      num('easy', 'Look at the picture: we took away the last row.\n5 × 3 is ? less than 5 × 4.', 5, '5*4-5*3', 'Count the dots in the crossed-out row.', { fig: 'g3Groups', pic: { per: 5, n: 4, add: -1 }, explain: 'The Multiplier went down by 1, so the answer went down by the Multiplicand 5.' }),
      num('easy', '3 × 3 is ? less than 3 × 4.', 3, '3*4-3*3', 'Count the dots in the crossed-out row.', { fig: 'g3Groups', pic: { per: 3, n: 4, add: -1 }, explain: 'The Multiplier went down by 1, so the answer went down by the Multiplicand 3.' }),
      num('easy', '5 × 3 is ? less than 5 × 4.', 5, '5*4-5*3', same, { explain: 'The Multiplier went down by 1, so the answer went down by the Multiplicand 5.' }),
      num('easy', '4 × 7 is ? less than 4 × 8.', 4, '4*8-4*7', same, { explain: 'The Multiplier went down by 1, so the answer went down by the Multiplicand 4.' }),
      num('medium', '6 × 3 is ? less than 6 × 4.', 6, '6*4-6*3', 'The Multiplier went down by 1. By how much does the answer go down? Think about the Multiplicand.', { explain: 'The Multiplier went down by 1, so the answer went down by the Multiplicand 6.' })
    ] },
  { id: 'A3', lesson: 1, concept: 'Switching the order of the numbers', explain: 'You can switch the order of the numbers, and the answer will be the same. Example: 7 × 3 = 21 and 3 × 7 = 21.',
    variants: [
      timed('easy', '6 × 3 = 3 × ?', 6, '6', 'Switch the order of the two numbers. The answer does not change.', 20, { explain: '6 × 3 = 3 × 6: the same answer.' }),
      timed('easy', '4 × 9 = 9 × ?', 4, '4', 'Switch the order of the two numbers. The answer does not change.', 20, { explain: '4 × 9 = 9 × 4: the same answer.' }),
      num('easy', '3 × 9 = 9 × ?', 3, '3', 'Switch the order of the two numbers. The answer does not change.', { explain: '3 × 9 = 9 × 3.' }),
      num('easy', '7 × 2 = 2 × ?', 7, '7', 'Switch the order of the two numbers. The answer does not change.', { explain: '7 × 2 = 2 × 7.' }),
      tf('easy', '7 × 3 = 3 × 7', 0, 'Does the answer change when you switch the order of the numbers?', { explain: 'True: both are 21.' }),
      mc('medium', 'Which one has the same answer as 8 × 4?', ['4 × 8', '8 + 4', '8 × 5', '4 × 4'], 'Look for the same two numbers in another order.', { explain: '8 × 4 = 4 × 8 = 32.' })
    ] },
  { id: 'A4', lesson: 1, concept: 'Completing with the "1 more, 1 less" rule', explain: 'If the Multiplier goes up by 1, add the Multiplicand; if it goes down by 1, subtract the Multiplicand. Example: 6 × 9 = 6 × 8 + 6.',
    variants: [
      num('medium', '6 × 9 = 6 × 8 + ?', 6, '6*9-6*8', 'From 8 to 9 the Multiplier went up by 1. What do you add? The number that stays the same.', { explain: '6 × 9 = 6 × 8 + 6 = 48 + 6 = 54.' }),
      num('medium', '7 × 2 = 7 × 1 + ?', 7, '7*2-7*1', 'From 1 to 2 the Multiplier went up by 1. What do you add?', { explain: '7 × 2 = 7 × 1 + 7 = 14.' }),
      num('medium', '9 × 7 = 9 × 8 − ?', 9, '9*8-9*7', 'From 8 to 7 the Multiplier went down by 1. What do you subtract?', { explain: '9 × 7 = 9 × 8 − 9 = 72 − 9 = 63.' }),
      num('medium', '9 × 5 = 9 × 6 − ?', 9, '9*6-9*5', 'From 6 to 5 the Multiplier went down by 1. What do you subtract?', { explain: '9 × 5 = 9 × 6 − 9 = 45.' }),
      num('medium', '8 × 8 = 8 × 9 − ?', 8, '8*9-8*8', 'From 9 to 8 the Multiplier went down by 1. What do you subtract?', { explain: '8 × 8 = 8 × 9 − 8 = 72 − 8 = 64.' })
    ] },
  { id: 'A5', lesson: 1, boss: true, concept: 'Challenge: forgot a fact? Use the rules', explain: 'If you forget a multiplication fact, you can still use the rules: start from a fact you know, then add or subtract the Multiplicand.',
    variants: [
      boss('4 × 7 = 28\nWhat is 4 × 8?', 32, '4*8', 'The Multiplier went up by 1, so add the Multiplicand 4 to 28.', { explain: '4 × 8 = 28 + 4 = 32.' }),
      boss('6 × 8 = 48\nWhat is 6 × 7?', 42, '6*7', 'The Multiplier went down by 1, so subtract the Multiplicand 6 from 48.', { explain: '6 × 7 = 48 − 6 = 42.' }),
      boss('8 × 6 = 48\nWhat is 8 × 7?', 56, '8*7', 'The Multiplier went up by 1, so add the Multiplicand 8 to 48.', { explain: '8 × 7 = 48 + 8 = 56.' }),
      boss('9 × 5 = 45\nWhat is 9 × 4?', 36, '9*4', 'The Multiplier went down by 1, so subtract the Multiplicand 9 from 45.', { explain: '9 × 4 = 45 − 9 = 36.' })
    ] },

  /* ---------- Lesson 2 · Properties of Multiplication (Part 2) (pp. 10–11) ---------- */
  { id: 'B1', lesson: 2, concept: 'Breaking up a number', explain: 'You can write a number as two parts: 9 = 4 + 5 and 8 = 5 + 3. We use this to break up a multiplication.',
    variants: [
      timed('easy', 'Break up 9 into two parts:\n9 = 4 + ?', 5, '9-4', 'How many do you add to 4 to make 9?', 20, { explain: '9 = 4 + 5.' }),
      timed('easy', 'Break up 8 into two parts:\n8 = 5 + ?', 3, '8-5', 'How many do you add to 5 to make 8?', 20, { explain: '8 = 5 + 3.' }),
      num('easy', 'Break up 7 into two parts:\n7 = 5 + ?', 2, '7-5', 'How many do you add to 5 to make 7?', { explain: '7 = 5 + 2.' }),
      num('easy', 'Break up 6 into two parts:\n6 = 1 + ?', 5, '6-1', 'How many do you add to 1 to make 6?', { explain: '6 = 1 + 5.' })
    ] },
  { id: 'B2', lesson: 2, concept: 'Break it up, then add the two answers', explain: 'Break up one of the numbers into two parts, multiply each part, then add the two answers. Example 9 × 3: break up 9 into 4 and 5; 4 × 3 = 12 and 5 × 3 = 15, a total of 27.',
    variants: [
      num('easy', 'Look at the picture: we split 9 × 3 into two parts.\n4 × 3 = 12\n5 × 3 = 15\nWhat is the total (9 × 3)?', 27, '12+15', 'Add the answers of the two parts.', { fig: 'g3Split', pic: { per: 3, n: 9, cut: 4, labels: true }, explain: '12 + 15 = 27, so 9 × 3 = 27.' }),
      num('easy', '8 × 4\n5 × 4 = 20\n3 × 4 = 12\nWhat is the total (8 × 4)?', 32, '20+12', 'Add the answers of the two parts.', { fig: 'g3Split', pic: { per: 4, n: 8, cut: 5, labels: true }, explain: '20 + 12 = 32, so 8 × 4 = 32.' }),
      num('medium', 'Look at the drawing: we broke up 7 into 4 and 3.\nWhat is the total (7 × 9)?', 63, '36+27', 'Add the answers of the two lines: 36 + 27.', { fig: 'g3Branch', pic: { a: 7, b: 9, split: 0, parts: [4, 3], res: [36, 27], sum: '?' }, explain: '36 + 27 = 63, so 7 × 9 = 63.' }),
      num('medium', 'Look at the drawing: we broke up 7 into 5 and 2, and 6 stayed the same.\nWhat is the total (6 × 7)?', 42, '30+12', 'Add the answers of the two lines: 30 + 12.', { fig: 'g3Branch', pic: { a: 6, b: 7, split: 1, parts: [5, 2], res: [30, 12], sum: '?' }, explain: '30 + 12 = 42, so 6 × 7 = 42.' })
    ] },
  { id: 'B3', lesson: 2, concept: 'Completing the break-up', explain: 'The two parts together make the number you broke up: break up 8 into 5 and 3 because 5 + 3 = 8. The other number stays the same.',
    variants: [
      num('medium', 'Look at the drawing: we break up 8 into two parts.\nWhat is the missing number at ?', 3, '8-5', 'The two parts together must make 8. How many do you add to 5?', { fig: 'g3Branch', pic: { a: 8, b: 5, split: 0, parts: [5, '?'], res: ['', ''], sum: '' }, explain: '5 + 3 = 8, so break up 8 into 5 and 3.' }),
      num('medium', 'Look at the drawing: we break up 9 into two parts.\nWhat is the missing number at ?', 5, '9-4', 'The two parts together must make 9. How many do you add to 4?', { fig: 'g3Branch', pic: { a: 9, b: 8, split: 0, parts: [4, '?'], res: ['', ''], sum: '' }, explain: '4 + 5 = 9, so break up 9 into 4 and 5.' }),
      num('medium', 'Look at the drawing: we break up 7 into two parts.\nWhat is the missing number at ?', 2, '7-5', 'The two parts together must make 7, and 6 stays the same.', { fig: 'g3Branch', pic: { a: 6, b: 7, split: 1, parts: [5, '?'], res: ['', ''], sum: '' }, explain: '5 + 2 = 7, so break up 7 into 5 and 2.' }),
      num('medium', 'Look at the drawing: we break up 8 into two parts.\nWhat is the missing number at ?', 3, '8-5', 'The two parts together must make 8, and 6 stays the same.', { fig: 'g3Branch', pic: { a: 6, b: 8, split: 1, parts: [5, '?'], res: ['', ''], sum: '' }, explain: '5 + 3 = 8, so break up 8 into 5 and 3.' }),
      num('medium', 'Look at the drawing: we break up 7 into two parts.\nWhat is the missing number at ?', 2, '7-5', 'The two parts together must make 7. How many do you add to 5?', { fig: 'g3Branch', pic: { a: 7, b: 7, split: 1, parts: [5, '?'], res: ['', ''], sum: '' }, explain: '5 + 2 = 7, so break up 7 into 5 and 2.' })
    ] },
  { id: 'B4', lesson: 2, concept: 'Is the break-up right?', explain: 'A break-up is right only if the two parts add up to the number you broke up (the coloured one), and the other number stays the same.',
    variants: [
      mc('medium', 'We want to work out 9 × 3 by breaking it up, as in the drawing.\nWhich two parts can 9 be broken up into?', ['5 and 4', '4 and 4', '5 and 5', '6 and 2'], 'Choose the two parts that add up to 9.', { fig: 'g3Branch', pic: { a: 9, b: 3, split: 0, parts: ['?', '?'], res: ['', ''], sum: '' }, explain: '5 + 4 = 9. So 5 × 3 = 15 and 4 × 3 = 12, a total of 27.' }),
      tf('medium', 'We want to work out 7 × 8.\nLook at the drawing: we broke up 7 into 5 and 2.\nIs the break-up right?', 0, 'Add 5 + 2. Does it make 7?', { fig: 'g3Branch', pic: { a: 7, b: 8, split: 0, parts: [5, 2], res: ['', ''], sum: '' }, explain: 'True: 5 + 2 = 7, and 8 stayed the same.' }),
      tf('medium', 'We want to work out 6 × 9.\nLook at the drawing: we broke up 9 into 2 and 4.\nIs the break-up right?', 1, 'Add 2 + 4. Does it make 9?', { fig: 'g3Branch', pic: { a: 6, b: 9, split: 1, parts: [2, 4], res: ['', ''], sum: '' }, explain: 'False: 2 + 4 = 6, not 9. For example, break up 9 into 5 and 4.' }),
      mc('medium', 'We want to work out 6 × 7 by breaking it up, as in the drawing.\nWhich two parts can 7 be broken up into?', ['5 and 2', '5 and 3', '4 and 2', '6 and 2'], 'Choose the two parts that add up to 7; 6 stays the same.', { fig: 'g3Branch', pic: { a: 6, b: 7, split: 1, parts: ['?', '?'], res: ['', ''], sum: '' }, explain: '5 + 2 = 7. So 6 × 5 = 30 and 6 × 2 = 12, a total of 42.' })
    ] },
  { id: 'B5', lesson: 2, boss: true, concept: 'Challenge: work it out by breaking up', explain: 'Break up one number into two easy parts, find the answer for each part, then add the two answers.',
    variants: [
      boss('Work out 9 × 7 by breaking up 9 into 4 and 5.', 63, '4*7+5*7', 'Work out 4 × 7, then 5 × 7, and add the two answers.', { fig: 'g3Branch', pic: { a: 9, b: 7, split: 0, parts: [4, 5], res: ['', ''], sum: '?' }, explain: '4 × 7 = 28 and 5 × 7 = 35, a total of 63.' }),
      boss('Work out 8 × 9 by breaking up 8 into 4 and 4.', 72, '4*9+4*9', 'Work out 4 × 9 twice, and add the two answers.', { fig: 'g3Branch', pic: { a: 8, b: 9, split: 0, parts: [4, 4], res: ['', ''], sum: '?' }, explain: '4 × 9 = 36, and 36 + 36 = 72.' }),
      boss('Work out 6 × 8 by breaking up 8 into 5 and 3.', 48, '6*5+6*3', 'Work out 6 × 5, then 6 × 3, and add the two answers.', { fig: 'g3Branch', pic: { a: 6, b: 8, split: 1, parts: [5, 3], res: ['', ''], sum: '?' }, explain: '6 × 5 = 30 and 6 × 3 = 18, a total of 48.' }),
      boss('Work out 7 × 8 by breaking up 7 into 5 and 2.', 56, '5*8+2*8', 'Work out 5 × 8, then 2 × 8, and add the two answers.', { fig: 'g3Branch', pic: { a: 7, b: 8, split: 0, parts: [5, 2], res: ['', ''], sum: '?' }, explain: '5 × 8 = 40 and 2 × 8 = 16, a total of 56.' })
    ] },

  /* ---------- Lesson 3 · Multiplying by 10 and 0 (Part 1) (pp. 12–13) ---------- */
  { id: 'C1', lesson: 3, concept: 'Multiplying by 10', explain: 'When you multiply by 10, write the number and put a 0 next to it: 10 × 7 = 70, 5 × 10 = 50.',
    variants: [
      timed('easy', '10 × 3 = ?', 30, '10*3', 'Think: 3 tens make how many?', 20, { fig: 'g3Boxes', pic: { n: 3, per: 10, kind: 'pencil' }, explain: '10 × 3 = 30.' }),
      timed('easy', '10 × 7 = ?', 70, '10*7', 'Think: 7 tens make how many?', 20, { explain: '10 × 7 = 70.' }),
      timed('easy', '5 × 10 = ?', 50, '5*10', 'Switch the order: 10 × 5, that is 5 tens.', 20, { explain: '5 × 10 = 10 × 5 = 50.' }),
      timed('easy', '7 × 10 = ?', 70, '7*10', 'Switch the order: 10 × 7, that is 7 tens.', 20, { explain: '7 × 10 = 70.' }),
      timed('easy', '10 × 9 = ?', 90, '10*9', 'Think: 9 tens make how many?', 20, { explain: '10 × 9 = 90.' }),
      num('medium', '10 × 10 = ?', 100, '10*10', 'Ten tens make how many? Look at the 10 times table.', { explain: '10 × 10 = 100.' })
    ] },
  { id: 'C2', lesson: 3, concept: 'Multiplying by 0', explain: 'Any number multiplied by 0 is 0. Example: 4 × 0 = 0 and 0 × 14 = 0.',
    variants: [
      timed('easy', 'Look at the empty boxes.\n0 × 4 = ?', 0, '0*4', 'Each box has nothing in it. How many things are in all the boxes?', 20, { fig: 'g3Boxes', pic: { n: 0, per: 0, kind: 'apple', empty: 4 }, explain: 'Any number multiplied by 0 is 0.' }),
      timed('easy', '9 × 0 = ?', 0, '9*0', 'Remember the rule for multiplying by 0.', 20, { explain: '9 × 0 = 0.' }),
      num('easy', '0 × 15 = ?', 0, '0*15', 'Remember the rule for multiplying by 0, even for a big number.', { explain: '0 × 15 = 0.' }),
      mc('easy', '3 × 0 = ?', ['0', '3', '30', '1'], 'Any number multiplied by 0 is ...?', { explain: '3 × 0 = 0, not 3 and not 30.' }),
      tf('easy', 'Any number multiplied by 0 is 0.', 0, 'Try it: 5 empty boxes. How many things are in them?', { explain: 'True: any number multiplied by 0 is 0.' })
    ] },
  { id: 'C3', lesson: 3, concept: 'Word problems with 10', explain: 'Write a mathematical sentence, then the answer with its unit (candies, pencils, people…). Example: 8 people get 10 candies each: 10 × 8 = 80 candies.',
    variants: [
      num('medium', 'One box has 10 pencils. If you buy 4 boxes, how many pencils will you have in total?', 40, '10*4', 'Mathematical sentence: 10 × the number of boxes.', { fig: 'g3Boxes', pic: { n: 4, per: 10, kind: 'pencil' }, unit: 'pencils', explain: '10 × 4 = 40. Answer: 40 pencils.' }),
      num('medium', 'A bus can hold 10 people. If there are 3 buses, how many people can ride in total?', 30, '10*3', 'Mathematical sentence: 10 × the number of buses.', { fig: 'g3Boxes', pic: { n: 3, per: 10, kind: 'seat' }, unit: 'people', explain: '10 × 3 = 30. Answer: 30 people.' }),
      num('medium', '8 people get 10 candies each. How many candies are needed in total?', 80, '10*8', 'Mathematical sentence: 10 × the number of people.', { unit: 'candies', explain: '10 × 8 = 80. Answer: 80 candies.' }),
      num('medium', 'There are 10 children. To give 8 apples to each child, how many apples are needed in total?', 80, '8*10', 'Mathematical sentence: 8 × 10.', { unit: 'apples', explain: '8 × 10 = 80. Answer: 80 apples.' })
    ] },
  { id: 'C4', lesson: 3, concept: 'Choosing the mathematical sentence', explain: 'When the same number is repeated many times, we multiply: 3 buses with 10 people each → 10 × 3.',
    variants: [
      mc('medium', 'A bus can hold 10 people, and there are 3 buses. What is the mathematical sentence?', ['10 × 3', '10 + 3', '10 − 3', '3 × 3'], '10 is repeated 3 times.', { fig: 'g3Boxes', pic: { n: 3, per: 10, kind: 'seat' }, explain: '10 repeated 3 times: 10 × 3 = 30.' }),
      mc('medium', 'One box has 10 pencils, and you buy 4 boxes. What is the mathematical sentence?', ['10 × 4', '10 + 4', '4 × 4', '10 − 4'], '10 is repeated 4 times.', { explain: '10 repeated 4 times: 10 × 4 = 40.' }),
      mc('medium', 'Don’t forget the unit! 8 people get 10 candies each. Which answer is written correctly?', ['80 candies', '80', '18 candies', '8 people'], 'Write the right number and the thing you are counting.', { explain: '10 × 8 = 80. Answer: 80 candies.' })
    ] },
  { id: 'C5', lesson: 3, boss: true, concept: 'Challenge: 10 and 0 together', explain: 'Work out each part on its own: × 10 puts a 0 next to the number, × 0 is 0. Then add.',
    variants: [
      boss('Each box has 10 balls. There are 6 full boxes and 2 empty boxes. How many balls are in all the boxes?', 60, '10*6+0*2', 'Work out the full boxes: 10 × 6, and the empty ones: 0 × 2.', { fig: 'g3Boxes', pic: { n: 6, per: 10, kind: 'ball', empty: 2 }, unit: 'balls', explain: '10 × 6 = 60 and 0 × 2 = 0: a total of 60 balls.' }),
      boss('Work out each one, then add the two answers:\n10 × 9 = ?\n0 × 7 = ?\nWhat is the total?', 90, '10*9+0*7', 'Work out 10 × 9, then 0 × 7, then add.', { explain: '10 × 9 = 90 and 0 × 7 = 0: a total of 90.' }),
      boss('Work out each one, then add the two answers:\n10 × 4 = ?\n10 × 3 = ?\nWhat is the total?', 70, '10*4+10*3', 'Work out 10 × 4, then 10 × 3, then add.', { explain: '10 × 4 = 40 and 10 × 3 = 30: a total of 70.' })
    ] },

  /* ---------- Lesson 4 · Multiplying by 10 and 0 (Part 2) (pp. 14–15) ---------- */
  { id: 'D1', lesson: 4, concept: 'Points for one area', explain: 'Score is calculated by (Points) × (Count). Example: 3 throws in the 1-point area: 1 × 3 = 3 points.',
    variants: [
      num('easy', '3 throws hit the 1-point area. What is the total score for this area?', 3, '1*3', 'Each throw here is 1 point. Count the throws.', { fig: 'g3Target', pic: { zones: [3, 2, 1, 0], hits: [0, 0, 3, 0] }, unit: 'points', explain: '1 × 3 = 3 points.' }),
      num('easy', '4 throws hit the 2-point area. What is the total score for this area?', 8, '2*4', '(Points) × (Count).', { fig: 'g3Target', pic: { zones: [3, 2, 1, 0], hits: [0, 4, 0, 0] }, unit: 'points', explain: '2 × 4 = 8 points.' }),
      num('easy', '2 throws hit the 3-point area. What is the total score for this area?', 6, '3*2', '(Points) × (Count).', { fig: 'g3Target', pic: { zones: [3, 2, 1, 0], hits: [2, 0, 0, 0] }, unit: 'points', explain: '3 × 2 = 6 points.' }),
      num('easy', '5 throws hit the 1-point area. What is the total score for this area?', 5, '1*5', 'Each throw here is 1 point.', { unit: 'points', explain: '1 × 5 = 5 points.' })
    ] },
  { id: 'D2', lesson: 4, concept: 'Zero in the score table', explain: 'Throws in the 0-point area give 0 (0 × 6 = 0), and an area no throw hit also gives 0 (3 × 0 = 0).',
    variants: [
      num('easy', '6 throws hit the 0-point area. What is the total score for this area?', 0, '0*6', 'Each throw here is 0 points. Any number multiplied by 0 is ...?', { fig: 'g3Target', pic: { zones: [3, 2, 1, 0], hits: [0, 0, 0, 6] }, unit: 'points', explain: '0 × 6 = 0 points.' }),
      num('easy', 'No throw hit the 3-point area. What is the total score for this area?', 0, '3*0', 'The count is 0. What is 3 × 0?', { unit: 'points', explain: '3 × 0 = 0 points.' }),
      mc('easy', '6 throws hit the 0-point area. What is the mathematical sentence?', ['0 × 6 = 0', '0 + 6 = 6', '6 × 1 = 6', '6 − 0 = 6'], '(Points) × (Count).', { explain: '(Points) × (Count) = 0 × 6 = 0.' }),
      num('medium', 'No throw hit the 5-point area. What is the total score for this area?', 0, '5*0', 'The count is 0.', { unit: 'points', explain: '5 × 0 = 0 points.' })
    ] },
  { id: 'D3', lesson: 4, concept: 'Reading the score table', explain: 'In the table, read the points and the count for each area, then multiply. Sara: the 10-point area has 3 balls: 10 × 3 = 30.',
    variants: [
      num('medium', 'The table shows Sara’s scores from the game.\nWhat is the total score for the 10-point throws?', 30, '10*3', 'Find the count under 10 in the table, then multiply.', { fig: 'g3Score', pic: { pts: [10, 5, 3, 0], hits: [3, 1, 4, 2] }, unit: 'points', explain: '10 × 3 = 30 points.' }),
      num('medium', 'The table shows Sara’s scores from the game.\nWhat is the total score for the 3-point throws?', 12, '3*4', 'Find the count under 3 in the table, then multiply.', { fig: 'g3Score', pic: { pts: [10, 5, 3, 0], hits: [3, 1, 4, 2] }, unit: 'points', explain: '3 × 4 = 12 points.' }),
      num('medium', 'The table shows Dina’s scores from the game.\nWhat is the total score for the 1-point throws?', 5, '1*5', 'Find the count under 1 in the table, then multiply.', { fig: 'g3Score', pic: { pts: [3, 2, 1, 0], hits: [3, 0, 5, 2] }, unit: 'points', explain: '1 × 5 = 5 points.' }),
      num('medium', 'The table shows Gamal’s scores from the game.\nWhat is the total score for the 10-point throws?', 20, '10*2', 'Find the count under 10 in the table, then multiply.', { fig: 'g3Score', pic: { pts: [10, 5, 3, 0], hits: [2, 0, 7, 1] }, unit: 'points', explain: '10 × 2 = 20 points.' }),
      num('medium', 'The table shows Gamal’s scores from the game.\nWhat is the total score for the 5-point throws?', 0, '5*0', 'Find the count under 5 in the table. What do you notice?', { fig: 'g3Score', pic: { pts: [10, 5, 3, 0], hits: [2, 0, 7, 1] }, unit: 'points', explain: '5 × 0 = 0 points.' })
    ] },
  { id: 'D4', lesson: 4, concept: 'The rule for the score', explain: 'Total score for an area = (Points) × (Count), and the player’s total = the scores of all areas added together.',
    variants: [
      mc('easy', 'How do you find the total score for one area?', ['Points × Count', 'Points + Count', 'Count − Points', 'Write the points only'], 'Each throw gives the points of the area, and the throws repeat.', { explain: '(Points) × (Count).' }),
      tf('easy', 'To find a player’s total score, add the scores of all the areas.', 0, 'After working out each area, what do you do with the answers?', { explain: 'True: add the scores of all the areas.' }),
      tf('medium', 'If many throws hit the 0-point area, the player’s score goes up.', 1, 'What is 0 × any number?', { explain: 'False: the 0-point area gives 0 however many throws hit it.' })
    ] },
  { id: 'D5', lesson: 4, boss: true, concept: 'Challenge: the total score', explain: 'Work out each area: (Points) × (Count), then add the answers. Hassan: 0 + 2 + 3 + 0 = 5 points.',
    variants: [
      boss('The table shows Hassan’s scores from the game.\nWhat is Hassan’s total score?', 5, '3*0+2*1+1*3+0*6', 'Work out each area on its own (Points × Count), then add.', { fig: 'g3Score', pic: { pts: [3, 2, 1, 0], hits: [0, 1, 3, 6], sum: '?' }, unit: 'points', explain: '0 + 2 + 3 + 0 = 5 points.' }),
      boss('The table shows Dina’s scores from the game.\nWhat is Dina’s total score?', 14, '3*3+2*0+1*5+0*2', 'Work out each area on its own (Points × Count), then add.', { fig: 'g3Score', pic: { pts: [3, 2, 1, 0], hits: [3, 0, 5, 2], sum: '?' }, unit: 'points', explain: '9 + 0 + 5 + 0 = 14 points.' }),
      boss('The table shows Sara’s scores from the game.\nWhat is Sara’s total score?', 46, '10*3+6*2+1*4+0*1', 'Work out each area on its own (Points × Count), then add.', { fig: 'g3Score', pic: { pts: [10, 6, 1, 0], hits: [3, 2, 4, 1], sum: '?' }, unit: 'points', explain: '30 + 12 + 4 + 0 = 46 points.' }),
      boss('The table shows Gamal’s scores from the game.\nWhat is Gamal’s total score?', 65, '10*4+5*5+3*0+0*1', 'Work out each area on its own (Points × Count), then add.', { fig: 'g3Score', pic: { pts: [10, 5, 3, 0], hits: [4, 5, 0, 1], sum: '?' }, unit: 'points', explain: '40 + 25 + 0 + 0 = 65 points.' })
    ] },

  /* ---------- Lesson 5 · Find the Missing Numbers (pp. 16–17) ---------- */
  { id: 'E1', lesson: 5, concept: 'Finding the Multiplier', explain: 'If you don’t know the Multiplier, think about the times table for the first number. Example: 8 × ? = 40: 8 × 5 = 40, so the number is 5.',
    variants: [
      num('easy', '3 × ? = 12', 4, '12/3', 'Think about the 3 times table: 3, 6, 9, …', { explain: '3 × 4 = 12.' }),
      num('easy', '2 × ? = 14', 7, '14/2', 'Think about the 2 times table: 2, 4, 6, …', { explain: '2 × 7 = 14.' }),
      num('easy', '5 × ? = 25', 5, '25/5', 'Think about the 5 times table: 5, 10, 15, …', { explain: '5 × 5 = 25.' }),
      num('easy', '10 × ? = 70', 7, '70/10', 'Think about the 10 times table: 10, 20, 30, …', { explain: '10 × 7 = 70.' }),
      num('medium', '8 × ? = 40', 5, '40/8', 'Think about the 8 times table: 8, 16, 24, …', { explain: '8 × 5 = 40.' })
    ] },
  { id: 'E2', lesson: 5, concept: 'Finding the Multiplicand', explain: 'If you don’t know the Multiplicand, switch the order of the numbers, then use the times table. Example: ? × 4 = 16 → 4 × ? = 16, so the number is 4.',
    variants: [
      num('medium', '? × 4 = 16', 4, '16/4', 'Switch the order: 4 × ? = 16, then think about the 4 times table.', { explain: '4 × 4 = 16.' }),
      num('medium', '? × 9 = 45', 5, '45/9', 'Switch the order: 9 × ? = 45, then think about the 9 times table.', { explain: '5 × 9 = 45.' }),
      num('medium', '? × 7 = 42', 6, '42/7', 'Switch the order: 7 × ? = 42, then think about the 7 times table.', { explain: '6 × 7 = 42.' }),
      num('medium', '? × 6 = 24', 4, '24/6', 'Switch the order: 6 × ? = 24, then think about the 6 times table.', { explain: '4 × 6 = 24.' }),
      num('medium', '? × 10 = 40', 4, '40/10', 'Switch the order: 10 × ? = 40.', { explain: '4 × 10 = 40.' })
    ] },
  { id: 'E3', lesson: 5, concept: 'The missing number when the answer is 0', explain: 'If the answer is 0 and the other number is not 0, the missing number is 0. Example: 2 × 0 = 0.',
    variants: [
      num('easy', '2 × ? = 0', 0, '0', 'Any number multiplied by ... is 0?', { explain: '2 × 0 = 0.' }),
      num('easy', '? × 9 = 0', 0, '0', 'Any number multiplied by ... is 0?', { explain: '0 × 9 = 0.' }),
      num('easy', '3 × ? = 0', 0, '0', 'Any number multiplied by ... is 0?', { explain: '3 × 0 = 0.' })
    ] },
  { id: 'E4', lesson: 5, concept: 'Choosing the missing number', explain: 'Go along the times table until you reach the answer you need.',
    variants: [
      mc('medium', '6 × ? = 36\nWhat is the missing number?', ['6', '5', '7', '30'], 'Go along the 6 times table until you reach 36.', { explain: '6 × 6 = 36.' }),
      mc('medium', '? × 8 = 48\nWhat is the missing number?', ['6', '8', '40', '7'], 'Switch the order: 8 × ? = 48, and think about the 8 times table.', { explain: '6 × 8 = 48.' }),
      mc('medium', '7 × ? = 35\nWhat is the missing number?', ['5', '6', '28', '4'], 'Go along the 7 times table until you reach 35.', { explain: '7 × 5 = 35.' })
    ] },
  { id: 'E5', lesson: 5, boss: true, concept: 'Challenge: missing numbers in the big tables', explain: 'Go step by step along the times table of the number you know, or switch the order first.',
    variants: [
      boss('9 × ? = 36', 4, '36/9', 'Think about the 9 times table: 9, 18, 27, …', { explain: '9 × 4 = 36.' }),
      boss('? × 8 = 64', 8, '64/8', 'Switch the order: 8 × ? = 64, and think about the 8 times table.', { explain: '8 × 8 = 64.' }),
      boss('7 × ? = 49', 7, '49/7', 'Think about the 7 times table: 7, 14, 21, …', { explain: '7 × 7 = 49.' }),
      boss('? × 9 = 72', 8, '72/9', 'Switch the order: 9 × ? = 72, and think about the 9 times table.', { explain: '8 × 9 = 72.' }),
      boss('3 × ? = 27', 9, '27/3', 'Go along the 3 times table until you reach 27.', { explain: '3 × 9 = 27.' })
    ] }
];

/* word problems as pictures (owner, 6 Nov 2026): key = idea.phrasing (1-based); a phrasing that already has a picture keeps it */
const S = (icon, n, label, more) => Object.assign({ icon, n, label }, more || {});
const STORY = {
  'C3.3': [S('kid', 8, '8 people'), S('candy', 10, '10 each')],
  'C3.4': [S('kid', 10, '10 children'), S('apple', 8, '8 each')],
  'C4.2': { fig: 'g3Boxes', pic: { n: 4, per: 10, kind: 'pencil' } },
  'C4.3': [S('kid', 8, '8 people'), S('candy', 10, '10 each')]
};
window.IDEAS.forEach(I => I.variants.forEach((v, i) => { const st = STORY[I.id + '.' + (i + 1)]; if (st && !v.fig) Object.assign(v, Array.isArray(st) ? { fig: 'g3Story', pic: { parts: st } } : st); }));
})();
