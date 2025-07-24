"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "zh"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.products": "Products",
    "nav.solutions": "Solutions",
    "nav.about": "About",
    "nav.contact": "Contact",

    // Home page
    "home.hero.title": "Industrial Computing Solutions for Mission-Critical Applications",
    "home.hero.subtitle":
      "RockCore delivers rugged, reliable industrial computers, AI boxes, edge devices, and 360° cameras designed for the harshest environments.",
    "home.hero.cta1": "Explore Products",
    "home.hero.cta2": "View Solutions",
    "home.stats.clients": "Global Clients",
    "home.stats.experience": "Years Experience",
    "home.stats.countries": "Countries Served",
    "home.stats.uptime": "System Uptime",

    // Products
    "products.industrial.title": "Industrial Computers",
    "products.industrial.desc":
      "Rugged, fanless industrial computers designed for harsh environments with wide temperature range and vibration resistance.",
    "products.ai.title": "AI Computing Boxes",
    "products.ai.desc":
      "High-performance AI inference systems with GPU acceleration for machine learning and deep learning applications.",
    "products.edge.title": "Edge Computing Devices",
    "products.edge.desc": "Compact, low-power edge computing solutions for IoT applications and distributed computing.",
    "products.camera.title": "360° Surveillance Cameras",
    "products.camera.desc":
      "Advanced 360° panoramic cameras with AI analytics for comprehensive surveillance and monitoring.",

    // Solutions
    "solutions.fpga.title": "FPGA Solutions",
    "solutions.fpga.desc":
      "Custom FPGA development and implementation services for high-performance computing applications.",
    "solutions.fpga.cad": "CAD/CAM Solutions",
    "solutions.fpga.aoi": "AOI Solutions",
    "solutions.fpga.alignment": "Target Alignment Solutions",
    "solutions.fpga.design": "FPGA Design Services",
    "solutions.fpga.tsn": "Time-Sensitive Networking (TSN)",

    "solutions.manufacturing.title": "Smart Manufacturing",
    "solutions.manufacturing.desc":
      "Comprehensive smart manufacturing solutions with AI-powered automation and monitoring.",
    "solutions.manufacturing.inspection": "360° AI Inspection",
    "solutions.manufacturing.energy": "Energy Saving Solutions",

    "solutions.transportation.title": "Transportation & Logistics",
    "solutions.energy.title": "Energy & Utilities",
    "solutions.cities.title": "Smart Cities",

    // About
    "about.mission.title": "Our Mission",
    "about.mission.desc":
      "To empower industries with innovative FPGA and edge AI computing solutions that deliver superior performance, reliability, and efficiency.",
    "about.vision.title": "Our Vision",
    "about.vision.desc":
      "To be the global leader in edge AI and FPGA solutions, enabling the next generation of intelligent industrial applications.",
    "about.values.algorithm": "Algorithm IP Development",
    "about.values.algorithm.desc":
      "We specialize in converting complex algorithms into optimized IP cores for FPGA and edge computing platforms.",
    "about.values.edge": "Edge AI Expertise",
    "about.values.edge.desc":
      "Our edge AI solutions provide real-time processing with low latency, reducing dependency on cloud connectivity.",
    "about.values.innovation": "Innovation",
    "about.values.innovation.desc":
      "Continuously advancing FPGA and edge computing technologies to solve complex industrial challenges.",

    // Contact
    "contact.title": "Contact Us",
    "contact.subtitle": "Get in touch with our experts to discuss your industrial computing needs.",
    "contact.form.name": "Full Name",
    "contact.form.email": "Email Address",
    "contact.form.company": "Company",
    "contact.form.message": "Message",
    "contact.form.submit": "Send Message",

    // Common
    "common.learn_more": "Learn More",
    "common.get_quote": "Get Quote",
    "common.contact_us": "Contact Us",
    "common.view_all": "View All",
  },
  zh: {
    // Navigation
    "nav.home": "首頁",
    "nav.products": "產品",
    "nav.solutions": "解決方案",
    "nav.about": "關於我們",
    "nav.contact": "聯絡我們",

    // Home page
    "home.hero.title": "工業級電腦解決方案 專為關鍵任務應用設計",
    "home.hero.subtitle": "磐石科技提供堅固可靠的工業電腦、AI運算盒、邊緣運算設備及360°攝影機，專為最嚴苛環境設計。",
    "home.hero.cta1": "探索產品",
    "home.hero.cta2": "查看解決方案",
    "home.stats.clients": "全球客戶",
    "home.stats.experience": "年經驗",
    "home.stats.countries": "服務國家",
    "home.stats.uptime": "系統正常運行時間",

    // Products
    "products.industrial.title": "工業電腦",
    "products.industrial.desc": "堅固耐用的無風扇工業電腦，專為嚴苛環境設計，具備寬溫度範圍和抗震動能力。",
    "products.ai.title": "AI運算盒",
    "products.ai.desc": "高效能AI推論系統，配備GPU加速，適用於機器學習和深度學習應用。",
    "products.edge.title": "邊緣運算設備",
    "products.edge.desc": "小型化、低功耗邊緣運算解決方案，適用於物聯網應用和分散式運算。",
    "products.camera.title": "360°監控攝影機",
    "products.camera.desc": "先進的360°全景攝影機，具備AI分析功能，提供全方位監控解決方案。",

    // Solutions
    "solutions.fpga.title": "FPGA解決方案",
    "solutions.fpga.desc": "客製化FPGA開發與實作服務，適用於高效能運算應用。",
    "solutions.fpga.cad": "CAD/CAM解決方案",
    "solutions.fpga.aoi": "AOI解決方案",
    "solutions.fpga.alignment": "標靶對位解決方案",
    "solutions.fpga.design": "FPGA設計服務",
    "solutions.fpga.tsn": "時間敏感網路(TSN)",

    "solutions.manufacturing.title": "智慧製造",
    "solutions.manufacturing.desc": "全方位智慧製造解決方案，結合AI自動化與監控技術。",
    "solutions.manufacturing.inspection": "360° AI巡檢",
    "solutions.manufacturing.energy": "節能解決方案",

    "solutions.transportation.title": "運輸物流",
    "solutions.energy.title": "能源公用事業",
    "solutions.cities.title": "智慧城市",

    // About
    "about.mission.title": "我們的使命",
    "about.mission.desc": "以創新的FPGA和邊緣AI運算解決方案賦能產業，提供卓越的效能、可靠性和效率。",
    "about.vision.title": "我們的願景",
    "about.vision.desc": "成為邊緣AI和FPGA解決方案的全球領導者，推動下一代智慧工業應用發展。",
    "about.values.algorithm": "演算法IP化",
    "about.values.algorithm.desc": "我們專精於將複雜演算法轉換為最佳化的IP核心，適用於FPGA和邊緣運算平台。",
    "about.values.edge": "邊緣AI專業",
    "about.values.edge.desc": "我們的邊緣AI解決方案提供即時處理和低延遲，減少對雲端連接的依賴。",
    "about.values.innovation": "創新",
    "about.values.innovation.desc": "持續推進FPGA和邊緣運算技術，解決複雜的工業挑戰。",

    // Contact
    "contact.title": "聯絡我們",
    "contact.subtitle": "與我們的專家聯繫，討論您的工業運算需求。",
    "contact.form.name": "姓名",
    "contact.form.email": "電子郵件",
    "contact.form.company": "公司",
    "contact.form.message": "訊息",
    "contact.form.submit": "發送訊息",

    // Common
    "common.learn_more": "了解更多",
    "common.get_quote": "取得報價",
    "common.contact_us": "聯絡我們",
    "common.view_all": "查看全部",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)["en"]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
