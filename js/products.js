/* =====================================================
   ★ Product & Category Logic (產品與分類邏輯)
   - 負責：分類網格渲染、產品列表渲染、篩選與搜尋
   ===================================================== */

// DOM 元素
const catGrid = document.getElementById("catGrid");
const tabsEl = document.getElementById("tabs");
const gridEl = document.getElementById("productGrid");
const qEl = document.getElementById("q");

// 狀態變數
const urlParams = new URLSearchParams(window.location.search);
// 優化：優先從網址參數讀取分類 (例如 featured.html?cat=chocolate)，若無則預設 "all"
let activeCat = urlParams.get('cat') || "all";
let query = "";        // 當前搜尋關鍵字

// 1. 渲染首頁分類網格
function renderCategories() {
  if (!catGrid) return;
  catGrid.innerHTML = categories.map(c => `
    <div class="cat" data-cat="${c.id}">
      <div class="media" style="background-image:url('${c.image}'); background-size: cover; background-position: center;"></div>
      <div class="label"><strong>${c.name}</strong></div>
    </div>
  `).join("");
}

// 2. 渲染篩選標籤 (Tabs)
function renderTabs() {
  if (!tabsEl) return;
  const list = [{ id: "all", name: "全部" }, ...categories];
  tabsEl.innerHTML = list.map(t => `
    <button class="tab ${t.id === activeCat ? "active" : ""}" data-tab="${t.id}">
      ${t.name}
    </button>
  `).join("");
}

// 3. 渲染產品列表 (核心功能)
function renderProducts() {
  if (!gridEl) return;
  // 根據分類與搜尋關鍵字過濾產品
  const list = products.filter(p =>
    (activeCat === "all" || p.cat === activeCat) &&
    // 優化：搜尋時忽略大小寫 (toLowerCase)
    (!query || (p.name + p.desc).toLowerCase().includes(query.toLowerCase()))
  );

  // 生成 HTML
  gridEl.innerHTML = list.map(p => `
    <div class="card">
      <div class="media" style="background-image:url('${p.image}'); background-size: cover; background-position: center;"></div>
      <div class="pad">
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <div class="row">
          <span class="price">${p.price}</span>
          <button class="quick" data-id="${p.id}">快速查看</button>
        </div>
      </div>
    </div>
  `).join("");
}

// 事件：點擊篩選標籤
if (tabsEl) tabsEl.onclick = e => {
  if (!e.target.dataset.tab) return;
  activeCat = e.target.dataset.tab;
  renderTabs();
  renderProducts();
};

// 事件：搜尋框輸入 (即時搜尋)
if (qEl) qEl.oninput = e => {
  query = e.target.value.trim();
  renderProducts();
};

// 事件：點擊首頁分類網格 -> 跳轉並篩選
if (catGrid) catGrid.onclick = e => {
  const c = e.target.closest(".cat");
  if (!c) return;
  activeCat = c.dataset.cat;
  
  // 如果當前頁面有產品列表，則篩選並捲動；否則跳轉到精選商品頁
  const featuredSection = document.getElementById("featured");
  if (featuredSection) {
    renderTabs();
    renderProducts();
    featuredSection.scrollIntoView({ behavior: "smooth" });
  } else {
    // 優化：跳轉時將當前選中的分類帶入網址參數
    window.location.href = `featured.html?cat=${activeCat}`;
  }
};