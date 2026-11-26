/* Grade 5 Science (Languages) · Chapter 4 Conditions for Growth  ·  English school book, pages 44-51.
   Lessons: 1 Sunlight and Growth (44-45) · 2 Fertilizer and Growth (46-47) · Exercises (48-49) · Column «The Magic Seeds» (50-51, bonus).
   Ideas: L = sunlight and growth (4-1), F = fertilizer and growth (4-2), V = the Column (bonus).
   Review notes for the owner: the pictures of the seedlings after a week follow the Check page (49): with sunlight = dark green leaves and a thick strong stem; without sunlight = yellowish leaves and a thin, long stem; with fertilizer = taller and bigger. The book does not print the exact heights. Not asked: the open record-card activities.
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
    ] },
  /* ---------- extra ideas ---------- */
  { id: 'L5', lesson: 1, concept: 'Seeing the effect of sunlight',
    explain: 'After about a week, the seedling with sunlight has dark green leaves and a thick, strong stem. The seedling without sunlight has yellowish leaves and a thin, long stem.',
    variants: [
      { type: 'tap', diagram: 'plantsSun', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap the seedling that grew with lots of sunlight.', answer: 'A' },
      { type: 'tap', diagram: 'plantsSun', mode: 'normal', level: 'medium', q: 'Tap the seedling with yellowish leaves and a thin, long stem.', answer: 'B' },
      { type: 'tap', diagram: 'potsSun', mode: 'normal', level: 'medium', q: 'Tap the pot that is covered with a dark box to block the sunlight.', answer: 'B' }
    ] },
  { id: 'L6', lesson: 1, boss: true, concept: 'Sunlight and growth together',
    explain: 'By getting sunlight, plants make their own food needed for growth. Plants that get sunlight have dark green leaves and grow thick, strong stems; plants without sunlight have yellowish leaves and thin, long stems.',
    variants: [
      { type: 'mc', mode: 'boss', level: 'hard', q: 'Pot A is in a sunny place and pot B is under a dark box. After about a week, what do we see?', options: ['A has dark green leaves and a thick stem; B has yellowish leaves and a thin, long stem', 'Both seedlings look the same', 'B has dark green leaves and A has yellowish leaves', 'Both seedlings die'], answer: 0 },
      { type: 'fill', mode: 'boss', level: 'hard', q: 'By getting sunlight, plants make their own ___ needed for growth.', options: ['food', 'fertilizer', 'soil'], answer: 0 },
      { type: 'build', style: 'why', mode: 'boss', level: 'hard', q: 'Plants need sunlight to grow healthy.', parts: ['Because by getting sunlight,', 'plants make their own food', 'needed for growth'], extra: ['Because sunlight', 'is the plant’s fertilizer'] }
    ] },
  { id: 'F4', lesson: 2, concept: 'Seeing the effect of fertilizer',
    explain: 'In the same place, the seedling that got water mixed with fertilizer grows taller, bigger and stronger than the seedling that got only water.',
    variants: [
      { type: 'tap', diagram: 'plantsFert', mode: 'timed', seconds: 15, level: 'easy', q: 'Both seedlings are in the same sunny place. Tap the one that is very tall because of fertilizer.', answer: 'B' },
      { type: 'tap', diagram: 'plantsFert', mode: 'normal', level: 'medium', q: 'Tap the seedling that got only water.', answer: 'A' },
      { type: 'tap', diagram: 'potsFert', mode: 'normal', level: 'medium', q: 'Tap the pot that gets water mixed with a fixed amount of fertilizer.', answer: 'B' }
    ] },
  { id: 'F5', lesson: 2, concept: 'Fertilizer is like a supplement',
    explain: 'Fertilizer is like a supplement for plants: along with water and sunlight, plants absorb nutrients from it.',
    variants: [
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Fertilizer is like a ___ for plants.', options: ['supplement', 'toy', 'blanket'], answer: 0 },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'Fertilizer gives plants the nutrients that help leaves and stems grow bigger.', answer: 0 }
    ] },

  /* ---------- Column «The Magic Seeds That Travel Through Thousands of Years» (pages 50-51): bonus ---------- */
  { id: 'V1', lesson: 2, bonus: true, concept: 'Seeds that sleep for thousands of years',
    explain: 'Wheat seeds from over 3,000 years ago are sometimes found inside the tombs of ancient Egyptian kings. The “starch” needed to germinate is still left inside. Plants can stop their activity and “sleep” as long as the 3 conditions for germination (water, air, and the appropriate temperature) are not met. The extremely dry air in Egypt stopped the seeds from rotting.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What did scientists discover is still left inside the seeds found in ancient Egyptian tombs?', options: ['Starch, the energy source needed to germinate', 'Water', 'Fertilizer', 'Pollen'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'hard', q: 'What stopped the seeds in the tombs from rotting?', options: ['The extremely dry air in Egypt', 'Fertilizer in the soil', 'Strong sunlight', 'Cold water'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Seeds can “sleep” as long as the ___ conditions for germination are not met.', options: ['3', '1', '10'], answer: 0 }
    ] },
  { id: 'V2', lesson: 2, bonus: true, concept: 'The Nile’s black soil',
    explain: 'Ancient Egypt was called the “Gift of the Nile”. Every year, floods brought fine, nutrient-packed soil (called silt) from the high mountains of Ethiopia, creating rich farmland where plants could grow well without artificial fertilizer. Big, sharp stones from the upper part of the river change into fine mud by the lower part, making soft, loose soil that is easy for roots to stretch out in.',
    variants: [
      { type: 'fill', mode: 'normal', level: 'medium', q: 'The Nile floods brought fine, nutrient-packed soil called ___.', options: ['silt', 'starch', 'pollen'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Why could plants grow well on the Nile farmland without artificial fertilizer?', options: ['The silt from the floods was full of nutrients', 'It never rained', 'The plants made fertilizer from stones', 'The soil was always dry'], answer: 0 },
      { type: 'tf', mode: 'normal', level: 'hard', q: 'Soft, loose soil makes it easy for plant roots to stretch out and grow.', answer: 0 }
    ] },
  /* ---------- November 2026 exam models (directorate models 1-10, sent by the owner 26 Nov 2026) ----------
     guide: true = asked in the official models; drawn by the November test and kept out of Daily 5. */
  { id: 'L30', lesson: 1, bonus: true, guide: true, concept: 'Sunlight helps the plant make its food',
    explain: 'Sunlight is the main factor that helps a green plant make its own food. With suitable sunlight the leaves become dark green and the stems thick and strong. A young plant that has just grown from a germinating seed is called a seedling.',
    variants: [
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'The main factor that helps a green plant make its own food is ...', options: ['sunlight', 'water only', 'sandy soil', 'rocks'], answer: 0, hint: 'Plants make their food using light.' },
      { type: 'build', style: 'why', mode: 'normal', level: 'medium', q: 'Why do leaves become dark green when they get suitable sunlight?', parts: ['Because the plant', 'makes its own food', 'using sunlight'], extra: ['drinks more water', 'at night'], hint: 'What does the plant make when it gets sunlight?' },
      { type: 'term', mode: 'normal', level: 'easy', q: 'A young plant that has recently grown from a germinating seed.', answer: 'Seedling', choices: ['Cotyledon', 'Pollen', 'Fertilizer'], hint: 'The book calls the young plants in the two pots by this name.' }
    ] },
  { id: 'L31', lesson: 1, bonus: true, guide: true, concept: 'A fair test',
    explain: 'In an experiment we keep all the conditions the same except the one we test. This is a fair test. In the sunlight experiment both pots get the same amount of water, so sunlight is the only condition that changes.',
    variants: [
      { type: 'build', style: 'why', mode: 'normal', level: 'medium', q: 'Why must both plants get equal amounts of water in the sunlight experiment?', parts: ['So that sunlight is', 'the only condition', 'that changes'], extra: ['So that the plants', 'grow faster'], hint: 'Which condition do we want to test?' },
      { type: 'term', mode: 'normal', level: 'medium', q: 'A scientific rule: keep all the conditions of an experiment the same, except one condition that you change.', answer: 'Fair test', choices: ['Pollination', 'Magnification', 'Germination'], hint: 'It is a test that is fair to both pots.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What condition is changed between the two pots when testing the effect of sunlight on plant growth?', options: ['Sunlight', 'The amount of water', 'The temperature', 'The kind of seed'], answer: 0, hint: 'Look at the name of the experiment.' }
    ] },
  { id: 'F30', lesson: 2, bonus: true, guide: true, concept: 'Fertilizer cannot replace sunlight',
    explain: 'Fertilizer gives the plant nutrients, but it cannot replace sunlight. A plant kept in complete darkness gets yellowish leaves and a thin, long stem, even with water and fertilizer.',
    variants: [
      { type: 'tf', mode: 'timed', seconds: 12, level: 'easy', q: 'Fertilizer can completely replace sunlight for a green plant.', answer: 1, hint: 'Fertilizer gives nutrients. Does it give light?' },
      { type: 'tf', mode: 'timed', seconds: 12, level: 'easy', q: 'Water alone keeps a green plant healthy forever in complete darkness.', answer: 1, hint: 'Think of the pot under the dark box.' },
      { type: 'build', style: 'whatif', mode: 'normal', level: 'hard', q: 'What happens if a plant is given suitable fertilizer, but is kept in complete darkness?', parts: ['Its leaves become yellowish', 'and its stem grows', 'thin and long'], extra: ['dark green', 'thick and strong'], hint: 'Which condition is missing: fertilizer or light?' }
    ] },
  { id: 'F41', lesson: 2, bonus: true, guide: true, concept: 'Who am I? Fertilizer',
    explain: 'Fertilizer gives the plant useful mineral nutrients that help it grow stronger and larger. In the experiments we measure the height of the plants with a ruler or a measuring tape.',
    variants: [
      { type: 'term', mode: 'timed', seconds: 15, level: 'easy', q: 'Who am I? I give the plant useful mineral nutrients that help it become stronger and larger.', answer: 'Fertilizer', choices: ['Sunlight', 'Pollen', 'Starch'], hint: 'In the experiment it is mixed with the water of pot B.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Who am I? I am a ruler or measuring tape used in plant experiments. What do I measure?', options: ['The height of the plant', 'The temperature of the room', 'The amount of sunlight', 'The colour of the leaves'], answer: 0, hint: 'A ruler measures how long or tall something is.' }
    ] },
  { id: 'F42', lesson: 2, bonus: true, guide: true, concept: 'Too much fertilizer',
    explain: 'We add a fixed, suitable amount of fertilizer. A very large amount added at once harms the plant: it can damage the roots, and the plant may wilt.',
    variants: [
      { type: 'build', style: 'whatif', mode: 'normal', level: 'hard', q: 'What happens if a very large amount of fertilizer is added to the plant soil at once?', parts: ['It harms the roots', 'and the plant', 'may wilt'], extra: ['grows faster', 'and bigger'], hint: 'In the experiment we used a fixed amount. Is more always better?' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Why do we give the plant a fixed, suitable amount of fertilizer?', options: ['Because too much fertilizer can harm the plant', 'Because fertilizer replaces water', 'Because more fertilizer always makes the plant bigger'], answer: 0, hint: 'Think about what too much of anything does.' }
    ] }
];
