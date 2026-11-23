/* Grade 6 Science (Languages, English book) · Chapter 8 Egypt Special Part 1 "Food Chains in Egypt"
   Core ideas from the school book 2026/2027, lesson 8-1 Desert and Nile Food Chains: Point!, Warm Up, Try, Exercise, Let's Expand (pages 68-71).
   The Enrichment Corner "It Always Starts with Plants" (pages 72-73) is bonus only (never in Daily 5).
   Idea letters (unused in g6): T = Desert and Nile Food Chains (8-1), W = Enrichment Corner (bonus).
   The book's words: aquatic environments, arid areas, algae, water plants, herbivorous fish, Nile tilapia, carnivorous fish, Nile perch, top carnivores, Nile crocodile,
   shrubs, grass, herbivores, grasshoppers, jerboas, fennec foxes, Egyptian vultures, shrub seeds, viper, papyrus, producer, primary / secondary / tertiary consumer, apex predator, heron bird,
   food pyramid, Wadi al-Hitan.
   Review notes (the book prints no answers; these come from the printed text):
   - Try 1 (a top carnivore in the Nile) = the Nile crocodile. Exercise 1: statement B is right (fennec foxes eat small animals like jerboas); A is wrong (crocodiles do not eat algae directly: the chain has two fish between them).
     Exercise 2 (a herbivore of the desert chain) = grasshopper or jerboa.
   - Try 2 (if all the plants in the desert died out, what happens to the carnivores) is an open opinion. It is asked as a choice and follows from the Point box: every chain starts with plants,
     so without plants the herbivores lose their food and then the carnivores lose theirs.
   - The Let's Expand pictures give three chains: Algae -> Nile tilapia -> Nile perch -> Nile crocodile; Shrub seeds -> jerboa -> viper -> fennec fox; Papyrus -> grasshopper -> frog -> heron bird.
     The viper and the frog are in the pictures only, so they are asked only through those chains.
   - The consumer levels (producer, primary, secondary, tertiary consumer, apex predator) are printed only as picture labels of Let's Expand and in the Enrichment pyramids: they are bonus ideas.
   - Not asked (open activities): "Warm Up 3: are there other animals that eat the animals at the top of the food chains?", the speech bubbles. The Wadi al-Hitan paragraph is asked at the book's level (a desert once an ocean).
   Tap pictures (drawn in g6_egypt.js): egyptRow -> pic.chain 'nile' | 'desert' | 'papyrus'; tap ids egAlgae egTilapia egPerch egCroc | egSeeds egJerboa egViper egFennec | egPapyrus egHopper egFrog egHeron.
   Generated pictures: organism icons science/assets/g6_i_*.webp (transparent) and scenes fig 'photo' (pic { img, label }): g6_nile_scene, g6_desert_scene, g6_whale_valley.
*/
(function () {
window.CHAPTER = { id: 'g6c8', title: 'Food Chains in Egypt', grade: 'Grade 6', track: 'Languages' };

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
const row = chain => ({ fig: 'egyptRow', pic: { chain } });

window.IDEAS = [
  /* ---------- 8-1 Desert and Nile Food Chains ---------- */
  { id: 'T1', lesson: 1, concept: 'Egypt has different food chains in the Nile and in the desert',
    explain: 'Egypt has completely different food chains in aquatic environments (the Nile River) and in arid areas (the deserts).',
    variants: [
      mc('Which two kinds of places in Egypt have completely different food chains?', ['The Nile River and the deserts', 'Two cities', 'Two schools'], { ...QUICK, hint: 'One has a lot of water and the other has very little.' }),
      fill('The Nile River is an ___ environment, a place full of water.', ['aquatic', 'arid', 'frozen'], { hint: 'Aquatic is about water.' }),
      fill('The deserts of Egypt are ___ areas, with very little water.', ['arid', 'aquatic', 'rainy'], { hint: 'Arid means dry.' }),
      tf('The food chains of the Nile River and of the desert are completely different.', true, { ...QUICK, hint: 'Different animals live in water and in the dry desert.' }),
      mc('This picture shows a place in Egypt. What kind of environment is it?', ['An aquatic environment', 'An arid area', 'A frozen area'], { hint: 'Look at what fills the middle of the picture.', ...ph('g6_nile_scene', 'A wide river with green plants on its banks, palm trees and sandy hills far behind') }),
      mc('This picture shows another place in Egypt. What kind of area is it?', ['An arid area, a desert', 'An aquatic environment', 'A rainforest'], { hint: 'Look at the ground, and how few plants there are.', ...ph('g6_desert_scene', 'Golden sand dunes and rocky hills with a few small shrubs under a pale blue sky') }),
      match('Match each environment to its description.', ['The Nile River', 'The desert'], ['An aquatic environment', 'An arid area'], { ...NORM, hint: 'Aquatic = water, arid = dry.' })
    ] },
  { id: 'T2', lesson: 1, concept: 'The food chain in the Nile River',
    explain: 'Food chain in the Nile River: algae and water plants → herbivorous fish (like the Nile tilapia) → carnivorous fish (like the Nile perch) → top carnivores (like the Nile crocodile).',
    variants: [
      mc('Which living organisms are at the beginning of the food chain in the Nile River?', ['Algae and water plants', 'The Nile perch', 'The Nile crocodile'], { ...QUICK, hint: 'Every food chain starts with plants.' }),
      fill('In the Nile River, the Nile tilapia is a ___ fish that eats algae and water plants.', ['herbivorous', 'carnivorous', 'dangerous'], { hint: 'It eats plants.' }),
      mc('The Nile perch is a carnivorous fish. What does it eat?', ['Other fish like the Nile tilapia', 'Only algae', 'Rocks'], { hint: 'Carnivores eat other animals.' }),
      tap('egyptRow', 'Tap the living organism that is the beginning of this food chain.', 'egAlgae', { hint: 'Which one is a plant?', ...row('nile') }),
      tap('egyptRow', 'Tap the herbivorous fish in this Nile food chain.', 'egTilapia', { hint: 'It eats the algae and water plants.', ...row('nile') }),
      mc('In the Nile food chain, which animal eats the Nile tilapia?', ['The Nile perch', 'The algae', 'The Nile crocodile directly, with no fish between'], { hint: 'Look at the arrow that comes out of the tilapia.', ...row('nile') }),
      order('Arrange the Nile food chain in the correct order.', ['Nile perch', 'Algae', 'Nile crocodile', 'Nile tilapia'], [1, 3, 0, 2], { hint: 'Start with the algae and end with the biggest carnivore.' })
    ] },
  { id: 'T3', lesson: 1, concept: 'The food chain in the desert',
    explain: 'Food chain in the desert: desert shrubs and grass → herbivores (like grasshoppers and jerboas) → top carnivores (like fennec foxes and Egyptian vultures). In the book\'s picture: shrub seeds → jerboa → viper → fennec fox.',
    variants: [
      mc('Which living organisms are at the beginning of the food chain in the desert?', ['Desert shrubs and grass', 'Fennec foxes', 'Egyptian vultures'], { ...QUICK, hint: 'They are plants that grow with very little water.' }),
      mc('Which of these animals is a herbivore of the desert?', ['The jerboa', 'The fennec fox', 'The Egyptian vulture'], { hint: 'It eats shrub seeds and grass.' }),
      fill('Grasshoppers and ___ are herbivores in the desert food chain.', ['jerboas', 'fennec foxes', 'vultures'], { hint: 'It is a small hopping animal with big ears.' }),
      tap('egyptRow', 'Tap the herbivore in this desert food chain.', 'egJerboa', { hint: 'It eats the shrub seeds.', ...row('desert') }),
      tap('egyptRow', 'Tap the top carnivore in this desert food chain.', 'egFennec', { hint: 'It is at the end of the chain and nothing here eats it.', ...row('desert') }),
      order('Arrange the desert food chain in the correct order.', ['Fennec fox', 'Shrub seeds', 'Viper', 'Jerboa'], [1, 3, 2, 0], { hint: 'Start with the plant seeds.' }),
      mc('In the desert food chain, what does the viper eat?', ['The jerboa', 'The shrub seeds', 'The fennec fox'], { hint: 'Look at the arrow that points to the viper.', ...row('desert') })
    ] },
  { id: 'T4', lesson: 1, concept: 'A chain with papyrus: producer and consumers',
    explain: 'Another chain in Egypt: papyrus → grasshopper → frog → heron bird. The chain starts with a plant, the papyrus, and ends with a large carnivore, the heron bird.',
    variants: [
      mc('In the chain Papyrus → Grasshopper → Frog → Heron bird, which living organism is the plant?', ['The papyrus', 'The frog', 'The heron bird'], { ...QUICK, hint: 'It grows beside the water.', ...row('papyrus') }),
      tap('egyptRow', 'Tap the herbivore in this food chain.', 'egHopper', { hint: 'It eats the papyrus.', ...row('papyrus') }),
      mc('In the same chain, which animal eats the frog?', ['The heron bird', 'The grasshopper', 'The papyrus'], { hint: 'Follow the arrow that comes out of the frog.', ...row('papyrus') }),
      order('Arrange the food chain in order: start with the plant.', ['Frog', 'Heron bird', 'Papyrus', 'Grasshopper'], [2, 3, 0, 1], { hint: 'Each one is eaten by the next.' }),
      tf('In this chain the arrows point from the heron bird to the papyrus.', false, { hint: 'Arrows go from the one that is eaten to the one that eats it.' })
    ] },
  { id: 'T5', lesson: 1, concept: 'The top carnivore: the king of the food chain',
    explain: 'The top carnivore is the animal at the top of the food chain. In the Nile it is the Nile crocodile; in the desert it is a fennec fox or an Egyptian vulture.',
    variants: [
      mc('Give one example of a top carnivore at the top of the food chain in the Nile River.', ['The Nile crocodile', 'The Nile tilapia', 'The algae'], { ...QUICK, hint: 'It is the big reptile that lives in the river.' }),
      fill('Fennec foxes and Egyptian ___ are top carnivores in the desert.', ['vultures', 'grasshoppers', 'jerboas'], { hint: 'It is a big bird that flies in the sky.' }),
      term('An animal at the top of the food chain, which eats other animals.', 'Top carnivore', { hint: 'Think of the king of the food chain.', choices: ['Herbivore', 'Producer', 'Algae'] }),
      tap('egyptRow', 'Tap the top carnivore of this Nile food chain.', 'egCroc', { hint: 'It is the last link in the chain.', ...row('nile') }),
      mc('Which of these animals is a top carnivore?', ['The Nile crocodile', 'The jerboa', 'The Nile tilapia'], { hint: 'It does not become food for anyone in these chains.' }),
      multi('Choose all the top carnivores of Egypt in the book.', ['Nile crocodile', 'Fennec fox', 'Egyptian vulture', 'Jerboa'], [0, 1, 2], { hint: 'Which ones are at the end of their food chains?' })
    ] },
  { id: 'T6', lesson: 1, concept: 'Every food chain starts with plants and ends with large carnivores',
    explain: 'Even if the types of animals are different, the chain always starts with plants and ends with large carnivores. If all the plants in the desert died out, the herbivores would lose their food, and then the carnivores would lose their food too.',
    variants: [
      tf('Every food chain starts with plants.', true, { ...QUICK, hint: 'Plants make their own food.' }),
      fill('Even if the types of animals are different, the food chain always ends with large ___.', ['carnivores', 'plants', 'insects'], { hint: 'Think of the crocodile and the fennec fox.' }),
      mc('Which statement correctly explains the food chains in Egypt?', ['In the desert, fennec foxes eat small animals like jerboas', 'In the Nile River, crocodiles eat algae directly', 'Food chains start with large carnivores'], { hint: 'Check each sentence against the chains in the book.' }),
      tf('In the Nile River, crocodiles eat algae directly.', false, { hint: 'Two kinds of fish come between the algae and the crocodile.', explain: 'In the Nile chain, algae are eaten by the herbivorous fish (tilapia), then the carnivorous fish (perch), and then the crocodile.' }),
      mc('If all the plants in the desert died out, what would happen to the carnivores?', ['They would lose their food and decrease', 'They would eat more plants', 'Nothing would change'], { hint: 'The herbivores eat plants, and the carnivores eat the herbivores.' }),
      mc('Which living organisms are always at the beginning of a food chain?', ['Plants', 'Large carnivores', 'Herbivorous fish'], { hint: 'They use sunlight to make nutrients.' })
    ] },
  { id: 'T7', lesson: 1, boss: true, concept: 'Food chains of the Nile and the desert, put together',
    explain: 'The Nile chain is algae → Nile tilapia → Nile perch → Nile crocodile; the desert chain is shrub seeds → jerboa → viper → fennec fox. Both start with plants and end with a large carnivore.',
    variants: [
      mc('Which animal is the herbivore in the chain Shrub seeds → Jerboa → Viper → Fennec fox?', ['The jerboa', 'The viper', 'The fennec fox'], { ...BOSS, hint: 'It eats the plant at the beginning.', ...row('desert') }),
      multi('Choose all the correct statements about the Nile food chain.', ['It starts with algae and water plants', 'The Nile tilapia is a herbivorous fish', 'The Nile crocodile is at the beginning of the chain', 'The Nile perch is a plant'], [0, 1], { ...BOSS, hint: 'Check each sentence with the arrows from the algae to the crocodile.' }),
      match('Match each animal to its place in the food chain.', ['Nile tilapia', 'Nile perch', 'Jerboa', 'Fennec fox'], ['Herbivorous fish', 'Carnivorous fish', 'Desert herbivore', 'Desert top carnivore'], { ...BOSS, hint: 'Herbivores eat plants and carnivores eat animals.' }),
      build('why', 'Why does every food chain, in the Nile and in the desert, start with plants?', ['Plants make their own food using sunlight', 'and every animal in the chain depends on them for food'], ['Plants eat the large carnivores', 'animals make food from the soil'], { ...BOSS, hint: 'Think of what plants do with sunlight.' }),
      build('whatif', 'What would happen to the carnivores if all the plants in the desert died out?', ['The herbivores would lose their food', 'then the carnivores would also lose their food', 'and they would decrease'], ['The carnivores would eat sand', 'the herbivores would increase'], { ...BOSS, hint: 'Follow the chain: plants, herbivores, carnivores.' }),
      order('Arrange the Nile food chain, from the beginning to the end: Nile perch, algae, Nile crocodile, Nile tilapia.', ['Nile perch', 'Algae', 'Nile crocodile', 'Nile tilapia'], [1, 3, 0, 2], { ...BOSS, hint: 'The chain starts with the plant and ends with the top carnivore.' })
    ] },

  /* ---------- Enrichment Corner (bonus) · It Always Starts with "Plants" ---------- */
  { id: 'W1', lesson: 1, bonus: true, concept: 'The food pyramid: producers at the base',
    explain: 'The diagram of a food chain is called a food pyramid. The very bottom of the pyramid is always supported by plants (producers), which produce their own food from sunlight. Above them come the primary consumers (herbivores), the secondary consumers (carnivores) and the apex predators.',
    variants: [
      mc('What is the diagram of a food chain called?', ['A food pyramid', 'A water cycle', 'A life cycle'], { ...QUICK, hint: 'Its shape is like a triangle with levels.' }),
      mc('What is always at the bottom of a food pyramid?', ['Plants (producers)', 'Apex predators', 'Secondary consumers'], { hint: 'They produce their own food from sunlight.' }),
      fill('Plants are called ___ because they produce their own food from sunlight.', ['producers', 'consumers', 'predators'], { hint: 'They produce.' }),
      order('Arrange the levels of a food pyramid from the bottom to the top.', ['Secondary consumers', 'Producers', 'Apex predators', 'Primary consumers'], [1, 3, 0, 2], { hint: 'The plants are at the bottom and the top predators at the top.' }),
      match('Match each level of the pyramid to its group.', ['Producers', 'Primary consumers', 'Secondary consumers'], ['Plants', 'Herbivores', 'Carnivores'], { ...NORM, hint: 'Think of who eats whom.' })
    ] },
  { id: 'W2', lesson: 1, bonus: true, concept: 'The Nile\'s chain: shrimp, fish, birds and man',
    explain: 'In the Nile River, small shrimp eat water plants, fish (like the Nile tilapia) eat the shrimp, and then water birds and man eat the fish.',
    variants: [
      mc('In the Nile\'s circle of life, what do the small shrimp eat?', ['Water plants', 'Water birds', 'People'], { hint: 'They are at the beginning of the chain.' }),
      mc('Who eats the fish, like the Nile tilapia, in the Nile\'s chain?', ['Water birds and man', 'The water plants', 'The shrimp'], { hint: 'They are at the top of the Nile food pyramid.' }),
      tf('In the Nile\'s chain, small shrimp eat the fish.', false, { hint: 'The fish eat the shrimp.', explain: 'Small shrimp eat water plants, fish eat the shrimp, and water birds and man eat the fish.' })
    ] },
  { id: 'W3', lesson: 1, bonus: true, concept: 'The fennec fox keeps the desert balanced',
    explain: 'In the desert there are few plants, so animals that eat the small amount of grass seeds or lizards sustain the food chain. Without consumers like the fennec fox, the balance of the desert ecosystem would be disrupted.',
    variants: [
      mc('Why is the fennec fox important in the desert?', ['Without consumers like it, the balance of the desert would be disrupted', 'It makes the sand', 'It brings the rain'], { hint: 'Think of the balance of the food chain.' }),
      fill('In the desert, animals that eat a small amount of grass ___ or lizards sustain the food chain.', ['seeds', 'fish', 'leaves of trees'], { hint: 'They are small and dry.' }),
      tf('There are many plants in the desert, so food is easy to find.', false, { hint: 'The desert is arid.', explain: 'In the desert there are few plants, and the animals eat the small amount of grass seeds or lizards.' })
    ] },
  { id: 'W4', lesson: 1, bonus: true, concept: 'Wadi al-Hitan: the Valley of the Whales',
    explain: 'Wadi al-Hitan, or the "Valley of the Whales", is a desert now, but it is filled with fossils from when it used to be an ocean. Tens of millions of years ago, the ancient ocean had a complete food chain just like the Nile does today.',
    variants: [
      mc('Wadi al-Hitan is called the Valley of the...', ['Whales', 'Crocodiles', 'Foxes'], { hint: 'Its fossils are of huge sea animals.' }),
      mc('This picture shows Wadi al-Hitan in Egypt. What was this place millions of years ago?', ['An ocean', 'A forest', 'A snowy mountain'], { hint: 'Think of the fossil skeletons of sea animals.', ...ph('g6_whale_valley', 'A desert valley with the long fossil skeleton of an ancient whale lying on the sand') }),
      tf('Tens of millions of years ago, the ancient ocean of Wadi al-Hitan had a complete food chain.', true, { hint: 'Just like the Nile has today.' })
    ] }
];
})();
