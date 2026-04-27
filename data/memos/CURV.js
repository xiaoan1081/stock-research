var MEMO_CURV = {
  ticker: "CURV", name: "Torrid Holdings",
  conviction: "medium",
  header: "NYSE：CURV｜產業：大尺碼女裝零售｜北美市占 ~62%",
  thesis: "▶ 核心邏輯：北美最大大尺碼女裝直營品牌（size 10-30），約 70% 美國女性穿 size 14 以上，結構性供需失衡構成護城河；9% 退貨率（業界 30-40%）源自從大尺碼原型版型設計，難以複製<br>▶ 轉型三引擎：① 門店優化 85% 完成（FY2025 關 151 家，FY2026 再省 $40M EBITDA）；② 子品牌 $70M→$110M（+60%，Festi / Nightfall / LoveSick）；③ 鞋類業務 Q3 全面重啟（消除 -260bps 同店拖累）<br>▶ Q4 FY2025 財報（3/19）多年來第一次全面超預期：EPS -$0.08（vs 預期 -$0.125，超 36%）；FY2026 EBITDA 指引 $65-75M 優於市場<br>▶ 籌碼訊號：Millennium、BofA、Nomura、Jacobs Levy、BNP 在 2025 Q3 股價 $1.5-2.5 低點集體建倉；Sycamore Walgreens LBO 缺口 $12 億，主動處分 CURV 動機下降<br>▶ 4/25 修正：空頭持倉 3/31 達 ~510 萬股（4.3%，接近歷史高點）——不是回補而是持續加碼；CFO/CCO 在 4/13-14 於 $1.98-2.06 主動賣出，短期負面信號",
  financials: [
    { period: "FY2026E（指引）", rev: "$940-960M", rev_yoy: "-5~6%",   eps: "—",      note: "Adj. EBITDA 指引 $65-75M（中點 $70M）；Q1 FY2026 業績公告預計 6/4" },
    { period: "FY2025 全年",    rev: "$1,000M",   rev_yoy: "-9.1%",   eps: "-$0.07", note: "FY2025 = 2025/2-2026/1；Adj. EBITDA $63.6M；由盈轉虧；關 151 家門店" },
    { period: "Q4 FY2025",     rev: "$236.2M",   rev_yoy: "—",        eps: "-$0.08", note: "EPS 超預期 36%；可比銷售 -10%（鞋類拖累 -460bps）；財報後股價 +28% 單日" },
    { period: "FY2024 全年",   rev: "$1,100M",   rev_yoy: "—",        eps: "+$0.16", note: "Adj. EBITDA $109.1M；淨利 $16.3M；門店 634 家" },
    { period: "FY2021（IPO）", rev: "—",          rev_yoy: "—",        eps: "—",      note: "IPO 高點 $31.16（2021/08/24）；現價 $1.83（-94%）" }
  ],
  balance_sheet: {
    date: "2026-01-31（FY2025 年末）",
    cash: "$24.5M",
    debt: "$303.4M（Term Loan $272.4M + ABL $31M，變動利率 SOFR 加碼）",
    net_debt: "~$279M",
    net_debt_ebitda: "~4.4x（警戒但可控，FY2026 EBITDA 改善可維持債務服務）",
    interest_coverage: "~1.8x（EBITDA $63.6M / 利息 $35.6M）",
    equity: "負值（LBO 資本結構 + 累計虧損）",
    debt_due: "2027 年 Term Loan 到期，需觀察再融資"
  },
  shareholders: [
    { name: "Sycamore Partners",           pct: 56.89, shares_k: 58296,  note: "控股 PE，最大隱患；成本 $6.58，已於 2024-09/$4 及 2025-06/$3.50 兩度折價減持" },
    { name: "Fund 1 (Pleasant Lake)",      pct: 9.58,  shares_k: 9905,   note: "對沖基金，2024-12 公告 6.18%→升至 9.58%；均價約 $4.22" },
    { name: "Nomura Holdings",             pct: 6.1,   shares_k: 6233,   note: "Q3 2025 大幅加碼 +94.8%（低點 $1.5-2.5 進場）" },
    { name: "Bank of America",             pct: 1.9,   shares_k: 1918,   note: "Q2 2025 加碼 +191.1%；目標價 $1.58" },
    { name: "Millennium Management",       pct: null,  shares_k: null,   note: "Q3 2025 新進場；全球頂級對沖基金，常偵測私有化/特殊情境" },
    { name: "Jacobs Levy Equity",          pct: null,  shares_k: null,   note: "Q3 2025 新進場；量化策略" },
    { name: "BNP Paribas",                pct: null,  shares_k: null,   note: "Q3 2025 加碼 +985.7%" }
  ],
  competitors: [
    { name: "Torrid (CURV)",   ticker: "CURV", market: "NYSE",          pe: null, note: "大尺碼市占 ~62%，退貨率 9%（業界 30-40%），3.5M 忠誠會員，數位佔比 ~70%" },
    { name: "Lane Bryant",     ticker: null,   market: "未上市",         pe: null, note: "大尺碼市占 ~20%；Torrid 最直接競爭對手" },
    { name: "Eloquii",         ticker: null,   market: "未上市（Walmart）",pe: null, note: "大尺碼市占 ~3%；線上為主（~95%）" },
    { name: "Chico's FAS",     ticker: "CHS",  market: "NYSE",           pe: null, note: "成熟女性服飾；2023 Sycamore 探索收購但未成交" }
  ],
  valuation: {
    method: "EV/EBITDA 法（淨負債 $279M；EBITDA 以 FY2026E 指引中點計算）",
    bear: { eps: null, pe: null, price: 1.05, note: "EV/EBITDA 5.5x @ EBITDA $52M（消費持續惡化 + Sycamore 再度折價減持）" },
    base: { eps: null, pe: null, price: 2.50, note: "EV/EBITDA 7.5x @ EBITDA $70M（指引達成，Sycamore 放任不管）" },
    bull: { eps: null, pe: null, price: 3.75, note: "EV/EBITDA 8.5x @ EBITDA $82M（鞋類提前回歸 + 子品牌超標 + 機構持續建倉）" },
    notes: "現價 $1.83（2026-04-24）；P/S 0.19x（同業 0.8-1.2x），EV/EBITDA ~3.7x（同業 8-10x）嚴重低估同業。<br>期望值試算：悲觀 20% × -42% + 基本 50% × +37% + 樂觀 25% × +105% ≈ +38%（12 個月）。<br>分析師共識目標 $1.59（低於現價），Telsey $2.00（最樂觀）。"
  },
  risks: [
    "Sycamore 新一輪折價減持（機率 ~10%，但一旦發生為尾部風險；2025/6 $3.50 折價已留下先例）",
    "空頭持倉 3/31 達 4.3%（接近歷史高點），CFO/CCO 財報後一個月內主動賣出——空頭不是在回補",
    "Q1 FY2026 財報（6/4）：Q1 為最弱季（鞋類拖累 -260至-460bps），EBITDA 指引下緣 $14M 風險",
    "高槓桿：淨負債/EBITDA 4.4x，若 EBITDA 下滑 30% 則利息覆蓋率降至警戒",
    "消費環境惡化：關稅政策影響低中收入女性族群消費力",
    "供應鏈風險：鞋類重啟依賴越南/印尼供應鏈，美中關稅再升可能再次中斷",
    "2027 Term Loan 到期再融資風險（利率環境不確定）"
  ],
  timeline: [
    { date: "2026-06-04",  event: "Q1 FY2026 業績公告。指引：營收 $236-244M、Adj. EBITDA $14-18M（最弱季）。EPS 再次超預期 → 新空頭被軋；低於指引下緣 → 加速回落至 $1.30-1.40 區（200 日線）。" },
    { date: "2026-05初",   event: "FINRA 公布 4/15 結算 Short Interest：空頭持倉若再升至 5.0% 以上→警示；若回落至 3.5% 以下→4 月急跌已發生空頭回補。" },
    { date: "2026-05-15",  event: "機構 13F 申報截止公布（Q1 2026 持股）：關鍵觀察 Millennium / Nomura / BofA 是否續增。" },
    { date: "2026-04-25",  event: "籌碼判讀重大修正：3/31 空頭持倉 ~510 萬股（4.3%），為 9 月低點的近兩倍。4/22-24 回落至 $1.83，空頭主動進攻性質確認。" },
    { date: "2026-04-13",  event: "CCO Wheeler 賣出 30,013 股（均價 $1.98，-12.72%）；次日 CFO Dempsey 賣出 42,785 股（均價 $2.063，-15.80%）——財報後 25 天高層主動減持。" },
    { date: "2026-04-17",  event: "股價達短期高點 $2.20（自 2025/12 低點 $0.94 起漲 +134%）。" },
    { date: "2026-03-19",  event: "Q4 FY2025 財報：EPS -$0.08（超預期 36%），FY2026 EBITDA 指引 $65-75M。多年來第一次全面超預期，股價 +28% 單日。" },
    { date: "2025-12",     event: "股價觸及 52 週低點 $0.94（市值 $96M）。Sycamore 完全未出手——鐵證其無護盤動機。" },
    { date: "2025-06",     event: "Sycamore 第二次折價減持：$3.50 二次發行（較當時市價折價）。此舉進一步損害 PE 圈招募能力。" },
    { date: "2024-12-12",  event: "Pleasant Lake Partners 公告持股 6.18%（後升至 9.58%）；2.53M 股於 2024-09-30 至 12-12 間均價 $4.22 買入。" },
    { date: "2024-09",     event: "Sycamore 第一次折價減持：$4.00 承銷公開發行 800 萬股（允許承銷商先做空對沖）。成本 $6.58 卻以 $4.00 出售——2/20 獲利結構驅動利己行為。" },
    { date: "2021-08-24",  event: "CURV IPO，高點 $31.16。Sycamore 2013 年以 $6 億（含 Hot Topic）收購 Torrid，2021 年 IPO 套現。" }
  ],
  research_notes: "【當前研判（2026-04-27）】\n現價 $1.83，估值已回落至接近分析師共識區間（$1.58-$2.00），上下空間趨於對稱。4/25 修正後，多空結構已從「機構建倉主導」轉為「空頭主動進攻 + 多頭撤退」。核心觀察節點：① 5 月初 FINRA short interest；② 6/4 Q1 業績是否再度超預期。\n\n【核心投資邏輯】\n大尺碼服飾供需結構性失衡（70% 美國女性穿 size 14+）× 9% 退貨率護城河 × 機構低點建倉 = 中期修復邏輯完整。但 Sycamore 56.9% 控股 + 空頭持續累積 + 高管減持 = 短期路徑不確定性高。\n\n【Sycamore 隱患解析】\nSycamore（AUM $110 億，員工 12 人）的 2/20 獲利結構迫使其在 CURV 上持續出貨，而非長期持有。但 Walgreens LBO（$220 億，槓桿 83%）佔據主要資金與注意力；CURV 剩餘持股 $1.28 億對 Walgreens 缺口 $12 億貢獻有限。放任不管機率 50%，路徑 C 公開市場慢慢減持 15%。\n\n【ETF 結構性底部】\nCURV 為 Russell 2000 成分股（IWM/VTWO 被動持有）。每日收盤前 10 分鐘的神秘買盤確認為 ETF MOC 買盤 + 做市商套利結構，非 Sycamore 護盤——此買盤獨立於情緒，是隱性防跌底部。\n\n【阻力位（解套賣壓）】\n$3.00：Pleasant Lake 接近獲利邊緣 | $3.50：2025-06 二次發行接盤（重大阻力）| $4.00-4.22：私募重災區 | $6.58：Sycamore 損益平衡點",
  links: [
    { title: "Notion 研究主頁（含子頁面）", url: "https://www.notion.so/Torrid-Holdings-Inc-CURV-162b97d085be808c823ac99e4622dc38", type: "report" },
    { title: "深度研究報告（2026/04/19）",  url: "https://www.notion.so/347b97d085be81e7a9f8dc5ef661a5e2", type: "report" },
    { title: "例行更新 2026/04/25 — 籌碼修正", url: "https://www.notion.so/34db97d085be8142af71e0247964cea0", type: "report" },
    { title: "Vocus：買到 PE 要出貨的股票是什麼感覺？（2025/07/17）", url: "https://vocus.cc/article/6878e82dfd89780001aab661", type: "news" },
    { title: "SEC EDGAR：CURV 13F/Form 4 申報", url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001792781&type=4&dateb=&owner=include&count=40", type: "filing" },
    { title: "Pleasant Lake 13G 申報（2024-12-12）", url: "https://www.sec.gov/Archives/edgar/data/1792781/000092963824004232/sched13g.htm", type: "filing" }
  ],
  notion_url: "https://www.notion.so/Torrid-Holdings-Inc-CURV-162b97d085be808c823ac99e4622dc38",
  chart_data: []
};
