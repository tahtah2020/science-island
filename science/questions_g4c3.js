/* Grade 4 Science (Languages) · Chapter 3 How Plants Grow
   19 core ideas from the school book 2026/2027, all four lessons (3-1 to 3-4): Point!, Warm Up, Try, Exercise (pages 36-49),
   plus 2 bonus ideas from "Let's Expand" (page 45) and the record card of lesson 3-4 (page 47).
   Same format as the other files. Ideas: W = sowing seeds (3-1), A = after sprouting (3-2), F = flowers and fruits (3-3),
   T = the plant body (3-4), X = bonus.
   The book's words: seeds, sow, sprout, seed leaves (cotyledons), true leaves, plant height, buds, flowers, fruits,
   next generation, roots, stem, leaves, pathway.
   Tap pictures (drawn in g4_art.js): seedKinds -> sunflower | chickpea | fava ; sowDepth -> heap | right | deep ;
                                      seedlingLeaves -> seedleaf | trueleaf ; flowerFruit -> bud | flower | fruit ; plantBody -> leaves | stem | roots
*/
window.CHAPTER = { id: 'g4-lang-ch3', title: 'How Plants Grow', grade: 'Grade 4', track: 'Languages' };

window.IDEAS = [
  /* ---------- 3-1 Sowing Seeds ---------- */
  { id: 'W1', lesson: 1, concept: 'Plants start from seeds',
    explain: 'Most plants start growing from seeds. Seeds come in many different shapes, colors and sizes depending on the type of plant. Chickpea seeds are small and light yellow; sunflower seeds are large and have black and white stripes.',
    variants: [
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'Most plants start growing from seeds.', answer: 0 },
      { type: 'match', mode: 'normal', level: 'medium', q: 'Match the plant with the correct description of its seed.', left: ['Chickpea', 'Sunflower'], right: ['Small and light yellow', 'Large, with black and white stripes'], answer: [0, 1] },
      { type: 'tap', diagram: 'seedKinds', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap the sunflower seed.', answer: 'sunflower' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What is true about the shape and color of seeds?', options: ['Seeds come in many different shapes, colors and sizes depending on the type of plant', 'All seeds are round and black', 'All seeds are the same size'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Seeds come in many different shapes, colors and ___ depending on the type of plant.', options: ['sizes', 'prices', 'sounds'], answer: 0 },
      { type: 'tap', diagram: 'seedKinds', mode: 'normal', level: 'medium', q: 'Tap the seed that is small and light yellow.', answer: 'chickpea' }
    ] },
  { id: 'W2', lesson: 1, concept: 'The best time to sow seeds',
    explain: 'The best time to sow seeds depends on the plant. Example: sunflower: March - April; fava bean: October - November.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'When is the best time to sow sunflower seeds?', options: ['March - April', 'October - November', 'July - August'], answer: 0 },
      { type: 'match', mode: 'normal', level: 'medium', q: 'Match each plant to the best time to sow its seeds.', left: ['Sunflower', 'Fava bean'], right: ['March - April', 'October - November'], answer: [0, 1] },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'The best time to sow seeds is the same for all plants.', answer: 1, explain: 'The best time to sow seeds depends on the plant: sunflower in March - April, fava bean in October - November.' },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'The best time to sow seeds depends on the ___.', options: ['plant', 'ruler', 'record card'], answer: 0 },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'When is the best time to sow fava bean seeds?', options: ['October - November', 'March - April', 'July - August'], answer: 0 }
    ] },
  { id: 'W3', lesson: 1, concept: 'How to sow seeds',
    explain: 'How to sow: 1) Make a hole about 1 cm deep in the soil with your finger. 2) Put the seed in it and gently cover it with soil. 3) After that, give it plenty of water.',
    variants: [
      { type: 'order', mode: 'normal', level: 'medium', q: 'Put the steps of sowing a seed in order.', items: ['Give it plenty of water', 'Make a hole about 1 cm deep in the soil with your finger', 'Put the seed in the hole and gently cover it with soil'], answer: [1, 2, 0] },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'How deep is the hole you make in the soil to sow a seed?', options: ['About 1 cm', 'About 10 cm', 'About 1 m'], answer: 0 },
      { type: 'mc', style: 'odd', mode: 'normal', level: 'medium', q: 'Choose the INCORRECT statement about how to sow seeds.', options: ['Pile up the soil very high like a mountain over the seed', 'Make a hole with your finger in the soil, then put the seed in', 'Give plenty of water after sowing the seeds'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What is the first important thing to do after you cover the seeds with soil?', options: ['Give them plenty of water', 'Take them out to look at them', 'Press the soil down hard with a stone', 'Leave them dry for a month'], answer: 0 },
      { type: 'tap', diagram: 'sowDepth', mode: 'normal', level: 'medium', q: 'Tap the seed that was sown the correct way.', answer: 'right' },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'After you cover the seed with soil, give it plenty of ___.', options: ['water', 'sand', 'salt'], answer: 0 }
    ] },
  { id: 'W4', lesson: 1, concept: 'Observing seeds',
    explain: 'Use a magnifying glass to look closely at seeds like sunflower, fava bean and chickpea. Look for features like “round”, “long and thin” or “striped”. Measure the length with a ruler, and write on a record card.',
    variants: [
      { type: 'multi', mode: 'normal', level: 'medium', q: 'Choose all the correct answers about how to observe seeds.', options: ['Use a magnifying glass to look closely at the surface', 'Use a ruler to measure the size of one seed', 'If you don’t know the shape well, sketch it in any shape you like'], answer: [0, 1] },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which words describe features of a seed?', options: ['Round, long and thin, or striped', 'Happy, sad, or angry', 'Fast, slow, or loud'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'We use a magnifying glass to look closely at seeds.', answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Use a ___ to measure the length of one seed.', options: ['ruler', 'magnifying glass', 'watering can'], answer: 0 }
    ] },

  /* ---------- 3-2 After Sprouting ---------- */
  { id: 'A1', lesson: 2, concept: 'Seed leaves',
    explain: 'After you sow seeds and wait for a while, sprouts come out. Seed leaves (cotyledons) are the first leaves you see after the sprout comes out. Plants like sunflowers and balsam have two seed leaves.',
    variants: [
      { type: 'term', mode: 'normal', level: 'medium', q: 'The first leaves you see after the sprout comes out.', answer: 'Seed leaves' },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'When a plant sprouts, what are the first leaves called?', options: ['Seed leaves', 'True leaves', 'Buds', 'Roots'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Plants like sunflowers and balsam have ___ seed leaves.', options: ['two', 'five', 'ten'], answer: 0 },
      { type: 'tap', diagram: 'seedlingLeaves', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap a seed leaf.', answer: 'seedleaf' },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'Seed leaves come out after true leaves.', answer: 1, explain: 'Seed leaves are the first leaves you see after the sprout comes out. True leaves come out after them.' }
    ] },
  { id: 'A2', lesson: 2, concept: 'True leaves',
    explain: 'True leaves are the leaves that come out after the seed leaves. They often have a different shape and color from the seed leaves. The number of leaves will increase little by little.',
    variants: [
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'What do we call the leaves that come out after the seed leaves?', options: ['True leaves', 'Seed leaves', 'Fruits', 'Buds'], answer: 0 },
      { type: 'term', mode: 'normal', level: 'medium', q: 'The leaves that come out after the seed leaves.', answer: 'True leaves' },
      { type: 'tap', diagram: 'seedlingLeaves', mode: 'normal', level: 'medium', q: 'Tap a true leaf.', answer: 'trueleaf' },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'True leaves often have a different shape and color from the seed leaves.', answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'As the plant grows, the number of leaves will ___ little by little.', options: ['increase', 'decrease', 'stay at two'], answer: 0 },
      { type: 'fix', mode: 'normal', level: 'medium', q: 'The leaves that come out after the seed leaves are called buds.', wrong: 'buds', answer: 'true leaves' }
    ] },
  { id: 'A3', lesson: 2, concept: 'The leaves of the sunflower',
    explain: 'In the sunflower, the seed leaves are round, but the true leaves have jagged edges. Compare the shape, color and feel of the first seed leaves and the true leaves that come out later.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Choose the correct answer about sunflower leaves.', options: ['Seed leaves are round, but true leaves have jagged edges', 'Seed leaves and true leaves are exactly the same shape', 'Seed leaves come out after true leaves, from the bottom of the stem'], answer: 0 },
      { type: 'table', mode: 'normal', level: 'hard', q: 'Compare between the leaves of the sunflower.', cols: ['Seed leaves', 'True leaves'], items: ['Come out first', 'Round', 'Come out later', 'Have jagged edges'], answer: [0, 0, 1, 1] },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'The true leaves of the sunflower have jagged edges.', answer: 0 },
      { type: 'multi', mode: 'normal', level: 'medium', q: 'What do you compare between the seed leaves and the true leaves? Choose all the correct answers.', options: ['Shape', 'Color', 'Feel', 'Price'], answer: [0, 1, 2] }
    ] },
  { id: 'A4', lesson: 2, concept: 'Plant height',
    explain: 'Plant height is the height from the ground to the very top of the plant. Measure it to the tip of the stem: use a ruler or paper tape to measure from the ground to the base of the top leaf.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'When measuring plant height, where should you measure from and to?', options: ['From the ground to the base of the top leaf', 'The width of the leaf', 'From the tip of the root to where the seed was'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'To measure plant height, use a ___ or paper tape.', options: ['ruler', 'magnifying glass', 'watering can'], answer: 0 },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'Plant height is the width of the biggest leaf.', answer: 1 },
      { type: 'build', style: 'define', mode: 'normal', level: 'hard', q: 'What is meant by plant height?', parts: ['The height', 'from the ground', 'to the very top of the plant'], extra: ['from the tip of the root', 'to the bottom of the pot'] },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'Where do you start measuring plant height from?', options: ['The ground', 'The tip of the root', 'The top leaf'], answer: 0 }
    ] },
  { id: 'A5', lesson: 2, boss: true, concept: 'Observing the sprout',
    explain: 'After sprouting, the two seed leaves come out first, then the true leaves, and the number of leaves increases little by little. In an observation record it is good to write the shape and color of the seed leaves and true leaves, and the plant height.',
    variants: [
      { type: 'order', mode: 'boss', level: 'hard', q: 'A sunflower seed is sown. Put what happens next in order.', items: ['True leaves with jagged edges come out', 'The sprout comes out', 'The two round seed leaves open', 'The number of leaves increases little by little'], answer: [1, 2, 0, 3] },
      { type: 'multi', mode: 'boss', level: 'hard', q: 'Choose all the correct answers that are good to write in an observation record (sketch).', options: ['Shape and color of seed leaves and true leaves', 'Plant height', 'Your breakfast menu for that day'], answer: [0, 1] },
      { type: 'mc', style: 'story', mode: 'boss', level: 'hard', q: 'Hana’s sunflower has two round leaves near the soil, and two leaves with jagged edges above them. Which leaves came out first?', options: ['The two round leaves: they are the seed leaves', 'The jagged leaves: they are the seed leaves', 'All four leaves came out together', 'This plant has no seed leaves'], answer: 0 },
      { type: 'match', mode: 'boss', level: 'hard', q: 'Match each term to its meaning.', left: ['Seed leaves', 'True leaves', 'Plant height'], right: ['The first leaves you see after the sprout comes out', 'The leaves that come out after the seed leaves', 'The height from the ground to the very top of the plant'], answer: [0, 1, 2] }
    ] },

  /* ---------- 3-3 Flowers and Fruits ---------- */
  { id: 'F1', lesson: 3, concept: 'Buds, flowers, then fruits',
    explain: 'When plants grow big, they make buds, bloom flowers, and then make fruits.',
    variants: [
      { type: 'order', mode: 'normal', level: 'medium', q: 'Put what a plant makes when it grows big in order.', items: ['Fruits', 'Buds', 'Flowers'], answer: [1, 2, 0] },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'When plants grow big, they make buds, bloom ___, and then make fruits.', options: ['flowers', 'roots', 'seed leaves'], answer: 0 },
      { type: 'tap', diagram: 'flowerFruit', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap the bud.', answer: 'bud' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What forms just before the flower blooms?', options: ['A bud', 'A fruit', 'A new seed'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'Plants make fruits first, and then they bloom flowers.', answer: 1 }
    ] },
  { id: 'F2', lesson: 3, concept: 'After the flower',
    explain: 'After the flower withers (dries up), the base part swells up and becomes a fruit.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Choose the correct answer about changes after a flower blooms.', options: ['After a flower blooms, the base swells up and a fruit is made', 'After a flower blooms, it just withers and nothing remains', 'The fruit is already inside the bud before the flower blooms'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'After the flower withers, the base part swells up and becomes a ___.', options: ['fruit', 'bud', 'root'], answer: 0 },
      { type: 'build', style: 'whatif', mode: 'normal', level: 'hard', q: 'What happens after the flower withers?', parts: ['The base part', 'swells up', 'and becomes a fruit'], extra: ['falls off', 'and becomes a root'] },
      { type: 'tap', diagram: 'flowerFruit', mode: 'normal', level: 'medium', q: 'Tap what the base part becomes after the flower withers.', answer: 'fruit' },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'After a flower withers, nothing remains.', answer: 1 }
    ] },
  { id: 'F3', lesson: 3, concept: 'New seeds inside the fruit',
    explain: 'When the fruit ripens, new seeds are made inside it. When the fruit is dry, break it open to see what is inside and count the seeds: a single sunflower produces many, many seeds.',
    variants: [
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'What is made inside the fruit when it ripens?', options: ['New seeds', 'New roots', 'New soil'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'When the fruit ripens, new ___ are made inside it.', options: ['seeds', 'leaves', 'stems'], answer: 0 },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'A single sunflower produces many, many seeds.', answer: 0 },
      { type: 'mc', style: 'odd', mode: 'normal', level: 'medium', q: 'Which of the following is NOT true about how sunflowers grow?', options: ['Only one new seed is always made from one flower', 'Many seeds are made after the flower blooms', 'After making seeds and withering, life is passed on to the next generation'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'How do you check what is inside a fruit?', options: ['When the fruit is dry, break it open to see what is inside', 'Water it every day and never open it', 'Look at the roots with a magnifying glass'], answer: 0 }
    ] },
  { id: 'F4', lesson: 3, concept: 'Life to the next generation',
    explain: 'When the new seeds fall to the ground, sprouts come out again the next year and grow. This is how plants connect life to the next generation. Blooming flowers is an important preparation to make “seeds” for the next generation.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What happens when the new seeds fall to the ground?', options: ['Sprouts come out again the next year and grow', 'Nothing ever happens to them', 'They turn into stones'], answer: 0 },
      { type: 'build', style: 'why', mode: 'normal', level: 'hard', q: 'Blooming flowers is important for plants.', parts: ['Because it is a preparation', 'to make seeds', 'for the next generation'], extra: ['to make stones', 'for the roots'] },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'Plants connect life to the next generation through their new seeds.', answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Blooming flowers is an important preparation to make ___ for the next generation.', options: ['seeds', 'roots', 'soil'], answer: 0 }
    ] },
  { id: 'F5', lesson: 3, boss: true, concept: 'From seed to seed',
    explain: 'Sow seeds → the sprout comes out → stems and leaves grow → buds form → the flower blooms → the fruit is made → new seeds are made. The fava bean grows the same way: seed, sprout, leafy plant, flowers, then pods with new seeds.',
    variants: [
      { type: 'order', mode: 'boss', level: 'hard', q: 'The seeds were sown. Put what happens next in order.', items: ['Buds form', 'The sprout comes out', 'The fruit is made', 'The flower blooms', 'Stems and leaves grow', 'New seeds are made'], answer: [1, 4, 0, 3, 2, 5] },
      { type: 'order', mode: 'boss', level: 'hard', q: 'How does a fava bean grow from a seed? Put the pictures in the correct order.', items: ['A plant with flowers', 'A seed', 'A plant with pods (fruits)', 'A sprout with its first leaves', 'A plant with many leaves'], answer: [1, 3, 4, 0, 2] },
      { type: 'mc', style: 'story', mode: 'boss', level: 'hard', q: 'Youssef’s sunflower bloomed, and then the flower withered. He says: “Nothing is left of my flower.” What do you tell him?', options: ['The base part swells up and becomes a fruit, and new seeds are made inside it', 'You are right: after a flower blooms, it just withers and nothing remains', 'The flower will turn back into a bud', 'The fruit was already inside the bud before the flower bloomed'], answer: 0 },
      { type: 'table', mode: 'boss', level: 'hard', q: 'Does it happen before the flower blooms, or after it?', cols: ['Before the flower blooms', 'After the flower blooms'], items: ['The sprout comes out', 'Buds form', 'The fruit is made', 'New seeds are made'], answer: [0, 0, 1, 1] }
    ] },

  /* ---------- 3-4 The Plant Body ---------- */
  { id: 'T1', lesson: 4, concept: 'Three main parts',
    explain: 'A plant’s body is made up of three main parts: roots, stem and leaves. Both sunflowers and fava beans have bodies divided into roots, stems and leaves.',
    variants: [
      { type: 'multi', mode: 'normal', level: 'medium', q: 'Choose the three main parts of a plant’s body.', options: ['Roots', 'Stem', 'Leaves', 'Wings', 'Antennae'], answer: [0, 1, 2] },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'A plant’s body is made up of three main parts: roots, stem and ___.', options: ['leaves', 'legs', 'wings'], answer: 0 },
      { type: 'tap', diagram: 'plantBody', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap the stem of the plant.', answer: 'stem' },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'How many main parts is a plant’s body made up of?', options: ['3', '2', '6'], answer: 0 },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'Both sunflowers and fava beans have bodies divided into roots, stems and leaves.', answer: 0 }
    ] },
  { id: 'T2', lesson: 4, concept: 'Roots',
    explain: 'Roots spread under the ground and hold the plant firmly in the soil. They also have the job of sucking up water from the soil.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Choose the correct answer about the role of roots.', options: ['To hold the body firmly in the ground and suck up water', 'To bloom beautiful flowers', 'To throw seeds far away'], answer: 0 },
      { type: 'tap', diagram: 'plantBody', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap the part that is under the ground and sucks up water.', answer: 'roots' },
      { type: 'build', style: 'function', mode: 'normal', level: 'hard', q: 'What is the function of the roots?', parts: ['They hold the plant', 'firmly in the soil', 'and suck up water from the soil'], extra: ['high in the air', 'and catch sunlight'] },
      { type: 'multi', mode: 'normal', level: 'medium', q: 'What do roots do? Choose all the correct answers.', options: ['Hold the plant firmly in the soil', 'Suck up water from the soil', 'Catch sunlight', 'Bloom flowers'], answer: [0, 1] },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'Roots spread under the ground.', answer: 0 },
      { type: 'fix', mode: 'normal', level: 'medium', q: 'The leaves spread under the ground and suck up water from the soil.', wrong: 'leaves', answer: 'roots' }
    ] },
  { id: 'T3', lesson: 4, concept: 'Stem',
    explain: 'The stem supports the plant’s body. It becomes a “pathway” to carry the water sucked up by the roots to the leaves and flowers.',
    variants: [
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'Which part supports the plant’s body and is a pathway for water?', options: ['Stem', 'Roots', 'Leaves', 'Seeds'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'The stem is a “pathway” to carry the water sucked up by the roots to the leaves and ___.', options: ['flowers', 'soil', 'stones'], answer: 0 },
      { type: 'build', style: 'function', mode: 'normal', level: 'hard', q: 'What is the function of the stem?', parts: ['It supports the plant’s body', 'and is a pathway to carry water', 'from the roots to the leaves and flowers'], extra: ['and is a pathway to carry sunlight', 'from the leaves to the soil'] },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'The stem becomes a pathway for water sucked up from the ground.', answer: 0 },
      { type: 'term', mode: 'normal', level: 'medium', q: 'The part that supports the plant’s body and carries water to the leaves and flowers.', answer: 'Stem' }
    ] },
  { id: 'T4', lesson: 4, concept: 'Leaves',
    explain: 'Leaves have a wide and flat shape to catch lots of sunlight.',
    variants: [
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'Which part has a flat shape and catches sunlight?', options: ['Leaves', 'Roots', 'Stem'], answer: 0 },
      { type: 'tap', diagram: 'plantBody', mode: 'normal', level: 'medium', q: 'Tap the part that has a wide and flat shape to catch lots of sunlight.', answer: 'leaves' },
      { type: 'build', style: 'why', mode: 'normal', level: 'hard', q: 'Leaves have a wide and flat shape.', parts: ['To catch', 'lots of', 'sunlight'], extra: ['very little', 'soil'] },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'Roots have a flat shape to catch sunlight.', answer: 1, explain: 'It is the leaves that have a wide and flat shape to catch lots of sunlight. Roots spread under the ground.' },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Leaves have a wide and flat shape to catch lots of ___.', options: ['sunlight', 'soil', 'insects'], answer: 0 }
    ] },
  { id: 'T5', lesson: 4, boss: true, concept: 'Every part has a job',
    explain: 'Plants spread their leaves to catch lots of sunlight, and spread their roots in the ground to take in water from the soil. The stem supports the body and is the pathway that carries the water from the roots to the leaves and flowers.',
    variants: [
      { type: 'multi', mode: 'boss', level: 'hard', q: 'Choose all the correct answers that explain the plant body.', options: ['Both sunflowers and fava beans have bodies divided into roots, stems, and leaves', 'Every plant always has only one leaf', 'The stem becomes a pathway for water sucked up from the ground', 'Roots have a flat shape to catch sunlight'], answer: [0, 2] },
      { type: 'match', mode: 'boss', level: 'hard', q: 'Match each job to the plant part that does it.', left: ['It has a flat shape and catches sunlight', 'It supports the body and is a pathway for water', 'It is under the ground and supports the body'], right: ['Leaves', 'Stem', 'Roots'], answer: [0, 1, 2] },
      { type: 'table', mode: 'boss', level: 'hard', q: 'Compare between the roots and the leaves.', cols: ['Roots', 'Leaves'], items: ['Spread in the ground', 'Take in water from the soil', 'Have a wide and flat shape', 'Catch lots of sunlight'], answer: [0, 0, 1, 1] },
      { type: 'mc', style: 'story', mode: 'boss', level: 'hard', q: 'Sara waters her sunflower. Which path does the water take inside the plant?', options: ['Roots → stem → leaves and flowers', 'Leaves → stem → roots', 'Flowers → roots → stem'], answer: 0 }
    ] },

  /* ---------- Bonus: "Let's Expand" (page 45) and the record card of lesson 3-4 (page 47): enrichment, not in the core 19 ---------- */
  { id: 'X1', lesson: 3, bonus: true, concept: 'Other plants grow the same way',
    explain: 'Sunflower: a yellow flower, then a dry head full of seeds. Arabian jasmine: white flowers, then black berries. Cherry tomatoes: yellow flowers, then red tomatoes. All of them grow from a seed, bloom flowers and then make fruits.',
    variants: [
      { type: 'match', mode: 'normal', level: 'medium', q: 'Match each plant to its flowers and fruits.', left: ['Sunflower', 'Arabian jasmine', 'Cherry tomatoes'], right: ['A big yellow flower, then a head full of seeds', 'White flowers, then black berries', 'Yellow flowers, then red tomatoes'], answer: [0, 1, 2] },
      { type: 'order', mode: 'normal', level: 'medium', q: 'How does a cherry tomato plant grow? Put the stages in order.', items: ['Red tomatoes', 'Seeds', 'Yellow flowers', 'A small sprout', 'A plant with many leaves'], answer: [1, 3, 4, 2, 0] }
    ] },
  { id: 'X2', lesson: 4, bonus: true, concept: 'Looking at the roots',
    explain: 'To observe the plant body, take the plant out of the pot and gently wash the soil off the roots with water. In the record card of the fava bean, the roots were longer than expected: about half of the plant’s body was made up of roots.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'In the record card of the fava bean, about how much of the plant’s body was made up of roots?', options: ['About half', 'Almost nothing', 'All of it'], answer: 0 },
      { type: 'tf', mode: 'normal', level: 'easy', q: 'To see the roots, we gently wash the soil off them with water.', answer: 0 }
    ] }
];
