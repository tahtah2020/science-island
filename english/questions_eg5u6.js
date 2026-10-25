/* English · Grade 5 · Term 1 · Unit 6 "The Talking Earth" (by Jean Craighead George, retold) · ministry book "English Primary 5", first term 2026/2027 (book pages 92-105, and Review 2 p 108)
   One English book for both tracks (subject lang { lang: 'en', ar: 'en' }), so there is no _ar file.
   The book does not split this unit into lessons. The site uses two:
     1 Story Words and Characters: Story Vocabulary (p 93), Definitions and Characters (p 94), Characters ex 1-3 (p 100), Vocabulary ex 4-6 (p 101), Quick Review ex 1 (p 105)
     2 The Story and Its Events: the story (pp 95-99), Events ex 7-8 (p 102), ex 9-10 (p 103), ex 11-12 (p 104), Quick Review ex 2-3 (p 105), Review 2 ex 7 (p 108)
   Idea letters (one per lesson): Y, Z (the last free letters of grade 5).  Boss ideas: Y7, Z8.
   Rules: answers of mc/fill at index 0 (the page shuffles) · one Boss idea per lesson (every variant mode:'boss') · about a third timed (10-20 s, easy recall)
          distractors = real misconceptions · term/fix answers ≤ 18 letters · core and Boss only from the school book.
   Tap picture (english/g5_art.js): everglades6 -> alligator | canoe | owl | splash | swamp | turtle
   Pictures: the owner's illustrations (unit_illustrations.zip, 25 Oct 2026), english/assets/eg_*.jpg (no captions; the corner mark cropped off).
   Review notes:
   - Open "Think" questions (p 100), ex 13 (p 104, write about the journey) and Review 2 ex 8 (a new ending) are not asked.
   - Page 100 ex 1 and p 103 ex 9 (match / number the book's pictures) are asked in words; the book's pictures are not copied.
   - Page 100 ex 3 (code breaker): 9 16 18 15 13 9 19 5 / 20 15 / 11 5 5 16 / 13 25 / 19 3 8 15 15 12 / 3 12 5 1 14 = "I PROMISE TO KEEP MY SCHOOL CLEAN" (decoded with the printed code).
   - Page 102 ex 7 prints the sentence "Billie told the elders that she didn't believe that the Earth could talk" twice; the site uses it once.
   - Page 105 ex 2 item 3 "She promised to teach others to respect the land": the story text never says this, so it is not asked.
   - The moral (Review 2 ex 7) is not printed as one sentence; the site uses the story's own last lines: the Earth talks through nature, everything in nature is connected, and people must take care of it.
   - Page 105 ex 3 is asked as printed: "People should take care of everything in nature." */
(function () {
window.CHAPTER = { id: 'eg5u6', title: 'The Talking Earth' };

window.IDEAS = [
  /* ---------- Lesson 1 · Story Words and Characters ---------- */
  { id: 'Y1', lesson: 1, concept: 'Story vocabulary in pictures',
    explain: 'Story vocabulary: canoe, Everglades, owl, shell, swamp, the Earth, alligator, National Park, scientist, splash. A swamp is a wet, muddy area of land that has a lot of water, trees and plants.',
    variants: [
      { type: 'tap', diagram: 'everglades6', mode: 'normal', level: 'easy', q: 'Tap the alligator.', answer: 'alligator' },
      { type: 'tap', diagram: 'everglades6', mode: 'normal', level: 'easy', q: 'Tap the canoe.', answer: 'canoe' },
      { type: 'tap', diagram: 'everglades6', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap the owl.', answer: 'owl' },
      { type: 'tap', diagram: 'everglades6', mode: 'normal', level: 'easy', q: 'Tap the splash.', answer: 'splash' },
      { type: 'tap', diagram: 'everglades6', mode: 'normal', level: 'medium', q: 'Tap the swamp.', answer: 'swamp' },
      { type: 'tap', diagram: 'everglades6', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap the animal that hides in its shell.', answer: 'turtle' }
    ] },
  { id: 'Y2', lesson: 1, concept: 'Definitions: native, tribe, elders, shelter',
    explain: 'Native: the first person who lived in a place. Tribe: a group of people who live together and share the same language, culture and history. Elders: older people who are wise and respected. Shelter: a safe place that protects someone from bad weather or danger.',
    variants: [
      { type: 'match', mode: 'normal', level: 'medium', q: 'Match the words to their definitions.', left: ['native', 'tribe', 'elders', 'shelter'], right: ['the first person who lived in a place', 'a group of people who share the same language, culture, and history', 'older people who are wise and respected', 'a safe place that protects someone from bad weather or danger'], answer: [0, 1, 2, 3] },
      { type: 'term', mode: 'normal', level: 'medium', q: 'Older people who are wise and respected.', answer: 'Elders', choices: ['Tribe', 'Scientists', 'Natives'] },
      { type: 'term', mode: 'normal', level: 'medium', q: 'A safe place that protects someone from bad weather or danger.', answer: 'Shelter', choices: ['Swamp', 'Canoe', 'Shell'] },
      { type: 'term', mode: 'normal', level: 'medium', q: 'A group of people who live together and share the same language, culture and history.', answer: 'Tribe', choices: ['Elders', 'Family', 'Village'] },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: '“Native” means…', options: ['the first person who lived in a place', 'a visitor from far away', 'an old story', 'a kind of boat'], answer: 0 }
    ] },
  { id: 'Y3', lesson: 1, concept: 'Definitions: survive, attack, struggle, wisdom, disappointed',
    explain: 'Survive: to stay alive, especially in dangerous situations. Attack: to try to hurt someone. Struggle: to have a hard time doing something. Wisdom: using what you know to make good choices. Disappointed: feeling sad because something didn’t happen as expected.',
    variants: [
      { type: 'match', mode: 'normal', level: 'medium', q: 'Match the words to their definitions.', left: ['survive', 'attack', 'struggle', 'wisdom', 'disappointed'], right: ['to stay alive, especially in dangerous situations', 'to try to hurt someone', 'to have a hard time doing something', 'using what you know to make good choices', 'feeling sad because something didn’t happen as expected'], answer: [0, 1, 2, 3, 4] },
      { type: 'term', mode: 'normal', level: 'medium', q: 'To stay alive, especially in dangerous situations.', answer: 'Survive', choices: ['Struggle', 'Attack', 'Pack'] },
      { type: 'term', mode: 'normal', level: 'medium', q: 'Using what you know to make good choices.', answer: 'Wisdom', choices: ['Science', 'Shelter', 'Struggle'] },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'The elders were ___ when Billie said she did not believe them.', options: ['disappointed', 'surviving', 'hooting'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Billie had no shelter in the Everglades, so she struggled to ___.', options: ['survive', 'pack', 'teach', 'attack'], answer: 0 }
    ] },
  { id: 'Y4', lesson: 1, concept: 'Definitions: hoot, the wild, pack, swamp',
    explain: 'Hoot: the sound an owl makes. The wild: a place in nature where animals and plants live freely. Pack: put things together to carry or take with you. Swamp: a wet, muddy area of land that has a lot of water, trees and plants.',
    variants: [
      { type: 'term', mode: 'normal', level: 'medium', q: 'The sound an owl makes.', answer: 'Hoot', choices: ['Splash', 'Hiss', 'Shell'] },
      { type: 'term', mode: 'normal', level: 'medium', q: 'A wet, muddy area of land that has a lot of water, trees and plants.', answer: 'Swamp', choices: ['Desert', 'Shelter', 'Barn'] },
      { type: 'mc', mode: 'normal', level: 'easy', q: '“The wild” is…', options: ['a place in nature where animals and plants live freely', 'a big city', 'a kind of food', 'a school'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Billie ___ her canoe and went into the Everglades.', options: ['packed', 'hooted', 'attacked'], answer: 0 },
      { type: 'tap', diagram: 'everglades6', mode: 'normal', level: 'easy', q: 'Tap the animal that hoots in the trees.', answer: 'owl' }
    ] },
  { id: 'Y5', lesson: 1, concept: 'The characters',
    explain: 'Characters: Billie Wind, Billie’s family and the elders. Billie’s family believed that the Earth could talk and share wisdom. Billie learned how to catch fish, make a fire and find shelter. The elders told Billie to go into the Everglades National Park alone and listen to the Earth.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Who believed that the Earth could talk and share wisdom?', options: ['Billie’s family', 'Billie Wind', 'The scientists', 'The alligators'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Who learned how to catch fish, make a fire, and find shelter?', options: ['Billie Wind', 'The elders', 'Billie’s family', 'The owls'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Who told Billie to go into the Everglades National Park alone and listen to the Earth?', options: ['The elders', 'Billie’s teacher', 'A scientist', 'Billie’s friends'], answer: 0 },
      { type: 'multi', mode: 'normal', level: 'easy', q: 'Who are the characters of the story? Choose all the correct answers.', options: ['Billie Wind', 'Billie’s family', 'The elders', 'The little digger'], answer: [0, 1, 2] },
      { type: 'term', mode: 'normal', level: 'medium', q: 'The people or animals in a story.', answer: 'Characters', choices: ['Setting', 'Moral', 'Events'] }
    ] },
  { id: 'Y6', lesson: 1, concept: 'Vocabulary in the story',
    explain: 'Billie loved science and dreamed of becoming a scientist. She heard owls hooting in the trees. The turtles hid in their shells when danger was near. The swamp was full of strange sounds. Alligators were splashing in the water.',
    variants: [
      { type: 'fill', mode: 'normal', level: 'easy', q: 'Billie loved science and dreamed of becoming a ___ when she grew up.', options: ['scientist', 'driver', 'firefighter', 'police officer'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'Billie saw some ___ hooting in the trees.', options: ['owls', 'turtles', 'dogs', 'alligators'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'The turtles hid in their ___ when danger was near.', options: ['shells', 'seas', 'lakes', 'plants'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'The ___ was full of strange sounds.', options: ['swamp', 'shells', 'hooting'], answer: 0 },
      { type: 'tap', diagram: 'everglades6', mode: 'normal', level: 'easy', q: 'Tap the animal that Billie heard splashing in the water at night.', answer: 'alligator' },
      { type: 'tap', diagram: 'everglades6', mode: 'normal', level: 'easy', q: 'Tap what Billie packed to go into the Everglades.', answer: 'canoe' }
    ] },
  { id: 'Y7', lesson: 1, boss: true, concept: 'Story words and characters (Boss)',
    explain: 'Find the words: scientist, shell, alligator, elders, splash. Code breaker (A = 1 … Z = 26): 9 16 18 15 13 9 19 5 / 20 15 / 11 5 5 16 / 13 25 / 19 3 8 15 15 12 / 3 12 5 1 14 = “I promise to keep my school clean.” The elders are older people who are wise and respected.',
    variants: [
      { type: 'mc', mode: 'boss', level: 'hard', q: 'Crack the code (A = 1, B = 2 … Z = 26): 9 16 18 15 13 9 19 5 · 20 15 · 11 5 5 16 · 13 25 · 19 3 8 15 15 12 · 3 12 5 1 14', options: ['I promise to keep my school clean', 'I promise to help my school team', 'I like to keep my school clean', 'I promise to keep my room clean'], answer: 0 },
      { type: 'fill', mode: 'boss', level: 'medium', q: 'At night, Billie heard alligators ___ in the water.', options: ['splashing', 'hooting', 'packing'], answer: 0 },
      { type: 'fill', mode: 'boss', level: 'medium', q: 'Billie heard owls ___ in the trees.', options: ['hooting', 'splashing', 'shells'], answer: 0 },
      { type: 'table', mode: 'boss', level: 'hard', q: 'Is it a person or an animal in the story?', poc: 'Word', cols: ['People', 'Animals'], items: ['elders', 'alligator', 'scientist', 'owl', 'Billie’s family', 'turtle'], answer: [0, 1, 0, 1, 0, 1] },
      { type: 'tap', diagram: 'everglades6', mode: 'boss', level: 'medium', q: 'Tap the wet, muddy land with a lot of water, trees and plants.', answer: 'swamp' }
    ] },

  /* ---------- Lesson 2 · The Story and Its Events ---------- */
  { id: 'Z1', lesson: 2, concept: 'Billie Wind and her family',
    explain: 'Billie Wind was a young Native American girl who lived in Florida. She loved science and dreamed of becoming a scientist when she grew up. But her family believed that the Earth could “talk” and share wisdom with those who listened to it. They said the wind, the water and the animals all had something to teach. Billie did not believe this. She thought these were just old stories with no real meaning.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Where did Billie Wind live?', options: ['In Florida', 'In Egypt', 'In a desert', 'In a big city in Africa'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'Billie Wind was a young Egyptian girl.', answer: 1 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'Billie dreamed of becoming a scientist.', answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'At first, Billie didn’t believe that the Earth could talk.', answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What did Billie think about her family’s belief?', options: ['They were just old stories with no real meaning', 'It was a science fact', 'It was a funny game', 'It was a new idea'], answer: 0 },
      { type: 'multi', mode: 'normal', level: 'medium', q: 'Her family said these things had something to teach. Choose all the correct answers.', options: ['The wind', 'The water', 'The animals', 'The cars'], answer: [0, 1, 2] }
    ] },
  { id: 'Z2', lesson: 2, concept: 'Into the Everglades',
    explain: 'One day, Billie told the elders of her tribe that she did not believe that the Earth could talk. The elders were disappointed. They told Billie that if she did not believe them, she should go into the Everglades National Park alone and listen to the Earth. Only then would she understand. Billie did not want to go, but she had no choice. She packed her canoe and went into the Everglades.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Why did the elders send Billie into the Everglades?', options: ['To listen to the Earth and understand', 'To catch alligators', 'To become a scientist', 'To find gold'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'How did the elders feel when Billie said she did not believe them?', options: ['Disappointed', 'Happy', 'Excited', 'Afraid'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'Billie went to the desert to listen to the Earth.', answer: 1 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'Billie wanted very much to go into the Everglades.', answer: 1 },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'How did Billie travel into the Everglades?', options: ['In her canoe', 'By car', 'By plane', 'On a big ship'], answer: 0 }
    ] },
  { id: 'Z3', lesson: 2, concept: 'Afraid in the swamp',
    explain: 'At first, Billie struggled to survive in the Everglades. She had no shelter, no food and no one to help her. The swamp was full of strange sounds, and she felt afraid. At night, she heard alligators splashing in the water and owls hooting in the trees. She wished she was back home, safe and warm. But slowly, she started to pay attention to the world around her.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'How did Billie feel when she was alone in the Everglades?', options: ['Afraid', 'Bored', 'Angry', 'Proud'], answer: 0 },
      { type: 'multi', mode: 'normal', level: 'medium', q: 'What did Billie not have at first? Choose all the correct answers.', options: ['Shelter', 'Food', 'Someone to help her', 'A canoe'], answer: [0, 1, 2] },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'Billie heard hippos splashing in the water at night.', answer: 1 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What did Billie wish at night?', options: ['She was back home, safe and warm', 'She had a bigger canoe', 'She was a scientist', 'She could see an owl'], answer: 0 }
    ] },
  { id: 'Z4', lesson: 2, concept: 'Learning from the animals',
    explain: 'Billie watched the animals closely and saw how they survived. The alligators waited patiently for their food instead of wasting energy. The turtles hid in their shells when danger was near. The birds warned each other when an animal came to attack. Billie realized that nature had its own way of teaching. She learned how to catch fish, make a fire and find shelter, just like the animals did.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What did the alligators do?', options: ['They waited patiently for their food', 'They hid in their shells', 'They warned each other', 'They hooted in the trees'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What did the birds do when an animal came to attack?', options: ['They warned each other', 'They hid in shells', 'They waited for food', 'They splashed in the water'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'Turtles hid in their shells when danger was near.', answer: 0 },
      { type: 'multi', mode: 'normal', level: 'medium', q: 'What did Billie learn to do? Choose all the correct answers.', options: ['Catch fish', 'Make a fire', 'Find shelter', 'Fly like a bird'], answer: [0, 1, 2] },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'Billie realized that nature had its own way of ___.', options: ['teaching', 'hooting', 'packing'], answer: 0 },
      { type: 'tap', diagram: 'everglades6', mode: 'normal', level: 'medium', q: 'Tap the animal that waited patiently for its food instead of wasting energy.', answer: 'alligator' }
    ] },
  { id: 'Z5', lesson: 2, concept: 'The Earth did talk',
    explain: 'After many days in the wild, Billie Wind was no longer afraid. She learned how to survive, but more importantly, she learned how to listen. The Earth did talk, not with words, but through the sounds of the wind, the movements of animals and the changes in the land. Everything in nature was connected, and if people did not take care of it, the balance would be broken.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What lesson did Billie learn from nature?', options: ['The Earth talks through nature, not with words', 'The Earth talks with words', 'Nature has nothing to teach', 'Animals are dangerous'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'Everything in nature was connected.', answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'Billie didn’t learn anything at the end of her journey.', answer: 1 },
      { type: 'multi', mode: 'normal', level: 'medium', q: 'How did the Earth talk? Choose all the correct answers.', options: ['Through the sounds of the wind', 'Through the movements of animals', 'Through the changes in the land', 'With words'], answer: [0, 1, 2] },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What would happen if people did not take care of nature?', options: ['The balance would be broken', 'Nothing would change', 'The Earth would talk with words', 'The animals would leave'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What should people do to help nature?', options: ['Take care of everything in nature', 'Harm nature', 'All be scientists', 'Stay away from it'], answer: 0 }
    ] },
  { id: 'Z6', lesson: 2, concept: 'Put the events in order',
    explain: 'Beginning: Billie didn’t believe that the Earth could talk; she told the elders. Middle: Billie went into the Everglades alone; at first she was scared, then she watched the animals and learned how they survive. End: Billie understood that nature could talk through the wind, animals and nature.',
    variants: [
      { type: 'order', mode: 'normal', level: 'hard', q: 'Put the events in order.', items: ['Billie felt afraid when she first stayed alone in the Everglades.', 'Billie told the elders that she didn’t believe that the Earth could talk.', 'Billie realized that the Earth talks through nature, not with words.', 'Billie went to the Everglades to listen to the Earth.'], answer: [1, 3, 0, 2] },
      { type: 'order', mode: 'normal', level: 'hard', q: 'Put the events in order.', items: ['Billie learned how to catch fish and make fire.', 'Billie started to listen to the world around her.', 'Billie felt afraid in the Everglades.'], answer: [2, 1, 0] },
      { type: 'table', mode: 'normal', level: 'medium', q: 'Beginning, middle or end?', poc: 'Event', cols: ['Beginning', 'Middle', 'End'], items: ['Billie didn’t believe that the Earth could talk.', 'Billie went into the Everglades alone and watched the animals.', 'Billie understood that nature could talk.'], answer: [0, 1, 2] },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which event happened at the beginning of the story?', options: ['Billie’s family believed the wind, the water and the animals had something to teach', 'Billie learned how to catch fish', 'Billie was no longer afraid', 'Billie understood that the Earth talks'], answer: 0 }
    ] },
  { id: 'Z7', lesson: 2, concept: 'The summary and the story elements',
    explain: 'Billie Wind was a young Native American girl who loved science. She did not believe that the Earth could “talk” like the elders said. They sent her to the Everglades alone. At first, Billie struggled, but she learned from the animals. She heard alligators splashing in the water. In the end, Billie realized that the Earth did talk in a different way. She learned how to catch fish and make fire like the animals. Story elements: characters (the people or animals in a story), setting (the time and place where a story happens) and moral (the lesson or message in a story).',
    variants: [
      { type: 'fill', mode: 'normal', level: 'easy', q: 'She did not believe that the Earth could “talk” like the ___ said.', options: ['elders', 'alligators', 'Everglades'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'They sent her to the ___ alone.', options: ['Everglades', 'elders', 'Earth'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'In the end, Billie realized that the ___ did talk in a different way.', options: ['Earth', 'elders', 'alligators'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'She learned how to ___ fish and make fire like the animals.', options: ['catch', 'pack', 'hoot'], answer: 0 },
      { type: 'term', mode: 'normal', level: 'medium', q: 'The time and place where a story happens.', answer: 'Setting', choices: ['Moral', 'Characters', 'Ending'] },
      { type: 'term', mode: 'normal', level: 'medium', q: 'The lesson or message in a story.', answer: 'Moral', choices: ['Setting', 'Characters', 'Plot'] }
    ] },
  { id: 'Z8', lesson: 2, boss: true, concept: 'The Talking Earth (Boss)',
    explain: 'Billie didn’t believe that the Earth could talk. She went into the Everglades and realized that nature had its own way of teaching. The setting of the story is the Everglades National Park in Florida. The Earth talks through the wind, the animals and the land, and people must take care of nature.',
    variants: [
      { type: 'fill', mode: 'boss', level: 'medium', q: 'Billie didn’t believe that ___.', options: ['the Earth could talk', 'nature had its own way of teaching', 'respect the land'], answer: 0 },
      { type: 'fill', mode: 'boss', level: 'medium', q: 'She went into the Everglades and realized that ___.', options: ['nature had its own way of teaching', 'the Earth could not talk', 'respect the land'], answer: 0 },
      { type: 'mc', mode: 'boss', level: 'medium', q: 'What is the setting of the story?', options: ['The Everglades National Park in Florida', 'A village in Egypt', 'The New Administrative Capital', 'The ocean shore'], answer: 0 },
      { type: 'order', mode: 'boss', level: 'hard', q: 'Put the story in order.', items: ['Billie learned how to catch fish and make a fire.', 'Billie packed her canoe.', 'The elders were disappointed.', 'Billie was no longer afraid and learned how to listen.'], answer: [2, 1, 0, 3] },
      { type: 'build', style: 'sentence', mode: 'boss', level: 'hard', q: 'Put the cards in order.', parts: ['Everything', 'in nature', 'was connected.'], extra: ['words', 'afraid'] },
      { type: 'tf', mode: 'boss', level: 'medium', q: 'The Earth talked to Billie with words.', answer: 1 }
    ] }
];
})();
