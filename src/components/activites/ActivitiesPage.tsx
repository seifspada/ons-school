"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useSiteLanguage } from "@/src/components/layout/SiteShell";
import { copy } from "@/src/data/copy";
import ActivitiesHero from "./ActivitiesHero";
import ActivitiesGrid from "./ActivitiesGrid";
import ActivitiesBenefits from "./ActivitiesBenefits";
import ActivitiesCta from "./ActivitiesCta";

export default function ActivitiesPage() {
  const { lang } = useSiteLanguage();
  const isArabic = lang === "ar";
  const t = copy[lang].activitiesPage;
  const ActionIcon = isArabic ? ArrowLeft : ArrowRight;

  return (
    <main className="bg-white" lang={lang} dir={isArabic ? "rtl" : "ltr"}>
      <ActivitiesHero t={t.hero} isArabic={isArabic} ActionIcon={ActionIcon} />
      <ActivitiesGrid t={t.list} items={t.items} ActionIcon={ActionIcon} />
      <ActivitiesBenefits t={t.benefits} isArabic={isArabic} />
      <ActivitiesCta t={t.cta} ActionIcon={ActionIcon} />
    </main>
  );
}