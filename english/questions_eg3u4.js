/* English · Grade 3 · Term 1 · Unit 4 "Let’s Tell Stories!" · ministry book "English Primary 3", first term 2026/2027 (book pages 67-81)
   One English book for both tracks, so there is no _ar file.
   Lessons: 1 How We Feel: emotions, story "Adam and Omar in the Garden", linking words, irregular past, hard c = /k/ (pp 68-73)
            2 A Helping Hand: Sara's story, past simple, then / but / and, capital letters, soft c = /s/ (pp 74-77)
            3 A Big Win: Omar's football match, emotions, past verbs, when / but / after, punctuation, self-assessment (pp 78-81)
   Idea letters (one per lesson, running on from Units 1-3): N, O, P.  Boss ideas: N8, O7, P7.
   Easy first, difficulty rises slowly; hard only in the Boss idea. Every phrasing has a hint that points to the rule or the text, never the answer.
   Pictures: the owner's Gemini sheets (13 Nov 2026) cut into english/assets/g3_*.webp; tap pictures feel9 and csound9, fig 'photo'.
     A story picture is shown only with "Which sentence matches the picture?" (the picture is the question) or with a question it does not answer.
   Review notes:
   - Listening tasks (p 68, p 73 ex 4, p 77 ex 4) are asked from the printed words.
   - Open tasks are not asked: p 69 ex 2 (own feeling), p 78 ex 3, p 80 (draw and write), and the p 81 self-assessment.
   - p 72 ex 2 (period or question mark) repeats Unit 3 p 54 word for word: it is asked once only, in Unit 3 (J5, J6).
   - p 70 "Write the linking words you found" prints no answer; the story's words from the Tip box are Then and Finally: asked as a choice.
   - p 72 ex 1 a "Where did Adam and Omar go?": p 70 says "in the garden", p 73 says "in the park". Asked from p 70 (the story page): garden.
   - p 76 ex 2 c "cien" = nice. p 73 ex 5 c "sckut" = stuck, d "ikclde" = licked. */
(function () {
window.CHAPTER = { id: 'eg3u4', title: 'Let’s Tell Stories!' };
const ph = (...src) => ({ src, label: 'A picture for the question' });

window.IDEAS = [
  /* ---------- Lesson 1 · How We Feel (pages 68-73) ---------- */
  { id: 'N1', lesson: 1, concept: 'Our emotions: happy, sad, excited, angry, shy, tired, bored, scared (pp 68-69)',
    explain: 'Our emotions: happy, sad, excited, angry, shy, tired, bored and scared.',
    variants: [
      { type: 'tap', diagram: 'feel9', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap: happy.', answer: 'emHappy', hint: 'Look for a calm smile.' },
      { type: 'tap', diagram: 'feel9', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap: sad.', answer: 'emSad', hint: 'Look for sad eyes and a down mouth.' },
      { type: 'tap', diagram: 'feel9', mode: 'normal', level: 'easy', q: 'Tap: angry.', answer: 'emAngry', hint: 'A red face and tight hands.' },
      { type: 'tap', diagram: 'feel9', mode: 'normal', level: 'easy', q: 'Tap: tired.', answer: 'emTired', hint: 'He is yawning.' },
      { type: 'tap', diagram: 'feel9', mode: 'normal', level: 'medium', q: 'Tap: excited.', answer: 'emExcited', hint: 'She jumps up with her arm high.' },
      { type: 'tap', diagram: 'feel9', mode: 'normal', level: 'medium', q: 'Tap: scared.', answer: 'emScared', hint: 'Very wide eyes and an open mouth.' },
      { type: 'tap', diagram: 'feel9', mode: 'normal', level: 'medium', q: 'Tap: bored.', answer: 'emBored', hint: 'Two children with nothing to do.' },
      { type: 'tap', diagram: 'feel9', mode: 'normal', level: 'medium', q: 'Tap: shy.', answer: 'emShy', hint: 'Red cheeks, she hides her mouth.' }
    ] },
  { id: 'N2', lesson: 1, concept: 'How do you feel? I feel so happy! (p 69 ex 2)',
    explain: 'How do you feel? I feel so happy! When I play with my friends, I feel happy.',
    variants: [
      { type: 'mc', fig: 'photo', pic: ph('g3_e_tired'), mode: 'normal', level: 'easy', q: 'How does he feel?', options: ['He feels tired.', 'He feels angry.', 'He feels excited.'], answer: 0, hint: 'He is yawning.' },
      { type: 'mc', fig: 'photo', pic: ph('g3_e_sad'), mode: 'normal', level: 'easy', q: 'How does she feel?', options: ['She feels sad.', 'She feels happy.', 'She feels excited.'], answer: 0, hint: 'Look at her eyes and mouth.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: '“How do you feel?” — “___”', options: ['I feel so happy!', 'I am 8 years old.', 'I go to school.'], answer: 0, hint: 'The answer is a feeling.' },
      { type: 'mc', fig: 'photo', pic: ph('g3_e_angry'), mode: 'normal', level: 'medium', q: 'How does he feel?', options: ['He feels angry.', 'He feels shy.', 'He feels bored.'], answer: 0, hint: 'Look at his red face.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'How do you feel when you play with your friends?', options: ['I feel happy.', 'I feel tired.', 'I feel scared.'], answer: 0, hint: 'Playing with friends is fun.' }
    ] },
  { id: 'N3', lesson: 1, concept: 'Story: Adam and Omar in the Garden (pp 70, 72)',
    explain: 'Adam and Omar were playing in the garden when they heard a cat cry. Then, they quickly followed the sound, and soon they saw the cat stuck in a fence. Because the hole was small, Adam held the fence while Omar carefully pulled the cat out. Finally, the cat jumped free and licked their hands. Since they worked as a team, they saved the cat. They felt happy and proud.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Where were Adam and Omar playing?', options: ['in the garden', 'at school', 'in the library'], answer: 0, hint: 'Read the first sentence.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What did they hear?', options: ['a cat cry', 'a dog bark', 'a bird sing'], answer: 0, hint: 'Read: they heard a …' },
      { type: 'mc', fig: 'photo', pic: ph('g3_ct_stuck'), mode: 'normal', level: 'easy', q: 'Which sentence matches the picture?', options: ['The cat was stuck in a fence.', 'The cat jumped free.', 'The cat licked their hands.'], answer: 0, hint: 'Where is the cat?' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What was the problem?', options: ['A cat was stuck in a fence.', 'Adam was hurt.', 'They lost their ball.'], answer: 0, hint: 'Read: they saw the cat …' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'How did they solve it?', options: ['Adam held the fence while Omar pulled the cat out.', 'They called their mother.', 'They gave the cat some milk.'], answer: 0, hint: 'They worked as a team.' },
      { type: 'mc', fig: 'photo', pic: ph('g3_ct_lick'), mode: 'normal', level: 'medium', q: 'Which sentence matches the picture?', options: ['The cat licked their hands.', 'They heard a cat cry.', 'Adam held the fence.'], answer: 0, hint: 'Look at the cat’s tongue.' },
      { type: 'multi', mode: 'normal', level: 'medium', q: 'How did the boys feel at the end? Choose two.', options: ['happy', 'proud', 'scared', 'bored'], answer: [0, 1], hint: 'Read the last sentence.' }
    ] },
  { id: 'N4', lesson: 1, concept: 'Linking words: First, Then, After that, Finally (p 70)',
    explain: 'Linking words make the story clear and easy to follow: First, Then, After that, Finally. In the story: Then, they quickly followed the sound. Finally, the cat jumped free.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Which one is a linking word?', options: ['Then', 'cat', 'garden'], answer: 0, hint: 'It tells you what happens next.' },
      { type: 'fill', mode: 'normal', level: 'easy', q: '___, they quickly followed the sound.', options: ['Then', 'Finally', 'First'], answer: 0, hint: 'It happened after they heard the cat.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: '___, the cat jumped free and licked their hands.', options: ['Finally', 'First', 'Then'], answer: 0, hint: 'It is the end of the story.' },
      { type: 'multi', mode: 'normal', level: 'medium', q: 'Choose all the linking words.', options: ['First', 'After that', 'Finally', 'fence'], answer: [0, 1, 2], hint: 'Look at the Tip box: First, Then, After that, Finally.' }
    ] },
  { id: 'N5', lesson: 1, concept: 'Past simple: irregular verbs (p 71)',
    explain: 'Irregular verbs are special words! We do NOT add -ed. is → was, are → were, do → did, see → saw, come → came, have → had, go → went, eat → ate. She went to the park.',
    variants: [
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'go → ?', options: ['went', 'goed', 'goes'], answer: 0, hint: 'go is a special verb: no -ed.' },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'eat → ?', options: ['ate', 'eated', 'eats'], answer: 0, hint: 'eat is a special verb: no -ed.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'is → ?', options: ['was', 'were', 'ised'], answer: 0, hint: 'One person or thing in the past.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'see → ?', options: ['saw', 'seed', 'sees'], answer: 0, hint: 'Look at the table on page 71.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'have → ?', options: ['had', 'haved', 'has'], answer: 0, hint: 'Look at the table on page 71.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'come → ?', options: ['came', 'comed', 'comes'], answer: 0, hint: 'Look at the table on page 71.' },
      { type: 'match', mode: 'normal', level: 'medium', q: 'Match the verb to its past.', left: ['are', 'do', 'see', 'go'], right: ['were', 'did', 'saw', 'went'], answer: [0, 1, 2, 3], hint: 'None of them adds -ed.' }
    ] },
  { id: 'N6', lesson: 1, concept: 'Circle the correct verb in the past (p 71 ex 4 and 5)',
    explain: 'Adam and Omar were playing in the park. They saw a cat in trouble. The cat jumped free. Omar pulled the cat out. Both boys felt proud. They were happy and proud.',
    variants: [
      { type: 'fill', mode: 'normal', level: 'easy', q: 'Adam and Omar ___ playing in the park.', options: ['were', 'are'], answer: 0, hint: 'It happened in the past. Two boys: were.' },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'They ___ a cat in trouble.', options: ['saw', 'see'], answer: 0, hint: 'see → saw' },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'The cat ___ free.', options: ['jumped', 'jump'], answer: 0, hint: 'Past: add -ed.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Omar ___ the cat out.', options: ['pulled', 'pull'], answer: 0, hint: 'Past: add -ed.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Both boys ___ proud.', options: ['felt', 'feel'], answer: 0, hint: 'The past of feel is a special word.' }
    ] },
  { id: 'N7', lesson: 1, concept: 'Phonics: hard c = /k/ before a, o, u, and ck (p 73)',
    explain: '“c” makes a hard /k/ sound when it is followed by a, o or u, or at the end of a word as “ck”: cat, came, cold, carry, cup, coat, cry, licked, stuck, carefully.',
    variants: [
      { type: 'tap', diagram: 'csound9', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap: cat.', answer: 'csCat', hint: 'A pet that says meow.' },
      { type: 'tap', diagram: 'csound9', mode: 'normal', level: 'easy', q: 'Tap: coat.', answer: 'csCoat', hint: 'You wear it in winter.' },
      { type: 'tap', diagram: 'csound9', mode: 'normal', level: 'easy', q: 'Tap: cold.', answer: 'csCold', hint: 'Look for snow.' },
      { type: 'tap', diagram: 'csound9', mode: 'normal', level: 'medium', q: 'Tap: carry.', answer: 'csCarry', hint: 'She holds a big box and walks.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Fill in the missing letter: _ at', options: ['c', 's', 'k'], answer: 0, hint: 'A pet that says meow.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Fill in the missing letter: _ ry', options: ['c', 's', 'g'], answer: 0, hint: 'They heard a cat …' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Fill in the missing letter: li _ ked', options: ['c', 's', 'x'], answer: 0, hint: 'It ends with ck.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Fill in the missing letter: _ arefully', options: ['c', 's', 'g'], answer: 0, hint: 'c before a says /k/.' }
    ] },
  { id: 'N8', lesson: 1, boss: true, concept: 'Emotions, the story, irregular past and hard c',
    explain: 'tac = cat, ycr = cry, sckut = stuck, ikclde = licked. Irregular verbs do not add -ed.',
    variants: [
      { type: 'mc', mode: 'boss', level: 'hard', q: 'Rearrange: s c k t u', options: ['stuck', 'sock', 'truck'], answer: 0, hint: 'The cat was … in a fence.' },
      { type: 'mc', mode: 'boss', level: 'hard', q: 'Rearrange: i k c l d e', options: ['licked', 'liked', 'clicked'], answer: 0, hint: 'The cat … their hands.' },
      { type: 'table', mode: 'boss', level: 'hard', q: 'How do we make the past?', poc: 'Verb', cols: ['add -ed', 'special word'], items: ['jump', 'see', 'pull', 'eat', 'play', 'go'], answer: [0, 1, 0, 1, 0, 1], hint: 'Look at the table on page 71: see, eat and go are special.' },
      { type: 'order', mode: 'boss', level: 'hard', q: 'Put the story in order.', items: ['They saw the cat stuck in a fence.', 'They heard a cat cry.', 'The cat jumped free.', 'Omar pulled the cat out.'], answer: [1, 0, 3, 2], hint: 'First they heard it; finally it jumped free.' }
    ] },

  /* ---------- Lesson 2 · A Helping Hand (pages 74-77) ---------- */
  { id: 'O1', lesson: 2, concept: 'Story: Sara in the park (p 74)',
    explain: 'One sunny day, Sara went to the park because she was bored. She drew a picture with her pencil. She was happy and smiled at her friend. Then she fell and hurt her knee. Sara felt sad and scared. Her friend helped her stand up. Sara said, “Thank you”, and smiled again. Now she was tired, but she felt better.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Why did Sara go to the park?', options: ['Because she was bored.', 'Because she was sad.', 'Because she was angry.'], answer: 0, hint: 'Read: … because she was …' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What did Sara draw with?', options: ['her pencil', 'her finger', 'a stick'], answer: 0, hint: 'Read the second sentence.' },
      { type: 'mc', fig: 'photo', pic: ph('g3_sa_fell'), mode: 'normal', level: 'easy', q: 'Which sentence matches the picture?', options: ['She fell and hurt her knee.', 'She drew a picture.', 'She smiled at her friend.'], answer: 0, hint: 'Look at her knee.' },
      { type: 'mc', fig: 'photo', pic: ph('g3_sa_help'), mode: 'normal', level: 'medium', q: 'Which sentence matches the picture?', options: ['Her friend helped her stand up.', 'Sara went to the park.', 'Sara was bored.'], answer: 0, hint: 'Look at their hands.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What did Sara say to her friend?', options: ['Thank you.', 'Goodbye.', 'Good morning.'], answer: 0, hint: 'Her friend helped her.' },
      { type: 'multi', mode: 'normal', level: 'medium', q: 'How did Sara feel when she fell? Choose two.', options: ['sad', 'scared', 'excited', 'bored'], answer: [0, 1], hint: 'Read: Sara felt … and …' },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'At the end, Sara was tired, but she felt better.', answer: 0, hint: 'Read the last sentence.' }
    ] },
  { id: 'O2', lesson: 2, concept: 'Past simple: go → went, draw → drew, fall → fell, help → helped (pp 74-75)',
    explain: 'Sara went to the park. She drew a picture. She fell and hurt her knee. Her friend helped her. Sara smiled at her friend’s nice face. She felt sad when she fell. She felt better after her friend helped her.',
    variants: [
      { type: 'fill', mode: 'normal', level: 'easy', q: 'Sara ___ to the park.', options: ['went', 'go'], answer: 0, hint: 'go → went' },
      { type: 'fill', fig: 'photo', pic: ph('g3_sa_draw'), mode: 'normal', level: 'easy', q: 'She ___ a picture.', options: ['drew', 'draw'], answer: 0, hint: 'draw → drew' },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'She ___ and hurt her knee.', options: ['fell', 'fall'], answer: 0, hint: 'fall → fell' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Her friend ___ her.', options: ['helped', 'help'], answer: 0, hint: 'help → helped' },
      { type: 'fill', fig: 'photo', pic: ph('g3_sa_show'), mode: 'normal', level: 'medium', q: 'Sara ___ at her friend’s nice face.', options: ['smiled', 'cried'], answer: 0, hint: 'Look at Sara’s face.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'She ___ better after her friend helped her.', options: ['felt', 'feel'], answer: 0, hint: 'It happened in the past.' }
    ] },
  { id: 'O3', lesson: 2, concept: 'Linking words: then, but, and (p 75 ex 4)',
    explain: 'Then: to talk about what happens next. But: to talk about something different. And: to add more or join. Sara played on the swings. Then she fell. She was hurt, but her friend helped her. Her friend helped, and Sara felt better.',
    variants: [
      { type: 'fill', fig: 'photo', pic: ph('g3_sa_swing'), mode: 'normal', level: 'easy', q: 'Sara played on the swings. ___ she fell.', options: ['Then', 'But', 'And'], answer: 0, hint: 'What happens next?' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'She was hurt, ___ her friend helped her.', options: ['but', 'then', 'and'], answer: 0, hint: 'Something different: hurt, and then a happy thing.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Her friend helped, ___ Sara felt better.', options: ['and', 'but', 'then'], answer: 0, hint: 'Join two good things.' },
      { type: 'match', mode: 'normal', level: 'medium', q: 'When do we use it?', left: ['Then', 'But', 'And'], right: ['what happens next', 'something different', 'to add more or join'], answer: [0, 1, 2], hint: 'Read the Note on page 75.' }
    ] },
  { id: 'O4', lesson: 2, concept: 'Capital letters and a period (p 75 ex 5)',
    explain: 'A sentence starts with a capital letter and ends with a period. Names start with a capital letter too: One sunny day, Sara went to the city park. She drew a picture with her pencil.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Which sentence is correct?', options: ['She drew a picture with her pencil.', 'she drew a picture with her pencil.', 'she drew a picture with her pencil'], answer: 0, hint: 'Capital letter at the start, period at the end.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which sentence is correct?', options: ['One sunny day, Sara went to the city park.', 'one sunny day, sara went to the city park.', 'One sunny day, sara went to the city park'], answer: 0, hint: 'Sara is a name: capital S.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which sentence is correct?', options: ['She smiled at her friend’s nice face.', 'she smiled at her friend’s nice face', 'She smiled at her friend’s nice face?'], answer: 0, hint: 'It is not a question.' }
    ] },
  { id: 'O5', lesson: 2, concept: 'Phonics: soft c = /s/ before e, i, y (p 76)',
    explain: '“c” makes the soft /s/ sound when followed by e, i or y: face, nice, city, ice, pencil, cent. Before a, o, u it says /k/: cat, cold, coat, cup.',
    variants: [
      { type: 'tap', diagram: 'csound9', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap: city.', answer: 'csCity', hint: 'Many tall buildings.' },
      { type: 'tap', diagram: 'csound9', mode: 'normal', level: 'easy', q: 'Tap: ice.', answer: 'csIce', hint: 'It is very cold and clear.' },
      { type: 'tap', diagram: 'csound9', mode: 'normal', level: 'easy', q: 'Tap: pencil.', answer: 'csPencil', hint: 'You write with it.' },
      { type: 'tap', diagram: 'csound9', mode: 'normal', level: 'medium', q: 'Tap: face.', answer: 'csFace', hint: 'Eyes, a nose and a mouth.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Fill in the missing letter: _ ity', options: ['c', 'k', 'g'], answer: 0, hint: 'c before i says /s/.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Rearrange: e f a c', options: ['face', 'cafe', 'fact'], answer: 0, hint: 'Eyes, a nose and a mouth.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Rearrange: c i e n', options: ['nice', 'mice', 'once'], answer: 0, hint: 'It means good, lovely.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Rearrange: l i c n e p', options: ['pencil', 'pencel', 'police'], answer: 0, hint: 'You write with it.' }
    ] },
  { id: 'O6', lesson: 2, concept: 'Sara’s short story; I was excited… I felt scared… (p 77)',
    explain: 'One sunny day, Sara went to the park with her friend. She played on the swings. Then, she fell and hurt her knee. Her friend helped her. Sara smiled. I was excited when I went to the zoo. I felt scared when I watched a scary movie.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Who went to the park with Sara?', options: ['her friend', 'her mother', 'her teacher'], answer: 0, hint: 'Read the first sentence of the short story.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What did Sara do after her friend helped her?', options: ['She smiled.', 'She cried.', 'She went home.'], answer: 0, hint: 'Read the last sentence.' },
      { type: 'fill', fig: 'photo', pic: ph('g3_zoo_excited'), mode: 'normal', level: 'easy', q: 'I was ___ when I went to the zoo.', options: ['excited', 'bored', 'tired'], answer: 0, hint: 'Look at her face: she can’t wait!' },
      { type: 'fill', fig: 'photo', pic: ph('g3_scary_tv'), mode: 'normal', level: 'medium', q: 'I felt ___ when I watched a scary movie.', options: ['scared', 'happy', 'bored'], answer: 0, hint: 'He hides behind a cushion.' }
    ] },
  { id: 'O7', lesson: 2, boss: true, concept: 'Sara’s story, then / but / and, and soft or hard c',
    explain: 'Soft c /s/: city, ice, pencil, nice, face, cent. Hard c /k/: cat, cold, coat, cup.',
    variants: [
      { type: 'table', mode: 'boss', level: 'hard', q: 'Sort the words (p 76 ex 3).', poc: 'Word', cols: ['soft c /s/', 'hard c /k/'], items: ['cat', 'city', 'ice', 'cold', 'pencil', 'coat', 'nice', 'cup'], answer: [1, 0, 0, 1, 0, 1, 0, 1], hint: 'Look at the letter after c: e, i, y → /s/.' },
      { type: 'order', mode: 'boss', level: 'hard', q: 'Put Sara’s story in order.', items: ['She fell and hurt her knee.', 'Sara went to the park.', 'Her friend helped her stand up.', 'She drew a picture.'], answer: [1, 3, 0, 2], hint: 'She went to the park first.' },
      { type: 'fill', mode: 'boss', level: 'hard', q: 'Now she was tired, ___ she felt better.', options: ['but', 'then', 'and'], answer: 0, hint: 'Tired is not good, better is good: something different.' }
    ] },

  /* ---------- Lesson 3 · A Big Win (pages 78-81) ---------- */
  { id: 'P1', lesson: 3, concept: 'Story: Omar’s first football match (p 78)',
    explain: 'Omar was nervous before his first football match. When the match started, he was worried about making mistakes. But after he scored a goal, Omar felt proud of himself. He was happy when his team won the game.',
    variants: [
      { type: 'tap', diagram: 'feel9', mode: 'normal', level: 'easy', q: 'Tap: nervous.', answer: 'emNervous', hint: 'He bites his nails.' },
      { type: 'mc', fig: 'photo', pic: ph('g3_om_nervous'), mode: 'normal', level: 'easy', q: 'Omar before his first match. How does he feel?', options: ['nervous', 'happy', 'bored'], answer: 0, hint: 'Look at the drop of sweat.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What did Omar score?', options: ['a goal', 'a basket', 'a point'], answer: 0, hint: 'It is a football match.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'When the match started, he was worried about ___.', options: ['making mistakes', 'his homework', 'the weather'], answer: 0, hint: 'Read the second sentence.' },
      { type: 'mc', fig: 'photo', pic: ph('g3_om_proud'), mode: 'normal', level: 'medium', q: 'Omar after he scored a goal. How does he feel?', options: ['proud', 'nervous', 'scared'], answer: 0, hint: 'His hand is on his chest and his head is up.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'When was Omar happy?', options: ['when his team won the game', 'before the match', 'when he made a mistake'], answer: 0, hint: 'Read the last sentence.' }
    ] },
  { id: 'P2', lesson: 3, concept: 'Past verbs in the story: was, started, scored, felt, won (p 78 ex 2, p 79 ex 4)',
    explain: 'Omar was nervous before the match. He started playing. He scored a goal. He felt proud. His team won the game.',
    variants: [
      { type: 'fill', mode: 'normal', level: 'easy', q: 'Omar ___ nervous before the match.', options: ['was', 'is'], answer: 0, hint: 'It happened in the past: is → was.' },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'He ___ playing.', options: ['started', 'start'], answer: 0, hint: 'Past: add -ed.' },
      { type: 'fill', fig: 'photo', pic: ph('g3_om_goal'), mode: 'normal', level: 'easy', q: 'He ___ a goal.', options: ['scored', 'score'], answer: 0, hint: 'Past: score ends in -e, add -d.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'He ___ proud.', options: ['felt', 'feel'], answer: 0, hint: 'feel → felt' },
      { type: 'fill', fig: 'photo', pic: ph('g3_om_win'), mode: 'normal', level: 'medium', q: 'His team ___ the game.', options: ['won', 'win'], answer: 0, hint: 'win is a special verb: no -ed.' },
      { type: 'multi', mode: 'normal', level: 'medium', q: 'Choose all the past tense verbs from the story.', options: ['was', 'scored', 'won', 'win'], answer: [0, 1, 2], hint: 'win is the base verb, not the past.' }
    ] },
  { id: 'P3', lesson: 3, concept: 'Choose the correct word (p 79 ex 5)',
    explain: 'Omar was nervous before the match. He was worried about making mistakes. He felt proud after scoring a goal. He was happy when his team won.',
    variants: [
      { type: 'fill', mode: 'normal', level: 'easy', q: 'Omar was ___ before the match.', options: ['nervous', 'happy'], answer: 0, hint: 'His first match had not started yet.' },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'He was ___ when his team won.', options: ['happy', 'sad'], answer: 0, hint: 'Winning is good.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'He was ___ about making mistakes.', options: ['worried', 'excited'], answer: 0, hint: 'Mistakes are not good.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'He ___ proud after scoring a goal.', options: ['felt', 'feel'], answer: 0, hint: 'It happened in the past.' }
    ] },
  { id: 'P4', lesson: 3, concept: 'Linking words: when, but, after (p 79 ex 6)',
    explain: 'Omar was nervous when the match started. After he scored a goal, he felt proud. He was worried, but he didn’t stop.',
    variants: [
      { type: 'fill', mode: 'normal', level: 'easy', q: 'Omar was nervous ___ the match started.', options: ['when', 'but', 'after'], answer: 0, hint: 'At the same time as the start.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: '___ he scored a goal, he felt proud.', options: ['After', 'But', 'When'], answer: 0, hint: 'First the goal, then the proud feeling.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'He was worried, ___ he didn’t stop.', options: ['but', 'when', 'after'], answer: 0, hint: 'Something different: worried, and still playing.' }
    ] },
  { id: 'P5', lesson: 3, concept: 'Capital letters and punctuation (p 79 ex 7)',
    explain: 'Omar was nervous before his first football match. When the match started, he was worried about making mistakes. He scored a goal and felt proud. He was happy when his team won the game.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Which sentence is correct?', options: ['Omar was nervous before his first football match.', 'omar was nervous before his first football match.', 'omar was nervous before his first football match'], answer: 0, hint: 'Omar is a name, and the sentence starts with it.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which sentence is correct?', options: ['He scored a goal and felt proud.', 'he scored a goal and felt proud.', 'He scored a goal and felt proud?'], answer: 0, hint: 'It is not a question.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which sentence is correct?', options: ['When the match started, he was worried about making mistakes.', 'when the match started, he was worried about making mistakes.', 'When the match started, he was worried about making mistakes'], answer: 0, hint: 'Capital letter at the start, period at the end.' }
    ] },
  { id: 'P6', lesson: 3, concept: 'Sentences about feelings (p 78 ex 3, p 80)',
    explain: 'I felt happy when I received a gift. I felt happy when I saw my friend. I felt excited.',
    variants: [
      { type: 'fill', fig: 'photo', pic: ph('g3_gift'), mode: 'normal', level: 'easy', q: 'I felt ___ when I received a gift.', options: ['happy', 'sad', 'angry'], answer: 0, hint: 'Look at his face.' },
      { type: 'fill', fig: 'photo', pic: ph('g3_worried_paper'), mode: 'normal', level: 'medium', q: 'She looks at her paper. She feels ___.', options: ['worried', 'excited', 'proud'], answer: 0, hint: 'Look at her eyebrows and her hand.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'I ___ happy when I saw my friend.', options: ['felt', 'feel', 'feels'], answer: 0, hint: 'saw is past, so use the past of feel.' }
    ] },
  { id: 'P7', lesson: 3, boss: true, concept: 'Omar’s big win: feelings in order and the past',
    explain: 'Omar was nervous before the match, worried when it started, proud after his goal and happy when his team won. was, started, scored, felt, won.',
    variants: [
      { type: 'order', mode: 'boss', level: 'hard', q: 'Put Omar’s feelings in story order.', items: ['proud', 'nervous', 'happy', 'worried'], answer: [1, 3, 0, 2], hint: 'Before the match → when it started → after the goal → when the team won.' },
      { type: 'match', mode: 'boss', level: 'hard', q: 'Match the verb to its past.', left: ['is', 'feel', 'win', 'score'], right: ['was', 'felt', 'won', 'scored'], answer: [0, 1, 2, 3], hint: 'Only one of them adds -d.' },
      { type: 'build', style: 'sentence', mode: 'boss', level: 'hard', q: 'Put the words in order.', parts: ['He was happy', 'when', 'his team', 'won the game.'], extra: ['win'], hint: 'Start with He was happy.' }
    ] }
];
})();
