/* Grade 6 Science (Languages, English book only) · Chapter 4 Blood Circulation and Excretion
   Core ideas from the school book 2026/2027, all three lessons (4-1 to 4-3): Point!, Warm Up, Try, Exercise (pages 34-43),
   plus bonus ideas from the Enrichment Corner (pages 44-45: the mummies, the canopic jars, the blood as the link between the organs).
   Idea letters (unused in g6): H = Heart and Blood (4-1), K = How the Kidneys Work (4-2), M = Various Organs (4-3), Z = enrichment (bonus).
   The book's words: heart, blood, heartbeat, pulse, blood vessels, oxygen, carbon dioxide, waste products, lungs, kidneys, urine, bladder,
   backbone, chest, abdomen, ribs, stomach, small intestine, large intestine, esophagus (food pipe).
   Review notes (the book prints no answers; these come from the printed text):
   - The Try / Exercise questions of pages 42-43 sit after lesson 4-3 but their first parts are about the kidneys, so they are filed under lesson 2 (K).
   - "What does blood carry to the whole body?" = oxygen and nutrients (page 35). Carbon dioxide is what the blood COLLECTS, so it is never a right answer there.
   - Red = blood rich in oxygen, blue = blood rich in carbon dioxide (key of the drawing on page 35).
   - The pulse can also be felt at the neck or the ankle (Genius' speech bubble, page 36).
   - Page 41 gives the places of the organs; the small intestine is below the stomach and the large intestine is around it. Not asked: the liver (not printed on pages 40-41), blood vessel names, the parts of the heart.
   - Not asked (open activities): "Let's discuss the reason together" (page 36), the Warm Up on page 41 (looking at the illustration).
   Tap pictures (drawn in g6_body.js): bloodLoop -> heart | lungs | whole ; urinary -> kidneys | urtube | bladder ; organsMap -> lungs | heart | stomach | small | large
   Pictures with a picture above a normal question: fig: 'bloodLoop' + pic: { dot: [segment, 0..1] } (a white dot on one vessel: 0 lungs → heart, 1 heart → whole body, 2 whole body → heart, 3 heart → lungs)
*/
(function () {
window.CHAPTER = { id: 'g6c4', title: 'Blood Circulation and Excretion', grade: 'Grade 6', track: 'Languages' };

const NORM = { mode: 'normal', level: 'medium' }, QUICK = { mode: 'timed', seconds: 15, level: 'easy' }, SLOW = { mode: 'timed', seconds: 20, level: 'easy' }, BOSS = { mode: 'boss', level: 'hard' };
const mc = (q, options, o = {}) => ({ type: 'mc', ...NORM, q, options, answer: 0, ...o });
const tf = (q, truth, o = {}) => ({ type: 'tf', ...NORM, q, answer: truth ? 0 : 1, ...o });
const fill = (q, options, o = {}) => ({ type: 'fill', ...NORM, q, options, answer: 0, ...o });
const term = (q, answer, o = {}) => ({ type: 'term', ...NORM, q, answer, ...o });
const fix = (q, wrong, answer, o = {}) => ({ type: 'fix', ...NORM, q, wrong, answer, ...o });
const multi = (q, options, answer, o = {}) => ({ type: 'multi', ...NORM, q, options, answer, ...o });
const match = (q, left, right, o = {}) => ({ type: 'match', ...NORM, q, left, right, answer: left.map((_, i) => i), ...o });
const order = (q, items, answer, o = {}) => ({ type: 'order', ...NORM, q, items, answer, ...o });
const build = (style, q, parts, extra, o = {}) => ({ type: 'build', style, ...NORM, level: 'hard', q, parts, extra, ...o });
const tap = (diagram, q, answer, o = {}) => ({ type: 'tap', diagram, ...NORM, q, answer, ...o });
const dot = (seg, k) => ({ fig: 'bloodLoop', pic: { dot: [seg, k] } });

window.IDEAS = [
  /* ---------- 4-1 Heart and Blood ---------- */
  { id: 'H1', lesson: 1, concept: 'The heart is a pump',
    explain: 'The heart works like a pump. It is constantly beating to pump out blood to the whole body.',
    variants: [
      mc('Which organ works like a pump to send blood to the whole body?', ['The heart', 'The stomach', 'The lungs'], QUICK),
      term('The organ that works like a pump to send blood to the whole body.', 'Heart'),
      mc('Which statement correctly explains the function of the heart?', ['The heart is constantly beating to pump out blood', 'The heart plays a role in digesting the food we eat', 'The heart plays a role in storing nutrients']),
      fill('The heart is constantly beating to ___ out blood.', ['pump', 'store', 'digest'], QUICK),
      tf('The heart plays a role in digesting the food we eat.', false, { explain: 'The heart is constantly beating to pump out blood. Food is digested in the digestive tract.' }),
      build('define', 'What does the heart do?', ['The heart is constantly beating', 'to pump out blood', 'to the whole body'], ['to digest the food', 'to store nutrients'])
    ] },
  { id: 'H2', lesson: 1, concept: 'What the blood carries to the whole body',
    explain: 'Nutrients absorbed from the small intestine and oxygen taken in by the lungs are carried to the whole body by the blood.',
    variants: [
      multi('What are the important things that blood carries to the whole body? Choose all the correct answers.', ['Oxygen', 'Nutrients', 'Carbon dioxide', 'Muscles'], [0, 1]),
      fill('The blood pumped out from the heart carries ___ and nutrients to the whole body.', ['oxygen', 'carbon dioxide', 'waste'], QUICK),
      mc('Where do the nutrients that the blood carries come from?', ['They are absorbed from the small intestine', 'They are taken in by the lungs', 'They are made by the kidneys']),
      mc('Where does the oxygen that the blood carries come from?', ['It is taken in by the lungs', 'It is absorbed from the small intestine', 'It is made by the heart']),
      match('Match each thing the blood carries to the place where the body gets it.', ['Nutrients', 'Oxygen'], ['Absorbed from the small intestine', 'Taken in by the lungs']),
      tf('The blood carries muscles to the whole body.', false, QUICK),
      mc('What carries nutrients and oxygen to the whole body?', ['The blood', 'The food pipe', 'The ribs'], QUICK)
    ] },
  { id: 'H3', lesson: 1, concept: 'The blood collects carbon dioxide and waste',
    explain: 'The blood collects carbon dioxide and waste produced in the body, and returns to the heart again.',
    variants: [
      fill('The blood collects ___ and waste produced in the body, and returns to the heart again.', ['carbon dioxide', 'oxygen', 'nutrients']),
      mc('What does the blood collect from the whole body on its way back to the heart?', ['Carbon dioxide and waste produced in the body', 'Oxygen and nutrients', 'Food and water']),
      tf('The blood collects carbon dioxide and waste produced in the body.', true, QUICK),
      mc('After the blood has travelled throughout the body, where does it return?', ['To the heart', 'To the stomach', 'To the kidneys'], QUICK),
      multi('The blood from the heart delivers oxygen and nutrients. What does it collect from the whole body? Choose all the correct answers.', ['Carbon dioxide', 'Waste produced in the body', 'Oxygen', 'Nutrients'], [0, 1]),
      build('define', 'What does the blood do after it delivers oxygen and nutrients?', ['It collects carbon dioxide and waste', 'produced in the body', 'and returns to the heart'], ['and goes to the stomach', 'and collects oxygen'])
    ] },
  { id: 'H4', lesson: 1, concept: 'The blood goes to the lungs',
    explain: 'The blood that has returned to the heart is sent to the lungs to let out carbon dioxide and take in oxygen.',
    variants: [
      mc('The blood that has returned to the heart is sent to which organs?', ['The lungs', 'The kidneys', 'The stomach'], QUICK),
      fill('The blood that has returned to the heart is sent to the lungs to let out ___ and take in oxygen.', ['carbon dioxide', 'nutrients', 'waste']),
      mc('What happens to the blood in the lungs?', ['It lets out carbon dioxide and takes in oxygen', 'It lets out oxygen and takes in carbon dioxide', 'It takes in nutrients and lets out water']),
      tf('In the lungs, the blood lets out oxygen and takes in carbon dioxide.', false, { ...QUICK, explain: 'It is the other way round: the blood lets out carbon dioxide and takes in oxygen.' }),
      fix('The blood is sent to the lungs to let out oxygen and take in carbon dioxide.', 'oxygen', 'carbon dioxide'),
      build('define', 'What happens when the blood returns to the heart?', ['It is sent to the lungs', 'to let out carbon dioxide', 'and take in oxygen'], ['to let out oxygen', 'and take in nutrients'])
    ] },
  { id: 'H5', lesson: 1, concept: 'Heartbeat and pulse',
    explain: 'The movement of the heart during pumping out blood is called a heartbeat. The heartbeat travels through the blood vessels and can be felt as a pulse at the wrist.',
    variants: [
      term('The movement of the heart during pumping out blood.', 'Heartbeat'),
      mc('What do we call the movement of the heart during pumping out blood?', ['A heartbeat', 'A pulse', 'A breath'], QUICK),
      term('The heartbeat that travels through the blood vessels and can be felt at the wrist.', 'Pulse'),
      fill('The heartbeat travels through the blood vessels and can be felt as a ___ at the wrist.', ['pulse', 'breath', 'tract']),
      match('Match each word to its meaning.', ['Heartbeat', 'Pulse'], ['The movement of the heart during pumping out blood', 'The heartbeat felt through the blood vessels at the wrist']),
      tf('The pulse is the heartbeat travelling through the blood vessels.', true, QUICK)
    ] },
  { id: 'H6', lesson: 1, concept: 'Measuring the pulse',
    explain: 'To measure the pulse: put a finger near the base of the thumb on the wrist, find the place where it is beating, and count the beats in 1 minute with a stopwatch. The pulse can also be felt at the neck or the ankle.',
    variants: [
      mc('Where do we put a finger to find the pulse in the experiment?', ['On the wrist, near the base of the thumb', 'On the elbow', 'On the knee']),
      mc('For how long do we count the pulse beats in the experiment?', ['1 minute', '10 minutes', '1 hour'], QUICK),
      fill('In the pulse experiment, we use a ___ to measure the time.', ['stopwatch', 'microscope', 'thermometer']),
      multi('Where can you feel your pulse? Choose all the correct answers.', ['The wrist', 'The neck', 'The ankle', 'The hair'], [0, 1, 2]),
      tf('You can feel your pulse by touching your neck.', true, QUICK),
      order('Put the steps of the pulse experiment in order.', ['Count the beats again after jumping lightly', 'Find the place on the wrist where it is beating', 'Count the beats in 1 minute while sitting'], [1, 2, 0])
    ] },
  { id: 'H7', lesson: 1, concept: 'The pulse after exercise',
    explain: 'When you exercise, your heart beats faster. The pulse becomes faster to carry more oxygen and nutrients to the whole body quickly.',
    variants: [
      mc('What happens to your pulse after exercising?', ['It becomes faster', 'It becomes slower', 'It stops'], QUICK),
      mc('Why does your pulse become faster after exercising?', ['To carry more oxygen and nutrients to the whole body quickly', 'To allow the blood to rest slowly', 'Because there are not enough nutrients']),
      tf('When you exercise, your heart beats faster.', true, QUICK),
      fill('After exercise the heart beats faster to carry more ___ and nutrients to the whole body quickly.', ['oxygen', 'carbon dioxide', 'waste']),
      build('why', 'Why does the heart beat faster when you exercise?', ['To carry more oxygen and nutrients', 'to the whole body', 'quickly'], ['to let the blood rest', 'because there are not enough nutrients']),
      tf('After jumping lightly, the pulse becomes slower.', false)
    ] },
  { id: 'H8', lesson: 1, concept: 'Red and blue blood in the drawings',
    explain: 'In the drawings of blood circulation, red shows blood rich in oxygen and blue shows blood rich in carbon dioxide.',
    variants: [
      mc('In the drawings of blood circulation, red shows blood that is rich in...', ['Oxygen', 'Carbon dioxide', 'Waste only'], QUICK),
      mc('In the drawings of blood circulation, blue shows blood that is rich in...', ['Carbon dioxide', 'Oxygen', 'Nutrients only']),
      match('Match each colour to what it shows.', ['Red', 'Blue'], ['Blood rich in oxygen', 'Blood rich in carbon dioxide']),
      tf('In the drawings, blue shows blood that is rich in carbon dioxide.', true, QUICK),
      fill('In the drawings, red shows blood that is rich in ___.', ['oxygen', 'carbon dioxide', 'waste']),
      mc('The white dot is moving in a red vessel on its way from the heart. Where is the blood going?', ['To the whole body', 'To the lungs', 'To the stomach'], dot(1, .5)),
      mc('The white dot is moving in a blue vessel on its way from the whole body. Where is the blood going?', ['To the heart', 'To the lungs', 'To the kidneys'], dot(2, .5))
    ] },
  { id: 'H9', lesson: 1, concept: 'The blood loop on the picture',
    explain: 'The blood is pumped out by the heart, carries oxygen and nutrients to the whole body, collects carbon dioxide and waste, returns to the heart and is sent to the lungs.',
    variants: [
      tap('bloodLoop', 'This organ works like a pump and sends the blood out. Tap the heart.', 'heart'),
      tap('bloodLoop', 'The blood lets out carbon dioxide and takes in oxygen here. Tap the lungs.', 'lungs'),
      tap('bloodLoop', 'The blood delivers oxygen and nutrients here and collects carbon dioxide and waste. Tap the whole body.', 'whole'),
      mc('The white dot is moving in a blue vessel on its way from the heart. Where is the blood going?', ['To the lungs', 'To the whole body', 'To the stomach'], dot(3, .5)),
      mc('The white dot is moving in a red vessel on its way from the lungs. Where is the blood going?', ['To the heart', 'To the whole body', 'To the kidneys'], dot(0, .5))
    ] },
  { id: 'H10', lesson: 1, boss: true, concept: 'The journey of the blood',
    explain: 'The blood is pumped out by the heart, carries oxygen and nutrients to the whole body, collects carbon dioxide and waste, returns to the heart, and is sent to the lungs to let out carbon dioxide and take in oxygen.',
    variants: [
      order('Put the journey of the blood in order.', ['The blood returns to the heart again', 'The blood is pumped out by the heart', 'It carries oxygen and nutrients to the whole body and collects carbon dioxide and waste', 'The returned blood is sent to the lungs to let out carbon dioxide and take in oxygen'], [1, 2, 0, 3], BOSS),
      mc('Nour runs fast and her heart beats faster. What does her blood carry quickly to the whole body?', ['More oxygen and nutrients', 'More carbon dioxide', 'More muscles'], { ...BOSS, style: 'story' }),
      fill('Heart → whole body → heart → ___ → heart', ['lungs', 'mouth', 'teeth'], BOSS),
      match('Match each part to what it does.', ['The blood', 'The heart', 'The lungs'], ['Carries oxygen and nutrients to the whole body', 'Pumps out the blood', 'Take in oxygen and let out carbon dioxide'], BOSS),
      mc('Which statement correctly describes blood circulation?', ['The blood pumped out by the heart travels throughout the body and returns to the heart again', 'The blood stays in the heart and only the oxygen travels around the body', 'The blood flows only from the lungs to the stomach'], BOSS),
      tf('The blood that has returned to the heart is sent to the lungs.', true, BOSS)
    ] },

  /* ---------- 4-2 How the Kidneys Work ---------- */
  { id: 'K1', lesson: 2, concept: 'The two kidneys',
    explain: 'There are two kidneys on the lower back on both sides of the backbone.',
    variants: [
      mc('How many kidneys are there in the body?', ['Two', 'One', 'Four'], QUICK),
      mc('Where are the kidneys?', ['On the lower back, on both sides of the backbone', 'In the chest, between the lungs', 'At the top of the abdomen']),
      fill('There are ___ kidneys on the lower back on both sides of the backbone.', ['two', 'one', 'four'], QUICK),
      tf('There is one kidney on each side of the backbone.', true),
      mc('Which of these organs has one on each side of the backbone, for a total of two?', ['The kidneys', 'The stomach', 'The heart', 'The small intestine']),
      term('The two organs on the lower back, on both sides of the backbone, that filter the blood.', 'Kidneys')
    ] },
  { id: 'K2', lesson: 2, concept: 'What the kidneys do',
    explain: 'Waste products (unnecessary things produced in the body) are carried to the kidneys by the blood. In the kidneys, the waste products and the excess water are filtered out from the blood.',
    variants: [
      term('Unnecessary things produced in the body.', 'Waste products'),
      mc('Which statement correctly explains how the kidneys work?', ['They take out waste products from the blood', 'They absorb oxygen from the blood', 'They pump blood to the whole body']),
      mc('What carries the waste products to the kidneys?', ['The blood', 'The food pipe', 'The windpipe']),
      fill('Waste products are carried to the kidneys by the ___.', ['blood', 'air', 'saliva'], QUICK),
      mc('What do the kidneys filter out of the blood?', ['Waste products and excess water', 'Oxygen and nutrients', 'Muscles and bones'], QUICK),
      tf('The kidneys pump the blood to the whole body.', false, { explain: 'The heart pumps the blood. The kidneys filter waste products out of the blood.' }),
      fix('The kidneys filter waste products out of the air.', 'air', 'blood'),
      term('The two organs that filter the blood and filter out waste products.', 'Kidneys')
    ] },
  { id: 'K3', lesson: 2, concept: 'Urine and the bladder',
    explain: 'In the kidneys, waste products and excess water are filtered out from the blood to become urine. The urine is temporarily stored in the bladder, and then discharged out of the body.',
    variants: [
      mc('What is the liquid waste produced in the kidneys called?', ['Urine', 'Saliva', 'A digestive juice'], QUICK),
      term('The liquid waste produced by the kidneys.', 'Urine'),
      mc('Where is the urine temporarily stored until it is discharged out of the body?', ['In the bladder', 'In the stomach', 'In the heart']),
      term('The place where the urine is temporarily stored.', 'Bladder'),
      fill('The urine is temporarily stored in the ___, and then discharged out of the body.', ['bladder', 'stomach', 'lungs']),
      tf('Urine is temporarily stored in the bladder.', true, QUICK),
      match('Match each organ to its job.', ['Kidneys', 'Bladder'], ['Filter waste products and excess water from the blood', 'Temporarily stores the urine']),
      build('define', 'What is urine?', ['The liquid made of waste products', 'and excess water', 'filtered out by the kidneys'], ['pumped out by the heart', 'absorbed in the small intestine'])
    ] },
  { id: 'K4', lesson: 2, concept: 'The cleaning route of the body',
    explain: 'The blood enters the kidneys and is filtered there. The urine is stored in the bladder, then discharged out of the body. The inside of the body is kept clean by discharging urine.',
    variants: [
      order('Put the cleaning route of the body in order.', ['The urine is stored in the bladder', 'The blood enters the kidneys and is filtered', 'The urine is discharged out of the body'], [1, 0, 2]),
      mc('What happens to the urine after it is stored temporarily in the bladder?', ['It is discharged out of the body', 'It returns to the blood', 'It goes to the lungs']),
      fill('The blood enters the kidneys and is ___ there.', ['filtered', 'stored', 'digested'], QUICK),
      fix('Urine is temporarily stored in the kidneys.', 'kidneys', 'bladder'),
      tf('The urine leaves the body before it is stored in the bladder.', false),
      mc('What keeps the inside of the body clean?', ['Discharging urine', 'Taking in oxygen', 'Beating of the heart'])
    ] },
  { id: 'K5', lesson: 2, concept: 'The kidneys on the picture',
    explain: 'Waste products are filtered by the two kidneys on the lower back. The urine passes through tubes and is stored in the bladder.',
    variants: [
      tap('urinary', 'These organs filter waste products and excess water out of the blood. Tap the kidneys.', 'kidneys'),
      tap('urinary', 'The urine is temporarily stored in this bag. Tap the urinary bladder.', 'bladder'),
      tap('urinary', 'The urine passes through these thin tubes on its way down. Tap the tubes where the urine passes.', 'urtube'),
      tap('urinary', 'There is one on each side of the backbone, for a total of two. Tap the kidneys.', 'kidneys')
    ] },
  { id: 'K6', lesson: 2, boss: true, concept: 'How the body discharges waste products',
    explain: 'The blood carries waste products to the kidneys. The kidneys filter the waste products and the excess water out of the blood to become urine. The urine is stored in the bladder and then discharged out of the body.',
    variants: [
      order('Put the way the body discharges waste products in order.', ['The urine is discharged out of the body', 'The waste products and excess water are filtered out from the blood to become urine', 'The urine is temporarily stored in the bladder', 'The blood carries the waste products to the kidneys'], [3, 1, 2, 0], BOSS),
      mc('Ahmed drank a lot of water. Where is the urine that his kidneys make stored before it leaves his body?', ['In the bladder', 'In the heart', 'In the lungs'], { ...BOSS, style: 'story' }),
      match('Match each word to its meaning.', ['Kidneys', 'Urine', 'Bladder'], ['Filter waste products out of the blood', 'The liquid containing waste products and excess water', 'Temporarily stores the urine'], BOSS),
      fill('Blood → ___ (filtered) → urine → bladder → out of the body', ['kidneys', 'heart', 'lungs'], BOSS),
      mc('Which statement correctly describes how the body discharges waste products?', ['The blood carries them to the kidneys, which filter them into urine that is stored in the bladder and then discharged', 'The heart filters them out and the lungs store them', 'The stomach turns them into blood'], BOSS),
      tf('The urine produced by the kidneys is discharged out of the body without being stored at all.', false, BOSS)
    ] },

  /* ---------- 4-3 Various Organs ---------- */
  { id: 'M1', lesson: 3, concept: 'The organs work together',
    explain: 'In our body, many organs are lined up closely without gaps, and they work together with each other.',
    variants: [
      mc('How are the many organs lined up in our body?', ['Closely, without gaps', 'With big empty spaces between them', 'Each one far from the others'], QUICK),
      fill('Many organs are lined up closely without gaps, and they work ___ with each other.', ['together', 'separately', 'alone']),
      tf('Each organ moves separately and does not work with the others.', false, QUICK),
      build('define', 'How are the organs of our body arranged?', ['Many organs are lined up closely', 'without gaps', 'and work together'], ['and work separately', 'with big spaces'])
    ] },
  { id: 'M2', lesson: 3, concept: 'The organs in the chest',
    explain: 'In the chest there are the left and right lungs, and the heart sandwiched between them. They are protected by the ribs.',
    variants: [
      multi('Choose 2 organs that are inside the chest of the human body.', ['Stomach', 'Heart', 'Lungs', 'Large intestine', 'Small intestine'], [1, 2]),
      mc('Which organ is sandwiched between the left and right lungs?', ['The heart', 'The stomach', 'The kidney'], QUICK),
      mc('What protects the organs in the chest?', ['The ribs', 'The stomach', 'The bladder']),
      tf('The heart is sandwiched between the left and right lungs.', true, QUICK),
      fill('The lungs and the heart are protected by the ___.', ['ribs', 'kidneys', 'intestines']),
      tf('The stomach is inside the chest, between the lungs.', false)
    ] },
  { id: 'M3', lesson: 3, concept: 'The organs in the abdomen',
    explain: 'In the abdomen there is the stomach at the top, the long small intestine below it, and the large intestine around it.',
    variants: [
      mc('Which organ is at the top of the abdomen?', ['The stomach', 'The small intestine', 'The large intestine'], QUICK),
      mc('Which long organ is below the stomach?', ['The small intestine', 'The large intestine', 'The heart']),
      mc('Which organ is around the small intestine?', ['The large intestine', 'The stomach', 'The kidney']),
      match('Match each organ to its place in the abdomen.', ['Stomach', 'Small intestine', 'Large intestine'], ['At the top', 'Long and below the stomach', 'Around the small intestine']),
      tf('The stomach is on the lower side of the abdomen.', false, QUICK),
      fix('The stomach is at the bottom of the abdomen.', 'bottom', 'top'),
      tf('The small intestine is outside the large intestine and surrounds it.', false, { explain: 'It is the large intestine that is around the small intestine.' })
    ] },
  { id: 'M4', lesson: 3, concept: 'Blood vessels connect all the organs',
    explain: 'All organs are connected by blood vessels, and the whole body works by the blood carrying nutrients and oxygen and collecting waste products.',
    variants: [
      fill('Each organ is not moving separately, but all are connected by ___ and work together.', ['blood vessels', 'ribs', 'bones']),
      mc('What connects all the organs of the body?', ['Blood vessels', 'The ribs', 'The backbone']),
      tf('All organs are connected by blood vessels.', true, QUICK),
      mc('How does the whole body work?', ['By the blood carrying nutrients and oxygen and collecting waste products', 'By the blood carrying only the waste products', 'By the blood carrying only oxygen']),
      multi('What does the blood do while the whole body works? Choose all the correct answers.', ['It carries nutrients', 'It carries oxygen', 'It collects waste products', 'It digests the food'], [0, 1, 2]),
      build('why', 'How does the whole body work?', ['By the blood carrying', 'nutrients and oxygen', 'and collecting waste products'], ['by the ribs', 'and storing oxygen'])
    ] },
  { id: 'M5', lesson: 3, concept: 'The organs on the picture',
    explain: 'The lungs and the heart are in the chest; the stomach, the small intestine and the large intestine are in the abdomen.',
    variants: [
      tap('organsMap', 'There are two of them in the chest, left and right. Tap the lungs.', 'lungs'),
      tap('organsMap', 'It is sandwiched between the lungs. Tap the heart.', 'heart'),
      tap('organsMap', 'It is at the top of the abdomen. Tap the stomach.', 'stomach'),
      tap('organsMap', 'It is the long organ below the stomach. Tap the small intestine.', 'small'),
      tap('organsMap', 'It is around the small intestine. Tap the large intestine.', 'large')
    ] },
  { id: 'M6', lesson: 3, concept: 'Where the organs are located',
    explain: 'The heart and the lungs are higher than the stomach and are protected by the ribs. The stomach is connected to the esophagus (food pipe). The kidneys are on the lower back.',
    variants: [
      mc('Which statement correctly describes where the organs are located?', ['The stomach is connected to the esophagus (food pipe)', 'The small intestine is outside the large intestine and surrounds it', 'The stomach is on the lower side of the abdomen', 'There are two kidneys on the abdomen right side']),
      mc('Which organs are higher in the body than the stomach?', ['The heart and the lungs', 'The small and large intestines', 'The kidneys'], QUICK),
      tf('The heart and the lungs are located higher than the stomach.', true),
      order('Put these organs in order from the top of the body.', ['Stomach', 'Lungs', 'Small intestine'], [1, 0, 2]),
      mc('Which of these organs is on the lower back?', ['The kidneys', 'The heart', 'The stomach'], QUICK),
      match('Match each part of the body to its organs.', ['Chest', 'Abdomen', 'Lower back'], ['Lungs and heart', 'Stomach and intestines', 'Kidneys'])
    ] },
  { id: 'M7', lesson: 3, boss: true, concept: 'Where the organs are and how they work together',
    explain: 'The heart and the lungs are in the chest, the stomach and the intestines are in the abdomen, and the kidneys are on the lower back. All organs are connected by blood vessels and work together.',
    variants: [
      match('Match each organ to its place.', ['Heart', 'Stomach', 'Kidney'], ['In the chest, between the lungs', 'At the top of the abdomen', 'On the lower back, beside the backbone'], BOSS),
      mc('Which statement describes the teamwork of the organs?', ['The organs are connected by blood vessels, and the blood carries nutrients and oxygen and collects waste products', 'Each organ works alone and is not connected to the others', 'Only the heart works, and all the other organs rest'], BOSS),
      multi('Choose all the organs that are in the abdomen.', ['Stomach', 'Small intestine', 'Large intestine', 'Heart', 'Lungs'], [0, 1, 2], BOSS),
      tap('organsMap', 'It is protected by the ribs and sandwiched between the lungs. Tap it.', 'heart', BOSS),
      tf('The organs are lined up with large gaps between them.', false, BOSS),
      fill('The heart is in the ___, the stomach is in the abdomen and the kidneys are on the lower back.', ['chest', 'neck', 'head'], BOSS)
    ] },

  /* ---------- Enrichment Corner (pages 44-45): bonus, never counted ---------- */
  { id: 'Z1', lesson: 3, bonus: true, concept: 'The canopic jars',
    explain: 'When ancient Egyptians made mummies, they kept four very important organs (the lungs, stomach, liver and intestines) safe in special jars.',
    variants: [
      mc('Which four organs did the ancient Egyptians keep safe in the canopic jars?', ['The lungs, stomach, liver and intestines', 'The heart, brain, kidneys and bones', 'The heart, lungs, kidneys and skin'], NORM),
      tf('Ancient Egyptians kept the heart in a canopic jar.', false, { explain: 'They left the heart inside the body.' }),
      fill('Ancient Egyptians kept four important organs safe in special ___.', ['jars', 'boxes', 'bags'], NORM)
    ] },
  { id: 'Z2', lesson: 3, bonus: true, concept: 'The heart, the place of wisdom',
    explain: 'The heart is a pump that sends blood throughout the body. However, ancient people believed the heart was where the mind resided, so they left it inside the body.',
    variants: [
      mc('Why did the ancient Egyptians leave the heart inside the body?', ['They believed the heart was where the mind resided', 'They believed the heart was not important', 'They could not find it'], NORM),
      fill('Ancient people believed the heart was where the ___ resided.', ['mind', 'stomach', 'blood'], NORM)
    ] },
  { id: 'Z3', lesson: 3, bonus: true, concept: 'The four guardians of the jars',
    explain: 'Imsety protects the liver, Hapi protects the lungs, Duamutef protects the stomach, and Qebehsenuef protects the intestines.',
    variants: [
      match('Match each canopic jar to the organ it protects.', ['Imsety', 'Hapi', 'Duamutef', 'Qebehsenuef'], ['Liver', 'Lungs', 'Stomach', 'Intestines'], NORM),
      mc('Which canopic jar has a falcon shape and protects the intestines?', ['Qebehsenuef', 'Hapi', 'Imsety'], NORM),
      mc('Which canopic jar has a human shape and protects the liver?', ['Imsety', 'Duamutef', 'Hapi'], NORM)
    ] },
  { id: 'Z4', lesson: 3, bonus: true, concept: 'The organs and the circulation of blood',
    explain: 'In modern science, we learn that our organs do not work separately. They are all connected together by the circulation of blood.',
    variants: [
      mc('In modern science, what connects the organs so that they do not work separately?', ['The circulation of blood', 'The ribs', 'The skin'], NORM),
      match('Match each organ to what it does.', ['Brain', 'Liver', 'Kidney', 'Heart'], ['Gives commands and needs many nutrients and oxygen', 'Stores nutrients and breaks down harmful substances', 'Filters waste and extra water from the blood to make urine', 'A pump that sends blood'], NORM),
      mc('What does the stomach and intestine do for the nutrients?', ['Digests and absorbs food and passes the nutrients to the blood', 'Pumps the nutrients to the whole body', 'Filters the nutrients out of the blood'], NORM)
    ] }
];
})();
