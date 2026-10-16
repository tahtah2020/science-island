/* Math · Grade 4 · Unit 1 "Place Value" · Languages track (English), first term 2026/2027
   Source: the English school book, Unit 1 (pages 3-22): Concept 1 "Reinforcing Place Value" (lessons 1-4), Concept 2 "Using Place Value" (lessons 5-8).
   The book is a student activity book with no printed answers, so the numbers and situations are the book's own (anthills, ant colonies, Omar and Mariam) and EVERY number answer
   is computed: each `num` question carries `calc` (or `round`), and tools/check_questions.js recomputes it, so a wrong answer cannot be published.
   Lessons: 1 Big Numbers (p3-4) · 2 Changing Place Values (p5-6) · 3 Many Forms to Write Numbers (p7-8) · 4 Composing and Decomposing (p9-11) ·
            5 Comparing Big Numbers (p12-13) · 6 Comparing Numbers in Multiple Forms (p14-16) · 7 Descending and Ascending Numbers (p17-19) · 8 Rounding Rules (p20-22).
   Idea letters (one per lesson): A L1 · B L2 · C L3 · D L4 · E L5 · F L6 · G L7 · H L8.   Boss ideas: A3, B3, C3, D3, E3, F3, G3, H3.
   The English book calls the billions place "Milliards" and writes number words with "milliard" (nine milliard, ...); the questions follow the book.
   Pictures (math/g4_art.js): placeTable, the place value chart up to the milliards (tap: q.diagram, picture above a question: q.fig).
   Review notes: the book prints no answers and no result for the card games (Creating Big Numbers, Creating the Greatest, Number Battle), so no question asks about them.
   Same ids, phrasings and answers as questions_mg4u1_ar.js. */
(function () {
const n = s => s;
window.CHAPTER = { id: 'mg4u1', title: 'Place Value', grade: 'Grade 4', track: 'Languages' };

window.IDEAS = [
  /* ---------- Lesson 1 · Big Numbers (pages 3-4) ---------- */
  { id: 'A1', lesson: 1, concept: 'The periods of the place value chart',
    explain: 'The place value chart is made of periods: Ones, then Thousands, then Millions, then Milliards. Each of the Ones, Thousands and Millions periods has three places: hundreds, tens and ones. We start from the right with the Ones period.',
    variants: [
      { type: 'fill', mode: 'timed', seconds: 12, level: 'easy', q: 'Each of the Ones, Thousands and Millions periods has ___ places.', options: ['3', '2', '4'], answer: 0 },
      { type: 'order', mode: 'normal', level: 'easy', q: 'Put the periods in order from the smallest value to the greatest.', items: ['Millions', 'Ones', 'Milliards', 'Thousands'], answer: [1, 3, 0, 2] },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Which period comes right after the Thousands?', options: ['Millions', 'Ones', 'Milliards', 'Hundreds'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 12, level: 'easy', q: 'On the place value chart, the Milliards are to the right of the Thousands.', answer: 1 },
      { type: 'tap', diagram: 'placeTable', pic: { num: '35891455' }, mode: 'normal', level: 'medium', q: 'Tap the ones place of the Millions in ' + n('35,891,455') + '.', answer: 'm1' }
    ] },
  { id: 'A2', lesson: 1, concept: 'Reading a number from the place value chart',
    explain: 'We read a number from left to right, period by period. ' + n('35,891,455') + ' has 8 digits: 3 in the ten millions place and 5 in the millions place, then 891 thousand, then 455 ones. Each digit has a value that depends on its place.',
    variants: [
      { type: 'mc', fig: 'placeTable', pic: { num: '35891455' }, mode: 'normal', level: 'easy', q: 'What is the value of the digit 9 in this number?', options: [n('90,000'), n('9,000'), n('900,000'), '9'], answer: 0 },
      { type: 'tap', diagram: 'placeTable', pic: { num: '35891455' }, mode: 'normal', level: 'easy', q: 'Tap the place that holds the digit 3.', answer: 'm10' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'How many digits are in ' + n('35,891,455') + '?', options: ['8', '7', '9', '6'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'medium', q: 'In ' + n('35,891,455') + ', the digit 8 is in the ___ thousands place.', options: ['hundred', 'ten', 'one'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 12, level: 'medium', q: 'In ' + n('35,891,455') + ' there is a digit in the milliards place.', answer: 1 },
      { type: 'num', mode: 'normal', level: 'medium', q: 'Write the number in the chart: 35 million, 891 thousand, 455.', answer: '35891455', calc: '35000000+891000+455' }
    ] },
  { id: 'A3', lesson: 1, boss: true, concept: 'A digit’s value depends on its place',
    explain: 'The same digit has a different value in a different place. In 222 the first 2 is worth 200, the middle 2 is worth 20 and the last 2 is worth 2. In ' + n('2,020,202') + ' the 2 in the millions place is worth ' + n('2,000,000') + '.',
    variants: [
      { type: 'mc', mode: 'boss', level: 'hard', q: 'Amir says that in the number 222 all of the digits have the same value. Do you agree?', options: ['No, a digit’s value depends on its place: 200, 20 and 2', 'Yes, because every digit is a 2', 'Yes, because the number is made of one repeated digit', 'No, because 222 is a small number'], answer: 0 },
      { type: 'num', mode: 'boss', level: 'hard', q: 'What is the value of the middle 2 in 222?', answer: '20', calc: '2*10' },
      { type: 'build', style: 'why', mode: 'boss', level: 'hard', q: 'The digits in 222 do not all have the same value.', parts: ['Because the value of a digit', 'changes with its place in the number'], extra: ['Because the same digit changes', 'Because the number is small'] },
      { type: 'mc', mode: 'boss', level: 'hard', q: 'In ' + n('2,020,202') + ', what is the value of the 2 in the millions place?', options: [n('2,000,000'), n('200,000'), n('20,000'), n('2,000')], answer: 0 }
    ] },

  /* ---------- Lesson 2 · Changing Place Values (pages 5-6) ---------- */
  { id: 'B1', lesson: 2, concept: 'Moving left multiplies the value by 10',
    explain: 'When a digit moves one place to the left on the place value chart, its value becomes 10 times greater. A 6 in the ones place is worth 6; if it moves to the tens place it is worth 60.',
    variants: [
      { type: 'fill', mode: 'timed', seconds: 12, level: 'easy', q: 'When a number is multiplied by 10, each digit moves one place to the ___.', options: ['left', 'right'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'When a digit moves one place to the left, its value becomes ___.', options: ['10 times greater', 'one tenth of what it was', 'twice as great', 'the same'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'When a digit moves to the left, its value gets greater.', answer: 0 },
      { type: 'num', mode: 'normal', level: 'medium', q: 'A 6 in the ones place is worth 6. If it moves to the tens place, its value becomes ___.', answer: '60', calc: '6*10' },
      { type: 'order', mode: 'normal', level: 'medium', q: 'Put the places in order from the smallest value to the greatest.', items: ['Hundreds', 'Ones', 'Thousands', 'Tens'], answer: [1, 3, 0, 2] }
    ] },
  { id: 'B2', lesson: 2, concept: 'Multiplying by 10 with anthills',
    explain: 'Every anthill has the same number of ants. To find the ants in 10 anthills, multiply by 10: each digit moves one place to the left and a zero goes in the ones place. 12 × 10 = 120.',
    variants: [
      { type: 'num', mode: 'timed', seconds: 15, level: 'easy', q: 'There are 7 ants in 1 anthill. How many ants are in 10 anthills?', answer: '70', calc: '7*10' },
      { type: 'num', mode: 'normal', level: 'easy', q: 'There are 12 ants in 1 anthill. How many ants are in 10 anthills?', answer: '120', calc: '12*10' },
      { type: 'num', mode: 'normal', level: 'medium', q: 'There are 28 ants in 1 anthill. How many ants are in 10 anthills?', answer: '280', calc: '28*10' },
      { type: 'num', mode: 'normal', level: 'medium', q: 'There are 92 ants in 1 anthill. How many ants are in 10 anthills?', answer: '920', calc: '92*10' },
      { type: 'num', mode: 'normal', level: 'hard', q: 'There are 156 ants in 1 anthill. How many ants are in 10 anthills?', answer: '1560', calc: '156*10' },
      { type: 'num', mode: 'normal', level: 'hard', q: 'There are 1,786 ants in 1 anthill. How many ants are in 10 anthills?', answer: '17860', calc: '1786*10' }
    ] },
  { id: 'B3', lesson: 2, boss: true, concept: 'What happens to digits when we multiply by 10',
    explain: 'When we multiply by 10, every digit moves one place to the left and becomes worth 10 times as much. When we multiply by 10 twice, a digit moves two places and becomes worth 100 times as much.',
    variants: [
      { type: 'fill', mode: 'boss', level: 'hard', q: 'As a digit moves one space to the left on the place value chart, its value = ___ times.', options: ['10', '1', '100', '1,000'], answer: 0 },
      { type: 'mc', mode: 'boss', level: 'hard', q: 'In ' + n('1,786') + ', what happens to the digit 1 when we multiply the number by 10?', options: ['It moves from the thousands to the ten thousands and is worth ' + n('10,000'), 'It stays in the thousands', 'It moves to the right', 'Its value becomes 100'], answer: 0 },
      { type: 'mc', mode: 'boss', level: 'hard', q: 'When a digit moves two places to the left, its value becomes ___ times as great.', options: ['100', '20', '10', '1,000'], answer: 0 },
      { type: 'num', mode: 'boss', level: 'hard', q: 'What is ' + n('4 × 10 × 10') + '?', answer: '400', calc: '4*10*10' }
    ] },

  /* ---------- Lesson 3 · Many Forms to Write Numbers (pages 7-8) ---------- */
  { id: 'C1', lesson: 3, concept: 'Standard, expanded and word form',
    explain: 'A number can be written in three forms. Standard form uses digits: ' + n('9,231,043,204') + '. Expanded form is the sum of the values of its digits. Word form uses words: nine milliard, two hundred thirty-one million, forty-three thousand, two hundred four.',
    variants: [
      { type: 'match', mode: 'normal', level: 'medium', q: 'Match each form to the numeral written in it.', left: ['Standard form', 'Expanded form', 'Word form'],
        right: [n('9,000,000,000 + 200,000,000 + 30,000,000 + 1,000,000 + 40,000 + 3,000 + 200 + 4'), 'nine milliard, two hundred thirty-one million, forty-three thousand, two hundred four', n('9,231,043,204')], answer: [2, 0, 1] },
      { type: 'term', mode: 'normal', level: 'easy', q: 'Writing a number with digits only.', answer: 'Standard form' },
      { type: 'term', mode: 'normal', level: 'easy', q: 'Writing a number as the sum of the values of its digits.', answer: 'Expanded form' },
      { type: 'term', mode: 'normal', level: 'easy', q: 'Writing a number with words.', answer: 'Word form' },
      { type: 'tf', mode: 'timed', seconds: 12, level: 'easy', q: 'Word form means writing a number with words.', answer: 0 },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'In which form is ' + n('1,467,303,221') + ' written?', options: ['Standard form', 'Expanded form', 'Word form'], answer: 0 }
    ] },
  { id: 'C2', lesson: 3, concept: 'Moving between forms',
    explain: 'The same number can be written in different forms. ' + n('1,467,303,221') + ' in expanded form is ' + n('1,000,000,000 + 400,000,000 + 60,000,000 + 7,000,000 + 300,000 + 3,000 + 200 + 20 + 1') + '. From word form, write each period and put commas between the periods.',
    variants: [
      { type: 'num', mode: 'normal', level: 'medium', q: 'Write in standard form: ' + n('1,000,000,000 + 400,000,000 + 60,000,000 + 7,000,000 + 300,000 + 3,000 + 200 + 20 + 1'), answer: '1467303221', calc: '1000000000+400000000+60000000+7000000+300000+3000+200+20+1' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What is the standard form of nine milliard, two hundred thirty-one million, forty-three thousand, two hundred four?', options: [n('9,231,043,204'), n('9,231,430,204'), n('9,213,043,204'), n('9,231,043,240')], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What is the expanded form of ' + n('9,231,043,204') + '?',
        options: [n('9,000,000,000 + 200,000,000 + 30,000,000 + 1,000,000 + 40,000 + 3,000 + 200 + 4'), n('9,000,000,000 + 200,000,000 + 3,000,000 + 1,000,000 + 40,000 + 3,000 + 200 + 4'), n('9,000,000,000 + 20,000,000 + 30,000,000 + 1,000,000 + 4,000 + 300 + 20 + 4'), n('9,000,000,000 + 200,000,000 + 30,000,000 + 1,000,000 + 4,000 + 300 + 200 + 4')], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'In ' + n('1,467,303,221') + ', what is the value of the digit 6?', options: [n('60,000,000'), n('6,000,000'), n('600,000,000'), n('60,000')], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'medium', q: 'In ' + n('1,467,303,221') + ', the first digit 1 stands for ___.', options: ['one milliard', 'one million', 'one thousand'], answer: 0 }
    ] },
  { id: 'C3', lesson: 3, boss: true, concept: 'Checking equivalent forms',
    explain: 'The standard, expanded and word forms of one number all show the same value. If a digit or its place changes, the number changes, so we check the value of each digit.',
    variants: [
      { type: 'multi', mode: 'boss', level: 'hard', q: 'Which of these show ' + n('1,467,303,221') + '? Choose all that are correct.',
        options: [n('1,000,000,000 + 400,000,000 + 60,000,000 + 7,000,000 + 300,000 + 3,000 + 200 + 20 + 1'), 'one milliard, four hundred sixty-seven million, three hundred three thousand, two hundred twenty-one', n('1,467,303,221'), n('1,467,330,221')], answer: [0, 1, 2] },
      { type: 'tf', mode: 'boss', level: 'hard', q: n('5,000 + 20 + 3 = 5,230'), answer: 1 },
      { type: 'mc', mode: 'boss', level: 'hard', q: 'What is the standard form of three milliard, five thousand?', options: [n('3,000,005,000'), n('3,005,000'), n('3,500,000,000'), n('3,000,050,000')], answer: 0 },
      { type: 'fix', mode: 'boss', level: 'hard', q: 'The standard form of 4,005 is four thousand, five.', wrong: 'standard', answer: 'word' },
      { type: 'num', mode: 'boss', level: 'hard', q: 'Write in standard form: ' + n('7,000,000 + 300,000 + 3,000 + 200 + 20 + 1'), answer: '7303221', calc: '7000000+300000+3000+200+20+1' }
    ] },

  /* ---------- Lesson 4 · Composing and Decomposing (pages 9-11) ---------- */
  { id: 'D1', lesson: 4, concept: 'Decomposing a number',
    explain: 'To decompose a number, write it as the sum of each digit times the value of its place. ' + n('345,532') + ' decomposed is ' + n('(3 × 100,000) + (4 × 10,000) + (5 × 1,000) + (5 × 100) + (3 × 10) + (2 × 1)') + '.',
    variants: [
      { type: 'num', mode: 'normal', level: 'medium', q: 'Which number is decomposed as ' + n('(3 × 100,000) + (4 × 10,000) + (5 × 1,000) + (5 × 100) + (3 × 10) + (2 × 1)') + '?', answer: '345532', calc: '(3*100000)+(4*10000)+(5*1000)+(5*100)+(3*10)+(2*1)' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which is the correct decomposition of ' + n('345,532') + '?',
        options: [n('(3 × 100,000) + (4 × 10,000) + (5 × 1,000) + (5 × 100) + (3 × 10) + (2 × 1)'), n('(3 × 10,000) + (4 × 1,000) + (5 × 100) + (5 × 10) + (3 × 1) + (2 × 1)'), n('(3 × 1,000,000) + (4 × 100,000) + (5 × 10,000) + (5 × 1,000) + (3 × 100) + (2 × 10)'), n('(2 × 100,000) + (3 × 10,000) + (5 × 1,000) + (5 × 100) + (4 × 10) + (3 × 1)')], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'When decomposing ' + n('345,532') + ', we multiply the digit 4 by ___.', options: [n('10,000'), n('1,000'), n('100,000')], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 12, level: 'easy', q: n('(2 × 1,000) + (5 × 100) = 2,500'), answer: 0 },
      { type: 'num', mode: 'normal', level: 'medium', q: 'Which number is decomposed as ' + n('(2 × 100,000) + (6 × 1,000) + (4 × 10)') + '?', answer: '206040', calc: '(2*100000)+(6*1000)+(4*10)' }
    ] },
  { id: 'D2', lesson: 4, concept: 'Composing a number from the place value chart',
    explain: 'To compose a number from the chart, read the digits from left to right, period by period, and write a zero in each empty place between digits. A chart with 5 in the milliards, 400 million, 159 thousand and 24 composes ' + n('5,400,159,024') + '.',
    variants: [
      { type: 'mc', fig: 'placeTable', pic: { num: '5400159024' }, mode: 'normal', level: 'medium', q: 'Which number is written in the chart?', options: [n('5,400,159,024'), n('5,040,159,024'), n('5,400,195,024'), n('54,001,590,240')], answer: 0 },
      { type: 'tap', diagram: 'placeTable', pic: { num: '5400159024' }, mode: 'normal', level: 'medium', q: 'Tap the place that holds the digit 9.', answer: 't1' },
      { type: 'num', mode: 'normal', level: 'hard', fig: 'placeTable', pic: { num: '6124030420' }, q: 'Write the number that is in the chart.', answer: '6124030420', calc: '6000000000+100000000+20000000+4000000+30000+400+20' },
      { type: 'tf', mode: 'timed', seconds: 15, level: 'medium', q: 'The number ' + n('6,124,030,420') + ' has three zeros.', answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What is the value of the digit 3 in ' + n('6,124,030,420') + '?', options: [n('30,000'), n('3,000'), n('300,000'), '30'], answer: 0 }
    ] },
  { id: 'D3', lesson: 4, boss: true, concept: 'Decomposing and composing big numbers',
    explain: 'When we decompose a number we do not write a place that holds a zero. ' + n('6,124,030,420') + ' decomposes into ' + n('(6 × 1,000,000,000) + (1 × 100,000,000) + (2 × 10,000,000) + (4 × 1,000,000) + (3 × 10,000) + (4 × 100) + (2 × 10)') + '.',
    variants: [
      { type: 'num', mode: 'boss', level: 'hard', q: 'Which number is decomposed as ' + n('(7 × 1,000,000,000) + (5 × 10,000,000) + (4 × 10,000) + (3 × 1,000) + (5 × 100) + (9 × 1)') + '?', answer: '7050043509', calc: '(7*1000000000)+(5*10000000)+(4*10000)+(3*1000)+(5*100)+(9*1)' },
      { type: 'mc', mode: 'boss', level: 'hard', q: 'What is the decomposed form of ' + n('6,124,030,420') + '?',
        options: [n('(6 × 1,000,000,000) + (1 × 100,000,000) + (2 × 10,000,000) + (4 × 1,000,000) + (3 × 10,000) + (4 × 100) + (2 × 10)'), n('(6 × 1,000,000,000) + (1 × 100,000,000) + (2 × 10,000,000) + (4 × 1,000,000) + (3 × 1,000) + (4 × 100) + (2 × 10)'), n('(6 × 100,000,000) + (1 × 10,000,000) + (2 × 1,000,000) + (4 × 100,000) + (3 × 1,000) + (4 × 10) + (2 × 1)'), n('(6 × 1,000,000,000) + (1 × 10,000,000) + (2 × 1,000,000) + (4 × 100,000) + (3 × 10,000) + (4 × 100) + (2 × 10)')], answer: 0 },
      { type: 'mc', mode: 'boss', level: 'hard', q: 'Which number is decomposed as ' + n('(8 × 1,000,000) + (2 × 1,000) + (9 × 1)') + '?', options: [n('8,002,009'), n('8,200,009'), n('8,020,009'), n('8,002,090')], answer: 0 },
      { type: 'tf', mode: 'boss', level: 'hard', q: 'The decomposed form of ' + n('4,005') + ' is ' + n('(4 × 1,000) + (5 × 1)') + '.', answer: 0 }
    ] },

  /* ---------- Lesson 5 · Comparing Big Numbers (pages 12-13) ---------- */
  { id: 'E1', lesson: 5, concept: 'Comparing two numbers with the same number of digits',
    explain: 'To compare two numbers with the same number of digits, start at the far left and compare the digits in the same place. The first place where the digits differ decides which number is greater. ' + n('15,108') + ' is greater than ' + n('14,108') + ' because 5 is greater than 4 in the thousands place.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Anthill 1 has ' + n('14,108') + ' ants and Anthill 2 has ' + n('15,108') + ' ants. Which anthill has more ants?', options: ['Anthill 2', 'Anthill 1', 'They have the same number'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Which is greater: ' + n('123,978') + ' or ' + n('123,568') + '?', options: [n('123,978'), n('123,568'), 'They are equal'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 12, level: 'easy', q: 'To compare two numbers with the same number of digits, start with the digit on the far ___.', options: ['left', 'right'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 12, level: 'easy', q: n('14,108') + ' is less than ' + n('15,108') + '.', answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What is the first place where the digits differ in ' + n('14,108') + ' and ' + n('15,108') + '?', options: ['Thousands', 'Ten thousands', 'Hundreds', 'Ones'], answer: 0 }
    ] },
  { id: 'E2', lesson: 5, concept: 'Comparing numbers in the millions and milliards',
    explain: 'Big numbers are compared the same way: start at the far left and stop at the first place where the digits differ. ' + n('6,235,678') + ' is greater than ' + n('6,235,508') + ' because 6 is greater than 5 in the hundreds place. ' + n('2,500,000,000') + ' is greater than ' + n('2,450,890,007') + ' because 5 is greater than 4 in the hundred millions place.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which is greater: ' + n('6,235,508') + ' or ' + n('6,235,678') + '?', options: [n('6,235,678'), n('6,235,508'), 'They are equal'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which place decides the comparison of ' + n('6,235,508') + ' and ' + n('6,235,678') + '?', options: ['Hundreds', 'Ones', 'Millions', 'Thousands'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'hard', q: 'Which is greater: ' + n('2,500,000,000') + ' or ' + n('2,450,890,007') + '?', options: [n('2,500,000,000'), n('2,450,890,007'), 'They are equal'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 15, level: 'hard', q: n('2,450,890,007') + ' is greater than ' + n('2,500,000,000') + ' because it has more digits that are not zero.', answer: 1 },
      { type: 'fill', mode: 'timed', seconds: 12, level: 'medium', q: n('123,978') + ' is ___ ' + n('123,568') + '.', options: ['greater than', 'less than', 'equal to'], answer: 0 }
    ] },
  { id: 'E3', lesson: 5, boss: true, concept: 'Error analysis and making numbers to compare',
    explain: 'When we write a number in standard form we keep the value of every digit and write the zeros we need. ' + n('(6 × 100,000) + (5 × 10,000) + (4 × 1,000) + (3 × 100)') + ' = ' + n('654,300') + ', not ' + n('6,543') + '.',
    variants: [
      { type: 'mc', mode: 'boss', level: 'hard', q: 'A student was asked to record ' + n('(6 × 100,000) + (5 × 10,000) + (4 × 1,000) + (3 × 100)') + ' in standard form and answered ' + n('6,543') + '. What is the correct answer?', options: [n('654,300'), n('65,430'), n('6,543,000'), n('654,030')], answer: 0 },
      { type: 'mc', mode: 'boss', level: 'hard', q: 'Why is the student’s answer ' + n('6,543') + ' wrong?', options: ['They left out the zeros that keep each digit’s value', 'They did not add the digits', 'They wrote the digits backwards', 'They decomposed the number instead of composing it'], answer: 0 },
      { type: 'num', mode: 'boss', level: 'hard', q: 'Write in standard form: ' + n('(6 × 100,000) + (5 × 10,000) + (4 × 1,000) + (3 × 100)'), answer: '654300', calc: '600000+50000+4000+300' },
      { type: 'mc', mode: 'boss', level: 'hard', q: 'Which number makes the comparison true: ' + n('890,789,000 > ___') + '?', options: [n('890,788,999'), n('890,789,001'), n('891,000,000'), n('900,000,000')], answer: 0 },
      { type: 'multi', mode: 'boss', level: 'hard', q: 'Which of these numbers are less than ' + n('890,789,000') + '? Choose all that are correct.', options: [n('890,788,999'), n('889,999,999'), n('890,789,001'), n('891,000,000')], answer: [0, 1] }
    ] },

  /* ---------- Lesson 6 · Comparing Numbers in Multiple Forms (pages 14-16) ---------- */
  { id: 'F1', lesson: 6, concept: 'Comparing expanded forms',
    explain: 'To compare two numbers in expanded form, compare the parts that have the same place value, or change each one to standard form first. ' + n('40,000 + 3,000 + 100 + 20') + ' = ' + n('43,120') + ' is greater than ' + n('40,000 + 3,000 + 100 + 10') + ' = ' + n('43,110') + '.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Which is greater: ' + n('40,000 + 3,000 + 100 + 10') + ' or ' + n('40,000 + 3,000 + 100 + 20') + '?', options: [n('40,000 + 3,000 + 100 + 20'), n('40,000 + 3,000 + 100 + 10'), 'They are equal'], answer: 0 },
      { type: 'num', mode: 'normal', level: 'easy', q: 'Write in standard form: ' + n('40,000 + 3,000 + 100 + 10'), answer: '43110', calc: '40000+3000+100+10' },
      { type: 'tf', mode: 'timed', seconds: 12, level: 'easy', q: n('43,110') + ' is less than ' + n('43,120') + '.', answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'medium', q: 'To compare two numbers in different forms, we can first change them to ___ form.', options: ['standard', 'word', 'the longest'], answer: 0 },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'Forty-three thousand, one hundred ten equals ' + n('40,000 + 3,000 + 100 + 10') + '.', answer: 0 }
    ] },
  { id: 'F2', lesson: 6, concept: 'Comparing word form with other forms',
    explain: 'To compare numbers in word form, write each one in standard form and then compare. One million, nine hundred seventy-six thousand, eight hundred eighty-eight equals ' + n('1,976,888') + ', which is ' + n('1,000,000 + 900,000 + 70,000 + 6,000 + 800 + 80 + 8') + '.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Compare ' + n('1,000,000 + 900,000 + 70,000 + 6,000 + 800 + 80 + 8') + ' with “one million, nine hundred seventy-six thousand, eight hundred eighty-eight”.', options: ['The numbers are equal', 'The first is greater', 'The second is greater'], answer: 0 },
      { type: 'num', mode: 'normal', level: 'medium', q: 'Write in standard form: one million, nine hundred seventy-six thousand, eight hundred eighty-eight.', answer: '1976888', calc: '1000000+976000+888' },
      { type: 'mc', mode: 'normal', level: 'hard', q: 'Which is greater: “five milliard, two hundred twenty million, five hundred fifty-six thousand, forty” or “five milliard, two hundred twenty million, five hundred forty thousand, six”?', options: ['The second', 'The first', 'They are equal'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What is the word form of ' + n('43,120') + '?', options: ['forty-three thousand, one hundred twenty', 'thirty-four thousand, one hundred twenty', 'forty-three thousand, two hundred ten', 'forty-three thousand, one hundred two'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 15, level: 'medium', q: 'To compare two numbers written in words, we can write each one with digits first.', answer: 0 }
    ] },
  { id: 'F3', lesson: 6, boss: true, concept: 'Strategies for comparing numbers in different forms',
    explain: 'Choose the form that makes comparing easy. Most often, change the numbers to standard form and start at the far left, then decide by the first place where they differ.',
    variants: [
      { type: 'mc', mode: 'boss', level: 'hard', q: 'Which is greater: “seventeen million, four hundred twenty-five thousand, six hundred five” or ' + n('17,420,605') + '?', options: ['The first', 'The second', 'They are equal'], answer: 0 },
      { type: 'mc', mode: 'boss', level: 'hard', q: 'Which is greater: ' + n('8,000,000,000 + 400,000,000 + 700,000 + 60,000 + 1,000 + 900 + 3') + ' or ' + n('8,040,761,903') + '?', options: ['The first', 'The second', 'They are equal'], answer: 0 },
      { type: 'mc', mode: 'boss', level: 'hard', q: 'Which is greater: “four hundred twenty-three thousand, twelve” or ' + n('400,000 + 30,000 + 2,000 + 20 + 1') + '?', options: ['The second', 'The first', 'They are equal'], answer: 0 },
      { type: 'mc', mode: 'boss', level: 'hard', q: 'Which is greater: ' + n('14,780,064') + ' or ' + n('14,790,064') + '?', options: [n('14,790,064'), n('14,780,064'), 'They are equal'], answer: 0 }
    ] },

  /* ---------- Lesson 7 · Descending and Ascending Numbers (pages 17-19) ---------- */
  { id: 'G1', lesson: 7, concept: 'Ascending and descending order',
    explain: 'Ascending order goes from the least number to the greatest. Descending order goes from the greatest to the least. To order numbers, compare them from the far left. ' + n('78,090') + ' < ' + n('78,091') + ' < ' + n('78,999') + ' < ' + n('79,010') + ' < ' + n('79,100') + '.',
    variants: [
      { type: 'order', mode: 'normal', level: 'medium', q: 'Put Omar’s data in ascending order, from least to greatest.', items: [n('78,999'), n('79,100'), n('78,091'), n('79,010'), n('78,090')], answer: [4, 2, 0, 3, 1] },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Which is the least of ' + n('78,999') + ', ' + n('79,100') + ', ' + n('78,091') + ', ' + n('79,010') + ' and ' + n('78,090') + '?', options: [n('78,090'), n('78,091'), n('78,999'), n('79,010')], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Which is the greatest of ' + n('78,999') + ', ' + n('79,100') + ', ' + n('78,091') + ', ' + n('79,010') + ' and ' + n('78,090') + '?', options: [n('79,100'), n('79,010'), n('78,999'), n('78,091')], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 12, level: 'easy', q: 'Ascending order starts with the ___ number.', options: ['least', 'greatest'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'Descending order starts with the least number.', answer: 1 }
    ] },
  { id: 'G2', lesson: 7, concept: 'Ordering numbers in different forms',
    explain: 'When numbers are in different forms, change them to standard form and then order them. The number with more digits is greater; if they have the same number of digits, compare from the far left.',
    variants: [
      { type: 'order', mode: 'normal', level: 'hard', q: 'Put the numbers in ascending order.', items: ['four milliard, six hundred thousand, four', n('461,014'), 'four milliard, six hundred thousand, forty', n('(4 × 1,000,000,000) + (4 × 100,000) + (6 × 10)'), n('6,400,042')], answer: [1, 4, 3, 0, 2] },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which is greater: ' + n('6,400,042') + ' or ' + n('4,000,400,060') + '?', options: [n('4,000,400,060'), n('6,400,042'), 'They are equal'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'How many digits are in ' + n('4,000,400,060') + '?', options: ['10', '9', '8', '11'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 12, level: 'easy', q: n('6,400,042') + ' is greater than ' + n('461,014') + '.', answer: 0 }
    ] },
  { id: 'G3', lesson: 7, boss: true, concept: 'Error analysis in ordering and comparing',
    explain: 'A number with more digits is greater, as long as it does not start with zeros. So ' + n('100,513') + ' is greater than ' + n('89,906') + ': the first has 6 digits and the second has 5.',
    variants: [
      { type: 'mc', mode: 'boss', level: 'hard', q: 'A student thinks ' + n('89,906 > 100,513') + ' because 8 is larger than 1. What is correct?', options: ['100,513 is greater because it has 6 digits and 89,906 has 5', 'The student is right', 'The numbers are equal', 'They cannot be compared'], answer: 0 },
      { type: 'mc', mode: 'boss', level: 'hard', q: 'Why did the student make this error?', options: ['They compared only the first digits and ignored how many digits each number has', 'They left out the comma', 'They compared only the ones', 'They wrote the numbers in words'], answer: 0 },
      { type: 'order', mode: 'boss', level: 'hard', q: 'Put the numbers in ascending order.', items: [n('654,301'), 'six hundred fifty-four thousand, three hundred ten', n('604,320'), n('654,311'), 'five hundred ninety-nine thousand, three hundred ten'], answer: [4, 2, 0, 1, 3] },
      { type: 'order', mode: 'boss', level: 'hard', q: 'Put the numbers in descending order.', items: [n('6,025,060,990'), n('6,000,000,000 + 40,000,000 + 5,000,000 + 10,000 + 7,000 + 90'), n('5,000,000,000 + 40,000,000 + 5,000,000 + 7,000 + 90'), n('(6 × 1,000,000,000) + (3 × 10,000,000) + (5 × 1,000,000) + (6 × 10,000) + (9 × 100)'), 'five milliard, forty-one million, seven thousand, ninety'], answer: [1, 3, 0, 2, 4] }
    ] },

  /* ---------- Lesson 8 · Rounding Rules (pages 20-22) ---------- */
  { id: 'H1', lesson: 8, concept: 'Rounding with the midpoint strategy',
    explain: 'To round to the nearest thousand, find the number on a number line between two thousands. If it is past the midpoint, round up to the greater thousand; if it is before the midpoint, round down. The midpoint of 6,000 and 7,000 is 6,500, so ' + n('6,700') + ' ≈ ' + n('7,000') + '.',
    variants: [
      { type: 'num', mode: 'normal', level: 'easy', q: 'Round ' + n('6,700') + ' to the nearest thousand.', answer: '7000', round: ['6700', -3] },
      { type: 'num', mode: 'normal', level: 'easy', q: 'Round ' + n('9,340') + ' to the nearest thousand.', answer: '9000', round: ['9340', -3] },
      { type: 'num', mode: 'normal', level: 'medium', q: 'Round ' + n('16,401') + ' to the nearest thousand.', answer: '16000', round: ['16401', -3] },
      { type: 'num', mode: 'normal', level: 'medium', q: 'Round ' + n('19,654') + ' to the nearest thousand.', answer: '20000', round: ['19654', -3] },
      { type: 'tf', mode: 'timed', seconds: 12, level: 'easy', q: 'The midpoint of ' + n('6,000') + ' and ' + n('7,000') + ' is ' + n('6,500') + '.', answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: n('6,700') + ' lies on a number line between 6,000 and 7,000. Where is it?', options: ['Past the midpoint, so it rounds to 7,000', 'Before the midpoint, so it rounds to 6,000', 'Exactly at 6,000', 'Exactly at the midpoint'], answer: 0 }
    ] },
  { id: 'H2', lesson: 8, concept: 'The rounding rule',
    explain: 'Rounding rule: circle the digit to the right of the place you are rounding to. If it is 5 or higher, add one to the digit in the rounding place and replace the digits to its right with zeros. If it is 4 or less, leave the digit in the rounding place alone and replace the digits to its right with zeros. ' + n('25,514') + ' ≈ ' + n('26,000') + ' and ' + n('25,415') + ' ≈ ' + n('25,000') + ' (to the nearest thousand).',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'If the digit to the right of the rounding place is 5 or higher, what do we do?', options: ['Add one to the digit in the rounding place and replace the digits to its right with zeros', 'Leave the digit in the rounding place alone', 'Only remove the digit on the right', 'Subtract one from the digit in the rounding place'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 12, level: 'easy', q: 'If the digit to the right is 4 or less, we leave the digit in the rounding place ___.', options: ['alone', 'and add one', 'and subtract one'], answer: 0 },
      { type: 'num', mode: 'normal', level: 'medium', q: 'Round ' + n('234,432') + ' to the nearest thousand.', answer: '234000', round: ['234432', -3] },
      { type: 'num', mode: 'normal', level: 'medium', q: 'Round ' + n('7,578') + ' to the nearest thousand.', answer: '8000', round: ['7578', -3] },
      { type: 'num', mode: 'normal', level: 'hard', q: 'Round ' + n('290,290') + ' to the nearest ten thousand.', answer: '290000', round: ['290290', -4] },
      { type: 'tf', mode: 'timed', seconds: 12, level: 'medium', q: n('25,415') + ' ≈ ' + n('25,000') + ' (to the nearest thousand).', answer: 0 }
    ] },
  { id: 'H3', lesson: 8, boss: true, concept: 'Rounding to bigger places and choosing the strategy',
    explain: 'The same rule works for any place: hundred thousands, millions, milliards. Rounding also helps check an answer: for ' + n('47 + 31') + ', the Rounding Rule gives ' + n('50 + 30 = 80') + ', the Front-End Estimate gives ' + n('40 + 30 = 70') + ', and the actual answer is ' + n('78') + ', so the Rounding Rule estimate is closer.',
    variants: [
      { type: 'mc', mode: 'boss', level: 'hard', q: 'We estimated ' + n('47 + 31') + ' two ways: the Rounding Rule gave ' + n('50 + 30 = 80') + ' and the Front-End Estimate gave ' + n('40 + 30 = 70') + '. The actual answer is ' + n('78') + '. Which strategy is more accurate?', options: ['The Rounding Rule, because 80 is closer to 78', 'The Front-End Estimate, because 70 is closer to 78', 'Both are equally accurate', 'Neither estimate is reasonable'], answer: 0 },
      { type: 'num', mode: 'boss', level: 'hard', q: 'Round ' + n('250,000') + ' to the nearest hundred thousand.', answer: '300000', round: ['250000', -5] },
      { type: 'num', mode: 'boss', level: 'hard', q: 'Round ' + n('700,500') + ' to the nearest hundred thousand.', answer: '700000', round: ['700500', -5] },
      { type: 'num', mode: 'boss', level: 'hard', q: 'Round ' + n('7,435,026,353') + ' to the nearest ten thousand.', answer: '7435030000', calc: '7435026353-26353+30000' },
      { type: 'num', mode: 'boss', level: 'hard', q: 'Round ' + n('5,367,544') + ' to the nearest million.', answer: '5000000', round: ['5367544', -6] },
      { type: 'num', mode: 'boss', level: 'hard', q: 'Round ' + n('10,944,352,543') + ' to the nearest milliard.', answer: '11000000000', calc: '11*1000000000' }
    ] }
];
})();
