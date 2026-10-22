# Motafawek (متفوّق)

Learning through play for Egyptian school students, Reesho the parrot as the coach. Science is open; Math has started (Grade 4 Units 1 and 2, Grade 5 Unit 1, Grade 6 Units 1 and 2, both tracks), Social Studies has started (Grade 4 Units 1 and 2, Grade 5 Unit 1, Grade 6 Unit 1), then Arabic and English.

## Subjects and folders
- The path of a player: grade (home page) → subject (tabs on `chapters.html`) → chapter or unit → map, game, questions.
- `window.SUBJECTS` in `chapters.js`: `id`, `title` / `titleAr`, `icon`, `tint`, `dir` (its folder), `soon` (tab shows "Soon" and the Telegram invitation), `hidden`, and `lang`: which questions file each track reads (`{ lang: 'en', ar: 'ar' }` by default; `{ lang: 'ar', ar: 'ar' }` for a subject taught in Arabic on both tracks, such as Arabic or Social Studies; `{ lang: 'en', ar: 'en' }` for English).
- A chapter or monthly test carries `subject` (without it: `science`). Chapter ids stay unique on the whole site (Math: `m5c1`, `mp1u1`…), so progress and Champions boards never mix.
- `common.js`: `SI.subjects()`, `SI.subject()`, `SI.subjectId()`, `SI.setSubject(id)`, `SI.subjectName()`, `SI.chSubject(c)`, and `SI.qFile(c)` (the questions file this player reads). `SI.chapters()` and `SI.exams()` give the player's grade and chosen subject. Opening a chapter also selects its subject. XP, levels and the daily streak are shared by all subjects.
- Files: every page (`.html`) stays at the site root, so links never change. Each subject keeps its other files in its folder: `science/` holds the questions files, the drawings (`*_art.js`, `g6_body.js`), the maps and backgrounds (`science/assets/`) and the map scripts (`science/tools/`). Shared files stay at the root: `common.js`, `common.css`, `chapters.js`, `game_kit.js` / `game_kit.css` (the game kit for every subject), `assets/` (Reesho, voice, banner, shared backgrounds).
- A game page of another subject starts with the subject's name: `math-fractions.html`.
- Paths in `chapters.js` include the folder: `questions: 'science/questions_p2u1.js'`, `map: { img: 'science/assets/map_p2u1.svg' }`.

# Science

Educational games for Grade 4, Grade 5, Grade 6, Prep 1 and Prep 2 Science (Egyptian curriculum, Languages and Arabic tracks, first term). Reesho the parrot is the coach.
Players pick their grade once, then a chapter; every chapter has its own map, game, questions and Champions board.

- `index.html`: home. A new player taps the grade, the track (Languages or Arabic), then boy or girl and a first name on one screen (3 steps). A returning player taps a name, or the **Continue** button (last chapter, opens its map after Reesho's greeting). It loads `chapters.js` for that. Funnel events (GA4, no names): `onboarding_who`, `onboarding_grade`, `onboarding_track`, `onboarding_gender` (only for an old player with no boy/girl), `onboarding_name`, `onboarding_done`, `continue_click`. Quiz events from `quiz.html`: `quiz_start`, `quiz_complete`
- `chapters.html`: the chapters of the player's grade for the term; a chapter opens when it is marked `ready` in `chapters.js`
- `chapters.js`: the chapter list of every grade (grade, title, lessons, questions file, game, map picture and stop positions, colours) and the monthly tests
- `map.html`: the chosen chapter's map with its stops (game, Chapter Quest, Daily 5, Review, Champions)
- `arm.html`: Arm Mechanic, Chapter 1's game: an interactive arm showing muscles contracting and relaxing
- `seasons.html`: Season Explorer, Chapter 2's game: the player moves through a year and watches a luffa plant and a lizard change with the temperature (3 stages: Warm Up, Missions, Speed Round "high or low temperature?")
- `seedlab.html`: Seed Lab, Chapter 3's game: open a kidney bean (soak, peel, split), find the embryo and the cotyledon, test for starch with iodine; then three experiments in which the player sets cup B and may change one condition only (water, air, temperature); then a Speed Round "will it germinate?"
- `habitat.html`, `butterfly.html`, `garden.html`: the games of Grade 4, Chapters 1 to 3 (see "Grade 4" below)
- `flame.html`: Flame Lab, the game of Grade 6, Chapter 1 (see "Grade 6" below)
- `atomlab.html`: Atom Lab, the game of Prep 1, Unit 1 (see "Prep 1" below)
- `heatlab.html`: Heat Lab, the game of Prep 2, Unit 1 (see "Prep 2" below)
- `quiz.html`: `#quest` (questions on the whole chapter), `#daily` (Daily 5), `#review` (spaced repetition) for the chosen chapter; `#exam=oct` is Reesho's Exam Hall (see below)
- `wardrobe.html` / `wardrobe_items.js`: Reesho's wardrobe, bought with gems (see "Gems and Reesho's wardrobe")
- `champions.html`: this week's top 10 for the chosen chapter (resets every Saturday)
- `questions.js`: Chapter 1, 23 ideas from the school book (all four lessons 1-1 to 1-4), each with 2-4 phrasings, plus 3 bonus ideas from the Column "The Camel" (`bonus: true`: one comes after the Boss round, never counts for the stars, not in Daily 5). Other chapters get their own file (`questions_ch2.js`, ...)
- `questions_ar.js`: the same ideas (same ids) in Arabic, worded like the Arabic school book, for the Arabic track. Where the two books differ, each file follows its own book (the Arabic book says "about 200 bones", the English one "about 206")
- `questions_ch2.js` / `questions_ch2_ar.js`: Chapter 2 "Changes in the Seasons", 15 ideas from the school book (lessons 2-1 and 2-2, pages 20-25) plus 3 bonus ideas from the Column "Desert Wisdom" (pages 26-27)
- `questions_ch3.js` / `questions_ch3_ar.js`: Chapter 3 "Conditions for Germination", 22 ideas from the school book (lessons 3-1 to 3-5, pages 28-42), 3 bonus ideas ("Let's Expand" and the Column "The Magic Seeds") and 3 exam extras from the outside guide. The Arabic file follows the Arabic school book's wording (الفلقة، الجنين، محلول اليود، الشرط الذي نغيّره…); the cups are (أ) and (ب), and for an Arabic player cup (أ) is drawn on the right, as in the book
- `questions_ch4.js`: the start of Chapter 4 "Conditions for Growth" (7 ideas from the school book). The chapter is still closed; the Exam Hall asks one question from lesson 4-1 in about half of the papers
- `ch3_art.js`: Chapter 3's drawings made in code (the kidney bean and its parts, the cups, the refrigerator, the dark box) and its tap pictures (`seedParts`, `iodineSeeds`, `cupsWater`, `cupsAir`, `cupsTemp`). `assets/map_ch3.svg`, `assets/bg_ch3.svg` are drawn by `science/tools/make_ch3_map.js`
- `tools/check_questions.js`: run `node tools/check_questions.js` before a release: it checks every questions file (answers, tap targets, ids) and that each Arabic file mirrors its English one
- `ch2_art.js`: Chapter 2's drawings made in code (the luffa through the year, the lizard, the rock scene). The game uses them, and so do the chapter's tap pictures (`plantYear`, `lizardSummer`, `lizardWinter`)
- `assets/map_ch2.svg`, `assets/bg_ch2.svg`: Chapter 2's map and page background, drawn by `science/tools/make_ch2_map.js` (run `node science/tools/make_ch2_map.js` after changing it)
- `common.js` / `common.css`: shared player profiles, chapters, XP levels, streaks, sounds, Arabic voice, Champions board
- Visitor statistics: Google Analytics 4, loaded from `common.js` (`GA_ID`); page views and approximate location only, no player names
- `firebase-config.js`: paste the Firebase web config here to make the Champions board online
- `assets/voice/`: Reesho's Arabic voice clips: `ok1`–`ok8`, `bad1`–`bad4`, `streak`, `boss`, `box`, `finish`, `hello`, `level`, `champion` (all `.mp3`; the phrases are listed in `VOICE_TEXT` in `common.js`)

Progress is saved per player on each device, separately for each chapter (XP and the daily streak are shared). Several children can share one device.

## Grades
A player belongs to one grade (`players[id].grade`: `g4`, `g5`, `g6`, `p1`, `p2`), chosen on the home page, and sees that grade's chapters and monthly test only.
In `chapters.js` a chapter or test carries `grade`; without it, it belongs to Grade 5 (the first grade the site had). Chapter ids are unique across grades
(`ch1`… for Grade 5, `g4c1`… for Grade 4, `g6c1`… for Grade 6, `p1u1`… for Prep 1, `p2u1`… for Prep 2), so progress and the Champions boards stay separate. Idea ids (`M5`, `L2`…) are unique inside one grade and language only.
`SI.grade()`, `SI.gradeName()`, `SI.chapters()` (this grade), `SI.allChapters()`, `SI.exams()` (this grade). The owner's preview opens every grade.

## Grade 4
Chapters 1 to 3 of the first term, in English and Arabic, from the school book 2026/2027 (both books have the same pages):
- `questions_g4c1.js` / `_ar.js`: "Nature in Our Surroundings" (pages 6-25): 22 ideas from the five lessons, plus 4 bonus ideas ("Let's Expand" and the Column about the scarab)
- `questions_g4c2.js` / `_ar.js`: "How Insects Grow" (pages 26-35): 14 ideas from the three lessons, plus 2 bonus ideas ("Let's Raise Butterflies from Eggs")
- `questions_g4c3.js` / `_ar.js`: "How Plants Grow" (pages 36-49): 19 ideas from the four lessons, plus 2 bonus ideas
- `g4_art.js`: every Grade 4 drawing made in code (animals and plants of the Nile and the desert, the butterfly's stages, the sunflower from seed to seed…) and the 13 tap pictures of the three chapters
- `game_kit.js` + `game_kit.css`: the game kit shared by the three games. It builds the page and gives the tools (Reesho's bubble, choices, tap spots, sorting buttons, Speed Round, results); a game page only holds its scene and its three stages
- `habitat.html` (Habitat Explorer): find living organisms in a dry place; sort who lives along the Nile River and who lives in the desert; the fennec fox, the jerboa, day and night in the desert; Speed Round "Nile River or desert?"
- `butterfly.html` (Butterfly Garden): raise a butterfly from the egg under the leaf to the adult; the three body parts of an insect; "is it an insect?"; Speed Round "egg, larva, pupa or adult?"
- `garden.html` (My Little Garden): sow a sunflower seed, seed leaves and true leaves; measure the plant height; from bud to flower to fruit to new seeds; roots, stem and leaves; Speed Round
- `assets/map_g4c1.svg` … `map_g4c3.svg`, `assets/bg_g4c1.svg` … `bg_g4c3.svg`: drawn by `science/tools/make_g4_maps.js`
- Monthly test: `quiz.html#exam=g4m1` (Chapters 1 to 3)
Where the two books differ, each file follows its own book: in the Arabic book the stage is «الشرنقة» and the adult comes out when «ينشق الغلاف الخارجي» (the English book says "the back splits open").

## Grade 6
Chapters 1 to 3 of the first term, in English and Arabic, from the school book 2026/2027 (page n is the same in both books):
- Chapter 1 "Conditions for Burning" / «شروط الاحتراق» (pages 6-17): `questions_g6c1.js` / `_ar.js`, 18 ideas from the three lessons (how things burn and air, the role of oxygen, air after burning), plus 4 bonus ideas ("Let's Expand" and the Column "Combustion and Future Energy"). The Column differs between the two books, so its bonus questions use only what both books say
- Chapter 2 "Respiration" / «التنفس» (pages 18-23): `questions_g6c2.js` / `_ar.js`, 15 ideas from the two lessons (how breathing works, how lungs work). The chapter has no "Let's Expand", so no bonus ideas
- Chapter 3 "Digestion" / «الهضم» (pages 24-33): `questions_g6c3.js` / `_ar.js`, 20 ideas from the three lessons (where food goes, the function of saliva, how absorption works), plus 3 bonus ideas on the liver ("Let's Expand", page 33)
- Idea letters (unique inside Grade 6): A, O, B, X (Chapter 1) · R, L (Chapter 2) · D, S, V, Y (Chapter 3)
- `g6_art.js`: the Chapter 1 drawings (candle, flame, bottomless jar on clay, jars of gas, limewater, the bar of the gases of the air) and its tap pictures (`jarSetups`, `airBar`, `gasJars`, `limeJars`)
- `g6_body.js`: the Chapter 2 and 3 drawings (plastic bags with limewater, the upper body with the windpipe and lungs, gas exchange zoomed in, a fish with gills, the digestive tract, test tubes, beaker, dropper, the wall of the small intestine with and without villi, cloths) and their tap pictures (`breathBags`, `airways`, `gasExchange`, `digestTract`, `salivaTubes`, `gutWalls`, `cloths`)
- Games, all built on the Grade 4 game kit (`game_kit.js`):
  - `flame.html` (Flame Lab): the candle in the jar with a lid, with a gap at the bottom, and with gaps at the top and the bottom; the components of air; a lit candle in jars of nitrogen, oxygen and carbon dioxide; the limewater test; Speed Round "which gas?". Only the teacher lights the candle, as in the book
  - `breath.html` (Breath Lab): our breath and room air in two bags with limewater; the path of the air to the lungs (tap the nose and mouth, windpipe, lungs); gas exchange zoomed in; breathing out and fish gills; Speed Round "oxygen or carbon dioxide?"
  - `foodtrip.html` (Food Journey): a bite of food from the mouth to the anus; the saliva experiment (starch, about 40 °C, iodine solution); the towel and the villi; where the nutrients go (blood, liver); Speed Round "which organ?"
- Maps and backgrounds `assets/map_g6c1..3.svg`, `assets/bg_g6c1..3.svg`: drawn by `science/tools/make_g6_maps.js`
- Reesho's Exam Hall: `g6m1`, the monthly test on Chapters 1, 2 and 3
- Chapters 4 to 10 are listed as "soon"

Notes for the science review:
- Chapter 1: the book prints no result for step 2 of the first experiment (a gap at the bottom while the lid is on). The game shows the flame going out, which is the standard result of this classroom experiment (air is replaced only when it can flow in and out).
- Chapter 2: the book does not print the result of the room-air bag. The tap question asks for "the bag that has less carbon dioxide" (the clear limewater), and "the air we breathe out has less oxygen" comes from "we take in some of the oxygen" and the Exercise on page 23.
- Chapter 3: the English book says the liver's harmful substances are "eliminated in urine"; the Arabic book does not mention urine, so the bonus question uses only the common part. The English definition of digestion says "with teeth"; the Arabic one does not. The Arabic book names the test tubes «أ» (starch + water) and «ب» (starch + saliva); the English story question uses the same A and B.

## Question types
Besides `mc`, `tf`, `fill`, `order`, `match` and `tap`, there are five exam-style types (they train the written questions of the school tests):
```
{ type:'multi', q, options, answer:[0,2] }                         // choose ALL the correct answers
{ type:'table', q, poc:'Direction of movement', cols:[..], items:[..], answer:[column of each item] }   // comparison table
{ type:'term',  q:'the definition', answer:'Hibernation' }         // write the scientific term with letter tiles
{ type:'fix',   q:'The ribs are in the abdominal area.', wrong:'abdominal', answer:'chest' }   // correct the underlined word (letter tiles)
{ type:'build', style:'why'|'whatif'|'function'|'define', q, parts:[the answer, in order], extra:[cards that do not belong] }
```
In a `table` one card at a time is "in hand" above the table: one tap on a column places it and the next card comes up; when all are placed, tapping a card takes it out again. `term`, `fix` and `build` give two tries (green letters stay; Reesho says whether a card is wrong, missing or out of order). Keep a `term`/`fix` answer to 18 letters or fewer, and make sure the `extra` cards of a `build` cannot make a second correct sentence.

## Outside-guide ideas
Core and Boss ideas come from the school book only. An idea taken from the outside guide carries `bonus: true, guide: true`: like the enrichment ideas it never counts for the Quest's stars and is not in Daily 5, but the Exam Hall asks it like any other idea (enrichment ideas without `guide` are left out of the exam).

## Reesho's Exam Hall (monthly test)
`quiz.html#exam=oct` (Grade 5) or `#exam=g4m1` (Grade 4), opened from a card on the chapters page. A test opens for its own grade only. The tests are listed in `chapters.js` (`window.EXAMS`): each names the chapters it covers (`parts`; `lessons`, `max` and `chance` for a chapter it only touches). A paper is 4 questions x 5 marks = 20: part (A) is one short item for 1 mark with one try (true/false, choose, complete, correct the word, term, choose all, put in order); part (B) is two longer items for 2 marks each (build the answer, table or match, tap the picture, story), 1 mark when right on the second try. Every visit builds a new paper, spread over the chapters, preferring phrasings not used last time. The result sheet shows the mark, the marks of each question and of each chapter, and the right answers of the missed items; every item is also recorded in its own chapter's Review. The best mark is kept in `profile.exams[id]`. Nothing goes on the Champions board. For the Arabic track a test covers only the chapters that have Arabic questions.
To add a test (for example November): add an entry to `window.EXAMS` (with `grade` when it is not Grade 5) and, for analytics, its page name in `PAGE_NAMES` in `common.js`.

## Boy or girl, hello and goodbye
- New players pick boy or girl (`players[id].g = 'm' | 'f'`); older players are asked once when they tap their name.
- `SI.G(boy, girl)` picks the Arabic wording; `SI.voice(kind)` plays `<id>_f.mp3` for girls when the phrase has a girl version (silent until that file exists, never the boy's phrase).
- `SI.visit()` → intro (first time), hello (same day), back (yesterday), miss (2-6 days), missbig (7+ days); `SI.greet()` shows Reesho's welcome after the name is tapped.
- `SI.bye()` (👋 button on chapters and map): browsers cannot talk when a tab closes, so goodbye is a button.

## Reesho's explanation of a wrong answer (paused)
`quiz.html` can show a "Why is my answer wrong?" button that asks the `reesho-api` worker (Claude) for an explanation and reads it aloud (ElevenLabs). It is **switched off** since 2026-10-13 (`REESHO_EXPLAIN_ON = false` in `quiz.html`): an explanation contradicted the science (the fennec fox's furry soles) and the voice mispronounced Arabic. The fixed explanation under each question and the short recorded clips in `assets/voice/` still work. Set it to `true` to turn it back on.

## Telegram channel invitation
The channel `https://t.me/motafawek` announces new chapters and games. The players are children, so Reesho talks to the child but the invitation is for a parent ("ask Mum or Dad"). The code is `SI.tg` in `common.js` (the address is `TG_URL`).
- **A closed chapter** (`chapters.html`): tapping a "Soon" chapter opens `SI.tg.soon(title)`: "… is coming soon", plus the channel button.
- **After a good rating** (3 faces or more): the rating pop-up is followed once by `SI.tg.ask('rating')`. Nothing appears after a low rating.
- **Fixed links**: the footer of `index.html` and a card on `contact.html`. Any link with `data-tg="place"` counts as opening the channel.
- Rules, saved for the whole device in `tg` inside `si.v2` (`seen`, `no`, `go` = days): at most once in 7 days, hidden for 30 days after "Not now", never again after the channel button was tapped. No XP or stars for joining, and never during play. A closed chapter always answers the tap (after joining it only says where the news will be).
- Statistics (GA4 events, each with `from` = `soon` | `rating` | `home` | `contact`): `telegram_shown`, `telegram_click`, `telegram_later`.

## Prep 1 (first year of preparatory school)
The Prep 1 book is divided into **units** (not chapters), so for a `p1` player the site says «الوحدة» / "Unit", "Unit Quest" and "Choose a unit"
(`SI.isUnits()`, `SI.chWord()`, `SI.chWords()`, `SI.questName()` in `common.js`). Unit 1 of the first term is open, in English and Arabic, from the school book «اكتشف وتعلم» (page n is the same in both books):
- Unit 1 "The Matter" / «المادة» (pages 2-31): `questions_p1u1.js` / `_ar.js`, 33 ideas from the four lessons (structure of the atom, the periodic table, matter and its properties, chemical bonds), plus 2 bonus ideas from the scientists' profiles (Rutherford, Mendeleev). 185 phrasings in each language
- `questMax: 24` in `chapters.js`: a unit is long, so one Unit Quest asks 24 ideas (every Boss idea, and the others spread over all the lessons, the ones the player knows least first)
- Idea letters (unique inside Prep 1): A, P, M, B, X (Unit 1)
- `p1_art.js`: the Prep 1 drawings (the atom with its nucleus and energy levels, the periodic table, molecules, beakers, Lewis dots, carbon chains) and the tap pictures of Unit 1 (`atomParts`, `energyLevels`, `ptBlocks`, `ptGroups`, `particleBoxes`, `mixBeakers`, `bondTypes`, `carbonShapes`)
- `atomlab.html` (Atom Lab), on the game kit (`game_kit.js`): build an atom of sodium (nucleus, Z, A, neutrons = A − Z, electrons, filling K, L, M); find Na, Cl and Ne in the periodic table from their electron configuration; sodium chloride (ionic bond) and hydrogen chloride (single covalent bond), then O=O and N≡N; physical or chemical property?; Speed Round "element, compound or mixture?"
- Map and background `assets/map_p1u1.svg`, `assets/bg_p1u1.svg`: drawn by `science/tools/make_p1_maps.js`
- Reesho's Exam Hall: `p1oct`, the October monthly test on Unit 1, lessons 1 to 3 (`minParts: 1` lets a one-unit test show on the units page)
- Units 2 to 4 are listed as "soon"
- In the Arabic files, symbols, formulas and electron configurations are wrapped in left-to-right isolates (`ltr()`) and configurations are written without spaces (2,8,1), so they read correctly inside Arabic sentences

Notes for the science review (Unit 1):
- The book counts vitamin D among molecules with "several thousands" of atoms (it has about 70), so that idea uses only plastic polymers and hemoglobin.

## Prep 2 (second year of preparatory school)
Units, like Prep 1 (`UNIT_GRADES` in `common.js`). Unit 1 of the first term is open in English and Arabic, each written from its own school book «اكتشف وتعلم» / "Discover and Learn" 2026/2027 (page n is the same in both books).
A chapter opens only in a language it has a questions file for (`chReady` in `common.js`).
- Unit 1 «المادة والطاقة» "Matter and Energy" (pages 2-38): `questions_p2u1.js` / `questions_p2u1_ar.js`, 36 ideas from the four lessons (states of matter, changes in the states of matter, internal energy and temperature, methods of heat transfer), 204 phrasings in each language. No enrichment ideas: the "technology" and "integration" boxes are part of the lessons, so they are core questions
- Idea letters (unique inside Prep 2): S, C, E, H (Unit 1). Boss ideas: S11, C10, E7, H7
- `questMax: 24` in `chapters.js`, as in Prep 1
- `p2_art.js`: the Prep 2 drawings (particles of the three states, beaker, burner, thermometer, syringes, pot on a fire, spoons, thermos, can in ice) and the tap pictures of Unit 1 (`particleStates`, `syringes`, `stateCycle`, `heatingCurve`, `systems3`, `spoons`, `heatPot`, `mixGraphs`). Pictures with a left and a right are mirrored for an Arabic player (the solid on the right, as in the book); the axes of the heating curve stay left to right, as in the book
- `heatlab.html` (Heat Lab), on the game kit (`game_kit.js`): the particles of a solid, a liquid and a gas; heat ice from −20 °C until it boils while the heating curve draws itself (flat at 0 °C and at 100 °C); open, closed or isolated system?; the heat race (less water against more water, oil against water, why water cools a car engine); a pot on a fire: tap conduction, convection and radiation; Speed Round "conduction, convection or radiation?". Every text has both languages; the English texts follow the English book
- Map and background `assets/map_p2u1.svg`, `assets/bg_p2u1.svg`: drawn by `science/tools/make_p2_maps.js`
- Reesho's Exam Hall: `p2oct`, the October monthly test on Unit 1, lessons 1 to 3 (the same split as Prep 1; change `lessons` in `chapters.js` if the school's October plan differs)
- Units 2 to 4 are listed as "soon"

Notes for the science review (Unit 1):
- The book prints no result for the iron and copper rods with wax pins (page 33); no question asks which rod drops its pins first. The copper-and-glass Boss question uses the lesson exercise on page 38 (glass is not a metal, so the copper pins fall first).
- "In which processes does the kinetic energy of the particles increase?" follows the book's own exercise on page 13 (melting and evaporation).
- English file: the term "thermographic camera" is too long for the letter tiles, so H6.3 asks for "Thermographic" (The ___ camera…), and H3.1 asks "Thermal ___" (Conductivity). The table of S11 uses the columns No mass / Solid / Gas / Liquid (shorter for phones; same answers as the Arabic file).
- The English Evaluation of Lesson 2 asks which substances boil above 50 °C (X, Y and Z); the site keeps the Arabic book's question "above 50 °C and below 90 °C" (X and Z), which the same table answers.
- Not asked (no printed answer or open-ended): the four metals heated for 10 minutes (Lesson 3, Evaluation 1-2), copper or aluminium for cookware and why mercury is used in thermometers (page 28), why water is a large part of the human body, research activities and issues for discussion.

## Gems «جواهر» and Reesho's wardrobe
Every `GEM_XP` (5) points of XP give the player one gem 💎. XP only grows, so the balance is `floor(xp / GEM_XP) - wardrobe.spent`: nothing extra is stored while earning, every activity that calls `SI.addXP` pays gems (it also returns `gems`, the gems of that call), and players who already had XP started with their gems. Gems are free to earn and are never sold for money; no item is limited in time and nothing is lost by staying away.
- `common.js`: `SI.gems()`, `SI.wardrobe()` (`{ spent, owned, worn }`, saved in `profile.wardrobe`), `SI.buyItem(id, price)`, `SI.wearItem(slot, id | null)`, `SI.GEM_XP`.
- `wardrobe_items.js`: `window.WARDROBE_SLOTS` (head, eyes, neck, back) and `window.WARDROBE` (12 items: id, slot, `en` / `ar`, `price`, optional `level` that opens it, `at` for items drawn around their own centre, `box` for the small picture, `svg`). Every item is drawn in code, in the coordinates of `assets/parrot_wave.png` (376 × 520). To add an item, add one object to the list; the page and its prices need no other change.
- `wardrobe.html`: Reesho in the middle (the cape behind him, the other items in front), one tab for each slot, a card for each item (buy, wear, take off, or locked until a level). Opened from the 💎 pill on `chapters.html` and `map.html` and from the line under the level bar on the result panels (`quiz.html`, `game_kit.js`).
- Prices run from 20 to 150 gems; the golden crown opens at level 4 and the golden cape at level 5.
- Next ideas on the same base: Reesho wearing his items on the map and result panels (needs the items placed on each of his poses), a collection book filled from the mystery box, and "my island".

## Releasing an update (cache stamp)
Every page loads the shared files with a stamp, e.g. `common.js?v=20261010c`. On each release change the stamp in all pages
(`node tools/release.js` does it). Without it, phones may keep an old cached `common.js` next to new pages and the site breaks.

## Owner scripts (tools/)
Run from the site folder. Each prints what it did; none of them commits.
- `node tools/check_questions.js`: checks every questions file (answers, tap targets, ids, English/Arabic parity). Must end with "all good".
- `node tools/new_chapter.js p2u2 [--lang ar] [--game reactlab.html --name "Reaction Lab|معمل التفاعلات" --icon ⚗️]`: for a chapter already listed in `chapters.js`, shows the idea letters free in its grade, creates the empty questions files with the rules and a template, adds `questions` / `questionsAr` / `art` / `questMax` (and `game`, `map`, `cover`, `quizBg`) to its entry, creates a game page on the kit and its `PAGE_NAMES` line, and lists what is left by hand. Never overwrites a file, never sets `ready: true`.
- `node tools/smoke_test.js p2u1 [--lang ar] [--quick] [--game-only] | --all`: renders every phrasing at 390×844, 844×390 and 1366×768 (only the phone with `--quick`) and plays the chapter's game to the results panel. Prints only problems and saves their screenshots in `tools/smoke_out/` (ignored by git). A chapter under test opens even before `ready: true`. The three older games (`arm.html`, `seasons.html`, `seedlab.html`) are only opened and checked for errors. Checks run 6 at a time (`--par=8` for more); the whole site takes about 4 minutes, one unit about 1 minute.
- `node tools/coverage.js p2u1 [--lang en] [--book 14,9,11,12] [--left "…"]`: the coverage report in Arabic Markdown, counted from the files: ideas and phrasings per lesson next to the book's count, every concept with its question types, timed share and levels, and the concepts left out. `node tools/coverage.js --all` gives one line per chapter.
- `node tools/release.js [--title "…" --item "…" --link "label|href|ch"] [--dry]`: runs the questions check (stops on a problem), sets today's stamp in every page and adds the `changes.js` entry.

Usual order for a new chapter: `new_chapter.js` → write the ideas and the game → `check_questions.js` → `smoke_test.js` → `ready: true` → `release.js` → `coverage.js` for the report → README → commit and push.

## Owner tools
- `admin.html`: the owner's page (not linked from the game). Google sign-in; only the owner's account passes (same Firestore rule as reviews.html: reading `feedback`). "آخر التعديلات" lists recent changes from `changes.js` with direct links; below it every question of a chapter in English and Arabic side by side. New and changed phrasings are marked on this device (it remembers what you have already seen; "علّمت الكل كمتشاف" resets the marks).
- `progress.html` (لوحة المتابعة, linked from admin.html, noindex): one table of the whole first-term plan, Grade 1 to Prep 3 × every subject. Each cell = units published / units of the term, for the Languages and Arabic tracks (one line «المساران» when a subject has one book for both). A cell opens the unit numbers (green published, yellow in progress, grey not started); a number opens that unit in the owner preview (it switches to an «Admin» player of that grade and track). Read live from `chapters.js`; `PLAN` at the top of the page's script gives a term's unit count when `chapters.js` does not list all units yet.
- `quiz.html#preview`: every phrasing one by one, nothing saved. Opens only on a device where the owner signed in on admin.html in the last 30 days (otherwise it is the normal Quest). `quiz.html#preview=B6.2&lang=ar` opens one phrasing in Arabic (`lang=en` for English).
- `arm.html#stage2` / `#stage3`: jump straight to a stage of Arm Mechanic (`seasons.html#stage2` / `#stage3` for Season Explorer, `seedlab.html#stage2` / `#stage3` for Seed Lab; the same for `habitat.html`, `butterfly.html`, `garden.html` and `flame.html`).
- The owner's preview also opens a chapter that has a questions file but is not `ready` yet (it is listed on admin.html as "لسه مقفول").
- After each change, add a line to `changes.js`.

## Arabic track
A player who picks **Arabic** on the home page sees every page in Arabic, right to left (the home page stays bilingual).
`common.js` gives `SI.isAr()`, `SI.T(en, ar)` and `SI.chTitle(chapter)`; static HTML carries `data-ar` (text), `data-ar-label` (aria-label/title) and `data-ar-ph` (placeholder).
The Arabic track has its own Champions board (the board key includes the track). A chapter opens for Arabic players only when it has `questionsAr` in `chapters.js`.

## Grade 6 Science, Chapter 4 (both tracks)
- `g6c4` «Blood Circulation and Excretion» (3 lessons: 4-1 Heart and Blood, 4-2 How the Kidneys Work, 4-3 Various Organs), `ready`. Two files with the same ideas, ids, order and answers: `science/questions_g6c4.js` (English book) and `science/questions_g6c4_ar.js` (Arabic book, pages 34-45). Ideas H, K, M, bonus Z from the Enrichment Corner; 27 ideas (23 core), 150 phrasings each. Review notes are in the file headers (Try / Exercise of pages 42-43 filed under lesson 2; blood carries oxygen and nutrients, carbon dioxide is collected; «قبح سنوف» is the book's own spelling).
- Game `bloodtrip.html` (Blood Express) in both languages. Pictures in `science/g6_body.js`: `bloodLoop` (tap `heart`, `lungs`, `whole`; `pic.dot` puts a dot on one vessel), `urinary` (`kidneys`, `urtube`, `bladder`), `organsMap` (`lungs`, `heart`, `stomach`, `small`, `large`). Map and background: `node science/tools/make_g6_maps.js`.
- Monthly test `g6oct` (official October scope: Chapter 4 only). `g6m1` (Chapters 1-3) is kept (outside the official October scope).

## Math (math/)
- Grade 5, Unit 1 `m5c1` «Place Value of Decimals and Operations» (11 lessons: decimals to thousandths, ×10 and ÷10, expanded form, comparing, rounding, estimating and modelling sums and differences, story problems). Game: `math-decimals.html` (Decimal Dock). Math chapters are called units («الوحدة») everywhere.
- The school books print no answers, so every number answer is computed and checked by `tools/check_questions.js`.
- New question type `num` (number pad, two tries): `answer` is plain number text and each question carries `calc: 'expression'` (or `round: ['7.7', 0]` for rounding, or `noCalc: true`); `unit` shows a unit after the box.
- `q.fig` shows a picture above any non-tap question (`gridModel`, or a tap diagram); `q.diagram` + `q.pic` are for tap questions. Pictures: `math/m5_art.js` (`gridShade`, `placeChart`, `numLine`, `gridModel`).
- Maps and backgrounds: `node math/tools/make_m_maps.js`.
- Both tracks: `math/questions_m5c1.js` (Languages track, from the English book) and `math/questions_m5c1_ar.js` (Arabic track, from the Arabic book); same ideas, ids, order and answers. The English unit title and lesson names are translated from the Arabic book; the Arabic file uses the Arabic book's number where the two books differ (15.348 instead of 15.36, same answer).
- Grade 4, Unit 1 `mg4u1` «القيمة المكانية» (8 lessons, idea ids A–H, 24 ideas / 120 phrasings) and Unit 2 `mg4u2` «إستراتيجيات عمليتي الجمع والطرح» (5 lessons, ids I–M, 16 ideas / 85 phrasings). Games: `math-placevalue.html` (Place Value Nest) and `math-addsub.html` (Ant Colony Count). Pictures: `math/g4_art.js` (`placeTable`, a tap diagram with column ids `b1 m100 m10 m1 t100 t10 t1 u100 u10 u1`; `pic.plain` draws it inside a game scene and `window.G4MATH.placeCols()` gives the column positions).
- Both tracks: `math/questions_mg4u1.js`, `math/questions_mg4u2.js` (Languages track, from the English book) and the `_ar` files (Arabic book); same ids, order and answers. The English book calls the billions place "Milliards" (word forms: "nine milliard, ..."), uses O/H/T place labels in the chart, and names the units «Addition and Subtraction Strategies» and «Reinforcing Place Value / Using Place Value»; the site follows each book. Its page 32 has the same 5,328 vs 5,398 conflict as the Arabic book.
- Review notes: the books print no answers. Book page 32 conflicts with itself (text says 5,328 ants, the equation prints 2,164 + a = 5,398); the site uses 5,328, so a = 3,164. Not asked: the card games (Creating Big Numbers, Creating the Greatest, Number Battle; unit 1), activities on pages 26 and 31 (no printed result) and the open «write a problem / explain» items.

- Grade 6 has seven units this term (titles and lessons from the contents page of the Arabic book, pages iv–v): `mg6u1`–`mg6u7`. Units 3–7 are locked placeholders (`ready: false`, no questions yet): 3 «المقادير الجبرية» (7 lessons), 4 «المعادلات والمتباينات» (3), 5 «المتغيرات التابعة والمستقلة» (4), 6 «توزيع البيانات» (5), 7 «مقاييس النزعة المركزية والانتشار» (4); their English titles are translated from the Arabic book until the English pages arrive. Idea letters continue from K.
- Grade 6, Units 1 and 2 (both tracks, `ready`): `mg6u1` «Divisibility, Factors, and Multiples» / «قابلية القسمة والعوامل والمضاعفات» (4 lessons, ideas A-D, 32 ideas / 202 phrasings, game `math-boxes.html` Food Bank Packers) and `mg6u2` «Rational Numbers» / «الأعداد النسبية» (6 lessons, ideas E-J, 38 ideas / 227 phrasings, game `math-climb.html` Climb the Line). Monthly test `mg6oct` draws from both units (official October scope). Pictures in `math/g6_art.js` (`vennGCF`, `factorTree`, `boxPack`, `bagFrac`, `numLine6`, `setsCircles`). Files: `math/questions_mg6u1.js`, `questions_mg6u2.js` (English book) and the `_ar` files (Arabic book, read 22 Oct 2026); same ids, order and answers, and the two books have the same numbers. The Arabic book letters its points and climbers أ ب ج د هـ: `numLine6` draws `pt.t` when given (the tap id stays `ln` + the Latin `pt.l`), and `math-climb.html` adds the Arabic letters for the Arabic track. Review notes (derived answers, what is not asked, the Arabic wording «ينخفض موضعك ... إلى 25 م» read as «by 25 m») are in the file headers.

## Social Studies (studies/)
- One Arabic school book («مصر في قلب العالم») for both tracks: the subject has `lang: { lang: 'ar', ar: 'ar' }`, so every unit has only a `_ar` questions file (`studies/questions_sg4u1_ar.js`). The whole site is Arabic and right to left for the Languages track too while Studies is the chosen subject: `SI.isAr()` in `common.js` is true when the track is Arabic OR the subject's `lang` is `{ lang: 'ar', ar: 'ar' }` (`arSubject()`); switching to Science brings the English interface back. Game speech keeps both languages with `T()`.
- Studies chapters are called units («الوحدة») everywhere (`SI.isUnits`). Grade 4 has three units: `sg4u1` «اتجاهاتنا ترسم خطواتنا» and `sg4u2` «مدينتنا وحياتنا اليومية» (both ready) and `sg4u3` «مصر وطننا» (`ready: false`, no questions yet). Idea letters: A–D unit 1 (one per lesson), E–I unit 2, J–N unit 3.
- Unit 1: 4 lessons, 30 ideas / 192 phrasings, Boss ideas A7, B3, C5, D7. Game: `studies-compass.html` (Compass Trail). Unit 2 `sg4u2`: 5 lessons, ids E–I, 36 ideas / 198 phrasings, Boss ideas E8, F7, G7, H6, I3; game `studies-city.html` (City Planner); pictures `landUse`, `servicePlan`, `thenNow` (pic.set `train`/`lamp`/`phone`, `flip`), `regions` (Delta / Nile valley / desert borders). Review notes for unit 2: numbers the text extraction lost (27 governorates, Cairo founded 969 CE, national day 6 July, 2014) were read from the book's pages; governorate classes use only the book's printed examples and table, not Port Said, Ismailia or Suez. Maps and backgrounds: `node studies/tools/make_s_maps.js`.
- Pictures are drawn in code in `studies/g4_art.js` (nothing is copied from the book): `compassTown`, `sunFacing`, `schoolPlan`, `mapParts`, `mapCities`, `pathPlans`, `skyViews`, `mapKinds`, `sourceCards` (their tap ids are listed at the top of the file and in `TAPS` of `tools/check_questions.js`). SVG text there carries `direction="ltr"` so `text-anchor` does not flip on an RTL page.
- Review notes: the book prints no answers. Questions about a picture of the book (number of classrooms, playground vs garden, art room nearest the teachers' room, security room on the left) are answered from a picture drawn here with the same layout. The book's fact / opinion / rumour set includes «vaccines cause illness» and «glasses weaken eyesight»; both are rumours by standard medical consensus. Not asked: the drawing tasks, essays, GPS-app activities, «propose an idea» prompts, the pamphlet activity and open comparisons.
- Grade 5, unit 1 `sg5u1` «مصر موقع متميز وطبيعة متنوعة» (book «مصر حكاية وطن وحضارة», `ready: true`): all four lessons written, ids A–D (A موقع مصر الفلكي · B مظاهر سطح مصر · C مناخ مصر · D النباتات الطبيعية والحيوانات البرية), 3 bonus ideas (B16, C17, D14), Boss ideas A9, B15, C16, D13. Game `studies-egypt.html` (Egypt Explorer, 5 missions). Pictures in `studies/g5_art.js` (self-contained, drawn in code): `globeGrid`, `egyptGrid` (fig only), `egyptRegions`, `reliefForces`, `climateMap` (med / desert), `sunRays` (rayEq1 / rayS / rayN / rayEq2). Two site rules added for this subject: the chapter flag `bookOrder: true` makes a Quest follow the book (lesson 1, then 2, 3, 4; Boss last), and every question of a unit shows a badge with its lesson (`quiz.html` header). The monthly test `sg5oct` (chapters.js `EXAMS`) covers lessons 1 and 2 only (`lessons: [1, 2]`). Turn on `bookOrder` for the next Studies units too. Every question that has something to look at carries a picture (`fig`, set by the `FIG` table at the end of the questions file; `tap` questions are pictures already); pictures `dunes` and `habitats` (envNile / envDesert / envCoast) were added for lesson 2 and 4. The game never shows an empty panel.

- Grade 6, unit 1 `sg6u1` «وطننا العربي (خصائص وتحديات)» (`ready: true`, `bookOrder: true`, `questMax: 32`): four lessons, ids A–D (A وطننا العربي: الموقع والأهمية · B تضاريس وطننا العربي · C المناخ والنبات الطبيعي · D التحديات البيئية), 55 ideas / 282 phrasings, Boss ideas A14, B16, C12, D10, bonus ideas B17 (Siwa), C13 (climate change and plants), D11 (floods and air pollution). Game `studies-arab.html` (Arab Homeland Explorer: warm up on the wings and borders, 5 missions, Speed Round «African or Asian wing»). Monthly test `sg6oct` covers lessons 1–3 (the official October scope).
  Pictures in `studies/g6_art.js` (self-contained, drawn in code; a simplified map of the Arab homeland from rough longitude/latitude points): `arabWings` (afWing / asWing / redSea), `arabBorders` (bAtl / bMed / bTaurus / bZagros / bGulf / bArabSea / bIndian / bSahara), `arabStraits` (sHormuz / sSuez / sGibraltar / sMandeb), `arabMountains` (mAtlas / mRedSea / mHejaz / mZagros / mOman), `arabPlateaus` (pNafr / pSham / pNajd / pHadra), `arabPlains` (plFlood / plCoast / plDesert), `arabClimate` (cMed / cDesert / cTrop), `landforms` (lfMount / lfPlat / lfOasis / lfDunes / lfWadi / lfPlain), `mountainRain` (slopeWind / slopeLee / peakSnow), `envProblems` (eDrought / eDesertif / ePollution / eFlood). Ids are prefixed so they never clash in admin's `TAP`. A picture (`fig`) goes on choose, fill, choose-all, match and table questions only; definitions and true/false stay plain, so the search pages have questions for every lesson.
  Review notes: the book prints no answers. Derived from the book's own maps (and asked in its own exercises): Greenwich crosses Algeria, Morocco and Mauritania overlook the Atlantic, the desert climate covers most of the Arab lands. The natural/human split of the causes of desertification is ours (the book asks for it). Not asked: «do all Arab countries overlook water?», the Tropic of Capricorn and the equator questions (not printed), and the open activities.

- Quest resume (all subjects, `quiz.html`): the Quest saves its place after every question in the chapter profile (`p.run`: question list with phrasing numbers, position, results, score, streak). Coming back within 3 days shows «كمّل من السؤال N» / «ابدأ من الأول»; finishing or starting again clears it. Daily 5, Review and the monthly test are not resumed.
- Game resume (all kit games, `game_kit.js`): after every answered step the game saves `gameRun` (stage, steps done, score, mistakes) in the chapter profile. Coming back within 3 days shows «كمّل من حيث وقفت» / «ابدأ من الأول»; resuming skips finished stages and steps and restores the score. Cleared on the results panel.

## English (english/)
- One English book (Primary 4, Term 1) for both tracks: `lang: { lang: 'en', ar: 'en' }`, so every unit has one questions file with no `_ar` file. English chapters are called units (`SI.isUnits`). In quiz.html the `term` type reads "Write the word" for English.
- Grade 4 Unit 1 `eg4u1` «The Five Senses» (ready): 5 lessons (senses pp 8-10, Healthy Habits and present simple pp 11-13, Goha story and short/long vowels pp 14-17, sequence words pp 18-19, presentation and feedback p 20), ids A-E, 29 ideas / 156 phrasings, Boss ideas A5, B6, C10, D5, E3. Game `english-senses.html` (Senses Explorer). Exam `eg4oct` (October Monthly Test).
- New `build` style `sentence` ("Build the sentence"). Picture `fiveSenses` (tap ids `eye`, `ear`, `nose`, `tongue`, `palm`; `palm`, not `hand`, because the admin TAP map shares keys with Math). Pictures live in `english/g4_art.js`; maps and backgrounds: `node english/tools/make_e_maps.js`.
- Review notes: the book's listening and audio tasks are asked as reading questions (no audio here). Open writing and speaking tasks are not asked. The self-assessment prints a phonetic symbol for the "o" in pot; the site avoids phonetic symbols. The "First" in the book's Tip box is struck through (a book glitch). "Goha paid a few coins" is false: he only shook his coins. Sorting comments into Praise / Advice is our own classification.
- English is English-only on BOTH tracks: `SI.isAr()` is false while the English subject is chosen (`enSubject()` in `common.js`), so the Arabic track sees no Arabic interface, titles or explanations there; `titleAr` / `lessonsAr` stay in `chapters.js` for the owner pages only.
- Units 2-6 (`eg4u2` My Community, `eg4u3` In Our World, `eg4u4` Egypt: My Homeland, `eg4u5` A Day at Work, `eg4u6` The Hundred Dresses; titles from the book's Term 1 scope and sequence) are locked placeholders (`ready: false`, empty `lessons`). Idea letters continue from F.
- Other grades' English tab shows "Soon".

## Adding a subject (Math was the first)
1. In `window.SUBJECTS` remove `soon` (and `hidden`); create its folder (`math/`, with `assets/` and `tools/`).
2. Add its chapters to `window.CHAPTERS` with `subject: 'math'`, `grade`, `n`, titles and lessons (`ready: false`), then `node tools/new_chapter.js <id>` for each.
3. Question types the subject needs and the site does not have yet are added once to `quiz.html` (and to `tools/check_questions.js`), for example a number answer for Math, or a reading passage for the languages.

## Adding a chapter
All files of a chapter except its game page go in its subject's folder (`science/questions_chN.js`…). `node tools/new_chapter.js` does the setup.
1. Write `questions_chN.js` (same format as `questions.js`, sets `window.IDEAS`).
2. Build the chapter's game page; it starts with `SI.requireChapter('chN')` and saves its result in `SI.updateChProf(c => { c.game = {best, stars, plays}; }, 'chN')`.
3. In `chapters.js` fill in `questions`, `game`, `map` (picture + stop positions) and set `ready: true`.
   If the chapter has its own tap pictures, put them in a drawings file that adds them to `window.CH_DIAGRAMS` and name it in `art` (see `ch2_art.js`).
   For a chapter of another grade add `grade: 'g4'` and use an id that no other grade uses (`g4c4`).
   A Grade 4 game can be built on the kit: `G4Game({ ch, title, sub, render })`, then `g.run({ intro, stages, done })` (see `habitat.html`).
4. For the Arabic track add `questions_chN_ar.js` (same ids) and `questionsAr`, `titleAr`, `game.nameAr`, `game.hintAr` in `chapters.js`; wrap the game page's text in `SI.T()` / `data-ar`.

## SEO (Oct 2026)
- Indexable pages: `index.html` and `contact.html` only (title, description, canonical, Open Graph, Twitter card; the home page also has JSON-LD `WebSite` + `Organization` and a static Arabic `#about` section so Google sees real text).
- Every other page (chapters, map, quiz, champions, wardrobe and all game pages) carries `<meta name="robots" content="noindex,follow">`: without a player they redirect home, so they would look like thin duplicates. `admin.html` and `reviews.html` were already noindex. A new game page needs the same line after the viewport tag.
- `robots.txt` (allows all, blocks `/tools/` and `/shots/`, points to the sitemap) and `sitemap.xml` (two URLs) sit at the root. Do not block noindex pages in `robots.txt`: Google must crawl them to see the tag. Add a URL to the sitemap only when the page is meant to appear in search.
- Search Console: property `motafawek.com` (Domain, verified with a DNS TXT record in Cloudflare), then submit `https://motafawek.com/sitemap.xml`.

## Search pages (SEO and GEO)
- `node tools/make_seo_pages.js` builds static, indexable pages from `chapters.js` and each ready chapter's Arabic questions file: `lessons/<subject>-<grade>-<chapter>-l<N>.html` (one per lesson: title, key concepts, up to 8 practice questions with answers, FAQPage schema, button to the game), one test page per chapter or unit (`lessons/<subject>-<grade>-<chapter>.html`, 15 mixed questions, titled like the searches people make: «اختبار على الفصل الأول علوم الصف الخامس الابتدائي ترم أول»), one monthly review page per monthly test in `window.EXAMS` (`lessons/<subject>-<grade>-review-<exam>.html`, «مراجعة شهر أكتوبر …»), a hub per grade and subject (`lessons/<subject>-<grade>.html`), `lessons/index.html`, and it rewrites `sitemap.xml` and `llms.txt`.
- The game pages are drawn by JavaScript, so search engines cannot read them; these pages are what Google can index. They hold our own practice questions and concept names, never the textbook's text.
- Run it after every new chapter or unit goes `ready: true` (or after changing questions), commit `lessons/`, `sitemap.xml`, `llms.txt`, then ask Search Console to re-read the sitemap. English-track and English-subject pages are not generated yet.
