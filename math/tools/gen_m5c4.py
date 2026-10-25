# Generator of math/questions_m5c4.js (English book) and math/questions_m5c4_ar.js (Arabic book): same ids, order and answers.
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

def DM(div, top, cells, **k): return {'fig': 'divModel', 'pic': dict(div=div, top=top, cells=cells, **k)}
def LD(**k): return {'fig': 'longDiv', 'pic': k}
G_ = ('g', 'جم'); LE = ('LE', 'جنيه'); M_ = ('m', 'متر'); KM = ('km', 'كم')

# ---------------- Lesson 1 · Dividing Using Area Model (p81-82) ----------------
idea('Y11', 1, ('Patterns in multiplication', 'الأنماط في عملية الضرب'),
  ('When a factor gets one more zero, the product gets one more zero: 3 × 5 = 15, 3 × 50 = 150, 3 × 500 = 1,500; 4 × 2 = 8, 40 × 20 = 800, 400 × 200 = 80,000.',
   'عندما يزيد صفر في أحد العاملين يزيد صفر في الناتج: 3 × 5 = 15 و3 × 50 = 150 و3 × 500 = 1,500، و4 × 2 = 8 و40 × 20 = 800 و400 × 200 = 80,000.'),
  [num('timed', 'easy', ('3 × 50 = ?', '3 × 50 = ؟'), '3*50', seconds=10),
   num('timed', 'easy', ('3 × 500 = ?', '3 × 500 = ؟'), '3*500', seconds=10),
   num('timed', 'easy', ('40 × 20 = ?', '40 × 20 = ؟'), '40*20', seconds=12),
   num('timed', 'medium', ('400 × 200 = ?', '400 × 200 = ؟'), '400*200', seconds=15),
   mc('normal', 'medium', ('4 × 2 = 8. What is 400 × 200?', '4 × 2 = 8. كم يساوي 400 × 200؟'), ['80,000', '8,000', '800', '800,000']),
   tf('normal', 'easy', ('3 × 500 has two more zeros than 3 × 5.', 'ناتج 3 × 500 فيه صفران أكثر من ناتج 3 × 5.'), True),
  ])
idea('Y12', 1, ('The area model of division: 2,207 ÷ 7', 'نموذج مساحة المستطيل للقسمة: 2,207 ÷ 7'),
  ('Take away big chunks of 7s: 7 × 300 = 2,100 leaves 107; 7 × 10 = 70 leaves 37; 7 × 5 = 35 leaves 2. The quotient is 300 + 10 + 5 = 315 and the remainder is 2.',
   'نطرح أجزاء كبيرة من مضاعفات 7: 7 × 300 = 2,100 ويتبقى 107، ثم 7 × 10 = 70 ويتبقى 37، ثم 7 × 5 = 35 ويتبقى 2. خارج القسمة 300 + 10 + 5 = 315 وباقي القسمة 2.'),
  [mc('normal', 'medium', ('2,207 ÷ 7: what is the biggest hundreds chunk we can take first?', '2,207 ÷ 7: ما أكبر جزء من المئات نطرحه أولًا؟'), ['300 (7 × 300 = 2,100)', '400 (7 × 400 = 2,800)', '200 (7 × 200 = 1,400)', '3 (7 × 3 = 21)'],
      **DM('7', ['?', '', ''], [['2,207', '?', ''], None, None], hi=0)),
   num('normal', 'easy', ('After 7 × 300 = 2,100, what is left of 2,207?', 'بعد 7 × 300 = 2,100، كم يتبقى من 2,207؟'), '2207-2100', **DM('7', ['300', '', ''], [['2,207', '2,100', '?'], None, None])),
   num('normal', 'medium', ('Use the model: 2,207 ÷ 7 = ? (write the quotient)', 'استخدم النموذج: 2,207 ÷ 7 = ؟ (اكتب خارج القسمة)'), '300+10+5',
       **DM('7', ['300', '10', '5'], [['2,207', '2,100', '107'], ['107', '70', '37'], ['37', '35', '2']])),
   num('normal', 'medium', ('What is the remainder of 2,207 ÷ 7?', 'ما باقي قسمة 2,207 ÷ 7؟'), '2207-7*315',
       **DM('7', ['300', '10', '5'], [['2,207', '2,100', '107'], ['107', '70', '37'], ['37', '35', '2']])),
   tf('timed', 'easy', ('In the area model of division, we add the numbers on top to find the quotient.', 'في نموذج مساحة المستطيل للقسمة نجمع الأعداد في الأعلى لنحصل على خارج القسمة.'), True, seconds=14),
  ])
idea('Y13', 1, ('Dividing by a 2-digit number with the model: 1,625 ÷ 13', 'القسمة على عدد من رقمين بالنموذج: 1,625 ÷ 13'),
  ('13 × 100 = 1,300 leaves 325; 13 × 20 = 260 leaves 65; 13 × 5 = 65 leaves 0. So 1,625 ÷ 13 = 100 + 20 + 5 = 125, with no remainder.',
   '13 × 100 = 1,300 ويتبقى 325، ثم 13 × 20 = 260 ويتبقى 65، ثم 13 × 5 = 65 ويتبقى 0. إذن 1,625 ÷ 13 = 100 + 20 + 5 = 125 بدون باقٍ.'),
  [num('normal', 'easy', ('13 × 100 = 1,300. What is left of 1,625?', '13 × 100 = 1,300. كم يتبقى من 1,625؟'), '1625-1300', **DM('13', ['100', '', ''], [['1,625', '1,300', '?'], None, None])),
   num('normal', 'medium', ('325 is left. 13 × 20 = 260. What is left now?', 'تبقى 325. و13 × 20 = 260. كم يتبقى الآن؟'), '325-260', **DM('13', ['100', '20', ''], [['1,625', '1,300', '325'], ['325', '260', '?'], None])),
   num('normal', 'medium', ('1,625 ÷ 13 = ?', '1,625 ÷ 13 = ؟'), '1625/13', **DM('13', ['100', '20', '5'], [['1,625', '1,300', '325'], ['325', '260', '65'], ['65', '65', '0']])),
   mc('normal', 'medium', ('Which chunk finishes the model? 65 is left and the divisor is 13.', 'أي جزء يُكمل النموذج؟ تبقى 65 والمقسوم عليه 13.'), ['5', '50', '6', '13']),
  ])
idea('Y14', 1, ('Model match', 'توصيل النماذج'),
  ('3,622 ÷ 31: chunks 100, 10, 6 → 116 with 26 left. 1,050 ÷ 7: chunks 100 and 50 → 150 (7 × 100 = 700, 7 × 50 = 350). 9,234 ÷ 81: chunks 100, 10, 2, 2 → 114 (8,100, 810, 162, 162).',
   '3,622 ÷ 31: الأجزاء 100 و10 و6 ← 116 والباقي 26. و1,050 ÷ 7: الأجزاء 100 و50 ← 150 (7 × 100 = 700 و7 × 50 = 350). و9,234 ÷ 81: الأجزاء 100 و10 و2 و2 ← 114 (8,100 و810 و162 و162).'),
  [match('normal', 'medium', ('Match each problem with the chunks of its area model.', 'وصّل كل مسألة بأجزاء نموذجها.'), ['3,622 ÷ 31', '1,050 ÷ 7', '9,234 ÷ 81'],
         ['100 + 50', '100 + 10 + 2 + 2', '100 + 10 + 6'], [2, 0, 1]),
   num('normal', 'medium', ('What is the missing divisor of this model?', 'ما المقسوم عليه الناقص في هذا النموذج؟'), '700/100', **DM('?', ['100', '50'], [['1,050', '700', '350'], ['350', '350', '0']])),
   num('normal', 'medium', ('9,234 ÷ 81 = ?', '9,234 ÷ 81 = ؟'), '9234/81', **DM('81', ['100', '10', '2', '2'], [['9,234', '8,100', '1,134'], ['1,134', '810', '324'], ['324', '162', '162'], ['162', '162', '0']])),
   num('normal', 'medium', ('3,622 ÷ 31: what is the quotient (without the remainder)?', '3,622 ÷ 31: ما خارج القسمة (بدون الباقي)؟'), '100+10+6', **DM('31', ['100', '10', '6'], [['3,622', '3,100', '522'], ['522', '310', '212'], ['212', '186', '26']])),
   num('normal', 'medium', ('What is the remainder of 3,622 ÷ 31?', 'ما باقي قسمة 3,622 ÷ 31؟'), '3622-31*116', **DM('31', ['100', '10', '6'], [['3,622', '3,100', '522'], ['522', '310', '212'], ['212', '186', '26']])),
   num('normal', 'medium', ('What is the missing chunk on top? (81 × ? = 810)', 'ما الجزء الناقص في الأعلى؟ (81 × ؟ = 810)'), '810/81', **DM('81', ['100', '?', '2', '2'], [['9,234', '8,100', '1,134'], ['1,134', '810', '324'], ['324', '162', '162'], ['162', '162', '0']], hi=1)),
  ])
idea('Y15', 1, ('Challenge: the mistake in 2,852 ÷ 24', 'تحدٍّ: الخطأ في 2,852 ÷ 24'),
  ('The student took away 24 × 10, 24 × 5, 24 × 100 and 24 × 3 correctly and 20 was left. But 20 is the remainder, not the quotient. The quotient is 10 + 5 + 100 + 3 = 118, so 2,852 ÷ 24 = 118 with a remainder of 20.',
   'طرح التلميذ 24 × 10 و24 × 5 و24 × 100 و24 × 3 بشكل صحيح وتبقى 20. لكن 20 هو باقي القسمة وليس خارج القسمة. خارج القسمة 10 + 5 + 100 + 3 = 118، إذن 2,852 ÷ 24 = 118 والباقي 20.'),
  [mc('boss', 'hard', ('A student wrote 2,852 ÷ 24 = 20. What did the student do wrong?', 'كتب تلميذ 2,852 ÷ 24 = 20. ما خطؤه؟'),
      [('20 is the remainder; the quotient is the sum of the chunks on top', '20 هو باقي القسمة، وخارج القسمة هو مجموع الأجزاء في الأعلى'), ('24 × 100 is not 2,400', '24 × 100 لا تساوي 2,400'), ('He subtracted 240 wrongly', 'أخطأ في طرح 240'), ('He should have stopped at 92', 'كان يجب أن يتوقف عند 92')],
      **DM('24', ['10', '5', '100', '3'], [['2,852', '240', '2,612'], ['2,612', '120', '2,492'], ['2,492', '2,400', '92'], ['92', '72', '20']])),
   num('boss', 'hard', ('Find the right quotient: 2,852 ÷ 24 = ? (with a remainder of 20)', 'أوجد خارج القسمة الصحيح: 2,852 ÷ 24 = ؟ (والباقي 20)'), '10+5+100+3',
       **DM('24', ['10', '5', '100', '3'], [['2,852', '240', '2,612'], ['2,612', '120', '2,492'], ['2,492', '2,400', '92'], ['92', '72', '20']])),
   num('boss', 'hard', ('2,207 ÷ 7 = 315 with a remainder of ?', '2,207 ÷ 7 = 315 والباقي ؟'), '2207-7*315'),
   num('boss', 'hard', ('3,622 ÷ 31 = ? (quotient without the remainder)', '3,622 ÷ 31 = ؟ (خارج القسمة بدون الباقي)'), '(3622-26)/31'),
  ])

# ---------------- Lesson 2 · Estimating Quotients (p83-84) ----------------
idea('Y21', 2, ('Mental math with division', 'الحساب العقلي في القسمة'),
  ('Cross out the same number of zeros: 5,600 ÷ 70 = 560 ÷ 7 = 80; 140 ÷ 20 = 14 ÷ 2 = 7; 8,100 ÷ 90 = 90; 2,400 ÷ 80 = 30; 3,600 ÷ 9 = 400.',
   'نحذف العدد نفسه من الأصفار: 5,600 ÷ 70 = 560 ÷ 7 = 80، و140 ÷ 20 = 14 ÷ 2 = 7، و8,100 ÷ 90 = 90، و2,400 ÷ 80 = 30، و3,600 ÷ 9 = 400.'),
  [num('timed', 'easy', ('5,600 ÷ 70 = ?', '5,600 ÷ 70 = ؟'), '5600/70', seconds=15),
   num('timed', 'easy', ('140 ÷ 20 = ?', '140 ÷ 20 = ؟'), '140/20', seconds=12),
   num('timed', 'easy', ('8,100 ÷ 90 = ?', '8,100 ÷ 90 = ؟'), '8100/90', seconds=15),
   num('timed', 'easy', ('2,400 ÷ 80 = ?', '2,400 ÷ 80 = ؟'), '2400/80', seconds=15),
   num('timed', 'easy', ('3,600 ÷ 9 = ?', '3,600 ÷ 9 = ؟'), '3600/9', seconds=15),
   mc('normal', 'medium', ('Which has the same quotient as 5,600 ÷ 70?', 'أي مسألة لها نفس خارج قسمة 5,600 ÷ 70؟'), ['560 ÷ 7', '56 ÷ 70', '5,600 ÷ 7', '56 ÷ 7,000']),
  ])
idea('Y22', 2, ('Estimating with compatible numbers', 'التقدير باستخدام أعداد لها قيمة مميزة'),
  ('Change the numbers to close numbers that divide easily: 5,814 ÷ 47 is about 6,000 ÷ 50 = 120. The exact answer, 123 with 33 left, is close to the estimate, so it is reasonable.',
   'نغيّر الأعداد إلى أعداد قريبة منها تسهل قسمتها: 5,814 ÷ 47 تقريبًا 6,000 ÷ 50 = 120. والإجابة الدقيقة 123 والباقي 33 قريبة من التقدير، إذن هي معقولة.'),
  [mc('normal', 'medium', ('Estimate 5,814 ÷ 47 with compatible numbers.', 'قدّر 5,814 ÷ 47 باستخدام أعداد لها قيمة مميزة.'), ['6,000 ÷ 50 = 120', '5,814 ÷ 50 = 116.28', '6,000 ÷ 47 = 127', '5,000 ÷ 7 = 714']),
   num('normal', 'hard', ('5,814 ÷ 47 = ? (quotient without the remainder)', '5,814 ÷ 47 = ؟ (خارج القسمة بدون الباقي)'), '(5814-33)/47'),
   num('normal', 'hard', ('What is the remainder of 5,814 ÷ 47?', 'ما باقي قسمة 5,814 ÷ 47؟'), '5814-47*123'),
   term('normal', 'medium', ('Numbers close to the real ones that are easy to divide in your head, like 6,000 and 50 for 5,814 ÷ 47.', 'أعداد قريبة من الأعداد الأصلية يسهل قسمتها ذهنيًا، مثل 6,000 و50 في 5,814 ÷ 47.'),
        ('Compatible numbers', 'أعداد لها قيمة مميزة'), [('Prime numbers', 'أعداد أولية'), ('Multiples', 'المضاعفات'), ('Remainders', 'البواقي')]),
   tf('normal', 'easy', ('We use an estimate to check if a quotient is reasonable.', 'نستخدم التقدير للتحقق من معقولية خارج القسمة.'), True),
  ])
idea('Y23', 2, ('Which estimated quotient is greater?', 'أي خارج قسمة تقديري أكبر؟'),
  ('In the card game «Winner Takes All» each player estimates the quotient with compatible numbers; the greater estimate wins. 2,207 ÷ 7 is about 2,100 ÷ 7 = 300, 8,014 ÷ 46 is about 8,000 ÷ 40 = 200, 756 ÷ 22 is about 800 ÷ 20 = 40.',
   'في لعبة «الفوز بكل البطاقات» يقدّر كل لاعب خارج القسمة بأعداد لها قيمة مميزة، والتقدير الأكبر يفوز. 2,207 ÷ 7 تقريبًا 2,100 ÷ 7 = 300، و8,014 ÷ 46 تقريبًا 8,000 ÷ 40 = 200، و756 ÷ 22 تقريبًا 800 ÷ 20 = 40.'),
  [mc('normal', 'medium', ('Which card has the greater estimated quotient?', 'أي بطاقة لها خارج قسمة تقديري أكبر؟'), ['2,207 ÷ 7 (about 300)', '8,014 ÷ 46 (about 200)']),
   mc('normal', 'medium', ('Estimate 756 ÷ 22.', 'قدّر ناتج 756 ÷ 22.'), [('about 40', 'حوالي 40'), ('about 4', 'حوالي 4'), ('about 400', 'حوالي 400')]),
   mc('normal', 'medium', ('Estimate 8,014 ÷ 46.', 'قدّر ناتج 8,014 ÷ 46.'), [('about 200', 'حوالي 200'), ('about 20', 'حوالي 20'), ('about 2,000', 'حوالي 2,000')]),
   tf('timed', 'easy', ('In «Winner Takes All», the player with the smaller estimated quotient takes both cards.', 'في لعبة «الفوز بكل البطاقات» يأخذ البطاقتين اللاعب صاحب خارج القسمة التقديري الأصغر.'), False, seconds=15),
  ])
idea('Y24', 2, ('Challenge: is the quotient reasonable?', 'تحدٍّ: هل خارج القسمة معقول؟'),
  ('Compare the answer with an estimate. 5,814 ÷ 47 ≈ 120, so 12 is not reasonable. 3,622 ÷ 31 ≈ 3,000 ÷ 30 = 100, so 116 is reasonable.',
   'نقارن الإجابة بالتقدير. 5,814 ÷ 47 ≈ 120، إذن 12 غير معقولة. و3,622 ÷ 31 ≈ 3,000 ÷ 30 = 100، إذن 116 معقولة.'),
  [mc('boss', 'hard', ('Someone says 5,814 ÷ 47 = 12. Is it reasonable?', 'يقول شخص إن 5,814 ÷ 47 = 12. هل هذا معقول؟'), [('No: the estimate is about 120', 'لا: التقدير حوالي 120'), ('Yes: 12 is close to 47', 'نعم: 12 قريب من 47'), ('No: the estimate is about 1,200', 'لا: التقدير حوالي 1,200')]),
   multi('boss', 'hard', ('Which quotients are reasonable? Choose all the correct answers.', 'أي نواتج القسمة معقولة؟ اختر كل الإجابات الصحيحة.'), ['3,622 ÷ 31 = 116 R 26', '1,625 ÷ 13 = 125', '9,234 ÷ 81 = 14', '2,207 ÷ 7 = 3,152'], [0, 1]),
   num('boss', 'hard', ('Estimate 8,100 ÷ 90 exactly in your head: ?', 'احسب ذهنيًا: 8,100 ÷ 90 = ؟'), '8100/90'),
  ])

# ---------------- Lesson 3 · Using the division algorithm (p85-86) ----------------
idea('Y31', 3, ('The words of division', 'مصطلحات القسمة'),
  ('In 200 ÷ 17 = 11 R 13: 200 is the dividend, 17 is the divisor, 11 is the quotient and 13 is the remainder.',
   'في 200 ÷ 17 = 11 والباقي 13: العدد 200 هو المقسوم، و17 هو المقسوم عليه، و11 هو خارج القسمة، و13 هو باقي القسمة.'),
  [term('timed', 'easy', ('The number we divide by: 17 in 200 ÷ 17.', 'العدد الذي نقسم عليه: 17 في 200 ÷ 17.'), ('Divisor', 'المقسوم عليه'), [('Dividend', 'المقسوم'), ('Quotient', 'خارج القسمة'), ('Remainder', 'باقي القسمة')], seconds=15),
   term('timed', 'easy', ('The answer of a division: 11 in 200 ÷ 17 = 11 R 13.', 'ناتج القسمة: 11 في 200 ÷ 17 = 11 والباقي 13.'), ('Quotient', 'خارج القسمة'), [('Divisor', 'المقسوم عليه'), ('Dividend', 'المقسوم'), ('Remainder', 'باقي القسمة')], seconds=15),
   term('timed', 'easy', ('What is left over: 13 in 200 ÷ 17 = 11 R 13.', 'ما يتبقى: 13 في 200 ÷ 17 = 11 والباقي 13.'), ('Remainder', 'باقي القسمة'), [('Quotient', 'خارج القسمة'), ('Divisor', 'المقسوم عليه'), ('Dividend', 'المقسوم')], seconds=15),
   term('normal', 'easy', ('The number being divided: 200 in 200 ÷ 17.', 'العدد الذي نقسمه: 200 في 200 ÷ 17.'), ('Dividend', 'المقسوم'), [('Divisor', 'المقسوم عليه'), ('Quotient', 'خارج القسمة'), ('Remainder', 'باقي القسمة')]),
   tf('normal', 'medium', ('The remainder must be smaller than the divisor.', 'باقي القسمة يجب أن يكون أصغر من المقسوم عليه.'), True),
  ])
idea('Y32', 3, ('The standard algorithm: 1,376 ÷ 43', 'الخوارزمية المعيارية: 1,376 ÷ 43'),
  ('43 does not go into 1 or 13, so start with 137: 137 ÷ 43 = 3 (43 × 3 = 129), 137 − 129 = 8. Bring down 6: 86 ÷ 43 = 2. So 1,376 ÷ 43 = 32.',
   'العدد 43 لا يدخل في 1 ولا في 13، فنبدأ بـ 137: 137 ÷ 43 = 3 (43 × 3 = 129)، و137 − 129 = 8. ننزل 6: 86 ÷ 43 = 2. إذن 1,376 ÷ 43 = 32.'),
  [mc('normal', 'medium', ('1,376 ÷ 43: which part of the dividend do we divide first?', '1,376 ÷ 43: بأي جزء من المقسوم نبدأ؟'), ['137', '1', '13', '1,376'], **LD(div='43', num='1,376')),
   num('normal', 'medium', ('137 ÷ 43 = ? (the first digit of the quotient)', '137 ÷ 43 = ؟ (أول رقم في خارج القسمة)'), '(137-8)/43', **LD(div='43', num='1,376', quo='?')),
   num('normal', 'medium', ('43 × 3 = 129. What is 137 − 129?', '43 × 3 = 129. كم يساوي 137 − 129؟'), '137-129', **LD(div='43', num='1,376', quo='3', steps=[['129', 1], ['?', 1]])),
   num('normal', 'medium', ('1,376 ÷ 43 = ?', '1,376 ÷ 43 = ؟'), '1376/43', **LD(div='43', num='1,376', quo='3?', steps=[['129', 1], ['86', 0], ['86', 0], ['0', 0]])),
  ])
idea('Y33', 3, ('Dividing by a 2-digit divisor', 'القسمة على مقسوم عليه مكوّن من رقمين'),
  ('192 ÷ 32 = 6. 543 ÷ 65 = 8 with 23 left (65 × 8 = 520). 756 ÷ 22 = 34 with 8 left (22 × 34 = 748). 8,014 ÷ 46 = 174 with 10 left (46 × 174 = 8,004).',
   '192 ÷ 32 = 6. و543 ÷ 65 = 8 والباقي 23 (65 × 8 = 520). و756 ÷ 22 = 34 والباقي 8 (22 × 34 = 748). و8,014 ÷ 46 = 174 والباقي 10 (46 × 174 = 8,004).'),
  [num('normal', 'easy', ('192 ÷ 32 = ?', '192 ÷ 32 = ؟'), '192/32', **LD(div='32', num='192')),
   num('normal', 'medium', ('543 ÷ 65 = ? (quotient without the remainder)', '543 ÷ 65 = ؟ (خارج القسمة بدون الباقي)'), '(543-23)/65', **LD(div='65', num='543')),
   num('normal', 'medium', ('What is the remainder of 543 ÷ 65?', 'ما باقي قسمة 543 ÷ 65؟'), '543-65*8'),
   num('normal', 'medium', ('756 ÷ 22: the quotient has two digits and the first is 3. What is the ones digit?', '756 ÷ 22: خارج القسمة رقمان أولهما 3. ما رقم الآحاد؟'), '(96-8)/22', **LD(div='22', num='756', quo='3?', steps=[['66', 1], ['96', 0]])),
   num('normal', 'medium', ('What is the remainder of 756 ÷ 22?', 'ما باقي قسمة 756 ÷ 22؟'), '756-22*34', **LD(div='22', num='756', quo='34', steps=[['66', 1], ['96', 0], ['88', 0], ['?', 0]])),
   num('normal', 'hard', ('8,014 ÷ 46 = ? (quotient without the remainder)', '8,014 ÷ 46 = ؟ (خارج القسمة بدون الباقي)'), '(8014-10)/46'),
  ])
idea('Y34', 3, ('The algorithm and the area model', 'الخوارزمية ونموذج مساحة المستطيل'),
  ('Both take away the divisor times part of the quotient, again and again, until what is left is smaller than the divisor. The area model can take any chunk that fits; the algorithm works one place value at a time.',
   'كلاهما يطرح المقسوم عليه مضروبًا في جزء من خارج القسمة مرة بعد مرة حتى يصبح المتبقي أصغر من المقسوم عليه. نموذج المساحة يقبل أي جزء يناسب، والخوارزمية تعمل منزلة بعد منزلة.'),
  [mc('normal', 'medium', ('How are the standard algorithm and the area model the same?', 'ما وجه التشابه بين الخوارزمية المعيارية ونموذج المساحة؟'),
      [('Both subtract the divisor times parts of the quotient', 'كلاهما يطرح المقسوم عليه مضروبًا في أجزاء من خارج القسمة'), ('Both add the divisor many times', 'كلاهما يجمع المقسوم عليه مرات كثيرة'), ('Both never have a remainder', 'كلاهما ليس له باقٍ أبدًا'), ('Both multiply the dividend by the divisor', 'كلاهما يضرب المقسوم في المقسوم عليه')]),
   tf('timed', 'easy', ('We stop dividing when what is left is smaller than the divisor.', 'نتوقف عن القسمة عندما يصبح المتبقي أصغر من المقسوم عليه.'), True, seconds=14),
   tf('normal', 'medium', ('1,376 ÷ 43 gives a different quotient with the area model than with the algorithm.', '1,376 ÷ 43 يعطي خارج قسمة مختلفًا بنموذج المساحة عنه بالخوارزمية.'), False),
  ])
idea('Y35', 3, ('Challenge: Rana’s cookies', 'تحدٍّ: كعكات رنا'),
  ('350 cookies in bags of 12: 350 ÷ 12 = 29 full bags with 2 cookies left (12 × 29 = 348). Bags of 10, 14, 25 or 35 cookies leave nothing, because 350 can be divided by them exactly.',
   '350 كعكة في أكياس بها 12 كعكة: 350 ÷ 12 = 29 كيسًا كاملًا ويتبقى كعكتان (12 × 29 = 348). والأكياس التي بها 10 أو 14 أو 25 أو 35 كعكة لا يتبقى منها شيء لأن 350 تقبل القسمة عليها.'),
  [num('boss', 'hard', ('Rana has 350 cookies and puts 12 in each bag. How many full bags?', 'لدى رنا 350 كعكة وتضع 12 كعكة في كل كيس. كم كيسًا كاملًا؟'), '(350-2)/12'),
   num('boss', 'hard', ('How many cookies are left over?', 'كم كعكة تتبقى؟'), '350-12*29'),
   multi('boss', 'hard', ('Which bag sizes leave NO cookies over? Choose all the correct answers.', 'أي أحجام للأكياس لا يتبقى معها شيء؟ اختر كل الإجابات الصحيحة.'),
         [('10 cookies a bag', '10 كعكات في الكيس'), ('14 cookies a bag', '14 كعكة في الكيس'), ('12 cookies a bag', '12 كعكة في الكيس'), ('15 cookies a bag', '15 كعكة في الكيس')], [0, 1]),
   num('boss', 'hard', ('8,014 ÷ 46 leaves a remainder of ?', 'باقي قسمة 8,014 ÷ 46 = ؟'), '8014-46*174'),
  ])

# ---------------- Lesson 4 · The relation between division and multiplication (p87-88) ----------------
idea('Y41', 4, ('Ayman’s mistake: 8,858 ÷ 43', 'خطأ أيمن: 8,858 ÷ 43'),
  ('Ayman says 8,858 ÷ 43 = 26. Check with multiplication: 43 × 26 = 1,118, not 8,858. After 88 − 86 = 2 he brought down 5 to make 25, which is smaller than 43: he had to write 0 in the quotient before bringing down 8. 8,858 ÷ 43 = 206 (43 × 206 = 8,858).',
   'يقول أيمن إن 8,858 ÷ 43 = 26. نتحقق بالضرب: 43 × 26 = 1,118 وليس 8,858. بعد 88 − 86 = 2 أنزل 5 فأصبح 25 وهو أصغر من 43، فكان يجب أن يكتب 0 في خارج القسمة قبل أن ينزل 8. إذن 8,858 ÷ 43 = 206 (43 × 206 = 8,858).'),
  [mc('normal', 'medium', ('Do you agree with Ayman that 8,858 ÷ 43 = 26?', 'هل توافق أيمن على أن 8,858 ÷ 43 = 26؟'),
      [('No: he forgot the 0 in the quotient; it is 206', 'لا: نسي الصفر في خارج القسمة، والصحيح 206'), ('Yes: 258 − 258 = 0', 'نعم: 258 − 258 = 0'), ('No: it is 260', 'لا: الصحيح 260'), ('No: 86 should be 88', 'لا: كان يجب أن يكتب 88 بدل 86')],
      **LD(div='43', num='8,858', quo='26', steps=[['86', 2], ['258', 0], ['258', 0], ['0', 0]])),
   num('normal', 'medium', ('Check Ayman with multiplication: 43 × 26 = ?', 'تحقق من إجابة أيمن بالضرب: 43 × 26 = ؟'), '43*26'),
   num('normal', 'hard', ('8,858 ÷ 43 = ?', '8,858 ÷ 43 = ؟'), '8858/43'),
   tf('normal', 'medium', ('When the number brought down is smaller than the divisor, we write 0 in the quotient.', 'عندما يكون العدد بعد الإنزال أصغر من المقسوم عليه نكتب 0 في خارج القسمة.'), True),
  ])
idea('Y42', 4, ('Checking division with multiplication', 'التحقق من القسمة بالضرب'),
  ('To check 200 ÷ 17 = 11 R 13, multiply the divisor by the quotient and add the remainder: 17 × 11 = 187, 187 + 13 = 200, the dividend.',
   'للتحقق من 200 ÷ 17 = 11 والباقي 13 نضرب المقسوم عليه في خارج القسمة ونجمع الباقي: 17 × 11 = 187، و187 + 13 = 200 وهو المقسوم.'),
  [num('timed', 'easy', ('Check 200 ÷ 17 = 11 R 13: 17 × 11 = ?', 'تحقق من 200 ÷ 17 = 11 والباقي 13: 17 × 11 = ؟'), '17*11', seconds=15),
   num('timed', 'easy', ('187 + 13 = ?', '187 + 13 = ؟'), '187+13', seconds=10),
   fill('normal', 'medium', ('divisor × quotient + ___ = dividend', 'المقسوم عليه × خارج القسمة + ___ = المقسوم'), [('remainder', 'باقي القسمة'), ('divisor', 'المقسوم عليه'), ('dividend', 'المقسوم')]),
   mc('normal', 'medium', ('Which check shows that 543 ÷ 65 = 8 R 23 is right?', 'أي تحقق يبيّن أن 543 ÷ 65 = 8 والباقي 23 صحيحة؟'), ['65 × 8 + 23 = 543', '65 + 8 + 23 = 543', '543 × 8 = 65', '65 × 23 + 8 = 543']),
   tf('normal', 'medium', ('Multiplication is the inverse operation of division, so we can use it to check a quotient.', 'الضرب هو العملية العكسية للقسمة، لذلك نستخدمه للتحقق من خارج القسمة.'), True),
  ])
idea('Y43', 4, ('Keep the Leftovers', 'لعبة احتفظ بالباقي'),
  ('In «Keep the Leftovers», player 1 divides 200 by a divisor, for example 200 ÷ 17 = 11 R 13. The remainder is subtracted from the dividend: 200 − 13 = 187 is the new dividend for player 2. Each player adds up his remainders; the greatest total wins.',
   'في لعبة «احتفظ بالباقي» يقسم اللاعب الأول 200 على عدد، مثل 200 ÷ 17 = 11 والباقي 13. نطرح الباقي من المقسوم: 200 − 13 = 187 وهو المقسوم الجديد للاعب الثاني. يجمع كل لاعب بواقي القسمة، وصاحب المجموع الأكبر يفوز.'),
  [num('timed', 'easy', ('200 ÷ 17 = 11 R 13. What is the new dividend (200 − 13)?', '200 ÷ 17 = 11 والباقي 13. ما المقسوم الجديد (200 − 13)؟'), '200-13', seconds=15),
   num('normal', 'medium', ('200 ÷ 17 = ? (quotient without the remainder)', '200 ÷ 17 = ؟ (خارج القسمة بدون الباقي)'), '(200-13)/17'),
   tf('normal', 'medium', ('In «Keep the Leftovers», the player with the greatest sum of remainders wins.', 'في لعبة «احتفظ بالباقي» يفوز صاحب أكبر مجموع لبواقي القسمة.'), True),
  ])
idea('Y44', 4, ('Challenge: Ziad’s buttons', 'تحدٍّ: أزرار زياد'),
  ('Ziad has 100 buttons and needs 16 for each shirt: 100 ÷ 16 = 6 R 4. Check: 16 × 6 = 96, 96 + 4 = 100. Ziad is right: 6 shirts and 4 buttons left.',
   'لدى زياد 100 زر ويحتاج إلى 16 زرًا لكل قميص: 100 ÷ 16 = 6 والباقي 4. التحقق: 16 × 6 = 96، و96 + 4 = 100. زياد على حق: 6 قمصان ويتبقى 4 أزرار.'),
  [mc('boss', 'hard', ('Ziad has 100 buttons and needs 16 for each shirt. He thinks: 6 shirts, 4 buttons left. Is he right?', 'لدى زياد 100 زر ويحتاج إلى 16 زرًا لكل قميص. يعتقد أنها تكفي 6 قمصان ويتبقى 4 أزرار. هل هو على حق؟'),
      [('Yes: 16 × 6 = 96 and 96 + 4 = 100', 'نعم: 16 × 6 = 96 و96 + 4 = 100'), ('No: 7 shirts', 'لا: 7 قمصان'), ('No: 6 shirts and 16 left', 'لا: 6 قمصان ويتبقى 16'), ('No: 4 shirts and 6 left', 'لا: 4 قمصان ويتبقى 6')]),
   num('boss', 'hard', ('How many buttons do 6 shirts need?', 'كم زرًا تحتاج 6 قمصان؟'), '16*6'),
   num('boss', 'hard', ('Check 8,858 ÷ 43 = 206: 43 × 206 = ?', 'تحقق من 8,858 ÷ 43 = 206: 43 × 206 = ؟'), '43*206'),
  ])

# ---------------- Lesson 5 · Multistep Story Problems (p89-90) ----------------
idea('Y51', 5, ('Making sense of remainders', 'فهم باقي القسمة'),
  ('The remainder changes the answer to the question. 140 servings of baklava ÷ 12 per tray = 11 R 8: the 8 left need one more tray, so 12 trays. 12 − 2 = 10 balah el sham shared by 4 children: 10 ÷ 4 = 2 R 2, so each child gets 2.',
   'باقي القسمة يغيّر إجابة السؤال. 140 قطعة بقلاوة ÷ 12 في الصينية = 11 والباقي 8: القطع الثماني الباقية تحتاج صينية أخرى، إذن 12 صينية. و12 − 2 = 10 قطع بلح الشام لـ 4 أطفال: 10 ÷ 4 = 2 والباقي 2، إذن كل طفل يحصل على 2.'),
  [num('normal', 'medium', ('A baker made 140 servings of baklava. Each tray holds 12. How many trays are needed for all the baklava?', 'يحضّر خباز 140 قطعة بقلاوة، وكل صينية تحتوي على 12 قطعة. ما عدد الصواني التي يحتاجها لكل البقلاوة؟'), '(140-8)/12+1'),
   mc('normal', 'medium', ('140 ÷ 12 = 11 R 8. Why does the baker need 12 trays, not 11?', '140 ÷ 12 = 11 والباقي 8. لماذا يحتاج الخباز 12 صينية وليس 11؟'),
      [('The 8 left need one more tray', 'القطع الثماني الباقية تحتاج صينية أخرى'), ('Because 8 + 4 = 12', 'لأن 8 + 4 = 12'), ('Because we always add 1', 'لأننا نضيف 1 دائمًا'), ('Because 12 is the divisor', 'لأن 12 هو المقسوم عليه')]),
   num('normal', 'medium', ('Mom baked 12 balah el sham; 2 fell on the floor. 4 kids share the rest equally. How many does each child get?', 'خبزت الأم 12 قطعة بلح الشام وسقطت قطعتان. قسّم 4 أطفال الباقي بالتساوي. كم قطعة يحصل عليها كل طفل؟'), '(12-2-2)/4'),
   tf('normal', 'medium', ('In the balah el sham problem, the remainder 2 means each child gets 2 more pieces.', 'في مسألة بلح الشام، الباقي 2 يعني أن كل طفل يحصل على قطعتين إضافيتين.'), False),
  ])
idea('Y52', 5, ('The textile factory: step by step', 'مصنع النسيج: خطوة بخطوة'),
  ('Cotton 11,650 m. Silk is 4,950 m less: 11,650 − 4,950 = 6,700 m. Wool is 3,500 m less than silk: 6,700 − 3,500 = 3,200 m. In all: 11,650 + 6,700 + 3,200 = 21,550 m.',
   'القطن 11,650 مترًا. الحرير أقل بمقدار 4,950 مترًا: 11,650 − 4,950 = 6,700 متر. الصوف أقل من الحرير بمقدار 3,500 متر: 6,700 − 3,500 = 3,200 متر. المجموع: 11,650 + 6,700 + 3,200 = 21,550 مترًا.'),
  [num('normal', 'easy', ('A factory used 11,650 m of cotton and 4,950 m less silk than cotton. How many meters of silk?', 'استخدم مصنع 11,650 مترًا من القطن، والحرير أقل من القطن بمقدار 4,950 مترًا. كم مترًا من الحرير؟'), '11650-4950', unit=M_),
   num('normal', 'medium', ('Wool was 3,500 m less than silk (6,700 m). How many meters of wool?', 'الصوف أقل من الحرير (6,700 متر) بمقدار 3,500 متر. كم مترًا من الصوف؟'), '6700-3500', unit=M_),
   num('normal', 'hard', ('How many meters of fabric were used in all?', 'ما إجمالي أمتار الأقمشة المستخدمة؟'), '11650+(11650-4950)+(11650-4950-3500)', unit=M_),
  ])
idea('Y53', 5, ('Which steel is cheaper?', 'أي صلب أرخص؟'),
  ('Mighty Steel: 5 t for 100,000 LE, so 15 t = 3 × 100,000 = 300,000 LE. Silver Strong Steel: 3 t for 70,000 LE, so 15 t = 5 × 70,000 = 350,000 LE. Buying from Mighty Steel saves 350,000 − 300,000 = 50,000 LE.',
   'الصلب القوي: 5 أطنان مقابل 100,000 جنيه، إذن 15 طنًا = 3 × 100,000 = 300,000 جنيه. الصلب الفضي: 3 أطنان مقابل 70,000 جنيه، إذن 15 طنًا = 5 × 70,000 = 350,000 جنيه. الشراء من الصلب القوي يوفر 350,000 − 300,000 = 50,000 جنيه.'),
  [num('normal', 'medium', ('Mighty Steel sells 5 t for 100,000 LE. How much do 15 t cost?', 'تبيع شركة الصلب القوي 5 أطنان مقابل 100,000 جنيه. كم ثمن 15 طنًا؟'), '15/5*100000', unit=LE),
   num('normal', 'medium', ('Silver Strong Steel sells 3 t for 70,000 LE. How much do 15 t cost?', 'تبيع شركة الصلب الفضي 3 أطنان مقابل 70,000 جنيه. كم ثمن 15 طنًا؟'), '15/3*70000', unit=LE),
   num('normal', 'hard', ('How much money is saved by buying 15 t from Mighty Steel?', 'كم من النقود يوفر المهندس عند شراء 15 طنًا من شركة الصلب القوي؟'), '15/3*70000-15/5*100000', unit=LE),
   mc('normal', 'medium', ('What is the first step for Mighty Steel?', 'ما الخطوة الأولى لحساب سعر الصلب القوي؟'), ['15 ÷ 5 = 3 (how many groups of 5 t)', '15 × 100,000', '100,000 ÷ 15', '15 − 5 = 10']),
  ])
idea('Y54', 5, ('Paper and quilts', 'الورق واللحاف'),
  ('Computer Depot sold 762 reams; Paper Palace sold 3 times as much, 3 × 762 = 2,286, which is 143 more than Office Supply Central, so Office Supply sold 2,286 − 143 = 2,143. In all: 762 + 2,286 + 2,143 = 5,191 reams. Zeinab used 12 × 18 = 216 squares, Reem 13 × 13 = 169, so Reem used 47 fewer.',
   'باعت مكتبة عالم الكمبيوتر 762 رزمة، وباعت مكتبة النجاح 3 أضعافها: 3 × 762 = 2,286، وهي أكثر من مركز مستلزمات المكتبات بـ 143، إذن باع المركز 2,286 − 143 = 2,143. المجموع: 762 + 2,286 + 2,143 = 5,191 رزمة. واستخدمت زينب 12 × 18 = 216 مربعًا، وريم 13 × 13 = 169، إذن استخدمت ريم 47 مربعًا أقل.'),
  [num('normal', 'medium', ('Paper Palace sold 3 times as much as Computer Depot (762 reams). How many reams?', 'باعت مكتبة النجاح 3 أضعاف ما باعته مكتبة عالم الكمبيوتر (762 رزمة). كم رزمة؟'), '3*762'),
   num('normal', 'hard', ('Paper Palace sold 143 reams more than Office Supply Central. How many did Office Supply Central sell?', 'باعت مكتبة النجاح 143 رزمة أكثر من مركز مستلزمات المكتبات. كم رزمة باع المركز؟'), '3*762-143'),
   num('normal', 'hard', ('How many reams did the three stores sell combined?', 'ما عدد رزم الورق التي باعتها المكتبات الثلاث مجتمعة؟'), '762+3*762+(3*762-143)'),
   num('normal', 'medium', ('Zeinab used 12 packages of 18 squares; Reem’s quilt is 13 by 13 squares. How many fewer squares did Reem use?', 'استخدمت زينب 12 عبوة في كل منها 18 مربعًا، ولحاف ريم 13 مربعًا في 13 مربعًا. كم يقل عدد مربعات ريم؟'), '12*18-13*13'),
   num('normal', 'easy', ('Malek’s trip is 465 km. He traveled 124 km on Friday and 210 km on Saturday. How many km are left for Sunday?', 'رحلة مالك 465 كيلومترًا. قطع 124 كيلومترًا يوم الجمعة و210 كيلومترات يوم السبت. كم كيلومترًا سيقطع يوم الأحد؟'), '465-124-210', unit=KM),
  ])
idea('Y55', 5, ('Challenge: Nagi’s T-shirts', 'تحدٍّ: قمصان ناجي'),
  ('30 boxes × 25 T-shirts = 750 T-shirts; 750 × 3 LE = 2,250 LE in all. Football T-shirts earned 1,134 LE, so basketball T-shirts earned 2,250 − 1,134 = 1,116 LE.',
   '30 صندوقًا × 25 قميصًا = 750 قميصًا، و750 × 3 جنيهات = 2,250 جنيهًا في المجموع. قمصان كرة القدم ربحت 1,134 جنيهًا، إذن قمصان كرة السلة ربحت 2,250 − 1,134 = 1,116 جنيهًا.'),
  [num('boss', 'hard', ('Nagi sold 30 boxes of 25 T-shirts each. How many T-shirts?', 'باع ناجي 30 صندوقًا يحتوي كل منها على 25 قميصًا. كم قميصًا؟'), '30*25'),
   num('boss', 'hard', ('He earned 3 LE for each T-shirt. How much did he earn in all?', 'ربح 3 جنيهات عن كل قميص. كم ربح في المجموع؟'), '30*25*3', unit=LE),
   num('boss', 'hard', ('He earned 1,134 LE from football T-shirts. How much from basketball T-shirts?', 'ربح 1,134 جنيهًا من قمصان كرة القدم. كم ربح من قمصان كرة السلة؟'), '30*25*3-1134', unit=LE),
   num('boss', 'hard', ('How many basketball T-shirts did he sell? (1,116 LE ÷ 3 LE)', 'كم قميص كرة سلة باع؟ (1,116 جنيهًا ÷ 3 جنيهات)'), '1116/3'),
  ])

HEAD_EN = """/* Math · Grade 5 · Unit 4 "Division with Whole Numbers" · Languages track (English), first term 2026/2027
   Source: the English school book (Math Term 1), Unit 4 (pages 80-90): Concept 1 "Models for Division" (lessons 1-2), Concept 2 "Dividing by 2-Digit Divisors" (lessons 3-5).
   Idea ids: Units 1-3 used every letter A-X, so Unit 4 uses Y with the lesson as the first digit: Y11-Y15 lesson 1 · Y21-Y24 lesson 2 · Y31-Y35 lesson 3 · Y41-Y44 lesson 4 · Y51-Y55 lesson 5.
   Boss ideas: Y15, Y24, Y35, Y44, Y55.
   The book is an activity book with no printed answers: the numbers and situations are the book's own (2,207 ÷ 7, 1,625 ÷ 13, Model Match, the 2,852 ÷ 24 error, Winner Takes All,
   Rana's coffee shop and cookies, Ayman, Keep the Leftovers, Ziad's buttons, the baklava trays, balah el sham, the textile factory, the steel, the paper stores, the quilts, Nagi, Malek)
   and EVERY number answer is computed (calc, checked by tools/check_questions.js).
   Pictures (math/m5_art.js): divModel (the area model of division) and longDiv (the algorithm), pictures above a question.
   Review notes:
   - Lesson 2: the book prints no estimate for 5,814 ÷ 47; 6,000 ÷ 50 = 120 is used (the exact answer 123 R 33 is close). «Winner Takes All» uses the book's own problems as cards.
   - Lesson 3: Rana's coffee-bean problem has blank numbers in the book and is not asked. «How could Rana package the cookies with none left?» is open; it is asked as
     «which bag sizes leave none» (10 and 14 divide 350; 12 and 15 do not).
   - Lesson 3: the definitions of dividend, divisor, quotient and remainder are the standard ones (the book highlights the words without defining them).
   - Lesson 4: Ayman's mistake is named as the missing 0 in the quotient (25 is smaller than 43), as his work shows.
   - Not asked: the Whiteboard drawing, Rana's coffee beans, «write about math», «Check Your Understanding», the strategies discussion.
   Generated together with questions_m5c4_ar.js (same ids, phrasings order and answers). */"""
HEAD_AR = """/* الصف الخامس الابتدائي · الرياضيات (عربي) · الوحدة الرابعة «القسمة على أعداد صحيحة»، الفصل الدراسي الأول 2026/2027
   المصدر: كتاب الوزارة العربي، الوحدة الرابعة (صفحات 80–90): المفهوم الأول «استخدام النماذج في عملية القسمة» (الدرسان 1–2)، المفهوم الثاني «القسمة على عدد مكون من رقمين» (الدروس 3–5).
   أرقام الأفكار: الوحدات 1–3 استخدمت الحروف A–X، فالوحدة 4 تستخدم Y ورقم الدرس أول رقم: Y11–Y15 الدرس 1 · Y21–Y24 الدرس 2 · Y31–Y35 الدرس 3 · Y41–Y44 الدرس 4 · Y51–Y55 الدرس 5.
   أفكار التحدي (Boss): Y15, Y24, Y35, Y44, Y55.
   الملف مطابق لملف اللغات math/questions_m5c4.js (نفس الأفكار والترتيب والإجابات)، والكتابان متطابقان في الأعداد. الأرقام غربية، وكل عدد أو تعبير وسط الكلام داخل ltr.
   الكتاب كتاب نشاط بلا إجابات مطبوعة، لذلك كل إجابة رقمية محسوبة (calc) ويتحقق منها tools/check_questions.js.
   ملاحظات للمراجعة:
   - الدرس 2: الكتاب لا يطبع تقدير 5,814 ÷ 47، استخدمنا 6,000 ÷ 50 = 120 (الإجابة الدقيقة 123 والباقي 33 قريبة). لعبة «الفوز بكل البطاقات» بمسائل الكتاب نفسها.
   - الدرس 3: مسألة حبوب البن لرنا أعدادها فارغة في الكتاب فلا نسأل عنها. سؤال «كيف نعبّئ الكعكات بلا باقٍ» مفتوح، فسألناه «أي أحجام للأكياس لا يتبقى معها شيء» (10 و14 تقسمان 350، و12 و15 لا).
   - الدرس 3: تعريفات المقسوم والمقسوم عليه وخارج القسمة والباقي هي المعروفة (الكتاب يظلل الكلمات بلا تعريف).
   - الدرس 4: خطأ أيمن هو نسيان الصفر في خارج القسمة (25 أصغر من 43) كما يظهر في حله.
   - الدرس 5: أسماء الشركات والمكتبات من الكتاب العربي (الصلب القوي، الصلب الفضي، عالم الكمبيوتر، النجاح، مركز مستلزمات المكتبات).
   - لا يُسأل عن: الرسم على السبورة الرقمية، حبوب البن لرنا، «الكتابة عن الرياضيات»، «تحقق من فهمك»، ومناقشة الإستراتيجيات. */"""
LES_EN = ['Lesson 1 · Dividing Using Area Model (pages 81-82)', 'Lesson 2 · Estimating Quotients (pages 83-84)', 'Lesson 3 · Using the division algorithm (pages 85-86)', 'Lesson 4 · The relation between division and multiplication (pages 87-88)', 'Lesson 5 · Multistep Story Problems (pages 89-90)']
LES_AR = ['الدرس 1 · القسمة باستخدام نموذج مساحة المستطيل (ص 81–82)', 'الدرس 2 · تقدير خارج القسمة (ص 83–84)', 'الدرس 3 · استخدام خوارزمية القسمة (ص 85–86)', 'الدرس 4 · علاقة القسمة بالضرب (ص 87–88)', 'الدرس 5 · مسائل كلامية متعددة الخطوات (ص 89–90)']

def write(ar):
    out = [HEAD_AR if ar else HEAD_EN, '(function () {',
           "window.CHAPTER = { id: 'm5c4', title: '%s', grade: '%s', track: '%s' };" % (('القسمة على أعداد صحيحة', 'الصف الخامس', 'عربي') if ar else ('Division with Whole Numbers', 'Grade 5', 'Languages')),
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
    open(OUT + ('/math/questions_m5c4_ar.js' if ar else '/math/questions_m5c4.js'), 'w').write('\n'.join(out))

write(False); write(True)
print(len(IDEAS), 'ideas', sum(len(I['variants']) for I in IDEAS), 'phrasings')
