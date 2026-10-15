/* Math · Grade 5 · Unit 1 "Place Value of Decimals and Operations" · Languages track (English), first term 2026/2027
   Source: the English school book, Unit 1 (pages 3-42): Concept 1 "Decimals to the Thousandths Place" (lessons 1-5), Concept 2 "Adding and Subtracting Decimals" (lessons 6-11).
   The book is a student activity book with no printed answers, so the numbers and situations are the book's own (bird weights, Akram's plots, petrol prices, Fayoum daylight,
   Wadi El Rayan, the Nile trip, the shadoof, the Nile Delta, Tahya Misr Bridge, Nile fish) and EVERY number answer is computed: each `num` question carries `calc` (or `round`),
   and tools/check_questions.js recomputes it, so a wrong answer cannot be published.
   Idea letters (one per lesson): A L1 Decimals to the Thousandths · B L2 Place Value Shuffle · C L3 Composing and Decomposing · D L4 Comparing · E L5 Rounding ·
   F L6 Estimating Sums · G L7 Modeling Addition · H L8 Modeling Subtraction · I L9 Estimating Differences · J L10 Subtracting to the Thousandths · K L11 Story Problems.
   Boss ideas: A4, B4, C4, D4, E4, F3, G4, H4, I3, J3, K3.
   Pictures (math/m5_art.js): gridShade, placeChart, numLine (tap) and gridModel (picture above a question: q.fig + q.pic).
   Same ids, phrasings and answers as questions_m5c1_ar.js (added after the English review). */
(function () {
window.CHAPTER = { id: 'm5c1', title: 'Place Value of Decimals and Operations', grade: 'Grade 5', track: 'Languages' };

/* a small helper for the cities' data used by several questions of lesson 3 */
const DAY = 'Daylight hours in Fayoum: Jan 10.5 · Feb 11.2 · Mar 12 · Apr 12.9 · May 13.6 · Jun 14 · Jul 13.8 · Aug 13.2 · Sep 12.3 · Oct 11.4 · Nov 10.7 · Dec 10.3.';

window.IDEAS = [
  /* ---------- Lesson 1 · Decimals to the Thousandths Place (pages 3-6) ---------- */
  { id: 'A1', lesson: 1, concept: 'Tenths, hundredths and thousandths',
    explain: 'A whole can be divided into 10 equal parts (tenths), 100 equal parts (hundredths) or 1,000 equal parts (thousandths). One tenth is 0.1, one hundredth is 0.01 and one thousandth is 0.001. A thousandth is what you get when one hundredth is cut into 10 equal parts.',
    variants: [
      { type: 'fill', mode: 'timed', seconds: 12, level: 'easy', q: 'A whole cut into 100 equal parts gives ___.', options: ['hundredths', 'tenths', 'thousandths'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'One column of a 10 × 10 grid is shaded. What part of the whole grid is shaded?', options: ['1 tenth (0.1)', '1 hundredth (0.01)', '1 thousandth (0.001)', '1 whole'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 12, level: 'easy', q: 'A thousandth is smaller than a hundredth.', answer: 0 },
      { type: 'term', mode: 'normal', level: 'easy', q: 'One of 1,000 equal parts of a whole.', answer: 'Thousandth' },
      { type: 'match', mode: 'normal', level: 'medium', q: 'Match each decimal to its name.', left: ['0.1', '0.01', '0.001'], right: ['A thousandth', 'A tenth', 'A hundredth'], answer: [1, 2, 0] },
      { type: 'tap', diagram: 'gridShade', pic: { vals: [0.5, 0.3, 0.03] }, mode: 'normal', level: 'medium', q: 'Tap the grid that is shaded to show 0.3.', answer: 'gB' }
    ] },
  { id: 'A2', lesson: 1, concept: 'Reading and writing decimals to the thousandths',
    explain: 'A decimal is read by its place values. 0.65 is 6 tenths and 5 hundredths, read “sixty-five hundredths”. 1.27 is “one and twenty-seven hundredths”. 0.875 is “eight hundred seventy-five thousandths”: its digit 8 is in the tenths place, 7 in the hundredths place and 5 in the thousandths place.',
    variants: [
      { type: 'num', mode: 'normal', level: 'easy', q: 'Write as a decimal: 6 tenths and 5 hundredths.', answer: '0.65', calc: '0.6+0.05' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'How do we read 1.27?', options: ['One and twenty-seven hundredths', 'One and twenty-seven tenths', 'One and twenty-seven thousandths', 'Twelve and seven tenths'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 12, level: 'easy', q: 'In 0.875, the digit 8 is in the ___ place.', options: ['tenths', 'hundredths', 'ones'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'A purple heron weighs 0.875 kilogram. Which digit is in the hundredths place?', options: ['7', '8', '5', '0'], answer: 0 },
      { type: 'tap', diagram: 'placeChart', pic: { num: '1.27' }, mode: 'normal', level: 'medium', q: 'Tap the column that holds the digit 7 in 1.27.', answer: 'hundredths' },
      { type: 'tf', mode: 'normal', level: 'easy', q: '0.65 is read “sixty-five hundredths”.', answer: 0 }
    ] },
  { id: 'A3', lesson: 1, concept: 'Build a decimal from its places',
    explain: 'To write a decimal from its places, put each count in its own column: 3 tenths, 4 hundredths and 5 thousandths make 0.345. A place with nothing in it is written with a zero, so 2 ones, 7 hundredths and 4 thousandths make 2.074.',
    variants: [
      { type: 'num', mode: 'normal', level: 'medium', q: 'Write the decimal: 3 tenths, 4 hundredths and 5 thousandths.', answer: '0.345', calc: '0.3+0.04+0.005' },
      { type: 'num', mode: 'normal', level: 'hard', q: 'Write the decimal: 2 ones, 7 hundredths and 4 thousandths.', answer: '2.074', calc: '2+0.07+0.004' },
      { type: 'mc', fig: 'gridModel', pic: { a: 0.25, b: 0, mode: 'add' }, mode: 'normal', level: 'medium', q: 'A 10 × 10 grid has 2 full columns and 5 more squares shaded. What decimal is shaded?', options: ['0.25', '2.5', '0.52', '0.025'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'medium', q: 'Five thousandths is written as 0.___.', options: ['005', '5', '05'], answer: 0 },
      { type: 'tf', mode: 'normal', level: 'medium', q: '0.4 + 0.03 + 0.005 = 0.435.', answer: 0 }
    ] },
  { id: 'A4', lesson: 1, boss: true, concept: 'Making 1,000 equal parts',
    explain: 'A plot cut into 100 equal parts has hundredths. To make 1,000 equal parts, cut each of the 100 parts into 10 equal parts. A plot cut into 10 equal parts needs each tenth cut into 100 equal parts. One thousandth is the smallest of tenths, hundredths and thousandths.',
    variants: [
      { type: 'mc', style: 'story', mode: 'boss', level: 'hard', q: 'Akram has a square plot cut into 100 equal parts. He needs 1,000 equal parts of the same plot. What can he do?', options: ['Cut each of the 100 parts into 10 equal parts', 'Cut the plot into 10 more parts', 'Cut each part in half', 'Add 900 new parts to the plot'], answer: 0 },
      { type: 'mc', style: 'story', mode: 'boss', level: 'hard', q: 'Akram has a square plot cut into 10 equal parts. How can he get 1,000 equal parts?', options: ['Cut each of the 10 parts into 100 equal parts', 'Cut each part into 10 equal parts', 'Cut each part in half 10 times', 'Cut the plot into 1,000 more parts'], answer: 0 },
      { type: 'num', mode: 'boss', level: 'hard', q: 'A square plot is cut into 1,000 equal parts. Akram builds on 7 of them. What decimal of the plot is that?', answer: '0.007', calc: '7/1000' },
      { type: 'mc', mode: 'boss', level: 'hard', q: 'Which is the smallest part of the same plot?', options: ['1 thousandth', '1 hundredth', '1 tenth', '1 whole'], answer: 0 }
    ] },

  /* ---------- Lesson 2 · Place Value Shuffle (pages 7-10) ---------- */
  { id: 'B1', lesson: 2, concept: 'Multiplying by 10 moves digits to the left',
    explain: 'When a number is multiplied by 10, the value of the whole number increases by a factor of 10 and every digit moves one place to the left. 3,615 × 10 = 36,150. In 57 × 10 = 570 the value of the 5 increases from 50 to 500 and the value of the 7 from 7 to 70.',
    variants: [
      { type: 'num', mode: 'timed', seconds: 20, level: 'easy', q: '3,615 × 10 = ?', answer: '36150', calc: '3615*10' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'When 57 is multiplied by 10, what happens to the digit 5?', options: ['Its value increases from 50 to 500', 'Its value stays 50', 'It becomes 5.0', 'Its value increases from 5 to 50'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 12, level: 'easy', q: 'Multiplying by 10 moves every digit one place to the ___.', options: ['left', 'right', 'up'], answer: 0 },
      { type: 'num', mode: 'normal', level: 'easy', q: '6.5 × 10 = ?', answer: '65', calc: '6.5*10' },
      { type: 'tf', mode: 'normal', level: 'easy', q: 'When we multiply a number by 10, the value of the whole number increases by a factor of 10.', answer: 0 }
    ] },
  { id: 'B2', lesson: 2, concept: 'Dividing by 10 moves digits to the right',
    explain: 'When a number is divided by 10, the value of the whole number decreases by a factor of 10 and every digit moves one place to the right. 57 ÷ 10 = 5.7 and 345 ÷ 10 = 34.5. In 345 ÷ 10 the 3 goes from 300 to 30, the 4 from 40 to 4 and the 5 from 5 to 0.5.',
    variants: [
      { type: 'num', mode: 'normal', level: 'easy', q: '57 ÷ 10 = ?', answer: '5.7', calc: '57/10' },
      { type: 'num', mode: 'normal', level: 'medium', q: '345 ÷ 10 = ?', answer: '34.5', calc: '345/10' },
      { type: 'tf', mode: 'timed', seconds: 12, level: 'easy', q: 'Dividing by 10 moves every digit one place to the right.', answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'When 345 is divided by 10, the value of the digit 3 changes from 300 to…', options: ['30', '3', '0.3', '3,000'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'When we divide by 10, the value of the whole number ___ by a factor of 10.', options: ['decreases', 'increases', 'stays the same'], answer: 0 }
    ] },
  { id: 'B3', lesson: 2, concept: 'Patterns in the place value system',
    explain: 'In our place value system every place is worth 10 times the place to its right and one tenth of the place to its left. Ten hundredths make one tenth, and ten tenths make one whole. So a digit that moves one place to the left becomes 10 times greater.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'A digit in the tens place is worth how many times the same digit in the ones place?', options: ['10 times', '100 times', '1 tenth', 'The same'], answer: 0 },
      { type: 'num', mode: 'normal', level: 'medium', q: 'How many hundredths make 1 tenth?', answer: '10', calc: '0.1/0.01' },
      { type: 'order', mode: 'normal', level: 'medium', q: 'Put the places in order from the greatest value to the least.', items: ['Tenths', 'Tens', 'Hundredths', 'Ones'], answer: [1, 3, 0, 2] },
      { type: 'tf', mode: 'timed', seconds: 15, level: 'medium', q: 'In 0.77 both 7s have the same value.', answer: 1 },
      { type: 'build', style: 'whatif', mode: 'normal', level: 'hard', q: 'A digit moves one place to the left in a number.', parts: ['Its value', 'becomes 10 times greater'], extra: ['becomes 10 times smaller', 'stays the same'] }
    ] },
  { id: 'B4', lesson: 2, boss: true, concept: 'Moving two places',
    explain: 'Moving every digit two places to the left means multiplying by 10 twice, which is multiplying by 100: 4.5 × 100 = 450. Moving two places to the right means dividing by 100: 3,615 ÷ 100 = 36.15.',
    variants: [
      { type: 'num', mode: 'boss', level: 'hard', q: '4.5 × 100 = ?', answer: '450', calc: '4.5*100' },
      { type: 'num', mode: 'boss', level: 'hard', q: '3,615 ÷ 100 = ?', answer: '36.15', calc: '3615/100' },
      { type: 'mc', mode: 'boss', level: 'hard', q: 'Moving every digit of a number two places to the left is the same as multiplying by…', options: ['100', '20', '10', '2'], answer: 0 },
      { type: 'mc', style: 'story', mode: 'boss', level: 'hard', q: 'Mona divides 3,615 by 10, and then divides the result by 10 again. Which single operation gives the same result?', options: ['3,615 ÷ 100', '3,615 ÷ 20', '3,615 ÷ 10', '3,615 ÷ 1,000'], answer: 0 }
    ] },

  /* ---------- Lesson 3 · Composing and Decomposing Decimals (pages 11-14) ---------- */
  { id: 'C1', lesson: 3, concept: 'Expanded form of a decimal',
    explain: 'The expanded form of a decimal is the sum of the values of its digits. 12.42 = 10 + 2 + 0.4 + 0.02, and 34.527 = 30 + 4 + 0.5 + 0.02 + 0.007. Writing the expanded form shows what each digit is worth.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which is the expanded form of 34.527?', options: ['30 + 4 + 0.5 + 0.02 + 0.007', '30 + 4 + 5 + 2 + 7', '3 + 4 + 0.5 + 0.2 + 0.7', '34 + 0.5 + 0.2 + 0.7'], answer: 0 },
      { type: 'num', mode: 'normal', level: 'easy', q: 'Write the number: 10 + 2 + 0.4 + 0.02', answer: '12.42', calc: '10+2+0.4+0.02' },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'In 14.932, what is the value of the digit 3?', options: ['0.03', '0.3', '3', '0.003'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: '231.128 = 200 + 30 + 1 + 0.1 + 0.02 + ___', options: ['0.008', '0.8', '0.08'], answer: 0 },
      { type: 'num', mode: 'normal', level: 'hard', q: 'Write the number: 500 + 8 + 0.1 + 0.07', answer: '508.17', calc: '500+8+0.1+0.07' }
    ] },
  { id: 'C2', lesson: 3, concept: 'Other ways to decompose a decimal',
    explain: 'A decimal can be decomposed in many ways. 12.42 = 12 + 0.42, = 12.4 + 0.02 and = 10 + 2.42 are all correct, because each pair adds back to 12.42. 21.045 = 20 + 1.045 = 21 + 0.045 = 21.04 + 0.005.',
    variants: [
      { type: 'multi', mode: 'normal', level: 'medium', q: 'Which are ways to decompose 12.42? Choose ALL the correct answers.', options: ['12 + 0.42', '12.4 + 0.02', '10 + 2.42', '12 + 0.042'], answer: [0, 1, 2] },
      { type: 'num', mode: 'normal', level: 'medium', q: '12.42 = 12.4 + ___', answer: '0.02', calc: '12.42-12.4' },
      { type: 'fill', mode: 'normal', level: 'medium', q: '34.527 = 34 + ___', options: ['0.527', '5.27', '0.0527'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'hard', q: 'Which is NOT a way to write 21.045?', options: ['20 + 1.45', '21 + 0.045', '21.04 + 0.005', '20 + 1 + 0.04 + 0.005'], answer: 0 }
    ] },
  { id: 'C3', lesson: 3, concept: 'Reading digits in data',
    explain: 'Reading a table of decimals means reading each digit by its place. In the Fayoum daylight data only January (10.5) has a 5 in the tenths place; May (13.6), July (13.8) and August (13.2) have a 3 in the ones place. The most daylight is June (14) and the least is December (10.3).',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: DAY + ' Which month has the most daylight?', options: ['June', 'July', 'May', 'August'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'easy', q: DAY + ' Which month has the least daylight?', options: ['December', 'January', 'November', 'February'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: DAY + ' Which month has a 5 in the tenths place?', options: ['January', 'May', 'December', 'March'], answer: 0 },
      { type: 'multi', mode: 'normal', level: 'medium', q: DAY + ' Which months have a 3 in the ones place? Choose ALL the correct answers.', options: ['May', 'July', 'August', 'June'], answer: [0, 1, 2] }
    ] },
  { id: 'C4', lesson: 3, boss: true, concept: 'Equivalent decimals: a zero at the end',
    explain: 'Writing a zero to the right of the last digit of a decimal does not change its value: 16.3 = 16.30. So 16.3 can be read “sixteen and three tenths” or “sixteen and thirty hundredths”: 3 tenths and 30 hundredths are the same part of a whole. 16.03 is a different number.',
    variants: [
      { type: 'mc', style: 'story', mode: 'boss', level: 'hard', q: 'Samir and Tahani recorded 16.3 °C. Tahani read it “sixteen and three tenths”. Samir read it “sixteen and thirty hundredths”. What can we say?', options: ['Both readings name the same number', 'Only Tahani is correct', 'Only Samir is correct', 'They named different numbers'], answer: 0 },
      { type: 'mc', mode: 'boss', level: 'hard', q: 'Which is another way to write 16.3?', options: ['16.30', '16.03', '16.003', '1.63'], answer: 0 },
      { type: 'multi', mode: 'boss', level: 'hard', q: 'Which numbers are equal to 16.3? Choose ALL the correct answers.', options: ['16.30', '16.300', '16.03', '163'], answer: [0, 1] },
      { type: 'tf', mode: 'boss', level: 'hard', q: '16.3 and 16.03 are the same number.', answer: 1 },
      { type: 'build', style: 'why', mode: 'boss', level: 'hard', q: 'A zero written at the end of 16.3 does not change its value.', parts: ['Because 3 tenths cover', 'the same part of a whole as 30 hundredths'], extra: ['Because a zero has no place', 'Because 30 is greater than 3'] }
    ] },

  /* ---------- Lesson 4 · Comparing Decimals (pages 15-16) ---------- */
  { id: 'D1', lesson: 4, concept: 'Comparing decimals place by place',
    explain: 'To compare decimals, compare the digits from the left, place by place; the first place where they differ decides. 29.9 < 30.2 because 29 ones < 30 ones; 36.5 > 35.6 because 6 ones > 5 ones; 40.5 < 41.0; 35.2 > 34.7.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: '29.9 ___ 30.2', options: ['<', '>', '='], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'easy', q: '36.5 ___ 35.6', options: ['>', '<', '='], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'easy', q: '40.5 ___ 41.0', options: ['<', '>', '='], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 12, level: 'easy', q: '35.2 > 34.7', answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: '35.2 ___ 34.7', options: ['>', '<', '='], answer: 0 }
    ] },
  { id: 'D2', lesson: 4, concept: 'Equal decimals: zeros at the end',
    explain: 'Zeros to the right of the last non-zero digit do not change a decimal: 38.80 = 38.8 and 34.5 = 34.500, because 5 tenths = 50 hundredths = 500 thousandths. 0.07 is different: it is 7 hundredths.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: '38.80 ___ 38.8', options: ['=', '<', '>'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'easy', q: '34.5 ___ 34.500', options: ['=', '<', '>'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 12, level: 'easy', q: '2.50 is greater than 2.5.', answer: 1 },
      { type: 'multi', mode: 'normal', level: 'medium', q: 'Which numbers are equal to 0.7? Choose ALL the correct answers.', options: ['0.70', '0.700', '0.07', '0.007'], answer: [0, 1] },
      { type: 'fill', mode: 'normal', level: 'medium', q: '0.5 = 0.500, because 5 tenths = ___ thousandths.', options: ['500', '50', '5'], answer: 0 }
    ] },
  { id: 'D3', lesson: 4, concept: 'More decimal digits does not mean greater',
    explain: 'A decimal with more digits is not always greater. 45.057 < 45.100 because 45.100 has 1 tenth and 45.057 has 0 tenths; 98.013 < 98.101; 50.009 < 50.100; 10.1 > 10.011; 2.01 < 2.099. Compare the places from the left, not the number of digits.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: '45.057 ___ 45.100', options: ['<', '>', '='], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: '10.1 ___ 10.011', options: ['>', '<', '='], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: '2.01 ___ 2.099', options: ['<', '>', '='], answer: 0 },
      { type: 'mc', style: 'story', mode: 'normal', level: 'hard', q: 'Lina says 98.013 is greater than 98.101 because it has more digits after the point. Is she right?', options: ['No. 98.101 has 1 tenth but 98.013 has 0 tenths', 'Yes. More digits means a greater number', 'Yes. 13 is greater than 1', 'No. They are equal'], answer: 0 },
      { type: 'fix', mode: 'normal', level: 'hard', q: 'A decimal with more digits is always greater.', wrong: 'always', answer: 'not always' }
    ] },
  { id: 'D4', lesson: 4, boss: true, concept: 'Order, largest and smallest',
    explain: 'To find the largest or the smallest of several decimals, compare place by place from the left. The largest of 1.401, 1.341, 1.440, 1.055, 1.3, 1.30, 1.28 and 1.49 is 1.49. The smallest of 20.09, 20.1, 20.001, 20.011, 20.10, 20.010, 20.9 and 20.21 is 20.001.',
    variants: [
      { type: 'mc', mode: 'boss', level: 'hard', q: 'Select the largest number: 1.401, 1.341, 1.440, 1.055, 1.3, 1.30, 1.28, 1.49', options: ['1.49', '1.440', '1.401', '1.341'], answer: 0 },
      { type: 'mc', mode: 'boss', level: 'hard', q: 'Select the smallest number: 20.09, 20.1, 20.001, 20.011, 20.10, 20.010, 20.9, 20.21', options: ['20.001', '20.010', '20.011', '20.09'], answer: 0 },
      { type: 'order', mode: 'boss', level: 'hard', q: 'Put the numbers in order from the smallest to the largest.', items: ['0.45', '0.054', '0.5', '0.405'], answer: [1, 3, 0, 2] },
      { type: 'multi', mode: 'boss', level: 'hard', q: 'Which numbers are greater than 0.45? Choose ALL the correct answers.', options: ['0.5', '0.405', '0.451', '0.054'], answer: [0, 2] },
      { type: 'mc', style: 'story', mode: 'boss', level: 'hard', q: 'Petrol prices per liter: 80 Octane 6.75 LE, 92 Octane 8.00 LE, 95 Octane 9.00 LE. Which type is the least expensive?', options: ['80 Octane', '92 Octane', '95 Octane'], answer: 0 }
    ] },

  /* ---------- Lesson 5 · Rounding Decimals (pages 17-19) ---------- */
  { id: 'E1', lesson: 5, concept: 'Rounding to the nearest whole number',
    explain: 'To round to the nearest whole number, look at the tenths digit: 5 or more rounds up, less than 5 rounds down. 7.7 rounds to 8 and 15.36 rounds to 15. 50.90 rounds to 51, not to 50.00: the 9 tenths are more than half of a whole.',
    variants: [
      { type: 'num', mode: 'normal', level: 'easy', q: 'Round 7.7 to the nearest whole number.', answer: '8', round: ['7.7', 0] },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Round 15.36 to the nearest whole number.', options: ['15', '16', '15.4', '15.3'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 12, level: 'easy', q: '50.90 rounds to 51 when rounded to the nearest whole number.', answer: 0 },
      { type: 'mc', style: 'story', mode: 'normal', level: 'medium', q: 'The area of the upper lake in Wadi El Rayan is 50.90 square kilometers. A student rounds it to the nearest whole number and writes 50.00. What did he do wrong?', options: ['He ignored the 9 tenths: 50.90 is closer to 51', 'He should have written 51.90', 'He should have written 50.9', 'Nothing, 50.00 is right'], answer: 0 },
      { type: 'tap', diagram: 'numLine', pic: { from: 7, to: 8, at: 7.7 }, mode: 'normal', level: 'medium', q: 'Round 7.7 to the nearest whole number. Tap the whole number it is closest to.', answer: 'n10' },
      { type: 'tap', diagram: 'numLine', pic: { from: 7, to: 8, at: null, all: true }, mode: 'normal', level: 'medium', q: 'Tap the place of 7.7 on the number line.', answer: 'n7' }
    ] },
  { id: 'E2', lesson: 5, concept: 'Rounding to the nearest tenth',
    explain: 'To round to the nearest tenth, look at the hundredths digit: 5 or more rounds the tenths up, less than 5 keeps them. 3.54 rounds to 3.5, 147.72 to 147.7 and 56.284 to 56.3.',
    variants: [
      { type: 'num', mode: 'normal', level: 'medium', q: 'Round 3.54 to the nearest tenth.', answer: '3.5', round: ['3.54', 1] },
      { type: 'num', mode: 'normal', level: 'medium', q: 'Round 147.72 kilometers to the nearest tenth.', answer: '147.7', round: ['147.72', 1], unit: 'km' },
      { type: 'num', mode: 'normal', level: 'medium', q: 'Round 56.284 to the nearest tenth.', answer: '56.3', round: ['56.284', 1] },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'medium', q: 'Which digit decides how 56.284 is rounded to the nearest tenth?', options: ['The 8 (hundredths)', 'The 2 (tenths)', 'The 4 (thousandths)', 'The 6 (ones)'], answer: 0 },
      { type: 'tap', diagram: 'numLine', pic: { from: 3.5, to: 3.6, at: 3.54 }, mode: 'normal', level: 'medium', q: 'Round 3.54 to the nearest tenth. Tap the tenth it is closest to.', answer: 'n0' }
    ] },
  { id: 'E3', lesson: 5, concept: 'Rounding to the nearest hundredth',
    explain: 'To round to the nearest hundredth, look at the thousandths digit: 5 or more rounds up. 1.277 rounds to 1.28, 73.255 rounds to 73.26 (a 5 rounds up), and 56.284 rounds to 56.28. The same number rounds differently to different places: 56.284 is 56 (whole), 56.3 (tenth) and 56.28 (hundredth).',
    variants: [
      { type: 'num', mode: 'normal', level: 'medium', q: 'Round 1.277 to the nearest hundredth.', answer: '1.28', round: ['1.277', 2] },
      { type: 'num', mode: 'normal', level: 'hard', q: 'Mazen stopped after driving 73.255 kilometers. Round the distance to the nearest hundredth.', answer: '73.26', round: ['73.255', 2], unit: 'km' },
      { type: 'num', mode: 'normal', level: 'medium', q: 'Round 56.284 to the nearest hundredth.', answer: '56.28', round: ['56.284', 2] },
      { type: 'match', mode: 'normal', level: 'hard', q: 'Match each way of rounding 56.284 to its result.', left: ['Nearest whole number', 'Nearest tenth', 'Nearest hundredth'], right: ['56.28', '56', '56.3'], answer: [1, 2, 0] },
      { type: 'tap', diagram: 'numLine', pic: { from: 1.27, to: 1.28, at: 1.277 }, mode: 'normal', level: 'medium', q: 'Round 1.277 to the nearest hundredth. Tap the hundredth it is closest to.', answer: 'n10' }
    ] },
  { id: 'E4', lesson: 5, boss: true, concept: 'Strategic rounding',
    explain: 'Rounding makes numbers easy to work with. The farmer rounds 125.45 m to 125.5 m and 89.52 m to 89.5 m, so about 2 × 125.5 + 2 × 89.5 = 430 m of fence. A distance of 36.921 m rounds to 37 m, which is outside the passage’s range of 30–35 m, while 31.45 m rounds to 31 m, which is inside.',
    variants: [
      { type: 'num', mode: 'boss', level: 'hard', q: 'A farmer rounds the sides of her field to the nearest tenth. What is 125.45 meters rounded to the nearest tenth?', answer: '125.5', round: ['125.45', 1], unit: 'm' },
      { type: 'num', mode: 'boss', level: 'hard', q: 'After rounding, a rectangular field is 125.5 m long and 89.5 m wide. How many meters of fence go all the way around it?', answer: '430', calc: '2*125.5+2*89.5', unit: 'm' },
      { type: 'num', mode: 'boss', level: 'hard', q: 'A geologist measured 31.45 meters between two waterfalls. Round it to the nearest whole number.', answer: '31', round: ['31.45', 0], unit: 'm' },
      { type: 'mc', style: 'story', mode: 'boss', level: 'hard', q: 'The passage says the distance between the falls is about 30–35 meters. A geologist measured 36.921 meters. Rounded to the nearest whole number, does it fit the range?', options: ['No. It rounds to 37, which is outside 30–35', 'Yes. It rounds to 36, which is inside', 'Yes. 36.921 is less than 40', 'No. It rounds to 36.9, which is outside'], answer: 0 }
    ] },

  /* ---------- Lesson 6 · Estimating Decimal Sums (pages 20-21) ---------- */
  { id: 'F1', lesson: 6, concept: 'Estimating a sum by rounding',
    explain: 'To estimate a sum, round each decimal to an easy number and add. Rounding to the ones (front-end estimation): 3.451 + 8.091 ≈ 3 + 8 = 11, and 9.98 + 4.56 ≈ 10 + 5 = 15. Rounding to the tenths (benchmark decimals): 2.361 + 3.783 ≈ 2.4 + 3.8 = 6.2.',
    variants: [
      { type: 'num', mode: 'normal', level: 'easy', q: 'Estimate 3.451 + 8.091 by rounding each number to the nearest whole number.', answer: '11', calc: '3+8' },
      { type: 'num', mode: 'normal', level: 'easy', q: 'Estimate 9.98 + 4.56 by rounding each number to the nearest whole number.', answer: '15', calc: '10+5' },
      { type: 'num', mode: 'normal', level: 'medium', q: 'Estimate 2.361 + 3.783 by rounding each number to the nearest tenth.', answer: '6.2', calc: '2.4+3.8' },
      { type: 'match', mode: 'normal', level: 'medium', q: 'Match each estimation strategy to how it rounds.', left: ['Front-end estimation', 'Benchmark decimals', 'Separate wholes and parts'], right: ['Round to tenths', 'Round to hundredths', 'Round to ones'], answer: [2, 0, 1] },
      { type: 'tf', mode: 'timed', seconds: 15, level: 'easy', q: '0.97 + 0.42 is about 1.4.', answer: 0 }
    ] },
  { id: 'F2', lesson: 6, concept: 'Using an estimate to decide',
    explain: 'An estimate can answer a question quickly. Samar rode 34.99 km and 4.01 km: about 35 + 4 = 39 km, which is less than her 40 km goal, so she has not met it yet. 5.98 + 2.03 is about 6 + 2 = 8.',
    variants: [
      { type: 'mc', style: 'story', mode: 'normal', level: 'medium', q: 'Samar wants to ride 40 kilometers this week. By Thursday she had ridden 34.99 km, and on Friday 4.01 km. Estimate: has she met her goal?', options: ['No. About 35 + 4 = 39, which is less than 40', 'Yes. About 35 + 5 = 40', 'Yes. 34.99 is almost 40', 'No. About 30 + 4 = 34'], answer: 0 },
      { type: 'num', mode: 'normal', level: 'easy', q: 'Estimate 34.99 + 4.01 by rounding each number to the nearest whole number.', answer: '39', calc: '35+4' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which estimate is the best for 5.98 + 2.03?', options: ['8', '7', '9', '10'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 15, level: 'easy', q: '3.9 + 4.1 is about 8.', answer: 0 }
    ] },
  { id: 'F3', lesson: 6, boss: true, concept: 'Is it enough? When an estimate is not enough',
    explain: 'An estimate can be too close to decide. Taha has 54.20 LE and his brother 45.75 LE: 54 + 46 = 100, but the exact total is 99.95 LE, which is less than 100 LE, so it is not enough for the box of apples. The shadoof: 94.635 liters rounds to 95, and 95 × 4 = 380 liters in about 4 minutes.',
    variants: [
      { type: 'mc', style: 'story', mode: 'boss', level: 'hard', q: 'Taha has 54.20 LE and his brother has 45.75 LE. A box of apples costs 100 LE. Rounding gives 54 + 46 = 100. Can we be sure they have enough?', options: ['No. The exact total is 99.95 LE, which is less than 100 LE', 'Yes. The estimate is 100', 'Yes. 54.20 is more than 54', 'No. 54 + 46 = 99'], answer: 0 },
      { type: 'num', mode: 'boss', level: 'hard', q: 'Taha has 54.20 LE and his brother has 45.75 LE. How much do they have together?', answer: '99.95', calc: '54.20+45.75', unit: 'LE' },
      { type: 'num', mode: 'boss', level: 'hard', q: 'A farmer can lift 94.635 liters of water a minute with his shadoof. Round 94.635 to the nearest whole number and estimate how many liters he can lift in 4 minutes.', answer: '380', calc: '95*4', unit: 'liters' },
      { type: 'num', mode: 'boss', level: 'hard', q: 'What is the exact sum 4.981 + 5.019?', answer: '10', calc: '4.981+5.019' }
    ] },

  /* ---------- Lesson 7 · Modeling Decimal Addition (pages 22-28) ---------- */
  { id: 'G1', lesson: 7, concept: 'Rounding a long distance',
    explain: 'The Nile trip from the sea to Khartoum is 2,406.69 km. To the nearest thousand it is 2,000; to the nearest hundred 2,400; to the nearest one 2,407; and to the nearest tenth 2,406.7. Each time look at the digit just to the right of the place you round to.',
    variants: [
      { type: 'num', mode: 'normal', level: 'medium', q: 'Round 2,406.69 kilometers to the nearest thousand.', answer: '2000', round: ['2406.69', -3], unit: 'km' },
      { type: 'num', mode: 'normal', level: 'medium', q: 'Round 2,406.69 kilometers to the nearest hundred.', answer: '2400', round: ['2406.69', -2], unit: 'km' },
      { type: 'num', mode: 'normal', level: 'medium', q: 'Round 2,406.69 kilometers to the nearest one.', answer: '2407', round: ['2406.69', 0], unit: 'km' },
      { type: 'num', mode: 'normal', level: 'medium', q: 'Round 2,406.69 kilometers to the nearest tenth.', answer: '2406.7', round: ['2406.69', 1], unit: 'km' },
      { type: 'tf', mode: 'timed', seconds: 15, level: 'medium', q: '2,406.69 rounds to 2,400 when rounded to the nearest hundred.', answer: 0 }
    ] },
  { id: 'G2', lesson: 7, concept: 'Modeling an addition',
    explain: 'In a model of 0.13 + 0.23 the yellow cells show the first decimal and the green cells show the second: 1 column and 3 squares plus 2 columns and 3 squares make 3 columns and 6 squares, which is 0.36. In the place value chart: 1 + 2 tenths = 3 tenths and 3 + 3 hundredths = 6 hundredths.',
    variants: [
      { type: 'num', mode: 'normal', level: 'easy', q: '0.13 + 0.23 = ?', answer: '0.36', calc: '0.13+0.23' },
      { type: 'mc', fig: 'gridModel', pic: { a: 0.13, b: 0.23, mode: 'add' }, mode: 'normal', level: 'medium', q: 'The yellow cells show one decimal and the green cells show another. Which addition does the model show?', options: ['0.13 + 0.23', '0.31 + 0.32', '1.3 + 2.3', '0.13 + 0.032'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which is a good estimate for 0.13 + 0.23 (rounding to the nearest tenth)?', options: ['0.3', '3', '0.03', '0.6'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 15, level: 'easy', q: '0.13 + 0.23 = 0.46', answer: 1 }
    ] },
  { id: 'G3', lesson: 7, concept: 'Adding with regrouping: 10 hundredths make 1 tenth',
    explain: 'When there are 10 or more hundredths, regroup 10 hundredths as 1 tenth; when there are 10 or more tenths, regroup 10 tenths as 1 whole. 0.05 + 0.05 = 0.10 = 0.1; 0.97 + 0.42 = 1.39; 0.45 + 0.84 = 1.29 (12 tenths = 1 whole and 2 tenths); 0.92 + 0.89 = 1.81.',
    variants: [
      { type: 'num', mode: 'normal', level: 'easy', q: '0.05 + 0.05 = ?', answer: '0.1', calc: '0.05+0.05' },
      { type: 'num', mode: 'normal', level: 'medium', q: '0.97 + 0.42 = ?', answer: '1.39', calc: '0.97+0.42' },
      { type: 'num', fig: 'gridModel', pic: { a: 0.45, b: 0.84, mode: 'add' }, mode: 'normal', level: 'hard', q: 'The model shows 0.45 + 0.84. What is the sum?', answer: '1.29', calc: '0.45+0.84' },
      { type: 'fill', mode: 'timed', seconds: 12, level: 'easy', q: '10 hundredths = 1 ___.', options: ['tenth', 'whole', 'thousandth'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'hard', q: 'In 0.45 + 0.84 there are 4 + 8 = 12 tenths. How do we regroup 12 tenths?', options: ['1 whole and 2 tenths', '12 wholes', '2 wholes and 1 tenth', '1 whole and 12 tenths'], answer: 0 }
    ] },
  { id: 'G4', lesson: 7, boss: true, concept: 'Adding long decimals: the Nile journey',
    explain: 'To add decimals, line up the decimal points so tenths are added to tenths and ones to ones. From Khartoum to Juba is 1,941.2 km and from Juba to Jinja 687.9 km: 1,941.2 + 687.9 = 2,629.1 km. An estimate to the nearest hundred, 1,900 + 700 = 2,600, shows the answer is reasonable.',
    variants: [
      { type: 'num', mode: 'boss', level: 'hard', q: 'You travel 1,941.2 km from Khartoum to Juba, and then 687.9 km from Juba to Jinja. How long is your journey from Khartoum to Jinja?', answer: '2629.1', calc: '1941.2+687.9', unit: 'km' },
      { type: 'num', mode: 'boss', level: 'hard', q: 'Estimate 1,941.2 + 687.9 by rounding each number to the nearest hundred.', answer: '2600', calc: '1900+700' },
      { type: 'mc', mode: 'boss', level: 'hard', q: 'Why do we line up the decimal points when we add 1,941.2 + 687.9?', options: ['So tenths are added to tenths and ones to ones', 'So the answer has fewer digits', 'So the biggest number is on top', 'It does not matter'], answer: 0 }
    ] },

  /* ---------- Lesson 8 · Modeling Decimals Subtraction (pages 29-33) ---------- */
  { id: 'H1', lesson: 8, concept: 'Line up the decimal points',
    explain: 'Wafaa wrote 113.39 + 38.1 = 117.20: she lined up the right-hand digits and added 3.81 instead of 38.10. The decimal points must be lined up, and 38.1 can be written 38.10. The correct sum is 113.39 + 38.10 = 151.49 kg.',
    variants: [
      { type: 'num', mode: 'normal', level: 'medium', q: 'A Nile perch weighs 113.39 kilograms and a vundu catfish weighs 38.1 kilograms. What is their total mass?', answer: '151.49', calc: '113.39+38.1', unit: 'kg' },
      { type: 'mc', style: 'story', mode: 'normal', level: 'medium', q: 'Wafaa added 113.39 + 38.1 and got 117.20. What mistake did she make?', options: ['She did not line up the decimal points (she added 3.81)', 'She forgot to write the decimal point', 'She subtracted instead of adding', 'Nothing, 117.20 is right'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 12, level: 'easy', q: 'To add decimals, the decimal points must be lined up.', answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: '38.1 can be written as 38.10 because a zero at the ___ of a decimal does not change its value.', options: ['end', 'start', 'middle'], answer: 0 }
    ] },
  { id: 'H2', lesson: 8, concept: 'Minuend, subtrahend and difference in a model',
    explain: 'In a subtraction model, the shaded cells show the minuend and the x’s show the subtrahend, the number that is subtracted. The shaded cells without x’s show the difference. For 0.62 − 0.27, 62 hundredths are shaded and 27 are crossed, leaving 35 hundredths = 0.35.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'In 0.62 − 0.27 = 0.35, which number is the subtrahend?', options: ['0.27', '0.62', '0.35', '0.89'], answer: 0 },
      { type: 'term', mode: 'normal', level: 'easy', q: 'The number we subtract from.', answer: 'Minuend' },
      { type: 'num', fig: 'gridModel', pic: { a: 0.62, b: 0.27, mode: 'sub' }, mode: 'normal', level: 'medium', q: 'The green cells show the minuend and the crosses show the subtrahend. What is the difference?', answer: '0.35', calc: '0.62-0.27' },
      { type: 'mc', fig: 'gridModel', pic: { a: 0.62, b: 0.27, mode: 'sub' }, mode: 'normal', level: 'medium', q: 'Which subtraction does the model show?', options: ['0.62 − 0.27', '0.27 − 0.62', '0.62 + 0.27', '0.35 − 0.27'], answer: 0 }
    ] },
  { id: 'H3', lesson: 8, concept: 'Subtracting with a model',
    explain: 'To subtract with a model, shade the minuend, cross out the subtrahend and count what is left. 0.1 − 0.09 = 0.01 (10 hundredths take away 9 hundredths), 0.39 − 0.13 = 0.26, 1.23 − 1.02 = 0.21 and 4.14 − 3.09 = 1.05.',
    variants: [
      { type: 'num', mode: 'normal', level: 'easy', q: '0.39 − 0.13 = ?', answer: '0.26', calc: '0.39-0.13' },
      { type: 'num', mode: 'normal', level: 'medium', q: '1.23 − 1.02 = ?', answer: '0.21', calc: '1.23-1.02' },
      { type: 'num', mode: 'normal', level: 'hard', q: '4.14 − 3.09 = ?', answer: '1.05', calc: '4.14-3.09' },
      { type: 'num', mode: 'timed', seconds: 20, level: 'medium', q: '0.1 − 0.09 = ?', answer: '0.01', calc: '0.1-0.09' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'A grid has 1 tenth shaded (10 squares) and 9 of them are crossed out. What is 0.1 − 0.09?', options: ['0.01', '0.1', '0.09', '0.19'], answer: 0 }
    ] },
  { id: 'H4', lesson: 8, boss: true, concept: 'Zeros and subtraction: 0.2 − 0.05',
    explain: 'To subtract 0.05 from 0.2, write 0.2 as 0.20 so both numbers have hundredths: 20 hundredths − 5 hundredths = 15 hundredths = 0.15. Adding zeros to the right of the last non-zero digit does not change the value, because 2 tenths and 20 hundredths cover the same part of a whole.',
    variants: [
      { type: 'num', mode: 'boss', level: 'hard', q: '0.2 − 0.05 = ?', answer: '0.15', calc: '0.2-0.05' },
      { type: 'mc', mode: 'boss', level: 'hard', q: 'To subtract 0.2 − 0.05 in a place value chart, we first write 0.2 as…', options: ['0.20', '0.02', '0.002', '2.0'], answer: 0 },
      { type: 'num', mode: 'boss', level: 'hard', q: '20 hundredths − 5 hundredths = ? hundredths', answer: '15', calc: '20-5' },
      { type: 'build', style: 'why', mode: 'boss', level: 'hard', q: 'Adding zeros to the right of the last non-zero digit of a decimal does not change its value.', parts: ['Because 2 tenths cover', 'the same part of the whole as 20 hundredths'], extra: ['Because zeros have no place', 'Because 20 is greater than 2'] }
    ] },

  /* ---------- Lesson 9 · Estimating Decimal Differences (pages 34-36) ---------- */
  { id: 'I1', lesson: 9, concept: 'Estimating a difference',
    explain: 'To estimate a difference, round both decimals and subtract the easy numbers. 2.419 − 1.240 ≈ 2 − 1 = 1; 35.9 − 10.8 ≈ 36 − 11 = 25; 29.98 − 11.99 ≈ 30 − 12 = 18; 0.97 − 0.82 ≈ 1.0 − 0.8 = 0.2. People in the Nile Delta but not in Al Sharqia: about 45 − 8 = 37 million.',
    variants: [
      { type: 'num', mode: 'normal', level: 'easy', q: 'Estimate 2.419 − 1.240 by rounding each number to the nearest whole number.', answer: '1', calc: '2-1' },
      { type: 'num', mode: 'normal', level: 'medium', q: 'Estimate 35.9 − 10.8 by rounding each number to the nearest whole number.', answer: '25', calc: '36-11' },
      { type: 'num', mode: 'normal', level: 'medium', q: 'About 45 million people live in the Nile Delta region and about 7.78 million in Al Sharqia. Round 7.78 to the nearest whole number and estimate how many million people live in the delta but not in Al Sharqia.', answer: '37', calc: '45-8', unit: 'million' },
      { type: 'num', mode: 'normal', level: 'medium', q: 'Estimate 0.97 − 0.82 by rounding each number to the nearest tenth.', answer: '0.2', calc: '1.0-0.8' }
    ] },
  { id: 'I2', lesson: 9, concept: 'Finding the actual difference',
    explain: 'After estimating, find the actual difference by lining up the decimal points. 5.05 − 4.15 = 0.9, 4.45 − 4.32 = 0.13, 29.98 − 11.99 = 17.99 (close to the estimate 18), 0.97 − 0.82 = 0.15 and 45.30 − 30.20 = 15.1.',
    variants: [
      { type: 'num', mode: 'normal', level: 'medium', q: 'Study Plot D has papyrus 5.05 m tall and Study Plot B has 4.15 m. What is the difference in height?', answer: '0.9', calc: '5.05-4.15', unit: 'm' },
      { type: 'num', mode: 'normal', level: 'medium', q: '29.98 − 11.99 = ?', answer: '17.99', calc: '29.98-11.99' },
      { type: 'num', mode: 'normal', level: 'medium', q: '45.30 − 30.20 = ?', answer: '15.1', calc: '45.30-30.20' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Papyrus heights: Plot A 4.45 m, Plot B 4.15 m, Plot C 4.32 m, Plot D 5.05 m. Which two plots differ the least in height?', options: ['A and C', 'A and B', 'B and C', 'D and A'], answer: 0 },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'Papyrus heights: Plot A 4.45 m, Plot B 4.15 m, Plot C 4.32 m, Plot D 5.05 m. Which plot is the tallest?', options: ['Plot D', 'Plot A', 'Plot C', 'Plot B'], answer: 0 }
    ] },
  { id: 'I3', lesson: 9, boss: true, concept: 'Why estimate? Words that show an estimate',
    explain: 'An estimate checks whether an exact answer is reasonable, and words like “about” show that a number is estimated. Each Great Temple statue at Abu Simbel is about 21 m tall and each Small Temple statue about 12 m, so the Great Temple statues are about 21 − 12 = 9 m taller.',
    variants: [
      { type: 'mc', mode: 'boss', level: 'hard', q: 'Each statue at the Great Temple of Abu Simbel is about 21 meters tall. Which word tells us the number is an estimate?', options: ['about', 'tall', 'each', 'statue'], answer: 0 },
      { type: 'num', mode: 'boss', level: 'hard', q: 'The statues at the Great Temple are about 21 m tall and the statues at the Small Temple about 12 m. How much taller are the Great Temple statues?', answer: '9', calc: '21-12', unit: 'm' },
      { type: 'mc', mode: 'boss', level: 'hard', q: 'What is the best reason to estimate a difference before finding the exact answer?', options: ['To check that the exact answer is reasonable', 'To make the answer exactly right', 'To avoid lining up decimals', 'To get a bigger answer'], answer: 0 },
      { type: 'num', mode: 'boss', level: 'hard', q: 'Estimate 45.30 − 30.20 by rounding each number to the nearest whole number.', answer: '15', calc: '45-30' }
    ] },

  /* ---------- Lesson 10 · Subtracting to the Thousandths Place (pages 37-39) ---------- */
  { id: 'J1', lesson: 10, concept: 'Subtracting thousandths',
    explain: 'We can subtract thousandths the way we subtract whole numbers: 8 thousandths − 5 thousandths = 3 thousandths; 57 − 12 = 45 thousandths = 0.045 (4 hundredths and 5 thousandths); 32 − 15 = 17 thousandths (1 hundredth and 7 thousandths); 5 hundredths − 24 thousandths = 50 − 24 = 26 thousandths = 0.026.',
    variants: [
      { type: 'num', mode: 'timed', seconds: 15, level: 'easy', q: '8 thousandths − 5 thousandths = ? thousandths', answer: '3', calc: '8-5' },
      { type: 'num', mode: 'normal', level: 'medium', q: '57 thousandths − 12 thousandths = ? thousandths', answer: '45', calc: '57-12' },
      { type: 'num', mode: 'normal', level: 'medium', q: 'Write 45 thousandths as a decimal.', answer: '0.045', calc: '45/1000' },
      { type: 'mc', mode: 'normal', level: 'medium', q: '32 thousandths − 15 thousandths = 17 thousandths. How many hundredths and thousandths is that?', options: ['1 hundredth and 7 thousandths', '17 hundredths', '7 hundredths and 1 thousandth', '1 tenth and 7 thousandths'], answer: 0 },
      { type: 'num', mode: 'normal', level: 'hard', q: '5 hundredths − 24 thousandths = ? thousandths', answer: '26', calc: '50-24' },
      { type: 'fill', mode: 'timed', seconds: 12, level: 'easy', q: '1 hundredth = ___ thousandths.', options: ['10', '100', '1'], answer: 0 }
    ] },
  { id: 'J2', lesson: 10, concept: 'Is my answer reasonable?',
    explain: 'An estimate checks an exact answer. Diaa found 22.9 − 15.24 = 7.66 and Ezz estimated 23 − 15 = 8: they are close, so Ezz’s estimate is reasonable and shows 7.66 makes sense. An answer such as 76.6 would be far from the estimate 8, so it must be wrong.',
    variants: [
      { type: 'mc', style: 'story', mode: 'normal', level: 'medium', q: 'The Nile Delta is between 15.24 m and 22.9 m thick. Diaa found the exact difference 22.9 − 15.24 = 7.66. Ezz estimated 8 by rounding. Is Ezz’s estimate reasonable?', options: ['Yes. 23 − 15 = 8 is close to 7.66', 'No. An estimate must be exactly the same', 'No. 8 is too far from 7.66', 'Yes. Because 8 is greater than 7.66'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'The exact answer to a subtraction is 7.66. Which estimate shows that the answer is reasonable?', options: ['8', '80', '0.8', '800'], answer: 0 },
      { type: 'mc', style: 'story', mode: 'normal', level: 'hard', q: 'Hana says 22.9 − 15.24 = 76.6. How can an estimate show that she made a mistake?', options: ['23 − 15 = 8, but 76.6 is much greater than 8', '23 − 15 = 38, so 76.6 is half of it', '23 − 15 = 76, so she is right', 'Estimates cannot check answers'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 12, level: 'easy', q: 'An estimate can help check whether an exact answer is reasonable.', answer: 0 }
    ] },
  { id: 'J3', lesson: 10, boss: true, concept: 'Subtracting with a placeholder zero',
    explain: 'To subtract 15.24 from 22.9, line up the decimal points and write 22.9 as 22.90 so both numbers have hundredths: 22.90 − 15.24 = 7.66. The delta plain’s east–west width of 249.448 km is 249.448 − 160.934 = 88.514 km more than its north–south length.',
    variants: [
      { type: 'num', mode: 'boss', level: 'hard', q: '22.9 − 15.24 = ?', answer: '7.66', calc: '22.9-15.24' },
      { type: 'mc', mode: 'boss', level: 'hard', q: 'To subtract 22.9 − 15.24 in columns, what do we write for 22.9?', options: ['22.90', '22.09', '22.009', '229.0'], answer: 0 },
      { type: 'num', mode: 'boss', level: 'hard', q: 'The Nile Delta plain extends 160.934 km from north to south, and its widest east–west point is 249.448 km. How much longer is the widest east–west point?', answer: '88.514', calc: '249.448-160.934', unit: 'km' },
      { type: 'num', mode: 'boss', level: 'hard', q: '5.342 − 2.118 = ?', answer: '3.224', calc: '5.342-2.118' }
    ] },

  /* ---------- Lesson 11 · Decimal Story Problems (pages 40-42) ---------- */
  { id: 'K1', lesson: 11, concept: 'One-step decimal story problems',
    explain: 'To solve a story problem, decide what the question asks and which operation to use. The Jiaxing-Shaoxing Sea Bridge is 11.7 m thinner than the Tahya Misr Bridge (67.3 m): 67.3 − 11.7 = 55.6 m. Going the length of a 16.7 km bridge and back is 16.7 + 16.7 = 33.4 km, and after 3.25 km there are 16.7 − 3.25 = 13.45 km left.',
    variants: [
      { type: 'num', mode: 'normal', level: 'medium', q: 'The Tahya Misr Bridge is 67.3 meters wide. The Jiaxing-Shaoxing Sea Bridge is 11.7 meters thinner. How wide is it?', answer: '55.6', calc: '67.3-11.7', unit: 'm' },
      { type: 'num', mode: 'normal', level: 'medium', q: 'The Tahya Misr Bridge is 16.7 kilometers long. Rami travels its length and then returns. How many kilometers does he travel in total?', answer: '33.4', calc: '16.7+16.7', unit: 'km' },
      { type: 'num', mode: 'normal', level: 'medium', q: 'The bridge is 16.7 kilometers long. Salem rode 3.25 kilometers before he had a flat tire. How many more kilometers does he need to ride?', answer: '13.45', calc: '16.7-3.25', unit: 'km' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'The bridge is 16.7 km long. Rami goes along it and back. Which equation fits?', options: ['16.7 + 16.7 = 33.4', '16.7 − 16.7 = 0', '16.7 − 3.25 = 13.45', '16.7 + 3.25 = 19.95'], answer: 0 },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'In a story problem, “the difference” tells us…', options: ['how much more or less one amount is than the other', 'the total of both amounts', 'half of one amount', 'the greater amount'], answer: 0 }
    ] },
  { id: 'K2', lesson: 11, concept: 'Two-step decimal story problems',
    explain: 'Some problems need two steps. 2 tigerfish and 1 marbled lungfish: 104.902 × 2 + 201.168 = 209.804 + 201.168 = 410.972 cm. Rashad’s fish: 53.25 + 46.8 = 100.05 kg. The heaviest crane minus the lightest: 544.3 − 6.44 = 537.86 tons.',
    variants: [
      { type: 'num', mode: 'normal', level: 'hard', q: 'An African tigerfish is 104.902 cm long and a marbled lungfish is 201.168 cm long. What is the total length of 2 tigerfish and 1 marbled lungfish?', answer: '410.972', calc: '104.902*2+201.168', unit: 'cm' },
      { type: 'num', mode: 'normal', level: 'medium', q: 'Rashad and his father each caught a vundu catfish. One weighed 53.25 kilograms and the smaller one 46.8 kilograms. How much did the fish weigh in all?', answer: '100.05', calc: '53.25+46.8', unit: 'kg' },
      { type: 'num', mode: 'normal', level: 'medium', q: 'The cranes that built the Tahya Misr Bridge weighed between 6.44 and 544.3 tons. What is the difference between the heaviest and the lightest crane?', answer: '537.86', calc: '544.3-6.44', unit: 'tons' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What should you do first when you read a decimal story problem?', options: ['Decide what the question asks and which operation to use', 'Add all the numbers', 'Round all the numbers', 'Subtract the first number from the last'], answer: 0 }
    ] },
  { id: 'K3', lesson: 11, boss: true, concept: 'Data and decimal stories',
    explain: 'Use the data in a chart to write and solve stories. Knifefish of 29.28, 29.255 and 35.17 cm: 35.17 − 29.255 = 5.915 cm. The longest fish in the Nile fish chart (201.168 cm) minus the shortest (30.2 cm) is 170.968 cm. Bridge widths from narrowest to widest: 23.6, 30.6, 32.918, 67.3 m. The Ganges Delta (350 km) is 100.552 km wider than the Nile Delta (249.448 km).',
    variants: [
      { type: 'num', mode: 'boss', level: 'hard', q: 'Basem collected three African knifefish: 29.28 cm, 29.255 cm and 35.17 cm. What is the difference between the longest and the shortest fish?', answer: '5.915', calc: '35.17-29.255', unit: 'cm' },
      { type: 'num', mode: 'boss', level: 'hard', q: 'In a chart of Nile fish the longest is the marbled lungfish (201.168 cm) and the shortest is the African knifefish (30.2 cm). What is the difference in length?', answer: '170.968', calc: '201.168-30.2', unit: 'cm' },
      { type: 'order', mode: 'boss', level: 'hard', q: 'Order the bridge widths from the narrowest to the widest.', items: ['Tahya Misr (67.3 m)', 'Pont de Normandie (23.6 m)', 'Tatara (30.6 m)', 'Queensferry (32.918 m)'], answer: [1, 2, 3, 0] },
      { type: 'num', mode: 'boss', level: 'hard', q: 'The Ganges Delta is about 350 kilometers wide and the Nile Delta is 249.448 kilometers wide. How much wider is the Ganges Delta?', answer: '100.552', calc: '350-249.448', unit: 'km' }
    ] }
];
})();
