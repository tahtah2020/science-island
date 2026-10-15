/* Reesho's wardrobe: every item is drawn in code (no pictures, nothing copied).
   Coordinates are those of assets/parrot_wave.png (376 x 520): its head is at the top, the eyes at about (150,160) and (262,185).
   An item has: id, slot (head | eyes | neck | back), en / ar, price in gems «جواهر», level (the level that opens it, default 1),
   at: [x, y, rotation] when it is drawn around its own centre (hats), box: [x, y, w, h] for its small picture, svg: its drawing.
   window.WARDROBE_SLOTS lists the slots in the order the tabs show them (back is drawn behind Reesho, the others in front). */
window.WARDROBE_SLOTS = [
  { id: 'head', en: 'Hats', ar: 'القبعات', icon: '🎩' },
  { id: 'eyes', en: 'Glasses', ar: 'النظارات', icon: '🕶️' },
  { id: 'neck', en: 'Scarves', ar: 'الأوشحة', icon: '🧣' },
  { id: 'back', en: 'Capes', ar: 'العباءات', icon: '🦸' }
];

window.WARDROBE = [
  /* ----- hats (origin = where the hat sits on the head) ----- */
  { id: 'grad', slot: 'head', en: 'Graduation cap', ar: 'قبعة التخرج', price: 25, at: [228, 50, 10], box: [-85, -50, 170, 72],
    svg: `<path d="M-46 -2 L-46 -16 Q0 -30 46 -16 L46 -2 Q0 12 -46 -2Z" fill="#2b3f55"/>
      <polygon points="-84,-20 0,-46 84,-20 0,6" fill="#1f3d57" stroke="#14293b" stroke-width="3" stroke-linejoin="round"/>
      <circle cx="0" cy="-20" r="6" fill="#f2b134"/>
      <path d="M0 -20 L66 -12 L66 18" fill="none" stroke="#f2b134" stroke-width="5" stroke-linecap="round"/>
      <rect x="58" y="14" width="16" height="16" rx="4" fill="#f2b134"/>` },
  { id: 'party', slot: 'head', en: 'Party hat', ar: 'قبعة الحفلة', price: 20, at: [232, 46, 12], box: [-48, -112, 96, 120],
    svg: `<path d="M-34 4 L4 -98 L42 4Z" fill="#e2603f" stroke="#b9482c" stroke-width="3" stroke-linejoin="round"/>
      <path d="M-22 -26 L24 -26" stroke="#fff" stroke-width="7" stroke-linecap="round"/>
      <path d="M-10 -58 L16 -58" stroke="#f2b134" stroke-width="7" stroke-linecap="round"/>
      <circle cx="4" cy="-102" r="11" fill="#f2b134" stroke="#c98c10" stroke-width="3"/>` },
  { id: 'wizard', slot: 'head', en: 'Wizard hat', ar: 'قبعة الساحر', price: 60, at: [226, 52, 8], box: [-80, -136, 160, 156],
    svg: `<path d="M-48 -4 Q-6 -70 10 -128 Q36 -70 50 -4Z" fill="#6f5cb8" stroke="#4d3f8c" stroke-width="3" stroke-linejoin="round"/>
      <ellipse cx="0" cy="0" rx="76" ry="15" fill="#5b4b9a" stroke="#4d3f8c" stroke-width="3"/>
      <path d="M-46 -12 Q2 2 50 -12" fill="none" stroke="#f2b134" stroke-width="8"/>
      <path d="M8 -86 l5 12 13 1 -10 9 3 13 -11 -7 -11 7 3 -13 -10 -9 13 -1z" fill="#ffd95a"/>` },
  { id: 'crown', slot: 'head', en: 'Golden crown', ar: 'التاج الذهبي', price: 150, level: 4, at: [228, 48, 10], box: [-62, -72, 124, 84],
    svg: `<path d="M-52 6 L-58 -52 L-27 -26 L0 -66 L27 -26 L58 -52 L52 6Z" fill="#f2b134" stroke="#c98c10" stroke-width="4" stroke-linejoin="round"/>
      <rect x="-52" y="-6" width="104" height="14" rx="5" fill="#e09a14" stroke="#c98c10" stroke-width="3"/>
      <circle cx="-58" cy="-54" r="7" fill="#e2603f"/><circle cx="0" cy="-68" r="8" fill="#23799f"/><circle cx="58" cy="-54" r="7" fill="#2e9e6b"/>` },

  /* ----- glasses (absolute coordinates, around the two eyes) ----- */
  { id: 'round', slot: 'eyes', en: 'Round glasses', ar: 'نظارة مدوّرة', price: 20, box: [96, 112, 220, 112],
    svg: `<g fill="rgba(143,211,238,.28)" stroke="#1f3d57" stroke-width="6">
        <circle cx="150" cy="160" r="37"/><circle cx="262" cy="186" r="37"/></g>
      <path d="M186 164 Q208 168 228 178" fill="none" stroke="#1f3d57" stroke-width="6" stroke-linecap="round"/>
      <path d="M113 152 L98 144 M299 190 L314 194" stroke="#1f3d57" stroke-width="6" stroke-linecap="round"/>` },
  { id: 'star', slot: 'eyes', en: 'Star glasses', ar: 'نظارة النجوم', price: 40, box: [96, 112, 220, 112],
    svg: `<g fill="rgba(255,217,90,.5)" stroke="#e2603f" stroke-width="5" stroke-linejoin="round">
        <path d="M150 118 l10 26 28 2 -22 17 8 28 -24 -16 -24 16 8 -28 -22 -17 28 -2z"/>
        <path d="M262 144 l10 26 28 2 -22 17 8 28 -24 -16 -24 16 8 -28 -22 -17 28 -2z"/></g>
      <path d="M186 166 Q208 170 226 178" fill="none" stroke="#e2603f" stroke-width="5" stroke-linecap="round"/>` },
  { id: 'sun', slot: 'eyes', en: 'Cool sunglasses', ar: 'نظارة شمس', price: 60, box: [96, 112, 220, 112],
    svg: `<g fill="#1f2937" stroke="#0f172a" stroke-width="5" stroke-linejoin="round">
        <rect x="110" y="132" width="80" height="56" rx="22" transform="rotate(8 150 160)"/><rect x="222" y="158" width="80" height="56" rx="22" transform="rotate(8 262 186)"/></g>
      <path d="M124 146 L146 142 M236 172 L258 168" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".55"/>
      <path d="M186 160 Q208 166 226 176" fill="none" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>` },

  /* ----- neck ----- */
  { id: 'scarf', slot: 'neck', en: 'Red scarf', ar: 'وشاح أحمر', price: 30, box: [124, 252, 180, 122],
    svg: `<path d="M236 292 L262 366 L228 372 L214 300Z" fill="#c94c2d"/>
      <path d="M136 262 Q208 306 288 272 L293 300 Q212 336 142 294Z" fill="#e2603f"/>
      <path d="M170 281 L176 310 M205 290 L209 318 M242 288 L246 316" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".7"/>` },
  { id: 'bow', slot: 'neck', en: 'Bow tie', ar: 'ربطة فراشة', price: 25, box: [148, 252, 114, 64],
    svg: `<path d="M206 284 L158 262 L158 308Z" fill="#2b6cb0" stroke="#1f4f86" stroke-width="3" stroke-linejoin="round"/>
      <path d="M206 284 L254 262 L254 308Z" fill="#2b6cb0" stroke="#1f4f86" stroke-width="3" stroke-linejoin="round"/>
      <circle cx="206" cy="284" r="10" fill="#1f4f86"/>` },
  { id: 'medal', slot: 'neck', en: 'Scientist medal', ar: 'ميدالية العالِم', price: 80, box: [156, 252, 100, 98],
    svg: `<path d="M172 262 L206 314 L240 262" fill="none" stroke="#23799f" stroke-width="12" stroke-linejoin="round"/>
      <circle cx="206" cy="326" r="21" fill="#f2b134" stroke="#c98c10" stroke-width="4"/>
      <path d="M206 313 l4 9 10 1 -8 7 3 10 -9 -6 -9 6 3 -10 -8 -7 10 -1z" fill="#fff4c7"/>` },

  /* ----- capes (drawn behind Reesho) ----- */
  { id: 'cape', slot: 'back', en: 'Explorer cape', ar: 'عباءة المستكشف', price: 100, box: [28, 258, 322, 252],
    svg: `<path d="M120 268 C40 360 46 470 82 504 L334 504 C350 440 322 350 272 276Z" fill="#23799f" stroke="#1b6182" stroke-width="4" stroke-linejoin="round"/>
      <path d="M100 330 C86 400 96 450 112 486 M300 330 C312 392 306 440 296 486" fill="none" stroke="#8fd3ee" stroke-width="4" opacity=".55" stroke-linecap="round"/>` },
  { id: 'cape-gold', slot: 'back', en: 'Golden cape', ar: 'العباءة الذهبية', price: 150, level: 5, box: [28, 258, 322, 252],
    svg: `<path d="M120 268 C40 360 46 470 82 504 L334 504 C350 440 322 350 272 276Z" fill="#f2b134" stroke="#c98c10" stroke-width="4" stroke-linejoin="round"/>
      <path d="M100 330 C86 400 96 450 112 486 M300 330 C312 392 306 440 296 486" fill="none" stroke="#fff4c7" stroke-width="4" opacity=".7" stroke-linecap="round"/>
      <path d="M200 400 l7 16 17 2 -13 11 4 17 -15 -9 -15 9 4 -17 -13 -11 17 -2z" fill="#fff4c7" opacity=".85"/>` }
];
