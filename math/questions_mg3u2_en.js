/* Grade 3 · Mathematics (Languages track) · Chapter 2 "Time and Duration", Term 1 2026/2027
   Source: Ministry book "Primary 3 Mathematics, Term 1" (English), Chapter 2 (pages 20–31): lessons 2-1 to 2-3 and "Review and Practice".
   Follows questions_mg3u2_ar.js phrasing by phrasing (same ids, types, levels and answers: check_questions checks the parity).
   Idea letters: F lesson 1, G lesson 2, H lesson 3. Boss ideas: F5, G6, H7.
   Owner (6 Nov 2026): easy first, slow rise, few hard questions (Boss only), a hint on every phrasing that never gives the answer.
   A time answer is multiple choice (the number pad has no ":"); minutes or seconds are typed on the number pad.
   Wrong options come from real children's mistakes: forgetting to change the hour (8:10 for 9:10), minutes over 60 (8:70), mixing up before and after.
   Book words: elapsed time, minutes, seconds, stopwatch, "What time will it be … after …?", "What time was it … before …?". */
(function () {
window.CHAPTER = { id: 'mg3u2', title: 'Time and Duration', grade: 'Grade 3', track: 'Languages' };

const num = (level, q, answer, calc, hint, extra = {}) => Object.assign({ type: 'num', mode: 'normal', level, q, answer: String(answer), calc, hint }, extra);
const timed = (level, q, answer, calc, hint, seconds = 20, extra = {}) => Object.assign(num(level, q, answer, calc, hint, extra), { mode: 'timed', seconds });
const mc = (level, q, options, hint, extra = {}) => Object.assign({ type: 'mc', mode: 'normal', level, q, options, answer: 0, hint }, extra);
const tf = (level, q, answer, hint, extra = {}) => Object.assign({ type: 'tf', mode: 'normal', level, q, answer, hint }, extra);
const bossMc = (q, options, hint, extra = {}) => Object.assign(mc('hard', q, options, hint, extra), { mode: 'boss' });
const bossNum = (q, answer, calc, hint, extra = {}) => Object.assign(num('hard', q, answer, calc, hint, extra), { mode: 'boss' });
const clock = (h, m, move) => ({ fig: 'g3Clock', pic: { h, m, move } });
const line = (from, to, marks, jumps) => ({ fig: 'g3TimeLine', pic: { from, to, marks, jumps } });
const UNITS = ['seconds', 'minutes', 'hours'];
const unitQ = (q, right, level = 'medium') => mc(level, q, [right].concat(UNITS.filter(u => u !== right)), 'Think: does this take a short moment, part of an hour, or a long time?', { explain: `The right unit: ${right}.` });
const fwd = 'Each number on the clock = 5 minutes.';

window.IDEAS = [
  /* ---------- Lesson 1 · Finding the Time Before and After (Part 1) (pp. 20–21) ---------- */
  { id: 'F1', lesson: 1, concept: 'The time after some minutes', explain: 'To find the time after some minutes, move the minute hand forward on the clock. Each number on the clock = 5 minutes.',
    variants: [
      mc('easy', 'It is 3:10 now.\nWhat time will it be 20 minutes later?', ['3:30', '3:20', '4:10', '3:40'], fwd + ' Move the blue minute hand 4 numbers forward.', Object.assign(clock(3, 10, 20), { explain: '3:10 + 20 minutes = 3:30.' })),
      mc('easy', 'It is 6:20 now.\nWhat time will it be 15 minutes later?', ['6:35', '6:30', '6:45', '7:20'], fwd + ' 15 minutes = 3 numbers.', Object.assign(clock(6, 20, 15), { explain: '6:20 + 15 minutes = 6:35.' })),
      mc('easy', 'It is 1:05 now.\nWhat time will it be 30 minutes later?', ['1:35', '1:30', '2:05', '1:45'], '30 minutes = half a turn of the minute hand. Add 30 to the minutes.', Object.assign(clock(1, 5, 30), { explain: '1:05 + 30 minutes = 1:35.' })),
      mc('easy', 'It is 8:00 now.\nWhat time will it be 45 minutes later?', ['8:45', '8:40', '9:00', '8:30'], 'The hour does not change because we did not reach 60 minutes. Add 45 to the minutes.', Object.assign(clock(8, 0, 45), { explain: '8:00 + 45 minutes = 8:45.' }))
    ] },
  { id: 'F2', lesson: 1, concept: 'The time before some minutes', explain: 'To find the time before some minutes, move the minute hand backward on the clock.',
    variants: [
      mc('easy', 'It is 6:40 now.\nWhat time was it 10 minutes ago?', ['6:30', '6:50', '6:20', '5:40'], '"Before" means go back. 10 minutes = 2 numbers on the clock.', Object.assign(clock(6, 40, -10), { explain: '6:40 − 10 minutes = 6:30.' })),
      mc('easy', 'It is 9:50 now.\nWhat time was it 20 minutes ago?', ['9:30', '9:40', '10:10', '9:20'], '"Before" means go back. Subtract 20 from the minutes.', Object.assign(clock(9, 50, -20), { explain: '9:50 − 20 minutes = 9:30.' })),
      mc('easy', 'It is 4:35 now.\nWhat time was it 15 minutes ago?', ['4:20', '4:50', '4:25', '3:35'], '"Before" means go back. Subtract 15 from the minutes.', Object.assign(clock(4, 35, -15), { explain: '4:35 − 15 minutes = 4:20.' })),
      mc('easy', 'It is 7:45 now.\nWhat time was it 30 minutes ago?', ['7:15', '8:15', '7:25', '6:45'], '"Before" means go back. Subtract 30 from the minutes.', Object.assign(clock(7, 45, -30), { explain: '7:45 − 30 minutes = 7:15.' }))
    ] },
  { id: 'F3', lesson: 1, concept: 'After some minutes, when the hour changes', explain: 'When we pass the hour, split the minutes: first up to the next hour, then the rest after it. Example: 8:45 + 25 minutes: 15 minutes to 9:00, then 10 minutes = 9:10.',
    variants: [
      mc('medium', 'What time will it be 25 minutes after 8:45?', ['9:10', '8:10', '8:70', '9:20'], 'How many minutes from 8:45 to 9:00? Then add the rest of the minutes after 9:00.', Object.assign(line('8:30', '9:30', ['8:45']), { explain: '15 minutes to 9:00, then 10 minutes: 9:10.' })),
      mc('medium', 'What time will it be 30 minutes after 1:40?', ['2:10', '1:10', '1:70', '2:40'], 'How many minutes from 1:40 to 2:00? Then add the rest after 2:00.', Object.assign(clock(1, 40, 30), { explain: '20 minutes to 2:00, then 10 minutes: 2:10.' })),
      mc('medium', 'What time will it be 45 minutes after 9:25?', ['10:10', '9:10', '9:70', '10:20'], 'How many minutes from 9:25 to 10:00? Then add the rest after 10:00.', Object.assign(line('9:15', '10:30', ['9:25']), { explain: '35 minutes to 10:00, then 10 minutes: 10:10.' })),
      mc('medium', 'What time will it be 50 minutes after 2:40?', ['3:30', '2:30', '2:90', '3:40'], 'How many minutes from 2:40 to 3:00? Then add the rest after 3:00.', Object.assign(clock(2, 40, 50), { explain: '20 minutes to 3:00, then 30 minutes: 3:30.' })),
      mc('medium', 'What time will it be 55 minutes after 3:10?', ['4:05', '3:05', '3:65', '4:15'], 'How many minutes from 3:10 to 4:00? Is 55 more or less than that?', Object.assign(clock(3, 10, 55), { explain: '50 minutes to 4:00, then 5 minutes: 4:05.' })),
      mc('medium', 'What time will it be 45 minutes after 4:25?', ['5:10', '4:10', '4:70', '5:20'], 'How many minutes from 4:25 to 5:00? Then add the rest after 5:00.', Object.assign(line('4:15', '5:30', ['4:25']), { explain: '35 minutes to 5:00, then 10 minutes: 5:10.' }))
    ] },
  { id: 'F4', lesson: 1, concept: 'Before some minutes, when the hour changes', explain: 'First go back to the start of the hour, then go back the rest in the hour before. Example: 10:20 − 50 minutes: 20 minutes to 10:00, then 30 minutes = 9:30.',
    variants: [
      mc('medium', 'What time was it 50 minutes before 10:20?', ['9:30', '10:30', '9:70', '9:20'], 'First go back from 10:20 to 10:00. How many minutes? Then keep going back before 10:00.', Object.assign(line('9:15', '10:30', ['10:20']), { explain: '20 minutes to 10:00, then 30 minutes: 9:30.' })),
      mc('medium', 'What time was it 30 minutes before 6:20?', ['5:50', '6:50', '6:10', '5:40'], 'First go back from 6:20 to 6:00, then keep going back before 6:00.', Object.assign(clock(6, 20, -30), { explain: '20 minutes to 6:00, then 10 minutes: 5:50.' })),
      mc('medium', 'What time was it 45 minutes before 8:15?', ['7:30', '8:30', '7:40', '7:15'], 'First go back from 8:15 to 8:00, then keep going back before 8:00.', Object.assign(line('7:15', '8:30', ['8:15']), { explain: '15 minutes to 8:00, then 30 minutes: 7:30.' })),
      mc('medium', 'What time was it 20 minutes before 3:15?', ['2:55', '3:55', '2:45', '3:05'], 'First go back from 3:15 to 3:00, then keep going back before 3:00.', Object.assign(clock(3, 15, -20), { explain: '15 minutes to 3:00, then 5 minutes: 2:55.' })),
      mc('medium', 'What time was it 55 minutes before 11:25?', ['10:30', '11:30', '10:40', '10:20'], 'First go back from 11:25 to 11:00, then keep going back before 11:00.', Object.assign(line('10:15', '11:30', ['11:25']), { explain: '25 minutes to 11:00, then 30 minutes: 10:30.' })),
      mc('medium', 'What time was it 20 minutes before 4:05?', ['3:45', '4:45', '3:55', '4:25'], 'First go back from 4:05 to 4:00, then keep going back before 4:00.', Object.assign(clock(4, 5, -20), { explain: '5 minutes to 4:00, then 15 minutes: 3:45.' }))
    ] },
  { id: 'F5', lesson: 1, boss: true, concept: 'Challenge: when did you leave home?', explain: 'We know the arrival time and how long the walk took, so we go back by the walking minutes to find the time we left.',
    variants: [
      bossMc('You left home, walked for 30 minutes, and arrived at the aquarium at 9:20.\nWhat time did you leave home?', ['8:50', '9:50', '8:40', '9:00'], 'You left "before" you arrived. Go back 30 minutes from 9:20, passing 9:00.', { explain: '20 minutes to 9:00, then 10 minutes: 8:50.' }),
      bossMc('You left home, walked for 40 minutes, and arrived at the flower shop at 5:20.\nWhat time did you leave home?', ['4:40', '5:40', '4:20', '6:00'], 'You left "before" you arrived. Go back 40 minutes from 5:20, passing 5:00.', { explain: '20 minutes to 5:00, then 20 minutes: 4:40.' }),
      bossMc('What time was it 45 minutes before 10:15?', ['9:30', '10:30', '9:45', '9:70'], 'First go back from 10:15 to 10:00, then keep going back.', { explain: '15 minutes to 10:00, then 30 minutes: 9:30.' })
    ] },

  /* ---------- Lesson 2 · Finding the Time Before and After (Part 2) (pp. 22–25) ---------- */
  { id: 'G1', lesson: 2, concept: '1 hour = 60 minutes', explain: '1 hour = 60 minutes.',
    variants: [
      timed('easy', '1 hour = ? minutes', 60, '60', 'How many minutes does the minute hand go round in one full turn?', 20, { unit: 'minutes', explain: '1 hour = 60 minutes.' }),
      tf('easy', '1 hour = 60 minutes', 0, 'The minute hand makes one full turn in an hour. How many minutes are on the whole clock?', { explain: 'True: 1 hour = 60 minutes.' }),
      tf('easy', '1 hour = 100 minutes', 1, 'The last minute on the clock before the hand goes back to 12 is ...?', { explain: 'False: 1 hour = 60 minutes, not 100.' })
    ] },
  { id: 'G2', lesson: 2, concept: 'Hours and minutes to minutes', explain: 'Change the hour to 60 minutes, then add the minutes: 1 hour 20 minutes = 60 + 20 = 80 minutes.',
    variants: [
      num('easy', '1 hour 20 minutes = ? minutes', 80, '60+20', '1 hour = 60 minutes. Add 60 and the minutes.', { unit: 'minutes', explain: '60 + 20 = 80 minutes.' }),
      num('easy', '1 hour 15 minutes = ? minutes', 75, '60+15', '1 hour = 60 minutes. Add 60 and the minutes.', { unit: 'minutes', explain: '60 + 15 = 75 minutes.' }),
      num('medium', '1 hour 45 minutes = ? minutes', 105, '60+45', '1 hour = 60 minutes. Add 60 and the minutes.', { unit: 'minutes', explain: '60 + 45 = 105 minutes.' }),
      num('medium', '1 hour 35 minutes = ? minutes', 95, '60+35', '1 hour = 60 minutes. Add 60 and the minutes.', { unit: 'minutes', explain: '60 + 35 = 95 minutes.' })
    ] },
  { id: 'G3', lesson: 2, concept: 'Minutes to hours and minutes', explain: 'Take 60 minutes = 1 hour, and the rest are minutes: 70 minutes = 60 + 10 = 1 hour 10 minutes.',
    variants: [
      num('medium', '70 minutes = 1 hour ? minutes', 10, '70-60', 'Take away 60 minutes (one hour); the rest are minutes.', { unit: 'minutes', explain: '70 − 60 = 10: 1 hour 10 minutes.' }),
      num('medium', '75 minutes = 1 hour ? minutes', 15, '75-60', 'Take away 60 minutes (one hour); the rest are minutes.', { unit: 'minutes', explain: '75 − 60 = 15: 1 hour 15 minutes.' }),
      num('medium', '85 minutes = 1 hour ? minutes', 25, '85-60', 'Take away 60 minutes (one hour); the rest are minutes.', { unit: 'minutes', explain: '85 − 60 = 25: 1 hour 25 minutes.' }),
      num('medium', '105 minutes = 1 hour ? minutes', 45, '105-60', 'Take away 60 minutes (one hour); the rest are minutes.', { unit: 'minutes', explain: '105 − 60 = 45: 1 hour 45 minutes.' }),
      num('medium', '115 minutes = 1 hour ? minutes', 55, '115-60', 'Take away 60 minutes (one hour); the rest are minutes.', { unit: 'minutes', explain: '115 − 60 = 55: 1 hour 55 minutes.' })
    ] },
  { id: 'G4', lesson: 2, concept: 'Elapsed time', explain: 'To find the time between two moments, split it: from the start "up to" the next hour, then "after" the hour, and add. Example: 3:50 to 4:15 = 10 + 15 = 25 minutes.',
    variants: [
      num('medium', 'Find the elapsed time:\nfrom 3:50 p.m. to 4:15 p.m.', 25, '10+15', 'How many minutes from 3:50 to 4:00? And from 4:00 to 4:15? Add them.', Object.assign(line('3:45', '4:30', ['3:50', '4:15']), { unit: 'minutes', explain: '10 minutes + 15 minutes = 25 minutes.' })),
      num('medium', 'Find the elapsed time:\nfrom 4:50 p.m. to 5:20 p.m.', 30, '10+20', 'How many minutes from 4:50 to 5:00? And from 5:00 to 5:20? Add them.', Object.assign(line('4:45', '5:30', ['4:50', '5:20']), { unit: 'minutes', explain: '10 minutes + 20 minutes = 30 minutes.' })),
      num('medium', 'Find the elapsed time:\nfrom 8:30 p.m. to 9:10 p.m.', 40, '30+10', 'How many minutes from 8:30 to 9:00? And from 9:00 to 9:10? Add them.', Object.assign(line('8:15', '9:30', ['8:30', '9:10']), { unit: 'minutes', explain: '30 minutes + 10 minutes = 40 minutes.' })),
      num('medium', 'Find the elapsed time:\nfrom 7:50 a.m. to 8:25 a.m.', 35, '10+25', 'How many minutes from 7:50 to 8:00? And from 8:00 to 8:25? Add them.', { unit: 'minutes', explain: '10 minutes + 25 minutes = 35 minutes.' }),
      num('medium', 'Sally studied from 7:30 p.m. to 8:15 p.m. How many minutes did she study?', 45, '30+15', 'How many minutes from 7:30 to 8:00? And from 8:00 to 8:15? Add them.', { unit: 'minutes', explain: '30 minutes + 15 minutes = 45 minutes.' })
    ] },
  { id: 'G5', lesson: 2, concept: 'Longer than an hour', explain: 'If the time is more than 60 minutes, write it in hours and minutes. Example: 2:40 to 3:50 = 20 + 50 = 70 minutes = 1 hour 10 minutes.',
    variants: [
      num('medium', 'The time from 2:40 to 3:50.\nHow many minutes?', 70, '20+50', 'How many minutes from 2:40 to 3:00? And from 3:00 to 3:50? Add them.', Object.assign(line('2:30', '4:00', ['2:40', '3:50']), { unit: 'minutes', explain: '20 + 50 = 70 minutes = 1 hour 10 minutes.' })),
      mc('medium', 'Find the elapsed time:\nfrom 7:20 a.m. to 8:35 a.m.', ['1 hour 15 minutes', '1 hour 35 minutes', '15 minutes', '75 hours'], 'From 7:20 to 8:00, then from 8:00 to 8:35. Add, then change 60 minutes into an hour.', Object.assign(line('7:15', '8:45', ['7:20', '8:35']), { explain: '40 + 35 = 75 minutes = 1 hour 15 minutes.' })),
      mc('medium', 'Find the elapsed time:\nfrom 8:40 a.m. to 9:45 a.m.', ['1 hour 5 minutes', '1 hour 45 minutes', '5 minutes', '2 hours 5 minutes'], 'From 8:40 to 9:00, then from 9:00 to 9:45. Add, then change 60 minutes into an hour.', { explain: '20 + 45 = 65 minutes = 1 hour 5 minutes.' }),
      mc('medium', 'Find the elapsed time:\nfrom 1:10 p.m. to 2:20 p.m.', ['1 hour 10 minutes', '1 hour 20 minutes', '10 minutes', '2 hours 10 minutes'], 'From 1:10 to 2:00, then from 2:00 to 2:20. Add, then change 60 minutes into an hour.', { explain: '50 + 20 = 70 minutes = 1 hour 10 minutes.' }),
      mc('medium', 'Find the elapsed time:\nfrom 10:50 a.m. to 11:55 a.m.', ['1 hour 5 minutes', '1 hour 55 minutes', '5 minutes', '65 hours'], 'From 10:50 to 11:00, then from 11:00 to 11:55. Add, then change 60 minutes into an hour.', { explain: '10 + 55 = 65 minutes = 1 hour 5 minutes.' })
    ] },
  { id: 'G6', lesson: 2, boss: true, concept: 'Challenge: time on transport', explain: 'Add the minutes, then change 60 minutes into an hour. Example: 50 + 30 = 80 minutes = 1 hour 20 minutes.',
    variants: [
      bossMc('You rode the bus for 50 minutes and the train for 30 minutes. How many hours and minutes did you spend on transport?', ['1 hour 20 minutes', '1 hour 80 minutes', '80 hours', '2 hours 20 minutes'], 'Add the minutes first, then take 60 minutes = 1 hour from them.', { explain: '50 + 30 = 80 minutes = 60 + 20 = 1 hour 20 minutes.' }),
      bossMc('You rode the bus for 50 minutes and the train for 35 minutes. How many hours and minutes did you spend on transport?', ['1 hour 25 minutes', '1 hour 85 minutes', '85 hours', '1 hour 35 minutes'], 'Add the minutes first, then take 60 minutes = 1 hour from them.', { explain: '50 + 35 = 85 minutes = 1 hour 25 minutes.' }),
      bossMc('You rode the bus for 40 minutes and the train for 50 minutes. How many hours and minutes did you spend on transport in total?', ['1 hour 30 minutes', '1 hour 90 minutes', '90 hours', '2 hours 30 minutes'], 'Add the minutes first, then take 60 minutes = 1 hour from them.', { explain: '40 + 50 = 90 minutes = 1 hour 30 minutes.' }),
      bossMc('Gamal read a book for 45 minutes in the morning and 20 minutes in the afternoon. How many hours and minutes did he spend reading?', ['1 hour 5 minutes', '1 hour 65 minutes', '65 hours', '1 hour 25 minutes'], 'Add the minutes first, then take 60 minutes = 1 hour from them.', { explain: '45 + 20 = 65 minutes = 1 hour 5 minutes.' })
    ] },

  /* ---------- Lesson 3 · Shorter Units of Time (pp. 26–29) ---------- */
  { id: 'H1', lesson: 3, concept: 'The second', explain: 'A second is a unit of time shorter than a minute. 1 minute = 60 seconds.',
    variants: [
      timed('easy', '1 minute = ? seconds', 60, '60', 'Like hours and minutes: one full turn of the second hand = ...', 20, { unit: 'seconds', explain: '1 minute = 60 seconds.' }),
      tf('easy', 'A second is a unit of time shorter than a minute.', 0, 'Which goes by faster: a second or a minute?', { explain: 'True: a second is shorter than a minute.' }),
      mc('easy', 'Which unit of time is the shortest?', ['second', 'minute', 'hour'], 'Think: which one goes by in a very short moment?', { explain: 'A second is shorter than a minute, and a minute is shorter than an hour.' })
    ] },
  { id: 'H2', lesson: 3, concept: 'Reading a stopwatch with a hand', explain: 'When the hand goes all the way round, the time is 60 seconds. Read the number the hand points to.',
    variants: [
      num('easy', 'How many seconds does the stopwatch show?', 15, '15', 'Read the number the orange hand points to.', { fig: 'g3Stopwatch', pic: { kind: 'analog', s: 15 }, unit: 'seconds', explain: 'The hand points to 15: 15 seconds.' }),
      num('easy', 'How many seconds does the stopwatch show?', 20, '20', 'Read the number the orange hand points to.', { fig: 'g3Stopwatch', pic: { kind: 'analog', s: 20 }, unit: 'seconds', explain: 'The hand points to 20: 20 seconds.' }),
      num('easy', 'How many seconds does the stopwatch show?', 40, '40', 'Read the number the orange hand points to.', { fig: 'g3Stopwatch', pic: { kind: 'analog', s: 40 }, unit: 'seconds', explain: 'The hand points to 40: 40 seconds.' }),
      num('easy', 'How many seconds does the stopwatch show?', 10, '10', 'Read the number the orange hand points to.', { fig: 'g3Stopwatch', pic: { kind: 'analog', s: 10 }, unit: 'seconds', explain: 'The hand points to 10: 10 seconds.' }),
      num('easy', 'How many seconds does the stopwatch show?', 50, '50', 'Read the number the orange hand points to.', { fig: 'g3Stopwatch', pic: { kind: 'analog', s: 50 }, unit: 'seconds', explain: 'The hand points to 50: 50 seconds.' })
    ] },
  { id: 'H3', lesson: 3, concept: 'Reading a digital stopwatch', explain: 'In the big numbers on the screen, the last two numbers on the right show the seconds.',
    variants: [
      num('easy', 'How many seconds does the digital stopwatch show?', 45, '45', 'Look at the last two big numbers on the right.', { fig: 'g3Stopwatch', pic: { kind: 'digital', s: 45 }, unit: 'seconds', explain: 'The last two big numbers: 45 seconds.' }),
      num('easy', 'How many seconds does the digital stopwatch show?', 15, '15', 'Look at the last two big numbers on the right.', { fig: 'g3Stopwatch', pic: { kind: 'digital', s: 15 }, unit: 'seconds', explain: 'The last two big numbers: 15 seconds.' }),
      num('easy', 'How many seconds does the digital stopwatch show?', 50, '50', 'Look at the last two big numbers on the right.', { fig: 'g3Stopwatch', pic: { kind: 'digital', s: 50 }, unit: 'seconds', explain: 'The last two big numbers: 50 seconds.' }),
      num('easy', 'How many seconds does the digital stopwatch show?', 35, '35', 'Look at the last two big numbers on the right.', { fig: 'g3Stopwatch', pic: { kind: 'digital', s: 35 }, unit: 'seconds', explain: 'The last two big numbers: 35 seconds.' }),
      num('easy', 'How many seconds does the digital stopwatch show?', 30, '30', 'Look at the last two big numbers on the right.', { fig: 'g3Stopwatch', pic: { kind: 'digital', s: 30 }, unit: 'seconds', explain: 'The last two big numbers: 30 seconds.' })
    ] },
  { id: 'H4', lesson: 3, concept: 'Minutes and seconds to seconds', explain: 'Change the minute to 60 seconds, then add the seconds: 1 minute 5 seconds = 60 + 5 = 65 seconds.',
    variants: [
      num('easy', '1 minute 5 seconds = ? seconds', 65, '60+5', '1 minute = 60 seconds. Add 60 and the seconds.', { unit: 'seconds', explain: '60 + 5 = 65 seconds.' }),
      num('medium', '1 minute 30 seconds = ? seconds', 90, '60+30', '1 minute = 60 seconds. Add 60 and the seconds.', { unit: 'seconds', explain: '60 + 30 = 90 seconds.' }),
      num('medium', '1 minute 40 seconds = ? seconds', 100, '60+40', '1 minute = 60 seconds. Add 60 and the seconds.', { unit: 'seconds', explain: '60 + 40 = 100 seconds.' }),
      num('medium', '1 minute 15 seconds = ? seconds', 75, '60+15', '1 minute = 60 seconds. Add 60 and the seconds.', { unit: 'seconds', explain: '60 + 15 = 75 seconds.' })
    ] },
  { id: 'H5', lesson: 3, concept: 'Seconds to minutes and seconds', explain: 'Take 60 seconds = 1 minute, and the rest are seconds: 90 seconds = 60 + 30 = 1 minute 30 seconds.',
    variants: [
      num('medium', '90 seconds = 1 minute ? seconds', 30, '90-60', 'Take away 60 seconds (one minute); the rest are seconds.', { unit: 'seconds', explain: '90 − 60 = 30: 1 minute 30 seconds.' }),
      num('medium', '85 seconds = 1 minute ? seconds', 25, '85-60', 'Take away 60 seconds (one minute); the rest are seconds.', { unit: 'seconds', explain: '85 − 60 = 25: 1 minute 25 seconds.' }),
      num('medium', '105 seconds = 1 minute ? seconds', 45, '105-60', 'Take away 60 seconds (one minute); the rest are seconds.', { unit: 'seconds', explain: '105 − 60 = 45: 1 minute 45 seconds.' }),
      num('medium', '95 seconds = 1 minute ? seconds', 35, '95-60', 'Take away 60 seconds (one minute); the rest are seconds.', { unit: 'seconds', explain: '95 − 60 = 35: 1 minute 35 seconds.' })
    ] },
  { id: 'H6', lesson: 3, concept: 'The right unit of time', explain: 'Very short things are measured in seconds, medium things in minutes, and long things in hours.',
    variants: [
      unitQ('Time to run 50 metres: 11 ...', 'seconds', 'easy'),
      unitQ('Time from waking up to going to bed: 15 ...', 'hours', 'easy'),
      unitQ('Time for a maths lesson at school: 45 ...', 'minutes', 'easy'),
      unitQ('Time to swim 25 metres: 50 ...', 'seconds'),
      unitQ('Time spent at school: 7 ...', 'hours'),
      unitQ('Time to eat dinner: 20 ...', 'minutes'),
      unitQ('Time to brush your teeth: 3 ...', 'minutes'),
      unitQ('Time you can stay under water: 30 ...', 'seconds'),
      unitQ('Time you sleep in a day: 9 ...', 'hours')
    ] },
  { id: 'H7', lesson: 3, boss: true, concept: 'Challenge: minutes and seconds', explain: '1 minute = 60 seconds: add 60 to change into seconds, and subtract 60 to find the seconds left after the minute.',
    variants: [
      bossNum('1 minute 50 seconds = ? seconds', 110, '60+50', '1 minute = 60 seconds, then add 50.', { unit: 'seconds', explain: '60 + 50 = 110 seconds.' }),
      bossNum('115 seconds = 1 minute ? seconds', 55, '115-60', 'Subtract 60 seconds from 115.', { unit: 'seconds', explain: '115 − 60 = 55: 1 minute 55 seconds.' }),
      bossNum('110 seconds = 1 minute ? seconds', 50, '110-60', 'Subtract 60 seconds from 110.', { unit: 'seconds', explain: '110 − 60 = 50: 1 minute 50 seconds.' }),
      bossNum('1 minute 25 seconds = ? seconds', 85, '60+25', '1 minute = 60 seconds, then add 25.', { unit: 'seconds', explain: '60 + 25 = 85 seconds.' })
    ] }
];

/* word problems as pictures (owner, 6 Nov 2026): key = idea.phrasing (1-based); a phrasing that already has a picture keeps it */
const S = (icon, n, label, more) => Object.assign({ icon, n, label }, more || {});
const STORY = {
  'F5.1': { fig: 'g3Clock', pic: { h: 9, m: 20, move: -30 } },
  'F5.2': { fig: 'g3Clock', pic: { h: 5, m: 20, move: -40 } },
  'G4.5': { fig: 'g3TimeLine', pic: { from: '7:15', to: '8:30', marks: ['7:30', '8:15'] } },
  'G6.1': [S('schoolbus', null, 'bus 50 min'), S('train2', null, 'train 30 min')],
  'G6.2': [S('schoolbus', null, 'bus 50 min'), S('train2', null, 'train 35 min')],
  'G6.3': [S('schoolbus', null, 'bus 40 min'), S('train2', null, 'train 50 min')],
  'G6.4': [S('picturebook', null, 'morning 45 min'), S('picturebook2', null, 'afternoon 20 min')]
};
window.IDEAS.forEach(I => I.variants.forEach((v, i) => { const st = STORY[I.id + '.' + (i + 1)]; if (st && !v.fig) Object.assign(v, Array.isArray(st) ? { fig: 'g3Story', pic: { parts: st } } : st); }));
})();
