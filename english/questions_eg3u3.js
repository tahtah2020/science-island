/* English · Grade 3 · Term 1 · Unit 3 "New Adventures" · ministry book "English Primary 3", first term 2026/2027 (book pages 43-66)
   One English book for both tracks, so there is no _ar file.
   Lessons: 1 Places Around Me + reading "Youssef's Busy Day" + double consonant endings ff ll ss zz (pp 44-49)
            2 Egypt's Landmarks + reading "Laila's Holiday Adventure" + digraph ck + punctuation (pp 50-54)
            3 Map It Out: prepositions of place + reading "Samy and the Toy Car" (pp 55-57)
            4 A School Trip to the Zoo + past simple -ed / -d, self-assessment (pp 58-62)
            5 Let's Review Units 1, 2, and 3 (pp 63-66), kept as its own lesson so the badge names the review pages.
   Idea letters (one per lesson, running on from Units 1-2): I, J, K, L, M.  Boss ideas: I5, J6, K3, L4, M7.
   Easy first, difficulty rises slowly; hard only in the Boss idea. Every phrasing has a hint that points to the rule or the text, never the answer.
   Pictures: the owner's Gemini sheets (13 Nov 2026) cut into english/assets/g3_*.webp; tap pictures town6, landmarks3, sounds8, fig 'photo',
     and fig 'prep' (a ball and a box, or a table for "under", drawn in code: the answer is the exact place of the ball).
   Review notes:
   - Listening tasks (p 45 ex 2, p 49 ex 2) are asked from the printed words and pictures (no audio on the site).
   - Open tasks are not asked: p 57 ex 2 (draw), p 60 ex 2, p 65 ex 9, p 66 ex 10 (own sentences), and the p 62 self-assessment.
   - p 48 q 5 "busy or boring" and p 52 q 5 "How did Laila feel" print no answer line; the texts say "What a fun and busy day!" and
     "It was the best holiday she ever had!": asked from those sentences.
   - p 53 ex 6 b "dog – broke – stick": both broke and stick have /k/, so it is asked as "choose all".
   - p 59 q 5 "What did they eat and drink?" is asked as a choice built from the text (sandwiches and chips, juice and water).
   - p 64 ex 5 item 1 "o p n e" (bold o) = open. */
(function () {
window.CHAPTER = { id: 'eg3u3', title: 'New Adventures' };
const ph = (...src) => ({ src, label: 'A picture for the question' });
const at = w => ({ w });

window.IDEAS = [
  /* ---------- Lesson 1 · Places Around Me (pages 44-49) ---------- */
  { id: 'I1', lesson: 1, concept: 'Places: house, library, supermarket, park, train station, museum (pp 44-45)',
    explain: 'Places around me: a house, a library, a supermarket, a park, a train station and a museum.',
    variants: [
      { type: 'tap', diagram: 'town6', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap the library.', answer: 'plLibrary', hint: 'Look for shelves of books.' },
      { type: 'tap', diagram: 'town6', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap the train station.', answer: 'plStation', hint: 'Look for a train.' },
      { type: 'tap', diagram: 'town6', mode: 'normal', level: 'easy', q: 'Tap the park.', answer: 'plPark', hint: 'Look for a bench and trees.' },
      { type: 'tap', diagram: 'town6', mode: 'normal', level: 'easy', q: 'Tap the house.', answer: 'plHouse', hint: 'A family lives in it.' },
      { type: 'tap', diagram: 'town6', mode: 'normal', level: 'medium', q: 'Tap the supermarket.', answer: 'plSuper', hint: 'Look for food and a cart.' },
      { type: 'tap', diagram: 'town6', mode: 'normal', level: 'medium', q: 'Tap the museum.', answer: 'plMuseum', hint: 'A big building with a triangle front.' }
    ] },
  { id: 'I2', lesson: 1, concept: 'Look, read, and write: Where do you…? (p 46 ex 3)',
    explain: 'Where do you buy food? supermarket. Where do you read books? library. Where do you play with friends? park. Where do you live? house.',
    variants: [
      { type: 'mc', fig: 'photo', pic: ph('g3_supermarket'), mode: 'normal', level: 'easy', q: 'Where do you buy food?', options: ['supermarket', 'library', 'museum'], answer: 0, hint: 'Look at the food on the shelves.' },
      { type: 'mc', fig: 'photo', pic: ph('g3_library'), mode: 'normal', level: 'easy', q: 'Where do you read books?', options: ['library', 'park', 'train station'], answer: 0, hint: 'There are many books there.' },
      { type: 'mc', fig: 'photo', pic: ph('g3_park'), mode: 'normal', level: 'medium', q: 'Where do you play with friends?', options: ['park', 'supermarket', 'library'], answer: 0, hint: 'Green grass, trees and a bench.' },
      { type: 'mc', fig: 'photo', pic: ph('g3_house'), mode: 'normal', level: 'medium', q: 'Where do you live?', options: ['house', 'museum', 'train station'], answer: 0, hint: 'You sleep and eat there.' }
    ] },
  { id: 'I3', lesson: 1, concept: 'Reading: Youssef’s Busy Day (pp 47-48)',
    explain: 'Youssef left his house early in the morning. First, he went to the library to read a book. Then, he and his mom went shopping at the supermarket. They passed the train station and saw a big train. After lunch, they visited the museum. In the afternoon, they played at the park. What a fun and busy day!',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Where did Youssef go first?', options: ['library', 'park', 'museum'], answer: 0, hint: 'Read: First, he went to the…' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Who did Youssef go to the supermarket with?', options: ['his mom', 'his teacher', 'his friend'], answer: 0, hint: 'Read: Then, he and his … went shopping.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What did Youssef see at the train station?', options: ['a train', 'a bus', 'a boat'], answer: 0, hint: 'Read: They passed the train station and saw a big…' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Where did Youssef go after lunch?', options: ['museum', 'park', 'supermarket'], answer: 0, hint: 'Read: After lunch, they visited the…' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Was Youssef’s day busy or boring?', options: ['busy', 'boring'], answer: 0, hint: 'Read the last sentence.' },
      { type: 'order', mode: 'normal', level: 'medium', q: 'Put Youssef’s day in order.', items: ['the park', 'the library', 'the museum', 'the supermarket'], answer: [1, 3, 2, 0], hint: 'First the library, last the park.' }
    ] },
  { id: 'I4', lesson: 1, concept: 'Phonics: double consonant endings ff, ll, ss, zz (p 49)',
    explain: 'If a short word has a short vowel sound and ends with f, l, s or z, we often write two of those letters: cuff, off, staff; bell, pull, tell; grass, less, miss; buzz, fuzz, jazz.',
    variants: [
      { type: 'tap', diagram: 'sounds8', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap the bell.', answer: 'snBell', hint: 'It rings.' },
      { type: 'tap', diagram: 'sounds8', mode: 'normal', level: 'easy', q: 'Tap the grass.', answer: 'snGrass', hint: 'It is green and grows on the ground.' },
      { type: 'tap', diagram: 'sounds8', mode: 'normal', level: 'medium', q: 'Which one says “buzz”? Tap it.', answer: 'snBee', hint: 'It flies and makes a sound.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Which letters are missing? bu _ _', options: ['zz', 'ss', 'll'], answer: 0, hint: 'A bee says it.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Which letters are missing? te _ _', options: ['ll', 'zz', 'ff'], answer: 0, hint: 'Tell me a story.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which letters are missing? mi _ _', options: ['ss', 'zz', 'ff'], answer: 0, hint: 'I … my friend when she is away.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which double letters are in “off”?', options: ['ff', 'ss', 'll'], answer: 0, hint: 'Look at the end of the word.' }
    ] },
  { id: 'I5', lesson: 1, boss: true, concept: 'Places and double consonants',
    explain: 'zz: buzz, fuzz. ss: less, class. ll: tell, well. Youssef went to the library, the supermarket, the museum and the park.',
    variants: [
      { type: 'table', mode: 'boss', level: 'hard', q: 'Sort and write (p 49 ex 3).', poc: 'Word', cols: ['zz', 'ss', 'll'], items: ['buzz', 'less', 'tell', 'fuzz', 'class', 'well'], answer: [0, 1, 2, 0, 1, 2], hint: 'Look at the last two letters.' },
      { type: 'multi', mode: 'boss', level: 'hard', q: 'Choose all the words with double consonant endings.', options: ['grass', 'buzz', 'well', 'park'], answer: [0, 1, 2], hint: 'The last two letters are the same.' },
      { type: 'mc', mode: 'boss', level: 'hard', q: 'In the afternoon, where did Youssef play?', options: ['at the park', 'at the library', 'at the museum'], answer: 0, hint: 'Read: In the afternoon, they played at the…' }
    ] },

  /* ---------- Lesson 2 · Egypt's Landmarks (pages 50-54) ---------- */
  { id: 'J1', lesson: 2, concept: 'Landmarks: Cairo Tower, Alexandria Library, the Pyramids of Giza (p 50)',
    explain: 'Famous places in Egypt: Cairo Tower, Alexandria Library and the Pyramids of Giza.',
    variants: [
      { type: 'tap', diagram: 'landmarks3', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap the Pyramids of Giza.', answer: 'lmPyramids', hint: 'Look for big stone triangles.' },
      { type: 'tap', diagram: 'landmarks3', mode: 'normal', level: 'easy', q: 'Tap Cairo Tower.', answer: 'lmTower', hint: 'It is very tall and thin.' },
      { type: 'tap', diagram: 'landmarks3', mode: 'normal', level: 'medium', q: 'Tap Alexandria Library.', answer: 'lmLibrary', hint: 'A round building by the sea.' }
    ] },
  { id: 'J2', lesson: 2, concept: 'Reorder the words to make sentences (p 50 ex 2)',
    explain: 'We visited the Pyramids of Giza. I read books at the Alexandria Library. They visited the Cairo Tower yesterday.',
    variants: [
      { type: 'build', style: 'sentence', mode: 'normal', level: 'easy', q: 'Put the words in order.', parts: ['We', 'visited', 'the', 'Pyramids of Giza.'], extra: ['at'], hint: 'Start with We.' },
      { type: 'build', style: 'sentence', mode: 'normal', level: 'medium', q: 'Put the words in order.', parts: ['I', 'read books', 'at', 'the Alexandria Library.'], extra: ['visited'], hint: 'Start with I.' },
      { type: 'build', style: 'sentence', mode: 'normal', level: 'medium', q: 'Put the words in order.', parts: ['They', 'visited', 'the Cairo Tower', 'yesterday.'], extra: ['at'], hint: 'Yesterday goes at the end.' }
    ] },
  { id: 'J3', lesson: 2, concept: 'Reading: Laila’s Holiday Adventure (pp 51-52)',
    explain: 'Laila visited the Cairo Tower with her family. They took pictures and saw the whole city. Next, they explored the great Pyramids of Giza. Laila loved the camels! Then, they traveled to Alexandria. At the Alexandria Library, she read fun books. It was the best holiday she ever had!',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Where did Laila go first?', options: ['Cairo Tower', 'The Pyramids', 'Alexandria Library'], answer: 0, hint: 'Read the first sentence.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Who did Laila go with?', options: ['her family', 'her teacher', 'her friends'], answer: 0, hint: 'Read: … with her …' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What did Laila see at the Pyramids?', options: ['camels', 'horses', 'cars'], answer: 0, hint: 'Read: Laila loved the…' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What did she do at the Alexandria Library?', options: ['read books', 'wrote a story', 'drew pictures'], answer: 0, hint: 'It is a library.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'How did Laila feel about her holiday?', options: ['It was the best holiday she ever had.', 'It was boring.', 'She was sad.'], answer: 0, hint: 'Read the last sentence.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What did Laila’s family do at the Cairo Tower?', options: ['They took pictures and saw the whole city.', 'They read fun books.', 'They rode camels.'], answer: 0, hint: 'Read the second sentence.' }
    ] },
  { id: 'J4', lesson: 2, concept: 'Phonics: digraph ck = /k/ (duck, sock, back, neck, truck) (p 53)',
    explain: 'The letters c and k together make one /k/ sound, especially at the end of words: duck, sock, back, neck, truck.',
    variants: [
      { type: 'tap', diagram: 'sounds8', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap the duck.', answer: 'snDuck', hint: 'A yellow bird.' },
      { type: 'tap', diagram: 'sounds8', mode: 'normal', level: 'easy', q: 'Tap the sock.', answer: 'snSock', hint: 'You wear it on your foot.' },
      { type: 'tap', diagram: 'sounds8', mode: 'normal', level: 'easy', q: 'Tap the truck.', answer: 'snTruck', hint: 'A big car that carries things.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Which letters are missing? du _ _', options: ['ck', 'ss', 'ph'], answer: 0, hint: 'They say /k/.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Put the letters in order: k n e c', options: ['neck', 'back', 'sock'], answer: 0, hint: 'Start with n.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Put the letters in order: t k c u r', options: ['truck', 'duck', 'stick'], answer: 0, hint: 'Start with tr.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which word has the /k/ sound? rain – duck – pen', options: ['duck', 'rain', 'pen'], answer: 0, hint: 'Look for ck.' }
    ] },
  { id: 'J5', lesson: 2, concept: 'Punctuation: capital letters, periods and question marks (p 54)',
    explain: 'We use capital letters at the beginning of the sentence. We use periods at the end of sentences, and question marks at the end of questions.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Do you like going to the amusement park ___', options: ['?', '.'], answer: 0, hint: 'Is it a question?' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'We went to the supermarket yesterday ___', options: ['.', '?'], answer: 0, hint: 'Is it a question?' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Where is the nearest hospital ___', options: ['?', '.'], answer: 0, hint: 'It starts with Where.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which sentence is correct?', options: ['We went to the amusement park.', 'we went to the amusement park.', 'we went to the amusement park'], answer: 0, hint: 'Capital letter at the start, period at the end.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which sentence is correct?', options: ['Is the shopping mall open today?', 'is the shopping mall open today?', 'Is the shopping mall open today.'], answer: 0, hint: 'It is a question.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which sentence is correct?', options: ['Cairo Tower is very tall.', 'cairo tower is very tall.', 'Cairo Tower is very tall?'], answer: 0, hint: 'Names of places start with capital letters too.' }
    ] },
  { id: 'J6', lesson: 2, boss: true, concept: 'Landmarks, ck and punctuation',
    explain: 'ck = /k/ at the end of words. A question ends with ?; a sentence ends with a period.',
    variants: [
      { type: 'table', mode: 'boss', level: 'hard', q: 'Add a period or a question mark.', poc: 'Sentence', cols: ['.', '?'], items: ['I saw the Pyramids with my family', 'Did you visit the Cairo Tower last year', 'We went to the supermarket yesterday', 'Where is the nearest hospital'], answer: [0, 1, 0, 1], hint: 'Questions start with Do, Did, Where…' },
      { type: 'multi', mode: 'boss', level: 'hard', q: 'Choose all the words with the /k/ sound: dog – broke – stick', options: ['broke', 'stick', 'dog'], answer: [0, 1], hint: 'Listen for /k/: look for k or ck.' },
      { type: 'mc', mode: 'boss', level: 'hard', q: 'Put the letters in order: b k a c', options: ['back', 'neck', 'duck'], answer: 0, hint: 'Start with b.' }
    ] },

  /* ---------- Lesson 3 · Map It Out (pages 55-57) ---------- */
  { id: 'K1', lesson: 3, concept: 'Prepositions of place: on, under, behind, between, in front of, in (p 55)',
    explain: 'Prepositions tell you where something is found: on the box, under the box, behind the box, between the boxes, in front of the box, in the box.',
    variants: [
      { type: 'mc', fig: 'prep', pic: at('on'), mode: 'timed', seconds: 15, level: 'easy', q: 'Where is the ball? The ball is ___ the box.', options: ['on', 'in', 'under'], answer: 0, hint: 'It is on top.' },
      { type: 'mc', fig: 'prep', pic: at('in'), mode: 'timed', seconds: 15, level: 'easy', q: 'Where is the ball? The ball is ___ the box.', options: ['in', 'on', 'behind'], answer: 0, hint: 'The box is open. Look inside.' },
      { type: 'mc', fig: 'prep', pic: at('under'), mode: 'normal', level: 'easy', q: 'Where is the ball? The ball is ___ the table.', options: ['under', 'on', 'in'], answer: 0, hint: 'It is below the table.' },
      { type: 'mc', fig: 'prep', pic: at('between'), mode: 'normal', level: 'medium', q: 'Where is the ball? The ball is ___ the boxes.', options: ['between', 'on', 'in front of'], answer: 0, hint: 'There is one box on each side.' },
      { type: 'mc', fig: 'prep', pic: at('behind'), mode: 'normal', level: 'medium', q: 'Where is the ball? The ball is ___ the box.', options: ['behind', 'in front of', 'under'], answer: 0, hint: 'You can only see the top of the ball.' },
      { type: 'mc', fig: 'prep', pic: at('in front of'), mode: 'normal', level: 'medium', q: 'Where is the ball? The ball is ___ the box.', options: ['in front of', 'behind', 'in'], answer: 0, hint: 'The ball is nearer to you than the box.' }
    ] },
  { id: 'K2', lesson: 3, concept: 'Reading: Samy and the Toy Car (p 56)',
    explain: 'One day, Samy was playing in his room when his toy car rolled under the couch. He looked for it behind the curtain and in front of the TV, but it was gone. Then, he checked between the two chairs. Samy found the car but it was stuck. His sister came to help. She used a stick to pull it out from under the couch. Samy was so happy! He put the toy car on the table and smiled.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Where did the toy car roll?', options: ['under the couch', 'on the table', 'behind the TV'], answer: 0, hint: 'Read the first sentence.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Who came to help Samy?', options: ['his sister', 'his father', 'his friend'], answer: 0, hint: 'Read: His … came to help.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What did she use to pull the car out?', options: ['a stick', 'a ball', 'a book'], answer: 0, hint: 'It is long and thin.' },
      { type: 'fill', fig: 'photo', pic: ph('g3_ontable'), mode: 'normal', level: 'medium', q: 'He put the toy car ___ the table and smiled.', options: ['on', 'under', 'between'], answer: 0, hint: 'Look at the picture.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'He checked ___ the two chairs.', options: ['between', 'on', 'in'], answer: 0, hint: 'There are two chairs: one on each side.' }
    ] },
  { id: 'K3', lesson: 3, boss: true, concept: 'Prepositions in the story',
    explain: 'under the couch, behind the curtain, in front of the TV, between the two chairs, on the table.',
    variants: [
      { type: 'multi', mode: 'boss', level: 'hard', q: '“He looked for it behind the curtain and in front of the TV.” Choose all the prepositions of place.', options: ['behind', 'in front of', 'looked', 'curtain'], answer: [0, 1], hint: 'They tell you where.' },
      { type: 'match', mode: 'boss', level: 'hard', q: 'Match to make the story sentences.', left: ['The toy car rolled', 'He looked', 'He checked', 'He put the car'], right: ['under the couch.', 'behind the curtain.', 'between the two chairs.', 'on the table.'], answer: [0, 1, 2, 3], hint: 'Follow the story in order.' },
      { type: 'mc', fig: 'prep', pic: at('next to'), mode: 'boss', level: 'hard', q: 'Where is the ball? The ball is ___ the box.', options: ['next to', 'between', 'on'], answer: 0, hint: 'It is on the floor at the side of the box.' }
    ] },

  /* ---------- Lesson 4 · A School Trip to the Zoo (pages 58-62) ---------- */
  { id: 'L1', lesson: 4, concept: 'Reading: A School Trip to the Zoo (pp 58-59)',
    explain: 'Last Monday, Grade Three students went on a trip to the zoo. They went by bus. At the zoo, they saw lions, monkeys, and elephants. The ticket was 20 pounds. For lunch, they ate sandwiches and chips. They drank juice and water. Everyone had a good day!',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Where did the class go?', options: ['The zoo', 'The park', 'The museum'], answer: 0, hint: 'Read the first sentence.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'How did they go to the zoo?', options: ['By bus', 'By car', 'By train'], answer: 0, hint: 'Read the second sentence.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What animals did they see?', options: ['Lions, monkeys, and elephants', 'Cats and dogs', 'Fish and birds'], answer: 0, hint: 'Read the third sentence.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'How much was the ticket?', options: ['20 pounds', '10 pounds', '50 pounds'], answer: 0, hint: 'Read: The ticket was…' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What did they eat and drink?', options: ['Sandwiches and chips, juice and water', 'Cake and milk', 'Fish and tea'], answer: 0, hint: 'Read: For lunch, they ate… They drank…' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'When did they go to the zoo?', options: ['Last Monday', 'Last Friday', 'Today'], answer: 0, hint: 'Read the first two words.' }
    ] },
  { id: 'L2', lesson: 4, concept: 'Past simple: add -ed; verbs ending in -e add -d (p 60)',
    explain: 'We use the past tense to talk about something that happened. Most verbs add -ed: play → played, walk → walked, jump → jumped, climb → climbed. Verbs ending in -e add -d: live → lived, prepare → prepared, smile → smiled, close → closed, dance → danced, like → liked.',
    variants: [
      { type: 'mc', fig: 'photo', pic: ph('g3_jump'), mode: 'timed', seconds: 15, level: 'easy', q: 'jump → ?', options: ['jumped', 'jumpd', 'jumping'], answer: 0, hint: 'Most verbs add -ed.' },
      { type: 'mc', fig: 'photo', pic: ph('g3_dance'), mode: 'timed', seconds: 15, level: 'easy', q: 'dance → ?', options: ['danced', 'danceed', 'dancs'], answer: 0, hint: 'It ends in -e: add -d.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'play → ?', options: ['played', 'plaied', 'playd'], answer: 0, hint: 'Add -ed.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'smile → ?', options: ['smiled', 'smileed', 'smiling'], answer: 0, hint: 'It ends in -e: add -d.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'climb → ?', options: ['climbed', 'climbd', 'climbs'], answer: 0, hint: 'Add -ed.' },
      { type: 'table', mode: 'normal', level: 'medium', q: 'How do we make the past tense?', poc: 'Verb', cols: ['add -ed', 'add -d'], items: ['walk', 'close', 'jump', 'like'], answer: [0, 1, 0, 1], hint: 'Does the verb end in -e?' }
    ] },
  { id: 'L3', lesson: 4, concept: 'Choose the correct verb in the past simple (p 61 ex 3)',
    explain: 'We cleaned our hands before eating. I walked to school yesterday. I played with my friend after school. My grandma baked a cake. My cousin lived in Aswan two years ago.',
    variants: [
      { type: 'fill', fig: 'photo', pic: ph('g3_wash'), mode: 'normal', level: 'easy', q: 'We ___ our hands before eating.', options: ['cleaned', 'clean'], answer: 0, hint: 'It already happened: -ed.' },
      { type: 'fill', fig: 'photo', pic: ph('g3_walk'), mode: 'normal', level: 'easy', q: 'I ___ to school yesterday.', options: ['walked', 'walk'], answer: 0, hint: 'Yesterday = the past.' },
      { type: 'fill', fig: 'photo', pic: ph('g3_playtoys'), mode: 'normal', level: 'medium', q: 'I ___ with my friend after school.', options: ['played', 'play'], answer: 0, hint: 'Choose the past tense: it ends in -ed.' },
      { type: 'fill', fig: 'photo', pic: ph('g3_bake'), mode: 'normal', level: 'medium', q: 'My grandma ___ a cake.', options: ['baked', 'bakes'], answer: 0, hint: 'Choose the past tense: bake ends in -e, add -d.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'My cousin ___ in Aswan two years ago.', options: ['lived', 'lives'], answer: 0, hint: 'Two years ago = the past.' }
    ] },
  { id: 'L4', lesson: 4, boss: true, concept: 'The zoo trip and the past simple',
    explain: 'Most verbs add -ed; verbs ending in -e add -d. Grade Three went to the zoo by bus and saw lions, monkeys and elephants.',
    variants: [
      { type: 'table', mode: 'boss', level: 'hard', q: 'How do we make the past tense?', poc: 'Verb', cols: ['add -ed', 'add -d'], items: ['climb', 'dance', 'play', 'prepare', 'walk', 'live'], answer: [0, 1, 0, 1, 0, 1], hint: 'Verbs ending in -e add -d.' },
      { type: 'build', style: 'sentence', mode: 'boss', level: 'hard', q: 'Put the words in order.', parts: ['I', 'walked', 'to school', 'yesterday.'], extra: ['walk'], hint: 'Yesterday: use the past tense.' },
      { type: 'tf', mode: 'boss', level: 'hard', q: 'The students drank juice and water at the zoo.', answer: 0, hint: 'Read: They drank…' }
    ] },

  /* ---------- Lesson 5 · Let's Review Units 1, 2, and 3 (pages 63-66) ---------- */
  { id: 'M1', lesson: 5, concept: 'Complete the sentences: Goodbye, cousin, farmer, museum, pilot (p 63 ex 1)',
    explain: 'I like to play with my cousin. He can run fast. We went on a school trip to the museum. A pilot flies the airplane. Goodbye, see you tomorrow! The farmer grows vegetables.',
    variants: [
      { type: 'fill', fig: 'photo', pic: ph('g3_pilot'), mode: 'normal', level: 'easy', q: 'A ___ flies the airplane.', options: ['pilot', 'farmer', 'cousin'], answer: 0, hint: 'Look behind the man.' },
      { type: 'fill', fig: 'photo', pic: ph('g3_farmer2'), mode: 'normal', level: 'easy', q: 'The ___ grows vegetables.', options: ['farmer', 'pilot', 'museum'], answer: 0, hint: 'He works in a field.' },
      { type: 'fill', mode: 'normal', level: 'easy', q: '___, see you tomorrow!', options: ['Goodbye', 'Cousin', 'Museum'], answer: 0, hint: 'You say it when you leave.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'I like to play with my ___. He can run fast.', options: ['cousin', 'museum', 'pilot'], answer: 0, hint: 'A family member.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'We went on a school trip to the ___.', options: ['museum', 'farmer', 'Goodbye'], answer: 0, hint: 'It is a place.' }
    ] },
  { id: 'M2', lesson: 5, concept: 'Circle the odd one (p 63 ex 2)',
    explain: 'Hello, Goodbye, Good morning are greetings: Sister is odd. Mother, Brother, Uncle are family: Hospital is odd. Pilot, Teacher, Baker are jobs: House is odd. Park, Supermarket, Library are places: Thank you is odd.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Find the odd one.', options: ['Sister', 'Hello', 'Goodbye', 'Good morning'], answer: 0, hint: 'Three are greetings.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Find the odd one.', options: ['Hospital', 'Mother', 'Brother', 'Uncle'], answer: 0, hint: 'Three are family members.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Find the odd one.', options: ['House', 'Pilot', 'Teacher', 'Baker'], answer: 0, hint: 'Three are jobs.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Find the odd one.', options: ['Thank you', 'Park', 'Supermarket', 'Library'], answer: 0, hint: 'Three are places.' }
    ] },
  { id: 'M3', lesson: 5, concept: 'Complete the sentences: walked, is, eats, my, are, her, played, drives (p 63 ex 3)',
    explain: 'He is a pilot. They walked to the garden yesterday. He eats lunch at 1 o’clock every day. I brush my teeth every morning. The girl is playing with her doll. You are a good friend. Yesterday, we played football after school. My father drives the car.',
    variants: [
      { type: 'fill', mode: 'normal', level: 'easy', q: 'He ___ a pilot.', options: ['is', 'are', 'my'], answer: 0, hint: 'He goes with is.' },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'I brush ___ teeth every morning.', options: ['my', 'her', 'is'], answer: 0, hint: 'I → my.' },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'You ___ a good friend.', options: ['are', 'is', 'eats'], answer: 0, hint: 'You goes with are.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'The girl is playing with ___ doll.', options: ['her', 'my', 'are'], answer: 0, hint: 'A girl → her.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'He ___ lunch at 1 o’clock every day.', options: ['eats', 'walked', 'are'], answer: 0, hint: 'Every day + he: add -s.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'They ___ to the garden yesterday.', options: ['walked', 'eats', 'drives'], answer: 0, hint: 'Yesterday = the past: -ed.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Yesterday, we ___ football after school.', options: ['played', 'drives', 'eats'], answer: 0, hint: 'Yesterday = the past: -ed.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'My father ___ the car.', options: ['drives', 'played', 'are'], answer: 0, hint: 'My father = he: add -s.' }
    ] },
  { id: 'M4', lesson: 5, concept: 'Choose the correct sentence and complete with sounds (p 64 ex 4-6, p 65 ex 7)',
    explain: 'My name is Salma. The supermarket is near my house. She is kind. I play with my cousin. photo, whale, exam, truck, alphabet, miss. What is your name? The duck lives in a pond. I have an exam tomorrow at school. We can see the elephant at the zoo.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Choose the correct sentence.', options: ['My name is Salma.', 'Name my is Salma.'], answer: 0, hint: 'Start with My name.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Choose the correct sentence.', options: ['She is kind.', 'She kind is.'], answer: 0, hint: 'She is…' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Choose the correct sentence.', options: ['The supermarket is near my house.', 'Is supermarket house near my.'], answer: 0, hint: 'Start with The supermarket.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Fill in the missing letters: __ oto', options: ['ph', 'wh', 'ck'], answer: 0, hint: 'It says /f/.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Fill in the missing letters: __ ale', options: ['wh', 'ph', 'ss'], answer: 0, hint: 'A big sea animal.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Fill in the missing letters: tru __', options: ['ck', 'ss', 'x'], answer: 0, hint: 'It says /k/.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Fill in the missing letters: mi __', options: ['ss', 'ck', 'ph'], answer: 0, hint: 'A short word that ends with a double letter.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'The ___ lives in a pond.', options: ['duck', 'elephant', 'exam'], answer: 0, hint: 'A pond is small water.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'I have an ___ tomorrow at school.', options: ['exam', 'duck', 'elephant'], answer: 0, hint: 'You answer questions in it.' }
    ] },
  { id: 'M5', lesson: 5, concept: 'Rearrange the letters and choose the preposition (p 64 ex 5, p 65 ex 8)',
    explain: 'itex = exit, ocsk = sock, lebl = bell, itwhe = white, hargp = graph, uzbz = buzz, ehewl = wheel. The book is on the table. The cat is under the chair. The ball is in the box. The bag is next to the desk.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Rearrange: l e b l', options: ['bell', 'well', 'tell'], answer: 0, hint: 'It starts with b.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Rearrange: o c s k', options: ['sock', 'duck', 'neck'], answer: 0, hint: 'It starts with s.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Rearrange: i t w h e', options: ['white', 'wheel', 'whale'], answer: 0, hint: 'It is a colour.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Rearrange: e h e w l', options: ['wheel', 'whale', 'white'], answer: 0, hint: 'A bicycle has two.' },
      { type: 'fill', fig: 'prep', pic: at('in'), mode: 'normal', level: 'easy', q: 'The ball is ___ the box.', options: ['in', 'between'], answer: 0, hint: 'Look inside the box.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'The cat is ___ the chair.', options: ['under', 'between'], answer: 0, hint: '“between” needs two things.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'The book is ___ the table.', options: ['on', 'in'], answer: 0, hint: 'You put a book on top of a table.' },
      { type: 'fill', fig: 'prep', pic: at('next to'), mode: 'normal', level: 'medium', q: 'The ball is ___ the box.', options: ['next to', 'between'], answer: 0, hint: 'There is only one box.' }
    ] },
  { id: 'M6', lesson: 5, concept: 'Feelings and good actions (p 66 ex 11-13)',
    explain: 'You can’t find your bag: worried. You laugh and smile: happy. You carry books for a friend: helpful. You say please and thank you: polite. Your ice cream falls: sad. Help your little brother tie his shoes: helpful. Retry after a mistake: try again. Share your pencils: kind. Listen quietly: polite. Clean your table after lunch: clean. Salma saw her hat near a rock. Aziz helped Ahmed in the garden. Ali found a stick under the couch. The toy car was stuck under the couch. Salma was happy when she found her hat.',
    variants: [
      { type: 'mc', fig: 'photo', pic: ph('g3_lostbag'), mode: 'normal', level: 'easy', q: 'You can’t find your bag. How do you feel?', options: ['worried', 'happy', 'polite'], answer: 0, hint: 'Look at his face.' },
      { type: 'mc', fig: 'photo', pic: ph('g3_icecream'), mode: 'normal', level: 'easy', q: 'Your ice cream falls. How do you feel?', options: ['sad', 'happy', 'helpful'], answer: 0, hint: 'Look at her face.' },
      { type: 'mc', fig: 'photo', pic: ph('g3_carry'), mode: 'normal', level: 'easy', q: 'You carry books for a friend. You are ___.', options: ['helpful', 'sad', 'worried'], answer: 0, hint: 'You help.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'You say “please” and “thank you.” You are ___.', options: ['polite', 'worried', 'sad'], answer: 0, hint: 'Good words.' },
      { type: 'mc', fig: 'photo', pic: ph('g3_share'), mode: 'normal', level: 'medium', q: 'You share your pencils with a classmate. Which word?', options: ['Kind', 'Clean', 'Try again'], answer: 0, hint: 'Sharing is…' },
      { type: 'mc', fig: 'photo', pic: ph('g3_tryagain'), mode: 'normal', level: 'medium', q: 'You retry after making a mistake. Which word?', options: ['Try again', 'Polite', 'Clean'], answer: 0, hint: 'You do it one more time.' },
      { type: 'fill', fig: 'photo', pic: ph('g3_hat'), mode: 'normal', level: 'medium', q: 'Salma saw her hat near a ___.', options: ['rock', 'stick', 'couch'], answer: 0, hint: 'Look at the grey stone.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'The toy car was ___ under the couch.', options: ['stuck', 'happy', 'found'], answer: 0, hint: 'It could not come out.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Ali ___ a stick under the couch.', options: ['found', 'stuck', 'happy'], answer: 0, hint: 'He looked and then he had it.' }
    ] },
  { id: 'M7', lesson: 5, boss: true, concept: 'Review of Units 1, 2 and 3',
    explain: 'Help your little brother tie his shoes: helpful. Listen quietly: polite. Clean your table: clean. I play with my cousin. Aziz helped Ahmed in the garden.',
    variants: [
      { type: 'match', mode: 'boss', level: 'hard', q: 'Match the word to the action (p 66 ex 12).', left: ['You help your little brother tie his shoes.', 'You share your pencils with a classmate.', 'You listen quietly when someone is talking.', 'You clean your table after lunch.'], right: ['Helpful', 'Kind', 'Polite', 'Clean'], answer: [0, 1, 2, 3], hint: 'Start with the shoes: you help.' },
      { type: 'build', style: 'sentence', mode: 'boss', level: 'hard', q: 'Put the words in order.', parts: ['I', 'play', 'with', 'my cousin.'], extra: ['plays'], hint: 'I goes with play.' },
      { type: 'fill', mode: 'boss', level: 'hard', q: 'Aziz ___ Ahmed in the garden.', options: ['helped', 'happy', 'stuck'], answer: 0, hint: 'You need an action word in the past.' }
    ] }
];
})();
