/* Science Island · chapter list: Science, first term, Grade 5 and Grade 4 (Languages and Arabic tracks).
   A chapter opens for players when `ready` is true. To publish a new chapter, fill in:
     grade     : 'g4' | 'g5' | 'g6'. A chapter without it belongs to Grade 5. A player sees the chapters of their own grade only.
                 Chapter ids are unique on the whole site: Grade 5 uses ch1…, Grade 4 uses g4c1…
     titleAr   : the chapter title in the Arabic school book (Arabic track)
     questions : file with that chapter's window.IDEAS (for example 'questions_ch2.js')
     questionsAr : the same questions in Arabic for the Arabic track (for example 'questions_ch2_ar.js')
                   A chapter opens for Arabic-track players only when it has questionsAr.
     game      : the chapter's own interactive game { href, name, nameAr, icon, hint, hintAr }
     map       : { img, stops } - stop positions in percent of the picture, in this order:
                 game, Chapter Quest, Daily 5, Review, Champions  ->  [x, y, label side]
     art       : optional script with the chapter's own drawings; it adds the tap pictures of its questions
                 to window.CH_DIAGRAMS (for example 'ch2_art.js') and is loaded before the questions
     cover     : optional picture for the chapter card (otherwise the icon is shown)
     quizBg    : optional background picture for the question pages
     theme     : optional colours, for example { primary:'#2f8f5b', 'primary-d':'#237047' }
   Lesson names follow the school book. */
window.CHAPTERS = [
  { id: 'ch1', n: 1, title: 'Bones and Muscles', titleAr: 'العظام والعضلات', icon: '🦴', tint: '#dff1f8', ready: true,
    lessons: ['Bones and Muscles', 'Structure of Bones', 'Whole Body Skeleton', 'Animal Bodies'],
    lessonsAr: ['العظام والعضلات', 'تركيب العظام', 'الهيكل العظمي الكامل للجسم', 'أجسام الحيوانات'],
    questions: 'questions.js', questionsAr: 'questions_ar.js',
    game: { href: 'arm.html', name: 'Arm Mechanic', nameAr: 'ميكانيكي الذراع', icon: '🦾', hint: 'See how your muscles pull your bones!', hintAr: 'شوف إزاي عضلاتك بتشد عظامك!' },
    map: { img: 'assets/map_island.jpg', stops: [[59.6, 82.9, 'left'], [54.6, 67.1, 'right'], [41.3, 51.4, 'right'], [39.6, 38.1, 'left'], [68.2, 12.5, 'below']] },
    cover: 'assets/map_island.jpg', quizBg: 'assets/bg_park.jpg' },

  { id: 'ch2', n: 2, title: 'Changes in the Seasons', titleAr: 'التغيرات في الفصول', icon: '🍂', tint: '#fdebd3', ready: true,
    lessons: ['Changes over a Year', 'Animals and Temperature'],
    lessonsAr: ['التغيرات خلال السنة', 'الحيوانات ودرجة الحرارة'],
    questions: 'questions_ch2.js', questionsAr: 'questions_ch2_ar.js', art: 'ch2_art.js',
    game: { href: 'seasons.html', name: 'Season Explorer', nameAr: 'مستكشف الفصول', icon: '🌡️', hint: 'Travel through the year and see what the temperature changes!', hintAr: 'رحلة خلال السنة: درجة الحرارة بتغيّر إيه؟' },
    map: { img: 'assets/map_ch2.svg', stops: [[30, 82, 'right'], [63, 68, 'left'], [36, 51, 'right'], [65, 37, 'left'], [44, 14, 'below']] },
    cover: 'assets/map_ch2.svg', quizBg: 'assets/bg_ch2.svg' },

  { id: 'ch3', n: 3, title: 'Conditions for Germination', titleAr: 'شروط الإنبات', icon: '🌱', tint: '#e2f4dc', ready: true,
    lessons: ['Inside the Seed', 'Water and Germination', 'Air and Germination', 'Temperature and Germination', 'Summary of Germination'],
    lessonsAr: ['ما بداخل البذرة', 'الماء والإنبات', 'الهواء والإنبات', 'درجة الحرارة والإنبات', 'ملخص الإنبات'],
    questions: 'questions_ch3.js', questionsAr: 'questions_ch3_ar.js', art: 'ch3_art.js',
    game: { href: 'seedlab.html', name: 'Seed Lab', nameAr: 'معمل البذور', icon: '🧪', hint: 'Open a seed, then find out what seeds need to germinate!', hintAr: 'افتح البذرة واكتشف البذور محتاجة إيه علشان تنبت!' },
    map: { img: 'assets/map_ch3.svg', stops: [[24.5, 82.5, 'right'], [62.1, 70, 'left'], [34.3, 52.9, 'right'], [65.4, 36.6, 'left'], [45.8, 15.6, 'below']] },
    cover: 'assets/map_ch3.svg', quizBg: 'assets/bg_ch3.svg' },

  { id: 'ch4', n: 4, title: 'Conditions for Growth', titleAr: 'شروط النمو', icon: '🌿', tint: '#d9f2e4', ready: false,
    lessons: ['Sunlight and Growth', 'Fertilizer and Growth'],
    questions: 'questions_ch4.js' },   // first part only: used by the Exam Hall until the chapter opens (it still needs its game and map)

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
    questions: 'questions_g4c1.js', questionsAr: 'questions_g4c1_ar.js', art: 'g4_art.js',
    game: { href: 'habitat.html', name: 'Habitat Explorer', nameAr: 'مستكشف المَواطن', icon: '🔍', hint: 'Find where living organisms live, by the Nile and in the desert!', hintAr: 'اكتشف الكائنات الحية عايشة فين: على ضفاف النيل وفي الصحراء!' },
    map: { img: 'assets/map_g4c1.svg', stops: [[24.5, 82.5, 'right'], [62.1, 70, 'left'], [34.3, 52.9, 'right'], [65.4, 36.6, 'left'], [45.8, 15.6, 'below']] },
    cover: 'assets/map_g4c1.svg', quizBg: 'assets/bg_g4c1.svg' },

  { id: 'g4c2', grade: 'g4', n: 2, title: 'How Insects Grow', titleAr: 'كيف تنمو الحشرات؟', icon: '🦋', tint: '#fde3ea', ready: true,
    lessons: ['Eggs and Larvae', 'Pupae and Adults', 'Body Structure of Adults'],
    lessonsAr: ['البيض واليرقات', 'الشرنقة والحشرات البالغة', 'تركيب جسم الحشرات البالغة'],
    questions: 'questions_g4c2.js', questionsAr: 'questions_g4c2_ar.js', art: 'g4_art.js',
    game: { href: 'butterfly.html', name: 'Butterfly Garden', nameAr: 'حديقة الفراشات', icon: '🦋', hint: 'Raise a butterfly from an egg, then find out what makes an insect!', hintAr: 'ربِّ فراشة من أول البيضة، واعرف إيه اللي بيخلّي الحشرة حشرة!' },
    map: { img: 'assets/map_g4c2.svg', stops: [[24.5, 82.5, 'right'], [62.1, 70, 'left'], [34.3, 52.9, 'right'], [65.4, 36.6, 'left'], [45.8, 15.6, 'below']] },
    cover: 'assets/map_g4c2.svg', quizBg: 'assets/bg_g4c2.svg' },

  { id: 'g4c3', grade: 'g4', n: 3, title: 'How Plants Grow', titleAr: 'كيف تنمو النباتات؟', icon: '🌻', tint: '#dff0fb', ready: true,
    lessons: ['Sowing Seeds', 'After Sprouting', 'Flowers and Fruits', 'The Plant Body'],
    lessonsAr: ['زراعة البذور', 'بعد الإنبات', 'الأزهار والثمار', 'أجزاء النبات'],
    questions: 'questions_g4c3.js', questionsAr: 'questions_g4c3_ar.js', art: 'g4_art.js',
    game: { href: 'garden.html', name: 'My Little Garden', nameAr: 'حديقتي الصغيرة', icon: '🌻', hint: 'Sow a seed and grow a sunflower, from sprout to new seeds!', hintAr: 'ازرع بذرة وكبّر عبّاد الشمس، من النبتة الصغيرة لحد البذور الجديدة!' },
    map: { img: 'assets/map_g4c3.svg', stops: [[24.5, 82.5, 'right'], [62.1, 70, 'left'], [34.3, 52.9, 'right'], [65.4, 36.6, 'left'], [45.8, 15.6, 'below']] },
    cover: 'assets/map_g4c3.svg', quizBg: 'assets/bg_g4c3.svg' },

  { id: 'g4c4', grade: 'g4', n: 4, title: 'Properties of Light', titleAr: 'خصائص الضوء', icon: '🔦', tint: '#fff3c4', ready: false,
    lessons: ['How Sunlight Travels', 'Gathering Light', 'Shadows and the Sun (1)', 'Shadows and the Sun (2)', 'Sun and Shade'] },

  { id: 'g4c5', grade: 'g4', n: 5, title: 'Properties of Sound', titleAr: 'خصائص الصوت', icon: '🔔', tint: '#e6e3fb', ready: false,
    lessons: ['How Sound is Produced', 'Volume of Sound and Vibration', 'How Sound Travels'] },

  { id: 'g4c6', grade: 'g4', n: 6, title: 'The Force of Wind', titleAr: 'قوة الرياح', icon: '⛵', tint: '#dff1f8', ready: false,
    lessons: ['Wind-Powered Cars', 'Sail Size'] },

  { id: 'g4c7', grade: 'g4', n: 7, title: 'The Force of Rubber', titleAr: 'قوة المطاط', icon: '🏹', tint: '#fde3dc', ready: false,
    lessons: ['Rubber Band-Powered Cars', 'Power of Rubber Bands'] },

  { id: 'g4c8', grade: 'g4', n: 8, title: 'Soil, Water, and Life in Egypt', titleAr: 'التربة والماء والحياة في مصر', icon: '🏺', tint: '#f3e3c8', ready: false,
    lessons: ['The Relationship Between the Ground and Water', 'Transporting Giant Stone Statues'] }
];

/* Monthly tests ("Reesho's Exam Hall", quiz.html#exam=ID): one paper of 20 marks drawn from several chapters at once.
     parts   : the chapters the test covers. lessons: only these lessons of the chapter. max: at most this many questions
               from the chapter, chance: how often the chapter is in a paper (both for a chapter the test only touches).
               A chapter is asked in the player's language only when it has a questions file for that language.
     grade   : the grade the test belongs to (Grade 5 when missing).
   Enrichment ideas (bonus) are left out of a test; exam extras from the outside guide (bonus + guide) are included. */
window.EXAMS = [
  { id: 'oct', title: 'October Monthly Test', titleAr: 'امتحان شهر أكتوبر', icon: '📝',
    parts: [{ ch: 'ch1' }, { ch: 'ch2' }, { ch: 'ch3' }, { ch: 'ch4', lessons: [1], max: 1, chance: .5 }] },
  { id: 'g4m1', grade: 'g4', title: 'Monthly Test', titleAr: 'امتحان الشهر', icon: '📝',
    parts: [{ ch: 'g4c1' }, { ch: 'g4c2' }, { ch: 'g4c3' }] }
];
