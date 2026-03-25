/* ============================================================
   Fastone.com — Version 3 App JS
   Uses B64IMG from game_images_base64.js
   ============================================================ */

const GAME_IMGS = {
  'Boxing King':   'images/game_boxing_king_1774251853523.png',
  'Candy Baby':    'images/game_candy_baby_1774252195365.png',
  'Dragon Fortune':'images/game_dragon_fortune_1774251963477.png',
  'Fortune Gems':  'images/game_fortune_gems_1774251982967.png',
  'Golden Empire': 'images/game_golden_empire_1774251833480.png',
  'Jungle King':   'images/game_jungle_king_1774252144286.png',
  'Mega Fishing':  'images/game_mega_fishing_1774251881646.png',
  'Night City':    'images/game_night_city_1774251919169.png',
  'RomaX':         'images/game_romax_1774251816243.png',
  'Super Ace':     'images/game_super_ace_1774252003529.png',
  'ZEUS':          'images/game_zeus_1774251901492.png',
};

const ICON_IMGS = {
  tournament: 'images/icon_tournament_1774253373386.png',
  missions:   'images/icon_missions_1774253390015.png',
  jackpot:    'images/icon_jackpot_1774253405896.png',
};

function img(name) {
  const f = GAME_IMGS[name];
  if (f) return f;
  const game = GAMES.find(g => g.name === name);
  if (game) {
    const cat = game.cat.toLowerCase();
    if (cat === 'slot') return 'images/fallback_slot.png';
    if (cat === 'fishing') return 'images/fallback_fishing.png';
    if (cat === 'table') return 'images/fallback_table.png';
    if (cat === 'bingo') return 'images/fallback_bingo.png';
    if (cat === 'casino') return 'images/fallback_casino.png';
  }
  return null;
}
function icon(name) { return ICON_IMGS[name] || null; }
function heroBg()   { return 'images/game_hero_bg_1774252126888.png'; }
function heroChar() { return 'images/hero_characters_1774253327664.png'; }

/* ── 55+ Games ─────────────────────────────────── */
const GAMES = [
  // SLOT (35)
  { id:1,  name:'Roma X 10000',      cat:'slot',    rtp:'96.71%', vol:'High',   max:'10,000x', desc:'Ancient Rome meets modern slots. Cascading reels and free spin multipliers that can reach 10,000x your bet.', g:['#1a0000','#050000'] },
  { id:2,  name:'Golden Empire',     cat:'slot',    rtp:'96.80%', vol:'High',   max:'5,000x',  desc:'Enter the golden realm. An Asian-themed slot with expanding wilds and a golden multiplier meter.', g:['#1a0800','#080200'] },
  { id:3,  name:'Super Ace',         cat:'slot',    rtp:'97.10%', vol:'Medium', max:'3,000x',  desc:'Classic card-themed slot with a powerful ace feature. Matching aces unlock the grand jackpot bonus.', g:['#08081a','#02020a'] },
  { id:4,  name:'Boxing King',       cat:'slot',    rtp:'96.50%', vol:'High',   max:'8,000x',  desc:'Step into the ring. Free spins with sticky wilds and knock-out multipliers up to 8,000x.', g:['#100010','#060006'] },
  { id:5,  name:'Fortune Gems',      cat:'slot',    rtp:'96.90%', vol:'Medium', max:'2,500x',  desc:'Sparkling gems cascade across 5x3 reels. Auto-hold feature keeps the best symbols for re-spins.', g:['#001a10','#000a06'] },
  { id:6,  name:'Jungle King',       cat:'slot',    rtp:'96.30%', vol:'High',   max:'6,000x',  desc:'Rule the jungle with stacked wilds and expanding reels. Random jackpot triggered on any spin.', g:['#0a1a00','#040a00'] },
  { id:7,  name:'Night City',        cat:'slot',    rtp:'96.75%', vol:'High',   max:'7,500x',  desc:'Cyberpunk neon-lit streets. Scatter pays plus free spin respins with a multiplier trail.', g:['#00001a','#00000a'] },
  { id:8,  name:'ZEUS',              cat:'slot',    rtp:'96.60%', vol:'High',   max:'5,500x',  desc:'Mount Olympus pays huge. Lightning bolt wilds strike multiple positions on every free spin.', g:['#101800','#060a00'] },
  { id:9,  name:'Candy Baby',        cat:'slot',    rtp:'97.00%', vol:'Low',    max:'1,500x',  desc:'Sweet and simple — match colourful candies for frequent wins. Beginner-friendly and high RTP.', g:['#180010','#0a0006'] },
  { id:10, name:'Money Coming',      cat:'slot',    rtp:'96.85%', vol:'Medium', max:'3,500x',  desc:'Cash is coming! Coin scatter triggers cash rain free spins with locked multiplier wilds.', g:['#001810','#000a06'] },
  { id:11, name:'777 Deluxe',        cat:'slot',    rtp:'97.20%', vol:'Low',    max:'1,000x',  desc:'Classic fruit machine reimagined. Triple 7s on the payline unlock the deluxe jackpot bonus.', g:['#1a0a00','#080400'] },
  { id:12, name:'Safari King',       cat:'slot',    rtp:'96.40%', vol:'High',   max:'8,000x',  desc:'Track the big five across the savanna. Wild lion symbol expands vertically for mega wins.', g:['#1a1000','#080600'] },
  { id:13, name:'Charge Buffalo',    cat:'slot',    rtp:'96.65%', vol:'High',   max:'6,500x',  desc:'The herd is charging. Holds & wins mechanic with electric wilds and linking jackpot prizes.', g:['#100a00','#060400'] },
  { id:14, name:'Ali Baba',          cat:'slot',    rtp:'96.55%', vol:'High',   max:'7,000x',  desc:'Open sesame to riches. Arabian nights theme with portal wilds and expanding treasure maps.', g:['#1a0008','#0a0004'] },
  { id:15, name:'War of Dragon',     cat:'slot',    rtp:'96.80%', vol:'High',   max:'9,000x',  desc:'Dragon battle rages across 6 reels. Clash of dragons triggers massive win multipliers.', g:['#1a0000','#0a0000'] },
  { id:16, name:'RomaX',            cat:'slot',    rtp:'96.70%', vol:'High',   max:'10,000x', desc:'Next evolution of the Roma series. Turbo reels and upgraded cascading mechanics.', g:['#180008','#0a0004'] },
  { id:17, name:'King Arthur',       cat:'slot',    rtp:'96.45%', vol:'Medium', max:'4,000x',  desc:'Camelot calls. Epic medieval slot with sword-in-stone bonus and round table free spins.', g:['#08081a','#04040e'] },
  { id:18, name:'Sin City',          cat:'slot',    rtp:'96.60%', vol:'High',   max:'7,000x',  desc:'Vegas never sleeps. Neon-drenched slot with progressive jackpots and free spin multipliers.', g:['#180a00','#0a0400'] },
  { id:19, name:'Mayan Gems',        cat:'slot',    rtp:'96.30%', vol:'Medium', max:'3,000x',  desc:'Aztec temple treasures. Symbol lock re-spin feature with progressive gem multipliers.', g:['#001010','#000606'] },
  { id:20, name:'Dragon Tiger Luck', cat:'slot',    rtp:'96.50%', vol:'High',   max:'5,000x',  desc:'Battle of beasts on the reels. Dragon vs tiger scatter triggers instant cash prizes.', g:['#1a0000','#0e0000'] },
  { id:21, name:'Fruit Paradise',    cat:'slot',    rtp:'97.10%', vol:'Low',    max:'2,000x',  desc:'Tropical fruit bonanza. Simple 3x3 layout with nudge wilds and free spin clusters.', g:['#1a1000','#0a0800'] },
  { id:22, name:'Highway Fortune',   cat:'slot',    rtp:'96.75%', vol:'High',   max:'6,000x',  desc:'Hit the road to riches. Wild highway scatter triggers the road trip bonus round.', g:['#080810','#040408'] },
  { id:23, name:'Phoenix Rises',     cat:'slot',    rtp:'96.90%', vol:'High',   max:'8,500x',  desc:'Born from the ashes. Phoenix wild multiplies wins and respawns with each free spin.', g:['#1a0800','#0c0400'] },
  { id:24, name:'Lucky Coin',        cat:'slot',    rtp:'97.00%', vol:'Medium', max:'2,500x',  desc:'Coin-drop mechanic on 5 reels. Lucky coin feature randomly adds wilds and multipliers.', g:['#100a00','#060400'] },
  { id:25, name:'Pirate Queen',      cat:'slot',    rtp:'96.40%', vol:'High',   max:'7,500x',  desc:'She rules the seas. Map scatter triggers treasure hunt with crew-member multipliers.', g:['#000a18','#00040e'] },
  { id:26, name:'Wild West Gold',    cat:'slot',    rtp:'96.55%', vol:'High',   max:'9,000x',  desc:'Ride into the sunset. Sheriff wild badge collects and awards multiplied free spins.', g:['#1a1000','#0a0800'] },
  { id:27, name:'Genie Blast',       cat:'slot',    rtp:'96.65%', vol:'Medium', max:'4,500x',  desc:'Lamp wishes come true. Genie wild expands and triggers a bonus wish multiplier feature.', g:['#08001a','#04000e'] },
  { id:28, name:'Ice Wolf',          cat:'slot',    rtp:'96.30%', vol:'High',   max:'6,500x',  desc:'Arctic predator hunts for wins. Freeze reel mechanic locks wolf wilds for 3 spins.', g:['#000a10','#000408'] },
  { id:29, name:'Samurai Swords',    cat:'slot',    rtp:'96.85%', vol:'High',   max:'8,000x',  desc:'Japanese warrior honour. Katana slash splits symbols and doubles win values.', g:['#100010','#08000a'] },
  { id:30, name:'Crystal Cavern',    cat:'slot',    rtp:'97.05%', vol:'Medium', max:'3,500x',  desc:'Deep underground riches. Crystal cluster pays trigger gem storm free spin bonus.', g:['#001018','#000608'] },
  { id:31, name:'Monkey King',       cat:'slot',    rtp:'96.60%', vol:'High',   max:'5,500x',  desc:'Journey to the west for riches. Staff wild scatters wins across entire reels.', g:['#0a1000','#040800'] },
  { id:32, name:'Volcano Riches',    cat:'slot',    rtp:'96.45%', vol:'High',   max:'7,000x',  desc:'Eruption of wins. Lava wild flows across reels during volcanic free spin mode.', g:['#1a0400','#0c0200'] },
  { id:33, name:'Space Odyssey',     cat:'slot',    rtp:'96.75%', vol:'High',   max:'9,500x',  desc:'Outer space adventure. Black hole wild collapses adjacent symbols into multiplied wins.', g:['#000010','#00000a'] },
  { id:34, name:'Tiger Warrior',     cat:'slot',    rtp:'96.50%', vol:'High',   max:'6,000x',  desc:'The tiger strikes. Claw scatter shreds the reels and activates warrior rage free spins.', g:['#1a0a00','#0c0600'] },
  { id:35, name:'Diamond Strike',    cat:'slot',    rtp:'97.15%', vol:'Medium', max:'2,800x',  desc:'Diamonds are forever. Hold & win mechanic fills the grid with diamond cash symbols.', g:['#080818','#04040e'] },
  // FISHING (5)
  { id:36, name:'Mega Fishing',      cat:'fishing', rtp:'96.90%', vol:'Medium', max:'800x',    desc:'Cast your line for massive fish prizes. Boss fish battles trigger jackpot explosions.', g:['#001018','#000608'] },
  { id:37, name:'Dragon Fortune',    cat:'fishing', rtp:'96.70%', vol:'High',   max:'1,200x',  desc:'Hunt the sea dragon for legendary rewards. Dragon appearance multiplies all fish values.', g:['#100010','#08000a'] },
  { id:38, name:'Jackpot Fishing',   cat:'fishing', rtp:'96.50%', vol:'High',   max:'2,000x',  desc:'Four progressive jackpots hidden in the deep. Special bombs uncover jackpot fish.', g:['#001810','#000a06'] },
  { id:39, name:'Circus Jackpot',    cat:'fishing', rtp:'96.80%', vol:'Medium', max:'1,000x',  desc:'Carnival meets fishing — shoot clown fish for surprise multipliers and jackpot prizes.', g:['#1a0a08','#0c0604'] },
  { id:40, name:'Fortune Zombie',    cat:'fishing', rtp:'96.40%', vol:'High',   max:'1,500x',  desc:'Undead fish bring buried treasure. Special silver bullets deal massive zombie fish damage.', g:['#080a08','#040604'] },
  // TABLE (4)
  { id:41, name:'Speed Baccarat',    cat:'table',   rtp:'98.94%', vol:'Low',    max:'8x',      desc:'Lightning-fast baccarat rounds completed in under 30 seconds. Classic rules, streamlined for online play.', g:['#0a0010','#050008'] },
  { id:42, name:'Color Game',        cat:'table',   rtp:'97.22%', vol:'Medium', max:'3x',      desc:'Filipino carnival classic. Pick your colour, roll the dice, multiply your wins up to 3x.', g:['#0a0a00','#060600'] },
  { id:43, name:'Jhandi Munda',      cat:'table',   rtp:'97.50%', vol:'Medium', max:'6x',      desc:'Traditional South Asian dice game. Bet on symbols, roll six dice, win up to 6x.', g:['#100008','#080004'] },
  { id:44, name:'Dragon Tiger',      cat:'table',   rtp:'96.72%', vol:'Low',    max:'1x',      desc:'Pure card battle — Dragon vs Tiger. Simple two-card showdown with side bet options.', g:['#1a0000','#0e0000'] },
  // BINGO (5)
  { id:45, name:'Lucky Bingo',       cat:'bingo',   rtp:'96.00%', vol:'Medium', max:'500x',    desc:'Classic 75-ball bingo with turbo mode and bonus ball multipliers for accelerated jackpots.', g:['#000a18','#00060e'] },
  { id:46, name:'Fortune Gems Scratch', cat:'bingo', rtp:'95.80%', vol:'Low',  max:'2,000x',  desc:'Scratch card meets bingo. Match gem patterns across the grid for instant cash prizes.', g:['#001010','#000808'] },
  { id:47, name:'Boxing Extravaganza', cat:'bingo', rtp:'96.20%', vol:'High',  max:'1,000x',  desc:'Match boxing gloves and champions in this action-packed bingo variant with bonus rounds.', g:['#100010','#08000a'] },
  { id:48, name:'Go For Champion',   cat:'bingo',   rtp:'96.10%', vol:'Medium', max:'750x',    desc:'Sports-themed bingo showdown. Complete the champion card for mega jackpot payouts.', g:['#0a1000','#060800'] },
  { id:49, name:'Bingo Adventure',   cat:'bingo',   rtp:'95.90%', vol:'Medium', max:'600x',    desc:'Go on a bingo quest across 5 adventure stages. Each stage unlocks bigger prize multipliers.', g:['#001018','#000808'] },
  // CASINO (5)
  { id:50, name:'PLINKO',            cat:'casino',  rtp:'97.00%', vol:'High',   max:'10,000x', desc:'Drop the ball, multiply the thrill. Choose from 1x to 1000x risk levels in our plinko board.', g:['#0a0018','#05000e'] },
  { id:51, name:'Crash Touchdown',   cat:'casino',  rtp:'97.00%', vol:'High',   max:'Unlimited', desc:'Football crash game — cash out before the tackle! Multiplier grows until the defensive line hits.', g:['#001a00','#000e00'] },
  { id:52, name:'Keno',              cat:'casino',  rtp:'95.00%', vol:'Medium', max:'10,000x', desc:'Pick 1 to 10 numbers and watch the draw. Paytable scales with picks and hits.', g:['#180800','#0c0400'] },
  { id:53, name:'Drop Ball',         cat:'casino',  rtp:'97.00%', vol:'High',   max:'5,000x',  desc:'Pachinko-inspired drop ball with RNG slot reveal at the bottom. Multiple balls for combo wins.', g:['#001018','#000808'] },
  { id:54, name:'Cricket War',       cat:'casino',  rtp:'97.22%', vol:'Low',    max:'2x',      desc:'Cricket-themed card battle. Bet on home or away team; cricket over wins the match.', g:['#0a1000','#060800'] },
  { id:55, name:'Wheel of Fortune',  cat:'casino',  rtp:'96.50%', vol:'Medium', max:'200x',    desc:'Spin the big wheel for instant cash prizes. VIP wheel unlocks higher multiplier segments.', g:['#100808','#080404'] },
];

/* ── Helpers ─────────────────────────────────────── */
const catName = c => ({ slot:'Slot', fishing:'Fishing', table:'Table', bingo:'Bingo', casino:'Casino' }[c] || c);

function thumbHtml(game, cls='') {
  const src = img(game.name);
  const [c1,c2] = game.g;
  if (src) return `<img src="${src}" alt="${game.name}" class="${cls}">`;
  return `<div class="gc__grad ${cls}" style="background:linear-gradient(145deg,${c1},${c2});position:absolute;inset:0;"></div>`;
}

function hoverLayer(game) {
  return `<div class="gc__hover">
    <div class="gc__hover-cat">${catName(game.cat)}</div>
    <div class="gc__hover-name">${game.name}</div>
    <button class="gc__hover-btn">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21"/></svg>
      Play
    </button>
  </div>`;
}

/* ── Modal ──────────────────────────────────────── */
let modalEl = null;

function openModal(id) {
  const game = GAMES.find(g => g.id === +id);
  if (!game) return;

  if (!modalEl) {
    modalEl = document.createElement('div');
    modalEl.className = 'modal-bg';
    modalEl.innerHTML = '<div class="modal-box"></div>';
    document.body.appendChild(modalEl);
    modalEl.addEventListener('click', e => { if (e.target === modalEl) closeModal(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
  }

  const [c1,c2] = game.g;
  const src = img(game.name);
  const thumbEl = src
    ? `<img src="${src}" alt="${game.name}" style="width:100%;height:100%;object-fit:cover;display:block;">`
    : game.name;
  const thumbStyle = src ? '' : `style="background:linear-gradient(145deg,${c1},${c2})"`;

  modalEl.querySelector('.modal-box').innerHTML = `
    <div class="modal-thumb" ${thumbStyle}>${thumbEl}</div>
    <div class="modal-body">
      <div class="modal-header">
        <div class="modal-name">${game.name}</div>
        <button class="modal-close" onclick="closeModal()">&#10005;</button>
      </div>
      <span class="modal-cat">${catName(game.cat)}</span>
      <p class="modal-desc">${game.desc}</p>
      <div class="modal-specs">
        <div class="modal-spec"><div class="modal-spec-lbl">RTP</div><div class="modal-spec-val">${game.rtp}</div></div>
        <div class="modal-spec"><div class="modal-spec-lbl">Volatility</div><div class="modal-spec-val">${game.vol}</div></div>
        <div class="modal-spec"><div class="modal-spec-lbl">Max Win</div><div class="modal-spec-val">${game.max}</div></div>
      </div>
      <button class="btn btn--red modal-play" onclick="alert('Demo: ${game.name.replace(/'/g,"\\'")}')">&#9654; Play Demo</button>
    </div>`;

  modalEl.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  if (!modalEl) return;
  modalEl.classList.remove('open');
  document.body.style.overflow = '';
}

function bindCards(container) {
  container.addEventListener('click', e => {
    const c = e.target.closest('[data-id]');
    if (c) openModal(c.dataset.id);
  });
  container.addEventListener('keydown', e => {
    const c = e.target.closest('[data-id]');
    if (c && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); openModal(c.dataset.id); }
  });
}

/* ── Stats counter ──────────────────────────────── */
function initStats() {
  const section = document.querySelector('.stats');
  if (!section) return;
  const cells = section.querySelectorAll('.stats__cell');
  let fired = false;
  new IntersectionObserver(([e]) => {
    if (e.isIntersecting && !fired) {
      fired = true;
      section.querySelectorAll('[data-count]').forEach(el => {
        const target = +el.dataset.count;
        const t0 = performance.now();
        const dur = 1800;
        const tick = now => {
          const p = Math.min((now-t0)/dur, 1);
          const ease = 1-Math.pow(1-p,3);
          el.textContent = Math.floor(ease * target);
          if (p < 1) requestAnimationFrame(tick);
          else el.textContent = target;
        };
        requestAnimationFrame(tick);
      });
      cells.forEach(c => c.classList.add('on'));
    }
  }, { threshold:.3 }).observe(section);
}

/* ── Scroll reveal ──────────────────────────────── */
function initRV() {
  const els = document.querySelectorAll('.rv');
  if (!els.length) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('on'); obs.unobserve(e.target); } });
  }, { threshold:.1 });
  els.forEach(el => obs.observe(el));
}

/* ── Lang switcher ──────────────────────────────── */
function initLang() {
  document.querySelectorAll('.lang-grp').forEach(g => {
    g.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', () => {
        g.querySelectorAll('button').forEach(b => b.classList.remove('on'));
        btn.classList.add('on');
      });
    });
  });
}

/* ── Mobile nav ─────────────────────────────────── */
function initMobileNav() {
  const burger = document.querySelector('.nav__burger');
  const menu   = document.querySelector('.nav__mobile');
  if (burger && menu) burger.addEventListener('click', () => menu.classList.toggle('open'));
}

/* ── Hero images ────────────────────────────────── */
function initHero() {
  const bgEl   = document.querySelector('.hero__bg');
  const charEl = document.querySelector('.hero__characters');
  const bg = heroBg();
  const ch = heroChar();
  if (bgEl && bg)   bgEl.style.backgroundImage   = `url(${bg})`;
  if (charEl && ch) charEl.style.backgroundImage = `url(${ch})`;
}

/* ── Homepage showcase: 1 big + 4 small + 3 extra ─ */
function initShowcase() {
  const grid     = document.getElementById('showcase-main');
  const gridExtra = document.getElementById('showcase-extra');
  if (!grid) return;

  // Featured games with real images first, then fallback
  const featured = [
    GAMES.find(g => g.name === 'RomaX') || GAMES[0],
    GAMES.find(g => g.name === 'Golden Empire') || GAMES[1],
    GAMES.find(g => g.name === 'Night City') || GAMES[6],
    GAMES.find(g => g.name === 'Boxing King') || GAMES[3],
    GAMES.find(g => g.name === 'Jungle King') || GAMES[5],
    GAMES.find(g => g.name === 'Super Ace') || GAMES[2],
    GAMES.find(g => g.name === 'Fortune Gems') || GAMES[4],
  ];

  // Big card (index 0)
  const big = featured[0];
  const bigSrc = img(big.name);
  grid.innerHTML = `
    <!-- BIG card -->
    <div class="gc-big" data-id="${big.id}" tabindex="0" role="button" aria-label="${big.name}">
      ${bigSrc ? `<img src="${bigSrc}" alt="${big.name}">` : `<div class="gc__grad" style="background:linear-gradient(145deg,${big.g[0]},${big.g[1]});position:absolute;inset:0;"></div>`}
      <div class="gc-big__rtp">RTP <span>${big.rtp}</span></div>
      ${hoverLayer(big)}
    </div>
    <!-- 2 small on right -->
    ${featured.slice(1,3).map(g => {
      const s = img(g.name);
      return `<div class="gc-small" data-id="${g.id}" tabindex="0" role="button" aria-label="${g.name}">
        ${s ? `<img src="${s}" alt="${g.name}">` : `<div class="gc__grad" style="background:linear-gradient(145deg,${g.g[0]},${g.g[1]});position:absolute;inset:0;"></div>`}
        ${hoverLayer(g)}
      </div>`;
    }).join('')}`;

  bindCards(grid);

  if (gridExtra) {
    gridExtra.innerHTML = featured.slice(3,7).map(g => {
      const s = img(g.name);
      return `<div class="gc-extra" data-id="${g.id}" tabindex="0" role="button" aria-label="${g.name}">
        ${s ? `<img src="${s}" alt="${g.name}">` : `<div class="gc__grad" style="background:linear-gradient(145deg,${g.g[0]},${g.g[1]});position:absolute;inset:0;"></div>`}
        ${hoverLayer(g)}
      </div>`;
    }).join('');
    bindCards(gridExtra);
  }
}

/* ── Games page: tab filter ─────────────────────── */
function initTabs() {
  const tabs = document.querySelector('.tabs');
  const grid = document.getElementById('gpage-grid');
  if (!tabs || !grid) return;

  function render(filter) {
    const list = filter === 'all' ? GAMES : GAMES.filter(g => g.cat === filter);
    grid.innerHTML = list.map(g => {
      const s = img(g.name);
      return `<div class="gc-page" data-id="${g.id}" tabindex="0" role="button" aria-label="${g.name}">
        ${s ? `<img src="${s}" alt="${g.name}">` : `<div class="gc__grad" style="background:linear-gradient(145deg,${g.g[0]},${g.g[1]});position:absolute;inset:0;"></div>`}
        ${hoverLayer(g)}
      </div>`;
    }).join('');
    bindCards(grid);
  }

  render('all');
  tabs.addEventListener('click', e => {
    const btn = e.target.closest('.tab-btn');
    if (!btn) return;
    tabs.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    render(btn.dataset.tab);
  });
}

/* ── Contact form ───────────────────────────────── */
function initForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    alert('Thank you! Our partnerships team will be in touch within 24 hours.');
    form.reset();
  });
}

/* ── Feature icons ──────────────────────────────── */
function initFeatureIcons() {
  document.querySelectorAll('[data-feat-icon]').forEach(el => {
    const src = icon(el.dataset.featIcon);
    if (src) {
      el.innerHTML = `<img src="${src}" alt="${el.dataset.featIcon}">`;
      el.classList.add('feat__icon-wrap');
    }
  });
}

/* ── Init ───────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initHero();
  initStats();
  initRV();
  initLang();
  initMobileNav();
  initShowcase();
  initTabs();
  initForm();
  initFeatureIcons();
});
