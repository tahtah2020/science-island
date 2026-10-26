# Generator of math/questions_m5c5.js (English book) and math/questions_m5c5_ar.js (Arabic book): same ids, order and answers.
import json, re, sys
OUT = sys.argv[1]

def fmt(n):
    if isinstance(n, float) and not n.is_integer(): return f"{n:,}"
    return f"{int(n):,}"

def wrap(s):
    """Arabic: keep every run of digits / signs left to right."""
    if not isinstance(s, str) or '⁦' in s: return s
    s = s.replace('= ؟', '= ?').replace('× ؟', '× ?').replace('÷ ؟', '÷ ?').replace('؟ ×', '? ×').replace('؟ ÷', '? ÷')
    return re.sub(r'[\d(][\d,.\s×+−=()?÷_]*[\d)?_]|\d', lambda m: '⁦' + m.group(0) + '⁩', s)

def L(x, ar):
    if isinstance(x, tuple): return wrap(x[1]) if ar else x[0]
    return wrap(x) if ar else x

def V(t, mode, lvl, q, **k):
    return dict(type=t, mode=mode, level=lvl, q=q, **k)

def num(mode, lvl, q, calc, unit=None, **k):
    r = eval(calc.replace('×', '*'))
    ans = str(int(r)) if float(r).is_integer() else repr(round(r, 6))
    d = V('num', mode, lvl, q, answer=ans, calc=calc.replace('×', '*'), **k)
    if unit: d['unit'] = unit
    return d

def mc(mode, lvl, q, opts, **k): return V('mc', mode, lvl, q, options=opts, answer=0, **k)
def fill(mode, lvl, q, opts, **k): return V('fill', mode, lvl, q, options=opts, answer=0, **k)
def tf(mode, lvl, q, ans, **k): return V('tf', mode, lvl, q, answer=0 if ans else 1, **k)
def multi(mode, lvl, q, opts, right, **k): return V('multi', mode, lvl, q, options=opts, answer=right, **k)
def match(mode, lvl, q, left, right, ans, **k): return V('match', mode, lvl, q, left=left, right=right, answer=ans, **k)
def term(mode, lvl, q, ans, choices, **k): return V('term', mode, lvl, q, answer=ans, choices=choices, **k)
def T(sec): return {'seconds': sec}
def AM(top, left, cells, **k): return {'fig': 'areaModel', 'pic': dict(top=top, left=left, cells=cells, **k)}
def LM(**k): return {'fig': 'longMult', 'pic': k}

def tr(v, ar):
    out = {}
    for key, val in v.items():
        if key in ('q',): out[key] = L(val, ar)
        elif key in ('options', 'left', 'right', 'choices', 'cols', 'items'): out[key] = [L(o, ar) for o in val]
        elif key == 'unit' or key == 'answer' and v['type'] == 'term': out[key] = L(val, ar) if not (key == 'answer' and v['type'] == 'term' and ar) else val[1] if isinstance(val, tuple) else val
        else: out[key] = val
    if v['type'] == 'term' and isinstance(v['answer'], tuple): out['answer'] = v['answer'][1] if ar else v['answer'][0]
    if 'unit' in v and isinstance(v['unit'], tuple): out['unit'] = v['unit'][1] if ar else v['unit'][0]
    return out

IDEAS = []
def idea(i, lesson, concept, explain, variants): IDEAS.append(dict(id=i, lesson=lesson, concept=concept, explain=explain, variants=variants))
KM = ('km', 'كم'); G = ('g', 'جم'); ML = ('mL', 'مل'); MIN = ('minutes', 'دقيقة')

def AM(top, left, cells, **k): return {'fig': 'areaModel', 'pic': dict(top=top, left=left, cells=cells, **k)}
def LD(**k): return {'fig': 'longDiv', 'pic': k}
def table(mode, lvl, q, cols, items, ans, **k): return V('table', mode, lvl, q, cols=cols, items=items, answer=ans, **k)
def TG(a, b): return {'fig': 'tenthsGrid', 'pic': {'a': a, 'b': b}}
def JL(step, n, to=3): return {'fig': 'jumpLine', 'pic': {'step': step, 'n': n, 'to': to}}
def PS(n): return {'fig': 'placeSlide', 'pic': {'num': n}}
CM = ('cm', 'سم'); MM = ('mm', 'مم'); M_ = ('m', 'م'); KG = ('kg', 'كجم'); G_ = ('g', 'جم'); L_ = ('L', 'لتر'); ML = ('mL', 'مل')
POW = ['0.001', '0.01', '0.1', '10', '100', '1,000']

# ---------------- Lesson 1 · Multiplying by Powers of Ten (p92-94) ----------------
idea('Z11', 1, ('Expanded form with powers of ten', 'الصيغة الممتدة بقوى العدد 10'),
  ('Each digit is multiplied by the power of ten of its place: 496 = 4 × 100 + 9 × 10 + 6; 6,140 = 6 × 1,000 + 1 × 100 + 4 × 10; 20,403 = 2 × 10,000 + 4 × 100 + 3.',
   'كل رقم يُضرب في قوة العدد 10 الخاصة بمنزلته: 496 = 4 × 100 + 9 × 10 + 6، و6,140 = 6 × 1,000 + 1 × 100 + 4 × 10، و20,403 = 2 × 10,000 + 4 × 100 + 3.'),
  [num('timed', 'easy', ('496 = 4 × ? + 9 × 10 + 6', '496 = 4 × ? + 9 × 10 + 6'), '100', seconds=12),
   num('timed', 'easy', ('6,140 = 6 × ? + 1 × 100 + 4 × 10', '6,140 = 6 × ? + 1 × 100 + 4 × 10'), '1000', seconds=12),
   num('normal', 'medium', ('20,403 = 2 × ? + 4 × 100 + 3', '20,403 = 2 × ? + 4 × 100 + 3'), '10000'),
   num('normal', 'medium', ('78,594 = 7 × ? + 8 × 1,000 + 5 × 100 + 9 × 10 + 4', '78,594 = 7 × ? + 8 × 1,000 + 5 × 100 + 9 × 10 + 4'), '10000'),
   num('timed', 'easy', ('8,032 × 1,000 = ?', '8,032 × 1,000 = ؟'), '8032*1000', seconds=15),
  ])
idea('Z12', 1, ('Multiplying by 10, 100, 1,000 and by 0.1, 0.01, 0.001', 'الضرب في 10 و100 و1,000 وفي 0.1 و0.01 و0.001'),
  ('Multiplying by 10, 100 or 1,000 moves every digit 1, 2 or 3 places to the left (the number gets bigger): 25 × 100 = 2,500. Multiplying by 0.1, 0.01 or 0.001 moves the digits 1, 2 or 3 places to the right (the number gets smaller): 25 × 0.01 = 0.25. 3 × 2 thousandths = 6 thousandths = 0.006.',
   'الضرب في 10 أو 100 أو 1,000 يحرك كل رقم منزلة أو منزلتين أو ثلاثًا إلى اليسار (يكبر العدد): 25 × 100 = 2,500. والضرب في 0.1 أو 0.01 أو 0.001 يحرك الأرقام منزلة أو منزلتين أو ثلاثًا إلى اليمين (يصغر العدد): 25 × 0.01 = 0.25. و3 × جزأين من ألف = 6 أجزاء من ألف = 0.006.'),
  [num('timed', 'easy', ('25 × 1,000 = ?', '25 × 1,000 = ؟'), '25*1000', seconds=12),
   num('timed', 'easy', ('25 × 0.1 = ?', '25 × 0.1 = ؟'), '25*0.1', seconds=12),
   num('timed', 'easy', ('25 × 0.01 = ?', '25 × 0.01 = ؟'), '25*0.01', seconds=12),
   num('normal', 'medium', ('25 × 0.001 = ?', '25 × 0.001 = ؟'), '25*0.001'),
   num('normal', 'medium', ('3 × 2 thousandths = ? (write it as a decimal)', '3 × جزأين من ألف = ؟ (اكتبه كسرًا عشريًا)'), '3*0.002'),
   tf('normal', 'medium', ('Multiplying a number by 0.1 makes it smaller.', 'ضرب عدد في 0.1 يجعله أصغر.'), True),
   term('normal', 'medium', ('Numbers like 10, 100, 1,000 and 0.1, 0.01, 0.001.', 'أعداد مثل 10 و100 و1,000 و0.1 و0.01 و0.001.'), ('Powers of ten', 'قوى العدد 10'), [('Multiples of 5', 'مضاعفات العدد 5'), ('Prime numbers', 'أعداد أولية'), ('Remainders', 'بواقي القسمة')]),
  ])
idea('Z13', 1, ('Manal’s pencil and the table of powers', 'قلم منال وجدول القوى'),
  ('Manal’s pencil is 15.2 cm. 10 times bigger: 15.2 × 10 = 152 cm; 100 pencils in a row: 15.2 × 100 = 1,520 cm; one tenth of it: 15.2 × 0.1 = 1.52 cm. 4.2 × 10 = 42, 360 × 0.1 = 36, 7.4 × 0.01 = 0.074, 1.245 × 100 = 124.5, 602.1 × 0.01 = 6.021, 14.14 × 0.1 = 1.414.',
   'طول قلم منال 15.2 سم. إذا تضاعف 10 مرات: 15.2 × 10 = 152 سم، و100 قلم في صف: 15.2 × 100 = 1,520 سم، وجزء من عشرة منه: 15.2 × 0.1 = 1.52 سم. و4.2 × 10 = 42 و360 × 0.1 = 36 و7.4 × 0.01 = 0.074 و1.245 × 100 = 124.5 و602.1 × 0.01 = 6.021 و14.14 × 0.1 = 1.414.'),
  [num('normal', 'easy', ('Manal’s pencil is 15.2 cm. If it were 10 times bigger, how long would it be?', 'طول قلم منال 15.2 سم. إذا تضاعف طوله 10 مرات، كم يصبح طوله؟'), '15.2*10', unit=CM, **PS('15.2')),
   num('normal', 'medium', ('100 of the same pencils in a row: how long in all?', '100 قلم بنفس الطول في صف واحد: كم يكون مجموع الطول؟'), '15.2*100', unit=CM),
   num('normal', 'medium', ('If the pencil shrank to one tenth of its length (15.2 × 0.1)?', 'إذا أصبح القلم جزءًا من عشرة من طوله (15.2 × 0.1)؟'), '15.2*0.1', unit=CM),
   num('normal', 'medium', ('7.4 × 0.01 = ?', '7.4 × 0.01 = ؟'), '7.4*0.01'),
   num('normal', 'medium', ('1.245 × 100 = ?', '1.245 × 100 = ؟'), '1.245*100'),
   num('normal', 'medium', ('602.1 × 0.01 = ?', '602.1 × 0.01 = ؟'), '602.1*0.01'),
   match('normal', 'medium', ('Match each product with its value.', 'وصّل كل ناتج ضرب بقيمته.'), ['3 × 0.01', '30 × 0.01', '300 × 0.01'], ['0.3', '3', '0.03'], [2, 0, 1]),
  ])
idea('Z14', 1, ('Challenge: Hoda’s stride', 'تحدٍّ: خطوة هدى'),
  ('Hoda’s stride is 0.72 m. 1,000 paces: 0.72 × 1,000 = 720 m (every digit moves 3 places to the left).',
   'طول خطوة هدى 0.72 متر. بعد 1,000 خطوة: 0.72 × 1,000 = 720 مترًا (كل رقم يتحرك 3 منازل إلى اليسار).'),
  [num('boss', 'hard', ('Hoda’s stride is 0.72 m. How far does she walk in 1,000 paces?', 'طول خطوة هدى 0.72 متر. ما المسافة التي ستمشيها بعد 1,000 خطوة؟'), '0.72*1000', unit=M_),
   num('boss', 'hard', ('300 × 0.001 = ?', '300 × 0.001 = ؟'), '300*0.001'),
   num('boss', 'hard', ('14.14 × 0.1 = ?', '14.14 × 0.1 = ؟'), '14.14*0.1'),
   mc('boss', 'hard', ('Which product equals 0.3?', 'أي ناتج ضرب يساوي 0.3؟'), ['30 × 0.01', '3 × 0.01', '300 × 0.01', '30 × 0.1']),
  ])

# ---------------- Lesson 2 · Multiplying Decimals by Whole Numbers (p95-96) ----------------
idea('Z21', 2, ('Multiplying whole numbers (warm up)', 'ضرب الأعداد الصحيحة (تمهيد)'),
  ('773 × 2 = 1,546 · 521 × 9 = 4,689 · 385 × 43 = 16,555 · 108 × 26 = 2,808 · 497 × 85 = 42,245.',
   '773 × 2 = 1,546 و521 × 9 = 4,689 و385 × 43 = 16,555 و108 × 26 = 2,808 و497 × 85 = 42,245.'),
  [num('timed', 'easy', ('773 × 2 = ?', '773 × 2 = ؟'), '773*2', seconds=15),
   num('normal', 'medium', ('521 × 9 = ?', '521 × 9 = ؟'), '521*9'),
   num('normal', 'medium', ('385 × 43 = ?', '385 × 43 = ؟'), '385*43'),
   num('normal', 'medium', ('108 × 26 = ?', '108 × 26 = ؟'), '108*26'),
   num('normal', 'hard', ('497 × 85 = ?', '497 × 85 = ؟'), '497*85'),
  ])
idea('Z22', 2, ('A decimal times a whole number on the number line', 'كسر عشري في عدد صحيح على خط الأعداد'),
  ('0.3 × 3 is 3 jumps of 0.3: 0.9. 0.3 × 4 = 1.2, 0.3 × 5 = 1.5, 2.5 × 3 = 7.5, 0.35 × 5 = 1.75. Multiply like whole numbers, then give the product as many decimal places as the decimal factor.',
   '0.3 × 3 هو 3 قفزات طول كل منها 0.3: 0.9. و0.3 × 4 = 1.2 و0.3 × 5 = 1.5 و2.5 × 3 = 7.5 و0.35 × 5 = 1.75. نضرب كأنها أعداد صحيحة، ثم يكون في الناتج عدد الأماكن العشرية نفسه الموجود في الكسر العشري.'),
  [num('timed', 'easy', ('0.3 × 3 = ?', '0.3 × 3 = ؟'), '0.3*3', seconds=12, **JL(0.3, 3)),
   num('normal', 'easy', ('0.3 × 4 = ?', '0.3 × 4 = ؟'), '0.3*4', **JL(0.3, 4)),
   num('normal', 'easy', ('0.3 × 5 = ?', '0.3 × 5 = ؟'), '0.3*5', **JL(0.3, 5)),
   num('normal', 'medium', ('2.5 × 3 = ?', '2.5 × 3 = ؟'), '2.5*3'),
   num('normal', 'medium', ('0.35 × 5 = ?', '0.35 × 5 = ؟'), '0.35*5'),
   mc('normal', 'medium', ('Which number line shows 0.3 × 4?', 'أي خط أعداد يمثل 0.3 × 4؟'), [('4 jumps of 0.3', '4 قفزات طول كل منها 0.3'), ('3 jumps of 0.4', '3 قفزات طول كل منها 0.4'), ('4 jumps of 3', '4 قفزات طول كل منها 3'), ('0.3 jumps of 4', '0.3 قفزة طولها 4')]),
  ])
idea('Z23', 2, ('Where does the decimal point go?', 'أين نضع العلامة العشرية؟'),
  ('Ameen multiplies prices at his bookstore. Multiply as whole numbers, then count the decimal places in the factors and give the product the same number, or check with an estimate: 0.35 × 5 is about 0.4 × 5 = 2, so 1.75, not 17.5.',
   'يضرب أمين الأسعار في مكتبته. نضرب كأعداد صحيحة ثم نعد الأماكن العشرية في العاملين ونضع العدد نفسه في الناتج، أو نتحقق بالتقدير: 0.35 × 5 تقريبًا 0.4 × 5 = 2، إذن الناتج 1.75 وليس 17.5.'),
  [mc('normal', 'medium', ('35 × 5 = 175. So 0.35 × 5 = ?', '35 × 5 = 175. إذن 0.35 × 5 = ؟'), ['1.75', '17.5', '0.175', '175']),
   mc('normal', 'medium', ('25 × 3 = 75. So 2.5 × 3 = ?', '25 × 3 = 75. إذن 2.5 × 3 = ؟'), ['7.5', '75', '0.75', '750']),
   tf('normal', 'medium', ('0.35 × 5 = 17.5', '0.35 × 5 = 17.5'), False),
   mc('normal', 'medium', ('How can Ameen check where the decimal point goes?', 'كيف يتحقق أمين من موضع العلامة العشرية؟'), [('Estimate the product', 'يقدّر ناتج الضرب'), ('Always put it after the first digit', 'يضعها دائمًا بعد أول رقم'), ('Remove it from the product', 'يحذفها من الناتج'), ('Add the two factors', 'يجمع العاملين')]),
  ])
idea('Z24', 2, ('Challenge: make the greatest product', 'تحدٍّ: كوّن أكبر ناتج ضرب'),
  ('In «Make the Greatest Product» the digits go in boxes like □.□ × □. With 3, 5 and 8: 5.3 × 8 = 42.4 is greater than 8.3 × 5 = 41.5 and 8.5 × 3 = 25.5. With 4 fixed in □.□□ × 4, the greatest decimal gives the greatest product.',
   'في لعبة «كوّن أكبر ناتج ضرب» توضع الأرقام في مربعات مثل □.□ × □. بالأرقام 3 و5 و8: 5.3 × 8 = 42.4 أكبر من 8.3 × 5 = 41.5 ومن 8.5 × 3 = 25.5. ومع العدد 4 الثابت في □.□□ × 4 يعطي أكبر كسر عشري أكبر ناتج.'),
  [num('boss', 'hard', ('5.3 × 8 = ?', '5.3 × 8 = ؟'), '5.3*8'),
   mc('boss', 'hard', ('With the digits 3, 5 and 8 in □.□ × □, which gives the greatest product?', 'بالأرقام 3 و5 و8 في □.□ × □، أي مسألة تعطي أكبر ناتج ضرب؟'), ['5.3 × 8', '8.3 × 5', '8.5 × 3', '3.5 × 8']),
   num('boss', 'hard', ('8.3 × 5 = ?', '8.3 × 5 = ؟'), '8.3*5'),
   num('boss', 'hard', ('9.75 × 4 = ?', '9.75 × 4 = ؟'), '9.75*4'),
  ])

# ---------------- Lesson 3 · Multiplying Tenths by Tenths (p97-98) ----------------
idea('Z31', 3, ('Tenths × tenths make hundredths', 'أجزاء من عشرة × أجزاء من عشرة = أجزاء من مائة'),
  ('Nadia is right: 0.5 × 0.7 = 0.35, in the hundredths place. On a 10 × 10 grid each small square is 0.01; 0.3 × 0.4 is the overlap of 3 rows and 4 columns: 12 squares = 0.12. Kamal is wrong: multiplying by a number less than 1 makes the number smaller, not bigger.',
   'نادية على صواب: 0.5 × 0.7 = 0.35 في منزلة الأجزاء من مائة. في شبكة 10 × 10 كل مربع صغير = 0.01، و0.3 × 0.4 هو تقاطع 3 صفوف و4 أعمدة: 12 مربعًا = 0.12. وكمال مخطئ: الضرب في عدد أقل من 1 يجعل العدد أصغر وليس أكبر.'),
  [mc('normal', 'medium', ('Kamal says tenths × tenths gives tenths; Nadia says hundredths. Who is right?', 'قال كمال إن الأجزاء من عشرة × الأجزاء من عشرة تعطي أجزاء من عشرة، وقالت نادية أجزاء من مائة. من على صواب؟'),
      [('Nadia: 0.1 × 0.1 = 0.01', 'نادية: 0.1 × 0.1 = 0.01'), ('Kamal: multiplying always makes numbers bigger', 'كمال: الضرب دائمًا يكبّر الأعداد'), ('Both', 'كلاهما'), ('Neither', 'لا أحد منهما')]),
   num('timed', 'easy', ('0.1 × 0.1 = ?', '0.1 × 0.1 = ؟'), '0.1*0.1', seconds=12, **TG(1, 1)),
   num('normal', 'easy', ('Use the grid: 0.3 × 0.4 = ?', 'استخدم الشبكة: 0.3 × 0.4 = ؟'), '0.3*0.4', **TG(3, 4)),
   tf('normal', 'medium', ('Multiplying by a number less than 1 always makes a number bigger.', 'الضرب في عدد أقل من 1 يجعل العدد أكبر دائمًا.'), False),
  ])
idea('Z32', 3, ('Using the grids', 'استخدام الشبكات'),
  ('0.5 × 0.2 = 0.10 · 0.9 × 0.5 = 0.45 · 0.7 × 0.8 = 0.56 · 0.5 × 0.6 = 0.30: count the squares in the overlap; each is one hundredth.',
   '0.5 × 0.2 = 0.10 و0.9 × 0.5 = 0.45 و0.7 × 0.8 = 0.56 و0.5 × 0.6 = 0.30: نعد مربعات التقاطع، وكل مربع جزء من مائة.'),
  [num('normal', 'easy', ('Use the grid: 0.5 × 0.2 = ?', 'استخدم الشبكة: 0.5 × 0.2 = ؟'), '0.5*0.2', **TG(5, 2)),
   num('normal', 'medium', ('Use the grid: 0.9 × 0.5 = ?', 'استخدم الشبكة: 0.9 × 0.5 = ؟'), '0.9*0.5', **TG(9, 5)),
   num('normal', 'medium', ('Use the grid: 0.7 × 0.8 = ?', 'استخدم الشبكة: 0.7 × 0.8 = ؟'), '0.7*0.8', **TG(7, 8)),
   num('normal', 'medium', ('0.5 × 0.6 = ?', '0.5 × 0.6 = ؟'), '0.5*0.6'),
   mc('normal', 'medium', ('Which part of the grid shows the product?', 'أي جزء في الشبكة يمثل ناتج الضرب؟'), [('The overlap of the two shadings', 'تقاطع التظليلين'), ('The yellow rows only', 'الصفوف الصفراء فقط'), ('The white squares', 'المربعات البيضاء'), ('The whole grid', 'الشبكة كلها')], **TG(3, 4)),
  ])
idea('Z33', 3, ('Challenge: explain to a friend', 'تحدٍّ: اشرح لصديقك'),
  ('A tenth of a tenth is a hundredth: 0.1 × 0.1 = 0.01. So 0.7 × 0.8 = 56 hundredths = 0.56.',
   'الجزء من عشرة من جزء من عشرة هو جزء من مائة: 0.1 × 0.1 = 0.01. إذن 0.7 × 0.8 = 56 جزءًا من مائة = 0.56.'),
  [mc('boss', 'hard', ('Why is 0.7 × 0.8 in the hundredths?', 'لماذا يكون ناتج 0.7 × 0.8 في الأجزاء من مائة؟'), [('A tenth of a tenth is a hundredth', 'الجزء من عشرة من جزء من عشرة هو جزء من مائة'), ('Because 7 + 8 = 15', 'لأن 7 + 8 = 15'), ('Because both numbers are less than 10', 'لأن العددين أقل من 10'), ('Because we add the tenths', 'لأننا نجمع الأجزاء من عشرة')]),
   num('boss', 'hard', ('0.7 × 0.8 = ?', '0.7 × 0.8 = ؟'), '0.7*0.8'),
   multi('boss', 'hard', ('Which products are in the hundredths? Choose all the correct answers.', 'أي نواتج الضرب في منزلة الأجزاء من مائة؟ اختر كل الإجابات الصحيحة.'), ['0.3 × 0.4', '0.9 × 0.5', '3 × 0.4', '0.3 × 40'], [0, 1]),
  ])

# ---------------- Lesson 4 · Multiply decimals using the area model (p99-100) ----------------
idea('Z41', 4, ('Extending multiplication patterns', 'توسيع أنماط الضرب'),
  ('8 × 3 = 24, so 0.8 × 3 = 2.4, 0.8 × 0.3 = 0.24, 0.08 × 0.3 = 0.024, 0.08 × 0.03 = 0.0024. 7 × 6 = 42, so 7 × 0.6 = 4.2, 0.7 × 0.6 = 0.42, 0.7 × 0.06 = 0.042, 0.07 × 0.06 = 0.0042.',
   '8 × 3 = 24، إذن 0.8 × 3 = 2.4 و0.8 × 0.3 = 0.24 و0.08 × 0.3 = 0.024 و0.08 × 0.03 = 0.0024. و7 × 6 = 42، إذن 7 × 0.6 = 4.2 و0.7 × 0.6 = 0.42 و0.7 × 0.06 = 0.042 و0.07 × 0.06 = 0.0042.'),
  [num('timed', 'easy', ('8 × 0.3 = 2.4. So 0.8 × 0.3 = ?', '8 × 0.3 = 2.4. إذن 0.8 × 0.3 = ؟'), '0.8*0.3', seconds=15),
   num('normal', 'medium', ('0.08 × 0.3 = ?', '0.08 × 0.3 = ؟'), '0.08*0.3'),
   num('normal', 'medium', ('0.08 × 0.03 = ?', '0.08 × 0.03 = ؟'), '0.08*0.03'),
   num('timed', 'easy', ('7 × 0.06 = 0.42. So 0.7 × 0.6 = ?', '7 × 0.06 = 0.42. إذن 0.7 × 0.6 = ؟'), '0.7*0.6', seconds=15),
   num('normal', 'medium', ('0.07 × 0.06 = ?', '0.07 × 0.06 = ؟'), '0.07*0.06'),
   num('normal', 'easy', ('7 × 60 = ?', '7 × 60 = ؟'), '7*60'),
  ])
idea('Z42', 4, ('Area model puzzles', 'ألغاز نموذج مساحة المستطيل'),
  ('In the first puzzle, 50 × 8 = 400 and the missing side is 4 (4 × 20 = 80, 4 × 8 = 32): 28 × 54 = 1,512. In the second, 30 × 400 = 12,000, 30 × 20 = 600, and the missing side is 4 (4 × 400 = 1,600): 425 × 34 = 14,450, and the last cell is 4 × 5 = 20.',
   'في اللغز الأول 50 × 8 = 400 والجانب الناقص 4 (4 × 20 = 80 و4 × 8 = 32): 28 × 54 = 1,512. وفي الثاني 30 × 400 = 12,000 و30 × 20 = 600، والجانب الناقص 4 (4 × 400 = 1,600): 425 × 34 = 14,450، والخانة الأخيرة 4 × 5 = 20.'),
  [num('normal', 'easy', ('What goes in the ? cell (50 × 8)?', 'ماذا نكتب في الخانة ؟ (50 × 8)؟'), '50*8', **AM(top=['20', '8'], left=['50', '?'], cells=[['1,000', '?'], ['80', '32']], hi=[0, 1])),
   num('normal', 'medium', ('What is the missing number on the side? (? × 20 = 80)', 'ما العدد الناقص في الجانب؟ (؟ × 20 = 80)'), '80/20', **AM(top=['20', '8'], left=['50', '?'], cells=[['1,000', '400'], ['80', '32']])),
   num('normal', 'medium', ('Write the problem and find the product: 28 × 54 = ?', 'اكتب المسألة وأوجد الناتج: 28 × 54 = ؟'), '28*54', **AM(top=['20', '8'], left=['50', '4'], cells=[['1,000', '400'], ['80', '32']])),
   num('normal', 'medium', ('Second puzzle: 30 × ? = 12,000. What is the missing number on top?', 'اللغز الثاني: 30 × ؟ = 12,000. ما العدد الناقص في الأعلى؟'), '12000/30', **AM(top=['?', '?', '5'], left=['30', '?'], cells=[['12,000', '600', '150'], ['1,600', '80', '?']])),
   num('normal', 'hard', ('Second puzzle: the problem is 425 × 34. What is the product?', 'اللغز الثاني: المسألة 425 × 34. ما ناتج الضرب؟'), '425*34', **AM(top=['400', '20', '5'], left=['30', '4'], cells=[['12,000', '600', '150'], ['1,600', '80', '20']])),
  ])
idea('Z43', 4, ('Decimal area models', 'نموذج مساحة المستطيل للكسور العشرية'),
  ('1.3 × 6.8: split into 1 + 0.3 and 6 + 0.8: 6 + 0.8 + 1.8 + 0.24 = 8.84. Also 29.3 × 0.34 = 9.962, 4.2 × 5.6 = 23.52, 7.3 × 0.49 = 3.577, 5.7 × 9.1 = 51.87, 18.2 × 2.8 = 50.96, 3.55 × 0.75 = 2.6625, 70.9 × 4.6 = 326.14.',
   '1.3 × 6.8: نحلل إلى 1 + 0.3 و6 + 0.8: 6 + 0.8 + 1.8 + 0.24 = 8.84. وأيضًا 29.3 × 0.34 = 9.962 و4.2 × 5.6 = 23.52 و7.3 × 0.49 = 3.577 و5.7 × 9.1 = 51.87 و18.2 × 2.8 = 50.96 و3.55 × 0.75 = 2.6625 و70.9 × 4.6 = 326.14.'),
  [num('normal', 'medium', ('Fill the cell 0.3 × 0.8.', 'املأ الخانة 0.3 × 0.8.'), '0.3*0.8', **AM(top=['6', '0.8'], left=['1', '0.3'], cells=[['6', '0.8'], ['1.8', '?']], hi=[1, 1])),
   num('normal', 'medium', ('1.3 × 6.8 = ?', '1.3 × 6.8 = ؟'), '1.3*6.8', **AM(top=['6', '0.8'], left=['1', '0.3'], cells=[['6', '0.8'], ['1.8', '0.24']])),
   num('normal', 'hard', ('4.2 × 5.6 = ?', '4.2 × 5.6 = ؟'), '4.2*5.6'),
   num('normal', 'hard', ('7.3 × 0.49 = ?', '7.3 × 0.49 = ؟'), '7.3*0.49'),
   num('normal', 'hard', ('5.7 × 9.1 = ?', '5.7 × 9.1 = ؟'), '5.7*9.1'),
   num('normal', 'hard', ('18.2 × 2.8 = ?', '18.2 × 2.8 = ؟'), '18.2*2.8'),
   num('normal', 'hard', ('29.3 × 0.34 = ?', '29.3 × 0.34 = ؟'), '29.3*0.34'),
  ])
idea('Z44', 4, ('Challenge: Malak’s cinder blocks', 'تحدٍّ: الطوب الأسمنتي لملك'),
  ('12 pallets of 1.36 t: the area model 1 + 0.3 + 0.06 by 10 + 2 needs decimal points in the partial products: 10, 3, 0.6, 2, 0.6, 0.12. Total 16.32 t, close to the estimate 12 × 1.4 ≈ 17.',
   '12 حاوية كتلة كل منها 1.36 طن: نموذج المساحة 1 + 0.3 + 0.06 في 10 + 2 يحتاج علامات عشرية في النواتج الجزئية: 10 و3 و0.6 و2 و0.6 و0.12. المجموع 16.32 طن، قريب من التقدير 12 × 1.4 ≈ 17.'),
  [num('boss', 'hard', ('Malak wrote 30 in the cell 10 × 0.3. What should it be?', 'كتبت ملك 30 في الخانة 10 × 0.3. ما الصحيح؟'), '10*0.3', **AM(top=['1', '0.3', '0.06'], left=['10', '2'], cells=[['10', '30', '6'], ['2', '6', '12']], hi=[0, 1])),
   num('boss', 'hard', ('The cell 2 × 0.06 says 12. What should it be?', 'الخانة 2 × 0.06 مكتوب فيها 12. ما الصحيح؟'), '2*0.06'),
   num('boss', 'hard', ('12 pallets of 1.36 t each. How much do they weigh all together?', '12 حاوية كتلة كل منها 1.36 طن. ما مجموع كتل الحاويات؟'), '12*1.36', unit=('t', 'طن')),
   num('boss', 'hard', ('3.55 × 0.75 = ?', '3.55 × 0.75 = ؟'), '3.55*0.75'),
   num('boss', 'hard', ('70.9 × 4.6 = ?', '70.9 × 4.6 = ؟'), '70.9*4.6'),
  ])

# ---------------- Lesson 5 · Multiplying Decimals through the Hundredths Place (p101-102) ----------------
idea('Z51', 5, ('Place the decimal point', 'ضع العلامة العشرية'),
  ('Without multiplying, estimate: 5.8 × 7.4 ≈ 6 × 7 = 42, so the digits 4,292 make 42.92. 32.4 × 5.3 ≈ 30 × 5 = 150 → 171.72. 11.68 × 2.4 ≈ 12 × 2 = 24 → 28.032. 15.4 × 0.49 ≈ 15 × 0.5 = 7.5 → 7.546.',
   'بدون ضرب نقدّر: 5.8 × 7.4 ≈ 6 × 7 = 42، إذن الأرقام 4292 تصبح 42.92. و32.4 × 5.3 ≈ 30 × 5 = 150 ← 171.72. و11.68 × 2.4 ≈ 12 × 2 = 24 ← 28.032. و15.4 × 0.49 ≈ 15 × 0.5 = 7.5 ← 7.546.'),
  [mc('normal', 'medium', ('5.8 × 7.4: the digits of the product are 4292. Where is the decimal point?', '5.8 × 7.4: أرقام الناتج 4292. أين العلامة العشرية؟'), ['42.92', '4.292', '429.2', '0.4292']),
   mc('normal', 'medium', ('32.4 × 5.3: the digits are 17172. Which product?', '32.4 × 5.3: الأرقام 17172. ما الناتج؟'), ['171.72', '17.172', '1,717.2', '1.7172']),
   mc('normal', 'medium', ('11.68 × 2.4: the digits are 28032. Which product?', '11.68 × 2.4: الأرقام 28032. ما الناتج؟'), ['28.032', '280.32', '2.8032', '2,803.2']),
   mc('normal', 'medium', ('15.4 × 0.49: the digits are 7546. Which product?', '15.4 × 0.49: الأرقام 7546. ما الناتج؟'), ['7.546', '75.46', '0.7546', '754.6']),
   mc('normal', 'medium', ('43 × 18 = 774. So 4.3 × 0.18 = ?', '43 × 18 = 774. إذن 4.3 × 0.18 = ؟'), ['0.774', '7.74', '77.4', '0.0774']),
  ])
idea('Z52', 5, ('The standard algorithm with decimals', 'الخوارزمية المعيارية مع الكسور العشرية'),
  ('Multiply as with whole numbers, then count the decimal places of both factors: 29.35 × 3.4 has 2 + 1 = 3 places: 99.790 = 99.79.',
   'نضرب كما في الأعداد الصحيحة ثم نعد الأماكن العشرية في العاملين: 29.35 × 3.4 فيه 2 + 1 = 3 أماكن: 99.790 = 99.79.'),
  [num('normal', 'hard', ('29.35 × 3.4 = ?', '29.35 × 3.4 = ؟'), '29.35*3.4'),
   num('normal', 'hard', ('43.2 × 0.24 = ?', '43.2 × 0.24 = ؟'), '43.2*0.24'),
   num('normal', 'hard', ('2.43 × 6.9 = ?', '2.43 × 6.9 = ؟'), '2.43*6.9'),
   num('normal', 'hard', ('12.87 × 7.3 = ?', '12.87 × 7.3 = ؟'), '12.87*7.3'),
   num('normal', 'hard', ('8.92 × 0.17 = ?', '8.92 × 0.17 = ؟'), '8.92*0.17'),
   num('normal', 'medium', ('1.74 × 35 = ?', '1.74 × 35 = ؟'), '1.74*35'),
   num('normal', 'hard', ('47.8 × 5.2 = ?', '47.8 × 5.2 = ؟'), '47.8*5.2'),
   num('normal', 'easy', ('How many decimal places will 10.21 × 0.64 have?', 'كم مكانًا عشريًا في ناتج 10.21 × 0.64؟'), '2+2'),
  ])
idea('Z53', 5, ('Challenge: Dalal and Doha', 'تحدٍّ: دلال وضحى'),
  ('42.16 × 3.4 = 143.344. Dalal checks with the estimate 42 × 3 = 126 (close). Doha counts 2 + 1 = 3 decimal places. Both ways are right.',
   '42.16 × 3.4 = 143.344. تتحقق دلال بالتقدير 42 × 3 = 126 (قريب)، وتعد ضحى 2 + 1 = 3 أماكن عشرية. الطريقتان صحيحتان.'),
  [mc('boss', 'hard', ('42.16 × 3.4 = 143.344. Dalal used an estimate; Doha counted decimal places. Who is right?', '42.16 × 3.4 = 143.344. استخدمت دلال التقدير وعدّت ضحى الأماكن العشرية. من على حق؟'), [('Both of them', 'كلتاهما'), ('Dalal only', 'دلال فقط'), ('Doha only', 'ضحى فقط'), ('Neither', 'ولا واحدة')]),
   num('boss', 'hard', ('42.16 × 3.4 = ?', '42.16 × 3.4 = ؟'), '42.16*3.4'),
   num('boss', 'hard', ('10.21 × 0.64 = ?', '10.21 × 0.64 = ؟'), '10.21*0.64'),
  ])

# ---------------- Lesson 6 · Multiplying Decimals through the Thousandths Place (p103-104) ----------------
idea('Z61', 6, ('Place the decimal points in the factors', 'ضع العلامات العشرية في العاملين'),
  ('38 × 64 = 2,432, and 24.32 has 2 decimal places, so the factors share 2 places: 3.8 × 6.4 or 0.38 × 64. 532 × 17 = 9,044 → 9.044 needs 3 places: 5.32 × 1.7. 18 × 145 = 2,610 → 261 needs 1 place: 1.8 × 145. 826 × 43 → 3,551.8 needs 1 place: 82.6 × 43.',
   '38 × 64 = 2,432، و24.32 فيه مكانان عشريان، إذن يتقاسم العاملان مكانين: 3.8 × 6.4 أو 0.38 × 64. و532 × 17 = 9,044 ← 9.044 يحتاج 3 أماكن: 5.32 × 1.7. و18 × 145 = 2,610 ← 261 يحتاج مكانًا واحدًا: 1.8 × 145. و826 × 43 ← 3,551.8 يحتاج مكانًا واحدًا: 82.6 × 43.'),
  [multi('normal', 'hard', ('Which give 38 × 64 = 24.32 after placing decimal points? Choose all the correct answers.', 'أيها يعطي 24.32 بعد وضع العلامات العشرية في 38 × 64؟ اختر كل الإجابات الصحيحة.'), ['3.8 × 6.4', '0.38 × 64', '3.8 × 64', '38 × 0.064'], [0, 1]),
   mc('normal', 'medium', ('532 × 17 = 9.044. Which factors?', '532 × 17 = 9.044. ما العاملان؟'), ['5.32 × 1.7', '53.2 × 1.7', '5.32 × 17', '0.532 × 1.7']),
   mc('normal', 'medium', ('18 × 145 = 261. Which factors?', '18 × 145 = 261. ما العاملان؟'), ['1.8 × 145', '18 × 1.45', '1.8 × 14.5', '0.18 × 145']),
   mc('normal', 'medium', ('826 × 43 = 3,551.8. Which factors?', '826 × 43 = 3,551.8. ما العاملان؟'), ['82.6 × 43', '8.26 × 43', '82.6 × 4.3', '826 × 0.43']),
  ])
idea('Z62', 6, ('The algorithm through the thousandths', 'الخوارزمية حتى جزء من الألف'),
  ('7.184 × 6.3 = 45.2592 (3 + 1 = 4 decimal places) · 2.607 × 41 = 106.887 · 5.328 × 7.9 = 42.0912 · 8.108 × 0.45 = 3.6486 · 6.429 × 1.9 = 12.2151 · 8.375 × 20 = 167.5.',
   '7.184 × 6.3 = 45.2592 (3 + 1 = 4 أماكن عشرية) و2.607 × 41 = 106.887 و5.328 × 7.9 = 42.0912 و8.108 × 0.45 = 3.6486 و6.429 × 1.9 = 12.2151 و8.375 × 20 = 167.5.'),
  [num('normal', 'hard', ('7.184 × 6.3 = ?', '7.184 × 6.3 = ؟'), '7.184*6.3'),
   num('normal', 'hard', ('2.607 × 41 = ?', '2.607 × 41 = ؟'), '2.607*41'),
   num('normal', 'hard', ('5.328 × 7.9 = ?', '5.328 × 7.9 = ؟'), '5.328*7.9'),
   num('normal', 'hard', ('6.429 × 1.9 = ?', '6.429 × 1.9 = ؟'), '6.429*1.9'),
   num('normal', 'medium', ('8.375 × 20 = ?', '8.375 × 20 = ؟'), '8.375*20'),
   num('timed', 'easy', ('How many decimal places in 7.184 × 6.3?', 'كم مكانًا عشريًا في ناتج 7.184 × 6.3؟'), '3+1', seconds=12),
  ])
idea('Z63', 6, ('Challenge: 8.108 × 0.45', 'تحدٍّ: 8.108 × 0.45'),
  ('8,108 × 45 = 364,860, and 3 + 2 = 5 decimal places: 3.64860 = 3.6486. The estimate 8 × 0.5 = 4 agrees.',
   '8,108 × 45 = 364,860، و3 + 2 = 5 أماكن عشرية: 3.64860 = 3.6486. والتقدير 8 × 0.5 = 4 يؤكد ذلك.'),
  [num('boss', 'hard', ('8.108 × 0.45 = ?', '8.108 × 0.45 = ؟'), '8.108*0.45'),
   mc('boss', 'hard', ('Which estimate checks 8.108 × 0.45?', 'أي تقدير يتحقق من 8.108 × 0.45؟'), ['8 × 0.5 = 4', '8 × 5 = 40', '80 × 0.5 = 40', '8 × 0.05 = 0.4']),
   num('boss', 'hard', ('How many decimal places in 8.108 × 0.45 before dropping the final zero?', 'كم مكانًا عشريًا في ناتج 8.108 × 0.45 قبل حذف الصفر الأخير؟'), '3+2'),
  ])

# ---------------- Lesson 7 · Decimals and the Metric System (p105-107) ----------------
idea('Z71', 7, ('Choosing a metric unit', 'اختيار وحدة القياس المناسبة'),
  ('A pencil is measured in centimeters, a building and a dinner table in meters, the Nile River in kilometers, an insect in millimeters. 1 cm = 10 mm, 1 m = 100 cm, 1 km = 1,000 m.',
   'نقيس القلم الرصاص بالسنتيمتر، وارتفاع المبنى وطول مائدة الطعام بالمتر، وطول نهر النيل بالكيلومتر، وطول الحشرة بالمليمتر. 1 سم = 10 مم و1 م = 100 سم و1 كم = 1,000 م.'),
  [match('normal', 'easy', ('Match each length with the best unit.', 'وصّل كل طول بوحدة القياس المناسبة.'), [('The Nile River', 'طول نهر النيل'), ('An insect', 'طول الحشرة'), ('A pencil', 'القلم الرصاص'), ('A building', 'ارتفاع المبنى')],
         [('meters', 'متر'), ('kilometers', 'كيلومتر'), ('millimeters', 'مليمتر'), ('centimeters', 'سنتيمتر')], [1, 2, 3, 0]),
   num('timed', 'easy', ('1 m = ? cm', '1 م = ؟ سم'), '100', seconds=10),
   num('timed', 'easy', ('1 km = ? m', '1 كم = ؟ م'), '1000', seconds=10),
   num('timed', 'easy', ('1 cm = ? mm', '1 سم = ؟ مم'), '10', seconds=10),
  ])
idea('Z72', 7, ('Metric measurements as decimals', 'القياسات المترية في صورة كسور عشرية'),
  ('1 mm = 0.1 cm = 0.001 m; 1 cm = 0.01 m; 1 g = 0.001 kg; 1 kg = 1,000 g; 1 mL = 0.001 L; 1 L = 1,000 mL.',
   '1 مم = 0.1 سم = 0.001 م، و1 سم = 0.01 م، و1 جم = 0.001 كجم، و1 كجم = 1,000 جم، و1 مل = 0.001 لتر، و1 لتر = 1,000 مل.'),
  [num('normal', 'easy', ('1 mm = ? cm', '1 مم = ؟ سم'), '0.1'),
   num('normal', 'easy', ('1 mm = ? m', '1 مم = ؟ م'), '0.001'),
   num('normal', 'easy', ('1 cm = ? m', '1 سم = ؟ م'), '0.01'),
   num('normal', 'easy', ('1 g = ? kg', '1 جم = ؟ كجم'), '0.001'),
   num('normal', 'easy', ('1 L = ? mL', '1 لتر = ؟ مل'), '1000'),
  ])
idea('Z73', 7, ('Metric match', 'وحدة القياس المكافئة'),
  ('10,870 g = 10.87 kg · 3,465 mL = 3.465 L · 22 cm = 0.22 m · 0.7 m = 70 cm · 17.6 kg = 17,600 g · 95 mm = 9.5 cm · 19,629 mL = 19.629 L · 3.3 m = 330 cm · 700 g = 0.7 kg · 694 mm = 69.4 cm · 2.5 L = 2,500 mL · 7.8 cm = 78 mm.',
   '10,870 جم = 10.87 كجم و3,465 مل = 3.465 لتر و22 سم = 0.22 م و0.7 م = 70 سم و17.6 كجم = 17,600 جم و95 مم = 9.5 سم و19,629 مل = 19.629 لتر و3.3 م = 330 سم و700 جم = 0.7 كجم و694 مم = 69.4 سم و2.5 لتر = 2,500 مل و7.8 سم = 78 مم.'),
  [mc('normal', 'medium', ('10,870 g = ? kg', '10,870 جم = ؟ كجم'), ['10.87', '1.087', '108.7', '1,087']),
   mc('normal', 'medium', ('3,465 mL = ? L', '3,465 مل = ؟ لتر'), ['3.465', '0.3465', '34.65', '346.5']),
   mc('normal', 'medium', ('22 cm = ? m', '22 سم = ؟ م'), ['0.22', '2.2', '220', '2,200']),
   mc('normal', 'medium', ('0.7 m = ? cm', '0.7 م = ؟ سم'), ['70', '7', '700', '7,000']),
   mc('normal', 'medium', ('17.6 kg = ? g', '17.6 كجم = ؟ جم'), ['17,600', '1,760', '1.76', '0.176']),
   mc('normal', 'medium', ('95 mm = ? cm', '95 مم = ؟ سم'), ['9.5', '950', '9,500', '95,000']),
   mc('normal', 'medium', ('694 mm = ? cm', '694 مم = ؟ سم'), ['69.4', '6.94', '6,940', '0.694']),
   mc('normal', 'medium', ('2.5 L = ? mL', '2.5 لتر = ؟ مل'), ['2,500', '250', '25', '0.25']),
  ])
idea('Z74', 7, ('Challenge: Yousra weighs a cat', 'تحدٍّ: يسرا تزن قطة'),
  ('Yousra wrote 3.648 kg and her assistant wrote 3,648.0 g. Both are right: 3.648 × 1,000 = 3,648 g.',
   'سجلت يسرا 3.648 كيلوجرام وسجل مساعدها 3,648.0 جرامًا. كلاهما على حق: 3.648 × 1,000 = 3,648 جرامًا.'),
  [mc('boss', 'hard', ('A cat weighs 3.648 kg (Yousra) or 3,648.0 g (her assistant). Who is right?', 'كتلة القطة 3.648 كجم (يسرا) أو 3,648.0 جم (مساعدها). من على حق؟'), [('Both: 3.648 kg = 3,648 g', 'كلاهما: 3.648 كجم = 3,648 جم'), ('Only Yousra', 'يسرا فقط'), ('Only the assistant', 'المساعد فقط'), ('Neither', 'لا أحد منهما')]),
   num('boss', 'hard', ('19,629 mL = ? L', '19,629 مل = ؟ لتر'), '19629*0.001'),
   num('boss', 'hard', ('7.8 cm = ? mm', '7.8 سم = ؟ مم'), '7.8*10'),
   num('boss', 'hard', ('700 g = ? kg', '700 جم = ؟ كجم'), '700*0.001'),
  ])

# ---------------- Lesson 8 · Measurement, Decimals, and Powers of Ten (p108-109) ----------------
idea('Z81', 8, ('Powers of ten: missing numbers', 'قوى العدد 10: الأعداد المجهولة'),
  ('425 × 10 = 4,250 · 3.7 × 100 = 370 · 0.94 × 0.1 = 0.094 · 425 × 0.001 = 0.425 · 3.7 × 0.1 = 0.37 · 0.94 × 1,000 = 940 · 1.8 × 1,000 = 1,800 · 6.512 × 0.1 = 0.6512 · 0.893 × 100 = 89.3.',
   '425 × 10 = 4,250 و3.7 × 100 = 370 و0.94 × 0.1 = 0.094 و425 × 0.001 = 0.425 و3.7 × 0.1 = 0.37 و0.94 × 1,000 = 940 و1.8 × 1,000 = 1,800 و6.512 × 0.1 = 0.6512 و0.893 × 100 = 89.3.'),
  [num('timed', 'easy', ('425 × 10 = ?', '425 × 10 = ؟'), '425*10', seconds=10),
   num('timed', 'easy', ('0.94 × 0.1 = ?', '0.94 × 0.1 = ؟'), '0.94*0.1', seconds=12),
   mc('normal', 'medium', ('425 × ? = 0.425', '425 × ؟ = 0.425'), ['0.001', '0.01', '0.1', '1,000']),
   mc('normal', 'medium', ('0.94 × ? = 940', '0.94 × ؟ = 940'), ['1,000', '100', '10', '0.001']),
   num('normal', 'medium', ('? × 1,000 = 1,800', '؟ × 1,000 = 1,800'), '1800/1000'),
   num('normal', 'medium', ('? × 100 = 89.3', '؟ × 100 = 89.3'), '89.3/100'),
  ])
idea('Z82', 8, ('Converting with powers of ten', 'التحويل باستخدام قوى العدد 10'),
  ('Amgad drinks 4,230 mL: 4,230 × 0.001 = 4.23 L. 142 cm × 0.01 = 1.42 m. 317 kg × 1,000 = 317,000 g. From a smaller unit to a bigger one multiply by 0.1, 0.01 or 0.001; from a bigger unit to a smaller one multiply by 10, 100 or 1,000.',
   'يشرب أمجد 4,230 مل: 4,230 × 0.001 = 4.23 لتر. و142 سم × 0.01 = 1.42 م. و317 كجم × 1,000 = 317,000 جم. من وحدة أصغر إلى وحدة أكبر نضرب في 0.1 أو 0.01 أو 0.001، ومن وحدة أكبر إلى وحدة أصغر نضرب في 10 أو 100 أو 1,000.'),
  [mc('normal', 'medium', ('Amgad needs 4,230 mL of water. Which multiplication gives the liters?', 'يحتاج أمجد 4,230 مل من الماء. أي مسألة ضرب تعطي اللترات؟'), ['4,230 × 0.001', '4,230 × 1,000', '4,230 × 100', '4,230 × 0.01']),
   num('normal', 'easy', ('4,230 mL = ? L', '4,230 مل = ؟ لتر'), '4230*0.001', unit=L_),
   num('normal', 'medium', ('142 cm = ? m', '142 سم = ؟ م'), '142*0.01', unit=M_),
   num('normal', 'medium', ('317 kg = ? g', '317 كجم = ؟ جم'), '317*1000', unit=G_),
   tf('normal', 'medium', ('To change kilograms to grams we multiply by 1,000.', 'لتحويل الكيلوجرامات إلى جرامات نضرب في 1,000.'), True),
  ])
idea('Z83', 8, ('Identify the correct conversion', 'تحديد التحويل الصحيح'),
  ('Right: 0.007 kg × 1,000 = 7 g; 230 cm × 0.01 = 2.3 m; 4 cm × 0.01 = 0.04 m; 6,410 cm × 0.01 = 64.1 m; 6,410 m × 0.001 = 6.41 km; 350 cm × 0.01 = 3.5 m; 9,320 cm × 0.01 = 93.2 m. Wrong: 51 mm × 10 (51 × 0.1 = 5.1 cm); 4,800 mL × 0.1 (4.8 L); 500 mL × 1,000 (0.5 L); 5.67 m × 10 (567 cm); 782 mm × 10 (78.2 cm); 1.5 m × 0.01 (150 cm); 0.8 cm × 0.1 (8 mm); 10.3 m × 0.01 (1,030 cm); 9,320 mm × 10 (932 cm).',
   'صحيح: 0.007 كجم × 1,000 = 7 جم، و230 سم × 0.01 = 2.3 م، و4 سم × 0.01 = 0.04 م، و6,410 سم × 0.01 = 64.1 م، و6,410 م × 0.001 = 6.41 كم، و350 سم × 0.01 = 3.5 م، و9,320 سم × 0.01 = 93.2 م. خطأ: 51 مم × 10 (51 × 0.1 = 5.1 سم)، و4,800 مل × 0.1 (4.8 لتر)، و500 مل × 1,000 (0.5 لتر)، و5.67 م × 10 (567 سم)، و782 مم × 10 (78.2 سم)، و1.5 م × 0.01 (150 سم)، و0.8 سم × 0.1 (8 مم)، و10.3 م × 0.01 (1,030 سم)، و9,320 مم × 10 (932 سم).'),
  [table('normal', 'medium', ('Is the multiplication right for the conversion?', 'هل عملية الضرب صحيحة للتحويل؟'), [('Right', 'نعم'), ('Wrong', 'لا')],
         [('0.007 kg → g: × 1,000', '0.007 كجم ← جم: × 1,000'), ('51 mm → cm: × 10', '51 مم ← سم: × 10'), ('230 cm → m: × 0.01', '230 سم ← م: × 0.01'), ('500 mL → L: × 1,000', '500 مل ← لتر: × 1,000'), ('6,410 m → km: × 0.001', '6,410 م ← كم: × 0.001'), ('1.5 m → cm: × 0.01', '1.5 م ← سم: × 0.01')], [0, 1, 0, 1, 0, 1]),
   num('normal', 'medium', ('51 mm = ? cm', '51 مم = ؟ سم'), '51*0.1'),
   num('normal', 'medium', ('5.67 m = ? cm', '5.67 م = ؟ سم'), '5.67*100'),
   num('normal', 'medium', ('6,410 m = ? km', '6,410 م = ؟ كم'), '6410*0.001'),
   num('normal', 'medium', ('0.8 cm = ? mm', '0.8 سم = ؟ مم'), '0.8*10'),
   num('normal', 'medium', ('10.3 m = ? cm', '10.3 م = ؟ سم'), '10.3*100'),
  ])
idea('Z84', 8, ('Challenge: Mohamed Ehab’s lifts', 'تحدٍّ: أوزان محمد إيهاب'),
  ('Snatch 173 kg; clean and jerk 201,000 g = 201,000 × 0.001 = 201 kg. The clean and jerk is greater by 28 kg.',
   'رفعة الخطف 173 كيلوجرامًا، ورفعة النتر 201,000 جرام = 201,000 × 0.001 = 201 كيلوجرام. رفعة النتر أكبر بـ 28 كيلوجرامًا.'),
  [num('boss', 'hard', ('Mohamed Ehab lifted 201,000 g in the clean and jerk. How many kg is that?', 'رفع محمد إيهاب 201,000 جرام في رفعة النتر. كم كيلوجرامًا؟'), '201000*0.001', unit=KG),
   mc('boss', 'hard', ('Snatch 173 kg or clean and jerk 201,000 g: which is greater?', 'الخطف 173 كجم أم النتر 201,000 جم: أيهما أكبر؟'), [('Clean and jerk (201 kg)', 'النتر (201 كجم)'), ('Snatch (173 kg)', 'الخطف (173 كجم)'), ('They are equal', 'متساويان')]),
   num('boss', 'hard', ('By how many kg is it greater?', 'أكبر بكم كيلوجرامًا؟'), '201-173', unit=KG),
  ])

# ---------------- Lesson 9 · Solving Multistep Story Problems (p110-111) ----------------
idea('Z91', 9, ('Marwan’s computer and Dalia’s juice', 'كمبيوتر مروان وعصير داليا'),
  ('Change everything to one unit first. Marwan: 2 kg + 600 g + 0.03 kg + 1,750 g = 2 + 0.6 + 0.03 + 1.75 = 4.38 kg. Dalia: 1 L − 320 mL − 0.25 L = 1 − 0.32 − 0.25 = 0.43 L (430 mL).',
   'نحوّل كل القياسات إلى وحدة واحدة أولًا. مروان: 2 كجم + 600 جم + 0.03 كجم + 1,750 جم = 2 + 0.6 + 0.03 + 1.75 = 4.38 كجم. داليا: 1 لتر − 320 مل − 0.25 لتر = 1 − 0.32 − 0.25 = 0.43 لتر (430 مل).'),
  [num('normal', 'hard', ('A computer has parts of 2 kg, 600 g and 0.03 kg, and a last part of 1,750 g. What is its mass in kg?', 'كمبيوتر من قطع كتلتها 2 كجم و600 جم و0.03 كجم، والقطعة الأخيرة 1,750 جم. ما كتلته بالكيلوجرام؟'), '2+0.6+0.03+1.75', unit=KG),
   num('normal', 'medium', ('Dalia made 1 L of sugar cane juice. She drank 320 mL and her father 0.25 L. How many liters are left?', 'صنعت داليا لترًا من عصير القصب. شربت 320 مل، وشرب والدها 0.25 لتر. كم لترًا تبقى؟'), '1-0.32-0.25', unit=L_),
   mc('normal', 'medium', ('What is the first step in Dalia’s problem?', 'ما الخطوة الأولى في مسألة داليا؟'), [('Change 320 mL to 0.32 L', 'تحويل 320 مل إلى 0.32 لتر'), ('Add 320 + 0.25', 'جمع 320 + 0.25'), ('Multiply 320 × 0.25', 'ضرب 320 × 0.25'), ('Subtract 1 − 320', 'طرح 1 − 320')]),
   num('normal', 'easy', ('600 g = ? kg', '600 جم = ؟ كجم'), '600*0.001'),
  ])
idea('Z92', 9, ('Ehab and Eman grow', 'إيهاب وإيمان يكبران'),
  ('Ehab: 1.5 m = 150 cm; 150 − 138.2 = 11.8 cm. Eman: 1.34 m = 134 cm; 145 − 134 = 11 cm. Ehab grew more, by 0.8 cm.',
   'إيهاب: 1.5 م = 150 سم، و150 − 138.2 = 11.8 سم. إيمان: 1.34 م = 134 سم، و145 − 134 = 11 سم. إيهاب زاد طوله أكثر بـ 0.8 سم.'),
  [num('normal', 'medium', ('Ehab was 138.2 cm in January and 1.5 m at the end of the year. How many cm did he grow?', 'كان طول إيهاب 138.2 سم في يناير و1.5 م في نهاية السنة. كم سنتيمترًا زاد؟'), '150-138.2', unit=CM),
   num('normal', 'medium', ('Eman was 1.34 m in January and 145 cm at the end of the year. How many cm did she grow?', 'كان طول إيمان 1.34 م في يناير و145 سم في نهاية السنة. كم سنتيمترًا زادت؟'), '145-134', unit=CM),
   mc('normal', 'medium', ('Who grew more, and by how much?', 'من زاد طوله أكثر، وبكم؟'), [('Ehab, by 0.8 cm', 'إيهاب بـ 0.8 سم'), ('Eman, by 0.8 cm', 'إيمان بـ 0.8 سم'), ('Ehab, by 8 cm', 'إيهاب بـ 8 سم'), ('They grew the same', 'زادا بالمقدار نفسه')]),
  ])
idea('Z93', 9, ('Challenge: Rania’s bandages and Marwan’s circuit board', 'تحدٍّ: ضمادات رانيا ولوحة مروان'),
  ('Rania needs 1.35 m × 4 = 5.4 m = 540 cm. Each package has 250 cm: 2 packages give 500 cm (not enough), so 3 packages (750 cm) and 750 − 540 = 210 cm are left. Old board 7.25 cm × 3.6 cm = 26.1 cm², new board 8 cm × 5.5 cm = 44 cm²: the difference is 17.9 cm².',
   'تحتاج رانيا 1.35 م × 4 = 5.4 م = 540 سم. كل علبة فيها 250 سم: علبتان تعطيان 500 سم (لا تكفي)، إذن 3 علب (750 سم) ويتبقى 750 − 540 = 210 سم. اللوحة القديمة 7.25 سم × 3.6 سم = 26.1 سم²، والجديدة 8 سم × 5.5 سم = 44 سم²: الفرق 17.9 سم².'),
  [num('boss', 'hard', ('Rania needs 1.35 m of bandage for each of 4 patients. How many cm in all?', 'تحتاج رانيا 1.35 م من الضمادات لكل مريض من 4 مرضى. كم سنتيمترًا في المجموع؟'), '1.35*4*100', unit=CM),
   num('boss', 'hard', ('Each package has 250 cm. How many packages does she need?', 'كل علبة فيها 250 سم. كم علبة تحتاج؟'), '3'),
   num('boss', 'hard', ('How many cm will be left over?', 'كم سنتيمترًا سيتبقى؟'), '3*250-540', unit=CM),
   num('boss', 'hard', ('Old board 7.25 cm by 36 mm, new board 80 mm by 5.5 cm. What is the difference in area (cm²)?', 'اللوحة القديمة 7.25 سم في 36 مم، والجديدة 80 مم في 5.5 سم. ما الفرق في المساحة (سم²)؟'), '8*5.5-7.25*3.6', unit=('cm²', 'سم²')),
  ])

# ---------------- Lesson 10 · Dividing by Powers of Ten (p112-113) ----------------
idea('Z101', 10, ('Division practice', 'تدريب على القسمة'),
  ('515 ÷ 5 = 103 · 812 ÷ 13 = 62 R 6 · 2,402 ÷ 21 = 114 R 8 · 7,633 ÷ 32 = 238 R 17 · 690 ÷ 7 = 98 R 4.',
   '515 ÷ 5 = 103 و812 ÷ 13 = 62 والباقي 6 و2,402 ÷ 21 = 114 والباقي 8 و7,633 ÷ 32 = 238 والباقي 17 و690 ÷ 7 = 98 والباقي 4.'),
  [num('timed', 'easy', ('515 ÷ 5 = ?', '515 ÷ 5 = ؟'), '515/5', seconds=15),
   num('normal', 'medium', ('812 ÷ 13 = ? (quotient without the remainder)', '812 ÷ 13 = ؟ (خارج القسمة بدون الباقي)'), '(812-6)/13'),
   num('normal', 'medium', ('2,402 ÷ 21 = ? (quotient without the remainder)', '2,402 ÷ 21 = ؟ (خارج القسمة بدون الباقي)'), '(2402-8)/21'),
   num('normal', 'hard', ('What is the remainder of 7,633 ÷ 32?', 'ما باقي قسمة 7,633 ÷ 32؟'), '7633-32*238'),
  ])
idea('Z102', 10, ('Dividing by 10, 100, 1,000 and by 0.1, 0.01, 0.001', 'القسمة على 10 و100 و1,000 وعلى 0.1 و0.01 و0.001'),
  ('Dividing by 10, 100 or 1,000 makes the number smaller (digits move right): 2,500 ÷ 100 = 25, 2,500 ÷ 1,000 = 2.5. Dividing by 0.1, 0.01 or 0.001 makes it bigger (digits move left): 2,500 ÷ 0.1 = 25,000, 2,500 ÷ 0.01 = 250,000, 2,500 ÷ 0.001 = 2,500,000.',
   'القسمة على 10 أو 100 أو 1,000 تجعل العدد أصغر (الأرقام تتحرك إلى اليمين): 2,500 ÷ 100 = 25 و2,500 ÷ 1,000 = 2.5. والقسمة على 0.1 أو 0.01 أو 0.001 تجعله أكبر (الأرقام تتحرك إلى اليسار): 2,500 ÷ 0.1 = 25,000 و2,500 ÷ 0.01 = 250,000 و2,500 ÷ 0.001 = 2,500,000.'),
  [num('timed', 'easy', ('2,500 ÷ 100 = ?', '2,500 ÷ 100 = ؟'), '2500/100', seconds=12),
   num('timed', 'easy', ('2,500 ÷ 10 = ?', '2,500 ÷ 10 = ؟'), '2500/10', seconds=12),
   num('normal', 'medium', ('2,500 ÷ 0.1 = ?', '2,500 ÷ 0.1 = ؟'), '2500*10'),
   num('normal', 'medium', ('2,500 ÷ 0.01 = ?', '2,500 ÷ 0.01 = ؟'), '2500*100'),
   num('normal', 'hard', ('2,500 ÷ 0.001 = ?', '2,500 ÷ 0.001 = ؟'), '2500*1000'),
   num('normal', 'medium', ('Challenge: 2,500 ÷ 1,000 = ?', 'سؤال التحدي: 2,500 ÷ 1,000 = ؟'), '2500/1000'),
   tf('normal', 'medium', ('Dividing by 0.1 makes a number bigger.', 'القسمة على 0.1 تجعل العدد أكبر.'), True),
  ])
idea('Z103', 10, ('Fill it in', 'أكمل الفراغات'),
  ('800 ÷ 100 = 8 · 800 ÷ 0.01 = 80,000 · 6,700 ÷ 1,000 = 6.7 · 32 ÷ 10 = 3.2 · 5.7 ÷ 0.1 = 57 · 5.7 ÷ 100 = 0.057 · 2.16 ÷ 0.01 = 216 · 71 ÷ 1,000 = 0.071 · 12.8 ÷ 0.01 = 1,280 · 0.4 ÷ 10 = 0.04 · 0.4 ÷ 0.001 = 400 · 29.08 ÷ 0.1 = 290.8 · 102.3 ÷ 0.01 = 10,230.',
   '800 ÷ 100 = 8 و800 ÷ 0.01 = 80,000 و6,700 ÷ 1,000 = 6.7 و32 ÷ 10 = 3.2 و5.7 ÷ 0.1 = 57 و5.7 ÷ 100 = 0.057 و2.16 ÷ 0.01 = 216 و71 ÷ 1,000 = 0.071 و12.8 ÷ 0.01 = 1,280 و0.4 ÷ 10 = 0.04 و0.4 ÷ 0.001 = 400 و29.08 ÷ 0.1 = 290.8 و102.3 ÷ 0.01 = 10,230.'),
  [num('timed', 'easy', ('800 ÷ 0.1 = ?', '800 ÷ 0.1 = ؟'), '800*10', seconds=12),
   num('normal', 'medium', ('6,700 ÷ 1,000 = ?', '6,700 ÷ 1,000 = ؟'), '6700/1000'),
   num('normal', 'medium', ('5.7 ÷ 100 = ?', '5.7 ÷ 100 = ؟'), '5.7/100'),
   num('normal', 'medium', ('2.16 ÷ 0.01 = ?', '2.16 ÷ 0.01 = ؟'), '2.16*100'),
   num('normal', 'medium', ('71 ÷ 1,000 = ?', '71 ÷ 1,000 = ؟'), '71/1000'),
   num('normal', 'medium', ('0.4 ÷ 0.001 = ?', '0.4 ÷ 0.001 = ؟'), '0.4*1000'),
   num('normal', 'medium', ('29.08 ÷ 0.1 = ?', '29.08 ÷ 0.1 = ؟'), '29.08*10'),
   num('normal', 'hard', ('102.3 ÷ 0.01 = ?', '102.3 ÷ 0.01 = ؟'), '102.3*100'),
  ])
idea('Z104', 10, ('Challenge: how hot?', 'تحدٍّ: ما درجة الحرارة؟'),
  ('Glass is blown at 1,100 °C. Water boils at about one tenth of that: 1,100 ÷ 10 = 1,100 × 0.1 = 110 °C (the closest choice). 1,100 × 10 and 1,100 ÷ 0.1 give 11,000.',
   'يُنفخ الزجاج عند 1,100 درجة مئوية. يغلي الماء عند جزء من عشرة منها تقريبًا: 1,100 ÷ 10 = 1,100 × 0.1 = 110 درجة (الخيار الأقرب). أما 1,100 × 10 و1,100 ÷ 0.1 فيعطيان 11,000.'),
  [multi('boss', 'hard', ('Water boils at about one tenth of 1,100 °C. Which choices give that temperature? Choose all the correct answers.', 'يغلي الماء عند جزء من عشرة من 1,100 درجة مئوية تقريبًا. أي الخيارات تعطي هذه الدرجة؟ اختر كل الإجابات الصحيحة.'),
         ['1,100 ÷ 10', '1,100 × 0.1', '1,100 × 10', '1,100 ÷ 0.1'], [0, 1]),
   num('boss', 'hard', ('1,100 ÷ 10 = ?', '1,100 ÷ 10 = ؟'), '1100/10'),
   num('boss', 'hard', ('12.8 ÷ 0.01 = ?', '12.8 ÷ 0.01 = ؟'), '12.8*100'),
  ])

# ---------------- Lesson 11 · Patterns and Relationships in Powers of Ten (p114-115) ----------------
idea('Z111', 11, ('The answer is…: 510.05', 'حدّد الإجابة الصحيحة: 510.05'),
  ('510.05 × 0.001 = 510.05 ÷ 1,000 = 0.51005 · × 0.01 = ÷ 100 = 5.1005 · × 0.1 = ÷ 10 = 51.005 · × 10 = ÷ 0.1 = 5,100.5 · × 100 = ÷ 0.01 = 51,005 · × 1,000 = ÷ 0.001 = 510,050.',
   '510.05 × 0.001 = 510.05 ÷ 1,000 = 0.51005 و× 0.01 = ÷ 100 = 5.1005 و× 0.1 = ÷ 10 = 51.005 و× 10 = ÷ 0.1 = 5,100.5 و× 100 = ÷ 0.01 = 51,005 و× 1,000 = ÷ 0.001 = 510,050.'),
  [num('normal', 'medium', ('510.05 × 0.01 = ?', '510.05 × 0.01 = ؟'), '510.05*0.01', **PS('510.05')),
   num('normal', 'medium', ('510.05 × 10 = ?', '510.05 × 10 = ؟'), '510.05*10', **PS('510.05')),
   num('normal', 'medium', ('510.05 ÷ 0.001 = ?', '510.05 ÷ 0.001 = ؟'), '510.05*1000', **PS('510.05')),
   num('normal', 'medium', ('510.05 ÷ 100 = ?', '510.05 ÷ 100 = ؟'), '510.05/100', **PS('510.05')),
   tf('normal', 'medium', ('510.05 × 0.1 and 510.05 ÷ 10 give the same answer.', '510.05 × 0.1 و510.05 ÷ 10 يعطيان الناتج نفسه.'), True),
  ])
idea('Z112', 11, ('Same answer, inverse operation', 'عمليات عكسية بنفس النتيجة'),
  ('14.6 × 10 = 146 and 14.6 ÷ 0.1 = 146. 387.23 × 0.01 = 387.23 ÷ 100 = 3.8723. 9.102 × 100 = 9.102 ÷ 0.01 = 910.2. 65 × 100 = 65 ÷ 0.01 = 6,500. 0.39 × 0.1 = 0.39 ÷ 10 = 0.039. 0.75 × 1,000 = 0.75 ÷ 0.001 = 750. 28.4 × 0.01 = 28.4 ÷ 100 = 0.284. 150.8 × 1,000 = 150.8 ÷ 0.001 = 150,800.',
   '14.6 × 10 = 146 و14.6 ÷ 0.1 = 146. و387.23 × 0.01 = 387.23 ÷ 100 = 3.8723. و9.102 × 100 = 9.102 ÷ 0.01 = 910.2. و65 × 100 = 65 ÷ 0.01 = 6,500. و0.39 × 0.1 = 0.39 ÷ 10 = 0.039. و0.75 × 1,000 = 0.75 ÷ 0.001 = 750. و28.4 × 0.01 = 28.4 ÷ 100 = 0.284. و150.8 × 1,000 = 150.8 ÷ 0.001 = 150,800.'),
  [mc('normal', 'medium', ('14.6 ÷ ? = 146', '14.6 ÷ ؟ = 146'), ['0.1', '10', '0.01', '100']),
   mc('normal', 'medium', ('387.23 × ? = 3.8723', '387.23 × ؟ = 3.8723'), ['0.01', '100', '0.1', '0.001']),
   mc('normal', 'medium', ('9.102 ÷ ? = 910.2', '9.102 ÷ ؟ = 910.2'), ['0.01', '100', '0.1', '10']),
   mc('normal', 'medium', ('0.39 ÷ ? = 0.039', '0.39 ÷ ؟ = 0.039'), ['10', '0.1', '100', '0.01']),
   mc('normal', 'medium', ('0.75 × ? = 750', '0.75 × ؟ = 750'), ['1,000', '0.001', '100', '10']),
   mc('normal', 'medium', ('150.8 ÷ ? = 150,800', '150.8 ÷ ؟ = 150,800'), ['0.001', '1,000', '0.01', '100']),
   match('normal', 'medium', ('Match each multiplication with the division that has the same answer.', 'وصّل كل عملية ضرب بعملية القسمة التي لها نفس الناتج.'), ['× 10', '× 0.01', '× 1,000'], ['÷ 0.001', '÷ 0.1', '÷ 100'], [1, 2, 0]),
  ])
idea('Z113', 11, ('Metric conversions with × and ÷', 'التحويل المتري بالضرب والقسمة'),
  ('357 cm = 3.57 m: 357 × 0.01 = 357 ÷ 100 = 3.57. 712 mL = 0.712 L (× 0.001 or ÷ 1,000). 23 m = 2,300 cm (× 100 or ÷ 0.01). 300 g = 0.3 kg. 5,200 mm = 5.2 m = 520 cm.',
   '357 سم = 3.57 م: 357 × 0.01 = 357 ÷ 100 = 3.57. و712 مل = 0.712 لتر (× 0.001 أو ÷ 1,000). و23 م = 2,300 سم (× 100 أو ÷ 0.01). و300 جم = 0.3 كجم. و5,200 مم = 5.2 م = 520 سم.'),
  [num('normal', 'medium', ('712 mL = ? L', '712 مل = ؟ لتر'), '712/1000'),
   num('normal', 'medium', ('23 m = ? cm', '23 م = ؟ سم'), '23*100'),
   num('normal', 'medium', ('300 g = ? kg', '300 جم = ؟ كجم'), '300/1000'),
   num('normal', 'medium', ('5,200 mm = ? m', '5,200 مم = ؟ م'), '5200/1000'),
   num('normal', 'medium', ('5,200 mm = ? cm', '5,200 مم = ؟ سم'), '5200/10'),
   mc('normal', 'medium', ('Which pair changes 712 mL to liters?', 'أي زوج يحوّل 712 مل إلى لترات؟'), ['712 × 0.001 and 712 ÷ 1,000', '712 × 1,000 and 712 ÷ 0.001', '712 × 0.01 and 712 ÷ 100', '712 × 0.1 and 712 ÷ 10']),
  ])
idea('Z114', 11, ('Challenge: Nour’s juice container', 'تحدٍّ: إناء عصير نور'),
  ('2,250 mL = 2.25 L, 650 mL = 0.65 L, plus 0.95 L: 2.25 + 0.95 + 0.65 = 3.85 L. The 3 L container is too small; the 4 L container is the best fit.',
   '2,250 مل = 2.25 لتر، و650 مل = 0.65 لتر، مع 0.95 لتر: 2.25 + 0.95 + 0.65 = 3.85 لتر. إناء 3 لترات صغير جدًا، وإناء 4 لترات هو الأنسب.'),
  [num('boss', 'hard', ('Nour mixes 2,250 mL of mango juice, 0.95 L of orange juice and 650 mL of guava juice. How many liters in all?', 'يخلط نور 2,250 مل من عصير المانجو و0.95 لتر من عصير البرتقال و650 مل من عصير الجوافة. كم لترًا في المجموع؟'), '2.25+0.95+0.65', unit=L_),
   mc('boss', 'hard', ('Which container should Nour use: 3 L, 4 L or 5 L?', 'أي إناء يستخدم نور: 3 لترات أم 4 أم 5؟'), [('4 L', '4 لترات'), ('3 L', '3 لترات'), ('5 L', '5 لترات')]),
   num('boss', 'hard', ('2,250 mL ÷ 1,000 = ? L', '2,250 مل ÷ 1,000 = ؟ لتر'), '2250/1000'),
  ])

# ---------------- Lesson 12 · Dividing Decimals by Whole Numbers (p116-117) ----------------
idea('Z121', 12, ('What does the remainder mean?', 'ما المقصود بباقي القسمة؟'),
  ('150 m of wire cut into 40 equal whole-meter parts: 150 ÷ 40 = 3 m each, with 30 m left. 2,050 m of road with 75 trees at whole-meter distances: 2,050 ÷ 75 = 27 m, with 25 m left.',
   'سلك طوله 150 مترًا يُقطع إلى 40 قطعة متساوية طول كل منها عدد صحيح: 150 ÷ 40 = 3 أمتار لكل قطعة ويتبقى 30 مترًا. وطريق طوله 2,050 مترًا يُزرع عليه 75 شجرة على مسافات أعداد صحيحة: 2,050 ÷ 75 = 27 مترًا ويتبقى 25 مترًا.'),
  [num('normal', 'medium', ('150 m of wire into 40 equal parts, each a whole number of meters. How long is each part?', 'سلك طوله 150 مترًا يُقطع إلى 40 قطعة متساوية طول كل منها عدد صحيح. كم طول القطعة؟'), '(150-30)/40', unit=M_),
   num('normal', 'medium', ('How many meters are left?', 'كم مترًا يتبقى؟'), '150-40*3', unit=M_),
   num('normal', 'medium', ('2,050 m of road, 75 trees at equal whole-meter distances. What is the distance?', 'طريق طوله 2,050 مترًا يُزرع عليه 75 شجرة على مسافات متساوية بأعداد صحيحة. ما المسافة؟'), '(2050-25)/75', unit=M_),
   num('normal', 'medium', ('What is the remaining distance?', 'ما طول المسافة المتبقية؟'), '2050-75*27', unit=M_),
  ])
idea('Z122', 12, ('No remainder needed: the quotient is a decimal', 'لا نحتاج إلى الباقي: خارج القسمة عدد عشري'),
  ('Keep dividing after the ones by writing zeros after the decimal point: 150 ÷ 40 = 3.75 m. 4.5 ÷ 30 = 0.15 m. 51.65 ÷ 5 = 10.33 · 62.24 ÷ 16 = 3.89 · 73.02 ÷ 6 = 12.17 · 589.5 ÷ 30 = 19.65.',
   'نكمل القسمة بعد الآحاد بكتابة أصفار بعد العلامة العشرية: 150 ÷ 40 = 3.75 م. و4.5 ÷ 30 = 0.15 م. و51.65 ÷ 5 = 10.33 و62.24 ÷ 16 = 3.89 و73.02 ÷ 6 = 12.17 و589.5 ÷ 30 = 19.65.'),
  [num('normal', 'medium', ('150 m of wire into 40 equal parts (the length may be a decimal). How long is each part?', 'سلك طوله 150 مترًا يُقطع إلى 40 قطعة متساوية (الطول قد يكون عددًا عشريًا). كم طول القطعة؟'), '150/40', unit=M_),
   num('normal', 'medium', ('Emad cuts 4.5 m of wire into 30 equal pieces. How long is each piece?', 'يقطع عماد 4.5 م من السلك إلى 30 قطعة متساوية. كم طول كل قطعة؟'), '4.5/30', unit=M_),
   num('normal', 'medium', ('51.65 ÷ 5 = ?', '51.65 ÷ 5 = ؟'), '51.65/5', **LD(div='5', num='51.65')),
   num('normal', 'hard', ('62.24 ÷ 16 = ?', '62.24 ÷ 16 = ؟'), '62.24/16', **LD(div='16', num='62.24')),
   num('normal', 'hard', ('73.02 ÷ 6 = ?', '73.02 ÷ 6 = ؟'), '73.02/6'),
   num('normal', 'hard', ('589.5 ÷ 30 = ?', '589.5 ÷ 30 = ؟'), '589.5/30'),
  ])
idea('Z123', 12, ('Challenge: no hibiscus left over', 'تحدٍّ: توزيع الكركديه بالتساوي'),
  ('Dalia pours 20 L of hibiscus equally into 50 cups: 20 ÷ 50 = 0.4 L in each cup.',
   'تريد داليا أن توزع 20 لترًا من الكركديه بالتساوي في 50 كوبًا: 20 ÷ 50 = 0.4 لتر في كل كوب.'),
  [num('boss', 'hard', ('Dalia pours 20 L of hibiscus equally into 50 cups. How many liters in each cup?', 'توزع داليا 20 لترًا من الكركديه بالتساوي في 50 كوبًا. كم لترًا في كل كوب؟'), '20/50', unit=L_),
   tf('boss', 'hard', ('20 ÷ 50 has no whole-number answer, but its decimal quotient is 0.4.', '20 ÷ 50 ليس له خارج قسمة عدد صحيح، لكن خارج القسمة العشري 0.4.'), True),
   num('boss', 'hard', ('Check with multiplication: 0.4 × 50 = ?', 'تحقق بالضرب: 0.4 × 50 = ؟'), '0.4*50'),
  ])

# ---------------- Lesson 13 · Dividing Decimals by Decimals (p118-119) ----------------
idea('Z131', 13, ('Missing numbers', 'أكمل المسائل'),
  ('15 ÷ 3 = 150 ÷ 30 = 1,500 ÷ 300 = 5 and 144 ÷ 12 = 1,440 ÷ 120 = 14,400 ÷ 1,200 = 12: multiplying both numbers by the same power of ten keeps the quotient. 0.3 × 10 = 3, 0.14 × 100 = 14, 6.09 × 100 = 609, 157.4 × 10 = 1,574, 0.07 × 100 = 7, 4.9 × 10 = 49.',
   '15 ÷ 3 = 150 ÷ 30 = 1,500 ÷ 300 = 5 و144 ÷ 12 = 1,440 ÷ 120 = 14,400 ÷ 1,200 = 12: ضرب العددين في نفس قوة العدد 10 لا يغير خارج القسمة. و0.3 × 10 = 3 و0.14 × 100 = 14 و6.09 × 100 = 609 و157.4 × 10 = 1,574 و0.07 × 100 = 7 و4.9 × 10 = 49.'),
  [num('timed', 'easy', ('150 ÷ ? = 5', '150 ÷ ؟ = 5'), '150/5', seconds=12),
   num('timed', 'easy', ('1,440 ÷ ? = 12', '1,440 ÷ ؟ = 12'), '1440/12', seconds=15),
   num('timed', 'easy', ('0.14 × ? = 14', '0.14 × ؟ = 14'), '100', seconds=12),
   num('normal', 'easy', ('157.4 × ? = 1,574', '157.4 × ؟ = 1,574'), '10'),
   tf('normal', 'medium', ('15 ÷ 3 and 1,500 ÷ 300 have the same quotient.', '15 ÷ 3 و1,500 ÷ 300 لهما نفس خارج القسمة.'), True),
  ])
idea('Z132', 13, ('Make the divisor a whole number', 'حوّل المقسوم عليه لعدد صحيح'),
  ('Multiply the divisor and the dividend by the same power of ten so the divisor is whole: 26.4 ÷ 2.2 = 264 ÷ 22 = 12; 99 ÷ 0.4 = 990 ÷ 4 = 247.5; 1.5 ÷ 0.04 = 150 ÷ 4 = 37.5.',
   'نضرب المقسوم عليه والمقسوم في نفس قوة العدد 10 حتى يصبح المقسوم عليه عددًا صحيحًا: 26.4 ÷ 2.2 = 264 ÷ 22 = 12، و99 ÷ 0.4 = 990 ÷ 4 = 247.5، و1.5 ÷ 0.04 = 150 ÷ 4 = 37.5.'),
  [mc('normal', 'medium', ('26.4 ÷ 2.2 has the same quotient as…', '26.4 ÷ 2.2 له نفس خارج قسمة…'), ['264 ÷ 22', '26.4 ÷ 22', '264 ÷ 2.2', '2.64 ÷ 22']),
   num('normal', 'medium', ('26.4 ÷ 2.2 = ?', '26.4 ÷ 2.2 = ؟'), '264/22'),
   num('normal', 'hard', ('99 ÷ 0.4 = ?', '99 ÷ 0.4 = ؟'), '990/4'),
   num('normal', 'hard', ('1.5 ÷ 0.04 = ?', '1.5 ÷ 0.04 = ؟'), '150/4'),
   mc('normal', 'medium', ('1.5 ÷ 0.04: by what do we multiply both numbers?', '1.5 ÷ 0.04: نضرب العددين في كم؟'), ['100', '10', '1,000', '4']),
  ])
idea('Z133', 13, ('Let’s try it together', 'هيا نحاول معًا'),
  ('9.956 ÷ 1.9 = 5.24 · 3.431 ÷ 7.3 = 0.47 · 0.51 ÷ 0.04 = 12.75 · 1.43 ÷ 0.05 = 28.6 · 44 ÷ 0.5 = 88 · 70 ÷ 0.7 = 100 · 90 ÷ 0.03 = 3,000 · 57.6 ÷ 0.04 = 1,440 · 0.91 ÷ 0.5 = 1.82 · 1.3 ÷ 0.5 = 2.6.',
   '9.956 ÷ 1.9 = 5.24 و3.431 ÷ 7.3 = 0.47 و0.51 ÷ 0.04 = 12.75 و1.43 ÷ 0.05 = 28.6 و44 ÷ 0.5 = 88 و70 ÷ 0.7 = 100 و90 ÷ 0.03 = 3,000 و57.6 ÷ 0.04 = 1,440 و0.91 ÷ 0.5 = 1.82 و1.3 ÷ 0.5 = 2.6.'),
  [num('normal', 'medium', ('44 ÷ 0.5 = ?', '44 ÷ 0.5 = ؟'), '440/5'),
   num('normal', 'medium', ('70 ÷ 0.7 = ?', '70 ÷ 0.7 = ؟'), '700/7'),
   num('normal', 'medium', ('90 ÷ 0.03 = ?', '90 ÷ 0.03 = ؟'), '9000/3'),
   num('normal', 'hard', ('9.956 ÷ 1.9 = ?', '9.956 ÷ 1.9 = ؟'), '99.56/19'),
   num('normal', 'hard', ('0.51 ÷ 0.04 = ?', '0.51 ÷ 0.04 = ؟'), '51/4'),
   num('normal', 'hard', ('1.43 ÷ 0.05 = ?', '1.43 ÷ 0.05 = ؟'), '143/5'),
   num('normal', 'hard', ('57.6 ÷ 0.04 = ?', '57.6 ÷ 0.04 = ؟'), '5760/4'),
   num('normal', 'medium', ('1.3 ÷ 0.5 = ?', '1.3 ÷ 0.5 = ؟'), '13/5'),
  ])
idea('Z134', 13, ('Challenge: the error in 77.43 ÷ 0.3', 'تحدٍّ: الخطأ في 77.43 ÷ 0.3'),
  ('The student wrote 77.43 ÷ 0.3 = 7.743 ÷ 3: he multiplied the divisor by 10 but DIVIDED the dividend by 10. Both must be multiplied by 10: 774.3 ÷ 3 = 258.1.',
   'كتب التلميذ 77.43 ÷ 0.3 = 7.743 ÷ 3: ضرب المقسوم عليه في 10 لكنه قسم المقسوم على 10. يجب ضرب العددين في 10: 774.3 ÷ 3 = 258.1.'),
  [mc('boss', 'hard', ('A student says 77.43 ÷ 0.3 has the same quotient as 7.743 ÷ 3. What is wrong?', 'يقول تلميذ إن 77.43 ÷ 0.3 له نفس خارج قسمة 7.743 ÷ 3. ما الخطأ؟'),
      [('He moved the dividend’s point the wrong way: it is 774.3 ÷ 3', 'حرّك علامة المقسوم في الاتجاه الخطأ: الصحيح 774.3 ÷ 3'), ('He should divide by 0.3 without changing anything', 'كان يجب أن يقسم على 0.3 بدون تغيير'), ('He divided 7.743 ÷ 3 wrongly', 'أخطأ في قسمة 7.743 ÷ 3'), ('It should be 77.43 ÷ 3', 'الصحيح 77.43 ÷ 3')]),
   num('boss', 'hard', ('77.43 ÷ 0.3 = ?', '77.43 ÷ 0.3 = ؟'), '774.3/3'),
   num('boss', 'hard', ('3.431 ÷ 7.3 = ?', '3.431 ÷ 7.3 = ؟'), '34.31/73'),
   num('boss', 'hard', ('0.91 ÷ 0.5 = ?', '0.91 ÷ 0.5 = ؟'), '9.1/5'),
  ])

HEAD_EN = """/* Math · Grade 5 · Unit 5 "Multiplication and Division with Decimals" · Languages track (English), first term 2026/2027
   Source: the English school book (Math Term 1), Unit 5 (pages 91-119): Concept 1 "Multiplying Decimals" (lessons 1-9), Concept 2 "Dividing Decimals" (lessons 10-13).
   Idea ids: every letter A-Y is used by Units 1-4, so Unit 5 uses Z + lesson number + idea digit: Z11-Z14 lesson 1 … Z91-Z93 lesson 9, Z101-Z104 lesson 10 … Z131-Z134 lesson 13.
   Boss ideas (the last of each lesson): Z14, Z24, Z33, Z44, Z53, Z63, Z74, Z84, Z93, Z104, Z114, Z123, Z134.
   The book is an activity book with no printed answers: the numbers and situations are the book's own (Manal's pencil, Hoda's stride, Ameen's bookstore, Kamal and Nadia, Malak's cinder blocks,
   Dalal and Doha, Yousra's cat, Amgad, Mohamed Ehab, Marwan, Dalia, Ehab and Eman, Rania, the glass and boiling water, Nour's juice, the wire and the trees, Emad, the hibiscus, the 77.43 ÷ 0.3 error)
   and EVERY number answer is computed (calc, checked by tools/check_questions.js).
   Pictures (math/m5_art.js): tenthsGrid, jumpLine, placeSlide (new), areaModel and longDiv (Units 3-4).
   Review notes:
   - Lesson 2: «Make the Greatest Product» has no printed digits; the digits 3, 5, 8 and the 4 in □.□□ × 4 (9.75) are examples written here to show the idea of the game.
   - Lesson 3: Nadia is right (tenths × tenths = hundredths), as the book's lesson goal states.
   - Lesson 4: the two Area Model Puzzles are solved from their printed cells (28 × 54 = 1,512 and 425 × 34 = 14,450).
   - Lesson 5: Dalal (estimate) and Doha (counting decimal places) are both counted right; the book asks the student to decide.
   - Lesson 6: «place the decimal points in the factors» has more than one right answer; the questions offer one right pair (or ask «choose all»).
   - Lesson 9: Rania's packages: 540 cm need 3 packages of 250 cm, 210 cm left.
   - Lesson 10: in «How Hot?» both 1,100 ÷ 10 and 1,100 × 0.1 give 110 °C, so it is asked as «choose all».
   - Lesson 12: 2,050 ÷ 75 is asked only with whole meters (27 m, 25 m left): its decimal quotient does not end. 9)121.1 is not asked: its quotient does not end either (13.455…).
   - Not asked: Writing About Math, Check Your Understanding, «write a story problem», «Back-to-Back, Front-to-Front», «Human Equations» and the record sheets.
   Generated together with questions_m5c5_ar.js (same ids, phrasings order and answers). */"""
HEAD_AR = """/* الصف الخامس الابتدائي · الرياضيات (عربي) · الوحدة الخامسة «عمليتا الضرب والقسمة مع الكسور العشرية»، الفصل الدراسي الأول 2026/2027
   المصدر: كتاب الوزارة العربي، الوحدة الخامسة (صفحات 91–119): المفهوم الأول «ضرب الكسور العشرية» (الدروس 1–9)، المفهوم الثاني «قسمة الكسور العشرية» (الدروس 10–13).
   أرقام الأفكار: الحروف A–Y استخدمتها الوحدات 1–4، فالوحدة 5 تستخدم Z ثم رقم الدرس ثم رقم الفكرة: Z11–Z14 الدرس 1 … Z91–Z93 الدرس 9، Z101–Z104 الدرس 10 … Z131–Z134 الدرس 13.
   أفكار التحدي (آخر فكرة في كل درس): Z14, Z24, Z33, Z44, Z53, Z63, Z74, Z84, Z93, Z104, Z114, Z123, Z134.
   الملف مطابق لملف اللغات math/questions_m5c5.js (نفس الأفكار والترتيب والإجابات)، والكتابان متطابقان في الأعداد. الأرقام غربية، وكل عدد أو تعبير وسط الكلام داخل ltr.
   الكتاب كتاب نشاط بلا إجابات مطبوعة، لذلك كل إجابة رقمية محسوبة (calc) ويتحقق منها tools/check_questions.js.
   ملاحظات للمراجعة:
   - الدرس 2: لعبة «كوّن أكبر ناتج ضرب» بلا أرقام مطبوعة؛ الأرقام 3 و5 و8 والعدد 9.75 في □.□□ × 4 أمثلة مكتوبة هنا لشرح فكرة اللعبة.
   - الدرس 3: نادية على صواب (أجزاء من عشرة × أجزاء من عشرة = أجزاء من مائة) كما يقول هدف الدرس.
   - الدرس 4: لغزا نموذج المساحة محلولان من الخانات المطبوعة (28 × 54 = 1,512 و425 × 34 = 14,450).
   - الدرس 5: دلال (التقدير) وضحى (عد الأماكن العشرية) كلتاهما على حق، والكتاب يطلب من التلميذ أن يقرر.
   - الدرس 6: «ضع العلامات العشرية في العاملين» له أكثر من إجابة صحيحة؛ نعرض زوجًا صحيحًا واحدًا أو نطلب «اختر كل الصحيح».
   - الدرس 9: علب رانيا: 540 سم تحتاج 3 علب من 250 سم ويتبقى 210 سم.
   - الدرس 10: في «ما درجة الحرارة؟» الخياران 1,100 ÷ 10 و1,100 × 0.1 يعطيان 110 درجة، فسألناه «اختر كل الصحيح».
   - الدرس 12: 2,050 ÷ 75 نسأله بالأمتار الصحيحة فقط (27 م والباقي 25 م) لأن خارج قسمته العشري لا ينتهي، ولا نسأل عن 121.1 ÷ 9 لنفس السبب (13.455…).
   - لا يُسأل عن: «الكتابة عن الرياضيات» و«تحقق من فهمك» و«اكتب مسألة كلامية» ولعبة «ظهرًا لظهر أو وجهًا لوجه» و«تكوين المعادلات» وأوراق التسجيل. */"""
LES_EN = ['Lesson 1 · Multiplying by Powers of Ten (pages 92-94)', 'Lesson 2 · Multiplying Decimals by Whole Numbers (pages 95-96)', 'Lesson 3 · Multiplying Tenths by Tenths (pages 97-98)', 'Lesson 4 · Multiply decimals using the area model (pages 99-100)', 'Lesson 5 · Multiplying Decimals through the Hundredths Place (pages 101-102)', 'Lesson 6 · Multiplying Decimals through the Thousandths Place (pages 103-104)', 'Lesson 7 · Decimals and the Metric System (pages 105-107)', 'Lesson 8 · Measurement, Decimals, and Powers of Ten (pages 108-109)', 'Lesson 9 · Solving Multistep Story Problems (pages 110-111)', 'Lesson 10 · Dividing by Powers of Ten (pages 112-113)', 'Lesson 11 · Patterns and Relationships in Powers of Ten (pages 114-115)', 'Lesson 12 · Dividing Decimals by Whole Numbers (pages 116-117)', 'Lesson 13 · Dividing Decimals by Decimals (pages 118-119)']
LES_AR = ['الدرس 1 · الضرب في قوى العدد 10 (ص 92–94)', 'الدرس 2 · ضرب الكسور العشرية في أعداد صحيحة (ص 95–96)', 'الدرس 3 · ضرب الأجزاء من عشرة في أجزاء من عشرة (ص 97–98)', 'الدرس 4 · ضرب الكسور العشرية باستخدام نموذج مساحة المستطيل (ص 99–100)', 'الدرس 5 · ضرب الكسور العشرية حتى جزء من مائة (ص 101–102)', 'الدرس 6 · ضرب الكسور العشرية حتى جزء من الألف (ص 103–104)', 'الدرس 7 · الكسور العشرية والنظام المتري (ص 105–107)', 'الدرس 8 · القياس والكسور العشرية وقوى العدد 10 (ص 108–109)', 'الدرس 9 · حل مسائل كلامية متعددة الخطوات (ص 110–111)', 'الدرس 10 · القسمة على قوى العدد 10 (ص 112–113)', 'الدرس 11 · الأنماط والعلاقات في قوى العدد 10 (ص 114–115)', 'الدرس 12 · قسمة كسور عشرية على أعداد صحيحة (ص 116–117)', 'الدرس 13 · قسمة كسور عشرية على كسور عشرية (ص 118–119)']
def write(ar):
    out = [HEAD_AR if ar else HEAD_EN, '(function () {',
           "window.CHAPTER = { id: 'm5c5', title: '%s', grade: '%s', track: '%s' };" % (('عمليتا الضرب والقسمة مع الكسور العشرية', 'الصف الخامس', 'عربي') if ar else ('Multiplication and Division with Decimals', 'Grade 5', 'Languages')),
           '', 'window.IDEAS = [']
    rows, les = [], 0
    for I in IDEAS:
        if I['lesson'] != les:
            les = I['lesson']; rows.append(('  /* ---------- %s ---------- */' % (LES_AR if ar else LES_EN)[les - 1], None))
        vs = ',\n'.join('      ' + json.dumps(tr(v, ar), ensure_ascii=False, separators=(',', ':')) for v in I['variants'])
        head = json.dumps(dict(id=I['id'], lesson=les, **({'boss': True} if I['variants'][0]['mode'] == 'boss' else {}), concept=L(I['concept'], ar), explain=L(I['explain'], ar)), ensure_ascii=False, separators=(',', ':'))[:-1]
        rows.append(('  ' + head + ',\n    "variants": [\n' + vs + '\n    ] }', 1))
    body = ''
    items = [r for r in rows]
    for i, (txt, isI) in enumerate(items):
        later = any(x[1] for x in items[i + 1:])
        body += txt + (',' if isI and later else '') + '\n'
    out.append(body + '];\n})();\n')
    open(OUT + ('/math/questions_m5c5_ar.js' if ar else '/math/questions_m5c5.js'), 'w').write('\n'.join(out))

write(False); write(True)
print(len(IDEAS), 'ideas', sum(len(I['variants']) for I in IDEAS), 'phrasings')
