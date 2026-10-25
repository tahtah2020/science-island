# Generator of math/questions_m5c3.js (English book) and math/questions_m5c3_ar.js (Arabic book): same ids, order and answers.
import json, re, sys
OUT = sys.argv[1]

def fmt(n):
    if isinstance(n, float) and not n.is_integer(): return f"{n:,}"
    return f"{int(n):,}"

def wrap(s):
    """Arabic: keep every run of digits / signs left to right."""
    if not isinstance(s, str) or '⁦' in s: return s
    s = s.replace('= ؟', '= ?').replace('× ؟', '× ?')
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
        elif key in ('options', 'left', 'right', 'choices'): out[key] = [L(o, ar) for o in val]
        elif key == 'unit' or key == 'answer' and v['type'] == 'term': out[key] = L(val, ar) if not (key == 'answer' and v['type'] == 'term' and ar) else val[1] if isinstance(val, tuple) else val
        else: out[key] = val
    if v['type'] == 'term' and isinstance(v['answer'], tuple): out['answer'] = v['answer'][1] if ar else v['answer'][0]
    if 'unit' in v and isinstance(v['unit'], tuple): out['unit'] = v['unit'][1] if ar else v['unit'][0]
    return out

IDEAS = []
def idea(i, lesson, concept, explain, variants): IDEAS.append(dict(id=i, lesson=lesson, concept=concept, explain=explain, variants=variants))
KM = ('km', 'كم'); G = ('g', 'جم'); ML = ('mL', 'مل'); MIN = ('minutes', 'دقيقة')

# ---------------- Lesson 1 · Using the Area Model to Multiply (p65-67) ----------------
idea('T1', 1, ('Multiplying by 10, 100, 1,000 and 10,000', 'الضرب في 10 و100 و1,000 و10,000'),
  ('Multiplying by a power of ten puts zeros after the digit: 5 × 1,000 = 5,000, 4 × 10 = 40, 1,000 × 7 = 7,000. To find a missing factor, ask how many times: 10,000 × 8 = 80,000 and 2 × 1,000 = 2,000.',
   'الضرب في قوى العدد 10 يضع أصفارًا بعد الرقم: 5 × 1,000 = 5,000 و4 × 10 = 40 و1,000 × 7 = 7,000. ولإيجاد العامل الناقص نسأل: كم مرة؟ 10,000 × 8 = 80,000 و2 × 1,000 = 2,000.'),
  [num('timed', 'easy', ('5 × 1,000 = ?', '5 × 1,000 = ؟'), '5*1000', seconds=12),
   num('timed', 'easy', ('4 × 10 = ?', '4 × 10 = ؟'), '4*10', seconds=10),
   num('timed', 'easy', ('1,000 × 7 = ?', '1,000 × 7 = ؟'), '1000*7', seconds=12),
   num('timed', 'easy', ('10,000 × ? = 80,000', '10,000 × ؟ = 80,000'), '80000/10000', seconds=14),
   num('timed', 'easy', ('2 × ? = 2,000', '2 × ؟ = 2,000'), '2000/2', seconds=14),
   mc('normal', 'medium', ('Which product equals 7,000?', 'أي ناتج ضرب يساوي 7,000؟'), ['1,000 × 7', '100 × 7', '10 × 700 × 10', '7 × 10,000']),
  ])
idea('T2', 1, ('Writing numbers with powers of ten', 'كتابة الأعداد باستخدام قوى العدد 10'),
  ('A number like 3,000 can be written as a digit times a power of ten: 3,000 = 3 × 1,000, 800 = 8 × 100, 70,000 = 7 × 10,000, 400,000 = 4 × 100,000, 50 = 5 × 10. 100 = 10 × 10, 1,000 = 10 × 10 × 10: count the zeros to know how many 10s are multiplied.',
   'يمكن كتابة عدد مثل 3,000 في صورة رقم مضروب في قوة من قوى العدد 10: 3,000 = 3 × 1,000 و800 = 8 × 100 و70,000 = 7 × 10,000 و400,000 = 4 × 100,000 و50 = 5 × 10. و100 = 10 × 10 و1,000 = 10 × 10 × 10: عدد الأصفار يقول كم عشرة نضربها.'),
  [mc('timed', 'easy', ('3,000 = ?', '3,000 = ؟'), ['3 × 1,000', '3 × 100', '30 × 1,000', '3 × 10,000'], seconds=12),
   mc('timed', 'easy', ('800 = ?', '800 = ؟'), ['8 × 100', '8 × 10', '80 × 100', '8 × 1,000'], seconds=12),
   mc('normal', 'medium', ('400,000 = ?', '400,000 = ؟'), ['4 × 100,000', '4 × 10,000', '40 × 100,000', '4 × 1,000,000']),
   num('normal', 'easy', ('70,000 = 7 × ?', '70,000 = 7 × ؟'), '70000/7'),
   num('normal', 'easy', ('50 = 5 × ?', '50 = 5 × ؟'), '50/5'),
   num('normal', 'medium', ('How many 10s are multiplied together to make 1,000? (10 × 10 × … = 1,000)', 'كم عشرة نضربها في بعض لنحصل على 1,000؟ (10 × 10 × … = 1,000)'), '3'),
   match('normal', 'medium', ('Match each number with the 10s multiplied to make it.', 'وصّل كل عدد بعدد العشرات التي نضربها لنحصل عليه.'),
         ['100', '10,000', '100,000'], [('5 tens', '5 عشرات'), ('2 tens', '2 عشرة'), ('4 tens', '4 عشرات')], [1, 2, 0]),
  ])
P234 = dict(top=['200', '30', '4'], left=['20', '7'])
idea('T3', 1, ('The area model: 234 × 27', 'نموذج مساحة المستطيل: 234 × 27'),
  ('Split each factor by place value: 234 = 200 + 30 + 4 and 27 = 20 + 7. Each small rectangle holds one partial product: 20 × 200 = 4,000, 20 × 30 = 600, 20 × 4 = 80, 7 × 200 = 1,400, 7 × 30 = 210, 7 × 4 = 28. Add them: 6,318.',
   'نحلل كل عامل حسب القيمة المكانية: 234 = 200 + 30 + 4 و27 = 20 + 7. كل مستطيل صغير فيه ناتج ضرب جزئي: 20 × 200 = 4,000 و20 × 30 = 600 و20 × 4 = 80 و7 × 200 = 1,400 و7 × 30 = 210 و7 × 4 = 28. نجمعها: 6,318.'),
  [mc('normal', 'easy', ('To draw the area model of 234 × 27, how do we split 234?', 'لرسم نموذج مساحة المستطيل لـ 234 × 27، كيف نحلل 234؟'), ['200 + 30 + 4', '2 + 3 + 4', '23 + 4', '200 + 34 + 4']),
   num('normal', 'easy', ('What goes in the shaded cell? (20 × 200)', 'ماذا نكتب في الخانة الملونة؟ (20 × 200)'), '20*200', **AM(**P234, cells=[['?', '600', '80'], ['1,400', '210', '28']], hi=[0, 0])),
   num('normal', 'medium', ('What goes in the shaded cell?', 'ماذا نكتب في الخانة الملونة؟'), '7*30', **AM(**P234, cells=[['4,000', '600', '80'], ['1,400', '?', '28']], hi=[1, 1])),
   num('normal', 'medium', ('Add the partial products: 234 × 27 = ?', 'اجمع نواتج الضرب الجزئية: 234 × 27 = ؟'), '234*27', **AM(**P234, cells=[['4,000', '600', '80'], ['1,400', '210', '28']])),
   tf('timed', 'easy', ('In the area model of 234 × 27, the cell 7 × 4 holds 28.', 'في نموذج مساحة المستطيل لـ 234 × 27، الخانة 7 × 4 فيها 28.'), True, seconds=14),
   tf('normal', 'medium', ('In the area model of 234 × 27, the cell 20 × 30 holds 60.', 'في نموذج مساحة المستطيل لـ 234 × 27، الخانة 20 × 30 فيها 60.'), False),
   term('normal', 'easy', ('A rectangle split by place value; each part holds a partial product.', 'مستطيل مقسم حسب القيمة المكانية، وكل جزء فيه ناتج ضرب جزئي.'), ('Area model', 'نموذج مساحة المستطيل'),
        [('Bar model', 'النموذج الشريطي'), ('Number line', 'خط الأعداد'), ('Factor tree', 'شجرة العوامل')]),
  ])
idea('T4', 1, ('Solving with an area model', 'الحل باستخدام نموذج مساحة المستطيل'),
  ('374 × 62: 300 + 70 + 4 by 60 + 2 → 18,000 + 4,200 + 240 + 600 + 140 + 8 = 23,188. 506 × 42 = 21,252 · 732 × 16 = 11,712 · 572 × 98 = 56,056 · 201 × 32 = 6,432 · 659 × 42 = 27,678 · 3,352 × 17 = 56,984.',
   '374 × 62: 300 + 70 + 4 في 60 + 2 ← 18,000 + 4,200 + 240 + 600 + 140 + 8 = 23,188. و506 × 42 = 21,252 و732 × 16 = 11,712 و572 × 98 = 56,056 و201 × 32 = 6,432 و659 × 42 = 27,678 و3,352 × 17 = 56,984.'),
  [num('normal', 'easy', ('In the area model of 374 × 62, what goes in the cell 70 × 2?', 'في نموذج 374 × 62، ماذا نكتب في الخانة 70 × 2؟'), '70*2', **AM(top=['300', '70', '4'], left=['60', '2'], cells=[['', '', ''], ['', '?', '8']], hi=[1, 1])),
   num('normal', 'medium', ('Complete the cell 60 × 300.', 'أكمل الخانة 60 × 300.'), '60*300', **AM(top=['300', '70', '4'], left=['60', '2'], cells=[['?', '', ''], ['', '140', '8']], hi=[0, 0])),
   num('normal', 'hard', ('374 × 62 = ?', '374 × 62 = ؟'), '374*62', **AM(top=['300', '70', '4'], left=['60', '2'], cells=[['18,000', '4,200', '240'], ['600', '140', '8']])),
   num('normal', 'hard', ('506 × 42 = ?', '506 × 42 = ؟'), '506*42'),
   num('normal', 'hard', ('732 × 16 = ?', '732 × 16 = ؟'), '732*16'),
   num('normal', 'hard', ('201 × 32 = ?', '201 × 32 = ؟'), '201*32'),
   num('normal', 'hard', ('659 × 42 = ?', '659 × 42 = ؟'), '659*42'),
   mc('normal', 'medium', ('Which partial products make 572 × 98?', 'أي نواتج ضرب جزئية تكوّن 572 × 98؟'),
      ['45,000 + 6,300 + 180 + 4,000 + 560 + 16', '4,500 + 630 + 18 + 400 + 56 + 16', '45,000 + 630 + 180 + 4,000 + 56 + 16', '500 + 70 + 2 + 90 + 8']),
  ])
idea('T5', 1, ('Decomposing numbers for an area model', 'تحليل الأعداد لنموذج مساحة المستطيل'),
  ('A number can be split in more than one way, as long as the parts add up to it: Eman’s garden 46 × 24 can use 20 + 20 + 6 by 20 + 4 (or 40 + 6 by 20 + 4). The area is 1,104 m². Ali walks 6 km a day for 187 days: 6 × 187 = 1,122 km; driving 60 km a day: 60 × 187 = 11,220 km (ten times as much).',
   'يمكن تحليل العدد بأكثر من طريقة بشرط أن يكون مجموع الأجزاء هو العدد نفسه: حديقة إيمان 46 × 24 نحللها 20 + 20 + 6 في 20 + 4 (أو 40 + 6 في 20 + 4). المساحة 1,104 م². وعلي يمشي 6 كم يوميًا لمدة 187 يومًا: 6 × 187 = 1,122 كم، وإذا قاد سيارته 60 كم يوميًا: 60 × 187 = 11,220 كم (10 أمثال).'),
  [num('normal', 'medium', ('Eman’s garden is 46 m long and 24 m wide. What is its area?', 'حديقة إيمان طولها 46 مترًا وعرضها 24 مترًا. ما مساحتها؟'), '46*24', unit=('m²', 'م²'),
        **AM(top=['20', '20', '6'], left=['20', '4'], cells=[['', '', ''], ['', '', '']])),
   mc('normal', 'medium', ('Which split of 46 can NOT be used in an area model of 46 × 24?', 'أي تحليل للعدد 46 لا يصلح في نموذج 46 × 24؟'), ['20 + 20 + 4', '20 + 20 + 6', '40 + 6', '30 + 10 + 6']),
   tf('normal', 'medium', ('In the area model 20 + 20 + 6 by 20 + 4, the cell 20 × 6 holds 120.', 'في نموذج 20 + 20 + 6 في 20 + 4، الخانة 20 × 6 فيها 120.'), True),
   num('normal', 'medium', ('Ali walks 6 km each day for 187 days. How many kilometers does he walk?', 'يمشي علي 6 كيلومترات في اليوم لمدة 187 يومًا. كم كيلومترًا يمشي؟'), '6*187', unit=KM),
   num('normal', 'medium', ('What if Ali drove 60 km each day for 187 days?', 'ماذا لو قاد علي سيارته 60 كيلومترًا كل يوم لمدة 187 يومًا؟'), '60*187', unit=KM),
   mc('normal', 'hard', ('60 × 187 compared with 6 × 187 is…', 'ناتج 60 × 187 مقارنة بـ 6 × 187 يكون…'), [('10 times as much', '10 أمثاله'), ('54 more', 'أكبر بـ 54'), ('the same', 'مساويًا له'), ('6 times as much', '6 أمثاله')]),
  ])
idea('T6', 1, ('Challenge: bigger area models', 'تحدٍّ: نماذج مساحة أكبر'),
  ('Omar has 12 buses with 25 passengers each: 12 × 25 = 300 passengers. 3,352 × 17: 3,000 + 300 + 50 + 2 by 10 + 7 gives 56,984.',
   'لدى عمر 12 أتوبيسًا يحمل كل منها 25 راكبًا: 12 × 25 = 300 راكب. و3,352 × 17: 3,000 + 300 + 50 + 2 في 10 + 7 يعطي 56,984.'),
  [num('boss', 'hard', ('Omar’s travel company in the Eastern Desert has 12 buses. Each bus holds 25 passengers. How many passengers can he take each day if every bus is full?', 'يمتلك عمر شركة سياحة في جبال الصحراء الشرقية. لديه 12 أتوبيسًا، وكل أتوبيس يحمل 25 راكبًا. كم راكبًا يمكنه نقله كل يوم إذا كانت الأتوبيسات كاملة العدد؟'), '12*25'),
   num('boss', 'hard', ('3,352 × 17 = ?', '3,352 × 17 = ؟'), '3352*17', **AM(top=['3,000', '300', '50', '2'], left=['10', '7'], cells=[['30,000', '3,000', '500', '20'], ['21,000', '2,100', '350', '14']])),
   num('boss', 'hard', ('572 × 98 = ?', '572 × 98 = ؟'), '572*98'),
   mc('boss', 'hard', ('Which area model shows 374 × 62?', 'أي نموذج مساحة يمثل 374 × 62؟'),
      [('300 + 70 + 4 by 60 + 2', '300 + 70 + 4 في 60 + 2'), ('300 + 70 + 4 by 6 + 2', '300 + 70 + 4 في 6 + 2'), ('374 by 60 + 20', '374 في 60 + 20'), ('3 + 7 + 4 by 6 + 2', '3 + 7 + 4 في 6 + 2')]),
  ])

# ---------------- Lesson 2 · The Distributive Property (p68-71) ----------------
idea('U1', 2, ('The Distributive Property', 'خاصية التوزيع'),
  ('8 × 9 is 8 rows of 9 squares. Split it into two rectangles: 8 × 5 = 40 and 8 × 4 = 32, then add: 40 + 32 = 72. So 8 × 9 = 8 × (5 + 4). The Distributive Property lets us multiply every number inside the parentheses by the number outside.',
   '8 × 9 هو 8 صفوف في كل صف 9 مربعات. نقسمه إلى مستطيلين: 8 × 5 = 40 و8 × 4 = 32، ثم نجمع: 40 + 32 = 72. إذن 8 × 9 = 8 × (5 + 4). خاصية التوزيع تسمح بضرب كل الأعداد داخل الأقواس في العدد خارج الأقواس.'),
  [tf('timed', 'easy', ('8 × (5 + 4) = (8 × 5) + (8 × 4)', '8 × (5 + 4) = (8 × 5) + (8 × 4)'), True, seconds=12, fig='unitGrid', pic={'rows': 8, 'parts': [5, 4]}),
   num('normal', 'easy', ('The blue part is 8 × 5 and the yellow part is 8 × 4. What is the whole rectangle?', 'الجزء الأزرق 8 × 5 والجزء الأصفر 8 × 4. كم مساحة المستطيل كله؟'), '8*5+8*4', fig='unitGrid', pic={'rows': 8, 'parts': [5, 4]}),
   mc('normal', 'medium', ('Which expression equals 8 × 9?', 'أي تعبير يساوي 8 × 9؟'), ['8 × (5 + 4)', '8 × 5 + 4', '(8 + 5) × 4', '8 + (5 × 4)']),
   term('normal', 'easy', ('Multiplying every number inside the parentheses by the number outside, like 8 × (5 + 4) = 40 + 32.', 'ضرب كل الأعداد داخل الأقواس في العدد خارج الأقواس، مثل 8 × (5 + 4) = 40 + 32.'),
        ('Distributive', 'خاصية التوزيع'), [('Area model', 'نموذج المساحة'), ('Estimate', 'التقدير'), ('Algorithm', 'الخوارزمية')]),
   fill('timed', 'easy', ('8 × 9 = 8 × (5 + 4) = 40 + ___ = 72', '8 × 9 = 8 × (5 + 4) = 40 + ___ = 72'), ['32', '36', '4', '20'], seconds=14),
  ])
idea('U2', 2, ('Badir’s mistake: 206 × 45', 'خطأ بدير: 206 × 45'),
  ('Badir split 45 into 40 + 5 correctly and multiplied correctly, but he split 206 into 200 + 60 + 0. 206 has 0 tens and 6 ones: 206 = 200 + 6. The right model gives 8,000 + 240 + 1,000 + 30 = 9,270.',
   'حلل بدير 45 إلى 40 + 5 بشكل صحيح وضرب بشكل صحيح، لكنه حلل 206 إلى 200 + 60 + 0. العدد 206 فيه 0 عشرات و6 آحاد: 206 = 200 + 6. النموذج الصحيح يعطي 8,000 + 240 + 1,000 + 30 = 9,270.'),
  [mc('normal', 'medium', ('Badir thinks 206 × 45 = 11,700. What did he do wrong?', 'يعتقد بدير أن 206 × 45 = 11,700. ما خطؤه؟'),
      [('He split 206 as 200 + 60 + 0; it is 200 + 6', 'حلل 206 إلى 200 + 60 + 0 والصحيح 200 + 6'), ('He split 45 wrongly', 'حلل 45 بشكل خاطئ'), ('He added the partial products wrongly', 'أخطأ في جمع نواتج الضرب الجزئية'), ('40 × 200 is not 8,000', '40 × 200 لا تساوي 8,000')],
      **AM(top=['200', '60', '0'], left=['40', '5'], cells=[['8,000', '2,400', '0'], ['1,000', '300', '0']])),
   mc('normal', 'medium', ('What did Badir do correctly?', 'ما الصحيح في إجابة بدير؟'),
      [('He split 45 into 40 + 5', 'حلل 45 إلى 40 + 5'), ('He split 206 into 200 + 60', 'حلل 206 إلى 200 + 60'), ('His answer 11,700', 'إجابته 11,700'), ('He wrote a 0 for the ones of 206', 'كتب 0 لآحاد 206')]),
   num('normal', 'hard', ('Solve correctly: 206 × 45 = ?', 'حل المسألة بطريقة صحيحة: 206 × 45 = ؟'), '206*45'),
   mc('normal', 'medium', ('Which area model is right for 206 × 45?', 'أي نموذج مساحة صحيح لـ 206 × 45؟'), [('200 + 6 by 40 + 5', '200 + 6 في 40 + 5'), ('200 + 60 by 40 + 5', '200 + 60 في 40 + 5'), ('20 + 6 by 40 + 5', '20 + 6 في 40 + 5'), ('200 + 60 + 0 by 4 + 5', '200 + 60 + 0 في 4 + 5')]),
   tf('timed', 'easy', ('206 = 200 + 60', '206 = 200 + 60'), False, seconds=10),
  ])
idea('U3', 2, ('From the area model to an expression', 'من نموذج المساحة إلى التعبير العددي'),
  ('Each cell of the area model is one product in the expression: 58 × 42 = (40 × 50) + (40 × 8) + (2 × 50) + (2 × 8) = 2,000 + 320 + 100 + 16 = 2,436. 37 × 24 = 600 + 140 + 120 + 28 = 888. 63 × 29 = 1,200 + 60 + 540 + 27 = 1,827. 47 × 39 = 1,200 + 210 + 360 + 63 = 1,833.',
   'كل خانة في النموذج هي حاصل ضرب في التعبير العددي: 58 × 42 = (40 × 50) + (40 × 8) + (2 × 50) + (2 × 8) = 2,000 + 320 + 100 + 16 = 2,436. و37 × 24 = 600 + 140 + 120 + 28 = 888. و63 × 29 = 1,200 + 60 + 540 + 27 = 1,827. و47 × 39 = 1,200 + 210 + 360 + 63 = 1,833.'),
  [fill('normal', 'easy', ('58 × 42 = (40 × ___) + (40 × 8) + (2 × 50) + (2 × 8)', '58 × 42 = (40 × ___) + (40 × 8) + (2 × 50) + (2 × 8)'), ['50', '58', '5', '42'],
        **AM(top=['50', '8'], left=['40', '2'], cells=[['2,000', '320'], ['100', '16']])),
   num('normal', 'medium', ('58 × 42 = ?', '58 × 42 = ؟'), '58*42', **AM(top=['50', '8'], left=['40', '2'], cells=[['2,000', '320'], ['100', '16']])),
   mc('normal', 'medium', ('Which expression matches this area model?', 'أي تعبير عددي يطابق هذا النموذج؟'),
      ['(20 × 30) + (20 × 7) + (4 × 30) + (4 × 7)', '(20 × 30) + (4 × 7)', '(20 + 30) × (4 + 7)', '(2 × 3) + (2 × 7) + (4 × 3) + (4 × 7)'],
      **AM(top=['30', '7'], left=['20', '4'], cells=[['600', '140'], ['120', '28']])),
   num('normal', 'medium', ('37 × 24 = ?', '37 × 24 = ؟'), '37*24', **AM(top=['30', '7'], left=['20', '4'], cells=[['600', '140'], ['120', '28']])),
   num('normal', 'medium', ('Use the model: 63 × 29 = ?', 'استخدم النموذج: 63 × 29 = ؟'), '63*29', **AM(top=['60', '3'], left=['20', '9'], cells=[['1,200', '60'], ['540', '27']])),
   num('normal', 'medium', ('Use the model: 47 × 39 = ?', 'استخدم النموذج: 47 × 39 = ؟'), '47*39', **AM(top=['40', '7'], left=['30', '9'], cells=[['1,200', '210'], ['360', '63']])),
  ])
idea('U4', 2, ('Completing an area model: 48 × 49', 'إكمال نموذج المساحة: 48 × 49'),
  ('(40 × 40) + (40 × 8) + (9 × 40) + (9 × 8): the top is 40 and 8, the side is 40 and 9. The cells are 1,600, 320, 360 and 72, and the total is 2,352.',
   '(40 × 40) + (40 × 8) + (9 × 40) + (9 × 8): الأعلى 40 و8، والجانب 40 و9. الخانات 1,600 و320 و360 و72، والمجموع 2,352.'),
  [num('timed', 'easy', ('What goes in the shaded cell (40 × 8)?', 'ماذا نكتب في الخانة الملونة (40 × 8)؟'), '40*8', seconds=15, **AM(top=['40', '8'], left=['40', '9'], cells=[['1,600', '?'], ['', '72']], hi=[0, 1])),
   num('timed', 'easy', ('What goes in the shaded cell (9 × 40)?', 'ماذا نكتب في الخانة الملونة (9 × 40)؟'), '9*40', seconds=15, **AM(top=['40', '8'], left=['40', '9'], cells=[['1,600', '320'], ['?', '72']], hi=[1, 0])),
   num('normal', 'medium', ('(40 × 40) + (40 × 8) + (9 × 40) + (9 × 8) = ?', '(40 × 40) + (40 × 8) + (9 × 40) + (9 × 8) = ؟'), '40*40+40*8+9*40+9*8'),
   mc('normal', 'medium', ('Which multiplication is (40 × 40) + (40 × 8) + (9 × 40) + (9 × 8)?', 'أي عملية ضرب يمثلها (40 × 40) + (40 × 8) + (9 × 40) + (9 × 8)؟'), ['48 × 49', '40 × 49', '48 × 9', '40 × 8 × 9']),
  ])
idea('U5', 2, ('Flexible numbers: many ways, one product', 'الأعداد مرنة: طرق كثيرة وناتج واحد'),
  ('14 × 83 can be split in many ways if the parts on each side add up to 83 and 14: Mazen 40 + 40 + 3 by 10 + 4, Lamiaa 80 + 3 by 7 + 7, Reeda 80 + 3 by 10 + 4. All give 1,162. 26 × 33 = 858 (30 + 3 by 20 + 6, or 20 + 10 + 3, or 11 + 11 + 11 by 10 + 10 + 6). 42 × 34 = 1,428.',
   '14 × 83 يمكن تحليله بطرق كثيرة بشرط أن يكون مجموع الأجزاء في كل جانب 83 و14: مازن 40 + 40 + 3 في 10 + 4، ولمياء 80 + 3 في 7 + 7، ورضا 80 + 3 في 10 + 4. كلها تعطي 1,162. و26 × 33 = 858 (30 + 3 في 20 + 6، أو 20 + 10 + 3، أو 11 + 11 + 11 في 10 + 10 + 6). و42 × 34 = 1,428.'),
  [num('normal', 'medium', ('Lamiaa: (80 × 7) + (80 × 7) + (3 × 7) + (3 × 7) = ?', 'لمياء: (80 × 7) + (80 × 7) + (3 × 7) + (3 × 7) = ؟'), '80*7+80*7+3*7+3*7', **AM(top=['80', '3'], left=['7', '7'], cells=[['', ''], ['', '']])),
   num('normal', 'medium', ('Reeda: (80 × 10) + (80 × 4) + (3 × 10) + (3 × 4) = ?', 'رضا: (80 × 10) + (80 × 4) + (3 × 10) + (3 × 4) = ؟'), '80*10+80*4+3*10+3*4', **AM(top=['80', '3'], left=['10', '4'], cells=[['', ''], ['', '']])),
   multi('normal', 'hard', ('Which ways of splitting work for 14 × 83? Choose all the correct answers.', 'أي طرق التحليل تصلح لـ 14 × 83؟ اختر كل الإجابات الصحيحة.'),
         [('40 + 40 + 3 by 10 + 4', '40 + 40 + 3 في 10 + 4'), ('80 + 3 by 7 + 7', '80 + 3 في 7 + 7'), ('40 + 40 + 4 by 10 + 4', '40 + 40 + 4 في 10 + 4'), ('80 + 30 by 10 + 4', '80 + 30 في 10 + 4')], [0, 1]),
   tf('normal', 'medium', ('Mazen, Lamiaa and Reeda split 14 × 83 in different ways, so they get different products.', 'مازن ولمياء ورضا حللوا 14 × 83 بطرق مختلفة، لذلك حصلوا على نواتج مختلفة.'), False),
   num('normal', 'medium', ('26 × 33 = ? (the model 30 + 3 by 20 + 6)', '26 × 33 = ؟ (النموذج 30 + 3 في 20 + 6)'), '26*33', **AM(top=['30', '3'], left=['20', '6'], cells=[['', ''], ['', '']])),
   num('normal', 'hard', ('42 × 34 = ?', '42 × 34 = ؟'), '42*34'),
  ])
idea('U6', 2, ('Challenge: the fennec fox and other splits', 'تحدٍّ: ثعلب الفنك وطرق تحليل أخرى'),
  ('A fennec fox den can have up to 15 entrances, so 32 dens can have up to 15 × 32 = 480 entrances. 26 × 33 with 11 + 11 + 11 by 10 + 10 + 6 still gives 858.',
   'جحر ثعلب الفنك يمكن أن يحتوي على ما يصل إلى 15 مدخلًا، إذن 32 جحرًا يمكن أن تحتوي على ما يصل إلى 15 × 32 = 480 مدخلًا. و26 × 33 بالتحليل 11 + 11 + 11 في 10 + 10 + 6 يعطي أيضًا 858.'),
  [num('boss', 'hard', ('A fennec fox den can have up to 15 entrances. How many entrances could 32 dens have?', 'جحر ثعلب الفنك يمكن أن يحتوي على ما يصل إلى 15 مدخلًا. كم مدخلًا يمكن أن تحتوي عليها 32 جحرًا؟'), '15*32'),
   num('boss', 'hard', ('Use this model of 26 × 33: what is the product?', 'استخدم هذا النموذج لـ 26 × 33: ما الناتج؟'), '26*33',
       **AM(top=['11', '11', '11'], left=['10', '10', '6'], cells=[['110', '110', '110'], ['110', '110', '110'], ['66', '66', '66']])),
   mc('boss', 'hard', ('Which expression matches the model 20 + 10 + 3 by 20 + 6?', 'أي تعبير يطابق النموذج 20 + 10 + 3 في 20 + 6؟'),
      ['(20 × 20) + (20 × 10) + (20 × 3) + (6 × 20) + (6 × 10) + (6 × 3)', '(20 × 20) + (10 × 6) + (3 × 6)', '(20 + 10 + 3) + (20 + 6)', '(20 × 20) + (20 × 10) + (20 × 3)']),
   num('boss', 'hard', ('Mazen: (40 × 10) + (40 × 10) + (40 × 4) + (40 × 4) + (3 × 10) + (3 × 4) = ?', 'مازن: (40 × 10) + (40 × 10) + (40 × 4) + (40 × 4) + (3 × 10) + (3 × 4) = ؟'), '40*10+40*10+40*4+40*4+3*10+3*4'),
  ])

# ---------------- Lesson 3 · The standard algorithm (p72-74) ----------------
idea('V1', 3, ('Mental math with 10, 100 and 1,000', 'الحساب العقلي مع 10 و100 و1,000'),
  ('35 × 10 = 350, 25 × 100 = 2,500, 75 × 1,000 = 75,000. Then 35 × 9 is one 35 less than 35 × 10: 350 − 35 = 315, and 25 × 99 = 2,500 − 25 = 2,475.',
   '35 × 10 = 350 و25 × 100 = 2,500 و75 × 1,000 = 75,000. و35 × 9 أقل من 35 × 10 بمقدار 35: 350 − 35 = 315، و25 × 99 = 2,500 − 25 = 2,475.'),
  [num('timed', 'easy', ('35 × 10 = ?', '35 × 10 = ؟'), '35*10', seconds=10),
   num('timed', 'easy', ('25 × 100 = ?', '25 × 100 = ؟'), '25*100', seconds=12),
   num('timed', 'easy', ('75 × 1,000 = ?', '75 × 1,000 = ؟'), '75*1000', seconds=12),
   num('normal', 'medium', ('35 × 10 = 350. Use it: 35 × 9 = ?', '35 × 10 = 350. استخدمه: 35 × 9 = ؟'), '35*9'),
   num('normal', 'medium', ('25 × 100 = 2,500. Use it: 25 × 99 = ?', '25 × 100 = 2,500. استخدمه: 25 × 99 = ؟'), '25*99'),
   mc('normal', 'medium', ('How does 35 × 10 help to find 35 × 9?', 'كيف يساعد 35 × 10 في إيجاد 35 × 9؟'),
      [('Subtract one 35: 350 − 35', 'نطرح 35 مرة واحدة: 350 − 35'), ('Subtract 1: 350 − 1', 'نطرح 1: 350 − 1'), ('Subtract 10: 350 − 10', 'نطرح 10: 350 − 10'), ('Add 35: 350 + 35', 'نجمع 35: 350 + 35')]),
  ])
idea('V2', 3, ('Three strategies, one product: 45 × 37', 'ثلاث استراتيجيات وناتج واحد: 45 × 37'),
  ('The area model, the Distributive Property and the standard algorithm all give 45 × 37 = 1,665. In the algorithm, 315 = 45 × 7 (the cells 280 + 35) and 1,350 = 45 × 30 (the cells 1,200 + 150).',
   'نموذج مساحة المستطيل وخاصية التوزيع والخوارزمية المعيارية تعطي كلها 45 × 37 = 1,665. في الخوارزمية 315 = 45 × 7 (الخانتان 280 + 35) و1,350 = 45 × 30 (الخانتان 1,200 + 150).'),
  [num('normal', 'easy', ('45 × 37 = ?', '45 × 37 = ؟'), '45*37', **LM(a='45', b='37', parts=['315', '1,350'], carry='1')),
   mc('normal', 'medium', ('In the algorithm for 45 × 37, the row 315 is…', 'في خوارزمية 45 × 37، السطر 315 هو…'), ['45 × 7', '45 × 3', '45 × 30', '40 × 7'], **LM(a='45', b='37', parts=['315', '1,350'], total='1,665', carry='1')),
   mc('normal', 'medium', ('The row 1,350 in the algorithm matches which cells of the area model?', 'السطر 1,350 في الخوارزمية يطابق أي خانتين في نموذج المساحة؟'), ['1,200 + 150', '280 + 35', '1,200 + 280', '150 + 35'],
      **AM(top=['40', '5'], left=['30', '7'], cells=[['1,200', '150'], ['280', '35']])),
   tf('normal', 'medium', ('The area model and the standard algorithm give different products for 45 × 37.', 'نموذج المساحة والخوارزمية المعيارية يعطيان ناتجين مختلفين لـ 45 × 37.'), False),
   num('normal', 'medium', ('35 + 150 + 280 + 1,200 = ?', '35 + 150 + 280 + 1,200 = ؟'), '35+150+280+1200'),
  ])
idea('V3', 3, ('How the standard algorithm works', 'كيف تعمل الخوارزمية المعيارية'),
  ('Work from bottom to top and from right to left, start with the ones place, remember place value as you multiply, and line up the products by place value before adding them.',
   'نضرب من الأسفل إلى الأعلى ومن اليمين إلى اليسار، ونبدأ من الآحاد، ونتذكر القيمة المكانية عند الضرب، ونضع نواتج الضرب بمحاذاة بعضها حسب القيمة المكانية قبل جمعها.'),
  [tf('timed', 'easy', ('In the standard algorithm we start with the ones place.', 'في الخوارزمية المعيارية نبدأ من الآحاد.'), True, seconds=10),
   tf('timed', 'easy', ('In the standard algorithm we multiply from left to right.', 'في الخوارزمية المعيارية نضرب من اليسار إلى اليمين.'), False, seconds=10),
   tf('timed', 'easy', ('We line up the partial products by place value before adding them.', 'نضع نواتج الضرب بمحاذاة بعضها حسب القيمة المكانية قبل جمعها.'), True, seconds=12),
   mc('normal', 'medium', ('76 × 24: why does the second row end in 0 (1,520)?', '76 × 24: لماذا ينتهي السطر الثاني بصفر (1,520)؟'),
      [('We multiply by 2 tens: 76 × 20', 'لأننا نضرب في 2 عشرات: 76 × 20'), ('We add a 0 to make it look nicer', 'نضيف 0 ليبدو أجمل'), ('Because 76 has a 0', 'لأن 76 فيها صفر'), ('Because 24 is even', 'لأن 24 عدد زوجي')],
      **LM(a='76', b='24', parts=['304', '1,520'], carry='2')),
   fill('normal', 'medium', ('In the standard algorithm we multiply from ___ to left.', 'في الخوارزمية المعيارية نضرب من ___ إلى اليسار.'), [('right', 'اليمين'), ('left', 'اليسار'), ('top', 'الأعلى')]),
  ])
idea('V4', 3, ('Matching the area model and the algorithm', 'مطابقة نموذج المساحة والخوارزمية'),
  ('26 × 33: cells 600, 180, 60 and 18, total 858. 76 × 24: the row 304 = 4 × 76 = 280 + 24, the row 1,520 = 20 × 76 = 1,400 + 120, so 76 × 24 = 1,824.',
   '26 × 33: الخانات 600 و180 و60 و18، والمجموع 858. و76 × 24: السطر 304 = 4 × 76 = 280 + 24، والسطر 1,520 = 20 × 76 = 1,400 + 120، إذن 76 × 24 = 1,824.'),
  [num('timed', 'easy', ('Fill in the cell 30 × 20.', 'املأ الخانة 30 × 20.'), '30*20', seconds=15, **AM(top=['20', '6'], left=['30', '3'], cells=[['?', ''], ['', '']], hi=[0, 0])),
   num('normal', 'medium', ('Fill in the area model. What is the final product?', 'املأ نموذج المساحة. ما ناتج الضرب؟'), '26*33', **AM(top=['20', '6'], left=['30', '3'], cells=[['', ''], ['', '']])),
   mc('normal', 'medium', ('Which cells of the area model make the row 304?', 'أي خانات النموذج تكوّن السطر 304؟'), ['280 + 24', '1,400 + 120', '1,400 + 280', '120 + 24'],
      **AM(top=['70', '6'], left=['20', '4'], cells=[['1,400', '120'], ['280', '24']])),
   num('normal', 'medium', ('Complete the cell 20 × 6.', 'أكمل الخانة 20 × 6.'), '20*6', **AM(top=['70', '6'], left=['20', '4'], cells=[['1,400', '?'], ['280', '24']], hi=[0, 1])),
   num('normal', 'medium', ('76 × 24 = ?', '76 × 24 = ؟'), '76*24', **LM(a='76', b='24', parts=['304', '1,520'], carry='2')),
  ])
idea('V5', 3, ('Using the standard algorithm', 'استخدام الخوارزمية المعيارية'),
  ('67 × 76: 67 × 6 = 402, 67 × 70 = 4,690, total 5,092. 76 × 82 = 6,232. 234 × 53 = 12,402.',
   '67 × 76: 67 × 6 = 402 و67 × 70 = 4,690، والمجموع 5,092. و76 × 82 = 6,232. و234 × 53 = 12,402.'),
  [num('normal', 'medium', ('67 × 76: what is the second row (67 × 70)?', '67 × 76: ما السطر الثاني (67 × 70)؟'), '67*70', **LM(a='67', b='76', parts=['402', '?,69?'], carry='4')),
   num('normal', 'medium', ('Find the final product of 67 × 76.', 'أوجد ناتج الضرب 67 × 76.'), '67*76', **LM(a='67', b='76', parts=['402', '4,690'], carry='4')),
   num('normal', 'hard', ('76 × 82 = ?', '76 × 82 = ؟'), '76*82'),
   num('normal', 'hard', ('234 × 53 = ?', '234 × 53 = ؟'), '234*53'),
   mc('normal', 'medium', ('What is 67 × 6 in the first row?', 'كم يساوي 67 × 6 في السطر الأول؟'), ['402', '362', '4,020', '67']),
  ])
idea('V6', 3, ('Challenge: Akram’s shortcut and the Eastern Desert rain', 'تحدٍّ: طريقة أكرم وأمطار الصحراء الشرقية'),
  ('Akram is right: 34 × 69 = (34 × 70) − 34, because 69 is one less than 70. 2,380 − 34 = 2,346. The Eastern Desert gets less than 25 mm of rain a year, so in 25 years it gets less than 25 × 25 = 625 mm.',
   'أكرم على حق: 34 × 69 = (34 × 70) − 34 لأن 69 أقل من 70 بواحد. 2,380 − 34 = 2,346. وتتساقط الأمطار على الصحراء الشرقية بمعدل أقل من 25 مليمترًا في السنة، إذن في 25 عامًا أقل من 25 × 25 = 625 مليمترًا.'),
  [mc('boss', 'hard', ('Akram says 34 × 69 gives the same product as (34 × 70) − 34. Is he right?', 'يقول أكرم إن 34 × 69 يعطي نفس ناتج (34 × 70) − 34. هل هو على حق؟'),
      [('Yes: 69 is one less than 70, so take one 34 away', 'نعم: 69 أقل من 70 بواحد، فنطرح 34 مرة واحدة'), ('No: he must subtract 1, not 34', 'لا: يجب أن يطرح 1 وليس 34'), ('No: he must add 34', 'لا: يجب أن يجمع 34'), ('No: 70 × 34 is not related', 'لا: 70 × 34 لا علاقة له')]),
   num('boss', 'hard', ('34 × 69 = ?', '34 × 69 = ؟'), '34*69'),
   num('boss', 'hard', ('The Eastern Desert usually gets less than 25 mm of rain a year. Less than how many millimeters can fall in 25 years?', 'تتساقط الأمطار على الصحراء الشرقية عادة بمعدل أقل من 25 مليمترًا كل سنة. في 25 عامًا تتساقط أقل من كم مليمترًا؟'), '25*25', unit=('mm', 'مم')),
   num('boss', 'hard', ('234 × 53 = ?', '234 × 53 = ؟'), '234*53', **LM(a='234', b='53')),
  ])

# ---------------- Lesson 4 · Multiplying Multi-Digit Numbers (p75-77) ----------------
idea('W1', 4, ('Ashraf’s mistake: 357 × 36', 'خطأ أشرف: 357 × 36'),
  ('Ashraf’s first row is right: 357 × 6 = 2,142. His second row is wrong: 357 × 30 = 10,710, not 10,521. The right product is 2,142 + 10,710 = 12,852.',
   'السطر الأول عند أشرف صحيح: 357 × 6 = 2,142. السطر الثاني خطأ: 357 × 30 = 10,710 وليس 10,521. الناتج الصحيح 2,142 + 10,710 = 12,852.'),
  [mc('normal', 'medium', ('Ashraf found 357 × 36 = 12,663. What did he do correctly?', 'أوجد أشرف 357 × 36 = 12,663. ما الصحيح في إجابته؟'),
      [('The first row: 357 × 6 = 2,142', 'السطر الأول: 357 × 6 = 2,142'), ('The second row: 10,521', 'السطر الثاني: 10,521'), ('The final product 12,663', 'الناتج النهائي 12,663'), ('Nothing at all', 'لا شيء')],
      **LM(a='357', b='36', parts=['2,142', '10,521'], total='12,663')),
   mc('normal', 'medium', ('What is wrong in Ashraf’s work?', 'ما الخطأ في إجابة أشرف؟'),
      [('357 × 30 is 10,710, not 10,521', '357 × 30 يساوي 10,710 وليس 10,521'), ('357 × 6 is not 2,142', '357 × 6 لا يساوي 2,142'), ('He should not write a 0 in the second row', 'لم يكن يجب أن يكتب 0 في السطر الثاني'), ('He added 2,142 + 10,521 wrongly', 'أخطأ في جمع 2,142 + 10,521')],
      **LM(a='357', b='36', parts=['2,142', '10,521'], total='12,663')),
   num('normal', 'medium', ('357 × 30 = ?', '357 × 30 = ؟'), '357*30'),
   num('normal', 'hard', ('Solve correctly: 357 × 36 = ?', 'حل المسألة بطريقة صحيحة: 357 × 36 = ؟'), '357*36'),
  ])
idea('W2', 4, ('Estimating the product', 'تقدير ناتج الضرب'),
  ('Round each factor to an easy number before multiplying: 3,567 × 24 ≈ 4,000 × 20 = 80,000, 8,222 × 53 ≈ 8,000 × 50 = 400,000, 6,209 × 33 ≈ 6,000 × 30 = 180,000, 2,521 × 74 ≈ 2,500 × 70 = 175,000. The estimate tells if an answer is reasonable.',
   'نقرّب كل عامل إلى عدد سهل قبل الضرب: 3,567 × 24 ≈ 4,000 × 20 = 80,000 و8,222 × 53 ≈ 8,000 × 50 = 400,000 و6,209 × 33 ≈ 6,000 × 30 = 180,000 و2,521 × 74 ≈ 2,500 × 70 = 175,000. التقدير يخبرنا إن كانت الإجابة معقولة.'),
  [mc('timed', 'easy', ('Estimate 3,567 × 24.', 'قدّر ناتج 3,567 × 24.'), [('about 80,000', 'حوالي 80,000'), ('about 8,000', 'حوالي 8,000'), ('about 800,000', 'حوالي 800,000')], seconds=15),
   mc('timed', 'easy', ('Estimate 8,222 × 53.', 'قدّر ناتج 8,222 × 53.'), [('about 400,000', 'حوالي 400,000'), ('about 40,000', 'حوالي 40,000'), ('about 4,000,000', 'حوالي 4,000,000')], seconds=15),
   mc('timed', 'easy', ('Estimate 6,209 × 33.', 'قدّر ناتج 6,209 × 33.'), [('about 180,000', 'حوالي 180,000'), ('about 18,000', 'حوالي 18,000'), ('about 1,800,000', 'حوالي 1,800,000')], seconds=15),
   mc('normal', 'medium', ('Which is a good estimate for 2,521 × 74?', 'أي تقدير مناسب لـ 2,521 × 74؟'), ['2,500 × 70 = 175,000', '2,000 × 7 = 14,000', '25 × 74 = 1,850', '3,000 × 700 = 2,100,000']),
   tf('timed', 'easy', ('We use an estimate to check if an answer is reasonable.', 'نستخدم التقدير للتحقق من معقولية الإجابة.'), True, seconds=12),
  ])
idea('W3', 4, ('4-digit × 2-digit with the algorithm', 'ضرب عدد من 4 أرقام في عدد من رقمين بالخوارزمية'),
  ('3,567 × 24 = 85,608 · 2,521 × 74 = 186,554 · 8,222 × 53 = 435,766 · 6,209 × 33 = 204,897. Each answer is close to its estimate.',
   '3,567 × 24 = 85,608 و2,521 × 74 = 186,554 و8,222 × 53 = 435,766 و6,209 × 33 = 204,897. كل إجابة قريبة من تقديرها.'),
  [num('normal', 'hard', ('3,567 × 24 = ?', '3,567 × 24 = ؟'), '3567*24'),
   num('normal', 'hard', ('2,521 × 74 = ?', '2,521 × 74 = ؟'), '2521*74'),
   num('normal', 'hard', ('8,222 × 53 = ?', '8,222 × 53 = ؟'), '8222*53'),
   num('normal', 'hard', ('6,209 × 33 = ?', '6,209 × 33 = ؟'), '6209*33'),
   num('normal', 'medium', ('3,567 × 24: the first row is 3,567 × 4. What is it?', '3,567 × 24: السطر الأول هو 3,567 × 4. كم يساوي؟'), '3567*4'),
  ])
idea('W4', 4, ('Match the model', 'صِل النموذج'),
  ('3,567 × 24 matches the model 3,000 + 500 + 60 + 7 by 20 + 4. 8,222 × 53 matches 8,000 + 200 + 20 + 2 by 50 + 3, not by 5 + 4. 2,521 × 74 matches 2,000 + 500 + 20 + 1 by 70 + 4. The model 6,209 × 33 with 18,627 written twice is wrong: the second row is 6,209 × 30 = 186,270.',
   '3,567 × 24 يطابق النموذج 3,000 + 500 + 60 + 7 في 20 + 4. و8,222 × 53 يطابق 8,000 + 200 + 20 + 2 في 50 + 3 وليس في 5 + 4. و2,521 × 74 يطابق 2,000 + 500 + 20 + 1 في 70 + 4. والنموذج 6,209 × 33 المكتوب فيه 18,627 مرتين خطأ: السطر الثاني 6,209 × 30 = 186,270.'),
  [match('normal', 'medium', ('Match each problem with its area model.', 'وصّل كل مسألة بنموذج المساحة المطابق.'),
         ['3,567 × 24', '8,222 × 53', '2,521 × 74'], [('2,000 + 500 + 20 + 1 by 70 + 4', '2,000 + 500 + 20 + 1 في 70 + 4'), ('3,000 + 500 + 60 + 7 by 20 + 4', '3,000 + 500 + 60 + 7 في 20 + 4'), ('8,000 + 200 + 20 + 2 by 50 + 3', '8,000 + 200 + 20 + 2 في 50 + 3')], [1, 2, 0]),
   tf('normal', 'medium', ('This model shows 8,222 × 53.', 'هذا النموذج يمثل 8,222 × 53.'), False,
      **AM(top=['8,000', '200', '20', '2'], left=['5', '4'], cells=[['400,000', '1,000', '100', '10'], ['24,000', '600', '60', '6']])),
   tf('normal', 'medium', ('This model shows 3,567 × 24.', 'هذا النموذج يمثل 3,567 × 24.'), True,
      **AM(top=['3,000', '500', '60', '7'], left=['20', '4'], cells=[['60,000', '10,000', '1,200', '140'], ['12,000', '2,000', '240', '28']])),
   num('normal', 'medium', ('In the model of 2,521 × 74, what goes in the cell 70 × 500?', 'في نموذج 2,521 × 74، ماذا نكتب في الخانة 70 × 500؟'), '70*500',
       **AM(top=['2,000', '500', '20', '1'], left=['70', '4'], cells=[['140,000', '?', '1,400', '70'], ['8,000', '2,000', '80', '4']], hi=[0, 1])),
   mc('normal', 'hard', ('6,209 × 33 was written with 18,627 in both rows. What should the second row be?', 'كُتب 6,209 × 33 وفيه 18,627 في السطرين. ما السطر الثاني الصحيح؟'), ['186,270', '18,627', '1,862,700', '18,270'],
      **LM(a='6,209', b='33', parts=['18,627', '18,627'])),
  ])
idea('W5', 4, ('Challenge: is the answer reasonable?', 'تحدٍّ: هل الإجابة معقولة؟'),
  ('6,209 × 33 is about 180,000, so 37,254 (18,627 + 18,627) is not reasonable; the right product is 204,897. Model C, 215 × 22 = (5 × 2) + (5 × 20) + (10 × 2) + (10 × 20) + (200 × 2) + (200 × 20) = 4,730.',
   '6,209 × 33 حوالي 180,000، لذلك 37,254 (18,627 + 18,627) إجابة غير معقولة، والناتج الصحيح 204,897. والنموذج ج: 215 × 22 = (5 × 2) + (5 × 20) + (10 × 2) + (10 × 20) + (200 × 2) + (200 × 20) = 4,730.'),
  [mc('boss', 'hard', ('A student says 6,209 × 33 = 37,254. Is it reasonable?', 'يقول تلميذ إن 6,209 × 33 = 37,254. هل هذا معقول؟'),
      [('No: the estimate is about 180,000', 'لا: التقدير حوالي 180,000'), ('Yes: it is close to 6,000 × 3', 'نعم: قريب من 6,000 × 3'), ('Yes: every product of a 4-digit number has 5 digits', 'نعم: ناتج ضرب أي عدد من 4 أرقام فيه 5 أرقام'), ('No: the estimate is about 1,800', 'لا: التقدير حوالي 1,800')]),
   num('boss', 'hard', ('215 × 22 = (5 × 2) + (5 × 20) + (10 × 2) + (10 × 20) + (200 × 2) + (200 × 20) = ?', '215 × 22 = (5 × 2) + (5 × 20) + (10 × 2) + (10 × 20) + (200 × 2) + (200 × 20) = ؟'), '215*22'),
   num('boss', 'hard', ('8,222 × 53 = ?', '8,222 × 53 = ؟'), '8222*53', **AM(top=['8,000', '200', '20', '2'], left=['50', '3'], cells=[['400,000', '10,000', '1,000', '100'], ['24,000', '600', '60', '6']])),
   multi('boss', 'hard', ('Which products are reasonable? Choose all the correct answers.', 'أي نواتج الضرب معقولة؟ اختر كل الإجابات الصحيحة.'),
         ['3,567 × 24 = 85,608', '2,521 × 74 = 186,554', '8,222 × 53 = 43,576', '6,209 × 33 = 20,489'], [0, 1]),
  ])

# ---------------- Lesson 5 · Multiplication Problems in the Real World (p78-79) ----------------
idea('X1', 5, ('Sandstorms', 'العواصف الرملية'),
  ('A sandstorm lasts 120 minutes a day for 33 days: 120 × 33 = 3,960 minutes. 120 minutes is 2 hours, so it lasts 2 × 33 = 66 hours.',
   'عاصفة رملية تستمر 120 دقيقة كل يوم لمدة 33 يومًا: 120 × 33 = 3,960 دقيقة. و120 دقيقة = ساعتان، إذن استمرت 2 × 33 = 66 ساعة.'),
  [num('normal', 'medium', ('A sandstorm lasts 120 minutes each day for 33 days in a row. How many minutes in all?', 'استمرت عاصفة رملية 120 دقيقة كل يوم لمدة 33 يومًا على التوالي. ما إجمالي عدد الدقائق؟'), '120*33', unit=MIN),
   num('normal', 'hard', ('Challenge: how many hours did the sandstorm last? (120 minutes = 2 hours)', 'سؤال التحدي: ما عدد الساعات التي استمرت فيها العاصفة الرملية؟ (120 دقيقة = ساعتان)'), '2*33', unit=('hours', 'ساعة')),
   mc('normal', 'medium', ('Which operation finds the total minutes?', 'أي عملية توجد إجمالي الدقائق؟'), ['120 × 33', '120 + 33', '120 − 33', '33 × 60']),
   tf('timed', 'easy', ('120 minutes are 2 hours.', '120 دقيقة تساوي ساعتين.'), True, seconds=10),
  ])
idea('X2', 5, ('Mona’s kebabs: a two-step problem', 'كباب منى: مسألة من خطوتين'),
  ('Mona sold 402 kebabs in February and 753 in March, 83 g of meat each. Step 1: 402 + 753 = 1,155 kebabs. Step 2: 1,155 × 83 = 95,865 g.',
   'باعت منى 402 قطعة كباب في فبراير و753 في مارس، وكل قطعة فيها 83 جرامًا من اللحم. الخطوة 1: 402 + 753 = 1,155 قطعة. الخطوة 2: 1,155 × 83 = 95,865 جرامًا.'),
  [num('normal', 'easy', ('Mona sold 402 kebabs in February and 753 in March. How many kebabs in both months?', 'باعت منى 402 قطعة كباب في فبراير و753 قطعة في مارس. كم قطعة في الشهرين؟'), '402+753'),
   num('normal', 'hard', ('Each kebab has 83 g of meat. How many grams of meat did Mona use in February and March?', 'كل قطعة كباب فيها 83 جرامًا من اللحم. كم جرامًا من اللحم استخدمت منى في فبراير ومارس؟'), '(402+753)*83', unit=G),
   mc('normal', 'medium', ('Which expression solves Mona’s meat problem?', 'أي تعبير يحل مسألة لحم منى؟'), ['(402 + 753) × 83', '402 + 753 × 83 − 402', '402 × 753 × 83', '(753 − 402) × 83']),
   num('normal', 'medium', ('How many grams of meat did Mona use in February only?', 'كم جرامًا من اللحم استخدمت منى في فبراير فقط؟'), '402*83', unit=G),
  ])
idea('X3', 5, ('Wael’s baklava: nuts and syrup', 'بقلاوة وائل: المكسرات والشراب'),
  ('The recipe needs 170 g each of pistachios, walnuts and hazelnuts: 3 × 170 = 510 g, and 18 recipes need 510 × 18 = 9,180 g. The syrup needs 250 + 15 + 30 = 295 mL per recipe, so 18 batches need 295 × 18 = 5,310 mL.',
   'تحتاج الوصفة إلى 170 جرامًا من كل من الفستق وعين الجمل والبندق: 3 × 170 = 510 جرامًا، و18 وصفة تحتاج 510 × 18 = 9,180 جرامًا. ويحتاج الشراب 250 + 15 + 30 = 295 مل لكل وصفة، إذن 18 وصفة تحتاج 295 × 18 = 5,310 مل.'),
  [num('normal', 'hard', ('Wael’s recipe needs 170 g each of pistachios, walnuts and hazelnuts. He multiplies the recipe by 18. How many grams of nuts in all?', 'تحتاج وصفة وائل إلى 170 جرامًا من كل من الفستق وعين الجمل والبندق. يضرب مكونات الوصفة في 18. كم جرامًا من المكسرات يحتاج؟'), '170*3*18', unit=G),
   mc('normal', 'medium', ('A student found 170 × 18 = 3,060 g of nuts. What did the student forget?', 'وجد تلميذ أن المكسرات 170 × 18 = 3,060 جرامًا. ماذا نسي؟'),
      [('That there are 3 kinds of nuts', 'أن هناك 3 أنواع من المكسرات'), ('To add 18', 'أن يجمع 18'), ('To divide by 3', 'أن يقسم على 3'), ('Nothing: it is right', 'لم ينسَ شيئًا: الإجابة صحيحة')]),
   num('normal', 'medium', ('The syrup needs 250 mL of honey, 15 mL of orange extract and 30 mL of lemon juice per recipe. How many mL for one recipe?', 'يحتاج الشراب إلى 250 مل من العسل و15 مل من مستخلص البرتقال و30 مل من عصير الليمون لكل وصفة. كم مل للوصفة الواحدة؟'), '250+15+30', unit=ML),
   num('normal', 'hard', ('How many mL of liquid does Wael need for 18 batches of syrup?', 'كم مليلترًا من المكونات السائلة يحتاج وائل لتحضير 18 وصفة من الشراب؟'), '(250+15+30)*18', unit=ML),
  ])
idea('X4', 5, ('Mona’s tahini', 'طحينة منى'),
  ('140 g of sesame seeds make 120 mL of tahini. 20 recipes a week: 140 × 20 = 2,800 g of seeds and 120 × 20 = 2,400 mL of tahini. In 36 weeks: 2,400 × 36 = 86,400 mL = 86.4 L (1,000 mL = 1 L).',
   '140 جرامًا من بذور السمسم تحضر 120 مل من الطحينة. 20 مرة في الأسبوع: 140 × 20 = 2,800 جرام من البذور و120 × 20 = 2,400 مل من الطحينة. وفي 36 أسبوعًا: 2,400 × 36 = 86,400 مل = 86.4 لتر (1,000 مل = 1 لتر).'),
  [num('normal', 'medium', ('Mona uses 140 g of sesame seeds per recipe and makes it 20 times a week. How many grams of seeds each week?', 'تحتاج منى 140 جرامًا من بذور السمسم للوصفة، وتحضرها 20 مرة كل أسبوع. كم جرامًا من البذور كل أسبوع؟'), '140*20', unit=G),
   num('normal', 'medium', ('Each recipe makes 120 mL of tahini, 20 times a week. How many mL each week?', 'كل وصفة تعطي 120 مل من الطحينة، 20 مرة في الأسبوع. كم مل كل أسبوع؟'), '120*20', unit=ML),
   num('normal', 'hard', ('How many mL of tahini does Mona make in 36 weeks?', 'كم مليلترًا من الطحينة تحضر منى في 36 أسبوعًا؟'), '120*20*36', unit=ML),
   num('normal', 'hard', ('Convert 86,400 mL to liters.', 'حوّل 86,400 مل إلى لتر.'), '86400/1000', unit=('L', 'لتر')),
  ])
idea('X5', 5, ('Challenge: Mona’s lemonade for a year', 'تحدٍّ: عصير ليمون منى لمدة عام'),
  ('6 lemons per liter and 8 liters a day: 6 × 8 = 48 lemons a day, 48 × 365 = 17,520 lemons in 365 days. Liters: 8 × 365 = 2,920 L. Sugar: 1,133 g a day, 30 weeks = 30 × 7 = 210 days, 1,133 × 210 = 237,930 g.',
   '6 ثمرات ليمون لكل لتر و8 لترات في اليوم: 6 × 8 = 48 ثمرة في اليوم، و48 × 365 = 17,520 ثمرة في 365 يومًا. اللترات: 8 × 365 = 2,920 لترًا. السكر: 1,133 جرامًا يوميًا، و30 أسبوعًا = 30 × 7 = 210 أيام، و1,133 × 210 = 237,930 جرامًا.'),
  [num('boss', 'hard', ('Mona uses 6 lemons for each liter and makes 8 liters a day. How many lemons in 365 days?', 'تستخدم منى 6 ثمرات ليمون لكل لتر، وتحضر 8 لترات في اليوم. ما عدد ثمرات الليمون في 365 يومًا؟'), '6*8*365'),
   num('boss', 'hard', ('How many liters of lemonade does Mona make in 365 days (8 liters a day)?', 'كم لترًا من عصير الليمون تحضر منى في 365 يومًا (8 لترات يوميًا)؟'), '8*365', unit=('L', 'لتر')),
   num('boss', 'hard', ('Mona uses 1,133 g of sugar daily. How many grams in 30 weeks?', 'تستخدم منى 1,133 جرامًا من السكر يوميًا. كم جرامًا في 30 أسبوعًا؟'), '1133*7*30', unit=G),
   mc('boss', 'hard', ('Which is the first step to find the sugar for 30 weeks?', 'ما الخطوة الأولى لإيجاد السكر في 30 أسبوعًا؟'),
      [('Find the days: 30 × 7 = 210', 'نوجد الأيام: 30 × 7 = 210'), ('1,133 × 30', '1,133 × 30'), ('1,133 + 30', '1,133 + 30'), ('30 ÷ 7', '30 ÷ 7')]),
  ])

HEAD_EN = '''/* Math · Grade 5 · Unit 3 "Multiplication with Whole Numbers" · Languages track (English), first term 2026/2027
   Source: the English school book (Math Term 1), Unit 3 (pages 64-79), Concept 3.1 "Multiplying by 2-Digit Numbers": lessons 1-5.
   Idea letters (one per lesson, Units 1-2 used A-S): T L1 Using the Area Model to Multiply · U L2 The Distributive Property of Multiplication ·
   V L3 Multiplying by a 2-digit number using the algorithm · W L4 Multiplying Multi-Digit Numbers · X L5 Multiplication Problems in the Real World.   Boss ideas: T6, U6, V6, W5, X5.
   The book is an activity book with no printed answers: the numbers and situations are the book's own (Ali's walk, Eman's garden, Omar's buses, Badir, Mazen, Lamiaa, Reeda,
   the fennec fox, Akram, the Eastern Desert rain, Ashraf, the Match the Model table, the sandstorm, Mona's restaurant) and EVERY number answer is computed (calc, checked by tools/check_questions.js).
   Pictures (math/m5_art.js): areaModel, unitGrid, longMult (pictures above a question).
   Review notes:
   - Lesson 1: "How many times will 10 need to be multiplied by itself" is asked as "how many 10s are multiplied together" (1,000 = 10 × 10 × 10: three 10s), the clear reading.
   - Lesson 3: the Eastern Desert gets LESS than 25 mm a year, so the 25-year answer is asked as "less than 625 mm".
   - Lesson 4: the Match the Model letters are not asked; the models are shown or described instead. Model B (6,209 × 33 with 18,627 twice) and model E (8,222 split by 5 and 4) are the wrong ones;
     "is 37,254 reasonable" uses 18,627 + 18,627 from model B. Ashraf's wrong second row is only named (357 × 30 = 10,710, not 10,521), without guessing why.
   - Lesson 5: the tahini answer in liters (86.4 L) is asked as the book asks.
   - Not asked: drawing your own area model, "how many different ways" (open), Writing About Math and Check Your Understanding items.
   Generated together with questions_m5c3_ar.js (same ids, phrasings order and answers). */'''
HEAD_AR = '''/* الصف الخامس الابتدائي · الرياضيات (عربي) · الوحدة الثالثة «ضرب الأعداد الصحيحة»، الفصل الدراسي الأول 2026/2027
   المصدر: كتاب الوزارة العربي، الوحدة الثالثة (صفحات 64–79)، المفهوم الأول «الضرب في عدد مكوّن من رقمين»: الدروس 1–5.
   حروف الأفكار: T الدرس 1 · U الدرس 2 · V الدرس 3 · W الدرس 4 · X الدرس 5. أفكار التحدي (Boss): T6, U6, V6, W5, X5.
   الملف مطابق لملف اللغات math/questions_m5c3.js (نفس الأفكار والترتيب والإجابات)، والكتابان متطابقان في الأعداد. الأرقام غربية، وكل عدد أو تعبير وسط الكلام داخل ltr.
   الكتاب كتاب نشاط بلا إجابات مطبوعة، لذلك كل إجابة رقمية محسوبة (calc) ويتحقق منها tools/check_questions.js.
   ملاحظات للمراجعة:
   - الدرس 1: سؤال «كم مرة يجب ضرب العدد 10 في نفسه» صيغ «كم عشرة نضربها في بعض» (1,000 = 10 × 10 × 10: ثلاث عشرات) لأنه القراءة الواضحة.
   - الدرس 3: الأمطار «أقل من 25 مليمترًا» في السنة، لذلك سؤال الـ 25 عامًا «أقل من 625 مليمترًا».
   - الدرس 4: لا نسأل عن حروف «اختر النموذج المناسب» (أ، ب، ...)، بل نعرض النموذج أو نصفه. النموذج ب (6,209 × 33 وفيه 18,627 مرتين) والنموذج هـ (8,222 مقسوم على 5 و4) هما الخطأ،
     وسؤال «هل 37,254 معقول» من 18,627 + 18,627 في النموذج ب. خطأ أشرف في السطر الثاني يُذكر فقط (357 × 30 = 10,710 وليس 10,521) بدون تخمين السبب.
   - الدرس 5: مطعم منى في «القصير» (الكتاب الإنجليزي Al-Quesyr)، وإجابة الطحينة باللتر (86.4) كما يطلب الكتاب.
   - لا يُسأل عن: رسم نموذجك الخاص، «كم طريقة مختلفة» (سؤال مفتوح)، و«الكتابة عن الرياضيات» و«تحقق من فهمك». */'''
LES_EN = ['Lesson 1 · Using the Area Model to Multiply (pages 65-67)', 'Lesson 2 · The Distributive Property of Multiplication (pages 68-71)', 'Lesson 3 · Multiplying by a 2-digit number using the algorithm (pages 72-74)', 'Lesson 4 · Multiplying Multi-Digit Numbers (pages 75-77)', 'Lesson 5 · Multiplication Problems in the Real World (pages 78-79)']
LES_AR = ['الدرس 1 · استخدام نموذج مساحة المستطيل في عملية الضرب (ص 65–67)', 'الدرس 2 · خاصية التوزيع في عملية الضرب (ص 68–71)', 'الدرس 3 · الضرب في عدد مكون من رقمين باستخدام الخوارزمية المعيارية (ص 72–74)', 'الدرس 4 · ضرب الأعداد متعددة الأرقام (ص 75–77)', 'الدرس 5 · مسائل كلامية على الضرب (ص 78–79)']

def write(ar):
    out = [HEAD_AR if ar else HEAD_EN, '(function () {',
           "window.CHAPTER = { id: 'm5c3', title: '%s', grade: '%s', track: '%s' };" % (('ضرب الأعداد الصحيحة', 'الصف الخامس', 'عربي') if ar else ('Multiplication with Whole Numbers', 'Grade 5', 'Languages')),
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
    open(OUT + ('/math/questions_m5c3_ar.js' if ar else '/math/questions_m5c3.js'), 'w').write('\n'.join(out))

write(False); write(True)
print(len(IDEAS), 'ideas', sum(len(I['variants']) for I in IDEAS), 'phrasings')
