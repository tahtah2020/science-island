/* Grade 3 · Mathematics (Languages track) · Chapter 9 "Numbers Bigger than 10,000", Term 1 2026/2027
   Source: Ministry book "Primary 3 Mathematics, Term 1" (English), Chapter 9 (pages 92–105): lessons 9-1 to 9-4 and "Review and Practice".
   Follows questions_mg3u9_ar.js phrasing by phrasing (same ids, types, levels and answers; check_questions checks the parity).
   Idea ids: Z + number for the whole unit (the lesson is in `lesson`). Boss ideas: Z6, Z11, Z16, Z21.
   Owner (6 Nov 2026): easy first, slow rise, few hard questions (Boss only), a hint on every phrasing that never gives the answer.
   Big numbers are written like the English book, with a comma every three digits (865,000).
   Pictures drawn in code (math/g3_art.js) because the answers count exactly: the book's place-value table (g3Place), number cards (g3Bundles),
   the number line (g3NumLine, smaller numbers on the left). The owner's stadium picture goes with a question that does not count what is in it.
   Lesson 3: the English book uses the signs =, > and <, so the choices show the whole comparison with its sign (the Arabic file uses words,
   because the signs turn round in an Arabic line).
   Review notes:
   - Exercise answers are not printed in the book (except "How to Solve"); all are computed.
   - Lesson 2: number lines use numbers of our own in the book's pattern (10 small scales = 10,000, one scale = 1,000); the marks in the book's pictures are hard to read exactly.
   - The book's Try (3) prints "84,2000" (a typo for 84,200); the site compares 83,900 and 84,200. */
(function () {
window.CHAPTER = { id: 'mg3u9', title: 'Numbers Bigger than 10,000', grade: 'Grade 3', track: 'Languages' };

const num = (level, q, answer, calc, hint, extra = {}) => Object.assign({ type: 'num', mode: 'normal', level, q, answer: String(answer), calc, hint }, extra);
const mc = (level, q, options, hint, extra = {}) => Object.assign({ type: 'mc', mode: 'normal', level, q, options, answer: 0, hint }, extra);
const tf = (level, q, answer, hint, extra = {}) => Object.assign({ type: 'tf', mode: 'normal', level, q, answer, hint }, extra);
const b = v => v.toLocaleString('en-US');
const asBoss = v => Object.assign(v, { level: 'hard', mode: 'boss' });
const fast = v => Object.assign(v, { mode: 'timed', seconds: 25 });
const PLACE = ['Ones', 'Tens', 'Hundreds', 'Thousands', 'Ten Thousands', 'Hundred Thousands'];

/* lesson 1 */
const words = (level, w, v, wrong) => mc(level, `Write the number in digits:\n${w}`, [b(v), ...wrong.map(b)], 'Write each part in its place: the thousands first, then the hundreds, tens and ones; put 0 in an empty place.', { fig: 'g3Place', pic: { n: '' }, explain: `${w} = ${b(v)}` });
const groups = (level, parts) => {
  const v = parts.reduce((s, [k, c]) => s + k * c, 0), txt = parts.map(([k, c]) => `${c} ${b(k)}s`).join(', and ');
  return num(level, `What number is made by combining:\n${txt}?`, v, parts.map(([k, c]) => `${k}*${c}`).join('+'), `Each ${b(parts[0][0])} card puts a digit in one place. Write how many cards of each kind in its place, and fill the rest with zeros.`, { fig: 'g3Bundles', pic: { parts }, explain: `The number = ${b(v)}` });
};
const thou = (level, v) => num(level, `${b(v)} is the number made by collecting ? 1,000s.\nWhat is the missing number?`, v / 1000, `${v}/1000`, `Remove the three zeros at the end of ${b(v)}.`, { explain: `${b(v)} = ${v / 1000} groups of 1,000.` });
const digitAt = (level, v, k) => { const d = Math.floor(v / 10 ** k) % 10; return num(level, `The number ${b(v)}\nWhat is the digit in the ${PLACE[k]} place?`, d, `${d}`, `Write the number in the table: the ones on the far right. Which digit is under "${PLACE[k]}"?`, { fig: 'g3Place', pic: { n: v, fill: true, ask: k }, explain: `The digit in the ${PLACE[k]} place is ${d}.` }); };
const whereIs = (level, v, digit, k) => { const others = [5, 4, 3, 2, 1, 0].filter(x => x !== k).slice(0, 3); return mc(level, `The number ${b(v)}\nThe digit ${digit} is in what place?`, [PLACE[k], ...others.map(x => PLACE[x])], 'Count the places from the right: ones, tens, hundreds, thousands, …', { fig: 'g3Place', pic: { n: v, fill: true }, explain: `The digit ${digit} is in the ${PLACE[k]} place.` }); };

/* lesson 2 */
const line = (level, from, to, v, extra = {}) => num(level, 'Write the number represented by scale A.', v, `${v}`, '10 small scales = 10,000, so one small scale = 1,000. Start at the nearest written number and count the scales.', Object.assign({ fig: 'g3NumLine', pic: { from, to, major: 10000, marks: [[v, 'A']] }, explain: `Scale A is at ${b(v)}.` }, extra));
const zeros = (level, a, c, op, extra = {}) => {
  const r = op === '+' ? a + c : a - c, z = Math.min(...[a, c].map(x => { let k = 0; while (x % 10 ** (k + 1) === 0) k++; return k; }));
  const S = op === '+' ? '+' : '−';
  return num(level, `${b(a)} ${S} ${b(c)} = ?`, r, `${a}${op}${c}`, `Remove ${z} zeros for now: ${a / 10 ** z} ${S} ${c / 10 ** z}, then add ${z} zeros back to the answer.`, Object.assign({ explain: `${a / 10 ** z} ${S} ${c / 10 ** z} = ${r / 10 ** z}, then add the zeros back: ${b(r)}.` }, extra));
};

/* lesson 3: the English book uses the signs; each choice is the whole comparison */
const SIGN = ['>', '<', '='];
const cmp = (level, L, R, Ltxt, Rtxt, hint) => {
  const k = L > R ? 0 : L < R ? 1 : 2, lt = Ltxt || b(L), rt = Rtxt || b(R), opts = [k, ...[0, 1, 2].filter(i => i !== k)].map(i => `${lt} ${SIGN[i]} ${rt}`);
  return mc(level, `Write the missing symbol (=, >, or <):\n${lt}  ☐  ${rt}`, opts, hint || (String(L).length !== String(R).length ? 'Count the digits of each number: the number with more digits is the greater number.' : 'Both numbers have the same number of digits. Compare the digits from the left: the first different digit decides.'),
    { explain: `${Ltxt ? `${Ltxt} = ${b(L)}, and ` : ''}${b(L)} ${SIGN[k]} ${b(R)}.` });
};

/* lesson 4 */
const times = (level, a, m, extra = {}) => num(level, `${a} × ${b(m)} = ?`, a * m, `${a}*${m}`, m === 10 ? 'When you multiply by 10, add one zero to the right end of the number.' : 'When you multiply by 100, add two zeros to the right end of the number.', Object.assign({ explain: `${a} × ${b(m)} = ${b(a * m)}` }, extra));
const over = (level, a, extra = {}) => num(level, `${b(a)} ÷ 10 = ?`, a / 10, `${a}/10`, 'When you divide by 10, remove one zero from the right end of the number.', Object.assign({ explain: `${b(a)} ÷ 10 = ${b(a / 10)}` }, extra));

window.IDEAS = [
  /* ---------- Lesson 1 · How to Write Big Numbers (pp. 92–95) ---------- */
  { id: 'Z1', lesson: 1, concept: 'Ten thousand and a hundred thousand', explain: 'The number made by collecting ten 1,000s is written as 10,000 and is read as "ten thousand". Ten 10,000s make 100,000 ("a hundred thousand").',
    variants: [
      mc('easy', 'Ten 1,000s make ...', [b(10000), b(1000), b(100000), b(1010)], 'Count in thousands: 1,000, 2,000, 3,000, … ten times.', { explain: 'Ten 1,000s make 10,000.' }),
      mc('easy', 'Ten 10,000s make ...', [b(100000), b(10000), b(1000000), b(10010)], 'Ten groups of a number: add one zero to it.', { explain: 'Ten 10,000s make 100,000.' }),
      mc('easy', 'How do we read the number 10,000?', ['ten thousand', 'one thousand', 'one hundred thousand', 'one hundred'], 'Count the zeros: four zeros after 1.', { explain: '10,000 = ten thousand.' }),
      mc('easy', 'How do we read the number 100,000?', ['one hundred thousand', 'ten thousand', 'one million', 'one thousand'], 'Count the zeros: five zeros after 1.', { explain: '100,000 = one hundred thousand.' }),
      mc('easy', 'Numbers are separated into groups of ... digits from the right.', ['three', 'two', 'four'], 'Look at 865,000: how many digits are in each group?', { explain: 'Numbers are separated into groups of three digits from the right.' })
    ] },
  { id: 'Z2', lesson: 1, concept: 'Writing a number in digits', explain: '"Eight Hundred Sixty-Five Thousand" = 865,000: 8 in the hundred thousands, 6 in the ten thousands, 5 in the thousands, and zeros in the hundreds, tens and ones.',
    variants: [
      num('easy', 'Thirty-five thousand fans came to the match.\nWrite the number in digits.', 35000, '35*1000', 'Thirty-five thousand: write 35, then three zeros.', { fig: 'g3Photo', pic: { src: 'math/assets/g3/stadium.jpg' }, unit: 'fans', explain: 'Thirty-five thousand = 35,000.' }),
      words('easy', 'Eight Hundred Sixty-Five Thousand', 865000, [86500, 8065000, 856000]),
      words('easy', 'Twenty-Six Thousand and Four Hundred Seventeen', 26417, [260417, 26471, 62417]),
      words('medium', 'Five Hundred Ninety-Six Thousand and Eighty', 596080, [596800, 59680, 596008]),
      words('medium', 'Nine Hundred Seven Thousand and Four Hundred', 907400, [97400, 970400, 907040]),
      words('medium', 'Three Hundred Nine Thousand and Eight Hundred Twenty', 309820, [390820, 39820, 309082]),
      words('medium', 'Five Hundred Forty-Eight Thousand and Three Hundred', 548300, [548030, 584300, 54830]),
      words('medium', 'Eight Hundred Two Thousand and Six Hundred', 802600, [820600, 8260, 802060]),
      words('medium', 'Seven Hundred Eleven Thousand and Three Hundred', 711300, [701300, 711030, 71130])
    ] },
  { id: 'Z3', lesson: 1, concept: 'A number made of groups', explain: 'Four 100,000s, seven 10,000s and two 1,000s: 4 in the hundred thousands, 7 in the ten thousands, 2 in the thousands, and the rest zeros = 472,000.',
    variants: [groups('easy', [[10000, 3]]), groups('easy', [[10000, 2], [1000, 5]]), groups('easy', [[100000, 2], [10000, 6]]), groups('medium', [[100000, 4], [10000, 6]]), groups('medium', [[100000, 5], [10000, 2]]), groups('medium', [[100000, 4], [10000, 7], [1000, 2]]), groups('medium', [[100000, 5], [10000, 2], [1000, 4]])] },
  { id: 'Z4', lesson: 1, concept: 'How many 1,000s?', explain: '82,000 is made of 82 groups of 1,000: we remove the three zeros at its end.',
    variants: [fast(thou('easy', 8000)), fast(thou('easy', 5000)), thou('easy', 19000), thou('easy', 27000), thou('medium', 82000), thou('medium', 64000), thou('medium', 30000), thou('medium', 73000), thou('medium', 50000),
      num('medium', '45 groups of 1,000 = ?', 45000, '45*1000', 'Write 45, then add three zeros.', { explain: '45,000' })] },
  { id: 'Z5', lesson: 1, concept: 'The place of a digit', explain: 'In the table: ones, tens, hundreds, then thousands, ten thousands, hundred thousands (from right to left). In 705,036 the digit 7 is in the hundred thousands place and 0 in the ten thousands place.',
    variants: [digitAt('easy', 705036, 4), digitAt('easy', 426703, 4), digitAt('easy', 530192, 4), digitAt('medium', 258103, 5), digitAt('medium', 701289, 5), digitAt('medium', 450128, 5), digitAt('medium', 509071, 4),
      whereIs('easy', 705036, 7, 5), whereIs('easy', 426703, 4, 5), whereIs('medium', 258103, 5, 4), whereIs('medium', 701289, 0, 4), whereIs('medium', 450128, 5, 4)] },
  { id: 'Z6', lesson: 1, boss: true, concept: 'Challenge: big numbers', explain: 'We write each digit in its place and put 0 in an empty place.',
    variants: [
      asBoss(groups('hard', [[100000, 5], [10000, 2], [1000, 4]])),
      asBoss(groups('hard', [[100000, 4], [10000, 7], [1000, 2]])),
      asBoss(words('hard', 'Seven Hundred Eleven Thousand and Three Hundred', 711300, [71130, 701130, 711003])),
      asBoss(words('hard', 'Eight Hundred Two Thousand and Six Hundred', 802600, [820600, 802060, 80260])),
      asBoss(num('hard', '250,000 = ? groups of 1,000', 250, '250000/1000', 'Remove only the last three zeros.', { explain: '250,000 = 250 groups of 1,000.' })),
      asBoss(digitAt('hard', 509071, 4)), asBoss(digitAt('hard', 128450, 5))
    ] },

  /* ---------- Lesson 2 · The Structure of Big Numbers (pp. 96–99) ---------- */
  { id: 'Z7', lesson: 2, concept: 'The smallest unit on the scale', explain: 'On a Number Line, numbers get greater as you go to the right. Between 80,000 and 90,000 there are 10 small scales, so the smallest scale unit is 1,000.',
    variants: [
      mc('easy', 'Between 80,000 and 90,000 there are 10 small scales.\nWhat is one small scale worth?', [b(1000), b(100), b(10000), b(10)], '10,000 is split into 10 scales.', { fig: 'g3NumLine', pic: { from: 80000, to: 120000, major: 10000, marks: [] }, explain: '10,000 ÷ 10 = 1,000.' }),
      mc('easy', 'On a Number Line, numbers get greater as you go to the ...', ['right', 'left'], 'Look: where is the greatest number on the line?', { fig: 'g3NumLine', pic: { from: 0, to: 30000, major: 10000, marks: [] }, explain: 'Numbers get greater to the right.' }),
      mc('easy', 'To read the scale of the Number Line, first think about ...', ['the smallest unit on the scale', 'the greatest number on the line', 'how many numbers are written'], 'What is one small scale worth?', { explain: 'Think about the smallest unit on the scale.' })
    ] },
  { id: 'Z8', lesson: 2, concept: 'Reading a scale on the Number Line', explain: 'One small scale = 1,000. The scale four scales after 80,000 represents 84,000.',
    variants: [line('easy', 0, 20000, 7000), line('easy', 80000, 120000, 84000), line('easy', 50000, 70000, 55000), line('medium', 20000, 40000, 35000), line('medium', 70000, 90000, 79000), line('medium', 50000, 70000, 66000), line('medium', 80000, 120000, 115000), line('medium', 50000, 80000, 57000)] },
  { id: 'Z9', lesson: 2, concept: 'Adding and subtracting by removing zeros (thousands)', explain: 'For adding and subtracting large numbers, temporarily remove the same number of zeros: 12,000 + 8,000: 12 + 8 = 20, then add the three zeros back: 20,000.',
    variants: [fast(zeros('easy', 4000, 7000, '+')), fast(zeros('easy', 9000, 6000, '+')), fast(zeros('easy', 16000, 9000, '-')), zeros('easy', 12000, 8000, '+'), zeros('easy', 16000, 7000, '+'), zeros('easy', 5000, 8000, '+'), zeros('medium', 4000, 18000, '+'), zeros('medium', 6000, 25000, '+'), zeros('medium', 23000, 8000, '-'), zeros('medium', 53000, 7000, '-'), zeros('medium', 41000, 3000, '-'), zeros('medium', 15000, 8000, '-')] },
  { id: 'Z10', lesson: 2, concept: 'Adding and subtracting by removing zeros (ten thousands)', explain: '200,000 − 180,000: remove four zeros: 20 − 18 = 2, then add the four zeros back: 20,000.',
    variants: [zeros('easy', 90000, 170000, '+'), zeros('easy', 20000, 300000, '+'), zeros('medium', 200000, 180000, '-'), zeros('medium', 130000, 70000, '-'), zeros('medium', 300000, 140000, '-'), zeros('medium', 80000, 140000, '+'), zeros('medium', 70000, 330000, '+'), zeros('medium', 230000, 50000, '-'), zeros('medium', 610000, 20000, '-'), zeros('medium', 90000, 400000, '+')] },
  { id: 'Z11', lesson: 2, boss: true, concept: 'Challenge: the Number Line and removing zeros', explain: 'One small scale on the Number Line = 1,000. In calculations we remove the same number of zeros, then add them back to the answer.',
    variants: [asBoss(line('hard', 80000, 120000, 115000, { pic: { from: 80000, to: 120000, major: 10000, hide: [100000], marks: [[115000, 'A']] } })), asBoss(line('hard', 50000, 80000, 73000, { pic: { from: 50000, to: 80000, major: 10000, hide: [70000], marks: [[73000, 'A']] } })),
      asBoss(zeros('hard', 700000, 260000, '-')), asBoss(zeros('hard', 300000, 250000, '-')), asBoss(zeros('hard', 470000, 80000, '-')), asBoss(zeros('hard', 60000, 800000, '+')), asBoss(zeros('hard', 280000, 20000, '+'))] },

  /* ---------- Lesson 3 · Comparing Big Numbers (pp. 100–101) ---------- */
  { id: 'Z12', lesson: 3, concept: 'The number with more digits', explain: 'The number with more digits is the greater number: 180,000 (6 digits) > 18,000 (5 digits). The number on the open side of the sign is the greater number.',
    variants: [
      tf('easy', 'The number with more digits is the greater number.', 0, 'Compare 180,000 and 18,000.', { explain: 'True.' }),
      cmp('easy', 180000, 18000), cmp('easy', 21600, 216000), cmp('easy', 30800, 3080), cmp('easy', 59200, 512000), cmp('medium', 100000, 99999), cmp('medium', 8000, 80000)
    ] },
  { id: 'Z13', lesson: 3, concept: 'Comparing the digits from the left', explain: 'If the numbers have the same number of digits, compare the digits from the left: 385,000 and 384,000: 3 = 3, 8 = 8, 5 > 4, so 385,000 > 384,000.',
    variants: [cmp('easy', 35000, 40000), cmp('easy', 80000, 50000), cmp('easy', 30000, 50000), cmp('medium', 385000, 384000), cmp('medium', 83900, 84200), cmp('medium', 643000, 649000), cmp('medium', 895000, 875000), cmp('medium', 518000, 519000), cmp('medium', 71800, 70800), cmp('medium', 40500, 40050)] },
  { id: 'Z14', lesson: 3, concept: 'Calculate one side first', explain: 'When one side has a calculation, work it out first: 700,000 − 200,000 = 500,000, so 500,000 = 700,000 − 200,000. When two numbers have the same size, we say they are equal.',
    variants: [
      cmp('easy', 3000 + 7000, 10000, '3,000 + 7,000', null, 'Work out the addition first, then compare.'),
      cmp('easy', 9000, 3000 + 6000, null, '3,000 + 6,000', 'Work out the addition first, then compare.'),
      cmp('medium', 500000, 700000 - 200000, null, '700,000 − 200,000', 'Work out the subtraction first, then compare.'),
      cmp('medium', 600000, 800000 - 300000, null, '800,000 − 300,000', 'Work out the subtraction first, then compare.'),
      cmp('medium', 7000 + 6000, 13000, '7,000 + 6,000', null, 'Work out the addition first, then compare.'),
      cmp('medium', 15000, 8000 + 8000, null, '8,000 + 8,000', 'Work out the addition first, then compare.'),
      cmp('medium', 20000, 9000 + 9000, null, '9,000 + 9,000', 'Work out the addition first, then compare.')
    ] },
  { id: 'Z15', lesson: 3, concept: 'Which number is greater?', explain: 'We compare the number of digits first, then the digits from the left.',
    variants: [
      mc('easy', 'Which of these numbers is the greatest?', [b(216000), b(21600), b(2160), b(21006)], 'Find the number with the most digits.', { explain: '216,000 has 6 digits.' }),
      mc('medium', 'Which of these numbers is the greatest?', [b(649000), b(643000), b(64900), b(469000)], 'All have 6 digits except one. Compare from the left.', { explain: '649,000 is the greatest.' }),
      mc('medium', 'Which of these numbers is the smallest?', [b(70800), b(71800), b(708000), b(78000)], 'The number with fewer digits is smaller. Then compare from the left.', { explain: '70,800 is the smallest.' })
    ] },
  { id: 'Z16', lesson: 3, boss: true, concept: 'Challenge: comparing', explain: 'Work out the sides if needed, then compare the number of digits, then the digits from the left.',
    variants: [asBoss(cmp('hard', 70000 + 70000, 150000, '70,000 + 70,000', null, 'Work out the addition first, then compare.')), asBoss(cmp('hard', 40000, 30000 + 10000, null, '30,000 + 10,000', 'Work out the addition first, then compare.')), asBoss(cmp('hard', 861000, 860000)), asBoss(cmp('hard', 50600, 506000)),
      asBoss(cmp('hard', 100000, 4000 + 6000, null, '4,000 + 6,000', 'Work out the addition first, then compare the number of digits.')), asBoss(cmp('hard', 875000, 895000))] },

  /* ---------- Lesson 4 · Numbers Multiplied by 10 and Divided by 10 (pp. 102–103) ---------- */
  { id: 'Z17', lesson: 4, concept: 'Rules for × 10, × 100 and ÷ 10', explain: 'When you multiply a number by 10, its place value moves left by one, and one zero is added to the right end. By 100: two zeros are added. When you divide a number ending in zero by 10, one zero is removed from the right end.',
    variants: [
      mc('easy', 'When you multiply a number by 10 ...', ['one zero is added to the right end', 'one zero is removed from the end', 'two zeros are added to the end', 'the number does not change'], 'Try: 35 × 10 = 350.', { explain: 'One zero is added.' }),
      mc('easy', 'When you multiply a number by 100 ...', ['two zeros are added to the right end', 'one zero is added', 'two zeros are removed', 'three zeros are added'], 'Try: 35 × 100 = 3,500.', { explain: 'Two zeros are added.' }),
      mc('easy', 'When you divide a number ending in zero by 10 ...', ['one zero is removed from the right end', 'one zero is added', 'two zeros are removed', 'two zeros are added'], 'Try: 350 ÷ 10 = 35.', { explain: 'One zero is removed.' }),
      mc('medium', 'When you multiply by 10, the place value of each digit moves ...', ['left by one', 'right by one', 'left by two'], 'The 5 in 35 is in the ones; in 350 it is in the tens.', { fig: 'g3Place', pic: { n: 350, fill: true }, explain: 'It moves left by one.' })
    ] },
  { id: 'Z18', lesson: 4, concept: 'Multiplying by 10', explain: '58 × 10 = 580: add one zero.',
    variants: [fast(times('easy', 15, 10)), fast(times('easy', 37, 10)), times('easy', 50, 10), times('easy', 58, 10), times('easy', 72, 10), times('easy', 35, 10), times('medium', 40, 10), times('medium', 80, 10), times('medium', 746, 10), times('medium', 254, 10), times('medium', 320, 10)] },
  { id: 'Z19', lesson: 4, concept: 'Multiplying by 100', explain: '320 × 100 = 32,000: add two zeros.',
    variants: [fast(times('easy', 37, 100)), times('easy', 94, 100), times('easy', 31, 100), times('medium', 320, 100), times('medium', 900, 100), times('medium', 500, 100), times('medium', 730, 100), times('medium', 230, 100), times('medium', 240, 100), times('medium', 315, 100)] },
  { id: 'Z20', lesson: 4, concept: 'Dividing by 10', explain: '500 ÷ 10 = 50: remove one zero.',
    variants: [fast(over('easy', 40)), fast(over('easy', 80)), over('easy', 200), over('easy', 500), over('easy', 600), over('medium', 850), over('medium', 480), over('medium', 300), over('medium', 7000), over('medium', 4000), over('medium', 9000)] },
  { id: 'Z21', lesson: 4, boss: true, concept: 'Challenge: × 10, × 100 and ÷ 10', explain: 'By 10 we add one zero, by 100 two zeros, and ÷ 10 removes one zero.',
    variants: [asBoss(times('hard', 492, 100)), asBoss(times('hard', 520, 100)), asBoss(times('hard', 47, 10)), asBoss(over('hard', 9000)), asBoss(over('hard', 5000)), asBoss(times('hard', 730, 100)),
      asBoss(mc('hard', 'Which calculation gives 4,000?', ['40 × 100', '40 × 10', '400 ÷ 10', '4 × 100'], 'Work out each one: how many zeros do you add or remove?', { explain: '40 × 100 = 4,000.' }))] }
];
})();
