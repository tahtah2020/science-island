/* Water Cycle · Grade 5 Science · English school book (first term 2026/2027, pages 92-107)
   Lessons: 1 Water Evaporation (92-93) · 2 Water in the Air (94-97, with the Try and Exercise of lessons 1 and 2)
            3 Where Does Water Go? (98-101, with Try and Exercise) + the Chapter 9 Column "Water That Disappears and Comes Back: The Nile's Water Cycle" (102-103): enrichment, bonus: true, lesson 3
            4 How to Do Science (104-107: fair tests, the microscope (review), recording changes, the scientific inquiry cycle): the book's skills pages at the end of the term, asked as a 4th lesson
   Idea letters: every letter A-Z is used in Grade 5, so ids number on from 21: E21… = lesson 1 (Evaporation) · N21… = lesson 2 (coNdensation) · W21… = lesson 3 (Water cycle) · S21… = lesson 4 (Skills); bonus W31…
   Rules: answers of mc/fill at index 0 (the page shuffles) · one Boss idea per lesson (every variant mode:'boss') · about a third timed
          distractors = real misconceptions · term/fix answers ≤ 18 letters · core and Boss only from the school book · bonus: true for the Column
   Pictures: the owner's 12 pictures (science/assets/ch9_*.jpg) + the water cycle drawn in code (science/ch9_art.js).
   Review notes for the owner:
   - The result of the lid experiment (page 93: which beaker keeps more water) and its Summary are not printed: only the setup is asked (same amount of water, lid on one only, compare after 2-3 days).
   - "Sun or shade: which dries faster?" (page 93) is a prediction; the answer (sun) is taken from the printed rule "evaporation happens faster when it is sunny".
   - Not asked: "Why doesn't the sea water overflow?" (page 98, speech bubble, no printed answer), the Discovery/Summary discussions, "other examples of condensation around you".
   - Column (page 103): the book says the rain on the mountains of Ethiopia comes from water that evaporated from the Mediterranean and the Red Sea. Most of the summer rain on the
     Ethiopian highlands comes from moist air from the Atlantic (through the Congo basin) and the Indian Ocean, so the sea of origin is not asked; W33 asks only "rain on the mountains → river → Egypt".
   - Lesson 4 is the review pages at the end of the book (pages 104-107); the microscope was already taught in Chapter 5. */
(function () {
window.CHAPTER = { id: 'g5-lang-ch9', title: 'Water Cycle', grade: 'Grade 5', track: 'Languages' };

window.IDEAS = [
  /* ---------- Lesson 1 · Water Evaporation ---------- */
  { id: 'E21', lesson: 1, concept: 'Evaporation',
    explain: 'The process of water changing into invisible water vapor from its surface is called evaporation.',
    variants: [
      { type: 'term', mode: 'normal', level: 'medium', q: 'What do you call the process of water changing from its surface into invisible water vapor?', answer: 'Evaporation', choices: ['Condensation', 'Freezing', 'Melting'] },
      { type: 'fix', mode: 'normal', level: 'medium', q: 'The process of water changing into invisible water vapor from its surface is called condensation.', wrong: 'condensation', answer: 'Evaporation' },
      { type: 'tap', diagram: 'ch9Two', mode: 'normal', level: 'easy', q: 'Tap the picture where water is changing into water vapor.', answer: 'c9puddle' },
      { type: 'build', style: 'define', mode: 'normal', level: 'hard', q: 'What is meant by evaporation?', parts: ['The process of water changing', 'into invisible water vapor', 'from its surface'], extra: ['into liquid water drops', 'from the cold air'] }
    ] },
  { id: 'E22', lesson: 1, concept: 'The water does not just disappear',
    explain: 'The water in the laundry and puddles doesn’t just disappear; it changes its state and is released into the air.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', fig: 'ch9Photo', p: 'c9puddle', q: 'Which is the correct explanation for why the water in the puddle disappeared?', options: ['The water turned into water vapor and went out into the air.', 'The water disappeared by magic.', 'It was all absorbed into the soil.'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'The water in wet laundry just disappears.', answer: 1 },
      { type: 'mc', mode: 'normal', level: 'medium', fig: 'ch9Photo', p: 'c9laundry', q: 'The wet shirt is now dry. Where did the water go?', options: ['It changed its state and was released into the air.', 'It went back into the washing machine.', 'It disappeared and is gone forever.'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'The water in puddles doesn’t just disappear; it changes its ___ and is released into the air.', options: ['state', 'color', 'smell'], answer: 0 }
    ] },
  { id: 'E23', lesson: 1, concept: 'Water vapor is invisible',
    explain: 'Water changes into invisible water vapor from its surface.',
    variants: [
      { type: 'fill', mode: 'timed', seconds: 12, level: 'easy', q: 'The process of water changing into (___) water vapor from its surface is called evaporation.', options: ['invisible', 'visible'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'We can see water vapor in the air with our eyes.', answer: 1 },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Water evaporates from its …', options: ['surface', 'bottom', 'container'], answer: 0 }
    ] },
  { id: 'E24', lesson: 1, concept: 'Faster evaporation: high temperature, sunny, wind',
    explain: 'Evaporation happens faster when the temperature is high, when it is sunny, and when there is wind.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', fig: 'ch9Photo', p: 'c9laundry', q: 'Under what weather conditions does laundry dry quickly?', options: ['A day when the temperature is high and it’s sunny.', 'A day when the temperature is low and it’s heavily cloudy.', 'A rainy day.'], answer: 0 },
      { type: 'multi', mode: 'normal', level: 'medium', q: 'Evaporation happens faster when … Choose all correct answers.', options: ['the temperature is high', 'it is sunny', 'there is wind', 'the temperature is low', 'it is raining'], answer: [0, 1, 2] },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'medium', q: 'You hang one wet cloth in the sun and one in the shade. Which will dry faster?', options: ['The cloth in the sun', 'The cloth in the shade', 'Both at the same time'], answer: 0 },
      { type: 'table', mode: 'normal', level: 'hard', q: 'Sort the conditions: does evaporation happen faster or slower?', cols: ['Faster', 'Slower'], items: ['High temperature', 'Wind', 'Low temperature', 'Heavily cloudy day'], answer: [0, 0, 1, 1] }
    ] },
  { id: 'E25', lesson: 1, concept: 'The lid experiment',
    explain: 'Put the same amount of water into two beakers, put a lid on only one beaker with plastic wrap and a rubber band, and compare the amount of water after 2-3 days.',
    variants: [
      { type: 'order', mode: 'normal', level: 'medium', q: 'Put the steps of the evaporation experiment in order.', items: ['Put a lid on only one beaker with plastic wrap and a rubber band.', 'Compare the amount of water after 2-3 days.', 'Put the same amount of water into two beakers.'], answer: [2, 0, 1] },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'In the evaporation experiment, what must be the same in the two beakers at the start?', options: ['The amount of water', 'The lid', 'Nothing'], answer: 0 },
      { type: 'tap', diagram: 'ch9Lab', mode: 'normal', level: 'easy', q: 'Tap the beaker of water with a lid of plastic wrap and a rubber band.', answer: 'c9beaker' },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'In the evaporation experiment, we compare the amount of water after ___ days.', options: ['2-3', '20-30', '0'], answer: 0 }
    ] },
  { id: 'E26', lesson: 1, boss: true, concept: 'why laundry dries',
    explain: 'The water in laundry changes into invisible water vapor and is released into the air. This happens faster when the temperature is high, when it is sunny and when there is wind.',
    variants: [
      { type: 'build', style: 'why', mode: 'boss', level: 'hard', q: 'Wet laundry dries quickly on a hot, sunny, windy day.', parts: ['Because the water evaporates faster', 'when the temperature is high,', 'it is sunny and there is wind'], extra: ['Because the water is absorbed', 'when it is cloudy'] },
      { type: 'match', mode: 'boss', level: 'hard', q: 'Match each day to how fast the laundry dries.', left: ['Hot, sunny and windy', 'Cold and heavily cloudy'], right: ['Dries quickly', 'Dries slowly'], answer: [0, 1] },
      { type: 'mc', mode: 'boss', level: 'hard', fig: 'ch9Photo', p: 'c9laundry', q: 'Which explains best what happens to the water in the wet shirt?', options: ['It evaporates into invisible water vapor, faster in the sun and wind.', 'It condenses into drops, faster in the cold.', 'It stays in the shirt until the shirt is folded.'], answer: 0 }
    ] },

  /* ---------- Lesson 2 · Water in the Air ---------- */
  { id: 'N21', lesson: 2, concept: 'The air contains invisible water vapor',
    explain: 'The air contains invisible water vapor, and when it is cooled, it turns into water.',
    variants: [
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'The air contains invisible water vapor.', answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'The air contains invisible water vapor, and when it is ___, it turns into water.', options: ['cooled', 'heated', 'blown'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Water vapor in the air turns into water when it is …', options: ['cooled', 'warmed by the sun', 'moved by the wind'], answer: 0 }
    ] },
  { id: 'N22', lesson: 2, concept: 'Condensation',
    explain: 'The process of invisible water vapor in the air cooling and changing into liquid water is called condensation.',
    variants: [
      { type: 'term', mode: 'normal', level: 'medium', q: 'What do you call the process of water vapor in the air cooling and changing into liquid water?', answer: 'Condensation', choices: ['Evaporation', 'Freezing', 'Boiling'] },
      { type: 'fix', mode: 'normal', level: 'medium', q: 'The process of invisible water vapor in the air cooling and changing into liquid water is called evaporation.', wrong: 'evaporation', answer: 'Condensation' },
      { type: 'tap', diagram: 'ch9Two', mode: 'normal', level: 'medium', q: 'Tap the picture where water vapor in the air is changing into water drops.', answer: 'c9icejar' },
      { type: 'build', style: 'define', mode: 'normal', level: 'hard', q: 'What is meant by condensation?', parts: ['Invisible water vapor in the air', 'cooling', 'and changing into liquid water'], extra: ['heating', 'and changing into ice'] }
    ] },
  { id: 'N23', lesson: 2, concept: 'Drops appear when the temperature falls',
    explain: 'The invisible water vapor in the air appears as water drops when the temperature falls.',
    variants: [
      { type: 'fill', mode: 'timed', seconds: 12, level: 'easy', q: 'The invisible water vapor in the air appears as water drops when the temperature (___).', options: ['falls', 'rises', 'stays the same'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'medium', q: 'Water vapor in the air turns into water drops when the temperature rises.', answer: 1 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Why does water vapor in the air turn into drops on a cold surface?', options: ['Because it is cooled', 'Because it is heated', 'Because it is pushed by the wind'], answer: 0 }
    ] },
  { id: 'N24', lesson: 2, concept: 'Drops on a cold glass come from the air',
    explain: 'The water drops on the outside of a glass of ice water come from the water vapor in the surrounding air, which was cooled. They do not pass through the glass.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', fig: 'ch9Photo', p: 'c9glass', q: 'Water drops formed on the outside of a glass filled with ice water. What was cooled?', options: ['The water vapor in the surrounding air.', 'The water inside the glass.'], answer: 0 },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'The drops on the outside of a cold glass are the water inside the glass that passed through the glass.', answer: 1 },
      { type: 'tap', diagram: 'ch9Four', mode: 'normal', level: 'easy', q: 'Tap the picture of a cold glass with water drops on it.', answer: 'c9glass' },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'medium', q: 'Where do the water drops that form around a cold glass come from?', options: ['From the water vapor in the air', 'From inside the glass', 'From the table'], answer: 0 }
    ] },
  { id: 'N25', lesson: 2, concept: 'The ice beaker experiment',
    explain: 'Put ice in the beaker, cover it with plastic wrap and a rubber band, mark the water level and let it sit. Small water drops start to form on the surface of the beaker. Make sure they did not leak from inside the beaker.',
    variants: [
      { type: 'order', mode: 'normal', level: 'medium', q: 'Put the steps of the ice beaker experiment in order.', items: ['Mark the water level and let it sit for a while.', 'Put ice in the beaker and cover it with plastic wrap and a rubber band.', 'Observe small water drops on the surface of the beaker.'], answer: [1, 0, 2] },
      { type: 'tap', diagram: 'ch9Lab', mode: 'normal', level: 'easy', q: 'Tap the beaker with ice in it.', answer: 'c9icejar' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'In the ice beaker experiment, what will start to form on the surface of the beaker?', options: ['Small water drops', 'Ice cubes', 'Dust'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'hard', q: 'In the ice beaker experiment, what must we make sure of?', options: ['That the water drops on the surface did not leak from inside the beaker', 'That the ice melts very fast', 'That the beaker is in the sun'], answer: 0 }
    ] },
  { id: 'N26', lesson: 2, concept: 'Evaporation and condensation in nature',
    explain: 'In nature, water evaporates into water vapor and condenses back into water.',
    variants: [
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'In nature, water evaporates into ___ and condenses back into water.', options: ['water vapor', 'ice', 'sand'], answer: 0 },
      { type: 'match', mode: 'normal', level: 'medium', q: 'Match each process to what happens.', left: ['Evaporation', 'Condensation'], right: ['Water changes into invisible water vapor', 'Water vapor cools and changes into liquid water'], answer: [0, 1] },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'In nature, water evaporates into water vapor and condenses back into water.', answer: 0 }
    ] },
  { id: 'N27', lesson: 2, boss: true, concept: 'an example of condensation',
    explain: 'On a cold winter morning, the room’s window glass becomes white and foggy and water drops form: water vapor in the air was cooled. Water turning into ice in a freezer is freezing, and steam from a boiling pot is not condensation.',
    variants: [
      { type: 'mc', mode: 'boss', level: 'hard', q: 'Which of the following is an appropriate example of condensation?', options: ['On a cold winter morning, the room’s window glass becomes white and foggy, and water drops form.', 'Water turns into ice when put in a freezer.', 'Hot water in a pot boils and steam comes out.'], answer: 0 },
      { type: 'build', style: 'why', mode: 'boss', level: 'hard', q: 'Water drops form on the outside of a glass filled with ice water.', parts: ['Because the water vapor in the surrounding air', 'is cooled', 'and changes into liquid water'], extra: ['Because the water inside the glass', 'leaks through the glass'] },
      { type: 'table', mode: 'boss', level: 'hard', q: 'Sort: evaporation or condensation?', cols: ['Evaporation', 'Condensation'], items: ['A puddle dries up', 'Wet laundry dries', 'Drops on a cold glass', 'A foggy window on a cold morning'], answer: [0, 0, 1, 1] }
    ] },

  /* ---------- Lesson 3 · Where Does Water Go? ---------- */
  { id: 'W21', lesson: 3, concept: 'Water moves in a continuous cycle',
    explain: 'The water on Earth moves in a continuous cycle while changing its state. Water is always traveling while changing its state!',
    variants: [
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'The water on Earth moves in a continuous cycle while changing its state.', answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'Water on Earth stays in one place and never changes its state.', answer: 1 },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'The water on Earth moves in a continuous cycle while changing its ___.', options: ['state', 'color', 'taste'], answer: 0 }
    ] },
  { id: 'W22', lesson: 3, concept: 'The sun warms the sea: evaporation from the surface',
    explain: 'Water in the sea and rivers is warmed by the sun, evaporates from the surface, and goes up into the sky. Sea water turns into water vapor due to the heat of the sun.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'When water goes up into the sky and evaporates, what is needed?', options: ['Heat from the sun (warmth)', 'Coldness of a pitch-black night', 'Light from the stars'], answer: 0 },
      { type: 'tap', diagram: 'ch9Cycle', mode: 'normal', level: 'medium', q: 'Tap the place where water is warmed by the sun and evaporates from the surface.', answer: 'w9sea' },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Water in the sea and rivers is warmed by the sun, evaporates from the ___, and goes up into the sky.', options: ['surface', 'bottom', 'sand'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Sea water turns into water vapor due to …', options: ['the heat of the sun', 'the cold of the night', 'the fish in the sea'], answer: 0 }
    ] },
  { id: 'W23', lesson: 3, concept: 'Water goes up as invisible water vapor',
    explain: 'Evaporation is the process of water changing into an invisible form and going up into the air.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'When water from the sea and rivers goes up into the sky, what shape does it take?', options: ['Invisible water vapor', 'It stays as visible water', 'Hard ice'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'Water from the sea goes up into the sky as invisible water vapor.', answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'medium', q: 'Evaporation is the process of water changing into an ___ form and going up into the air.', options: ['invisible', 'icy', 'visible'], answer: 0 }
    ] },
  { id: 'W24', lesson: 3, concept: 'Cooled in the sky: clouds, then rain',
    explain: 'The water vapor is cooled high in the sky to become clouds, and eventually falls as rain.',
    variants: [
      { type: 'tap', diagram: 'ch9Cycle', mode: 'normal', level: 'easy', q: 'Tap the place where water vapor is cooled high in the sky.', answer: 'w9cloud' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What happens to water vapor high in the sky?', options: ['It is cooled and becomes clouds.', 'It is heated and becomes the sun.', 'It turns into sand.'], answer: 0 },
      { type: 'tap', diagram: 'ch9Four', mode: 'normal', level: 'easy', q: 'Tap the picture of water falling from the clouds to the ground.', answer: 'c9mtrain' },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'The water that goes up into the sky becomes clouds and falls to the ground as ___.', options: ['rain', 'water vapor', 'sand'], answer: 0 }
    ] },
  { id: 'W25', lesson: 3, concept: 'Back to the sea as a river',
    explain: 'The water that falls on the ground becomes a river and returns to the sea.',
    variants: [
      { type: 'tap', diagram: 'ch9Cycle', mode: 'normal', level: 'medium', q: 'Tap the place where the water that fell on the ground goes back to the sea.', answer: 'w9river' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What happens to the rain water that falls on the ground?', options: ['It becomes a river and returns to the sea.', 'It goes straight up to the sun.', 'It stays on the ground forever.'], answer: 0 },
      { type: 'tap', diagram: 'ch9Four', mode: 'normal', level: 'easy', q: 'Tap the picture of water flowing on the land back to the sea.', answer: 'c9river' },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'River water flows into the sea.', answer: 0 }
    ] },
  { id: 'W26', lesson: 3, boss: true, concept: 'the water cycle',
    explain: 'The journey of water going around “Sea → Sky → Land → Sea” is called the water cycle. Water evaporates from the sea, becomes clouds, falls as rain, becomes a river and returns to the sea.',
    variants: [
      { type: 'mc', mode: 'boss', level: 'hard', q: 'Choose the correct order of the water cycle.', options: ['Evaporates from the sea → Becomes clouds → Rains → Returns to the sea', 'Evaporates from the sea → Flows into a river → Rains → Returns to clouds', 'Rains → Evaporates from the sea → Returns to the sea → Becomes clouds'], answer: 0 },
      { type: 'order', mode: 'boss', level: 'hard', fig: 'ch9CycleFig', q: 'Put the journey of water in order, starting at the sea.', items: ['Becomes clouds', 'Evaporates from the sea', 'Becomes a river and returns to the sea', 'Falls as rain'], answer: [1, 0, 3, 2] },
      { type: 'term', mode: 'boss', level: 'hard', q: 'Water going around from sea → clouds → rain → river → sea is called the water (___).', answer: 'Cycle', choices: ['Vapor', 'Level', 'Drop'] }
    ] },
  /* Chapter 9 Column (pages 102-103): enrichment */
  { id: 'W31', lesson: 3, bonus: true, concept: 'Egypt’s dry air: a giant laboratory for evaporation',
    explain: 'Egypt’s dry air has a high capacity to absorb water vapor. That is why laundry dries so quickly, and why the water level of the Nile River decreases gradually: evaporation.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Why does the water level of the Nile River decrease gradually?', options: ['Because of evaporation', 'Because of condensation', 'Because the fish drink it'], answer: 0 },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'Egypt’s dry air has a high capacity to absorb water vapor.', answer: 0 }
    ] },
  { id: 'W32', lesson: 3, bonus: true, concept: 'Cold desert nights: drops on plants',
    explain: 'The desert gets very cold at night. The water vapor in the cooled air turns into tiny water drops on plants (condensation). This is an important source of drinking water for the little living things in the desert.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', fig: 'ch9Photo', p: 'c9dew', q: 'In the desert at night, tiny water drops form on plants. What is this process called?', options: ['Condensation', 'Evaporation', 'Rain'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Why do water drops form on desert plants at night?', options: ['The desert gets very cold, so the water vapor in the air is cooled.', 'The desert gets very hot at night.', 'The plants pour water out of their leaves.'], answer: 0 }
    ] },
  { id: 'W33', lesson: 3, bonus: true, concept: 'The Nile’s journey from the south',
    explain: 'Rain falls on the high mountains of Ethiopia and Sudan. That water becomes a river again and travels all the way down to Egypt.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', fig: 'ch9Photo', p: 'c9mtrain', q: 'Where does heavy rain fall that later flows down the Nile to Egypt?', options: ['On the high mountains of Ethiopia and Sudan', 'On the Sahara Desert of Egypt', 'On the Mediterranean coast only'], answer: 0 },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'The water flowing in Egypt arrives from countries far away to the south.', answer: 0 }
    ] },
  { id: 'W34', lesson: 3, bonus: true, concept: 'The Aswan High Dam',
    explain: 'Humans control this water cycle at the Aswan High Dam. While calculating how much water disappears because of evaporation, people carefully conserve the water needed for farming for the whole year.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', fig: 'ch9Photo', p: 'c9dam', q: 'At the Aswan High Dam, people calculate how much water disappears because of evaporation. Why?', options: ['To conserve the water needed for farming for the whole year', 'To make the sea overflow', 'To stop the rain'], answer: 0 }
    ] },
  { id: 'W35', lesson: 3, bonus: true, concept: 'You are also a part of the cycle',
    explain: 'The water you drink will also evaporate into the sky someday, and become rain for someone else. Taking good care of water means protecting the cycle of life on our Earth.',
    variants: [
      { type: 'tf', mode: 'normal', level: 'easy', q: 'The water you drink will also evaporate into the sky someday and become rain for someone else.', answer: 0 }
    ] },

  /* ---------- Lesson 4 · How to Do Science (pages 104-107) ---------- */
  { id: 'S21', lesson: 4, concept: 'A fair test',
    explain: 'When you want to see how something affects an experiment, you change only the condition you want to test and keep all other conditions the same.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'To make a “fair test”, what should you do?', options: ['Change only the condition you want to test and keep all other conditions the same.', 'Change all the conditions at the same time.', 'Keep the condition you want to test the same.'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 12, level: 'easy', q: 'In a fair test, we keep conditions the same so we can compare the results correctly.', answer: 0 },
      { type: 'mc', mode: 'normal', level: 'hard', fig: 'ch9Photo', p: 'c9beaker', q: 'Two beakers have the same amount of water, but only one has a lid. Which condition are we testing?', options: ['The lid', 'The amount of water', 'The kind of water'], answer: 0 }
    ] },
  { id: 'S22', lesson: 4, concept: 'Fair test: what seeds need to germinate',
    explain: 'Testing “Is water needed?”: change the presence or absence of water; keep temperature, air and brightness the same. Testing “Is sunlight needed?”: change the presence or absence of sunlight; keep temperature, air and water the same.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', fig: 'ch9Photo', p: 'c9sprout', q: 'You are testing “Is water needed for germination?”. Which condition do you change?', options: ['The presence or absence of water', 'The temperature', 'The air'], answer: 0 },
      { type: 'table', mode: 'normal', level: 'hard', q: 'Testing “Is sunlight needed for germination?”: sort the conditions.', cols: ['Change', 'Keep the same'], items: ['Sunlight', 'Temperature', 'Air', 'Water'], answer: [0, 1, 1, 1] },
      { type: 'multi', mode: 'normal', level: 'medium', q: 'Testing “Is water needed for germination?”: which conditions must be kept the same? Choose all correct answers.', options: ['Temperature', 'Air', 'Brightness', 'Water'], answer: [0, 1, 2] }
    ] },
  { id: 'S23', lesson: 4, concept: 'Getting the microscope ready',
    explain: 'We use the microscope to see very small things. Put it in a flat, bright place away from direct sunlight, set the objective lens to the lowest magnification, and adjust the angle of the reflector to make the view bright.',
    variants: [
      { type: 'tap', diagram: 'ch9Tools', mode: 'normal', level: 'easy', q: 'Tap the tool we use to see very small things, like tiny eggs or parts of plants.', answer: 'c9micro' },
      { type: 'mc', mode: 'normal', level: 'medium', fig: 'ch9Photo', p: 'c9micro', q: 'Where should you put the microscope?', options: ['In a flat, bright place away from direct sunlight', 'In direct sunlight', 'In a dark cupboard'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'First, set the objective lens to the ___ magnification.', options: ['lowest', 'highest', 'middle'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which part of the microscope do you adjust to make the view bright?', options: ['The reflector', 'The clips', 'The stage'], answer: 0 }
    ] },
  { id: 'S24', lesson: 4, concept: 'Focusing safely',
    explain: 'While looking from the side, bring the prepared slide and the objective lens as close together as possible. Then look through the eyepiece lens and adjust the focus while moving the objective lens away from the slide, to prevent the objective lens from hitting the prepared slide and breaking it.',
    variants: [
      { type: 'build', style: 'why', mode: 'normal', level: 'hard', q: 'We focus while moving the objective lens away from the prepared slide.', parts: ['To prevent the objective lens', 'from hitting the prepared slide', 'and breaking it'], extra: ['To make the slide warmer', 'and brighter'] },
      { type: 'order', mode: 'normal', level: 'medium', q: 'Put these microscope steps in order.', items: ['Put the prepared slide on the stage.', 'Set the objective lens to the lowest magnification.', 'Adjust the focus while moving the objective lens away from the slide.'], answer: [1, 0, 2] },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'While bringing the slide and the objective lens close together, where do you look from?', options: ['From the side', 'Through the eyepiece lens', 'From under the stage'], answer: 0 }
    ] },
  { id: 'S25', lesson: 4, concept: 'Recording plant growth',
    explain: 'Observe the plant after it sprouts and record changes by focusing on the number of leaves, the height of the stem and its color. Use iodine solution to check if there is starch inside the seeds or leaves.',
    variants: [
      { type: 'multi', mode: 'normal', level: 'medium', fig: 'ch9Photo', p: 'c9sprout', q: 'When you record the growth of a plant, what do you focus on? Choose all correct answers.', options: ['The number of leaves', 'The height of the stem', 'Its color', 'The color of the pot'], answer: [0, 1, 2] },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'medium', q: 'Which solution do we use to check if there is starch inside seeds or leaves?', options: ['Iodine solution', 'Salt water', 'Sugar water'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What do we use to track things that happen over a few days?', options: ['Charts and graphs', 'Only our memory', 'A microscope'], answer: 0 }
    ] },
  { id: 'S26', lesson: 4, boss: true, concept: 'the scientific inquiry cycle',
    explain: 'The 6 steps of inquiry: 1 Question, 2 Prediction, 3 Plan, 4 Experiment & Observation, 5 Data (Results), 6 Conclusion.',
    variants: [
      { type: 'order', mode: 'boss', level: 'hard', q: 'Put the steps of scientific inquiry in order.', items: ['Plan', 'Question', 'Conclusion', 'Prediction', 'Experiment & Observation', 'Data (Results)'], answer: [1, 3, 0, 4, 5, 2] },
      { type: 'match', mode: 'boss', level: 'hard', q: 'Match each step of inquiry to what you do.', left: ['Prediction', 'Data (Results)', 'Conclusion'], right: ['Make a guess based on your past experiences', 'Organize what you investigated into tables or graphs', 'Compare your prediction with the results'], answer: [0, 1, 2] },
      { type: 'mc', mode: 'boss', level: 'hard', q: 'In which step do you decide which conditions to compare and which to keep the same?', options: ['Plan', 'Question', 'Conclusion'], answer: 0 }
    ] }
];
})();
