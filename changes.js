/* What changed on the site, newest first. Shown on admin.html under "آخر التعديلات".
   Each item: text (Arabic), and optional links [{label, href}] that open the change directly.
   Preview links: quiz.html#preview=ID.n&lang=ar|en  ·  game stages: arm.html#stage2 / #stage3, seasons.html#stage2 / #stage3
   A link can name its chapter (ch: 'ch2'); without it the chapter chosen in the list on admin.html is used. */
window.CHANGES = [
  { date: '2026-10-27', title: 'Math Grade 5: new adventure «Reesho’s Cage»',
    items: [
      { text: 'Unit 1 adventure: crack the decimal lock before the fox arrives (6 locks, clues made at random, music)' },
      { text: 'New adventure cards on the units page and the unit map', links: [{ label: 'Reesho’s Cage', href: 'math-cage.html', ch: 'm5c1' }] }
    ] },
  { date: '2026-10-26', title: 'تغيير اسم لعبة الوحدة 5 في رياضيات الصف الخامس',
    items: [
      { text: 'لعبة الوحدة 5 أصبح اسمها «مغامرة الكسور العشرية» بدل «نسّاجو خان الخليلي»، بمشهد جديد (طريق مغامرة) وخريطة جديدة، والأسئلة كما هي', links: [{ label: 'اللعبة', href: 'math-adventure.html', ch: 'm5c5' }] }
    ] },
  { date: '2026-10-26', title: 'رياضيات الصف الخامس · الوحدة 5 عمليتا الضرب والقسمة مع الكسور العشرية (المساران)',
    items: [
      { text: 'فتح الوحدة 5: 13 درسًا و47 فكرة و236 صياغة بالعربي والإنجليزي (الأفكار Z11-Z134)، بترتيب الكتاب وعلامة الدرس على كل سؤال', links: [{ label: 'الأسئلة', href: 'quiz.html#preview=m5c5.1', ch: 'm5c5' }] },
      { text: 'لعبة جديدة «مغامرة الكسور العشرية»: تحريك العلامة العشرية، وشبكة الأجزاء من مائة، وملء نموذج المساحة العشري، والتحويل المتري، والقسمة على الكسور العشرية، وجولة سرعة: أكبر أم أصغر؟', links: [{ label: 'اللعبة', href: 'math-adventure.html', ch: 'm5c5' }] },
      { text: 'رسوم جديدة: شبكة 10 × 10، والقفزات على خط الأعداد، وخانات القيمة المكانية؛ والعلامة العشرية في القسمة المطوّلة' }
    ] },
  { date: '2026-10-26', title: 'رياضيات الصف الخامس · الوحدة 4 القسمة على أعداد صحيحة (المساران)',
    items: [
      { text: 'فتح الوحدة 4: 5 دروس و23 فكرة و100 صياغة بالعربي والإنجليزي (الأفكار Y11-Y55)، بترتيب الكتاب وعلامة الدرس على كل سؤال', links: [{ label: 'الأسئلة', href: 'quiz.html#preview=m5c4.1', ch: 'm5c4' }] },
      { text: 'لعبة جديدة «مُعبّئو مخبز السوق»: القسمة بالأجزاء في نموذج المساحة، والخوارزمية، وخطأ أيمن، والتحقق بالضرب، ومعنى الباقي، وجولة سرعة لعدد أرقام خارج القسمة', links: [{ label: 'اللعبة', href: 'math-bakery.html', ch: 'm5c4' }] },
      { text: 'رسوم جديدة: نموذج مساحة المستطيل للقسمة، والقسمة المطوّلة' }
    ] },
  { date: '2026-10-26', title: 'رياضيات الصف الخامس · الوحدة 3 ضرب الأعداد الصحيحة (المساران)',
    items: [
      { text: 'فتح الوحدة 3: 5 دروس و28 فكرة و141 صياغة بالعربي والإنجليزي (الأفكار T-X)، بترتيب الكتاب وعلامة الدرس على كل سؤال', links: [{ label: 'الأسئلة', href: 'quiz.html#preview=m5c3.1', ch: 'm5c3' }] },
      { text: 'لعبة جديدة «مبلّطو الكورنيش»: ملء نموذج المساحة بلاطة بلاطة، وخطأ بدير وخطأ أشرف، والخوارزمية، وجولة سرعة للتقدير', links: [{ label: 'اللعبة', href: 'math-corniche.html', ch: 'm5c3' }] },
      { text: 'رسوم جديدة: نموذج مساحة المستطيل، وشبكة مربعات الوحدة، والضرب الرأسي' }
    ] },
  { date: '2026-10-26', title: 'رياضيات الصف الخامس: الوحدة الثانية «العلاقات بين الأعداد»',
    items: [
      { text: 'الوحدة الثانية كاملة باللغتين: 8 دروس، 35 فكرة، 207 سؤال' },
      { text: 'لعبة جديدة: درب أرقام سيناء' },
      { text: 'رسومات جديدة: النموذج الشريطي وشجرة العوامل ومخطط فن للمضاعفات' },
      { text: 'الوحدات من 3 إلى 6 ظاهرة في القائمة كوحدات قادمة', links: [{ label: 'العب درب أرقام سيناء', href: 'math-sinai.html', ch: 'm5c2' }] }
    ] },
  { date: '2026-10-25', title: 'دراسات الصف الخامس: الوحدة الثالثة «كنوز مصر»',
    items: [
      { text: 'الوحدة الثالثة كاملة: الثروة المعدنية ومصادر الطاقة، موارد المياه، المشروعات القومية (53 فكرة / 210 صياغة)' },
      { text: 'لعبة جديدة «رحلة كنوز مصر» بصور صاحب الموقع', links: [{ label: 'رحلة كنوز مصر', href: 'studies-treasures.html', ch: 'sg5u3' }] }
    ] },
  { date: '2026-10-25', title: 'Social Studies Grade 5: Unit 2 The Ancient Egyptian Civilization',
    items: [
      { text: '42 ideas in four lessons, from the factors of the civilization to the Ptolemies and the Romans' },
      { text: 'Game Time Trip to Ancient Egypt' },
      { text: 'The owner\'s 12 pictures in the tap pictures and the game', links: [{ label: 'Time Trip to Ancient Egypt', href: 'studies-civ.html', ch: 'sg5u2' }] }
    ] },
  { date: '2026-10-25', title: 'English Grade 5: Units 4, 5 and 6',
    items: [
      { text: 'Unit 4 My Community: 22 ideas, game Town and Village Tour' },
      { text: 'Unit 5 Our World, Our Resources: 26 ideas, game Resource Rangers' },
      { text: 'Unit 6 The Talking Earth: 15 ideas, game Everglades Journey' },
      { text: 'The owner\'s 30 pictures in the tap pictures and the games', links: [{ label: 'Town and Village Tour', href: 'english-town.html', ch: 'eg5u4' }, { label: 'Resource Rangers', href: 'english-resources.html', ch: 'eg5u5' }, { label: 'Everglades Journey', href: 'english-everglades.html', ch: 'eg5u6' }] }
    ] },
  { date: '2026-10-25', title: 'الفصل التاسع «دورة الماء» بالعربي',
    items: [
      { text: 'أسئلة الفصل التاسع للمسار العربي بكلمات الكتاب: ٣٠ فكرة' },
      { text: 'نص لعبة «رحلة قطرة الماء» بمصطلحات الكتاب العربي', links: [{ label: 'رحلة قطرة الماء', href: 'waterlab.html', ch: 'ch9' }] }
    ] },
  { date: '2026-10-25', title: 'الفصل التاسع «دورة الماء» للصف الخامس',
    items: [
      { text: 'أسئلة الفصل التاسع بالإنجليزية: ٤ دروس و٣٠ فكرة' },
      { text: 'لعبة «رحلة قطرة الماء» بصور المالك', links: [{ label: 'رحلة قطرة الماء', href: 'waterlab.html', ch: 'ch9' }] }
    ] },
  { date: '2026-10-25', title: 'Scientific term questions are now multiple choice',
    items: [
      { text: 'Every «write the scientific term» question shows the right term and 3 wrong ones to choose from (all subjects, both languages)', links: [{ label: 'Chapter Quest', href: 'map.html', ch: 'ch1' }] }
    ] },
  { date: '2026-10-25', title: 'Weather Station fix',
    items: [
      { text: 'Mission 2: the 15-minute question now shows the reference point and clouds instead of the palm tree', links: [{ label: 'Weather Station', href: 'weatherlab.html?m=2', ch: 'ch8' }] }
    ] },
  { date: '2026-10-25', title: 'الفصل ٨ تغيرات الطقس بالعربي',
    items: [
      { text: 'أسئلة الفصل ٨ بالعربي بلغة كتاب الوزارة (٧٦ سؤالًا)' },
      { text: 'لعبة محطة الطقس بمصطلحات الكتاب العربي', links: [{ label: 'تغيرات الطقس', href: 'quiz.html?ch=ch8', ch: 'ch8' }] }
    ] },
  { date: '2026-10-25', title: 'Grade 5 Science · Chapter 8 Changes in Weather',
    items: [
      { text: 'New chapter 8 (English track): 19 ideas from pages 80-88 plus 5 enrichment ideas from Let\'s Expand and the Column, with the owner\'s 12 pictures' },
      { text: 'New game Weather Station (weatherlab.html)', links: [{ label: 'Weather Station', href: 'weatherlab.html', ch: 'ch8' }] }
    ] },
  { date: '2026-10-25', title: 'Grade 5 Science · Chapter 7 for the Arabic track',
    items: [
      { text: 'Chapter 7 «نمو الحيوانات وتكاثرها» now opens for the Arabic track: 20 ideas from the Arabic book, pages 72-79' },
      { text: 'The game «حضانة الحيوانات» uses the Arabic book\'s terms (حليب الأم، قيد الحياة، محمية الواحات البيضاء الوطنية)', links: [{ label: 'حضانة الحيوانات', href: 'nursery.html', ch: 'ch7' }] }
    ] },
  { date: '2026-10-25', title: 'Grade 5 Science · Chapter 7 Animal Growth and Reproduction',
    items: [
      { text: 'New chapter 7 (English track): 20 ideas from pages 72-79 with the owner\'s 12 animal pictures' },
      { text: 'New game Animal Nursery (nursery.html)', links: [{ label: 'Animal Nursery', href: 'nursery.html', ch: 'ch7' }] }
    ] },
  { date: '2026-10-25', title: 'Real statistics, owner excluded',
    items: [
      { text: 'Every visit now carries grade, track, subject and chapter, so the numbers split by grade and subject' },
      { text: 'Every question sends right/wrong on the first try (most common mistakes); quizzes and games send their duration' },
      { text: 'The owner\'s visits are no longer counted (admin sign-in, Admin player, or ?notrack=1)' }
    ] },
  { date: '2026-10-25', title: '«أكمل» يبدأ من آخر مكان توقف فيه الطفل',
    items: [
      { text: 'مكان التوقف (الفصل والسؤال) يُحفظ على الخادم عند الانتقال لصفحة أخرى أو إغلاق الصفحة، فيكمل الطفل من نفس المكان على أي جهاز' }
    ] },
  { date: '2026-10-25', title: 'حفظ التقدم على الإنترنت ورمز الاستعادة',
    items: [
      { text: 'كل طفل له رمز استعادة من ٨ حروف وأرقام يظهر في صفحة الفصول', links: [{ label: 'صفحة الفصول', href: 'chapters.html' }] },
      { text: 'زر «عندي رمز استعادة» في الصفحة الأولى يعيد كل التقدم على أي جهاز', links: [{ label: 'الصفحة الأولى', href: 'index.html' }] },
      { text: 'دمج ذكي بين نسخة الجهاز ونسخة الخادم يحتفظ بالأعلى في كل وحدة' }
    ] },
  { date: '2026-10-25', title: 'Weather Watch fixes',
    items: [
      { text: 'Sorting games: a wrong first answer now gives a second try' },
      { text: 'Reesho asks a fresh question for every card' },
      { text: 'Ancient Egypt flood card: modern car picture removed' }
    ] },
  { date: '2026-10-25', title: 'English Grade 5 Unit 3: the owner’s pictures',
    items: [
      { text: 'The weather tap picture uses the owner’s pictures (thunderstorm, sandstorm, flood, drought, wildfire, heat wave), cropped without their captions', links: [{ label: 'K2', href: 'quiz.html#preview=K2.1&lang=en', ch: 'eg5u3' }] },
      { text: 'New tap picture: pond, well, fly, frog, boat, mud-brick house. New idea M8 (page 48 «Read, look, and number») and new tap questions in L4 and M5', links: [{ label: 'M8', href: 'quiz.html#preview=M8.1&lang=en', ch: 'eg5u3' }] },
      { text: 'Weather Watch shows the pictures in missions 1, 2, 4 and 5', links: [{ label: 'Missions', href: 'english-weather.html#stage2', ch: 'eg5u3' }] }
    ] },
  { date: '2026-10-24', title: 'English Grade 5 Unit 2: real pictures',
    items: [
      { text: 'Healthy Body Hero and the body tap picture use the real pictures (heart, lungs, muscle, fist, vessels, football, apple, pillow, bones, dumbbell, toothbrush, water)' }
    ] },
  { date: '2026-10-24', title: 'English Grade 5: check link',
    items: [
      { text: 'Games open from a chosen mission with ?m=N' }
    ] },
  { date: '2026-10-24', title: 'English Grade 5: Nile pictures',
    items: [
      { text: 'The Nile tap picture uses the real pictures for the crocodile, water weeds, insect and river' }
    ] },
  { date: '2026-10-24', title: 'English Grade 5: Nile photos',
    items: [
      { text: 'Nile Explorer shows the Nile pictures (water weeds, river, insects, crocodile hunting) in its questions' }
    ] },
  { date: '2026-10-24', title: 'English Grade 5: picture fixes',
    items: [
      { text: 'English Grade 5 games: a drawn Koshari bowl and Giving Tree, each mission shows its own picture, and no picture gives away the answer' }
    ] },
  { date: '2026-10-24', title: 'English Grade 5: Units 1-3',
    items: [
      { text: 'Grade 5 English (both tracks): Food, Nature, and Culture, My Healthy Body and When Nature Changes, with three games and the October test' }
    ] },
  { date: '2026-10-24', title: 'الصف الخامس علوم بالعربي: الفصول ٤ و٥ و٦',
    items: [
      { text: 'أسئلة عربية من الكتاب للفصل ٤ (شروط النمو)، ٥ (من الزهرة للثمرة)، ٦ (نمو الإنسان والتكاثر)' },
      { text: 'توحيد مصطلحات الألعاب مع الكتاب (المجهر، الكربلة) وحروف (أ) و(ب)' }
    ] },
  { date: '2026-10-24', title: 'Chapter 4 game: picture-book screens',
    items: [
      { text: 'Growth Lab now opens with a cover, Key Concepts with pictures, and experiment step cards' },
      { text: 'Check What You Know with picture questions, and a Great Job summary' }
    ] },
  { date: '2026-10-24', title: 'Grade 5 Science: Chapters 4, 5 and 6',
    items: [
      { text: 'Chapter 4 Conditions for Growth: Growth Lab game, 13 ideas (English)' },
      { text: 'Chapter 5 From Flower to Fruit: Flower Lab game with the microscope, 18 ideas (English)' },
      { text: 'Chapter 6 Human Growth and Reproduction: Growth Path game, 15 ideas (English)' }
    ] },
  { date: '2026-10-22', title: 'رياضيات الصف السادس (عربي): الوحدتان الأولى والثانية',
    items: [
      { text: 'أسئلة الوحدة الأولى «قابلية القسمة والعوامل والمضاعفات» من الكتاب العربي (32 فكرة، 202 صيغة)', links: [{ label: 'معاينة الأسئلة', href: 'quiz.html#preview=A1.1&lang=ar', ch: 'mg6u1' }] },
      { text: 'أسئلة الوحدة الثانية «الأعداد النسبية» من الكتاب العربي (38 فكرة، 227 صيغة)، والحروف على خط الأعداد عربية (أ ب ج د هـ)', links: [{ label: 'معاينة الأسئلة', href: 'quiz.html#preview=E1.1&lang=ar', ch: 'mg6u2' }] },
      { text: 'امتحان أكتوبر للصف السادس يفتح الآن للمسار العربي أيضًا، والوحدات 3 إلى 7 مضافة بأسمائها (لم تبدأ بعد)' }
    ] },
  { date: '2026-10-22', title: 'لوحة المتابعة',
    items: [
      { text: 'صفحة جديدة تعرض كل المواد والصفوف والوحدات للمسارين (اللغات والعربي): المنشور، قيد العمل، الناقص، وما لم يبدأ', links: [{ label: 'لوحة المتابعة', href: 'progress.html' }] }
    ] },
  { date: '2026-10-22', title: 'Grade 6 Science (Arabic): Chapter 4 Blood Circulation and Excretion',
    items: [
      { text: 'Arabic questions from the Arabic book, Arabic game, the October test now opens in Arabic too' }
    ] },
  { date: '2026-10-21', title: 'Grade 6 Science (English): Chapter 4 Blood Circulation and Excretion',
    items: [
      { text: '150 questions with pictures, the game Blood Express, October test' }
    ] },
  { date: '2026-10-21', title: 'Grade 6 Math (English): Units 1 and 2',
    items: [
      { text: 'Divisibility, Factors and Multiples and Rational Numbers: 429 questions with pictures, two games, October test' }
    ] },
  { date: '2026-10-21', title: 'دراسات الصف السادس: الوحدة الأولى «وطننا العربي (خصائص وتحديات)»',
    items: [
      { text: 'أسئلة الدروس الأربعة بترتيب الكتاب (55 فكرة، 282 صيغة) مع شارة الدرس على كل سؤال', links: [{ label: 'معاينة الأسئلة', href: 'quiz.html#preview', ch: 'sg6u1' }] },
      { text: 'لعبة «مستكشف الوطن العربي»: الجناحان والحدود والممرات المائية والتضاريس والأقاليم المناخية والتحديات البيئية', links: [{ label: 'اللعبة', href: 'studies-arab.html', ch: 'sg6u1' }] },
      { text: 'امتحان شهر أكتوبر للصف السادس (sg6oct) على الدروس 1 إلى 3', links: [{ label: 'الامتحان', href: 'quiz.html#exam=sg6oct', ch: 'sg6u1' }] }
    ] },
  { date: '2026-10-20', title: 'اختبارات أكتوبر حسب مقرر المدرسة',
    items: [
      { text: 'علوم الصف الرابع: الدرس الأول من الفصل الثالث فقط' },
      { text: 'دراسات الصف الخامس: الدروس 1 إلى 3' },
      { text: 'دراسات الصف الرابع: اختبار أكتوبر الوحدة الأولى' }
    ] },
  { date: '2026-10-17', title: 'English Grade 4: units 2-6 listed',
    items: [
      { text: 'The other five English units appear as locked \'Soon\' cards' }
    ] },
  { date: '2026-10-17', title: 'English is shown in English only',
    items: [
      { text: 'The English subject now stays in English for the Arabic track too' }
    ] },
  { date: '2026-10-17', title: 'English Grade 4 · Unit 1: The Five Senses',
    items: [
      { text: 'New English subject: Unit 1 with 29 ideas, the Senses Explorer game and the October Monthly Test', links: [{ label: 'English', href: 'chapters.html', ch: 'eg4u1' }] }
    ] },
  { date: '2026-10-17', title: 'Social Studies shown fully in Arabic',
    items: [
      { text: 'Languages track sees Social Studies in Arabic, right to left, same as the Arabic track' }
    ] },
  { date: '2026-10-17', title: 'Social Studies, Grade 4, Unit 2',
    items: [
      { text: 'Unit 2 «مدينتنا وحياتنا اليومية»: 36 ideas, one game (City Planner), for both tracks' }
    ] },
  { date: '2026-10-17', title: 'Social Studies, Grade 4, Unit 1',
    items: [
      { text: 'Social Studies opens with Unit 1 «اتجاهاتنا ترسم خطواتنا»: 30 ideas, one game (Compass Trail), for both tracks' }
    ] },
  { date: '2026-10-16', title: 'الرياضيات للصف الرابع: النسخة الإنجليزية للوحدتين',
    items: [
      { text: 'ملفا الأسئلة الإنجليزيان للوحدتين الأولى والثانية من الكتاب الإنجليزي، فتفتح الوحدتان لمسار اللغات' }
    ] },
  { date: '2026-10-16', title: 'الرياضيات للصف الرابع: الوحدتان الأولى والثانية',
    items: [
      { text: 'الوحدة الأولى: القيمة المكانية — لعبة عش القيمة المكانية و٢٤ فكرة سؤال' },
      { text: 'الوحدة الثانية: إستراتيجيات الجمع والطرح — لعبة مستعمرة النمل الحسابية و١٦ فكرة سؤال' }
    ] },
  { date: '2026-10-16', title: 'الصفحة الرئيسية أسرع',
    items: [
      { text: 'دمج خطوتي «بطل ولا بطلة» والاسم في شاشة واحدة، فصارت خطوات اللاعب الجديد ٣ بدل ٤.' },
      { text: 'زر «أكمل» للاعب العائد يفتح آخر فصل لعبه.' },
      { text: 'إحصاءات (Google Analytics): onboarding_grade وonboarding_track وonboarding_name وonboarding_done وcontinue_click لمعرفة أين يتوقف الزوار.' }
    ] },
  { date: '2026-10-16', title: 'إحصاءات الاختبارات',
    items: [
      { text: 'الإحصاءات (Google Analytics): quiz_start (بدء اختبار)، quiz_complete (إنهاء اختبار) مع النوع (quest أو daily أو review أو exam) ورقم الفصل والصف. بدون أي اسم.' }
    ] },
  { date: '2026-10-15', title: 'Math: Grade 5 Unit 1 now also on the Arabic track',
    items: [
      { text: 'The Arabic version of the decimals unit is open: 40 ideas and 185 questions worded like the Arabic school book.' }
    ] },
  { date: '2026-10-15', title: 'Math: Grade 5 Unit 1 (Languages track)',
    items: [
      { text: 'Math is open for Grade 5: Unit 1 Place Value of Decimals and Operations, with the Decimal Dock game and 40 question ideas.' },
      { text: 'A new question type: write the number on a number pad.' }
    ] },
  { date: '2026-10-15', title: 'جواهر وخزانة ريشو',
    items: [
      { text: 'كل ٥ نقاط خبرة بتديك جوهرة 💎، والجواهر بتتصرف في خزانة ريشو على قبعات ونظارات وأوشحة وعباءات. ظهور الجواهر في لوحة النتيجة وفي صفحتي الفصول والخريطة.', links: [{ label: 'خزانة ريشو', href: 'wardrobe.html' }] }
    ] },
  { date: '2026-10-14', title: 'الموقع بقى «متفوّق» لكل المواد: اختيار المادة، والعلوم في مجلدها',
    items: [
      { text: 'صفحة الفصول فيها أزرار المواد فوق: «العلوم» مفتوحة، و«الرياضيات» عليها «قريبًا» وبتعرض دعوة قناة التليجرام. اختيار المادة بيتحفظ لكل لاعب، والنقاط والمستوى وأيام السلسلة مشتركة بين كل المواد.', links: [{ label: 'صفحة الفصول', href: 'chapters.html' }] },
      { text: 'اسم الموقع في العناوين بقى «متفوّق» بدل «جزيرة العلوم».' },
      { text: 'من جوه: ملفات أسئلة العلوم ورسوماتها وخرايطها اتنقلت لمجلد science، وصفحات الألعاب فضلت زي ما هي فكل الروابط القديمة شغالة، وتقدم الطلاب المحفوظ زي ما هو.' }
    ] },
  { date: '2026-10-13', title: 'إيقاف شرح ريشو وصوته مؤقتًا',
    items: [
      { text: 'زرار «ليه إجابتي غلط؟» وشرح ريشو المكتوب وصوته اتوقفوا مؤقتًا، لأن الشرح كان فيه أخطاء علمية (زي إن ثعلب الفنك مالوش فرو في باطن قدميه) والنطق لسه مش مظبوط. الطالب لسه بيشوف الشرح الثابت تحت السؤال وبيحاول تاني. أصوات ريشو القصيرة المسجلة (برافو، حاول تاني…) شغالة زي ما هي.', links: [{ label: 'جرّب سؤال ثعلب الفنك', href: 'quiz.html#preview=D5.1&lang=ar', ch: 'g4c1' }] }
    ] },
  { date: '2026-10-13', title: 'الصف الثاني الإعدادي: الوحدة الأولى «المادة والطاقة» للمسار اللغات (الكتاب الإنجليزي)',
    items: [
      { text: 'ملف أسئلة إنجليزي جديد للوحدة الأولى من كتاب «Discover and Learn» الإنجليزي (صفحات ٢–٣٨): نفس الـ٣٦ فكرة ونفس الـ٢٠٤ صياغة ونفس الإجابات زي الملف العربي، لكن كل جملة بكلمات الكتاب الإنجليزي. الوحدة بقت مفتوحة لطلاب اللغات، وامتحان أكتوبر بقى يشتغل لهم كمان.', links: [{ label: 'أول سؤال بالإنجليزي', href: 'quiz.html#preview=S1.1&lang=en', ch: 'p2u1' }, { label: 'سؤال الترموجراف', href: 'quiz.html#preview=H6.3&lang=en', ch: 'p2u1' }] },
      { text: 'أسماء الدروس للمسار اللغات زي الكتاب: الدرس التاني اسمه «Changes in the States of Matter».' },
      { text: 'لعبة «معمل الحرارة» بالإنجليزي اتجربت لآخرها، واتعدلت جملتين على كلام الكتاب («occupies space» و«thermographic camera»).', links: [{ label: 'افتح اللعبة', href: 'heatlab.html', ch: 'p2u1' }] },
      { text: 'خانات الحروف في أسئلة «اكتب المصطلح» بقت أضيق شوية لما الكلمة تكون طويلة (١٢ حرف أو أكتر زي Compressibility) عشان تيجي في شاشة الموبايل.' },
      { text: 'ملاحظة للمراجعة العلمية: سؤال الجدول في الفكرة S11 اتغيرت أعمدته في الإنجليزي لـ «No mass / Solid / Gas / Liquid» عشان تيجي في الموبايل، ونفس الإجابات.' }
    ] },
  { date: '2026-10-13', title: 'الصف الثاني الإعدادي: أسئلة الكتاب الناقصة في الدرس الرابع',
    items: [
      { text: 'فكرة جديدة H8 «الحرارة ودرجة الحرارة، والخلط حتى الاتزان» بأربع صياغات: علّل اختلاف الحرارة عن درجة الحرارة، واختيار الرسم البياني عند خلط ماء ٤٠ درجة مع ماء ٥ درجات (صورة جديدة بأربعة رسوم)، وأي الجسمين (X) و(Y) متوسط طاقة حركة جسيماته أكبر. كلها من أسئلة الكتاب صفحتي ٣٦ و٣٨.', links: [{ label: 'الرسوم الأربعة', href: 'quiz.html#preview=H8.2&lang=ar', ch: 'p2u1' }, { label: 'علّل', href: 'quiz.html#preview=H8.1&lang=ar', ch: 'p2u1' }] }
    ] },
  { date: '2026-10-13', title: 'الصف الثاني الإعدادي: الوحدة الأولى «المادة والطاقة» (عربي) + امتحان شهر أكتوبر',
    items: [
      { text: 'زرار «الصف الثاني الإعدادي» في الصفحة الرئيسية. زي أولى إعدادي، الموقع بيقول «الوحدة» و«تحدي الوحدة». الوحدة الأولى مفتوحة للمسار العربي، والوحدات ٢ و٣ و٤ «قريبًا».', links: [{ label: 'الرئيسية', href: 'index.html' }] },
      { text: 'الوحدة الأولى «المادة والطاقة»: ٣٥ فكرة من كتاب «اكتشف وتعلم» العربي (الدروس الأربعة: حالات المادة، تغير حالات المادة، الطاقة الداخلية ودرجة الحرارة، طرق انتقال الحرارة، صفحات ٢–٣٨) بـ ٢٠٠ صياغة. التحدي الواحد بيسأل ٢٤ فكرة من كل الدروس.', links: [{ label: 'الخريطة', href: 'map.html', ch: 'p2u1' }, { label: 'كل الصياغات', href: 'quiz.html#preview&lang=ar', ch: 'p2u1' }] },
      { text: 'المسار اللغات: الوحدة لسه «قريبًا» لحد ما الكتاب الإنجليزي يتضاف. الموقع بقى يفتح أي وحدة بس باللغة اللي ليها أسئلة.' },
      { text: 'لعبة «معمل الحرارة»: جسيمات الصلب والسائل والغاز، ثم تسخين ثلج من −٢٠ لحد الغليان والمنحنى بيترسم قدام الطالب (ثابت عند صفر وعند ١٠٠)، ثم «نظام مفتوح ولا مغلق ولا معزول؟»، ثم سباق الحرارة (ماء أقل وماء أكثر، زيت وماء، ليه الماء في الرادياتير)، ثم إناء على النار: التوصيل والحمل والإشعاع، ثم جولة سرعة «توصيل، حمل، أم إشعاع؟».', links: [{ label: 'اللعبة', href: 'heatlab.html', ch: 'p2u1' }, { label: 'المرحلة ٢', href: 'heatlab.html#stage2', ch: 'p2u1' }, { label: 'المرحلة ٣', href: 'heatlab.html#stage3', ch: 'p2u1' }] },
      { text: '«لجنة ريشو»: امتحان شهر أكتوبر من ٢٠ درجة على الوحدة الأولى (الدروس ١ و٢ و٣، زي أولى إعدادي).', links: [{ label: 'افتح اللجنة', href: 'quiz.html#exam=p2oct', ch: 'p2u1' }] },
      { text: '٧ صور ضغط جديدة مرسومة بالكود: جسيمات الحالات الثلاث، المحاقن الثلاثة، أسهم تحولات المادة، منحنى تسخين الماء، الأنظمة الثلاثة، الملاعق الثلاث، الإناء على النار. مفيش أي صورة منقولة من الكتاب.', links: [{ label: 'تحولات المادة', href: 'quiz.html#preview=C1.1&lang=ar', ch: 'p2u1' }, { label: 'منحنى التسخين', href: 'quiz.html#preview=C2.1&lang=ar', ch: 'p2u1' }, { label: 'الإناء على النار', href: 'quiz.html#preview=H7.1&lang=ar', ch: 'p2u1' }] },
      { text: 'ملاحظة للمراجعة العلمية: الكتاب مابيكتبش نتيجة نشاط ساقي الحديد والنحاس (صفحة ٣٣)، فمفيش سؤال بيسأل أنهي ساق دبابيسها تقع الأول. سؤال النحاس والزجاج مأخوذ من تقييم الدرس صفحة ٣٨.' }
    ] },
  { date: '2026-10-12', title: 'الصف الأول الإعدادي: الوحدة الأولى «المادة» عربي ولغات + امتحان شهر أكتوبر',
    items: [
      { text: 'زرار «الصف الأول الإعدادي» في الصفحة الرئيسية. كتاب الإعدادي مقسَّم وحدات، فالموقع بيقول «الوحدة» و«تحدي الوحدة» و«اختر الوحدة» بدل «الفصل». الوحدة الأولى مفتوحة والوحدات ٢ و٣ و٤ «قريبًا».', links: [{ label: 'الرئيسية', href: 'index.html' }] },
      { text: 'الوحدة الأولى «المادة»: ٣٣ فكرة من كتاب «اكتشف وتعلم» (الدروس الأربعة: تركيب الذرة، الجدول الدوري، المادة وخصائصها، الروابط الكيميائية، صفحات ٢–٣١) بـ ١٨٥ صياغة، وفكرتان إثرائيتان (رذرفورد ومندليف). عربي وإنجليزي. التحدي الواحد بيسأل ٢٤ فكرة من كل الدروس.', links: [{ label: 'الخريطة', href: 'map.html', ch: 'p1u1' }, { label: 'كل الصياغات عربي', href: 'quiz.html#preview&lang=ar', ch: 'p1u1' }, { label: 'English', href: 'quiz.html#preview&lang=en', ch: 'p1u1' }] },
      { text: 'لعبة «معمل الذرة»: بناء ذرة صوديوم (النواة، العدد الذري والكتلي، النيوترونات، ملء المستويات K و L و M)، ثم مكان Na و Cl و Ne في الجدول الدوري من التوزيع الإلكتروني، ثم الترابط الأيوني في كلوريد الصوديوم والتساهمي في كلوريد الهيدروجين و O=O و N≡N، ثم «خاصية فيزيائية ولا كيميائية؟»، ثم جولة سرعة «عنصر، مركب، أم مخلوط؟».', links: [{ label: 'اللعبة', href: 'atomlab.html', ch: 'p1u1' }, { label: 'المرحلة ٢', href: 'atomlab.html#stage2', ch: 'p1u1' }, { label: 'المرحلة ٣', href: 'atomlab.html#stage3', ch: 'p1u1' }] },
      { text: '«لجنة ريشو»: امتحان شهر أكتوبر من ٢٠ درجة على الوحدة الأولى (الدروس ١ و٢ و٣).', links: [{ label: 'افتح اللجنة', href: 'quiz.html#exam=p1oct', ch: 'p1u1' }] },
      { text: '٨ صور ضغط جديدة مرسومة بالكود: الذرة، مستويات الطاقة، فئات الجدول الدوري، المجموعات، صناديق الجزيئات، الكأسان، تمثيل لويس للروابط، سلاسل الكربون. مفيش أي صورة منقولة من الكتاب.', links: [{ label: 'الذرة', href: 'quiz.html#preview=A3.1&lang=ar', ch: 'p1u1' }, { label: 'الروابط', href: 'quiz.html#preview=B3.3&lang=ar', ch: 'p1u1' }] },
      { text: 'ملاحظة للمراجعة العلمية: الكتاب بيذكر فيتامين «د» ضمن جزيئات فيها آلاف الذرات (الحقيقي حوالي ٧٠ ذرة)، فالسؤال ده اتكتب بالبلاستيك والهيموجلوبين بس.' }
    ] },
  { date: '2026-10-12', title: 'الصف السادس: الفصلان الثاني «التنفس» والثالث «الهضم» عربي وإنجليزي + امتحان الشهر',
    items: [
      { text: 'الفصل الثاني «التنفس»: ١٥ فكرة من كتاب الوزارة ٢٠٢٦/٢٠٢٧ (الدرسان ٢-١ و٢-٢، صفحات ١٨–٢٣) بـ ٧٨ صياغة. الفصل ليس فيه «هيَّا نتوسَّع»، فلا توجد أفكار إثرائية.', links: [{ label: 'الخريطة', href: 'map.html', ch: 'g6c2' }, { label: 'كل الصياغات عربي', href: 'quiz.html#preview&lang=ar', ch: 'g6c2' }, { label: 'English', href: 'quiz.html#preview&lang=en', ch: 'g6c2' }] },
      { text: 'لعبة «معمل التنفس»: كيسان (هواء الزفير وهواء الغرفة) مع ماء الجير، ثم مسار الهواء إلى الرئتين، ثم تبادل الغازات في صورة مكبَّرة، ثم الزفير وخياشيم الأسماك، ثم جولة سرعة «الأكسجين أم ثاني أكسيد الكربون؟».', links: [{ label: 'اللعبة', href: 'breath.html', ch: 'g6c2' }, { label: 'المرحلة ٢', href: 'breath.html#stage2', ch: 'g6c2' }, { label: 'المرحلة ٣', href: 'breath.html#stage3', ch: 'g6c2' }] },
      { text: 'الفصل الثالث «الهضم»: ٢٠ فكرة (الدروس ٣-١ إلى ٣-٣، صفحات ٢٤–٣٣) بـ ١٢٠ صياغة، و٣ أفكار إثرائية عن الكبد من «هيَّا نتوسَّع».', links: [{ label: 'الخريطة', href: 'map.html', ch: 'g6c3' }, { label: 'كل الصياغات عربي', href: 'quiz.html#preview&lang=ar', ch: 'g6c3' }, { label: 'English', href: 'quiz.html#preview&lang=en', ch: 'g6c3' }] },
      { text: 'لعبة «رحلة الطعام»: لقمة خبز من الفم إلى فتحة الشرج، ثم تجربة اللعاب والنشا (٤٠ درجة مئوية ومحلول اليود)، ثم المنشفة والخملات، ثم أين تذهب العناصر الغذائية (الدم والكبد)، ثم جولة سرعة «أي عضو؟».', links: [{ label: 'اللعبة', href: 'foodtrip.html', ch: 'g6c3' }, { label: 'المرحلة ٢', href: 'foodtrip.html#stage2', ch: 'g6c3' }, { label: 'المرحلة ٣', href: 'foodtrip.html#stage3', ch: 'g6c3' }] },
      { text: '«لجنة ريشو» للصف السادس: امتحان الشهر من ٢٠ درجة على الفصول ١ و٢ و٣.', links: [{ label: 'افتح اللجنة', href: 'quiz.html#exam=g6m1', ch: 'g6c1' }] },
      { text: '٧ صور ضغط جديدة مرسومة بالكود (الكيسان وماء الجير، الرئتان والقصبة الهوائية، تبادل الغازات، القناة الهضمية، أنبوبتا اللعاب، جدار الأمعاء بالخملات، المنشفة). مفيش أي صورة منقولة من الكتاب.', links: [{ label: 'القناة الهضمية', href: 'quiz.html#preview=D3.1&lang=ar', ch: 'g6c3' }, { label: 'تبادل الغازات', href: 'quiz.html#preview=L3.6&lang=ar', ch: 'g6c2' }] },
      { text: 'ملاحظات للمراجعة العلمية: (١) الكتاب مابيكتبش نتيجة كيس هواء الغرفة، فسؤال الصورة بيقول «الكيس الذي به كمية أقل من ثاني أكسيد الكربون». (٢) «هواء الزفير فيه أكسجين أقل» مأخوذة من «للحصول على الأكسجين» وتدريب صفحة ٢٣. (٣) الكتاب الإنجليزي بيقول الكبد يفتِّت المواد الضارة «لتخرج مع البول»، والعربي مابيذكرش البول، فالسؤال بالجزء المشترك بس. (٤) أنبوبتا تجربة اللعاب: «أ» (نشا + ماء) و«ب» (نشا + لعاب) زي الكتاب العربي.' }
    ] },
  { date: '2026-10-12', title: 'دعوة خفيفة لمتابعة قناة «متفوّق» على تليجرام',
    items: [
      { text: 'الفصول اللي لسه «قريبًا» بقت بتتضغط: ريشو بيقول إن الفصل جاي قريب، وإن الإعلان عنه هيكون في قناة تليجرام (t.me/motafawek). الكلام للطفل، والدعوة لبابا أو ماما.', links: [{ label: 'فصول الصف السادس', href: 'chapters.html', ch: 'g6c1' }] },
      { text: 'بعد ما الطفل يقيّم الفصل تقييم كويس (٣ وشوش فأكتر) ريشو بيعرض القناة مرة واحدة. التقييم الضعيف مابيظهرش بعده حاجة.' },
      { text: 'القواعد: الدعوة ماتظهرش أكتر من مرة في الأسبوع، ولو الطفل ضغط «مش دلوقتي» تختفي ٣٠ يوم، ولو ضغط «افتح القناة» ماتظهرش تاني على الجهاز ده. مفيش نقط ولا نجوم مقابل الاشتراك، ومابتظهرش وسط اللعب.' },
      { text: 'زرار ثابت للقناة أسفل الصفحة الرئيسية، وكارت «تابعوا الجديد على تليجرام» في صفحة «تواصل معنا».', links: [{ label: 'الرئيسية', href: 'index.html' }, { label: 'تواصل معنا', href: 'contact.html' }] },
      { text: 'الإحصاءات (Google Analytics): telegram_shown (الدعوة ظهرت)، telegram_click (ضغط على القناة)، telegram_later (مش دلوقتي)، ومع كل واحد المكان: soon أو rating أو home أو contact.' },
    ] },
  { date: '2026-10-12', title: 'الصف السادس: الفصل الأول «شروط الاحتراق» عربي وإنجليزي',
    items: [
      { text: 'زرار «الصف السادس» في الصفحة الرئيسية اتفتح، وقائمة فصوله العشرة ظاهرة (الفصل الأول مفتوح والباقي «قريبًا»).', links: [{ label: 'الرئيسية', href: 'index.html' }] },
      { text: 'الفصل الأول «شروط الاحتراق»: ١٨ فكرة من كتاب الوزارة ٢٠٢٦/٢٠٢٧ (الدروس ١-١ إلى ١-٣، صفحات ٦–١٤) بـ ١٠٣ صياغات، و٤ أفكار إثرائية من «هيَّا نتوسَّع» والعمود الإثرائي. عربي وإنجليزي.', links: [{ label: 'الخريطة', href: 'map.html', ch: 'g6c1' }, { label: 'كل الصياغات عربي', href: 'quiz.html#preview&lang=ar', ch: 'g6c1' }, { label: 'English', href: 'quiz.html#preview&lang=en', ch: 'g6c1' }] },
      { text: 'لعبة «معمل اللهب»: الشمعة داخل الوعاء الزجاجي (بغطاء، ثم بفتحة في الأسفل، ثم بفتحتين في الأعلى والأسفل)، ثم نسب غازات الهواء، ثم شمعة مشتعلة في أوعية النيتروجين والأكسجين وثاني أكسيد الكربون، ثم تجربة ماء الجير، ثم جولة سرعة «أي غاز هذا؟». المعلِّم بس هو اللي بيشعل الشمعة زي الكتاب.', links: [{ label: 'اللعبة', href: 'flame.html', ch: 'g6c1' }, { label: 'المرحلة ٢', href: 'flame.html#stage2', ch: 'g6c1' }, { label: 'المرحلة ٣', href: 'flame.html#stage3', ch: 'g6c1' }] },
      { text: '٤ صور ضغط جديدة مرسومة بالكود: الأوعية الثلاثة والشمعة، شريط غازات الهواء، أوعية الغازات، ووعاءا ماء الجير.', links: [{ label: 'الأوعية', href: 'quiz.html#preview=A3.3&lang=ar', ch: 'g6c1' }, { label: 'شريط الغازات', href: 'quiz.html#preview=O2.4&lang=ar', ch: 'g6c1' }, { label: 'ماء الجير', href: 'quiz.html#preview=B4.5&lang=ar', ch: 'g6c1' }] },
      { text: 'ملاحظات للمراجعة العلمية: (١) الكتاب بيسأل في النشاط «ماذا يحدث عند صنع فتحة في الأسفل؟» (والغطاء موجود) ومابيكتبش النتيجة. اللعبة بتعرض إن اللهب ينطفئ برضه؛ لأن الهواء لا يتجدد إلا لو دخل وخرج، ودي النتيجة المعروفة للتجربة. السؤال ده في اللعبة فقط ومش في أسئلة التحدي. (٢) العمود الإثرائي صفحة ١٦ مختلف بين الكتابين (فقرة الإضاءة عند المصريين القدماء)، فالأسئلة الإثرائية أخدت المشترك بس: المنفاخ وصهر الذهب، والاحتباس الحراري، ومحطة بنبان. (٣) تدريب الفجوتين صفحة ١١ في الكتاب العربي فيه اختيار ثالث «يقل تدريجيًّا وينطفئ»، واتضاف في النسختين.' }
    ] },
  { date: '2026-10-11', title: 'الصف الرابع: الفصول ١ و٢ و٣ عربي وإنجليزي',
    items: [
      { text: 'زرار «الصف الرابع» في الصفحة الرئيسية اتفتح. كل لاعب بيشوف فصول صفه وامتحان صفه بس، والتقدم ولوحة الأبطال منفصلين عن الصف الخامس.', links: [{ label: 'الرئيسية', href: 'index.html' }] },
      { text: 'الفصل الأول «الطبيعة من حولنا»: ٢٢ فكرة من كتاب الوزارة ٢٠٢٦/٢٠٢٧ (الدروس ١-١ إلى ١-٥، صفحات ٦–٢٣) بـ ١١٠ صياغة، و٤ أفكار إثرائية من «هيَّا نتوسَّع» وعمود الجعران. عربي وإنجليزي.', links: [{ label: 'الخريطة', href: 'map.html', ch: 'g4c1' }, { label: 'كل الصياغات عربي', href: 'quiz.html#preview&lang=ar', ch: 'g4c1' }, { label: 'English', href: 'quiz.html#preview&lang=en', ch: 'g4c1' }] },
      { text: 'لعبة «مستكشف المَواطن»: البحث عن الكائنات الحية (بين الحشائش، أسفل الحجر، فوق الصخرة)، ثم تصنيف كائنات ضفاف نهر النيل والصحراء، ثم أسرار ثعلب الفنك واليربوع والليل والنهار في الصحراء، ثم جولة سرعة.', links: [{ label: 'اللعبة', href: 'habitat.html', ch: 'g4c1' }, { label: 'المرحلة ٢', href: 'habitat.html#stage2', ch: 'g4c1' }, { label: 'المرحلة ٣', href: 'habitat.html#stage3', ch: 'g4c1' }] },
      { text: 'الفصل الثاني «كيف تنمو الحشرات؟»: ١٤ فكرة (الدروس ٢-١ إلى ٢-٣، صفحات ٢٦–٣٤) بـ ٧٩ صياغة، وفكرتان إثرائيتان عن تربية الفراشات. النسخة العربية بكلمات الكتاب العربي: اليرقة، الانسلاخ، الشرنقة، الحشرة البالغة، قرون الاستشعار.', links: [{ label: 'الخريطة', href: 'map.html', ch: 'g4c2' }, { label: 'كل الصياغات عربي', href: 'quiz.html#preview&lang=ar', ch: 'g4c2' }, { label: 'English', href: 'quiz.html#preview&lang=en', ch: 'g4c2' }] },
      { text: 'لعبة «حديقة الفراشات»: تربية فراشة من البيضة على ظهر الورقة لحد الحشرة البالغة (اليرقة بتاكل وتنسلخ، ثم الشرنقة، ثم الأجنحة المجعَّدة تنبسط)، ثم أجزاء جسم الحشرة، ثم «هل هو حشرة؟»، ثم جولة سرعة.', links: [{ label: 'اللعبة', href: 'butterfly.html', ch: 'g4c2' }, { label: 'المرحلة ٢', href: 'butterfly.html#stage2', ch: 'g4c2' }, { label: 'المرحلة ٣', href: 'butterfly.html#stage3', ch: 'g4c2' }] },
      { text: 'الفصل الثالث «كيف تنمو النباتات؟»: ١٩ فكرة (الدروس ٣-١ إلى ٣-٤، صفحات ٣٦–٤٩) بـ ٩٧ صياغة، وفكرتان إثرائيتان.', links: [{ label: 'الخريطة', href: 'map.html', ch: 'g4c3' }, { label: 'كل الصياغات عربي', href: 'quiz.html#preview&lang=ar', ch: 'g4c3' }, { label: 'English', href: 'quiz.html#preview&lang=en', ch: 'g4c3' }] },
      { text: 'لعبة «حديقتي الصغيرة»: زراعة بذرة عبَّاد الشمس (حفرة ١ سم، تغطية برفق، ماء)، الأوراق البذرية والحقيقية، قياس ارتفاع النبات بالمسطرة، من البرعم إلى الزهرة إلى الثمرة إلى البذور الجديدة، وأجزاء النبات، ثم جولة سرعة.', links: [{ label: 'اللعبة', href: 'garden.html', ch: 'g4c3' }, { label: 'المرحلة ٢', href: 'garden.html#stage2', ch: 'g4c3' }, { label: 'المرحلة ٣', href: 'garden.html#stage3', ch: 'g4c3' }] },
      { text: '«لجنة ريشو» للصف الرابع: امتحان الشهر من ٢٠ درجة على الفصول ١ و٢ و٣.', links: [{ label: 'افتح اللجنة', href: 'quiz.html#exam=g4m1', ch: 'g4c1' }] },
      { text: '١٣ صورة ضغط جديدة مرسومة بالكود (أماكن الاختباء، النيل والصحراء، ثعلب الفنك، مراحل الفراشة، جسم الحشرة، البذور، عمق الحفرة، أجزاء النبات…). مفيش أي صورة منقولة من الكتاب.', links: [{ label: 'ثعلب الفنك', href: 'quiz.html#preview=D1.2&lang=ar', ch: 'g4c1' }, { label: 'مراحل الفراشة', href: 'quiz.html#preview=P1.3&lang=ar', ch: 'g4c2' }, { label: 'عمق الحفرة', href: 'quiz.html#preview=W3.5&lang=ar', ch: 'g4c3' }] },
      { text: 'ملاحظتان للمراجعة العلمية: (١) الكتاب العربي بيقول «ينشق الغلاف الخارجي أولًا» والإنجليزي «the back splits open»، وكل نسخة ماشية على كتابها. (٢) تعريف ارتفاع النبات في «تعلَّم» هو «إلى أعلى نقطة في النبات» وإجابة «تدرَّب» هي «إلى قاعدة أعلى ورقة»؛ الأسئلة بتستخدم الصيغتين كل واحدة في مكانها زي الكتاب.' }
    ] },
  { date: '2026-10-11', title: 'الفصل الثالث بالعربي + مراجعة الفصلين الأول والثاني على كتاب الوزارة العربي',
    items: [
      { text: 'الفصل الثالث «شروط الإنبات» اتفتح لمسار «عربي»: نفس الـ ٢٨ فكرة (١١٠ صياغة) بلغة كتاب الوزارة العربي صفحات ٢٨–٤٣ و٥٠ (الإنبات، الفلقة، الجنين، محلول اليود، الأزرق الداكن، الشرط الذي نغيّره، التعرُّض للهواء، درجة حرارة مناسبة…).', links: [{ label: 'الخريطة', href: 'map.html', ch: 'ch3' }, { label: 'كل الأسئلة بالعربي', href: 'quiz.html#preview&lang=ar', ch: 'ch3' }] },
      { text: 'لعبة «معمل البذور» بقت بالعربي كلها (كلام ريشو للولد والبنت، والمهمات الثلاث، وجولة السرعة). الكوبان اسمهم (أ) و(ب)، والكوب (أ) على اليمين زي الكتاب.', links: [{ label: 'اللعبة', href: 'seedlab.html' }, { label: 'المرحلة ٢', href: 'seedlab.html#stage2' }, { label: 'المرحلة ٣', href: 'seedlab.html#stage3' }] },
      { text: '«لجنة ريشو» بقت تسأل اللاعب العربي من الفصول ١ و٢ و٣.', links: [{ label: 'افتح اللجنة', href: 'quiz.html#exam=oct' }] },
      { text: 'مراجعة الفصل الأول على الكتاب العربي: عدد العظام بقى «حوالي ٢٠٠ عظمة» زي صفحة ١٢ (والشرح بيقول إن العدد بالتحديد ٢٠٦)، وكلمة «مصطفة» بدل «مصفوفة»، وشرح العمود الفقري بنص الكتاب. النسخة الإنجليزية زي كتابها (٢٠٦).', links: [{ label: 'عدد العظام', href: 'quiz.html#preview=S2.1&lang=ar', ch: 'ch1' }] },
      { text: 'سؤال الضلوع بقى «اختر إجابتين صحيحتين» زي سؤال الكتاب صفحة ١٦ (عربي وإنجليزي).', links: [{ label: 'عربي', href: 'quiz.html#preview=S4.4&lang=ar', ch: 'ch1' }, { label: 'English', href: 'quiz.html#preview=S4.4&lang=en', ch: 'ch1' }] },
      { text: 'الفصل الثاني اتراجع على صفحات ٢٠–٢٧ وصياغته مطابقة للكتاب (تعديل كلمة واحدة: «يبقى»). وجدول «ضروري للإنبات / ليس ضروريًّا للإنبات» في الفصل الثالث بقى أوضح في النسختين.', links: [{ label: 'الجدول', href: 'quiz.html#preview=G3.4&lang=ar', ch: 'ch3' }] }
    ] },
  { date: '2026-10-11', title: 'أسماء المستويات بقت عامة',
    items: [
      { text: 'أسماء المستويات كانت كلها من فصل العظام والعضلات (مستكشف المفاصل، محرّك العضلات…) وبتظهر في كل الفصول. دلوقتي الأسماء عامة تناسب أي فصل وأي مادة: مبتدئ، مستكشف، مفكّر، نجم، بطل، متفوّق (وللبنات: مبتدئة، مستكشفة…). النقاط والمستوى نفسه زي ما هم.', links: [{ label: 'صفحة الفصول', href: 'chapters.html' }] },
      { text: 'رقم الـ XP مبقاش بيتقسم على سطرين في بطاقة المستوى.' }
    ] },
  { date: '2026-10-11', title: 'جدول المقارنة بقى أسهل',
    items: [
      { text: 'سؤال «قارن بين» كان بيلخبط (اضغط على البطاقة ثم على العمود). دلوقتي بطاقة واحدة بتظهر فوق الجدول، والطالب يضغط على العمود مرة واحدة فتنزل فيه وتيجي اللي بعدها لوحدها. وبعد ما يخلّص يقدر يضغط على أي بطاقة علشان ينقلها.', links: [{ label: 'عربي', href: 'quiz.html#preview=T3.4&lang=ar', ch: 'ch2' }, { label: 'English', href: 'quiz.html#preview=B6.4&lang=en', ch: 'ch1' }] }
    ] },
  { date: '2026-10-11', title: 'لجنة ريشو (امتحان الشهر) + الفصل الثالث + أسئلة على طريقة الامتحان',
    items: [
      { text: '«لجنة ريشو»: بطاقة جديدة في صفحة الفصول. امتحان من ٢٠ درجة على الفصول ١ و٢ و٣ بنفس شكل امتحان الشهر (٤ أسئلة × ٥ درجات)، وكل مرة ورقة جديدة. الأخطاء بتروح مراجعة الفصل بتاعها.', links: [{ label: 'افتح اللجنة', href: 'quiz.html#exam=oct' }] },
      { text: '٥ أنواع أسئلة جديدة بتدرّب على الكتابة: جدول المقارنة، علّل وماذا يحدث (تكوين الإجابة من بطاقات)، المصطلح العلمي وصوّب ما تحته خط (بحروف)، واختر كل الإجابات الصحيحة.', links: [{ label: 'جدول', href: 'quiz.html#preview=B6.4&lang=en', ch: 'ch1' }, { label: 'علّل', href: 'quiz.html#preview=M4.4&lang=en', ch: 'ch1' }, { label: 'مصطلح', href: 'quiz.html#preview=B4.4&lang=en', ch: 'ch1' }, { label: 'صوّب', href: 'quiz.html#preview=S4.5&lang=en', ch: 'ch1' }, { label: 'اختر الكل', href: 'quiz.html#preview=X1.1&lang=en', ch: 'ch1' }, { label: 'علّل بالعربي', href: 'quiz.html#preview=M4.4&lang=ar', ch: 'ch1' }] },
      { text: 'الفصل الثالث «شروط الإنبات» اتفتح لمسار اللغات: ٢٢ فكرة من كتاب الوزارة (الدروس ٣-١ إلى ٣-٥) بـ ٩٤ صياغة، و٣ أفكار إثرائية، و٣ أفكار إضافية للامتحان من الكتاب الخارجي.', links: [{ label: 'الخريطة', href: 'map.html', ch: 'ch3' }, { label: 'كل الأسئلة', href: 'quiz.html#preview&lang=en', ch: 'ch3' }] },
      { text: 'لعبة الفصل «معمل البذور»: فتح البذرة وكشف النشا باليود، ثم ٣ تجارب (الماء والهواء والحرارة) الطالب بيغيّر فيها شرط واحد بس، ثم جولة سرعة «تنبت ولا لأ؟».', links: [{ label: 'اللعبة', href: 'seedlab.html' }, { label: 'المرحلة ٢', href: 'seedlab.html#stage2' }, { label: 'المرحلة ٣', href: 'seedlab.html#stage3' }] },
      { text: 'الفصل الأول والثاني: ٣٧ صياغة جديدة على طريقة الامتحان (عربي وإنجليزي)، منها ٤ أفكار إضافية من الكتاب الخارجي: مفاصل الاتجاه الواحد، الهجرة، مقارنة الطيور والسحالي، وسبب تسمية الدورة السنوية.', links: [{ label: 'الهجرة', href: 'quiz.html#preview=Y1.1&lang=en', ch: 'ch2' }, { label: 'المفاصل', href: 'quiz.html#preview=X1.2&lang=en', ch: 'ch1' }, { label: 'ماذا يحدث', href: 'quiz.html#preview=T7.4&lang=en', ch: 'ch2' }] },
      { text: 'بداية الفصل الرابع «شروط النمو»: ٧ أفكار من كتاب الوزارة جاهزة للمراجعة هنا. الفصل لسه مقفول للاعبين (ناقصه اللعبة والخريطة)، وسؤال منه بيظهر أحيانًا في اللجنة.', links: [{ label: 'أسئلة الفصل الرابع', href: 'quiz.html#preview&lang=en', ch: 'ch4' }] }
    ] },
  { date: '2026-10-11', title: 'الفصل الثاني: التغيرات في الفصول (عربي وإنجليزي)',
    items: [
      { text: 'الفصل الثاني اتفتح للمسارين: ١٥ فكرة من كتاب الوزارة (درس ٢-١ ودرس ٢-٢) بـ ٥٠ صياغة، و٣ أفكار إضافية من العمود الإثرائي «حكمة الصحراء».', links: [{ label: 'كل الأسئلة بالعربي', href: 'quiz.html#preview&lang=ar', ch: 'ch2' }, { label: 'English', href: 'quiz.html#preview&lang=en', ch: 'ch2' }] },
      { text: 'لعبة الفصل «مستكشف الفصول»: الطالب بيحرّك السنة ويشوف نبات اللوف والسحلية بيتغيروا مع درجة الحرارة. ٣ مراحل.', links: [{ label: 'اللعبة', href: 'seasons.html' }, { label: 'المرحلة ٢', href: 'seasons.html#stage2' }, { label: 'المرحلة ٣', href: 'seasons.html#stage3' }] },
      { text: 'أسئلة «اضغط على الصورة» جديدة: صور النبات خلال السنة، ومكان السحلية في الصيف وفي الشتاء.', links: [{ label: 'صور النبات', href: 'quiz.html#preview=P4.2&lang=ar', ch: 'ch2' }, { label: 'السحلية في الشتاء', href: 'quiz.html#preview=T4.2&lang=ar', ch: 'ch2' }, { label: 'السحلية في الصيف', href: 'quiz.html#preview=T2.4&lang=ar', ch: 'ch2' }] },
      { text: 'خريطة جديدة للفصل الثاني (جزيرة الصيف والشتاء) وخلفية خاصة بيه.', links: [{ label: 'الخريطة', href: 'map.html', ch: 'ch2' }] }
    ] },
  { date: '2026-10-10', title: 'واجهة الصفحة الرئيسية الجديدة',
    items: [
      { text: 'صورة «متفوّق» الجديدة مع ريشو بدل العنوان القديم، بنسخة أصغر للموبايل علشان تفتح بسرعة.', links: [{ label: 'الصفحة الرئيسية', href: 'index.html' }] }
    ] },
  { date: '2026-10-10', title: 'ريشو بيكلم الولد والبنت صح، وبيرحّب ويودّع',
    items: [
      { text: 'سؤال «بطل ولا بطلة؟» عند تسجيل لاعب جديد، واللاعب القديم بيتسأل مرة واحدة لما يدوس على اسمه.', links: [{ label: 'الصفحة الرئيسية', href: 'index.html' }] },
      { text: 'كلام ريشو بالعربي بقى بيتغيّر حسب الولد والبنت (يا بطل / يا بطلة، جرّب / جرّبي…).' },
      { text: 'ترحيب بعد ما الطالب يختار اسمه: تعريف بريشو أول مرة، و«أهلًا بيك تاني»، و«وحشتني» بعد كام يوم، وترحيب كبير بعد أسبوع.' },
      { text: 'زرار 👋 في صفحة الفصول والخريطة: ريشو يودّع الطالب ويشجعه يرجع بكرة.' },
      { text: 'صوت ريشو: ٢٦ جملة جديدة اتسجّلت ورُكّبت (الترحيب، وحشتني، الوداع، ونسخ البنات من كل الجمل).' }
    ] },
  { date: '2026-10-10', title: 'أداة المعاينة وصفحة الأدمن',
    items: [
      { text: 'صفحة الأدمن دي بتفتح بحساب جوجل بتاع صاحب الموقع بس: آخر التعديلات، وكل الأسئلة بالعربي والإنجليزي جنب بعض، والجديد والمعدّل بيتعلّم لوحده.' },
      { text: 'معاينة أي سؤال من غير ما تلعب من الأول (بتشتغل بعد الدخول هنا، لمدة ٣٠ يوم على نفس الجهاز).', links: [{ label: 'افتح المعاينة', href: 'quiz.html#preview' }] },
      { text: 'لعبة الذراع تفتح من المرحلة ٢ أو ٣ على طول.', links: [{ label: 'المرحلة ٢', href: 'arm.html#stage2' }, { label: 'المرحلة ٣', href: 'arm.html#stage3' }] }
    ] },
  { date: '2026-10-10', title: 'تغطية الفصل الأول كاملة + أسئلة الجمل',
    items: [
      { text: 'مفاصل الرجل: الخصر والركبتان والكاحلان (B7.4).', links: [{ label: 'عربي', href: 'quiz.html#preview=B7.4&lang=ar' }, { label: 'English', href: 'quiz.html#preview=B7.4&lang=en' }] },
      { text: 'الضلوع تحمي القلب والرئتين (S4.4).', links: [{ label: 'عربي', href: 'quiz.html#preview=S4.4&lang=ar' }, { label: 'English', href: 'quiz.html#preview=S4.4&lang=en' }] },
      { text: 'المس ظهرك: العمود الفقري (S5.4).', links: [{ label: 'عربي', href: 'quiz.html#preview=S5.4&lang=ar' }, { label: 'English', href: 'quiz.html#preview=S5.4&lang=en' }] },
      { text: 'أسئلة إضافية من العمود الإثرائي «الجمل» (C1–C3)، سؤال واحد منها بعد التحدي الكبير.', links: [{ label: 'عربي', href: 'quiz.html#preview=C1.1&lang=ar' }, { label: 'English', href: 'quiz.html#preview=C1.1&lang=en' }] }
    ] },
  { date: '2026-10-10', title: 'الهوية الجديدة',
    items: [
      { text: 'اسم الموقع «متفوّق» وجملة «يلا نكتشفها سوا!» في الصفحة الرئيسية، والبغبغان اسمه «ريشو».', links: [{ label: 'الصفحة الرئيسية', href: 'index.html' }] }
    ] },
  { date: '2026-10-10', title: 'العلوم بالعربي (الفصل الأول)',
    items: [
      { text: 'مسار «عربي»: الموقع كله بالعربي ومن اليمين للشمال، وأسئلة الفصل الأول بلغة كتاب الوزارة العربي.', links: [{ label: 'كل الأسئلة بالعربي', href: 'quiz.html#preview&lang=ar' }] },
      { text: 'درس ١-٤ «أجسام الحيوانات» اتضاف للنسختين (A1–A3).', links: [{ label: 'عربي', href: 'quiz.html#preview=A1.1&lang=ar' }, { label: 'English', href: 'quiz.html#preview=A1.1&lang=en' }] }
    ] }
];
