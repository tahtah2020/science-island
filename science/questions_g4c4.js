/* Grade 4 Science (Languages) · Chapter 4 Properties of Light
   26 core ideas from the school book 2026/2027, all five lessons (4-1 to 4-5): Point!, Activity, Try, Exercise (pages 50-65),
   plus 3 bonus ideas from "Let's Expand" (the compass, page 65) and the Column "Light and Sound" (pages 66-67).
   Source: the owner's PDF on Google Drive (Motafawek/g4/science/unit 4-en.pdf), 1 Nov 2026. No pictures from the owner: every picture is drawn in code.
   Ideas: I = how sunlight travels (4-1), J = gathering light (4-2), K = shadows and the sun 1 (4-3), M = shadows and the sun 2 (4-4),
   N = sun and shade (4-5); bonus: M6 (compass), N6-N7 (the Column).
   The book's words: light source, reflection, travels straight, magnifying glass, brightness, warmth, shadow, opposite side,
   sundial, East, South, West, thermometer, radiation thermometer, damp.
   Review notes: "When the sun moves from East to South, the shadow moves from West to North" (M5) is the book's own exercise and follows from
   "the shadow is on the opposite side of the sun". Exercise options the text does not explain (black paper absorbs better, a shadow under clouds)
   are not used.
   Tap pictures (drawn in g4_art.js): lightSources -> lamp | mirror | ball ; mirrorRelay -> sun | mirror | target ; magnifySpots -> wide | small ;
                                      shadowSide -> opposite | same ; shadowTimes -> morning | noon | evening ; sunShade -> sunny | shady
*/
(function () {
window.CHAPTER = { id: 'g4c4', title: 'Properties of Light', grade: 'Grade 4', track: 'Languages' };

window.IDEAS = [
  /* ---------- 4-1 How Sunlight Travels ---------- */
  { id: 'I1', lesson: 1, concept: 'Light sources',
    explain: 'Objects that emit their own light, such as the Sun and lamps, are called light sources.',
    variants: [
      { type: 'term', mode: 'normal', level: 'medium', q: 'Objects that emit their own light, such as the Sun and lamps.', answer: 'Light sources', choices: ['Mirrors', 'Shadows', 'Sundials'] },
      { type: 'tap', diagram: 'lightSources', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap the object that emits its own light.', answer: 'lamp' },
      { type: 'multi', mode: 'normal', level: 'medium', q: 'Choose all the light sources.', options: ['The Sun', 'A lamp', 'A mirror'], answer: [0, 1] },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'The Sun is a light source.', answer: 0 }
    ] },
  { id: 'I2', lesson: 1, concept: 'Reflection',
    explain: 'Reflection: when light hits an object (like a mirror) and bounces back.',
    variants: [
      { type: 'term', mode: 'normal', level: 'medium', q: 'When light hits an object (like a mirror) and bounces back.', answer: 'Reflection', choices: ['Shadow', 'Light source', 'Gathering light'] },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'What do we call it when light hits an object and bounces back?', options: ['Reflection', 'A shadow', 'A sundial'], answer: 0 },
      { type: 'tap', diagram: 'mirrorRelay', mode: 'normal', level: 'medium', q: 'Tap the object that bounces the sunlight back.', answer: 'mirror' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'When light hits a mirror and bounces back, it is called ___.', options: ['reflection', 'a shadow', 'warmth'], answer: 0 }
    ] },
  { id: 'I3', lesson: 1, concept: 'Light travels straight',
    explain: 'Sunlight travels straight as long as nothing blocks it. Light reflected by a mirror also travels straight.',
    variants: [
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Sunlight reflected by a mirror travels ___.', options: ['straight', 'in a curve', 'in a circle'], answer: 0 },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'When sunlight bounces off a mirror, it starts to travel in a curve.', answer: 1, explain: 'Light reflected by a mirror also travels straight.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'How does sunlight travel?', options: ['Straight, as long as nothing blocks it', 'In a curve around objects', 'Only at night'], answer: 0 },
      { type: 'build', style: 'sentence', mode: 'normal', level: 'hard', q: 'Make the correct sentence about how sunlight travels.', parts: ['Sunlight travels straight', 'as long as', 'nothing blocks it'], extra: ['in a curve', 'a mirror bends it'] }
    ] },
  { id: 'I4', lesson: 1, concept: 'A light relay with mirrors',
    explain: 'Activity: bounce the sunlight with a mirror to hit a target in the shade. Sprinkle some powder or spray some water mist where the light passes: you will see the path of light faintly. Use a second and third mirror to bounce the light even further.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'How can we see the path of the light faintly?', options: ['Sprinkle some powder or spray some water mist where the light passes', 'Close our eyes', 'Cover the mirror with paper'], answer: 0 },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'If you use two mirrors, you can send the reflected light to a different direction.', answer: 0 },
      { type: 'tap', diagram: 'mirrorRelay', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap the target in the shade that the light reaches.', answer: 'target' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What do we use to bounce the light even further?', options: ['A second and third mirror', 'A magnifying glass', 'A thermometer'], answer: 0 }
    ] },
  { id: 'I5', lesson: 1, boss: true, concept: 'Mirrors and safety',
    explain: 'Caution when using mirrors: if sunlight gets in your eyes, it will hurt them. Do not shine the reflected sunlight at people’s faces or classroom windows.',
    variants: [
      { type: 'multi', mode: 'boss', level: 'hard', q: 'Choose all the correct answers explaining how sunlight travels.', options: ['Sunlight always has the property of traveling straight', 'If you use two mirrors, you can send the reflected light to a different direction', 'When sunlight bounces off a mirror, it starts to travel in a curve'], answer: [0, 1] },
      { type: 'mc', style: 'odd', mode: 'boss', level: 'hard', q: 'Choose the INCORRECT way to use a mirror.', options: ['Shine the reflected sunlight at a friend’s face', 'Bounce the sunlight to a target in the shade', 'Use a second mirror to send the light further'], answer: 0 },
      { type: 'match', mode: 'boss', level: 'hard', q: 'Match each word to its meaning.', left: ['Light source', 'Reflection'], right: ['An object that emits its own light', 'Light hits an object and bounces back'], answer: [0, 1] },
      { type: 'mc', style: 'story', mode: 'boss', level: 'hard', q: 'Omar wants to send sunlight into a dark room behind a wall. What should he do?', options: ['Bounce the light with one mirror, then with a second mirror into the room', 'Wait for the light to bend around the wall', 'Point the mirror at the sky'], answer: 0 }
    ] },

  /* ---------- 4-2 Gathering Light ---------- */
  { id: 'J1', lesson: 2, concept: 'A magnifying glass gathers sunlight',
    explain: 'Using a magnifying glass, you can gather sunlight from a wide area into a single point.',
    variants: [
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'What can we use to gather sunlight into a single point?', options: ['A magnifying glass', 'A mirror', 'A thermometer'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Using a magnifying glass, you can gather sunlight from a wide area into a single ___.', options: ['point', 'shadow', 'mirror'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'A magnifying glass can gather sunlight from a wide area.', answer: 0 }
    ] },
  { id: 'J2', lesson: 2, concept: 'Gathered light is brighter',
    explain: 'Brightness: when you gather sunlight into one point, that part becomes brighter.',
    variants: [
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'When you gather sunlight into one point, that part becomes ___.', options: ['brighter', 'darker', 'colder'], answer: 0 },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'When you gather sunlight into one point, that part becomes darker.', answer: 1, explain: 'That part becomes brighter.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What happens to the brightness of the spot where sunlight is gathered?', options: ['It becomes brighter', 'It becomes darker', 'It does not change'], answer: 0 }
    ] },
  { id: 'J3', lesson: 2, concept: 'The smaller the point, the hotter',
    explain: 'Warmth: the smaller you make the point of light, the higher the temperature becomes. The smaller you make the gathered sunlight with a magnifying glass, the brighter and hotter it becomes. After a while, smoke comes out from the spot and the paper burns.',
    variants: [
      { type: 'tap', diagram: 'magnifySpots', mode: 'normal', level: 'medium', q: 'Tap the black paper that will get hotter.', answer: 'small' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which is the correct way to burn paper quickly?', options: ['Move the magnifying glass to make the point of light as small as possible', 'Move the magnifying glass over a wide area and hit a wide area with light', 'Put the magnifying glass close to your eye and look at the sun'], answer: 0 },
      { type: 'build', style: 'sentence', mode: 'normal', level: 'hard', q: 'Make the correct sentence about gathering light.', parts: ['The smaller the point of light,', 'the higher', 'the temperature becomes'], extra: ['the lower', 'the darker the paper'] },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'When you gather sunlight to one point, that part becomes brighter and the temperature becomes ___.', options: ['higher', 'lower', 'the same'], answer: 0 }
    ] },
  { id: 'J4', lesson: 2, concept: 'The paper burns',
    explain: 'Activity: use a magnifying glass to gather sunlight on black paper. Make the light point small, keep it still and wait. After a while, smoke will come out from the spot where the light hits, and the paper will burn.',
    variants: [
      { type: 'order', mode: 'normal', level: 'medium', q: 'Put the steps of the experiment in order.', items: ['Wait without moving', 'Make the point of light as small and clear as possible', 'Smoke comes out and the paper burns'], answer: [1, 0, 2] },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What do we see after we keep the light at its smallest point for a while?', options: ['Smoke comes out and the paper burns', 'The paper becomes wet', 'The paper becomes colder'], answer: 0 },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'What color is the paper we use in the experiment?', options: ['Black', 'Shiny silver', 'Clear'], answer: 0 }
    ] },
  { id: 'J5', lesson: 2, concept: 'Safety with a magnifying glass',
    explain: 'Things you must not do: do not look directly at the Sun with a magnifying glass, it will hurt your eyes. Do not gather sunlight on people’s bodies, clothes or living things, it may burn them or cause a fire. Do not look at the gathered point of light for a long time. When the experiment is over, put the black paper in a bucket of water.',
    variants: [
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Do not look directly at the ___ with a magnifying glass.', options: ['Sun', 'paper', 'ground'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which is correct about safety in the sunlight experiment?', options: ['After the experiment, put the warmed paper in water', 'Put the warmed paper immediately into your pocket', 'Shine the gathered light onto a friend’s clothes'], answer: 0 },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'The gathered point of light is bright, but it is okay to keep looking at it.', answer: 1, explain: 'Do not look at the gathered point of light for a long time. It will hurt your eyes.' },
      { type: 'build', style: 'why', mode: 'normal', level: 'hard', q: 'Do not gather sunlight on people’s bodies or clothes.', parts: ['Because it may burn them', 'or cause', 'a fire'], extra: ['make them wet', 'a shadow'] }
    ] },
  { id: 'J6', lesson: 2, boss: true, concept: 'Gathering light: the whole story',
    explain: 'The smaller you make the gathered sunlight with a magnifying glass, the brighter and hotter it becomes. Never look at the Sun through it, and put the paper in water at the end.',
    variants: [
      { type: 'multi', mode: 'boss', level: 'hard', q: 'Choose all the correct answers about the experiment of gathering sunlight.', options: ['The smaller you gather the light, the higher the temperature becomes', 'The gathered spot becomes brighter', 'The gathered point of light is bright, but it is okay to keep looking at it directly'], answer: [0, 1] },
      { type: 'mc', style: 'story', mode: 'boss', level: 'hard', q: 'Mona holds a magnifying glass over black paper, but the spot of light is big and the paper does not burn. What should she do?', options: ['Move the glass closer or further to make the spot as small as possible, then wait still', 'Look at the Sun through the glass', 'Move the glass quickly all over the paper'], answer: 0 },
      { type: 'table', mode: 'boss', level: 'hard', q: 'Is it allowed or not allowed with a magnifying glass?', cols: ['Allowed', 'Not allowed'], items: ['Gather sunlight on black paper', 'Put the paper in water at the end', 'Look at the Sun through it', 'Gather sunlight on a friend’s clothes'], answer: [0, 0, 1, 1] }
    ] },

  /* ---------- 4-3 Shadows and the Sun (1) ---------- */
  { id: 'K1', lesson: 3, concept: 'Shadows are on the opposite side of the sun',
    explain: 'Direction of shadows: shadows are made in the opposite side of the sun. When the sun is on the right, the shadow is always on the left.',
    variants: [
      { type: 'tap', diagram: 'shadowSide', mode: 'normal', level: 'medium', q: 'Where will the shadow of the stick be? Tap it.', answer: 'opposite' },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'The direction of the shadow is ___ to the direction of the sun.', options: ['opposite', 'the same', 'next'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'The sun is on your right. Where is your shadow?', options: ['On the left', 'On the right', 'Above you'], answer: 0 },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'The shadow is made in the same direction as the sun.', answer: 1, explain: 'Shadows are made in the opposite side of the sun.' }
    ] },
  { id: 'K2', lesson: 3, concept: 'Why shadows are made',
    explain: 'Reason for shadows: sunlight travels straight. When it hits an object, it is blocked, creating a place behind it where light does not reach. This is a shadow.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Why are shadows made?', options: ['Because sunlight travels straight and is blocked when it hits an object', 'Because sunlight passes through objects', 'Because the sun draws the shadow on the ground'], answer: 0 },
      { type: 'term', mode: 'normal', level: 'medium', q: 'The place behind an object where sunlight does not reach.', answer: 'Shadow', choices: ['Reflection', 'Light source', 'Sundial'] },
      { type: 'build', style: 'why', mode: 'normal', level: 'hard', q: 'A shadow is made behind an object.', parts: ['Because sunlight travels straight', 'and the object blocks it,', 'so light does not reach behind it'], extra: ['and passes through it', 'so the object makes light'] },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Sunlight travels ___, so when it hits an object, it is blocked and a dark place is made behind it.', options: ['straight', 'in a curve', 'around corners'], answer: 0 }
    ] },
  { id: 'K3', lesson: 3, concept: 'Sun, object and shadow in a line',
    explain: '“Sun - Object - Shadow” always line up in a straight line.',
    variants: [
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'When a shadow is made, the sun, the object and the shadow are in a straight line.', answer: 0 },
      { type: 'order', mode: 'normal', level: 'medium', q: 'Put them in the order they line up.', items: ['Object', 'Sun', 'Shadow'], answer: [1, 0, 2] },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'How do the sun, the object and its shadow always line up?', options: ['In a straight line', 'In a circle', 'In a triangle'], answer: 0 }
    ] },
  { id: 'K4', lesson: 3, concept: 'Checking the shadow’s direction',
    explain: 'Activity: go outside. 1) Check which direction the sun is in (do not look directly at the sun: use special sun-viewing glasses). 2) Observe which direction your shadow or a stick’s shadow is stretching. 3) Record that the direction of the sun and the shadow are opposite.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'How do we check the sun’s position safely?', options: ['Use special sun-viewing glasses', 'Look directly at the sun', 'Look at the sun through a magnifying glass'], answer: 0 },
      { type: 'order', mode: 'normal', level: 'medium', q: 'Put the steps of the activity in order.', items: ['Look at the shadow', 'Check the sun’s position', 'Record that the sun and the shadow are in opposite directions'], answer: [1, 0, 2] },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'It is safe to look directly at the sun.', answer: 1, explain: 'Do not look directly at the sun. Use special sun-viewing glasses.' }
    ] },
  { id: 'K5', lesson: 3, boss: true, concept: 'Rules of shadows',
    explain: 'Shadows are made in the opposite side of the sun, because sunlight travels straight and is blocked by the object. Sun, object and shadow are in a straight line.',
    variants: [
      { type: 'mc', style: 'story', mode: 'boss', level: 'hard', q: 'In the afternoon, Ali sees his shadow stretching in front of him. Where is the sun?', options: ['Behind him', 'In front of him', 'Under his feet'], answer: 0 },
      { type: 'multi', mode: 'boss', level: 'hard', q: 'Choose all the correct sentences about shadows.', options: ['The sun, the object and the shadow are in a straight line', 'The shadow is on the opposite side of the sun', 'The shadow is made in the same direction as the sun'], answer: [0, 1] },
      { type: 'match', mode: 'boss', level: 'hard', q: 'Match each sentence to its ending.', left: ['Sunlight travels', 'An object blocks the light, so behind it', 'The shadow is on the'], right: ['straight', 'a shadow is made', 'opposite side of the sun'], answer: [0, 1, 2] }
    ] },

  /* ---------- 4-4 Shadows and the Sun (2) ---------- */
  { id: 'M1', lesson: 4, concept: 'The sun moves East, South, West',
    explain: 'The sun rises from the East, passes the South, and sets in the West. When the sun moves, the direction of the shadow (which is on the opposite side) also changes.',
    variants: [
      { type: 'order', mode: 'normal', level: 'medium', q: 'Put the sun’s path across the sky in order.', items: ['It passes the South', 'It rises from the East', 'It sets in the West'], answer: [1, 0, 2] },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'Where does the sun rise from?', options: ['The East', 'The West', 'The South'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'When the sun moves, the shadow is made on the opposite side of the sun, so the position of the shadow also ___.', options: ['changes', 'does not change', 'disappears'], answer: 0 },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'The direction of the shadow stays the same all day even if the sun moves.', answer: 1, explain: 'When the sun moves, the direction of the shadow also changes.' }
    ] },
  { id: 'M2', lesson: 4, concept: 'The sundial',
    explain: 'Sundial: a tool to know the time by using the rule that shadows move in a fixed way. The movement of the sun is fixed, so if you look at the position of the shadow, you can tell roughly what time it is.',
    variants: [
      { type: 'term', mode: 'normal', level: 'medium', q: 'A tool to know the time by using the rule that shadows move in a fixed way.', answer: 'Sundial', choices: ['Compass', 'Thermometer', 'Magnifying glass'] },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'What is the name of the tool that tells time using the change in shadow position?', options: ['A sundial', 'A compass', 'A mirror'], answer: 0 },
      { type: 'build', style: 'why', mode: 'normal', level: 'hard', q: 'We can tell roughly what time it is from the position of a shadow.', parts: ['Because the movement of the sun', 'is fixed,', 'so shadows move in a fixed way'], extra: ['is random,', 'so shadows never move'] }
    ] },
  { id: 'M3', lesson: 4, concept: 'Long and short shadows',
    explain: 'The length of the shadow changes depending on the height of the sun. When the sun is high (around noon), the shadow becomes short. When the sun is low (morning or evening), the shadow becomes long.',
    variants: [
      { type: 'tap', diagram: 'shadowTimes', mode: 'normal', level: 'medium', q: 'Tap the stick’s shadow around noon, when the sun is highest.', answer: 'noon' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'When is the shadow the shortest in a day?', options: ['Around noon when the sun is highest', 'In the morning when the sun rises', 'In the evening when the sun sets'], answer: 0 },
      { type: 'table', mode: 'normal', level: 'medium', q: 'Is the shadow long or short?', cols: ['Long shadow', 'Short shadow'], items: ['In the morning', 'Around noon', 'In the evening'], answer: [0, 1, 0] },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'The lower the sun is, the ___ the shadow becomes.', options: ['longer', 'shorter', 'brighter'], answer: 0 }
    ] },
  { id: 'M4', lesson: 4, concept: 'Recording the movement of shadows',
    explain: 'Activity: in the morning, put a mark at the tip of the stick’s shadow on the ground. Every hour, put a mark at the tip of the shadow and write down the time. If you connect the marked points with a line, you can see how the shadow moved.',
    variants: [
      { type: 'order', mode: 'normal', level: 'medium', q: 'Put the steps of recording a shadow in order.', items: ['Every hour, mark the tip of the shadow and write the time', 'In the morning, mark the tip of the stick’s shadow', 'Connect the marked points with a line'], answer: [1, 0, 2] },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Where do we put the mark each time?', options: ['At the tip of the stick’s shadow', 'At the top of the stick', 'Next to the sun'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'We observe the shadow of the stick in the same place throughout the day.', answer: 0 }
    ] },
  { id: 'M5', lesson: 4, boss: true, concept: 'Shadows through the day',
    explain: 'The sun rises from the East, passes the South and sets in the West; the shadow is always on the opposite side, so it moves too. The lower the sun, the longer the shadow.',
    variants: [
      { type: 'multi', mode: 'boss', level: 'hard', q: 'Choose all the correct answers.', options: ['The lower the sun is, the longer the shadow becomes', 'When the sun moves from East to South, the shadow moves from West to North', 'A sundial can tell time at night when the sun is not out'], answer: [0, 1] },
      { type: 'mc', style: 'story', mode: 'boss', level: 'hard', q: 'Early in the morning, the sun is in the East. Which way does a stick’s shadow point?', options: ['To the West', 'To the East', 'To the South'], answer: 0 },
      { type: 'table', mode: 'boss', level: 'hard', q: 'Morning or around noon?', cols: ['Morning', 'Around noon'], items: ['The sun is low in the East', 'The sun is at its highest', 'The shadow is long', 'The shadow is short'], answer: [0, 1, 0, 1] }
    ] },
  { id: 'M6', lesson: 4, bonus: true, concept: 'Using a compass (Let’s Expand)',
    explain: 'Hold the compass flat on your palm and wait until the needle stops shaking. The red needle (or the marked needle) always points North (N): turn the dial to match the letter N with it. If there are iron products, magnets or electronics nearby, the needle may not move correctly.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which direction does the red needle of a compass always point to?', options: ['North (N)', 'South (S)', 'East (E)'], answer: 0 },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'If there are magnets or electronics nearby, the compass needle may not move correctly.', answer: 0 }
    ] },

  /* ---------- 4-5 Sun and Shade ---------- */
  { id: 'N1', lesson: 5, concept: 'Sunny ground is warmer',
    explain: 'The ground in sunny places becomes warmer than the ground in shady places. This is because sunlight warms the sunny ground. The warmth of the ground depends on how much sunlight it gets.',
    variants: [
      { type: 'tap', diagram: 'sunShade', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap the ground that is warmer.', answer: 'sunny' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Why is the sunny ground warmer than the ground in the shade?', options: ['Because direct sunlight hits the ground and warms it up', 'Because the shady ground absorbs a lot of sunlight', 'Because the wind is not blowing at all in the sunny place'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'The temperature of the sunny ground becomes ___ than the shady ground.', options: ['higher', 'lower', 'the same'], answer: 0 },
      { type: 'build', style: 'sentence', mode: 'normal', level: 'hard', q: 'Make the correct sentence.', parts: ['The warmth of the ground', 'depends on', 'how much sunlight it gets'], extra: ['how much wind it gets', 'never changes'] }
    ] },
  { id: 'N2', lesson: 5, concept: 'Sunny ground warms with time',
    explain: 'The temperature of the sunny ground goes up as time passes while absorbing sunlight.',
    variants: [
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'The temperature of the sunny ground goes up as time passes.', answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What happens to the temperature of the sunny ground as time passes?', options: ['It goes up while absorbing sunlight', 'It goes down', 'It always stays the same'], answer: 0 }
    ] },
  { id: 'N3', lesson: 5, concept: 'Shady ground is cooler and damp',
    explain: 'The ground in the shade is cooler and often damp compared to the sunny place.',
    variants: [
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'The shady ground is cooler and often ___ compared to the sunny ground.', options: ['damp', 'dry', 'hot'], answer: 0 },
      { type: 'multi', mode: 'normal', level: 'medium', q: 'Choose all the correct characteristics of the ground in the shade.', options: ['It is often damp compared to the sunny place', 'It is cooler compared to the sunny place', 'It is dry compared to the sunny place'], answer: [0, 1] },
      { type: 'tap', diagram: 'sunShade', mode: 'normal', level: 'medium', q: 'Tap the ground that is often damp.', answer: 'shady' }
    ] },
  { id: 'N4', lesson: 5, concept: 'Measuring the ground temperature',
    explain: 'Choose a sunny place and a place in the shadow of a tree or wall, and measure the temperature of each. When using a thermometer, touch the bulb (bottom part) to the ground and block direct sunlight from the bulb with your hand or a shadow. Use a radiation thermometer away from the ground. Then touch the ground and feel the difference in warmth and dampness.',
    variants: [
      { type: 'mc', style: 'odd', mode: 'normal', level: 'medium', q: 'Which is NOT the correct way to measure ground temperature?', options: ['Hold the bulb of the thermometer tightly with your fingers', 'Make sure the bulb of the thermometer touches the ground', 'Make a shadow so that direct sunlight does not hit the bulb'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which part of the thermometer touches the ground?', options: ['The bulb (bottom part)', 'The top end', 'No part: hold it in the air'], answer: 0 },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'We use a radiation thermometer away from the ground.', answer: 0 }
    ] },
  { id: 'N5', lesson: 5, boss: true, concept: 'Sun and shade compared',
    explain: 'Sunny ground: warmer, gets direct sunlight, its temperature goes up with time. Shady ground: cooler and often damp.',
    variants: [
      { type: 'table', mode: 'boss', level: 'hard', q: 'Sunny ground or shady ground?', cols: ['Sunny ground', 'Shady ground'], items: ['Gets direct sunlight', 'Its temperature goes up with time', 'Cooler', 'Often damp'], answer: [0, 0, 1, 1] },
      { type: 'mc', style: 'story', mode: 'boss', level: 'hard', q: 'At noon, Salma touches the ground near a wall. One spot is warm and dry, the other is cool and a little damp. Which spot was in the shade?', options: ['The cool, damp spot', 'The warm, dry spot', 'Both spots'], answer: 0 },
      { type: 'multi', mode: 'boss', level: 'hard', q: 'Choose all the correct answers.', options: ['Sunlight warms the sunny ground', 'The warmth of the ground depends on how much sunlight it gets', 'The ground in the shade gets more and more hot'], answer: [0, 1] }
    ] },

  /* ---------- Bonus · Column "Light and Sound" ---------- */
  { id: 'N6', lesson: 1, bonus: true, concept: 'The Sound and Light Show at the pyramids (Column)',
    explain: 'At the Giza Pyramids, a “Sound and Light Show (Son et Lumière)” is held. Strong laser beams are pointed at the Sphinx and the pyramids from far away: they use the rule that light travels in a straight line to hit the exact spot. When the light bounces off the stones, beautiful colors reach our eyes.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Why can the laser beams of the show hit the exact spot from far away?', options: ['Because light travels in a straight line', 'Because light travels in a curve', 'Because the stones make light'], answer: 0 },
      { type: 'tf', mode: 'normal', level: 'easy', q: 'The Sound and Light Show is held at the Giza Pyramids.', answer: 0 }
    ] },
  { id: 'N7', lesson: 1, bonus: true, concept: 'Stones bounce sound (Column)',
    explain: 'The pyramids and the temple walls are made of giant stones. Stones are really good at bouncing sound, so the speakers of the show are placed in special spots by calculating how sound bounces off the stones.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'How are the speakers of the show placed?', options: ['By calculating how sound bounces off the stones', 'Anywhere, it does not matter', 'Only inside the Sphinx'], answer: 0 },
      { type: 'tf', mode: 'normal', level: 'easy', q: 'Stones are really good at bouncing sound.', answer: 0 }
    ] }
];
})();
