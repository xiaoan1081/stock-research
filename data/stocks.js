// 個股研究追蹤表 — 資料層
// Claude 每次只讀寫這個檔案（及 log.jsonl），不碰 index.html
var STOCKS = {
  meta: {
    updated: "2026/04/11",
    close_date: "2026/04/07",
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
      pe: 17.5,
      pb: null,
      conviction: "high",
      catalysts: [
        { event: "美國 UG 展店（2026目標15家以上，西雅圖/LA月均15萬美元）", date: "2026全年" },
        { event: "東南亞首店（新加坡/馬來西亞）", date: "2026-Q2~Q3" },
        { event: "Q4 2025 財報（確認全年EPS）", date: "2026-Q1" },
        { event: "現金股利 2元 發放", date: "2026-04-30" },
        { event: "UG品牌聲譽修復進度（2025/12公關事件後續）", date: null }
      ],
      note: "雙品牌輕資產：Sharetea 500+門市（北美佔營收過半）+ UG台灣42家。加盟金高毛利模式。2025前三季EPS 2.71元（年增40%），2026E保守估4.5元×20x PE=目標90元。PR事件已使股價自高點跌46.8%，PR風險大致反映。追蹤：抵制退燒速度、美國選址進度。",
      first_rec: "2026/04/11"
    }
  ],
  rumors: []
};
