/* Grade 5 Science (Languages) · Chapter 4 Conditions for Growth  ·  FIRST PART ONLY
   The chapter is not open yet (chapters.js: ready false). These are its core ideas from the school book, both lessons
   (4-1 and 4-2): Point!, Warm Up, Try, Exercise (pages 44-49). For now only the Exam Hall uses lesson 4-1 from this file.
   Still to do before the chapter opens: its game, its map, the bonus ideas from the Column (page 51), the Arabic file.
   Same format as questions.js. Ideas: L = sunlight and growth (4-1), F = fertilizer and growth (4-2).
*/
window.CHAPTER = { id: 'g5-lang-ch4', title: 'Conditions for Growth', grade: 'Grade 5', track: 'Languages' };

window.IDEAS = [
  /* ---------- 4-1 Sunlight and Growth ---------- */
  { id: 'L1', lesson: 1, concept: 'Plants need sunlight to grow healthy',
    explain: 'Plants need sunlight to grow healthy after they germinate.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Choose the correct explanation about the relationship between sunlight and plants.', options: ['Plants need sunlight to grow strong', 'Plants can continue to grow healthy without sunlight, as long as they have water'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'Plants need sunlight to grow healthy after they germinate.', answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Plants need ___ to grow healthy after they germinate.', options: ['sunlight', 'darkness', 'cold'], answer: 0 }
    ] },
  { id: 'L2', lesson: 1, concept: 'What sunlight does for the plant',
    explain: 'By getting sunlight, plants make their own food needed for growth. Plants that get sunlight have dark green leaves and grow thick, strong stems.',
    variants: [
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Plants grown with lots of sunlight get ___ leaves.', options: ['dark green', 'whitish', 'yellowish'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Plants grown with lots of sunlight grow ___ stems.', options: ['thick and strong', 'long and thin', 'thin and weak'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What do plants make by getting sunlight?', options: ['Their own food needed for growth', 'Water', 'Fertilizer', 'Air'], answer: 0 },
      { type: 'table', mode: 'normal', level: 'hard', q: 'Compare between a plant grown with sunlight and a plant grown without sunlight.', cols: ['With sunlight', 'Without sunlight'], items: ['Dark green leaves', 'Thick, strong stem', 'Yellowish leaves', 'Thin, long stem'], answer: [0, 0, 1, 1] }
    ] },
  { id: 'L3', lesson: 1, concept: 'A plant without sunlight',
    explain: 'A seedling grown without sunlight has yellowish leaves and a thin, long stem. It does not grow healthy, even if it has water, air and fertilizer.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which correctly describes a seedling grown without sunlight?', options: ['Leaves become yellowish and stems grow thin and long', 'Leaves grow big and stems grow thick', 'It does not grow at all'], answer: 0 },
      { type: 'build', style: 'whatif', mode: 'normal', level: 'hard', q: 'What happens to a plant that gets water, air and fertilizer, but no light?', parts: ['Its leaves become yellowish', 'and its stem grows', 'thin and long'], extra: ['Its leaves become dark green', 'thick and strong'] },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'A plant kept in a dark box grows a thick, strong stem and dark green leaves.', answer: 1 }
    ] },
  { id: 'L4', lesson: 1, concept: 'The sunlight experiment',
    explain: 'To check if plants need sunlight to grow: the condition to change is the presence or absence of sunlight. The conditions to keep the same are water, air, temperature and fertilizer.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What is the “condition to change” between the two pots in the experiment to check the effect of sunlight?', options: ['Presence or absence of sunlight', 'Amount of water', 'Temperature', 'Amount of fertilizer'], answer: 0 },
      { type: 'table', mode: 'normal', level: 'hard', q: 'Sort the conditions in the experiment to check the effect of sunlight.', cols: ['Condition to change', 'Conditions to keep the same'], items: ['Sunlight', 'Water', 'Temperature', 'Fertilizer'], answer: [0, 1, 1, 1] },
      { type: 'mc', style: 'story', mode: 'normal', level: 'medium', q: 'Pot A is in a place that gets a lot of sunlight. Pot B is covered with a dark box. What must be the same for both pots?', options: ['The water and the temperature', 'The sunlight', 'Nothing has to be the same', 'Only the colour of the pots'], answer: 0 }
    ] },

  /* ---------- 4-2 Fertilizer and Growth ---------- */
  { id: 'F1', lesson: 2, concept: 'Plants need fertilizer to grow bigger',
    explain: 'Plants need fertilizer in the soil to grow bigger and stronger. Along with water and sunlight, plants absorb nutrients from the fertilizer so their leaves and stems grow even bigger.',
    variants: [
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Seedlings grown with fertilizer ___ than seedlings grown without it.', options: ['grow bigger', 'grow smaller', 'die quickly'], answer: 0 },
      { type: 'mc', style: 'odd', mode: 'normal', level: 'medium', q: 'Which is NOT an effect of fertilizer on a plant?', options: ['Stems grow taller', 'The number of leaves decreases', 'The whole plant grows bigger'], answer: 1 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Plants absorb ___ from the fertilizer so their leaves and stems grow even bigger.', options: ['nutrients', 'starch', 'iodine'], answer: 0 }
    ] },
  { id: 'F2', lesson: 2, concept: 'The fertilizer experiment',
    explain: 'To check if plants need fertilizer to grow: the condition to change is the presence or absence of fertilizer. The conditions to keep the same are water, sunlight, air and temperature.',
    variants: [
      { type: 'multi', mode: 'normal', level: 'hard', q: 'Which TWO are “conditions to keep the same” in the experiment to check the effect of fertilizer?', options: ['Amount of fertilizer', 'How sunlight hits', 'Amount of water'], answer: [1, 2] },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'In the fertilizer experiment, pot A gets only water. What does pot B get?', options: ['Water mixed with a fixed amount of fertilizer', 'No water at all', 'Fertilizer but no sunlight', 'Iodine solution'], answer: 0 }
    ] },
  { id: 'F3', lesson: 2, boss: true, concept: 'What plants need to grow',
    explain: 'Plants make nutrients by getting light from the sun, and absorb fertilizer to grow their bodies even bigger.',
    variants: [
      { type: 'fill', mode: 'boss', level: 'hard', q: 'Plants make nutrients by getting light from the ___.', options: ['sun', 'soil', 'seed coat'], answer: 0 },
      { type: 'fill', mode: 'boss', level: 'hard', q: 'Plants absorb ___ to grow their bodies even bigger.', options: ['fertilizer', 'iodine', 'cotton'], answer: 0 }
    ] }
];
