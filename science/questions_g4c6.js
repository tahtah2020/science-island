/* Grade 4 Science (Languages) · Chapter 6 The Force of Wind
   10 core ideas from the school book 2026/2027, both lessons (6-1 and 6-2): Point!, Activity, Try, Exercise (pages 78-83).
   Source: the owner's PDF on Google Drive (Motafawek/g4/science/unit 6-en.pdf), 1 Nov 2026. No pictures from the owner: every picture is drawn in code.
   Ideas: Y = wind-powered cars and the strength of the wind (6-1), Z = sail size (6-2).
   The book's words: force, push, pull, stationary, wind-powered car, sail, body, axle, tires, fan, weak, strong, start line, tape measure,
   distance traveled, area that catches the wind.
   Review notes: the record tables of the two activities are empty in the English text; the Arabic book prints example distances
   (they are kept in the Arabic explanations only). "A car with no sail" appears only as a wrong option of the book's exercise.
   Tap pictures (drawn in g4_art.js): windCars -> weakWind | strongWind ; sailSizes -> sailNone | sailSmall | sailLarge ; carParts -> carBody | wheels | sail
*/
(function () {
window.CHAPTER = { id: 'g4c6', title: 'The Force of Wind', grade: 'Grade 4', track: 'Languages' };

window.IDEAS = [
  /* ---------- 6-1 Wind-Powered Cars ---------- */
  { id: 'Y1', lesson: 1, concept: 'What is a force?',
    explain: 'A force is a push or pull that can cause a stationary object to move, stop a moving object, or change the direction of its motion. The greater the force, the greater its effect on the object.',
    variants: [
      { type: 'term', mode: 'normal', level: 'medium', q: 'A push or pull that can move a stationary object, stop a moving object, or change the direction of its motion.', answer: 'Force', choices: ['Sail', 'Vibration', 'Reflection'] },
      { type: 'multi', mode: 'normal', level: 'medium', q: 'Choose all the things a force can do.', options: ['Cause a stationary object to move', 'Stop a moving object', 'Change the direction of a moving object', 'Change the color of an object'], answer: [0, 1, 2] },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'The greater the force, the ___ its effect on the object.', options: ['greater', 'smaller', 'slower'], answer: 0 },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'A force is a…', options: ['Push or pull', 'Kind of sound', 'Kind of light'], answer: 0 }
    ] },
  { id: 'Y2', lesson: 1, concept: 'Wind has the power to move things',
    explain: 'Wind has the power to move things, and how things move changes depending on how strong the wind is. We cannot see the wind, but it can make power when it hits things.',
    variants: [
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'Wind has the power to move things.', answer: 0 },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'We cannot see the wind, so it has no power.', answer: 1, explain: 'We cannot see the wind, but it can make power when it hits things.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What changes how a wind-powered car moves?', options: ['How strong the wind is', 'The color of the car', 'The time of the day'], answer: 0 }
    ] },
  { id: 'Y3', lesson: 1, concept: 'Strong wind, long distance',
    explain: 'Weak wind: since the power to move things is small, the distance the car travels is short. Strong wind: since the power to move things is big, the pushing force on the car becomes stronger, and the distance it travels is long.',
    variants: [
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'The distance the car travels is ___ when it is hit by a strong wind than when it is hit by a weak wind.', options: ['longer', 'shorter', 'the same'], answer: 0 },
      { type: 'tap', diagram: 'windCars', mode: 'normal', level: 'medium', q: 'Tap the car that was blown by the strong wind.', answer: 'strongWind' },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'For a wind-powered car, the distance it travels does not change even if you change the strength of the wind.', answer: 1, explain: 'Weak wind: a short distance. Strong wind: a long distance.' },
      { type: 'build', style: 'why', mode: 'normal', level: 'hard', q: 'A car hit by a strong wind travels a long distance.', parts: ['Because a strong wind has a big power', 'to move things,', 'so the pushing force on the car becomes stronger'], extra: ['a small power', 'so the car becomes heavier'] }
    ] },
  { id: 'Y4', lesson: 1, concept: 'How to make a wind-powered car',
    explain: '1) Make the body: use cardboard or a food tray. 2) Make the wheels: put an axle through the body and attach tires (you can make tires from plastic bottle caps with a hole in the center). 3) Put up a sail: make it out of thick paper and attach it to the body with tape.',
    variants: [
      { type: 'order', mode: 'normal', level: 'medium', q: 'Put the steps of making a wind-powered car in order.', items: ['Make the wheels', 'Make the body', 'Put up a sail'], answer: [1, 0, 2] },
      { type: 'tap', diagram: 'carParts', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap the part of the car that catches the wind.', answer: 'sail' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What can we use to make the tires of the car?', options: ['Plastic bottle caps with a hole in the center', 'Mirrors', 'Paper cups'], answer: 0 },
      { type: 'match', mode: 'normal', level: 'medium', q: 'Match each part of the car with what we make it from.', left: ['Body', 'Sail'], right: ['Cardboard or a food tray', 'Thick paper'], answer: [0, 1] }
    ] },
  { id: 'Y5', lesson: 1, concept: 'The wind experiment',
    explain: 'Activity: 1) Set the fan to “Weak” and measure the distance from the start line to where the car stops using a tape measure. 2) Set the fan to “Strong”, start from the same place, and measure the distance. 3) Record the differences in how it starts moving and its speed.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What do we use to measure the distance the car travels?', options: ['A tape measure', 'A thermometer', 'A compass'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'When we change the fan to “Strong”, where does the car start?', options: ['From the same place', 'From a closer place', 'From anywhere'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'We measure the distance from the start line to where the car stops.', answer: 0 }
    ] },
  { id: 'Y6', lesson: 1, boss: true, concept: 'The power of wind',
    explain: 'When the wind becomes stronger, its power to move things becomes bigger and the car travels farther. We cannot see the wind, but it makes power when it hits things.',
    variants: [
      { type: 'multi', mode: 'boss', level: 'hard', q: 'Choose all the correct answers about the power of wind.', options: ['When the wind power becomes stronger, its power to move things also becomes bigger', 'We cannot see the wind, but it can make power when it hits things', 'No matter how strong the wind is, the distance the car travels is always the same'], answer: [0, 1] },
      { type: 'table', mode: 'boss', level: 'hard', q: 'Weak wind or strong wind?', cols: ['Weak wind', 'Strong wind'], items: ['A small power to move things', 'The car travels a short distance', 'A stronger pushing force on the car', 'The car travels a long distance'], answer: [0, 0, 1, 1] },
      { type: 'mc', style: 'story', mode: 'boss', level: 'hard', q: 'Karim’s car stopped close to the start line. He wants it to travel farther with the same car. What should he change?', options: ['Set the fan to “Strong”', 'Set the fan to “Weak”', 'Start from a different place each time'], answer: 0 }
    ] },

  /* ---------- 6-2 Sail Size ---------- */
  { id: 'Z1', lesson: 2, concept: 'A bigger sail gets more power',
    explain: 'When the wind strength is the same, the bigger the place that catches the wind (the sail), the bigger the power it gets from the wind.',
    variants: [
      { type: 'fill', mode: 'normal', level: 'medium', q: 'If you make the sail bigger, the power to catch the wind becomes ___.', options: ['bigger', 'smaller', 'zero'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which is the correct idea to catch more wind power?', options: ['Make the sail that catches the wind bigger', 'Make the sail smaller', 'Take the sail off the car'], answer: 0 },
      { type: 'build', style: 'sentence', mode: 'normal', level: 'hard', q: 'Make the correct sentence.', parts: ['When the wind strength is the same,', 'the bigger the sail,', 'the bigger the power it gets from the wind'], extra: ['the smaller the sail,', 'the weaker the fan'] }
    ] },
  { id: 'Z2', lesson: 2, concept: 'Small sail, large sail',
    explain: 'Small sail: the area catching the wind is small, so the power it gets from the wind is small and the distance the car travels is short. Large sail: the area catching the wind is big, so the power is big and the distance is long.',
    variants: [
      { type: 'tap', diagram: 'sailSizes', mode: 'normal', level: 'medium', q: 'The wind strength is the same. Tap the car that can travel the farthest.', answer: 'sailLarge' },
      { type: 'table', mode: 'normal', level: 'medium', q: 'Small sail or large sail?', cols: ['Small sail', 'Large sail'], items: ['A small area catches the wind', 'The car travels a short distance', 'A big area catches the wind', 'The car travels a long distance'], answer: [0, 0, 1, 1] },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Small sail: the area catching the wind is small, so the distance the car travels becomes ___.', options: ['short', 'long', 'endless'], answer: 0 },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'When the wind strength is the same, which car can travel the farthest?', options: ['A car with a large sail', 'A car with a small sail', 'A car with no sail'], answer: 0 }
    ] },
  { id: 'Z3', lesson: 2, concept: 'Changing only the sail',
    explain: 'Activity: using the same car and fan, change only the size of the sail. 1) Attach a small sail, blow wind from the fan and put a piece of tape as a mark where the car stops. 2) Change to a large sail; keep the wind strength the same and start from the same place. 3) Compare the distances.',
    variants: [
      { type: 'multi', mode: 'normal', level: 'medium', q: 'In the sail experiment, choose all the things we keep the same.', options: ['The car', 'The wind strength', 'The start place', 'The size of the sail'], answer: [0, 1, 2] },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'How do we mark where the car stops?', options: ['With a piece of tape', 'With a mirror', 'We do not mark it'], answer: 0 },
      { type: 'order', mode: 'normal', level: 'medium', q: 'Put the steps of the sail experiment in order.', items: ['Change to a large sail', 'Try with a small sail and mark where the car stops', 'Compare the distances'], answer: [1, 0, 2] }
    ] },
  { id: 'Z4', lesson: 2, boss: true, concept: 'Area and power',
    explain: 'When the wind strength is the same, the bigger the area that catches the wind, the bigger the power from the wind and the longer the distance the car travels.',
    variants: [
      { type: 'mc', style: 'story', mode: 'boss', level: 'hard', q: 'Nour and Yara use the same fan and start line. Nour’s car has a small sail and Yara’s has a large sail. What happens?', options: ['Yara’s car travels farther: its sail catches more wind', 'Nour’s car travels farther: small sails are faster', 'Both cars stop at the same place'], answer: 0 },
      { type: 'build', style: 'why', mode: 'boss', level: 'hard', q: 'A car with a large sail travels farther than a car with a small sail in the same wind.', parts: ['Because the area catching the wind', 'is big,', 'so the power it gets from the wind is big'], extra: ['is small,', 'so the wind stops'] },
      { type: 'table', mode: 'boss', level: 'hard', q: 'Does the car go farther or shorter?', cols: ['Farther', 'Shorter'], items: ['A stronger wind', 'A bigger sail', 'A weaker wind', 'A smaller sail'], answer: [0, 0, 1, 1] }
    ] }
];
})();
