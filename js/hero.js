/* =====================================================
   ★ Hero Slider Logic (主視覺輪播邏輯)
   - 負責首頁大圖的渲染與切換
   ===================================================== */

// DOM 元素選取
const slidesEl = document.getElementById("slides");
const dotsEl = document.getElementById("dots");
const heroEyebrowEl = document.getElementById("heroEyebrow");
const heroTitleEl = document.getElementById("heroTitle");
const heroDescEl = document.getElementById("heroDesc");

// 當前輪播索引 (全域變數，供 Modal 使用)
let heroIndex = 0;

// 渲染輪播結構 (圖片與圓點)
function renderHero() {
  if (!slidesEl) return; // 防止在沒有 Hero 的頁面報錯
  slidesEl.innerHTML = heroItems.map((it, i) => `
    <div class="slide ${i === 0 ? "active" : ""}">
      <div class="slide-media" style="background-image:url('${it.image}')"></div>
    </div>
  `).join("");

  dotsEl.innerHTML = heroItems.map((_, i) => `
    <div class="dot ${i === 0 ? "active" : ""}" data-dot="${i}"></div>
  `).join("");

  // 初始化文字內容
  setHero(0);
}

// 切換輪播函式
function setHero(i) {
  if (!slidesEl) return;
  // 計算索引 (支援無限循環)
  heroIndex = (i + heroItems.length) % heroItems.length;

  // 更新圖片與圓點的 active 狀態
  slidesEl.querySelectorAll(".slide").forEach((s, idx) =>
    s.classList.toggle("active", idx === heroIndex)
  );
  dotsEl.querySelectorAll(".dot").forEach((d, idx) =>
    d.classList.toggle("active", idx === heroIndex)
  );

  // 更新左側文字資訊
  const it = heroItems[heroIndex];
  heroEyebrowEl.textContent = it.eyebrow;
  heroTitleEl.textContent = it.title;
  heroDescEl.textContent = it.desc;
}

// 事件監聽：上一張、下一張、點擊圓點
const prevBtn = document.getElementById("prev");
if (prevBtn) prevBtn.onclick = () => setHero(heroIndex - 1);
const nextBtn = document.getElementById("next");
if (nextBtn) nextBtn.onclick = () => setHero(heroIndex + 1);
if (dotsEl) dotsEl.onclick = e => e.target.dataset.dot && setHero(+e.target.dataset.dot);