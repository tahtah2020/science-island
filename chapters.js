/* Motafawek (متفوق) · the subjects, and the chapter list of every subject, grade and track, first term.
   Every subject keeps its files in its own folder (science/: questions, drawings, maps; the game pages stay at the site root).
   A chapter opens for players when `ready` is true. To publish a new chapter, fill in:
     subject   : the subject id in window.SUBJECTS below. A chapter (or test) without it belongs to Science.
                 Chapter ids are unique on the whole site, across subjects: Science keeps ch1, g4c1…; another subject starts with its own prefix (Math: m5c1…, mp1u1…).
     grade     : 'g4' | 'g5' | 'g6' | 'p1' | 'p2'. A chapter without it belongs to Grade 5. A player sees the chapters of their own grade only.
                 Chapter ids are unique on the whole site: Grade 5 uses ch1…, Grade 4 uses g4c1…, Grade 6 uses g6c1…, Prep 1 uses p1u1…, Prep 2 uses p2u1… (units)
     questMax  : optional: a long chapter asks only this many ideas in each Quest (all lessons and all Boss ideas are always in it)
     titleAr   : the chapter title in the Arabic school book (Arabic track)
     questions : file with that chapter's window.IDEAS (for example 'science/questions_ch2.js')
     questionsAr : the same questions in Arabic for the Arabic track (for example 'science/questions_ch2_ar.js')
                   A chapter opens for Arabic-track players only when it has questionsAr, and for Languages-track players only when it has questions.
     game      : the chapter's own interactive game { href, name, nameAr, icon, hint, hintAr }
     map       : { img, stops } - stop positions in percent of the picture, in this order:
                 game, Chapter Quest, Daily 5, Review, Champions  ->  [x, y, label side]
     art       : optional script with the chapter's own drawings; it adds the tap pictures of its questions
                 to window.CH_DIAGRAMS (for example 'science/ch2_art.js') and is loaded before the questions
     cover     : optional picture for the chapter card (otherwise the icon is shown)
     quizBg    : optional background picture for the question pages
     theme     : optional colours, for example { primary:'#2f8f5b', 'primary-d':'#237047' }
   Lesson names follow the school book. */
/* subjects, in the order of the tabs on the chapters page.
   lang: which questions file each track reads ({ lang: 'en', ar: 'ar' } when left out: Languages track English, Arabic track Arabic).
   soon: the tab shows "coming soon" · hidden: not shown at all */
window.SUBJECTS = [
  { id: 'science', title: 'Science', titleAr: 'العلوم', icon: '🔬', tint: '#dcefff', dir: 'science' },
  { id: 'math', title: 'Math', titleAr: 'الرياضيات', icon: '🔢', tint: '#ffe6cc', dir: 'math' },
  { id: 'studies', title: 'Social Studies', titleAr: 'الدراسات الاجتماعية', icon: '🌍', tint: '#e2f4dc', dir: 'studies', lang: { lang: 'ar', ar: 'ar' }, hidden: true },
  { id: 'arabic', title: 'Arabic', titleAr: 'اللغة العربية', icon: '📖', tint: '#fbe3e3', dir: 'arabic', lang: { lang: 'ar', ar: 'ar' }, hidden: true },
  { id: 'english', title: 'English', titleAr: 'اللغة الإنجليزية', icon: '🔤', tint: '#efe3fb', dir: 'english', lang: { lang: 'en', ar: 'en' }, hidden: true }
];

window.CHAPTERS = [
  { id: 'ch1', n: 1, title: 'Bones and Muscles', titleAr: 'العظام والعضلات', icon: '🦴', tint: '#dff1f8', ready: true,
    lessons: ['Bones and Muscles', 'Structure of Bones', 'Whole Body Skeleton', 'Animal Bodies'],
    lessonsAr: ['العظام والعضلات', 'تركيب العظام', 'الهيكل العظمي الكامل للجسم', 'أجسام الحيوانات'],
    questions: 'science/questions.js', questionsAr: 'science/questions_ar.js',
    game: { href: 'arm.html', name: 'Arm Mechanic', nameAr: 'ميكانيكي الذراع', icon: '🦾', hint: 'See how your muscles pull your bones!', hintAr: 'شوف إزاي عضلاتك بتشد عظامك!' },
    map: { img: 'assets/map_island.jpg', stops: [[59.6, 82.9, 'left'], [54.6, 67.1, 'right'], [41.3, 51.4, 'right'], [39.6, 38.1, 'left'], [68.2, 12.5, 'below']] },
    cover: 'assets/map_island.jpg', quizBg: 'assets/bg_park.jpg' },

  { id: 'ch2', n: 2, title: 'Changes in the Seasons', titleAr: 'التغيرات في الفصول', icon: '🍂', tint: '#fdebd3', ready: true,
    lessons: ['Changes over a Year', 'Animals and Temperature'],
    lessonsAr: ['التغيرات خلال السنة', 'الحيوانات ودرجة الحرارة'],
    questions: 'science/questions_ch2.js', questionsAr: 'science/questions_ch2_ar.js', art: 'science/ch2_art.js',
    game: { href: 'seasons.html', name: 'Season Explorer', nameAr: 'مستكشف الفصول', icon: '🌡️', hint: 'Travel through the year and see what the temperature changes!', hintAr: 'رحلة خلال السنة: درجة الحرارة بتغيّر إيه؟' },
    map: { img: 'science/assets/map_ch2.svg', stops: [[30, 82, 'right'], [63, 68, 'left'], [36, 51, 'right'], [65, 37, 'left'], [44, 14, 'below']] },
    cover: 'science/assets/map_ch2.svg', quizBg: 'science/assets/bg_ch2.svg' },

  { id: 'ch3', n: 3, title: 'Conditions for Germination', titleAr: 'شروط الإنبات', icon: '🌱', tint: '#e2f4dc', ready: true,
    lessons: ['Inside the Seed', 'Water and Germination', 'Air and Germination', 'Temperature and Germination', 'Summary of Germination'],
    lessonsAr: ['ما بداخل البذرة', 'الماء والإنبات', 'الهواء والإنبات', 'درجة الحرارة والإنبات', 'ملخص الإنبات'],
    questions: 'science/questions_ch3.js', questionsAr: 'science/questions_ch3_ar.js', art: 'science/ch3_art.js',
    game: { href: 'seedlab.html', name: 'Seed Lab', nameAr: 'معمل البذور', icon: '🧪', hint: 'Open a seed, then find out what seeds need to germinate!', hintAr: 'افتح البذرة واكتشف البذور محتاجة إيه علشان تنبت!' },
    map: { img: 'science/assets/map_ch3.svg', stops: [[24.5, 82.5, 'right'], [62.1, 70, 'left'], [34.3, 52.9, 'right'], [65.4, 36.6, 'left'], [45.8, 15.6, 'below']] },
    cover: 'science/assets/map_ch3.svg', quizBg: 'science/assets/bg_ch3.svg' },

  { id: 'ch4', n: 4, title: 'Conditions for Growth', titleAr: 'شروط النمو', icon: '🌿', tint: '#d9f2e4', ready: false,
    lessons: ['Sunlight and Growth', 'Fertilizer and Growth'],
    questions: 'science/questions_ch4.js' },   // first part only: used by the Exam Hall until the chapter opens (it still needs its game and map)

  { id: 'ch5', n: 5, title: 'From Flower to Fruit', titleAr: 'من الزهرة إلى الثمرة', icon: '🌼', tint: '#fdf3c9', ready: false,
    lessons: ['Structure of a Luffa Flower', 'How to Use a Microscope', 'Pollination and How Fruits Grow'] },

  { id: 'ch6', n: 6, title: 'Human Growth and Reproduction', titleAr: 'نمو الإنسان وتكاثره', icon: '🧒', tint: '#fde3dc', ready: false,
    lessons: ['Stages of Human Growth', 'Similarities between Parents and Children', 'Conditions for Healthy Growth'] },

  { id: 'ch7', n: 7, title: 'Animal Growth and Reproduction', titleAr: 'نمو الحيوانات وتكاثرها', icon: '🐣', tint: '#fff0cf', ready: false,
    lessons: ['Animals that Give Birth', 'Animals that Lay Eggs', 'Comparing Animals and Preserving the Species'] },

  { id: 'ch8', n: 8, title: 'Changes in Weather', titleAr: 'تغيرات الطقس', icon: '⛅', tint: '#e3ecfb', ready: false,
    lessons: ['Clouds and Weather', 'Clouds Movement', 'Weather Forecast'] },

  { id: 'ch9', n: 9, title: 'Water Cycle', titleAr: 'دورة الماء', icon: '💧', tint: '#d8eefb', ready: false,
    lessons: ['Water Evaporation', 'Water in the Air', 'Where Does Water Go?'] },

  /* ---------- Grade 4 (school book 2026/2027, 8 chapters in the first term) ---------- */
  { id: 'g4c1', grade: 'g4', n: 1, title: 'Nature in Our Surroundings', titleAr: 'الطبيعة من حولنا', icon: '🦊', tint: '#f6e7c4', ready: true,
    lessons: ['Let’s Find Living Organisms', 'How to Observe', 'Colors and Shapes of Living Organisms', 'Different Places, Different Living Organisms', 'Desert Living Organisms'],
    lessonsAr: ['لنبحث عن الكائنات الحية', 'كيف نلاحظ؟', 'ألوان وأشكال الكائنات الحية', 'أماكن مختلفة .. كائنات حية مختلفة', 'الكائنات الحية الصحراوية'],
    questions: 'science/questions_g4c1.js', questionsAr: 'science/questions_g4c1_ar.js', art: 'science/g4_art.js',
    game: { href: 'habitat.html', name: 'Habitat Explorer', nameAr: 'مستكشف المَواطن', icon: '🔍', hint: 'Find where living organisms live, by the Nile and in the desert!', hintAr: 'اكتشف الكائنات الحية عايشة فين: على ضفاف النيل وفي الصحراء!' },
    map: { img: 'science/assets/map_g4c1.svg', stops: [[24.5, 82.5, 'right'], [62.1, 70, 'left'], [34.3, 52.9, 'right'], [65.4, 36.6, 'left'], [45.8, 15.6, 'below']] },
    cover: 'science/assets/map_g4c1.svg', quizBg: 'science/assets/bg_g4c1.svg' },

  { id: 'g4c2', grade: 'g4', n: 2, title: 'How Insects Grow', titleAr: 'كيف تنمو الحشرات؟', icon: '🦋', tint: '#fde3ea', ready: true,
    lessons: ['Eggs and Larvae', 'Pupae and Adults', 'Body Structure of Adults'],
    lessonsAr: ['البيض واليرقات', 'الشرنقة والحشرات البالغة', 'تركيب جسم الحشرات البالغة'],
    questions: 'science/questions_g4c2.js', questionsAr: 'science/questions_g4c2_ar.js', art: 'science/g4_art.js',
    game: { href: 'butterfly.html', name: 'Butterfly Garden', nameAr: 'حديقة الفراشات', icon: '🦋', hint: 'Raise a butterfly from an egg, then find out what makes an insect!', hintAr: 'ربِّ فراشة من أول البيضة، واعرف إيه اللي بيخلّي الحشرة حشرة!' },
    map: { img: 'science/assets/map_g4c2.svg', stops: [[24.5, 82.5, 'right'], [62.1, 70, 'left'], [34.3, 52.9, 'right'], [65.4, 36.6, 'left'], [45.8, 15.6, 'below']] },
    cover: 'science/assets/map_g4c2.svg', quizBg: 'science/assets/bg_g4c2.svg' },

  { id: 'g4c3', grade: 'g4', n: 3, title: 'How Plants Grow', titleAr: 'كيف تنمو النباتات؟', icon: '🌻', tint: '#dff0fb', ready: true,
    lessons: ['Sowing Seeds', 'After Sprouting', 'Flowers and Fruits', 'The Plant Body'],
    lessonsAr: ['زراعة البذور', 'بعد الإنبات', 'الأزهار والثمار', 'أجزاء النبات'],
    questions: 'science/questions_g4c3.js', questionsAr: 'science/questions_g4c3_ar.js', art: 'science/g4_art.js',
    game: { href: 'garden.html', name: 'My Little Garden', nameAr: 'حديقتي الصغيرة', icon: '🌻', hint: 'Sow a seed and grow a sunflower, from sprout to new seeds!', hintAr: 'ازرع بذرة وكبّر عبّاد الشمس، من النبتة الصغيرة لحد البذور الجديدة!' },
    map: { img: 'science/assets/map_g4c3.svg', stops: [[24.5, 82.5, 'right'], [62.1, 70, 'left'], [34.3, 52.9, 'right'], [65.4, 36.6, 'left'], [45.8, 15.6, 'below']] },
    cover: 'science/assets/map_g4c3.svg', quizBg: 'science/assets/bg_g4c3.svg' },

  { id: 'g4c4', grade: 'g4', n: 4, title: 'Properties of Light', titleAr: 'خصائص الضوء', icon: '🔦', tint: '#fff3c4', ready: false,
    lessons: ['How Sunlight Travels', 'Gathering Light', 'Shadows and the Sun (1)', 'Shadows and the Sun (2)', 'Sun and Shade'] },

  { id: 'g4c5', grade: 'g4', n: 5, title: 'Properties of Sound', titleAr: 'خصائص الصوت', icon: '🔔', tint: '#e6e3fb', ready: false,
    lessons: ['How Sound is Produced', 'Volume of Sound and Vibration', 'How Sound Travels'] },

  { id: 'g4c6', grade: 'g4', n: 6, title: 'The Force of Wind', titleAr: 'قوة الرياح', icon: '⛵', tint: '#dff1f8', ready: false,
    lessons: ['Wind-Powered Cars', 'Sail Size'] },

  { id: 'g4c7', grade: 'g4', n: 7, title: 'The Force of Rubber', titleAr: 'قوة المطاط', icon: '🏹', tint: '#fde3dc', ready: false,
    lessons: ['Rubber Band-Powered Cars', 'Power of Rubber Bands'] },

  { id: 'g4c8', grade: 'g4', n: 8, title: 'Soil, Water, and Life in Egypt', titleAr: 'التربة والماء والحياة في مصر', icon: '🏺', tint: '#f3e3c8', ready: false,
    lessons: ['The Relationship Between the Ground and Water', 'Transporting Giant Stone Statues'] },

  /* ---------- Grade 6 (school book 2026/2027, 10 chapters in the first term) ---------- */
  { id: 'g6c1', grade: 'g6', n: 1, title: 'Conditions for Burning', titleAr: 'شروط الاحتراق', icon: '🕯️', tint: '#ffe9c9', ready: true,
    lessons: ['How Things Burn and Air', 'The Role of Oxygen', 'Air After Burning'],
    lessonsAr: ['الهواء واحتراق الأشياء', 'دور الأكسجين', 'الهواء بعد الاحتراق'],
    questions: 'science/questions_g6c1.js', questionsAr: 'science/questions_g6c1_ar.js', art: 'science/g6_art.js',
    game: { href: 'flame.html', name: 'Flame Lab', nameAr: 'معمل اللهب', icon: '🕯️', hint: 'Keep the candle burning, then find the gas that helps things burn!', hintAr: 'خلّي الشمعة تستمر في الاحتراق، واكتشف الغاز اللي بيساعد على الاحتراق!' },
    map: { img: 'science/assets/map_g6c1.svg', stops: [[24.5, 82.5, 'right'], [62.1, 70, 'left'], [34.3, 52.9, 'right'], [65.4, 36.6, 'left'], [45.8, 15.6, 'below']] },
    cover: 'science/assets/map_g6c1.svg', quizBg: 'science/assets/bg_g6c1.svg' },

  { id: 'g6c2', grade: 'g6', n: 2, title: 'Respiration', titleAr: 'التنفس', icon: '🫁', tint: '#dff1f8', ready: true,
    lessons: ['How Breathing Works', 'How Lungs Work'],
    lessonsAr: ['كيف يحدث التنفس؟', 'كيف تعمل الرئتان؟'],
    questions: 'science/questions_g6c2.js', questionsAr: 'science/questions_g6c2_ar.js', art: 'science/g6_body.js',
    game: { href: 'breath.html', name: 'Breath Lab', nameAr: 'معمل التنفس', icon: '🫁', hint: 'Test the air you breathe out, then follow the oxygen into the blood!', hintAr: 'اختبر هواء الزفير بماء الجير، وتتبَّع الأكسجين لحد ما يوصل للدم!' },
    map: { img: 'science/assets/map_g6c2.svg', stops: [[24.5, 82.5, 'right'], [62.1, 70, 'left'], [34.3, 52.9, 'right'], [65.4, 36.6, 'left'], [45.8, 15.6, 'below']] },
    cover: 'science/assets/map_g6c2.svg', quizBg: 'science/assets/bg_g6c2.svg' },

  { id: 'g6c3', grade: 'g6', n: 3, title: 'Digestion', titleAr: 'الهضم', icon: '🍎', tint: '#fde3dc', ready: true,
    lessons: ['Where Food Goes', 'The Function of Saliva', 'How Absorption Works'],
    lessonsAr: ['أين يذهب الطعام؟', 'وظيفة اللعاب', 'كيف يتم الامتصاص؟'],
    questions: 'science/questions_g6c3.js', questionsAr: 'science/questions_g6c3_ar.js', art: 'science/g6_body.js',
    game: { href: 'foodtrip.html', name: 'Food Journey', nameAr: 'رحلة الطعام', icon: '🍎', hint: 'Follow a bite of food through the body, then find out what saliva does!', hintAr: 'تتبَّع لقمة الطعام جوه الجسم، واكتشف وظيفة اللعاب!' },
    map: { img: 'science/assets/map_g6c3.svg', stops: [[24.5, 82.5, 'right'], [62.1, 70, 'left'], [34.3, 52.9, 'right'], [65.4, 36.6, 'left'], [45.8, 15.6, 'below']] },
    cover: 'science/assets/map_g6c3.svg', quizBg: 'science/assets/bg_g6c3.svg' },

  { id: 'g6c4', grade: 'g6', n: 4, title: 'Circulation and Excretion', titleAr: 'الدورة الدموية والإخراج', icon: '❤️', tint: '#fde3ea', ready: false,
    lessons: ['Heart and Blood', 'How the Kidneys Work', 'Various Organs'] },

  { id: 'g6c5', grade: 'g6', n: 5, title: 'Photosynthesis', titleAr: 'البناء الضوئي', icon: '🌿', tint: '#e3f3d0', ready: false,
    lessons: ['Sunlight and Starch', 'Gas Exchange'] },

  { id: 'g6c6', grade: 'g6', n: 6, title: 'Transportation of Water in Plants', titleAr: 'انتقال الماء في النبات', icon: '💧', tint: '#dff1f8', ready: false,
    lessons: ['Transpiration', 'The Path of Water'] },

  { id: 'g6c7', grade: 'g6', n: 7, title: 'Food Chain', titleAr: 'السلسلة الغذائية', icon: '🦅', tint: '#f6e7c4', ready: false,
    lessons: ['Food Chain', 'Living Organisms, Air, and Water'] },

  { id: 'g6c8', grade: 'g6', n: 8, title: 'Egypt Special Part 1', titleAr: 'السلاسل الغذائية في مصر', icon: '🏜️', tint: '#f3e3c8', ready: false,
    lessons: ['Desert and Nile Food Chains'] },

  { id: 'g6c9', grade: 'g6', n: 9, title: 'Properties of Solutions', titleAr: 'خصائص المحاليل', icon: '🧪', tint: '#e6e3fb', ready: false,
    lessons: ['Grouping Solutions', 'What Is Dissolved in Solutions'] },

  { id: 'g6c10', grade: 'g6', n: 10, title: 'Reaction between Solutions and Metals', titleAr: 'تفاعل المحاليل مع الفلزات', icon: '⚗️', tint: '#e9eef2', ready: false,
    lessons: ['Aqueous Solutions and Metals', 'What Is Left After Evaporation'] },

  /* ---------- Prep 1 (first preparatory, school book "Discover and Learn", 4 units in the first term) ----------
     The preparatory books are made of units («الوحدة»), so a Prep 1 "chapter" is one unit and the pages call it a unit.
     questMax: a unit has many ideas, so each Unit Quest asks this many (every lesson and every Boss idea is always in it). */
  { id: 'p1u1', grade: 'p1', n: 1, title: 'The Matter', titleAr: 'المادة', icon: '⚛️', tint: '#dbeefb', ready: true,
    lessons: ['Structure of the Atom', 'The Periodic Table of Elements', 'Matter and Its Properties', 'Chemical Bonds'],
    lessonsAr: ['تركيب الذرة', 'الجدول الدوري لتصنيف العناصر', 'المادة وخصائصها', 'الروابط الكيميائية'],
    questions: 'science/questions_p1u1.js', questionsAr: 'science/questions_p1u1_ar.js', art: 'science/p1_art.js', questMax: 24,
    game: { href: 'atomlab.html', name: 'Atom Lab', nameAr: 'معمل الذرة', icon: '⚛️', hint: 'Build an atom, find it in the periodic table and watch atoms bond!', hintAr: 'ابنِ ذرة، ودوّر على مكانها في الجدول الدوري، وشوف الذرات بترتبط إزاي!' },
    map: { img: 'science/assets/map_p1u1.svg', stops: [[24.5, 82.5, 'right'], [62.1, 70, 'left'], [34.3, 52.9, 'right'], [65.4, 36.6, 'left'], [45.8, 15.6, 'below']] },
    cover: 'science/assets/map_p1u1.svg', quizBg: 'science/assets/bg_p1u1.svg' },

  { id: 'p1u2', grade: 'p1', n: 2, title: 'Force Fields', titleAr: 'مجالات القوى', icon: '🧲', tint: '#ece3fb', ready: false,
    lessons: ['Electric Forces', 'Magnetic Forces', 'Gravitational Forces'],
    lessonsAr: ['القوى الكهربية', 'القوى المغناطيسية', 'قوى الجاذبية'] },

  { id: 'p1u3', grade: 'p1', n: 3, title: 'Living Organisms, Their Structure and Processes', titleAr: 'الكائنات الحية تركيبها وعملياتها', icon: '🦠', tint: '#e2f4dc', ready: false,
    lessons: ['Cells and Life', 'General Characteristics of Living Organisms', 'Microbes'],
    lessonsAr: ['الخلايا والحياة', 'الصفات العامة للكائنات الحية', 'الميكروبات'] },

  { id: 'p1u4', grade: 'p1', n: 4, title: 'The (Earth - Sun - Moon) System', titleAr: 'نظام (الأرض - الشمس - القمر)', icon: '🌍', tint: '#e3ecfb', ready: false,
    lessons: ['The Earth and the Solar System', 'Lunar Eclipse'],
    lessonsAr: ['الأرض والنظام الشمسي', 'خسوف القمر'] },

  /* ---------- Prep 2 (second preparatory, school book "Discover and Learn", 4 units in the first term) ----------
     Units, like Prep 1. Unit 1 has its Arabic questions only (the English book has not been added yet), so it opens for the Arabic track. */
  { id: 'p2u1', grade: 'p2', n: 1, title: 'Matter and Energy', titleAr: 'المادة والطاقة', icon: '🌡️', tint: '#dcefff', ready: true,
    lessons: ['States of Matter', 'Changes in the States of Matter', 'Internal Energy and Temperature', 'Methods of Heat Transfer'],
    lessonsAr: ['حالات المادة', 'تغير حالات المادة', 'الطاقة الداخلية ودرجة الحرارة', 'طرق انتقال الحرارة'],
    questions: 'science/questions_p2u1.js', questionsAr: 'science/questions_p2u1_ar.js', art: 'science/p2_art.js', questMax: 24,
    game: { href: 'heatlab.html', name: 'Heat Lab', nameAr: 'معمل الحرارة', icon: '🌡️', hint: 'Heat ice until it boils, watch the particles and race two thermometers!', hintAr: 'سخّن الثلج لحد ما يغلي، وشوف الجسيمات، واعمل سباق بين ترمومترين!' },
    map: { img: 'science/assets/map_p2u1.svg', stops: [[24.5, 82.5, 'right'], [62.1, 70, 'left'], [34.3, 52.9, 'right'], [65.4, 36.6, 'left'], [45.8, 15.6, 'below']] },
    cover: 'science/assets/map_p2u1.svg', quizBg: 'science/assets/bg_p2u1.svg' },

  { id: 'p2u2', grade: 'p2', n: 2, title: 'Matter and Chemical Reactions', titleAr: 'المادة والتفاعلات الكيميائية', icon: '⚗️', tint: '#efe3fb', ready: false,
    lessons: ['Chemical Reactions', 'The Chemical Equation', 'Nutrition Chemistry'],
    lessonsAr: ['التفاعلات الكيميائية', 'المعادلة الكيميائية', 'كيمياء التغذية'] },

  { id: 'p2u3', grade: 'p2', n: 3, title: 'Energy Flow in Photosynthesis and Cellular Respiration', titleAr: 'تدفق الطاقة في عمليتي البناء الضوئي والتنفس الخلوي', icon: '🌿', tint: '#e2f4dc', ready: false,
    lessons: ['Photosynthesis', 'Cellular Respiration'],
    lessonsAr: ['عملية البناء الضوئي', 'عملية التنفس الخلوي'] },

  { id: 'p2u4', grade: 'p2', n: 4, title: 'Geological Processes', titleAr: 'العمليات الجيولوجية', icon: '🏔️', tint: '#e3ecfb', ready: false,
    lessons: ['Changing the Earth’s Surface', 'Formation of Minerals and Soil'],
    lessonsAr: ['تغير سطح الأرض', 'تكوين المعادن والتربة'] },

  /* ---------- Math (school book 2026/2027, first term). Units, like the preparatory books (SI.isUnits: every Math chapter is a unit) ----------
     Grade 5, Unit 1: two concepts, 11 lessons. The English book file starts at Lesson 1, so the English unit title is the Arabic one translated. */
  { id: 'm5c1', subject: 'math', grade: 'g5', n: 1, title: 'Place Value of Decimals and Operations', titleAr: 'القيمة المكانية للأعداد العشرية وحسابها', icon: '🔢', tint: '#ffe6cc', ready: true,
    art: 'math/m5_art.js', questMax: 24, questions: 'math/questions_m5c1.js',
    game: { href: 'math-decimals.html', name: "Decimal Dock", nameAr: "مرسى الأعداد العشرية", icon: '⛵', hint: 'Read grids, move digits, round on the number line and add and subtract decimals with models', hintAr: 'اقرأ الشبكات وحرّك الأرقام وقرّب على خط الأعداد واجمع واطرح الأعداد العشرية بالنماذج' },
    map: { img: 'math/assets/map_m5c1.svg', stops: [[25, 82, 'right'], [62, 70, 'left'], [34, 53, 'right'], [65, 37, 'left'], [46, 16, 'below']] },
    cover: 'math/assets/map_m5c1.svg', quizBg: 'math/assets/bg_m5c1.svg',
    lessons: ['Decimals to the Thousandths Place', 'Place Value Shuffle', 'Composing and Decomposing Decimals', 'Comparing Decimals', 'Rounding Decimals', 'Estimating Decimal Sums', 'Modeling Decimal Addition', 'Modeling Decimals Subtraction', 'Estimating Decimal Differences', 'Subtracting to the Thousandths Place', 'Decimal Story Problems'] }
];

/* Monthly tests ("Reesho's Exam Hall", quiz.html#exam=ID): one paper of 20 marks drawn from several chapters at once.
     parts   : the chapters the test covers. lessons: only these lessons of the chapter. max: at most this many questions
               from the chapter, chance: how often the chapter is in a paper (both for a chapter the test only touches).
               A chapter is asked in the player's language only when it has a questions file for that language.
     grade   : the grade the test belongs to (Grade 5 when missing).
     minParts: the test card shows once this many of its chapters are open (2 when missing; 1 for a test of one unit).
   Enrichment ideas (bonus) are left out of a test; exam extras from the outside guide (bonus + guide) are included. */
window.EXAMS = [
  { id: 'oct', title: 'October Monthly Test', titleAr: 'امتحان شهر أكتوبر', icon: '📝',
    parts: [{ ch: 'ch1' }, { ch: 'ch2' }, { ch: 'ch3' }, { ch: 'ch4', lessons: [1], max: 1, chance: .5 }] },
  { id: 'g4m1', grade: 'g4', title: 'Monthly Test', titleAr: 'امتحان الشهر', icon: '📝',
    parts: [{ ch: 'g4c1' }, { ch: 'g4c2' }, { ch: 'g4c3' }] },
  { id: 'g6m1', grade: 'g6', title: 'Monthly Test', titleAr: 'امتحان الشهر', icon: '📝',
    parts: [{ ch: 'g6c1' }, { ch: 'g6c2' }, { ch: 'g6c3' }] },
  { id: 'p1oct', grade: 'p1', minParts: 1, title: 'October Monthly Test', titleAr: 'امتحان شهر أكتوبر', icon: '📝',
    parts: [{ ch: 'p1u1', lessons: [1, 2, 3] }] },
  { id: 'p2oct', grade: 'p2', minParts: 1, title: 'October Monthly Test', titleAr: 'امتحان شهر أكتوبر', icon: '📝',
    parts: [{ ch: 'p2u1', lessons: [1, 2, 3] }] }
];
