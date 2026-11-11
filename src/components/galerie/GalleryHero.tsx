"use client";

import Image from "next/image";
import { useSiteLanguage } from "@/src/components/layout/SiteShell";
import { copy } from "@/src/data/copy";
import { PageBreadcrumb } from "@/src/components/ui/PageBreadcrumb";

export default function GalleryHero() {
  const { lang } = useSiteLanguage();
  const t = copy[lang].galleryPage.hero;

  return (
    <section
      className="relative overflow-hidden bg-[radial-gradient(ellipse_at_72%_8%,rgb(222_239_255_/_86%),transparent_38%),linear-gradient(110deg,#fffdfa_1%,#fff_47%,#f5faff_100%)] py-[30px] pb-[48px] before:absolute before:start-[-70px] before:top-[-55px] before:h-[120%] before:w-[150px] before:rounded-[0_0_85%_0] before:bg-[linear-gradient(150deg,#ffb12b,#ffd37c_60%,transparent)] before:content-[''] after:absolute after:bottom-[-68px] after:end-[-40px] after:h-[100px] after:w-[48%] after:rounded-[100%_0_0_0] after:bg-[linear-gradient(155deg,#6daa28,#9aca4b)] after:content-[''] max-[560px]:after:h-[56px]"
      aria-labelledby="gallery-hero-title"
    >
      <div className="container relative z-[1] grid min-h-[340px] grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] items-center gap-[clamp(24px,5vw,64px)] max-[700px]:min-h-0 max-[700px]:grid-cols-1">
        <div>
          <PageBreadcrumb currentLabel={t.title} />
          <h1 id="gallery-hero-title" className="m-0 text-[clamp(38px,5vw,60px)] font-[820] leading-[1.08] tracking-[-0.045em] text-[var(--navy)]">
            {t.title}
          </h1>
          <p className="mb-0 mt-3 max-w-[430px] text-[clamp(16px,1.8vw,20px)] font-[600] leading-[1.6] text-[var(--navy)]">
            {t.description}
          </p>
          <svg className="mt-3" width="150" height="14" viewBox="0 0 150 14" fill="none" aria-hidden="true">
            <path d="M3 10 C40 2, 100 2, 147 8" stroke="var(--orange)" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </div>

        <div className="relative h-[clamp(240px,30vw,360px)] overflow-hidden rounded-[36%_18px_18px_18px] bg-[#e7f1f8] shadow-[0_20px_46px_rgb(18_53_104_/_14%)] max-[560px]:h-[clamp(200px,60vw,280px)]">
          <Image
            src="/images/optimized/hero-students.webp"
            alt={t.imageAlt}
            fill
            preload
            sizes="(max-width: 700px) calc(100vw - 36px), 54vw"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
