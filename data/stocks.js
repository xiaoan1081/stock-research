// 個股研究追蹤表 — 資料層
// Claude 每次只讀寫這個檔案（及 log.jsonl），不碰 index.html
var STOCKS = {
  meta: {
    updated: "2026/04/11",
    close_date: "2026/04/07",
    memo_updated: "2026/04/11",
    counts: { tw: 1, us: 0, hk: 0 },
    note: "股價來源改為 Fugle MarketData API。"
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
    }
  ],
  rumors: []
};
