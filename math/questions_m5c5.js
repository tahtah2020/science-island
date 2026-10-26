/* Math · Grade 5 · Unit 5 "Multiplication and Division with Decimals" · Languages track (English), first term 2026/2027
   Source: the English school book (Math Term 1), Unit 5 (pages 91-119): Concept 1 "Multiplying Decimals" (lessons 1-9), Concept 2 "Dividing Decimals" (lessons 10-13).
   Idea ids: every letter A-Y is used by Units 1-4, so Unit 5 uses Z + lesson number + idea digit: Z11-Z14 lesson 1 … Z91-Z93 lesson 9, Z101-Z104 lesson 10 … Z131-Z134 lesson 13.
   Boss ideas (the last of each lesson): Z14, Z24, Z33, Z44, Z53, Z63, Z74, Z84, Z93, Z104, Z114, Z123, Z134.
   The book is an activity book with no printed answers: the numbers and situations are the book's own (Manal's pencil, Hoda's stride, Ameen's bookstore, Kamal and Nadia, Malak's cinder blocks,
   Dalal and Doha, Yousra's cat, Amgad, Mohamed Ehab, Marwan, Dalia, Ehab and Eman, Rania, the glass and boiling water, Nour's juice, the wire and the trees, Emad, the hibiscus, the 77.43 ÷ 0.3 error)
   and EVERY number answer is computed (calc, checked by tools/check_questions.js).
   Pictures (math/m5_art.js): tenthsGrid, jumpLine, placeSlide (new), areaModel and longDiv (Units 3-4).
   Review notes:
   - Lesson 2: «Make the Greatest Product» has no printed digits; the digits 3, 5, 8 and the 4 in □.□□ × 4 (9.75) are examples written here to show the idea of the game.
   - Lesson 3: Nadia is right (tenths × tenths = hundredths), as the book's lesson goal states.
   - Lesson 4: the two Area Model Puzzles are solved from their printed cells (28 × 54 = 1,512 and 425 × 34 = 14,450).
   - Lesson 5: Dalal (estimate) and Doha (counting decimal places) are both counted right; the book asks the student to decide.
   - Lesson 6: «place the decimal points in the factors» has more than one right answer; the questions offer one right pair (or ask «choose all»).
   - Lesson 9: Rania's packages: 540 cm need 3 packages of 250 cm, 210 cm left.
   - Lesson 10: in «How Hot?» both 1,100 ÷ 10 and 1,100 × 0.1 give 110 °C, so it is asked as «choose all».
   - Lesson 12: 2,050 ÷ 75 is asked only with whole meters (27 m, 25 m left): its decimal quotient does not end. 9)121.1 is not asked: its quotient does not end either (13.455…).
   - Not asked: Writing About Math, Check Your Understanding, «write a story problem», «Back-to-Back, Front-to-Front», «Human Equations» and the record sheets.
   Generated together with questions_m5c5_ar.js (same ids, phrasings order and answers). */
(function () {
window.CHAPTER = { id: 'm5c5', title: 'Multiplication and Division with Decimals', grade: 'Grade 5', track: 'Languages' };

window.IDEAS = [
  /* ---------- Lesson 1 · Multiplying by Powers of Ten (pages 92-94) ---------- */
  {"id":"Z11","lesson":1,"concept":"Expanded form with powers of ten","explain":"Each digit is multiplied by the power of ten of its place: 496 = 4 × 100 + 9 × 10 + 6; 6,140 = 6 × 1,000 + 1 × 100 + 4 × 10; 20,403 = 2 × 10,000 + 4 × 100 + 3.",
    "variants": [
      {"type":"num","mode":"timed","level":"easy","q":"496 = 4 × ? + 9 × 10 + 6","answer":"100","calc":"100","seconds":12},
      {"type":"num","mode":"timed","level":"easy","q":"6,140 = 6 × ? + 1 × 100 + 4 × 10","answer":"1000","calc":"1000","seconds":12},
      {"type":"num","mode":"normal","level":"medium","q":"20,403 = 2 × ? + 4 × 100 + 3","answer":"10000","calc":"10000"},
      {"type":"num","mode":"normal","level":"medium","q":"78,594 = 7 × ? + 8 × 1,000 + 5 × 100 + 9 × 10 + 4","answer":"10000","calc":"10000"},
      {"type":"num","mode":"timed","level":"easy","q":"8,032 × 1,000 = ?","answer":"8032000","calc":"8032*1000","seconds":15}
    ] },
  {"id":"Z12","lesson":1,"concept":"Multiplying by 10, 100, 1,000 and by 0.1, 0.01, 0.001","explain":"Multiplying by 10, 100 or 1,000 moves every digit 1, 2 or 3 places to the left (the number gets bigger): 25 × 100 = 2,500. Multiplying by 0.1, 0.01 or 0.001 moves the digits 1, 2 or 3 places to the right (the number gets smaller): 25 × 0.01 = 0.25. 3 × 2 thousandths = 6 thousandths = 0.006.",
    "variants": [
      {"type":"num","mode":"timed","level":"easy","q":"25 × 1,000 = ?","answer":"25000","calc":"25*1000","seconds":12},
      {"type":"num","mode":"timed","level":"easy","q":"25 × 0.1 = ?","answer":"2.5","calc":"25*0.1","seconds":12},
      {"type":"num","mode":"timed","level":"easy","q":"25 × 0.01 = ?","answer":"0.25","calc":"25*0.01","seconds":12},
      {"type":"num","mode":"normal","level":"medium","q":"25 × 0.001 = ?","answer":"0.025","calc":"25*0.001"},
      {"type":"num","mode":"normal","level":"medium","q":"3 × 2 thousandths = ? (write it as a decimal)","answer":"0.006","calc":"3*0.002"},
      {"type":"tf","mode":"normal","level":"medium","q":"Multiplying a number by 0.1 makes it smaller.","answer":0},
      {"type":"term","mode":"normal","level":"medium","q":"Numbers like 10, 100, 1,000 and 0.1, 0.01, 0.001.","answer":"Powers of ten","choices":["Multiples of 5","Prime numbers","Remainders"]}
    ] },
  {"id":"Z13","lesson":1,"concept":"Manal’s pencil and the table of powers","explain":"Manal’s pencil is 15.2 cm. 10 times bigger: 15.2 × 10 = 152 cm; 100 pencils in a row: 15.2 × 100 = 1,520 cm; one tenth of it: 15.2 × 0.1 = 1.52 cm. 4.2 × 10 = 42, 360 × 0.1 = 36, 7.4 × 0.01 = 0.074, 1.245 × 100 = 124.5, 602.1 × 0.01 = 6.021, 14.14 × 0.1 = 1.414.",
    "variants": [
      {"type":"num","mode":"normal","level":"easy","q":"Manal’s pencil is 15.2 cm. If it were 10 times bigger, how long would it be?","answer":"152","calc":"15.2*10","fig":"placeSlide","pic":{"num":"15.2"},"unit":"cm"},
      {"type":"num","mode":"normal","level":"medium","q":"100 of the same pencils in a row: how long in all?","answer":"1520","calc":"15.2*100","unit":"cm"},
      {"type":"num","mode":"normal","level":"medium","q":"If the pencil shrank to one tenth of its length (15.2 × 0.1)?","answer":"1.52","calc":"15.2*0.1","unit":"cm"},
      {"type":"num","mode":"normal","level":"medium","q":"7.4 × 0.01 = ?","answer":"0.074","calc":"7.4*0.01"},
      {"type":"num","mode":"normal","level":"medium","q":"1.245 × 100 = ?","answer":"124.5","calc":"1.245*100"},
      {"type":"num","mode":"normal","level":"medium","q":"602.1 × 0.01 = ?","answer":"6.021","calc":"602.1*0.01"},
      {"type":"match","mode":"normal","level":"medium","q":"Match each product with its value.","left":["3 × 0.01","30 × 0.01","300 × 0.01"],"right":["0.3","3","0.03"],"answer":[2,0,1]}
    ] },
  {"id":"Z14","lesson":1,"boss":true,"concept":"Challenge: Hoda’s stride","explain":"Hoda’s stride is 0.72 m. 1,000 paces: 0.72 × 1,000 = 720 m (every digit moves 3 places to the left).",
    "variants": [
      {"type":"num","mode":"boss","level":"hard","q":"Hoda’s stride is 0.72 m. How far does she walk in 1,000 paces?","answer":"720","calc":"0.72*1000","unit":"m"},
      {"type":"num","mode":"boss","level":"hard","q":"300 × 0.001 = ?","answer":"0.3","calc":"300*0.001"},
      {"type":"num","mode":"boss","level":"hard","q":"14.14 × 0.1 = ?","answer":"1.414","calc":"14.14*0.1"},
      {"type":"mc","mode":"boss","level":"hard","q":"Which product equals 0.3?","options":["30 × 0.01","3 × 0.01","300 × 0.01","30 × 0.1"],"answer":0}
    ] },
  /* ---------- Lesson 2 · Multiplying Decimals by Whole Numbers (pages 95-96) ---------- */
  {"id":"Z21","lesson":2,"concept":"Multiplying whole numbers (warm up)","explain":"773 × 2 = 1,546 · 521 × 9 = 4,689 · 385 × 43 = 16,555 · 108 × 26 = 2,808 · 497 × 85 = 42,245.",
    "variants": [
      {"type":"num","mode":"timed","level":"easy","q":"773 × 2 = ?","answer":"1546","calc":"773*2","seconds":15},
      {"type":"num","mode":"normal","level":"medium","q":"521 × 9 = ?","answer":"4689","calc":"521*9"},
      {"type":"num","mode":"normal","level":"medium","q":"385 × 43 = ?","answer":"16555","calc":"385*43"},
      {"type":"num","mode":"normal","level":"medium","q":"108 × 26 = ?","answer":"2808","calc":"108*26"},
      {"type":"num","mode":"normal","level":"hard","q":"497 × 85 = ?","answer":"42245","calc":"497*85"}
    ] },
  {"id":"Z22","lesson":2,"concept":"A decimal times a whole number on the number line","explain":"0.3 × 3 is 3 jumps of 0.3: 0.9. 0.3 × 4 = 1.2, 0.3 × 5 = 1.5, 2.5 × 3 = 7.5, 0.35 × 5 = 1.75. Multiply like whole numbers, then give the product as many decimal places as the decimal factor.",
    "variants": [
      {"type":"num","mode":"timed","level":"easy","q":"0.3 × 3 = ?","answer":"0.9","calc":"0.3*3","seconds":12,"fig":"jumpLine","pic":{"step":0.3,"n":3,"to":3}},
      {"type":"num","mode":"normal","level":"easy","q":"0.3 × 4 = ?","answer":"1.2","calc":"0.3*4","fig":"jumpLine","pic":{"step":0.3,"n":4,"to":3}},
      {"type":"num","mode":"normal","level":"easy","q":"0.3 × 5 = ?","answer":"1.5","calc":"0.3*5","fig":"jumpLine","pic":{"step":0.3,"n":5,"to":3}},
      {"type":"num","mode":"normal","level":"medium","q":"2.5 × 3 = ?","answer":"7.5","calc":"2.5*3"},
      {"type":"num","mode":"normal","level":"medium","q":"0.35 × 5 = ?","answer":"1.75","calc":"0.35*5"},
      {"type":"mc","mode":"normal","level":"medium","q":"Which number line shows 0.3 × 4?","options":["4 jumps of 0.3","3 jumps of 0.4","4 jumps of 3","0.3 jumps of 4"],"answer":0}
    ] },
  {"id":"Z23","lesson":2,"concept":"Where does the decimal point go?","explain":"Ameen multiplies prices at his bookstore. Multiply as whole numbers, then count the decimal places in the factors and give the product the same number, or check with an estimate: 0.35 × 5 is about 0.4 × 5 = 2, so 1.75, not 17.5.",
    "variants": [
      {"type":"mc","mode":"normal","level":"medium","q":"35 × 5 = 175. So 0.35 × 5 = ?","options":["1.75","17.5","0.175","175"],"answer":0},
      {"type":"mc","mode":"normal","level":"medium","q":"25 × 3 = 75. So 2.5 × 3 = ?","options":["7.5","75","0.75","750"],"answer":0},
      {"type":"tf","mode":"normal","level":"medium","q":"0.35 × 5 = 17.5","answer":1},
      {"type":"mc","mode":"normal","level":"medium","q":"How can Ameen check where the decimal point goes?","options":["Estimate the product","Always put it after the first digit","Remove it from the product","Add the two factors"],"answer":0}
    ] },
  {"id":"Z24","lesson":2,"boss":true,"concept":"Challenge: make the greatest product","explain":"In «Make the Greatest Product» the digits go in boxes like □.□ × □. With 3, 5 and 8: 5.3 × 8 = 42.4 is greater than 8.3 × 5 = 41.5 and 8.5 × 3 = 25.5. With 4 fixed in □.□□ × 4, the greatest decimal gives the greatest product.",
    "variants": [
      {"type":"num","mode":"boss","level":"hard","q":"5.3 × 8 = ?","answer":"42.4","calc":"5.3*8"},
      {"type":"mc","mode":"boss","level":"hard","q":"With the digits 3, 5 and 8 in □.□ × □, which gives the greatest product?","options":["5.3 × 8","8.3 × 5","8.5 × 3","3.5 × 8"],"answer":0},
      {"type":"num","mode":"boss","level":"hard","q":"8.3 × 5 = ?","answer":"41.5","calc":"8.3*5"},
      {"type":"num","mode":"boss","level":"hard","q":"9.75 × 4 = ?","answer":"39","calc":"9.75*4"}
    ] },
  /* ---------- Lesson 3 · Multiplying Tenths by Tenths (pages 97-98) ---------- */
  {"id":"Z31","lesson":3,"concept":"Tenths × tenths make hundredths","explain":"Nadia is right: 0.5 × 0.7 = 0.35, in the hundredths place. On a 10 × 10 grid each small square is 0.01; 0.3 × 0.4 is the overlap of 3 rows and 4 columns: 12 squares = 0.12. Kamal is wrong: multiplying by a number less than 1 makes the number smaller, not bigger.",
    "variants": [
      {"type":"mc","mode":"normal","level":"medium","q":"Kamal says tenths × tenths gives tenths; Nadia says hundredths. Who is right?","options":["Nadia: 0.1 × 0.1 = 0.01","Kamal: multiplying always makes numbers bigger","Both","Neither"],"answer":0},
      {"type":"num","mode":"timed","level":"easy","q":"0.1 × 0.1 = ?","answer":"0.01","calc":"0.1*0.1","seconds":12,"fig":"tenthsGrid","pic":{"a":1,"b":1}},
      {"type":"num","mode":"normal","level":"easy","q":"Use the grid: 0.3 × 0.4 = ?","answer":"0.12","calc":"0.3*0.4","fig":"tenthsGrid","pic":{"a":3,"b":4}},
      {"type":"tf","mode":"normal","level":"medium","q":"Multiplying by a number less than 1 always makes a number bigger.","answer":1}
    ] },
  {"id":"Z32","lesson":3,"concept":"Using the grids","explain":"0.5 × 0.2 = 0.10 · 0.9 × 0.5 = 0.45 · 0.7 × 0.8 = 0.56 · 0.5 × 0.6 = 0.30: count the squares in the overlap; each is one hundredth.",
    "variants": [
      {"type":"num","mode":"normal","level":"easy","q":"Use the grid: 0.5 × 0.2 = ?","answer":"0.1","calc":"0.5*0.2","fig":"tenthsGrid","pic":{"a":5,"b":2}},
      {"type":"num","mode":"normal","level":"medium","q":"Use the grid: 0.9 × 0.5 = ?","answer":"0.45","calc":"0.9*0.5","fig":"tenthsGrid","pic":{"a":9,"b":5}},
      {"type":"num","mode":"normal","level":"medium","q":"Use the grid: 0.7 × 0.8 = ?","answer":"0.56","calc":"0.7*0.8","fig":"tenthsGrid","pic":{"a":7,"b":8}},
      {"type":"num","mode":"normal","level":"medium","q":"0.5 × 0.6 = ?","answer":"0.3","calc":"0.5*0.6"},
      {"type":"mc","mode":"normal","level":"medium","q":"Which part of the grid shows the product?","options":["The overlap of the two shadings","The yellow rows only","The white squares","The whole grid"],"answer":0,"fig":"tenthsGrid","pic":{"a":3,"b":4}}
    ] },
  {"id":"Z33","lesson":3,"boss":true,"concept":"Challenge: explain to a friend","explain":"A tenth of a tenth is a hundredth: 0.1 × 0.1 = 0.01. So 0.7 × 0.8 = 56 hundredths = 0.56.",
    "variants": [
      {"type":"mc","mode":"boss","level":"hard","q":"Why is 0.7 × 0.8 in the hundredths?","options":["A tenth of a tenth is a hundredth","Because 7 + 8 = 15","Because both numbers are less than 10","Because we add the tenths"],"answer":0},
      {"type":"num","mode":"boss","level":"hard","q":"0.7 × 0.8 = ?","answer":"0.56","calc":"0.7*0.8"},
      {"type":"multi","mode":"boss","level":"hard","q":"Which products are in the hundredths? Choose all the correct answers.","options":["0.3 × 0.4","0.9 × 0.5","3 × 0.4","0.3 × 40"],"answer":[0,1]}
    ] },
  /* ---------- Lesson 4 · Multiply decimals using the area model (pages 99-100) ---------- */
  {"id":"Z41","lesson":4,"concept":"Extending multiplication patterns","explain":"8 × 3 = 24, so 0.8 × 3 = 2.4, 0.8 × 0.3 = 0.24, 0.08 × 0.3 = 0.024, 0.08 × 0.03 = 0.0024. 7 × 6 = 42, so 7 × 0.6 = 4.2, 0.7 × 0.6 = 0.42, 0.7 × 0.06 = 0.042, 0.07 × 0.06 = 0.0042.",
    "variants": [
      {"type":"num","mode":"timed","level":"easy","q":"8 × 0.3 = 2.4. So 0.8 × 0.3 = ?","answer":"0.24","calc":"0.8*0.3","seconds":15},
      {"type":"num","mode":"normal","level":"medium","q":"0.08 × 0.3 = ?","answer":"0.024","calc":"0.08*0.3"},
      {"type":"num","mode":"normal","level":"medium","q":"0.08 × 0.03 = ?","answer":"0.0024","calc":"0.08*0.03"},
      {"type":"num","mode":"timed","level":"easy","q":"7 × 0.06 = 0.42. So 0.7 × 0.6 = ?","answer":"0.42","calc":"0.7*0.6","seconds":15},
      {"type":"num","mode":"normal","level":"medium","q":"0.07 × 0.06 = ?","answer":"0.0042","calc":"0.07*0.06"},
      {"type":"num","mode":"normal","level":"easy","q":"7 × 60 = ?","answer":"420","calc":"7*60"}
    ] },
  {"id":"Z42","lesson":4,"concept":"Area model puzzles","explain":"In the first puzzle, 50 × 8 = 400 and the missing side is 4 (4 × 20 = 80, 4 × 8 = 32): 28 × 54 = 1,512. In the second, 30 × 400 = 12,000, 30 × 20 = 600, and the missing side is 4 (4 × 400 = 1,600): 425 × 34 = 14,450, and the last cell is 4 × 5 = 20.",
    "variants": [
      {"type":"num","mode":"normal","level":"easy","q":"What goes in the ? cell (50 × 8)?","answer":"400","calc":"50*8","fig":"areaModel","pic":{"top":["20","8"],"left":["50","?"],"cells":[["1,000","?"],["80","32"]],"hi":[0,1]}},
      {"type":"num","mode":"normal","level":"medium","q":"What is the missing number on the side? (? × 20 = 80)","answer":"4","calc":"80/20","fig":"areaModel","pic":{"top":["20","8"],"left":["50","?"],"cells":[["1,000","400"],["80","32"]]}},
      {"type":"num","mode":"normal","level":"medium","q":"Write the problem and find the product: 28 × 54 = ?","answer":"1512","calc":"28*54","fig":"areaModel","pic":{"top":["20","8"],"left":["50","4"],"cells":[["1,000","400"],["80","32"]]}},
      {"type":"num","mode":"normal","level":"medium","q":"Second puzzle: 30 × ? = 12,000. What is the missing number on top?","answer":"400","calc":"12000/30","fig":"areaModel","pic":{"top":["?","?","5"],"left":["30","?"],"cells":[["12,000","600","150"],["1,600","80","?"]]}},
      {"type":"num","mode":"normal","level":"hard","q":"Second puzzle: the problem is 425 × 34. What is the product?","answer":"14450","calc":"425*34","fig":"areaModel","pic":{"top":["400","20","5"],"left":["30","4"],"cells":[["12,000","600","150"],["1,600","80","20"]]}}
    ] },
  {"id":"Z43","lesson":4,"concept":"Decimal area models","explain":"1.3 × 6.8: split into 1 + 0.3 and 6 + 0.8: 6 + 0.8 + 1.8 + 0.24 = 8.84. Also 29.3 × 0.34 = 9.962, 4.2 × 5.6 = 23.52, 7.3 × 0.49 = 3.577, 5.7 × 9.1 = 51.87, 18.2 × 2.8 = 50.96, 3.55 × 0.75 = 2.6625, 70.9 × 4.6 = 326.14.",
    "variants": [
      {"type":"num","mode":"normal","level":"medium","q":"Fill the cell 0.3 × 0.8.","answer":"0.24","calc":"0.3*0.8","fig":"areaModel","pic":{"top":["6","0.8"],"left":["1","0.3"],"cells":[["6","0.8"],["1.8","?"]],"hi":[1,1]}},
      {"type":"num","mode":"normal","level":"medium","q":"1.3 × 6.8 = ?","answer":"8.84","calc":"1.3*6.8","fig":"areaModel","pic":{"top":["6","0.8"],"left":["1","0.3"],"cells":[["6","0.8"],["1.8","0.24"]]}},
      {"type":"num","mode":"normal","level":"hard","q":"4.2 × 5.6 = ?","answer":"23.52","calc":"4.2*5.6"},
      {"type":"num","mode":"normal","level":"hard","q":"7.3 × 0.49 = ?","answer":"3.577","calc":"7.3*0.49"},
      {"type":"num","mode":"normal","level":"hard","q":"5.7 × 9.1 = ?","answer":"51.87","calc":"5.7*9.1"},
      {"type":"num","mode":"normal","level":"hard","q":"18.2 × 2.8 = ?","answer":"50.96","calc":"18.2*2.8"},
      {"type":"num","mode":"normal","level":"hard","q":"29.3 × 0.34 = ?","answer":"9.962","calc":"29.3*0.34"}
    ] },
  {"id":"Z44","lesson":4,"boss":true,"concept":"Challenge: Malak’s cinder blocks","explain":"12 pallets of 1.36 t: the area model 1 + 0.3 + 0.06 by 10 + 2 needs decimal points in the partial products: 10, 3, 0.6, 2, 0.6, 0.12. Total 16.32 t, close to the estimate 12 × 1.4 ≈ 17.",
    "variants": [
      {"type":"num","mode":"boss","level":"hard","q":"Malak wrote 30 in the cell 10 × 0.3. What should it be?","answer":"3","calc":"10*0.3","fig":"areaModel","pic":{"top":["1","0.3","0.06"],"left":["10","2"],"cells":[["10","30","6"],["2","6","12"]],"hi":[0,1]}},
      {"type":"num","mode":"boss","level":"hard","q":"The cell 2 × 0.06 says 12. What should it be?","answer":"0.12","calc":"2*0.06"},
      {"type":"num","mode":"boss","level":"hard","q":"12 pallets of 1.36 t each. How much do they weigh all together?","answer":"16.32","calc":"12*1.36","unit":"t"},
      {"type":"num","mode":"boss","level":"hard","q":"3.55 × 0.75 = ?","answer":"2.6625","calc":"3.55*0.75"},
      {"type":"num","mode":"boss","level":"hard","q":"70.9 × 4.6 = ?","answer":"326.14","calc":"70.9*4.6"}
    ] },
  /* ---------- Lesson 5 · Multiplying Decimals through the Hundredths Place (pages 101-102) ---------- */
  {"id":"Z51","lesson":5,"concept":"Place the decimal point","explain":"Without multiplying, estimate: 5.8 × 7.4 ≈ 6 × 7 = 42, so the digits 4,292 make 42.92. 32.4 × 5.3 ≈ 30 × 5 = 150 → 171.72. 11.68 × 2.4 ≈ 12 × 2 = 24 → 28.032. 15.4 × 0.49 ≈ 15 × 0.5 = 7.5 → 7.546.",
    "variants": [
      {"type":"mc","mode":"normal","level":"medium","q":"5.8 × 7.4: the digits of the product are 4292. Where is the decimal point?","options":["42.92","4.292","429.2","0.4292"],"answer":0},
      {"type":"mc","mode":"normal","level":"medium","q":"32.4 × 5.3: the digits are 17172. Which product?","options":["171.72","17.172","1,717.2","1.7172"],"answer":0},
      {"type":"mc","mode":"normal","level":"medium","q":"11.68 × 2.4: the digits are 28032. Which product?","options":["28.032","280.32","2.8032","2,803.2"],"answer":0},
      {"type":"mc","mode":"normal","level":"medium","q":"15.4 × 0.49: the digits are 7546. Which product?","options":["7.546","75.46","0.7546","754.6"],"answer":0},
      {"type":"mc","mode":"normal","level":"medium","q":"43 × 18 = 774. So 4.3 × 0.18 = ?","options":["0.774","7.74","77.4","0.0774"],"answer":0}
    ] },
  {"id":"Z52","lesson":5,"concept":"The standard algorithm with decimals","explain":"Multiply as with whole numbers, then count the decimal places of both factors: 29.35 × 3.4 has 2 + 1 = 3 places: 99.790 = 99.79.",
    "variants": [
      {"type":"num","mode":"normal","level":"hard","q":"29.35 × 3.4 = ?","answer":"99.79","calc":"29.35*3.4"},
      {"type":"num","mode":"normal","level":"hard","q":"43.2 × 0.24 = ?","answer":"10.368","calc":"43.2*0.24"},
      {"type":"num","mode":"normal","level":"hard","q":"2.43 × 6.9 = ?","answer":"16.767","calc":"2.43*6.9"},
      {"type":"num","mode":"normal","level":"hard","q":"12.87 × 7.3 = ?","answer":"93.951","calc":"12.87*7.3"},
      {"type":"num","mode":"normal","level":"hard","q":"8.92 × 0.17 = ?","answer":"1.5164","calc":"8.92*0.17"},
      {"type":"num","mode":"normal","level":"medium","q":"1.74 × 35 = ?","answer":"60.9","calc":"1.74*35"},
      {"type":"num","mode":"normal","level":"hard","q":"47.8 × 5.2 = ?","answer":"248.56","calc":"47.8*5.2"},
      {"type":"num","mode":"normal","level":"easy","q":"How many decimal places will 10.21 × 0.64 have?","answer":"4","calc":"2+2"}
    ] },
  {"id":"Z53","lesson":5,"boss":true,"concept":"Challenge: Dalal and Doha","explain":"42.16 × 3.4 = 143.344. Dalal checks with the estimate 42 × 3 = 126 (close). Doha counts 2 + 1 = 3 decimal places. Both ways are right.",
    "variants": [
      {"type":"mc","mode":"boss","level":"hard","q":"42.16 × 3.4 = 143.344. Dalal used an estimate; Doha counted decimal places. Who is right?","options":["Both of them","Dalal only","Doha only","Neither"],"answer":0},
      {"type":"num","mode":"boss","level":"hard","q":"42.16 × 3.4 = ?","answer":"143.344","calc":"42.16*3.4"},
      {"type":"num","mode":"boss","level":"hard","q":"10.21 × 0.64 = ?","answer":"6.5344","calc":"10.21*0.64"}
    ] },
  /* ---------- Lesson 6 · Multiplying Decimals through the Thousandths Place (pages 103-104) ---------- */
  {"id":"Z61","lesson":6,"concept":"Place the decimal points in the factors","explain":"38 × 64 = 2,432, and 24.32 has 2 decimal places, so the factors share 2 places: 3.8 × 6.4 or 0.38 × 64. 532 × 17 = 9,044 → 9.044 needs 3 places: 5.32 × 1.7. 18 × 145 = 2,610 → 261 needs 1 place: 1.8 × 145. 826 × 43 → 3,551.8 needs 1 place: 82.6 × 43.",
    "variants": [
      {"type":"multi","mode":"normal","level":"hard","q":"Which give 38 × 64 = 24.32 after placing decimal points? Choose all the correct answers.","options":["3.8 × 6.4","0.38 × 64","3.8 × 64","38 × 0.064"],"answer":[0,1]},
      {"type":"mc","mode":"normal","level":"medium","q":"532 × 17 = 9.044. Which factors?","options":["5.32 × 1.7","53.2 × 1.7","5.32 × 17","0.532 × 1.7"],"answer":0},
      {"type":"mc","mode":"normal","level":"medium","q":"18 × 145 = 261. Which factors?","options":["1.8 × 145","18 × 1.45","1.8 × 14.5","0.18 × 145"],"answer":0},
      {"type":"mc","mode":"normal","level":"medium","q":"826 × 43 = 3,551.8. Which factors?","options":["82.6 × 43","8.26 × 43","82.6 × 4.3","826 × 0.43"],"answer":0}
    ] },
  {"id":"Z62","lesson":6,"concept":"The algorithm through the thousandths","explain":"7.184 × 6.3 = 45.2592 (3 + 1 = 4 decimal places) · 2.607 × 41 = 106.887 · 5.328 × 7.9 = 42.0912 · 8.108 × 0.45 = 3.6486 · 6.429 × 1.9 = 12.2151 · 8.375 × 20 = 167.5.",
    "variants": [
      {"type":"num","mode":"normal","level":"hard","q":"7.184 × 6.3 = ?","answer":"45.2592","calc":"7.184*6.3"},
      {"type":"num","mode":"normal","level":"hard","q":"2.607 × 41 = ?","answer":"106.887","calc":"2.607*41"},
      {"type":"num","mode":"normal","level":"hard","q":"5.328 × 7.9 = ?","answer":"42.0912","calc":"5.328*7.9"},
      {"type":"num","mode":"normal","level":"hard","q":"6.429 × 1.9 = ?","answer":"12.2151","calc":"6.429*1.9"},
      {"type":"num","mode":"normal","level":"medium","q":"8.375 × 20 = ?","answer":"167.5","calc":"8.375*20"},
      {"type":"num","mode":"timed","level":"easy","q":"How many decimal places in 7.184 × 6.3?","answer":"4","calc":"3+1","seconds":12}
    ] },
  {"id":"Z63","lesson":6,"boss":true,"concept":"Challenge: 8.108 × 0.45","explain":"8,108 × 45 = 364,860, and 3 + 2 = 5 decimal places: 3.64860 = 3.6486. The estimate 8 × 0.5 = 4 agrees.",
    "variants": [
      {"type":"num","mode":"boss","level":"hard","q":"8.108 × 0.45 = ?","answer":"3.6486","calc":"8.108*0.45"},
      {"type":"mc","mode":"boss","level":"hard","q":"Which estimate checks 8.108 × 0.45?","options":["8 × 0.5 = 4","8 × 5 = 40","80 × 0.5 = 40","8 × 0.05 = 0.4"],"answer":0},
      {"type":"num","mode":"boss","level":"hard","q":"How many decimal places in 8.108 × 0.45 before dropping the final zero?","answer":"5","calc":"3+2"}
    ] },
  /* ---------- Lesson 7 · Decimals and the Metric System (pages 105-107) ---------- */
  {"id":"Z71","lesson":7,"concept":"Choosing a metric unit","explain":"A pencil is measured in centimeters, a building and a dinner table in meters, the Nile River in kilometers, an insect in millimeters. 1 cm = 10 mm, 1 m = 100 cm, 1 km = 1,000 m.",
    "variants": [
      {"type":"match","mode":"normal","level":"easy","q":"Match each length with the best unit.","left":["The Nile River","An insect","A pencil","A building"],"right":["meters","kilometers","millimeters","centimeters"],"answer":[1,2,3,0]},
      {"type":"num","mode":"timed","level":"easy","q":"1 m = ? cm","answer":"100","calc":"100","seconds":10},
      {"type":"num","mode":"timed","level":"easy","q":"1 km = ? m","answer":"1000","calc":"1000","seconds":10},
      {"type":"num","mode":"timed","level":"easy","q":"1 cm = ? mm","answer":"10","calc":"10","seconds":10}
    ] },
  {"id":"Z72","lesson":7,"concept":"Metric measurements as decimals","explain":"1 mm = 0.1 cm = 0.001 m; 1 cm = 0.01 m; 1 g = 0.001 kg; 1 kg = 1,000 g; 1 mL = 0.001 L; 1 L = 1,000 mL.",
    "variants": [
      {"type":"num","mode":"normal","level":"easy","q":"1 mm = ? cm","answer":"0.1","calc":"0.1"},
      {"type":"num","mode":"normal","level":"easy","q":"1 mm = ? m","answer":"0.001","calc":"0.001"},
      {"type":"num","mode":"normal","level":"easy","q":"1 cm = ? m","answer":"0.01","calc":"0.01"},
      {"type":"num","mode":"normal","level":"easy","q":"1 g = ? kg","answer":"0.001","calc":"0.001"},
      {"type":"num","mode":"normal","level":"easy","q":"1 L = ? mL","answer":"1000","calc":"1000"}
    ] },
  {"id":"Z73","lesson":7,"concept":"Metric match","explain":"10,870 g = 10.87 kg · 3,465 mL = 3.465 L · 22 cm = 0.22 m · 0.7 m = 70 cm · 17.6 kg = 17,600 g · 95 mm = 9.5 cm · 19,629 mL = 19.629 L · 3.3 m = 330 cm · 700 g = 0.7 kg · 694 mm = 69.4 cm · 2.5 L = 2,500 mL · 7.8 cm = 78 mm.",
    "variants": [
      {"type":"mc","mode":"normal","level":"medium","q":"10,870 g = ? kg","options":["10.87","1.087","108.7","1,087"],"answer":0},
      {"type":"mc","mode":"normal","level":"medium","q":"3,465 mL = ? L","options":["3.465","0.3465","34.65","346.5"],"answer":0},
      {"type":"mc","mode":"normal","level":"medium","q":"22 cm = ? m","options":["0.22","2.2","220","2,200"],"answer":0},
      {"type":"mc","mode":"normal","level":"medium","q":"0.7 m = ? cm","options":["70","7","700","7,000"],"answer":0},
      {"type":"mc","mode":"normal","level":"medium","q":"17.6 kg = ? g","options":["17,600","1,760","1.76","0.176"],"answer":0},
      {"type":"mc","mode":"normal","level":"medium","q":"95 mm = ? cm","options":["9.5","950","9,500","95,000"],"answer":0},
      {"type":"mc","mode":"normal","level":"medium","q":"694 mm = ? cm","options":["69.4","6.94","6,940","0.694"],"answer":0},
      {"type":"mc","mode":"normal","level":"medium","q":"2.5 L = ? mL","options":["2,500","250","25","0.25"],"answer":0}
    ] },
  {"id":"Z74","lesson":7,"boss":true,"concept":"Challenge: Yousra weighs a cat","explain":"Yousra wrote 3.648 kg and her assistant wrote 3,648.0 g. Both are right: 3.648 × 1,000 = 3,648 g.",
    "variants": [
      {"type":"mc","mode":"boss","level":"hard","q":"A cat weighs 3.648 kg (Yousra) or 3,648.0 g (her assistant). Who is right?","options":["Both: 3.648 kg = 3,648 g","Only Yousra","Only the assistant","Neither"],"answer":0},
      {"type":"num","mode":"boss","level":"hard","q":"19,629 mL = ? L","answer":"19.629","calc":"19629*0.001"},
      {"type":"num","mode":"boss","level":"hard","q":"7.8 cm = ? mm","answer":"78","calc":"7.8*10"},
      {"type":"num","mode":"boss","level":"hard","q":"700 g = ? kg","answer":"0.7","calc":"700*0.001"}
    ] },
  /* ---------- Lesson 8 · Measurement, Decimals, and Powers of Ten (pages 108-109) ---------- */
  {"id":"Z81","lesson":8,"concept":"Powers of ten: missing numbers","explain":"425 × 10 = 4,250 · 3.7 × 100 = 370 · 0.94 × 0.1 = 0.094 · 425 × 0.001 = 0.425 · 3.7 × 0.1 = 0.37 · 0.94 × 1,000 = 940 · 1.8 × 1,000 = 1,800 · 6.512 × 0.1 = 0.6512 · 0.893 × 100 = 89.3.",
    "variants": [
      {"type":"num","mode":"timed","level":"easy","q":"425 × 10 = ?","answer":"4250","calc":"425*10","seconds":10},
      {"type":"num","mode":"timed","level":"easy","q":"0.94 × 0.1 = ?","answer":"0.094","calc":"0.94*0.1","seconds":12},
      {"type":"mc","mode":"normal","level":"medium","q":"425 × ? = 0.425","options":["0.001","0.01","0.1","1,000"],"answer":0},
      {"type":"mc","mode":"normal","level":"medium","q":"0.94 × ? = 940","options":["1,000","100","10","0.001"],"answer":0},
      {"type":"num","mode":"normal","level":"medium","q":"? × 1,000 = 1,800","answer":"1.8","calc":"1800/1000"},
      {"type":"num","mode":"normal","level":"medium","q":"? × 100 = 89.3","answer":"0.893","calc":"89.3/100"}
    ] },
  {"id":"Z82","lesson":8,"concept":"Converting with powers of ten","explain":"Amgad drinks 4,230 mL: 4,230 × 0.001 = 4.23 L. 142 cm × 0.01 = 1.42 m. 317 kg × 1,000 = 317,000 g. From a smaller unit to a bigger one multiply by 0.1, 0.01 or 0.001; from a bigger unit to a smaller one multiply by 10, 100 or 1,000.",
    "variants": [
      {"type":"mc","mode":"normal","level":"medium","q":"Amgad needs 4,230 mL of water. Which multiplication gives the liters?","options":["4,230 × 0.001","4,230 × 1,000","4,230 × 100","4,230 × 0.01"],"answer":0},
      {"type":"num","mode":"normal","level":"easy","q":"4,230 mL = ? L","answer":"4.23","calc":"4230*0.001","unit":"L"},
      {"type":"num","mode":"normal","level":"medium","q":"142 cm = ? m","answer":"1.42","calc":"142*0.01","unit":"m"},
      {"type":"num","mode":"normal","level":"medium","q":"317 kg = ? g","answer":"317000","calc":"317*1000","unit":"g"},
      {"type":"tf","mode":"normal","level":"medium","q":"To change kilograms to grams we multiply by 1,000.","answer":0}
    ] },
  {"id":"Z83","lesson":8,"concept":"Identify the correct conversion","explain":"Right: 0.007 kg × 1,000 = 7 g; 230 cm × 0.01 = 2.3 m; 4 cm × 0.01 = 0.04 m; 6,410 cm × 0.01 = 64.1 m; 6,410 m × 0.001 = 6.41 km; 350 cm × 0.01 = 3.5 m; 9,320 cm × 0.01 = 93.2 m. Wrong: 51 mm × 10 (51 × 0.1 = 5.1 cm); 4,800 mL × 0.1 (4.8 L); 500 mL × 1,000 (0.5 L); 5.67 m × 10 (567 cm); 782 mm × 10 (78.2 cm); 1.5 m × 0.01 (150 cm); 0.8 cm × 0.1 (8 mm); 10.3 m × 0.01 (1,030 cm); 9,320 mm × 10 (932 cm).",
    "variants": [
      {"type":"table","mode":"normal","level":"medium","q":"Is the multiplication right for the conversion?","cols":["Right","Wrong"],"items":["0.007 kg → g: × 1,000","51 mm → cm: × 10","230 cm → m: × 0.01","500 mL → L: × 1,000","6,410 m → km: × 0.001","1.5 m → cm: × 0.01"],"answer":[0,1,0,1,0,1]},
      {"type":"num","mode":"normal","level":"medium","q":"51 mm = ? cm","answer":"5.1","calc":"51*0.1"},
      {"type":"num","mode":"normal","level":"medium","q":"5.67 m = ? cm","answer":"567","calc":"5.67*100"},
      {"type":"num","mode":"normal","level":"medium","q":"6,410 m = ? km","answer":"6.41","calc":"6410*0.001"},
      {"type":"num","mode":"normal","level":"medium","q":"0.8 cm = ? mm","answer":"8","calc":"0.8*10"},
      {"type":"num","mode":"normal","level":"medium","q":"10.3 m = ? cm","answer":"1030","calc":"10.3*100"}
    ] },
  {"id":"Z84","lesson":8,"boss":true,"concept":"Challenge: Mohamed Ehab’s lifts","explain":"Snatch 173 kg; clean and jerk 201,000 g = 201,000 × 0.001 = 201 kg. The clean and jerk is greater by 28 kg.",
    "variants": [
      {"type":"num","mode":"boss","level":"hard","q":"Mohamed Ehab lifted 201,000 g in the clean and jerk. How many kg is that?","answer":"201","calc":"201000*0.001","unit":"kg"},
      {"type":"mc","mode":"boss","level":"hard","q":"Snatch 173 kg or clean and jerk 201,000 g: which is greater?","options":["Clean and jerk (201 kg)","Snatch (173 kg)","They are equal"],"answer":0},
      {"type":"num","mode":"boss","level":"hard","q":"By how many kg is it greater?","answer":"28","calc":"201-173","unit":"kg"}
    ] },
  /* ---------- Lesson 9 · Solving Multistep Story Problems (pages 110-111) ---------- */
  {"id":"Z91","lesson":9,"concept":"Marwan’s computer and Dalia’s juice","explain":"Change everything to one unit first. Marwan: 2 kg + 600 g + 0.03 kg + 1,750 g = 2 + 0.6 + 0.03 + 1.75 = 4.38 kg. Dalia: 1 L − 320 mL − 0.25 L = 1 − 0.32 − 0.25 = 0.43 L (430 mL).",
    "variants": [
      {"type":"num","mode":"normal","level":"hard","q":"A computer has parts of 2 kg, 600 g and 0.03 kg, and a last part of 1,750 g. What is its mass in kg?","answer":"4.38","calc":"2+0.6+0.03+1.75","unit":"kg"},
      {"type":"num","mode":"normal","level":"medium","q":"Dalia made 1 L of sugar cane juice. She drank 320 mL and her father 0.25 L. How many liters are left?","answer":"0.43","calc":"1-0.32-0.25","unit":"L"},
      {"type":"mc","mode":"normal","level":"medium","q":"What is the first step in Dalia’s problem?","options":["Change 320 mL to 0.32 L","Add 320 + 0.25","Multiply 320 × 0.25","Subtract 1 − 320"],"answer":0},
      {"type":"num","mode":"normal","level":"easy","q":"600 g = ? kg","answer":"0.6","calc":"600*0.001"}
    ] },
  {"id":"Z92","lesson":9,"concept":"Ehab and Eman grow","explain":"Ehab: 1.5 m = 150 cm; 150 − 138.2 = 11.8 cm. Eman: 1.34 m = 134 cm; 145 − 134 = 11 cm. Ehab grew more, by 0.8 cm.",
    "variants": [
      {"type":"num","mode":"normal","level":"medium","q":"Ehab was 138.2 cm in January and 1.5 m at the end of the year. How many cm did he grow?","answer":"11.8","calc":"150-138.2","unit":"cm"},
      {"type":"num","mode":"normal","level":"medium","q":"Eman was 1.34 m in January and 145 cm at the end of the year. How many cm did she grow?","answer":"11","calc":"145-134","unit":"cm"},
      {"type":"mc","mode":"normal","level":"medium","q":"Who grew more, and by how much?","options":["Ehab, by 0.8 cm","Eman, by 0.8 cm","Ehab, by 8 cm","They grew the same"],"answer":0}
    ] },
  {"id":"Z93","lesson":9,"boss":true,"concept":"Challenge: Rania’s bandages and Marwan’s circuit board","explain":"Rania needs 1.35 m × 4 = 5.4 m = 540 cm. Each package has 250 cm: 2 packages give 500 cm (not enough), so 3 packages (750 cm) and 750 − 540 = 210 cm are left. Old board 7.25 cm × 3.6 cm = 26.1 cm², new board 8 cm × 5.5 cm = 44 cm²: the difference is 17.9 cm².",
    "variants": [
      {"type":"num","mode":"boss","level":"hard","q":"Rania needs 1.35 m of bandage for each of 4 patients. How many cm in all?","answer":"540","calc":"1.35*4*100","unit":"cm"},
      {"type":"num","mode":"boss","level":"hard","q":"Each package has 250 cm. How many packages does she need?","answer":"3","calc":"3"},
      {"type":"num","mode":"boss","level":"hard","q":"How many cm will be left over?","answer":"210","calc":"3*250-540","unit":"cm"},
      {"type":"num","mode":"boss","level":"hard","q":"Old board 7.25 cm by 36 mm, new board 80 mm by 5.5 cm. What is the difference in area (cm²)?","answer":"17.9","calc":"8*5.5-7.25*3.6","unit":"cm²"}
    ] },
  /* ---------- Lesson 10 · Dividing by Powers of Ten (pages 112-113) ---------- */
  {"id":"Z101","lesson":10,"concept":"Division practice","explain":"515 ÷ 5 = 103 · 812 ÷ 13 = 62 R 6 · 2,402 ÷ 21 = 114 R 8 · 7,633 ÷ 32 = 238 R 17 · 690 ÷ 7 = 98 R 4.",
    "variants": [
      {"type":"num","mode":"timed","level":"easy","q":"515 ÷ 5 = ?","answer":"103","calc":"515/5","seconds":15},
      {"type":"num","mode":"normal","level":"medium","q":"812 ÷ 13 = ? (quotient without the remainder)","answer":"62","calc":"(812-6)/13"},
      {"type":"num","mode":"normal","level":"medium","q":"2,402 ÷ 21 = ? (quotient without the remainder)","answer":"114","calc":"(2402-8)/21"},
      {"type":"num","mode":"normal","level":"hard","q":"What is the remainder of 7,633 ÷ 32?","answer":"17","calc":"7633-32*238"}
    ] },
  {"id":"Z102","lesson":10,"concept":"Dividing by 10, 100, 1,000 and by 0.1, 0.01, 0.001","explain":"Dividing by 10, 100 or 1,000 makes the number smaller (digits move right): 2,500 ÷ 100 = 25, 2,500 ÷ 1,000 = 2.5. Dividing by 0.1, 0.01 or 0.001 makes it bigger (digits move left): 2,500 ÷ 0.1 = 25,000, 2,500 ÷ 0.01 = 250,000, 2,500 ÷ 0.001 = 2,500,000.",
    "variants": [
      {"type":"num","mode":"timed","level":"easy","q":"2,500 ÷ 100 = ?","answer":"25","calc":"2500/100","seconds":12},
      {"type":"num","mode":"timed","level":"easy","q":"2,500 ÷ 10 = ?","answer":"250","calc":"2500/10","seconds":12},
      {"type":"num","mode":"normal","level":"medium","q":"2,500 ÷ 0.1 = ?","answer":"25000","calc":"2500*10"},
      {"type":"num","mode":"normal","level":"medium","q":"2,500 ÷ 0.01 = ?","answer":"250000","calc":"2500*100"},
      {"type":"num","mode":"normal","level":"hard","q":"2,500 ÷ 0.001 = ?","answer":"2500000","calc":"2500*1000"},
      {"type":"num","mode":"normal","level":"medium","q":"Challenge: 2,500 ÷ 1,000 = ?","answer":"2.5","calc":"2500/1000"},
      {"type":"tf","mode":"normal","level":"medium","q":"Dividing by 0.1 makes a number bigger.","answer":0}
    ] },
  {"id":"Z103","lesson":10,"concept":"Fill it in","explain":"800 ÷ 100 = 8 · 800 ÷ 0.01 = 80,000 · 6,700 ÷ 1,000 = 6.7 · 32 ÷ 10 = 3.2 · 5.7 ÷ 0.1 = 57 · 5.7 ÷ 100 = 0.057 · 2.16 ÷ 0.01 = 216 · 71 ÷ 1,000 = 0.071 · 12.8 ÷ 0.01 = 1,280 · 0.4 ÷ 10 = 0.04 · 0.4 ÷ 0.001 = 400 · 29.08 ÷ 0.1 = 290.8 · 102.3 ÷ 0.01 = 10,230.",
    "variants": [
      {"type":"num","mode":"timed","level":"easy","q":"800 ÷ 0.1 = ?","answer":"8000","calc":"800*10","seconds":12},
      {"type":"num","mode":"normal","level":"medium","q":"6,700 ÷ 1,000 = ?","answer":"6.7","calc":"6700/1000"},
      {"type":"num","mode":"normal","level":"medium","q":"5.7 ÷ 100 = ?","answer":"0.057","calc":"5.7/100"},
      {"type":"num","mode":"normal","level":"medium","q":"2.16 ÷ 0.01 = ?","answer":"216","calc":"2.16*100"},
      {"type":"num","mode":"normal","level":"medium","q":"71 ÷ 1,000 = ?","answer":"0.071","calc":"71/1000"},
      {"type":"num","mode":"normal","level":"medium","q":"0.4 ÷ 0.001 = ?","answer":"400","calc":"0.4*1000"},
      {"type":"num","mode":"normal","level":"medium","q":"29.08 ÷ 0.1 = ?","answer":"290.8","calc":"29.08*10"},
      {"type":"num","mode":"normal","level":"hard","q":"102.3 ÷ 0.01 = ?","answer":"10230","calc":"102.3*100"}
    ] },
  {"id":"Z104","lesson":10,"boss":true,"concept":"Challenge: how hot?","explain":"Glass is blown at 1,100 °C. Water boils at about one tenth of that: 1,100 ÷ 10 = 1,100 × 0.1 = 110 °C (the closest choice). 1,100 × 10 and 1,100 ÷ 0.1 give 11,000.",
    "variants": [
      {"type":"multi","mode":"boss","level":"hard","q":"Water boils at about one tenth of 1,100 °C. Which choices give that temperature? Choose all the correct answers.","options":["1,100 ÷ 10","1,100 × 0.1","1,100 × 10","1,100 ÷ 0.1"],"answer":[0,1]},
      {"type":"num","mode":"boss","level":"hard","q":"1,100 ÷ 10 = ?","answer":"110","calc":"1100/10"},
      {"type":"num","mode":"boss","level":"hard","q":"12.8 ÷ 0.01 = ?","answer":"1280","calc":"12.8*100"}
    ] },
  /* ---------- Lesson 11 · Patterns and Relationships in Powers of Ten (pages 114-115) ---------- */
  {"id":"Z111","lesson":11,"concept":"The answer is…: 510.05","explain":"510.05 × 0.001 = 510.05 ÷ 1,000 = 0.51005 · × 0.01 = ÷ 100 = 5.1005 · × 0.1 = ÷ 10 = 51.005 · × 10 = ÷ 0.1 = 5,100.5 · × 100 = ÷ 0.01 = 51,005 · × 1,000 = ÷ 0.001 = 510,050.",
    "variants": [
      {"type":"num","mode":"normal","level":"medium","q":"510.05 × 0.01 = ?","answer":"5.1005","calc":"510.05*0.01","fig":"placeSlide","pic":{"num":"510.05"}},
      {"type":"num","mode":"normal","level":"medium","q":"510.05 × 10 = ?","answer":"5100.5","calc":"510.05*10","fig":"placeSlide","pic":{"num":"510.05"}},
      {"type":"num","mode":"normal","level":"medium","q":"510.05 ÷ 0.001 = ?","answer":"510050","calc":"510.05*1000","fig":"placeSlide","pic":{"num":"510.05"}},
      {"type":"num","mode":"normal","level":"medium","q":"510.05 ÷ 100 = ?","answer":"5.1005","calc":"510.05/100","fig":"placeSlide","pic":{"num":"510.05"}},
      {"type":"tf","mode":"normal","level":"medium","q":"510.05 × 0.1 and 510.05 ÷ 10 give the same answer.","answer":0}
    ] },
  {"id":"Z112","lesson":11,"concept":"Same answer, inverse operation","explain":"14.6 × 10 = 146 and 14.6 ÷ 0.1 = 146. 387.23 × 0.01 = 387.23 ÷ 100 = 3.8723. 9.102 × 100 = 9.102 ÷ 0.01 = 910.2. 65 × 100 = 65 ÷ 0.01 = 6,500. 0.39 × 0.1 = 0.39 ÷ 10 = 0.039. 0.75 × 1,000 = 0.75 ÷ 0.001 = 750. 28.4 × 0.01 = 28.4 ÷ 100 = 0.284. 150.8 × 1,000 = 150.8 ÷ 0.001 = 150,800.",
    "variants": [
      {"type":"mc","mode":"normal","level":"medium","q":"14.6 ÷ ? = 146","options":["0.1","10","0.01","100"],"answer":0},
      {"type":"mc","mode":"normal","level":"medium","q":"387.23 × ? = 3.8723","options":["0.01","100","0.1","0.001"],"answer":0},
      {"type":"mc","mode":"normal","level":"medium","q":"9.102 ÷ ? = 910.2","options":["0.01","100","0.1","10"],"answer":0},
      {"type":"mc","mode":"normal","level":"medium","q":"0.39 ÷ ? = 0.039","options":["10","0.1","100","0.01"],"answer":0},
      {"type":"mc","mode":"normal","level":"medium","q":"0.75 × ? = 750","options":["1,000","0.001","100","10"],"answer":0},
      {"type":"mc","mode":"normal","level":"medium","q":"150.8 ÷ ? = 150,800","options":["0.001","1,000","0.01","100"],"answer":0},
      {"type":"match","mode":"normal","level":"medium","q":"Match each multiplication with the division that has the same answer.","left":["× 10","× 0.01","× 1,000"],"right":["÷ 0.001","÷ 0.1","÷ 100"],"answer":[1,2,0]}
    ] },
  {"id":"Z113","lesson":11,"concept":"Metric conversions with × and ÷","explain":"357 cm = 3.57 m: 357 × 0.01 = 357 ÷ 100 = 3.57. 712 mL = 0.712 L (× 0.001 or ÷ 1,000). 23 m = 2,300 cm (× 100 or ÷ 0.01). 300 g = 0.3 kg. 5,200 mm = 5.2 m = 520 cm.",
    "variants": [
      {"type":"num","mode":"normal","level":"medium","q":"712 mL = ? L","answer":"0.712","calc":"712/1000"},
      {"type":"num","mode":"normal","level":"medium","q":"23 m = ? cm","answer":"2300","calc":"23*100"},
      {"type":"num","mode":"normal","level":"medium","q":"300 g = ? kg","answer":"0.3","calc":"300/1000"},
      {"type":"num","mode":"normal","level":"medium","q":"5,200 mm = ? m","answer":"5.2","calc":"5200/1000"},
      {"type":"num","mode":"normal","level":"medium","q":"5,200 mm = ? cm","answer":"520","calc":"5200/10"},
      {"type":"mc","mode":"normal","level":"medium","q":"Which pair changes 712 mL to liters?","options":["712 × 0.001 and 712 ÷ 1,000","712 × 1,000 and 712 ÷ 0.001","712 × 0.01 and 712 ÷ 100","712 × 0.1 and 712 ÷ 10"],"answer":0}
    ] },
  {"id":"Z114","lesson":11,"boss":true,"concept":"Challenge: Nour’s juice container","explain":"2,250 mL = 2.25 L, 650 mL = 0.65 L, plus 0.95 L: 2.25 + 0.95 + 0.65 = 3.85 L. The 3 L container is too small; the 4 L container is the best fit.",
    "variants": [
      {"type":"num","mode":"boss","level":"hard","q":"Nour mixes 2,250 mL of mango juice, 0.95 L of orange juice and 650 mL of guava juice. How many liters in all?","answer":"3.85","calc":"2.25+0.95+0.65","unit":"L"},
      {"type":"mc","mode":"boss","level":"hard","q":"Which container should Nour use: 3 L, 4 L or 5 L?","options":["4 L","3 L","5 L"],"answer":0},
      {"type":"num","mode":"boss","level":"hard","q":"2,250 mL ÷ 1,000 = ? L","answer":"2.25","calc":"2250/1000"}
    ] },
  /* ---------- Lesson 12 · Dividing Decimals by Whole Numbers (pages 116-117) ---------- */
  {"id":"Z121","lesson":12,"concept":"What does the remainder mean?","explain":"150 m of wire cut into 40 equal whole-meter parts: 150 ÷ 40 = 3 m each, with 30 m left. 2,050 m of road with 75 trees at whole-meter distances: 2,050 ÷ 75 = 27 m, with 25 m left.",
    "variants": [
      {"type":"num","mode":"normal","level":"medium","q":"150 m of wire into 40 equal parts, each a whole number of meters. How long is each part?","answer":"3","calc":"(150-30)/40","unit":"m"},
      {"type":"num","mode":"normal","level":"medium","q":"How many meters are left?","answer":"30","calc":"150-40*3","unit":"m"},
      {"type":"num","mode":"normal","level":"medium","q":"2,050 m of road, 75 trees at equal whole-meter distances. What is the distance?","answer":"27","calc":"(2050-25)/75","unit":"m"},
      {"type":"num","mode":"normal","level":"medium","q":"What is the remaining distance?","answer":"25","calc":"2050-75*27","unit":"m"}
    ] },
  {"id":"Z122","lesson":12,"concept":"No remainder needed: the quotient is a decimal","explain":"Keep dividing after the ones by writing zeros after the decimal point: 150 ÷ 40 = 3.75 m. 4.5 ÷ 30 = 0.15 m. 51.65 ÷ 5 = 10.33 · 62.24 ÷ 16 = 3.89 · 73.02 ÷ 6 = 12.17 · 589.5 ÷ 30 = 19.65.",
    "variants": [
      {"type":"num","mode":"normal","level":"medium","q":"150 m of wire into 40 equal parts (the length may be a decimal). How long is each part?","answer":"3.75","calc":"150/40","unit":"m"},
      {"type":"num","mode":"normal","level":"medium","q":"Emad cuts 4.5 m of wire into 30 equal pieces. How long is each piece?","answer":"0.15","calc":"4.5/30","unit":"m"},
      {"type":"num","mode":"normal","level":"medium","q":"51.65 ÷ 5 = ?","answer":"10.33","calc":"51.65/5","fig":"longDiv","pic":{"div":"5","num":"51.65"}},
      {"type":"num","mode":"normal","level":"hard","q":"62.24 ÷ 16 = ?","answer":"3.89","calc":"62.24/16","fig":"longDiv","pic":{"div":"16","num":"62.24"}},
      {"type":"num","mode":"normal","level":"hard","q":"73.02 ÷ 6 = ?","answer":"12.17","calc":"73.02/6"},
      {"type":"num","mode":"normal","level":"hard","q":"589.5 ÷ 30 = ?","answer":"19.65","calc":"589.5/30"}
    ] },
  {"id":"Z123","lesson":12,"boss":true,"concept":"Challenge: no hibiscus left over","explain":"Dalia pours 20 L of hibiscus equally into 50 cups: 20 ÷ 50 = 0.4 L in each cup.",
    "variants": [
      {"type":"num","mode":"boss","level":"hard","q":"Dalia pours 20 L of hibiscus equally into 50 cups. How many liters in each cup?","answer":"0.4","calc":"20/50","unit":"L"},
      {"type":"tf","mode":"boss","level":"hard","q":"20 ÷ 50 has no whole-number answer, but its decimal quotient is 0.4.","answer":0},
      {"type":"num","mode":"boss","level":"hard","q":"Check with multiplication: 0.4 × 50 = ?","answer":"20","calc":"0.4*50"}
    ] },
  /* ---------- Lesson 13 · Dividing Decimals by Decimals (pages 118-119) ---------- */
  {"id":"Z131","lesson":13,"concept":"Missing numbers","explain":"15 ÷ 3 = 150 ÷ 30 = 1,500 ÷ 300 = 5 and 144 ÷ 12 = 1,440 ÷ 120 = 14,400 ÷ 1,200 = 12: multiplying both numbers by the same power of ten keeps the quotient. 0.3 × 10 = 3, 0.14 × 100 = 14, 6.09 × 100 = 609, 157.4 × 10 = 1,574, 0.07 × 100 = 7, 4.9 × 10 = 49.",
    "variants": [
      {"type":"num","mode":"timed","level":"easy","q":"150 ÷ ? = 5","answer":"30","calc":"150/5","seconds":12},
      {"type":"num","mode":"timed","level":"easy","q":"1,440 ÷ ? = 12","answer":"120","calc":"1440/12","seconds":15},
      {"type":"num","mode":"timed","level":"easy","q":"0.14 × ? = 14","answer":"100","calc":"100","seconds":12},
      {"type":"num","mode":"normal","level":"easy","q":"157.4 × ? = 1,574","answer":"10","calc":"10"},
      {"type":"tf","mode":"normal","level":"medium","q":"15 ÷ 3 and 1,500 ÷ 300 have the same quotient.","answer":0}
    ] },
  {"id":"Z132","lesson":13,"concept":"Make the divisor a whole number","explain":"Multiply the divisor and the dividend by the same power of ten so the divisor is whole: 26.4 ÷ 2.2 = 264 ÷ 22 = 12; 99 ÷ 0.4 = 990 ÷ 4 = 247.5; 1.5 ÷ 0.04 = 150 ÷ 4 = 37.5.",
    "variants": [
      {"type":"mc","mode":"normal","level":"medium","q":"26.4 ÷ 2.2 has the same quotient as…","options":["264 ÷ 22","26.4 ÷ 22","264 ÷ 2.2","2.64 ÷ 22"],"answer":0},
      {"type":"num","mode":"normal","level":"medium","q":"26.4 ÷ 2.2 = ?","answer":"12","calc":"264/22"},
      {"type":"num","mode":"normal","level":"hard","q":"99 ÷ 0.4 = ?","answer":"247.5","calc":"990/4"},
      {"type":"num","mode":"normal","level":"hard","q":"1.5 ÷ 0.04 = ?","answer":"37.5","calc":"150/4"},
      {"type":"mc","mode":"normal","level":"medium","q":"1.5 ÷ 0.04: by what do we multiply both numbers?","options":["100","10","1,000","4"],"answer":0}
    ] },
  {"id":"Z133","lesson":13,"concept":"Let’s try it together","explain":"9.956 ÷ 1.9 = 5.24 · 3.431 ÷ 7.3 = 0.47 · 0.51 ÷ 0.04 = 12.75 · 1.43 ÷ 0.05 = 28.6 · 44 ÷ 0.5 = 88 · 70 ÷ 0.7 = 100 · 90 ÷ 0.03 = 3,000 · 57.6 ÷ 0.04 = 1,440 · 0.91 ÷ 0.5 = 1.82 · 1.3 ÷ 0.5 = 2.6.",
    "variants": [
      {"type":"num","mode":"normal","level":"medium","q":"44 ÷ 0.5 = ?","answer":"88","calc":"440/5"},
      {"type":"num","mode":"normal","level":"medium","q":"70 ÷ 0.7 = ?","answer":"100","calc":"700/7"},
      {"type":"num","mode":"normal","level":"medium","q":"90 ÷ 0.03 = ?","answer":"3000","calc":"9000/3"},
      {"type":"num","mode":"normal","level":"hard","q":"9.956 ÷ 1.9 = ?","answer":"5.24","calc":"99.56/19"},
      {"type":"num","mode":"normal","level":"hard","q":"0.51 ÷ 0.04 = ?","answer":"12.75","calc":"51/4"},
      {"type":"num","mode":"normal","level":"hard","q":"1.43 ÷ 0.05 = ?","answer":"28.6","calc":"143/5"},
      {"type":"num","mode":"normal","level":"hard","q":"57.6 ÷ 0.04 = ?","answer":"1440","calc":"5760/4"},
      {"type":"num","mode":"normal","level":"medium","q":"1.3 ÷ 0.5 = ?","answer":"2.6","calc":"13/5"}
    ] },
  {"id":"Z134","lesson":13,"boss":true,"concept":"Challenge: the error in 77.43 ÷ 0.3","explain":"The student wrote 77.43 ÷ 0.3 = 7.743 ÷ 3: he multiplied the divisor by 10 but DIVIDED the dividend by 10. Both must be multiplied by 10: 774.3 ÷ 3 = 258.1.",
    "variants": [
      {"type":"mc","mode":"boss","level":"hard","q":"A student says 77.43 ÷ 0.3 has the same quotient as 7.743 ÷ 3. What is wrong?","options":["He moved the dividend’s point the wrong way: it is 774.3 ÷ 3","He should divide by 0.3 without changing anything","He divided 7.743 ÷ 3 wrongly","It should be 77.43 ÷ 3"],"answer":0},
      {"type":"num","mode":"boss","level":"hard","q":"77.43 ÷ 0.3 = ?","answer":"258.1","calc":"774.3/3"},
      {"type":"num","mode":"boss","level":"hard","q":"3.431 ÷ 7.3 = ?","answer":"0.47","calc":"34.31/73"},
      {"type":"num","mode":"boss","level":"hard","q":"0.91 ÷ 0.5 = ?","answer":"1.82","calc":"9.1/5"}
    ] }
];
})();
