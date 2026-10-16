/* Math · Grade 4 · Unit 2 "Addition and Subtraction Strategies" · Languages track (English), first term 2026/2027
   Source: the English school book, Unit 2 (pages 24-38): Concept 1 "Using Addition and Subtraction Strategies" (lessons 1-3), Concept 2 "Solving Multistep Problems" (lessons 4-5).
   The book is a student activity book with no printed answers, so the numbers and situations are the book's own (ant colonies, living bridges, swimming ants, the Great Pyramid, New Valley)
   and EVERY number answer is computed: each `num` question carries `calc` and tools/check_questions.js recomputes it, so a wrong answer cannot be published.
   Lessons: 1 Properties of Addition (p24-26) · 2 Addition with Regrouping (p27-28) · 3 Subtraction with Regrouping (p29-31) · 4 Bar Models, Variables, and Story Problems (p32-34) ·
            5 Solving Multistep Story Problems with Addition and Subtraction (p35-38).
   Idea letters: I L1 · J L2 · K L3 · L L4 · M L5 (A-H belong to Unit 1 in the same grade).   Boss ideas: I4, J3, K3, L3, M3.
   No new pictures for this unit (bar models are asked with equations and multiple choice).
   Review notes:
   - Page 32 (problem 1): the text says the colony has 5,328 ants, but the equation printed under it is "2,164 + a = 5,398". The site follows the text (5,328, so the unknown is 3,164) and never asks about 5,398.
   - The book prints no result for "Do the Properties Apply?" (page 26) or "Four Corners" (page 31); the questions rely on the arithmetic itself ((20 - 10) - 5 and 20 - (10 - 5) differ).
   - Not asked: a student writing a new multistep problem (page 36) and the open "explain" and "think" items.
   Same ids, phrasings and answers as questions_mg4u2_ar.js. */
(function () {
const n = s => s;
window.CHAPTER = { id: 'mg4u2', title: 'Addition and Subtraction Strategies', grade: 'Grade 4', track: 'Languages' };

window.IDEAS = [
  /* ---------- Lesson 1 · Properties of Addition (pages 24-26) ---------- */
  { id: 'I1', lesson: 1, concept: 'The Additive Identity Property',
    explain: 'When you add zero to any number, the number stays the same. ' + n('0 + 2,345 = 2,345') + ' and ' + n('12,567,109 + 0 = 12,567,109') + '. This is the Additive Identity Property.',
    variants: [
      { type: 'num', mode: 'timed', seconds: 12, level: 'easy', q: 'Solve: ' + n('0 + 2,345 ='), answer: '2345', calc: '0+2345' },
      { type: 'num', mode: 'timed', seconds: 14, level: 'easy', q: 'Solve: ' + n('12,567,109 + 0 ='), answer: '12567109', calc: '12567109+0' },
      { type: 'fill', mode: 'timed', seconds: 12, level: 'easy', q: 'When you add zero to any number, the answer is ___.', options: ['the same number', 'zero', 'one'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which equation shows the Additive Identity Property?', options: [n('8 + 0 = 8'), n('8 + 2 = 2 + 8'), n('(8 + 2) + 1 = 8 + (2 + 1)'), n('8 − 0 = 8')], answer: 0 },
      { type: 'tf', mode: 'normal', level: 'medium', q: n('12,567,109 + 0 = 0') + '.', answer: 1 }
    ] },
  { id: 'I2', lesson: 1, concept: 'The Commutative Property',
    explain: 'Changing the order of the numbers in an addition does not change the sum. ' + n('5 + 7 + 8 + 3 = 23') + ', ' + n('8 + 7 + 3 + 5 = 23') + ' and ' + n('7 + 5 + 8 + 3 = 23') + '. This is the Commutative Property.',
    variants: [
      { type: 'num', mode: 'timed', seconds: 14, level: 'easy', q: 'Solve: ' + n('5 + 7 + 8 + 3 ='), answer: '23', calc: '5+7+8+3' },
      { type: 'num', mode: 'timed', seconds: 14, level: 'easy', q: 'Solve: ' + n('3 + 7 + 8 + 5 ='), answer: '23', calc: '3+7+8+5' },
      { type: 'mc', mode: 'timed', seconds: 14, level: 'easy', q: 'What did you notice about ' + n('8 + 7 + 3 + 5') + ' and ' + n('7 + 5 + 8 + 3') + '?', options: ['The sum is the same whatever the order of the numbers', 'The sum gets greater when we start with a greater number', 'The sum changes when the order changes', 'Numbers cannot be added in a different order'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 12, level: 'easy', q: 'Commutative Property: changing the ___ of the numbers does not change the sum.', options: ['order', 'number', 'value'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: n('9 + 4 = 4 + 9') + '.', answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which equation shows the Commutative Property?', options: [n('6 + 2 = 2 + 6'), n('6 + 0 = 6'), n('(6 + 2) + 1 = 6 + (2 + 1)'), n('6 − 2 = 2 − 6')], answer: 0 }
    ] },
  { id: 'I3', lesson: 1, concept: 'The Associative Property',
    explain: 'Changing how the numbers are grouped with parentheses in an addition does not change the sum. ' + n('(10 + 4) + 20 + 17 = 51') + ', ' + n('10 + (4 + 20) + 17 = 51') + ' and ' + n('10 + 4 + (20 + 17) = 51') + '. Solve what is in the parentheses first. This is the Associative Property.',
    variants: [
      { type: 'num', mode: 'timed', seconds: 14, level: 'easy', q: 'Solve: ' + n('(10 + 4) + 20 + 17 ='), answer: '51', calc: '(10+4)+20+17' },
      { type: 'num', mode: 'timed', seconds: 14, level: 'easy', q: 'Solve: ' + n('10 + (4 + 20) + 17 ='), answer: '51', calc: '10+(4+20)+17' },
      { type: 'num', mode: 'timed', seconds: 14, level: 'easy', q: 'Solve: ' + n('10 + 4 + (20 + 17) ='), answer: '51', calc: '10+4+(20+17)' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What did you notice about these three problems?', options: ['Changing how the numbers are grouped with parentheses does not change the sum', 'Parentheses always change the sum', 'The greatest sum is the one inside the parentheses', 'Problems with parentheses cannot be solved'], answer: 0 },
      { type: 'term', mode: 'normal', level: 'easy', q: 'The property that says changing the grouping of numbers in addition does not change the sum.', answer: 'Associative' },
      { type: 'term', mode: 'normal', level: 'easy', q: 'The property that says changing the order of numbers in addition does not change the sum.', answer: 'Commutative' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which equation shows the Associative Property?', options: [n('(6 + 2) + 1 = 6 + (2 + 1)'), n('6 + 2 = 2 + 6'), n('6 + 0 = 6'), n('6 + 2 + 1 = 6 + 2')], answer: 0 }
    ] },
  { id: 'I4', lesson: 1, boss: true, concept: 'Do the properties apply to subtraction?',
    explain: 'The Commutative and Associative Properties do not work for subtraction. ' + n('(20 − 10) − 5 = 5') + ' but ' + n('20 − (10 − 5) = 15') + '. Subtracting zero from a number gives the same number, ' + n('12 − 0 = 12') + ', but we cannot subtract a number from zero with whole numbers.',
    variants: [
      { type: 'num', mode: 'boss', level: 'hard', q: 'Solve: ' + n('(20 − 10) − 5 ='), answer: '5', calc: '(20-10)-5' },
      { type: 'num', mode: 'boss', level: 'hard', q: 'Solve: ' + n('20 − (10 − 5) ='), answer: '15', calc: '20-(10-5)' },
      { type: 'mc', mode: 'boss', level: 'hard', q: 'Does the Associative Property work for subtraction?', options: ['No, because changing the parentheses changes the answer', 'Yes, because parentheses do not change the answer', 'Yes, in every case', 'We cannot tell'], answer: 0 },
      { type: 'mc', mode: 'boss', level: 'hard', q: 'Moaaz thinks that ' + n('4 − 0') + ' has the same answer as ' + n('0 − 4') + ' because any number minus 0 equals that number. What is correct?', options: ['4 − 0 = 4 is right, but 0 − 4 cannot be worked out here, so they are not equal', 'Moaaz is right because order does not matter in subtraction', 'Both answers are 0', 'Both answers are 4'], answer: 0 },
      { type: 'tf', mode: 'boss', level: 'hard', q: n('12 − 0 = 12') + '.', answer: 0 }
    ] },

  /* ---------- Lesson 2 · Addition with Regrouping (pages 27-28) ---------- */
  { id: 'J1', lesson: 2, concept: 'Estimate, then add with regrouping',
    explain: 'Estimate the sum by rounding both numbers, then find the exact sum. Estimate ' + n('579 + 62') + ' as ' + n('580 + 60 = 640') + '; the exact sum is ' + n('641') + '. When the sum of a place is more than 9, regroup: make a new ten (or hundred) and add it to the next place.',
    variants: [
      { type: 'num', mode: 'timed', seconds: 14, level: 'easy', q: 'Estimate ' + n('579 + 62') + ' by rounding both numbers to the nearest ten.', answer: '640', calc: '580+60' },
      { type: 'num', mode: 'timed', seconds: 14, level: 'easy', q: 'Find the exact sum: ' + n('579 + 62 ='), answer: '641', calc: '579+62' },
      { type: 'num', mode: 'normal', level: 'medium', q: 'Estimate ' + n('8,049 + 6,199') + ' by rounding both numbers to the nearest hundred.', answer: '14200', calc: '8000+6200' },
      { type: 'num', mode: 'normal', level: 'medium', q: 'Find the exact sum: ' + n('8,049 + 6,199 ='), answer: '14248', calc: '8049+6199' },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'medium', q: 'When we add ' + n('9 + 4') + ' in the ones place, we make one ten and ___ ones are left.', options: ['3', '13', '1'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which estimate is best for ' + n('8,049 + 6,199') + '?', options: [n('14,200'), n('12,200'), n('16,200'), n('8,200')], answer: 0 }
    ] },
  { id: 'J2', lesson: 2, concept: 'Is the answer reasonable?',
    explain: 'We use an estimate to check whether an answer is reasonable. The first ant bridge has ' + n('142') + ' ants and the second has ' + n('165') + '. The estimate is ' + n('140 + 170 = 310') + ' and the exact answer is ' + n('307') + ', which is close to the estimate, so it is reasonable.',
    variants: [
      { type: 'num', mode: 'timed', seconds: 14, level: 'easy', q: 'The first bridge has 142 ants and the second has 165 ants. How many ants were needed for both bridges?', answer: '307', calc: '142+165' },
      { type: 'num', mode: 'timed', seconds: 14, level: 'easy', q: 'Estimate ' + n('142 + 165') + ' by rounding both numbers to the nearest ten.', answer: '310', calc: '140+170' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'A student says both bridges need 372 ants. Is the answer reasonable? (The estimate is ' + n('310') + ')', options: ['No, because it is far from the estimate of 310', 'Yes, because it is greater than 310', 'Yes, because every answer is reasonable', 'We cannot tell'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 12, level: 'easy', q: 'An estimate can be used to check whether an answer is reasonable.', answer: 0 },
      { type: 'num', mode: 'normal', level: 'medium', q: 'Most bridges are made with around 50 ants. How many ants are needed for ten bridges?', answer: '500', calc: '50*10' }
    ] },
  { id: 'J3', lesson: 2, boss: true, concept: 'Adding big numbers and checking with an estimate',
    explain: 'Add big numbers by regrouping place by place, and check with an estimate. ' + n('27,385 + 52,890') + ' estimated to the thousands is ' + n('27,000 + 53,000 = 80,000') + ' and the exact sum is ' + n('80,275') + '.',
    variants: [
      { type: 'num', mode: 'boss', level: 'hard', q: '1,725 ants joined a colony of 22,750 ants. How many ants are in the colony now?', answer: '24475', calc: '22750+1725' },
      { type: 'num', mode: 'boss', level: 'hard', q: 'Then another 6,075 ants joined the colony of 24,475 ants. How many ants are in the colony now?', answer: '30550', calc: '24475+6075' },
      { type: 'num', mode: 'boss', level: 'hard', q: 'Find the exact sum: ' + n('27,385 + 52,890 ='), answer: '80275', calc: '27385+52890' },
      { type: 'mc', mode: 'boss', level: 'hard', q: 'Which estimate is closest to ' + n('27,385 + 52,890') + ' when both numbers are rounded to the nearest thousand?', options: [n('80,000'), n('70,000'), n('90,000'), n('60,000')], answer: 0 }
    ] },

  /* ---------- Lesson 3 · Subtraction with Regrouping (pages 29-31) ---------- */
  { id: 'K1', lesson: 3, concept: 'Regrouping in subtraction and error analysis',
    explain: 'When the digit being subtracted is greater than the digit above it in the same place, regroup: take one ten from the place on the left and make it 10 ones. In ' + n('521 − 37') + ' we regroup one ten, so the ones become 11, then ' + n('11 − 7 = 4') + ', and the answer is ' + n('484') + ', not ' + n('516') + '.',
    variants: [
      { type: 'num', mode: 'normal', level: 'medium', q: 'Solve: ' + n('521 − 37 ='), answer: '484', calc: '521-37' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'A student wrote ' + n('521 − 37 = 516') + ' because they subtracted the smaller digit from the greater one in every place. What was the mistake?', options: ['They did not regroup a ten to subtract 7 from 1 in the ones place', 'They did not write the answer in words', 'They subtracted the ones from the tens', 'They added instead of subtracting'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 15, level: 'medium', q: 'To subtract 7 from 1 in the ones place, we regroup one ten so the ones become 11.', answer: 0 },
      { type: 'term', mode: 'normal', level: 'medium', q: 'Changing one ten into 10 ones in the place to its right so we can subtract.', answer: 'Regrouping' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'How many tens are left in 521 after one ten is regrouped?', options: ['1', '2', '3', '0'], answer: 0 }
    ] },
  { id: 'K2', lesson: 3, concept: 'Subtracting on the place value chart',
    explain: 'In ' + n('3,328 − 2,164') + ' we subtract place by place: ones ' + n('8 − 4 = 4') + '; then regroup one hundred because 2 tens is less than 6 tens, so the tens become 12 and ' + n('12 − 6 = 6') + '; then hundreds ' + n('2 − 1 = 1') + '; then thousands ' + n('3 − 2 = 1') + '. The answer is ' + n('1,164') + '.',
    variants: [
      { type: 'num', mode: 'normal', level: 'medium', q: 'Solve: ' + n('3,328 − 2,164 ='), answer: '1164', calc: '3328-2164' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'In ' + n('3,328 − 2,164') + ', why do we regroup a hundred in the tens place?', options: ['Because 2 tens is less than 6 tens', 'Because 8 ones is greater than 4 ones', 'Because the thousands are equal', 'Because the hundreds are equal'], answer: 0 },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'In ' + n('3,328 − 2,164') + ' we do not need to regroup.', answer: 1 },
      { type: 'num', mode: 'normal', level: 'hard', q: 'After regrouping one hundred, how many tens are in the tens place of ' + n('3,328') + '?', answer: '12', calc: '2+10' },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'In ' + n('3,328 − 2,164') + ' we subtract the ones first: ' + n('8 − 4') + ' = ___.', options: ['4', '12', '6'], answer: 0 }
    ] },
  { id: 'K3', lesson: 3, boss: true, concept: 'Subtraction problems about swimming ants',
    explain: 'Some ants can swim. A trap jaw ant can swim 16-17 cm per second, about ' + n('1,020') + ' cm in a minute. Solve subtraction problems by regrouping and check with an estimate.',
    variants: [
      { type: 'num', mode: 'boss', level: 'hard', q: 'A trap jaw ant wants to cross a river that is 3,548 cm across. It has already swum 1,672 cm. How much farther does it have to go?', answer: '1876', calc: '3548-1672' },
      { type: 'num', mode: 'boss', level: 'hard', q: 'The first fire ant colony had about 1,267 ants and the second had 3,452. How many more ants were in the second colony?', answer: '2185', calc: '3452-1267' },
      { type: 'num', mode: 'boss', level: 'hard', q: 'A fire ant colony has 255,000 ants. A Gigantiops destructor ant colony has 6,200. What is the difference between the size of the two colonies?', answer: '248800', calc: '255000-6200' },
      { type: 'num', mode: 'boss', level: 'hard', q: 'An ant swims 17 cm per second. How many centimeters does it swim in a minute (60 seconds)?', answer: '1020', calc: '17*60' },
      { type: 'mc', mode: 'boss', level: 'hard', q: 'Estimate ' + n('3,548 − 1,672') + ' by rounding to the nearest thousand: ' + n('4,000 − 2,000 = 2,000') + '. Is the answer ' + n('1,876') + ' reasonable?', options: ['Yes, because it is close to 2,000', 'No, because it is less than 2,000', 'No, because an estimate always equals the answer', 'We cannot tell'], answer: 0 }
    ] },

  /* ---------- Lesson 4 · Bar Models, Variables, and Story Problems (pages 32-34) ---------- */
  { id: 'L1', lesson: 4, concept: 'The bar model and the equation',
    explain: 'A bar model draws the whole and its parts. For 5,328 ants in a colony, 2,164 of them female and the rest male, let a be the number of male ants. The equation is ' + n('2,164 + a = 5,328') + ' and the solution is ' + n('a = 5,328 − 2,164 = 3,164') + '.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'There are 5,328 ants in the colony. 2,164 are females and the rest are males. Which equation shows the number of males a?', options: [n('2,164 + a = 5,328'), n('5,328 + a = 2,164'), n('a − 2,164 = 5,328'), n('2,164 − a = 5,328')], answer: 0 },
      { type: 'num', mode: 'normal', level: 'medium', q: 'How many male ants a are in the colony?', answer: '3164', calc: '5328-2164' },
      { type: 'num', mode: 'normal', level: 'medium', q: 'There are 20,000 ants in the colony. 12,000 are females and the rest are males. How many male ants are there?', answer: '8000', calc: '20000-12000' },
      { type: 'term', mode: 'normal', level: 'easy', q: 'A drawing of bars that shows the parts and the whole of a problem.', answer: 'Bar model' },
      { type: 'term', mode: 'normal', level: 'easy', q: 'A letter that stands for an unknown number in an equation.', answer: 'Variable' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'In the bar model for ' + n('2,164 + a = 5,328') + ', the longest bar shows ___.', options: [n('5,328') + ' (the whole)', n('2,164') + ' (a part)', 'a by itself', n('2,164 + 5,328')], answer: 0 }
    ] },
  { id: 'L2', lesson: 4, concept: 'Solving equations with variables',
    explain: 'To find the variable, use the inverse operation. In ' + n('14,000 − n = 6,000') + ' we find ' + n('n = 14,000 − 6,000 = 8,000') + '. In ' + n('b − 53,500 = 75,200') + ' we find ' + n('b = 75,200 + 53,500 = 128,700') + '.',
    variants: [
      { type: 'num', mode: 'timed', seconds: 14, level: 'easy', q: 'Find n: ' + n('14,000 − n = 6,000'), answer: '8000', calc: '14000-6000' },
      { type: 'num', mode: 'normal', level: 'medium', q: 'Find b: ' + n('b − 53,500 = 75,200'), answer: '128700', calc: '75200+53500' },
      { type: 'num', mode: 'normal', level: 'hard', q: 'Find c: ' + n('725,625 + c = 935,075'), answer: '209450', calc: '935075-725625' },
      { type: 'num', mode: 'normal', level: 'medium', q: 'Find d: ' + n('13,280 − d = 5,420'), answer: '7860', calc: '13280-5420' },
      { type: 'num', mode: 'normal', level: 'hard', q: 'Find f: ' + n('f + 205,925 = 810,775'), answer: '604850', calc: '810775-205925' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which operation do we use to find n in ' + n('14,000 − n = 6,000') + '?', options: [n('14,000 − 6,000'), n('14,000 + 6,000'), n('6,000 − 14,000'), n('14,000 × 6,000')], answer: 0 }
    ] },
  { id: 'L3', lesson: 4, boss: true, concept: 'From a story problem to an equation',
    explain: 'Read the problem, find the whole and the parts, use a variable for the unknown, write the equation and solve it. ' + n('1,200 − 700 = 500') + ' ants are foraging for food, and ' + n('12,000 − 2,500 = 9,500') + ' species of ants do not live in Africa.',
    variants: [
      { type: 'num', mode: 'boss', level: 'hard', q: 'In colony A there are 1,200 ants. 700 ants are taking out the colony’s trash and the rest are out foraging for food and supplies. How many ants are foraging?', answer: '500', calc: '1200-700' },
      { type: 'num', mode: 'boss', level: 'hard', q: 'There are 12,000 species of ants. 2,500 species live in Africa and the rest live in other parts of the world. How many species do not live in Africa?', answer: '9500', calc: '12000-2500' },
      { type: 'mc', mode: 'boss', level: 'hard', q: 'There are 12,000 species of ants, 2,500 of them in Africa and the rest x. Which equation shows the problem?', options: [n('2,500 + x = 12,000'), n('12,000 + x = 2,500'), n('x − 2,500 = 12,000'), n('x + 12,000 = 2,500')], answer: 0 },
      { type: 'tf', mode: 'boss', level: 'hard', q: 'To find b in ' + n('b − 53,500 = 75,200') + ' we subtract: ' + n('75,200 − 53,500') + '.', answer: 1 },
      { type: 'mc', mode: 'boss', level: 'hard', q: 'To find b in ' + n('b − 53,500 = 75,200') + ' we use ___.', options: ['addition: ' + n('75,200 + 53,500'), 'subtraction: ' + n('75,200 − 53,500'), 'multiplying by 53,500', 'dividing by 75,200'], answer: 0 }
    ] },

  /* ---------- Lesson 5 · Solving Multistep Story Problems with Addition and Subtraction (pages 35-38) ---------- */
  { id: 'M1', lesson: 5, concept: 'The hidden question and the steps to solve a story problem',
    explain: 'In a multistep problem, first find the hidden question, then answer the main question. Colony A had 1,025 ants and 101 left, so ' + n('924') + ' are left. Colony B has 1,555 ants, so the difference is ' + n('1,555 − 924 = 631') + '.',
    variants: [
      { type: 'num', mode: 'normal', level: 'medium', q: 'There were 1,025 ants in Colony A on Wednesday. On Friday, 101 ants leave the colony. How many ants are left in Colony A?', answer: '924', calc: '1025-101' },
      { type: 'num', mode: 'normal', level: 'medium', q: 'Colony B has 1,555 ants. How many more ants are in Colony B than the 924 ants left in Colony A?', answer: '631', calc: '1555-924' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What is the hidden question in the problem about Colony A and Colony B?', options: ['How many ants are left in Colony A?', 'How many ants are in Colony B?', 'How many days are there between Wednesday and Friday?', 'How many ants left Colony B?'], answer: 0 },
      { type: 'order', mode: 'normal', level: 'hard', q: 'Put the steps to solving a story problem in order.', items: ['Draw a box around operation clues', 'Underline questions', 'Use the new information to solve the problem and find the unknown', 'Circle important numbers and labels', 'Examine the information: what is known, what is unknown, what is the hidden question', 'Use what is known to answer the hidden question'], answer: [3, 1, 0, 4, 5, 2] },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'In the first step, we circle important ___ and labels.', options: ['numbers', 'questions', 'boxes'], answer: 0 }
    ] },
  { id: 'M2', lesson: 5, concept: 'Two-step problems',
    explain: 'First solve the hidden question, then use its answer in the main question. Ahmed ate 340 + 190 + 85 + 255 = ' + n('870') + ' calories, so he can eat ' + n('2,000 − 870 = 1,130') + ' more.',
    variants: [
      { type: 'num', mode: 'normal', level: 'medium', q: 'Ahmed had a pie with 340 calories, a glass of milk with 190, an apple with 85 and a chicken sandwich with 255. How many calories did he eat?', answer: '870', calc: '340+190+85+255' },
      { type: 'num', mode: 'normal', level: 'medium', q: 'The average adult can eat 2,000 calories per day. How many more calories can Ahmed eat after eating 870?', answer: '1130', calc: '2000-870' },
      { type: 'num', mode: 'normal', level: 'hard', q: 'A colony had 22,750 ants on Monday and 50,750 ants on Friday. How many ants joined the colony since Monday?', answer: '28000', calc: '50750-22750' },
      { type: 'num', mode: 'normal', level: 'hard', q: 'The ant colony website hopes that a new colony with up to 173,500 ants will form. If a colony of 27,385 ants and a colony of 52,890 ants join the new colony, how many more ants can join?', answer: '93225', calc: '173500-27385-52890' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'To solve Ahmed’s calorie problem we start by answering the hidden question, which is ___.', options: ['how many calories Ahmed has already eaten', 'how many calories are in the milk only', 'how many calories are in the sandwich', 'how many times Ahmed ate'], answer: 0 }
    ] },
  { id: 'M3', lesson: 5, boss: true, concept: 'Multistep problems with big numbers',
    explain: 'In a big problem, write the steps in order. The Great Pyramid had 59,000 visitors in January, 27,525 in February and 32,975 in March, so ' + n('119,500') + ' in all. To reach 150,000 it needs ' + n('150,000 − 119,500 = 30,500') + ' more.',
    variants: [
      { type: 'num', mode: 'boss', level: 'hard', q: 'The Great Pyramid had 59,000 visitors in January, 27,525 in February and 32,975 in March. How many visitors came in the three months?', answer: '119500', calc: '59000+27525+32975' },
      { type: 'num', mode: 'boss', level: 'hard', q: 'They expect 150,000 visitors by the end of April, and 119,500 have come up to March. How many visitors need to show up in April?', answer: '30500', calc: '150000-119500' },
      { type: 'num', mode: 'boss', level: 'hard', q: 'Matrouh has a population of 429,999 and South Sinai has a population of 108,951. What is their population combined?', answer: '538950', calc: '429999+108951' },
      { type: 'num', mode: 'boss', level: 'hard', q: 'New Valley has a population of 256,088. How many more people do Matrouh and South Sinai combined (538,950) have than New Valley?', answer: '282862', calc: '538950-256088' },
      { type: 'mc', mode: 'boss', level: 'hard', q: 'What is the hidden question in the problem about Matrouh, South Sinai and New Valley?', options: ['What is the population of Matrouh and South Sinai combined?', 'What is the population of New Valley?', 'What is the population of Egypt?', 'What is the area of New Valley?'], answer: 0 }
    ] }
];
})();
