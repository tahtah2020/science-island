/* Grade 3 · Mathematics (Languages track) · Chapter 5 "Length", Term 1 2026/2027
   Source: Ministry book "Primary 3 Mathematics, Term 1" (English), Chapter 5 (pages 54–61): lessons 5-1 and 5-2 and "Review and Practice".
   Follows questions_mg3u5_ar.js phrasing by phrasing (same ids, types, levels and answers; check_questions checks the parity).
   Idea letters: Q lesson 1, R lesson 2. Boss ideas: Q6, R5.
   Owner (6 Nov 2026): easy first, slow rise, few hard questions (Boss only), a hint on every phrasing that never gives the answer.
   Answers with two units ("3 m 15 cm", "1 km,670 m") are choices; one-number answers are typed on the pad.
   Wrong choices are real slips: reading the tape on the wrong side of the metre mark (12 m 87 cm for 11 m 87 cm), a lost zero (1,010 m = 1 km,100 m).
   Pictures drawn in code (math/g3_art.js): a piece of measuring tape with an arrow (g3Measure) and the book's small map (g3Map).
   Book words: measuring tape, kilometer (km), "km and m", Distance (the length measured along a path), Shortest distance (in a straight line).
   Review notes:
   - The tape readings of the exercises are not fully clear in the book's pictures; the example readings (3 m 15 cm, 11 m 87 cm) and readings close to the exercises are used.
   - "Write the missing unit" answers are printed for the Warm Up only (km, m, mm); the rest follow the same reasoning.
   - The book's Warm Up says the classroom is 8 wide but "How to Solve" prints 6 m; the unit (m) is what is asked. */
(function () {
window.CHAPTER = { id: 'mg3u5', title: 'Length', grade: 'Grade 3', track: 'Languages' };

const num = (level, q, answer, calc, hint, extra = {}) => Object.assign({ type: 'num', mode: 'normal', level, q, answer: String(answer), calc, hint }, extra);
const timed = (level, q, answer, calc, hint, extra = {}) => Object.assign(num(level, q, answer, calc, hint, extra), { mode: 'timed', seconds: 20 });
const mc = (level, q, options, hint, extra = {}) => Object.assign({ type: 'mc', mode: 'normal', level, q, options, answer: 0, hint }, extra);
const tf = (level, q, answer, hint, extra = {}) => Object.assign({ type: 'tf', mode: 'normal', level, q, answer, hint }, extra);
const asBoss = v => Object.assign(v, { mode: 'boss', level: 'hard' });
const c = x => x.toLocaleString('en-US');
const mcm = (m, cm) => `${m} m ${cm} cm`;
const kmm = (k, m) => `${k} km,${m} m`;
/* read the tape: the arrow at m metres and c centimetres */
const tape = (level, m, cm, from, to, wrong) => mc(level, 'Read the length shown by the arrow.', [mcm(m, cm)].concat(wrong.map(([a, b]) => mcm(a, b))),
  'Find the metre mark (m) first: is the arrow to its right or to its left? Then count the centimetres from the nearest written number.',
  { fig: 'g3Measure', pic: { from, to, at: m * 100 + cm }, explain: `The arrow is at ${mcm(m, cm)}.` });
const UNITS = ['mm', 'cm', 'm', 'km'];
const unitQ = (level, what, v, right) => mc(level, `Choose the right unit of length:\n${what} → ${v} ...`, [right].concat(UNITS.filter(u => u !== right)),
  'Picture the thing: is it very thin (mm), as long as a pen (cm), as long as a room (m), or a long way you walk (km)?', { explain: `${what}: ${v} ${right}.` });
const map = (a, b, l1, l2, d, ia, ib) => ({ fig: 'g3Map', pic: { a, b, l1, l2, d, ia, ib } });
const ROAD = 'Distance is measured along the path: add the two parts of the road (not the straight line).';
const DIFF = 'Find the Distance along the road first (add the two parts), then subtract the Shortest distance (the straight line).';

window.IDEAS = [
  /* ---------- Lesson 1 · Longer Units of Length (pp. 54–55) ---------- */
  { id: 'Q1', lesson: 1, concept: 'The measuring tape and the kilometer', explain: 'Use a measuring tape to measure the length of long objects or the distance around round objects; the smallest mark on it shows 1 cm. A kilometer is a unit for long distances, and we write it as km: 1 km = 1,000 m.',
    variants: [
      timed('easy', '1 km = ? m', 1000, '1000', '"Kilo" means a thousand.', { unit: 'm', explain: '1 km = 1,000 m.' }),
      tf('easy', 'The smallest mark on the measuring tape shows 1 cm.', 0, 'Look at the space between two small marks next to each other.', { explain: 'True.' }),
      mc('easy', 'We use the kilometer (km) to measure:', ['long distances', 'the length of a pen', 'the thickness of a notebook', 'the width of the blackboard'], '1 km = 1,000 metres, so it is a very big unit.', { explain: 'A kilometer is a unit for long distances.' }),
      mc('easy', 'We use a measuring tape to measure:', ['long objects or the distance around round objects', 'the thickness of one sheet of paper', 'the distance between two cities', 'how heavy things are'], 'A measuring tape is long and can go around things.', { explain: 'The length of long objects or the distance around round objects.' })
    ] },
  { id: 'Q2', lesson: 1, concept: 'Reading the measuring tape', explain: 'Find the metre mark, then count the centimetres. Example: the arrow at the 15th mark to the right of 3 m: 3 m 15 cm. The arrow at the 87th mark to the left of 12 m: 11 m 87 cm.',
    variants: [
      tape('easy', 3, 15, 290, 330, [[3, 25], [2, 15], [3, 5]]),
      tape('easy', 4, 25, 395, 435, [[4, 35], [3, 25], [4, 20]]),
      tape('medium', 11, 87, 1175, 1215, [[12, 87], [12, 13], [11, 77]]),
      tape('medium', 12, 94, 1285, 1325, [[13, 94], [13, 6], [12, 84]]),
      tape('medium', 4, 92, 485, 525, [[5, 92], [5, 8], [4, 82]])
    ] },
  { id: 'Q3', lesson: 1, concept: 'From kilometers to metres', explain: 'Every 1 km = 1,000 m: 2 km = 2,000 m, 4 km = 4,000 m.',
    variants: [
      num('easy', '2 km = ? m', 2000, '2*1000', '1 km = 1,000 m. How many metres in 2 km?', { unit: 'm', explain: '2 km = 2,000 m.' }),
      num('easy', '4 km = ? m', 4000, '4*1000', '1 km = 1,000 m. How many metres in 4 km?', { unit: 'm', explain: '4 km = 4,000 m.' }),
      num('easy', '3 km = ? m', 3000, '3*1000', '1 km = 1,000 m. How many metres in 3 km?', { unit: 'm', explain: '3 km = 3,000 m.' }),
      num('easy', '8 km = ? m', 8000, '8*1000', '1 km = 1,000 m. How many metres in 8 km?', { unit: 'm', explain: '8 km = 8,000 m.' })
    ] },
  { id: 'Q4', lesson: 1, concept: 'From km and m to metres', explain: 'We change the kilometer to 1,000 m, then add the metres: 1 km,50 m = 1,000 m + 50 m = 1,050 m.',
    variants: [
      num('medium', '1 km,50 m = ? m', 1050, '1000+50', '1 km = 1,000 m, then add 50.', { unit: 'm', explain: '1,000 + 50 = 1,050 m.' }),
      num('medium', '1 km,370 m = ? m', 1370, '1000+370', '1 km = 1,000 m, then add 370.', { unit: 'm', explain: '1,000 + 370 = 1,370 m.' }),
      num('medium', '1 km,930 m = ? m', 1930, '1000+930', '1 km = 1,000 m, then add 930.', { unit: 'm', explain: '1,000 + 930 = 1,930 m.' }),
      num('medium', '1 km,80 m = ? m', 1080, '1000+80', '1 km = 1,000 m, then add 80. Watch the hundreds place.', { unit: 'm', explain: '1,000 + 80 = 1,080 m.' }),
      num('medium', '2 km,40 m = ? m', 2040, '2000+40', '2 km = 2,000 m, then add 40.', { unit: 'm', explain: '2,000 + 40 = 2,040 m.' }),
      num('medium', '1 km,720 m = ? m', 1720, '1000+720', '1 km = 1,000 m, then add 720.', { unit: 'm', explain: '1,000 + 720 = 1,720 m.' })
    ] },
  { id: 'Q5', lesson: 1, concept: 'From metres to km and m', explain: 'Every 1,000 m makes a kilometer, and the rest are metres: 1,230 m = 1,000 m + 230 m = 1 km,230 m.',
    variants: [
      num('medium', '1,230 m = 1 km, ? m', 230, '1230-1000', 'Take away 1,000 m (1 km); the rest are metres.', { unit: 'm', explain: '1,230 − 1,000 = 230: 1 km,230 m.' }),
      num('medium', '1,080 m = 1 km, ? m', 80, '1080-1000', 'Take away 1,000 m (1 km); the rest are metres.', { unit: 'm', explain: '1,080 − 1,000 = 80: 1 km,80 m.' }),
      num('medium', '1,600 m = 1 km, ? m', 600, '1600-1000', 'Take away 1,000 m (1 km); the rest are metres.', { unit: 'm', explain: '1,600 − 1,000 = 600: 1 km,600 m.' }),
      num('medium', '3,760 m = ? km,760 m', 3, '(3760-760)/1000', 'How many thousands are in 3,760? Every 1,000 m = 1 km.', { unit: 'km', explain: '3,760 m = 3,000 m + 760 m = 3 km,760 m.' }),
      num('medium', '2,450 m = 2 km, ? m', 450, '2450-2000', 'Take away 2,000 m (2 km); the rest are metres.', { unit: 'm', explain: '2,450 − 2,000 = 450: 2 km,450 m.' })
    ] },
  { id: 'Q6', lesson: 1, boss: true, concept: 'Challenge: watch the zeros', explain: 'The thousands become kilometers and the rest are metres; watch the zeros: 1,010 m = 1 km,10 m (not 100 m).',
    variants: [
      asBoss(mc('hard', '1,010 m = ?', [kmm(1, 10), kmm(1, 100), kmm(10, 10), '101 km'], 'Take away 1,000 m and look at exactly how much is left.', { explain: '1,010 − 1,000 = 10: 1 km,10 m.' })),
      asBoss(mc('hard', '4,950 m = ?', [kmm(4, 950), kmm(49, 50), kmm(4, 95), kmm(9, 450)], 'How many thousands are in 4,950? The rest are metres.', { explain: '4,950 m = 4,000 m + 950 m = 4 km,950 m.' })),
      asBoss(mc('hard', '8,520 m = ?', [kmm(8, 520), kmm(85, 20), kmm(8, 52), kmm(5, 820)], 'How many thousands are in 8,520? The rest are metres.', { explain: '8,520 m = 8,000 m + 520 m = 8 km,520 m.' })),
      asBoss(mc('hard', '1 km,70 m = ?', ['1,070 m', '170 m', '1,700 m', '17 m'], '1 km = 1,000 m, then add 70. How many digits are in the answer?', { explain: '1,000 + 70 = 1,070 m.' }))
    ] },

  /* ---------- Lesson 2 · Distance and Shortest Distance (pp. 56–59) ---------- */
  { id: 'R1', lesson: 2, concept: 'Distance and Shortest distance', explain: 'The units of length, from smallest to largest, are mm, cm, m, km. The length measured along a path is called the Distance; the length measured in a straight line is called the Shortest distance.',
    variants: [
      mc('easy', 'Order the units of length from smallest to largest:', ['mm, cm, m, km', 'km, m, cm, mm', 'cm, mm, m, km', 'mm, m, cm, km'], 'The smallest is the millimetre, the largest the kilometer.', { explain: 'mm, cm, m, km.' }),
      mc('easy', 'The length measured along a path (a road) is called the:', ['Distance', 'Shortest distance', 'thickness', 'height'], 'We walk along the road as it is, with its corner.', { explain: 'The length along a path = the Distance.' }),
      mc('easy', 'The length measured in a straight line is called the:', ['Shortest distance', 'Distance', 'width', 'thickness'], 'A straight line is the shortest way between two points.', { explain: 'The length in a straight line = the Shortest distance.' }),
      tf('easy', 'The kilometer is the largest unit of length we have learnt.', 0, 'Order them: mm, cm, m, ... What is the last one?', { explain: 'True: mm, cm, m, km.' })
    ] },
  { id: 'R2', lesson: 2, concept: 'The right unit of length', explain: 'We choose the unit that fits the thing: mm for very thin things, cm for small things, m for rooms and hallways, km for long roads.',
    variants: [
      unitQ('easy', 'The Shortest distance you can walk in 30 minutes', 2, 'km'), unitQ('easy', 'The width of the classroom', 8, 'm'), unitQ('easy', 'The thickness of a math notebook', 5, 'mm'), unitQ('easy', 'The length of a pen', 15, 'cm'),
      unitQ('medium', 'The Distance walked on the field trip', 6, 'km'), unitQ('medium', 'The width of the blackboard', 4, 'm'), unitQ('medium', 'The thickness of the coin', 2, 'mm'), unitQ('medium', 'The length of the hallway', 15, 'm'),
      unitQ('medium', 'The width of the desk', 60, 'cm'), unitQ('medium', 'The height of the desk', 75, 'cm'), unitQ('medium', 'The thickness of a picture book', 9, 'mm'), unitQ('medium', 'The route of a marathon course', 2, 'km'), unitQ('medium', 'The length of the pool', 25, 'm'), unitQ('medium', 'The length of a ballpoint pen', 13, 'cm')
    ] },
  { id: 'R3', lesson: 2, concept: 'Finding the Distance on a map', explain: 'The Distance is the length measured along the path, so we add the lengths of the parts of the road: 700 + 970 = 1,670 m.',
    variants: [
      num('medium', 'Look at the map.\nWhat is the Distance from the Department Store to the Park in m?', 1670, '700+970', ROAD, Object.assign(map('Department Store', 'Park', 700, 970, 1200, 'mall', 'park'), { unit: 'm', explain: '700 + 970 = 1,670 m.' })),
      num('medium', 'Look at the map.\nWhat is the Distance from Dina’s house to the School in m?', 1250, '700+550', ROAD, Object.assign(map('Dina’s house', 'School', 700, 550, 1100, 'house', 'school'), { unit: 'm', explain: '700 + 550 = 1,250 m.' })),
      num('medium', 'Look at the map.\nWhat is the Distance from Reem’s house to the Park in m?', 1150, '700+450', ROAD, Object.assign(map('Reem’s house', 'Park', 700, 450, 920, 'house', 'park'), { unit: 'm', explain: '700 + 450 = 1,150 m.' })),
      num('medium', 'Look at the map.\nWhat is the Distance from Omar’s house to the Park in m?', 1520, '600+920', ROAD, Object.assign(map('Omar’s house', 'Park', 600, 920, 1200, 'house2', 'park'), { unit: 'm', explain: '600 + 920 = 1,520 m.' })),
      num('medium', 'Look at the map.\nWhat is the Distance from Reem’s house to the Park in m?', 1200, '730+470', ROAD, Object.assign(map('Reem’s house', 'Park', 730, 470, 960, 'house', 'park'), { unit: 'm', explain: '730 + 470 = 1,200 m.' }))
    ] },
  { id: 'R4', lesson: 2, concept: 'The Distance in km and m', explain: 'We change the Distance: 1,670 m = 1,000 m + 670 m = 1 km,670 m.',
    variants: [
      mc('medium', 'The Distance from the Department Store to the Park is 1,670 m.\nWhat is it in km and m?', [kmm(1, 670), kmm(16, 70), kmm(1, 67), '1,670 km'], 'Every 1,000 m = 1 km; the rest are metres.', { explain: '1,670 m = 1 km,670 m.' }),
      mc('medium', 'Look at the map.\nWhat is the Distance from Dina’s house to the School in km and m?', [kmm(1, 250), kmm(1, 100), kmm(12, 50), kmm(1, 25)], 'Add the two parts of the road, then change: every 1,000 m = 1 km.', Object.assign(map('Dina’s house', 'School', 700, 550, 1100, 'house', 'school'), { explain: '700 + 550 = 1,250 m = 1 km,250 m.' })),
      mc('medium', 'Look at the map.\nWhat is the Distance from Reem’s house to the Park in km and m?', [kmm(1, 150), kmm(1, 920), kmm(11, 50), kmm(1, 15)], 'Add the two parts of the road, then change: every 1,000 m = 1 km.', Object.assign(map('Reem’s house', 'Park', 700, 450, 920, 'house', 'park'), { explain: '700 + 450 = 1,150 m = 1 km,150 m.' })),
      mc('medium', 'Look at the map.\nWhat is the Distance from Omar’s house to the Park in km and m?', [kmm(1, 390), kmm(1, 100), kmm(13, 90), kmm(1, 39)], 'Add the two parts of the road, then change: every 1,000 m = 1 km.', Object.assign(map('Omar’s house', 'Park', 550, 840, 1100, 'house2', 'park'), { explain: '550 + 840 = 1,390 m = 1 km,390 m.' }))
    ] },
  { id: 'R5', lesson: 2, boss: true, concept: 'Challenge: the difference between the Distance and the Shortest distance', explain: 'We find the Distance along the road (add the two parts), then subtract the Shortest distance: 1,670 − 1,200 = 470 m.',
    variants: [
      asBoss(num('hard', 'Look at the map.\nWhat is the difference between the Distance and the Shortest distance from the Department Store to the Park in m?', 470, '700+970-1200', DIFF, Object.assign(map('Department Store', 'Park', 700, 970, 1200, 'mall', 'park'), { unit: 'm', explain: '700 + 970 = 1,670, and 1,670 − 1,200 = 470 m.' }))),
      asBoss(num('hard', 'Look at the map.\nWhat is the difference between the Distance and the Shortest distance from Dina’s house to the School in m?', 150, '700+550-1100', DIFF, Object.assign(map('Dina’s house', 'School', 700, 550, 1100, 'house', 'school'), { unit: 'm', explain: '700 + 550 = 1,250, and 1,250 − 1,100 = 150 m.' }))),
      asBoss(num('hard', 'Look at the map.\nWhat is the difference between the Distance and the Shortest distance from Reem’s house to the Park in m?', 230, '700+450-920', DIFF, Object.assign(map('Reem’s house', 'Park', 700, 450, 920, 'house', 'park'), { unit: 'm', explain: '700 + 450 = 1,150, and 1,150 − 920 = 230 m.' }))),
      asBoss(num('hard', 'Look at the map.\nWhat is the difference between the Distance and the Shortest distance from Omar’s house to the Park in m?', 320, '600+920-1200', DIFF, Object.assign(map('Omar’s house', 'Park', 600, 920, 1200, 'house2', 'park'), { unit: 'm', explain: '600 + 920 = 1,520, and 1,520 − 1,200 = 320 m.' }))),
      asBoss(num('hard', 'Look at the map.\nWhat is the difference between the Distance and the Shortest distance from Reem’s house to the Park in m?', 240, '730+470-960', DIFF, Object.assign(map('Reem’s house', 'Park', 730, 470, 960, 'house', 'park'), { unit: 'm', explain: '730 + 470 = 1,200, and 1,200 − 960 = 240 m.' })))
    ] }
];
})();
