/* English · Grade 3 · Term 1 · Unit 5 "Together Is Better" · ministry book "English Primary 3", first term 2026/2027 (book pages 82-98)
   One English book for both tracks, so there is no _ar file.
   Lessons: 1 Teamwork & Chores: vocabulary, story "Having Fun" (pp 83-86)
            2 Teamwork at School: the bridge story, hard g, "We Share, We Care", action verbs, punctuation (pp 87-90)
            3 Teamwork in Sports: "We win together!", soft g (pp 91-93)
            4 I Help My Community!: donate, plant, dialogs, "We Help Our Neighborhood!", self-assessment (pp 94-98)
   Idea letters (one per lesson, running on from Units 1-4): Q, R, S, T.  Boss ideas: Q5, R7, S5, T6.
   Easy first, difficulty rises slowly; hard only in the Boss idea. Every phrasing has a hint that points to the rule or the text, never the answer.
   Pictures: the owner's Gemini sheets (13 Nov 2026) cut into english/assets/g3_*.webp; tap pictures team8, verbs5, gsound9, fig 'photo'.
     A story picture is shown with "Which sentence matches the picture?" or with a question it does not answer.
   Review notes:
   - Listening tasks (p 83, p 87 ex 1, p 93 ex 1) are asked from the printed words.
   - Open tasks are not asked: p 86 ex 2, p 90 ex 3 and 4, p 95 ex 2 last line, p 98 ex 5 (draw / own sentence), and the p 98 self-assessment.
   - p 84 ex 2 "Read and number the sentences" matches sentences to the numbered pictures: asked as "Which picture?" with the owner's pictures.
   - p 88 "underline the problem and solution": problem = they couldn't agree; solution = they shared ideas (asked as choices).
   - p 89 ex 2 item 5 "abook" is the book's typo for "a book".
   - p 95 ex 2 "What do they do ___?" has no printed answer; "They clean the classroom every day." makes it "at school": asked with that answer.
     Owner, please check. "We ___ in the garden" is asked with "plant flowers" (from the p 95 ex 1 dialog).
   - p 97 ex 4 item 4 "finally everyone is happy": the story says "Everyone is happy." without "Finally"; asked as printed in ex 4. */
(function () {
window.CHAPTER = { id: 'eg3u5', title: 'Together Is Better' };
const ph = (...src) => ({ src, label: 'A picture for the question' });

window.IDEAS = [
  /* ---------- Lesson 1 · Teamwork & Chores (pages 83-86) ---------- */
  { id: 'Q1', lesson: 1, concept: 'Vocabulary: clean, tidy up the bed, share, care, win, cheer, plant, donate (pp 83-84)',
    explain: 'clean, tidy up the bed, share, care, win, cheer, plant and donate are things we do together.',
    variants: [
      { type: 'tap', diagram: 'team8', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap: plant.', answer: 'twPlant', hint: 'Look for a small tree.' },
      { type: 'tap', diagram: 'team8', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap: win.', answer: 'twWin', hint: 'Look for a gold cup.' },
      { type: 'tap', diagram: 'team8', mode: 'normal', level: 'easy', q: 'Tap: clean.', answer: 'twClean', hint: 'Look for a vacuum cleaner.' },
      { type: 'tap', diagram: 'team8', mode: 'normal', level: 'easy', q: 'Tap: tidy up the bed.', answer: 'twTidy', hint: 'Look for a white sheet.' },
      { type: 'tap', diagram: 'team8', mode: 'normal', level: 'medium', q: 'Tap: donate.', answer: 'twDonate', hint: 'A box of clothes and toys to give away.' },
      { type: 'tap', diagram: 'team8', mode: 'normal', level: 'medium', q: 'Tap: share.', answer: 'twShare', hint: 'She gives some of her food.' },
      { type: 'tap', diagram: 'team8', mode: 'normal', level: 'medium', q: 'Tap: care.', answer: 'twCare', hint: 'Two friends hug.' },
      { type: 'tap', diagram: 'team8', mode: 'normal', level: 'medium', q: 'Tap: cheer.', answer: 'twCheer', hint: 'Many arms up in the air.' }
    ] },
  { id: 'Q2', lesson: 1, concept: 'Read and number the sentences (p 84 ex 2)',
    explain: 'Ahmed donates clothes. The boys win the football match. Lina hugs her friend because she cares. The boys cheer for Omar in his football match. Sara shares food with her sister. You should tidy up your bed.',
    variants: [
      { type: 'mc', fig: 'photo', pic: ph('g3_ch_donate'), mode: 'normal', level: 'easy', q: 'Which sentence matches the picture?', options: ['Ahmed donates clothes.', 'Sara shares food with her sister.', 'The boys win the football match.'], answer: 0, hint: 'Look at the box.' },
      { type: 'mc', fig: 'photo', pic: ph('g3_ch_share'), mode: 'normal', level: 'easy', q: 'Which sentence matches the picture?', options: ['Sara shares food with her sister.', 'You should tidy up your bed.', 'Ahmed donates clothes.'], answer: 0, hint: 'Look at the plate.' },
      { type: 'mc', fig: 'photo', pic: ph('g3_ch_care'), mode: 'normal', level: 'medium', q: 'Which sentence matches the picture?', options: ['Lina hugs her friend because she cares.', 'The boys cheer for Omar.', 'Sara shares food with her sister.'], answer: 0, hint: 'Look at their arms.' },
      { type: 'mc', fig: 'photo', pic: ph('g3_ch_tidy'), mode: 'normal', level: 'medium', q: 'Which sentence matches the picture?', options: ['You should tidy up your bed.', 'Ahmed donates clothes.', 'Lina hugs her friend.'], answer: 0, hint: 'Look at the sheet.' },
      { type: 'fill', fig: 'photo', pic: ph('g3_ch_cheer'), mode: 'normal', level: 'medium', q: 'The boys ___ for Omar in his football match.', options: ['cheer', 'donate', 'plant'], answer: 0, hint: 'Arms up, shouting happily.' }
    ] },
  { id: 'Q3', lesson: 1, concept: 'Story: Having Fun (pp 85-86)',
    explain: 'Mona and Karim are at home. Their mother asks them to do some chores. First, they tidy up the living room. Then, they clean the table and the floor. Mona and Karim work together and share the chores. They are happy to help. Finally, the house looks clean. Their mother smiles and says, “Good job, team!”',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Who are the two children in the story?', options: ['Mona and Karim', 'Ali and Sara', 'Omar and Leila'], answer: 0, hint: 'Read the first sentence.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What does their mother ask them to do?', options: ['Do some chores', 'Go shopping', 'Watch TV'], answer: 0, hint: 'Read the second sentence.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What do they tidy up first?', options: ['The living room', 'The kitchen', 'The bedroom'], answer: 0, hint: 'Read: First, they tidy up the …' },
      { type: 'mc', fig: 'photo', pic: ph('g3_mk_table'), mode: 'normal', level: 'medium', q: 'Which sentence matches the picture?', options: ['They clean the table.', 'They tidy up the living room.', 'Their mother smiles.'], answer: 0, hint: 'Look at the cloth and the spray.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'How do Mona and Karim do the chores?', options: ['They work together.', 'They take turns.', 'They do nothing.'], answer: 0, hint: 'Read: Mona and Karim work …' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What does their mother say at the end?', options: ['“Good job, team!”', '“Try again!”', '“It’s still messy!”'], answer: 0, hint: 'Read the last sentence.' }
    ] },
  { id: 'Q4', lesson: 1, concept: 'Linking words in the story: First, Then, Finally (p 85)',
    explain: 'First, they tidy up the living room. Then, they clean the table and the floor. Finally, the house looks clean.',
    variants: [
      { type: 'fill', mode: 'normal', level: 'easy', q: '___, they tidy up the living room.', options: ['First', 'Finally', 'Then'], answer: 0, hint: 'It is the first chore.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: '___, the house looks clean.', options: ['Finally', 'First', 'Then'], answer: 0, hint: 'It is the end.' },
      { type: 'order', mode: 'normal', level: 'medium', q: 'Put the story in order.', items: ['They clean the table and the floor.', 'Their mother asks them to do some chores.', 'Their mother says, “Good job, team!”', 'They tidy up the living room.'], answer: [1, 3, 0, 2], hint: 'The mother asks first; she says “Good job” last.' }
    ] },
  { id: 'Q5', lesson: 1, boss: true, concept: 'Teamwork words',
    explain: 'clean, tidy up, share, care, win, cheer, plant, donate.',
    variants: [
      { type: 'match', mode: 'boss', level: 'hard', q: 'Match the word to its meaning.', left: ['donate', 'plant', 'share', 'cheer'], right: ['give things to help people', 'put a flower or tree in the ground', 'give some of what you have to others', 'shout happily for someone'], answer: [0, 1, 2, 3], hint: 'Look at the vocabulary on page 96.' },
      { type: 'fill', mode: 'boss', level: 'hard', q: 'Mona and Karim work together and ___ the chores.', options: ['share', 'win', 'cheer'], answer: 0, hint: 'Each one does a part.' },
      { type: 'fill', mode: 'boss', level: 'hard', q: 'Lina hugs her friend because she ___.', options: ['cares', 'wins', 'plants'], answer: 0, hint: 'She loves her friend.' }
    ] },

  /* ---------- Lesson 2 · Teamwork at School (pages 87-90) ---------- */
  { id: 'R1', lesson: 2, concept: 'Story: the bridge in the park (p 87)',
    explain: 'Omar, Youssef, and Ziad went to the park. There were green plants everywhere. They saw a big puddle. It was too big to jump over. Omar found a piece of wood. Youssef and Ziad helped him make a good bridge. They crossed over the bridge and played. A dog came by and wagged its tail. They were happy.',
    variants: [
      { type: 'mc', fig: 'photo', pic: ph('g3_br_puddle'), mode: 'normal', level: 'easy', q: 'Which sentence matches the picture?', options: ['They saw a big puddle.', 'They crossed over the bridge.', 'A dog came by.'], answer: 0, hint: 'Look at the water.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Where did Omar, Youssef, and Ziad go?', options: ['to the park', 'to school', 'to the zoo'], answer: 0, hint: 'Read the first sentence.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What did Omar find?', options: ['a piece of wood', 'a ball', 'a dog'], answer: 0, hint: 'Read: Omar found a …' },
      { type: 'mc', fig: 'photo', pic: ph('g3_br_cross'), mode: 'normal', level: 'medium', q: 'Which sentence matches the picture?', options: ['They crossed over the bridge.', 'Omar found a piece of wood.', 'They saw a big puddle.'], answer: 0, hint: 'They walk on the wood.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Why did they make a bridge?', options: ['The puddle was too big to jump over.', 'They wanted to fish.', 'The dog asked them.'], answer: 0, hint: 'Read: It was too big to …' }
    ] },
  { id: 'R2', lesson: 2, concept: 'Phonics: hard g = /g/ before a, o, u and at the end (p 87)',
    explain: '“g” has a hard sound when followed by a, o or u, or at the end of a word: game, dog, gum, good, green, big.',
    variants: [
      { type: 'tap', diagram: 'gsound9', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap: dog.', answer: 'gsDog', hint: 'A pet that wags its tail.' },
      { type: 'tap', diagram: 'gsound9', mode: 'normal', level: 'easy', q: 'Tap: gum.', answer: 'gsGum', hint: 'She blows a pink bubble.' },
      { type: 'tap', diagram: 'gsound9', mode: 'normal', level: 'easy', q: 'Tap: goat.', answer: 'gsGoat', hint: 'A farm animal with horns.' },
      { type: 'tap', diagram: 'gsound9', mode: 'normal', level: 'medium', q: 'Tap: game.', answer: 'gsGame', hint: 'Two children play with a board.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Fill in the missing letter: do _', options: ['g', 'c', 'k'], answer: 0, hint: 'A pet that wags its tail.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Fill in the missing letter: _ reen', options: ['g', 'c', 'j'], answer: 0, hint: 'The color of plants.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Rearrange: o g o d', options: ['good', 'dog', 'goat'], answer: 0, hint: 'They made a … bridge.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Rearrange: g i b', options: ['big', 'bag', 'gift'], answer: 0, hint: 'They saw a … puddle.' }
    ] },
  { id: 'R3', lesson: 2, concept: 'Story: We Share, We Care (p 88)',
    explain: 'Salma and Youssef had a project at school. At first, they couldn’t agree on what to do. Then, they started to share ideas. Salma wrote, and Youssef drew. When Salma felt tired, Youssef helped her. They showed care and worked well together. Finally, they finished the project. Their teacher was happy and said, “Good job!”',
    variants: [
      { type: 'mc', fig: 'photo', pic: ph('g3_sy_disagree'), mode: 'normal', level: 'easy', q: 'Which sentence matches the picture?', options: ['At first, they couldn’t agree on what to do.', 'They started to share ideas.', 'Their teacher was happy.'], answer: 0, hint: 'Look at their arms and faces.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What was the problem?', options: ['They couldn’t agree on what to do.', 'They lost their pencils.', 'They were late for school.'], answer: 0, hint: 'Read the second sentence.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What was the solution?', options: ['They started to share ideas.', 'They went home.', 'They asked another class.'], answer: 0, hint: 'Read the third sentence.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Who drew in the project?', options: ['Youssef', 'Salma', 'The teacher'], answer: 0, hint: 'Read: Salma wrote, and … drew.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What did Youssef do when Salma felt tired?', options: ['He helped her.', 'He went home.', 'He laughed.'], answer: 0, hint: 'They showed care.' }
    ] },
  { id: 'R4', lesson: 2, concept: 'Action verbs: help, solve, find, work, plan, fix, agree, answer (p 89)',
    explain: 'Action verbs show what someone does. Salma helps Youssef with the project. They solve the problem together. Youssef finds a good idea. They work as a team. They plan their project first. Salma fixes the poster. They agree on what to do.',
    variants: [
      { type: 'tap', diagram: 'verbs5', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap: fix.', answer: 'avFix', hint: 'Look for a screwdriver.' },
      { type: 'tap', diagram: 'verbs5', mode: 'normal', level: 'easy', q: 'Tap: find.', answer: 'avFind', hint: 'She takes a book from the shelf.' },
      { type: 'tap', diagram: 'verbs5', mode: 'normal', level: 'easy', q: 'Tap: plan.', answer: 'avPlan', hint: 'A family looks at a map.' },
      { type: 'tap', diagram: 'verbs5', mode: 'normal', level: 'medium', q: 'Tap: answer.', answer: 'avAnswer', hint: 'Hands up in class.' },
      { type: 'multi', mode: 'normal', level: 'medium', q: 'Choose all the action verbs.', options: ['help', 'plan', 'fix', 'project'], answer: [0, 1, 2], hint: 'An action verb is something you do.' }
    ] },
  { id: 'R5', lesson: 2, concept: 'Choose the correct verb (p 89 ex 2)',
    explain: 'The students answer the questions together. Omar helps his friend with homework. They fix the broken chair in class. We plan the trip before the school holiday. Mariam finds a book in the library.',
    variants: [
      { type: 'fill', fig: 'photo', pic: ph('g3_av_help'), mode: 'normal', level: 'easy', q: 'Omar ___ his friend with homework.', options: ['helps', 'fixes'], answer: 0, hint: 'He shows his friend the book.' },
      { type: 'fill', fig: 'photo', pic: ph('g3_av_fix'), mode: 'normal', level: 'easy', q: 'They ___ the broken chair in class.', options: ['fix', 'plan'], answer: 0, hint: 'It is broken.' },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'The students ___ the questions together.', options: ['answer', 'help'], answer: 0, hint: 'What do we do with questions?' },
      { type: 'fill', fig: 'photo', pic: ph('g3_av_plan'), mode: 'normal', level: 'medium', q: 'We ___ the trip before the school holiday.', options: ['plan', 'find'], answer: 0, hint: 'We decide before we go.' },
      { type: 'fill', fig: 'photo', pic: ph('g3_av_find'), mode: 'normal', level: 'medium', q: 'Mariam ___ a book in the library.', options: ['finds', 'agrees'], answer: 0, hint: 'She takes it from the shelf.' }
    ] },
  { id: 'R6', lesson: 2, concept: 'Capital letters, periods and a comma after First / Then / Finally (p 90 ex 5)',
    explain: 'We use capital letters at the beginning of the sentence, periods at the end, question marks at the end of questions, and a comma after Then, First and Finally. Salma and Youssef had a project at school. At first, they didn’t agree. Then, they started to share ideas.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Which sentence is correct?', options: ['Salma and Youssef had a project at school.', 'salma and youssef had a project at school.', 'Salma and youssef had a project at school'], answer: 0, hint: 'Names start with capital letters.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which sentence is correct?', options: ['Then, they started to share ideas.', 'then they started to share ideas.', 'Then they started to share ideas'], answer: 0, hint: 'Put a comma after Then.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which sentence is correct?', options: ['Salma wrote, and Youssef drew.', 'salma wrote and youssef drew.', 'Salma wrote, and youssef drew'], answer: 0, hint: 'Two names, two capital letters, and a period.' }
    ] },
  { id: 'R7', lesson: 2, boss: true, concept: 'The bridge, hard g and action verbs',
    explain: 'mgu = gum, gdo = dog, ogod = good, gneer = green, gib = big. Action verbs: help, solve, find, work, plan, fix, agree.',
    variants: [
      { type: 'mc', mode: 'boss', level: 'hard', q: 'Rearrange: g n e e r', options: ['green', 'gene', 'grenade'], answer: 0, hint: 'There were … plants everywhere.' },
      { type: 'order', mode: 'boss', level: 'hard', q: 'Put the bridge story in order.', items: ['They crossed over the bridge.', 'Omar found a piece of wood.', 'They saw a big puddle.', 'A dog came by and wagged its tail.'], answer: [2, 1, 0, 3], hint: 'First the puddle, last the dog.' },
      { type: 'build', style: 'sentence', mode: 'boss', level: 'hard', q: 'Put the words in order.', parts: ['They', 'solve', 'the problem', 'together.'], extra: ['solves'], hint: 'They goes with solve.' }
    ] },

  /* ---------- Lesson 3 · Teamwork in Sports (pages 91-93) ---------- */
  { id: 'S1', lesson: 3, concept: 'Story: We win together! (pp 91-92)',
    explain: 'Omar and his friends played football at school. At first, they all wanted to score. Then, their coach said, “Work as a team!” They started to pass the ball and help each other. Omar passed to Karim, and Karim scored. Everyone cheered. They didn’t win alone — they won together. Teamwork made the game fun and fair.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Who played football at school?', options: ['Omar and his friends', 'Salma and Youssef', 'Mona and Karim'], answer: 0, hint: 'Read the first sentence.' },
      { type: 'mc', fig: 'photo', pic: ph('g3_fb_coach'), mode: 'normal', level: 'easy', q: 'What did the coach tell the team to do?', options: ['Work as a team!', 'Go home!', 'Play alone!'], answer: 0, hint: 'Read: their coach said, “…”' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Who scored the goal?', options: ['Karim', 'Omar', 'The coach'], answer: 0, hint: 'Read: Omar passed to …' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'How did the team feel after the goal?', options: ['happy', 'sad', 'bored'], answer: 0, hint: 'Read: Everyone cheered.' },
      { type: 'mc', fig: 'photo', pic: ph('g3_fb_pass'), mode: 'normal', level: 'medium', q: 'Which sentence matches the picture?', options: ['They started to pass the ball.', 'Everyone cheered.', 'Their coach said, “Work as a team!”'], answer: 0, hint: 'One boy kicks the ball to his friend.' },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'Teamwork made the game fun and fair.', answer: 0, hint: 'Read the last sentence.' }
    ] },
  { id: 'S2', lesson: 3, concept: 'Put the sentences in the correct order (p 92 ex 4)',
    explain: 'Omar and his friends played football at school. Their coach said, “Work as a team!” They started to pass the ball and help each other. Omar passed to Karim, and Karim scored.',
    variants: [
      { type: 'order', mode: 'normal', level: 'medium', q: 'Put the sentences in the correct order.', items: ['They started to pass the ball and help each other.', 'Omar passed to Karim, and Karim scored.', 'Omar and his friends played football at school.', 'Their coach said, “Work as a team!”'], answer: [2, 3, 0, 1], hint: 'They played first; Karim scored last.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What happened after the coach spoke?', options: ['They started to pass the ball.', 'They went home.', 'They stopped playing.'], answer: 0, hint: 'Read the sentence after “Work as a team!”' }
    ] },
  { id: 'S3', lesson: 3, concept: 'Capital letters and punctuation (p 92 ex 3)',
    explain: 'Omar and his friends played football at school. They all wanted to score. Everyone cheered when Karim scored.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Which sentence is correct?', options: ['They all wanted to score.', 'they all wanted to score.', 'they all wanted to score'], answer: 0, hint: 'Capital letter at the start, period at the end.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which sentence is correct?', options: ['Everyone cheered when Karim scored.', 'everyone cheered when karim scored.', 'Everyone cheered when karim scored'], answer: 0, hint: 'Karim is a name.' }
    ] },
  { id: 'S4', lesson: 3, concept: 'Phonics: soft g = /dʒ/ before e, i, y (p 93)',
    explain: '“g” usually makes a soft sound /dʒ/ when it is followed by e, i or y: giraffe, Egypt, page, huge, magic. Before a, o, u it is hard: game, goat, garden.',
    variants: [
      { type: 'tap', diagram: 'gsound9', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap: huge.', answer: 'gsHuge', hint: 'Very, very big.' },
      { type: 'tap', diagram: 'gsound9', mode: 'normal', level: 'easy', q: 'Tap: magic.', answer: 'gsMagic', hint: 'A hat and a wand.' },
      { type: 'tap', diagram: 'gsound9', mode: 'normal', level: 'medium', q: 'Tap: page.', answer: 'gsPage', hint: 'It is in a book.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Fill in the missing letter: _ iraffe', options: ['g', 'j', 'c'], answer: 0, hint: 'g before i says /dʒ/.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Fill in the missing letter: E _ ypt', options: ['g', 'j', 'c'], answer: 0, hint: 'Our country.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Choose the word with the soft g sound.', options: ['giraffe', 'game', 'goat'], answer: 0, hint: 'Look for g before e, i or y.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Choose the word with the soft g sound.', options: ['huge', 'hug', 'house'], answer: 0, hint: 'Look for g before e.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Choose the word with the soft g sound.', options: ['magic', 'make', 'map'], answer: 0, hint: 'Look for g before i.' }
    ] },
  { id: 'S5', lesson: 3, boss: true, concept: 'Teamwork in sports and soft or hard g',
    explain: 'Soft g: giraffe, Egypt, page, huge, magic. Hard g: game, goat, garden, good, dog.',
    variants: [
      { type: 'table', mode: 'boss', level: 'hard', q: 'Sort the words.', poc: 'Word', cols: ['soft g /dʒ/', 'hard g /g/'], items: ['giraffe', 'game', 'page', 'goat', 'Egypt', 'garden'], answer: [0, 1, 0, 1, 0, 1], hint: 'Look at the letter after g: e, i, y → soft.' },
      { type: 'mc', mode: 'boss', level: 'hard', q: 'Rearrange: f f a g i r e', options: ['giraffe', 'graffiti', 'forage'], answer: 0, hint: 'A tall animal at the zoo.' },
      { type: 'fill', mode: 'boss', level: 'hard', q: 'They didn’t win alone — they won ___.', options: ['together', 'apart', 'alone'], answer: 0, hint: 'It is teamwork.' }
    ] },

  /* ---------- Lesson 4 · I Help My Community! (pages 94-98) ---------- */
  { id: 'T1', lesson: 4, concept: 'donate and plant (p 94, p 96)',
    explain: 'Ahmed and Mariam donate clothes to people. Laila plants a tree near her house. plant: to put a flower or tree in the ground. donate: to give things to help people.',
    variants: [
      { type: 'fill', fig: 'photo', pic: ph('g3_cm_donate'), mode: 'normal', level: 'easy', q: 'Ahmed and Mariam ___ clothes to people.', options: ['donate', 'plant', 'clean'], answer: 0, hint: 'They give clothes to help people.' },
      { type: 'fill', fig: 'photo', pic: ph('g3_cm_plant'), mode: 'normal', level: 'easy', q: 'Laila ___ a tree near her house.', options: ['plants', 'donates', 'cleans'], answer: 0, hint: 'She puts it in the ground.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What does “donate” mean?', options: ['to give things to help people', 'to put a tree in the ground', 'to clean the street'], answer: 0, hint: 'Look at the vocabulary on page 96.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What does “plant” mean?', options: ['to put a flower or tree in the ground', 'to give things to help people', 'to cheer for a team'], answer: 0, hint: 'Look at the vocabulary on page 96.' }
    ] },
  { id: 'T2', lesson: 4, concept: 'Dialog: Sara and Omar help the park (p 95 ex 1)',
    explain: 'Sara: Hello, Omar. What are you doing? Omar: I am helping clean the park. Sara: That is great! Can I help, too? Omar: Yes! Let’s work together. Sara: We can plant flowers. Omar: And we can donate books to the school library.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What is Omar doing?', options: ['He is helping clean the park.', 'He is playing football.', 'He is reading a book.'], answer: 0, hint: 'Read Omar’s first answer.' },
      { type: 'fill', fig: 'photo', pic: ph('g3_cm_flowers'), mode: 'normal', level: 'easy', q: 'Sara: We can plant ___.', options: ['flowers', 'books', 'clothes'], answer: 0, hint: 'They grow in the garden.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Omar: And we can donate ___ to the school library.', options: ['books', 'flowers', 'trees'], answer: 0, hint: 'What do we find in a library?' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Sara: “Can I help, too?” Omar: “___”', options: ['Yes! Let’s work together.', 'No, thank you.', 'Goodbye!'], answer: 0, hint: 'They are a team.' }
    ] },
  { id: 'T3', lesson: 4, concept: 'Complete the dialog (p 95 ex 2)',
    explain: 'Hello! Who do you help at school? I help my friends at school. What does she do to help her community? She donates old books to the library. What do you do in the garden? We plant flowers in the garden. What do they do at school? They clean the classroom every day.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: '“Who do you help at school?” — “___”', options: ['I help my friends at school.', 'I go to the park.', 'I am 8 years old.'], answer: 0, hint: 'The answer says who you help.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: '“What does she do to help her community?” — “___”', options: ['She donates old books to the library.', 'She watches TV.', 'She sleeps.'], answer: 0, hint: 'Helping people.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'What do you do in the garden? — We ___ in the garden.', options: ['plant flowers', 'watch TV', 'sleep'], answer: 0, hint: 'Sara said it in the first dialog.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'What do they do ___? — They clean the classroom every day.', options: ['at school', 'in the garden', 'at the zoo'], answer: 0, hint: 'Where is the classroom?' }
    ] },
  { id: 'T4', lesson: 4, concept: 'Story: We Help Our Neighborhood! (pp 96-97)',
    explain: 'Hady and Salma want to help their neighborhood. They work as a team. First, they clean the street. Then, they plant trees near the school. After that, they donate clothes and toys to children. Everyone is happy. Their teacher says, “Well done!” Teamwork makes the community better. Hady and Salma smile. They are proud to help.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Who are the two children in the story?', options: ['Hady and Salma', 'Omar and Sara', 'Mona and Karim'], answer: 0, hint: 'Read the first sentence.' },
      { type: 'mc', fig: 'photo', pic: ph('g3_cm_sweep'), mode: 'normal', level: 'easy', q: 'Which sentence matches the picture?', options: ['First, they clean the street.', 'They plant trees near the school.', 'They donate clothes and toys.'], answer: 0, hint: 'Look at the broom and the bag.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What do they plant?', options: ['trees', 'flowers', 'vegetables'], answer: 0, hint: 'Read: Then, they plant …' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What do they donate?', options: ['clothes and toys', 'books and pencils', 'food and water'], answer: 0, hint: 'Read: After that, they donate …' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What does their teacher say?', options: ['“Well done!”', '“Try again!”', '“Good morning!”'], answer: 0, hint: 'Read: Their teacher says, …' }
    ] },
  { id: 'T5', lesson: 4, concept: 'Capital letters and punctuation (p 97 ex 4)',
    explain: 'Hady and Salma want to help their neighborhood. First, they clean the street. They plant trees near the school. Finally, everyone is happy. They are proud to help.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Which sentence is correct?', options: ['They are proud to help.', 'they are proud to help.', 'they are proud to help'], answer: 0, hint: 'Capital letter at the start, period at the end.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which sentence is correct?', options: ['First, they clean the street.', 'first they clean the street.', 'First they clean the street'], answer: 0, hint: 'Put a comma after First.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which sentence is correct?', options: ['Hady and Salma want to help their neighborhood.', 'hady and salma want to help their neighborhood.', 'Hady and salma want to help their neighborhood'], answer: 0, hint: 'Two names, two capital letters.' }
    ] },
  { id: 'T6', lesson: 4, boss: true, concept: 'Helping the community',
    explain: 'Hady and Salma want to help their neighborhood. First, they clean the street. Then, they plant trees near the school. After that, they donate clothes and toys to children. They are proud to help.',
    variants: [
      { type: 'order', mode: 'boss', level: 'hard', q: 'Put the sentences in the correct order (p 97 ex 3).', items: ['They donate clothes and toys to children.', 'Hady and Salma want to help their neighborhood.', 'They are proud to help.', 'First, they clean the street.', 'They plant trees near the school.'], answer: [1, 3, 4, 0, 2], hint: 'First they want to help, then: clean → plant → donate.' },
      { type: 'build', style: 'sentence', mode: 'boss', level: 'hard', q: 'Put the words in order.', parts: ['Teamwork', 'makes', 'the community', 'better.'], extra: ['make'], hint: 'Teamwork is one thing: makes.' },
      { type: 'fill', mode: 'boss', level: 'hard', q: 'Hady and Salma smile. They are ___ to help.', options: ['proud', 'scared', 'bored'], answer: 0, hint: 'They did good things.' }
    ] }
];
})();
