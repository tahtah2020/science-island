/* English · Grade 5 · Term 1 · Unit 1 "Food, Nature, and Culture" · ministry book "English Primary 5", first term 2026/2027 (book pages 7-24)
   One English book for both tracks (subject lang { lang: 'en', ar: 'en' }), so there is no _ar file.
   Lessons: 1 Life Along the Nile (pp 8-10) · 2 Food in the Hot Desert + adverbs of frequency (pp 11-12) · 3 Story Time: The Giving Tree + consonant clusters (pp 13-16)
            4 Writing: Let's Make a Recipe! (pp 17-19) · 5 Think and Create: A Flyer (pp 20-22) · Quick Review and Self-Assessment (pp 23-24, spread over the lessons)
   Idea letters (one per lesson): A, B, C, D, E.  Boss ideas: A5, B6, C6, D5, E4.
   Rules: answers of mc/fill at index 0 (the page shuffles) · one Boss idea per lesson (every variant mode:'boss') · about a third timed (10-20 s, easy recall)
          distractors = real misconceptions · term/fix answers ≤ 18 letters · core and Boss only from the school book.
   Tap picture (english/g5_art.js): nileLife -> crocodile | weeds | insect | fish | bird | river
   Review notes:
   - The listening activities of the book (audio) are asked as reading questions; the audio is not on the site. Open speaking, discussion, "Think" and writing tasks are not asked.
   - Page 8 exercise 3: the gaps are Nile, Crocodiles, hunt, water weeds, insects (the dialogue on page 9 gives "small fish eat water weeds" and "birds eat insects").
   - Page 9 question 3 ("Which animals eat both plants and insects?"): the book prints only the birds sentence (small fish eat plants, big fish eat smaller fish, insects and tiny creatures), so the answer is birds.
   - Page 18 exercise 3 (numbering the Koshari steps) is not asked: the book does not print where "add spicy sauce at the end" goes. The order question uses only the order printed in the text of page 17.
   - Page 16 exercise 3 (fill the cluster in __ink, __ack, __uck, __ant, __ops) has two valid answers (drink/blink, black/crack, crops/drops), so each word is asked with its meaning.
   - Sizes: the book says Koshari needs "1½ cups cooked chickpeas"; the site writes "1½". */
(function () {
window.CHAPTER = { id: 'eg5u1', title: 'Food, Nature, and Culture' };

window.IDEAS = [
  /* ---------- Lesson 1 · Life Along the Nile ---------- */
  { id: 'A1', lesson: 1, concept: 'Animals and plants of the Nile River',
    explain: 'The Nile River is one of the longest rivers in the world. It is home to many different animals, such as crocodiles, fish and birds. Water weeds are plants in the water, and birds eat insects near the river.',
    variants: [
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'The ___ is one of the longest rivers in the world.', options: ['Nile', 'desert', 'pond'], answer: 0 },
      { type: 'term', mode: 'normal', level: 'medium', q: 'The plants in the river that small fish eat.', answer: 'Water weeds' },
      { type: 'term', mode: 'normal', level: 'medium', q: 'Small animals that birds eat near the river.', answer: 'Insects' },
      { type: 'multi', mode: 'normal', level: 'medium', q: 'Which of these live in or near the Nile River? Choose all the correct answers.', options: ['Crocodiles', 'Small fish', 'Birds', 'Penguins'], answer: [0, 1, 2] },
      { type: 'tap', diagram: 'nileLife', mode: 'normal', level: 'easy', q: 'Tap the picture of a crocodile.', answer: 'crocodile' },
      { type: 'tap', diagram: 'nileLife', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap the picture of water weeds.', answer: 'weeds' },
      { type: 'tap', diagram: 'nileLife', mode: 'normal', level: 'easy', q: 'Tap the picture of an insect.', answer: 'insect' },
      { type: 'tap', diagram: 'nileLife', mode: 'normal', level: 'easy', q: 'Tap the picture of the Nile River.', answer: 'river' }
    ] },
  { id: 'A2', lesson: 1, concept: 'What eats what in the Nile',
    explain: 'Small fish eat water weeds. Birds eat small fish, insects and even plants near the river. Big fish eat smaller fish, insects and tiny creatures in the water. Crocodiles eat fish, birds and sometimes larger animals that come near the water.',
    variants: [
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Small fish eat ___.', options: ['water weeds', 'crocodiles', 'big animals'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Big fish eat smaller fish, insects and tiny ___ in the water.', options: ['creatures', 'crocodiles', 'rocks'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What do crocodiles eat?', options: ['Fish, birds and sometimes larger animals', 'Only water weeds', 'Only insects', 'Only small fish'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What do birds near the Nile eat?', options: ['Small fish, insects and plants', 'Only crocodiles', 'Only large animals'], answer: 0 },
      { type: 'match', mode: 'normal', level: 'medium', q: 'Match each animal to its food.', left: ['Small fish', 'Birds', 'Big fish', 'Crocodiles'], right: ['water weeds', 'small fish, insects and plants', 'smaller fish, insects and tiny creatures', 'fish, birds and larger animals'], answer: [0, 1, 2, 3] },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'Big fish in the Nile River eat big animals.', answer: 1 }
    ] },
  { id: 'A3', lesson: 1, concept: 'Animals that eat plants and insects',
    explain: 'Birds eat small fish, insects and even plants near the river. So birds eat both plants and insects.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which animals eat both plants and insects in the river?', options: ['Birds', 'Big fish', 'Crocodiles', 'Small fish'], answer: 0 },
      { type: 'multi', mode: 'normal', level: 'medium', q: 'Which animals eat insects near the Nile? Choose all the correct answers.', options: ['Birds', 'Big fish', 'Small fish', 'Crocodiles'], answer: [0, 1] },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'Small fish in the Nile River eat water weeds.', answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'Birds eat small fish, insects and plants near the river.', answer: 0 },
      { type: 'mc', style: 'story', mode: 'normal', level: 'medium', q: 'Laila sees a bird near the river. Which food is NOT in its meal?', options: ['Big crocodiles', 'Insects', 'Small fish', 'Plants'], answer: 0 }
    ] },
  { id: 'A4', lesson: 1, concept: 'Kings of the Nile, roles and protecting the river',
    explain: 'Not many animals hunt crocodiles, so they are the kings of the Nile. All animals in the river find food to survive. Each animal plays an important role, so we must protect the river.',
    variants: [
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'Crocodiles are hunted by many animals.', answer: 1 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'Crocodiles are the kings of the Nile River.', answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'The Nile River is not important for both animals and people.', answer: 1 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Each animal plays an important ___.', options: ['role', 'game', 'house'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'It is amazing how all animals in the river find food to ___.', options: ['survive', 'hunt', 'protect'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Why do we need to protect the Nile River?', options: ['Each animal plays an important role there', 'Because it is the smallest river', 'Because crocodiles are small', 'Because there are no fish in it'], answer: 0 },
      { type: 'build', style: 'sentence', mode: 'normal', level: 'hard', q: 'Put the cards in order.', parts: ['Each animal', 'plays', 'an important role.'], extra: ['kings', 'insects'] }
    ] },
  { id: 'A5', lesson: 1, boss: true, concept: 'Crocodiles: strong, dangerous and kings of the Nile',
    explain: 'Crocodiles are strong and dangerous. They hunt large animals in or near the water. Not many animals hunt crocodiles, so they are the kings of the Nile.',
    variants: [
      { type: 'fill', mode: 'boss', level: 'medium', q: 'Crocodiles are strong and ___.', options: ['dangerous', 'colorful', 'small'], answer: 0 },
      { type: 'fill', mode: 'boss', level: 'medium', q: 'Crocodiles ___ large animals in or near the water.', options: ['hunt', 'plant', 'drink'], answer: 0 },
      { type: 'term', mode: 'boss', level: 'medium', q: 'These animals are strong and dangerous and hunt large animals in or near the water.', answer: 'Crocodiles' },
      { type: 'mc', mode: 'boss', level: 'medium', q: 'Which sentence is true?', options: ['Crocodiles are the kings of the Nile.', 'Crocodiles are hunted by many animals.', 'Big fish eat big animals.', 'The Nile River is not important.'], answer: 0 },
      { type: 'fix', mode: 'boss', level: 'medium', q: 'Small fish in the river eat insects.', wrong: 'insects', answer: 'water weeds' },
      { type: 'build', style: 'sentence', mode: 'boss', level: 'hard', q: 'Put the cards in order.', parts: ['Crocodiles', 'hunt large animals', 'in or near the water.'], extra: ['water weeds', 'are small'] }
    ] },

  /* ---------- Lesson 2 · Food in the Hot Desert ---------- */
  { id: 'B1', lesson: 2, concept: 'Animals of the desert',
    explain: 'The desert is hot and dry, but many animals live there: camels, snakes, foxes, lizards and owls.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What animals live in the desert?', options: ['Camels, snakes, and foxes', 'Lions, elephants, and giraffes', 'Fish, crocodiles, and turtles'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'The desert is hot and ___, but many animals live there.', options: ['dry', 'wet', 'cold'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'The desert is cold and wet.', answer: 1 },
      { type: 'multi', mode: 'normal', level: 'medium', q: 'Which animals does the text say live in the desert? Choose all the correct answers.', options: ['Snakes', 'Camels', 'Owls', 'Crocodiles'], answer: [0, 1, 2] }
    ] },
  { id: 'B2', lesson: 2, concept: 'What desert animals eat',
    explain: 'Snakes often eat small animals like rats or lizards. Camels eat plants to stay strong. Lizards eat insects, which give them energy.',
    variants: [
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'Snakes often eat small animals, like ___ or lizards.', options: ['rats', 'hippos', 'camels', 'lions'], answer: 0 },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'Camels eat ___.', options: ['plants', 'insects', 'birds', 'lizards'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Lizards eat insects, which give them ___.', options: ['energy', 'water', 'a home', 'shade'], answer: 0 },
      { type: 'match', mode: 'normal', level: 'medium', q: 'Match each desert animal to its food.', left: ['Snakes', 'Camels', 'Lizards'], right: ['small animals like rats or lizards', 'plants', 'insects'], answer: [0, 1, 2] },
      { type: 'fix', mode: 'normal', level: 'medium', q: 'Camels eat insects to stay strong.', wrong: 'insects', answer: 'plants' }
    ] },
  { id: 'B3', lesson: 2, concept: 'Staying cool and keeping nature in balance',
    explain: 'Some animals hide under rocks to stay cool during the day. Others, like owls, come out at night when it is cooler. Each animal has an important role in the desert. They help nature stay in balance.',
    variants: [
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Some animals hide under ___ to stay cool during the day.', options: ['rocks', 'water', 'trees'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'When do owls come out in the desert?', options: ['At night, when it is cooler', 'In the morning', 'At noon', 'All day'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Each animal in the desert has an ___ role to play.', options: ['important', 'easy', 'simple', 'hard'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Animals in the desert help nature stay in ___.', options: ['balance', 'trouble', 'water'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'Some desert animals come out at night when it is cooler.', answer: 0 }
    ] },
  { id: 'B4', lesson: 2, concept: 'Adverbs of frequency',
    explain: 'We use adverbs of frequency to talk about how often something happens: always (100%), usually (90%), often (70%), sometimes (50%), rarely (20%) and never (0%).',
    variants: [
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'We use adverbs of frequency to talk about how often something happens.', answer: 0 },
      { type: 'mc', mode: 'timed', seconds: 12, level: 'easy', q: 'Which adverb means 100%?', options: ['always', 'usually', 'never', 'rarely'], answer: 0 },
      { type: 'mc', mode: 'timed', seconds: 12, level: 'easy', q: 'Which adverb means 0%?', options: ['never', 'rarely', 'sometimes', 'always'], answer: 0 },
      { type: 'match', mode: 'normal', level: 'medium', q: 'Match each adverb to its percentage.', left: ['always', 'usually', 'often', 'sometimes', 'rarely', 'never'], right: ['100%', '90%', '70%', '50%', '20%', '0%'], answer: [0, 1, 2, 3, 4, 5] },
      { type: 'order', mode: 'normal', level: 'medium', q: 'Put the adverbs from the highest to the lowest percentage.', items: ['rarely', 'always', 'sometimes', 'usually', 'never', 'often'], answer: [1, 3, 5, 2, 0, 4] },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Camels ___ eat grass. (90%)', options: ['usually', 'always', 'sometimes', 'rarely'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Snakes ___ eat small animals like rats or lizards. (70%)', options: ['often', 'never', 'rarely', 'always'], answer: 0 }
    ] },
  { id: 'B5', lesson: 2, concept: 'Where the adverb goes',
    explain: 'The adverbs come before the main verb, like eat, play and go, and after the verb “to be”, like am, is and are. Examples: Snakes never eat plants. Lizards are sometimes dangerous.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Choose the correct sentence.', options: ['Lizards are sometimes dangerous.', 'Lizards sometimes are dangerous.', 'Sometimes lizards dangerous are.'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Choose the correct sentence.', options: ['Snakes never eat plants.', 'Snakes eat never plants.', 'Never snakes plants eat.'], answer: 0 },
      { type: 'build', style: 'sentence', mode: 'normal', level: 'hard', q: 'Put the cards in order.', parts: ['Snakes', 'never', 'eat plants.'], extra: ['dangerous', 'are'] },
      { type: 'build', style: 'sentence', mode: 'normal', level: 'hard', q: 'Put the cards in order.', parts: ['Desert animals', 'rarely', 'find food.'], extra: ['water', 'hot'] },
      { type: 'build', style: 'sentence', mode: 'normal', level: 'hard', q: 'Put the cards in order.', parts: ['Camels', 'always', 'store water', 'in their bodies.'], extra: ['rocks', 'is'] },
      { type: 'tf', mode: 'timed', seconds: 12, level: 'medium', q: 'In “Lizards are sometimes dangerous”, the adverb comes after the verb “are”.', answer: 0 }
    ] },
  { id: 'B6', lesson: 2, boss: true, concept: 'Adverbs of frequency in sentences',
    explain: 'Adverbs of frequency come before the main verb and after the verb “to be”: Snakes never eat plants. Lizards are sometimes dangerous.',
    variants: [
      { type: 'fill', mode: 'boss', level: 'medium', q: 'Snakes ___ eat plants. (0%)', options: ['never', 'always', 'usually'], answer: 0 },
      { type: 'fill', mode: 'boss', level: 'medium', q: 'Camels ___ store water in their bodies. (100%)', options: ['always', 'never', 'rarely'], answer: 0 },
      { type: 'fill', mode: 'boss', level: 'hard', q: 'Desert animals ___ find food. (20%)', options: ['rarely', 'usually', 'always'], answer: 0 },
      { type: 'mc', mode: 'boss', level: 'hard', q: 'Which sentence is correct?', options: ['Lizards are often hungry.', 'Lizards often are hungry.', 'Often lizards hungry are.'], answer: 0 },
      { type: 'build', style: 'sentence', mode: 'boss', level: 'hard', q: 'Put the cards in order.', parts: ['Owls', 'usually', 'come out', 'at night.'], extra: ['rocks', 'is'] },
      { type: 'tf', mode: 'boss', level: 'medium', q: 'The adverb “sometimes” means 50%.', answer: 0 }
    ] },

  /* ---------- Lesson 3 · Story Time: The Giving Tree ---------- */
  { id: 'C1', lesson: 3, concept: 'Tree words: crown, shade, trunk and branch',
    explain: 'A crown is a special hat worn by kings or queens. Shade is a dark shadow created when sunlight is blocked by something. A trunk is the main, thick part of a tree supporting its branches and leaves. A branch is a part that grows out from a tree’s trunk, where leaves grow.',
    variants: [
      { type: 'match', mode: 'normal', level: 'medium', q: 'Match each word to its meaning.', left: ['crown', 'shade', 'trunk', 'branch'], right: ['a special hat worn by kings or queens', 'a dark shadow created when sunlight is blocked by something', 'the main, thick part of a tree', 'a part that grows out from a tree’s trunk, where leaves grow'], answer: [0, 1, 2, 3] },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'The queen wore a shiny gold ___ at the ceremony.', options: ['crown', 'shade', 'branch', 'sail'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'We sat under the tree to rest in the ___ on a hot day.', options: ['shade', 'crown', 'sail', 'branch'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'A bird built a nest on a high ___ of the tree.', options: ['branch', 'crown', 'shade', 'sail'], answer: 0 },
      { type: 'term', mode: 'normal', level: 'medium', q: 'The main, thick part of a tree supporting its branches and leaves.', answer: 'Trunk' },
      { type: 'term', mode: 'normal', level: 'medium', q: 'A special hat worn by kings or queens.', answer: 'Crown' }
    ] },
  { id: 'C2', lesson: 3, concept: 'Selfish and care for',
    explain: 'Selfish means caring for oneself only. To care for something means to show interest and concern for it.',
    variants: [
      { type: 'term', mode: 'normal', level: 'medium', q: 'Caring for oneself only.', answer: 'Selfish' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Omar was so ___. He didn’t want to give his toys to anyone.', options: ['selfish', 'careful', 'old', 'cold'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What does “care for” mean?', options: ['To show interest and concern for something', 'To cut something down', 'To keep something for yourself only', 'To travel to another place'], answer: 0 },
      { type: 'mc', style: 'story', mode: 'normal', level: 'medium', q: 'Mona waters her plants and protects them from the sun. What does she do?', options: ['She cares for them', 'She is selfish', 'She wears a crown', 'She builds a branch'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'A selfish person cares for other people only.', answer: 1 }
    ] },
  { id: 'C3', lesson: 3, concept: 'What Tom did with the apple tree',
    explain: 'Tom loved a big, strong apple tree in his garden. He made crowns from its leaves, ate its apples, rested in its shade and climbed its trunk. But Tom never thought about the tree’s feelings or needs. He rarely gave it food or water.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What did Tom use the apple tree for?', options: ['Crowns, apples, shade and climbing', 'Only for firewood', 'Only for selling apples', 'He never used it'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'The apple tree gave the boy everything.', answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'The boy gave the tree water and food every day.', answer: 1 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Tom made ___ from the tree’s leaves.', options: ['crowns', 'apples', 'shade'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'How often did Tom give the tree food or water?', options: ['Rarely', 'Every day', 'Always', 'Usually'], answer: 0 }
    ] },
  { id: 'C4', lesson: 3, concept: 'Tom comes back and cares for the tree',
    explain: 'Tom traveled to another place. Years passed and Tom came back home. The tree looked sad. Its leaves bent, and its branches were weak. Tom realized that he had been selfish. He started to care for the tree, watering it and protecting it from the sun. Slowly, the tree began to become better.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'How did the tree look when Tom came back?', options: ['Sad', 'Happy', 'Full of apples', 'Very big'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'When Tom came back, the tree was strong and healthy.', answer: 1 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'When Tom came back, the tree’s leaves bent and its ___ were weak.', options: ['branches', 'apples', 'crowns'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What did Tom realize when he saw the tree?', options: ['He had been selfish', 'He was lost', 'He was hungry', 'He was tired'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'How did Tom care for the tree?', options: ['He watered it and protected it from the sun', 'He cut its branches', 'He sold its apples', 'He climbed it more'], answer: 0 }
    ] },
  { id: 'C5', lesson: 3, concept: 'Problem, solution and result',
    explain: 'Problem: the boy took more from the tree than he gave. Solution: he helped the tree grow again. Result: the tree became healthy and the boy learned to care for it like it cared for him.',
    variants: [
      { type: 'match', mode: 'normal', level: 'medium', q: 'Match each part of the story.', left: ['Problem', 'Solution', 'Result'], right: ['The boy took more from the tree than he gave.', 'He helped the tree grow again.', 'The tree became healthy and the boy learned to care for it.'], answer: [0, 1, 2] },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What was the problem in the story?', options: ['The boy took more from the tree than he gave', 'The tree fell down in a storm', 'The boy lost his apples', 'The tree did not like the boy'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Tom had a healthy apple tree. The tree gave Tom ___ and Tom played on it.', options: ['apples', 'money', 'water'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Tom took care of the tree. The tree grew ___ again.', options: ['strong', 'weak', 'selfish'], answer: 0 },
      { type: 'build', style: 'sentence', mode: 'normal', level: 'hard', q: 'Put the cards in order.', parts: ['Tom started', 'to care for', 'the tree.'], extra: ['selfish', 'a crown'] }
    ] },
  { id: 'C6', lesson: 3, boss: true, concept: 'The Giving Tree: the whole story',
    explain: 'Tom loved the tree but was selfish and rarely gave it food or water. After years away, he saw the sad tree, realized he had been selfish and cared for it. He learned that taking care of something meant giving back.',
    variants: [
      { type: 'order', mode: 'boss', level: 'hard', q: 'Put the story in order.', items: ['Tom took care of the tree', 'Tom loved a big apple tree', 'Tom traveled to another place', 'Tom came back and the tree looked sad'], answer: [1, 2, 3, 0] },
      { type: 'mc', mode: 'boss', level: 'medium', q: 'What is the moral of the story?', options: ['We should appreciate those who care for us.', 'We should ignore people who help us.', 'We should never travel.'], answer: 0 },
      { type: 'mc', style: 'story', mode: 'boss', level: 'medium', q: 'Why was Tom selfish?', options: ['He took from the tree and rarely gave it food or water', 'He gave the tree too much water', 'He cut the tree down', 'He never visited the garden'], answer: 0 },
      { type: 'fix', mode: 'boss', level: 'medium', q: 'The tree looked happy when Tom came back.', wrong: 'happy', answer: 'sad' },
      { type: 'tf', mode: 'boss', level: 'medium', q: 'Tom learned that taking care of something meant giving back.', answer: 0 },
      { type: 'build', style: 'sentence', mode: 'boss', level: 'hard', q: 'Put the cards in order.', parts: ['Tom learned that', 'taking care of something', 'meant giving back.'], extra: ['selfish', 'a crown'] }
    ] },
  { id: 'C7', lesson: 3, concept: 'Consonant clusters',
    explain: 'A consonant cluster is a sequence of two or more consonant sounds without vowels, such as str- in strong or bl- in black. Clusters can appear at the beginning, middle or end of words. Examples: tree, branches, crocodiles, spring.',
    variants: [
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'A consonant ___ is a sequence of two or more consonant sounds without vowels.', options: ['cluster', 'syllable', 'branch'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Which word starts with a consonant cluster?', options: ['tree', 'apple', 'egg', 'owl'], answer: 0 },
      { type: 'multi', mode: 'normal', level: 'medium', q: 'Which words start with a consonant cluster? Choose all the correct answers.', options: ['plant', 'truck', 'ink', 'apple'], answer: [0, 1] },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'It grows in the soil and has leaves. Which word is it?', options: ['plant', 'pant'], answer: 0 },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'It is a big vehicle that carries goods. Which word is it?', options: ['truck', 'tuck'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: '___ops: plants that farmers grow', options: ['cr', 'dr', 'pl'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: '___ant: a green living thing that grows in the soil', options: ['pl', 'tr', 'bl'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: '___ack: the color of the night sky', options: ['bl', 'cr', 'dr'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'You ___ink water when you are thirsty. Which cluster completes the word?', options: ['dr', 'pl', 'tr'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 12, level: 'medium', q: 'The consonant cluster “str” is in the word strong.', answer: 0 }
    ] },

  /* ---------- Lesson 4 · Writing: Let's Make a Recipe! ---------- */
  { id: 'D1', lesson: 4, concept: 'Koshari and its ingredients',
    explain: 'Koshari is a tasty Egyptian meal with many simple ingredients in one bowl. The main ingredients are 2 cups of white rice, 1 cup of brown lentils, 2 cups of small pasta and 1½ cups of cooked chickpeas. For crispy onions you need 3 large sliced onions and 1 cup of vegetable oil for frying.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What is Koshari?', options: ['A tasty Egyptian meal with many simple ingredients in one bowl', 'A sweet dessert', 'A kind of fish', 'A cold drink'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'You need 2 cups of white ___ for Koshari.', options: ['rice', 'lentils', 'pasta'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'You need 1 cup of brown ___ for Koshari.', options: ['lentils', 'rice', 'chickpeas'], answer: 0 },
      { type: 'multi', mode: 'normal', level: 'medium', q: 'Which are main ingredients of Koshari? Choose all the correct answers.', options: ['White rice', 'Brown lentils', 'Cooked chickpeas', 'Cheese'], answer: [0, 1, 2] },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'How many large sliced onions do you need for the crispy onions?', options: ['3', '1', '2', '5'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which oil is used for frying the onions?', options: ['Vegetable oil', 'Olive oil', 'Butter', 'Water'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'Koshari is a traditional Egyptian food.', answer: 0 }
    ] },
  { id: 'D2', lesson: 4, concept: 'How to make Koshari',
    explain: 'First, cook rice in a pot with water. In another pot, prepare small pasta. Then, boil lentils in water. For the red sauce, fry some chopped garlic in oil, add tomato sauce, vinegar and some spices. For crispy onions, cut them into thin slices and fry them in oil until they turn brown and crunchy. Put the rice in a bowl and add the pasta, lentils and chickpeas. Pour the red sauce all over it and put the crispy onions on top.',
    variants: [
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'First, you need to cook ___ in a pot with water.', options: ['rice', 'onions', 'chickpeas'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Then, boil ___ in water.', options: ['lentils', 'rice', 'onions'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'How do you make the red sauce?', options: ['Fry chopped garlic in oil, add tomato sauce, vinegar and spices', 'Boil it in water with rice', 'Cut it into thin slices', 'Mix lentils and pasta'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'How do you make crispy onions?', options: ['Cut them into thin slices and fry them in oil until brown and crunchy', 'Boil them in water', 'Put them in the rice pot', 'Mix them with vinegar'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What is Dakka made with?', options: ['Garlic and vinegar', 'Rice and water', 'Lentils and oil', 'Tomatoes and onions'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'medium', q: 'Koshari has only one sauce.', answer: 1 },
      { type: 'order', mode: 'normal', level: 'hard', q: 'Put the steps in the order of the recipe.', items: ['Fry the onions until they turn brown and crunchy', 'Cook the rice, the pasta and the lentils', 'Pour the red sauce all over it', 'Put the rice in a bowl and add the pasta and lentils on top', 'Cut the onions into thin slices'], answer: [1, 4, 0, 3, 2] }
    ] },
  { id: 'D3', lesson: 4, concept: 'Sequence words',
    explain: 'When writing a recipe, organize the steps using sequence words like First, Then, After that, Next and Finally.',
    variants: [
      { type: 'term', mode: 'normal', level: 'medium', q: 'First, Then, Next and Finally are ___ words.', answer: 'Sequence' },
      { type: 'multi', mode: 'normal', level: 'medium', q: 'Which of these are sequence words? Choose all the correct answers.', options: ['First', 'Then', 'Finally', 'Banana'], answer: [0, 1, 2] },
      { type: 'mc', mode: 'timed', seconds: 12, level: 'easy', q: 'Which sequence word usually starts the steps?', options: ['First', 'Finally', 'After that'], answer: 0 },
      { type: 'mc', mode: 'timed', seconds: 12, level: 'easy', q: 'Which sequence word usually ends the steps?', options: ['Finally', 'First', 'Next'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'First, cut the onions into thin slices. ___, fry them in oil until they turn brown and crunchy.', options: ['Next', 'Finally', 'First'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: '___, put the rice in a bowl and add the pasta and lentils on top.', options: ['After that', 'Finally', 'First'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: '___, pour the red sauce all over it and put the crispy onions on top.', options: ['Finally', 'First', 'Next'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'First, you need to cook rice in a pot. ___, boil lentils in water.', options: ['Then', 'Finally', 'Before'], answer: 0 }
    ] },
  { id: 'D4', lesson: 4, concept: 'Writing a paragraph about my favorite food',
    explain: 'Choose your favorite food. Think about how it’s made: what happens first and what comes next. Use sequencing words to organize your steps. Write 30-40 words showing the steps. Add a title: “How to Make (Your food name)”. Glue or draw a picture of your favorite food.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'How many words should you write about how to make your favorite food?', options: ['30-40 words', '10-20 words', '100 words', '5 words'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What title should you add to your writing?', options: ['How to Make (Your food name)', 'The Nile River', 'My Restaurant Flyer', 'The Giving Tree'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'You should use sequencing words to organize your steps.', answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'You should glue or draw a picture of your favorite food.', answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Think about how it’s made. What happens ___? What comes next?', options: ['first', 'never', 'rarely'], answer: 0 },
      { type: 'build', style: 'sentence', mode: 'normal', level: 'hard', q: 'Put the cards in order.', parts: ['Use sequencing words', 'to organize', 'your steps.'], extra: ['a crocodile', 'at night'] }
    ] },
  { id: 'D5', lesson: 4, boss: true, concept: 'The Koshari recipe',
    explain: 'Koshari: cook rice, pasta and lentils; make the red sauce and the crispy onions; put everything in a bowl; pour the red sauce on it and put the crispy onions on top. Use sequence words to show the order.',
    variants: [
      { type: 'fill', mode: 'boss', level: 'medium', q: 'The red sauce is made with chopped garlic, oil, tomato sauce, vinegar and some ___.', options: ['spices', 'lentils', 'rice'], answer: 0 },
      { type: 'fill', mode: 'boss', level: 'medium', q: 'Fry the onions in oil until they turn brown and ___.', options: ['crunchy', 'soft', 'cold'], answer: 0 },
      { type: 'mc', mode: 'boss', level: 'medium', q: 'Which sentence has a sequence word?', options: ['First, you need to cook rice in a pot.', 'Koshari is a traditional Egyptian food.', 'You need 3 large sliced onions.', 'Dakka is made with garlic and vinegar.'], answer: 0 },
      { type: 'fix', mode: 'boss', level: 'medium', q: 'Finally, boil the rice in a bowl.', wrong: 'bowl', answer: 'pot' },
      { type: 'order', mode: 'boss', level: 'hard', q: 'Put the sequence words in order, from the start to the end of a recipe.', items: ['Finally', 'First'], answer: [1, 0] },
      { type: 'build', style: 'sentence', mode: 'boss', level: 'hard', q: 'Put the cards in order.', parts: ['Finally,', 'pour the red sauce', 'all over it.'], extra: ['crispy', 'rarely'] }
    ] },

  /* ---------- Lesson 5 · Think and Create: A Flyer ---------- */
  { id: 'E1', lesson: 5, concept: 'The parts of a flyer',
    explain: 'A main heading is the big title. A sub-heading is the smaller title. An image is a photo or drawing. A menu attracts customers. A call to action is an invitation.',
    variants: [
      { type: 'match', mode: 'normal', level: 'medium', q: 'Match each part of a flyer to its job.', left: ['main heading', 'sub-heading', 'image', 'menu', 'call to action'], right: ['the big title', 'the smaller title', 'a photo or drawing', 'attracts customers', 'an invitation'], answer: [0, 1, 2, 3, 4] },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'A main heading is the big ___.', options: ['title', 'menu', 'image'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'A sub-heading is the ___ title.', options: ['smaller', 'bigger', 'only'], answer: 0 },
      { type: 'term', mode: 'normal', level: 'medium', q: 'A photo or a drawing on a flyer.', answer: 'Image' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What attracts customers on a restaurant flyer?', options: ['A menu', 'A glue stick', 'A sub-heading', 'A classmate'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'A call to action is ___.', options: ['an invitation', 'a photo', 'the big title', 'a price'], answer: 0 }
    ] },
  { id: 'E2', lesson: 5, concept: 'The restaurant flyer',
    explain: 'The restaurant flyer has a main heading (FOOD MENU), a sub-heading (Restaurant), images of food, a menu with fast food and sandwiches, and a call to action: “For more information visit our website”. Prices: Cheese burger LE 35, Meat pizza LE 40, Fried chicken LE 50, Grilled chicken LE 20, Sea food LE 30, Mix cheese LE 15.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What is the main heading of the restaurant flyer?', options: ['FOOD MENU', 'Restaurant', 'FAST FOOD', 'SANDWICH'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Which words are the call to action on the flyer?', options: ['For more information visit our website', 'FOOD MENU', 'Cheese burger', 'Restaurant'], answer: 0 },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'How much is the Cheese burger?', options: ['LE 35', 'LE 40', 'LE 50', 'LE 20'], answer: 0 },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'How much is the Fried chicken?', options: ['LE 50', 'LE 35', 'LE 30', 'LE 15'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which item on the menu is the cheapest?', options: ['Mix cheese', 'Grilled chicken', 'Sea food', 'Cheese burger'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 12, level: 'medium', q: 'The Meat pizza is LE 40.', answer: 0 },
      { type: 'table', mode: 'normal', level: 'medium', q: 'Sort the menu items.', poc: 'Item', cols: ['Fast food', 'Sandwich'], items: ['Cheese burger', 'Grilled chicken', 'Meat pizza', 'Mix cheese', 'Fried chicken', 'Sea food'], answer: [0, 1, 0, 1, 0, 1] }
    ] },
  { id: 'E3', lesson: 5, concept: 'Feedback stars',
    explain: 'Make your flyer and ask a classmate for feedback. 1 star = poor, 2 stars = fair, 3 stars = good, 4 stars = very good, 5 stars = excellent.',
    variants: [
      { type: 'match', mode: 'normal', level: 'medium', q: 'Match the stars to the feedback.', left: ['1 star', '2 stars', '3 stars', '4 stars', '5 stars'], right: ['poor', 'fair', 'good', 'very good', 'excellent'], answer: [0, 1, 2, 3, 4] },
      { type: 'mc', mode: 'timed', seconds: 12, level: 'easy', q: '5 stars mean ___.', options: ['excellent', 'poor', 'fair', 'good'], answer: 0 },
      { type: 'mc', mode: 'timed', seconds: 12, level: 'easy', q: '1 star means ___.', options: ['poor', 'excellent', 'very good', 'good'], answer: 0 },
      { type: 'order', mode: 'normal', level: 'medium', q: 'Put the feedback from the lowest to the highest.', items: ['good', 'excellent', 'poor', 'very good', 'fair'], answer: [2, 4, 0, 3, 1] },
      { type: 'mc', style: 'story', mode: 'normal', level: 'medium', q: 'Your classmate gives your flyer 4 stars. What does he think?', options: ['It is very good', 'It is poor', 'It is fair', 'It is excellent'], answer: 0 }
    ] },
  { id: 'E4', lesson: 5, boss: true, concept: 'Making a good flyer',
    explain: 'A good flyer has a main heading, a sub-heading, an image, a menu and a call to action. Ask a classmate for feedback and give stars.',
    variants: [
      { type: 'mc', mode: 'boss', level: 'medium', q: 'On a flyer, “For more information visit our website” is a ___.', options: ['call to action', 'main heading', 'menu', 'image'], answer: 0 },
      { type: 'mc', mode: 'boss', level: 'medium', q: 'On the flyer, “Restaurant” is a ___.', options: ['sub-heading', 'main heading', 'call to action', 'menu'], answer: 0 },
      { type: 'fix', mode: 'boss', level: 'medium', q: 'A sub-heading is the big title.', wrong: 'big', answer: 'smaller' },
      { type: 'tf', mode: 'boss', level: 'medium', q: 'A menu attracts customers.', answer: 0 },
      { type: 'table', mode: 'boss', level: 'hard', q: 'Sort the parts of the flyer.', poc: 'Part', cols: ['Title', 'Other part'], items: ['main heading', 'sub-heading', 'image', 'menu', 'call to action'], answer: [0, 0, 1, 1, 1] },
      { type: 'build', style: 'sentence', mode: 'boss', level: 'hard', q: 'Put the cards in order.', parts: ['A menu', 'attracts', 'customers.'], extra: ['title', 'rarely'] }
    ] }
];
})();
