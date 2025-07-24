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
    "nav.about": "About Us",
    "nav.contact": "Contact",

    // Common
    "common.learnMore": "Learn More",
    "common.viewDetails": "View Details",
    "common.contactUs": "Contact Us",
    "common.getQuote": "Get Quote",

    // Home page
    "home.hero.title": "Industrial Computing Solutions",
    "home.hero.subtitle":
      "Leading provider of industrial computers, AI boxes, edge devices, and 360° camera solutions for mission-critical applications across industries.",
    "home.hero.cta": "Explore Solutions",
    "home.products.title": "Our Product Portfolio",
    "home.products.subtitle": "Comprehensive range of industrial computing solutions for every application.",
    "home.solutions.title": "Industry Solutions",
    "home.solutions.subtitle": "Tailored solutions for manufacturing, transportation, energy, and smart cities.",

    // Products
    "products.industrial.title": "Industrial Computers",
    "products.industrial.desc": "Rugged computing platforms for factory automation and industrial control.",
    "products.ai.title": "AI Boxes",
    "products.ai.desc": "Dedicated AI inference systems for machine learning and deep learning applications.",
    "products.edge.title": "Edge Devices",
    "products.edge.desc": "Compact computing solutions for IoT and edge computing applications.",
    "products.camera.title": "360° Cameras",
    "products.camera.desc": "Advanced surveillance and monitoring solutions with panoramic vision capabilities.",

    // Solutions
    "solutions.manufacturing.title": "Manufacturing",
    "solutions.transportation.title": "Transportation",
    "solutions.energy.title": "Energy",
    "solutions.cities.title": "Smart Cities",

    // Contact
    "contact.title": "Contact Us",
    "contact.subtitle":
      "Ready to discuss your industrial computing needs? Our experts are here to help you find the perfect solution.",
    "contact.info.title": "Get in Touch",
    "contact.info.subtitle":
      "Whether you need technical support, product information, or custom solutions, our team is ready to assist you.",
    "contact.form.name": "Full Name",
    "contact.form.email": "Email Address",
    "contact.form.company": "Company",
    "contact.form.phone": "Phone Number",
    "contact.form.message": "Message",
    "contact.form.submit": "Send Message",
  },
  zh: {
    // Navigation
    "nav.home": "首頁",
    "nav.products": "產品",
    "nav.solutions": "解決方案",
    "nav.about": "關於我們",
    "nav.contact": "聯絡我們",

    // Common
    "common.learnMore": "了解更多",
    "common.viewDetails": "查看詳情",
    "common.contactUs": "聯絡我們",
    "common.getQuote": "獲取報價",

    // Home page
    "home.hero.title": "工業電腦解決方案",
    "home.hero.subtitle": "領先的工業電腦、AI盒子、邊緣設備和360°攝影機解決方案供應商，為各行業提供關鍵任務應用。",
    "home.hero.cta": "探索解決方案",
    "home.products.title": "產品組合",
    "home.products.subtitle": "為每個應用提供全面的工業計算解決方案。",
    "home.solutions.title": "行業解決方案",
    "home.solutions.subtitle": "為製造業、運輸業、能源業和智慧城市量身定制的解決方案。",

    // Products
    "products.industrial.title": "工業電腦",
    "products.industrial.desc": "用於工廠自動化和工業控制的堅固計算平台。",
    "products.ai.title": "AI盒子",
    "products.ai.desc": "專用於機器學習和深度學習應用的AI推理系統。",
    "products.edge.title": "邊緣設備",
    "products.edge.desc": "用於物聯網和邊緣計算應用的緊湊型計算解決方案。",
    "products.camera.title": "360°攝影機",
    "products.camera.desc": "具有全景視覺功能的先進監控和監視解決方案。",

    // Solutions
    "solutions.manufacturing.title": "製造業",
    "solutions.transportation.title": "運輸業",
    "solutions.energy.title": "能源業",
    "solutions.cities.title": "智慧城市",

    // Contact
    "contact.title": "聯絡我們",
    "contact.subtitle": "準備討論您的工業計算需求？我們的專家隨時為您提供完美的解決方案。",
    "contact.info.title": "聯繫方式",
    "contact.info.subtitle": "無論您需要技術支援、產品資訊或客製化解決方案，我們的團隊都準備為您提供協助。",
    "contact.form.name": "姓名",
    "contact.form.email": "電子郵件",
    "contact.form.company": "公司",
    "contact.form.phone": "電話號碼",
    "contact.form.message": "訊息",
    "contact.form.submit": "發送訊息",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("zh")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
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
