/* Math · Grade 6 · Unit 1 "Divisibility, Factors, and Multiples" · Languages track (English), first term 2026/2027
   Source: the English school book (Primary 6, Math Term 1), Unit 1 (book pages 1-12), one concept "Divisibility, GCF and LCM".
   Lessons: 1 Divisibility (p1-2) · 2 Factorizing a Number to Its Prime Factors (p3-4) · 3 Writing Expressions Using the G.C.F. (p5-7) · 4 Analyzing Least Common Multiples (p8-12).
   Idea letters: A L1 · B L2 · C L3 · D L4 (unit 2 of this grade continues with E-J).   Boss ideas: A9, B7, C7, D9.
   The book is an activity book with no printed answers, so the numbers and situations are the book's own (volunteers at the Food Bank, 12 grain bags and 8 packs of cheese,
   36 packs of cheese and 48 grain bags, the fruit packages, the dates) and EVERY number answer is computed: each `num` question carries `calc` and tools/check_questions.js recomputes it.
   Pictures (math/g6_art.js): vennGCF (tap vnL / vnM / vnR), factorTree, boxPack and bagFrac (pictures above a question).
   Review notes:
   - Lesson 1: the book asks students to deduce the divisibility rules by themselves ("Let's Chat") and prints none. The rules used here are the standard ones (2: even ones digit; 3: digit sum
     divisible by 3; 4: last two digits divisible by 4; 5: ones digit 0 or 5; 6: divisible by 2 and 3; 10: ones digit 0). The table of the book (102, 21, 225, 100, 120, 101) is used for the
     questions; its only printed marks (102 is divisible by 2, 3 and 6) agree with the rules.
   - Lesson 2: of the four "relatively prime" statements the book asks to mark, B, C and D are true (A is false); the same three are marked true here.
   - Lesson 4: the book's fruit situations (5 packets of persimmons, 4 packages of bananas, 16 dates) are computed here with the remaining pieces it prints (11/4 = 2 3/4, 17/8 = 2 1/8,
     15/16 - 1/2 = 7/16). Fractions are written 3/4 and mixed numbers 2 3/4.
   - Not asked: the open "Let's Chat" prompts, drawing the Venn diagrams and factor trees, "Write Another Expression", "Your Sum Creation" (a student's own fractions) and the explain items.
   The Arabic file will be written from the Arabic book (same ids, phrasings and answers). */
(function () {
const n = s => s;
window.CHAPTER = { id: 'mg6u1', title: 'Divisibility, Factors, and Multiples', grade: 'Grade 6', track: 'Languages' };

/* shorthand: m = 'n' (normal) | 'b' (boss) | seconds (timed); lv = e | m | h */
const LV = { e: 'easy', m: 'medium', h: 'hard' };
const mm = m => (m === 'b' ? { mode: 'boss' } : typeof m === 'number' ? { mode: 'timed', seconds: m } : { mode: 'normal' });
const V = (type, m, lv, q, rest) => Object.assign({ type }, mm(m), { level: LV[lv], q }, rest);
const mc = (m, lv, q, options, ex) => V('mc', m, lv, q, Object.assign({ options, answer: 0 }, ex));
const fill = (m, lv, q, options) => V('fill', m, lv, q, { options, answer: 0 });
const tf = (m, lv, q, yes) => V('tf', m, lv, q, { answer: yes ? 0 : 1 });
const num = (m, lv, q, answer, calc, ex) => V('num', m, lv, q, Object.assign({ answer: String(answer), calc }, ex));
const term = (m, lv, q, answer) => V('term', m, lv, q, { answer });
const multi = (m, lv, q, options, answer) => V('multi', m, lv, q, { options, answer });
const table = (m, lv, q, cols, items, answer, poc) => V('table', m, lv, q, { poc: poc || 'Number', cols, items, answer });
const match = (m, lv, q, left, right, answer) => V('match', m, lv, q, { left, right, answer });
const tap = (m, lv, q, diagram, pic, answer, ex) => V('tap', m, lv, q, Object.assign({ diagram, pic, answer }, ex));
const build = (m, lv, style, q, parts, extra) => V('build', m, lv, q, { style, parts, extra });
const BAGS = [{ n: 2, k: 2, name: 'Cherimoya', col: '#79c69a' }, { n: 4, k: 4, name: 'Persimmons' }, { n: 8, k: 8, name: 'Bananas', col: '#f7cf4d' }, { n: 16, k: 16, name: 'Dates', col: '#a8693a' }];

window.IDEAS = [
  /* ---------- Lesson 1 · Divisibility (pages 1-2) ---------- */
  { id: 'A1', lesson: 1, concept: 'Divisibility by 2: even and odd numbers',
    explain: 'A number is divisible by 2 when the quotient is a whole number and the remainder is zero. These are the even numbers: their ones digit is 0, 2, 4, 6 or 8. Of the numbers of volunteers ' + n('21, 102, 225, 120, 100, 101') + ', the even ones are ' + n('102, 120') + ' and ' + n('100') + '.',
    variants: [
      mc(12, 'e', 'Which number is divisible by 2?', [n('102'), n('21'), n('225'), n('101')]),
      mc(12, 'e', 'A number is divisible by 2 when its ones digit is…', ['0, 2, 4, 6 or 8', '1, 3, 5, 7 or 9', '0 or 5', 'only 0']),
      tf(10, 'e', n('101') + ' is divisible by 2.', false),
      tf(10, 'e', n('120') + ' is an even number.', true),
      fill(12, 'e', 'The number ' + n('225') + ' is odd, so it is not divisible by ___.', [n('2'), n('3'), n('5')]),
      multi('n', 'm', 'The numbers of volunteers in six cities are ' + n('21, 102, 225, 120, 100, 101') + '. Which numbers are even? Choose ALL.', [n('102'), n('120'), n('100'), n('21'), n('225'), n('101')], [0, 1, 2]),
      num('n', 'm', 'What is the remainder when ' + n('101') + ' is divided by 2?', 1, '101-2*50'),
      num('n', 'm', 'How many whole groups of 2 are there in ' + n('102') + '?', 51, '102/2')
    ] },
  { id: 'A2', lesson: 1, concept: 'Divisibility by 3: the sum of the digits',
    explain: 'A number is divisible by 3 when the sum of its digits is divisible by 3. ' + n('102') + ': ' + n('1 + 0 + 2 = 3') + ', so it is divisible by 3. ' + n('101') + ': ' + n('1 + 0 + 1 = 2') + ', so it is not.',
    variants: [
      mc(12, 'e', 'Which number is divisible by 3?', [n('225'), n('101'), n('100'), n('22')]),
      num(12, 'e', 'Find the sum of the digits of ' + n('225') + '.', 9, '2+2+5'),
      tf(10, 'e', n('120') + ' is divisible by 3 because ' + n('1 + 2 + 0 = 3') + '.', true),
      mc('n', 'm', 'Is ' + n('101') + ' divisible by 3?', ['No, because 1 + 0 + 1 = 2 is not divisible by 3', 'Yes, because it is odd', 'Yes, because it ends in 1', 'No, because it is greater than 100']),
      table('n', 'm', 'Sort the numbers of volunteers.', ['Divisible by 3', 'Not divisible by 3'], [n('21'), n('102'), n('100'), n('101'), n('225'), n('120')], [0, 0, 1, 1, 0, 0]),
      mc('n', 'm', 'Which number is NOT divisible by 3?', [n('124'), n('123'), n('126'), n('129')]),
      fill(14, 'e', 'To test divisibility by 3, add the ___ of the number.', ['digits', 'factors', 'multiples'])
    ] },
  { id: 'A3', lesson: 1, concept: 'Divisibility by 4: the last two digits',
    explain: 'A number is divisible by 4 when the number made by its last two digits is divisible by 4 (or the last two digits are 00). ' + n('120') + ' (20) and ' + n('100') + ' (00) are divisible by 4; ' + n('102') + ' (02) and ' + n('225') + ' (25) are not.',
    variants: [
      mc(12, 'e', 'Which number is divisible by 4?', [n('120'), n('102'), n('225'), n('21')]),
      fill(14, 'e', 'A number is divisible by 4 when the number made by its last ___ digits is divisible by 4.', ['two', 'one', 'three']),
      tf(10, 'e', n('100') + ' is divisible by 4.', true),
      tf(10, 'e', n('102') + ' is divisible by 4.', false),
      num('n', 'm', n('120 ÷ 4 ='), 30, '120/4'),
      mc('n', 'm', 'Why is ' + n('316') + ' divisible by 4?', ['Because 16 is divisible by 4', 'Because it is even', 'Because 3 + 1 + 6 = 10', 'Because it ends in 6']),
      table('n', 'm', 'Sort the numbers of volunteers.', ['Divisible by 4', 'Not divisible by 4'], [n('100'), n('120'), n('102'), n('21'), n('225'), n('101')], [0, 0, 1, 1, 1, 1])
    ] },
  { id: 'A4', lesson: 1, concept: 'Divisibility by 5: the ones digit',
    explain: 'A number is divisible by 5 when its ones digit is 0 or 5. ' + n('225, 100') + ' and ' + n('120') + ' are divisible by 5. ' + n('254') + ' students cannot be shared equally among 5 buses because 254 ends in 4.',
    variants: [
      mc(12, 'e', 'Which number is divisible by 5?', [n('225'), n('102'), n('101'), n('21')]),
      fill(12, 'e', 'A number is divisible by 5 when its ones digit is 0 or ___.', [n('5'), n('2'), n('4')]),
      tf(10, 'e', n('101') + ' is divisible by 5.', false),
      num('n', 'm', n('225 ÷ 5 ='), 45, '225/5'),
      mc('n', 'm', 'A school takes ' + n('254') + ' students to a campaign. Can they be shared equally among 5 buses?', ['No, because 254 does not end in 0 or 5', 'Yes, because 254 is even', 'Yes, because 2 + 5 + 4 = 11', 'No, because 254 is odd']),
      table('n', 'm', 'Sort the numbers of volunteers.', ['Divisible by 5', 'Not divisible by 5'], [n('225'), n('100'), n('120'), n('21'), n('102'), n('101')], [0, 0, 0, 1, 1, 1])
    ] },
  { id: 'A5', lesson: 1, concept: 'Divisibility by 10: the ones digit is 0',
    explain: 'A number is divisible by 10 when its ones digit is 0. ' + n('100') + ' and ' + n('120') + ' are divisible by 10. Every number divisible by 10 is also divisible by 5 and by 2. The Food Bank branches: ' + n('1,250 ÷ 10 = 125') + ' shares each.',
    variants: [
      mc(12, 'e', 'Which number is divisible by 10?', [n('120'), n('225'), n('102'), n('21')]),
      tf(10, 'e', n('225') + ' is divisible by 10.', false),
      tf(12, 'm', 'Every number that is divisible by 10 is also divisible by 5.', true),
      num('n', 'm', 'The top donor gave ' + n('1,250') + ' shares at 10 branches, equally. How many shares at each branch?', 125, '1250/10'),
      mc('n', 'm', 'Can ' + n('1,250') + ' shares be shared equally among 10 branches?', ['Yes, because 1,250 ends in 0', 'No, because 1,250 is greater than 1,000', 'No, because the digits add up to 8', 'Yes, because 1,250 is odd']),
      V('fix', 'n', 'h', 'A number is divisible by 10 when it ends in five.', { wrong: 'five', answer: 'zero' })
    ] },
  { id: 'A6', lesson: 1, concept: 'Divisibility by 6: by 2 and by 3',
    explain: 'A number is divisible by 6 when it is divisible by both 2 and 3. ' + n('102') + ' and ' + n('120') + ' are divisible by 6. ' + n('225') + ' is not (it is odd) and ' + n('100') + ' is not (1 + 0 + 0 = 1).',
    variants: [
      mc(12, 'e', 'Which number is divisible by 6?', [n('102'), n('21'), n('225'), n('101')]),
      fill(14, 'e', 'A number is divisible by 6 when it is divisible by 2 and by ___.', [n('3'), n('4'), n('5')]),
      tf(10, 'e', n('120') + ' is divisible by 6.', true),
      tf(10, 'e', n('21') + ' is divisible by 6.', false),
      mc('n', 'm', 'Why is ' + n('225') + ' not divisible by 6?', ['Because it is odd, so it is not divisible by 2', 'Because it is not divisible by 3', 'Because it ends in 5', 'Because it has three digits']),
      table('n', 'm', 'Sort the numbers of volunteers.', ['Divisible by 6', 'Not divisible by 6'], [n('102'), n('120'), n('21'), n('225'), n('100'), n('101')], [0, 0, 1, 1, 1, 1])
    ] },
  { id: 'A7', lesson: 1, concept: 'Divisibility, factors and multiples',
    explain: 'When a number is divisible by another, the divisor is a factor of it and the number is a multiple of the divisor. ' + n('120') + ' is divisible by 6, so 6 is a factor of 120 and 120 is a multiple of 6.',
    variants: [
      fill(14, 'e', n('120') + ' is divisible by 5, so 5 is a ___ of 120.', ['factor', 'multiple', 'remainder']),
      fill(14, 'e', n('120') + ' is divisible by 5, so 120 is a ___ of 5.', ['multiple', 'factor', 'quotient']),
      tf(10, 'e', 'If a number is divisible by 4, then 4 is a factor of it.', true),
      mc('n', 'm', 'Which statement is true?', ['102 is divisible by 6, so 102 is a multiple of 6', '102 is divisible by 6, so 102 is a factor of 6', '102 is divisible by 6, so 6 is a multiple of 102', '102 is divisible by 6, so 6 and 102 are equal']),
      term('n', 'e', 'A number that divides another number with no remainder.', 'Factor'),
      term('n', 'e', 'The product of a number and any whole number.', 'Multiple')
    ] },
  { id: 'A8', lesson: 1, concept: 'Real situations for divisibility',
    explain: 'A situation expresses divisibility when things can be shared equally with nothing left. 720 volunteering hours among 6 people: ' + n('720 ÷ 6 = 120') + '. 116 boxes among 4 villages: ' + n('116 ÷ 4 = 29') + '. 1,250 shares among 10 branches: ' + n('125') + ' each. 254 students among 5 buses: not possible.',
    variants: [
      multi('n', 'm', 'Which situations express divisibility? Choose ALL.', ['720 volunteering hours shared equally by 6 people', '254 students shared equally among 5 buses', '116 food boxes shared equally among 4 villages', '1,250 shares shared equally among 10 branches'], [0, 2, 3]),
      mc('n', 'm', n('116') + ' food boxes are distributed equally among 4 villages. Is it possible?', ['Yes, because 16 is divisible by 4, so 116 is divisible by 4', 'No, because 116 is even', 'No, because it does not end in 0 or 5', 'Yes, because it ends in 6']),
      num('n', 'm', 'How many food boxes does each village get? (116 boxes, 4 villages)', 29, '116/4'),
      num('n', 'm', 'The 6 volunteers worked ' + n('720') + ' hours in the year, the same number each. How many hours did each one work?', 120, '720/6'),
      tf(12, 'm', n('254') + ' students can be shared equally among 5 buses.', false)
    ] },
  { id: 'A9', lesson: 1, boss: true, concept: 'Putting the divisibility rules together',
    explain: 'Use the rules together. ' + n('60') + ' is divisible by 2, 3, 4, 5, 6 and 10. A number divisible by 4 and by 6 is not always divisible by 24: ' + n('12') + ' is divisible by both.',
    variants: [
      mc('b', 'h', 'Which number is divisible by 2, 3, 4, 5, 6 and 10?', [n('60'), n('90'), n('100'), n('105')]),
      mc('b', 'h', 'Which number is divisible by 6 but NOT by 4?', [n('102'), n('120'), n('100'), n('60')]),
      tf('b', 'h', 'A number that is divisible by 4 and by 6 must be divisible by 24.', false),
      num('b', 'h', 'What is the smallest whole number greater than 100 that is divisible by 6?', 102, '6*17'),
      mc('b', 'h', 'The digits of a number add up to 12 and it ends in 5. Which is true?', ['It is divisible by 3 and by 5 but not by 2', 'It is divisible by 2 and by 3', 'It is divisible by 6', 'It is divisible by 4'])
    ] },

  /* ---------- Lesson 2 · Factorizing a Number to Its Prime Factors (pages 3-4) ---------- */
  { id: 'B1', lesson: 2, concept: 'Factor trees and prime factorization',
    explain: 'A factor tree breaks a number into smaller factors until every number is prime. ' + n('40 = 4 × 10') + ', ' + n('4 = 2 × 2') + ' and ' + n('10 = 2 × 5') + ', so the prime factorization of 40 is ' + n('2 × 2 × 2 × 5') + '.',
    variants: [
      mc('n', 'e', 'In this factor tree, which numbers are the prime factors of 40?', [n('2 and 5'), n('4 and 10'), n('2, 4 and 10'), n('1, 2 and 5')], { fig: 'factorTree', pic: { tree: { v: 40, c: [{ v: 4, c: [{ v: 2 }, { v: 2 }] }, { v: 10, c: [{ v: 2 }, { v: 5 }] }] } } }),
      num(14, 'e', 'Multiply the circled numbers: ' + n('2 × 2 × 2 × 5 ='), 40, '2*2*2*5'),
      term('n', 'm', 'A factor that is a prime number.', 'Prime factor'),
      tf(10, 'e', n('4') + ' is a prime factor of 40.', false),
      mc('n', 'm', 'Which is the prime factorization of 40?', [n('2 × 2 × 2 × 5'), n('4 × 10'), n('2 × 4 × 5'), n('2 × 20')]),
      mc('n', 'm', 'What number goes in the circle with the question mark?', [n('5'), n('3'), n('2'), n('10')], { fig: 'factorTree', pic: { tree: { v: 60, c: [{ v: 6, c: [{ v: 2 }, { v: 3 }] }, { v: 10, c: [{ v: 2 }, { v: 5, q: true }] }] } } }),
      fill(14, 'e', 'The prime factorization of 12 is ' + n('2 × 2 ×') + ' ___.', [n('3'), n('4'), n('6')]),
      num('n', 'm', 'How many prime factors, counting repeats, are in the prime factorization of 40?', 4, '1+1+1+1'),
      tf(12, 'm', 'A prime factorization may use the same prime number more than once.', true)
    ] },
  { id: 'B2', lesson: 2, concept: 'Prime factorizations of 12 and 18',
    explain: n('12 = 2 × 2 × 3') + ' and ' + n('18 = 2 × 3 × 3') + '. Both have the prime factors 2 and 3.',
    variants: [
      mc(14, 'e', 'The prime factorization of ' + n('12') + ' is…', [n('2 × 2 × 3'), n('2 × 6'), n('3 × 4'), n('2 × 3 × 3')]),
      mc(14, 'e', 'The prime factorization of ' + n('18') + ' is…', [n('2 × 3 × 3'), n('2 × 2 × 3'), n('3 × 6'), n('2 × 9')]),
      match('n', 'm', 'Match each number to its prime factorization.', [n('12'), n('18'), n('30'), n('42')], [n('2 × 3 × 3'), n('2 × 3 × 5'), n('2 × 2 × 3'), n('2 × 3 × 7')], [2, 0, 1, 3]),
      tf(10, 'e', 'The prime factors of 12 are 2 and 3.', true),
      mc('n', 'm', 'Which prime factors do 12 and 18 share?', [n('2 and 3'), n('2 only'), n('3 only'), n('2, 2, 3 and 3')])
    ] },
  { id: 'B3', lesson: 2, concept: 'Venn diagrams of prime factors',
    explain: 'A Venn diagram compares what two things share and where they differ: the overlap is where information is shared. In the diagram of 12 and 18 the overlap holds the common prime factors 2 and 3, the left circle holds the prime factor only 12 has (2) and the right circle the one only 18 has (3). 30, 42 and 33 have the prime factor 3 in common.',
    variants: [
      tap('n', 'm', 'Tap the part that holds the common prime factors of 12 and 18.', 'vennGCF', { a: 12, b: 18 }, 'vnM'),
      tap('n', 'm', 'Tap the part with the prime factor that only 12 has (not 18).', 'vennGCF', { a: 12, b: 18 }, 'vnL'),
      tap('n', 'm', 'Tap the part with the prime factor that only 42 has (not 30).', 'vennGCF', { a: 30, b: 42 }, 'vnR'),
      mc('n', 'm', 'The overlap hides the common prime factors of 12 and 18. What are they?', [n('2 and 3'), n('2 and 2'), n('3 and 3'), n('2, 2, 3 and 3')], { fig: 'vennGCF', pic: { a: 12, b: 18, blank: 'M' } }),
      mc('n', 'm', 'The prime factors of 30, 42 and 33 are 2, 3, 5 / 2, 3, 7 / 3, 11. Which prime factor do all three share?', [n('3'), n('2'), n('5'), n('11')]),
      mc('n', 'm', 'Which prime factor do 30 and 42 share, but 33 does not have?', [n('2'), n('3'), n('5'), n('7')]),
      tf(12, 'e', 'In a Venn diagram, the part where the circles overlap holds what is shared.', true),
      mc('n', 'm', 'What are the prime factors only 30 has, compared with 42?', [n('5'), n('2 and 3'), n('7'), n('2, 3 and 5')], { fig: 'vennGCF', pic: { a: 30, b: 42 } })
    ] },
  { id: 'B4', lesson: 2, concept: 'Finding the GCF with prime factors',
    explain: 'The greatest common factor (GCF) is the product of the common prime factors, the ones in the overlap. For 12 and 18 the overlap holds 2 and 3, so the GCF is ' + n('2 × 3 = 6') + '.',
    variants: [
      num(14, 'e', 'The overlap of the Venn diagram of 12 and 18 holds 2 and 3. What is the GCF of 12 and 18?', 6, '2*3'),
      mc('n', 'm', 'How can the Venn diagram help you find the GCF?', ['Multiply the numbers in the overlap', 'Multiply all the numbers in the diagram', 'Add the numbers in the overlap', 'Multiply the numbers that are not shared'], { fig: 'vennGCF', pic: { a: 12, b: 18 } }),
      num('n', 'm', 'Find the GCF of 30 and 42.', 6, '2*3'),
      num('n', 'm', 'Find the GCF of 8 and 12.', 4, '2*2'),
      num('n', 'm', 'Find the GCF of 20 and 30.', 10, '2*5'),
      term('n', 'e', 'The greatest number that divides two numbers with no remainder.', 'GCF'),
      mc(14, 'e', 'What does GCF stand for?', ['Greatest common factor', 'Greatest common fraction', 'Least common factor', 'Greatest common multiple']),
      fill(14, 'e', 'The GCF is the product of the ___ prime factors.', ['common', 'all', 'different'])
    ] },
  { id: 'B5', lesson: 2, concept: 'Finding the LCM with prime factors',
    explain: 'The least common multiple (LCM) is the product of all the prime factors in the Venn diagram, with the common ones counted once. For 12 and 18: ' + n('2 × 2 × 3 × 3 = 36') + '.',
    variants: [
      num(14, 'e', 'Multiply all the prime factors in the Venn diagram of 12 and 18 (2, 2, 3, 3). What is the LCM?', 36, '2*2*3*3'),
      mc('n', 'm', 'How can the Venn diagram help you find the LCM?', ['Multiply all the prime factors in the diagram', 'Multiply only the numbers in the overlap', 'Add all the numbers', 'Multiply the numbers that are not shared'], { fig: 'vennGCF', pic: { a: 12, b: 18 } }),
      num('n', 'm', 'Find the LCM of 30 and 42.', 210, '2*3*5*7'),
      num('n', 'm', 'Find the LCM of 8 and 12.', 24, '2*2*2*3'),
      num('n', 'm', 'Find the LCM of 20 and 30.', 60, '2*2*3*5'),
      term('n', 'e', 'The smallest number that is a multiple of two numbers.', 'LCM'),
      tf(12, 'm', 'The GCF of 12 and 18 is 6 and their LCM is 36.', true),
      mc('n', 'h', 'The GCF of two numbers is 6 and their LCM is 36. Which pair is it?', [n('12 and 18'), n('4 and 9'), n('9 and 12'), n('10 and 18')])
    ] },
  { id: 'B6', lesson: 2, concept: 'Relatively prime numbers',
    explain: 'Relatively prime numbers are numbers whose only common factor is 1, so their Venn diagram has an empty overlap. For 4 and 9 the GCF is 1 and the LCM is the product ' + n('4 × 9 = 36') + '.',
    variants: [
      term('n', 'm', 'Numbers whose only common factor is 1.', 'Relatively prime'),
      tap('n', 'm', 'Tap the part of the Venn diagram of 4 and 9 that is empty.', 'vennGCF', { a: 4, b: 9 }, 'vnM'),
      mc('n', 'm', 'Which pair of numbers is relatively prime?', [n('4 and 9'), n('6 and 9'), n('8 and 12'), n('10 and 15')]),
      num(12, 'e', 'What is the GCF of two relatively prime numbers?', 1, '1'),
      num('n', 'm', 'Find the LCM of 4 and 9.', 36, '4*9'),
      num('n', 'm', 'Find the LCM of 5 and 7.', 35, '5*7'),
      mc('n', 'm', 'For two relatively prime numbers, which statement is true?', ['Because there are no common factors in the intersection, the GCF is 1', 'Because there are no common factors in the intersection, the GCF is 0', 'The LCM is the sum of the two numbers', 'There are no prime factors in the diagram']),
      multi('n', 'h', 'For two relatively prime numbers, which statements are true? Choose ALL.', ['Because there are no common factors in the intersection, the GCF is 0', 'Because there are no common factors in the intersection, the GCF is 1', 'The LCM is the product of the two numbers', 'The LCM is the product of all the prime factors in the Venn diagram'], [1, 2, 3])
    ] },
  { id: 'B7', lesson: 2, boss: true, concept: 'GCF and LCM from prime factorizations',
    explain: 'Write each number as a product of primes, then compare. ' + n('60 = 2 × 2 × 3 × 5') + '. For 36 and 48: common prime factors 2, 2, 3 give GCF 12; all the prime factors 2, 2, 2, 2, 3, 3 give LCM 144.',
    variants: [
      mc('b', 'h', 'The prime factorization of ' + n('60') + ' is…', [n('2 × 2 × 3 × 5'), n('2 × 3 × 10'), n('2 × 5 × 6'), n('3 × 4 × 5')]),
      num('b', 'h', n('36 = 2 × 2 × 3 × 3') + ' and ' + n('48 = 2 × 2 × 2 × 2 × 3') + '. What is the GCF of 36 and 48?', 12, '2*2*3'),
      num('b', 'h', 'What is the LCM of 36 and 48?', 144, '2*2*2*2*3*3'),
      mc('b', 'h', 'Two numbers have the prime factorizations ' + n('2 × 3 × 3') + ' and ' + n('3 × 3 × 5') + '. What are their GCF and LCM?', ['GCF 9, LCM 90', 'GCF 3, LCM 90', 'GCF 9, LCM 45', 'GCF 18, LCM 45']),
      mc('b', 'h', 'Which pair of numbers has GCF 4 and LCM 24?', [n('8 and 12'), n('6 and 8'), n('3 and 8'), n('12 and 18')])
    ] },

  /* ---------- Lesson 3 · Writing Expressions Using the G.C.F. (pages 5-7) ---------- */
  { id: 'C1', lesson: 3, concept: 'The greatest number of boxes is the GCF',
    explain: 'A student has 12 grain bags and 8 packs of cheese and wants as many identical boxes as possible with nothing left. The greatest number of boxes is the GCF of 12 and 8, which is 4. Each box gets ' + n('12 ÷ 4 = 3') + ' grain bags and ' + n('8 ÷ 4 = 2') + ' packs of cheese.',
    variants: [
      mc('n', 'm', 'A student has 12 grain bags and 8 packs of cheese. What is the greatest number of boxes with the same items in each and nothing left?', [n('4'), n('2'), n('6'), n('8')]),
      num(14, 'e', 'Find the GCF of 12 and 8.', 4, '2*2'),
      num('n', 'm', 'There are 4 boxes. How many grain bags go in each box?', 3, '12/4'),
      num('n', 'm', 'There are 4 boxes. How many packs of cheese go in each box?', 2, '8/4'),
      num('n', 'm', 'Each of the 4 boxes holds 3 grain bags and 2 packs of cheese. How many items are there in all?', 20, '4*(3+2)', { fig: 'boxPack', pic: { boxes: 4, g: 3, c: 2 } }),
      tf(12, 'm', 'The student can make 4 boxes because 4 is a common factor of 12 and 8.', true),
      mc('n', 'm', 'Another way uses 2 boxes with 6 grain bags and 4 packs of cheese in each. Which expression matches?', [n('2(6 + 4)'), n('6(2 + 4)'), n('4(6 + 2)'), n('2(6 × 4)')], { fig: 'boxPack', pic: { boxes: 2, g: 6, c: 4 } }),
      mc('n', 'h', 'Which numbers of boxes can she make with all 12 grain bags and 8 packs of cheese shared equally and nothing left?', ['1, 2 or 4', '3 or 6', '5', '8'])
    ] },
  { id: 'C2', lesson: 3, concept: 'Expressions for the total number of items',
    explain: 'With 4 boxes of 3 grain bags and 2 packs of cheese, the total is ' + n('4(3 + 2) = (4 × 3) + (4 × 2) = 12 + 8 = 20') + '. The 4 is the number of boxes; 3 and 2 are the items in each box.',
    variants: [
      multi('n', 'm', 'Which expressions represent the total number of items in the 4 boxes? Choose ALL.', [n('4(3 + 2)'), n('(4 × 3) + (4 × 2)'), n('4 + 3 + 2'), n('4 + (3 × 2)')], [0, 1]),
      num(14, 'e', n('4(3 + 2) ='), 20, '4*(3+2)'),
      num(14, 'e', n('(4 × 3) + (4 × 2) ='), 20, '(4*3)+(4*2)'),
      tf(12, 'm', n('4(3 + 2)') + ' and ' + n('(4 × 3) + (4 × 2)') + ' have the same value.', true),
      mc('n', 'm', 'Which expression is the same as ' + n('4(3 + 2)') + '?', [n('(4 × 3) + (4 × 2)'), n('4 × 3 + 2'), n('4 + 3 × 2'), n('(4 + 3) × 2')]),
      mc('n', 'm', 'In ' + n('4(3 + 2)') + ', what does the 4 stand for?', ['The number of boxes', 'The grain bags in each box', 'The packs of cheese in each box', 'The total number of items']),
      mc('n', 'm', 'In ' + n('4(3 + 2)') + ', what do the 3 and the 2 stand for?', ['The grain bags and the packs of cheese in each box', 'The number of boxes', 'The total grain bags', 'The total packs of cheese'])
    ] },
  { id: 'C3', lesson: 3, concept: 'The distributive property',
    explain: 'The distributive property says that multiplying a number by the sum of two addends is the same as multiplying it by each addend and adding the products: ' + n('a(b + c) = a × b + a × c') + '. For example ' + n('4(2 + 3) = 4 × 2 + 4 × 3 = 20') + '.',
    variants: [
      term('n', 'm', 'The name of the property shown by ' + n('4(3 + 2) = 4 × 3 + 4 × 2') + '.', 'Distributive'),
      fill(14, 'e', 'Distributive property: ' + n('5(2 + 3) = 5 × 2 + 5 ×') + ' ___.', [n('3'), n('2'), n('5')]),
      num('n', 'm', n('6(4 + 5) ='), 54, '6*(4+5)'),
      num(14, 'e', n('3 × 7 + 3 × 3 ='), 30, '3*7+3*3'),
      mc('n', 'm', 'Which equation shows the distributive property?', [n('7(2 + 3) = 7 × 2 + 7 × 3'), n('7 + 2 = 2 + 7'), n('(7 + 2) + 3 = 7 + (2 + 3)'), n('7 × 1 = 7')]),
      tf(12, 'm', n('4(2 + 3) = 4 × 2 + 3') + '.', false)
    ] },
  { id: 'C4', lesson: 3, concept: 'Writing a sum with the GCF',
    explain: 'To write a sum with the GCF, take out the GCF of the two numbers: ' + n('12 + 8 = 4(3 + 2)') + ', ' + n('18 + 24 = 6(3 + 4)') + ' and ' + n('30 + 45 = 15(2 + 3)') + '. The GCF is the number outside the parentheses.',
    variants: [
      fill(14, 'e', n('12 + 8 = 4(3 +') + ' ___ ' + n(')'), [n('2'), n('3'), n('4')]),
      mc('n', 'm', 'Write ' + n('12 + 8') + ' using the GCF of 12 and 8.', [n('4(3 + 2)'), n('2(6 + 4)'), n('12(1 + 8)'), n('8(3 + 2)')]),
      mc('n', 'm', 'Write ' + n('18 + 24') + ' using the GCF of 18 and 24.', [n('6(3 + 4)'), n('3(6 + 8)'), n('2(9 + 12)'), n('9(2 + 3)')]),
      mc('n', 'm', 'Write ' + n('30 + 45') + ' using the GCF of 30 and 45.', [n('15(2 + 3)'), n('5(6 + 9)'), n('3(10 + 15)'), n('10(3 + 4)')]),
      num(14, 'e', 'Find the GCF of 18 and 24.', 6, '2*3'),
      num('n', 'm', n('24 + 36 = 12(2 + ?)') + '. What number is the question mark?', 3, '36/12')
    ] },
  { id: 'C5', lesson: 3, concept: 'Making baskets: 12(3 + 4)',
    explain: 'Students have 36 packs of cheese and 48 grain bags and want as many baskets as possible, with the same items in each and none left over. The GCF of 36 and 48 is 12, so they make 12 baskets with ' + n('36 ÷ 12 = 3') + ' packs of cheese and ' + n('48 ÷ 12 = 4') + ' grain bags in each: ' + n('36 + 48 = 12(3 + 4)') + '.',
    variants: [
      num(14, 'e', 'Find the GCF of 36 and 48.', 12, '2*2*3'),
      mc('n', 'm', 'There are 36 packs of cheese and 48 grain bags. What is the greatest number of identical baskets with nothing left over?', [n('12'), n('6'), n('24'), n('4')]),
      mc('n', 'm', 'What might ' + n('12(3 + 4)') + ' mean for the baskets?', ['12 baskets, each with 3 packs of cheese and 4 grain bags', '12 packs of cheese and 3 grain bags', '3 baskets with 12 items each', '12 + 3 + 4 items in all']),
      num('n', 'm', 'How many packs of cheese are in each of the 12 baskets?', 3, '36/12'),
      num('n', 'm', 'How many grain bags are in each of the 12 baskets?', 4, '48/12'),
      mc('n', 'h', 'Why is ' + n('12(3 + 4)') + ' helpful for this situation?', ['It shows the greatest number of baskets and what goes in each, with no items left over', 'It shows only the total number of items', 'It shows the LCM of 36 and 48', 'It shows the price of each basket']),
      num('n', 'm', n('12(3 + 4) ='), 84, '12*(3+4)')
    ] },
  { id: 'C6', lesson: 3, concept: 'Making more boxes with the GCF',
    explain: 'A student has 20 packs of cheese and 40 grain bags and writes ' + n('10(2 + 4)') + ' (10 boxes). His friend says there is a way to make more boxes: the GCF of 20 and 40 is 20, so ' + n('20(1 + 2)') + ' makes 20 boxes, each with 1 pack of cheese and 2 grain bags.',
    variants: [
      mc('n', 'm', 'He uses ' + n('10(2 + 4)') + ' for 20 packs of cheese and 40 grain bags. His friend says there is a way to make more boxes. Which expression is the friend\'s?', [n('20(1 + 2)'), n('20(2 + 4)'), n('10(1 + 2)'), n('10(1 + 4)')]),
      num(14, 'e', 'Find the GCF of 20 and 40.', 20, '2*2*5'),
      mc('n', 'm', 'What does ' + n('20(1 + 2)') + ' mean for the boxes?', ['20 boxes, each with 1 pack of cheese and 2 grain bags', '10 boxes, each with 2 packs of cheese and 4 grain bags', '1 box with 20 items', '2 boxes with 20 items each']),
      tf(12, 'm', n('10(2 + 4)') + ' uses the GCF of 20 and 40.', false),
      num('n', 'm', n('20(1 + 2) ='), 60, '20*(1+2)')
    ] },
  { id: 'C7', lesson: 3, boss: true, concept: 'Sharing equally and writing the expression',
    explain: 'Find the GCF to get the greatest number of identical groups, then write the total as GCF × (sum of the items in each group). 45 and 30: GCF 15, so ' + n('45 + 30 = 15(3 + 2)') + '. 16 and 24: GCF 8, so ' + n('16 + 24 = 8(2 + 3)') + '.',
    variants: [
      num('b', 'h', 'There are 45 mangoes and 30 dates. What is the greatest number of identical gift baskets with nothing left over?', 15, '3*5'),
      mc('b', 'h', 'Write ' + n('45 + 30') + ' with the GCF of 45 and 30 outside the parentheses.', [n('15(3 + 2)'), n('5(9 + 6)'), n('3(15 + 10)'), n('9(5 + 6)')]),
      mc('b', 'h', 'Which expression makes the greatest number of boxes from 16 and 24 with nothing left over?', [n('8(2 + 3)'), n('4(4 + 6)'), n('2(8 + 12)'), n('16(1 + 2)')]),
      num('b', 'h', 'With the greatest number of boxes from 16 and 24 items, how many items are in each box?', 5, '(16+24)/8'),
      mc('b', 'h', 'Which is NOT equal to ' + n('12 + 18') + '?', [n('3(4 + 5)'), n('6(2 + 3)'), n('2(6 + 9)'), n('1(12 + 18)')])
    ] },

  /* ---------- Lesson 4 · Analyzing Least Common Multiples (pages 8-12) ---------- */
  { id: 'D1', lesson: 4, concept: 'Fractions of a package of fruit',
    explain: 'A full package has a fixed number of pieces: cherimoya 2, persimmons 4, bananas 8, dates 16. The denominator of a fraction of a package is the number of pieces in a full package and the numerator is the number of pieces left. Half a package of dates is ' + n('8/16') + '.',
    variants: [
      mc('n', 'e', 'How many pieces are in a full package of bananas?', [n('8'), n('4'), n('2'), n('16')], { fig: 'bagFrac', pic: { bags: BAGS } }),
      mc('n', 'm', 'Half of a package of dates is left. What fraction of the package is that?', [n('8/16'), n('1/16'), n('16/8'), n('1/8')]),
      fill(14, 'e', 'In ' + n('3/4') + ' of a package of persimmons, the denominator 4 is the number of ___ in a full package.', ['pieces', 'packages', 'friends']),
      mc('n', 'm', 'Which fraction shows 3 pieces left in a package of 8 bananas?', [n('3/8'), n('8/3'), n('3/5'), n('5/8')]),
      mc('n', 'm', 'What fraction of the package of persimmons is left?', [n('3/4'), n('4/3'), n('1/4'), n('3/7')], { fig: 'bagFrac', pic: { bags: [{ n: 4, k: 3, name: 'Persimmons' }] } }),
      mc('n', 'm', 'What fraction of the package of bananas is left?', [n('5/8'), n('8/5'), n('3/8'), n('5/3')], { fig: 'bagFrac', pic: { bags: [{ n: 8, k: 5, name: 'Bananas', col: '#f7cf4d' }] } }),
      tf(12, 'm', 'A package of 16 dates has 8 dates left. The fraction left is ' + n('1/2') + '.', true)
    ] },
  { id: 'D2', lesson: 4, concept: 'Remaining persimmons: sums of fractions of a package',
    explain: 'A brother had 5 packets of persimmons, each with 4 fruits. The portions left were ' + n('3/4, 2/4, 1/4, 3/4, 2/4') + '. Their sum is ' + n('11/4 = 2 3/4') + ' packages, so the family ate ' + n('5 − 2 3/4 = 2 1/4') + ' packages.',
    variants: [
      num(14, 'e', 'Add the numerators of ' + n('3/4, 2/4, 1/4, 3/4, 2/4') + ': ' + n('3 + 2 + 1 + 3 + 2 ='), 11, '3+2+1+3+2'),
      mc('n', 'm', 'The remaining persimmons add up to ' + n('11/4') + ' of a package. As a mixed number this is…', [n('2 3/4'), n('3 1/4'), n('2 1/2'), n('11 1/4')]),
      mc('n', 'm', 'If the remaining fruit is repackaged into full packages of 4, how many packages of persimmons remain?', [n('2 3/4'), n('2 1/4'), n('3 3/4'), n('3 1/4')]),
      mc('n', 'm', 'He had 5 packages of persimmons. How many packages did the family eat?', [n('2 1/4'), n('2 3/4'), n('3 1/4'), n('2 1/2')]),
      num(16, 'm', '11 pieces of persimmon are left. How many FULL packages of 4 can be made?', 2, '(11-3)/4')
    ] },
  { id: 'D3', lesson: 4, concept: 'Remaining bananas',
    explain: 'A sister and 3 friends had 4 packages of bananas with 8 fruits each. The portions left were ' + n('3/8, 2/8, 5/8, 7/8') + ', which add up to ' + n('17/8 = 2 1/8') + ' packages. They used ' + n('4 − 2 1/8 = 1 7/8') + ' packages.',
    variants: [
      num(14, 'e', n('3 + 2 + 5 + 7 ='), 17, '3+2+5+7'),
      mc('n', 'm', n('17/8') + ' of a package as a mixed number is…', [n('2 1/8'), n('1 7/8'), n('2 1/2'), n('1 1/8')]),
      mc('n', 'm', 'If the remaining bananas are regrouped into packages, how many packages could be made?', [n('2 1/8'), n('1 7/8'), n('2 7/8'), n('3 1/8')]),
      mc('n', 'm', 'They started with 4 packages of bananas. How many packages were used?', [n('1 7/8'), n('2 1/8'), n('1 1/8'), n('2 7/8')])
    ] },
  { id: 'D4', lesson: 4, concept: 'Adding the packages left of two kinds of fruit',
    explain: 'The brother had ' + n('3/4') + ' and ' + n('2/4') + ' of persimmon packages left: ' + n('5/4 = 1 1/4') + ' packages. The bananas left ' + n('3/8, 2/8, 5/8') + ': ' + n('10/8 = 1 1/4') + ' packages. Together ' + n('1 1/4 + 1 1/4 = 2 1/2') + ' packages.',
    variants: [
      mc('n', 'm', 'There are ' + n('3/4') + ' and ' + n('2/4') + ' of persimmon packages left. How many packages are left in all?', [n('1 1/4'), n('5/8'), n('1 3/4'), n('2 1/4')]),
      mc('n', 'm', 'There are ' + n('3/8, 2/8') + ' and ' + n('5/8') + ' of banana packages left. How many packages are left in all?', [n('1 1/4'), n('10/16'), n('1 1/8'), n('2 1/4')]),
      mc('n', 'm', 'Together he has ' + n('1 1/4') + ' packages of persimmons and ' + n('1 1/4') + ' packages of bananas. What is the sum?', [n('2 1/2'), n('2 1/4'), n('1 1/2'), n('3 1/4')]),
      tf(12, 'm', 'When the denominators are the same, we add the numerators and keep the denominator.', true)
    ] },
  { id: 'D5', lesson: 4, concept: 'The least common multiple (LCM)',
    explain: 'The LCM of two numbers is the smallest number that is a multiple of both. ' + n('LCM of 4 and 12 = 12') + ', ' + n('LCM of 5 and 8 = 40') + ', ' + n('LCM of 6 and 10 = 30') + ', ' + n('LCM of 6 and 9 = 18') + '.',
    variants: [
      num(14, 'e', 'What is the LCM of 4 and 12?', 12, '2*2*3'),
      num('n', 'm', 'What is the LCM of 5 and 8?', 40, '5*8'),
      num('n', 'm', 'What is the LCM of 6 and 10?', 30, '2*3*5'),
      num('n', 'm', 'What is the LCM of 6 and 9?', 18, '2*3*3'),
      mc(14, 'e', 'The LCM of ' + n('4') + ' and ' + n('12') + ' is…', [n('12'), n('4'), n('48'), n('24')]),
      tf(12, 'e', 'The LCM of 5 and 8 is 40.', true),
      mc('n', 'm', 'Which is a common multiple of 6 and 9?', [n('18'), n('12'), n('27'), n('3')]),
      fill(14, 'e', 'The smallest common multiple of two numbers is called the least common ___.', ['multiple', 'factor', 'denominator']),
      num('n', 'm', 'A pack of 32 grapes is shared evenly among 8 friends. How many grapes does each friend get?', 4, '32/8')
    ] },
  { id: 'D6', lesson: 4, concept: 'The LCM as a common denominator',
    explain: 'To add fractions with different denominators, use the LCM of the denominators as the common denominator. ' + n('3/4 + 7/12') + ': the LCM of 4 and 12 is 12, so ' + n('3/4 = 9/12') + ' and ' + n('9/12 + 7/12 = 16/12 = 1 1/3') + '.',
    variants: [
      mc('n', 'm', 'What common denominator is best for ' + n('3/4 + 7/12') + '?', [n('12'), n('4'), n('48'), n('16')]),
      mc('n', 'm', 'Write ' + n('3/4') + ' with the denominator 12.', [n('9/12'), n('3/12'), n('7/12'), n('12/4')]),
      mc('n', 'm', n('3/4 + 7/12 ='), [n('16/12 = 1 1/3'), n('10/16'), n('10/12'), n('21/48')]),
      tf(12, 'm', 'To add fractions with different denominators, we can use the LCM of the denominators as the common denominator.', true),
      mc('n', 'm', n('3/8 + 1/4 ='), [n('5/8'), n('4/12'), n('4/8'), n('1/2')])
    ] },
  { id: 'D7', lesson: 4, concept: 'Adding fractions with the LCM',
    explain: n('1/4 + 1/12 = 3/12 + 1/12 = 4/12 = 1/3') + '. ' + n('1/5 + 1/8 = 8/40 + 5/40 = 13/40') + '. ' + n('7/10 + 5/6 = 21/30 + 25/30 = 46/30 = 1 8/15') + '.',
    variants: [
      mc('n', 'm', n('1/4 + 1/12 ='), [n('1/3'), n('2/16'), n('1/6'), n('1/2')]),
      mc('n', 'm', n('1/5 + 1/8 ='), [n('13/40'), n('2/13'), n('1/20'), n('2/40')]),
      mc('n', 'h', n('7/10 + 5/6 ='), [n('1 8/15'), n('12/16'), n('1 1/15'), n('1 4/5')]),
      mc(16, 'm', 'The LCM of the denominators of ' + n('1/5 + 1/8') + ' is…', [n('40'), n('13'), n('8'), n('80')]),
      mc('n', 'm', 'Which equivalent fractions can be used for ' + n('7/10 + 5/6') + ' with the LCM as the common denominator?', [n('21/30 + 25/30'), n('7/60 + 5/60'), n('35/30 + 25/30'), n('14/20 + 10/12')]),
      tf(12, 'm', n('1/4 + 1/12 = 2/16') + '.', false)
    ] },
  { id: 'D8', lesson: 4, concept: 'Subtracting fractions with the LCM',
    explain: 'You buy a package of 16 dates and eat 1 piece, so ' + n('15/16') + ' is left; you owe your friend half a package, ' + n('8/16') + '. Left: ' + n('15/16 − 1/2 = 15/16 − 8/16 = 7/16') + '. Also ' + n('5/6 − 3/8 = 20/24 − 9/24 = 11/24') + ' and ' + n('1 1/12 − 5/9 = 39/36 − 20/36 = 19/36') + '.',
    variants: [
      mc('n', 'm', 'You owe your friend half of a package of 16 dates. What fraction of the package do you give him?', [n('8/16'), n('1/16'), n('2/16'), n('16/8')]),
      mc('n', 'm', 'You ate 1 of the 16 dates and gave your friend half the package. What fraction of the package is left?', [n('7/16'), n('8/16'), n('9/16'), n('15/16')]),
      mc('n', 'm', 'Which expression fits the situation (1 date eaten, half a package owed)?', [n('15/16 − 1/2'), n('16/16 − 1/16'), n('1/2 − 15/16'), n('15/16 + 1/2')]),
      mc(16, 'm', 'What is the LCM of the denominators in ' + n('15/16 − 1/2') + '?', [n('16'), n('2'), n('32'), n('8')]),
      mc('n', 'h', n('5/6 − 3/8 ='), [n('11/24'), n('2/14'), n('1/3'), n('8/24')]),
      mc('n', 'h', n('1 1/12 − 5/9 ='), [n('19/36'), n('4/3'), n('1/3'), n('1 4/12')])
    ] },
  { id: 'D9', lesson: 4, boss: true, concept: 'Adding and subtracting fractions: the whole idea',
    explain: 'We can only add or subtract parts of the same size, so we change the fractions to a common denominator, the LCM. ' + n('3/4 + 5/6 = 9/12 + 10/12 = 19/12 = 1 7/12') + '. ' + n('1/6 + 3/8 = 4/24 + 9/24 = 13/24') + '.',
    variants: [
      mc('b', 'h', n('3/4 + 5/6 ='), [n('1 7/12'), n('8/10'), n('1 1/2'), n('1 1/12')]),
      mc('b', 'h', n('1/6 + 3/8 ='), [n('13/24'), n('4/14'), n('1/2'), n('9/24')]),
      mc('b', 'h', 'Why do we change fractions to a common denominator before adding?', ['Because we can only add parts of the same size', 'Because the numerators must be different', 'Because denominators must be added', 'Because fractions cannot be added']),
      build('b', 'h', 'why', 'We use the LCM as the common denominator.', ['Because it is the smallest number', 'that both denominators divide into evenly'], ['Because it is the greatest common factor', 'that is smaller than both denominators']),
      mc('b', 'h', 'The LCM of the denominators of ' + n('7/10 + 5/6') + ' is 30. What is the sum as a mixed number?', [n('1 8/15'), n('1 1/6'), n('12/16'), n('1 2/15')])
    ] }
];
})();
