// 個股研究追蹤表 — 資料層
// Claude 每次只讀寫這個檔案（及 log.jsonl），不碰 index.html
var STOCKS = {
  meta: {
    updated: "2026/04/27",
    close_date: "2026/04/25",
    memo_updated: "2026/04/27",
    counts: { tw: 4, us: 1, hk: 0 },
    note: "2026/04/27 新增系統電(5309)觀察；新增 CURV Torrid Holdings（美股）。"
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
    },
    {
      ticker: "2483",
      name: "百容電子",
      mkt: "TWSE",
      currency: "TWD",
      sector: "電子零組件",
      price: 21.45,
      target: null,
      upside_pct: null,
      pe: null,
      pb: 0.90,
      conviction: "low",
      catalysts: [
        { event: "月營收連續3個月站穩1.7億（本業轉正關鍵門檻）", date: "持續追蹤" },
        { event: "2025全年財報：EPS是否站上0.5元", date: "2026-04底" },
        { event: "Q1財報：本業營益率是否由負轉正", date: "2026-05底" },
        { event: "Q2法說：車用訂單佔半導體業務比重", date: "2026-05底" },
        { event: "毛利率回升至13%+（脫離10–11%谷底）", date: "每季財報" }
      ],
      note: "台中新廠（27.51億）折舊重壓（年~1.4億），本業仍虧（營益率-4.8%）。2026/1月營收1.80億（41個月新高），半導體佔比超50%，車用混動訂單開始出貨。本淨比0.9（淨值23.46元）有下檔支撐，但本業轉正前觀察優先。警示：經理人蔡槐仁幾近清倉（312→12張）。",
      first_rec: "2026/04/20"
    },
    {
      ticker: "5309",
      name: "系統電",
      mkt: "TWSE",
      currency: "TWD",
      sector: "電子/能源系統",
      price: 62.3,
      target: 62,
      upside_pct: -0.5,
      pe: null,
      pb: null,
      conviction: "low",
      catalysts: [
        { event: "4-5月月營收是否突破3.5億（BBU放量關鍵驗證節點）", date: "2026-05/06" },
        { event: "Q2法說會：BBU能源子公司營收揭露 + 毛利率是否突破25%", date: "2026-08" },
        { event: "德州Plano廠第二條BBU產線啟用公告", date: "2026-H2" },
        { event: "集保千張大戶回升至15人以上（主力回補訊號）", date: "每週" },
        { event: "新CSP客戶認證完成公告", date: "待定" }
      ],
      note: "轉型三引擎（TPMS→BBU/IPC/能源）。2025 EPS 0.27元（本業虧0.17億，業外損益支撐）。Q1 2026月營收年減1.15%，對「全年40億+30%指引」發出第一次否定。籌碼：大戶2025/09高點74.7元出貨，股東人數+25.7%散戶化，即便和碩55元私募大戶仍未回補。機率加權期望值-0.1%，現階段觀望。進場條件：55元以下+月營收年增10%+。",
      first_rec: "2026/04/27"
    },
    {
      ticker: "CURV",
      name: "Torrid Holdings",
      mkt: "NYSE",
      currency: "USD",
      sector: "大尺碼女裝零售",
      price: 1.83,
      target: 2.50,
      upside_pct: 36.6,
      pe: null,
      pb: null,
      conviction: "medium",
      catalysts: [
        { event: "Q1 FY2026 業績（最弱季）：EBITDA 指引 $14-18M；再次超預期可觸發空頭回補", date: "2026-06-04" },
        { event: "FINRA 4/15 Short Interest 公布：確認 4 月回落空頭是否回補", date: "2026-05初" },
        { event: "機構 13F Q1 2026 申報（Millennium/Nomura/BofA 是否續增）", date: "2026-05-15" },
        { event: "FY2026 Q3 鞋類業務全面重啟（消除 -260bps 同店拖累，轉為正貢獻）", date: "2026-09" },
        { event: "Sycamore Partners 任何 Form 4 申報（EDGAR 監控）", date: "持續" }
      ],
      note: "北美最大大尺碼女裝品牌（size 10-30），市占 ~62%，9% 退貨率護城河。FY2026 轉型三引擎：門店優化($40M省）+ 子品牌$70M→$110M + Q3鞋類重啟。Sycamore 控股 56.9%（最大隱患），頂級機構 2025 Q3 低點建倉。4/25 修正：空頭持倉 3/31 達 4.3% 仍在累積，CFO/CCO 已於 $1.98-2.06 主動減持。EV/EBITDA 3.7x（同業 8-10x）嚴重低估，但短期下行風險不對稱。",
      first_rec: "2026/04/27"
    }
  ],
  rumors: []
};
