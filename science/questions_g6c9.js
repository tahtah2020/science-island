/* Grade 6 Science (Languages, English book) · Chapter 9 Properties of Solutions
   Core ideas from the school book 2026/2027, both lessons (9-1 Grouping Solutions, 9-2 What is dissolved in solutions): Point!, Warm Up, Try, Exercise (pages 74-79).
   The Enrichment Corner "The Chemical Eye That Sees Invisible Forces" (pages 80-81) is bonus only (never in Daily 5).
   Idea letters (unused in g6): I = Grouping Solutions (9-1), J = What is dissolved in solutions (9-2), U = Enrichment Corner (bonus).
   The book's words: solutions, litmus paper, acidic, neutral, alkaline, lemon juice, vinegar, hydrochloric acid, salt water, sugar water, distilled water, soapy solution, limewater, ammonia solution,
   carbonated (soda, sparkling) water, baking soda, filter paper, glass rod, beaker, test tube, evaporating dish, pipette, wire gauze, portable gas stove, safety goggles, evaporate, dissolved, gas, carbon dioxide, natron.
   Review notes (the book prints no answers; these come from the printed text):
   - Try 1-(1): statement A is right (an alkaline solution turns red litmus paper blue); B and C are wrong. Try 1-(2): an example of a neutral solution = salt water, sugar water or distilled water.
   - Try 2-(1): the white solid left from salt water = salt. Try 2-(2): B (what was dissolved escaped as a gas). Exercise 1-(1) = acidic; 1-(2) = alkaline (C); 2-(1) = C (turn off the heat when only a little solution is left);
     2-(2) = dilute ammonia solution (B); 2-(3) = carbon dioxide gas.
   - The Warm Ups print no table of results. The book does not say which group carbonated water or baking soda solution belongs to, so they are never asked as acidic / neutral / alkaline.
     Only the examples of the Point box are classified (lemon juice, vinegar, hydrochloric acid; salt water, sugar water, distilled water; soapy solution, limewater, ammonia solution).
   - «Why rinse and wipe the glass rod every time» is not explained in the book: it is asked with the plain reason (so one solution does not mix with the next).
   - Sugar water leaving a solid when evaporated follows from the Point box (a solid dissolved in water stays at the bottom of the dish when the water evaporates).
   - Not asked (open activities): the tables to fill in after each Warm Up, and «write down how the solutions look and smell».
   Pictures: drawn in g6_solutions.js: litmus (tap lmA | lmB | lmC; the strips after one drop: acid = both red, neutral = unchanged, alkaline = both blue) and dishes (tap dsA | dsB; a white solid left, or empty).
   The household items (g6_i_{lemon,vinegar,saltwater,sugarwater,soapwater,sparkling,beaker,natron}.webp) are used only by the game.
*/
(function () {
window.CHAPTER = { id: 'g6c9', title: 'Properties of Solutions', grade: 'Grade 6', track: 'Languages' };

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
const lit = cols => ({ fig: 'litmus', pic: { cols } });
const dsh = cols => ({ fig: 'dishes', pic: { cols } });

window.IDEAS = [
  /* ---------- 9-1 Grouping Solutions ---------- */
  { id: 'I1', lesson: 1, concept: 'Solutions look similar but differ: three groups by litmus paper',
    explain: 'Solutions may look similar, but they differ in their properties. Solutions can be divided into 3 groups by how they change the color of litmus paper: acidic, neutral and alkaline.',
    variants: [
      mc('How can clear solutions that look similar be divided into groups?', ['By how they change the color of litmus paper', 'By how tall their containers are', 'By how heavy the test tubes are'], { ...QUICK, hint: 'Think of the paper used in the Warm Up.' }),
      fill('Solutions can be divided into ___ groups by how they change the color of litmus paper.', ['3', '2', '5'], { hint: 'Acidic, neutral and one more.' }),
      tf('Solutions that look similar always have the same properties.', false, { ...QUICK, hint: 'They may look alike but differ.', explain: 'Solutions may look similar, but they differ in their properties.' }),
      multi('Choose the three groups of solutions.', ['Acidic', 'Neutral', 'Alkaline', 'Frozen'], [0, 1, 2], { hint: 'Litmus paper tells them apart.' }),
      term('Solutions that turn blue litmus paper red.', 'Acidic solutions', { hint: 'Example: lemon juice.', choices: ['Neutral solutions', 'Alkaline solutions', 'Salt solutions'] })
    ] },
  { id: 'I2', lesson: 1, concept: 'Acidic solutions turn blue litmus paper red',
    explain: 'An acidic solution turns blue litmus paper red. Examples: lemon juice, vinegar, hydrochloric acid.',
    variants: [
      mc('What does an acidic solution do to blue litmus paper?', ['Turns it red', 'Turns it blue', 'Does not change it'], { ...QUICK, hint: 'Read the Point box of lesson 9-1.' }),
      fill('An acidic solution turns ___ litmus paper red.', ['blue', 'red', 'white'], { hint: 'It is the paper that changes colour.' }),
      mc('Which of these solutions is acidic?', ['Lemon juice', 'Sugar water', 'Soapy water'], { hint: 'It tastes sour.' }),
      tf('Vinegar is an acidic solution.', true, { ...QUICK, hint: 'It is one of the examples in the Point box.' }),
      mc('Both litmus strips show a red mark after one drop of a solution. What kind of solution is it?', ['Acidic', 'Neutral', 'Alkaline'], { hint: 'The blue strip changed to red.', ...lit(['acid']) }),
      multi('Choose all the acidic solutions.', ['Lemon juice', 'Vinegar', 'Hydrochloric acid', 'Distilled water'], [0, 1, 2], { hint: 'They turn blue litmus paper red.' }),
      mc('What type of solution turns blue litmus paper red?', ['Acidic', 'Neutral', 'Alkaline'], { hint: 'Lemon juice does it.' })
    ] },
  { id: 'I3', lesson: 1, concept: 'Alkaline solutions turn red litmus paper blue',
    explain: 'An alkaline solution turns red litmus paper blue. Examples: soapy solution, limewater, ammonia solution.',
    variants: [
      mc('What does an alkaline solution do to red litmus paper?', ['Turns it blue', 'Turns it red', 'Does not change it'], { ...QUICK, hint: 'It is the opposite of an acidic solution.' }),
      fill('An alkaline solution turns ___ litmus paper blue.', ['red', 'blue', 'green'], { hint: 'The red strip changes.' }),
      mc('Which of these solutions is alkaline?', ['Soapy solution', 'Lemon juice', 'Salt water'], { hint: 'You use it for washing.' }),
      mc('Soap water turned red litmus paper blue. What kind of solution is soapy water?', ['Alkaline', 'Acidic', 'Neutral'], { hint: 'Red turned to blue.' }),
      tf('Limewater and ammonia solution are alkaline solutions.', true, { hint: 'They are examples in the Point box.' }),
      mc('Both litmus strips show a blue mark after one drop of a solution. What kind of solution is it?', ['Alkaline', 'Acidic', 'Neutral'], { hint: 'The red strip changed to blue.', ...lit(['alkaline']) }),
      mc('Which statement represents the correct litmus paper reaction?', ['An alkaline solution turns red litmus paper blue', 'An acidic solution turns red litmus paper blue', 'A neutral solution changes the color of both litmus papers'], { hint: 'Check each sentence with the Point box.' })
    ] },
  { id: 'I4', lesson: 1, concept: 'Neutral solutions do not change the color of litmus paper',
    explain: 'A neutral solution does not change the color of either litmus paper. Examples: salt water, sugar water, distilled water.',
    variants: [
      mc('What does a neutral solution do to litmus paper?', ['It does not change the color of either paper', 'It turns both papers red', 'It turns both papers blue'], { ...QUICK, hint: 'Neutral means it takes no side.' }),
      mc('Which of these solutions is neutral?', ['Distilled water', 'Vinegar', 'Limewater'], { hint: 'It does not change the colour of either paper.' }),
      fill('Salt water and sugar water are ___ solutions.', ['neutral', 'acidic', 'alkaline'], { hint: 'They do not change litmus paper.' }),
      tf('A neutral solution changes the color of both litmus papers.', false, { hint: 'It leaves both papers as they were.', explain: 'A neutral solution does not change the color of either litmus paper.' }),
      mc('What are some neutral solutions? Choose one example.', ['Salt water', 'Lemon juice', 'Ammonia solution'], { hint: 'You can use it in cooking and it does not change litmus paper.' }),
      mc('The red strip stays red and the blue strip stays blue after one drop of a solution. What kind of solution is it?', ['Neutral', 'Acidic', 'Alkaline'], { hint: 'Neither strip changed.', ...lit(['neutral']) }),
      multi('Choose all the neutral solutions.', ['Salt water', 'Sugar water', 'Distilled water', 'Soapy water'], [0, 1, 2], { hint: 'They do not change either litmus paper.' })
    ] },
  { id: 'I5', lesson: 1, concept: 'Testing with litmus paper: the steps and the safety',
    explain: 'Put blue and red strips on the filter paper, use a glass rod to add one drop of the solution to both strips, then check the color change and group the solution. Rinse the glass rod with water and wipe it every time, ventilate the room and wear safety goggles.',
    variants: [
      mc('How many drops of the solution do you add to both litmus strips?', ['One drop', 'A whole test tube', 'Ten drops'], { ...QUICK, hint: 'A small amount is enough.' }),
      mc('Which tool do you use to add one drop of the solution onto the litmus strips?', ['A glass rod', 'Tweezers', 'A filter paper'], { hint: 'It is made of glass.' }),
      mc('What should you wear in the experiment?', ['Safety goggles', 'Gloves of wool', 'A scarf'], { hint: 'It protects your eyes.' }),
      mc('Why do you rinse the glass rod with water and wipe it off every time you change the solution?', ['So that one solution does not mix with the next one', 'So that the rod gets hot', 'So that the litmus paper dries'], { hint: 'Think of the next solution.' }),
      order('Arrange the steps of the litmus paper experiment.', ['Check the color change and group the solution', 'Put blue and red strips on the filter paper', 'Add one drop of the solution to both strips'], [1, 2, 0], { hint: 'Place the strips first.' }),
      tap('litmus', 'Tap the solution that is acidic.', 'lmC', { hint: 'An acidic solution turns the blue strip red.', ...lit(['neutral', 'alkaline', 'acid']) })
    ] },
  { id: 'I6', lesson: 1, boss: true, concept: 'Grouping solutions with litmus paper, put together',
    explain: 'Acidic solutions (lemon juice, vinegar, hydrochloric acid) turn blue litmus red; alkaline solutions (soapy solution, limewater, ammonia solution) turn red litmus blue; neutral solutions (salt water, sugar water, distilled water) change neither.',
    variants: [
      tap('litmus', 'Tap the alkaline solution.', 'lmB', { ...BOSS, hint: 'An alkaline solution turns the red strip blue.', ...lit(['acid', 'alkaline', 'neutral']) }),
      tap('litmus', 'Tap the neutral solution.', 'lmA', { ...BOSS, hint: 'Neither strip changes its colour.', ...lit(['neutral', 'acid', 'alkaline']) }),
      match('Match each solution to its group.', ['Lemon juice', 'Salt water', 'Soapy water'], ['Acidic', 'Neutral', 'Alkaline'], { ...BOSS, hint: 'Use the examples of the Point box.' }),
      match('Match each kind of solution to what it does to litmus paper.', ['Acidic', 'Neutral', 'Alkaline'], ['Turns blue litmus paper red', 'Does not change either litmus paper', 'Turns red litmus paper blue'], { ...BOSS, hint: 'Read the three lines of the Point box.' }),
      multi('Choose all the correct statements.', ['Vinegar turns blue litmus paper red', 'Limewater turns red litmus paper blue', 'Distilled water turns blue litmus paper red', 'Sugar water is alkaline'], [0, 1], { ...BOSS, hint: 'Check each solution with its group.' }),
      build('what', 'How do we group a solution using litmus paper?', ['Add one drop to a blue and a red litmus strip', 'then check how the colours change', 'and group it as acidic, neutral or alkaline'], ['Heat it until it dries', 'then weigh the litmus paper'], { ...BOSS, hint: 'Think of the steps of the Warm Up.' })
    ] },

  /* ---------- 9-2 What is dissolved in solutions ---------- */
  { id: 'J1', lesson: 2, concept: 'Evaporating a solution shows what was dissolved inside',
    explain: 'By evaporating a solution, we can find out what was dissolved inside.',
    variants: [
      mc('How can we find out what was dissolved in a clear solution?', ['By evaporating the solution', 'By shaking the test tube', 'By looking at it from far away'], { ...QUICK, hint: 'Think of heating it in a dish.' }),
      fill('By ___ a solution, we can find out what was dissolved inside.', ['evaporating', 'freezing', 'weighing'], { hint: 'The water turns into vapour.' }),
      tf('We can find out what was dissolved in a solution by evaporating it.', true, { ...QUICK, hint: 'Read the first line of the Point box of 9-2.' }),
      term('Heating a solution so that the water turns into vapour and leaves the dish.', 'Evaporating', { hint: 'It is how we find out what was dissolved.', choices: ['Freezing', 'Filtering', 'Mixing'] })
    ] },
  { id: 'J2', lesson: 2, concept: 'Solids dissolved in water stay in the dish',
    explain: 'Solids dissolved in water (such as salt or baking soda): when you evaporate the water, the dissolved substances remain at the bottom of the dish. The white solid left from salt water is salt.',
    variants: [
      mc('When salt water is evaporated, what remains at the bottom of the dish?', ['A white solid, the salt', 'Nothing', 'A gas'], { ...QUICK, hint: 'The water goes away but the salt does not.' }),
      fill('When you evaporate the water, the dissolved ___ such as salt or baking soda remain at the bottom of the dish.', ['solids', 'gases', 'clouds'], { hint: 'Salt and baking soda are solid.' }),
      mc('What is the white solid left at the bottom of the container when salt water was evaporated?', ['Salt', 'Sugar only', 'Soap'], { hint: 'It was dissolved in the water.' }),
      tap('dishes', 'Tap the dish that was left after evaporating salt water.', 'dsA', { hint: 'The dissolved salt stays in the dish.', ...dsh(['solid', 'none']) }),
      multi('Choose all the solutions that leave a solid in the dish when evaporated.', ['Salt water', 'Baking soda solution', 'Sugar water', 'Sparkling water'], [0, 1, 2], { hint: 'Which ones have a solid dissolved in them?' }),
      tf('When baking soda solution is evaporated, the baking soda stays at the bottom of the dish.', true, { hint: 'It is a dissolved solid.' })
    ] },
  { id: 'J3', lesson: 2, concept: 'Gases dissolved in water escape into the air',
    explain: 'Gases dissolved in water: even if you evaporate the water, nothing will remain, because the dissolved substance escapes into the air. Sparkling water has carbon dioxide gas dissolved in it. Dilute hydrochloric acid and dilute ammonia solution also leave nothing.',
    variants: [
      mc('Why is nothing left at the bottom of the dish when dilute hydrochloric acid is evaporated?', ['What was dissolved escaped as a gas', 'Nothing was dissolved in it', 'It melted from the heat'], { hint: 'It is a gas dissolved in water.' }),
      mc('What is the dissolved substance in sparkling (carbonated) water?', ['Carbon dioxide gas', 'Salt', 'Sugar'], { ...QUICK, hint: 'It makes the bubbles.' }),
      fill('Even if you evaporate the water of a solution of a gas, ___ will remain.', ['nothing', 'salt', 'sand'], { hint: 'The gas escapes into the air.' }),
      mc('Which of the following solutions leaves nothing behind when evaporated?', ['Dilute ammonia solution', 'Sugar water', 'Salt water'], { hint: 'Its dissolved substance is a gas.' }),
      tap('dishes', 'Tap the dish that was left after evaporating sparkling water.', 'dsB', { hint: 'The dissolved gas escapes into the air.', ...dsh(['solid', 'none']) }),
      tf('Sparkling water leaves a white solid in the dish when it is evaporated.', false, { hint: 'Its dissolved substance is a gas.', explain: 'Sparkling water has carbon dioxide gas dissolved in it. The gas escapes into the air, so nothing remains.' })
    ] },
  { id: 'J4', lesson: 2, concept: 'Safety in the evaporation experiment',
    explain: 'Heat the solution gently over low heat, turn off the heat while a little liquid is still left and let the remaining heat dry it. Do not smell the dish directly: waft the smell with your hand. Do not touch heated objects until they cool down completely.',
    variants: [
      mc('What should you be careful of in the experiment to evaporate a solution?', ['Turn off the heat when there is only a little solution left', 'Keep heating on high heat until the dish burns', 'Breathe in the smell directly near the dish'], { hint: 'Let the remaining heat do the rest.' }),
      mc('How should you smell the solution in the evaporating dish?', ['Waft the smell toward you with your hand', 'Bring your face close to the dish', 'Breathe it in deeply'], { hint: 'Keep your face away.' }),
      mc('Why should you not touch the heated objects until they cool down completely?', ['To avoid burns', 'To save the gas', 'To keep the litmus dry'], { hint: 'They are very hot.' }),
      mc('Who heats the solution gently over low heat?', ['You, with your teacher’s help', 'No one', 'A student alone on high heat'], { hint: 'Ask your teacher.' }),
      order('Arrange the steps of the evaporation experiment.', ['Observe what is left', 'Heat the solution gently over low heat', 'Transfer the solution into the evaporating dish with a pipette', 'Turn off the heat while a little liquid is left'], [2, 1, 3, 0], { hint: 'Transfer first, observe last.' })
    ] },
  { id: 'J5', lesson: 2, boss: true, concept: 'What is left in the dish, put together',
    explain: 'Salt water and baking soda solution leave a white solid at the bottom of the dish; sparkling water, dilute hydrochloric acid and dilute ammonia solution leave nothing, because their dissolved substance is a gas that escapes into the air.',
    variants: [
      match('Match each solution to what is left in the dish after evaporating it.', ['Salt water', 'Sparkling water', 'Baking soda solution', 'Dilute ammonia solution'], ['A white solid, the salt', 'Nothing', 'A white solid', 'Nothing, the gas escapes'], { ...BOSS, hint: 'Is the dissolved substance a solid or a gas?' }),
      multi('Choose all the correct statements.', ['Dissolved solids remain in the dish when the water evaporates', 'Dissolved gases escape into the air', 'Nothing is ever dissolved in sparkling water', 'Salt water leaves nothing in the dish'], [0, 1], { ...BOSS, hint: 'Think of solids and gases.' }),
      build('why', 'Why is nothing left in the dish when sparkling water is evaporated?', ['Sparkling water has carbon dioxide gas dissolved in it', 'and the gas escapes into the air'], ['The salt melts from the heat', 'because nothing was dissolved in it'], { ...BOSS, hint: 'Think of what makes the bubbles.' }),
      build('what', 'What was dissolved in a solution if a white solid was left in the dish after evaporating it?', ['A solid, like salt or baking soda', 'because dissolved solids remain at the bottom of the dish'], ['A gas that stayed in the dish', 'only the water itself'], { ...BOSS, hint: 'Which dissolved substances stay behind?' }),
      order('Arrange the evaporation experiment in order.', ['Turn off the heat while a little liquid is left', 'Transfer the solution into the evaporating dish with a pipette', 'Observe what is left', 'Heat the solution gently over low heat'], [1, 3, 0, 2], { ...BOSS, hint: 'Start with the pipette.' })
    ] },

  /* ---------- Enrichment Corner (bonus) · The "Chemical Eye" That Sees Invisible Forces ---------- */
  { id: 'U1', lesson: 1, bonus: true, concept: 'Natron: the natural alkaline powder of the ancient Egyptians',
    explain: 'Ancient Egyptians used a white powder called natron, found in desert salt lakes. It was strongly alkaline and had a powerful ability to absorb water from the body, which made it essential for creating mummies that kept their shape for thousands of years.',
    variants: [
      mc('What was the white powder that the ancient Egyptians used to make mummies called?', ['Natron', 'Limewater', 'Vinegar'], { hint: 'It was found in desert salt lakes.' }),
      mc('Natron was strongly alkaline. What could it do to a body?', ['Absorb water from it', 'Add water to it', 'Turn it red'], { hint: 'It helped the mummies keep their shape.' }),
      tf('Natron was found in desert salt lakes.', true, { hint: 'It was a white powder.' })
    ] },
  { id: 'U2', lesson: 1, bonus: true, concept: 'Acids and alkalis in our daily lives',
    explain: 'Even today, we use these properties without realizing it, such as lemon juice (acidic) for cooking and soapy water (alkaline) for cleaning.',
    variants: [
      mc('Which solution do we use for cooking in daily life and it is acidic?', ['Lemon juice', 'Soapy water', 'Distilled water'], { hint: 'It is sour.' }),
      mc('Which solution do we use for cleaning in daily life and it is alkaline?', ['Soapy water', 'Lemon juice', 'Vinegar'], { hint: 'It makes bubbles.' }),
      fill('We use lemon juice (acidic) for cooking and soapy water (___) for cleaning.', ['alkaline', 'acidic', 'neutral'], { hint: 'Soapy water turns red litmus paper blue.' })
    ] },
  { id: 'U3', lesson: 1, bonus: true, concept: 'Testing the soil and the Nile water',
    explain: 'In modern Egypt, testing the properties of solutions is used to examine the soil and the Nile River water. Farmers check whether the soil is acidic or alkaline to improve plant growth and crop yield (such as cotton and wheat), and scientists monitor the factories\' wastewater to make sure it is not strongly acidic or alkaline, to protect the fish and the birds.',
    variants: [
      mc('Why do Egyptian farmers check whether the soil is acidic or alkaline?', ['To improve plant growth and crop yield and quality', 'To make the soil heavier', 'To turn the crops red'], { hint: 'Think of cotton and wheat.' }),
      mc('What do scientists make sure about the wastewater that factories discharge into the Nile?', ['That it is not strongly acidic or alkaline', 'That it is very hot', 'That it is red'], { hint: 'It is to protect the fish and the birds.' }),
      tf('The color change of litmus paper helps scientists identify whether a solution is acidic or basic.', true, { hint: 'It is the chemical eye of the corner.' })
    ] }
];
})();
