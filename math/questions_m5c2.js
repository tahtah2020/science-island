/* Math · Grade 5 · Unit 2 "Number Relationships" · Languages track (English), first term 2026/2027
   Source: the English school book (Math Term 1), Unit 2 (pages 43-63): Concept 2.1 "Expressions, Equations, and the Real World" (lessons 1-3), Concept 2.2 "Factors and Multiples" (lessons 4-8).
   Idea letters (one per lesson, Unit 1 used A-K): L L1 Expressions, Equations, and Variables · M L2 Variables in Equations · N L3 Telling Stories with Numbers · O L4 Prime Factorization ·
   P L5 Greatest Common Factors · Q L6 Identifying Multiples · R L7 Least Common Multiple · S L8 Factors or Multiples?   Boss ideas: L4, M5, N4, O5, P4, Q5, R4, S4.
   The book is an activity book with no printed answers: the numbers and situations are the book's own (the gulfs of Suez and Aqaba, the sand dunes, Ras Muhammad, Mount Sinai,
   the Suez Canal, the Red Sea steamship, Ras Abu Galum buses, kofta and aish baladi, mangroves, the Sinai Trail) and EVERY number answer is computed (calc, checked by tools/check_questions.js).
   Pictures (math/m5_art.js): barModel, factorTree, skipLine (pictures above a question) and multVenn (tap mvL / mvM / mvR).
   Review notes:
   - Lesson 1: the book prints no definitions; "an equation has an equal sign, an expression has none" is the standard meaning, and the two word sentences (Aya, Amir) are filed under "Neither".
   - Lesson 3: Nagi's story (3.5 km a day for 10 days) is solved with 3.5 × 10 as the book's story asks; "Which story matches 2.8 + 1.5 = C / 1.25 + x = 2.5" uses short stories written here
     (the book asks the student to write them); the estimate of 480 − 345 (about 130) is one reasonable estimate.
   - Lesson 5: the challenge of the dive (greatest interval both can take) follows the book's options (2, 3, 5, 10 m): 5 m, because Taha's 15 m is "the entire distance" for him.
   - Lesson 4: "Basem is correct" (a tree starting with 1 and 193 cannot help: 193 is prime).
   - Not asked: the Number Talk and Pop Up games, drawing factor trees and the Venn diagram, "write a story problem", the Writing About Math and Check Your Understanding items.
   Generated together with questions_m5c2_ar.js (same ids, phrasings order and answers). */
(function () {
window.CHAPTER = { id: 'm5c2', title: 'Number Relationships', grade: 'Grade 5', track: 'Languages' };

window.IDEAS = [
  /* ---------- Lesson 1 · Expressions, Equations, and Variables (pages 44-46) ---------- */
  {"id":"L1","lesson":1,"concept":"Equation or expression?","explain":"An equation has an equal sign: it says that the two sides have the same value (4.7 + 3.6 = M, 56 − x = 47.5). An expression has no equal sign: it is numbers, letters and operation signs only (6.4 + 3.2 + 8, 125 − 27.3, 3.4 + L).",
    "variants": [
      {"type":"mc","mode":"timed","seconds":12,"level":"easy","q":"Which one is an equation?","options":["4.7 + 3.6 = M","6.4 + 3.2 + 8","125 − 27.3","3.4 + L"],"answer":0},
      {"type":"mc","mode":"timed","seconds":12,"level":"easy","q":"Which one is an expression?","options":["14.2 − 3.575","56 − x = 47.5","345.45 − 123.8 = x","7.3 + 4.5 + 2.3 = A"],"answer":0},
      {"type":"tf","mode":"timed","seconds":10,"level":"easy","q":"An equation has an equal sign.","answer":0},
      {"type":"tf","mode":"normal","level":"medium","q":"3.4 + L is an equation because it has a letter.","answer":1},
      {"type":"term","mode":"normal","level":"easy","q":"A math sentence with an equal sign: both sides have the same value.","answer":"Equation","choices":["Expression","Variable","Product"]},
      {"type":"term","mode":"normal","level":"medium","q":"Numbers, letters and operation signs with NO equal sign, like 125 − 27.3.","answer":"Expression","choices":["Equation","Variable","Factor"]},
      {"type":"table","mode":"normal","level":"medium","q":"Sort the mathematical phrases.","cols":["Equations","Expressions"],"items":["4.7 + 3.6 = M","6.4 + 3.2 + 8","125 − 27.3","56 − x = 47.5","3.4 + L","345.45 − 123.8 = x"],"answer":[0,1,1,0,1,0]}
    ] },
  {"id":"L2","lesson":1,"concept":"Equation, expression or neither","explain":"A sentence in words (a story) is neither an equation nor an expression until we write it with numbers and signs. 3.5 + 2.456 = 2.5 + 3.456 is an equation: each side is 5.956. 7.3 + 4.5 + 2.3 = A is an equation; 37.125 − 13.7 is an expression.",
    "variants": [
      {"type":"table","mode":"normal","level":"medium","q":"Sort into Equations, Expressions or Neither.","cols":["Equations","Expressions","Neither"],"items":["3.5 + 2.456 = 2.5 + 3.456","14.2 − 3.575","Amir had 3.5 kg of apples and 2.7 kg of figs.","37.125 − 13.7","7.3 + 4.5 + 2.3 = A","Aya ran a total of 8 km last week. She ran 3.75 km on Monday. How much did she run the rest of the week?"],"answer":[0,1,2,1,0,2]},
      {"type":"tf","mode":"normal","level":"medium","q":"3.5 + 2.456 = 2.5 + 3.456 is a true equation.","answer":0},
      {"type":"num","mode":"normal","level":"medium","q":"What is the value of each side of 3.5 + 2.456 = 2.5 + 3.456?","answer":"5.956","calc":"3.5+2.456"},
      {"type":"mc","mode":"normal","level":"medium","q":"“Amir had 3.5 kg of apples and 2.7 kg of figs.” What is it?","options":["Neither: it is a sentence in words","An equation","An expression"],"answer":0},
      {"type":"fill","mode":"timed","seconds":12,"level":"easy","q":"7.3 + 4.5 + 2.3 = A is an ___.","options":["equation","expression","neither"],"answer":0},
      {"type":"tf","mode":"timed","seconds":12,"level":"easy","q":"37.125 − 13.7 is an expression.","answer":0}
    ] },
  {"id":"L3","lesson":1,"concept":"A variable stands for the unknown","explain":"A variable is a letter or symbol that stands for an unknown number. Mariam compared the Gulf of Suez (about 275 km) with the Gulf of Aqaba (about 180 km): in 180 + x = 275 and x = 275 − 180, x is the difference in kilometers between the two lengths. Both equations give the same x: 95 km. The letter does not change the value: 4.5 + 6.25 = x and 4.5 + 6.25 = M both equal 10.75.",
    "variants": [
      {"type":"term","mode":"normal","level":"easy","q":"A letter or symbol that stands for an unknown number in an equation.","answer":"Variable","choices":["Expression","Factor","Multiple"]},
      {"type":"mc","mode":"normal","level":"medium","q":"Mariam wrote 180 + x = 275 to compare the Gulf of Aqaba (180 km) and the Gulf of Suez (275 km). What does x represent?","options":["The difference in kilometers between the two lengths","The length in kilometers of one gulf","The width of Sinai Peninsula","The distance in kilometers between the gulfs"],"answer":0},
      {"type":"num","mode":"normal","level":"easy","q":"Solve Mariam’s equation: x = 275 − 180","answer":"95","calc":"275-180","unit":"km"},
      {"type":"multi","mode":"normal","level":"hard","q":"Mariam solves 180 + x = 275 and x = 275 − 180 correctly. What is true? Choose ALL.","options":["The value of x would be the same","The difference between the two lengths would be 95 km","The answer to 275 − 180 would be 85 km","The distance between the gulfs would be 95 km"],"answer":[0,1]},
      {"type":"mc","mode":"normal","level":"easy","q":"Basma wants an equation for “12.5 plus a number equals 15”. Which is correct?","options":["12.5 + x = 15","12.5 + 15 = x","15 + x = 12.5","x − 15 = 12.5"],"answer":0},
      {"type":"tf","mode":"normal","level":"medium","q":"4.5 + 6.25 = x and 4.5 + 6.25 = M have the same value, only the letter is different.","answer":0},
      {"type":"fill","mode":"timed","seconds":12,"level":"easy","q":"In 3.4 + L, the letter L is a ___.","options":["variable","product","factor"],"answer":0}
    ] },
  {"id":"L4","lesson":1,"boss":true,"concept":"What does x mean? The sand dunes of Sinai","explain":"Read what each number stands for. Adham’s x = 27 − 18 is the difference between the tallest and shortest dunes (9 m). Ehab’s 42.7 + 38.3 = x is the sum of the heights of both dunes (81 m). Farha knows the sum (46 m) and one dune (18.25 m): 18.25 + x = 46 or 46 − 18.25 = x, so x = 27.75 m. And 2.34 + 6 = 1.34 + 7 is true: both sides are 8.34.",
    "variants": [
      {"type":"mc","mode":"boss","level":"medium","q":"Adham compared the sand dunes of northern Sinai and wrote x = 27 − 18. What does x represent?","options":["The difference between the tallest and shortest dunes","The height of one of the dunes","The sum of the heights of two dunes","The distance between the tallest and shortest dunes"],"answer":0},
      {"type":"mc","mode":"boss","level":"medium","q":"Ehab wrote 42.7 + 38.3 = x. Each number is the height of a dune. What does x represent?","options":["The sum of the heights of both dunes","The height difference between the dunes","The height of the taller dune","The distance between the dunes"],"answer":0},
      {"type":"multi","mode":"boss","level":"hard","q":"Two dunes are 46 m high together, and one is 18.25 m. Which equations find the other height? Choose ALL.","options":["18.25 + x = 46","46 − 18.25 = x","18.25 + 46 = x","x − 18.25 = 46"],"answer":[0,1]},
      {"type":"num","mode":"boss","level":"hard","q":"Farha’s dunes: 18.25 + x = 46. Find x.","answer":"27.75","calc":"46-18.25","unit":"m"},
      {"type":"num","mode":"boss","level":"medium","q":"Ehab’s dunes: 42.7 + 38.3 = x. Find x.","answer":"81","calc":"42.7+38.3","unit":"m"},
      {"type":"tf","mode":"boss","level":"hard","q":"2.34 + 6 = 1.34 + 7 is true.","answer":0}
    ] },

  /* ---------- Lesson 2 · Variables in Equations (pages 47-48) ---------- */
  {"id":"M1","lesson":2,"concept":"Addition and subtraction undo each other","explain":"Addition and subtraction are related: if 8.23 + p = 10.24, then p = 10.24 − 8.23. If T − 2.45 = 0.26, then T = 0.26 + 2.45. To find a missing part, subtract the known part from the whole; to find the whole, add the parts.",
    "variants": [
      {"type":"mc","mode":"timed","seconds":15,"level":"easy","q":"8.23 + p = 10.24. Which finds p?","options":["p = 10.24 − 8.23","p = 10.24 + 8.23","p = 8.23 − 10.24","p = 8.23 × 10.24"],"answer":0},
      {"type":"mc","mode":"timed","seconds":15,"level":"medium","q":"T − 2.45 = 0.26. Which finds T?","options":["T = 0.26 + 2.45","T = 0.26 − 2.45","T = 2.45 − 0.26","T = 2.45 × 0.26"],"answer":0},
      {"type":"fill","mode":"timed","seconds":12,"level":"easy","q":"To find a missing part, subtract the known part from the ___.","options":["whole","variable","other part"],"answer":0},
      {"type":"fill","mode":"normal","level":"medium","q":"In h − 6.82 = 1.23, to find h we ___ 6.82 and 1.23.","options":["add","subtract","multiply"],"answer":0},
      {"type":"tf","mode":"timed","seconds":10,"level":"easy","q":"Addition and subtraction are related: one undoes the other.","answer":0},
      {"type":"mc","mode":"normal","level":"medium","q":"Estimate first: 8.23 + p = 10.24. p is about…","options":["2","18","10","1"],"answer":0}
    ] },
  {"id":"M2","lesson":2,"concept":"Solve addition equations","explain":"Subtract to find the unknown part: 8.23 + p = 10.24 → p = 2.01; 2.45 + n = 5.24 → n = 2.79; V + 42.89 = 100.01 → V = 57.12. With three numbers, add the known ones first: 5.52 + 2.01 + m = 9.21 → m = 1.68. When both sides have sums, find the value of the full side first: 2.30 + 3.10 = 5.40, so 1.50 + v = 5.40 and v = 3.9.",
    "variants": [
      {"type":"num","mode":"normal","level":"easy","q":"8.23 + p = 10.24. p = ?","answer":"2.01","calc":"10.24-8.23"},
      {"type":"num","mode":"normal","level":"easy","q":"2.45 + n = 5.24. n = ?","answer":"2.79","calc":"5.24-2.45"},
      {"type":"num","mode":"normal","level":"medium","q":"V + 42.89 = 100.01. V = ?","answer":"57.12","calc":"100.01-42.89"},
      {"type":"num","mode":"normal","level":"hard","q":"5.52 + 2.01 + m = 9.21. m = ?","answer":"1.68","calc":"9.21-5.52-2.01"},
      {"type":"num","mode":"normal","level":"hard","q":"2.30 + 3.10 = 1.50 + v. v = ?","answer":"3.9","calc":"2.30+3.10-1.50"},
      {"type":"tf","mode":"timed","seconds":12,"level":"medium","q":"In 2.45 + n = 5.24, n = 2.79.","answer":0}
    ] },
  {"id":"M3","lesson":2,"concept":"Solve subtraction equations","explain":"When something is subtracted from the unknown, add to find it: T − 2.45 = 0.26 → T = 2.71; h − 6.82 = 1.23 → h = 8.05; j − 12.40 = 3.01 → j = 15.41. Check by subtracting again: 2.71 − 2.45 = 0.26.",
    "variants": [
      {"type":"num","mode":"normal","level":"easy","q":"T − 2.45 = 0.26. T = ?","answer":"2.71","calc":"0.26+2.45"},
      {"type":"num","mode":"normal","level":"medium","q":"h − 6.82 = 1.23. h = ?","answer":"8.05","calc":"1.23+6.82"},
      {"type":"num","mode":"normal","level":"medium","q":"j − 12.40 = 3.01. j = ?","answer":"15.41","calc":"3.01+12.40"},
      {"type":"mc","mode":"timed","seconds":15,"level":"medium","q":"How can you check that T = 2.71 in T − 2.45 = 0.26?","options":["2.71 − 2.45 = 0.26","2.71 + 2.45 = 0.26","2.71 − 0.26 = 2.45 + 1","0.26 − 2.45 = 2.71"],"answer":0},
      {"type":"tf","mode":"timed","seconds":12,"level":"medium","q":"In h − 6.82 = 1.23, h is smaller than 6.82.","answer":1}
    ] },
  {"id":"M4","lesson":2,"concept":"Write the equation with a bar model","explain":"A part-to-whole bar model shows the whole on top and the parts under it. Basem’s bus: whole 492.64 km, part 396.48 km to El Tor, so 396.48 + x = 492.64 and x = 96.16 km. Jana’s backpack: 1.5 + 2.451 + x = 4.535, so the snack is 0.584 kg. Two melons: 1.36 + x = 2.64, so x = 1.28 kg. The green turtle is 0.58 m longer than 0.78 m: 0.78 + 0.58 = x = 1.36 m.",
    "variants": [
      {"type":"mc","mode":"normal","level":"medium","q":"Basem’s bus goes 492.64 km from Cairo to Ras Muhammad. It stops in El Tor after 396.48 km. Which equation finds how far El Tor is from Ras Muhammad?","options":["396.48 + x = 492.64","492.64 + 396.48 = x","x − 396.48 = 492.64","396.48 − x = 492.64"],"answer":0,"fig":"barModel","pic":{"whole":"492.64","parts":["396.48","x"],"w":[4,1]}},
      {"type":"num","mode":"normal","level":"medium","q":"Solve: 396.48 + x = 492.64. How far is El Tor from Ras Muhammad?","answer":"96.16","calc":"492.64-396.48","unit":"km"},
      {"type":"num","mode":"normal","level":"hard","q":"Jana’s backpack: a 1.5 kg water bottle, 2.451 kg of books and a snack. The full backpack weighs 4.535 kg. How much does the snack weigh?","answer":"0.584","calc":"4.535-1.5-2.451","unit":"kg"},
      {"type":"mc","mode":"normal","level":"medium","q":"Two melons weigh 2.64 kg in all. One weighs 1.36 kg. Which equation matches?","options":["1.36 + x = 2.64","2.64 + 1.36 = x","x − 2.64 = 1.36","1.36 − x = 2.64"],"answer":0,"fig":"barModel","pic":{"whole":"2.64","parts":["1.36","x"]}},
      {"type":"num","mode":"normal","level":"medium","q":"Two melons weigh 2.64 kg in all. One weighs 1.36 kg. What does the other weigh?","answer":"1.28","calc":"2.64-1.36","unit":"kg"},
      {"type":"num","mode":"normal","level":"medium","q":"Basem saw a hawksbill turtle 0.78 m long. Jana saw a green turtle 0.58 m longer. How long was the green turtle?","answer":"1.36","calc":"0.78+0.58","unit":"m"},
      {"type":"mc","mode":"normal","level":"medium","q":"In the bar model, the whole is 4.535 and the parts are 1.5, 2.451 and x. Which equation is it?","options":["1.5 + 2.451 + x = 4.535","4.535 + 1.5 + 2.451 = x","1.5 + 2.451 = x + 4.535 + 1","x − 1.5 = 2.451 + 4.535"],"answer":0,"fig":"barModel","pic":{"whole":"4.535","parts":["1.5","2.451","x"],"w":[3,5,2]}}
    ] },
  {"id":"M5","lesson":2,"boss":true,"concept":"Ezz’s run and Ras Muhammad National Park","explain":"Ezz ran 5.24 km on Monday and 6.50 km on Wednesday, 15 km in all: 5.24 + 6.50 + x = 15, where x is the distance of the third day: x = 3.26 km. Ras Muhammad National Park, in the south of Sinai, has 480 km² in all; the marine area is 345 km². The variable is the land area: 345 + x = 480, x = 135 km².",
    "variants": [
      {"type":"mc","mode":"boss","level":"medium","q":"Ezz ran three days: 5.24 km on Monday, 6.50 km on Wednesday, 15 km in all. What does the variable represent?","options":["The distance he ran on the third day","The total distance of the week","The distance of Monday and Wednesday together","The number of days he ran"],"answer":0},
      {"type":"num","mode":"boss","level":"hard","q":"Ezz: 5.24 + 6.50 + x = 15. How far did he run on the third day?","answer":"3.26","calc":"15-5.24-6.50","unit":"km"},
      {"type":"mc","mode":"boss","level":"medium","q":"Ras Muhammad National Park is 480 km² in all, and the marine area is 345 km². What would the variable represent?","options":["The land area of the park","The whole area of the park","The marine area","The length of the coral reef"],"answer":0},
      {"type":"num","mode":"boss","level":"medium","q":"Ras Muhammad: 345 + x = 480. Find the land area.","answer":"135","calc":"480-345","unit":"km²"},
      {"type":"mc","mode":"boss","level":"medium","q":"Estimate the land area of Ras Muhammad (480 − 345).","options":["About 130 km²","About 800 km²","About 30 km²","About 300 km²"],"answer":0}
    ] },

  /* ---------- Lesson 3 · Telling Stories with Numbers (pages 49-50) ---------- */
  {"id":"N1","lesson":3,"concept":"Error analysis: Taha’s rain problem","explain":"Northern Sinai usually gets 12.5 cm of rain in winter; last year only 9.17 cm. The question asks for the DIFFERENCE, so the equation is 12.5 − 9.17 = x, x = 3.33 cm. Taha wrote 12.5 + 9.17 = x: his adding was right (21.67), but he chose the wrong operation.",
    "variants": [
      {"type":"mc","mode":"normal","level":"medium","q":"Taha wrote 12.5 + 9.17 = x to find the difference between 12.5 cm and 9.17 cm of rain. What did he do incorrectly?","options":["He added, but a difference needs subtraction","He added the numbers wrongly","He used a letter for the unknown","He wrote the units in cm"],"answer":0},
      {"type":"tf","mode":"timed","seconds":12,"level":"medium","q":"Taha’s adding was correct: 12.5 + 9.17 = 21.67.","answer":0},
      {"type":"mc","mode":"normal","level":"medium","q":"Which is the correct equation for the difference?","options":["12.5 − 9.17 = x","12.5 + 9.17 = x","9.17 − 12.5 = x","12.5 × 9.17 = x"],"answer":0},
      {"type":"num","mode":"normal","level":"medium","q":"Solve: 12.5 − 9.17 = x. What is the difference?","answer":"3.33","calc":"12.5-9.17","unit":"cm"},
      {"type":"fill","mode":"timed","seconds":12,"level":"easy","q":"“What is the difference between the two amounts?” needs ___.","options":["subtraction","addition","multiplication"],"answer":0}
    ] },
  {"id":"N2","lesson":3,"concept":"Which equation tells the story?","explain":"Read the story, then choose the operation. Ola needs 10 m of wood and found 3.5 m: 3.5 + x = 10 (or 10 − 3.5 = x), so she needs 6.5 m more. Nagi runs 3.5 km every day for 10 days: 3.5 × 10 = x, so he runs 35 km. A story for 2.8 + 1.5 = C puts two amounts together: C = 4.3.",
    "variants": [
      {"type":"mc","mode":"normal","level":"medium","q":"Ola needs 10 m of wood for a garden bed. She found 3.5 m in her garage. Which equation matches?","options":["3.5 + x = 10","3.5 + 10 = x","x − 3.5 = 10","3.5 × 10 = x"],"answer":0},
      {"type":"num","mode":"normal","level":"easy","q":"Ola: 3.5 + x = 10. How many more meters of wood does she need?","answer":"6.5","calc":"10-3.5","unit":"m"},
      {"type":"mc","mode":"normal","level":"medium","q":"Nagi runs 3.5 km each day. He runs for 10 days. Which equation matches?","options":["3.5 × 10 = x","3.5 + 10 = x","10 − 3.5 = x","3.5 + x = 10"],"answer":0},
      {"type":"num","mode":"normal","level":"medium","q":"Nagi: 3.5 × 10 = x. How far will he have run?","answer":"35","calc":"3.5*10","unit":"km"},
      {"type":"mc","mode":"normal","level":"hard","q":"Which story matches 2.8 + 1.5 = C?","options":["Basem walked 2.8 km, then 1.5 km more. How far did he walk in all?","Basem had 2.8 kg of figs and ate 1.5 kg. How much is left?","Basem walks 2.8 km a day for 1.5 days. How far does he walk?","A 2.8 m rope is cut into pieces of 1.5 m. How many pieces?"],"answer":0},
      {"type":"num","mode":"timed","seconds":15,"level":"easy","q":"2.8 + 1.5 = C. C = ?","answer":"4.3","calc":"2.8+1.5"}
    ] },
  {"id":"N3","lesson":3,"concept":"Solve equations to the thousandths","explain":"Use the relation between addition and subtraction and line up the decimal points. x + 2.75 = 12.5 → x = 12.5 − 2.75 = 9.75. 124.6 − 72.25 = m → m = 52.35. 34.750 − s = 15.25 → s = 34.750 − 15.25 = 19.5.",
    "variants": [
      {"type":"num","mode":"normal","level":"medium","q":"x + 2.75 = 12.5. x = ?","answer":"9.75","calc":"12.5-2.75"},
      {"type":"num","mode":"normal","level":"medium","q":"124.6 − 72.25 = m. m = ?","answer":"52.35","calc":"124.6-72.25"},
      {"type":"num","mode":"normal","level":"hard","q":"34.750 − s = 15.25. s = ?","answer":"19.5","calc":"34.750-15.25"},
      {"type":"mc","mode":"normal","level":"hard","q":"34.750 − s = 15.25. Which finds s?","options":["s = 34.750 − 15.25","s = 34.750 + 15.25","s = 15.25 − 34.750","s = 15.25 + 34.750"],"answer":0},
      {"type":"tf","mode":"timed","seconds":12,"level":"medium","q":"In x + 2.75 = 12.5, x = 9.75.","answer":0}
    ] },
  {"id":"N4","lesson":3,"boss":true,"concept":"Mount Sinai: two paths to the summit","explain":"Tens of thousands of visitors climb Jebel Mūsā (Mount Sinai) every year. There are two paths: the first can take from 3/4 of an hour to 3 hours, the second about 2.5 hours. For 1.25 + x = 2.5, x = 2.5 − 1.25 = 1.25 hours, for example: “A climber walked 1.25 hours on the second path. How much longer until the summit?”",
    "variants": [
      {"type":"num","mode":"boss","level":"medium","q":"Mount Sinai: 1.25 + x = 2.5. x = ?","answer":"1.25","calc":"2.5-1.25","unit":"hours"},
      {"type":"mc","mode":"boss","level":"medium","q":"The second path to the summit takes about 2.5 hours. In 1.25 + x = 2.5, what can 2.5 represent?","options":["The whole time of the second path","The time already walked","The time still left","The number of paths"],"answer":0},
      {"type":"mc","mode":"boss","level":"hard","q":"Which story matches 1.25 + x = 2.5?","options":["A climber walked 1.25 hours on the 2.5-hour path. How much longer to the summit?","A climber walked 1.25 hours, then 2.5 hours more. How long in all?","Two climbers each walked 2.5 hours. How long in all?","A climber walks 1.25 hours a day for 2.5 days. How long?"],"answer":0},
      {"type":"num","mode":"boss","level":"hard","q":"Solve the book’s equation: 124.6 − 72.25 = m, then add 2.75. What do you get?","answer":"55.1","calc":"124.6-72.25+2.75"},
      {"type":"tf","mode":"boss","level":"medium","q":"The second path (about 2.5 hours) can be faster than the slowest climb of the first path (3 hours).","answer":0}
    ] },

  /* ---------- Lesson 4 · Prime Factorization (pages 51-53) ---------- */
  {"id":"O1","lesson":4,"concept":"Prime or composite?","explain":"A prime number has only 2 factors: 1 and itself (2, 3, 5, 7, 11). A composite number has more than two factors (4, 6, 9, 24). The number 1 has only one factor, so it is neither prime nor composite.",
    "variants": [
      {"type":"mc","mode":"normal","level":"medium","q":"What is the best explanation for the difference between prime and composite numbers?","options":["A prime number has only 2 factors: 1 and itself. A composite number has more than two factors.","A prime number has only 1 as a factor and a composite number has two factors.","A prime number has only 2 factors. A composite number has 4 or more factors.","A prime number can be factored in more than one way."],"answer":0},
      {"type":"term","mode":"normal","level":"easy","q":"A number with only 2 factors: 1 and itself.","answer":"Prime number","choices":["Composite number","Multiple","Product"]},
      {"type":"term","mode":"normal","level":"easy","q":"A number with more than two factors.","answer":"Composite number","choices":["Prime number","Variable","Factor tree"]},
      {"type":"multi","mode":"normal","level":"medium","q":"Choose ALL the prime numbers.","options":["2","7","11","9","15","1"],"answer":[0,1,2]},
      {"type":"tf","mode":"timed","seconds":10,"level":"easy","q":"9 is a prime number.","answer":1},
      {"type":"mc","mode":"timed","seconds":12,"level":"medium","q":"Is 1 prime, composite or neither?","options":["Neither: it has only one factor","Prime","Composite"],"answer":0}
    ] },
  {"id":"O2","lesson":4,"concept":"Factor pairs","explain":"A factor pair is two numbers that multiply to give the number. 24 has the factor pairs 1 × 24, 2 × 12, 3 × 8 and 4 × 6. A composite number has a factor pair other than 1 and itself; a prime number does not.",
    "variants": [
      {"type":"mc","mode":"timed","seconds":12,"level":"easy","q":"Which is a factor pair of 24?","options":["3 × 8","3 × 7","5 × 5","2 × 10"],"answer":0},
      {"type":"multi","mode":"normal","level":"medium","q":"Choose ALL the factor pairs of 24.","options":["1 × 24","2 × 12","4 × 6","3 × 7","5 × 4"],"answer":[0,1,2]},
      {"type":"mc","mode":"normal","level":"medium","q":"The teacher says 15. Is it prime or composite? Share a factor pair other than 1 and 15.","options":["Composite: 3 × 5","Prime: 1 × 15","Composite: 2 × 7","Prime: it is odd"],"answer":0},
      {"type":"tf","mode":"timed","seconds":12,"level":"medium","q":"13 has a factor pair other than 1 × 13.","answer":1},
      {"type":"fill","mode":"timed","seconds":12,"level":"easy","q":"Two numbers that multiply to give a number are a ___.","options":["factor pair","common multiple","variable"],"answer":0}
    ] },
  {"id":"O3","lesson":4,"concept":"Factor trees and prime factorization","explain":"A factor tree breaks a number into factor pairs until only prime numbers remain. Circle the prime factors and draw a square around the composite factors. 24 = 2 × 2 × 2 × 3 (whichever pair you start with), 18 = 2 × 3 × 3, 20 = 2 × 2 × 5 and 75 = 3 × 5 × 5.",
    "variants": [
      {"type":"mc","mode":"normal","level":"medium","q":"What is the prime factorization of 24?","options":["2 × 2 × 2 × 3","4 × 6","2 × 12","2 × 2 × 6"],"answer":0,"fig":"factorTree","pic":{"tree":{"v":24,"c":[{"v":4,"c":[{"v":2},{"v":2}]},{"v":6,"c":[{"v":2},{"v":3}]}]}}},
      {"type":"mc","mode":"normal","level":"medium","q":"Complete the factor tree of 18. What number goes in place of the question mark?","options":["6","3","9","15"],"answer":0,"fig":"factorTree","pic":{"tree":{"v":18,"c":[{"v":3},{"v":6,"q":true}]}}},
      {"type":"mc","mode":"normal","level":"medium","q":"What is the prime factorization of 20?","options":["2 × 2 × 5","2 × 10","4 × 5","2 × 5"],"answer":0,"fig":"factorTree","pic":{"tree":{"v":20,"c":[{"v":2},{"v":10,"q":true}]}}},
      {"type":"mc","mode":"normal","level":"hard","q":"What is the prime factorization of 75?","options":["3 × 5 × 5","5 × 15","3 × 25","5 × 5 × 5"],"answer":0},
      {"type":"fill","mode":"timed","seconds":12,"level":"easy","q":"In a factor tree, the prime factors are put in a ___.","options":["circle","square","triangle"],"answer":0},
      {"type":"tf","mode":"timed","seconds":12,"level":"medium","q":"Two different factor trees of 24 give the same prime factors.","answer":0},
      {"type":"term","mode":"normal","level":"medium","q":"A drawing that breaks a number into factors until only primes remain.","answer":"Factor tree","choices":["Bar model","Venn diagram","Number line"]}
    ] },
  {"id":"O4","lesson":4,"concept":"Products of prime factors","explain":"Multiply the prime factors to find the number, then list all its factors: 2 × 2 × 5 = 20 (factors 1, 2, 4, 5, 10, 20); 2 × 3 × 7 = 42 (1, 2, 3, 6, 7, 14, 21, 42); 2 × 2 × 2 × 7 = 56 (1, 2, 4, 7, 8, 14, 28, 56).",
    "variants": [
      {"type":"num","mode":"timed","seconds":15,"level":"easy","q":"2 × 2 × 5 = ?","answer":"20","calc":"2*2*5"},
      {"type":"num","mode":"timed","seconds":15,"level":"easy","q":"2 × 3 × 7 = ?","answer":"42","calc":"2*3*7"},
      {"type":"num","mode":"normal","level":"medium","q":"2 × 2 × 2 × 7 = ?","answer":"56","calc":"2*2*2*7"},
      {"type":"multi","mode":"normal","level":"medium","q":"2 × 2 × 5 = 20. Choose ALL the other factors of 20.","options":["4","10","1","3","8","6"],"answer":[0,1,2]},
      {"type":"multi","mode":"normal","level":"hard","q":"2 × 2 × 2 × 7 = 56. Choose ALL the factors of 56.","options":["8","14","28","6","12","21"],"answer":[0,1,2]},
      {"type":"tf","mode":"timed","seconds":12,"level":"medium","q":"6 is a factor of 42 because 2 × 3 = 6 and both are in 2 × 3 × 7.","answer":0}
    ] },
  {"id":"O5","lesson":4,"boss":true,"concept":"The Suez Canal: is 193 prime?","explain":"The Suez Canal is 193 km long and a ship takes 12 to 16 hours to go through. To share 193 km equally over 12 hours, 12 must be a factor of 193. But 193 is prime: its only factors are 1 and 193, so 12 is not a factor, and a factor tree cannot break 193 down. Basem is correct.",
    "variants": [
      {"type":"mc","mode":"boss","level":"medium","q":"Is 193 prime or composite?","options":["Prime: its only factors are 1 and 193","Composite: it is odd","Composite: 193 = 12 × 16","Neither"],"answer":0},
      {"type":"tf","mode":"boss","level":"medium","q":"12 is a factor of 193.","answer":1},
      {"type":"mc","mode":"boss","level":"hard","q":"Akram starts a factor tree with 1 and 193. Basem says it will not help. Is Basem correct?","options":["Correct: 193 is prime, so it cannot be broken into other factors","Incorrect: the tree shows 12 is a factor","Incorrect: every number has a factor tree with 12","Correct: 1 is a prime number"],"answer":0},
      {"type":"num","mode":"boss","level":"medium","q":"The Suez Canal is 193 km long. How many kilometers longer is it than 180 km?","answer":"13","calc":"193-180","unit":"km"},
      {"type":"tf","mode":"boss","level":"easy","q":"Before the Suez Canal, ships had to sail around the southern tip of Africa.","answer":0}
    ] },

  /* ---------- Lesson 5 · Greatest Common Factors (pages 54-55) ---------- */
  {"id":"P1","lesson":5,"concept":"Common factors","explain":"Common factors are the factors two numbers share. Factors of 20: 1, 2, 4, 5, 10, 20. Factors of 28: 1, 2, 4, 7, 14, 28. Their common factors are 1, 2 and 4.",
    "variants": [
      {"type":"multi","mode":"normal","level":"medium","q":"Choose ALL the factors of 20.","options":["1","4","5","10","3","8","15"],"answer":[0,1,2,3]},
      {"type":"multi","mode":"normal","level":"medium","q":"Choose ALL the factors of 28.","options":["2","7","14","28","5","8","12"],"answer":[0,1,2,3]},
      {"type":"mc","mode":"normal","level":"medium","q":"What are the common factors of 20 and 28?","options":["1, 2, 4","1, 2, 4, 5, 7","2, 4, 10","4, 7"],"answer":0},
      {"type":"term","mode":"normal","level":"easy","q":"Factors that two numbers share.","answer":"Common factors","choices":["Common multiples","Prime numbers","Factor pairs"]},
      {"type":"tf","mode":"timed","seconds":10,"level":"easy","q":"1 is a common factor of any two numbers.","answer":0},
      {"type":"num","mode":"timed","seconds":15,"level":"easy","q":"What is the product of the prime numbers 2 × 3 × 3?","answer":"18","calc":"2*3*3"},
      {"type":"num","mode":"timed","seconds":15,"level":"easy","q":"What is the product of the prime numbers 3 × 3 × 5?","answer":"45","calc":"3*3*5"}
    ] },
  {"id":"P2","lesson":5,"concept":"The greatest common factor (GCF) of 42 and n","explain":"The GCF is the greatest factor two numbers share. 42 = 2 × 3 × 7 (factor tree: 2 and 21, then 21 = 3 × 7). n = 2 × 2 × 7 = 28. Common factors of 42 and 28: 1, 2, 7, 14, so the GCF is 14 (the product of the shared prime factors 2 × 7).",
    "variants": [
      {"type":"multi","mode":"normal","level":"medium","q":"Choose ALL the factors of 42.","options":["6","7","14","21","4","8","12"],"answer":[0,1,2,3]},
      {"type":"mc","mode":"normal","level":"medium","q":"The factor tree of 42 starts with 2. What number goes in place of the question mark?","options":["21","20","40","7"],"answer":0,"fig":"factorTree","pic":{"tree":{"v":42,"c":[{"v":2},{"v":21,"q":true}]}}},
      {"type":"mc","mode":"normal","level":"medium","q":"What is the prime factorization of 42?","options":["2 × 3 × 7","2 × 21","6 × 7","2 × 2 × 7"],"answer":0},
      {"type":"num","mode":"normal","level":"easy","q":"Find the value of n: n = 2 × 2 × 7","answer":"28","calc":"2*2*7"},
      {"type":"mc","mode":"normal","level":"hard","q":"n = 28. What are the common factors of 42 and n?","options":["1, 2, 7, 14","1, 2, 4, 7","2, 7","1, 2, 3, 7, 14"],"answer":0},
      {"type":"num","mode":"normal","level":"hard","q":"n = 28. What is the greatest common factor of 42 and n?","answer":"14","calc":"2*7"},
      {"type":"term","mode":"normal","level":"medium","q":"The greatest factor that two numbers share.","answer":"GCF","choices":["LCM","Product","Prime number"]}
    ] },
  {"id":"P3","lesson":5,"concept":"Using the GCF: Sharm El Sheikh tickets","explain":"Two groups take public transportation in Sharm El Sheikh and every ticket costs the same. One group spends 16 LE and the other 12 LE. The ticket price must be a factor of both 16 and 12, so at most it is their GCF: 4 LE.",
    "variants": [
      {"type":"mc","mode":"normal","level":"medium","q":"One group spends 16 LE and the other 12 LE; each ticket costs the same. At most, how much does each ticket cost?","options":["4 LE","2 LE","6 LE","8 LE"],"answer":0},
      {"type":"num","mode":"normal","level":"medium","q":"What is the GCF of 16 and 12?","answer":"4","calc":"16-12"},
      {"type":"mc","mode":"normal","level":"medium","q":"Why is a ticket price of 8 LE not possible?","options":["8 is not a factor of 12","8 is not a factor of 16","8 is a prime number","8 is too small"],"answer":0},
      {"type":"num","mode":"normal","level":"medium","q":"With 4 LE tickets, how many tickets did the 16 LE group buy?","answer":"4","calc":"16/4"},
      {"type":"tf","mode":"timed","seconds":12,"level":"easy","q":"The GCF of two numbers is never greater than the smaller number.","answer":0}
    ] },
  {"id":"P4","lesson":5,"boss":true,"concept":"Diving in the Red Sea","explain":"A popular dive is an 80-meter-long steamship that sank in 1876 to the seabed 30 meters below. The divers stop at equal intervals (not every 1 m and not the whole distance at once). Shadi dives to 30 m: 2, 3, 5, 6, 10 or 15 m. Taha dives to 15 m: 3 or 5 m. The greatest interval they both can take is 5 m.",
    "variants": [
      {"type":"mc","mode":"boss","level":"medium","q":"Shadi dives to 30 m and stops at equal intervals (not every 1 m, not the whole distance). What are all the options?","options":["2 m, 3 m, 5 m, 6 m, 10 m, 15 m","2 m, 3 m, 5 m","2 m, 3 m, 5 m, 6 m","2 m, 3 m, 5 m, 6 m, 10 m, 12 m"],"answer":0},
      {"type":"mc","mode":"boss","level":"medium","q":"Taha dives to 15 m. What are his options of intervals?","options":["3 m, 5 m","2 m, 3 m, 5 m","2 m, 3 m, 5 m, 6 m","2 m, 3 m, 5 m, 6 m, 10 m"],"answer":0},
      {"type":"mc","mode":"boss","level":"hard","q":"Both divers stop at the same equal intervals. What is the greatest distance they can both dive before stopping?","options":["5 m","2 m","3 m","10 m"],"answer":0},
      {"type":"tf","mode":"boss","level":"medium","q":"12 m is a possible interval for Shadi, because 12 is a factor of 30.","answer":1},
      {"type":"num","mode":"boss","level":"medium","q":"The steamship sank in 1876. How many years later is 2026?","answer":"150","calc":"2026-1876"}
    ] },

  /* ---------- Lesson 6 · Identifying Multiples (pages 56-58) ---------- */
  {"id":"Q1","lesson":6,"concept":"What is a multiple?","explain":"A multiple of a number is the product of that number and a whole number. Skip counting is a way to find multiples: multiples of 6 are 6, 12, 18, 24, 30, …; of 7: 7, 14, 21, 28, 35, 42, …; of 10: 10, 20, 30, …, 80, … A number has unlimited multiples but a limited number of factors.",
    "variants": [
      {"type":"mc","mode":"timed","seconds":15,"level":"easy","q":"What are the first five multiples of 6?","options":["6, 12, 18, 24, 30","1, 2, 3, 6","6, 11, 16, 21, 26","12, 18, 24, 30, 36"],"answer":0},
      {"type":"mc","mode":"timed","seconds":15,"level":"easy","q":"What are the first six multiples of 7?","options":["7, 14, 21, 28, 35, 42","1, 7","7, 17, 27, 37, 47, 57","14, 21, 28, 35, 42, 49"],"answer":0},
      {"type":"fill","mode":"timed","seconds":12,"level":"easy","q":"Skip counting is a way to find ___ of a number.","options":["multiples","factors","prime factors"],"answer":0},
      {"type":"tf","mode":"normal","level":"medium","q":"Aya thinks a number has unlimited multiples but a limited number of factors. She is right.","answer":0},
      {"type":"num","mode":"normal","level":"easy","q":"What is the eighth multiple of 10?","answer":"80","calc":"8*10"},
      {"type":"term","mode":"normal","level":"medium","q":"The product of a number and a whole number, found by skip counting.","answer":"Multiple","choices":["Factor","Prime number","Variable"]}
    ] },
  {"id":"Q2","lesson":6,"concept":"Eggs and juice for Adel’s breakfast","explain":"Each carton has 12 eggs: 12, 24, 36, 48, 60, 72 eggs for 1 to 6 cartons. The juice comes in packs of 9: 9, 18, 27, 36, 45, 54. For 36 people, each with 1 egg and 1 juice, Adel needs 36 of each: 3 cartons of eggs and 4 packs of juice (36 is a multiple of both 12 and 9).",
    "variants": [
      {"type":"num","mode":"normal","level":"easy","q":"Each carton has 12 eggs. How many eggs are in 4 cartons?","answer":"48","calc":"12*4"},
      {"type":"num","mode":"normal","level":"easy","q":"Juice comes in packs of 9. How many bottles are in 6 packs?","answer":"54","calc":"9*6"},
      {"type":"num","mode":"normal","level":"medium","q":"Adel needs 1 egg for each of 36 people. How many cartons of 12 eggs?","answer":"3","calc":"36/12"},
      {"type":"num","mode":"normal","level":"medium","q":"Adel needs 1 juice for each of 36 people. How many packs of 9?","answer":"4","calc":"36/9"},
      {"type":"tf","mode":"timed","seconds":12,"level":"medium","q":"36 is a multiple of both 12 and 9.","answer":0},
      {"type":"match","mode":"normal","level":"medium","q":"Match the number of cartons to the number of eggs.","left":["2 cartons","3 cartons","5 cartons"],"right":["36","60","24"],"answer":[2,0,1]}
    ] },
  {"id":"Q3","lesson":6,"concept":"Common multiples and the Venn diagram","explain":"Common multiples are in the lists of both numbers. Multiples of 5 (5 … 25) and of 2 (2 … 20) share 10 and 20. Of 8, 4 and 6 the common multiple listed is 24. The first twelve multiples of 3 and of 4 share 12, 24 and 36: in a Venn diagram they go in the shared center.",
    "variants": [
      {"type":"mc","mode":"normal","level":"medium","q":"First five multiples of 5 and first ten multiples of 2: which common multiples did you list?","options":["10, 20","10","5, 10, 20","2, 5, 10"],"answer":0},
      {"type":"mc","mode":"normal","level":"hard","q":"First five multiples of 8, first six of 4, first five of 6: which common multiple of 8, 4 and 6 did you list?","options":["24","12","8","48"],"answer":0},
      {"type":"mc","mode":"normal","level":"medium","q":"First twelve multiples of 3 and of 4: which common multiples did you list?","options":["12, 24, 36","12","7, 14, 21","3, 4, 12"],"answer":0},
      {"type":"tap","mode":"normal","level":"medium","q":"Where does 24 go in the Venn diagram of the first 12 multiples of 3 and 4?","diagram":"multVenn","pic":{"a":3,"b":4,"upTo":12,"blank":true},"answer":"mvM"},
      {"type":"tap","mode":"normal","level":"medium","q":"Where does 16 go in the Venn diagram of the first 12 multiples of 3 and 4?","diagram":"multVenn","pic":{"a":3,"b":4,"upTo":12,"blank":true},"answer":"mvR"},
      {"type":"tap","mode":"normal","level":"medium","q":"Where does 21 go in the Venn diagram of the first 12 multiples of 3 and 4?","diagram":"multVenn","pic":{"a":3,"b":4,"upTo":12,"blank":true},"answer":"mvL"},
      {"type":"mc","mode":"normal","level":"medium","q":"Look at the Venn diagram. Which numbers are in the shared center?","options":["12, 24, 36","3, 4","6, 8, 9","24, 48"],"answer":0,"fig":"multVenn","pic":{"a":3,"b":4,"upTo":12,"show":[3,6,9,15,4,8,16,20]}}
    ] },
  {"id":"Q4","lesson":6,"concept":"Is it a common multiple?","explain":"A common multiple of 5 and 7 must be a multiple of both: 35, 70, 105 are; 14 and 21 are multiples of 7 only, 55 of 5 only. 24 and 32 are common multiples of 2, 4 and 8 (both can be divided by them), but not of 3, 6 or 7.",
    "variants": [
      {"type":"multi","mode":"normal","level":"hard","q":"Select the three numbers that are NOT common multiples of 5 and 7.","options":["14","21","55","35","70","105"],"answer":[0,1,2]},
      {"type":"multi","mode":"normal","level":"hard","q":"Select the three numbers for which 24 and 32 are common multiples.","options":["2","4","8","3","6","7"],"answer":[0,1,2]},
      {"type":"tf","mode":"timed","seconds":12,"level":"medium","q":"35 is a common multiple of 5 and 7.","answer":0},
      {"type":"tf","mode":"timed","seconds":12,"level":"medium","q":"55 is a common multiple of 5 and 7.","answer":1},
      {"type":"mc","mode":"normal","level":"medium","q":"Why is 32 NOT a multiple of 6?","options":["32 is not in the list 6, 12, 18, 24, 30, 36","32 is an even number","32 is greater than 6","32 is a multiple of 8"],"answer":0}
    ] },
  {"id":"Q5","lesson":6,"boss":true,"concept":"The buses to Ras Abu Galum","explain":"Ras Abu Galum Protectorate is in the northeast corner of Sinai, along the Gulf of Aqaba. Weekday buses leave at 3 a.m. and then every 3 hours until 12 p.m.: 3, 6, 9, 12. Weekend buses leave at 6 a.m. and then every 2 hours until 12 p.m.: 6, 8, 10, 12. Omar can always catch a bus at 6 a.m. and 12 p.m. Doha’s train tracks: 5 pieces of 12 cm are 60 cm; with 4 cm pieces she needs 15.",
    "variants": [
      {"type":"mc","mode":"boss","level":"medium","q":"Weekday buses leave at 3 a.m., then every 3 hours; the last at 12 p.m. What times can Omar catch the bus?","options":["3:00, 6:00, 9:00, 12:00","3:00, 5:00, 7:00, 9:00, 11:00","3:00, 9:00, 12:00","3:00, 6:00, 9:00, 12:00, 1:00"],"answer":0,"fig":"skipLine","pic":{"from":3,"to":13,"first":3}},
      {"type":"mc","mode":"boss","level":"medium","q":"Weekend buses leave at 6 a.m., then every 2 hours until 12 p.m. What times can Omar catch the bus?","options":["6:00, 8:00, 10:00, 12:00","6:00, 7:00, 8:00, 9:00, 10:00, 11:00, 12:00","6:00, 9:00, 12:00","8:00, 10:00, 12:00"],"answer":0,"fig":"skipLine","pic":{"from":6,"to":12,"first":6}},
      {"type":"multi","mode":"boss","level":"hard","q":"What times can Omar always catch a bus, weekday or weekend? Choose ALL.","options":["6:00 a.m.","12:00 p.m.","3:00 a.m.","9:00 a.m.","8:00 a.m."],"answer":[0,1]},
      {"type":"num","mode":"boss","level":"medium","q":"Doha lays out train tracks; each piece is 12 cm. How long are the first 5 pieces laid end to end?","answer":"60","calc":"12*5","unit":"cm"},
      {"type":"num","mode":"boss","level":"hard","q":"How many 4 cm pieces of track make the same 60 cm?","answer":"15","calc":"60/4"}
    ] },

  /* ---------- Lesson 7 · Least Common Multiple (pages 59-61) ---------- */
  {"id":"R1","lesson":7,"concept":"Vocabulary check-in","explain":"Words of this unit: a composite number has more than one set of factor pairs; a factor is a number multiplied by another number to find a product; the product is the answer to a multiplication problem; skip counting finds multiples; one is a factor of all numbers; a prime number’s only factor pair is one and itself.",
    "variants": [
      {"type":"fill","mode":"timed","seconds":12,"level":"easy","q":"A ___ is the answer to a multiplication problem.","options":["product","factor","multiple"],"answer":0},
      {"type":"fill","mode":"timed","seconds":12,"level":"easy","q":"___ is a factor of all numbers.","options":["One","Two","Zero"],"answer":0},
      {"type":"fill","mode":"timed","seconds":14,"level":"medium","q":"A ___ is a number with more than one set of factor pairs.","options":["composite number","prime number","product"],"answer":0},
      {"type":"fill","mode":"timed","seconds":14,"level":"medium","q":"A ___ is a number multiplied by another number to find a product.","options":["factor","multiple","variable"],"answer":0},
      {"type":"fill","mode":"timed","seconds":12,"level":"easy","q":"The only factor pair of a ___ number is one and itself.","options":["prime","composite","even"],"answer":0},
      {"type":"match","mode":"normal","level":"medium","q":"Match each word to its example.","left":["Prime number","Composite number","Product of 3 × 4"],"right":["12","7","9"],"answer":[1,2,0]}
    ] },
  {"id":"R2","lesson":7,"concept":"Find the least common multiple (LCM)","explain":"The LCM is the smallest multiple two numbers share. List multiples until you find one in both lists: 6 (6, 12, 18) and 9 (9, 18) → 18. LCM of 2 and 3 = 6; 10 and 5 = 10; 3 and 8 = 24; 5 and 11 = 55; 5 and 6 = 30. Challenge: LCM of 7, 6 and 12 = 84.",
    "variants": [
      {"type":"num","mode":"normal","level":"easy","q":"LCM of 6 and 9 = ?","answer":"18","calc":"6*3"},
      {"type":"num","mode":"timed","seconds":15,"level":"easy","q":"LCM of 2 and 3 = ?","answer":"6","calc":"2*3"},
      {"type":"num","mode":"timed","seconds":15,"level":"easy","q":"LCM of 10 and 5 = ?","answer":"10","calc":"10"},
      {"type":"num","mode":"normal","level":"medium","q":"LCM of 3 and 8 = ?","answer":"24","calc":"3*8"},
      {"type":"num","mode":"normal","level":"medium","q":"LCM of 5 and 11 = ?","answer":"55","calc":"5*11"},
      {"type":"num","mode":"normal","level":"medium","q":"LCM of 5 and 6 = ?","answer":"30","calc":"5*6"},
      {"type":"term","mode":"normal","level":"medium","q":"The smallest multiple that two numbers share.","answer":"LCM","choices":["GCF","Factor","Product"]},
      {"type":"tf","mode":"timed","seconds":12,"level":"medium","q":"The LCM of 10 and 5 is 50.","answer":1}
    ] },
  {"id":"R3","lesson":7,"concept":"LCMs in the real world: kofta and bikes","explain":"Badr buys kofta in packages of 3 and aish baladi in packages of 12 and wants the same number of each: multiples of 3 are 3, 6, 9, 12…, of 12 are 12, 24…, so the minimum is 12 of each (4 packages of kofta, 1 of bread). Hend finishes a lap in 6 minutes and Jana in 8: they meet at the start again after 24 minutes.",
    "variants": [
      {"type":"num","mode":"normal","level":"medium","q":"Kofta comes in packages of 3, aish baladi in packages of 12. Badr wants the same number of each. What is the minimum number of each?","answer":"12","calc":"12"},
      {"type":"num","mode":"normal","level":"medium","q":"Badr buys 12 pieces of kofta in packages of 3. How many packages?","answer":"4","calc":"12/3"},
      {"type":"num","mode":"normal","level":"medium","q":"Hend finishes a lap in 6 minutes, Jana in 8 minutes. After how many minutes are they together at the start again?","answer":"24","calc":"6*4"},
      {"type":"mc","mode":"normal","level":"medium","q":"Hend: 6, 12, 18, 24, 30. Jana: 8, 16, 24, 32. Which is the first time they meet?","options":["24 minutes","48 minutes","14 minutes","2 minutes"],"answer":0},
      {"type":"tf","mode":"timed","seconds":12,"level":"medium","q":"Hend and Jana also meet at the start after 48 minutes.","answer":0}
    ] },
  {"id":"R4","lesson":7,"boss":true,"concept":"Mangroves and the challenge","explain":"Mangrove trees grow in Ras Abu Galum Protectorate and other areas of Egypt. Nada plants a mangrove seedling every 4 days in one garden and every 6 days in another. Garden 1: 4, 8, 12…; garden 2: 6, 12…: she plants in both gardens on the same day again in 12 days. Challenge: the LCM of 7, 6 and 12 is 84.",
    "variants": [
      {"type":"num","mode":"boss","level":"medium","q":"Nada plants every 4 days in garden 1 and every 6 days in garden 2. Both today. In how many days will she plant in both gardens on the same day?","answer":"12","calc":"4*3"},
      {"type":"num","mode":"boss","level":"hard","q":"Challenge: find the LCM of 7, 6 and 12.","answer":"84","calc":"7*12"},
      {"type":"mc","mode":"boss","level":"medium","q":"Where do mangrove trees grow in Egypt, as the book says?","options":["In Ras Abu Galum Protectorate and other areas","Only in the Nile Delta","Only in Cairo","On Mount Sinai"],"answer":0},
      {"type":"tf","mode":"boss","level":"medium","q":"The LCM of 7, 6 and 12 is 42.","answer":1},
      {"type":"mc","mode":"boss","level":"hard","q":"Nada’s gardens: garden 1 on days 4, 8, 12, 16, 20, 24; garden 2 on days 6, 12, 18, 24. On which days does she plant in both?","options":["12 and 24","4 and 6","24 only","10 and 20"],"answer":0}
    ] },

  /* ---------- Lesson 8 · Factors or Multiples? (pages 62-63) ---------- */
  {"id":"S1","lesson":8,"concept":"Factors or multiples: 12 and 8","explain":"Factors are numbers that divide into a number (they are not greater than it); multiples are the number times 1, 2, 3, … (they are not smaller than it). 12 and 8 share the factors 1, 2 and 4, and the multiples 24, 48, … So their GCF is 4 and their LCM is 24.",
    "variants": [
      {"type":"mc","mode":"normal","level":"medium","q":"What are two factors that 12 and 8 share?","options":["2 and 4","3 and 4","6 and 8","24 and 48"],"answer":0},
      {"type":"mc","mode":"normal","level":"medium","q":"What are two multiples that 12 and 8 share?","options":["24 and 48","2 and 4","16 and 24","20 and 40"],"answer":0},
      {"type":"num","mode":"timed","seconds":15,"level":"easy","q":"GCF of 12 and 8 = ?","answer":"4","calc":"4"},
      {"type":"num","mode":"timed","seconds":15,"level":"easy","q":"LCM of 12 and 8 = ?","answer":"24","calc":"24"},
      {"type":"tf","mode":"timed","seconds":12,"level":"medium","q":"The factors of a number are never greater than the number; its multiples are never smaller.","answer":0},
      {"type":"table","mode":"normal","level":"medium","q":"Sort for the number 12.","cols":["Factors of 12","Multiples of 12"],"items":["3","4","6","24","36","60"],"answer":[0,0,0,1,1,1]}
    ] },
  {"id":"S2","lesson":8,"concept":"Greatest and least: GCF and LCM of pairs","explain":"Find both for each pair: 12 and 10 → GCF 2, LCM 60; 9 and 5 → GCF 1, LCM 45; 11 and 2 → GCF 1, LCM 22; 8 and 4 → GCF 4, LCM 8; 9 and 12 → GCF 3, LCM 36. When one number is a factor of the other (8 and 4), the GCF is the smaller and the LCM the greater.",
    "variants": [
      {"type":"num","mode":"normal","level":"medium","q":"LCM of 12 and 10 = ?","answer":"60","calc":"12*5"},
      {"type":"num","mode":"timed","seconds":15,"level":"easy","q":"GCF of 12 and 10 = ?","answer":"2","calc":"2"},
      {"type":"num","mode":"normal","level":"medium","q":"LCM of 9 and 5 = ?","answer":"45","calc":"9*5"},
      {"type":"num","mode":"normal","level":"medium","q":"LCM of 11 and 2 = ?","answer":"22","calc":"11*2"},
      {"type":"mc","mode":"normal","level":"medium","q":"8 and 4: GCF and LCM?","options":["GCF 4, LCM 8","GCF 8, LCM 4","GCF 2, LCM 32","GCF 1, LCM 32"],"answer":0},
      {"type":"mc","mode":"normal","level":"medium","q":"9 and 12: GCF and LCM?","options":["GCF 3, LCM 36","GCF 3, LCM 108","GCF 1, LCM 36","GCF 9, LCM 12"],"answer":0},
      {"type":"tf","mode":"timed","seconds":12,"level":"medium","q":"The GCF of 9 and 5 is 1.","answer":0}
    ] },
  {"id":"S3","lesson":8,"concept":"GCF or LCM? Story problems","explain":"Cutting or sharing into the largest equal groups with nothing left: GCF. Meeting again, or buying the same number when things come in packs: LCM. Omnia’s cloth (35 and 75 cm) → GCF 5 cm. Omar (every 12 days) and Rana (every 8) → LCM 24 days. Menna’s pencils (boxes of 8) and erasers (boxes of 10) → LCM 40. Nour’s 6 oranges and 12 dried fruit → GCF 6 bags. Malak’s 30 cakes and 48 baklava → GCF 6. Ola’s figs (9) and pomegranates (7) → LCM 63.",
    "variants": [
      {"type":"table","mode":"normal","level":"hard","q":"Do you have to find the GCF or the LCM?","cols":["GCF","LCM"],"items":["Omnia’s strips of cloth, as wide as possible","Omar and Rana exercise together again","Menna’s same number of pencils and erasers","Nour’s identical snack bags","Ola’s same number of figs and pomegranates"],"answer":[0,1,1,0,1]},
      {"type":"num","mode":"normal","level":"medium","q":"Omnia has strips of cloth 35 cm and 75 cm wide. She cuts both into equal strips as wide as possible. How wide?","answer":"5","calc":"5","unit":"cm"},
      {"type":"num","mode":"normal","level":"medium","q":"Omar exercises every 12 days, Rana every 8 days. Together today. In how many days together again?","answer":"24","calc":"12*2"},
      {"type":"num","mode":"normal","level":"medium","q":"Pencils come in boxes of 8, erasers in boxes of 10. Menna wants the same number of each. What is the minimum number of pencils?","answer":"40","calc":"8*5"},
      {"type":"num","mode":"normal","level":"medium","q":"Nour has 6 oranges and 12 pieces of dried fruit for identical snack bags with nothing left. What is the greatest number of bags?","answer":"6","calc":"6"},
      {"type":"num","mode":"normal","level":"hard","q":"Malak baked 30 servings of cakes and 48 of baklava, shared so each container has the same. How many containers?","answer":"6","calc":"6"},
      {"type":"num","mode":"normal","level":"medium","q":"Ola sells baskets of 9 figs and bags of 7 pomegranates, the same number of each. What is the smallest quantity of each?","answer":"63","calc":"9*7"}
    ] },
  {"id":"S4","lesson":8,"boss":true,"concept":"The Sinai Trail","explain":"The Sinai Trail winds from the Gulf of Aqaba to the top of Mount Saint Catherine. Mohamed hikes every 7 days and lifts weights every 4 days. He did both today, so he does both again after the LCM of 7 and 4: 28 days.",
    "variants": [
      {"type":"num","mode":"boss","level":"medium","q":"Mohamed hikes every 7 days and lifts weights every 4 days. Both today. In how many days will he do both again?","answer":"28","calc":"7*4"},
      {"type":"mc","mode":"boss","level":"medium","q":"To answer Mohamed’s question, do you find the GCF or the LCM?","options":["LCM of 7 and 4","GCF of 7 and 4","7 + 4","7 − 4"],"answer":0},
      {"type":"mc","mode":"boss","level":"medium","q":"Where does the Sinai Trail go?","options":["From the Gulf of Aqaba to the top of Mount Saint Catherine","From Cairo to Ras Muhammad","Along the Suez Canal","From El Tor to Taba"],"answer":0},
      {"type":"tf","mode":"boss","level":"hard","q":"The GCF of 7 and 4 is 1, so their LCM is 7 × 4 = 28.","answer":0},
      {"type":"mc","mode":"boss","level":"hard","q":"Malak shares 30 cakes and 48 baklava with nothing left. Which method and answer?","options":["GCF: 6 containers","LCM: 240 containers","GCF: 3 containers","LCM: 6 containers"],"answer":0}
    ] }
];
})();
