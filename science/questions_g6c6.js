/* Grade 6 Science (Languages, English book) · Chapter 6 Transportation of Water in Plants
   Core ideas from the school book 2026/2027, both lessons (6-1 Transpiration, 6-2 The Path of Water): Point!, Warm Up, Try, Exercise (pages 54-59),
   plus the Enrichment Corner "Blessings of the Nile - Plant Survival Strategies" (pages 60-61) as bonus ideas.
   Idea letters (unused in g6): E = Transpiration (6-1), F = The Path of Water (6-2), N = Enrichment Corner (bonus).
   The book's words: transpiration, water vapor, stomata, pores, lower surface, leaves, roots, stems, tubes / paths, wilted, colored water, flask,
   cutter knife (only the teacher), absorbent cotton, magnifying glass, microscope, plastic bag, twist tie.
   Review notes (the book prints no answers; these come from the printed text):
   - Warm Up of page 55 (bags over plant A with leaves and plant B without): the book does not print the result. It follows from the Point box (transpiration
     mainly happens through the stomata of the leaves): the bag over A gets many more water drops than the bag over B. Asked as "many more", never "none".
   - Try 1-(2) and Exercise 1-(2), 2-(1) are asked as printed (A/B/C options). Try 2-(2) and Exercise 2-(2) (open answers) are asked as choices:
     the plant recovers after a while because water spreads to the whole body; to recover a wilted plant, water its base.
   - The steps of the coloured-water experiment (page 57) are ordered as printed: dig up and wash the roots, soak in coloured water, wait a few hours and observe
     the colour, cut roots, stems and leaves and observe the cut surfaces. The cutter knife is used only by the teacher.
   - The Enrichment Corner (pages 60-61) is bonus only (never in Daily 5). Its lotus and Nile air-purifier parts repeat photosynthesis (chapter 5); the papyrus and
     the "natural air conditioner" parts are asked as printed. The Arabic book's Column may differ: this file follows the English book only.
   - Not asked (open activities): "Let's talk about what we can learn from this experiment", "Let's sketch and summarize what you observe", the speech bubbles.
   Tap pictures (drawn in g6_water.js): bagsAB -> bagA | bagB ; leafSurface -> wUpper | wLower ; waterPath -> wRoots | wStems | wLeaves
   Generated pictures (fig 'photo', pic { img, label }; science/assets/g6_*.webp, made by the image generator): bag over leaves (E5), two bagged pots (E5), wilted plant,
   watering a wilted plant (F3), red-water flask (F4), papyrus and lotus on the Nile (N1, N3).
*/
(function () {
window.CHAPTER = { id: 'g6c6', title: 'Transportation of Water in Plants', grade: 'Grade 6', track: 'Languages' };

const NORM = { mode: 'normal', level: 'medium' }, QUICK = { mode: 'timed', seconds: 15, level: 'easy' }, SLOW = { mode: 'timed', seconds: 20, level: 'easy' }, BOSS = { mode: 'boss', level: 'hard' };
const mc = (q, options, o = {}) => ({ type: 'mc', ...NORM, q, options, answer: 0, ...o });
const tf = (q, truth, o = {}) => ({ type: 'tf', ...NORM, q, answer: truth ? 0 : 1, ...o });
const fill = (q, options, o = {}) => ({ type: 'fill', ...NORM, q, options, answer: 0, ...o });
const term = (q, answer, o = {}) => ({ type: 'term', ...NORM, q, answer, ...o });
const multi = (q, options, answer, o = {}) => ({ type: 'multi', ...NORM, q, options, answer, ...o });
const match = (q, left, right, o = {}) => ({ type: 'match', ...NORM, q, left, right, answer: left.map((_, i) => i), ...o });
const order = (q, items, answer, o = {}) => ({ type: 'order', ...NORM, q, items, answer, ...o });
const build = (style, q, parts, extra, o = {}) => ({ type: 'build', style, ...NORM, level: 'hard', q, parts, extra, ...o });
const tap = (diagram, q, answer, o = {}) => ({ type: 'tap', diagram, ...NORM, q, answer, ...o });
const ph = (img, label) => ({ fig: 'photo', pic: { img, label } });

window.IDEAS = [
  /* ---------- 6-1 Transpiration ---------- */
  { id: 'E1', lesson: 1, concept: 'Transpiration: water leaves the plant through the leaves',
    explain: 'Some of the water absorbed from the roots goes out into the air from the leaves. The process of water inside the plant changing into water vapor and being released into the air is called transpiration.',
    variants: [
      mc('Where does some of the water that plants absorb from their roots go?', ['Out into the air from the leaves', 'Back into the soil from the stem', 'It all turns into oxygen'], { ...QUICK, hint: 'Think of the cloudy bag with water drops on the leaves.' }),
      tf('Some of the water absorbed from the roots goes out into the air from the leaves.', true, { ...QUICK, hint: 'The leaves are the exit of the water.' }),
      mc('What is the name of the process when the water inside a plant changes into water vapor and is released from the leaves?', ['Transpiration', 'Photosynthesis', 'Digestion'], { hint: 'The word starts with trans- and ends with -spiration.' }),
      term('The process of water inside a plant changing into water vapor and being released into the air.', 'Transpiration', { hint: 'It is the title of lesson 6-1.', choices: ['Photosynthesis', 'Respiration', 'Circulation'] }),
      fill('Some of the water absorbed from the roots goes out into the air from the ___.', ['leaves', 'roots', 'soil'], { hint: 'Not the part that absorbs it.' })
    ] },
  { id: 'E2', lesson: 1, concept: 'The water leaves as water vapor',
    explain: 'The water inside the plant changes into water vapor and is released into the air.',
    variants: [
      mc('In what form does the water leave the leaves in transpiration?', ['Water vapor', 'Ice', 'Liquid drops that fall to the ground'], { ...QUICK, hint: 'It is a gas that you cannot see.' }),
      fill('In transpiration, the water inside the plant changes into water ___ and is released into the air.', ['vapor', 'starch', 'oxygen'], { hint: 'It is water in the form of a gas.' }),
      tf('In transpiration, water inside the plant changes into water vapor.', true, { ...QUICK, hint: 'Think of steam rising from hot water.' }),
      mc('What happens to the water inside a plant during transpiration?', ['It changes into water vapor and goes out into the air', 'It changes into starch and stays in the leaves', 'It changes into oxygen and goes into the soil'], { hint: 'Think of the name of the gas form of water.' })
    ] },
  { id: 'E3', lesson: 1, concept: 'Stomata: the exits for water vapor',
    explain: 'Stomata are small pores mostly found on the lower surface of the leaves. They act as exits for water vapor. Transpiration mainly happens through the stomata.',
    variants: [
      mc('What are the small pores on the lower surface of the leaves called?', ['Stomata', 'Roots', 'Starch'], { ...QUICK, hint: 'Their name starts with st.' }),
      term('The small pores mostly found on the lower surface of leaves, which act as exits for water vapor.', 'Stomata', { hint: 'One of them is called a stoma.', choices: ['Transpiration', 'Vapor', 'Starch'] }),
      mc('Where are the stomata mostly found?', ['On the lower surface of the leaves', 'On the roots', 'On the surface of the soil'], { hint: 'They are pores of the leaves.' }),
      fill('Transpiration mainly happens through the ___.', ['stomata', 'roots', 'seeds'], { hint: 'They are the small pores of the leaves.' }),
      mc('What do the stomata act as?', ['Exits for water vapor', 'Mouths that drink water from the soil', 'Stores for starch'], { hint: 'Water vapor goes out through them.' }),
      tap('leafSurface', 'Tap the surface of the leaf where the stomata are mostly found.', 'wLower', { hint: 'Think of the side that faces the ground.' }),
      mc('Which statement correctly explains transpiration?', ['It happens through the small pores on the lower surface of the leaves, which act as exits for water vapor', 'It actively happens from the stems, not the leaves', 'It is when plants release oxygen'], { hint: 'Remember the name of the pores and what they let out.' })
    ] },
  { id: 'E4', lesson: 1, concept: 'The experiment: bags over plants A and B',
    explain: 'On a sunny day, a plastic bag is put over plant A (with leaves) and over plant B (all leaves taken off), and the bases are tied with twist ties or strings. The plants are left in a sunny place for a while, then we check if water drops form inside the bags.',
    variants: [
      mc('To observe that water is coming out of the leaves, what do we put over the plants?', ['Plastic bags', 'Aluminum foil', 'Sheets of paper'], { ...QUICK, hint: 'It is clear, so we can see inside.' }),
      mc('In the experiment, plant A has leaves and plant B has all its leaves taken off. Why do we use both plants?', ['To compare what happens with leaves and without leaves', 'To see which plant grows faster', 'To find out which plant has more starch'], { hint: 'They are the same except for one thing.' }),
      mc('Where do we leave the plants in the bags?', ['In a sunny place', 'In a dark cupboard', 'In a freezer'], { ...QUICK, hint: 'The experiment is done on a sunny day.' }),
      tf('The bases of the bags are tied with twist ties or strings.', true, { ...QUICK, hint: 'The bags must stay closed around the plants.' }),
      order('Put the steps of the experiment in the right order.', ['Check if water drops form inside the bags', 'Put bags over plants A and B and tie the bases', 'Leave the plants in a sunny place for a while'], [1, 2, 0], { hint: 'Cover first, wait, then look.' })
    ] },
  { id: 'E5', lesson: 1, concept: 'Water drops form inside the bag of the leafy plant',
    explain: 'The water drops inside the bag are water that transpired from the leaves: water vapor came out of the leaves and changed into water.',
    variants: [
      mc('In the experiment to check that water comes out of the leaves, why did water drops form inside the plastic bag?', ['Because water vapor came out of the leaves and changed into water', 'Because it rained from outside', 'Because the plant breathed and released carbon dioxide'], { hint: 'The bag is closed, so the water came from the plant.', ...ph('g6_bag_leaves', 'A leafy branch inside a clear plastic bag tied with string, in a sunny garden') }),
      mc('Which bag gets many more water drops inside after a while in the sun: the bag over plant A (with leaves) or over plant B (no leaves)?', ['The bag over plant A', 'The bag over plant B', 'Both get the same'], { hint: 'Where does the water vapor come out?', ...ph('g6_two_pots', 'Two potted plants in clear bags in the sun: the left plant has many leaves, the right one has a bare stem') }),
      tap('bagsAB', 'Tap the bag that will get many more water drops inside after a while in the sun.', 'bagA', { hint: 'Look for the plant that has leaves.', pic: { stage: 'ready' } }),
      tf('The water drops inside the bag are water that transpired from the leaves.', true, { hint: 'The leaves released water vapor.' }),
      tf('Water drops formed inside the bag because it rained from outside.', false, { ...QUICK, hint: 'The bag is tied and closed.', explain: 'Water vapor came out of the leaves and changed into water.' }),
      fill('The water drops inside the bag are water that ___ from the leaves.', ['transpired', 'was absorbed', 'fell'], { hint: 'It is the process of the lesson.' }),
      mc('What does the bag experiment show?', ['Water comes out of the leaves', 'Plants make starch in the dark', 'Roots take in oxygen'], { hint: 'Think of the cloudy bag with drops.' })
    ] },
  { id: 'E6', lesson: 1, boss: true, concept: 'Transpiration and the stomata, put together',
    explain: 'Water vapor comes out of the leaves through the stomata and changes into water drops inside the bag. Plant B has no leaves, so far fewer drops form.',
    variants: [
      mc('A bag is put over plant A (with leaves) and over plant B (no leaves) on a sunny day. Which statement is correct after a while?', ['Many more water drops appear inside the bag of plant A', 'Many more water drops appear inside the bag of plant B', 'The same number of drops appear in both bags'], { ...BOSS, hint: 'Transpiration mainly happens through the stomata of the leaves.' }),
      mc('Why does the bag of plant B (no leaves) get far fewer water drops than the bag of plant A?', ['Water vapor mainly leaves through the stomata of the leaves, and plant B has no leaves', 'Plant B did not absorb any water', 'The bag of plant B was not tied'], { ...BOSS, hint: 'Where are the exits for water vapor?' }),
      multi('Choose all the correct statements about transpiration.', ['It changes the water inside the plant into water vapor', 'It mainly happens through the stomata', 'It releases oxygen into the air', 'It only happens in the roots'], [0, 1], { ...BOSS, hint: 'Check each one with the Point box.' }),
      match('Match each word to its meaning.', ['Transpiration', 'Stomata'], ['Water inside the plant changing into water vapor and going out into the air', 'Small pores on the lower surface of the leaves that act as exits for water vapor'], { ...BOSS, hint: 'One is a process, the other is a part of the leaf.' }),
      build('why', 'Why do water drops form inside a bag over a leafy plant?', ['Water vapor comes out of the leaves', 'through the stomata', 'and changes into water drops'], ['Rain falls on the plant', 'the plant releases carbon dioxide'], { ...BOSS, hint: 'Think of what comes out of the leaves.' })
    ] },

  /* ---------- 6-2 The Path of Water ---------- */
  { id: 'F1', lesson: 2, concept: 'The order of the path of water: roots, stems, leaves',
    explain: 'Water is transported in the order of roots, stems, leaves.',
    variants: [
      fill('Water is transported in the order: roots, stems, ___.', ['leaves', 'flowers', 'soil'], { ...QUICK, hint: 'It is the last part on the path.' }),
      mc('Through which part does the water pass on its way from the roots to the leaves?', ['The stems', 'The seeds', 'The flowers'], { hint: 'It connects the roots with the leaves.' }),
      mc('In what order is water transported in a plant?', ['Roots, stems, leaves', 'Leaves, stems, roots', 'Stems, roots, leaves'], { hint: 'It starts where the plant absorbs the water.' }),
      order('Put in order the path of the water absorbed from the roots in a plant.', ['Leaves', 'Roots', 'Stems'], [1, 2, 0], { hint: 'Start at the part that is in the soil.' }),
      tf('The water absorbed from the roots passes through the stems and reaches the leaves.', true, { ...QUICK, hint: 'It does not stop halfway.' }),
      tap('waterPath', 'Tap the part of the plant that carries the water up from the roots to the leaves.', 'wStems', { hint: 'It is between the other two parts.' })
    ] },
  { id: 'F2', lesson: 2, concept: 'There are paths for water in roots, stems and leaves',
    explain: 'There are paths in the roots, stems and leaves of plants to carry water. Tubes are connected from the roots to the tips of the leaves.',
    variants: [
      tf('There are paths in the roots, stems and leaves of plants to carry water.', true, { ...QUICK, hint: 'Water is carried to the whole plant.' }),
      fill('There are ___ in the roots, stems and leaves of plants to carry water.', ['paths', 'seeds', 'petals'], { hint: 'Think of the coloured water that moved along them.' }),
      mc('Which statement correctly explains the path of water in plants?', ['Tubes are connected from the roots to the tips of the leaves to carry water', 'Water flows freely everywhere inside the stem', 'The water passes through the stems but does not reach the leaves'], { hint: 'The water goes along tubes, not everywhere.' }),
      tf('Water flows freely everywhere inside the stem.', false, { hint: 'It moves along special paths.', explain: 'Tubes are connected from the roots to the tips of the leaves to carry water.' }),
      multi('Where are there paths that carry water? Choose all the correct answers.', ['In the roots', 'In the stems', 'In the leaves', 'Only in the flowers'], [0, 1, 2], { hint: 'The water goes through the whole plant.' })
    ] },
  { id: 'F3', lesson: 2, concept: 'Watering the base of a wilted plant',
    explain: 'If you water the base of a wilted plant, the plant recovers after a while. This is because water spreads to the whole body of the plant.',
    variants: [
      mc('What happens after a while when you water the base of a wilted plant?', ['The plant recovers', 'The plant wilts even more', 'Nothing changes'], { ...QUICK, hint: 'The plant was missing water.', ...ph('g6_watering', 'A watering can pouring water onto the soil at the base of a drooping plant in a white pot') }),
      mc('When a plant is wilted, what should you do to recover it?', ['Water the base of the plant', 'Cover it with a plastic bag', 'Put it in a dark place'], { hint: 'Give the plant what it is missing.', ...ph('g6_wilted', 'A plant with drooping leaves in a white pot with dry soil on a window sill') }),
      mc('Why does a wilted plant recover after you water its base?', ['Water spreads to the whole body of the plant', 'The leaves drink the water from the air', 'The pot stores the water for the leaves'], { hint: 'Think of the paths in the roots, stems and leaves.' }),
      fill('A wilted plant recovers after watering because water spreads to the whole ___ of the plant.', ['body', 'pot', 'soil'], { hint: 'From the roots to the leaves.' }),
      tf('A wilted plant recovers after a while when you water its base.', true, { ...QUICK, hint: 'Water reaches the leaves.' })
    ] },
  { id: 'F4', lesson: 2, concept: 'The coloured-water experiment: seeing the path of water',
    explain: 'The roots of a plant are soaked in coloured water. After a few hours the parts that turned red are the paths for the coloured water. The roots, stems and leaves are cut with a cutter knife (used only by the teacher) to observe the cut surfaces.',
    variants: [
      mc('Why do we use coloured water in the experiment on the path of water?', ['To see where the water passes through', 'To make the leaves bigger', 'To remove the green colour'], { hint: 'Colour makes the invisible path visible.' }),
      mc('After a few hours, how do we know which parts are the paths of the water?', ['They are the parts that turned red', 'They are the parts that became softer', 'They are the parts that fell off'], { hint: 'The coloured water is red.', ...ph('g6_red_flask', 'A small green plant with its roots in a flask of red coloured water on a classroom table') }),
      tf('The parts that turned red are the paths for the coloured water.', true, { ...QUICK, hint: 'Colour shows where the water went.' }),
      mc('Who uses the cutter knife in the experiment?', ['Only the teacher', 'Every student', 'Nobody'], { ...QUICK, hint: 'It is sharp, so an adult does it.' }),
      fill('We observe the cut surfaces with a magnifying glass or a ___.', ['microscope', 'thermometer', 'ruler'], { hint: 'It makes very small things look big.' }),
      order('Put the steps of the coloured-water experiment in the right order.', ['Cut the roots, stems and leaves and observe the cut surfaces', 'Soak the roots in coloured water for a few hours', 'Dig up the plant carefully with the soil and wash the roots', 'Observe the colour change in the plant parts'], [2, 1, 3, 0], { hint: 'Wash, soak, wait and look, then cut.' })
    ] },
  { id: 'F5', lesson: 2, boss: true, concept: 'The whole journey of the water',
    explain: 'Water absorbed by the roots passes through paths in the roots, stems and leaves in the order roots, stems, leaves. Some of it goes out into the air from the leaves as water vapor.',
    variants: [
      mc('The roots of a plant are soaked in red water for a few hours. Which parts turn red?', ['The paths in the roots, stems and leaves', 'Only the roots', 'Only the leaves'], { ...BOSS, hint: 'The water is carried to the whole plant.' }),
      multi('Choose all the correct statements about the path of water.', ['Tubes are connected from the roots to the tips of the leaves', 'Water is transported in the order of roots, stems, leaves', 'Water passes through the stems but does not reach the leaves', 'Water goes from the leaves down to the roots'], [0, 1], { ...BOSS, hint: 'Check each one against the order of the path.' }),
      tap('waterPath', 'Tap the part where the absorbed water ends its journey in the order of the path.', 'wLeaves', { ...BOSS, hint: 'It is the last part in the order.' }),
      mc('What happens to some of the water when it reaches the leaves?', ['It changes into water vapor and goes out into the air', 'It stays in the leaves forever', 'It goes back to the roots'], { ...BOSS, hint: 'Lesson 6-1 and lesson 6-2 meet here.' }),
      build('why', 'Why does a wilted plant recover after you water its base?', ['Water spreads', 'through the paths in the roots, stems and leaves', 'to the whole body of the plant'], ['The leaves drink the water directly', 'the soil carries the water to the flowers'], { ...BOSS, hint: 'Think of the tubes from the roots to the tips of the leaves.' })
    ] },

  /* ---------- Enrichment Corner (bonus) · Blessings of the Nile ---------- */
  { id: 'N1', lesson: 1, bonus: true, concept: 'The lotus leaves catch sunlight',
    explain: 'The leaves of the lotus (water lily) floating on the Nile River have a flat and large shape. This helps them catch as much of Egypt\'s strong sunlight as possible so they can produce nutrients (sugar / starch) efficiently.',
    variants: [
      mc('The leaves of the water lotus floating on the Nile are flat and large. How does this shape help them?', ['They catch as much sunlight as possible', 'They hide from the strong sunlight', 'They keep the water out of the plant'], { hint: 'Remember what a plant needs for photosynthesis.', ...ph('g6_lotus', 'Large flat round green leaves and a white flower floating on the Nile') }),
      fill('The flat, large leaves of the lotus catch as much ___ as possible to produce nutrients efficiently.', ['sunlight', 'rain', 'soil'], { hint: 'It comes from the sky.' })
    ] },
  { id: 'N2', lesson: 2, bonus: true, concept: 'Papyrus: strong straight water paths',
    explain: 'Papyrus grows many meters tall near the water. Inside its stem, there are strong, straight water paths that carry the water absorbed from the roots all the way to the top at once.',
    variants: [
      mc('Papyrus grows many meters tall near the water. What carries the water from its roots all the way to the top?', ['Strong, straight water paths inside its stem', 'Its flowers', 'The Nile wind'], { hint: 'Remember the paths of water in lesson 6-2.', ...ph('g6_papyrus', 'Tall papyrus plants growing beside the Nile with palm trees and a distant pyramid') }),
      tf('In the papyrus stem, the water paths carry the water from the roots all the way to the top at once.', true, { hint: 'The paths are straight and strong.' })
    ] },
  { id: 'N3', lesson: 1, bonus: true, concept: 'Plants act as a natural air conditioner',
    explain: 'Transpiration lowers the temperature around the plant. Egypt has a desert climate, so plants help cool the surrounding air through transpiration, acting as a natural air conditioner.',
    variants: [
      mc('How do plants help cool the air in Egypt\'s desert climate?', ['Through transpiration, which lowers the temperature around the plant', 'By releasing hot water vapor that warms the air', 'By blocking all the wind'], { hint: 'Water vapor leaving the leaves makes the air around them cooler.' }),
      fill('Through transpiration, plants act as a natural air ___ that helps make the air more moderate nearby.', ['conditioner', 'purifier', 'heater'], { hint: 'It cools the air like a machine in a room.' })
    ] },
  { id: 'N4', lesson: 1, bonus: true, concept: 'Green plants along the Nile act as a natural air purifier',
    explain: 'When plants do photosynthesis, they take in the carbon dioxide that humans breathe out and release oxygen. The green plants along the Nile act as a natural air purifier.',
    variants: [
      mc('Which gas do the green plants along the Nile take in from the air in photosynthesis?', ['Carbon dioxide', 'Oxygen', 'Water vapor'], { hint: 'It is the gas that humans breathe out.' }),
      fill('The green plants along the Nile act as a natural air ___ that keeps the air in Egypt clean.', ['purifier', 'conditioner', 'heater'], { hint: 'They clean the air by taking in carbon dioxide.' })
    ] }
];
})();
