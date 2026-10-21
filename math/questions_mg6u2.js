/* Math · Grade 6 · Unit 2 "Rational Numbers" · Languages track (English), first term 2026/2027
   Source: the English school book (Primary 6, Math Term 1), Unit 2 (book pages 15-33), three concepts: 2.1 "Explore the Number Line" (lessons 1-2), 2.2 "Investigate Rational Numbers" (3-4),
   2.3 "Interpret and Use Absolute Value" (5-6).
   Lessons: 1 Using a Number Line to Describe Data (p15-18) · 2 Using a Number Line and Symbols to Compare Numbers (p19-22) · 3 Analyzing Rational Numbers by Using Models (p23-25) ·
            4 Comparing and Ordering Rational Numbers (p26-27) · 5 Exploring Absolute Value (p28-30) · 6 Comparing Absolute Values (p31-33).
   Idea letters: E L1 · F L2 · G L3 · H L4 · I L5 · J L6 (unit 1 of this grade used A-D).   Boss ideas: E6, F7, G6, H6, I6, J7.
   The book is an activity book with no printed answers, so the numbers and situations are the book's own (heights of the land in Egypt, Mohamed's biscuits, freezing points, the rock-climbing
   wall, the number-system circles, the fishpond, the game tokens, the borrowed money, the freezers and the ponds) and every number answer is computed (`num` carries `calc`, checked by
   tools/check_questions.js). Answers that are negative or fractions are asked as multiple choice, because the number pad takes plain positive numbers.
   Pictures (math/g6_art.js): numLine6 (a horizontal or vertical number line with lettered points; tap lnA-lnF) and setsCircles (tap stRat / stInt / stNat / stCnt).
   Review notes:
   - Lesson 1: the book's five biscuit number lines are not copied; the question uses one line drawn here with the same numbers (Mohamed's share of 10 packs = 5, packs eaten = 8).
     "Sea water freezes at -2 °C" and the Sinai height 2,875 m are the book's own numbers.
   - Lesson 2: the book's four vertical number lines (W-Z) and the opinion question "-12 or -8?" are not asked; the climbers are shown on one vertical line drawn here.
   - Lesson 3: of the six statements the book asks to mark, B, D and E are true (A, C and F are false); the same three are marked here. The book defines the counting numbers as 1, 2, 3, ... and the
     natural numbers as 0, 1, 2, ...; the site follows it. The "Error Analysis" line (page 25) is not asked because its points cannot be read exactly from the printed picture.
   - Lesson 5: the book does not say which time is zero in "Select the True Statements"; the questions take zero as the meeting time, 2:30. Of the four "Absolute Strategy" statements only A, C and D
     are used (statement B is ambiguous).
   - Lesson 6: Rawan's claim "-3.25 > 6.50" is false and the question says why; positional distances are ordered by absolute value.
   - Not asked: the open "Let's Chat" prompts, graphing on a blank number line, the definition tasks ("write a definition"), "Justify" and "Explain" items and the Tray Matcher interactive.
   The Arabic file will be written from the Arabic book (same ids, phrasings and answers). */
(function () {
const n = s => s;
window.CHAPTER = { id: 'mg6u2', title: 'Rational Numbers', grade: 'Grade 6', track: 'Languages' };

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
const order = (m, lv, q, items, answer) => V('order', m, lv, q, { items, answer });
const tap = (m, lv, q, diagram, pic, answer) => V('tap', m, lv, q, { diagram, pic, answer });
const CMP = ['<', '>', '='];                       // the three comparison symbols (the right one is moved to the front per question)
const sym = (m, lv, q, right, ex) => mc(m, lv, q, [right].concat(CMP.filter(s => s !== right)), ex);
const CLIMB = { min: -10, max: 10, vertical: true, pts: [{ v: -5, l: 'A' }, { v: 3, l: 'B' }, { v: -9, l: 'C' }, { v: -8, l: 'D' }, { v: -3, l: 'E' }] };
const LINE = { min: -10, max: 10, pts: [{ v: 1, l: 'A' }, { v: 2.5, l: 'B' }, { v: 5.5, l: 'C' }, { v: 6.75, l: 'D' }] };
const SETS = ['Counting numbers', 'Natural numbers', 'Integers', 'Rational numbers'];

window.IDEAS = [
  /* ---------- Lesson 1 · Using a Number Line to Describe Data (pages 15-18) ---------- */
  { id: 'E1', lesson: 1, concept: 'Rational numbers',
    explain: 'A rational number is a number that can be made by dividing two integers. ' + n('4, 3 1/2, 0') + ' and ' + n('2.25') + ' are rational numbers. Integers, fractions, decimals and mixed numbers are all rational numbers.',
    variants: [
      mc(14, 'e', 'A rational number is a number that can be made by…', ['dividing two integers', 'adding two integers', 'multiplying two decimals', 'counting objects']),
      tf(10, 'e', n('0') + ' is a rational number.', true),
      tf(10, 'e', n('2.25') + ' is a rational number.', true),
      tf(10, 'e', n('3 1/2') + ' is a rational number.', true),
      fill(14, 'e', 'Integers, fractions, decimals and mixed numbers are all ___ numbers.', ['rational', 'natural', 'counting']),
      match('n', 'm', 'Match each rational number to its form.', [n('4'), n('2.25'), n('3 1/2')], ['Integer', 'Decimal', 'Mixed number'], [0, 1, 2])
    ] },
  { id: 'E2', lesson: 1, concept: 'Negative numbers for heights of the land',
    explain: 'In Egypt the land is 145 meters below sea level in the Western Desert and 2,875 meters above sea level in the Sinai Peninsula. Sea level is 0, so heights above it are positive and heights below it are negative: ' + n('−145') + ' and ' + n('2,875') + '. Starting at 23 m and going down 25 m gives ' + n('23 − 25 = −2') + ', which is 2 m below sea level.',
    variants: [
      mc('n', 'e', n('145') + ' meters below sea level is written as…', [n('−145'), n('145'), n('−14.5'), n('1,450')]),
      mc('n', 'e', n('2,875') + ' meters above sea level is written as…', [n('2,875'), n('−2,875'), n('−2.875'), n('287.5')]),
      mc(14, 'e', 'When we describe the height of the land, what does 0 stand for?', ['Sea level', 'The Sinai Peninsula', 'The Western Desert', 'The lowest point']),
      mc('n', 'm', 'A traveler starts at an elevation of ' + n('23') + ' meters and goes down by ' + n('25') + ' meters. What is the new elevation?', [n('−2 m'), n('2 m'), n('48 m'), n('−48 m')]),
      tf(10, 'e', 'A negative elevation means that the place is below sea level.', true),
      mc('n', 'm', 'Which place is lower?', ['The Western Desert (−145 m)', 'The Sinai Peninsula (2,875 m)', 'They are at the same height', 'We cannot tell'])
    ] },
  { id: 'E3', lesson: 1, concept: 'Reading points on a number line',
    explain: 'Mohamed and Hoda share 10 packs of biscuits equally, so Mohamed\'s share is 5 packs; he ate 8 packs. On a number line, numbers to the right of 0 are positive and numbers to the left of 0 are negative, and the numbers grow as we move to the right.',
    variants: [
      num(14, 'e', 'Mohamed and Hoda share 10 packs of biscuits equally. How many packs is Mohamed\'s share?', 5, '10/2'),
      tap('n', 'm', 'Mohamed\'s share is 5 packs. Tap the point that shows his share.', 'numLine6', { min: 0, max: 20, pts: [{ v: 5, l: 'A' }, { v: 8, l: 'B' }, { v: 13, l: 'C' }] }, 'lnA'),
      tap('n', 'm', 'Mohamed ate 8 packs. Tap the point that shows the number of packs he ate.', 'numLine6', { min: 0, max: 20, pts: [{ v: 5, l: 'A' }, { v: 8, l: 'B' }, { v: 13, l: 'C' }] }, 'lnB'),
      mc(14, 'e', 'On a number line, the numbers to the right of 0 are…', ['positive', 'negative', 'zero', 'fractions only']),
      mc(14, 'e', 'On a number line, the numbers to the left of 0 are…', ['negative', 'positive', 'zero', 'integers only']),
      tf(10, 'e', 'On a horizontal number line, the numbers get greater as we move to the right.', true)
    ] },
  { id: 'E4', lesson: 1, concept: 'Freezing points of liquids',
    explain: 'Freezing points in °C: corn oil ' + n('−20') + ', fresh water ' + n('0') + ', sea water ' + n('−2') + ', peanut oil ' + n('3') + ', orange juice ' + n('−6') + '. Peanut oil has the highest freezing point and corn oil the lowest.',
    variants: [
      mc(14, 'e', 'At what temperature does sea water freeze, according to the table (corn oil −20, fresh water 0, sea water −2, peanut oil 3, orange juice −6)?', [n('−2 °C'), n('2 °C'), n('0 °C'), n('−20 °C')]),
      mc('n', 'm', 'Which liquid has the highest freezing point?', ['Peanut oil (3 °C)', 'Fresh water (0 °C)', 'Corn oil (−20 °C)', 'Orange juice (−6 °C)']),
      mc('n', 'm', 'Which liquid has the lowest freezing point?', ['Corn oil (−20 °C)', 'Orange juice (−6 °C)', 'Sea water (−2 °C)', 'Peanut oil (3 °C)']),
      multi('n', 'm', 'Fresh water freezes at 0 °C. Which liquids freeze at a LOWER temperature? Choose ALL.', ['Corn oil (−20 °C)', 'Sea water (−2 °C)', 'Orange juice (−6 °C)', 'Peanut oil (3 °C)'], [0, 1, 2]),
      tf(12, 'm', 'Peanut oil freezes at a higher temperature than fresh water.', true),
      mc(14, 'e', 'Which is colder?', [n('−20 °C'), n('−6 °C'), 'They are the same', n('0 °C')])
    ] },
  { id: 'E5', lesson: 1, concept: 'Ordering with a number line',
    explain: 'To order numbers from least to greatest, read the number line from left to right. A vertical number line shows the greater numbers higher up. Freezing points from lowest to highest: corn oil, orange juice, sea water, fresh water, peanut oil.',
    variants: [
      order('n', 'm', 'Order the liquids by their freezing points, from the lowest to the highest.', ['Peanut oil', 'Sea water', 'Fresh water', 'Corn oil', 'Orange juice'], [3, 4, 1, 2, 0]),
      order('n', 'm', 'Put the numbers in order from the least to the greatest.', [n('3'), n('−2'), n('0'), n('−6'), n('−20')], [4, 3, 1, 2, 0]),
      mc('n', 'm', 'Which list is in order from least to greatest?', [n('−6, −2, 0, 3'), n('3, 0, −2, −6'), n('0, −2, −6, 3'), n('−2, −6, 0, 3')]),
      mc('n', 'e', 'On this vertical number line, which point shows the greatest number?', ['B', 'A', 'C', 'D'], { fig: 'numLine6', pic: { min: -10, max: 10, vertical: true, pts: [{ v: -5, l: 'A' }, { v: 3, l: 'B' }, { v: -9, l: 'C' }, { v: -8, l: 'D' }] } }),
      mc(14, 'e', 'On a vertical number line, the greater numbers are…', ['higher up', 'lower down', 'at the same level', 'closer to the left'])
    ] },
  { id: 'E6', lesson: 1, boss: true, concept: 'Using the number line to describe real situations',
    explain: 'A number line turns a situation into numbers. The land of Egypt goes from ' + n('−145') + ' m to ' + n('2,875') + ' m, a difference of ' + n('145 + 2,875 = 3,020') + ' m. On a day at −1 °C, fresh water (freezes at 0 °C) freezes but sea water (freezes at −2 °C) does not.',
    variants: [
      mc('b', 'h', 'A traveler starts at 23 m and goes down by 25 m by the end of the week. Where is he?', ['2 m below sea level (−2 m)', '2 m above sea level', '48 m below sea level', '48 m above sea level']),
      num('b', 'h', 'The lowest land in Egypt is 145 m below sea level and the highest is 2,875 m above sea level. What is the difference in height between them, in meters?', 3020, '145+2875'),
      mc('b', 'h', 'The temperature is −1 °C. Fresh water freezes at 0 °C and sea water at −2 °C. What happens?', ['Fresh water freezes but sea water does not', 'Sea water freezes but fresh water does not', 'Both freeze', 'Neither freezes']),
      mc('b', 'h', 'Which temperature is the coldest?', [n('−20 °C'), n('−6 °C'), n('−2 °C'), n('3 °C')]),
      mc('b', 'h', 'Why is −6 °C colder than −2 °C?', ['Because −6 is farther to the left, so it is less than −2', 'Because 6 is greater than 2, so −6 is greater', 'Because both are negative', 'Because −6 is closer to 0'])
    ] },

  /* ---------- Lesson 2 · Using a Number Line and Symbols to Compare Numbers (pages 19-22) ---------- */
  { id: 'F1', lesson: 2, concept: 'Positions above and below the platform',
    explain: 'Rock climbers\' positions from the platform (meters): A ' + n('−5') + ', B ' + n('3') + ', C ' + n('−9') + ', D ' + n('−8') + ', E ' + n('−3') + '. Negative numbers are below the platform and positive numbers are above it. E is the closest below it.',
    variants: [
      mc(14, 'e', 'Climber positions: A −5, B 3, C −9, D −8, E −3. Which climber is above the platform?', ['Climber B', 'Climber A', 'Climber C', 'Climber E']),
      multi('n', 'm', 'Which climbers are below the platform? Choose ALL.', ['Climber A (−5)', 'Climber B (3)', 'Climber C (−9)', 'Climber D (−8)', 'Climber E (−3)'], [0, 2, 3, 4]),
      mc('n', 'm', 'Which climber is below the platform but the closest to it?', ['Climber E (−3)', 'Climber A (−5)', 'Climber D (−8)', 'Climber C (−9)']),
      tap('n', 'm', 'Climber B is 3 meters above the platform. Tap Climber B.', 'numLine6', CLIMB, 'lnB'),
      tap('n', 'm', 'Climber D is 8 meters below the platform. Tap Climber D.', 'numLine6', CLIMB, 'lnD'),
      mc('n', 'e', 'In the rock-climbing situation, what do the negative numbers stand for?', ['Positions below the platform', 'Positions above the platform', 'The platform itself', 'Climbers who stopped'])
    ] },
  { id: 'F2', lesson: 2, concept: 'Distance from the platform (from 0)',
    explain: 'The distance from the platform is the number of units from 0. Climber C (' + n('−9') + ') is 9 units away, the farthest. Climber B (' + n('3') + ') and Climber E (' + n('−3') + ') are both 3 units away: the same distance on opposite sides.',
    variants: [
      mc('n', 'm', 'Which climber is the farthest from the platform?', ['Climber C (−9)', 'Climber D (−8)', 'Climber A (−5)', 'Climber B (3)']),
      mc('n', 'm', 'Which two climbers are the same distance from the platform?', ['B (3) and E (−3)', 'A (−5) and D (−8)', 'C (−9) and D (−8)', 'A (−5) and B (3)']),
      mc('n', 'h', 'Why is Climber C the farthest from the platform?', ['−9 is more units away from 0 than all the other positions', '−9 is the greatest number', 'It is the only negative number', 'It is above the platform']),
      mc('n', 'm', 'You are at −3. Another climber is the same distance from the platform but not at your spot. Where is he?', [n('3'), n('−6'), n('0'), n('−3')]),
      num(12, 'e', 'How many units from 0 is −9?', 9, '9')
    ] },
  { id: 'F3', lesson: 2, concept: 'Comparing numbers with < and >',
    explain: 'On a number line the number to the right is greater. Every negative number is less than 0 and less than every positive number. ' + n('−7 < −3') + ', ' + n('8 > 0') + ', ' + n('3 < 4') + ', ' + n('2 > −9') + ', ' + n('−6 < 0') + ', ' + n('2 > −2') + '.',
    variants: [
      sym(14, 'e', 'Which symbol makes the statement true? ' + n('−7 ___ −3'), '<'),
      sym(14, 'e', 'Which symbol makes the statement true? ' + n('8 ___ 0'), '>'),
      sym(14, 'e', 'Which symbol makes the statement true? ' + n('3 ___ 4'), '<'),
      sym('n', 'm', 'Which symbol makes the statement true? ' + n('2 ___ −9'), '>'),
      sym('n', 'm', 'Which symbol makes the statement true? ' + n('−6 ___ 0'), '<'),
      sym('n', 'm', 'Which symbol makes the statement true? ' + n('2 ___ −2'), '>'),
      mc('n', 'm', 'Which is greater: −7 or −3?', [n('−3'), n('−7'), 'They are equal', 'We cannot tell']),
      tf(10, 'e', 'Every negative number is less than every positive number.', true),
      tf(12, 'm', 'Of two numbers on a number line, the one farther to the left is the greater.', false)
    ] },
  { id: 'F4', lesson: 2, concept: 'Opposites (additive inverses)',
    explain: 'Opposite numbers are the same distance from 0 on opposite sides of 0. A number and its opposite add up to 0 (that is why the waiter\'s tray balances). The opposite of 5 is −5, of 6 is −6, of 1/2 is −1/2, of −16 is 16 and of −3/2 is 3/2. 0 is its own opposite.',
    variants: [
      term('n', 'm', 'Two numbers that are the same distance from zero on opposite sides.', 'Opposites'),
      mc(12, 'e', 'What is the opposite of ' + n('6') + '?', [n('−6'), n('6'), n('0'), n('1/6')]),
      mc('n', 'm', 'What is the opposite of ' + n('−5') + '?', [n('5'), n('−5'), n('0'), n('1/5')]),
      mc('n', 'm', 'What is the opposite of ' + n('1/2') + '?', [n('−1/2'), n('2'), n('1/2'), n('−2')]),
      mc('n', 'm', 'What is the opposite of ' + n('−16') + '?', [n('16'), n('−16'), n('−1/16'), n('0')]),
      mc('n', 'm', 'What is the opposite of ' + n('−3/2') + '?', [n('3/2'), n('−2/3'), n('2/3'), n('−3/2')]),
      match('n', 'm', 'Match each number to its opposite.', [n('−5'), n('6'), n('1/2'), n('−16'), n('−3/2')], [n('16'), n('3/2'), n('−1/2'), n('5'), n('−6')], [3, 4, 2, 0, 1]),
      fill(14, 'e', 'A number and its opposite add up to ___.', ['0', '1', '2']),
      tf(10, 'e', 'The opposite of 0 is 0.', true)
    ] },
  { id: 'F5', lesson: 2, concept: 'True statements about additive inverses',
    explain: 'A number and its additive inverse are the same distance from zero but on opposite sides. Not all opposites are negative (the opposite of −5 is 5). Zero is its own additive inverse. To show 5 and its opposite, plot the points 5 units to the right and 5 units to the left of 0. The additive inverse of a number is not zero: the number plus its inverse is zero.',
    variants: [
      multi('n', 'h', 'Which statements are true? Choose ALL.', ['A number and its additive inverse are the same distance from zero on a number line but on opposite sides', 'All opposites are negative numbers', 'Zero is its own additive inverse', 'To show 5 and its additive inverse, plot the point 5 units to the right of 0 and the point 5 units to the left of 0', 'The additive inverse of any number is zero'], [0, 2, 3]),
      tf(10, 'e', 'All opposites are negative numbers.', false),
      tf(12, 'm', 'The additive inverse of any number is zero.', false),
      mc('n', 'm', 'Which number is its own additive inverse?', [n('0'), n('1'), n('−1'), n('10')]),
      tf(12, 'm', 'A number and its additive inverse are the same distance away from zero on a number line.', true)
    ] },
  { id: 'F6', lesson: 2, concept: 'The opposite of an opposite',
    explain: 'A negative sign can mean "the opposite of". So −(−3) means the opposite of −3, which is 3. The opposite of the opposite of a number is the number itself.',
    variants: [
      mc('n', 'm', n('−(−3) ='), [n('3'), n('−3'), n('0'), n('−6')]),
      mc('n', 'm', n('−(−7) ='), [n('7'), n('−7'), n('0'), n('1/7')]),
      mc('n', 'm', 'The opposite of the opposite of a number is…', ['the number itself', 'zero', 'the number plus one', 'always negative']),
      tf(12, 'm', n('−(−8) = 8') + '.', true),
      tf(12, 'm', n('−(−5) = −5') + '.', false)
    ] },
  { id: 'F7', lesson: 2, boss: true, concept: 'Comparing, distance and opposites together',
    explain: '−12 is farther from 0 than −8, so it is the lower position, and −12 < −8. A number and its opposite are 14 units apart when each is 7 units from 0. Two climbers 6 m above and 6 m below the platform are 12 m apart.',
    variants: [
      mc('b', 'h', 'One climber is at −12 and another at −8. Which climber is farther from the platform?', ['The climber at −12', 'The climber at −8', 'Both are the same distance', 'We cannot tell']),
      mc('b', 'h', 'Which statement is true?', [n('−12 < −8'), n('−12 > −8'), n('−12 = −8'), n('−12 > 0')]),
      mc('b', 'h', n('−(−(−4)) ='), [n('−4'), n('4'), n('0'), n('−8')]),
      num('b', 'h', 'A number and its opposite are 14 units apart on a number line. What is the positive one of them?', 7, '14/2'),
      num('b', 'h', 'One climber is 6 m above the platform and another 6 m below it. How many meters apart are they?', 12, '6+6')
    ] },

  /* ---------- Lesson 3 · Analyzing Rational Numbers by Using Models (pages 23-25) ---------- */
  { id: 'G1', lesson: 3, concept: 'Counting numbers, natural numbers and integers',
    explain: 'Counting numbers are 1, 2, 3, … Natural numbers are 0, 1, 2, 3, … (they include 0). Integers are …, −3, −2, −1, 0, 1, 2, 3, … (negative whole numbers, zero and positive whole numbers).',
    variants: [
      mc(14, 'e', 'Which set starts with 1, 2, 3, …?', [SETS[0], SETS[1], SETS[2], SETS[3]]),
      mc(14, 'e', 'Which set starts with 0, 1, 2, 3, …?', [SETS[1], SETS[0], SETS[2], SETS[3]]),
      term('n', 'm', 'The set …, −2, −1, 0, 1, 2, …', 'Integers'),
      mc('n', 'm', 'What is the difference between the natural numbers and the counting numbers?', ['The natural numbers include 0', 'The counting numbers include 0', 'The natural numbers include negative numbers', 'There is no difference']),
      tf(10, 'e', n('0') + ' is a natural number.', true),
      tf(10, 'e', n('0') + ' is a counting number.', false),
      tf(10, 'e', n('−3') + ' is an integer.', true),
      tf(10, 'e', n('−3') + ' is a natural number.', false)
    ] },
  { id: 'G2', lesson: 3, concept: 'Naming numbers: the best subset',
    explain: 'The best subset is the smallest set a number belongs to. ' + n('4') + ' and ' + n('12,892') + ' are counting numbers; ' + n('0') + ' is a natural number; ' + n('−455') + ', ' + n('−11') + ' and ' + n('−28,765') + ' are integers; ' + n('0.585757') + ', ' + n('−0.606') + ', ' + n('6 2/3') + ', ' + n('1/2') + ' and ' + n('4.9') + ' are rational numbers (not integers).',
    variants: [
      match('n', 'm', 'Match each number to its best subset.', [n('4'), n('0'), n('−455'), n('6 2/3')], SETS, [0, 1, 2, 3]),
      mc('n', 'm', 'What is the best subset for ' + n('−11') + '?', [SETS[2], SETS[1], SETS[0], SETS[3]]),
      mc('n', 'm', 'What is the best subset for ' + n('12,892') + '?', [SETS[0], SETS[1], SETS[2], SETS[3]]),
      mc('n', 'm', 'What is the best subset for ' + n('0') + '?', [SETS[1], SETS[0], SETS[2], SETS[3]]),
      mc('n', 'm', 'What is the best subset for ' + n('0.585757') + '?', [SETS[3], SETS[2], SETS[1], SETS[0]]),
      table('n', 'm', 'Sort the numbers.', ['Integers', 'Not integers'], [n('−28,765'), n('4.9'), n('0'), n('1/2'), n('−11'), n('12,892')], [0, 1, 0, 1, 0, 0]),
      table('n', 'm', 'Sort the numbers.', ['Natural numbers', 'Not natural numbers'], [n('0'), n('5'), n('−3'), n('3/4'), n('12,892'), n('−0.5')], [0, 0, 1, 1, 0, 1])
    ] },
  { id: 'G3', lesson: 3, concept: 'Sets inside sets',
    explain: 'The counting numbers are inside the natural numbers, the natural numbers are inside the integers and the integers are inside the rational numbers. So every counting number is also natural, an integer and rational; every integer is rational; but not every rational number is an integer.',
    variants: [
      multi('n', 'h', 'Which statements are always true? Choose ALL.', ['All integers (positive, negative and zero) are also natural numbers', 'All counting numbers are also natural numbers, integers and rational numbers', 'All rational numbers are also integers', 'All natural numbers are also integers and rational numbers', 'All integers are also rational numbers', 'All rational numbers are also natural numbers and counting numbers'], [1, 3, 4]),
      tf(10, 'e', 'Every integer is a rational number.', true),
      tf(10, 'e', 'Every rational number is an integer.', false),
      mc('n', 'm', 'The number ' + n('14') + ' belongs to…', ['the counting numbers, natural numbers, integers and rational numbers', 'the counting numbers only', 'the integers only', 'the rational numbers only']),
      mc('n', 'm', 'The number ' + n('−3') + ' belongs to…', ['the integers and the rational numbers', 'the natural numbers and the integers', 'the counting numbers only', 'the rational numbers only']),
      mc('n', 'm', 'The number ' + n('0.5') + ' belongs to…', ['the rational numbers only', 'the integers and the rational numbers', 'the natural numbers', 'the counting numbers']),
      term('n', 'm', 'A set that is inside another set.', 'Subset'),
      tap('n', 'm', 'Tap the part of the diagram where ' + n('−7') + ' belongs (an integer that is not a natural number).', 'setsCircles', {}, 'stInt'),
      tap('n', 'm', 'Tap the part of the diagram where ' + n('0.02') + ' belongs (a rational number that is not an integer).', 'setsCircles', {}, 'stRat'),
      tap('n', 'm', 'Tap the part of the diagram where ' + n('0') + ' belongs (a natural number that is not a counting number).', 'setsCircles', {}, 'stNat'),
      tap('n', 'e', 'Tap the part of the diagram for the counting numbers ' + n('1, 2, 3') + '.', 'setsCircles', {}, 'stCnt')
    ] },
  { id: 'G4', lesson: 3, concept: 'Writing rational numbers as fractions a/b',
    explain: 'A rational number can be written as a fraction a/b where a and b are integers and b is not 0. ' + n('4 = 4/1') + ', ' + n('0.75 = 3/4') + ', ' + n('−45 = −45/1') + ' and ' + n('−1.5 = −3/2') + '.',
    variants: [
      mc(14, 'e', 'A rational number can be written as a/b where a and b are…', ['integers and b is not 0', 'natural numbers only', 'decimals', 'negative numbers']),
      mc('n', 'm', 'Write ' + n('4') + ' as a fraction a/b.', [n('4/1'), n('1/4'), n('4/4'), n('4/0')]),
      mc('n', 'm', 'Write ' + n('0.75') + ' as a fraction a/b.', [n('3/4'), n('7/5'), n('75/10'), n('7/50')]),
      mc('n', 'm', 'Write ' + n('−45') + ' as a fraction a/b.', [n('−45/1'), n('−1/45'), n('45/1'), n('−4/5')]),
      mc('n', 'm', 'Write ' + n('−1.5') + ' as a fraction a/b.', [n('−3/2'), n('−1/5'), n('−15/100'), n('3/2')]),
      tf(10, 'e', 'Every integer can be written as a fraction with denominator 1.', true)
    ] },
  { id: 'G5', lesson: 3, concept: 'Plotting rational numbers on a number line',
    explain: 'Rational numbers can be plotted between the integers: ' + n('2.5') + ' is halfway between 2 and 3, ' + n('5.5') + ' is between 5 and 6 and ' + n('6 3/4') + ' is between 6 and 7. To plot the opposite of a number, plot the point the same distance from 0 on the other side.',
    variants: [
      tap('n', 'm', 'Tap the point that shows ' + n('5.5') + '.', 'numLine6', LINE, 'lnC'),
      tap('n', 'm', 'Tap the point that shows ' + n('6 3/4') + '.', 'numLine6', LINE, 'lnD'),
      tap('n', 'm', 'Tap the point that shows ' + n('2.5') + '.', 'numLine6', LINE, 'lnB'),
      tap('n', 'e', 'Tap the point that shows ' + n('1') + '.', 'numLine6', LINE, 'lnA'),
      mc('n', 'm', n('2.5') + ' is between which two integers?', [n('2 and 3'), n('1 and 2'), n('3 and 4'), n('2 and 5')]),
      mc('n', 'm', n('6 3/4') + ' is between which two integers?', [n('6 and 7'), n('5 and 6'), n('7 and 8'), n('3 and 4')]),
      mc('n', 'm', 'The opposite of ' + n('5.5') + ' is…', [n('−5.5'), n('5.5'), n('−0.55'), n('1/5.5')]),
      mc('n', 'm', 'The opposite of ' + n('6 3/4') + ' is…', [n('−6 3/4'), n('6 3/4'), n('−3/4'), n('6 1/4')]),
      tf(12, 'm', 'To plot the opposite of a number, plot the point the same distance from 0 on the other side of 0.', true)
    ] },
  { id: 'G6', lesson: 3, boss: true, concept: 'Which set? Always, sometimes, never',
    explain: 'Use the nesting of the sets: counting ⊂ natural ⊂ integers ⊂ rational. ' + n('−3/4') + ' is rational but not an integer; ' + n('−11') + ' is an integer but not natural; ' + n('0') + ' is natural but not counting.',
    variants: [
      mc('b', 'h', 'Which statement is ALWAYS true?', ['Every natural number is an integer', 'Every integer is a natural number', 'Every rational number is an integer', 'Every counting number is negative']),
      mc('b', 'h', 'Which number is a rational number but NOT an integer?', [n('−3/4'), n('−4'), n('0'), n('12')]),
      mc('b', 'h', 'Which number is an integer but NOT a natural number?', [n('−11'), n('0'), n('5'), n('1/2')]),
      mc('b', 'h', 'Which number is a natural number but NOT a counting number?', [n('0'), n('1'), n('−1'), n('1/2')]),
      tap('b', 'h', 'Tap the part of the diagram that holds the natural numbers that are NOT counting numbers.', 'setsCircles', {}, 'stNat')
    ] },

  /* ---------- Lesson 4 · Comparing and Ordering Rational Numbers (pages 26-27) ---------- */
  { id: 'H1', lesson: 4, concept: 'Ascending and descending order on a number line',
    explain: 'Arranged ascending (from the smallest to the greatest) if we move from left to right on the number line; arranged descending (from the greatest to the smallest) if we move from right to left. Of two numbers, the one to the right is the greater.',
    variants: [
      mc(14, 'e', 'Numbers are arranged from the smallest to the greatest when we move on the number line…', ['from left to right', 'from right to left', 'from 0 outward', 'in any direction']),
      mc(14, 'e', 'Numbers are arranged from the greatest to the smallest when we move on the number line…', ['from right to left', 'from left to right', 'from top to bottom only', 'from 0 outward']),
      mc('n', 'm', 'To compare two numbers on a number line, the greater one is the one located…', ['to the right of the other', 'to the left of the other', 'closer to 0', 'farther from 0']),
      tf(10, 'e', 'On a horizontal number line, the number to the left is the greater.', false),
      term('n', 'e', 'Ordering numbers from the least to the greatest.', 'Ascending'),
      term('n', 'e', 'Ordering numbers from the greatest to the least.', 'Descending')
    ] },
  { id: 'H2', lesson: 4, concept: 'Comparing rational numbers in different forms',
    explain: 'To compare rational numbers, write them in the same form, for example as decimals: ' + n('−3 1/4 = −3.25') + ', ' + n('−2 1/2 = −2.5') + ', ' + n('−1 7/8 = −1.875') + '. For negative numbers, the one farther from 0 is the smaller: ' + n('−3.25 < −2.5 < −1.875') + '.',
    variants: [
      mc('n', 'm', 'Which is greater: ' + n('−3 1/4') + ' or ' + n('−2 1/2') + '?', [n('−2 1/2'), n('−3 1/4'), 'They are equal', 'We cannot tell']),
      mc('n', 'm', 'Which is the least of ' + n('2.1, 1.4, −3 1/4, −1 7/8, −2 1/2') + '?', [n('−3 1/4'), n('−2 1/2'), n('−1 7/8'), n('1.4')]),
      mc('n', 'm', 'Which is the greatest of ' + n('2.1, 1.4, −3 1/4, −1 7/8, −2 1/2') + '?', [n('2.1'), n('1.4'), n('−1 7/8'), n('−2 1/2')]),
      mc('n', 'm', n('−1 7/8') + ' as a decimal is…', [n('−1.875'), n('−1.78'), n('−1.7'), n('−1.125')]),
      mc('n', 'm', n('−2 1/2') + ' as a decimal is…', [n('−2.5'), n('−2.12'), n('−2.2'), n('−1.5')]),
      mc('n', 'm', n('−3 1/4') + ' as a decimal is…', [n('−3.25'), n('−3.14'), n('−3.4'), n('−3.75')]),
      tf(12, 'm', n('−1 7/8') + ' is less than ' + n('−2 1/2') + '.', false)
    ] },
  { id: 'H3', lesson: 4, concept: 'Ordering a set of rational numbers',
    explain: 'Ascending order of ' + n('2.1, 1.4, −3 1/4, −1 7/8, −2 1/2') + ' is ' + n('−3 1/4, −2 1/2, −1 7/8, 1.4, 2.1') + '. Descending order is the same list reversed.',
    variants: [
      order('n', 'm', 'Order the numbers from the least to the greatest.', [n('2.1'), n('1.4'), n('−3 1/4'), n('−1 7/8'), n('−2 1/2')], [2, 4, 3, 1, 0]),
      order('n', 'm', 'Order the numbers from the greatest to the least.', [n('2.1'), n('1.4'), n('−3 1/4'), n('−1 7/8'), n('−2 1/2')], [0, 1, 3, 4, 2]),
      order('n', 'h', 'Order the numbers from the least to the greatest.', [n('0.5'), n('−0.75'), n('1/4'), n('−1/2'), n('3/4')], [1, 3, 2, 0, 4]),
      mc('n', 'm', 'Which list is in order from the least to the greatest?', [n('−3 1/4, −2 1/2, −1 7/8, 1.4, 2.1'), n('2.1, 1.4, −1 7/8, −2 1/2, −3 1/4'), n('−1 7/8, −2 1/2, −3 1/4, 1.4, 2.1'), n('1.4, 2.1, −1 7/8, −2 1/2, −3 1/4')])
    ] },
  { id: 'H4', lesson: 4, concept: 'Numbers between two numbers',
    explain: 'There are always numbers between two different rational numbers. Between ' + n('3.75') + ' and ' + n('3.76') + ' is ' + n('3.755') + '; between ' + n('−9.1') + ' and ' + n('−9') + ' is ' + n('−9.05') + '; between ' + n('−3/4') + ' and ' + n('−1/2') + ' is ' + n('−5/8') + '; between ' + n('1/9') + ' and ' + n('2/9') + ' is ' + n('1/6') + '.',
    variants: [
      mc('n', 'm', 'Which number is between ' + n('3.75') + ' and ' + n('3.76') + '?', [n('3.755'), n('3.77'), n('3.7'), n('3.76')]),
      mc('n', 'm', 'Which number is between ' + n('−9.1') + ' and ' + n('−9') + '?', [n('−9.05'), n('−9.2'), n('−8.9'), n('−9.1')]),
      mc('n', 'h', 'Which number is between ' + n('−3/4') + ' and ' + n('−1/2') + '?', [n('−5/8'), n('−7/8'), n('−1/4'), n('−3/4')]),
      mc('n', 'h', 'Which number is between ' + n('1/9') + ' and ' + n('2/9') + '?', [n('1/6'), n('1/3'), n('1/18'), n('2/9')]),
      tf(12, 'm', 'There is always another rational number between two different rational numbers.', true)
    ] },
  { id: 'H5', lesson: 4, concept: 'Real situations as rational numbers',
    explain: 'Real situations can be written as rational numbers and ordered: temperatures below zero, heights below sea level and money owed are negative; the least is the one farthest to the left.',
    variants: [
      mc('n', 'm', 'Which temperature is the lowest?', [n('−3 1/4 °C'), n('−2 1/2 °C'), n('−1 7/8 °C'), n('1.4 °C')]),
      mc('n', 'm', 'Which place is the highest?', [n('2.1 m above sea level'), n('1.4 m above sea level'), n('1 7/8 m below sea level'), n('3 1/4 m below sea level')]),
      mc('n', 'm', 'Which is the best way to compare ' + n('−1 7/8') + ' and ' + n('−2.5') + '?', ['Write both as decimals and compare them on a number line', 'Compare only the whole numbers 1 and 2', 'Always choose the number with more digits', 'Compare the denominators only']),
      tf(12, 'm', 'A decimal with more digits is always the greater number.', false)
    ] },
  { id: 'H6', lesson: 4, boss: true, concept: 'Comparing and ordering: the whole idea',
    explain: 'Write the numbers in one form, place them on a number line and read from left to right: ' + n('−0.75 < −1/2 < 1/4 < 0.5 < 3/4') + '. ' + n('−2') + ' lies between ' + n('−2 1/2') + ' and ' + n('−1 7/8') + '.',
    variants: [
      mc('b', 'h', 'Which list is in order from the GREATEST to the least?', [n('3/4, 0.5, 1/4, −1/2, −0.75'), n('−0.75, −1/2, 1/4, 0.5, 3/4'), n('0.5, 3/4, 1/4, −1/2, −0.75'), n('3/4, 1/4, 0.5, −1/2, −0.75')]),
      mc('b', 'h', 'Which number is between ' + n('−2 1/2') + ' and ' + n('−1 7/8') + '?', [n('−2'), n('−3'), n('−1 3/4'), n('−2 3/4')]),
      mc('b', 'h', 'Which is the least of ' + n('−0.3, −3/4, −1/2, 0') + '?', [n('−3/4'), n('−1/2'), n('−0.3'), n('0')]),
      mc('b', 'h', 'Which statement is true?', [n('−2.5 < −1 7/8'), n('−2.5 > −1 7/8'), n('2.1 < 1.4'), n('−3 1/4 > −2 1/2')]),
      tf('b', 'h', 'The more digits a decimal has, the greater it is.', false)
    ] },

  /* ---------- Lesson 5 · Exploring Absolute Value (pages 28-30) ---------- */
  { id: 'I1', lesson: 5, concept: 'Distance and direction: dives and jumps',
    explain: 'A fish dives 3, 2 and 4 meters below the water and jumps 3, 2 and 4 meters above it. The water level is 0. If dives are written as negative integers (−3, −2, −4) and jumps as positive (3, 2, 4), a dive and a jump of the same size are the same distance from 0, on opposite sides.',
    variants: [
      mc(14, 'e', 'In the fish table, what does the water level 0 stand for?', ['The surface of the water', 'The deepest dive', 'The highest jump', 'The tour guide']),
      mc('n', 'm', 'A dive of 3 meters and a jump of 3 meters are…', ['the same distance from the water level, in opposite directions', 'different distances from the water level', 'both below the water level', 'both above the water level']),
      mc('n', 'm', 'With the water level at 0, a dive of 3 meters can be written as…', [n('−3'), n('3'), n('0'), n('−0.3')]),
      mc('n', 'm', 'With the water level at 0, a jump of 4 meters can be written as…', [n('4'), n('−4'), n('0'), n('1/4')]),
      tf(12, 'm', 'A fish dives 2 meters and another jumps 2 meters. Both are 2 units from 0 on a number line.', true)
    ] },
  { id: 'I2', lesson: 5, concept: 'Time on a number line',
    explain: 'Meeting at 2:30 p.m. Let 0 stand for the meeting time. You arrive at 2:25, 5 minutes early: ' + n('−5') + '. Your friend arrives at 2:35, 5 minutes late: ' + n('5') + '. Both points are 5 units from 0.',
    variants: [
      mc('n', 'm', 'Zero stands for the meeting time, 2:30. Your arrival at 2:25 is represented as…', [n('−5'), n('5'), n('0'), n('25')]),
      mc('n', 'm', 'Zero stands for the meeting time, 2:30. Your friend\'s arrival at 2:35 is represented as…', [n('5'), n('−5'), n('35'), n('0')]),
      multi('n', 'h', 'Zero stands for the meeting time. You arrive at 2:25 and your friend at 2:35. Which statements are true? Choose ALL.', ['Your arrival can be represented as −5', 'Your arrival can be represented as 5', 'Your arrival can be represented as a point 5 units from 0', 'Your friend\'s arrival can be represented as −5', 'Your friend\'s arrival can be represented as 5', 'Your friend\'s arrival can be represented as a point 5 units from 0'], [0, 2, 4, 5]),
      mc('n', 'm', 'You are 5 minutes early and your friend is 5 minutes late. Their points on the number line are…', ['the same distance from 0, on opposite sides', 'at the same point', 'both to the right of 0', 'both to the left of 0'])
    ] },
  { id: 'I3', lesson: 5, concept: 'Absolute value: the distance from zero',
    explain: 'The absolute value of a number is its distance from 0 on the number line, and it is always positive or zero. It is written with two bars: ' + n('|−2| = 2') + ' and ' + n('|2| = 2') + '. So ' + n('|−3| = 3 = |3|') + '.',
    variants: [
      term('n', 'm', 'The distance between a number and zero on the number line.', 'Absolute value'),
      mc(14, 'e', n('|−2| ='), [n('2'), n('−2'), n('0'), n('1/2')]),
      mc(12, 'e', n('|5| ='), [n('5'), n('−5'), n('0'), n('1/5')]),
      num(12, 'e', n('|−8| ='), 8, '8'),
      num(12, 'e', n('|0| ='), 0, '0'),
      mc('n', 'e', 'Which symbol is used for absolute value?', [n('| |'), n('( )'), n('[ ]'), n('{ }')]),
      tf(10, 'e', 'The absolute value of a number is never negative.', true),
      tf(10, 'e', n('|−3| = 3 = |3|') + '.', true),
      fill(14, 'e', 'The absolute value of a number is its distance from ___ on a number line.', ['0', '1', '−1']),
      mc('n', 'm', 'The brackets show the distance of −2 and 2 from 0. What is ' + n('|−2|') + '?', [n('2'), n('−2'), n('0'), n('4')], { fig: 'numLine6', pic: { min: -3, max: 3, pts: [{ v: -2, l: 'A' }, { v: 2, l: 'B' }], arcs: [{ a: 0, b: -2, t: '?' }, { a: 0, b: 2, t: '?' }] } })
    ] },
  { id: 'I4', lesson: 5, concept: 'Game tokens: distance from zero',
    explain: 'The brothers\' ending token counts: Saleh ' + n('10') + ', Omar ' + n('−8') + ', Nour ' + n('−2') + ', Tarek ' + n('8') + '. Saleh is the farthest from 0 (10 units); Omar and Tarek are both 8 units from 0; Nour is the closest (2 units). A negative count means the brother borrowed tokens.',
    variants: [
      mc('n', 'm', 'Ending tokens: Saleh 10, Omar −8, Nour −2, Tarek 8. Who is the farthest from 0?', ['Saleh', 'Omar', 'Nour', 'Tarek']),
      mc('n', 'm', 'Which two brothers are the same distance from 0?', ['Omar and Tarek', 'Saleh and Nour', 'Saleh and Tarek', 'Omar and Nour']),
      num(14, 'e', 'How far from 0 is Omar, who ended with −8 tokens?', 8, '8'),
      mc('n', 'm', 'Omar ended with −8 tokens. What does it mean?', ['He had to borrow 8 tokens', 'He had 8 tokens', 'He had 80 tokens', 'He won 8 tokens']),
      mc('n', 'm', 'Who is the closest to 0?', ['Nour (−2)', 'Omar (−8)', 'Tarek (8)', 'Saleh (10)']),
      table('n', 'm', 'Sort the brothers by their ending token count.', ['Positive', 'Negative'], ['Saleh (10)', 'Omar (−8)', 'Nour (−2)', 'Tarek (8)'], [0, 1, 1, 0], 'Brother')
    ] },
  { id: 'I5', lesson: 5, concept: 'Absolute value strategies',
    explain: 'Opposites have the same absolute value. The smaller the absolute value, the closer the number is to zero; the larger the absolute value, the farther it is. −9 has the greatest absolute value among −9, 4, −2 and 7, and −2 is the closest to 0.',
    variants: [
      multi('n', 'h', 'Which statements are true? Choose ALL.', ['If numbers are opposites on the number line, they have the same absolute value', 'The smaller the absolute value, the closer the number is to zero', 'The larger the absolute value, the closer the number is to zero'], [0, 1]),
      tf(10, 'e', 'The larger the absolute value, the closer the number is to zero.', false),
      tf(10, 'e', 'Opposites have the same absolute value.', true),
      mc('n', 'm', 'Which number has the greatest absolute value?', [n('−9'), n('4'), n('−2'), n('7')]),
      mc('n', 'm', 'Which number is the closest to zero?', [n('−2'), n('−9'), n('4'), n('7')])
    ] },
  { id: 'I6', lesson: 5, boss: true, concept: 'Absolute value: the whole idea',
    explain: 'Two numbers have the same absolute value when they are the same distance from 0, so a nonzero absolute value belongs to two numbers: the number and its opposite. ' + n('|−12| + |5| = 12 + 5 = 17') + '.',
    variants: [
      mc('b', 'h', 'Which numbers have an absolute value of 6?', [n('6 and −6'), n('only 6'), n('only −6'), n('0 and 6')]),
      num('b', 'h', n('|−12| + |5| ='), 17, '12+5'),
      mc('b', 'h', 'Which statement is true?', [n('|−7| = |7|'), n('|−7| = −7'), n('|7| = −7'), n('|−7| < 0')]),
      mc('b', 'h', 'Two numbers have the same absolute value but are not equal. They are…', ['opposites', 'both zero', 'both positive', 'both fractions']),
      num('b', 'h', 'A point is 9 units from 0 on a number line. How many different numbers could it be?', 2, '1+1')
    ] },

  /* ---------- Lesson 6 · Comparing Absolute Values (pages 31-33) ---------- */
  { id: 'J1', lesson: 6, concept: 'Comparing absolute values',
    explain: n('|−4| > |−3|') + ' (4 > 3). ' + n('|−8.2| > −7.9') + ' (8.2 > −7.9). ' + n('−1.4 < |−1.4|') + ' (−1.4 < 1.4). ' + n('5 5/6 = |−35/6|') + ' (35/6 = 5 5/6). ' + n('|9 3/5| < |−9 3/4|') + ' (9.6 < 9.75). ' + n('|−2.71| > 2.7') + '.',
    variants: [
      sym('n', 'm', 'Which symbol makes the statement true? ' + n('|−4| ___ |−3|'), '>'),
      sym('n', 'm', 'Which symbol makes the statement true? ' + n('|−8.2| ___ −7.9'), '>'),
      sym('n', 'm', 'Which symbol makes the statement true? ' + n('−1.4 ___ |−1.4|'), '<'),
      sym('n', 'h', 'Which symbol makes the statement true? ' + n('5 5/6 ___ |−35/6|'), '='),
      sym('n', 'h', 'Which symbol makes the statement true? ' + n('|9 3/5| ___ |−9 3/4|'), '<'),
      sym('n', 'm', 'Which symbol makes the statement true? ' + n('|−2.71| ___ 2.7'), '>'),
      sym(14, 'e', 'Which symbol makes the statement true? ' + n('|−6| ___ |6|'), '=')
    ] },
  { id: 'J2', lesson: 6, concept: 'The meaning of the symbols in |2| = |−2|',
    explain: 'In ' + n('|2| = |−2|') + ' the absolute value symbol shows the distance from 0 to the number (to 2, to −2); the equals sign shows that both sides are the same distance from 0.',
    variants: [
      mc('n', 'm', 'In ' + n('|2| = |−2|') + ', what does the symbol | | show?', ['The distance from 0 to the number', 'The direction from 0', 'That the number is negative', 'That the number is positive']),
      mc('n', 'm', 'What does the equals sign in ' + n('|2| = |−2|') + ' tell us?', ['2 and −2 are the same distance from 0', '2 and −2 are the same number', '2 and −2 are both negative', '2 and −2 are in the same direction']),
      fill(14, 'e', 'In ' + n('|2| = |−2|') + ', both numbers are the same ___ from 0.', ['distance', 'direction', 'sign'])
    ] },
  { id: 'J3', lesson: 6, concept: 'Absolute values are never negative',
    explain: 'An absolute value is a distance, so it is never negative. Absolute values of opposites are equal. The farther a number is from zero, the greater its absolute value; the smaller the absolute value, the closer the number is to zero. A negative number with an absolute value greater than 16 is less than −16, for example −20.',
    variants: [
      tf(10, 'e', 'Mouataz says that absolute values are never negative. He is correct.', true),
      mc('n', 'm', 'Why can an absolute value never be negative?', ['It is a distance, and a distance cannot be negative', 'It is always a fraction', 'It is always greater than 1', 'It is always an integer']),
      mc('n', 'm', 'Which could be a negative number with an absolute value greater than 16?', [n('−20'), n('−10'), n('−16'), n('−15')]),
      mc(14, 'e', 'The absolute values of opposites are…', ['equal', 'opposites', 'negative', 'zero']),
      fill(14, 'e', 'The farther a number is from zero, the ___ its absolute value.', ['greater', 'smaller', 'negative']),
      fill(14, 'e', 'The smaller the absolute value, the ___ the number is to zero.', ['closer', 'farther', 'equal'])
    ] },
  { id: 'J4', lesson: 6, concept: 'Comparing money you owe',
    explain: 'You borrowed 6.50 LE from Naglaa and 3.25 LE from Rawan. The money owed is compared by its absolute value: 6.50 > 3.25, so you owe Naglaa more. Rawan\'s claim "−3.25 > 6.50" is false, because −3.25 is less than 6.50.',
    variants: [
      mc('n', 'h', 'You borrowed 6.50 LE from Naglaa and 3.25 LE from Rawan. Rawan says "−3.25 > 6.50, so you owe me more". Is she correct?', ['No, you owe Naglaa more because 6.50 is greater than 3.25', 'Yes, because −3.25 is greater', 'Yes, because it is negative', 'No, you owe both the same']),
      mc('n', 'm', 'Which comparison is true?', [n('−3.25 < 6.50'), n('−3.25 > 6.50'), n('−3.25 = 6.50'), n('|−3.25| > 6.50')]),
      mc('n', 'm', 'To compare how much money you owe, we compare…', ['the absolute values (the amounts)', 'only the signs', 'the numbers with their signs', 'the number of friends']),
      num('n', 'm', 'How many LE did you borrow in all? (6.50 LE and 3.25 LE)', 9.75, '6.5+3.25')
    ] },
  { id: 'J5', lesson: 6, concept: 'Greater number or colder temperature',
    explain: 'Freezer A is −17 °C and Freezer B is −33 °C. The greater number is −17, but the colder temperature is −33, because it is farther below zero (its absolute value is greater). Likewise −22 °C < −5 °C, a lake at −16 m is farther below sea level than one at −6 m, and −4.8 > −4.88.',
    variants: [
      mc('n', 'm', 'Freezer A is −17 °C and Freezer B is −33 °C. Which number is greater?', [n('−17'), n('−33'), 'They are equal', 'We cannot tell']),
      mc('n', 'm', 'Freezer A is −17 °C and Freezer B is −33 °C. Which freezer is colder?', ['Freezer B', 'Freezer A', 'Both are the same', 'We cannot tell']),
      mc('n', 'h', 'Why is −33 °C colder than −17 °C?', ['Because −33 is farther below zero (its absolute value is greater)', 'Because 33 is less than 17', 'Because −33 is greater than −17', 'Because it is above zero']),
      mc('n', 'm', 'It is −5 °C in Freezer A and −22 °C in Freezer B. Which freezer has the lower temperature?', ['Freezer B, because −22 < −5', 'Freezer A, because −5 < −22', 'Freezer A, because −5 > −22', 'Both are the same']),
      mc('n', 'm', 'Lake A is at −16 m and Lake B is at −6 m. Which lake is farther below sea level?', ['Lake A', 'Lake B', 'They are the same', 'We cannot tell']),
      mc('n', 'm', 'Which comparison of −4.88 and −4.8 is correct?', [n('−4.8 > −4.88'), n('−4.8 < −4.88'), n('−4.8 = −4.88'), n('4.8 > 4.88')]),
      mc('n', 'h', 'For negative numbers, a greater absolute value means…', ['a smaller number', 'a greater number', 'the same number', 'a positive number'])
    ] },
  { id: 'J6', lesson: 6, concept: 'Ordering positional distances from sea level',
    explain: 'The ponds\' positions in meters: A ' + n('−28') + ', B ' + n('−430') + ', C ' + n('33') + ', D ' + n('89') + ', E ' + n('−214') + '. Order by distance from sea level (absolute value): A (28), C (33), D (89), E (214), B (430).',
    variants: [
      order('n', 'h', 'Order the ponds from the closest to sea level to the farthest from sea level.', ['Pond A (−28 m)', 'Pond B (−430 m)', 'Pond C (33 m)', 'Pond D (89 m)', 'Pond E (−214 m)'], [0, 2, 3, 4, 1]),
      mc('n', 'm', 'Which pond is the closest to sea level?', ['Pond A (−28 m)', 'Pond C (33 m)', 'Pond D (89 m)', 'Pond B (−430 m)']),
      mc('n', 'm', 'Which pond is the farthest from sea level?', ['Pond B (−430 m)', 'Pond D (89 m)', 'Pond E (−214 m)', 'Pond A (−28 m)']),
      num(14, 'e', 'Pond E is at −214 m. How many meters is it from sea level?', 214, '214'),
      multi('n', 'm', 'Which ponds are ABOVE sea level? Choose ALL.', ['Pond C (33 m)', 'Pond D (89 m)', 'Pond A (−28 m)', 'Pond B (−430 m)', 'Pond E (−214 m)'], [0, 1])
    ] },
  { id: 'J7', lesson: 6, boss: true, concept: 'Number or absolute value? Choosing the comparison',
    explain: 'Comparing numbers and comparing absolute values answer different questions. ' + n('−5 < −3') + ' but ' + n('|−5| > |−3|') + '. Owing 20 LE (−20) is more debt than owing 15 LE (−15) even though −15 is the greater number.',
    variants: [
      mc('b', 'h', 'Which statement is true?', [n('|−5| > |−3| but −5 < −3'), n('|−5| < |−3| and −5 > −3'), n('|−5| = |−3|'), n('−5 > −3 and |−5| > |−3|')]),
      mc('b', 'h', 'Which list is in order from the least to the greatest ABSOLUTE value?', [n('−1, 2, −3, 5'), n('−3, −1, 2, 5'), n('5, −3, 2, −1'), n('2, −1, 5, −3')]),
      mc('b', 'h', 'You owe 15 LE to Ali (−15) and 20 LE to Sara (−20). Which is correct?', ['−15 is the greater number, but you owe Sara more', '−20 is the greater number, so you owe Sara more', '−15 is the greater number, so you owe Ali more', 'The two debts are the same']),
      sym('b', 'h', 'Which symbol makes the statement true? ' + n('|−4.5| ___ |4.5|'), '='),
      mc('b', 'h', 'The absolute value of a negative number is…', ['positive', 'negative', 'zero', 'less than the number'])
    ] }
];
})();
