/* Prep 1 Science (Languages) · Unit 1 The Matter
   Core ideas from the school book "Discover and Learn", first term, all four lessons: activities, "It is concluded", "Evaluate Your Understanding",
   Life Applications and the Evaluation Questions (pages 2-31), plus 2 bonus ideas from the scientists' profiles (Rutherford, page 4; Mendeleev, page 11).
   Same format as the other files. Ideas: A = structure of the atom (lesson 1), P = the periodic table (lesson 2), M = matter and its properties (lesson 3),
   B = chemical bonds (lesson 4), X = bonus. Idea ids are unique inside Prep 1 (the other grades have their own sets).
   The book's words: matter, atom, nucleus, protons, neutrons, electrons, subatomic particles, energy levels (K, L, M, N), 2n², atomic number (Z),
   mass number (A), nucleons, isotopes, periods, groups, blocks (s, p, d, f), alkali metals, alkaline earth metals, transition elements, halogens,
   noble gases, metalloids, valency, Lewis structure, mixture, homogeneous, heterogeneous, compound, element, molecular formula, organic compound,
   physical and chemical properties, ionic bond, covalent bond, cation, anion.
   Left out on purpose: the book counts vitamin D among molecules with "several thousands" of atoms (it has about 70), so only plastic polymers
   and hemoglobin are used for that idea.
   Tap pictures (drawn in p1_art.js): atomParts -> nucleus | electron | proton | neutron ; energyLevels -> K | L | M | N ;
   ptBlocks -> s | p | d | f ; ptGroups -> g1 … g7 | g0 ; particleBoxes -> element | compound | mixture ; mixBeakers -> hetero | homo ;
   bondTypes -> ionic | single | double | triple ; carbonShapes -> straight | branched | cyclic
*/
window.CHAPTER = { id: 'p1-lang-u1', title: 'The Matter', grade: 'Prep 1', track: 'Languages' };

window.IDEAS = [
  /* ---------- Lesson 1 · Structure of the Atom (pages 2-9) ---------- */
  { id: 'A1', lesson: 1, concept: 'The atom is the building unit of matter',
    explain: 'Matter is anything that has mass, volume and occupies space. The atom is the building unit of the structure of any matter: limestone is composed mainly of calcium carbonate, calcium carbonate is composed of molecules, and each molecule is composed of atoms.',
    variants: [
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Matter is anything that has ___, volume and occupies space.', options: ['mass', 'color', 'smell'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What is the building unit of the structure of any matter?', options: ['The atom', 'The cell', 'The rock', 'The color'], answer: 0 },
      { type: 'order', mode: 'normal', level: 'medium', q: 'The Sphinx is made of limestone rocks. Put the units in order, from the biggest to the smallest.', items: ['Calcium carbonate molecules', 'Limestone rock', 'Atoms', 'Calcium carbonate'], answer: [1, 3, 0, 2] },
      { type: 'term', mode: 'normal', level: 'medium', q: 'Anything that has mass, volume and occupies space.', answer: 'Matter' },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'Each molecule of calcium carbonate is composed of atoms.', answer: 0 }
    ] },
  { id: 'A2', lesson: 1, concept: 'Discovering the structure of the atom',
    explain: 'Ancient Greek philosophers believed that matter was composed of small, indivisible parts called atoms. In the early 19th century, Dalton formulated the first scientific theory about the atom, showing that atoms are indivisible. Rutherford’s model of the atom (1909) was the first atomic model formulated on experimental basis.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Whose model of the atom (1909) was the first atomic model formulated on experimental basis?', options: ['Rutherford', 'Dalton', 'Mendeleev', 'Newton'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Who formulated the first scientific theory about the atom, in the early 19th century?', options: ['Dalton', 'Rutherford', 'Moseley', 'Coulomb'], answer: 0 },
      { type: 'match', mode: 'normal', level: 'hard', q: 'Match each one to what the book says about it.', left: ['Ancient Greek philosophers', 'Dalton', 'Rutherford'], right: ['Believed that matter was composed of small, indivisible parts called atoms', 'Formulated the first scientific theory about the atom', 'His model (1909) was the first atomic model formulated on experimental basis'], answer: [0, 1, 2] },
      { type: 'tf', mode: 'timed', seconds: 12, level: 'easy', q: 'Dalton’s theory showed that atoms are indivisible.', answer: 0 }
    ] },
  { id: 'A3', lesson: 1, concept: 'The nucleus and the subatomic particles',
    explain: 'There is a very small space in the atom that contains two types of particles, protons and neutrons: this space is the nucleus. Electrons revolve around the nucleus at very high speeds in certain energy levels. Protons, neutrons and electrons are called subatomic particles. If the atom were the size of a baseball field, the nucleus would be the size of a pinhead in the middle of the field.',
    variants: [
      { type: 'tap', diagram: 'atomParts', mode: 'normal', level: 'easy', q: 'Tap the part of the atom that contains the protons and the neutrons.', answer: 'nucleus' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Which particles are found in the nucleus of the atom?', options: ['Protons and neutrons', 'Electrons only', 'Protons and electrons', 'Neutrons and electrons'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Electrons revolve around the nucleus at very high speeds in certain ___.', options: ['energy levels', 'nuclei', 'molecules'], answer: 0 },
      { type: 'term', mode: 'normal', level: 'medium', q: 'The name given to protons, neutrons and electrons.', answer: 'Subatomic particles' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'If we represent the size of the atom by the size of a baseball field, the nucleus would be about the size of…', options: ['a pinhead in the middle of the field', 'the whole field', 'half of the field', 'a car in the field'], answer: 0 },
      { type: 'tap', diagram: 'atomParts', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap the particle that revolves around the nucleus.', answer: 'electron' }
    ] },
  { id: 'A4', lesson: 1, concept: 'Charges and masses of the subatomic particles',
    explain: 'The proton has a charge of +1, the neutron has no charge (0) and the electron has a charge of −1. The mass of the proton and of the neutron is 1 u each, and the mass of the electron is 1/1836 u. The charge of the proton equals the charge of the electron in magnitude, but they are opposite in type. The nucleus is positively charged because it contains positive protons and neutral neutrons; the mass of the atom is concentrated in the nucleus because the mass of the electrons is neglected due to its smallness.',
    variants: [
      { type: 'table', mode: 'normal', level: 'medium', q: 'Put each card under the right particle.', cols: ['Proton', 'Neutron', 'Electron'], items: ['Its charge is +1', 'It has no charge (0)', 'Its charge is −1', 'Its mass is 1/1836 u', 'It revolves around the nucleus'], answer: [0, 1, 2, 2, 2] },
      { type: 'mc', mode: 'timed', seconds: 12, level: 'easy', q: 'What is the electric charge of the neutron?', options: ['0 (no charge)', '+1', '−1'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Which subatomic component has the smallest mass?', options: ['The electron', 'The proton', 'The neutron', 'The nucleon'], answer: 0 },
      { type: 'multi', mode: 'normal', level: 'medium', q: 'Which subatomic particles have a mass of 1 u? Choose all the correct answers.', options: ['The proton', 'The neutron', 'The electron'], answer: [0, 1] },
      { type: 'fix', mode: 'normal', level: 'medium', q: 'The charge of the proton equals the charge of the electron in magnitude, but they are similar in type.', wrong: 'similar', answer: 'opposite' },
      { type: 'build', style: 'why', mode: 'normal', level: 'hard', q: 'The nucleus of the atom is positively charged.', parts: ['Because it contains positive protons', 'and neutrons that have no charge'], extra: ['and negative electrons', 'and positive neutrons'] },
      { type: 'build', style: 'why', mode: 'normal', level: 'hard', q: 'The mass of the atom is concentrated in the nucleus.', parts: ['Because the mass of the electrons', 'is neglected due to its smallness', 'compared to the protons or the neutrons'], extra: ['is very large', 'compared to the size of the atom'] }
    ] },
  { id: 'A5', lesson: 1, concept: 'The energy levels',
    explain: 'Electrons revolve around the nucleus at different energy levels according to their energy. There are 7 main energy levels, expressed by the letters K, L, M, N…, and the number of each level is represented by n. The number of electrons needed to saturate each of the first four levels is 2n²: K 2, L 8, M 18 and N 32. The energy of the electron increases as it moves farther from the nucleus.',
    variants: [
      { type: 'tap', diagram: 'energyLevels', mode: 'normal', level: 'easy', q: 'Tap the energy level that is saturated with 2 electrons only.', answer: 'K' },
      { type: 'tap', diagram: 'energyLevels', mode: 'normal', level: 'medium', q: 'Tap the energy level that needs 18 electrons to be saturated.', answer: 'M' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'How many electrons are needed to saturate the second energy level, L (n = 2)?', options: ['8', '2', '18', '32'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'The number of electrons needed to saturate one of the first four energy levels is found from the relationship ___, where n is the number of the level.', options: ['2n²', 'n + 2', '8n'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What happens to the energy of the electron when it moves farther from the nucleus?', options: ['It increases', 'It decreases', 'It does not change'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 12, level: 'easy', q: 'There are ___ main energy levels.', options: ['7', '4', '18'], answer: 0 },
      { type: 'tap', diagram: 'energyLevels', mode: 'normal', level: 'medium', q: 'Of these four levels, tap the one where the electrons have the highest energy.', answer: 'N' }
    ] },
  { id: 'A6', lesson: 1, concept: 'How electrons fill the energy levels',
    explain: 'The first energy level is filled with electrons first, and then the higher energy levels are filled one after the other. The outermost energy level of any atom does not contain more than 8 electrons. For example: 8 electrons are distributed 2, 6; 12 electrons 2, 8, 2; and 19 electrons 2, 8, 8, 1.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'An atom has 12 electrons. How are they distributed in its energy levels?', options: ['2, 8, 2', '2, 10', '8, 4', '2, 2, 8'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'hard', q: 'An atom has 19 electrons. How are they distributed in its energy levels?', options: ['2, 8, 8, 1', '2, 8, 9', '2, 17', '8, 8, 3'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 12, level: 'easy', q: 'The outermost energy level of any atom does not contain more than 8 electrons.', answer: 0 },
      { type: 'mc', style: 'story', mode: 'normal', level: 'hard', q: 'The nucleus of a potassium atom contains 19 protons. In which energy level is the electron with the highest energy?', options: ['The fourth energy level (N)', 'The third energy level (M)', 'The second energy level (L)', 'The first energy level (K)'], answer: 0 },
      { type: 'order', mode: 'normal', level: 'medium', q: 'Put the energy levels in the order in which they are filled with electrons.', items: ['M', 'K', 'N', 'L'], answer: [1, 3, 0, 2] },
      { type: 'fix', mode: 'normal', level: 'medium', q: 'The second energy level is filled with electrons first.', wrong: 'second', answer: 'first' }
    ] },
  { id: 'A7', lesson: 1, concept: 'Symbols of the elements',
    explain: 'Scientists agreed to represent the elements by symbols. The symbol may be one capital letter, or two letters: the first capital and the second small. The symbol usually represents the element’s name in Latin: when the English and Latin names differ, the symbol is taken from the Latin name (Na from Natrium, K from Kalium, Cu from Cuprum, Fe from Ferrum).',
    variants: [
      { type: 'match', mode: 'normal', level: 'easy', q: 'Match each element to its symbol.', left: ['Sodium', 'Potassium', 'Copper', 'Iron'], right: ['Na', 'K', 'Cu', 'Fe'], answer: [0, 1, 2, 3] },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Why is the symbol of sodium Na?', options: ['It is taken from its Latin name, Natrium', 'It is taken from its English name', 'Because sodium is a gas'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Which of these is written the right way as the symbol of chlorine?', options: ['Cl', 'CL', 'cl', 'cL'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'The symbol of an element usually represents its name in the ___ language.', options: ['Latin', 'English', 'Arabic'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 10, level: 'easy', q: 'The symbol of iron is Fe, from its Latin name Ferrum.', answer: 0 },
      { type: 'build', style: 'why', mode: 'normal', level: 'hard', q: 'The symbol of potassium is K.', parts: ['Because its symbol is taken', 'from its Latin name, Kalium'], extra: ['from its English name, Potassium', 'from its color'] }
    ] },
  { id: 'A8', lesson: 1, concept: 'The fertilizer NPK',
    explain: 'Fertilizers are chemical compounds used to improve the agricultural crops. The fertilizer NPK contains three compounds with the elements nitrogen (N), necessary for the greening of the plant leaves; phosphorus (P), necessary for developing strong roots; and potassium (K), necessary for the healthy growth of the plant.',
    variants: [
      { type: 'match', mode: 'normal', level: 'medium', q: 'Match each element of the fertilizer NPK to what the plant needs it for.', left: ['Nitrogen (N)', 'Phosphorus (P)', 'Potassium (K)'], right: ['The greening of the plant leaves', 'Developing strong roots', 'The healthy growth of the plant'], answer: [0, 1, 2] },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Which element of the fertilizer NPK is necessary for developing strong roots?', options: ['Phosphorus (P)', 'Nitrogen (N)', 'Potassium (K)'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'Fertilizers are chemical ___ used to improve the agricultural crops.', options: ['compounds', 'elements', 'atoms'], answer: 0 }
    ] },
  { id: 'A9', lesson: 1, concept: 'Atomic number and mass number',
    explain: 'The number of positive protons equals the number of negative electrons in any atom, so the atom is electrically neutral. The number of protons is the atomic number (Z), written at the lower left of the element symbol. The sum of the protons and the neutrons (the number of nucleons) is the mass number (A), written at the upper left. The difference A − Z equals the number of neutrons in the nucleus.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'An atom has 11 protons and 12 neutrons. What is its mass number?', options: ['23', '11', '12', '1'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'An aluminium atom has the atomic number 13 and the mass number 27. How many neutrons are in its nucleus?', options: ['14', '13', '27', '40'], answer: 0 },
      { type: 'term', mode: 'normal', level: 'medium', q: 'The number of protons in the nucleus of an atom.', answer: 'Atomic number' },
      { type: 'term', mode: 'normal', level: 'medium', q: 'The sum of the numbers of protons and neutrons in the nucleus of an atom.', answer: 'Mass number' },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'The atomic number Z is written at the ___ side of the element symbol.', options: ['lower left', 'upper left', 'lower right'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Why is the atom electrically neutral?', options: ['The number of protons equals the number of electrons', 'The atom has no electrons', 'The number of neutrons equals the number of protons'], answer: 0 },
      { type: 'fix', mode: 'normal', level: 'hard', q: 'The mass number minus the atomic number equals the number of electrons in the nucleus.', wrong: 'electrons', answer: 'neutrons' }
    ] },
  { id: 'A10', lesson: 1, concept: 'Isotopes',
    explain: 'Atoms of the same element may exist in different forms that have the same atomic number but differ in mass number, because of the difference in the number of neutrons in their nuclei. These forms are the isotopes of the element. Hydrogen has three isotopes: protium (mass number 1, no neutrons), deuterium (2) and tritium (3).',
    variants: [
      { type: 'term', mode: 'normal', level: 'medium', q: 'Forms of the atoms of the same element that have the same atomic number but different mass numbers.', answer: 'Isotopes' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Which isotope of hydrogen has no neutrons in its nucleus?', options: ['Protium', 'Deuterium', 'Tritium'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'hard', q: 'Which two atoms are isotopes of the same element?', options: ['16 protons + 20 neutrons, and 16 protons + 18 neutrons', '20 protons + 20 neutrons, and 16 protons + 20 neutrons', '7 protons + 8 neutrons, and 8 protons + 9 neutrons'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 12, level: 'medium', q: 'The isotopes of an element differ in the number of protons in their nuclei.', answer: 1, explain: 'Isotopes have the same atomic number (the same number of protons); they differ in the number of neutrons.' },
      { type: 'build', style: 'why', mode: 'normal', level: 'hard', q: 'The isotopes of an element have different mass numbers.', parts: ['Because they differ', 'in the number of neutrons', 'in their nuclei'], extra: ['in the number of protons', 'in their colors'] },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Tritium has the mass number 3 and the atomic number 1. How many neutrons are in its nucleus?', options: ['2', '1', '3', '0'], answer: 0 }
    ] },
  { id: 'A11', lesson: 1, boss: true, concept: 'Reading an atom',
    explain: 'In any atom: the number of protons (the atomic number Z) equals the number of electrons; the number of neutrons is A − Z; the electrons fill the level K (2), then L (8), then the next level, and the outermost level holds no more than 8 electrons.',
    variants: [
      { type: 'mc', style: 'story', mode: 'boss', level: 'hard', q: 'The electrons of an atom of element X are in 3 energy levels, and its outermost level has 3 electrons. Its nucleus contains 14 neutrons. What is its mass number?', options: ['27', '13', '14', '3'], answer: 0 },
      { type: 'mc', style: 'story', mode: 'boss', level: 'hard', q: 'The nucleus of an atom of element X contains 20 neutral particles and 39 nucleons. How many negatively charged particles are in this atom?', options: ['19', '20', '39', '59'], answer: 0 },
      { type: 'match', mode: 'boss', level: 'hard', q: 'A sodium atom has 11 protons and 12 neutrons. Match.', left: ['Its number of electrons', 'Its mass number', 'Its electron distribution'], right: ['11', '23', '2, 8, 1'], answer: [0, 1, 2] },
      { type: 'multi', mode: 'boss', level: 'hard', q: 'A potassium atom has the atomic number 19 and the mass number 39. Choose all the correct statements.', options: ['It has 19 electrons', 'It has 20 neutrons', 'Its outermost energy level has 1 electron', 'It has 39 protons'], answer: [0, 1, 2] },
      { type: 'build', style: 'why', mode: 'boss', level: 'hard', q: 'The atom is electrically neutral.', parts: ['Because the number of positive protons', 'equals', 'the number of negative electrons'], extra: ['is bigger than', 'the number of neutrons'] }
    ] },

  /* ---------- Lesson 2 · The Periodic Table of Elements (pages 10-17) ---------- */
  { id: 'P1', lesson: 2, concept: 'Mendeleev’s table',
    explain: 'Mendeleev’s periodic table is considered the first periodic table for the classification of the elements: the elements were arranged in an ascending order according to their atomic masses. He discovered that their properties repeated periodically at the beginning of each new row.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'How were the elements arranged in Mendeleev’s periodic table?', options: ['In an ascending order according to their atomic masses', 'In an ascending order according to their atomic numbers', 'According to their colors'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Mendeleev discovered that the properties of the elements repeated ___ at the beginning of each new row.', options: ['periodically', 'randomly', 'only once'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 12, level: 'easy', q: 'Mendeleev’s periodic table is considered the first periodic table for the classification of the elements.', answer: 0 }
    ] },
  { id: 'P2', lesson: 2, concept: 'Moseley’s table and the modern table',
    explain: 'After Rutherford discovered the protons, Moseley discovered that the periodicity of the properties of the elements is related to their atomic numbers rather than their atomic masses. He arranged the elements in an ascending order according to their atomic numbers, so that each element’s atomic number exceeds the one before it in the same period by 1, and he added the noble (inert) gases. In the modern periodic table the elements are arranged according to their atomic numbers and the way the energy sublevels are filled with electrons.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'According to what did Moseley arrange the elements?', options: ['Their atomic numbers', 'Their atomic masses', 'Their colors'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Moseley added the ___ gases and other new elements that were discovered after Mendeleev formulated his table.', options: ['noble (inert)', 'poisonous', 'colored'], answer: 0 },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'In Moseley’s table, the atomic number of each element exceeds the atomic number of the element before it in the same period by 1.', answer: 0 },
      { type: 'match', mode: 'normal', level: 'hard', q: 'Match each table to how its elements are arranged.', left: ['Mendeleev’s table', 'Moseley’s table', 'The modern periodic table'], right: ['According to the atomic masses', 'According to the atomic numbers', 'According to the atomic numbers and the way the energy sublevels are filled with electrons'], answer: [0, 1, 2] }
    ] },
  { id: 'P3', lesson: 2, concept: 'The blocks of the modern periodic table',
    explain: 'The modern periodic table has 7 horizontal periods and 18 vertical groups, and contains 118 elements. The s-block (left) has only metals except hydrogen; the p-block (right) has nonmetals, metalloids, the noble gases and some other metals; the d-block (middle) starts in the fourth period and its elements are metals, most of them transition elements; the f-block (bottom) has only metals.',
    variants: [
      { type: 'tap', diagram: 'ptBlocks', mode: 'normal', level: 'medium', q: 'Tap the d-block. All its elements are metals, most of them transition elements.', answer: 'd' },
      { type: 'tap', diagram: 'ptBlocks', mode: 'normal', level: 'medium', q: 'Tap the s-block. All its elements are metals except hydrogen.', answer: 's' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'How many periods and groups does the modern periodic table have?', options: ['7 horizontal periods and 18 vertical groups', '18 horizontal periods and 7 vertical groups', '8 periods and 8 groups'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'easy', q: 'The modern periodic table contains ___ elements.', options: ['118', '18', '7'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'In which period does the d-block start?', options: ['The fourth period', 'The first period', 'The second period', 'The seventh period'], answer: 0 },
      { type: 'table', mode: 'normal', level: 'hard', q: 'Put each card under its block.', cols: ['s-block', 'p-block', 'd-block'], items: ['All metals except hydrogen', 'Nonmetals, metalloids and noble gases', 'Mostly transition elements', 'On the left of the table', 'On the right of the table', 'Starts in the fourth period'], answer: [0, 1, 2, 0, 1, 2] }
    ] },
  { id: 'P4', lesson: 2, concept: 'Groups and families of elements',
    explain: 'The s-block has two groups: 1A, the alkali metals, and 2A, the alkaline earth metals. The p-block has 6 groups: the last group (0) is the noble gases and the one before it (7A) is the halogens. Most elements are solid; the two liquid elements are mercury (Hg), a metal, and bromine (Br), a nonmetal. The metalloids are boron, silicon, germanium, arsenic, antimony and tellurium.',
    variants: [
      { type: 'tap', diagram: 'ptGroups', mode: 'normal', level: 'easy', q: 'Tap the group of the alkali metals.', answer: 'g1' },
      { type: 'tap', diagram: 'ptGroups', mode: 'normal', level: 'easy', q: 'Tap the group of the halogens.', answer: 'g7' },
      { type: 'tap', diagram: 'ptGroups', mode: 'timed', seconds: 15, level: 'easy', q: 'Tap the group of the noble gases.', answer: 'g0' },
      { type: 'match', mode: 'normal', level: 'medium', q: 'Match each group to its name.', left: ['Group 1A', 'Group 2A', 'Group 7A', 'Group 0'], right: ['Alkali metals', 'Alkaline earth metals', 'Halogens', 'Noble gases'], answer: [0, 1, 2, 3] },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which two elements exist in a liquid state?', options: ['Mercury (Hg) and bromine (Br)', 'Iron (Fe) and copper (Cu)', 'Oxygen (O) and nitrogen (N)'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 12, level: 'easy', q: 'Most of the elements exist in the ___ state.', options: ['solid', 'liquid', 'gaseous'], answer: 0 },
      { type: 'multi', mode: 'normal', level: 'medium', q: 'Which of these elements are metalloids? Choose all the correct answers.', options: ['Boron (B)', 'Silicon (Si)', 'Sodium (Na)', 'Chlorine (Cl)'], answer: [0, 1] }
    ] },
  { id: 'P5', lesson: 2, concept: 'The electron configuration gives the location',
    explain: 'The location of an element in the periodic table is determined by the number of occupied energy levels in its atom (the period number) and the number of electrons in its last energy level (the group number). The electron distribution of most metals ends with 1, 2 or 3 electrons, and that of most nonmetals ends with 5, 6 or 7 electrons. Metalloids cannot be identified by the number of electrons in their outermost energy levels.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'An atom has the electron distribution 2, 8, 7. Where is it in the periodic table?', options: ['Period 3, group 7A', 'Period 7, group 3A', 'Period 2, group 7A', 'Period 3, group 1A'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What does the number of occupied energy levels in an atom tell us?', options: ['Its period number', 'Its group number', 'Its mass number'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'The electron distribution of most metals ends with 1, 2 or 3 electrons, while that of most nonmetals ends with ___ electrons.', options: ['5, 6 or 7', '1 or 2', '8 or more'], answer: 0 },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'Metalloids can be identified by the number of electrons in their outermost energy level.', answer: 1, explain: 'Metalloids cannot be identified by the number of electrons in their outermost energy levels.' },
      { type: 'mc', mode: 'normal', level: 'hard', q: 'Element X is in period 2, group 5A. What is its electron distribution?', options: ['2, 5', '5, 2', '2, 8, 5', '2, 3'], answer: 0 },
      { type: 'build', style: 'why', mode: 'normal', level: 'hard', q: 'Sodium (2, 8, 1) is in the third period.', parts: ['Because its electrons occupy', 'three energy levels'], extra: ['one energy level', 'eight energy levels'] }
    ] },
  { id: 'P6', lesson: 2, concept: 'Valency and Lewis structure',
    explain: 'The electrons in the last energy level are called valence electrons. In the Lewis structure they are dots around the symbol, on the four sides one by one first, then in pairs. The valency comes from the number of unpaired electrons: Li monovalent, Be divalent, B trivalent, C tetravalent, N trivalent, O divalent, F monovalent, Ne zero. The valency of groups 1A to 4A equals the group number; the valency of groups 5A to 0 equals 8 minus the number of electrons in the last energy level.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Nitrogen has the electron distribution 2, 5. What is its valency?', options: ['Trivalent', 'Pentavalent', 'Divalent', 'Zero'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Oxygen has the electron distribution 2, 6. What is its valency?', options: ['Divalent', 'Hexavalent', 'Monovalent', 'Tetravalent'], answer: 0 },
      { type: 'term', mode: 'normal', level: 'medium', q: 'The electrons in the last energy level of an atom.', answer: 'Valence electrons' },
      { type: 'fill', mode: 'normal', level: 'hard', q: 'The valency of the elements of groups 5A to 0 equals ___ minus the number of electrons in the last energy level.', options: ['8', '2', '18'], answer: 0 },
      { type: 'tap', diagram: 'ptGroups', mode: 'normal', level: 'medium', q: 'Tap the group whose elements are tetravalent.', answer: 'g4' },
      { type: 'table', mode: 'normal', level: 'hard', q: 'Sort the elements by their valency.', cols: ['Monovalent', 'Divalent', 'Trivalent'], items: ['Lithium (2, 1)', 'Fluorine (2, 7)', 'Beryllium (2, 2)', 'Oxygen (2, 6)', 'Boron (2, 3)', 'Nitrogen (2, 5)'], answer: [0, 0, 1, 1, 2, 2] }
    ] },
  { id: 'P7', lesson: 2, concept: 'Properties change down a group',
    explain: 'Elements in the same group have similar chemical properties. The chemical activity increases with the atomic number in the alkali metals and the alkaline earth metals (the alkaline earth metals are less active than the alkali metals, which are highly active), while it decreases with the atomic number in the halogens. The atomic radii increase as the atomic number increases. The melting and boiling points of the alkali metals decrease, and those of the halogens increase, as the atomic number increases.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What happens to the atomic radii of the elements of the same group as the atomic number increases?', options: ['They increase', 'They decrease', 'They do not change'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which metal is more active: lithium (atomic number 3) or potassium (atomic number 19)?', options: ['Potassium', 'Lithium', 'They are equally active'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which of these halogens is the most active?', options: ['Chlorine (atomic number 17)', 'Bromine (atomic number 35)', 'Iodine (atomic number 53)'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'The melting and boiling points of the alkali metals ___ as the atomic number increases.', options: ['decrease', 'increase'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Bromine melts at −7°C and boils at 59°C. What is its physical state at room temperature (25°C)?', options: ['Liquid', 'Solid', 'Gas'], answer: 0 },
      { type: 'table', mode: 'normal', level: 'hard', q: 'As the atomic number increases in the same group, what happens to each one?', cols: ['Increases', 'Decreases'], items: ['The atomic radius', 'The activity of the alkali metals', 'The activity of the halogens', 'The melting point of the alkali metals', 'The melting point of the halogens'], answer: [0, 0, 1, 1, 0] }
    ] },
  { id: 'P8', lesson: 2, boss: true, concept: 'Finding an element in the periodic table',
    explain: 'The number of occupied energy levels gives the period, and the number of electrons in the last level gives the group (A groups). Elements of the same group have similar properties. In the alkali metals the activity increases and the melting point decreases with the atomic number; in the halogens the activity decreases and the melting point increases.',
    variants: [
      { type: 'mc', style: 'story', mode: 'boss', level: 'hard', q: 'Element X is in period 2 of the periodic table, and the nucleus of element Y has 5 more protons than the nucleus of X. Which of these is certainly correct?', options: ['The K level holds the same number of electrons in X and in Y', 'X and Y are in the same period', 'Y has exactly 5 more electrons in its last energy level than X', 'Y has exactly 5 more nucleons than X'], answer: 0 },
      { type: 'table', mode: 'boss', level: 'hard', q: 'Compare between the alkali metals (1A) and the halogens (7A).', cols: ['Alkali metals', 'Halogens'], items: ['Their atoms end with 1 electron', 'Their atoms end with 7 electrons', 'The activity increases with the atomic number', 'The activity decreases with the atomic number', 'The melting point decreases with the atomic number', 'The melting point increases with the atomic number'], answer: [0, 1, 0, 1, 0, 1] },
      { type: 'mc', mode: 'boss', level: 'hard', q: 'An element has the electron distribution 2, 8, 2. Which statement is correct?', options: ['It is in period 3, group 2A: an alkaline earth metal', 'It is in period 2, group 3A: a nonmetal', 'It is in period 2, group 0: a noble gas', 'It is in period 3, group 2A: a halogen'], answer: 0 },
      { type: 'multi', mode: 'boss', level: 'hard', q: 'Element Y has the electron distribution 2, 8, 7. Choose all the correct statements.', options: ['It is in the third period', 'It is in group 7A', 'It is monovalent', 'It is a metal'], answer: [0, 1, 2] },
      { type: 'build', style: 'why', mode: 'boss', level: 'hard', q: 'Lithium and potassium have similar chemical properties.', parts: ['Because they are in the same group', 'and their atoms have 1 electron', 'in the last energy level'], extra: ['in the same period', 'and 7 electrons'] }
    ] },

  /* ---------- Lesson 3 · Matter and Its Properties (pages 18-25) ---------- */
  { id: 'M1', lesson: 3, concept: 'Mixtures',
    explain: 'Mixtures are substances composed of two or more materials that are not chemically combined; their components can be separated by physical methods, such as filtration, magnetic separation, evaporation and condensation. Table salt in water is a homogeneous mixture (its components cannot be seen by the naked eye), separated by evaporation and condensation. Sand in water is a heterogeneous mixture, separated by filtration.',
    variants: [
      { type: 'tap', diagram: 'mixBeakers', mode: 'normal', level: 'easy', q: 'Tap the heterogeneous mixture.', answer: 'hetero' },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'How can the components of a mixture of sand in water be separated?', options: ['By filtration', 'By a chemical method', 'They cannot be separated'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'How can the components of a mixture of table salt in water be separated?', options: ['By evaporation and condensation', 'By filtration', 'By a magnet'], answer: 0 },
      { type: 'term', mode: 'normal', level: 'medium', q: 'Substances composed of two or more materials that are not chemically combined.', answer: 'Mixtures' },
      { type: 'tf', mode: 'normal', level: 'medium', q: 'Stirring both table salt and sand in water gives a homogeneous mixture.', answer: 1, explain: 'It gives a heterogeneous mixture: the sand can be distinguished by the naked eye.' },
      { type: 'table', mode: 'normal', level: 'hard', q: 'Compare between the two mixtures.', cols: ['Homogeneous mixture', 'Heterogeneous mixture'], items: ['Table salt in water', 'Sand in water', 'Its components cannot be distinguished by the naked eye', 'Its components can be distinguished by the naked eye', 'Separated by evaporation and condensation', 'Separated by filtration'], answer: [0, 1, 0, 1, 0, 1] }
    ] },
  { id: 'M2', lesson: 3, concept: 'Pure substances: compounds and elements',
    explain: 'Pure substances can be compounds or elements. Compounds are formed by the chemical combination of two or more elements in fixed mass ratios, and their components can be separated by chemical methods: red mercury oxide is separated into oxygen and mercury by heating. An element, such as mercury or oxygen, is the simplest pure form of matter and cannot be dissociated into simpler forms by physical or chemical methods. The Hoffman voltameter decomposes water into hydrogen and oxygen.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'How can red mercury oxide be separated into its components?', options: ['By heating, into oxygen and mercury', 'By filtration', 'By a magnet'], answer: 0 },
      { type: 'term', mode: 'normal', level: 'medium', q: 'The simplest pure form of matter: it cannot be dissociated into simpler forms by physical or chemical methods.', answer: 'Element' },
      { type: 'build', style: 'why', mode: 'normal', level: 'hard', q: 'Water is classified as a compound.', parts: ['Because it is formed by the chemical combination', 'of two elements, hydrogen and oxygen,', 'and it can be separated by chemical methods'], extra: ['of one element only,', 'and it cannot be separated'] },
      { type: 'build', style: 'why', mode: 'normal', level: 'hard', q: 'Hydrogen is classified as an element.', parts: ['Because it cannot be dissociated', 'into simpler forms', 'by physical or chemical methods'], extra: ['into two gases', 'by heating only'] },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'The Hoffman voltameter is used for the electrolysis of water acidified with sulphuric acid. Which gases are obtained?', options: ['Hydrogen and oxygen', 'Nitrogen and oxygen', 'Carbon dioxide and hydrogen'], answer: 0 },
      { type: 'fix', mode: 'normal', level: 'medium', q: 'Compounds are formed by the chemical combination of two or more elements in changing mass ratios.', wrong: 'changing', answer: 'fixed' },
      { type: 'tap', diagram: 'particleBoxes', mode: 'normal', level: 'medium', q: 'Tap the box that shows the molecules of an element.', answer: 'element' },
      { type: 'tap', diagram: 'particleBoxes', mode: 'normal', level: 'medium', q: 'Tap the box that shows a mixture.', answer: 'mixture' }
    ] },
  { id: 'M3', lesson: 3, concept: 'Molecules of elements and compounds',
    explain: 'Atoms of elements may form molecules of elements: monatomic (carbon, C), diatomic (oxygen, O₂) or polyatomic (ozone, O₃); or molecules of compounds: inorganic (nitric acid, HNO₃) or organic (methane, CH₄). The molecular formula is a symbolic formula that expresses the type and number of atoms in the molecule. The molecules of some organic compounds, like plastic polymers and hemoglobin in blood, can have several thousands of atoms. Organic compounds (carbon compounds) have carbon bonded mainly to hydrogen atoms, and it may also bond to oxygen and nitrogen.',
    variants: [
      { type: 'match', mode: 'normal', level: 'medium', q: 'Match each molecule to its kind.', left: ['C (carbon molecule)', 'O₂ (oxygen molecule)', 'O₃ (ozone molecule)'], right: ['Monatomic', 'Diatomic', 'Polyatomic'], answer: [0, 1, 2] },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'What is the difference between the oxygen molecule O₂ and the ozone molecule O₃?', options: ['The oxygen molecule has 2 oxygen atoms and the ozone molecule has 3', 'They are made of different elements', 'Ozone is a compound'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Which of these molecules is an organic compound?', options: ['Methane CH₄', 'Nitric acid HNO₃', 'Oxygen O₂', 'Ozone O₃'], answer: 0 },
      { type: 'term', mode: 'normal', level: 'hard', q: 'A symbolic formula that expresses the type and number of atoms of the elements that form the molecule.', answer: 'Molecular formula' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'How many atoms are in one molecule of nitric acid HNO₃?', options: ['5', '3', '4', '1'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Organic compounds, also known as ___ compounds, have carbon bonded mainly to hydrogen atoms.', options: ['carbon', 'iron', 'sodium'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 15, level: 'medium', q: 'The number of atoms in a single molecule of some organic compounds, as in plastic polymers, can reach several thousands.', answer: 0 }
    ] },
  { id: 'M4', lesson: 3, concept: 'The Egyptian blue dye',
    explain: 'The Egyptian blue dye (CaCuSi₄O₁₀) is a chemical compound. Its molecule is composed of 4 elements: calcium (1 atom), copper (1 atom), silicon (4 atoms) and oxygen (10 atoms). The Ancient Egyptians used it for coloring papyri and statues, and it is still used to color the facades of houses in Nubian villages.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'How many elements form the molecule of the Egyptian blue dye CaCuSi₄O₁₀?', options: ['4', '16', '10', '2'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'hard', q: 'How many atoms are in one molecule of the Egyptian blue dye CaCuSi₄O₁₀?', options: ['16', '4', '10', '14'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What did the Ancient Egyptians use the Egyptian blue dye for?', options: ['Coloring papyri and statues', 'Improving the crops', 'Filling balloons'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 12, level: 'easy', q: 'The Egyptian blue dye is a chemical compound.', answer: 0 }
    ] },
  { id: 'M5', lesson: 3, concept: 'Physical and chemical properties',
    explain: 'Physical properties of substances can be observed, and some of them measured, while chemical properties only appear when a chemical reaction occurs, leading to a change in the form and the composition of the substance. Viscosity, density and the effect of heat are physical properties; the color of litmus paper in different substances and the color of a precipitate are chemical properties. Melting of ice is a physical change.',
    variants: [
      { type: 'table', mode: 'normal', level: 'hard', q: 'Sort the properties.', cols: ['Physical property', 'Chemical property'], items: ['The viscosity of water and honey', 'The density of cork and iron', 'The color of litmus paper in lemon juice', 'The color of the precipitate formed with a reagent', 'The melting point', 'Producing gas bubbles with vinegar'], answer: [0, 0, 1, 1, 0, 1] },
      { type: 'tf', mode: 'timed', seconds: 12, level: 'easy', q: 'The melting of ice is a chemical change.', answer: 1, explain: 'The melting of ice is a physical change: no new substance is formed.' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'All the following are physical properties of a piece of calcium carbonate, except that it…', options: ['produces gas bubbles with vinegar', 'is solid', 'does not dissolve in water', 'is white in color'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Chemical properties only appear when a chemical ___ occurs.', options: ['reaction', 'filtration', 'measurement'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Water in some rivers is covered with ice in winter. What does this tell us about the density of ice?', options: ['Ice is less dense than water', 'Ice is denser than water', 'Ice and water have the same density'], answer: 0 }
    ] },
  { id: 'M6', lesson: 3, concept: 'Uses of substances based on their properties',
    explain: 'Helium (an inert gas, less dense than air and non-flammable) is used for filling balloons. Nitrogen (not affected by temperature changes and does not react with rubber) is used for filling car tires. Stainless steel (iron with added elements, resistant to rusting) is used for cooking utensils. The aluminum-titanium alloy (lighter than aluminum, keeps its strength at high temperatures) is used for military aircraft frames. Aerogel (99.8% air, the lightest known solid, an excellent insulator) is used for jackets of researchers in Antarctica.',
    variants: [
      { type: 'match', mode: 'normal', level: 'medium', q: 'Match each substance to its use.', left: ['Helium', 'Nitrogen', 'Stainless steel alloy', 'Aluminum-titanium alloy'], right: ['Filling balloons', 'Filling car tires instead of air', 'Manufacturing cooking utensils', 'Building military aircraft frames'], answer: [0, 1, 2, 3] },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Why is helium used for filling balloons?', options: ['It is an inert gas, less dense than air and non-flammable', 'It is denser than air', 'It reacts with rubber'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Why is aerogel used in making the jackets of researchers in Antarctica?', options: ['It has excellent insulating properties', 'It conducts heat well', 'It is very heavy'], answer: 0 },
      { type: 'fill', mode: 'timed', seconds: 15, level: 'medium', q: 'About ___ of the composition of aerogel is air.', options: ['99.8%', '50%', '10%'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which material is best for making a water hose?', options: ['A flexible material that does not conduct electricity', 'A shiny material that conducts electricity', 'A hard material that conducts electricity'], answer: 0 },
      { type: 'build', style: 'why', mode: 'normal', level: 'hard', q: 'Stainless steel is used in manufacturing cooking utensils.', parts: ['Because it is made from iron with added elements', 'and it is resistant to rusting'], extra: ['and it rusts easily', 'and it is a gas'] }
    ] },
  { id: 'M7', lesson: 3, boss: true, concept: 'Mixture, compound or element?',
    explain: 'The components of a mixture are not chemically combined and are separated by physical methods. A compound is formed by the chemical combination of two or more elements in fixed mass ratios and is separated by chemical methods. An element cannot be dissociated into simpler forms.',
    variants: [
      { type: 'mc', style: 'story', mode: 'boss', level: 'hard', q: 'Heating a white powder in a test tube gives nitrogen dioxide gas and oxygen gas, and a red substance stays in the tube. Heating the red substance alone gives mercury and oxygen. Which elements form the white powder?', options: ['Mercury, nitrogen and oxygen', 'Mercury and oxygen only', 'Nitrogen and oxygen only', 'Hydrogen and oxygen'], answer: 0 },
      { type: 'table', mode: 'boss', level: 'hard', q: 'Classify the substances into elements and compounds.', cols: ['Element', 'Compound'], items: ['Al', 'CO₂', 'N₂', 'H₂SO₄', 'Cu', 'NH₃', 'O₃', 'SiO₂'], answer: [0, 1, 0, 1, 0, 1, 0, 1] },
      { type: 'multi', mode: 'boss', level: 'hard', q: 'Choose all the correct statements.', options: ['The components of a mixture can be separated by physical methods', 'A compound can be separated into its elements by chemical methods', 'An element can be separated into simpler forms by filtration', 'The elements in a compound are not chemically combined'], answer: [0, 1] },
      { type: 'match', mode: 'boss', level: 'hard', q: 'Match each molecule to the number of its elements and atoms.', left: ['NO (nitric oxide)', 'MgCO₃ (magnesium carbonate)', 'C₂H₅OH (ethanol)'], right: ['2 elements, 2 atoms', '3 elements, 5 atoms', '3 elements, 9 atoms'], answer: [0, 1, 2] },
      { type: 'build', style: 'why', mode: 'boss', level: 'hard', q: 'Sand in water is a heterogeneous mixture.', parts: ['Because its components are not chemically combined', 'and can be distinguished', 'by the naked eye'], extra: ['are chemically combined', 'cannot be seen'] }
    ] },

  /* ---------- Lesson 4 · Chemical Bonds (pages 26-31) ---------- */
  { id: 'B1', lesson: 4, concept: 'Why do compounds differ?',
    explain: 'Sodium chloride (NaCl) is a solid that does not react with caustic soda solution, while hydrogen chloride (HCl) is a gas that reacts with it, although both contain chlorine. The difference in how atoms are bonded leads to differences in the physical and chemical properties of the compounds. The types of chemical bonding include ionic bonding and covalent bonding.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Sodium chloride is a solid and hydrogen chloride is a gas, although both contain chlorine. Why do they differ?', options: ['Their atoms are bonded in different ways', 'They contain different kinds of chlorine', 'Chlorine is a metal'], answer: 0 },
      { type: 'multi', mode: 'normal', level: 'easy', q: 'Which of these are types of chemical bonding? Choose all the correct answers.', options: ['Ionic bonding', 'Covalent bonding', 'Magnetic bonding'], answer: [0, 1] },
      { type: 'tf', mode: 'timed', seconds: 15, level: 'medium', q: 'Hydrogen chloride reacts with caustic soda solution, while sodium chloride does not react with it.', answer: 0 }
    ] },
  { id: 'B2', lesson: 4, concept: 'Positive and negative ions',
    explain: 'Atoms become positive or negative ions by losing or gaining electrons, to reach the stable electron configuration of the nearest noble gas in atomic number. A sodium atom (11 protons, 11 electrons) loses one electron and becomes a sodium ion Na⁺ (11 protons, 10 electrons), like neon. A chlorine atom (17 protons, 17 electrons) gains one electron and becomes a chloride ion Cl⁻ (17 protons, 18 electrons), like argon. A positive ion is a cation; a negative ion is an anion.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'easy', q: 'What happens to a sodium atom when it becomes a sodium ion?', options: ['It loses one electron', 'It gains one electron', 'It loses one proton'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'How many electrons does a chloride ion Cl⁻ have? (Chlorine has 17 protons.)', options: ['18', '17', '16', '7'], answer: 0 },
      { type: 'term', mode: 'normal', level: 'medium', q: 'A positive ion, formed when an atom loses electrons.', answer: 'Cation' },
      { type: 'term', mode: 'normal', level: 'medium', q: 'A negative ion, formed when an atom gains electrons.', answer: 'Anion' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'The sodium ion Na⁺ has the same electron configuration as which noble gas?', options: ['Neon', 'Argon', 'Helium'], answer: 0 },
      { type: 'table', mode: 'normal', level: 'hard', q: 'Compare between the two ions.', cols: ['Sodium ion Na⁺', 'Chloride ion Cl⁻'], items: ['Formed by losing one electron', 'Formed by gaining one electron', 'Has 10 electrons', 'Has 18 electrons', 'Its charge is +1', 'Its charge is −1'], answer: [0, 1, 0, 1, 0, 1] }
    ] },
  { id: 'B3', lesson: 4, concept: 'The ionic bond',
    explain: 'When most metals react with nonmetals, the metal atom tends to lose its valence electrons, forming a cation, and the nonmetal atom gains one or more electrons according to its valency, forming an anion. The electrostatic attraction between the cation and the anion is called an ionic bond, and the compound is an ionic compound. It is electrically neutral because the numbers of positive and negative charges are equal.',
    variants: [
      { type: 'term', mode: 'normal', level: 'medium', q: 'The electrostatic attraction between a cation and an anion.', answer: 'Ionic bond' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Why is an ionic compound electrically neutral?', options: ['The numbers of positive and negative charges in it are equal', 'It has no electrons', 'It has no protons'], answer: 0 },
      { type: 'tap', diagram: 'bondTypes', mode: 'normal', level: 'easy', q: 'Tap the ionic bond.', answer: 'ionic' },
      { type: 'mc', mode: 'normal', level: 'hard', q: 'Metal A is an alkaline earth metal and nonmetal B is in group 6A. What is the molecular formula of the ionic compound formed between them?', options: ['AB', 'A₂B', 'AB₂', 'A₂B₃'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'hard', q: 'An alkali metal A bonds with element B from group 6A. What is the molecular formula of the compound formed?', options: ['A₂B', 'AB', 'AB₂', 'A₂B₂'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'When most metals react with nonmetals, the metal atom tends to ___ its valence electrons.', options: ['lose', 'gain', 'share'], answer: 0 }
    ] },
  { id: 'B4', lesson: 4, concept: 'The covalent bond',
    explain: 'A hydrogen atom needs one electron to be like helium, and a chlorine atom needs one electron to be like argon: each atom shares a single valence electron, and together they form a single covalent bond (H − Cl). Covalent bonds are formed between two atoms of the same nonmetal element or between atoms of two different nonmetal elements. A covalent bond may be single (−), double (=) or triple (≡): H − H, O = O, N ≡ N.',
    variants: [
      { type: 'tap', diagram: 'bondTypes', mode: 'normal', level: 'medium', q: 'Tap the molecule that has a triple covalent bond.', answer: 'triple' },
      { type: 'tap', diagram: 'bondTypes', mode: 'normal', level: 'medium', q: 'Tap the molecule that has a double covalent bond.', answer: 'double' },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'How is the covalent bond formed between hydrogen and chlorine?', options: ['Each atom shares a single valence electron', 'Hydrogen gives an electron to chlorine', 'Chlorine loses an electron'], answer: 0 },
      { type: 'match', mode: 'normal', level: 'medium', q: 'Match each molecule to its bond.', left: ['Hydrogen molecule (H − H)', 'Oxygen molecule (O = O)', 'Nitrogen molecule (N ≡ N)'], right: ['Single covalent bond', 'Double covalent bond', 'Triple covalent bond'], answer: [0, 1, 2] },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'Covalent bonds are formed between two atoms of the same ___ element, or between atoms of two different ones.', options: ['nonmetal', 'metal', 'noble gas'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'hard', q: 'An atom of element X binds to two hydrogen atoms by sharing electrons (H : X : H), and X has 6 electrons in its last energy level. What is the type of bonding, and what is the group of X?', options: ['Covalent / group 6A', 'Ionic / group 6A', 'Covalent / group 2A', 'Ionic / group 2A'], answer: 0 }
    ] },
  { id: 'B5', lesson: 4, concept: 'Properties of ionic and covalent compounds',
    explain: 'Most ionic compounds dissolve in water; their aqueous solutions and their moltens conduct electricity, and their melting and boiling points are high. Most covalent compounds do not dissolve in water, mostly do not conduct electricity, and have low melting and boiling points.',
    variants: [
      { type: 'table', mode: 'normal', level: 'hard', q: 'Compare between most ionic compounds and most covalent compounds.', cols: ['Ionic compounds', 'Covalent compounds'], items: ['Dissolve in water', 'Do not dissolve in water', 'Their solutions and moltens conduct electricity', 'Mostly do not conduct electricity', 'High melting and boiling points', 'Low melting and boiling points'], answer: [0, 1, 0, 1, 0, 1] },
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which of these describes most ionic compounds?', options: ['They dissolve in water and have high melting and boiling points', 'They do not dissolve in water', 'They have low melting and boiling points'], answer: 0 },
      { type: 'tf', mode: 'timed', seconds: 12, level: 'easy', q: 'Most covalent compounds have low melting and boiling points.', answer: 0 }
    ] },
  { id: 'B6', lesson: 4, concept: 'Carbon and methane',
    explain: 'The outermost energy level of a carbon atom contains 4 single electrons. Carbon atoms can bind to each other in organic compounds as straight chains, branched chains or cyclic structures (rings). Methane (CH₄) is the simplest organic molecule: a carbon atom binds to four hydrogen atoms through single covalent bonds.',
    variants: [
      { type: 'tap', diagram: 'carbonShapes', mode: 'normal', level: 'easy', q: 'Tap the cyclic structure (ring).', answer: 'cyclic' },
      { type: 'tap', diagram: 'carbonShapes', mode: 'normal', level: 'medium', q: 'Tap the branched chain.', answer: 'branched' },
      { type: 'mc', mode: 'timed', seconds: 15, level: 'easy', q: 'How many single electrons are in the outermost energy level of a carbon atom?', options: ['4', '2', '6', '8'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Which is the simplest organic molecule?', options: ['Methane CH₄', 'Water H₂O', 'Sodium chloride NaCl'], answer: 0 },
      { type: 'fill', mode: 'normal', level: 'medium', q: 'In methane, a carbon atom binds to four hydrogen atoms through ___ covalent bonds.', options: ['single', 'double', 'triple'], answer: 0 },
      { type: 'mc', mode: 'normal', level: 'easy', q: 'Water (H₂O) and methane (CH₄) are well known compounds. Which one is an organic compound?', options: ['Methane', 'Water', 'Both of them'], answer: 0 }
    ] },
  { id: 'B7', lesson: 4, boss: true, concept: 'Ionic or covalent?',
    explain: 'An ionic bond forms between a metal, which loses electrons, and a nonmetal, which gains them; the ions have the electron configuration of the nearest noble gas. A covalent bond forms between nonmetal atoms that share valence electrons.',
    variants: [
      { type: 'table', mode: 'boss', level: 'hard', q: 'Ionic bonding or covalent bonding?', cols: ['Ionic bonding', 'Covalent bonding'], items: ['Sodium chloride NaCl', 'Hydrogen chloride HCl', 'Water H₂O', 'Oxygen molecule O₂', 'Between a metal and a nonmetal', 'Between two nonmetals'], answer: [0, 1, 1, 1, 0, 1] },
      { type: 'mc', style: 'story', mode: 'boss', level: 'hard', q: 'The electron configurations of four elements are: A (2, 2), B (2, 8, 8), C (2, 8, 1) and D (2, 8, 7). Which element forms a diatomic molecule?', options: ['D', 'A', 'B', 'C'], answer: 0 },
      { type: 'mc', style: 'story', mode: 'boss', level: 'hard', q: 'The electron configurations of four elements are: A (2, 2), B (2, 8, 8), C (2, 8, 1) and D (2, 8, 7). Which two elements form an ionic compound with the formula XY (one atom of each)?', options: ['C and D', 'A and D', 'B and D', 'A and C'], answer: 0 },
      { type: 'multi', mode: 'boss', level: 'hard', q: 'Choose all the correct statements about the ionic bonding in sodium chloride.', options: ['The sodium atom loses one electron', 'The chlorine atom gains one electron', 'Both ions have the electron configuration of the nearest noble gas', 'The two atoms share a pair of electrons'], answer: [0, 1, 2] },
      { type: 'build', style: 'why', mode: 'boss', level: 'hard', q: 'Chlorine bonds to sodium with an ionic bond, but to hydrogen with a covalent bond.', parts: ['Because sodium is a metal that loses its electron,', 'while hydrogen is a nonmetal', 'that shares its electron with chlorine'], extra: ['while hydrogen is a metal', 'that gains a proton'] }
    ] },

  /* ---------- Bonus: the scientists' profiles (pages 4 and 11). Enrichment, not in the Quest's stars, not in Daily 5 or the Exam Hall ---------- */
  { id: 'X1', lesson: 1, bonus: true, concept: 'Ernest Rutherford',
    explain: 'Rutherford was a New Zealand physicist, born in 1871. He won the Nobel Prize in Chemistry in 1908, and New Zealand honored him by placing his image on its money, in recognition of his efforts.',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Rutherford won the Nobel Prize in 1908. In which field?', options: ['Chemistry', 'Medicine', 'Literature'], answer: 0 },
      { type: 'tf', mode: 'normal', level: 'easy', q: 'Rutherford was a New Zealand physicist.', answer: 0 }
    ] },
  { id: 'X2', lesson: 2, bonus: true, concept: 'Dmitri Mendeleev',
    explain: 'Dmitri Mendeleev was a Russian chemist who published his periodic table of elements in 1869 and later modified it. He was honored 48 years after his death by naming one of the discovered elements after him: Mendelevium (Md).',
    variants: [
      { type: 'mc', mode: 'normal', level: 'medium', q: 'Which element was named after Mendeleev?', options: ['Mendelevium (Md)', 'Mercury (Hg)', 'Magnesium (Mg)'], answer: 0 },
      { type: 'tf', mode: 'normal', level: 'easy', q: 'Mendeleev published his periodic table of elements in 1869.', answer: 0 }
    ] }
];
