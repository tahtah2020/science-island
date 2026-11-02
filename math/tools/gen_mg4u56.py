# Generator of the Grade 4 Math Units 5 and 6 question files.
#   math/questions_mg4u5.js   «Multiplication as a Relationship»   (Languages track, English book)
#   math/questions_mg4u6.js   «Factors and Multiples»              (Languages track, English book)
# Run from the site folder: python3 math/tools/gen_mg4u56.py .   (edit here, never the files by hand)
# English first (owner, 2 Nov 2026); the Arabic files come after the owner's review: write each text as ('English', 'Arabic') and add write(u, True).
import json, re, sys
OUT = sys.argv[1]

def wrap(s):
    """Arabic: keep every run of digits / signs left to right."""
    if not isinstance(s, str) or '⁦' in s: return s
    s = s.replace('= ؟', '= ?').replace('× ؟', '× ?').replace('+ ؟', '+ ?').replace('− ؟', '− ?')
    return re.sub(r'[\d(][\d,.:/\s×+−=()?÷²a-z]*[\d)?²]|\d', lambda m: '⁦' + m.group(0) + '⁩', s)

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
def VEH(*items): return {'fig': 'vehFig', 'pic': {'items': [list(i) if isinstance(i, tuple) else [i, ''] for i in items]}}
def TAPE(n, box='', one='', total='', top='', bottom=''): return {'fig': 'tapeFig', 'pic': dict(n=n, box=box, one=one, total=total, top=top, bottom=bottom)}
def ARR(r, c, groups=0): return {'fig': 'arrayFig', 'pic': dict(r=r, c=c, groups=groups)}
def CARDS(r, c): return {'fig': 'arrayFig', 'pic': dict(cards=[r, c])}
def LINE(max_, steps, bus=False, stop=None, upto=None):
    p = dict(max=max_, steps=steps, bus=bus)
    if upto: p['upto'] = upto
    if stop is not None: p['stop'] = stop
    return {'fig': 'skipLine', 'pic': p}

def tr(v, ar):
    out = {}
    for key, val in v.items():
        if key == 'q': out[key] = L(val, ar)
        elif key in ('options', 'left', 'right'): out[key] = [L(o, ar) for o in val]
        elif key == 'unit': out[key] = val[1] if ar else val[0]
        else: out[key] = val
    return out

TIMES = ('times', 'مرات'); SEATS = ('seats', 'مقعدًا'); KM = ('km', 'كم'); GROUPS = ('groups', 'مجموعات'); PACKS = ('packs', 'عبوات')

UNITS_IDEAS = {5: [], 6: []}
def idea(u, i, lesson, concept, explain, variants): UNITS_IDEAS[u].append(dict(id=i, lesson=lesson, concept=concept, explain=explain, variants=variants))

# =====================================================================================================
# UNIT 5 · Multiplication as a Relationship · ideas Y1n (lesson n), e.g. Y11 Y12 … Y71
# =====================================================================================================
# ---------- Lesson 1 · Multiplicative Comparison (pages 71-72) ----------
idea(5, 'Y11', 1, 'Comparing with "times greater than"',
  'A multiplicative comparison says how many times one number is another. Put the small number again and again until you reach the big one, or divide: 10 is 5 times greater than 2, because 5 × 2 = 10 (10 ÷ 2 = 5).',
  [num('timed', 'easy', '10 is ? times greater than 2.', '10/2', unit=TIMES, seconds=12),
   num('timed', 'easy', '12 is ? times greater than 3.', '12/3', unit=TIMES, seconds=12),
   num('timed', 'easy', '18 is ? times greater than 6.', '18/6', unit=TIMES, seconds=12),
   num('normal', 'easy', '15 is ? times greater than 3.', '15/3', unit=TIMES),
   num('normal', 'easy', '28 is ? times greater than 7.', '28/7', unit=TIMES),
   num('normal', 'easy', '27 is ? times greater than 9.', '27/9', unit=TIMES),
  ])
idea(5, 'Y12', 1, 'Reading a tape diagram',
  'In a tape diagram the long tape is made of equal parts, each the size of the short tape. Count the parts: if the long tape has 4 parts of 3, the long tape is 4 × 3 = 12, so 12 is 4 times greater than 3.',
  [num('normal', 'easy', 'The long tape is made of parts like the short tape. How many times longer is the long tape?', '5', unit=TIMES, **TAPE(5, '', '', '', 'A', 'B')),
   num('normal', 'medium', 'Each part is 3. What number does the long tape show?', '4*3', **TAPE(4, '3', '3')),
   mc('normal', 'medium', 'Which statement does the tape diagram show?', ['14 is 2 times greater than 7', '14 is 7 times greater than 2', '7 is 2 times greater than 14', '14 is 7 more than 2'], **TAPE(2, '7', '7', '14')),
   mc('normal', 'medium', 'Which multiplication matches the tape diagram?', ['3 × 6 = 18', '3 + 6 = 9', '6 + 6 = 12', '18 × 3 = 54'], **TAPE(3, '6', '6', '18')),
  ])
idea(5, 'Y13', 1, 'Challenge: comparing strips',
  'Compare by asking "how many times does the small one fit in the big one?" A strip of 24 cm and a strip of 8 cm: 24 ÷ 8 = 3, so the long strip is 3 times as long. Use multiplication to check: 3 × 8 = 24.',
  [num('boss', 'hard', 'Your teacher\'s strip is 24 cm long and your strip is 8 cm long. How many times could your strip fit on your teacher\'s strip?', '24/8', unit=TIMES),
   mc('boss', 'hard', '36 is ? times greater than 4. Which equation shows it?', ['9 × 4 = 36', '36 + 4 = 40', '36 − 4 = 32', '4 × 4 = 16']),
   num('boss', 'hard', '45 is ? times greater than 5.', '45/5', unit=TIMES),
  ])

# ---------- Lesson 2 · Creating Multiplicative Comparison Equations (pages 73-74) ----------
idea(5, 'Y21', 2, 'How fast? The transportation infographic',
  'The infographic compares speeds: a sailboat is about 2 times faster than a person walking, a car about 20 times faster than a person walking, a cruise ship about 8 times the speed of walking, high-speed trains 8 times faster than a cruise ship and passenger airplanes nearly 200 times faster than walking.',
  [num('timed', 'easy', 'A sailboat travels about ? times faster than a person walking.', '2', unit=TIMES, seconds=14, **VEH('sailboat', 'walk')),
   num('timed', 'easy', 'A car travels about ? times faster than a person walking.', '20', unit=TIMES, seconds=14, **VEH('car', 'walk')),
   num('normal', 'easy', 'A cruise ship travels about ? times the speed of a person walking.', '8', unit=TIMES, **VEH('cruise', 'walk')),
   num('normal', 'medium', 'High-speed trains move ? times faster than a cruise ship.', '8', unit=TIMES, **VEH('fasttrain', 'cruise')),
   mc('normal', 'medium', 'Passenger airplanes travel nearly how many times faster than a person walking?', ['200 times', '20 times', '8 times', '2 times'], **VEH('plane', 'walk')),
   multi('normal', 'medium', 'Choose ALL the phrases that show a multiplicative comparison.', ['2 times faster', 'about 8 times the speed', '3 more seats', 'the same speed'], [0, 1]),
  ])
idea(5, 'Y22', 2, 'Writing an equation with a letter',
  'Turn the words into an equation and use a letter for the unknown number: "4 times greater than 3 is n" → 4 × 3 = n. "18 is 6 times as many as n" → 18 = 6 × n. "times as many" means multiply.',
  [mc('timed', 'easy', '4 times greater than 3 is n. Which equation?', ['4 × 3 = n', '4 + 3 = n', '4 × n = 3', 'n × 3 = 4'], seconds=15),
   mc('normal', 'easy', '18 is 6 times as many as n. Which equation?', ['18 = 6 × n', '18 = 6 + n', 'n = 18 × 6', '6 = 18 × n']),
   mc('normal', 'easy', '2 times greater than 7 is n. Which equation?', ['2 × 7 = n', '2 + 7 = n', '7 × n = 2', 'n = 7 − 2']),
   mc('normal', 'medium', '24 is 4 times as great as n. Which equation?', ['24 = 4 × n', '24 = 4 + n', 'n = 24 × 4', '4 = 24 × n']),
   mc('normal', 'medium', '25 is 5 times as many as n. Which equation?', ['25 = 5 × n', '25 = 5 + n', 'n = 25 × 5', '5 = n × 25']),
   tf('normal', 'medium', '"18 is 6 times as many as n" can be written 18 = 6 + n.', False),
  ])
idea(5, 'Y23', 2, 'Story problems as equations',
  'Read the story, find the comparison, then write it with a letter. Nadia had 5 marbles and later 4 times as many: 5 × 4 = n. Hamed had 12 cookies, 3 times as many as Ahmed: 12 = 3 × n.',
  [mc('normal', 'medium', 'Nadia collected 5 marbles in March. By May she had 4 times as many marbles. Which equation shows the marbles in May?', ['5 × 4 = n', '5 + 4 = n', '5 = 4 × n', 'n × 5 = 4']),
   mc('normal', 'medium', 'Hamed had 12 cookies, which was 3 times as many cookies as his brother Ahmed. Which equation shows Ahmed\'s cookies?', ['12 = 3 × n', '12 × 3 = n', '12 + 3 = n', 'n = 12 − 3']),
   mc('normal', 'medium', 'Aida walked to school in 21 minutes and rode her bike in 7 minutes. Which equation shows how many times faster riding was?', ['21 = n × 7', '21 + 7 = n', '21 × 7 = n', '7 = n × 21']),
   num('normal', 'medium', 'Nadia collected 5 marbles in March. By May she had 4 times as many. How many marbles did she have in May?', '5*4'),
  ])
idea(5, 'Y24', 2, 'Challenge: the car and the bicycle',
  'A car is 3 times faster than a bicycle, so the car needs 3 times LESS time. Salma takes 24 minutes by bicycle: 3 × n = 24, and n = 24 ÷ 3 = 8 minutes by car.',
  [mc('boss', 'hard', 'A car is 3 times faster than a bicycle. It takes Salma 24 minutes to get to school by bicycle. Which equation shows the time by car?', ['3 × n = 24', '24 × 3 = n', '24 + 3 = n', 'n = 24 − 3'], **VEH('car', 'bicycle')),
   num('boss', 'hard', 'A car is 3 times faster than a bicycle. Salma takes 24 minutes by bicycle. How many minutes would she take by car?', '24/3', unit=('minutes', 'دقيقة'), **VEH('car', 'bicycle')),
   tf('boss', 'hard', 'If a car is 3 times faster than a bicycle, the car trip takes 3 times MORE minutes.', False),
   num('boss', 'hard', 'Aida walked to school in 21 minutes and rode her bike in 7 minutes. How many times faster was riding her bike?', '21/7', unit=TIMES, **VEH('bicycle', 'walk')),
  ])

# ---------- Lesson 3 · Solving Multiplicative Comparison Equations (pages 75-76) ----------
idea(5, 'Y31', 3, 'Solving with the related division',
  'To solve a multiplication equation with a missing factor, divide: 6 × a = 18, so a = 18 ÷ 6 = 3. Moustafa is right, because multiplication and division are related.',
  [num('timed', 'easy', '6 × a = 18. a = ?', '18/6', seconds=12),
   num('timed', 'easy', '4 × n = 28. n = ?', '28/4', seconds=12),
   num('normal', 'easy', 'n × 5 = 35. n = ?', '35/5'),
   mc('normal', 'medium', 'Moustafa solves 6 × a = 18 by doing 18 ÷ 6 = a. Is he right?', ['Yes: division undoes multiplication, a = 3', 'No: he must add 18 + 6', 'No: he must multiply 18 × 6', 'No: a = 12']),
   tf('normal', 'medium', 'To solve 9 × m = 54 we can divide 54 ÷ 9.', True),
  ])
idea(5, 'Y32', 3, 'How many seats? The table',
  'The table gives the seats: bicycle 1, motorbike 2, car 4, truck 6, bus 36, metro train 48. A truck has 6 seats and a motorbike 2: 6 = n × 2, so n = 3 times as many.',
  [num('normal', 'easy', 'How many times as many seats are in a truck than on a motorbike?', '6/2', unit=TIMES, **VEH(('truck', '6 seats'), ('motorbike', '2 seats'))),
   num('normal', 'medium', 'How many times as many seats are on a bus than in a truck?', '36/6', unit=TIMES, **VEH(('bus', '36 seats'), ('truck', '6 seats'))),
   num('normal', 'medium', 'How many times as many seats are on the metro train than in a car?', '48/4', unit=TIMES, **VEH(('metro', '48 seats'), ('car', '4 seats'))),
   num('normal', 'medium', 'A metro train can fit how many times more people than a truck?', '48/6', unit=TIMES, **VEH(('metro', '48 seats'), ('truck', '6 seats'))),
   num('normal', 'medium', 'A bus has how many times more seats than a car?', '36/4', unit=TIMES, **VEH(('bus', '36 seats'), ('car', '4 seats'))),
   mc('normal', 'medium', 'Which equation finds how many times as many seats a bus (36) has than a truck (6)?', ['36 = n × 6', '36 + 6 = n', '36 × 6 = n', '6 = n × 36']),
  ])
idea(5, 'Y33', 3, 'Challenge: comparing more seats',
  'Use the table twice: a bus has 36 seats, a motorbike 2, so 36 = n × 2 and n = 18. A metro train has 48 seats and a motorbike 2: 48 ÷ 2 = 24 times as many.',
  [num('boss', 'hard', 'How many times as many seats are on a bus than on a motorbike?', '36/2', unit=TIMES, **VEH(('bus', '36 seats'), ('motorbike', '2 seats'))),
   num('boss', 'hard', 'How many times as many seats are on a metro train than on a motorbike?', '48/2', unit=TIMES, **VEH(('metro', '48 seats'), ('motorbike', '2 seats'))),
   num('boss', 'hard', 'A metro train has 48 seats. That is ? times the seats of a bicycle.', '48/1', unit=TIMES, **VEH(('metro', '48 seats'), ('bicycle', '1 seat'))),
   num('boss', 'hard', 'A boat has 12 seats. How many times as many seats as a car with 4 seats?', '12/4', unit=TIMES, **VEH(('ferry', '12 seats'), ('car', '4 seats'))),
  ])

# ---------- Lesson 4 · Commutative Property of Multiplication (pages 77-78) ----------
idea(5, 'Y41', 4, 'Turning an array: the Commutative Property',
  'The Commutative Property of Multiplication: changing the order of the factors does not change the product. An array of 4 rows of 6 turned on its side is 6 rows of 4: 4 × 6 = 6 × 4 = 24.',
  [mc('timed', 'easy', '4 × 6 = 6 × ?', ['4', '6', '24', '10'], seconds=12, **ARR(4, 6)),
   num('timed', 'easy', '7 × 3 = 3 × ?', '7', seconds=12),
   tf('normal', 'easy', '5 × 8 = 8 × 5', True),
   mc('normal', 'easy', 'Which property says 9 × 2 = 2 × 9?', ['The Commutative Property', 'The Zero Property', 'The Identity Property', 'The Associative Property']),
   num('normal', 'easy', 'The array has 3 rows of 8 dots. Turned on its side it has 8 rows of how many dots?', '3', **ARR(3, 8)),
  ])
idea(5, 'Y42', 4, 'Arranging in equal rows',
  'Ahmed has 48 toy cars to put in equal rows and columns. Any factor pair of 48 works: 6 rows of 8 or 8 rows of 6 (commutative), 4 rows of 12, 12 rows of 4, 2 rows of 24, 3 rows of 16 …',
  [mc('normal', 'medium', 'Ahmed has 48 toy cars and wants equal rows and equal columns. Which arrangement works?', ['6 rows of 8', '5 rows of 9', '7 rows of 7', '9 rows of 6']),
   num('normal', 'medium', 'Ahmed puts his 48 toy cars in 8 equal rows. How many cars are in each row?', '48/8'),
   multi('normal', 'medium', 'Choose ALL the ways to arrange 48 toy cars in equal rows.', ['4 rows of 12', '12 rows of 4', '5 rows of 10', '7 rows of 8'], [0, 1]),
   num('normal', 'medium', 'An array shows 6 × 7. The same array turned shows 7 × ?', '6', **ARR(6, 7)),
  ])
idea(5, 'Y43', 4, 'Challenge: Badr, Salma and the football teams',
  '42 people want to play football. Badr makes 6 teams of 7 people (6 × 7 = 42) and Salma makes 7 teams of 6 people (7 × 6 = 42). Both are correct: the Commutative Property says 6 × 7 = 7 × 6.',
  [mc('boss', 'hard', '42 people want to play football. Badr says you can make 6 teams of 7 people. Salma says 7 teams of 6 people. Who is correct?', ['Both are correct', 'Only Badr', 'Only Salma', 'Neither']),
   num('boss', 'hard', 'Badr makes 6 teams with 7 people on each team. How many people play?', '6*7'),
   tf('boss', 'hard', '6 teams of 7 people and 7 teams of 6 people have the same number of people.', True),
   num('boss', 'hard', 'How many people are in 7 teams of 6 people?', '7*6'),
  ])

# ---------- Lesson 5 · Identity Property and the Zero Property (pages 79-80) ----------
idea(5, 'Y51', 5, 'Multiplying by 1 and by 0',
  'The Identity Property: any number times 1 is the same number (672 × 1 = 672). The Zero Property: any number times 0 is 0 (758 × 0 = 0).',
  [num('timed', 'easy', '5 × 1 = ?', '5*1', seconds=8),
   num('timed', 'easy', '672 × 1 = ?', '672*1', seconds=10),
   num('timed', 'easy', '8 × 0 = ?', '8*0', seconds=8),
   num('timed', 'easy', '758 × 0 = ?', '758*0', seconds=10),
   num('normal', 'easy', '12 × 1 = ?', '12*1'),
   num('normal', 'easy', '16 × 0 = ?', '16*0'),
  ])
idea(5, 'Y52', 5, 'Naming the two properties',
  'Identity Property of Multiplication: a number × 1 = the number. Zero Property of Multiplication: a number × 0 = 0.',
  [mc('normal', 'easy', 'Which property says 37 × 1 = 37?', ['The Identity Property', 'The Zero Property', 'The Commutative Property', 'The Associative Property']),
   mc('normal', 'easy', 'Which property says 37 × 0 = 0?', ['The Zero Property', 'The Identity Property', 'The Commutative Property', 'The Associative Property']),
   match('normal', 'medium', 'Match each equation with its property.', ['9 × 1 = 9', '9 × 0 = 0', '9 × 4 = 4 × 9'], ['Zero Property', 'Commutative Property', 'Identity Property'], [2, 0, 1]),
   tf('normal', 'medium', 'Any number multiplied by 0 equals the same number.', False),
  ])
idea(5, 'Y53', 5, 'Patterns with 10, 100 and 1,000',
  '1 × 4 = 4, 10 × 4 = 40, 100 × 4 = 400, 1,000 × 4 = 4,000. Multiplying by 10 moves each digit one place to the left (one zero), by 100 two places, by 1,000 three places.',
  [num('timed', 'easy', '10 × 4 = ?', '10*4', seconds=10),
   num('timed', 'easy', '100 × 4 = ?', '100*4', seconds=10),
   num('normal', 'easy', '1,000 × 4 = ?', '1000*4'),
   num('normal', 'medium', '1,000 × 7 = ?', '1000*7'),
   mc('normal', 'medium', 'In 100 × 4 the digit 4 moves how many places to the left?', ['2 places', '1 place', '3 places', '4 places']),
  ])
idea(5, 'Y54', 5, 'Challenge: help Tarek',
  'Tarek says 9 × 1,000 = 900. That is wrong: 1,000 has three zeros, so 9 × 1,000 = 9,000 (9 thousands). 900 is 9 × 100.',
  [num('boss', 'hard', 'Tarek says that 9 × 1,000 equals 900. What is the right answer?', '9*1000'),
   mc('boss', 'hard', 'Tarek says 9 × 1,000 = 900. What would you tell him?', ['900 is 9 × 100; 9 × 1,000 = 9,000', 'He is right', '9 × 1,000 = 90', '9 × 1,000 = 90,000']),
   num('boss', 'hard', '1,000 × 0 = ?', '1000*0'),
   num('boss', 'hard', '1 × 1,000 = ?', '1*1000'),
  ])

# ---------- Lesson 6 · Associative Property of Multiplication (pages 81-82) ----------
idea(5, 'Y61', 6, 'Dot cards',
  'There are 10 dot cards with 5 dots on each card: 10 × 5 = 50 dots. You can also count 2 rows of 5 cards: (2 × 5) × 5 = 50.',
  [num('normal', 'easy', 'There are 10 cards with 5 dots on each card. How many dots are there?', '10*5', **CARDS(2, 5)),
   mc('normal', 'medium', 'Which way finds the number of dots on 2 rows of 5 cards with 5 dots each?', ['2 × 5 × 5', '2 + 5 + 5', '2 × 5', '5 + 5']),
   num('normal', 'medium', 'Each row has 5 cards and each card has 5 dots. How many dots are in one row?', '5*5'),
  ])
idea(5, 'Y62', 6, 'Grouping factors: the Associative Property',
  'The Associative Property of Multiplication: changing how the factors are grouped does not change the product. (3 × 2) × 4 = 6 × 4 = 24 and 3 × (2 × 4) = 3 × 8 = 24.',
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
   mc('normal', 'medium', 'Which property says (3 × 4) × 5 = 3 × (4 × 5)?', ['The Associative Property', 'The Commutative Property', 'The Identity Property', 'The Zero Property']),
  ])
idea(5, 'Y63', 6, 'Challenge: Farouk\'s problem',
  'Farouk solves 2 × 7 × 4 by doing (2 × 7) × 4 = 14 × 4. Easier: group the 2 and the 4 first: (2 × 4) × 7 = 8 × 7 = 56, or 2 × (7 × 4) = 2 × 28 = 56.',
  [mc('boss', 'hard', 'Farouk starts 2 × 7 × 4 by solving 2 × 7. Where do the parentheses go?', ['(2 × 7) × 4', '2 × (7 × 4)', '(2 × 4) × 7', '2 × 7 × (4)']),
   num('boss', 'hard', 'Farouk is solving 2 × 7 × 4. What is the answer?', '2*7*4'),
   mc('boss', 'hard', 'Which grouping makes 2 × 7 × 4 easy to solve in your head?', ['(2 × 4) × 7 = 8 × 7', '(2 + 4) × 7', '2 × 7 + 4', '(2 × 7) + 4']),
   num('boss', 'hard', '3 × 4 × 5 = ?', '3*4*5'),
  ])

# ---------- Lesson 7 · Applying Patterns in Multiplication (pages 83-84) ----------
idea(5, 'Y71', 7, 'Multiplying by 10 in your head',
  'Multiplying by 10 adds a zero: 4 × 10 = 40, 8 × 10 = 80, 7 × 10 = 70. If you know 5 × 7 = 35, then 35 × 10 = 350.',
  [num('timed', 'easy', '4 × 10 = ?', '4*10', seconds=8),
   num('timed', 'easy', '8 × 10 = ?', '8*10', seconds=8),
   num('timed', 'easy', '35 × 10 = ?', '35*10', seconds=10),
   num('normal', 'easy', '10 × 18 = ?', '10*18'),
   num('normal', 'easy', '3 × 10 = ?', '3*10'),
  ])
idea(5, 'Y72', 7, 'Decomposing multiples of 10',
  'A multiple of 10 can be decomposed into a factor pair with 10: 40 = 10 × 4, 70 = 10 × 7, 110 = 10 × 11. It is also the number of tens: 160 = 16 tens.',
  [num('timed', 'easy', '40 = 10 × ?', '40/10', seconds=10),
   num('timed', 'easy', '70 = 10 × ?', '70/10', seconds=10),
   num('normal', 'easy', '90 = 10 × ?', '90/10'),
   num('normal', 'medium', '110 = 10 × ?', '110/10'),
   num('normal', 'easy', '80 = ? tens', '80/10'),
   num('normal', 'medium', '160 = ? tens', '160/10'),
   num('normal', 'medium', '140 = ? tens', '140/10'),
  ])
idea(5, 'Y73', 7, 'Multiplying by multiples of 10, 100 and 1,000',
  'Decompose, then use the Associative Property: 7 × 20 = 7 × (2 × 10) = (7 × 2) × 10 = 14 × 10 = 140. 4 × 700 = (4 × 7) × 100 = 2,800. 3 × 4,000 = (3 × 4) × 1,000 = 12,000.',
  [num('normal', 'easy', '7 × 20 = ?', '7*20'),
   num('normal', 'medium', '5 × 50 = ?', '5*50'),
   num('normal', 'medium', '4 × 700 = ?', '4*700'),
   num('normal', 'medium', '3 × 4,000 = ?', '3*4000'),
   mc('normal', 'medium', 'Which shows 4 × 700 decomposed?', ['(4 × 7) × 100', '(4 + 7) × 100', '4 × 7 + 100', '(4 × 7) × 10']),
  ])
idea(5, 'Y74', 7, 'Challenge: Heba and Ashraf',
  'Heba did (4 × 8) × 10 = 32 × 10 = 320. Ashraf did 4 × (8 × 10) = 4 × 80 = 320. The same answer: they grouped the factors differently (Associative Property).',
  [mc('boss', 'hard', 'Heba did (4 × 8) × 10 and Ashraf did 4 × (8 × 10). How are their answers?', ['The same: 320', 'Heba 320, Ashraf 32', 'Heba 32, Ashraf 320', 'Different: 320 and 3,200']),
   num('boss', 'hard', 'Ashraf did 4 × (8 × 10). What is 8 × 10?', '8*10'),
   num('boss', 'hard', 'Heba did (4 × 8) × 10. What is the answer?', '4*8*10'),
   num('boss', 'hard', '6 × 300 = ?', '6*300'),
  ])

# =====================================================================================================
# UNIT 6 · Factors and Multiples · ideas Z1n (lesson n)
# =====================================================================================================
# ---------- Lesson 1 · Identifying Factors of Whole Numbers (pages 86-87) ----------
idea(6, 'Z11', 1, 'Seats in a rectangle: factor pairs',
  '24 airplane seats in a rectangle can be 1 × 24, 2 × 12, 3 × 8 or 4 × 6. The numbers that multiply to make 24 are its factors: 1, 2, 3, 4, 6, 8, 12, 24.',
  [mc('normal', 'easy', '24 seats are arranged in a rectangle. Which arrangement works?', ['4 rows of 6', '5 rows of 5', '7 rows of 3', '9 rows of 3'], **VEH('plane')),
   num('normal', 'easy', '24 seats in 3 equal rows. How many seats are in each row?', '24/3'),
   multi('normal', 'medium', 'Choose ALL the factors of 24.', ['6', '8', '5', '9'], [0, 1]),
   tf('normal', 'easy', '5 is a factor of 24.', False),
  ])
idea(6, 'Z12', 1, 'Patterns for 2, 5 and 10',
  'Counting by 2s shades the even numbers (ones digit 0, 2, 4, 6, 8): they have 2 as a factor. Counting by 5s ends in 0 or 5. Counting by 10s ends in 0. So 70 has 2, 5 and 10 as factors; 15 has only 5; 17 has none of them.',
  [mc('timed', 'easy', 'Is 2 a factor of 26?', ['Yes', 'No'], seconds=10),
   mc('timed', 'easy', 'Is 5 a factor of 26?', ['No', 'Yes'], seconds=10),
   mc('normal', 'easy', 'Is 10 a factor of 70?', ['Yes', 'No']),
   mc('normal', 'easy', 'Is 2 a factor of 15?', ['No', 'Yes']),
   mc('normal', 'easy', 'Is 5 a factor of 15?', ['Yes', 'No']),
   multi('normal', 'medium', 'Choose ALL the factors of 70.', ['2', '5', '10', '3'], [0, 1, 2]),
   tf('normal', 'medium', '17 has 2, 5 and 10 as factors.', False),
  ])
idea(6, 'Z13', 1, 'Listing factors with a factor rainbow',
  'List factor pairs from the outside in: 40 = 1 × 40 = 2 × 20 = 4 × 10 = 5 × 8, so the factors of 40 are 1, 2, 4, 5, 8, 10, 20, 40. 36 has 5 factor pairs: 1×36, 2×18, 3×12, 4×9, 6×6. 20 has 3: 1×20, 2×10, 4×5.',
  [mc('normal', 'medium', 'Which list shows all the factors of 40?', ['1, 2, 4, 5, 8, 10, 20, 40', '1, 2, 4, 8, 10, 40', '2, 4, 5, 8, 10, 20', '1, 4, 10, 40']),
   mc('normal', 'medium', 'Which list shows all the factors of 20?', ['1, 2, 4, 5, 10, 20', '1, 2, 5, 10, 20', '2, 4, 5, 10', '1, 4, 5, 20']),
   num('normal', 'medium', '40 = 5 × ?', '40/5'),
   num('normal', 'medium', 'How many factors does 36 have?', '9'),
   tf('normal', 'medium', '7 is a factor of 40.', False),
  ])
idea(6, 'Z14', 1, 'Challenge: factor pairs of 36',
  '36 has 5 factor pairs: 1 × 36, 2 × 18, 3 × 12, 4 × 9 and 6 × 6. In the pair 6 × 6 the factor is written once, so 36 has 9 factors.',
  [num('boss', 'hard', '36 = 4 × ?', '36/4'),
   num('boss', 'hard', '36 = 3 × ?', '36/3'),
   mc('boss', 'hard', 'Which is NOT a factor pair of 36?', ['5 × 7', '4 × 9', '2 × 18', '6 × 6']),
   multi('boss', 'hard', 'Choose ALL the numbers that have 2, 5 AND 10 as factors.', ['30', '90', '25', '42'], [0, 1]),
  ])

# ---------- Lesson 2 · Prime and Composite Numbers (pages 88-90) ----------
idea(6, 'Z21', 2, 'Factor riddles',
  'Use the clues one by one. An even number between 20 and 30 with factors 1, 2, 4, 7 and 14 is 28. An even number greater than 40, less than 60, with 10 as a factor is 50. A two-digit number with the factor pair 5 and 7 is 35.',
  [num('normal', 'medium', 'The number is an even number between 20 and 30. Some of its factors include 1, 2, 4, 7, and 14. What number is it?', '28'),
   num('normal', 'medium', 'The number is an even number greater than 40. It has 10 as a factor. It is less than 60. What number is it?', '50'),
   num('normal', 'medium', 'The number is a two-digit number. It has 5 as a factor. Its tens digit is less than its ones digit. One of its factor pairs is 5 and 7. What number is it?', '5*7'),
  ])
idea(6, 'Z22', 2, 'Patterns for 3, 6 and 9',
  'A number has 3 as a factor if the sum of its digits is a number said when skip counting by 3s (63: 6 + 3 = 9). It has 9 as a factor if the sum is said when skip counting by 9s (72: 7 + 2 = 9). It has 6 as a factor if it is even AND has 3 as a factor (36).',
  [mc('normal', 'easy', 'Is 3 a factor of 53?', ['No: 5 + 3 = 8', 'Yes: 5 + 3 = 8', 'Yes: 53 is odd', 'No: 53 is odd']),
   mc('normal', 'easy', 'Is 9 a factor of 63?', ['Yes: 6 + 3 = 9', 'No: 6 + 3 = 9', 'No: 63 is odd', 'Yes: 63 is odd']),
   mc('normal', 'medium', 'Is 6 a factor of 84?', ['Yes: it is even and 8 + 4 = 12', 'No: 8 + 4 = 12', 'No: it is even', 'Yes: it ends in 4']),
   num('timed', 'easy', 'Add the digits of 72: 7 + 2 = ?', '7+2', seconds=10),
   tf('normal', 'medium', '45 has 9 as a factor because 4 + 5 = 9.', True),
   tf('normal', 'medium', '27 has 6 as a factor.', False),
  ])
idea(6, 'Z23', 2, 'Prime or composite?',
  'A prime number has exactly two factors: 1 and the number itself (23, 31). A composite number has more than two factors (18, 21, 44).',
  [mc('timed', 'easy', '31 is …', ['Prime', 'Composite'], seconds=12),
   mc('timed', 'easy', '18 is …', ['Composite', 'Prime'], seconds=12),
   mc('normal', 'easy', '21 is …', ['Composite: 1, 3, 7, 21', 'Prime: 1, 21']),
   mc('normal', 'easy', '23 is …', ['Prime: 1, 23', 'Composite: 1, 3, 23']),
   mc('normal', 'easy', '44 is …', ['Composite', 'Prime']),
   fill('normal', 'easy', 'A prime number has exactly ___ factors.', ['two', 'three', 'one']),
   tf('normal', 'medium', 'A composite number has more than two factors.', True),
  ])
idea(6, 'Z24', 2, 'Prime numbers less than 100',
  'Circle 2, 3, 5 and 7 and cross out the other numbers you say when skip counting by 2s, 3s, 5s and 7s. The circled numbers left (except 1) are prime: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97.',
  [multi('normal', 'medium', 'Choose ALL the prime numbers.', ['13', '29', '27', '49'], [0, 1]),
   multi('normal', 'medium', 'Choose ALL the prime numbers.', ['41', '97', '51', '91'], [0, 1]),
   mc('normal', 'medium', 'Which number is crossed out when you skip count by 7s?', ['49', '47', '43', '53']),
   tf('normal', 'medium', '1 is a prime number.', False),
  ])
idea(6, 'Z25', 2, 'Challenge: the ferry seats',
  'Seats in a rectangle need a factor pair. 48 = 6 × 8 = 4 × 12 …, many rectangles. 53 is prime: only 1 row of 53. So 48 seats is better. 49 = 7 × 7 also makes a rectangle (a square).',
  [mc('boss', 'hard', 'The ferry seats will be arranged in a rectangle. Is 48 seats or 53 seats better?', ['48: it has many factor pairs', '53: it is bigger', '53: it is prime', 'They are the same'], **VEH('ferry')),
   tf('boss', 'hard', '53 seats can only be put in 1 row of 53 (or 53 rows of 1).', True),
   mc('boss', 'hard', 'Would 49 seats make a rectangle?', ['Yes: 7 rows of 7', 'No: 49 is prime', 'Yes: 5 rows of 9', 'No: 49 is odd']),
   num('boss', 'hard', '48 seats in 6 equal rows. How many seats in each row?', '48/6', **VEH('ferry')),
  ])

# ---------- Lesson 3 · Greatest Common Factor G.C.F (pages 91-92) ----------
idea(6, 'Z31', 3, 'Common factors',
  'List the factors of both numbers and circle the ones they share. 36: 1, 2, 3, 4, 6, 9, 12, 18, 36. 42: 1, 2, 3, 6, 7, 14, 21, 42. Common factors: 1, 2, 3, 6.',
  [mc('normal', 'medium', 'What are the common factors of 36 and 42?', ['1, 2, 3, 6', '1, 2, 3, 4, 6', '2, 3, 6, 7', '1, 6']),
   mc('normal', 'medium', 'What are the common factors of 20 and 30?', ['1, 2, 5, 10', '1, 2, 4, 5, 10', '2, 5, 10, 15', '1, 10']),
   mc('normal', 'medium', 'What are the common factors of 21 and 35?', ['1, 7', '1, 3, 7', '1, 5, 7', '7']),
   mc('normal', 'medium', 'What are the common factors of 18 and 4?', ['1, 2', '1, 2, 4', '2', '1, 2, 3']),
   tf('normal', 'medium', 'The only common factor of 17 and 22 is 1.', True),
  ])
idea(6, 'Z32', 3, 'The greatest common factor (GCF)',
  'The greatest common factor is the biggest of the common factors. GCF of 36 and 42 = 6, of 40 and 50 = 10, of 10 and 24 = 2, of 33 and 11 = 11.',
  [num('timed', 'easy', 'Find the GCF of 40 and 50.', '10', seconds=20),
   num('normal', 'easy', 'Find the GCF of 10 and 24.', '2'),
   num('normal', 'easy', 'Find the GCF of 33 and 11.', '11'),
   num('normal', 'medium', 'Find the GCF of 36 and 42.', '6'),
   num('normal', 'medium', 'Find the GCF of 20 and 30.', '10'),
  ])
idea(6, 'Z33', 3, 'Challenge: equal groups with the GCF',
  'To make the greatest number of equal groups with nothing left over, use the GCF. 36 girls and 27 boys: GCF = 9 groups of each, with 4 girls or 3 boys in a group. Amira: 24 apples and 36 bags of candy → 12 packs, 2 apples and 3 bags each. Mohab: 7 roses and 14 daisies → 7 arrangements, 1 rose and 2 daisies each.',
  [num('boss', 'hard', '36 girls and 27 boys go on a field trip in groups of girls and groups of boys, each group the same size. What is the greatest number of groups of girls?', '9', unit=GROUPS),
   num('boss', 'hard', '27 boys are divided into 9 equal groups. How many boys are in each group?', '27/9'),
   num('boss', 'hard', 'Amira has 24 apples and 36 bags of candy. What is the greatest number of identical snack packs she can make?', '12', unit=PACKS),
   num('boss', 'hard', 'Amira makes 12 snack packs from 36 bags of candy. How many bags of candy are in each pack?', '36/12'),
   num('boss', 'hard', 'Mohab has 7 roses and 14 daisies. What is the greatest number of identical flower arrangements?', '7'),
   num('boss', 'hard', 'Mohab makes 7 arrangements with 14 daisies. How many daisies are in each one?', '14/7'),
  ])

# ---------- Lesson 4 · Identifying Multiples of Whole Numbers (pages 93-94) ----------
idea(6, 'Z41', 4, 'Skip counting makes multiples',
  'The multiples of a number are the numbers you say when you skip count by it from 0: multiples of 3 are 3, 6, 9, 12, 15 …; multiples of 4 are 4, 8, 12, 16 …',
  [num('timed', 'easy', 'Skip count by 3: 3, 6, 9, 12, ?', '15', seconds=10, **LINE(30, [3], upto=12)),
   num('timed', 'easy', 'Skip count by 4: 4, 8, 12, 16, ?', '20', seconds=10, **LINE(30, [4], upto=16)),
   num('normal', 'easy', 'Skip count by 5: 5, 10, 15, 20, 25, ?', '30', **LINE(30, [5], upto=25)),
   multi('normal', 'easy', 'Choose ALL the multiples of 4.', ['12', '28', '14', '18'], [0, 1]),
   tf('normal', 'easy', '27 is a multiple of 9.', True),
   tf('normal', 'easy', '25 is a multiple of 2.', False),
  ])
idea(6, 'Z42', 4, 'Patterns in the multiples',
  'Multiples of 2 are the even numbers. Multiples of 5 end in 0 or 5. Multiples of 10 end in 0. Every multiple of 10 is also a multiple of 2 and of 5.',
  [mc('normal', 'easy', 'Which number is a multiple of 5?', ['45', '52', '58', '41']),
   mc('normal', 'easy', 'Which number is a multiple of 10?', ['60', '65', '16', '105']),
   mc('normal', 'medium', 'Which number is a multiple of 6?', ['42', '32', '26', '16']),
   num('normal', 'medium', 'What is the 7th multiple of 8? (8, 16, 24, …)', '7*8'),
  ])
idea(6, 'Z43', 4, 'Challenge: Tahani walks home',
  'The bus stops every 4 km: at 4, 8, 12, 16, 20 km. Tahani lives 18 km from school. The last stop before 18 is 16 km, so she walks 18 − 16 = 2 km.',
  [num('boss', 'hard', 'The bus stops every 4 km. Tahani lives 18 km from school. How far does she walk from the bus stop?', '18-16', unit=KM, **LINE(20, [], bus=True, stop=18)),
   num('boss', 'hard', 'The bus stops every 4 km. At which km is the last stop before Tahani\'s house at 18 km?', '16', unit=KM, **LINE(20, [], bus=True, stop=18)),
   tf('boss', 'hard', 'A bus that stops every 4 km stops at 18 km.', False),
   num('boss', 'hard', 'A bus stops every 4 km. How many stops does it make in the first 20 km?', '20/4'),
  ])

# ---------- Lesson 5 · Common Multiples (pages 95-96) ----------
idea(6, 'Z51', 5, 'The bus stops here',
  'Bus 1 stops every 3 km, Bus 2 every 5 km and Bus 3 every 9 km. Bus 1 and Bus 2 both stop at 15 km and 30 km (multiples of 3 and of 5). Bus 1 and Bus 3 both stop at 9, 18 and 27 km.',
  [num('normal', 'medium', 'Bus 1 stops every 3 km and Bus 2 stops every 5 km. At which km do they first stop at the same place?', '15', unit=KM, **LINE(30, [], bus=True)),
   multi('normal', 'medium', 'Bus 1 stops every 3 km and Bus 3 every 9 km. Choose ALL the places (up to 30 km) where both stop.', ['9 km', '18 km', '27 km', '12 km'], [0, 1, 2], **LINE(30, [], bus=True)),
   mc('normal', 'medium', 'Bus 2 stops every 5 km. Where does it NOT stop?', ['12 km', '15 km', '25 km', '30 km'], **LINE(30, [], bus=True)),
  ])
idea(6, 'Z52', 5, 'Common multiples',
  'A common multiple is a multiple of both numbers. Multiples of 3: 3, 6, 9, 12, 15, 18, 21, 24 …; multiples of 4: 4, 8, 12, 16, 20, 24 … The common multiples of 3 and 4 are 12, 24, …',
  [mc('normal', 'easy', 'Which is a common multiple of 5 and 2?', ['10', '15', '12', '7']),
   mc('normal', 'easy', 'Which is a common multiple of 3 and 4?', ['12', '16', '9', '7']),
   mc('normal', 'easy', 'Which is a common multiple of 9 and 3?', ['18', '12', '21', '6']),
   mc('normal', 'medium', 'Which is a common multiple of 4 and 5?', ['20', '15', '24', '9']),
   multi('normal', 'medium', 'Choose ALL the common multiples of 2 and 6.', ['6', '12', '8', '9'], [0, 1]),
   tf('normal', 'medium', '15 is a common multiple of 5 and 3.', True),
  ])
idea(6, 'Z53', 5, 'Challenge: the first two common multiples',
  'List the multiples of each number until you find two that match. 5 and 7: 35 and 70. 6 and 9: 18 and 36. 6 and 8: 24 and 48. 4 and 7: 28 and 56.',
  [mc('boss', 'hard', 'What are the first two common multiples of 5 and 7?', ['35 and 70', '12 and 24', '35 and 45', '5 and 7']),
   mc('boss', 'hard', 'What are the first two common multiples of 6 and 9?', ['18 and 36', '54 and 108', '15 and 30', '18 and 27']),
   num('boss', 'hard', 'What is the first common multiple of 6 and 8?', '24'),
   num('boss', 'hard', 'What is the first common multiple of 4 and 7?', '4*7'),
  ])

# ---------- Lesson 6 · Relationships between Factors and Multiples (pages 97-98) ----------
idea(6, 'Z61', 6, 'Factor or multiple?',
  'If 3 × 4 = 12, then 3 and 4 are factors of 12, and 12 is a multiple of 3 and of 4. A factor is never greater than its number; a multiple is never smaller.',
  [tf('normal', 'easy', '3 is a factor of 12.', True),
   tf('normal', 'easy', '12 is a multiple of 3.', True),
   tf('normal', 'medium', '12 is a factor of 3.', False),
   fill('normal', 'medium', '4 × 6 = 24, so 24 is a ___ of 4.', ['multiple', 'factor', 'prime']),
   fill('normal', 'medium', '4 × 6 = 24, so 6 is a ___ of 24.', ['factor', 'multiple', 'product']),
  ])
idea(6, 'Z62', 6, 'Making connections: 3, 6 and 12',
  'In 3, 6 and 12 each number is a factor of the bigger ones: 3 is a factor of 6 and 12, 6 is a factor of 12. 12 is a multiple of 3 and of 6. In 4, 8, 16 and 24: 4 and 8 are factors of 16 and 24.',
  [multi('normal', 'medium', 'Choose ALL the true sentences about 3, 6 and 12.', ['6 is a multiple of 3', '3 is a factor of 12', '12 is a factor of 6', '3 is a multiple of 6'], [0, 1]),
   tf('normal', 'medium', '8 is a factor of 16 and of 24.', True),
   tf('normal', 'medium', '16 is a multiple of 24.', False),
  ])
idea(6, 'Z63', 6, 'Challenge: multiples riddles',
  'An odd number that is a multiple of 3 and 5 and greater than 20: 45 (or 75 …; 30 and 60 are even). An even multiple of 4 and 8 between 10 and 20: 16. An even multiple of 3, 4 and 6: 12 (or 24, 36 …).',
  [mc('boss', 'hard', 'The number is an odd number. It is a multiple of 3 and 5. It is greater than 20. What number can it be?', ['45', '30', '15', '35']),
   num('boss', 'hard', 'The number is an even number. It is a multiple of 4 and 8. It is between 10 and 20. What number is it?', '16'),
   mc('boss', 'hard', 'The number is an even number. It is a multiple of 3, 4, and 6. What number can it be?', ['12', '18', '16', '9']),
   tf('boss', 'hard', '30 fits the riddle "odd, multiple of 3 and 5, greater than 20".', False),
  ])

# ----------------------------------------------------------------------------------------------------
HEAD = {
 5: '''/* Math · Grade 4 · Unit 5 "Multiplication as a Relationship" · Languages track (English), first term 2026/2027
   Source: the English school book, Unit 5 (pages 70-84): Concept 1 "Multiplicative Comparisons" (lessons 1-3), Concept 2 "Properties and Patterns of Multiplication" (lessons 4-7).
   Idea ids: Y + lesson + number (Y11 … Y74; A-X are used by Units 1-4).   Boss ideas: Y13, Y24, Y33, Y43, Y54, Y63, Y74.
   The book is an activity book with no printed answers: numbers and situations are the book's own and EVERY number answer is computed (calc, checked by tools/check_questions.js).
   Pictures: the owner's Gemini vehicles (math/assets/veh_*.webp, 2 Nov 2026) in vehFig; tapeFig and arrayFig drawn in code (math/g4_art.js). A picture never shows the answer.
   Review notes:
   - Lesson 2: the speeds are the infographic's ("about", "nearly"): sailboat 2 × walking, car 20 × walking, cruise ship 8 × walking, high-speed train 8 × cruise ship, airplane nearly 200 × walking.
     The bicycle "3 to 4 times faster than a sailboat" is a range and is not asked. The story equations are asked as choices (the book: "you do not have to solve").
   - Lesson 3: Y33 "boat 12 seats vs car 4 seats" uses the book's 12-seat boat and the table (the book asks the child to write his own comparison). The ferry picture stands for the boat.
   - Lesson 4: the definition of the Commutative Property is not printed (the child writes it); it is the a × b = b × a form of the book's array equations. Badr and Salma are both right.
   - Lesson 5: the metro / walking blanks are open (no numbers printed), not asked.
   - Lesson 6: the dot-card picture shows 10 cards of 5 dots as 2 rows of 25 dots grouped by 5.
   - Not asked: Writing About Math (open), Check Your Understanding, drawing arrays on the grid, place value models.
   Generated by math/tools/gen_mg4u56.py. */''',
 6: '''/* Math · Grade 4 · Unit 6 "Factors and Multiples" · Languages track (English), first term 2026/2027
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
   Generated by math/tools/gen_mg4u56.py. */''',
}
LES = {
 5: ['Lesson 1 · Multiplicative Comparison (pages 71-72)', 'Lesson 2 · Creating Multiplicative Comparison Equations (pages 73-74)', 'Lesson 3 · Solving Multiplicative Comparison Equations (pages 75-76)',
     'Lesson 4 · Commutative Property of Multiplication (pages 77-78)', 'Lesson 5 · Identity Property and the Zero Property (pages 79-80)', 'Lesson 6 · Associative Property of Multiplication (pages 81-82)',
     'Lesson 7 · Applying Patterns in Multiplication (pages 83-84)'],
 6: ['Lesson 1 · Identifying Factors of Whole Numbers (pages 86-87)', 'Lesson 2 · Prime and Composite Numbers (pages 88-90)', 'Lesson 3 · Greatest Common Factor G.C.F (pages 91-92)',
     'Lesson 4 · Identifying Multiples of Whole Numbers (pages 93-94)', 'Lesson 5 · Common Multiples (pages 95-96)', 'Lesson 6 · Relationships between Factors and Multiples (pages 97-98)'],
}
TITLE = {5: 'Multiplication as a Relationship', 6: 'Factors and Multiples'}

def write(u, ar):
    cid = 'mg4u%d' % u
    out = [HEAD[u], '(function () {',
           "window.CHAPTER = { id: '%s', title: '%s', grade: '%s', track: '%s' };" % (cid, TITLE[u], 'Grade 4', 'Languages'),
           '', 'window.IDEAS = [']
    rows, les = [], 0
    for I in UNITS_IDEAS[u]:
        if I['lesson'] != les:
            les = I['lesson']; rows.append(('  /* ---------- %s ---------- */' % LES[u][les - 1], None))
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
    write(u, False)
    print('Unit', u, len(UNITS_IDEAS[u]), 'ideas', sum(len(I['variants']) for I in UNITS_IDEAS[u]), 'phrasings')
