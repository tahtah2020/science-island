/* Math · Grade 5 · Unit 3 "Multiplication with Whole Numbers" · Languages track (English), first term 2026/2027
   Source: the English school book (Math Term 1), Unit 3 (pages 64-79), Concept 3.1 "Multiplying by 2-Digit Numbers": lessons 1-5.
   Idea letters (one per lesson, Units 1-2 used A-S): T L1 Using the Area Model to Multiply · U L2 The Distributive Property of Multiplication ·
   V L3 Multiplying by a 2-digit number using the algorithm · W L4 Multiplying Multi-Digit Numbers · X L5 Multiplication Problems in the Real World.   Boss ideas: T6, U6, V6, W5, X5.
   The book is an activity book with no printed answers: the numbers and situations are the book's own (Ali's walk, Eman's garden, Omar's buses, Badir, Mazen, Lamiaa, Reeda,
   the fennec fox, Akram, the Eastern Desert rain, Ashraf, the Match the Model table, the sandstorm, Mona's restaurant) and EVERY number answer is computed (calc, checked by tools/check_questions.js).
   Pictures (math/m5_art.js): areaModel, unitGrid, longMult (pictures above a question).
   Review notes:
   - Lesson 1: "How many times will 10 need to be multiplied by itself" is asked as "how many 10s are multiplied together" (1,000 = 10 × 10 × 10: three 10s), the clear reading.
   - Lesson 3: the Eastern Desert gets LESS than 25 mm a year, so the 25-year answer is asked as "less than 625 mm".
   - Lesson 4: the Match the Model letters are not asked; the models are shown or described instead. Model B (6,209 × 33 with 18,627 twice) and model E (8,222 split by 5 and 4) are the wrong ones;
     "is 37,254 reasonable" uses 18,627 + 18,627 from model B. Ashraf's wrong second row is only named (357 × 30 = 10,710, not 10,521), without guessing why.
   - Lesson 5: the tahini answer in liters (86.4 L) is asked as the book asks.
   - Not asked: drawing your own area model, "how many different ways" (open), Writing About Math and Check Your Understanding items.
   Generated together with questions_m5c3_ar.js (same ids, phrasings order and answers). */
(function () {
window.CHAPTER = { id: 'm5c3', title: 'Multiplication with Whole Numbers', grade: 'Grade 5', track: 'Languages' };

window.IDEAS = [
  /* ---------- Lesson 1 · Using the Area Model to Multiply (pages 65-67) ---------- */
  {"id":"T1","lesson":1,"concept":"Multiplying by 10, 100, 1,000 and 10,000","explain":"Multiplying by a power of ten puts zeros after the digit: 5 × 1,000 = 5,000, 4 × 10 = 40, 1,000 × 7 = 7,000. To find a missing factor, ask how many times: 10,000 × 8 = 80,000 and 2 × 1,000 = 2,000.",
    "variants": [
      {"type":"num","mode":"timed","level":"easy","q":"5 × 1,000 = ?","answer":"5000","calc":"5*1000","seconds":12},
      {"type":"num","mode":"timed","level":"easy","q":"4 × 10 = ?","answer":"40","calc":"4*10","seconds":10},
      {"type":"num","mode":"timed","level":"easy","q":"1,000 × 7 = ?","answer":"7000","calc":"1000*7","seconds":12},
      {"type":"num","mode":"timed","level":"easy","q":"10,000 × ? = 80,000","answer":"8","calc":"80000/10000","seconds":14},
      {"type":"num","mode":"timed","level":"easy","q":"2 × ? = 2,000","answer":"1000","calc":"2000/2","seconds":14},
      {"type":"mc","mode":"normal","level":"medium","q":"Which product equals 7,000?","options":["1,000 × 7","100 × 7","10 × 700 × 10","7 × 10,000"],"answer":0}
    ] },
  {"id":"T2","lesson":1,"concept":"Writing numbers with powers of ten","explain":"A number like 3,000 can be written as a digit times a power of ten: 3,000 = 3 × 1,000, 800 = 8 × 100, 70,000 = 7 × 10,000, 400,000 = 4 × 100,000, 50 = 5 × 10. 100 = 10 × 10, 1,000 = 10 × 10 × 10: count the zeros to know how many 10s are multiplied.",
    "variants": [
      {"type":"mc","mode":"timed","level":"easy","q":"3,000 = ?","options":["3 × 1,000","3 × 100","30 × 1,000","3 × 10,000"],"answer":0,"seconds":12},
      {"type":"mc","mode":"timed","level":"easy","q":"800 = ?","options":["8 × 100","8 × 10","80 × 100","8 × 1,000"],"answer":0,"seconds":12},
      {"type":"mc","mode":"normal","level":"medium","q":"400,000 = ?","options":["4 × 100,000","4 × 10,000","40 × 100,000","4 × 1,000,000"],"answer":0},
      {"type":"num","mode":"normal","level":"easy","q":"70,000 = 7 × ?","answer":"10000","calc":"70000/7"},
      {"type":"num","mode":"normal","level":"easy","q":"50 = 5 × ?","answer":"10","calc":"50/5"},
      {"type":"num","mode":"normal","level":"medium","q":"How many 10s are multiplied together to make 1,000? (10 × 10 × … = 1,000)","answer":"3","calc":"3"},
      {"type":"match","mode":"normal","level":"medium","q":"Match each number with the 10s multiplied to make it.","left":["100","10,000","100,000"],"right":["5 tens","2 tens","4 tens"],"answer":[1,2,0]}
    ] },
  {"id":"T3","lesson":1,"concept":"The area model: 234 × 27","explain":"Split each factor by place value: 234 = 200 + 30 + 4 and 27 = 20 + 7. Each small rectangle holds one partial product: 20 × 200 = 4,000, 20 × 30 = 600, 20 × 4 = 80, 7 × 200 = 1,400, 7 × 30 = 210, 7 × 4 = 28. Add them: 6,318.",
    "variants": [
      {"type":"mc","mode":"normal","level":"easy","q":"To draw the area model of 234 × 27, how do we split 234?","options":["200 + 30 + 4","2 + 3 + 4","23 + 4","200 + 34 + 4"],"answer":0},
      {"type":"num","mode":"normal","level":"easy","q":"What goes in the shaded cell? (20 × 200)","answer":"4000","calc":"20*200","fig":"areaModel","pic":{"top":["200","30","4"],"left":["20","7"],"cells":[["?","600","80"],["1,400","210","28"]],"hi":[0,0]}},
      {"type":"num","mode":"normal","level":"medium","q":"What goes in the shaded cell?","answer":"210","calc":"7*30","fig":"areaModel","pic":{"top":["200","30","4"],"left":["20","7"],"cells":[["4,000","600","80"],["1,400","?","28"]],"hi":[1,1]}},
      {"type":"num","mode":"normal","level":"medium","q":"Add the partial products: 234 × 27 = ?","answer":"6318","calc":"234*27","fig":"areaModel","pic":{"top":["200","30","4"],"left":["20","7"],"cells":[["4,000","600","80"],["1,400","210","28"]]}},
      {"type":"tf","mode":"timed","level":"easy","q":"In the area model of 234 × 27, the cell 7 × 4 holds 28.","answer":0,"seconds":14},
      {"type":"tf","mode":"normal","level":"medium","q":"In the area model of 234 × 27, the cell 20 × 30 holds 60.","answer":1},
      {"type":"term","mode":"normal","level":"easy","q":"A rectangle split by place value; each part holds a partial product.","answer":"Area model","choices":["Bar model","Number line","Factor tree"]}
    ] },
  {"id":"T4","lesson":1,"concept":"Solving with an area model","explain":"374 × 62: 300 + 70 + 4 by 60 + 2 → 18,000 + 4,200 + 240 + 600 + 140 + 8 = 23,188. 506 × 42 = 21,252 · 732 × 16 = 11,712 · 572 × 98 = 56,056 · 201 × 32 = 6,432 · 659 × 42 = 27,678 · 3,352 × 17 = 56,984.",
    "variants": [
      {"type":"num","mode":"normal","level":"easy","q":"In the area model of 374 × 62, what goes in the cell 70 × 2?","answer":"140","calc":"70*2","fig":"areaModel","pic":{"top":["300","70","4"],"left":["60","2"],"cells":[["","",""],["","?","8"]],"hi":[1,1]}},
      {"type":"num","mode":"normal","level":"medium","q":"Complete the cell 60 × 300.","answer":"18000","calc":"60*300","fig":"areaModel","pic":{"top":["300","70","4"],"left":["60","2"],"cells":[["?","",""],["","140","8"]],"hi":[0,0]}},
      {"type":"num","mode":"normal","level":"hard","q":"374 × 62 = ?","answer":"23188","calc":"374*62","fig":"areaModel","pic":{"top":["300","70","4"],"left":["60","2"],"cells":[["18,000","4,200","240"],["600","140","8"]]}},
      {"type":"num","mode":"normal","level":"hard","q":"506 × 42 = ?","answer":"21252","calc":"506*42"},
      {"type":"num","mode":"normal","level":"hard","q":"732 × 16 = ?","answer":"11712","calc":"732*16"},
      {"type":"num","mode":"normal","level":"hard","q":"201 × 32 = ?","answer":"6432","calc":"201*32"},
      {"type":"num","mode":"normal","level":"hard","q":"659 × 42 = ?","answer":"27678","calc":"659*42"},
      {"type":"mc","mode":"normal","level":"medium","q":"Which partial products make 572 × 98?","options":["45,000 + 6,300 + 180 + 4,000 + 560 + 16","4,500 + 630 + 18 + 400 + 56 + 16","45,000 + 630 + 180 + 4,000 + 56 + 16","500 + 70 + 2 + 90 + 8"],"answer":0}
    ] },
  {"id":"T5","lesson":1,"concept":"Decomposing numbers for an area model","explain":"A number can be split in more than one way, as long as the parts add up to it: Eman’s garden 46 × 24 can use 20 + 20 + 6 by 20 + 4 (or 40 + 6 by 20 + 4). The area is 1,104 m². Ali walks 6 km a day for 187 days: 6 × 187 = 1,122 km; driving 60 km a day: 60 × 187 = 11,220 km (ten times as much).",
    "variants": [
      {"type":"num","mode":"normal","level":"medium","q":"Eman’s garden is 46 m long and 24 m wide. What is its area?","answer":"1104","calc":"46*24","fig":"areaModel","pic":{"top":["20","20","6"],"left":["20","4"],"cells":[["","",""],["","",""]]},"unit":"m²"},
      {"type":"mc","mode":"normal","level":"medium","q":"Which split of 46 can NOT be used in an area model of 46 × 24?","options":["20 + 20 + 4","20 + 20 + 6","40 + 6","30 + 10 + 6"],"answer":0},
      {"type":"tf","mode":"normal","level":"medium","q":"In the area model 20 + 20 + 6 by 20 + 4, the cell 20 × 6 holds 120.","answer":0},
      {"type":"num","mode":"normal","level":"medium","q":"Ali walks 6 km each day for 187 days. How many kilometers does he walk?","answer":"1122","calc":"6*187","unit":"km"},
      {"type":"num","mode":"normal","level":"medium","q":"What if Ali drove 60 km each day for 187 days?","answer":"11220","calc":"60*187","unit":"km"},
      {"type":"mc","mode":"normal","level":"hard","q":"60 × 187 compared with 6 × 187 is…","options":["10 times as much","54 more","the same","6 times as much"],"answer":0}
    ] },
  {"id":"T6","lesson":1,"boss":true,"concept":"Challenge: bigger area models","explain":"Omar has 12 buses with 25 passengers each: 12 × 25 = 300 passengers. 3,352 × 17: 3,000 + 300 + 50 + 2 by 10 + 7 gives 56,984.",
    "variants": [
      {"type":"num","mode":"boss","level":"hard","q":"Omar’s travel company in the Eastern Desert has 12 buses. Each bus holds 25 passengers. How many passengers can he take each day if every bus is full?","answer":"300","calc":"12*25"},
      {"type":"num","mode":"boss","level":"hard","q":"3,352 × 17 = ?","answer":"56984","calc":"3352*17","fig":"areaModel","pic":{"top":["3,000","300","50","2"],"left":["10","7"],"cells":[["30,000","3,000","500","20"],["21,000","2,100","350","14"]]}},
      {"type":"num","mode":"boss","level":"hard","q":"572 × 98 = ?","answer":"56056","calc":"572*98"},
      {"type":"mc","mode":"boss","level":"hard","q":"Which area model shows 374 × 62?","options":["300 + 70 + 4 by 60 + 2","300 + 70 + 4 by 6 + 2","374 by 60 + 20","3 + 7 + 4 by 6 + 2"],"answer":0}
    ] },
  /* ---------- Lesson 2 · The Distributive Property of Multiplication (pages 68-71) ---------- */
  {"id":"U1","lesson":2,"concept":"The Distributive Property","explain":"8 × 9 is 8 rows of 9 squares. Split it into two rectangles: 8 × 5 = 40 and 8 × 4 = 32, then add: 40 + 32 = 72. So 8 × 9 = 8 × (5 + 4). The Distributive Property lets us multiply every number inside the parentheses by the number outside.",
    "variants": [
      {"type":"tf","mode":"timed","level":"easy","q":"8 × (5 + 4) = (8 × 5) + (8 × 4)","answer":0,"seconds":12,"fig":"unitGrid","pic":{"rows":8,"parts":[5,4]}},
      {"type":"num","mode":"normal","level":"easy","q":"The blue part is 8 × 5 and the yellow part is 8 × 4. What is the whole rectangle?","answer":"72","calc":"8*5+8*4","fig":"unitGrid","pic":{"rows":8,"parts":[5,4]}},
      {"type":"mc","mode":"normal","level":"medium","q":"Which expression equals 8 × 9?","options":["8 × (5 + 4)","8 × 5 + 4","(8 + 5) × 4","8 + (5 × 4)"],"answer":0},
      {"type":"term","mode":"normal","level":"easy","q":"Multiplying every number inside the parentheses by the number outside, like 8 × (5 + 4) = 40 + 32.","answer":"Distributive","choices":["Area model","Estimate","Algorithm"]},
      {"type":"fill","mode":"timed","level":"easy","q":"8 × 9 = 8 × (5 + 4) = 40 + ___ = 72","options":["32","36","4","20"],"answer":0,"seconds":14}
    ] },
  {"id":"U2","lesson":2,"concept":"Badir’s mistake: 206 × 45","explain":"Badir split 45 into 40 + 5 correctly and multiplied correctly, but he split 206 into 200 + 60 + 0. 206 has 0 tens and 6 ones: 206 = 200 + 6. The right model gives 8,000 + 240 + 1,000 + 30 = 9,270.",
    "variants": [
      {"type":"mc","mode":"normal","level":"medium","q":"Badir thinks 206 × 45 = 11,700. What did he do wrong?","options":["He split 206 as 200 + 60 + 0; it is 200 + 6","He split 45 wrongly","He added the partial products wrongly","40 × 200 is not 8,000"],"answer":0,"fig":"areaModel","pic":{"top":["200","60","0"],"left":["40","5"],"cells":[["8,000","2,400","0"],["1,000","300","0"]]}},
      {"type":"mc","mode":"normal","level":"medium","q":"What did Badir do correctly?","options":["He split 45 into 40 + 5","He split 206 into 200 + 60","His answer 11,700","He wrote a 0 for the ones of 206"],"answer":0},
      {"type":"num","mode":"normal","level":"hard","q":"Solve correctly: 206 × 45 = ?","answer":"9270","calc":"206*45"},
      {"type":"mc","mode":"normal","level":"medium","q":"Which area model is right for 206 × 45?","options":["200 + 6 by 40 + 5","200 + 60 by 40 + 5","20 + 6 by 40 + 5","200 + 60 + 0 by 4 + 5"],"answer":0},
      {"type":"tf","mode":"timed","level":"easy","q":"206 = 200 + 60","answer":1,"seconds":10}
    ] },
  {"id":"U3","lesson":2,"concept":"From the area model to an expression","explain":"Each cell of the area model is one product in the expression: 58 × 42 = (40 × 50) + (40 × 8) + (2 × 50) + (2 × 8) = 2,000 + 320 + 100 + 16 = 2,436. 37 × 24 = 600 + 140 + 120 + 28 = 888. 63 × 29 = 1,200 + 60 + 540 + 27 = 1,827. 47 × 39 = 1,200 + 210 + 360 + 63 = 1,833.",
    "variants": [
      {"type":"fill","mode":"normal","level":"easy","q":"58 × 42 = (40 × ___) + (40 × 8) + (2 × 50) + (2 × 8)","options":["50","58","5","42"],"answer":0,"fig":"areaModel","pic":{"top":["50","8"],"left":["40","2"],"cells":[["2,000","320"],["100","16"]]}},
      {"type":"num","mode":"normal","level":"medium","q":"58 × 42 = ?","answer":"2436","calc":"58*42","fig":"areaModel","pic":{"top":["50","8"],"left":["40","2"],"cells":[["2,000","320"],["100","16"]]}},
      {"type":"mc","mode":"normal","level":"medium","q":"Which expression matches this area model?","options":["(20 × 30) + (20 × 7) + (4 × 30) + (4 × 7)","(20 × 30) + (4 × 7)","(20 + 30) × (4 + 7)","(2 × 3) + (2 × 7) + (4 × 3) + (4 × 7)"],"answer":0,"fig":"areaModel","pic":{"top":["30","7"],"left":["20","4"],"cells":[["600","140"],["120","28"]]}},
      {"type":"num","mode":"normal","level":"medium","q":"37 × 24 = ?","answer":"888","calc":"37*24","fig":"areaModel","pic":{"top":["30","7"],"left":["20","4"],"cells":[["600","140"],["120","28"]]}},
      {"type":"num","mode":"normal","level":"medium","q":"Use the model: 63 × 29 = ?","answer":"1827","calc":"63*29","fig":"areaModel","pic":{"top":["60","3"],"left":["20","9"],"cells":[["1,200","60"],["540","27"]]}},
      {"type":"num","mode":"normal","level":"medium","q":"Use the model: 47 × 39 = ?","answer":"1833","calc":"47*39","fig":"areaModel","pic":{"top":["40","7"],"left":["30","9"],"cells":[["1,200","210"],["360","63"]]}}
    ] },
  {"id":"U4","lesson":2,"concept":"Completing an area model: 48 × 49","explain":"(40 × 40) + (40 × 8) + (9 × 40) + (9 × 8): the top is 40 and 8, the side is 40 and 9. The cells are 1,600, 320, 360 and 72, and the total is 2,352.",
    "variants": [
      {"type":"num","mode":"timed","level":"easy","q":"What goes in the shaded cell (40 × 8)?","answer":"320","calc":"40*8","seconds":15,"fig":"areaModel","pic":{"top":["40","8"],"left":["40","9"],"cells":[["1,600","?"],["","72"]],"hi":[0,1]}},
      {"type":"num","mode":"timed","level":"easy","q":"What goes in the shaded cell (9 × 40)?","answer":"360","calc":"9*40","seconds":15,"fig":"areaModel","pic":{"top":["40","8"],"left":["40","9"],"cells":[["1,600","320"],["?","72"]],"hi":[1,0]}},
      {"type":"num","mode":"normal","level":"medium","q":"(40 × 40) + (40 × 8) + (9 × 40) + (9 × 8) = ?","answer":"2352","calc":"40*40+40*8+9*40+9*8"},
      {"type":"mc","mode":"normal","level":"medium","q":"Which multiplication is (40 × 40) + (40 × 8) + (9 × 40) + (9 × 8)?","options":["48 × 49","40 × 49","48 × 9","40 × 8 × 9"],"answer":0}
    ] },
  {"id":"U5","lesson":2,"concept":"Flexible numbers: many ways, one product","explain":"14 × 83 can be split in many ways if the parts on each side add up to 83 and 14: Mazen 40 + 40 + 3 by 10 + 4, Lamiaa 80 + 3 by 7 + 7, Reeda 80 + 3 by 10 + 4. All give 1,162. 26 × 33 = 858 (30 + 3 by 20 + 6, or 20 + 10 + 3, or 11 + 11 + 11 by 10 + 10 + 6). 42 × 34 = 1,428.",
    "variants": [
      {"type":"num","mode":"normal","level":"medium","q":"Lamiaa: (80 × 7) + (80 × 7) + (3 × 7) + (3 × 7) = ?","answer":"1162","calc":"80*7+80*7+3*7+3*7","fig":"areaModel","pic":{"top":["80","3"],"left":["7","7"],"cells":[["",""],["",""]]}},
      {"type":"num","mode":"normal","level":"medium","q":"Reeda: (80 × 10) + (80 × 4) + (3 × 10) + (3 × 4) = ?","answer":"1162","calc":"80*10+80*4+3*10+3*4","fig":"areaModel","pic":{"top":["80","3"],"left":["10","4"],"cells":[["",""],["",""]]}},
      {"type":"multi","mode":"normal","level":"hard","q":"Which ways of splitting work for 14 × 83? Choose all the correct answers.","options":["40 + 40 + 3 by 10 + 4","80 + 3 by 7 + 7","40 + 40 + 4 by 10 + 4","80 + 30 by 10 + 4"],"answer":[0,1]},
      {"type":"tf","mode":"normal","level":"medium","q":"Mazen, Lamiaa and Reeda split 14 × 83 in different ways, so they get different products.","answer":1},
      {"type":"num","mode":"normal","level":"medium","q":"26 × 33 = ? (the model 30 + 3 by 20 + 6)","answer":"858","calc":"26*33","fig":"areaModel","pic":{"top":["30","3"],"left":["20","6"],"cells":[["",""],["",""]]}},
      {"type":"num","mode":"normal","level":"hard","q":"42 × 34 = ?","answer":"1428","calc":"42*34"}
    ] },
  {"id":"U6","lesson":2,"boss":true,"concept":"Challenge: the fennec fox and other splits","explain":"A fennec fox den can have up to 15 entrances, so 32 dens can have up to 15 × 32 = 480 entrances. 26 × 33 with 11 + 11 + 11 by 10 + 10 + 6 still gives 858.",
    "variants": [
      {"type":"num","mode":"boss","level":"hard","q":"A fennec fox den can have up to 15 entrances. How many entrances could 32 dens have?","answer":"480","calc":"15*32"},
      {"type":"num","mode":"boss","level":"hard","q":"Use this model of 26 × 33: what is the product?","answer":"858","calc":"26*33","fig":"areaModel","pic":{"top":["11","11","11"],"left":["10","10","6"],"cells":[["110","110","110"],["110","110","110"],["66","66","66"]]}},
      {"type":"mc","mode":"boss","level":"hard","q":"Which expression matches the model 20 + 10 + 3 by 20 + 6?","options":["(20 × 20) + (20 × 10) + (20 × 3) + (6 × 20) + (6 × 10) + (6 × 3)","(20 × 20) + (10 × 6) + (3 × 6)","(20 + 10 + 3) + (20 + 6)","(20 × 20) + (20 × 10) + (20 × 3)"],"answer":0},
      {"type":"num","mode":"boss","level":"hard","q":"Mazen: (40 × 10) + (40 × 10) + (40 × 4) + (40 × 4) + (3 × 10) + (3 × 4) = ?","answer":"1162","calc":"40*10+40*10+40*4+40*4+3*10+3*4"}
    ] },
  /* ---------- Lesson 3 · Multiplying by a 2-digit number using the algorithm (pages 72-74) ---------- */
  {"id":"V1","lesson":3,"concept":"Mental math with 10, 100 and 1,000","explain":"35 × 10 = 350, 25 × 100 = 2,500, 75 × 1,000 = 75,000. Then 35 × 9 is one 35 less than 35 × 10: 350 − 35 = 315, and 25 × 99 = 2,500 − 25 = 2,475.",
    "variants": [
      {"type":"num","mode":"timed","level":"easy","q":"35 × 10 = ?","answer":"350","calc":"35*10","seconds":10},
      {"type":"num","mode":"timed","level":"easy","q":"25 × 100 = ?","answer":"2500","calc":"25*100","seconds":12},
      {"type":"num","mode":"timed","level":"easy","q":"75 × 1,000 = ?","answer":"75000","calc":"75*1000","seconds":12},
      {"type":"num","mode":"normal","level":"medium","q":"35 × 10 = 350. Use it: 35 × 9 = ?","answer":"315","calc":"35*9"},
      {"type":"num","mode":"normal","level":"medium","q":"25 × 100 = 2,500. Use it: 25 × 99 = ?","answer":"2475","calc":"25*99"},
      {"type":"mc","mode":"normal","level":"medium","q":"How does 35 × 10 help to find 35 × 9?","options":["Subtract one 35: 350 − 35","Subtract 1: 350 − 1","Subtract 10: 350 − 10","Add 35: 350 + 35"],"answer":0}
    ] },
  {"id":"V2","lesson":3,"concept":"Three strategies, one product: 45 × 37","explain":"The area model, the Distributive Property and the standard algorithm all give 45 × 37 = 1,665. In the algorithm, 315 = 45 × 7 (the cells 280 + 35) and 1,350 = 45 × 30 (the cells 1,200 + 150).",
    "variants": [
      {"type":"num","mode":"normal","level":"easy","q":"45 × 37 = ?","answer":"1665","calc":"45*37","fig":"longMult","pic":{"a":"45","b":"37","parts":["315","1,350"],"carry":"1"}},
      {"type":"mc","mode":"normal","level":"medium","q":"In the algorithm for 45 × 37, the row 315 is…","options":["45 × 7","45 × 3","45 × 30","40 × 7"],"answer":0,"fig":"longMult","pic":{"a":"45","b":"37","parts":["315","1,350"],"total":"1,665","carry":"1"}},
      {"type":"mc","mode":"normal","level":"medium","q":"The row 1,350 in the algorithm matches which cells of the area model?","options":["1,200 + 150","280 + 35","1,200 + 280","150 + 35"],"answer":0,"fig":"areaModel","pic":{"top":["40","5"],"left":["30","7"],"cells":[["1,200","150"],["280","35"]]}},
      {"type":"tf","mode":"normal","level":"medium","q":"The area model and the standard algorithm give different products for 45 × 37.","answer":1},
      {"type":"num","mode":"normal","level":"medium","q":"35 + 150 + 280 + 1,200 = ?","answer":"1665","calc":"35+150+280+1200"}
    ] },
  {"id":"V3","lesson":3,"concept":"How the standard algorithm works","explain":"Work from bottom to top and from right to left, start with the ones place, remember place value as you multiply, and line up the products by place value before adding them.",
    "variants": [
      {"type":"tf","mode":"timed","level":"easy","q":"In the standard algorithm we start with the ones place.","answer":0,"seconds":10},
      {"type":"tf","mode":"timed","level":"easy","q":"In the standard algorithm we multiply from left to right.","answer":1,"seconds":10},
      {"type":"tf","mode":"timed","level":"easy","q":"We line up the partial products by place value before adding them.","answer":0,"seconds":12},
      {"type":"mc","mode":"normal","level":"medium","q":"76 × 24: why does the second row end in 0 (1,520)?","options":["We multiply by 2 tens: 76 × 20","We add a 0 to make it look nicer","Because 76 has a 0","Because 24 is even"],"answer":0,"fig":"longMult","pic":{"a":"76","b":"24","parts":["304","1,520"],"carry":"2"}},
      {"type":"fill","mode":"normal","level":"medium","q":"In the standard algorithm we multiply from ___ to left.","options":["right","left","top"],"answer":0}
    ] },
  {"id":"V4","lesson":3,"concept":"Matching the area model and the algorithm","explain":"26 × 33: cells 600, 180, 60 and 18, total 858. 76 × 24: the row 304 = 4 × 76 = 280 + 24, the row 1,520 = 20 × 76 = 1,400 + 120, so 76 × 24 = 1,824.",
    "variants": [
      {"type":"num","mode":"timed","level":"easy","q":"Fill in the cell 30 × 20.","answer":"600","calc":"30*20","seconds":15,"fig":"areaModel","pic":{"top":["20","6"],"left":["30","3"],"cells":[["?",""],["",""]],"hi":[0,0]}},
      {"type":"num","mode":"normal","level":"medium","q":"Fill in the area model. What is the final product?","answer":"858","calc":"26*33","fig":"areaModel","pic":{"top":["20","6"],"left":["30","3"],"cells":[["",""],["",""]]}},
      {"type":"mc","mode":"normal","level":"medium","q":"Which cells of the area model make the row 304?","options":["280 + 24","1,400 + 120","1,400 + 280","120 + 24"],"answer":0,"fig":"areaModel","pic":{"top":["70","6"],"left":["20","4"],"cells":[["1,400","120"],["280","24"]]}},
      {"type":"num","mode":"normal","level":"medium","q":"Complete the cell 20 × 6.","answer":"120","calc":"20*6","fig":"areaModel","pic":{"top":["70","6"],"left":["20","4"],"cells":[["1,400","?"],["280","24"]],"hi":[0,1]}},
      {"type":"num","mode":"normal","level":"medium","q":"76 × 24 = ?","answer":"1824","calc":"76*24","fig":"longMult","pic":{"a":"76","b":"24","parts":["304","1,520"],"carry":"2"}}
    ] },
  {"id":"V5","lesson":3,"concept":"Using the standard algorithm","explain":"67 × 76: 67 × 6 = 402, 67 × 70 = 4,690, total 5,092. 76 × 82 = 6,232. 234 × 53 = 12,402.",
    "variants": [
      {"type":"num","mode":"normal","level":"medium","q":"67 × 76: what is the second row (67 × 70)?","answer":"4690","calc":"67*70","fig":"longMult","pic":{"a":"67","b":"76","parts":["402","?,69?"],"carry":"4"}},
      {"type":"num","mode":"normal","level":"medium","q":"Find the final product of 67 × 76.","answer":"5092","calc":"67*76","fig":"longMult","pic":{"a":"67","b":"76","parts":["402","4,690"],"carry":"4"}},
      {"type":"num","mode":"normal","level":"hard","q":"76 × 82 = ?","answer":"6232","calc":"76*82"},
      {"type":"num","mode":"normal","level":"hard","q":"234 × 53 = ?","answer":"12402","calc":"234*53"},
      {"type":"mc","mode":"normal","level":"medium","q":"What is 67 × 6 in the first row?","options":["402","362","4,020","67"],"answer":0}
    ] },
  {"id":"V6","lesson":3,"boss":true,"concept":"Challenge: Akram’s shortcut and the Eastern Desert rain","explain":"Akram is right: 34 × 69 = (34 × 70) − 34, because 69 is one less than 70. 2,380 − 34 = 2,346. The Eastern Desert gets less than 25 mm of rain a year, so in 25 years it gets less than 25 × 25 = 625 mm.",
    "variants": [
      {"type":"mc","mode":"boss","level":"hard","q":"Akram says 34 × 69 gives the same product as (34 × 70) − 34. Is he right?","options":["Yes: 69 is one less than 70, so take one 34 away","No: he must subtract 1, not 34","No: he must add 34","No: 70 × 34 is not related"],"answer":0},
      {"type":"num","mode":"boss","level":"hard","q":"34 × 69 = ?","answer":"2346","calc":"34*69"},
      {"type":"num","mode":"boss","level":"hard","q":"The Eastern Desert usually gets less than 25 mm of rain a year. Less than how many millimeters can fall in 25 years?","answer":"625","calc":"25*25","unit":"mm"},
      {"type":"num","mode":"boss","level":"hard","q":"234 × 53 = ?","answer":"12402","calc":"234*53","fig":"longMult","pic":{"a":"234","b":"53"}}
    ] },
  /* ---------- Lesson 4 · Multiplying Multi-Digit Numbers (pages 75-77) ---------- */
  {"id":"W1","lesson":4,"concept":"Ashraf’s mistake: 357 × 36","explain":"Ashraf’s first row is right: 357 × 6 = 2,142. His second row is wrong: 357 × 30 = 10,710, not 10,521. The right product is 2,142 + 10,710 = 12,852.",
    "variants": [
      {"type":"mc","mode":"normal","level":"medium","q":"Ashraf found 357 × 36 = 12,663. What did he do correctly?","options":["The first row: 357 × 6 = 2,142","The second row: 10,521","The final product 12,663","Nothing at all"],"answer":0,"fig":"longMult","pic":{"a":"357","b":"36","parts":["2,142","10,521"],"total":"12,663"}},
      {"type":"mc","mode":"normal","level":"medium","q":"What is wrong in Ashraf’s work?","options":["357 × 30 is 10,710, not 10,521","357 × 6 is not 2,142","He should not write a 0 in the second row","He added 2,142 + 10,521 wrongly"],"answer":0,"fig":"longMult","pic":{"a":"357","b":"36","parts":["2,142","10,521"],"total":"12,663"}},
      {"type":"num","mode":"normal","level":"medium","q":"357 × 30 = ?","answer":"10710","calc":"357*30"},
      {"type":"num","mode":"normal","level":"hard","q":"Solve correctly: 357 × 36 = ?","answer":"12852","calc":"357*36"}
    ] },
  {"id":"W2","lesson":4,"concept":"Estimating the product","explain":"Round each factor to an easy number before multiplying: 3,567 × 24 ≈ 4,000 × 20 = 80,000, 8,222 × 53 ≈ 8,000 × 50 = 400,000, 6,209 × 33 ≈ 6,000 × 30 = 180,000, 2,521 × 74 ≈ 2,500 × 70 = 175,000. The estimate tells if an answer is reasonable.",
    "variants": [
      {"type":"mc","mode":"timed","level":"easy","q":"Estimate 3,567 × 24.","options":["about 80,000","about 8,000","about 800,000"],"answer":0,"seconds":15},
      {"type":"mc","mode":"timed","level":"easy","q":"Estimate 8,222 × 53.","options":["about 400,000","about 40,000","about 4,000,000"],"answer":0,"seconds":15},
      {"type":"mc","mode":"timed","level":"easy","q":"Estimate 6,209 × 33.","options":["about 180,000","about 18,000","about 1,800,000"],"answer":0,"seconds":15},
      {"type":"mc","mode":"normal","level":"medium","q":"Which is a good estimate for 2,521 × 74?","options":["2,500 × 70 = 175,000","2,000 × 7 = 14,000","25 × 74 = 1,850","3,000 × 700 = 2,100,000"],"answer":0},
      {"type":"tf","mode":"timed","level":"easy","q":"We use an estimate to check if an answer is reasonable.","answer":0,"seconds":12}
    ] },
  {"id":"W3","lesson":4,"concept":"4-digit × 2-digit with the algorithm","explain":"3,567 × 24 = 85,608 · 2,521 × 74 = 186,554 · 8,222 × 53 = 435,766 · 6,209 × 33 = 204,897. Each answer is close to its estimate.",
    "variants": [
      {"type":"num","mode":"normal","level":"hard","q":"3,567 × 24 = ?","answer":"85608","calc":"3567*24"},
      {"type":"num","mode":"normal","level":"hard","q":"2,521 × 74 = ?","answer":"186554","calc":"2521*74"},
      {"type":"num","mode":"normal","level":"hard","q":"8,222 × 53 = ?","answer":"435766","calc":"8222*53"},
      {"type":"num","mode":"normal","level":"hard","q":"6,209 × 33 = ?","answer":"204897","calc":"6209*33"},
      {"type":"num","mode":"normal","level":"medium","q":"3,567 × 24: the first row is 3,567 × 4. What is it?","answer":"14268","calc":"3567*4"}
    ] },
  {"id":"W4","lesson":4,"concept":"Match the model","explain":"3,567 × 24 matches the model 3,000 + 500 + 60 + 7 by 20 + 4. 8,222 × 53 matches 8,000 + 200 + 20 + 2 by 50 + 3, not by 5 + 4. 2,521 × 74 matches 2,000 + 500 + 20 + 1 by 70 + 4. The model 6,209 × 33 with 18,627 written twice is wrong: the second row is 6,209 × 30 = 186,270.",
    "variants": [
      {"type":"match","mode":"normal","level":"medium","q":"Match each problem with its area model.","left":["3,567 × 24","8,222 × 53","2,521 × 74"],"right":["2,000 + 500 + 20 + 1 by 70 + 4","3,000 + 500 + 60 + 7 by 20 + 4","8,000 + 200 + 20 + 2 by 50 + 3"],"answer":[1,2,0]},
      {"type":"tf","mode":"normal","level":"medium","q":"This model shows 8,222 × 53.","answer":1,"fig":"areaModel","pic":{"top":["8,000","200","20","2"],"left":["5","4"],"cells":[["400,000","1,000","100","10"],["24,000","600","60","6"]]}},
      {"type":"tf","mode":"normal","level":"medium","q":"This model shows 3,567 × 24.","answer":0,"fig":"areaModel","pic":{"top":["3,000","500","60","7"],"left":["20","4"],"cells":[["60,000","10,000","1,200","140"],["12,000","2,000","240","28"]]}},
      {"type":"num","mode":"normal","level":"medium","q":"In the model of 2,521 × 74, what goes in the cell 70 × 500?","answer":"35000","calc":"70*500","fig":"areaModel","pic":{"top":["2,000","500","20","1"],"left":["70","4"],"cells":[["140,000","?","1,400","70"],["8,000","2,000","80","4"]],"hi":[0,1]}},
      {"type":"mc","mode":"normal","level":"hard","q":"6,209 × 33 was written with 18,627 in both rows. What should the second row be?","options":["186,270","18,627","1,862,700","18,270"],"answer":0,"fig":"longMult","pic":{"a":"6,209","b":"33","parts":["18,627","18,627"]}}
    ] },
  {"id":"W5","lesson":4,"boss":true,"concept":"Challenge: is the answer reasonable?","explain":"6,209 × 33 is about 180,000, so 37,254 (18,627 + 18,627) is not reasonable; the right product is 204,897. Model C, 215 × 22 = (5 × 2) + (5 × 20) + (10 × 2) + (10 × 20) + (200 × 2) + (200 × 20) = 4,730.",
    "variants": [
      {"type":"mc","mode":"boss","level":"hard","q":"A student says 6,209 × 33 = 37,254. Is it reasonable?","options":["No: the estimate is about 180,000","Yes: it is close to 6,000 × 3","Yes: every product of a 4-digit number has 5 digits","No: the estimate is about 1,800"],"answer":0},
      {"type":"num","mode":"boss","level":"hard","q":"215 × 22 = (5 × 2) + (5 × 20) + (10 × 2) + (10 × 20) + (200 × 2) + (200 × 20) = ?","answer":"4730","calc":"215*22"},
      {"type":"num","mode":"boss","level":"hard","q":"8,222 × 53 = ?","answer":"435766","calc":"8222*53","fig":"areaModel","pic":{"top":["8,000","200","20","2"],"left":["50","3"],"cells":[["400,000","10,000","1,000","100"],["24,000","600","60","6"]]}},
      {"type":"multi","mode":"boss","level":"hard","q":"Which products are reasonable? Choose all the correct answers.","options":["3,567 × 24 = 85,608","2,521 × 74 = 186,554","8,222 × 53 = 43,576","6,209 × 33 = 20,489"],"answer":[0,1]}
    ] },
  /* ---------- Lesson 5 · Multiplication Problems in the Real World (pages 78-79) ---------- */
  {"id":"X1","lesson":5,"concept":"Sandstorms","explain":"A sandstorm lasts 120 minutes a day for 33 days: 120 × 33 = 3,960 minutes. 120 minutes is 2 hours, so it lasts 2 × 33 = 66 hours.",
    "variants": [
      {"type":"num","mode":"normal","level":"medium","q":"A sandstorm lasts 120 minutes each day for 33 days in a row. How many minutes in all?","answer":"3960","calc":"120*33","unit":"minutes"},
      {"type":"num","mode":"normal","level":"hard","q":"Challenge: how many hours did the sandstorm last? (120 minutes = 2 hours)","answer":"66","calc":"2*33","unit":"hours"},
      {"type":"mc","mode":"normal","level":"medium","q":"Which operation finds the total minutes?","options":["120 × 33","120 + 33","120 − 33","33 × 60"],"answer":0},
      {"type":"tf","mode":"timed","level":"easy","q":"120 minutes are 2 hours.","answer":0,"seconds":10}
    ] },
  {"id":"X2","lesson":5,"concept":"Mona’s kebabs: a two-step problem","explain":"Mona sold 402 kebabs in February and 753 in March, 83 g of meat each. Step 1: 402 + 753 = 1,155 kebabs. Step 2: 1,155 × 83 = 95,865 g.",
    "variants": [
      {"type":"num","mode":"normal","level":"easy","q":"Mona sold 402 kebabs in February and 753 in March. How many kebabs in both months?","answer":"1155","calc":"402+753"},
      {"type":"num","mode":"normal","level":"hard","q":"Each kebab has 83 g of meat. How many grams of meat did Mona use in February and March?","answer":"95865","calc":"(402+753)*83","unit":"g"},
      {"type":"mc","mode":"normal","level":"medium","q":"Which expression solves Mona’s meat problem?","options":["(402 + 753) × 83","402 + 753 × 83 − 402","402 × 753 × 83","(753 − 402) × 83"],"answer":0},
      {"type":"num","mode":"normal","level":"medium","q":"How many grams of meat did Mona use in February only?","answer":"33366","calc":"402*83","unit":"g"}
    ] },
  {"id":"X3","lesson":5,"concept":"Wael’s baklava: nuts and syrup","explain":"The recipe needs 170 g each of pistachios, walnuts and hazelnuts: 3 × 170 = 510 g, and 18 recipes need 510 × 18 = 9,180 g. The syrup needs 250 + 15 + 30 = 295 mL per recipe, so 18 batches need 295 × 18 = 5,310 mL.",
    "variants": [
      {"type":"num","mode":"normal","level":"hard","q":"Wael’s recipe needs 170 g each of pistachios, walnuts and hazelnuts. He multiplies the recipe by 18. How many grams of nuts in all?","answer":"9180","calc":"170*3*18","unit":"g"},
      {"type":"mc","mode":"normal","level":"medium","q":"A student found 170 × 18 = 3,060 g of nuts. What did the student forget?","options":["That there are 3 kinds of nuts","To add 18","To divide by 3","Nothing: it is right"],"answer":0},
      {"type":"num","mode":"normal","level":"medium","q":"The syrup needs 250 mL of honey, 15 mL of orange extract and 30 mL of lemon juice per recipe. How many mL for one recipe?","answer":"295","calc":"250+15+30","unit":"mL"},
      {"type":"num","mode":"normal","level":"hard","q":"How many mL of liquid does Wael need for 18 batches of syrup?","answer":"5310","calc":"(250+15+30)*18","unit":"mL"}
    ] },
  {"id":"X4","lesson":5,"concept":"Mona’s tahini","explain":"140 g of sesame seeds make 120 mL of tahini. 20 recipes a week: 140 × 20 = 2,800 g of seeds and 120 × 20 = 2,400 mL of tahini. In 36 weeks: 2,400 × 36 = 86,400 mL = 86.4 L (1,000 mL = 1 L).",
    "variants": [
      {"type":"num","mode":"normal","level":"medium","q":"Mona uses 140 g of sesame seeds per recipe and makes it 20 times a week. How many grams of seeds each week?","answer":"2800","calc":"140*20","unit":"g"},
      {"type":"num","mode":"normal","level":"medium","q":"Each recipe makes 120 mL of tahini, 20 times a week. How many mL each week?","answer":"2400","calc":"120*20","unit":"mL"},
      {"type":"num","mode":"normal","level":"hard","q":"How many mL of tahini does Mona make in 36 weeks?","answer":"86400","calc":"120*20*36","unit":"mL"},
      {"type":"num","mode":"normal","level":"hard","q":"Convert 86,400 mL to liters.","answer":"86.4","calc":"86400/1000","unit":"L"}
    ] },
  {"id":"X5","lesson":5,"boss":true,"concept":"Challenge: Mona’s lemonade for a year","explain":"6 lemons per liter and 8 liters a day: 6 × 8 = 48 lemons a day, 48 × 365 = 17,520 lemons in 365 days. Liters: 8 × 365 = 2,920 L. Sugar: 1,133 g a day, 30 weeks = 30 × 7 = 210 days, 1,133 × 210 = 237,930 g.",
    "variants": [
      {"type":"num","mode":"boss","level":"hard","q":"Mona uses 6 lemons for each liter and makes 8 liters a day. How many lemons in 365 days?","answer":"17520","calc":"6*8*365"},
      {"type":"num","mode":"boss","level":"hard","q":"How many liters of lemonade does Mona make in 365 days (8 liters a day)?","answer":"2920","calc":"8*365","unit":"L"},
      {"type":"num","mode":"boss","level":"hard","q":"Mona uses 1,133 g of sugar daily. How many grams in 30 weeks?","answer":"237930","calc":"1133*7*30","unit":"g"},
      {"type":"mc","mode":"boss","level":"hard","q":"Which is the first step to find the sugar for 30 weeks?","options":["Find the days: 30 × 7 = 210","1,133 × 30","1,133 + 30","30 ÷ 7"],"answer":0}
    ] }
];
})();
