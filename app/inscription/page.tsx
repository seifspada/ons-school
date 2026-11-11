"use client";

import ContactBanner from "@/src/components/inscription/ContactBanner";
import EnrollmentTabs from "@/src/components/inscription/EnrollmentTabs";
import InscriptionHero from "@/src/components/inscription/InscriptionHero";
import WhyChoose from "@/src/components/inscription/WhyChoose";
import { useSiteLanguage } from "@/src/components/layout/SiteShell";
import { inscriptionCopy } from "@/src/data/inscription-copy";

export default function InscriptionPage() {
  const { lang } = useSiteLanguage();
  const t = inscriptionCopy[lang === "ar" ? "ar" : "fr"];
  const isRtl = lang === "ar";

  return (
    <div dir={isRtl ? "rtl" : "ltr"} lang={isRtl ? "ar" : "fr"} className="min-h-screen bg-white">
      <main>
        <InscriptionHero t={t} />

        <section className="mx-auto max-w-7xl px-4 pb-4 pt-10 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:items-start">
            <WhyChoose t={t} />
            <div className="pt-12">
              <EnrollmentTabs t={t} isRtl={isRtl} />
            </div>
          </div>
        </section>

        <ContactBanner t={t} />
      </main>
    </div>
  );
}
