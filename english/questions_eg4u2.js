/* English · Grade 4 · Term 1 · Unit 2 "My Community" · ministry book "English Primary 4", first term 2026/2027 (book pages 23-38)
   One English book for both tracks (subject lang { lang: 'en', ar: 'en' }), so there is no _ar file.
   Lessons: 1 Helping Our Community (pp 23-26; the site has pages 26 only, see below) · 2 Community Problems and Solutions (pp 27-29)
            3 Egypt: My Culture + Pronunciation /f/ /v/ + prefixes (pp 30-33) · 4 Writing: A Diary Entry (pp 34-35) · 5 Think and Create: A Poster (p 36)
            Quick Review and Self-Assessment (pp 37-38) are spread over the lessons.
   Idea letters (one per lesson): F, G, H, I, J.  Boss ideas: F4, G7, H9, I4, J3.
   Every phrasing has a hint (owner rule, 6 Nov 2026) that names the place in the text or the rule, never the answer.
   Rules: answers of mc/fill at index 0 (the page shuffles) · one Boss idea per lesson (every variant mode:'boss') · about a third timed (10-20 s, easy recall)
          distractors = real misconceptions · term/fix answers ≤ 18 letters · core and Boss only from the school book.
   Tap pictures (english/g4_art.js, drawn in code; the owner gave no pictures for this unit):
     helping6 -> plant | help | collect | clean | volunteer | feed      fvWords -> wVan | wFactory | wVest | wForest | wFrog | wFlag | wViolin | wView
   Review notes:
   - The book's pages 23-25 (unit cover and lesson 1, activities 1-5) were not sent yet. Lesson 1 uses page 26 and the Quick Review p 37 only;
     the title "Helping Our Community" is ours until page 23 is read. The unit stays ready: false until those pages are in.
   - p 26 "Read and complete" prints no word box on page 26 (it is probably on page 25): the verbs are taken from the unit vocabulary (collect, volunteer, feed)
     and the six pictures; review when page 25 arrives.
   - Listening tasks (p 26 "Listen and number", p 32 "Listen, say, and write") are asked as reading or picture questions (no audio here).
   - Open tasks are not asked: "Read and think" and "Think" p 26, "Think and discuss" p 28, the group discussion p 31, writing the diary p 35, making the poster p 36,
     "Write three…" type tasks.
   - p 37 "I ___ go to school by car": the book expects don't (no other choice in the list fits); "He ___ throw trash in the bin" is not asked (both does and doesn't fit).
   - p 31 "People grow sugar cane in the Delta" is false: the text links sugar cane only to Upper Egypt (its harvest festival). */
(function () {
window.CHAPTER = { id: 'eg4u2', title: 'My Community' };

window.IDEAS = [
  /* ---------- Lesson 1 · Helping Our Community (page 26, Quick Review p 37) ---------- */
  { id: 'F1', lesson: 1, concept: 'Ways to help our community',
    explain: 'We can help our community: we plant flowers and trees, help old people, collect trash, clean the street, volunteer and feed the dogs in our street.',
    variants: [
      { type: 'tap', diagram: 'helping6', mode: 'normal', level: 'easy', q: 'He feeds the dogs in his street. Tap the picture.', answer: 'feed', hint: 'Look for an animal and its food.' },
      { type: 'tap', diagram: 'helping6', mode: 'timed', seconds: 15, level: 'easy', q: 'They plant flowers and trees in the park. Tap the picture.', answer: 'plant', hint: 'Look for something green growing in the soil.' },
      { type: 'tap', diagram: 'helping6', mode: 'normal', level: 'easy', q: 'They collect trash. Tap the picture.', answer: 'collect', hint: 'Trash goes into a big bag.' },
      { type: 'tap', diagram: 'helping6', mode: 'timed', seconds: 15, level: 'easy', q: 'He cleans the street. Tap the picture.', answer: 'clean', hint: 'Which tool do we use to clean the ground?' },
      { type: 'tap', diagram: 'helping6', mode: 'normal', level: 'medium', q: 'We help our neighbors. Tap the picture of a young man helping an old man.', answer: 'help', hint: 'Look for two people: one is old.' },
      { type: 'tap', diagram: 'helping6', mode: 'normal', level: 'medium', q: 'She volunteers and gives food to people. Tap the picture.', answer: 'volunteer', hint: 'Look for a box full of food.' }
    ] },
  { id: 'F2', lesson: 1, concept: 'Verbs for helping: collect, volunteer, feed, plant, help, clean',
    explain: 'They clean the park on Fridays. She volunteers at the community garden. They plant flowers and trees in the park. We help our neighbors. He feeds the dogs in his street. Hana and Youssef collect clothes from people.',
    variants: [
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'They ___ flowers and trees in the park.', options: ['plant', 'feed', 'help'], answer: 0, hint: 'What do we do with trees in the soil?' },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'He ___ the dogs in his street.', options: ['feeds', 'plants', 'cleans'], answer: 0, hint: 'Dogs need food every day.' },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'They ___ the park on Fridays.', options: ['clean', 'feed', 'plant'], answer: 0, hint: 'The park has trash. What do they do?' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'We ___ our neighbors.', options: ['help', 'collect', 'plant'], answer: 0, hint: 'Our neighbors are people. What can we do for people?' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Hana and Youssef ___ clothes from people.', options: ['collect', 'feed', 'plant'], answer: 0, hint: 'They take many clothes and put them together.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'She ___ at the community garden.', options: ['volunteers', 'feeds', 'collects'], answer: 0, hint: 'She helps there and she does not take money for it.' }
    ] },
  { id: 'F3', lesson: 1, concept: 'Helping makes our community great',
    explain: 'When we all help, we make our community great.',
    variants: [
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'When we all help, we make our community great.', answer: 0, hint: 'Think: is helping good or bad for the community?' },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'When we all help, we make our community ___.', options: ['great', 'dirty', 'small'], answer: 0, hint: 'Helping makes things better.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which one helps the community?', options: ['Feeding the dogs in the street', 'Throwing trash on the ground', 'Leaving the park dirty', 'Breaking the trees'], answer: 0, hint: 'Choose the kind thing to do.' },
      { type: 'multi', mode: 'normal', level: 'medium', q: 'How can we help our community? Choose all the correct answers.', options: ['Plant trees in the park', 'Collect trash', 'Help our neighbors', 'Throw trash on the ground'], answer: [0, 1, 2], hint: 'Three of them are kind. One makes the street dirty.' }
    ] },
  { id: 'F4', lesson: 1, boss: true, concept: 'Sentences about helping (he/she + s)',
    explain: 'With he or she, the verb takes -s: He feeds the dogs. She volunteers. With they, we and I, it does not: They plant trees. We help our neighbors.',
    variants: [
      { type: 'build', style: 'sentence', mode: 'boss', level: 'hard', q: 'Put the cards in order.', parts: ['He feeds', 'the dogs', 'in his street.'], extra: ['He feed', 'the trees'], hint: 'Start with He. With he, the verb ends with -s.' },
      { type: 'build', style: 'sentence', mode: 'boss', level: 'hard', q: 'Put the cards in order.', parts: ['They clean', 'the park', 'on Fridays.'], extra: ['They cleans', 'the dogs'], hint: 'With they, the verb has no -s.' },
      { type: 'fix', mode: 'boss', level: 'medium', q: 'She volunteer at the community garden.', wrong: 'volunteer', answer: 'volunteers', hint: 'With she, add -s to the verb.' },
      { type: 'match', mode: 'boss', level: 'hard', q: 'Match the two halves of each sentence.', left: ['They plant', 'He feeds', 'We help', 'Hana and Youssef collect'], right: ['flowers and trees in the park.', 'the dogs in his street.', 'our neighbors.', 'clothes from people.'], answer: [0, 1, 2, 3], hint: 'Dogs eat food. Trees go in the park.' }
    ] },

  /* ---------- Lesson 2 · Community Problems and Solutions (pages 27-29) ---------- */
  { id: 'G1', lesson: 2, concept: 'The best way to reduce traffic',
    explain: 'The best way to reduce traffic is to walk or cycle for short distances. Leaving car engines running or buying a car for each person makes traffic worse.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What is the best way to reduce traffic?', options: ['Walk or cycle for short distances.', 'Leave the car engines running.', 'Buy a car for each member of the family.'], answer: 0, hint: 'Traffic means too many cars. Which choice means fewer cars?' },
      { type: 'tf', mode: 'timed', seconds: 12, level: 'easy', q: 'Buying a car for each member of the family reduces traffic.', answer: 1, hint: 'More cars on the road means more traffic.' },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Walk or ___ for short distances.', options: ['cycle', 'drive', 'run the engine'], answer: 0, hint: 'You do it on a bike.' },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'Leaving the car engines running is a good way to reduce traffic.', answer: 1, hint: 'Does the engine running take a car off the road?' }
    ] },
  { id: 'G2', lesson: 2, concept: 'Problem 1: traffic, and its solution',
    explain: 'Ali says the first problem is traffic. Cars don’t move quickly in the morning, especially near schools. The solution: we don’t need to use cars every day. We can take the school bus instead. There will be fewer cars on the road.',
    variants: [
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'What is the first problem Ali talks about?', options: ['Traffic', 'Trash', 'Noise', 'Water'], answer: 0, hint: 'Cars don’t move quickly.' },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'Cars don’t move quickly near ___.', options: ['schools', 'parks', 'bins'], answer: 0, hint: 'Children go there in the morning.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What is Ali’s solution to traffic?', options: ['We can take the school bus instead.', 'We can put new bins everywhere.', 'We can use cars every day.', 'We can go to school later.'], answer: 0, hint: 'One big bus carries many children.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'If we take the school bus, there will be ___ cars on the road.', options: ['fewer', 'more', 'faster'], answer: 0, hint: 'Many children in one bus, not in many cars.' },
      { type: 'tf', mode: 'timed', seconds: 12, level: 'easy', q: 'Traffic happens because there are many cars on the road.', answer: 0, hint: 'What fills the road?' },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'Traffic is not a problem near schools in the morning.', answer: 1, hint: 'Ali says cars are slow in the morning, especially near schools.' }
    ] },
  { id: 'G3', lesson: 2, concept: 'Problem 2: trash, and its solution',
    explain: 'Mona says the second problem is trash. Some people don’t put trash in bins, so the streets look dirty. In Ali’s street, the neighbors don’t throw trash on the ground. They put new bins everywhere. Everyone uses them, and now the street is very clean.',
    variants: [
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'What is the second problem?', options: ['Trash', 'Traffic', 'Pollution', 'Noise'], answer: 0, hint: 'Mona talks about dirty streets.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Why do the streets look dirty?', options: ['Some people don’t put trash in bins.', 'There are many cars.', 'There are many trees.', 'People take the school bus.'], answer: 0, hint: 'Where should trash go?' },
      { type: 'tf', mode: 'timed', seconds: 12, level: 'easy', q: 'Throwing trash on the ground makes the streets clean.', answer: 1, hint: 'Trash on the ground makes the street look…?' },
      { type: 'tf', mode: 'normal', level: 'easy', q: 'Ali’s street has new bins. Everyone uses them now.', answer: 0, hint: 'Read Ali’s last answer.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Our neighbors don’t throw trash on the ___.', options: ['ground', 'bins', 'schools'], answer: 0, hint: 'It is under our feet.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Everyone uses trash ___ in my community.', options: ['bins', 'ground', 'traffic'], answer: 0, hint: 'We put trash inside them.' }
    ] },
  { id: 'G4', lesson: 2, concept: 'Matching problems and solutions',
    explain: 'Traffic is bad near schools → use the school bus instead of cars. Trash is thrown on the ground → put bins everywhere.',
    variants: [
      { type: 'match', mode: 'normal', level: 'medium', q: 'Match each problem to its solution.', left: ['Traffic is bad near schools.', 'Trash is thrown on the ground.'], right: ['Use the school bus instead of cars.', 'Put bins everywhere.'], answer: [0, 1], hint: 'A bus means fewer cars. Bins are for trash.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Problem: trash is thrown on the ground. What is the solution?', options: ['Put bins everywhere.', 'Use the school bus.', 'Use cars every day.', 'Walk near schools.'], answer: 0, hint: 'Where do we put trash?' },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'The bus helps reduce ___.', options: ['traffic', 'bins', 'trash'], answer: 0, hint: 'Fewer cars on the road.' },
      { type: 'table', mode: 'normal', level: 'medium', q: 'Sort the sentences.', poc: 'Sentence', cols: ['Problem', 'Solution'], items: ['Cars don’t move quickly.', 'The streets look dirty.', 'Take the school bus.', 'Put new bins everywhere.'], answer: [0, 0, 1, 1], hint: 'A problem is something wrong. A solution fixes it.' }
    ] },
  { id: 'G5', lesson: 2, concept: 'Present simple negative: don’t / doesn’t',
    explain: 'We use don’t (do not) with I, you, we, they or a plural noun, then the verb: Cars don’t move quickly in the morning. We use doesn’t (does not) with he, she, it or a singular noun, then the verb: She doesn’t need to use cars every day.',
    variants: [
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Cars ___ move quickly in the morning.', options: ['don’t', 'doesn’t', 'isn’t'], answer: 0, hint: 'Cars is a plural noun.' },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'She ___ need to use cars every day.', options: ['doesn’t', 'don’t', 'aren’t'], answer: 0, hint: 'She takes does or doesn’t.' },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'I ___ go to school by car.', options: ['don’t', 'doesn’t', 'isn’t'], answer: 0, hint: 'I takes do or don’t.' },
      { type: 'fix', mode: 'normal', level: 'medium', q: 'She don’t like pollution.', wrong: 'don’t', answer: 'doesn’t', hint: 'She is like he and it.' },
      { type: 'fix', mode: 'normal', level: 'medium', q: 'They doesn’t use trash bins.', wrong: 'doesn’t', answer: 'don’t', hint: 'They is like we and you.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Make it negative: We need to use cars every day.', options: ['We don’t need to use cars every day.', 'We doesn’t need to use cars every day.', 'We don’t needs to use cars every day.', 'We not need to use cars every day.'], answer: 0, hint: 'We + don’t + the verb with no -s.' }
    ] },
  { id: 'G6', lesson: 2, concept: 'Present simple questions: Do / Does',
    explain: 'We use Do with I, you, we, they or a plural noun: Do you know how to solve this problem? We use Does with he, she, it or a singular noun: Does your street have this problem?',
    variants: [
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: '___ you volunteer?', options: ['Do', 'Does', 'Is'], answer: 0, hint: 'You takes Do.' },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: '___ she help her community?', options: ['Does', 'Do', 'Are'], answer: 0, hint: 'She takes Does.' },
      { type: 'fill', mode: 'normal', level: 'easy', q: '___ they collect plastic bottles from the street?', options: ['Do', 'Does', 'Is'], answer: 0, hint: 'They is a plural word.' },
      { type: 'fix', mode: 'normal', level: 'medium', q: 'Do he take the bus to school?', wrong: 'Do', answer: 'Does', hint: 'He takes Does, like she and it.' },
      { type: 'fix', mode: 'normal', level: 'medium', q: 'Does cars move quickly in the morning?', wrong: 'Does', answer: 'Do', hint: 'Cars is plural.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Yes, they take the bus to school. What is the question?', options: ['Do they take the bus to school?', 'Does they take the bus to school?', 'Do they takes the bus to school?', 'They take the bus to school?'], answer: 0, hint: 'Do + they + the verb with no -s.' }
    ] },
  { id: 'G7', lesson: 2, boss: true, concept: 'Don’t, doesn’t, do and does together',
    explain: 'Negative: don’t with I, you, we, they and plural nouns; doesn’t with he, she, it and singular nouns. Questions: Do … ? with I, you, we, they; Does … ? with he, she, it. After don’t, doesn’t, do and does, the verb has no -s: Does your street have this problem?',
    variants: [
      { type: 'build', style: 'sentence', mode: 'boss', level: 'hard', q: 'Put the cards in order to make a question.', parts: ['Does', 'your street', 'have this problem?'], extra: ['Do', 'has'], hint: 'Your street is singular. The verb after Does has no -s.' },
      { type: 'build', style: 'sentence', mode: 'boss', level: 'hard', q: 'Put the cards in order.', parts: ['Our neighbors', 'don’t throw', 'trash on the ground.'], extra: ['doesn’t throw', 'in bins'], hint: 'Our neighbors is plural.' },
      { type: 'fill', mode: 'boss', level: 'medium', q: 'Does your street ___ this problem?', options: ['have', 'has', 'having'], answer: 0, hint: 'After Does, use the verb with no -s.' },
      { type: 'multi', mode: 'boss', level: 'hard', q: 'Which sentences are correct? Choose all the correct answers.', options: ['He doesn’t throw trash on the ground.', 'Do you know how to solve this problem?', 'She don’t like pollution.', 'Does cars move quickly?'], answer: [0, 1], hint: 'Check the word before each verb: he/she → does; cars/you → do.' }
    ] },

  /* ---------- Lesson 3 · Egypt: My Culture (pages 30-33) ---------- */
  { id: 'H1', lesson: 3, concept: 'The two regions of Egypt',
    explain: 'Egypt has two special regions: the Delta in the north and Upper Egypt in the south. Each region has its traditions and culture.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'The two regions of Egypt are ___.', options: ['Upper Egypt and the Delta', 'Cairo and Alexandria', 'the desert and the Nile', 'the Red Sea and the Mediterranean Sea'], answer: 0, hint: 'Read the first sentence of the text.' },
      { type: 'tf', mode: 'timed', seconds: 12, level: 'easy', q: 'Upper Egypt is in the south.', answer: 0, hint: 'The Delta is in the north.' },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'The Delta is in the ___ of Egypt.', options: ['north', 'south', 'west'], answer: 0, hint: 'It is the opposite of Upper Egypt.' },
      { type: 'match', mode: 'normal', level: 'medium', q: 'Match each region to its place.', left: ['The Delta', 'Upper Egypt'], right: ['in the north', 'in the south'], answer: [0, 1], hint: 'Upper Egypt is not in the north.' }
    ] },
  { id: 'H2', lesson: 3, concept: 'Life in the Delta',
    explain: 'In the Delta region, they celebrate the Spring Festival with colorful decorations and special foods. Farmers grow rice and cotton. Many people work in factories and make beautiful crafts. Women are known for making clothes.',
    variants: [
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'Which festival do people celebrate in the Delta?', options: ['The Spring Festival', 'The sugar cane harvest', 'The cotton harvest', 'The rice festival'], answer: 0, hint: 'It comes with colorful decorations and special foods.' },
      { type: 'multi', mode: 'normal', level: 'medium', q: 'What do farmers grow in the Delta? Choose all the correct answers.', options: ['Rice', 'Cotton', 'Sugar cane'], answer: [0, 1], hint: 'Sugar cane is from the other region.' },
      { type: 'tf', mode: 'normal', level: 'easy', q: 'Nobody makes crafts in the Delta region.', answer: 1, hint: 'Many people work in factories and make…?' },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'People grow sugar cane in the Delta.', answer: 1, hint: 'In the text, sugar cane goes with Upper Egypt.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'In the Delta, women are known for making ___.', options: ['clothes', 'pottery', 'carpets'], answer: 0, hint: 'Something we wear.' }
    ] },
  { id: 'H3', lesson: 3, concept: 'Life in Upper Egypt and Nubia',
    explain: 'In Upper Egypt, people celebrate the sugar cane harvest with big festivals. They make pottery and weave colorful carpets by hand. Families sing traditional songs and tell old stories. In places like Nubia, houses are painted in bright colors and have special designs.',
    variants: [
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'People in Upper Egypt celebrate ___.', options: ['the sugar cane harvest', 'the Spring Festival', 'the cotton harvest', 'the rice festival'], answer: 0, hint: 'It is a sweet plant.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'The houses in Nubia ___.', options: ['have special designs', 'are made of glass', 'are very tall', 'are built underwater'], answer: 0, hint: 'They are painted in bright colors.' },
      { type: 'tf', mode: 'timed', seconds: 12, level: 'easy', q: 'Houses are painted in bright colors in Nubia.', answer: 0, hint: 'Read the sentence about Nubia.' },
      { type: 'multi', mode: 'normal', level: 'medium', q: 'What do people do in Upper Egypt? Choose all the correct answers.', options: ['Make pottery', 'Weave colorful carpets by hand', 'Sing traditional songs', 'Grow rice and cotton'], answer: [0, 1, 2], hint: 'Rice and cotton are from the Delta.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Families sing traditional songs and tell old ___.', options: ['stories', 'carpets', 'houses'], answer: 0, hint: 'Grandpa can tell you one.' }
    ] },
  { id: 'H4', lesson: 3, concept: 'Clothes in the Delta and Upper Egypt',
    explain: 'In the Delta, men wear galabeyas or modern clothes like pants and shirts; women wear stylish dresses or traditional outfits for special events. In Upper Egypt, men also wear galabeyas and sometimes turbans; women wear colorful dresses.',
    variants: [
      { type: 'tf', mode: 'timed', seconds: 12, level: 'easy', q: 'In Upper Egypt, men wear galabeyas.', answer: 0, hint: 'Read the part about clothes in Upper Egypt.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What do men in Upper Egypt sometimes wear on their heads?', options: ['Turbans', 'Pants', 'Dresses', 'Shirts'], answer: 0, hint: 'It is wrapped around the head.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which are modern clothes for men in the Delta?', options: ['Pants and shirts', 'Turbans', 'Colorful carpets', 'Galabeyas'], answer: 0, hint: 'Modern means new style, not traditional.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'In Upper Egypt, women wear ___ dresses.', options: ['colorful', 'glass', 'modern'], answer: 0, hint: 'Full of colors.' }
    ] },
  { id: 'H5', lesson: 3, concept: 'Egyptians are proud of their culture',
    explain: 'Even though the two places have some differences, they share many of the same traditions. Egyptians are proud of their culture and love to celebrate it together!',
    variants: [
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Egyptians are proud of their ___, and they love to celebrate together.', options: ['culture', 'factories', 'carpets'], answer: 0, hint: 'Read the last sentence of the text.' },
      { type: 'tf', mode: 'normal', level: 'easy', q: 'The Delta and Upper Egypt share many of the same traditions.', answer: 0, hint: 'They have some differences, but…' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What do Egyptians love to do with their culture?', options: ['Celebrate it together', 'Forget it', 'Hide it', 'Sell it'], answer: 0, hint: 'They are proud of it.' }
    ] },
  { id: 'H6', lesson: 3, concept: 'The /f/ and /v/ sounds',
    explain: 'The /f/ sound is voiceless: your throat doesn’t vibrate, like in “fish”: frog, forest, factory, flag. The /v/ sound is voiced: your throat vibrates, like in “van”: van, violin, view, vest.',
    variants: [
      { type: 'tap', diagram: 'fvWords', mode: 'normal', level: 'easy', q: 'Tap the violin.', answer: 'wViolin', hint: 'It is a musical instrument with strings.' },
      { type: 'tap', diagram: 'fvWords', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap the frog.', answer: 'wFrog', hint: 'It is a green animal that jumps.' },
      { type: 'tap', diagram: 'fvWords', mode: 'normal', level: 'easy', q: 'Tap the factory.', answer: 'wFactory', hint: 'A big building where people make things.' },
      { type: 'tap', diagram: 'fvWords', mode: 'normal', level: 'medium', q: 'Tap the view.', answer: 'wView', hint: 'What you see from far away: hills and sky.' },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: '___an (a car that carries things)', options: ['v', 'f', 'b'], answer: 0, hint: 'Your throat vibrates.' },
      { type: 'fill', mode: 'normal', level: 'easy', q: '___lag', options: ['f', 'v', 'b'], answer: 0, hint: 'Egypt has a red, white and black one.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which word has the /v/ sound?', options: ['vest', 'forest', 'flag', 'frog'], answer: 0, hint: 'Your throat vibrates when you say it.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'For which sound does your throat vibrate?', options: ['/v/ as in van', '/f/ as in fish'], answer: 0, hint: 'Put your hand on your throat and say both.' }
    ] },
  { id: 'H7', lesson: 3, concept: 'Prefixes: dis-, il-, ir-',
    explain: 'A prefix is a small group of letters added to the beginning of a word to change its meaning. dis = not or opposite (like → dislike). il = not (legal → illegal). ir = not (regular → irregular).',
    variants: [
      { type: 'term', mode: 'normal', level: 'medium', q: 'A small group of letters added to the beginning of a word to change its meaning.', answer: 'Prefix', choices: ['Sentence', 'Sound', 'Vowel'], hint: 'dis, il and ir are examples.' },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'What does the prefix “dis” mean?', options: ['not or opposite', 'again', 'very', 'before'], answer: 0, hint: 'like → dislike' },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'legal → ___legal', options: ['il', 'ir', 'dis'], answer: 0, hint: 'The word starts with l.' },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'regular → ___regular', options: ['ir', 'il', 'dis'], answer: 0, hint: 'The word starts with r.' },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'like → ___like', options: ['dis', 'il', 'ir'], answer: 0, hint: 'The book’s example for dis.' }
    ] },
  { id: 'H8', lesson: 3, concept: 'Words and their opposites with a prefix',
    explain: 'appear → disappear, logical → illogical, responsible → irresponsible, honest → dishonest, legal → illegal, relevant → irrelevant.',
    variants: [
      { type: 'match', mode: 'normal', level: 'medium', q: 'Match the words with their opposites.', left: ['appear', 'logical', 'responsible', 'honest', 'legal', 'relevant'], right: ['disappear', 'illogical', 'irresponsible', 'dishonest', 'illegal', 'irrelevant'], answer: [0, 1, 2, 3, 4, 5], hint: 'Look at the end of each opposite: it is the same word.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What is the opposite of “honest”?', options: ['dishonest', 'ilhonest', 'irhonest', 'unhonest'], answer: 0, hint: 'h is not l or r, so use the other prefix.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What is the opposite of “responsible”?', options: ['irresponsible', 'disresponsible', 'ilresponsible', 'unresponsible'], answer: 0, hint: 'The word starts with r.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What is the opposite of “logical”?', options: ['illogical', 'irlogical', 'dislogical', 'unlogical'], answer: 0, hint: 'The word starts with l.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What is the opposite of “relevant”?', options: ['irrelevant', 'illrelevant', 'disrelevant', 'unrelevant'], answer: 0, hint: 'The word starts with r.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What is the opposite of “appear”?', options: ['disappear', 'irappear', 'ilappear', 'unappear'], answer: 0, hint: 'The word starts with a.' }
    ] },
  { id: 'H9', lesson: 3, boss: true, concept: 'Prefix words in sentences',
    explain: 'What Omar says is illogical. It doesn’t make sense. The teacher says my question is irrelevant to the lesson. The cat always disappears after eating all the food. It is illegal to drive here. He dislikes loud noise. The verb “see” has an irregular past form. The students are irresponsible. Their classroom is very dirty.',
    variants: [
      { type: 'fill', mode: 'boss', level: 'hard', q: 'What Omar says is ___. It doesn’t make sense.', options: ['illogical', 'dishonest', 'irregular', 'disappear'], answer: 0, hint: 'Not logical.' },
      { type: 'fill', mode: 'boss', level: 'hard', q: 'The teacher says my question is ___ to the lesson.', options: ['irrelevant', 'illegal', 'irresponsible', 'dishonest'], answer: 0, hint: 'It is not about the lesson.' },
      { type: 'fill', mode: 'boss', level: 'hard', q: 'The cat always ___ after eating all the food.', options: ['disappears', 'dislikes', 'illegal', 'irregular'], answer: 0, hint: 'You can’t see the cat any more.' },
      { type: 'fill', mode: 'boss', level: 'medium', q: 'It is ___ to drive here. (legal)', options: ['illegal', 'irlegal', 'dislegal'], answer: 0, hint: 'legal starts with l.' },
      { type: 'fill', mode: 'boss', level: 'medium', q: 'He ___ loud noise. (like)', options: ['dislikes', 'illikes', 'irlikes'], answer: 0, hint: 'He takes -s, and like takes dis.' },
      { type: 'fill', mode: 'boss', level: 'hard', q: 'The students are ___. Their classroom is very dirty. (responsible)', options: ['irresponsible', 'dishonest', 'illegal'], answer: 0, hint: 'Not responsible: responsible starts with r.' },
      { type: 'fill', mode: 'boss', level: 'hard', q: 'The verb “see” has an ___ past form. (regular)', options: ['irregular', 'ilregular', 'disregular'], answer: 0, hint: 'regular starts with r.' }
    ] },

  /* ---------- Lesson 4 · Writing: A Diary Entry (pages 34-35) ---------- */
  { id: 'I1', lesson: 4, concept: 'Hana’s diary: the neighborhood fifty years ago',
    explain: 'Hana writes that Grandpa told her stories about the community’s history. Fifty years ago, the neighborhood was very different: there was an old market with wooden stalls where the big supermarket stands now; the tall buildings weren’t there; there were small houses with beautiful gardens; and there was a small train station where the park is now.',
    variants: [
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'Who told Hana stories about the community’s history?', options: ['Grandpa', 'Her teacher', 'Ali', 'Her mother'], answer: 0, hint: 'Read the first line of the diary.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What did the neighborhood look like 50 years ago?', options: ['Small houses with beautiful gardens.', 'Tall buildings and busy streets.', 'Big shopping malls and lots of cars.', 'Quiet farms and lots of animals.'], answer: 0, hint: 'The tall buildings weren’t there then.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Where the big supermarket stands now, there was a beautiful old ___.', options: ['market', 'train station', 'school'], answer: 0, hint: 'It had wooden stalls with fruits and vegetables.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'There was a small train station where our ___ is now.', options: ['park', 'supermarket', 'school'], answer: 0, hint: 'Today children play there.' },
      { type: 'tf', mode: 'timed', seconds: 12, level: 'easy', q: 'Fifty years ago, the neighborhood was different.', answer: 0, hint: 'Hana says it was very…?' }
    ] },
  { id: 'I2', lesson: 4, concept: 'The old school and a rich history',
    explain: 'Grandpa showed Hana old photos. She saw the old school that still stands today. People helped to build it together many years ago. Hana is proud that the community has such a rich history.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What did the community do together many years ago?', options: ['They built the school.', 'They built the supermarket.', 'They built the park.', 'They built the library.'], answer: 0, hint: 'It still stands today.' },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'What did Grandpa show Hana?', options: ['Old photos', 'A new car', 'A train ticket', 'A map'], answer: 0, hint: 'Pictures from long ago.' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'It makes me ___ to know our community has such a rich history.', options: ['proud', 'sad', 'hungry'], answer: 0, hint: 'A happy feeling about your people.' },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'The old school is not there any more.', answer: 1, hint: 'Hana says it still stands today.' }
    ] },
  { id: 'I3', lesson: 4, concept: 'How to write a diary entry',
    explain: '1 Start with the date at the top of the page. 2 Write a greeting: “Dear diary,” or “Hello diary,”. 3 Add details: who you talked to, what you heard and how you felt. 4 End with a closing: “Yours truly,” and your name.',
    variants: [
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'What do we write at the top of a diary entry?', options: ['The date', 'The closing', 'Our name', 'A title'], answer: 0, hint: 'Hana’s diary starts with March 15, 2025.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Which is a greeting for a diary?', options: ['Dear diary,', 'Yours truly,', 'March 15, 2025', 'The end'], answer: 0, hint: 'It says hello to the diary.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'How do we end a diary entry?', options: ['Yours truly, and your name', 'Dear diary,', 'With the date', 'With a question'], answer: 0, hint: 'Hana ends with these words and her name.' },
      { type: 'multi', mode: 'normal', level: 'medium', q: 'What details do we add to a diary entry? Choose all the correct answers.', options: ['Who you talked to', 'What you heard', 'How you felt', 'The weather tomorrow'], answer: [0, 1, 2], hint: 'The details are about today, not tomorrow.' },
      { type: 'match', mode: 'normal', level: 'medium', q: 'Match the part of the diary to an example.', left: ['the date', 'the greeting', 'the closing'], right: ['March 15, 2025', 'Hello diary,', 'Yours truly, Hana'], answer: [0, 1, 2], hint: 'The greeting says hello; the closing says goodbye.' }
    ] },
  { id: 'I4', lesson: 4, boss: true, concept: 'The order of a diary entry',
    explain: 'A diary entry goes in this order: the date, the greeting, the details, the closing.',
    variants: [
      { type: 'order', mode: 'boss', level: 'hard', q: 'Put the parts of a diary entry in order.', items: ['The closing', 'The greeting', 'The details', 'The date'], answer: [3, 1, 2, 0], hint: 'What is at the very top of the page?' },
      { type: 'order', mode: 'boss', level: 'hard', q: 'Put Hana’s diary in order.', items: ['Yours truly, Hana', 'Today, Grandpa told me amazing stories.', 'March 15, 2025', 'Dear diary,'], answer: [2, 3, 1, 0], hint: 'Date, greeting, details, closing.' },
      { type: 'mc', style: 'story', mode: 'boss', level: 'hard', q: 'Ali wrote: “Dear diary, today I visited the old market. Yours truly, Ali.” What is missing?', options: ['The date', 'The greeting', 'The closing', 'The details'], answer: 0, hint: 'What goes at the very top?' }
    ] },

  /* ---------- Lesson 5 · Think and Create: A Poster (page 36) ---------- */
  { id: 'J1', lesson: 5, concept: 'Solutions to stop air pollution',
    explain: 'The poster “Let’s Stop Air Pollution” gives four solutions: walk or cycle to school, use less plastic, plant trees in your community, and keep your community clean.',
    variants: [
      { type: 'tf', mode: 'timed', seconds: 12, level: 'easy', q: 'You should walk or cycle to school to stop air pollution.', answer: 0, hint: 'Cars make the air dirty.' },
      { type: 'multi', mode: 'normal', level: 'medium', q: 'Which are solutions on the poster? Choose all the correct answers.', options: ['Walk or cycle to school.', 'Use less plastic.', 'Plant trees in your community.', 'Use the car every day.'], answer: [0, 1, 2], hint: 'One choice makes more pollution.' },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Use ___ plastic.', options: ['less', 'more', 'new'], answer: 0, hint: 'We want a cleaner world.' },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'Plant ___ in your community.', options: ['trees', 'cars', 'plastic'], answer: 0, hint: 'They are green and clean the air.' },
      { type: 'fill', mode: 'normal', level: 'easy', q: 'Keep your community ___.', options: ['clean', 'dirty', 'busy'], answer: 0, hint: 'No trash on the ground.' }
    ] },
  { id: 'J2', lesson: 5, concept: 'Making a poster',
    explain: 'To make a poster about a community problem: 1 choose a problem in your community, 2 find information for your poster, 3 design your poster. It should include a clear title, pictures or drawings, and 2-3 solutions.',
    variants: [
      { type: 'multi', mode: 'normal', level: 'medium', q: 'What should your poster include? Choose all the correct answers.', options: ['A clear title', 'Pictures or drawings', '2-3 solutions', 'A long story'], answer: [0, 1, 2], hint: 'A poster is short and easy to see.' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What is the first step to make the poster?', options: ['Choose a problem in your community.', 'Design your poster.', 'Find information.', 'Show it to the class.'], answer: 0, hint: 'You need a topic first.' },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'How many solutions should the poster have?', options: ['2-3', '10', '1', 'none'], answer: 0, hint: 'A few, not many.' },
      { type: 'order', mode: 'normal', level: 'medium', q: 'Put the steps in order.', items: ['Design your poster.', 'Choose a problem in your community.', 'Find information for your poster.'], answer: [1, 2, 0], hint: 'Problem first, design last.' }
    ] },
  { id: 'J3', lesson: 5, boss: true, concept: 'Problems and solutions in the community',
    explain: 'Air pollution: walk or cycle, use less plastic, plant trees, keep the community clean. Traffic: take the school bus. Trash: put bins everywhere.',
    variants: [
      { type: 'table', mode: 'boss', level: 'hard', q: 'Does it help stop air pollution?', poc: 'Action', cols: ['Helps', 'Doesn’t help'], items: ['Walk to school', 'Plant trees', 'Use less plastic', 'Leave the car engine running', 'Throw trash on the ground'], answer: [0, 0, 0, 1, 1], hint: 'Cars and trash make the community dirty.' },
      { type: 'match', mode: 'boss', level: 'hard', q: 'Match each problem to a solution.', left: ['Air pollution', 'Traffic near schools', 'Trash on the ground'], right: ['Plant trees in your community.', 'Take the school bus.', 'Put bins everywhere.'], answer: [0, 1, 2], hint: 'Trees clean the air; buses mean fewer cars.' },
      { type: 'mc', style: 'story', mode: 'boss', level: 'hard', q: 'Mona’s poster has a clear title and pictures, but no solutions. What should she add?', options: ['2-3 solutions', 'A date', 'A greeting', 'Yours truly'], answer: 0, hint: 'The poster should include three things.' }
    ] }
];
})();
