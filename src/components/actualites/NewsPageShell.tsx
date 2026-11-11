"use client";

import type { ReactNode } from "react";
import { useSiteLanguage } from "@/src/components/layout/SiteShell";

export default function NewsPageShell({ children }: { children: ReactNode }) {
  const { lang } = useSiteLanguage();
  return (
    <main className="bg-white" lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
      {children}
    </main>
  );
}
