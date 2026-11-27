/* Grade 6 Science (Languages, English book) · Chapter 7 Food Chain
   Core ideas from the school book 2026/2027, both lessons (7-1 Food Chain, 7-2 Living Organisms, Air, and Water): Point!, Warm Up, Try, Exercise (pages 62-67).
   This chapter has no Enrichment Corner in the file the owner gave, so there are no bonus ideas.
   Idea letters (unused in g6): P = Food Chain (7-1), Q = Living Organisms, Air, and Water (7-2).
   The book's words: food chain, eater-and-eaten, plants, herbivores, carnivores, nutrients, sunlight, energy, arrow, grasshopper, rabbit, snake, falcon, eagle, lion,
   frog, owl, oxygen, carbon dioxide, photosynthesis, respiration, transpiration, water vapor, water cycle, evaporates, clouds, rain, circulating.
   Review notes (the book prints no answers; these come from the printed text):
   - Try 1-(1), 1-(2), 2-(1), 2-(2) and Exercise 1-(2), 2-(1), 2-(2) are asked as printed. Exercise 1-(1) (arrange grasshopper, grass, eagle, frog) is asked as an order question: grass, grasshopper, frog, eagle.
   - Exercise 1-(2): the printed option "Arrows are drawn from the one that eats to the one that is eaten" is wrong: the Point box says the arrow points to the direction in which energy is moved
     (Grass -> Grasshopper -> Frog), so it goes from the eaten to the eater. It is also asked as a true/false with its explanation.
   - Which animals are herbivores or carnivores: only the book's own examples are used (grasshoppers, rabbits; snakes, falcons, eagles, lions) plus the animals of the book's food chain picture
     (frog, snake, owl). A frog and an owl are asked only through "eats other animals" in that chain.
   - Warm Up 3 of page 65 (what would happen if plants disappeared) is an open prediction. It is asked as a choice and follows from the Point box: plants release the oxygen that animals
     use and take in the carbon dioxide that animals breathe out, so without plants the oxygen would decrease and the carbon dioxide would increase.
   - Not asked (open activities): the Warm Up of page 63 (find a plant and an insect in the garden and draw a chain in a notebook), "Let's talk about the possibility that the water you drank was once
     part of a cloud", the speech bubbles. The water-cycle order is taken from the Point box text (evaporates, rises and forms clouds, falls as rain).
   Tap pictures (drawn in g6_food.js): foodRow -> chGrass | chHopper | chFrog | chSnake | chOwl (the book's chain Grass -> Grasshopper -> Frog -> Snake -> Owl; pic.chain can pick another chain)
   Generated pictures: the organism icons science/assets/g6_i_*.webp (transparent), and scenes fig 'photo' (pic { img, label }): the boy beside a tree, the water cycle, bare land, the Nile life.
*/
(function () {
window.CHAPTER = { id: 'g6c7', title: 'Food Chain', grade: 'Grade 6', track: 'Languages' };

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
  /* ---------- 7-1 Food Chain ---------- */
  { id: 'P1', lesson: 1, concept: 'A food chain: the relationship between eater and eaten',
    explain: 'The relationship between eater-and-eaten (the feeding among living organisms) is called a food chain.',
    variants: [
      mc('What do we call the food relationship between living organisms?', ['A food chain', 'A water cycle', 'A life cycle'], { ...QUICK, hint: 'It links one who eats with one who is eaten.' }),
      fill('The relationship between the eater and the eaten is called a food ___.', ['chain', 'cycle', 'plate'], { hint: 'Think of links joined one after the other.' }),
      tf('A food chain shows the feeding among living organisms: who eats whom.', true, { ...QUICK, hint: 'Eater and eaten.' }),
      term('The relationship between eater-and-eaten (the feeding among living organisms).', 'Food chain', { hint: 'It is the title of lesson 7-1.', choices: ['Water cycle', 'Photosynthesis', 'Transpiration'] }),
      mc('Man also gets his food from living organisms. Which ones?', ['Plants and animals', 'Rocks and sand', 'Only the air'], { hint: 'Think of vegetables and meat.' })
    ] },
  { id: 'P2', lesson: 1, concept: 'Plants are the beginning of the food chain',
    explain: 'Plants use sunlight to produce nutrients inside their bodies. This is the beginning of the food chain.',
    variants: [
      tf('A food chain starts with plants.', true, { ...QUICK, hint: 'Which living organisms make their own food?' }),
      mc('What kind of living organisms are the beginning of the food chain?', ['Plants that produce nutrients using sunlight', 'Herbivores like insects', 'Strong carnivores'], { hint: 'They need sunlight, not a meal.' }),
      fill('Plants use ___ to produce nutrients inside their bodies.', ['sunlight', 'meat', 'rain drops only'], { hint: 'It comes from the sun.' }),
      tap('foodRow', 'Tap the living organism that is the beginning of this food chain.', 'chGrass', { hint: 'Which one makes its own food using sunlight?' }),
      mc('Why do food chains start with plants?', ['Because plants make their own food', 'Because plants eat insects', 'Because plants are the biggest living organisms'], { hint: 'Think of what plants do with sunlight.' })
    ] },
  { id: 'P3', lesson: 1, concept: 'Herbivores: animals that eat plants',
    explain: 'Herbivores are animals that eat plants. Examples: grasshoppers, rabbits.',
    variants: [
      mc('Animals that eat plants are called...', ['Herbivores', 'Carnivores', 'Plants'], { ...QUICK, hint: 'Herb is like herbs and plants.' }),
      mc('Which of these animals is a herbivore?', ['Grasshopper', 'Snake', 'Eagle'], { hint: 'It eats grass.' }),
      fill('A rabbit eats plants, so it is a ___.', ['herbivore', 'carnivore', 'plant'], { hint: 'What does a rabbit eat?' }),
      term('Animals that eat plants.', 'Herbivores', { hint: 'Examples: grasshoppers and rabbits.', choices: ['Carnivores', 'Plants', 'Insects'] }),
      tap('foodRow', 'Tap the herbivore in this food chain.', 'chHopper', { hint: 'It eats the plant at the beginning.' }),
      multi('Choose all the herbivores.', ['Grasshopper', 'Rabbit', 'Lion', 'Eagle'], [0, 1], { hint: 'Which ones eat plants?' })
    ] },
  { id: 'P4', lesson: 1, concept: 'Carnivores: animals that eat other animals',
    explain: 'Carnivores are animals that eat other animals. Examples: snakes, falcons, eagles, lions.',
    variants: [
      mc('Animals that eat other animals are called...', ['Carnivores', 'Herbivores', 'Plants'], { ...QUICK, hint: 'They eat meat.' }),
      mc('Which of these animals is a carnivore?', ['Lion', 'Rabbit', 'Grasshopper'], { hint: 'It eats other animals.' }),
      tf('Eagles and lions eat other animals.', true, { ...QUICK, hint: 'They are carnivores.' }),
      term('Animals that eat other animals.', 'Carnivores', { hint: 'Examples: snakes, falcons, eagles and lions.', choices: ['Herbivores', 'Plants', 'Insects'] }),
      mc('A snake eats frogs. What is the snake?', ['A carnivore', 'A herbivore', 'A plant'], { hint: 'A frog is an animal.' }),
      tap('foodRow', 'Tap the carnivore that eats the grasshopper in this food chain.', 'chFrog', { hint: 'Follow the arrow after the grasshopper.' }),
      multi('Choose all the carnivores.', ['Snake', 'Falcon', 'Eagle', 'Grasshopper'], [0, 1, 2], { hint: 'Which ones eat other animals?' })
    ] },
  { id: 'P5', lesson: 1, concept: 'The arrow points to the direction of energy',
    explain: 'The connection is shown using arrows like Grass -> Grasshopper -> Frog -> Snake -> Owl. The arrow points to the direction in which energy is moved: from the eaten to the eater.',
    variants: [
      fill('The arrow in a food chain points to the direction in which ___ is moved.', ['energy', 'water', 'air'], { hint: 'The grass gives the grasshopper something it needs.' }),
      mc('In a food chain, what does an arrow show?', ['The direction in which energy is moved', 'How big each animal is', 'Where each animal lives'], { hint: 'Read the Point box of lesson 7-1.' }),
      tf('In Grass → Grasshopper, the arrow goes from the one that is eaten to the one that eats it.', true, { hint: 'The grasshopper eats the grass.' }),
      tf('Arrows are drawn from the one that eats to the one that is eaten.', false, { hint: 'Energy moves from the grass to the grasshopper.', explain: 'The arrow points to the direction in which energy is moved: from the eaten to the eater.' }),
      mc('Which statement correctly explains the food chain?', ['Food chains start with plants, because they make their own food', 'Arrows are drawn from the one that eats to the one that is eaten', 'If carnivores disappear, plants will grow healthier'], { hint: 'Check every sentence with the Point box.' })
    ] },
  { id: 'P6', lesson: 1, concept: 'Arranging a food chain in order',
    explain: 'The chain in the book: Grass → Grasshopper → Frog → Snake → Owl. It starts with the plant.',
    variants: [
      mc('In the food chain Grass → Grasshopper → Frog → Snake → Owl, what does the frog eat?', ['The grasshopper', 'The grass', 'The snake'], { hint: 'Look at the arrow that points to the frog.', ...{ fig: 'foodRow', pic: {} } }),
      mc('In the same food chain, which animal eats the snake?', ['The owl', 'The frog', 'The grasshopper'], { hint: 'Look at the arrow that comes out of the snake.', ...{ fig: 'foodRow', pic: {} } }),
      order('Arrange the living organisms in the correct order of the food chain.', ['Grasshopper', 'Grass', 'Eagle', 'Frog'], [1, 0, 3, 2], { hint: 'Start with the plant, end with the carnivore that eats the frog.' }),
      order('Put this food chain in order: start with the plant.', ['Owl', 'Grass', 'Snake', 'Frog', 'Grasshopper'], [1, 4, 3, 2, 0], { hint: 'Each one is eaten by the next.' })
    ] },
  { id: 'P7', lesson: 1, boss: true, concept: 'The whole food chain, put together',
    explain: 'In Grass → Grasshopper → Frog → Snake → Owl: grass is the plant at the beginning, the grasshopper is a herbivore, the frog, snake and owl are carnivores, and the arrows show where the energy moves.',
    variants: [
      mc('In the food chain Grass → Grasshopper → Frog → Snake → Owl, which organism is the herbivore?', ['The grasshopper', 'The frog', 'The owl'], { ...BOSS, hint: 'It eats the plant.', fig: 'foodRow', pic: {} }),
      multi('Choose all the correct statements about the chain Grass → Grasshopper → Frog → Snake → Owl.', ['Grass is the beginning of the chain', 'The snake eats the frog', 'The arrow points from the owl to the grass', 'The grasshopper is a carnivore'], [0, 1], { ...BOSS, hint: 'Check each sentence against the arrows.' }),
      match('Match each word to its meaning.', ['Herbivores', 'Carnivores', 'Plants'], ['Animals that eat plants', 'Animals that eat other animals', 'Living organisms that use sunlight to produce nutrients'], { ...BOSS, hint: 'Herb-ivores eat plants.' }),
      build('define', 'What is a food chain?', ['The relationship between eater and eaten', 'the feeding among living organisms'], ['the movement of water on Earth', 'the way plants make starch'], { ...BOSS, hint: 'Think of who eats whom.' }),
      order('Arrange the organisms in a food chain, from the beginning to the end: grass, grasshopper, frog, eagle.', ['Frog', 'Eagle', 'Grass', 'Grasshopper'], [2, 3, 0, 1], { ...BOSS, hint: 'The chain starts with the plant.' })
    ] },

  /* ---------- 7-2 Living Organisms, Air, and Water ---------- */
  { id: 'Q1', lesson: 2, concept: 'Living organisms are connected through air',
    explain: 'Animals use the oxygen released by plants to breathe, and plants use the carbon dioxide breathed out by animals for photosynthesis.',
    variants: [
      mc('Living organisms, air and water are connected by what kind of bonds?', ['Invisible bonds', 'Heavy chains', 'Coloured lines'], { hint: 'You cannot see air or water vapor.', ...ph('g6_nile_life', 'A bend of the Nile with papyrus, palm trees, a crocodile, birds and a gazelle') }),
      mc('Which gas do animals use to breathe that plants release?', ['Oxygen', 'Carbon dioxide', 'Water vapor'], { ...QUICK, hint: 'It is the gas we need to breathe.' }),
      fill('Animals use the ___ released by plants to breathe.', ['oxygen', 'carbon dioxide', 'starch'], { hint: 'Plants release it in photosynthesis.' }),
      mc('What gas do animals breathe out and plants take in?', ['Carbon dioxide', 'Oxygen', 'Water vapor'], { hint: 'Plants use it for photosynthesis.' }),
      fill('Plants use the ___ breathed out by animals for photosynthesis.', ['carbon dioxide', 'oxygen', 'starch'], { hint: 'It is the gas that animals breathe out.' }),
      tf('Plants use the carbon dioxide that animals breathe out.', true, { ...QUICK, hint: 'Think of photosynthesis.' })
    ] },
  { id: 'Q2', lesson: 2, concept: 'Plants keep the air suitable for animals',
    explain: 'Plants maintain the air suitable for animals to breathe, because they release oxygen. The oxygen from photosynthesis is what we use in respiration.',
    variants: [
      mc('Which statement correctly explains the relationship between living organisms and air?', ['Plants maintain the air suitable for animals to breathe, because they release oxygen', 'Both animals and plants only decrease oxygen and increase carbon dioxide'], { hint: 'Think about what plants give back to the air.' }),
      tf('Both animals and plants only decrease oxygen and increase carbon dioxide.', false, { hint: 'Plants release oxygen.', explain: 'Plants release oxygen, so they keep the air suitable for animals to breathe.' }),
      mc('A boy breathes out next to a tree. What does the tree use from his breath for photosynthesis?', ['Carbon dioxide', 'Oxygen', 'Starch'], { hint: 'It is the gas that animals breathe out.', ...ph('g6_child_tree', 'A boy standing and breathing next to a big green tree in a sunny park') }),
      mc('Where does the oxygen that we use in respiration come from?', ['From photosynthesis in plants', 'From rocks', 'From the soil only'], { hint: 'Plants release it.' }),
      mc('If all the plants disappeared completely, what would happen to the oxygen in the air?', ['It would decrease', 'It would increase', 'It would not change'], { hint: 'Plants are the ones that release oxygen.', ...ph('g6_no_plants', 'A dry brown land with cracked soil and no plants under a hot sun') }),
      mc('If all the plants disappeared completely, what would happen to the carbon dioxide in the air?', ['It would increase', 'It would decrease', 'It would not change'], { hint: 'Plants are the ones that take it in.', ...ph('g6_no_plants', 'A dry brown land with cracked soil and no plants under a hot sun') })
    ] },
  { id: 'Q3', lesson: 2, concept: 'Living organisms are connected through water',
    explain: 'Plants release part of their water into the air through transpiration. This water vapor joins the water cycle. Water also evaporates from oceans, rivers and lakes, rises into the atmosphere to form clouds, and falls as rain.',
    variants: [
      mc('What do we call the process where plants release water absorbed from their roots into the air as water vapor?', ['Transpiration', 'Evaporation', 'Breathing'], { hint: 'It happens through the stomata of the leaves.' }),
      fill('Plants release part of their water into the air through ___.', ['transpiration', 'respiration', 'digestion'], { hint: 'It is the process of lesson 6-1.' }),
      mc('The water vapor released by plants joins the...', ['Water cycle', 'Food chain', 'Respiration'], { hint: 'It joins the water moving around the Earth.' }),
      tf('Water evaporates from oceans, rivers and lakes, rises into the atmosphere to form clouds, and falls as rain.', true, { hint: 'Think of how rain is made.', ...ph('g6_water_cycle', 'A sea, a river and a tree under a cloud that makes rain, with the sun') }),
      mc('What is an important part of the water cycle that keeps water moving between living organisms and the environment?', ['Transpiration', 'Digestion', 'Starch'], { hint: 'Plants release water into the air.' }),
      fill('The water on Earth is changing its shape and keeps ___, and it is used repeatedly by many living organisms.', ['circulating', 'disappearing', 'increasing'], { hint: 'Water moves around the Earth again and again.' })
    ] },
  { id: 'Q4', lesson: 2, boss: true, concept: 'Air and water connect all living organisms',
    explain: 'Plants release oxygen and use carbon dioxide; animals use oxygen and breathe out carbon dioxide. Water moves between the environment and the living organisms in the water cycle.',
    variants: [
      multi('Choose all the correct statements about air and water.', ['Animals use the oxygen released by plants', 'Plants use the carbon dioxide breathed out by animals', 'Transpiration puts water vapor into the air', 'Plants only take oxygen from the air'], [0, 1, 2], { ...BOSS, hint: 'Check each one with the Point box of lesson 7-2.' }),
      mc('The tree next to you uses the breath you just breathed out. What does the tree release that you use in respiration?', ['Oxygen', 'Carbon dioxide', 'Starch'], { ...BOSS, hint: 'It is the gas that animals use to breathe.' }),
      match('Match each word to its meaning.', ['Oxygen', 'Carbon dioxide', 'Transpiration'], ['Released by plants and used by animals to breathe', 'Breathed out by animals and used by plants for photosynthesis', 'Plants releasing part of their water into the air'], { ...BOSS, hint: 'Two are gases and one is a process.' }),
      order('Put the journey of water in order.', ['Water falls as rain', 'Water evaporates from rivers and lakes', 'Clouds form in the atmosphere'], [1, 2, 0], { ...BOSS, hint: 'Start with the water that goes up.' }),
      build('why', 'Why do plants keep the air suitable for animals to breathe?', ['Plants release oxygen', 'through photosynthesis', 'and animals use it to breathe'], ['Plants release carbon dioxide', 'animals do not need air'], { ...BOSS, hint: 'Think of the gas that plants give back to the air.' })
    ] },
  /* ---------- November 2026 review («سندباد» مراجعة شهر نوفمبر, 6 tests, owner 27 Nov 2026): items the bank lacked; guide: true ---------- */
  { id: 'P30', lesson: 1, bonus: true, guide: true, concept: "Producers and consumers in a food chain",
    explain: "A food chain is the path that shows how energy and food pass from one living thing to another between the eater and the eaten. The Sun is the main source of energy: it gives energy to producers (plants), which make their own food by photosynthesis and start every food chain. Herbivores (like rabbits, gazelles and locusts) eat plants; carnivores (like lions and hawks) eat other animals.",
    variants: [
      { type: "fill", mode: "normal", level: "easy", q: "The main source of energy in most food chains is ___.", options: ["sunlight", "water", "soil"], answer: 0, hint: "It shines in the sky." },
      { type: "fill", mode: "normal", level: "easy", q: "Living things that eat plants are called ___.", options: ["herbivores", "carnivores", "producers"], answer: 0, hint: "Like rabbits." },
      { type: "fill", mode: "normal", level: "easy", q: "Locusts and rabbits are ___.", options: ["herbivores", "carnivores", "producers"], answer: 0, hint: "What do they eat?" },
      { type: "mc", mode: "normal", level: "easy", q: "The living thing that makes its own food is:", options: ["a plant", "a lion", "a mouse", "a cat"], answer: 0, hint: "It uses sunlight." },
      { type: "mc", mode: "normal", level: "easy", q: "The eater–eaten relationship between living things is called:", options: ["the food chain", "the water cycle", "the rock cycle", "the weather"], answer: 0, hint: "Like links of a chain." },
      { type: "build", style: "why", mode: "normal", level: "medium", q: "Plants are essential in food chains.", parts: ["Because they are producers that make their own food by photosynthesis", "and they are the main source of energy", "for all the consumers"], extra: ["because they", "eat animals"], hint: "Who starts every food chain?" },
      { type: "term", mode: "normal", level: "easy", q: "Animals that eat other animals.", answer: "Carnivores", choices: ["Herbivores", "Producers", "Plants"], hint: "Like the lion." },
      { type: "mc", mode: "normal", level: "medium", q: "What is the main role of the Sun in keeping food chains going?", options: ["It is the source of energy for producers, which start every food chain", "It eats the plants", "It makes the animals sleep"], answer: 0, hint: "Plants need it to make food." },
      { type: "build", style: "define", mode: "normal", level: "easy", q: "What is a food chain?", parts: ["A path that shows how energy and food pass", "from one living thing to another", "between the eater and the eaten"], extra: ["a chain of", "rocks"], hint: "Who eats whom?" }
    ] },
  { id: 'P31', lesson: 1, bonus: true, guide: true, concept: "Building and comparing food chains",
    explain: "A food chain starts with a producer and the arrows show the direction of energy: grass → locust → frog → snake → owl; grass → gazelle → lion. Plants make their food and are at the start of the chain; herbivores eat plants and are at the second level. A hawk is a carnivore that eats animals; a rabbit is a herbivore that eats plants.",
    variants: [
      { type: "order", mode: "normal", level: "medium", q: "Put these living things in a correct food chain showing the direction of energy.", items: ["Snake", "Grass", "Owl", "Frog", "Locust"], answer: [1, 4, 3, 0, 2], hint: "Start with the producer." },
      { type: "order", mode: "normal", level: "easy", q: "Make a food chain from: lion, grass, gazelle.", items: ["Lion", "Grass", "Gazelle"], answer: [1, 2, 0], hint: "Who eats grass?" },
      { type: "mc", mode: "normal", level: "medium", q: "Compare plants and herbivores by food and place in the food chain.", options: ["Plants make their own food and are at the start; herbivores eat plants and are at the second level", "Plants eat herbivores and are at the end", "Herbivores make their own food and are at the start"], answer: 0, hint: "Who makes food?" },
      { type: "mc", mode: "normal", level: "medium", q: "Compare the hawk and the rabbit by type and how they get food.", options: ["Hawk: carnivore, eats animals; rabbit: herbivore, eats plants", "Hawk: herbivore; rabbit: carnivore", "Both are producers"], answer: 0, hint: "What does a hawk hunt?" },
      { type: "mc", mode: "normal", level: "easy", q: "Compare the rabbit and the lion by the kind of food each eats.", options: ["The rabbit eats plants and grass; the lion eats animals", "The rabbit eats animals; the lion eats grass", "Both eat grass"], answer: 0, hint: "Carrots or meat?" }
    ] },
  /* ---------- November 2026 review (El-Moasser November models (languages track), owner 27 Nov 2026): items the bank lacked; guide: true ---------- */
  { id: 'P32', lesson: 1, bonus: true, guide: true, concept: "Energy in the food chain",
    explain: "In a food chain energy passes from the plant to the herbivore, then to the carnivore, until the end of the chain; arrows show the direction of energy flow. Most food chains start with green plants. Herbivores are animals that eat plants to get energy; snakes and lions are carnivores because they eat animals. The organism that eats a grasshopper is a carnivore. If plants disappeared, herbivores would find no food and die, and the food chain would break. All animals depend on plants directly or indirectly for energy.",
    variants: [
      { type: "fill", mode: "normal", level: "medium", q: "In a food chain, the organism that eats the grasshopper is a ___.", options: ["carnivore", "herbivore", "producer"], answer: 0, hint: "A grasshopper is an animal." },
      { type: "build", style: "why", mode: "normal", level: "easy", q: "Arrows are used in food chain drawings.", parts: ["To show", "the direction", "of energy flow"], extra: ["to make", "the drawing nice"], hint: "What moves along the chain?" },
      { type: "build", style: "why", mode: "normal", level: "easy", q: "Snakes and lions are classified as carnivores.", parts: ["Because they feed", "on animals", "to get energy"], extra: ["on grass", "and leaves"], hint: "What do they eat?" },
      { type: "build", style: "whatif", mode: "normal", level: "hard", q: "What happens to the food chain if plants disappeared from an ecosystem?", parts: ["Herbivores will not find food and will die,", "so the food chain", "will be broken"], extra: ["carnivores", "grow bigger"], hint: "Who eats plants?" },
      { type: "mc", mode: "normal", level: "easy", q: "Energy is transferred in a food chain from:", options: ["plant to consumer (herbivore)", "consumer (herbivore) to plant", "consumer (carnivore) to plant", "consumer (predator) to consumer (herbivore)"], answer: 0, hint: "Follow the arrow from the producer." },
      { type: "tf", mode: "timed", seconds: 12, level: "easy", q: "Energy is transferred from a plant to the herbivore.", answer: 0, hint: "Who eats whom?" },
      { type: "tf", mode: "timed", seconds: 12, level: "easy", q: "Most food chains start with green plants.", answer: 0, hint: "Who makes food first?" },
      { type: "mc", mode: "normal", level: "medium", q: "Cross out the odd word: grasshoppers – rabbits – lions – sheep.", options: ["Lions", "Grasshoppers", "Rabbits", "Sheep"], answer: 0, hint: "Three eat plants." },
      { type: "order", mode: "normal", level: "medium", q: "Arrange this food chain to show the energy flow: snake – green plant – falcon – mouse.", items: ["Snake", "Green plant", "Falcon", "Mouse"], answer: [1, 3, 0, 2], hint: "Start with the producer." }
    ] },
  { id: 'P33', lesson: 1, bonus: true, guide: true, concept: "Energy in the food chain — definitions",
    explain: "In a food chain energy passes from the plant to the herbivore, then to the carnivore, until the end of the chain; arrows show the direction of energy flow. Most food chains start with green plants. Herbivores are animals that eat plants to get energy; snakes and lions are carnivores because they eat animals. The organism that eats a grasshopper is a carnivore. If plants disappeared, herbivores would find no food and die, and the food chain would break. All animals depend on plants directly or indirectly for energy.",
    variants: [
      { type: "build", style: "define", mode: "normal", level: "easy", q: "What is meant by herbivores?", parts: ["Animals that eat plants", "to get", "energy"], extra: ["eat", "meat"], hint: "Like the rabbit." }
    ] }
];
})();
