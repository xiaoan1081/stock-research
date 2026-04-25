// 個股研究追蹤表 — 資料層
// Claude 每次只讀寫這個檔案（及 log.jsonl），不碰 index.html
var STOCKS = {
  meta: {
    updated: "2026/04/25",
    close_date: "2026/04/24",
    memo_updated: "2026/04/25",
    counts: { tw: 2, us: 0, hk: 0 },
    note: "股價來源改為 Fugle MarketData API。2026/04/23 新增 4111 濟生醫藥。"
  },
  watching: [
    {
      ticker: "2756",
      name: "聯發國際",
      mkt: "TWSE",
      currency: "TWD",
      sector: "餐飲／茶飲",
      price: 70.3,
      target: 90,
      upside_pct: 28.0,
      pe: 17.9,
      pb: null,
      conviction: "high",
      catalysts: [
        { event: "美國 UG 展店（30家訂單兌現；LA聖蓋博/西雅圖已開，聖荷西/休士頓等候選中）", date: "2026全年" },
        { event: "台灣100家目標（2025底50家，2026目標翻倍）", date: "2026全年" },
        { event: "現金股利 2元 發放", date: "2026-04-30" },
        { event: "UG品牌聲譽修復進度（2025/12公關事件後續）", date: null },
        { event: "東南亞進一步布局（新加坡/馬來西亞）", date: "2026-H2" }
      ],
      note: "雙品牌輕資產：Sharetea 500+全球門市（北美佔營收過半）+ UG全球55家（台灣50/香港3/美國2）。2025全年EPS 3.93元（+63%YoY），年營收11.72億（+69.6%），均創歷史新高。PE 17.9x（@70.3元）。2026E EPS 5元×20x=目標100元。PR事件+關稅恐慌使股價自高點131元跌46.3%，風險大致反映。追蹤：美國訂單兌現速度、台灣加盟主盈利能力。",
      first_rec: "2026/04/11"
    },
    {
      ticker: "4111",
      name: "濟生醫藥",
      mkt: "TWSE",
      currency: "TWD",
      sector: "製藥／輸液",
      price: 29.25,
      target: 45,
      upside_pct: 53.8,
      pe: 10.6,
      pb: null,
      conviction: "medium",
      catalysts: [
        { event: "健保輸液調漲持續適用（2024-10生效，>20%，2025年同樣適用）", date: "持續" },
        { event: "韓國血液透析藥品認證（2024-Q4送件，等候核准）", date: "2026預期" },
        { event: "泰國抗生素品項新增認證", date: "2025-2026" },
        { event: "2026 Q1財報（確認毛利率是否守穩39%+，永豐搶市影響）", date: "2026-05" },
        { event: "FY2025現金股利1.30元發放（殖利率4.4%）", date: "2026-Q2" }
      ],
      note: "台灣輸液製藥廠。透析液國內市占60%（真實護城河）。FY2025 EPS 2.75元（+48.6%），毛利率39.5%（+5.4ppt），PE 10.6x（產業均值30-39x），估值極低。12個月目標價45元（EPS 3.10×PE 15x），上檔54%。安全邊際：殖利率4.4%（1.3元）+投資性不動產隱性價值每股12.9元。風險：永豐已返市低價搶客、毛利率能否守穩、台幣升值FX損失。流動性極低（日成交約175-580萬NT）。",
      first_rec: "2026/04/23"
    }
  ],
  rumors: []
};
