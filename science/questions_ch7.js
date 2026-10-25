/* Animal Growth and Reproduction · Grade 5 Science · English school book (first term 2026/2027, pages 72-79)
   Lessons: 1 Animals that Give Birth to Babies (72-73) · 2 Animals that Lay Eggs (74-75) · 3 Comparing Animals and Preserving the Species (76-79, with Try and Exercise)
   Idea letters: every letter A-Z is already used in Grade 5, so this chapter numbers on from 11:
                 B11… = lesson 1 (Birth) · E11… = lesson 2 (Eggs) · P11… = lesson 3 (Preserving)
   Rules: answers of mc/fill at index 0 (the page shuffles) · one Boss idea per lesson (every variant mode:'boss') · about a third timed
          distractors = real misconceptions · term/fix answers ≤ 18 letters · core and Boss only from the school book
   Pictures: the owner's pictures (science/assets/ch7_*.jpg, cropped from the sheet without captions), tap pictures in science/ch7_art.js.
   Review notes for the owner:
   - P14 "fish live in water": the table on page 77 leaves this cell empty; the answer comes from page 75 (the mother fish releases her eggs into the water).
   - P15 (Try 5, page 78): the book asks to group camel, snake, cat and frog but prints the answer only for the cat. Camel = gives birth; snake and frog = lay eggs
     is the answer the question expects (general knowledge). Asked, but noted here. Dog (similar to the cat) and duck (similar to the chicken) come from the table on page 77.
   - Not asked (no printed answer or open activity): Warm Up questions of pages 73 and 75 except the two facts they print ("cats give birth to only a few babies,
     fish lay countless eggs"); "do baby fish look like their parents?" (page 75, "let's imagine"); the empty "similar animals" cell for the fish and the 4th row
     of the table (page 77, the pupil's own example); Exercise 6 is asked only with the chicken and the fish from the table.
   - Ras Mohammed National Park and White Desert National Park are asked by name only (the book prints their photos, not where they are). */
(function () {
window.CHAPTER = { id: 'g5-lang-ch7', title: 'Animal Growth and Reproduction', grade: 'Grade 5', track: 'Languages' };

window.IDEAS = [
  /* ---------- Lesson 1 · Animals that Give Birth to Babies ---------- */
  { id: 'B11', lesson: 1, concept: 'Born as babies or hatched from eggs',
    explain: 'The way new life is born differs depending on the animal. Some animals are born as babies, and some hatch from eggs.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'How are animal babies born?', options: ['Some are born as babies, and some hatch from eggs', 'All animals hatch from eggs', 'All animals are born as babies'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'All animals hatch from eggs.', answer: 1 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'The way new life is born ___ depending on the animal.', options: ['differs', 'stays the same', 'stops'], answer: 0 }
    ] },
  { id: 'B12', lesson: 1, concept: 'Cats give birth and feed milk',
    explain: 'Cats belong to a group of animals that give birth to babies and feed their young with their milk.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'How do cats have their babies?', options: ['They give birth to babies', 'They lay eggs', 'They grow from seeds like plants'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Cats give birth to babies and feed their young with their ___.', options: ['milk', 'eggs', 'seeds'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'Cats lay eggs.', answer: 1 }
    ] },
  { id: 'B13', lesson: 1, concept: 'Babies grow inside the mother’s body',
    explain: 'The mother cat carefully carries her babies inside her body for a certain period of time, and gives birth to them when they are ready.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Where does a mother cat protect and raise her babies until they are born?', options: ['Inside her own body', 'In the water', 'In the soil'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'The mother cat gives birth to her babies when they are ___.', options: ['ready', 'grown-ups', 'eggs'], answer: 0 },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'The mother cat carries her babies inside her body for a certain period of time.', answer: 0 }
    ] },
  { id: 'B14', lesson: 1, concept: 'Care of kittens: mother’s milk',
    explain: 'After birth, the mother cat cleans the kittens’ bodies and gently raises them by giving them warm mother’s milk until their bodies become strong.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What do newborn kittens drink to grow?', options: ['Mother’s milk', 'Water from a river', 'Juice'], answer: 0 },
      { type: 'tap', diagram: 'ch7Kittens', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap the picture that shows a mother cat raising her kittens with her milk.', answer: 'c7cat' },
      { type: 'multi', mode: 'normal', level: 'medium', q: 'What does the mother cat do after birth? Choose all that are right.', options: ['She cleans the kittens’ bodies', 'She gives them warm mother’s milk', 'She leaves them alone at once', 'She lays eggs for them'], answer: [0, 1] },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'The mother cat gives her kittens milk until their bodies become ___.', options: ['strong', 'small', 'cold'], answer: 0 }
    ] },
  { id: 'B15', lesson: 1, concept: 'Kittens look like their parents',
    explain: 'Kittens are very small at first, but they look exactly like their father and mother. Then, they grow as time passes.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which is right about newborn kittens?', options: ['They are very small, but look exactly like their father and mother', 'They look completely different from their parents', 'They are as big as their parents'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'Kittens grow as time passes.', answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Kittens are very ___ at first.', options: ['small', 'big', 'strong'], answer: 0 }
    ] },
  { id: 'B16', lesson: 1, concept: 'Reproduction: a father and a mother',
    explain: 'Animal babies are usually born from a father (male) and a mother (female) through a process called reproduction. This is very important to preserve each type of animal and human, and to continue life on Earth.',
    variants: [
      { type: 'term', mode: 'normal', level: 'medium', q: 'What do you call it when a new life is born from a father (male) and a mother (female)?', answer: 'Reproduction' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Why is reproduction very important?', options: ['It preserves each type of animal and human, and continues life on Earth', 'It makes the babies drink milk', 'It makes animals live in water'], answer: 0 },
      { type: 'match', mode: 'normal', level: 'medium', q: 'Match each parent to its word.', left: ['Father', 'Mother'], right: ['Male', 'Female'], answer: [0, 1] }
    ] },
  { id: 'B17', lesson: 1, boss: true, concept: 'Animals that give birth',
    explain: 'Cats give birth to babies: the mother carries them inside her body, gives birth when they are ready, then raises them with warm mother’s milk. Babies come from a father (male) and a mother (female) through reproduction.',
    variants: [
      { type: 'order', mode: 'boss', level: 'hard', q: 'Put the life of kittens in order.', items: ['The kittens drink warm mother’s milk', 'The mother carries the babies inside her body', 'The kittens grow as time passes', 'The mother gives birth when the babies are ready'], answer: [1, 3, 0, 2] },
      { type: 'fix', mode: 'boss', level: 'hard', q: 'Cats belong to a group of animals that lay eggs and feed their young with milk.', wrong: 'lay eggs', answer: 'give birth', explain: 'Cats belong to a group of animals that give birth to babies and feed their young with their milk.' },
      { type: 'build', style: 'define', mode: 'boss', level: 'hard', q: 'Build the sentence: why do kittens look like their parents?', parts: ['Kittens are born', 'from a father and a mother', 'through reproduction'], extra: ['from an egg in the water'] }
    ] },

  /* ---------- Lesson 2 · Animals that Lay Eggs ---------- */
  { id: 'E11', lesson: 2, concept: 'Fish lay many eggs in the water',
    explain: 'Unlike cats, fish do not raise their babies inside their bodies. A mother fish releases many eggs into the water.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'How do fish like Tilapia reproduce?', options: ['They lay eggs', 'They give birth to babies', 'They multiply by dividing'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'A mother fish releases many ___ into the water.', options: ['eggs', 'babies', 'seeds'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'Like cats, fish raise their babies inside their bodies.', answer: 1 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Where does a mother fish release her eggs?', options: ['Into the water', 'Inside her body', 'In the soil'], answer: 0 }
    ] },
  { id: 'E12', lesson: 2, concept: 'Hatching',
    explain: 'After a certain period of time, babies hatch from the eggs released in the water. This is called hatching. Very small fish come out of the eggs and start swimming.',
    variants: [
      { type: 'term', mode: 'normal', level: 'medium', q: 'What do you call it when baby fish come out of eggs?', answer: 'Hatching' },
      { type: 'tap', diagram: 'ch7Hatch', mode: 'normal', level: 'medium', q: 'Tap the picture where very small fish are coming out of their eggs.', answer: 'c7eggs' },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Very small fish come out of the eggs and start ___.', options: ['swimming', 'flying', 'walking'], answer: 0 },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'Baby fish hatch from the eggs right away, the same day the eggs are laid.', answer: 1 }
    ] },
  { id: 'E13', lesson: 2, concept: 'Why fish lay so many eggs',
    explain: 'A mother fish releases a huge amount of eggs into the water. This is to make sure that many small fish can survive even in the open water.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which is the correct reason why fish lay a huge amount of eggs in the water?', options: ['To make sure that as many small fish as possible can survive in the open water', 'Because the water is safe, so it is easy to raise them even if they lay many', 'To give them as a present to other fish in the water'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Fish lay many eggs so that many small fish can ___ in the open water.', options: ['survive', 'sleep', 'hide their eggs'], answer: 0 },
      { type: 'build', style: 'why', mode: 'normal', level: 'hard', q: 'Build the reason: why does a mother fish release a huge amount of eggs?', parts: ['So that many small fish', 'can survive', 'even in the open water'], extra: ['because the water is safe'] }
    ] },
  { id: 'E14', lesson: 2, concept: 'Few babies or countless eggs',
    explain: 'Cats give birth to only a few babies at a time, but fish lay countless eggs.',
    variants: [
      { type: 'table', mode: 'normal', level: 'medium', q: 'Sort: cat or fish?', cols: ['Cat', 'Fish'], items: ['Gives birth to only a few babies at a time', 'Lays countless eggs', 'Raises its babies inside its body', 'Releases its eggs into the water'], answer: [0, 1, 0, 1] },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'Cats give birth to only a few babies at a time, but fish lay countless eggs.', answer: 0 },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'Which animal lays countless eggs?', options: ['Fish', 'Cat', 'Camel'], answer: 0 }
    ] },
  { id: 'E15', lesson: 2, concept: 'What reproduction is',
    explain: 'Reproduction is the ability of living organisms to create new individuals of the same kind as themselves, ensuring their survival and continuation on Earth.',
    variants: [
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Reproduction is the ability of living organisms to create new individuals of the ___ kind as themselves.', options: ['same', 'different', 'smaller'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Reproduction ensures the ___ and continuation of living organisms on Earth.', options: ['survival', 'hatching', 'milk'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'Through reproduction, a fish creates new fish of the same kind as itself.', answer: 0 }
    ] },
  { id: 'E16', lesson: 2, boss: true, concept: 'Animals that lay eggs',
    explain: 'A mother fish releases a huge amount of eggs into the water, so that many small fish can survive. After a certain period of time, very small fish hatch from the eggs and start swimming.',
    variants: [
      { type: 'order', mode: 'boss', level: 'hard', q: 'Put the life of a fish in order.', items: ['Very small fish come out of the eggs', 'A mother fish releases many eggs into the water', 'The small fish start swimming', 'A certain period of time passes'], answer: [1, 3, 0, 2] },
      { type: 'fix', mode: 'boss', level: 'hard', q: 'When baby fish come out of eggs, it is called reproduction.', wrong: 'reproduction', answer: 'hatching', explain: 'Babies hatch from the eggs released in the water. This is called hatching.' },
      { type: 'match', mode: 'boss', level: 'hard', q: 'Match each animal to how its babies grow first.', left: ['Cat', 'Fish'], right: ['Inside the mother’s body', 'In eggs in the water'], answer: [0, 1] }
    ] },

  /* ---------- Lesson 3 · Comparing Animals and Preserving the Species ---------- */
  { id: 'P11', lesson: 3, concept: 'Preserving the species',
    explain: 'Living organisms passing on life through reproduction leads to preserving the species.',
    variants: [
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Passing on life through reproduction leads to preserving the ___.', options: ['species', 'eggs', 'water'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What does passing on life through reproduction lead to?', options: ['Preserving the species', 'Hatching only', 'Animals living alone'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'Reproduction leads to preserving the species.', answer: 0 }
    ] },
  { id: 'P12', lesson: 3, concept: 'Nature reserves',
    explain: 'To prevent the important animals on Earth from decreasing, countries set up nature reserves to protect animals so they can safely pass on life and increase their numbers.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What do you call the places protected by countries so that animals can safely pass on life and their species will not decrease?', options: ['Nature reserves', 'Amusement parks', 'Museums'], answer: 0 },
      { type: 'term', mode: 'normal', level: 'medium', q: 'Places that countries set up to protect animals so they can safely pass on life and increase their numbers.', answer: 'Nature reserves' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Why do countries set up nature reserves?', options: ['To protect animals so they can safely pass on life and increase their numbers', 'To let people hunt the animals', 'To keep animals in small cages for shows'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Nature reserves stop the important animals on Earth from ___.', options: ['decreasing', 'growing', 'hatching'], answer: 0 }
    ] },
  { id: 'P13', lesson: 3, concept: 'Nature reserves in Egypt',
    explain: 'Examples of nature reserves in Egypt are Ras Mohammed National Park and White Desert National Park.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which of these is a nature reserve in Egypt?', options: ['Ras Mohammed National Park', 'The Cairo Tower', 'The Egyptian Museum'], answer: 0 },
      { type: 'multi', mode: 'normal', level: 'medium', q: 'Which are examples of nature reserves in Egypt? Choose all that are right.', options: ['Ras Mohammed National Park', 'White Desert National Park', 'The Cairo Tower'], answer: [0, 1] },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: '___ Desert National Park is a nature reserve in Egypt.', options: ['White', 'Red', 'Black'], answer: 0 }
    ] },
  { id: 'P14', lesson: 3, concept: 'Comparing animals in a table',
    explain: 'Cat: gives birth to babies, lives on land, a similar animal is the dog. Chicken: lays eggs, lives on land, a similar animal is the duck. Fish: lays eggs, lives in water.',
    variants: [
      { type: 'tap', diagram: 'ch7Six', mode: 'normal', level: 'easy', q: 'In the book’s table, which animal is similar to the cat? Tap it.', answer: 'c7dog' },
      { type: 'tap', diagram: 'ch7Six', mode: 'normal', level: 'medium', q: 'Tap the animal that lays eggs and lives on land.', answer: 'c7chicken' },
      { type: 'tap', diagram: 'ch7Six', mode: 'normal', level: 'medium', q: 'Tap the animal that lays eggs and lives in water.', answer: 'c7fish' },
      { type: 'table', mode: 'normal', level: 'hard', q: 'Where do they live?', cols: ['On land', 'In water'], items: ['Cat', 'Chicken', 'Fish'], answer: [0, 0, 1] }
    ] },
  { id: 'P15', lesson: 3, concept: 'Grouping animals: birth or eggs',
    explain: 'The camel and the cat give birth to babies. The snake and the frog lay eggs. The dog gives birth like the cat; the duck lays eggs like the chicken.',
    variants: [
      { type: 'table', mode: 'normal', level: 'medium', q: 'Group the animals.', cols: ['Give birth to babies', 'Lay eggs'], items: ['Camel', 'Snake', 'Cat', 'Frog'], answer: [0, 1, 0, 1] },
      { type: 'table', mode: 'normal', level: 'medium', q: 'Group the animals.', cols: ['Give birth to babies', 'Lay eggs'], items: ['Dog', 'Chicken', 'Duck', 'Fish'], answer: [0, 1, 1, 1] },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'Which animal gives birth to babies?', options: ['Camel', 'Frog', 'Snake'], answer: 0 }
    ] },
  { id: 'P16', lesson: 3, concept: 'Where eggs are laid',
    explain: 'A chicken lays eggs on land. A fish lays its eggs in water.',
    variants: [
      { type: 'match', mode: 'normal', level: 'medium', q: 'Match each animal to where it lays its eggs.', left: ['Chicken', 'Fish'], right: ['On land', 'In water'], answer: [0, 1] },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'Where does a chicken lay its eggs?', options: ['On land', 'In water', 'Inside its body'], answer: 0 }
    ] },
  { id: 'P17', lesson: 3, boss: true, concept: 'Comparing and preserving',
    explain: 'Some animals give birth to babies (cat, dog), and some lay eggs (chicken, duck, fish). Reproduction leads to preserving the species, and nature reserves such as Ras Mohammed and the White Desert protect animals so they can safely pass on life.',
    variants: [
      { type: 'table', mode: 'boss', level: 'hard', q: 'Sort the facts.', cols: ['Cat', 'Chicken', 'Fish'], items: ['Gives birth to babies', 'Lays eggs on land', 'Lays eggs in water'], answer: [0, 1, 2] },
      { type: 'fix', mode: 'boss', level: 'hard', q: 'Countries set up museums to protect animals so they can safely pass on life.', wrong: 'museums', answer: 'nature reserves', explain: 'Countries set up nature reserves to protect animals so they can safely pass on life and increase their numbers.' },
      { type: 'build', style: 'sentence', mode: 'boss', level: 'hard', q: 'Build the sentence.', parts: ['Passing on life', 'through reproduction', 'leads to preserving the species'], extra: ['through hatching only'] }
    ] }
];
})();
