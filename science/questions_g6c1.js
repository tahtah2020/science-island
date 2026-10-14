/* Grade 6 Science (Languages) · Chapter 1 Conditions for Burning
   18 core ideas from the school book 2026/2027, all three lessons (1-1 to 1-3): Point!, Warm Up, Try, Exercise (pages 6-14),
   plus 4 bonus ideas from "Let's Expand" (page 15) and the Column "Combustion and Future Energy" (pages 16-17).
   Same format as the other files. Ideas: A = how things burn and air (1-1), O = the role of oxygen (1-2), B = air after burning (1-3), X = bonus.
   Idea ids are unique inside Grade 6 (the other grades have their own sets).
   The book's words: fresh air, flow in and out, replaced, keeps burning, goes out, nitrogen, oxygen, carbon dioxide, burns brightly, limewater, milky white.
   Tap pictures (drawn in g6_art.js): jarSetups -> closed | open | gaps ; airBar -> n2 | o2 | co2 ; gasJars -> n2 | o2 | co2 ; limeJars -> clear | milky
*/
window.CHAPTER = { id: 'g6-lang-ch1', title: 'Conditions for Burning', grade: 'Grade 6', track: 'Languages' };

window.IDEAS = [
  /* ---------- 1-1 How Things Burn and Air ---------- */
  { id: 'A1', lesson: 1, concept: 'Fresh air must flow in and out',
    explain: 'For things to keep burning, fresh air must constantly flow in and out. In a place where the air is not replaced, things cannot keep burning.',
    variants: [
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'For things to keep burning, fresh ___ must constantly flow in and out.', options: ['air', 'water', 'sand'], answer: 0 },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'In a place where the air is not replaced, things cannot keep burning.', answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What is necessary for things to keep burning?', options: ['Fresh air that constantly flows in and out', 'Air that is never replaced', 'A dark place', 'A lid that stops the air'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'In a place where air is not replaced, things ___ keep burning.', options: ['cannot', 'can always'], answer: 0 },
      { type: 'build', style: 'why', mode: 'normal', level: 'hard', q: 'A candle cannot keep burning in a place where the air is not replaced.', parts: ['Because, to keep burning,', 'fresh air must constantly', 'flow in and out'], extra: ['water vapor must constantly', 'stay in the dark'] }
    ] },
  { id: 'A2', lesson: 1, concept: 'A jar that is not covered with a lid',
    explain: 'When the jar is not covered with a lid, fresh air is supplied from the surroundings, so the candle keeps burning.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'A candle burns inside a jar that is not covered with a lid. What happens?', options: ['The candle keeps burning', 'The flame goes out at once', 'The flame goes out after the air is used up'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'When the jar is not covered with a lid, fresh air is supplied from the ___.', options: ['surroundings', 'candle', 'clay'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'When the jar is not covered with a lid, the candle keeps burning.', answer: 0 },
      { type: 'build', style: 'why', mode: 'normal', level: 'hard', q: 'A candle keeps burning in a jar that is not covered with a lid.', parts: ['Because fresh air', 'is supplied', 'from the surroundings'], extra: ['is used up', 'from the candle'] }
    ] },
  { id: 'A3', lesson: 1, concept: 'A jar covered with a lid',
    explain: 'When the jar is covered with a lid, fresh air stops coming in. Once the air inside the jar is used up, the flame will go out.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'In the experiment of burning a standing candle inside a jar, what happens to the flame if you put a lid on the jar to stop air from coming in and out?', options: ['The flame goes out', 'The flame keeps burning', 'The flame burns brightly'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Why did the flame go out inside the jar with the lid?', options: ['Because fresh air stopped coming in', 'Because there was no water vapor in the jar', 'Because it got dark inside the jar'], answer: 0 },
      { type: 'tap', diagram: 'jarSetups', mode: 'timed', seconds: 15, level: 'easy', q: 'Three candles are burning. Tap the jar in which the flame will go out.', answer: 'closed' },
      { type: 'build', style: 'whatif', mode: 'normal', level: 'hard', q: 'What happens to a burning candle when the jar is covered with a lid?', parts: ['Once the air inside the jar', 'is used up,', 'the flame goes out'], extra: ['is replaced,', 'the flame gets bigger'] },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'The candle keeps burning inside a jar that is covered with a lid.', answer: 1 },
      { type: 'fix', mode: 'normal', level: 'medium', q: 'Once the air inside the covered jar is used up, the flame will grow.', wrong: 'grow', answer: 'go out' }
    ] },
  { id: 'A4', lesson: 1, concept: 'Gaps at the top and the bottom',
    explain: 'When there are gaps at the top and the bottom of the jar, fresh air can flow in and out, so the candle keeps burning.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'In the experiment of burning a candle inside a jar, what happens to the flame if you leave gaps at the top and bottom of the jar?', options: ['It keeps burning', 'It goes out immediately', 'It gets weaker little by little and goes out'], answer: 0 },
      { type: 'tap', diagram: 'jarSetups', mode: 'normal', level: 'medium', q: 'Tap the jar that has gaps at both the top and the bottom.', answer: 'gaps' },
      { type: 'build', style: 'why', mode: 'normal', level: 'hard', q: 'The candle keeps burning when there are gaps at the top and the bottom of the jar.', parts: ['Because fresh air', 'can constantly', 'flow in and out'], extra: ['can never', 'turn into water'] },
      { type: 'multi', mode: 'normal', level: 'medium', q: 'In which jars does the candle keep burning? Choose all the correct answers.', options: ['A jar that is not covered with a lid', 'A jar with gaps at the top and the bottom', 'A jar covered with a lid, where air cannot come in or out'], answer: [0, 1] },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'With gaps at the top and the bottom of the jar, the flame goes out immediately.', answer: 1 }
    ] },
  { id: 'A5', lesson: 1, boss: true, concept: 'Let’s keep things burning',
    explain: 'A candle inside a jar keeps burning only when fresh air can flow in and out: with no lid, or with gaps at the top and the bottom. With a lid on, the air is not replaced; once the air inside is used up, the flame goes out.',
    variants: [
      { type: 'table', mode: 'boss', level: 'hard', q: 'What happens to the candle in each case?', cols: ['Keeps burning', 'The flame goes out'], items: ['A jar not covered with a lid', 'A jar covered with a lid', 'A jar with gaps at the top and the bottom', 'A place where the air is not replaced'], answer: [0, 1, 0, 1] },
      { type: 'mc', style: 'story', mode: 'boss', level: 'hard', q: 'Ahmed’s teacher lights a candle. Ahmed covers it with a glass jar and puts a lid on. After a while the flame goes out. He wants the candle to keep burning inside the jar next time. What should he do?', options: ['Leave gaps at the top and the bottom, so fresh air flows in and out', 'Put a second lid on the jar', 'Make the room darker', 'Use a smaller jar with a lid'], answer: 0 },
      { type: 'order', mode: 'boss', level: 'hard', q: 'Put the steps of the experiment in order.', items: ['Cover the candle with the bottomless gas jar', 'Spread the clay flat on the board', 'Put a lid on the jar and watch the flame', 'Stand a candle on the clay and light it'], answer: [1, 3, 0, 2] },
      { type: 'match', mode: 'boss', level: 'hard', q: 'Match each jar to what happens inside it.', left: ['A jar covered with a lid', 'A jar not covered with a lid'], right: ['The air inside is used up, so the flame goes out', 'Fresh air is supplied from the surroundings, so the candle keeps burning'], answer: [0, 1] },
      { type: 'build', style: 'why', mode: 'boss', level: 'hard', q: 'The flame goes out inside a jar covered with a lid.', parts: ['Because fresh air', 'stops coming in,', 'and the air inside is used up'], extra: ['keeps coming in,', 'and the jar gets dark'] }
    ] },

  /* ---------- 1-2 The Role of Oxygen ---------- */
  { id: 'O1', lesson: 2, concept: 'Air is a mixture of gases',
    explain: 'Air is a mixture of gases like nitrogen, oxygen and carbon dioxide.',
    variants: [
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'Air is a mixture of gases.', answer: 0 },
      { type: 'multi', mode: 'normal', level: 'medium', q: 'Which gases are in the air? Choose all the correct answers.', options: ['Nitrogen', 'Oxygen', 'Carbon dioxide', 'Limewater'], answer: [0, 1, 2] },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Air is a mixture of gases like nitrogen, ___ and carbon dioxide.', options: ['oxygen', 'limewater', 'clay'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What is air?', options: ['A mixture of gases like nitrogen, oxygen and carbon dioxide', 'One gas only: oxygen', 'One gas only: nitrogen'], answer: 0 }
    ] },
  { id: 'O2', lesson: 2, concept: 'Components of air',
    explain: 'Components of air: nitrogen about 78%, oxygen about 21%, and carbon dioxide (about 0.04%), etc.',
    variants: [
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'Which gas makes up about 78% of the air?', options: ['Nitrogen', 'Oxygen', 'Carbon dioxide'], answer: 0 },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'About how much of the air is oxygen?', options: ['About 21%', 'About 78%', 'About 0.04%'], answer: 0 },
      { type: 'match', mode: 'normal', level: 'medium', q: 'Match each gas to its amount in the air.', left: ['Nitrogen', 'Oxygen', 'Carbon dioxide'], right: ['About 78%', 'About 21%', 'About 0.04%'], answer: [0, 1, 2] },
      { type: 'tap', diagram: 'airBar', mode: 'normal', level: 'medium', q: 'This bar shows the components of air. Tap the part that shows nitrogen.', answer: 'n2' },
      { type: 'tap', diagram: 'airBar', mode: 'normal', level: 'hard', q: 'This bar shows the components of air. Tap the part that shows oxygen.', answer: 'o2' },
      { type: 'order', mode: 'normal', level: 'medium', q: 'Put the gases of the air in order, from the largest amount to the smallest.', items: ['Oxygen', 'Carbon dioxide', 'Nitrogen'], answer: [2, 0, 1] },
      { type: 'fix', mode: 'normal', level: 'medium', q: 'Oxygen makes up about 78% of the air.', wrong: 'Oxygen', answer: 'Nitrogen' }
    ] },
  { id: 'O3', lesson: 2, concept: 'Oxygen helps things burn',
    explain: 'Oxygen has the power to help things burn, but nitrogen and carbon dioxide do not.',
    variants: [
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'What gas is included in the air and has the power to help things burn?', options: ['Oxygen', 'Nitrogen', 'Carbon dioxide'], answer: 0 },
      { type: 'term', mode: 'normal', level: 'medium', q: 'The gas in the air that has the power to help things burn.', answer: 'Oxygen' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which statement correctly explains oxygen?', options: ['Oxygen helps other things burn', 'Oxygen makes up about 78% of the air', 'When you put a candle in a jar with oxygen, the flame goes out immediately'], answer: 0 },
      { type: 'table', mode: 'normal', level: 'hard', q: 'Which gases have the power to help things burn?', cols: ['Helps things burn', 'Does not help things burn'], items: ['Oxygen', 'Nitrogen', 'Carbon dioxide'], answer: [0, 1, 1] },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'Nitrogen has the power to help things burn.', answer: 1 },
      { type: 'build', style: 'function', mode: 'normal', level: 'hard', q: 'What is the role of oxygen in burning?', parts: ['Oxygen', 'has the power', 'to help things burn'], extra: ['has no power', 'to stop things from burning'] }
    ] },
  { id: 'O4', lesson: 2, concept: 'Burning in a jar of oxygen',
    explain: 'When you put a lit incense stick into a jar of oxygen, it burns brightly, because oxygen has the power to help things burn.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What happens to the burning when you put a lit incense stick into a jar of oxygen?', options: ['It burns brightly', 'It becomes weaker', 'The flame goes out'], answer: 0 },
      { type: 'tap', diagram: 'gasJars', mode: 'normal', level: 'medium', q: 'A lit incense stick is put into each jar. Tap the jar in which it burns brightly.', answer: 'o2' },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'A lit incense stick burns brightly in a jar of oxygen.', answer: 0 },
      { type: 'build', style: 'whatif', mode: 'normal', level: 'hard', q: 'What happens when you put a lit incense stick into a jar of oxygen?', parts: ['It burns', 'brightly,', 'because oxygen helps things burn'], extra: ['weakly,', 'because oxygen puts out the flame'] },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'In a jar of oxygen, a lit incense stick burns ___.', options: ['brightly', 'weakly'], answer: 0 }
    ] },
  { id: 'O5', lesson: 2, concept: 'Burning in nitrogen and in carbon dioxide',
    explain: 'When you put a lit incense stick into a jar of nitrogen or a jar of carbon dioxide, the flame goes out, because nitrogen and carbon dioxide do not have the power to help things burn.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What happens to the burning when you put a lit incense stick into a jar of carbon dioxide?', options: ['The flame goes out', 'It keeps burning as it is', 'It burns brightly'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What happens to the burning when you put a lit incense stick into a jar of nitrogen?', options: ['The flame goes out', 'It keeps burning as it is', 'It burns brightly'], answer: 0 },
      { type: 'multi', mode: 'normal', level: 'medium', q: 'In which jars does the flame of a lit incense stick go out? Choose all the correct answers.', options: ['A jar of nitrogen', 'A jar of carbon dioxide', 'A jar of oxygen'], answer: [0, 1] },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'A lit incense stick keeps burning as it is in a jar of carbon dioxide.', answer: 1 },
      { type: 'build', style: 'why', mode: 'normal', level: 'hard', q: 'The flame goes out in a jar of nitrogen.', parts: ['Because nitrogen', 'does not have the power', 'to help things burn'], extra: ['has the power', 'to make limewater'] }
    ] },
  { id: 'O6', lesson: 2, concept: 'How to collect the gas',
    explain: 'How to collect the gas: turn the water-filled jar upside down in the water, fill 70% of it with the gas, and put the lid on.',
    variants: [
      { type: 'order', mode: 'normal', level: 'medium', q: 'Put the steps of collecting a gas in a jar in order.', items: ['Fill 70% of the jar with the gas', 'Turn the water-filled jar upside down in the water', 'Put the lid on'], answer: [1, 0, 2] },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'When you collect the gas, how much of the jar do you fill with it?', options: ['70%', '7%', '100%'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'To collect the gas, turn the water-filled jar ___ in the water.', options: ['upside down', 'on its side'], answer: 0 },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'To collect a gas, we start with a jar that is filled with water.', answer: 0 }
    ] },
  { id: 'O7', lesson: 2, boss: true, concept: 'Three jars, three gases',
    explain: 'Air is a mixture of nitrogen (about 78%), oxygen (about 21%) and carbon dioxide (about 0.04%), etc. In a jar of oxygen the burning is bright; in a jar of nitrogen or carbon dioxide the flame goes out. Oxygen has the power to help things burn, but nitrogen and carbon dioxide do not.',
    variants: [
      { type: 'table', mode: 'boss', level: 'hard', q: 'A lit incense stick is put into three jars. What happens in each jar?', cols: ['Burns brightly', 'The flame goes out'], items: ['A jar of oxygen', 'A jar of nitrogen', 'A jar of carbon dioxide'], answer: [0, 1, 1] },
      { type: 'mc', style: 'story', mode: 'boss', level: 'hard', q: 'Three closed jars have lost their labels. One has nitrogen, one has oxygen and one has carbon dioxide. Salma’s teacher puts a lit incense stick into each jar. In one jar it burns brightly. Which gas is in that jar?', options: ['Oxygen', 'Nitrogen', 'Carbon dioxide'], answer: 0 },
      { type: 'match', mode: 'boss', level: 'hard', q: 'Match each gas to what the book says about it.', left: ['Nitrogen', 'Oxygen', 'Carbon dioxide'], right: ['About 78% of the air; does not help things burn', 'About 21% of the air; helps things burn', 'About 0.04% of the air; does not help things burn'], answer: [0, 1, 2] },
      { type: 'multi', mode: 'boss', level: 'hard', q: 'Choose all the correct statements about the air.', options: ['Air is a mixture of gases', 'Oxygen has the power to help things burn', 'Nitrogen makes up about 21% of the air', 'Carbon dioxide has the power to help things burn'], answer: [0, 1] },
      { type: 'fix', mode: 'boss', level: 'hard', q: 'Carbon dioxide has the power to help things burn.', wrong: 'Carbon dioxide', answer: 'Oxygen' }
    ] },

  /* ---------- 1-3 Air After Burning ---------- */
  { id: 'B1', lesson: 3, concept: 'What burning does to the air',
    explain: 'When things burn, a part of the oxygen in the air is used, and carbon dioxide is produced.',
    variants: [
      { type: 'fill', mode: 'normal', level: 'medium', q: 'When things burn, a part of the oxygen in the air is used, and ___ is produced.', options: ['carbon dioxide', 'nitrogen', 'limewater'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What happens to the air when things burn?', options: ['A part of the oxygen is used, and carbon dioxide is produced', 'A part of the carbon dioxide is used, and oxygen is produced', 'Nothing in the air changes'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'When things burn, a part of the oxygen in the air is used.', answer: 0 },
      { type: 'build', style: 'whatif', mode: 'normal', level: 'hard', q: 'What happens to the air when things burn?', parts: ['A part of the oxygen', 'is used,', 'and carbon dioxide is produced'], extra: ['is frozen,', 'and nitrogen is used'] },
      { type: 'table', mode: 'normal', level: 'medium', q: 'What happens to each gas when things burn?', cols: ['It is used', 'It is produced'], items: ['Oxygen', 'Carbon dioxide'], answer: [0, 1] }
    ] },
  { id: 'B2', lesson: 3, concept: 'Oxygen decreases',
    explain: 'Oxygen: the amount decreases because it is used when things burn.',
    variants: [
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'How does the amount of oxygen change after burning?', options: ['It decreases', 'It increases', 'It does not change'], answer: 0 },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'After things burn, what gas has decreased?', options: ['Oxygen', 'Carbon dioxide'], answer: 0 },
      { type: 'build', style: 'why', mode: 'normal', level: 'hard', q: 'The amount of oxygen decreases after burning.', parts: ['Because oxygen', 'is used', 'when things burn'], extra: ['is produced', 'when things cool down'] },
      { type: 'fix', mode: 'normal', level: 'medium', q: 'The amount of oxygen increases because it is used when things burn.', wrong: 'increases', answer: 'decreases' },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'The amount of oxygen increases after burning.', answer: 1 }
    ] },
  { id: 'B3', lesson: 3, concept: 'Carbon dioxide increases',
    explain: 'Carbon dioxide: the amount increases because it is newly produced when things burn.',
    variants: [
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'How does the amount of carbon dioxide change after burning?', options: ['It increases', 'It decreases', 'It does not change'], answer: 0 },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'After things burn, what gas has increased?', options: ['Carbon dioxide', 'Oxygen'], answer: 0 },
      { type: 'build', style: 'why', mode: 'normal', level: 'hard', q: 'The amount of carbon dioxide increases after burning.', parts: ['Because carbon dioxide', 'is newly produced', 'when things burn'], extra: ['is all used up', 'when things freeze'] },
      { type: 'term', mode: 'normal', level: 'medium', q: 'The gas that is newly produced when things burn.', answer: 'Carbon dioxide' },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'Carbon dioxide is newly produced when things burn.', answer: 0 }
    ] },
  { id: 'B4', lesson: 3, concept: 'Limewater',
    explain: 'We use limewater to check if there is carbon dioxide. Colorless and clear limewater has a property of turning milky white when it reacts with carbon dioxide.',
    variants: [
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'What is the colorless and clear liquid used to check if there is carbon dioxide?', options: ['Limewater', 'Salt water', 'Oil'], answer: 0 },
      { type: 'term', mode: 'normal', level: 'medium', q: 'The colorless and clear liquid used to check if there is carbon dioxide.', answer: 'Limewater' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What happens when you put limewater in a jar with increased carbon dioxide and shake it?', options: ['It turns milky white', 'It turns blue', 'It turns yellow'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Limewater turns milky ___ when it reacts with carbon dioxide.', options: ['white', 'blue', 'yellow'], answer: 0 },
      { type: 'tap', diagram: 'limeJars', mode: 'normal', level: 'medium', q: 'Limewater was put into two jars, and the jars were shaken. Tap the jar that has more carbon dioxide.', answer: 'milky' },
      { type: 'build', style: 'function', mode: 'normal', level: 'hard', q: 'What do we use limewater for?', parts: ['We use limewater', 'to check', 'if there is carbon dioxide'], extra: ['to light', 'if there is a candle'] },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'Before it reacts with carbon dioxide, limewater is colorless and clear.', answer: 0 }
    ] },
  { id: 'B5', lesson: 3, concept: 'Checking the air with limewater',
    explain: 'Put limewater into each of the 2 jars. Put a lit candle into one jar, put the lid on, and wait until the flame goes out. After taking out the candle, shake the 2 jars and compare the color of the limewater. Wear safety goggles so the limewater doesn’t get in your eyes. Burning produces carbon dioxide, so the limewater turns milky white in the jar where the candle burned.',
    variants: [
      { type: 'order', mode: 'normal', level: 'medium', q: 'Put the steps of the limewater experiment in order.', items: ['After taking out the candle, shake the 2 jars', 'Put limewater into each of the 2 jars', 'Put a lit candle into one jar, put the lid on, and wait until the flame goes out'], answer: [1, 2, 0] },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Why do you wear safety goggles in the limewater experiment?', options: ['So the limewater doesn’t get in your eyes', 'To see the flame better', 'To keep the jar warm'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'hard', q: 'Limewater is in 2 jars, and a candle burned in only one of them. After you shake the 2 jars, in which jar does the limewater turn milky white?', options: ['The jar in which the candle burned', 'The jar with no candle', 'Neither of the two jars'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'In the limewater experiment, we wear safety goggles.', answer: 0 },
      { type: 'build', style: 'why', mode: 'normal', level: 'hard', q: 'The limewater turns milky white in the jar where the candle burned.', parts: ['Because burning', 'produced carbon dioxide,', 'and limewater turns milky white with it'], extra: ['produced oxygen,', 'and limewater turns blue with it'] }
    ] },
  { id: 'B6', lesson: 3, boss: true, concept: 'The air before and after burning',
    explain: 'After burning, the amount of oxygen decreases because it is used, and the amount of carbon dioxide increases because it is newly produced. Limewater shows the carbon dioxide: it turns milky white.',
    variants: [
      { type: 'table', mode: 'boss', level: 'hard', q: 'Compare between oxygen and carbon dioxide.', cols: ['Oxygen', 'Carbon dioxide'], items: ['Is used when things burn', 'Its amount decreases after burning', 'Is newly produced when things burn', 'Its amount increases after burning', 'Turns limewater milky white', 'Has the power to help things burn'], answer: [0, 0, 1, 1, 1, 0] },
      { type: 'mc', style: 'story', mode: 'boss', level: 'hard', q: 'A candle burned in a closed jar until the flame went out. Omar takes out the candle, adds limewater and shakes the jar. The limewater turns milky white. What does this show?', options: ['The amount of carbon dioxide in the jar increased', 'The amount of oxygen in the jar increased', 'The air in the jar did not change'], answer: 0 },
      { type: 'match', mode: 'boss', level: 'hard', q: 'Match each one to what happens to it.', left: ['Oxygen', 'Carbon dioxide', 'Limewater'], right: ['Its amount decreases after burning', 'Its amount increases after burning', 'Turns milky white when it reacts with carbon dioxide'], answer: [0, 1, 2] },
      { type: 'multi', mode: 'boss', level: 'hard', q: 'Choose all the correct statements about the air after things burn.', options: ['The amount of oxygen decreases', 'The amount of carbon dioxide increases', 'The amount of oxygen increases', 'The amount of carbon dioxide decreases'], answer: [0, 1] },
      { type: 'build', style: 'whatif', mode: 'boss', level: 'hard', q: 'What happens to limewater when it reacts with carbon dioxide?', parts: ['The colorless and clear limewater', 'turns', 'milky white'] , extra: ['freezes into', 'bright blue'] }
    ] },

  /* ---------- Bonus: "Let's Expand" (page 15) and the Column "Combustion and Future Energy" (pages 16-17): enrichment, not in the core 18 ---------- */
  { id: 'X1', lesson: 3, bonus: true, concept: 'The gas detector tube',
    explain: 'Inside the glass tube of a gas detector tube there is a chemical that changes color when it reacts to a specific gas. By reading the scale where the color has changed, you can measure the amount of the gas. The type of tube to use is different for oxygen and carbon dioxide, and the glass tube is single-use only.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What is inside the glass tube of a gas detector tube?', options: ['A chemical that changes color when it reacts to a specific gas', 'Limewater', 'A small candle'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'How do you measure the amount of a gas with a gas detector tube?', options: ['By reading the scale where the color has changed', 'By counting the bubbles in the tube', 'By shaking the tube with limewater'], answer: 0 },
      { type: 'tf', mode: 'normal', level: 'easy', q: 'The same type of gas detector tube is used for oxygen and for carbon dioxide.', answer: 1, explain: 'The type of tube to use is different for oxygen and carbon dioxide.' }
    ] },
  { id: 'X2', lesson: 3, bonus: true, concept: 'The gas monitor',
    explain: 'A gas monitor uses a sensor to show the percentage (%) of the gas on the screen in digital numbers. There are types that can measure both oxygen and carbon dioxide at the same time.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'How does a gas monitor show the amount of a gas?', options: ['It uses a sensor and shows the percentage (%) on the screen in digital numbers', 'It changes the color of limewater', 'It makes the flame of a candle bigger'], answer: 0 },
      { type: 'tf', mode: 'normal', level: 'easy', q: 'There are gas monitors that can measure both oxygen and carbon dioxide at the same time.', answer: 0 }
    ] },
  { id: 'X3', lesson: 2, bonus: true, concept: 'Fire and the ancient craftspeople',
    explain: 'When there is plenty of oxygen, things burn intensely. Ancient craftspeople used a bellows (a tool for blowing air) to pump air into the fire to supply more oxygen, melting gold at high temperatures to make beautiful jewelry.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Why did ancient craftspeople pump air into the fire with a bellows?', options: ['To supply more oxygen, so the fire burns intensely', 'To cool the gold', 'To put out the fire'], answer: 0 },
      { type: 'tf', mode: 'normal', level: 'easy', q: 'When there is plenty of oxygen, things burn intensely.', answer: 0 }
    ] },
  { id: 'X4', lesson: 3, bonus: true, concept: 'Energy without burning',
    explain: 'Burning things produces carbon dioxide, and today too much of this gas is one of the causes of “global warming”. Instead of burning oil and coal, Egypt uses “renewable energy” from the sun and wind. The Benban Solar Park in Aswan generates electricity from sunlight, without burning.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Too much of which gas is one of the causes of “global warming”?', options: ['Carbon dioxide', 'Oxygen', 'Nitrogen'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'How does the Benban Solar Park in Aswan generate electricity?', options: ['From sunlight, without burning', 'By burning coal', 'By burning oil'], answer: 0 },
      { type: 'multi', mode: 'normal', level: 'medium', q: 'Which of these give “renewable energy”? Choose all the correct answers.', options: ['The sun', 'The wind', 'Oil', 'Coal'], answer: [0, 1] }
    ] }
];
