/* English · Grade 4 · Term 1 · Unit 6 "The Hundred Dresses" (story by Eleanor Estes, as retold in the ministry book "English Primary 4",
   first term 2026/2027, pages 95-108) + Review 2 (pages 109-113).
   One English book for both tracks (subject lang { lang: 'en', ar: 'en' }), so there is no _ar file.
   The unit has no numbered lessons in the book; the site splits it into five parts:
     1 Story Words and Characters (pp 96-97) · 2 The Story (pp 98-102) · 3 Who Said It? Events in Order (pp 103-105)
     4 Story Elements and the Right Action (pp 106-108) · 5 Review 2 (pp 109-112: the places, prepositions and phonics items;
       the job, superlative and firefighter items are in unit 5).
   Ideas: Z1-Z25 (only Z was left in the Grade 4 English letters). Boss ideas: Z5, Z11, Z16, Z21, Z25.
   Every phrasing has a hint (owner rule) that points to the text or the rule, never the answer.
   Pictures: the owner's Gemini pictures (11 Nov 2026) cut into english/assets/d6_*.webp (story words) and c6_*.webp (the four characters,
     drawn in our own style, not copied from the book); tap pictures dress10, chars4 and fig 'photo' in english/g4_art.js.
   Review notes:
   - p 104 ex 4 crossword is asked as picture → word questions (dress10).
   - p 105 ex 8 answers: 1 F (drawings, not real dresses), 2 F, 3 T, 4 T, 5 F (one boy and one girl), 6 F (her dad), 7 T, 8 F (a letter).
   - p 106 ex 9: moral = "We shouldn't judge others by their appearance"; setting = the school.
   - p 108 ex 3: the right action is "Tell the teacher about the situation."
   - Open tasks are not asked: p 103 ex 3, p 106 ex 10.3 "how did they feel" (asked from the text: they felt terrible), p 107 ex 11 opinions
     (only item 1 has a printed answer: don't agree), p 107 ex 12 and p 112 ex 10 writing, p 111 ex 8.
   - Review 2 p 110 ex 6 (map: where is the hospital?) is not asked: the answers depend on the book's photo. */
(function () {
window.CHAPTER = { id: 'eg4u6', title: 'The Hundred Dresses' };
const ph = (...src) => ({ src, label: 'A picture for the question' });

window.IDEAS = [
  /* ---------- Part 1 · Story Words and Characters (pages 96-97) ---------- */
  { id: 'Z1', lesson: 1, concept: 'Story vocabulary in pictures',
    explain: 'dress, closet, playground, competition, drawings, medal, sign, letter, announce, winner.',
    variants: [
      { type: 'tap', diagram: 'dress10', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap the medal.', answer: 'dMedal', hint: 'A gold prize on a ribbon.' },
      { type: 'tap', diagram: 'dress10', mode: 'normal', level: 'easy', q: 'Tap the closet.', answer: 'dCloset', hint: 'Clothes are kept in it.' },
      { type: 'tap', diagram: 'dress10', mode: 'normal', level: 'easy', q: 'Tap the playground.', answer: 'dPlayground', hint: 'Swings and a slide.' },
      { type: 'tap', diagram: 'dress10', mode: 'normal', level: 'medium', q: 'Tap: announce.', answer: 'dAnnounce', hint: 'He says something loudly to everyone.' },
      { type: 'tap', diagram: 'dress10', mode: 'normal', level: 'medium', q: 'Tap: sign.', answer: 'dSign', hint: 'A hand writes a name.' },
      { type: 'tap', diagram: 'dress10', mode: 'normal', level: 'medium', q: 'Tap the winner.', answer: 'dWinner', hint: 'He finished first and got a medal.' }
    ] },
  { id: 'Z2', lesson: 1, concept: 'Definitions: faded, popular, annoying, absent, notice',
    explain: 'faded = light in color because it is old or used. popular = known by many people. annoying = making you feel unhappy or a little angry. absent = not in a place. notice = to see or hear something.',
    variants: [
      { type: 'mc', fig: 'photo', pic: ph('d6_faded'), mode: 'normal', level: 'easy', q: 'Light in color because it is old or used.', options: ['faded', 'popular', 'expensive', 'absent'], answer: 0, hint: 'Look at the old dress.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What does “absent” mean?', options: ['not in a place', 'very happy', 'known by many people', 'costs a lot of money'], answer: 0, hint: 'Wanda was absent: she didn’t come to school.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Known by many people.', options: ['popular', 'faded', 'annoying', 'absent'], answer: 0, hint: 'Peggy and Maddie were the ___ girls.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What does “annoying” mean?', options: ['making you feel unhappy or a little angry', 'not in a place', 'light in color', 'the way someone acts'], answer: 0, hint: 'The girls annoyed Wanda every morning.' },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'What does “notice” mean?', options: ['to see or hear something', 'to say sorry', 'to win a prize', 'to draw'], answer: 0, hint: 'No one noticed that Wanda was absent.' }
    ] },
  { id: 'Z3', lesson: 1, concept: 'Definitions: behavior, expensive, bullying, apologize',
    explain: 'behavior = the way someone acts. expensive = costs a lot of money. bullying = hurting or scaring other people. apologize = to say “I’m sorry” when you do something wrong.',
    variants: [
      { type: 'match', mode: 'normal', level: 'medium', q: 'Match the words to their meanings.', left: ['behavior', 'expensive', 'bullying', 'apologize'], right: ['the way someone acts', 'costs a lot of money', 'hurting or scaring other people', 'to say “I’m sorry”'], answer: [0, 1, 2, 3], hint: 'Start with apologize: sorry.' },
      { type: 'term', mode: 'normal', level: 'medium', q: 'To say “I’m sorry” when you do something wrong.', answer: 'Apologize', choices: ['Announce', 'Notice', 'Sign'], hint: 'Maddie said: We need to write to Wanda and ___.' },
      { type: 'term', mode: 'normal', level: 'medium', q: 'Hurting or scaring other people.', answer: 'Bullying', choices: ['Behavior', 'Popular', 'Winner'], hint: 'They promised to speak up if there was ___.' },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'Kindness matters more than ___ clothes.', options: ['expensive', 'absent', 'faded'], answer: 0, hint: 'Clothes that cost a lot.' }
    ] },
  { id: 'Z4', lesson: 1, concept: 'The four characters',
    explain: 'Wanda, Peggy, Maddie and Miss Mason (the teacher).',
    variants: [
      { type: 'tap', diagram: 'chars4', mode: 'normal', level: 'easy', q: 'Wanda always wore the same faded blue dress. Tap Wanda.', answer: 'cWanda', hint: 'Look for a blue dress and braids.' },
      { type: 'tap', diagram: 'chars4', mode: 'normal', level: 'easy', q: 'Miss Mason is the teacher. Tap Miss Mason.', answer: 'cMason', hint: 'She is a grown-up.' },
      { type: 'tap', diagram: 'chars4', mode: 'normal', level: 'medium', q: 'Peggy is a popular girl with long red hair. Tap Peggy.', answer: 'cPeggy', hint: 'Look for a pink headband.' },
      { type: 'tap', diagram: 'chars4', mode: 'normal', level: 'medium', q: 'Maddie has short blond hair. Tap Maddie.', answer: 'cMaddie', hint: 'Yellow hair.' }
    ] },
  { id: 'Z5', lesson: 1, boss: true, concept: 'Story words from pictures (crossword)',
    explain: 'closet, medal, letter, sign, winner, drawings.',
    variants: [
      { type: 'mc', fig: 'photo', pic: ph('d6_closet'), mode: 'boss', level: 'medium', q: 'Look and choose the word.', options: ['closet', 'dress', 'letter', 'medal'], answer: 0, hint: 'Clothes are lined up in it.' },
      { type: 'mc', fig: 'photo', pic: ph('d6_drawings'), mode: 'boss', level: 'hard', q: 'Look and choose the word.', options: ['drawings', 'dresses', 'closet', 'competition'], answer: 0, hint: 'Wanda made a hundred of them on paper.' },
      { type: 'mc', fig: 'photo', pic: ph('d6_competition'), mode: 'boss', level: 'hard', q: 'Look and choose the word.', options: ['competition', 'playground', 'winner', 'medal'], answer: 0, hint: 'A contest between people.' },
      { type: 'mc', fig: 'photo', pic: ph('d6_letter'), mode: 'boss', level: 'medium', q: 'Look and choose the word.', options: ['letter', 'sign', 'drawing', 'closet'], answer: 0, hint: 'Peggy and Maddie wrote one to Wanda.' }
    ] },

  /* ---------- Part 2 · The Story (pages 98-102) ---------- */
  { id: 'Z6', lesson: 2, concept: 'Wanda and her hundred dresses',
    explain: 'In a small school there was a girl named Wanda. She was a quiet girl who sat in the back of the classroom. Wanda always wore the same faded blue dress every day. Despite this, she told everyone she had a hundred beautiful dresses at home, all lined up in her closet.',
    variants: [
      { type: 'mc', fig: 'photo', pic: ph('d6_quiet'), mode: 'normal', level: 'easy', q: 'Where did Wanda sit?', options: ['In the back of the classroom', 'In the front of the classroom', 'Next to the teacher', 'In the playground'], answer: 0, hint: 'She was a quiet girl.' },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Wanda always wore the same faded blue ___ every day.', options: ['dress', 'closet', 'letter'], answer: 0, hint: 'Something a girl wears.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'How many dresses did Wanda say she had?', options: ['A hundred', 'Ten', 'One', 'A thousand'], answer: 0, hint: 'The title of the story.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Where did Wanda say her dresses were?', options: ['Lined up in her closet', 'At school', 'In the playground', 'At the shop'], answer: 0, hint: 'All lined up in her…' }
    ] },
  { id: 'Z7', lesson: 2, concept: 'The popular girls annoy Wanda',
    explain: 'The popular girls, especially Peggy and Maddie, annoyed Wanda every morning. In the playground Peggy said, “Hey, Wanda, tell us about your hundred dresses!” The other girls laughed. Maddie didn’t like it, but she stayed quiet: she was afraid of losing Peggy’s friendship.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Who annoyed Wanda every morning?', options: ['The popular girls, especially Peggy and Maddie', 'Miss Mason', 'The boys', 'Her dad'], answer: 0, hint: 'Read the first sentence of p 99.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What did Peggy say to Wanda in the playground?', options: ['“Hey, Wanda, tell us about your hundred dresses!”', '“I’m sorry.”', '“You are the winner.”', '“Keep my drawings.”'], answer: 0, hint: 'The other girls laughed.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Why did Maddie stay quiet?', options: ['She was afraid of losing Peggy’s friendship.', 'She liked laughing at Wanda.', 'She was absent.', 'She didn’t hear Peggy.'], answer: 0, hint: 'Maddie didn’t like it, but…' },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'Maddie liked how they were annoying Wanda.', answer: 1, hint: 'Maddie didn’t like it.' },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'Peggy and Maddie were always kind to Wanda.', answer: 1, hint: 'They annoyed her every morning.' }
    ] },
  { id: 'Z8', lesson: 2, concept: 'The drawing competition',
    explain: 'Miss Mason announced the annual drawing competition: “I will choose one boy and one girl as winners.” The walls were covered with a hundred beautiful drawings of dresses of all colors and designs. Wanda drew and signed all the drawings. She won the competition, but she wasn’t there to receive her medal.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Who announced the drawing competition?', options: ['Miss Mason', 'Peggy', 'Wanda’s dad', 'Maddie'], answer: 0, hint: 'The teacher.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Miss Mason will choose one boy and one girl as ___ in the competition.', options: ['winners', 'walls', 'medals', 'playgrounds'], answer: 0, hint: 'The people who win.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Wanda drew and ___ all the drawings in the competition.', options: ['signed', 'moved', 'sang', 'spoke'], answer: 0, hint: 'She wrote her name on them.' },
      { type: 'tf', mode: 'timed', seconds: 12, level: 'easy', q: 'Wanda won the annual drawing competition.', answer: 0, hint: 'Read p 100.' },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'Miss Mason chose three girls as winners.', answer: 1, hint: 'One boy and one girl.' },
      { type: 'tf', mode: 'timed', seconds: 12, level: 'easy', q: 'Wanda wasn’t there to receive her medal.', answer: 0, hint: 'Read the last sentence of p 100.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'When it was time to ___ the winner, the walls were covered with drawings.', options: ['announce', 'playground', 'competition'], answer: 0, hint: 'To say something officially.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'The walls were covered with a hundred beautiful ___ of dresses.', options: ['drawings', 'announce', 'playground'], answer: 0, hint: 'Pictures made with a pencil.' }
    ] },
  { id: 'Z9', lesson: 2, concept: 'Wanda moves away; the girls apologize',
    explain: 'Wanda was absent for several days, but no one noticed. Miss Mason read a letter from Wanda’s dad: the family moved to the big city, where they wouldn’t face unkindness. Peggy and Maddie felt terrible. They realized that the hundred dresses were Wanda’s drawings, her dreams on paper. They wrote her a letter to apologize.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Who sent a letter to Miss Mason?', options: ['Wanda’s dad', 'Wanda’s mom', 'Peggy', 'Maddie'], answer: 0, hint: 'Read p 101.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Why did Wanda’s family move to the big city?', options: ['So they wouldn’t face unkindness', 'To buy dresses', 'To win a medal', 'To see the Pyramids'], answer: 0, hint: 'Read the letter from Wanda’s dad.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What did Wanda mean by her hundred dresses?', options: ['Her drawings, her dreams on paper', 'Real dresses in her closet', 'Her mother’s dresses', 'Dresses at the shop'], answer: 0, hint: 'Peggy and Maddie realized…' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'How did Peggy and Maddie feel after seeing Wanda’s drawings?', options: ['Terrible', 'Happy', 'Bored', 'Angry with Wanda'], answer: 0, hint: 'Read p 101.' },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'Wanda had one hundred real dresses.', answer: 1, hint: 'They were drawings.' },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'Peggy and Maddie wrote an email to Wanda to apologize.', answer: 1, hint: 'They wrote her a ___.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Peggy and Maddie wrote a ___ to Wanda to apologize.', options: ['letter', 'behavior', 'dream', 'closet'], answer: 0, hint: 'You send it by post.' }
    ] },
  { id: 'Z10', lesson: 2, concept: 'Wanda’s reply and the lesson',
    explain: 'Wanda was happy when she got the letter. She wrote back: “Thank you for your letter. I’m happy at my new school, and I want you to keep my drawings.” Peggy and Maddie learned that kindness matters more than expensive clothes. They promised to always speak up if there was bullying.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What did Wanda write in her letter to Peggy and Maddie?', options: ['“I’m happy at my new school, and I want you to keep my drawings.”', '“I am still angry.”', '“Send me my medal.”', '“I will come back tomorrow.”'], answer: 0, hint: 'Read p 102.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What did Peggy and Maddie learn?', options: ['Kindness matters more than expensive clothes.', 'Dresses are expensive.', 'Drawing is easy.', 'Big cities are better.'], answer: 0, hint: 'Read the last paragraph.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What did Peggy and Maddie promise?', options: ['To always speak up if there was bullying', 'To buy a hundred dresses', 'To win the next competition', 'To move to the big city'], answer: 0, hint: 'The last sentence of the story.' },
      { type: 'tf', mode: 'timed', seconds: 12, level: 'easy', q: 'Wanda was happy when she learned the letter was from Maddie and Peggy.', answer: 0, hint: 'Read the first sentence of p 102.' }
    ] },
  { id: 'Z11', lesson: 2, boss: true, concept: 'The whole story: true or false',
    explain: 'Wanda’s family moved to the big city. Wanda won the competition. Wanda’s dad (not her mom) sent the letter. Miss Mason chose one boy and one girl.',
    variants: [
      { type: 'tf', mode: 'boss', level: 'hard', q: 'Wanda’s family moved to the big city.', answer: 0, hint: 'Read the letter from Wanda’s dad.' },
      { type: 'tf', mode: 'boss', level: 'hard', q: 'Wanda’s mom sent a letter to Miss Mason.', answer: 1, hint: 'Who wrote the letter?' },
      { type: 'multi', mode: 'boss', level: 'hard', q: 'Which sentences are true? Choose all the correct answers.', options: ['Wanda drew and signed all the drawings.', 'No one noticed that Wanda was absent.', 'Peggy and Maddie felt terrible.', 'Wanda asked for her medal.'], answer: [0, 1, 2], hint: 'Wanda wanted them to keep her drawings.' },
      { type: 'fill', mode: 'boss', level: 'hard', q: 'Wanda won the ___, but she wasn’t there to receive her medal.', options: ['competition', 'announce', 'drawings', 'playground'], answer: 0, hint: 'A contest.' }
    ] },

  /* ---------- Part 3 · Who Said It? Events in Order (pages 103-105, Self-Assessment p 108) ---------- */
  { id: 'Z12', lesson: 3, concept: 'Who said this?',
    explain: '“Hey, Wanda, tell us about your hundred dresses!” = Peggy. “I want you to keep my drawings.” = Wanda. “We need to write to Wanda and apologize.” = Maddie. “I will choose one boy and one girl as winners.” = Miss Mason.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Who said: “I will choose one boy and one girl as winners.”?', options: ['Miss Mason', 'Peggy', 'Wanda', 'Maddie'], answer: 0, hint: 'The teacher chooses the winners.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Who said: “I want you to keep my drawings.”?', options: ['Wanda', 'Peggy', 'Maddie', 'Miss Mason'], answer: 0, hint: 'Whose drawings were they?' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Who said: “Hey, Wanda, tell us about your hundred dresses!”?', options: ['Peggy', 'Maddie', 'Miss Mason', 'Wanda'], answer: 0, hint: 'She laughed at Wanda in the playground.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Who said: “We need to write to Wanda and apologize.”?', options: ['Maddie', 'Peggy', 'Miss Mason', 'Wanda'], answer: 0, hint: 'She said it to Peggy.' },
      { type: 'match', mode: 'normal', level: 'medium', q: 'Match the words to the speaker.', left: ['“Tell us about your hundred dresses!”', '“Keep my drawings.”', '“We need to apologize.”', '“I will choose one boy and one girl.”'], right: ['Peggy', 'Wanda', 'Maddie', 'Miss Mason'], answer: [0, 1, 2, 3], hint: 'Think of each person’s part in the story.' }
    ] },
  { id: 'Z13', lesson: 3, concept: 'Events in order',
    explain: '1 Wanda told everyone about her hundred dresses. 2 Peggy and Maddie annoyed Wanda in the playground. 3 Wanda won the drawing competition. 4 Miss Mason read a letter from Wanda’s dad. 5 Peggy and Maddie wrote a letter to Wanda. 6 Peggy and Maddie promised to always speak up if there was bullying.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What happened first?', options: ['Wanda told everyone about her hundred dresses.', 'Wanda won the drawing competition.', 'Peggy and Maddie wrote a letter.', 'Miss Mason read a letter.'], answer: 0, hint: 'The book gives it as number 1.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What happened after Wanda won the competition?', options: ['Miss Mason read a letter from Wanda’s dad.', 'Peggy annoyed Wanda in the playground.', 'Wanda told everyone about her dresses.', 'Wanda sat at the back of the class.'], answer: 0, hint: 'Wanda was absent for days.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What happened last?', options: ['Peggy and Maddie promised to always speak up if there was bullying.', 'Wanda won the drawing competition.', 'Miss Mason read a letter.', 'Peggy laughed at Wanda.'], answer: 0, hint: 'The end of the story.' },
      { type: 'order', mode: 'normal', level: 'medium', q: 'Put the events in order.', items: ['Wanda won the drawing competition.', 'Peggy and Maddie annoyed Wanda in the playground.', 'Peggy and Maddie wrote a letter to Wanda.'], answer: [1, 0, 2], hint: 'Playground, competition, letter.' }
    ] },
  { id: 'Z14', lesson: 3, concept: 'Complete the events (Self-Assessment)',
    explain: 'One day in the playground, Peggy and other girls annoyed Wanda. The teacher read the letter from Wanda’s dad and said they moved to the big city. Peggy and Maddie wrote a letter to Wanda to apologize.',
    variants: [
      { type: 'fill', mode: 'normal', level: 'easy', q: 'One day in the playground, Peggy and other girls ___.', options: ['annoyed Wanda', 'to apologize', 'they moved to the big city'], answer: 0, hint: 'They laughed at her.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'The teacher read the letter from Wanda’s dad and said ___.', options: ['they moved to the big city', 'annoyed Wanda', 'to apologize'], answer: 0, hint: 'The family went away.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Peggy and Maddie wrote a letter to Wanda ___.', options: ['to apologize', 'annoyed Wanda', 'they moved to the big city'], answer: 0, hint: 'To say sorry.' }
    ] },
  { id: 'Z15', lesson: 3, concept: 'The story in short (p 104 ex 6)',
    explain: 'Miss Mason announced the competition. The walls were covered with a hundred beautiful drawings of dresses. Wanda won the competition, but she wasn’t there to receive her medal. In the playground Peggy laughed at Wanda.',
    variants: [
      { type: 'fill', mode: 'normal', level: 'easy', q: 'Wanda won the ___, but she wasn’t there to receive her medal.', options: ['competition', 'playground', 'drawings'], answer: 0, hint: 'The drawing contest.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'One day, while they were in the ___, Peggy laughed at Wanda.', options: ['playground', 'competition', 'closet'], answer: 0, hint: 'Where children play at school.' },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Wanda had a hundred dresses lined up in her ___.', options: ['closet', 'medal', 'letter'], answer: 0, hint: 'A cupboard for clothes.' }
    ] },
  { id: 'Z16', lesson: 3, boss: true, concept: 'The six events in order',
    explain: 'dresses → playground → competition → dad’s letter → apology letter → promise.',
    variants: [
      { type: 'order', mode: 'boss', level: 'hard', q: 'Put the events in order.', items: ['Miss Mason read a letter from Wanda’s dad.', 'Wanda told everyone about her one hundred dresses.', 'Peggy and Maddie promised to always speak up if there was bullying.', 'Wanda won the drawing competition.', 'Peggy and Maddie wrote a letter to Wanda.', 'Peggy and Maddie annoyed Wanda in the playground.'], answer: [1, 5, 3, 0, 4, 2], hint: 'Start with the hundred dresses; end with the promise.' },
      { type: 'build', style: 'sentence', mode: 'boss', level: 'hard', q: 'Put the cards in order.', parts: ['Wanda drew', 'and signed', 'all the drawings.'], extra: ['and sang', 'one drawing'], hint: 'She wrote her name on every drawing.' }
    ] },

  /* ---------- Part 4 · Story Elements and the Right Action (pages 106-108) ---------- */
  { id: 'Z17', lesson: 4, concept: 'Story elements: setting, characters, moral',
    explain: 'Setting = where and when a story takes place (the school). Characters = people or animals in a story (Wanda, Peggy, Maddie, Miss Mason). Moral = the lesson: we shouldn’t judge others by their appearance. Plot = the main events of a story.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What is the setting of the story?', options: ['The school', 'The big city', 'A forest', 'A shop'], answer: 0, hint: 'Where does most of the story happen?' },
      { type: 'mc', mode: 'normal', level: 'medium', q: '“We shouldn’t judge others by their appearance.” is the ___ of the story.', options: ['moral', 'setting', 'characters', 'title'], answer: 0, hint: 'The lesson the story teaches.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Wanda, Peggy, Maddie and Miss Mason are the ___.', options: ['characters', 'setting', 'moral', 'plot'], answer: 0, hint: 'The people in the story.' },
      { type: 'match', mode: 'normal', level: 'medium', q: 'Match the story element to its meaning.', left: ['Setting', 'Characters', 'Plot'], right: ['where and when a story takes place', 'people or animals in a story', 'the main events of a story'], answer: [0, 1, 2], hint: 'See the glossary on p 116.' }
    ] },
  { id: 'Z18', lesson: 4, concept: 'Do you agree with the action?',
    explain: 'Maddie stayed quiet when Peggy bullied Wanda: don’t agree. It was wrong that she didn’t speak up for Wanda.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Maddie stayed quiet when Peggy bullied Wanda. Do you agree?', options: ['Don’t agree: it was wrong that she didn’t speak up for Wanda.', 'Agree: staying quiet was kind.'], answer: 0, hint: 'Read the example on p 107.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'At the end, Peggy and Maddie promised to ___.', options: ['speak up if there is bullying', 'stay quiet', 'laugh at others', 'buy new dresses'], answer: 0, hint: 'The last sentence of the story.' }
    ] },
  { id: 'Z19', lesson: 4, concept: 'The right action',
    explain: 'You see your friend laughing at a classmate who wears old clothes. The right action: tell the teacher about the situation.',
    variants: [
      { type: 'mc', fig: 'photo', pic: ph('d6_faded'), mode: 'normal', level: 'medium', q: 'You see your friend laughing at a classmate who wears old clothes. What will you do?', options: ['Tell the teacher about the situation.', 'Laugh with your friend.', 'Ignore it and walk away.'], answer: 0, hint: 'Speak up when there is bullying.' },
      { type: 'tf', mode: 'timed', seconds: 12, level: 'easy', q: 'Kindness matters more than expensive clothes.', answer: 0, hint: 'What Peggy and Maddie learned.' },
      { type: 'tf', mode: 'normal', level: 'easy', q: 'It is OK to laugh at a classmate who wears old clothes.', answer: 1, hint: 'That is bullying.' }
    ] },
  { id: 'Z20', lesson: 4, concept: 'Word search words (Self-Assessment)',
    explain: 'announce, closet, dress, medal, sign, winner, letter.',
    variants: [
      { type: 'mc', fig: 'photo', pic: ph('d6_announce'), mode: 'normal', level: 'easy', q: 'Look and choose the word.', options: ['announce', 'apologize', 'notice', 'sign'], answer: 0, hint: 'He says something loudly.' },
      { type: 'mc', fig: 'photo', pic: ph('d6_winner'), mode: 'normal', level: 'easy', q: 'Look and choose the word.', options: ['winner', 'medal', 'letter', 'closet'], answer: 0, hint: 'The person who finishes first.' },
      { type: 'mc', fig: 'photo', pic: ph('d6_sign'), mode: 'normal', level: 'medium', q: 'Look and choose the word.', options: ['sign', 'draw', 'letter', 'announce'], answer: 0, hint: 'When someone writes their name.' }
    ] },
  { id: 'Z21', lesson: 4, boss: true, concept: 'Story elements and the moral',
    explain: 'Setting: the school. Characters: Wanda, Peggy, Maddie, Miss Mason. Moral: we shouldn’t judge others by their appearance.',
    variants: [
      { type: 'table', mode: 'boss', level: 'hard', q: 'Sort into the story elements.', poc: 'Item', cols: ['Setting', 'Characters', 'Moral'], items: ['The school', 'Wanda', 'Miss Mason', 'We shouldn’t judge others by their appearance.'], answer: [0, 1, 1, 2], hint: 'A place, people, a lesson.' },
      { type: 'multi', mode: 'boss', level: 'hard', q: 'Which ones are characters in the story? Choose all the correct answers.', options: ['Wanda', 'Peggy', 'Maddie', 'Sami'], answer: [0, 1, 2], hint: 'Sami is from the carpenter story.' },
      { type: 'mc', mode: 'boss', level: 'hard', q: 'Which moral fits the story best?', options: ['We shouldn’t judge others by their appearance.', 'Learn from the mistakes of others.', 'Always do your best, even when tired.', 'Big cities are better than small towns.'], answer: 0, hint: 'They laughed at Wanda because of her old dress.' }
    ] },

  /* ---------- Part 5 · Review 2 (pages 109-112: places, prepositions, phonics) ---------- */
  { id: 'Z22', lesson: 5, concept: 'Places in Egypt (Review 2)',
    explain: 'The Cairo Tower is tall and has a great view. The Egyptian Museum is full of history.',
    variants: [
      { type: 'mc', fig: 'photo', pic: ph('e4_tower'), mode: 'normal', level: 'easy', q: 'The Cairo ___ is tall and has a great view.', options: ['Tower', 'Oasis', 'Bazaar', 'River'], answer: 0, hint: 'Look at the picture.' },
      { type: 'mc', fig: 'photo', pic: ph('e4_museum'), mode: 'normal', level: 'easy', q: 'The Egyptian ___ is full of history.', options: ['Museum', 'Tower', 'Mall', 'Office'], answer: 0, hint: 'It has many treasures.' },
      { type: 'tap', diagram: 'egypt6', mode: 'normal', level: 'medium', q: 'Tap Siwa Oasis.', answer: 'siwa', hint: 'Water and palm trees in the desert.' }
    ] },
  { id: 'Z23', lesson: 5, concept: 'Correct the preposition (Review 2)',
    explain: 'The flowers are between two trees. The bird is in front of the cage.',
    variants: [
      { type: 'fill', mode: 'normal', level: 'medium', q: 'The flowers are ___ two trees. (on)', options: ['between', 'on', 'in'], answer: 0, hint: 'One tree on each side.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'The bird is ___ the cage. (front)', options: ['in front of', 'front', 'in front'], answer: 0, hint: 'Three words.' },
      { type: 'mc', fig: 'prepBox', pic: { pos: 'behind' }, mode: 'normal', level: 'medium', q: 'The cat is ___ the box.', options: ['behind', 'in', 'on', 'between'], answer: 0, hint: 'The box hides most of the cat.' }
    ] },
  { id: 'Z24', lesson: 5, concept: 'Missing letters (Review 2)',
    explain: 'bin, stone, pond, slide.',
    variants: [
      { type: 'fill', fig: 'photo', pic: ph('pb_bin'), mode: 'normal', level: 'easy', q: '___in', options: ['b', 'p'], answer: 0, hint: 'We throw our trash in it.' },
      { type: 'fill', fig: 'photo', pic: ph('pb_pond'), mode: 'normal', level: 'easy', q: '___ond', options: ['p', 'b'], answer: 0, hint: 'Ducks swim in it.' },
      { type: 'fill', fig: 'photo', pic: ph('se_slide'), mode: 'normal', level: 'medium', q: 'slid___', options: ['e', 'a', 'i'], answer: 0, hint: 'A silent letter at the end.' }
    ] },
  { id: 'Z25', lesson: 5, boss: true, concept: 'Term review',
    explain: 'Words and grammar from units 4-6: places, jobs, prepositions, superlatives and the story.',
    variants: [
      { type: 'table', mode: 'boss', level: 'hard', q: 'Read and sort.', poc: 'Word', cols: ['Places', 'Jobs', 'Story words'], items: ['Cairo Tower', 'Siwa Oasis', 'nurse', 'carpenter', 'medal', 'closet'], answer: [0, 0, 1, 1, 2, 2], hint: 'Where, who, and things from the story.' },
      { type: 'fill', mode: 'boss', level: 'hard', q: 'Wanda’s drawings were the ___ in the class. (nice)', options: ['nicest', 'nicer', 'niceest'], answer: 0, hint: 'nice ends in -e: add -st.' },
      { type: 'mc', mode: 'boss', level: 'hard', q: 'Which word has a long vowel with silent e?', options: ['gate', 'bin', 'pan', 'pond'], answer: 0, hint: 'Look for the e at the end.' }
    ] }
];
})();
