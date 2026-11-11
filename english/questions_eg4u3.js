/* English · Grade 4 · Term 1 · Unit 3 "Animals in Our World" · ministry book "English Primary 4", first term 2026/2027 (book pages 39-56, Review 1 pp 57-60)
   One English book for both tracks (subject lang { lang: 'en', ar: 'en' }), so there is no _ar file.
   Lessons: 1 Let's Meet the Animals! (pp 40-42) · 2 Taking Care of Animals + comparative adjectives (pp 43-45)
            3 Story Time: The Old Lion and the Fox + blends /fr/ /dr/ /pl/ (pp 46-49) · 4 Writing: A Research Report, endangered animals (pp 50-53)
            5 Think and Create: A Collage (p 54). Quick Review and Self-Assessment (pp 55-56) and the animal parts of Review 1 (pp 57-59) are spread over the lessons.
   Idea letters (one per lesson): K, L, M, N, O.  Boss ideas: K6, L7, M8, N4, O3.
   Every phrasing has a hint (owner rule, 6 Nov 2026) that points to the text or the rule, never the answer.
   Pictures: the owner's Gemini pictures (11 Nov 2026) cut into english/assets/a4_*.webp; tap pictures animals6, actions6, care6, story3, blends6 and
     single pictures with fig 'photo' (q.pic.src) are in english/g4_art.js. The footprints drawing (all tracks go into the cave) is drawn in code.
   Review notes:
   - Listening tasks (p 41 "Listen again and answer", p 42 "Listen and circle", p 49 blends) are asked from the printed text and pictures.
   - Open tasks are not asked: p 40 "point and circle", p 42 ex 9 short story, p 44 ex 6 role-play, p 45 ex 8 "make sentences" (no printed answer),
     p 47 "Do you think all animals are friendly?", p 48 ex 8 discussion, p 51-53 writing the report and drawing, p 54 making the collage, "Think" boxes.
   - p 44 "What do lions need?": the text says lions eat a lot of food to stay stronger (asked that way).
   - p 55 "What is the setting?": the summary says "an old lion in a forest" (answer: a forest); "Underline the moral" is asked as "choose the moral".
   - Review 1 items about senses (unit 1) and helping (unit 2) are not repeated here; p 58 present simple items are in unit 2. */
(function () {
window.CHAPTER = { id: 'eg4u3', title: 'Animals in Our World' };
const ph = (...src) => ({ src, label: 'A picture for the question' });

window.IDEAS = [
  /* ---------- Lesson 1 · Let's Meet the Animals! (pages 40-42, Quick Review p 55) ---------- */
  { id: 'K1', lesson: 1, concept: 'Animal names: lion, monkey, elephant, giraffe, zebra, bear',
    explain: 'The six animals of the unit: lion, monkey, elephant, giraffe, zebra and bear.',
    variants: [
      { type: 'tap', diagram: 'animals6', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap the elephant.', answer: 'elephant', hint: 'It is big and gray with a long trunk.' },
      { type: 'tap', diagram: 'animals6', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap the giraffe.', answer: 'giraffe', hint: 'It has a very long neck.' },
      { type: 'tap', diagram: 'animals6', mode: 'normal', level: 'easy', q: 'Tap the zebra.', answer: 'zebra', hint: 'It is black and white.' },
      { type: 'tap', diagram: 'animals6', mode: 'normal', level: 'easy', q: 'Tap the monkey.', answer: 'monkey', hint: 'It is small and has a long tail.' },
      { type: 'mc', fig: 'photo', pic: ph('a4_lion'), mode: 'normal', level: 'easy', q: 'Look and choose. What is this animal?', options: ['lion', 'bear', 'monkey', 'zebra'], answer: 0, hint: 'Look at its big mane and yellow fur.' },
      { type: 'mc', fig: 'photo', pic: ph('a4_bear'), mode: 'normal', level: 'medium', q: 'Look and choose. What is this animal?', options: ['bear', 'lion', 'elephant', 'monkey'], answer: 0, hint: 'It is brown with thick fur.' }
    ] },
  { id: 'K2', lesson: 1, concept: 'Describing the animals (p 40)',
    explain: 'The giraffe has a spotted coat and eats leaves from tall trees. The bear has thick fur and sharp claws and catches fish. The monkey is small, has a long tail and climbs trees. The zebra has a striped coat and runs in groups. The lion has yellow fur and hunts animals at night. The elephant is big and gray and uses its trunk to spray water on its body.',
    variants: [
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'It has a striped coat. It runs in groups. What is it?', options: ['The zebra', 'The giraffe', 'The bear', 'The lion'], answer: 0, hint: 'Striped means it has lines.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'It is big and gray. It uses its trunk to spray water on its body. What is it?', options: ['The elephant', 'The bear', 'The zebra', 'The monkey'], answer: 0, hint: 'Which animal has a trunk?' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'It is small and has a long tail. It climbs trees. What is it?', options: ['The monkey', 'The giraffe', 'The lion', 'The elephant'], answer: 0, hint: 'It lives in the trees.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'It has a spotted coat. It eats leaves from tall trees. What is it?', options: ['The giraffe', 'The zebra', 'The lion', 'The bear'], answer: 0, hint: 'Its long neck reaches high leaves.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'It has yellow fur. It hunts animals at night. What is it?', options: ['The lion', 'The monkey', 'The zebra', 'The elephant'], answer: 0, hint: 'It is the king of the jungle.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'It has thick fur and sharp claws. It catches fish. What is it?', options: ['The bear', 'The lion', 'The giraffe', 'The monkey'], answer: 0, hint: 'It is big and brown.' }
    ] },
  { id: 'K3', lesson: 1, concept: 'What animals do: drinks, climbs, runs, catches (p 42)',
    explain: 'The elephant drinks lots of water. The monkey climbs trees. The zebra runs in groups. The bear catches fish.',
    variants: [
      { type: 'tap', diagram: 'actions6', mode: 'normal', level: 'easy', q: 'The monkey climbs trees. Tap the picture.', answer: 'climb', hint: 'Look for a monkey on a tree.' },
      { type: 'tap', diagram: 'actions6', mode: 'normal', level: 'easy', q: 'The bear catches fish. Tap the picture.', answer: 'fish', hint: 'Look for a river.' },
      { type: 'tap', diagram: 'actions6', mode: 'timed', seconds: 15, level: 'easy', q: 'The zebras run in groups. Tap the picture.', answer: 'run', hint: 'Look for more than one zebra.' },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'The elephant ___ lots of water.', options: ['drinks', 'runs', 'climbs'], answer: 0, hint: 'What do we do with water?' },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'The monkey ___ trees.', options: ['climbs', 'drinks', 'catches'], answer: 0, hint: 'It goes up the tree.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'The zebra ___ in groups.', options: ['runs', 'catches', 'climbs'], answer: 0, hint: 'Zebras move fast together.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'The bear ___ fish.', options: ['catches', 'climbs', 'runs'], answer: 0, hint: 'It takes the fish from the river.' }
    ] },
  { id: 'K4', lesson: 1, concept: 'A Day at the Forest Park (p 41)',
    explain: 'Nadia’s dad works as a forest guide at the forest park. He shows visitors the animals. Nadia sometimes goes with him. Visitors see elephants drinking water, monkeys climbing trees, lions and giraffes. Lions often hunt at night and sleep during the day. Giraffes eat leaves from tall trees. Omar knows this from a TV program about animals.',
    variants: [
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'What does Nadia’s dad do at the forest park?', options: ['He works as a forest guide.', 'He works as a vet.', 'He sells food.', 'He works as a teacher.'], answer: 0, hint: 'He shows visitors the animals.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'When do lions often hunt?', options: ['At night', 'In the morning', 'At noon', 'Every day at school'], answer: 0, hint: 'They sleep during the day.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What do giraffes eat?', options: ['Leaves from tall trees', 'Fish', 'Meat', 'Grass from the river'], answer: 0, hint: 'Their long necks reach up high.' },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'Nadia always goes with her dad to the forest park.', answer: 1, hint: 'Nadia says: “Sometimes.”' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'How does Omar know all of this?', options: ['He watches a TV program about animals.', 'His dad is a forest guide.', 'He reads it in a book.', 'He works at the zoo.'], answer: 0, hint: 'Read Omar’s last but one answer.' },
      { type: 'tf', mode: 'timed', seconds: 12, level: 'easy', q: 'Visitors see elephants drinking water at the forest park.', answer: 0, hint: 'Read Nadia’s answer: Lots of them!' }
    ] },
  { id: 'K5', lesson: 1, concept: 'Adjectives: striped, heavy, thick, long; riddles',
    explain: 'The elephant has a heavy trunk. The monkey has a long tail. The bear has thick fur. The zebra has a striped coat. “I’m tall and have a long neck; I eat leaves from trees up high” = a giraffe. “I’m the king of the jungle land; I often hunt at night” = a lion.',
    variants: [
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'The zebra has a ___ coat.', options: ['striped', 'heavy', 'thick'], answer: 0, hint: 'Black and white lines.' },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'The monkey has a ___ tail.', options: ['long', 'striped', 'heavy'], answer: 0, hint: 'Look at the monkey’s curly tail.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'The bear has ___ fur.', options: ['thick', 'striped', 'long'], answer: 0, hint: 'Bears stay warm with lots of fur.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'The elephant has a ___ trunk.', options: ['heavy', 'striped', 'thick'], answer: 0, hint: 'It is big and weighs a lot.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'I’m tall and have a long neck; I eat leaves from trees up high. What am I?', options: ['A giraffe', 'A lion', 'A bear', 'A zebra'], answer: 0, hint: 'Think of the longest neck.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'I’m the king of the jungle land; I often hunt at night. What am I?', options: ['A lion', 'A monkey', 'An elephant', 'A giraffe'], answer: 0, hint: 'It has a big mane.' }
    ] },
  { id: 'K6', lesson: 1, boss: true, concept: 'Animals and their descriptions',
    explain: 'giraffe: spotted coat, eats leaves from tall trees · bear: thick fur, sharp claws, catches fish · monkey: small, long tail, climbs trees · zebra: striped coat, runs in groups · lion: yellow fur, hunts at night · elephant: big and gray, sprays water with its trunk.',
    variants: [
      { type: 'match', mode: 'boss', level: 'hard', q: 'Match the animals to their description.', left: ['The giraffe', 'The bear', 'The monkey', 'The zebra', 'The lion', 'The elephant'], right: ['It has a spotted coat.', 'It has thick fur and sharp claws.', 'It is small and has a long tail.', 'It has a striped coat.', 'It has yellow fur.', 'It is big and gray.'], answer: [0, 1, 2, 3, 4, 5], hint: 'Start with the easy ones: striped and gray.' },
      { type: 'build', style: 'sentence', mode: 'boss', level: 'hard', q: 'Put the cards in order.', parts: ['The lion', 'hunts animals', 'at night.'], extra: ['hunt animals', 'in the morning'], hint: 'The lion is one animal, so the verb takes -s.' },
      { type: 'tap', diagram: 'actions6', mode: 'boss', level: 'medium', q: 'It uses its trunk to spray water on its body. Tap the picture.', answer: 'spray', hint: 'Look for water.' }
    ] },

  /* ---------- Lesson 2 · Taking Care of Animals (pages 43-45, Quick Review p 55, Review 1 pp 58-59) ---------- */
  { id: 'L1', lesson: 2, concept: 'Who helps animals: owners, vets, forest officers',
    explain: 'Owners have pets or animals at home. Vets often check animals’ health. Forest officers work hard to protect animals and their homes.',
    variants: [
      { type: 'tap', diagram: 'care6', mode: 'normal', level: 'easy', q: 'A vet checks a dog’s health. Tap the picture.', answer: 'vet', hint: 'Look for a stethoscope.' },
      { type: 'tap', diagram: 'care6', mode: 'normal', level: 'medium', q: 'A forest officer protects animals and their homes. Tap the picture.', answer: 'officer', hint: 'Look for trees and a green uniform.' },
      { type: 'match', mode: 'normal', level: 'medium', q: 'Read and match.', left: ['They have pets or animals at home.', 'They often check animals’ health.', 'They work hard to protect animals and their homes.'], right: ['owners', 'vets', 'forest officers'], answer: [0, 1, 2], hint: 'A vet is an animal doctor.' },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'Who often checks the health of zoo animals?', options: ['Vets', 'Tourists', 'Owners of shops', 'Students'], answer: 0, hint: 'They are animal doctors.' }
    ] },
  { id: 'L2', lesson: 2, concept: 'Pets need daily care (p 43)',
    explain: 'Pets need daily care from their owners. Dogs need exercise. Rabbits eat fresh vegetables. Birds need cleaner cages than other animals.',
    variants: [
      { type: 'tap', diagram: 'care6', mode: 'timed', seconds: 15, level: 'easy', q: 'Dogs need exercise. Tap the picture.', answer: 'walkdog', hint: 'Look for a walk.' },
      { type: 'tap', diagram: 'care6', mode: 'normal', level: 'easy', q: 'Rabbits eat fresh vegetables. Tap the picture.', answer: 'rabbitveg', hint: 'Look for a carrot.' },
      { type: 'tap', diagram: 'care6', mode: 'normal', level: 'easy', q: 'Birds need clean cages. Tap the picture.', answer: 'birdcage', hint: 'A bird lives in it at home.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Pets need ___ care from their owners.', options: ['daily', 'weekly', 'monthly', 'yearly'], answer: 0, hint: 'Every day.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What do pets need? (Review 1)', options: ['Daily care, exercise and fresh food', 'Only toys', 'A big city', 'Nothing'], answer: 0, hint: 'Dogs and rabbits need care every day.' }
    ] },
  { id: 'L3', lesson: 2, concept: 'Zoo animals and wild animals (p 43)',
    explain: 'Zoo animals need special attention: elephants need bigger spaces than monkeys, lions eat a lot of food to stay stronger, giraffes need taller trees, and vets often check their health. Wild animals’ homes are getting smaller because of new cities. They need clean water and safe places to live.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Elephants need ___ than monkeys.', options: ['bigger spaces', 'smaller spaces', 'cleaner water', 'taller trees'], answer: 0, hint: 'Elephants are very big.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Wild animals need ___ and safe homes to live well.', options: ['clean water', 'bigger cities', 'hotter food', 'smaller cages'], answer: 0, hint: 'Read the part about wild animals.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Why are wild animals’ homes getting smaller?', options: ['Because of new cities', 'Because of the rain', 'Because of the vets', 'Because animals are bigger'], answer: 0, hint: 'People build more and more.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Why do lions eat a lot of food?', options: ['To stay stronger than other animals', 'To sleep at night', 'To climb trees', 'To swim'], answer: 0, hint: 'Read the sentence about lions in the zoo.' },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Giraffes need ___ trees to reach their food.', options: ['taller', 'shorter', 'cleaner'], answer: 0, hint: 'Their food is up high.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: '“Wild animals face challenges, like their homes getting smaller. They also need clean water.” What does “They” refer to? (Review 1)', options: ['wild animals', 'zoo animals', 'pets', 'habitats'], answer: 0, hint: 'Look at the sentence just before it.' }
    ] },
  { id: 'L4', lesson: 2, concept: 'Being kind to animals',
    explain: 'Everyone can help protect animals by showing kindness and caring for them. Small acts of kindness make our world better. Being kind to animals teaches us to be better people.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Everyone can help protect animals by ___.', options: ['showing kindness and caring for them', 'keeping them in zoos', 'avoiding them', 'feeding them only once a week'], answer: 0, hint: 'Being kind is the answer.' },
      { type: 'tf', mode: 'timed', seconds: 12, level: 'easy', q: 'Small acts of kindness make our world better.', answer: 0, hint: 'Read the last part of the text.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Why is being kind to animals important?', options: ['It teaches us to be better people.', 'It makes animals bigger.', 'It makes cities bigger.', 'It makes us faster.'], answer: 0, hint: 'Read: Being kind to animals teaches us…' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Animals need our help to stay ___ and safe. (Review 1)', options: ['healthy', 'sad', 'hungry', 'angry'], answer: 0, hint: 'The first sentence of the text.' }
    ] },
  { id: 'L5', lesson: 2, concept: 'Comparative adjectives: -er and -r',
    explain: 'We use comparative adjectives to compare two people, things or animals. Short adjectives add -er: short → shorter, clean → cleaner (A zebra is shorter than a giraffe). If the adjective ends in -e, add -r: safe → safer (Cats are safer than lions).',
    variants: [
      { type: 'mc', fig: 'photo', pic: ph('a4_zebra', 'a4_giraffe'), mode: 'normal', level: 'easy', q: 'A zebra is ___ than a giraffe.', options: ['shorter', 'taller', 'shortest', 'more short'], answer: 0, hint: 'Look at the two pictures. The giraffe has a very long neck.' },
      { type: 'mc', fig: 'photo', pic: ph('a4_cat', 'a4_lion'), mode: 'normal', level: 'medium', q: 'Cats are ___ than lions.', options: ['safer', 'safeer', 'saffer', 'safe'], answer: 0, hint: 'safe ends in -e, so add only -r.' },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'The weather today is ___ than yesterday. (cold)', options: ['colder', 'coldier', 'coldr'], answer: 0, hint: 'Add -er.' },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'He is ___ than his brother. (tall)', options: ['taller', 'tallier', 'talller'], answer: 0, hint: 'Add -er.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'We use comparative adjectives to compare ___.', options: ['two people, things or animals', 'one thing only', 'only colors', 'only numbers'], answer: 0, hint: 'A comparative compares two.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'The music is ___ than the conversation. (loud)', options: ['louder', 'loudier', 'loudder'], answer: 0, hint: 'loud is short: add -er.' }
    ] },
  { id: 'L6', lesson: 2, concept: 'Comparatives: double the consonant, y → ier',
    explain: 'If an adjective ends in a vowel and a consonant, double the consonant and add -er: big → bigger (Bears are bigger than dogs). If it ends in a consonant and -y, change -y to -i and add -er: healthy → healthier (Rabbits are healthier than other animals).',
    variants: [
      { type: 'mc', fig: 'photo', pic: ph('a4_bear', 'a4_dog'), mode: 'normal', level: 'easy', q: 'Bears are ___ than dogs.', options: ['bigger', 'biger', 'bigest', 'more big'], answer: 0, hint: 'big: double the g, then add -er.' },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'Elephants are ___ than monkeys. (big)', options: ['bigger', 'biger', 'bigier'], answer: 0, hint: 'Double the last letter.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Rabbits are ___ than other animals. (healthy)', options: ['healthier', 'healthyer', 'healthyier'], answer: 0, hint: 'Change -y to -i, then add -er.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Marwa is ___ than her sister. (lazy)', options: ['lazier', 'lazyer', 'lazzier'], answer: 0, hint: 'lazy ends in -y.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Eating vegetables is ___ than eating junk food. (healthy)', options: ['healthier', 'healthyer', 'more healthy'], answer: 0, hint: '-y becomes -ier.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'His house is ___ than mine. (big)', options: ['bigger', 'biger', 'bigest'], answer: 0, hint: 'big: vowel + consonant.' }
    ] },
  { id: 'L7', lesson: 2, boss: true, concept: 'Comparing animals and things',
    explain: 'A mouse is smaller than a rabbit. A cheetah is faster than a turtle. The cat is smaller than the dog. The red apple is bigger than the green apple. The boy is taller than the girl.',
    variants: [
      { type: 'mc', fig: 'photo', pic: ph('a4_mouse', 'a4_rabbit'), mode: 'boss', level: 'hard', q: 'A mouse is ___ than a rabbit.', options: ['smaller', 'bigger', 'smallier', 'smalller'], answer: 0, hint: 'A mouse is tiny. small → add -er.' },
      { type: 'mc', fig: 'photo', pic: ph('a4_cheetah', 'a4_turtle'), mode: 'boss', level: 'hard', q: 'A cheetah is ___ than a turtle.', options: ['faster', 'slower', 'fastier', 'more fast'], answer: 0, hint: 'The cheetah runs; the turtle is slow.' },
      { type: 'mc', fig: 'photo', pic: ph('a4_cat', 'a4_dog'), mode: 'boss', level: 'hard', q: 'The cat is ___ than the dog. (small)', options: ['smaller', 'smallest', 'smallier', 'more small'], answer: 0, hint: 'Comparing two animals: add -er.' },
      { type: 'table', mode: 'boss', level: 'hard', q: 'Sort the comparatives by their rule.', poc: 'Word', cols: ['add -er / -r', 'double + -er', 'y → -ier'], items: ['cleaner', 'safer', 'bigger', 'healthier', 'lazier', 'taller'], answer: [0, 0, 1, 2, 2, 0], hint: 'Look at the last letters of each word.' }
    ] },

  /* ---------- Lesson 3 · Story Time: The Old Lion and the Fox + blends (pages 46-49, Quick Review p 55) ---------- */
  { id: 'M1', lesson: 3, concept: 'The lion’s trick',
    explain: 'An old lion couldn’t hunt anymore. He was too weak to catch animals for food, so he thought of a clever trick. He went into his cave and pretended to be very sick, and asked the animals to visit him. One by one the animals went into his cave, but none of them came out: the lion was catching and eating each visitor.',
    variants: [
      { type: 'tf', mode: 'timed', seconds: 12, level: 'easy', q: 'The lion was young and strong.', answer: 1, hint: 'The story starts: Once there was an old lion…' },
      { type: 'tf', mode: 'timed', seconds: 12, level: 'easy', q: 'The lion pretended to be sick.', answer: 0, hint: 'He lay down and called: “I am so sick!”' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Why did the lion trick the animals?', options: ['He was too weak to hunt.', 'He wanted friends.', 'He was very sick.', 'He was bored.'], answer: 0, hint: 'He couldn’t catch animals for food anymore.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What did the lion do to the animals that came into his cave?', options: ['He caught and ate them.', 'He gave them food.', 'He played with them.', 'He sent them home.'], answer: 0, hint: 'None of them came out.' },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'Many animals came out of the cave after visiting the lion.', answer: 1, hint: 'Read: But none of them came out!' }
    ] },
  { id: 'M2', lesson: 3, concept: 'The wise fox',
    explain: 'A wise fox came near the cave. He saw many footprints going in, but none coming out. He stood at the cave entrance and did not go in: “I learn from the mistakes of others!” Then he ran away safely, laughing at the lion’s trick.',
    variants: [
      { type: 'mc', fig: 'footprints', mode: 'normal', level: 'easy', q: 'How did the fox know it was in danger?', options: ['He saw footprints going in, but none coming out.', 'He heard the lion roar.', 'He saw the lion eating.', 'Another fox told him.'], answer: 0, hint: 'Look at the tracks in the sand: where do they all go?' },
      { type: 'tf', mode: 'timed', seconds: 12, level: 'easy', q: 'The fox went into the cave.', answer: 1, hint: 'He stood at the cave entrance.' },
      { type: 'tf', mode: 'normal', level: 'easy', q: 'The fox saw footprints going into the cave.', answer: 0, hint: 'Look again at the footprints.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What made the fox wiser than the other animals?', options: ['He learned from the mistakes of others.', 'He was bigger.', 'He was faster.', 'He was the lion’s friend.'], answer: 0, hint: 'Read what the fox says at the end.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'How did the story end?', options: ['The fox ran away safely, laughing at the lion’s trick.', 'The fox visited the lion.', 'The lion caught the fox.', 'The lion became young again.'], answer: 0, hint: 'Read the last line.' }
    ] },
  { id: 'M3', lesson: 3, concept: 'Story words: fox, cave, footprints (p 47)',
    explain: 'A fox is a small, quick animal with a fluffy tail and red-brown fur. A cave is a large hole in a mountain where animals can live. Footprints are marks left by feet.',
    variants: [
      { type: 'tap', diagram: 'story3', mode: 'normal', level: 'easy', q: 'A small, quick animal with a fluffy tail and red-brown fur. Tap the picture.', answer: 'fox', hint: 'Look for the red-brown fur.' },
      { type: 'tap', diagram: 'story3', mode: 'normal', level: 'easy', q: 'A large hole in a mountain where animals can live. Tap the picture.', answer: 'cave', hint: 'Look for a dark hole in rocks.' },
      { type: 'tap', diagram: 'story3', mode: 'timed', seconds: 15, level: 'easy', q: 'Marks left by feet. Tap the picture.', answer: 'prints', hint: 'Look at the sand.' },
      { type: 'term', mode: 'normal', level: 'medium', q: 'Marks left by feet.', answer: 'Footprints', choices: ['Claws', 'Caves', 'Tails'], hint: 'foot + prints' }
    ] },
  { id: 'M4', lesson: 3, concept: 'Verbs: hunt, pretended, lay down',
    explain: 'hunt = look for and catch animals for food. pretended = acted like something was true when it wasn’t. lay down = put yourself on a surface, like the ground or a bed.',
    variants: [
      { type: 'match', mode: 'normal', level: 'medium', q: 'Match the verbs to their meanings.', left: ['hunt', 'pretended', 'lay down'], right: ['look for and catch animals for food', 'acted like something was true when it wasn’t', 'put yourself on a surface, like the ground or a bed'], answer: [0, 1, 2], hint: 'The lion was not really sick.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What does “pretend” mean?', options: ['To act like something is true when it isn’t', 'To run away', 'To catch food', 'To sleep at night'], answer: 0, hint: 'The lion pretended to be sick, but he wasn’t.' },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'What does “hunt” mean?', options: ['Look for and catch animals for food', 'Go to sleep', 'Visit a friend', 'Drink water'], answer: 0, hint: 'Lions do it at night.' }
    ] },
  { id: 'M5', lesson: 3, concept: 'The summary of the story',
    explain: 'There was an old lion. He was very weak and couldn’t hunt. He tricked animals and pretended to be sick in his cave. Many animals entered and never returned. A wise fox noticed the one-way footprints. He didn’t go into the cave and ran away safely.',
    variants: [
      { type: 'fill', mode: 'normal', level: 'easy', q: 'He was very weak and couldn’t ___.', options: ['hunt', 'cave', 'footprints'], answer: 0, hint: 'He couldn’t catch animals for food.' },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'He tricked animals and ___ to be sick in his cave.', options: ['pretended', 'hunt', 'footprints'], answer: 0, hint: 'He was not really sick.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'A wise fox noticed the one-way ___.', options: ['footprints', 'cave', 'pretended'], answer: 0, hint: 'Marks on the sand.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'He didn’t go into the ___ and ran away safely.', options: ['cave', 'hunt', 'footprints'], answer: 0, hint: 'The lion’s home.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What is the setting of the story?', options: ['A forest', 'A city', 'A school', 'The sea'], answer: 0, hint: 'Read: An old lion in a ___ pretends to be sick.' }
    ] },
  { id: 'M6', lesson: 3, concept: 'The moral of a story',
    explain: 'Many stories have a moral. The moral is the lesson a story teaches us. It helps us understand what is right and what is wrong. The moral of this story: learn from the mistakes of others.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What is the moral of a story?', options: ['The lesson a story teaches us', 'The name of the story', 'The place of the story', 'The first line'], answer: 0, hint: 'Read the Tip on page 47.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which phrase shows the moral of this story?', options: ['Learn from the mistakes of others.', 'An old lion in a forest', 'He was too weak to hunt.', 'Many animals heard about the sick lion.'], answer: 0, hint: 'It is a lesson for us.' },
      { type: 'tf', mode: 'timed', seconds: 12, level: 'easy', q: 'A moral helps us understand what is right and what is wrong.', answer: 0, hint: 'Read the Tip.' }
    ] },
  { id: 'M7', lesson: 3, concept: 'Blends: /fr/, /dr/, /pl/',
    explain: 'When you blend, you join two or more sounds together to read a word, like “drum” and “fruit”. /fr/: frown, fruit. /dr/: drum, draw. /pl/: plane, plant.',
    variants: [
      { type: 'tap', diagram: 'blends6', mode: 'normal', level: 'easy', q: 'Tap the drum.', answer: 'drum', hint: 'You hit it with two sticks.' },
      { type: 'tap', diagram: 'blends6', mode: 'normal', level: 'easy', q: 'Tap the plane.', answer: 'plane', hint: 'It flies in the sky.' },
      { type: 'tap', diagram: 'blends6', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap: she frowns.', answer: 'frown', hint: 'Look for an unhappy face.' },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: '___uit', options: ['fr', 'dr', 'pl'], answer: 0, hint: 'Apples and oranges.' },
      { type: 'fill', mode: 'normal', level: 'easy', q: '___aw (I can ___aw a picture.)', options: ['dr', 'fr', 'pl'], answer: 0, hint: 'You do it with a pencil.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: '___ant (She has a nice ___ant in her room.)', options: ['pl', 'dr', 'fr'], answer: 0, hint: 'It is green and grows in a pot.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which word starts with the blend /fr/?', options: ['frown', 'dog', 'log', 'drum'], answer: 0, hint: 'f + r' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which word starts with a blend?', options: ['draw', 'think', 'sink', 'ball'], answer: 0, hint: 'Two sounds joined at the beginning: d + r.' }
    ] },
  { id: 'M8', lesson: 3, boss: true, concept: 'Sort the blends',
    explain: 'fr-: frown, fruit · dr-: drum, draw · pl-: plane, plant. “I can hit the drum easily.” “She has a nice plant in her room.” “Adam likes eating fruit every day.”',
    variants: [
      { type: 'table', mode: 'boss', level: 'hard', q: 'Sort the words into blend groups.', poc: 'Word', cols: ['fr-', 'dr-', 'pl-'], items: ['fruit', 'drum', 'plant', 'frown', 'draw', 'plane'], answer: [0, 1, 2, 0, 1, 2], hint: 'Look at the first two letters.' },
      { type: 'tap', diagram: 'blends6', mode: 'boss', level: 'hard', q: 'Adam likes eating ___ every day. It starts with /fr/. Tap the picture.', answer: 'fruit', hint: 'Something we eat.' },
      { type: 'tap', diagram: 'blends6', mode: 'boss', level: 'hard', q: 'Tap the word that starts with /pl/ and grows in soil.', answer: 'bPlant', hint: 'It is green.' }
    ] },

  /* ---------- Lesson 4 · Writing: A Research Report (pages 50-53) ---------- */
  { id: 'N1', lesson: 4, concept: 'Endangered species',
    explain: 'Many animals around the world are in danger of disappearing forever. These animals are called endangered species. If we don’t act now, these amazing animals could disappear forever.',
    variants: [
      { type: 'term', mode: 'normal', level: 'medium', q: 'Animals in danger of disappearing forever.', answer: 'Endangered', choices: ['Wild', 'Pets', 'Healthy'], hint: 'en + danger + ed' },
      { type: 'tf', mode: 'timed', seconds: 12, level: 'easy', q: 'Endangered animals are in danger of disappearing forever.', answer: 0, hint: 'Read the first sentence of the report.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What could happen if we don’t act now?', options: ['These animals could disappear forever.', 'These animals will become bigger.', 'Nothing will happen.', 'More animals will live in cities.'], answer: 0, hint: 'Read the last sentence of the report.' }
    ] },
  { id: 'N2', lesson: 4, concept: 'The Arabian Leopard and the Red Sea Dugong',
    explain: 'The Arabian Leopard is one of the most endangered animals in Egypt and the Middle East. Less than 200 remain in the wild, because people build houses in their habitats. The Red Sea Dugong is a gentle sea animal that eats sea grass. It is in danger because of pollution and fishing nets.',
    variants: [
      { type: 'mc', fig: 'photo', pic: ph('a4_leopard'), mode: 'normal', level: 'easy', q: 'This is one of the most endangered animals in Egypt and the Middle East. What is it?', options: ['The Arabian Leopard', 'The Red Sea Dugong', 'The zebra', 'The bear'], answer: 0, hint: 'It is a beautiful big cat.' },
      { type: 'mc', fig: 'photo', pic: ph('a4_dugong'), mode: 'normal', level: 'easy', q: 'This gentle sea animal eats sea grass. What is it?', options: ['The Red Sea Dugong', 'The Arabian Leopard', 'The monkey', 'The giraffe'], answer: 0, hint: 'It lives in the Red Sea.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'How many Arabian Leopards remain in the wild?', options: ['Less than 200', 'More than 2,000', 'About 1,000', 'None'], answer: 0, hint: 'A very small number.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Why is the Arabian Leopard in danger?', options: ['People build houses in their habitats.', 'They eat sea grass.', 'There are fishing nets.', 'They are too fast.'], answer: 0, hint: 'Their homes are getting taken.' },
      { type: 'multi', mode: 'normal', level: 'medium', q: 'Why is the Red Sea Dugong in danger? Choose all the correct answers.', options: ['Pollution', 'Fishing nets', 'People build houses in the desert'], answer: [0, 1], hint: 'Think about the sea.' },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'The Red Sea Dugong eats sea ___.', options: ['grass', 'fish', 'leaves'], answer: 0, hint: 'It is a green plant in the sea.' }
    ] },
  { id: 'N3', lesson: 4, concept: 'How to help endangered animals',
    explain: 'To help these animals, we need to: protect their homes, stop pollution, create safe areas, and teach people about them.',
    variants: [
      { type: 'multi', mode: 'normal', level: 'medium', q: 'To help endangered animals, we need to… Choose all the correct answers.', options: ['protect their homes', 'stop pollution', 'create safe areas', 'build houses in their habitats'], answer: [0, 1, 2], hint: 'One choice puts them in more danger.' },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: '___ pollution.', options: ['Stop', 'Make', 'Create'], answer: 0, hint: 'Pollution is bad, so we…' },
      { type: 'fill', mode: 'normal', level: 'easy', q: '___ people about them.', options: ['Teach', 'Hunt', 'Stop'], answer: 0, hint: 'Help people know more.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Create safe ___.', options: ['areas', 'nets', 'cities'], answer: 0, hint: 'Places where animals are safe.' }
    ] },
  { id: 'N4', lesson: 4, boss: true, concept: 'The parts of a good report',
    explain: 'A good report has: 1 a clear title, 2 an introduction, 3 facts and information, 4 examples, 5 solutions, 6 a conclusion. “Endangered Animals” = title; “Many animals are in danger of disappearing” = introduction; “The Red Sea Dugong is an endangered animal” = example; “To help these animals, stop pollution” = solution.',
    variants: [
      { type: 'match', mode: 'boss', level: 'hard', q: 'Read and match.', left: ['Many animals are in danger of disappearing.', 'The Red Sea Dugong is an endangered animal.', 'Endangered Animals', 'To help these animals, stop pollution.'], right: ['introduction', 'example', 'title', 'solution'], answer: [0, 1, 2, 3], hint: 'The title is short. The solution helps.' },
      { type: 'multi', mode: 'boss', level: 'hard', q: 'What does a good report have? Choose all the correct answers.', options: ['A clear title', 'Facts and information', 'Solutions', 'A greeting like “Dear diary”'], answer: [0, 1, 2], hint: 'A greeting belongs to a diary.' },
      { type: 'order', mode: 'boss', level: 'hard', q: 'Put the steps to write a report in order.', items: ['After that, write your report.', 'First, choose an animal.', 'Then, research facts about it.'], answer: [1, 2, 0], hint: 'First, then, after that.' }
    ] },

  /* ---------- Lesson 5 · Think and Create: A Collage (page 54) ---------- */
  { id: 'O1', lesson: 5, concept: 'What a collage is',
    explain: 'A collage is an artwork made by cutting and pasting photos, paper, cloth, or drawings on a page.',
    variants: [
      { type: 'term', mode: 'normal', level: 'medium', q: 'An artwork made by cutting and pasting photos, paper, cloth, or drawings on a page.', answer: 'Collage', choices: ['Report', 'Diary', 'Poster'], hint: 'Lesson 5’s title.' },
      { type: 'multi', mode: 'normal', level: 'medium', q: 'What can we use to make a collage? Choose all the correct answers.', options: ['Photos', 'Paper', 'Cloth', 'Water'], answer: [0, 1, 2], hint: 'Things we cut and paste.' },
      { type: 'tf', mode: 'timed', seconds: 12, level: 'easy', q: 'In a collage, the pictures are allowed to overlap.', answer: 0, hint: 'Read the “Then” card.' }
    ] },
  { id: 'O2', lesson: 5, concept: 'Steps to make a collage',
    explain: 'First, find and cut out photos of endangered animals. Then, glue them together (the pictures are allowed to overlap). Make your collage and show it to your partner. Ask for their feedback: “Do you like it?”',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What do we do first?', options: ['Find and cut out photos of endangered animals.', 'Glue them together.', 'Show it to your partner.', 'Write a diary.'], answer: 0, hint: 'Read the “First” card.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What do we do next?', options: ['Glue them together.', 'Cut out photos.', 'Draw a map.', 'Write a title only.'], answer: 0, hint: 'Read the “Then” card.' },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'How do you ask your partner for feedback?', options: ['“Do you like it?”', '“Where is the cave?”', '“What time is it?”', '“Dear diary,”'], answer: 0, hint: 'You want to know what they think.' }
    ] },
  { id: 'O3', lesson: 5, boss: true, concept: 'Animals review',
    explain: 'Review of the unit: animal names, endangered animals, comparatives, the story and the collage.',
    variants: [
      { type: 'order', mode: 'boss', level: 'hard', q: 'Put the collage steps in order.', items: ['Show it to your partner.', 'Glue them together.', 'Find and cut out photos of endangered animals.'], answer: [2, 1, 0], hint: 'Find, glue, show.' },
      { type: 'table', mode: 'boss', level: 'hard', q: 'Sort the words. (Review 1)', poc: 'Word', cols: ['Animals', 'Helping in the community', 'Sense verbs'], items: ['monkey', 'giraffe', 'volunteer', 'plant', 'hear', 'taste'], answer: [0, 0, 1, 1, 2, 2], hint: 'Sense verbs are about eyes, ears, nose, tongue and hands.' },
      { type: 'mc', mode: 'boss', level: 'medium', q: 'The ___ is black and white. (Review 1)', options: ['zebra', 'monkey', 'bear', 'lion'], answer: 0, hint: 'It has a striped coat.' },
      { type: 'mc', mode: 'boss', level: 'medium', q: 'I ___ animals in the zoo. (Review 1)', options: ['feed', 'sell', 'sleep', 'pay'], answer: 0, hint: 'We give them food.' }
    ] }
];
})();
