/* Grade 6 · Mathematics (Languages track) · question bank for the November monthly test only (examOnly in chapters.js)
   Source: El-Moasser «November Monthly Tests», Grade 6 first term 2027 (3 models with model answers), sent by the site owner on 27 Nov 2026.
   Scope: from unit 3 lesson 4 to the end of unit 5 lesson 4. Units 3-5 are not built on the site yet, so this bank serves the test alone.
   Topics (lesson = topic number): 1 Exponents and order of operations · 2 Algebraic expressions (value, equivalent) · 3 Equations
            4 Inequalities · 5 Dependent and independent variables.
   Paper sections (sec): choose «Choose the correct answer» · answer «Answer the following questions».
   Not asked: drawing on the number line or the grid (the student picks the right set or reads the table instead).
   Every answer is computed (calc) and checked against the model answers. */
(function () {
const LV = { e: 'easy', m: 'medium', h: 'hard' };
const mc = (sec, lv, q, options, hint) => ({ type: 'mc', mode: 'normal', sec, level: LV[lv], q, options, answer: 0, hint });
const num = (sec, lv, q, answer, calc, hint) => ({ type: 'num', mode: 'normal', sec, level: LV[lv], q, answer: String(answer), calc, hint });
const I = (id, lesson, concept, explain, variants) => ({ id, lesson, concept, explain, variants });

window.CHAPTER = { id: 'mg6e', title: 'Math: November syllabus', grade: 'Grade 6', track: 'Languages' };
window.IDEAS = [
  /* ---------- 1 Exponents and order of operations ---------- */
  I('S1', 1, 'Exponential form', 'Repeated multiplication of the same number is written with an exponent: 5 × 5 × 5 = 5³ (base 5, exponent 3).', [
    mc('choose', 'e', 'The exponential form of 5 × 5 × 5 is', ['5³', '5 × 3', '3⁵', '5⁴'], 'Count how many times 5 is multiplied.'),
    mc('choose', 'e', 'If the exponent is 4 and the base is 6, then the exponential form is', ['6⁴', '4⁶', '6 × 4', '6 + 4'], 'The base is the big number; the exponent is the small one above it.'),
    mc('choose', 'e', 'The exponential form of 2 × 2 × 2 × 2 × 2 is', ['2⁵', '5²', '2 × 5', '2⁴'], 'Count the 2s.'),
    mc('choose', 'm', 'In 7³, the base is', ['7', '3', '21', '343'], 'The base is the number being multiplied.'),
    mc('choose', 'm', '4³ = ', ['64', '12', '7', '81'], '4 × 4 × 4.'),
    mc('choose', 'e', '3² = ', ['9', '6', '5', '8'], '3 × 3.'),
  ]),
  I('S2', 1, 'Order of operations', 'Brackets first, then exponents, then × and ÷ from left to right, then + and − from left to right.', [
    num('answer', 'm', 'Put the numerical expression 5 + 3 × 3² − 5 in its simplest form.', 27, '5 + 3*9 - 5', 'Exponent first: 3² = 9, then multiply.'),
    num('answer', 'm', 'Find the value of 20 − 2 × 3²', 2, '20 - 2*9', '3² = 9, then 2 × 9.'),
    num('answer', 'm', 'Find the value of (8 − 2)² ÷ 4', 9, '(8-2)**2/4', 'Brackets first: 8 − 2 = 6.'),
    num('answer', 'h', 'Put the numerical expression 4 + 2³ × 3 − 10 in its simplest form.', 18, '4 + 8*3 - 10', '2³ = 8.'),
    num('answer', 'h', 'Find the value of 6² ÷ (4 + 5) + 7', 11, '36/(4+5) + 7', 'Brackets first, then 6² = 36.'),
    mc('choose', 'm', 'The value of 2 + 3 × 4 is', ['14', '20', '24', '9'], 'Multiply before you add.'),
  ]),
  /* ---------- 2 Algebraic expressions ---------- */
  I('T1', 2, 'Value of an algebraic expression', 'Replace the variable by its value, then follow the order of operations.', [
    num('answer', 'h', 'Find the value of the algebraic expression 9 + (x² − 3) ÷ 2, when x = 3', 12, '9 + (9-3)/2', 'x² = 9, then (9 − 3) ÷ 2.'),
    num('answer', 'h', 'Find the value of the algebraic expression 5 × (a² − 4), when a = 3', 25, '5*(9-4)', 'a² = 9, then 9 − 4.'),
    num('answer', 'm', 'Find the value of the algebraic expression 4b + 7, when b = 5', 27, '4*5 + 7', '4b means 4 × b.'),
    num('answer', 'h', 'Find the value of the algebraic expression 2 × (m² + 1), when m = 4', 34, '2*(16+1)', 'm² = 16.'),
    num('answer', 'm', 'Find the value of the algebraic expression 30 − 3y, when y = 6', 12, '30 - 3*6', '3y = 3 × 6.'),
    num('answer', 'h', 'Find the value of the algebraic expression (n + 2)² − 10, when n = 3', 15, '(3+2)**2 - 10', 'Brackets first: 3 + 2 = 5.'),
  ]),
  I('T2', 2, 'Equivalent expressions', 'Two expressions are equivalent when they give the same value for every value of the variable; 3(x + 5) = 3x + 15 by the distributive property.', [
    mc('choose', 'm', 'Which of the following algebraic expressions is equivalent to the expression 3 (x + 5)?', ['3x + 15', '2x + 5', '2x + 15', '3x + 5'], 'Multiply 3 by x and by 5.'),
    mc('choose', 'm', 'Which expression is equivalent to 2 (y + 4)?', ['2y + 8', '2y + 4', 'y + 8', '6y'], 'Multiply 2 by each term.'),
    mc('choose', 'm', 'Which expression is equivalent to 4 (a − 2)?', ['4a − 8', '4a − 2', 'a − 8', '2a'], '4 × a and 4 × 2.'),
    mc('answer', 'h', 'Are the two algebraic expressions 3 (3x + 4) and 6x + 12 equivalent? (Try x = 1.)', ['No: at x = 1 they give 21 and 18', 'Yes: at x = 1 both give 21', 'Yes: both have 12', 'No: at x = 1 both give 18'], 'Put the same value of x in both expressions and compare.'),
    mc('answer', 'h', 'Are the two algebraic expressions 2 (x + 6) and 2x + 12 equivalent? (Try x = 1 and x = 2.)', ['Yes: they give 14 and 14, then 16 and 16', 'No: they give 14 and 13', 'No: 2x + 12 is bigger', 'Yes: only when x = 0'], 'Put the same value of x in both expressions and compare.'),
    mc('answer', 'h', 'Are the two algebraic expressions 5 (x + 1) and 5x + 1 equivalent? (Try x = 1.)', ['No: at x = 1 they give 10 and 6', 'Yes: at x = 1 both give 10', 'Yes: both start with 5', 'No: at x = 1 both give 6'], 'Put the same value of x in both expressions and compare.'),
  ]),
  I('T3', 2, 'Kinds of mathematical sentences', 'An equation has «=» and a variable; an inequality has <, >, ≤ or ≥; an algebraic expression has a variable but no «=»; a numerical expression has numbers only.', [
    mc('choose', 'e', 'The mathematical expression 2x − 1 = 7 represents', ['an equation', 'an inequality', 'an algebraic expression', 'a numerical expression'], 'It has an «=» sign and a variable.'),
    mc('choose', 'e', 'The mathematical expression x + 4 > 9 represents', ['an inequality', 'an equation', 'an algebraic expression', 'a numerical expression'], 'Look at the sign >.'),
    mc('choose', 'm', 'The mathematical expression 3y + 2 represents', ['an algebraic expression', 'an equation', 'an inequality', 'a numerical expression'], 'A variable but no «=» sign.'),
    mc('choose', 'm', 'The mathematical expression 5 + 3 × 2 represents', ['a numerical expression', 'an algebraic expression', 'an equation', 'an inequality'], 'Numbers only, no variable.'),
  ]),
  /* ---------- 3 Equations ---------- */
  I('U1', 3, 'Solving one-step equations', 'Do the inverse operation to both sides: x + 4 = 7 → x = 7 − 4; 2x = 8 → x = 8 ÷ 2; ¼x = 2 → x = 2 × 4.', [
    mc('choose', 'm', 'If ¼ x = 2, then x =', ['8', '2', '4', '6'], 'Multiply both sides by 4.'),
    num('answer', 'e', 'Solve the equation: x + 4 = 7', 3, '7 - 4', 'Subtract 4 from both sides.'),
    num('answer', 'e', 'Solve the equation: 2x = 8', 4, '8 / 2', 'Divide both sides by 2.'),
    num('answer', 'm', 'Solve the equation: x − 6 = 9', 15, '9 + 6', 'Add 6 to both sides.'),
    num('answer', 'm', 'Solve the equation: 5x = 35', 7, '35 / 5', 'Divide both sides by 5.'),
    num('answer', 'm', 'Solve the equation: ⅓ x = 6', 18, '6 * 3', 'Multiply both sides by 3.'),
  ]),
  I('U2', 3, 'Equations with exponents', 'Find the value of the exponent first, then solve: x − 1 = 3² → x − 1 = 9 → x = 10.', [
    mc('choose', 'm', 'If x − 1 = 3², then x =', ['10', '4', '7', '13'], '3² = 9, then add 1.'),
    mc('choose', 'm', 'If x + 2 = 2³, then x =', ['6', '8', '10', '4'], '2³ = 8, then subtract 2.'),
    mc('choose', 'h', 'If 2x = 4², then x =', ['8', '16', '4', '32'], '4² = 16, then divide by 2.'),
    num('answer', 'h', 'Solve the equation: x − 5 = 5²', 30, '25 + 5', '5² = 25.'),
  ]),
  /* ---------- 4 Inequalities ---------- */
  I('V1', 4, 'Solutions of inequalities', 'x < 3 means every number less than 3 (not 3 itself); x ≥ −1 means −1 and every number greater than it.', [
    mc('answer', 'm', 'Name 3 possible solutions in the set of integers for the inequality x < 3.', ['0, 1, 2', '1, 2, 3', '3, 4, 5', '2, 3, 4'], '3 itself is not less than 3.'),
    mc('answer', 'm', 'Which integers are solutions of the inequality x ≥ −1 on the number line from −3 to 3?', ['−1, 0, 1, 2, 3', '0, 1, 2, 3', '−3, −2, −1', '−2, −1, 0, 1'], '≥ includes −1 itself.'),
    mc('answer', 'm', 'Name 3 possible solutions in the set of integers for the inequality x > 5.', ['6, 7, 8', '5, 6, 7', '3, 4, 5', '1, 2, 3'], '5 itself is not greater than 5.'),
    mc('answer', 'h', 'On the number line, the solution of x ≤ 2 is shown by', ['a closed dot at 2 and an arrow to the left', 'an open dot at 2 and an arrow to the right', 'a closed dot at 2 and an arrow to the right', 'an open dot at 2 and an arrow to the left'], '≤ includes 2 (closed dot); smaller numbers are on the left.'),
    mc('choose', 'e', 'Which number is a solution of the inequality x < 3?', ['2', '3', '4', '5'], 'Less than 3.'),
    mc('choose', 'm', 'Which number is NOT a solution of the inequality y ≥ 4?', ['3', '4', '5', '10'], '≥ 4 includes 4 and the bigger numbers.'),
  ]),
  /* ---------- 5 Dependent and independent variables ---------- */
  I('W1', 5, 'Dependent and independent variables', 'In y = 2x + 5 the input x is the independent variable; the output y depends on it, so y is the dependent variable.', [
    mc('choose', 'm', 'The dependent variable in the equation K = 3m + 1 is', ['K', 'm', '3', '1'], 'The variable alone on one side depends on the other.'),
    mc('choose', 'm', 'The independent variable in the equation y = 2x + 5 is', ['x', '2', '5', 'y'], 'The input you choose freely.'),
    mc('choose', 'm', 'The dependent variable in the equation c = 4t is', ['c', 't', '4', 'ct'], 'c depends on t.'),
    mc('choose', 'm', 'The independent variable in the equation p = 5n + 2 is', ['n', 'p', '5', '2'], 'The input.'),
  ]),
  I('W2', 5, 'Input and output', 'Put the input (independent variable) in the rule to get the output (dependent variable).', [
    mc('choose', 'e', 'In the equation y = x + 4, if the input is 16, then the output is', ['20', '4', '12', '64'], '16 + 4.'),
    mc('choose', 'm', 'In the equation y = 3x, if the input is 5, then the output is', ['15', '8', '35', '2'], '3 × 5.'),
    num('answer', 'm', 'If y = 5x + 8 and x = 10, then find the value of y.', 58, '5*10 + 8', '5 × 10 first, then add 8.'),
    num('answer', 'm', 'If y = 2x − 3 and x = 7, then find the value of y.', 11, '2*7 - 3', '2 × 7 first.'),
    mc('choose', 'm', 'In the equation y = 2x − 1, if the input is 6, then the output is', ['11', '12', '13', '5'], '2 × 6 − 1.'),
  ]),
  I('W3', 5, 'Writing the rule and completing the table', 'Turn the rule into an equation: «multiply by 3 and add 5» → y = 3x + 5; a price per item gives y = price × x.', [
    num('answer', 'h', 'If the rule is «Multiply by 3 and add 5», write the equation using x (independent) and y. If x = 2, find the value of y.', 11, '3*2 + 5', 'y = 3x + 5.'),
    mc('answer', 'h', 'If the price of 3 pencils is 15 pounds, then the equation that relates the price y to the number of pencils x is', ['y = 5x', 'y = 3x', 'y = 15x', 'y = x + 5'], 'One pencil costs 15 ÷ 3.'),
    num('answer', 'h', 'If the price of 3 pencils is 15 pounds, complete the table: when x = 6 pencils, y = ? pounds', 30, '15/3*6', 'One pencil costs 5 pounds.'),
    num('answer', 'h', 'Use the equation y = 3x to complete the table: x = 1, 2, 3. What is y when x = 3?', 9, '3*3', '3 × 3.'),
    mc('answer', 'h', 'Use the equation y = 3x to complete the table for x = 1, 2, 3.', ['y = 3, 6, 9', 'y = 4, 5, 6', 'y = 1, 2, 3', 'y = 3, 5, 7'], 'Multiply each x by 3.'),
    num('answer', 'h', 'If the rule is «Multiply by 2 and subtract 1», write the equation using x and y. If x = 8, find the value of y.', 15, '2*8 - 1', 'y = 2x − 1.'),
  ]),
];
})();
