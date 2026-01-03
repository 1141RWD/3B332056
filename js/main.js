/* =====================================================
   ★ Main Entry (入口檔案)
   - 負責初始化全站功能與靜態資源設定
===================================================== */

// 1. 設定靜態背景圖片
const introMedia = document.getElementById("introMedia");
if (introMedia) {
  introMedia.style.backgroundImage = "url('images/products/creme_brulee_tart.jpg')";
  introMedia.style.backgroundSize = "cover";
  introMedia.style.backgroundPosition = "center";
}

const storyMedia = document.getElementById("storyMedia");
if (storyMedia) {
  storyMedia.style.backgroundImage = "url('images/story/atl_m_170011939_979.jpg')";
  // 樣式已移至 CSS (RWD 處理)
}

// 2. 初始化各個模組
if (typeof renderHero === 'function') renderHero();
if (typeof renderCategories === 'function') renderCategories();
if (typeof renderTabs === 'function') renderTabs();
if (typeof renderProducts === 'function') renderProducts();

// 3. 綁定全域搜尋按鈕 (Header 上的搜尋圖示)
const btnSearch = document.getElementById("btnSearch");
if (btnSearch) btnSearch.onclick = () => {
  const featured = document.getElementById("featured");
  if (featured) {
    featured.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => qEl && qEl.focus(), 300);
  } else {
    window.location.href = "featured.html";
  }
};

// 4. 全域攔截「快速查看」按鈕，改為跳轉至新頁面 (product.html)
document.addEventListener('click', (e) => {
  // 檢查點擊的目標是否為按鈕 (或按鈕內部的元素)
  const btn = e.target.closest('button');
  if (!btn) return;

  // 判斷是否為「快速查看」按鈕 (根據文字內容或 ID)
  const isQuickView = btn.innerText.includes('快速查看') || btn.id === 'heroQuick';
  
  if (isQuickView) {
    let productId = btn.dataset.id;

    // 情況 A: 首頁 Hero 區塊的按鈕 (通常沒有 data-id，需從標題判斷)
    if (!productId && btn.id === 'heroQuick') {
      const titleEl = document.getElementById('heroTitle');
      if (titleEl && typeof products !== 'undefined') {
        const title = titleEl.innerText.trim();
        const product = products.find(p => p.name === title);
        if (product) productId = product.id;
      }
    } 
    // 情況 B: 商品列表中的按鈕 (嘗試從按鈕本身或父層卡片獲取 data-id)
    else if (!productId) {
      const card = btn.closest('.product-card') || btn.closest('.card'); // 假設卡片有 class
      if (card && card.dataset.id) productId = card.dataset.id;
    }

    // 如果成功獲取 ID，則執行跳轉
    if (productId) {
      e.preventDefault();   // 阻止原本的行為 (例如開啟 Modal)
      e.stopPropagation();  // 停止事件冒泡
      window.location.href = `product.html?id=${productId}`;
    }
  }
}, true); // 使用 capture (捕獲) 階段，確保比原本的事件先執行

// 5. 購物車側邊欄邏輯
const btnCart = document.getElementById("btnCart");
const cartDrawer = document.getElementById("cartDrawer");
const cartOverlay = document.getElementById("cartOverlay");
const closeCart = document.getElementById("closeCart");

function toggleCart() {
  if (cartDrawer && cartOverlay) {
    const isOpen = cartDrawer.classList.toggle("open");
    cartOverlay.classList.toggle("open");
    document.body.style.overflow = isOpen ? "hidden" : "";
  }
}

if (btnCart) btnCart.onclick = toggleCart;
if (closeCart) closeCart.onclick = toggleCart;
if (cartOverlay) cartOverlay.onclick = toggleCart;

/* =====================================================
   ★ 購物車邏輯 (Cart Logic)
   ===================================================== */

// 讀取已儲存的購物車資料，若無則為空陣列
let cart = JSON.parse(localStorage.getItem("md_cart")) || [];

// 儲存購物車並更新畫面
function saveCart() {
  localStorage.setItem("md_cart", JSON.stringify(cart));
  renderCart();
}

// 加入購物車
function addToCart(id, quantity = 1) {
  if (typeof products === "undefined") return;
  // 確保 ID 轉為字串進行比較，避免型別不一致的問題
  const targetId = String(id);
  const product = products.find(p => String(p.id) === targetId);
  if (!product) return;

  // 檢查購物車內是否已有此商品
  const existing = cart.find(item => String(item.id) === targetId);
  if (existing) {
    existing.qty += quantity; // 有則增加指定數量
  } else {
    // 無則新增項目
    cart.push({
      id: product.id, // 保持原始資料中的 ID
      name: product.name,
      price: product.price,
      image: product.image,
      qty :1,
      qty: quantity // 有則增加指定數量
    });
  }

  saveCart();
  
  // 自動打開購物車側邊欄
  const cartDrawer = document.getElementById("cartDrawer");
  if (cartDrawer && !cartDrawer.classList.contains("open")) {
    toggleCart();
  }
}

// 移除商品
function removeFromCart(id) {
  const targetId = String(id);
  cart = cart.filter(item => String(item.id) !== targetId);
  saveCart();
}

// 渲染購物車內容
function renderCart() {
  const cartBody = document.querySelector(".cart-body");
  if (!cartBody) return;

  if (cart.length === 0) {
    cartBody.innerHTML = '<p style="color: #666; text-align: center; margin-top: 2rem;">您的購物車目前是空的。</p>';
    return;
  }

  cartBody.innerHTML = cart.map(item => `
    <div class="cart-item" style="display:flex; gap:1rem; margin-bottom:1.5rem; align-items:center;">
      <img src="${item.image}" style="width:70px; height:70px; object-fit:cover; border-radius:4px;">
      <div style="flex:1;">
        <h4 style="margin:0 0 0.25rem; font-size:1rem;">${item.name}</h4>
        <div style="font-size:0.9rem; color:#666;">${item.price} × ${item.qty}</div>
      </div>
      <button onclick="removeFromCart('${item.id}')" style="border:none; background:none; cursor:pointer; opacity:0.5; padding:0.5rem;" title="移除">✕</button>
    </div>
  `).join("");
}

// 初始化：頁面載入時渲染一次購物車
renderCart();

// 將函式掛載到 window，讓 HTML 中的 onclick 可以呼叫
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;

/* =====================================================
   ★ Scroll Reveal (捲動淡入特效)
   - 整合自 reveal.js，負責讓元素捲動進入視窗時浮現
   ===================================================== */
const revealEls = document.querySelectorAll(".reveal");
const io = new IntersectionObserver(entries => {
  entries.forEach(e => e.isIntersecting && e.target.classList.add("show"));
}, { threshold: 0.15 }); // 當元素出現 15% 時觸發

revealEls.forEach(el => io.observe(el));