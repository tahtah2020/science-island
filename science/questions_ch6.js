/* Human Growth and Reproduction · Grade 5 Science · English school book (first term 2026/2027, pages 64-71)
   Lessons: 1 Stages of Human Growth (64-65) · 2 Similarities between Parents and Children (66-67) · 3 Conditions for Healthy Growth (68-71)
   Idea letters (one per lesson): O = lesson 1 · Q = lesson 2 · U = lesson 3
   Rules: answers of mc/fill at index 0 (the page shuffles) · one Boss idea per lesson (every variant mode:'boss') · about a third timed
          distractors = real misconceptions · term/fix answers ≤ 18 letters · core and Boss only from the school book
   Review notes for the owner:
   - The book prints features only for infancy and childhood, so no question asks about the features of youth, adulthood or old age.
     The five stages are asked only as an ordered list. The pictures of the stages (lifeStages) are original drawings; the questions that tap them ask only about infancy and childhood.
   - Exercise 2(2) of lesson 3 (page 71): "the body gets (bigger), and the body becomes (stronger) and more complex" is taken from the Point text on page 65.
   - Not asked: the open activities (observe people, discuss, draw yourself, give advice, reflect on your life) and Exercise 5 (page 71, "what will happen if you only eat snacks…"), which has no printed answer.
   - Pages 66-67 print no more than: children inherit features from their father and mother; the photo and the family discussion are open. */
window.CHAPTER = { id: 'g5-lang-ch6', title: 'Human Growth and Reproduction', grade: 'Grade 5', track: 'Languages' };

window.IDEAS = [
  /* ---------- Lesson 1 · Stages of Human Growth ---------- */
  { id: 'O1', lesson: 1, concept: 'Reproduction keeps life going',
    explain: 'Reproduction is one of the ways for life to continue and for the species to be preserved. Through reproduction, humans remain on Earth, and life continues across generations.',
    variants: [
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Through ___, humans remain on Earth and life continues across generations.', options: ['reproduction', 'germination', 'pollination'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Why is reproduction important?', options: ['It lets life continue and the species be preserved', 'It makes the body grow bigger', 'It helps humans sleep', 'It makes people look alike'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'Reproduction is one of the ways for life to continue.', answer: 0 }
    ] },
  { id: 'O2', lesson: 1, concept: 'What growth is',
    explain: 'Growth is a change that happens to living organisms like humans, animals, and plants. As time passes, their bodies become bigger, stronger, and more complex.',
    variants: [
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'As time passes, the body of a living organism gets ___.', options: ['bigger', 'smaller', 'lighter'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'As time passes, the body becomes ___ and more complex.', options: ['stronger', 'weaker', 'simpler'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which living things grow?', options: ['Humans, animals and plants', 'Only humans', 'Only animals', 'Only plants'], answer: 0 },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'The human body stays small and does not change.', answer: 1 }
    ] },
  { id: 'O3', lesson: 1, concept: 'The stages of human growth',
    explain: 'The human body continues to change through clearly defined stages: infancy, childhood, youth, adulthood and old age.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', fig: 'lifeStages', q: 'Which is the correct order for the stages of human growth?', options: ['Infancy, childhood, youth, adulthood, old age', 'Childhood, youth, infancy, adulthood, old age', 'Infancy, youth, childhood, adulthood, old age'], answer: 0 },
      { type: 'order', mode: 'normal', level: 'medium', q: 'Put the stages of human growth in order.', items: ['Adulthood', 'Infancy', 'Old age', 'Youth', 'Childhood'], answer: [1, 4, 3, 0, 2] },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'Which stage comes right after childhood?', options: ['Youth', 'Infancy', 'Old age', 'Adulthood'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'After childhood, human growth continues through youth, adulthood and old ___.', options: ['age', 'time', 'year'], answer: 0 }
    ] },
  { id: 'O4', lesson: 1, concept: 'Infancy',
    explain: 'Infancy starts at birth, after about 9 months inside the mother’s body. Infants are very small and completely depend on their mothers for food, care and protection.',
    variants: [
      { type: 'term', mode: 'normal', level: 'medium', q: 'The stage right after birth, when a baby completely depends on its mother’s milk and care.', answer: 'Infancy' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'About how long does a baby spend inside the mother’s body before birth?', options: ['About 9 months', 'About 9 weeks', 'About 9 days', 'About 9 years'], answer: 0 },
      { type: 'tap', diagram: 'lifeStages', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap the stage when humans are very small and depend on their mothers for food, care and protection.', answer: 'infancy' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Infants depend on their mothers for food, care and ___.', options: ['protection', 'homework', 'exercise'], answer: 0 }
    ] },
  { id: 'O5', lesson: 1, concept: 'Childhood',
    explain: 'Childhood is the stage when humans start walking, talking, and going to school. Their bones and muscles get stronger.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which is the correct feature of the childhood stage?', options: ['They start walking and talking, and go to school', 'They grow by only drinking mother’s milk', 'Their body is the smallest, and they cannot move by themselves'], answer: 0 },
      { type: 'tap', diagram: 'lifeStages', mode: 'normal', level: 'medium', q: 'Tap the stage when humans start walking, talking and going to school.', answer: 'childhood' },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'In childhood, the bones and muscles get ___.', options: ['stronger', 'smaller', 'softer'], answer: 0 },
      { type: 'table', mode: 'normal', level: 'hard', q: 'Sort the features.', cols: ['Infancy', 'Childhood'], items: ['Depends completely on mother’s milk and care', 'Starts going to school', 'Starts walking and talking', 'Starts at birth'], answer: [0, 1, 1, 0] }
    ] },
  { id: 'O6', lesson: 1, boss: true, concept: 'Growth stages together',
    explain: 'Humans grow through infancy, childhood, youth, adulthood and old age. Infancy is the first stage, and childhood is when humans start walking, talking and going to school.',
    variants: [
      { type: 'mc', mode: 'boss', level: 'hard', q: 'Which stage comes first in the stages of human growth?', options: ['Infancy', 'Childhood', 'Youth', 'Adulthood'], answer: 0 },
      { type: 'match', mode: 'boss', level: 'hard', q: 'Match each stage to its feature.', left: ['Infancy', 'Childhood'], right: ['Completely depends on the mother for food, care and protection', 'Starts walking, talking and going to school'], answer: [0, 1] },
      { type: 'fix', mode: 'boss', level: 'hard', q: 'Infancy starts after about 9 months inside the father’s body.', wrong: 'father’s', answer: 'mother’s', explain: 'Infancy starts at birth, after about 9 months inside the mother’s body.' }
    ] },

  /* ---------- Lesson 2 · Similarities between Parents and Children ---------- */
  { id: 'Q1', lesson: 2, concept: 'A life begins from a father and a mother',
    explain: 'Every human life begins from a father and a mother.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Who does a human life begin from?', options: ['A father and a mother', 'Brothers and sisters', 'Teachers and friends'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Every human life begins from a father and a ___.', options: ['mother', 'teacher', 'doctor'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'Every human life begins from a father and a mother.', answer: 0 }
    ] },
  { id: 'Q2', lesson: 2, concept: 'The role of parents',
    explain: 'Parents take good care of and protect their children until they grow up.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What is the important role parents play for their children to pass on human life?', options: ['Take care of children until they grow up', 'Go far away before children grow up', 'Go to school and study instead of children'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Parents take care of and ___ their children until they grow up.', options: ['protect', 'ignore', 'leave'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'Parents leave before their children grow up.', answer: 1 }
    ] },
  { id: 'Q3', lesson: 2, concept: 'Children look like their parents',
    explain: 'Children look like their parents because they inherit features from their father and mother.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Why do children look like their parents?', options: ['Because they inherit features from their parents', 'Because they always live together', 'Because they eat the same things'], answer: 0 },
      { type: 'build', style: 'why', mode: 'normal', level: 'hard', q: 'Children look like their parents.', parts: ['Because they', 'inherit features', 'from their father and mother'], extra: ['Because they live', 'in the same house'] },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Children ___ features from their father and mother.', options: ['inherit', 'forget', 'buy'], answer: 0 },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'Children look like their parents only because they live in the same house.', answer: 1 }
    ] },
  { id: 'Q4', lesson: 2, boss: true, concept: 'Parents and children together',
    explain: 'Every human life begins from a father and a mother. Parents take care of their children until they grow up, and children inherit features from their parents.',
    variants: [
      { type: 'mc', mode: 'boss', level: 'hard', q: 'Which statement is correct?', options: ['Children inherit features from their father and mother', 'Children get their features from their teachers', 'Children get their features from what they eat'], answer: 0 },
      { type: 'match', mode: 'boss', level: 'hard', q: 'Match each question to its answer.', left: ['Who does a human life begin from?', 'Why do children look like their parents?'], right: ['A father and a mother', 'They inherit features from them'], answer: [0, 1] },
      { type: 'fix', mode: 'boss', level: 'hard', q: 'Children look like their friends because they inherit features from them.', wrong: 'friends', answer: 'parents', explain: 'Children look like their parents because they inherit features from their father and mother.' }
    ] },

  /* ---------- Lesson 3 · Conditions for Healthy Growth ---------- */
  { id: 'U1', lesson: 3, concept: 'The 3 conditions for healthy growth',
    explain: 'To grow strong and healthy, we need three conditions: a healthy diet, enough sleep and proper exercise.',
    variants: [
      { type: 'multi', mode: 'normal', level: 'medium', q: 'What are the necessary conditions to grow strong and healthy? Choose all correct answers.', options: ['Eating a healthy diet', 'Watching TV all day', 'Staying up late at night', 'Getting enough sleep', 'Getting proper exercise'], answer: [0, 3, 4] },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'A healthy diet, enough sleep and proper ___ help us grow strong.', options: ['exercise', 'television', 'snacks'], answer: 0 },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'How many important conditions do we need for healthy growth?', options: ['Three', 'One', 'Five', 'Ten'], answer: 0 }
    ] },
  { id: 'U2', lesson: 3, concept: 'Healthy diet',
    explain: 'Get the nutrients your body needs by drinking milk and eating vegetables and fruits.',
    variants: [
      { type: 'tap', diagram: 'healthyHabits', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap the picture of drinking milk and eating vegetables and fruits.', answer: 'diet' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'With a healthy diet, we get the ___ our body needs.', options: ['nutrients', 'pollen', 'sunlight'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which helps you get the nutrients your body needs?', options: ['Drinking milk and eating vegetables and fruits', 'Eating only snacks', 'Watching TV all day'], answer: 0 }
    ] },
  { id: 'U3', lesson: 3, concept: 'Enough sleep',
    explain: 'While you sleep, your brain rests and your body is built.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What is the important role of getting sleep?', options: ['It allows the brain to rest and helps build the body', 'It makes the heart and muscles stronger', 'It fills up the stomach'], answer: 0 },
      { type: 'tap', diagram: 'healthyHabits', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap the picture of the condition when the brain rests and the body is built.', answer: 'sleep' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'While you sleep, your brain ___ and your body is built.', options: ['rests', 'works harder', 'shrinks'], answer: 0 }
    ] },
  { id: 'U4', lesson: 3, concept: 'Proper exercise',
    explain: 'Moving your body makes your heart and muscles stronger.',
    variants: [
      { type: 'tap', diagram: 'healthyHabits', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap the picture of moving the body to make the heart and muscles stronger.', answer: 'exercise' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Proper exercise makes your heart and ___ stronger.', options: ['muscles', 'hair', 'teeth'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What does moving your body do?', options: ['Makes your heart and muscles stronger', 'Fills up your stomach', 'Lets your brain rest'], answer: 0 }
    ] },
  { id: 'U5', lesson: 3, boss: true, concept: 'Matching actions to the conditions',
    explain: 'Drinking milk and eating vegetables and fruits = healthy diet. Moving the body = proper exercise. Resting well at night = enough sleep.',
    variants: [
      { type: 'table', mode: 'boss', level: 'hard', q: 'Match each action to the correct condition for healthy growth.', cols: ['Healthy diet', 'Enough sleep', 'Proper exercise'], items: ['Drinking milk and eating vegetables and fruits', 'Moving the body to make the heart and muscles stronger', 'Resting well at night to rest the brain and build the body'], answer: [0, 2, 1] },
      { type: 'match', mode: 'boss', level: 'hard', q: 'Match each condition to what it does.', left: ['Healthy diet', 'Enough sleep', 'Proper exercise'], right: ['Gives your body nutrients', 'Rests the brain and builds the body', 'Makes the heart and muscles stronger'], answer: [0, 1, 2] },
      { type: 'multi', mode: 'boss', level: 'hard', q: 'Which TWO of these are conditions for healthy growth?', options: ['Staying up late at night', 'Getting proper exercise', 'Eating only snacks', 'Getting enough sleep'], answer: [1, 3] }
    ] }
];
