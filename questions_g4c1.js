/* Grade 4 Science (Languages) · Chapter 1 Nature in Our Surroundings
   22 core ideas from the school book 2026/2027, all five lessons (1-1 to 1-5): Point!, Warm Up, Try, Exercise (pages 6-23),
   plus 4 bonus ideas from "Let's Expand" (pages 14-15) and the Column "The Desert Cleaner, Scarab" (pages 24-25).
   Same format as the Grade 5 files. Ideas: L = let's find living organisms (1-1), O = how to observe (1-2), C = colors and shapes: grouping (1-3),
   H = habitats and adaptation (1-4), D = desert living organisms (1-5), S = scarab column (bonus), E = Let's Expand (bonus).
   Idea ids are unique inside Grade 4 (Grade 5 has its own set).
   Tap pictures (drawn in g4_art.js): hidePlaces -> grass | stone | rock | sand ; nileDesert -> nile | desert ; fennec -> ears | feet | tail ; desertDay -> hole | sand | dune
*/
window.CHAPTER = { id: 'g4-lang-ch1', title: 'Nature in Our Surroundings', grade: 'Grade 4', track: 'Languages' };

window.IDEAS = [
  /* ---------- 1-1 Let's Find Living Organisms ---------- */
  { id: 'L1', lesson: 1, concept: 'Living organisms',
    explain: 'Animals and plants are both living organisms. Rocks, water and air are non-living things.',
    variants: [
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'Animals and plants are both living organisms.', answer: 0 },
      { type: 'mc', style: 'odd', mode: 'normal', level: 'medium', q: 'Which one is NOT a living organism?', options: ['A rock', 'A frog', 'A sunflower', 'An ant'], answer: 0 },
      { type: 'table', mode: 'normal', level: 'medium', q: 'Sort them: living or non-living?', cols: ['Living organisms', 'Non-living things'], items: ['Grasshopper', 'Tree', 'Rock', 'Water', 'Dog', 'Air'], answer: [0, 0, 1, 1, 0, 1] },
      { type: 'multi', mode: 'normal', level: 'medium', q: 'Choose all the living organisms.', options: ['A cactus', 'A stone', 'A sparrow', 'Water'], answer: [0, 2] }
    ] },
  { id: 'L2', lesson: 1, concept: 'What living organisms do',
    explain: 'Living organisms carry out life processes: they obtain nutrition, they breathe (respiration) and they grow. Non-living things like rocks do not.',
    variants: [
      { type: 'multi', mode: 'normal', level: 'medium', q: 'Choose the three life processes that living organisms carry out.', options: ['Obtaining nutrition', 'Respiration', 'Growth', 'Turning into rock'], answer: [0, 1, 2] },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Living organisms obtain nutrition, breathe and ___.', options: ['grow', 'rust', 'melt'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'How is a plant different from a rock?', options: ['The plant obtains nutrition, breathes and grows', 'The plant is always bigger', 'The rock is always grey', 'There is no difference'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'A rock grows and breathes just like a plant.', answer: 1 },
      { type: 'build', style: 'why', mode: 'normal', level: 'hard', q: 'A tree is a living organism, but a rock is not.', parts: ['Because the tree', 'obtains nutrition, breathes', 'and grows'], extra: ['never changes', 'and is very hard'] }
    ] },
  { id: 'L3', lesson: 1, concept: 'Near grass or trees',
    explain: 'Near grass or trees there are places with food and places that are easy to hide in, so many living organisms are found there.',
    variants: [
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Near grass or trees there are places with ___ or places easy to hide.', options: ['food', 'ice', 'smoke'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Why are many living organisms found near grass or trees?', options: ['There is food, and it is easy to hide', 'It is the hottest place', 'There is no water there', 'It is always dark there'], answer: 0 },
      { type: 'mc', style: 'story', mode: 'normal', level: 'medium', q: 'Omar looks for insects in the school yard. He finds a grasshopper in the grass. Why is the grass a good place for it?', options: ['It finds food there and can hide easily', 'The grass is hotter than the sand', 'Grasshoppers cannot move on sand', 'The grass has no other living organisms'], answer: 0 },
      { type: 'tap', diagram: 'hidePlaces', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap the place where a grasshopper is often found.', answer: 'grass' }
    ] },
  { id: 'L4', lesson: 1, concept: 'Under stones or in the shade of rocks',
    explain: 'Under stones or in the shade of rocks there are places with dampness (water), and cool places away from the sun.',
    variants: [
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Under stones there are places with dampness (___).', options: ['water', 'sand', 'fire'], answer: 0 },
      { type: 'tap', diagram: 'hidePlaces', mode: 'normal', level: 'medium', q: 'Pill bugs are often in damp places. Tap where you would look for a pill bug.', answer: 'stone' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What kind of place is found under stones or in the shade of rocks?', options: ['A damp, cool place away from the sun', 'A hot place in the sun', 'A dry place with no water at all', 'A windy place high up'], answer: 0 },
      { type: 'match', mode: 'normal', level: 'medium', q: 'Match each place to what living organisms find there.', left: ['Near grass or trees', 'Under stones or in the shade of rocks'], right: ['Food, and places easy to hide', 'Dampness (water), and cool places away from the sun'], answer: [0, 1] }
    ] },
  { id: 'L5', lesson: 1, concept: 'Living organisms live in places that fit them',
    explain: 'Living organisms live in places that fit them, so the kinds of living organisms you find are different depending on the location. Even in hot and dry places like deserts, they can live in the shade of rocks or under the ground.',
    variants: [
      { type: 'match', mode: 'normal', level: 'medium', q: 'Where are these living organisms often found?', left: ['Grasshoppers', 'Pill bugs', 'Lizards'], right: ['In the grass', 'In damp places like under stones', 'On sunny rocks'], answer: [0, 1, 2] },
      { type: 'multi', mode: 'normal', level: 'hard', q: 'Where is it easy to find living organisms in a hot, dry place like Egypt? Choose all the correct answers.', options: ['Right in the middle of the hot sand in the sun', 'Cool places in the shadow of rocks or big stones', 'At the roots where a little bit of grass grows'], answer: [1, 2] },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Even in hot and dry places like deserts, living organisms can live in the shade of rocks or under the ___.', options: ['ground', 'sun', 'sky'], answer: 0 },
      { type: 'tap', diagram: 'hidePlaces', mode: 'normal', level: 'medium', q: 'It is a hot, dry day. Tap the place where it is hardest to find living organisms.', answer: 'sand' },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'You find the same kinds of living organisms in every place.', answer: 1, explain: 'Living organisms live in places that fit them, so the kinds you find are different depending on the location.' },
      { type: 'tap', diagram: 'hidePlaces', mode: 'timed', seconds: 15, level: 'easy', q: 'Lizards are sometimes seen on sunny rocks. Tap that place.', answer: 'rock' }
    ] },

  /* ---------- 1-2 How to Observe ---------- */
  { id: 'O1', lesson: 2, concept: 'Shape, color and size',
    explain: 'When you look closely at living organisms, pay attention to shape, color and size.',
    variants: [
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'When you look closely at living organisms, pay attention to shape, color and ___.', options: ['size', 'price', 'luck'], answer: 0 },
      { type: 'multi', mode: 'normal', level: 'medium', q: 'What should you pay attention to when you look closely at a living organism? Choose all the correct answers.', options: ['Its shape', 'Its color', 'Its size', 'What you ate for lunch'], answer: [0, 1, 2] },
      { type: 'mc', style: 'story', mode: 'normal', level: 'medium', q: 'Salma is looking closely at a beetle. Which note is a good observation?', options: ['It is oval, blackish, and about 2 cm long', 'It is my favorite insect', 'I do not like beetles', 'Beetles are boring'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'When we observe a living organism, we look at its shape, color and size.', answer: 0 }
    ] },
  { id: 'O2', lesson: 2, concept: 'How to use a magnifying glass',
    explain: 'Hold the magnifying glass close to your eye. When you CAN move the thing, move the thing back and forth to focus. When you CANNOT move the thing, move your face back and forth to focus.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'You are holding a leaf in your hand. How do you look at it with a magnifying glass?', options: ['Hold the glass close to your eye and move the leaf back and forth', 'Hold the glass far from your eye and stretch your arms out', 'Put the glass on the ground and step back', 'Close both eyes'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'You are observing a tree that cannot move. What do you move to focus?', options: ['Your own face', 'The tree', 'The sun', 'Nothing at all'], answer: 0 },
      { type: 'table', mode: 'normal', level: 'hard', q: 'What do you move to focus the magnifying glass?', cols: ['Move the thing', 'Move your face'], items: ['A leaf in your hand', 'A small stone you picked up', 'A tree', 'A big rock'], answer: [0, 0, 1, 1] },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'To use a magnifying glass, hold it far from your eye.', answer: 1 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Hold the magnifying glass close to your ___.', options: ['eye', 'ear', 'foot'], answer: 0 }
    ] },
  { id: 'O3', lesson: 2, concept: 'Never look at the sun',
    explain: 'Caution: never look directly at the sun with a magnifying glass.',
    variants: [
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'It is fine to look at the sun through a magnifying glass.', answer: 1 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What must you NEVER do with a magnifying glass?', options: ['Look directly at the sun', 'Look at a leaf', 'Look at an ant', 'Hold it close to your eye'], answer: 0 },
      { type: 'mc', style: 'spot', mode: 'normal', level: 'medium', q: '“Hold the glass close to your eye and look at the sun.” Choose the right fix.', options: ['Never look directly at the sun with a magnifying glass', 'Hold the glass far from your eye and look at the sun', 'Look at the sun for a long time'], answer: 0 }
    ] },
  { id: 'O4', lesson: 2, concept: 'How to write a record card',
    explain: 'On a record card: write the topic first, then the date and your name. Write what you found with a sketch and sentences (the place, size, shape and color). Draw the sketch with thin, clear lines and don’t shade it in. Finally, write what you learned or what you wondered.',
    variants: [
      { type: 'order', mode: 'normal', level: 'medium', q: 'Put the steps of writing a record card in order.', items: ['Write what you found with a sketch and sentences', 'Write the topic', 'Write what you learned or what you wondered', 'Write the date and your name'], answer: [1, 3, 0, 2] },
      { type: 'multi', mode: 'normal', level: 'medium', q: 'What is important to write on a record card besides the sketch? Choose the 3 correct answers.', options: ['Date', 'Location found', 'What you ate for dinner yesterday', 'Color and shape of the living organism', 'Your favorite colors and shapes'], answer: [0, 1, 3] },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Choose the correct way to sketch for science.', options: ['Draw the shape exactly as you see it with thin lines', 'Add shadows to make it look cool', 'If you can’t see a part well, imagine it and draw it'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'In a science sketch, we shade the drawing in.', answer: 1 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Draw the sketch with ___, clear lines.', options: ['thin', 'thick', 'broken'], answer: 0 },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'What do you write first on a record card?', options: ['The topic', 'What you learned', 'Your favorite color', 'What you wondered'], answer: 0 }
    ] },

  /* ---------- 1-3 Colors and Shapes of Living Organisms ---------- */
  { id: 'C1', lesson: 3, concept: 'Grouping by color and shape',
    explain: 'You can group things by looking at their color and shape. Find common points: things that are the same, like “has legs”, “has wings” or “colors are similar”. Find differences: things that are not the same, like “shape is different” or “size is different”.',
    variants: [
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'You can group things by looking at their color and ___.', options: ['shape', 'price', 'owner'], answer: 0 },
      { type: 'table', mode: 'normal', level: 'medium', q: 'Common point or difference?', cols: ['Common points', 'Differences'], items: ['Both have wings', 'Both have legs', 'The shape is different', 'The size is different'], answer: [0, 0, 1, 1] },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'A butterfly and a bird are put in the same group. Which common point do they share?', options: ['Both have wings', 'Both have six legs', 'Both are plants', 'Both live under stones'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'Finding differences means looking for things that are not the same.', answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which of these is a way to group living organisms by SIZE?', options: ['Bigger than a sparrow, and smaller than a sparrow', 'A brown group and a green group', 'A group with 6 legs and a group with no legs'], answer: 0 }
    ] },
  { id: 'C2', lesson: 3, concept: 'Classifying',
    explain: 'To classify: collect things with similar features and put them in groups.',
    variants: [
      { type: 'term', mode: 'normal', level: 'medium', q: 'Collecting things with similar features and putting them in groups.', answer: 'Classifying' },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'What do we call putting things with similar features into groups?', options: ['Classifying', 'Sketching', 'Measuring', 'Hiding'], answer: 0 },
      { type: 'build', style: 'define', mode: 'normal', level: 'hard', q: 'What is meant by classifying?', parts: ['Collecting things', 'with similar features', 'and putting them in groups'], extra: ['with different owners', 'and hiding them under stones'] },
      { type: 'order', mode: 'normal', level: 'medium', q: 'Put the steps of grouping in order.', items: ['Put the things with similar features in groups', 'Look closely at the color and shape', 'Find common points and differences'], answer: [1, 2, 0] }
    ] },
  { id: 'C3', lesson: 3, boss: true, concept: 'Let’s make groups',
    explain: 'The same living organisms can be grouped in different ways: by color (brown group, green group), by shape (group with 6 legs, group with no legs) or by size (bigger or smaller than a sparrow).',
    variants: [
      { type: 'table', mode: 'boss', level: 'hard', q: 'Group these living organisms.', cols: ['Animals', 'Plants'], items: ['Grasshopper', 'Papyrus', 'Lizard', 'Water lily', 'Butterfly'], answer: [0, 1, 0, 1, 0] },
      { type: 'table', mode: 'boss', level: 'hard', q: 'Group these animals by a feature of their shape.', cols: ['Has wings', 'Has no wings'], items: ['Butterfly', 'Vulture', 'Lizard', 'Spider'], answer: [0, 0, 1, 1] },
      { type: 'mc', style: 'story', mode: 'boss', level: 'hard', q: 'Mona puts a grasshopper and a butterfly in one group, and a water lily and a papyrus in another group. How did she group them?', options: ['By shape: a group with 6 legs and a group with no legs', 'By size: bigger and smaller than a sparrow', 'By the day she found them', 'By the first letter of their names'], answer: 0 },
      { type: 'match', mode: 'boss', level: 'hard', q: 'Match each way of grouping to its example.', left: ['By color', 'By shape', 'By size'], right: ['Brown group, green group', 'Group with 6 legs, group with no legs', 'Bigger than a sparrow, smaller than a sparrow'], answer: [0, 1, 2] }
    ] },

  /* ---------- 1-4 Different Places, Different Living Organisms ---------- */
  { id: 'H1', lesson: 4, concept: 'Habitat',
    explain: 'The place where a living organism lives is called its habitat.',
    variants: [
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'What do you call the place where a living organism lives?', options: ['Habitat', 'Adaptation', 'Record card', 'Sketch'], answer: 0 },
      { type: 'term', mode: 'normal', level: 'medium', q: 'The place where a living organism lives.', answer: 'Habitat' },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'The place where a living organism lives is called its ___.', options: ['habitat', 'shadow', 'sketch'], answer: 0 },
      { type: 'mc', style: 'story', mode: 'normal', level: 'medium', q: 'The fennec fox lives in the desert. What is the desert for the fennec fox?', options: ['Its habitat', 'Its adaptation', 'Its food', 'Its record card'], answer: 0 },
      { type: 'fix', mode: 'normal', level: 'medium', q: 'The place where a living organism lives is called its adaptation.', wrong: 'adaptation', answer: 'habitat' }
    ] },
  { id: 'H2', lesson: 4, concept: 'Adaptation',
    explain: 'Changing body parts or behaviors to survive in a place is called adaptation.',
    variants: [
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'What is it called when a living organism changes its body parts or behaviors to survive in a place?', options: ['Adaptation', 'Habitat', 'Observation', 'Classifying'], answer: 0 },
      { type: 'term', mode: 'normal', level: 'medium', q: 'Changing body parts or behaviors to survive in a place.', answer: 'Adaptation' },
      { type: 'build', style: 'define', mode: 'normal', level: 'hard', q: 'What is meant by adaptation?', parts: ['Changing body parts', 'or behaviors', 'to survive in a place'], extra: ['or names', 'to draw a sketch'] },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'Living organisms need adaptation suited to their environment to live in that place.', answer: 0 }
    ] },
  { id: 'H3', lesson: 4, concept: 'Along the Nile River and in the desert',
    explain: 'Along the Nile River there is plenty of water and the soil is moist: luffa, orange and lotus plants, frogs, bees and water birds live there. In the desert there is very little water and the soil is dry: the acacia and the colocynth, the fennec fox, the jerboa and lizards live there.',
    variants: [
      { type: 'table', mode: 'normal', level: 'hard', q: 'Compare between the two habitats.', poc: 'Environment', cols: ['Along the Nile River', 'Desert'], items: ['Plenty of water', 'Moist soil', 'Very little water', 'Dry soil'], answer: [0, 0, 1, 1] },
      { type: 'table', mode: 'normal', level: 'hard', q: 'Where does each living organism live?', cols: ['Along the Nile River', 'Desert'], items: ['Frog', 'Fennec fox', 'Lotus', 'Acacia', 'Water bird', 'Jerboa'], answer: [0, 1, 0, 1, 0, 1] },
      { type: 'tap', diagram: 'nileDesert', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap the habitat with plenty of water and moist soil.', answer: 'nile' },
      { type: 'tap', diagram: 'nileDesert', mode: 'normal', level: 'medium', q: 'Tap the habitat of the jerboa.', answer: 'desert' },
      { type: 'multi', mode: 'normal', level: 'medium', q: 'Choose all the living organisms found in the desert.', options: ['Egyptian sand lizard', 'Water lily', 'Fennec fox', 'Papyrus', 'Jerboa'], answer: [0, 2, 4] },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Along the Nile River there is plenty of water, and the soil is ___.', options: ['moist', 'dry', 'frozen'], answer: 0 }
    ] },
  { id: 'H4', lesson: 4, concept: 'Desert plants keep water',
    explain: 'Desert plants (like the acacia) have small leaves so they don’t lose water, and their roots grow deep underground.',
    variants: [
      { type: 'multi', mode: 'normal', level: 'medium', q: 'What are the physical features of desert plants that help them keep water? Choose all the correct answers.', options: ['The leaves are very big', 'The leaves are small', 'The roots grow shallowly underground', 'The roots grow deep underground'], answer: [1, 3] },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Choose the correct answer about a plant’s “shape” and its habitat.', options: ['Desert plants have small leaves so they don’t lose water', 'Desert plants have very big leaves to absorb a lot of water', 'Desert plants have very big leaves to share water with animals'], answer: 0 },
      { type: 'build', style: 'why', mode: 'normal', level: 'hard', q: 'The leaves of the acacia are small.', parts: ['So that', 'the plant does not lose', 'water'], extra: ['the plant loses a lot of', 'sunlight'] },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'The roots of desert plants grow ___ underground.', options: ['deep', 'shallowly'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'The acacia is a desert plant with small leaves.', answer: 0 }
    ] },
  { id: 'H5', lesson: 4, boss: true, concept: 'Color and shape are adaptations',
    explain: 'The color and shape of living organisms are adaptations to survive in their habitat. A frog from the Nile River could not survive in the desert: it lives where there is plenty of water and moist soil, and the desert has very little water and dry soil.',
    variants: [
      { type: 'mc', mode: 'boss', level: 'hard', q: 'Choose the correct answer about the “color” and “shape” of living organisms.', options: ['The color and shape of living organisms are adaptations to survive in their habitat', 'The color and shape of living organisms are decided by how much they exercise', 'The color and shape of living organisms are caused by the differences in what they eat'], answer: 0 },
      { type: 'mc', style: 'story', mode: 'boss', level: 'hard', q: 'What do you think would happen if you took a frog living in the Nile River to the desert?', options: ['It could not survive, because the desert has very little water and dry soil', 'It would grow big ears like the fennec fox in one day', 'It would live better, because the desert is quiet', 'Nothing would change'], answer: 0 },
      { type: 'build', style: 'why', mode: 'boss', level: 'hard', q: 'A frog from the Nile River cannot live in the desert.', parts: ['Because the frog lives where there is', 'plenty of water and moist soil,', 'and the desert is very dry'], extra: ['very little water and dry soil,', 'and the desert is very wet'] },
      { type: 'mc', mode: 'boss', level: 'hard', q: 'Why are the living organisms found along the Nile River different from those in the desert?', options: ['The kinds of living organisms that can live in a place depend on their habitat', 'Desert animals do not like rivers', 'All living organisms can live anywhere', 'The Nile River has no plants'], answer: 0 }
    ] },

  /* ---------- 1-5 Desert Living Organisms ---------- */
  { id: 'D1', lesson: 5, concept: 'The fennec fox’s big ears',
    explain: 'The fennec fox has big ears. They let body heat escape to the outside and keep the body cool.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Why are the fennec fox’s ears so big?', options: ['To let heat inside the body escape to the outside and keep the body cool', 'To hear small sounds from far away well', 'To move the big ears like wings and fly in the sky'], answer: 0 },
      { type: 'tap', diagram: 'fennec', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap the part of the fennec fox that lets body heat escape to the outside.', answer: 'ears' },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'The fennec fox’s big ears let body ___ escape to the outside.', options: ['heat', 'water', 'fur'], answer: 0 },
      { type: 'build', style: 'function', mode: 'normal', level: 'hard', q: 'What is the function of the fennec fox’s big ears?', parts: ['They let body heat', 'escape to the outside', 'and keep the body cool'], extra: ['stay inside', 'and keep the body hot'] },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'The fennec fox moves its big ears like wings to fly.', answer: 1 }
    ] },
  { id: 'D2', lesson: 5, concept: 'Fur on the soles of the feet',
    explain: 'The soles of the fennec fox’s feet are covered with thick fur, so they do not get burned when it walks on hot sand.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What protects the fennec fox’s feet when it walks on hot sand?', options: ['Thick fur on the soles of its feet', 'Its big ears', 'Its long tail', 'Water in its feet'], answer: 0 },
      { type: 'tap', diagram: 'fennec', mode: 'normal', level: 'medium', q: 'Tap the part that is covered with thick fur so it does not get burned on hot sand.', answer: 'feet' },
      { type: 'build', style: 'why', mode: 'normal', level: 'hard', q: 'The soles of the fennec fox’s feet are covered with thick fur.', parts: ['So that they', 'do not get burned', 'when walking on hot sand'], extra: ['do not get wet', 'when swimming in the river'] },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'The soles of the fennec fox’s feet are covered with thick ___.', options: ['fur', 'scales', 'feathers'], answer: 0 }
    ] },
  { id: 'D3', lesson: 5, concept: 'The jerboa’s long back legs',
    explain: 'The jerboa has long back legs. It jumps like a kangaroo to move quickly. This helps keep the time it touches the hot ground short.',
    variants: [
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'The jerboa uses its long ___ to jump and move quickly, avoiding the hot ground.', options: ['back legs', 'ears', 'wings'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'How does jumping help the jerboa in the desert?', options: ['It keeps the time it touches the hot ground short', 'It lets the jerboa drink more water', 'It makes the sand cooler', 'It helps the jerboa look at the sun'], answer: 0 },
      { type: 'build', style: 'function', mode: 'normal', level: 'hard', q: 'What is the function of the jerboa’s long back legs?', parts: ['They help it jump', 'and move quickly,', 'so it touches the hot ground for a short time'], extra: ['and move slowly,', 'so it stays on the hot ground for a long time'] },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'The jerboa jumps like a kangaroo.', answer: 0 },
      { type: 'match', mode: 'normal', level: 'medium', q: 'Match each desert animal to its body feature.', left: ['Fennec fox', 'Jerboa'], right: ['Big ears, and thick fur on the soles of its feet', 'Long back legs'], answer: [0, 1] }
    ] },
  { id: 'D4', lesson: 5, concept: 'Clever ways of living',
    explain: 'Many desert animals are active at night, when the temperature goes down. During the day, when the sunlight is strong and it is very hot, they spend time in cool holes under the ground.',
    variants: [
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Many desert animals are active at ___, when the temperature goes down.', options: ['night', 'noon'], answer: 0 },
      { type: 'tap', diagram: 'desertDay', mode: 'normal', level: 'medium', q: 'It is daytime in the desert. Tap where many animals spend the day.', answer: 'hole' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Why are animals living in the desert not very active during the day?', options: ['Because the sunlight is strong and it is very hot', 'Because it is too dark to see', 'Because it rains all day', 'Because there is too much food'], answer: 0 },
      { type: 'table', mode: 'normal', level: 'hard', q: 'What do many desert animals do?', cols: ['During the day', 'At night'], items: ['Rest in cool holes under the ground', 'Stay away from the strong sunlight', 'Are active', 'Move around when the temperature goes down'], answer: [0, 0, 1, 1] },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'Many desert animals are most active at noon, when it is hottest.', answer: 1 }
    ] },
  { id: 'D5', lesson: 5, boss: true, concept: 'The shape of the body hides a reason',
    explain: 'The shape of the body hides a “reason” for living in that place. Desert animals also deal with having little water: camels drink a lot of water at once and store it inside their bodies, and some desert animals drink almost no water and can live only on the water found in their food.',
    variants: [
      { type: 'mc', style: 'odd', mode: 'boss', level: 'hard', q: 'Which of the following is NOT true about the features and life of desert living organisms?', options: ['Desert plants spread many big, thin leaves so they don’t lose water', 'Fennec foxes have fur on the soles of their feet to protect them from hot sand', 'Mice in the desert often move around at night to avoid the heat'], answer: 0 },
      { type: 'mc', style: 'story', mode: 'boss', level: 'hard', q: 'A fox that lives in the forest has small ears. The fennec fox that lives in the desert has very big ears. Why are they different?', options: ['The desert is very hot, and big ears let body heat escape', 'Forest foxes cannot hear', 'Fennec foxes use their ears to dig holes', 'Big ears keep the fennec fox warm at night'], answer: 0 },
      { type: 'match', mode: 'boss', level: 'hard', q: 'Match each desert living organism to how it lives in the desert.', left: ['Camel', 'Jerboa', 'Acacia'], right: ['Drinks a lot of water at once and stores it inside its body', 'Jumps quickly on its long back legs', 'Has small leaves and deep roots'], answer: [0, 1, 2] },
      { type: 'multi', mode: 'boss', level: 'hard', q: 'Choose all the ways desert animals deal with the heat and with little water.', options: ['Being active at night', 'Resting in cool holes during the day', 'Living on the water found in their food', 'Lying on the hot sand at noon'], answer: [0, 1, 2] }
    ] },

  /* ---------- Bonus: the Column "The Desert Cleaner, Scarab" (pages 24-25) and "Let's Expand" (pages 14-15): enrichment, not in the core 22 ---------- */
  { id: 'S1', lesson: 5, bonus: true, concept: 'The scarab, cleaner of the desert',
    explain: 'Scarabs (dung beetles) roll animal dung into balls, carry them and bury them in the soil. This is an important “cleanup” for nature: it makes the soil rich so plants can grow, and it stops sickness from spreading.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What do scarabs do with animal dung?', options: ['Roll it into balls and bury it in the soil', 'Leave it in the sun', 'Throw it in the river', 'Hide it in the trees'], answer: 0 },
      { type: 'multi', mode: 'normal', level: 'medium', q: 'How does the scarab help nature? Choose all the correct answers.', options: ['It makes the soil rich so plants can grow', 'It stops sickness from spreading', 'It makes the desert hotter'], answer: [0, 1] },
      { type: 'tf', mode: 'normal', level: 'easy', q: 'Ancient Egyptian people treated the scarab with great care, as a “holy creature that carries the sun”.', answer: 0 }
    ] },
  { id: 'S2', lesson: 5, bonus: true, concept: 'The scarab and the stars',
    explain: 'Recent studies have found that at night scarabs use the light of the Milky Way as a guide, so they carry their ball of dung straight to where they want to go.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What do scarabs use as a guide at night?', options: ['The light of the Milky Way', 'The sound of the wind', 'The smell of flowers', 'The light of a lamp'], answer: 0 },
      { type: 'tf', mode: 'normal', level: 'easy', q: 'At night, scarabs use the light of the stars to carry their ball in a straight line.', answer: 0 }
    ] },
  { id: 'E1', lesson: 3, bonus: true, concept: 'Animals of Egypt and their habitats',
    explain: 'Hoopoe: gardens and farmlands. Sand cat: deserts east of the Nile River. Cattle egret: the Nile River basin, farmlands and green areas. Egyptian cobra: dry semi-deserts, savannas and woodlands.',
    variants: [
      { type: 'match', mode: 'normal', level: 'medium', q: 'Match each animal to its habitat.', left: ['Hoopoe', 'Sand cat', 'Cattle egret'], right: ['Gardens and farmlands', 'Deserts east of the Nile River', 'The Nile River basin, farmlands and green areas'], answer: [0, 1, 2] },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which of these animals lives in the deserts east of the Nile River?', options: ['Sand cat', 'Cattle egret', 'Hoopoe'], answer: 0 }
    ] },
  { id: 'E2', lesson: 3, bonus: true, concept: 'Plants of Egypt and their habitats',
    explain: 'Lotus: wetlands and swamps of the Nile River. Papyrus: swamps and watersides of the Nile Delta. Colocynth: dry deserts near the Mediterranean Sea. Acacia: dry areas, deserts and around oases. Egyptian clover: rich lands of the Nile Delta and Upper Egypt.',
    variants: [
      { type: 'table', mode: 'normal', level: 'medium', q: 'Sort the plants by their habitat.', cols: ['Wet places by the Nile', 'Dry places and deserts'], items: ['Lotus', 'Papyrus', 'Colocynth', 'Acacia'], answer: [0, 0, 1, 1] },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Where does papyrus grow?', options: ['Swamps and watersides of the Nile Delta', 'Dry deserts near the Mediterranean Sea', 'On top of sand dunes'], answer: 0 }
    ] }
];
