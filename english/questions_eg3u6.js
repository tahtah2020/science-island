/* English · Grade 3 · Term 1 · Unit 6 "Dare to Dream" · ministry book "English Primary 3", first term 2026/2027 (book pages 99-117)
   One English book for both tracks, so there is no _ar file.
   Lessons: 1 My Goal, My Dream: vocabulary, "Samer's Goal", present continuous (pp 100-103)
            2 A Day To Remember: Laila's spring day, punctuation, three-consonant clusters spr spl str scr, Mona's bike (pp 104-107)
            3 I Did It!: Tamer's math exam (pp 108-109)
            4 Helping Others Succeed: Yara the runner, self-assessment (pp 110-113)
            5 Let's Review Units 4, 5, and 6 (pp 114-117), kept as its own lesson so the badge names the review pages.
   Idea letters (one per lesson, running on from Units 1-5): U, V, W, X, Y.  Boss ideas: U5, V7, W3, X3, Y8.
   Easy first, difficulty rises slowly; hard only in the Boss idea. Every phrasing has a hint that points to the rule or the text, never the answer.
   Pictures: the owner's Gemini sheets (13 Nov 2026) cut into english/assets/g3_*.webp; tap pictures dream8, cluster6, fig 'photo'.
     A story picture is shown with "Which sentence matches the picture?" or with a question it does not answer.
   Review notes:
   - Listening (p 105 ex 4) is asked from the printed words.
   - Open tasks are not asked: p 103 ex 2, p 107 ex 3 and 4, p 109 ex 3, p 111 ex 2, p 112 ex 5 (own sentences, drawing), and the p 113 self-assessment.
   - p 106 ex 2 "write Mona's goal" prints no answer; the story's first sentence says it: to ride her red bike. Asked as a choice.
   - p 109 b "How did Tamer feel after he passed?": the story says he felt very proud and happy (asked as choose all).
   - p 114 ex 1: the book lists 8 words for 8 meanings; "nervous" is given "Feeling afraid or worried" and "proud" "To feel happy about what you did".
   - p 116 ex 5 b "Yara felt ___ when she fell in front of every one": from the box, shy. Owner, please check (the book prints no answer).
   - p 116 ex 7 asks to underline linking words: asked as "Which is the linking word?" (Then, because, so, After, First). */
(function () {
window.CHAPTER = { id: 'eg3u6', title: 'Dare to Dream' };
const ph = (...src) => ({ src, label: 'A picture for the question' });

window.IDEAS = [
  /* ---------- Lesson 1 · My Goal, My Dream (pages 100-103) ---------- */
  { id: 'U1', lesson: 1, concept: 'Vocabulary: goal, try, step, plan, practice, celebrate, success, reach (pp 100-101)',
    explain: 'goal, try, step, plan, practice, celebrate, success and reach are words about dreams and how to make them come true.',
    variants: [
      { type: 'tap', diagram: 'dream8', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap: practice.', answer: 'glPractice', hint: 'Look for a ball and cones.' },
      { type: 'tap', diagram: 'dream8', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap: try.', answer: 'glTry', hint: 'She swims hard.' },
      { type: 'tap', diagram: 'dream8', mode: 'normal', level: 'easy', q: 'Tap: goal.', answer: 'glGoal', hint: 'He dreams of being a doctor.' },
      { type: 'tap', diagram: 'dream8', mode: 'normal', level: 'easy', q: 'Tap: celebrate.', answer: 'glCelebrate', hint: 'Both fists up, very happy.' },
      { type: 'tap', diagram: 'dream8', mode: 'normal', level: 'medium', q: 'Tap: step.', answer: 'glStep', hint: 'He climbs up big books.' },
      { type: 'tap', diagram: 'dream8', mode: 'normal', level: 'medium', q: 'Tap: plan.', answer: 'glPlan', hint: 'Look for a clipboard and a drawing.' },
      { type: 'tap', diagram: 'dream8', mode: 'normal', level: 'medium', q: 'Tap: success.', answer: 'glSuccess', hint: 'A group with hands together up high.' },
      { type: 'tap', diagram: 'dream8', mode: 'normal', level: 'medium', q: 'Tap: reach.', answer: 'glReach', hint: 'He shows OK with his fingers.' }
    ] },
  { id: 'U2', lesson: 1, concept: 'Read and number (p 101 ex 2)',
    explain: 'Samer practices football. Laila has a plan for the future. Karim has a goal to be a doctor. Mariam celebrates passing the exam. You should take a step to be a better student. Nour tries hard to be a great swimmer.',
    variants: [
      { type: 'mc', fig: 'photo', pic: ph('g3_gl_goal'), mode: 'normal', level: 'easy', q: 'Which sentence matches the picture?', options: ['Karim has a goal to be a doctor.', 'Samer practices football.', 'Nour tries hard to be a great swimmer.'], answer: 0, hint: 'Look at his white coat.' },
      { type: 'mc', fig: 'photo', pic: ph('g3_gl_try'), mode: 'normal', level: 'easy', q: 'Which sentence matches the picture?', options: ['Nour tries hard to be a great swimmer.', 'Laila has a plan for the future.', 'Karim has a goal to be a doctor.'], answer: 0, hint: 'Look at the water.' },
      { type: 'mc', fig: 'photo', pic: ph('g3_gl_star'), mode: 'normal', level: 'medium', q: 'Which sentence matches the picture?', options: ['Mariam celebrates passing the exam.', 'Samer practices football.', 'You should take a step to be a better student.'], answer: 0, hint: 'Look at the star on her paper.' },
      { type: 'mc', fig: 'photo', pic: ph('g3_gl_step'), mode: 'normal', level: 'medium', q: 'Which sentence matches the picture?', options: ['You should take a step to be a better student.', 'Laila has a plan for the future.', 'Mariam celebrates passing the exam.'], answer: 0, hint: 'He goes up one book at a time.' },
      { type: 'fill', fig: 'photo', pic: ph('g3_gl_plan'), mode: 'normal', level: 'medium', q: 'Laila has a ___ for the future.', options: ['plan', 'goal', 'step'], answer: 0, hint: 'Look at the drawing of a building.' }
    ] },
  { id: 'U3', lesson: 1, concept: 'Story: Samer’s Goal (p 102)',
    explain: 'Samer is trying to get better at football. He is training every day. He is kicking the ball and splashing in the mud. Now, he is playing a match with his friends. He is scoring a goal and is feeling very proud.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What is Samer trying to get better at?', options: ['football', 'swimming', 'reading'], answer: 0, hint: 'Read the first sentence.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'How often is Samer training?', options: ['every day', 'once a week', 'never'], answer: 0, hint: 'Read the second sentence.' },
      { type: 'mc', fig: 'photo', pic: ph('g3_sm_mud'), mode: 'normal', level: 'medium', q: 'Which sentence matches the picture?', options: ['He is kicking the ball and splashing in the mud.', 'He is scoring a goal.', 'He is playing a match with his friends.'], answer: 0, hint: 'Look under the ball.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Who is Samer playing a match with?', options: ['his friends', 'his father', 'his teacher'], answer: 0, hint: 'Read: Now, he is playing a match with …' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'How is Samer feeling after he scores?', options: ['very proud', 'very tired', 'very scared'], answer: 0, hint: 'Read the last sentence.' }
    ] },
  { id: 'U4', lesson: 1, concept: 'Present continuous: am / is / are + verb-ing (p 103)',
    explain: 'We use the present continuous to talk about actions happening now or around now: I am practicing. Samer is scoring a goal. He is making a plan. The boys are celebrating.',
    variants: [
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Samer ___ scoring a goal.', options: ['is', 'am', 'are'], answer: 0, hint: 'Samer = he: is.' },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'I ___ practicing.', options: ['am', 'is', 'are'], answer: 0, hint: 'I goes with am.' },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'The boys ___ celebrating.', options: ['are', 'is', 'am'], answer: 0, hint: 'The boys = they: are.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'He is ___ a plan to practice every day.', options: ['making', 'make', 'made'], answer: 0, hint: 'After is: verb + ing.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'She is ___ to be a better student.', options: ['trying', 'try', 'tried'], answer: 0, hint: 'After is: verb + ing.' },
      { type: 'table', mode: 'normal', level: 'medium', q: 'am, is or are?', poc: 'Who?', cols: ['am', 'is', 'are'], items: ['I', 'Samer', 'The boys', 'She', 'We'], answer: [0, 1, 2, 1, 2], hint: 'I am. One person: is. More than one: are.' }
    ] },
  { id: 'U5', lesson: 1, boss: true, concept: 'Dreams and the present continuous',
    explain: 'Samer is training every day. He is kicking the ball. Now, he is playing a match. He is scoring a goal.',
    variants: [
      { type: 'order', mode: 'boss', level: 'hard', q: 'Put Samer’s story in order.', items: ['He is playing a match with his friends.', 'Samer is trying to get better at football.', 'He is scoring a goal and is feeling very proud.', 'He is training every day.'], answer: [1, 3, 0, 2], hint: 'He tries and trains first; the goal comes last.' },
      { type: 'build', style: 'sentence', mode: 'boss', level: 'hard', q: 'Put the words in order.', parts: ['I', 'am', 'trying', 'to be a better student.'], extra: ['is'], hint: 'I am + verb-ing.' },
      { type: 'match', mode: 'boss', level: 'hard', q: 'Match the word to its meaning.', left: ['goal', 'practice', 'celebrate'], right: ['something you want to achieve', 'do something again and again to get better', 'show happiness for something good'], answer: [0, 1, 2], hint: 'Think of Karim, Samer and Mariam.' }
    ] },

  /* ---------- Lesson 2 · A Day To Remember (pages 104-107) ---------- */
  { id: 'V1', lesson: 2, concept: 'Story: Laila’s spring day (p 104)',
    explain: 'It is spring, and Laila is playing outside. She is spraying water and laughing as it makes a big splash. She runs in the garden, playing with her toy car. The car spins fast and bumps into a rock, but it doesn’t split—just bounces back! Laila smiles, sits down, and watches a funny cartoon on the screen.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What season is it?', options: ['spring', 'winter', 'autumn'], answer: 0, hint: 'Read the first words.' },
      { type: 'mc', fig: 'photo', pic: ph('g3_la_spray'), mode: 'normal', level: 'easy', q: 'Which sentence matches the picture?', options: ['She is spraying water and laughing.', 'She watches a funny cartoon.', 'The car bumps into a rock.'], answer: 0, hint: 'Look at the hose.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What does Laila play with in the garden?', options: ['her toy car', 'a ball', 'a kite'], answer: 0, hint: 'Read the third sentence.' },
      { type: 'mc', fig: 'photo', pic: ph('g3_la_car'), mode: 'normal', level: 'medium', q: 'What happens to the car when it bumps into the rock?', options: ['It bounces back.', 'It splits.', 'It stops forever.'], answer: 0, hint: 'Read: it doesn’t split—just …' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What does Laila watch at the end?', options: ['a funny cartoon on the screen', 'a football match', 'the rain'], answer: 0, hint: 'Read the last sentence.' }
    ] },
  { id: 'V2', lesson: 2, concept: 'Punctuation and capital letters (pp 104-105)',
    explain: 'Where is Laila playing? (a question) She runs in the garden. (a sentence) She is spraying water everywhere. The car spins fast.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Where is Laila playing ___', options: ['?', '.'], answer: 0, hint: 'It starts with Where.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'She runs in the garden ___', options: ['.', '?'], answer: 0, hint: 'Is it a question?' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which sentence is correct?', options: ['The car spins fast.', 'the car spins fast.', 'the car spins fast'], answer: 0, hint: 'Capital letter at the start, period at the end.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which sentence is correct?', options: ['She is spraying water everywhere.', 'she is spraying water every where', 'She is spraying water everywhere?'], answer: 0, hint: 'It is not a question; everywhere is one word.' }
    ] },
  { id: 'V3', lesson: 2, concept: 'Phonics: three-consonant clusters spr, spl, str, scr (p 105)',
    explain: 'Words that begin with three consonants: spring, spray, splash, split, screen, scratch, string, street.',
    variants: [
      { type: 'tap', diagram: 'cluster6', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap: string.', answer: 'clString', hint: 'A red ball of thin thread.' },
      { type: 'tap', diagram: 'cluster6', mode: 'normal', level: 'easy', q: 'Tap: street.', answer: 'clStreet', hint: 'Cars drive on it.' },
      { type: 'tap', diagram: 'cluster6', mode: 'normal', level: 'easy', q: 'Tap: spring.', answer: 'clSpring', hint: 'Trees with pink flowers.' },
      { type: 'tap', diagram: 'cluster6', mode: 'normal', level: 'medium', q: 'Tap: scratch.', answer: 'clScratch', hint: 'A cat and a post.' },
      { type: 'tap', diagram: 'cluster6', mode: 'normal', level: 'medium', q: 'Tap: screen.', answer: 'clScreen', hint: 'She watches a cartoon on it.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Complete the word: ___ ing', options: ['spr', 'spl', 'scr'], answer: 0, hint: 'It is the season with flowers.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Complete the word: ___ ash', options: ['spl', 'str', 'spr'], answer: 0, hint: 'Water makes a big …' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Complete the word: ___ eet', options: ['str', 'scr', 'spl'], answer: 0, hint: 'Cars drive on it.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Complete the word: ___ een', options: ['scr', 'str', 'spr'], answer: 0, hint: 'A TV has one.' }
    ] },
  { id: 'V4', lesson: 2, concept: 'Rearrange the letters (p 105 ex 6)',
    explain: 'gsnirp = spring, srteet = street, hsalps = splash, erscen = screen.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Rearrange: g s n i r p', options: ['spring', 'string', 'sprint'], answer: 0, hint: 'The season with flowers.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Rearrange: s r t e e t', options: ['street', 'treets', 'steer'], answer: 0, hint: 'Cars drive on it.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Rearrange: h s a l p s', options: ['splash', 'slash', 'splats'], answer: 0, hint: 'What water makes when it falls.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Rearrange: e r s c e n', options: ['screen', 'scene', 'green'], answer: 0, hint: 'Laila watches a cartoon on it.' }
    ] },
  { id: 'V5', lesson: 2, concept: 'Story: Mona learns to ride her bike (pp 106-107)',
    explain: 'Mona is learning how to ride her red bike. She is practicing every day in the garden after school. First, she is holding the bike and walking with it. Then, she is pushing her feet on the pedals. Now, she is riding around the garden path. She is feeling proud. Mona is showing that practice brings success.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What is Mona’s goal?', options: ['to ride her red bike', 'to swim fast', 'to score a goal'], answer: 0, hint: 'Read the first sentence.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Where is Mona practicing?', options: ['in the garden', 'at school', 'in the street'], answer: 0, hint: 'Read the second sentence.' },
      { type: 'mc', fig: 'photo', pic: ph('g3_mb_hold'), mode: 'normal', level: 'medium', q: 'Which sentence matches the picture?', options: ['She is holding the bike and walking with it.', 'She is riding around the garden path.', 'She is pushing her feet on the pedals.'], answer: 0, hint: 'Is she on the bike?' },
      { type: 'mc', fig: 'photo', pic: ph('g3_mb_ride'), mode: 'normal', level: 'medium', q: 'Which sentence matches the picture?', options: ['Now, she is riding around the garden path.', 'First, she is holding the bike.', 'She is feeling sad.'], answer: 0, hint: 'She is on the bike and smiling.' },
      { type: 'multi', mode: 'normal', level: 'medium', q: 'Choose all the verbs in the present continuous.', options: ['is practicing', 'is riding', 'is feeling', 'rode'], answer: [0, 1, 2], hint: 'is + verb-ing.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What does Mona show?', options: ['Practice brings success.', 'Bikes are slow.', 'Gardens are small.'], answer: 0, hint: 'Read the last sentence.' }
    ] },
  { id: 'V6', lesson: 2, concept: 'Put Mona’s sentences in order (p 107 ex 5)',
    explain: 'Mona is learning how to ride her red bike. She is practicing every day in the garden after school. She is holding the bike and walking with it. She is pushing her feet on the pedals. Mona is riding around the garden path. She is feeling proud.',
    variants: [
      { type: 'order', mode: 'normal', level: 'medium', q: 'Put the sentences in the correct order.', items: ['She is pushing her feet on the pedals.', 'She is holding the bike and walking with it.', 'Mona is riding around the garden path.', 'She is feeling proud.'], answer: [1, 0, 2, 3], hint: 'First she walks with the bike; last she feels proud.' },
      { type: 'fill', fig: 'photo', pic: ph('g3_mb_pedal'), mode: 'normal', level: 'easy', q: 'Then, she is pushing her feet on the ___.', options: ['pedals', 'path', 'garden'], answer: 0, hint: 'The part of the bike under her feet.' }
    ] },
  { id: 'V7', lesson: 2, boss: true, concept: 'Laila, Mona and the three-consonant clusters',
    explain: 'spr: spring, spray. spl: splash, split. str: string, street. scr: screen, scratch.',
    variants: [
      { type: 'table', mode: 'boss', level: 'hard', q: 'Sort the words by how they begin.', poc: 'Word', cols: ['spr', 'spl', 'str', 'scr'], items: ['spray', 'split', 'street', 'scratch', 'spring', 'splash', 'string', 'screen'], answer: [0, 1, 2, 3, 0, 1, 2, 3], hint: 'Look at the first three letters.' },
      { type: 'order', mode: 'boss', level: 'hard', q: 'Put Mona’s story in order.', items: ['Mona is riding around the garden path.', 'Mona is learning how to ride her red bike.', 'She is feeling proud.', 'She is practicing every day in the garden after school.'], answer: [1, 3, 0, 2], hint: 'She is learning first; she feels proud at the end.' },
      { type: 'fill', mode: 'boss', level: 'hard', q: 'The car bumps into a rock, but it doesn’t ___—just bounces back!', options: ['split', 'spring', 'string'], answer: 0, hint: 'Break into two pieces.' }
    ] },

  /* ---------- Lesson 3 · I Did It! (pages 108-109) ---------- */
  { id: 'W1', lesson: 3, concept: 'Story: Tamer’s math exam (p 108)',
    explain: 'Tamer studied hard every day for his math exam. On the exam day, he felt nervous. Then, he answered all the questions. Later, the teacher told him that he got full marks. Tamer felt very proud and happy. He celebrated with his family at home. They clapped, smiled, and said, “Well done!” It was a great day.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What did Tamer study for?', options: ['his math exam', 'a football match', 'a race'], answer: 0, hint: 'Read the first sentence.' },
      { type: 'mc', fig: 'photo', pic: ph('g3_tm_nervous'), mode: 'normal', level: 'easy', q: 'Which sentence matches the picture?', options: ['On the exam day, he felt nervous.', 'He celebrated with his family.', 'He got full marks.'], answer: 0, hint: 'Look at his face.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What did the teacher tell him?', options: ['He got full marks.', 'He must try again.', 'He was late.'], answer: 0, hint: 'Read: the teacher told him that …' },
      { type: 'multi', mode: 'normal', level: 'medium', q: 'How did Tamer feel after he passed? Choose two.', options: ['proud', 'happy', 'nervous', 'bored'], answer: [0, 1], hint: 'Read: Tamer felt very … and …' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Who did Tamer celebrate with?', options: ['his family', 'his coach', 'his teacher'], answer: 0, hint: 'Read: He celebrated with his … at home.' },
      { type: 'mc', fig: 'photo', pic: ph('g3_tm_family'), mode: 'normal', level: 'medium', q: 'What did his family say?', options: ['“Well done!”', '“Try again!”', '“Good night!”'], answer: 0, hint: 'They clapped and smiled.' }
    ] },
  { id: 'W2', lesson: 3, concept: 'Past simple in Tamer’s story',
    explain: 'Tamer studied hard. He felt nervous. He answered all the questions. The teacher told him. He got full marks. He celebrated with his family. They clapped and smiled.',
    variants: [
      { type: 'fill', mode: 'normal', level: 'easy', q: 'Tamer ___ hard every day for his math exam.', options: ['studied', 'studies', 'study'], answer: 0, hint: 'It happened in the past: y → ied.' },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'Then, he ___ all the questions.', options: ['answered', 'answer', 'answers'], answer: 0, hint: 'Past: add -ed.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'He ___ full marks.', options: ['got', 'get', 'gets'], answer: 0, hint: 'get is a special verb: no -ed.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'They ___, smiled, and said, “Well done!”', options: ['clapped', 'clap', 'claps'], answer: 0, hint: 'Past: add -ed.' }
    ] },
  { id: 'W3', lesson: 3, boss: true, concept: 'I did it! A story frame',
    explain: 'First, I wanted to … Then, I … After that, I … Finally, I felt … Tamer: he studied, felt nervous, answered all the questions, got full marks, and celebrated.',
    variants: [
      { type: 'order', mode: 'boss', level: 'hard', q: 'Put Tamer’s story in order.', items: ['He answered all the questions.', 'Tamer studied hard every day.', 'He celebrated with his family.', 'The teacher told him he got full marks.'], answer: [1, 0, 3, 2], hint: 'Studying first, celebrating last.' },
      { type: 'match', mode: 'boss', level: 'hard', q: 'Match the linking word to the story frame.', left: ['First, I wanted to', 'Then, I', 'Finally, I felt'], right: ['get full marks.', 'studied every day.', 'proud.'], answer: [0, 1, 2], hint: 'Finally goes with a feeling.' },
      { type: 'fill', mode: 'boss', level: 'hard', q: 'On the exam day, he felt nervous. ___, he answered all the questions.', options: ['Then', 'First', 'But'], answer: 0, hint: 'What happens next?' }
    ] },

  /* ---------- Lesson 4 · Helping Others Succeed (pages 110-113) ---------- */
  { id: 'X1', lesson: 4, concept: 'Story: Yara the runner (p 110)',
    explain: 'Yara is a fast runner. She practices every day at the school field. One day, her friend needed help getting ready for a race. Yara showed her how to run and practice. They ran together every day. On race day, her friend ran well and smiled. Yara felt happy. They both celebrated their success with big cheers.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What is Yara good at?', options: ['running', 'swimming', 'drawing'], answer: 0, hint: 'Read the first sentence.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Where does Yara practice?', options: ['at the school field', 'in the pool', 'at home'], answer: 0, hint: 'Read the second sentence.' },
      { type: 'mc', fig: 'photo', pic: ph('g3_ya_show'), mode: 'normal', level: 'medium', q: 'Which sentence matches the picture?', options: ['Yara showed her how to run and practice.', 'They both celebrated with big cheers.', 'Her friend ran well on race day.'], answer: 0, hint: 'Yara points to show her friend.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What did her friend need help with?', options: ['getting ready for a race', 'her homework', 'cleaning her room'], answer: 0, hint: 'Read the third sentence.' },
      { type: 'mc', fig: 'photo', pic: ph('g3_ya_cheer'), mode: 'normal', level: 'medium', q: 'How did they celebrate their success?', options: ['with big cheers', 'with a cake', 'with a song'], answer: 0, hint: 'Read the last sentence.' }
    ] },
  { id: 'X2', lesson: 4, concept: 'Action verbs and punctuation in Yara’s story (p 111)',
    explain: 'Action verbs in the story: practices, needed, showed, ran, smiled, felt, celebrated. Yara is a fast runner. They ran every day at the school field. Her friend smiled on race day. She felt happy and celebrated.',
    variants: [
      { type: 'multi', mode: 'normal', level: 'easy', q: 'Choose all the action verbs from Yara’s story.', options: ['showed', 'ran', 'celebrated', 'runner'], answer: [0, 1, 2], hint: 'A runner is a person, not an action.' },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'They ___ together every day.', options: ['ran', 'run', 'runs'], answer: 0, hint: 'Past: run → ran.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which sentence is correct?', options: ['Yara is a fast runner.', 'yara is a fast runner.', 'yara is a fast runner'], answer: 0, hint: 'Yara is a name: capital Y.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which sentence is correct?', options: ['Her friend smiled on race day.', 'her friend smiled on race day', 'Her friend smiled on race day?'], answer: 0, hint: 'Capital letter at the start, period at the end.' },
      { type: 'fill', fig: 'photo', pic: ph('g3_ya_together'), mode: 'normal', level: 'medium', q: 'Yara practiced every day. I practiced ___ and felt proud.', options: ['running', 'sleeping', 'eating'], answer: 0, hint: 'Look at the picture.' }
    ] },
  { id: 'X3', lesson: 4, boss: true, concept: 'Helping others succeed',
    explain: 'Yara showed her friend how to run. They ran together every day. On race day, her friend ran well. They celebrated their success.',
    variants: [
      { type: 'order', mode: 'boss', level: 'hard', q: 'Put Yara’s story in order.', items: ['They ran together every day.', 'Her friend needed help getting ready for a race.', 'They both celebrated their success.', 'On race day, her friend ran well and smiled.'], answer: [1, 0, 3, 2], hint: 'The friend needs help first; they celebrate last.' },
      { type: 'build', style: 'sentence', mode: 'boss', level: 'hard', q: 'Put the words in order.', parts: ['Yara', 'practiced', 'every day', 'at the school field.'], extra: ['practices'], hint: 'Talk about the past: -ed.' },
      { type: 'mc', mode: 'boss', level: 'hard', q: 'Why did Yara feel happy?', options: ['Her friend ran well.', 'She won a cup.', 'She was tired.'], answer: 0, hint: 'She helped her friend.' }
    ] },

  /* ---------- Lesson 5 · Let's Review Units 4, 5, and 6 (pages 114-117) ---------- */
  { id: 'Y1', lesson: 5, concept: 'Match the words to their meanings (p 114)',
    explain: 'proud: to feel happy about what you did. team: a group working together. goal: something you want to achieve. nervous: feeling afraid or worried. solution: an answer to a problem. plan: a way to get something done. celebrate: to show happiness for something good. excited: to feel very happy and full of energy.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'A group working together:', options: ['team', 'goal', 'plan'], answer: 0, hint: 'Omar’s coach said: Work as a …' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Something you want to achieve:', options: ['goal', 'team', 'solution'], answer: 0, hint: 'Karim’s … is to be a doctor.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'An answer to a problem:', options: ['solution', 'plan', 'celebrate'], answer: 0, hint: 'Problem and …' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Feeling afraid or worried:', options: ['nervous', 'proud', 'excited'], answer: 0, hint: 'Omar before his first match.' },
      { type: 'match', mode: 'normal', level: 'medium', q: 'Match the word to its meaning.', left: ['proud', 'plan', 'celebrate', 'excited'], right: ['to feel happy about what you did', 'a way to get something done', 'to show happiness for something good', 'to feel very happy and full of energy'], answer: [0, 1, 2, 3], hint: 'Start with proud.' }
    ] },
  { id: 'Y2', lesson: 5, concept: 'Sound sort: hard and soft c and g; missing letters (p 115)',
    explain: 'Hard c: cat, cake, come, cook, car, scratch, screen. Soft c: pencil, city, rice, face. Hard g: good, dog, gum, go. Soft g: giraffe, page, Egypt, huge.',
    variants: [
      { type: 'table', mode: 'normal', level: 'medium', q: 'Sort the c words.', poc: 'Word', cols: ['hard c /k/', 'soft c /s/'], items: ['cake', 'pencil', 'come', 'rice', 'cook', 'face'], answer: [0, 1, 0, 1, 0, 1], hint: 'Look at the letter after c.' },
      { type: 'table', mode: 'normal', level: 'medium', q: 'Sort the g words.', poc: 'Word', cols: ['hard g /g/', 'soft g /dʒ/'], items: ['good', 'page', 'gum', 'Egypt', 'go', 'huge'], answer: [0, 1, 0, 1, 0, 1], hint: 'Look at the letter after g.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Fill in the missing letters: c _ _ e', options: ['cake', 'city', 'cute'], answer: 0, hint: 'From the box: good, giraffe, screen, city, cake, split.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Fill in the missing letters: _ _ lit', options: ['split', 'slit', 'spilt'], answer: 0, hint: 'From the box: good, giraffe, screen, city, cake, split.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Rearrange: s r t t e e', options: ['street', 'setter', 'tester'], answer: 0, hint: 'From the box: cake, screen, splash, city, face, street.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Rearrange: p l s a h s', options: ['splash', 'slaps', 'palms'], answer: 0, hint: 'From the box: cake, screen, splash, city, face, street.' }
    ] },
  { id: 'Y3', lesson: 5, concept: 'Choose the correct feeling word (p 116 ex 5)',
    explain: 'Amir was tired after playing all day. Yara felt shy when she fell in front of everyone. Mai was scared of the dog at first. Samer was excited to go on the trip. Tamer felt happy after he passed the exam.',
    variants: [
      { type: 'fill', mode: 'normal', level: 'easy', q: 'Amir was ___ after playing all day.', options: ['tired', 'excited', 'shy'], answer: 0, hint: 'All day is a long time.' },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'Tamer felt ___ after he passed the exam.', options: ['happy', 'scared', 'tired'], answer: 0, hint: 'Passing is good news.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Mai was ___ of the dog at first.', options: ['scared', 'happy', 'tired'], answer: 0, hint: 'At first she was afraid.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Samer was ___ to go on the trip.', options: ['excited', 'shy', 'scared'], answer: 0, hint: 'He can’t wait to go!' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Yara felt ___ when she fell in front of everyone.', options: ['shy', 'excited', 'happy'], answer: 0, hint: 'Everyone was looking at her.' }
    ] },
  { id: 'Y4', lesson: 5, concept: 'Present continuous in the review (p 116 ex 6)',
    explain: 'Omar and Ziad are building a bridge across the stream. Mai is touching the dog gently. Amir is practicing his speech. Samer is playing football now.',
    variants: [
      { type: 'fill', mode: 'normal', level: 'easy', q: 'Samer ___ football now.', options: ['is playing', 'plays', 'play'], answer: 0, hint: 'Now: is + verb-ing.' },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'Omar and Ziad ___ a bridge across the stream.', options: ['are building', 'built', 'builds'], answer: 0, hint: 'Two boys: are + verb-ing.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Mai ___ the dog gently.', options: ['is touching', 'touches', 'touched'], answer: 0, hint: 'Choose the present continuous: is + verb-ing.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Amir ___ his speech.', options: ['is practicing', 'practiced', 'practice'], answer: 0, hint: 'Choose the present continuous: is + verb-ing.' }
    ] },
  { id: 'Y5', lesson: 5, concept: 'Linking words that show order or reason (p 116 ex 7)',
    explain: 'Then, he took a deep breath and started reading. She felt strong because she practiced. He practiced every day, so he got better. After she touched the dog, she smiled. First, he made a plan.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: '“First, he made a plan.” Which is the linking word?', options: ['First', 'made', 'plan'], answer: 0, hint: 'It shows the order.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: '“She felt strong because she practiced.” Which is the linking word?', options: ['because', 'strong', 'practiced'], answer: 0, hint: 'It gives the reason.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: '“He practiced every day, so he got better.” Which is the linking word?', options: ['so', 'every', 'better'], answer: 0, hint: 'It shows what happened because of it.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: '“After she touched the dog, she smiled.” Which is the linking word?', options: ['After', 'touched', 'smiled'], answer: 0, hint: 'It shows the order.' }
    ] },
  { id: 'Y6', lesson: 5, concept: 'Fix the sentences: capitals, periods, question marks (p 117 ex 8)',
    explain: 'Kareem studied for his exam. What did Basel do every day? He felt proud after the speech.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Which sentence is correct?', options: ['Kareem studied for his exam.', 'Kareem studied for his exam', 'kareem studied for his exam?'], answer: 0, hint: 'It needs a period.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which sentence is correct?', options: ['What did Basel do every day?', 'what did Basel do every day', 'What did Basel do every day.'], answer: 0, hint: 'It is a question.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which sentence is correct?', options: ['He felt proud after the speech.', 'he felt proud after the speech', 'He felt proud after the speech?'], answer: 0, hint: 'Capital letter at the start, period at the end.' }
    ] },
  { id: 'Y7', lesson: 5, concept: 'Past simple or present continuous? (p 117 ex 9)',
    explain: 'Yesterday, Salma played with her doll. Now, she is eating her lunch. Last week, we visited the zoo. Look! The boys are running in the garden. Hani is reading a book right now. Yesterday, I watched a cartoon. Look! The cat is jumping on the chair. Last night, my dad cooked dinner.',
    variants: [
      { type: 'fill', mode: 'normal', level: 'easy', q: 'Yesterday, Salma ___ with her doll.', options: ['played', 'plays', 'playing'], answer: 0, hint: 'Yesterday = the past.' },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'Now, she ___ her lunch.', options: ['is eating', 'ate', 'eats'], answer: 0, hint: 'Now = is + verb-ing.' },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'Last week, we ___ the zoo.', options: ['visited', 'visit', 'visiting'], answer: 0, hint: 'Last week = the past.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Look! The boys ___ in the garden.', options: ['are running', 'run', 'ran'], answer: 0, hint: 'Look! It is happening now.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Hani ___ a book right now.', options: ['is reading', 'read', 'reads'], answer: 0, hint: 'Right now = is + verb-ing.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Yesterday, I ___ a cartoon.', options: ['watched', 'watch', 'watching'], answer: 0, hint: 'Yesterday = the past.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Look! The cat ___ on the chair.', options: ['is jumping', 'jumped', 'jumps'], answer: 0, hint: 'Look! It is happening now.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Last night, my dad ___ dinner.', options: ['cooked', 'cook', 'cooking'], answer: 0, hint: 'Last night = the past.' }
    ] },
  { id: 'Y8', lesson: 5, boss: true, concept: 'Review of Units 4, 5 and 6',
    explain: 'Past: yesterday, last week, last night → -ed or a special verb. Now, right now, Look! → am / is / are + verb-ing.',
    variants: [
      { type: 'table', mode: 'boss', level: 'hard', q: 'Past simple or present continuous?', poc: 'Sentence', cols: ['past simple', 'present continuous'], items: ['Yesterday, I watched a cartoon.', 'Look! The cat is jumping.', 'Last night, my dad cooked dinner.', 'Hani is reading a book right now.'], answer: [0, 1, 0, 1], hint: 'Look for yesterday, last night, now, Look!' },
      { type: 'match', mode: 'boss', level: 'hard', q: 'Match the word to its meaning.', left: ['team', 'solution', 'nervous', 'goal'], right: ['a group working together', 'an answer to a problem', 'feeling afraid or worried', 'something you want to achieve'], answer: [0, 1, 2, 3], hint: 'Start with team.' },
      { type: 'build', style: 'sentence', mode: 'boss', level: 'hard', q: 'Put the words in order.', parts: ['Look!', 'The boys', 'are running', 'in the garden.'], extra: ['ran'], hint: 'Look! = it is happening now.' }
    ] }
];
})();
