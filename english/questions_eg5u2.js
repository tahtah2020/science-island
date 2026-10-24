/* English · Grade 5 · Term 1 · Unit 2 "My Healthy Body" · ministry book "English Primary 5", first term 2026/2027 (book pages 26-40)
   One English book for both tracks (subject lang { lang: 'en', ar: 'en' }), so there is no _ar file.
   Lessons: 1 Sports for Better Health (pp 26-27) · 2 My Habits: Then and Now + a/an/some/any (pp 28-30) · 3 Heart and Blood + one-syllable words (pp 31-33)
            4 Writing: Life Savers in Action (pp 34-37) · 5 Think and Create: A Poster (p 38) · Quick Review and Self-Assessment (pp 39-40, spread over the lessons)
   Idea letters (one per lesson): F, G, H, I, J.  Boss ideas: F5, G6, H6, I5, J3.
   Rules: answers of mc/fill at index 0 (the page shuffles) · one Boss idea per lesson (every variant mode:'boss') · about a third timed (10-20 s, easy recall)
          distractors = real misconceptions · term/fix answers ≤ 18 letters · core and Boss only from the school book.
   Tap picture (english/g5_art.js): bodyParts -> heart | lungs | muscle | blood | vessels | fist
   Review notes:
   - The listening activities of the book (audio) are asked as reading questions; the audio is not on the site. Open speaking, discussion, "Think" and writing tasks are not asked.
   - Page 27 exercise 4: the garbled numbering of the definitions is read from the book's own Quick Review (page 39), which prints the same five definitions.
   - Page 33 exercise 3 (sound ordering) is not asked: "t-o-p" can spell two words and the book's key is not printed. The one-syllable list on page 40 is asked instead.
   - Page 35 exercise 4 and page 38 (poster) are open tasks: not asked. The six habits of the poster are printed, so they are asked.
   - Page 39 exercise 2 (a/an/some/any) gaps are asked with the only grammatical answer given the sentence. */
(function () {
window.CHAPTER = { id: 'eg5u2', title: 'My Healthy Body' };

window.IDEAS = [
  /* ---------- Lesson 1 · Sports for Better Health ---------- */
  { id: 'F1', lesson: 1, concept: 'How sports help the body',
    explain: 'Sports help us stay healthy and make our bodies stronger. Football makes your heart strong and helps your muscles grow. It also increases energy. Swimming makes your lungs strong. In fact, it helps your whole body.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'How does football make you stronger?', options: ['It makes your heart strong and helps your muscles grow', 'It makes your lungs weak', 'It makes you tired all day', 'It makes you stressed'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'How does swimming help the body?', options: ['It makes your lungs strong and helps your whole body', 'It makes your muscles smaller', 'It stops you from sleeping', 'It makes only your legs strong'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Football makes your ___ strong.', options: ['heart', 'lungs', 'bones'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Swimming makes your ___ strong.', options: ['lungs', 'heart', 'eyes'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'Sports help us stay healthy and make our bodies stronger.', answer: 0 },
      { type: 'match', mode: 'normal', level: 'medium', q: 'Match each sport to what it helps.', left: ['Football', 'Swimming'], right: ['makes your heart strong and helps your muscles grow', 'makes your lungs strong and helps your whole body'], answer: [0, 1] }
    ] },
  { id: 'F2', lesson: 1, concept: 'Tired, fit and mental health',
    explain: 'If you feel tired when you play sports, that is normal. Try eating some fruit before you exercise to give you more energy. Exercise helps you lose weight and makes your bones stronger. Exercising regularly helps you sleep better and reduces stress.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What should you do if you feel tired while playing sports?', options: ['Eat some fruit before you exercise to get more energy', 'Stop all sports forever', 'Drink soda', 'Watch TV all day'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Why is exercising regularly important?', options: ['It helps you sleep better and reduces stress', 'It makes you more tired and unhappy', 'It makes your bones weaker', 'It stops your muscles from growing'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Exercise helps you lose weight and makes your ___ stronger.', options: ['bones', 'sleep', 'stress'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'Feeling tired when you play sports is normal.', answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'Exercising regularly increases stress.', answer: 1 },
      { type: 'fix', mode: 'normal', level: 'medium', q: 'Eating some fruit after you exercise gives you more energy while you play.', wrong: 'after', answer: 'before' }
    ] },
  { id: 'F3', lesson: 1, concept: 'Health words: fit, mental health, stressed, lungs, muscles',
    explain: 'Fit means healthy and strong because you exercise. Mental health is how you feel and think. Stressed means feeling unhappy or tired. Lungs are the organs in your chest that help you breathe. Muscles are the parts of your body that help you move.',
    variants: [
      { type: 'match', mode: 'normal', level: 'medium', q: 'Match each word to its meaning.', left: ['fit', 'mental health', 'stressed', 'lungs', 'muscles'], right: ['being healthy and strong because you exercise', 'how you feel and think', 'feeling unhappy or tired', 'the organs in your chest that help you breathe', 'the parts of your body that help you move'], answer: [0, 1, 2, 3, 4] },
      { type: 'term', mode: 'normal', level: 'medium', q: 'The parts of your body that help you move.', answer: 'Muscles' },
      { type: 'term', mode: 'normal', level: 'medium', q: 'The organs in your chest that help you breathe.', answer: 'Lungs' },
      { type: 'term', mode: 'normal', level: 'medium', q: 'How you feel and think.', answer: 'Mental health' },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'To be fit means to be healthy and ___.', options: ['active', 'tired', 'nervous', 'smart'], answer: 0 },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'Stressed is when you feel unhappy or ___.', options: ['tired', 'happy', 'relaxed', 'pleased'], answer: 0 },
      { type: 'tap', diagram: 'bodyParts', mode: 'normal', level: 'easy', q: 'Tap the picture of the lungs.', answer: 'lungs' },
      { type: 'tap', diagram: 'bodyParts', mode: 'normal', level: 'easy', q: 'Tap the picture of the muscle.', answer: 'muscle' }
    ] },
  { id: 'F4', lesson: 1, concept: 'Sports and the healthy-habit questions',
    explain: 'The best way to stay healthy is doing some sports. Eating chips and burgers or watching TV all day is not the best way to stay healthy. Mazen’s mom suggests going for a walk together.',
    variants: [
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'What is the best way to stay healthy?', options: ['Doing some sports', 'Eating chips and burgers', 'Watching TV all day'], answer: 0 },
      { type: 'mc', style: 'story', mode: 'normal', level: 'medium', q: 'Mazen says, “I think I will play sports more regularly.” What does his mom suggest?', options: ['Going for a walk together', 'Eating more chips', 'Watching TV together', 'Sleeping all day'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which habit is NOT healthy?', options: ['Watching TV all day', 'Playing football', 'Swimming', 'Going for a walk'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'Mazen’s mom says sports help us stay healthy.', answer: 0 },
      { type: 'build', style: 'sentence', mode: 'normal', level: 'hard', q: 'Put the cards in order.', parts: ['Sports help us', 'stay healthy', 'and make our bodies stronger.'], extra: ['weaker', 'TV'] }
    ] },
  { id: 'F5', lesson: 1, boss: true, concept: 'Sports and health: the whole dialogue',
    explain: 'Sports make your heart strong and help muscles grow (football), make lungs strong (swimming), help you lose weight and make bones stronger. Exercising regularly helps you sleep better and reduces stress.',
    variants: [
      { type: 'fill', mode: 'boss', level: 'medium', q: 'Exercising regularly helps you sleep better and reduces ___.', options: ['stress', 'energy', 'bones'], answer: 0 },
      { type: 'term', mode: 'boss', level: 'medium', q: 'Being healthy and strong because you exercise.', answer: 'Fit' },
      { type: 'mc', mode: 'boss', level: 'medium', q: 'Which sentence is true?', options: ['Swimming makes your lungs strong.', 'Football makes your lungs strong.', 'Exercise makes your bones weaker.', 'Sports increase stress.'], answer: 0 },
      { type: 'fix', mode: 'boss', level: 'medium', q: 'Football makes your lungs strong and helps your muscles grow.', wrong: 'lungs', answer: 'heart' },
      { type: 'match', mode: 'boss', level: 'hard', q: 'Match the problem to the advice.', left: ['You feel tired when you play sports', 'You want to sleep better', 'You want stronger bones'], right: ['eat some fruit before you exercise', 'exercise regularly', 'exercise'], answer: [0, 1, 2] },
      { type: 'build', style: 'sentence', mode: 'boss', level: 'hard', q: 'Put the cards in order.', parts: ['Exercising regularly', 'helps you', 'sleep better.'], extra: ['stress', 'weaker'] }
    ] },

  /* ---------- Lesson 2 · My Habits: Then and Now ---------- */
  { id: 'G1', lesson: 2, concept: 'Adam in the past and now',
    explain: 'In the past, Adam woke up late on weekends and didn’t exercise much. Now, he wakes up early and exercises every morning. He used to watch TV all day, but now he plays football with friends every Saturday.',
    variants: [
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'Adam exercised a lot in the past.', answer: 1 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'In the past, Adam woke up early on weekends.', answer: 1 },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What does Adam do every morning now?', options: ['He wakes up early and exercises', 'He watches TV', 'He eats burgers', 'He wakes up late'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Adam plays ___ with his friends every Saturday.', options: ['football', 'chess', 'tennis'], answer: 0 },
      { type: 'match', mode: 'normal', level: 'medium', q: 'Match Adam’s habits: in the past and now.', left: ['In the past', 'In the past', 'Now', 'Now'], right: ['he woke up late on weekends', 'he watched TV all day', 'he wakes up early and exercises', 'he plays football with friends'], answer: [0, 1, 2, 3] }
    ] },
  { id: 'G2', lesson: 2, concept: 'Healthy food and drink',
    explain: 'Before, Adam loved chips, burgers and sweets. Now he eats more fruits and vegetables, which give him important vitamins. His favorite snacks are apples, bananas and carrots. He drinks water instead of soda.',
    variants: [
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'Adam eats more fruits and vegetables now.', answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Adam drinks a lot of water instead of ___.', options: ['soda', 'vitamins', 'football'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Fruits and vegetables give us important ___.', options: ['vitamins', 'soda', 'chips'], answer: 0 },
      { type: 'multi', mode: 'normal', level: 'medium', q: 'Which are Adam’s favorite snacks? Choose all the correct answers.', options: ['Apples', 'Bananas', 'Carrots', 'Chips'], answer: [0, 1, 2] },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What did Adam love before?', options: ['Chips, burgers and sweets', 'Apples, bananas and carrots', 'Water and vegetables', 'Only fruit'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Healthy habits are important for our ___ and minds.', options: ['bodies', 'soda', 'snacks'], answer: 0 }
    ] },
  { id: 'G3', lesson: 2, concept: 'Adam’s family habits',
    explain: 'Adam’s family habits changed too. They grill or bake food instead of frying like they used to do in the past, and they eat dinner early, followed by a walk. These changes give Adam more energy and help him feel better.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'How did Adam’s family cook their food in the past?', options: ['They fried it', 'They grilled it', 'They baked it', 'They boiled it'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'How does Adam’s family cook now?', options: ['They grill or bake', 'They only fry', 'They never cook', 'They eat only chips'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'Adam’s family now eats dinner early and goes for a walk.', answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'The changes in Adam’s habits give him more ___.', options: ['energy', 'soda', 'sweets'], answer: 0 },
      { type: 'fix', mode: 'normal', level: 'medium', q: 'Adam’s family now fries food instead of baking.', wrong: 'fries', answer: 'grills' }
    ] },
  { id: 'G4', lesson: 2, concept: 'a and an',
    explain: 'We use “a” before singular countable nouns starting with a consonant sound: I eat a banana every day. We use “an” before singular countable nouns starting with a vowel sound: She eats an egg in the morning.',
    variants: [
      { type: 'mc', mode: 'timed', seconds: 12, level: 'easy', q: 'I eat ___ banana every day.', options: ['a', 'an', 'some', 'any'], answer: 0 },
      { type: 'mc', mode: 'timed', seconds: 12, level: 'easy', q: 'She eats ___ egg in the morning.', options: ['an', 'a', 'some', 'any'], answer: 0 },
      { type: 'fix', mode: 'normal', level: 'medium', q: 'I have an watermelon.', wrong: 'an', answer: 'a' },
      { type: 'fix', mode: 'normal', level: 'medium', q: 'She ate a apple yesterday.', wrong: 'a', answer: 'an' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'I bought ___ green notebook.', options: ['a', 'an', 'some', 'any'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'They played with ___ orange ball.', options: ['an', 'a', 'any', 'some'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'She bought ___ bottle of water.', options: ['a', 'an', 'some', 'any'], answer: 0 }
    ] },
  { id: 'G5', lesson: 2, concept: 'some and any',
    explain: 'We use “some” with plural countable nouns or uncountable nouns in affirmative sentences: I have some apples. She drank some water. We use “any” with plural countable nouns or uncountable nouns in negative sentences and questions: There aren’t any apples left. Do you have any water?',
    variants: [
      { type: 'mc', mode: 'timed', seconds: 12, level: 'easy', q: 'I have ___ apples.', options: ['some', 'any', 'a', 'an'], answer: 0 },
      { type: 'mc', mode: 'timed', seconds: 12, level: 'easy', q: 'Do you have ___ water?', options: ['any', 'some', 'a', 'an'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Is there ___ orange juice left in the fridge?', options: ['any', 'some', 'a', 'an'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Omar will buy ___ apples for the picnic.', options: ['some', 'any', 'a', 'an'], answer: 0 },
      { type: 'fix', mode: 'normal', level: 'medium', q: 'There is any milk in the fridge.', wrong: 'any', answer: 'some' },
      { type: 'fix', mode: 'normal', level: 'medium', q: 'I don’t have some food at home.', wrong: 'some', answer: 'any' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'I want to buy ___ grapes.', options: ['some', 'any', 'a', 'an'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'There isn’t ___ cheese in the fridge.', options: ['any', 'some', 'a', 'an'], answer: 0 }
    ] },
  { id: 'G6', lesson: 2, boss: true, concept: 'a / an / some / any',
    explain: 'a before a consonant sound; an before a vowel sound; some in affirmative sentences with plural or uncountable nouns; any in negative sentences and questions.',
    variants: [
      { type: 'mc', mode: 'boss', level: 'medium', q: 'She drank ___ water.', options: ['some', 'any', 'a', 'an'], answer: 0 },
      { type: 'mc', mode: 'boss', level: 'medium', q: 'There aren’t ___ apples left.', options: ['any', 'some', 'a', 'an'], answer: 0 },
      { type: 'mc', mode: 'boss', level: 'medium', q: 'Which sentence is correct?', options: ['She eats an egg in the morning.', 'She eats a egg in the morning.', 'She eats some egg in the morning.'], answer: 0 },
      { type: 'fix', mode: 'boss', level: 'medium', q: 'Do you have some water?', wrong: 'some', answer: 'any' },
      { type: 'tf', mode: 'boss', level: 'medium', q: 'We use “any” in negative sentences and questions.', answer: 0 },
      { type: 'build', style: 'sentence', mode: 'boss', level: 'hard', q: 'Put the cards in order.', parts: ['I have', 'some', 'apples.'], extra: ['any', 'an'] }
    ] },

  /* ---------- Lesson 3 · Heart and Blood ---------- */
  { id: 'H1', lesson: 3, concept: 'The heart and its job',
    explain: 'The heart is one of the most important organs of our body. It is about the size of your fist. The heart’s job is to pump blood to all parts of the body. The heart is a strong muscle that keeps us alive.',
    variants: [
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'The heart is about the size of your ___.', options: ['fist', 'head', 'foot'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What is the heart’s job?', options: ['To pump blood to all parts of the body', 'To help you breathe', 'To help you move', 'To make food'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'The heart is a strong muscle that keeps us alive.', answer: 0 },
      { type: 'tap', diagram: 'bodyParts', mode: 'normal', level: 'easy', q: 'Tap the picture of the heart.', answer: 'heart' },
      { type: 'tap', diagram: 'bodyParts', mode: 'normal', level: 'easy', q: 'Tap the picture of the fist: the heart is about this size.', answer: 'fist' }
    ] },
  { id: 'H2', lesson: 3, concept: 'Blood and blood vessels',
    explain: 'Blood carries oxygen and nutrients to every cell. It also takes away waste like carbon dioxide. The heart pumps blood through blood vessels, which are like small tubes.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What does blood carry to every cell?', options: ['Oxygen and nutrients', 'Only waste', 'Only water', 'Only vitamins'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What waste does blood take away?', options: ['Carbon dioxide', 'Oxygen', 'Nutrients', 'Vitamins'], answer: 0 },
      { type: 'term', mode: 'normal', level: 'medium', q: 'The small tubes that the heart pumps blood through.', answer: 'Blood vessels' },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'The heart pumps blood through blood ___.', options: ['vessels', 'bones', 'lungs'], answer: 0 },
      { type: 'tap', diagram: 'bodyParts', mode: 'normal', level: 'easy', q: 'Tap the picture of the blood.', answer: 'blood' },
      { type: 'tap', diagram: 'bodyParts', mode: 'normal', level: 'medium', q: 'Tap the picture of the blood vessels (small tubes).', answer: 'vessels' }
    ] },
  { id: 'H3', lesson: 3, concept: 'How to keep your heart healthy',
    explain: 'Too much stress can hurt your heart. You can take care of your heart by eating good food, sleeping well and drinking a lot of water. Also, exercise helps your heart pump better and keeps you from getting sick.',
    variants: [
      { type: 'multi', mode: 'normal', level: 'medium', q: 'How can you take care of your heart? Choose all the correct answers.', options: ['Eating good food', 'Sleeping well', 'Drinking a lot of water', 'Having too much stress'], answer: [0, 1, 2] },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'Too much stress can hurt your heart.', answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Exercise helps your heart pump ___.', options: ['better', 'less', 'slower'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'The heart may be small, but it is very ___.', options: ['powerful', 'weak', 'tired', 'stressed'], answer: 0 },
      { type: 'fix', mode: 'normal', level: 'medium', q: 'Too much stress can make your heart stronger.', wrong: 'stronger', answer: 'hurt' }
    ] },
  { id: 'H4', lesson: 3, concept: 'Syllables',
    explain: 'A syllable is a word part with one vowel sound. It can have one or more vowel letters but only one vowel sound. Words like bread (5 letters) and pot (3 letters) look different but both have one syllable because they only have one vowel sound. Clap it out: one clap for each vowel sound, BA-NA-NA is three claps.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What is a syllable?', options: ['A word part with one vowel sound', 'A word with five letters', 'A kind of blood vessel', 'A long sentence'], answer: 0 },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'How many claps are in BA-NA-NA?', options: ['Three', 'One', 'Two', 'Four'], answer: 0 },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'Which word has one syllable?', options: ['run', 'basket', 'pencil', 'apple'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Which word has one syllable?', options: ['tree', 'finger', 'banana', 'rabbit'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Which word has one syllable?', options: ['fish', 'mother', 'elephant', 'lesson'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Which word has one syllable?', options: ['jump', 'eraser', 'happy', 'jacket'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Which word has one syllable?', options: ['hat', 'hungry', 'yellow', 'sofa'], answer: 0 },
      { type: 'multi', mode: 'normal', level: 'medium', q: 'Which words have one syllable? Choose all the correct answers.', options: ['arm', 'bread', 'leaf', 'basket'], answer: [0, 1, 2] },
      { type: 'tf', mode: 'timed', seconds: 12, level: 'medium', q: 'Bread has five letters but only one syllable.', answer: 0 }
    ] },
  { id: 'H5', lesson: 3, concept: 'One-syllable words from the self-assessment',
    explain: 'One-syllable words: arm, jump, meet, bread, leaf, feed, pot, flag. Each has only one vowel sound.',
    variants: [
      { type: 'multi', mode: 'normal', level: 'medium', q: 'Which of these words have only one vowel sound? Choose all the correct answers.', options: ['flag', 'pot', 'feed', 'banana'], answer: [0, 1, 2] },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which word has only ONE vowel sound?', options: ['meet', 'basket', 'finger', 'yellow'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'medium', q: 'The word “jump” has one syllable.', answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'medium', q: 'The word “elephant” has one syllable.', answer: 1 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'medium', q: 'The word “leaf” has one syllable.', answer: 0 }
    ] },
  { id: 'H6', lesson: 3, boss: true, concept: 'Heart and blood: the whole text',
    explain: 'The heart pumps blood to all parts of the body through blood vessels. Blood carries oxygen and nutrients and takes away carbon dioxide. Good food, sleep, water and exercise keep the heart strong.',
    variants: [
      { type: 'fill', mode: 'boss', level: 'medium', q: 'Blood carries oxygen and ___ to every cell.', options: ['nutrients', 'stress', 'fists'], answer: 0 },
      { type: 'mc', mode: 'boss', level: 'medium', q: 'Which sentence is true?', options: ['The heart pumps blood through blood vessels.', 'The lungs pump blood to the body.', 'Stress makes the heart healthier.', 'Blood only carries waste.'], answer: 0 },
      { type: 'mc', mode: 'boss', level: 'medium', q: 'Which of these keeps your heart strong?', options: ['Exercise, good food, sleep and water', 'Stress and chips', 'Watching TV all day', 'Not drinking water'], answer: 0 },
      { type: 'fix', mode: 'boss', level: 'medium', q: 'Blood takes away oxygen from every cell.', wrong: 'oxygen', answer: 'waste' },
      { type: 'tap', diagram: 'bodyParts', mode: 'boss', level: 'medium', q: 'Tap the picture of the organ that pumps blood to all parts of the body.', answer: 'heart' },
      { type: 'build', style: 'sentence', mode: 'boss', level: 'hard', q: 'Put the cards in order.', parts: ['The heart', 'pumps blood', 'to all parts of the body.'], extra: ['breathes', 'fist'] }
    ] },

  /* ---------- Lesson 4 · Writing: Life Savers in Action ---------- */
  { id: 'I1', lesson: 4, concept: 'Healthcare heroes',
    explain: 'Healthcare workers, like doctors, nurses, pharmacists and paramedics, are real-life heroes who spend their lives helping others. They work day and night to keep people healthy and treat illnesses.',
    variants: [
      { type: 'multi', mode: 'normal', level: 'easy', q: 'Who are the healthcare workers mentioned as everyday heroes? Choose all the correct answers.', options: ['Doctors', 'Nurses', 'Pharmacists', 'Football players'], answer: [0, 1, 2] },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Healthcare workers work day and night to keep people ___.', options: ['healthy', 'busy', 'tired'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'Healthcare workers are real-life heroes.', answer: 0 },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What do healthcare workers do?', options: ['They keep people healthy and treat illnesses', 'They only sell food', 'They teach football', 'They build houses'], answer: 0 }
    ] },
  { id: 'I2', lesson: 4, concept: 'What each hero does',
    explain: 'Doctors use their knowledge and skills to check patients, diagnose diseases and provide treatments. Nurses often work around the clock to give support and care for patients. Pharmacists make sure patients receive the correct medicine and give advice on how to use it safely. Paramedics respond quickly in emergencies, give help on the spot and take patients safely to hospitals.',
    variants: [
      { type: 'match', mode: 'normal', level: 'medium', q: 'Match each healthcare worker to the job.', left: ['Doctors', 'Nurses', 'Pharmacists', 'Paramedics'], right: ['check patients, diagnose diseases and provide treatments', 'give support and care for patients around the clock', 'make sure patients receive the correct medicine', 'respond quickly in emergencies and take patients to hospitals'], answer: [0, 1, 2, 3] },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'Who gives advice on how to use medicine safely?', options: ['Pharmacists', 'Paramedics', 'Nurses', 'Teachers'], answer: 0 },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'Who takes patients safely to hospitals?', options: ['Paramedics', 'Pharmacists', 'Doctors', 'Nurses'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'When do paramedics provide urgent help to patients?', options: ['In emergencies', 'Only in the morning', 'Only at school', 'Never'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What do doctors do to help patients stay healthy?', options: ['They check patients, diagnose diseases and provide treatments', 'They only give advice about medicine', 'They only drive ambulances', 'They only cook food'], answer: 0 }
    ] },
  { id: 'I3', lesson: 4, concept: 'Phrases: around the clock, on the spot, diagnose',
    explain: 'To work around the clock means to work for long hours without much rest. To give help on the spot means to help immediately. To diagnose means to identify the cause of a problem or illness.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'To work around the clock means ___.', options: ['to work for long hours without much rest', 'to work in a room with a clock', 'to work while watching a clock', 'all workers must wear a watch'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'To give help on the spot means ___.', options: ['to help immediately', 'to help after a long time', 'to help only if asked', 'to help with advice on medicine'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'To diagnose means ___.', options: ['to identify the cause of a problem or illness', 'to treat patients', 'to identify the emergency', 'to transport patients'], answer: 0 },
      { type: 'term', mode: 'normal', level: 'medium', q: 'To identify the cause of a problem or illness.', answer: 'Diagnose' },
      { type: 'mc', style: 'story', mode: 'normal', level: 'medium', q: 'A paramedic reaches a boy who fell and helps him immediately. What did the paramedic do?', options: ['Gave help on the spot', 'Worked around the clock', 'Diagnosed a medicine', 'Wrote a closing sentence'], answer: 0 }
    ] },
  { id: 'I4', lesson: 4, concept: 'Thanking healthcare heroes',
    explain: 'Healthcare workers also help us live healthier lives as they encourage us to eat healthy meals, stay active, play sports and stop harmful habits. These heroes work long hours with kindness. We should thank them by caring for our health and showing them respect.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Why should we thank healthcare workers, according to the text?', options: ['They work long hours with kindness to help us', 'They sell medicine', 'They teach sports', 'They are never tired'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'How should we thank them?', options: ['By caring for our health and showing them respect', 'By staying away from them', 'By eating only sweets', 'By ignoring their advice'], answer: 0 },
      { type: 'multi', mode: 'normal', level: 'medium', q: 'What do healthcare workers encourage us to do? Choose all the correct answers.', options: ['Eat healthy meals', 'Stay active', 'Play sports', 'Watch TV all day'], answer: [0, 1, 2] },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'Healthcare workers encourage us to stop harmful habits.', answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Healthcare workers are really our everyday ___.', options: ['heroes', 'drivers', 'teachers'], answer: 0 }
    ] },
  { id: 'I5', lesson: 4, boss: true, concept: 'Writing a non-fiction text',
    explain: 'When you write a non-fiction text, ask: Is the information true? Did I make anything up? Is my source reliable? A non-fiction text includes an introductory sentence, true details, adjectives like white, big and kind, and a closing sentence.',
    variants: [
      { type: 'mc', mode: 'boss', level: 'medium', q: 'Which question should you ask yourself when you write a non-fiction text?', options: ['Is the information true?', 'Is the story funny?', 'Is it a made-up story?', 'Is it short?'], answer: 0 },
      { type: 'multi', mode: 'boss', level: 'medium', q: 'What should non-fiction writing include? Choose all the correct answers.', options: ['An introductory sentence', 'True details', 'A closing sentence', 'Made-up details'], answer: [0, 1, 2] },
      { type: 'multi', mode: 'boss', level: 'medium', q: 'Which words are adjectives?', options: ['white', 'big', 'kind', 'doctor'], answer: [0, 1, 2] },
      { type: 'mc', mode: 'boss', level: 'medium', q: '“The work is tiring, but he’s proud to be a doctor.” What is this sentence?', options: ['A closing sentence', 'An introductory sentence', 'A detail about his coat', 'A title'], answer: 0 },
      { type: 'mc', mode: 'boss', level: 'medium', q: '“My neighbor, Selim, is a doctor at our local hospital.” What is this sentence?', options: ['An introductory sentence', 'A closing sentence', 'An adjective', 'A source'], answer: 0 },
      { type: 'fix', mode: 'boss', level: 'medium', q: 'In non-fiction writing, you can make up some details.', wrong: 'make up', answer: 'use true' }
    ] },

  /* ---------- Lesson 5 · Think and Create: A Poster ---------- */
  { id: 'J1', lesson: 5, concept: 'Six healthy habits',
    explain: 'Six healthy habits: wash your hands before and after eating; eat fruits and vegetables regularly; drink enough water daily; exercise regularly; sleep early and get enough rest; brush your teeth daily with toothpaste.',
    variants: [
      { type: 'multi', mode: 'normal', level: 'easy', q: 'Which are healthy habits from the poster? Choose all the correct answers.', options: ['Wash your hands before and after eating', 'Drink enough water daily', 'Sleep early and get enough rest', 'Eat chips all day'], answer: [0, 1, 2] },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Brush your teeth daily with ___.', options: ['toothpaste', 'soda', 'vitamins'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Eat fruits and ___ regularly.', options: ['vegetables', 'sweets', 'burgers'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Wash your hands before and after ___.', options: ['eating', 'sleeping', 'swimming'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'Drinking enough water daily is a healthy habit.', answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which habit is NOT on the healthy-habits poster?', options: ['Watch TV all day', 'Exercise regularly', 'Drink enough water daily', 'Brush your teeth daily'], answer: 0 }
    ] },
  { id: 'J2', lesson: 5, concept: 'The elements of a good poster',
    explain: 'The elements of a good poster are: a clear title (to grab the attention), organized steps (to explain), and photos or drawings (to illustrate).',
    variants: [
      { type: 'match', mode: 'normal', level: 'medium', q: 'Match each element of a poster to its job.', left: ['A clear title', 'Organized steps', 'Photos or drawings'], right: ['to grab the attention', 'to explain', 'to illustrate'], answer: [0, 1, 2] },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'What is a clear title for?', options: ['To grab the attention', 'To explain', 'To illustrate'], answer: 0 },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'What are photos or drawings for?', options: ['To illustrate', 'To grab the attention', 'To explain'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What are organized steps for?', options: ['To explain', 'To illustrate', 'To grab the attention'], answer: 0 },
      { type: 'multi', mode: 'normal', level: 'medium', q: 'Which are elements of a good poster? Choose all the correct answers.', options: ['A clear title', 'Organized steps', 'Photos or drawings', 'A long story'], answer: [0, 1, 2] }
    ] },
  { id: 'J3', lesson: 5, boss: true, concept: 'Healthy habits poster',
    explain: 'A poster about healthy habits has a clear title, organized steps and drawings. Six healthy habits: wash hands, eat fruits and vegetables, drink water, exercise, sleep early and brush teeth.',
    variants: [
      { type: 'mc', mode: 'boss', level: 'medium', q: 'Which habit helps your heart pump better?', options: ['Exercise regularly', 'Eat sweets', 'Sleep late', 'Skip water'], answer: 0 },
      { type: 'fill', mode: 'boss', level: 'medium', q: 'Sleep early and get enough ___.', options: ['rest', 'soda', 'chips'], answer: 0 },
      { type: 'fix', mode: 'boss', level: 'medium', q: 'A clear title is used to explain the steps.', wrong: 'explain the steps', answer: 'grab the attention' },
      { type: 'tf', mode: 'boss', level: 'medium', q: 'Photos or drawings help to illustrate a poster.', answer: 0 },
      { type: 'table', mode: 'boss', level: 'hard', q: 'Sort the items.', poc: 'Item', cols: ['Healthy habit', 'Not healthy'], items: ['Drink enough water', 'Eat chips all day', 'Brush your teeth', 'Watch TV all day', 'Exercise regularly'], answer: [0, 1, 0, 1, 0] },
      { type: 'build', style: 'sentence', mode: 'boss', level: 'hard', q: 'Put the cards in order.', parts: ['Drink enough', 'water', 'daily.'], extra: ['soda', 'never'] }
    ] }
];
})();
