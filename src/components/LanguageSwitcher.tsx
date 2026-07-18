"use client";

import { useLocale } from "@/contexts/LocaleContext";

export default function LanguageSwitcher() {
  const { locale, setLocale, t } = useLocale();

  return (
    <div className="relative group">
      <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-border/50 text-xs font-medium text-gray-600 hover:bg-gray-50 transition-colors">
        <span>{locale === "id" ? "🇮🇩 ID" : "🇬🇧 EN"}</span>
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className="absolute right-0 top-full mt-1 w-32 py-1 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <button
          onClick={() => setLocale("id")}
          className={`w-full text-left px-4 py-2 text-xs font-medium hover:bg-gray-50 ${
            locale === "id" ? "text-primary" : "text-gray-700"
          }`}
        >
          🇮🇩 Bahasa Indonesia
        </button>
        <button
          onClick={() => setLocale("en")}
          className={`w-full text-left px-4 py-2 text-xs font-medium hover:bg-gray-50 ${
            locale === "en" ? "text-primary" : "text-gray-700"
          }`}
        >
          🇬🇧 English
        </button>
      </div>
    </div>
  );
}
