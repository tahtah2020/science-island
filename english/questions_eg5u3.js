/* English · Grade 5 · Term 1 · Unit 3 "When Nature Changes" · ministry book "English Primary 5", first term 2026/2027 (book pages 41-60)
   One English book for both tracks (subject lang { lang: 'en', ar: 'en' }), so there is no _ar file.
   Lessons: 1 Weather Wonders and Warnings! (pp 42-44) · 2 Extreme Weather in Ancient Egypt + past simple (pp 45-47) · 3 Story Time: The Two Frogs + vowel digraphs (pp 48-51)
            4 Writing: Once Upon My Imagination (pp 52-53) · 5 Think and Create: A Collage (p 54) · Quick Review, Self-Assessment and Review 1 (pp 55-60, spread over the lessons)
   Idea letters (one per lesson): K, L, M, N, O.  Boss ideas: K6, L6, M7, N4, O3.
   Rules: answers of mc/fill at index 0 (the page shuffles) · one Boss idea per lesson (every variant mode:'boss') · about a third timed (10-20 s, easy recall)
          distractors = real misconceptions · term/fix answers ≤ 18 letters · core and Boss only from the school book.
   Tap pictures (english/g5_art.js): weatherSix -> thunderstorm | sandstorm | flood | drought | wildfire | heatwave
                                    storyThings -> pond | well | fly | frog | boat | mudhouse (new idea M8 = page 48 exercise 2 "Read, look, and number"; also in L4 and M5)
   Pictures: the owner's illustrations (25 Oct 2026), english/assets/wx_*.jpg, cropped without the sheet's captions.
   Review notes:
   - The listening activities of the book (audio) are asked as reading questions; the audio is not on the site. Open speaking, discussion, "Think", role-play, writing and drawing tasks are not asked.
   - Page 43 exercise 5 question 3 says "Why can't farmers grow food in the US?" but the dialogue says the drought is in China: the question is not asked. Farmers in the drought are asked as "there is no water".
   - Page 44 exercise 6 and 9 and page 55 exercise 1 (picture tasks) are not asked as printed: the site's own tap picture asks the same six words.
   - Page 47 exercise 6 item 4 prints "(went)" after "didn't": asked as the infinitive "go", the rule printed on the same page.
   - Page 57 exercise 3 (missing letters) is not asked: "- - uck" has two valid words. Review 1 exercise 1 (sorting words of the three units) is asked in lesson 5 as a table. Review 1 exercises 2 and 6 (irrigation, well, mental health, hunt, damage, drought) are folded into the matching lessons of this unit.
   - Page 58 exercise 5 and page 59 exercise 7 (rewrite / write a story) are open tasks: not asked. */
(function () {
window.CHAPTER = { id: 'eg5u3', title: 'When Nature Changes' };

window.IDEAS = [
  /* ---------- Lesson 1 · Weather Wonders and Warnings! ---------- */
  { id: 'K1', lesson: 1, concept: 'Extreme weather words',
    explain: 'A wildfire burns through forests and homes. A sandstorm is a severe wind that carries sand and dust through the air, making it hard to breathe. A flood is when there is too much water covering dry land. In a heat wave, the temperature is dangerously high for days. A drought happens when there is no rain for a long time. In a thunderstorm, children are afraid of the lightning.',
    variants: [
      { type: 'match', mode: 'normal', level: 'medium', q: 'Match each weather word to its meaning.', left: ['wildfire', 'sandstorm', 'flood', 'heat wave', 'drought', 'thunderstorm'], right: ['burns through forests and homes', 'a severe wind that carries sand and dust through the air', 'too much water covering dry land', 'the temperature is dangerously high for days', 'no rain for a long time', 'children are afraid of the lightning'], answer: [0, 1, 2, 3, 4, 5] },
      { type: 'term', mode: 'normal', level: 'medium', q: 'It happens when there is no rain for a long time.', answer: 'Drought' },
      { type: 'term', mode: 'normal', level: 'medium', q: 'Too much water covering dry land.', answer: 'Flood' },
      { type: 'term', mode: 'normal', level: 'medium', q: 'It burns through forests and homes.', answer: 'Wildfire' },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'In a heat wave, the temperature is ___ for days.', options: ['dangerously high', 'very low', 'normal', 'cool'], answer: 0 },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'A sandstorm is a severe wind that carries ___ and dust.', options: ['sand', 'water', 'snow', 'leaves'], answer: 0 }
    ] },
  { id: 'K2', lesson: 1, concept: 'Recognize the six weather pictures',
    explain: 'The six extreme weather words are thunderstorm, sandstorm, flood, drought, wildfire and heat wave.',
    variants: [
      { type: 'tap', diagram: 'weatherSix', mode: 'normal', level: 'easy', q: 'Tap the picture of a thunderstorm.', answer: 'thunderstorm' },
      { type: 'tap', diagram: 'weatherSix', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap the picture of a sandstorm.', answer: 'sandstorm' },
      { type: 'tap', diagram: 'weatherSix', mode: 'normal', level: 'easy', q: 'Tap the picture of a flood.', answer: 'flood' },
      { type: 'tap', diagram: 'weatherSix', mode: 'normal', level: 'easy', q: 'Tap the picture of a drought.', answer: 'drought' },
      { type: 'tap', diagram: 'weatherSix', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap the picture of a wildfire.', answer: 'wildfire' },
      { type: 'tap', diagram: 'weatherSix', mode: 'normal', level: 'easy', q: 'Tap the picture of a heat wave.', answer: 'heatwave' }
    ] },
  { id: 'K3', lesson: 1, concept: 'Mazen and Dina: flood and drought',
    explain: 'There was a flood in Mazen’s city last week. The water covered the streets and many cars got stuck. Mazen’s uncle’s house was damaged. The water flooded his living room, and he had to stay with them for a few days. There is also a drought in China: no rain for months, and farmers can’t grow crops because there’s no water. The land gets so dry that animals can’t find water.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What happened in Mazen and Dina’s city last week?', options: ['There was a flood', 'There was a drought', 'There was a sandstorm', 'There was a heat wave'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'How did the flood affect Mazen’s uncle?', options: ['His house was damaged and he stayed with Mazen’s family', 'He lost his car in a wildfire', 'He could not find water', 'He moved to China'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'During the flood, many cars got ___.', options: ['stuck', 'spread', 'damaged'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'The water covered the streets during the flood.', answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Why can’t farmers grow crops in a drought?', options: ['There is no water', 'There is too much water', 'The wind is too strong', 'There are many cars'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Why can’t animals find water in a drought?', options: ['The land gets so dry', 'The land gets covered with water', 'There is too much rain', 'The animals travel away'], answer: 0 }
    ] },
  { id: 'K4', lesson: 1, concept: 'Wildfires and how to help the planet',
    explain: 'A wildfire is spreading in the forest in the U.S.A. It spreads quickly because it’s dry there and the winds are so strong. Many trees burned down, and animals lost their homes. Mazen and Dina decide to learn more about how to stay safe and help our planet.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Why does the wildfire spread quickly?', options: ['It’s dry and the winds are strong', 'There is a lot of rain', 'There are many cars', 'The forest is wet'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What happened to the animals in the wildfire?', options: ['They lost their homes', 'They found more water', 'They moved to the city', 'They became stronger'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'The wildfire ___ quickly in the forest.', options: ['spread', 'stuck', 'damaged'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What can Mazen and Dina do to help the planet?', options: ['Learn how to stay safe and help our planet', 'Stay away from the news', 'Burn the forests', 'Keep the weather hot'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'Many trees burned down in the wildfire.', answer: 0 }
    ] },
  { id: 'K5', lesson: 1, concept: 'Vocabulary: damaged, spread, planet, news, stuck',
    explain: 'I was stuck in my car during the flood. The wildfire spread quickly in the forest. I heard on the news that there was a bad storm. Medhat’s house was damaged after the storm hit it. To save our planet, we must keep it clean.',
    variants: [
      { type: 'fill', mode: 'normal', level: 'medium', q: 'I was ___ in my car during the flood. I couldn’t move.', options: ['stuck', 'damaged', 'spread', 'planet'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'I heard on the ___ that there was a bad storm in the village.', options: ['news', 'planet', 'stuck', 'spread'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Medhat’s house was ___ after the storm hit it.', options: ['damaged', 'news', 'planet', 'spread'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'To save our ___, we must keep it clean.', options: ['planet', 'news', 'stuck', 'damaged'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'A lot of trees burned down in a ___.', options: ['wildfire', 'drought'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'During a ___, the weather is very hot.', options: ['heat wave', 'flood'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'A ___ can prevent farmers from growing food.', options: ['drought', 'thunderstorm'], answer: 0 }
    ] },
  { id: 'K6', lesson: 1, boss: true, concept: 'What is extreme weather?',
    explain: 'Extreme weather is very different from the usual weather we see every day. It can be much stronger and more dangerous. Examples include heavy storms, hot heat waves, strong sandstorms, big floods and long droughts. These events can damage houses, roads and farms. People and animals may suffer. It is important to learn about them and how to stay safe. They can happen anywhere in the world.',
    variants: [
      { type: 'mc', mode: 'boss', level: 'medium', q: 'What is extreme weather?', options: ['Weather very different from the usual weather, stronger and more dangerous', 'The usual weather we see every day', 'Weather that never changes', 'Weather that only happens in one country'], answer: 0 },
      { type: 'multi', mode: 'boss', level: 'medium', q: 'Which are examples of extreme weather in the text? Choose all the correct answers.', options: ['Heavy storms', 'Heat waves', 'Floods', 'A nice sunny day'], answer: [0, 1, 2] },
      { type: 'mc', mode: 'boss', level: 'medium', q: 'Extreme weather can ___ homes and farms.', options: ['damage', 'help', 'live', 'stay'], answer: 0 },
      { type: 'mc', mode: 'boss', level: 'medium', q: 'The word “droughts” means a long time without ___.', options: ['rain', 'food', 'home', 'air'], answer: 0 },
      { type: 'tf', mode: 'boss', level: 'medium', q: 'Extreme weather can happen anywhere in the world.', answer: 0 },
      { type: 'tap', diagram: 'weatherSix', mode: 'boss', level: 'medium', q: 'Tap the picture of the weather that happens when there is no rain for a long time.', answer: 'drought' }
    ] },

  /* ---------- Lesson 2 · Extreme Weather in Ancient Egypt ---------- */
  { id: 'L1', lesson: 2, concept: 'The Nile and farming in Ancient Egypt',
    explain: 'Ancient Egypt had weather that made farming possible, even in the desert. The Nile River gave water and rich soil, which helped crops grow. But sometimes the weather also brought problems like floods, droughts and sandstorms.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What did the Nile River give to Ancient Egypt?', options: ['Water and rich soil', 'Sand and rocks', 'Only fish', 'Snow'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'The Nile River gave water and rich ___, which helped crops grow.', options: ['soil', 'sand', 'rocks'], answer: 0 },
      { type: 'multi', mode: 'normal', level: 'medium', q: 'Which problems did the weather bring in Ancient Egypt? Choose all the correct answers.', options: ['Floods', 'Droughts', 'Sandstorms', 'Snowstorms'], answer: [0, 1, 2] },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'Farming was possible in Ancient Egypt, even in the desert.', answer: 0 }
    ] },
  { id: 'L2', lesson: 2, concept: 'Floods in Ancient Egypt',
    explain: 'The Nile River flooded every year. The water brought rich soil to the land, which helped crops grow. But sometimes the floods were too strong and damaged farms. To stop this, the Ancient Egyptians built canals and basins to control the water and spread it over their fields.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What did the Ancient Egyptians do to stop the flood damage?', options: ['They built canals and basins', 'They built pyramids', 'They left the farms', 'They stopped farming'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'The floods brought water and ___ to the land.', options: ['rich soil', 'sand', 'rocks', 'heat'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'The Nile River flooded every year.', answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Canals and basins controlled the water and spread it over their ___.', options: ['fields', 'houses', 'boats'], answer: 0 }
    ] },
  { id: 'L3', lesson: 2, concept: 'Droughts in Ancient Egypt',
    explain: 'Droughts happened when there was not enough rain. The Nile’s water became low, and the land became dry. Crops could not grow. To solve this, the Ancient Egyptians made irrigation systems to bring water to their fields.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What did the Ancient Egyptians use to bring water to their crops during droughts?', options: ['Irrigation systems', 'Mud bricks', 'Canals only for boats', 'Machines'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Droughts made the Nile’s water ___.', options: ['low', 'high', 'soil', 'spread'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'Droughts happened when there was not enough rain.', answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'The ___ systems brought water to crops in Ancient Egypt.', options: ['irrigation', 'sandstorm', 'mud brick', 'wind'], answer: 0 }
    ] },
  { id: 'L4', lesson: 2, concept: 'Sandstorms (Khamsin) in Ancient Egypt',
    explain: 'Sandstorms, called Khamsin, brought strong, hot winds with sand. It was hard to see and breathe. People stayed inside to stay safe. They built their homes with thick mud bricks to protect themselves from the wind and sand. The Ancient Egyptians didn’t have modern machines, but they found smart ways to survive.',
    variants: [
      { type: 'term', mode: 'normal', level: 'medium', q: 'The name of the sandstorms of Ancient Egypt.', answer: 'Khamsin' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What protected the Ancient Egyptians from sandstorms?', options: ['Mud bricks', 'Wood', 'Pyramids', 'Metal'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'The Ancient Egyptians found smart ways to ___.', options: ['survive', 'damage', 'breathe', 'grow'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'During sandstorms, people stayed inside to stay safe.', answer: 0 },
      { type: 'tap', diagram: 'storyThings', mode: 'normal', level: 'easy', q: 'The Ancient Egyptians built their homes with thick mud bricks. Tap the mud-brick house.', answer: 'mudhouse' },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'The Ancient Egyptians had modern machines.', answer: 1 },
      { type: 'match', mode: 'normal', level: 'medium', q: 'Match each problem to the Egyptians’ solution.', left: ['Floods', 'Droughts', 'Sandstorms'], right: ['canals and basins', 'irrigation systems', 'thick mud bricks'], answer: [0, 1, 2] }
    ] },
  { id: 'L5', lesson: 2, concept: 'Past simple: positive, negative, questions',
    explain: 'We use the past simple to talk about finished actions or events in the past. We use “didn’t” + the infinitive to make negative sentences. With the verb “to be”, we put “not” after was/were. We use “Did …?” or “Wh-word + did …?” + the infinitive to make questions. With “to be”, we use “Was/Were …?”.',
    variants: [
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'We use the past simple to talk about finished actions in the past.', answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'They ___ the zoo last weekend.', options: ['visited', 'visit', 'visiting', 'visits'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'I ___ so excited about my trip two days ago.', options: ['was', 'am', 'were', 'is'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: '___ the teacher give us homework last Monday?', options: ['Did', 'Do', 'Does', 'Was'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Why didn’t you ___ to school yesterday?', options: ['go', 'went', 'goes', 'going'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which is the negative form of “Malik watched TV early last night”?', options: ['Malik didn’t watch TV early last night.', 'Malik didn’t watched TV early last night.', 'Malik not watched TV early last night.'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which is the negative form of “They were at the club a week ago”?', options: ['They weren’t at the club a week ago.', 'They didn’t were at the club a week ago.', 'They didn’t at the club a week ago.'], answer: 0 }
    ] },
  { id: 'L6', lesson: 2, boss: true, concept: 'Past simple in use',
    explain: 'Use “didn’t” + infinitive for negatives, “was/were + not” with “to be”, and “Did …?” / “Was/Were …?” for questions: What did the Ancient Egyptians do when the river flooded? Were there sandstorms in the past?',
    variants: [
      { type: 'mc', mode: 'boss', level: 'medium', q: 'She ___ a nice animal yesterday. (negative)', options: ['didn’t see', 'didn’t saw', 'not saw', 'wasn’t see'], answer: 0 },
      { type: 'mc', mode: 'boss', level: 'medium', q: 'Last November, I ___ dinner at Grandpa’s house.', options: ['had', 'have', 'has', 'having'], answer: 0 },
      { type: 'mc', mode: 'boss', level: 'medium', q: 'On Saturday, I ___ to a nice concert.', options: ['went', 'go', 'goes', 'gone'], answer: 0 },
      { type: 'mc', mode: 'boss', level: 'medium', q: 'Yesterday, my family and I ___ my birthday.', options: ['celebrated', 'celebrate', 'celebrates', 'celebrating'], answer: 0 },
      { type: 'mc', mode: 'boss', level: 'medium', q: 'The food ___ delicious.', options: ['was', 'is', 'were', 'be'], answer: 0 },
      { type: 'mc', mode: 'boss', level: 'medium', q: 'We ___ so happy.', options: ['were', 'are', 'was', 'be'], answer: 0 },
      { type: 'fix', mode: 'boss', level: 'hard', q: 'The Ancient Egyptians didn’t had modern tools.', wrong: 'had', answer: 'have' }
    ] },

  /* ---------- Lesson 3 · Story Time: The Two Frogs ---------- */
  { id: 'M8', lesson: 3, concept: 'Pond, well and flies (read, look and number)',
    explain: 'A pond is an area of water, usually smaller than a lake. A well is a deep hole dug in the ground to find water. Flies are small insects with two thin, small wings.',
    variants: [
      { type: 'tap', diagram: 'storyThings', mode: 'normal', level: 'easy', q: 'An area of water, usually smaller than a lake. Tap it.', answer: 'pond' },
      { type: 'tap', diagram: 'storyThings', mode: 'normal', level: 'easy', q: 'A deep hole dug in the ground to find water. Tap it.', answer: 'well' },
      { type: 'tap', diagram: 'storyThings', mode: 'timed', seconds: 15, level: 'easy', q: 'Small insects with two thin, small wings. Tap one.', answer: 'fly' },
      { type: 'tap', diagram: 'storyThings', mode: 'normal', level: 'easy', q: 'Two of them were best friends in the story. Tap this animal.', answer: 'frog' }
    ] },
  { id: 'M1', lesson: 3, concept: 'The two frogs and their pond',
    explain: 'Once upon a time, in a small and quiet village, there were two frogs who were best friends. They lived together in a small pond near the edge of the village. Every day, they had fun catching flies, swimming in the cool water and resting under the warm sun.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Where was the pond?', options: ['Near the edge of the village', 'In the middle of a forest', 'Next to a big city', 'On a mountain'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'The two frogs lived together in a pond.', answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'The two frogs had a lot of fun catching fish.', answer: 1 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'The two frogs had fun catching ___.', options: ['flies', 'fish', 'birds'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Where and when does the story begin?', options: ['In a small and quiet village, once upon a time', 'In a big city, last year', 'In the desert, at night', 'In a school, yesterday'], answer: 0 }
    ] },
  { id: 'M2', lesson: 3, concept: 'The pond dries up',
    explain: 'One summer, the weather became extremely hot. The sun was strong, and the pond started to dry up. The frogs got worried. They knew they couldn’t stay in the pond any longer because there wasn’t enough water for them. They decided to leave the pond and look for a new home where they could live safely.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What happened one summer?', options: ['The weather became extremely hot and the pond started to dry up', 'A flood covered the village', 'It rained for days', 'A wildfire burned the pond'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'There was enough water in the pond in the summer.', answer: 1 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What did the frogs decide to do because the pond was dry?', options: ['Look for a new home to live in safely', 'Stay in the pond', 'Go back to sleep', 'Dig a well'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'The frogs decided to look for a new ___.', options: ['home', 'well', 'deep'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which kind of weather made the pond dry?', options: ['A heat wave in the summer', 'A thunderstorm', 'A flood', 'A sandstorm'], answer: 0 }
    ] },
  { id: 'M3', lesson: 3, concept: 'The deep well',
    explain: 'The two frogs leaped through fields and grass, looking for another pond. After a long time, they saw a deep well. One of the frogs said, “This well looks like a great place for us to live! The water is cool, and it’s very deep.” The other frog said, “What if it dries up one day? We will get stuck at the bottom of the well, and we won’t be able to get out.”',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Where did the two frogs go to find a new home?', options: ['Through fields and grass to a deep well', 'To the city', 'To the sea', 'To a mountain'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Why did the two frogs decide not to live in the well?', options: ['It might dry up and they would get stuck at the bottom', 'The water was too cold', 'The well was too small', 'There were fish in it'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'The two frogs decided to live in the well.', answer: 1 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'I saw a deep ___ that was full of water last week.', options: ['well', 'tool', 'frog', 'sun'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Once, there were two frogs who couldn’t live in a pond any longer. So, they decided to look for a new ___.', options: ['home', 'well', 'deep'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'After a long time, they saw a ___ well.', options: ['deep', 'home', 'dry'], answer: 0 }
    ] },
  { id: 'M4', lesson: 3, concept: 'Characters and moral of the story',
    explain: 'The first frog thought about what his friend said, then agreed. They decided not to live in the well and kept leaping and searching for a safe home. The story tells us to think before we make a decision.',
    variants: [
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'The story tells us to think before we make a decision.', answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What is the moral of the story?', options: ['Think carefully before making a decision', 'Always live in a well', 'Never leave your home', 'Fast decisions are always best'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Who are the characters in the story?', options: ['Two frogs who are best friends', 'A boy and a tree', 'A girl and her flowers', 'Two farmers'], answer: 0 },
      { type: 'order', mode: 'normal', level: 'hard', q: 'Put the story in order.', items: ['They decided not to live in the well', 'The pond started to dry up', 'They saw a deep well', 'The two frogs lived together in a pond'], answer: [3, 1, 2, 0] },
      { type: 'build', style: 'sentence', mode: 'normal', level: 'hard', q: 'Put the cards in order.', parts: ['Think', 'before you make', 'a decision.'], extra: ['dry', 'well'] }
    ] },
  { id: 'M5', lesson: 3, concept: 'Vowel digraphs',
    explain: 'A vowel digraph is when two vowels appear together and make just one sound. In “leap”, the ‘ea’ makes the long ‘e’ sound. In “flood”, the ‘oo’ makes a short ‘u’ sound. In “boat”, the ‘oa’ makes a long ‘o’ sound.',
    variants: [
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'A vowel digraph is when two vowels appear together and make just ___ sound.', options: ['one', 'two', 'three'], answer: 0 },
      { type: 'match', mode: 'normal', level: 'medium', q: 'Match each word to its vowel digraph.', left: ['leap', 'flood', 'boat'], right: ['ea', 'oo', 'oa'], answer: [0, 1, 2] },
      { type: 'multi', mode: 'normal', level: 'medium', q: 'Which words have a vowel digraph? Choose all the correct answers.', options: ['read', 'book', 'goat', 'cup'], answer: [0, 1, 2] },
      { type: 'multi', mode: 'normal', level: 'medium', q: 'Which words have a vowel digraph? Choose all the correct answers.', options: ['feet', 'hear', 'foot', 'frog'], answer: [0, 1, 2] },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'Which word does NOT have a vowel digraph?', options: ['hot', 'goat', 'book', 'feet'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which is the vowel digraph in “I like to eat green peas”?', options: ['ee and ea', 'oo', 'oa', 'ai'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which is the vowel digraph in “We read two books last week”?', options: ['ea, oo and ee', 'oa', 'ai', 'ou'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'The ___ sailed across the lake.', options: ['boat', 'meet', 'weak', 'floods'], answer: 0 },
      { type: 'tap', diagram: 'storyThings', mode: 'normal', level: 'easy', q: '“oa” makes a long “o” sound in this word: it sailed across the lake. Tap it.', answer: 'boat' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'It’s nice to ___ my teacher at the break.', options: ['meet', 'boat', 'weak', 'floods'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'The ___ made the plants weak.', options: ['floods', 'boat', 'meet', 'weak'], answer: 0 }
    ] },
  { id: 'M6', lesson: 3, concept: 'Vowel digraph sounds in words',
    explain: 'In “leap”, ‘ea’ makes the long ‘e’ sound. In “flood”, ‘oo’ makes a short ‘u’ sound. In “boat”, ‘oa’ makes a long ‘o’ sound.',
    variants: [
      { type: 'tf', mode: 'timed', seconds: 10, level: 'medium', q: 'In “leap”, the “ea” makes the long “e” sound.', answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'medium', q: 'In “boat”, the “oa” makes a long “o” sound.', answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'medium', q: 'In “flood”, the “oo” makes a long “o” sound.', answer: 1 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which sound does “oo” make in “flood”?', options: ['A short u sound', 'A long e sound', 'A long o sound'], answer: 0 }
    ] },
  { id: 'M7', lesson: 3, boss: true, concept: 'The Two Frogs: the whole story',
    explain: 'Two frog friends lived in a pond. One hot summer the pond began to dry up, so they left to look for a home. They found a deep well, but decided not to live there because it could dry up and they would get stuck. They kept searching for a safe home. The story tells us to think before we make a decision.',
    variants: [
      { type: 'order', mode: 'boss', level: 'hard', q: 'Put the story in order.', items: ['They kept searching for a safe home', 'The weather became extremely hot', 'They saw a deep well', 'They left the pond'], answer: [1, 3, 2, 0] },
      { type: 'mc', mode: 'boss', level: 'medium', q: 'Why was the weather important in the story?', options: ['It was extremely hot, so the pond started to dry up', 'It rained too much', 'It was snowy', 'It was a sandstorm'], answer: 0 },
      { type: 'fix', mode: 'boss', level: 'medium', q: 'The two frogs decided to live in the well.', wrong: 'decided to', answer: 'decided not to' },
      { type: 'mc', mode: 'boss', level: 'medium', q: 'What does the other frog think about the well?', options: ['It could dry up and they would get stuck', 'It is too small', 'It is too far', 'It has no water'], answer: 0 },
      { type: 'tf', mode: 'boss', level: 'medium', q: 'The frogs decided to leave the pond because there wasn’t enough water.', answer: 0 },
      { type: 'build', style: 'sentence', mode: 'boss', level: 'hard', q: 'Put the cards in order.', parts: ['The frogs', 'decided not to live', 'in the well.'], extra: ['pond', 'fish'] }
    ] },

  /* ---------- Lesson 4 · Writing: Once Upon My Imagination ---------- */
  { id: 'N1', lesson: 4, concept: 'Lily’s flowers get sunshine',
    explain: 'One sunny morning, Lily looked out her window and saw big, fluffy clouds floating upside down. Lily remembered her grandma saying that sometimes a gentle whisper could fix things. So Lily opened her window and whispered, “Please, dear clouds, turn right side up!” Slowly and magically, the clouds began to flip. Lily knew that even big problems could be solved with a little bit of kindness and a gentle whisper.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What did Lily see one sunny morning?', options: ['Clouds floating upside down', 'A flood', 'A sandstorm', 'Two frogs'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'How did Lily fix the problem?', options: ['She whispered to the clouds', 'She shouted at the sun', 'She climbed a tree', 'She asked a doctor'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Lily was afraid her ___ wouldn’t get sunshine.', options: ['flowers', 'frogs', 'clouds'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Who told Lily that a gentle whisper could fix things?', options: ['Her grandma', 'Her mom', 'Her teacher', 'Her friend'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What did Lily learn?', options: ['Big problems can be solved with kindness and a gentle whisper', 'Clouds can never turn over', 'Flowers don’t need sunshine', 'Whispers are scary'], answer: 0 }
    ] },
  { id: 'N2', lesson: 4, concept: 'Fiction and plot',
    explain: 'A fiction story is a made-up story created from the imagination, not based on real things that happened. Plot: Beginning, meet the characters and setting. Problem, something goes wrong. Middle, the character tries to fix it. Climax, the most exciting part. Ending, the problem is solved.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What is a fiction story?', options: ['A made-up story created from the imagination', 'A true story about real things', 'A news report', 'A recipe'], answer: 0 },
      { type: 'match', mode: 'normal', level: 'medium', q: 'Match each part of the plot.', left: ['Beginning', 'Problem', 'Middle', 'Climax', 'Ending'], right: ['meet the characters and setting', 'something goes wrong', 'the character tries to fix it', 'the most exciting part', 'the problem is solved'], answer: [0, 1, 2, 3, 4] },
      { type: 'order', mode: 'normal', level: 'hard', q: 'Put the parts of the plot in order.', items: ['Climax', 'Beginning', 'Ending', 'Problem', 'Middle'], answer: [1, 3, 4, 0, 2] },
      { type: 'term', mode: 'normal', level: 'medium', q: 'The most exciting part of a story.', answer: 'Climax' },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'A fiction story is based on real things that happened.', answer: 1 },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'In the plot, “the problem is solved” is the ___.', options: ['ending', 'beginning', 'climax'], answer: 0 }
    ] },
  { id: 'N3', lesson: 4, concept: 'Plot of Lily’s story',
    explain: 'In “Lily’s flowers get sunshine”: the beginning meets Lily in her cozy little house. The problem is that the clouds are upside down. In the middle, Lily remembers her grandma’s advice. The climax is when the clouds slowly flip. In the ending, the sun shines and the flowers smile.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What is the problem in Lily’s story?', options: ['The clouds are floating upside down', 'The flowers are red', 'Her grandma is sick', 'It is raining'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What happens in the ending of Lily’s story?', options: ['The sun shines brightly and the flowers smile', 'The clouds stay upside down', 'The house is flooded', 'Lily runs away'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Where does Lily’s story happen?', options: ['In a cozy little house', 'In a village pond', 'In the desert', 'In a hospital'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'In Lily’s story, the clouds began to flip slowly and magically.', answer: 0 }
    ] },
  { id: 'N4', lesson: 4, boss: true, concept: 'Fiction stories',
    explain: 'A fiction story is made up from the imagination. Its plot has a beginning, a problem, a middle, a climax and an ending. Lily’s story shows that big problems can be solved with kindness.',
    variants: [
      { type: 'mc', mode: 'boss', level: 'medium', q: 'In the plot, “something goes wrong” is the ___.', options: ['problem', 'ending', 'beginning'], answer: 0 },
      { type: 'mc', mode: 'boss', level: 'medium', q: 'In the plot, “the character tries to fix it” is the ___.', options: ['middle', 'climax', 'beginning'], answer: 0 },
      { type: 'fix', mode: 'boss', level: 'medium', q: 'A fiction story is based on real things that happened.', wrong: 'based on real things that happened', answer: 'made up' },
      { type: 'tf', mode: 'boss', level: 'medium', q: 'In Lily’s story, a gentle whisper helped fix the problem.', answer: 0 },
      { type: 'table', mode: 'boss', level: 'hard', q: 'Sort each sentence of Lily’s story.', poc: 'Sentence', cols: ['Problem', 'Ending'], items: ['The clouds are upside down', 'The flowers smile', 'How will her flowers get sunshine?', 'The sun shines brightly'], answer: [0, 1, 0, 1] },
      { type: 'build', style: 'sentence', mode: 'boss', level: 'hard', q: 'Put the cards in order.', parts: ['A fiction story', 'is a made-up story', 'from the imagination.'], extra: ['real', 'plot'] }
    ] },

  /* ---------- Lesson 5 · Think and Create: A Collage ---------- */
  { id: 'O1', lesson: 5, concept: 'How to make a collage',
    explain: 'To make a collage, first find and cut out photos of many different weather conditions. Then glue them together; the pictures are allowed to overlap.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What do you do first to make a collage?', options: ['Find and cut out photos of many different weather conditions', 'Glue the pictures together', 'Write a story', 'Make a poster'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What do you do then?', options: ['Glue them together', 'Cut a tree', 'Draw a recipe', 'Throw them away'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'The pictures in a collage are allowed to overlap.', answer: 0 },
      { type: 'order', mode: 'normal', level: 'medium', q: 'Put the steps of making a collage in order.', items: ['Glue them together', 'Find and cut out photos of many weather conditions'], answer: [1, 0] },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'First, find and cut out ___ of many different weather conditions.', options: ['photos', 'frogs', 'bricks'], answer: 0 }
    ] },
  { id: 'O2', lesson: 5, concept: 'Review 1: sort the words',
    explain: 'Review 1: My Body: lungs, muscles. Extreme Weather: storm, heat wave. The Nile River: crocodile, water weeds.',
    variants: [
      { type: 'table', mode: 'normal', level: 'medium', q: 'Sort the words into their categories.', poc: 'Word', cols: ['My Body', 'Extreme Weather', 'The Nile River'], items: ['storm', 'crocodile', 'lungs', 'heat wave', 'muscles', 'water weeds'], answer: [1, 2, 0, 1, 0, 2] },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'Which word belongs to “The Nile River”?', options: ['crocodile', 'lungs', 'heat wave', 'muscles'], answer: 0 },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'Which word belongs to “Extreme Weather”?', options: ['heat wave', 'water weeds', 'muscles', 'crocodile'], answer: 0 },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'Which word belongs to “My Body”?', options: ['lungs', 'storm', 'water weeds', 'crocodile'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Exercising and sleeping enough are good for our ___.', options: ['mental health', 'snack', 'medicine', 'knowledge'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Some animals, like crocodiles, ___ to get food.', options: ['hunt', 'play', 'keep', 'sail'], answer: 0 }
    ] },
  { id: 'O3', lesson: 5, boss: true, concept: 'Weather collage and the six weather words',
    explain: 'A collage about “Nature’s Different Moods” can show photos of thunderstorms, sandstorms, floods, droughts, wildfires and heat waves.',
    variants: [
      { type: 'tap', diagram: 'weatherSix', mode: 'boss', level: 'medium', q: 'Tap the picture of the weather that is a severe wind carrying sand and dust.', answer: 'sandstorm' },
      { type: 'tap', diagram: 'weatherSix', mode: 'boss', level: 'medium', q: 'Tap the picture of the weather that burns through forests and homes.', answer: 'wildfire' },
      { type: 'tap', diagram: 'weatherSix', mode: 'boss', level: 'medium', q: 'Tap the picture of the weather where the temperature is dangerously high for days.', answer: 'heatwave' },
      { type: 'tap', diagram: 'weatherSix', mode: 'boss', level: 'medium', q: 'Tap the picture of too much water covering dry land.', answer: 'flood' },
      { type: 'mc', mode: 'boss', level: 'medium', q: 'To make a collage, you glue photos ___.', options: ['together, and they may overlap', 'in a straight line only', 'on a menu', 'on a flyer'], answer: 0 },
      { type: 'tf', mode: 'boss', level: 'medium', q: 'A collage about weather can show many different weather conditions.', answer: 0 }
    ] }
];
})();
