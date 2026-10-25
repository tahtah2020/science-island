/* Owner tool (not part of the game): checks every questions*.js file before a release.
   Run from the site folder:  node tools/check_questions.js
   It checks: ids (one capital letter + number, never used twice in a grade and language), answers inside their lists, tap targets that
   exist in the drawings, table columns that are all used, cards of a "build" answer that are all different, the underlined
   word of a "fix" question, and that each Arabic file mirrors its English file (same ideas, same phrasings, same answers).
   The files and their grades are read from chapters.js. When a chapter adds tap pictures, add their targets to TAPS below. */
const fs = require('fs'), path = require('path'), ROOT = process.argv[2] || path.join(__dirname, '..');
const TAPS = { bloodLoop: ['heart', 'lungs', 'whole'], urinary: ['kidneys', 'urtube', 'bladder'], organsMap: ['lungs', 'heart', 'stomach', 'small', 'large'], numLine6: ['lnA','lnB','lnC','lnD','lnE','lnF'], vennGCF: ['vnL','vnM','vnR'], factorTree: [], boxPack: [], bagFrac: [], setsCircles: ['stRat','stInt','stNat','stCnt'], arabWings: ['afWing','asWing','redSea'], arabBorders: ['bAtl','bMed','bTaurus','bZagros','bGulf','bArabSea','bIndian','bSahara'], arabStraits: ['sHormuz','sSuez','sGibraltar','sMandeb'], arabMountains: ['mAtlas','mRedSea','mHejaz','mZagros','mOman'], arabPlateaus: ['pNafr','pSham','pNajd','pHadra'], arabPlains: ['plFlood','plCoast','plDesert'], arabClimate: ['cMed','cDesert','cTrop'], landforms: ['lfMount','lfPlat','lfOasis','lfDunes','lfWadi','lfPlain'], mountainRain: ['slopeWind','slopeLee','peakSnow'], envProblems: ['eDrought','eDesertif','ePollution','eFlood'], globeGrid: ['equator','cancer','capricorn','arctic','antarctic','greenwich'], egyptGrid: [], egyptRegions: ['delta','valley','fayoum','west','east','sinai'], reliefForces: ['fault','fold'], climateMap: ['med','desert'], sunRays: ['rayEq1','rayS','rayN','rayEq2'], dunes: [], habitats: ['envNile','envDesert','envCoast'], landUse: ['farm','homes','park','tourist','factory'], servicePlan: ['school','hospital','police','fire','market','post'], thenNow: ['old','new'], regions: ['delta','valley','border'], compassTown: ['house','mosque','school','hospital','market','bus','museum','church'], sunFacing: ['ahead','behind','right','left'], schoolPlan: ['gate','security','library','theatre','playground','garden','art','teachers','principal'], mapParts: ['title','rose','key','scale'], mapCities: ['cairo','sohag','aswan','hurghada'], pathPlans: ['p1','p2','p3'], skyViews: ['plane','satellite'], mapKinds: ['hand','digital'], sourceCards: ['papyrus','carving','article','book'], armBent: ['in', 'out'], armStraight: ['in', 'out'], armJoints: ['shoulder', 'elbow', 'wrist'], skeleton: ['skull', 'ribs', 'backbone'], plantYear: ['sprout', 'flower', 'fruit', 'wither'], lizardSummer: ['rock', 'crevice', 'sand'], lizardWinter: ['rock', 'crevice', 'sand'],
  seedParts: ['coat', 'embryo', 'cotyledon'], iodineSeeds: ['ungerminated', 'germinated'], cupsWater: ['A', 'B'], cupsAir: ['A', 'B'], cupsTemp: ['A', 'B'],
  /* Grade 5 chapters 4-6 (ch4_art.js, ch5_art.js, ch6_art.js) */
  potsSun: ['A', 'B'], plantsSun: ['A', 'B'], potsFert: ['A', 'B'], plantsFert: ['A', 'B'],
  luffaFlowers: ['male', 'female'], flowerParts: ['stamen', 'pollen', 'pistil', 'swelling', 'petal', 'sepal'], pollinationBags: ['A', 'B'],
  microscope: ['eyepiece', 'tube', 'arm', 'knob', 'nosepiece', 'objective', 'clips', 'stage', 'reflector'],
  lifeStages: ['infancy', 'childhood', 'youth', 'adulthood', 'oldage'], healthyHabits: ['diet', 'sleep', 'exercise'],
  /* Grade 5 chapter 7 (ch7_art.js, the owner's pictures) */
  ch8Sky: ['c8sun', 'c8clouds', 'c8rain', 'c8snow'], ch8Refs: ['c8tower', 'c8palm', 'c8boat', 'c8compass'], ch8Tools: ['c8sat', 'c8radar'], ch8Dust: ['c8sand', 'c8clouds'], ch8Grid: [],
  ch9Two: ['c9puddle', 'c9icejar'], ch9Lab: ['c9beaker', 'c9icejar'], ch9Tools: ['c9micro', 'c9sprout'], ch9Four: ['c9laundry', 'c9glass', 'c9mtrain', 'c9river'], ch9Cycle: ['w9sea', 'w9cloud', 'w9rain', 'w9river'], ch9CycleFig: [], ch9Photo: [],
  ch7Kittens: ['c7cat', 'c7kitten'], ch7Six: ['c7dog', 'c7camel', 'c7gazelle', 'c7fox', 'c7chicken', 'c7fish'], ch7Hatch: ['c7fish', 'c7eggs'], ch7Reserves: ['c7coral', 'c7gazelle'],
  /* Grade 6 (g6_art.js, g6_body.js) */
  breathBags: ['milky', 'clear'], airways: ['nose', 'windpipe', 'lungs'], gasExchange: ['toBlood', 'toAir'],
  digestTract: ['foodpipe', 'stomach', 'liver', 'small', 'large'], salivaTubes: ['blue', 'same'], gutWalls: ['villi', 'flat'], cloths: ['loops', 'flat'],
  jarSetups: ['closed', 'open', 'gaps'], airBar: ['n2', 'o2', 'co2'], gasJars: ['n2', 'o2', 'co2'], limeJars: ['clear', 'milky'],
  /* Prep 1 (p1_art.js) */
  atomParts: ['nucleus', 'electron', 'proton', 'neutron'], energyLevels: ['K', 'L', 'M', 'N'], ptBlocks: ['s', 'p', 'd', 'f'],
  ptGroups: ['g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'g7', 'g0'], particleBoxes: ['element', 'compound', 'mixture'], mixBeakers: ['hetero', 'homo'],
  bondTypes: ['ionic', 'single', 'double', 'triple'], carbonShapes: ['straight', 'branched', 'cyclic'],
  /* Prep 2 (p2_art.js) */
  particleStates: ['solid', 'liquid', 'gas'], syringes: ['air', 'water', 'sand'], stateCycle: ['melt', 'freeze', 'evap', 'cond', 'subl', 'depo'],
  heatingCurve: ['solid', 'melting', 'liquid', 'boiling', 'gas'], systems3: ['open', 'closed', 'isolated'], spoons: ['metal', 'wood', 'plastic'], heatPot: ['rad', 'cond', 'conv'], mixGraphs: ['mixA', 'mixB', 'mixC', 'mixD'],
  /* Math (math/m5_art.js) */
  gridShade: ['gA', 'gB', 'gC'], multVenn: ['mvL', 'mvM', 'mvR'], barModel: [], skipLine: [], placeTable: ['b1', 'm100', 'm10', 'm1', 't100', 't10', 't1', 'u100', 'u10', 'u1'], placeChart: ['hundreds', 'tens', 'ones', 'tenths', 'hundredths', 'thousandths'], numLine: ['n0', 'n1', 'n2', 'n3', 'n4', 'n5', 'n6', 'n7', 'n8', 'n9', 'n10'],
  /* English (english/g4_art.js) */
  fiveSenses: ['eye', 'ear', 'nose', 'tongue', 'palm'],
  nileLife: ['crocodile', 'weeds', 'insect', 'fish', 'bird', 'river'],
  bodyParts: ['heart', 'lungs', 'muscle', 'blood', 'vessels', 'fist'],
  weatherSix: ['thunderstorm', 'sandstorm', 'flood', 'drought', 'wildfire', 'heatwave'],
  storyThings: ['pond', 'well', 'fly', 'frog', 'boat', 'mudhouse'],
  civEarly: ['axe', 'mudbrick', 'chisel', 'bardi', 'nileriver', 'narmer'],
  civGreat: ['steppyr', 'khufu', 'sphinx', 'lahun', 'theater', 'qamh'],
  trEnergy: ['coal', 'gold', 'iron', 'oilrig', 'solar', 'wind'],
  trWorks: ['highdam', 'felucca', 'well', 'train', 'fishfarm', 'bridge'],
  places6: ['restaurant', 'coffeeshop', 'bakery', 'supermarket', 'club', 'themepark'],
  village6: ['field', 'cottage', 'commcenter', 'barn', 'mainsquare', 'cow'],
  resources6: ['sunlight', 'fossilfuel', 'soil', 'minerals', 'freshwater', 'wind'],
  gifts6: ['cotton', 'wheat', 'gold', 'ship', 'digger', 'path'],
  everglades6: ['alligator', 'canoe', 'owl', 'splash', 'swamp', 'turtle'],
  /* Grade 4 (g4_art.js) */
  hidePlaces: ['grass', 'stone', 'rock', 'sand'], nileDesert: ['nile', 'desert'], fennec: ['ears', 'feet', 'tail'], desertDay: ['hole', 'sand', 'dune'],
  butterflyStages: ['egg', 'larva', 'pupa', 'adult'], insectBody: ['head', 'thorax', 'abdomen'], insectSide: ['antennae', 'wings', 'legs'], whoIsInsect: ['grasshopper', 'spider', 'pillbug'],
  seedKinds: ['sunflower', 'chickpea', 'fava'], sowDepth: ['heap', 'right', 'deep'], seedlingLeaves: ['seedleaf', 'trueleaf'], flowerFruit: ['bud', 'flower', 'fruit'], plantBody: ['leaves', 'stem', 'roots'] };
const load = f => { const w = {}; new Function('window', fs.readFileSync(path.join(ROOT, f), 'utf8'))(w); return w; };
const CH = load('chapters.js').CHAPTERS, gradeOf = {}, pairs = [];
/* questions files live in the subject folders (science/, math/ …); ids must be unique inside one subject, grade and language */
CH.forEach(c => { [c.questions, c.questionsAr].forEach(f => { if (f) gradeOf[f] = (c.subject || 'science') + ':' + (c.grade || 'g5'); }); if (c.questions && c.questionsAr) pairs.push([c.questions, c.questionsAr]); });
const dirs = [''].concat((load('chapters.js').SUBJECTS || [{ dir: 'science' }]).map(s => s.dir).filter(d => d && fs.existsSync(path.join(ROOT, d))));
const files = [].concat(...dirs.map(d => fs.readdirSync(path.join(ROOT, d)).filter(f => /^questions.*\.js$/.test(f)).map(f => d ? d + '/' + f : f)));
let bad = 0; const allIds = {};
for (const f of files) {
  const w = load(f);
  const err = m => { bad++; console.log(f + ': ' + m); };
  if (!gradeOf[f]) err('not listed in chapters.js');
  const lang = /_ar\.js$/.test(f) ? 'ar' : 'en', ids = new Set();
  let nv = 0, core = 0;
  w.IDEAS.forEach(I => {
    if (!/^[A-Z]\d+$/.test(I.id)) err('bad id ' + I.id);
    if (ids.has(I.id)) err('duplicate id ' + I.id); ids.add(I.id);
    const k = (gradeOf[f] || 'science:g5') + ':' + lang + ':' + I.id; if (allIds[k]) err(`id ${I.id} also in ${allIds[k]}`); allIds[k] = f;
    if (!I.bonus) core++;
    if (!I.explain || !I.concept) err(I.id + ' no explain/concept');
    if (!I.lesson) err(I.id + ' no lesson');
    I.variants.forEach((v, i) => {
      nv++; const at = `${I.id}.${i + 1}`;
      if (!v.q) err(at + ' no q'); if (!v.level) err(at + ' no level');
      if (v.fig && !TAPS[v.fig] && !['gridModel'].includes(v.fig)) err(at + ' unknown fig ' + v.fig);
      if (v.mode === 'timed' && !v.seconds) err(at + ' timed without seconds');
      if (I.boss && v.mode !== 'boss') err(at + ' boss idea, variant not boss');
      if (!I.boss && v.mode === 'boss') err(at + ' boss variant in a normal idea');
      const idx = (a, n) => Number.isInteger(a) && a >= 0 && a < n;
      if (v.type === 'tf') { if (![0, 1].includes(v.answer)) err(at + ' tf answer'); }
      else if (v.type === 'mc' || v.type === 'fill') { if (!idx(v.answer, v.options.length)) err(at + ' answer range'); if (new Set(v.options).size !== v.options.length) err(at + ' duplicate options'); if (v.type === 'fill' && !v.q.includes('___')) err(at + ' fill without gap'); }
      else if (v.type === 'multi') { if (!v.answer.length || !v.answer.every(a => idx(a, v.options.length)) || v.answer.length >= v.options.length) err(at + ' multi answer'); }
      else if (v.type === 'order') { if (v.answer.slice().sort().join() !== v.items.map((_, i) => i).join()) err(at + ' order answer'); }
      else if (v.type === 'match') { if (v.answer.length !== v.left.length || !v.answer.every(a => idx(a, v.right.length))) err(at + ' match answer'); }
      else if (v.type === 'table') { if (v.answer.length !== v.items.length || !v.answer.every(a => idx(a, v.cols.length))) err(at + ' table answer'); if (new Set(v.items).size !== v.items.length) err(at + ' table duplicate items'); v.cols.forEach((_, c) => { if (!v.answer.includes(c)) err(at + ' empty column'); }); }
      else if (v.type === 'tap') { if (!TAPS[v.diagram] || !TAPS[v.diagram].includes(v.answer)) err(at + ' tap target'); }
      else if (v.type === 'fix') { if (!v.q.includes(v.wrong)) err(at + ' wrong word not in sentence'); if (!v.answer) err(at + ' fix answer'); if ([...v.answer].filter(c => /\p{L}/u.test(c)).length > 18) err(at + ' answer too long for tiles'); }
      else if (v.type === 'term') { if (!v.answer || [...v.answer].filter(c => /\p{L}/u.test(c)).length > 18) err(at + ' term answer'); }
      else if (v.type === 'num') {
        if (!/^\d+(\.\d+)?$/.test(String(v.answer))) err(at + ' num answer must be a plain number text');
        if (v.calc) { if (!/^[0-9+\-*/(). ]+$/.test(v.calc)) err(at + ' calc has odd characters'); else { let r; try { r = Function('return (' + v.calc + ')')(); } catch (e) { r = NaN; } if (!(Math.abs(r - Number(v.answer)) < 1e-9)) err(at + ' calc ' + v.calc + ' = ' + r + ' but answer is ' + v.answer); } }
        else if (v.round) { const s = Math.pow(10, v.round[1]), r = Math.floor(Number(v.round[0]) * s + 0.5 + 1e-9) / s; if (!(Math.abs(r - Number(v.answer)) < 1e-9)) err(at + ' round ' + v.round[0] + ' to ' + v.round[1] + ' = ' + r + ' but answer is ' + v.answer); }
        else if (!v.noCalc) err(at + ' num without calc (add calc: "expression" so the answer is checked, or noCalc: true)');
      }
      else if (v.type === 'build') { const all = v.parts.concat(v.extra || []); if (new Set(all).size !== all.length) err(at + ' duplicate cards'); if (v.parts.length < 2) err(at + ' too few parts'); if (!v.style) err(at + ' build without style'); }
      else err(at + ' unknown type ' + v.type);
    });
  });
  console.log(`${f}: ${w.IDEAS.length} ideas (${core} core), ${nv} phrasings`);
}
// EN/AR parity
for (const [en, ar] of pairs) {
  const L = f => (fs.existsSync(path.join(ROOT, f)) ? load(f).IDEAS : null);
  const E = L(en), A = L(ar); if (!E || !A) { bad++; console.log('missing file', E ? ar : en); continue; }
  if (E.length !== A.length) { bad++; console.log('parity ideas', en, E.length, A.length); }
  E.forEach((I, k) => { const J = A[k]; if (!J || J.id !== I.id) { bad++; return console.log('parity id', en, I.id); }
    if (J.variants.length !== I.variants.length) { bad++; console.log('parity count', I.id); }
    ['lesson', 'boss', 'bonus', 'guide'].forEach(key => { if ((I[key] || 0) !== (J[key] || 0)) { bad++; console.log('parity', key, en, I.id); } });
    I.variants.forEach((v, i) => { const u = J.variants[i]; if (u && (u.type !== v.type || u.mode !== v.mode || u.level !== v.level || (JSON.stringify(u.answer) !== JSON.stringify(v.answer) && !['term', 'fix'].includes(v.type)))) { bad++; console.log('parity', en, I.id + '.' + (i + 1), v.type, u.type); } }); });
}
console.log(bad ? bad + ' PROBLEMS' : 'all good');
process.exit(bad ? 1 : 0);
