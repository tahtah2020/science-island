/* English · Grade 5 · Term 1 · Unit 4 "My Community" · ministry book "English Primary 5", first term 2026/2027 (book pages 61-76)
   One English book for both tracks (subject lang { lang: 'en', ar: 'en' }), so there is no _ar file.
   Lessons: 1 Places in Our Community (pp 62-64) · 2 Egyptian Villages + prepositions of time (pp 65-67) · 3 Multiply It with Words! + trigraphs (pp 68-69)
            4 Writing: The New Administrative Capital (pp 70-74) · Quick Review and Self-Assessment (pp 75-76) and Review 2 items on this unit, spread over the lessons
   The unit has four lessons (no "Think and Create" page). Idea letters (one per lesson): P, Q, R, S.  Boss ideas: P6, Q7, R5, S4.
   Rules: answers of mc/fill at index 0 (the page shuffles) · one Boss idea per lesson (every variant mode:'boss') · about a third timed (10-20 s, easy recall)
          distractors = real misconceptions · term/fix answers ≤ 18 letters · core and Boss only from the school book.
   Tap pictures (english/g5_art.js): places6 -> restaurant | coffeeshop | bakery | supermarket | club | themepark
                                    village6 -> field | cottage | commcenter | barn | mainsquare | cow
   Pictures: the owner's illustrations (unit_illustrations.zip, 25 Oct 2026), english/assets/town_*.jpg (no captions; the corner mark cropped off).
   Review notes:
   - Listening activities (audio) are asked as reading questions. Open speaking, "Think", role-play, opinion and writing tasks are not asked
     (p 63 Think, p 64 ex 9, p 66 ex 3 items 4-5 and ex 5, p 70 Think, pp 71-73 writing and drawing, p 75 ex 3 item 2, Review 2 ex 6).
   - Page 63 ex 5 answers are taken from the dialogue (printed text): club = play sports, video games, hang out with friends; dinner = restaurants; coffee shop = coffee and cake; bakery = this afternoon.
   - Page 66 ex 3 item 3: the text names cows, sheep and chickens; the site asks for two of them.
   - Page 69 ex 3 item 1 (flight - near - witch) has two words with a trigraph; without the audio, the site asks "which word has igh" / "which has tch".
   - Page 71 ex 3 item 2 "strong ___": the text says the tower is made of "strong glass and steel"; the site asks with "steel" and does not offer "glass" as a wrong option.
   - Page 68: the word problems are asked with the book's numbers (32 x 4 = 128 apples; 22 x 3 = 66 oranges). */
(function () {
window.CHAPTER = { id: 'eg5u4', title: 'My Community' };

window.IDEAS = [
  /* ---------- Lesson 1 · Places in Our Community ---------- */
  { id: 'P1', lesson: 1, concept: 'Places in the community',
    explain: 'A restaurant is a place where people go to eat food. A supermarket is a large store where people buy groceries. A club is a place where people play sports. A bakery is a place where bread, cakes and pastries are made. A coffee shop is a place to relax and drink coffee. A theme park is a place with rides and games for fun.',
    variants: [
      { type: 'match', mode: 'normal', level: 'medium', q: 'Match each place to what we do there.', left: ['restaurant', 'supermarket', 'club', 'bakery', 'coffee shop', 'theme park'], right: ['eat food', 'buy groceries', 'play sports', 'buy bread and cakes', 'relax and drink coffee', 'go on rides'], answer: [0, 1, 2, 3, 4, 5] },
      { type: 'term', mode: 'normal', level: 'medium', q: 'A large store where people buy groceries.', answer: 'Supermarket', choices: ['Bakery', 'Club', 'Restaurant'] },
      { type: 'term', mode: 'normal', level: 'medium', q: 'A place with rides and games for fun.', answer: 'Theme park', choices: ['Coffee shop', 'Club', 'Supermarket'] },
      { type: 'term', mode: 'normal', level: 'medium', q: 'A place where bread, cakes and pastries are made.', answer: 'Bakery', choices: ['Restaurant', 'Supermarket', 'Coffee shop'] },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'Where do we play sports?', options: ['At the club', 'At the bakery', 'At the coffee shop', 'At the supermarket'], answer: 0 },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'A restaurant is a place where people go to ___.', options: ['eat food', 'play sports', 'go on rides', 'buy groceries'], answer: 0 }
    ] },
  { id: 'P2', lesson: 1, concept: 'Recognize the six places',
    explain: 'The six places in our community: restaurant, coffee shop, bakery, supermarket, club and theme park.',
    variants: [
      { type: 'tap', diagram: 'places6', mode: 'normal', level: 'easy', q: 'Tap the bakery.', answer: 'bakery' },
      { type: 'tap', diagram: 'places6', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap the theme park.', answer: 'themepark' },
      { type: 'tap', diagram: 'places6', mode: 'normal', level: 'easy', q: 'Tap the supermarket.', answer: 'supermarket' },
      { type: 'tap', diagram: 'places6', mode: 'normal', level: 'easy', q: 'Tap the club.', answer: 'club' },
      { type: 'tap', diagram: 'places6', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap the coffee shop.', answer: 'coffeeshop' },
      { type: 'tap', diagram: 'places6', mode: 'normal', level: 'easy', q: 'Tap the restaurant.', answer: 'restaurant' }
    ] },
  { id: 'P3', lesson: 1, concept: 'Complete the sentences with a place',
    explain: 'At the theme park, you can go on rides. If you want to buy groceries, go to the supermarket. The club is a fun place to play sports. I go to the restaurant to eat dinner. You can buy bread and cakes at the bakery. People relax and drink coffee at the coffee shop.',
    variants: [
      { type: 'fill', mode: 'normal', level: 'easy', q: 'At the ___, you can go on rides.', options: ['theme park', 'bakery', 'supermarket'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'If you want to buy groceries, go to the ___.', options: ['supermarket', 'club', 'theme park'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'The ___ is a fun place to play sports.', options: ['club', 'bakery', 'coffee shop'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'I go to the ___ to eat dinner.', options: ['restaurant', 'club', 'theme park'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'You can buy bread and cakes at the ___.', options: ['bakery', 'club', 'theme park'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'People relax and drink coffee at the ___.', options: ['coffee shop', 'supermarket', 'club'], answer: 0 }
    ] },
  { id: 'P4', lesson: 1, concept: 'Let’s Go Out! Tamer and Adel',
    explain: 'Adel likes going to the club to play sports, video games, and hang out with his friends. Tamer usually goes to the supermarket with his family to pick out groceries. They often go to restaurants for dinner; his family likes to try different places every weekend. Adel likes going to the coffee shop for coffee and cake: it’s so relaxing. Tamer wants fresh bread from the bakery near the park. They will go this afternoon.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What does Adel do at the club with his friends?', options: ['He plays sports and video games and hangs out', 'He buys bread', 'He drinks coffee', 'He picks out groceries'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Where does Tamer usually go for dinner?', options: ['To restaurants', 'To the club', 'To the bakery', 'To the theme park'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What does Adel like to have at the coffee shop?', options: ['Coffee and cake', 'Fresh bread', 'Groceries', 'Dinner'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'When do Tamer and Adel plan to visit the bakery together?', options: ['This afternoon', 'Every weekend', 'Tomorrow morning', 'At night'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'Tamer usually goes to the supermarket with his family.', answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'The bakery is near the club.', answer: 1 }
    ] },
  { id: 'P5', lesson: 1, concept: 'Places for food and drink, places for play',
    explain: 'Places for food and drink: restaurant, coffee shop. Places for play: theme park, club. I go to the coffee shop for coffee and cake. The waiter brought us a healthy meal at the restaurant. I love the smell of fresh bread when I pass by the bakery.',
    variants: [
      { type: 'table', mode: 'normal', level: 'medium', q: 'Sort the places.', poc: 'Place', cols: ['Food and Drink', 'Play'], items: ['restaurant', 'theme park', 'club', 'coffee shop'], answer: [0, 1, 1, 0] },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'I go to the ___ for coffee and cake.', options: ['coffee shop', 'theme park'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'The waiter brought us a healthy meal at the ___.', options: ['restaurant', 'supermarket'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'I love the smell of fresh bread when I pass by the ___.', options: ['bakery', 'club'], answer: 0 },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'Which one is a place for play?', options: ['theme park', 'restaurant', 'coffee shop', 'bakery'], answer: 0 }
    ] },
  { id: 'P6', lesson: 1, boss: true, concept: 'Places in our community (Boss)',
    explain: 'I train at the club every weekend. The theme park has many rides. My mom shops at the supermarket. We can buy bread and cakes at a bakery, and we can relax and drink coffee at a coffee shop.',
    variants: [
      { type: 'term', mode: 'boss', level: 'medium', q: 'I train at the c___ every weekend.', answer: 'Club', choices: ['Cottage', 'Coffee shop', 'Cotton'] },
      { type: 'term', mode: 'boss', level: 'medium', q: 'My mom shops at the s___.', answer: 'Supermarket', choices: ['Steel', 'Soil', 'Sunlight'] },
      { type: 'fill', mode: 'boss', level: 'medium', q: 'The ___ has many rides.', options: ['theme park', 'coffee shop', 'bakery'], answer: 0 },
      { type: 'match', mode: 'boss', level: 'hard', q: 'Read and match.', left: ['We can relax and drink coffee at a …', 'We can buy groceries at a …', 'We can eat dinner at a …', 'We can go on rides at a …', 'We can buy bread and cakes at a …'], right: ['coffee shop', 'supermarket', 'restaurant', 'theme park', 'bakery'], answer: [0, 1, 2, 3, 4] },
      { type: 'tap', diagram: 'places6', mode: 'boss', level: 'medium', q: 'Tap the place where we can eat dinner.', answer: 'restaurant' },
      { type: 'tap', diagram: 'places6', mode: 'boss', level: 'medium', q: 'Tap the place where we can buy groceries.', answer: 'supermarket' }
    ] },

  /* ---------- Lesson 2 · Egyptian Villages ---------- */
  { id: 'Q1', lesson: 2, concept: 'Village words',
    explain: 'A village is a small community or group of houses. Farmers grow food in the fields. A cottage is a small cozy house. Farmers keep animals in the barns. The main square is the busiest place, where people shop at the market. Children meet and play games at the community center.',
    variants: [
      { type: 'tap', diagram: 'village6', mode: 'normal', level: 'easy', q: 'Tap the field.', answer: 'field' },
      { type: 'tap', diagram: 'village6', mode: 'normal', level: 'easy', q: 'Tap the barn.', answer: 'barn' },
      { type: 'tap', diagram: 'village6', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap the cottage.', answer: 'cottage' },
      { type: 'tap', diagram: 'village6', mode: 'normal', level: 'medium', q: 'Tap the community center.', answer: 'commcenter' },
      { type: 'tap', diagram: 'village6', mode: 'normal', level: 'medium', q: 'Tap the market in the main square.', answer: 'mainsquare' },
      { type: 'term', mode: 'normal', level: 'medium', q: 'A small community or group of houses.', answer: 'Village', choices: ['City', 'Barn', 'Club'] }
    ] },
  { id: 'Q2', lesson: 2, concept: 'Life in My Village',
    explain: 'I live in a small village with green fields, tall trees and quiet hills. The people are friendly. My family and I live in a cozy cottage near the community center. Every morning, I hear birds singing and see farmers working in the fields. The air is fresh and everything feels calm.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Where does the writer’s family live?', options: ['In a cozy cottage near the community center', 'In a tall tower in the city', 'In a barn with the animals', 'Near the main square'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What does the writer see every morning?', options: ['Farmers working in the fields', 'Cars stuck in the streets', 'People at the theme park', 'Tall buildings'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'The people in the village are friendly.', answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'The air in the village is dirty and noisy.', answer: 1 },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'Every morning, I hear birds ___.', options: ['singing', 'hooting', 'shopping'], answer: 0 }
    ] },
  { id: 'Q3', lesson: 2, concept: 'The busiest place, the barn and the night',
    explain: 'The main square is the busiest place. On Saturdays, people meet there to shop at the market. Farmers keep animals like cows, sheep and chickens in the barns. I visit my uncle’s barn to help feed the animals. The community center is a fun place: I play games there every Thursday. At night, the village is quiet. I walk near the fields and look at the stars.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What is the busiest part of the village?', options: ['The main square', 'The barn', 'The cottage', 'The fields at night'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What is the village like at night?', options: ['Quiet', 'Busy', 'Noisy', 'Crowded'], answer: 0 },
      { type: 'multi', mode: 'normal', level: 'medium', q: 'Which animals can you find in village barns? Choose all the correct answers.', options: ['Cows', 'Sheep', 'Chickens', 'Alligators'], answer: [0, 1, 2] },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'When do people meet in the main square to shop at the market?', options: ['On Saturdays', 'On Thursdays', 'At night', 'Every morning'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Why does the writer visit the uncle’s barn?', options: ['To help feed the animals', 'To play games', 'To shop at the market', 'To look at the stars'], answer: 0 },
      { type: 'tap', diagram: 'village6', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap an animal that farmers keep in the barns.', answer: 'cow' }
    ] },
  { id: 'Q4', lesson: 2, concept: 'Complete the village text',
    explain: 'Life in a village is peaceful and simple. People live in cozy cottages surrounded by green fields and fresh air. There is a market in the main square where people buy and sell fresh fruit and vegetables. Farmers keep their animals in barns. Children have fun at the community center. Farmers plant food in the field.',
    variants: [
      { type: 'fill', mode: 'normal', level: 'easy', q: 'People live in cozy ___ surrounded by green fields and fresh air.', options: ['cottages', 'squares', 'meetings'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'There is a market in the main ___ where people buy and sell fresh fruit and vegetables.', options: ['square', 'meeting', 'barn'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Farmers keep their ___ in barns.', options: ['animals', 'cottages', 'squares'], answer: 0 },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'Farmers plant food in the ___.', options: ['field', 'main square', 'barn', 'cottage'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Where do children have fun in the village?', options: ['At the community center', 'In the barn at night', 'At the supermarket', 'At the oil company'], answer: 0 }
    ] },
  { id: 'Q5', lesson: 2, concept: 'Prepositions of time: at, in, on',
    explain: 'We use “at” with clock times, mealtimes and some time phrases: at 6 a.m., at lunchtime, at night. We use “in” with parts of the day, months, seasons and years: in the afternoons, in summer, in 2020, in December. We use “on” with days and dates: on Saturdays, on June 8th.',
    variants: [
      { type: 'match', mode: 'normal', level: 'medium', q: 'Match each preposition to when we use it.', left: ['at', 'in', 'on'], right: ['clock times and mealtimes', 'months, seasons and years', 'days and dates'], answer: [0, 1, 2] },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'I was born ___ March.', options: ['in', 'on', 'at'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Let’s meet ___ 3 p.m.', options: ['at', 'in', 'on'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'The party is ___ Friday.', options: ['on', 'in', 'at'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'I like to relax ___ the evening.', options: ['in', 'on', 'at'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'My birthday is ___ June 8th.', options: ['on', 'in', 'at'], answer: 0 }
    ] },
  { id: 'Q6', lesson: 2, concept: 'My Fridays: circle the right preposition',
    explain: 'I really like Fridays. On Fridays, I have breakfast with my family in the morning. Then, I meet my friends at the club at lunchtime. We usually play football at 5 p.m. I see them more in summer. I go to the beach in July and celebrate my birthday on August 14th.',
    variants: [
      { type: 'fill', mode: 'normal', level: 'easy', q: '___ Fridays, I have breakfast with my family.', options: ['On', 'In', 'At'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'I have breakfast with my family ___ the morning.', options: ['in', 'at', 'on'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'I meet my friends at the club ___ lunchtime.', options: ['at', 'in', 'on'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'We usually play football ___ 5 p.m.', options: ['at', 'on', 'in'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'I go to the beach ___ July.', options: ['in', 'at', 'on'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'I celebrate my birthday ___ August 14th.', options: ['on', 'in', 'at'], answer: 0 }
    ] },
  { id: 'Q7', lesson: 2, boss: true, concept: 'Correct the prepositions of time (Boss)',
    explain: 'I travel to Aswan in February. My dad watches TV at night. We go to the club on Fridays. Salma was born in 2012. My sister’s birthday is on May 17th. The restaurant closes at 10 p.m. Adam eats bread at dinnertime. I always go to the park in the afternoons. He went to the club on March 17th.',
    variants: [
      { type: 'mc', mode: 'boss', level: 'hard', q: 'Which sentence is correct?', options: ['I travel to Aswan in February.', 'I travel to Aswan on February.', 'I travel to Aswan at February.', 'I travel to Aswan to February.'], answer: 0 },
      { type: 'mc', mode: 'boss', level: 'hard', q: 'Which sentence is correct?', options: ['My dad watches TV at night.', 'My dad watches TV on night.', 'My dad watches TV in night.', 'My dad watches TV by night.'], answer: 0 },
      { type: 'mc', mode: 'boss', level: 'hard', q: 'Correct the sentence: “Salma was born at 2012.”', options: ['Salma was born in 2012.', 'Salma was born on 2012.', 'Salma was born at the 2012.', 'Salma born in 2012.'], answer: 0 },
      { type: 'mc', mode: 'boss', level: 'hard', q: 'Correct the sentence: “The restaurant closes on 10 p.m.”', options: ['The restaurant closes at 10 p.m.', 'The restaurant closes in 10 p.m.', 'The restaurant closes on the 10 p.m.', 'The restaurant close at 10 p.m.'], answer: 0 },
      { type: 'table', mode: 'boss', level: 'hard', q: 'Which preposition goes with each time?', poc: 'Time', cols: ['at', 'in', 'on'], items: ['dinnertime', 'the afternoons', 'May 17th', 'Fridays', '10 p.m.', '2012'], answer: [0, 1, 2, 2, 0, 1] },
      { type: 'fill', mode: 'boss', level: 'hard', q: 'He went to the club ___ March 17th.', options: ['on', 'in', 'at'], answer: 0 }
    ] },

  /* ---------- Lesson 3 · Multiply It with Words! ---------- */
  { id: 'R1', lesson: 3, concept: 'A word problem: the farmer’s apples',
    explain: 'A farmer has 4 boxes of apples. Each box has 32 apples. Problem: 32 x 4 = ? Step 1: multiply the ones with 4: 2 ones x 4 = 8 ones. Step 2: multiply the tens with 4: 3 tens x 4 = 12 tens. Answer: 32 x 4 = 128 apples.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'A farmer has 4 boxes of apples. Each box has 32 apples. How many apples does the farmer have in total?', options: ['128 apples', '36 apples', '28 apples', '96 apples'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Which problem do we write for “4 boxes, 32 apples in each box”?', options: ['32 x 4', '32 + 4', '32 − 4', '32 ÷ 4'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What do we multiply first in 32 x 4?', options: ['The ones: 2 x 4 = 8', 'The tens: 3 x 4 = 12', 'The hundreds', 'Nothing: we add'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 20, level: 'easy', q: '3 tens x 4 = ___ tens.', options: ['12', '7', '34'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'In a word problem, “in total” tells us to find the whole amount.', answer: 0 }
    ] },
  { id: 'R2', lesson: 3, concept: 'Now try: the farmer’s oranges',
    explain: 'A farmer has 3 baskets. Each basket contains 22 oranges. Problem: 22 x 3 = ? 2 ones x 3 = 6 ones; 2 tens x 3 = 6 tens. Answer: 22 x 3 = 66 oranges.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'A farmer has 3 baskets. Each basket contains 22 oranges. How many oranges does the farmer have in total?', options: ['66 oranges', '25 oranges', '19 oranges', '62 oranges'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Which problem do we write for “3 baskets, 22 oranges in each basket”?', options: ['22 x 3', '22 + 3', '22 − 3', '3 − 22'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 20, level: 'easy', q: '2 ones x 3 = ___ ones.', options: ['6', '5', '23'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: '22 x 3 = 66', answer: 0 }
    ] },
  { id: 'R3', lesson: 3, concept: 'Trigraphs: dge, tch, igh',
    explain: 'A trigraph is a group of three letters that represents a single sound. The trigraph “dge” sounds like “j”: bridge is pronounced “brij”. The trigraph “tch” sounds like “ch”: match is pronounced “mach”. The trigraph “igh” sounds like “i”: right is pronounced “rite”.',
    variants: [
      { type: 'term', mode: 'normal', level: 'medium', q: 'A group of three letters that represents a single sound.', answer: 'Trigraph', choices: ['Digraph', 'Prefix', 'Syllable'] },
      { type: 'match', mode: 'normal', level: 'medium', q: 'Match each trigraph to its sound.', left: ['dge', 'tch', 'igh'], right: ['sounds like “j”', 'sounds like “ch”', 'sounds like “i”'], answer: [0, 1, 2] },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'How do we pronounce “bridge”?', options: ['brij', 'brig', 'bridg-e', 'brich'], answer: 0 },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'How do we pronounce “right”?', options: ['rite', 'rigt', 'rich', 'rig-ht'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'How many sounds does a trigraph make?', options: ['One sound', 'Two sounds', 'Three sounds', 'No sound'], answer: 0 }
    ] },
  { id: 'R4', lesson: 3, concept: 'Fill in the missing trigraph',
    explain: 'bri + dge = bridge · ma + tch = match · r + igh + t = right · fl + igh + t = flight · fri + dge = fridge · wa + tch = watch.',
    variants: [
      { type: 'fill', mode: 'normal', level: 'easy', q: 'bri___ (we walk over it across a river)', options: ['dge', 'tch', 'igh'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'ma___ (a football game)', options: ['tch', 'dge', 'igh'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'r___t (correct)', options: ['igh', 'tch', 'dge'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'fl___t (a trip on a plane)', options: ['igh', 'dge', 'tch'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'fri___ (it keeps food cold)', options: ['dge', 'igh', 'tch'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'wa___ (it tells the time on your hand)', options: ['tch', 'igh', 'dge'], answer: 0 }
    ] },
  { id: 'R5', lesson: 3, boss: true, concept: 'Find the trigraph (Boss)',
    explain: 'flight and bright have “igh”; fridge has “dge”; witch and watch have “tch”. near, pure, chair and fair have no trigraph.',
    variants: [
      { type: 'mc', mode: 'boss', level: 'medium', q: 'Which word has the trigraph “igh”?', options: ['flight', 'near', 'witch'], answer: 0 },
      { type: 'mc', mode: 'boss', level: 'medium', q: 'Which word has the trigraph “dge”?', options: ['fridge', 'bright', 'pure'], answer: 0 },
      { type: 'mc', mode: 'boss', level: 'medium', q: 'Which word has the trigraph “tch”?', options: ['watch', 'chair', 'fair'], answer: 0 },
      { type: 'table', mode: 'boss', level: 'hard', q: 'Sort the words by their trigraph.', poc: 'Word', cols: ['dge', 'tch', 'igh'], items: ['bridge', 'match', 'right', 'fridge', 'watch', 'flight'], answer: [0, 1, 2, 0, 1, 2] },
      { type: 'multi', mode: 'boss', level: 'hard', q: 'Which words have a trigraph? Choose all the correct answers.', options: ['bright', 'witch', 'fridge', 'near'], answer: [0, 1, 2] }
    ] },

  /* ---------- Lesson 4 · Writing: The New Administrative Capital ---------- */
  { id: 'S1', lesson: 4, concept: 'Egypt’s New City',
    explain: 'Egypt builds new cities almost everywhere. The New Administrative Capital is 45 km east of Cairo. It is a new city that helps reduce crowding in Cairo. The city is designed to be very smart: modern technology is used to manage roads, water, energy and almost everything. It has green areas everywhere, government offices and important buildings.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Where is the New Administrative Capital located?', options: ['45 km east of Cairo', '45 km west of Alexandria', 'In the Everglades', 'Near Aswan'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'How does the New Administrative Capital help Egypt?', options: ['It helps reduce crowding in Cairo', 'It makes Cairo more crowded', 'It grows cotton and wheat', 'It keeps animals in barns'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What is modern technology used for in the city?', options: ['To manage roads, water and energy', 'To feed the animals', 'To build cottages', 'To dig for gold'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'The city has green areas everywhere.', answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'The city has no government offices.', answer: 1 }
    ] },
  { id: 'S2', lesson: 4, concept: 'The Iconic Tower',
    explain: 'The city has the tallest building in Africa, the Iconic Tower, and a new airport. The Iconic Tower is 385 meters high and has 80 floors. It is made of strong glass and steel. From the top, the writer can see the whole city. People there can find great jobs and have a peaceful life.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'How tall is the Iconic Tower?', options: ['385 meters', '80 meters', '45 meters', '1,000 meters'], answer: 0 },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'How many floors does the Iconic Tower have?', options: ['80', '385', '45', '8'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What is the Iconic Tower made of?', options: ['Strong glass and steel', 'Mud bricks', 'Wood', 'Gold'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'The Iconic Tower is the tallest building in Africa.', answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What can people find in the new city?', options: ['Great jobs and a peaceful life', 'Crowded streets', 'No work', 'Only farms'], answer: 0 }
    ] },
  { id: 'S3', lesson: 4, concept: 'Words in bold and narrative writing',
    explain: 'The city is very smart: it uses technology everywhere. Builders often use strong steel to build towers. We try to reduce crowding to keep us safe, healthy and comfortable. A narrative text in the first person: use “I”, “me”, “my”; give the setting (where the story happens), the goal (what you want to do), a description (use the 5 senses and other adjectives) and an ending. The word “narrative” comes from “narration”: telling a story.',
    variants: [
      { type: 'fill', mode: 'normal', level: 'medium', q: 'The city is very ___. It uses technology everywhere.', options: ['smart', 'crowded', 'quiet'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Builders often use strong ___ to build towers.', options: ['steel', 'cotton', 'soil'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'We try to ___ crowding to keep us safe, healthy, and comfortable.', options: ['reduce', 'build', 'increase'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Which words do we use in a first-person narrative?', options: ['I, me, my', 'he, him, his', 'they, them, their', 'she, her, hers'], answer: 0 },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'The word “narrative” comes from “narration”. What does it mean?', options: ['Telling a story', 'Drawing a map', 'Solving a problem', 'Building a city'], answer: 0 },
      { type: 'term', mode: 'normal', level: 'medium', q: 'In a narrative, the place where the story is happening.', answer: 'Setting', choices: ['Ending', 'Goal', 'Description'] }
    ] },
  { id: 'S4', lesson: 4, boss: true, concept: 'Writing a narrative and the new city (Boss)',
    explain: 'A good story is one that readers can see in their minds (imagine); good writers use a lot of description. A narrative in the first person has: first person, setting, goal setting, description and ending. The New Administrative Capital reduces crowding in Cairo, uses modern technology and has the Iconic Tower.',
    variants: [
      { type: 'order', mode: 'boss', level: 'hard', q: 'Put the parts of a first-person narrative in the order of the Tip.', items: ['Description', 'Setting', 'Ending', 'Goal setting'], answer: [1, 3, 0, 2] },
      { type: 'mc', mode: 'boss', level: 'medium', q: 'In the description of a narrative, we use…', options: ['the 5 senses and other adjectives', 'only numbers', 'only one word', 'a map'], answer: 0 },
      { type: 'mc', mode: 'boss', level: 'medium', q: 'Good writers use a lot of description so that readers can…', options: ['see the story in their minds', 'stop reading', 'count the words', 'skip the ending'], answer: 0 },
      { type: 'build', style: 'sentence', mode: 'boss', level: 'hard', q: 'Put the cards in order.', parts: ['The new city', 'helps reduce', 'crowding in Cairo.'], extra: ['barn', 'quiet'] },
      { type: 'tf', mode: 'boss', level: 'medium', q: 'In a first-person narrative, the ending tells how the story finishes.', answer: 0 }
    ] }
];
})();
