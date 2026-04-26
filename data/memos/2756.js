var MEMO_2756 = {
  ticker: "2756", name: "聯發國際",
  conviction: "high",
  header: "TWSE：2756｜產業：新時尚茶飲／連鎖加盟｜主品牌：Sharetea + UG",
  thesis: "▶ 核心邏輯：加盟平台化——從直營餐廳轉型為品牌授權商，輕資產高毛利<br>▶ 雙品牌引擎：Sharetea（全球500+家，北美佔營收過半）＋ UG（2024年創立，2025年底台灣50家）<br>▶ 收益結構：加盟金550萬/店（一次性）＋品牌維護費（持續性）＋原物料供應<br>▶ 2025年驗證：全年EPS 3.93元（年增63%），H2爆發確認加盟金模式奏效<br>▶ 下一催化劑：美國擴店（30家訂單兌現率）是2026年估值關鍵變數",
  financials: [
    { period: "2025 全年", rev: "11.72億", rev_yoy: "+69.6%", eps: "3.93元", note: "歷史新高；UG展店加盟金貢獻顯著，H2 EPS 2.72元爆發（Q3+Q4）" },
    { period: "2025 Q4",   rev: "~3.0億",  rev_yoy: "—",       eps: "1.22元", note: "公關事件影響有限，Q4仍維持高EPS" },
    { period: "2025 Q3",   rev: "~3.6億",  rev_yoy: "—",       eps: "1.50元", note: "年增275%；UG加盟金集中認列" },
    { period: "2025 H1",   rev: "5.03億",  rev_yoy: "+56.1%",  eps: "1.21元", note: "UG展店前期投資壓縮淨利" },
    { period: "2025 Q2",   rev: "3.03億",  rev_yoy: "+84.3%",  eps: "0.68元", note: "淨利年減12.5%（展店成本）；2025-08-11財報公告後股價跌停" },
    { period: "2025 Q1",   rev: "2.00億",  rev_yoy: "+26.8%",  eps: "0.53元", note: "同期新高；UG占比逾1/3；營收結構：原物料45%/直營34%/加盟21%" },
    { period: "2025-04",   rev: "9,884萬", rev_yoy: "+70.5%",  eps: "—",      note: "單月歷史新高（當時）" },
    { period: "2025-11",   rev: "1.11億",  rev_yoy: "+88.5%",  eps: "—",      note: "11月月高，累計前11月10.61億(+68.6%)" },
    { period: "2025-12",   rev: "1.11億",  rev_yoy: "+79.1%",  eps: "—",      note: "美國首店開幕月" },
    { period: "2024 全年", rev: "6.91億",  rev_yoy: "-6.5%",   eps: "2.41元", note: "配息現金股利2.5元；地區別：歐洲32% / 美國19% / 中國16% / 其他亞洲20% / 台灣12%" },
    { period: "2024 Q1-Q3",rev: "5.05億",  rev_yoy: "-12.6%",  eps: "1.93元", note: "UG展店前期行銷+直營成本重壓；2025年預計稅率33.6%" },
    { period: "2023 全年", rev: "7.39億",  rev_yoy: "-6.4%",   eps: "4.56元", note: "配息現金4元+股票2元；Sharetea美國同店銷售年減約兩成（競爭/消費力/人力短缺）" },
    { period: "2022 全年", rev: "7.90億",  rev_yoy: "—",       eps: "5.94元", note: "配息現金4.5元+股票2元；歷史高點EPS；上櫃元年" }
  ],
  balance_sheet: {
    date: "2025-03-31",
    cash_total: "4.97億（現金+約當現金+3個月以上定存）",
    investments: "上市股票8,615仟；公司債30,334仟",
    tax_issue: "111年度所得稅補稅2,502萬（申請復查中）",
    capital: "245,428仟元（資本額）",
    employees: 185  // 截至2024/10/31
  },
  ug_metrics: {
    // 2025年底數據
    // ── 2025年底數據 ──
    stores_tw: 50,          // 截至2025年底
    stores_hk: 3,           // 香港截至2025年底
    stores_us: 2,           // 洛杉磯聖蓋博（12/6開幕）+ 西雅圖
    us_pipeline_orders: 30, // 美國預約加盟訂單超30家
    global_total: 55,       // 2025年底全球門市數
    target_2026_tw: 100,    // 管理層目標台灣突破100店（2026Q3有望達成）
    annual_cups_sold: 1400,       // 萬杯（2025全年）
    hero_product_cups: 550,       // 萬杯（三窨十五茉系列）
    franchise_fee_per_store: 550, // 萬元
    implied_eps_from_ff: 7.8,     // 35間加盟×550萬，凱基估算（2025年初預測）
    // ── 台灣門市實際數據（2025-12-23 法說）──
    tw_franchise_pipeline: 100,  // 台灣加盟訂單超100家（等待開店）
    overseas_pipeline_count: 50, // 海外加盟訂單約50家
    avg_daily_cups: 1500,        // 台灣50家平均日均（更新自1300→1500）
    single_day_record_tw: 4400,  // 中山南西店開幕週四天破4,400杯（2025-12）
    single_day_record_tw_prev: 3500, // 新莊幸福店/彰化彰基店破3,500杯
    min_monthly_rev_per_store: 200,  // 50家中無低於200萬/月
    typical_monthly_rev_range: "200~400萬/月（大部分）",
    peak_monthly_rev: 550,       // 中山南西店單月550萬（2025-12）
    // ── 美國門市 ──
    us_la_opening_day_cups: 2700,  // LA San Gabriel 12/6開幕當日（更新自2800）
    us_la_trial_daily_avg: 1500,   // 試營運前三天日均
    us_seattle_daily_avg: 1000,
    us_plan_annual_new_stores: "每年目標開15~30家",
    us_vancouver_open: "2026-04-01（三個點已選定，區域夥伴合作）",
    // ── 新品牌/技術 ──
    surety_express: "Sharatea 智能次品牌，投資僅需20萬美元即可智能化，2026Q2推出",
    overseas_pipeline: ["香港3家（2025末）", "洛杉磯（2025-12開幕）", "西雅圖（2025末開幕）", "溫哥華（2026-04-01）", "馬來西亞（2026Q2）"],
    // ── 2024年底早期數據（法說會 2024-12-25）──
    stores_tw_2024oct: 8,
    members: 100000,              // 會員人數破10萬（截至2024年底）
    ai_machine_sec_per_cup: 7,    // AI智能茶飲機平均7秒出一杯
    brand_ambassador: "告五人（2025年續任）",
    ai_features: "AI智能茶飲機：IC晶片精控溫度/水流/速度，大數據後台+完整會員系統"
  },
  sharetea: {
    // 2024/10/31 數據
    global_total_2024oct: 465,
    us_stores: 169,             // 北美（含加拿大）
    au_stores: 150,             // 大洋洲（澳洲）
    sea_stores: 93,             // 東南亞（新馬印菲）
    hk_stores: 42,              // 香港
    me_eu_stores: 7,            // 中東+歐洲
    tw_stores: 4,               // 台灣歇腳亭
    // 2025年底最新（法說會 2025-12-23）
    global_total_2025dec: 500,  // 全球超過500家，五大洲15國50城市
    us_stores_2025dec: 160,     // 美國超過160家
    india_stores: 3,            // 印度（截至2025-12），2026年目標10家
    mexico_entry: "2026年進入墨西哥（中南美洲第一站）",
    global_strategy: "北美160+家市佔第一（美國30州）；大洋洲150家；香港42家；印度3家→10家；墨西哥2026進入",
    us_trend: "2024年美國同店銷售年減約兩成（過度競爭/消費力下降/人力短缺）；公司未來重點發展南亞/中美洲，區域代理模式",
    tariff_strategy: "對加盟主調價不超過10%，不提高終端零售價；UG為美國唯一台灣品牌，關稅戰反而受惠"
  },
  other_brands: {
    mamak: {
      full_name: "MAMAK 檔（媽媽檔）",
      desc: "正宗馬來西亞風味餐廳；台灣直營1家（截至2024/10/31）",
      role: "多品牌策略第三支腳；2026Q1升級並推出新餐食計劃"
    },
    food_alliance: {
      full_name: "餐飲大聯盟",
      launch: "2026Q1",
      focus: "新南洋餐食品牌 + 國民美食（滷肉飯/麵食/煎餃）；易複製易海外推廣；結合供應鏈優勢",
      strategy: "S to B to C 平台；透過投資/併購/合作聯盟擴規模；2026年多項併購案"
    }
  },
  major_shareholders: {
    insiders_pct: 53.63
  },
  competitors_reference: [
    { name: "蜜雪冰城", stores: 46479 },
    { name: "古茗",     stores: 9914  },
    { name: "茶百道",   stores: 8409  },
    { name: "霸王茶姬", stores: 6440  },
    { name: "喜茶",     stores: 4545  }
  ],
  competitors: [
    { name: "聯發國際 (2756)", ticker: "2756", market: "TWSE", stores: 55,   pe: 17.9, note: "Sharetea 500+全球 + UG台灣50/香港3/美國2；2025 EPS 3.93元" },
    { name: "六角國際 (2732)", ticker: "2732", market: "TWSE", stores: 1200, pe: null, note: "日出茶太、Chatime；台灣最大手搖飲上市" },
    { name: "霸王茶姬 (CHA)", ticker: "CHA",  market: "Nasdaq", stores: 6440, pe: null, note: "中國新時尚茶飲，2025年赴美IPO；現價$9.83（52週高$41.80，自高點跌76%）；全球擴張中（馬來西亞、泰國等）" },
    { name: "Gong Cha (貢茶)",ticker: null,   market: "未上市", stores: 2100, pe: null, note: "TA Associates持有；探索出售（估值$20億美元，委託JPMorgan）；非IPO計畫" }
  ],
  valuation: {
    method: "PE 法（EPS × 目標PE）",
    bear: { eps: 3.93, pe: 15, price: 59, note: "2026E無成長，PR事件持續拖累" },
    base: { eps: 5.0,  pe: 20, price: 100, note: "2026E EPS 5元（美國3-5店加盟金+台灣規模化），成長型餐飲平台20x" },
    bull: { eps: 6.0,  pe: 25, price: 150, note: "美國加盟訂單30家加速兌現，台灣突破100店，品牌重估" },
    notes: "現價 70.3元（2026-04-07）PE 17.9x，已反映PR折價。<br>2026E 關鍵：美國訂單30家兌現率 × 台灣100店完成率。"
  },
  links: [
    { title: "凱基證券研究報告（2025-05）",           url: "https://www.notion.so/2756-1f2b97d085be803ca84bc0ea407a9767", type: "report" },
    { title: "2025 全年營收新高新聞（Yahoo Finance）", url: "https://tw.stock.yahoo.com/news/%E8%81%AF%E7%99%BC%E5%9C%8B%E9%9A%9B2025%E5%B9%B4%E7%87%9F%E6%94%B6%E5%89%B5%E6%AD%B7%E5%8F%B2%E6%96%B0%E9%AB%98-%E9%9B%99%E5%93%81%E7%89%8C%E5%8A%A0%E9%80%9F%E6%B5%B7%E5%A4%96%E6%93%B4%E5%B1%95-064807233.html", type: "news" },
    { title: "公關事件報導（東森財經）",               url: "https://fnc.ebc.net.tw/fncnews/headline/203044", type: "news" },
    { title: "UG董座北車致意爭議（聯合新聞）",         url: "https://udn.com/news/story/7251/9218250", type: "news" },
    { title: "2025 Q2 財報（2025-08-11）",            url: "https://mops.twse.com.tw/mops/web/index", type: "filing" },
    { title: "Vocus：聯發國際站穩北美市場分析",          url: "https://vocus.cc/article/65d9483dfd89780001ddaa2e", type: "news" },
    { title: "Vocus：聯發國際(2756)價值投資分析 策略2", url: "https://vocus.cc/article/682065d7fd89780001944cee", type: "news" }
  ],
  risks: [
    "美國展店進度不確定：30家訂單能否如期開幕是2026年最大變數",
    "PR事件後遺症：UG品牌形象受損，台灣加盟意願和消費黏著度待觀察",
    "台灣百店目標壓力：展店過快導致單店品質與加盟主獲利下滑",
    "補稅案2,502萬（申請復查中，有一次性損益風險）",
    "關稅/美元匯率影響Sharetea美國業務及UG美國成本",
    "新時尚茶飲市場競爭激烈（霸王茶姬已赴美IPO上市[CHA]，中國品牌大舉海外擴張）",
    "展店前期投資仍可能壓縮部分季度淨利率"
  ],
  timeline: [
    { date: "2026-04-30", event: "現金股利2元預計發放日（2025年配息，殖利率約2.8%@70.3元）。" },
    { date: "2026-04-11", event: "股價70.3元（2026-04-07收盤）。自高點131元跌46.3%，PR事件+關稅恐慌雙重壓制。PE 17.9x（基於2025全年EPS 3.93元）。" },
    { date: "2026-Q1",    event: "Q4 2025 財報公告：EPS 1.22元；全年EPS 3.93元（年增63%），年營收11.72億（年增69.6%），均創歷史新高。" },
    { date: "2026-計劃",  event: "2026擴張計劃：台灣UG 100店（2026Q3目標）；溫哥華2026-04-01；馬來西亞2026Q2；Surety Express次品牌2026Q2；餐飲大聯盟2026Q1；多項併購案。" },
    { date: "2025-12-06", event: "UG美國洛杉磯聖蓋博首店開幕，開幕日銷售近2,800杯。西雅圖店同期開幕，日均銷售超千杯。美國持有預約加盟訂單超30家。" },
    { date: "2025-12-23", event: "法說會（陳聖中海外事業總經理主講）：中山南西店有4天銷售4,400+杯；台灣50家無單店月收低於200萬；加盟訂單破100家；全球Sharatea 500+家；印度已3家；2026年將是餐食/併購元年。" },
    { date: "2025-12",    event: "公關事件：UG董座鄭凱隆於台北市重大隨機傷人案發地致意，引發「藉機行銷」批評。股價一度重挫7%。公司致歉，股價逐步回穩。" },
    { date: "2025-12",    event: "2025年底：UG全球55家（台灣50家 + 香港3家 + 美國2家）；2025全年營收11.72億（+69.6%）創歷史新高；年銷售1,400萬杯，三窨十五茉系列超550萬杯。" },
    { date: "2025-11",    event: "月營收1.11億（+88.5%），累計前11月10.61億（+68.6%）。" },
    { date: "2025-08-12", event: "告五人續任UG代言人記者會。UG喊出3年500家目標（每月至少13家）。" },
    { date: "2025-08-11", event: "Q2財報：營收3.03億（+84.3%），淨利0.17億（-12.5%），H1 EPS 1.21元。股價跌停（市場失望前期淨利下滑，忽略營收高增速）。" },
    { date: "2025-06-11", event: "法說會Q&A。" },
    { date: "2025-05-09", event: "Q1財報：營收2.00億（+26.8%），EPS 0.53元。4月營收9,884萬（+70.5%，當時月高）。" },
    { date: "2025-05",    event: "香港首店開幕（朗豪坊），AI製茶設備，愛己理念。" },
    { date: "2025-04",    event: "美國三場Sharetea加盟商大會，七大有感計劃。30位加盟主表態引進UG。" },
    { date: "2024",       event: "創立UG新時尚茶飲品牌。全年EPS 2.41元，配發現金股利2.5元。" }
  ],
  dividend_history: [
    { period: "2025全年（預計）",  cash: 2.0,  stock: 0,   paid: "2026-04-30（預計）" },
    { period: "2024Q1~Q2",        cash: 1.2,  stock: 0,   paid: "2024-09-11" },
    { period: "2023Q3~Q4",        cash: 2.5,  stock: 0,   paid: "2024-04-26" },
    { period: "2023Q1~Q2",        cash: 2.0,  stock: 2.0, paid: "2023-09-28" },
    { period: "2022Q3~Q4",        cash: 2.5,  stock: 0,   paid: "2023-05-04" },
    { period: "2022Q1~Q2",        cash: 2.0,  stock: 2.0, paid: "2022-11-11" },
    { period: "2021Q3~Q4",        cash: 2.0,  stock: 0,   paid: "2022-05-13" }
  ],
  management: {
    chairman: "鄭凱隆",
    ceo: "賴柏宇",
    overseas_gm: "陳聖中（海外事業總經理，2025年12月法說主講人）",
    cfo: "林哲仁（財務副總經理）"
  },
  dividend_policy: "8~9成以現金股利配發，屬高股息公司",
  revenue_structure: {
    direct_store: "25%",
    materials: "40~45%",
    franchise_fee: "~30%"
  },
  research_notes: "【當前研判 2026-04-11】\nEPS 3.93元（年增63%），H2爆發（Q3 1.50+Q4 1.22）確認加盟金模式奏效。股價70.3元（PE 17.9x）已反映PR折價——若美國選址加速兌現且PR後遺症消退，上行空間顯著。\n\n【2026年關鍵觀察點】\n① 美國30家訂單兌現率（最大變數）\n② Q1月營收趨勢（PR退燒速度）\n③ 台灣加盟主滿意度與展店品質\n\n【法說會數據（2025-12-23 陳聖中）】\n台灣50家全部月收>200萬，中山南西店單日4,400+杯，加盟訂單破100家。Sharatea全球500+家（印度3家，2026年進墨西哥）。Surety Express次品牌2026Q2，餐飲大聯盟2026Q1。股利政策8~9成現金。\n\n【財務補充（凱基座談 2025-04-29）】\n地區別：歐洲32%、美國19%、中國16%。原物料毛利30%，關稅風險約-5%，稅率33.6%。凱基試算35間加盟×550萬≈EPS 7.8元，2025未達，反映直營/加盟混合結構；H2加盟金確實驅動EPS爆發，模型方向正確。",
  notion_url: "https://www.notion.so/2756-1f2b97d085be803ca84bc0ea407a9767",
  chart_data: []
};
