/* Grade 6 Science (Languages, English book) · Chapter 5 Photosynthesis
   Core ideas from the school book 2026/2027, both lessons (5-1 Sunlight and Starch, 5-2 Gas Exchange): Point!, Warm Up, Try, Exercise (pages 46-53).
   Idea letters (unused in g6): C = Sunlight and Starch (5-1), G = Gas Exchange (5-2).
   The book's words: photosynthesis, sunlight, water, carbon dioxide, oxygen, sugar, starch, nutrient, iodine solution, dark blue, ethanol,
   hot water, aluminum foil, breathing, daytime, nighttime, gas detector tube.
   Review notes (the book prints no answers; these come from the printed text):
   - Warm Up of page 48 (leaves A, B, C): the book does not print the result. It follows from page 47: A (checked at once, covered all night) has no starch,
     B (foil removed, 5 hours of sunlight) has starch, C (still covered) has no starch. Asked as: only B turns dark blue.
   - Page 47 says the plant "makes its food (sugar) and stores part of it as starch". Try 1 of page 49 asks "What nutrient is produced" under the title
     "Sunlight and Starch", so the answer is starch; sugar is accepted only where the question names sugar as the food.
   - "No dark blue" = the iodine solution does not change the leaf's colour to dark blue (Try 2, option D of page 49 says "Does not change").
   - The temperatures and steps of the starch test are only those printed on page 47 (hot water to soften, ethanol warmed in hot water to remove the green,
     wash with hot water then dilute iodine). Ethanol is highly flammable, so it is never heated directly over a flame.
   - Page 51: in the daytime the plant also breathes, but overall it takes in MORE carbon dioxide than it releases. At night it only breathes.
   - Not asked (open activities): "Let's predict how the air will change" (page 51, as a free prediction), the speech bubbles of the characters,
     the photographs of the girl at the experiment, the gas detector tube readings (no numbers are printed).
   Tap pictures (drawn in g6_plant.js): leafABC -> leafA | leafB | leafC ; dayNight -> dayTime | nightTime
   Generated pictures (fig 'photo', pic { img, label }; science/assets/g6_*.webp, made by the image generator, approved by the owner): plant in the sun (C1), half-covered leaf (C5), hot water (C7), iodine dish (C4), bag in the sun (G5).
   Pictures above a normal question: fig 'leafABC' (pic: { stage: 'ready' | 'day' | 'result' }), fig 'dayNight' (pic: { only: 'day' | 'night' }), fig 'bagPlant' (pic: { sun: true })
*/
(function () {
window.CHAPTER = { id: 'g6c5', title: 'Photosynthesis', grade: 'Grade 6', track: 'Languages' };

const NORM = { mode: 'normal', level: 'medium' }, QUICK = { mode: 'timed', seconds: 15, level: 'easy' }, SLOW = { mode: 'timed', seconds: 20, level: 'easy' }, BOSS = { mode: 'boss', level: 'hard' };
const mc = (q, options, o = {}) => ({ type: 'mc', ...NORM, q, options, answer: 0, ...o });
const tf = (q, truth, o = {}) => ({ type: 'tf', ...NORM, q, answer: truth ? 0 : 1, ...o });
const fill = (q, options, o = {}) => ({ type: 'fill', ...NORM, q, options, answer: 0, ...o });
const term = (q, answer, o = {}) => ({ type: 'term', ...NORM, q, answer, ...o });
const fix = (q, wrong, answer, o = {}) => ({ type: 'fix', ...NORM, q, wrong, answer, ...o });
const multi = (q, options, answer, o = {}) => ({ type: 'multi', ...NORM, q, options, answer, ...o });
const match = (q, left, right, o = {}) => ({ type: 'match', ...NORM, q, left, right, answer: left.map((_, i) => i), ...o });
const order = (q, items, answer, o = {}) => ({ type: 'order', ...NORM, q, items, answer, ...o });
const build = (style, q, parts, extra, o = {}) => ({ type: 'build', style, ...NORM, level: 'hard', q, parts, extra, ...o });
const tap = (diagram, q, answer, o = {}) => ({ type: 'tap', diagram, ...NORM, q, answer, ...o });
const abc = stage => ({ fig: 'leafABC', pic: { stage } });

window.IDEAS = [
  /* ---------- 5-1 Sunlight and Starch ---------- */
  { id: 'C1', lesson: 1, concept: 'Photosynthesis: sunlight, water and carbon dioxide make food',
    explain: 'When sunlight falls on the leaves, the plant performs photosynthesis: it uses water and carbon dioxide gas to make its food (sugar).',
    variants: [
      mc('What does a plant do when sunlight falls on its leaves?', ['It performs photosynthesis', 'It stops all its work', 'It makes oxygen out of soil'], { ...QUICK, hint: 'The title of the chapter is the answer.', fig: 'photo', pic: { img: 'g6_plant_sun', label: 'A green plant in a pot, with the sun shining in a blue sky' } }),
      term('The process by which a plant uses sunlight, water and carbon dioxide to make its food.', 'Photosynthesis', { hint: 'Photo means light.' }),
      fill('When sunlight falls on the leaves, the plant uses water and ___ to make its food.', ['carbon dioxide', 'oxygen', 'starch'], { hint: 'It is a gas in the air that plants take in.' }),
      multi('What does a plant use to make its food (sugar) in photosynthesis? Choose all the correct answers.', ['Water', 'Carbon dioxide gas', 'Sunlight', 'Iodine solution'], [0, 1, 2], { hint: 'Think of what reaches the leaf: from the air, from the roots and from the sky.' }),
      tf('Photosynthesis happens when sunlight falls on the leaves.', true, { ...QUICK, hint: 'It needs light.' }),
      mc('What is the food that a plant makes by photosynthesis?', ['Sugar', 'Ethanol', 'Aluminum foil'], { hint: 'It is sweet.' })
    ] },
  { id: 'C2', lesson: 1, concept: 'The plant stores part of its food as starch',
    explain: 'The plant stores part of the food it makes in the form of starch, which it needs for growth.',
    variants: [
      mc('In what form does a plant store part of the food it makes?', ['Starch', 'Iodine', 'Foil'], { ...QUICK, hint: 'The lesson is called Sunlight and ...' }),
      fill('A plant stores part of its food in the form of ___, which it needs for growth.', ['starch', 'oxygen', 'ethanol'], { hint: 'Potatoes and rice are full of it.' }),
      tf('The starch stored in a plant is needed for its growth.', true, { ...QUICK, hint: 'A plant uses its stored food to grow.' }),
      term('The nutrient that a plant stores after it makes food by photosynthesis.', 'Starch', { hint: 'Iodine turns it dark blue.' }),
      mc('Which statement is correct about the food of a plant?', ['It makes sugar and stores part of it as starch', 'It takes starch from the air and stores it as sugar', 'It eats the soil to get its starch'], { hint: 'It makes the food by itself in the leaves.' })
    ] },
  { id: 'C3', lesson: 1, concept: 'Plants produce starch by receiving sunlight',
    explain: 'The leaves that receive sunlight produce starch. Blocking the sunlight with aluminum foil stops the leaf from producing starch.',
    variants: [
      mc('What nutrient is produced when sunlight falls on the leaves of plants?', ['Starch', 'Ethanol', 'Aluminum'], { hint: 'The iodine test is for this nutrient.' }),
      mc('Which of the following explanations is correct?', ['Plants produce starch by receiving sunlight', 'Plants produce starch by blocking sunlight'], { hint: 'Think of which leaf of the plant makes food: the one in the light or the one in the dark.' }),
      tf('Plants produce starch by blocking sunlight.', false, { ...QUICK, hint: 'They need light to make food.', explain: 'Plants produce starch by receiving sunlight.' }),
      fill('Plants produce starch by ___ sunlight.', ['receiving', 'blocking', 'avoiding'], { hint: 'Which word fits with light and photosynthesis?' }),
      build('why', 'How do plants produce starch?', ['Plants produce starch', 'by receiving', 'sunlight'], ['by blocking', 'in the dark'], { hint: 'Think of the leaf in the sun.' })
    ] },
  { id: 'C4', lesson: 1, concept: 'Iodine solution turns starch dark blue',
    explain: 'When you add iodine solution to starch, the color changes to dark blue.',
    variants: [
      mc('What color does a leaf that was in the sunlight turn when dipped in iodine solution?', ['Dark blue', 'Yellow', 'Red', 'It does not change'], { hint: 'The leaf in the sun has made starch.' }),
      term('The solution that turns starch dark blue.', 'Iodine solution', { hint: 'It is brown-orange in the petri dish.' }),
      fill('When you add iodine solution to starch, the color changes to ___.', ['dark blue', 'red', 'green'], { ...QUICK, hint: 'It is the colour of the sea at night.' }),
      tf('Iodine solution turns starch red.', false, { ...QUICK, hint: 'Think of a deep, dark colour.', explain: 'It turns starch dark blue.' }),
      mc('A leaf turns dark blue when dipped in iodine solution. What does this show?', ['The leaf contains starch', 'The leaf contains ethanol', 'The leaf is covered with foil'], { hint: 'The solution is a test for one nutrient.', fig: 'photo', pic: { img: 'g6_leaf_iodine', label: 'A round glass dish with orange-brown iodine solution and a dark blue leaf in it, next to a small dropper bottle' } })
    ] },
  { id: 'C5', lesson: 1, concept: 'The condition to change: sunlight or no sunlight',
    explain: 'To check if sunlight is needed to produce starch, the condition to change is whether the leaf gets sunlight or not.',
    variants: [
      mc('In the experiment to check if sunlight is needed to produce starch, what is the condition you change?', ['Whether the leaf gets sunlight or not', 'The kind of plant', 'The size of the beaker'], { hint: 'It is the thing the experiment is asking about.' }),
      fill('The condition we change is whether the leaf gets ___ or not.', ['sunlight', 'ethanol', 'iodine'], { hint: 'What do we cover the leaf from with foil?' }),
      mc('What do we cover the leaves with, so that sunlight does not fall on them?', ['Aluminum foil', 'Iodine solution', 'Hot water'], { ...QUICK, hint: 'It is a shiny kitchen sheet.' }),
      tf('To change the condition of the experiment, we change the kind of plant.', false, { hint: 'The plant stays the same: only the light changes.', explain: 'We change only whether the leaf gets sunlight or not.' }),
      mc('If you hide a part of a leaf with aluminum foil to block the sunlight, how will that part react to the iodine solution?', ['It will not turn dark blue', 'It will turn dark blue', 'It will turn red'], { hint: 'No sunlight means no starch.', fig: 'photo', pic: { img: 'g6_leaves_foil', label: 'Two leaves of a plant in a pot, each one with half of the leaf wrapped in shiny aluminum foil' } })
    ] },
  { id: 'C6', lesson: 1, concept: 'Why the leaves are covered the day before',
    explain: 'Since there might already be starch in the leaves, we cover the leaves from the day before the experiment so that sunlight does not fall on them.',
    variants: [
      mc('Why do we cover the leaves with foil from the day before the experiment?', ['There might already be starch in the leaves', 'To make the leaves softer', 'To remove the green color'], { hint: 'Starch made earlier would spoil the result.' }),
      fill('We cover the leaves from the day before because there might already be ___ in the leaves.', ['starch', 'ethanol', 'foil'], { hint: 'It is the nutrient we are testing for.' }),
      tf('We cover the leaves the day before so that sunlight does not fall on them.', true, { ...QUICK, hint: 'Covered leaves are kept in the dark.' }),
      mc('When should the leaves be covered with aluminum foil?', ['The day before the experiment', 'After the iodine test', 'Only at the end of the day of the experiment'], { hint: 'It has to be done in advance.' })
    ] },
  { id: 'C7', lesson: 1, concept: 'How to check for starch in leaves',
    explain: 'To check for starch: put the leaf in hot water to make it soft; put it into ethanol warmed in hot water to remove the green color; wash it with hot water and dip it in dilute iodine solution.',
    variants: [
      mc('Why do we put the leaf in hot water first?', ['To make it soft', 'To make it green', 'To make it dark blue'], { hint: 'It is the first step of the test.', fig: 'photo', pic: { img: 'g6_hot_water', label: 'A glass beaker of hot water with steam rising, and a green leaf inside it' } }),
      mc('Why is the leaf put into ethanol warmed in hot water?', ['To remove the green color from the leaf', 'To make starch', 'To cover it from sunlight'], { hint: 'The green colour would hide the blue.' }),
      mc('What do we do after washing the leaf with hot water?', ['Dip it in dilute iodine solution', 'Put it in the sunlight', 'Cover it with foil'], { hint: 'It is the last step.' }),
      order('Put the steps of checking for starch in leaves in the right order.', ['Dip the leaf in dilute iodine solution', 'Put the leaf in hot water to make it soft', 'Wash the leaf with hot water', 'Put the leaf into ethanol warmed in hot water'], [1, 3, 2, 0], { hint: 'Soften, take away the green, wash, then test.' }),
      tf('It is safe to heat ethanol directly over a flame.', false, { ...QUICK, hint: 'Ethanol burns easily.', explain: 'Ethanol is highly flammable, so it is warmed in hot water.' }),
      fill('Ethanol is highly ___, so we do not heat it directly over a flame.', ['flammable', 'blue', 'soft'], { hint: 'It catches fire easily.' })
    ] },
  { id: 'C8', lesson: 1, concept: 'Cautions in the starch test',
    explain: 'Do not touch the hot water directly, or you will get burned. Ethanol is highly flammable, so do not heat it directly over a flame.',
    variants: [
      mc('Why must we not touch the hot water directly?', ['We will get burned', 'The leaf will turn dark blue', 'The water will become ethanol'], { ...QUICK, hint: 'It is about 80 degrees Celsius.' }),
      multi('Which of these are cautions of the starch test? Choose all the correct answers.', ['Do not touch the hot water directly', 'Do not heat ethanol directly over a flame', 'Do not cover the leaf with foil', 'Do not wash the leaf'], [0, 1], { hint: 'Think of what is hot and what burns.' }),
      match('Match each material to its caution.', ['Hot water', 'Ethanol'], ['You will get burned if you touch it directly', 'It is highly flammable'], { hint: 'One burns the skin, one catches fire.' })
    ] },
  { id: 'C9', lesson: 1, boss: true, concept: 'The experiment with leaves A, B and C',
    explain: 'Leaf A is checked at once after the foil covered it all night: it has no starch. Leaf B is uncovered and kept 5 hours in the sunlight: it turns dark blue. Leaf C stays covered: it has no starch.',
    variants: [
      mc('Leaves A, B and C were covered with foil the day before. In the morning the foil was removed from B only, and leaf A was tested. Why is leaf A tested?', ['To check if there is starch before the sunlight', 'To make leaf A softer', 'To remove the green colour'], { ...BOSS, hint: 'It shows the starting point.', ...abc('ready') }),
      mc('Leaves A, B and C were covered with foil the day before. The foil was then removed from leaf B only, and the plant stayed 5 hours in the sunlight. Which leaf turns dark blue when it is tested with iodine?', ['Leaf B', 'Leaf C', 'Both of them'], { ...BOSS, hint: 'Only one leaf got sunlight.', ...abc('day') }),
      multi('The foil was removed from leaf B only, and the plant stayed 5 hours in the sunlight. Choose all the leaves that do NOT turn dark blue when they are tested with iodine.', ['Leaf A', 'Leaf C', 'Leaf B'], [0, 1], { ...BOSS, hint: 'Which leaves were still covered with foil?', ...abc('result') }),
      tap('leafABC', 'This leaf was uncovered and left 5 hours in the sunlight. Tap it.', 'leafB', { ...BOSS, hint: 'Look for the leaf without foil.' }),
      mc('What does the experiment show?', ['The leaf makes starch when it receives sunlight', 'The leaf makes starch in the dark', 'The foil makes starch'], { ...BOSS, hint: 'Compare B with C.' }),
      build('why', 'Why does leaf C not turn dark blue?', ['Leaf C stayed covered with foil', 'so it did not receive sunlight', 'and did not produce starch'], ['so it received more sunlight', 'because it was washed with ethanol'], { ...BOSS, hint: 'No light means no starch.' })
    ] },

  /* ---------- 5-2 Gas Exchange ---------- */
  { id: 'G1', lesson: 2, concept: 'In sunlight plants take in carbon dioxide and release oxygen',
    explain: 'When sunlight is hitting the leaves, plants take in carbon dioxide and release oxygen.',
    variants: [
      mc('What gas do plants release into the air when they are in the sunlight?', ['Oxygen', 'Carbon dioxide', 'Nitrogen'], { hint: 'It is the gas we breathe in.' }),
      fill('When sunlight is hitting the leaves, plants take in ___ and release oxygen.', ['carbon dioxide', 'nitrogen', 'starch'], { hint: 'It is the gas we breathe out.' }),
      tf('In the sunlight, plants release carbon dioxide and take in oxygen only.', false, { ...QUICK, hint: 'It is the opposite.', explain: 'In the sunlight plants take in carbon dioxide and release oxygen.' }),
      term('The gas that plants take in from the air when sunlight is hitting the leaves.', 'Carbon dioxide', { hint: 'CO2.' }),
      match('In the sunlight, which gas do plants take in and which do they release?', ['Take in', 'Release'], ['Carbon dioxide', 'Oxygen'], { hint: 'The plant uses carbon dioxide to make food.' }),
      mc('Which pair of gases is right for a plant in the sunlight?', ['Takes in carbon dioxide and releases oxygen', 'Takes in oxygen and releases carbon dioxide', 'Takes in nitrogen and releases starch'], { hint: 'Photosynthesis uses carbon dioxide.' })
    ] },
  { id: 'G2', lesson: 2, concept: 'Plants breathe to live and grow',
    explain: 'Plants also breathe to live and grow. When they breathe, they take in oxygen and release carbon dioxide.',
    variants: [
      mc('What gas do plants take in from the air when they breathe?', ['Oxygen', 'Carbon dioxide', 'Nitrogen'], { hint: 'The same gas that we take in when we breathe.' }),
      fill('When plants breathe, they take in oxygen and release ___.', ['carbon dioxide', 'starch', 'nitrogen'], { hint: 'It is the gas we release when we breathe out.' }),
      tf('Plants breathe to live and grow.', true, { ...QUICK, hint: 'Plants are living things.' }),
      mc('Which statement about breathing in plants is correct?', ['They take in oxygen and release carbon dioxide', 'They take in carbon dioxide and release oxygen', 'They do not breathe'], { hint: 'Breathing is the same in plants and in us.' }),
      match('Match each process to the gases.', ['Photosynthesis in sunlight', 'Breathing'], ['Takes in carbon dioxide and releases oxygen', 'Takes in oxygen and releases carbon dioxide'], { hint: 'The two processes are opposites.' })
    ] },
  { id: 'G3', lesson: 2, concept: 'At night plants only breathe',
    explain: 'At night, because there is no light, plants only breathe, taking in oxygen and releasing carbon dioxide.',
    variants: [
      mc('During the night, when there is no light, what kind of gas exchange do plants do?', ['They take in oxygen and release carbon dioxide (breathing)', 'They take in carbon dioxide and release oxygen'], { hint: 'No light means no photosynthesis.', ...{ fig: 'dayNight', pic: { only: 'night' } } }),
      fill('At night, because there is no light, plants only ___.', ['breathe', 'make starch', 'release oxygen'], { hint: 'The only process left.' }),
      tf('At night, plants take in carbon dioxide and release oxygen.', false, { ...QUICK, hint: 'It needs light.', explain: 'At night they only breathe: they take in oxygen and release carbon dioxide.' }),
      mc('Why do plants only breathe at night?', ['Because there is no light', 'Because they are asleep and need no air', 'Because the soil is cold'], { hint: 'What does photosynthesis need?' }),
      tap('dayNight', 'Tap the picture when plants only breathe, taking in oxygen and releasing carbon dioxide.', 'nightTime', { hint: 'Look for the moon.' })
    ] },
  { id: 'G4', lesson: 2, concept: 'In the daytime plants take in more carbon dioxide than they release',
    explain: 'In the daytime, taking in carbon dioxide and releasing oxygen is very active. Breathing also happens, but overall plants take in more carbon dioxide.',
    variants: [
      mc('Which statement correctly explains what happens between plants and air?', ['During the daytime, plants take in more carbon dioxide than the carbon dioxide they release by breathing', 'Plants keep releasing only oxygen all day time', 'While the sunlight is hitting them, plants do not breathe'], { hint: 'In the day both things happen, but one is stronger.' }),
      tf('While the sunlight is hitting them, plants do not breathe.', false, { hint: 'Plants breathe day and night.', explain: 'Breathing is also happening in the daytime.' }),
      fill('During the daytime, plants take in ___ carbon dioxide than they release by breathing.', ['more', 'less', 'the same'], { hint: 'Photosynthesis is very active in the light.' }),
      tf('Plants keep releasing only oxygen all day time.', false, { ...QUICK, hint: 'They also breathe.' }),
      mc('In the daytime, which is more active in plants?', ['Taking in carbon dioxide and releasing oxygen', 'Breathing'], { hint: 'There is light.', ...{ fig: 'dayNight', pic: { only: 'day' } } })
    ] },
  { id: 'G5', lesson: 2, concept: 'The plant in the bag changes the air',
    explain: 'A plant in a bag was left in sunlight for about 1 day. In sunlight the amount of carbon dioxide inside the bag decreases, and the amount of oxygen increases.',
    variants: [
      mc('A plant is wrapped in a bag and left in sunlight for 1 day. What happens to the carbon dioxide inside the bag?', ['It decreases', 'It increases', 'It does not change'], { hint: 'The plant uses it to make food.', fig: 'photo', pic: { img: 'g6_bag_sun', label: 'A plant in a pot covered by a clear plastic bag tied at the bottom, in the sunshine' } }),
      mc('A plant is wrapped in a bag and left in sunlight for 1 day. What happens to the oxygen inside the bag?', ['It increases', 'It decreases', 'It does not change'], { hint: 'The plant releases it.', fig: 'photo', pic: { img: 'g6_bag_sun', label: 'A plant in a pot covered by a clear plastic bag tied at the bottom, in the sunshine' } }),
      fill('In sunlight the amount of carbon dioxide inside the bag ___, and the amount of oxygen increases.', ['decreases', 'increases', 'stays the same'], { hint: 'Think of what the plant takes in.' }),
      tf('In sunlight, the amount of oxygen inside the bag decreases.', false, { hint: 'The plant releases oxygen.', explain: 'In sunlight the amount of oxygen inside the bag increases.' }),
      mc('Which tool is used to check how the percentage of carbon dioxide and oxygen inside the bag changed?', ['A gas detector tube', 'A beaker', 'A petri dish'], { hint: 'It detects gases.' })
    ] },
  { id: 'G6', lesson: 2, boss: true, concept: 'Day, night and the air',
    explain: 'Daytime: photosynthesis (carbon dioxide in, oxygen out) is very active and breathing also happens, but overall more carbon dioxide is taken in. Night: only breathing (oxygen in, carbon dioxide out).',
    variants: [
      match('Match each time to what plants do with the gases.', ['Daytime', 'Nighttime'], ['Take in carbon dioxide and release oxygen very actively', 'Only breathe: take in oxygen and release carbon dioxide'], { ...BOSS, hint: 'At night there is no light.' }),
      multi('Choose all the correct statements.', ['At night plants take in oxygen', 'In the daytime plants release oxygen', 'At night plants take in carbon dioxide to make food', 'Plants never breathe'], [0, 1], { ...BOSS, hint: 'Check each one with and without light.' }),
      mc('Why do plants release carbon dioxide at night but take in more carbon dioxide than they release in the daytime?', ['At night there is no light and they only breathe; in the daytime photosynthesis is very active', 'At night they eat more and in the daytime they sleep', 'Because the air has more carbon dioxide at night'], { ...BOSS, hint: 'Light is the difference.' }),
      tap('dayNight', 'Tap the time when plants take in carbon dioxide and release oxygen very actively.', 'dayTime', { ...BOSS, hint: 'Look for the sun.' }),
      build('why', 'What happens between a plant and the air at night?', ['Because there is no light', 'the plant only breathes', 'taking in oxygen and releasing carbon dioxide'], ['the plant makes sugar', 'taking in carbon dioxide and releasing oxygen'], { ...BOSS, hint: 'No light means no photosynthesis.' }),
      tf('In the daytime plants breathe too, but they take in more carbon dioxide than they release.', true, { ...BOSS, hint: 'Both processes happen; one wins.' })
    ] },
  /* ---------- November 2026 review («سندباد» مراجعة شهر نوفمبر, 6 tests, owner 27 Nov 2026): items the bank lacked; guide: true ---------- */
  { id: 'C30', lesson: 1, bonus: true, guide: true, concept: "Photosynthesis and the starch test",
    explain: "Photosynthesis is the life process in which the plant makes its food using sunlight, water and carbon dioxide; it makes starch and gives out oxygen. In the starch test the leaf is put in ethanol to remove its green colour; ethanol is not heated directly over a flame because it catches fire easily. Iodine turns dark blue on parts of the leaf that were in the light, the proof that the plant made starch. A part covered with aluminium foil gets no light, makes no starch and the iodine does not change colour. A plant kept without sunlight gets yellow leaves and may die because it cannot make its food.",
    variants: [
      { type: "fill", mode: "normal", level: "easy", q: "The plant carries out ___ to make starch and produce oxygen.", options: ["photosynthesis", "breathing", "excretion"], answer: 0, hint: "It needs light." },
      { type: "mc", mode: "normal", level: "easy", q: "The plant makes its food in a process called:", options: ["photosynthesis", "breathing", "excretion", "burning"], answer: 0, hint: "Photo = light." },
      { type: "mc", mode: "normal", level: "easy", q: "When iodine is added, a leaf that was in sunlight turns:", options: ["dark blue", "yellow", "red", "brown"], answer: 0, hint: "Iodine shows starch." },
      { type: "build", style: "why", mode: "normal", level: "easy", q: "Ethanol is not heated directly over the flame.", parts: ["Because it is", "a substance that", "catches fire very easily"], extra: ["because its colour", "freezes quickly"], hint: "Is ethanol safe near fire?" },
      { type: "build", style: "whatif", mode: "normal", level: "hard", q: "What happens when iodine is put on the part of a leaf covered with aluminium foil? Why?", parts: ["The iodine does not change colour, because the foil blocked the sunlight,", "so that part could not do photosynthesis", "and no starch was made"], extra: ["turns dark blue", "because it is warm"], hint: "Did light reach the covered part?" },
      { type: "build", style: "whatif", mode: "normal", level: "medium", q: "What happens if a plant is kept completely without sunlight every day?", parts: ["Its leaves turn yellow", "and it may die in the end", "because it cannot make its food"], extra: ["grows", "faster"], hint: "What does the plant need to make food?" },
      { type: "tf", mode: "timed", seconds: 12, level: "easy", q: "A leaf that does not get sunlight can make starch normally.", answer: 1, hint: "Starch needs light." },
      { type: "build", style: "say", mode: "normal", level: "medium", q: "What is the proof that a plant makes its own food?", parts: ["Starch forms in the parts of the leaf in the light,", "which is shown when iodine", "turns dark blue on them"], extra: ["the leaf", "turns red"], hint: "Remember the iodine test." },
      { type: "mc", mode: "normal", level: "easy", q: "Name the liquid used to remove the green colour from a leaf.", options: ["Ethanol", "Iodine", "Water", "Vinegar"], answer: 0, hint: "It must not be heated over a flame." },
      { type: "multi", mode: "normal", level: "medium", q: "Which of these does the plant produce in photosynthesis? Choose all correct answers.", options: ["Oxygen", "Sugar", "Starch", "Carbon dioxide"], answer: [0, 1, 2], hint: "The plant takes in one of them." },
      { type: "term", mode: "normal", level: "medium", q: "The form in which the plant stores its food (sugar) in the leaves and needs it to grow.", answer: "Starch", choices: ["Oxygen", "Iodine", "Ethanol"], hint: "Iodine turns it dark blue." },
      { type: "build", style: "define", mode: "normal", level: "easy", q: "What is photosynthesis?", parts: ["A life process in which the plant makes its food", "in the presence of sunlight, water", "and carbon dioxide"], extra: ["in the dark", "with oxygen only"], hint: "Light + water + a gas." }
    ] },
  { id: 'G30', lesson: 2, bonus: true, guide: true, concept: "Gas exchange: day and night",
    explain: "Small pores on the leaf surface are called stomata; they let gases in and out. In the day plants do photosynthesis (taking in carbon dioxide, giving out oxygen) and breathing; at night they only breathe, taking in oxygen and giving out carbon dioxide. So more oxygen is released in the day, and plants should not be kept in closed bedrooms at night. Plants breathe day and night. Photosynthesis happens in the day only. Gas exchange gives the plant carbon dioxide for photosynthesis and oxygen for breathing. The lower surface of a leaf has more stomata than the upper surface. If the stomata are closed, transpiration and gas exchange stop, photosynthesis stops and the plant dies.",
    variants: [
      { type: "fill", mode: "normal", level: "easy", q: "The tiny pores on the surface of a leaf are called ___.", options: ["stomata", "veins", "roots"], answer: 0, hint: "Gases pass through them." },
      { type: "build", style: "why", mode: "normal", level: "medium", q: "Plants release more oxygen during the day.", parts: ["Because photosynthesis is more active", "in the sunlight,", "and it produces oxygen"], extra: ["because plants", "sleep at night"], hint: "Which process gives oxygen?" },
      { type: "build", style: "why", mode: "normal", level: "medium", q: "It is better not to keep plants in closed bedrooms at night.", parts: ["Because at night plants only breathe: they use oxygen and give out carbon dioxide", "as there is no sunlight,", "so the oxygen in the closed room goes down"], extra: ["because plants make", "more oxygen at night"], hint: "What do plants do in the dark?" },
      { type: "build", style: "why", mode: "normal", level: "medium", q: "Gas exchange takes place in the plant.", parts: ["So the plant gets the carbon dioxide needed for photosynthesis", "and the oxygen needed for breathing", "and making energy"], extra: ["to get", "more water"], hint: "Which gas for which process?" },
      { type: "build", style: "whatif", mode: "normal", level: "hard", q: "What happens if the stomata on the leaves are closed completely?", parts: ["Transpiration and gas exchange stop,", "so photosynthesis stops", "and the plant dies"], extra: ["the plant", "grows faster"], hint: "What passes through the stomata?" },
      { type: "tf", mode: "timed", seconds: 12, level: "easy", q: "Plants take in oxygen and give out carbon dioxide during photosynthesis.", answer: 1, hint: "Which gas does photosynthesis give out?" },
      { type: "tf", mode: "timed", seconds: 12, level: "easy", q: "The plant needs oxygen to carry out photosynthesis.", answer: 1, hint: "Photosynthesis uses carbon dioxide." },
      { type: "tf", mode: "timed", seconds: 12, level: "easy", q: "Plants breathe day and night.", answer: 0, hint: "Does breathing need light?" },
      { type: "tf", mode: "timed", seconds: 12, level: "medium", q: "The two surfaces of a leaf have the same number of stomata.", answer: 1, hint: "Which surface has more?" },
      { type: "tf", mode: "timed", seconds: 12, level: "medium", q: "Photosynthesis and breathing differ in the conditions each process needs.", answer: 0, hint: "One needs light, the other does not." },
      { type: "mc", mode: "normal", level: "medium", q: "Compare photosynthesis and breathing by when they happen.", options: ["Photosynthesis: in the day only; breathing: day and night", "Photosynthesis: day and night; breathing: in the day only", "Both happen at night only"], answer: 0, hint: "Which one needs sunlight?" },
      { type: "mc", mode: "normal", level: "medium", q: "Compare the upper and lower surfaces of a leaf by the number of stomata.", options: ["The upper surface has fewer stomata; the lower surface has more", "The upper surface has more stomata; the lower surface has fewer", "Both have none"], answer: 0, hint: "Most stomata are underneath." },
      { type: "mc", mode: "normal", level: "easy", q: "Plants take in more ___ from the air in the day.", options: ["carbon dioxide", "oxygen", "nitrogen"], answer: 0, hint: "Photosynthesis uses it." },
      { type: "term", mode: "normal", level: "easy", q: "The gas that plants make and living things depend on to keep breathing.", answer: "Oxygen", choices: ["Carbon dioxide", "Nitrogen", "Water vapour"], hint: "We breathe it in." }
    ] }
];
})();
