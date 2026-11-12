"use client";

import { About } from "@/src/components/home/About";
import { Activities } from "@/src/components/home/Activities";
import { CallToAction } from "@/src/components/home/CallToAction";
import { EducationLevels } from "@/src/components/home/EducationLevels";
import { News } from "@/src/components/home/News";
import { Statistics } from "@/src/components/home/Statistics";
import { Testimonials } from "@/src/components/home/Testimonials";
import { useSiteLanguage } from "@/src/components/layout/SiteShell";
import Hero from "./home/Hero";

export function Website() {
  const { lang } = useSiteLanguage();

  return (
    <main>
      <Hero lang={lang} />
      <About lang={lang} />
      <EducationLevels lang={lang} />
      <Activities lang={lang} />
      <Statistics lang={lang} />
      <div className="mx-auto grid w-[min(1190px,calc(100%-64px))] grid-cols-[minmax(0,1.45fr)_minmax(280px,0.75fr)] gap-[clamp(35px,5vw,68px)] py-[70px] max-[850px]:w-[calc(100%-42px)] max-[850px]:grid-cols-1 max-[850px]:gap-11 max-[560px]:w-[calc(100%-36px)] max-[560px]:gap-[38px] max-[560px]:py-[49px]">
        <News lang={lang} />
        <Testimonials lang={lang} />
      </div>
      <CallToAction lang={lang} />
    </main>
  );
}
