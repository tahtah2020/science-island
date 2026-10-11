/* Grade 5 Science (Languages) · Chapter 3 Conditions for Germination
   22 core ideas from the school book, all five lessons (3-1 to 3-5): Point!, Warm Up, Try, Exercise (pages 28-42),
   plus 3 bonus ideas from "Let's Expand" (page 43) and the Column "The Magic Seeds That Travel Through Thousands of Years" (page 50),
   and 3 exam extras from the outside guide (bonus + guide: asked in the Exam Hall, never in the Quest's core).
   Same format as questions.js. Ideas: I = inside the seed (3-1), W = water (3-2), R = air (3-3), H = temperature (3-4),
   G = summary of germination (3-5), K = bonus, Z = exam extras.
   Tap diagrams (drawn in ch3_art.js): seedParts -> coat | embryo | cotyledon ; iodineSeeds -> ungerminated | germinated ;
                                       cupsWater / cupsAir / cupsTemp -> A | B
*/
window.CHAPTER = { id: 'g5-lang-ch3', title: 'Conditions for Germination', grade: 'Grade 5', track: 'Languages' };

window.IDEAS = [
  /* ---------- 3-1 Inside the Seed ---------- */
  { id: 'I1', lesson: 1, concept: 'Germination',
    explain: 'When a plant seed sprouts, it is called germination.',
    variants: [
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'What is it called when a plant seed sprouts?', options: ['Germination', 'Hibernation', 'Withering', 'Migration'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'When a plant seed sprouts, it is called ___.', options: ['germination', 'hibernation', 'relaxation'], answer: 0 },
      { type: 'term', mode: 'normal', level: 'medium', q: 'What happens when a plant seed sprouts and begins to grow.', answer: 'Germination' },
      { type: 'build', style: 'define', mode: 'normal', level: 'hard', q: 'What is meant by germination?', parts: ['It is the process', 'in which a seed sprouts', 'and begins to grow'], extra: ['in which a plant withers', 'and stays still'] }
    ] },
  { id: 'I2', lesson: 1, concept: 'Two parts inside the seed',
    explain: 'Inside the seed there is a part that will become a new plant (the embryo: its leaves, stems and roots) and a part that stores the nutrients needed for the sprout to grow.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What is inside a kidney bean seed?', options: ['A part that will become a new plant, and a part that stores nutrients', 'Only water', 'A tiny flower and a fruit', 'Nothing: it is empty'], answer: 0 },
      { type: 'tap', diagram: 'seedParts', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap the part that will become the leaves, stems and roots.', answer: 'embryo' },
      { type: 'multi', mode: 'normal', level: 'hard', q: 'Choose all the correct answers about kidney bean seeds.', options: ['Cotyledons do not contain nutrients (starch)', 'Inside the seed, there is a part that will become roots and stems', 'Starch becomes the nutrient for germination'], answer: [1, 2] },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'The two cotyledons grow to form the new plant.', answer: 1, explain: 'The embryo is the part that grows into the new plant. The cotyledons store the nutrients it needs.' },
      { type: 'build', style: 'function', mode: 'normal', level: 'hard', q: 'What is the function of the embryo in the seed?', parts: ['It grows', 'to become a new plant', 'with leaves, stems and roots'], extra: ['It stores', 'the starch'] },
      { type: 'term', mode: 'normal', level: 'medium', q: 'The tiny part inside the seed that will become the new plant.', answer: 'Embryo' }
    ] },
  { id: 'I3', lesson: 1, concept: 'Cotyledon and starch',
    explain: 'The cotyledon makes up most of seeds like kidney beans. It is packed with starch, which becomes the nutrient for germination.',
    variants: [
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'What do you call the part inside a kidney bean seed that contains the nutrients (starch) needed for growth?', options: ['Cotyledon', 'Seed coat', 'Root', 'Flower'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'The cotyledon is packed with ___, which becomes the nutrient for germination.', options: ['starch', 'water', 'iodine'], answer: 0 },
      { type: 'tap', diagram: 'seedParts', mode: 'normal', level: 'medium', q: 'Tap the part that makes up most of the seed and is packed with starch.', answer: 'cotyledon' },
      { type: 'build', style: 'function', mode: 'normal', level: 'hard', q: 'What is the function of the starch in the cotyledons?', parts: ['It is the nutrient', 'that the seed uses', 'to germinate and start growing'], extra: ['that the seed coat uses', 'to turn blue-black'] },
      { type: 'build', style: 'why', mode: 'normal', level: 'hard', q: 'A seed can start growing before it has any leaves.', parts: ['Because its cotyledons', 'store starch,', 'the nutrient for germination'], extra: ['store iodine,', 'the seed coat'] },
      { type: 'term', mode: 'normal', level: 'medium', q: 'The part that makes up most of a kidney bean seed and is packed with starch.', answer: 'Cotyledon' }
    ] },
  { id: 'I4', lesson: 1, concept: 'Iodine test for starch',
    explain: 'When you put iodine solution on starch, the colour changes to blue-black (dark blue).',
    variants: [
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'What colour does the kidney bean cotyledon change to when iodine solution is applied?', options: ['Red', 'Blue-black', 'Green'], answer: 1 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which chemical is used to check if there is starch?', options: ['Iodine solution', 'Water', 'Fertilizer', 'Salt'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'When you put iodine solution on starch, the colour changes to ___.', options: ['blue-black', 'red', 'yellow'], answer: 0 },
      { type: 'build', style: 'why', mode: 'normal', level: 'hard', q: 'The cotyledon of a kidney bean turns blue-black when we add iodine solution.', parts: ['Because the cotyledon', 'contains starch,', 'and iodine turns blue-black on starch'], extra: ['contains only water,', 'and iodine turns red on starch'] },
      { type: 'fix', mode: 'normal', level: 'medium', q: 'Iodine solution turns red when it is put on starch.', wrong: 'red', answer: 'blue-black' }
    ] },
  { id: 'I5', lesson: 1, concept: 'Opening the seed',
    explain: 'A kidney bean is soaked in water overnight to make its seed coat soft. Then we can peel the seed coat and split the seed in half.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Why do we soak the kidney bean in water overnight before opening it?', options: ['To make the seed coat soft and easy to peel', 'To make the seed colder', 'To wash the starch away', 'To make it turn blue-black'], answer: 0 },
      { type: 'order', mode: 'normal', level: 'medium', q: 'Put the steps for checking a seed in order.', items: ['Add a drop of iodine solution', 'Peel the soft seed coat', 'Soak the seed in water overnight', 'Split the seed in half'], answer: [2, 1, 3, 0] },
      { type: 'tap', diagram: 'seedParts', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap the seed coat that was peeled off the seed.', answer: 'coat' },
      { type: 'build', style: 'whatif', mode: 'normal', level: 'medium', q: 'What happens when kidney bean seeds are soaked in water overnight?', parts: ['The seed coat', 'becomes soft', 'and is easy to peel'], extra: ['becomes harder', 'and turns blue-black'] }
    ] },
  { id: 'I6', lesson: 1, boss: true, concept: 'A germinated seed has less starch',
    explain: 'Starch is the nutrient for germination, so a seed that has germinated has used up most of its starch. With iodine its cotyledon shows only a faint colour, while a seed that has not germinated turns blue-black.',
    variants: [
      { type: 'tap', diagram: 'iodineSeeds', mode: 'boss', level: 'hard', q: 'A drop of iodine solution was added to two cotyledons. Tap the seed that still has a lot of starch.', answer: 'ungerminated' },
      { type: 'table', mode: 'boss', level: 'hard', q: 'Compare between an ungerminated seed and a germinated seed.', poc: 'After adding iodine solution', cols: ['Ungerminated seed', 'Germinated seed'], items: ['A lot of starch', 'Turns blue-black', 'Less starch', 'Only a faint colour'], answer: [0, 0, 1, 1] },
      { type: 'mc', style: 'story', mode: 'boss', level: 'hard', q: 'Laila adds iodine solution to the cotyledon of a seed that germinated a few days ago. The blue-black colour is very faint. Why?', options: ['The growing seed used most of its starch as its nutrient', 'Iodine does not work on wet seeds', 'The seed made extra starch', 'The seed coat is still on'], answer: 0 },
      { type: 'build', style: 'why', mode: 'boss', level: 'hard', q: 'A germinated seed has less starch than an ungerminated seed.', parts: ['Because the seed', 'used the starch', 'as its nutrient for germination'], extra: ['made more starch', 'as its seed coat'] }
    ] },

  /* ---------- 3-2 Water and Germination ---------- */
  { id: 'W1', lesson: 2, concept: 'Comparing under the same conditions',
    explain: 'When investigating one condition, change only the condition you want to investigate, and keep all other conditions the same.',
    variants: [
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'When investigating one condition, keep all the other conditions the ___.', options: ['same', 'opposite', 'highest'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'You want to find out if seeds need water. How many conditions should be different between the two cups?', options: ['Only one: the water', 'Two: water and temperature', 'Three: water, air and temperature', 'None'], answer: 0 },
      { type: 'mc', style: 'spot', mode: 'normal', level: 'medium', q: '“To investigate one condition, change all the conditions between the two cups.” Choose the right fix.', options: ['Change only the condition you want to investigate, and keep the others the same', 'Change two conditions at a time', 'Do not change any condition'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'When investigating one condition, we change only that condition and keep the others the same.', answer: 0 }
    ] },
  { id: 'W2', lesson: 2, concept: 'The water experiment',
    explain: 'To investigate water: the condition to change is the presence or absence of water. The conditions to keep the same are temperature, air and brightness.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'In the experiment about water and germination, which is the “condition to change” between the two cups?', options: ['Presence or absence of water', 'Presence or absence of air', 'Temperature (high or low)'], answer: 0 },
      { type: 'multi', mode: 'normal', level: 'hard', q: 'In the experiment about water and germination, choose all the “conditions to keep the same” between the two cups.', options: ['Temperature of the place to put them', 'Amount of water', 'Brightness'], answer: [0, 2] },
      { type: 'table', mode: 'normal', level: 'hard', q: 'Sort the conditions in the experiment about water and germination.', cols: ['Condition to change', 'Conditions to keep the same'], items: ['Water', 'Temperature', 'Air', 'Brightness'], answer: [0, 1, 1, 1] },
      { type: 'mc', style: 'story', mode: 'normal', level: 'medium', q: 'Omar moistens the cotton in cup A with water and leaves cup B dry. Where should he put the two cups?', options: ['Both in the same warm place', 'Cup A in a warm place and cup B in the refrigerator', 'Cup A in the light and cup B under water', 'It does not matter'], answer: 0 }
    ] },
  { id: 'W3', lesson: 2, concept: 'Seeds need water',
    explain: 'The seeds on cotton moistened with water sprout. The seeds on dry cotton do not. Water is necessary for seeds to germinate.',
    variants: [
      { type: 'tap', diagram: 'cupsWater', mode: 'timed', seconds: 15, level: 'easy', q: 'Cup A has cotton moistened with water. Cup B has dry cotton. Tap the cup where the seeds will sprout.', answer: 'A' },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'In the experiment about water and germination, which cup will sprout?', options: ['The cup that was given water', 'The cup that was not given water', 'Neither sprouts'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'Kidney bean seeds can germinate on completely dry cotton in a warm place.', answer: 1 },
      { type: 'build', style: 'whatif', mode: 'normal', level: 'medium', q: 'What happens to kidney bean seeds placed on dry cotton in a warm place?', parts: ['The seeds', 'will not germinate', 'because they need water'], extra: ['will germinate', 'because they need light'] },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'If we do not give water to the seeds, they will not ___.', options: ['germinate', 'wither', 'hibernate'], answer: 0 }
    ] },
  { id: 'W4', lesson: 2, boss: true, concept: 'Why change only one condition',
    explain: 'If you change two conditions at the same time, you won’t know which one is necessary.',
    variants: [
      { type: 'mc', mode: 'boss', level: 'hard', q: 'Why must we change only ONE condition between the two cups?', options: ['If we change two conditions, we won’t know which one is necessary', 'Because seeds grow faster with one condition', 'Because two cups cannot hold two conditions', 'To finish the experiment sooner'], answer: 0 },
      { type: 'mc', style: 'story', mode: 'boss', level: 'hard', q: 'Mona gives cup A water and puts it in a warm room. She leaves cup B dry AND puts it in the refrigerator. Only cup A sprouts. What can she conclude?', options: ['Nothing certain: she changed two conditions, so she cannot tell which one was necessary', 'Seeds need water only', 'Seeds need warmth only', 'Seeds do not need water'], answer: 0 },
      { type: 'build', style: 'whatif', mode: 'boss', level: 'hard', q: 'What happens if two conditions are changed at the same time in an experiment?', parts: ['We will not know', 'which condition', 'was necessary'], extra: ['which cup', 'was heavier'] },
      { type: 'build', style: 'why', mode: 'boss', level: 'hard', q: 'In the water experiment, the two cups must be placed in the same warm place.', parts: ['To keep', 'the temperature the same', 'and change only the water'], extra: ['the water the same', 'and change only the temperature'] }
    ] },

  /* ---------- 3-3 Air and Germination ---------- */
  { id: 'R1', lesson: 3, concept: 'Seeds need air',
    explain: 'Seeds are alive just like humans, and they need air to germinate.',
    variants: [
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'Seeds are alive, just like humans, and they need air to germinate.', answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Seeds are alive just like humans, and they need ___ to germinate.', options: ['air', 'sand', 'sunlight'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'In the water experiment, why must we be careful not to give cup A too much water?', options: ['So that the seeds can still touch the air', 'So that the cotton stays white', 'So that the seeds do not get cold', 'So that the cup does not get heavy'], answer: 0, explain: 'Be careful not to give too much water, so that the seeds can touch the air. Seeds need air to germinate.' },
      { type: 'build', style: 'why', mode: 'normal', level: 'hard', q: 'In the water experiment, we must not cover the seeds completely with water.', parts: ['Because seeds', 'also need air', 'to germinate'], extra: ['also need light', 'to wither'] }
    ] },
  { id: 'R2', lesson: 3, concept: 'The air experiment',
    explain: 'To investigate air: the condition to change is exposed to air or not exposed to air. In cup B the seeds are completely submerged in water, so they are not exposed to air. The conditions to keep the same are temperature, brightness and water.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'In the experiment about air and germination, what do you do with the seeds in cup B?', options: ['Submerge them in water', 'Place them in a dry place', 'Put them in the refrigerator'], answer: 0 },
      { type: 'multi', mode: 'normal', level: 'hard', q: 'In the experiment about air and germination, choose all the conditions to keep the same in cups A and B.', options: ['Place both in a place with air', 'Place both in a place with the same temperature', 'Give water to both'], answer: [1, 2] },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'If you submerge the seeds in water, they can’t be exposed to ___.', options: ['air', 'water', 'cold'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which is the “condition to change” in the experiment about air and germination?', options: ['Exposed to air or not exposed to air', 'Presence or absence of water', 'Temperature (high or low)'], answer: 0 }
    ] },
  { id: 'R3', lesson: 3, concept: 'Submerged seeds do not germinate',
    explain: 'The seeds submerged in water did not germinate because they were not exposed to air. Air is necessary for seeds to germinate.',
    variants: [
      { type: 'tap', diagram: 'cupsAir', mode: 'timed', seconds: 15, level: 'easy', q: 'In cup A the seeds are on moist cotton. In cup B they are completely under water. Tap the cup where the seeds will NOT sprout.', answer: 'B' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What is the reason why the seeds submerged in water did not germinate?', options: ['Because they were not exposed to air', 'Because the water was cold', 'Because there was no nutrition in the water'], answer: 0 },
      { type: 'build', style: 'why', mode: 'normal', level: 'hard', q: 'Seeds do not germinate if they are completely submerged in a cup full of water.', parts: ['Because they are', 'not exposed', 'to air'], extra: ['too warm', 'to light'] },
      { type: 'mc', style: 'story', mode: 'normal', level: 'hard', q: 'Seeds on moist cotton are sealed in a bag with all the air taken out, in a warm room. What happens?', options: ['They do not germinate, because they have no air', 'They germinate, because they have water and warmth', 'They germinate faster', 'They turn blue-black'], answer: 0 },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'Seeds that are completely under water germinate well, because they have plenty of water.', answer: 1 }
    ] },

  /* ---------- 3-4 Temperature and Germination ---------- */
  { id: 'H1', lesson: 4, concept: 'Seeds need an appropriate temperature',
    explain: 'Seeds need an appropriate temperature (warmth) to germinate.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which statement correctly explains the relationship between germination and temperature?', options: ['An appropriate warmth is necessary for seeds to germinate', 'Seeds germinate even in a place as cold as ice', 'Germination and temperature have no relationship'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Seeds need an appropriate ___ (warmth) to germinate.', options: ['temperature', 'colour', 'sound'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'Seeds can germinate when they are placed in the refrigerator.', answer: 1 },
      { type: 'fix', mode: 'normal', level: 'medium', q: 'Placing the cup in a cold place helps the seeds to germinate.', wrong: 'cold', answer: 'warm' }
    ] },
  { id: 'H2', lesson: 4, concept: 'The temperature experiment',
    explain: 'To investigate temperature: cup A is placed in a warm place and cup B in the refrigerator. The condition to change is the temperature. The conditions to keep the same are water, air and brightness.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'In the experiment about temperature and germination, which is the “condition to change” between the two cups?', options: ['Temperature (high or low)', 'Presence or absence of water', 'Presence or absence of air'], answer: 0 },
      { type: 'table', mode: 'normal', level: 'hard', q: 'Sort the conditions in the experiment about temperature and germination.', cols: ['Condition to change', 'Conditions to keep the same'], items: ['Temperature', 'Water', 'Air', 'Brightness'], answer: [0, 1, 1, 1] },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'In the temperature experiment, where do we put the two cups?', options: ['Cup A in a warm place, and cup B in the refrigerator', 'Both in the refrigerator', 'Cup A under water, and cup B on dry cotton', 'Both in the same warm place'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'In the experiment about temperature and germination, the “condition to change” between the two cups is the ___.', options: ['temperature', 'water', 'air'], answer: 0 }
    ] },
  { id: 'H3', lesson: 4, concept: 'The dark box and the wooden blocks',
    explain: 'It is dark inside the refrigerator, so cup A is covered with a cardboard box to keep the light the same for both cups. Wooden blocks under the box make a gap for air to enter.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'In the temperature experiment, why did you cover the seeds placed in a warm place with a box?', options: ['To keep the light conditions the same as the refrigerator', 'To make the temperature even higher', 'To prevent them from being exposed to air'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Why do we place wooden blocks under the cardboard box?', options: ['To make a gap for air to enter', 'To make the box warmer', 'To keep the cotton wet', 'To make the box darker'], answer: 0 },
      { type: 'build', style: 'why', mode: 'normal', level: 'hard', q: 'In the temperature experiment, we cover cup A with a cardboard box.', parts: ['Because it is dark', 'inside the refrigerator,', 'so the light must be the same for both cups'], extra: ['inside the warm room,', 'so the water must be different'] },
      { type: 'build', style: 'why', mode: 'normal', level: 'hard', q: 'We place wooden blocks under the edges of the cardboard box.', parts: ['To make a gap', 'for air', 'to enter'], extra: ['for light', 'to stop'] }
    ] },
  { id: 'H4', lesson: 4, concept: 'Why the refrigerator seeds do not germinate',
    explain: 'The seeds in the refrigerator did not germinate because the temperature was too low, even though they had water and air.',
    variants: [
      { type: 'tap', diagram: 'cupsTemp', mode: 'timed', seconds: 15, level: 'easy', q: 'Cup A is in a warm place under a box. Cup B is in the refrigerator. Tap the cup where the seeds will sprout.', answer: 'A' },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'The seeds put in the refrigerator did not germinate because the ___ was too low.', options: ['temperature', 'water', 'light'], answer: 0 },
      { type: 'mc', style: 'story', mode: 'normal', level: 'medium', q: 'Seeds were placed on moistened cotton and put in the refrigerator. Will these seeds germinate?', options: ['No, because the temperature is too low', 'Yes, because they have water and air', 'Yes, because it is dark', 'No, because they have too much air'], answer: 0 },
      { type: 'build', style: 'whatif', mode: 'normal', level: 'medium', q: 'What happens to kidney bean seeds on moist cotton in a cup inside the refrigerator?', parts: ['They will not germinate', 'because the temperature', 'is too low'], extra: ['They will germinate', 'is too high'] }
    ] },

  /* ---------- 3-5 Summary of Germination ---------- */
  { id: 'G1', lesson: 5, concept: 'Three conditions for germination',
    explain: 'Three conditions are necessary for seeds to germinate: water, air and an appropriate temperature.',
    variants: [
      { type: 'multi', mode: 'normal', level: 'medium', q: 'Choose the three conditions necessary for seed germination.', options: ['Water', 'Air', 'Appropriate temperature', 'Sunlight', 'Fertilizer'], answer: [0, 1, 2] },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'The three conditions for germination are water, air and an appropriate ___.', options: ['temperature', 'fertilizer', 'light'], answer: 0 },
      { type: 'mc', style: 'odd', mode: 'normal', level: 'medium', q: 'Which one is NOT a condition for germination?', options: ['Water', 'Air', 'Appropriate temperature', 'Sunlight'], answer: 3 },
      { type: 'mc', mode: 'timed', seconds: 10, level: 'easy', q: 'How many conditions are necessary for seeds to germinate?', options: ['Three', 'One', 'Two', 'Five'], answer: 0 }
    ] },
  { id: 'G2', lesson: 5, concept: 'If even one condition is missing',
    explain: 'If even one of the three conditions is missing, the seeds will not germinate.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which statement correctly explains the conditions for germination?', options: ['If even one of the three conditions is missing, it will not germinate', 'As long as there is water, it will germinate regardless of air or temperature'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'If seeds have water and air but the temperature is too low, they will still germinate.', answer: 1 },
      { type: 'match', mode: 'normal', level: 'medium', q: 'These seeds did not germinate. Match each cup to the condition that is missing.', left: ['Dry cotton in a warm room', 'Seeds under water in a warm room', 'Moist cotton in the refrigerator'], right: ['Water', 'Air', 'Appropriate temperature'], answer: [0, 1, 2] },
      { type: 'mc', style: 'spot', mode: 'normal', level: 'medium', q: '“As long as there is water, seeds germinate regardless of air or temperature.” Choose the right fix.', options: ['Seeds germinate only when water, air and an appropriate temperature are all there', 'Seeds germinate with water and fertilizer only', 'Seeds never need water'], answer: 0 }
    ] },
  { id: 'G3', lesson: 5, concept: 'Sunlight and fertilizer are not needed for germination',
    explain: 'Sunlight and fertilizer are needed for growth after germination, but not for germination itself.',
    variants: [
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Sunlight and ___ are needed for growth after germination, but not for germination itself.', options: ['fertilizer', 'water', 'air'], answer: 0 },
      { type: 'mc', style: 'story', mode: 'normal', level: 'medium', q: 'Seeds were placed on moistened cotton in a completely dark box in a warm room. Will these seeds germinate?', options: ['Yes: they have water, air and warmth, and light is not needed', 'No, because there is no sunlight', 'No, because the room is warm', 'Yes, but only if we add fertilizer'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'A seed needs sunlight to germinate.', answer: 1 },
      { type: 'table', mode: 'normal', level: 'hard', q: 'Sort what a plant needs.', cols: ['Needed for germination', 'Needed later, for growth'], items: ['Water', 'Air', 'Appropriate temperature', 'Sunlight', 'Fertilizer'], answer: [0, 0, 0, 1, 1], explain: 'Water, air and an appropriate temperature are the conditions for germination. Sunlight and fertilizer are needed for growth after germination.' }
    ] },
  { id: 'G4', lesson: 5, boss: true, concept: 'Will it germinate?',
    explain: 'Seeds germinate only when they have water, air and an appropriate temperature together. Sunlight and fertilizer are not needed for germination.',
    variants: [
      { type: 'match', mode: 'boss', level: 'hard', q: 'Match each set-up to what happens.', left: ['Moist cotton, warm room, dark box', 'Moist cotton, refrigerator', 'Dry cotton, warm sunny window'], right: ['Germinates', 'No: the temperature is too low', 'No: there is no water'], answer: [0, 1, 2] },
      { type: 'mc', style: 'story', mode: 'boss', level: 'hard', q: 'Youssef has four cups of seeds. Which one will germinate?', options: ['Moist cotton in a dark box in a warm room', 'Dry cotton on a sunny window', 'Seeds under water on a sunny window', 'Moist cotton in the refrigerator'], answer: 0 },
      { type: 'multi', mode: 'boss', level: 'hard', q: 'Choose all the set-ups in which the seeds will germinate.', options: ['Moist cotton in a warm, bright room', 'Moist cotton in a warm, dark box', 'Dry cotton in a warm, bright room', 'Seeds under water in a warm room'], answer: [0, 1] },
      { type: 'table', mode: 'boss', level: 'hard', q: 'Will the seeds germinate?', cols: ['Germinate', 'Do not germinate'], items: ['Moist cotton, warm room', 'Moist cotton, warm dark box', 'Dry cotton, warm room', 'Under water, warm room', 'Moist cotton, refrigerator'], answer: [0, 0, 1, 1, 1] }
    ] },
  { id: 'G5', lesson: 5, boss: true, concept: 'Three experiments, one rule',
    explain: 'Each experiment changes only one condition and keeps the others the same: water (moist or dry cotton), air (on cotton or under water), temperature (a warm place or the refrigerator).',
    variants: [
      { type: 'match', mode: 'boss', level: 'hard', q: 'Match each experiment to what is different in cup B.', left: ['Water experiment', 'Air experiment', 'Temperature experiment'], right: ['The cotton is left dry', 'The seeds are under water', 'The cup is in the refrigerator'], answer: [0, 1, 2] },
      { type: 'mc', mode: 'boss', level: 'hard', q: 'In all three experiments, what is true about cup A?', options: ['It has water, air and an appropriate temperature, so its seeds germinate', 'It is always in the refrigerator', 'It never gets water', 'Its seeds are always under water'], answer: 0 },
      { type: 'mc', style: 'story', mode: 'boss', level: 'hard', q: 'Salma wants to investigate if seeds need air. Which pair of cups should she use?', options: ['A: moist cotton · B: seeds under water · both in the same warm place', 'A: moist cotton · B: dry cotton · both in the same warm place', 'A: warm room · B: refrigerator · both on moist cotton', 'A: moist cotton in a warm room · B: under water in the refrigerator'], answer: 0 }
    ] },

  /* ---------- Bonus: "Let's Expand" (page 43) and the Column "The Magic Seeds…" (page 50), enrichment, not in the core 22 ---------- */
  { id: 'K1', lesson: 5, bonus: true, concept: 'Seeds have different shapes and colours',
    explain: 'Familiar plants like wheat, sunflower, chickpea, cotton, date palm and corn have seeds with different shapes and colours.',
    variants: [
      { type: 'tf', mode: 'normal', level: 'easy', q: 'The seeds of all plants have the same shape and colour.', answer: 1 },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Wheat, sunflower, chickpea, cotton, date palm and corn. What is true about their seeds?', options: ['They have different shapes and colours', 'They all look exactly the same', 'None of these plants has seeds', 'They are all blue-black'], answer: 0 }
    ] },
  { id: 'K2', lesson: 5, bonus: true, concept: 'The Pharaoh’s wheat',
    explain: 'Wheat seeds from over 3,000 years ago are sometimes found inside the tombs of ancient Egyptian kings. Scientists discovered that starch, the energy source needed to germinate, is still left inside these seeds.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What did scientists discover inside wheat seeds more than 3,000 years old, found in ancient Egyptian tombs?', options: ['Starch is still left inside them', 'They are full of water', 'They have turned into stone', 'They had already germinated'], answer: 0 },
      { type: 'tf', mode: 'normal', level: 'easy', q: 'Wheat seeds from over 3,000 years ago are sometimes found inside the tombs of ancient Egyptian kings.', answer: 0 }
    ] },
  { id: 'K3', lesson: 5, bonus: true, concept: 'Sleeping seeds',
    explain: 'Plants can stop their activity and just “sleep” as long as the three conditions for germination (water, air and the appropriate temperature) are not met. The extremely dry air in Egypt stopped the seeds from rotting.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'How can seeds wait for thousands of years without germinating?', options: ['They “sleep” as long as the three conditions for germination are not met', 'They keep growing very slowly', 'They drink water from the air', 'They hibernate in rock crevices'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What stopped the ancient seeds in Egypt from rotting?', options: ['The extremely dry air', 'The cold water', 'The bright sunlight', 'The fertilizer in the tombs'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'Seeds can “sleep” as long as the three conditions for ___ are not met.', options: ['germination', 'hibernation', 'migration'], answer: 0 }
    ] },

  /* ---------- Exam extras from the outside guide (not in the school book's core) ----------
     bonus: true + guide: true -> never part of the Quest's core questions or its stars, but the Exam Hall asks them like any other idea */
  { id: 'Z1', lesson: 1, bonus: true, guide: true, concept: 'Three parts of a kidney bean seed',
    explain: 'A kidney bean seed has three parts: the seed coat on the outside, the embryo that grows into the new plant, and the two cotyledons that store food (starch).',
    variants: [
      { type: 'match', mode: 'normal', level: 'medium', q: 'Match each part of the kidney bean seed to its job.', left: ['Seed coat', 'Embryo', 'Two cotyledons'], right: ['Covers the seed from the outside', 'Grows into the new plant', 'Store the food (starch)'], answer: [0, 1, 2] },
      { type: 'fix', mode: 'normal', level: 'medium', q: 'The cotyledon is a small part of the seed that looks like a small plant.', wrong: 'cotyledon', answer: 'embryo' },
      { type: 'term', mode: 'normal', level: 'medium', q: 'The outer part that covers the embryo and the two cotyledons.', answer: 'Seed coat' },
      { type: 'table', mode: 'normal', level: 'hard', q: 'Compare between the embryo and the two cotyledons.', cols: ['Embryo', 'Two cotyledons'], items: ['Looks like a tiny plant', 'Grows into the new plant', 'The largest part of the seed', 'Store food (starch)'], answer: [0, 0, 1, 1] }
    ] },
  { id: 'Z2', lesson: 1, bonus: true, guide: true, concept: 'What if…? inside the seed',
    explain: 'Without a living embryo no new plant can grow, and without starch the embryo has no food to start growing. Iodine solution is brown, and it turns dark blue (blue-black) on starch.',
    variants: [
      { type: 'build', style: 'whatif', mode: 'normal', level: 'hard', q: 'What happens if the embryo inside a kidney bean seed dies?', parts: ['The seed', 'will not germinate', 'and no new plant will grow'], extra: ['will germinate faster', 'and turns blue-black'] },
      { type: 'build', style: 'whatif', mode: 'normal', level: 'hard', q: 'What happens if there is no starch in the two cotyledons?', parts: ['The embryo', 'will not find the food', 'it needs to start growing'], extra: ['The seed coat', 'it needs to turn blue-black'] },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What colour is iodine solution before it touches starch, and what colour after?', options: ['Brown, then dark blue (blue-black)', 'Red, then green', 'Yellow, then red', 'Dark blue, then brown'], answer: 0 }
    ] },
  { id: 'Z3', lesson: 3, bonus: true, guide: true, concept: 'Seeds in space',
    explain: 'Without air, seeds cannot germinate, even if they have water and a suitable temperature.',
    variants: [
      { type: 'mc', style: 'story', mode: 'normal', level: 'hard', q: 'Imagine seeds in space with water and a suitable temperature, but no air at all. Can they germinate?', options: ['No, because air is one of the three necessary conditions', 'Yes, because they have water', 'Yes, because space is dark', 'Yes, but only slowly'], answer: 0 },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'Seeds with water and a suitable temperature can germinate even if there is no air.', answer: 1 }
    ] }
];
