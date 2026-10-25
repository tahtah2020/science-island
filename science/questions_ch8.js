/* Changes in Weather · Grade 5 Science · English school book (first term 2026/2027, pages 80-91)
   Lessons: 1 Clouds and Weather (80-81) · 2 Cloud Movement (82-85, with Try and Exercise) · 3 Weather Forecast (86-88, with Try and Exercise)
            + Let's Expand! (89) and the Chapter 8 Column "Reading the Desert Sky" (90-91): enrichment, bonus: true, lesson 3
   Idea letters: every letter A-Z is used in Grade 5, so ids number on from 21: C21… = lesson 1 (Clouds) · M21… = lesson 2 (Movement) · F21… = lesson 3 (Forecast); bonus F31…
   Rules: answers of mc/fill at index 0 (the page shuffles) · one Boss idea per lesson (every variant mode:'boss') · about a third timed
          distractors = real misconceptions · term/fix answers ≤ 18 letters · core and Boss only from the school book · bonus: true for Let's Expand and the Column
   Pictures: the owner's 12 pictures (science/assets/ch8_*.jpg) + the 8-block sky drawn in code (science/ch8_art.js).
   Review notes for the owner:
   - Exercise 1(1) of lesson 2 (page 85) asks the minimum cloud cover for "cloudy", but its options (1 or more, 6 or more, 9 or more) do not include 7, which is what page 81 prints (7 to 8). Not asked; C23 asks the printed rule instead.
   - Exercise 1(2) (page 85): "both types of weather are called ( )" for cloud cover 0 and 8 contradicts page 81 (0 is sunny, 8 is cloudy). Not asked.
   - The Column (page 90) imagines the sky as 10 blocks ("0 to 1" in Egypt), but the lesson uses 8. It is asked only as enrichment (F33) and says "almost no clouds".
   - Not asked (open or no printed answer): the Warm Up activities (divide the sky, count the clouds, follow the clouds with a compass, predict the local weather), "what color are the clouds on a rainy day?" (page 81),
     and the speech bubbles.
   - Lesson 3 Try 1(1) / Exercise 3(2): "no clouds at all over Egypt → sunny" is the book's own printed rule (sunny weather continues). */
(function () {
window.CHAPTER = { id: 'g5-lang-ch8', title: 'Changes in Weather', grade: 'Grade 5', track: 'Languages' };

window.IDEAS = [
  /* ---------- Lesson 1 · Clouds and Weather ---------- */
  { id: 'C21', lesson: 1, concept: 'Cloud cover',
    explain: 'We use the cloud cover to determine the weather. If we consider the whole sky as “8”, we use numbers from 0 to 8 to show how much of the sky is covered by clouds.',
    variants: [
      { type: 'term', mode: 'normal', level: 'medium', q: 'What do we call the proportion of the sky that is covered by clouds?', answer: 'Cloud cover' },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'If we consider the whole sky as “8”, we use numbers from 0 to ___ to show how much of the sky is covered by clouds.', options: ['8', '6', '10'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'easy', fig: 'ch8Grid', n: 3, q: 'The whole sky is “8”. Look at the picture. What is the cloud cover?', options: ['3', '5', '8'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'We use the cloud cover to determine the weather.', answer: 0 }
    ] },
  { id: 'C22', lesson: 1, concept: 'Sunny: cloud cover 0 to 6',
    explain: 'When the cloud cover is 0 to 6, the weather is sunny.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'You checked the cloud cover and it was “5”. What is the weather at this time?', options: ['Sunny', 'Cloudy', 'Rain'], answer: 0 },
      { type: 'tap', diagram: 'ch8Sky', mode: 'normal', level: 'easy', q: 'Tap the picture of a sunny day.', answer: 'c8sun' },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'medium', fig: 'ch8Grid', n: 6, q: 'Look at the sky. 6 blocks are covered by clouds. What is the weather?', options: ['Sunny', 'Cloudy'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'When the cloud cover is 0 to 6, the weather is ___.', options: ['sunny', 'cloudy', 'snowy'], answer: 0 }
    ] },
  { id: 'C23', lesson: 1, concept: 'Cloudy: cloud cover 7 to 8',
    explain: 'When the cloud cover is 7 to 8, the weather is cloudy.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', fig: 'ch8Grid', n: 7, q: 'Look at the sky. 7 blocks are covered by clouds. What is the weather?', options: ['Cloudy', 'Sunny'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'When the cloud cover is 7 to 8, the weather is ___.', options: ['cloudy', 'sunny', 'rainy'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'If the cloud cover is “6” or less, the weather is sunny. If it is “7” or more, it is cloudy.', answer: 0 },
      { type: 'table', mode: 'normal', level: 'hard', q: 'Sort the cloud cover numbers.', cols: ['Sunny', 'Cloudy'], items: ['0', '4', '7', '8'], answer: [0, 0, 1, 1] }
    ] },
  { id: 'C24', lesson: 1, concept: 'Rain or snow, whatever the cloud cover',
    explain: 'No matter the cloud cover, if it is raining or snowing, the weather is “rain” or “snow”.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'The cloud cover is “2”, but it is raining. What is the weather?', options: ['Rain', 'Sunny', 'Cloudy'], answer: 0 },
      { type: 'tap', diagram: 'ch8Sky', mode: 'normal', level: 'medium', q: 'No matter the cloud cover, snow is falling. Tap the picture of the weather “snow”.', answer: 'c8snow' },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'If it is raining, the weather is “rain”, no matter the cloud cover.', answer: 0 },
      { type: 'mc', mode: 'normal', level: 'hard', q: 'The cloud cover is “8” and it is not raining or snowing. What is the weather?', options: ['Cloudy', 'Rain', 'Snow'], answer: 0 }
    ] },
  { id: 'C25', lesson: 1, concept: 'Changing weather, changing clouds',
    explain: 'When the weather changes, the cloud cover increases or decreases, and the clouds change their shapes.',
    variants: [
      { type: 'fill', mode: 'normal', level: 'medium', q: 'When the weather changes, the cloud cover increases or ___.', options: ['decreases', 'freezes', 'disappears forever'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'When the weather changes, the clouds change their shapes.', answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What happens to the clouds when the weather changes?', options: ['The cloud cover changes and the clouds change their shapes', 'The clouds stay exactly the same', 'The clouds always turn to snow'], answer: 0 }
    ] },
  { id: 'C26', lesson: 1, boss: true, concept: 'Cloud cover and weather together',
    explain: 'Cloud cover 0 to 6 is sunny and 7 to 8 is cloudy. But if it is raining or snowing, the weather is “rain” or “snow”, whatever the cloud cover.',
    variants: [
      { type: 'table', mode: 'boss', level: 'hard', q: 'What is the weather?', cols: ['Sunny', 'Cloudy', 'Rain'], items: ['Cloud cover 3, no rain', 'Cloud cover 8, no rain', 'Cloud cover 8, and it is raining'], answer: [0, 1, 2] },
      { type: 'fix', mode: 'boss', level: 'hard', q: 'When the cloud cover is 7 to 8, the weather is sunny.', wrong: 'sunny', answer: 'cloudy', explain: 'When the cloud cover is 7 to 8, the weather is cloudy. Sunny is 0 to 6.' },
      { type: 'build', style: 'sentence', mode: 'boss', level: 'hard', q: 'Build the sentence.', parts: ['We use the cloud cover', 'to determine', 'the weather'], extra: ['to count the stars'] }
    ] },

  /* ---------- Lesson 2 · Cloud Movement ---------- */
  { id: 'M21', lesson: 2, concept: 'Clouds move with the wind',
    explain: 'Clouds move with the wind. There is a pattern for their movement.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What makes the clouds move?', options: ['The wind', 'The moon', 'The birds'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Clouds move with the ___.', options: ['wind', 'sea', 'sand'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'There is a pattern for how clouds move.', answer: 0 }
    ] },
  { id: 'M22', lesson: 2, concept: 'Clouds move from west to east',
    explain: 'In places like Egypt and Japan, clouds generally move from west to east. The weather also changes from west to east as the clouds move.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'In most cases, which direction do clouds move?', options: ['From west to east', 'From east to west', 'From north to south', 'From south to north'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'In places like Egypt and Japan, clouds generally move from west to ___.', options: ['east', 'north', 'south'], answer: 0 },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'In Egypt, clouds generally move from east to west.', answer: 1 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'The weather also changes from west to east as the clouds ___.', options: ['move', 'freeze', 'shrink'], answer: 0 }
    ] },
  { id: 'M23', lesson: 2, concept: 'Reference points',
    explain: 'Use things that don’t move, like buildings or trees, as reference points to check which way the clouds moved over time.',
    variants: [
      { type: 'fill', mode: 'normal', level: 'medium', q: 'When checking the direction clouds move, it is easier to understand if you choose a ___ like a tree or a building to observe.', options: ['reference point', 'moving car', 'flying bird'], answer: 0 },
      { type: 'tap', diagram: 'ch8Refs', mode: 'normal', level: 'medium', q: 'Which one is NOT good as a reference point, because it moves? Tap it.', answer: 'c8boat' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which can be used as a reference point to see which way the clouds move?', options: ['A building or a tree', 'A bird flying', 'A car driving past'], answer: 0 },
      { type: 'term', mode: 'normal', level: 'hard', q: 'A thing that does not move, such as a building or a tree, used to check which way the clouds moved.', answer: 'Reference point' }
    ] },
  { id: 'M24', lesson: 2, concept: 'The compass',
    explain: 'Use a compass to find which way is west and which way is east.',
    variants: [
      { type: 'tap', diagram: 'ch8Refs', mode: 'normal', level: 'easy', q: 'Tap the tool we use to find which way is west and which way is east.', answer: 'c8compass' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Which tool do we use to find west and east?', options: ['A compass', 'A ruler', 'A thermometer'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Use a ___ to find which way is west and which way is east.', options: ['compass', 'ruler', 'microscope'], answer: 0 }
    ] },
  { id: 'M25', lesson: 2, concept: 'Observing every 15 minutes',
    explain: 'Choose one reference point that doesn’t move, use a compass to find west and east, then observe every 15 minutes to see from which side of the marker the clouds appear and to which side they disappear.',
    variants: [
      { type: 'order', mode: 'normal', level: 'medium', q: 'Put the steps for following the clouds in order.', items: ['Observe every 15 minutes', 'Choose a reference point that doesn’t move', 'Use a compass to find west and east'], answer: [1, 2, 0] },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'To follow the clouds, observe every ___ minutes.', options: ['15', '5', '60'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which is an incorrect method for observing cloud movement?', options: ['Observing clouds from inside a moving car', 'Observing every 15 minutes to see which side of a reference point the clouds appear from and disappear to', 'Placing a compass on the ground and watching clouds pass over a building'], answer: 0 }
    ] },
  { id: 'M26', lesson: 2, concept: 'Predicting from cloud movement',
    explain: 'We can predict how the weather will change from the movement of the clouds and weather information. When there are clouds in the west that look like they will bring rain, those rain clouds will soon come here.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which statement correctly explains cloud movement and weather change?', options: ['When there are clouds in the west that look like they will bring rain, those rain clouds will soon come here', 'When rain clouds are seen in the east, those rain clouds will come here right away'], answer: 0 },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'Rain clouds in the east will come here right away.', answer: 1 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Rain clouds in the ___ will soon come here.', options: ['west', 'east', 'north'], answer: 0 }
    ] },
  { id: 'M27', lesson: 2, boss: true, concept: 'Cloud movement together',
    explain: 'Clouds move with the wind, generally from west to east in Egypt. We use a reference point that does not move and a compass, and observe every 15 minutes.',
    variants: [
      { type: 'fix', mode: 'boss', level: 'hard', q: 'In Egypt, clouds generally move from east to west.', wrong: 'east to west', answer: 'west to east', explain: 'In places like Egypt and Japan, clouds generally move from west to east.' },
      { type: 'match', mode: 'boss', level: 'hard', q: 'Match each thing to its job.', left: ['Reference point', 'Compass', 'Every 15 minutes'], right: ['A thing that doesn’t move', 'Finds west and east', 'When we observe the clouds'], answer: [0, 1, 2] },
      { type: 'build', style: 'sentence', mode: 'boss', level: 'hard', q: 'Build the sentence.', parts: ['Clouds generally move', 'from west to east', 'in Egypt'], extra: ['from east to west'] }
    ] },

  /* ---------- Lesson 3 · Weather Forecast ---------- */
  { id: 'F21', lesson: 3, concept: 'Satellite images',
    explain: 'Using pictures taken from space by weather satellites, we can see cloud conditions over a wide area. The white parts in the satellite images are clouds.',
    variants: [
      { type: 'fill', mode: 'normal', level: 'easy', q: 'The white parts in the satellite images are ___.', options: ['clouds', 'deserts', 'rivers'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What do the white areas in the pictures taken by weather satellites represent?', options: ['Clouds', 'Sand', 'Snow on the ground'], answer: 0 },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'Where are weather satellite pictures taken from?', options: ['From space', 'From a tower', 'From the sea'], answer: 0 },
      { type: 'tap', diagram: 'ch8Tools', mode: 'normal', level: 'medium', q: 'Tap the machine that takes pictures of the clouds from space.', answer: 'c8sat' }
    ] },
  { id: 'F22', lesson: 3, concept: 'Weather forecast',
    explain: 'The weather forecast tells us the future weather by combining cloud movement and wind conditions.',
    variants: [
      { type: 'term', mode: 'normal', level: 'medium', q: 'It tells us the future weather by combining cloud movement and wind conditions.', answer: 'Weather forecast' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What does a weather forecast combine to tell us the future weather?', options: ['Cloud movement and wind conditions', 'Birds and animals', 'The size of the sun'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'The weather forecast tells us the ___ weather.', options: ['future', 'past', 'yesterday’s'], answer: 0 }
    ] },
  { id: 'F23', lesson: 3, concept: 'Clouds in the west come closer',
    explain: 'If clouds in the west come closer, the weather will get worse. If there are no clouds in the west, we can predict that sunny weather will continue for a while.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'A big mass of clouds is coming from the west. What do you predict tomorrow’s weather will be?', options: ['The weather will get worse (cloudy or rain)', 'Clear, sunny weather with no clouds will continue'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'There are no clouds in the west. What can we predict?', options: ['Sunny weather will continue for a while', 'The weather will get worse', 'It will snow'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'If clouds in the west come closer, the weather will get worse.', answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'If clouds in the west come closer, the weather will get ___.', options: ['worse', 'better', 'hotter'], answer: 0 }
    ] },
  { id: 'F24', lesson: 3, concept: 'The west-to-east rule for forecasts',
    explain: 'An important principle when predicting weather changes is to use the rule that clouds move from west to east.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What is an important principle when predicting weather changes?', options: ['Use the rule that clouds move from west to east', 'Clouds always move randomly, so we cannot predict', 'Predict by watching the movements of birds and animals'], answer: 0 },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'Clouds always move randomly, so we cannot predict the weather.', answer: 1 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'To predict weather changes, use the rule that clouds move from ___ to east.', options: ['west', 'north', 'south'], answer: 0 }
    ] },
  { id: 'F25', lesson: 3, concept: 'No clouds over Egypt',
    explain: 'When there are no clouds at all over Egypt in the satellite image, the current weather is likely to be sunny.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'When there are no clouds at all over Egypt in the satellite image, what is the current weather likely to be?', options: ['Sunny', 'Cloudy', 'Rain or snow'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'No clouds over Egypt in the satellite image means the weather is likely sunny.', answer: 0 }
    ] },
  { id: 'F26', lesson: 3, boss: true, concept: 'Making a forecast',
    explain: 'To predict the weather: look for a big white mass of clouds on the west side of the satellite image, remember that clouds move from west to east, then forecast. Clouds coming from the west mean worse weather; no clouds in the west mean sunny weather continues.',
    variants: [
      { type: 'order', mode: 'boss', level: 'hard', q: 'Put the steps of making a forecast in order.', items: ['Remember that clouds move from west to east', 'Look for big white clouds on the west side of the satellite image', 'Predict whether tomorrow will be sunny or cloudy'], answer: [1, 0, 2] },
      { type: 'table', mode: 'boss', level: 'hard', q: 'What will happen?', cols: ['Weather gets worse', 'Sunny weather continues'], items: ['A big cloud is coming from the west', 'There are no clouds in the west'], answer: [0, 1] },
      { type: 'fix', mode: 'boss', level: 'hard', q: 'The white parts in the satellite images are deserts.', wrong: 'deserts', answer: 'clouds', explain: 'The white parts in the satellite images are clouds.' }
    ] },

  /* ---------- Let's Expand! (page 89) and the Column (pages 90-91): enrichment ---------- */
  { id: 'F31', lesson: 3, bonus: true, concept: 'The weather satellite Meteosat',
    explain: 'The weather satellite “Meteosat” observes the weather in Europe and Africa and collects data on the air and ocean from about 35,800 km above the equator.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which weather satellite observes the weather in Europe and Africa?', options: ['Meteosat', 'Radarsat', 'Cloudsat'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Meteosat observes the weather from about 35,800 km above the ___.', options: ['equator', 'desert', 'Nile'], answer: 0 }
    ] },
  { id: 'F32', lesson: 3, bonus: true, concept: 'Weather radar',
    explain: 'A weather radar uses radio waves to observe where and how heavily it is raining or snowing in real time. It is used for short-term weather forecasts and disaster prevention information.',
    variants: [
      { type: 'tap', diagram: 'ch8Tools', mode: 'normal', level: 'medium', q: 'Tap the machine on the ground that uses radio waves to see where and how heavily it is raining or snowing.', answer: 'c8radar' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What does a weather radar use to observe where and how heavily it is raining or snowing?', options: ['Radio waves', 'A compass', 'Photographs from a tower'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'A weather radar is used for short-term weather forecasts.', answer: 0 }
    ] },
  { id: 'F33', lesson: 3, bonus: true, concept: 'Egypt’s skies: almost no clouds',
    explain: 'Egypt usually has almost no clouds. However, in winter, the area near the Mediterranean Sea gets more clouds, and it sometimes even rains.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Where does Egypt get more clouds, and sometimes rain, in winter?', options: ['The area near the Mediterranean Sea', 'The middle of the Sahara', 'The top of the pyramids only'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'Egypt usually has almost no clouds.', answer: 0 }
    ] },
  { id: 'F34', lesson: 3, bonus: true, concept: 'The desert weather Khamsin',
    explain: 'Khamsin is a hot and dry sandstorm that blows in Egypt between winter and summer. A strong low-pressure system from the west stirs up the sand of the Sahara Desert, the sky is covered with sand instead of clouds, and the temperature goes up very quickly.',
    variants: [
      { type: 'tap', diagram: 'ch8Dust', mode: 'normal', level: 'medium', q: 'Tap the picture of the sky covered with sand instead of clouds, with the temperature going up very quickly.', answer: 'c8sand' },
      { type: 'term', mode: 'normal', level: 'medium', q: 'The hot and dry sandstorm that blows in Egypt between winter and summer.', answer: 'Khamsin' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What covers the sky during the Khamsin?', options: ['Sand instead of clouds', 'Snow', 'Smoke from the Nile'], answer: 0 }
    ] },
  { id: 'F35', lesson: 3, bonus: true, concept: 'Moist air made by the Nile',
    explain: 'Only the area around the Nile River has a lot of water vapor (water in the air). This makes it a special place where clouds can easily form.',
    variants: [
      { type: 'fill', mode: 'normal', level: 'medium', q: 'The area around the Nile River has a lot of water ___ (water in the air).', options: ['vapor', 'sand', 'snow'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Why can clouds easily form around the Nile River, even in the middle of the desert?', options: ['The area has a lot of water vapor', 'The area has a lot of sand', 'The area has no wind'], answer: 0 }
    ] }
];
})();
