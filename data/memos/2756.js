var MEMO_2756 = {
  ticker: "2756", name: "聯發國際",
  conviction: "high",
  header: "TWSE：2756｜產業：新時尚茶飲／連鎖加盟｜主品牌：Sharetea + UG",
  thesis: "聯發國際擁有 Sharetea（全球連鎖手搖飲，美國約160店）及自有新品牌 UG（2024年創立）。UG快速展店帶動高毛利加盟金收入爆發：加盟金550萬/家，若年底達35家加盟，光加盟金貢獻EPS約7.8元（凱基估算），遠超現有獲利水準。核心邏輯：「加盟平台化」從直營餐廳轉型為品牌授權商。",
  financials: [
    { period: "2025 H1",   rev: "5.03億", rev_yoy: "+56.1%", eps: "1.21元", note: "UG展店前期投資壓縮淨利" },
    { period: "2025 Q2",   rev: "3.03億", rev_yoy: "+84.3%", eps: "0.17億淨利", note: "淨利年減12.5%（展店成本）" },
    { period: "2025 Q1",   rev: "2.00億", rev_yoy: "+26.8%", eps: "0.53元", note: "同期新高；UG占比逾1/3" },
    { period: "2025-04",   rev: "9,884萬", rev_yoy: "+70.5%", eps: "—",    note: "單月歷史新高" },
    { period: "2024 全年", rev: "—",      rev_yoy: "—",       eps: "—",    note: "配息現金股利2.5元" }
  ],
  balance_sheet: {
    date: "2025-03-31",
    cash_total: "4.97億（現金+約當現金+3個月以上定存）",
    investments: "上市股票8,615仟；公司債30,334仟",
    tax_issue: "111年度所得稅補稅2,502萬（申請復查中）"
  },
  ug_metrics: {
    stores_tw: 14,       // 截至2025Q1末（直8加6）
    target_2025_end: 50, // 管理層目標（15直35加）
    avg_daily_cups: 1300,
    franchise_fee_per_store: 550, // 萬元
    implied_eps_from_ff: 7.8,     // 35間加盟×550萬，凱基估算
    overseas_pipeline: ["香港（5月2家）", "新加坡", "加拿大", "美國（UG預計明年30家）"],
    us_interest: "30位Sharetea美國加盟主表態引進UG"
  },
  sharetea: {
    us_stores: 160,
    global_strategy: "美國3場加盟商大會+7大有感計劃穩加盟主信心"
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
    { name: "聯發國際 (2756)", ticker: "2756", market: "TWSE", stores: 200,  pe: null, note: "Sharetea 全球 + UG 台灣展店" },
    { name: "六角國際 (2732)", ticker: "2732", market: "TWSE", stores: 1200, pe: null, note: "日出茶太、Chatime；台灣最大手搖飲上市" },
    { name: "霸王茶姬",       ticker: null,   market: "未上市",stores: 6440, pe: null, note: "中國新時尚茶飲快速崛起" },
    { name: "Gong Cha (貢茶)",ticker: null,   market: "港股",  stores: 2000, pe: null, note: "全球連鎖，港股上市" }
  ],
  valuation: {
    method: "PE 法（EPS × 目標PE）",
    bear: null,
    base: null,
    bull: null,
    notes: "凱基估算：UG 35間加盟金貢獻EPS 7.8元。若含品牌維護費及Sharetea業務，full-year EPS 預估待財報更新後填入。目標PE區間：成長型餐飲平台 20-35x。"
  },
  links: [
    { title: "凱基證券研究報告（2025-05）",           url: "https://www.notion.so/2756-1f2b97d085be803ca84bc0ea407a9767", type: "report" },
    { title: "2025 Q2 財報（2025-08-11）",            url: "https://mops.twse.com.tw/mops/web/index", type: "filing" },
    { title: "UG 法說會 Q&A 逐字稿（2025-06-11）",   url: "https://www.notion.so/2756-1f2b97d085be803ca84bc0ea407a9767", type: "other"  },
    { title: "Vocus 作者案例文章",                     url: "https://vocus.cc/article/688223befd897800013b012d",             type: "news"   }
  ],
  risks: [
    "展店前期投資持續壓縮淨利率，直至規模效益顯現",
    "UG加盟進度不及預期（目標50家→實際達成率待觀察）",
    "補稅案2,502萬（申請復查中，有一次性損益風險）",
    "關稅/美元匯率影響Sharetea美國業務",
    "新時尚茶飲市場競爭激烈（中國品牌大舉海外擴張）"
  ],
  timeline: [
    { date: "2025-08-12", event: "告五人續任UG代言人記者會。股價前日跌停（8/11）。UG喊出3年500家目標（每月至少13家）。" },
    { date: "2025-08-11", event: "Q2財報：營收3.03億（+84.3%），淨利0.17億（-12.5%），H1 EPS 1.21元。股價跌停。" },
    { date: "2025-06-11", event: "法說會Q&A。" },
    { date: "2025-05-09", event: "Q1財報：營收2.00億（+26.8%），EPS 0.53元。4月營收9,884萬（+70.5%，月高）。" },
    { date: "2025-05",    event: "香港首店開幕（朗豪坊），AI製茶設備，愛己理念。" },
    { date: "2025-04",    event: "美國三場Sharetea加盟商大會，七大有感計劃。30位加盟主表態引進UG。" },
    { date: "2024",       event: "創立UG新時尚茶飲品牌。配發現金股利2.5元。" }
  ],
  research_notes: "凱基報告核心：管理層預計UG 2Q25起加盟金顯著貢獻（550萬/家）；2025年底擴至50家（15直35加）。35間加盟金=1.93億，EPS約7.8元（此為純加盟金試算，不含品牌維護費等）。目前UG直8加6=14家，距50家目標仍差36家，進度需持續追蹤。8/11跌停背景：Q2淨利下滑（前期投資）引發市場失望情緒，但營收維持高增速，屬認知落差機會窗口。",
  notion_url: "https://www.notion.so/2756-1f2b97d085be803ca84bc0ea407a9767",
  chart_data: []
};
