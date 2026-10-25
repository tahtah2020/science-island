/* English · Grade 5 pictures, drawn in code (CH_DIAGRAMS). Nothing is copied from the school book.
   Unit 1 "Food, Nature, and Culture":  nileLife    (tap) ids crocodile · weeds · insect · fish · bird · river
   Unit 2 "My Healthy Body":            bodyParts   (tap) ids heart · lungs · muscle · blood · vessels · fist
   Unit 3 "When Nature Changes":        weatherSix  (tap) ids thunderstorm · sandstorm · flood · drought · wildfire · heatwave
                                        storyThings (tap) ids pond · well · fly · frog · boat · mudhouse (lessons 2-3)
   Unit 3 pictures are the owner's own illustrations (sheet sent 25 Oct 2026), cropped one by one WITHOUT their captions
   (the sheet's captions had mistakes and would give the answer away): english/assets/wx_*.jpg.
   Unit 4 "My Community":               places6  (tap) ids restaurant · coffeeshop · bakery · supermarket · club · themepark
                                        village6 (tap) ids field · cottage · commcenter · barn · mainsquare · cow
   Unit 5 "Our World, Our Resources":   resources6 (tap) ids sunlight · fossilfuel · soil · minerals · freshwater · wind
                                        gifts6     (tap) ids cotton · wheat · gold · ship · digger · path
   Unit 6 "The Talking Earth":          everglades6 (tap) ids alligator · canoe · owl · splash · swamp · turtle
   Units 4-6 pictures are the owner's illustrations (sheet "unit_illustrations.zip", 25 Oct 2026): english/assets/town_*.jpg, res_*.jpg, eg_*.jpg,
   cropped 16 px on every side (removes the generator's corner mark; the pictures have no captions) and shrunk to 480 px.
   The drawings mapShop … mapTurtle are only for the island maps (an <img> SVG cannot load photos).
   Each picture is six round badges (three on top, three below) in a 340 x 250 card.
   q.pic = { plain: true } draws the inner markup only (no frame and no tap rings) for the game scenes.
   Screen-reader names say what is drawn ("a long green animal with sharp teeth"), as the question itself asks for the name.
   window.E5ART = the pieces the games and the map script reuse. */
(function () {
  'use strict';
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const f1 = n => (Math.round(n * 10) / 10).toString();
  const INK = '#1f3d57';
  const FONT = 'Nunito, Cairo, sans-serif';
  const hot = (id, name, inner) => `<g class="hot" data-id="${id}" role="button" tabindex="0" aria-label="${esc(name)}">${inner}</g>`;
  const ringEl = (cx, cy, rx, ry) => `<ellipse class="ring" cx="${f1(cx)}" cy="${f1(cy)}" rx="${f1(rx)}" ry="${f1(ry)}"/>`;
  const wrap = (w, h, label, inner, plain) => (plain ? inner : `<svg class="diagram" viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(label)}">${inner}</svg>`);
  const at = (x, y, k, inner) => `<g transform="translate(${f1(x)} ${f1(y)})${k && k !== 1 ? ` scale(${k})` : ''}">${inner}</g>`;
  const cloud = (x, y, k, c, s) => `<g transform="translate(${x} ${y}) scale(${k})" fill="${c}" stroke="${s}" stroke-width="2"><ellipse cx="0" cy="0" rx="22" ry="11"/><ellipse cx="-12" cy="-8" rx="13" ry="11"/><ellipse cx="6" cy="-12" rx="14" ry="13"/></g>`;

  /* ---------- the eighteen drawings, each about 70 wide around its own centre (0,0) ---------- */
  const D = {
    /* ----- Nile life ----- */
    crocodile: () => `<path d="M-40 8Q-30 -6 -14 -5H20Q32 -5 42 1L40 8H26L24 15H17L15 9H-4L-6 16H-13L-15 10Q-28 16 -40 8Z" fill="#5fa15a" stroke="#2f6b34" stroke-width="2.4" stroke-linejoin="round"/>`
      + `<path d="M-18 -5l3 -6 3 6M-8 -5l3 -6 3 6M2 -5l3 -6 3 6M12 -5l3 -6 3 6" fill="#3f8a46" stroke="#2f6b34" stroke-width="1.6" stroke-linejoin="round"/>`
      + `<circle cx="22" cy="-3" r="3.6" fill="#fff" stroke="#2f6b34" stroke-width="1.4"/><circle cx="22.8" cy="-3" r="1.6" fill="${INK}"/>`
      + `<path d="M28 8l2.2 5 2.2 -5M35 8l2.2 5 2.2 -5" fill="#fff" stroke="#2f6b34" stroke-width="1.2" stroke-linejoin="round"/>`,
    weeds: () => `<path d="M-42 12q10 -9 21 0t21 0t21 0t21 0V34H-42Z" fill="#6bbbe3" opacity=".75"/>`
      + `<ellipse cx="-14" cy="6" rx="19" ry="8" fill="#6fb46a" stroke="#3f8a46" stroke-width="2.2"/><path d="M-14 6L-2 0" stroke="#e6f6dc" stroke-width="2.4" stroke-linecap="round"/>`
      + `<ellipse cx="18" cy="2" rx="15" ry="6.4" fill="#86c97b" stroke="#3f8a46" stroke-width="2.2"/><path d="M18 2L28 -3" stroke="#e6f6dc" stroke-width="2.2" stroke-linecap="round"/>`
      + `<path d="M-14 -18V-2M-22 -12Q-14 -26 -6 -12" fill="none" stroke="#4f9f52" stroke-width="3" stroke-linecap="round"/>`
      + `<path d="M-42 12q10 -9 21 0t21 0t21 0t21 0" fill="none" stroke="#3b88b8" stroke-width="2.4" stroke-linecap="round"/>`,
    insect: () => `<path d="M-30 4H24" stroke="#23799f" stroke-width="5.4" stroke-linecap="round"/><circle cx="30" cy="4" r="6.6" fill="#23799f"/><circle cx="32.4" cy="2.4" r="2" fill="#fff"/>`
      + `<ellipse cx="-2" cy="-10" rx="21" ry="6.6" transform="rotate(-16 -2 -10)" fill="#d4ecf8" stroke="#23799f" stroke-width="1.8"/>`
      + `<ellipse cx="-2" cy="18" rx="21" ry="6.6" transform="rotate(16 -2 18)" fill="#d4ecf8" stroke="#23799f" stroke-width="1.8"/>`
      + `<ellipse cx="10" cy="-8" rx="15" ry="5.4" transform="rotate(-6 10 -8)" fill="#e6f4fb" stroke="#23799f" stroke-width="1.6"/>`
      + `<ellipse cx="10" cy="16" rx="15" ry="5.4" transform="rotate(6 10 16)" fill="#e6f4fb" stroke="#23799f" stroke-width="1.6"/>`
      + `<path d="M-30 4H-22M-12 4H-6" stroke="#f2b134" stroke-width="5.4"/>`,
    fish: () => `<ellipse cx="-6" cy="0" rx="26" ry="16" fill="#f2a134" stroke="#b86a14" stroke-width="2.4"/><path d="M18 0L38 -14V14Z" fill="#f2b134" stroke="#b86a14" stroke-width="2.4" stroke-linejoin="round"/>`
      + `<path d="M-6 -15Q0 -26 10 -16" fill="#f4c068" stroke="#b86a14" stroke-width="2.2" stroke-linejoin="round"/><circle cx="-18" cy="-3" r="3.8" fill="#fff" stroke="${INK}" stroke-width="1.6"/><circle cx="-18.6" cy="-3" r="1.6" fill="${INK}"/>`
      + `<path d="M-4 -8Q2 0 -4 8M6 -8Q12 0 6 8" fill="none" stroke="#b86a14" stroke-width="2" stroke-linecap="round"/>`,
    bird: () => `<path d="M16 8L36 16L22 18Z" fill="#6fa3d6" stroke="#3a6ea3" stroke-width="2" stroke-linejoin="round"/><ellipse cx="2" cy="6" rx="22" ry="17" fill="#8fbfe8" stroke="#3a6ea3" stroke-width="2.4"/>`
      + `<circle cx="-14" cy="-10" r="11" fill="#8fbfe8" stroke="#3a6ea3" stroke-width="2.4"/><path d="M-24 -11L-38 -6L-24 -4Z" fill="#f2b134" stroke="#c98a14" stroke-width="1.8" stroke-linejoin="round"/>`
      + `<circle cx="-16" cy="-12" r="2.6" fill="${INK}"/><path d="M-2 4Q8 -8 18 6Q8 14 -2 4Z" fill="#6fa3d6" stroke="#3a6ea3" stroke-width="2" stroke-linejoin="round"/>`
      + `<path d="M0 22V32M8 22V32M-4 32H4M4 32H12" fill="none" stroke="#c98a14" stroke-width="2.4" stroke-linecap="round"/>`,
    river: () => `<path d="M-42 -2Q-26 -24 -8 -8Q4 -20 18 -6Q30 -14 42 -4V34H-42Z" fill="#ecd9a0" stroke="#d2bf8a" stroke-width="1.6"/>`
      + `<path d="M-42 8Q-20 -2 0 8T42 8V34H-42Z" fill="#6bbbe3"/><path d="M-42 20q10 -7 21 0t21 0t21 0t21 0" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" opacity=".8"/>`
      + `<path d="M2 -30V6L24 6Z" fill="#fff" stroke="#b9805a" stroke-width="2" stroke-linejoin="round"/><path d="M-6 8H26L20 16H-2Z" fill="#b9805a" stroke="#8a5a28" stroke-width="1.6" stroke-linejoin="round"/>`,
    /* ----- body ----- */
    heart: () => `<path d="M0 28C-36 6 -36 -22 -17 -23C-8 -23 -2 -17 0 -10C2 -17 8 -23 17 -23C36 -22 36 6 0 28Z" fill="#e2603f" stroke="#a8341c" stroke-width="2.6" stroke-linejoin="round"/>`
      + `<path d="M-22 -14Q-28 -6 -24 2" fill="none" stroke="#f4a08a" stroke-width="3.4" stroke-linecap="round"/><path d="M-6 -24Q-8 -34 -2 -36M6 -24Q8 -34 14 -34" fill="none" stroke="#a8341c" stroke-width="4" stroke-linecap="round"/>`,
    lungs: () => `<path d="M0 -32V-8M0 -8L-12 2M0 -8L12 2" fill="none" stroke="#b9805a" stroke-width="4" stroke-linecap="round"/>`
      + `<path d="M-6 -2C-22 -6 -35 8 -31 26C-28 34 -12 32 -7 22Z" fill="#f4a3a8" stroke="#c4525a" stroke-width="2.4" stroke-linejoin="round"/>`
      + `<path d="M6 -2C22 -6 35 8 31 26C28 34 12 32 7 22Z" fill="#f4a3a8" stroke="#c4525a" stroke-width="2.4" stroke-linejoin="round"/>`
      + `<path d="M-17 6V22M17 6V22" stroke="#c4525a" stroke-width="2" stroke-linecap="round"/>`,
    muscle: () => `<rect x="-38" y="6" width="50" height="17" rx="8.5" fill="#f6c9a4" stroke="#b9805a" stroke-width="2.4"/>`
      + `<rect x="2" y="-22" width="16" height="42" rx="8" transform="rotate(8 10 0)" fill="#f6c9a4" stroke="#b9805a" stroke-width="2.4"/>`
      + `<ellipse cx="-12" cy="2" rx="19" ry="12" fill="#f6c9a4" stroke="#b9805a" stroke-width="2.4"/><path d="M-22 4Q-12 -4 -2 4" fill="none" stroke="#e0a07a" stroke-width="2.4" stroke-linecap="round"/>`
      + `<circle cx="16" cy="-27" r="10" fill="#f6c9a4" stroke="#b9805a" stroke-width="2.4"/><path d="M10 -30H22M10 -25H22" stroke="#b9805a" stroke-width="1.8" stroke-linecap="round"/>`,
    blood: () => `<path d="M0 -32C14 -10 24 0 24 12C24 26 12 34 0 34C-12 34 -24 26 -24 12C-24 0 -14 -10 0 -32Z" fill="#d9363e" stroke="#8f1d24" stroke-width="2.6" stroke-linejoin="round"/>`
      + `<path d="M-13 8Q-14 18 -6 24" fill="none" stroke="#f4a3a8" stroke-width="3.6" stroke-linecap="round"/>`,
    vessels: () => `<path d="M-40 -4C-20 -4 -14 -18 6 -18S26 -8 40 -8" fill="none" stroke="#d9363e" stroke-width="7" stroke-linecap="round"/>`
      + `<path d="M-40 14C-20 14 -10 26 8 24S28 12 40 14" fill="none" stroke="#3a6ea3" stroke-width="7" stroke-linecap="round"/>`
      + `<path d="M-14 -12L-22 -26M8 -18L2 -32M22 -12L30 -26M-6 20L-14 32M16 20L22 32" fill="none" stroke="#d9363e" stroke-width="4" stroke-linecap="round"/>`
      + `<path d="M-4 -14Q-2 2 -4 18" fill="none" stroke="#c4525a" stroke-width="2" stroke-dasharray="3 5" stroke-linecap="round"/>`,
    fist: () => `<path d="M-22 -2Q-22 -26 -4 -26H14Q28 -26 28 -8V16Q28 30 14 30H-6Q-22 30 -22 14Z" fill="#f6c9a4" stroke="#b9805a" stroke-width="2.6" stroke-linejoin="round"/>`
      + `<path d="M-6 -26V-6M8 -26V-6M20 -24V-6" fill="none" stroke="#b9805a" stroke-width="2.4" stroke-linecap="round"/><path d="M-22 6Q-36 8 -32 18Q-28 24 -14 20" fill="#f6c9a4" stroke="#b9805a" stroke-width="2.6" stroke-linejoin="round" stroke-linecap="round"/>`
      + `<path d="M-6 -6Q8 2 20 -6" fill="none" stroke="#b9805a" stroke-width="2.4" stroke-linecap="round"/>`,
    /* ----- weather ----- */
    thunderstorm: () => cloud(-2, -8, 1.3, '#6b7f93', '#445566')
      + `<path d="M6 0L-10 22H0L-8 40L16 12H4L14 0Z" fill="#f2b134" stroke="#c98a14" stroke-width="2" stroke-linejoin="round"/>`
      + `<path d="M-28 8L-32 18M-20 14L-24 24M26 8L22 18" stroke="#6bbbe3" stroke-width="3" stroke-linecap="round"/>`,
    sandstorm: () => `<path d="M-40 28V0Q-34 -24 -16 -16Q-6 -34 12 -22Q28 -30 36 -8Q42 6 40 28Z" fill="#d9a85c" stroke="#b27a35" stroke-width="2.4" stroke-linejoin="round"/>`
      + `<path d="M-30 -2Q-14 -10 2 -2M-22 10Q-4 2 16 10M-10 20Q8 14 28 20" fill="none" stroke="#b27a35" stroke-width="2.6" stroke-linecap="round"/>`
      + `<path d="M-40 28H40" stroke="#b27a35" stroke-width="3" stroke-linecap="round"/><circle cx="-34" cy="-14" r="2" fill="#b27a35"/><circle cx="40" cy="-14" r="2" fill="#b27a35"/><circle cx="32" cy="-24" r="1.6" fill="#b27a35"/>`,
    flood: () => `<path d="M-20 4L0 -16L20 4Z" fill="#c98a5a" stroke="#8a5a28" stroke-width="2.2" stroke-linejoin="round"/><rect x="-16" y="4" width="32" height="22" fill="#fbe3b8" stroke="#8a5a28" stroke-width="2.2"/><rect x="-5" y="12" width="10" height="14" fill="#8a5a28"/>`
      + `<path d="M-42 12q10 -10 21 0t21 0t21 0t21 0V36H-42Z" fill="#4f9bd8" opacity=".88"/><path d="M-42 22q10 -9 21 0t21 0t21 0t21 0" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" opacity=".8"/>`,
    drought: () => `<circle cx="26" cy="-20" r="9" fill="#f2b134" stroke="#c98a14" stroke-width="2"/><path d="M26 -34V-31M40 -20H37M36 -30L34 -28M16 -30L18 -28" stroke="#f2b134" stroke-width="2.6" stroke-linecap="round"/>`
      + `<path d="M-42 8H42V34H-42Z" fill="#d9a85c" stroke="#b27a35" stroke-width="2.2"/><path d="M-32 8l7 12 -6 9M-8 8l4 11 -8 13M18 8l-6 13 9 9M34 8l-6 11" fill="none" stroke="#8a5a28" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>`
      + `<path d="M-14 8V-14M-14 -2L-24 -12M-14 -8L-5 -18" fill="none" stroke="#8a6a3a" stroke-width="3" stroke-linecap="round"/>`,
    wildfire: () => `<path d="M-38 34V14L-30 -4L-22 14V34Z" fill="#3f6b3a"/><path d="M26 34V10L34 -10L42 10V34Z" fill="#3f6b3a"/>`
      + `<path d="M0 34C-24 34 -28 8 -14 -8C-12 4 -6 4 -6 -6C-6 -16 0 -24 4 -32C6 -18 20 -10 20 8C20 24 14 34 0 34Z" fill="#e2603f" stroke="#a8341c" stroke-width="2.4" stroke-linejoin="round"/>`
      + `<path d="M2 34C-10 34 -12 20 -4 10C-3 16 2 16 3 8C8 14 14 20 12 28C10 32 6 34 2 34Z" fill="#f2b134"/>`
      + `<path d="M-30 -10Q-26 -18 -22 -12M30 -20Q34 -28 38 -22" fill="none" stroke="#e2603f" stroke-width="3" stroke-linecap="round"/>`,
    heatwave: () => `<circle cx="-8" cy="-2" r="17" fill="#f2b134" stroke="#c98a14" stroke-width="2.4"/><path d="M-8 -28V-22M-8 22V28M-34 -2H-28M12 -2H18M-26 -20L-22 -16M10 -20L6 -16M-26 16L-22 12M10 16L6 12" stroke="#f2b134" stroke-width="3.4" stroke-linecap="round"/>`
      + `<rect x="24" y="-26" width="12" height="46" rx="6" fill="#fff" stroke="${INK}" stroke-width="2.4"/><circle cx="30" cy="24" r="9" fill="#e2603f" stroke="${INK}" stroke-width="2.4"/><rect x="27.4" y="-8" width="5.2" height="32" rx="2.6" fill="#e2603f"/>`
      + `<path d="M24 -16h-5M24 -6h-5M24 4h-5" stroke="${INK}" stroke-width="2" stroke-linecap="round"/>`
    ,
    /* ----- map-only drawings for units 4-6 (the quiz and games use the owner's photos) ----- */
    mapShop: () => `<rect x="-30" y="-6" width="60" height="38" fill="#fffaf0" stroke="#8a5a28" stroke-width="2.4"/><path d="M-36 -6L-30 -24H30L36 -6Z" fill="#e2603f" stroke="#a8341c" stroke-width="2.4" stroke-linejoin="round"/>`
      + `<path d="M-18 -24L-20 -6M0 -24V-6M18 -24L20 -6" stroke="#fff" stroke-width="5"/><rect x="-24" y="4" width="20" height="16" fill="#bfe3f4" stroke="#8a5a28" stroke-width="2"/><rect x="6" y="2" width="16" height="30" fill="#b9805a" stroke="#8a5a28" stroke-width="2"/>`,
    mapCottage: () => `<path d="M-32 0L0 -28L32 0Z" fill="#d9a85c" stroke="#8a5a28" stroke-width="2.4" stroke-linejoin="round"/><rect x="-26" y="0" width="52" height="32" fill="#fbe3b8" stroke="#8a5a28" stroke-width="2.4"/>`
      + `<rect x="-6" y="12" width="12" height="20" fill="#8a5a28"/><rect x="-21" y="8" width="11" height="10" fill="#bfe3f4" stroke="#8a5a28" stroke-width="1.6"/><rect x="10" y="8" width="11" height="10" fill="#bfe3f4" stroke="#8a5a28" stroke-width="1.6"/>`,
    mapBarn: () => `<path d="M-30 -4L-20 -24H20L30 -4V32H-30Z" fill="#d9534f" stroke="#8f1d24" stroke-width="2.4" stroke-linejoin="round"/><rect x="-12" y="6" width="24" height="26" fill="#fff" stroke="#8f1d24" stroke-width="2"/>`
      + `<path d="M-12 6L12 32M12 6L-12 32" stroke="#8f1d24" stroke-width="2"/><rect x="-6" y="-16" width="12" height="9" fill="#fff" stroke="#8f1d24" stroke-width="1.6"/>`,
    mapSun: () => `<circle r="17" fill="#f2b134" stroke="#c98a14" stroke-width="2.4"/><path d="M0 -32V-24M0 24V32M-32 0H-24M24 0H32M-23 -23L-17 -17M23 -23L17 -17M-23 23L-17 17M23 23L17 17" stroke="#f2b134" stroke-width="4" stroke-linecap="round"/>`,
    mapGem: () => `<path d="M-26 -8L-14 -24H14L26 -8L0 28Z" fill="#8fd3ee" stroke="#3b88b8" stroke-width="2.4" stroke-linejoin="round"/><path d="M-26 -8H26M-14 -24L-6 -8L0 28L6 -8L14 -24" fill="none" stroke="#3b88b8" stroke-width="1.8" stroke-linejoin="round"/>`,
    mapWheat: () => `<path d="M0 32V-26M-12 32Q-10 0 -14 -20M12 32Q10 0 14 -20" fill="none" stroke="#c98a14" stroke-width="3" stroke-linecap="round"/>`
      + [-26, -16, -6, 4].map(y => `<ellipse cx="-5" cy="${y}" rx="5" ry="8" transform="rotate(-30 -5 ${y})" fill="#f2b134" stroke="#c98a14" stroke-width="1.4"/><ellipse cx="5" cy="${y}" rx="5" ry="8" transform="rotate(30 5 ${y})" fill="#f2b134" stroke="#c98a14" stroke-width="1.4"/>`).join(''),
    mapCanoe: () => `<path d="M-40 4Q0 30 40 4Q20 12 0 12T-40 4Z" fill="#b9805a" stroke="#8a5a28" stroke-width="2.4" stroke-linejoin="round"/><path d="M-42 20q10 -7 21 0t21 0t21 0t21 0" fill="none" stroke="#4f9bd8" stroke-width="3" stroke-linecap="round"/>`
      + `<path d="M10 -26L-6 16" stroke="#8a5a28" stroke-width="3" stroke-linecap="round"/><ellipse cx="-8" cy="20" rx="5" ry="8" transform="rotate(20 -8 20)" fill="#b9805a"/>`,
    mapOwl: () => `<ellipse cx="0" cy="4" rx="22" ry="26" fill="#b9805a" stroke="#6b4320" stroke-width="2.4"/><path d="M-20 -14L-14 -28L-6 -18M20 -14L14 -28L6 -18" fill="#b9805a" stroke="#6b4320" stroke-width="2.2" stroke-linejoin="round"/>`
      + `<circle cx="-9" cy="-6" r="8" fill="#fff" stroke="#6b4320" stroke-width="1.8"/><circle cx="9" cy="-6" r="8" fill="#fff" stroke="#6b4320" stroke-width="1.8"/><circle cx="-9" cy="-6" r="3.4" fill="${INK}"/><circle cx="9" cy="-6" r="3.4" fill="${INK}"/>`
      + `<path d="M-4 2L0 8L4 2Z" fill="#f2b134"/><path d="M-26 30H26" stroke="#6b4320" stroke-width="4" stroke-linecap="round"/>`,
    mapTurtle: () => `<ellipse cx="0" cy="6" rx="28" ry="18" fill="#7cb86a" stroke="#3f6b34" stroke-width="2.4"/><path d="M-14 -6L0 4L14 -6M0 4V22M-22 10L0 4L22 10" fill="none" stroke="#3f6b34" stroke-width="2"/>`
      + `<circle cx="34" cy="6" r="8" fill="#a8d08a" stroke="#3f6b34" stroke-width="2.2"/><circle cx="36" cy="4" r="1.8" fill="${INK}"/><path d="M-18 22l-4 8M18 22l4 8" stroke="#3f6b34" stroke-width="5" stroke-linecap="round"/>`
  };
  const NAMES = {
    crocodile: 'a long green animal with sharp teeth', weeds: 'green round leaves floating on water', insect: 'a small flying animal with four thin wings', fish: 'an orange animal with a tail, swimming', bird: 'a blue animal with a beak and two wings', river: 'a wide band of water with a boat between sandy banks',
    heart: 'a red heart shape', lungs: 'two pink shapes joined to a tube', muscle: 'a bent arm with a round bump', blood: 'a red drop', vessels: 'thin red and blue tubes that branch', fist: 'a closed hand',
    thunderstorm: 'a dark cloud with a yellow zigzag', sandstorm: 'a wall of brown swirling sand', flood: 'a house with water up to its door', drought: 'cracked dry ground and a bare plant', wildfire: 'big orange flames next to trees', heatwave: 'a bright sun next to a hot thermometer',
    restaurant: 'a two-floor building with a striped roof over tables outside', coffeeshop: 'a small shop with a striped roof, a sun umbrella and chairs outside', bakery: 'a small house with a big window full of brown loaves', supermarket: 'a large shop with glass doors and a shopping cart', club: 'a house next to a green sports field with a goal', themepark: 'a round ride with painted horses',
    field: 'rows of green plants with a man in a straw hat', cottage: 'a small house with a brown roof and flowers', commcenter: 'a big cream building with a straw roof and blue windows', barn: 'a big red wooden building with large doors', mainsquare: 'a market stall full of fruit and vegetables', cow: 'a black and white animal with horns',
    sunlight: 'a smiling yellow sun', fossilfuel: 'black lumps next to a grey can', soil: 'a pile of dark brown earth with small green shoots', minerals: 'a heap of shiny coloured crystals', freshwater: 'clear water running over round stones', wind: 'blue swirls moving palm leaves',
    cotton: 'a green plant with soft white balls', wheat: 'a bundle of golden stalks tied with a ribbon', gold: 'a shiny yellow lump on a grey stone', ship: 'a big red ship carrying many coloured boxes', digger: 'a yellow machine with a long arm and a bucket', path: 'a brown winding way through green grass',
    alligator: 'a long green animal with bumpy skin, lying on grass', canoe: 'a long narrow wooden boat on water', owl: 'a brown bird with big round eyes on a branch', splash: 'water jumping up in drops', swamp: 'tall trees standing in green, wet water', turtle: 'an animal with a hard round shell',
    pond: 'a small round water with green leaves and a flower', well: 'a round stone hole with a wooden roof and a bucket rope', fly: 'a small dark insect with two clear wings', frog: 'a small green animal sitting on a leaf', boat: 'a wooden boat with a white sail on water', mudhouse: 'a brown house with small windows'
  };
  const TINT = {
    crocodile: '#e1f3e0', weeds: '#e2f1d6', insect: '#e1effb', fish: '#fdeee0', bird: '#e1ebfb', river: '#dff1f7',
    heart: '#fbe3e8', lungs: '#fde6e8', muscle: '#fdeee0', blood: '#fbe0e2', vessels: '#e8e6fb', fist: '#f6ecd9',
    thunderstorm: '#e6eaf3', sandstorm: '#f8ecd0', flood: '#dff1f7', drought: '#f6e8cf', wildfire: '#fbe3d6', heatwave: '#fdf0cf',
    restaurant: '#e2f4dc', coffeeshop: '#fdf0e0', bakery: '#e1ebfb', supermarket: '#fdf6d4', club: '#fde4cf', themepark: '#ece2fb',
    field: '#fdf6d4', cottage: '#dff1f7', commcenter: '#ece2fb', barn: '#e2f4dc', mainsquare: '#fde4cf', cow: '#fdf3c8',
    sunlight: '#fdf0cf', fossilfuel: '#e6e8ec', soil: '#e2f4dc', minerals: '#fbe3e8', freshwater: '#dff1f7', wind: '#d9f4f2',
    cotton: '#e1f3ec', wheat: '#fdf0cf', gold: '#ece2fb', ship: '#e1effb', digger: '#e1ebfb', path: '#e6f6dc',
    alligator: '#fdf6d4', canoe: '#d9f4f2', owl: '#e1ebfb', splash: '#e1effb', swamp: '#e2f4dc', turtle: '#e6f6dc',
    mapShop: '#fde4cf', mapCottage: '#dff1f7', mapBarn: '#e2f4dc', mapSun: '#fdf0cf', mapGem: '#e1effb', mapWheat: '#fdf6d4', mapCanoe: '#d9f4f2', mapOwl: '#e1ebfb', mapTurtle: '#e6f6dc',
    pond: '#e2f4dc', well: '#e8e6fb', fly: '#e1effb', frog: '#e2f4dc', boat: '#fbe3e8', mudhouse: '#efe6fb'
  };
  /* positions of the six badges in the 340 x 250 card: three on top, three below */
  const SLOT = [[62, 66], [170, 66], [278, 66], [62, 184], [170, 184], [278, 184]];
  const SETS = {
    nileLife: ['crocodile', 'weeds', 'insect', 'fish', 'bird', 'river'],
    bodyParts: ['heart', 'lungs', 'muscle', 'blood', 'vessels', 'fist'],
    weatherSix: ['thunderstorm', 'sandstorm', 'flood', 'drought', 'wildfire', 'heatwave'],
    storyThings: ['pond', 'well', 'fly', 'frog', 'boat', 'mudhouse'],
    places6: ['restaurant', 'coffeeshop', 'bakery', 'supermarket', 'club', 'themepark'],
    village6: ['field', 'cottage', 'commcenter', 'barn', 'mainsquare', 'cow'],
    resources6: ['sunlight', 'fossilfuel', 'soil', 'minerals', 'freshwater', 'wind'],
    gifts6: ['cotton', 'wheat', 'gold', 'ship', 'digger', 'path'],
    everglades6: ['alligator', 'canoe', 'owl', 'splash', 'swamp', 'turtle']
  };
  const R = 46;
  const PHOTOS = { nileLife: { crocodile: 'nile_croc', weeds: 'nile_weeds', insect: 'nile_insects', river: 'nile_river' },   // the owner's pictures (ids without one stay drawn)
    bodyParts: { heart: 'body_heart', lungs: 'body_lungs', muscle: 'body_muscles', fist: 'body_fist', vessels: 'body_vessels' },
    weatherSix: { thunderstorm: 'wx_thunderstorm', sandstorm: 'wx_sandstorm', flood: 'wx_flood', drought: 'wx_drought', wildfire: 'wx_wildfire', heatwave: 'wx_heatwave' },
    storyThings: { pond: 'wx_pond', well: 'wx_well', fly: 'wx_fly', frog: 'wx_frog', boat: 'wx_boat', mudhouse: 'wx_mudhouse' } };
  /* units 4-6: every picture is the owner's; the file name is the prefix + the id (freshwater -> res_water) */
  [['places6', 'town_'], ['village6', 'town_'], ['resources6', 'res_'], ['gifts6', 'res_'], ['everglades6', 'eg_']].forEach(([k, pre]) => {
    PHOTOS[k] = {}; SETS[k].forEach(id => { PHOTOS[k][id] = pre + (id === 'freshwater' ? 'water' : id); });
  });
  const PHOTO = id => { for (const k in PHOTOS) if (PHOTOS[k][id]) return PHOTOS[k][id]; return ''; };   // file of a picture, for the games
  const POS = {};
  Object.keys(SETS).forEach(k => SETS[k].forEach((id, i) => { POS[id] = SLOT[i]; }));

  function makeSet(key, label) {
    const ids = SETS[key];
    function pic(q) {
      const plain = !!(q && q.pic && q.pic.plain);
      let s = plain ? '' : `<rect width="340" height="250" rx="14" fill="#fbf6e6"/>`;
      ids.forEach(id => {
        const [x, y] = POS[id];
        const ph = (PHOTOS[key] || {})[id];
        s += at(x, y, 1, ph
          ? `<clipPath id="e5ph-${id}"><circle r="${R}"/></clipPath><circle r="${R}" fill="${TINT[id]}"/><image href="english/assets/${ph}.jpg" x="${-R}" y="${-R}" width="${R * 2}" height="${R * 2}" preserveAspectRatio="xMidYMid slice" clip-path="url(#e5ph-${id})"/><circle r="${R}" fill="none" stroke="#fff" stroke-width="3"/><circle r="${R}" fill="none" stroke="#d8c9a6" stroke-width="1.4"/>`
          : `<circle r="${R}" fill="${TINT[id]}" stroke="#fff" stroke-width="3"/><circle r="${R}" fill="none" stroke="#d8c9a6" stroke-width="1.4"/><g transform="scale(.9)">${D[id]()}</g>`);
      });
      if (!plain) ids.forEach(id => { const [x, y] = POS[id]; s += hot(id, NAMES[id], ringEl(x, y, R, R)); });
      return wrap(340, 250, label, s, plain);
    }
    pic.rings = () => { const o = {}; ids.forEach(id => { o[id] = [POS[id][0] - R, POS[id][1] - R, R * 2, R * 2]; }); return o; };
    return pic;
  }

  window.CH_DIAGRAMS = Object.assign(window.CH_DIAGRAMS || {}, {
    nileLife: makeSet('nileLife', 'Six round pictures: a crocodile, water weeds, an insect, a fish, a bird and a river'),
    bodyParts: makeSet('bodyParts', 'Six round pictures: a heart, lungs, a muscle, a drop of blood, blood vessels and a fist'),
    weatherSix: makeSet('weatherSix', 'Six round pictures of weather: a thunderstorm, a sandstorm, a flood, a drought, a wildfire and a heat wave'),
    storyThings: makeSet('storyThings', 'Six round pictures: a pond, a well, a fly, a frog, a boat and a house'),
    places6: makeSet('places6', 'Six round pictures of places in a town'),
    village6: makeSet('village6', 'Six round pictures of a village'),
    resources6: makeSet('resources6', 'Six round pictures from nature'),
    gifts6: makeSet('gifts6', 'Six round pictures: a plant, golden stalks, a shiny lump, a ship, a machine and a way through grass'),
    everglades6: makeSet('everglades6', 'Six round pictures of a wet wild place and its animals')
  });
  window.E5ART = { D, POS, SETS, TINT, R, NAMES, at, hot, ringEl, INK, f1, esc, FONT, PHOTO };
})();
