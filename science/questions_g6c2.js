/* Grade 6 Science (Languages) · Chapter 2 Respiration
   15 core ideas from the school book 2026/2027, both lessons (2-1 and 2-2): Point!, Warm Up, Try, Exercise (pages 18-23).
   The chapter has no "Let's Expand" page, so there are no bonus ideas.
   Same format as the other files. Ideas: R = how breathing works (2-1), L = how lungs work (2-2).
   Idea ids are unique inside Grade 6 (Chapter 1 uses A, O, B, X).
   The book's words: breathe in, breathe out, take in, let out, breathing, limewater, milky white, gas detector tubes, windpipe, lungs,
   gas exchange, blood vessels, whole body, the work of the heart, alveoli, gills.
   Tap pictures (drawn in g6_body.js): breathBags -> milky | clear ; airways -> nose | windpipe | lungs ; gasExchange -> toBlood | toAir
*/
window.CHAPTER = { id: 'g6-lang-ch2', title: 'Respiration', grade: 'Grade 6', track: 'Languages' };

window.IDEAS = [
  /* ---------- 2-1 How Breathing Works ---------- */
  { id: 'R1', lesson: 1, concept: 'Why people breathe',
    explain: 'People breathe in and out to take in some of the oxygen from the air and let out carbon dioxide.',
    variants: [
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'People breathe in and out to take in some of the ___ from the air.', options: ['oxygen', 'nitrogen', 'limewater'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'People breathe in and out to take in some of the oxygen from the air and let out ___.', options: ['carbon dioxide', 'oxygen', 'limewater'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What do we take in from the air and what do we let out when we breathe?', options: ['We take in oxygen and let out carbon dioxide', 'We take in carbon dioxide and let out oxygen', 'We take in nitrogen and let out oxygen'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'When we breathe, we let out carbon dioxide.', answer: 0 },
      { type: 'build', style: 'why', mode: 'normal', level: 'hard', q: 'People breathe in and out.', parts: ['To take in', 'some of the oxygen from the air', 'and let out carbon dioxide'], extra: ['all of the nitrogen from the air', 'and let out limewater'] }
    ] },
  { id: 'R2', lesson: 1, concept: 'What breathing is',
    explain: 'Taking in oxygen and letting out carbon dioxide is called breathing.',
    variants: [
      { type: 'term', mode: 'normal', level: 'medium', q: 'Taking in oxygen and letting out carbon dioxide.', answer: 'Breathing' },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'What is taking in oxygen and letting out carbon dioxide called?', options: ['Breathing', 'Burning', 'Digestion'], answer: 0 },
      { type: 'build', style: 'define', mode: 'normal', level: 'hard', q: 'What is meant by breathing?', parts: ['Taking in oxygen', 'and letting out', 'carbon dioxide'], extra: ['and keeping in', 'limewater'] },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'Breathing is taking in carbon dioxide and letting out oxygen.', answer: 1 },
      { type: 'fix', mode: 'normal', level: 'medium', q: 'Taking in oxygen and letting out carbon dioxide is called burning.', wrong: 'burning', answer: 'breathing' }
    ] },
  { id: 'R3', lesson: 1, concept: 'Two bags: our breath and room air',
    explain: 'To see what is in our breath, prepare two plastic bags. Breathe into one bag, and fill the other bag with room air. Pour a little limewater into each bag and shake them well. Then see how the limewater changes.',
    variants: [
      { type: 'order', mode: 'normal', level: 'medium', q: 'Put the steps of the test with limewater in order.', items: ['Pour a little limewater into each bag and shake them well', 'Prepare two plastic bags', 'Breathe into one bag, and fill the other bag with room air'], answer: [1, 2, 0] },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'In the experiment to see what is in our breath, what is in the two plastic bags?', options: ['Breathed-out air in one bag and room air in the other', 'Breathed-out air in both bags', 'Water in one bag and sand in the other'], answer: 0 },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'What liquid do you pour into each bag in this experiment?', options: ['Limewater', 'Salt water', 'Oil'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'After pouring the limewater into the bags, you shake them well.', answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'In this experiment, what do we compare the air we breathe out with?', options: ['The air around us (room air)', 'Water', 'The limewater in the bottle'], answer: 0 }
    ] },
  { id: 'R4', lesson: 1, concept: 'Our breath and limewater',
    explain: 'When you blow breathed-out air into limewater, it turns milky white. Limewater turns milky white when it reacts with carbon dioxide, so this shows that the air we breathe out has more carbon dioxide than the air we breathe in.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What happens to limewater when you blow breathed-out air into it?', options: ['It turns milky white', 'It turns blue', 'It disappears'], answer: 0 },
      { type: 'tap', diagram: 'breathBags', mode: 'normal', level: 'medium', q: 'Limewater was poured into two bags, and the bags were shaken. Tap the bag that was filled with breathed-out air.', answer: 'milky' },
      { type: 'tap', diagram: 'breathBags', mode: 'normal', level: 'hard', q: 'Limewater was poured into two bags, and the bags were shaken. Tap the bag that has less carbon dioxide.', answer: 'clear' },
      { type: 'build', style: 'why', mode: 'normal', level: 'hard', q: 'The limewater turns milky white in the bag of breathed-out air.', parts: ['Because the air we breathe out', 'has more carbon dioxide', 'than the air we breathe in'], extra: ['has more oxygen', 'than the limewater'] },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Breathed-out air turns limewater milky ___.', options: ['white', 'blue', 'yellow'], answer: 0 },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'Limewater turns blue when you blow breathed-out air into it.', answer: 1 }
    ] },
  { id: 'R5', lesson: 1, concept: 'Gas detector tubes',
    explain: 'Gas detector tubes (for carbon dioxide and for oxygen) are used with a gas sampling pump to check the amount of oxygen and carbon dioxide in the air inside the bags. Make a small hole in the bag with scissors.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What do you use to check the amount of oxygen and carbon dioxide in the air inside the bags?', options: ['Gas detector tubes', 'A thermometer', 'A ruler'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'In the test with gas detector tubes, what do you do to the bag first?', options: ['Make a small hole in it with scissors', 'Fill it with water', 'Put it in hot water'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 15, level: 'easy', q: 'Gas detector tubes are used to check the amount of oxygen and carbon dioxide in the air inside the bags.', answer: 0 },
      { type: 'multi', mode: 'normal', level: 'medium', q: 'Which of these do you prepare for the experiment on the air we breathe out? Choose all the correct answers.', options: ['Plastic bags', 'Limewater', 'Gas detector tubes', 'A candle'], answer: [0, 1, 2] },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'With gas detector tubes we check the amount of oxygen and ___ in the air inside the bags.', options: ['carbon dioxide', 'water vapor', 'limewater'], answer: 0 }
    ] },
  { id: 'R6', lesson: 1, concept: 'The air we breathe in and the air we breathe out',
    explain: 'The air we breathe out has more carbon dioxide than the air we breathe in. The air we breathe out also has oxygen, but less than the air we breathe in, because the body takes in some of the oxygen.',
    variants: [
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'When comparing the air we breathe in and the air we breathe out, which gas increases in the air we breathe out?', options: ['Carbon dioxide', 'Oxygen', 'Neither increases'], answer: 0 },
      { type: 'multi', mode: 'normal', level: 'medium', q: 'Which statements correctly explain breathing? Choose all the correct answers.', options: ['The air we breathe out also has oxygen', 'The air we breathe out has more carbon dioxide than the air we breathe in', 'The air we breathe out has no oxygen at all', 'The air we breathe out has more oxygen than the air we breathe in'], answer: [0, 1] },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'The air we breathe out has no oxygen at all.', answer: 1 },
      { type: 'mc', style: 'odd', mode: 'normal', level: 'medium', q: 'All of these statements describe breathing correctly, except one. Which one is wrong?', options: ['The air we breathe out has no oxygen', 'The air we breathe out also has oxygen', 'The air we breathe out has more carbon dioxide than the air we breathe in'], answer: 0 },
      { type: 'table', mode: 'normal', level: 'hard', q: 'Compare between the air we breathe in and the air we breathe out.', cols: ['The air we breathe in', 'The air we breathe out'], items: ['Has more oxygen', 'Has more carbon dioxide', 'Turns limewater milky white'], answer: [0, 1, 1] },
      { type: 'fix', mode: 'normal', level: 'medium', q: 'The air we breathe out has more oxygen than the air we breathe in.', wrong: 'oxygen', answer: 'carbon dioxide' }
    ] },
  { id: 'R7', lesson: 1, boss: true, concept: 'What is in our breath?',
    explain: 'We breathe to take in some of the oxygen from the air and let out carbon dioxide. So the air we breathe out has more carbon dioxide than the air we breathe in: it turns limewater milky white. The air we breathe out also has oxygen.',
    variants: [
      { type: 'table', mode: 'boss', level: 'hard', q: 'Which gas is it?', cols: ['Oxygen', 'Carbon dioxide'], items: ['We take in some of it from the air', 'We let it out when we breathe', 'It increases in the air we breathe out', 'It turns limewater milky white'], answer: [0, 1, 1, 1] },
      { type: 'mc', style: 'story', mode: 'boss', level: 'hard', q: 'Mariam breathes into a plastic bag, and Youssef fills another bag with room air. They pour a little limewater into each bag and shake them well. In Mariam’s bag the limewater turns milky white. What does this show?', options: ['The air we breathe out has more carbon dioxide', 'The air we breathe out has no oxygen at all', 'The air we breathe out has more oxygen'], answer: 0 },
      { type: 'match', mode: 'boss', level: 'hard', q: 'Match each tool to what it is used for.', left: ['Limewater', 'Gas detector tubes', 'Scissors'], right: ['Turns milky white when there is more carbon dioxide', 'Check the amount of oxygen and carbon dioxide', 'Make a small hole in the bag'], answer: [0, 1, 2] },
      { type: 'multi', mode: 'boss', level: 'hard', q: 'Choose all the correct statements.', options: ['Breathing is taking in oxygen and letting out carbon dioxide', 'The air we breathe out also has oxygen', 'The air we breathe out has more oxygen than the air we breathe in', 'Breathed-out air turns limewater blue'], answer: [0, 1] },
      { type: 'build', style: 'whatif', mode: 'boss', level: 'hard', q: 'What happens to limewater when you blow breathed-out air into it?', parts: ['The limewater', 'turns', 'milky white'], extra: ['freezes into', 'bright blue'] }
    ] },

  /* ---------- 2-2 How Lungs Work ---------- */
  { id: 'L1', lesson: 2, concept: 'The path of the air we breathe in',
    explain: 'The air breathed in from the nose and mouth goes through the windpipe and is sent to the left and right lungs in our chest.',
    variants: [
      { type: 'order', mode: 'normal', level: 'medium', q: 'Put the path of the air we breathe in in order.', items: ['Lungs', 'Nose and mouth', 'Windpipe'], answer: [1, 2, 0] },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'The air breathed in from the nose and mouth goes through the ___ and is sent to the lungs.', options: ['windpipe', 'food pipe', 'stomach'], answer: 0 },
      { type: 'tap', diagram: 'airways', mode: 'normal', level: 'medium', q: 'The air we breathe in goes through the windpipe. Tap the windpipe.', answer: 'windpipe' },
      { type: 'tap', diagram: 'airways', mode: 'timed', seconds: 15, level: 'easy', q: 'The air we breathe in is sent to the lungs. Tap the lungs.', answer: 'lungs' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Where is the air breathed in from the nose and mouth sent to?', options: ['To the left and right lungs in our chest', 'To the stomach', 'To the bones'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'We have a left lung and a right lung in our chest.', answer: 0 }
    ] },
  { id: 'L2', lesson: 2, concept: 'The lungs: the place for gas exchange',
    explain: 'The lungs are the organ in our chest that exchanges oxygen and carbon dioxide. They are the place for gas exchange.',
    variants: [
      { type: 'term', mode: 'normal', level: 'medium', q: 'The organ in our chest that exchanges oxygen and carbon dioxide.', answer: 'Lungs' },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'What is the organ in our chest called that exchanges oxygen and carbon dioxide?', options: ['Lungs', 'Heart', 'Stomach'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'The place for gas exchange in our body is the ___.', options: ['lungs', 'windpipe', 'nose'], answer: 0 },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'Oxygen and carbon dioxide are exchanged in the windpipe.', answer: 1 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which two gases are exchanged in the lungs?', options: ['Oxygen and carbon dioxide', 'Nitrogen and oxygen', 'Nitrogen and carbon dioxide'], answer: 0 }
    ] },
  { id: 'L3', lesson: 2, concept: 'Gas exchange',
    explain: 'Through the blood vessels around the lungs, oxygen in the air is taken into the blood, and carbon dioxide in the blood is let out into the air.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which statement correctly explains gas exchange in the lungs?', options: ['It takes in oxygen from the air into the blood', 'It lets out oxygen from the blood into the air', 'It takes in carbon dioxide from the air into the blood'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Through the ___ around the lungs, oxygen in the air is taken into the blood.', options: ['blood vessels', 'bones', 'muscles'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'In the lungs, ___ in the blood is let out into the air.', options: ['carbon dioxide', 'oxygen', 'limewater'], answer: 0 },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'What gas does the blood take in from the air inside the lungs?', options: ['Oxygen', 'Carbon dioxide', 'Nitrogen'], answer: 0 },
      { type: 'table', mode: 'normal', level: 'hard', q: 'Which way does each gas move in the lungs?', cols: ['From the air into the blood', 'From the blood into the air'], items: ['Oxygen', 'Carbon dioxide'], answer: [0, 1] },
      { type: 'tap', diagram: 'gasExchange', mode: 'normal', level: 'hard', q: 'This picture shows gas exchange in the lungs. Tap the arrow that shows oxygen.', answer: 'toBlood' },
      { type: 'tap', diagram: 'gasExchange', mode: 'normal', level: 'hard', q: 'This picture shows gas exchange in the lungs. Tap the arrow that shows carbon dioxide.', answer: 'toAir' },
      { type: 'build', style: 'whatif', mode: 'normal', level: 'hard', q: 'What happens in gas exchange in the lungs?', parts: ['Oxygen in the air is taken into the blood,', 'and carbon dioxide in the blood', 'is let out into the air'], extra: ['and nitrogen in the bones', 'is turned into limewater'] }
    ] },
  { id: 'L4', lesson: 2, concept: 'The blood carries oxygen to the whole body',
    explain: 'The oxygen taken into the blood is carried to the whole body by the work of the heart.',
    variants: [
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'What carries the oxygen taken in by the lungs to the whole body?', options: ['Blood', 'Muscles', 'Bones'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'The oxygen taken into the blood is carried to the whole body by the work of the ___.', options: ['heart', 'stomach', 'windpipe'], answer: 0 },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'The oxygen taken into the blood stays in the lungs.', answer: 1 },
      { type: 'build', style: 'function', mode: 'normal', level: 'hard', q: 'What does the blood do with the oxygen taken in by the lungs?', parts: ['The blood carries', 'the oxygen', 'to the whole body'], extra: ['the limewater', 'to the lungs only'] },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Imagine the oxygen taken in by your lungs. How is it carried to your fingertips and toes?', options: ['It travels through the blood', 'It travels through the bones', 'It stays in the lungs'], answer: 0 }
    ] },
  { id: 'L5', lesson: 2, concept: 'The path of the air we breathe out',
    explain: 'Air with a lot of carbon dioxide goes through the windpipe and is breathed out from the nose and mouth.',
    variants: [
      { type: 'order', mode: 'normal', level: 'medium', q: 'Put the path of the air we breathe out in order.', items: ['Windpipe', 'Nose and mouth', 'Lungs'], answer: [2, 0, 1] },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which air goes through the windpipe and is breathed out from the nose and mouth?', options: ['Air with a lot of carbon dioxide', 'Air with no carbon dioxide', 'Air with more oxygen than before'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'The air we breathe out goes through the windpipe.', answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Air with a lot of carbon dioxide is breathed out from the nose and ___.', options: ['mouth', 'ears', 'eyes'], answer: 0 },
      { type: 'tap', diagram: 'airways', mode: 'normal', level: 'medium', q: 'Air is breathed in and breathed out from here. Tap the nose and mouth.', answer: 'nose' }
    ] },
  { id: 'L6', lesson: 2, concept: 'The alveoli',
    explain: 'In the zoomed-in picture of the lungs we see the alveoli. Gas exchange happens through the blood vessels around the alveoli: this is where oxygen and carbon dioxide are exchanged.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Where inside the lungs are oxygen and carbon dioxide exchanged?', options: ['In the alveoli', 'In the windpipe', 'In the nose'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Gas exchange happens through the ___ around the alveoli.', options: ['blood vessels', 'bones', 'muscles'], answer: 0 },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'Oxygen and carbon dioxide are exchanged in the alveoli of the lungs.', answer: 0 }
    ] },
  { id: 'L7', lesson: 2, concept: 'How fish breathe',
    explain: 'Other animals breathe too. Fish let out carbon dioxide from their gills.',
    variants: [
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'From where do fish let out carbon dioxide?', options: ['From their gills', 'From their lungs', 'From their fins'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Fish let out carbon dioxide from their ___.', options: ['gills', 'scales', 'tails'], answer: 0 },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'Fish let out carbon dioxide from their gills.', answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which gas do fish let out from their gills?', options: ['Carbon dioxide', 'Oxygen', 'Nitrogen'], answer: 0 }
    ] },
  { id: 'L8', lesson: 2, boss: true, concept: 'The journey of oxygen',
    explain: 'The air we breathe in goes from the nose and mouth through the windpipe to the lungs. Through the blood vessels around the lungs, oxygen is taken into the blood and carbon dioxide is let out into the air. The oxygen is carried to the whole body by the work of the heart, and the air with a lot of carbon dioxide is breathed out.',
    variants: [
      { type: 'order', mode: 'boss', level: 'hard', q: 'Put the journey of oxygen in order.', items: ['It is taken into the blood through the blood vessels around the lungs', 'It enters from the nose and mouth', 'It is carried to the whole body by the work of the heart', 'It goes through the windpipe to the lungs'], answer: [1, 3, 0, 2] },
      { type: 'match', mode: 'boss', level: 'hard', q: 'Match each part to what it does.', left: ['Windpipe', 'Lungs', 'Blood'], right: ['The air goes through it to the lungs', 'The place for gas exchange', 'Carries oxygen to the whole body'], answer: [0, 1, 2] },
      { type: 'mc', style: 'story', mode: 'boss', level: 'hard', q: 'Ali runs fast in the playground and breathes quickly. The oxygen he takes in must reach the muscles of his legs. What carries it there?', options: ['The blood, by the work of the heart', 'The windpipe', 'The bones of his legs'], answer: 0 },
      { type: 'table', mode: 'boss', level: 'hard', q: 'Compare between oxygen and carbon dioxide in the lungs.', cols: ['Oxygen', 'Carbon dioxide'], items: ['Is taken from the air into the blood', 'Is let out from the blood into the air', 'Is carried to the whole body', 'Increases in the air we breathe out'], answer: [0, 1, 0, 1] },
      { type: 'fix', mode: 'boss', level: 'hard', q: 'The oxygen taken into the blood is carried to the whole body by the work of the lungs.', wrong: 'lungs', answer: 'heart' }
    ] }
];
