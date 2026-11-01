/* Grade 4 Science (Languages) · Chapter 7 The Force of Rubber
   9 core ideas from the school book 2026/2027, both lessons (7-1 and 7-2): Point!, Activity, Try, Exercise (pages 84-89),
   plus 3 bonus ideas from the Column "The Wind Crossing the Nile, and the Power Stored by Rubber" (pages 90-91).
   Source: the owner's PDF on Google Drive (Motafawek/g4/science/unit7 -en.pdf), 1 Nov 2026. No pictures from the owner: every picture is drawn in code.
   Ideas: R11-R15 = rubber band-powered cars and the stretched length (7-1), C11-C14 = the number of rubber bands (7-2), X11-X13 = the Column (bonus).
   (Idea letters are shared with Chapters 1-3, so the numbers start at 11.)
   The book's words: rubber band, stretch, original shape, power to move things, hook, launching pad, 0 cm, 5 cm, 10 cm, 15 cm,
   number of rubber bands, combined, felucca, power to snap back, store, bow and arrow, Zafarana Wind Power Plant, electricity.
   Review notes: "when stretched to the same 15 cm, 1 rubber band has the weakest power" (C13) is the book's own exercise and follows from
   "more rubber bands, the power is combined". The exercise options "the car starts faster" and "the power is gone when the band returns"
   are not explained in the text and are not used.
   Tap pictures (drawn in g4_art.js): stretchLengths -> str5 | str10 | str15 ; bandCounts -> band1 | band2 | band3
*/
(function () {
window.CHAPTER = { id: 'g4c7', title: 'The Force of Rubber', grade: 'Grade 4', track: 'Languages' };

window.IDEAS = [
  /* ---------- 7-1 Rubber Band-Powered Cars ---------- */
  { id: 'R11', lesson: 1, concept: 'Rubber tries to return to its shape',
    explain: 'A rubber band has a nature to try to return to its original shape when it is stretched. You can use the power of a stretched rubber band to make things fly or make cars run.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'When does a rubber band produce power?', options: ['When it is stretched and trying to return to its original shape', 'When it is loose and relaxed', 'When it is cut'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'A stretched rubber band tries to go back to its ___ shape.', options: ['original', 'new', 'square'], answer: 0 },
      { type: 'multi', mode: 'normal', level: 'medium', q: 'Choose all the things the power of a stretched rubber band can do.', options: ['Make things fly', 'Make cars run', 'Make light'], answer: [0, 1] }
    ] },
  { id: 'R12', lesson: 1, concept: 'Longer stretch, bigger power',
    explain: 'The longer you stretch the rubber band, the stronger the power to return to its original shape, and the bigger the power to move things.',
    variants: [
      { type: 'fill', mode: 'normal', level: 'medium', q: 'The longer you stretch the rubber band, the ___ the power to move the car becomes.', options: ['stronger', 'weaker', 'colder'], answer: 0 },
      { type: 'tap', diagram: 'stretchLengths', mode: 'normal', level: 'medium', q: 'Tap the car that will travel the farthest.', answer: 'str15' },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'No matter how long you stretch the rubber band, the distance the car travels is always the same.', answer: 1, explain: 'The longer you stretch the rubber band, the bigger the power to move things, so the car travels farther.' },
      { type: 'build', style: 'sentence', mode: 'normal', level: 'hard', q: 'Make the correct sentence.', parts: ['The longer you stretch the rubber band,', 'the bigger the power', 'to move things'], extra: ['the smaller the power', 'to stop light'] }
    ] },
  { id: 'R13', lesson: 1, concept: 'How to make a rubber band-powered car',
    explain: '1) Take off the sail from the wind-powered car used in 6-1. 2) Attach a hook to the bottom of the car and tape it tightly so it does not come off. 3) Make a launching pad with a plastic board, hook the rubber band to the hook, and set the point where the rubber band starts to stretch as 0 cm.',
    variants: [
      { type: 'order', mode: 'normal', level: 'medium', q: 'Put the steps of making a rubber band-powered car in order.', items: ['Attach a hook to the bottom of the car', 'Take off the sail from the wind-powered car', 'Make a launching pad and hook the rubber band'], answer: [1, 0, 2] },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Where do we attach the hook?', options: ['To the bottom of the car', 'To the top of the sail', 'To the fan'], answer: 0 },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'The point where the rubber band starts to stretch is set as…', options: ['0 cm', '5 cm', '15 cm'], answer: 0 }
    ] },
  { id: 'R14', lesson: 1, concept: 'The stretching experiment',
    explain: 'Activity: stretch the rubber band by just 5 cm, let go, and measure the distance the car traveled. Then stretch it longer to 10 cm and 15 cm and see how the distance changes. Record the distance for each stretched length.',
    variants: [
      { type: 'order', mode: 'normal', level: 'medium', q: 'Put the stretched lengths of the experiment in order, from the shortest.', items: ['10 cm', '15 cm', '5 cm'], answer: [2, 0, 1] },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'In this experiment, what do we change?', options: ['How long we stretch the rubber band', 'The color of the car', 'The size of the sail'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'We measure the distance the car travels for each stretched length.', answer: 0 }
    ] },
  { id: 'R15', lesson: 1, boss: true, concept: 'The power of a stretched rubber band',
    explain: 'A stretched rubber band tries to return to its original shape: the longer the stretch, the bigger the power, and the farther the car travels.',
    variants: [
      { type: 'mc', style: 'story', mode: 'boss', level: 'hard', q: 'Hoda stretched her rubber band 5 cm and the car stopped close. What can she do so it goes farther?', options: ['Stretch it longer, to 10 cm or 15 cm', 'Stretch it less, to 2 cm', 'Not stretch it at all'], answer: 0 },
      { type: 'table', mode: 'boss', level: 'hard', q: 'Stretched 5 cm or 15 cm?', cols: ['5 cm', '15 cm'], items: ['A smaller power to move the car', 'The car travels a shorter distance', 'A bigger power to move the car', 'The car travels a longer distance'], answer: [0, 0, 1, 1] },
      { type: 'build', style: 'why', mode: 'boss', level: 'hard', q: 'A rubber band stretched to 15 cm moves the car farther than one stretched to 5 cm.', parts: ['Because the longer the stretch,', 'the stronger the power', 'to return to its original shape'], extra: ['the weaker the power', 'to change color'] }
    ] },

  /* ---------- 7-2 Power of Rubber Bands ---------- */
  { id: 'C11', lesson: 2, concept: 'More rubber bands, combined power',
    explain: 'When you increase the number of rubber bands, the power of each rubber band trying to return to its original shape is combined, and the power to move the car becomes even stronger.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What happens when you increase the number of rubber bands?', options: ['The power of each band is combined and the power to move the car becomes stronger', 'The power becomes weaker', 'Nothing changes'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'When you increase the number of rubber bands, the power to move the car goes up.', answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'With more rubber bands, the power of each band is ___, so the power to move the car becomes stronger.', options: ['combined', 'lost', 'cooled'], answer: 0 }
    ] },
  { id: 'C12', lesson: 2, concept: 'The number experiment',
    explain: 'Activity: stretch 1 rubber band by 10 cm, let the car run and measure the distance. Then increase to 2 rubber bands, bundle them, stretch them by the same 10 cm and let it run. Record and discuss the difference.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'When we use 2 rubber bands, how far do we stretch them?', options: ['The same 10 cm', 'Only 5 cm', 'As far as we like'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'In this experiment, what do we change instead of the length?', options: ['The number of rubber bands', 'The size of the sail', 'The fan strength'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'We increased the number of rubber bands. What happens to the distance the car travels?', options: ['It becomes longer', 'It becomes shorter', 'It stays the same'], answer: 0 }
    ] },
  { id: 'C13', lesson: 2, concept: 'One, two or three bands',
    explain: 'Stretched to the same length, more rubber bands give a stronger power: 1 rubber band has the weakest power to move the car.',
    variants: [
      { type: 'tap', diagram: 'bandCounts', mode: 'normal', level: 'medium', q: 'All are stretched to the same 15 cm. Tap the car with the weakest power.', answer: 'band1' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Stretched to the same 15 cm, which has the weakest power to move the car?', options: ['1 rubber band', '2 rubber bands', '3 rubber bands'], answer: 0 },
      { type: 'tap', diagram: 'bandCounts', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap the car with the strongest power.', answer: 'band3' }
    ] },
  { id: 'C14', lesson: 2, boss: true, concept: 'Making the rubber power stronger',
    explain: 'To make the power of the rubber bands stronger: stretch the rubber bands longer, or increase their number. Making the power of the wind or rubber bands stronger lets us move the car farther.',
    variants: [
      { type: 'multi', mode: 'boss', level: 'hard', q: 'We want to move a car carrying a heavy load. Choose all the ways to make the rubber power stronger.', options: ['Increase the number of rubber bands', 'Stretch the rubber bands longer', 'Decrease the number of rubber bands', 'Stretch the rubber bands shorter'], answer: [0, 1] },
      { type: 'fill', mode: 'boss', level: 'hard', q: 'From the experiments, making the power of the wind or rubber bands ___ allows us to move the car farther.', options: ['stronger', 'weaker', 'smaller'], answer: 0 },
      { type: 'table', mode: 'boss', level: 'hard', q: 'Does the car go farther or shorter?', cols: ['Farther', 'Shorter'], items: ['Stretch the band longer', 'Add more rubber bands', 'Stretch the band shorter', 'Use fewer rubber bands'], answer: [0, 0, 1, 1] }
    ] },

  /* ---------- Bonus · Column ---------- */
  { id: 'X11', lesson: 2, bonus: true, concept: 'The felucca catches the wind (Column)',
    explain: 'The felucca, the traditional sailboat on the Nile River, uses 100% of the wind’s power. By changing the direction of the sail, they adjust which way the wind pushes, so the boat goes where they want. They change the moving power of air (wind) into the moving power of the boat.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What moves a felucca on the Nile?', options: ['The power of the wind', 'A rubber band', 'Sunlight'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'How do felucca sailors choose where the boat goes?', options: ['By changing the direction of the sail', 'By making the sail black', 'By pouring water on the sail'], answer: 0 }
    ] },
  { id: 'X12', lesson: 2, bonus: true, concept: 'The power to snap back (Column)',
    explain: 'The harder you pull a rubber band, the more power you can store inside it. The ancient Egyptian bow and arrow was also a tool that boosted this power to snap back as much as possible.',
    variants: [
      { type: 'tf', mode: 'normal', level: 'easy', q: 'The harder you pull a rubber band, the more power you can store inside it.', answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which ancient Egyptian tool used the power to snap back?', options: ['The bow and arrow', 'The sundial', 'The felucca'], answer: 0 }
    ] },
  { id: 'X13', lesson: 2, bonus: true, concept: 'Zafarana wind power plant (Column)',
    explain: 'Along the coast of the Red Sea in Egypt, many giant wind turbines are lined up: the Zafarana Wind Power Plant, one of the largest wind farms in the world. There, the wind is turned into electricity.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What does the Zafarana Wind Power Plant turn the wind into?', options: ['Electricity', 'Water', 'Sand'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Where is the Zafarana Wind Power Plant?', options: ['Along the coast of the Red Sea', 'In the middle of the Nile', 'In the Western Desert oases'], answer: 0 }
    ] }
];
})();
