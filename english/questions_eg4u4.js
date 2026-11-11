/* English · Grade 4 · Term 1 · Unit 4 "Egypt: My Homeland" · ministry book "English Primary 4", first term 2026/2027 (book pages 61-78)
   One English book for both tracks (subject lang { lang: 'en', ar: 'en' }), so there is no _ar file.
   Lessons: 1 Places in Egypt (pp 62-64) · 2 My City + prepositions of place (pp 65-67) · 3 The World of Big Numbers + /p/ and /b/ (pp 68-69)
            4 Writing: A Blog (pp 70-73) · 5 Think and Create: A Leaflet (pp 74-76). Quick Review and Self-Assessment (pp 77-78) are spread over the lessons.
   Idea letters (one per lesson): P, Q, R, S, T.  Boss ideas: P5, Q7, R6, S4, T4.
   Every phrasing has a hint (owner rule, 6 Nov 2026) that points to the text or the rule, never the answer.
   Pictures: the owner's Gemini pictures (11 Nov 2026) cut into english/assets/e4_*.webp and pb_*.webp; tap pictures egypt6, city6, pb8 and fig 'photo'.
     Drawn in code because the answer is an exact place or a digit: prepBox, livingRoom, prepScene (cat, boxes, room, house, dog) and bigNum.
   Review notes:
   - Listening tasks (p 63 "Listen again", p 65 "Listen and write", p 69 /p/ /b/) are asked from the printed text and pictures.
     p 66 ex 3 (three recorded conversations) is not asked: the conversations are not printed.
   - Open tasks are not asked: p 64 ex 6 "I want to visit…", ex 9 role-play, p 65 "Think", p 66 ex 6, p 70 "Think", p 71-73 writing the blog,
     p 75-76 making the leaflet.
   - p 67 ex 7: the pictures give 1 next to, 2 on, 3 in, 4 between (the book prints no key; read from the pictures).
   - p 67 ex 8: picture on the wall, cat behind the blue chair, toy car on the table, lamp next to the TV, table in front of the TV,
     plant between a book and a notebook (read from the picture; our drawing keeps the same places).
   - p 69 ex 2 "bond", "beak", "ban", "pat" have no picture; only the pictured words are tap targets. */
(function () {
window.CHAPTER = { id: 'eg4u4', title: 'Egypt: My Homeland' };
const ph = (...src) => ({ src, label: 'A picture for the question' });

window.IDEAS = [
  /* ---------- Lesson 1 · Places in Egypt (pages 62-64, Quick Review p 77) ---------- */
  { id: 'P1', lesson: 1, concept: 'Famous places in Egypt',
    explain: 'The Pyramids, the Nile River, Cairo Tower, Siwa Oasis, the Egyptian Museum and Khan Al-Khalili Bazaar. We can find the Pyramids of Giza in Egypt.',
    variants: [
      { type: 'tap', diagram: 'egypt6', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap the Pyramids.', answer: 'pyramids', hint: 'Look for the desert.' },
      { type: 'tap', diagram: 'egypt6', mode: 'normal', level: 'easy', q: 'Tap the Nile River.', answer: 'nile', hint: 'Look for a boat on the water.' },
      { type: 'tap', diagram: 'egypt6', mode: 'normal', level: 'easy', q: 'Tap Cairo Tower.', answer: 'tower', hint: 'It is very tall and slim.' },
      { type: 'tap', diagram: 'egypt6', mode: 'normal', level: 'medium', q: 'Tap Siwa Oasis.', answer: 'siwa', hint: 'Water and palm trees in the desert.' },
      { type: 'tap', diagram: 'egypt6', mode: 'normal', level: 'medium', q: 'Tap Khan Al-Khalili Bazaar.', answer: 'khan', hint: 'A shop with lanterns.' },
      { type: 'tap', diagram: 'egypt6', mode: 'normal', level: 'medium', q: 'Tap the Egyptian Museum.', answer: 'museum', hint: 'A pink-red building.' },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'In which country can you find the Pyramids of Giza?', options: ['Egypt', 'China', 'Italy', 'Saudi Arabia'], answer: 0, hint: 'Our homeland.' }
    ] },
  { id: 'P2', lesson: 1, concept: 'Sentences about the places (pp 62, 64)',
    explain: 'The Siwa Oasis has lots of trees and water. The Nile River is a very long river in Egypt. The Cairo Tower is very tall; we can see Cairo from the top. We went to the Khan Al-Khalili Bazaar to buy gifts. People used giant stones to build the Pyramids. Khan Al-Khalili Bazaar is a busy market. We get water from the Nile River.',
    variants: [
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'The Siwa ___ has lots of trees and water.', options: ['Oasis', 'Tower', 'Bazaar'], answer: 0, hint: 'Water and palm trees in the desert.' },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'The ___ River is a very long river in Egypt.', options: ['Nile', 'Siwa', 'Cairo'], answer: 0, hint: 'The longest river in Egypt.' },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'The Cairo ___ is very tall. We can see Cairo from the top.', options: ['Tower', 'Oasis', 'Museum'], answer: 0, hint: 'It is tall and slim.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'We went to the Khan Al-Khalili ___ to buy gifts.', options: ['Bazaar', 'Oasis', 'River'], answer: 0, hint: 'A market.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'People used giant stones to build the ___.', options: ['Pyramids', 'Nile', 'Oasis'], answer: 0, hint: 'They are in Giza.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which place is a busy market?', options: ['Khan Al-Khalili Bazaar', 'The Pyramids', 'Siwa Oasis', 'Cairo Tower'], answer: 0, hint: 'You buy gifts there.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'We get water from ___.', options: ['the Nile River', 'the Egyptian Museum', 'Cairo Tower', 'Khan Al-Khalili'], answer: 0, hint: 'A river.' }
    ] },
  { id: 'P3', lesson: 1, concept: 'Exploring Egypt with Ali (p 63)',
    explain: 'Ali works as a tour guide in Egypt. John is in Egypt for the first time. Tourists take many pictures at the Pyramids, and many people ride camels near the Pyramids. After the Pyramids they can visit the Egyptian Museum: it has many treasures and history. They can go to Khan Al-Khalili to buy some gifts.',
    variants: [
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'Who is Ali?', options: ['A tour guide in Egypt', 'A tourist', 'A doctor', 'A teacher'], answer: 0, hint: 'He shows visitors Egypt.' },
      { type: 'mc', fig: 'photo', pic: ph('e4_camelride'), mode: 'normal', level: 'easy', q: 'What can tourists ride near the Pyramids?', options: ['Camels', 'Horses', 'Boats', 'Bikes'], answer: 0, hint: 'Look at the picture.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What do tourists do at the Pyramids?', options: ['They take many pictures.', 'They buy gifts.', 'They swim.', 'They sleep.'], answer: 0, hint: 'Ali says: Tourists take many ___ here.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What will Ali and John visit after the Pyramids?', options: ['The Egyptian Museum', 'Siwa Oasis', 'Cairo Tower', 'The Nile River'], answer: 0, hint: 'It has many treasures and history.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Where will they go to buy gifts?', options: ['Khan Al-Khalili', 'The Pyramids', 'The museum', 'The tower'], answer: 0, hint: 'A busy bazaar.' },
      { type: 'tf', mode: 'normal', level: 'easy', q: 'This is John’s first time in Egypt.', answer: 0, hint: 'Read John’s first line.' }
    ] },
  { id: 'P4', lesson: 1, concept: 'Complete the place names (p 64)',
    explain: 'At the Pyramids, tourists can ride camels. The Egyptian Museum is full of history. Boats sail on the Nile River.',
    variants: [
      { type: 'fill', mode: 'normal', level: 'easy', q: 'Boats sail on the N___ R___.', options: ['Nile River', 'New Road', 'North Rock'], answer: 0, hint: 'Look at the boat in the pictures.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'The E___ M___ is full of history.', options: ['Egyptian Museum', 'Egyptian Market', 'Every Mountain'], answer: 0, hint: 'It has many treasures.' },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'At the P___, tourists can ride camels.', options: ['Pyramids', 'Post office', 'Park'], answer: 0, hint: 'In the desert of Giza.' },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'Siwa Oasis is a tall tower.', answer: 1, hint: 'An oasis has trees and water.' }
    ] },
  { id: 'P5', lesson: 1, boss: true, concept: 'Matching the names of the places',
    explain: 'Nile River · Egyptian Museum · Khan Al-Khalili Bazaar · Cairo Tower · Siwa Oasis.',
    variants: [
      { type: 'match', mode: 'boss', level: 'hard', q: 'Read and match.', left: ['Nile', 'Egyptian', 'Khan Al-Khalili', 'Cairo', 'Siwa'], right: ['River', 'Museum', 'Bazaar', 'Tower', 'Oasis'], answer: [0, 1, 2, 3, 4], hint: 'Say the full names of the places.' },
      { type: 'mc', fig: 'photo', pic: ph('e4_siwa'), mode: 'boss', level: 'medium', q: 'Look and choose. Which place is this?', options: ['Siwa Oasis', 'The Nile River', 'Cairo Tower', 'Khan Al-Khalili Bazaar'], answer: 0, hint: 'A lake and palm trees in the desert.' },
      { type: 'build', style: 'sentence', mode: 'boss', level: 'hard', q: 'Put the cards in order.', parts: ['Look at', 'the tall', 'Cairo Tower.'], extra: ['Siwa Oasis.', 'the busy'], hint: 'Which place is tall?' }
    ] },

  /* ---------- Lesson 2 · My City (pages 65-67, Quick Review p 77) ---------- */
  { id: 'Q1', lesson: 2, concept: 'Places in a city',
    explain: 'library, school, shopping mall, post office, hospital, museum.',
    variants: [
      { type: 'tap', diagram: 'city6', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap the hospital.', answer: 'hospital', hint: 'Look for an ambulance.' },
      { type: 'tap', diagram: 'city6', mode: 'normal', level: 'easy', q: 'Tap the library.', answer: 'library', hint: 'Shelves full of books.' },
      { type: 'tap', diagram: 'city6', mode: 'normal', level: 'easy', q: 'Tap the post office.', answer: 'post', hint: 'Look for letters and a parcel.' },
      { type: 'tap', diagram: 'city6', mode: 'normal', level: 'medium', q: 'Tap the shopping mall.', answer: 'mall', hint: 'Look for shopping bags.' },
      { type: 'tap', diagram: 'city6', mode: 'normal', level: 'medium', q: 'Tap the school.', answer: 'school', hint: 'Children with school bags.' }
    ] },
  { id: 'Q2', lesson: 2, concept: 'The Places We Go in Our City (p 65)',
    explain: 'Students go to school to learn and meet friends; teachers help them. The library has many books to read or borrow. At the hospital, doctors and nurses help sick people feel better. Next to the hospital is the post office, where people send letters and packages to stay connected. The shopping mall has many stores and restaurants: people buy things and eat there. Behind it is a museum with treasures that teach us about our history.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What can people do at the post office?', options: ['Send letters and packages', 'Borrow books', 'Buy clothes', 'See doctors'], answer: 0, hint: 'They stay connected.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Why is the school important?', options: ['Students learn and meet friends there.', 'People send letters there.', 'People eat there.', 'Sick people go there.'], answer: 0, hint: 'Read the sentence about the school.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'How do hospitals make people feel better?', options: ['Doctors and nurses help sick people.', 'They sell books.', 'They have restaurants.', 'They show treasures.'], answer: 0, hint: 'Who works at the hospital?' },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'Where can we go to borrow a book?', options: ['The library', 'The hospital', 'The post office', 'The mall'], answer: 0, hint: 'It has many books.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What is next to the hospital?', options: ['The post office', 'The museum', 'The school', 'The library'], answer: 0, hint: 'Read: Next to the hospital is…' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What is behind the shopping mall?', options: ['A museum', 'A hospital', 'A school', 'A post office'], answer: 0, hint: 'It has treasures that teach us about history.' },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'The shopping mall has many stores and restaurants.', answer: 0, hint: 'People buy things and eat there.' }
    ] },
  { id: 'Q3', lesson: 2, concept: 'Complete the text (p 66)',
    explain: 'Young children go to school every morning to learn. They can borrow books from the library. When people feel sick, they go to the hospital. People enjoy going to the shopping mall where many shops sell different things.',
    variants: [
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Young children go to ___ every morning to learn.', options: ['school', 'borrow', 'sick'], answer: 0, hint: 'A place to learn.' },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'They can ___ books from the library.', options: ['borrow', 'school', 'sick'], answer: 0, hint: 'Take a book and bring it back later.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'When people feel ___, they go to the hospital.', options: ['sick', 'borrow', 'school'], answer: 0, hint: 'Not well.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'People enjoy going to the ___ where many shops sell different things.', options: ['shopping mall', 'hospital', 'library'], answer: 0, hint: 'Many shops in one building.' }
    ] },
  { id: 'Q4', lesson: 2, concept: 'Prepositions of place: in, on, next to',
    explain: 'Prepositions of place show where things are. The cat is in the box. The cat is on the box. The cat is next to the box.',
    variants: [
      { type: 'mc', fig: 'prepBox', pic: { pos: 'in' }, mode: 'normal', level: 'easy', q: 'The cat is ___ the box.', options: ['in', 'on', 'next to', 'behind'], answer: 0, hint: 'Only its head is out of the open box.' },
      { type: 'mc', fig: 'prepBox', pic: { pos: 'on' }, mode: 'timed', seconds: 15, level: 'easy', q: 'The cat is ___ the box.', options: ['on', 'in', 'between', 'in front of'], answer: 0, hint: 'It sits on the top.' },
      { type: 'mc', fig: 'prepBox', pic: { pos: 'next' }, mode: 'normal', level: 'easy', q: 'The cat is ___ the box.', options: ['next to', 'on', 'in', 'between'], answer: 0, hint: 'It is at the side of the box.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Prepositions of place show ___ things are.', options: ['where', 'when', 'why', 'who'], answer: 0, hint: 'Place = where.' }
    ] },
  { id: 'Q5', lesson: 2, concept: 'Prepositions of place: in front of, behind, between',
    explain: 'The cat is in front of the box. The cat is behind the box. The cat is between the boxes. I couldn’t see the cat because it was between the boxes.',
    variants: [
      { type: 'mc', fig: 'prepBox', pic: { pos: 'between' }, mode: 'normal', level: 'easy', q: 'The cat is ___ the boxes.', options: ['between', 'on', 'in', 'behind'], answer: 0, hint: 'There is a box on each side.' },
      { type: 'mc', fig: 'prepBox', pic: { pos: 'front' }, mode: 'normal', level: 'medium', q: 'The cat is ___ the box.', options: ['in front of', 'behind', 'in', 'on'], answer: 0, hint: 'We can see all of the cat; the box is at its back.' },
      { type: 'mc', fig: 'prepBox', pic: { pos: 'behind' }, mode: 'normal', level: 'medium', q: 'The cat is ___ the box.', options: ['behind', 'in front of', 'next to', 'on'], answer: 0, hint: 'The box hides most of the cat.' },
      { type: 'mc', fig: 'prepScene', pic: { kind: 'dog' }, mode: 'normal', level: 'medium', q: '“The dog is standing under the door.” Correct the preposition.', options: ['in front of', 'on', 'between', 'in'], answer: 0, hint: 'The door is at the dog’s back.' },
      { type: 'mc', fig: 'prepScene', pic: { kind: 'house' }, mode: 'normal', level: 'medium', q: '“The house is behind the tree and the school.” Correct the preposition.', options: ['between', 'on', 'in', 'under'], answer: 0, hint: 'The tree is on one side, the school on the other.' }
    ] },
  { id: 'Q6', lesson: 2, concept: 'My living room (p 67)',
    explain: 'My family picture is on the wall. My cat is behind the blue chair. My toy car is on the table. The lamp is next to the TV. The table is in front of the TV. The plant is between a book and a notebook.',
    variants: [
      { type: 'mc', fig: 'livingRoom', pic: { hi: 'picture' }, mode: 'normal', level: 'easy', q: 'My family picture is ___ the wall.', options: ['on', 'in', 'between', 'behind'], answer: 0, hint: 'It hangs on the wall.' },
      { type: 'mc', fig: 'livingRoom', pic: { hi: 'cat' }, mode: 'normal', level: 'medium', q: 'My cat is ___ the blue chair.', options: ['behind', 'on', 'in front of', 'between'], answer: 0, hint: 'We can see only its head over the chair.' },
      { type: 'mc', fig: 'livingRoom', pic: { hi: 'car' }, mode: 'normal', level: 'easy', q: 'My toy car is ___ the table.', options: ['on', 'under', 'behind', 'between'], answer: 0, hint: 'It is on the top of the table.' },
      { type: 'mc', fig: 'livingRoom', pic: { hi: 'lamp' }, mode: 'normal', level: 'medium', q: 'The lamp is ___ the TV.', options: ['next to', 'on', 'in', 'behind'], answer: 0, hint: 'It stands at the side of the TV.' },
      { type: 'mc', fig: 'livingRoom', pic: { hi: 'table' }, mode: 'normal', level: 'medium', q: 'The table is ___ the TV.', options: ['in front of', 'behind', 'on', 'in'], answer: 0, hint: 'The table is between you and the TV.' },
      { type: 'mc', fig: 'livingRoom', pic: { hi: 'plant' }, mode: 'normal', level: 'medium', q: 'The plant is ___ a book and a notebook.', options: ['between', 'on', 'behind', 'in front of'], answer: 0, hint: 'There is something on each side of it.' }
    ] },
  { id: 'Q7', lesson: 2, boss: true, concept: 'Prepositions of place together',
    explain: 'in · on · in front of · behind · next to · between.',
    variants: [
      { type: 'mc', fig: 'prepBox', pic: { pos: 'between' }, mode: 'boss', level: 'hard', q: 'I couldn’t see the cat because it was ___ the boxes.', options: ['between', 'on', 'next to', 'in front of'], answer: 0, hint: 'Count the boxes: two.' },
      { type: 'build', style: 'sentence', mode: 'boss', level: 'hard', q: 'Put the cards in order.', parts: ['The post office', 'is next to', 'the hospital.'], extra: ['is between', 'the library'], hint: 'Read the text on page 65 again.' },
      { type: 'table', mode: 'boss', level: 'hard', q: 'Sort: one word or more than one word?', poc: 'Preposition', cols: ['one word', 'two or three words'], items: ['in', 'on', 'behind', 'between', 'next to', 'in front of'], answer: [0, 0, 0, 0, 1, 1], hint: 'Count the words.' }
    ] },

  /* ---------- Lesson 3 · The World of Big Numbers + /p/ and /b/ (pages 68-69, Self-Assessment p 78) ---------- */
  { id: 'R1', lesson: 3, concept: 'A billion is a thousand million',
    explain: 'A billion is a thousand million: 1,000,000,000. In 1980, the population of China reached about 1,000,000,000, which means 1 billion people.',
    variants: [
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'A billion is a thousand ___.', options: ['million', 'hundred', 'thousand', 'ten'], answer: 0, hint: 'Read the big title of the lesson page.' },
      { type: 'mc', fig: 'bigNum', pic: { n: '1,000,000,000' }, mode: 'normal', level: 'easy', q: 'How do we read this number?', options: ['one billion', 'one million', 'one thousand', 'one hundred million'], answer: 0, hint: 'Count the groups of three zeros: three groups.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'In 1980, the population of China reached about ___.', options: ['1 billion people', '1 million people', '1 thousand people', '10 billion people'], answer: 0, hint: '1,000,000,000 people.' }
    ] },
  { id: 'R2', lesson: 3, concept: 'Place value names up to a billion',
    explain: '1,000,000,000 from the left: billions, hundred millions, ten millions, millions, hundred thousands, ten thousands, thousands, hundreds, tens, ones.',
    variants: [
      { type: 'mc', fig: 'bigNum', pic: { n: '1,000,000,000', hi: 0 }, mode: 'normal', level: 'easy', q: 'The arrow points to the digit 1. What is its place?', options: ['billions', 'millions', 'thousands', 'ones'], answer: 0, hint: 'It is the first digit of a billion.' },
      { type: 'mc', fig: 'bigNum', pic: { n: '1,000,000,000', hi: 9 }, mode: 'normal', level: 'easy', q: 'What is the place of the digit the arrow points to?', options: ['ones', 'tens', 'hundreds', 'thousands'], answer: 0, hint: 'It is the last digit on the right.' },
      { type: 'mc', fig: 'bigNum', pic: { n: '1,000,000,000', hi: 3 }, mode: 'normal', level: 'medium', q: 'What is the place of the digit the arrow points to?', options: ['millions', 'ten millions', 'hundred thousands', 'billions'], answer: 0, hint: 'It is the last digit before the second comma.' },
      { type: 'mc', fig: 'bigNum', pic: { n: '1,000,000,000', hi: 1 }, mode: 'normal', level: 'medium', q: 'What is the place of the digit the arrow points to?', options: ['hundred millions', 'ten millions', 'millions', 'billions'], answer: 0, hint: 'It comes just after billions.' },
      { type: 'mc', fig: 'bigNum', pic: { n: '1,000,000,000', hi: 7 }, mode: 'normal', level: 'medium', q: 'What is the place of the digit the arrow points to?', options: ['hundreds', 'thousands', 'tens', 'ones'], answer: 0, hint: 'The last group: hundreds, tens, ones.' }
    ] },
  { id: 'R3', lesson: 3, concept: 'Reading big numbers',
    explain: '8,199,590,341 = eight billion, one hundred ninety-nine million, five hundred ninety thousand, three hundred and forty-one. 4,000 = four thousand. 73,000,000 = seventy-three million. 7,000,000,000 = seven billion.',
    variants: [
      { type: 'tf', mode: 'timed', seconds: 12, level: 'easy', q: '4,000 is four thousand.', answer: 0, hint: 'Three zeros = thousand.' },
      { type: 'tf', mode: 'normal', level: 'medium', q: '73,000,000 is seventy-three hundred thousand.', answer: 1, hint: 'Six zeros = million.' },
      { type: 'tf', mode: 'normal', level: 'medium', q: '7,000,000,000 is seven hundred billion.', answer: 1, hint: 'Nine zeros = billion.' },
      { type: 'fill', fig: 'bigNum', pic: { n: '8,199,590,341' }, mode: 'normal', level: 'medium', q: 'We say: “Eight ___, one hundred ninety-nine million…”', options: ['billion', 'million', 'thousand'], answer: 0, hint: 'The first group of the number.' },
      { type: 'fill', fig: 'bigNum', pic: { n: '8,199,590,341' }, mode: 'normal', level: 'medium', q: '“…five hundred ninety ___, three hundred and forty-one.”', options: ['thousand', 'million', 'billion'], answer: 0, hint: 'The third group from the left.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'How do we write seventy-three million?', options: ['73,000,000', '73,000', '7,300,000', '73,000,000,000'], answer: 0, hint: 'A million has six zeros.' }
    ] },
  { id: 'R4', lesson: 3, concept: 'The /p/ and /b/ sounds',
    explain: 'The letter “p” is voiceless: press your lips together and blow out air. The letter “b” is voiced: press your lips together and use your voice. bear/pear, pin/bin, pond/bond, beak/peak, ban/pan, bat/pat.',
    variants: [
      { type: 'tap', diagram: 'pb8', mode: 'normal', level: 'easy', q: 'Tap the pear.', answer: 'pPear', hint: 'It is a green fruit.' },
      { type: 'tap', diagram: 'pb8', mode: 'normal', level: 'easy', q: 'Tap the bin.', answer: 'pBin', hint: 'We throw our trash in it.' },
      { type: 'tap', diagram: 'pb8', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap the bat.', answer: 'pBat', hint: 'It flies at night.' },
      { type: 'tap', diagram: 'pb8', mode: 'normal', level: 'medium', q: 'Tap the peak.', answer: 'pPeak', hint: 'The top of a mountain.' },
      { type: 'tap', diagram: 'pb8', mode: 'normal', level: 'medium', q: 'Tap the pan.', answer: 'pPan', hint: 'Mom cooks eggs in it.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which letter is voiced? (Use your voice.)', options: ['b', 'p'], answer: 0, hint: 'Put your hand on your throat and say both.' }
    ] },
  { id: 'R5', lesson: 3, concept: 'Sort words: /p/ or /b/',
    explain: 'The ducks swim in the pond (/p/). Mom cooks eggs in the pan (/p/). The bat flies at night (/b/). We throw our trash in the bin (/b/).',
    variants: [
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'The ducks swim in the ___ond.', options: ['p', 'b'], answer: 0, hint: 'pond: water with ducks.' },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'Mom cooks eggs in the ___an.', options: ['p', 'b'], answer: 0, hint: 'A frying pan.' },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'The ___at flies at night.', options: ['b', 'p'], answer: 0, hint: 'An animal with wings.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'We throw our trash in the ___in.', options: ['b', 'p'], answer: 0, hint: 'A trash can.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'A brown ___ear lives in the forest.', options: ['b', 'p'], answer: 0, hint: 'An animal with thick fur.' }
    ] },
  { id: 'R6', lesson: 3, boss: true, concept: 'Big numbers and /p/ /b/ together',
    explain: 'Big numbers up to a billion, and the words that start with /p/ or /b/.',
    variants: [
      { type: 'table', mode: 'boss', level: 'hard', q: 'Sort the words.', poc: 'Word', cols: ['/p/', '/b/'], items: ['pond', 'pan', 'peak', 'bat', 'bin', 'bear'], answer: [0, 0, 0, 1, 1, 1], hint: 'Look at the first letter.' },
      { type: 'mc', fig: 'bigNum', pic: { n: '8,199,590,341', hi: 0 }, mode: 'boss', level: 'hard', q: 'What does the digit 8 mean in this number?', options: ['eight billion', 'eight million', 'eight thousand', 'eight hundred'], answer: 0, hint: 'It is in the billions place.' },
      { type: 'order', mode: 'boss', level: 'hard', q: 'Put the numbers in order from the smallest to the biggest.', items: ['one billion', 'one thousand', 'one million', 'one hundred'], answer: [3, 1, 2, 0], hint: 'A billion is a thousand million.' }
    ] },

  /* ---------- Lesson 4 · Writing: A Blog (pages 70-73, Quick Review p 77) ---------- */
  { id: 'S1', lesson: 4, concept: 'A Visit to St. Catherine Mountain',
    explain: 'Many tourists visit St. Catherine Mountain in South Sinai, Egypt. They wake up early to climb and wear warm clothes because it’s cold. Along the way they see colorful rocks and small plants, and some take pictures. At the top they visit the old monastery and learn about its history. St. Catherine is a popular place for nature, adventure, and fun with friends and family.',
    variants: [
      { type: 'mc', fig: 'photo', pic: ph('e4_monastery'), mode: 'normal', level: 'easy', q: 'Where is St. Catherine Mountain?', options: ['South Sinai, Egypt', 'North Egypt', 'Cairo, Egypt', 'Siwa'], answer: 0, hint: 'Read the first sentence of the blog.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What do tourists do at the old monastery?', options: ['learn', 'sleep', 'play', 'swim'], answer: 0, hint: 'They ___ about its history.' },
      { type: 'mc', fig: 'photo', pic: ph('e4_hiker'), mode: 'normal', level: 'easy', q: 'How is the weather in the morning?', options: ['Cold', 'Hot', 'Rainy'], answer: 0, hint: 'They wear warm clothes.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What do tourists wear when they climb the mountain?', options: ['Warm clothes', 'Summer clothes', 'Swimsuits', 'School uniforms'], answer: 0, hint: 'Because it’s cold.' },
      { type: 'multi', mode: 'normal', level: 'medium', q: 'What do they see along the way? Choose all the correct answers.', options: ['Colorful rocks', 'Small plants', 'Big ships'], answer: [0, 1], hint: 'It is a mountain, not the sea.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Why do people visit St. Catherine Mountain?', options: ['To learn about history and enjoy the natural world', 'To buy gifts', 'To swim in the sea', 'To ride camels'], answer: 0, hint: 'Read the last sentence.' }
    ] },
  { id: 'S2', lesson: 4, concept: 'A good blog has…',
    explain: 'A good blog has: a clear title, a writer’s name, a date, pictures/drawings, interesting details and descriptive words. The title tells readers what the blog post is about. The writer’s name shows who wrote it. The date shows when it was written. Descriptive words help readers imagine and picture what you’re writing about, like “interesting” and “popular”.',
    variants: [
      { type: 'fill', mode: 'normal', level: 'easy', q: 'The ___ tells readers what the blog post is about.', options: ['title', 'date', 'writer’s name'], answer: 0, hint: 'It is at the top: “A Visit to St. Catherine Mountain”.' },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'The ___ shows who wrote the blog post.', options: ['writer’s name', 'date', 'title'], answer: 0, hint: '“By Tarek”' },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'The ___ shows when the blog post was written.', options: ['date', 'title', 'writer’s name'], answer: 0, hint: '“March 15, 2024”' },
      { type: 'fill', mode: 'normal', level: 'medium', q: '___ help readers imagine and picture what you’re writing about, like “interesting” and “popular”.', options: ['Descriptive words', 'Dates', 'Titles'], answer: 0, hint: 'They describe things.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Who wrote the blog about St. Catherine Mountain?', options: ['Tarek', 'Ali', 'John', 'Nadia'], answer: 0, hint: 'Look at “By …”.' }
    ] },
  { id: 'S3', lesson: 4, concept: 'Sense words in descriptive writing',
    explain: 'Good descriptive writing uses sense words. If you write about how the place looks, sounds, smells and feels, the reader will be able to imagine it. At the beach you can say: “The air tastes salty.”',
    variants: [
      { type: 'mc', fig: 'photo', pic: ph('e4_beach'), mode: 'normal', level: 'easy', q: 'At the beach, you can say: “The air tastes ___.”', options: ['salty', 'sweet', 'cold', 'loud'], answer: 0, hint: 'The sea water has salt.' },
      { type: 'multi', mode: 'normal', level: 'medium', q: 'Good descriptive writing tells how a place… Choose all the correct answers.', options: ['looks', 'sounds', 'smells', 'costs'], answer: [0, 1, 2], hint: 'Think of the five senses.' },
      { type: 'tf', mode: 'timed', seconds: 12, level: 'easy', q: 'Good descriptive writing uses sense words.', answer: 0, hint: 'Read the Tip on page 73.' }
    ] },
  { id: 'S4', lesson: 4, boss: true, concept: 'The parts of a blog',
    explain: 'A clear title · a writer’s name · a date · pictures/drawings · interesting details · descriptive words.',
    variants: [
      { type: 'match', mode: 'boss', level: 'hard', q: 'Match each part of Tarek’s blog to an example.', left: ['title', 'writer’s name', 'date', 'descriptive words'], right: ['A Visit to St. Catherine Mountain', 'By Tarek', 'March 15, 2024', 'colorful, popular'], answer: [0, 1, 2, 3], hint: 'Descriptive words describe things.' },
      { type: 'multi', mode: 'boss', level: 'hard', q: 'What does a good blog have? Choose all the correct answers.', options: ['A clear title', 'A writer’s name', 'Pictures/drawings', '“Yours truly,” at the end'], answer: [0, 1, 2], hint: '“Yours truly,” ends a diary.' },
      { type: 'mc', mode: 'boss', level: 'hard', q: 'Mona’s blog has a title, a date and pictures, but nobody knows who wrote it. What should she add?', options: ['The writer’s name', 'A greeting', 'A call to action', 'A moral'], answer: 0, hint: 'Look at “By …” in Tarek’s blog.' }
    ] },

  /* ---------- Lesson 5 · Think and Create: A Leaflet (pages 74-76) ---------- */
  { id: 'T1', lesson: 5, concept: 'Welcome to the Siwa Oasis! (the leaflet)',
    explain: 'Places to see: Salt Lake (swim and take photos) and the Desert (see the sunset). Local food: sweet dates fresh from palm trees, good olive oil at an excellent price. What to wear: summer clothes in the daytime, bring a jacket at night time.',
    variants: [
      { type: 'mc', fig: 'photo', pic: ph('e4_boat'), mode: 'normal', level: 'easy', q: 'What can you do at the Salt Lake?', options: ['Swim and take photos', 'Climb a mountain', 'Buy gifts', 'Visit a museum'], answer: 0, hint: 'It is a lake.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Where can you see the sunset in Siwa?', options: ['In the desert', 'In the museum', 'In the mall', 'In the hospital'], answer: 0, hint: 'Read “Places to see”.' },
      { type: 'mc', fig: 'photo', pic: ph('e4_dates'), mode: 'normal', level: 'easy', q: 'What local food is in the leaflet?', options: ['Sweet dates and good olive oil', 'Pizza and burgers', 'Fish and rice', 'Ice cream'], answer: 0, hint: 'Look at the picture.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What should you bring at night time in Siwa?', options: ['A jacket', 'Summer clothes', 'A swimsuit', 'An umbrella'], answer: 0, hint: 'Nights in the desert are cold.' },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'In Siwa, you wear summer clothes in the daytime.', answer: 0, hint: 'Read “What to wear”.' }
    ] },
  { id: 'T2', lesson: 5, concept: 'The parts of a leaflet',
    explain: 'A main heading is the big title at the top. A sub-heading is the smaller title. An image is a photo or drawing. A detailed description gives reasons to visit and advice on what to expect. A call to action is an invitation.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What is the main heading?', options: ['The big title at the top', 'The smaller title', 'A photo or drawing', 'An invitation'], answer: 0, hint: 'Main = the biggest.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What is a call to action?', options: ['An invitation', 'A photo', 'The big title', 'A date'], answer: 0, hint: '“Book now!”' },
      { type: 'term', mode: 'normal', level: 'medium', q: 'A photo or drawing in a leaflet.', answer: 'Image', choices: ['Heading', 'Date', 'Price'], hint: 'You look at it.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What does a detailed description give?', options: ['Reasons to visit and advice on what to expect', 'The phone number only', 'The writer’s name', 'The moral'], answer: 0, hint: 'Read the Tip on page 75.' }
    ] },
  { id: 'T3', lesson: 5, concept: 'Find the parts in the Siwa leaflet',
    explain: '“Welcome to the Siwa Oasis!” = main heading. “PLACES TO SEE” = sub-heading. The photo of the lake = image. “Salt Lake: swim and take photos” = detailed description. “Book now: +2010XXXXXXX” = call to action.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: '“Welcome to the Siwa Oasis!” is the ___.', options: ['main heading', 'call to action', 'image', 'sub-heading'], answer: 0, hint: 'It is the big title at the top.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: '“Book now!” is the ___.', options: ['call to action', 'main heading', 'image', 'detailed description'], answer: 0, hint: 'It invites you.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: '“PLACES TO SEE” is a ___.', options: ['sub-heading', 'main heading', 'call to action', 'image'], answer: 0, hint: 'A smaller title.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: '“Salt Lake: swim and take photos” is a ___.', options: ['detailed description', 'main heading', 'call to action', 'image'], answer: 0, hint: 'It tells you what to do there.' }
    ] },
  { id: 'T4', lesson: 5, boss: true, concept: 'Leaflet parts in order',
    explain: 'In the Siwa leaflet: 1 main heading, 2 sub-heading, 3 image, 4 detailed description, 5 call to action.',
    variants: [
      { type: 'order', mode: 'boss', level: 'hard', q: 'Put the parts of the Siwa leaflet in order, from top to bottom.', items: ['call to action', 'image', 'main heading', 'detailed description', 'sub-heading'], answer: [2, 4, 1, 3, 0], hint: 'The big title is first; “Book now” is last.' },
      { type: 'match', mode: 'boss', level: 'hard', q: 'Match the part to its meaning.', left: ['main heading', 'sub-heading', 'image', 'call to action'], right: ['the big title at the top', 'the smaller title', 'a photo or drawing', 'an invitation'], answer: [0, 1, 2, 3], hint: 'main = big, sub = small.' },
      { type: 'multi', mode: 'boss', level: 'hard', q: 'Which questions help you make a leaflet about a place in Egypt? Choose all the correct answers.', options: ['What can you see in this place?', 'What should you wear in this place?', 'How can people go to this place?', 'What is your favorite color?'], answer: [0, 1, 2], hint: 'One question is not about the place.' }
    ] }
];
})();
