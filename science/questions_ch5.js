/* From Flower to Fruit · Grade 5 Science · English school book (first term 2026/2027, pages 52-63)
   Lessons: 1 Structure of a Luffa Flower (52-54) · 2 How to Use a Microscope (55-59) · 3 Pollination and How Fruits Grow (60-62) · Review & Practice (63)
   Idea letters (one per lesson): E = lesson 1 · J = lesson 2 · N = lesson 3
   Rules: answers of mc/fill at index 0 (the page shuffles) · one Boss idea per lesson (every variant mode:'boss') · about a third timed
          distractors = real misconceptions · term/fix answers ≤ 18 letters · core and Boss only from the school book
   Review notes for the owner:
   - pollinationBags (A grew a fruit, B did not): the book asks "which flower grew a fruit?" without printing the result; it is derived from
     "To become a fruit, pollination is necessary" and from Exercise 2(2) (a flower that is not pollinated turns yellow and its fruit falls off).
   - The order of the microscope steps follows Exercise 2(3) (page 59): reflector → slide on the stage → bring the slide and the lens close → focus while moving apart.
   - The picture of the flower (page 53) shows, from the outside: sepal, petal, pistil (Review (1), page 63). The drawings are original.
   - Not asked: the open record-card activities, "Let’s discuss which flower grew a fruit", and the microscope parts A to E of the exercise (the letters are on the book’s picture). */
window.CHAPTER = { id: 'g5-lang-ch5', title: 'From Flower to Fruit', grade: 'Grade 5', track: 'Languages' };

window.IDEAS = [
  /* ---------- Lesson 1 · Structure of a Luffa Flower ---------- */
  { id: 'E1', lesson: 1, concept: 'Two types of flowers on one plant',
    explain: 'Luffa and pumpkin plants have two types of flowers on one plant: male flowers and female flowers.',
    variants: [
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'Luffa and pumpkin plants have two types of flowers on one plant.', answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Luffa plants have male flowers and ___ flowers.', options: ['female', 'baby', 'seed'], answer: 0 },
      { type: 'tap', diagram: 'luffaFlowers', mode: 'normal', level: 'medium', q: 'Luffa flowers are not all the same. Tap the luffa flower that already has a small fruit under it.', answer: 'female' }
    ] },
  { id: 'E2', lesson: 1, concept: 'The male flower: stamen and pollen',
    explain: 'The male flower has a stamen in the center. The stamen makes yellow pollen (a yellow powder).',
    variants: [
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'The male flower has a ___ in the center.', options: ['stamen', 'pistil', 'swelling'], answer: 0 },
      { type: 'term', mode: 'normal', level: 'medium', q: 'The yellow powder made by the stamen of a male flower.', answer: 'Pollen' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What do we call the part in the male flower that makes the yellow powder?', options: ['Stamen', 'Pistil', 'Petal', 'Sepal'], answer: 0 },
      { type: 'tap', diagram: 'flowerParts', mode: 'normal', level: 'medium', q: 'Tap the stamen of the male flower.', answer: 'stamen' },
      { type: 'tap', diagram: 'flowerParts', mode: 'normal', level: 'medium', q: 'Tap the yellow powder called pollen.', answer: 'pollen' }
    ] },
  { id: 'E3', lesson: 1, concept: 'The female flower: pistil and swelling',
    explain: 'The female flower has a pistil in the center and a swelling at the base of the flower that will become a fruit.',
    variants: [
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'The female flower has a ___ in the center.', options: ['pistil', 'stamen', 'pollen'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Which luffa flower has a swelling at the base that will become a fruit?', options: ['The female flower', 'The male flower', 'Both flowers', 'Neither flower'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What will the swelling at the base of the female flower become in the future?', options: ['A fruit', 'A stamen', 'Pollen', 'A petal'], answer: 0 },
      { type: 'tap', diagram: 'flowerParts', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap the swelling that will become a fruit.', answer: 'swelling' },
      { type: 'tap', diagram: 'flowerParts', mode: 'normal', level: 'medium', q: 'Tap the pistil of the female flower.', answer: 'pistil' }
    ] },
  { id: 'E4', lesson: 1, concept: 'Telling male and female flowers apart',
    explain: 'To tell the two flowers apart: look at the base of the flower for a small fruit-like swelling just below the petals, and look inside to see if the center is a stamen with powder on it or a pistil with a split tip.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'You see a luffa flower with a small fruit-like swelling just below its petals. What do you call it?', options: ['A female flower', 'A male flower', 'A pollen flower'], answer: 0 },
      { type: 'table', mode: 'normal', level: 'hard', q: 'Sort the clues: which flower has each one?', cols: ['Male flower', 'Female flower'], items: ['Stamen', 'Yellow pollen', 'Pistil', 'Swelling at the base'], answer: [0, 0, 1, 1] },
      { type: 'build', style: 'whatif', mode: 'normal', level: 'medium', q: 'You look inside a flower and see a pistil with a split tip. What kind of flower is it?', parts: ['A female', 'flower with a', 'swelling at its base'], extra: ['A male', 'with yellow pollen'] },
      { type: 'tap', diagram: 'luffaFlowers', mode: 'normal', level: 'medium', q: 'Tap the flower that has a stamen with powder on it.', answer: 'male' }
    ] },
  { id: 'E5', lesson: 1, boss: true, concept: 'Parts of the luffa flower',
    explain: 'The male flower has a stamen; the female flower has a pistil and a swelling. From the outside of a flower the order is: sepal, petal, pistil.',
    variants: [
      { type: 'mc', mode: 'boss', level: 'hard', q: 'Choose the correct answer about luffa flowers.', options: ['The male flower has a stamen, and the female flower has a pistil and a swelling', 'Both a stamen and a pistil are in one flower', 'The male flower has a pistil, and the female flower has a stamen and a swelling'], answer: 0 },
      { type: 'order', mode: 'boss', level: 'hard', q: 'In a common flower, put the parts in order from the outside to the center.', items: ['Pistil', 'Sepal', 'Petal'], answer: [1, 2, 0] },
      { type: 'match', mode: 'boss', level: 'hard', q: 'Match each flower to what it has.', left: ['Male flower', 'Female flower'], right: ['A stamen with yellow pollen', 'A pistil and a swelling'], answer: [0, 1] },
      { type: 'tap', diagram: 'flowerParts', mode: 'boss', level: 'hard', q: 'Tap a sepal: the small green part under the petals.', answer: 'sepal' }
    ] },

  /* ---------- Lesson 2 · How to Use a Microscope ---------- */
  { id: 'J1', lesson: 2, concept: 'What a microscope does',
    explain: 'A microscope makes things that are hard to see with your eyes or a magnifying glass bigger, so you can look at them in detail.',
    variants: [
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'A microscope makes things that are hard to see with your eyes bigger.', answer: 0 },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Why do we use a microscope to look at pollen?', options: ['Pollen is tiny, and a microscope makes it look bigger', 'To make pollen yellow', 'To make pollen move', 'To count the petals'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'A microscope makes tiny things look ___.', options: ['bigger', 'smaller', 'darker'], answer: 0 }
    ] },
  { id: 'J2', lesson: 2, concept: 'The prepared slide',
    explain: 'A prepared slide holds the thing you want to observe between two pieces of glass. To make it: put the thing on a slide (1 or 2 drops of water if needed), slowly lower the cover glass from one side so air bubbles do not get in, then gently soak up the extra water with filter paper.',
    variants: [
      { type: 'term', mode: 'normal', level: 'medium', q: 'Something you want to observe, held between two pieces of glass to make it easy to look at.', answer: 'Prepared slide' },
      { type: 'order', mode: 'normal', level: 'medium', q: 'Put the steps of making a prepared slide in order.', items: ['Gently soak up the extra water with filter paper', 'Put the thing you want to observe on a slide', 'Slowly lower the cover glass from one side'], answer: [1, 2, 0] },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Why do we lower the cover glass slowly from one side?', options: ['So air bubbles do not get in', 'So the water dries faster', 'So the pollen turns yellow', 'So the slide gets warm'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'We use ___ paper to gently soak up the extra water around the edges.', options: ['filter', 'tissue', 'colored'], answer: 0 }
    ] },
  { id: 'J3', lesson: 2, concept: 'Names of the microscope parts',
    explain: 'The parts of a microscope are: eyepiece lens, tube, arm, adjustment knob, revolving nosepiece, objective lens, clips, stage and reflector.',
    variants: [
      { type: 'tap', diagram: 'microscope', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap the eyepiece lens: the lens you look through.', answer: 'eyepiece' },
      { type: 'tap', diagram: 'microscope', mode: 'normal', level: 'medium', q: 'Tap the stage, where you put the prepared slide.', answer: 'stage' },
      { type: 'tap', diagram: 'microscope', mode: 'normal', level: 'medium', q: 'Tap the reflector, which you adjust to make the view bright.', answer: 'reflector' },
      { type: 'tap', diagram: 'microscope', mode: 'normal', level: 'medium', q: 'Tap the adjustment knob, which you turn to focus.', answer: 'knob' },
      { type: 'tap', diagram: 'microscope', mode: 'normal', level: 'medium', q: 'Tap the objective lens.', answer: 'objective' },
      { type: 'tap', diagram: 'microscope', mode: 'normal', level: 'hard', q: 'Tap the revolving nosepiece.', answer: 'nosepiece' },
      { type: 'tap', diagram: 'microscope', mode: 'normal', level: 'hard', q: 'Tap the clips.', answer: 'clips' },
      { type: 'tap', diagram: 'microscope', mode: 'normal', level: 'hard', q: 'Tap the arm.', answer: 'arm' }
    ] },
  { id: 'J4', lesson: 2, concept: 'Where to use a microscope',
    explain: 'Put the microscope in a flat, bright place away from direct sunlight.',
    variants: [
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Put the microscope in a flat, ___ place.', options: ['bright', 'dark', 'wet'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'A microscope should be where direct ___ does not hit.', options: ['sunlight', 'wind', 'shade'], answer: 0 },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'The best place for a microscope is in direct sunlight.', answer: 1 }
    ] },
  { id: 'J5', lesson: 2, concept: 'How to operate the microscope',
    explain: 'Set the objective lens to the lowest magnification, adjust the reflector to make the view bright, put the prepared slide on the stage, then while looking from the side turn the knob to bring the slide and the lens close together. Next look through the eyepiece and adjust the focus while moving the lens away from the slide.',
    variants: [
      { type: 'order', mode: 'normal', level: 'hard', q: 'Put the steps of using a microscope in order.', items: ['Adjust the focus while slowly widening the space between the slide and the lens', 'Adjust the reflector to make the whole view bright', 'Put the prepared slide on the stage', 'Turn the knob little by little to bring the slide close to the objective lens'], answer: [1, 2, 3, 0] },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Why do we look from the side when bringing the slide and the objective lens close together?', options: ['To keep the lens from hitting the slide and breaking it', 'To see the pollen better', 'To make the view brighter', 'To keep air bubbles out'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which objective lens do we set first?', options: ['The lowest magnification', 'The highest magnification', 'Any one we like'], answer: 0 },
      { type: 'build', style: 'why', mode: 'normal', level: 'hard', q: 'We look from the side while bringing the slide close to the lens.', parts: ['Because the lens', 'could hit the slide', 'and break it'], extra: ['Because the view', 'gets wider'] }
    ] },
  { id: 'J6', lesson: 2, concept: 'How things look in a microscope',
    explain: 'In a microscope the object looks upside down and reversed left to right. Because of this, you move the object in the opposite direction you want it to go.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'How does an object look in a microscope?', options: ['Upside down and reversed left to right', 'Exactly the same way up', 'Only reversed top to bottom', 'Smaller than it really is'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'hard', q: 'You want the object in the view to go to the left. Which way do you move the slide?', options: ['To the right', 'To the left', 'Up', 'You cannot move it'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'In a microscope, you move the object in the ___ direction you want it to go.', options: ['opposite', 'same', 'upward'], answer: 0 }
    ] },
  { id: 'J7', lesson: 2, concept: 'Magnification',
    explain: 'Low magnification: the view is wide and bright. High magnification: the view is narrow and dark. Start with low magnification, then change to high, because the view is wider at low magnification, so it is easier to find what you want to observe. Microscope magnification = eyepiece lens magnification × objective lens magnification.',
    variants: [
      { type: 'table', mode: 'normal', level: 'medium', q: 'Sort what you see.', cols: ['Low magnification', 'High magnification'], items: ['The view is wide', 'The view is bright', 'The view is narrow', 'The view is dark'], answer: [0, 0, 1, 1] },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'When observing, do you start with low or high magnification?', options: ['Low magnification', 'High magnification'], answer: 0 },
      { type: 'build', style: 'why', mode: 'normal', level: 'hard', q: 'We start observing with low magnification.', parts: ['Because the view is wider,', 'so it is easier', 'to find what we want to observe'], extra: ['Because the view is darker,', 'so it is harder'] },
      { type: 'mc', mode: 'normal', level: 'hard', q: 'The eyepiece lens is 10× and the objective lens is 40×. What is the magnification of the microscope?', options: ['400×', '50×', '30×', '4×'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Magnification = eyepiece lens magnification × ___ lens magnification.', options: ['objective', 'cover', 'reflector'], answer: 0 }
    ] },
  { id: 'J8', lesson: 2, boss: true, concept: 'Observing pollen',
    explain: 'To look at luffa pollen: collect pollen from the stamen of a male flower, put it on a slide with a few drops of water, gently place a cover glass over it, start with the lowest magnification, and adjust the focus while moving the lens away from the slide.',
    variants: [
      { type: 'fill', mode: 'boss', level: 'hard', q: 'We collect pollen from the ___ of a male luffa flower.', options: ['stamen', 'pistil', 'swelling'], answer: 0 },
      { type: 'mc', mode: 'boss', level: 'hard', q: 'When adjusting the focus, in which direction do you turn the knob while looking through the lens?', options: ['The direction that moves the objective lens away from the prepared slide', 'The direction that brings the objective lens closer to the prepared slide'], answer: 0 },
      { type: 'order', mode: 'boss', level: 'hard', q: 'Put the steps of observing pollen in order.', items: ['Choose the lowest magnification', 'Put the pollen on a slide with a few drops of water and add a cover glass', 'Collect pollen from the stamen of a male flower'], answer: [2, 1, 0] }
    ] },

  /* ---------- Lesson 3 · Pollination and How Fruits Grow ---------- */
  { id: 'N1', lesson: 3, concept: 'What pollination is',
    explain: 'When pollen from a male flower attaches to the tip of a pistil in a female flower, it is called pollination.',
    variants: [
      { type: 'term', mode: 'normal', level: 'medium', q: 'Pollen from a male flower attaches to the tip of a pistil in a female flower.', answer: 'Pollination' },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'What is it called when pollen attaches to the tip of a pistil?', options: ['Pollination', 'Germination', 'Observation', 'Magnification'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Pollen from a male flower attaches to the tip of the ___ of a female flower.', options: ['pistil', 'stamen', 'sepal'], answer: 0 }
    ] },
  { id: 'N2', lesson: 3, concept: 'Pollination is necessary for a fruit',
    explain: 'To become a fruit, pollination is necessary. For plants with male and female flowers like luffas, bugs like bees carry pollen to pollinate them.',
    variants: [
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'To become a fruit, pollination is necessary.', answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Bugs like ___ carry pollen to pollinate luffa flowers.', options: ['bees', 'ants', 'worms'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What carries pollen for luffa plants to pollinate?', options: ['Bugs like bees', 'Water from the soil', 'The petals', 'The seeds'], answer: 0 }
    ] },
  { id: 'N3', lesson: 3, concept: 'From pollination to seeds',
    explain: 'After pollination, the base of the pistil becomes a fruit, and seeds are made inside. After that, the seeds sprout and grow, passing on the plant’s life.',
    variants: [
      { type: 'order', mode: 'normal', level: 'medium', q: 'Put the changes in order.', items: ['Seeds are made inside the fruit', 'Pollination', 'The swelling at the base grows'], answer: [1, 2, 0] },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What becomes a fruit after pollination?', options: ['The base of the pistil', 'The petals', 'The stamen', 'The sepals'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'After pollination, ___ are made inside the fruit.', options: ['seeds', 'petals', 'stamens'], answer: 0 }
    ] },
  { id: 'N4', lesson: 3, concept: 'The pollination experiment',
    explain: 'Two female flowers are covered with paper bags. When they bloom, the bag is taken off flower A and pollen from the male flower is put directly onto its pistil with a brush or a cotton swab; then the bag is put back. Flower B is not pollinated.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'In the experiment, what do we do to female flower A when it blooms?', options: ['Put pollen from the male flower directly onto its pistil', 'Cut off its petals', 'Keep the bag on and do nothing', 'Water it with fertilizer'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'We put pollen on the pistil with a brush or a ___.', options: ['cotton swab', 'ruler', 'microscope'], answer: 0 },
      { type: 'tap', diagram: 'pollinationBags', mode: 'normal', level: 'hard', q: 'Flower A got pollen from a male flower. Flower B did not. Tap the flower that grew a fruit.', answer: 'A' }
    ] },
  { id: 'N5', lesson: 3, boss: true, concept: 'A flower that is not pollinated',
    explain: 'A female flower that is not pollinated turns yellow, and the fruit falls off without growing.',
    variants: [
      { type: 'mc', mode: 'boss', level: 'hard', q: 'What happens to a female flower that is not pollinated?', options: ['It turns yellow, and the fruit falls off without growing', 'The fruit slowly grows bigger', 'It just becomes a seed as it is'], answer: 0 },
      { type: 'build', style: 'whatif', mode: 'boss', level: 'hard', q: 'What happens to a female luffa flower that nobody pollinates?', parts: ['It turns yellow', 'and the fruit falls off', 'without growing'], extra: ['and the fruit', 'grows bigger'] },
      { type: 'tf', mode: 'boss', level: 'hard', q: 'A female flower can become a fruit without pollination.', answer: 1 },
      { type: 'term', mode: 'boss', level: 'hard', q: 'The yellow powder made at the tip of the stamen in a male luffa flower.', answer: 'Pollen' }
    ] },
  /* ---------- November 2026 exam models (directorate models 1-10, sent by the owner 26 Nov 2026) ----------
     guide: true = asked in the official models; drawn by the November test and kept out of Daily 5. */
  { id: 'E30', lesson: 1, bonus: true, guide: true, concept: 'Sepals and petals',
    explain: 'Sepals are the green outer parts below the petals; they protect the flower bud. Petals are the coloured parts that attract pollinating insects. Both male and female luffa flowers have sepals and petals.',
    variants: [
      { type: 'term', mode: 'normal', level: 'easy', q: 'Who am I? I am the coloured flower parts that help attract pollinating insects.', answer: 'Petals', choices: ['Sepals', 'Stamen', 'Pistil'], hint: 'Insects see my bright colour from far away.' },
      { type: 'term', mode: 'normal', level: 'easy', q: 'Who am I? I am the green outer flower parts below the petals that protect the flower bud.', answer: 'Sepals', choices: ['Petals', 'Pistil', 'Stamen'], hint: 'I am green and I am the outermost part of the flower.' },
      { type: 'tf', mode: 'timed', seconds: 12, level: 'easy', q: 'Both male and female luffa flowers have sepals and petals.', answer: 0, hint: 'The two flowers differ only in the centre.' }
    ] },
  { id: 'E31', lesson: 1, bonus: true, guide: true, concept: 'The parts of male and female flowers',
    explain: 'A male luffa flower has sepals, petals and a stamen that makes yellow pollen. A female flower has sepals, petals, a pistil whose tip (stigma) receives pollen, and a swelling at its base.',
    variants: [
      { type: 'multi', mode: 'normal', level: 'medium', q: 'Mention three basic parts of a male luffa flower. Choose all correct answers.', options: ['Sepals', 'Petals', 'Stamen', 'Pistil', 'Swelling at the base'], answer: [0, 1, 2], hint: 'The male flower has no swelling and no pistil.' },
      { type: 'term', mode: 'normal', level: 'easy', q: 'Who am I? I am the part at the centre of a male flower that makes the yellow pollen powder.', answer: 'Stamen', choices: ['Pistil', 'Sepal', 'Petal'], hint: 'I am in the male flower, not the female one.' },
      { type: 'term', mode: 'normal', level: 'medium', q: 'Who am I? I am the female flower structure whose tip (stigma) receives pollen grains.', answer: 'Pistil', choices: ['Stamen', 'Sepal', 'Petal'], hint: 'I am in the centre of the female flower.' },
      { type: 'term', mode: 'normal', level: 'medium', q: 'A flower with sepals, petals and a fruit-like swelling at its base.', answer: 'Female flower', choices: ['Male flower', 'Seedling', 'Stamen'], hint: 'Which luffa flower will become a fruit?' },
      { type: 'tf', mode: 'timed', seconds: 12, level: 'easy', q: 'A male luffa flower has a pistil in its centre and a swelling at its base.', answer: 1, hint: 'Which flower has the swelling?' }
    ] },
  { id: 'J30', lesson: 2, bonus: true, guide: true, concept: 'Who am I? Microscope parts',
    explain: 'The tube carries the eyepiece lens. The revolving nosepiece carries the objective lenses and turns to choose one. The reflector, below the stage, directs light towards the specimen.',
    variants: [
      { type: 'term', mode: 'normal', level: 'medium', q: 'Who am I? I carry the eyepiece lens and form the cylinder you look through in a microscope.', answer: 'Tube', choices: ['Arm', 'Stage', 'Reflector'], hint: 'I am a long hollow cylinder.' },
      { type: 'term', mode: 'normal', level: 'medium', q: 'Who am I? I carry the objective lenses and turn to select one.', answer: 'Nosepiece', choices: ['Stage', 'Clips', 'Cover glass'], hint: 'I am called “revolving” because I turn.' },
      { type: 'term', mode: 'normal', level: 'medium', q: 'The microscope part below the stage that directs light towards the specimen.', answer: 'Reflector', choices: ['Eyepiece lens', 'Clips', 'Arm'], hint: 'I reflect light like a small mirror.' }
    ] },
  { id: 'J31', lesson: 2, bonus: true, guide: true, concept: 'Jobs of the stage, clips and knob',
    explain: 'We put the prepared slide on the stage; the clips hold it in place; turning the adjustment knob focuses the image. If the slide is not held by the clips it can move, and the object goes out of view.',
    variants: [
      { type: 'match', mode: 'normal', level: 'medium', q: 'Mention the function of each microscope part.', left: ['Stage', 'Clips', 'Adjustment knob'], right: ['We put the prepared slide on it', 'Hold the slide in place', 'Focuses the image'], answer: [0, 1, 2], hint: 'Clips hold things, like a hair clip.' },
      { type: 'build', style: 'whatif', mode: 'normal', level: 'hard', q: 'What happens if the prepared slide is not secured with clips on the microscope stage?', parts: ['The slide can move', 'and the object goes', 'out of view'], extra: ['becomes bigger', 'and brighter'], hint: 'What is the job of the clips?' }
    ] },
  { id: 'J32', lesson: 2, bonus: true, guide: true, concept: 'Magnification',
    explain: 'Magnification is the number of times larger the image looks than the real object. Different objective lenses have different magnification powers. Total magnification = eyepiece × objective: 10× × 60× = 600×.',
    variants: [
      { type: 'term', mode: 'normal', level: 'medium', q: 'The number of times larger the observed image appears compared with the real object.', answer: 'Magnification', choices: ['Pollination', 'Reflection', 'Germination'], hint: 'A microscope does it to tiny things.' },
      { type: 'tf', mode: 'timed', seconds: 12, level: 'easy', q: 'Different objective lenses in a microscope have different magnification powers.', answer: 0, hint: 'Why do we turn the nosepiece to choose a lens?' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Calculate: an eyepiece lens is 10× and an objective lens is 60×. What is the total magnification?', options: ['600×', '70×', '50×', '6000×'], answer: 0, hint: 'Multiply: eyepiece × objective.' }
    ] },
  { id: 'N30', lesson: 3, bonus: true, guide: true, concept: 'Pollinators',
    explain: 'Living things such as bees that carry pollen grains between flowers are called pollinators. The main natural pollinators of luffa flowers are insects. Bees are friends of farmers because they pollinate the flowers, so fruits form.',
    variants: [
      { type: 'term', mode: 'normal', level: 'medium', q: 'Living organisms such as bees that transfer pollen grains between flowers as they move.', answer: 'Pollinators', choices: ['Fertilizers', 'Seedlings', 'Stamens'], hint: 'They do the job called pollination.' },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'The main natural pollinators of luffa flowers are ...', options: ['insects', 'winds', 'water', 'humans'], answer: 0, hint: 'Think of bees.' },
      { type: 'build', style: 'why', mode: 'normal', level: 'medium', q: 'Why are bees considered friends of farmers and important for fruit production in luffa?', parts: ['Because they carry pollen', 'from male to female flowers,', 'so fruits form'], extra: ['Because they eat', 'the harmful leaves'], hint: 'What do bees carry from flower to flower?' }
    ] },
  { id: 'N31', lesson: 3, bonus: true, guide: true, concept: 'Why the flowers are covered',
    explain: 'In the pollination experiment the female flower buds are covered with paper bags before they open, so that insects cannot bring pollen to them. Then only the pollen we put on flower A can pollinate it.',
    variants: [
      { type: 'build', style: 'why', mode: 'normal', level: 'medium', q: 'Why do scientists cover female luffa flower buds with paper bags before they open in the pollination experiment?', parts: ['So that insects', 'cannot bring pollen', 'to them'], extra: ['So that they get', 'more sunlight'], hint: 'Who could pollinate the flower without us?' },
      { type: 'build', style: 'whatif', mode: 'normal', level: 'hard', q: 'What happens if all pollinating insects disappeared from an environment with insect-pollinated plants?', parts: ['Pollination does not happen,', 'so no fruits', 'and no seeds form'], extra: ['the fruits', 'grow bigger'], hint: 'Who carries the pollen in nature?' }
    ] },
  { id: 'N32', lesson: 3, bonus: true, guide: true, concept: 'From pollination to a new plant',
    explain: 'After pollination the swollen base of the female flower (the base of the pistil) grows into a fruit, and seeds form inside it. When a seed is planted it germinates and a new plant grows. The male flower does not become a fruit.',
    variants: [
      { type: 'order', mode: 'normal', level: 'medium', q: 'Mention the correct sequence of fruit and seed formation, from pollination until a new plant grows.', items: ['Seeds form inside the fruit', 'Pollination', 'A seed germinates into a new plant', 'The swollen base grows into a fruit'], answer: [1, 3, 0, 2], hint: 'It starts with pollen on the pistil and ends with a new plant.' },
      { type: 'term', mode: 'normal', level: 'easy', q: 'The structure that develops from the swollen base of a pollinated flower and contains seeds.', answer: 'Fruit', choices: ['Seed', 'Petal', 'Pollen'], hint: 'The luffa we eat.' },
      { type: 'tf', mode: 'timed', seconds: 12, level: 'easy', q: 'The male luffa flower develops directly into a fruit after pollination.', answer: 1, hint: 'Which flower has the swelling?' }
    ] }
];
