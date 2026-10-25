/* English · Grade 5 · Term 1 · Unit 5 "Our World, Our Resources" · ministry book "English Primary 5", first term 2026/2027 (book pages 77-91)
   One English book for both tracks (subject lang { lang: 'en', ar: 'en' }), so there is no _ar file.
   Lessons: 1 The Gifts of Nature (pp 78-80) · 2 Metals and Minerals in Our World + comparative adjectives (pp 81-83) · 3 Story Time: "Just Watch!" + prefixes (pp 84-86)
            4 Writing: Who Am I? (pp 87-88) · 5 Think and Create: A Poster (p 89) · Quick Review, Self-Assessment (pp 90-91) and Review 2 items on this unit (pp 106-107), spread over the lessons
   Idea letters (one per lesson): T, U, V, W, X.  Boss ideas: T6, U7, V6, W4, X3.
   Rules: answers of mc/fill at index 0 (the page shuffles) · one Boss idea per lesson (every variant mode:'boss') · about a third timed (10-20 s, easy recall)
          distractors = real misconceptions · term/fix answers ≤ 18 letters · core and Boss only from the school book.
   Tap pictures (english/g5_art.js): resources6 -> sunlight | fossilfuel | soil | minerals | freshwater | wind
                                    gifts6     -> cotton | wheat | gold | ship | digger | path
   Pictures: the owner's illustrations (unit_illustrations.zip, 25 Oct 2026), english/assets/res_*.jpg (no captions; the corner mark cropped off).
   Review notes:
   - Listening activities (audio) are asked as reading questions. Open speaking, "Think", drawing, role-play and writing tasks are not asked
     (p 78 ex 1, p 79 Think, p 80 ex 9, p 81 ex 1 and Think, p 82 ex 6, p 84 Think, p 87 ex 1 and Think, p 88 ex 3, p 89 poster, p 90 ex 3).
   - Page 79 ex 5 item 2 "Where can we find gold in Egypt?": the dialogue says "Egypt's deserts"; the text of lesson 2 says "the Eastern Desert". Both are used, each with its own text.
   - Page 82 ex 5 item 1 "Why does real jewelry cost so much money?": not printed as such; asked as "jewelry is made of gold, and diamond is even more valuable than gold" (printed facts).
   - Page 83 ex 7 item 2 "Copper is ___ (valuable) than diamond": the book's rule allows "more" or "less"; the text says copper is cheaper than gold and diamond is more valuable than gold, so the site answers "less valuable".
     Ex 8 item 3 "copper - gold (useful)" has no printed answer about which is more useful: only the form "more useful" is asked.
   - Page 85 ex 4 item 4 "Why did the big ship and the little digger become best friends?": the story never says they became friends: not asked.
   - Page 86: the book's picture shows the misspelled word "nesessary" on purpose (I always misspell the word "necessary"). The stress rule is asked as printed
     (one-syllable base: stress on the base word; two-syllable base: often on the prefix); the audio exercise is asked as these rules.
   - Page 90 ex 1 (number the pictures) is asked as the site's own tap picture with the same six words. */
(function () {
window.CHAPTER = { id: 'eg5u5', title: 'Our World, Our Resources' };

window.IDEAS = [
  /* ---------- Lesson 1 · The Gifts of Nature ---------- */
  { id: 'T1', lesson: 1, concept: 'Six natural resources',
    explain: 'Natural resources are things from nature that help us live: sunlight (light from the sun, important for life), fossil fuel (fuels like coal and oil formed from ancient remains), soil (the top layer of earth in which plants grow), minerals (natural substances found in the earth), water and wind (moving air that can be used for energy).',
    variants: [
      { type: 'tap', diagram: 'resources6', mode: 'normal', level: 'easy', q: 'Tap the sunlight.', answer: 'sunlight' },
      { type: 'tap', diagram: 'resources6', mode: 'normal', level: 'easy', q: 'Tap the fossil fuel.', answer: 'fossilfuel' },
      { type: 'tap', diagram: 'resources6', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap the soil.', answer: 'soil' },
      { type: 'tap', diagram: 'resources6', mode: 'normal', level: 'easy', q: 'Tap the minerals.', answer: 'minerals' },
      { type: 'tap', diagram: 'resources6', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap the water.', answer: 'freshwater' },
      { type: 'tap', diagram: 'resources6', mode: 'normal', level: 'easy', q: 'Tap the wind.', answer: 'wind' }
    ] },
  { id: 'T2', lesson: 1, concept: 'Words and their definitions',
    explain: 'Natural resources: things from nature that help us live. Fertile: a land with rich soil to grow food. Minerals: crystals and metals, like gold and copper. Electricity: the energy used to power homes and machines. Cotton: a soft, white plant that is used to make fabric.',
    variants: [
      { type: 'match', mode: 'normal', level: 'medium', q: 'Match the words to their definitions.', left: ['natural resources', 'fertile', 'minerals', 'electricity', 'cotton'], right: ['things from nature that help us live', 'a land with rich soil to grow food', 'crystals and metals, like gold and copper', 'the energy used to power homes and machines', 'a soft, white plant that is used to make fabric'], answer: [0, 1, 2, 3, 4] },
      { type: 'term', mode: 'normal', level: 'medium', q: 'A soft, white plant that is used to make fabric.', answer: 'Cotton', choices: ['Wheat', 'Soil', 'Minerals'] },
      { type: 'term', mode: 'normal', level: 'medium', q: 'The energy used to power homes and machines.', answer: 'Electricity', choices: ['Sunlight', 'Soil', 'Cotton'] },
      { type: 'term', mode: 'normal', level: 'medium', q: 'Things from nature that help us live.', answer: 'Natural resources', choices: ['Minerals', 'Machines', 'Buildings'] },
      { type: 'tap', diagram: 'gifts6', mode: 'normal', level: 'easy', q: 'Tap the plant that is used to make fabric.', answer: 'cotton' },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'A fertile land has ___.', options: ['rich soil to grow food', 'no water', 'only sand', 'tall buildings'], answer: 0 }
    ] },
  { id: 'T3', lesson: 1, concept: 'Treasures of Egypt: the Nile, oil and gas',
    explain: 'Natural resources are things we find in nature, like water and trees. The Nile River provides water for drinking and farming: it is the most important water resource in Egypt. Egypt has oil and natural gas; Ali’s uncle works for an oil company. Oil and natural gas are used to make fuel and electricity.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What are natural resources?', options: ['Things we find in nature, like water and trees', 'Things made in factories', 'Only gold and silver', 'Machines that dig'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What does the Nile River provide?', options: ['Water for drinking and farming', 'Oil and gas', 'Gold and iron', 'Cotton fabric'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'The Nile River is the most important ___ resource in Egypt.', options: ['water', 'wind', 'sand', 'oil'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What are oil and natural gas used to make?', options: ['Fuel and electricity', 'Jewelry and coins', 'Fabric', 'Bread'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'Ali’s uncle works for an oil company.', answer: 0 }
    ] },
  { id: 'T4', lesson: 1, concept: 'Farming and minerals in Egypt',
    explain: 'We grow cotton, wheat and many kinds of fruit. The fertile land along the Nile and in the Delta region helps us grow food. Egypt’s deserts contain gold, iron and other minerals. They’re used to make jewelry, make buildings and help our country grow.',
    variants: [
      { type: 'multi', mode: 'normal', level: 'medium', q: 'What do we grow in Egypt? Choose all the correct answers.', options: ['Cotton', 'Wheat', 'Many kinds of fruit', 'Gold'], answer: [0, 1, 2] },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Where can we find gold in Egypt?', options: ['In Egypt’s deserts', 'In the Nile River', 'In the Delta fields', 'In the barns'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'Egypt’s land along the Nile is ___, so we can grow food.', options: ['fertile', 'poor', 'dry', 'wise'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'Natural resources like minerals help our country ___.', options: ['grow', 'sleep', 'play', 'write'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Egypt’s deserts contain many ___, such as gold and iron.', options: ['minerals', 'companies', 'crops', 'secrets'], answer: 0 },
      { type: 'tap', diagram: 'gifts6', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap the wheat.', answer: 'wheat' }
    ] },
  { id: 'T5', lesson: 1, concept: 'Who said it? Mr. Hani, Ali and Mona',
    explain: 'Mona: “Minerals are used to make jewelry, make buildings, and help our country grow.” Mr. Hani: “The Nile is the most important water resource in Egypt.” Ali: “Natural resources are things we find in nature, like water and trees.”',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Who said: “Minerals are used to make jewelry and make new buildings”?', options: ['Mona', 'Ali', 'Mr. Hani'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Who said: “The Nile is the most important water resource in Egypt”?', options: ['Mr. Hani', 'Mona', 'Ali'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Who said: “Natural resources are things found in nature”?', options: ['Ali', 'Mona', 'Mr. Hani'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Who said: “We grow cotton, wheat, and many kinds of fruit”?', options: ['Mona', 'Ali', 'Mr. Hani'], answer: 0 }
    ] },
  { id: 'T6', lesson: 1, boss: true, concept: 'The gifts of nature (Boss)',
    explain: 'Sunlight is light from the sun, important for life. Fossil fuels are fuels like coal and oil formed from ancient remains; fossil fuel is used to generate electricity. Soil is the top layer of earth in which plants grow. Wind is moving air that can be used for energy. Gold and copper are valuable resources.',
    variants: [
      { type: 'tap', diagram: 'resources6', mode: 'boss', level: 'medium', q: 'Tap the top layer of earth in which plants grow.', answer: 'soil' },
      { type: 'tap', diagram: 'resources6', mode: 'boss', level: 'medium', q: 'Tap the moving air that can be used for energy.', answer: 'wind' },
      { type: 'tap', diagram: 'resources6', mode: 'boss', level: 'medium', q: 'Tap the fuel like coal and oil, formed from ancient remains.', answer: 'fossilfuel' },
      { type: 'fill', mode: 'boss', level: 'medium', q: '___ fuel is used to generate electricity.', options: ['Fossil', 'Wind', 'Solar', 'Water'], answer: 0 },
      { type: 'fill', mode: 'boss', level: 'medium', q: 'Gold and copper are valuable ___.', options: ['resources', 'foods', 'animals', 'plants'], answer: 0 },
      { type: 'term', mode: 'boss', level: 'medium', q: 'Light from the sun, important for life.', answer: 'Sunlight', choices: ['Wind', 'Electricity', 'Fossil fuel'] }
    ] },

  /* ---------- Lesson 2 · Metals and Minerals in Our World ---------- */
  { id: 'U1', lesson: 2, concept: 'Hidden Treasures: gold and diamond',
    explain: 'Under the earth, we find precious mineral resources like gold, diamond, copper and iron. Gold is soft, shiny and easy to shape. People use it for coins and jewelry. Diamond is a rare mineral, even more valuable than gold!',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What is gold like?', options: ['Soft, shiny and easy to shape', 'Weak and dark', 'Hard to find and cheap', 'Wet and muddy'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What do people use gold for?', options: ['Coins and jewelry', 'Electrical wires', 'Ships and bridges', 'Fuel'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which mineral is even more valuable than gold?', options: ['Diamond', 'Copper', 'Iron', 'Soil'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'Jewelry is made of gold.', answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'We find metals and minerals underground.', answer: 0 },
      { type: 'tap', diagram: 'gifts6', mode: 'normal', level: 'easy', q: 'Tap the gold.', answer: 'gold' }
    ] },
  { id: 'U2', lesson: 2, concept: 'Copper and iron',
    explain: 'Copper is a strong metal which we use for electrical wires, pipes and tools. It’s cheaper than gold. Egypt gets most of its copper and gold from the Eastern Desert. Iron is super strong. It helps make cars, ships, airplanes and bridges. It’s found in many places in Egypt.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What do we use to make electrical wires?', options: ['Copper', 'Gold', 'Diamond', 'Cotton'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Where does Egypt get most of its copper and gold?', options: ['From the Eastern Desert', 'From the Nile River', 'From the Delta fields', 'From the Iconic Tower'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Iron helps make…', options: ['cars, ships, airplanes and bridges', 'coins and rings', 'fabric', 'bread'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'Iron is weak and breaks easily.', answer: 1 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Copper is cheaper than ___.', options: ['gold', 'iron', 'soil'], answer: 0 }
    ] },
  { id: 'U3', lesson: 2, concept: 'Non-renewable: use them wisely',
    explain: 'To get minerals, miners dig deep into the ground. But minerals are non-renewable: they take millions of years to form! So we must use them wisely and never waste them. Gold, diamond, copper and iron are all mineral resources. We can switch off unused lights, fans and chargers to save energy.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'How do we get mineral resources?', options: ['Miners dig deep into the ground', 'We grow them in fields', 'We catch them in the river', 'We make them in a factory'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'Minerals take a few months to develop.', answer: 1 },
      { type: 'term', mode: 'normal', level: 'medium', q: 'Minerals take millions of years to form, so they are ___.', answer: 'Non-renewable', choices: ['Renewable', 'Fertile', 'Valuable'] },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Gold, diamond, copper, and iron are all ___.', options: ['mineral resources', 'non-renewable', 'copper'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: '___ is great for wires.', options: ['Copper', 'Mineral resources', 'Non-renewable'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'How can we save non-renewable resources?', options: ['Switch off unused lights, fans and chargers', 'Leave the lights on all day', 'Waste water', 'Dig more and more'], answer: 0 }
    ] },
  { id: 'U4', lesson: 2, concept: 'Comparative adjectives: short and -y',
    explain: 'Comparative adjectives are used to compare two people, things, animals, etc. With short adjectives (1 syllable), add -er + “than”: Gold is cheaper than diamond. Adjectives ending in -y: change y to i and add -er + “than”: Amira is happier than Mohamed. Example: Ali is taller than Omar.',
    variants: [
      { type: 'fill', mode: 'normal', level: 'easy', q: 'The orange tree is ___ than the apple tree. (tall)', options: ['taller', 'more tall', 'tallest'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Gold is ___ than diamond. (cheap)', options: ['cheaper', 'more cheap', 'cheapest'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Amira is ___ than Mohamed. (happy)', options: ['happier', 'happyer', 'more happy'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Make a sentence: winter - summer (cold)', options: ['Winter is colder than summer.', 'Winter is more cold than summer.', 'Winter is coldest than summer.', 'Winter colder summer.'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'We use comparative adjectives to compare…', options: ['two people, things or animals', 'only one thing', 'all the things in a group', 'nothing'], answer: 0 }
    ] },
  { id: 'U5', lesson: 2, concept: 'Long adjectives: more / less … than',
    explain: 'With most long adjectives (2+ syllables), use “more” or “less” before the adjective and “than” after: Diamond is more valuable than gold. Copper is less valuable than diamond. The movie was more exciting than I expected.',
    variants: [
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Diamond is ___ valuable than gold.', options: ['more', 'most', 'much'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Copper is ___ than diamond. (valuable)', options: ['less valuable', 'valuabler', 'most valuable'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'The movie was ___ than I expected.', options: ['more exciting', 'excited', 'exciting', 'most exciting'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What is the comparative form of “useful”?', options: ['more useful', 'usefuler', 'usefullest', 'most useful'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'The book is ___ interesting than the movie. (much)', options: ['more', 'much', 'most'], answer: 0 }
    ] },
  { id: 'U6', lesson: 2, concept: 'Irregular comparatives',
    explain: 'Some adjectives have irregular comparative forms: good → better than; bad → worse than; little → less than; many/much → more than. This test is better than the last one.',
    variants: [
      { type: 'match', mode: 'normal', level: 'medium', q: 'Match each adjective to its comparative.', left: ['good', 'bad', 'little', 'many / much'], right: ['better than', 'worse than', 'less than', 'more than'], answer: [0, 1, 2, 3] },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Books are ___ than movies. (good)', options: ['better', 'gooder', 'more good'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'This test is ___ than the last one.', options: ['better', 'well', 'more good', 'good'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'She has ___ books than her brother.', options: ['more', 'many', 'much', 'most'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'He is ___ at math than his sister.', options: ['worse', 'bad', 'more bad', 'the worst'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Make a sentence: your new tablet - your old tablet (good)', options: ['Your new tablet is better than your old tablet.', 'Your new tablet is gooder than your old tablet.', 'Your new tablet is more good than your old tablet.', 'Your new tablet is best than your old tablet.'], answer: 0 }
    ] },
  { id: 'U7', lesson: 2, boss: true, concept: 'Minerals and comparisons (Boss)',
    explain: 'Minerals are precious materials that we find underground. Gold, diamond, copper and iron are all mineral resources. Gold is soft and shiny, perfect for jewelry. Copper is great for wires. Iron is strong and used to make cars and ships. Metals and minerals are non-renewable, so we must use them wisely. The yellow dress is better than the blue one.',
    variants: [
      { type: 'table', mode: 'boss', level: 'hard', q: 'What is each mineral used for?', poc: 'Use', cols: ['Gold', 'Copper', 'Iron'], items: ['jewelry', 'electrical wires', 'cars and ships', 'coins', 'pipes', 'bridges'], answer: [0, 1, 2, 0, 1, 2] },
      { type: 'fill', mode: 'boss', level: 'hard', q: 'The yellow dress is ___ than the blue one. (good)', options: ['better', 'gooder', 'more good', 'best'], answer: 0 },
      { type: 'mc', mode: 'boss', level: 'medium', q: 'Why must we use minerals wisely?', options: ['They are non-renewable: they take millions of years to form', 'They are everywhere and cheap', 'They grow again every year', 'They are made in factories'], answer: 0 },
      { type: 'mc', mode: 'boss', level: 'hard', q: 'Why does real jewelry cost so much money?', options: ['It is made of gold, and diamond is even more valuable', 'It is made of iron, which is cheap', 'It is made of soil', 'It is made of copper wires'], answer: 0 },
      { type: 'build', style: 'sentence', mode: 'boss', level: 'hard', q: 'Put the cards in order.', parts: ['Diamond is', 'more valuable', 'than gold.'], extra: ['most', 'cheap'] }
    ] },

  /* ---------- Lesson 3 · Story Time: "Just Watch!" ---------- */
  { id: 'V1', lesson: 3, concept: 'The big ship gets stuck',
    explain: 'Everyone admired the big ship. It was huge and proud as it sailed across the ocean. The little digger on the shore was not big, not popular, but always ready to help. One morning, the big ship came close to shore to load some cargo. It got too close and got stuck in the thick, heavy mud. The ship tried and tried, but it couldn’t move.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Who tells the story “Just Watch!”?', options: ['The little digger', 'The big ship', 'The other machines', 'Mr. Hani'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Why did the big ship get stuck?', options: ['It got too close to shore and got stuck in thick, heavy mud', 'A storm broke it', 'It had no cargo', 'The digger pushed it'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Why did the big ship come close to shore?', options: ['To load some cargo', 'To meet the digger', 'To fish', 'To rest'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'The digger was bigger than the ship.', answer: 1 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'The big ship did not get stuck in the mud.', answer: 1 },
      { type: 'tap', diagram: 'gifts6', mode: 'normal', level: 'easy', q: 'Tap the big ship that carries cargo.', answer: 'ship' }
    ] },
  { id: 'V2', lesson: 3, concept: '“Just Watch!”: the little digger helps',
    explain: 'Other big machines rushed to help, but none of them could pull it out. Everyone started to give up. “I can help!” said the little digger. The big machines laughed: “You? You’re so small!” The digger smiled and said, “Just watch!” It dug carefully around the ship and cleared the mud. It took a long time, but it didn’t stop. Finally, the path was clear and the big ship floated free!',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Who tried to help the big ship but failed?', options: ['Other big machines', 'The little digger', 'The ocean', 'Mr. Hani'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Why did the big machines laugh when the little digger offered to help?', options: ['Because the digger was so small', 'Because the digger was so big', 'Because the ship was free', 'Because it was raining'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'How did the little digger free the ship?', options: ['It dug carefully around the ship and cleared the mud', 'It pulled the ship with a rope', 'It called the big machines', 'It loaded the cargo'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'Other big machines pulled the ship out of the mud.', answer: 1 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'The little digger helped the big ship.', answer: 0 },
      { type: 'tap', diagram: 'gifts6', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap the machine that tells the story.', answer: 'digger' }
    ] },
  { id: 'V3', lesson: 3, concept: 'The lesson of the story',
    explain: 'The ship looked at the digger, amazed: “Thank you, little digger! I didn’t think someone so small could help me.” The digger smiled again and said, “Size doesn’t matter. What matters is using your strength to help others.”',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What do we learn from the story?', options: ['Size doesn’t matter; what matters is using your strength to help others', 'Only big machines can help', 'Never try to help others', 'Ships should stay far from the shore'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'The big ship was grateful and thanked the little digger.', answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'The little digger said that size matters.', answer: 1 },
      { type: 'build', style: 'sentence', mode: 'normal', level: 'hard', q: 'Put the cards in order.', parts: ['Size', 'doesn’t', 'matter.'], extra: ['ship', 'mud'] }
    ] },
  { id: 'V4', lesson: 3, concept: 'Story words: cargo, digger, give up, path, thick, load',
    explain: 'Cargo: goods which are carried by a large ship. Digger: a machine or tool used for digging. Give up: to stop trying. Path: a route or way for traveling. Thick: something that is not thin. Load: to put things onto ships.',
    variants: [
      { type: 'match', mode: 'normal', level: 'medium', q: 'Match the words to their definitions.', left: ['cargo', 'digger', 'give up', 'path', 'thick', 'load'], right: ['goods which are carried by a large ship', 'a machine or tool used for digging', 'to stop trying', 'a route or way for traveling', 'something that is not thin', 'to put things onto ships'], answer: [0, 1, 2, 3, 4, 5] },
      { type: 'term', mode: 'normal', level: 'medium', q: 'Goods which are carried by a large ship.', answer: 'Cargo', choices: ['Path', 'Digger', 'Mud'] },
      { type: 'term', mode: 'normal', level: 'medium', q: 'A route or way for traveling.', answer: 'Path', choices: ['Cargo', 'Shore', 'Ocean'] },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: '“Give up” means to ___.', options: ['stop trying', 'start again', 'go up'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: '“Thick” means something that is not ___.', options: ['thin', 'big', 'wet'], answer: 0 },
      { type: 'tap', diagram: 'gifts6', mode: 'normal', level: 'easy', q: 'Tap the path.', answer: 'path' }
    ] },
  { id: 'V5', lesson: 3, concept: 'Prefixes: dis-, bi-, mis-',
    explain: 'A prefix is a group of letters that is added before a word to change its meaning. The prefix “dis-” means “not”. The prefix “bi-” means “two”. The prefix “mis-” means “wrongly”. If the base word has one syllable, the stress is on the base word (misSPELL, misPLACE, disLIKE). If the base word has two syllables, the stress is often on the prefix (BIcycle).',
    variants: [
      { type: 'term', mode: 'normal', level: 'medium', q: 'A group of letters that is added before a word to change its meaning.', answer: 'Prefix', choices: ['Trigraph', 'Syllable', 'Suffix'] },
      { type: 'match', mode: 'normal', level: 'medium', q: 'Match each prefix to its meaning.', left: ['dis-', 'bi-', 'mis-'], right: ['not', 'two', 'wrongly'], answer: [0, 1, 2] },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'What does “misspell” mean?', options: ['Spell wrongly', 'Spell two times', 'Not spell', 'Spell well'], answer: 0 },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'A bicycle has ___ wheels.', options: ['two', 'three', 'no', 'many'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: '“Like” has one syllable. Where is the stress in “dislike”?', options: ['On the base word: disLIKE', 'On the prefix: DISlike', 'On both', 'There is no stress'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: '“Cycle” has two syllables. Where is the stress in “bicycle”?', options: ['On the prefix: BIcycle', 'On the base word: biCYcle', 'On the last letter', 'There is no stress'], answer: 0 }
    ] },
  { id: 'V6', lesson: 3, boss: true, concept: 'Prefixes and the story (Boss)',
    explain: 'My old bicycle was red. I misplaced my book; now, I can’t find it. She dislikes traveling by plane; she is scared of heights. Check your homework so you don’t misspell any words. I often misplace my glasses. He dislikes playing football.',
    variants: [
      { type: 'fill', mode: 'boss', level: 'medium', q: 'My old ___ was red.', options: ['bicycle', 'misspell', 'dislikes'], answer: 0 },
      { type: 'fill', mode: 'boss', level: 'medium', q: 'I ___ my book. Now, I can’t find it.', options: ['misplaced', 'disliked', 'bicycled'], answer: 0 },
      { type: 'fill', mode: 'boss', level: 'medium', q: 'She ___ traveling by plane. She is scared of heights.', options: ['dislikes', 'misplaces', 'misspells'], answer: 0 },
      { type: 'fill', mode: 'boss', level: 'medium', q: 'Check your homework so you don’t ___ any words.', options: ['misspell', 'dislike', 'misplace'], answer: 0 },
      { type: 'order', mode: 'boss', level: 'hard', q: 'Put the story in order.', items: ['The big ship floated free', 'The big ship got stuck in the mud', 'The little digger cleared the mud', 'The big machines laughed at the digger'], answer: [1, 3, 2, 0] },
      { type: 'tf', mode: 'boss', level: 'medium', q: 'In the story, the little digger did not stop until the path was clear.', answer: 0 }
    ] },

  /* ---------- Lesson 4 · Writing: Who Am I? ---------- */
  { id: 'W1', lesson: 4, concept: 'I Am Water',
    explain: 'I am water. You might see me in a glass, a river, a cloud or a tear. I can be quiet and still, or wild and crashing. I sleep in lakes and dance in the rain. People drink me when they’re thirsty, bathe in me when they’re dirty and cry me when they’re hurt. Plants need me, animals search for me, and without me, life would stop.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Who is speaking in “I Am Water”?', options: ['Water', 'A girl', 'Gold', 'A ship'], answer: 0 },
      { type: 'multi', mode: 'normal', level: 'medium', q: 'Where might you see water? Choose all the correct answers.', options: ['In a glass', 'In a river', 'In a cloud', 'In a gold ring'], answer: [0, 1, 2] },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What would happen without water?', options: ['Life would stop', 'Nothing would change', 'Gold would grow', 'Plants would grow faster'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'I sleep in lakes and dance in the ___.', options: ['rain', 'desert', 'fire'], answer: 0 },
      { type: 'tap', diagram: 'resources6', mode: 'normal', level: 'easy', q: 'Tap the resource that says “I have no shape, but I can shape the world.”', answer: 'freshwater' }
    ] },
  { id: 'W2', lesson: 4, concept: 'Water helps, water destroys',
    explain: 'Sometimes, I help. I clean. I cool. I grow things. Sometimes, I destroy. I flood. I freeze. I fall too hard. But I never stop moving. I am always part of something greater: clouds, oceans, even sweat. I am water. I have no shape, but I can shape the world.',
    variants: [
      { type: 'table', mode: 'normal', level: 'medium', q: 'Does water help or destroy?', poc: 'Water…', cols: ['helps', 'destroys'], items: ['cleans', 'floods', 'cools', 'freezes', 'grows things', 'falls too hard'], answer: [0, 1, 0, 1, 0, 1] },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'Water says: “I never stop moving.”', answer: 0 },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'I have no ___, but I can shape the world.', options: ['shape', 'color', 'name'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Water is always part of something greater, like…', options: ['clouds, oceans, even sweat', 'gold and copper', 'the digger', 'the Iconic Tower'], answer: 0 }
    ] },
  { id: 'W3', lesson: 4, concept: 'Object-perspective narratives: I Am Gold',
    explain: 'Writing object-perspective narratives: 1 First person: use “I”, “me”, “my”. 2 Non-living thing: what are you? (Water? Copper? Oil?) 3 Description: use the 5 senses and other adjectives. 4 Ending: why are you important? This type of writing, where non-human things “speak”, improves your creativity and your descriptive writing. Example, I Am Gold: I sleep deep under the earth, hidden and quiet. People search for me, dream about me and admire me. I sit in the crowns of kings and the rings of queens. I am soft and beautiful. I am treasured because I am valuable.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'In an object-perspective narrative, who “speaks”?', options: ['A non-human thing, like water or gold', 'The writer’s teacher', 'A reporter', 'Nobody'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'In “I Am Gold”, where does gold sleep?', options: ['Deep under the earth', 'In the clouds', 'In a lake', 'In a barn'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Why is gold treasured?', options: ['Because it is valuable', 'Because it is cheap', 'Because it is wet', 'Because it is everywhere'], answer: 0 },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'Which words do we use in the first person?', options: ['I, me, my', 'he, him, his', 'you, your', 'they, them'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'The ending of an object-perspective narrative answers…', options: ['Why are you important?', 'What time is it?', 'Where do you live?', 'How old are you?'], answer: 0 }
    ] },
  { id: 'W4', lesson: 4, boss: true, concept: 'Who Am I? (Boss)',
    explain: 'Object-perspective narratives: first person, a non-living thing, a description with the 5 senses and adjectives, and an ending that says why you are important. Gold sits in the crowns of kings and the rings of queens; it is soft and beautiful.',
    variants: [
      { type: 'order', mode: 'boss', level: 'hard', q: 'Put the steps of an object-perspective narrative in order.', items: ['Description: the 5 senses and adjectives', 'First person: I, me, my', 'Ending: why are you important?', 'Non-living thing: what are you?'], answer: [1, 3, 0, 2] },
      { type: 'mc', mode: 'boss', level: 'medium', q: '“I sit in the crowns of kings and the rings of queens.” Who am I?', options: ['Gold', 'Water', 'Wind', 'Soil'], answer: 0 },
      { type: 'mc', mode: 'boss', level: 'medium', q: '“People drink me when they’re thirsty.” Who am I?', options: ['Water', 'Gold', 'Copper', 'Oil'], answer: 0 },
      { type: 'tap', diagram: 'gifts6', mode: 'boss', level: 'medium', q: 'Tap the resource that says: “I am soft and beautiful. I am treasured because I am valuable.”', answer: 'gold' },
      { type: 'mc', mode: 'boss', level: 'medium', q: 'This type of writing improves your…', options: ['creativity and descriptive writing', 'math skills only', 'running speed', 'handwriting only'], answer: 0 }
    ] },

  /* ---------- Lesson 5 · Think and Create: A Poster ---------- */
  { id: 'X1', lesson: 5, concept: 'A poster: “My Gold”',
    explain: 'Gold is a valuable resource. What do you consider valuable in your life? Family? Friends? Pets? Teachers? Create a poster titled “My Gold” and draw or glue pictures of the people and things that are valuable to you. A poster is a large printed paper used to display information visually.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What is the title of the poster?', options: ['My Gold', 'I Am Water', 'Just Watch!', 'Hidden Treasures'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What do you put on the “My Gold” poster?', options: ['Pictures of the people and things that are valuable to you', 'Pictures of gold coins only', 'A recipe', 'A map of the desert'], answer: 0 },
      { type: 'term', mode: 'normal', level: 'medium', q: 'A large printed paper used to display information visually.', answer: 'Poster', choices: ['Flyer', 'Collage', 'Menu'] },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'On the poster, you can draw or glue pictures.', answer: 0 }
    ] },
  { id: 'X2', lesson: 5, concept: 'Review 2: mineral resources',
    explain: 'Mineral resources like gold, iron and copper are found under the earth. People use these minerals to make things we need every day, such as buildings and cars. Some minerals, like diamonds, are shiny and used to make jewelry. Others, like copper, help electricity flow. These resources are very important, but they take a long time to form, so we must use them wisely. Recycling and preserving nature help protect our mineral resources for the future!',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What does the text mainly talk about?', options: ['Mineral resources', 'Places in the village', 'A big ship', 'The weather'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Diamonds are shiny and used in ___.', options: ['jewelry', 'electricity', 'pencils', 'buildings'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: '“…so we must use them wisely.” What does “them” refer to?', options: ['Mineral resources', 'Buildings', 'Cars', 'Devices'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which mineral helps electricity flow?', options: ['Copper', 'Diamond', 'Gold', 'Soil'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What helps protect our mineral resources for the future?', options: ['Recycling and preserving nature', 'Wasting them', 'Digging faster', 'Throwing things away'], answer: 0 }
    ] },
  { id: 'X3', lesson: 5, boss: true, concept: 'Our world, our resources (Boss)',
    explain: 'Natural resources: sunlight, fossil fuel, soil, minerals, water and wind. Minerals take a long time to form, so we must use them wisely. Gold is valuable; on the “My Gold” poster we show the people and things that are valuable to us.',
    variants: [
      { type: 'tap', diagram: 'resources6', mode: 'boss', level: 'medium', q: 'Tap the crystals and metals found in the earth.', answer: 'minerals' },
      { type: 'tap', diagram: 'resources6', mode: 'boss', level: 'medium', q: 'Tap the light from the sun, important for life.', answer: 'sunlight' },
      { type: 'mc', mode: 'boss', level: 'medium', q: 'Why should we use mineral resources wisely?', options: ['They take a long time to form', 'They are everywhere', 'They form in a few days', 'They are not useful'], answer: 0 },
      { type: 'mc', mode: 'boss', level: 'medium', q: 'How do people use mineral resources in daily life?', options: ['To make buildings, cars and jewelry', 'To drink', 'To breathe', 'To make clouds'], answer: 0 },
      { type: 'tf', mode: 'boss', level: 'medium', q: 'The “My Gold” poster shows what is valuable in your life, like family and friends.', answer: 0 }
    ] }
];
})();
