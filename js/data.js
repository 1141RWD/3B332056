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
    desc: "義大利西西里開心果的極致濃郁體驗。",
    price: "NT$180",
    image: "images/products/macaron_pistachio.jpg",
    specs: { 風味: "堅果", 保存: "冷藏 5 日" },
    flavor_info: "選用西西里島頂級開心果，經過低溫烘焙研磨，保留最純粹的堅果油脂香氣。搭配法國 AOP 認證奶油調製的甘納許，口感如絲綢般滑順，與帶有杏仁香氣的薄脆外殼相得益彰。",
    storage_info: "請置於冷藏保存，最佳賞味期為 5 天。食用前建議於室溫回溫 10-15 分鐘，待內餡稍微軟化後，最能體現堅果內餡的層次感與香氣。"
  },
  {
    id: "p2",
    cat: "macaron",
    name: "玫瑰馬卡龍",
    desc: "大馬士革玫瑰與覆盆子的浪漫邂逅。",
    price: "NT$180",
    image: "images/products/macaron_rose.jpg",
    specs: { 風味: "花香", 保存: "冷藏 5 日" },
    flavor_info: "萃取天然大馬士革玫瑰精華，並在內餡中心埋入新鮮覆盆子果泥。入口先是淡雅的花香，隨之而來的是覆盆子的微酸驚喜，彷彿清晨漫步於巴黎凡爾賽宮的玫瑰園中。",
    storage_info: "建議冷藏保存，最佳賞味期 5 天。由於花香調性細緻，請務必密封保存，避免與冰箱內其他氣味強烈的食物同放，以守護其純淨的芬芳。"
  },
  {
    id: "p3",
    cat: "macaron",
    name: "香草馬卡龍",
    desc: "馬達加斯加波本香草的溫潤經典。",
    price: "NT$170",
    image: "images/products/macaron_vanilla.jpg",
    specs: { 風味: "香草", 保存: "冷藏 5 日" },
    flavor_info: "拒絕人工香料，堅持使用馬達加斯加波本香草莢，切開後可見細密的香草籽。奶香濃郁且帶有微微的蘭姆酒香氣提味，是每一位馬卡龍愛好者必嚐的經典原點。",
    storage_info: "建議冷藏保存，最佳賞味期 5 天。回溫至室溫後，香草的乳脂香氣會更加綻放，口感也會變得柔軟綿密。"
  },
  {
    id: "p4",
    cat: "macaron",
    name: "巧克力馬卡龍",
    desc: "70% 法芙娜黑巧克力的醇厚深度。",
    price: "NT$180",
    image: "images/products/macaron_chocolate.jpg",
    specs: { 風味: "可可", 保存: "冷藏 5 日" },
    flavor_info: "選用 70% Valrhona 法芙娜黑巧克力製作濃厚甘納許，前調帶有細微果酸，中後調轉為深沉的可可苦甜。這是一款專為巧克力狂熱者設計、甜度極低且充滿力量感的作品。",
    storage_info: "建議冷藏保存，最佳賞味期 5 天。巧克力對溫度極為敏感，若離開冷藏過久，內餡可能因乳化作用改變口感，建議取出後儘速享用。"
  },
  {
    id: "p6",
    cat: "chocolate",
    name: "榛果巧克力方塊",
    desc: "皮埃蒙特榛果與絲滑巧克力的酥脆協奏曲。",
    price: "NT$320",
    image: "images/products/chocolate_hazelnut.jpg",
    specs: { 風味: "榛果", 保存: "常溫 14 日" },
    flavor_info: "嚴選義大利皮埃蒙特榛果，經職人手工烘烤至金黃後切碎。外層包覆細緻的牛奶巧克力，內層則是自家製的酥脆榛果帕林內 (Praliné)，每一口都能感受到強烈的堅果撞擊與酥脆層次。",
    storage_info: "建議置於 16-18°C 的陰涼乾燥處保存，避免陽光直射或環境高溫。最佳賞味期為 14 天，請勿放置於過於潮濕的環境以維持巧克力光澤與酥脆度。"
  },
  {
    id: "p8",
    cat: "chocolate",
    name: "黑巧克力禮盒",
    desc: "一場關於世界產區可可的品鑑之旅。",
    price: "NT$680",
    image: "images/products/chocolate_box.jpg",
    specs: { 風味: "可可", 保存: "常溫 14 日" },
    flavor_info: "精選三款單一產區黑巧克力：包含帶有紅漿果香的馬達加斯加產區、具備煙燻木質調的厄瓜多產區，以及經典平衡的迦納產區。讓您在一盒之中，體驗巧克力如紅酒般的豐富變化。",
    storage_info: "最佳保存溫度為 16-18°C。若天氣炎熱需放入冰箱，請先用密封袋包裹以隔絕水氣，取出後請勿立即開封，待回溫至室溫後再享受，以防巧克力表面產生霜白現象。"
  },
  { 
    id: "p9", cat: "pastry", name: "奶油可頌", 
    desc: "蜂巢組織與濃郁乳香的完美結合。", 
    price: "NT$95", image: "images/products/croissant.jpg", 
    specs: { 風味: "奶油", 保存: "當日" },
    flavor_info: "選用法國 AOP Isigny 發酵奶油，採三摺三疊的繁複工法，打造外殼金黃輕薄、內層呈現完美蜂巢狀組織的極致口感。咬下瞬間，滿溢的乳香與清脆的碎裂聲，是早晨最奢華的享受。",
    storage_info: "建議當日食用以享受巔峰狀態。若需隔日享用，請務必密封冷凍；食用前以 180°C 烤箱預熱後回烤 3 分鐘，即可找回剛出爐般的酥脆生命力。"
  },
  { 
    id: "p10", cat: "pastry", name: "杏仁丹麥", 
    desc: "烘烤堅果與焦糖奶油的極致誘惑。", 
    price: "NT$120", image: "images/products/danish_almond.jpg", 
    specs: { 風味: "杏仁", 保存: "當日" },
    flavor_info: "在層次分明的丹麥麵團上，鋪滿由西西里杏仁粉製成的自製杏仁奶油餡（Frangipane），再撒上厚實的美國大杏仁片。高溫烘焙後，堅果香與奶油焦香完美結合，濃郁而不膩口。",
    storage_info: "建議當日食用。若存放至隔日，杏仁餡中的濕氣可能使酥皮變軟，建議使用氣炸鍋或烤箱以 160°C 微烤 2-3 分鐘，可恢復層次分明的口感。"
  },
  { 
    id: "p11", cat: "pastry", name: "巧克力酥卷", 
    desc: "法式經典 Pain au Chocolat，苦甜交織的幸福。", 
    price: "NT$110", image: "images/products/pain_chocolate.jpg", 
    specs: { 風味: "可可", 保存: "當日" },
    flavor_info: "採用與可頌相同的頂級發酵奶油麵團，內部包裹著兩條特製的 Valrhona 耐烤巧克力棒。酥皮的鹹香與巧克力的深邃甜味在口中交融，是法式下午茶的不二之選。",
    storage_info: "強烈建議當日食用。回烤時請特別注意火侯，稍作加熱讓內部的巧克力呈現微融狀態，那是它最迷人的時刻。"
  },
  { 
    id: "p12", cat: "cake", name: "法式檸檬塔", 
    desc: "酸度明亮的黃檸檬凝乳，清爽無負擔。", 
    price: "NT$220", image: "images/products/lemon_tart.jpg", 
    specs: { 風味: "檸檬", 保存: "冷藏 2 日" },
    flavor_info: "選用新鮮 Eureka 檸檬，純手工慢火攪拌熬煮成滑順的檸檬凝乳。不添加多餘澱粉與吉利丁，入口即化，酸度鮮明而尾韻帶著清新的檸檬皮油香，搭配手工捏製的法式脆餅塔皮。",
    storage_info: "必須冷藏保存，最佳賞味期為 2 天。塔皮容易吸收空氣與凝乳中的水氣，請儘快食用以確保酥脆口感。離開冷藏請勿超過 30 分鐘。"
  },
  { 
    id: "p13", cat: "cake", name: "歐培拉歌劇院蛋糕", 
    desc: "七層工藝堆疊出咖啡與巧克力的法式經典。", 
    price: "NT$240", image: "images/products/opera_cake.jpg", 
    specs: { 風味: "咖啡・可可", 保存: "冷藏 2 日" },
    flavor_info: "這款擁有百年歷史的甜點，由咖啡酒糖液浸泡過的 Joconde 杏仁海綿蛋糕、濃縮咖啡奶油霜與法芙娜巧克力甘納許交替堆疊而成。每一口都是咖啡苦香與可可甜美的極致平衡。",
    storage_info: "建議冷藏保存，最佳賞味期為 2 天。食用前建議於室溫放置約 5 分鐘，讓咖啡奶油霜稍微回軟，能讓七層風味在口中更自然地融合。"
  },
  { 
    id: "p14", cat: "cake", name: "香草焦糖布蕾塔", 
    desc: "現炙脆糖與大溪地香草的甜蜜共舞。", 
    price: "NT$230", image: "images/products/creme_brulee_tart.jpg", 
    specs: { 風味: "焦糖", 保存: "冷藏 2 日" },
    flavor_info: "結合了法式烤布蕾的絲滑與布列塔尼酥塔的厚實。內餡注入滿滿的大溪地香草籽，出貨前再進行現點現炙的噴槍加熱，形成一層薄脆如鏡面的焦糖層。",
    storage_info: "強烈建議當日儘早食用。焦糖層在冷藏環境下會因濕氣逐漸液化失去脆度，若焦糖已化開屬正常現象，不影響布蕾本身的香醇風味。"
  }
];