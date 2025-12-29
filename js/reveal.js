/* =====================================================
   ★ Scroll Reveal (捲動淡入特效)
   - 使用 IntersectionObserver 偵測元素是否進入視窗
   ===================================================== */

const revealEls = document.querySelectorAll(".reveal");

const io = new IntersectionObserver(entries => {
  entries.forEach(e => e.isIntersecting && e.target.classList.add("show"));
}, { threshold: 0.15 }); // 當元素出現 15% 時觸發

revealEls.forEach(el => io.observe(el));