/* Grade 4 Science (Languages) · Chapter 8 Soil, Water, and Life in Egypt
   10 core ideas from the school book 2026/2027, both lessons (8-1 and 8-2): Point!, Activity, Try, Exercise (pages 92-99),
   plus 4 bonus ideas from the reference pages at the end of the book (record card, thermometer, scientific inquiry, fair test, pages 100-103).
   Source: the owner's PDF on Google Drive (Motafawek/g4/science/unit 8-en.pdf), 1 Nov 2026. No pictures from the owner: every picture is drawn in code
   (the ancient Egyptian mural of the lesson is not copied: the game and the tap picture draw their own simple scene).
   Ideas: S11-S16 = the ground and water (8-1), G11-G14 = transporting giant stone statues (8-2), X21-X24 = reference pages (bonus).
   (Idea letters are shared with Chapters 1-3, so the numbers start at 11 or 21.)
   The book's words: particles, spaces, soak in, gravel, desert sand, Nile River mud, clay, silt, nutrients, gauze, stopwatch,
   combining forces, slippery, sled, rope.
   Review notes: the exercise option "soil with very small particles like clay easily forms puddles" is not explained in the text and is not used.
   Tap pictures (drawn in g4_art.js): soilBottles -> sandBottle | mudBottle ; soilGrains -> grainsBig | grainsSmall ; statueMove -> pullers | waterman | statue
*/
(function () {
window.CHAPTER = { id: 'g4c8', title: 'Soil, Water, and Life in Egypt', grade: 'Grade 4', track: 'Languages' };

window.IDEAS = [
  /* ---------- 8-1 The Relationship Between the Ground and Water ---------- */
  { id: 'S11', lesson: 1, concept: 'Particle size decides the speed',
    explain: 'The speed at which water soaks into the ground depends on the size of the particles that make up the soil.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What does the speed at which water soaks into the ground depend on?', options: ['The size of the particles that make up the soil', 'The color of the sky', 'The time of the day'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'The speed at which water soaks into the ground depends on the size of the soil ___.', options: ['particles', 'plants', 'stones on top'], answer: 0 },
      { type: 'tap', diagram: 'soilGrains', mode: 'normal', level: 'medium', q: 'Tap the soil where water soaks in fast.', answer: 'grainsBig' }
    ] },
  { id: 'S12', lesson: 1, concept: 'Large particles: desert sand',
    explain: 'Soil with large particles (like gravel and desert sand): because the spaces between the particles are large, the paths for water are wide. Water soaks in fast, so even if it rains, the ground dries up quickly.',
    variants: [
      { type: 'build', style: 'why', mode: 'normal', level: 'hard', q: 'When it rains a lot in the desert, the ground dries up quickly.', parts: ['Because the particles are large,', 'so the spaces between them are large', 'and water soaks in fast'], extra: ['the particles are tiny,', 'and water stays on top'] },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'How does the speed of water soaking in change when the soil particles are larger?', options: ['Water soaks in faster', 'Water soaks in slower', 'Water does not soak in at all'], answer: 0 },
      { type: 'multi', mode: 'normal', level: 'medium', q: 'Choose all the soils with large particles.', options: ['Gravel', 'Desert sand', 'Nile River mud'], answer: [0, 1] },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'Water passes through desert sand faster than farm mud.', answer: 0 }
    ] },
  { id: 'S13', lesson: 1, concept: 'Small particles: Nile mud',
    explain: 'Soil with small particles (like Nile River mud and clay): because the particles are very fine, they stick close together and the spaces become small. Water is hard to pass through, and it soaks in slowly.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What are the properties of the fine mud (silt) along the Nile River?', options: ['The particles are small, and water soaks in slowly', 'The particles are large, and water passes through quickly', 'The particles are small, and water passes through quickly'], answer: 0 },
      { type: 'tap', diagram: 'soilGrains', mode: 'normal', level: 'medium', q: 'Tap the soil where water soaks in slowly.', answer: 'grainsSmall' },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'Ground with large particles like gravel is hard for water to soak into.', answer: 1, explain: 'Large particles leave large spaces, so water soaks in fast. It is the small particles (mud, clay) that are hard for water to pass through.' },
      { type: 'table', mode: 'normal', level: 'medium', q: 'Desert sand or Nile River mud?', cols: ['Desert sand', 'Nile River mud'], items: ['Large particles', 'Wide paths for water', 'Very fine particles', 'Water soaks in slowly'], answer: [0, 0, 1, 1] }
    ] },
  { id: 'S14', lesson: 1, concept: 'Ideas used in Egypt',
    explain: 'The Nile River mud can hold water and nutrients for a long time, so it is good for farming. When farming in the desert, where water soaks in too fast, special ideas are needed to keep the water from escaping.',
    variants: [
      { type: 'build', style: 'why', mode: 'normal', level: 'hard', q: 'The Nile River mud is good for farming.', parts: ['Because it can hold', 'water and nutrients', 'for a long time'], extra: ['lets water escape', 'for a moment'] },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Why are special ideas needed when farming in the desert?', options: ['Water soaks in too fast, so we must keep it from escaping', 'The desert has too much mud', 'Water stays on the sand for a long time'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'In the fields near the Nile River, water stays for a long time.', answer: 0 }
    ] },
  { id: 'S15', lesson: 1, concept: 'The sand and mud experiment',
    explain: 'Materials: desert sand, farm mud, 2 plastic bottles, gauze, rubber bands, a stopwatch, a magnifying glass (a scalpel is used by the teacher only). Touch the sand and the mud and look at them with a magnifying glass. Cut 2 bottles, put cloth on the mouths and turn them upside down. Put the same amount of sand in one and of mud in the other, pour the same amount of water at the same time, and use a stopwatch to see which one starts dropping water first. Also look at how long water stays on the surface.',
    variants: [
      { type: 'tap', diagram: 'soilBottles', mode: 'normal', level: 'medium', q: 'Tap the bottle where water passes through faster.', answer: 'sandBottle' },
      { type: 'multi', mode: 'normal', level: 'medium', q: 'Choose all the things we keep the same in the experiment.', options: ['The amount of soil', 'The amount of water', 'The time we pour the water', 'The kind of soil'], answer: [0, 1, 2] },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What do we use to find which bottle starts dropping water first?', options: ['A stopwatch', 'A compass', 'A thermometer'], answer: 0 },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'What do we use to look closely at the sand and the mud?', options: ['A magnifying glass', 'A mirror', 'A fan'], answer: 0 }
    ] },
  { id: 'S16', lesson: 1, boss: true, concept: 'Sand, mud and water',
    explain: 'Large particles (sand, gravel): large spaces, water soaks in fast, the ground dries quickly. Small particles (mud, clay): small spaces, water soaks in slowly, and the mud holds water and nutrients for farming.',
    variants: [
      { type: 'multi', mode: 'boss', level: 'hard', q: 'Choose all the correct answers about how water soaks into soil.', options: ['Water passes through desert sand faster than farm mud', 'Very fine particles stick close together, so the spaces are small', 'Ground with large particles like gravel is hard for water to soak into'], answer: [0, 1] },
      { type: 'mc', style: 'story', mode: 'boss', level: 'hard', q: 'Two cups get the same water. In cup A the water disappears in an instant; in cup B it stays on top for a long time. Which cup has Nile mud?', options: ['Cup B', 'Cup A', 'Both cups'], answer: 0 },
      { type: 'match', mode: 'boss', level: 'hard', q: 'Match each soil with its description.', left: ['Desert sand', 'Nile River mud'], right: ['Large spaces: water soaks in fast', 'Small spaces: holds water and nutrients'], answer: [0, 1] }
    ] },

  /* ---------- 8-2 Transporting Giant Stone Statues ---------- */
  { id: 'G11', lesson: 2, concept: 'Combining forces',
    explain: 'To move a giant stone statue, a very large force was needed. Combining forces: by many people pulling the ropes in the same direction, they added up small forces to create a large force.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'When moving a heavy stone statue, why do many people pull the rope?', options: ['To make a larger force than when there is only one person', 'Because one person will carry it in the wrong direction', 'Because carrying heavy things makes you hungry'], answer: 0 },
      { type: 'tap', diagram: 'statueMove', mode: 'normal', level: 'medium', q: 'Tap the people who are combining their forces.', answer: 'pullers' },
      { type: 'build', style: 'sentence', mode: 'normal', level: 'hard', q: 'Make the correct sentence about combining forces.', parts: ['Many people pull the ropes', 'in the same direction,', 'so small forces add up to a large force'], extra: ['in different directions,', 'so the statue gets lighter'] }
    ] },
  { id: 'G12', lesson: 2, concept: 'Making the ground slippery',
    explain: 'Making it slippery: by sprinkling water on the ground to make it slippery, they reduced the force needed to move the statue.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'When moving a heavy object, if you make the ground slippery, what happens to the force needed?', options: ['You need less force', 'You need a larger force', 'The force needed does not change'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'They sprinkle water on the ground in front of the sled to make the ground ___, so they can move it with less force.', options: ['slippery', 'hard', 'hot'], answer: 0 },
      { type: 'tap', diagram: 'statueMove', mode: 'normal', level: 'medium', q: 'Tap the person who makes the ground slippery.', answer: 'waterman' }
    ] },
  { id: 'G13', lesson: 2, concept: 'Looking at the old picture',
    explain: 'Look at the illustration based on an ancient Egyptian mural: one person cannot move the stone statue, so many people combine their forces. There is a person sprinkling water on the sand in front of the sled, to make the sled slip easily on the sand.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Where does the person sprinkle the water?', options: ['On the sand in front of the sled', 'On the statue’s face', 'On the people pulling'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'One person can move the giant stone statue alone.', answer: 1, explain: 'One person cannot move the stone statue, so many people combine their forces to move it.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What does the statue slide on?', options: ['A sled', 'A wind-powered car', 'A felucca'], answer: 0 }
    ] },
  { id: 'G14', lesson: 2, boss: true, concept: 'The wisdom of ancient Egyptians',
    explain: 'Ancient Egyptians moved giant stone statues by combining the forces of many people and by sprinkling water to make the sand slippery, so less force was needed.',
    variants: [
      { type: 'mc', mode: 'boss', level: 'hard', q: 'Choose the correct answer about transporting Egyptian stone statues.', options: ['By combining the forces of a large number of people, they moved the giant statue', 'A small number of people can combine their forces more easily to move it', 'By making the ground hard with water, they moved it'], answer: 0 },
      { type: 'table', mode: 'boss', level: 'hard', q: 'Which idea is it?', cols: ['Combining forces', 'Making it slippery'], items: ['Many people pull the ropes', 'Small forces add up to a large force', 'Water is sprinkled on the sand', 'Less force is needed'], answer: [0, 0, 1, 1] },
      { type: 'mc', style: 'story', mode: 'boss', level: 'hard', q: 'A team of 10 people cannot move a heavy sled on dry sand. Which two ideas from the lesson can help?', options: ['Add more people pulling the same way, and sprinkle water in front of the sled', 'Pull in different directions, and make the sand dry', 'Use fewer people, and wait'], answer: 0 }
    ] },

  /* ---------- Bonus · reference pages (100-103) ---------- */
  { id: 'X21', lesson: 2, bonus: true, concept: 'The observation record card',
    explain: 'Basic items of a record card: a title (what you investigated), the date, time and name, the size, color and shape, where you found it (on the ground, in the grass, near the river…), and what you noticed and your thoughts.',
    variants: [
      { type: 'multi', mode: 'normal', level: 'medium', q: 'Choose all the basic items of an observation record card.', options: ['A title', 'The date, time and name', 'Where you found it', 'Your favorite color'], answer: [0, 1, 2] },
      { type: 'tf', mode: 'normal', level: 'easy', q: 'On a record card, we write what we noticed and our thoughts.', answer: 0 }
    ] },
  { id: 'X22', lesson: 2, bonus: true, concept: 'Measuring air temperature',
    explain: 'To measure air temperature: measure at a height of 1.2 to 1.5 meters above the ground, in a well-ventilated place away from direct sunlight, and read by looking straight across at the top of the red liquid. Do not touch the bulb with your fingers.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'At what height do we measure the air temperature?', options: ['1.2 to 1.5 meters above the ground', 'On the ground', '10 meters above the ground'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'How do we read the thermometer?', options: ['Look straight across at the top of the red liquid', 'Look at it from far below', 'Read the bottom of the bulb'], answer: 0 }
    ] },
  { id: 'X23', lesson: 2, bonus: true, concept: 'The six steps of scientific inquiry',
    explain: 'How to do science: 1) Question 2) Prediction 3) Plan 4) Experiment and observation 5) Data (results) 6) Conclusion.',
    variants: [
      { type: 'order', mode: 'normal', level: 'medium', q: 'Put the steps of scientific inquiry in order.', items: ['Prediction', 'Question', 'Experiment and observation', 'Plan', 'Conclusion', 'Data (results)'], answer: [1, 0, 3, 2, 5, 4] },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'In which step do we make a guess about the answer?', options: ['Prediction', 'Data', 'Conclusion'], answer: 0 }
    ] },
  { id: 'X24', lesson: 2, bonus: true, concept: 'A fair test',
    explain: 'Tips for a fair test: when comparing something, change only the condition you want to test, and keep all other conditions exactly the same. Example: when testing the size of the sail, keep the wind strength the same.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'In a fair test, what do we change?', options: ['Only the condition we want to test', 'All the conditions', 'Nothing at all'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'When testing how the size of the sail changes the car’s movement, what must stay the same?', options: ['The wind strength', 'The size of the sail', 'Nothing'], answer: 0 }
    ] }
];
})();
