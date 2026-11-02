# Generator of the Grade 4 Math Units 7 and 8 question files (both books side by side, same ids, order and answers):
#   math/questions_mg4u7.js + math/questions_mg4u7_ar.js   «Multiplication and Division / عمليتا الضرب والقسمة»
#   math/questions_mg4u8.js + math/questions_mg4u8_ar.js   «Order of Operations / ترتيب العمليات»
# Run from the site folder: python3 math/tools/gen_mg4u78.py .   (edit here, never the four files by hand)
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
    return re.sub(r'[\d(][\d,./\s×+−=()?÷²a-z]*[\d)?²a-z]|\d', run, s).replace('⁩:⁦', ':')   # clock times stay 7:00

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
        elif key == 'pic' and 'items' in val: out[key] = dict(val, items=[[a[0], (a[1][1] if ar else a[1][0]) if isinstance(a[1], tuple) else a[1]] for a in val['items']])
        elif key == 'pic': out[key] = {k: (L(x, ar) if isinstance(x, tuple) else x) for k, x in val.items()}
        else: out[key] = val
    return out

TIMES = ('times', 'مرات'); KM = ('km', 'كم'); GROUPS = ('groups', 'مجموعات'); PACKS = ('packs', 'عبوات'); MIN = ('minutes', 'دقيقة'); CM = ('cm', 'سم')
YES, NO = ('Yes', 'نعم'), ('No', 'لا')
COMM, ZERO, IDEN, ASSO = ('The Commutative Property', 'خاصية الإبدال'), ('The Zero Property', 'خاصية الضرب في صفر'), ('The Identity Property', 'خاصية العنصر المحايد'), ('The Associative Property', 'خاصية الدمج')

def AREA(left, cells, top=None, bottom=None):
    p = {'left': left, 'cells': cells}
    if top: p['top'] = top
    if bottom: p['bottom'] = bottom
    return {'fig': 'areaBox', 'pic': p}
def COL(a, b, rows, notes, total=''): return {'fig': 'colMul', 'pic': dict(a=a, b=b, rows=rows, notes=notes, total=total)}
def VEHB(bg, *items):
    d = VEH(*items); d['pic']['bg'] = bg; return d
def R(q, r): return ('%s R%s' % (q, r), '%s والباقي %s' % (q, r))
LE = ('LE', 'جنيهًا'); DAYS = ('days', 'يومًا'); BUSES = ('buses', 'أتوبيسات'); MB = ('microbuses', 'ميكروباص'); TEAMS = ('teams', 'فرق'); MUF = ('muffins', 'فطيرة'); STAMPS = ('stamps', 'طابعًا')


UNITS_IDEAS = {7: [], 8: []}
def idea(u, i, lesson, concept, explain, variants):
    explain = g4_explain.prepare(i, explain, variants)   # short rule for the idea, own explanation for each question
    UNITS_IDEAS[u].append(dict(id=i, lesson=lesson, concept=concept, explain=explain, variants=variants))
MUL, DIV = ('×', '×'), ('÷', '÷')

# =====================================================================================================
# UNIT 7 · Multiplication and Division · ideas Y7 + lesson (2 digits) + number, e.g. Y7011 … Y7112
# =====================================================================================================
# ---------- Lesson 1 · The Area Model Strategy (pages 100-101) ----------
idea(7, 'Y7011', 1, ('Multiplying with an area model', 'الضرب باستخدام نموذج مساحة المستطيل'),
  ('Split the two-digit number into tens and ones and draw one part of the rectangle for each: 17 × 4 = (10 × 4) + (7 × 4) = 40 + 28 = 68. The parts of the rectangle are added at the end.',
   'نحلل العدد المكوّن من رقمين إلى عشرات وآحاد ونرسم جزءًا من المستطيل لكل منهما: 17 × 4 = (10 × 4) + (7 × 4) = 40 + 28 = 68. ثم نجمع نواتج الأجزاء.'),
  [num('normal', 'easy', '17 × 4 = ?', '17*4', **AREA('4', ['40', '?'], ['10', '7'])),
   num('normal', 'easy', '21 × 3 = ?', '21*3', **AREA('3', ['60', '?'], ['20', '1'])),
   num('normal', 'easy', '14 × 5 = ?', '14*5'),
   num('normal', 'medium', '35 × 7 = ?', '35*7', **AREA('7', ['?', '?'], ['30', '5'])),
   num('normal', 'medium', '91 × 4 = ?', '91*4'),
   num('normal', 'medium', '88 × 6 = ?', '88*6'),
  ])
idea(7, 'Y7012', 1, ('The Nile river bus', 'الأتوبيس النهري في النيل'),
  ('22 passengers fit on the river bus each trip: 5 trips carry at most 22 × 5 = 110 passengers. Its route is 58 km: 9 times a day is 58 × 9 = (50 × 9) + (8 × 9) = 450 + 72 = 522 km.',
   'يستوعب الأتوبيس النهري 22 راكبًا في المرة الواحدة: 5 رحلات تحمل على الأكثر 22 × 5 = 110 ركاب. وطول مساره 58 كيلومترًا: 9 مرات يوميًا = 58 × 9 = (50 × 9) + (8 × 9) = 450 + 72 = 522 كيلومترًا.'),
  [num('normal', 'medium', ('Twenty-two passengers can fit on each river bus at a time. What is the maximum number of passengers the river bus can carry if it makes 5 trips?', 'يمكن أن يستوعب كل أتوبيس نهري 22 راكبًا في المرة الواحدة. ما أقصى عدد من الركاب يمكن أن يحمله الأتوبيس النهري خلال 5 رحلات؟'), '22*5', **VEHB('nile', 'riverbus')),
   num('normal', 'medium', ('The route that the river bus travels is 58 kilometers long. How many kilometers does it travel if it follows this route 9 times a day?', 'يبلغ طول المسار الذي يسلكه الأتوبيس النهري 58 كيلومترًا. كم كيلومترًا سيقطعه إذا سار في هذا المسار 9 مرات يوميًا؟'), '58*9', unit=KM, **VEHB('nile', 'riverbus')),
   mc('normal', 'medium', ('Which shows 58 × 9 split with an area model?', 'أي مما يلي يوضح 58 × 9 باستخدام نموذج مساحة المستطيل؟'), ['(50 × 9) + (8 × 9)', '(5 × 9) + (8 × 9)', '(50 × 9) + 8', '58 + 9']),
  ])
idea(7, 'Y7013', 1, ('Challenge: what went wrong in 36 × 8?', 'تحدٍّ: أين الخطأ في 36 × 8؟'),
  ('A student split 36 into 3 and 6 and got 24 + 48 = 72. The 3 is in the tens place: it is 30, so the first part is 8 × 30 = 240, and 36 × 8 = 240 + 48 = 288.',
   'حلل أحد التلاميذ العدد 36 إلى 3 و6 فحصل على 24 + 48 = 72. لكن الرقم 3 في خانة العشرات فقيمته 30، إذن الجزء الأول 8 × 30 = 240، و36 × 8 = 240 + 48 = 288.'),
  [mc('boss', 'hard', ('A student solved 36 × 8 by splitting 36 into 3 and 6 and got 72. What is the mistake?', 'حل تلميذ المسألة 36 × 8 بتحليل 36 إلى 3 و6 فحصل على 72. ما الخطأ؟'),
      [('3 should be 30 (tens place)', 'الرقم 3 قيمته 30 (خانة العشرات)'), ('He should add, not multiply', 'كان يجب أن يجمع لا أن يضرب'), ('6 should be 60', 'الرقم 6 قيمته 60'), ('There is no mistake', 'لا يوجد خطأ')], **AREA('8', ['8 × 3 = 24', '8 × 6 = 48'], ['3', '6'])),
   num('boss', 'hard', ('What is the right answer to 36 × 8?', 'ما الإجابة الصحيحة للمسألة 36 × 8؟'), '36*8'),
   num('boss', 'hard', ('In 36 × 8, what is the part 8 × 30?', 'في 36 × 8، ما ناتج الجزء 8 × 30؟'), '8*30', **AREA('8', ['?', '48'], ['30', '6'])),
  ])

# ---------- Lesson 2 · The Distributive Property (pages 102-103) ----------
idea(7, 'Y7021', 2, ('Decomposing numbers', 'تحليل الأعداد'),
  ('Write a number as the sum of the values of its digits: 536 = 500 + 30 + 6, 264 = 200 + 60 + 4, 7,625 = 7,000 + 600 + 20 + 5.',
   'نكتب العدد في صورة مجموع قيم أرقامه: 536 = 500 + 30 + 6، و264 = 200 + 60 + 4، و7,625 = 7,000 + 600 + 20 + 5.'),
  [num('timed', 'easy', '536 = 500 + ? + 6', '30', seconds=12),
   num('timed', 'easy', '1,275 = ? + 200 + 70 + 5', '1000', seconds=12),
   num('normal', 'easy', '264 = 60 + 4 + ?', '200'),
   num('normal', 'easy', '7,625 = 5 + 7,000 + 20 + ?', '600'),
   num('normal', 'easy', '357 = 50 + ? + 7', '300'),
  ])
idea(7, 'Y7022', 2, ('The Distributive Property', 'خاصية التوزيع'),
  ('The Distributive Property of Multiplication: multiply each part of a decomposed number, then add: 249 × 5 = (200 × 5) + (40 × 5) + (9 × 5) = 1,000 + 200 + 45 = 1,245.',
   'خاصية التوزيع في عملية الضرب: نضرب كل جزء من أجزاء العدد بعد تحليله ثم نجمع: 249 × 5 = (200 × 5) + (40 × 5) + (9 × 5) = 1,000 + 200 + 45 = 1,245.'),
  [num('normal', 'medium', '249 × 5 = ?', '249*5', **AREA('5', ['1,000', '200', '?'], ['200', '40', '9'])),
   num('normal', 'medium', '530 × 7 = ?', '530*7'),
   num('normal', 'medium', '32 × 7 = ?', '32*7'),
   num('normal', 'medium', '5 × 483 = ?', '5*483'),
   num('normal', 'hard', '7 × 723 = ?', '7*723'),
   mc('normal', 'medium', ('Which shows 249 × 5 with the Distributive Property?', 'أي مما يلي يوضح 249 × 5 باستخدام خاصية التوزيع؟'), ['(200 × 5) + (40 × 5) + (9 × 5)', '(2 × 5) + (4 × 5) + (9 × 5)', '(200 + 40 + 9) + 5', '200 × 40 × 9 × 5']),
  ])
idea(7, 'Y7023', 2, ('Challenge: four-digit numbers', 'تحدٍّ: أعداد من أربعة أرقام'),
  ('Split the four-digit number into thousands, hundreds, tens and ones: 4,734 × 5 = 20,000 + 3,500 + 150 + 20 = 23,670. A city bus is 1,280 cm long: 3 buses are 1,280 × 3 = 3,840 cm.',
   'نحلل العدد المكوّن من أربعة أرقام إلى آلاف ومئات وعشرات وآحاد: 4,734 × 5 = 20,000 + 3,500 + 150 + 20 = 23,670. وطول الأتوبيس 1,280 سنتيمترًا: طول 3 أتوبيسات = 1,280 × 3 = 3,840 سنتيمترًا.'),
  [num('boss', 'hard', '4,734 × 5 = ?', '4734*5', **AREA('5', ['20,000', '3,500', '150', '20'], ['4,000', '700', '30', '4'])),
   num('boss', 'hard', '2,391 × 8 = ?', '2391*8'),
   num('boss', 'hard', '1,673 × 8 = ?', '1673*8'),
   num('boss', 'hard', ('A city bus is 1,280 centimeters long. What is the length of 3 city buses?', 'يبلغ طول هذا الأتوبيس 1,280 سنتيمترًا. كم يبلغ طول 3 أتوبيسات؟'), '1280*3', unit=CM, **VEH('bus', 'bus', 'bus')),
  ])

# ---------- Lesson 3 · The Partial Products Algorithm (pages 104-106) ----------
idea(7, 'Y7031', 3, ('Partial products', 'نواتج الضرب بالتجزئة'),
  ('Multiply the one-digit number by the value of each digit, write each partial product on its own line, then add: 239 × 7 = 1,400 (7 × 200) + 210 (7 × 30) + 63 (7 × 9) = 1,673.',
   'نضرب العدد المكوّن من رقم واحد في قيمة كل رقم، ونكتب كل ناتج جزئي في سطر، ثم نجمع: 239 × 7 = 1,400 (7 × 200) + 210 (7 × 30) + 63 (7 × 9) = 1,673.'),
  [mc('normal', 'easy', ('In 239 × 7, the partial product 1,400 comes from …', 'في 239 × 7، الناتج الجزئي 1,400 يساوي …'), ['7 × 200', '7 × 20', '7 × 2', '7 × 239'], **COL('239', '7', ['1,400', '210', '63'], ['(? × ?)', '', ''], '1,673')),
   mc('normal', 'easy', ('In 239 × 7, the partial product 210 comes from …', 'في 239 × 7، الناتج الجزئي 210 يساوي …'), ['7 × 30', '7 × 3', '7 × 300', '7 × 210'], **COL('239', '7', ['1,400', '210', '63'], ['(7 × 200)', '(? × ?)', ''], '1,673')),
   num('normal', 'medium', ('In 6,421 × 6, what is the partial product 6 × 400?', 'في 6,421 × 6، ما الناتج الجزئي 6 × 400؟'), '6*400', **COL('6,421', '6', ['36,000', '?', '120', '6'], ['(6 × 6,000)', '(6 × 400)', '(6 × 20)', '(6 × 1)'])),
   num('normal', 'medium', '6,421 × 6 = ?', '6421*6'),
   num('normal', 'medium', ('In 2,523 × 5, what is the partial product 5 × 3?', 'في 2,523 × 5، ما الناتج الجزئي 5 × 3؟'), '5*3', **COL('2,523', '5', ['10,000', '2,500', '100', '?'], ['(5 × 2,000)', '(5 × 500)', '(5 × 20)', '(5 × 3)'])),
   num('normal', 'medium', '2,523 × 5 = ?', '2523*5'),
  ])
idea(7, 'Y7032', 3, ('Using the partial products algorithm', 'استخدام خوارزمية عملية الضرب بالتجزئة'),
  ('731 × 4 = 2,800 + 120 + 4 = 2,924. 7 × 59 = 350 + 63 = 413. 624 × 4 = 2,400 + 80 + 16 = 2,496. 6 × 3,293 = 18,000 + 1,200 + 540 + 18 = 19,758.',
   '731 × 4 = 2,800 + 120 + 4 = 2,924. و7 × 59 = 350 + 63 = 413. و624 × 4 = 2,400 + 80 + 16 = 2,496. و6 × 3,293 = 18,000 + 1,200 + 540 + 18 = 19,758.'),
  [num('normal', 'medium', '731 × 4 = ?', '731*4'),
   num('normal', 'easy', '7 × 59 = ?', '7*59'),
   num('normal', 'medium', '624 × 4 = ?', '624*4'),
   num('normal', 'hard', '6 × 3,293 = ?', '6*3293'),
  ])
idea(7, 'Y7033', 3, ('Challenge: the student who forgot place value', 'تحدٍّ: التلميذ الذي نسي القيمة المكانية'),
  ('A student solved 328 × 4 as 32 (8 × 4) + 8 (2 × 4) + 12 (3 × 4) = 52. The 2 is 20 and the 3 is 300: 32 + 80 + 1,200 = 1,312.',
   'حل تلميذ 328 × 4 هكذا: 32 (8 × 4) + 8 (2 × 4) + 12 (3 × 4) = 52. لكن الرقم 2 قيمته 20 والرقم 3 قيمته 300: 32 + 80 + 1,200 = 1,312.'),
  [mc('boss', 'hard', ('A student solved 328 × 4 and got 52. Do you agree?', 'حل تلميذ 328 × 4 فحصل على 52. هل توافق على إجابته؟'),
      [('No: he used 2 and 3 instead of 20 and 300', 'لا: استخدم 2 و3 بدلًا من 20 و300'), ('Yes: 32 + 8 + 12 = 52', 'نعم: 32 + 8 + 12 = 52'), ('No: he should add 328 + 4', 'لا: كان يجب أن يجمع 328 + 4'), ('No: 8 × 4 is not 32', 'لا: 8 × 4 لا تساوي 32')],
      **COL('328', '4', ['32', '8', '12'], ['(8 × 4)', '(2 × 4)', '(3 × 4)'], '52')),
   num('boss', 'hard', ('What is the right answer to 328 × 4?', 'ما الإجابة الصحيحة للمسألة 328 × 4؟'), '328*4'),
   num('boss', 'hard', ('In 328 × 4, what is the partial product of the 3 hundreds (300 × 4)?', 'في 328 × 4، ما الناتج الجزئي للمئات (300 × 4)؟'), '300*4'),
  ])

# ---------- Lesson 4 · Multiply by a One-Digit Number (pages 107-108) ----------
idea(7, 'Y7041', 4, ('Estimate first', 'التقدير أولًا'),
  ('Round the big number, then multiply in your head: 64 × 7 is about 60 × 7 = 420; 758 × 3 is about 800 × 3 = 2,400. The exact answer should be close to the estimate (448 and 2,274).',
   'نقرّب العدد الكبير ثم نضرب ذهنيًا: 64 × 7 تقريبًا 60 × 7 = 420، و758 × 3 تقريبًا 800 × 3 = 2,400. يجب أن تكون الإجابة الدقيقة قريبة من التقدير (448 و2,274).'),
  [mc('timed', 'easy', ('Estimate 64 × 7.', 'قدّر ناتج 64 × 7.'), ['About 420', 'About 42', 'About 4,200', 'About 71'], seconds=15),
   mc('normal', 'easy', ('Estimate 758 × 3.', 'قدّر ناتج 758 × 3.'), ['About 2,400', 'About 240', 'About 24,000', 'About 760']),
   mc('normal', 'medium', ('Estimate 2,327 × 4.', 'قدّر ناتج 2,327 × 4.'), ['About 8,000', 'About 800', 'About 80,000', 'About 2,300']),
   mc('normal', 'medium', ('Which exact answer fits the estimate 130 × 8 = 1,040 for 132 × 8?', 'أي إجابة دقيقة تناسب التقدير 130 × 8 = 1,040 للمسألة 132 × 8؟'), ['1,056', '1,560', '105', '10,560']),
  ])
idea(7, 'Y7042', 4, ('The standard algorithm', 'الخوارزمية المعيارية'),
  ('Multiply the ones first, then the tens, hundreds and thousands, and carry (regroup) when a product is 10 or more: 758 × 3: 8 × 3 = 24 (write 4, carry 2), 5 × 3 + 2 = 17 (write 7, carry 1), 7 × 3 + 1 = 22 → 2,274.',
   'نضرب الآحاد أولًا ثم العشرات والمئات والآلاف، ونحمل (نعيد التسمية) إذا كان الناتج 10 أو أكثر: 758 × 3: 8 × 3 = 24 (نكتب 4 ونحمل 2)، 5 × 3 + 2 = 17 (نكتب 7 ونحمل 1)، 7 × 3 + 1 = 22 ← 2,274.'),
  [num('normal', 'easy', '32 × 3 = ?', '32*3'),
   num('normal', 'easy', '17 × 6 = ?', '17*6'),
   num('normal', 'easy', '134 × 2 = ?', '134*2'),
   num('normal', 'medium', '758 × 3 = ?', '758*3'),
   num('normal', 'medium', '1,349 × 2 = ?', '1349*2'),
   num('normal', 'medium', '2,327 × 4 = ?', '2327*4'),
   num('normal', 'medium', '64 × 7 = ?', '64*7'),
   num('normal', 'medium', '132 × 8 = ?', '132*8'),
  ])
idea(7, 'Y7043', 4, ('Challenge: three students solve 328 × 2', 'تحدٍّ: ثلاثة تلاميذ يحلون 328 × 2'),
  ('328 × 2: 8 × 2 = 16 (write 6, carry 1), 2 × 2 + 1 = 5, 3 × 2 = 6 → 656. Student 1 forgot the carried 1 (646). Student 3 carried the 1 to the hundreds (746).',
   '328 × 2: 8 × 2 = 16 (نكتب 6 ونحمل 1)، 2 × 2 + 1 = 5، 3 × 2 = 6 ← 656. التلميذ الأول نسي الواحد المحمول (646)، والتلميذ الثالث أضاف الواحد إلى المئات (746).'),
  [mc('boss', 'hard', ('Three students solved 328 × 2. Student 1: 646, Student 2: 656, Student 3: 746. Who is correct?', 'حل ثلاثة تلاميذ 328 × 2: الأول 646، والثاني 656، والثالث 746. من حله صحيح؟'), [('Student 2', 'التلميذ الثاني'), ('Student 1', 'التلميذ الأول'), ('Student 3', 'التلميذ الثالث'), ('No one', 'لا أحد')]),
   mc('boss', 'hard', ('Student 1 got 328 × 2 = 646. What was the mistake?', 'حصل التلميذ الأول على 328 × 2 = 646. ما الخطأ؟'), [('He forgot to add the carried 1', 'نسي أن يضيف الواحد المحمول'), ('He added instead of multiplying', 'جمع بدلًا من أن يضرب'), ('He carried the 1 to the hundreds', 'حمل الواحد إلى المئات'), ('There is no mistake', 'لا يوجد خطأ')]),
   num('boss', 'hard', '328 × 2 = ?', '328*2'),
  ])

# ---------- Lesson 5 · Multiply a Two-Digit Number by a Multiple of 10 (pages 109-110) ----------
idea(7, 'Y7051', 5, ('Ten times: multiples of 10', 'عشرة أمثال: مضاعفات العدد 10'),
  ('When you multiply two multiples of 10, multiply the digits and write the two zeros: 30 × 5 = 150, so 30 × 50 = 1,500; 70 × 7 = 490, so 70 × 70 = 4,900.',
   'عند ضرب اثنين من مضاعفات العدد 10 نضرب الأرقام ثم نكتب الصفرين: 30 × 5 = 150، إذن 30 × 50 = 1,500؛ و70 × 7 = 490، إذن 70 × 70 = 4,900.'),
  [num('timed', 'easy', ('30 × 5 = 150, so 30 × 50 = ?', '30 × 5 = 150، إذن 30 × 50 = ؟'), '30*50', seconds=12),
   num('timed', 'easy', ('2 × 80 = 160, so 20 × 80 = ?', '2 × 80 = 160، إذن 20 × 80 = ؟'), '20*80', seconds=12),
   num('timed', 'easy', '70 × 70 = ?', '70*70', seconds=12),
   num('normal', 'easy', '50 × 60 = ?', '50*60'),
   num('normal', 'easy', '90 × 70 = ?', '90*70'),
   num('normal', 'easy', '40 × 40 = ?', '40*40'),
   num('normal', 'easy', '60 × 30 = ?', '60*30'),
  ])
idea(7, 'Y7052', 5, ('A two-digit number times a multiple of 10', 'ضرب عدد من رقمين في مضاعف للعدد 10'),
  ('Multiply by the tens digit, then by 10: 40 × 62 = 4 × 62 × 10 = 248 × 10 = 2,480. A group of 38 people pays 30 LE each: 38 × 30 = 1,140 LE.',
   'نضرب في رقم العشرات ثم في 10: 40 × 62 = 4 × 62 × 10 = 248 × 10 = 2,480. ومجموعة من 38 شخصًا تذكرة كل منهم 30 جنيهًا: 38 × 30 = 1,140 جنيهًا.'),
  [num('normal', 'medium', ('A group of 38 people want to travel by bus. Each bus ticket costs 30 LE. How much do they need to pay in all?', 'سيسافر 38 شخصًا معًا بالأتوبيس، والتذكرة الواحدة تساوي 30 جنيهًا. ما ثمن التذاكر لكل المسافرين؟'), '38*30', unit=LE, **VEHB('pyramids', 'bus', 'bus')),
   num('normal', 'medium', '40 × 62 = ?', '40*62'),
   num('normal', 'medium', '70 × 55 = ?', '70*55'),
   num('normal', 'medium', '54 × 30 = ?', '54*30'),
   num('normal', 'medium', '44 × 20 = ?', '44*20'),
   num('normal', 'easy', '15 × 30 = ?', '15*30'),
   num('normal', 'medium', '72 × 40 = ?', '72*40'),
  ])
idea(7, 'Y7053', 5, ('Challenge: is the answer reasonable?', 'تحدٍّ: هل الإجابة معقولة؟'),
  ('Use mental math to check: 56 × 4 is about 50 × 4 = 200, closer to 200 than 2,000. A student wrote 22 × 50 = (20 × 50) + (2 × 50) = 100 + 100 = 200, but 20 × 50 = 1,000, so 22 × 50 = 1,100.',
   'نستخدم الحساب العقلي للتحقق: 56 × 4 تقريبًا 50 × 4 = 200، أي أقرب إلى 200 من 2,000. كتب تلميذ 22 × 50 = (20 × 50) + (2 × 50) = 100 + 100 = 200، لكن 20 × 50 = 1,000، إذن 22 × 50 = 1,100.'),
  [mc('boss', 'hard', ('Is 56 × 4 closer to 200 or closer to 2,000?', 'هل ناتج 56 × 4 أقرب إلى 200 أم إلى 2,000؟'), ['200', '2,000']),
   mc('boss', 'hard', ('Is 156 × 4 closer to 500 or closer to 5,000?', 'هل ناتج 156 × 4 أقرب إلى 500 أم إلى 5,000؟'), ['500', '5,000']),
   mc('boss', 'hard', ('A student wrote 22 × 50 = 100 + 100 = 200. Which step is wrong?', 'كتب تلميذ 22 × 50 = 100 + 100 = 200. أي خطوة خطأ؟'), [('20 × 50 is 1,000, not 100', '20 × 50 = 1,000 وليست 100'), ('2 × 50 is 10', '2 × 50 = 10'), ('22 = 20 + 2 is wrong', '22 = 20 + 2 خطأ'), ('There is no mistake', 'لا يوجد خطأ')]),
   num('boss', 'hard', '22 × 50 = ?', '22*50'),
  ])

# ---------- Lesson 6 · Exploring Remainders (pages 111-112) ----------
idea(7, 'Y7061', 6, ('Dividend, divisor, quotient and remainder', 'المقسوم والمقسوم عليه وخارج القسمة وباقي القسمة'),
  ('In 72 ÷ 9 = 8, 72 is the dividend (the number divided), 9 is the divisor (we divide by it) and 8 is the quotient (the answer). What is left over when we cannot make another full group is the remainder: 15 ÷ 4 = 3 R3.',
   'في 72 ÷ 9 = 8: العدد 72 هو المقسوم، و9 هو المقسوم عليه، و8 هو خارج القسمة. وما يتبقى عندما لا نستطيع تكوين مجموعة كاملة أخرى هو باقي القسمة: 15 ÷ 4 = 3 والباقي 3.'),
  [match('normal', 'easy', ('In 72 ÷ 9 = 8, match each number with its name.', 'في 72 ÷ 9 = 8، وصّل كل عدد باسمه.'), ['72', '9', '8'], [('quotient', 'خارج القسمة'), ('dividend', 'المقسوم'), ('divisor', 'المقسوم عليه')], [1, 2, 0]),
   fill('normal', 'easy', ('In 600 ÷ 3 = 200, the number 3 is called the ___.', 'في 600 ÷ 3 = 200 يسمى العدد 3 ___.'), [('divisor', 'المقسوم عليه'), ('dividend', 'المقسوم'), ('quotient', 'خارج القسمة')]),
   fill('normal', 'easy', ('The amount left over in a division is called the ___.', 'ما يتبقى في عملية القسمة يسمى ___.'), [('remainder', 'باقي القسمة'), ('quotient', 'خارج القسمة'), ('divisor', 'المقسوم عليه')]),
   num('timed', 'easy', ('There are 8 teams playing soccer with 9 students on each team. How many students are there in all?', 'يوجد 8 فرق يلعبون كرة القدم، وكل فريق يضم 9 لاعبين. ما عدد التلاميذ في كل الفرق؟'), '8*9', seconds=15),
   num('normal', 'easy', ('There are 72 students on the field. They make teams with 9 students on each team. How many teams can they make?', 'يوجد 72 تلميذًا في الملعب، ونحتاج إلى تقسيمهم إلى فرق في كل فريق 9 تلاميذ. ما عدد الفرق؟'), '72/9', unit=TEAMS),
   num('normal', 'easy', ('There are 72 students on the field. They split into 8 teams. How many students will be on each team?', 'هناك 72 تلميذًا في الملعب، ونحتاج إلى تقسيمهم إلى 8 فرق. ما عدد التلاميذ في كل فريق؟'), '72/8'),
  ])
idea(7, 'Y7062', 6, ('What is left? Saleem\'s pies', 'ما الباقي؟ فطائر سليم'),
  ('Saleem brought 15 pies for 4 friends: 4 × 3 = 12, so each friend gets 3 pies and 3 pies are left (15 ÷ 4 = 3 R3). The remainder is always smaller than the divisor.',
   'أحضر سليم 15 فطيرة لأربعة من أصدقائه: 4 × 3 = 12، إذن يحصل كل صديق على 3 فطائر ويتبقى 3 فطائر (15 ÷ 4 = 3 والباقي 3). باقي القسمة أصغر دائمًا من المقسوم عليه.'),
  [num('normal', 'easy', ('Saleem brought 15 pies to give to 4 of his friends equally. How many pies does each friend get?', 'أحضر سليم 15 فطيرة ليعطيها لأربعة من أصدقائه بالتساوي. كم فطيرة يحصل عليها كل صديق؟'), '(15-3)/4', **VEH('pie')),
   num('normal', 'easy', ('Saleem shares 15 pies equally among 4 friends. How many pies are left?', 'يقسم سليم 15 فطيرة على 4 أصدقاء بالتساوي. كم فطيرة تتبقى؟'), '15-4*3', **VEH('pie')),
   mc('normal', 'medium', '15 ÷ 4 = ?', [R(3, 3), R(4, 0), R(3, 4), R(2, 7)]),
   tf('normal', 'medium', ('In a division, the remainder can be bigger than the divisor.', 'في عملية القسمة يمكن أن يكون باقي القسمة أكبر من المقسوم عليه.'), False),
  ])
idea(7, 'Y7063', 6, ('Challenge: getting to Zamalek', 'تحدٍّ: الذهاب إلى الزمالك'),
  ('32 people go to an event in Zamalek. A microbus fits 9: 32 ÷ 9 = 3 R5, so 4 microbuses are needed (5 people would be left out). A motorbike fits 2: 16. A car fits 4: 8. A van fits 7: 32 ÷ 7 = 4 R4, so 5 vans. A bus seats 40 and 60 students go to a swim meet: 60 ÷ 40 = 1 R20, so 2 buses.',
   'يذهب 32 شخصًا إلى حدث في الزمالك. الميكروباص يتسع لـ 9: 32 ÷ 9 = 3 والباقي 5، إذن نحتاج 4 ميكروباصات (وإلا تُرك 5 أشخاص). الدراجة البخارية تتسع لـ 2: 16. والسيارة لـ 4: 8. والسيارة العائلية لـ 7: 32 ÷ 7 = 4 والباقي 4، إذن 5 سيارات. وأتوبيس يتسع لـ 40 تلميذًا وسيحضر المسابقة 60 تلميذًا: 60 ÷ 40 = 1 والباقي 20، إذن أتوبيسان.'),
  [num('boss', 'hard', ('32 people travel to Zamalek. Each microbus fits 9 people. How many microbuses do they need so no one is left out?', 'يرغب 32 شخصًا في الذهاب إلى الزمالك، ويتسع كل ميكروباص لـ 9 أشخاص. ما عدد الميكروباصات اللازمة حتى لا يُترك أحد؟'), '4', unit=MB, **VEH('microbus')),
   mc('boss', 'hard', ('32 people, a microbus fits 9. Write the division.', '32 شخصًا والميكروباص يتسع لـ 9. اكتب عملية القسمة.'), [('32 ÷ 9 = 3 R5', '32 ÷ 9 = 3 والباقي 5'), ('32 ÷ 9 = 4', '32 ÷ 9 = 4'), ('32 ÷ 9 = 3 R2', '32 ÷ 9 = 3 والباقي 2'), ('32 ÷ 9 = 5 R3', '32 ÷ 9 = 5 والباقي 3')], **VEH('microbus')),
   num('boss', 'hard', ('32 people go by car. Each car fits 4 people. How many cars do they need?', 'يذهب 32 شخصًا بالسيارات، وتتسع كل سيارة لـ 4 أشخاص. كم سيارة يحتاجون؟'), '32/4', **VEH('car')),
   num('boss', 'hard', ('Each bus seats 40 students. Sixty students will attend the swim meet. How many buses are needed?', 'يتسع كل أتوبيس لـ 40 تلميذًا، وسيحضر مسابقة السباحة 60 تلميذًا. ما عدد الأتوبيسات المطلوبة؟'), '2', unit=BUSES, **VEH('bus', 'swimmer')),
  ])

# ---------- Lesson 7 · Patterns in Division (pages 113-115) ----------
idea(7, 'Y7071', 7, ('Dividing multiples of 10, 100 and 1,000', 'قسمة مضاعفات 10 و100 و1,000'),
  ('Use a related fact and the zeros: 600 ÷ 3 → 6 ÷ 3 = 2, so 600 ÷ 3 = 200. 6,400 ÷ 8 → 64 ÷ 8 = 8, so 800. 270 ÷ 3 → 27 ÷ 3 = 9, so 90.',
   'نستخدم حقيقة ذات صلة والأصفار: 600 ÷ 3 ← 6 ÷ 3 = 2، إذن 600 ÷ 3 = 200. و6,400 ÷ 8 ← 64 ÷ 8 = 8، إذن 800. و270 ÷ 3 ← 27 ÷ 3 = 9، إذن 90.'),
  [num('timed', 'easy', '150 ÷ 5 = ?', '150/5', seconds=12),
   num('timed', 'easy', '1,200 ÷ 6 = ?', '1200/6', seconds=12),
   num('timed', 'easy', '200 ÷ 4 = ?', '200/4', seconds=12),
   num('normal', 'easy', '700 ÷ 7 = ?', '700/7'),
   num('normal', 'medium', '6,400 ÷ 8 = ?', '6400/8'),
   num('normal', 'medium', '4,500 ÷ 9 = ?', '4500/9'),
   num('normal', 'easy', '270 ÷ 3 = ?', '270/3'),
   mc('normal', 'medium', ('Which related fact helps solve 6,400 ÷ 8?', 'أي حقيقة ذات صلة تساعد في حل 6,400 ÷ 8؟'), ['64 ÷ 8 = 8', '6 ÷ 8', '640 ÷ 4 = 160', '8 × 8 = 6,400']),
  ])
idea(7, 'Y7072', 7, ('The division array game', 'لعبة مصفوفة القسمة'),
  ('Fill rows with the number of squares on the cube until you reach the dividend: 23 squares with 4 per row make 5 full rows (the quotient) and 3 leftover squares (the remainder). The score is the number of rows (double it if nothing is left over).',
   'نملأ صفوفًا بعدد المربعات الموجود على المكعب حتى نصل إلى المقسوم: 23 مربعًا في كل صف 4 تكوّن 5 صفوف كاملة (خارج القسمة) و3 مربعات متبقية (باقي القسمة). والنتيجة هي عدد الصفوف (وتتضاعف إذا لم يتبقَّ شيء).'),
  [num('normal', 'easy', ('23 squares, 4 squares in each row. How many full rows?', '23 مربعًا، في كل صف 4 مربعات. كم صفًا كاملًا؟'), '(23-3)/4'),
   num('normal', 'easy', ('23 squares, 4 squares in each row. How many squares are left over?', '23 مربعًا، في كل صف 4 مربعات. كم مربعًا يتبقى؟'), '23-4*5'),
   num('normal', 'medium', ('20 squares, 5 squares in each row, nothing left over. Player A\'s score is double the number of rows. What is the score?', '20 مربعًا، في كل صف 5 مربعات، ولا يتبقى شيء. درجة اللاعب ضعف عدد الصفوف. ما الدرجة؟'), '20/5*2'),
  ])
idea(7, 'Y7073', 7, ('Challenge: riding the metro', 'تحدٍّ: مترو الأنفاق'),
  ('A metro has 9 cars and 90 people fit in each car: 9 × 90 = 810 people per metro. 8,100 people need to go to work at 7:00: 8,100 ÷ 810 = 10, so they need 10 metros; they cannot all take the same metro.',
   'في المترو 9 عربات، وتتسع كل عربة لـ 90 شخصًا: 9 × 90 = 810 أشخاص في المترو الواحد. ويحتاج 8,100 شخص إلى الذهاب إلى العمل في 7:00: 8,100 ÷ 810 = 10، إذن يحتاجون 10 قطارات مترو، ولا يمكن أن يركبوا جميعًا المترو نفسه.'),
  [num('boss', 'hard', ('A metro has 9 cars and 90 people fit in each car. How many people fit in one metro?', 'في قطار المترو 9 عربات، وتتسع كل عربة لـ 90 شخصًا. كم شخصًا يتسع له المترو الواحد؟'), '9*90', **VEH('metro')),
   mc('boss', 'hard', ('8,100 people want to take the metro at 7:00. One metro fits 810 people. Can they all take the same metro?', 'يريد 8,100 شخص ركوب المترو في 7:00، ويتسع المترو الواحد لـ 810 أشخاص. هل يمكن أن يركبوا جميعًا المترو نفسه؟'), [('No: they need 10 metros', 'لا: يحتاجون 10 قطارات'), ('Yes: 810 is enough', 'نعم: 810 تكفي'), ('No: they need 9 metros', 'لا: يحتاجون 9 قطارات'), ('Yes: they need 1 metro', 'نعم: يكفي قطار واحد')], **VEH('metro')),
   num('boss', 'hard', '8,100 ÷ 9 = ?', '8100/9'),
  ])

# ---------- Lesson 8 · The Area Model and Division (page 116) ----------
idea(7, 'Y7081', 8, ('Dividing with an area model', 'القسمة باستخدام نموذج مساحة المستطيل'),
  ('Break the dividend into parts that are easy to divide: 92 ÷ 4 → 80 ÷ 4 = 20 and 12 ÷ 4 = 3, so 92 ÷ 4 = 23. The quotients of the parts are added.',
   'نجزّئ المقسوم إلى أجزاء سهلة القسمة: 92 ÷ 4 ← 80 ÷ 4 = 20 و12 ÷ 4 = 3، إذن 92 ÷ 4 = 23. ثم نجمع خوارج قسمة الأجزاء.'),
  [num('normal', 'easy', ('Amir has 92 stickers to give to 4 friends equally. How many stickers does each friend get?', 'اشترى أمير كتابًا فيه 92 ملصقًا، وأراد أن يعطيها لأربعة من أصدقائه بالتساوي. ما عدد الملصقات التي سيحصل عليها كل صديق؟'), '92/4', **VEH('stickers')),
   num('normal', 'medium', '92 ÷ 4 = ?', '92/4', **AREA('4', ['80', '12'], None, ['20', '?'])),
   num('normal', 'medium', ('Rashida saved 545 LE by saving 5 LE every day. How many days did she work?', 'ادخرت رشيدة 545 جنيهًا لشراء سيارة لعبة، وكانت تدخر 5 جنيهات كل يوم. كم يومًا عملت؟'), '545/5', unit=DAYS, **VEH('toycar')),
   num('normal', 'medium', '545 ÷ 5 = ?', '545/5', **AREA('5', ['500', '45'], None, ['?', '9'])),
  ])
idea(7, 'Y7082', 8, ('Challenge: books and parking lots', 'تحدٍّ: الكتب ومواقف السيارات'),
  ('89 books for 6 classrooms: 60 ÷ 6 = 10 and 24 ÷ 6 = 4, so 14 books each and 5 left (89 ÷ 6 = 14 R5). 492 cars in 4 parking lots: 400 ÷ 4 + 92 ÷ 4 = 100 + 23 = 123 cars in each lot.',
   '89 كتابًا على 6 فصول: 60 ÷ 6 = 10 و24 ÷ 6 = 4، إذن 14 كتابًا لكل فصل ويتبقى 5 (89 ÷ 6 = 14 والباقي 5). و492 سيارة في 4 مواقف: 400 ÷ 4 + 92 ÷ 4 = 100 + 23 = 123 سيارة في كل موقف.'),
  [num('boss', 'hard', ('An organization donated 89 books to be shared among 6 classrooms. How many books will each classroom get?', 'تبرعت إحدى المنظمات بعدد 89 كتابًا لمدرسة، ستوزع الكتب على 6 فصول دراسية. ما عدد الكتب التي سيحصل عليها كل فصل؟'), '(89-5)/6', **VEH('books')),
   num('boss', 'hard', ('89 books are shared among 6 classrooms. How many books are left over?', 'وُزع 89 كتابًا على 6 فصول بالتساوي. كم كتابًا يتبقى؟'), '89-6*14', **VEH('books')),
   num('boss', 'hard', ('492 cars park in 4 parking lots with the same number in each. How many cars are in each lot?', 'يوجد 492 سيارة في 4 مواقف بالتساوي. كم سيارة في كل موقف؟'), '492/4', **AREA('4', ['400', '92'], None, ['100', '?'])),
  ])

# ---------- Lesson 9 · The Partial Quotients Algorithm (pages 117-118) ----------
idea(7, 'Y7091', 9, ('Reading an area model of division', 'قراءة نموذج مساحة المستطيل للقسمة'),
  ('The divisor is on the left, the parts of the dividend are in the boxes and the partial quotients are under them. 6 with 300, 60, 18 and 50, 10, 3: 378 ÷ 6 = 63. 4 with 4,000, 1,200, 400, 28 and R3: 5,631 ÷ 4 = 1,407 R3.',
   'المقسوم عليه على اليسار، وأجزاء المقسوم داخل المستطيلات، وخوارج القسمة الجزئية أسفلها. 6 مع 300 و60 و18 وأسفلها 50 و10 و3: 378 ÷ 6 = 63. و4 مع 4,000 و1,200 و400 و28 والباقي 3: 5,631 ÷ 4 = 1,407 والباقي 3.'),
  [mc('normal', 'medium', ('Which division matches this area model?', 'ما مسألة القسمة التي تتطابق مع نموذج مساحة المستطيل؟'), ['378 ÷ 6 = 63', '378 ÷ 6 = 50', '300 ÷ 6 = 50', '63 ÷ 6 = 378'], **AREA('6', ['300', '60', '18'], None, ['50', '10', '3'])),
   num('normal', 'medium', ('What is the dividend in this area model?', 'ما المقسوم في نموذج مساحة المستطيل؟'), '300+60+18', **AREA('6', ['300', '60', '18'], None, ['50', '10', '3'])),
   num('normal', 'hard', ('The area model shows 4 × 1,000, 4 × 300, 4 × 100, 4 × 7 and a remainder of 3. What is the quotient?', 'يوضح النموذج 4,000 و1,200 و400 و28 وباقي القسمة 3. ما خارج القسمة؟'), '1000+300+100+7', **AREA('4', ['4,000', '1,200', '400', '28', '3'], None, ['1,000', '300', '100', '7', 'R3'])),
  ])
idea(7, 'Y7092', 9, ('Partial quotients', 'خارج القسمة بالتجزئة'),
  ('Take away easy multiples of the divisor and write each partial quotient: 812 ÷ 4 → 800 (4 × 200), then 12 (4 × 3): 200 + 3 = 203. 892 ÷ 4 = 223, 590 ÷ 5 = 118, 1,216 ÷ 3 = 405 R1, 925 ÷ 6 = 154 R1.',
   'نطرح مضاعفات سهلة للمقسوم عليه ونكتب كل خارج قسمة جزئي: 812 ÷ 4 ← 800 (4 × 200) ثم 12 (4 × 3): 200 + 3 = 203. و892 ÷ 4 = 223، و590 ÷ 5 = 118، و1,216 ÷ 3 = 405 والباقي 1، و925 ÷ 6 = 154 والباقي 1.'),
  [num('normal', 'medium', '812 ÷ 4 = ?', '812/4', **AREA('4', ['800', '12'], ['4 × ?', '4 × ?'])),
   num('normal', 'medium', '892 ÷ 4 = ?', '892/4'),
   num('normal', 'medium', '590 ÷ 5 = ?', '590/5'),
   mc('normal', 'hard', '1,216 ÷ 3 = ?', [R(405, 1), R(405, 0), R(45, 1), R(404, 4)]),
   mc('normal', 'hard', '925 ÷ 6 = ?', [R(154, 1), R(150, 25), R(155, 0), R(154, 5)]),
   mc('normal', 'hard', '897 ÷ 4 = ?', [R(224, 1), R(224, 0), R(223, 5), R(22, 4)]),
  ])

# ---------- Lesson 10 · The Standard Division Algorithm (pages 119-120) ----------
idea(7, 'Y7101', 10, ('Estimating quotients', 'تقدير خارج القسمة'),
  ('Use place value and facts you know: 1,836 ÷ 3 is about 1,800 ÷ 3 = 600 (not 60). 736 ÷ 4 is about 800 ÷ 4 = 200. 68 ÷ 4 is between 10 and 20 because 4 × 10 = 40 and 4 × 20 = 80.',
   'نستخدم القيمة المكانية والحقائق التي نعرفها: 1,836 ÷ 3 تقريبًا 1,800 ÷ 3 = 600 (وليس 60). و736 ÷ 4 تقريبًا 800 ÷ 4 = 200. و68 ÷ 4 بين 10 و20 لأن 4 × 10 = 40 و4 × 20 = 80.'),
  [mc('timed', 'easy', ('Will 1,836 ÷ 3 be closer to 60 or 600?', 'هل سيكون ناتج 1,836 ÷ 3 أقرب إلى 60 أم 600؟'), ['600', '60'], seconds=15),
   mc('normal', 'easy', ('Will 7,158 ÷ 3 be closer to 2,000 or 3,000?', 'هل سيكون ناتج 7,158 ÷ 3 أقرب إلى 2,000 أم 3,000؟'), ['2,000', '3,000']),
   mc('normal', 'easy', ('Will 736 ÷ 4 be closer to 100 or 200?', 'هل سيكون ناتج 736 ÷ 4 أقرب إلى 100 أم 200؟'), ['200', '100']),
   mc('normal', 'medium', ('Will 491 ÷ 4 be closer to 120 or 150?', 'هل سيكون ناتج 491 ÷ 4 أقرب إلى 120 أم 150؟'), ['120', '150']),
   mc('normal', 'medium', ('The quotient of 68 ÷ 4 will be between …', 'سيكون خارج قسمة 68 ÷ 4 بين …'), [('10 and 20', '10 و20'), ('1 and 10', '1 و10'), ('20 and 30', '20 و30'), ('100 and 200', '100 و200')]),
   mc('normal', 'medium', ('The quotient of 457 ÷ 3 will be between …', 'سيكون خارج قسمة 457 ÷ 3 بين …'), [('100 and 200', '100 و200'), ('10 and 20', '10 و20'), ('200 and 300', '200 و300'), ('1,000 and 2,000', '1,000 و2,000')]),
  ])
idea(7, 'Y7102', 10, ('The standard algorithm', 'الخوارزمية المعيارية للقسمة'),
  ('Divide, multiply, subtract, bring down, starting from the biggest place: 778 ÷ 2: 7 ÷ 2 = 3 R1, 17 ÷ 2 = 8 R1, 18 ÷ 2 = 9 → 389. 454 ÷ 3 = 151 R1, 368 ÷ 3 = 122 R2, 4,858 ÷ 4 = 1,214 R2.',
   'نقسم ثم نضرب ثم نطرح ثم ننزل الرقم التالي، بدءًا من الخانة الكبرى: 778 ÷ 2: 7 ÷ 2 = 3 والباقي 1، 17 ÷ 2 = 8 والباقي 1، 18 ÷ 2 = 9 ← 389. و454 ÷ 3 = 151 والباقي 1، و368 ÷ 3 = 122 والباقي 2، و4,858 ÷ 4 = 1,214 والباقي 2.'),
  [num('normal', 'easy', '68 ÷ 4 = ?', '68/4'),
   num('normal', 'medium', '778 ÷ 2 = ?', '778/2'),
   mc('normal', 'medium', '454 ÷ 3 = ?', [R(151, 1), R(151, 0), R(150, 4), R(15, 1)]),
   mc('normal', 'medium', '457 ÷ 3 = ?', [R(152, 1), R(152, 0), R(151, 4), R(15, 7)]),
   mc('normal', 'medium', '368 ÷ 3 = ?', [R(122, 2), R(122, 0), R(123, 1), R(12, 2)]),
   mc('normal', 'hard', '4,858 ÷ 4 = ?', [R(1214, 2), R(1214, 0), R(1213, 6), R(121, 2)]),
  ])
idea(7, 'Y7103', 10, ('Challenge: the train seats', 'تحدٍّ: مقاعد القطار'),
  ('A train has 784 seats in 7 cars with the same number in each: 784 ÷ 7 = 112 (700 ÷ 7 = 100, 84 ÷ 7 = 12). Check: 112 × 7 = 784.',
   'يحتوي القطار على 784 مقعدًا في 7 عربات، في كل عربة العدد نفسه: 784 ÷ 7 = 112 (700 ÷ 7 = 100 و84 ÷ 7 = 12). التحقق: 112 × 7 = 784.'),
  [num('boss', 'hard', ('A train has 784 seats for passengers. There are 7 cars and each car has the same number of seats. How many passengers can sit in each car?', 'يحتوي القطار على 784 مقعدًا للركاب. إذا كان القطار مكونًا من 7 عربات وكل عربة بها العدد نفسه من المقاعد، فما عدد الركاب الذين يمكنهم الجلوس في كل عربة؟'), '784/7', **VEH('train')),
   mc('boss', 'hard', ('Which strategy splits 784 ÷ 7 into easy parts?', 'أي إستراتيجية تجزّئ 784 ÷ 7 إلى أجزاء سهلة؟'), ['(700 ÷ 7) + (84 ÷ 7)', '(784 ÷ 7) + 7', '(700 ÷ 7) × (84 ÷ 7)', '784 − 7'], **VEH('train')),
   num('boss', 'hard', ('Check: 112 × 7 = ?', 'التحقق: 112 × 7 = ؟'), '112*7'),
  ])

# ---------- Lesson 11 · Division and Multiplication (pages 121-122) ----------
idea(7, 'Y7111', 11, ('Where does the first digit go?', 'أين نضع أول رقم في خارج القسمة؟'),
  ('If the first digit of the dividend is smaller than the divisor, start with the first two digits and the quotient has fewer digits: 346 ÷ 5: 3 < 5, so 34 ÷ 5 = 6 → 69 R1 (2 digits). 834 ÷ 3: 8 ≥ 3 → 278 (3 digits).',
   'إذا كان أول رقم في المقسوم أصغر من المقسوم عليه نبدأ بأول رقمين، فيكون عدد أرقام خارج القسمة أقل: 346 ÷ 5: 3 أصغر من 5، إذن 34 ÷ 5 = 6 ← 69 والباقي 1 (رقمان). و834 ÷ 3: 8 أكبر من 3 ← 278 (ثلاثة أرقام).'),
  [mc('normal', 'medium', ('Which division will have a quotient with fewer digits than the dividend?', 'أي مسألة قسمة سيكون لخارج قسمتها أرقام أقل من المقسوم؟'), ['346 ÷ 5', '834 ÷ 3', '939 ÷ 3', '4,590 ÷ 3']),
   mc('normal', 'medium', '346 ÷ 5 = ?', [R(69, 1), R(69, 0), R(70, 4), R(609, 1)]),
   num('normal', 'medium', '1,266 ÷ 6 = ?', '1266/6'),
   num('normal', 'medium', '834 ÷ 3 = ?', '834/3'),
   mc('normal', 'hard', '1,429 ÷ 7 = ?', [R(204, 1), R(24, 1), R(204, 0), R(203, 8)]),
   num('normal', 'medium', '4,590 ÷ 3 = ?', '4590/3'),
   mc('normal', 'hard', '562 ÷ 8 = ?', [R(70, 2), R(7, 2), R(70, 0), R(71, 6)]),
  ])
idea(7, 'Y7112', 11, ('Challenge: check with multiplication', 'تحدٍّ: التحقق باستخدام الضرب'),
  ('Multiply the quotient by the divisor and add the remainder: you must get the dividend. 277 ÷ 3 = 92 R1, because 92 × 3 + 1 = 277. 562 ÷ 8 = 70 R2, because 70 × 8 + 2 = 562.',
   'نضرب خارج القسمة في المقسوم عليه ونضيف باقي القسمة فنحصل على المقسوم. 277 ÷ 3 = 92 والباقي 1 لأن 92 × 3 + 1 = 277. و562 ÷ 8 = 70 والباقي 2 لأن 70 × 8 + 2 = 562.'),
  [num('boss', 'hard', ('Check 277 ÷ 3 = 92 R1: 92 × 3 + 1 = ?', 'تحقق من 277 ÷ 3 = 92 والباقي 1: 92 × 3 + 1 = ؟'), '92*3+1'),
   num('boss', 'hard', ('Check 562 ÷ 8 = 70 R2: 70 × 8 + 2 = ?', 'تحقق من 562 ÷ 8 = 70 والباقي 2: 70 × 8 + 2 = ؟'), '70*8+2'),
   mc('boss', 'hard', ('How do you check 939 ÷ 3 = 313?', 'كيف تتحقق من 939 ÷ 3 = 313؟'), ['313 × 3 = 939', '313 + 3 = 316', '939 × 3', '939 − 313']),
   num('boss', 'hard', '939 ÷ 3 = ?', '939/3'),
  ])

# =====================================================================================================
# UNIT 8 · Order of Operations · ideas Z8 + lesson (2 digits) + number
# =====================================================================================================
# ---------- Lesson 1 · Order of Operations (pages 124-125) ----------
idea(8, 'Z8011', 1, ('The order of operations', 'ترتيب العمليات'),
  ('First the parentheses, then multiplication and division from left to right, then addition and subtraction from left to right: 2 + 4 × 6 = 2 + 24 = 26, not 6 × 6 = 36.',
   'أولًا القوسان، ثم الضرب والقسمة من اليسار إلى اليمين، ثم الجمع والطرح من اليسار إلى اليمين: 2 + 4 × 6 = 2 + 24 = 26، وليس 6 × 6 = 36.'),
  [num('timed', 'easy', '2 + 4 × 6 = ?', '2+4*6', seconds=15),
   num('timed', 'easy', '6 × 4 − 4 = ?', '6*4-4', seconds=15),
   num('normal', 'easy', '100 − 80 × 1 = ?', '100-80*1'),
   num('normal', 'easy', '48 ÷ 4 + 9 = ?', '48/4+9'),
   mc('normal', 'easy', ('Which operation comes first in 7 + 70 ÷ 10 − 2?', 'أي عملية نبدأ بها في 7 + 70 ÷ 10 − 2؟'), [('Division', 'القسمة'), ('Addition', 'الجمع'), ('Subtraction', 'الطرح')]),
   tf('normal', 'medium', ('In 2 + 4 × 6 we add 2 + 4 first.', 'في 2 + 4 × 6 نجمع 2 + 4 أولًا.'), False),
  ])
idea(8, 'Z8012', 1, ('Find the answer', 'أوجد الناتج'),
  ('Do the multiplication and division first, then add and subtract from left to right.',
   'نبدأ بالضرب والقسمة أولًا، ثم نجمع ونطرح من اليسار إلى اليمين.'),
  [num('normal', 'medium', '7 + 70 ÷ 10 − 2 = ?', '7+70/10-2'),
   num('normal', 'medium', '49 − 7 × 6 + 4 = ?', '49-7*6+4'),
   num('normal', 'medium', '8 × 3 + 6 + 2 = ?', '8*3+6+2'),
   num('normal', 'medium', '24 − 8 ÷ 4 + 6 = ?', '24-8/4+6'),
   num('normal', 'medium', '36 ÷ 9 + 4 = ?', '36/9+4'),
   num('normal', 'medium', '99 − 10 × 9 + 7 = ?', '99-10*9+7'),
   num('normal', 'medium', '12 − 72 ÷ 12 + 2 = ?', '12-72/12+2'),
   num('normal', 'medium', '80 ÷ 10 + 6 − 3 = ?', '80/10+6-3'),
   num('normal', 'medium', '15 ÷ 5 + 4 + 1 = ?', '15/5+4+1'),
   num('normal', 'medium', '15 − 7 + 2 + 6 = ?', '15-7+2+6'),
   num('normal', 'medium', '8 × 2 + 24 − 12 = ?', '8*2+24-12'),
   num('normal', 'medium', '24 + 36 ÷ 6 + 2 = ?', '24+36/6+2'),
   num('normal', 'medium', '40 − 7 × 5 + 2 = ?', '40-7*5+2'),
  ])
idea(8, 'Z8013', 1, ('Challenge: who is correct?', 'تحدٍّ: من إجابته صحيحة؟'),
  ('74 − 61 + 8 × 5: multiply first: 8 × 5 = 40, then from left to right: 74 − 61 = 13, 13 + 40 = 53. Sarah is correct; Saleem added and multiplied from left to right: (74 − 61 + 8) × 5 = 105.',
   '74 − 61 + 8 × 5: نضرب أولًا: 8 × 5 = 40، ثم من اليسار إلى اليمين: 74 − 61 = 13، و13 + 40 = 53. سارة إجابتها صحيحة؛ أما سليم فحسب من اليسار إلى اليمين دون أن يبدأ بالضرب: (74 − 61 + 8) × 5 = 105.'),
  [mc('boss', 'hard', ('Saleem and Sarah solved 74 − 61 + 8 × 5. Saleem says 105 and Sarah says 53. Who is correct?', 'حل سليم وسارة المسألة 74 − 61 + 8 × 5. يقول سليم إن الإجابة 105 وتقول سارة إنها 53. من إجابته صحيحة؟'), [('Sarah: 53', 'سارة: 53'), ('Saleem: 105', 'سليم: 105'), ('Both', 'كلاهما'), ('Neither', 'لا أحد منهما')]),
   mc('boss', 'hard', ('What was Saleem\'s mistake in 74 − 61 + 8 × 5 = 105?', 'ما خطأ سليم في 74 − 61 + 8 × 5 = 105؟'), [('He did not multiply first', 'لم يبدأ بعملية الضرب'), ('He subtracted wrongly', 'أخطأ في الطرح'), ('He multiplied first', 'بدأ بالضرب'), ('There is no mistake', 'لا يوجد خطأ')]),
   mc('boss', 'hard', ('Which problem does not belong? 6 × 4 − 4, 100 − 80 × 1, 60 + 20 − 50, 2,356 − 2,336', 'أي مسألة مختلفة؟ 6 × 4 − 4، 100 − 80 × 1، 60 + 20 − 50، 2,356 − 2,336'), ['60 + 20 − 50 = 30', '6 × 4 − 4 = 20', '100 − 80 × 1 = 20', '2,356 − 2,336 = 20']),
  ])

# ---------- Lesson 2 · The Order of Operations and Story Problems (pages 126-127) ----------
idea(8, 'Z8021', 2, ('Writing a story as one expression', 'كتابة المسألة الكلامية في صورة مسألة واحدة'),
  ('Write the whole story with numbers and symbols, using parentheses for what happens first: 67 + 67 + 67 + 67 + 67 − 15 = 5 × 67 − 15 = 320. Maha walked 14 km a day for 2 weeks and then 56 km: 14 × 14 + 56 = 252 km.',
   'نكتب المسألة كلها بالأعداد والرموز، ونستخدم القوسين لما يحدث أولًا: 67 + 67 + 67 + 67 + 67 − 15 = 5 × 67 − 15 = 320. ومشت مها 14 كيلومترًا يوميًا لمدة أسبوعين ثم 56 كيلومترًا: 14 × 14 + 56 = 252 كيلومترًا.'),
  [num('normal', 'easy', '67 + 67 + 67 + 67 + 67 − 15 = ?', '5*67-15'),
   mc('normal', 'easy', ('Which is a shorter way to write 67 + 67 + 67 + 67 + 67 − 15?', 'ما الطريقة الأقصر لكتابة 67 + 67 + 67 + 67 + 67 − 15؟'), ['5 × 67 − 15', '67 × 15', '5 + 67 − 15', '(67 − 15) × 5']),
   num('normal', 'medium', ('Maha walked 14 kilometers every day for 2 weeks. The next week she walked 56 kilometers. How many kilometers did she walk over those 3 weeks?', 'مشت مها 14 كيلومترًا كل يوم لمدة أسبوعين، وفي الأسبوع التالي مشت 56 كيلومترًا. كم كيلومترًا مشت خلال الأسابيع الثلاثة؟'), '14*14+56', unit=KM, **VEH('girlwalk')),
   mc('normal', 'medium', ('Which expression shows Maha\'s walk (14 km a day for 2 weeks, then 56 km)?', 'أي تعبير يوضح ما مشته مها (14 كم يوميًا لمدة أسبوعين ثم 56 كم)؟'), ['14 × 14 + 56', '14 × 2 + 56', '14 + 14 + 56', '(14 + 56) × 2'], **VEH('girlwalk')),
   num('normal', 'medium', ('Ashraf rides the bus 27 minutes and then walks 12 minutes to work. How many minutes does he spend going to work during a 5-day week?', 'يستغرق أشرف 27 دقيقة بالأتوبيس ثم يمشي 12 دقيقة إلى مكان عمله. كم دقيقة يقضيها في طريقه للعمل خلال 5 أيام في الأسبوع؟'), '(27+12)*5', unit=MIN, **VEH('bus', 'walk')),
   mc('normal', 'medium', ('Which expression shows Ashraf\'s week (27 minutes by bus + 12 minutes walking, 5 days)?', 'أي تعبير يوضح أسبوع أشرف (27 دقيقة بالأتوبيس + 12 دقيقة مشيًا، 5 أيام)؟'), ['(27 + 12) × 5', '27 + 12 × 5', '27 × 5 + 12', '(27 − 12) × 5'], **VEH('bus', 'walk')),
  ])
idea(8, 'Z8022', 2, ('Challenge: stamps, microbuses and muffins', 'تحدٍّ: الطوابع والميكروباصات وفطائر التوت'),
  ('Abdullah had 246 stamps, kept 25 and shared the rest among 6 friends: (246 − 25) ÷ 6 = 221 ÷ 6 = 36 R5. 172 tourists and 8 guides in microbuses of 9: (172 + 8) ÷ 9 = 20. Sita had 198 berries, ate 17, 6 in each muffin: (198 − 17) ÷ 6 = 181 ÷ 6 = 30 R1, so 30 muffins.',
   'كان مع عبد الله 246 طابعًا، احتفظ بـ 25 ووزع الباقي على 6 أصدقاء: (246 − 25) ÷ 6 = 221 ÷ 6 = 36 والباقي 5. و172 سائحًا و8 مرشدين في ميكروباصات تتسع لـ 9: (172 + 8) ÷ 9 = 20. واشترت نشوى 198 ثمرة توت وأكلت 17، وفي كل فطيرة 6: (198 − 17) ÷ 6 = 181 ÷ 6 = 30 والباقي 1، إذن 30 فطيرة.'),
  [num('boss', 'hard', ('Abdullah received 246 stamps. He kept 25 and gave the rest to 6 friends equally. How many stamps did each friend get?', 'حصل عبد الله على 246 طابعًا، احتفظ بـ 25 طابعًا ويريد إعطاء الباقي إلى 6 من أصدقائه بالتساوي. ما عدد الطوابع التي سيحصل عليها كل صديق؟'), '(246-25-5)/6', unit=STAMPS, **VEH('stamps')),
   mc('boss', 'hard', ('Which expression shows Abdullah\'s stamps for each friend?', 'أي تعبير يوضح طوابع كل صديق من أصدقاء عبد الله؟'), ['(246 − 25) ÷ 6', '246 − 25 ÷ 6', '246 ÷ 6 − 25', '(246 + 25) ÷ 6'], **VEH('stamps')),
   num('boss', 'hard', ('There are 172 tourists and 8 tour guides. Each microbus fits 9 people. How many microbuses do they need?', 'تضم المجموعة 172 سائحًا و8 مرشدين سياحيين، ويتسع كل ميكروباص لـ 9 أشخاص. ما عدد الميكروباصات التي يحتاجون إليها؟'), '(172+8)/9', unit=MB, **VEHB('pyramids', 'microbus', 'microbus')),
   num('boss', 'hard', ('Sita buys 198 berries and eats 17 on the way home. Each muffin has 6 berries. How many muffins can she make?', 'اشترت نشوى 198 ثمرة توت، وفي طريق عودتها أكلت 17 ثمرة. تضع 6 ثمرات توت في كل فطيرة. ما عدد الفطائر التي يمكنها خبزها؟'), '(198-17-1)/6', unit=MUF, **VEH('berries', 'muffin')),
   mc('boss', 'hard', ('Which story fits (50 − 36) ÷ 4?', 'أي مسألة كلامية يمكن تمثيلها بـ (50 − 36) ÷ 4؟'),
      [('50 pens, 36 are lost, the rest shared by 4 friends', '50 قلمًا، ضاع 36، وقُسم الباقي على 4 أصدقاء'), ('50 pens shared by 4, then 36 more', 'قُسم 50 قلمًا على 4 ثم أُضيف 36'), ('36 pens and 50 more, shared by 4', '36 قلمًا و50 أخرى قُسمت على 4'), ('4 boxes of 50 pens, 36 lost', '4 علب في كل منها 50 قلمًا، ضاع 36')]),
  ])

# ----------------------------------------------------------------------------------------------------
HEAD = {
 7: ('''/* Math · Grade 4 · Unit 7 "Multiplication and Division: Computation and Relationships" · Languages track (English), first term 2026/2027
   Source: the English school book, Unit 7 (pages 99-122): Concept 1 "Multiplying by 1-Digit and 2-Digit Numbers" (lessons 1-5), Concept 2 "Dividing by 1-Digit Divisors" (lessons 6-11).
   Idea ids: Y7 + lesson (2 digits) + number (Y7011 … Y7112).   Boss ideas: Y7013, Y7023, Y7033, Y7043, Y7053, Y7063, Y7073, Y7082, Y7103, Y7112.
   Every number answer is computed (calc, checked by tools/check_questions.js). A remainder is asked as a choice ("14 R5") or as two number questions (quotient, then remainder).
   Pictures: owner's Gemini pictures (2 Nov 2026) math/assets/obj_*.webp, veh_*.webp, bg_nile.jpg, bg_pyramids.jpg in vehFig; areaBox and colMul drawn in code (math/g4_art.js).
   Review notes:
   - Lesson 4: the estimates are ours (rounding to the biggest place); the book leaves the "Estimate" line empty.
   - Lesson 6: "Which form of transportation should the group take?" is an opinion and is not asked; the numbers of each vehicle are asked. 60 students, buses of 40: 2 buses.
   - Lesson 7: the metro: 9 × 90 = 810 people per metro, 8,100 ÷ 810 = 10 metros (derived).
   - Lesson 9: the second area model of Model Match is read as 5,631 ÷ 4 = 1,407 R3 (4,000 + 1,200 + 400 + 28 + 3).
   - Lesson 11: "From Cairo to Alexandria" (218 km, 3 stops) says "do not solve" and is not asked.
   - Not asked: Notice and Wonder, The Amazing Race, Target Number, quick draws, Writing About Math, Check Your Understanding.
   Generated by math/tools/gen_mg4u78.py together with questions_mg4u7_ar.js (same ids, phrasings order and answers). */''',
     '''/* الصف الرابع الابتدائي · الرياضيات (عربي) · الوحدة السابعة «عمليتا الضرب والقسمة: الحساب والعلاقات»، الفصل الدراسي الأول 2026/2027
   المصدر: كتاب الوزارة العربي، الوحدة السابعة (صفحات 99–122): المفهوم الأول «الضرب في عدد مكون من رقم أو رقمين» (الدروس 1–5)، المفهوم الثاني «القسمة على عدد مكون من رقم واحد» (الدروس 6–11).
   أرقام الأفكار: Y7 + رقم الدرس (رقمان) + رقم. الملف مطابق لملف اللغات math/questions_mg4u7.js، والكتابان متطابقان في الأعداد.
   مصطلحات الكتاب العربي: نموذج مساحة المستطيل، خاصية التوزيع، خوارزمية عملية الضرب بالتجزئة، الخوارزمية المعيارية، المقسوم، المقسوم عليه، خارج القسمة، باقي القسمة،
   خوارزمية خارج القسمة بالتجزئة، الأتوبيس النهري، الميكروباص، السيارة العائلية. باقي القسمة يُكتب «14 والباقي 5».
   ملاحظات للمراجعة:
   - الدرس 4: التقديرات من عندنا (التقريب لأكبر خانة)؛ الكتاب يترك سطر «التقدير» فارغًا.
   - الدرس 6: «أي وسيلة نقل يجب أن يستخدموها؟» رأي فلم يُسأل عنه؛ سُئل عن عدد كل وسيلة.
   - الدرس 7: المترو: 9 × 90 = 810 أشخاص، و8,100 ÷ 810 = 10 قطارات (مستنتج).
   - الدرس 11: مسألة «من القاهرة إلى الإسكندرية» يطلب الكتاب عدم حلها فلم تُسأل.
   - لا يُسأل عن: «ملاحظة وأسئلة»، و«السباق الرائع»، و«العدد المستهدف»، والرسم السريع، و«الكتابة عن الرياضيات»، و«تحقق من فهمك». */'''),
 8: ('''/* Math · Grade 4 · Unit 8 "Order of Operations" · Languages track (English), first term 2026/2027
   Source: the English school book, Unit 8 (pages 123-127): Concept 1 "Order of Operations", lessons 1-2.
   Idea ids: Z8 + lesson (2 digits) + number.   Boss ideas: Z8013, Z8022.
   Every number answer is computed (calc). Pictures: owner's Gemini pictures in vehFig.
   Review notes:
   - Lesson 1: Saleem's 105 is (74 − 61 + 8) × 5; Sarah's 53 is right. "Which does not belong": 60 + 20 − 50 = 30 (the others are 20).
   - Lesson 2: the Number Talk with nine "− 4" is not asked (the count of 4s is hard to read). Abdullah: 221 ÷ 6 = 36 R5 (36 stamps each). Sita: 181 ÷ 6 = 30 R1 (30 muffins).
     The (50 − 36) ÷ 4 story is our own example (the book asks the child to write one).
   Generated by math/tools/gen_mg4u78.py together with questions_mg4u8_ar.js. */''',
     '''/* الصف الرابع الابتدائي · الرياضيات (عربي) · الوحدة الثامنة «ترتيب العمليات»، الفصل الدراسي الأول 2026/2027
   المصدر: كتاب الوزارة العربي، الوحدة الثامنة (صفحات 123–127): الدرسان 1 و2. الملف مطابق لملف اللغات math/questions_mg4u8.js.
   في الكتاب العربي: «ترتيب إجراء العمليات الحسابية»، والقوسان، ثم الضرب والقسمة (من اليسار إلى اليمين)، ثم الجمع والطرح (من اليسار إلى اليمين). Sita في الكتاب الإنجليزي = نشوى، والـ muffins = فطائر التوت.
   ملاحظات للمراجعة:
   - الدرس 1: إجابة سليم 105 هي (74 − 61 + 8) × 5؛ وإجابة سارة 53 صحيحة. المسألة المختلفة: 60 + 20 − 50 = 30.
   - الدرس 2: عبد الله 221 ÷ 6 = 36 والباقي 5؛ نشوى 181 ÷ 6 = 30 والباقي 1. مسألة (50 − 36) ÷ 4 مثال من عندنا (الكتاب يطلب من التلميذ كتابة مسألة). */'''),
}
LES = {
 7: (['Lesson 1 · The Area Model Strategy (pages 100-101)', 'Lesson 2 · The Distributive Property (pages 102-103)', 'Lesson 3 · The Partial Products Algorithm (pages 104-106)',
      'Lesson 4 · Multiply by a One-Digit Number (pages 107-108)', 'Lesson 5 · Multiply a Two-Digit Number by a Multiple of 10 (pages 109-110)', 'Lesson 6 · Exploring Remainders (pages 111-112)',
      'Lesson 7 · Patterns in Division (pages 113-115)', 'Lesson 8 · The Area Model and Division (page 116)', 'Lesson 9 · The Partial Quotients Algorithm (pages 117-118)',
      'Lesson 10 · The Standard Division Algorithm (pages 119-120)', 'Lesson 11 · Division and Multiplication (pages 121-122)'],
     ['الدرس 1 · إستراتيجية نموذج مساحة المستطيل (ص 100–101)', 'الدرس 2 · خاصية التوزيع (ص 102–103)', 'الدرس 3 · خوارزمية عملية الضرب بالتجزئة (ص 104–106)',
      'الدرس 4 · الضرب في عدد مكون من رقم واحد (ص 107–108)', 'الدرس 5 · ضرب عدد مكون من رقمين في مضاعفات العدد 10 (ص 109–110)', 'الدرس 6 · استكشاف باقي القسمة (ص 111–112)',
      'الدرس 7 · الأنماط في عملية القسمة (ص 113–115)', 'الدرس 8 · القسمة باستخدام نموذج مساحة المستطيل (ص 116)', 'الدرس 9 · خوارزمية خارج القسمة بالتجزئة (ص 117–118)',
      'الدرس 10 · خوارزمية القسمة المعيارية (ص 119–120)', 'الدرس 11 · القسمة والضرب (ص 121–122)']),
 8: (['Lesson 1 · Order of Operations (pages 124-125)', 'Lesson 2 · The Order of Operations and Story Problems (pages 126-127)'],
     ['الدرس 1 · ترتيب إجراء العمليات الحسابية (ص 124–125)', 'الدرس 2 · ترتيب العمليات والمسائل الكلامية (ص 126–127)']),
}
TITLE = {7: ('Multiplication and Division', 'عمليتا الضرب والقسمة'), 8: ('Order of Operations', 'ترتيب العمليات')}

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

for u in (7, 8):
    write(u, False); write(u, True)
    print('Unit', u, len(UNITS_IDEAS[u]), 'ideas', sum(len(I['variants']) for I in UNITS_IDEAS[u]), 'phrasings')
