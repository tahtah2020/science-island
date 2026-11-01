# Generator of the Grade 4 Math Units 3 and 4 question files (both books side by side, same ids, order and answers):
#   math/questions_mg4u3.js + math/questions_mg4u3_ar.js   «Concepts of Measurement / مفاهيم القياس»
#   math/questions_mg4u4.js + math/questions_mg4u4_ar.js   «Area and Perimeter / المساحة والمحيط»
# Run from the site folder: python3 math/tools/gen_mg4u34.py .   (edit here, never the four files by hand)
import json, re, sys
OUT = sys.argv[1]

def wrap(s):
    """Arabic: keep every run of digits / signs / clock times left to right."""
    if not isinstance(s, str) or '⁦' in s: return s
    s = s.replace('= ؟', '= ?').replace('× ؟', '× ?').replace('+ ؟', '+ ?').replace('− ؟', '− ?')
    return re.sub(r'[\d(][\d,.:/\s×+−=()?÷²]*[\d)?²]|\d', lambda m: '⁦' + m.group(0) + '⁩', s)

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
def RECT(w, h, top='', right='', bottom='', left='', mid=''): return {'fig': 'rectFig', 'pic': dict(w=w, h=h, top=top, right=right, bottom=bottom, left=left, mid=mid)}
def POLY(pts, labs): return {'fig': 'polyFig', 'pic': dict(pts=pts, labs=labs)}

ARU = {'cm': 'سم', 'mm': 'مم', 'm': 'م'}
def lab(x, ar):
    if isinstance(x, tuple): return x[1] if ar else x[0]
    if not ar or not x: return x
    return re.sub(r'\b(cm|mm|m)\b', lambda m: ARU[m.group(1)], x)

def tr(v, ar):
    out = {}
    for key, val in v.items():
        if key == 'q': out[key] = L(val, ar)
        elif key in ('options', 'left', 'right'): out[key] = [L(o, ar) for o in val]
        elif key == 'unit': out[key] = val[1] if ar else val[0]
        elif key == 'pic':
            out[key] = {kk: ([lab(x, ar) for x in vv] if kk == 'labs' else lab(vv, ar) if isinstance(vv, (tuple, str)) else vv) for kk, vv in val.items()}
        else: out[key] = val
    return out

CM = ('cm', 'سم'); M = ('m', 'م'); KM = ('km', 'كم'); MM = ('mm', 'مم'); KG = ('kg', 'كجم'); G = ('g', 'جم'); TON = ('tons', 'طن')
LT = ('L', 'لتر'); ML = ('mL', 'ملل'); MIN = ('minutes', 'دقيقة'); SEC = ('seconds', 'ثانية'); HR = ('hours', 'ساعة'); DAY = ('days', 'يوم')
CM2 = ('cm²', 'سم²'); M2 = ('m²', 'م²'); MM2 = ('mm²', 'مم²'); SQU = ('square units', 'وحدة مربعة'); UNITS = ('units', 'وحدة')

UNITS_IDEAS = {3: [], 4: []}
def idea(u, i, lesson, concept, explain, variants): UNITS_IDEAS[u].append(dict(id=i, lesson=lesson, concept=concept, explain=explain, variants=variants))

# =====================================================================================================
# UNIT 3 · Concepts of Measurement · ideas N (L1) O (L2) P (L3) Q (L4) R (L5) S (L6) T (L7)
# =====================================================================================================
# ---------- Lesson 1 · Measuring length (pages 40-42) ----------
idea(3, 'N1', 1, ('The best unit to measure a length', 'أفضل وحدة لقياس الطول'),
  ('Long distances like the length of the Nile River or the distance from Cairo to Alexandria are measured in kilometers. A very small length like the length of an ant is measured in millimeters. Centimeters and meters are for lengths in between.',
   'المسافات الطويلة مثل طول نهر النيل أو المسافة من القاهرة إلى الإسكندرية تُقاس بالكيلومتر. والطول الصغير جدًا مثل طول النملة يُقاس بالمليمتر. والسنتيمتر والمتر للأطوال التي بينهما.'),
  [mc('timed', 'easy', ('Which is the best unit to measure the length of the Nile River?', 'ما أفضل وحدة لقياس طول نهر النيل؟'), [('Kilometer', 'كيلومتر'), ('Meter', 'متر'), ('Centimeter', 'سنتيمتر'), ('Millimeter', 'مليمتر')], seconds=12),
   mc('timed', 'easy', ('Which is the best unit to measure the length of an ant?', 'ما أفضل وحدة لقياس طول النملة؟'), [('Millimeter', 'مليمتر'), ('Kilometer', 'كيلومتر'), ('Meter', 'متر'), ('Hectometer', 'هكتومتر')], seconds=12),
   mc('timed', 'easy', ('Which is the best unit to measure the distance from Cairo to Alexandria?', 'ما أفضل وحدة لقياس المسافة من القاهرة إلى الإسكندرية؟'), [('Kilometer', 'كيلومتر'), ('Centimeter', 'سنتيمتر'), ('Millimeter', 'مليمتر'), ('Meter', 'متر')], seconds=12),
   tf('normal', 'easy', ('The length of an ant is best measured in kilometers.', 'أفضل وحدة لقياس طول النملة هي الكيلومتر.'), False),
  ])
idea(3, 'N2', 1, ('The metric units chart', 'جدول الوحدات المترية'),
  ('The conversion chart: kilo- = 1,000 units, hecto- = 100 units, deca- = 10 units, then the unit, deci- = 1/10 of the unit, centi- = 1/100 of the unit, milli- = 1/1,000 of the unit. So 1 kilometer = 1,000 meters and 1 meter = 1,000 millimeters.',
   'جدول التحويل: كيلو = 1,000 وحدة، وهكتو = 100 وحدة، وديكا = 10 وحدات، ثم الوحدة، وديسي = 1/10 من الوحدة، وسنتي = 1/100 من الوحدة، وملي = 1/1,000 من الوحدة. إذن 1 كيلومتر = 1,000 متر و1 متر = 1,000 مليمتر.'),
  [fill('timed', 'easy', ('Kilo- means ___ units.', 'كيلو تعني ___ وحدة.'), ['1,000', '100', '10'], seconds=12),
   fill('timed', 'easy', ('Centi- means ___ of the unit.', 'سنتي تعني ___ من الوحدة.'), ['1/100', '1/10', '1/1,000'], seconds=12),
   match('normal', 'medium', ('Match each prefix with its value.', 'وصّل كل بادئة بقيمتها.'), [('Hecto-', 'هكتو'), ('Deca-', 'ديكا'), ('Milli-', 'ملي')], [('10 units', '10 وحدات'), ('1/1,000 of the unit', '1/1,000 من الوحدة'), ('100 units', '100 وحدة')], [2, 0, 1]),
   num('normal', 'medium', ('1 meter = ? millimeters (milli- = 1/1,000 of the unit)', '1 متر = ؟ مليمتر (ملي = 1/1,000 من الوحدة)'), '1000', unit=MM),
   tf('normal', 'medium', ('Deci- means 10 units.', 'ديسي تعني 10 وحدات.'), False),
  ])
idea(3, 'N3', 1, ('Converting kilometers, meters and centimeters', 'التحويل بين الكيلومتر والمتر والسنتيمتر'),
  ('1 km = 1,000 m and 1 m = 100 cm. To change big units to small ones, multiply: 3 km = 3 × 1,000 = 3,000 m, 10 m = 10 × 100 = 1,000 cm. To change small units to big ones, divide: 40,000 m = 40 km and 300 cm = 3 m.',
   '1 كم = 1,000 م و1 م = 100 سم. للتحويل من وحدة كبيرة إلى وحدة صغيرة نضرب: 3 كم = 3 × 1,000 = 3,000 م، و10 م = 10 × 100 = 1,000 سم. وللتحويل من وحدة صغيرة إلى وحدة كبيرة نقسم: 40,000 م = 40 كم و300 سم = 3 م.'),
  [num('timed', 'easy', ('1 km = ? m', '1 كم = ؟ م'), '1000', unit=M, seconds=10),
   num('timed', 'easy', ('1 m = ? cm', '1 م = ؟ سم'), '100', unit=CM, seconds=10),
   num('timed', 'easy', ('3 km = ? m', '3 كم = ؟ م'), '3*1000', unit=M, seconds=12),
   num('normal', 'easy', ('40,000 m = ? km', '40,000 م = ؟ كم'), '40000/1000', unit=KM),
   num('normal', 'easy', ('300 cm = ? m', '300 سم = ؟ م'), '300/100', unit=M),
   num('normal', 'easy', ('10 m = ? cm', '10 م = ؟ سم'), '10*100', unit=CM),
  ])
idea(3, 'N4', 1, ('Bar models: meters and centimeters', 'النماذج الشريطية: الأمتار والسنتيمترات'),
  ('Break a length into meters and centimeters: 140 cm = 1 m 40 cm, because 100 cm make 1 m. 230 cm = 2 m 30 cm and 478 cm = 4 m 78 cm. Back the other way: 5 m 91 cm = 500 + 91 = 591 cm.',
   'نحلل الطول إلى أمتار وسنتيمترات: 140 سم = 1 م و40 سم، لأن كل 100 سم تكوّن 1 م. و230 سم = 2 م و30 سم، و478 سم = 4 م و78 سم. والعكس: 5 م و91 سم = 500 + 91 = 591 سم.'),
  [mc('timed', 'easy', ('140 cm = ?', '140 سم = ؟'), [('1 m 40 cm', '1 م و40 سم'), ('14 m', '14 م'), ('1 m 4 cm', '1 م و4 سم'), ('140 m', '140 م')], seconds=14),
   mc('normal', 'easy', ('230 cm = ?', '230 سم = ؟'), [('2 m 30 cm', '2 م و30 سم'), ('23 m', '23 م'), ('2 m 3 cm', '2 م و3 سم'), ('20 m 30 cm', '20 م و30 سم')]),
   mc('normal', 'medium', ('478 cm = ?', '478 سم = ؟'), [('4 m 78 cm', '4 م و78 سم'), ('47 m 8 cm', '47 م و8 سم'), ('4 m 7 cm', '4 م و7 سم'), ('478 m', '478 م')]),
   num('normal', 'medium', ('5 m 91 cm = ? cm', '5 م و91 سم = ؟ سم'), '5*100+91', unit=CM),
   num('normal', 'medium', ('478 cm = 4 m and ? cm', '478 سم = 4 م و؟ سم'), '478-400', unit=CM),
  ])
idea(3, 'N5', 1, ('Challenge: the ant line and the nest', 'تحدٍّ: صف النمل وبيت النمل'),
  ('100,000 ants of 1 cm each in a line make 100,000 cm = 1,000 m = 1 km. The anthill is 8 m deep: 8 × 100 = 800 cm. An ant carried 10 loads, 1 km each: 10 km = 10,000 m = 1,000,000 cm.',
   '100,000 نملة طول كل منها 1 سم في صف واحد تكوّن 100,000 سم = 1,000 م = 1 كم. وعمق تل النمل 8 م: 8 × 100 = 800 سم. ونقلت نملة 10 حمولات مسافة كل منها 1 كم: 10 كم = 10,000 م = 1,000,000 سم.'),
  [num('boss', 'hard', ('100,000 ants line up end to end and each ant is 1 centimeter long. How many meters long would the line be?', 'اصطفّت 100,000 نملة بجانب بعضها، وطول كل نملة 1 سنتيمتر. كم مترًا سيكون طول الصف؟'), '100000/100', unit=M),
   num('boss', 'hard', ('The line of 100,000 ants is 1,000 meters long. How many kilometers is that?', 'طول صف الـ 100,000 نملة 1,000 متر. كم كيلومترًا يساوي ذلك؟'), '1000/1000', unit=KM),
   num('boss', 'hard', ('Scientists found the anthill was 8 meters deep. How many centimeters is that?', 'وجد العلماء أن تل النمل عمقه 8 أمتار. كم سنتيمترًا يساوي ذلك؟'), '8*100', unit=CM),
   num('boss', 'hard', ('One ant carried 10 loads of soil a week, each 1 kilometer to the surface. How many meters did it travel?', 'نقلت نملة واحدة 10 حمولات من التربة في أسبوع، كل حمولة مسافة 1 كيلومتر إلى السطح. كم مترًا قطعت؟'), '10*1000', unit=M),
   num('boss', 'hard', ('The ant traveled 10 km while moving soil. How many centimeters is that?', 'قطعت النملة 10 كم أثناء نقل التربة. كم سنتيمترًا يساوي ذلك؟'), '10*1000*100', unit=CM),
  ])

# ---------- Lesson 2 · Measuring Mass (pages 43-44) ----------
idea(3, 'O1', 2, ('Tons, kilograms and grams', 'الطن والكيلوجرام والجرام'),
  ('1 ton = 1,000 kg and 1 kg = 1,000 g. Big unit to small unit: multiply by 1,000: 3 kg = 3,000 g, 5 tons = 5,000 kg. Small unit to big unit: divide by 1,000: 5,000 g = 5 kg and 30,000 g = 30 kg.',
   '1 طن = 1,000 كجم و1 كجم = 1,000 جم. من وحدة كبيرة إلى وحدة صغيرة نضرب في 1,000: 3 كجم = 3,000 جم، و5 طن = 5,000 كجم. ومن وحدة صغيرة إلى وحدة كبيرة نقسم على 1,000: 5,000 جم = 5 كجم و30,000 جم = 30 كجم.'),
  [num('timed', 'easy', ('1 kg = ? g', '1 كجم = ؟ جم'), '1000', unit=G, seconds=10),
   num('timed', 'easy', ('1 ton = ? kg', '1 طن = ؟ كجم'), '1000', unit=KG, seconds=10),
   num('timed', 'easy', ('3 kg = ? g', '3 كجم = ؟ جم'), '3*1000', unit=G, seconds=12),
   num('timed', 'easy', ('8 kg = ? g', '8 كجم = ؟ جم'), '8*1000', unit=G, seconds=12),
   num('normal', 'easy', ('5,000 g = ? kg', '5,000 جم = ؟ كجم'), '5000/1000', unit=KG),
   num('normal', 'easy', ('30,000 g = ? kg', '30,000 جم = ؟ كجم'), '30000/1000', unit=KG),
   num('normal', 'easy', ('5 tons = ? kg', '5 طن = ؟ كجم'), '5*1000', unit=KG),
  ])
idea(3, 'O2', 2, ('Bar models: kilograms and grams', 'النماذج الشريطية: الكيلوجرامات والجرامات'),
  ('2,300 g = 2,000 g + 300 g = 2 kg 300 g, because 1,000 g = 1 kg. In the same way 4,590 g = 4 kg 590 g and 8,400 g = 8 kg 400 g. Back the other way: 7 kg 414 g = 7,000 + 414 = 7,414 g, and 2 tons 30 kg = 2,030 kg.',
   '2,300 جم = 2,000 جم + 300 جم = 2 كجم و300 جم، لأن 1,000 جم = 1 كجم. وبنفس الطريقة 4,590 جم = 4 كجم و590 جم، و8,400 جم = 8 كجم و400 جم. والعكس: 7 كجم و414 جم = 7,000 + 414 = 7,414 جم، و2 طن و30 كجم = 2,030 كجم.'),
  [mc('timed', 'easy', ('2,300 g = ?', '2,300 جم = ؟'), [('2 kg 300 g', '2 كجم و300 جم'), ('23 kg', '23 كجم'), ('2 kg 3 g', '2 كجم و3 جم'), ('230 kg', '230 كجم')], seconds=14),
   mc('normal', 'easy', ('4,590 g = ?', '4,590 جم = ؟'), [('4 kg 590 g', '4 كجم و590 جم'), ('45 kg 90 g', '45 كجم و90 جم'), ('4 kg 59 g', '4 كجم و59 جم'), ('459 kg', '459 كجم')]),
   num('normal', 'medium', ('8,400 g = 8 kg and ? g', '8,400 جم = 8 كجم و؟ جم'), '8400-8000', unit=G),
   num('normal', 'medium', ('7 kg 414 g = ? g', '7 كجم و414 جم = ؟ جم'), '7*1000+414', unit=G),
   num('normal', 'medium', ('2 tons 30 kg = ? kg', '2 طن و30 كجم = ؟ كجم'), '2*1000+30', unit=KG),
   mc('normal', 'medium', ('A colony of black ants weighs 3,493 grams. Write it using kilograms and grams.', 'تُقدَّر كتلة مستعمرة النمل الأسود بـ 3,493 جرامًا. أعد كتابتها بالكيلوجرامات والجرامات.'),
      [('3 kg 493 g', '3 كجم و493 جم'), ('34 kg 93 g', '34 كجم و93 جم'), ('3 kg 49 g', '3 كجم و49 جم'), ('349 kg 3 g', '349 كجم و3 جم')]),
  ])
idea(3, 'O3', 2, ('Challenge: the zero that holds a place', 'تحدٍّ: الصفر الذي يحفظ المكان'),
  ('A student wrote 7 m 45 cm = 7,045 cm. That is wrong: 1 m = 100 cm (not 1,000), so 7 m = 700 cm and 7 m 45 cm = 745 cm. With grams, 1 kg = 1,000 g, so 14 kg 89 g = 14,000 + 89 = 14,089 g: the zero keeps the hundreds place.',
   'كتب تلميذ 7 م و45 سم = 7,045 سم. هذا خطأ: 1 م = 100 سم (وليس 1,000)، إذن 7 م = 700 سم و7 م و45 سم = 745 سم. ومع الجرامات 1 كجم = 1,000 جم، إذن 14 كجم و89 جم = 14,000 + 89 = 14,089 جم: الصفر يحفظ خانة المئات.'),
  [num('boss', 'hard', ('Convert 7 meters 45 centimeters to centimeters.', 'حوّل 7 أمتار و45 سنتيمترًا إلى سنتيمترات.'), '7*100+45', unit=CM),
   mc('boss', 'hard', ('A student wrote: 7 m 45 cm = 7,045 cm. What did the student do wrong?', 'كتب تلميذ: 7 م و45 سم = 7,045 سم. ما الخطأ الذي وقع فيه؟'),
      [('Used 1 m = 1,000 cm instead of 100 cm', 'اعتبر 1 م = 1,000 سم بدلًا من 100 سم'), ('Added 7 and 45', 'جمع 7 و45'), ('Nothing: the answer is right', 'لا خطأ: الإجابة صحيحة'), ('Forgot to divide by 100', 'نسي القسمة على 100')]),
   num('boss', 'hard', ('An ant colony weighs 14 kilograms and 89 grams. Write that weight in grams.', 'تُقدَّر كتلة مستعمرة نمل أخرى بـ 14 كيلوجرامًا و89 جرامًا. أعد كتابة هذه الكتلة بالجرامات.'), '14*1000+89', unit=G),
   mc('boss', 'hard', ('Which is equal to 14 kg 89 g?', 'أي مما يلي يساوي 14 كجم و89 جم؟'), ['14,089 g', '1,489 g', '14,890 g', '140,089 g']),
  ])

# ---------- Lesson 3 · Units of Capacity (pages 45-47) ----------
idea(3, 'P1', 3, ('Liters and milliliters', 'اللتر والملليلتر'),
  ('1 L = 1,000 mL. Liters to milliliters: multiply by 1,000: 6 L = 6,000 mL, 9 L = 9,000 mL, 45 L = 45,000 mL. Milliliters to liters: divide by 1,000: 10,000 mL = 10 L.',
   '1 لتر = 1,000 ملل. من اللتر إلى الملليلتر نضرب في 1,000: 6 لترات = 6,000 ملل، و9 لترات = 9,000 ملل، و45 لترًا = 45,000 ملل. ومن الملليلتر إلى اللتر نقسم على 1,000: 10,000 ملل = 10 لترات.'),
  [num('timed', 'easy', ('1 L = ? mL', '1 لتر = ؟ ملل'), '1000', unit=ML, seconds=10),
   num('timed', 'easy', ('6 L = ? mL', '6 لترات = ؟ ملل'), '6*1000', unit=ML, seconds=12),
   num('timed', 'easy', ('6,000 mL = ? L', '6,000 ملل = ؟ لتر'), '6000/1000', unit=LT, seconds=12),
   num('normal', 'easy', ('10,000 mL = ? L', '10,000 ملل = ؟ لتر'), '10000/1000', unit=LT),
   num('normal', 'medium', ('A car is filled with 45 liters of petrol. How many milliliters would that be?', 'تمتلئ السيارة بمقدار 45 لترًا من البنزين. ما عدد الملليلترات المستخدمة لملء السيارة؟'), '45*1000', unit=ML),
  ])
idea(3, 'P2', 3, ('Bar models: liters and milliliters', 'النماذج الشريطية: اللترات والملليلترات'),
  ('5,403 mL = 5,000 mL + 403 mL = 5 L 403 mL. In the same way 9,425 mL = 9 L 425 mL and 6,360 mL = 6 L 360 mL. Back the other way: 8 L 910 mL = 8,910 mL.',
   '5,403 ملل = 5,000 ملل + 403 ملل = 5 لترات و403 ملل. وبنفس الطريقة 9,425 ملل = 9 لترات و425 ملل، و6,360 ملل = 6 لترات و360 ملل. والعكس: 8 لترات و910 ملل = 8,910 ملل.'),
  [mc('timed', 'easy', ('5,403 mL = ?', '5,403 ملل = ؟'), [('5 L 403 mL', '5 لترات و403 ملل'), ('54 L 3 mL', '54 لترًا و3 ملل'), ('5 L 43 mL', '5 لترات و43 ملل'), ('540 L', '540 لترًا')], seconds=14),
   mc('normal', 'easy', ('9,425 mL = ?', '9,425 ملل = ؟'), [('9 L 425 mL', '9 لترات و425 ملل'), ('94 L 25 mL', '94 لترًا و25 ملل'), ('9 L 42 mL', '9 لترات و42 ملل'), ('942 L', '942 لترًا')]),
   num('normal', 'medium', ('6,360 mL = 6 L and ? mL', '6,360 ملل = 6 لترات و؟ ملل'), '6360-6000', unit=ML),
   num('normal', 'medium', ('8 L 910 mL = ? mL', '8 لترات و910 ملل = ؟ ملل'), '8*1000+910', unit=ML),
  ])
idea(3, 'P3', 3, ('Mass or capacity? The Sobia recipe', 'كتلة أم سعة؟ وصفة السوبيا'),
  ('Sobia: 100 g rice, 500 mL water, 750 mL cold milk, 100 g caster sugar, 5 mL vanilla, 500 mL coconut milk. Solids in grams (rice, sugar) are measured by mass; liquids in milliliters are measured by capacity. Liquids: 500 + 750 + 5 + 500 = 1,755 mL = 1 L 755 mL.',
   'السوبيا: 100 جم أرز، 500 ملل ماء، 750 ملل حليب بارد، 100 جم سكر ناعم، 5 ملل فانيليا، 500 ملل حليب جوز الهند. المكونات بالجرام (الأرز والسكر) تُقاس بالكتلة، والسوائل بالملليلتر تُقاس بالسعة. السوائل: 500 + 750 + 5 + 500 = 1,755 ملل = 1 لتر و755 ملل.'),
  [multi('normal', 'medium', ('Sobia recipe: which ingredients are measured by mass? (Choose all.)', 'وصفة السوبيا: ما المكونات التي تُقاس بالكتلة؟ (اختر كل الإجابات الصحيحة)'),
         [('100 g rice', '100 جم أرز'), ('100 g caster sugar', '100 جم سكر ناعم'), ('500 mL water', '500 ملل ماء'), ('5 mL vanilla', '5 ملل فانيليا')], [0, 1]),
   multi('normal', 'medium', ('Sobia recipe: which ingredients are measured by capacity? (Choose all.)', 'وصفة السوبيا: ما المكونات التي تُقاس بالسعة؟ (اختر كل الإجابات الصحيحة)'),
         [('750 mL cold milk', '750 ملل حليب بارد'), ('500 mL coconut milk', '500 ملل حليب جوز الهند'), ('100 g rice', '100 جم أرز'), ('100 g caster sugar', '100 جم سكر ناعم')], [0, 1]),
   num('normal', 'hard', ('Sobia liquids: 500 mL water, 750 mL milk, 5 mL vanilla, 500 mL coconut milk. What is the total in milliliters?', 'سوائل السوبيا: 500 ملل ماء و750 ملل حليب و5 ملل فانيليا و500 ملل حليب جوز الهند. ما مجموعها بالملليلتر؟'), '500+750+5+500', unit=ML),
   mc('normal', 'hard', ('1,755 mL of liquid ingredients = ?', '1,755 ملل من المكونات السائلة = ؟'), [('1 L 755 mL', '1 لتر و755 ملل'), ('17 L 55 mL', '17 لترًا و55 ملل'), ('1 L 75 mL', '1 لتر و75 ملل'), ('175 L', '175 لترًا')]),
   match('normal', 'medium', ('Match each kind of measurement with one of its units.', 'وصّل كل نوع من القياس بإحدى وحداته.'), [('Length', 'الطول'), ('Mass', 'الكتلة'), ('Capacity', 'السعة'), ('Time', 'الوقت')],
         [('kilogram', 'كيلوجرام'), ('minute', 'دقيقة'), ('meter', 'متر'), ('liter', 'لتر')], [2, 0, 3, 1]),
  ])
idea(3, 'P4', 3, ('Challenge: multistep conversions', 'تحدٍّ: عمليات التحويل متعددة الخطوات'),
  ('Change everything to milliliters first. 3 L − 1 L 500 mL = 3,000 − 1,500 = 1,500 mL. 20 L 500 mL − 15 L 250 mL = 20,500 − 15,250 = 5,250 mL. Doha’s tank: 10 L − 5 L 245 mL = 10,000 − 5,245 = 4,755 mL.',
   'نحوّل كل شيء إلى ملليلترات أولًا. 3 لترات − 1 لتر و500 ملل = 3,000 − 1,500 = 1,500 ملل. و20 لترًا و500 ملل − 15 لترًا و250 ملل = 20,500 − 15,250 = 5,250 ملل. وحوض ضحى: 10 لترات − 5 لترات و245 ملل = 10,000 − 5,245 = 4,755 ملل.'),
  [num('boss', 'hard', ('A family drank 1 liter 500 milliliters of orange juice at breakfast. There were 3 liters before breakfast. How many milliliters are left?', 'شربت أسرة لترًا واحدًا و500 ملليلتر من عصير البرتقال في وجبة الإفطار. إذا كان هناك 3 لترات قبل الإفطار، فكم ملليلترًا تبقّى؟'), '3000-1500', unit=ML),
   num('boss', 'hard', ('A car was filled with 20 liters 500 milliliters of petrol. At the end of the day 15 liters 250 milliliters were left. How many milliliters were used?', 'امتلأ خزان الوقود في سيارة بمقدار 20 لترًا و500 ملليلتر من البنزين. في نهاية اليوم تبقّى 15 لترًا و250 ملليلترًا. كم ملليلترًا تم استخدامه؟'), '20500-15250', unit=ML),
   num('boss', 'hard', ('Doha’s fish tank contains 5 liters 245 milliliters of water. It can hold 10 liters. How many more milliliters does she need to fill it?', 'يحتوي حوض السمك الذي تملكه ضحى على 5 لترات و245 ملليلترًا من الماء. إذا كان الحوض يسع 10 لترات، فكم ملليلترًا إضافيًا تحتاج لملئه؟'), '10000-5245', unit=ML),
   mc('boss', 'hard', ('20 L 500 mL − 15 L 250 mL = ?', '20 لترًا و500 ملل − 15 لترًا و250 ملل = ؟'), [('5 L 250 mL', '5 لترات و250 ملل'), ('5 L 750 mL', '5 لترات و750 ملل'), ('35 L 750 mL', '35 لترًا و750 ملل'), ('4 L 250 mL', '4 لترات و250 ملل')]),
  ])

# ---------- Lesson 4 · Units of Measuring Time (pages 48-49) ----------
idea(3, 'Q1', 4, ('Seconds, minutes, hours, days, weeks', 'الثواني والدقائق والساعات والأيام والأسابيع'),
  ('The ratio tables: 1 minute = 60 seconds, 1 hour = 60 minutes, 1 day = 24 hours, 1 week = 7 days. To convert, multiply: 5 minutes = 5 × 60 = 300 seconds, 3 days = 3 × 24 = 72 hours, 6 weeks = 6 × 7 = 42 days.',
   'جداول النسب: 1 دقيقة = 60 ثانية، و1 ساعة = 60 دقيقة، و1 يوم = 24 ساعة، و1 أسبوع = 7 أيام. للتحويل نضرب: 5 دقائق = 5 × 60 = 300 ثانية، و3 أيام = 3 × 24 = 72 ساعة، و6 أسابيع = 6 × 7 = 42 يومًا.'),
  [num('timed', 'easy', ('1 minute = ? seconds', '1 دقيقة = ؟ ثانية'), '60', unit=SEC, seconds=10),
   num('timed', 'easy', ('1 day = ? hours', '1 يوم = ؟ ساعة'), '24', unit=HR, seconds=10),
   num('timed', 'easy', ('1 week = ? days', '1 أسبوع = ؟ أيام'), '7', unit=DAY, seconds=10),
   num('timed', 'medium', ('5 minutes = ? seconds', '5 دقائق = ؟ ثانية'), '5*60', unit=SEC, seconds=15),
   num('normal', 'medium', ('3 hours = ? minutes', '3 ساعات = ؟ دقيقة'), '3*60', unit=MIN),
   num('normal', 'medium', ('10 days = ? hours', '10 أيام = ؟ ساعة'), '10*24', unit=HR),
   num('normal', 'medium', ('6 weeks = ? days', '6 أسابيع = ؟ يوم'), '6*7', unit=DAY),
  ])
idea(3, 'Q2', 4, ('Mixed units of time', 'وحدات زمنية مختلطة'),
  ('Convert the big unit, then add the rest: 10 hours 30 minutes = 10 × 60 + 30 = 630 minutes. 6 minutes 15 seconds = 6 × 60 + 15 = 375 seconds. 4 days 20 hours = 4 × 24 + 20 = 116 hours.',
   'نحوّل الوحدة الكبيرة ثم نضيف الباقي: 10 ساعات و30 دقيقة = 10 × 60 + 30 = 630 دقيقة. و6 دقائق و15 ثانية = 6 × 60 + 15 = 375 ثانية. و4 أيام و20 ساعة = 4 × 24 + 20 = 116 ساعة.'),
  [num('normal', 'medium', ('10 hours 30 minutes = ? minutes', '10 ساعات و30 دقيقة = ؟ دقيقة'), '10*60+30', unit=MIN),
   num('normal', 'medium', ('6 minutes 15 seconds = ? seconds', '6 دقائق و15 ثانية = ؟ ثانية'), '6*60+15', unit=SEC),
   num('normal', 'medium', ('4 days 20 hours = ? hours', '4 أيام و20 ساعة = ؟ ساعة'), '4*24+20', unit=HR),
   mc('normal', 'medium', ('Which is the first step for 4 days 20 hours = ? hours?', 'ما الخطوة الأولى لحل 4 أيام و20 ساعة = ؟ ساعة؟'), [('4 × 24 = 96', '4 × 24 = 96'), ('4 × 60 = 240', '4 × 60 = 240'), ('4 + 20 = 24', '4 + 20 = 24'), ('20 × 24 = 480', '20 × 24 = 480')]),
  ])
idea(3, 'Q3', 4, ('Challenge: how hard do ants work?', 'تحدٍّ: ما مدى صعوبة عمل النمل؟'),
  ('An average worker ant works about 19 hours a day: in 3 days that is 19 × 3 = 57 hours. A worker ant takes 240 naps a day, 1 minute each: 240 minutes = 240 ÷ 60 = 4 hours.',
   'تعمل عاملات النمل في المتوسط حوالي 19 ساعة في اليوم: في 3 أيام 19 × 3 = 57 ساعة. وتأخذ عاملات النمل 240 غفوة في اليوم، كل غفوة دقيقة واحدة: 240 دقيقة = 240 ÷ 60 = 4 ساعات.'),
  [num('boss', 'hard', ('An average ant works for 19 hours a day. How many hours does an ant work in 3 days?', 'تعمل عاملات النمل في المتوسط حوالي 19 ساعة في اليوم. ما عدد الساعات التي يعمل فيها النمل لثلاثة أيام؟'), '19*3', unit=HR),
   num('boss', 'hard', ('A worker ant takes 240 naps a day. Each nap lasts 1 minute. About how many hours did the ant nap?', 'تأخذ عاملات النمل 240 غفوة في اليوم، تستمر كل غفوة دقيقة واحدة. ما عدد الساعات التي يستغرقها النمل في الغفوات؟'), '240/60', unit=HR),
   num('boss', 'hard', ('How many minutes does a worker ant work in a day (19 hours)?', 'كم دقيقة تعمل عاملة النمل في اليوم (19 ساعة)؟'), '19*60', unit=MIN),
   tf('boss', 'hard', ('240 minutes = 4 hours.', '240 دقيقة = 4 ساعات.'), True),
  ])

# ---------- Lesson 5 · Elapsed Time (pages 50-52) ----------
idea(3, 'R1', 5, ('Hours and minutes to minutes', 'من ساعات ودقائق إلى دقائق'),
  ('Dalia drives 2 hours and 15 minutes. A student wrote 2 × 6 = 12, 12 + 15 = 27 minutes: wrong, because 1 hour = 60 minutes, not 6. Right: 2 × 60 = 120, 120 + 15 = 135 minutes.',
   'تستغرق داليا ساعتين و15 دقيقة في القيادة. كتب تلميذ 2 × 6 = 12، و12 + 15 = 27 دقيقة: خطأ، لأن الساعة = 60 دقيقة وليست 6. الصحيح: 2 × 60 = 120، و120 + 15 = 135 دقيقة.'),
  [num('normal', 'medium', ('It takes Dalia 2 hours and 15 minutes to drive to her grandmother’s house. How many minutes does the drive take?', 'تستغرق داليا ساعتين و15 دقيقة في القيادة للوصول إلى منزل جدتها. ما عدد الدقائق المستغرقة في القيادة؟'), '2*60+15', unit=MIN),
   mc('normal', 'medium', ('A student solved: 2 × 6 = 12, 12 + 15 = 27 minutes. What is the mistake?', 'حل تلميذ: 2 × 6 = 12، و12 + 15 = 27 دقيقة. ما الخطأ؟'),
      [('1 hour is 60 minutes, not 6', 'الساعة 60 دقيقة وليست 6'), ('He should subtract 15', 'كان يجب أن يطرح 15'), ('1 hour is 100 minutes', 'الساعة 100 دقيقة'), ('There is no mistake', 'لا يوجد خطأ')]),
   num('timed', 'easy', ('1 hour 30 minutes = ? minutes', 'ساعة و30 دقيقة = ؟ دقيقة'), '60+30', unit=MIN, seconds=14),
  ])
idea(3, 'R2', 5, ('Finding the end time', 'إيجاد وقت الانتهاء'),
  ('Add the hours, then the minutes; 60 minutes make a new hour. Farah started running at 8:35 a.m. for 1 hour 30 minutes: 8:35 + 1 hour = 9:35, + 30 minutes = 10:05 a.m. 3:25 + 1:26 = 4:51 and 3:25 + 45 minutes = 4:10.',
   'نجمع الساعات ثم الدقائق، وكل 60 دقيقة تكوّن ساعة جديدة. بدأت فرح الركض في الساعة 8:35 صباحًا لمدة ساعة و30 دقيقة: 8:35 + ساعة = 9:35، + 30 دقيقة = 10:05 صباحًا. و3:25 + 1:26 = 4:51، و3:25 + 45 دقيقة = 4:10.'),
  [mc('normal', 'medium', ('Farah’s goal was to run for 1 hour and 30 minutes. She started at 8:35 a.m. What time did she finish?', 'كان هدف فرح الركض لمدة ساعة و30 دقيقة. إذا بدأت الركض في الساعة 8:35 صباحًا، متى ستنتهي؟'),
      [('10:05 a.m.', '10:05 صباحًا'), ('9:65 a.m.', '9:65 صباحًا'), ('9:05 a.m.', '9:05 صباحًا'), ('10:35 a.m.', '10:35 صباحًا')]),
   mc('normal', 'medium', ('3:25 + 1:26 = ?', '3:25 + 1:26 = ؟'), ['4:51', '4:41', '5:51', '3:51']),
   mc('normal', 'medium', ('3:25 + 45 minutes = ?', '3:25 + 45 دقيقة = ؟'), ['4:10', '3:70', '4:20', '3:10']),
   mc('normal', 'medium', ('5:43 − 1:25 = ?', '5:43 − 1:25 = ؟'), ['4:18', '4:28', '3:18', '6:68']),
  ])
idea(3, 'R3', 5, ('How long did it take?', 'كم استغرق من الوقت؟'),
  ('Elapsed time is the time that passes from the start to the end. A worker ant left at 6:30 a.m. and returned at 7:42 a.m.: from 6:30 to 7:30 is 1 hour, from 7:30 to 7:42 is 12 minutes, so 1 hour 12 minutes = 72 minutes.',
   'الوقت المنقضي هو الوقت الذي يمر من البداية إلى النهاية. غادرت عاملة نمل الساعة 6:30 صباحًا وعادت الساعة 7:42 صباحًا: من 6:30 إلى 7:30 ساعة واحدة، ومن 7:30 إلى 7:42 اثنتا عشرة دقيقة، إذن ساعة و12 دقيقة = 72 دقيقة.'),
  [num('normal', 'medium', ('A worker ant left at 6:30 a.m. and returned at 7:42 a.m. How many minutes was it looking for food?', 'غادرت عاملة النمل الساعة 6:30 صباحًا وعادت الساعة 7:42 صباحًا. كم دقيقة استغرقت في البحث عن الطعام؟'), '60+12', unit=MIN),
   mc('normal', 'medium', ('From 6:30 a.m. to 7:42 a.m. is ___.', 'من 6:30 صباحًا إلى 7:42 صباحًا = ___.'), [('1 hour 12 minutes', 'ساعة و12 دقيقة'), ('1 hour 42 minutes', 'ساعة و42 دقيقة'), ('2 hours 12 minutes', 'ساعتان و12 دقيقة'), ('12 minutes', '12 دقيقة')]),
   fill('timed', 'easy', ('The time that passes from the start of an event to its end is the ___ time.', 'الوقت الذي يمر من بداية الحدث إلى نهايته هو الوقت ___.'), [('elapsed', 'المنقضي'), ('digital', 'الرقمي'), ('analog', 'التناظري')], seconds=14),
  ])
idea(3, 'R4', 5, ('Why 12 and 60?', 'لماذا 12 و60؟'),
  ('The Sumerians used a system of 12 and 60 starting in 3,500 B.C. The joints of the 4 fingers on one hand, counted with the thumb, make 12. Babylonian astronomers divided the hour into 60 minutes and the minute into 60 seconds with their Base 60 system.',
   'استخدم السومريون نظام العد الاثنا عشري ونظام العد الستيني بدءًا من سنة 3,500 قبل الميلاد. عدد المفاصل في أصابع كل يد، ما عدا إصبع الإبهام، يجعل العد إلى 12 بواسطة الإبهام ممكنًا. وحدد علماء الفلك البابليون تقسيم الساعة إلى 60 دقيقة و60 ثانية باستخدام نظام العد الستيني.'),
  [mc('normal', 'medium', ('Counting with the thumb, how many finger joints are there on one hand (without the thumb)?', 'عند العد بالإبهام، كم عدد مفاصل أصابع اليد الواحدة (ما عدا الإبهام)؟'), ['12', '10', '5', '60']),
   mc('normal', 'medium', ('Who divided the hour into 60 minutes and 60 seconds, using a Base 60 system?', 'من حدد تقسيم الساعة إلى 60 دقيقة و60 ثانية باستخدام نظام العد الستيني؟'),
      [('Babylonian astronomers', 'علماء الفلك البابليون'), ('The Romans', 'الرومان'), ('Modern scientists', 'علماء العصر الحديث'), ('The Greeks', 'الإغريق')]),
   tf('normal', 'easy', ('There are 12 hours in the morning and 12 hours in the afternoon.', 'يوجد 12 ساعة في الصباح و12 ساعة في المساء.'), True),
  ])
idea(3, 'R5', 5, ('Challenge: Jana and Maha’s movies', 'تحدٍّ: أفلام جنى ومها'),
  ('Three movies: 1 hour 22 minutes, 2 hours 12 minutes and 1 hour 57 minutes. Together: 4 hours 91 minutes = 5 hours 31 minutes, more than 5 hours, so not enough time. The two shortest: 1:22 + 1:57 = 3 hours 19 minutes; starting at 5:30 p.m. they end at 8:49 p.m.',
   'ثلاثة أفلام: ساعة و22 دقيقة، وساعتان و12 دقيقة، وساعة و57 دقيقة. معًا: 4 ساعات و91 دقيقة = 5 ساعات و31 دقيقة، أكثر من 5 ساعات، إذن الوقت غير كافٍ. أقصر فيلمين: 1:22 + 1:57 = 3 ساعات و19 دقيقة؛ إذا بدأتا الساعة 5:30 مساءً تنتهيان الساعة 8:49 مساءً.'),
  [mc('boss', 'hard', ('Jana and Maha have 5 hours to watch three movies: 1 h 22 min, 2 h 12 min and 1 h 57 min. Do they have enough time?', 'لدى جنى ومها 5 ساعات لمشاهدة ثلاثة أفلام: ساعة و22 دقيقة، وساعتان و12 دقيقة، وساعة و57 دقيقة. هل لديهما الوقت الكافي؟'),
      [('No: the movies last 5 h 31 min', 'لا: الأفلام مدتها 5 ساعات و31 دقيقة'), ('Yes: the movies last 4 h 31 min', 'نعم: الأفلام مدتها 4 ساعات و31 دقيقة'), ('Yes: exactly 5 hours', 'نعم: 5 ساعات بالضبط'), ('No: the movies last 6 h 31 min', 'لا: الأفلام مدتها 6 ساعات و31 دقيقة')]),
   num('boss', 'hard', ('How many minutes do the three movies last together (1 h 22 min, 2 h 12 min, 1 h 57 min)?', 'كم دقيقة مدة الأفلام الثلاثة معًا (ساعة و22 دقيقة، ساعتان و12 دقيقة، ساعة و57 دقيقة)؟'), '82+132+117', unit=MIN),
   mc('boss', 'hard', ('They watch only the two shortest movies (1 h 22 min and 1 h 57 min), starting at 5:30 p.m. What time will the movies end?', 'قررت الفتاتان مشاهدة أقصر فيلمين فقط (ساعة و22 دقيقة وساعة و57 دقيقة)، وبدأتا الساعة 5:30 مساءً. متى سينتهي الفيلمان؟'),
      [('8:49 p.m.', '8:49 مساءً'), ('7:49 p.m.', '7:49 مساءً'), ('8:19 p.m.', '8:19 مساءً'), ('9:49 p.m.', '9:49 مساءً')]),
   num('boss', 'hard', ('How many minutes do the two shortest movies last (1 h 22 min and 1 h 57 min)?', 'كم دقيقة مدة أقصر فيلمين (ساعة و22 دقيقة وساعة و57 دقيقة)؟'), '82+117', unit=MIN),
  ])

# ---------- Lesson 6 · Applications of measurement 1 (pages 53-55) ----------
idea(3, 'S1', 6, ('Adding and subtracting masses', 'جمع الكتل وطرحها'),
  ('Use the same unit before you add or subtract. Colony A: 950 − 25 − 37 = 888 g of food left. Aya’s potatoes: 2 kg 920 g = 2,920 g; onions: 2,920 − 1,075 = 1,845 g; together 2,920 + 1,845 = 4,765 g. Zeina: 8 kg + 10 kg + 500 g + 225 g + 275 g = 18 kg + 1,000 g = 19 kg.',
   'نوحّد الوحدة قبل الجمع أو الطرح. المستعمرة (أ): 950 − 25 − 37 = 888 جم من الطعام متبقٍّ. بطاطس آية: 2 كجم و920 جم = 2,920 جم، والبصل: 2,920 − 1,075 = 1,845 جم، ومعًا 2,920 + 1,845 = 4,765 جم. زينة: 8 كجم + 10 كجم + 500 جم + 225 جم + 275 جم = 18 كجم + 1,000 جم = 19 كجم.'),
  [num('normal', 'medium', ('In Colony A the ants collect 950 grams of food. They consume 25 grams on Monday and 37 grams on Tuesday. How many grams are left?', 'في المستعمرة (أ) يجمع النمل 950 جرامًا من الطعام. إذا كان النمل يستهلك 25 جرامًا يوم الاثنين و37 جرامًا يوم الثلاثاء، كم جرامًا من الطعام متبقٍّ؟'), '950-25-37', unit=G),
   num('normal', 'hard', ('Aya’s potatoes weighed 2 kilograms 920 grams. Her onions weighed 1,075 grams less. How many grams did the onions weigh?', 'اشترت آية بطاطس كتلتها 2 كيلوجرام و920 جرامًا، واشترت بصلًا كتلته أقل من كتلة البطاطس بمقدار 1,075 جرامًا. ما كتلة البصل بالجرام؟'), '2920-1075', unit=G),
   num('normal', 'hard', ('How much did Aya’s potatoes (2 kg 920 g) and onions (1,845 g) weigh together, in grams?', 'ما كتلة بطاطس آية (2 كجم و920 جم) والبصل (1,845 جم) معًا بالجرام؟'), '2920+1845', unit=G),
   num('normal', 'hard', ('Zeina bought 8 kg of sugar, 10 kg of flour, 500 g of cocoa, 225 g of pecans and 275 g of coconut. What is the total mass in kilograms?', 'اشترت زينة 8 كيلوجرامات من السكر و10 كيلوجرامات من الدقيق و500 جرام من الكاكاو و225 جرامًا من المكسرات و275 جرامًا من جوز الهند. ما مجموع الكتلة بالكيلوجرام؟'), '(8000+10000+500+225+275)/1000', unit=KG),
  ])
idea(3, 'S2', 6, ('Comparing lengths, capacities and times', 'مقارنة الأطوال والسعات والأزمنة'),
  ('Change to the same unit, then compare or subtract. A carpenter ant grows in 12 weeks = 84 days, longer than a pharaoh ant’s 45 days by 39 days. 20,000 mL = 20 L, so a 100 L tank needs 80 L more. Taher is 1 m 6 cm = 106 cm; a year ago he was 106 − 10 = 96 cm.',
   'نحوّل إلى نفس الوحدة ثم نقارن أو نطرح. نملة الخشب تنمو في 12 أسبوعًا = 84 يومًا، أطول من 45 يومًا للنملة الفرعونية بمقدار 39 يومًا. و20,000 ملل = 20 لترًا، فالحوض الذي يسع 100 لتر يحتاج 80 لترًا. وطاهر طوله 1 م و6 سم = 106 سم، وكان قبل سنة 106 − 10 = 96 سم.'),
  [mc('normal', 'medium', ('A pharaoh ant grows from egg to adult in 45 days. A carpenter ant grows in 12 weeks. Which takes longer?', 'تستغرق النملة الفرعونية 45 يومًا لتنمو من البيضة إلى نملة بالغة، وتستغرق نملة الخشب 12 أسبوعًا. أيهما تستغرق مدة أطول؟'),
      [('The carpenter ant', 'نملة الخشب'), ('The pharaoh ant', 'النملة الفرعونية'), ('They take the same time', 'المدة متساوية'), ('We cannot compare weeks and days', 'لا يمكن مقارنة الأسابيع بالأيام')]),
   num('normal', 'hard', ('How many days longer does the carpenter ant (12 weeks) take than the pharaoh ant (45 days)?', 'كم يومًا تزيد مدة نمو نملة الخشب (12 أسبوعًا) عن النملة الفرعونية (45 يومًا)؟'), '12*7-45', unit=DAY),
   num('normal', 'medium', ('A fish tank with a capacity of 100 liters has 20,000 milliliters of water. How many more liters are needed to fill it?', 'حوض أسماك سعته 100 لتر وسُكب بداخله 20,000 ملليلتر من الماء. كم لترًا من الماء يجب استخدامه لامتلاء الحوض بالكامل؟'), '100-20000/1000', unit=LT),
   num('normal', 'medium', ('Taher grew 10 centimeters in 1 year. He is now 1 meter 6 centimeters tall. How many centimeters tall was he 1 year ago?', 'ازداد طول طاهر 10 سنتيمترات في سنة واحدة، ويبلغ طوله الآن مترًا واحدًا و6 سنتيمترات. كم كان طول طاهر بالسنتيمتر قبل سنة واحدة؟'), '106-10', unit=CM),
   tf('normal', 'medium', ('1 m 6 cm = 160 cm.', '1 م و6 سم = 160 سم.'), False),
  ])
idea(3, 'S3', 6, ('Challenge: ants, pets and soda', 'تحدٍّ: النمل والحيوانات الأليفة والمياه الغازية'),
  ('Ant A walked 2 km, ant B 3,000 m = 3 km: ant B walked farther by 1 km. Ali’s pets: 7 kg 450 g + 17 kg 120 g = 24 kg 570 g = 24,570 g. Mr. Emad: 4 × 2 L = 8 L = 8,000 mL; 2 L 829 mL left, so 8,000 − 2,829 = 5,171 mL drunk. Queen ant: 9 hours = 540 minutes, 290 minutes more than 250. Rania: 500 mm = 50 cm, 30 + 50 = 80 cm.',
   'النملة (أ) سارت 2 كم، والنملة (ب) 3,000 م = 3 كم: النملة (ب) سارت أبعد بمقدار 1 كم. حيوانات علي: 7 كجم و450 جم + 17 كجم و120 جم = 24 كجم و570 جم = 24,570 جم. أستاذ عماد: 4 × 2 لتر = 8 لترات = 8,000 ملل، وتبقّى 2 لتر و829 ملل، إذن شرب التلاميذ 8,000 − 2,829 = 5,171 ملل. ملكة النمل: 9 ساعات = 540 دقيقة، أكثر من 250 بمقدار 290 دقيقة. رانيا: 500 مم = 50 سم، و30 + 50 = 80 سم.'),
  [num('boss', 'hard', ('An ant from Colony A walked 2 kilometers in a day. An ant from Colony B walked 3,000 meters. How many kilometers farther did ant B walk?', 'سارت نملة من المستعمرة (أ) لمسافة كيلومترين في يوم واحد، وسارت نملة من المستعمرة (ب) لمسافة 3,000 متر. كم كيلومترًا زادت مسافة النملة (ب)؟'), '3000/1000-2', unit=KM),
   num('boss', 'hard', ('Ali’s cat weighs 7 kg and his dog 17 kg. The cat gained 450 g and the dog 120 g. How many grams do the two pets weigh in all now?', 'كتلة قطة علي 7 كيلوجرامات وكتلة كلبه 17 كيلوجرامًا. زادت كتلة القطة 450 جرامًا وكتلة الكلب 120 جرامًا. كم جرامًا تبلغ كتلة الحيوانين معًا الآن؟'), '7450+17120', unit=G),
   num('boss', 'hard', ('Mr. Emad bought four 2-liter bottles of soda. 2 liters 829 milliliters were left after the party. How many milliliters did the students drink?', 'اشترى أستاذ عماد أربع زجاجات من المياه الغازية سعة كل منها لتران. إذا تبقّى لتران و829 ملليلترًا في نهاية الحفل، فكم ملليلترًا شرب التلاميذ؟'), '4*2000-2829', unit=ML),
   num('boss', 'hard', ('Worker ants nap up to 250 minutes a day. A queen ant may sleep up to 9 hours a day. By how many minutes does the queen sleep longer?', 'تأخذ النملة العاملة غفوات تصل إلى 250 دقيقة في اليوم، ويمكن أن تنام ملكة النمل حتى 9 ساعات في اليوم. بكم دقيقة تزيد مدة نوم الملكة؟'), '9*60-250', unit=MIN),
   num('boss', 'hard', ('Colony A’s ant line is 30 centimeters long and Colony B’s is 500 millimeters long. How many centimeters long are the two lines together?', 'يبلغ طول صف النمل للمستعمرة (أ) 30 سنتيمترًا، وطول صف النمل للمستعمرة (ب) 500 مليمتر. كم يبلغ طول الصفين معًا بالسنتيمتر؟'), '30+500/10', unit=CM),
  ])

# ---------- Lesson 7 · Applications of measurement 2 (pages 56-57) ----------
idea(3, 'T1', 7, ('Multiplying and dividing measurements', 'ضرب القياسات وقسمتها'),
  ('Ahmed cuts a 12 m piece of wood into 3 equal lengths: 12 ÷ 3 = 4 m = 400 cm each. Amany swims half an hour (30 minutes) a day: 5 × 30 = 150 minutes. Sara walks 5,000 m a day for 9 days: 9 × 5,000 = 45,000 m = 45 km.',
   'يقطع أحمد قطعة خشب طولها 12 م إلى 3 أطوال متساوية: 12 ÷ 3 = 4 م = 400 سم لكل قطعة. وتسبح أماني نصف ساعة (30 دقيقة) يوميًا: 5 × 30 = 150 دقيقة. وتمشي سارة 5,000 م يوميًا لمدة 9 أيام: 9 × 5,000 = 45,000 م = 45 كم.'),
  [num('normal', 'medium', ('Ahmed has a 12-meter-long piece of wood. He cuts it into 3 equal lengths. How long is each piece in meters?', 'لدى أحمد قطعة من الخشب طولها 12 مترًا، يريد تقطيعها إلى 3 أطوال متساوية. كم يجب أن يكون طول كل قطعة بالمتر؟'), '12/3', unit=M),
   num('normal', 'medium', ('Each of Ahmed’s 3 pieces is 4 meters long. How long is each piece in centimeters?', 'طول كل قطعة من قطع أحمد الثلاث 4 أمتار. ما طول كل قطعة بالسنتيمتر؟'), '4*100', unit=CM),
   num('normal', 'medium', ('Amany swims half an hour every day. How many minutes does she swim in 5 days?', 'تقضي أماني نصف ساعة كل يوم في السباحة. ما مجموع الدقائق التي تقضيها في السباحة في 5 أيام؟'), '5*30', unit=MIN),
   num('normal', 'medium', ('Sara walks 5,000 meters each day for 9 days. How many kilometers did she walk in all?', 'تسير سارة 5,000 متر كل يوم لمدة 9 أيام. ما إجمالي ما سارته بالكيلومتر؟'), '9*5000/1000', unit=KM),
  ])
idea(3, 'T2', 7, ('Water and weight plans', 'خطط الماء والكتلة'),
  ('Ayman drinks 500 mL of water 4 times a day: 4 × 500 = 2,000 mL = 2 L a day, and 7 × 2 = 14 L in a week. Ehab has a mass of 100 kg and gains 500 g a week: 5 × 500 = 2,500 g = 2 kg 500 g, so 102 kg 500 g after 5 weeks.',
   'يشرب أيمن 500 ملل من الماء 4 مرات في اليوم: 4 × 500 = 2,000 ملل = 2 لتر في اليوم، و7 × 2 = 14 لترًا في الأسبوع. وكتلة إيهاب 100 كجم ويزيدها 500 جم في الأسبوع: 5 × 500 = 2,500 جم = 2 كجم و500 جم، إذن 102 كجم و500 جم بعد 5 أسابيع.'),
  [num('normal', 'hard', ('Ayman needs to drink 500 milliliters of water 4 times per day. How many liters will that be for 1 week?', 'يحتاج أيمن أثناء التدريب إلى شرب 500 ملليلتر من الماء 4 مرات في اليوم الواحد. كم لترًا من الماء سيشربها خلال أسبوع واحد؟'), '500*4*7/1000', unit=LT),
   num('normal', 'medium', ('Ayman drinks 500 mL 4 times a day. How many milliliters is that in one day?', 'يشرب أيمن 500 ملل 4 مرات في اليوم. كم ملليلترًا يشرب في اليوم الواحد؟'), '500*4', unit=ML),
   mc('normal', 'hard', ('Ehab has a mass of 100 kilograms. He gains 500 grams per week for 5 weeks. What will his mass be?', 'كتلة إيهاب 100 كيلوجرام. يريد أن تزيد كتلته 500 جرام في الأسبوع لمدة 5 أسابيع. ماذا ستكون كتلته في النهاية؟'),
      [('102 kg 500 g', '102 كجم و500 جم'), ('100 kg 500 g', '100 كجم و500 جم'), ('102 kg 50 g', '102 كجم و50 جم'), ('125 kg', '125 كجم')]),
   num('normal', 'hard', ('Ehab’s mass at the end is 102 kg 500 g. How many grams is that?', 'كتلة إيهاب في النهاية 102 كجم و500 جم. كم جرامًا تساوي؟'), '100000+5*500', unit=G),
  ])
idea(3, 'T3', 7, ('Challenge: the ant in the well and the strong ants', 'تحدٍّ: النملة في البئر والنمل القوي'),
  ('The ant climbs 4 m each day and slides back 2 m each night: after 8 days and nights it is at 16 m. On day 9 it climbs 4 m to 20 m and gets out, so 9 days. Mariam’s 10 ants weigh 1 g each and each carries 50 times its weight: 50 g each, 10 × 50 = 500 g in all.',
   'تتسلق النملة 4 أمتار كل يوم وتنزلق مترين كل ليلة: بعد 8 أيام وليالٍ تكون عند 16 م. في اليوم التاسع تتسلق 4 م فتصل إلى 20 م وتخرج، إذن 9 أيام. ونملات مريم العشر كتلة كل منها 1 جم، وكل نملة تحمل 50 ضعف كتلتها: 50 جم لكل نملة، و10 × 50 = 500 جم في المجموع.'),
  [num('boss', 'hard', ('An ant is at the bottom of a 20-meter deep well. Each day it climbs 4 meters up, but each night it slides back 2 meters. How many days does it take to get out?', 'توجد نملة في قاع بئر بعمق 20 مترًا وتحاول الوصول إلى الأعلى. كل يوم تتسلق 4 أمتار، ولكن في كل ليلة تنزلق إلى الوراء مترين. ما عدد الأيام التي تلزمها للخروج من البئر؟'), '(20-4)/2+1', unit=DAY),
   mc('boss', 'hard', ('The ant in the well climbs 4 m by day and slides back 2 m by night. Where is it after 8 days and 8 nights?', 'النملة في البئر تتسلق 4 م نهارًا وتنزلق 2 م ليلًا. أين تكون بعد 8 أيام و8 ليالٍ؟'),
      [('At 16 m', 'عند 16 م'), ('At 20 m', 'عند 20 م'), ('At 32 m', 'عند 32 م'), ('At 8 m', 'عند 8 م')]),
   num('boss', 'hard', ('Mariam counted 10 ants. Each ant weighed 1 gram and carried 50 times its body weight. How much weight was being carried in all?', 'كانت مريم في نزهة مع عائلتها وقامت بعد 10 نملات تسير معًا. إذا كانت كتلة كل نملة جرامًا واحدًا وتحمل كل نملة 50 ضعفًا من كتلة جسمها، ما إجمالي الكتل التي يحملها جميع النمل؟'), '10*1*50', unit=G),
  ])

# =====================================================================================================
# UNIT 4 · Area and Perimeter · ideas U (L1) V (L2) W (L3) X (L4)
# =====================================================================================================
# ---------- Lesson 1 · Finding perimeter (pages 59-61) ----------
idea(4, 'U1', 1, ('Rectangles, squares and perimeter', 'المستطيلات والمربعات والمحيط'),
  ('A rectangle has 4 right angles and its opposite sides are equal. A square is a rectangle whose 4 sides are equal. The perimeter is the distance around a shape: add the lengths of all its sides. Formulas for a rectangle: P = l + w + l + w or P = (l + w) × 2.',
   'المستطيل له 4 زوايا قائمة وكل ضلعين متقابلين فيه متساويان. والمربع مستطيل أضلاعه الأربعة متساوية. المحيط هو المسافة حول الشكل: نجمع أطوال جميع أضلاعه. قانونا المستطيل: المحيط = الطول + العرض + الطول + العرض، أو المحيط = (الطول + العرض) × 2.'),
  [fill('timed', 'easy', ('The distance around a shape is its ___.', 'المسافة حول الشكل تُسمّى ___.'), [('perimeter', 'المحيط'), ('area', 'المساحة'), ('length', 'الطول')], seconds=12),
   mc('normal', 'easy', ('Which formula gives the perimeter of a rectangle?', 'أي قانون يعطي محيط المستطيل؟'), ['P = (l + w) × 2', 'P = l × w', 'P = l + w', 'P = (l × w) × 2']),
   mc('normal', 'easy', ('Which of these shapes is a square?', 'أي من هذه الأشكال مربع؟'), [('9 cm by 9 cm', '9 سم في 9 سم'), ('17 cm by 4 cm', '17 سم في 4 سم'), ('23 mm by 45 mm', '23 مم في 45 مم'), ('545 cm by 303 cm', '545 سم في 303 سم')]),
   tf('normal', 'medium', ('A square is also a rectangle.', 'المربع مستطيل أيضًا.'), True),
   tf('normal', 'medium', ('A triangle with three sides of 30 mm is a rectangle.', 'المثلث الذي أضلاعه الثلاثة 30 مم مستطيل.'), False),
  ])
idea(4, 'U2', 1, ('Calculating perimeter', 'حساب المحيط'),
  ('Use either formula. 17 cm by 4 cm: (17 + 4) × 2 = 42 cm. A square of 9 cm: 9 + 9 + 9 + 9 = 36 cm. 27 cm square: 27 × 4 = 108 cm. 67 m by 21 m: (67 + 21) × 2 = 176 m. 30 mm by 50 mm: 160 mm.',
   'نستخدم أي قانون. 17 سم في 4 سم: (17 + 4) × 2 = 42 سم. مربع 9 سم: 9 + 9 + 9 + 9 = 36 سم. مربع 27 سم: 27 × 4 = 108 سم. 67 م في 21 م: (67 + 21) × 2 = 176 م. 30 مم في 50 مم: 160 مم.'),
  [num('normal', 'easy', ('Find the perimeter of this rectangle.', 'أوجد محيط هذا المستطيل.'), '(17+4)*2', unit=CM, **RECT(17, 4, top='17 cm', right='4 cm', bottom='17 cm', left='4 cm')),
   num('normal', 'easy', ('Find the perimeter of this square.', 'أوجد محيط هذا المربع.'), '9*4', unit=CM, **RECT(9, 9, top='9 cm', right='9 cm', bottom='9 cm', left='9 cm')),
   num('normal', 'medium', ('Find the perimeter of this square.', 'أوجد محيط هذا المربع.'), '27*4', unit=CM, **RECT(27, 27, top='27 cm', right='27 cm', bottom='27 cm', left='27 cm')),
   num('normal', 'medium', ('Find the perimeter of this rectangle.', 'أوجد محيط هذا المستطيل.'), '(67+21)*2', unit=M, **RECT(67, 21, top='67 m', right='21 m', bottom='67 m', left='21 m')),
   num('normal', 'medium', ('Find the perimeter of this rectangle.', 'أوجد محيط هذا المستطيل.'), '(30+50)*2', unit=MM, **RECT(30, 50, top='30 mm', right='50 mm', bottom='30 mm', left='50 mm')),
   num('normal', 'medium', ('Worker ants follow each other in a line around a building 25 m long and 10 m wide. What is the perimeter of the building?', 'يتبع النمل بعضه في خط واحد حول مبنى طوله 25 م وعرضه 10 م. ما محيط المبنى؟'), '(25+10)*2', unit=M),
  ])
idea(4, 'U3', 1, ('Challenge: perimeter stories', 'تحدٍّ: مسائل المحيط'),
  ('Sarah puts a border around a square cake with a side of 30 cm: 30 × 4 = 120 cm. A soccer team ropes off 105 m by 68 m: (105 + 68) × 2 = 346 m of rope. A carpenter ant walked a perimeter of 100 cm: any rectangle whose length + width = 50 cm works, like 30 by 20 or 25 by 25.',
   'تضع سارة خطًا حول كعكة مربعة طول ضلعها 30 سم: 30 × 4 = 120 سم. ويحيط فريق كرة قدم مساحة 105 م في 68 م: (105 + 68) × 2 = 346 م من الحبل. وسارت نملة الخشب في محيط 100 سم: يصلح أي مستطيل مجموع طوله وعرضه 50 سم، مثل 30 في 20 أو 25 في 25.'),
  [num('boss', 'hard', ('Sarah is putting a border around the edge of a square cake. One side of the cake is 30 centimeters long. How long will the border be?', 'ترسم سارة خطًّا حول كعكة على شكل مربع، يبلغ طول جانب واحد من الكعكة 30 سنتيمترًا. ما طول الخط الذي ترسمه سارة حول الكعكة؟'), '30*4', unit=CM),
   num('boss', 'hard', ('A soccer team needs a space 105 meters long by 68 meters wide. How much rope will they need to rope it off?', 'يحتاج فريق كرة القدم إلى مساحة يبلغ طولها 105 أمتار وعرضها 68 مترًا. ما طول الحبل الذي سيحتاجونه لإحاطتها؟'), '(105+68)*2', unit=M),
   multi('boss', 'hard', ('A carpenter ant walked a perimeter of 100 centimeters. Which rectangles could represent its walk? (Choose all.)', 'سارت نملة الخشب في محيط يبلغ 100 سنتيمتر. أي المستطيلات يمكن أن تمثل سيرها؟ (اختر كل الإجابات الصحيحة)'),
         [('30 cm by 20 cm', '30 سم في 20 سم'), ('25 cm by 25 cm', '25 سم في 25 سم'), ('40 cm by 20 cm', '40 سم في 20 سم'), ('50 cm by 50 cm', '50 سم في 50 سم')], [0, 1]),
  ])

# ---------- Lesson 2 · Finding area (pages 62-63) ----------
idea(4, 'V1', 2, ('Area = length × width', 'المساحة = الطول × العرض'),
  ('The area is the space inside a shape, counted in square units. For a rectangle, A = L × W. A grid of 12 squares by 4 squares has 12 × 4 = 48 square units. 18 m by 10 m: 180 m². A square is a rectangle too: 6 mm by 6 mm = 36 mm².',
   'المساحة هي الحيز داخل الشكل، وتُعد بالوحدات المربعة. للمستطيل: المساحة = الطول × العرض. شبكة من 12 مربعًا في 4 مربعات مساحتها 12 × 4 = 48 وحدة مربعة. و18 م في 10 م: 180 م². والمربع مستطيل أيضًا: 6 مم في 6 مم = 36 مم².'),
  [fill('timed', 'easy', ('The space inside a shape, counted in square units, is its ___.', 'الحيز داخل الشكل الذي يُعد بالوحدات المربعة يُسمّى ___.'), [('area', 'المساحة'), ('perimeter', 'المحيط'), ('width', 'العرض')], seconds=12),
   mc('timed', 'easy', ('Which formula gives the area of a rectangle?', 'أي قانون يعطي مساحة المستطيل؟'), ['A = L × W', 'A = L + W', 'A = (L + W) × 2', 'A = L + W + L + W'], seconds=12),
   num('normal', 'easy', ('Find the area of this rectangle.', 'أوجد مساحة هذا المستطيل.'), '12*4', unit=CM2, **RECT(12, 4, top='12 cm', right='4 cm', bottom='12 cm', left='4 cm')),
   num('normal', 'easy', ('Find the area of this rectangle.', 'أوجد مساحة هذا المستطيل.'), '18*10', unit=M2, **RECT(18, 10, top='18 m', right='10 m', bottom='18 m', left='10 m')),
   num('normal', 'medium', ('A square has sides of 6 mm. What is its area?', 'مربع طول ضلعه 6 مم. ما مساحته؟'), '6*6', unit=MM2),
   tf('normal', 'medium', ('The area formula A = L × W can also be used for a square.', 'يمكن استخدام قانون المساحة (الطول × العرض) لإيجاد مساحة المربع أيضًا.'), True),
  ])
idea(4, 'V2', 2, ('Area or perimeter?', 'مساحة أم محيط؟'),
  ('Covering the top of something is area; going around its edge is perimeter. Glass to cover a table 8 m by 6 m: area, 8 × 6 = 48 m². A small ant farm 20 cm by 8 cm: area 20 × 8 = 160 cm².',
   'تغطية سطح شيء ما مساحة، والسير حول حافته محيط. زجاج لتغطية طاولة 8 م في 6 م: مساحة، 8 × 6 = 48 م². ومزرعة نمل صغيرة 20 سم في 8 سم: مساحتها 20 × 8 = 160 سم².'),
  [num('normal', 'medium', ('A glass company cuts glass to cover the top of a banquet table 8 meters by 6 meters. What is the area of the glass?', 'تقطع شركة زجاج قطعة لتغطية سطح طاولة مأدبة أبعادها 8 أمتار في 6 أمتار. ما مساحة الزجاج المطلوب؟'), '8*6', unit=M2),
   mc('normal', 'medium', ('To find the glass needed to cover the top of the table, should you calculate area or perimeter?', 'لإيجاد الزجاج اللازم لتغطية سطح الطاولة، هل نحسب المساحة أم المحيط؟'), [('Area', 'المساحة'), ('Perimeter', 'المحيط')]),
   num('normal', 'medium', ('A small rectangular ant farm measures 20 centimeters by 8 centimeters. What is its area?', 'مزرعة نمل مستطيلة صغيرة أبعادها 20 سنتيمترًا في 8 سنتيمترات. ما مساحتها؟'), '20*8', unit=CM2),
   mc('normal', 'medium', ('To put a ribbon around the edge of the ant farm, should you calculate area or perimeter?', 'لوضع شريط حول حافة مزرعة النمل، هل نحسب المساحة أم المحيط؟'), [('Perimeter', 'المحيط'), ('Area', 'المساحة')]),
  ])
idea(4, 'V3', 2, ('Challenge: 36 carpet tiles', 'تحدٍّ: 36 بلاطة سجاد'),
  ('36 square tiles in a rectangle always have an area of 36 square units, but the perimeter changes: 6 by 6 → 24 units, 4 by 9 → 26 units, 3 by 12 → 30 units, 2 by 18 → 40 units. The same area can have different perimeters.',
   '36 بلاطة مربعة في شكل مستطيل مساحتها دائمًا 36 وحدة مربعة، لكن المحيط يتغير: 6 في 6 ← 24 وحدة، و4 في 9 ← 26 وحدة، و3 في 12 ← 30 وحدة، و2 في 18 ← 40 وحدة. المساحة نفسها قد يكون لها محيطات مختلفة.'),
  [num('boss', 'hard', ('You arrange 36 square carpet tiles in a rectangle 4 tiles by 9 tiles. What is the perimeter?', 'رتبت 36 بلاطة سجاد مربعة في مستطيل 4 بلاطات في 9 بلاطات. ما محيطه؟'), '(4+9)*2', unit=UNITS),
   num('boss', 'hard', ('You arrange the 36 tiles in a rectangle 6 tiles by 6 tiles. What is the perimeter?', 'رتبت البلاطات الـ 36 في مستطيل 6 بلاطات في 6 بلاطات. ما محيطه؟'), '(6+6)*2', unit=UNITS),
   num('boss', 'hard', ('What is the area of any rectangle made of the 36 square tiles?', 'ما مساحة أي مستطيل مكوّن من البلاطات المربعة الـ 36؟'), '36', unit=SQU),
   mc('boss', 'hard', ('Which arrangement of 36 tiles is NOT possible?', 'أي ترتيب للبلاطات الـ 36 غير ممكن؟'), [('5 by 7', '5 في 7'), ('3 by 12', '3 في 12'), ('2 by 18', '2 في 18'), ('4 by 9', '4 في 9')]),
  ])

# ---------- Lesson 3 · Unknown Dimensions (pages 64-65) ----------
idea(4, 'W1', 3, ('Area or perimeter: Amir’s mistake', 'مساحة أم محيط: خطأ أمير'),
  ('Amir roped off a rectangle 8 m wide and 12 m long and asked how many SQUARE meters are inside: that is the area, 12 × 8 = 96 m². A student added 8 + 8 + 12 + 12 = 40 m: that is the perimeter, the length of the string, not the ground inside.',
   'أحاط أمير مستطيلًا عرضه 8 أمتار وطوله 12 مترًا وسأل عن عدد الأمتار المربعة داخله: هذه هي المساحة، 12 × 8 = 96 م². جمع التلميذ 8 + 8 + 12 + 12 = 40 م: هذا هو المحيط، أي طول الحبل، وليس الأرض داخله.'),
  [num('normal', 'medium', ('Amir placed string around a rectangle 8 meters wide and 12 meters long. How many square meters are roped off?', 'وضع أمير حبلًا حول مستطيل عرضه 8 أمتار وطوله 12 مترًا. ما مساحة الأرض المحاطة بالحبل بالمتر المربع؟'), '8*12', unit=M2, **RECT(12, 8, top='12 m', left='8 m')),
   mc('normal', 'medium', ('A student answered 8 + 8 + 12 + 12 = 40. What did the student find?', 'أجاب تلميذ: 8 + 8 + 12 + 12 = 40. ماذا أوجد التلميذ؟'), [('The perimeter, not the area', 'المحيط وليس المساحة'), ('The area', 'المساحة'), ('The width', 'العرض'), ('Half the area', 'نصف المساحة')]),
   num('normal', 'easy', ('How long is the string around Amir’s rectangle (8 m by 12 m)?', 'ما طول الحبل حول مستطيل أمير (8 م في 12 م)؟'), '8+8+12+12', unit=M),
  ])
idea(4, 'W2', 3, ('Finding a missing side', 'إيجاد البعد المجهول'),
  ('Work backwards from the formula. Perimeter 26 units, one side 5: half the perimeter is 13 = length + width, so x = 13 − 5 = 8 units. Area 50 square units, one side 10: x = 50 ÷ 10 = 5 units.',
   'نعمل عكسيًا من القانون. المحيط 26 وحدة وأحد البعدين 5: نصف المحيط 13 = الطول + العرض، إذن البعد المجهول = 13 − 5 = 8 وحدات. المساحة 50 وحدة مربعة وأحد البعدين 10: البعد المجهول = 50 ÷ 10 = 5 وحدات.'),
  [num('normal', 'medium', ('The perimeter of this rectangle is 26 units. What is the missing side x?', 'محيط هذا المستطيل 26 وحدة. ما البعد المجهول x؟'), '26/2-5', unit=UNITS, **RECT(8, 5, top=('x units', 'x وحدة'), left=('5 units', '5 وحدات'), mid=('P = 26 units', 'المحيط = 26 وحدة'))),
   num('normal', 'medium', ('The area of this rectangle is 50 square units. What is the missing side x?', 'مساحة هذا المستطيل 50 وحدة مربعة. ما البعد المجهول x؟'), '50/10', unit=UNITS, **RECT(10, 5, top=('10 units', '10 وحدات'), right=('x units', 'x وحدة'), mid=('A = 50 square units', 'المساحة = 50 وحدة مربعة'))),
   mc('normal', 'medium', ('A rectangle has a perimeter of 26 units and a width of 5 units. How can we find the length?', 'مستطيل محيطه 26 وحدة وعرضه 5 وحدات. كيف نوجد طوله؟'), [('(26 ÷ 2) − 5', '(26 ÷ 2) − 5'), ('26 − 5', '26 − 5'), ('26 ÷ 5', '26 ÷ 5'), ('26 × 5', '26 × 5')]),
   mc('normal', 'medium', ('A rectangle has an area of 50 square units and one side of 10 units. How can we find the other side?', 'مستطيل مساحته 50 وحدة مربعة وأحد بعديه 10 وحدات. كيف نوجد البعد الآخر؟'), [('50 ÷ 10', '50 ÷ 10'), ('50 − 10', '50 − 10'), ('50 × 10', '50 × 10'), ('(50 ÷ 2) − 10', '(50 ÷ 2) − 10')]),
  ])
idea(4, 'W3', 3, ('Challenge: the fire ants’ walk', 'تحدٍّ: مسيرة النمل الناري'),
  ('The ants went 8 m east, 4 m north, around the tree, 3 m west and 8 m south back home. The missing sides: going west near the tree 8 − 3 = 5 m, and going north 8 − 4 = 4 m. They walked 8 + 4 + 5 + 4 + 3 + 8 = 32 m. Area: 8 × 4 + 3 × 4 = 44 m².',
   'سار النمل 8 أمتار شرقًا، ثم 4 أمتار شمالًا، ثم حول الشجرة، ثم 3 أمتار غربًا، ثم 8 أمتار جنوبًا للعودة. الأبعاد المجهولة: الاتجاه غربًا عند الشجرة 8 − 3 = 5 م، والاتجاه شمالًا 8 − 4 = 4 م. مجموع ما ساروه 8 + 4 + 5 + 4 + 3 + 8 = 32 م. المساحة: 8 × 4 + 3 × 4 = 44 م².'),
  [num('boss', 'hard', ('The ants walked this path back home. How many meters did they walk in total (the perimeter)?', 'سار النمل هذا المسار حتى عاد إلى التل. ما مجموع الأمتار التي مشوها (المحيط)؟'), '8+4+5+4+3+8', unit=M,
       **POLY([[0, 0], [3, 0], [3, 4], [8, 4], [8, 8], [0, 8]], ['3 m', '', '', '4 m', '8 m', '8 m'])),
   num('boss', 'hard', ('In the ants’ path, how long is the missing side going west beside the tree?', 'في مسار النمل، ما طول الضلع المجهول المتجه غربًا بجانب الشجرة؟'), '8-3', unit=M,
       **POLY([[0, 0], [3, 0], [3, 4], [8, 4], [8, 8], [0, 8]], ['3 m', '', '?', '4 m', '8 m', '8 m'])),
   num('boss', 'hard', ('Take the challenge: what is the area inside the ants’ path?', 'اقبل التحدي: ما المساحة داخل مسار النمل؟'), '8*4+3*4', unit=M2,
       **POLY([[0, 0], [3, 0], [3, 4], [8, 4], [8, 8], [0, 8]], ['3 m', '4 m', '5 m', '4 m', '8 m', '8 m'])),
  ])

# ---------- Lesson 4 · Complex Shapes (pages 66-69) ----------
L24 = [[0, 0], [24, 0], [24, 18], [13, 18], [13, 6], [0, 6]]   # top 24, right 18, inner 13, left 6 (y grows downward)
idea(4, 'X1', 4, ('Dividing a complex shape', 'تقسيم الشكل المركب'),
  ('Divide a complex shape into rectangles, find each area and add them. The shape 4: a 5 cm by 6 cm rectangle and a 3 cm by 1 cm rectangle: 30 + 3 = 33 cm². Its perimeter: add all the outside sides: 8 + 1 + 3 + 5 + 5 + 6 = 28 cm.',
   'نقسم الشكل المركب إلى مستطيلات، ونوجد مساحة كل منها ثم نجمعها. الشكل 4: مستطيل 5 سم في 6 سم ومستطيل 3 سم في 1 سم: 30 + 3 = 33 سم². ومحيطه: نجمع كل الأضلاع الخارجية: 8 + 1 + 3 + 5 + 5 + 6 = 28 سم.'),
  [mc('timed', 'easy', ('To find the area of a complex shape, we first ___.', 'لإيجاد مساحة شكل مركب نبدأ بـ ___.'), [('divide it into rectangles', 'تقسيمه إلى مستطيلات'), ('add all its sides', 'جمع كل أضلاعه'), ('multiply all its sides', 'ضرب كل أضلاعه'), ('count its corners', 'عد أركانه')], seconds=15),
   num('normal', 'hard', ('Find the area of this complex shape.', 'أوجد مساحة هذا الشكل المركب.'), '5*6+3*1', unit=CM2,
       **POLY([[0, 0], [5, 0], [5, 5], [8, 5], [8, 6], [0, 6]], ['', '', '3 cm', '1 cm', '8 cm', '6 cm'])),
   num('normal', 'hard', ('Find the perimeter of this complex shape.', 'أوجد محيط هذا الشكل المركب.'), '5+5+3+1+8+6', unit=CM,
       **POLY([[0, 0], [5, 0], [5, 5], [8, 5], [8, 6], [0, 6]], ['5 cm', '5 cm', '3 cm', '1 cm', '8 cm', '6 cm'])),
   num('normal', 'hard', ('Find the area of this complex shape.', 'أوجد مساحة هذا الشكل المركب.'), '5*7+2*3', unit=CM2,
       **POLY([[0, 0], [5, 0], [5, 2], [7, 2], [7, 5], [5, 5], [5, 7], [0, 7]], ['5 cm', '', '2 cm', '3 cm', '', '', '5 cm', '7 cm'])),
   num('normal', 'hard', ('Find the perimeter of this complex shape. The two short sides on the right of the big rectangle are 2 cm each.', 'أوجد محيط هذا الشكل المركب. الضلعان القصيران على يمين المستطيل الكبير طول كل منهما 2 سم.'), '5+2+2+3+2+2+5+7', unit=CM,
       **POLY([[0, 0], [5, 0], [5, 2], [7, 2], [7, 5], [5, 5], [5, 7], [0, 7]], ['5 cm', '', '2 cm', '3 cm', '2 cm', '', '5 cm', '7 cm'])),
  ])
idea(4, 'X2', 4, ('Challenge: two ways to divide', 'تحدٍّ: طريقتان للتقسيم'),
  ('The shape is 24 m on top, 18 m on the right, 13 m inside and 6 m on the left. Way 1: 24 × 6 = 144 and 11 × 12 = 132, so 276 m². Way 2: 13 × 6 = 78 and 11 × 18 = 198, so 276 m². However you divide it, the area is the same. Perimeter: 24 + 18 + 11 + 12 + 13 + 6 = 84 m.',
   'الشكل طوله من أعلى 24 م ومن اليمين 18 م ومن الداخل 13 م ومن اليسار 6 م. الطريقة 1: 24 × 6 = 144 و11 × 12 = 132، إذن 276 م². الطريقة 2: 13 × 6 = 78 و11 × 18 = 198، إذن 276 م². مهما قسّمنا الشكل تبقى المساحة نفسها. المحيط: 24 + 18 + 11 + 12 + 13 + 6 = 84 م.'),
  [num('boss', 'hard', ('Divide this shape into rectangles. What is its area?', 'قسّم هذا الشكل إلى مستطيلات. ما مساحته؟'), '24*6+11*12', unit=M2, **POLY(L24, ['24 m', '18 m', '', '', '13 m', '6 m'])),
   num('boss', 'hard', ('What is the perimeter of this shape?', 'ما محيط هذا الشكل؟'), '24+18+11+12+13+6', unit=M, **POLY(L24, ['24 m', '18 m', '', '', '13 m', '6 m'])),
   mc('boss', 'hard', ('Divide the same shape in two different ways and find the area. What do you notice?', 'قسّم الشكل نفسه بطريقتين مختلفتين وأوجد المساحة. ماذا تلاحظ؟'),
      [('The area is the same both ways: 276 m²', 'المساحة نفسها في الطريقتين: 276 م²'), ('The area changes with the way you divide', 'المساحة تتغير حسب طريقة التقسيم'), ('One way gives the perimeter', 'إحدى الطريقتين تعطي المحيط'), ('The area is 24 × 18', 'المساحة 24 × 18')], **POLY(L24, ['24 m', '18 m', '', '', '13 m', '6 m'])),
   num('boss', 'hard', ('In this shape, how long is the bottom side (24 − 13)?', 'في هذا الشكل، ما طول الضلع السفلي (24 − 13)؟'), '24-13', unit=M, **POLY(L24, ['24 m', '18 m', '?', '', '13 m', '6 m'])),
  ])

# ----------------------------------------------------------------------------------------------------
HEAD = {
 3: ('''/* Math · Grade 4 · Unit 3 "Concepts of Measurement" · Languages track (English), first term 2026/2027
   Source: the English school book, Unit 3 (pages 40-57): Concept 1 "Metric Measurement" (lessons 1-3), Concept 2 "Measuring Time" (lessons 4-7).
   Idea letters (one per lesson; Units 1-2 of Grade 4 used A-M): N L1 Measuring length · O L2 Measuring Mass · P L3 Units of Capacity · Q L4 Units of Measuring Time ·
   R L5 Elapsed Time · S L6 Applications of measurement 1 · T L7 Applications of measurement 2.   Boss ideas: N5, O3, P4, Q3, R5, S3, T3.
   The book is an activity book with no printed answers: numbers and situations are the book's own (ants, Sobia, Doha's tank, Farah, Jana and Maha, Aya, Zeina, Taher, Ali, Mr. Emad,
   Rania, Ahmed, Ayman, Ehab, Amany, Sara, Mariam) and EVERY number answer is computed (calc, checked by tools/check_questions.js).
   No new pictures (owner asked first: none; bar models are asked as words).
   Review notes:
   - Lesson 1: "Height of a student" and "distance between home and school" have more than one reasonable unit, so they are not asked. The carpenter ant is "up to 3 cm" but the
     problem says each ant is 1 cm: the site uses 1 cm as the problem does. 1 m = 1,000 mm is read from the chart (milli- = 1/1,000 of the unit).
   - Lesson 4: telling time on an analog clock is a drawing activity (no clock printed with a time), so it is not asked.
   - Lesson 5: the movie times are given in the book as 1 h 22 min, 2 h 12 min and 1 h 57 min; "the two shortest" are 1 h 22 min and 1 h 57 min.
   - Lesson 7: the ant in the well: day 9 (it reaches 20 m during the day and does not slide back). Mariam's ants carry 50 times their weight (the carried load, 500 g).
   - Not asked: open "explain", "Writing About Math", the Number Talk, the chart to fill from memory, and "Check Your Understanding".
   Generated by math/tools/gen_mg4u34.py together with questions_mg4u3_ar.js (same ids, phrasings order and answers). */''',
     '''/* الصف الرابع الابتدائي · الرياضيات (عربي) · الوحدة الثالثة «مفاهيم القياس»، الفصل الدراسي الأول 2026/2027
   المصدر: كتاب الوزارة العربي، الوحدة الثالثة (صفحات 40–57): المفهوم الأول «القياس المتري» (الدروس 1–3)، المفهوم الثاني «قياس الوقت» (الدروس 4–7).
   حروف الأفكار: N الدرس 1 · O الدرس 2 · P الدرس 3 · Q الدرس 4 · R الدرس 5 · S الدرس 6 · T الدرس 7 (A–M للوحدتين 1 و2 من نفس الصف).
   أفكار التحدي (Boss): N5, O3, P4, Q3, R5, S3, T3.
   الملف مطابق لملف اللغات math/questions_mg4u3.js (نفس الأفكار والترتيب والإجابات)، والكتابان متطابقان في الأعداد. الأرقام غربية، وكل عدد أو وقت وسط الكلام داخل ltr.
   الكتاب كتاب نشاط بلا إجابات مطبوعة، لذلك كل إجابة رقمية محسوبة (calc) ويتحقق منها tools/check_questions.js. لا صور جديدة (سُئل المالك: لا صور).
   ملاحظات للمراجعة:
   - الدرس 1: «طول التلميذ» و«المسافة بين المنزل والمدرسة» لهما أكثر من وحدة مناسبة، فلم يُسأل عنهما. 1 م = 1,000 مم مأخوذة من جدول التحويل (ملي = 1/1,000 من الوحدة).
     الكتاب العربي يذكر «40 طنًّا» من التربة والإنجليزي «tons»؛ السؤال عن المسافة فقط.
   - الدرس 4: قراءة الساعة ذات العقارب نشاط رسم بلا ساعة مطبوعة بوقت محدد، فلم يُسأل عنه.
   - الدرس 7: النملة في البئر تخرج في اليوم 9 (تصل إلى 20 م نهارًا فلا تنزلق). نمل مريم يحمل 50 ضعف كتلته (المحمول 500 جم).
   - لا يُسأل عن: «اشرح» المفتوحة، و«الكتابة عن الرياضيات»، و«التحدث عن الأعداد»، وجدول الوحدات من الذاكرة، و«تحقق من فهمك». */'''),
 4: ('''/* Math · Grade 4 · Unit 4 "Area and Perimeter" · Languages track (English), first term 2026/2027
   Source: the English school book, Unit 4 (pages 58-69): Concept 1 "Explore Area and Perimeter", lessons 1-4.
   Idea letters (one per lesson): U L1 Finding perimeter · V L2 Finding area · W L3 Unknown Dimensions · X L4 Complex Shapes.   Boss ideas: U3, V3, W3, X2.
   Every number answer is computed (calc, checked by tools/check_questions.js). Pictures (math/g4_art.js, drawn in code, owner had no photos): rectFig (a rectangle with its side labels),
   polyFig (a shape made of rectangles with its side labels). A picture never prints the side the question asks for.
   Review notes:
   - Lesson 3 (Compound Shape Challenge): the two missing sides are derived from the walk (west 8 − 3 = 5 m, north 8 − 4 = 4 m), perimeter 32 m, area 32 + 12 = 44 m².
   - Lesson 4: shape 4 is read as 8 cm wide, 6 cm tall on the left, a step 3 cm across and 1 cm high on the right (area 33 cm², perimeter 28 cm); shape 5 as a 5 cm by 7 cm rectangle with a
     2 cm by 3 cm piece on the right (area 41 cm², perimeter 28 cm). Shape 6 is not asked (its labels do not fix the size of the top piece clearly).
   - Not asked: drawing your own shapes, the SCOOT cards (given by the teacher), the Number Talk and the open "what is easiest" items.
   Generated by math/tools/gen_mg4u34.py together with questions_mg4u4_ar.js. */''',
     '''/* الصف الرابع الابتدائي · الرياضيات (عربي) · الوحدة الرابعة «المساحة والمحيط»، الفصل الدراسي الأول 2026/2027
   المصدر: كتاب الوزارة العربي، الوحدة الرابعة (صفحات 58–69): المفهوم الأول «استكشاف المساحة والمحيط»، الدروس 1–4.
   حروف الأفكار: U الدرس 1 · V الدرس 2 · W الدرس 3 · X الدرس 4. أفكار التحدي (Boss): U3, V3, W3, X2.
   الملف مطابق لملف اللغات math/questions_mg4u4.js. الصور مرسومة بالكود في math/g4_art.js (rectFig وpolyFig)، ولا تطبع الصورة البعد المطلوب في السؤال.
   ملاحظات للمراجعة:
   - الدرس 3 (تحدي الشكل المركب): البعدان المجهولان مستنتجان من المسار (غربًا 8 − 3 = 5 م، وشمالًا 8 − 4 = 4 م)، والمحيط 32 م، والمساحة 32 + 12 = 44 م².
   - الدرس 4: الشكل 4 عرضه 8 سم وارتفاعه من اليسار 6 سم، وفيه درجة 3 سم أفقيًا و1 سم رأسيًا (المساحة 33 سم² والمحيط 28 سم)؛ الشكل 5 مستطيل 5 سم في 7 سم معه جزء 2 سم في 3 سم
     (المساحة 41 سم² والمحيط 28 سم). الشكل 6 لم يُسأل عنه لأن أبعاده المكتوبة لا تحدد الجزء العلوي بوضوح.
   - لا يُسأل عن: رسم أشكالك الخاصة، وبطاقات «نشاط السرعة في الحل» (يوزعها المعلم)، و«التحدث عن الأعداد»، والأسئلة المفتوحة. */'''),
}
LES = {
 3: (['Lesson 1 · Measuring length (pages 40-42)', 'Lesson 2 · Measuring Mass (pages 43-44)', 'Lesson 3 · Units of Capacity (pages 45-47)', 'Lesson 4 · Units of Measuring Time (pages 48-49)',
      'Lesson 5 · Elapsed Time (pages 50-52)', 'Lesson 6 · Applications of measurement 1 (pages 53-55)', 'Lesson 7 · Applications of measurement 2 (pages 56-57)'],
     ['الدرس 1 · قياس الطول (ص 40–42)', 'الدرس 2 · قياس الكتلة (ص 43–44)', 'الدرس 3 · وحدات قياس السعة (ص 45–47)', 'الدرس 4 · وحدات قياس الوقت (ص 48–49)',
      'الدرس 5 · الوقت المنقضي (ص 50–52)', 'الدرس 6 · تطبيقات القياس 1 (ص 53–55)', 'الدرس 7 · تطبيقات القياس 2 (ص 56–57)']),
 4: (['Lesson 1 · Finding perimeter (pages 59-61)', 'Lesson 2 · Finding area (pages 62-63)', 'Lesson 3 · Unknown Dimensions (pages 64-65)', 'Lesson 4 · Complex Shapes (pages 66-69)'],
     ['الدرس 1 · إيجاد المحيط (ص 59–61)', 'الدرس 2 · إيجاد المساحة (ص 62–63)', 'الدرس 3 · أبعاد مجهولة (ص 64–65)', 'الدرس 4 · الأشكال الهندسية المركّبة (ص 66–69)']),
}
TITLE = {3: ('Concepts of Measurement', 'مفاهيم القياس'), 4: ('Area and Perimeter', 'المساحة والمحيط')}

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

for u in (3, 4):
    write(u, False); write(u, True)
    print('Unit', u, len(UNITS_IDEAS[u]), 'ideas', sum(len(I['variants']) for I in UNITS_IDEAS[u]), 'phrasings')
