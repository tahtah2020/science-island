# Science Island

Educational games for Grade 4 and Grade 5 Science (Egyptian curriculum, Languages and Arabic tracks, first term). Reesho the parrot is the coach.
Players pick their grade once, then a chapter; every chapter has its own map, game, questions and Champions board.

- `index.html`: home. Pick the grade, the track (Languages or Arabic) and type a first name
- `chapters.html`: the chapters of the player's grade for the term; a chapter opens when it is marked `ready` in `chapters.js`
- `chapters.js`: the chapter list of every grade (grade, title, lessons, questions file, game, map picture and stop positions, colours) and the monthly tests
- `map.html`: the chosen chapter's map with its stops (game, Chapter Quest, Daily 5, Review, Champions)
- `arm.html`: Arm Mechanic, Chapter 1's game: an interactive arm showing muscles contracting and relaxing
- `seasons.html`: Season Explorer, Chapter 2's game: the player moves through a year and watches a luffa plant and a lizard change with the temperature (3 stages: Warm Up, Missions, Speed Round "high or low temperature?")
- `seedlab.html`: Seed Lab, Chapter 3's game: open a kidney bean (soak, peel, split), find the embryo and the cotyledon, test for starch with iodine; then three experiments in which the player sets cup B and may change one condition only (water, air, temperature); then a Speed Round "will it germinate?"
- `habitat.html`, `butterfly.html`, `garden.html`: the games of Grade 4, Chapters 1 to 3 (see "Grade 4" below)
- `quiz.html`: `#quest` (questions on the whole chapter), `#daily` (Daily 5), `#review` (spaced repetition) for the chosen chapter; `#exam=oct` is Reesho's Exam Hall (see below)
- `champions.html`: this week's top 10 for the chosen chapter (resets every Saturday)
- `questions.js`: Chapter 1, 23 ideas from the school book (all four lessons 1-1 to 1-4), each with 2-4 phrasings, plus 3 bonus ideas from the Column "The Camel" (`bonus: true`: one comes after the Boss round, never counts for the stars, not in Daily 5). Other chapters get their own file (`questions_ch2.js`, ...)
- `questions_ar.js`: the same ideas (same ids) in Arabic, worded like the Arabic school book, for the Arabic track. Where the two books differ, each file follows its own book (the Arabic book says "about 200 bones", the English one "about 206")
- `questions_ch2.js` / `questions_ch2_ar.js`: Chapter 2 "Changes in the Seasons", 15 ideas from the school book (lessons 2-1 and 2-2, pages 20-25) plus 3 bonus ideas from the Column "Desert Wisdom" (pages 26-27)
- `questions_ch3.js` / `questions_ch3_ar.js`: Chapter 3 "Conditions for Germination", 22 ideas from the school book (lessons 3-1 to 3-5, pages 28-42), 3 bonus ideas ("Let's Expand" and the Column "The Magic Seeds") and 3 exam extras from the outside guide. The Arabic file follows the Arabic school book's wording (الفلقة، الجنين، محلول اليود، الشرط الذي نغيّره…); the cups are (أ) and (ب), and for an Arabic player cup (أ) is drawn on the right, as in the book
- `questions_ch4.js`: the start of Chapter 4 "Conditions for Growth" (7 ideas from the school book). The chapter is still closed; the Exam Hall asks one question from lesson 4-1 in about half of the papers
- `ch3_art.js`: Chapter 3's drawings made in code (the kidney bean and its parts, the cups, the refrigerator, the dark box) and its tap pictures (`seedParts`, `iodineSeeds`, `cupsWater`, `cupsAir`, `cupsTemp`). `assets/map_ch3.svg`, `assets/bg_ch3.svg` are drawn by `tools/make_ch3_map.js`
- `tools/check_questions.js`: run `node tools/check_questions.js` before a release: it checks every questions file (answers, tap targets, ids) and that each Arabic file mirrors its English one
- `ch2_art.js`: Chapter 2's drawings made in code (the luffa through the year, the lizard, the rock scene). The game uses them, and so do the chapter's tap pictures (`plantYear`, `lizardSummer`, `lizardWinter`)
- `assets/map_ch2.svg`, `assets/bg_ch2.svg`: Chapter 2's map and page background, drawn by `tools/make_ch2_map.js` (run `node tools/make_ch2_map.js` after changing it)
- `common.js` / `common.css`: shared player profiles, chapters, XP levels, streaks, sounds, Arabic voice, Champions board
- Visitor statistics: Google Analytics 4, loaded from `common.js` (`GA_ID`); page views and approximate location only, no player names
- `firebase-config.js`: paste the Firebase web config here to make the Champions board online
- `assets/voice/`: Reesho's Arabic voice clips: `ok1`–`ok8`, `bad1`–`bad4`, `streak`, `boss`, `box`, `finish`, `hello`, `level`, `champion` (all `.mp3`; the phrases are listed in `VOICE_TEXT` in `common.js`)

Progress is saved per player on each device, separately for each chapter (XP and the daily streak are shared). Several children can share one device.

## Grades
A player belongs to one grade (`players[id].grade`: `g4`, `g5`), chosen on the home page, and sees that grade's chapters and monthly test only.
In `chapters.js` a chapter or test carries `grade`; without it, it belongs to Grade 5 (the first grade the site had). Chapter ids are unique across grades
(`ch1`… for Grade 5, `g4c1`… for Grade 4), so progress and the Champions boards stay separate. Idea ids (`M5`, `L2`…) are unique inside one grade and language only.
`SI.grade()`, `SI.gradeName()`, `SI.chapters()` (this grade), `SI.allChapters()`, `SI.exams()` (this grade). The owner's preview opens every grade.

## Grade 4
Chapters 1 to 3 of the first term, in English and Arabic, from the school book 2026/2027 (both books have the same pages):
- `questions_g4c1.js` / `_ar.js`: "Nature in Our Surroundings" (pages 6-25): 22 ideas from the five lessons, plus 4 bonus ideas ("Let's Expand" and the Column about the scarab)
- `questions_g4c2.js` / `_ar.js`: "How Insects Grow" (pages 26-35): 14 ideas from the three lessons, plus 2 bonus ideas ("Let's Raise Butterflies from Eggs")
- `questions_g4c3.js` / `_ar.js`: "How Plants Grow" (pages 36-49): 19 ideas from the four lessons, plus 2 bonus ideas
- `g4_art.js`: every Grade 4 drawing made in code (animals and plants of the Nile and the desert, the butterfly's stages, the sunflower from seed to seed…) and the 13 tap pictures of the three chapters
- `g4_game.js` + `g4_game.css`: the game kit shared by the three games. It builds the page and gives the tools (Reesho's bubble, choices, tap spots, sorting buttons, Speed Round, results); a game page only holds its scene and its three stages
- `habitat.html` (Habitat Explorer): find living organisms in a dry place; sort who lives along the Nile River and who lives in the desert; the fennec fox, the jerboa, day and night in the desert; Speed Round "Nile River or desert?"
- `butterfly.html` (Butterfly Garden): raise a butterfly from the egg under the leaf to the adult; the three body parts of an insect; "is it an insect?"; Speed Round "egg, larva, pupa or adult?"
- `garden.html` (My Little Garden): sow a sunflower seed, seed leaves and true leaves; measure the plant height; from bud to flower to fruit to new seeds; roots, stem and leaves; Speed Round
- `assets/map_g4c1.svg` … `map_g4c3.svg`, `assets/bg_g4c1.svg` … `bg_g4c3.svg`: drawn by `tools/make_g4_maps.js`
- Monthly test: `quiz.html#exam=g4m1` (Chapters 1 to 3)
Where the two books differ, each file follows its own book: in the Arabic book the stage is «الشرنقة» and the adult comes out when «ينشق الغلاف الخارجي» (the English book says "the back splits open").

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

## Releasing an update (cache stamp)
Every page loads the shared files with a stamp, e.g. `common.js?v=20261010c`. On each release change the stamp in all pages
(one search-and-replace of the old stamp). Without it, phones may keep an old cached `common.js` next to new pages and the site breaks.

## Owner tools
- `admin.html`: the owner's page (not linked from the game). Google sign-in; only the owner's account passes (same Firestore rule as reviews.html: reading `feedback`). "آخر التعديلات" lists recent changes from `changes.js` with direct links; below it every question of a chapter in English and Arabic side by side. New and changed phrasings are marked on this device (it remembers what you have already seen; "علّمت الكل كمتشاف" resets the marks).
- `quiz.html#preview`: every phrasing one by one, nothing saved. Opens only on a device where the owner signed in on admin.html in the last 30 days (otherwise it is the normal Quest). `quiz.html#preview=B6.2&lang=ar` opens one phrasing in Arabic (`lang=en` for English).
- `arm.html#stage2` / `#stage3`: jump straight to a stage of Arm Mechanic (`seasons.html#stage2` / `#stage3` for Season Explorer, `seedlab.html#stage2` / `#stage3` for Seed Lab; the same for `habitat.html`, `butterfly.html` and `garden.html`).
- The owner's preview also opens a chapter that has a questions file but is not `ready` yet (it is listed on admin.html as "لسه مقفول").
- After each change, add a line to `changes.js`.

## Arabic track
A player who picks **Arabic** on the home page sees every page in Arabic, right to left (the home page stays bilingual).
`common.js` gives `SI.isAr()`, `SI.T(en, ar)` and `SI.chTitle(chapter)`; static HTML carries `data-ar` (text), `data-ar-label` (aria-label/title) and `data-ar-ph` (placeholder).
The Arabic track has its own Champions board (the board key includes the track). A chapter opens for Arabic players only when it has `questionsAr` in `chapters.js`.

## Adding a chapter
1. Write `questions_chN.js` (same format as `questions.js`, sets `window.IDEAS`).
2. Build the chapter's game page; it starts with `SI.requireChapter('chN')` and saves its result in `SI.updateChProf(c => { c.game = {best, stars, plays}; }, 'chN')`.
3. In `chapters.js` fill in `questions`, `game`, `map` (picture + stop positions) and set `ready: true`.
   If the chapter has its own tap pictures, put them in a drawings file that adds them to `window.CH_DIAGRAMS` and name it in `art` (see `ch2_art.js`).
   For a chapter of another grade add `grade: 'g4'` and use an id that no other grade uses (`g4c4`).
   A Grade 4 game can be built on the kit: `G4Game({ ch, title, sub, render })`, then `g.run({ intro, stages, done })` (see `habitat.html`).
4. For the Arabic track add `questions_chN_ar.js` (same ids) and `questionsAr`, `titleAr`, `game.nameAr`, `game.hintAr` in `chapters.js`; wrap the game page's text in `SI.T()` / `data-ar`.
