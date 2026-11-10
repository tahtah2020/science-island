# Generator of math/questions_m5c6.js (English book) and math/questions_m5c6_ar.js (Arabic book): same ids, order and answers.
# Run from the site folder:  python3 math/tools/gen_m5c6.py .
import json, re, sys
OUT = sys.argv[1]
ISO = '⁦', '⁩'

def wrap(s):
    """Arabic: keep every run of digits / signs, and every rule with the variable n, left to right."""
    if not isinstance(s, str) or ISO[0] in s: return s
    s = s.replace('= ؟', '= ?').replace('× ؟', '× ?').replace('÷ ؟', '÷ ?').replace('؟ ×', '? ×').replace('؟ ÷', '? ÷').replace('؟ −', '? −').replace('؟ +', '? +')
    parts = re.split(r'(\bn(?:\s*[×÷+−=]\s*[\d.]*\d)+|\bn\b)', s)
    out = []
    for k, seg in enumerate(parts):
        if k % 2: out.append(ISO[0] + seg.replace(' ', '\u00a0') + ISO[1])
        else: out.append(re.sub(r'[\d(?][\d,.\s×+−=()?÷_\[\]]*[\d)?\]]|\d', lambda m: ISO[0] + m.group(0) + ISO[1], seg))
    return ''.join(out)

def R(s): return ISO[0] + s.replace(' ', '\u00a0') + ISO[1]          # a whole expression with a letter (n × 8) kept left to right

NRULE = r'\bn(?:\s*[×÷+−=]\s*[\d.]*\d)+'
def keep(s): return re.sub(NRULE, lambda m: m.group(0).replace(' ', '\u00a0'), s) if isinstance(s, str) else s   # a rule with n never breaks across lines
def L(x, ar):
    if isinstance(x, tuple): return wrap(x[1]) if ar else keep(x[0])
    return wrap(x) if ar else keep(x)

def E(expr):                                   # display expression -> calc
    return expr.replace('−', '-').replace('×', '*').replace('÷', '/').replace(',', '').replace('[', '(').replace(']', ')')

def V(t, mode, lvl, q, hint, **k): return dict(type=t, mode=mode, level=lvl, q=q, hint=hint, **k)
def num(mode, lvl, q, calc, hint, unit=None, **k):
    r = eval(E(calc))
    ans = str(int(round(r))) if abs(r - round(r)) < 1e-9 else repr(round(r, 6))
    d = V('num', mode, lvl, q, hint, answer=ans, calc=E(calc), **k)
    if unit: d['unit'] = unit
    return d
def ev(mode, lvl, expr, hint, **k):            # «expr = ?» : the book's own expression, the answer computed
    return num(mode, lvl, (expr + ' = ?', expr + ' = ؟'), expr, hint, **k)
def mc(mode, lvl, q, opts, hint, **k): return V('mc', mode, lvl, q, hint, options=opts, answer=0, **k)
def tf(mode, lvl, q, ans, hint, **k): return V('tf', mode, lvl, q, hint, answer=0 if ans else 1, **k)
def term(mode, lvl, q, ans, choices, hint, **k): return V('term', mode, lvl, q, hint, answer=ans, choices=choices, **k)
def table(mode, lvl, q, cols, items, ans, hint, **k): return V('table', mode, lvl, q, hint, cols=cols, items=items, answer=ans, **k)

def tr(v, ar):
    out = {}
    for key, val in v.items():
        if key in ('q', 'hint', 'unit'): out[key] = L(val, ar)
        elif key in ('options', 'cols', 'items', 'choices'): out[key] = [L(o, ar) for o in val]
        elif key == 'answer' and v['type'] == 'term': out[key] = L(val, ar)
        else: out[key] = val
    return out

IDEAS = []
def idea(i, lesson, concept, explain, variants): IDEAS.append(dict(id=i, lesson=lesson, concept=concept, explain=explain, variants=variants))

# pictures (math/m5_art.js)
def EX(expr, lines=None, ask=False): return {'fig': 'exprCard', 'pic': dict(expr=expr, **({'lines': lines} if lines else {}), **({'ask': True} if ask else {}))}
def BUS(stop): return {'fig': 'busRoute', 'pic': {'expr': '300.53 − 11.04 × 0.2 ÷ 0.01 + 13.07', 'stop': stop}}
def TILE(ask=None, upto=3): return {'fig': 'tilePlus', 'pic': dict(stages=list(range(1, upto + 1)), **({'ask': ask} if ask else {}))}
def IO(rows, ask=None, bikes=False): return {'fig': 'ioTable', 'pic': dict(rows=rows, **({'ask': ask} if ask is not None else {}), **({'bikes': True} if bikes else {}))}
def SEQ(nums): return {'fig': 'seqStrip', 'pic': {'nums': nums}}
SAVE = {'fig': 'saveFig', 'pic': {}}
BIKE = {'fig': 'bikeFig', 'pic': {}}
VASE = {'fig': 'vaseFig', 'pic': {}}
LE = ('LE', 'جنيه'); LIT = ('L', 'لتر'); MET = ('m', 'متر'); TIL = ('tiles', 'بلاطة'); WHL = ('wheels', 'عجلة')

H_MD = ('First do × and ÷ from left to right, then + and − from left to right.', 'نفّذ الضرب والقسمة أولًا من اليسار إلى اليمين، ثم الجمع والطرح من اليسار إلى اليمين.')
H_PAR = ('Work out what is inside the parentheses first.', 'احسب ما بداخل الأقواس أولًا.')

# ================= Lesson 1 · Ordering of Mathematical Operations (p121-122) =================
idea('A611', 1, ('Fill in the missing number', 'أكمل الفراغ بالعدد المجهول'),
  ('45.9 − 13.33 = 32.57 (the missing number is 45.9 − 32.57); 44.16 ÷ 9.2 = 4.8 (the missing number is 4.8 × 9.2); 105.7 + 107.5 = 213.2 (the missing number is 213.2 − 105.7).',
   '45.9 − 13.33 = 32.57 (العدد المجهول = 45.9 − 32.57)، و44.16 ÷ 9.2 = 4.8 (العدد المجهول = 4.8 × 9.2)، و105.7 + 107.5 = 213.2 (العدد المجهول = 213.2 − 105.7).'),
  [num('normal', 'easy', ('105.7 + ? = 213.2', '105.7 + ؟ = 213.2'), '213.2 − 105.7', ('The missing number is the difference: 213.2 − 105.7.', 'العدد المجهول هو الفرق: 213.2 − 105.7.')),
   num('normal', 'easy', ('45.9 − ? = 32.57', '45.9 − ؟ = 32.57'), '45.9 − 32.57', ('What do you take away from 45.9 to leave 32.57? Work out 45.9 − 32.57.', 'ما الذي نطرحه من 45.9 ليتبقى 32.57؟ احسب 45.9 − 32.57.')),
   num('normal', 'medium', ('? ÷ 9.2 = 4.8', '؟ ÷ 9.2 = 4.8'), '4.8 × 9.2', ('Division and multiplication undo each other: multiply 4.8 × 9.2.', 'القسمة والضرب عمليتان عكسيتان: اضرب 4.8 × 9.2.')),
   mc('timed', 'easy', ('Which calculation finds the missing number in 45.9 − ? = 32.57?', 'أي عملية تعطي العدد المجهول في 45.9 − ؟ = 32.57؟'), ['45.9 − 32.57', '45.9 + 32.57', '32.57 − 45.9', '45.9 × 32.57'], ('The missing number is the part taken from 45.9.', 'العدد المجهول هو الجزء المطروح من 45.9.'), seconds=15),
   mc('normal', 'easy', ('Which calculation finds the missing number in ? ÷ 9.2 = 4.8?', 'أي عملية تعطي العدد المجهول في ؟ ÷ 9.2 = 4.8؟'), ['4.8 × 9.2', '9.2 ÷ 4.8', '4.8 + 9.2', '9.2 − 4.8'], ('Which operation undoes division?', 'ما العملية العكسية للقسمة؟')),
  ])
idea('A612', 1, ('Which operation comes first?', 'أي عملية نبدأ بها؟'),
  ('The basic order of operations: 1) multiply or divide from left to right; 2) add or subtract from left to right. In 56.5 × 2.3 − 15 + 12.7 we multiply first; in 1,403.5 − 12.3 ÷ 0.01 + 9.8 we divide first.',
   'الترتيب الأساسي للعمليات: 1) إجراء الضرب أو القسمة من اليسار إلى اليمين، 2) إجراء الجمع أو الطرح من اليسار إلى اليمين. في 56.5 × 2.3 − 15 + 12.7 نبدأ بالضرب، وفي 1,403.5 − 12.3 ÷ 0.01 + 9.8 نبدأ بالقسمة.'),
  [mc('timed', 'easy', ('In 56.5 × 2.3 − 15 + 12.7, which operation do you do first?', 'في 56.5 × 2.3 − 15 + 12.7، ما العملية التي تبدأ بها؟'), [('×  multiplication', '×  الضرب'), ('−  subtraction', '−  الطرح'), ('+  addition', '+  الجمع')], H_MD, seconds=12, **EX('56.5 × 2.3 − 15 + 12.7')),
   mc('timed', 'easy', ('In 1,403.5 − 12.3 ÷ 0.01 + 9.8, which operation do you do first?', 'في 1,403.5 − 12.3 ÷ 0.01 + 9.8، ما العملية التي تبدأ بها؟'), [('÷  division', '÷  القسمة'), ('−  subtraction', '−  الطرح'), ('+  addition', '+  الجمع')], H_MD, seconds=12, **EX('1,403.5 − 12.3 ÷ 0.01 + 9.8')),
   mc('timed', 'easy', ('In 145.42 − 7.11 × 10 + 13.2, which part do you work out first?', 'في 145.42 − 7.11 × 10 + 13.2، ما الجزء الذي تحسبه أولًا؟'), ['7.11 × 10', '145.42 − 7.11', '10 + 13.2'], H_MD, seconds=12, **EX('145.42 − 7.11 × 10 + 13.2')),
   tf('normal', 'easy', ('In an expression without parentheses, we add and subtract before we multiply and divide.', 'في التعبير العددي الذي ليس به أقواس نجمع ونطرح قبل أن نضرب ونقسم.'), False, ('Read the basic order of operations: which step is number 1?', 'راجع الترتيب الأساسي للعمليات: ما الخطوة رقم 1؟')),
   mc('normal', 'medium', ('In 90.7 + 116.6 × 0.1 × 2 − 20 there are two multiplications. Which do you do first?', 'في 90.7 + 116.6 × 0.1 × 2 − 20 عمليتا ضرب. أيهما تبدأ بها؟'), ['116.6 × 0.1', '0.1 × 2', ('Both at the same time', 'الاثنتان معًا')], ('Multiplications and divisions go from left to right.', 'الضرب والقسمة يتمان من اليسار إلى اليمين.'), **EX('90.7 + 116.6 × 0.1 × 2 − 20')),
   term('normal', 'easy', ('The rules that tell us which operation to do first when we evaluate a numerical expression.', 'القواعد التي تحدد أي عملية نجريها أولًا عند إيجاد قيمة تعبير عددي.'), ('Order of operations', 'ترتيب العمليات'), [('Numerical pattern', 'نمط عددي'), ('Rule of a pattern', 'قاعدة النمط'), ('Expanded form', 'الصيغة الممتدة')], ('It is the title of the lesson.', 'هو عنوان الدرس.')),
  ])
idea('A613', 1, ('Evaluating expressions with the order of operations', 'إيجاد قيمة التعبيرات العددية بترتيب العمليات'),
  ('56.5 × 2.3 − 15 + 12.7 = 129.95 − 15 + 12.7 = 127.65 · 597.8 ÷ 6.1 + 13 × 1.7 = 98 + 22.1 = 120.1 · 90.7 + 116.6 × 0.1 × 2 − 20 = 90.7 + 23.32 − 20 = 94.02 · 1,403.5 − 12.3 ÷ 0.01 + 9.8 = 1,403.5 − 1,230 + 9.8 = 183.3.',
   '56.5 × 2.3 − 15 + 12.7 = 129.95 − 15 + 12.7 = 127.65، و597.8 ÷ 6.1 + 13 × 1.7 = 98 + 22.1 = 120.1، و90.7 + 116.6 × 0.1 × 2 − 20 = 90.7 + 23.32 − 20 = 94.02، و1,403.5 − 12.3 ÷ 0.01 + 9.8 = 1,403.5 − 1,230 + 9.8 = 183.3.'),
  [ev('normal', 'easy', '56.5 × 2.3', ('Multiply 565 × 23, then put 2 decimal places in the product.', 'اضرب 565 × 23 ثم ضع منزلتين عشريتين في الناتج.')),
   ev('normal', 'medium', '56.5 × 2.3 − 15 + 12.7', ('56.5 × 2.3 = 129.95 first; then − 15 and + 12.7 from left to right.', 'أولًا 56.5 × 2.3 = 129.95، ثم اطرح 15 واجمع 12.7 من اليسار إلى اليمين.'), **EX('56.5 × 2.3 − 15 + 12.7')),
   ev('normal', 'medium', '597.8 ÷ 6.1 + 13 × 1.7', ('Work out 597.8 ÷ 6.1 and 13 × 1.7 first, then add them.', 'احسب 597.8 ÷ 6.1 و13 × 1.7 أولًا، ثم اجمع الناتجين.'), **EX('597.8 ÷ 6.1 + 13 × 1.7')),
   ev('normal', 'medium', '90.7 + 116.6 × 0.1 × 2 − 20', ('116.6 × 0.1 first, then × 2; then add and subtract from left to right.', 'أولًا 116.6 × 0.1 ثم × 2، وبعدها اجمع واطرح من اليسار إلى اليمين.'), **EX('90.7 + 116.6 × 0.1 × 2 − 20')),
   ev('normal', 'medium', '1,403.5 − 12.3 ÷ 0.01 + 9.8', ('Dividing by 0.01 is the same as multiplying by 100. Do it first.', 'القسمة على 0.01 مثل الضرب في 100. احسبها أولًا.'), **EX('1,403.5 − 12.3 ÷ 0.01 + 9.8')),
   mc('normal', 'medium', ('Sara worked out 56.5 × 2.3 − 15 + 12.7 like this: 56.5 × 2.3 = 129.95, then 15 + 12.7 = 27.7, then 129.95 − 27.7. What did she do wrong?', 'حلّت سارة 56.5 × 2.3 − 15 + 12.7 هكذا: 56.5 × 2.3 = 129.95، ثم 15 + 12.7 = 27.7، ثم 129.95 − 27.7. ما خطؤها؟'),
      [('She added before subtracting; + and − go from left to right.', 'جمعت قبل أن تطرح، والجمع والطرح يتمان من اليسار إلى اليمين.'), ('She should have subtracted 15 first, before multiplying.', 'كان يجب أن تطرح 15 أولًا قبل الضرب.'), ('Nothing, her work is right.', 'لا يوجد خطأ، حلها صحيح.'), ('She should have added 2.3 and 15 first.', 'كان يجب أن تجمع 2.3 و15 أولًا.')],
      ('After the multiplication, which comes first from left to right: − 15 or + 12.7?', 'بعد الضرب، أيهما يأتي أولًا من اليسار إلى اليمين: − 15 أم + 12.7؟')),
  ])
idea('A614', 1, ('One step at a time', 'خطوة بخطوة'),
  ('Rewrite the expression after each step: 145.42 − 7.11 × 10 + 13.2 → 145.42 − 71.1 + 13.2 → 74.32 + 13.2 → 87.52. 35 × 0.1 + 89.14 ÷ 0.1 → 3.5 + 891.4 → 894.9. 102.15 + 6 ÷ 1.2 − 34 × 2.3 → 102.15 + 5 − 78.2 → 28.95.',
   'نعيد كتابة التعبير بعد كل خطوة: 145.42 − 7.11 × 10 + 13.2 ← 145.42 − 71.1 + 13.2 ← 74.32 + 13.2 ← 87.52. و35 × 0.1 + 89.14 ÷ 0.1 ← 3.5 + 891.4 ← 894.9. و102.15 + 6 ÷ 1.2 − 34 × 2.3 ← 102.15 + 5 − 78.2 ← 28.95.'),
  [mc('normal', 'easy', ('Step 1 of 145.42 − 7.11 × 10 + 13.2: which expression do you write next?', 'الخطوة 1 في 145.42 − 7.11 × 10 + 13.2: ما التعبير الذي تكتبه بعدها؟'), ['145.42 − 71.1 + 13.2', '1,383.1 + 13.2', '145.42 − 7.11 × 23.2', '145.42 − 0.711 + 13.2'], ('Multiplying by 10 moves every digit one place to the left.', 'الضرب في 10 يحرك كل رقم منزلة واحدة إلى اليسار.'), **EX('145.42 − 7.11 × 10 + 13.2')),
   num('normal', 'medium', ('Finish it: 145.42 − 71.1 + 13.2 = ?', 'أكمل: 145.42 − 71.1 + 13.2 = ؟'), '145.42 − 71.1 + 13.2', ('Subtract first (it is on the left), then add.', 'اطرح أولًا لأنه على اليسار، ثم اجمع.'), **EX('145.42 − 7.11 × 10 + 13.2', ['145.42 − 71.1 + 13.2'], ask=True)),
   mc('normal', 'easy', ('Step 1 of 35 × 0.1 + 89.14 ÷ 0.1: which expression do you write next?', 'الخطوة 1 في 35 × 0.1 + 89.14 ÷ 0.1: ما التعبير الذي تكتبه بعدها؟'), ['3.5 + 891.4', '350 + 8.914', '35 × 89.24 ÷ 0.1', '3.5 + 8.914'], ('× 0.1 makes a number 10 times smaller; ÷ 0.1 makes it 10 times bigger.', 'الضرب في 0.1 يصغّر العدد 10 مرات، والقسمة على 0.1 تكبّره 10 مرات.'), **EX('35 × 0.1 + 89.14 ÷ 0.1')),
   ev('normal', 'medium', '35 × 0.1 + 89.14 ÷ 0.1', ('Work out 35 × 0.1 and 89.14 ÷ 0.1, then add.', 'احسب 35 × 0.1 و89.14 ÷ 0.1، ثم اجمع.'), **EX('35 × 0.1 + 89.14 ÷ 0.1')),
   mc('normal', 'medium', ('Step 1 of 102.15 + 6 ÷ 1.2 − 34 × 2.3: which expression do you write next?', 'الخطوة 1 في 102.15 + 6 ÷ 1.2 − 34 × 2.3: ما التعبير الذي تكتبه بعدها؟'), ['102.15 + 5 − 34 × 2.3', '108.15 ÷ 1.2 − 34 × 2.3', '102.15 + 0.2 − 34 × 2.3', '102.15 + 6 ÷ 1.2 − 78.2 × 2.3'], ('6 ÷ 1.2 is the first × or ÷ from the left. How many 1.2 make 6?', '6 ÷ 1.2 هي أول عملية ضرب أو قسمة من اليسار. كم مرة يتكرر 1.2 ليعطي 6؟'), **EX('102.15 + 6 ÷ 1.2 − 34 × 2.3')),
   num('normal', 'medium', ('Finish it: 102.15 + 5 − 78.2 = ?', 'أكمل: 102.15 + 5 − 78.2 = ؟'), '102.15 + 5 − 78.2', ('Add 102.15 + 5 first, then subtract 78.2.', 'اجمع 102.15 + 5 أولًا، ثم اطرح 78.2.'), **EX('102.15 + 6 ÷ 1.2 − 34 × 2.3', ['102.15 + 5 − 78.2'], ask=True)),
  ])
idea('A615', 1, ('The right route: Ali’s bus stops', 'المسار الصحيح: محطات أتوبيس علي'),
  ('Ali’s bus stops follow the order of operations for 300.53 − 11.04 × 0.2 ÷ 0.01 + 13.07. Stop 1: B 11.04 × 0.2 = 2.208. Stop 2: E 2.208 ÷ 0.01 = 220.8. Stop 3: M 300.53 − 220.8 = 79.73. Stop 4: P 79.73 + 13.07 = 92.8.',
   'محطات أتوبيس علي تتبع ترتيب العمليات في 300.53 − 11.04 × 0.2 ÷ 0.01 + 13.07. المحطة (1): ب 11.04 × 0.2 = 2.208. المحطة (2): هـ 2.208 ÷ 0.01 = 220.8. المحطة (3): م 300.53 − 220.8 = 79.73. المحطة (4): ع 79.73 + 13.07 = 92.8.'),
  [mc('normal', 'easy', ('Ali’s bus follows the order of operations for 300.53 − 11.04 × 0.2 ÷ 0.01 + 13.07. Which is Stop 1?', 'يتبع أتوبيس علي ترتيب العمليات في 300.53 − 11.04 × 0.2 ÷ 0.01 + 13.07. ما المحطة (1)؟'), ['11.04 × 0.2', '300.53 − 11.04', '0.2 ÷ 0.01', '0.01 + 13.07'], ('The first × or ÷ from the left.', 'أول عملية ضرب أو قسمة من اليسار.'), **BUS(1)),
   mc('normal', 'medium', ('Stop 1 gave 11.04 × 0.2 = 2.208. Which is Stop 2?', 'المحطة (1) أعطت 11.04 × 0.2 = 2.208. ما المحطة (2)؟'), ['2.208 ÷ 0.01', '0.2 ÷ 13.08', '289.49 × 0.2', '11.04 × 20'], ('The division ÷ 0.01 now works on the result of Stop 1.', 'القسمة ÷ 0.01 تكون الآن على ناتج المحطة (1).'), **BUS(2)),
   mc('normal', 'medium', ('Stop 2 gave 220.8. Which is Stop 3?', 'المحطة (2) أعطت 220.8. ما المحطة (3)؟'), ['300.53 − 220.8', '57.898 ÷ 0.01', '220.8 + 13.07', '289.49 × 20'], ('No × or ÷ is left: now + and − from left to right.', 'لم يتبق ضرب أو قسمة: الآن الجمع والطرح من اليسار إلى اليمين.'), **BUS(3)),
   mc('normal', 'medium', ('Stop 3 gave 79.73. Which is Stop 4?', 'المحطة (3) أعطت 79.73. ما المحطة (4)؟'), ['79.73 + 13.07', '5,789.8 + 13.07', '300.53 − 233.87', '57.898 + 13.07'], ('Only one operation is left: + 13.07.', 'تتبقى عملية واحدة: + 13.07.'), **BUS(4)),
   ev('normal', 'medium', '300.53 − 11.04 × 0.2 ÷ 0.01 + 13.07', ('Follow the four stops: ×, then ÷, then −, then +.', 'اتبع المحطات الأربع: الضرب ثم القسمة ثم الطرح ثم الجمع.'), **BUS(4)),
  ])
idea('A616', 1, ('Challenge: long expressions', 'تحدٍّ: تعبيرات طويلة'),
  ('202.83 − 40.2 × 2 − 0.33 ÷ 0.01 + 67.05 = 202.83 − 80.4 − 33 + 67.05 = 156.48 · 82.43 × 3.1 + 4.05 ÷ 0.01 − 2.5 = 255.533 + 405 − 2.5 = 658.033.',
   '202.83 − 40.2 × 2 − 0.33 ÷ 0.01 + 67.05 = 202.83 − 80.4 − 33 + 67.05 = 156.48، و82.43 × 3.1 + 4.05 ÷ 0.01 − 2.5 = 255.533 + 405 − 2.5 = 658.033.'),
  [ev('boss', 'hard', '202.83 − 40.2 × 2 − 0.33 ÷ 0.01 + 67.05', ('Do 40.2 × 2 and 0.33 ÷ 0.01 first, then go from left to right.', 'احسب 40.2 × 2 و0.33 ÷ 0.01 أولًا، ثم من اليسار إلى اليمين.'), **EX('202.83 − 40.2 × 2 − 0.33 ÷ 0.01 + 67.05')),
   ev('boss', 'hard', '82.43 × 3.1 + 4.05 ÷ 0.01 − 2.5', ('82.43 × 3.1 has 3 decimal places; 4.05 ÷ 0.01 = 4.05 × 100.', '82.43 × 3.1 فيه 3 منازل عشرية، و4.05 ÷ 0.01 = 4.05 × 100.'), **EX('82.43 × 3.1 + 4.05 ÷ 0.01 − 2.5')),
   mc('boss', 'hard', ('Which value is right for 202.83 − 40.2 × 2 − 0.33 ÷ 0.01 + 67.05?', 'ما القيمة الصحيحة للتعبير 202.83 − 40.2 × 2 − 0.33 ÷ 0.01 + 67.05؟'), ['156.48', '189.15', '23.67', '222.48'], ('After × and ÷: 202.83 − 80.4 − 33 + 67.05.', 'بعد الضرب والقسمة: 202.83 − 80.4 − 33 + 67.05.'), **EX('202.83 − 40.2 × 2 − 0.33 ÷ 0.01 + 67.05')),
  ])

# ================= Lesson 2 · Numerical Expressions with Parentheses (p123-124) =================
idea('A621', 2, ('Parentheses first', 'الأقواس أولًا'),
  ('Expanded order of operations: 1) inside the parentheses: multiply or divide from left to right, then add or subtract from left to right; 2) outside the parentheses: multiply or divide, then add or subtract, from left to right.',
   'الترتيب الممتد للعمليات: 1) مع العمليات داخل الأقواس المستديرة: اضرب أو اقسم من اليسار إلى اليمين، ثم اجمع أو اطرح من اليسار إلى اليمين، 2) مع العمليات خارج الأقواس المستديرة: اضرب أو اقسم ثم اجمع أو اطرح من اليسار إلى اليمين.'),
  [mc('timed', 'easy', ('In (45.84 + 13.05) ÷ 5 + 20.32 − 1.14 × 2.1, what do you work out first?', 'في (45.84 + 13.05) ÷ 5 + 20.32 − 1.14 × 2.1، ما الذي تحسبه أولًا؟'), ['45.84 + 13.05', '13.05 ÷ 5', '1.14 × 2.1', '20.32 − 1.14'], H_PAR, seconds=15, **EX('(45.84 + 13.05) ÷ 5 + 20.32 − 1.14 × 2.1')),
   tf('timed', 'easy', ('Parentheses can change the order in which the operations are done.', 'الأقواس يمكن أن تغيّر ترتيب تنفيذ العمليات.'), True, ('Look at step 1 of the expanded order of operations.', 'انظر إلى الخطوة 1 في الترتيب الممتد للعمليات.'), seconds=12),
   mc('normal', 'easy', ('Inside the parentheses of 30 × (2.5 + 47.18 − 3.12 ÷ 0.1), which operation comes first?', 'داخل الأقواس في 30 × (2.5 + 47.18 − 3.12 ÷ 0.1)، ما العملية الأولى؟'), ['3.12 ÷ 0.1', '2.5 + 47.18', '30 × 2.5', '47.18 − 3.12'], ('Inside the parentheses the basic order still holds: × and ÷ first.', 'داخل الأقواس يبقى الترتيب الأساسي: الضرب والقسمة أولًا.'), **EX('30 × (2.5 + 47.18 − 3.12 ÷ 0.1)')),
   mc('normal', 'medium', ('An expression has parentheses ( ) and brackets [ ]. Which do you work out first?', 'تعبير عددي فيه أقواس مستديرة ( ) وأقواس مربعة [ ]. بأيهما تبدأ؟'), [('The operations inside the parentheses ( )', 'العمليات داخل الأقواس المستديرة ( )'), ('The operations inside the brackets [ ]', 'العمليات داخل الأقواس المربعة [ ]'), ('The operations outside both', 'العمليات خارج الأقواس كلها'), ('Always from left to right, ignoring them', 'دائمًا من اليسار إلى اليمين بدون اعتبار للأقواس')], ('Read the advanced order of operations: which step is number 1?', 'راجع المستوى المتقدم من ترتيب العمليات: ما الخطوة رقم 1؟')),
   mc('normal', 'medium', ('In 15.25 ÷ (2 + 3) + 6.8 ÷ 2, what do you work out first?', 'في 15.25 ÷ (2 + 3) + 6.8 ÷ 2، ما الذي تحسبه أولًا؟'), ['2 + 3', '15.25 ÷ 2', '6.8 ÷ 2', '3 + 6.8'], H_PAR, **EX('15.25 ÷ (2 + 3) + 6.8 ÷ 2')),
  ])
idea('A622', 2, ('Make it smaller', 'أصغر قيمة'),
  ('Parentheses can make a value smaller: 10 × (4 − 3) = 10 (instead of 37), 15 ÷ (3 + 2) = 3 (instead of 7), (12 + 24) ÷ (4 + 8) = 3 (instead of 26), 34 × 28 ÷ (2 + 5) = 136 (instead of 481).',
   'الأقواس يمكن أن تصغّر القيمة: 10 × (4 − 3) = 10 (بدلًا من 37)، و15 ÷ (3 + 2) = 3 (بدلًا من 7)، و(12 + 24) ÷ (4 + 8) = 3 (بدلًا من 26)، و34 × 28 ÷ (2 + 5) = 136 (بدلًا من 481).'),
  [ev('timed', 'easy', '10 × 4 − 3', ('Multiply first, then subtract.', 'اضرب أولًا ثم اطرح.'), seconds=12),
   ev('timed', 'easy', '10 × (4 − 3)', H_PAR, seconds=12),
   ev('normal', 'easy', '15 ÷ (3 + 2)', H_PAR),
   mc('normal', 'medium', ('Where should the parentheses go in 12 + 24 ÷ 4 + 8 to get the smallest value?', 'أين نضع الأقواس في 12 + 24 ÷ 4 + 8 لنحصل على أصغر قيمة؟'), ['(12 + 24) ÷ (4 + 8)', '12 + 24 ÷ (4 + 8)', '(12 + 24) ÷ 4 + 8', '12 + (24 ÷ 4) + 8'], ('Work out each choice. Dividing by a bigger number gives a smaller result.', 'احسب كل اختيار. القسمة على عدد أكبر تعطي ناتجًا أصغر.'), **EX('12 + 24 ÷ 4 + 8')),
   ev('normal', 'medium', '34 × 28 ÷ (2 + 5)', ('2 + 5 first, then × and ÷ from left to right.', 'احسب 2 + 5 أولًا، ثم الضرب والقسمة من اليسار إلى اليمين.')),
  ])
idea('A623', 2, ('Set A: with and without parentheses', 'المجموعة (أ): بأقواس وبدون أقواس'),
  ('45.84 + 13.05 ÷ 5 + 20.32 − 1.14 × 2.1 = 45.84 + 2.61 + 20.32 − 2.394 = 66.376. With parentheses, (45.84 + 13.05) ÷ 5 + 20.32 − 1.14 × 2.1 = 58.89 ÷ 5 + 20.32 − 2.394 = 11.778 + 20.32 − 2.394 = 29.704.',
   '45.84 + 13.05 ÷ 5 + 20.32 − 1.14 × 2.1 = 45.84 + 2.61 + 20.32 − 2.394 = 66.376. ومع الأقواس: (45.84 + 13.05) ÷ 5 + 20.32 − 1.14 × 2.1 = 58.89 ÷ 5 + 20.32 − 2.394 = 11.778 + 20.32 − 2.394 = 29.704.'),
  [ev('normal', 'easy', '13.05 ÷ 5', ('How many times does 5 go into 13.05? Divide as with whole numbers and keep the decimal point in place.', 'كم مرة يتكرر 5 في 13.05؟ اقسم كما في الأعداد الصحيحة وضع العلامة العشرية في مكانها.')),
   ev('normal', 'easy', '(45.84 + 13.05) ÷ 5', H_PAR),
   ev('normal', 'medium', '45.84 + 13.05 ÷ 5 + 20.32 − 1.14 × 2.1', ('13.05 ÷ 5 and 1.14 × 2.1 first; then add and subtract from left to right.', 'احسب 13.05 ÷ 5 و1.14 × 2.1 أولًا، ثم اجمع واطرح من اليسار إلى اليمين.'), **EX('45.84 + 13.05 ÷ 5 + 20.32 − 1.14 × 2.1')),
   tf('normal', 'easy', ('45.84 + 13.05 ÷ 5 + 20.32 − 1.14 × 2.1 and (45.84 + 13.05) ÷ 5 + 20.32 − 1.14 × 2.1 have the same value.', 'التعبيران 45.84 + 13.05 ÷ 5 + 20.32 − 1.14 × 2.1 و(45.84 + 13.05) ÷ 5 + 20.32 − 1.14 × 2.1 لهما القيمة نفسها.'), False, ('In the second one, what is divided by 5?', 'في التعبير الثاني، ما الذي يُقسم على 5؟')),
  ])
idea('A624', 2, ('Set B: more operations inside the parentheses', 'المجموعة (ب): عمليات أكثر داخل الأقواس'),
  ('30 × 2.5 + 47.18 − 3.12 ÷ 0.1 = 75 + 47.18 − 31.2 = 90.98. With parentheses, 30 × (2.5 + 47.18 − 3.12 ÷ 0.1) = 30 × (2.5 + 47.18 − 31.2) = 30 × 18.48 = 554.4.',
   '30 × 2.5 + 47.18 − 3.12 ÷ 0.1 = 75 + 47.18 − 31.2 = 90.98. ومع الأقواس: 30 × (2.5 + 47.18 − 3.12 ÷ 0.1) = 30 × (2.5 + 47.18 − 31.2) = 30 × 18.48 = 554.4.'),
  [ev('timed', 'easy', '3.12 ÷ 0.1', ('Dividing by 0.1 makes the number 10 times bigger.', 'القسمة على 0.1 تكبّر العدد 10 مرات.'), seconds=15),
   ev('normal', 'medium', '30 × 2.5 + 47.18 − 3.12 ÷ 0.1', ('30 × 2.5 and 3.12 ÷ 0.1 first, then from left to right.', 'احسب 30 × 2.5 و3.12 ÷ 0.1 أولًا، ثم من اليسار إلى اليمين.'), **EX('30 × 2.5 + 47.18 − 3.12 ÷ 0.1')),
   ev('normal', 'medium', '2.5 + 47.18 − 3.12 ÷ 0.1', ('3.12 ÷ 0.1 first, then add and subtract from left to right.', 'احسب 3.12 ÷ 0.1 أولًا، ثم اجمع واطرح من اليسار إلى اليمين.')),
   mc('normal', 'medium', ('Inside the parentheses, 2.5 + 47.18 − 3.12 ÷ 0.1 = 18.48. Which expression do you write next for 30 × (2.5 + 47.18 − 3.12 ÷ 0.1)?', 'داخل الأقواس: 2.5 + 47.18 − 3.12 ÷ 0.1 = 18.48. ما التعبير الذي تكتبه بعدها للتعبير 30 × (2.5 + 47.18 − 3.12 ÷ 0.1)؟'), ['30 × 18.48', '30 + 18.48', '30 × 2.5 + 18.48', '18.48 ÷ 30'], ('The whole value of the parentheses replaces them.', 'قيمة ما بداخل الأقواس كلها تحل محل الأقواس.'), **EX('30 × (2.5 + 47.18 − 3.12 ÷ 0.1)')),
  ])
idea('A625', 2, ('How many values?', 'قيم مختلفة'),
  ('Moving the parentheses gives different values: 29.2 + 43 × 0.01 + 15 ÷ 0.1 = 179.63 but (29.2 + 43) × 0.01 + 15 ÷ 0.1 = 150.722; 158 ÷ 2 + 6 × 10.5 − 5 = 137 but (158 ÷ 2 + 6) × 10.5 − 5 = 887.5; 57 − 11 × 1.2 + 3.4 + 1.9 ÷ 10 = 47.39 but (57 − 11) × 1.2 + 3.4 + 1.9 ÷ 10 = 58.79.',
   'تغيير مكان الأقواس يعطي قيمًا مختلفة: 29.2 + 43 × 0.01 + 15 ÷ 0.1 = 179.63 لكن (29.2 + 43) × 0.01 + 15 ÷ 0.1 = 150.722، و158 ÷ 2 + 6 × 10.5 − 5 = 137 لكن (158 ÷ 2 + 6) × 10.5 − 5 = 887.5، و57 − 11 × 1.2 + 3.4 + 1.9 ÷ 10 = 47.39 لكن (57 − 11) × 1.2 + 3.4 + 1.9 ÷ 10 = 58.79.'),
  [ev('normal', 'medium', '158 ÷ 2 + 6 × 10.5 − 5', H_MD, **EX('158 ÷ 2 + 6 × 10.5 − 5')),
   ev('normal', 'medium', '(158 ÷ 2 + 6) × 10.5 − 5', ('Inside the parentheses: 158 ÷ 2 first, then + 6. Then × 10.5 and − 5.', 'داخل الأقواس: 158 ÷ 2 أولًا ثم + 6. بعدها × 10.5 ثم − 5.'), **EX('(158 ÷ 2 + 6) × 10.5 − 5')),
   ev('normal', 'medium', '29.2 + 43 × 0.01 + 15 ÷ 0.1', ('43 × 0.01 makes 43 a hundred times smaller; 15 ÷ 0.1 makes 15 ten times bigger.', '43 × 0.01 يصغّر 43 مائة مرة، و15 ÷ 0.1 يكبّر 15 عشر مرات.'), **EX('29.2 + 43 × 0.01 + 15 ÷ 0.1')),
   ev('normal', 'medium', '(29.2 + 43) × 0.01 + 15 ÷ 0.1', ('29.2 + 43 first; then × 0.01 and ÷ 0.1; then add.', 'احسب 29.2 + 43 أولًا، ثم × 0.01 و÷ 0.1، ثم اجمع.'), **EX('(29.2 + 43) × 0.01 + 15 ÷ 0.1')),
   ev('normal', 'medium', '(57 − 11) × 1.2 + 3.4 + 1.9 ÷ 10', ('57 − 11 first; then × 1.2 and 1.9 ÷ 10; then add from left to right.', 'احسب 57 − 11 أولًا، ثم × 1.2 و1.9 ÷ 10، ثم اجمع من اليسار إلى اليمين.'), **EX('(57 − 11) × 1.2 + 3.4 + 1.9 ÷ 10')),
   tf('normal', 'medium', ('158 ÷ (2 + 6) × 10.5 − 5 has the same value as 158 ÷ 2 + 6 × 10.5 − 5.', 'التعبير 158 ÷ (2 + 6) × 10.5 − 5 له قيمة 158 ÷ 2 + 6 × 10.5 − 5 نفسها.'), False, ('In the first one, 158 is divided by 8, not by 2.', 'في الأول يُقسم 158 على 8 وليس على 2.')),
  ])
idea('A626', 2, ('Challenge: place the grouping symbols', 'تحدٍّ: وضع الأقواس'),
  ('Kamal found the value 6.45 for 15.25 ÷ 2 + 3 + 6.8 ÷ 2: he put the parentheses around 2 + 3, so 15.25 ÷ (2 + 3) + 6.8 ÷ 2 = 3.05 + 3.4 = 6.45. 30 × (2.5 + 47.18 − 3.12 ÷ 0.1) = 554.4; (45.84 + 13.05) ÷ 5 + 20.32 − 1.14 × 2.1 = 29.704.',
   'وجد كمال القيمة 6.45 للتعبير 15.25 ÷ 2 + 3 + 6.8 ÷ 2: وضع الأقواس حول 2 + 3، أي 15.25 ÷ (2 + 3) + 6.8 ÷ 2 = 3.05 + 3.4 = 6.45. و30 × (2.5 + 47.18 − 3.12 ÷ 0.1) = 554.4، و(45.84 + 13.05) ÷ 5 + 20.32 − 1.14 × 2.1 = 29.704.'),
  [mc('boss', 'hard', ('Kamal put parentheses in 15.25 ÷ 2 + 3 + 6.8 ÷ 2 and found the value 6.45. Where did he put them?', 'وضع كمال الأقواس في 15.25 ÷ 2 + 3 + 6.8 ÷ 2 فوجد أن قيمته 6.45. أين وضعها؟'), ['15.25 ÷ (2 + 3) + 6.8 ÷ 2', '(15.25 ÷ 2 + 3) + 6.8 ÷ 2', '15.25 ÷ 2 + (3 + 6.8) ÷ 2', '(15.25 ÷ 2 + 3 + 6.8) ÷ 2'], ('Work out each choice and look for 6.45. 6.8 ÷ 2 = 3.4, so the first part must be 3.05.', 'احسب كل اختيار وابحث عن 6.45. 6.8 ÷ 2 = 3.4، إذن الجزء الأول يجب أن يكون 3.05.'), **EX('15.25 ÷ 2 + 3 + 6.8 ÷ 2')),
   ev('boss', 'hard', '30 × (2.5 + 47.18 − 3.12 ÷ 0.1)', ('Inside the parentheses: 3.12 ÷ 0.1 first, then + and −. Multiply by 30 last.', 'داخل الأقواس: 3.12 ÷ 0.1 أولًا ثم الجمع والطرح. اضرب في 30 في النهاية.'), **EX('30 × (2.5 + 47.18 − 3.12 ÷ 0.1)')),
   ev('boss', 'hard', '(45.84 + 13.05) ÷ 5 + 20.32 − 1.14 × 2.1', ('Parentheses, then ÷ 5 and × 2.1, then + and − from left to right.', 'الأقواس، ثم ÷ 5 و× 2.1، ثم الجمع والطرح من اليسار إلى اليمين.'), **EX('(45.84 + 13.05) ÷ 5 + 20.32 − 1.14 × 2.1')),
   ev('boss', 'hard', '158 ÷ (2 + 6) × 10.5 − 5', ('2 + 6 first; then ÷ and × from left to right; then − 5.', 'احسب 2 + 6 أولًا، ثم القسمة والضرب من اليسار إلى اليمين، ثم − 5.'), **EX('158 ÷ (2 + 6) × 10.5 − 5')),
  ])

# ================= Lesson 3 · Writing Expressions to Represent Scenarios (p125-126) =================
idea('A631', 3, ('With or without parentheses', 'بأقواس أو دون أقواس'),
  ('1.3 + 3.45 × 8 − 2.02 = 26.88 but (1.3 + 3.45) × 8 − 2.02 = 35.98; 64 ÷ 0.32 + 0.1 × 3.2 = 200.32 but 64 ÷ (0.32 + 0.1 × 3.2) = 100. Parentheses that hold a part that is done first anyway, as in 350 + (450.9 ÷ 2) + 23.7 = 599.15 or (50.6 × 12) − 6.8 ÷ 0.2 = 573.2, do not change the value.',
   '1.3 + 3.45 × 8 − 2.02 = 26.88 لكن (1.3 + 3.45) × 8 − 2.02 = 35.98، و64 ÷ 0.32 + 0.1 × 3.2 = 200.32 لكن 64 ÷ (0.32 + 0.1 × 3.2) = 100. أما الأقواس حول جزء يُحسب أولًا على أي حال، كما في 350 + (450.9 ÷ 2) + 23.7 = 599.15 أو (50.6 × 12) − 6.8 ÷ 0.2 = 573.2، فلا تغيّر القيمة.'),
  [ev('normal', 'easy', '1.3 + 3.45 × 8 − 2.02', H_MD, **EX('1.3 + 3.45 × 8 − 2.02')),
   ev('normal', 'easy', '(1.3 + 3.45) × 8 − 2.02', H_PAR, **EX('(1.3 + 3.45) × 8 − 2.02')),
   tf('timed', 'easy', ('350 + (450.9 ÷ 2) + 23.7 has the same value as 350 + 450.9 ÷ 2 + 23.7.', 'التعبير 350 + (450.9 ÷ 2) + 23.7 له قيمة 350 + 450.9 ÷ 2 + 23.7 نفسها.'), True, ('Without the parentheses, which part would you work out first anyway?', 'بدون الأقواس، أي جزء كنت ستحسبه أولًا على أي حال؟'), seconds=15),
   tf('timed', 'easy', ('(50.6 × 12) − 6.8 ÷ 0.2 has the same value as 50.6 × 12 − 6.8 ÷ 0.2.', 'التعبير (50.6 × 12) − 6.8 ÷ 0.2 له قيمة 50.6 × 12 − 6.8 ÷ 0.2 نفسها.'), True, ('Is the multiplication done before the subtraction even without the parentheses?', 'هل يُحسب الضرب قبل الطرح حتى بدون الأقواس؟'), seconds=15),
   ev('normal', 'medium', '64 ÷ (0.32 + 0.1 × 3.2)', ('Inside the parentheses: 0.1 × 3.2 first, then + 0.32. Then divide 64 by the result.', 'داخل الأقواس: 0.1 × 3.2 أولًا ثم + 0.32. ثم اقسم 64 على الناتج.'), **EX('64 ÷ (0.32 + 0.1 × 3.2)')),
   ev('normal', 'medium', '64 ÷ 0.32 + 0.1 × 3.2', ('64 ÷ 0.32 is the same as 6,400 ÷ 32.', '64 ÷ 0.32 مثل 6,400 ÷ 32.'), **EX('64 ÷ 0.32 + 0.1 × 3.2')),
   mc('normal', 'medium', ('When do parentheses NOT change the value of an expression?', 'متى لا تغيّر الأقواس قيمة التعبير العددي؟'), [('When they hold a part that is worked out first anyway', 'عندما تكون حول جزء يُحسب أولًا على أي حال'), ('Never: parentheses always change the value', 'أبدًا: الأقواس تغيّر القيمة دائمًا'), ('When they hold an addition', 'عندما تكون حول عملية جمع'), ('When the expression has decimals', 'عندما يكون في التعبير كسور عشرية')], ('Compare 350 + (450.9 ÷ 2) + 23.7 with 64 ÷ (0.32 + 0.1 × 3.2).', 'قارن 350 + (450.9 ÷ 2) + 23.7 مع 64 ÷ (0.32 + 0.1 × 3.2).')),
  ])
idea('A632', 3, ('From words to an expression', 'من الكلمات إلى تعبير عددي'),
  ('«Subtract 3.1 from 4.62, then multiply the result by 2» is (4.62 − 3.1) × 2 = 3.04. «Divide 93 by 0.3 and then add 114.7; then divide the result by 5» is (93 ÷ 0.3 + 114.7) ÷ 5 = 84.94. «The result» of a step goes in parentheses when the next operation must wait for it.',
   '«اطرح 3.1 من 4.62، ثم اضرب الناتج في 2» هو (4.62 − 3.1) × 2 = 3.04. و«اقسم 93 على 0.3، ثم اجمع 114.7، بعد ذلك اقسم الناتج على 5» هو (93 ÷ 0.3 + 114.7) ÷ 5 = 84.94. نضع «الناتج» بين أقواس عندما يجب أن تنتظره العملية التالية.'),
  [mc('normal', 'easy', ('Which expression means: subtract 3.1 from 4.62, then multiply the result by 2?', 'أي تعبير يعني: اطرح 3.1 من 4.62، ثم اضرب الناتج في 2؟'), ['(4.62 − 3.1) × 2', '4.62 − 3.1 × 2', '(3.1 − 4.62) × 2', '4.62 × 2 − 3.1'], ('«The result» must be found before multiplying, so it goes in parentheses.', '«الناتج» يجب أن يُحسب قبل الضرب، لذلك نضعه بين أقواس.')),
   ev('normal', 'easy', '(4.62 − 3.1) × 2', H_PAR),
   mc('normal', 'medium', ('Which expression means: divide 93 by 0.3 and then add 114.7; after that, divide the result by 5?', 'أي تعبير يعني: اقسم 93 على 0.3، ثم اجمع 114.7، بعد ذلك اقسم الناتج على 5؟'), ['(93 ÷ 0.3 + 114.7) ÷ 5', '93 ÷ 0.3 + 114.7 ÷ 5', '93 ÷ (0.3 + 114.7) ÷ 5', '(93 ÷ 0.3) + (114.7 ÷ 5)'], ('Everything before «divide the result» goes in the parentheses.', 'كل ما قبل «اقسم الناتج» يوضع بين الأقواس.')),
   ev('normal', 'medium', '(93 ÷ 0.3 + 114.7) ÷ 5', ('93 ÷ 0.3 is the same as 930 ÷ 3.', '93 ÷ 0.3 مثل 930 ÷ 3.')),
   tf('normal', 'medium', ('«Subtract 3.1 from 4.62» is written 3.1 − 4.62.', '«اطرح 3.1 من 4.62» نكتبها 3.1 − 4.62.'), False, ('We subtract FROM 4.62, so 4.62 comes first.', 'نطرح من 4.62، إذن يأتي 4.62 أولًا.')),
  ])
idea('A633', 3, ('More clues', 'مفاتيح حل أكثر'),
  ('«Add 30.4, 87 and 17.5. Then subtract the result from 224.7. Multiply by 100» is (224.7 − (30.4 + 87 + 17.5)) × 100 = 89.8 × 100 = 8,980. «Multiply 7.6 by 100, subtract 34.3, add 12.4, then divide the result by 0.1» is (7.6 × 100 − 34.3 + 12.4) ÷ 0.1 = 738.1 ÷ 0.1 = 7,381.',
   '«اجمع 30.4 و87 و17.5، ثم اطرح الناتج من 224.7. اضرب في 100» هو (224.7 − (30.4 + 87 + 17.5)) × 100 = 89.8 × 100 = 8,980. و«اضرب 7.6 في 100، ثم اطرح 34.3، ثم اجمع 12.4، بعد ذلك اقسم الناتج على 0.1» هو (7.6 × 100 − 34.3 + 12.4) ÷ 0.1 = 738.1 ÷ 0.1 = 7,381.'),
  [ev('timed', 'easy', '30.4 + 87 + 17.5', ('Add from left to right; line up the decimal points.', 'اجمع من اليسار إلى اليمين، ورتّب العلامات العشرية تحت بعضها.'), seconds=20),
   mc('normal', 'medium', ('Which expression means: add 30.4, 87 and 17.5; then subtract the result from 224.7; multiply by 100?', 'أي تعبير يعني: اجمع 30.4 و87 و17.5، ثم اطرح الناتج من 224.7، اضرب في 100؟'), ['(224.7 − (30.4 + 87 + 17.5)) × 100', '224.7 − 30.4 + 87 + 17.5 × 100', '(30.4 + 87 + 17.5 − 224.7) × 100', '224.7 − (30.4 + 87 + 17.5 × 100)'], ('The sum is subtracted FROM 224.7, and the whole difference is multiplied by 100.', 'المجموع يُطرح من 224.7، والفرق كله يُضرب في 100.')),
   ev('normal', 'medium', '(224.7 − (30.4 + 87 + 17.5)) × 100', ('Inner parentheses first: 30.4 + 87 + 17.5. Then subtract from 224.7, then × 100.', 'الأقواس الداخلية أولًا: 30.4 + 87 + 17.5. ثم اطرح من 224.7، ثم × 100.')),
   mc('normal', 'medium', ('Which expression means: multiply 7.6 by 100; next subtract 34.3; then add 12.4; last, divide the result by 0.1?', 'أي تعبير يعني: اضرب 7.6 في 100، ثم اطرح 34.3، ثم اجمع 12.4، بعد ذلك اقسم الناتج على 0.1؟'), ['(7.6 × 100 − 34.3 + 12.4) ÷ 0.1', '7.6 × 100 − 34.3 + 12.4 ÷ 0.1', '7.6 × (100 − 34.3 + 12.4) ÷ 0.1', '(7.6 × 100 − 34.3) + 12.4 ÷ 0.1'], ('The division by 0.1 is the last step, on the whole result.', 'القسمة على 0.1 آخر خطوة، وتكون على الناتج كله.')),
   ev('normal', 'medium', '(7.6 × 100 − 34.3 + 12.4) ÷ 0.1', ('Inside: 7.6 × 100 first, then − 34.3 and + 12.4. Dividing by 0.1 = × 10.', 'بالداخل: 7.6 × 100 أولًا، ثم − 34.3 و+ 12.4. والقسمة على 0.1 = × 10.')),
  ])
idea('A634', 3, ('Expressions and story problems', 'التعبيرات العددية والمسائل الكلامية'),
  ('Kamel has 1,000 LE and saves 50 LE + 30 LE a week for 4 weeks: 1,000 + (50 + 30) × 4 = 1,320 LE. Hoda pours 15.75 L into 16 vases and 3.75 L is left: (15.75 − 3.75) ÷ 16 = 0.75 L in each vase. Mounir cycles 38.7 km in 2 hours: 38.7 × 1,000 ÷ 120 = 322.5 m each minute.',
   'لدى كامل 1,000 جنيه ويدخر 50 جنيهًا + 30 جنيهًا كل أسبوع لمدة 4 أسابيع: 1,000 + (50 + 30) × 4 = 1,320 جنيهًا. وتسكب هدى 15.75 لترًا في 16 زهرية ويتبقى 3.75 لترات: (15.75 − 3.75) ÷ 16 = 0.75 لتر في كل زهرية. ويقطع منير 38.7 كيلومترًا في ساعتين: 38.7 × 1,000 ÷ 120 = 322.5 مترًا في الدقيقة.'),
  [num('normal', 'easy', ('Kamel saves 50 LE a week at his first job and 30 LE a week at his second job. How much does he save in one week?', 'يدخر كامل 50 جنيهًا في الأسبوع من الوظيفة الأولى و30 جنيهًا من الوظيفة الثانية. كم يدخر في أسبوع واحد؟'), '50 + 30', ('Add what he saves from the two jobs.', 'اجمع ما يدخره من الوظيفتين.'), unit=LE, **SAVE),
   mc('normal', 'medium', ('Kamel has 1,000 LE. For 4 weeks he saves 50 LE a week at one job and 30 LE a week at another. Which expression shows his savings at the end?', 'لدى كامل 1,000 جنيه. يدخر لمدة 4 أسابيع 50 جنيهًا في الأسبوع من وظيفة و30 جنيهًا من وظيفة أخرى. أي تعبير يوضح مدخراته في النهاية؟'), ['1,000 + (50 + 30) × 4', '1,000 + 50 + 30 × 4', '(1,000 + 50 + 30) × 4', '1,000 × 4 + 50 + 30'], ('Each week he saves (50 + 30); that happens 4 times; then add it to the 1,000.', 'كل أسبوع يدخر (50 + 30)، ويتكرر ذلك 4 مرات، ثم نضيفه إلى 1,000.'), **SAVE),
   num('normal', 'medium', ('How much has Kamel saved at the end of the 4 weeks?', 'كم ادخر كامل بنهاية الأسابيع الأربعة؟'), '1,000 + (50 + 30) × 4', ('Work out 1,000 + (50 + 30) × 4: parentheses, then ×, then +.', 'احسب 1,000 + (50 + 30) × 4: الأقواس ثم الضرب ثم الجمع.'), unit=LE, **SAVE),
   num('normal', 'easy', ('Hoda starts with 15.75 L of water and has 3.75 L left at the end. How many litres did she pour into the vases?', 'تبدأ هدى بـ 15.75 لترًا من الماء ويتبقى معها 3.75 لترات في النهاية. كم لترًا سكبت في الزهريات؟'), '15.75 − 3.75', ('Take what is left away from what she started with.', 'اطرح المتبقي من الكمية التي بدأت بها.'), unit=LIT, **VASE),
   mc('normal', 'medium', ('Hoda pours an equal amount from 15.75 L into 16 vases and has 3.75 L left. Which expression gives the water in each vase?', 'تسكب هدى كمية متساوية من 15.75 لترًا في 16 زهرية ويتبقى معها 3.75 لترات. أي تعبير يعطي كمية الماء في كل زهرية؟'), ['(15.75 − 3.75) ÷ 16', '15.75 − 3.75 ÷ 16', '15.75 ÷ 16 − 3.75', '(15.75 + 3.75) ÷ 16'], ('Only the water poured out is shared among the 16 vases.', 'الماء الذي سُكب فقط هو الذي يُقسم على 16 زهرية.'), **VASE),
   num('normal', 'medium', ('How much water is in each vase?', 'ما كمية الماء في كل زهرية؟'), '(15.75 − 3.75) ÷ 16', ('Work out (15.75 − 3.75) first, then share it among 16 vases.', 'احسب (15.75 − 3.75) أولًا، ثم وزّعه على 16 زهرية.'), unit=LIT, **VASE),
   num('timed', 'easy', ('Mounir cycles for 2 hours. How many minutes is that?', 'يركب منير الدراجة لمدة ساعتين. كم دقيقة هذه؟'), '2 × 60', ('One hour = 60 minutes.', 'الساعة = 60 دقيقة.'), unit=('minutes', 'دقيقة'), seconds=12, **BIKE),
   num('normal', 'easy', ('Mounir cycles 38.7 km. How many metres is that?', 'يقطع منير 38.7 كيلومترًا. كم مترًا هذه؟'), '38.7 × 1,000', ('1 km = 1,000 m.', 'الكيلومتر = 1,000 متر.'), unit=MET, **BIKE),
  ])
idea('A635', 3, ('Challenge: multistep expressions', 'تحدٍّ: تعبيرات بخطوات كثيرة'),
  ('Mounir cycles 38.7 km in 2 hours at the same rate: 38.7 km = 38,700 m and 2 hours = 120 minutes, so 38,700 ÷ 120 = 322.5 m each minute. «Find the difference between 10 and 9.27; multiply it by the sum of 54 and 46; then divide 1,168 by the result» is 1,168 ÷ ((10 − 9.27) × (54 + 46)) = 1,168 ÷ 73 = 16.',
   'يقطع منير 38.7 كيلومترًا في ساعتين بنفس المعدل: 38.7 كم = 38,700 متر وساعتان = 120 دقيقة، إذن 38,700 ÷ 120 = 322.5 مترًا في الدقيقة. و«أوجد الفرق بين 10 و9.27، اضربه في ناتج جمع 54 و46، بعد ذلك اقسم 1,168 على الناتج» هو 1,168 ÷ ((10 − 9.27) × (54 + 46)) = 1,168 ÷ 73 = 16.'),
  [num('boss', 'hard', ('Mounir cycles 38.7 km in 2 hours at the same rate the whole time. How many metres does he cycle each minute?', 'يقطع منير 38.7 كيلومترًا بالدراجة في ساعتين بنفس المعدل طوال الوقت. كم مترًا يقطع في الدقيقة؟'), '38.7 × 1,000 ÷ 120', ('Change kilometres to metres and hours to minutes, then divide.', 'حوّل الكيلومترات إلى أمتار والساعات إلى دقائق، ثم اقسم.'), unit=MET, **BIKE),
   mc('boss', 'hard', ('Which expression means: find the difference between 10 and 9.27; multiply it by the sum of 54 and 46; then divide 1,168 by the result?', 'أي تعبير يعني: أوجد الفرق بين 10 و9.27، اضربه في ناتج جمع 54 و46، بعد ذلك اقسم 1,168 على الناتج؟'), ['1,168 ÷ ((10 − 9.27) × (54 + 46))', '1,168 ÷ (10 − 9.27) × (54 + 46)', '(10 − 9.27) × (54 + 46) ÷ 1,168', '1,168 ÷ 10 − 9.27 × 54 + 46'], ('1,168 is divided by the WHOLE result, so the whole product goes in brackets.', 'يُقسم 1,168 على الناتج كله، لذلك يوضع حاصل الضرب كله بين أقواس.')),
   num('boss', 'hard', ('Work it out: 1,168 ÷ ((10 − 9.27) × (54 + 46)) = ?', 'احسب: 1,168 ÷ ((10 − 9.27) × (54 + 46)) = ؟'), '1,168 ÷ ((10 − 9.27) × (54 + 46))', ('10 − 9.27 and 54 + 46 first; multiply them; then divide 1,168 by the product.', 'احسب 10 − 9.27 و54 + 46 أولًا، ثم اضربهما، ثم اقسم 1,168 على حاصل الضرب.')),
  ])

# ================= Lesson 4 · Identifying Numerical Patterns (p127-130) =================
idea('A641', 4, ('Yaseen’s tile pattern', 'نمط بلاط ياسين'),
  ('Stage 1 has 5 tiles, Stage 2 has 9 and Stage 3 has 13: each stage adds 4 tiles, one at the end of each arm. Stage 4 has 17, Stage 5 has 21, and Stage 10 has 4 × 10 + 1 = 41 tiles.',
   'المرحلة الأولى فيها 5 بلاطات، والثانية 9، والثالثة 13: كل مرحلة تزيد 4 بلاطات، واحدة في طرف كل ذراع. المرحلة الرابعة فيها 17، والخامسة 21، والعاشرة 4 × 10 + 1 = 41 بلاطة.'),
  [num('timed', 'easy', ('Count the tiles in Stage 1.', 'عُد البلاطات في المرحلة الأولى.'), '5', ('Count the middle tile and the tiles around it.', 'عُد البلاطة التي في الوسط والبلاطات حولها.'), unit=TIL, seconds=15, **TILE(None, 1)),
   num('normal', 'easy', ('How many tiles are added from one stage to the next?', 'كم بلاطة تُضاف من مرحلة إلى المرحلة التالية؟'), '9 − 5', ('Count the tiles in Stage 1 and Stage 2 and find the difference.', 'عُد البلاطات في المرحلتين الأولى والثانية وأوجد الفرق.'), unit=TIL, **TILE()),
   num('normal', 'medium', ('How many tiles will Stage 4 have?', 'كم بلاطة ستكون في المرحلة الرابعة؟'), '13 + 4', ('Stage 3 has 13 tiles. One more tile grows at the end of each of the 4 arms.', 'المرحلة الثالثة فيها 13 بلاطة، وتنمو بلاطة في طرف كل ذراع من الأذرع الأربعة.'), unit=TIL, **TILE(4)),
   num('normal', 'medium', ('How many tiles will Stage 5 have?', 'كم بلاطة ستكون في المرحلة الخامسة؟'), '13 + 4 + 4', ('Keep adding 4 from Stage 3.', 'استمر في إضافة 4 بدءًا من المرحلة الثالثة.'), unit=TIL, **TILE(5)),
  ])
idea('A642', 4, ('Is it a numerical pattern?', 'هل الأعداد تمثل نمطًا؟'),
  ('5, 10, 20, 40, 80 (× 2), 1.5, 3, 4.5, 6, 7.5 (+ 1.5) and 85, 73, 61, 49, 37 (− 12) are numerical patterns. 3, 6, 9, 15, 21, 28; 5, 3, 6, 1, 7, 5 and 1, 3, 9, 18, 54 are not: no single rule makes every number from the one before.',
   'المجموعات 5، 10، 20، 40، 80 (× 2) و1.5، 3، 4.5، 6، 7.5 (+ 1.5) و85، 73، 61، 49، 37 (− 12) تمثل أنماطًا عددية. أما 3، 6، 9، 15، 21، 28 و5، 3، 6، 1، 7، 5 و1، 3، 9، 18، 54 فلا تمثل نمطًا: لا توجد قاعدة واحدة تعطي كل عدد من العدد الذي قبله.'),
  [mc('timed', 'easy', ('5, 10, 20, 40, 80 … What is the rule?', '5، 10، 20، 40، 80 … ما القاعدة؟'), [('Multiply by 2', 'اضرب في 2'), ('Add 5', 'أضف 5'), ('Add 10', 'أضف 10'), ('Multiply by 5', 'اضرب في 5')], ('Check the rule on every pair: 5 → 10, 10 → 20, 20 → 40.', 'جرّب القاعدة على كل زوج: 5 ← 10، و10 ← 20، و20 ← 40.'), seconds=15, **SEQ(['5', '10', '20', '40', '80'])),
   mc('timed', 'easy', ('1.5, 3, 4.5, 6, 7.5 … What is the rule?', '1.5، 3، 4.5، 6، 7.5 … ما القاعدة؟'), [('Add 1.5', 'أضف 1.5'), ('Multiply by 2', 'اضرب في 2'), ('Add 3', 'أضف 3'), ('Add 1', 'أضف 1')], ('Find the difference between two numbers next to each other.', 'أوجد الفرق بين كل عددين متتاليين.'), seconds=15, **SEQ(['1.5', '3', '4.5', '6', '7.5'])),
   mc('normal', 'easy', ('85, 73, 61, 49, 37 … What is the rule?', '85، 73، 61، 49، 37 … ما القاعدة؟'), [('Subtract 12', 'اطرح 12'), ('Subtract 10', 'اطرح 10'), ('Subtract 2', 'اطرح 2'), ('Add 12', 'أضف 12')], ('The numbers get smaller: by how much each time?', 'الأعداد تصغر: بكم في كل مرة؟'), **SEQ(['85', '73', '61', '49', '37'])),
   num('normal', 'medium', ('What is the next number? 85, 73, 61, 49, 37, ?', 'ما العدد التالي؟ 85، 73، 61، 49، 37، ؟'), '37 − 12', ('Use the rule of the pattern on the last number.', 'طبّق قاعدة النمط على آخر عدد.'), **SEQ(['85', '73', '61', '49', '37', '?'])),
   table('normal', 'medium', ('Sort the sets: which are numerical patterns?', 'صنّف المجموعات: أيها يمثل نمطًا عدديًا؟'), [('Pattern', 'نمط'), ('Not a pattern', 'ليس نمطًا')],
      ['5, 10, 20, 40, 80 …', '1.5, 3, 4.5, 6, 7.5 …', '85, 73, 61, 49, 37 …', '3, 6, 9, 15, 21, 28 …', '5, 3, 6, 1, 7, 5 …', '1, 3, 9, 18, 54 …'], [0, 0, 0, 1, 1, 1],
      ('A pattern has ONE rule that works for every number. Test the rule of the first pair on the others.', 'النمط له قاعدة واحدة تنطبق على كل الأعداد. جرّب قاعدة أول زوج على باقي الأعداد.')),
   tf('normal', 'medium', ('1, 3, 9, 18, 54 is a numerical pattern.', 'المجموعة 1، 3، 9، 18، 54 تمثل نمطًا عدديًا.'), False, ('1 → 3 and 3 → 9 are × 3. Is 9 → 18 also × 3?', '1 ← 3 و3 ← 9 ضرب في 3. هل 9 ← 18 ضرب في 3 أيضًا؟'), **SEQ(['1', '3', '9', '18', '54'])),
   term('normal', 'easy', ('Numbers that follow one rule, like 5, 10, 20, 40, 80.', 'أعداد تتبع قاعدة واحدة، مثل 5، 10، 20، 40، 80.'), ('Numerical pattern', 'نمط عددي'), [('Order of operations', 'ترتيب العمليات'), ('Parentheses', 'أقواس'), ('Expression', 'تعبير عددي')], ('It is in the title of the lesson.', 'موجود في عنوان الدرس.')),
  ])
idea('A643', 4, ('What’s the rule? Input and output', 'ما القاعدة؟ المُدخل والمُخرج'),
  ('A rule with a variable n turns every input into its output: 1 → 8, 2 → 16, 3 → 24 is n × 8; 1 → 8, 2 → 9, 3 → 10 is n + 7; 3 → 12, 6 → 24, 9 → 36 is n × 4; 5 → 1, 10 → 2, 15 → 3 is n ÷ 5.',
   'القاعدة التي فيها المتغير n تحوّل كل مُدخل إلى مُخرجه: 1 ← 8، 2 ← 16، 3 ← 24 قاعدتها n × 8، و1 ← 8، 2 ← 9، 3 ← 10 قاعدتها n + 7، و3 ← 12، 6 ← 24، 9 ← 36 قاعدتها n × 4، و5 ← 1، 10 ← 2، 15 ← 3 قاعدتها n ÷ 5.'),
  [mc('normal', 'easy', ('Look at the table. What is the rule?', 'لاحظ الجدول. ما القاعدة؟'), [R('n × 8'), R('n + 7'), R('n + 8'), R('n × 2')], ('Test it on every row: 1 → 8, 2 → 16, 3 → 24.', 'جرّبها على كل صف: 1 ← 8، و2 ← 16، و3 ← 24.'), **IO([[1, 8], [2, 16], [3, 24], [4, 32], [5, 40]])),
   mc('normal', 'easy', ('Look at the table. What is the rule?', 'لاحظ الجدول. ما القاعدة؟'), [R('n + 7'), R('n × 8'), R('n + 1'), R('n × 7')], ('n × 8 works for 1 → 8. Does it work for 2 → 9?', 'القاعدة n × 8 تنطبق على 1 ← 8. هل تنطبق على 2 ← 9؟'), **IO([[1, 8], [2, 9], [3, 10], [4, 11]])),
   mc('normal', 'medium', ('Look at the table. What is the rule?', 'لاحظ الجدول. ما القاعدة؟'), [R('n × 4'), R('n + 9'), R('n × 3'), R('n + 12')], ('n + 9 works for 3 → 12. Test it on 6 → 24.', 'القاعدة n + 9 تنطبق على 3 ← 12. جرّبها على 6 ← 24.'), **IO([[3, 12], [6, 24], [9, 36], [12, 48]])),
   mc('normal', 'medium', ('Look at the table. What is the rule?', 'لاحظ الجدول. ما القاعدة؟'), [R('n ÷ 5'), R('n − 4'), R('n × 5'), R('n − 5')], ('The outputs are smaller than the inputs. 5 → 1 and 10 → 2: which operation does that?', 'المُخرجات أصغر من المُدخلات. 5 ← 1 و10 ← 2: أي عملية تعطي ذلك؟'), **IO([[5, 1], [10, 2], [15, 3], [20, 4], [25, 5]])),
   num('normal', 'medium', ('The rule is n × 8. What is the output for the input 6?', 'القاعدة n × 8. ما المُخرج عندما يكون المُدخل 6؟'), '6 × 8', ('Put 6 in place of n.', 'ضع 6 مكان n.'), **IO([[1, 8], [2, 16], [3, 24], [6, '?']], ask=3)),
   num('normal', 'medium', ('The rule is n ÷ 5. What is the output for the input 30?', 'القاعدة n ÷ 5. ما المُخرج عندما يكون المُدخل 30؟'), '30 ÷ 5', ('Put 30 in place of n.', 'ضع 30 مكان n.'), **IO([[5, 1], [10, 2], [15, 3], [30, '?']], ask=3)),
  ])
idea('A644', 4, ('Bicycle wheels', 'عجلات الدراجات'),
  ('1 bicycle has 2 wheels, 2 bicycles have 4, 3 have 6 … The rule is n × 2: 6 bicycles have 12 wheels and 10 bicycles have 20.',
   'الدراجة الواحدة لها عجلتان، والدراجتان لهما 4 عجلات، و3 دراجات لها 6 عجلات … القاعدة n × 2: إذن 6 دراجات لها 12 عجلة، و10 دراجات لها 20 عجلة.'),
  [mc('timed', 'easy', ('Number of bicycles (input) and number of wheels (output). What is the rule?', 'عدد الدراجات (المُدخل) وعدد العجلات (المُخرج). ما القاعدة؟'), [R('n × 2'), R('n + 2'), R('n + 1'), R('n × 4')], ('How many wheels does one bicycle have?', 'كم عجلة للدراجة الواحدة؟'), seconds=15, **IO([[1, 2], [2, 4], [3, 6], [4, 8], [5, 10]], bikes=True)),
   num('normal', 'easy', ('How many wheels do 6 bicycles have?', 'كم عجلة لـ 6 دراجات؟'), '6 × 2', ('Use the rule n × 2 with n = 6.', 'استخدم القاعدة n × 2 حيث n = 6.'), unit=WHL, **IO([[1, 2], [2, 4], [3, 6], [6, '?']], ask=3, bikes=True)),
   num('normal', 'medium', ('How many wheels do 10 bicycles have?', 'كم عجلة لـ 10 دراجات؟'), '10 × 2', ('Use the rule n × 2 with n = 10.', 'استخدم القاعدة n × 2 حيث n = 10.'), unit=WHL, **IO([[1, 2], [2, 4], [3, 6], [10, '?']], ask=3, bikes=True)),
   num('normal', 'medium', ('There are 16 wheels. How many bicycles are there?', 'هناك 16 عجلة. كم عدد الدراجات؟'), '16 ÷ 2', ('Go back from output to input: undo × 2.', 'ارجع من المُخرج إلى المُدخل: اعكس الضرب في 2.'), **IO([[1, 2], [2, 4], [3, 6], ['?', 16]], ask=3, bikes=True)),
  ])
idea('A645', 4, ('Challenge: Stage 10, two-step rules and who is right?', 'تحدٍّ: المرحلة العاشرة وقاعدة بخطوتين ومن على صواب؟'),
  ('Yaseen’s Stage 10 has 4 × 10 + 1 = 41 tiles. Challenge table 2 → 3, 4 → 7, 6 → 11, 8 → 15, 10 → 19: the rule is n × 2 − 1. Yahia and Walid: the input 28 gives 4, 35 gives 5, 42 gives 6. Walid is right: the rule is n ÷ 7 (28 ÷ 7 = 4). Yahia’s n × 7 turns the output into the input, not the input into the output.',
   'جدول سؤال التحدي 2 ← 3، 4 ← 7، 6 ← 11، 8 ← 15، 10 ← 19 قاعدته n × 2 − 1. يحيى ووليد: المُدخل 28 يعطي 4، و35 يعطي 5، و42 يعطي 6. وليد على صواب: القاعدة n ÷ 7 (28 ÷ 7 = 4). أما قاعدة يحيى n × 7 فتحوّل المُخرج إلى المُدخل وليس المُدخل إلى المُخرج.'),
  [num('boss', 'hard', ('How many tiles will Stage 10 have?', 'كم بلاطة ستكون في المرحلة العاشرة؟'), '4 × 10 + 1', ('Each arm has as many tiles as the stage number, and there is one tile in the middle.', 'كل ذراع فيها عدد من البلاط يساوي رقم المرحلة، وفي الوسط بلاطة واحدة.'), unit=TIL, **TILE(10)),
   mc('boss', 'hard', ('Look at the table. What is the rule?', 'لاحظ الجدول. ما القاعدة؟'), [R('n × 2 − 1'), R('n + 1'), R('n × 2'), R('n + 9')], ('Each time the input goes up 2, the output goes up 4. Start with n × 2 and fix it.', 'كلما زاد المُدخل 2 زاد المُخرج 4. ابدأ بـ n × 2 ثم صحّحها.'), **IO([[2, 3], [4, 7], [6, 11], [8, 15], [10, 19]])),
   num('boss', 'hard', ('Using the rule n × 2 − 1, what is the output for the input 12?', 'باستخدام القاعدة n × 2 − 1، ما المُخرج عندما يكون المُدخل 12؟'), '12 × 2 − 1', ('Multiply 12 by 2 first, then subtract 1.', 'اضرب 12 في 2 أولًا، ثم اطرح 1.'), **IO([[2, 3], [4, 7], [6, 11], [12, '?']], ask=3)),
   mc('boss', 'hard', ('Input 28 → output 4, 35 → 5, 42 → 6. Yahia says the rule is n × 7; Walid says n ÷ 7. Who is right?', 'المُدخل 28 ← المُخرج 4، و35 ← 5، و42 ← 6. يقول يحيى إن القاعدة n × 7، ويقول وليد n ÷ 7. من على صواب؟'), [('Walid: n ÷ 7', 'وليد: n ÷ 7'), ('Yahia: n × 7', 'يحيى: n × 7'), ('Both of them', 'كلاهما'), ('Neither of them', 'لا أحد منهما')], ('The rule must turn the INPUT into the OUTPUT. Put 28 in place of n.', 'القاعدة يجب أن تحوّل المُدخل إلى المُخرج. ضع 28 مكان n.'), **IO([[28, 4], [35, 5], [42, 6], [49, 7], [56, 8]])),
   num('boss', 'hard', ('Using Walid’s rule n ÷ 7, what is the output for the input 63?', 'باستخدام قاعدة وليد n ÷ 7، ما المُخرج عندما يكون المُدخل 63؟'), '63 ÷ 7', ('Put 63 in place of n and divide.', 'ضع 63 مكان n واقسم.'), **IO([[28, 4], [35, 5], [42, 6], [63, '?']], ask=3)),
  ])

HEAD_EN = """/* Grade 5 · Math (Languages) · Unit 6 «Numerical Expressions and Patterns», first term 2026/2027
   Source: the ministry book (English), Unit 6, Concept 1 «Evaluating Numerical Expressions and Patterns», pages 121-130 (4 lessons).
   Idea ids: every letter A-Z is used by Units 1-5, so Unit 6 uses A6 + lesson + idea (A611 … A645), numbers no unit used.
   Boss ideas (the last of each lesson): A616, A626, A635, A645 (A645 starts with Yaseen's Stage 10).
   The book is an activity book with no printed answers: the expressions and stories are the book's own and EVERY number answer is computed (calc, checked by tools/check_questions.js).
   Every phrasing has a hint that names the first step, never the answer (owner's rule, 6 Nov 2026).
   Pictures (math/m5_art.js, new for this unit): exprCard (the expression, × ÷ and + − in two colours, rewritten steps), busRoute (Ali's four stops), tilePlus (Yaseen's tiles, drawn tile by tile),
   ioTable (input/output, bicycles drawn), seqStrip (a set of numbers), saveFig (Kamel's savings), vaseFig (Hoda's 16 vases), bikeFig (Mounir's ride).
   Review notes:
   - Lesson 1: the English text of the PDF lost some ÷ signs; the expressions follow the Arabic book's pages (same numbers): 597.8 ÷ 6.1, 1,403.5 − 12.3 ÷ 0.01, 89.14 ÷ 0.1, 102.15 + 6 ÷ 1.2.
   - Lesson 1, The Right Route: the stop letters are the book's (Languages B, E, M, P; Arabic ب، هـ، م، ع); the options show only the expressions (the quiz page letters its own options).
   - Lesson 2, Make It Smaller: open activity («describe how»); asked only as values of the groupings and «which grouping gives the smallest value» (derived from the printed expressions).
   - Lesson 2, How Many Values?: open («as many as you can»); asked as the values of some groupings (derived).
   - Lesson 2, Place the Grouping Symbols: 15.25 ÷ (2 + 3) + 6.8 ÷ 2 = 6.45 is the only grouping among the choices with that value.
   - Lesson 3, With or Without: 350 + (450.9 ÷ 2) + 23.7 and (50.6 × 12) − 6.8 ÷ 0.2 have the same value with and without the parentheses.
   - Lesson 3, Mounir: 38.7 km in 2 hours = 38,700 m in 120 minutes = 322.5 m each minute.
   - Lesson 4: 3, 6, 9, 15, 21, 28; 5, 3, 6, 1, 7, 5 and 1, 3, 9, 18, 54 have no single rule: «not a pattern». Stage n of Yaseen's tiles has 4 × n + 1 tiles (5, 9, 13 printed).
   - Lesson 4, Challenge table (2 → 3 … 10 → 19): n × 2 − 1. Yahia/Walid: Walid (n ÷ 7) is right; «explain how you know» is asked as a choice.
   - Not asked: «Draw Stage 4 and Stage 5» (asked as the number of tiles), Writing About Math, Check Your Understanding.
   Generated together with questions_m5c6_ar.js by math/tools/gen_m5c6.py (same ids, phrasings order and answers). */"""
HEAD_AR = """/* الصف الخامس الابتدائي · الرياضيات (عربي) · الوحدة السادسة «التعبيرات العددية والأنماط»، الفصل الدراسي الأول 2026/2027
   المصدر: كتاب الوزارة العربي، الوحدة السادسة، المفهوم الأول «إيجاد قيمة التعبيرات العددية وتحليل الأنماط» (صفحات 121–130، 4 دروس).
   أرقام الأفكار: الحروف A–Z استخدمتها الوحدات 1–5، فالوحدة 6 تستخدم A6 ثم رقم الدرس ثم رقم الفكرة (A611 … A645)، وهي أرقام لم تستخدمها وحدة أخرى.
   أفكار التحدي (آخر فكرة في كل درس): A616, A626, A635, A645 (وتبدأ A645 بالمرحلة العاشرة من بلاط ياسين).
   الملف مطابق لملف اللغات math/questions_m5c6.js (نفس الأفكار والترتيب والإجابات)، والكتابان متطابقان في الأعداد. الأرقام غربية كالكتاب، وكل عدد أو تعبير وسط الكلام داخل ltr.
   الكتاب كتاب نشاط بلا إجابات مطبوعة، لذلك كل إجابة رقمية محسوبة (calc) ويتحقق منها tools/check_questions.js.
   لكل صيغة سؤال تلميح يذكر أول خطوة ولا يعطي الإجابة (قاعدة المالك، 6 نوفمبر 2026).
   الصور (math/m5_art.js، جديدة لهذه الوحدة): exprCard وbusRoute وtilePlus وioTable وseqStrip وsaveFig وvaseFig وbikeFig.
   ملاحظات للمراجعة:
   - الدرس 1، المسار الصحيح: حروف المحطات من الكتاب العربي (ب، هـ، م، ع)، والاختيارات تعرض التعبيرات فقط لأن صفحة الأسئلة ترقّم اختياراتها بحروف.
   - الدرس 2، أصغر قيمة: نشاط مفتوح («وضّح كيف»)؛ سألنا عن قيم التجميعات وعن «أي تجميع يعطي أصغر قيمة» (مستنتج من التعبيرات المطبوعة).
   - الدرس 2، قيم مختلفة: نشاط مفتوح («أكبر عدد ممكن»)؛ سألنا عن قيم بعض التجميعات (مستنتج).
   - الدرس 2، وضع الأقواس: 15.25 ÷ (2 + 3) + 6.8 ÷ 2 = 6.45 هو التجميع الوحيد بين الاختيارات الذي يعطي هذه القيمة.
   - الدرس 3، بأقواس أو دون أقواس: 350 + (450.9 ÷ 2) + 23.7 و(50.6 × 12) − 6.8 ÷ 0.2 قيمتهما واحدة بالأقواس وبدونها.
   - الدرس 3، منير: 38.7 كم في ساعتين = 38,700 متر في 120 دقيقة = 322.5 مترًا في الدقيقة.
   - الدرس 4: المجموعات 3، 6، 9، 15، 21، 28 و5، 3، 6، 1، 7، 5 و1، 3، 9، 18، 54 ليس لها قاعدة واحدة: «ليست نمطًا». المرحلة n من بلاط ياسين فيها 4 × n + 1 بلاطة (5 و9 و13 مطبوعة).
   - الدرس 4، جدول التحدي (2 ← 3 … 10 ← 19): n × 2 − 1. يحيى ووليد: وليد (n ÷ 7) على صواب، و«اشرح كيف عرفت» سألناها اختيارًا.
   - لا يُسأل عن: «ارسم المرحلة الرابعة والخامسة» (سألنا عن عدد البلاط)، و«الكتابة عن الرياضيات»، و«تحقق من فهمك». */"""
LES_EN = ['Lesson 1 · Ordering of Mathematical Operations (pages 121-122)', 'Lesson 2 · Numerical Expressions with Parentheses (pages 123-124)', 'Lesson 3 · Writing Expressions to Represent Scenarios (pages 125-126)', 'Lesson 4 · Identifying Numerical Patterns (pages 127-130)']
LES_AR = ['الدرس 1 · ترتيب إجراء العمليات الحسابية (ص 121–122)', 'الدرس 2 · تعبيرات عددية تتضمن أقواسًا (ص 123–124)', 'الدرس 3 · كتابة تعبير عددي لتمثيل موقف ما (ص 125–126)', 'الدرس 4 · تحديد الأنماط العددية (ص 127–130)']

def write(ar):
    out = [HEAD_AR if ar else HEAD_EN, '(function () {',
           "window.CHAPTER = { id: 'm5c6', title: '%s', grade: '%s', track: '%s' };" % (('التعبيرات العددية والأنماط', 'الصف الخامس', 'عربي') if ar else ('Numerical Expressions and Patterns', 'Grade 5', 'Languages')),
           '', 'window.IDEAS = [']
    rows, les = [], 0
    for I in IDEAS:
        if I['lesson'] != les:
            les = I['lesson']; rows.append(('  /* ---------- %s ---------- */' % (LES_AR if ar else LES_EN)[les - 1], None))
        vs = ',\n'.join('      ' + json.dumps(tr(v, ar), ensure_ascii=False, separators=(',', ':')) for v in I['variants'])
        boss = all(v['mode'] == 'boss' for v in I['variants'])
        head = json.dumps(dict(id=I['id'], lesson=les, **({'boss': True} if boss else {}), concept=L(I['concept'], ar), explain=L(I['explain'], ar)), ensure_ascii=False, separators=(',', ':'))[:-1]
        rows.append(('  ' + head + ',\n    "variants": [\n' + vs + '\n    ] }', 1))
    body = ''
    for i, (txt, isI) in enumerate(rows):
        later = any(x[1] for x in rows[i + 1:])
        body += txt + (',' if isI and later else '') + '\n'
    out.append(body + '];\n})();\n')
    open(OUT + ('/math/questions_m5c6_ar.js' if ar else '/math/questions_m5c6.js'), 'w').write('\n'.join(out))

write(False); write(True)
print(len(IDEAS), 'ideas', sum(len(I['variants']) for I in IDEAS), 'phrasings')
