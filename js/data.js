/* =====================================================
   ★ 資料中心 (Data Source)
   - 包含：輪播圖資料、分類定義、產品清單
   - 這裡的變數為全域變數，供其他 JS 檔案使用
   ===================================================== */

// 1. Hero 輪播資料
const heroItems = [
  {
    eyebrow: "主廚精選 Signature",
    title: "玫瑰荔枝覆盆子蛋糕",
    desc: "以玫瑰香氣為主調，融合荔枝與覆盆子果香，口感輕盈細緻。",
    image: "images/hero/hero1.jpg",
    specs: { 風味: "花香・果香", 保存: "冷藏 2 日", 建議: "節慶禮贈" }
  },
  {
    eyebrow: "季節限定 Seasonal",
    title: "馬卡龍綜合禮盒",
    desc: "外殼微脆、內餡柔滑，層次分明，適合送禮。",
    image: "images/hero/hero2.jpg",
    specs: { 風味: "杏仁・奶油", 保存: "冷藏 5 日", 建議: "送禮首選" }
  },
  {
    eyebrow: "人氣首選 Popular",
    title: "開心果馬卡龍禮盒",
    desc: "濃郁堅果香氣，口感細緻。",
    image: "images/hero/hero4.jpg",
    specs: { 風味: "堅果", 保存: "冷藏 5 日", 建議: "下午茶" }
  },
  {
    eyebrow: "節慶推薦 Festive",
    title: "檸檬塔六入組",
    desc: "酸甜清爽，適合聚會分享。",
    image: "images/hero/hero5.jpg",
    specs: { 風味: "檸檬", 保存: "冷藏 2 日", 建議: "聚會甜點" }
  },
  {
    eyebrow: "每日現烤 Fresh",
    title: "奶油可頌",
    desc: "層層酥脆，奶油香氣明亮。",
    image: "images/hero/hero6.jpg",
    specs: { 風味: "奶油", 保存: "當日", 建議: "早餐・下午茶" }
  }
];

// 2. 商品分類定義
const categories = [
  { id: "macaron", name: "馬卡龍", image: "images/categories/macarons.jpg" },
  { id: "chocolate", name: "巧克力", image: "images/categories/chocolate.jpg" },
  { id: "pastry", name: "酥點", image: "images/categories/pastries.jpg" },
  { id: "cake", name: "蛋糕", image: "images/categories/cakes.jpg" }
];

// 3. 所有產品清單
const products = [
  {
    id: "p1",
    cat: "macaron",
    name: "開心果馬卡龍",
    desc: "濃郁開心果香氣，甜度平衡。",
    price: "NT$180",
    image: "images/products/macaron_pistachio.jpg",
    specs: { 風味: "堅果", 保存: "冷藏 5 日" }
  },
  {
    id: "p2",
    cat: "macaron",
    name: "玫瑰馬卡龍",
    desc: "淡雅花香，口感清新。",
    price: "NT$180",
    image: "images/products/macaron_rose.jpg",
    specs: { 風味: "花香", 保存: "冷藏 5 日" }
  },
  {
    id: "p3",
    cat: "macaron",
    name: "香草馬卡龍",
    desc: "經典香草風味，溫潤不膩。",
    price: "NT$170",
    image: "images/products/macaron_vanilla.jpg",
    specs: { 風味: "香草", 保存: "冷藏 5 日" }
  },
  {
    id: "p4",
    cat: "macaron",
    name: "巧克力馬卡龍",
    desc: "可可香氣濃厚。",
    price: "NT$180",
    image: "images/products/macaron_chocolate.jpg",
    specs: { 風味: "可可", 保存: "冷藏 5 日" }
  },
  {
    id: "p6",
    cat: "chocolate",
    name: "榛果巧克力方塊",
    desc: "榛果與可可的完美結合。",
    price: "NT$320",
    image: "images/products/chocolate_hazelnut.jpg",
    specs: { 風味: "榛果", 保存: "常溫 14 日" }
  },
  {
    id: "p8",
    cat: "chocolate",
    name: "黑巧克力禮盒",
    desc: "多款風味組合，送禮首選。",
    price: "NT$680",
    image: "images/products/chocolate_box.jpg",
    specs: { 風味: "可可", 保存: "常溫 14 日" }
  },
  // ... (其餘產品資料保持不變，為節省篇幅省略，實際檔案請保留完整資料)
  { id: "p9", cat: "pastry", name: "奶油可頌", desc: "層層酥脆，奶油香氣明亮。", price: "NT$95", image: "images/products/croissant.jpg", specs: { 風味: "奶油", 保存: "當日" } },
  { id: "p10", cat: "pastry", name: "杏仁丹麥", desc: "杏仁奶霜搭配酥脆外皮。", price: "NT$120", image: "images/products/danish_almond.jpg", specs: { 風味: "杏仁", 保存: "當日" } },
  { id: "p11", cat: "pastry", name: "巧克力酥卷", desc: "可可香氣濃郁。", price: "NT$110", image: "images/products/pain_chocolate.jpg", specs: { 風味: "可可", 保存: "當日" } },
  { id: "p12", cat: "cake", name: "檸檬塔", desc: "酸度清晰，尾韻乾淨。", price: "NT$220", image: "images/products/lemon_tart.jpg", specs: { 風味: "檸檬", 保存: "冷藏 2 日" } },
  { id: "p13", cat: "cake", name: "歌劇院蛋糕", desc: "咖啡與可可層次分明。", price: "NT$240", image: "images/products/opera_cake.jpg", specs: { 風味: "咖啡・可可", 保存: "冷藏 2 日" } },
  { id: "p14", cat: "cake", name: "焦糖布蕾塔", desc: "焦糖香氣濃厚，口感滑順。", price: "NT$230", image: "images/products/creme_brulee_tart.jpg", specs: { 風味: "焦糖", 保存: "冷藏 2 日" } }
];