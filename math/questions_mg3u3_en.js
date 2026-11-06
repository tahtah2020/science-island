/* Grade 3 · Mathematics (Languages track) · Chapter 3 "Division", Term 1 2026/2027
   Source: Ministry book "Primary 3 Mathematics, Term 1" (English), Chapter 3 (pages 32–43): lessons 3-1 to 3-4 and "Review and Practice".
   Follows questions_mg3u3_ar.js phrasing by phrasing (same ids, types, levels and answers: check_questions checks the parity).
   Idea letters: I lesson 1, J lesson 2, K lesson 3, L lesson 4. Boss ideas: I6, J6, K4, L5.
   Owner (6 Nov 2026): easy first, slow rise, few hard questions (Boss only), a hint on every phrasing that never gives the answer.
   Book words: division, Dividend, Divisor, Quotient, the Divisor's times table, number for each person, total number, number of people,
   unit (of the answer), given information and what is asked, "times as many / times as long".
   Pictures (math/g3_art.js): children and plates for fair sharing (g3Share), the book's two tapes for comparing (g3Tape). */
(function () {
window.CHAPTER = { id: 'mg3u3', title: 'Division', grade: 'Grade 3', track: 'Languages' };

const num = (level, q, answer, calc, hint, extra = {}) => Object.assign({ type: 'num', mode: 'normal', level, q, answer: String(answer), calc, hint }, extra);
const timed = (level, q, answer, calc, hint, seconds = 20, extra = {}) => Object.assign(num(level, q, answer, calc, hint, extra), { mode: 'timed', seconds });
const mc = (level, q, options, hint, extra = {}) => Object.assign({ type: 'mc', mode: 'normal', level, q, options, answer: 0, hint }, extra);
const tf = (level, q, answer, hint, extra = {}) => Object.assign({ type: 'tf', mode: 'normal', level, q, answer, hint }, extra);
const multi = (level, q, options, answer, hint, extra = {}) => Object.assign({ type: 'multi', mode: 'normal', level, q, options, answer, hint }, extra);
const boss = (q, answer, calc, hint, extra = {}) => Object.assign(num('hard', q, answer, calc, hint, extra), { mode: 'boss' });
/* a division fact: "a ÷ b = ?" with the times-table hint of the Divisor */
const fact = (level, a, b, t = false) => {
  const v = Object.assign(num(level, `${a} ÷ ${b} = ?`, a / b, `${a}/${b}`, `Think with the ${b} times table: ${b} × ? = ${a}`), { explain: `${b} × ${a / b} = ${a}, so ${a} ÷ ${b} = ${a / b}.` });
  return t ? Object.assign(v, { mode: 'timed', seconds: 20 }) : v;
};
const each = 'Number for each person = total number ÷ number of people.';
const people = 'Number of people = total number ÷ number for each person.';

window.IDEAS = [
  /* ---------- Lesson 1 · Division (pp. 32–33) ---------- */
  { id: 'I1', lesson: 1, concept: 'What division means', explain: 'When we share 12 cookies equally among 3 people, each person gets 4. We write 12 ÷ 3 = 4 and read it "12 divided by 3 equals 4". This is called division.',
    variants: [
      num('easy', 'We shared 12 cookies equally among 3 people.\nHow many cookies does each person get?', 4, '12/3', 'Count the cookies on one plate.', { fig: 'g3Share', pic: { total: 12, groups: 3, kind: 'cookie' }, unit: 'cookies', explain: '12 ÷ 3 = 4 cookies.' }),
      num('easy', 'We shared 8 candies equally between 2 children.\nHow many candies does each child get?', 4, '8/2', 'Count the candies on one plate.', { fig: 'g3Share', pic: { total: 8, groups: 2, kind: 'candy' }, unit: 'candies', explain: '8 ÷ 2 = 4 candies.' }),
      num('easy', 'We shared 10 apples equally among 5 children.\nHow many apples does each child get?', 2, '10/5', 'Count the apples on one plate.', { fig: 'g3Share', pic: { total: 10, groups: 5, kind: 'apple' }, unit: 'apples', explain: '10 ÷ 5 = 2 apples.' }),
      mc('easy', 'How do we read 12 ÷ 3 = 4?', ['12 divided by 3 equals 4', '12 times 3 equals 4', '12 minus 3 equals 4', '3 divided by 12 equals 4'], 'We read the sign ÷ as "divided by".', { explain: 'We read it: "12 divided by 3 equals 4".' })
    ] },
  { id: 'I2', lesson: 1, concept: 'Dividend, Divisor and Quotient', explain: 'In 12 ÷ 3 = 4: 12 is called the Dividend, 3 is called the Divisor, and 4 is called the Quotient.',
    variants: [
      mc('easy', 'In 12 ÷ 3 = 4, what is the number 12 called?', ['the Dividend', 'the Divisor', 'the Quotient'], 'The number we share (the whole) comes first.', { explain: '12 is the Dividend.' }),
      mc('easy', 'In 12 ÷ 3 = 4, what is the number 3 called?', ['the Divisor', 'the Dividend', 'the Quotient'], 'The number we divide by comes after the ÷ sign.', { explain: '3 is the Divisor.' }),
      mc('easy', 'In 12 ÷ 3 = 4, what is the number 4 called?', ['the Quotient', 'the Dividend', 'the Divisor'], 'The answer after the = sign has a special name in division.', { explain: '4 is the Quotient.' }),
      mc('medium', 'We can find the Quotient by using the times table of ...', ['the Divisor', 'the Dividend', 'the number 10'], 'For 12 ÷ 3 we think: 3 × ? = 12.', { explain: 'We use the Divisor’s times table.' })
    ] },
  { id: 'I3', lesson: 1, concept: 'Dividing with the times table (small numbers)', explain: 'To find the Quotient, think about the Divisor’s times table. Example: 10 ÷ 2: 2 × 5 = 10, so the answer is 5.',
    variants: [fact('easy', 10, 2, true), fact('easy', 8, 2, true), fact('easy', 15, 5, true), fact('easy', 14, 2), fact('easy', 18, 3), fact('easy', 12, 3), fact('easy', 10, 5)] },
  { id: 'I4', lesson: 1, concept: 'Dividing by itself, by 1, and 0 as the Dividend', explain: 'A number ÷ itself = 1 (4 ÷ 4 = 1). A number ÷ 1 = the same number (3 ÷ 1 = 3). When the Dividend is 0, the answer is always 0 (0 ÷ 2 = 0).',
    variants: [
      timed('easy', '4 ÷ 4 = ?', 1, '4/4', 'Think: 4 × ? = 4', 20, { explain: '4 × 1 = 4, so 4 ÷ 4 = 1.' }),
      timed('easy', '3 ÷ 1 = ?', 3, '3/1', 'Think: 1 × ? = 3', 20, { explain: '1 × 3 = 3, so 3 ÷ 1 = 3.' }),
      num('easy', '0 ÷ 2 = ?', 0, '0/2', 'If we have nothing to share, how many does each person get?', { explain: 'When the Dividend is 0, the answer is always 0.' }),
      num('easy', '0 ÷ 6 = ?', 0, '0/6', 'Remember: when the Dividend is 0 ...', { explain: '0 ÷ 6 = 0.' }),
      num('easy', '9 ÷ 9 = ?', 1, '9/9', 'Think: 9 × ? = 9', { explain: '9 ÷ 9 = 1.' }),
      num('easy', '7 ÷ 1 = ?', 7, '7/1', 'Think: 1 × ? = 7', { explain: '7 ÷ 1 = 7.' }),
      tf('easy', 'When the Dividend is 0, the answer is always 0.', 0, 'Try it: 0 candies shared among 3 children.', { explain: 'True.' })
    ] },
  { id: 'I5', lesson: 1, concept: 'Dividing with the times table (bigger numbers)', explain: 'Go along the Divisor’s times table until you reach the Dividend. Example: 36 ÷ 4: 4 × 9 = 36, so the answer is 9.',
    variants: [fact('medium', 36, 4), fact('medium', 28, 7), fact('medium', 48, 6), fact('medium', 24, 8), fact('medium', 32, 4), fact('medium', 49, 7), fact('medium', 16, 4), fact('medium', 30, 5)] },
  { id: 'I6', lesson: 1, boss: true, concept: 'Challenge: dividing with the big times tables', explain: 'Use the Divisor’s times table, and count step by step until you reach the Dividend.',
    variants: [
      boss('72 ÷ 9 = ?', 8, '72/9', 'Think with the 9 times table: 9, 18, 27, …', { explain: '9 × 8 = 72, so 72 ÷ 9 = 8.' }),
      boss('54 ÷ 9 = ?', 6, '54/9', 'Think with the 9 times table: 9, 18, 27, …', { explain: '9 × 6 = 54, so 54 ÷ 9 = 6.' }),
      boss('63 ÷ 9 = ?', 7, '63/9', 'Think with the 9 times table: 9, 18, 27, …', { explain: '9 × 7 = 63, so 63 ÷ 9 = 7.' }),
      boss('42 ÷ 7 = ?', 6, '42/7', 'Think with the 7 times table: 7, 14, 21, …', { explain: '7 × 6 = 42, so 42 ÷ 7 = 6.' }),
      boss('40 ÷ 8 = ?', 5, '40/8', 'Think with the 8 times table: 8, 16, 24, …', { explain: '8 × 5 = 40, so 40 ÷ 8 = 5.' })
    ] },

  /* ---------- Lesson 2 · Sharing and Division (pp. 34–35) ---------- */
  { id: 'J1', lesson: 2, concept: 'The two sharing rules', explain: 'Number for each person = total number ÷ number of people. Number of people = total number ÷ number for each person.',
    variants: [
      mc('easy', 'Number for each person = ...', ['total number ÷ number of people', 'total number × number of people', 'number of people ÷ total number', 'total number − number of people'], 'We divide the whole by the number of people.', { explain: each }),
      mc('easy', 'Number of people = ...', ['total number ÷ number for each person', 'total number × number for each person', 'number for each person ÷ total number', 'total number + number for each person'], 'We divide the whole by what each person gets.', { explain: people }),
      tf('easy', 'In word problems, the final answer must include the unit.', 0, 'Do we write only "8" or "8 cookies"?', { explain: 'True: write the answer with its unit.' })
    ] },
  { id: 'J2', lesson: 2, concept: 'Finding the number for each person', explain: 'Number for each person = total number ÷ number of people. Example: 24 cookies among 3 people: 24 ÷ 3 = 8 cookies.',
    variants: [
      num('easy', 'If you share 12 strawberries equally among 3 people, how many strawberries does each person get?', 4, '12/3', each, { unit: 'strawberries', explain: '12 ÷ 3 = 4 strawberries.' }),
      num('easy', 'If you share 15 oranges equally among 5 people, how many oranges does each person get?', 3, '15/5', each, { unit: 'oranges', explain: '15 ÷ 5 = 3 oranges.' }),
      num('easy', 'If you share 16 pencils equally among 4 people, how many pencils does each person get?', 4, '16/4', each, { unit: 'pencils', explain: '16 ÷ 4 = 4 pencils.' }),
      num('medium', 'If you share 24 cookies equally among 3 people, how many cookies does each person get?', 8, '24/3', each + ' Think about the 3 times table.', { unit: 'cookies', explain: '24 ÷ 3 = 8 cookies.' }),
      num('medium', 'If you share 18 strawberries equally among 6 people, how many strawberries does each person get?', 3, '18/6', each, { unit: 'strawberries', explain: '18 ÷ 6 = 3 strawberries.' }),
      num('medium', 'If you share 21 pencils equally among 3 people, how many pencils does each person get?', 7, '21/3', each, { unit: 'pencils', explain: '21 ÷ 3 = 7 pencils.' })
    ] },
  { id: 'J3', lesson: 2, concept: 'Finding the number of people', explain: 'Number of people = total number ÷ number for each person. Example: 14 pencils, 2 for each person: 14 ÷ 2 = 7 people.',
    variants: [
      num('easy', 'If you give each person 2 pencils from 14 pencils in total, how many people can get pencils?', 7, '14/2', people, { unit: 'people', explain: '14 ÷ 2 = 7 people.' }),
      num('medium', 'There are 24 candies. If you give each person 4 candies, how many people can get candies?', 6, '24/4', people, { unit: 'people', explain: '24 ÷ 4 = 6 people.' }),
      num('medium', 'You put 24 balls into bags, 6 balls in each bag. How many bags can you fill?', 4, '24/6', 'Number of bags = total number ÷ number of balls in each bag.', { unit: 'bags', explain: '24 ÷ 6 = 4 bags.' }),
      num('medium', 'There are 32 candies. If you give each person 8 candies, how many people can get candies?', 4, '32/8', people, { unit: 'people', explain: '32 ÷ 8 = 4 people.' })
    ] },
  { id: 'J4', lesson: 2, concept: 'Dividing lengths', explain: 'If we cut a tape into equal pieces: length of each piece = total length ÷ number of pieces. Example: 63 cm into 7 pieces: 63 ÷ 7 = 9 cm.',
    variants: [
      num('medium', 'If you cut 45 cm of sticky tape into 5 equal pieces, how long is each piece?', 9, '45/5', 'Think of it as sharing 45 among 5 people.', { unit: 'cm', explain: '45 ÷ 5 = 9 cm.' }),
      num('medium', 'If you cut a 63 cm ribbon into 7 equal pieces, how long is each piece?', 9, '63/7', 'Think of it as sharing 63 among 7 people.', { unit: 'cm', explain: '63 ÷ 7 = 9 cm.' }),
      num('medium', 'If you cut a 64 cm ribbon into 8 equal pieces, how long is each piece?', 8, '64/8', 'Think of it as sharing 64 among 8 people.', { unit: 'cm', explain: '64 ÷ 8 = 8 cm.' }),
      num('medium', 'If you cut 56 cm of sticky tape into 7 equal pieces, how long is each piece?', 8, '56/7', 'Think of it as sharing 56 among 7 people.', { unit: 'cm', explain: '56 ÷ 7 = 8 cm.' })
    ] },
  { id: 'J5', lesson: 2, concept: 'The mathematical sentence and the unit', explain: 'Write the mathematical sentence, then the answer with its unit: 24 ÷ 3 = 8. Answer: 8 cookies.',
    variants: [
      mc('medium', 'You shared 24 cookies equally among 3 people. What is the mathematical sentence?', ['24 ÷ 3 = 8', '24 × 3 = 72', '24 − 3 = 21', '24 + 3 = 27'], 'We share equally, so which operation do we use?', { explain: '24 ÷ 3 = 8.' }),
      mc('medium', '"How long is each piece in cm?" Answer: 9 ...', ['cm', 'people', 'bunches', 'oranges'], 'The question asks about a length.', { explain: 'Answer: 9 cm.' }),
      mc('medium', '"How many people can share?" Answer: 7 ...', ['people', 'cm', 'oranges', 'bunches'], 'The question asks about the number of people.', { explain: 'Answer: 7 people.' }),
      mc('medium', 'You make bunches of flowers from 72 roses, putting 9 roses in each bunch. What is the mathematical sentence?', ['72 ÷ 9', '72 × 9', '72 − 9', '9 ÷ 72'], 'Number of bunches = total number ÷ number of roses in each bunch.', { explain: '72 ÷ 9 = 8 bunches.' })
    ] },
  { id: 'J6', lesson: 2, boss: true, concept: 'Challenge: sharing problems', explain: 'Decide: are we looking for the number for each person or the number of people? Then divide the total, and write the answer with its unit.',
    variants: [
      boss('You make bunches of flowers from 72 roses, putting 9 roses in each bunch. How many bunches can you make?', 8, '72/9', 'Number of bunches = 72 ÷ 9. Think about the 9 times table.', { unit: 'bunches', explain: '72 ÷ 9 = 8 bunches.' }),
      boss('You put 48 balls into bags, 8 balls in each bag. How many bags can you fill?', 6, '48/8', 'Number of bags = 48 ÷ 8. Think about the 8 times table.', { unit: 'bags', explain: '48 ÷ 8 = 6 bags.' })
    ] },

  /* ---------- Lesson 3 · When to Use Division (pp. 36–39) ---------- */
  { id: 'K1', lesson: 3, concept: 'When do we use division?', explain: 'We use division to find how many each person gets when sharing equally, and to find the number of people when a total is split into equal groups. In a problem we first find the "given information" and "what is asked".',
    variants: [
      tf('easy', 'We use division to find how many each person gets when sharing equally.', 0, 'Remember: number for each person = total number ÷ number of people.', { explain: 'True.' }),
      tf('easy', 'We use division when we add new things to what we have.', 1, 'When we add things, do we share or do we add?', { explain: 'False: when we add, we use addition.' }),
      mc('easy', 'In a word problem, what do we find first?', ['the given information and what is asked', 'the final answer', 'only the unit', 'the biggest number in the problem'], 'Before we calculate, we understand what we know and what we want.', { explain: 'First find the "given information" and "what is asked".' })
    ] },
  { id: 'K2', lesson: 3, concept: 'Choosing the right operation', explain: 'Read the problem: if people get off or we eat things, subtract; if we get more, add; if we share equally or split into equal groups, divide.',
    variants: [
      mc('easy', 'There are 6 apples. If you share them equally among 3 people, how many apples does each person get?\nWhat is the mathematical sentence?', ['6 ÷ 3', '6 − 3', '6 + 3', '6 × 3'], 'The words "share them equally" tell you the operation.', { explain: 'We share equally: 6 ÷ 3 = 2.' }),
      mc('easy', 'There are 6 people on the bus. 3 people get off. How many people are on the bus?\nWhat is the mathematical sentence?', ['6 − 3', '6 ÷ 3', '6 + 3', '6 × 3'], 'Some people "get off": the number goes down.', { explain: 'People got off: 6 − 3 = 3.' }),
      mc('easy', 'You have 6 oranges. You get 3 more. How many oranges do you have?\nWhat is the mathematical sentence?', ['6 + 3', '6 − 3', '6 ÷ 3', '6 × 3'], '"You get more": the number goes up.', { explain: 'We got more: 6 + 3 = 9.' }),
      mc('medium', 'You give out 6 pencils, 3 pencils to each person. How many people can get pencils?\nWhat is the mathematical sentence?', ['6 ÷ 3', '6 × 3', '6 − 3', '6 + 3'], people, { explain: '6 ÷ 3 = 2 people.' }),
      mc('medium', 'You give 6 sheets of coloured paper to each of 3 people. How many sheets do you need?\nWhat is the mathematical sentence?', ['6 × 3', '6 ÷ 3', '6 + 3', '6 − 3'], 'Each person gets 6 sheets, and there are 3 people. Do you need more or less than 6?', { explain: '6 sheets for each of 3 people: 6 × 3 = 18 sheets.' })
    ] },
  { id: 'K3', lesson: 3, concept: 'Which problems are solved by division?', explain: 'Choose the problem that has equal sharing or splitting into equal groups.',
    variants: [
      multi('medium', 'Which problems use the mathematical sentence 6 ÷ 3? Choose all the right answers.', ['There are 6 people on the bus. 3 people get off. How many people are on the bus?', 'There are 6 apples. If you share them equally among 3 people, how many apples does each person get?', 'You have 6 oranges. You get 3 more. How many oranges do you have?', 'You give out 6 pencils, 3 pencils to each person. How many people can get pencils?'], [1, 3], 'Look for equal sharing, or for splitting into equal groups.', { explain: 'The apples (number for each person) and the pencils (number of people) are both 6 ÷ 3.' }),
      multi('medium', 'Which problems use the mathematical sentence 9 ÷ 3? Choose all the right answers.', ['You have 9 sheets of coloured paper. If you share them equally among 3 people, how many sheets does each person get?', '9 children are playing. 3 more children come. How many children are there?', 'A box has 9 candies. How many candies are in 3 boxes?', 'You give out 9 water bottles, 3 bottles to each person. How many people can get bottles?'], [0, 3], 'Look for equal sharing, or for splitting into equal groups.', { explain: 'The sheets (number for each person) and the bottles (number of people) are both 9 ÷ 3.' }),
      mc('medium', 'Which problem uses the mathematical sentence 8 ÷ 4?', ['There are 8 cookies. If you share them equally among 4 people, how many cookies does each person get?', 'There are 8 people on the bus, and 4 more get on. How many people are on the bus now?', 'You have 8 strawberries. You eat 4 of them. How many are left?', 'Each bunch has 8 flowers. How many flowers are in 4 bunches?'], 'Look for the words "share them equally".', { explain: 'Sharing 8 cookies equally among 4 people: 8 ÷ 4 = 2.' })
    ] },
  { id: 'K4', lesson: 3, boss: true, concept: 'Challenge: given information and what is asked', explain: 'Find the given information and what is asked, then choose: number for each person or number of people, and divide.',
    variants: [
      boss('We have 18 sheets of coloured paper. We gave each child 6 sheets. How many children got paper?', 3, '18/6', 'What is asked is the number of children = total number ÷ number for each child.', { unit: 'children', explain: '18 ÷ 6 = 3 children.' }),
      boss('We have 27 notebooks. We shared them equally among 9 children. How many notebooks does each child get?', 3, '27/9', 'What is asked is the number for each child = total number ÷ number of children.', { unit: 'notebooks', explain: '27 ÷ 9 = 3 notebooks.' }),
      boss('There are 15 pencils. We gave each child 5 pencils. How many children got pencils?', 3, '15/5', 'What is asked is the number of children = total number ÷ number for each child.', { unit: 'children', explain: '15 ÷ 5 = 3 children.' }),
      boss('There are 28 notebooks. We shared them equally among 7 children. How many notebooks does each child get?', 4, '28/7', 'What is asked is the number for each child = total number ÷ number of children.', { unit: 'notebooks', explain: '28 ÷ 7 = 4 notebooks.' })
    ] },

  /* ---------- Lesson 4 · Division for Comparing (pp. 40–41) ---------- */
  { id: 'L1', lesson: 4, concept: 'What "times as many" means', explain: 'When we have 2 equal groups we say "2 times as many" (twice as many). When we have 3 equal groups we say "3 times as many".',
    variants: [
      mc('easy', 'When we have 3 equal groups, we say:', ['3 times as many', 'half', '1 time as many', '3 people'], 'Each equal group is one "time".', { explain: '3 equal groups = 3 times as many.' }),
      mc('easy', 'When we have 2 equal groups, we say:', ['twice as many', '3 times as many', 'half', 'less'], 'Two groups that are the same.', { explain: '2 equal groups = twice as many.' }),
      num('easy', 'Look at the two tapes: the long tape is how many groups of the short 3 cm tape?', 4, '12/3', 'Count the dashed parts in the long tape.', { fig: 'g3Tape', pic: { big: 12, small: 3, unit: 'cm', segs: true }, unit: 'times', explain: '12 ÷ 3 = 4: four times the 3 cm length.' })
    ] },
  { id: 'L2', lesson: 4, concept: 'How many times, with tapes', explain: '"How many times?" means "how many equal groups?", and we use division. Example: a 15 cm tape = 5 groups of 3 cm, so 15 ÷ 3 = 5 times.',
    variants: [
      num('easy', 'A 15 cm tape is how many times as long as a 3 cm tape?', 5, '15/3', 'Count how many short tapes fill the long tape.', { fig: 'g3Tape', pic: { big: 15, small: 3, unit: 'cm', segs: true }, unit: 'times', explain: '15 ÷ 3 = 5 times.' }),
      num('easy', 'A 10 cm tape is how many times as long as a 2 cm tape?', 5, '10/2', 'Count how many short tapes fill the long tape.', { fig: 'g3Tape', pic: { big: 10, small: 2, unit: 'cm', segs: true }, unit: 'times', explain: '10 ÷ 2 = 5 times.' }),
      num('easy', 'An 18 cm tape is how many times as long as a 6 cm tape?', 3, '18/6', 'Count how many short tapes fill the long tape.', { fig: 'g3Tape', pic: { big: 18, small: 6, unit: 'cm', segs: true }, unit: 'times', explain: '18 ÷ 6 = 3 times.' }),
      num('medium', 'A 20 cm tape is how many times as long as a 4 cm tape?', 5, '20/4', 'Division: the long length ÷ the short length.', { fig: 'g3Tape', pic: { big: 20, small: 4, unit: 'cm' }, unit: 'times', explain: '20 ÷ 4 = 5 times.' })
    ] },
  { id: 'L3', lesson: 4, concept: '"How many times as many" problems', explain: 'The bigger number ÷ the number we compare with (the Divisor). Example: Reem has 24 blocks and Sami has 6: 24 ÷ 6 = 4 times.',
    variants: [
      num('medium', 'Reem has 24 blocks, and Sami has 6 blocks. Reem has how many times as many blocks as Sami?', 4, '24/6', 'Divide Reem’s blocks by Sami’s blocks.', { unit: 'times', explain: '24 ÷ 6 = 4 times.' }),
      num('medium', 'Sara has 30 sheets of coloured paper, and her little brother has 5. Sara has how many times as many sheets as her brother?', 6, '30/5', 'Divide the bigger number by the smaller number.', { unit: 'times', explain: '30 ÷ 5 = 6 times.' }),
      num('medium', 'Hassan has 9 blocks, and Mariam has 27 blocks. Mariam has how many times as many blocks as Hassan?', 3, '27/9', 'Divide the bigger number by the smaller number.', { unit: 'times', explain: '27 ÷ 9 = 3 times.' }),
      num('medium', 'A red ribbon is 9 m long, and a white ribbon is 36 m long. The white ribbon is how many times as long as the red ribbon?', 4, '36/9', 'Divide the longer length by the shorter length.', { fig: 'g3Tape', pic: { big: 36, small: 9, unit: 'm' }, unit: 'times', explain: '36 ÷ 9 = 4 times.' }),
      num('medium', 'There are 32 puddings and 8 jellies. There are how many times as many puddings as jellies?', 4, '32/8', 'Divide the bigger number by the smaller number.', { unit: 'times', explain: '32 ÷ 8 = 4 times.' }),
      num('medium', 'Hassan has 7 blocks, and Mariam has 35 blocks. Mariam has how many times as many blocks as Hassan?', 5, '35/7', 'Divide the bigger number by the smaller number.', { unit: 'times', explain: '35 ÷ 7 = 5 times.' })
    ] },
  { id: 'L4', lesson: 4, concept: 'The mathematical sentence for "how many times"', explain: 'In "how many times as many as …?", divide the bigger number by the number after "as many as" (the Divisor).',
    variants: [
      mc('medium', 'Reem has 24 blocks, and Sami has 6 blocks. Reem has how many times as many blocks as Sami?\nWhat is the mathematical sentence?', ['24 ÷ 6', '6 ÷ 24', '24 × 6', '24 − 6'], 'Divide the bigger number by Sami’s blocks.', { explain: '24 ÷ 6 = 4 times.' }),
      mc('medium', 'Gamal is 8 years old, and his grandmother is 64 years old. His grandmother is how many times as old as Gamal?\nWhat is the mathematical sentence?', ['64 ÷ 8', '8 ÷ 64', '64 × 8', '64 − 8'], 'Divide the bigger age by Gamal’s age.', { explain: '64 ÷ 8 = 8 times.' }),
      mc('medium', 'In the question "how many times as many as Sami’s blocks?", what is the Divisor?', ['the number of Sami’s blocks', 'the number of Reem’s blocks', 'the number of times', 'all the blocks together'], 'The Divisor is the number that comes after "as many as".', { explain: 'The Divisor: the number of Sami’s blocks.' })
    ] },
  { id: 'L5', lesson: 4, boss: true, concept: 'Challenge: how many times, with big numbers', explain: 'Divide the bigger number by the smaller number, using the smaller number’s times table.',
    variants: [
      boss('Gamal is 8 years old, and his grandmother is 64 years old. His grandmother is how many times as old as Gamal?', 8, '64/8', 'Divide 64 by 8. Think about the 8 times table.', { unit: 'times', explain: '64 ÷ 8 = 8 times.' }),
      boss('Ahmed has 63 sheets of coloured paper, and his sister has 7. Ahmed has how many times as many sheets as his sister?', 9, '63/7', 'Divide 63 by 7. Think about the 7 times table.', { unit: 'times', explain: '63 ÷ 7 = 9 times.' }),
      boss('The teacher has 36 pencils, and Hany has 4 pencils. The teacher has how many times as many pencils as Hany?', 9, '36/4', 'Divide 36 by 4. Think about the 4 times table.', { unit: 'times', explain: '36 ÷ 4 = 9 times.' }),
      boss('A red ribbon is 6 m long, and a white ribbon is 42 m long. The white ribbon is how many times as long as the red ribbon?', 7, '42/6', 'Divide 42 by 6. Think about the 6 times table.', { unit: 'times', explain: '42 ÷ 6 = 7 times.' })
    ] }
];

/* word problems as pictures (owner, 6 Nov 2026): key = idea.phrasing (1-based); a phrasing that already has a picture keeps it */
const S = (icon, n, label, more) => Object.assign({ icon, n, label }, more || {});
const STORY = {
  'J2.1': [S('strawberry', 12, '12 strawberries'), S('kid', 3, '3 people')],
  'J2.2': [S('orange', 15, '15 oranges'), S('kid', 5, '5 people')],
  'J2.3': [S('pencil', 16, '16 pencils'), S('kid', 4, '4 people')],
  'J2.4': [S('biscuit', 24, '24 cookies'), S('kid', 3, '3 people')],
  'J2.5': [S('strawberry', 18, '18 strawberries'), S('kid', 6, '6 people')],
  'J2.6': [S('pencil', 21, '21 pencils'), S('kid', 3, '3 people')],
  'J3.1': [S('pencil', 14, '14 pencils'), S('pencil', 2, '2 each')],
  'J3.2': [S('candy', 24, '24 candies'), S('candy', 4, '4 each')],
  'J3.3': [S('ball', 24, '24 balls'), S('ball', 6, '6 in a bag')],
  'J3.4': [S('candy', 32, '32 candies'), S('candy', 8, '8 each')],
  'J4.1': { fig: 'g3Tape', pic: { big: 45, small: 9, unit: 'cm', segs: true, noSmall: true } },
  'J4.2': { fig: 'g3Tape', pic: { big: 63, small: 9, unit: 'cm', segs: true, noSmall: true } },
  'J4.3': { fig: 'g3Tape', pic: { big: 64, small: 8, unit: 'cm', segs: true, noSmall: true } },
  'J4.4': { fig: 'g3Tape', pic: { big: 56, small: 8, unit: 'cm', segs: true, noSmall: true } },
  'J5.1': [S('biscuit', 24, '24 cookies'), S('kid', 3, '3 people')],
  'J5.4': [S('rose', 72, '72 roses'), S('rose', 9, '9 in a bunch')],
  'J6.1': [S('rose', 72, '72 roses'), S('rose', 9, '9 in a bunch')],
  'J6.2': [S('ball', 48, '48 balls'), S('ball', 8, '8 in a bag')],
  'K2.1': [S('apple', 6, '6 apples'), S('kid', 3, '3 people')],
  'K2.2': [S('adult', 6, '6 on the bus'), S('adult', 3, '3 get off')],
  'K2.3': [S('orange', 6, 'you have 6'), S('orange', 3, 'you get 3')],
  'K2.4': [S('pencil', 6, '6 pencils'), S('pencil', 3, '3 each')],
  'K2.5': [S('paper', 6, '6 each'), S('kid', 3, '3 people')],
  'K4.1': [S('paper', 18, '18 sheets'), S('paper', 6, '6 each')],
  'K4.2': [S('notebook', 27, '27 notebooks'), S('kid', 9, '9 children')],
  'K4.3': [S('pencil', 15, '15 pencils'), S('pencil', 5, '5 each')],
  'K4.4': [S('notebook', 28, '28 notebooks'), S('kid', 7, '7 children')],
  'L3.1': [S('block', 24, 'Reem 24'), S('block', 6, 'Sami 6')],
  'L3.2': [S('paper', 30, 'Sara 30'), S('paper', 5, 'brother 5')],
  'L3.3': [S('block', 9, 'Hassan 9'), S('block', 27, 'Mariam 27')],
  'L3.5': [S('pudding', 32, 'puddings 32'), S('jelly', 8, 'jellies 8')],
  'L3.6': [S('block', 7, 'Hassan 7'), S('block', 35, 'Mariam 35')],
  'L4.1': [S('block', 24, 'Reem 24'), S('block', 6, 'Sami 6')],
  'L4.2': [S('kid', null, 'Gamal 8 years'), S('adult', null, 'Grandma 64 years')],
  'L5.1': [S('kid', null, 'Gamal 8 years'), S('adult', null, 'Grandma 64 years')],
  'L5.2': [S('paper', 63, 'Ahmed 63'), S('paper', 7, 'sister 7')],
  'L5.3': [S('pencil', 36, 'teacher 36'), S('pencil', 4, 'Hany 4')],
  'L5.4': { fig: 'g3Tape', pic: { big: 42, small: 6, unit: 'm' } }
};
window.IDEAS.forEach(I => I.variants.forEach((v, i) => { const st = STORY[I.id + '.' + (i + 1)]; if (st && !v.fig) Object.assign(v, Array.isArray(st) ? { fig: 'g3Story', pic: { parts: st } } : st); }));
})();
