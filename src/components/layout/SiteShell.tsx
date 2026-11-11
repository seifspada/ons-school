"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { copy } from "@/src/data/copy";
import type { Language } from "@/src/lib/types";
import { FloatingContact } from "./FloatingContact";
import { Footer } from "./Footer";
import { Header } from "./Header";

type SiteLanguageContextValue = {
  lang: Language;
  setLang: (language: Language) => void;
};

const SiteLanguageContext = createContext<SiteLanguageContextValue | null>(null);

export function useSiteLanguage() {
  const context = useContext(SiteLanguageContext);
  if (!context) {
    throw new Error("useSiteLanguage must be used within SiteShell.");
  }
  return context;
}

export function SiteShell({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("fr");

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  return (
    <SiteLanguageContext.Provider value={{ lang, setLang }}>
      <div className={`website website--${lang}`} dir={lang === "ar" ? "rtl" : "ltr"}>
        <Header lang={lang} onLanguageChange={setLang} />
        {children}
        <div id="contact"><Footer lang={lang} /></div>
        <FloatingContact lang={lang} />
        <span className="sr-only" aria-live="polite">{copy[lang].language}</span>
      </div>
    </SiteLanguageContext.Provider>
  );
}
