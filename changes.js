/* What changed on the site, newest first. Shown on admin.html under "آخر التعديلات".
   Each item: text (Arabic), and optional links [{label, href}] that open the change directly.
   Preview links: quiz.html#preview=ID.n&lang=ar|en  ·  game stages: arm.html#stage2 / #stage3, seasons.html#stage2 / #stage3
   A link can name its chapter (ch: 'ch2'); without it the chapter chosen in the list on admin.html is used. */
window.CHANGES = [
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
