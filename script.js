
"use strict";

// ==========================================
// BoardGame Atlas - Game Database
// ==========================================

const games = [
  {
    id: "uno",
    name: "UNO",
    aliases: ["烏諾", "uno cards"],
    category: "card",
    categoryName: "卡牌遊戲",
    emoji: "🟥",
    color: "#ffe2c7",
    players: "2–10 人",
    time: "15–30 分鐘",
    difficulty: "簡單",
    description: "經典四色卡牌遊戲，透過顏色、數字與功能牌展開對決。",
    setup: [
      "使用標準 UNO 牌組，每位玩家發 7 張牌。",
      "其餘牌面朝下作為抽牌堆，翻開一張形成棄牌堆。",
      "玩家依序輪流出牌；若首張為功能牌，依所使用版本的規則處理。",
      "遊戲目標是盡快出完手中的所有牌。"
    ],
    rules: [
      "輪到你時，出一張與棄牌堆頂牌顏色、數字或符號相同的牌。",
      "也可以打出符合使用條件的萬用牌，指定下一個顏色。",
      "沒有可出的牌時，抽取一張牌；若抽到的牌可以使用，可以立即打出，否則結束回合。",
      "Skip 跳過下一位玩家；Reverse 反轉出牌方向；Draw Two 讓下一位玩家抽兩張並失去回合。",
      "Wild Draw Four 只能在手中沒有與目前顏色相同的牌時合法使用，下一位玩家可依規則提出挑戰。",
      "當手中剩下一張牌時，必須喊出 UNO。"
    ],
    winning: [
      "單局中，第一位出完手牌的玩家獲勝。",
      "標準計分玩法可依其他玩家剩餘手牌計算得分。",
      "若採多局累積計分，可依牌組說明書設定總分目標。"
    ],
    tips: [
      "標準 UNO 規則不允許任意疊加 +2 或 +4 牌來轉移抽牌懲罰。",
      "Wild Draw Four 有特定使用限制，並非任何時候都能合法打出。",
      "忘記喊 UNO 並被其他玩家在規定時機抓到時，需要抽兩張牌。",
      "不同版本及家庭規則可能不同，請先確認所使用的版本。"
    ]
  },
  {
    id: "werewolf",
    name: "狼人殺",
    aliases: ["狼人", "werewolf", "天黑請閉眼"],
    category: "deduction",
    categoryName: "推理遊戲",
    emoji: "🐺",
    color: "#e4dff7",
    players: "6–12 人",
    time: "30–60 分鐘",
    difficulty: "中等",
    description: "隱藏身分、夜間行動與白天推理的陣營對抗遊戲。",
    setup: [
      "選出一位法官（主持人），法官不參與陣營勝負。",
      "入門示例：8 位玩家可使用 2 狼人、1 預言家、1 女巫、4 村民。",
      "法官洗牌後隨機發放角色卡，所有玩家秘密確認自己的身分。",
      "遊戲分成黑夜與白天兩個階段。",
      "此處使用入門示例規則；角色配置與勝利條件可依版本調整。"
    ],
    rules: [
      "黑夜開始，所有玩家閉眼。",
      "法官依序喚醒狼人，狼人共同指定一位夜間目標。",
      "預言家醒來，查驗一位玩家的陣營資訊。",
      "女巫依所採版本的藥劑限制，決定是否救人或毒人。",
      "天亮後，法官公布夜間結果，存活玩家輪流發言討論。",
      "所有符合投票資格的玩家投票放逐一位玩家。",
      "結算放逐與勝負狀態，若尚未結束則進入下一個黑夜。"
    ],
    winning: [
      "本入門示例採陣營殲滅制。",
      "好人陣營消滅所有狼人即獲勝。",
      "狼人陣營消滅所有好人即獲勝。",
      "部分常見版本採屠邊制，勝利條件不同，開局前必須先約定。"
    ],
    tips: [
      "遊戲開始前確認女巫能否自救、首夜規則與遺言規則。",
      "玩家不能直接偷看其他人的角色卡。",
      "法官應維持中立，不應透露未公開資訊。",
      "這是一個簡化示例，實際規則應依角色配置與採用的版本調整。"
    ]
  },
  {
    id: "poker",
    name: "德州撲克",
    aliases: ["撲克", "texas holdem", "poker"],
    category: "card",
    categoryName: "卡牌遊戲",
    emoji: "♠️",
    color: "#dceee5",
    players: "2–10 人",
    time: "30–90 分鐘",
    difficulty: "中等",
    description: "使用兩張底牌與五張公共牌，組合出最強五張牌型。",
    setup: [
      "準備一副不含鬼牌的標準 52 張撲克牌。",
      "每位玩家取得兩張私人底牌。",
      "設定莊家按鈕、小盲注、大盲注與起始籌碼。",
      "本網站介紹不涉及真實金錢的娛樂籌碼玩法。"
    ],
    rules: [
      "Pre-flop：玩家取得兩張底牌，進行第一輪下注。",
      "Flop：翻開三張公共牌，進行第二輪下注。",
      "Turn：翻開第四張公共牌，進行第三輪下注。",
      "River：翻開第五張公共牌，進行最後一輪下注。",
      "玩家可以依情況選擇跟注、加注、過牌或棄牌。",
      "若剩下多位玩家，攤牌時使用七張可用牌中的最佳五張比較牌型。"
    ],
    winning: [
      "所有其他玩家棄牌時，最後留下的玩家贏得底池。",
      "進入攤牌時，由最佳五張牌型的玩家獲勝。",
      "牌型由高至低：同花順、四條、葫蘆、同花、順子、三條、兩對、一對、高牌。",
      "若最佳五張牌完全同等，依規則平分相關底池。"
    ],
    tips: [
      "公共牌最多五張，但不必使用全部公共牌。",
      "A 可以在 A-2-3-4-5 順子中作為最小牌。",
      "相同牌型需比較主要牌值及適用的踢腳牌。",
      "盲注位置、行動順序及全押邊池規則需在正式遊戲前確認。"
    ]
  },
  {
    id: "undercover",
    name: "誰是臥底",
    aliases: ["臥底", "undercover"],
    category: "party",
    categoryName: "派對遊戲",
    emoji: "🕵️",
    color: "#ffe5dd",
    players: "4–12 人",
    time: "15–30 分鐘",
    difficulty: "簡單",
    description: "用有限的語言描述自己的詞語，找出拿到不同詞語的臥底。",
    setup: [
      "選擇一組相似但不同的詞語，例如咖啡與奶茶。",
      "大部分玩家拿到同一個詞，少數臥底拿到另一個詞。",
      "每位玩家只能查看自己的詞語。",
      "先約定臥底人數、平票規則與勝利條件。"
    ],
    rules: [
      "所有玩家依序用一句話描述自己的詞語。",
      "描述時不能直接說出詞語本身。",
      "完成一輪描述後，玩家投票選出最可疑的人。",
      "得票最高者出局，依約定規則公布或保留其身分。",
      "如果遊戲尚未結束，剩餘玩家繼續下一輪描述與投票。"
    ],
    winning: [
      "普通玩家的目標是找出全部臥底。",
      "本示例採用臥底存活至場上剩下三人時獲勝的玩法。",
      "不同版本對人數、臥底勝利時機及特殊角色可能有不同規定。"
    ],
    tips: [
      "描述不能過於明顯，否則容易暴露答案。",
      "也不能完全沒有資訊，否則可能被其他玩家懷疑。",
      "適合聚會破冰與語言表達練習。"
    ]
  },
  {
    id: "drawing",
    name: "你畫我猜",
    aliases: ["畫圖猜題", "pictionary"],
    category: "party",
    categoryName: "派對遊戲",
    emoji: "🎨",
    color: "#e0effb",
    players: "4–12 人",
    time: "20–40 分鐘",
    difficulty: "簡單",
    description: "一個人畫圖，其他人根據圖像猜出指定詞語。",
    setup: [
      "準備白板、紙張或電子繪圖工具。",
      "將玩家分組，或使用個人競賽模式。",
      "準備題目卡，設定每回合時間，例如 60 秒。",
      "先約定計分方式與禁用提示方式。"
    ],
    rules: [
      "輪到的玩家抽取一張題目卡。",
      "在限制時間內畫出題目內容。",
      "其他玩家根據圖像猜測答案。",
      "畫圖者不能直接說出答案。",
      "猜中後依事先約定的規則得分。",
      "換下一位玩家繼續遊戲。"
    ],
    winning: [
      "遊戲進行到約定回合數後結算分數。",
      "累積分數最高的玩家或隊伍獲勝。"
    ],
    tips: [
      "是否允許文字、數字、手勢應在開始前確認。",
      "可以設定簡單、中等、困難三種題目難度。",
      "本版本屬通用派對玩法，不代表特定品牌的完整官方規則。"
    ]
  },
  {
    id: "gomoku",
    name: "五子棋",
    aliases: ["五子連珠", "gomoku"],
    category: "strategy",
    categoryName: "策略遊戲",
    emoji: "⚫",
    color: "#f1e6cd",
    players: "2 人",
    time: "10–30 分鐘",
    difficulty: "簡單",
    description: "黑白雙方輪流落子，率先形成連續五子的玩家獲勝。",
    setup: [
      "準備一張棋盤與黑白兩色棋子。",
      "兩位玩家各選一種顏色，黑棋先手。",
      "本網站採用無禁手、先連成至少五子的自由規則。"
    ],
    rules: [
      "黑白雙方輪流在棋盤空交叉點落下一子。",
      "棋子落下後不可移動。",
      "玩家可從橫向、縱向或斜向形成連線。",
      "持續輪流落子，直到有人達成勝利條件或棋盤無空位。"
    ],
    winning: [
      "先在同一方向形成連續五顆或以上同色棋子的玩家獲勝。",
      "若棋盤已滿而無人獲勝，則視為平局。",
      "競技連珠棋可能另有禁手與開局規則，本示例不適用。"
    ],
    tips: [
      "注意對手是否即將形成連續四子。",
      "建立多方向威脅通常比單一路線更有效。",
      "正式競賽可能使用不同規則。"
    ]
  }
];

// ==========================================
// State
// ==========================================

const STORAGE_KEY = "boardgame-atlas-favorites-v1";

let favorites = loadFavorites();
let currentCategory = "all";
let currentQuery = "";
let favoritesOnly = false;
let activeGame = null;
let activeTab = "setup";

const gameGrid = document.getElementById("gameGrid");
const searchInput = document.getElementById("searchInput");
const resultCount = document.getElementById("resultCount");
const emptyState = document.getElementById("emptyState");
const dialog = document.getElementById("gameDialog");

function loadFavorites() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!Array.isArray(saved)) return [];
    return saved.filter(id => games.some(game => game.id === id));
  } catch {
    return [];
  }
}

function saveFavorites() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  } catch {
    console.warn("無法儲存收藏，可能是瀏覽器限制。");
  }
}

function isFavorite(id) {
  return favorites.includes(id);
}

function toggleFavorite(id) {
  if (isFavorite(id)) {
    favorites = favorites.filter(item => item !== id);
  } else {
    favorites.push(id);
  }

  saveFavorites();
  renderGames();

  if (activeGame && activeGame.id === id) {
    updateDialogFavorite();
  }
}

// ==========================================
// Search and Filtering
// ==========================================

function normalizeText(text) {
  return String(text).toLocaleLowerCase().trim();
}

function getFilteredGames() {
  return games.filter(game => {
    const matchesCategory =
      currentCategory === "all" ||
      game.category === currentCategory;

    const searchable = [
      game.name,
      ...game.aliases,
      game.categoryName,
      game.description
    ].join(" ");

    const matchesQuery =
      !currentQuery ||
      normalizeText(searchable).includes(normalizeText(currentQuery));

    const matchesFavorites =
      !favoritesOnly || isFavorite(game.id);

    return matchesCategory && matchesQuery && matchesFavorites;
  });
}

function renderGames() {
  const filtered = getFilteredGames();

  gameGrid.replaceChildren();

  filtered.forEach(game => {
    const card = document.createElement("article");
    card.className = "game-card";

    const art = document.createElement("div");
    art.className = "game-art";
    art.style.background = game.color;

    const symbol = document.createElement("span");
    symbol.className = "game-symbol";
    symbol.textContent = game.emoji;

    const favorite = document.createElement("button");
    favorite.className = "card-favorite";
    favorite.type = "button";
    favorite.textContent = isFavorite(game.id) ? "♥" : "♡";
    favorite.setAttribute(
      "aria-label",
      `${isFavorite(game.id) ? "取消收藏" : "收藏"}${game.name}`
    );
    favorite.setAttribute("aria-pressed", String(isFavorite(game.id)));

    favorite.addEventListener("click", () => {
      toggleFavorite(game.id);
    });

    art.append(symbol, favorite);

    const info = document.createElement("div");
    info.className = "game-info";

    const category = document.createElement("div");
    category.className = "game-category";
    category.textContent = game.categoryName;

    const title = document.createElement("h3");
    title.textContent = game.name;

    const description = document.createElement("p");
    description.className = "game-description";
    description.textContent = game.description;

    const meta = document.createElement("div");
    meta.className = "game-meta";

    [game.players, game.time, game.difficulty].forEach(value => {
      const span = document.createElement("span");
      span.textContent = value;
      meta.appendChild(span);
    });

    const viewButton = document.createElement("button");
    viewButton.className = "view-rules";
    viewButton.type = "button";
    viewButton.textContent = "查看遊戲規則 →";
    viewButton.addEventListener("click", () => openGame(game.id));

    info.append(category, title, description, meta, viewButton);
    card.append(art, info);
    gameGrid.appendChild(card);
  });

  resultCount.textContent = favoritesOnly
    ? `我的收藏 · 共 ${filtered.length} 款遊戲`
    : `找到 ${filtered.length} 款遊戲`;

  emptyState.hidden = filtered.length !== 0;

  const favoritesNav = document.getElementById("favoritesNav");
  favoritesNav.textContent = favoritesOnly
    ? "♥ 查看全部"
    : `♡ 我的收藏 (${favorites.length})`;

  document.querySelectorAll(".filter-btn").forEach(button => {
    const active = button.dataset.category === currentCategory;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function performSearch() {
  currentQuery = searchInput.value.trim();
  favoritesOnly = false;
  renderGames();
  document.getElementById("explore").scrollIntoView({
    behavior: "smooth"
  });
}

function clearFilters() {
  currentQuery = "";
  currentCategory = "all";
  favoritesOnly = false;
  searchInput.value = "";
  renderGames();
}

// ==========================================
// Game Dialog
// ==========================================

function openGame(id) {
  const game = games.find(item => item.id === id);
  if (!game) return;

  activeGame = game;
  activeTab = "setup";

  document.getElementById("dialogEmoji").textContent = game.emoji;
  document.getElementById("dialogCategory").textContent = game.categoryName;
  document.getElementById("dialogTitle").textContent = game.name;
  document.getElementById("dialogDescription").textContent = game.description;
  document.getElementById("dialogHero").style.background = game.color;

  const meta = document.getElementById("dialogMeta");
  meta.replaceChildren();

  [
    `👥 ${game.players}`,
    `⏱ ${game.time}`,
    `✦ ${game.difficulty}`
  ].forEach(value => {
    const span = document.createElement("span");
    span.textContent = value;
    meta.appendChild(span);
  });

  updateDialogFavorite();
  renderRuleTab();

  if (!dialog.open) {
    dialog.showModal();
  }
}

function renderRuleTab() {
  if (!activeGame) return;

  const ruleContent = document.getElementById("ruleContent");
  ruleContent.replaceChildren();

  const list = document.createElement("ol");

  (activeGame[activeTab] || []).forEach(rule => {
    const item = document.createElement("li");
    item.textContent = rule;
    list.appendChild(item);
  });

  ruleContent.appendChild(list);

  document.querySelectorAll(".rule-tab").forEach(tab => {
    const active = tab.dataset.tab === activeTab;
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-selected", String(active));
    tab.tabIndex = active ? 0 : -1;
  });
}

function updateDialogFavorite() {
  if (!activeGame) return;

  const button = document.getElementById("dialogFavorite");
  const saved = isFavorite(activeGame.id);

  button.textContent = saved ? "♥ 已收藏" : "♡ 加入收藏";
  button.setAttribute("aria-pressed", String(saved));
}

function closeGame() {
  if (dialog.open) dialog.close();
}

// ==========================================
// Event Listeners
// ==========================================

document.getElementById("searchButton").addEventListener(
  "click",
  performSearch
);

searchInput.addEventListener("input", () => {
  currentQuery = searchInput.value.trim();
  favoritesOnly = false;
  renderGames();
});

searchInput.addEventListener("keydown", event => {
  if (event.key === "Enter") performSearch();
});

document.querySelectorAll("[data-search]").forEach(button => {
  button.addEventListener("click", () => {
    searchInput.value = button.dataset.search;
    performSearch();
  });
});

document.querySelectorAll(".filter-btn").forEach(button => {
  button.addEventListener("click", () => {
    currentCategory = button.dataset.category;
    favoritesOnly = false;
    renderGames();
  });
});

document.getElementById("clearButton").addEventListener(
  "click",
  clearFilters
);

document.getElementById("favoritesNav").addEventListener("click", () => {
  favoritesOnly = !favoritesOnly;
  currentCategory = "all";
  currentQuery = "";
  searchInput.value = "";
  renderGames();
  document.getElementById("explore").scrollIntoView({
    behavior: "smooth"
  });
});

document.getElementById("randomButton").addEventListener("click", () => {
  const game = games[Math.floor(Math.random() * games.length)];
  openGame(game.id);
});

document.querySelectorAll(".rule-tab").forEach(tab => {
  tab.addEventListener("click", () => {
    activeTab = tab.dataset.tab;
    renderRuleTab();
  });

  tab.addEventListener("keydown", event => {
    if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;

    event.preventDefault();
    const tabs = [...document.querySelectorAll(".rule-tab")];
    const currentIndex = tabs.indexOf(tab);
    const direction = event.key === "ArrowRight" ? 1 : -1;
    const next = tabs[(currentIndex + direction + tabs.length) % tabs.length];

    activeTab = next.dataset.tab;
    renderRuleTab();
    next.focus();
  });
});

document.getElementById("dialogFavorite").addEventListener("click", () => {
  if (activeGame) toggleFavorite(activeGame.id);
});

document.getElementById("closeDialog").addEventListener(
  "click",
  closeGame
);

document.getElementById("dialogDone").addEventListener(
  "click",
  closeGame
);

dialog.addEventListener("click", event => {
  if (event.target === dialog) closeGame();
});

// Initial rendering
renderGames();
