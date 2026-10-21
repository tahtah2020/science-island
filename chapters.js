/* Motafawek (متفوق) · the subjects, and the chapter list of every subject, grade and track, first term.
   Every subject keeps its files in its own folder (science/: questions, drawings, maps; the game pages stay at the site root).
   A chapter opens for players when `ready` is true. To publish a new chapter, fill in:
     subject   : the subject id in window.SUBJECTS below. A chapter (or test) without it belongs to Science.
                 Chapter ids are unique on the whole site, across subjects: Science keeps ch1, g4c1…; another subject starts with its own prefix (Math: m5c1…, mp1u1…).
     grade     : 'g4' | 'g5' | 'g6' | 'p1' | 'p2'. A chapter without it belongs to Grade 5. A player sees the chapters of their own grade only.
                 Chapter ids are unique on the whole site: Grade 5 uses ch1…, Grade 4 uses g4c1…, Grade 6 uses g6c1…, Prep 1 uses p1u1…, Prep 2 uses p2u1… (units)
     bookOrder : optional: true = the questions of a Quest follow the book (lesson 1, then 2, then 3...; Boss ideas last) instead of a shuffle. Every question of a unit also shows a badge with its lesson
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
  { id: 'studies', title: 'Social Studies', titleAr: 'الدراسات الاجتماعية', icon: '🌍', tint: '#e2f4dc', dir: 'studies', lang: { lang: 'ar', ar: 'ar' } },
  { id: 'arabic', title: 'Arabic', titleAr: 'اللغة العربية', icon: '📖', tint: '#fbe3e3', dir: 'arabic', lang: { lang: 'ar', ar: 'ar' }, hidden: true },
  { id: 'english', title: 'English', titleAr: 'اللغة الإنجليزية', icon: '🔤', tint: '#efe3fb', dir: 'english', lang: { lang: 'en', ar: 'en' } }
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

  { id: 'g6c4', grade: 'g6', n: 4, title: 'Circulation and Excretion', titleAr: 'الدورة الدموية والإخراج', icon: '❤️', tint: '#fde3ea', ready: true,
    questions: 'science/questions_g6c4.js', questionsAr: 'science/questions_g6c4_ar.js', art: 'science/g6_body.js',
    game: { href: 'bloodtrip.html', name: "Blood Express", nameAr: "قطار الدم", icon: '❤️', hint: 'Follow the blood around the body, see how the kidneys clean it, and find where the organs are!', hintAr: 'تتبَّع الدم حول الجسم، واكتشف كيف تنظّفه الكليتان، وأين تقع الأعضاء!' },
    map: { img: 'science/assets/map_g6c4.svg', stops: [[24.5, 82.5, 'right'], [62.1, 70, 'left'], [34.3, 52.9, 'right'], [65.4, 36.6, 'left'], [45.8, 15.6, 'below']] },
    cover: 'science/assets/map_g6c4.svg', quizBg: 'science/assets/bg_g6c4.svg',
    lessons: ['Heart and Blood', 'How the Kidneys Work', 'Various Organs'],
    lessonsAr: ['القلب والدم', 'كيف تعمل الكليتان؟', 'أعضاء مختلفة'] },

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
    art: 'math/m5_art.js', questMax: 24, questionsAr: 'math/questions_m5c1_ar.js', lessonsAr: ['الكسور العشرية حتى جزء من الألف','تغيير القيم المكانية','تكوين الكسور العشرية وتحليلها','مقارنة الكسور العشرية','تقريب الكسور العشرية','تقدير مجموع الأعداد العشرية','نمذجة جمع الكسور العشرية','نمذجة طرح الكسور العشرية','تقدير الفرق بين عددين عشريين','طرح الكسور العشرية حتى جزء من الألف','مسائل كلامية على الكسور العشرية'], questions: 'math/questions_m5c1.js',
    game: { href: 'math-decimals.html', name: "Decimal Dock", nameAr: "مرسى الأعداد العشرية", icon: '⛵', hint: 'Read grids, move digits, round on the number line and add and subtract decimals with models', hintAr: 'اقرأ الشبكات وحرّك الأرقام وقرّب على خط الأعداد واجمع واطرح الأعداد العشرية بالنماذج' },
    map: { img: 'math/assets/map_m5c1.svg', stops: [[25, 82, 'right'], [62, 70, 'left'], [34, 53, 'right'], [65, 37, 'left'], [46, 16, 'below']] },
    cover: 'math/assets/map_m5c1.svg', quizBg: 'math/assets/bg_m5c1.svg',
    lessons: ['Decimals to the Thousandths Place', 'Place Value Shuffle', 'Composing and Decomposing Decimals', 'Comparing Decimals', 'Rounding Decimals', 'Estimating Decimal Sums', 'Modeling Decimal Addition', 'Modeling Decimals Subtraction', 'Estimating Decimal Differences', 'Subtracting to the Thousandths Place', 'Decimal Story Problems'] },

  /* Grade 4 Math, first term 2026/2027. Sources: the Arabic and English school books (each track follows its own book; same content).
     Unit 1: concept 1 "Reinforcing Place Value" (lessons 1-4), concept 2 "Using Place Value" (lessons 5-8). */
  { id: 'mg4u1', subject: 'math', grade: 'g4', n: 1, title: 'Place Value', titleAr: 'القيمة المكانية', icon: '🔢', tint: '#ffe6cc', ready: true,
    lessons: ['Big Numbers', 'Changing Place Values', 'Many Forms to Write Numbers', 'Composing and Decomposing', 'Comparing Big Numbers', 'Comparing Numbers in Multiple Forms', 'Descending and Ascending Numbers', 'Rounding Rules'],
    art: 'math/g4_art.js', questMax: 24, questions: 'math/questions_mg4u1.js', questionsAr: 'math/questions_mg4u1_ar.js',
    game: { href: 'math-placevalue.html', name: "Place Value Nest", nameAr: "عش القيمة المكانية", icon: '🐜', hint: 'Read big numbers in the place value table, move digits, compare, order and round', hintAr: 'اقرأ الأعداد الكبيرة في جدول القيمة المكانية وحرّك الأرقام وقارن ورتّب وقرّب' },
    map: { img: 'math/assets/map_mg4u1.svg', stops: [[25, 82, 'right'], [62, 70, 'left'], [34, 53, 'right'], [65, 37, 'left'], [46, 16, 'below']] },
    cover: 'math/assets/map_mg4u1.svg', quizBg: 'math/assets/bg_mg4u1.svg',
    lessonsAr: ['الأعداد الكبيرة', 'تغيير القيم المكانية', 'صيغ متنوعة لكتابة الأعداد', 'تكوين الأعداد وتحليلها', 'مقارنة الأعداد الكبيرة', 'مقارنة الأعداد في صيغ مختلفة', 'ترتيب الأعداد تنازليًا وتصاعديًا', 'قواعد التقريب'] },
  /* Unit 2: concept 1 "Using Addition and Subtraction Strategies" (lessons 1-3), concept 2 "Solving Multistep Problems" (lessons 4-5). */
  { id: 'mg4u2', subject: 'math', grade: 'g4', n: 2, title: 'Addition and Subtraction Strategies', titleAr: 'إستراتيجيات عمليتي الجمع والطرح', icon: '➕', tint: '#ffe6cc', ready: true,
    lessons: ['Properties of Addition', 'Addition with Regrouping', 'Subtraction with Regrouping', 'Bar Models, Variables, and Story Problems', 'Solving Multistep Story Problems with Addition and Subtraction'],
    questMax: 20, questions: 'math/questions_mg4u2.js', questionsAr: 'math/questions_mg4u2_ar.js',
    game: { href: 'math-addsub.html', name: "Ant Colony Count", nameAr: "مستعمرة النمل الحسابية", icon: '🐜', hint: 'Add and subtract with regrouping, check with estimates and solve multi-step problems', hintAr: 'اجمع واطرح مع إعادة التسمية وتحقق بالتقدير وحل المسائل متعددة الخطوات' },
    map: { img: 'math/assets/map_mg4u2.svg', stops: [[25, 82, 'right'], [62, 70, 'left'], [34, 53, 'right'], [65, 37, 'left'], [46, 16, 'below']] },
    cover: 'math/assets/map_mg4u2.svg', quizBg: 'math/assets/bg_mg4u2.svg',
    lessonsAr: ['خواص عملية الجمع', 'الجمع مع إعادة التسمية', 'الطرح مع إعادة التسمية', 'النماذج الشريطية والمتغيرات والمسائل الكلامية', 'حل مسائل كلامية متعددة الخطوات باستخدام الجمع والطرح'] },

  /* Grade 6 Math, first term 2026/2027. Source: the English school book (Primary 6, Math Term 1), Units 1 and 2 (the official October scope). Only the English file exists so far;
     the Arabic titles and lesson names below are ours until the Arabic book is added. */
  { id: 'mg6u1', subject: 'math', grade: 'g6', n: 1, title: 'Divisibility, Factors, and Multiples', titleAr: 'القابلية للقسمة والعوامل والمضاعفات', icon: '🧮', tint: '#ffe6cc', ready: true,
    lessons: ['Divisibility', 'Factorizing a Number to Its Prime Factors', 'Writing Expressions Using the G.C.F.', 'Analyzing Least Common Multiples'],
    questions: 'math/questions_mg6u1.js', art: 'math/g6_art.js', questMax: 24,
    game: { href: 'math-boxes.html', name: "Food Bank Packers", nameAr: "مُعبّئو بنك الطعام", icon: '📦', hint: 'Share boxes equally, use the divisibility rules, the GCF with a Venn diagram, and the LCM to add fractions', hintAr: 'وزّع الصناديق بالتساوي واستخدم قواعد القابلية للقسمة وع.م.أ مع شكل فن وم.م.أ لجمع الكسور' },
    map: { img: 'math/assets/map_mg6u1.svg', stops: [[25, 82, 'right'], [62, 70, 'left'], [34, 53, 'right'], [65, 37, 'left'], [46, 16, 'below']] },
    cover: 'math/assets/map_mg6u1.svg', quizBg: 'math/assets/bg_mg6u1.svg',
    lessonsAr: ['القابلية للقسمة', 'تحليل العدد إلى عوامله الأولية', 'كتابة العبارات باستخدام ع.م.أ', 'تحليل المضاعف المشترك الأصغر'] },
  { id: 'mg6u2', subject: 'math', grade: 'g6', n: 2, title: 'Rational Numbers', titleAr: 'الأعداد النسبية', icon: '➖', tint: '#ffe6cc', ready: true,
    lessons: ['Using a Number Line to Describe Data', 'Using a Number Line and Symbols to Compare Numbers', 'Analyzing Rational Numbers by Using Models', 'Comparing and Ordering Rational Numbers', 'Exploring Absolute Value', 'Comparing Absolute Values'],
    questions: 'math/questions_mg6u2.js', art: 'math/g6_art.js', questMax: 28,
    game: { href: 'math-climb.html', name: "Climb the Line", nameAr: "تسلّق خط الأعداد", icon: '🧗', hint: 'Climb the number line: opposites, the number sets, ordering and absolute value', hintAr: 'تسلّق خط الأعداد: الأعداد المتعاكسة ومجموعات الأعداد والترتيب والقيمة المطلقة' },
    map: { img: 'math/assets/map_mg6u2.svg', stops: [[25, 82, 'right'], [62, 70, 'left'], [34, 53, 'right'], [65, 37, 'left'], [46, 16, 'below']] },
    cover: 'math/assets/map_mg6u2.svg', quizBg: 'math/assets/bg_mg6u2.svg',
    lessonsAr: ['استخدام خط الأعداد لوصف البيانات', 'استخدام خط الأعداد والرموز لمقارنة الأعداد', 'تحليل الأعداد النسبية باستخدام النماذج', 'مقارنة الأعداد النسبية وترتيبها', 'استكشاف القيمة المطلقة', 'مقارنة القيم المطلقة'] },

  /* ---------- Social Studies (the school book «مصر في قلب العالم» 2026/2027, first term). Units, like Math (SI.isUnits).
     One Arabic book for both tracks: the subject's lang is { lang: 'ar', ar: 'ar' }, so every unit has only a questionsAr file.
     Grade 4: Unit 1 «اتجاهاتنا ترسم خطواتنا» (book pages 10-37), Unit 2 «مدينتنا وحياتنا اليومية», Unit 3 «مصر وطننا». Idea letters: A-D (unit 1). */
  { id: 'sg4u1', subject: 'studies', grade: 'g4', n: 1, title: 'Our Directions Draw Our Steps', titleAr: 'اتجاهاتنا ترسم خطواتنا', icon: '🧭', tint: '#e2f4dc', ready: true,
    lessons: ['Places and Directions Around Us', 'The Map in Our Life', 'The Development of the Map', 'Sources of Gathering Information'],
    questionsAr: 'studies/questions_sg4u1_ar.js', art: 'studies/g4_art.js',
    game: { href: 'studies-compass.html', name: "Compass Trail", nameAr: "رحلة البوصلة", icon: '🧭', hint: 'Find directions with the sun, read plans and maps, and sort sources and rumours.', hintAr: 'حدّد الاتجاهات بالشمس، واقرأ المخططات والخرائط، وصنّف المصادر والشائعات.' },
    map: { img: 'studies/assets/map_sg4u1.svg', stops: [[25, 82, 'right'], [62, 70, 'left'], [34, 53, 'right'], [65, 37, 'left'], [46, 16, 'below']] },
    cover: 'studies/assets/map_sg4u1.svg', quizBg: 'studies/assets/bg_sg4u1.svg',
    lessonsAr: ['الأماكن والاتجاهات من حولنا', 'الخريطة في حياتنا', 'تطور الخريطة', 'مصادر جمع المعلومات'] },

  { id: 'sg4u2', subject: 'studies', grade: 'g4', n: 2, title: 'Our City and Our Daily Life', titleAr: 'مدينتنا وحياتنا اليومية', icon: '🏙️', tint: '#e2f4dc', ready: true,
    lessons: ['How Does Our City Look?', 'The Development of Our City', 'Service Places in Our City', 'Our City in the Future', 'Where Is My Governorate?'],
    questionsAr: 'studies/questions_sg4u2_ar.js', art: 'studies/g4_art.js',
    game: { href: 'studies-city.html', name: "City Planner", nameAr: "مخطط المدينة", icon: '🏙️', hint: 'Plan a city: place the zones, find the service places and read the governorates.', hintAr: 'خطّط المدينة: حدّد المناطق، وادخل الأماكن الخدمية، واقرأ المحافظات.' },
    map: { img: 'studies/assets/map_sg4u2.svg', stops: [[25, 82, 'right'], [62, 70, 'left'], [34, 53, 'right'], [65, 37, 'left'], [46, 16, 'below']] },
    cover: 'studies/assets/map_sg4u2.svg', quizBg: 'studies/assets/bg_sg4u2.svg',
    lessonsAr: ['كيف تبدو مدينتنا؟', 'تطور مدينتنا', 'الأماكن الخدمية في مدينتنا', 'مدينتنا في المستقبل', 'أين تقع محافظتي؟'] },

  { id: 'sg4u3', subject: 'studies', grade: 'g4', n: 3, title: 'Egypt, Our Homeland', titleAr: 'مصر وطننا', icon: '🇪🇬', tint: '#e2f4dc', ready: false,
    lessons: ['The Flag of Our Homeland Egypt', 'Egypt on the World Map', 'The Landforms of Our Beautiful Land', 'Egypt’s Natural and Human Resources', 'Historical Landmarks in Egypt'],
    lessonsAr: ['عَلَم وطننا مصر', 'مصر على خريطة العالم', 'تضاريس أرضنا الجميلة', 'ثروات مصر الطبيعية والبشرية', 'المَعالِم التاريخية في مصر'] },

  /* Social Studies · Grade 5 · Term 1 (the school book «مصر حكاية وطن وحضارة» 2026/2027). Units, one Arabic book for both tracks (lang { lang: 'ar', ar: 'ar' }).
     Unit 1 «مصر موقع متميز وطبيعة متنوعة» (book pages 8-36): 1 موقع مصر الفلكي (8-13) · 2 مظاهر سطح مصر (14-21) · 3 مناخ مصر (22-29) · 4 النباتات الطبيعية والحيوانات البرية (30-35). Idea letters: A-D (one per lesson).
     All four lessons are written (ids A-D). The questions follow the book (bookOrder) and every question carries its lesson badge. The monthly test «sg5oct» covers lessons 1 and 2 only. */
  { id: 'sg5u1', subject: 'studies', grade: 'g5', n: 1, title: 'Egypt: a Distinguished Location and Varied Nature', titleAr: 'مصر موقع متميز وطبيعة متنوعة', icon: '🗺️', tint: '#e2f4dc', ready: true,
    lessons: ['Egypt’s Astronomical Location', 'Egypt’s Surface Features', 'Egypt’s Climate', 'Natural Plants and Wild Animals'],
    questionsAr: 'studies/questions_sg5u1_ar.js', art: 'studies/g5_art.js', bookOrder: true, questMax: 32,
    game: { href: 'studies-egypt.html', name: "Egypt Explorer", nameAr: "مستكشف مصر", icon: '🗺️', hint: 'Read the grid of lines on the map, place Egypt, and travel through its landforms, seasons, climate regions, plants and animals.', hintAr: 'اقرأ شبكة الخطوط على الخريطة، وحدّد موقع مصر، وتجوّل في سطحها وفصولها وأقاليمها المناخية ونباتاتها وحيواناتها.' },
    map: { img: 'studies/assets/map_sg5u1.svg', stops: [[25, 82, 'right'], [62, 70, 'left'], [34, 53, 'right'], [65, 37, 'left'], [46, 16, 'below']] },
    cover: 'studies/assets/map_sg5u1.svg', quizBg: 'studies/assets/bg_sg5u1.svg',
    lessonsAr: ['موقع مصر الفلكي', 'مظاهر سطح مصر', 'مناخ مصر', 'النباتات الطبيعية والحيوانات البرية'] },

  /* Social Studies · Grade 6 · Term 1 (the school book of the Ministry 2026/2027). Units, one Arabic book for both tracks (lang { lang: 'ar', ar: 'ar' }).
     Unit 1 «وطننا العربي (خصائص وتحديات)» (book pages 8-39): 1 وطننا العربي: الموقع والأهمية (8-15) · 2 تضاريس وطننا العربي (16-23) · 3 وطننا العربي: المناخ والنبات الطبيعي (24-29) · 4 التحديات البيئية في وطننا العربي (30-36) · تقييم الوحدة (37-39). Idea letters: A-D (one per lesson).
     The questions follow the book (bookOrder) and every question carries its lesson badge. The monthly test «sg6oct» covers lessons 1-3 (the official October scope). */
  { id: 'sg6u1', subject: 'studies', grade: 'g6', n: 1, title: 'Our Arab Homeland: Features and Challenges', titleAr: 'وطننا العربي (خصائص وتحديات)', icon: '🌍', tint: '#e2f4dc', ready: true,
    lessons: ['Our Arab Homeland: Location and Importance', 'The Landforms of Our Arab Homeland', 'Our Arab Homeland: Climate and Natural Plants', 'Environmental Challenges in Our Arab Homeland'],
    bookOrder: true,
    questionsAr: 'studies/questions_sg6u1_ar.js', art: 'studies/g6_art.js', questMax: 32,
    game: { href: 'studies-arab.html', name: "Arab Homeland Explorer", nameAr: "مستكشف الوطن العربي", icon: '🌍', hint: 'Explore the two wings of the Arab homeland, its borders and water passages, its mountains, plateaus and plains, its climate regions and its environmental challenges.', hintAr: 'استكشف جناحَي الوطن العربي وحدوده وممراته المائية وجباله وهضابه وسهوله وأقاليمه المناخية وتحدياته البيئية.' },
    map: { img: 'studies/assets/map_sg6u1.svg', stops: [[25, 82, 'right'], [62, 70, 'left'], [34, 53, 'right'], [65, 37, 'left'], [46, 16, 'below']] },
    cover: 'studies/assets/map_sg6u1.svg', quizBg: 'studies/assets/bg_sg6u1.svg',
    lessonsAr: ['وطننا العربي (الموقع - الأهمية)', 'تضاريس وطننا العربي', 'وطننا العربي (المناخ - النبات الطبيعي)', 'التحديات البيئية في وطننا العربي'] },

  /* English · Grade 4 · Term 1 (ministry book "English Primary 4", 2026/2027). One English book for both tracks:
     the subject's lang is { lang: 'en', ar: 'en' }, so every unit has only a questions file (no _ar file).
     Unit 1 "The Five Senses" (book pages 7-22). Idea letters: A-E (one per lesson). */
  { id: 'eg4u1', subject: 'english', grade: 'g4', n: 1, title: 'The Five Senses', titleAr: 'الحواس الخمس', icon: '👀', tint: '#efe3fb', ready: true,
    lessons: ['What are the Five Senses?', 'Healthy Habits', 'Story Time: Goha’s Great Meal', 'Writing: Sequence Words', 'Think and Create: A Presentation'],
    questions: 'english/questions_eg4u1.js', art: 'english/g4_art.js',
    game: { href: 'english-senses.html', name: 'Senses Explorer', nameAr: 'مستكشف الحواس', icon: '👀', hint: 'Match the five senses to your body, follow Sarah’s healthy day and Goha’s soup, then race the Speed Round!', hintAr: 'اربط الحواس الخمس بجسمك، وتابع يوم سارة الصحي وحكاية جحا مع الشوربة، وبعدين جرّب جولة السرعة!' },
    map: { img: 'english/assets/map_eg4u1.svg', stops: [[25, 82, 'right'], [62, 70, 'left'], [34, 53, 'right'], [65, 37, 'left'], [46, 16, 'below']] },
    cover: 'english/assets/map_eg4u1.svg', quizBg: 'english/assets/bg_eg4u1.svg',
    lessonsAr: ['ما الحواس الخمس؟', 'العادات الصحية', 'وقت الحكاية: وجبة جحا الرائعة', 'الكتابة: كلمات الترتيب', 'فكّر وابتكر: عرض تقديمي'] },

  /* Units 2-6 of the book (scope and sequence, p. 3-5): locked until their pages arrive. Idea letters will continue from F. */
  { id: 'eg4u2', subject: 'english', grade: 'g4', n: 2, title: 'My Community', titleAr: 'مجتمعي', icon: '🏘️', tint: '#fdebd5', ready: false, lessons: [], lessonsAr: [] },
  { id: 'eg4u3', subject: 'english', grade: 'g4', n: 3, title: 'In Our World', titleAr: 'في عالمنا', icon: '🐘', tint: '#e2f4dc', ready: false, lessons: [], lessonsAr: [] },
  { id: 'eg4u4', subject: 'english', grade: 'g4', n: 4, title: 'Egypt: My Homeland', titleAr: 'مصر وطني', icon: '🏛️', tint: '#fbe9c8', ready: false, lessons: [], lessonsAr: [] },
  { id: 'eg4u5', subject: 'english', grade: 'g4', n: 5, title: 'A Day at Work', titleAr: 'يوم في العمل', icon: '👩‍⚕️', tint: '#e1effb', ready: false, lessons: [], lessonsAr: [] },
  { id: 'eg4u6', subject: 'english', grade: 'g4', n: 6, title: 'The Hundred Dresses', titleAr: 'الفساتين المائة', icon: '👗', tint: '#fbe3e8', ready: false, lessons: [], lessonsAr: [] }
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
  { id: 'sg5oct', subject: 'studies', grade: 'g5', minParts: 1, title: 'October Monthly Test', titleAr: 'امتحان شهر أكتوبر', icon: '📝',
    parts: [{ ch: 'sg5u1', lessons: [1, 2, 3] }] },
  { id: 'sg6oct', subject: 'studies', grade: 'g6', minParts: 1, title: 'October Monthly Test', titleAr: 'امتحان شهر أكتوبر', icon: '📝',
    parts: [{ ch: 'sg6u1', lessons: [1, 2, 3] }] },
  { id: 'mg6oct', subject: 'math', grade: 'g6', minParts: 1, title: 'October Monthly Test', titleAr: 'امتحان شهر أكتوبر', icon: '📝',
    parts: [{ ch: 'mg6u1' }, { ch: 'mg6u2' }] },
  { id: 'sg4oct', subject: 'studies', grade: 'g4', minParts: 1, title: 'October Monthly Test', titleAr: 'امتحان شهر أكتوبر', icon: '📝',
    parts: [{ ch: 'sg4u1' }] },
  { id: 'g4m1', grade: 'g4', minParts: 1, title: 'October Monthly Test', titleAr: 'امتحان شهر أكتوبر', icon: '📝',
    parts: [{ ch: 'g4c3', lessons: [1] }] },
  { id: 'g6oct', grade: 'g6', minParts: 1, title: 'October Monthly Test', titleAr: 'امتحان شهر أكتوبر', icon: '📝',
    parts: [{ ch: 'g6c4' }] },
  { id: 'g6m1', grade: 'g6', title: 'Monthly Test', titleAr: 'امتحان الشهر', icon: '📝',
    parts: [{ ch: 'g6c1' }, { ch: 'g6c2' }, { ch: 'g6c3' }] },
  { id: 'p1oct', grade: 'p1', minParts: 1, title: 'October Monthly Test', titleAr: 'امتحان شهر أكتوبر', icon: '📝',
    parts: [{ ch: 'p1u1', lessons: [1, 2, 3] }] },
  { id: 'eg4oct', subject: 'english', grade: 'g4', minParts: 1, title: 'October Monthly Test', titleAr: 'امتحان شهر أكتوبر', icon: '📝',
    parts: [{ ch: 'eg4u1' }] },
  { id: 'p2oct', grade: 'p2', minParts: 1, title: 'October Monthly Test', titleAr: 'امتحان شهر أكتوبر', icon: '📝',
    parts: [{ ch: 'p2u1', lessons: [1, 2, 3] }] }
];
