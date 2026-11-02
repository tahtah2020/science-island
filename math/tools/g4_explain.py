# Explanations shown under a question after it is answered (Grade 4 Math, units 5-8).
# Owner's rule (2 Nov 2026): the box under a question must talk about THAT question only.
#   - every number question gets its own worked answer (auto from the question or its calc, or written by hand: explain=(en, ar));
#   - the idea's explanation (shown for choice / true-false questions) is a short rule with no numbers from other questions: RULES below.
import re

def fmt(n):
    n = int(n) if float(n).is_integer() else n
    return '{:,}'.format(n)

def _expr_text(calc):
    """'(27+12)*5' -> '(27 + 12) × 5' with thousands separators."""
    t = re.sub(r'\d+', lambda m: fmt(int(m.group(0))), calc)
    t = t.replace('*', ' × ').replace('/', ' ÷ ').replace('+', ' + ').replace('-', ' − ')
    return re.sub(r'\s+', ' ', t).strip()

def bare(q):
    """Explanation for a bare arithmetic question such as '40 − 7 × 5 + 2 = ?'."""
    m = re.fullmatch(r'\s*([\d,\s×÷+−]+?)\s*=\s*\?\s*', q)
    if not m: return None
    t = re.findall(r'\d[\d,]*|[×÷+−]', m.group(1)); nums = [int(x.replace(',', '')) for x in t[0::2]]; ops = t[1::2]
    if not ops: return None
    if len(ops) == 1:
        a, b, op = nums[0], nums[1], ops[0]
        if op == '×':
            big, small = (a, b) if a >= b else (b, a)
            res = a * b
            if big >= 1000 and small in (10, 100, 1000) or a == 0 or b == 0 or a == 1 or b == 1:
                pass
            elif small < 10 and len(str(big)) > 1:
                parts = [int(d) * 10 ** i for i, d in enumerate(reversed(str(big))) if d != '0'][::-1]
                if len(parts) > 1:
                    ex = ' + '.join('(%s × %s)' % (fmt(x), small) for x in parts)
                    ps = ' + '.join(fmt(x * small) for x in parts)
                    return ('Split %s by place value: %s × %s = %s = %s = %s.' % (fmt(big), fmt(big), small, ex, ps, fmt(res)),
                            'نحلل %s حسب القيمة المكانية: %s × %s = %s = %s = %s.' % (fmt(big), fmt(big), small, ex, ps, fmt(res)))
            if b == 0 or a == 0:
                return ('Any number times 0 is 0: %s × %s = 0.' % (fmt(a), fmt(b)), 'أي عدد مضروب في 0 يساوي 0: %s × %s = 0.' % (fmt(a), fmt(b)))
            if b == 1 or a == 1:
                return ('Any number times 1 is the same number: %s × %s = %s.' % (fmt(a), fmt(b), fmt(res)), 'أي عدد مضروب في 1 يساوي العدد نفسه: %s × %s = %s.' % (fmt(a), fmt(b), fmt(res)))
            return ('%s × %s = %s.' % (fmt(a), fmt(b), fmt(res)), '%s × %s = %s.' % (fmt(a), fmt(b), fmt(res)))
        if op == '÷' and a % b == 0:
            c = a // b
            return ('%s ÷ %s = %s, because %s × %s = %s.' % (fmt(a), b, fmt(c), fmt(c), b, fmt(a)),
                    '%s ÷ %s = %s، لأن %s × %s = %s.' % (fmt(a), b, fmt(c), fmt(c), b, fmt(a)))
        return None
    en, ar, first = [], [], True
    nums, ops = nums[:], ops[:]
    if all(o == '×' for o in ops):   # 3 × 2 × 4: group two factors first
        r = nums[0] * nums[1]
        rest = ' × '.join(fmt(x) for x in nums[2:])
        tot = 1
        for x in nums: tot *= x
        s = '(%s × %s) × %s = %s × %s = %s.' % (nums[0], nums[1], rest, fmt(r), rest, fmt(tot))
        return ('Group two factors first: ' + s, 'نجمّع عاملين أولًا: ' + s)
    while any(o in '×÷' for o in ops):
        i = next(k for k, o in enumerate(ops) if o in '×÷')
        a, b = nums[i], nums[i + 1]; r = a * b if ops[i] == '×' else a // b
        en.append(('%s first: ' % ('Multiply' if ops[i] == '×' else 'Divide') if first else 'Then ') + '%s %s %s = %s' % (fmt(a), ops[i], fmt(b), fmt(r)))
        ar.append(('%s أولًا: ' % ('نضرب' if ops[i] == '×' else 'نقسم') if first else 'ثم ') + '%s %s %s = %s' % (fmt(a), ops[i], fmt(b), fmt(r)))
        nums[i:i + 2] = [r]; del ops[i]; first = False
    steps = []
    while ops:
        a, b = nums[0], nums[1]; r = a + b if ops[0] == '+' else a - b
        steps.append('%s %s %s = %s' % (fmt(a), ops[0], fmt(b), fmt(r)))
        nums[0:2] = [r]; del ops[0]
    if steps:
        en.append(('Then from left to right: ' if en else 'From left to right: ') + ', '.join(steps))
        ar.append(('ثم من اليسار إلى اليمين: ' if ar else 'من اليسار إلى اليمين: ') + '، ثم '.join(steps))
    return ('. '.join(en) + '.', '. '.join(ar) + '.')

def from_calc(calc, answer):
    if re.fullmatch(r'\d+', calc): return None
    s = '%s = %s.' % (_expr_text(calc), fmt(float(answer)))
    return (s, s)

def _round_big(n):
    p = 10 ** (len(str(n)) - 1)
    return int(round(n / p) * p) if n >= 10 else n
def choice_explain(q):
    """Choice questions with their own numbers: remainders, estimates."""
    m = re.fullmatch(r'\s*([\d,]+) ÷ (\d+) = \?\s*', q)
    if m:
        a, b = int(m.group(1).replace(',', '')), int(m.group(2))
        return rem_ex(a, b) if a % b else bare(q)
    m = re.fullmatch(r'Estimate ([\d,]+) × (\d+)\.', q)
    if m:
        a, b = int(m.group(1).replace(',', '')), int(m.group(2)); r = _round_big(a)
        return ('%s is about %s: %s × %s = %s.' % (fmt(a), fmt(r), fmt(r), b, fmt(r * b)), 'العدد %s تقريبًا %s: %s × %s = %s.' % (fmt(a), fmt(r), fmt(r), b, fmt(r * b)))
    m = re.fullmatch(r'Will ([\d,]+) ÷ (\d+) be closer to ([\d,]+) or ([\d,]+)\?', q)
    if m:
        a, b = int(m.group(1).replace(',', '')), int(m.group(2)); c = a // b
        return ('%s ÷ %s is about %s, so it is closer to %s.' % (fmt(a), b, fmt(c), m.group(3) if abs(c - int(m.group(3).replace(',', ''))) < abs(c - int(m.group(4).replace(',', ''))) else m.group(4)),
                '%s ÷ %s تقريبًا %s، إذن أقرب إلى %s.' % (fmt(a), b, fmt(c), m.group(3) if abs(c - int(m.group(3).replace(',', ''))) < abs(c - int(m.group(4).replace(',', ''))) else m.group(4)))
    m = re.fullmatch(r'Is ([\d,]+) × (\d+) closer to ([\d,]+) or closer to ([\d,]+)\?', q)
    if m:
        a, b = int(m.group(1).replace(',', '')), int(m.group(2)); r = _round_big(a)
        return ('%s is about %s: %s × %s = %s, closer to %s.' % (a, r, r, b, fmt(r * b), m.group(3)), 'العدد %s تقريبًا %s: %s × %s = %s، أي أقرب إلى %s.' % (a, r, r, b, fmt(r * b), m.group(3)))
    m = re.fullmatch(r'The quotient of ([\d,]+) ÷ (\d+) will be between …', q)
    if m:
        a, b = int(m.group(1)), int(m.group(2)); c = a // b; lo = 10 ** (len(str(c)) - 1); lo = c // lo * lo; hi = lo + 10 ** (len(str(c)) - 1)
        return ('%d × %d = %d and %d × %d = %d, so %d ÷ %d is between %d and %d (it is %d).' % (b, lo, b * lo, b, hi, b * hi, a, b, lo, hi, c),
                '%d × %d = %d و%d × %d = %d، إذن %d ÷ %d بين %d و%d (يساوي %d).' % (b, lo, b * lo, b, hi, b * hi, a, b, lo, hi, c))
    return None

def apply(v):
    """Give a question its own explanation when it has none."""
    if 'explain' in v: return
    q = v['q'][0] if isinstance(v['q'], tuple) else v['q']
    if v['type'] == 'mc':
        e = choice_explain(q)
        if e: v['explain'] = e
        return
    if v['type'] != 'num': return
    e = bare(q) or from_calc(v['calc'], v['answer'])
    if e: v['explain'] = e

# helpers for hand-written explanations
def factors(n): return [d for d in range(1, n + 1) if n % d == 0]
def gcf_ex(a, b):
    fa, fb = factors(a), factors(b); g = max(set(fa) & set(fb))
    la, lb = ', '.join(map(str, fa)), ', '.join(map(str, fb))
    return ('Factors of %d: %s. Factors of %d: %s. The greatest common factor is %d.' % (a, la, b, lb, g),
            'عوامل %d: %s. عوامل %d: %s. العامل المشترك الأكبر هو %d.' % (a, la.replace(', ', '، '), b, lb.replace(', ', '، '), g))
def lcm_ex(a, b):
    ma = [a * k for k in range(1, 9)]; mb = [b * k for k in range(1, 9)]; c = min(set(ma) & set(mb))
    la = ', '.join(str(x) for x in ma if x <= c); lb = ', '.join(str(x) for x in mb if x <= c)
    return ('Multiples of %d: %s. Multiples of %d: %s. The first common multiple is %d.' % (a, la, b, lb, c),
            'مضاعفات %d: %s. مضاعفات %d: %s. أول مضاعف مشترك هو %d.' % (a, la.replace(', ', '، '), b, lb.replace(', ', '، '), c))
def rem_ex(a, b, en_what='', ar_what=''):
    q, r = divmod(a, b)
    return ('%d ÷ %d = %d R%d, because %d × %d = %d and %d − %d = %d.%s' % (a, b, q, r, q, b, q * b, a, q * b, r, (' ' + en_what) if en_what else ''),
            '%d ÷ %d = %d والباقي %d، لأن %d × %d = %d و%d − %d = %d.%s' % (a, b, q, r, q, b, q * b, a, q * b, r, (' ' + ar_what) if ar_what else ''))

# ---------- the idea explanations: a short rule, no numbers from other questions ----------
RULES = {
 # Unit 5
 'Y11': ('To find how many times greater a number is, divide the big number by the small one.', 'لمعرفة كم مرة يساوي عدد عددًا آخر نقسم العدد الكبير على العدد الصغير.'),
 'Y12': ('In a tape diagram the long tape is made of equal parts, each as long as the short tape. Count the parts to find how many times.', 'في مخطط الشرائط يتكون الشريط الطويل من أجزاء متساوية، كل جزء بطول الشريط القصير. نعد الأجزاء لنعرف كم مرة.'),
 'Y13': ('Ask how many times the small one fits in the big one, then check with multiplication.', 'نسأل: كم مرة يتكرر الصغير ليساوي الكبير؟ ثم نتحقق بالضرب.'),
 'Y21': ('"Times faster" compares two speeds by multiplication. Read the number in the infographic sentence about these two.', 'عبارة «ضعف السرعة» أو «أضعاف السرعة» تقارن سرعتين بالضرب. اقرأ العدد في جملة المخطط عن هاتين الوسيلتين.'),
 'Y22': ('"times as many" means multiply. Use a letter for the unknown number and keep the numbers in the same places as the sentence.', 'كلمة «أضعاف» تعني الضرب. نستخدم رمزًا للعدد المجهول ونضع الأعداد كما في الجملة.'),
 'Y23': ('Find the comparison in the story, then write it as a multiplication with a letter for the unknown.', 'نحدد المقارنة في المسألة ثم نكتبها عملية ضرب برمز للعدد المجهول.'),
 'Y24': ('If one way is 3 times faster, it needs 3 times less time: divide the time by 3.', 'إذا كانت وسيلة أسرع بثلاث مرات فإنها تحتاج وقتًا أقل بثلاث مرات: نقسم الوقت على 3.'),
 'Y31': ('To find a missing factor, divide the product by the factor you know. Multiplication and division are related.', 'لإيجاد العامل المجهول نقسم حاصل الضرب على العامل المعلوم. الضرب والقسمة عمليتان مرتبطتان.'),
 'Y32': ('Read the seats of both vehicles in the table, then divide the bigger number by the smaller.', 'نقرأ عدد مقاعد الوسيلتين من الجدول ثم نقسم العدد الأكبر على الأصغر.'),
 'Y33': ('Read both numbers of seats, then divide the bigger number by the smaller.', 'نقرأ عددي المقاعد ثم نقسم العدد الأكبر على الأصغر.'),
 'Y41': ('Commutative Property of Multiplication: changing the order of the factors does not change the product.', 'خاصية الإبدال في عملية الضرب: تغيير ترتيب العوامل لا يغيّر حاصل الضرب.'),
 'Y42': ('Equal rows need a factor pair: rows × things in each row = the total.', 'الصفوف المتساوية تحتاج زوج عوامل: عدد الصفوف × العدد في كل صف = العدد الكلي.'),
 'Y43': ('6 teams of 7 and 7 teams of 6 are the same: 6 × 7 = 7 × 6 = 42 (Commutative Property).', '6 فرق في كل فريق 7 و7 فرق في كل فريق 6 متساويان: 6 × 7 = 7 × 6 = 42 (خاصية الإبدال).'),
 'Y51': ('Identity Property: a number × 1 = the same number. Zero Property: a number × 0 = 0.', 'خاصية العنصر المحايد: العدد × 1 = العدد نفسه. خاصية الضرب في صفر: العدد × 0 = 0.'),
 'Y52': ('× 1 keeps the number (Identity Property); × 0 gives 0 (Zero Property); changing the order keeps the product (Commutative Property).', 'الضرب في 1 يُبقي العدد (العنصر المحايد)، والضرب في 0 يعطي 0 (الضرب في صفر)، وتغيير الترتيب لا يغير الناتج (الإبدال).'),
 'Y53': ('× 10 moves each digit one place to the left, × 100 two places, × 1,000 three places.', 'الضرب في 10 ينقل كل رقم خانة إلى اليسار، وفي 100 خانتين، وفي 1,000 ثلاث خانات.'),
 'Y54': ('1,000 has three zeros: 9 × 1,000 = 9,000. 900 is 9 × 100.', 'العدد 1,000 فيه ثلاثة أصفار: 9 × 1,000 = 9,000. أما 900 فهي 9 × 100.'),
 'Y61': ('Count the dots on one card, then multiply by the number of cards.', 'نعد النقاط على بطاقة واحدة ثم نضرب في عدد البطاقات.'),
 'Y62': ('Associative Property of Multiplication: changing how the factors are grouped does not change the product.', 'خاصية الدمج في عملية الضرب: تغيير طريقة تجميع العوامل لا يغيّر حاصل الضرب.'),
 'Y63': ('Group the factors that are easy to multiply first: 2 × 4 = 8, then 8 × 7 = 56.', 'نجمّع أولًا العاملين اللذين يسهل ضربهما: 2 × 4 = 8، ثم 8 × 7 = 56.'),
 'Y71': ('Multiplying by 10 writes one zero at the end of the number.', 'الضرب في 10 يضيف صفرًا واحدًا إلى يمين العدد.'),
 'Y72': ('A multiple of 10 = 10 × its number of tens.', 'مضاعف العدد 10 = 10 × عدد عشراته.'),
 'Y73': ('Decompose the multiple of 10, 100 or 1,000, multiply the digits, then write the zeros.', 'نحلل مضاعف 10 أو 100 أو 1,000، ونضرب الأرقام، ثم نكتب الأصفار.'),
 'Y74': ('Heba and Ashraf grouped the factors differently and both got 320 (Associative Property).', 'جمّعت هبة وأشرف العوامل بطريقتين مختلفتين وحصلا على 320 (خاصية الدمج).'),
 # Unit 6
 'Z11': ('A rectangle of seats needs a factor pair: rows × seats in each row = 24.', 'ترتيب المقاعد في مستطيل يحتاج زوج عوامل: عدد الصفوف × عدد المقاعد في كل صف = 24.'),
 'Z12': ('2 is a factor of even numbers (ones digit 0, 2, 4, 6, 8); 5 is a factor if the ones digit is 0 or 5; 10 is a factor if the ones digit is 0.', 'العدد 2 من عوامل الأعداد الزوجية (رقم آحادها 0 أو 2 أو 4 أو 6 أو 8)، و5 من العوامل إذا كان رقم الآحاد 0 أو 5، و10 من العوامل إذا كان رقم الآحاد 0.'),
 'Z13': ('List the factor pairs from the outside in (1 × the number first) until they meet.', 'نكتب أزواج العوامل من الخارج إلى الداخل (1 × العدد أولًا) حتى تلتقي.'),
 'Z14': ('36 = 1 × 36 = 2 × 18 = 3 × 12 = 4 × 9 = 6 × 6.', '36 = 1 × 36 = 2 × 18 = 3 × 12 = 4 × 9 = 6 × 6.'),
 'Z21': ('Use the clues one by one to cross out the numbers that do not fit.', 'نستخدم المعلومات واحدة بعد الأخرى ونستبعد الأعداد التي لا تناسبها.'),
 'Z22': ('3 is a factor if the sum of the digits is a multiple of 3; 9 if the sum is a multiple of 9; 6 if the number is even AND 3 is a factor.', 'العدد 3 من العوامل إذا كان مجموع الأرقام من مضاعفات 3، و9 إذا كان المجموع من مضاعفات 9، و6 إذا كان العدد زوجيًا ومن عوامله 3.'),
 'Z23': ('A prime number has exactly two factors: 1 and itself. A composite number has more than two factors.', 'العدد الأولي له عاملان فقط: 1 والعدد نفسه. والعدد متعدد العوامل له أكثر من عاملين.'),
 'Z24': ('A number crossed out when skip counting by 2, 3, 5 or 7 has another factor, so it is not prime. 1 is not prime.', 'العدد الذي نشطبه عند العد بالقفز بمقدار 2 أو 3 أو 5 أو 7 له عامل آخر فليس أوليًا. والعدد 1 ليس أوليًا.'),
 'Z25': ('Seats in a rectangle need a factor pair. A prime number of seats makes only one long row.', 'المقاعد على شكل مستطيل تحتاج زوج عوامل. والعدد الأولي من المقاعد لا يكوّن إلا صفًا واحدًا طويلًا.'),
 'Z31': ('List the factors of both numbers; the common factors are the ones in both lists.', 'نكتب عوامل العددين؛ العوامل المشتركة هي الموجودة في القائمتين.'),
 'Z32': ('The greatest common factor (GCF) is the biggest number in both factor lists.', 'العامل المشترك الأكبر (ع.م.أ) هو أكبر عدد موجود في قائمتي العوامل.'),
 'Z33': ('The greatest number of equal groups with nothing left over is the GCF of the two numbers.', 'أكبر عدد من المجموعات المتساوية بلا باقٍ هو العامل المشترك الأكبر للعددين.'),
 'Z41': ('Multiples are the numbers you say when you skip count from 0.', 'المضاعفات هي الأعداد التي نذكرها عند العد بالقفز بدءًا من 0.'),
 'Z42': ('Multiples of 5 end in 0 or 5; multiples of 10 end in 0; a multiple of 6 is in the 6 times table.', 'مضاعفات 5 تنتهي بـ 0 أو 5، ومضاعفات 10 تنتهي بـ 0، ومضاعفات 6 في جدول ضرب 6.'),
 'Z43': ('The bus stops at the multiples of 4: 4, 8, 12, 16, 20.', 'يتوقف الأتوبيس عند مضاعفات 4: 4، 8، 12، 16، 20.'),
 'Z51': ('Two buses stop at the same place at a common multiple of their distances.', 'يتوقف الأتوبيسان في المكان نفسه عند مضاعف مشترك للمسافتين.'),
 'Z52': ('A common multiple is in both lists of multiples.', 'المضاعف المشترك موجود في قائمتي المضاعفات.'),
 'Z53': ('List the multiples of each number until the same number appears in both lists.', 'نكتب مضاعفات كل عدد حتى يظهر العدد نفسه في القائمتين.'),
 'Z61': ('If a × b = c, then a and b are factors of c, and c is a multiple of a and of b.', 'إذا كان a × b = c فإن a وb عاملان للعدد c، وc مضاعف للعدد a وللعدد b.'),
 'Z62': ('A smaller number can be a factor of a bigger one; a bigger number can be a multiple of a smaller one, never the other way.', 'العدد الأصغر يمكن أن يكون عاملًا للأكبر، والأكبر يمكن أن يكون مضاعفًا للأصغر، وليس العكس.'),
 'Z63': ('Check every clue: odd or even, multiple of each number, and the range.', 'نتحقق من كل معلومة: فردي أم زوجي، ومضاعف لكل عدد، والمدى.'),
 # Unit 7
 'Y7011': ('Split the two-digit number into tens and ones, multiply each part, then add.', 'نحلل العدد المكوّن من رقمين إلى عشرات وآحاد، ونضرب كل جزء، ثم نجمع.'),
 'Y7012': ('Split the number into tens and ones, multiply each part, then add.', 'نحلل العدد إلى عشرات وآحاد، ونضرب كل جزء، ثم نجمع.'),
 'Y7013': ('The 3 in 36 is in the tens place, so it is worth 30: 8 × 30 = 240, and 36 × 8 = 240 + 48 = 288.', 'الرقم 3 في 36 في خانة العشرات فقيمته 30: 8 × 30 = 240، و36 × 8 = 240 + 48 = 288.'),
 'Y7021': ('A number is the sum of the values of its digits (thousands + hundreds + tens + ones).', 'العدد يساوي مجموع قيم أرقامه (آلاف + مئات + عشرات + آحاد).'),
 'Y7022': ('Distributive Property: multiply each part of the decomposed number, then add the products.', 'خاصية التوزيع: نضرب كل جزء من أجزاء العدد بعد تحليله ثم نجمع النواتج.'),
 'Y7023': ('Split the number into thousands, hundreds, tens and ones, multiply each part, then add.', 'نحلل العدد إلى آلاف ومئات وعشرات وآحاد، ونضرب كل جزء، ثم نجمع.'),
 'Y7031': ('Each partial product is the one-digit number times the VALUE of one digit (for example 7 × 200, not 7 × 2).', 'كل ناتج جزئي هو العدد المكوّن من رقم واحد مضروبًا في قيمة الرقم (مثل 7 × 200 وليس 7 × 2).'),
 'Y7032': ('Write the partial product of each place on its own line, then add them.', 'نكتب الناتج الجزئي لكل خانة في سطر ثم نجمعها.'),
 'Y7033': ('In 328 the 2 is worth 20 and the 3 is worth 300: 32 + 80 + 1,200 = 1,312.', 'في 328 قيمة الرقم 2 هي 20 وقيمة الرقم 3 هي 300: 32 + 80 + 1,200 = 1,312.'),
 'Y7041': ('Round the big number to its biggest place, then multiply in your head. The exact answer should be close.', 'نقرّب العدد الكبير لأكبر خانة ثم نضرب ذهنيًا. يجب أن تكون الإجابة الدقيقة قريبة من التقدير.'),
 'Y7042': ('Multiply the ones first, then the tens, hundreds…, and carry when a product is 10 or more.', 'نضرب الآحاد أولًا ثم العشرات ثم المئات…، ونحمل إذا كان الناتج 10 أو أكثر.'),
 'Y7043': ('328 × 2: 8 × 2 = 16 (write 6, carry 1), 2 × 2 + 1 = 5, 3 × 2 = 6, so 656.', '328 × 2: 8 × 2 = 16 (نكتب 6 ونحمل 1)، 2 × 2 + 1 = 5، 3 × 2 = 6، إذن 656.'),
 'Y7051': ('Multiply the digits, then write all the zeros of both numbers.', 'نضرب الأرقام ثم نكتب كل أصفار العددين.'),
 'Y7052': ('Multiply by the tens digit, then by 10.', 'نضرب في رقم العشرات ثم في 10.'),
 'Y7053': ('Round to check: if the answer is far from the estimate, look for a mistake.', 'نقرّب لنتحقق: إذا كانت الإجابة بعيدة عن التقدير نبحث عن الخطأ.'),
 'Y7061': ('dividend ÷ divisor = quotient. What is left over is the remainder, and it is always smaller than the divisor.', 'المقسوم ÷ المقسوم عليه = خارج القسمة. وما يتبقى هو باقي القسمة، وهو دائمًا أصغر من المقسوم عليه.'),
 'Y7062': ('15 ÷ 4 = 3 R3: 4 × 3 = 12 pies are shared and 3 are left.', '15 ÷ 4 = 3 والباقي 3: نوزع 4 × 3 = 12 فطيرة ويتبقى 3.'),
 'Y7063': ('If people would be left over, one more vehicle is needed.', 'إذا تبقى أشخاص بلا مكان نحتاج وسيلة نقل إضافية.'),
 'Y7071': ('Use a related fact, then write the zeros: 6 ÷ 3 = 2, so 600 ÷ 3 = 200.', 'نستخدم حقيقة ذات صلة ثم نكتب الأصفار: 6 ÷ 3 = 2، إذن 600 ÷ 3 = 200.'),
 'Y7072': ('Full rows = the quotient; squares left over = the remainder.', 'الصفوف الكاملة = خارج القسمة، والمربعات المتبقية = باقي القسمة.'),
 'Y7073': ('People in one metro = cars × people in each car. Then divide all the people by that number.', 'عدد ركاب المترو الواحد = عدد العربات × عدد الأشخاص في كل عربة. ثم نقسم عدد الأشخاص كلهم على هذا العدد.'),
 'Y7081': ('Split the dividend into parts that are easy to divide, divide each part, then add the quotients.', 'نجزّئ المقسوم إلى أجزاء سهلة القسمة، ونقسم كل جزء، ثم نجمع خوارج القسمة.'),
 'Y7082': ('Split the dividend into easy parts, divide each part, add the quotients, and keep the remainder.', 'نجزّئ المقسوم إلى أجزاء سهلة، ونقسم كل جزء، ونجمع خوارج القسمة، ونحتفظ بالباقي.'),
 'Y7091': ('Divisor on the left, parts of the dividend in the boxes, partial quotients under them. Add the parts to get the dividend, add the partial quotients to get the quotient.', 'المقسوم عليه على اليسار، وأجزاء المقسوم داخل المستطيلات، وخوارج القسمة الجزئية أسفلها. مجموع الأجزاء = المقسوم، ومجموع خوارج القسمة الجزئية = خارج القسمة.'),
 'Y7092': ('Take away easy multiples of the divisor, write each partial quotient, then add them.', 'نطرح مضاعفات سهلة للمقسوم عليه، ونكتب كل خارج قسمة جزئي، ثم نجمعها.'),
 'Y7101': ('Round the dividend to a number that is easy to divide, then divide in your head.', 'نقرّب المقسوم إلى عدد سهل القسمة ثم نقسم ذهنيًا.'),
 'Y7102': ('Divide, multiply, subtract, bring down the next digit, starting from the biggest place.', 'نقسم ثم نضرب ثم نطرح ثم ننزل الرقم التالي، بدءًا من الخانة الكبرى.'),
 'Y7103': ('Split 784 into 700 + 84: 700 ÷ 7 = 100 and 84 ÷ 7 = 12, so 112. Check: 112 × 7 = 784.', 'نجزّئ 784 إلى 700 + 84: 700 ÷ 7 = 100 و84 ÷ 7 = 12، إذن 112. التحقق: 112 × 7 = 784.'),
 'Y7111': ('If the first digit of the dividend is smaller than the divisor, start with the first two digits: the quotient has one digit fewer.', 'إذا كان أول رقم في المقسوم أصغر من المقسوم عليه نبدأ بأول رقمين، فيقل عدد أرقام خارج القسمة رقمًا.'),
 'Y7112': ('Check a division: quotient × divisor + remainder = dividend.', 'للتحقق من القسمة: خارج القسمة × المقسوم عليه + الباقي = المقسوم.'),
 # Unit 8
 'Z8011': ('Order of operations: parentheses first, then × and ÷ from left to right, then + and − from left to right.', 'ترتيب العمليات: القوسان أولًا، ثم الضرب والقسمة من اليسار إلى اليمين، ثم الجمع والطرح من اليسار إلى اليمين.'),
 'Z8012': ('Do × and ÷ first, then + and − from left to right.', 'نبدأ بالضرب والقسمة، ثم الجمع والطرح من اليسار إلى اليمين.'),
 'Z8013': ('In 74 − 61 + 8 × 5, multiply first: 8 × 5 = 40, then 74 − 61 = 13 and 13 + 40 = 53.', 'في 74 − 61 + 8 × 5 نضرب أولًا: 8 × 5 = 40، ثم 74 − 61 = 13 و13 + 40 = 53.'),
 'Z8021': ('Adding the same number again and again is multiplication. Put in parentheses what must be done first.', 'جمع العدد نفسه عدة مرات هو ضرب. ونضع بين قوسين ما يجب حسابه أولًا.'),
 'Z8022': ('Write the story as one expression, using parentheses for what happens first (for example: take some away, then share).', 'نكتب المسألة في تعبير واحد ونضع بين قوسين ما يحدث أولًا (مثل: نطرح ما أُخذ، ثم نقسم).'),
}

# ---------- hand-written explanations for single questions: (idea id, question number from 1) ----------
def _t(s): return (s, s)
EXTRA = {
 ('Y12', 1): ('The long tape has 5 parts, each as long as the short tape: 5 times.', 'الشريط الطويل فيه 5 أجزاء، كل جزء بطول الشريط القصير: 5 مرات.'),
 ('Y21', 1): ('The infographic says: a sailboat travels about 2 times faster than a person walking.', 'يقول المخطط: سرعة القارب الشراعي تساوي تقريبًا ضعف سرعة شخص يسير على قدميه.'),
 ('Y21', 2): ('The infographic says: a car travels about 20 times faster than a person walking.', 'يقول المخطط: سرعة السيارة تساوي 20 ضعفًا من سرعة شخص يسير على قدميه.'),
 ('Y21', 3): ('The infographic says: a cruise ship travels about 8 times the speed of a person walking.', 'يقول المخطط: سرعة السفينة السياحية 8 أضعاف سرعة شخص يسير على قدميه.'),
 ('Y21', 4): ('The infographic says: high-speed trains move 8 times faster than a cruise ship.', 'يقول المخطط: سرعة القطار فائق السرعة 8 أضعاف سرعة السفينة السياحية.'),
 ('Y21', 5): ('The infographic says: passenger airplanes travel nearly 200 times faster than a person walking.', 'يقول المخطط: سرعة طائرة الركاب تقريبًا 200 ضعف سرعة شخص يسير على قدميه.'),
 ('Y41', 2): ('Changing the order does not change the product: 7 × 3 = 3 × 7 = 21.', 'تغيير الترتيب لا يغير الناتج: 7 × 3 = 3 × 7 = 21.'),
 ('Y41', 5): ('3 rows of 8 turned on its side are 8 rows of 3: 3 × 8 = 8 × 3 = 24.', '3 صفوف في كل صف 8، إذا أدرناها تصبح 8 صفوف في كل صف 3: 3 × 8 = 8 × 3 = 24.'),
 ('Y42', 4): ('Turning the array swaps rows and columns: 6 × 7 = 7 × 6 = 42.', 'تدوير المصفوفة يبدّل الصفوف والأعمدة: 6 × 7 = 7 × 6 = 42.'),
 ('Z12', 1): ('26 ends in 6, an even number, so 2 is a factor (26 = 2 × 13).', 'العدد 26 ينتهي بـ 6 فهو زوجي، إذن 2 من عوامله (26 = 2 × 13).'),
 ('Z12', 2): ('26 ends in 6, not 0 or 5, so 5 is not a factor.', 'العدد 26 ينتهي بـ 6 وليس 0 أو 5، إذن 5 ليس من عوامله.'),
 ('Z12', 3): ('70 ends in 0, so 10 is a factor (70 = 10 × 7).', 'العدد 70 ينتهي بـ 0، إذن 10 من عوامله (70 = 10 × 7).'),
 ('Z12', 4): ('15 ends in 5, an odd number, so 2 is not a factor.', 'العدد 15 ينتهي بـ 5 فهو فردي، إذن 2 ليس من عوامله.'),
 ('Z12', 5): ('15 ends in 5, so 5 is a factor (15 = 5 × 3).', 'العدد 15 ينتهي بـ 5، إذن 5 من عوامله (15 = 5 × 3).'),
 ('Z12', 6): ('70 ends in 0: 2, 5 and 10 are all factors. 7 + 0 = 7 is not a multiple of 3, so 3 is not.', 'العدد 70 ينتهي بـ 0: إذن 2 و5 و10 من عوامله. و7 + 0 = 7 ليس من مضاعفات 3، إذن 3 ليس من عوامله.'),
 ('Z12', 7): ('17 ends in 7: it is odd and does not end in 0 or 5, so 2, 5 and 10 are not factors.', 'العدد 17 ينتهي بـ 7: فردي ولا ينتهي بـ 0 أو 5، إذن 2 و5 و10 ليست من عوامله.'),
 ('Z13', 4): ('36 = 1 × 36 = 2 × 18 = 3 × 12 = 4 × 9 = 6 × 6, so the factors are 1, 2, 3, 4, 6, 9, 12, 18, 36: 9 factors.', '36 = 1 × 36 = 2 × 18 = 3 × 12 = 4 × 9 = 6 × 6، إذن العوامل 1، 2، 3، 4، 6، 9، 12، 18، 36: تسعة عوامل.'),
 ('Z14', 4): ('A number with 2, 5 and 10 as factors ends in 0: 30 and 90.', 'العدد الذي من عوامله 2 و5 و10 ينتهي بـ 0: 30 و90.'),
 ('Z21', 1): ('Even numbers between 20 and 30: 22, 24, 26, 28. Only 28 has 7 and 14 as factors (28 = 2 × 14 = 4 × 7).', 'الأعداد الزوجية بين 20 و30: 22، 24، 26، 28. العدد 28 وحده من عوامله 7 و14 (28 = 2 × 14 = 4 × 7).'),
 ('Z21', 2): ('Between 40 and 60 with 10 as a factor (ends in 0): 50.', 'بين 40 و60 ومن عوامله 10 (ينتهي بـ 0): 50.'),
 ('Z21', 3): ('Factor pair 5 and 7: 5 × 7 = 35 (tens digit 3 is less than ones digit 5).', 'زوج العوامل 5 و7: 5 × 7 = 35 (رقم العشرات 3 أقل من رقم الآحاد 5).'),
 ('Z32', 1): gcf_ex(40, 50), ('Z32', 2): gcf_ex(10, 24), ('Z32', 3): gcf_ex(33, 11), ('Z32', 4): gcf_ex(36, 42), ('Z32', 5): gcf_ex(20, 30),
 ('Z33', 1): ('The GCF of 36 and 27 is 9, so 9 groups of girls (36 ÷ 9 = 4 in each) and 9 groups of boys (27 ÷ 9 = 3 in each).', 'العامل المشترك الأكبر للعددين 36 و27 هو 9، إذن 9 مجموعات من البنات (36 ÷ 9 = 4 في كل مجموعة) و9 من الأولاد (27 ÷ 9 = 3).'),
 ('Z33', 3): ('The GCF of 24 and 36 is 12, so 12 packs (24 ÷ 12 = 2 apples and 36 ÷ 12 = 3 bags of candy in each).', 'العامل المشترك الأكبر للعددين 24 و36 هو 12، إذن 12 عبوة (في كل عبوة 24 ÷ 12 = 2 تفاحة و36 ÷ 12 = 3 أكياس حلوى).'),
 ('Z33', 5): ('The GCF of 7 and 14 is 7, so 7 arrangements (1 rose and 14 ÷ 7 = 2 daisies in each).', 'العامل المشترك الأكبر للعددين 7 و14 هو 7، إذن 7 تنسيقات (في كل تنسيق وردة واحدة و14 ÷ 7 = 2 أقحوان).'),
 ('Z41', 1): _t('12 + 3 = 15.'), ('Z41', 2): _t('16 + 4 = 20.'), ('Z41', 3): _t('25 + 5 = 30.'),
 ('Z43', 2): ('The bus stops at 4, 8, 12, 16, 20 km. The last stop before 18 km is 16 km.', 'يتوقف الأتوبيس عند 4، 8، 12، 16، 20 كم. آخر توقف قبل 18 كم هو 16 كم.'),
 ('Z51', 1): lcm_ex(3, 5),
 ('Z53', 3): lcm_ex(6, 8),
 ('Z63', 2): ('Multiples of 8 between 10 and 20: 16. 16 is also a multiple of 4 (4 × 4) and is even.', 'مضاعفات 8 بين 10 و20: 16. والعدد 16 مضاعف للعدد 4 أيضًا (4 × 4) وهو زوجي.'),
 ('Y7021', 1): _t('536 = 500 + 30 + 6.'), ('Y7021', 2): _t('1,275 = 1,000 + 200 + 70 + 5.'), ('Y7021', 3): _t('264 = 200 + 60 + 4.'),
 ('Y7021', 4): _t('7,625 = 7,000 + 600 + 20 + 5.'), ('Y7021', 5): _t('357 = 300 + 50 + 7.'),
 ('Y7062', 1): rem_ex(15, 4, 'Each friend gets 3 pies.', 'يحصل كل صديق على 3 فطائر.'),
 ('Y7062', 2): rem_ex(15, 4, '3 pies are left.', 'تتبقى 3 فطائر.'),
 ('Y7063', 1): rem_ex(32, 9, '3 microbuses leave 5 people, so 4 are needed.', '3 ميكروباصات تترك 5 أشخاص، إذن نحتاج 4.'),
 ('Y7063', 4): ('60 ÷ 40 = 1 R20: one bus leaves 20 students, so 2 buses are needed.', '60 ÷ 40 = 1 والباقي 20: أتوبيس واحد يترك 20 تلميذًا، إذن نحتاج أتوبيسين.'),
 ('Y7072', 1): rem_ex(23, 4, '5 full rows.', '5 صفوف كاملة.'),
 ('Y7072', 2): rem_ex(23, 4, '3 squares are left over.', 'يتبقى 3 مربعات.'),
 ('Y7072', 3): ('20 ÷ 5 = 4 rows with nothing left over, so the score is double: 4 × 2 = 8.', '20 ÷ 5 = 4 صفوف بلا باقٍ، إذن الدرجة ضعف عدد الصفوف: 4 × 2 = 8.'),
 ('Y7082', 1): rem_ex(89, 6, 'Each classroom gets 14 books.', 'يحصل كل فصل على 14 كتابًا.'),
 ('Y7082', 2): rem_ex(89, 6, '5 books are left over.', 'يتبقى 5 كتب.'),
 ('Z8013', 3): ('6 × 4 − 4 = 20, 100 − 80 × 1 = 20 and 2,356 − 2,336 = 20, but 60 + 20 − 50 = 30.', '6 × 4 − 4 = 20، و100 − 80 × 1 = 20، و2,356 − 2,336 = 20، أما 60 + 20 − 50 = 30.'),
 ('Z8022', 1): ('(246 − 25) ÷ 6 = 221 ÷ 6 = 36 R5: each friend gets 36 stamps.', '(246 − 25) ÷ 6 = 221 ÷ 6 = 36 والباقي 5: يحصل كل صديق على 36 طابعًا.'),
 ('Z8022', 3): ('(172 + 8) ÷ 9 = 180 ÷ 9 = 20 microbuses.', '(172 + 8) ÷ 9 = 180 ÷ 9 = 20 ميكروباص.'),
 ('Z8022', 4): ('(198 − 17) ÷ 6 = 181 ÷ 6 = 30 R1: 30 muffins.', '(198 − 17) ÷ 6 = 181 ÷ 6 = 30 والباقي 1: 30 فطيرة.'),
}

EXTRA.update({
 ('Z8021', 1): ('67 is added 5 times: 5 × 67 − 15 = 335 − 15 = 320.', 'العدد 67 مجموع 5 مرات: 5 × 67 − 15 = 335 − 15 = 320.'),
 ('Z8021', 2): ('67 added 5 times is 5 × 67, then take away 15: 5 × 67 − 15.', 'جمع 67 خمس مرات = 5 × 67، ثم نطرح 15: 5 × 67 − 15.'),
 ('Z8021', 4): ('2 weeks = 14 days: 14 × 14 km, then add the 56 km of the next week: 14 × 14 + 56.', 'أسبوعان = 14 يومًا: 14 × 14 كم، ثم نضيف 56 كم الأسبوع التالي: 14 × 14 + 56.'),
 ('Z8021', 6): ('Each day takes 27 + 12 minutes; for 5 days multiply the whole day by 5: (27 + 12) × 5.', 'كل يوم يستغرق 27 + 12 دقيقة؛ ولخمسة أيام نضرب اليوم كله في 5: (27 + 12) × 5.'),
 ('Z8022', 2): ('First take away the 25 he kept, then share the rest by 6: (246 − 25) ÷ 6.', 'نطرح أولًا الـ 25 التي احتفظ بها، ثم نقسم الباقي على 6: (246 − 25) ÷ 6.'),
 ('Z8022', 5): ('(50 − 36) ÷ 4: start with 50, take away 36, then share what is left by 4.', '(50 − 36) ÷ 4: نبدأ بـ 50، ونطرح 36، ثم نقسم الباقي على 4.'),
 ('Z8011', 5): ('Division comes before addition and subtraction: 70 ÷ 10 first.', 'القسمة قبل الجمع والطرح: نبدأ بـ 70 ÷ 10.'),
 ('Z8011', 6): ('Multiply first: 4 × 6 = 24, then 2 + 24 = 26.', 'نضرب أولًا: 4 × 6 = 24، ثم 2 + 24 = 26.'),
 ('Y7012', 3): ('58 = 50 + 8, so 58 × 9 = (50 × 9) + (8 × 9).', '58 = 50 + 8، إذن 58 × 9 = (50 × 9) + (8 × 9).'),
 ('Y7022', 6): ('249 = 200 + 40 + 9, so 249 × 5 = (200 × 5) + (40 × 5) + (9 × 5).', '249 = 200 + 40 + 9، إذن 249 × 5 = (200 × 5) + (40 × 5) + (9 × 5).'),
 ('Y7031', 1): ('The 2 in 239 is worth 200: 7 × 200 = 1,400.', 'الرقم 2 في 239 قيمته 200: 7 × 200 = 1,400.'),
 ('Y7031', 2): ('The 3 in 239 is worth 30: 7 × 30 = 210.', 'الرقم 3 في 239 قيمته 30: 7 × 30 = 210.'),
 ('Y7041', 4): ('The exact answer must be close to 1,040: 132 × 8 = 1,056.', 'الإجابة الدقيقة يجب أن تكون قريبة من 1,040: 132 × 8 = 1,056.'),
 ('Y7051', 1): ('50 = 5 × 10, so 30 × 50 = 30 × 5 × 10 = 150 × 10 = 1,500.', '50 = 5 × 10، إذن 30 × 50 = 30 × 5 × 10 = 150 × 10 = 1,500.'),
 ('Y7051', 2): ('20 = 2 × 10, so 20 × 80 = 2 × 80 × 10 = 160 × 10 = 1,600.', '20 = 2 × 10، إذن 20 × 80 = 2 × 80 × 10 = 160 × 10 = 1,600.'),
 ('Y7053', 3): ('20 × 50 = 1,000, not 100: 22 × 50 = 1,000 + 100 = 1,100.', '20 × 50 = 1,000 وليست 100: 22 × 50 = 1,000 + 100 = 1,100.'),
 ('Y7063', 2): rem_ex(32, 9),
 ('Y7073', 2): ('One metro fits 9 × 90 = 810 people; 8,100 ÷ 810 = 10, so they need 10 metros.', 'المترو الواحد يتسع لـ 9 × 90 = 810 أشخاص؛ و8,100 ÷ 810 = 10، إذن يحتاجون 10 قطارات.'),
 ('Y7091', 1): ('300 + 60 + 18 = 378 is the dividend and 50 + 10 + 3 = 63 is the quotient: 378 ÷ 6 = 63.', '300 + 60 + 18 = 378 هو المقسوم، و50 + 10 + 3 = 63 هو خارج القسمة: 378 ÷ 6 = 63.'),
 ('Y7103', 2): ('784 = 700 + 84, and 700 ÷ 7 = 100, 84 ÷ 7 = 12.', '784 = 700 + 84، و700 ÷ 7 = 100، و84 ÷ 7 = 12.'),
 ('Y7111', 1): ('In 346 ÷ 5 the first digit 3 is smaller than 5, so we start with 34: the quotient has 2 digits.', 'في 346 ÷ 5 أول رقم 3 أصغر من 5، فنبدأ بـ 34: خارج القسمة رقمان.'),
 ('Y7112', 3): ('Multiply the quotient by the divisor: 313 × 3 = 939.', 'نضرب خارج القسمة في المقسوم عليه: 313 × 3 = 939.'),
 ('Y7043', 1): ('8 × 2 = 16 (write 6, carry 1), 2 × 2 + 1 = 5, 3 × 2 = 6: 656. Student 2 is correct.', '8 × 2 = 16 (نكتب 6 ونحمل 1)، 2 × 2 + 1 = 5، 3 × 2 = 6: 656. التلميذ الثاني على صواب.'),
 ('Y7062', 4): ('False: the remainder is always smaller than the divisor, or one more full group could be made.', 'خطأ: باقي القسمة دائمًا أصغر من المقسوم عليه، وإلا أمكن تكوين مجموعة كاملة أخرى.'),
 ('Y7071', 8): ('64 ÷ 8 = 8, so 6,400 ÷ 8 = 800.', '64 ÷ 8 = 8، إذن 6,400 ÷ 8 = 800.'),
 ('Y7043', 2): ('8 × 2 = 16: the carried 1 makes the tens 2 × 2 + 1 = 5, not 4.', '8 × 2 = 16: الواحد المحمول يجعل العشرات 2 × 2 + 1 = 5 وليس 4.'),
})

def prepare(iid, explain, variants):
    """Called by the generators for every idea: the idea gets its short rule, each question its own explanation."""
    for k, v in enumerate(variants, 1):
        if (iid, k) in EXTRA: v['explain'] = EXTRA[(iid, k)]
        else: apply(v)
    return RULES.get(iid, explain)
