/* Grade 4 Science (Languages) · Chapter 2 How Insects Grow
   14 core ideas from the school book 2026/2027, all three lessons (2-1 to 2-3): Point!, Warm Up, Try, Exercise (pages 26-34),
   plus 2 bonus ideas from "Let's Expand: Let's Raise Butterflies from Eggs" (page 35).
   Same format as the other files. Ideas: G = eggs and larvae (2-1), P = pupae and adults (2-2), B = body structure of adults (2-3),
   R = raising butterflies (bonus).
   The book's words: egg, larva, molting (shedding skin), pupa, adult, head, thorax, abdomen, antennae, insects.
   Tap pictures (drawn in g4_art.js): butterflyStages -> egg | larva | pupa | adult ; insectBody -> head | thorax | abdomen ;
                                      insectSide -> antennae | wings | legs ; whoIsInsect -> grasshopper | spider | pillbug
*/
window.CHAPTER = { id: 'g4-lang-ch2', title: 'How Insects Grow', grade: 'Grade 4', track: 'Languages' };

window.IDEAS = [
  /* ---------- 2-1 Eggs and Larvae ---------- */
  { id: 'G1', lesson: 1, concept: 'Insects are born from eggs',
    explain: 'Many insects are born from eggs. The place, shape and color of eggs are different for each insect. Many are laid on the underside of leaves.',
    variants: [
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'Many insects are born from eggs.', answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Where do butterflies lay eggs the most?', options: ['On the underside of the leaves of plants that larvae eat', 'On top of dry sand', 'At the tip of a tree branch in a high, windy place'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Many insect eggs are laid on the underside of ___.', options: ['leaves', 'stones', 'clouds'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What is true about the place, shape and color of insect eggs?', options: ['They are different for each insect', 'They are the same for all insects', 'All eggs are big and red'], answer: 0 },
      { type: 'tap', diagram: 'butterflyStages', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap the stage where the life of a butterfly begins.', answer: 'egg' }
    ] },
  { id: 'G2', lesson: 1, concept: 'The larva',
    explain: 'The larva is the baby insect that just came out of the egg. A newborn larva eats a lot of food and grows.',
    variants: [
      { type: 'term', mode: 'normal', level: 'medium', q: 'The baby insect that just came out of the egg.', answer: 'Larva' },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'What do we call the baby that just came out of the egg?', options: ['Larva', 'Adult', 'Pupa', 'Bud'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'A newborn larva eats a lot of food and ___.', options: ['grows', 'flies away', 'lays eggs'], answer: 0 },
      { type: 'tap', diagram: 'butterflyStages', mode: 'normal', level: 'medium', q: 'Tap the stage that eats a lot of leaves and grows.', answer: 'larva' },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'Larvae have the same body shape as adults from the moment they hatch from eggs.', answer: 1 },
      { type: 'build', style: 'define', mode: 'normal', level: 'hard', q: 'What is meant by a larva?', parts: ['The baby insect', 'that just came out', 'of the egg'], extra: ['that is fully grown', 'of the flower'] }
    ] },
  { id: 'G3', lesson: 1, concept: 'Molting',
    explain: 'When a larva eats and gets bigger, it takes off its skin. This is called molting (shedding skin). It does this many times to grow larger.',
    variants: [
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'What do we call it when a larva takes off its skin?', options: ['Molting', 'Sowing', 'Classifying', 'Resting'], answer: 0 },
      { type: 'term', mode: 'normal', level: 'medium', q: 'When a larva gets bigger and takes off its skin.', answer: 'Molting' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Choose the correct answer about larvae growth.', options: ['Larvae grow bigger by shedding their skin many times', 'Larvae grow bigger and bigger even if they do not eat food', 'Larvae have the same body shape as adults from the moment they hatch from eggs'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'A larva takes off its skin only one time.', answer: 1 },
      { type: 'build', style: 'why', mode: 'normal', level: 'hard', q: 'A larva sheds its skin many times.', parts: ['Because the larva eats', 'and gets bigger,', 'and it molts to grow larger'], extra: ['and gets smaller,', 'and it molts to become an egg'] },
      { type: 'fix', mode: 'normal', level: 'medium', q: 'When a larva takes off its skin, this is called sowing.', wrong: 'sowing', answer: 'molting' }
    ] },
  { id: 'G4', lesson: 1, concept: 'Looking for eggs and larvae',
    explain: 'Use a magnifying glass to look under the leaves (butterflies know which plants their babies eat). Look at the larva’s color and where it is eating: “eating marks” (holes in leaves) help you find larvae. Use a ruler to see how big the larva has grown, and keep a record.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'You want to find butterfly eggs. Where is the best place to look?', options: ['Under the leaves, with a magnifying glass', 'On the hot sand', 'In the water of the river', 'On top of a wall'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which sign helps you find larvae on a plant?', options: ['Eating marks (holes in the leaves)', 'Wet soil', 'A broken branch', 'Yellow flowers'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Use a ___ to see how big the larva has grown.', options: ['ruler', 'thermometer', 'mirror'], answer: 0 },
      { type: 'multi', mode: 'normal', level: 'medium', q: 'What do you record about a larva? Choose all the correct answers.', options: ['Its color', 'Where it is eating', 'Its size', 'The name of your friend'], answer: [0, 1, 2] },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'Butterflies know which plants their babies eat.', answer: 0 }
    ] },

  /* ---------- 2-2 Pupae and Adults ---------- */
  { id: 'P1', lesson: 2, concept: 'Egg, larva, pupa, adult',
    explain: 'Butterflies grow in this order: Egg → Larva → Pupa → Adult. Dung beetles and bees are also in this group.',
    variants: [
      { type: 'order', mode: 'normal', level: 'medium', q: 'Put the growth of a butterfly in order.', items: ['Pupa', 'Egg', 'Adult', 'Larva'], answer: [1, 3, 0, 2] },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Butterfly growth: Egg → Larva → ___ → Adult', options: ['Pupa', 'Seed', 'Bud'], answer: 0 },
      { type: 'tap', diagram: 'butterflyStages', mode: 'normal', level: 'medium', q: 'Tap the stage that comes just after the larva.', answer: 'pupa' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which insects grow in the same order as butterflies (egg, larva, pupa, adult)?', options: ['Dung beetles and bees', 'Frogs and lizards', 'Sparrows and doves'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'A butterfly larva becomes a pupa before it becomes an adult.', answer: 0 }
    ] },
  { id: 'P2', lesson: 2, concept: 'The pupa',
    explain: 'The pupa does not move, so it looks like it is resting. But inside, its body is changing from a child to an adult.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Choose the correct answer about the pupa stage.', options: ['Inside the body, it is preparing to change into an adult', 'During this stage, it eats even more leaves than when it was a larva', 'The pupa keeps moving around in this form for the rest of its life'], answer: 0 },
      { type: 'term', mode: 'normal', level: 'medium', q: 'The stage that does not move and looks like it is resting, while its body changes into an adult.', answer: 'Pupa' },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'A pupa moves around and eats a lot of leaves.', answer: 1 },
      { type: 'tap', diagram: 'butterflyStages', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap the stage that does not move and looks like it is resting.', answer: 'pupa' },
      { type: 'build', style: 'whatif', mode: 'normal', level: 'hard', q: 'What happens inside the pupa while it looks like it is resting?', parts: ['Its body', 'is changing', 'from a child to an adult'], extra: ['is eating', 'from an adult to an egg'] }
    ] },
  { id: 'P3', lesson: 2, concept: 'The adult',
    explain: 'The adult is the fully grown form. It lays eggs to connect to new life.',
    variants: [
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'What do we call the fully grown form of an insect?', options: ['Adult', 'Larva', 'Pupa', 'Egg'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'The adult lays ___ to connect to new life.', options: ['eggs', 'leaves', 'seeds'], answer: 0 },
      { type: 'tap', diagram: 'butterflyStages', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap the fully grown form of the butterfly.', answer: 'adult' },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'The larva is the stage that lays eggs.', answer: 1, explain: 'The adult is the fully grown form, and it is the adult that lays eggs to connect to new life.' },
      { type: 'build', style: 'define', mode: 'normal', level: 'hard', q: 'What is meant by an adult insect?', parts: ['The fully grown form', 'of the insect,', 'which lays eggs to connect to new life'], extra: ['The baby form', 'which sheds its skin to grow'] }
    ] },
  { id: 'P4', lesson: 2, concept: 'From a pupa to an adult',
    explain: 'When the larva stops eating, it goes to a place to become a pupa. When the adult comes out, the back splits open first. The wings are wrinkled at first, but they stretch out after a while.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'When the adult comes out of the pupa, what happens first?', options: ['The back splits open', 'The adult flies away', 'The adult lays eggs', 'The wings fall off'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What are the wings like when the adult has just come out?', options: ['Wrinkled at first, then they stretch out after a while', 'Stretched out and ready to fly right away', 'Hard like a stone', 'It has no wings'], answer: 0 },
      { type: 'order', mode: 'normal', level: 'hard', q: 'Put what happens in order.', items: ['The wings stretch out', 'The larva stops eating and becomes a pupa', 'The back splits open', 'The adult comes out with wrinkled wings'], answer: [1, 2, 3, 0] },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'The wings of a new adult butterfly are wrinkled at first.', answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'When the adult comes out, the ___ splits open first.', options: ['back', 'wing', 'antenna'], answer: 0 }
    ] },
  { id: 'P5', lesson: 2, boss: true, concept: 'How a butterfly grows from an egg',
    explain: 'A butterfly grows from an egg in this order: egg → young larva → big larva → pupa → adult. The larva eats a lot and molts many times; the pupa does not move while its body changes into an adult; the adult lays eggs.',
    variants: [
      { type: 'order', mode: 'boss', level: 'hard', q: 'How does a butterfly grow from an egg? Put the stages in the correct order.', items: ['Big larva', 'Adult', 'Egg', 'Pupa', 'Young larva'], answer: [2, 4, 0, 3, 1] },
      { type: 'table', mode: 'boss', level: 'hard', q: 'Compare between the larva and the pupa.', cols: ['Larva', 'Pupa'], items: ['Eats a lot of food', 'Sheds its skin many times', 'Does not move', 'Looks like it is resting'], answer: [0, 0, 1, 1] },
      { type: 'match', mode: 'boss', level: 'hard', q: 'Match each stage to what we know about it.', left: ['Egg', 'Larva', 'Pupa', 'Adult'], right: ['Often laid on the underside of a leaf', 'Eats a lot and molts', 'Does not move, but its body is changing inside', 'The fully grown form that lays eggs'], answer: [0, 1, 2, 3] },
      { type: 'mc', style: 'story', mode: 'boss', level: 'hard', q: 'Nour finds a green thing hanging on the back of a milkweed leaf. It does not move and it does not eat. What is it?', options: ['A pupa: inside, its body is changing into an adult', 'An egg', 'A larva looking for food', 'An adult laying eggs'], answer: 0 }
    ] },

  /* ---------- 2-3 Body Structure of Adults ---------- */
  { id: 'B1', lesson: 3, concept: 'Head, thorax and abdomen',
    explain: 'The body of an adult butterfly is made of 3 parts: head, thorax and abdomen.',
    variants: [
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'The body of an adult butterfly is made of 3 parts: head, thorax and ___.', options: ['abdomen', 'tail', 'shell'], answer: 0 },
      { type: 'tap', diagram: 'insectBody', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap the head of the insect.', answer: 'head' },
      { type: 'tap', diagram: 'insectBody', mode: 'normal', level: 'medium', q: 'Tap the abdomen of the insect.', answer: 'abdomen' },
      { type: 'multi', mode: 'normal', level: 'medium', q: 'Choose the three parts of an insect’s body.', options: ['Head', 'Thorax', 'Abdomen', 'Shell', 'Roots'], answer: [0, 1, 2] },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'The body of an adult butterfly is made of 2 parts only.', answer: 1 },
      { type: 'order', mode: 'normal', level: 'medium', q: 'Put the parts of the insect’s body in order, starting from the front.', items: ['Abdomen', 'Head', 'Thorax'], answer: [1, 2, 0] }
    ] },
  { id: 'B2', lesson: 3, concept: 'Legs and wings are on the thorax',
    explain: 'There are 6 legs, and they are all on the thorax. On the thorax of a butterfly there are 6 legs and 4 wings.',
    variants: [
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'How many legs does an insect have?', options: ['6', '4', '8', '10'], answer: 0 },
      { type: 'tap', diagram: 'insectBody', mode: 'normal', level: 'medium', q: 'Tap the part of the body where all the legs are attached.', answer: 'thorax' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'On the thorax of a butterfly, there are 6 legs and ___ wings.', options: ['4', '2', '6'], answer: 0 },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'The legs of a butterfly are attached to its abdomen.', answer: 1, explain: 'There are 6 legs, and they are all on the thorax.' },
      { type: 'fix', mode: 'normal', level: 'medium', q: 'All 6 legs of an insect are on the abdomen.', wrong: 'abdomen', answer: 'thorax' },
      { type: 'tap', diagram: 'insectSide', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap the legs of the butterfly.', answer: 'legs' }
    ] },
  { id: 'B3', lesson: 3, concept: 'What is on the head',
    explain: 'On the head, there are eyes, a mouth and 1 pair of antennae (2 of them). The antennae are the long, rod-like parts on an insect’s head.',
    variants: [
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'What do we call the long, rod-like parts on an insect’s head?', options: ['Antennae', 'Wings', 'Legs', 'Roots'], answer: 0 },
      { type: 'term', mode: 'normal', level: 'medium', q: 'The long, rod-like parts on an insect’s head.', answer: 'Antennae' },
      { type: 'tap', diagram: 'insectSide', mode: 'normal', level: 'medium', q: 'Tap the antennae of the butterfly.', answer: 'antennae' },
      { type: 'multi', mode: 'normal', level: 'medium', q: 'What is on the head of an insect? Choose all the correct answers.', options: ['Eyes', 'A mouth', '1 pair of antennae', '6 legs'], answer: [0, 1, 2] },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'On the head there is 1 pair of antennae. That means ___ of them.', options: ['2', '4', '6'], answer: 0 },
      { type: 'table', mode: 'normal', level: 'hard', q: 'Where is each part on the body of a butterfly?', cols: ['On the head', 'On the thorax'], items: ['Eyes', 'Legs', 'Antennae', 'Wings', 'Mouth'], answer: [0, 1, 0, 1, 0] }
    ] },
  { id: 'B4', lesson: 3, concept: 'Insects',
    explain: 'Animals with this body structure (head, thorax and abdomen, with 6 legs on the thorax) are called insects. Dragonflies, grasshoppers and dung beetles are also insects.',
    variants: [
      { type: 'term', mode: 'normal', level: 'medium', q: 'Animals whose body is made of a head, a thorax and an abdomen, with 6 legs on the thorax.', answer: 'Insects' },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'What do we call the group of animals that have a body structure like butterflies, grasshoppers and dung beetles?', options: ['Insects', 'Plants', 'Birds', 'Fish'], answer: 0 },
      { type: 'multi', mode: 'normal', level: 'medium', q: 'Choose all the insects.', options: ['Dragonfly', 'Grasshopper', 'Dung beetle', 'Sparrow'], answer: [0, 1, 2] },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'Dragonflies, grasshoppers and dung beetles are insects.', answer: 0 },
      { type: 'build', style: 'define', mode: 'normal', level: 'hard', q: 'What is meant by an insect?', parts: ['An animal whose body is made of', '3 parts: head, thorax and abdomen,', 'with 6 legs on the thorax'], extra: ['2 parts: head and tail,', 'with 8 legs on the abdomen'] }
    ] },
  { id: 'B5', lesson: 3, boss: true, concept: 'Is it an insect?',
    explain: 'To know if an animal is an insect, see where its body is divided and count its legs. An insect’s body has 3 parts and 6 legs on the thorax. Spiders have 8 legs and pill bugs have many more than 6 legs, so they are not built the same way as insects.',
    variants: [
      { type: 'tap', diagram: 'whoIsInsect', mode: 'boss', level: 'hard', q: 'Count the legs. Tap the insect.', answer: 'grasshopper' },
      { type: 'mc', style: 'story', mode: 'boss', level: 'hard', q: 'Ali counts the legs of a spider and finds 8 legs. Is the spider built the same way as insects?', options: ['No, because an insect has 6 legs', 'Yes, because it is small', 'Yes, because it has legs', 'No, because it has no eyes'], answer: 0 },
      { type: 'table', mode: 'boss', level: 'hard', q: 'Count the legs: is it an insect or not?', cols: ['Insect', 'Not an insect'], items: ['Butterfly', 'Spider', 'Ant', 'Pill bug', 'Grasshopper'], answer: [0, 1, 0, 1, 0] },
      { type: 'multi', mode: 'boss', level: 'hard', q: 'What do all insects have? Choose all the correct answers.', options: ['A body made of 3 parts: head, thorax and abdomen', '6 legs on the thorax', '8 legs on the abdomen', 'A body made of one part only'], answer: [0, 1] },
      { type: 'mc', mode: 'boss', level: 'hard', q: 'A grasshopper, a butterfly and an ant look different. What is the same in all of them?', options: ['Their body has 3 parts, and they have 6 legs', 'They all have the same color', 'They all have 8 legs', 'They are all the same size'], answer: 0 }
    ] },

  /* ---------- Bonus: "Let's Expand: Let's Raise Butterflies from Eggs!" (page 35): enrichment, not in the core 14 ---------- */
  { id: 'R1', lesson: 3, bonus: true, concept: 'Let’s raise butterflies from eggs',
    explain: 'Get a clear case that is easy to see through and has good air flow. Clean up the poop often with a brush, always give fresh leaves of the plants the larvae eat (like milkweed), and keep the leaves from drying out so the larvae can shed their skin easily. When they get ready to become a pupa, watch them quietly.',
    variants: [
      { type: 'multi', mode: 'normal', level: 'medium', q: 'How do you care for larvae every day? Choose all the correct answers.', options: ['Clean up the poop often with a brush', 'Always give them fresh leaves', 'Keep the leaves from drying out', 'Leave them without food'], answer: [0, 1, 2] },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which case do you prepare to raise butterflies?', options: ['A clear case with good air flow', 'A dark, closed box', 'A cup full of water'], answer: 0 },
      { type: 'tf', mode: 'normal', level: 'easy', q: 'When the larvae start getting ready to become a pupa, we watch them quietly.', answer: 0 }
    ] },
  { id: 'R2', lesson: 3, bonus: true, concept: 'Letting the butterfly go',
    explain: 'Wait for the wings to harden. When the wings are dry and the butterfly moves well, let it go outside.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'When do you let the adult butterfly go outside?', options: ['When its wings are dry and it moves well', 'As soon as it comes out, while its wings are still wrinkled', 'When it is still a pupa'], answer: 0 },
      { type: 'tf', mode: 'normal', level: 'easy', q: 'We wait for the wings to harden before we let the butterfly go.', answer: 0 }
    ] }
];
