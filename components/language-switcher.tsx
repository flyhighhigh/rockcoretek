"use client"

import { useLanguage } from "@/context/language-context"
import { Globe } from "lucide-react"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center space-x-2">
      <Globe className="h-4 w-4 text-gray-600" />
      <button
        onClick={() => setLanguage(language === "en" ? "zh" : "en")}
        className="text-sm font-medium text-gray-600 hover:text-rockcore-green transition-colors"
      >
        {language === "en" ? "中文" : "EN"}
      </button>
    </div>
  )
}
