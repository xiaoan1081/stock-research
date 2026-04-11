// 個股研究追蹤表 — 資料層
// Claude 每次只讀寫這個檔案（及 log.jsonl），不碰 index.html
var STOCKS = {
  meta: {
    updated: "2026/04/11",
    close_date: "2026/04/11",
    counts: { tw: 1, us: 0, hk: 0 },
    note: "建立個股研究追蹤表，首筆：2756 聯發國際。"
  },
  watching: [
    {
      ticker: "2756",
      name: "聯發國際",
      mkt: "TWSE",
      currency: "TWD",
      sector: "餐飲／茶飲",
      price: null,
      target: null,
      upside_pct: null,
      pe: null,
      pb: null,
      conviction: "high",
      catalysts: [
        { event: "UG展店進度（目標年底50家）", date: null },
        { event: "Q3 2025財報", date: null }
      ],
      note: "UG品牌快速展店，加盟金潛在EPS 7.8元。美/港/新加坡首店籌備中。",
      first_rec: "2026/04/11"
    }
  ],
  rumors: []
};
