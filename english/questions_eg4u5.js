/* English · Grade 4 · Term 1 · Unit 5 "A Day at Work" · ministry book "English Primary 4", first term 2026/2027 (book pages 79-94)
   One English book for both tracks (subject lang { lang: 'en', ar: 'en' }), so there is no _ar file.
   Lessons: 1 Different Jobs (pp 80-82) · 2 Jobs I Love! + superlative adjectives (pp 83-85) · 3 Story Time: "The Last House" + silent e (pp 86-89)
            4 Writing: Non-Fiction, "Heroes Who Fight Fires" (pp 90-91) · 5 Think and Create: Origami Art (p 92). Quick Review and Self-Assessment
            (pp 93-94) and the job/superlative/firefighter parts of Review 2 (pp 109-111) are spread over the lessons.
   Idea letters (one per lesson): U, V, W, X, Y.  Boss ideas: U6, V7, W8, X4, Y3.
   Every phrasing has a hint (owner rule) that points to the text or the rule, never the answer.
   Pictures: the owner's Gemini pictures (11 Nov 2026) cut into english/assets/j5_*, h5_*, se_*, f5_*, o5_*.webp; tap pictures jobs6, funjobs4, house6,
     silentE9 (the number 9 is drawn as text in code), fire6, origami6 and fig 'photo' in english/g4_art.js; pens3 and screens2 drawn in code.
   Review notes:
   - p 80 ex 3 and p 82 ex 6: the book's uniforms are partly mixed (the nurse wears "a blue uniform" in the p 81 dialogue, the police officer a
     "white uniform and a cap" p 80 ex 3 line 2, the firefighter "a blue uniform and a red helmet"). We ask them as the dialogue and ex 3 print them;
     p 80 ex 3 line 5 "a blue uniform and a cap" (nurse or police?) is not asked: both fit.
   - p 82 ex 6 line 4 "nurse: red helmet or cap" → cap.
   - p 84 ex 3 "Amr has a safe job" = False (ex 4 says his job is really dangerous).
   - Listening tasks (p 81, p 89 ex 2 and ex 4) are asked from the printed text and pictures; p 89 ex 4 answers come from the ex 2 words (slide, gate, flute).
   - Open tasks are not asked: p 80 ex 1, p 82 ex 9, p 83 ex 1 and Think, p 84 ex 5.3 and ex 6, p 87 ex 2 and ex 5, p 88 ex 8.3 opinion and ex 9 new ending,
     p 89 ex 3, p 90 Think, p 91 ex 3-4 (picture questions without a printed text), p 92 ex 2, p 93 ex 3. */
(function () {
window.CHAPTER = { id: 'eg4u5', title: 'A Day at Work' };
const ph = (...src) => ({ src, label: 'A picture for the question' });

window.IDEAS = [
  /* ---------- Lesson 1 · Different Jobs (pages 80-82, Quick Review p 93) ---------- */
  { id: 'U1', lesson: 1, concept: 'Job words: doctor, nurse, teacher, engineer, firefighter, police officer',
    explain: 'The six jobs of the lesson: doctor, nurse, teacher, engineer, firefighter and police officer.',
    variants: [
      { type: 'tap', diagram: 'jobs6', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap the doctor.', answer: 'jDoctor', hint: 'Look for a white coat and a stethoscope.' },
      { type: 'tap', diagram: 'jobs6', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap the firefighter.', answer: 'jFirefighter', hint: 'Look for a red helmet.' },
      { type: 'tap', diagram: 'jobs6', mode: 'normal', level: 'easy', q: 'Tap the engineer.', answer: 'jEngineer', hint: 'Look for a yellow helmet and a vest.' },
      { type: 'tap', diagram: 'jobs6', mode: 'normal', level: 'easy', q: 'Tap the teacher.', answer: 'jTeacher', hint: 'Look for a board.' },
      { type: 'tap', diagram: 'jobs6', mode: 'normal', level: 'medium', q: 'Tap the police officer.', answer: 'jPolice', hint: 'Look for a dark cap.' },
      { type: 'tap', diagram: 'jobs6', mode: 'normal', level: 'medium', q: 'Tap the nurse.', answer: 'jNurse', hint: 'She helps the doctors.' }
    ] },
  { id: 'U2', lesson: 1, concept: 'What do they wear?',
    explain: 'A doctor wears a white coat. An engineer wears a yellow helmet and a vest. A firefighter wears a blue uniform and a red helmet. A nurse wears a blue uniform and a cap. A police officer wears a white uniform and a cap.',
    variants: [
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'A ___ wears a white coat.', options: ['doctor', 'firefighter', 'engineer'], answer: 0, hint: 'He checks the health of sick people.' },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'An ___ wears a yellow helmet and a vest.', options: ['engineer', 'nurse', 'doctor'], answer: 0, hint: 'He designs new buildings.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'A ___ wears a blue uniform and a red helmet.', options: ['firefighter', 'doctor', 'teacher'], answer: 0, hint: 'He stops fires.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What does a doctor wear?', options: ['A white coat', 'A red uniform', 'A yellow helmet', 'A red helmet'], answer: 0, hint: 'Sara says: I wear a white…' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What does a nurse wear on her head?', options: ['A cap', 'A red helmet', 'A yellow helmet', 'Nothing'], answer: 0, hint: 'Not a helmet.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What does an engineer wear?', options: ['A yellow helmet', 'A blue cap', 'A white coat', 'A red uniform'], answer: 0, hint: 'Ali says: I wear a yellow…' }
    ] },
  { id: 'U3', lesson: 1, concept: '“When I grow up…” (p 81)',
    explain: 'Ms. Hala and her students talk about their costumes: what they want to be when they grow up. Sara (doctor) helps sick people and checks their health. Ali (engineer) designs new buildings. Talia (nurse) helps the doctors and cares for the patients. Omar (firefighter) stops fires and saves people. All the jobs are really important.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What are Ms. Hala and the students talking about?', options: ['What they want to be when they grow up', 'Their summer holiday', 'Animals in the zoo', 'Their favorite food'], answer: 0, hint: 'Read the red line above the dialogue.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What does a nurse do?', options: ['She helps the doctors and cares for the patients.', 'She designs new buildings.', 'She stops fires.', 'She teaches lessons.'], answer: 0, hint: 'Read Talia’s answer.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Why is the job of a firefighter important?', options: ['He stops fires and saves people.', 'He designs buildings.', 'He checks people’s health.', 'He sells helmets.'], answer: 0, hint: 'Read Omar’s answer.' },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'Ali is an engineer. What does he do?', options: ['He designs new buildings.', 'He helps sick people.', 'He stops fires.', 'He cares for patients.'], answer: 0, hint: 'Engineers make plans for buildings.' },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'Ms. Hala says only the doctor’s job is important.', answer: 1, hint: 'She says: All your jobs are…' }
    ] },
  { id: 'U4', lesson: 1, concept: 'Match the job and what they do (p 82)',
    explain: 'A nurse helps the doctors and patients. An engineer designs new buildings. A doctor helps sick people. A police officer protects the people. A doctor checks the health of sick people. A firefighter saves people from fires.',
    variants: [
      { type: 'match', mode: 'normal', level: 'medium', q: 'Read and match.', left: ['A nurse…', 'An engineer…', 'A doctor…', 'A police officer…'], right: ['helps the doctors and patients.', 'designs new buildings.', 'helps sick people.', 'protects the people.'], answer: [0, 1, 2, 3], hint: 'Start with the engineer: buildings.' },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'A doctor ___ the health of sick people.', options: ['checks', 'designs', 'saves'], answer: 0, hint: 'He looks to see if they are well.' },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'A ___ saves people from fires.', options: ['firefighter', 'doctor', 'teacher'], answer: 0, hint: 'He wears a red helmet.' },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'An engineer designs ___.', options: ['buildings', 'birds', 'fires'], answer: 0, hint: 'Houses and schools.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'A/An ___ works in a school and teaches lessons. (Review 2)', options: ['teacher', 'engineer', 'nurse', 'firefighter'], answer: 0, hint: 'A school job.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'A/An ___ helps sick people feel better. (Review 2)', options: ['doctor', 'teacher', 'engineer', 'police officer'], answer: 0, hint: 'He wears a white coat.' }
    ] },
  { id: 'U5', lesson: 1, concept: 'Job or place? (Review 2)',
    explain: 'Places: the Pyramids, Siwa Oasis, Khan Al-Khalili Bazaar. Jobs: firefighter, nurse, police officer.',
    variants: [
      { type: 'table', mode: 'normal', level: 'medium', q: 'Read and sort.', poc: 'Word', cols: ['Places', 'Jobs'], items: ['Pyramids', 'firefighter', 'nurse', 'Siwa Oasis', 'police officer', 'Khan Al-Khalili Bazaar'], answer: [0, 1, 1, 0, 1, 0], hint: 'A job is a person; a place is where you go.' },
      { type: 'mc', fig: 'photo', pic: ph('j5_police'), mode: 'normal', level: 'easy', q: 'Look and choose. What is his job?', options: ['police officer', 'firefighter', 'doctor', 'engineer'], answer: 0, hint: 'He protects the people.' },
      { type: 'mc', fig: 'photo', pic: ph('j5_nurse'), mode: 'normal', level: 'easy', q: 'Look and choose. What is her job?', options: ['nurse', 'teacher', 'engineer', 'police officer'], answer: 0, hint: 'She cares for the patients.' }
    ] },
  { id: 'U6', lesson: 1, boss: true, concept: 'Jobs: who wears what and does what',
    explain: 'doctor: white coat, helps sick people · engineer: yellow helmet, designs buildings · nurse: blue uniform, helps doctors and patients · firefighter: red helmet, stops fires and saves people.',
    variants: [
      { type: 'match', mode: 'boss', level: 'hard', q: 'Match the job to what they wear.', left: ['doctor', 'engineer', 'firefighter', 'nurse'], right: ['a white coat', 'a yellow helmet', 'a red helmet', 'a cap'], answer: [0, 1, 2, 3], hint: 'Check p 82: What do they wear?' },
      { type: 'build', style: 'sentence', mode: 'boss', level: 'hard', q: 'Put the cards in order.', parts: ['A firefighter', 'stops fires', 'and saves people.'], extra: ['designs buildings', 'stop fires'], hint: 'A firefighter is one person: the verb takes -s.' },
      { type: 'tap', diagram: 'jobs6', mode: 'boss', level: 'medium', q: 'Tap the person who designs new buildings.', answer: 'jEngineer', hint: 'Look for a yellow helmet.' }
    ] },

  /* ---------- Lesson 2 · Jobs I Love! (pages 83-85, Quick Review p 93, Review 2) ---------- */
  { id: 'V1', lesson: 2, concept: 'Four amazing jobs',
    explain: 'Noha is a mentor: she helps young students learn and grow. Amr is a wildlife photographer: he takes pictures of wild animals. Salma works with puppets: she uses puppets to tell stories. Adel is a voice-over actor: he makes voices for cartoons.',
    variants: [
      { type: 'tap', diagram: 'funjobs4', mode: 'normal', level: 'easy', q: 'Amr is a wildlife photographer. Tap the picture.', answer: 'jPhoto', hint: 'Look for a camera.' },
      { type: 'tap', diagram: 'funjobs4', mode: 'normal', level: 'easy', q: 'Salma works with puppets. Tap the picture.', answer: 'jPuppets', hint: 'Look for toys on her hands.' },
      { type: 'tap', diagram: 'funjobs4', mode: 'normal', level: 'medium', q: 'Adel is a voice-over actor. Tap the picture.', answer: 'jVoice', hint: 'Look for a microphone.' },
      { type: 'tap', diagram: 'funjobs4', mode: 'normal', level: 'medium', q: 'Noha is a mentor. Tap the picture.', answer: 'jMentor', hint: 'She helps a young student.' },
      { type: 'match', mode: 'normal', level: 'medium', q: 'Match the person to the job.', left: ['Noha', 'Amr', 'Salma', 'Adel'], right: ['mentor', 'wildlife photographer', 'works with puppets', 'voice-over actor'], answer: [0, 1, 2, 3], hint: 'Read the first line of each paragraph.' }
    ] },
  { id: 'V2', lesson: 2, concept: 'Noha the mentor and Salma with the puppets',
    explain: 'Noha helps shy students become brave. When they get good marks, it feels so nice. Salma uses puppets to tell stories. She does many shows for children and loves seeing their big smiles and hearing their loud laughs.',
    variants: [
      { type: 'tf', mode: 'timed', seconds: 12, level: 'easy', q: 'Noha helps shy students.', answer: 0, hint: 'Read Noha’s words.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'How does Noha help shy students?', options: ['She helps them become brave.', 'She takes their pictures.', 'She makes voices for them.', 'She builds houses for them.'], answer: 0, hint: '“I help shy students become…”' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What is Salma’s job?', options: ['She uses puppets to tell stories.', 'She takes pictures of animals.', 'She makes voices for cartoons.', 'She is a mentor.'], answer: 0, hint: 'Salma works with…' },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'Salma makes puppets tell stories.', answer: 0, hint: 'She uses puppets to tell stories.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What does Salma love?', options: ['Seeing children’s big smiles and hearing their loud laughs', 'Taking pictures of lions', 'Making low voices', 'Getting good marks'], answer: 0, hint: 'Read Salma’s words.' }
    ] },
  { id: 'V3', lesson: 2, concept: 'Amr the wildlife photographer and Adel the voice-over actor',
    explain: 'Amr takes pictures of wild animals in faraway places. He finds the biggest lions and the smallest birds, and sometimes waits a long time to get the best picture. His job is really dangerous, but he finds it interesting. Adel makes voices for cartoons: high and low voices, little voices for small characters and loud voices for large ones.',
    variants: [
      { type: 'tf', mode: 'normal', level: 'medium', q: 'Amr has a safe job.', answer: 1, hint: 'Everyone says Amr’s job is really dangerous.' },
      { type: 'tf', mode: 'timed', seconds: 12, level: 'easy', q: 'Amr needs a camera to do his job.', answer: 0, hint: 'He takes pictures.' },
      { type: 'tf', mode: 'timed', seconds: 12, level: 'easy', q: 'Adel is a voice-over actor.', answer: 0, hint: 'Read the last paragraph.' },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'He takes pictures of wild ___ in nature.', options: ['animals', 'photo', 'dangerous'], answer: 0, hint: 'Lions and birds.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'He is a very smart wildlife ___.', options: ['photographer', 'photo', 'animals'], answer: 0, hint: 'A person who takes photos.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Everyone says that Amr’s job is really ___.', options: ['dangerous', 'animals', 'photo'], answer: 0, hint: 'Not safe.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Sometimes, he waits for a very long time to get the best ___.', options: ['photo', 'dangerous', 'photographer'], answer: 0, hint: 'A picture.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What does Adel make for small characters?', options: ['Little voices', 'Loud voices', 'Puppets', 'Photos'], answer: 0, hint: 'Small characters, small voices.' }
    ] },
  { id: 'V4', lesson: 2, concept: 'Superlatives: -est and double + -est',
    explain: 'Use superlative adjectives to show the greatest degree of something. Usually add -est: tall → the tallest (This tree is the tallest tree in the park). If an adjective ends in a vowel and a consonant, double the consonant: big → the biggest (I find the biggest lions).',
    variants: [
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'This tree is the ___ tree in the park. (tall)', options: ['tallest', 'taller', 'tall'], answer: 0, hint: 'the + adjective + -est' },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'I find the ___ lions. (big)', options: ['biggest', 'bigest', 'bigger'], answer: 0, hint: 'Double the g, then -est.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'August is the ___ month of the year.', options: ['hottest', 'hot', 'hotter than', 'hotter'], answer: 0, hint: 'hot: double the t, then -est.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'She is the ___ mentor. (kind)', options: ['kindest', 'kinder', 'kindiest'], answer: 0, hint: 'Add -est.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Omar takes the ___ photos. (great)', options: ['greatest', 'greater', 'greatiest'], answer: 0, hint: 'Add -est.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'We use superlative adjectives to show ___.', options: ['the greatest degree of something', 'two things only', 'a place', 'a time'], answer: 0, hint: 'the tallest, the biggest…' }
    ] },
  { id: 'V5', lesson: 2, concept: 'Superlatives: -st and y → -iest',
    explain: 'When an adjective ends in -e, add -st: nice → the nicest (Mona is the nicest friend I have). If an adjective ends in a consonant and -y, change -y to -i and add -est: happy → the happiest (Nora is the happiest girl in the class).',
    variants: [
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Mona is the ___ friend I have. (nice)', options: ['nicest', 'niceest', 'nicer'], answer: 0, hint: 'nice ends in -e: add -st.' },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'Nora is the ___ girl in the class. (happy)', options: ['happiest', 'happyest', 'happier'], answer: 0, hint: '-y becomes -iest.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'My grandpa is the ___ person I know.', options: ['wisest', 'wiser', 'wiser than', 'wise'], answer: 0, hint: 'wise ends in -e.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Ahmed told us the ___ story at the party.', options: ['funniest', 'funny', 'funnier', 'fun'], answer: 0, hint: 'funny: -y becomes -iest.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'My bag is the ___ bag. (heavy)', options: ['heaviest', 'heavyest', 'heavier'], answer: 0, hint: 'heavy ends in -y.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'I think the teacher’s job is the ___ job. (nice)', options: ['nicest', 'nicer', 'niceest'], answer: 0, hint: 'Add -st.' }
    ] },
  { id: 'V6', lesson: 2, concept: 'Superlatives in pictures (Review 2)',
    explain: 'The blue pen is the longest. The computer is the biggest. He is the smartest student in our class. She has the shortest hair in the group.',
    variants: [
      { type: 'mc', fig: 'pens3', mode: 'normal', level: 'medium', q: 'The blue pen is ___.', options: ['the longest', 'the shortest', 'longer', 'the longer'], answer: 0, hint: 'Compare the three pens.' },
      { type: 'mc', fig: 'screens2', mode: 'normal', level: 'medium', q: 'The computer is ___.', options: ['the biggest', 'the smallest', 'the bigest', 'bigger'], answer: 0, hint: 'big: double the g.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'He is the ___ student in our class. (smart)', options: ['smartest', 'smarter', 'smartiest'], answer: 0, hint: 'Add -est.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'She has the ___ hair in the group. (short)', options: ['shortest', 'shorter', 'shortiest'], answer: 0, hint: 'Add -est.' }
    ] },
  { id: 'V7', lesson: 2, boss: true, concept: 'Superlative rules together',
    explain: '+est: tallest, kindest · double + est: biggest, hottest · +st: nicest, wisest · y → iest: happiest, funniest, heaviest.',
    variants: [
      { type: 'table', mode: 'boss', level: 'hard', q: 'Sort the superlatives by their rule.', poc: 'Word', cols: ['+est / +st', 'double + est', 'y → iest'], items: ['tallest', 'nicest', 'biggest', 'hottest', 'happiest', 'heaviest'], answer: [0, 0, 1, 1, 2, 2], hint: 'Look at the letters before -est.' },
      { type: 'fill', mode: 'boss', level: 'hard', q: 'A firefighter carries the ___ tools. (heavy)', options: ['heaviest', 'heavyest', 'heavier', 'heavy'], answer: 0, hint: 'Change -y to -i.' },
      { type: 'fill', mode: 'boss', level: 'hard', q: 'This is the ___ box in the room. (big)', options: ['biggest', 'bigest', 'bigger', 'big'], answer: 0, hint: 'Vowel + consonant: double it.' },
      { type: 'fill', mode: 'boss', level: 'hard', q: 'Sami built the ___ house. (weak)', options: ['weakest', 'weakkest', 'weaker', 'weakiest'], answer: 0, hint: 'Two vowels before k: just add -est.' }
    ] },

  /* ---------- Lesson 3 · Story Time: "The Last House" + silent e (pages 86-89) ---------- */
  { id: 'W1', lesson: 3, concept: 'Sami the skilled carpenter',
    explain: 'Sami was a skilled carpenter who lived in a quiet village. For many years he built strong houses and beautiful furniture. People admired his work; some traveled from far away to see his wooden chairs and tables. After a lifetime of hard work, Sami grew tired and decided to stop building.',
    variants: [
      { type: 'mc', fig: 'photo', pic: ph('j5_carpenter'), mode: 'normal', level: 'easy', q: 'What was Sami’s job?', options: ['carpenter', 'engineer', 'firefighter', 'doctor'], answer: 0, hint: 'He made things from wood.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Sami was a ___ carpenter.', options: ['skilled', 'poor', 'lazy', 'new'], answer: 0, hint: 'People admired his work.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Why did Sami stop working?', options: ['He grew tired after a lifetime of hard work.', 'The king asked him to stop.', 'He had no wood.', 'He was sick.'], answer: 0, hint: 'Read the second paragraph.' },
      { type: 'tf', mode: 'timed', seconds: 12, level: 'easy', q: 'Some people traveled from far away to see Sami’s wooden chairs and tables.', answer: 0, hint: 'People admired his work.' }
    ] },
  { id: 'W2', lesson: 3, concept: 'The last house',
    explain: 'The village king asked: “Please build one last house. It will be your final gift to the village.” Sami agreed, but his heart was not in it. He used weak wood. He didn’t check the windows or the doors. The windows didn’t fit. The doors were crooked.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What did the village king ask Sami to do?', options: ['Build one last house', 'Stop building', 'Make a chair', 'Leave the village'], answer: 0, hint: 'Read the king’s words.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'The king asked Sami to build ___.', options: ['a gift for the village', 'his own house', 'a school', 'a palace'], answer: 0, hint: '“It will be your final ___ to the village.”' },
      { type: 'mc', fig: 'photo', pic: ph('h5_weak'), mode: 'normal', level: 'easy', q: 'Sami used ___ wood to build the house.', options: ['weak', 'strong', 'new', 'beautiful'], answer: 0, hint: 'Look at the house in the picture.' },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'Sami checked the windows and the doors carefully.', answer: 1, hint: 'The windows didn’t fit.' },
      { type: 'multi', mode: 'normal', level: 'medium', q: 'What was wrong with the last house? Choose all the correct answers.', options: ['The windows didn’t fit.', 'The doors were crooked.', 'Sami used weak wood.', 'It was made of stone.'], answer: [0, 1, 2], hint: 'It was a wooden house.' }
    ] },
  { id: 'W3', lesson: 3, concept: 'The king’s gift and Sami’s regret',
    explain: 'When the house was finished, Sami gave the keys to the king. The king said, “This house is for you, Sami. It’s a gift for all your wonderful work.” Sami stood in shock; his face turned red with regret. He promised to always give his best. He slowly repaired the house, board by board, and made it strong and beautiful again.',
    variants: [
      { type: 'mc', fig: 'photo', pic: ph('h5_keys'), mode: 'normal', level: 'easy', q: 'What did Sami give the king when the house was finished?', options: ['The keys', 'A chair', 'Some wood', 'A letter'], answer: 0, hint: 'Look at the picture.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Who was the house for?', options: ['Sami', 'The king', 'The village children', 'A tourist'], answer: 0, hint: '“This house is for you, Sami.”' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'How did Sami feel when he knew the house was his?', options: ['Shocked and full of regret', 'Very happy', 'Bored', 'Proud of his work'], answer: 0, hint: 'His face turned red.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What did Sami do after that?', options: ['He repaired the house board by board.', 'He left the village.', 'He sold the house.', 'He built a new palace.'], answer: 0, hint: 'He made it strong and beautiful again.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'The story teaches us to ___.', options: ['do our best', 'stop when tired', 'use weak wood', 'work fast'], answer: 0, hint: 'Sami promised to always give his…' }
    ] },
  { id: 'W4', lesson: 3, concept: 'Story words: carpenter, gift, furniture, wooden, fit, skilled, promise',
    explain: 'A carpenter is a person who builds with wood. A gift is a present. Furniture is tables, chairs and other home items. Fit means to be the right size. Wooden means made of wood. Skilled means very good at doing something. If you promise to do something, you will definitely do it.',
    variants: [
      { type: 'tap', diagram: 'house6', mode: 'normal', level: 'easy', q: 'Tap the furniture.', answer: 'hFurniture', hint: 'A chair and a table.' },
      { type: 'tap', diagram: 'house6', mode: 'normal', level: 'easy', q: 'Tap the house Sami built carelessly.', answer: 'hWeak', hint: 'It is crooked.' },
      { type: 'fill', mode: 'normal', level: 'easy', q: '___ means to be the right size.', options: ['Fit', 'Wooden', 'Skilled'], answer: 0, hint: 'The windows didn’t ___.' },
      { type: 'fill', mode: 'normal', level: 'easy', q: '___ means made of wood.', options: ['Wooden', 'Fit', 'Promise'], answer: 0, hint: 'wood + en' },
      { type: 'fill', mode: 'normal', level: 'medium', q: '___ means very good at doing something.', options: ['Skilled', 'Wooden', 'Fit'], answer: 0, hint: 'Sami was a ___ carpenter.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'If you ___ to do something, it means that you will definitely do it.', options: ['promise', 'fit', 'skilled'], answer: 0, hint: 'Sami ___d to always give his best.' }
    ] },
  { id: 'W5', lesson: 3, concept: 'The summary of the story',
    explain: 'Sami was a skilled carpenter who lived in a quiet village. After many years of hard work, he felt tired and wanted to stop. But the king asked him to build one last house as a gift to the village. Sami used weak wood. Sami was shocked. He knew he had worked poorly. He felt regret and promised to always do his best.',
    variants: [
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Sami was a skilled ___ who lived in a quiet village.', options: ['carpenter', 'gift', 'wood'], answer: 0, hint: 'His job.' },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'After many years of hard ___, he felt tired.', options: ['work', 'gift', 'wood'], answer: 0, hint: 'He worked for many years.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'The king asked him to build one last house as a ___ to the village.', options: ['gift', 'work', 'carpenter'], answer: 0, hint: 'A present.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Sami used weak ___ and didn’t check the windows or the doors.', options: ['wood', 'work', 'gift'], answer: 0, hint: 'Houses are made of it.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'He knew he had worked ___.', options: ['poorly', 'gift', 'carpenter'], answer: 0, hint: 'Not well.' }
    ] },
  { id: 'W6', lesson: 3, concept: 'Silent e makes a long vowel',
    explain: 'When a silent “e” comes at the end of a word after one consonant, it makes the vowel before it a long vowel, like “rope” and “slide”. Words: cube, slide, stone, gate, face, rope, flute, nine.',
    variants: [
      { type: 'tap', diagram: 'silentE9', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap the cube.', answer: 'seCube', hint: 'A box shape.' },
      { type: 'tap', diagram: 'silentE9', mode: 'normal', level: 'easy', q: 'Tap the gate.', answer: 'seGate', hint: 'A garden door.' },
      { type: 'tap', diagram: 'silentE9', mode: 'normal', level: 'easy', q: 'Tap the flute.', answer: 'seFlute', hint: 'A boy plays music on it.' },
      { type: 'tap', diagram: 'silentE9', mode: 'normal', level: 'medium', q: 'Tap the stone.', answer: 'seStone', hint: 'A gray rock.' },
      { type: 'tap', diagram: 'silentE9', mode: 'normal', level: 'medium', q: 'Tap nine.', answer: 'seNine', hint: 'A number.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What does a silent “e” at the end of a word do?', options: ['It makes the vowel before it long.', 'We say it loudly.', 'It makes the word plural.', 'It makes the vowel short.'], answer: 0, hint: 'rope, slide' }
    ] },
  { id: 'W7', lesson: 3, concept: 'Long vowel words in sentences',
    explain: 'I play on the slide in the park. My house has a very big gate. My sister can play the flute. ston_ → stone, slid_ → slide.',
    variants: [
      { type: 'fill', mode: 'normal', level: 'easy', q: 'I play on the ___ in the park.', options: ['slide', 'flute', 'gate'], answer: 0, hint: 'You slide down it.' },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'My house has a very big ___.', options: ['gate', 'flute', 'cube'], answer: 0, hint: 'You open it to go in.' },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'My sister can play the ___.', options: ['flute', 'gate', 'stone'], answer: 0, hint: 'A musical instrument.' },
      { type: 'fill', fig: 'photo', pic: ph('se_stone'), mode: 'normal', level: 'medium', q: 'ston___ (Review 2)', options: ['e', 'a', 'o'], answer: 0, hint: 'The silent letter at the end.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which word has a long vowel with silent e?', options: ['rope', 'pot', 'hat', 'pen'], answer: 0, hint: 'Look for an e at the end.' }
    ] },
  { id: 'W8', lesson: 3, boss: true, concept: 'The story and silent e together',
    explain: 'The story in order, and words with a silent e.',
    variants: [
      { type: 'order', mode: 'boss', level: 'hard', q: 'Put the story in order.', items: ['Sami repaired the house board by board.', 'The king asked Sami to build one last house.', 'Sami used weak wood.', 'The king gave the house to Sami.'], answer: [1, 2, 3, 0], hint: 'Start with the king’s request.' },
      { type: 'table', mode: 'boss', level: 'hard', q: 'Silent e or not?', poc: 'Word', cols: ['long vowel + silent e', 'short vowel'], items: ['face', 'nine', 'rope', 'hat', 'pen', 'pot'], answer: [0, 0, 0, 1, 1, 1], hint: 'Is there an e at the end?' },
      { type: 'match', mode: 'boss', level: 'hard', q: 'Match the words to their meanings.', left: ['carpenter', 'gift', 'furniture'], right: ['a person who builds with wood', 'a present given to someone', 'tables, chairs and other home items'], answer: [0, 1, 2], hint: 'See the glossary.' }
    ] },

  /* ---------- Lesson 4 · Writing: Non-Fiction (pages 90-91, Review 2 p 111) ---------- */
  { id: 'X1', lesson: 4, concept: 'Heroes Who Fight Fires',
    explain: 'Omar is a firefighter at the local fire station. He wears a thick protective uniform with bright yellow stripes and a heavy helmet to keep him safe. Every day he checks his equipment and keeps the big red fire truck ready. When the alarm rings, he puts on his equipment and rides the truck with his team.',
    variants: [
      { type: 'tap', diagram: 'fire6', mode: 'normal', level: 'easy', q: 'Tap the fire truck.', answer: 'fTruck', hint: 'Big and red.' },
      { type: 'tap', diagram: 'fire6', mode: 'normal', level: 'easy', q: 'Tap the fire station.', answer: 'fStation', hint: 'A building with a big garage door.' },
      { type: 'tap', diagram: 'fire6', mode: 'normal', level: 'medium', q: 'Tap the protective uniform.', answer: 'fUniform', hint: 'A jacket with yellow stripes.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Where does Omar work?', options: ['At the local fire station', 'At the hospital', 'At school', 'At the post office'], answer: 0, hint: 'Read the first sentence.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Why does Omar wear a heavy helmet?', options: ['To keep him safe', 'To look nice', 'To keep warm', 'To carry water'], answer: 0, hint: 'Read the end of the first paragraph.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What does Omar do every day at the station?', options: ['He checks his equipment and keeps the fire truck ready.', 'He teaches lessons.', 'He designs buildings.', 'He takes photos.'], answer: 0, hint: 'Read the second paragraph.' }
    ] },
  { id: 'X2', lesson: 4, concept: 'A firefighter’s tools',
    explain: 'He uses special tools like water hoses, ladders and oxygen tanks to fight fires and save people. The part he likes most is saving lives and protecting the community. The work is dangerous, but he’s proud to be a firefighter. (Review 2: he uses a long water hose to stop fires and a special ladder for tall buildings.)',
    variants: [
      { type: 'tap', diagram: 'fire6', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap the ladder.', answer: 'fLadder', hint: 'You climb it.' },
      { type: 'tap', diagram: 'fire6', mode: 'normal', level: 'medium', q: 'Tap the oxygen tank.', answer: 'fOxygen', hint: 'A yellow tank with a mask.' },
      { type: 'multi', mode: 'normal', level: 'medium', q: 'Which tools does Omar use? Choose all the correct answers.', options: ['Water hoses', 'Ladders', 'Oxygen tanks', 'Puppets'], answer: [0, 1, 2], hint: 'Puppets are for shows.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Omar uses a long water ___ to stop fires. (Review 2)', options: ['hose', 'truck', 'ladder', 'helmet'], answer: 0, hint: 'Water comes out of it.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What does Omar like most about his job?', options: ['Saving lives and protecting the community', 'Driving the truck fast', 'Wearing the helmet', 'Cleaning the station'], answer: 0, hint: 'Read the last paragraph.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'The main idea of the text is about a ___. (Review 2)', options: ['firefighter', 'nurse', 'doctor', 'teacher'], answer: 0, hint: 'Omar’s job.' }
    ] },
  { id: 'X3', lesson: 4, concept: 'Non-fiction writing',
    explain: 'A non-fiction text is a real-life text. When you write it, ask yourself: Is the information true? Did I make anything up? Non-fiction writing should include an introductory sentence, details that are all true, adjectives (thick, special tools, big red fire truck) and a closing sentence.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'A non-fiction text is a ___ text.', options: ['real-life', 'made-up', 'funny', 'magic'], answer: 0, hint: 'Read the first line of p 90.' },
      { type: 'multi', mode: 'normal', level: 'medium', q: 'What should non-fiction writing include? Choose all the correct answers.', options: ['An introductory sentence', 'Details that are all true', 'A closing sentence', 'Made-up details'], answer: [0, 1, 2], hint: 'Non-fiction is true.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: '“My neighbor, Omar, is a firefighter at our local fire station.” is ___.', options: ['an introductory sentence', 'a closing sentence', 'an adjective', 'a title'], answer: 0, hint: 'It starts the text.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: '“The work is dangerous, but he’s proud to be a firefighter.” is ___.', options: ['a closing sentence', 'an introductory sentence', 'a title', 'a detail that is made up'], answer: 0, hint: 'It ends the text.' },
      { type: 'tf', mode: 'timed', seconds: 12, level: 'easy', q: 'When you write non-fiction, ask yourself: Is the information true?', answer: 0, hint: 'Read the Tip.' }
    ] },
  { id: 'X4', lesson: 4, boss: true, concept: 'Non-fiction parts and examples',
    explain: 'Protective uniforms: a thick protective uniform, a heavy helmet. Tools: water hoses, ladders, oxygen tanks. Things he likes: saving lives, protecting the community.',
    variants: [
      { type: 'table', mode: 'boss', level: 'hard', q: 'Find examples from the text.', poc: 'Example', cols: ['Protective uniform', 'Tools', 'Things he likes'], items: ['heavy helmet', 'thick protective uniform', 'water hoses', 'ladders', 'saving lives', 'protecting our community'], answer: [0, 0, 1, 1, 2, 2], hint: 'He wears a uniform; he uses tools; he likes helping.' },
      { type: 'match', mode: 'boss', level: 'hard', q: 'Match the part to an example.', left: ['introductory sentence', 'adjectives', 'closing sentence'], right: ['My neighbor, Omar, is a firefighter.', 'thick, big red', 'The work is dangerous, but he’s proud.'], answer: [0, 1, 2], hint: 'Adjectives describe things.' },
      { type: 'mc', mode: 'boss', level: 'hard', q: 'What does Omar do when people need help? (Review 2)', options: ['He and his team quickly drive to help them.', 'He calls a doctor.', 'He stays at the station.', 'He takes photos.'], answer: 0, hint: 'Read the Review 2 text.' }
    ] },

  /* ---------- Lesson 5 · Think and Create: Origami Art (page 92) ---------- */
  { id: 'Y1', lesson: 5, concept: 'What origami is',
    explain: 'Origami is an art form that is made by folding paper to make shapes, animals, or objects. It is the Japanese art of paper folding.',
    variants: [
      { type: 'term', mode: 'normal', level: 'medium', q: 'An art form made by folding paper to make shapes, animals, or objects.', answer: 'Origami', choices: ['Collage', 'Poster', 'Leaflet'], hint: 'The Japanese art of paper folding.' },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'Origami is the art of paper ___.', options: ['folding', 'cutting', 'painting', 'burning'], answer: 0, hint: 'Read the first line.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Origami comes from ___.', options: ['Japan', 'Egypt', 'China', 'Italy'], answer: 0, hint: 'The ___ese art of paper folding.' }
    ] },
  { id: 'Y2', lesson: 5, concept: 'What you need and how to make it',
    explain: 'To make origami art, you need colored paper squares, scissors, markers, glue and a ruler. Choose a job, pick colored paper that matches the uniform, follow the folding instructions, and add details using markers (like glasses, a watch).',
    variants: [
      { type: 'tap', diagram: 'origami6', mode: 'normal', level: 'easy', q: 'Tap the scissors.', answer: 'oScissors', hint: 'You cut with them.' },
      { type: 'tap', diagram: 'origami6', mode: 'normal', level: 'easy', q: 'Tap the glue.', answer: 'oGlue', hint: 'It makes paper stick.' },
      { type: 'tap', diagram: 'origami6', mode: 'normal', level: 'medium', q: 'Tap the colored paper squares.', answer: 'oPaper', hint: 'Many colors.' },
      { type: 'multi', mode: 'normal', level: 'medium', q: 'What do you need to make origami art? Choose all the correct answers.', options: ['Colored paper squares', 'Scissors', 'Markers', 'A camera'], answer: [0, 1, 2], hint: 'One is for taking photos.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'How do you add details like glasses or a watch?', options: ['Using markers', 'Using scissors', 'Using glue', 'Using a ruler'], answer: 0, hint: 'You draw them.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which paper should you pick?', options: ['Colored paper that matches the uniform', 'Any newspaper', 'Only white paper', 'Wet paper'], answer: 0, hint: 'A doctor’s coat is white; a nurse’s uniform is blue.' }
    ] },
  { id: 'Y3', lesson: 5, boss: true, concept: 'Making and checking origami',
    explain: 'Steps: choose a job, pick colored paper, follow the folding instructions, add details with markers. Feedback: the origami has good folds, correct uniform colors and nice decoration.',
    variants: [
      { type: 'order', mode: 'boss', level: 'hard', q: 'Put the steps in order.', items: ['Add details using markers.', 'Choose a job.', 'Follow the folding instructions.', 'Pick colored paper that matches the uniform.'], answer: [1, 3, 2, 0], hint: 'Choose first; add details last.' },
      { type: 'multi', mode: 'boss', level: 'hard', q: 'What do you check when you give feedback? Choose all the correct answers.', options: ['Good folds', 'Correct uniform colors', 'Nice decoration', 'The price of the paper'], answer: [0, 1, 2], hint: 'Look at p 92 ex 2.' },
      { type: 'mc', fig: 'photo', pic: ph('o5_coat'), mode: 'boss', level: 'hard', q: 'This origami shows the uniform of which job?', options: ['doctor', 'firefighter', 'engineer', 'police officer'], answer: 0, hint: 'A white coat and a stethoscope.' }
    ] }
];
})();
