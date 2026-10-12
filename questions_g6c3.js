/* Grade 6 Science (Languages) · Chapter 3 Digestion
   20 core ideas from the school book 2026/2027, all three lessons (3-1 to 3-3): Point!, Warm Up, Try, Exercise, Review & Practice (pages 24-33),
   plus 3 bonus ideas from "Let's Expand" (page 33): a closer look at the liver.
   Same format as the other files. Ideas: D = where food goes (3-1), S = the function of saliva (3-2), V = how absorption works (3-3), Y = bonus.
   Idea ids are unique inside Grade 6 (Chapter 1 uses A, O, B, X; Chapter 2 uses R, L).
   The book's words: digestion, food pipe, stomach, small intestine, large intestine, anus, digestive tract, saliva, starch, digestive juice,
   dilute iodine solution, blue-black, about 40 degrees Celsius, nutrients, absorbed, villi, surface area, liver, feces.
   Tap pictures (drawn in g6_body.js): digestTract -> foodpipe | stomach | liver | small | large ; salivaTubes -> blue | same ;
   gutWalls -> villi | flat ; cloths -> loops | flat
*/
window.CHAPTER = { id: 'g6-lang-ch3', title: 'Digestion', grade: 'Grade 6', track: 'Languages' };

window.IDEAS = [
  /* ---------- 3-1 Where Food Goes ---------- */
  { id: 'D1', lesson: 1, concept: 'What digestion is',
    explain: 'Breaking down food with teeth and changing it into a form that is easy to absorb is called digestion. Food is first broken down into small pieces in the mouth.',
    variants: [
      { type: 'term', mode: 'normal', level: 'medium', q: 'Breaking down food and changing it into a form that is easy to absorb.', answer: 'Digestion' },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'What do we call the process of changing food into a form that is easy to absorb into the body?', options: ['Digestion', 'Breathing', 'Burning'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Breaking down food with teeth and changing it into a form that is easy to ___ is called digestion.', options: ['absorb', 'see', 'freeze'], answer: 0 },
      { type: 'build', style: 'define', mode: 'normal', level: 'hard', q: 'What is meant by digestion?', parts: ['Breaking down food', 'and changing it into a form', 'that is easy to absorb'], extra: ['and changing it into a gas', 'that is easy to burn'] },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Where is food first broken down into small pieces?', options: ['In the mouth', 'In the large intestine', 'In the lungs'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'Food is first broken down into small pieces in the mouth.', answer: 0 }
    ] },
  { id: 'D2', lesson: 1, concept: 'The route of food',
    explain: 'Food that enters from the mouth is carried in the order of Mouth → Food pipe → Stomach → Small intestine → Large intestine, and comes out from the anus.',
    variants: [
      { type: 'order', mode: 'normal', level: 'medium', q: 'Put the organs that food passes through in order, starting after the mouth.', items: ['Stomach', 'Large intestine', 'Food pipe', 'Small intestine'], answer: [2, 0, 3, 1] },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What is the correct order that food passes through?', options: ['Mouth → Food pipe → Stomach → Small intestine → Large intestine', 'Mouth → Stomach → Food pipe → Small intestine → Large intestine', 'Mouth → Food pipe → Stomach → Large intestine → Small intestine', 'Mouth → Food pipe → Large intestine → Small intestine → Stomach'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Food goes from the mouth to the ___, and then to the stomach.', options: ['food pipe', 'lungs', 'large intestine'], answer: 0 },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'Which organ does food reach right after the stomach?', options: ['The small intestine', 'The large intestine', 'The food pipe'], answer: 0 },
      { type: 'fix', mode: 'normal', level: 'medium', q: 'Food that leaves the stomach goes next to the large intestine.', wrong: 'large', answer: 'small' },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'Food passes through the large intestine before the small intestine.', answer: 1 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'From where does what is left of the food come out of the body?', options: ['From the anus', 'From the nose', 'From the lungs'], answer: 0 }
    ] },
  { id: 'D3', lesson: 1, concept: 'The organs on the picture',
    explain: 'The path of food in order: mouth, food pipe, stomach, small intestine, large intestine, anus. Check the positions of the stomach and intestines on a picture or an anatomical model.',
    variants: [
      { type: 'tap', diagram: 'digestTract', mode: 'normal', level: 'medium', q: 'Food goes down this tube from the mouth to the stomach. Tap the food pipe.', answer: 'foodpipe' },
      { type: 'tap', diagram: 'digestTract', mode: 'normal', level: 'medium', q: 'After the food pipe, food reaches the stomach. Tap the stomach.', answer: 'stomach' },
      { type: 'tap', diagram: 'digestTract', mode: 'normal', level: 'medium', q: 'After the stomach, food goes into the small intestine. Tap the small intestine.', answer: 'small' },
      { type: 'tap', diagram: 'digestTract', mode: 'normal', level: 'medium', q: 'The last organ before the anus is the large intestine. Tap the large intestine.', answer: 'large' }
    ] },
  { id: 'D4', lesson: 1, concept: 'The digestive tract',
    explain: 'The path of food from the mouth to the anus is called the digestive tract.',
    variants: [
      { type: 'term', mode: 'normal', level: 'medium', q: 'The path of food from the mouth to the anus.', answer: 'Digestive tract' },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'What is the path of food from the mouth to the anus called?', options: ['The digestive tract', 'The windpipe', 'The blood vessels'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'The digestive tract is the path of food from the mouth to the ___.', options: ['anus', 'lungs', 'heart'], answer: 0 },
      { type: 'multi', mode: 'normal', level: 'medium', q: 'Which of these organs does food pass through? Choose all the correct answers.', options: ['Food pipe', 'Stomach', 'Small intestine', 'Lungs'], answer: [0, 1, 2] },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'The lungs are a part of the digestive tract.', answer: 1, explain: 'Food does not pass through the lungs. The path of food is: mouth, food pipe, stomach, small intestine, large intestine.' },
      { type: 'build', style: 'define', mode: 'normal', level: 'hard', q: 'What is meant by the digestive tract?', parts: ['The path of food', 'from the mouth', 'to the anus'], extra: ['from the nose', 'to the lungs'] }
    ] },
  { id: 'D5', lesson: 1, boss: true, concept: 'The journey of food',
    explain: 'Digestion is breaking down food and changing it into a form that is easy to absorb. Food is carried in the order of mouth, food pipe, stomach, small intestine, large intestine, and comes out from the anus. This path is called the digestive tract.',
    variants: [
      { type: 'order', mode: 'boss', level: 'hard', q: 'Put the journey of food in order.', items: ['Small intestine', 'Mouth', 'Large intestine', 'Food pipe', 'Stomach'], answer: [1, 3, 4, 0, 2] },
      { type: 'mc', style: 'story', mode: 'boss', level: 'hard', q: 'Nour ate a piece of bread. It has just left her stomach. Which organ does it enter next, and which one after that?', options: ['The small intestine, then the large intestine', 'The large intestine, then the small intestine', 'The food pipe, then the small intestine'], answer: 0 },
      { type: 'fill', mode: 'boss', level: 'hard', q: 'Mouth → Food pipe → Stomach → ___ → Large intestine', options: ['Small intestine', 'Lungs', 'Windpipe'], answer: 0 },
      { type: 'match', mode: 'boss', level: 'hard', q: 'Match each word to its meaning.', left: ['Digestion', 'Digestive tract'], right: ['Breaking down food and changing it into a form that is easy to absorb', 'The path of food from the mouth to the anus'], answer: [0, 1] },
      { type: 'multi', mode: 'boss', level: 'hard', q: 'Choose all the correct statements.', options: ['Food is first broken down into small pieces in the mouth', 'The food pipe comes before the stomach', 'The large intestine comes before the small intestine', 'Food passes through the lungs'], answer: [0, 1] },
      { type: 'tap', diagram: 'digestTract', mode: 'boss', level: 'hard', q: 'A bite of food has left the stomach. Tap the organ it enters next.', answer: 'small' }
    ] },

  /* ---------- 3-2 The Function of Saliva ---------- */
  { id: 'S1', lesson: 2, concept: 'The function of saliva',
    explain: 'Saliva in the mouth has the function of breaking down starch contained in food. Starch contained in food is changed into something else by saliva.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What kind of function does the saliva in the mouth have?', options: ['It breaks down starch contained in food', 'It carries oxygen to the whole body', 'It absorbs water from food'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Saliva in the mouth has the function of breaking down ___ contained in food.', options: ['starch', 'water', 'salt'], answer: 0 },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'Starch contained in food is changed into something else by saliva.', answer: 0 },
      { type: 'build', style: 'function', mode: 'normal', level: 'hard', q: 'What is the function of saliva?', parts: ['Saliva in the mouth', 'breaks down', 'starch contained in food'], extra: ['carries', 'oxygen contained in air'] },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Rice and bread contain starch. Which liquid in the mouth breaks down the starch?', options: ['Saliva', 'Limewater', 'Iodine solution'], answer: 0 },
      { type: 'fix', mode: 'normal', level: 'medium', q: 'Saliva in the mouth has the function of breaking down water contained in food.', wrong: 'water', answer: 'starch' }
    ] },
  { id: 'S2', lesson: 2, concept: 'Digestive juices',
    explain: 'A liquid that has the function of digesting food, like saliva, is called a digestive juice. Digestive juices are produced not only in the mouth, but also in the stomach and intestines.',
    variants: [
      { type: 'term', mode: 'normal', level: 'medium', q: 'A liquid that has the function of digesting food, like saliva.', answer: 'Digestive juice' },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'What do we call a liquid contained in the body, like saliva, that breaks down food?', options: ['A digestive juice', 'Limewater', 'A blood vessel'], answer: 0 },
      { type: 'multi', mode: 'normal', level: 'medium', q: 'Where are digestive juices produced? Choose all the correct answers.', options: ['In the mouth', 'In the stomach', 'In the intestines', 'In the lungs'], answer: [0, 1, 2] },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'Digestive juices are produced only in the mouth.', answer: 1 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Saliva is a digestive ___.', options: ['juice', 'tract', 'gas'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which of these is a digestive juice?', options: ['Saliva', 'Iodine solution', 'Limewater'], answer: 0 }
    ] },
  { id: 'S3', lesson: 2, concept: 'The saliva experiment: the steps',
    explain: 'Put the dilute starch solution into two test tubes with a dropper. Put a cotton swab soaked with saliva into one test tube, and a cotton swab soaked with water into the other test tube. Put hot water of about 40 degrees Celsius in a beaker, and put the two test tubes in it for a few minutes. Then add 1 or 2 drops of dilute iodine solution to the warmed test tubes and compare the color changes.',
    variants: [
      { type: 'order', mode: 'normal', level: 'medium', q: 'Put the steps of the saliva experiment in order.', items: ['Add 1 or 2 drops of dilute iodine solution and compare the color changes', 'Put the dilute starch solution into two test tubes', 'Put the two test tubes in hot water of about 40 degrees Celsius for a few minutes', 'Put a swab soaked with saliva into one test tube, and a swab soaked with water into the other'], answer: [1, 3, 2, 0] },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'In the saliva experiment, what is put into the two test tubes first?', options: ['Dilute starch solution', 'Limewater', 'Hot water'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What is the difference between the two test tubes?', options: ['One has a swab soaked with saliva, the other a swab soaked with water', 'One has starch, the other has no starch', 'One is put in the hot water, the other is not'], answer: 0 },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'Which solution do you add to the warmed test tubes at the end?', options: ['Dilute iodine solution', 'Limewater', 'Salt water'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'In the saliva experiment, both test tubes have dilute starch solution.', answer: 0 },
      { type: 'multi', mode: 'normal', level: 'medium', q: 'Which of these do you prepare for the saliva experiment? Choose all the correct answers.', options: ['Test tubes', 'Dilute iodine solution', 'Cotton swabs', 'A candle'], answer: [0, 1, 2] }
    ] },
  { id: 'S4', lesson: 2, concept: 'Why about 40 degrees Celsius',
    explain: 'The reason we put the test tubes in hot water of about 40 degrees Celsius is to make the same environment as inside the body.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'In the experiment to check the function of saliva, why do you warm the test tubes in hot water of about 40 degrees Celsius?', options: ['To make it about the same temperature as inside the body', 'To disinfect', 'To evaporate the water'], answer: 0 },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'About how hot is the water in the beaker in the saliva experiment?', options: ['About 40 degrees Celsius', 'About 100 degrees Celsius', 'About 0 degrees Celsius'], answer: 0 },
      { type: 'build', style: 'why', mode: 'normal', level: 'hard', q: 'We put the test tubes in hot water of about 40 degrees Celsius.', parts: ['To make', 'the same environment', 'as inside the body'], extra: ['a colder environment', 'as inside the fridge'] },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'The test tubes are put in hot water of about 40 degrees Celsius to evaporate the water.', answer: 1 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Hot water of about 40 degrees Celsius makes the same environment as inside the ___.', options: ['body', 'fridge', 'oven'], answer: 0 }
    ] },
  { id: 'S5', lesson: 2, concept: 'The results of the saliva experiment',
    explain: 'When the iodine solution was added, the test tube with starch and water changed to blue-black. The test tube with starch and saliva did not change.',
    variants: [
      { type: 'multi', mode: 'normal', level: 'medium', q: 'Which statements correctly explain the results of the saliva experiment? Choose all the correct answers.', options: ['The one mixed with water and starch changed to blue-black with the iodine solution', 'The one mixed with saliva and starch had no change even when the iodine solution was dropped', 'The one mixed with water and starch had no change even when the iodine solution was dropped', 'The one mixed with saliva and starch changed to blue-black with the iodine solution'], answer: [0, 1] },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'After mixing saliva and starch and warming it, did the color change when you added the iodine solution?', options: ['It did not change', 'It turned blue-black'], answer: 0 },
      { type: 'tap', diagram: 'salivaTubes', mode: 'normal', level: 'medium', q: 'Iodine solution was added to the two warmed test tubes. Tap the test tube that had the swab soaked with saliva.', answer: 'same' },
      { type: 'tap', diagram: 'salivaTubes', mode: 'normal', level: 'medium', q: 'Iodine solution was added to the two warmed test tubes. Tap the test tube that had the swab soaked with water.', answer: 'blue' },
      { type: 'table', mode: 'normal', level: 'hard', q: 'What happened in each test tube when the iodine solution was added?', cols: ['Changed to blue-black', 'Did not change'], items: ['Starch and water', 'Starch and saliva'], answer: [0, 1] },
      { type: 'tf', mode: 'timed', seconds: 15, level: 'easy', q: 'The test tube with starch and water changed to blue-black with the iodine solution.', answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What happens to the color of the iodine solution when it is added to the mixture of starch and saliva, after it was warmed and left for a while?', options: ['It does not change', 'It turns blue-black', 'It turns dark red', 'It turns reddish brown'], answer: 0 }
    ] },
  { id: 'S6', lesson: 2, concept: 'What the experiment shows',
    explain: 'From the results of the experiment we confirm that the starch is broken down due to the function of saliva. That is why the test tube with saliva did not change to blue-black: its starch was changed into something else.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What do the results of the saliva experiment confirm?', options: ['The starch is broken down due to the function of saliva', 'Saliva turns into starch', 'Water breaks down starch'], answer: 0 },
      { type: 'build', style: 'why', mode: 'normal', level: 'hard', q: 'The test tube with saliva did not change to blue-black with the iodine solution.', parts: ['Because the starch', 'was broken down', 'by the saliva'], extra: ['was made bigger', 'by the hot water'] },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'In the test tube with water, the starch was broken down.', answer: 1 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'In which test tube was the starch broken down?', options: ['The one with the swab soaked with saliva', 'The one with the swab soaked with water', 'Both test tubes'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'The starch is broken down due to the function of ___.', options: ['saliva', 'iodine', 'water'], answer: 0 }
    ] },
  { id: 'S7', lesson: 2, boss: true, concept: 'Saliva and starch',
    explain: 'Saliva is a digestive juice: it breaks down the starch contained in food. In the experiment, the test tube with starch and water changed to blue-black with the iodine solution, but the one with starch and saliva did not change, because its starch was broken down. The test tubes are warmed at about 40 degrees Celsius to make the same environment as inside the body.',
    variants: [
      { type: 'mc', style: 'story', mode: 'boss', level: 'hard', q: 'Hana puts dilute starch solution into two test tubes. She adds a swab soaked with water to tube A and a swab soaked with saliva to tube B, and warms both in hot water of about 40 degrees Celsius. Then she adds iodine solution to both. What does she see?', options: ['Tube A changes to blue-black, and tube B does not change', 'Tube B changes to blue-black, and tube A does not change', 'Both tubes change to blue-black', 'Neither tube changes'], answer: 0 },
      { type: 'table', mode: 'boss', level: 'hard', q: 'Compare between the two test tubes.', cols: ['Starch and water', 'Starch and saliva'], items: ['Changed to blue-black with the iodine solution', 'Did not change with the iodine solution', 'Its starch was broken down', 'Its starch is still there'], answer: [0, 1, 1, 0] },
      { type: 'match', mode: 'boss', level: 'hard', q: 'Match each thing to its job in the experiment.', left: ['Saliva', 'Hot water of about 40 degrees Celsius', 'Iodine solution'], right: ['Breaks down the starch', 'Makes the same environment as inside the body', 'Its color shows if the starch is still there'], answer: [0, 1, 2] },
      { type: 'multi', mode: 'boss', level: 'hard', q: 'Choose all the correct statements.', options: ['Saliva is a digestive juice', 'Digestive juices are also produced in the stomach and intestines', 'The test tube with starch and saliva changed to blue-black with the iodine solution', 'The test tubes are put in hot water to evaporate the water'], answer: [0, 1] },
      { type: 'build', style: 'why', mode: 'boss', level: 'hard', q: 'When you chew rice or bread, its starch is changed into something else.', parts: ['Because saliva in the mouth', 'has the function of', 'breaking down starch'], extra: ['has no way of', 'breaking down the teeth'] }
    ] },

  /* ---------- 3-3 How Absorption Works ---------- */
  { id: 'V1', lesson: 3, concept: 'Where nutrients are absorbed',
    explain: 'The nutrients from digested food are mainly absorbed in the small intestine along with water.',
    variants: [
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'Where are the digested nutrients mainly absorbed into the blood?', options: ['Small intestine', 'Food pipe', 'Stomach', 'Large intestine'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'The nutrients from digested food are mainly absorbed in the ___ along with water.', options: ['small intestine', 'large intestine', 'food pipe'], answer: 0 },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'The nutrients from digested food are mainly absorbed in the food pipe.', answer: 1 },
      { type: 'tap', diagram: 'digestTract', mode: 'normal', level: 'medium', q: 'Tap the organ in which the nutrients from digested food are mainly absorbed.', answer: 'small' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What is absorbed in the small intestine along with the nutrients?', options: ['Water', 'Limewater', 'Air'], answer: 0 }
    ] },
  { id: 'V2', lesson: 3, concept: 'The large intestine and what is left',
    explain: 'After the small intestine, more water is absorbed in the large intestine, and what is left is eliminated from the anus as feces.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What is absorbed in the large intestine?', options: ['More water', 'Most of the nutrients', 'Oxygen'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'After the small intestine, more ___ is absorbed in the large intestine.', options: ['water', 'starch', 'air'], answer: 0 },
      { type: 'order', mode: 'normal', level: 'medium', q: 'Put what happens to digested food in order.', items: ['What is left is eliminated from the anus as feces', 'Nutrients are absorbed in the small intestine along with water', 'More water is absorbed in the large intestine'], answer: [1, 2, 0] },
      { type: 'tf', mode: 'timed', seconds: 15, level: 'easy', q: 'What is left of the food is eliminated from the anus as feces.', answer: 0 },
      { type: 'tap', diagram: 'digestTract', mode: 'normal', level: 'medium', q: 'Tap the organ in which more water is absorbed, after the nutrients were absorbed.', answer: 'large' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What happens to what is left after the large intestine?', options: ['It is eliminated from the anus as feces', 'It goes back to the stomach', 'It is carried to the lungs'], answer: 0 }
    ] },
  { id: 'V3', lesson: 3, concept: 'Villi',
    explain: 'Villi are small bumps on the inside of the small intestine. They are lined up closely and they absorb nutrients.',
    variants: [
      { type: 'term', mode: 'normal', level: 'medium', q: 'The small bumps on the inner wall of the small intestine that absorb nutrients.', answer: 'Villi' },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'What do we call the small bumps on the inner wall of the small intestine that absorb nutrients?', options: ['Villi', 'Gills', 'Alveoli'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Villi are small bumps on the inside of the ___.', options: ['small intestine', 'windpipe', 'teeth'], answer: 0 },
      { type: 'tap', diagram: 'gutWalls', mode: 'normal', level: 'medium', q: 'Tap the wall that has villi.', answer: 'villi' },
      { type: 'tf', mode: 'timed', seconds: 15, level: 'easy', q: 'Villi are lined up closely on the inner wall of the small intestine.', answer: 0 }
    ] },
  { id: 'V4', lesson: 3, concept: 'Why villi are an advantage',
    explain: 'Because villi are lined up closely, the inner surface area of the small intestine becomes larger, and it can absorb nutrients and water efficiently.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What is the advantage of having villi on the wall of the small intestine?', options: ['The surface area of the wall of the small intestine becomes larger, and nutrients can be absorbed efficiently', 'It makes it easier to swallow food', 'It makes it easier for nutrients to pass through', 'It stores the nutrients'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Because villi are lined up closely, the inner ___ area of the small intestine becomes larger.', options: ['surface', 'dark', 'empty'], answer: 0 },
      { type: 'build', style: 'why', mode: 'normal', level: 'hard', q: 'The small intestine can absorb nutrients and water efficiently.', parts: ['Because the villi', 'make its inner surface area', 'larger'], extra: ['make its outer color', 'smaller'] },
      { type: 'fix', mode: 'normal', level: 'medium', q: 'Because villi are lined up closely, the inner surface area of the small intestine becomes smaller.', wrong: 'smaller', answer: 'larger' },
      { type: 'tap', diagram: 'gutWalls', mode: 'normal', level: 'hard', q: 'Tap the wall that has the larger surface area.', answer: 'villi' },
      { type: 'tf', mode: 'timed', seconds: 15, level: 'easy', q: 'Villi make the inner surface area of the small intestine larger.', answer: 0 }
    ] },
  { id: 'V5', lesson: 3, concept: 'Just like a towel',
    explain: 'A cloth with many loop-like threads, like a towel, absorbs water better than a flat cloth. Just like a towel, the wall of the small intestine has bumps, which increases the places to absorb nutrients.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which cloth absorbs water better?', options: ['A cloth with many loop-like threads', 'A flat cloth', 'Both absorb the same'], answer: 0 },
      { type: 'tap', diagram: 'cloths', mode: 'normal', level: 'medium', q: 'Tap the cloth that absorbs water better.', answer: 'loops' },
      { type: 'match', mode: 'normal', level: 'hard', q: 'Match the towel to the small intestine.', left: ['The loop-like threads of the towel', 'The water the towel absorbs'], right: ['The bumps (villi) on the wall of the small intestine', 'The nutrients the small intestine absorbs'], answer: [0, 1] },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'A flat cloth absorbs water better than a cloth with many loop-like threads.', answer: 1 },
      { type: 'build', style: 'why', mode: 'normal', level: 'hard', q: 'The wall of the small intestine is just like a towel.', parts: ['Because it has bumps,', 'which increases the places', 'to absorb nutrients'], extra: ['which closes the places', 'to absorb light'] }
    ] },
  { id: 'V6', lesson: 3, concept: 'From the small intestine to the whole body',
    explain: 'The nutrients absorbed in the small intestine are carried to the whole body by the blood, passing through the liver.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What carries the absorbed nutrients to the body?', options: ['Blood vessels', 'Nerves', 'Muscles'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Where do the nutrients absorbed in the small intestine pass through first to be carried to the whole body?', options: ['Liver', 'Stomach', 'Large intestine'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'The nutrients absorbed in the small intestine are carried to the whole body by the ___.', options: ['blood', 'air', 'saliva'], answer: 0 },
      { type: 'order', mode: 'normal', level: 'medium', q: 'Put the path of the absorbed nutrients in order.', items: ['They pass through the liver', 'They are carried to the whole body', 'They are absorbed in the small intestine and enter the blood'], answer: [2, 0, 1] },
      { type: 'tap', diagram: 'digestTract', mode: 'normal', level: 'hard', q: 'The absorbed nutrients pass through this organ first. Tap the liver.', answer: 'liver' },
      { type: 'tf', mode: 'timed', seconds: 15, level: 'easy', q: 'The absorbed nutrients are carried to the whole body by the blood.', answer: 0 }
    ] },
  { id: 'V7', lesson: 3, concept: 'The liver and the nutrients',
    explain: 'The liver works to store some of the nutrients and send them out to the whole body when needed.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What does the liver do with the nutrients?', options: ['It stores some of them and sends them out to the whole body when needed', 'It turns all of them into feces', 'It sends them to the lungs to be breathed out'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'The liver works to ___ some of the nutrients and send them out to the whole body when needed.', options: ['store', 'burn', 'freeze'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'The liver stores some of the nutrients.', answer: 0 },
      { type: 'build', style: 'function', mode: 'normal', level: 'hard', q: 'What is the function of the liver with the nutrients?', parts: ['The liver stores', 'some of the nutrients', 'and sends them out when needed'], extra: ['all of the feces', 'and breathes them out at night'] },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'When does the liver send the stored nutrients out to the whole body?', options: ['When needed', 'Only at night', 'Never'], answer: 0 }
    ] },
  { id: 'V8', lesson: 3, boss: true, concept: 'From food to the whole body',
    explain: 'The nutrients from digested food are mainly absorbed in the small intestine along with water. The villi make its inner surface area larger, so it absorbs efficiently. The blood carries the nutrients through the liver to the whole body. More water is absorbed in the large intestine, and what is left is eliminated from the anus as feces.',
    variants: [
      { type: 'match', mode: 'boss', level: 'hard', q: 'Complete the sentence: “The nutrients are mainly absorbed in the (1). They are carried by the (2) through the (3) to the whole body.”', left: ['(1)', '(2)', '(3)'], right: ['small intestine', 'blood', 'liver'], answer: [0, 1, 2] },
      { type: 'table', mode: 'boss', level: 'hard', q: 'Compare between the small intestine and the large intestine.', cols: ['Small intestine', 'Large intestine'], items: ['Nutrients are mainly absorbed here', 'Has villi on its inner wall', 'More water is absorbed here', 'Food reaches it last, before the anus'], answer: [0, 0, 1, 1] },
      { type: 'mc', style: 'story', mode: 'boss', level: 'hard', q: 'Karim eats a boiled egg. Its nutrients are absorbed in his small intestine. How do they reach the muscles of his arms?', options: ['The blood carries them, passing through the liver', 'They travel through the food pipe', 'The large intestine pushes them there'], answer: 0 },
      { type: 'order', mode: 'boss', level: 'hard', q: 'Put the journey of the nutrients in order.', items: ['They are carried to the whole body', 'Food is digested', 'They pass through the liver', 'They are absorbed through the villi of the small intestine into the blood'], answer: [1, 3, 2, 0] },
      { type: 'multi', mode: 'boss', level: 'hard', q: 'Choose all the correct statements.', options: ['Villi make the inner surface area of the small intestine larger', 'The liver stores some of the nutrients', 'Nutrients are mainly absorbed in the large intestine', 'Nerves carry the absorbed nutrients to the body'], answer: [0, 1] },
      { type: 'build', style: 'why', mode: 'boss', level: 'hard', q: 'A wall with villi absorbs more than a flat wall.', parts: ['Because the villi', 'increase the places', 'to absorb nutrients'], extra: ['decrease the places', 'to swallow food'] }
    ] },

  /* ---------- Bonus: "Let's Expand" (page 33), a closer look at the liver: enrichment, not in the core 20 ---------- */
  { id: 'Y1', lesson: 3, bonus: true, concept: 'The liver: nutrients as energy',
    explain: 'The liver converts some nutrients into a form that is easy for the body to use, stores them as energy, and sends them out to the whole body when needed.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What does the liver do with some nutrients?', options: ['It converts them into a form that is easy for the body to use and stores them as energy', 'It turns them into limewater', 'It breathes them out as a gas'], answer: 0 },
      { type: 'tf', mode: 'normal', level: 'easy', q: 'The liver stores some nutrients as energy.', answer: 0 }
    ] },
  { id: 'Y2', lesson: 3, bonus: true, concept: 'The liver and harmful substances',
    explain: 'The liver breaks down harmful substances produced in the body so they can be eliminated.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What does the liver do to harmful substances produced in the body?', options: ['It breaks them down so they can be eliminated', 'It stores them forever', 'It sends them to the mouth'], answer: 0 },
      { type: 'tf', mode: 'normal', level: 'easy', q: 'The liver breaks down harmful substances produced in the body.', answer: 0 }
    ] },
  { id: 'Y3', lesson: 3, bonus: true, concept: 'The liver makes a digestive juice',
    explain: 'The liver produces a digestive juice that helps break down and absorb fat.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What does the digestive juice produced by the liver help with?', options: ['Breaking down and absorbing fat', 'Breaking down bones', 'Carrying oxygen'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'The liver produces a digestive juice that helps break down and absorb ___.', options: ['fat', 'air', 'limewater'], answer: 0 },
      { type: 'multi', mode: 'normal', level: 'medium', q: 'Which of these are functions of the liver? Choose all the correct answers.', options: ['It stores some nutrients as energy', 'It breaks down harmful substances produced in the body', 'It produces a digestive juice that helps break down and absorb fat', 'It exchanges oxygen and carbon dioxide'], answer: [0, 1, 2] }
    ] }
];
