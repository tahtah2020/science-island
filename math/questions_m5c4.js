/* Math · Grade 5 · Unit 4 "Division with Whole Numbers" · Languages track (English), first term 2026/2027
   Source: the English school book (Math Term 1), Unit 4 (pages 80-90): Concept 1 "Models for Division" (lessons 1-2), Concept 2 "Dividing by 2-Digit Divisors" (lessons 3-5).
   Idea ids: Units 1-3 used every letter A-X, so Unit 4 uses Y with the lesson as the first digit: Y11-Y15 lesson 1 · Y21-Y24 lesson 2 · Y31-Y35 lesson 3 · Y41-Y44 lesson 4 · Y51-Y55 lesson 5.
   Boss ideas: Y15, Y24, Y35, Y44, Y55.
   The book is an activity book with no printed answers: the numbers and situations are the book's own (2,207 ÷ 7, 1,625 ÷ 13, Model Match, the 2,852 ÷ 24 error, Winner Takes All,
   Rana's coffee shop and cookies, Ayman, Keep the Leftovers, Ziad's buttons, the baklava trays, balah el sham, the textile factory, the steel, the paper stores, the quilts, Nagi, Malek)
   and EVERY number answer is computed (calc, checked by tools/check_questions.js).
   Pictures (math/m5_art.js): divModel (the area model of division) and longDiv (the algorithm), pictures above a question.
   Review notes:
   - Lesson 2: the book prints no estimate for 5,814 ÷ 47; 6,000 ÷ 50 = 120 is used (the exact answer 123 R 33 is close). «Winner Takes All» uses the book's own problems as cards.
   - Lesson 3: Rana's coffee-bean problem has blank numbers in the book and is not asked. «How could Rana package the cookies with none left?» is open; it is asked as
     «which bag sizes leave none» (10 and 14 divide 350; 12 and 15 do not).
   - Lesson 3: the definitions of dividend, divisor, quotient and remainder are the standard ones (the book highlights the words without defining them).
   - Lesson 4: Ayman's mistake is named as the missing 0 in the quotient (25 is smaller than 43), as his work shows.
   - Not asked: the Whiteboard drawing, Rana's coffee beans, «write about math», «Check Your Understanding», the strategies discussion.
   Generated together with questions_m5c4_ar.js (same ids, phrasings order and answers). */
(function () {
window.CHAPTER = { id: 'm5c4', title: 'Division with Whole Numbers', grade: 'Grade 5', track: 'Languages' };

window.IDEAS = [
  /* ---------- Lesson 1 · Dividing Using Area Model (pages 81-82) ---------- */
  {"id":"Y11","lesson":1,"concept":"Patterns in multiplication","explain":"When a factor gets one more zero, the product gets one more zero: 3 × 5 = 15, 3 × 50 = 150, 3 × 500 = 1,500; 4 × 2 = 8, 40 × 20 = 800, 400 × 200 = 80,000.",
    "variants": [
      {"type":"num","mode":"timed","level":"easy","q":"3 × 50 = ?","answer":"150","calc":"3*50","seconds":10},
      {"type":"num","mode":"timed","level":"easy","q":"3 × 500 = ?","answer":"1500","calc":"3*500","seconds":10},
      {"type":"num","mode":"timed","level":"easy","q":"40 × 20 = ?","answer":"800","calc":"40*20","seconds":12},
      {"type":"num","mode":"timed","level":"medium","q":"400 × 200 = ?","answer":"80000","calc":"400*200","seconds":15},
      {"type":"mc","mode":"normal","level":"medium","q":"4 × 2 = 8. What is 400 × 200?","options":["80,000","8,000","800","800,000"],"answer":0},
      {"type":"tf","mode":"normal","level":"easy","q":"3 × 500 has two more zeros than 3 × 5.","answer":0}
    ] },
  {"id":"Y12","lesson":1,"concept":"The area model of division: 2,207 ÷ 7","explain":"Take away big chunks of 7s: 7 × 300 = 2,100 leaves 107; 7 × 10 = 70 leaves 37; 7 × 5 = 35 leaves 2. The quotient is 300 + 10 + 5 = 315 and the remainder is 2.",
    "variants": [
      {"type":"mc","mode":"normal","level":"medium","q":"2,207 ÷ 7: what is the biggest hundreds chunk we can take first?","options":["300 (7 × 300 = 2,100)","400 (7 × 400 = 2,800)","200 (7 × 200 = 1,400)","3 (7 × 3 = 21)"],"answer":0,"fig":"divModel","pic":{"div":"7","top":["?","",""],"cells":[["2,207","?",""],null,null],"hi":0}},
      {"type":"num","mode":"normal","level":"easy","q":"After 7 × 300 = 2,100, what is left of 2,207?","answer":"107","calc":"2207-2100","fig":"divModel","pic":{"div":"7","top":["300","",""],"cells":[["2,207","2,100","?"],null,null]}},
      {"type":"num","mode":"normal","level":"medium","q":"Use the model: 2,207 ÷ 7 = ? (write the quotient)","answer":"315","calc":"300+10+5","fig":"divModel","pic":{"div":"7","top":["300","10","5"],"cells":[["2,207","2,100","107"],["107","70","37"],["37","35","2"]]}},
      {"type":"num","mode":"normal","level":"medium","q":"What is the remainder of 2,207 ÷ 7?","answer":"2","calc":"2207-7*315","fig":"divModel","pic":{"div":"7","top":["300","10","5"],"cells":[["2,207","2,100","107"],["107","70","37"],["37","35","2"]]}},
      {"type":"tf","mode":"timed","level":"easy","q":"In the area model of division, we add the numbers on top to find the quotient.","answer":0,"seconds":14}
    ] },
  {"id":"Y13","lesson":1,"concept":"Dividing by a 2-digit number with the model: 1,625 ÷ 13","explain":"13 × 100 = 1,300 leaves 325; 13 × 20 = 260 leaves 65; 13 × 5 = 65 leaves 0. So 1,625 ÷ 13 = 100 + 20 + 5 = 125, with no remainder.",
    "variants": [
      {"type":"num","mode":"normal","level":"easy","q":"13 × 100 = 1,300. What is left of 1,625?","answer":"325","calc":"1625-1300","fig":"divModel","pic":{"div":"13","top":["100","",""],"cells":[["1,625","1,300","?"],null,null]}},
      {"type":"num","mode":"normal","level":"medium","q":"325 is left. 13 × 20 = 260. What is left now?","answer":"65","calc":"325-260","fig":"divModel","pic":{"div":"13","top":["100","20",""],"cells":[["1,625","1,300","325"],["325","260","?"],null]}},
      {"type":"num","mode":"normal","level":"medium","q":"1,625 ÷ 13 = ?","answer":"125","calc":"1625/13","fig":"divModel","pic":{"div":"13","top":["100","20","5"],"cells":[["1,625","1,300","325"],["325","260","65"],["65","65","0"]]}},
      {"type":"mc","mode":"normal","level":"medium","q":"Which chunk finishes the model? 65 is left and the divisor is 13.","options":["5","50","6","13"],"answer":0}
    ] },
  {"id":"Y14","lesson":1,"concept":"Model match","explain":"3,622 ÷ 31: chunks 100, 10, 6 → 116 with 26 left. 1,050 ÷ 7: chunks 100 and 50 → 150 (7 × 100 = 700, 7 × 50 = 350). 9,234 ÷ 81: chunks 100, 10, 2, 2 → 114 (8,100, 810, 162, 162).",
    "variants": [
      {"type":"match","mode":"normal","level":"medium","q":"Match each problem with the chunks of its area model.","left":["3,622 ÷ 31","1,050 ÷ 7","9,234 ÷ 81"],"right":["100 + 50","100 + 10 + 2 + 2","100 + 10 + 6"],"answer":[2,0,1]},
      {"type":"num","mode":"normal","level":"medium","q":"What is the missing divisor of this model?","answer":"7","calc":"700/100","fig":"divModel","pic":{"div":"?","top":["100","50"],"cells":[["1,050","700","350"],["350","350","0"]]}},
      {"type":"num","mode":"normal","level":"medium","q":"9,234 ÷ 81 = ?","answer":"114","calc":"9234/81","fig":"divModel","pic":{"div":"81","top":["100","10","2","2"],"cells":[["9,234","8,100","1,134"],["1,134","810","324"],["324","162","162"],["162","162","0"]]}},
      {"type":"num","mode":"normal","level":"medium","q":"3,622 ÷ 31: what is the quotient (without the remainder)?","answer":"116","calc":"100+10+6","fig":"divModel","pic":{"div":"31","top":["100","10","6"],"cells":[["3,622","3,100","522"],["522","310","212"],["212","186","26"]]}},
      {"type":"num","mode":"normal","level":"medium","q":"What is the remainder of 3,622 ÷ 31?","answer":"26","calc":"3622-31*116","fig":"divModel","pic":{"div":"31","top":["100","10","6"],"cells":[["3,622","3,100","522"],["522","310","212"],["212","186","26"]]}},
      {"type":"num","mode":"normal","level":"medium","q":"What is the missing chunk on top? (81 × ? = 810)","answer":"10","calc":"810/81","fig":"divModel","pic":{"div":"81","top":["100","?","2","2"],"cells":[["9,234","8,100","1,134"],["1,134","810","324"],["324","162","162"],["162","162","0"]],"hi":1}}
    ] },
  {"id":"Y15","lesson":1,"boss":true,"concept":"Challenge: the mistake in 2,852 ÷ 24","explain":"The student took away 24 × 10, 24 × 5, 24 × 100 and 24 × 3 correctly and 20 was left. But 20 is the remainder, not the quotient. The quotient is 10 + 5 + 100 + 3 = 118, so 2,852 ÷ 24 = 118 with a remainder of 20.",
    "variants": [
      {"type":"mc","mode":"boss","level":"hard","q":"A student wrote 2,852 ÷ 24 = 20. What did the student do wrong?","options":["20 is the remainder; the quotient is the sum of the chunks on top","24 × 100 is not 2,400","He subtracted 240 wrongly","He should have stopped at 92"],"answer":0,"fig":"divModel","pic":{"div":"24","top":["10","5","100","3"],"cells":[["2,852","240","2,612"],["2,612","120","2,492"],["2,492","2,400","92"],["92","72","20"]]}},
      {"type":"num","mode":"boss","level":"hard","q":"Find the right quotient: 2,852 ÷ 24 = ? (with a remainder of 20)","answer":"118","calc":"10+5+100+3","fig":"divModel","pic":{"div":"24","top":["10","5","100","3"],"cells":[["2,852","240","2,612"],["2,612","120","2,492"],["2,492","2,400","92"],["92","72","20"]]}},
      {"type":"num","mode":"boss","level":"hard","q":"2,207 ÷ 7 = 315 with a remainder of ?","answer":"2","calc":"2207-7*315"},
      {"type":"num","mode":"boss","level":"hard","q":"3,622 ÷ 31 = ? (quotient without the remainder)","answer":"116","calc":"(3622-26)/31"}
    ] },
  /* ---------- Lesson 2 · Estimating Quotients (pages 83-84) ---------- */
  {"id":"Y21","lesson":2,"concept":"Mental math with division","explain":"Cross out the same number of zeros: 5,600 ÷ 70 = 560 ÷ 7 = 80; 140 ÷ 20 = 14 ÷ 2 = 7; 8,100 ÷ 90 = 90; 2,400 ÷ 80 = 30; 3,600 ÷ 9 = 400.",
    "variants": [
      {"type":"num","mode":"timed","level":"easy","q":"5,600 ÷ 70 = ?","answer":"80","calc":"5600/70","seconds":15},
      {"type":"num","mode":"timed","level":"easy","q":"140 ÷ 20 = ?","answer":"7","calc":"140/20","seconds":12},
      {"type":"num","mode":"timed","level":"easy","q":"8,100 ÷ 90 = ?","answer":"90","calc":"8100/90","seconds":15},
      {"type":"num","mode":"timed","level":"easy","q":"2,400 ÷ 80 = ?","answer":"30","calc":"2400/80","seconds":15},
      {"type":"num","mode":"timed","level":"easy","q":"3,600 ÷ 9 = ?","answer":"400","calc":"3600/9","seconds":15},
      {"type":"mc","mode":"normal","level":"medium","q":"Which has the same quotient as 5,600 ÷ 70?","options":["560 ÷ 7","56 ÷ 70","5,600 ÷ 7","56 ÷ 7,000"],"answer":0}
    ] },
  {"id":"Y22","lesson":2,"concept":"Estimating with compatible numbers","explain":"Change the numbers to close numbers that divide easily: 5,814 ÷ 47 is about 6,000 ÷ 50 = 120. The exact answer, 123 with 33 left, is close to the estimate, so it is reasonable.",
    "variants": [
      {"type":"mc","mode":"normal","level":"medium","q":"Estimate 5,814 ÷ 47 with compatible numbers.","options":["6,000 ÷ 50 = 120","5,814 ÷ 50 = 116.28","6,000 ÷ 47 = 127","5,000 ÷ 7 = 714"],"answer":0},
      {"type":"num","mode":"normal","level":"hard","q":"5,814 ÷ 47 = ? (quotient without the remainder)","answer":"123","calc":"(5814-33)/47"},
      {"type":"num","mode":"normal","level":"hard","q":"What is the remainder of 5,814 ÷ 47?","answer":"33","calc":"5814-47*123"},
      {"type":"term","mode":"normal","level":"medium","q":"Numbers close to the real ones that are easy to divide in your head, like 6,000 and 50 for 5,814 ÷ 47.","answer":"Compatible numbers","choices":["Prime numbers","Multiples","Remainders"]},
      {"type":"tf","mode":"normal","level":"easy","q":"We use an estimate to check if a quotient is reasonable.","answer":0}
    ] },
  {"id":"Y23","lesson":2,"concept":"Which estimated quotient is greater?","explain":"In the card game «Winner Takes All» each player estimates the quotient with compatible numbers; the greater estimate wins. 2,207 ÷ 7 is about 2,100 ÷ 7 = 300, 8,014 ÷ 46 is about 8,000 ÷ 40 = 200, 756 ÷ 22 is about 800 ÷ 20 = 40.",
    "variants": [
      {"type":"mc","mode":"normal","level":"medium","q":"Which card has the greater estimated quotient?","options":["2,207 ÷ 7 (about 300)","8,014 ÷ 46 (about 200)"],"answer":0},
      {"type":"mc","mode":"normal","level":"medium","q":"Estimate 756 ÷ 22.","options":["about 40","about 4","about 400"],"answer":0},
      {"type":"mc","mode":"normal","level":"medium","q":"Estimate 8,014 ÷ 46.","options":["about 200","about 20","about 2,000"],"answer":0},
      {"type":"tf","mode":"timed","level":"easy","q":"In «Winner Takes All», the player with the smaller estimated quotient takes both cards.","answer":1,"seconds":15}
    ] },
  {"id":"Y24","lesson":2,"boss":true,"concept":"Challenge: is the quotient reasonable?","explain":"Compare the answer with an estimate. 5,814 ÷ 47 ≈ 120, so 12 is not reasonable. 3,622 ÷ 31 ≈ 3,000 ÷ 30 = 100, so 116 is reasonable.",
    "variants": [
      {"type":"mc","mode":"boss","level":"hard","q":"Someone says 5,814 ÷ 47 = 12. Is it reasonable?","options":["No: the estimate is about 120","Yes: 12 is close to 47","No: the estimate is about 1,200"],"answer":0},
      {"type":"multi","mode":"boss","level":"hard","q":"Which quotients are reasonable? Choose all the correct answers.","options":["3,622 ÷ 31 = 116 R 26","1,625 ÷ 13 = 125","9,234 ÷ 81 = 14","2,207 ÷ 7 = 3,152"],"answer":[0,1]},
      {"type":"num","mode":"boss","level":"hard","q":"Estimate 8,100 ÷ 90 exactly in your head: ?","answer":"90","calc":"8100/90"}
    ] },
  /* ---------- Lesson 3 · Using the division algorithm (pages 85-86) ---------- */
  {"id":"Y31","lesson":3,"concept":"The words of division","explain":"In 200 ÷ 17 = 11 R 13: 200 is the dividend, 17 is the divisor, 11 is the quotient and 13 is the remainder.",
    "variants": [
      {"type":"term","mode":"timed","level":"easy","q":"The number we divide by: 17 in 200 ÷ 17.","answer":"Divisor","choices":["Dividend","Quotient","Remainder"],"seconds":15},
      {"type":"term","mode":"timed","level":"easy","q":"The answer of a division: 11 in 200 ÷ 17 = 11 R 13.","answer":"Quotient","choices":["Divisor","Dividend","Remainder"],"seconds":15},
      {"type":"term","mode":"timed","level":"easy","q":"What is left over: 13 in 200 ÷ 17 = 11 R 13.","answer":"Remainder","choices":["Quotient","Divisor","Dividend"],"seconds":15},
      {"type":"term","mode":"normal","level":"easy","q":"The number being divided: 200 in 200 ÷ 17.","answer":"Dividend","choices":["Divisor","Quotient","Remainder"]},
      {"type":"tf","mode":"normal","level":"medium","q":"The remainder must be smaller than the divisor.","answer":0}
    ] },
  {"id":"Y32","lesson":3,"concept":"The standard algorithm: 1,376 ÷ 43","explain":"43 does not go into 1 or 13, so start with 137: 137 ÷ 43 = 3 (43 × 3 = 129), 137 − 129 = 8. Bring down 6: 86 ÷ 43 = 2. So 1,376 ÷ 43 = 32.",
    "variants": [
      {"type":"mc","mode":"normal","level":"medium","q":"1,376 ÷ 43: which part of the dividend do we divide first?","options":["137","1","13","1,376"],"answer":0,"fig":"longDiv","pic":{"div":"43","num":"1,376"}},
      {"type":"num","mode":"normal","level":"medium","q":"137 ÷ 43 = ? (the first digit of the quotient)","answer":"3","calc":"(137-8)/43","fig":"longDiv","pic":{"div":"43","num":"1,376","quo":"?"}},
      {"type":"num","mode":"normal","level":"medium","q":"43 × 3 = 129. What is 137 − 129?","answer":"8","calc":"137-129","fig":"longDiv","pic":{"div":"43","num":"1,376","quo":"3","steps":[["129",1],["?",1]]}},
      {"type":"num","mode":"normal","level":"medium","q":"1,376 ÷ 43 = ?","answer":"32","calc":"1376/43","fig":"longDiv","pic":{"div":"43","num":"1,376","quo":"3?","steps":[["129",1],["86",0],["86",0],["0",0]]}}
    ] },
  {"id":"Y33","lesson":3,"concept":"Dividing by a 2-digit divisor","explain":"192 ÷ 32 = 6. 543 ÷ 65 = 8 with 23 left (65 × 8 = 520). 756 ÷ 22 = 34 with 8 left (22 × 34 = 748). 8,014 ÷ 46 = 174 with 10 left (46 × 174 = 8,004).",
    "variants": [
      {"type":"num","mode":"normal","level":"easy","q":"192 ÷ 32 = ?","answer":"6","calc":"192/32","fig":"longDiv","pic":{"div":"32","num":"192"}},
      {"type":"num","mode":"normal","level":"medium","q":"543 ÷ 65 = ? (quotient without the remainder)","answer":"8","calc":"(543-23)/65","fig":"longDiv","pic":{"div":"65","num":"543"}},
      {"type":"num","mode":"normal","level":"medium","q":"What is the remainder of 543 ÷ 65?","answer":"23","calc":"543-65*8"},
      {"type":"num","mode":"normal","level":"medium","q":"756 ÷ 22: the quotient has two digits and the first is 3. What is the ones digit?","answer":"4","calc":"(96-8)/22","fig":"longDiv","pic":{"div":"22","num":"756","quo":"3?","steps":[["66",1],["96",0]]}},
      {"type":"num","mode":"normal","level":"medium","q":"What is the remainder of 756 ÷ 22?","answer":"8","calc":"756-22*34","fig":"longDiv","pic":{"div":"22","num":"756","quo":"34","steps":[["66",1],["96",0],["88",0],["?",0]]}},
      {"type":"num","mode":"normal","level":"hard","q":"8,014 ÷ 46 = ? (quotient without the remainder)","answer":"174","calc":"(8014-10)/46"}
    ] },
  {"id":"Y34","lesson":3,"concept":"The algorithm and the area model","explain":"Both take away the divisor times part of the quotient, again and again, until what is left is smaller than the divisor. The area model can take any chunk that fits; the algorithm works one place value at a time.",
    "variants": [
      {"type":"mc","mode":"normal","level":"medium","q":"How are the standard algorithm and the area model the same?","options":["Both subtract the divisor times parts of the quotient","Both add the divisor many times","Both never have a remainder","Both multiply the dividend by the divisor"],"answer":0},
      {"type":"tf","mode":"timed","level":"easy","q":"We stop dividing when what is left is smaller than the divisor.","answer":0,"seconds":14},
      {"type":"tf","mode":"normal","level":"medium","q":"1,376 ÷ 43 gives a different quotient with the area model than with the algorithm.","answer":1}
    ] },
  {"id":"Y35","lesson":3,"boss":true,"concept":"Challenge: Rana’s cookies","explain":"350 cookies in bags of 12: 350 ÷ 12 = 29 full bags with 2 cookies left (12 × 29 = 348). Bags of 10, 14, 25 or 35 cookies leave nothing, because 350 can be divided by them exactly.",
    "variants": [
      {"type":"num","mode":"boss","level":"hard","q":"Rana has 350 cookies and puts 12 in each bag. How many full bags?","answer":"29","calc":"(350-2)/12"},
      {"type":"num","mode":"boss","level":"hard","q":"How many cookies are left over?","answer":"2","calc":"350-12*29"},
      {"type":"multi","mode":"boss","level":"hard","q":"Which bag sizes leave NO cookies over? Choose all the correct answers.","options":["10 cookies a bag","14 cookies a bag","12 cookies a bag","15 cookies a bag"],"answer":[0,1]},
      {"type":"num","mode":"boss","level":"hard","q":"8,014 ÷ 46 leaves a remainder of ?","answer":"10","calc":"8014-46*174"}
    ] },
  /* ---------- Lesson 4 · The relation between division and multiplication (pages 87-88) ---------- */
  {"id":"Y41","lesson":4,"concept":"Ayman’s mistake: 8,858 ÷ 43","explain":"Ayman says 8,858 ÷ 43 = 26. Check with multiplication: 43 × 26 = 1,118, not 8,858. After 88 − 86 = 2 he brought down 5 to make 25, which is smaller than 43: he had to write 0 in the quotient before bringing down 8. 8,858 ÷ 43 = 206 (43 × 206 = 8,858).",
    "variants": [
      {"type":"mc","mode":"normal","level":"medium","q":"Do you agree with Ayman that 8,858 ÷ 43 = 26?","options":["No: he forgot the 0 in the quotient; it is 206","Yes: 258 − 258 = 0","No: it is 260","No: 86 should be 88"],"answer":0,"fig":"longDiv","pic":{"div":"43","num":"8,858","quo":"26","steps":[["86",2],["258",0],["258",0],["0",0]]}},
      {"type":"num","mode":"normal","level":"medium","q":"Check Ayman with multiplication: 43 × 26 = ?","answer":"1118","calc":"43*26"},
      {"type":"num","mode":"normal","level":"hard","q":"8,858 ÷ 43 = ?","answer":"206","calc":"8858/43"},
      {"type":"tf","mode":"normal","level":"medium","q":"When the number brought down is smaller than the divisor, we write 0 in the quotient.","answer":0}
    ] },
  {"id":"Y42","lesson":4,"concept":"Checking division with multiplication","explain":"To check 200 ÷ 17 = 11 R 13, multiply the divisor by the quotient and add the remainder: 17 × 11 = 187, 187 + 13 = 200, the dividend.",
    "variants": [
      {"type":"num","mode":"timed","level":"easy","q":"Check 200 ÷ 17 = 11 R 13: 17 × 11 = ?","answer":"187","calc":"17*11","seconds":15},
      {"type":"num","mode":"timed","level":"easy","q":"187 + 13 = ?","answer":"200","calc":"187+13","seconds":10},
      {"type":"fill","mode":"normal","level":"medium","q":"divisor × quotient + ___ = dividend","options":["remainder","divisor","dividend"],"answer":0},
      {"type":"mc","mode":"normal","level":"medium","q":"Which check shows that 543 ÷ 65 = 8 R 23 is right?","options":["65 × 8 + 23 = 543","65 + 8 + 23 = 543","543 × 8 = 65","65 × 23 + 8 = 543"],"answer":0},
      {"type":"tf","mode":"normal","level":"medium","q":"Multiplication is the inverse operation of division, so we can use it to check a quotient.","answer":0}
    ] },
  {"id":"Y43","lesson":4,"concept":"Keep the Leftovers","explain":"In «Keep the Leftovers», player 1 divides 200 by a divisor, for example 200 ÷ 17 = 11 R 13. The remainder is subtracted from the dividend: 200 − 13 = 187 is the new dividend for player 2. Each player adds up his remainders; the greatest total wins.",
    "variants": [
      {"type":"num","mode":"timed","level":"easy","q":"200 ÷ 17 = 11 R 13. What is the new dividend (200 − 13)?","answer":"187","calc":"200-13","seconds":15},
      {"type":"num","mode":"normal","level":"medium","q":"200 ÷ 17 = ? (quotient without the remainder)","answer":"11","calc":"(200-13)/17"},
      {"type":"tf","mode":"normal","level":"medium","q":"In «Keep the Leftovers», the player with the greatest sum of remainders wins.","answer":0}
    ] },
  {"id":"Y44","lesson":4,"boss":true,"concept":"Challenge: Ziad’s buttons","explain":"Ziad has 100 buttons and needs 16 for each shirt: 100 ÷ 16 = 6 R 4. Check: 16 × 6 = 96, 96 + 4 = 100. Ziad is right: 6 shirts and 4 buttons left.",
    "variants": [
      {"type":"mc","mode":"boss","level":"hard","q":"Ziad has 100 buttons and needs 16 for each shirt. He thinks: 6 shirts, 4 buttons left. Is he right?","options":["Yes: 16 × 6 = 96 and 96 + 4 = 100","No: 7 shirts","No: 6 shirts and 16 left","No: 4 shirts and 6 left"],"answer":0},
      {"type":"num","mode":"boss","level":"hard","q":"How many buttons do 6 shirts need?","answer":"96","calc":"16*6"},
      {"type":"num","mode":"boss","level":"hard","q":"Check 8,858 ÷ 43 = 206: 43 × 206 = ?","answer":"8858","calc":"43*206"}
    ] },
  /* ---------- Lesson 5 · Multistep Story Problems (pages 89-90) ---------- */
  {"id":"Y51","lesson":5,"concept":"Making sense of remainders","explain":"The remainder changes the answer to the question. 140 servings of baklava ÷ 12 per tray = 11 R 8: the 8 left need one more tray, so 12 trays. 12 − 2 = 10 balah el sham shared by 4 children: 10 ÷ 4 = 2 R 2, so each child gets 2.",
    "variants": [
      {"type":"num","mode":"normal","level":"medium","q":"A baker made 140 servings of baklava. Each tray holds 12. How many trays are needed for all the baklava?","answer":"12","calc":"(140-8)/12+1"},
      {"type":"mc","mode":"normal","level":"medium","q":"140 ÷ 12 = 11 R 8. Why does the baker need 12 trays, not 11?","options":["The 8 left need one more tray","Because 8 + 4 = 12","Because we always add 1","Because 12 is the divisor"],"answer":0},
      {"type":"num","mode":"normal","level":"medium","q":"Mom baked 12 balah el sham; 2 fell on the floor. 4 kids share the rest equally. How many does each child get?","answer":"2","calc":"(12-2-2)/4"},
      {"type":"tf","mode":"normal","level":"medium","q":"In the balah el sham problem, the remainder 2 means each child gets 2 more pieces.","answer":1}
    ] },
  {"id":"Y52","lesson":5,"concept":"The textile factory: step by step","explain":"Cotton 11,650 m. Silk is 4,950 m less: 11,650 − 4,950 = 6,700 m. Wool is 3,500 m less than silk: 6,700 − 3,500 = 3,200 m. In all: 11,650 + 6,700 + 3,200 = 21,550 m.",
    "variants": [
      {"type":"num","mode":"normal","level":"easy","q":"A factory used 11,650 m of cotton and 4,950 m less silk than cotton. How many meters of silk?","answer":"6700","calc":"11650-4950","unit":"m"},
      {"type":"num","mode":"normal","level":"medium","q":"Wool was 3,500 m less than silk (6,700 m). How many meters of wool?","answer":"3200","calc":"6700-3500","unit":"m"},
      {"type":"num","mode":"normal","level":"hard","q":"How many meters of fabric were used in all?","answer":"21550","calc":"11650+(11650-4950)+(11650-4950-3500)","unit":"m"}
    ] },
  {"id":"Y53","lesson":5,"concept":"Which steel is cheaper?","explain":"Mighty Steel: 5 t for 100,000 LE, so 15 t = 3 × 100,000 = 300,000 LE. Silver Strong Steel: 3 t for 70,000 LE, so 15 t = 5 × 70,000 = 350,000 LE. Buying from Mighty Steel saves 350,000 − 300,000 = 50,000 LE.",
    "variants": [
      {"type":"num","mode":"normal","level":"medium","q":"Mighty Steel sells 5 t for 100,000 LE. How much do 15 t cost?","answer":"300000","calc":"15/5*100000","unit":"LE"},
      {"type":"num","mode":"normal","level":"medium","q":"Silver Strong Steel sells 3 t for 70,000 LE. How much do 15 t cost?","answer":"350000","calc":"15/3*70000","unit":"LE"},
      {"type":"num","mode":"normal","level":"hard","q":"How much money is saved by buying 15 t from Mighty Steel?","answer":"50000","calc":"15/3*70000-15/5*100000","unit":"LE"},
      {"type":"mc","mode":"normal","level":"medium","q":"What is the first step for Mighty Steel?","options":["15 ÷ 5 = 3 (how many groups of 5 t)","15 × 100,000","100,000 ÷ 15","15 − 5 = 10"],"answer":0}
    ] },
  {"id":"Y54","lesson":5,"concept":"Paper and quilts","explain":"Computer Depot sold 762 reams; Paper Palace sold 3 times as much, 3 × 762 = 2,286, which is 143 more than Office Supply Central, so Office Supply sold 2,286 − 143 = 2,143. In all: 762 + 2,286 + 2,143 = 5,191 reams. Zeinab used 12 × 18 = 216 squares, Reem 13 × 13 = 169, so Reem used 47 fewer.",
    "variants": [
      {"type":"num","mode":"normal","level":"medium","q":"Paper Palace sold 3 times as much as Computer Depot (762 reams). How many reams?","answer":"2286","calc":"3*762"},
      {"type":"num","mode":"normal","level":"hard","q":"Paper Palace sold 143 reams more than Office Supply Central. How many did Office Supply Central sell?","answer":"2143","calc":"3*762-143"},
      {"type":"num","mode":"normal","level":"hard","q":"How many reams did the three stores sell combined?","answer":"5191","calc":"762+3*762+(3*762-143)"},
      {"type":"num","mode":"normal","level":"medium","q":"Zeinab used 12 packages of 18 squares; Reem’s quilt is 13 by 13 squares. How many fewer squares did Reem use?","answer":"47","calc":"12*18-13*13"},
      {"type":"num","mode":"normal","level":"easy","q":"Malek’s trip is 465 km. He traveled 124 km on Friday and 210 km on Saturday. How many km are left for Sunday?","answer":"131","calc":"465-124-210","unit":"km"}
    ] },
  {"id":"Y55","lesson":5,"boss":true,"concept":"Challenge: Nagi’s T-shirts","explain":"30 boxes × 25 T-shirts = 750 T-shirts; 750 × 3 LE = 2,250 LE in all. Football T-shirts earned 1,134 LE, so basketball T-shirts earned 2,250 − 1,134 = 1,116 LE.",
    "variants": [
      {"type":"num","mode":"boss","level":"hard","q":"Nagi sold 30 boxes of 25 T-shirts each. How many T-shirts?","answer":"750","calc":"30*25"},
      {"type":"num","mode":"boss","level":"hard","q":"He earned 3 LE for each T-shirt. How much did he earn in all?","answer":"2250","calc":"30*25*3","unit":"LE"},
      {"type":"num","mode":"boss","level":"hard","q":"He earned 1,134 LE from football T-shirts. How much from basketball T-shirts?","answer":"1116","calc":"30*25*3-1134","unit":"LE"},
      {"type":"num","mode":"boss","level":"hard","q":"How many basketball T-shirts did he sell? (1,116 LE ÷ 3 LE)","answer":"372","calc":"1116/3"}
    ] }
];
})();
