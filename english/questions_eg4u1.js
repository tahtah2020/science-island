/* English · Grade 4 · Term 1 · Unit 1 "The Five Senses" · ministry book "English Primary 4", first term 2026/2027 (book pages 7-22)
   One English book for both tracks (subject lang { lang: 'en', ar: 'en' }), so there is no _ar file.
   Lessons: 1 What are the Five Senses? (pp 8-10) · 2 Healthy Habits (pp 11-13) · 3 Story Time: Goha's Great Meal + Pronunciation (pp 14-17)
            4 Writing: Sequence Words (pp 18-19) · 5 Think and Create: A Presentation (p 20) · Quick Review and Self-Assessment (pp 21-22, spread over the lessons)
   Idea letters (one per lesson): A, B, C, D, E.  Boss ideas: A5, B6, C10, D5, E3.
   Rules: answers of mc/fill at index 0 (the page shuffles) · one Boss idea per lesson (every variant mode:'boss') · about a third timed (10-20 s, easy recall)
          distractors = real misconceptions · term/fix answers ≤ 18 letters · core and Boss only from the school book.
   Tap picture (english/g4_art.js): fiveSenses -> eye | ear | nose | tongue | palm
   The listening activities of the book (audio) are asked as reading questions; the audio is not on the site. */
(function () {
window.CHAPTER = { id: 'eg4u1', title: 'The Five Senses' };

window.IDEAS = [
  /* ---------- Lesson 1 · What are the Five Senses? ---------- */
  { id: 'A1', lesson: 1, concept: 'The five senses',
    explain: 'We have five senses: taste, smell, see, hear and touch. We use them to learn about the world.',
    variants: [
      { type: 'mc', mode: 'timed', seconds: 12, level: 'easy', q: 'How many senses do we have?', options: ['Five', 'Three', 'Seven', 'Ten'], answer: 0 },
      { type: 'term', mode: 'normal', level: 'medium', q: 'We have five of these: taste, smell, see, hear and touch.', answer: 'Senses' },
      { type: 'multi', mode: 'normal', level: 'medium', q: 'Which of these are senses? Choose all the correct answers.', options: ['Taste', 'Smell', 'Touch', 'Jump'], answer: [0, 1, 2] },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'Touch is one of the five senses.', answer: 0 },
      { type: 'tap', diagram: 'fiveSenses', mode: 'normal', level: 'easy', q: 'Tap the picture of the sense of smell.', answer: 'nose' }
    ] },
  { id: 'A2', lesson: 1, concept: 'The body part of each sense',
    explain: 'I see with my eyes. I hear with my ears. I smell with my nose. I taste with my tongue. I touch with my hands.',
    variants: [
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'I smell with my ___.', options: ['nose', 'ears', 'tongue'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'I hear with my ___.', options: ['ears', 'eyes', 'hands'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Which part of the body do we use to taste?', options: ['Tongue', 'Nose', 'Eyes', 'Hands'], answer: 0 },
      { type: 'match', mode: 'normal', level: 'medium', q: 'Match each sense to the part of the body.', left: ['see', 'hear', 'smell', 'taste', 'touch'], right: ['eyes', 'ears', 'nose', 'tongue', 'hands'], answer: [0, 1, 2, 3, 4] },
      { type: 'fix', mode: 'normal', level: 'medium', q: 'I hear with my eyes.', wrong: 'eyes', answer: 'ears' },
      { type: 'tap', diagram: 'fiveSenses', mode: 'normal', level: 'easy', q: 'Tap the part of the body we use to touch.', answer: 'palm' },
      { type: 'tap', diagram: 'fiveSenses', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap the part of the body we use to see.', answer: 'eye' }
    ] },
  { id: 'A3', lesson: 1, concept: 'Which sense do we use?',
    explain: 'We use our senses in different situations: we see a huge tree with our eyes (sight), smell a flower with our nose, hear a loud noise with our ears, and touch things to find them in a bag.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'There is a huge tree. Which sense do you use to see it?', options: ['Sight', 'Hearing', 'Smell'], answer: 0 },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'There is a flower. Which sense do you use to know how it smells?', options: ['Smell', 'Taste', 'Hearing'], answer: 0 },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'There is a loud noise. Which sense do you use?', options: ['Hearing', 'Smell', 'Touch'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'You are trying to find something in your bag. Which sense helps you most?', options: ['Touch', 'Taste', 'Hearing'], answer: 0 },
      { type: 'mc', style: 'story', mode: 'normal', level: 'medium', q: 'Sami can hear birds singing in the school garden. Which sense is he using?', options: ['Hearing', 'Sight', 'Smell', 'Touch'], answer: 0 },
      { type: 'multi', mode: 'normal', level: 'medium', q: 'What does Salma use in the school garden? Choose all the correct answers.', options: ['Smell the flowers', 'See the colorful butterflies', 'Hear birds singing', 'Taste soup'], answer: [0, 1] }
    ] },
  { id: 'A4', lesson: 1, concept: 'Senses help us understand the world and stay safe',
    explain: 'Senses help us understand the world around us. Senses also help us stay safe: if we smell smoke, we know there is a fire.',
    variants: [
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Senses help us ___ the world around us.', options: ['understand', 'forget', 'hide'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'Our senses help us stay safe.', answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'If we smell smoke, what do we know?', options: ['There is a fire', 'There is a flower', 'It is time for lunch', 'It is raining'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Where are Ms. Mona and the students?', options: ['In the school garden', 'In the restaurant', 'At the market', 'In the library'], answer: 0 },
      { type: 'build', style: 'sentence', mode: 'normal', level: 'hard', q: 'Put the cards in order.', parts: ['If we smell smoke,', 'we know', 'there is a fire.'], extra: ['we hear', 'a flower.'] }
    ] },
  { id: 'A5', lesson: 1, boss: true, concept: 'What I do with each sense',
    explain: 'I taste delicious food with my tongue. I touch soft and hard things with my hands. I smell flowers in the garden with my nose. I hear music and voices with my ears. I see colors and shapes with my eyes.',
    variants: [
      { type: 'match', mode: 'boss', level: 'hard', q: 'Match the two halves of each sentence.', left: ['I taste ...', 'I touch ...', 'I smell ...', 'I hear ...', 'I see ...'], right: ['delicious food with my tongue.', 'soft and hard things with my hands.', 'flowers in the garden with my nose.', 'music and voices with my ears.', 'colors and shapes with my eyes.'], answer: [0, 1, 2, 3, 4] },
      { type: 'fill', mode: 'boss', level: 'medium', q: 'I use my eyes to ___.', options: ['see', 'hear', 'taste'], answer: 0 },
      { type: 'fill', mode: 'boss', level: 'medium', q: 'I use my tongue to ___.', options: ['taste', 'smell', 'touch'], answer: 0 },
      { type: 'build', style: 'sentence', mode: 'boss', level: 'hard', q: 'Put the cards in order.', parts: ['I hear', 'music and voices', 'with my ears.'], extra: ['with my nose.', 'flowers'] },
      { type: 'multi', mode: 'boss', level: 'hard', q: 'Which sentences are true? Choose all the correct answers.', options: ['I smell flowers with my nose.', 'I touch soft things with my hands.', 'I see colors with my ears.', 'I taste music with my tongue.'], answer: [0, 1] }
    ] },

  /* ---------- Lesson 2 · Healthy Habits ---------- */
  { id: 'B1', lesson: 2, concept: 'Sarah wakes up early and exercises',
    explain: 'Sarah is a healthy 10-year-old girl. She wakes up early at 6:00 a.m. She brushes her teeth and washes her face. Next, she does some simple exercises in the garden.',
    variants: [
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'Sarah wakes up late every day.', answer: 1 },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'What time does Sarah wake up?', options: ['6:00 a.m.', '8:30 p.m.', '10:00 p.m.', '9:00 a.m.'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Sarah does exercises in the ___.', options: ['garden', 'room', 'school', 'library'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'In the morning, Sarah brushes her teeth and washes her ___.', options: ['face', 'car', 'book'], answer: 0 },
      { type: 'order', mode: 'normal', level: 'medium', q: 'Put Sarah’s morning in order.', items: ['She does exercises in the garden', 'She wakes up at 6:00 a.m.', 'She brushes her teeth'], answer: [1, 2, 0] }
    ] },
  { id: 'B2', lesson: 2, concept: 'Healthy food',
    explain: 'For breakfast, Sarah drinks orange juice and eats eggs and brown bread. These foods give her energy for the day. For dinner, she eats lots of vegetables and fruits. These give her important vitamins. She doesn’t eat too many sweets.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'For breakfast, Sarah drinks ___.', options: ['orange juice', 'tea', 'milk', 'coffee'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 12, level: 'easy', q: 'Sarah eats eggs and brown bread for breakfast.', answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Vegetables and fruits give Sarah important ___.', options: ['vitamins', 'sweets', 'coins'], answer: 0 },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'Sarah eats too many sweets.', answer: 1 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Why does Sarah eat healthy food?', options: ['To get energy and stay strong', 'To win a medal', 'To make friends', 'To sleep longer'], answer: 0 },
      { type: 'table', mode: 'normal', level: 'medium', q: 'Sort Sarah’s food.', poc: 'Meal', cols: ['Breakfast', 'Dinner'], items: ['Eggs', 'Orange juice', 'Vegetables', 'Fruits'], answer: [0, 0, 1, 1] }
    ] },
  { id: 'B3', lesson: 2, concept: 'At school and in the afternoon',
    explain: 'At school, Sarah drinks plenty of water between classes. She plays sports with her friends during break time. In the afternoon, Sarah does her homework first. After that, she helps her mother in the garden. They grow fresh vegetables together.',
    variants: [
      { type: 'tf', mode: 'timed', seconds: 12, level: 'easy', q: 'Sarah drinks plenty of water at school.', answer: 0 },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'In the afternoon, Sarah ___.', options: ['does her homework', 'watches TV', 'plays video games', 'goes to sleep'], answer: 0 },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'Who does Sarah help in the afternoon?', options: ['Her mother', 'Her teacher', 'Her brother', 'Her friend'], answer: 0 },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'Sarah helps her mother in the kitchen.', answer: 1 },
      { type: 'fix', mode: 'normal', level: 'medium', q: 'Sarah helps her mother in the kitchen.', wrong: 'kitchen', answer: 'garden' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Sarah and her mother grow fresh ___ together.', options: ['vegetables', 'sweets', 'books'], answer: 0 }
    ] },
  { id: 'B4', lesson: 2, concept: 'Sleep and healthy habits',
    explain: 'In the evening, Sarah takes a shower and brushes her teeth again. She goes to bed early at 8:30 p.m. and sleeps for 9 hours every night. Getting enough sleep helps her body stay healthy and her mind stay sharp. Sarah’s healthy habits help her feel good and do well at school.',
    variants: [
      { type: 'tf', mode: 'timed', seconds: 12, level: 'easy', q: 'Sarah goes to bed at 10:00 p.m.', answer: 1 },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'When does Sarah go to bed?', options: ['8:30 p.m.', '6:00 a.m.', '10:00 p.m.', '12:00 a.m.'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Sarah sleeps for ___ hours every night.', options: ['9', '6', '12'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Enough sleep helps her body stay healthy and her mind stay ___.', options: ['sharp', 'sad', 'late'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Sarah’s healthy habits help her ___.', options: ['feel good', 'eat enough food', 'make friends', 'win competitions'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'How do healthy habits help Sarah at school?', options: ['She feels good, does well and has lots of energy', 'She sleeps in class', 'She plays all day', 'She eats sweets at break time'], answer: 0 }
    ] },
  { id: 'B5', lesson: 2, concept: 'Present simple: I, you, we, they and he, she, it',
    explain: 'We use the present simple to talk about daily habits and routines. With I, you, we, they or a plural noun we use the infinitive form of the verb: Some children play sports after school. With he, she, it or a singular noun we add -s, -es or -ies: He plays football. He brushes his teeth. She carries her backpack.',
    variants: [
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'We use the present simple to talk about ___.', options: ['daily habits and routines', 'things that happened yesterday', 'things we will do tomorrow'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'She ___ vitamins every morning.', options: ['takes', 'take', 'taking'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'My brother and I ___ TV in the evening.', options: ['watch', 'watches', 'watching'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'My sister ___ English every day.', options: ['studies', 'studys', 'study'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'The nurse ___ sick people.', options: ['helps', 'help', 'helping'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 12, level: 'medium', q: 'We add -s, -es or -ies to the verb after he, she and it.', answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which sentence is correct?', options: ['Some children play sports after school.', 'Some children plays sports after school.', 'Some children playing sports after school.'], answer: 0 }
    ] },
  { id: 'B6', lesson: 2, boss: true, concept: 'Write the correct present simple form',
    explain: 'In the present simple, a singular subject (he, she, it, Ali, Layla, my sister) takes -s, -es or -ies; I, we, you, they and plural subjects use the infinitive: We see with our eyes. Ali eats healthy food every day. My sister and I sleep early every night. Layla drinks water every morning.',
    variants: [
      { type: 'fix', mode: 'boss', level: 'medium', q: 'We sees with our eyes.', wrong: 'sees', answer: 'see' },
      { type: 'fix', mode: 'boss', level: 'medium', q: 'Ali eat healthy food every day.', wrong: 'eat', answer: 'eats' },
      { type: 'fix', mode: 'boss', level: 'hard', q: 'My sister and I sleeps early every night.', wrong: 'sleeps', answer: 'sleep' },
      { type: 'fix', mode: 'boss', level: 'medium', q: 'Layla drink water every morning.', wrong: 'drink', answer: 'drinks' },
      { type: 'fix', mode: 'boss', level: 'hard', q: 'He brush his teeth every day.', wrong: 'brush', answer: 'brushes' },
      { type: 'build', style: 'sentence', mode: 'boss', level: 'hard', q: 'Put the cards in order.', parts: ['He', 'reads', 'in the morning.'], extra: ['are', 'yesterday'] },
      { type: 'build', style: 'sentence', mode: 'boss', level: 'hard', q: 'Put the cards in order.', parts: ['The girls', 'watch TV', 'every day.'], extra: ['is', 'tomorrow'] }
    ] },

  /* ---------- Lesson 3 · Story Time: Goha's Great Meal (+ Pronunciation) ---------- */
  { id: 'C1', lesson: 3, concept: 'Story elements: characters, setting and plot',
    explain: 'The story elements are: Characters: the people and animals in a story. Setting: the time and place of a story. Plot: Beginning (meet the people, know the place), Problem (something goes wrong), Middle (the character tries to fix it), Ending (the problem is solved).',
    variants: [
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'What is the setting of a story?', options: ['The time and place of the story', 'The people in the story', 'The problem in the story'], answer: 0 },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'What are the characters of a story?', options: ['The people and animals in the story', 'The time and place of the story', 'The end of the story'], answer: 0 },
      { type: 'match', mode: 'normal', level: 'medium', q: 'Match each story element to its meaning.', left: ['Characters', 'Setting', 'Plot'], right: ['the people and animals in a story', 'the time and place of a story', 'beginning, problem, middle and ending'], answer: [0, 1, 2] },
      { type: 'order', mode: 'normal', level: 'medium', q: 'Put the parts of the plot in order.', items: ['Ending', 'Beginning', 'Middle', 'Problem'], answer: [1, 3, 2, 0] },
      { type: 'match', mode: 'normal', level: 'medium', q: 'Match each part of the plot to what happens.', left: ['Beginning', 'Problem', 'Middle', 'Ending'], right: ['We meet the people and know the place', 'Something goes wrong', 'The character tries to fix it', 'The problem is solved'], answer: [0, 1, 2, 3] },
      { type: 'term', mode: 'normal', level: 'medium', q: 'The time and place of a story.', answer: 'Setting' }
    ] },
  { id: 'C2', lesson: 3, concept: 'Story words: owner, jingling, share, hungry, greedy',
    explain: 'owner: someone who has something. jingling: a light, ringing sound. share: to give some of what you have to others. hungry: wanting to eat. greedy: always wanting more than what is needed.',
    variants: [
      { type: 'match', mode: 'normal', level: 'medium', q: 'Match each word to its meaning.', left: ['owner', 'jingling', 'share', 'hungry', 'greedy'], right: ['someone who has something', 'a light, ringing sound', 'to give some of what you have to others', 'wanting to eat', 'always wanting more than what is needed'], answer: [0, 1, 2, 3, 4] },
      { type: 'term', mode: 'normal', level: 'medium', q: 'Always wanting more than what is needed.', answer: 'Greedy' },
      { type: 'term', mode: 'normal', level: 'medium', q: 'To give some of what you have to others.', answer: 'Share' },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'What does “hungry” mean?', options: ['Wanting to eat', 'Wanting to sleep', 'Wanting to run'], answer: 0 },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'Which word means “a light, ringing sound”?', options: ['Jingling', 'Greedy', 'Owner'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'The restaurant ___ saw Goha and asked, “What are you doing?”', options: ['owner', 'coin', 'market'], answer: 0 }
    ] },
  { id: 'C3', lesson: 3, concept: 'Goha is hungry and smells the soup',
    explain: 'One morning, Goha was walking through the market. He was very hungry, but didn’t have enough money to buy food. Suddenly, he smelled something wonderful. The yummy smell was coming from a restaurant’s window. Goha stopped and sat outside the restaurant. He closed his eyes and took a deep breath. “This wonderful smell makes me feel less hungry!”',
    variants: [
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'Where was Goha walking one morning?', options: ['Through the market', 'In the school garden', 'Along the river'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 12, level: 'easy', q: 'Goha had enough money to buy food.', answer: 1 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Why did Goha sit outside the restaurant?', options: ['He was hungry and smelled the wonderful soup', 'He wanted to work there', 'He was waiting for a friend', 'He wanted to sell coins'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'The yummy smell was coming from a restaurant’s ___.', options: ['window', 'door', 'roof'], answer: 0 },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'Goha felt less hungry after smelling the delicious soup.', answer: 0 }
    ] },
  { id: 'C4', lesson: 3, concept: 'The owner is greedy',
    explain: 'The restaurant owner saw Goha and asked, “What are you doing?” Goha said, “I’m enjoying the smell of your delicious soup.” The owner was greedy. He said, “You can’t smell the soup for free! You must pay for it!”',
    variants: [
      { type: 'tf', mode: 'normal', level: 'medium', q: 'The owner of the restaurant was happy to see Goha enjoying the smell of the soup.', answer: 1 },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What did the owner say Goha must do?', options: ['Pay for the smell of the soup', 'Go home', 'Wash the plates', 'Cook the soup'], answer: 0 },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'Who was greedy in the story?', options: ['The restaurant owner', 'Goha', 'Ms. Mona', 'Sarah'], answer: 0 },
      { type: 'multi', mode: 'normal', level: 'medium', q: 'Who are the characters of the story? Choose all the correct answers.', options: ['Goha', 'The restaurant owner', 'Ms. Mona', 'Sarah'], answer: [0, 1] },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'The owner said, “You can’t smell the soup for ___!”', options: ['free', 'fun', 'food'], answer: 0 }
    ] },
  { id: 'C5', lesson: 3, concept: 'Goha’s clever answer',
    explain: 'Goha took out a few coins from his pocket. He shook them in his hand, and they made a jingling sound. “If you want money for the smell of your soup, then you can take the sound of my coins.”',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'How was Goha clever in solving the problem?', options: ['He paid for the smell with the sound of his coins', 'He ran away from the owner', 'He cooked his own soup', 'He gave the owner all his money'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Goha shook his coins and they made a ___ sound.', options: ['jingling', 'sad', 'quiet'], answer: 0 },
      { type: 'tf', mode: 'normal', level: 'hard', q: 'Goha paid the owner a few coins for the smell of the soup.', answer: 1 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What did Goha say the owner could take?', options: ['The sound of his coins', 'His coins', 'His hat', 'His lunch'], answer: 0 },
      { type: 'build', style: 'why', mode: 'normal', level: 'hard', q: 'The owner laughed at Goha’s answer.', parts: ['Because Goha’s answer', 'was clever'], extra: ['was greedy', 'was loud'] }
    ] },
  { id: 'C6', lesson: 3, concept: 'The owner shares the soup',
    explain: 'The owner laughed at Goha’s clever answer. “Come inside,” he said. “Let’s share this soup. Good food tastes better when shared with others!”',
    variants: [
      { type: 'tf', mode: 'timed', seconds: 12, level: 'easy', q: 'The owner invited Goha inside to share the soup.', answer: 0 },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'The owner was impressed by Goha’s clever response.', answer: 0 },
      { type: 'fill', mode: 'normal', level: 'easy', q: '“Let’s ___ this soup,” said the owner.', options: ['share', 'sell', 'smell'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What did the owner do when he heard Goha’s answer?', options: ['He laughed and invited Goha in', 'He called the police', 'He took the coins', 'He closed the restaurant'], answer: 0 }
    ] },
  { id: 'C7', lesson: 3, concept: 'The lesson: sharing',
    explain: 'The owner said, “Good food tastes better when shared with others!” This is the lesson of the story.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What lesson do we learn from this story?', options: ['Good food tastes better when shared with others', 'Never walk through the market', 'Money is more important than food', 'Soup is better than all other food'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Good food tastes better when ___ with others.', options: ['shared', 'hidden', 'sold'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 12, level: 'easy', q: 'The owner believed that good food tastes better when shared with others.', answer: 0 },
      { type: 'build', style: 'sentence', mode: 'normal', level: 'hard', q: 'Put the cards in order.', parts: ['Good food tastes', 'better when shared', 'with others.'], extra: ['alone', 'sold'] }
    ] },
  { id: 'C8', lesson: 3, concept: 'Short and long vowel sounds',
    explain: 'Short vowel sounds are pronounced quickly and not as their letter name, like the “a” in “hat”. Long vowel sounds are pronounced the same way as their letter name, like the “a” in “plate”.',
    variants: [
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'Which vowel sound is pronounced quickly, not like its letter name?', options: ['A short vowel sound', 'A long vowel sound'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 12, level: 'easy', q: 'A long vowel sound is pronounced the same way as its letter name.', answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which word has a short vowel sound, like the “a” in “hat”?', options: ['pen', 'plate', 'home', 'feed'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which word has a long vowel sound, like the “a” in “plate”?', options: ['home', 'hat', 'pot', 'pen'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'The “a” in “plate” is a ___ vowel sound.', options: ['long', 'short'], answer: 0 }
    ] },
  { id: 'C9', lesson: 3, concept: 'Words with short and long vowels',
    explain: 'Short vowels: pot, hat, pen. Long vowels: plate, home, feed. Hany went home. The children feed their cat. I washed the plate after dinner.',
    variants: [
      { type: 'table', mode: 'normal', level: 'medium', q: 'Sort the words by their vowel sound.', poc: 'Vowel sound', cols: ['Short vowels', 'Long vowels'], items: ['pot', 'plate', 'home', 'hat', 'pen', 'feed'], answer: [0, 1, 1, 0, 0, 1] },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Hany went ___ and changed into his best clothes.', options: ['home', 'hot', 'hat'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'The children ___ their cat in the morning.', options: ['feed', 'rat', 'hat'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'hard', q: 'Choose the word with a long vowel sound: I washed the ___ after dinner.', options: ['plate', 'pot', 'pen'], answer: 0 },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'Which word has a short “o” sound, like “pot”?', options: ['hot', 'home', 'plate', 'feed'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which word has the long “ee” sound, like “feed”?', options: ['bean', 'pen', 'hat', 'pot'], answer: 0 }
    ] },
  { id: 'C10', lesson: 3, boss: true, concept: 'The story of Goha in order',
    explain: 'One day, Goha was hungry but didn’t have enough money to buy food. He smelled delicious soup from a restaurant. He sat outside, enjoying the smell of it. The owner asked Goha to pay for the smell. Goha cleverly offered to pay with the sound of his coins. The owner laughed and invited him in to share the soup.',
    variants: [
      { type: 'fill', mode: 'boss', level: 'medium', q: 'Goha smelled delicious soup from a ___.', options: ['restaurant', 'market', 'window'], answer: 0 },
      { type: 'fill', mode: 'boss', level: 'medium', q: 'He sat outside, enjoying the ___ of it.', options: ['smell', 'sound', 'taste'], answer: 0 },
      { type: 'fill', mode: 'boss', level: 'medium', q: 'Goha cleverly offered to pay with the sound of his ___.', options: ['coins', 'shoes', 'hands'], answer: 0 },
      { type: 'fill', mode: 'boss', level: 'medium', q: 'The owner laughed and invited him in to ___ the soup.', options: ['share', 'sell', 'smell'], answer: 0 },
      { type: 'order', mode: 'boss', level: 'hard', q: 'Put the story in order.', items: ['The owner asks Goha to pay for the smell', 'Goha smells soup and sits outside the restaurant', 'Goha shakes his coins', 'The owner invites Goha to share the soup'], answer: [1, 0, 2, 3] },
      { type: 'build', style: 'why', mode: 'boss', level: 'hard', q: 'Goha sat outside the restaurant.', parts: ['Because he was hungry', 'and smelled the soup'], extra: ['and was greedy', 'and heard coins'] }
    ] },

  /* ---------- Lesson 4 · Writing: Sequence Words ---------- */
  { id: 'D1', lesson: 4, concept: 'What sequence words do',
    explain: 'Sequence words help us show the order of actions or events. They tell us what happens at the beginning, in the middle, and at the end. They are: First, Next, Then, After that, Finally.',
    variants: [
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Sequence words help us show the ___ of actions or events.', options: ['order', 'color', 'size'], answer: 0 },
      { type: 'term', mode: 'normal', level: 'medium', q: 'Words that show the order of actions or events.', answer: 'Sequence words' },
      { type: 'multi', mode: 'normal', level: 'medium', q: 'Which of these are sequence words? Choose all the correct answers.', options: ['First', 'Then', 'Finally', 'Green'], answer: [0, 1, 2] },
      { type: 'tf', mode: 'timed', seconds: 12, level: 'easy', q: 'Sequence words tell us what happens at the beginning, in the middle, and at the end.', answer: 0 }
    ] },
  { id: 'D2', lesson: 4, concept: 'The order of the sequence words',
    explain: 'The sequence words go in this order: First, Next, Then, After that, Finally.',
    variants: [
      { type: 'order', mode: 'normal', level: 'medium', q: 'Put the sequence words in order.', items: ['Finally', 'Next', 'First', 'After that', 'Then'], answer: [2, 1, 4, 3, 0] },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'Which sequence word do we use to start?', options: ['First', 'Finally', 'Then', 'After that'], answer: 0 },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'Which sequence word do we use at the end?', options: ['Finally', 'First', 'Next', 'Then'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'First, Next, Then, After that, ___.', options: ['Finally', 'First', 'Next'], answer: 0 }
    ] },
  { id: 'D3', lesson: 4, concept: 'My Healthy Life: the daily routine',
    explain: 'I wake up early at 6:00 a.m. and brush my teeth. I wash my face and get dressed for school. I have a healthy breakfast, including milk and fruit. I go to school, where I study and play with my friends. During break time, I eat a healthy snack and drink water. After school, I have lunch with my family. After that, I do my homework and then play sports for one hour. In the evening, I take a shower and have dinner. Finally, I go to bed at 9:00 p.m. because sleeping early keeps me healthy.',
    variants: [
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'What time does the writer wake up?', options: ['6:00 a.m.', '8:30 a.m.', '9:00 p.m.', '7:00 a.m.'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What does the writer have for breakfast?', options: ['Milk and fruit', 'Eggs and orange juice', 'Bread and tea', 'Soup'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What does the writer eat and drink at break time?', options: ['A healthy snack and water', 'Sweets and juice', 'Lunch and milk', 'Fruit and tea'], answer: 0 },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'When does the writer go to bed?', options: ['9:00 p.m.', '8:30 p.m.', '10:00 p.m.', '6:00 a.m.'], answer: 0 },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'The writer has lunch with the family after school.', answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'I go to bed at 9:00 p.m. because sleeping early keeps me ___.', options: ['healthy', 'tired', 'busy'], answer: 0 }
    ] },
  { id: 'D4', lesson: 4, concept: 'Choosing the right sequence word',
    explain: 'In My Healthy Life: First, I wake up early at 6:00 a.m. and brush my teeth. Next, I have a healthy breakfast. Then, I go to school. After school, I have lunch with my family. After that, I do my homework and then play sports for one hour. Finally, I go to bed at 9:00 p.m.',
    variants: [
      { type: 'fill', mode: 'normal', level: 'easy', q: '___, I wake up early at 6:00 a.m. and brush my teeth.', options: ['First', 'Finally', 'After school'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: '___, I have a healthy breakfast, including milk and fruit.', options: ['Next', 'Finally', 'After school'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: '___, I go to school, where I study and play with my friends.', options: ['Then', 'First', 'Finally'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: '___, I have lunch with my family.', options: ['After school', 'First', 'Finally'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: '___, I do my homework and then play sports for one hour.', options: ['After that', 'First', 'Finally'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: '___, I go to bed at 9:00 p.m.', options: ['Finally', 'First', 'Next'], answer: 0 }
    ] },
  { id: 'D5', lesson: 4, boss: true, concept: 'Put a day in order',
    explain: 'The order of My Healthy Life: wake up and brush teeth, breakfast, go to school, lunch after school, homework and sports, go to bed.',
    variants: [
      { type: 'order', mode: 'boss', level: 'hard', q: 'Put the writer’s day in order.', items: ['I go to bed at 9:00 p.m.', 'I wake up early and brush my teeth', 'I have lunch with my family', 'I have a healthy breakfast', 'I go to school', 'I do my homework and play sports'], answer: [1, 3, 4, 2, 5, 0] },
      { type: 'build', style: 'sentence', mode: 'boss', level: 'hard', q: 'Put the cards in order.', parts: ['After school,', 'I have lunch', 'with my family.'], extra: ['yesterday', 'sleeps'] },
      { type: 'build', style: 'sentence', mode: 'boss', level: 'hard', q: 'Put the cards in order.', parts: ['Finally,', 'I go to bed', 'at 9:00 p.m.'], extra: ['goes', 'at school'] },
      { type: 'fill', mode: 'boss', level: 'medium', q: '___, I wake up early. Next, I have breakfast. Finally, I go to bed.', options: ['First', 'Then', 'After that'], answer: 0 },
      { type: 'mc', mode: 'boss', level: 'hard', q: 'Which sentence uses a sequence word correctly?', options: ['Finally, I go to bed at 9:00 p.m.', 'Finally, I wake up early at 6:00 a.m. and the day begins.', 'First, I go to bed at night after school.'], answer: 0 }
    ] },

  /* ---------- Lesson 5 · Think and Create: A Presentation ---------- */
  { id: 'E1', lesson: 5, concept: 'Preparing a presentation',
    explain: 'Prepare a presentation about healthy eating habits. Speak clearly and slowly so your friends can understand you. Make sure to use clear headings, add pictures, keep the text simple, and speak for 3-5 minutes.',
    variants: [
      { type: 'multi', mode: 'normal', level: 'medium', q: 'What should you do in your presentation? Choose all the correct answers.', options: ['Use clear headings', 'Add pictures', 'Keep the text simple', 'Write very long sentences'], answer: [0, 1, 2] },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'How long should you speak?', options: ['3-5 minutes', '30 seconds', '1 hour', '15 minutes'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 12, level: 'easy', q: 'In a presentation, you should speak clearly and slowly.', answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Keep the text ___.', options: ['simple', 'very long', 'hidden'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What is the presentation in Lesson 5 about?', options: ['Healthy eating habits', 'The five senses', 'Goha’s soup', 'Daily routines at school'], answer: 0 }
    ] },
  { id: 'E2', lesson: 5, concept: 'Giving feedback with stars',
    explain: '1 star = poor, 2 stars = fair, 3 stars = good, 4 stars = very good, 5 stars = excellent. You can add a comment such as “Good job”, “Excellent”, “Well done”, “Please speak louder” or “Work a little harder”.',
    variants: [
      { type: 'match', mode: 'normal', level: 'medium', q: 'Match the stars to their meaning.', left: ['1 star', '2 stars', '3 stars', '4 stars', '5 stars'], right: ['poor', 'fair', 'good', 'very good', 'excellent'], answer: [0, 1, 2, 3, 4] },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'What do 5 stars mean?', options: ['Excellent', 'Poor', 'Fair', 'Good'], answer: 0 },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'What do 3 stars mean?', options: ['Good', 'Poor', 'Excellent', 'Very good'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'A friend speaks very quietly. Which comment helps?', options: ['Please speak louder', 'Well done', 'Excellent', 'Good job'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: '4 stars = ___', options: ['very good', 'poor', 'fair'], answer: 0 }
    ] },
  { id: 'E3', lesson: 5, boss: true, concept: 'Praise and advice',
    explain: 'Comments for a presentation: “Good job”, “Excellent” and “Well done” say the group did well. “Please speak louder” and “Work a little harder” tell the group what to do better.',
    variants: [
      { type: 'table', mode: 'boss', level: 'hard', q: 'Sort the comments.', poc: 'Comment', cols: ['Praise', 'Advice'], items: ['Good job', 'Excellent', 'Well done', 'Please speak louder', 'Work a little harder'], answer: [0, 0, 0, 1, 1] },
      { type: 'match', mode: 'boss', level: 'hard', q: 'Match the stars to their meaning.', left: ['2 stars', '4 stars', '1 star', '5 stars'], right: ['fair', 'very good', 'poor', 'excellent'], answer: [0, 1, 2, 3] },
      { type: 'mc', style: 'story', mode: 'boss', level: 'medium', q: 'Mona’s group speaks clearly, uses pictures and keeps the text simple. Which comment fits?', options: ['Excellent', 'Work a little harder', 'Please speak louder', 'Poor'], answer: 0 },
      { type: 'build', style: 'sentence', mode: 'boss', level: 'hard', q: 'Put the cards in order.', parts: ['Please speak', 'louder.'], extra: ['blue', 'tomorrow'] }
    ] }
];
})();
