/* Grade 3 · Mathematics (Languages track) · Chapter 6 "Organizing Data", Term 1 2026/2027
   Source: Ministry book "Primary 3 Mathematics, Term 1" (English), Chapter 6 (pages 62–75): lessons 6-1 to 6-4 and "Review and Practice".
   Follows questions_mg3u6_ar.js phrasing by phrasing (same ids, types, levels; check_questions checks the parity).
   Where the English book prints other data than the Arabic book the file follows the English book (bookDiff: true):
   Saly's fruit survey has Apple 13, Strawberry 7, Banana 9, Peach 3, Grape 2 (the Arabic book: «أخرى» 3), so its total is 34 (S5.2).
   Idea letters: S lesson 1, T lesson 2, U lesson 3, V lesson 4. Boss ideas: S5, T5, U4, V4.
   Owner (6 Nov 2026): easy first, slow rise, few hard questions (Boss only), a hint on every phrasing that never gives the answer.
   Owner pictures (Gemini): icons beside the names (math/assets/g3/ic_*.webp) and the scenes bridge.jpg, classroom.jpg.
   Tallies, tables and bar graphs are drawn in code (g3Tally, g3Table, g3Bars) because the answer is an exact count.
   Review notes:
   - Lesson 2: bar values read from the book's graphs by the grid lines; the Cuts bar is read as 12.
   - Lesson 3: "draw the bars" and "write the title" are drawing tasks; they are asked as choices (title, unit, scale value, bar height, which bar is wrong).
   - Every answer not printed in the book is computed from the tables. */
(function () {
window.CHAPTER = { id: 'mg3u6', title: 'Organizing Data', grade: 'Grade 3', track: 'Languages' };

const num = (level, q, answer, calc, hint, extra = {}) => Object.assign({ type: 'num', mode: 'normal', level, q, answer: String(answer), calc, hint }, extra);
const mc = (level, q, options, hint, extra = {}) => Object.assign({ type: 'mc', mode: 'normal', level, q, options, answer: 0, hint }, extra);
const tf = (level, q, answer, hint, extra = {}) => Object.assign({ type: 'tf', mode: 'normal', level, q, answer, hint }, extra);
const asBoss = v => Object.assign(v, { mode: 'boss', level: 'hard' });
const D = v => Object.assign(v, { bookDiff: true });
const fig = (name, pic) => ({ fig: name, pic });

/* the book's data */
const SUBJ = [['Math', 'math', 11], ['English', 'english', 6], ['P.E.', 'pe', 13], ['Music', 'music', 2], ['Art', 'drawing', 3]];
const FRUIT = [['Apple', 'apple', 13], ['Strawberry', 'strawberry', 7], ['Banana', 'banana', 9], ['Peach', 'peach', 3], ['Grape', 'grape', 2]];
const CARS = [['Passenger Car', 'car', 17], ['Bus', 'bus', 3], ['Motorcycle', 'motorbike', 8], ['Truck', 'truck', 3], ['Taxi', 'taxi', 1], ['Police Car', 'police', 1]];
const COLORS = { title: 'Favorite Colors Survey', unit: 'students', max: 10, step: 1, bars: [['Red', null, 9, '#e85a6b'], ['Blue', null, 8, '#6cc4ef'], ['Green', null, 2, '#79c69a'], ['Other', null, 5, '#b9bec4']] };
const BOOKS = { title: 'Survey of Books Borrowed from the Library', unit: 'books', max: 20, step: 2, bars: [['Reference', 'refbook', 14], ['Picture', 'picturebook', 12], ['Science', 'sciencebook', 4], ['Other', 'other', 10]] };
const HURT = { title: 'Type of Injury and Number of Students', unit: 'students', max: 20, step: 2, bars: [['Scrapes', null, 18], ['Cuts', null, 12], ['Bruises', null, 8], ['Other', null, 6]] };
const CANS = { title: 'Number of Empty Cans Collected', unit: 'cans', max: 100, step: 10, bars: [['Class 1', null, 90], ['Class 2', null, 50], ['Class 3', null, 70], ['Class 4', null, 80]] };
const CANS2 = { title: 'Number of Empty Cans Collected', unit: 'cans', max: 100, step: 10, bars: [['Class 1', null, 90], ['Class 2', null, 80], ['Class 3', null, 40], ['Class 4', null, 60]] };
const FRUIT_T = { title: 'Favorite Fruits', unit: 'students', max: 10, step: 1, bars: [['Strawberry', 'strawberry', 9], ['Orange', 'orange', 7], ['Apple', 'apple', 3], ['Other', 'other', 6]] };
const BALL = { title: 'Favorite Sports (Grade 3)', unit: 'students', head: ['', 'Class 1', 'Class 2', 'Class 3', 'Total'], rows: [['Soccer', 11, 9, 10, 30], ['Basketball', 10, 10, 9, 29], ['Other', 4, 6, 7, 17], ['Total', 25, 25, 26, 76]] };
const ANIMALS = { title: 'Favorite Animals', unit: 'students', max: 20, step: 2, bars: [['Dog', null, null], ['Cat', null, null], ['Dolphin', null, null], ['Horse', null, null], ['Other', null, null]] };
const ANIMALS2 = { title: 'Favorite Animals', unit: 'students', max: 20, step: 2, bars: [['Dog', null, null], ['Cat', null, null], ['Rabbit', null, null], ['Other', null, null]] };
const LIB = rows => ({ title: 'Survey of Books Borrowed (Grade 3)', unit: 'books', head: ['', 'Class 1', 'Class 2', 'Class 3', 'Total'], rows });
const GEN = (h, rows) => ({ title: 'Number of Students by Class and Gender', unit: 'students', head: h, rows });
const H3 = ['', 'Class 1', 'Class 2', 'Class 3', 'Total'];
const CAUSE = rows => ({ title: 'Causes of Injuries (Grades 1-3)', unit: 'students', head: ['', 'Grade 1', 'Grade 2', 'Grade 3', 'Total'], rows });
const PLACE = rows => ({ title: 'Number of Injured Students (Grade 3)', unit: 'students', head: ['', 'April', 'May', 'June', 'Total'], rows });

window.IDEAS = [
  /* ---------- Lesson 1 · Using Tally Marks and Tables (pp. 62–63) ---------- */
  { id: 'S1', lesson: 1, concept: 'Tally marks', explain: 'It is easy to count when we use tally marks to show groups of five: vertical lines for 1 through 4, then a horizontal line for the 5th mark. Two groups of 5 make 10.',
    variants: [
      num('easy', 'What number do the tally marks show?', 5, '5', 'A full group (4 lines and one across) = how many?', Object.assign(fig('g3Tally', { rows: [['Apple', 'apple', 5]] }), { explain: 'One group of 5 = 5.' })),
      num('easy', 'What number do the tally marks show?', 6, '5+1', 'Count the full group (5), then add the lines left.', Object.assign(fig('g3Tally', { rows: [['Banana', 'banana', 6]] }), { explain: 'A group of 5 and 1 more makes 6.' })),
      num('easy', 'What number do the tally marks show?', 10, '5+5', 'Every full group = 5.', Object.assign(fig('g3Tally', { rows: [['Orange', 'orange', 10]] }), { explain: 'Two groups of 5 make 10.' })),
      num('easy', 'What number do the tally marks show?', 8, '5+3', 'Count the full group (5), then add the lines left.', Object.assign(fig('g3Tally', { rows: [['Strawberry', 'strawberry', 8]] }), { explain: 'A group of 5 and 3 = 8.' })),
      num('medium', 'What number do the tally marks show?', 13, '5+5+3', 'Count in fives: 5, 10, … then add the lines left.', Object.assign(fig('g3Tally', { rows: [['Apple', 'apple', 13]] }), { explain: 'Two groups of 5 and 3 = 13.' }))
    ] },
  { id: 'S2', lesson: 1, concept: 'Why use tally marks?', explain: 'We use tally marks to organize data while we collect it, like counting vehicles or the votes in a class survey, then we write the numbers in a table.',
    variants: [
      mc('easy', 'We use tally marks to show groups of:', ['five', 'ten', 'two', 'three'], 'How many lines are in a full group (with the line across)?', { explain: 'Groups of five.' }),
      tf('easy', 'In tally marks we use vertical lines for 1 through 4, and a horizontal line for the 5th mark.', 0, 'Remember what a full group looks like.', { explain: 'True.' }),
      mc('easy', 'Two children count the vehicles that pass over the bridge in 10 minutes. What is the easiest way to record them?', ['tally marks in groups of five', 'keep the number in our heads', 'draw every vehicle in full', 'write only the names of the vehicles'], 'We need a quick way that is easy to count afterwards.', Object.assign(fig('g3Photo', { src: 'math/assets/g3/bridge.jpg' }), { explain: 'Tally marks in groups of five.' })),
      mc('easy', 'The teacher asks the class about their favorite subject, and each student raises a hand for their subject. What is the teacher doing?', ['collecting data in a survey', 'working out a multiplication', 'measuring the classroom', 'reading the clock'], 'The teacher gathers the students’ answers to find the favorite subject.', Object.assign(fig('g3Photo', { src: 'math/assets/g3/classroom.jpg' }), { explain: 'She is doing a survey and collecting data.' }))
    ] },
  { id: 'S3', lesson: 1, concept: 'From tally marks to a table', explain: 'We count the marks of each type and write the number in the table. Example: Math 11, English 6, P.E. 13.',
    variants: [
      num('medium', 'Hany’s class collected data on their favorite subjects.\nHow many students like Math?', 11, '5+5+1', 'Find the Math row and count in fives.', Object.assign(fig('g3Tally', { rows: SUBJ }), { explain: 'Two groups of 5 and 1 = 11.' })),
      num('medium', 'Hany’s class collected data on their favorite subjects.\nHow many students like P.E.?', 13, '5+5+3', 'Find the P.E. row and count in fives.', Object.assign(fig('g3Tally', { rows: SUBJ }), { explain: 'Two groups of 5 and 3 = 13.' })),
      num('medium', 'Saly’s class conducted a survey about their favorite fruits.\nHow many students like Banana?', 9, '5+4', 'Find the Banana row and count in fives.', Object.assign(fig('g3Tally', { rows: FRUIT }), { explain: 'A group of 5 and 4 = 9.' })),
      num('medium', 'A survey was conducted on the vehicles that passed by in 10 minutes.\nHow many passenger cars passed?', 17, '5+5+5+2', 'Find the Passenger Car row and count in fives: 5, 10, 15, …', Object.assign(fig('g3Tally', { rows: CARS }), { explain: '3 groups of 5 and 2 = 17.' })),
      num('medium', 'A survey was conducted on the vehicles that passed by in 10 minutes.\nHow many motorcycles passed?', 8, '5+3', 'Find the Motorcycle row and count in fives.', Object.assign(fig('g3Tally', { rows: CARS }), { explain: 'A group of 5 and 3 = 8.' }))
    ] },
  { id: 'S4', lesson: 1, concept: '"Other" and the most', explain: 'When the table lists only a few types, we combine the types that are not listed and write the total under "Other". Example: Music 2 and Art 3, so Other = 5.',
    variants: [
      num('medium', 'Hany’s table lists only 3 subjects: Math, English, P.E.\nThe subjects in yellow are combined in one row called "Other".\nWhat do we write under "Other"?', 5, '2+3', 'Count the marks of the two yellow rows, then add them.', Object.assign(fig('g3Tally', { rows: SUBJ, other: [3, 4] }), { explain: 'Music 2 + Art 3 = 5, so we write 5 under "Other".' })),
      num('medium', 'The vehicles table lists only 3 types: Passenger Car, Bus, Motorcycle.\nThe vehicles in yellow are combined in one row called "Other".\nWhat do we write under "Other"?', 5, '3+1+1', 'Count the marks of the yellow rows, then add them.', Object.assign(fig('g3Tally', { rows: CARS, other: [3, 4, 5] }), { explain: 'Truck 3 + Taxi 1 + Police Car 1 = 5, so we write 5 under "Other".' })),
      mc('medium', 'Which subject is liked by the most students?', ['P.E.', 'Math', 'English', 'Music'], 'Find the row with the most marks.', Object.assign(fig('g3Tally', { rows: SUBJ }), { explain: 'P.E. 13 is the biggest.' })),
      mc('medium', 'Which fruit is liked by the most students?', ['Apple', 'Banana', 'Strawberry', 'Peach'], 'Find the row with the most marks.', Object.assign(fig('g3Tally', { rows: FRUIT }), { explain: 'Apple 13 is the biggest.' })),
      mc('medium', 'Which vehicle passed by the most in the 10 minutes?', ['Passenger Car', 'Motorcycle', 'Bus', 'Truck'], 'Find the row with the most marks.', Object.assign(fig('g3Tally', { rows: CARS }), { explain: 'Passenger Car 17 is the most.' }))
    ] },
  { id: 'S5', lesson: 1, boss: true, concept: 'Challenge: the total', explain: 'We count each type, then add all the numbers to write the "Total" at the end of the table.',
    variants: [
      asBoss(num('hard', 'How many students in Hany’s class took part in the survey (the Total)?', 35, '11+6+13+2+3', 'Write the number for each subject first, then add them all.', Object.assign(fig('g3Tally', { rows: SUBJ }), { explain: '11 + 6 + 13 + 5 = 35.' }))),
      D(asBoss(num('hard', 'How many students in Saly’s class took part in the fruit survey (the Total)?', 34, '13+7+9+3+2', 'Write the number for each fruit first, then add them all.', Object.assign(fig('g3Tally', { rows: FRUIT }), { explain: '13 + 7 + 9 + 3 + 2 = 34.' })))),
      asBoss(num('hard', 'How many vehicles passed by in the 10 minutes (the Total)?', 33, '17+3+8+3+1+1', 'Write the number for each type first, then add them all.', Object.assign(fig('g3Tally', { rows: CARS }), { explain: '17 + 3 + 8 + 5 = 33.' })))
    ] },

  /* ---------- Lesson 2 · Reading Bar Graphs (pp. 64–65) ---------- */
  { id: 'T1', lesson: 2, concept: 'The value of one scale mark', explain: 'A graph that shows the size of numbers using the length of bars is called a Bar Graph. When reading a bar graph, pay attention to the value shown by each scale mark. Example: 5 scale marks represent 10 books, so each scale mark represents 2 books.',
    variants: [
      mc('easy', 'A graph that shows the size of numbers using the length of bars is called a:', ['Bar Graph', 'tally mark', 'table', 'map'], 'Look at its shape: long and short bars.', Object.assign(fig('g3Bars', COLORS), { explain: 'It is called a Bar Graph.' })),
      num('easy', 'How many students does one scale mark on the graph represent?', 1, '5/5', 'How many marks are there from 0 to 5?', Object.assign(fig('g3Bars', COLORS), { explain: '5 scale marks represent 5 students: each mark = 1.' })),
      num('medium', 'How many books does one scale mark on the graph represent?', 2, '10/5', 'How many marks from 0 to 10? Divide 10 by them.', Object.assign(fig('g3Bars', BOOKS), { unit: 'books', explain: '5 scale marks represent 10 books: each mark = 2.' })),
      num('medium', 'How many students does one scale mark on the graph represent?', 2, '10/5', 'How many marks from 0 to 10? Divide 10 by them.', Object.assign(fig('g3Bars', HURT), { explain: 'Each mark = 2 students.' })),
      num('medium', 'How many cans does one scale mark on the graph represent?', 10, '50/5', 'How many marks from 0 to 50? Divide 50 by them.', Object.assign(fig('g3Bars', CANS), { unit: 'cans', explain: '5 marks represent 50: each mark = 10 cans.' }))
    ] },
  { id: 'T2', lesson: 2, concept: 'The longest bar', explain: 'The longest bar shows the biggest number.',
    variants: [
      mc('easy', 'Which color is liked by the most students?', ['Red', 'Blue', 'Green', 'Other'], 'Find the longest bar.', Object.assign(fig('g3Bars', COLORS), { explain: 'Red is the longest bar.' })),
      mc('easy', 'Which type of book had the most books borrowed?', ['Reference book', 'Picture book', 'Science book', 'Other'], 'Find the longest bar.', Object.assign(fig('g3Bars', BOOKS), { explain: 'Reference book is the longest bar.' })),
      mc('easy', 'Which type of injury had the most students?', ['Scrapes', 'Cuts', 'Bruises', 'Other'], 'Find the longest bar.', Object.assign(fig('g3Bars', HURT), { explain: 'Scrapes is the longest bar.' })),
      mc('easy', 'Which color is liked by the fewest students?', ['Green', 'Red', 'Blue', 'Other'], 'Find the shortest bar.', Object.assign(fig('g3Bars', COLORS), { explain: 'Green is the shortest bar.' }))
    ] },
  { id: 'T3', lesson: 2, concept: 'Reading the value of a bar', explain: 'We count the scale marks up to the top of the bar and multiply by the value of one mark. Example: Picture books 6 marks × 2 = 12 books.',
    variants: [
      num('medium', 'How many students like Blue?', 8, '8', 'Each mark = 1. Read where the blue bar ends.', Object.assign(fig('g3Bars', COLORS), { explain: 'The blue bar ends at 8.' })),
      num('medium', 'How many picture books were borrowed?', 12, '6*2', 'Each mark = 2. Count the marks up to the top of the bar.', Object.assign(fig('g3Bars', BOOKS), { unit: 'books', explain: '6 marks × 2 = 12 books.' })),
      num('medium', 'How many science books were borrowed?', 4, '2*2', 'Each mark = 2. Count the marks up to the top of the bar.', Object.assign(fig('g3Bars', BOOKS), { unit: 'books', explain: '2 marks × 2 = 4 books.' })),
      num('medium', 'How many students had bruises?', 8, '4*2', 'Each mark = 2. Count the marks up to the top of the bar.', Object.assign(fig('g3Bars', HURT), { explain: '4 marks × 2 = 8 students.' })),
      num('medium', 'How many cans did Class 4 collect?', 80, '8*10', 'Each mark = 10. Count the marks up to the top of the bar.', Object.assign(fig('g3Bars', CANS), { unit: 'cans', explain: '8 marks × 10 = 80 cans.' }))
    ] },
  { id: 'T4', lesson: 2, concept: 'How many more?', explain: 'We read the two bars, then subtract. Example: picture books 12 and science books 4: 12 − 4 = 8 books.',
    variants: [
      num('medium', 'How many more picture books were borrowed than science books?', 8, '12-4', 'Read each bar (each mark = 2), then subtract.', Object.assign(fig('g3Bars', BOOKS), { unit: 'books', explain: '12 − 4 = 8 books.' })),
      num('medium', 'How many more students had cuts than bruises?', 4, '12-8', 'Read each bar (each mark = 2), then subtract.', Object.assign(fig('g3Bars', HURT), { explain: '12 − 8 = 4 students.' })),
      num('medium', 'How many more students like Red than Green?', 7, '9-2', 'Read each bar, then subtract.', Object.assign(fig('g3Bars', COLORS), { explain: '9 − 2 = 7 students.' }))
    ] },
  { id: 'T5', lesson: 2, boss: true, concept: 'Challenge: a scale counting in tens', explain: 'Each mark = 10 cans: we read the two bars, then subtract.',
    variants: [
      asBoss(num('hard', 'How many more cans did Class 1 collect than Class 3?', 20, '90-70', 'Each mark = 10. Read the two bars, then subtract.', Object.assign(fig('g3Bars', CANS), { unit: 'cans', explain: '90 − 70 = 20 cans.' }))),
      asBoss(num('hard', 'How many more cans did Class 1 collect than Class 3?', 50, '90-40', 'Each mark = 10. Read the two bars, then subtract.', Object.assign(fig('g3Bars', CANS2), { unit: 'cans', explain: '90 − 40 = 50 cans.' }))),
      asBoss(num('hard', 'How many cans did Class 4 collect?', 60, '6*10', 'Each mark = 10. Count the marks up to the top of the bar.', Object.assign(fig('g3Bars', CANS2), { unit: 'cans', explain: '6 marks × 10 = 60 cans.' }))),
      asBoss(num('hard', 'How many more students had scrapes than "Other"?', 12, '18-6', 'Each mark = 2. Read the two bars, then subtract.', Object.assign(fig('g3Bars', HURT), { explain: '18 − 6 = 12 students.' })))
    ] },

  /* ---------- Lesson 3 · Drawing Bar Graphs (pp. 66–69) ---------- */
  { id: 'U1', lesson: 3, concept: 'Steps for making a bar graph', explain: '1) Write the title. 2) Write the unit that the scale represents. 3) Decide on the value for one scale mark; the lowest scale mark must be 0. 4) Draw the bars to match the numbers.',
    variants: [
      mc('easy', 'What is the first step for making a bar graph?', ['Write the title', 'Draw the bars', 'Write the scale values', 'Color the bars'], 'Before anything: what is the graph about?', { explain: 'First we write the title.' }),
      mc('easy', 'The lowest scale mark must be:', ['0', '1', '5', '10'], 'The scale starts at the bottom, where there is nothing.', { explain: 'The lowest scale mark is 0.' }),
      mc('easy', 'We asked the class: what is your favorite fruit? We drew the answers as a bar graph.\nWhat title do we write at the top, where the ? is?', ['Favorite Fruits', 'Students', 'Total', 'Strawberry'], 'The title says in two words what the whole graph is about.', Object.assign(fig('g3Bars', Object.assign({}, FRUIT_T, { title: '?' })), { explain: 'The whole graph is about the fruits the students like, so the title is Favorite Fruits.' })),
      mc('easy', 'We asked the class: what is your favorite fruit? We drew the answers as a bar graph.\nThe numbers on the side count something, and we write its name in the parentheses where the ? is.\nWhat do we write?', ['Students', 'Fruits', 'Apples', 'cm'], 'Each number says how many like this fruit. Who are we counting?', Object.assign(fig('g3Bars', Object.assign({}, FRUIT_T, { unit: '?' })), { explain: 'The numbers count the students who like each fruit, so we write (Students).' }))
    ] },
  { id: 'U2', lesson: 3, concept: 'The value of one scale mark', explain: 'We divide the number written on the scale by the marks under it. Example: 10 scale marks represent 10, so one scale mark represents 1, and five scale marks above 0 is 5.',
    variants: [
      num('medium', 'The scale goes from 0 to 10 and has 10 marks.\nWhat does one scale mark represent (the ?)?', 1, '10/10', 'Divide 10 by the number of marks.', Object.assign(fig('g3Scale', { max: 10, ticks: 10, labels: [0, 10], ask: 'step' }), { explain: '10 ÷ 10 = 1.' })),
      num('medium', 'Each scale mark represents 1. What number is at the fifth mark above 0 (the ?)?', 5, '5*1', 'Count five marks, each one = 1.', Object.assign(fig('g3Scale', { max: 10, ticks: 10, labels: [0, 10], ask: 5 }), { explain: 'Five scale marks above 0 is 5.' })),
      num('medium', 'The scale goes from 0 to 20 and has 10 marks.\nWhat does one scale mark represent (the ?)?', 2, '20/10', 'Divide 20 by the number of marks.', Object.assign(fig('g3Scale', { max: 20, ticks: 10, labels: [0, 20], ask: 'step' }), { explain: '20 ÷ 10 = 2.' })),
      num('medium', 'Each scale mark represents 2. What number is at the fifth mark above 0 (the ?)?', 10, '5*2', 'Count five marks, each one = 2.', Object.assign(fig('g3Scale', { max: 20, ticks: 10, labels: [0, 20], ask: 5 }), { explain: '5 × 2 = 10.' })),
      num('medium', 'The scale goes from 0 to 15 and has 15 marks.\nWhat does one scale mark represent (the ?)?', 1, '15/15', 'Divide 15 by the number of marks.', Object.assign(fig('g3Scale', { max: 15, ticks: 15, labels: [0, 15], ask: 'step' }), { explain: '15 ÷ 15 = 1.' }))
    ] },
  { id: 'U3', lesson: 3, concept: 'Drawing the bars to match the numbers', explain: 'Height of a bar in marks = the number ÷ the value of one mark. Example: each mark = 2 and Dog is 14: the bar goes up 7 marks.',
    variants: [
      num('medium', 'Favorite Animals: Dog 14, Cat 12, Dolphin 6, Horse 2, Other 4.\nEach scale mark represents 2. How many marks high is the Dog bar?', 7, '14/2', 'Divide the number of students by the value of one mark.', Object.assign(fig('g3Bars', ANIMALS), { explain: '14 ÷ 2 = 7 marks.' })),
      num('medium', 'Favorite Animals: Dog 14, Cat 12, Dolphin 6, Horse 2, Other 4.\nEach scale mark represents 2. How many marks high is the Cat bar?', 6, '12/2', 'Divide the number of students by the value of one mark.', Object.assign(fig('g3Bars', ANIMALS), { explain: '12 ÷ 2 = 6 marks.' })),
      num('medium', 'Favorite Animals: Dog 14, Cat 12, Dolphin 6, Horse 2, Other 4.\nEach scale mark represents 2. How many marks high is the Dolphin bar?', 3, '6/2', 'Divide the number of students by the value of one mark.', Object.assign(fig('g3Bars', ANIMALS), { explain: '6 ÷ 2 = 3 marks.' })),
      mc('medium', 'The table: Strawberry 9, Orange 7, Apple 5, Other 6.\nWhich bar is drawn wrong?', ['Apple', 'Strawberry', 'Orange', 'Other'], 'Compare the height of each bar with its number in the table (each mark = 1).', Object.assign(fig('g3Bars', FRUIT_T), { explain: 'Apple is 5 in the table, but its bar ends at 3.' })),
      tf('medium', 'The table: Strawberry 9, Orange 7, Apple 3, Other 6.\nAll the bars in the graph are drawn to match the numbers.', 0, 'Compare the height of each bar with its number in the table (each mark = 1).', Object.assign(fig('g3Bars', FRUIT_T), { explain: 'True: each bar reaches its number.' }))
    ] },
  { id: 'U4', lesson: 3, boss: true, concept: 'Challenge: bars from a bigger table', explain: 'We find the value of one mark, then divide each number by it to find the height of the bar.',
    variants: [
      asBoss(num('hard', 'Favorite Animals: Dog 16, Cat 14, Rabbit 10, Other 16.\nThe scale goes from 0 to 20 with 10 marks. How many marks high is the Cat bar?', 7, '14/(20/10)', 'Find the value of one mark first (20 ÷ 10), then divide 14 by it.', Object.assign(fig('g3Bars', ANIMALS2), { explain: 'Each mark = 2, and 14 ÷ 2 = 7 marks.' }))),
      asBoss(num('hard', 'Favorite Animals: Dog 16, Cat 14, Rabbit 10, Other 16.\nThe scale goes from 0 to 20 with 10 marks. How many marks high is the Rabbit bar?', 5, '10/(20/10)', 'Find the value of one mark first (20 ÷ 10), then divide 10 by it.', Object.assign(fig('g3Bars', ANIMALS2), { explain: 'Each mark = 2, and 10 ÷ 2 = 5 marks.' }))),
      asBoss(num('hard', 'Favorite Desserts: Cake 13, Donut 9, Cookie 7, Other 5.\nThe scale goes from 0 to 15 with 15 marks. What number do we write at the tenth mark above 0 (the ?)?', 10, '10*1', 'Find the value of one mark first (15 ÷ 15), then count ten marks.', Object.assign(fig('g3Scale', { max: 15, ticks: 15, labels: [0, 15], ask: 10 }), { explain: 'Each mark = 1, so the tenth mark = 10.' })))
    ] },

  /* ---------- Lesson 4 · Organizing Data in Tables (pp. 70–73) ---------- */
  { id: 'V1', lesson: 4, concept: 'Reading a table of rows and columns', explain: 'When data is organized in a table, it’s easy to see the whole picture. We read the cell where the row and the column meet.',
    variants: [
      num('easy', 'How many students in Class 2 like Basketball?', 10, '10', 'Find the "Basketball" row and the "Class 2" column.', Object.assign(fig('g3Table', BALL), { explain: 'Basketball and Class 2 meet at 10.' })),
      num('easy', 'How many students in Class 1 like Soccer?', 11, '11', 'Find the "Soccer" row and the "Class 1" column.', Object.assign(fig('g3Table', BALL), { explain: '11 students.' })),
      num('easy', 'How many students in Class 3 chose "Other"?', 7, '7', 'Find the "Other" row and the "Class 3" column.', Object.assign(fig('g3Table', BALL), { explain: '7 students.' })),
      num('easy', 'How many students in all of Grade 3 like Soccer?', 30, '11+9+10', 'Look at the "Total" cell of the Soccer row.', Object.assign(fig('g3Table', BALL), { explain: '11 + 9 + 10 = 30.' }))
    ] },
  { id: 'V2', lesson: 4, concept: 'Adding across and down', explain: 'The total of a row is added horizontally, and the total of a column is added vertically. Example: Story Books 11 + 8 + 7 = 26.',
    variants: [
      num('medium', 'Books borrowed by Grade 3. What is the total number of Story Books borrowed (the ?)?', 26, '11+8+7', 'Add the numbers of the Story Books row horizontally.', Object.assign(fig('g3Table', LIB([['Story Books', 11, 8, 7, '?'], ['Reference', 2, 3, 9, 14], ['Other', 4, 7, 6, 17], ['Total', 17, '', 22, '']])), { unit: 'books', explain: '11 + 8 + 7 = 26.' })),
      num('medium', 'Books borrowed by Grade 3. What is the total number of books borrowed by Class 2 (the ?)?', 18, '8+3+7', 'Add the numbers of the Class 2 column vertically.', Object.assign(fig('g3Table', LIB([['Story Books', 11, 8, 7, ''], ['Reference', 2, 3, 9, 14], ['Other', 4, 7, 6, 17], ['Total', 17, '?', 22, '']])), { unit: 'books', explain: '8 + 3 + 7 = 18.' })),
      num('medium', 'Students by class and gender. How many students are in Class 1 (the ?)?', 35, '18+17', 'Add the boys and the girls in the Class 1 column.', Object.assign(fig('g3Table', GEN(H3, [['Boys', 18, 17, 18, 53], ['Girls', 17, 16, 16, ''], ['Total', '?', 33, 34, '']])), { explain: '18 + 17 = 35.' })),
      num('medium', 'Students by class and gender. How many girls are in Grade 3 (the ?)?', 49, '17+16+16', 'Add the numbers of the Girls row horizontally.', Object.assign(fig('g3Table', GEN(H3, [['Boys', 18, 17, 18, 53], ['Girls', 17, 16, 16, '?'], ['Total', 35, 33, 34, '']])), { explain: '17 + 16 + 16 = 49.' })),
      num('medium', 'Causes of injuries. How many Grade 1 students were injured (the ?)?', 19, '7+6+5+1', 'Add the numbers of the Grade 1 column vertically.', Object.assign(fig('g3Table', CAUSE([['Bumping', 7, 8, 14, ''], ['Falling', 6, 10, 4, 20], ['Twisting', 5, 3, 4, 12], ['Other', 1, 7, 8, 16], ['Total', '?', 28, 30, '']])), { explain: '7 + 6 + 5 + 1 = 19.' }))
    ] },
  { id: 'V3', lesson: 4, concept: 'What does the number represent?', explain: 'Each cell of the table means something from its row and its column. The "Total" cell in the last row and the last column is the total number.',
    variants: [
      mc('medium', 'In the books table, the cell where the "Total" row meets the "Total" column represents:', ['the total number of books borrowed by Grade 3 students', 'the number of Story Books only', 'the number of books of Class 1', 'the number of classes'], 'The last row and the last column = everything together.', { explain: 'The total number of books borrowed by Grade 3 students.' }),
      mc('medium', 'Which type of book was borrowed the most by Grade 3 students? (Story Books 26, Reference 14, Other 17)', ['Story Books', 'Reference', 'Other'], 'Compare the numbers in the Total column.', { explain: 'Story Books 26 is the most.' }),
      mc('medium', 'In the boys and girls table, the number in the "Girls" row and the "Total" column represents:', ['the total number of girls in Grade 3', 'the number of girls in Class 1', 'the number of all the students', 'the number of boys'], 'The row is "Girls", the column is "Total".', { explain: 'The total number of girls in Grade 3.' })
    ] },
  { id: 'V4', lesson: 4, boss: true, concept: 'Challenge: questions from a whole table', explain: 'We read the cell we need, or add a row or a column, then compare or subtract.',
    variants: [
      asBoss(num('hard', 'How many students were injured in June in total (the ?)?', 35, '7+16+2+10', 'Add the numbers of the June column vertically.', Object.assign(fig('g3Table', PLACE([['Playground', 12, 5, 7, 24], ['Gym', 10, 9, 16, ''], ['Classroom', 8, 6, 2, 16], ['Hallway', 6, 14, 10, 30], ['Total', 36, '', '?', '']])), { explain: '7 + 16 + 2 + 10 = 35.' }))),
      asBoss(mc('hard', 'Which location had the most injured students?', ['Gym', 'Hallway', 'Playground', 'Classroom'], 'Find the Gym total first (10 + 9 + 16), then compare the Total column.', Object.assign(fig('g3Table', PLACE([['Playground', 12, 5, 7, 24], ['Gym', 10, 9, 16, '?'], ['Classroom', 8, 6, 2, 16], ['Hallway', 6, 14, 10, 30], ['Total', 36, 34, 35, '']])), { explain: 'Gym 35 is the biggest.' }))),
      asBoss(num('hard', 'What is the difference in the number of boys and girls in Class 2?', 3, '22-19', 'Read the boys and the girls in the Class 2 column, then subtract the smaller from the bigger.', Object.assign(fig('g3Table', GEN(H3, [['Boys', 17, 19, 20, 56], ['Girls', 23, 22, 18, 63], ['Total', 40, 41, 38, 119]])), { explain: '22 − 19 = 3.' }))),
      asBoss(num('hard', 'How many Grade 3 students were injured by falling or twisting together?', 8, '4+4', 'In the Grade 3 column find "Falling" and "Twisting", then add them.', Object.assign(fig('g3Table', CAUSE([['Bumping', 7, 8, 14, 29], ['Falling', 6, 10, 4, 20], ['Twisting', 5, 3, 4, 12], ['Other', 1, 7, 8, 16], ['Total', 19, 28, 30, 77]])), { explain: '4 + 4 = 8.' })))
    ] }
];
})();
