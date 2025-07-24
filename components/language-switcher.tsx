"use client"

import { useLanguage } from "@/context/language-context"
import { Globe } from "lucide-react"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="relative">
      <button
        onClick={() => setLanguage(language === "en" ? "zh" : "en")}
        className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-rockcore-green transition-colors rounded-md hover:bg-gray-50"
      >
        <Globe className="h-4 w-4" />
        <span>{language === "en" ? "中文" : "EN"}</span>
      </button>
    </div>
  )
}
