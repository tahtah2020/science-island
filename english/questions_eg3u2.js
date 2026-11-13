/* English · Grade 3 · Term 1 · Unit 2 "My Family and I" · ministry book "English Primary 3", first term 2026/2027 (book pages 27-42)
   One English book for both tracks, so there is no _ar file.
   Lessons: 1 Meet My Family + possessive pronouns my / his / her (pp 28-31) · 2 Family Traditions and Celebrations + letter x = /gz/ (pp 32-35)
            3 My Family Helps Me Grow + digraph ph = /f/ (pp 36-38) · 4 Jobs in My Family + self-assessment (pp 39-42)
   Idea letters (one per lesson, the grade's letters run on from Unit 1): E, F, G, H.  Boss ideas: E7, F6, G6, H6.
   Easy first, difficulty rises slowly; hard only in the Boss idea. Every phrasing has a hint that points to the rule or the text, never the answer.
   Pictures: the owner's Gemini sheets (12-13 Nov 2026) cut into english/assets/g3_*.webp; tap pictures family6, help4, jobs5, celeb4, sounds5
     and fig 'photo' (q.pic.src) in english/g3_art.js. The word "SCHOOL" on the building in g3_takes was painted out.
   Review notes:
   - Open tasks are not asked: p 33 ex 3 (draw), p 34 ex 6, p 37 ex 3, p 40 ex 2 (write about yourself), p 42 ex 5 (my mother / father is a … :
     each child's own answer) and the p 42 self-assessment.
   - p 28 shows uncle, aunt and cousin only as labels on a family picture; a picture cannot show who is an uncle, so these words are asked in the
     book's sentences (p 31 ex 6 and 7), not as "tap the uncle".
   - Riddles p 35 and p 38 have no printed answers: "where you leave" = exit, "I ask you questions" = exam (both the only x-words that fit),
     "help you call your friend" = phone; "You press a button, I make a sound, a memory saved" is asked as photo (the only ph-word of the list
     that is a saved memory). Owner, please check.
   - p 31 ex 7 b "My ___ and ___ cook dinner" is asked as one choice "father and mother" (the two words left after a and c). */
(function () {
window.CHAPTER = { id: 'eg3u2', title: 'My Family and I' };
const ph = (...src) => ({ src, label: 'A picture for the question' });

window.IDEAS = [
  /* ---------- Lesson 1 · Meet My Family (pages 28-31) ---------- */
  { id: 'E1', lesson: 1, concept: 'Family members: father, mother, sister, brother, grandmother, grandfather (pp 28-29)',
    explain: 'This is my family: my father, my mother, my sister, my brother, my grandmother and my grandfather. My uncle, my aunt and my cousin are in my family too.',
    variants: [
      { type: 'tap', diagram: 'family6', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap the grandmother.', answer: 'mbGrandma', hint: 'She is old and has a walking stick.' },
      { type: 'tap', diagram: 'family6', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap the sister.', answer: 'mbSister', hint: 'She is a girl.' },
      { type: 'tap', diagram: 'family6', mode: 'normal', level: 'easy', q: 'Tap the father.', answer: 'mbFather', hint: 'He is a man, not old.' },
      { type: 'tap', diagram: 'family6', mode: 'normal', level: 'easy', q: 'Tap the brother.', answer: 'mbBrother', hint: 'He is a boy.' },
      { type: 'tap', diagram: 'family6', mode: 'normal', level: 'medium', q: 'Tap the grandfather.', answer: 'mbGrandpa', hint: 'He is an old man.' },
      { type: 'tap', diagram: 'family6', mode: 'normal', level: 'medium', q: 'Tap the mother.', answer: 'mbMother', hint: 'She is a woman, not old.' }
    ] },
  { id: 'E2', lesson: 1, concept: 'Write the correct word: sister, father, grandmother (p 29 ex 3)',
    explain: 'A girl in my family is my sister. A man who is a parent is my father. My father’s or my mother’s mother is my grandmother.',
    variants: [
      { type: 'mc', fig: 'photo', pic: ph('g3_sister'), mode: 'normal', level: 'easy', q: 'Look. Who is she?', options: ['sister', 'father', 'grandmother'], answer: 0, hint: 'She is a young girl.' },
      { type: 'mc', fig: 'photo', pic: ph('g3_father'), mode: 'normal', level: 'easy', q: 'Look. Who is he?', options: ['father', 'sister', 'grandmother'], answer: 0, hint: 'He is a man.' },
      { type: 'mc', fig: 'photo', pic: ph('g3_grandmother'), mode: 'normal', level: 'easy', q: 'Look. Who is she?', options: ['grandmother', 'sister', 'father'], answer: 0, hint: 'She is old.' },
      { type: 'mc', fig: 'photo', pic: ph('g3_grandfather'), mode: 'normal', level: 'medium', q: 'Look. Who is he?', options: ['grandfather', 'brother', 'mother'], answer: 0, hint: 'He is an old man.' }
    ] },
  { id: 'E3', lesson: 1, concept: 'Possessive pronouns: my, his, her (p 30)',
    explain: 'I → my: My mother is a teacher. My bag is heavy. A boy → his: His brother is a student. His T-shirt is blue. A girl → her: Her cat is friendly. Her baby sister is cute.',
    variants: [
      { type: 'fill', fig: 'photo', pic: ph('g3_blueshirt'), mode: 'timed', seconds: 15, level: 'easy', q: 'Look at the boy. ___ T-shirt is blue.', options: ['His', 'Her', 'My'], answer: 0, hint: 'It is a boy: use his.' },
      { type: 'fill', fig: 'photo', pic: ph('g3_kitten'), mode: 'timed', seconds: 15, level: 'easy', q: 'Look at the girl. ___ cat is friendly.', options: ['Her', 'His', 'My'], answer: 0, hint: 'It is a girl: use her.' },
      { type: 'fill', fig: 'photo', pic: ph('g3_heavybag'), mode: 'normal', level: 'easy', q: 'I carry a big bag. ___ bag is heavy.', options: ['My', 'His', 'Her'], answer: 0, hint: 'I → my.' },
      { type: 'fill', fig: 'photo', pic: ph('g3_babysister'), mode: 'normal', level: 'medium', q: 'Look at the girl. ___ baby sister is cute.', options: ['Her', 'His', 'My'], answer: 0, hint: 'The baby belongs to the girl.' },
      { type: 'table', mode: 'normal', level: 'medium', q: 'Which word do we use?', poc: 'Who?', cols: ['my', 'his', 'her'], items: ['I', 'a boy', 'a girl'], answer: [0, 1, 2], hint: 'I → my. A boy → his. A girl → her.' }
    ] },
  { id: 'E4', lesson: 1, concept: 'Fill in the blanks with my, his, her (p 30 ex 4, p 31 ex 5)',
    explain: 'Amira has a kite. Her kite is flying high. I have a balloon. My balloon is yellow. Nader has a book. His book is new. I have a pet. My pet is a rabbit. This is my bag. That is Adam. His book is blue. Sara loves drawing. Her pictures are nice. Dina has a cat. Her cat is cute. This is Laila. Her dress is pink.',
    variants: [
      { type: 'fill', fig: 'photo', pic: ph('g3_kite'), mode: 'normal', level: 'easy', q: 'Amira has a kite. ___ kite is flying high.', options: ['Her', 'His', 'My'], answer: 0, hint: 'Amira is a girl.' },
      { type: 'fill', fig: 'photo', pic: ph('g3_balloon'), mode: 'normal', level: 'easy', q: 'I have a balloon. ___ balloon is yellow.', options: ['My', 'His', 'Her'], answer: 0, hint: 'The sentence starts with I.' },
      { type: 'fill', fig: 'photo', pic: ph('g3_newbook'), mode: 'normal', level: 'easy', q: 'Nader has a book. ___ book is new.', options: ['His', 'Her', 'My'], answer: 0, hint: 'Nader is a boy.' },
      { type: 'fill', fig: 'photo', pic: ph('g3_rabbit'), mode: 'normal', level: 'easy', q: 'I have a pet. ___ pet is a rabbit.', options: ['My', 'Her', 'His'], answer: 0, hint: 'I → my.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'This is ___ bag. I take it to school.', options: ['my', 'his', 'her'], answer: 0, hint: 'Read the next sentence: I take it.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'That is Adam. ___ book is blue.', options: ['His', 'Her', 'My'], answer: 0, hint: 'Adam is a boy.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Sara loves drawing. ___ pictures are nice.', options: ['Her', 'His', 'My'], answer: 0, hint: 'Sara is a girl.' },
      { type: 'fill', fig: 'photo', pic: ph('g3_pinkdress'), mode: 'normal', level: 'medium', q: 'This is Laila. ___ dress is pink.', options: ['Her', 'His', 'My'], answer: 0, hint: 'Laila is a girl.' }
    ] },
  { id: 'E5', lesson: 1, concept: 'Reorder the words to form sentences (p 31 ex 6)',
    explain: 'His name is Ahmed. My sister is kind. My uncle is a police officer. His car is black. Her cousin is tall.',
    variants: [
      { type: 'build', style: 'sentence', mode: 'normal', level: 'easy', q: 'Put the words in order.', parts: ['His', 'name', 'is', 'Ahmed.'], extra: ['are'], hint: 'Start with His.' },
      { type: 'build', style: 'sentence', mode: 'normal', level: 'easy', q: 'Put the words in order.', parts: ['My', 'sister', 'is', 'kind.'], extra: ['am'], hint: 'Start with My.' },
      { type: 'build', style: 'sentence', mode: 'normal', level: 'medium', q: 'Put the words in order.', parts: ['My', 'uncle', 'is', 'a', 'police officer.'], extra: ['are'], hint: 'Who? My uncle. Then: is a…' },
      { type: 'build', style: 'sentence', mode: 'normal', level: 'medium', q: 'Put the words in order.', parts: ['His', 'car', 'is', 'black.'], extra: ['am'], hint: 'Start with His car.' }
    ] },
  { id: 'E6', lesson: 1, concept: 'Family words in sentences: grandfather, cousin, father and mother (p 31 ex 7)',
    explain: 'My grandfather is old. My father and mother cook dinner. I love to play with my cousin.',
    variants: [
      { type: 'fill', fig: 'photo', pic: ph('g3_grandpa_old'), mode: 'normal', level: 'easy', q: 'My ___ is old.', options: ['grandfather', 'cousin', 'brother'], answer: 0, hint: 'Look: an old man.' },
      { type: 'fill', fig: 'photo', pic: ph('g3_cousins'), mode: 'normal', level: 'easy', q: 'I love to play with my ___.', options: ['cousin', 'grandfather', 'mother'], answer: 0, hint: 'A child of your uncle or aunt.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'My ___ cook dinner.', options: ['father and mother', 'cousin and grandfather', 'sister and baby'], answer: 0, hint: 'The two words left in the box are father and mother.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which word is a family member?', options: ['uncle', 'kite', 'balloon'], answer: 0, hint: 'Look at the family picture on page 28.' }
    ] },
  { id: 'E7', lesson: 1, boss: true, concept: 'Family members and my / his / her',
    explain: 'I → my, a boy → his, a girl → her. Her cousin is tall. Dina has a cat. Her cat is cute.',
    variants: [
      { type: 'table', mode: 'boss', level: 'hard', q: 'Choose the word for the next sentence.', poc: 'Sentence', cols: ['My', 'His', 'Her'], items: ['I have a ball.', 'Adam has a bike.', 'Dina has a cat.', 'Nader has a book.', 'Amira has a kite.'], answer: [0, 1, 2, 1, 2], hint: 'I → My. A boy → His. A girl → Her.' },
      { type: 'build', style: 'sentence', mode: 'boss', level: 'hard', q: 'Put the words in order.', parts: ['Her', 'cousin', 'is', 'tall.'], extra: ['are'], hint: 'Start with Her cousin.' },
      { type: 'fill', mode: 'boss', level: 'hard', q: 'Dina has a cat. ___ cat is cute.', options: ['Her', 'His', 'My'], answer: 0, hint: 'Dina is a girl.' }
    ] },

  /* ---------- Lesson 2 · Family Traditions and Celebrations (pages 32-35) ---------- */
  { id: 'F1', lesson: 2, concept: 'Celebrations: Eid Al-Fitr, Sham El-Nessim, Mother’s Day, 6th of October (p 32)',
    explain: 'We celebrate Eid Al-Fitr, Sham El-Nessim, Mother’s Day and the 6th of October.',
    variants: [
      { type: 'tap', diagram: 'celeb4', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap Mother’s Day.', answer: 'cbMother', hint: 'The children give their mother a card.' },
      { type: 'tap', diagram: 'celeb4', mode: 'normal', level: 'easy', q: 'Tap Eid Al-Fitr.', answer: 'cbEid', hint: 'Look for the moon and the mosque.' },
      { type: 'tap', diagram: 'celeb4', mode: 'normal', level: 'easy', q: 'Tap Sham El-Nessim.', answer: 'cbSham', hint: 'Look for coloured eggs in a garden.' },
      { type: 'tap', diagram: 'celeb4', mode: 'normal', level: 'medium', q: 'Tap the 6th of October.', answer: 'cbOctober', hint: 'Look for the soldiers and the flag.' }
    ] },
  { id: 'F2', lesson: 2, concept: 'Write the correct answer under the picture (p 33 ex 4, p 34 ex 5)',
    explain: 'The moon and the mosque: Eid Al-Fitr. A card for mum: Mother’s Day. Soldiers and the flag: 6th of October. Coloured eggs: Sham El-Nessim.',
    variants: [
      { type: 'mc', fig: 'photo', pic: ph('g3_eid'), mode: 'normal', level: 'easy', q: 'Look. Which celebration is it?', options: ['Eid Al-Fitr', 'Mother’s Day', '6th of October'], answer: 0, hint: 'Look at the moon and the mosque.' },
      { type: 'mc', fig: 'photo', pic: ph('g3_mothersday'), mode: 'normal', level: 'easy', q: 'Look. Which celebration is it?', options: ['Mother’s Day', 'Sham El-Nessim', 'Eid Al-Fitr'], answer: 0, hint: 'The children give a card to their mother.' },
      { type: 'mc', fig: 'photo', pic: ph('g3_october'), mode: 'normal', level: 'medium', q: 'Look. Which celebration is it?', options: ['6th of October', 'Eid Al-Fitr', 'Mother’s Day'], answer: 0, hint: 'Look at the soldiers.' },
      { type: 'mc', fig: 'photo', pic: ph('g3_sham'), mode: 'normal', level: 'medium', q: 'Look. Which celebration is it?', options: ['Sham El-Nessim', '6th of October', 'Mother’s Day'], answer: 0, hint: 'Look at the coloured eggs.' }
    ] },
  { id: 'F3', lesson: 2, concept: 'Listen and discuss: favourite celebrations (p 33 ex 2)',
    explain: 'My favorite celebration is 6th of October. It reminds us how brave the Egyptian soldiers are. I love Sham El-Nessim as we go to the garden all day, play, and eat salted fish.',
    variants: [
      { type: 'fill', mode: 'normal', level: 'easy', q: 'On Sham El-Nessim we go to the ___ all day.', options: ['garden', 'school', 'library'], answer: 0, hint: 'We play outside with green trees.' },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'On Sham El-Nessim we play and eat salted ___.', options: ['fish', 'cake', 'bread'], answer: 0, hint: 'It comes from the sea or the river.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: '6th of October reminds us how ___ the Egyptian soldiers are.', options: ['brave', 'shy', 'funny'], answer: 0, hint: 'The soldiers are not afraid.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which celebration reminds us of the Egyptian soldiers?', options: ['6th of October', 'Sham El-Nessim', 'Mother’s Day'], answer: 0, hint: 'Read the first sentence again.' }
    ] },
  { id: 'F4', lesson: 2, concept: 'Phonics: letter x = /gz/ (exam, exit, example, examine, exist) (p 35 ex 1-3)',
    explain: 'In exam, exit, example, examine and exist the letter x says /gz/.',
    variants: [
      { type: 'tap', diagram: 'sounds5', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap the exam.', answer: 'sdExam', hint: 'A boy writes answers on a paper.' },
      { type: 'tap', diagram: 'sounds5', mode: 'normal', level: 'easy', q: 'Tap the exit.', answer: 'sdExit', hint: 'A sign that shows the way out.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Which letter is missing? e _ a m', options: ['x', 's', 'k'], answer: 0, hint: 'It says /gz/.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Which letter is missing? e _ ample', options: ['x', 'z', 'g'], answer: 0, hint: 'The same letter as in exam.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Put the letters in order: x i e t', options: ['exit', 'exam', 'exist'], answer: 0, hint: 'Start with e. It has four letters.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Put the letters in order: x e a m', options: ['exam', 'exit', 'example'], answer: 0, hint: 'Start with e. It ends with m.' }
    ] },
  { id: 'F5', lesson: 2, concept: 'Riddles and sentences with /gz/ (p 35 ex 4 and 5)',
    explain: 'I start with E and have an X, I’m where you leave: exit. I ask you questions, big and small. You have to answer them all: exam. I have an exam today. I see the exit sign.',
    variants: [
      { type: 'mc', fig: 'photo', pic: ph('g3_exit'), mode: 'normal', level: 'easy', q: '“I start with E and have an X, I’m where you leave.” What am I?', options: ['exit', 'exam', 'example'], answer: 0, hint: 'You go out through it.' },
      { type: 'mc', fig: 'photo', pic: ph('g3_exam'), mode: 'normal', level: 'easy', q: '“I ask you questions, big and small. You have to answer them all!” What am I?', options: ['exam', 'exit', 'elephant'], answer: 0, hint: 'You have one at school.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: '“I have an exam today.” Which word has the sound /gz/?', options: ['exam', 'have', 'today'], answer: 0, hint: 'Look for the letter x.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: '“She ran to the exit.” Which word has the sound /gz/?', options: ['exit', 'ran', 'She'], answer: 0, hint: 'Look for the letter x.' }
    ] },
  { id: 'F6', lesson: 2, boss: true, concept: 'Celebrations and the /gz/ sound',
    explain: 'Sham El-Nessim: the garden and salted fish. 6th of October: brave Egyptian soldiers. exam, exit, example, examine, exist: x = /gz/.',
    variants: [
      { type: 'multi', mode: 'boss', level: 'hard', q: 'Choose all the words with x = /gz/.', options: ['exam', 'exit', 'example', 'elephant'], answer: [0, 1, 2], hint: 'Look for the letter x after e.' },
      { type: 'match', mode: 'boss', level: 'hard', q: 'Match the celebration to what we do.', left: ['Sham El-Nessim', '6th of October', 'Mother’s Day'], right: ['We go to the garden and eat salted fish.', 'We remember the brave Egyptian soldiers.', 'We give our mother a card.'], answer: [0, 1, 2], hint: 'Think of the pictures on page 32.' },
      { type: 'mc', mode: 'boss', level: 'hard', q: 'Which word does NOT have x = /gz/?', options: ['phone', 'exist', 'examine'], answer: 0, hint: 'Which word has no x?' }
    ] },

  /* ---------- Lesson 3 · My Family Helps Me Grow (pages 36-38) ---------- */
  { id: 'G1', lesson: 3, concept: 'How my family helps me: takes, cooks, helps, reads (p 36)',
    explain: 'My father takes me to school. My mother cooks us food every day. My brother helps me do my homework. My grandmother reads me a story.',
    variants: [
      { type: 'tap', diagram: 'help4', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap: My mother cooks us food.', answer: 'hpCooks', hint: 'Look for a pot.' },
      { type: 'tap', diagram: 'help4', mode: 'normal', level: 'easy', q: 'Tap: My father takes me to school.', answer: 'hpTakes', hint: 'Look for a school bag.' },
      { type: 'tap', diagram: 'help4', mode: 'normal', level: 'easy', q: 'Tap: My grandmother reads me a story.', answer: 'hpStory', hint: 'Look for an old woman with a book.' },
      { type: 'tap', diagram: 'help4', mode: 'normal', level: 'medium', q: 'Tap: My brother helps me do my homework.', answer: 'hpHomework', hint: 'Look for a desk and a notebook.' }
    ] },
  { id: 'G2', lesson: 3, concept: 'Complete: takes, cooks, helps, reads (p 36)',
    explain: 'My father takes me to school. My mother cooks us food every day. My brother helps me do my homework. My grandmother reads me a story.',
    variants: [
      { type: 'fill', fig: 'photo', pic: ph('g3_cooks'), mode: 'normal', level: 'easy', q: 'My mother ___ us food every day.', options: ['cooks', 'reads', 'takes'], answer: 0, hint: 'Look at the pot.' },
      { type: 'fill', fig: 'photo', pic: ph('g3_takes'), mode: 'normal', level: 'easy', q: 'My father ___ me to school.', options: ['takes', 'cooks', 'reads'], answer: 0, hint: 'They walk to school together.' },
      { type: 'fill', fig: 'photo', pic: ph('g3_story'), mode: 'normal', level: 'medium', q: 'My grandmother ___ me a story.', options: ['reads', 'cooks', 'takes'], answer: 0, hint: 'Look at the book.' },
      { type: 'fill', fig: 'photo', pic: ph('g3_homework2'), mode: 'normal', level: 'medium', q: 'My brother ___ me do my homework.', options: ['helps', 'cooks', 'reads'], answer: 0, hint: 'He shows his sister what to write.' }
    ] },
  { id: 'G3', lesson: 3, concept: 'Reading: Nour’s family (p 37 ex 2)',
    explain: 'Hello I’m Nour. I love my family. My father and mother take me to school. They also cook me lunch. My brother plays with me. I love my family. They help me grow.',
    variants: [
      { type: 'fill', mode: 'normal', level: 'easy', q: 'Nour’s ___ plays with her.', options: ['brother', 'grandmother', 'uncle'], answer: 0, hint: 'Read: My … plays with me.' },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'Nour loves her ___.', options: ['family', 'school', 'kite'], answer: 0, hint: 'Read: I love my …' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Who takes Nour to school?', options: ['Her father and mother', 'Her brother', 'Her grandmother'], answer: 0, hint: 'Read the third sentence.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What do Nour’s father and mother cook her?', options: ['lunch', 'a cake', 'fish'], answer: 0, hint: 'Read: They also cook me …' },
      { type: 'tf', fig: 'photo', pic: ph('g3_lovefamily'), mode: 'normal', level: 'medium', q: 'Nour’s family helps her grow.', answer: 0, hint: 'Read the last sentence.' }
    ] },
  { id: 'G4', lesson: 3, concept: 'Phonics: digraph ph = /f/ (phone, photo, elephant, graph, alphabet) (p 38 ex 1-3)',
    explain: 'The letters p and h together say /f/: phone, photo, elephant, graph, alphabet.',
    variants: [
      { type: 'tap', diagram: 'sounds5', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap the phone.', answer: 'sdPhone', hint: 'You call your friends with it.' },
      { type: 'tap', diagram: 'sounds5', mode: 'normal', level: 'easy', q: 'Tap the elephant.', answer: 'sdElephant', hint: 'A big grey animal.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Which letters are missing? __ one', options: ['ph', 'wh', 'sh'], answer: 0, hint: 'They say /f/.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Which letters are missing? ele __ ant', options: ['ph', 'ck', 'wh'], answer: 0, hint: 'They say /f/.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Put the letters in order: h p o o t', options: ['photo', 'phone', 'graph'], answer: 0, hint: 'Start with ph. There are two o’s.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Put the letters in order: h g a p r', options: ['graph', 'phone', 'photo'], answer: 0, hint: 'It ends with ph.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which letters are missing? al __ abet', options: ['ph', 'x', 'ck'], answer: 0, hint: 'They say /f/.' }
    ] },
  { id: 'G5', lesson: 3, concept: 'Riddles with ph (p 38 ex 4)',
    explain: 'I help you call your friend today, even if they’re far away: phone. You press a button, I make a sound, a memory saved, forever found: photo.',
    variants: [
      { type: 'mc', fig: 'photo', pic: ph('g3_phone'), mode: 'normal', level: 'easy', q: '“I help you call your friend today, even if they’re far away.” What am I?', options: ['phone', 'photo', 'graph'], answer: 0, hint: 'You talk to your friend with it.' },
      { type: 'mc', fig: 'photo', pic: ph('g3_photo'), mode: 'normal', level: 'medium', q: '“You press a button, I make a sound, a memory saved, forever found.” What am I?', options: ['photo', 'phone', 'alphabet'], answer: 0, hint: 'A camera makes it.' }
    ] },
  { id: 'G6', lesson: 3, boss: true, concept: 'My family helps me grow, and ph = /f/',
    explain: 'My father takes me to school. My grandmother reads me a story. phone, photo, elephant, graph, alphabet: ph = /f/.',
    variants: [
      { type: 'build', style: 'sentence', mode: 'boss', level: 'hard', q: 'Put the words in order.', parts: ['My grandmother', 'reads me', 'a story.'], extra: ['cooks'], hint: 'Who? My grandmother. What does she do?' },
      { type: 'multi', mode: 'boss', level: 'hard', q: 'Choose all the words with ph.', options: ['alphabet', 'elephant', 'graph', 'exit'], answer: [0, 1, 2], hint: 'Look for p and h together.' },
      { type: 'mc', mode: 'boss', level: 'hard', q: 'Put the letters in order: a h e l p t n e', options: ['elephant', 'alphabet', 'example'], answer: 0, hint: 'It is a big animal.' }
    ] },

  /* ---------- Lesson 4 · Jobs in My Family (pages 39-42) ---------- */
  { id: 'H1', lesson: 4, concept: 'Jobs: farmer, doctor, teacher, baker, pilot (p 39)',
    explain: 'A farmer works in the field. A doctor helps patients. A teacher works at a school. A baker bakes bread. A pilot flies an airplane.',
    variants: [
      { type: 'tap', diagram: 'jobs5', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap the doctor.', answer: 'jbDoctor', hint: 'Look for a white coat and a stethoscope.' },
      { type: 'tap', diagram: 'jobs5', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap the baker.', answer: 'jbBaker', hint: 'Look for bread.' },
      { type: 'tap', diagram: 'jobs5', mode: 'normal', level: 'easy', q: 'Tap the pilot.', answer: 'jbPilot', hint: 'Look for an airplane.' },
      { type: 'tap', diagram: 'jobs5', mode: 'normal', level: 'medium', q: 'Tap the farmer.', answer: 'jbFarmer', hint: 'He works in a field.' },
      { type: 'tap', diagram: 'jobs5', mode: 'normal', level: 'medium', q: 'Tap the teacher.', answer: 'jbTeacher', hint: 'Look for a board.' }
    ] },
  { id: 'H2', lesson: 4, concept: 'Listen, write, and say: I am a … / He is a … / She is a … (p 41 ex 3 and 4)',
    explain: 'I am a doctor. She is a baker. He is a pilot. He is a teacher. I am a farmer.',
    variants: [
      { type: 'fill', fig: 'photo', pic: ph('g3_baker_w'), mode: 'normal', level: 'easy', q: 'She is a ___.', options: ['baker', 'pilot', 'farmer'], answer: 0, hint: 'Look at the bread in the oven.' },
      { type: 'fill', fig: 'photo', pic: ph('g3_pilot'), mode: 'normal', level: 'easy', q: 'He is a ___.', options: ['pilot', 'doctor', 'baker'], answer: 0, hint: 'Look behind him.' },
      { type: 'fill', fig: 'photo', pic: ph('g3_teacher'), mode: 'normal', level: 'easy', q: 'He is a ___.', options: ['teacher', 'farmer', 'pilot'], answer: 0, hint: 'He points at the board.' },
      { type: 'fill', fig: 'photo', pic: ph('g3_farmer2'), mode: 'normal', level: 'medium', q: 'I am a ___.', options: ['farmer', 'baker', 'teacher'], answer: 0, hint: 'He grows vegetables in the field.' },
      { type: 'fill', fig: 'photo', pic: ph('g3_doctor_w'), mode: 'normal', level: 'medium', q: 'She is a ___.', options: ['doctor', 'teacher', 'baker'], answer: 0, hint: 'She listens to the boy’s chest.' }
    ] },
  { id: 'H3', lesson: 4, concept: 'Discuss your family’s jobs (p 40 ex 1)',
    explain: 'My aunt works as a doctor. She helps patients. My father is a teacher. He works at a school. My uncle bakes delicious bread. He is a baker. My mother is a pilot. She travels around the world.',
    variants: [
      { type: 'fill', fig: 'photo', pic: ph('g3_doctor'), mode: 'normal', level: 'easy', q: 'My aunt works as a doctor. She helps ___.', options: ['patients', 'bread', 'airplanes'], answer: 0, hint: 'A doctor helps people who are ill.' },
      { type: 'fill', fig: 'photo', pic: ph('g3_baker'), mode: 'normal', level: 'easy', q: 'My uncle bakes delicious bread. He is a ___.', options: ['baker', 'pilot', 'teacher'], answer: 0, hint: 'He bakes.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'My father is a teacher. He works at a ___.', options: ['school', 'farm', 'bakery'], answer: 0, hint: 'Where do teachers work?' },
      { type: 'fill', fig: 'photo', pic: ph('g3_pilot_w'), mode: 'normal', level: 'medium', q: 'My mother is a pilot. She ___ around the world.', options: ['travels', 'bakes', 'helps'], answer: 0, hint: 'She flies to many countries.' }
    ] },
  { id: 'H4', lesson: 4, concept: 'Reorder the words to form sentences (p 42 ex 6)',
    explain: 'My cousin is a doctor. His grandfather is a farmer. She is a teacher. He wants to be a doctor.',
    variants: [
      { type: 'build', style: 'sentence', mode: 'normal', level: 'easy', q: 'Put the words in order.', parts: ['She', 'is', 'a', 'teacher.'], extra: ['am'], hint: 'Start with She.' },
      { type: 'build', style: 'sentence', mode: 'normal', level: 'medium', q: 'Put the words in order.', parts: ['My', 'cousin', 'is', 'a', 'doctor.'], extra: ['are'], hint: 'Start with My cousin.' },
      { type: 'build', style: 'sentence', mode: 'normal', level: 'medium', q: 'Put the words in order.', parts: ['His', 'grandfather', 'is', 'a', 'farmer.'], extra: ['am'], hint: 'Start with His grandfather.' }
    ] },
  { id: 'H5', lesson: 4, concept: 'What does each job do? (pp 40-41)',
    explain: 'A doctor helps patients. A teacher works at a school. A baker bakes bread. A pilot travels around the world.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Who bakes delicious bread?', options: ['a baker', 'a pilot', 'a doctor'], answer: 0, hint: 'bake → baker' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Who helps patients?', options: ['a doctor', 'a baker', 'a farmer'], answer: 0, hint: 'Patients are ill people.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Who travels around the world?', options: ['a pilot', 'a teacher', 'a baker'], answer: 0, hint: 'This person flies an airplane.' },
      { type: 'match', mode: 'normal', level: 'medium', q: 'Match the job to what the person does.', left: ['doctor', 'teacher', 'baker', 'pilot'], right: ['helps patients', 'works at a school', 'bakes bread', 'travels around the world'], answer: [0, 1, 2, 3], hint: 'Start with the doctor.' }
    ] },
  { id: 'H6', lesson: 4, boss: true, concept: 'Jobs in my family',
    explain: 'My aunt works as a doctor. My father is a teacher. My uncle is a baker. My mother is a pilot. He wants to be a doctor.',
    variants: [
      { type: 'build', style: 'sentence', mode: 'boss', level: 'hard', q: 'Put the words in order.', parts: ['He', 'wants', 'to be', 'a doctor.'], extra: ['want'], hint: 'He wants… then to be…' },
      { type: 'match', mode: 'boss', level: 'hard', q: 'Who is it? Match.', left: ['He works at a school.', 'She helps patients.', 'He bakes bread.', 'She travels around the world.'], right: ['teacher', 'doctor', 'baker', 'pilot'], answer: [0, 1, 2, 3], hint: 'Read what each person does.' },
      { type: 'fill', mode: 'boss', level: 'hard', q: 'My aunt helps patients. She ___ a doctor.', options: ['is', 'are', 'am'], answer: 0, hint: 'She goes with is.' }
    ] }
];
})();
