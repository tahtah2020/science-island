# Generator of the Grade 4 Math Units 5 and 6 question files (both books side by side, same ids, order and answers):
#   math/questions_mg4u5.js + math/questions_mg4u5_ar.js   «Multiplication as a Relationship / عملية الضرب كعلاقة»
#   math/questions_mg4u6.js + math/questions_mg4u6_ar.js   «Factors and Multiples / العوامل والمضاعفات»
# Run from the site folder: python3 math/tools/gen_mg4u56.py .   (edit here, never the four files by hand)
# Each text is ('English', 'Arabic'); a plain string is the same in both (numbers, equations).
import json, re, sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import g4_explain
OUT = sys.argv[1]

def wrap(s):
    """Arabic: keep every run of digits / signs / the letter of an equation left to right."""
    if not isinstance(s, str) or '⁦' in s: return s
    s = s.replace('= ؟', '= ?').replace('× ؟', '× ?').replace('+ ؟', '+ ?').replace('− ؟', '− ?')
    def run(m):
        t = m.group(0)
        pre = post = ''   # an unbalanced bracket belongs to the Arabic sentence: "(4 مقاعد)", "(… أو 8)", "3 (63: …"
        if t.count('(') > t.count(')'):
            k = t.rfind('('); left, t = t[:k], t[k + 1:]
            pre = ('⁦' + left.rstrip() + '⁩' + left[len(left.rstrip()):] if left.strip() else left) + '('
        if t.endswith(')') and t.count(')') > t.count('('): post, t = ')', t[:-1].rstrip()
        return pre + '⁦' + t + '⁩' + post if t else pre + post
    return re.sub(r'[\d(][\d,./\s×+−=()?÷²a-z]*[\d)?²a-z]|\d', run, s)

def L(x, ar):
    if isinstance(x, tuple): return wrap(x[1]) if ar else x[0]
    return wrap(x) if ar else x

def V(t, mode, lvl, q, **k): return dict(type=t, mode=mode, level=lvl, q=q, **k)
def num(mode, lvl, q, calc, unit=None, **k):
    r = eval(calc)
    ans = str(int(r)) if float(r).is_integer() else repr(round(r, 6))
    d = V('num', mode, lvl, q, answer=ans, calc=calc, **k)
    if unit: d['unit'] = unit
    return d
def mc(mode, lvl, q, opts, **k): return V('mc', mode, lvl, q, options=opts, answer=0, **k)
def fill(mode, lvl, q, opts, **k): return V('fill', mode, lvl, q, options=opts, answer=0, **k)
def tf(mode, lvl, q, ans, **k): return V('tf', mode, lvl, q, answer=0 if ans else 1, **k)
def multi(mode, lvl, q, opts, right, **k): return V('multi', mode, lvl, q, options=opts, answer=right, **k)
def match(mode, lvl, q, left, right, ans, **k): return V('match', mode, lvl, q, left=left, right=right, answer=ans, **k)

# pictures (math/g4_art.js)
def S(n): return ('%d seats' % n if n != 1 else '1 seat', {1: 'مقعد واحد', 2: 'مقعدان'}.get(n, '%d مقاعد' % n if n <= 10 else '%d مقعدًا' % n))
def VEH(*items): return {'fig': 'vehFig', 'pic': {'items': [list(i) if isinstance(i, tuple) else [i, ''] for i in items]}}
def TAPE(n, box='', one='', total='', top='', bottom=''): return {'fig': 'tapeFig', 'pic': dict(n=n, box=box, one=one, total=total, top=top, bottom=bottom)}
def ARR(r, c): return {'fig': 'arrayFig', 'pic': dict(r=r, c=c)}
def CARDS(r, c): return {'fig': 'arrayFig', 'pic': dict(cards=[r, c])}
def LINE(max_, steps, bus=False, stop=None, upto=None):
    p = dict(max=max_, steps=steps, bus=bus)
    if upto: p['upto'] = upto
    if stop is not None: p['stop'] = stop
    return {'fig': 'skipLine', 'pic': p}

def tr(v, ar):
    out = {}
    for key, val in v.items():
        if key in ('q', 'explain'): out[key] = L(val, ar)
        elif key in ('options', 'left', 'right'): out[key] = [L(o, ar) for o in val]
        elif key == 'unit': out[key] = val[1] if ar else val[0]
        elif key == 'pic' and 'items' in val: out[key] = {'items': [[a[0], (a[1][1] if ar else a[1][0]) if isinstance(a[1], tuple) else a[1]] for a in val['items']]}
        elif key == 'pic': out[key] = {k: (L(x, ar) if isinstance(x, tuple) else x) for k, x in val.items()}
        else: out[key] = val
    return out

TIMES = ('times', 'مرات'); KM = ('km', 'كم'); GROUPS = ('groups', 'مجموعات'); PACKS = ('packs', 'عبوات'); MIN = ('minutes', 'دقيقة'); CM = ('cm', 'سم')
YES, NO = ('Yes', 'نعم'), ('No', 'لا')
COMM, ZERO, IDEN, ASSO = ('The Commutative Property', 'خاصية الإبدال'), ('The Zero Property', 'خاصية الضرب في صفر'), ('The Identity Property', 'خاصية العنصر المحايد'), ('The Associative Property', 'خاصية الدمج')

UNITS_IDEAS = {5: [], 6: []}
def idea(u, i, lesson, concept, explain, variants):
    explain = g4_explain.prepare(i, explain, variants)   # short rule for the idea, own explanation for each question
    UNITS_IDEAS[u].append(dict(id=i, lesson=lesson, concept=concept, explain=explain, variants=variants))

# =====================================================================================================
# UNIT 5 · Multiplication as a Relationship · ideas Y + lesson + number (Y11 … Y74)
# =====================================================================================================
# ---------- Lesson 1 · Multiplicative Comparison (pages 71-72) ----------
idea(5, 'Y11', 1, ('Comparing with "times greater than"', 'المقارنة بـ «تساوي ... أضعاف»'),
  ('A multiplicative comparison says how many times one number is another. Divide the big number by the small one: 10 is 5 times greater than 2, because 5 × 2 = 10 (10 ÷ 2 = 5).',
   'المقارنة باستخدام عملية الضرب توضح كم مرة يساوي عدد عددًا آخر. نقسم العدد الكبير على العدد الصغير: 10 تساوي 5 أضعاف العدد 2، لأن 5 × 2 = 10 (10 ÷ 2 = 5).'),
  [num('timed', 'easy', ('10 is ? times greater than 2.', '10 تساوي ؟ أضعاف العدد 2.'), '10/2', unit=TIMES, seconds=12),
   num('timed', 'easy', ('12 is ? times greater than 3.', '12 تساوي ؟ أضعاف العدد 3.'), '12/3', unit=TIMES, seconds=12),
   num('timed', 'easy', ('18 is ? times greater than 6.', '18 تساوي ؟ أضعاف العدد 6.'), '18/6', unit=TIMES, seconds=12),
   num('normal', 'easy', ('15 is ? times greater than 3.', '15 تساوي ؟ أضعاف العدد 3.'), '15/3', unit=TIMES),
   num('normal', 'easy', ('28 is ? times greater than 7.', '28 تساوي ؟ أضعاف العدد 7.'), '28/7', unit=TIMES),
   num('normal', 'easy', ('27 is ? times greater than 9.', '27 تساوي ؟ أضعاف العدد 9.'), '27/9', unit=TIMES),
  ])
idea(5, 'Y12', 1, ('Reading a tape diagram', 'قراءة مخطط الشرائط'),
  ('In a tape diagram the long tape is made of equal parts, each the size of the short tape. Count the parts: if the long tape has 4 parts of 3, the long tape is 4 × 3 = 12, so 12 is 4 times greater than 3.',
   'في مخطط الشرائط يتكون الشريط الطويل من أجزاء متساوية، كل جزء بطول الشريط القصير. نعد الأجزاء: إذا كان في الشريط الطويل 4 أجزاء قيمة كل منها 3، فإن الشريط الطويل = 4 × 3 = 12، إذن 12 تساوي 4 أضعاف العدد 3.'),
  [num('normal', 'easy', ('The long tape is made of parts like the short tape. How many times longer is the long tape?', 'يتكون الشريط الطويل من أجزاء مثل الشريط القصير. كم مرة يساوي الشريط الطويل الشريط القصير؟'), '5', unit=TIMES, **TAPE(5, '', '', '', ('A', 'أ'), ('B', 'ب'))),
   num('normal', 'medium', ('Each part is 3. What number does the long tape show?', 'قيمة كل جزء 3. ما العدد الذي يمثله الشريط الطويل؟'), '4*3', **TAPE(4, '3', '3')),
   mc('normal', 'medium', ('Which statement does the tape diagram show?', 'أي جملة يوضحها مخطط الشرائط؟'),
      [('14 is 2 times greater than 7', '14 تساوي ضعف العدد 7'), ('14 is 7 times greater than 2', '14 تساوي 7 أضعاف العدد 2'), ('7 is 2 times greater than 14', '7 تساوي ضعف العدد 14'), ('14 is 7 more than 2', '14 تزيد على 2 بمقدار 7')], **TAPE(2, '7', '7', '14')),
   mc('normal', 'medium', ('Which multiplication matches the tape diagram?', 'أي عملية ضرب تناسب مخطط الشرائط؟'), ['3 × 6 = 18', '3 + 6 = 9', '6 + 6 = 12', '18 × 3 = 54'], **TAPE(3, '6', '6', '18')),
  ])
idea(5, 'Y13', 1, ('Challenge: comparing strips', 'تحدٍّ: مقارنة الشرائط'),
  ('Compare by asking "how many times does the small one fit in the big one?" A strip of 24 cm and a strip of 8 cm: 24 ÷ 8 = 3, so the long strip is 3 times as long. Check with multiplication: 3 × 8 = 24.',
   'نقارن بالسؤال: «كم مرة يتكرر الصغير ليساوي الكبير؟» شريط طوله 24 سم وشريط طوله 8 سم: 24 ÷ 8 = 3، إذن الشريط الطويل يساوي 3 أضعاف الشريط القصير. ونتحقق بالضرب: 3 × 8 = 24.'),
  [num('boss', 'hard', ('Your teacher\'s strip is 24 cm long and your strip is 8 cm long. How many times could your strip fit on your teacher\'s strip?', 'طول شريط المعلم 24 سم وطول شريطك 8 سم. كم مرة يمكن تكرار شريطك ليتساوى مع شريط المعلم؟'), '24/8', unit=TIMES),
   mc('boss', 'hard', ('36 is ? times greater than 4. Which equation shows it?', '36 تساوي ؟ أضعاف العدد 4. أي معادلة توضح ذلك؟'), ['9 × 4 = 36', '36 + 4 = 40', '36 − 4 = 32', '4 × 4 = 16']),
   num('boss', 'hard', ('45 is ? times greater than 5.', '45 تساوي ؟ أضعاف العدد 5.'), '45/5', unit=TIMES),
  ])

# ---------- Lesson 2 · Creating Multiplicative Comparison Equations (pages 73-74) ----------
idea(5, 'Y21', 2, ('How fast? The transportation infographic', 'مقارنة سرعة وسائل النقل'),
  ('The infographic compares speeds: a sailboat is about 2 times faster than a person walking, a car about 20 times faster than a person walking, a cruise ship about 8 times the speed of walking, high-speed trains 8 times faster than a cruise ship and passenger airplanes nearly 200 times faster than walking.',
   'المخطط يقارن السرعات: القارب الشراعي سرعته تقريبًا ضعف سرعة شخص يسير على قدميه، والسيارة 20 ضعفًا من سرعة الشخص الذي يسير، والسفينة السياحية 8 أضعاف سرعة الشخص الذي يسير، والقطار فائق السرعة 8 أضعاف سرعة السفينة السياحية، وطائرة الركاب تقريبًا 200 ضعف سرعة الشخص الذي يسير.'),
  [num('timed', 'easy', ('A sailboat travels about ? times faster than a person walking.', 'سرعة القارب الشراعي تساوي تقريبًا ؟ ضعف سرعة شخص يسير على قدميه.'), '2', unit=TIMES, seconds=14, **VEH('sailboat', 'walk')),
   num('timed', 'easy', ('A car travels about ? times faster than a person walking.', 'سرعة السيارة تساوي ؟ ضعفًا من سرعة شخص يسير على قدميه.'), '20', unit=TIMES, seconds=14, **VEH('car', 'walk')),
   num('normal', 'easy', ('A cruise ship travels about ? times the speed of a person walking.', 'سرعة السفينة السياحية تساوي تقريبًا ؟ أضعاف سرعة شخص يسير على قدميه.'), '8', unit=TIMES, **VEH('cruise', 'walk')),
   num('normal', 'medium', ('High-speed trains move ? times faster than a cruise ship.', 'سرعة القطار فائق السرعة تساوي ؟ أضعاف سرعة السفينة السياحية.'), '8', unit=TIMES, **VEH('fasttrain', 'cruise')),
   mc('normal', 'medium', ('Passenger airplanes travel nearly how many times faster than a person walking?', 'سرعة طائرة الركاب تساوي تقريبًا كم ضعفًا من سرعة شخص يسير على قدميه؟'), [('200 times', '200 ضعف'), ('20 times', '20 ضعفًا'), ('8 times', '8 أضعاف'), ('2 times', 'ضعفان')], **VEH('plane', 'walk')),
   multi('normal', 'medium', ('Choose ALL the phrases that show a multiplicative comparison.', 'اختر كل العبارات التي توضح المقارنة باستخدام عملية الضرب.'), [('2 times faster', 'ضعف السرعة'), ('about 8 times the speed', 'تقريبًا 8 أضعاف السرعة'), ('3 more seats', 'تزيد 3 مقاعد'), ('the same speed', 'تماثل السرعة')], [0, 1]),
  ])
idea(5, 'Y22', 2, ('Writing an equation with a letter', 'كتابة معادلة برمز للعدد المجهول'),
  ('Turn the words into an equation and use a letter for the unknown number: "4 times greater than 3 is n" → 4 × 3 = n. "18 is 6 times as many as n" → 18 = 6 × n. "times as many" means multiply.',
   'نحوّل الجملة إلى معادلة ونستخدم رمزًا للعدد المجهول: «عدد يساوي 4 أضعاف العدد 3» ← 4 × 3 = n. «18 تساوي 6 أضعاف عدد» ← 18 = 6 × n. كلمة «أضعاف» تعني الضرب.'),
  [mc('timed', 'easy', ('4 times greater than 3 is n. Which equation?', 'العدد n يساوي 4 أضعاف العدد 3. ما المعادلة؟'), ['4 × 3 = n', '4 + 3 = n', '4 × n = 3', 'n × 3 = 4'], seconds=15),
   mc('normal', 'easy', ('18 is 6 times as many as n. Which equation?', '18 تساوي 6 أضعاف العدد n. ما المعادلة؟'), ['18 = 6 × n', '18 = 6 + n', 'n = 18 × 6', '6 = 18 × n']),
   mc('normal', 'easy', ('2 times greater than 7 is n. Which equation?', 'العدد n يساوي ضعف العدد 7. ما المعادلة؟'), ['2 × 7 = n', '2 + 7 = n', '7 × n = 2', 'n = 7 − 2']),
   mc('normal', 'medium', ('24 is 4 times as great as n. Which equation?', '24 تساوي 4 أضعاف العدد n. ما المعادلة؟'), ['24 = 4 × n', '24 = 4 + n', 'n = 24 × 4', '4 = 24 × n']),
   mc('normal', 'medium', ('25 is 5 times as many as n. Which equation?', '25 تساوي 5 أضعاف العدد n. ما المعادلة؟'), ['25 = 5 × n', '25 = 5 + n', 'n = 25 × 5', '5 = n × 25']),
   tf('normal', 'medium', ('"18 is 6 times as many as n" can be written 18 = 6 + n.', 'الجملة «18 تساوي 6 أضعاف العدد n» تُكتب 18 = 6 + n.'), False),
  ])
idea(5, 'Y23', 2, ('Story problems as equations', 'المسائل الكلامية في صورة معادلات'),
  ('Read the story, find the comparison, then write it with a letter. Nadia had 5 marbles and later 4 times as many: 5 × 4 = n. Hamed had 12 cookies, 3 times as many as Ahmed: 12 = 3 × n.',
   'نقرأ المسألة ونحدد المقارنة ثم نكتبها برمز. جمعت نادية 5 كرات زجاجية ثم أصبح معها 4 أضعاف هذا العدد: 5 × 4 = n. وكان مع حامد 12 قطعة كعك تساوي 3 أضعاف ما مع أخيه أحمد: 12 = 3 × n.'),
  [mc('normal', 'medium', ('Nadia collected 5 marbles in March. By May she had 4 times as many marbles. Which equation shows the marbles in May?', 'جمعت نادية 5 كرات زجاجية في مارس، وفي مايو أصبح عدد الكرات معها يساوي 4 أضعاف هذا العدد. أي معادلة توضح عدد الكرات في مايو؟'), ['5 × 4 = n', '5 + 4 = n', '5 = 4 × n', 'n × 5 = 4']),
   mc('normal', 'medium', ('Hamed had 12 cookies, which was 3 times as many cookies as his brother Ahmed. Which equation shows Ahmed\'s cookies?', 'كان مع حامد 12 قطعة كعك، وهذا يساوي 3 أضعاف عدد قطع الكعك مع أخيه أحمد. أي معادلة توضح عدد قطع الكعك مع أحمد؟'), ['12 = 3 × n', '12 × 3 = n', '12 + 3 = n', 'n = 12 − 3']),
   mc('normal', 'medium', ('Aida walked to school in 21 minutes and rode her bike in 7 minutes. Which equation shows how many times faster riding was?', 'ذهبت عايدة إلى المدرسة سيرًا على الأقدام في 21 دقيقة، وبدراجتها في 7 دقائق. أي معادلة توضح كم مرة كان ركوب الدراجة أسرع؟'), ['21 = n × 7', '21 + 7 = n', '21 × 7 = n', '7 = n × 21']),
   num('normal', 'medium', ('Nadia collected 5 marbles in March. By May she had 4 times as many. How many marbles did she have in May?', 'جمعت نادية 5 كرات زجاجية في مارس، وفي مايو أصبح معها 4 أضعاف هذا العدد. ما عدد الكرات معها في مايو؟'), '5*4'),
  ])
idea(5, 'Y24', 2, ('Challenge: the car and the bicycle', 'تحدٍّ: السيارة والدراجة'),
  ('A car is 3 times faster than a bicycle, so the car needs 3 times LESS time. Salma takes 24 minutes by bicycle: 3 × n = 24, and n = 24 ÷ 3 = 8 minutes by car.',
   'السيارة سرعتها 3 أضعاف سرعة الدراجة، إذن تحتاج وقتًا أقل بثلاث مرات. تحتاج سلمى 24 دقيقة بالدراجة: 3 × n = 24، و n = 24 ÷ 3 = 8 دقائق بالسيارة.'),
  [mc('boss', 'hard', ('A car is 3 times faster than a bicycle. It takes Salma 24 minutes to get to school by bicycle. Which equation shows the time by car?', 'سيارة سرعتها 3 أضعاف سرعة دراجة. تحتاج سلمى إلى 24 دقيقة لتصل إلى المدرسة بالدراجة. أي معادلة توضح الوقت بالسيارة؟'), ['3 × n = 24', '24 × 3 = n', '24 + 3 = n', 'n = 24 − 3'], **VEH('car', 'bicycle')),
   num('boss', 'hard', ('A car is 3 times faster than a bicycle. Salma takes 24 minutes by bicycle. How many minutes would she take by car?', 'سيارة سرعتها 3 أضعاف سرعة دراجة. تحتاج سلمى 24 دقيقة بالدراجة. كم دقيقة تحتاج بالسيارة؟'), '24/3', unit=MIN, **VEH('car', 'bicycle')),
   tf('boss', 'hard', ('If a car is 3 times faster than a bicycle, the car trip takes 3 times MORE minutes.', 'إذا كانت سرعة السيارة 3 أضعاف سرعة الدراجة، فإن الرحلة بالسيارة تحتاج دقائق أكثر بثلاث مرات.'), False),
   num('boss', 'hard', ('Aida walked to school in 21 minutes and rode her bike in 7 minutes. How many times faster was riding her bike?', 'ذهبت عايدة إلى المدرسة سيرًا في 21 دقيقة، وبدراجتها في 7 دقائق. كم مرة كان ركوب الدراجة أسرع من المشي؟'), '21/7', unit=TIMES, **VEH('bicycle', 'walk')),
  ])

# ---------- Lesson 3 · Solving Multiplicative Comparison Equations (pages 75-76) ----------
idea(5, 'Y31', 3, ('Solving with the related division', 'الحل باستخدام القسمة'),
  ('To solve a multiplication equation with a missing factor, divide: 6 × a = 18, so a = 18 ÷ 6 = 3. Moustafa is right, because multiplication and division are related.',
   'لحل معادلة ضرب فيها عامل مجهول نقسم: 6 × a = 18، إذن a = 18 ÷ 6 = 3. مصطفى على حق، لأن الضرب والقسمة عمليتان مرتبطتان.'),
  [num('timed', 'easy', '6 × a = 18. a = ?', '18/6', seconds=12),
   num('timed', 'easy', '4 × n = 28. n = ?', '28/4', seconds=12),
   num('normal', 'easy', 'n × 5 = 35. n = ?', '35/5'),
   mc('normal', 'medium', ('Moustafa solves 6 × a = 18 by doing 18 ÷ 6 = a. Is he right?', 'يحل مصطفى المعادلة 6 × a = 18 بإجراء 18 ÷ 6 = a. هل هو على حق؟'),
      [('Yes: division undoes multiplication, a = 3', 'نعم: القسمة عكس الضرب، a = 3'), ('No: he must add 18 + 6', 'لا: يجب أن يجمع 18 + 6'), ('No: he must multiply 18 × 6', 'لا: يجب أن يضرب 18 × 6'), ('No: a = 12', 'لا: a = 12')]),
   tf('normal', 'medium', ('To solve 9 × m = 54 we can divide 54 ÷ 9.', 'لحل المعادلة 9 × m = 54 يمكننا أن نقسم 54 ÷ 9.'), True),
  ])
idea(5, 'Y32', 3, ('How many seats? The table', 'ما عدد المقاعد؟ الجدول'),
  ('The table gives the seats: bicycle 1, motorbike 2, car 4, truck 6, bus 36, metro train 48. A truck has 6 seats and a motorbike 2: 6 = n × 2, so n = 3 times as many.',
   'الجدول يعطي عدد المقاعد: الدراجة 1، والدراجة البخارية 2، والسيارة 4، والشاحنة 6، والأتوبيس 36، وعربة المترو 48. في الشاحنة 6 مقاعد وفي الدراجة البخارية 2: 6 = n × 2، إذن n = 3 مرات.'),
  [num('normal', 'easy', ('How many times as many seats are in a truck than on a motorbike?', 'كم مرة يساوي عدد المقاعد في الشاحنة عدد المقاعد في الدراجة البخارية؟'), '6/2', unit=TIMES, **VEH(('truck', S(6)), ('motorbike', S(2)))),
   num('normal', 'medium', ('How many times as many seats are on a bus than in a truck?', 'كم مرة يساوي عدد المقاعد في الأتوبيس عدد المقاعد في الشاحنة؟'), '36/6', unit=TIMES, **VEH(('bus', S(36)), ('truck', S(6)))),
   num('normal', 'medium', ('How many times as many seats are on the metro train than in a car?', 'كم مرة يساوي عدد المقاعد في عربة المترو عدد المقاعد في السيارة؟'), '48/4', unit=TIMES, **VEH(('metro', S(48)), ('car', S(4)))),
   num('normal', 'medium', ('A metro train can fit how many times more people than a truck?', 'كم مرة يساوي عدد الركاب في عربة المترو عدد الركاب في الشاحنة؟'), '48/6', unit=TIMES, **VEH(('metro', S(48)), ('truck', S(6)))),
   num('normal', 'medium', ('A bus has how many times more seats than a car?', 'كم مرة يساوي عدد المقاعد في الأتوبيس عدد المقاعد في السيارة؟'), '36/4', unit=TIMES, **VEH(('bus', S(36)), ('car', S(4)))),
   mc('normal', 'medium', ('Which equation finds how many times as many seats a bus (36) has than a truck (6)?', 'أي معادلة توجد كم مرة يساوي عدد مقاعد الأتوبيس (36) عدد مقاعد الشاحنة (6)؟'), ['36 = n × 6', '36 + 6 = n', '36 × 6 = n', '6 = n × 36']),
  ])
idea(5, 'Y33', 3, ('Challenge: comparing more seats', 'تحدٍّ: مقارنات أخرى للمقاعد'),
  ('Use the table: a bus has 36 seats, a motorbike 2, so 36 = n × 2 and n = 18. A metro train has 48 seats and a motorbike 2: 48 ÷ 2 = 24 times as many.',
   'نستخدم الجدول: في الأتوبيس 36 مقعدًا وفي الدراجة البخارية 2، إذن 36 = n × 2 و n = 18. وفي عربة المترو 48 مقعدًا وفي الدراجة البخارية 2: 48 ÷ 2 = 24 مرة.'),
  [num('boss', 'hard', ('How many times as many seats are on a bus than on a motorbike?', 'كم مرة يساوي عدد المقاعد في الأتوبيس عدد المقاعد في الدراجة البخارية؟'), '36/2', unit=TIMES, **VEH(('bus', S(36)), ('motorbike', S(2)))),
   num('boss', 'hard', ('How many times as many seats are on a metro train than on a motorbike?', 'كم مرة يساوي عدد المقاعد في عربة المترو عدد المقاعد في الدراجة البخارية؟'), '48/2', unit=TIMES, **VEH(('metro', S(48)), ('motorbike', S(2)))),
   num('boss', 'hard', ('A metro train has 48 seats. That is ? times the seats of a bicycle.', 'في عربة المترو 48 مقعدًا. هذا يساوي ؟ ضعفًا من مقاعد الدراجة.'), '48/1', unit=TIMES, **VEH(('metro', S(48)), ('bicycle', S(1)))),
   num('boss', 'hard', ('A boat has 12 seats. How many times as many seats as a car with 4 seats?', 'يوجد على القارب 12 مقعدًا. كم مرة يساوي عدد مقاعده عدد مقاعد السيارة (4 مقاعد)؟'), '12/4', unit=TIMES, **VEH(('ferry', S(12)), ('car', S(4)))),
  ])

# ---------- Lesson 4 · Commutative Property of Multiplication (pages 77-78) ----------
idea(5, 'Y41', 4, ('Turning an array: the Commutative Property', 'تدوير المصفوفة: خاصية الإبدال'),
  ('The Commutative Property of Multiplication: changing the order of the factors does not change the product. An array of 4 rows of 6 turned on its side is 6 rows of 4: 4 × 6 = 6 × 4 = 24.',
   'خاصية الإبدال في عملية الضرب: تغيير ترتيب العوامل لا يغيّر حاصل الضرب. مصفوفة من 4 صفوف في كل صف 6، إذا أدرناها تصبح 6 صفوف في كل صف 4: 4 × 6 = 6 × 4 = 24.'),
  [mc('timed', 'easy', '4 × 6 = 6 × ?', ['4', '6', '24', '10'], seconds=12, **ARR(4, 6)),
   num('timed', 'easy', '7 × 3 = 3 × ?', '7', seconds=12),
   tf('normal', 'easy', '5 × 8 = 8 × 5', True),
   mc('normal', 'easy', ('Which property says 9 × 2 = 2 × 9?', 'أي خاصية تقول إن 9 × 2 = 2 × 9؟'), [COMM, ZERO, IDEN, ASSO]),
   num('normal', 'easy', ('The array has 3 rows of 8 dots. Turned on its side it has 8 rows of how many dots?', 'في المصفوفة 3 صفوف في كل صف 8 نقاط. إذا أدرناها تصبح 8 صفوف، في كل صف كم نقطة؟'), '3', **ARR(3, 8)),
  ])
idea(5, 'Y42', 4, ('Arranging in equal rows', 'الترتيب في صفوف متساوية'),
  ('Ahmed has 48 toy cars to put in equal rows and columns. Any factor pair of 48 works: 6 rows of 8 or 8 rows of 6 (commutative), 4 rows of 12, 12 rows of 4, 2 rows of 24, 3 rows of 16 …',
   'مع أحمد 48 سيارة لعبة يريد ترتيبها في صفوف وأعمدة متساوية. ينفع كل زوج عوامل للعدد 48: 6 صفوف في كل صف 8 أو 8 صفوف في كل صف 6 (خاصية الإبدال)، و4 صفوف في كل صف 12، و12 صفًا في كل صف 4، وصفّان في كل صف 24، و3 صفوف في كل صف 16 …'),
  [mc('normal', 'medium', ('Ahmed has 48 toy cars and wants equal rows and equal columns. Which arrangement works?', 'مع أحمد 48 سيارة لعبة ويريد ترتيبها في صفوف وأعمدة متساوية. أي ترتيب يصلح؟'),
      [('6 rows of 8', '6 صفوف في كل صف 8'), ('5 rows of 9', '5 صفوف في كل صف 9'), ('7 rows of 7', '7 صفوف في كل صف 7'), ('9 rows of 6', '9 صفوف في كل صف 6')]),
   num('normal', 'medium', ('Ahmed puts his 48 toy cars in 8 equal rows. How many cars are in each row?', 'رتّب أحمد سياراته الـ 48 في 8 صفوف متساوية. كم سيارة في كل صف؟'), '48/8'),
   multi('normal', 'medium', ('Choose ALL the ways to arrange 48 toy cars in equal rows.', 'اختر كل الطرق لترتيب 48 سيارة لعبة في صفوف متساوية.'),
      [('4 rows of 12', '4 صفوف في كل صف 12'), ('12 rows of 4', '12 صفًا في كل صف 4'), ('5 rows of 10', '5 صفوف في كل صف 10'), ('7 rows of 8', '7 صفوف في كل صف 8')], [0, 1]),
   num('normal', 'medium', ('An array shows 6 × 7. The same array turned shows 7 × ?', 'مصفوفة توضح 6 × 7. نفس المصفوفة بعد تدويرها توضح 7 × ؟'), '6', **ARR(6, 7)),
  ])
idea(5, 'Y43', 4, ('Challenge: Badr, Salma and the football teams', 'تحدٍّ: بدر وسلمى وفرق كرة القدم'),
  ('42 people want to play football. Badr makes 6 teams of 7 people (6 × 7 = 42) and Salma makes 7 teams of 6 people (7 × 6 = 42). Both are correct: the Commutative Property says 6 × 7 = 7 × 6.',
   'هناك 42 شخصًا يريدون لعب كرة القدم. يكوّن بدر 6 فرق في كل فريق 7 أشخاص (6 × 7 = 42)، وتكوّن سلمى 7 فرق في كل فريق 6 أشخاص (7 × 6 = 42). كلاهما على صواب: خاصية الإبدال تقول إن 6 × 7 = 7 × 6.'),
  [mc('boss', 'hard', ('42 people want to play football. Badr says you can make 6 teams of 7 people. Salma says 7 teams of 6 people. Who is correct?', 'هناك 42 شخصًا يريدون لعب كرة القدم. يقول بدر يمكن تكوين 6 فرق في كل فريق 7 أشخاص، وتقول سلمى يمكن تكوين 7 فرق في كل فريق 6 أشخاص. من منهما على صواب؟'),
      [('Both are correct', 'كلاهما على صواب'), ('Only Badr', 'بدر فقط'), ('Only Salma', 'سلمى فقط'), ('Neither', 'لا أحد منهما')]),
   num('boss', 'hard', ('Badr makes 6 teams with 7 people on each team. How many people play?', 'كوّن بدر 6 فرق في كل فريق 7 أشخاص. كم شخصًا يلعب؟'), '6*7'),
   tf('boss', 'hard', ('6 teams of 7 people and 7 teams of 6 people have the same number of people.', '6 فرق في كل فريق 7 أشخاص و7 فرق في كل فريق 6 أشخاص فيها نفس عدد الأشخاص.'), True),
   num('boss', 'hard', ('How many people are in 7 teams of 6 people?', 'كم شخصًا في 7 فرق في كل فريق 6 أشخاص؟'), '7*6'),
  ])

# ---------- Lesson 5 · Identity Property and the Zero Property (pages 79-80) ----------
idea(5, 'Y51', 5, ('Multiplying by 1 and by 0', 'الضرب في 1 والضرب في صفر'),
  ('The Identity Property: any number times 1 is the same number (672 × 1 = 672). The Zero Property: any number times 0 is 0 (758 × 0 = 0).',
   'خاصية العنصر المحايد: أي عدد مضروب في 1 يساوي العدد نفسه (672 × 1 = 672). خاصية الضرب في صفر: أي عدد مضروب في 0 يساوي 0 (758 × 0 = 0).'),
  [num('timed', 'easy', '5 × 1 = ?', '5*1', seconds=8),
   num('timed', 'easy', '672 × 1 = ?', '672*1', seconds=10),
   num('timed', 'easy', '8 × 0 = ?', '8*0', seconds=8),
   num('timed', 'easy', '758 × 0 = ?', '758*0', seconds=10),
   num('normal', 'easy', '12 × 1 = ?', '12*1'),
   num('normal', 'easy', '16 × 0 = ?', '16*0'),
  ])
idea(5, 'Y52', 5, ('Naming the two properties', 'تسمية الخاصيتين'),
  ('Identity Property of Multiplication: a number × 1 = the number. Zero Property of Multiplication: a number × 0 = 0.',
   'خاصية العنصر المحايد في عملية الضرب: العدد × 1 = العدد نفسه. خاصية الضرب في صفر: العدد × 0 = 0.'),
  [mc('normal', 'easy', ('Which property says 37 × 1 = 37?', 'أي خاصية تقول إن 37 × 1 = 37؟'), [IDEN, ZERO, COMM, ASSO]),
   mc('normal', 'easy', ('Which property says 37 × 0 = 0?', 'أي خاصية تقول إن 37 × 0 = 0؟'), [ZERO, IDEN, COMM, ASSO]),
   match('normal', 'medium', ('Match each equation with its property.', 'وصّل كل معادلة بالخاصية التي توضحها.'), ['9 × 1 = 9', '9 × 0 = 0', '9 × 4 = 4 × 9'],
      [('Zero Property', 'الضرب في صفر'), ('Commutative Property', 'خاصية الإبدال'), ('Identity Property', 'العنصر المحايد')], [2, 0, 1]),
   tf('normal', 'medium', ('Any number multiplied by 0 equals the same number.', 'أي عدد مضروب في 0 يساوي العدد نفسه.'), False),
  ])
idea(5, 'Y53', 5, ('Patterns with 10, 100 and 1,000', 'الأنماط عند الضرب في 10 و100 و1,000'),
  ('1 × 4 = 4, 10 × 4 = 40, 100 × 4 = 400, 1,000 × 4 = 4,000. Multiplying by 10 moves each digit one place to the left (one zero), by 100 two places, by 1,000 three places.',
   '1 × 4 = 4، و10 × 4 = 40، و100 × 4 = 400، و1,000 × 4 = 4,000. الضرب في 10 ينقل كل رقم خانة واحدة إلى اليسار (صفر واحد)، والضرب في 100 خانتين، والضرب في 1,000 ثلاث خانات.'),
  [num('timed', 'easy', '10 × 4 = ?', '10*4', seconds=10),
   num('timed', 'easy', '100 × 4 = ?', '100*4', seconds=10),
   num('normal', 'easy', '1,000 × 4 = ?', '1000*4'),
   num('normal', 'medium', '1,000 × 7 = ?', '1000*7'),
   mc('normal', 'medium', ('In 100 × 4 the digit 4 moves how many places to the left?', 'في 100 × 4 ينتقل الرقم 4 كم خانة إلى اليسار؟'), [('2 places', 'خانتين'), ('1 place', 'خانة واحدة'), ('3 places', '3 خانات'), ('4 places', '4 خانات')]),
  ])
idea(5, 'Y54', 5, ('Challenge: help Tarek', 'تحدٍّ: ساعد طارق'),
  ('Tarek says 9 × 1,000 = 900. That is wrong: 1,000 has three zeros, so 9 × 1,000 = 9,000 (9 thousands). 900 is 9 × 100.',
   'يقول طارق إن 9 × 1,000 = 900. هذا خطأ: العدد 1,000 فيه ثلاثة أصفار، إذن 9 × 1,000 = 9,000 (9 آلاف). أما 900 فهي 9 × 100.'),
  [num('boss', 'hard', ('Tarek says that 9 × 1,000 equals 900. What is the right answer?', 'يقول طارق إن 9 × 1,000 تساوي 900. ما الإجابة الصحيحة؟'), '9*1000'),
   mc('boss', 'hard', ('Tarek says 9 × 1,000 = 900. What would you tell him?', 'يقول طارق إن 9 × 1,000 = 900. ماذا تقول له؟'),
      [('900 is 9 × 100; 9 × 1,000 = 9,000', '900 هي 9 × 100، و9 × 1,000 = 9,000'), ('He is right', 'إجابته صحيحة'), ('9 × 1,000 = 90', '9 × 1,000 = 90'), ('9 × 1,000 = 90,000', '9 × 1,000 = 90,000')]),
   num('boss', 'hard', '1,000 × 0 = ?', '1000*0'),
   num('boss', 'hard', '1 × 1,000 = ?', '1*1000'),
  ])

# ---------- Lesson 6 · Associative Property of Multiplication (pages 81-82) ----------
idea(5, 'Y61', 6, ('Dot cards', 'بطاقات الأعداد المنقطة'),
  ('There are 10 dot cards with 5 dots on each card: 10 × 5 = 50 dots. You can also count 2 rows of 5 cards: (2 × 5) × 5 = 50.',
   'هناك 10 بطاقات على كل بطاقة 5 نقاط: 10 × 5 = 50 نقطة. ويمكن أيضًا أن نعد صفّين في كل صف 5 بطاقات: (2 × 5) × 5 = 50.'),
  [num('normal', 'easy', ('There are 10 cards with 5 dots on each card. How many dots are there?', 'هناك 10 بطاقات على كل بطاقة 5 نقاط. ما عدد النقاط؟'), '10*5', **CARDS(2, 5)),
   mc('normal', 'medium', ('Which way finds the number of dots on 2 rows of 5 cards with 5 dots each?', 'أي طريقة توجد عدد النقاط في صفّين في كل صف 5 بطاقات على كل بطاقة 5 نقاط؟'), ['2 × 5 × 5', '2 + 5 + 5', '2 × 5', '5 + 5']),
   num('normal', 'medium', ('Each row has 5 cards and each card has 5 dots. How many dots are in one row?', 'في كل صف 5 بطاقات وعلى كل بطاقة 5 نقاط. كم نقطة في الصف الواحد؟'), '5*5'),
  ])
idea(5, 'Y62', 6, ('Grouping factors: the Associative Property', 'تجميع العوامل: خاصية الدمج'),
  ('The Associative Property of Multiplication: changing how the factors are grouped does not change the product. (3 × 2) × 4 = 6 × 4 = 24 and 3 × (2 × 4) = 3 × 8 = 24.',
   'خاصية الدمج في عملية الضرب: تغيير طريقة تجميع العوامل لا يغيّر حاصل الضرب. (3 × 2) × 4 = 6 × 4 = 24 و3 × (2 × 4) = 3 × 8 = 24.'),
  [num('timed', 'easy', '3 × 2 × 4 = ?', '3*2*4', seconds=15),
   num('timed', 'easy', '4 × 2 × 3 = ?', '4*2*3', seconds=15),
   num('normal', 'easy', '3 × 2 × 5 = ?', '3*2*5'),
   num('normal', 'easy', '4 × 6 × 2 = ?', '4*6*2'),
   num('normal', 'medium', '2 × 9 × 3 = ?', '2*9*3'),
   num('normal', 'medium', '4 × 3 × 7 = ?', '4*3*7'),
   num('normal', 'medium', '4 × 5 × 6 = ?', '4*5*6'),
   num('normal', 'medium', '2 × 5 × 8 = ?', '2*5*8'),
   num('normal', 'medium', '3 × 3 × 7 = ?', '3*3*7'),
   num('normal', 'medium', '2 × 2 × 9 = ?', '2*2*9'),
   mc('normal', 'medium', ('Which property says (3 × 4) × 5 = 3 × (4 × 5)?', 'أي خاصية تقول إن (3 × 4) × 5 = 3 × (4 × 5)؟'), [ASSO, COMM, IDEN, ZERO]),
  ])
idea(5, 'Y63', 6, ('Challenge: Farouk\'s problem', 'تحدٍّ: مسألة فاروق'),
  ('Farouk solves 2 × 7 × 4 by doing (2 × 7) × 4 = 14 × 4. Easier: group the 2 and the 4 first: (2 × 4) × 7 = 8 × 7 = 56, or 2 × (7 × 4) = 2 × 28 = 56.',
   'يحل فاروق 2 × 7 × 4 فيبدأ بـ (2 × 7) × 4 = 14 × 4. والأسهل أن نجمع 2 و4 أولًا: (2 × 4) × 7 = 8 × 7 = 56، أو 2 × (7 × 4) = 2 × 28 = 56.'),
  [mc('boss', 'hard', ('Farouk starts 2 × 7 × 4 by solving 2 × 7. Where do the parentheses go?', 'بدأ فاروق حل 2 × 7 × 4 بحل 2 × 7. أين يضع القوسين؟'), ['(2 × 7) × 4', '2 × (7 × 4)', '(2 × 4) × 7', '2 × 7 × (4)']),
   num('boss', 'hard', ('Farouk is solving 2 × 7 × 4. What is the answer?', 'يحاول فاروق حل المسألة 2 × 7 × 4. ما الناتج؟'), '2*7*4'),
   mc('boss', 'hard', ('Which grouping makes 2 × 7 × 4 easy to solve in your head?', 'أي تجميع يجعل حل 2 × 7 × 4 سهلًا بالحساب العقلي؟'), ['(2 × 4) × 7 = 8 × 7', '(2 + 4) × 7', '2 × 7 + 4', '(2 × 7) + 4']),
   num('boss', 'hard', '3 × 4 × 5 = ?', '3*4*5'),
  ])

# ---------- Lesson 7 · Applying Patterns in Multiplication (pages 83-84) ----------
idea(5, 'Y71', 7, ('Multiplying by 10 in your head', 'الضرب في 10 بالحساب العقلي'),
  ('Multiplying by 10 adds a zero: 4 × 10 = 40, 8 × 10 = 80, 7 × 10 = 70. If you know 5 × 7 = 35, then 35 × 10 = 350.',
   'الضرب في 10 يضيف صفرًا: 4 × 10 = 40، و8 × 10 = 80، و7 × 10 = 70. وإذا عرفت أن 5 × 7 = 35 فإن 35 × 10 = 350.'),
  [num('timed', 'easy', '4 × 10 = ?', '4*10', seconds=8),
   num('timed', 'easy', '8 × 10 = ?', '8*10', seconds=8),
   num('timed', 'easy', '35 × 10 = ?', '35*10', seconds=10),
   num('normal', 'easy', '10 × 18 = ?', '10*18'),
   num('normal', 'easy', '3 × 10 = ?', '3*10'),
  ])
idea(5, 'Y72', 7, ('Decomposing multiples of 10', 'تحليل مضاعفات العدد 10'),
  ('A multiple of 10 can be decomposed into a factor pair with 10: 40 = 10 × 4, 70 = 10 × 7, 110 = 10 × 11. It is also the number of tens: 160 = 16 tens.',
   'يمكن تحليل مضاعف العدد 10 إلى زوج عوامل أحدهما 10: 40 = 10 × 4، و70 = 10 × 7، و110 = 10 × 11. وهو أيضًا عدد العشرات: 160 = 16 عشرة.'),
  [num('timed', 'easy', '40 = 10 × ?', '40/10', seconds=10),
   num('timed', 'easy', '70 = 10 × ?', '70/10', seconds=10),
   num('normal', 'easy', '90 = 10 × ?', '90/10'),
   num('normal', 'medium', '110 = 10 × ?', '110/10'),
   num('normal', 'easy', ('80 = ? tens', '80 = ؟ عشرات'), '80/10'),
   num('normal', 'medium', ('160 = ? tens', '160 = ؟ عشرة'), '160/10'),
   num('normal', 'medium', ('140 = ? tens', '140 = ؟ عشرة'), '140/10'),
  ])
idea(5, 'Y73', 7, ('Multiplying by multiples of 10, 100 and 1,000', 'الضرب في مضاعفات 10 و100 و1,000'),
  ('Decompose, then use the Associative Property: 7 × 20 = 7 × (2 × 10) = (7 × 2) × 10 = 14 × 10 = 140. 4 × 700 = (4 × 7) × 100 = 2,800. 3 × 4,000 = (3 × 4) × 1,000 = 12,000.',
   'نحلل العدد ثم نستخدم خاصية الدمج: 7 × 20 = 7 × (2 × 10) = (7 × 2) × 10 = 14 × 10 = 140. و4 × 700 = (4 × 7) × 100 = 2,800. و3 × 4,000 = (3 × 4) × 1,000 = 12,000.'),
  [num('normal', 'easy', '7 × 20 = ?', '7*20'),
   num('normal', 'medium', '5 × 50 = ?', '5*50'),
   num('normal', 'medium', '4 × 700 = ?', '4*700'),
   num('normal', 'medium', '3 × 4,000 = ?', '3*4000'),
   mc('normal', 'medium', ('Which shows 4 × 700 decomposed?', 'أي مما يلي يوضح 4 × 700 بعد التحليل؟'), ['(4 × 7) × 100', '(4 + 7) × 100', '4 × 7 + 100', '(4 × 7) × 10']),
  ])
idea(5, 'Y74', 7, ('Challenge: Heba and Ashraf', 'تحدٍّ: هبة وأشرف'),
  ('Heba did (4 × 8) × 10 = 32 × 10 = 320. Ashraf did 4 × (8 × 10) = 4 × 80 = 320. The same answer: they grouped the factors differently (Associative Property).',
   'حلّت هبة (4 × 8) × 10 = 32 × 10 = 320، وحلّ أشرف 4 × (8 × 10) = 4 × 80 = 320. الناتج نفسه: جمّع كل منهما العوامل بطريقة مختلفة (خاصية الدمج).'),
  [mc('boss', 'hard', ('Heba did (4 × 8) × 10 and Ashraf did 4 × (8 × 10). How are their answers?', 'حلّت هبة (4 × 8) × 10 وحلّ أشرف 4 × (8 × 10). ماذا تلاحظ على إجابتيهما؟'),
      [('The same: 320', 'متساويتان: 320'), ('Heba 320, Ashraf 32', 'هبة 320 وأشرف 32'), ('Heba 32, Ashraf 320', 'هبة 32 وأشرف 320'), ('Different: 320 and 3,200', 'مختلفتان: 320 و3,200')]),
   num('boss', 'hard', ('Ashraf did 4 × (8 × 10). What is 8 × 10?', 'حلّ أشرف 4 × (8 × 10). ما ناتج 8 × 10؟'), '8*10'),
   num('boss', 'hard', ('Heba did (4 × 8) × 10. What is the answer?', 'حلّت هبة (4 × 8) × 10. ما الناتج؟'), '4*8*10'),
   num('boss', 'hard', '6 × 300 = ?', '6*300'),
  ])

# =====================================================================================================
# UNIT 6 · Factors and Multiples · ideas Z + lesson + number (Z11 … Z63)
# =====================================================================================================
# ---------- Lesson 1 · Identifying Factors of Whole Numbers (pages 86-87) ----------
idea(6, 'Z11', 1, ('Seats in a rectangle: factor pairs', 'المقاعد في شكل مستطيل: أزواج العوامل'),
  ('24 airplane seats in a rectangle can be 1 × 24, 2 × 12, 3 × 8 or 4 × 6. The numbers that multiply to make 24 are its factors: 1, 2, 3, 4, 6, 8, 12, 24.',
   '24 مقعدًا في طائرة مرتبة على شكل مستطيل يمكن أن تكون 1 × 24 أو 2 × 12 أو 3 × 8 أو 4 × 6. الأعداد التي نضربها لنحصل على 24 هي عوامله: 1، 2، 3، 4، 6، 8، 12، 24.'),
  [mc('normal', 'easy', ('24 seats are arranged in a rectangle. Which arrangement works?', '24 مقعدًا مرتبة على شكل مستطيل. أي ترتيب يصلح؟'),
      [('4 rows of 6', '4 صفوف في كل صف 6'), ('5 rows of 5', '5 صفوف في كل صف 5'), ('7 rows of 3', '7 صفوف في كل صف 3'), ('9 rows of 3', '9 صفوف في كل صف 3')], **VEH('plane')),
   num('normal', 'easy', ('24 seats in 3 equal rows. How many seats are in each row?', '24 مقعدًا في 3 صفوف متساوية. كم مقعدًا في كل صف؟'), '24/3'),
   multi('normal', 'medium', ('Choose ALL the factors of 24.', 'اختر كل عوامل العدد 24.'), ['6', '8', '5', '9'], [0, 1]),
   tf('normal', 'easy', ('5 is a factor of 24.', 'العدد 5 من عوامل العدد 24.'), False),
  ])
idea(6, 'Z12', 1, ('Patterns for 2, 5 and 10', 'أنماط العوامل 2 و5 و10'),
  ('Counting by 2s shades the even numbers (ones digit 0, 2, 4, 6, 8): they have 2 as a factor. Counting by 5s ends in 0 or 5. Counting by 10s ends in 0. So 70 has 2, 5 and 10 as factors; 15 has only 5; 17 has none of them.',
   'العد بالقفز بمقدار 2 يظلل الأعداد الزوجية (رقم آحادها 0 أو 2 أو 4 أو 6 أو 8)، والعدد 2 من عواملها. والعد بالقفز بمقدار 5 ينتهي بـ 0 أو 5، وبمقدار 10 ينتهي بـ 0. إذن العدد 70 من عوامله 2 و5 و10، والعدد 15 من عوامله 5 فقط، والعدد 17 ليس من عوامله أي منها.'),
  [mc('timed', 'easy', ('Is 2 a factor of 26?', 'هل 2 من عوامل العدد 26؟'), [YES, NO], seconds=10),
   mc('timed', 'easy', ('Is 5 a factor of 26?', 'هل 5 من عوامل العدد 26؟'), [NO, YES], seconds=10),
   mc('normal', 'easy', ('Is 10 a factor of 70?', 'هل 10 من عوامل العدد 70؟'), [YES, NO]),
   mc('normal', 'easy', ('Is 2 a factor of 15?', 'هل 2 من عوامل العدد 15؟'), [NO, YES]),
   mc('normal', 'easy', ('Is 5 a factor of 15?', 'هل 5 من عوامل العدد 15؟'), [YES, NO]),
   multi('normal', 'medium', ('Choose ALL the factors of 70.', 'اختر كل عوامل العدد 70.'), ['2', '5', '10', '3'], [0, 1, 2]),
   tf('normal', 'medium', ('17 has 2, 5 and 10 as factors.', 'العدد 17 من عوامله 2 و5 و10.'), False),
  ])
idea(6, 'Z13', 1, ('Listing factors with a factor rainbow', 'إيجاد العوامل بمخطط قوس قزح'),
  ('List factor pairs from the outside in: 40 = 1 × 40 = 2 × 20 = 4 × 10 = 5 × 8, so the factors of 40 are 1, 2, 4, 5, 8, 10, 20, 40. 36 has 5 factor pairs: 1×36, 2×18, 3×12, 4×9, 6×6. 20 has 3: 1×20, 2×10, 4×5.',
   'نكتب أزواج العوامل من الخارج إلى الداخل: 40 = 1 × 40 = 2 × 20 = 4 × 10 = 5 × 8، إذن عوامل العدد 40 هي 1، 2، 4، 5، 8، 10، 20، 40. وللعدد 36 خمسة أزواج: 1×36، 2×18، 3×12، 4×9، 6×6. وللعدد 20 ثلاثة أزواج: 1×20، 2×10، 4×5.'),
  [mc('normal', 'medium', ('Which list shows all the factors of 40?', 'أي قائمة فيها كل عوامل العدد 40؟'), ['1, 2, 4, 5, 8, 10, 20, 40', '1, 2, 4, 8, 10, 40', '2, 4, 5, 8, 10, 20', '1, 4, 10, 40']),
   mc('normal', 'medium', ('Which list shows all the factors of 20?', 'أي قائمة فيها كل عوامل العدد 20؟'), ['1, 2, 4, 5, 10, 20', '1, 2, 5, 10, 20', '2, 4, 5, 10', '1, 4, 5, 20']),
   num('normal', 'medium', '40 = 5 × ?', '40/5'),
   num('normal', 'medium', ('How many factors does 36 have?', 'كم عاملًا للعدد 36؟'), '9'),
   tf('normal', 'medium', ('7 is a factor of 40.', 'العدد 7 من عوامل العدد 40.'), False),
  ])
idea(6, 'Z14', 1, ('Challenge: factor pairs of 36', 'تحدٍّ: أزواج عوامل العدد 36'),
  ('36 has 5 factor pairs: 1 × 36, 2 × 18, 3 × 12, 4 × 9 and 6 × 6. In the pair 6 × 6 the factor is written once, so 36 has 9 factors.',
   'للعدد 36 خمسة أزواج من العوامل: 1 × 36، 2 × 18، 3 × 12، 4 × 9، 6 × 6. في الزوج 6 × 6 نكتب العامل مرة واحدة، إذن للعدد 36 تسعة عوامل.'),
  [num('boss', 'hard', '36 = 4 × ?', '36/4'),
   num('boss', 'hard', '36 = 3 × ?', '36/3'),
   mc('boss', 'hard', ('Which is NOT a factor pair of 36?', 'أي مما يلي ليس زوج عوامل للعدد 36؟'), ['5 × 7', '4 × 9', '2 × 18', '6 × 6']),
   multi('boss', 'hard', ('Choose ALL the numbers that have 2, 5 AND 10 as factors.', 'اختر كل الأعداد التي من عواملها 2 و5 و10 معًا.'), ['30', '90', '25', '42'], [0, 1]),
  ])

# ---------- Lesson 2 · Prime and Composite Numbers (pages 88-90) ----------
idea(6, 'Z21', 2, ('Factor riddles', 'ألغاز العوامل'),
  ('Use the clues one by one. An even number between 20 and 30 with factors 1, 2, 4, 7 and 14 is 28. An even number greater than 40, less than 60, with 10 as a factor is 50. A two-digit number with the factor pair 5 and 7 is 35.',
   'نستخدم المعلومات واحدة بعد الأخرى. عدد زوجي بين 20 و30 من عوامله 1، 2، 4، 7، 14 هو 28. وعدد زوجي أكبر من 40 وأقل من 60 من عوامله 10 هو 50. وعدد من رقمين أحد أزواج عوامله 5 و7 هو 35.'),
  [num('normal', 'medium', ('The number is an even number between 20 and 30. Some of its factors include 1, 2, 4, 7, and 14. What number is it?', 'عدد زوجي يقع بين 20 و30، بعض عوامله تتضمن الأعداد 1، 2، 4، 7، 14. فما هو؟'), '28'),
   num('normal', 'medium', ('The number is an even number greater than 40. It has 10 as a factor. It is less than 60. What number is it?', 'عدد زوجي أكبر من 40، لديه العامل 10، وهو أقل من 60. فما هو؟'), '50'),
   num('normal', 'medium', ('The number is a two-digit number. It has 5 as a factor. Its tens digit is less than its ones digit. One of its factor pairs is 5 and 7. What number is it?', 'عدد مكوّن من رقمين، لديه العامل 5، رقم العشرات أقل من رقم الآحاد، وأحد أزواج عوامله 5 و7. فما هو؟'), '5*7'),
  ])
idea(6, 'Z22', 2, ('Patterns for 3, 6 and 9', 'أنماط العوامل 3 و6 و9'),
  ('A number has 3 as a factor if the sum of its digits is a number said when skip counting by 3s (63: 6 + 3 = 9). It has 9 as a factor if the sum is said when skip counting by 9s (72: 7 + 2 = 9). It has 6 as a factor if it is even AND has 3 as a factor (36).',
   'يكون العدد 3 من عوامل عدد إذا كان مجموع أرقامه عددًا نذكره عند العد بالقفز بمقدار 3 (63: 6 + 3 = 9). ويكون 9 من عوامله إذا كان المجموع عددًا نذكره عند العد بالقفز بمقدار 9 (72: 7 + 2 = 9). ويكون 6 من عوامله إذا كان زوجيًا ومن عوامله 3 (36).'),
  [mc('normal', 'easy', ('Is 3 a factor of 53?', 'هل 3 من عوامل العدد 53؟'), [('No: 5 + 3 = 8', 'لا: 5 + 3 = 8'), ('Yes: 5 + 3 = 8', 'نعم: 5 + 3 = 8'), ('Yes: 53 is odd', 'نعم: 53 عدد فردي'), ('No: 53 is odd', 'لا: 53 عدد فردي')]),
   mc('normal', 'easy', ('Is 9 a factor of 63?', 'هل 9 من عوامل العدد 63؟'), [('Yes: 6 + 3 = 9', 'نعم: 6 + 3 = 9'), ('No: 6 + 3 = 9', 'لا: 6 + 3 = 9'), ('No: 63 is odd', 'لا: 63 عدد فردي'), ('Yes: 63 is odd', 'نعم: 63 عدد فردي')]),
   mc('normal', 'medium', ('Is 6 a factor of 84?', 'هل 6 من عوامل العدد 84؟'), [('Yes: it is even and 8 + 4 = 12', 'نعم: زوجي و8 + 4 = 12'), ('No: 8 + 4 = 12', 'لا: 8 + 4 = 12'), ('No: it is even', 'لا: لأنه زوجي'), ('Yes: it ends in 4', 'نعم: لأنه ينتهي بـ 4')]),
   num('timed', 'easy', ('Add the digits of 72: 7 + 2 = ?', 'اجمع رقمي العدد 72: 7 + 2 = ؟'), '7+2', seconds=10),
   tf('normal', 'medium', ('45 has 9 as a factor because 4 + 5 = 9.', 'العدد 9 من عوامل العدد 45 لأن 4 + 5 = 9.'), True),
   tf('normal', 'medium', ('27 has 6 as a factor.', 'العدد 6 من عوامل العدد 27.'), False),
  ])
idea(6, 'Z23', 2, ('Prime or composite?', 'عدد أولي أم متعدد العوامل؟'),
  ('A prime number has exactly two factors: 1 and the number itself (23, 31). A composite number has more than two factors (18, 21, 44).',
   'العدد الأولي له عاملان فقط: 1 والعدد نفسه (23، 31). والعدد متعدد العوامل له أكثر من عاملين (18، 21، 44).'),
  [mc('timed', 'easy', ('31 is …', 'العدد 31 …'), [('Prime', 'أولي'), ('Composite', 'متعدد العوامل')], seconds=12),
   mc('timed', 'easy', ('18 is …', 'العدد 18 …'), [('Composite', 'متعدد العوامل'), ('Prime', 'أولي')], seconds=12),
   mc('normal', 'easy', ('21 is …', 'العدد 21 …'), [('Composite: 1, 3, 7, 21', 'متعدد العوامل: 1، 3، 7، 21'), ('Prime: 1, 21', 'أولي: 1، 21')]),
   mc('normal', 'easy', ('23 is …', 'العدد 23 …'), [('Prime: 1, 23', 'أولي: 1، 23'), ('Composite: 1, 3, 23', 'متعدد العوامل: 1، 3، 23')]),
   mc('normal', 'easy', ('44 is …', 'العدد 44 …'), [('Composite', 'متعدد العوامل'), ('Prime', 'أولي')]),
   fill('normal', 'easy', ('A prime number has exactly ___ factors.', 'العدد الأولي له ___ فقط.'), [('two', 'عاملان'), ('three', 'ثلاثة عوامل'), ('one', 'عامل واحد')]),
   tf('normal', 'medium', ('A composite number has more than two factors.', 'العدد متعدد العوامل له أكثر من عاملين.'), True),
  ])
idea(6, 'Z24', 2, ('Prime numbers less than 100', 'الأعداد الأولية الأقل من 100'),
  ('Circle 2, 3, 5 and 7 and cross out the other numbers you say when skip counting by 2s, 3s, 5s and 7s. The circled numbers left (except 1) are prime: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97.',
   'نضع دائرة حول 2 و3 و5 و7 ونشطب الأعداد الأخرى التي نذكرها عند العد بالقفز بمقدار 2 و3 و5 و7. الأعداد الباقية (ما عدا 1) أعداد أولية: 2، 3، 5، 7، 11، 13، 17، 19، 23، 29، 31، 37، 41، 43، 47، 53، 59، 61، 67، 71، 73، 79، 83، 89، 97.'),
  [multi('normal', 'medium', ('Choose ALL the prime numbers.', 'اختر كل الأعداد الأولية.'), ['13', '29', '27', '49'], [0, 1]),
   multi('normal', 'medium', ('Choose ALL the prime numbers.', 'اختر كل الأعداد الأولية.'), ['41', '97', '51', '91'], [0, 1]),
   mc('normal', 'medium', ('Which number is crossed out when you skip count by 7s?', 'أي عدد نشطبه عند العد بالقفز بمقدار 7؟'), ['49', '47', '43', '53']),
   tf('normal', 'medium', ('1 is a prime number.', 'العدد 1 عدد أولي.'), False),
  ])
idea(6, 'Z25', 2, ('Challenge: the ferry seats', 'تحدٍّ: مقاعد القارب الجديد'),
  ('Seats in a rectangle need a factor pair. 48 = 6 × 8 = 4 × 12 …, many rectangles. 53 is prime: only 1 row of 53. So 48 seats is better. 49 = 7 × 7 also makes a rectangle (a square).',
   'المقاعد على شكل مستطيل تحتاج زوج عوامل. 48 = 6 × 8 = 4 × 12 …، مستطيلات كثيرة. أما 53 فعدد أولي: صف واحد فقط من 53 مقعدًا. إذن 48 مقعدًا أفضل. و49 = 7 × 7 يكوّن أيضًا مستطيلًا (مربعًا).'),
  [mc('boss', 'hard', ('The ferry seats will be arranged in a rectangle. Is 48 seats or 53 seats better?', 'سيتم ترتيب مقاعد القارب الجديد على شكل مستطيل. هل الأفضل 48 مقعدًا أم 53 مقعدًا؟'),
      [('48: it has many factor pairs', '48: له أزواج عوامل كثيرة'), ('53: it is bigger', '53: لأنه أكبر'), ('53: it is prime', '53: لأنه عدد أولي'), ('They are the same', 'لا فرق بينهما')], **VEH('ferry')),
   tf('boss', 'hard', ('53 seats can only be put in 1 row of 53 (or 53 rows of 1).', '53 مقعدًا لا يمكن ترتيبها إلا في صف واحد من 53 (أو 53 صفًا في كل صف مقعد).'), True),
   mc('boss', 'hard', ('Would 49 seats make a rectangle?', 'هل يمكن ترتيب 49 مقعدًا على شكل مستطيل؟'), [('Yes: 7 rows of 7', 'نعم: 7 صفوف في كل صف 7'), ('No: 49 is prime', 'لا: 49 عدد أولي'), ('Yes: 5 rows of 9', 'نعم: 5 صفوف في كل صف 9'), ('No: 49 is odd', 'لا: 49 عدد فردي')]),
   num('boss', 'hard', ('48 seats in 6 equal rows. How many seats in each row?', '48 مقعدًا في 6 صفوف متساوية. كم مقعدًا في كل صف؟'), '48/6', **VEH('ferry')),
  ])

# ---------- Lesson 3 · Greatest Common Factor G.C.F (pages 91-92) ----------
idea(6, 'Z31', 3, ('Common factors', 'العوامل المشتركة'),
  ('List the factors of both numbers and circle the ones they share. 36: 1, 2, 3, 4, 6, 9, 12, 18, 36. 42: 1, 2, 3, 6, 7, 14, 21, 42. Common factors: 1, 2, 3, 6.',
   'نكتب عوامل العددين ونضع دائرة حول العوامل المشتركة. 36: 1، 2، 3، 4، 6، 9، 12، 18، 36. و42: 1، 2، 3، 6، 7، 14، 21، 42. العوامل المشتركة: 1، 2، 3، 6.'),
  [mc('normal', 'medium', ('What are the common factors of 36 and 42?', 'ما العوامل المشتركة للعددين 36 و42؟'), ['1, 2, 3, 6', '1, 2, 3, 4, 6', '2, 3, 6, 7', '1, 6']),
   mc('normal', 'medium', ('What are the common factors of 20 and 30?', 'ما العوامل المشتركة للعددين 20 و30؟'), ['1, 2, 5, 10', '1, 2, 4, 5, 10', '2, 5, 10, 15', '1, 10']),
   mc('normal', 'medium', ('What are the common factors of 21 and 35?', 'ما العوامل المشتركة للعددين 21 و35؟'), ['1, 7', '1, 3, 7', '1, 5, 7', '7']),
   mc('normal', 'medium', ('What are the common factors of 18 and 4?', 'ما العوامل المشتركة للعددين 18 و4؟'), ['1, 2', '1, 2, 4', '2', '1, 2, 3']),
   tf('normal', 'medium', ('The only common factor of 17 and 22 is 1.', 'العامل المشترك الوحيد للعددين 17 و22 هو 1.'), True),
  ])
idea(6, 'Z32', 3, ('The greatest common factor (GCF)', 'العامل المشترك الأكبر (ع.م.أ)'),
  ('The greatest common factor is the biggest of the common factors. GCF of 36 and 42 = 6, of 40 and 50 = 10, of 10 and 24 = 2, of 33 and 11 = 11.',
   'العامل المشترك الأكبر هو أكبر العوامل المشتركة. ع.م.أ للعددين 36 و42 = 6، وللعددين 40 و50 = 10، وللعددين 10 و24 = 2، وللعددين 33 و11 = 11.'),
  [num('timed', 'easy', ('Find the GCF of 40 and 50.', 'أوجد ع.م.أ للعددين 40 و50.'), '10', seconds=20),
   num('normal', 'easy', ('Find the GCF of 10 and 24.', 'أوجد ع.م.أ للعددين 10 و24.'), '2'),
   num('normal', 'easy', ('Find the GCF of 33 and 11.', 'أوجد ع.م.أ للعددين 33 و11.'), '11'),
   num('normal', 'medium', ('Find the GCF of 36 and 42.', 'أوجد ع.م.أ للعددين 36 و42.'), '6'),
   num('normal', 'medium', ('Find the GCF of 20 and 30.', 'أوجد ع.م.أ للعددين 20 و30.'), '10'),
  ])
idea(6, 'Z33', 3, ('Challenge: equal groups with the GCF', 'تحدٍّ: مجموعات متساوية باستخدام ع.م.أ'),
  ('To make the greatest number of equal groups with nothing left over, use the GCF. 36 girls and 27 boys: GCF = 9 groups of each, with 4 girls or 3 boys in a group. Amira: 24 apples and 36 bags of candy → 12 packs, 2 apples and 3 bags each. Mohab: 7 roses and 14 daisies → 7 arrangements, 1 rose and 2 daisies each.',
   'لتكوين أكبر عدد من المجموعات المتساوية بلا باقٍ نستخدم ع.م.أ. 36 بنتًا و27 ولدًا: ع.م.أ = 9 مجموعات من كل منهما، في كل مجموعة 4 بنات أو 3 أولاد. أميرة: 24 تفاحة و36 كيسًا من الحلوى ← 12 عبوة، في كل عبوة 2 تفاحة و3 أكياس. مهاب: 7 زهرات ورد و14 زهرة أقحوان ← 7 تنسيقات، في كل تنسيق وردة واحدة و2 أقحوان.'),
  [num('boss', 'hard', ('36 girls and 27 boys go on a field trip in groups of girls and groups of boys, each group the same size. What is the greatest number of groups of girls?', 'يذهب 36 بنتًا و27 ولدًا في رحلة، ويُقسَّمون إلى مجموعات من البنات ومجموعات من الأولاد، وكل المجموعات متساوية العدد. ما أكبر عدد من مجموعات البنات؟'), '9', unit=GROUPS),
   num('boss', 'hard', ('27 boys are divided into 9 equal groups. How many boys are in each group?', 'قُسِّم 27 ولدًا إلى 9 مجموعات متساوية. كم ولدًا في كل مجموعة؟'), '27/9'),
   num('boss', 'hard', ('Amira has 24 apples and 36 bags of candy. What is the greatest number of identical snack packs she can make?', 'لدى أميرة 24 تفاحة و36 كيسًا من الحلوى. ما أكبر عدد من العبوات المتماثلة يمكنها تكوينه؟'), '12', unit=PACKS),
   num('boss', 'hard', ('Amira makes 12 snack packs from 36 bags of candy. How many bags of candy are in each pack?', 'كوّنت أميرة 12 عبوة من 36 كيسًا من الحلوى. كم كيسًا في كل عبوة؟'), '36/12'),
   num('boss', 'hard', ('Mohab has 7 roses and 14 daisies. What is the greatest number of identical flower arrangements?', 'لدى مهاب 7 زهرات من الورد و14 زهرة أقحوان. ما أكبر عدد من تنسيقات الزهور المتطابقة؟'), '7'),
   num('boss', 'hard', ('Mohab makes 7 arrangements with 14 daisies. How many daisies are in each one?', 'كوّن مهاب 7 تنسيقات من 14 زهرة أقحوان. كم زهرة أقحوان في كل تنسيق؟'), '14/7'),
  ])

# ---------- Lesson 4 · Identifying Multiples of Whole Numbers (pages 93-94) ----------
idea(6, 'Z41', 4, ('Skip counting makes multiples', 'العد بالقفز يكوّن المضاعفات'),
  ('The multiples of a number are the numbers you say when you skip count by it from 0: multiples of 3 are 3, 6, 9, 12, 15 …; multiples of 4 are 4, 8, 12, 16 …',
   'مضاعفات العدد هي الأعداد التي نذكرها عند العد بالقفز بمقداره بدءًا من 0: مضاعفات 3 هي 3، 6، 9، 12، 15 …، ومضاعفات 4 هي 4، 8، 12، 16 …'),
  [num('timed', 'easy', ('Skip count by 3: 3, 6, 9, 12, ?', 'عد بالقفز بمقدار 3: 3، 6، 9، 12، ؟'), '15', seconds=10, **LINE(30, [3], upto=12)),
   num('timed', 'easy', ('Skip count by 4: 4, 8, 12, 16, ?', 'عد بالقفز بمقدار 4: 4، 8، 12، 16، ؟'), '20', seconds=10, **LINE(30, [4], upto=16)),
   num('normal', 'easy', ('Skip count by 5: 5, 10, 15, 20, 25, ?', 'عد بالقفز بمقدار 5: 5، 10، 15، 20، 25، ؟'), '30', **LINE(30, [5], upto=25)),
   multi('normal', 'easy', ('Choose ALL the multiples of 4.', 'اختر كل مضاعفات العدد 4.'), ['12', '28', '14', '18'], [0, 1]),
   tf('normal', 'easy', ('27 is a multiple of 9.', 'العدد 27 من مضاعفات العدد 9.'), True),
   tf('normal', 'easy', ('25 is a multiple of 2.', 'العدد 25 من مضاعفات العدد 2.'), False),
  ])
idea(6, 'Z42', 4, ('Patterns in the multiples', 'الأنماط في المضاعفات'),
  ('Multiples of 2 are the even numbers. Multiples of 5 end in 0 or 5. Multiples of 10 end in 0. Every multiple of 10 is also a multiple of 2 and of 5.',
   'مضاعفات 2 هي الأعداد الزوجية. ومضاعفات 5 تنتهي بـ 0 أو 5. ومضاعفات 10 تنتهي بـ 0. وكل مضاعف للعدد 10 هو أيضًا مضاعف للعدد 2 وللعدد 5.'),
  [mc('normal', 'easy', ('Which number is a multiple of 5?', 'أي عدد من مضاعفات العدد 5؟'), ['45', '52', '58', '41']),
   mc('normal', 'easy', ('Which number is a multiple of 10?', 'أي عدد من مضاعفات العدد 10؟'), ['60', '65', '16', '105']),
   mc('normal', 'medium', ('Which number is a multiple of 6?', 'أي عدد من مضاعفات العدد 6؟'), ['42', '32', '26', '16']),
   num('normal', 'medium', ('What is the 7th multiple of 8? (8, 16, 24, …)', 'ما المضاعف السابع للعدد 8؟ (8، 16، 24، …)'), '7*8'),
  ])
idea(6, 'Z43', 4, ('Challenge: Tahani walks home', 'تحدٍّ: تهاني تكمل الطريق سيرًا'),
  ('The bus stops every 4 km: at 4, 8, 12, 16, 20 km. Tahani lives 18 km from school. The last stop before 18 is 16 km, so she walks 18 − 16 = 2 km.',
   'يتوقف الأتوبيس كل 4 كيلومترات: عند 4، 8، 12، 16، 20 كم. تعيش تهاني على بُعد 18 كم من المدرسة. آخر توقف قبل 18 هو 16 كم، إذن تسير 18 − 16 = 2 كم.'),
  [num('boss', 'hard', ('The bus stops every 4 km. Tahani lives 18 km from school. How far does she walk from the bus stop?', 'يتوقف الأتوبيس كل 4 كيلومترات. تعيش تهاني على بُعد 18 كم من المدرسة. ما المسافة التي تسيرها من منطقة توقف الأتوبيس إلى المنزل؟'), '18-16', unit=KM, **LINE(20, [], bus=True, stop=18)),
   num('boss', 'hard', ('The bus stops every 4 km. At which km is the last stop before Tahani\'s house at 18 km?', 'يتوقف الأتوبيس كل 4 كيلومترات. عند أي كيلومتر يكون آخر توقف قبل منزل تهاني (18 كم)؟'), '16', unit=KM, **LINE(20, [], bus=True, stop=18)),
   tf('boss', 'hard', ('A bus that stops every 4 km stops at 18 km.', 'الأتوبيس الذي يتوقف كل 4 كيلومترات يتوقف عند 18 كم.'), False),
   num('boss', 'hard', ('A bus stops every 4 km. How many stops does it make in the first 20 km?', 'يتوقف أتوبيس كل 4 كيلومترات. كم مرة يتوقف في أول 20 كم؟'), '20/4'),
  ])

# ---------- Lesson 5 · Common Multiples (pages 95-96) ----------
idea(6, 'Z51', 5, ('The bus stops here', 'منطقة انتظار الأتوبيس'),
  ('Bus 1 stops every 3 km, Bus 2 every 5 km and Bus 3 every 9 km. Bus 1 and Bus 2 both stop at 15 km and 30 km (multiples of 3 and of 5). Bus 1 and Bus 3 both stop at 9, 18 and 27 km.',
   'يتوقف الأتوبيس رقم (1) كل 3 كيلومترات، والأتوبيس رقم (2) كل 5 كيلومترات، والأتوبيس رقم (3) كل 9 كيلومترات. يتوقف الأتوبيسان (1) و(2) معًا عند 15 كم و30 كم (مضاعفات 3 و5). ويتوقف الأتوبيسان (1) و(3) معًا عند 9 و18 و27 كم.'),
  [num('normal', 'medium', ('Bus 1 stops every 3 km and Bus 2 stops every 5 km. At which km do they first stop at the same place?', 'يتوقف الأتوبيس رقم (1) كل 3 كيلومترات والأتوبيس رقم (2) كل 5 كيلومترات. عند أي كيلومتر يتوقفان معًا أول مرة؟'), '15', unit=KM, **LINE(30, [], bus=True)),
   multi('normal', 'medium', ('Bus 1 stops every 3 km and Bus 3 every 9 km. Choose ALL the places (up to 30 km) where both stop.', 'يتوقف الأتوبيس رقم (1) كل 3 كيلومترات والأتوبيس رقم (3) كل 9 كيلومترات. اختر كل الأماكن (حتى 30 كم) التي يتوقفان فيها معًا.'),
      [('9 km', '9 كم'), ('18 km', '18 كم'), ('27 km', '27 كم'), ('12 km', '12 كم')], [0, 1, 2], **LINE(30, [], bus=True)),
   mc('normal', 'medium', ('Bus 2 stops every 5 km. Where does it NOT stop?', 'يتوقف الأتوبيس رقم (2) كل 5 كيلومترات. أين لا يتوقف؟'), [('12 km', '12 كم'), ('15 km', '15 كم'), ('25 km', '25 كم'), ('30 km', '30 كم')], **LINE(30, [], bus=True)),
  ])
idea(6, 'Z52', 5, ('Common multiples', 'المضاعفات المشتركة'),
  ('A common multiple is a multiple of both numbers. Multiples of 3: 3, 6, 9, 12, 15, 18, 21, 24 …; multiples of 4: 4, 8, 12, 16, 20, 24 … The common multiples of 3 and 4 are 12, 24, …',
   'المضاعف المشترك هو مضاعف للعددين معًا. مضاعفات 3: 3، 6، 9، 12، 15، 18، 21، 24 …، ومضاعفات 4: 4، 8، 12، 16، 20، 24 … المضاعفات المشتركة للعددين 3 و4 هي 12، 24، …'),
  [mc('normal', 'easy', ('Which is a common multiple of 5 and 2?', 'أي عدد مضاعف مشترك للعددين 5 و2؟'), ['10', '15', '12', '7']),
   mc('normal', 'easy', ('Which is a common multiple of 3 and 4?', 'أي عدد مضاعف مشترك للعددين 3 و4؟'), ['12', '16', '9', '7']),
   mc('normal', 'easy', ('Which is a common multiple of 9 and 3?', 'أي عدد مضاعف مشترك للعددين 9 و3؟'), ['18', '12', '21', '6']),
   mc('normal', 'medium', ('Which is a common multiple of 4 and 5?', 'أي عدد مضاعف مشترك للعددين 4 و5؟'), ['20', '15', '24', '9']),
   multi('normal', 'medium', ('Choose ALL the common multiples of 2 and 6.', 'اختر كل المضاعفات المشتركة للعددين 2 و6.'), ['6', '12', '8', '9'], [0, 1]),
   tf('normal', 'medium', ('15 is a common multiple of 5 and 3.', 'العدد 15 مضاعف مشترك للعددين 5 و3.'), True),
  ])
idea(6, 'Z53', 5, ('Challenge: the first two common multiples', 'تحدٍّ: أول مضاعفين مشتركين'),
  ('List the multiples of each number until you find two that match. 5 and 7: 35 and 70. 6 and 9: 18 and 36. 6 and 8: 24 and 48. 4 and 7: 28 and 56.',
   'نكتب مضاعفات كل عدد حتى نجد مضاعفين مشتركين. 5 و7: 35 و70. و6 و9: 18 و36. و6 و8: 24 و48. و4 و7: 28 و56.'),
  [mc('boss', 'hard', ('What are the first two common multiples of 5 and 7?', 'ما أول مضاعفين مشتركين للعددين 5 و7؟'), [('35 and 70', '35 و70'), ('12 and 24', '12 و24'), ('35 and 45', '35 و45'), ('5 and 7', '5 و7')]),
   mc('boss', 'hard', ('What are the first two common multiples of 6 and 9?', 'ما أول مضاعفين مشتركين للعددين 6 و9؟'), [('18 and 36', '18 و36'), ('54 and 108', '54 و108'), ('15 and 30', '15 و30'), ('18 and 27', '18 و27')]),
   num('boss', 'hard', ('What is the first common multiple of 6 and 8?', 'ما أول مضاعف مشترك للعددين 6 و8؟'), '24'),
   num('boss', 'hard', ('What is the first common multiple of 4 and 7?', 'ما أول مضاعف مشترك للعددين 4 و7؟'), '4*7'),
  ])

# ---------- Lesson 6 · Relationships between Factors and Multiples (pages 97-98) ----------
idea(6, 'Z61', 6, ('Factor or multiple?', 'عامل أم مضاعف؟'),
  ('If 3 × 4 = 12, then 3 and 4 are factors of 12, and 12 is a multiple of 3 and of 4. A factor is never greater than its number; a multiple is never smaller.',
   'إذا كان 3 × 4 = 12 فإن 3 و4 عاملان للعدد 12، و12 مضاعف للعدد 3 وللعدد 4. العامل لا يكون أكبر من العدد، والمضاعف لا يكون أصغر منه.'),
  [tf('normal', 'easy', ('3 is a factor of 12.', 'العدد 3 عامل من عوامل العدد 12.'), True),
   tf('normal', 'easy', ('12 is a multiple of 3.', 'العدد 12 من مضاعفات العدد 3.'), True),
   tf('normal', 'medium', ('12 is a factor of 3.', 'العدد 12 عامل من عوامل العدد 3.'), False),
   fill('normal', 'medium', ('4 × 6 = 24, so 24 is a ___ of 4.', '4 × 6 = 24، إذن 24 ___ للعدد 4.'), [('multiple', 'مضاعف'), ('factor', 'عامل'), ('prime', 'عدد أولي')]),
   fill('normal', 'medium', ('4 × 6 = 24, so 6 is a ___ of 24.', '4 × 6 = 24، إذن 6 ___ للعدد 24.'), [('factor', 'عامل'), ('multiple', 'مضاعف'), ('product', 'حاصل ضرب')]),
  ])
idea(6, 'Z62', 6, ('Making connections: 3, 6 and 12', 'ربط العلاقات: 3 و6 و12'),
  ('In 3, 6 and 12 each number is a factor of the bigger ones: 3 is a factor of 6 and 12, 6 is a factor of 12. 12 is a multiple of 3 and of 6. In 4, 8, 16 and 24: 4 and 8 are factors of 16 and 24.',
   'في الأعداد 3 و6 و12 كل عدد عامل للأعداد الأكبر منه: 3 عامل للعددين 6 و12، و6 عامل للعدد 12. و12 مضاعف للعدد 3 وللعدد 6. وفي 4 و8 و16 و24: العددان 4 و8 عاملان للعددين 16 و24.'),
  [multi('normal', 'medium', ('Choose ALL the true sentences about 3, 6 and 12.', 'اختر كل الجمل الصحيحة عن الأعداد 3 و6 و12.'),
      [('6 is a multiple of 3', '6 مضاعف للعدد 3'), ('3 is a factor of 12', '3 عامل للعدد 12'), ('12 is a factor of 6', '12 عامل للعدد 6'), ('3 is a multiple of 6', '3 مضاعف للعدد 6')], [0, 1]),
   tf('normal', 'medium', ('8 is a factor of 16 and of 24.', 'العدد 8 عامل للعدد 16 وللعدد 24.'), True),
   tf('normal', 'medium', ('16 is a multiple of 24.', 'العدد 16 من مضاعفات العدد 24.'), False),
  ])
idea(6, 'Z63', 6, ('Challenge: multiples riddles', 'تحدٍّ: ألغاز المضاعفات'),
  ('An odd number that is a multiple of 3 and 5 and greater than 20: 45 (or 75 …; 30 and 60 are even). An even multiple of 4 and 8 between 10 and 20: 16. An even multiple of 3, 4 and 6: 12 (or 24, 36 …).',
   'عدد فردي مضاعف للعددين 3 و5 وأكبر من 20: 45 (أو 75 …؛ أما 30 و60 فزوجيان). وعدد زوجي مضاعف للعددين 4 و8 بين 10 و20: 16. وعدد زوجي مضاعف للأعداد 3 و4 و6: 12 (أو 24، 36 …).'),
  [mc('boss', 'hard', ('The number is an odd number. It is a multiple of 3 and 5. It is greater than 20. What number can it be?', 'عدد فردي، مضاعف للعددين 3 و5، وأكبر من 20. ما العدد الذي يمكن أن يكون؟'), ['45', '30', '15', '35']),
   num('boss', 'hard', ('The number is an even number. It is a multiple of 4 and 8. It is between 10 and 20. What number is it?', 'عدد زوجي، مضاعف للعددين 4 و8، ويقع بين العددين 10 و20. فما هو؟'), '16'),
   mc('boss', 'hard', ('The number is an even number. It is a multiple of 3, 4, and 6. What number can it be?', 'عدد زوجي، مضاعف للأعداد 3 و4 و6. ما العدد الذي يمكن أن يكون؟'), ['12', '18', '16', '9']),
   tf('boss', 'hard', ('30 fits the riddle "odd, multiple of 3 and 5, greater than 20".', 'العدد 30 يحقق اللغز «فردي، مضاعف للعددين 3 و5، وأكبر من 20».'), False),
  ])

# ----------------------------------------------------------------------------------------------------
HEAD = {
 5: ('''/* Math · Grade 4 · Unit 5 "Multiplication as a Relationship" · Languages track (English), first term 2026/2027
   Source: the English school book, Unit 5 (pages 70-84): Concept 1 "Multiplicative Comparisons" (lessons 1-3), Concept 2 "Properties and Patterns of Multiplication" (lessons 4-7).
   Idea ids: Y + lesson + number (Y11 … Y74; A-X are used by Units 1-4).   Boss ideas: Y13, Y24, Y33, Y43, Y54, Y63, Y74.
   The book is an activity book with no printed answers: numbers and situations are the book's own and EVERY number answer is computed (calc, checked by tools/check_questions.js).
   Pictures: the owner's Gemini vehicles (math/assets/veh_*.webp, 2 Nov 2026) in vehFig; tapeFig and arrayFig drawn in code (math/g4_art.js). A picture never shows the answer.
   Review notes:
   - Lesson 1: the strips in Y13 (24 cm and 8 cm) are ours (the book gives no lengths).
   - Lesson 2: the speeds are the infographic's ("about", "nearly"): sailboat 2 × walking, car 20 × walking, cruise ship 8 × walking, high-speed train 8 × cruise ship, airplane nearly 200 × walking.
     The bicycle "3 to 4 times faster than a sailboat" is a range and is not asked. The story equations are asked as choices (the book: "you do not have to solve").
   - Lesson 3: Y33 "boat 12 seats vs car 4 seats" uses the book's 12-seat boat and the table (the book asks the child to write his own comparison). The ferry picture stands for the boat.
   - Lesson 4: the definition of the Commutative Property is not printed (the child writes it); it is the a × b = b × a form of the book's array equations. Badr and Salma are both right.
   - Lesson 5: the metro / walking blanks are open (no numbers printed), not asked.
   - Not asked: Writing About Math (open), Check Your Understanding, drawing arrays on the grid, place value models.
   Generated by math/tools/gen_mg4u56.py together with questions_mg4u5_ar.js (same ids, phrasings order and answers). */''',
     '''/* الصف الرابع الابتدائي · الرياضيات (عربي) · الوحدة الخامسة «عملية الضرب كعلاقة»، الفصل الدراسي الأول 2026/2027
   المصدر: كتاب الوزارة العربي، الوحدة الخامسة (صفحات 70–84): المفهوم الأول «المقارنة باستخدام عملية الضرب» (الدروس 1–3)، المفهوم الثاني «خواص وأنماط عملية الضرب» (الدروس 4–7).
   أرقام الأفكار: Y + رقم الدرس + رقم (Y11 … Y74). أفكار التحدي (Boss): Y13, Y24, Y33, Y43, Y54, Y63, Y74.
   الملف مطابق لملف اللغات math/questions_mg4u5.js (نفس الأفكار والترتيب والإجابات)، والكتابان متطابقان في الأعداد. كل إجابة رقمية محسوبة (calc).
   مصطلحات الكتاب العربي: «تساوي ... أضعاف العدد»، خاصية الإبدال، خاصية العنصر المحايد، خاصية الضرب في صفر، خاصية الدمج، تحليل العدد إلى عوامله، الدراجة البخارية، الأتوبيس، عربة المترو.
   الرمز في المعادلات حرف لاتيني (a، n، m) كما في الكتاب. الصور: وسائل النقل التي أرسلها المالك (جيميني) ومخطط الشرائط والمصفوفات المرسومة بالكود.
   ملاحظات للمراجعة:
   - الدرس 1: طولا الشريطين في Y13 (24 سم و8 سم) من عندنا لأن الكتاب لا يذكر أطوالًا.
   - الدرس 2: «الدراجة أسرع من 3 إلى 4 أضعاف القارب الشراعي» مدى وليس عددًا، فلم يُسأل عنه.
   - الدرس 7: مثال الكتاب العربي فيه خطأ مطبعي «(7 × 2) × 10 = 4 × 10 = 140» والصحيح 14 × 10؛ السؤال يستخدم الحساب الصحيح.
   - لا يُسأل عن: «الكتابة عن الرياضيات»، و«تحقق من فهمك»، ورسم المصفوفات، ونماذج القيمة المكانية. */'''),
 6: ('''/* Math · Grade 4 · Unit 6 "Factors and Multiples" · Languages track (English), first term 2026/2027
   Source: the English school book, Unit 6 (pages 85-98): Concept 1 "Understanding Factors" (lessons 1-3), Concept 2 "Understanding Multiples" (lessons 4-6).
   Idea ids: Z + lesson + number (Z11 … Z63).   Boss ideas: Z14, Z25, Z33, Z43, Z53, Z63.
   Every number answer is computed (calc) or read from the book's riddles. Pictures: owner's Gemini vehicles and bus stop background (math/assets/veh_*.webp, bg_busstop.jpg) in vehFig and
   skipLine; arrayFig drawn in code.
   Review notes:
   - Lesson 1: the patterns for 2, 5 and 10 are read from the shaded hundreds charts (the book does not print them as rules).
   - Lesson 2: the rules for 3, 6 and 9 and the definitions of prime and composite ARE printed. The ferry: 48 seats is better (many factor pairs); 53 is prime; 49 = 7 × 7 (derived).
   - Lesson 3: the field trip: GCF(36, 27) = 9 groups, 4 girls / 3 boys each; Amira 12 packs (2 apples, 3 bags of candy); Mohab 7 arrangements (1 rose, 2 daisies).
   - Lesson 6: riddles 1 and 3 have more than one answer (the book says so): asked as a choice with one fitting option. The factor / multiple relation is derived from 3 × 4 = 12.
   - Not asked: Writing About Math, Check Your Understanding, the partner card games, colouring hundreds charts.
   Generated by math/tools/gen_mg4u56.py together with questions_mg4u6_ar.js. */''',
     '''/* الصف الرابع الابتدائي · الرياضيات (عربي) · الوحدة السادسة «العوامل والمضاعفات»، الفصل الدراسي الأول 2026/2027
   المصدر: كتاب الوزارة العربي، الوحدة السادسة (صفحات 85–98): المفهوم الأول «فهم العوامل» (الدروس 1–3)، المفهوم الثاني «فهم المضاعفات» (الدروس 4–6).
   أرقام الأفكار: Z + رقم الدرس + رقم (Z11 … Z63). أفكار التحدي (Boss): Z14, Z25, Z33, Z43, Z53, Z63.
   الملف مطابق لملف اللغات math/questions_mg4u6.js، والكتابان متطابقان في الأعداد. مصطلحات الكتاب العربي: عدد أولي، عدد متعدد العوامل (وليس «غير أولي»)، العامل المشترك الأكبر (ع.م.أ)،
   مخطط قوس قزح، العد بالقفز، منطقة انتظار الأتوبيس، القارب الجديد.
   ملاحظات للمراجعة:
   - الدرس 1: أنماط 2 و5 و10 مأخوذة من لوحات المئة المظللة (الكتاب لا يكتبها قواعد).
   - الدرس 2: قواعد 3 و6 و9 وتعريفا العدد الأولي ومتعدد العوامل مطبوعة. القارب: 48 مقعدًا أفضل؛ 53 عدد أولي؛ 49 = 7 × 7 (مستنتج).
   - الدرس 6: اللغزان 1 و3 لهما أكثر من إجابة (كما يقول الكتاب)، فسُئلا اختيارًا فيه إجابة واحدة مناسبة.
   - لا يُسأل عن: «الكتابة عن الرياضيات»، و«تحقق من فهمك»، ولعبة البطاقات مع الزميل، وتلوين لوحات المئة. */'''),
}
LES = {
 5: (['Lesson 1 · Multiplicative Comparison (pages 71-72)', 'Lesson 2 · Creating Multiplicative Comparison Equations (pages 73-74)', 'Lesson 3 · Solving Multiplicative Comparison Equations (pages 75-76)',
      'Lesson 4 · Commutative Property of Multiplication (pages 77-78)', 'Lesson 5 · Identity Property and the Zero Property (pages 79-80)', 'Lesson 6 · Associative Property of Multiplication (pages 81-82)',
      'Lesson 7 · Applying Patterns in Multiplication (pages 83-84)'],
     ['الدرس 1 · مقارنة الأعداد باستخدام عملية الضرب (ص 71–72)', 'الدرس 2 · تكوين معادلات للمقارنة باستخدام عملية الضرب (ص 73–74)', 'الدرس 3 · حل معادلات للمقارنة باستخدام عملية الضرب (ص 75–76)',
      'الدرس 4 · خاصية الإبدال في عملية الضرب (ص 77–78)', 'الدرس 5 · خاصية العنصر المحايد والضرب في صفر (ص 79–80)', 'الدرس 6 · خاصية الدمج في عملية الضرب (ص 81–82)',
      'الدرس 7 · تطبيق الأنماط في عملية الضرب (ص 83–84)']),
 6: (['Lesson 1 · Identifying Factors of Whole Numbers (pages 86-87)', 'Lesson 2 · Prime and Composite Numbers (pages 88-90)', 'Lesson 3 · Greatest Common Factor G.C.F (pages 91-92)',
      'Lesson 4 · Identifying Multiples of Whole Numbers (pages 93-94)', 'Lesson 5 · Common Multiples (pages 95-96)', 'Lesson 6 · Relationships between Factors and Multiples (pages 97-98)'],
     ['الدرس 1 · تحديد عوامل الأعداد الصحيحة (ص 86–87)', 'الدرس 2 · الأعداد الأولية والأعداد متعددة العوامل (ص 88–90)', 'الدرس 3 · العامل المشترك الأكبر (ع.م.أ) (ص 91–92)',
      'الدرس 4 · تحديد مضاعفات الأعداد الصحيحة (ص 93–94)', 'الدرس 5 · المضاعفات المشتركة (ص 95–96)', 'الدرس 6 · العلاقات بين العوامل والمضاعفات (ص 97–98)']),
}
TITLE = {5: ('Multiplication as a Relationship', 'عملية الضرب كعلاقة'), 6: ('Factors and Multiples', 'العوامل والمضاعفات')}

def write(u, ar):
    cid = 'mg4u%d' % u
    out = [HEAD[u][1 if ar else 0], '(function () {',
           "window.CHAPTER = { id: '%s', title: '%s', grade: '%s', track: '%s' };" % (cid, TITLE[u][1 if ar else 0], 'الصف الرابع' if ar else 'Grade 4', 'عربي' if ar else 'Languages'),
           '', 'window.IDEAS = [']
    rows, les = [], 0
    for I in UNITS_IDEAS[u]:
        if I['lesson'] != les:
            les = I['lesson']; rows.append(('  /* ---------- %s ---------- */' % LES[u][1 if ar else 0][les - 1], None))
        vs = ',\n'.join('      ' + json.dumps(tr(v, ar), ensure_ascii=False, separators=(',', ':')) for v in I['variants'])
        head = json.dumps(dict(id=I['id'], lesson=les, **({'boss': True} if I['variants'][0]['mode'] == 'boss' else {}), concept=L(I['concept'], ar), explain=L(I['explain'], ar)), ensure_ascii=False, separators=(',', ':'))[:-1]
        rows.append(('  ' + head + ',\n    "variants": [\n' + vs + '\n    ] }', 1))
    body = ''
    for i, (txt, isI) in enumerate(rows):
        later = any(x[1] for x in rows[i + 1:])
        body += txt + (',' if isI and later else '') + '\n'
    out.append(body + '];\n})();\n')
    open(OUT + '/math/questions_%s%s.js' % (cid, '_ar' if ar else ''), 'w').write('\n'.join(out))

for u in (5, 6):
    write(u, False); write(u, True)
    print('Unit', u, len(UNITS_IDEAS[u]), 'ideas', sum(len(I['variants']) for I in UNITS_IDEAS[u]), 'phrasings')
