/* =====================================================
   ★ Modal Logic (彈出視窗邏輯)
   - 負責顯示產品詳細資訊 (快速查看)
   ===================================================== */

const modal = document.getElementById("modal");
const modalMedia = document.getElementById("modalMedia");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalSpecs = document.getElementById("modalSpecs");
const modalClose = document.getElementById("modalClose");
const modalAddBtn = modal ? modal.querySelector(".btn.primary") : null;

// 開啟視窗
function openModal(item) {
  // 填入資料
  modalMedia.style.backgroundImage = `url('${item.image}')`;
  modalTitle.textContent = item.name;
  modalDesc.textContent = item.desc;
  
  // 生成規格表 HTML
  modalSpecs.innerHTML = Object.entries(item.specs || {})
    .map(([k, v]) => `<div><strong>${k}</strong><br>${v}</div>`)
    .join("");

  // 改進：綁定 Modal 中的「加入購物袋」按鈕
  if (modalAddBtn) {
    modalAddBtn.onclick = () => {
      if (window.addToCart) {
        window.addToCart(item.id);
        closeModal(); // 加入後關閉 Modal，讓使用者看到滑出的購物車
      }
    };
  }
    
  // 顯示視窗並鎖定背景捲動
  modal.classList.add("show");
  document.body.style.overflow = "hidden";
}

// 關閉視窗
function closeModal() {
  modal.classList.remove("show");
  document.body.style.overflow = "";
}

// 事件：點擊產品卡片上的「快速查看」按鈕 (使用事件委派)
if (typeof gridEl !== 'undefined' && gridEl) gridEl.onclick = e => {
  const btn = e.target.closest(".quick");
  if (!btn) return;
  const p = products.find(x => x.id === btn.dataset.id);
  if (p) openModal(p);
};

// 事件：點擊 Hero 區塊的「查看詳情」按鈕
const heroQuickBtn = document.getElementById("heroQuick");
if (heroQuickBtn) heroQuickBtn.onclick = () => openModal(heroItems[heroIndex]);

// 事件：關閉按鈕、點擊遮罩背景、按 ESC 鍵
modalClose.onclick = closeModal;
modal.onclick = e => e.target === modal && closeModal();
window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") closeModal();
});