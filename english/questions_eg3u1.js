/* English · Grade 3 · Term 1 · Unit 1 "Let’s Learn Together!" · ministry book "English Primary 3", first term 2026/2027 (book pages 5-26)
   One English book for both tracks (subject lang { lang: 'en', ar: 'en' }), so there is no _ar file.
   Lessons: 1 Greetings and Introductions (pp 6-9) · 2 Classroom Rules + the digraph "wh" (pp 10-12)
            3 Describing People + verb "to be" + reading "My friend Mona" (pp 13-18) · 4 Daily Routines + present simple, self-assessment (pp 19-26)
   Idea letters (one per lesson): A, B, C, D.  Boss ideas: A7, B7, C9, D9.
   Easy first, difficulty rises slowly inside each lesson; hard only in the Boss idea. Every phrasing has a hint that points to the rule or
   the text, never the answer.
   Pictures: the owner's Gemini pictures (12 Nov 2026) cut into english/assets/g3_*.webp; tap pictures greet6, rules6, wh3, looks5, people6,
     feel3, routine8, daily8 and figs 'photo' (q.pic.src) and 'clock' (drawn in code: the answer is an exact hour) in english/g3_art.js.
   Review notes:
   - Listening tasks (p 9 ex 8, p 25) are asked from the printed text and pictures (no audio on the site).
   - Open tasks are not asked: p 7 ex 5 (own information, drawing), p 8 ex 7, p 14 ex 3, p 17 ex 4, p 22 ex 2, p 25 ex 2 b-c, p 26 ex 2, p 11 ex 4
     and p 26 self-assessment (how well I follow the rules).
   - p 21 "Look, read, and order" prints no single order (watch TV, read, play can come in any order): not asked as an order; only the
     order the texts print (Amir p 22, Lina p 24, Sara p 25) is asked.
   - p 12 ex 2 and ex 3 have no printed answers but each has one word only (the six "wh" words of ex 1): asked.
   - p 15 ex 6 d "My mother is very ___." fits kind (the only word left after a, b, c): asked with "kind".
   - p 14 ex 5 item 5 "My teacher smiles. She is ___ (happy – angry – short)": asked with "happy".
   - p 16 ex 2 item 5 and p 23: "You is …" style distractors are the book's own. p 24 ex 9 "We (study – studies)": study.
   - p 15 ex 8 is a word search (straight lines only): the site asks which words are in it instead. */
(function () {
window.CHAPTER = { id: 'eg3u1', title: 'Let’s Learn Together!' };
const ph = (...src) => ({ src, label: 'A picture for the question' });

window.IDEAS = [
  /* ---------- Lesson 1 · Greetings and Introductions (pages 6-9) ---------- */
  { id: 'A1', lesson: 1, concept: 'Greetings: Hello, Good morning, How are you?, Nice to meet you, See you later, Goodbye',
    explain: 'We say Hello! and Good morning! when we meet. We ask How are you? We say Nice to meet you to someone new. We say See you later! and Goodbye! when we leave.',
    variants: [
      { type: 'tap', diagram: 'greet6', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap the boy who says “Hello!”', answer: 'gHello', hint: 'He waves his hand. He is not going away.' },
      { type: 'tap', diagram: 'greet6', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap the children who say “Good morning!”', answer: 'gMorning', hint: 'Look for the sun coming up.' },
      { type: 'tap', diagram: 'greet6', mode: 'normal', level: 'easy', q: 'Tap the boy who says “Goodbye!”', answer: 'gBye', hint: 'He has his bag and he is going away.' },
      { type: 'tap', diagram: 'greet6', mode: 'normal', level: 'easy', q: 'Two boys meet for the first time. Tap them.', answer: 'gMeet', hint: 'They shake hands.' },
      { type: 'tap', diagram: 'greet6', mode: 'normal', level: 'medium', q: 'Tap the girl who says “My name is…”.', answer: 'gIntro', hint: 'She puts her hand on her chest.' },
      { type: 'mc', fig: 'photo', pic: ph('g3_goodbye'), mode: 'normal', level: 'easy', q: 'Look. What does he say?', options: ['Goodbye!', 'Good morning!', 'Nice to meet you.'], answer: 0, hint: 'He is going home.' }
    ] },
  { id: 'A2', lesson: 1, concept: 'When do we say it? (p 6 ex 3)',
    explain: 'Good morning! = when you meet in the morning. How are you? = when you check on someone. Nice to meet you. = when you meet someone new. See you later! = when you say goodbye.',
    variants: [
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'When do you say “Good morning!”?', options: ['When you meet in the morning', 'When you say goodbye', 'When you go to sleep'], answer: 0, hint: 'Look at the word: morning.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'When do you say “See you later!”?', options: ['When you say goodbye', 'When you meet in the morning', 'When you meet someone new'], answer: 0, hint: 'You will see your friend later, not now.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'When do you say “Nice to meet you.”?', options: ['When you meet someone new', 'When you say goodbye', 'When you check on someone'], answer: 0, hint: 'You do not know this person yet.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'When do you say “How are you?”?', options: ['When you check on someone', 'When you meet someone new', 'When you say goodbye'], answer: 0, hint: 'You want to know if your friend is well.' },
      { type: 'match', mode: 'normal', level: 'medium', q: 'Match the phrase to the time you say it.', left: ['Good morning!', 'How are you?', 'Nice to meet you.', 'See you later!'], right: ['When you meet in the morning', 'When you check on someone', 'When you meet someone new', 'When you say goodbye'], answer: [0, 1, 2, 3], hint: 'Start with “Good morning!”: morning.' }
    ] },
  { id: 'A3', lesson: 1, concept: 'Introducing yourself: My name is… I am … years old. I am from Egypt. I am in Primary 3.',
    explain: 'To introduce yourself, say: My name is Sara. I am 8 years old. I am from Egypt. I am in Primary 3.',
    variants: [
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'My ___ is Sara.', options: ['name', 'years', 'from'], answer: 0, hint: 'Sara is what people call you.' },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'I am 8 ___ old.', options: ['years', 'name', 'Primary'], answer: 0, hint: '8 is your age.' },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'I am ___ Egypt.', options: ['from', 'years', 'name'], answer: 0, hint: 'Egypt is your country.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'I am in ___ 3.', options: ['Primary', 'years', 'Egypt'], answer: 0, hint: 'It is your class at school.' },
      { type: 'build', style: 'sentence', mode: 'normal', level: 'medium', q: 'Put the cards in order.', parts: ['My name', 'is', 'Adam.'], extra: ['years'], hint: 'Start with “My name”.' }
    ] },
  { id: 'A4', lesson: 1, concept: 'Meeting a new friend: Sara and Lina (p 7)',
    explain: 'Sara and Lina meet. They say hello and good morning and ask How are you? Sara is 8 years old and she is in Primary 3. At the end Lina says See you later! and Sara says Goodbye!',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Sara: “How are you?” Lina: “___”', options: ['I am fine, thank you.', 'Goodbye!', 'My name is Sara.'], answer: 0, hint: 'Sara wants to know if Lina is well.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'How old is Sara?', options: ['8 years old', '3 years old', '6 years old'], answer: 0, hint: 'Sara says: I am 8…' },
      { type: 'tf', mode: 'timed', seconds: 12, level: 'easy', q: 'Sara is in Primary 3.', answer: 0, hint: 'Read what Sara says after her age.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Lina: “See you later!” Sara: “___”', options: ['Goodbye!', 'Good morning!', 'How are you?'], answer: 0, hint: 'They are going away now.' },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'Lina says “Nice to meet you, Sara!” at the start of the dialog.', answer: 1, hint: 'First they say Hello and Good morning.' }
    ] },
  { id: 'A5', lesson: 1, concept: 'Complete the dialog (p 8 ex 6)',
    explain: 'A: Hello, my name is Mariam. B: Good morning, my name is Adam. A: How are you Adam? B: I am fine, thank you. A: How old are you? B: I am 8 years old. A: Nice to meet you. B: See you later! A: Goodbye!',
    variants: [
      { type: 'fill', mode: 'normal', level: 'easy', q: 'Good ___, my name is Adam.', options: ['morning', 'later', 'fine'], answer: 0, hint: 'We say it at the start of the day.' },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'How are you Adam? — I am ___, thank you.', options: ['fine', 'later', 'name'], answer: 0, hint: 'Adam is well.' },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'Nice to ___ you.', options: ['meet', 'fine', 'later'], answer: 0, hint: 'You say it to a new friend.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'See you ___!', options: ['later', 'morning', 'meet'], answer: 0, hint: 'Not now… after some time.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: '___, my name is Mariam.', options: ['Hello', 'Goodbye', 'Later'], answer: 0, hint: 'Mariam is meeting Adam, not leaving.' }
    ] },
  { id: 'A6', lesson: 1, concept: 'Choose the correct response (p 9 ex 8)',
    explain: 'Hello, Sami. How are you? → I’m fine, thank you. Good morning, Rana! → Good morning! Nice to meet you, Nada! → Nice to meet you, too. See you later! → Goodbye!',
    variants: [
      { type: 'mc', fig: 'photo', pic: ph('g3_fine'), mode: 'normal', level: 'easy', q: '“Hello, Sami. How are you?” Sami says: “___”', options: ['I’m fine, thank you.', 'See you later!', 'How are you?'], answer: 0, hint: 'Sami tells how he is.' },
      { type: 'mc', fig: 'photo', pic: ph('g3_morning'), mode: 'normal', level: 'easy', q: '“Good morning, Rana!” Rana says: “___”', options: ['Good morning!', 'Good night!', 'How do you do?'], answer: 0, hint: 'Say the same words back. Look at the sun.' },
      { type: 'mc', fig: 'photo', pic: ph('g3_meet'), mode: 'normal', level: 'medium', q: '“Nice to meet you, Nada!” Nada says: “___”', options: ['Nice to meet you, too.', 'Good night!', 'I’m fine, thank you.'], answer: 0, hint: 'Say it back and add “too”.' },
      { type: 'mc', fig: 'photo', pic: ph('g3_goodbye'), mode: 'normal', level: 'medium', q: '“See you later!” What do you say back?', options: ['Goodbye!', 'Good morning!', 'I’m fine, thank you.'], answer: 0, hint: 'Your friend is going away.' }
    ] },
  { id: 'A7', lesson: 1, boss: true, concept: 'Greetings and introductions',
    explain: 'Hello / Good morning when we meet; How are you? → I am fine, thank you; Nice to meet you → Nice to meet you, too; See you later → Goodbye. My name is… I am … years old.',
    variants: [
      { type: 'order', mode: 'boss', level: 'hard', q: 'Put the dialog in order.', items: ['I am fine, thank you.', 'Goodbye!', 'Hello! How are you?', 'See you later!'], answer: [2, 0, 3, 1], hint: 'Start with Hello. End with Goodbye.' },
      { type: 'build', style: 'sentence', mode: 'boss', level: 'hard', q: 'Put the cards in order.', parts: ['I am', '8 years', 'old.'], extra: ['name', 'from'], hint: 'Say your age: I am … years old.' },
      { type: 'mc', mode: 'boss', level: 'hard', q: 'You meet a new friend at 8 a.m. What do you say?', options: ['Good morning! Nice to meet you.', 'Goodbye! See you later.', 'Good night! I am fine.'], answer: 0, hint: 'It is the morning, and the friend is new.' }
    ] },

  /* ---------- Lesson 2 · Classroom Rules (pages 10-12) ---------- */
  { id: 'B1', lesson: 2, concept: 'Classroom phrases: Raise your hand. Listen carefully. Sit down. Be kind. Keep your classroom clean. Don’t shout.',
    explain: 'The classroom rules: Raise your hand. Listen carefully. Sit down. Be kind. Keep your classroom clean. Don’t shout. May I go to the bathroom?',
    variants: [
      { type: 'tap', diagram: 'rules6', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap: “Raise your hand.”', answer: 'rRaise', hint: 'One hand is up.' },
      { type: 'tap', diagram: 'rules6', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap: “Sit down.”', answer: 'rSit', hint: 'Look for a chair.' },
      { type: 'tap', diagram: 'rules6', mode: 'normal', level: 'easy', q: 'Tap: “Listen carefully.”', answer: 'rListen', hint: 'Look for a hand near the ear.' },
      { type: 'tap', diagram: 'rules6', mode: 'normal', level: 'easy', q: 'Tap: “Keep your classroom clean.”', answer: 'rClean', hint: 'Look for the bin.' },
      { type: 'tap', diagram: 'rules6', mode: 'normal', level: 'medium', q: 'Tap: “Be kind.”', answer: 'rKind', hint: 'She shares with her friend.' },
      { type: 'tap', diagram: 'rules6', mode: 'normal', level: 'medium', q: 'This boy breaks a rule. Tap him.', answer: 'rShout', hint: 'He is very loud.' }
    ] },
  { id: 'B2', lesson: 2, concept: 'Let’s act it out: say the rule (p 10 ex 2)',
    explain: 'When a student shouts loudly, we say “Don’t shout!”. When a student runs in class, we say “Sit down!”.',
    variants: [
      { type: 'mc', fig: 'photo', pic: ph('g3_shout'), mode: 'normal', level: 'easy', q: 'Your friend shouts loudly. Say the rule.', options: ['Don’t shout!', 'Sit down!', 'Raise your hand!'], answer: 0, hint: 'Shouting is too loud.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Your friend runs in class. Say the rule.', options: ['Sit down!', 'Don’t shout!', 'Be kind!'], answer: 0, hint: 'He must stop running and go to his chair.' },
      { type: 'mc', fig: 'photo', pic: ph('g3_clean'), mode: 'normal', level: 'easy', q: 'Look. Which rule is he following?', options: ['Keep your classroom clean.', 'Don’t shout.', 'Listen carefully.'], answer: 0, hint: 'He puts paper in the bin.' },
      { type: 'mc', fig: 'photo', pic: ph('g3_kind'), mode: 'normal', level: 'medium', q: 'Look. Which rule is she following?', options: ['Be kind.', 'Sit down.', 'Raise your hand.'], answer: 0, hint: 'She shares her crayons.' }
    ] },
  { id: 'B3', lesson: 2, concept: 'Choose the correct phrase (p 11 ex 3)',
    explain: 'When the teacher talks, you should listen carefully. If you want to answer, raise your hand. The teacher says, open your book on page 5. When class starts, we sit down. If you need to use the bathroom, say, May I go to the bathroom?',
    variants: [
      { type: 'fill', mode: 'normal', level: 'easy', q: 'When the teacher talks, you should ___.', options: ['listen carefully', 'stand up', 'write fast'], answer: 0, hint: 'Use your ears.' },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'If you want to answer, ___.', options: ['raise your hand', 'run', 'close your book'], answer: 0, hint: 'The teacher must see you.' },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'The teacher says, “___ on page 5.”', options: ['open your book', 'stand up', 'eat'], answer: 0, hint: 'A page is in a book.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'When class starts, we ___.', options: ['sit down', 'shout', 'leave'], answer: 0, hint: 'We go to our chairs.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'If you need to use the bathroom, say, “___?”', options: ['May I go to the bathroom', 'Can I draw', 'Is it break time'], answer: 0, hint: 'Ask the teacher politely: May I…' }
    ] },
  { id: 'B4', lesson: 2, concept: 'Good and bad classroom behavior',
    explain: 'Good: raise your hand, listen carefully, be kind, keep your classroom clean. Not good: shouting, running in class.',
    variants: [
      { type: 'tf', mode: 'timed', seconds: 12, level: 'easy', q: 'We shout in class.', answer: 1, hint: 'Remember the rule: Don’t…' },
      { type: 'tf', mode: 'timed', seconds: 12, level: 'easy', q: 'We raise our hand to speak.', answer: 0, hint: 'Look at the classroom phrases.' },
      { type: 'tf', mode: 'normal', level: 'easy', q: 'We keep our classroom clean.', answer: 0, hint: 'Paper goes in the bin.' },
      { type: 'table', mode: 'normal', level: 'medium', q: 'Read and sort.', poc: 'Action', cols: ['Good', 'Not good'], items: ['raise your hand', 'shout loudly', 'listen carefully', 'run in class', 'be kind'], answer: [0, 1, 0, 1, 0], hint: 'Is it one of the classroom rules?' }
    ] },
  { id: 'B5', lesson: 2, concept: 'Phonics: the digraph “wh” (what, when, where, whale, wheel, white)',
    explain: 'The letters w and h together make one sound: /w/, as in what, when, where, whale, wheel and white.',
    variants: [
      { type: 'tap', diagram: 'wh3', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap the whale.', answer: 'whWhale', hint: 'It lives in the sea.' },
      { type: 'tap', diagram: 'wh3', mode: 'normal', level: 'easy', q: 'Tap the wheel.', answer: 'whWheel', hint: 'It is round. A bicycle has two.' },
      { type: 'mc', fig: 'photo', pic: ph('g3_shirt'), mode: 'normal', level: 'easy', q: 'My shirt is ___.', options: ['white', 'whale', 'wheel'], answer: 0, hint: 'It is a color.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Which letters are missing? __ale (a big sea animal)', options: ['wh', 'sh', 'ch'], answer: 0, hint: 'It sounds like /w/.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which word starts with “wh”?', options: ['when', 'shop', 'chair'], answer: 0, hint: 'Look at the first two letters.' },
      { type: 'multi', mode: 'normal', level: 'medium', q: 'Choose all the “wh” words.', options: ['where', 'wheel', 'white', 'water'], answer: [0, 1, 2], hint: 'The second letter must be h.' }
    ] },
  { id: 'B6', lesson: 2, concept: '“wh” words in sentences and jumbled letters (p 12 ex 3 and 4)',
    explain: 'Where do you live? I saw a big whale in the ocean. My shirt is white. What is your name? The teacher asked, “Why are you late?” thwa = what, nhwe = when, ewhre = where, lhwae = whale, elhwe = wheel, ewhit = white.',
    variants: [
      { type: 'fill', mode: 'normal', level: 'easy', q: '___ is your name?', options: ['What', 'Where', 'Why'], answer: 0, hint: 'Your name is a thing you tell.' },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'I saw a big ___ in the ocean.', options: ['whale', 'white', 'wheel'], answer: 0, hint: 'It swims.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: '___ do you live?', options: ['Where', 'What', 'Why'], answer: 0, hint: 'The answer is a place.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'The teacher asked, “___ are you late?”', options: ['Why', 'Where', 'What'], answer: 0, hint: 'She wants a reason.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Put the letters in order: t h w a', options: ['what', 'when', 'whale'], answer: 0, hint: 'Start with wh. It has four letters.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Put the letters in order: e l h w e', options: ['wheel', 'whale', 'where'], answer: 0, hint: 'Start with wh. There are two e’s.' }
    ] },
  { id: 'B7', lesson: 2, boss: true, concept: 'Classroom rules and “wh”',
    explain: 'Raise your hand to answer, listen carefully, sit down when class starts, be kind, keep the classroom clean, don’t shout. wh = /w/: what, when, where, whale, wheel, white.',
    variants: [
      { type: 'match', mode: 'boss', level: 'hard', q: 'Match the action to the rule.', left: ['A boy shouts loudly.', 'A girl wants to answer.', 'A boy runs in class.', 'There is paper on the floor.'], right: ['Don’t shout!', 'Raise your hand.', 'Sit down!', 'Keep your classroom clean.'], answer: [0, 1, 2, 3], hint: 'Start with the boy who shouts.' },
      { type: 'table', mode: 'boss', level: 'hard', q: 'Sort the words.', poc: 'Word', cols: ['wh word', 'not a wh word'], items: ['whale', 'shout', 'when', 'wheel', 'chair', 'white'], answer: [0, 1, 0, 0, 1, 0], hint: 'Look at the first two letters.' },
      { type: 'fill', mode: 'boss', level: 'hard', q: 'If you want to answer, you should not shout. You should ___.', options: ['raise your hand', 'stand up', 'run'], answer: 0, hint: 'The teacher must see you.' }
    ] },

  /* ---------- Lesson 3 · Describing People (pages 13-18) ---------- */
  { id: 'C1', lesson: 3, concept: 'Describing looks: tall, short, curly hair, straight hair, long hair, short hair, brown eyes',
    explain: 'We describe how people look: tall or short; curly, straight, long or short hair; brown eyes.',
    variants: [
      { type: 'tap', diagram: 'looks5', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap the girl with curly hair.', answer: 'lCurly', hint: 'Her hair has lots of round curls.' },
      { type: 'tap', diagram: 'looks5', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap the girl with long hair.', answer: 'lLong', hint: 'Her hair goes down to her waist.' },
      { type: 'tap', diagram: 'looks5', mode: 'normal', level: 'easy', q: 'Tap the boy with short hair.', answer: 'lShort', hint: 'His hair is very close to his head.' },
      { type: 'tap', diagram: 'looks5', mode: 'normal', level: 'easy', q: 'Tap: brown eyes.', answer: 'lEyes', hint: 'Look for big eyes.' },
      { type: 'tap', diagram: 'looks5', mode: 'normal', level: 'medium', q: 'Tap: a tall girl and a short boy.', answer: 'lTall', hint: 'One is big and one is small.' }
    ] },
  { id: 'C2', lesson: 3, concept: 'Describing personality: funny, shy, friendly, helpful, polite, kind',
    explain: 'I am funny. I make my friends laugh. He is friendly. He says hello to everyone. She is helpful when someone needs help. A kind person shares. A polite person says please and thank you. A shy person doesn’t like to talk much.',
    variants: [
      { type: 'tap', diagram: 'people6', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap the funny boy.', answer: 'pFunny', hint: 'He makes his friends laugh.' },
      { type: 'tap', diagram: 'people6', mode: 'normal', level: 'easy', q: 'Tap the friendly boy.', answer: 'pFriendly', hint: 'He says hello to everyone.' },
      { type: 'tap', diagram: 'people6', mode: 'normal', level: 'easy', q: 'Tap the shy girl.', answer: 'pShy', hint: 'She does not like to talk much.' },
      { type: 'tap', diagram: 'people6', mode: 'normal', level: 'medium', q: 'Tap the helpful girl.', answer: 'pHelpful', hint: 'Someone needs help and she helps.' },
      { type: 'tap', diagram: 'people6', mode: 'normal', level: 'medium', q: 'Tap the polite boy.', answer: 'pPolite', hint: 'He opens the door for someone.' }
    ] },
  { id: 'C3', lesson: 3, concept: 'Sentences about people (p 13 ex 2)',
    explain: 'I am funny. I make my friends laugh. He is friendly. He says hello to everyone. She is helpful when someone needs help. My teacher is tall. She can reach the top shelf. She has long hair. I have brown eyes and curly hair.',
    variants: [
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'I am funny. I make my friends ___.', options: ['laugh', 'cry', 'sleep'], answer: 0, hint: 'A funny person makes us happy.' },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'He is friendly. He says ___ to everyone.', options: ['hello', 'goodbye', 'nothing'], answer: 0, hint: 'He greets everyone.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'My teacher is tall. She can reach the top ___.', options: ['shelf', 'floor', 'chair'], answer: 0, hint: 'It is high up.' },
      { type: 'tf', mode: 'normal', level: 'medium', q: '“She is helpful when someone needs help.”', answer: 0, hint: 'Helpful = she helps.' }
    ] },
  { id: 'C4', lesson: 3, concept: 'Fill in the blanks: polite, kind, funny, friendly, shy (p 14 ex 4 and 5)',
    explain: 'My sister is very kind. She shares her toys. My friend is polite. He always says please and thank you. My teacher is friendly, she always has a smile. The clown is funny. He makes us laugh. He is shy and doesn’t like to talk much.',
    variants: [
      { type: 'fill', mode: 'normal', level: 'easy', q: 'The clown is ___. He makes us laugh.', options: ['funny', 'shy', 'polite'], answer: 0, hint: 'We laugh at his jokes.' },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'My sister is very ___. She shares her toys.', options: ['kind', 'shy', 'funny'], answer: 0, hint: 'She gives her toys to others.' },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'My friend is ___. He always says “please” and “thank you”.', options: ['polite', 'funny', 'tall'], answer: 0, hint: 'Good words: please and thank you.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'He is ___ and doesn’t like to talk much.', options: ['shy', 'friendly', 'funny'], answer: 0, hint: 'He is quiet.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'You can reach the top shelf. You are ___.', options: ['tall', 'kind', 'friendly'], answer: 0, hint: 'Your arms reach high.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'My teacher smiles. She is ___.', options: ['happy', 'angry', 'short'], answer: 0, hint: 'A smile shows how she feels.' }
    ] },
  { id: 'C5', lesson: 3, concept: 'Words from the box: kind, curly, helpful, tall (p 15 ex 6 and 7)',
    explain: 'I have curly hair. My sister is tall. She is not short. He helps everyone. He is helpful. This is my new friend Laila. She is very friendly. She has curly hair and big brown eyes. She is also very tall. She can reach the top shelf easily.',
    variants: [
      { type: 'fill', mode: 'normal', level: 'easy', q: 'I have ___ hair.', options: ['curly', 'tall', 'kind'], answer: 0, hint: 'Which word goes with hair?' },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'My sister is ___. She is not short.', options: ['tall', 'curly', 'helpful'], answer: 0, hint: 'The opposite of short.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'He helps everyone. He is ___.', options: ['helpful', 'curly', 'tall'], answer: 0, hint: 'help + ful' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Laila always smiles and helps others. She is very ___.', options: ['friendly', 'tall', 'shy'], answer: 0, hint: 'Read about Laila: she smiles at everyone.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Laila is very ___. She can reach the top shelf easily.', options: ['tall', 'curly hair', 'friendly'], answer: 0, hint: 'The top shelf is high.' }
    ] },
  { id: 'C6', lesson: 3, concept: 'Feelings: happy, sad (and the word search, p 15 ex 8)',
    explain: 'Happy: a big smile. Sad: a tear. The word search has: happy, kind, funny, sad, shy.',
    variants: [
      { type: 'tap', diagram: 'feel3', mode: 'timed', seconds: 12, level: 'easy', q: 'Tap the happy face.', answer: 'fHappy', hint: 'Look for a big smile.' },
      { type: 'tap', diagram: 'feel3', mode: 'normal', level: 'easy', q: 'Tap the sad face.', answer: 'fSad', hint: 'Look for a tear.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which word is in the word search?', options: ['shy', 'tall', 'polite'], answer: 0, hint: 'The words are: happy, kind, funny, sad and one more.' },
      { type: 'multi', mode: 'normal', level: 'medium', q: 'Choose all the words in the word search.', options: ['happy', 'kind', 'sad', 'curly'], answer: [0, 1, 2], hint: 'happy, kind, funny, sad, shy.' }
    ] },
  { id: 'C7', lesson: 3, concept: 'The verb “to be”: I am, you are, he/she/it is, we/they are',
    explain: 'I am happy. You are my friend. He is a student. She is kind. It is a cat. We are ready. They are in class.',
    variants: [
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'I ___ a student.', options: ['am', 'is', 'are'], answer: 0, hint: 'I goes with am.' },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'She ___ my sister.', options: ['is', 'am', 'are'], answer: 0, hint: 'He, she and it go with is.' },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'They ___ my friends.', options: ['are', 'is', 'am'], answer: 0, hint: 'They = more than one.' },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'He ___ in the kitchen.', options: ['is', 'are', 'am'], answer: 0, hint: 'One boy: is.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'We ___ in the classroom.', options: ['are', 'is', 'am'], answer: 0, hint: 'We, you and they go with are.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'You ___ very kind.', options: ['are', 'is', 'am'], answer: 0, hint: 'You always goes with are.' },
      { type: 'table', mode: 'normal', level: 'medium', q: 'Sort the words.', poc: 'Word', cols: ['am', 'is', 'are'], items: ['I', 'he', 'she', 'it', 'we', 'they'], answer: [0, 1, 1, 1, 2, 2], hint: 'I am. One person or thing: is. More than one: are.' }
    ] },
  { id: 'C8', lesson: 3, concept: 'Reading for understanding: my friend Mona (pp 17-18)',
    explain: 'This is my friend Mona. She is very friendly, kind, and funny. She always tells jokes and helps her friends. Mona has long black hair and brown eyes. Everyone likes to play with her.',
    variants: [
      { type: 'mc', fig: 'photo', pic: ph('g3_mona'), mode: 'normal', level: 'easy', q: 'What color is Mona’s hair?', options: ['black', 'brown', 'red'], answer: 0, hint: 'Read: Mona has long … hair.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Who likes to play with Mona?', options: ['Everyone', 'No one', 'Only her sister'], answer: 0, hint: 'Read the last sentence.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What does Mona always do?', options: ['She tells jokes and helps her friends.', 'She shouts in class.', 'She sleeps all day.'], answer: 0, hint: 'Read the second sentence.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Mona has ___.', options: ['long black hair and brown eyes', 'short brown hair and blue eyes', 'curly red hair and green eyes'], answer: 0, hint: 'Find “hair” in the text.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'People like Mona because she is ___.', options: ['kind', 'tall', 'pretty'], answer: 0, hint: 'She helps her friends.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'It is good to ___ your friends when in need.', options: ['help', 'tell jokes', 'play'], answer: 0, hint: 'Mona helps her friends.' },
      { type: 'multi', mode: 'normal', level: 'medium', q: 'What kind of person is Mona? Choose all the correct answers.', options: ['friendly', 'kind', 'funny', 'shy'], answer: [0, 1, 2], hint: 'Read the first two sentences.' }
    ] },
  { id: 'C9', lesson: 3, boss: true, concept: 'Describing people with “to be” and “have”',
    explain: 'I am Egyptian. You are my friend. They have brown eyes. He is from Egypt. I have brown hair. We use am / is / are with words like tall and kind, and have with hair and eyes.',
    variants: [
      { type: 'build', style: 'sentence', mode: 'boss', level: 'hard', q: 'Put the words in order.', parts: ['You', 'are', 'my', 'friend.'], extra: ['is'], hint: 'You goes with are.' },
      { type: 'build', style: 'sentence', mode: 'boss', level: 'hard', q: 'Put the words in order.', parts: ['He', 'is', 'from', 'Egypt.'], extra: ['am'], hint: 'He goes with is.' },
      { type: 'build', style: 'sentence', mode: 'boss', level: 'hard', q: 'Put the words in order.', parts: ['They', 'have', 'brown', 'eyes.'], extra: ['is'], hint: 'Start with They. Eyes come last.' },
      { type: 'fill', mode: 'boss', level: 'hard', q: 'I ___ curly hair and I am funny.', options: ['have', 'am', 'is'], answer: 0, hint: 'Hair is a thing you have.' }
    ] },

  /* ---------- Lesson 4 · Daily Routines (pages 19-26) ---------- */
  { id: 'D1', lesson: 4, concept: 'Daily routines: wake up, brush my teeth, get dressed, make my bed, brush my hair, have breakfast, go to school, do my homework',
    explain: 'Every day I wake up, brush my teeth, get dressed, make my bed, brush my hair, have breakfast, go to school and do my homework.',
    variants: [
      { type: 'tap', diagram: 'routine8', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap: brush my teeth.', answer: 'tTeeth', hint: 'Look for a toothbrush.' },
      { type: 'tap', diagram: 'routine8', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap: have breakfast.', answer: 'tBreakfast', hint: 'Look for food on a table.' },
      { type: 'tap', diagram: 'routine8', mode: 'normal', level: 'easy', q: 'Tap: wake up.', answer: 'tWake', hint: 'He stretches in his bed.' },
      { type: 'tap', diagram: 'routine8', mode: 'normal', level: 'easy', q: 'Tap: make my bed.', answer: 'tBed', hint: 'She puts the blanket straight.' },
      { type: 'tap', diagram: 'routine8', mode: 'normal', level: 'medium', q: 'Tap: get dressed.', answer: 'tDressed', hint: 'He puts on his shirt.' },
      { type: 'tap', diagram: 'routine8', mode: 'normal', level: 'medium', q: 'Tap: brush my hair.', answer: 'tHair', hint: 'Look for a hairbrush.' },
      { type: 'tap', diagram: 'routine8', mode: 'normal', level: 'medium', q: 'Tap: do my homework.', answer: 'tHomework', hint: 'He writes at his desk.' }
    ] },
  { id: 'D2', lesson: 4, concept: 'Match the words to the pictures: sleep, play, read, go to school, wake up, write, eat, watch TV (p 19 ex 2)',
    explain: 'sleep, play, read, go to school, wake up, write, eat, watch TV: things we do every day.',
    variants: [
      { type: 'tap', diagram: 'daily8', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap: sleep.', answer: 'dSleep', hint: 'Her eyes are closed.' },
      { type: 'tap', diagram: 'daily8', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap: watch TV.', answer: 'dTV', hint: 'Look for a screen.' },
      { type: 'tap', diagram: 'daily8', mode: 'normal', level: 'easy', q: 'Tap: play.', answer: 'dPlay', hint: 'Look for a swing.' },
      { type: 'tap', diagram: 'daily8', mode: 'normal', level: 'easy', q: 'Tap: eat.', answer: 'dEat', hint: 'Look for a bowl of fruit.' },
      { type: 'tap', diagram: 'daily8', mode: 'normal', level: 'medium', q: 'Tap: read.', answer: 'dRead', hint: 'She looks at a book.' },
      { type: 'tap', diagram: 'daily8', mode: 'normal', level: 'medium', q: 'Tap: write.', answer: 'dWrite', hint: 'He has a pencil.' },
      { type: 'tap', diagram: 'daily8', mode: 'normal', level: 'medium', q: 'Tap: go to school.', answer: 'dSchool', hint: 'She has a bag. Look for a big building.' }
    ] },
  { id: 'D3', lesson: 4, concept: 'Look, read, and say: I brush my teeth. I go to school at 8 a.m. … (p 20)',
    explain: 'I brush my teeth. I go to school at 8 a.m. I do my homework. I have breakfast. I make my bed. I wake up at 7 a.m.',
    variants: [
      { type: 'mc', fig: 'photo', pic: ph('g3_teeth'), mode: 'normal', level: 'easy', q: 'Look. What does she say?', options: ['I brush my teeth.', 'I make my bed.', 'I do my homework.'], answer: 0, hint: 'Look at what is in her hand.' },
      { type: 'mc', fig: 'photo', pic: ph('g3_breakfast'), mode: 'normal', level: 'easy', q: 'Look. What does he say?', options: ['I have breakfast.', 'I go to school.', 'I wake up.'], answer: 0, hint: 'Look at the table.' },
      { type: 'mc', fig: 'photo', pic: ph('g3_bed'), mode: 'normal', level: 'easy', q: 'Look. What does she say?', options: ['I make my bed.', 'I brush my teeth.', 'I have breakfast.'], answer: 0, hint: 'Look at the blanket.' },
      { type: 'mc', fig: 'clock', pic: { h: 7, src: 'g3_wakeup' }, mode: 'normal', level: 'medium', q: 'Look at the clock. I wake up at ___.', options: ['7 a.m.', '8 a.m.', '6 a.m.'], answer: 0, hint: 'The short hand shows the hour.' },
      { type: 'mc', fig: 'clock', pic: { h: 8 }, mode: 'normal', level: 'medium', q: 'Look at the clock. I go to school at ___.', options: ['8 a.m.', '7 a.m.', '9 a.m.'], answer: 0, hint: 'The short hand shows the hour.' }
    ] },
  { id: 'D4', lesson: 4, concept: 'Amir’s daily routine (p 22)',
    explain: 'Hello, I am Amir. Every day, I wake up at 6 a.m. I brush my teeth and get dressed. After I have breakfast, I go to school. I learn and play with my friends. After school, I go home and do my homework.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What time does Amir wake up?', options: ['At 6 a.m.', 'At 7 a.m.', 'At 8 a.m.'], answer: 0, hint: 'Read the second sentence.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What does Amir do after breakfast?', options: ['He goes to school.', 'He goes to sleep.', 'He watches TV.'], answer: 0, hint: 'Read: After I have breakfast, I…' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Where does Amir go after school?', options: ['He goes home.', 'He goes to the park.', 'He goes to bed.'], answer: 0, hint: 'Read the last sentence.' },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'Amir learns and plays with his friends at school.', answer: 0, hint: 'Read what Amir does at school.' },
      { type: 'order', mode: 'normal', level: 'medium', q: 'Put Amir’s day in order.', items: ['I go to school.', 'I wake up at 6 a.m.', 'I do my homework.', 'I have breakfast.'], answer: [1, 3, 0, 2], hint: 'He wakes up first. Homework is after school.' }
    ] },
  { id: 'D5', lesson: 4, concept: 'Present simple: add -s with he, she, it',
    explain: 'I play, you play, we play, they play; he plays, she plays, it plays. Add -s to the verb with he, she or it. If the verb ends in ch, sh, x, ss or o, add -es (goes, brushes, watches). Consonant + y: change y to i and add -es (studies). Vowel + y: add -s (plays).',
    variants: [
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'He ___ football.', options: ['plays', 'play', 'playes'], answer: 0, hint: 'He: add -s.' },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'I ___ my teeth.', options: ['brush', 'brushes', 'brushs'], answer: 0, hint: 'I: no -s.' },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'They ___ to school every day.', options: ['go', 'goes', 'gos'], answer: 0, hint: 'They: no -s.' },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'She ___ up at 7 a.m.', options: ['wakes', 'wake', 'wakees'], answer: 0, hint: 'She: add -s.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'We ___ hard at school.', options: ['study', 'studies', 'studys'], answer: 0, hint: 'We: no -s.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Mariam ___ her teeth every morning.', options: ['brushes', 'brush', 'brushs'], answer: 0, hint: 'Mariam = she. brush ends in sh: add -es.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Judy ___ breakfast at 8 o’clock.', options: ['eats', 'eat', 'eates'], answer: 0, hint: 'Judy = she: add -s.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Hany and I ___ to school by bus.', options: ['go', 'goes', 'gos'], answer: 0, hint: 'Hany and I = we: no -s.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'They ___ TV in the evening.', options: ['watch', 'watches', 'watchs'], answer: 0, hint: 'They: no -s.' }
    ] },
  { id: 'D6', lesson: 4, concept: 'Read and complete: bed, brush, school, wake, homework (p 24 ex 7)',
    explain: 'I wake up in the morning. I go to school every day. I brush my teeth when I wake up. I do my homework after school. I make my bed to keep it tidy.',
    variants: [
      { type: 'fill', mode: 'normal', level: 'easy', q: 'I ___ up in the morning.', options: ['wake', 'brush', 'bed'], answer: 0, hint: 'You open your eyes.' },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'I go to ___ every day.', options: ['school', 'bed', 'homework'], answer: 0, hint: 'You learn there.' },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'I ___ my teeth when I wake up.', options: ['brush', 'wake', 'make'], answer: 0, hint: 'You use a toothbrush.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'I do my ___ after school.', options: ['homework', 'bed', 'breakfast'], answer: 0, hint: 'You do it at home with a pencil.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'I make my ___ to keep it tidy.', options: ['bed', 'school', 'teeth'], answer: 0, hint: 'You sleep in it.' }
    ] },
  { id: 'D7', lesson: 4, concept: 'Ali and Lina: What time do you wake up? (p 24 ex 8, p 25)',
    explain: 'Ali: What time do you wake up? Lina: At 6:30 a.m. Then, I eat my breakfast and go to school. Ali: What do you do after school? Lina: I do my homework, and go to sleep.',
    variants: [
      { type: 'fill', mode: 'normal', level: 'easy', q: 'Ali: What time do you ___? Lina: At 6:30 a.m.', options: ['wake up', 'go to school', 'do my homework'], answer: 0, hint: 'It is the first thing Lina does.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Lina: Then, I eat ___ and go to school.', options: ['my breakfast', 'do my homework', 'wake up'], answer: 0, hint: 'You eat it in the morning.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Ali: What do you do after school? Lina: I ___, and go to sleep.', options: ['do my homework', 'wake up', 'my breakfast'], answer: 0, hint: 'After school, at home, with a pencil.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What time do you wake up?', options: ['I wake up at 7 a.m.', 'I am 8 years old.', 'My name is Ali.'], answer: 0, hint: 'The answer is a time.' }
    ] },
  { id: 'D8', lesson: 4, concept: 'Read, ask, and answer: Sara (p 25)',
    explain: 'My name is Sara. I eat breakfast and then I go to school. I am tall and I have long brown hair.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What’s her name?', options: ['Sara', 'Lina', 'Mona'], answer: 0, hint: 'Read: My name is…' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What does she do after breakfast?', options: ['She goes to school.', 'She goes to sleep.', 'She does her homework.'], answer: 0, hint: 'Read: I eat breakfast and then I…' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Is she tall or short?', options: ['She is tall.', 'She is short.'], answer: 0, hint: 'Read the last sentence.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Does she have long brown hair?', options: ['Yes, she does.', 'No, she doesn’t.'], answer: 0, hint: 'Read: I have long…' }
    ] },
  { id: 'D9', lesson: 4, boss: true, concept: 'Daily routines and the present simple',
    explain: 'Add -s with he, she, it (plays, wakes, eats). Add -es after ch, sh, x, ss, o (watches, brushes, goes). Consonant + y → -ies (studies); vowel + y → -s (plays).',
    variants: [
      { type: 'table', mode: 'boss', level: 'hard', q: 'With he / she / it, how does the verb change?', poc: 'Verb', cols: ['+s', '+es', 'y → ies'], items: ['play', 'wake', 'watch', 'go', 'study', 'brush'], answer: [0, 0, 1, 1, 2, 1], hint: 'Look at the last letters: ch, sh, o take -es.' },
      { type: 'fill', mode: 'boss', level: 'hard', q: 'My brother ___ English every day. (study)', options: ['studies', 'studys', 'study'], answer: 0, hint: 'Consonant + y: change y to i and add -es.' },
      { type: 'fill', mode: 'boss', level: 'hard', q: 'Amir ___ to school after breakfast. (go)', options: ['goes', 'gos', 'go'], answer: 0, hint: 'go ends in o: add -es.' },
      { type: 'build', style: 'sentence', mode: 'boss', level: 'hard', q: 'Put the words in order.', parts: ['She', 'does', 'her homework', 'every day.'], extra: ['do'], hint: 'She: do becomes does.' }
    ] }
];
})();
