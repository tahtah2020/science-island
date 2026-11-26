/* Grade 4 Science (Languages) · Chapter 5 Properties of Sound
   17 core ideas from the school book 2026/2027, all three lessons (5-1 to 5-3): Point!, Activity, Try, Exercise and "Let's Make It" (pages 68-77).
   Source: the owner's PDF on Google Drive (Motafawek/g4/science/unit 5-en.pdf), 1 Nov 2026. No pictures from the owner: every picture is drawn in code.
   Ideas: Q = how sound is produced (5-1), U = volume of sound and vibration (5-2), V = how sound travels and the string telephone (5-3).
   The book's words: vibration, vibrate, volume, big sound, small sound, amount of vibration, triangle, monochord, rubber band, sticky note,
   string telephone, paper cup, pulled tight, loose, pinch, wire, yarn, awl, kite string.
   Review notes: the exercise "a wire instead of a string: you can hear the sound if the vibration travels" (V4) is the book's own true/false item and
   follows from "the vibration of sound travels through things like string".
   Tap pictures (drawn in g4_art.js): vibrateThings -> guitar | drum | whistle ; stickyDrum -> soft | loud ; stringPhone -> cupA | string | cupB ;
                                      phoneStates -> loose | tight | pinched
*/
(function () {
window.CHAPTER = { id: 'g4c5', title: 'Properties of Sound', grade: 'Grade 4', track: 'Languages' };

window.IDEAS = [
  /* ---------- 5-1 How Sound is Produced ---------- */
  { id: 'Q1', lesson: 1, concept: 'Sound is vibration',
    explain: 'When a thing makes a sound, it is shaking. This shaking is called vibration. Even if the shaking is too small to see, things always vibrate when they make a sound.',
    variants: [
      { type: 'term', mode: 'normal', level: 'medium', q: 'The shaking of a thing when it makes a sound.', answer: 'Vibration', choices: ['Reflection', 'Volume', 'Shadow'] },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'When a thing makes a sound, it ___ finely.', options: ['vibrates', 'melts', 'stops'], answer: 0 },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'Things can make a sound even if they do not vibrate.', answer: 1, explain: 'Things always vibrate when they make a sound, even if the shaking is too small to see.' },
      { type: 'tap', diagram: 'vibrateThings', mode: 'normal', level: 'medium', q: 'Tap the thing that is vibrating now.', answer: 'guitar' }
    ] },
  { id: 'Q2', lesson: 1, concept: 'No vibration, no sound',
    explain: 'When the vibration stops, the sound stops.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'After hitting a triangle, you pressed it hard with your fingers to stop the vibration. What happens to the sound?', options: ['The sound also stops right away', 'The sound continues for a while', 'The sound becomes even bigger'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'When the vibration stops, the sound ___.', options: ['stops', 'gets bigger', 'travels further'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'When things stop vibrating, you cannot hear the sound.', answer: 0 }
    ] },
  { id: 'Q3', lesson: 1, concept: 'How sound reaches our ears',
    explain: 'When a thing shakes, the air around it also shakes. When this shaking reaches our ears, we hear the sound.',
    variants: [
      { type: 'build', style: 'sentence', mode: 'normal', level: 'hard', q: 'Make the correct sentence about how we hear.', parts: ['When a thing shakes,', 'the air around it also shakes,', 'and we hear when it reaches our ears'], extra: ['the air around it stops,', 'and we hear with our eyes'] },
      { type: 'order', mode: 'normal', level: 'medium', q: 'Put what happens in order.', items: ['The air around it shakes', 'A thing vibrates', 'The shaking reaches our ears and we hear'], answer: [1, 0, 2] },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What carries the shaking of a guitar string to our ears?', options: ['The air around it', 'Light', 'Our eyes'], answer: 0 }
    ] },
  { id: 'Q4', lesson: 1, concept: 'Checking sound and shaking',
    explain: 'Activity: 1) Put your hand on your throat and feel it shake while you are talking; check what happens when you stop talking. 2) Hit a triangle, then touch it with your fingers. 3) Put a ruler on the edge of a desk, flick the part that sticks out and watch how it moves while it makes a sound.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'You put your hand on your throat while talking. What do you feel?', options: ['Your throat shakes', 'Your throat is still', 'Your throat gets cold'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'How do we make a ruler make a sound?', options: ['Put it on the edge of a desk and flick the part that sticks out', 'Lay it flat on the floor', 'Look at it through a magnifying glass'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'When you stop talking, the shaking of your throat stops.', answer: 0 }
    ] },
  { id: 'Q5', lesson: 1, boss: true, concept: 'Who is vibrating?',
    explain: 'Things that make a sound vibrate: guitar strings making a sound, your throat when you are talking. A drum skin pressed with your hand and a silent whistle are not making a sound.',
    variants: [
      { type: 'multi', mode: 'boss', level: 'hard', q: 'Which of the following are shaking when they are making a sound? Choose all the correct answers.', options: ['Guitar strings when making a sound', 'Your throat when you are talking', 'The drum skin after you hit it and pressed it with your hand', 'A whistle on the desk that is not making a sound'], answer: [0, 1] },
      { type: 'multi', mode: 'boss', level: 'hard', q: 'Choose all the correct answers about sound and vibration.', options: ['When things stop vibrating, you cannot hear the sound', 'When things vibrate, the air around them shakes, and we hear when the vibration reaches our ears', 'Things can make a sound even if they do not vibrate'], answer: [0, 1] },
      { type: 'mc', style: 'story', mode: 'boss', level: 'hard', q: 'Laila hits a triangle and it rings. Then she holds it tightly in her hand. What happens, and why?', options: ['The sound stops, because the vibration stops', 'The sound gets louder, because her hand is warm', 'Nothing changes, because sound does not need vibration'], answer: 0 }
    ] },

  /* ---------- 5-2 Volume of Sound and Vibration ---------- */
  { id: 'U1', lesson: 2, concept: 'Big sound, big vibration',
    explain: 'When the amount of vibration changes, the volume of the sound changes. Big sound: things vibrate a lot. Small sound: things vibrate a little.',
    variants: [
      { type: 'table', mode: 'normal', level: 'medium', q: 'Big sound or small sound?', cols: ['Big sound', 'Small sound'], items: ['Things vibrate a lot', 'Things vibrate a little'], answer: [0, 1] },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'When a big sound is made, the vibration of a thing becomes ___.', options: ['big', 'small', 'zero'], answer: 0 },
      { type: 'tap', diagram: 'stickyDrum', mode: 'normal', level: 'medium', q: 'Tap the drum that is making the bigger sound.', answer: 'loud' },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'When a small sound is made, things vibrate a lot.', answer: 1, explain: 'Small sound: things vibrate a little.' }
    ] },
  { id: 'U2', lesson: 2, concept: 'Volume is decided by the amount of vibration',
    explain: 'The bigger the “amount” of the vibration is, the bigger the sound becomes. The volume of sound is decided by the “amount” of the vibration.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What decides the volume of a sound?', options: ['The amount of the vibration', 'The color of the thing', 'The time of the day'], answer: 0 },
      { type: 'build', style: 'sentence', mode: 'normal', level: 'hard', q: 'Make the correct sentence.', parts: ['The bigger the amount of the vibration,', 'the bigger', 'the sound becomes'], extra: ['the smaller', 'the darker it becomes'] },
      { type: 'term', mode: 'normal', level: 'medium', q: 'How big or small a sound is. It is decided by the amount of the vibration.', answer: 'Volume', choices: ['Vibration', 'Reflection', 'Light'] }
    ] },
  { id: 'U3', lesson: 2, concept: 'Comparing the amount of vibration',
    explain: 'Activity: flick a rubber band weakly and strongly and compare how it moves. Flick the string of a monochord and watch it for big and small sounds. Put a sticky note on a triangle or a drum and see how it looks when you hit weakly and strongly. When you hit or flick strongly, the sound becomes bigger.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'You flicked a rubber band strongly and made a big sound. How is the size of its vibration?', options: ['Wider than when flicked weakly', 'Narrower than when flicked weakly', 'It does not change at all'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'A sticky note is on a drum. When you hit the drum strongly, how does the sticky note look?', options: ['It shakes a lot', 'It does not move', 'It shakes less than when you hit weakly'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'When you hit or flick a thing strongly, the sound becomes bigger.', answer: 0 },
      { type: 'tap', diagram: 'stickyDrum', mode: 'normal', level: 'medium', q: 'Tap the drum that was hit weakly.', answer: 'soft' }
    ] },
  { id: 'U4', lesson: 2, concept: 'Take care of your ears',
    explain: 'Caution: do not make loud sounds near your ears, because it can hurt them.',
    variants: [
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'It is okay to make loud sounds near your ears.', answer: 1, explain: 'Do not make loud sounds near your ears, because it can hurt them.' },
      { type: 'build', style: 'why', mode: 'normal', level: 'hard', q: 'Do not make loud sounds near your ears.', parts: ['Because', 'it can hurt', 'your ears'], extra: ['it makes', 'your eyes'] }
    ] },
  { id: 'U5', lesson: 2, boss: true, concept: 'Changing the volume',
    explain: 'When you change the volume of the sound, the size of the thing’s vibration changes. To make a big sound, make the thing vibrate a lot; as a sound becomes softer, the vibration becomes smaller.',
    variants: [
      { type: 'mc', style: 'story', mode: 'boss', level: 'hard', q: 'You hit a drum and changed the sound from loud to soft slowly. What happened to the drum skin?', options: ['Its vibration gradually became smaller', 'Its vibration did not change, only the sound became softer', 'It stopped vibrating, but you could still hear it'], answer: 0 },
      { type: 'fill', mode: 'boss', level: 'hard', q: 'To make a big sound, you should make the thing vibrate ___.', options: ['a lot', 'a little', 'not at all'], answer: 0 },
      { type: 'table', mode: 'boss', level: 'hard', q: 'Flicked weakly or flicked strongly?', cols: ['Weakly', 'Strongly'], items: ['The rubber band moves a little', 'A small sound', 'The rubber band moves a lot', 'A big sound'], answer: [0, 0, 1, 1] }
    ] },

  /* ---------- 5-3 How Sound Travels ---------- */
  { id: 'V1', lesson: 3, concept: 'Sound travels through things',
    explain: 'The vibration of sound travels not only through the air but also through “things” like string. Sound travels when things vibrate.',
    variants: [
      { type: 'tf', mode: 'normal', level: 'medium', q: 'The vibration of sound travels not only through the air but also through things like string.', answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which can carry the vibration of sound?', options: ['The air and things like string', 'Only the air', 'Only light'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Sound travels when things ___.', options: ['vibrate', 'stop', 'shine'], answer: 0 }
    ] },
  { id: 'V2', lesson: 3, concept: 'The path in a string telephone',
    explain: 'In a string telephone, the vibration of your voice travels from “paper cup → string → paper cup” and reaches the ears. When you talk into the paper cup, the bottom of the cup vibrates first, and the vibration travels through the string to your friend.',
    variants: [
      { type: 'order', mode: 'normal', level: 'medium', q: 'Put the path of your voice in a string telephone in order.', items: ['The string', 'Your friend’s paper cup', 'Your paper cup', 'Your friend’s ear'], answer: [2, 0, 1, 3] },
      { type: 'tap', diagram: 'stringPhone', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap the part that carries the vibration between the two cups.', answer: 'string' },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'When you talk into the paper cup, the bottom of the cup first ___, and the vibration travels through the string to your friend.', options: ['vibrates', 'shines', 'melts'], answer: 0 }
    ] },
  { id: 'V3', lesson: 3, concept: 'Pull the string tight',
    explain: 'When the string is pulled tight, the vibration travels well, so the sound travels easily and you can hear the voice clearly.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which is important to hear your friend’s voice on a string telephone?', options: ['Pull the string tight to let the vibration travel', 'Leave the string loose', 'Have someone pinch the string in the middle'], answer: 0 },
      { type: 'tap', diagram: 'phoneStates', mode: 'normal', level: 'medium', q: 'Tap the string telephone where you hear the voice clearly.', answer: 'tight' },
      { type: 'build', style: 'why', mode: 'normal', level: 'hard', q: 'We pull the string of the string telephone tight.', parts: ['Because the vibration', 'travels well,', 'so the sound travels easily'], extra: ['stops,', 'so the cup gets lighter'] }
    ] },
  { id: 'V4', lesson: 3, concept: 'Pinching the string',
    explain: 'If you pinch the string in the middle, the vibration stops there, so the sound does not travel. Touch the string lightly while your friend talks: it is shaking. With a wire instead of a string, you can hear the sound if the vibration travels.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'You pinch the string tightly in the middle. What happens to your friend’s voice?', options: ['You cannot hear it, because the vibration stops there', 'It becomes louder', 'Nothing changes'], answer: 0 },
      { type: 'tap', diagram: 'phoneStates', mode: 'normal', level: 'medium', q: 'Tap the string telephone where the vibration stops in the middle.', answer: 'pinched' },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'Even if you use a wire instead of a string, you can hear the sound if the vibration travels.', answer: 0 },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'A loud voice travels even when the string of the string telephone is not vibrating.', answer: 1, explain: 'Sound travels when things vibrate. If the string stops vibrating, the sound does not travel.' }
    ] },
  { id: 'V5', lesson: 3, concept: 'Like a baton in a relay race',
    explain: 'Sound moves by passing vibrations like a baton in a relay race!',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Sound moves by passing vibrations from one thing to the next. What is it like?', options: ['A baton in a relay race', 'A ball stuck in a box', 'A shadow on the ground'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'Sound moves by passing vibrations, like a baton in a relay race.', answer: 0 }
    ] },
  { id: 'V6', lesson: 3, concept: 'Let’s make a string telephone',
    explain: 'Materials: 2 paper cups, kite string, paper clips or toothpicks. Tools: scissors, cellophane tape, pens, an awl (a tool to make holes). Make a small hole in the center of the bottom of each cup with an awl, pass the kite string through from the outside to the inside, tie a paper clip or half a toothpick to the end and tape it inside. Then pull the string tight, talk into one cup and put the other cup to your ear.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which tool do we use to make a hole in the bottom of the paper cup?', options: ['An awl', 'A thermometer', 'A magnifying glass'], answer: 0 },
      { type: 'order', mode: 'normal', level: 'medium', q: 'Put the steps of making a string telephone in order.', items: ['Pass the kite string through the hole', 'Make a small hole in the bottom of each cup', 'Tie a paper clip to the end and tape it inside', 'Pull the string tight and talk'], answer: [1, 0, 2, 3] },
      { type: 'multi', mode: 'normal', level: 'medium', q: 'Choose all the materials of a string telephone.', options: ['2 paper cups', 'Kite string', 'Paper clips or toothpicks', 'A mirror'], answer: [0, 1, 2] }
    ] },
  { id: 'V7', lesson: 3, boss: true, concept: 'The string telephone experiment',
    explain: 'When the string vibrates finely, you hear the voice. When you press the string with your fingers to stop the shaking, you cannot hear the sound. A tight string carries the vibration well.',
    variants: [
      { type: 'multi', mode: 'boss', level: 'hard', q: 'Which did you learn from the string telephone experiment? Choose all the correct answers.', options: ['When the string vibrates finely, you hear the voice', 'When you press the string with your fingers to stop the shaking, you cannot hear the sound', 'A string telephone sounds just as loud through the air even without a string'], answer: [0, 1] },
      { type: 'table', mode: 'boss', level: 'hard', q: 'Can you hear your friend’s voice clearly?', cols: ['Yes, clearly', 'No'], items: ['The string is pulled tight', 'Someone pinches the string in the middle', 'The string vibrates finely', 'The string is not vibrating'], answer: [0, 1, 0, 1] },
      { type: 'mc', style: 'story', mode: 'boss', level: 'hard', q: 'Ahmed cannot hear his sister on their string telephone. The string is hanging down loosely. What should they do?', options: ['Pull the string tight so the vibration travels well', 'Talk with their mouths far from the cups', 'Hold the string tightly in the middle'], answer: 0 }
    ] },
  /* ---------- November 2026 review models («سندباد» مراجعة شهر نوفمبر, owner 26 Nov 2026): items the bank lacked; guide: true ---------- */
  { id: 'Q30', lesson: 1, bonus: true, guide: true, concept: "Sound comes from vibration",
    explain: "Musical instruments make sound when we tap or hit them because their parts (like strings or the drum skin) vibrate. When a vibrating object stops vibrating, for example when we hold a string with a finger or press on the drum skin, the sound stops at once. When an object vibrates, the air around it vibrates too and carries the sound.",
    variants: [
      { type: "build", style: "why", mode: "normal", level: "easy", q: "We hear musical instruments when we tap or hit them.", parts: ["Because", "the objects vibrate,", "like the strings"], extra: ["Because they", "stay still"], hint: "What happens to a string when you pluck it?" },
      { type: "build", style: "whatif", mode: "normal", level: "medium", q: "What happens to the air around an object when it starts vibrating and making a sound?", parts: ["The air around the object vibrates", "and the sound vibrations", "travel through it"], extra: ["stays still", "gets hotter"], hint: "Sound reaches us through the air." },
      { type: "build", style: "whatif", mode: "normal", level: "hard", q: "You hit a drum hard and then pressed directly on its skin with your hand. What happens?", parts: ["The drum skin stops vibrating,", "so the sound", "stops at once"], extra: ["gets louder", "for a long time"], hint: "No vibration, no sound." },
      { type: "mc", mode: "normal", level: "easy", q: "When a drum skin moves up and down fast after it is hit, this movement is called:", options: ["vibration", "rotation", "reflection", "refraction"], answer: 0, hint: "It is how every sound starts." },
      { type: "mc", mode: "normal", level: "medium", q: "Which action stops the sound of a vibrating string at once?", options: ["Holding the string with a finger to stop it moving", "Pulling the string tighter", "Plucking the string harder", "Plucking the string more gently"], answer: 0, hint: "Which one stops the vibration?" }
    ] },
  { id: 'U30', lesson: 2, bonus: true, guide: true, concept: "Volume and the amount of vibration",
    explain: "A loud sound comes from a big vibration and a soft sound from a small one. Hitting a drum or a triangle hard makes the vibration bigger and the sound louder; flicking a rubber band gently makes a small vibration. Loud sounds and long use of earphones can harm hearing, so we keep away from loud sounds.",
    variants: [
      { type: "build", style: "whatif", mode: "normal", level: "medium", q: "What happens to the amount of vibration and the volume when you hit a drum or a triangle hard?", parts: ["The amount of vibration increases", "and the volume", "increases"], extra: ["decreases", "stops"], hint: "Hard hit = big vibration." },
      { type: "build", style: "whatif", mode: "normal", level: "medium", q: "What happens to the vibration of a rubber band when you flick it gently?", parts: ["The vibration", "is", "small"], extra: ["big", "very loud"], hint: "Gentle flick = small movement." },
      { type: "build", style: "why", mode: "normal", level: "easy", q: "Using earphones for a long time is harmful.", parts: ["Because it weakens", "the sense of hearing", "and harms the ears"], extra: ["Because it makes", "our eyes tired"], hint: "Which sense uses the ears?" },
      { type: "build", style: "why", mode: "normal", level: "easy", q: "We must keep away from loud sounds.", parts: ["To protect", "our hearing", "and our ears"], extra: ["To make", "sounds louder"], hint: "Loud sounds can hurt…" },
      { type: "mc", mode: "normal", level: "medium", q: "Compare a loud sound and a soft sound by the amount of vibration.", options: ["A loud sound comes from a strong vibration, a soft sound from a weak one", "A loud sound comes from a weak vibration, a soft sound from a strong one", "Both come from the same vibration"], answer: 0, hint: "Big shake, big sound." },
      { type: "tf", mode: "timed", seconds: 12, level: "easy", q: "The more objects vibrate, the louder the sounds they make.", answer: 0, hint: "Think of hitting a drum hard." }
    ] },
  { id: 'V30', lesson: 3, bonus: true, guide: true, concept: "The string telephone",
    explain: "In a string telephone the sound goes first to the bottom of the paper cup, which vibrates, then the vibration travels along the string to the other cup. The string must be tight and nobody should hold it: holding it in the middle stops the vibration and the sound is cut at once. A slack string does not carry the sound. Sound vibrations travel through air, solids (like the string) and liquids.",
    variants: [
      { type: "build", style: "why", mode: "normal", level: "medium", q: "The sound in a string telephone is cut at once if you hold the string tightly in the middle.", parts: ["Because holding the string", "stops its vibration,", "so the sound is cut"], extra: ["makes the string", "vibrate more"], hint: "What carries the sound along the string?" },
      { type: "build", style: "whatif", mode: "normal", level: "medium", q: "What happens to the volume in a string telephone when you pull the string tight between the cups?", parts: ["The sound becomes louder", "and", "clearer"], extra: ["softer", "stops"], hint: "A tight string carries vibrations well." },
      { type: "build", style: "whatif", mode: "normal", level: "hard", q: "What happens if you leave the string completely slack while using a string telephone with your friend?", parts: ["The sound does not travel", "and you cannot hear", "your friend"], extra: ["louder", "very clearly"], hint: "Can a slack string vibrate well?" },
      { type: "fill", mode: "normal", level: "easy", q: "Sound travels easily in a string telephone when the string is ___.", options: ["tight", "slack", "cut"], answer: 0, hint: "Remember the clear string telephone." },
      { type: "mc", mode: "normal", level: "medium", q: "In a string telephone, the sound travels first to:", options: ["the bottom of the paper cup", "the string", "the other paper cup", "the air far away"], answer: 0, hint: "You speak into the cup." },
      { type: "multi", mode: "normal", level: "medium", q: "From making a string telephone, choose two things that make the sound reaching your ear clearer.", options: ["The string is well tightened between the cups", "Nobody holds the string while the vibrations travel", "The string is left slack", "You speak far away from the cup"], answer: [0, 1], hint: "Which two help the vibration travel?" },
      { type: "tf", mode: "timed", seconds: 12, level: "easy", q: "Sound vibrations travel through the air only.", answer: 1, hint: "Did the string carry the sound?" }
    ] },
  { id: 'V31', lesson: 3, bonus: true, guide: true, concept: "How sound reaches the ear",
    explain: "When a source of sound (like a drum) vibrates, it makes the air around it vibrate; the vibrations travel through the air until they reach the ear, and we hear the sound. The sound travels from the source to the ear.",
    variants: [
      { type: "build", style: "say", mode: "normal", level: "medium", q: "How does sound travel from its source to the ear? Explain the role of the air.", parts: ["The source vibrates and makes the air around it vibrate,", "the vibrations travel through the air", "until they reach the ear and we hear the sound"], extra: ["the air stays still", "and the ear makes the sound"], hint: "Start with the source." },
      { type: "mc", mode: "normal", level: "easy", q: "In which direction does the sound of a drum travel?", options: ["From the drum (the source) to the ear", "From the ear to the drum", "It does not move"], answer: 0, hint: "Where is the vibration made?" },
      { type: "tf", mode: "timed", seconds: 12, level: "easy", q: "Sound travels through the air.", answer: 0, hint: "How does your friend’s voice reach you?" }
    ] }
];
})();
