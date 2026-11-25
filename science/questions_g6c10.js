/* Grade 6 Science (Languages, English book) · Chapter 10 Reaction between Solutions and Metals
   Core ideas from the school book 2026/2027, both lessons (10-1 Aqueous Solutions and Metals, 10-2 What is Left After Evaporation): Point!, Warm Up, Try, Exercise and Review & Practice (pages 82-87).
   The Enrichment Corner "The Science of Change - How Metals are Reborn" (pages 88-89) and the guide "Lab Safety and Professional Tools" (pages 90-91) are bonus only (never in Daily 5).
   Source: the owner's Drive file Motafawek/g6/science/CHAPTER 10  ENG.pdf (pages 92-96 are empty note pages and the back cover).
   Idea letters: every letter is already used in g6, so this chapter goes on with the letters of Chapter 9 (the same topic):
   I7-I11 = lesson 10-1, J6-J11 = lesson 10-2, U4-U8 = Enrichment Corner and the Lab Safety guide (bonus).
   The book's words: aqueous solution, metal, shiny, luster, solid, iron, aluminum (aluminium), gold, hydrochloric acid, dilute, react, bubbles, steel wool, beaker, test tube, test tube rack, rag, pipette,
   safety goggles, ventilate, evaporate, evaporating dish, portable gas stove, wire gauze, low heat, white solid, powder, laboratory spoon, properties, hydrogen gas, recycling, wafting, gas detector tube.
   Review notes (the book prints no answers; these come from the printed text):
   - Try (1) and the Point box: aluminum and iron react with dilute hydrochloric acid and produce bubbles. Try (2) = B, Try (3) = B. Exercise (1) = B, (2) = No (it is a white solid, not shiny), (3) = No bubbles.
   - Review & Practice (1) = Acidic (A), (2) = Alkaline (C), (3) = carbon dioxide (from Chapter 9, asked again here because this chapter's review prints them), (4) = A, (5) = C, (6) = B, (7) = A.
   - The Warm Up of 10-1 also pours WATER on the metals (the second set of tubes), but the book never prints what happens there: so the water tubes are asked only as "the second set"
     (what was added to them), never as "no reaction". The question pictures never show a water tube with bubbles or without them.
   - The summary tables after each Warm Up are open activities: not asked.
   Pictures: drawn in g6_solutions.js: tubes (tap tbA | tbB | tbC; a picture of a tube before the drop never shows bubbles) and metalPowder (tap mpA | mpB).
   The items g6_i_{aluminum,steelwool,powder,goggles,stove,acid,pipette,tools,spoon,gold}.webp are used only by the game (metallab.html).
*/
(function () {
window.CHAPTER = { id: 'g6c10', title: 'Reaction between Solutions and Metals', grade: 'Grade 6', track: 'Languages' };

const NORM = { mode: 'normal', level: 'medium' }, EASY = { mode: 'normal', level: 'easy' }, QUICK = { mode: 'timed', seconds: 15, level: 'easy' }, SLOW = { mode: 'timed', seconds: 20, level: 'easy' }, BOSS = { mode: 'boss', level: 'hard' };
const mc = (q, options, o = {}) => ({ type: 'mc', ...NORM, q, options, answer: 0, ...o });
const tf = (q, truth, o = {}) => ({ type: 'tf', ...NORM, q, answer: truth ? 0 : 1, ...o });
const fill = (q, options, o = {}) => ({ type: 'fill', ...NORM, q, options, answer: 0, ...o });
const term = (q, answer, o = {}) => ({ type: 'term', ...NORM, q, answer, ...o });
const multi = (q, options, answer, o = {}) => ({ type: 'multi', ...NORM, q, options, answer, ...o });
const match = (q, left, right, o = {}) => ({ type: 'match', ...NORM, q, left, right, answer: left.map((_, i) => i), ...o });
const order = (q, items, answer, o = {}) => ({ type: 'order', ...NORM, q, items, answer, ...o });
const build = (style, q, parts, extra, o = {}) => ({ type: 'build', style, ...NORM, level: 'hard', q, parts, extra, ...o });
const tap = (diagram, q, answer, o = {}) => ({ type: 'tap', diagram, ...NORM, q, answer, ...o });
const tb = (...cols) => ({ fig: 'tubes', pic: { cols } });
const mp = cols => ({ fig: 'metalPowder', pic: { cols } });

window.IDEAS = [
  /* ---------- 10-1 Aqueous Solutions and Metals ---------- */
  { id: 'I7', lesson: 1, concept: 'Metals: shiny solid materials we use every day',
    explain: 'Metals are shiny materials with a luster and most of them are solid. We use them a lot in our daily lives, such as iron, aluminium and gold.',
    variants: [
      mc('What do metals look like?', ['Shiny, with a luster', 'Dull, like chalk', 'Clear, like water'], { ...QUICK, hint: 'Think of a new spoon or a piece of foil.' }),
      multi('Choose all the metals that the book names.', ['Iron', 'Aluminum', 'Gold', 'Sugar'], [0, 1, 2], { ...EASY, hint: 'We use them a lot in our daily lives. One option is not a metal.' }),
      fill('Most metals are ___ .', ['solid', 'gases', 'liquids'], { ...QUICK, hint: 'Think of an iron nail or a piece of aluminum.' }),
      tf('We use metals a lot in our daily lives.', true, { ...QUICK, hint: 'Think of pots, spoons and keys at home.' }),
      term('The shine that metals have.', 'Luster', { hint: 'The book says metals are shiny materials with a ...', choices: ['Bubble', 'Powder', 'Solution'] })
    ] },
  { id: 'I8', lesson: 1, concept: 'Some aqueous solutions react with metals: hydrochloric acid and aluminum or iron make bubbles',
    explain: 'Some aqueous solutions have the properties that enable them to react with metals. Hydrochloric acid can react with aluminum and iron: when you pour dilute hydrochloric acid on them, the metals react and produce bubbles.',
    variants: [
      mc('We add dilute hydrochloric acid to pieces of aluminum. What happens?', ['The aluminum reacts and produces bubbles', 'Nothing happens at all', 'The aluminum turns blue'], { ...QUICK, hint: 'Read the Point box of lesson 10-1.', ...tb({ m: 'al', l: 'acid', drop: true }) }),
      mc('Which aqueous solution in this chapter reacts with aluminum and iron?', ['Hydrochloric acid', 'Salt water', 'Sugar water'], { ...EASY, hint: 'It is an acid that we use dilute.' }),
      tf('Some aqueous solutions have properties that enable them to react with metals.', true, { ...QUICK, hint: 'Look at the first line of the Point box.' }),
      mc('We pour dilute hydrochloric acid on a ball of steel wool (iron). What do we see?', ['Bubbles', 'A blue colour', 'Ice'], { ...QUICK, hint: 'It is the same as with aluminum.', ...tb({ m: 'fe', l: 'acid', drop: true }) }),
      mc('Which statement correctly explains the properties of aqueous solutions that react with metals?', ['Hydrochloric acid can react with aluminum and iron', 'Hydrochloric acid reacts with iron, but does not react with aluminum', 'Hydrochloric acid does not react with any metal'], { hint: 'It reacts with BOTH metals of the experiment.' }),
      fill('When you pour dilute hydrochloric acid on aluminum or iron, the metals react and produce ___ .', ['bubbles', 'ice', 'smoke rings'], { ...EASY, hint: 'Think of the opening photo: one tube is full of them.' }),
      tap('tubes', 'Look at the two tubes. Tap the tube where the metal is reacting.', 'tbB', { hint: 'A metal that reacts produces bubbles.', ...tb({ m: 'al', l: 'acid', b: false, drop: true }, { m: 'al', l: 'acid', b: true }) })
    ] },
  { id: 'I9', lesson: 1, concept: 'The Warm Up: testing aluminum and iron with dilute hydrochloric acid',
    explain: 'Cut aluminum into small pieces and put them in a test tube. Roll a small amount of steel wool (iron) into a ball and put it in another test tube. Prepare two sets of tubes: use a pipette to add dilute hydrochloric acid to the first set, and another pipette to add water to the second set. Then observe the changes.',
    variants: [
      mc('Which metal is the steel wool in the experiment?', ['Iron', 'Gold', 'Aluminum'], { ...QUICK, hint: 'The book writes it in brackets: Iron (Steel wool).' }),
      mc('How do we put the aluminum into the test tube?', ['Cut into small pieces', 'As one big sheet', 'Melted'], { ...EASY, hint: 'Step 1 of the experiment.' }),
      mc('Which tool do we use to add dilute hydrochloric acid to the test tubes?', ['A pipette', 'A rag', 'A wire gauze'], { ...QUICK, hint: 'It takes up a little liquid and drops it.' }),
      mc('What do we add to the second set of test tubes?', ['Water', 'Dilute hydrochloric acid', 'Salt'], { hint: 'The first set gets the acid. The second set gets something else.' }),
      multi('Choose all the things we prepare for this experiment.', ['Dilute hydrochloric acid', 'Steel wool', 'Safety goggles', 'Litmus paper'], [0, 1, 2], { hint: 'Litmus paper was for Chapter 9.' }),
      order('Arrange the steps of the experiment.', ['Observe the changes in each set of test tubes', 'Cut aluminum into small pieces and put them in a test tube', 'Use a pipette to add dilute hydrochloric acid', 'Roll steel wool into a ball and put it in another test tube'], [1, 3, 2, 0], { hint: 'Put the metals in first, observe last.' })
    ] },
  { id: 'I10', lesson: 1, concept: 'Safety with dilute hydrochloric acid',
    explain: 'Be careful not to let the liquid touch your skin. If it does, wash it off right away with running water. Make sure to ventilate the room, and wear safety goggles.',
    variants: [
      mc('What should you wear during the experiment?', ['Safety goggles', 'Sunglasses', 'A woolen hat'], { ...QUICK, hint: 'They protect your eyes.' }),
      mc('The acid touches your skin. What should you do?', ['Wash it off right away with running water', 'Leave it to dry', 'Wipe it with a dry paper and continue'], { ...EASY, hint: 'Do it at once, with plenty of water.' }),
      tf('We should ventilate the room during the experiment.', true, { ...QUICK, hint: 'Fresh air must come in.' }),
      tf('It is fine to let dilute hydrochloric acid touch your skin.', false, { ...QUICK, hint: 'Read the Caution of the Warm Up.', explain: 'Be careful not to let the liquid touch your skin. If it does, wash it off right away with running water.' })
    ] },
  { id: 'I11', lesson: 1, boss: true, concept: 'Solutions and metals, put together',
    explain: 'Metals are shiny and mostly solid. Some aqueous solutions react with metals: dilute hydrochloric acid reacts with aluminum and iron and produces bubbles. Work with goggles, in a ventilated room, and wash the acid off your skin at once with running water.',
    variants: [
      tap('tubes', 'Tap the tube of iron that is reacting with dilute hydrochloric acid.', 'tbC', { ...BOSS, hint: 'Find the steel wool, then look for bubbles.', ...tb({ m: 'al', l: 'acid', b: true }, { m: 'fe', l: 'acid', b: false, drop: true }, { m: 'fe', l: 'acid', b: true }) }),
      match('Match each thing to what it is in the experiment.', ['Steel wool', 'Pipette', 'Safety goggles'], ['The iron', 'Adds the liquid to the tubes', 'Protects the eyes'], { ...BOSS, hint: 'Think of what each one does.' }),
      multi('Choose all the correct statements.', ['Dilute hydrochloric acid reacts with aluminum', 'Dilute hydrochloric acid reacts with iron', 'Hydrochloric acid reacts with iron but not with aluminum', 'Metals are never shiny'], [0, 1], { ...BOSS, hint: 'Check each one with the Point box.' }),
      build('what', 'What happens when you pour dilute hydrochloric acid on aluminum or iron?', ['The metals react', 'and produce bubbles'], ['The metals turn blue', 'and nothing changes'], { ...BOSS, hint: 'Two parts: what the metal does, and what you see.' }),
      multi('Choose all the safety rules of this experiment.', ['Wear safety goggles', 'Ventilate the room', 'Wash acid off your skin right away with running water', 'Let the acid dry on your skin'], [0, 1, 2], { ...BOSS, hint: 'Read the Caution of the Warm Up. One rule is wrong.' })
    ] },

  /* ---------- 10-2 What is Left After Evaporation ---------- */
  { id: 'J6', lesson: 2, concept: 'Evaporating the liquid leaves a white solid',
    explain: 'When you evaporate the liquid that resulted from aluminum reacting with dilute hydrochloric acid, a white solid appears. What is left is not shiny metal, but a dry powder.',
    variants: [
      mc('We evaporate the liquid in which aluminum reacted with dilute hydrochloric acid. What appears?', ['A white solid', 'Shiny pieces of aluminum', 'Nothing'], { ...QUICK, hint: 'The cat says: not shiny metal, but a dry ...' }),
      fill('When you evaporate the liquid, a ___ solid appears.', ['white', 'shiny silver', 'blue'], { ...QUICK, hint: 'Look at the photo of the dish at the start of the lesson.' }),
      mc('What is left after evaporating the liquid?', ['A white solid that is not a metal', 'The original shiny aluminum', 'Nothing is left'], { hint: 'It is a dry powder.' }),
      tf('After evaporating, the original shiny aluminum comes back.', false, { ...QUICK, hint: 'What was left was not shiny.', explain: 'What was left is not shiny metal, but a dry white powder.' }),
      term('The dry white thing left in the dish after evaporating the liquid.', 'White solid', { hint: 'It is a powder, and it is not shiny.', choices: ['Steel wool', 'Shiny metal', 'Water vapour'] })
    ] },
  { id: 'J7', lesson: 2, concept: 'The white solid is a new substance with completely different properties',
    explain: 'Differences from the original metal: Appearance: it is not shiny. Reaction: even if you put the remaining solid into dilute hydrochloric acid again, it will not react or produce bubbles like the original metal. We can say that the metal changed into a substance with completely different properties by reacting with the aqueous solution.',
    variants: [
      mc('We pour dilute hydrochloric acid again on the white powder. What happens?', ['No bubbles are produced', 'It reacts and produces bubbles like the metal', 'It explodes'], { ...EASY, hint: 'The powder is not the metal any more.', ...tb({ m: 'powder', l: 'acid', drop: true }) }),
      mc('Is the powder left after evaporating the same as the original aluminum?', ['No, it is a different substance', 'Yes, it is the same aluminum', 'Yes, but it is hidden'], { hint: 'Compare how they look and how they react.' }),
      mc('What do you think happened to the metal that reacted with the aqueous solution?', ['It changed into another substance with different properties', 'It is just hiding and remains as a metal', 'It turned into water'], { hint: 'Try question (2) of lesson 10-2.' }),
      tap('metalPowder', 'Tap the sample that is the original metal.', 'mpB', { hint: 'A metal is shiny.', ...mp(['powder', 'metal']) }),
      tap('metalPowder', 'Tap the sample that is the new substance left after evaporating.', 'mpA', { hint: 'It is not shiny.', ...mp(['powder', 'metal']) }),
      match('Compare the white solid with the original metal.', ['Original metal', 'White solid'], ['Shiny, and makes bubbles in dilute hydrochloric acid', 'Not shiny, and makes no bubbles'], { hint: 'Appearance and reaction.' }),
      fill('By reacting with the aqueous solution, the metal changed into a substance with completely ___ properties.', ['different', 'the same', 'hidden'], { hint: 'Read the arrow line in the Point box.' }),
      tf('The powder left after evaporation is a different substance from the metal.', true, { ...QUICK, hint: 'Try question (3) of lesson 10-2.' })
    ] },
  { id: 'J8', lesson: 2, concept: 'The evaporation experiment: tools and steps',
    explain: 'Put the liquid in which the metal reacted into an evaporating dish. Heat it gently on low heat with a portable gas stove (the dish sits on a wire gauze). Turn off the heat while there is still a little liquid left, and let the remaining heat dry it. Observe what is left, then put the powder into dilute hydrochloric acid in another test tube and check that no bubbles come out.',
    variants: [
      mc('In what do we heat the liquid?', ['An evaporating dish', 'A test tube rack', 'A rag'], { ...QUICK, hint: 'It is a small wide dish.' }),
      mc('What do we use to heat the liquid?', ['A portable gas stove', 'A pipette', 'Steel wool'], { ...QUICK, hint: 'It makes a small flame.' }),
      mc('How do we heat the liquid?', ['Gently, on low heat', 'On very high heat', 'With no heat at all'], { ...EASY, hint: 'Step 2 of the experiment says gently.' }),
      mc('When do we turn off the heat?', ['While there is still a little liquid left', 'Before we start', 'Only after the dish is completely dry'], { hint: 'The remaining heat dries the rest.' }),
      term('The small dish we heat the liquid in.', 'Evaporating dish', { hint: 'We use it to evaporate.', choices: ['Test tube', 'Beaker', 'Wire gauze'] }),
      order('Arrange the steps of the experiment.', ['Heat it gently on low heat', 'Put the liquid into an evaporating dish', 'Observe what is left', 'Turn off the heat while a little liquid is left'], [1, 0, 3, 2], { hint: 'Put the liquid in the dish first, observe last.' })
    ] },
  { id: 'J9', lesson: 2, concept: 'Safety in the evaporation experiment',
    explain: 'Do not bring your face close to the evaporating dish, so you do not breathe in the releasing fumes directly. To avoid burns, do not touch heated items until they have cooled down completely. Do not touch the remaining solid directly with your hands: use a laboratory spoon or a suitable tool.',
    variants: [
      mc('How should you take out the remaining solid?', ['With a laboratory spoon', 'With your fingers', 'By blowing on it'], { ...QUICK, hint: 'Do not touch it with your hands.' }),
      mc('Why should you not bring your face close to the evaporating dish?', ['So you do not breathe in the fumes directly', 'So the dish cools faster', 'So the powder stays white'], { hint: 'Fumes rise from the dish.' }),
      mc('Why should you not touch heated items right away?', ['To avoid burns', 'To keep the stove clean', 'To make more bubbles'], { ...QUICK, hint: 'They are still very hot.' }),
      tf('You may touch the dish as soon as you turn off the stove.', false, { hint: 'Wait until it cools down completely.', explain: 'To avoid burns, do not touch heated items until they have cooled down completely.' }),
      mc('What is the last thing you should do for safety in the experiment of evaporating an aqueous solution?', ['Turn off the heat while a little liquid is still left', 'Keep heating on high heat until it is completely dry', 'Increase the flame to speed up the evaporation'], { hint: 'Review & Practice question (7).' })
    ] },
  { id: 'J10', lesson: 2, concept: 'Review: the properties of aqueous solutions (Chapters 9 and 10)',
    explain: 'An acidic solution turns blue litmus paper red. An alkaline solution turns red litmus paper blue. Carbonated water has carbon dioxide gas dissolved in it. Metals react with some aqueous solutions and change into new substances with different properties.',
    variants: [
      mc('What property does an aqueous solution have if it turns blue litmus paper red?', ['Acidic', 'Neutral', 'Alkaline'], { ...QUICK, hint: 'Lemon juice does it.' }),
      mc('Red litmus paper turns blue. What property does the aqueous solution have?', ['Alkaline', 'Acidic', 'Neutral'], { ...QUICK, hint: 'Soapy water does it.' }),
      mc('What is the gas dissolved in carbonated water?', ['Carbon dioxide', 'Oxygen', 'Hydrogen'], { ...EASY, hint: 'It makes the bubbles of soda.' }),
      mc('Which statement is correct about metals reacting with aqueous solutions?', ['The metal changed into a new substance with different properties', 'The metal is just changing its shape, and its properties have not changed', 'The metal does not change its shape or its properties'], { hint: 'Review & Practice question (6).' })
    ] },
  { id: 'J11', lesson: 2, boss: true, concept: 'What is left after evaporation, put together',
    explain: 'Evaporating the liquid in which aluminum reacted with dilute hydrochloric acid leaves a white solid. It is not shiny and it makes no bubbles in dilute hydrochloric acid, so the metal changed into a substance with completely different properties. Heat gently, turn off the heat while a little liquid is left, keep your face away and use a laboratory spoon.',
    variants: [
      build('why', 'Why do we say the metal changed into a new substance?', ['The white solid is not shiny', 'and it does not produce bubbles in dilute hydrochloric acid'], ['The white solid is shiny', 'and it reacts like the metal'], { ...BOSS, hint: 'Think of appearance and reaction.' }),
      tap('tubes', 'Dilute hydrochloric acid was added to every tube. Tap the tube that holds the powder left after evaporation.', 'tbA', { ...BOSS, hint: 'The powder does not react, and it is white.', ...tb({ m: 'powder', l: 'acid', b: false }, { m: 'al', l: 'acid', b: true }, { m: 'fe', l: 'acid', b: true }) }),
      multi('Choose all the correct statements.', ['The white solid is not shiny', 'The white solid makes no bubbles in dilute hydrochloric acid', 'Evaporating brings the shiny metal back', 'We heat the dish on high heat until it is completely dry'], [0, 1], { ...BOSS, hint: 'Check each one with the Point box and the Caution.' }),
      match('Match each safety rule to its reason.', ['Keep your face away from the dish', 'Wait before touching heated items', 'Use a laboratory spoon'], ['So you do not breathe in the fumes', 'To avoid burns', 'So you do not touch the solid with your hands'], { ...BOSS, hint: 'Read the three lines of the Caution.' }),
      order('Arrange the whole chapter in order.', ['Evaporate the liquid in an evaporating dish', 'Pour dilute hydrochloric acid on aluminum: bubbles', 'Put the white solid in dilute hydrochloric acid: no bubbles', 'A white solid is left'], [1, 0, 3, 2], { ...BOSS, hint: 'Lesson 10-1 comes first.' })
    ] },

  /* ---------- Enrichment Corner (bonus) · The Science of Change - How Metals are Reborn ---------- */
  { id: 'U4', lesson: 2, bonus: true, concept: 'Gold stays shiny: the golden mask of Tutankhamun',
    explain: 'Tutankhamun\'s golden mask kept its beauty and luster to this day because gold is a highly stable metal. It does not react easily with surrounding substances, nor does it dissolve in strong solutions such as hydrochloric acid.',
    variants: [
      mc('Why has Tutankhamun\'s golden mask kept its shine for thousands of years?', ['Gold is a highly stable metal that does not react easily', 'Gold reacts quickly with hydrochloric acid', 'The mask was painted every year'], { hint: 'Read "Why the Pharaoh Chose Gold".' }),
      tf('Gold dissolves in hydrochloric acid.', false, { hint: 'Gold is highly stable.', explain: 'Gold does not dissolve in strong solutions such as hydrochloric acid.' }),
      fill('Gold is a highly ___ metal.', ['stable', 'weak', 'soft'], { hint: 'It does not react easily.' })
    ] },
  { id: 'U5', lesson: 2, bonus: true, concept: 'The bubbles are hydrogen gas',
    explain: 'The bubbles that form when iron or aluminum reacts with dilute hydrochloric acid are hydrogen gas. During this chemical reaction, the reactants are transformed into new substances, and this may be accompanied by the release of a certain amount of energy.',
    variants: [
      mc('What gas makes the bubbles when aluminum reacts with dilute hydrochloric acid?', ['Hydrogen gas', 'Carbon dioxide', 'Oxygen'], { hint: 'Read "The Energy Released When Metals React".' }),
      tf('In a chemical reaction, the reactants are transformed into new substances.', true, { hint: 'The metal became a white solid.' }),
      mc('What may be released during the reaction of a metal with dilute hydrochloric acid?', ['Energy', 'Gold', 'Litmus paper'], { hint: 'The enrichment says a certain amount of it.' })
    ] },
  { id: 'U6', lesson: 2, bonus: true, concept: 'Substances change but do not disappear: recycling and evaporation in industry',
    explain: 'Substances may change from one form to another during chemical reactions, but they do not disappear. Old metal tools can be recycled into new materials and products, which saves Earth\'s resources and reduces waste. The evaporation technique separates dissolved solids from solutions and is used in some industries to extract high-purity materials.',
    variants: [
      tf('During chemical reactions, substances change from one form to another, but they do not disappear.', true, { hint: 'Read "The Recycling to Reuse Resources".' }),
      mc('What can old metal tools become?', ['New materials and products, by recycling', 'Useless waste only', 'Water'], { hint: 'They are not useless waste.' }),
      mc('What does the evaporation technique do?', ['Separates dissolved solids from solutions', 'Makes metals shiny again', 'Turns water into metal'], { hint: 'The water evaporates and the solid stays.' })
    ] },

  /* ---------- Lab Safety and Professional Tools (bonus, pages 90-91) ---------- */
  { id: 'U7', lesson: 2, bonus: true, concept: 'Handling chemicals safely',
    explain: 'Always wear safety goggles to protect your eyes from chemical splashes, especially acids such as hydrochloric acid. To smell a chemical, do not bring the container close to your nose: gently wave your hand over its opening (wafting). If a chemical touches your skin, rinse it at once with a lot of running water, then tell your teacher.',
    variants: [
      mc('How should you smell a chemical?', ['Gently wave your hand over the opening toward your nose', 'Put your nose into the container', 'Breathe in deeply over it'], { hint: 'It is called wafting.' }),
      term('Waving your hand over a container to smell a chemical safely.', 'Wafting', { hint: 'The book names it the hand-... method.', choices: ['Evaporating', 'Filtering', 'Recycling'] }),
      order('Put in order what to do if a chemical touches your skin.', ['Rinse it with a lot of running water', 'Tell your teacher'], [0, 1], { hint: 'Water first.' })
    ] },
  { id: 'U8', lesson: 2, bonus: true, concept: 'How to use a gas detector tube',
    explain: 'Snap off both ends of the detector tube with the tip holder. Push it into the sampler with the arrow pointing toward the sampler, and put on the rubber cap. Pull the handle all the way out at once, lock it and wait about 1 minute. Read the scale where the colour has changed. Oxygen detector tubes get hot: do not touch them right away.',
    variants: [
      mc('Where do you read a gas detector tube?', ['Where the colour has changed', 'At the rubber cap', 'At the handle'], { hint: 'The gas changes the colour of part of the tube.' }),
      mc('Why do you put on the rubber cap?', ['So you do not get hurt by the broken glass edges', 'So the gas smells nice', 'So the tube gets hot'], { hint: 'Both ends of the tube were snapped off.' }),
      mc('How long do you wait after pulling the handle?', ['About 1 minute', 'About 1 hour', 'No time at all'], { hint: 'Step 3: draw in the gas and wait.' })
    ] }
];
})();
