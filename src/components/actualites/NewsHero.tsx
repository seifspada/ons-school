"use client";

import Image from "next/image";
import { useSiteLanguage } from "@/src/components/layout/SiteShell";
import { copy } from "@/src/data/copy";
import { PageBreadcrumb } from "@/src/components/ui/PageBreadcrumb";

/* Soleil décoratif (spirale + rayons) */
function Sun({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 80"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M40 40c0-4 5-5 7-2s0 9-6 10-12-5-11-12 8-14 17-13 17 9 16 18" />
      <path d="M40 4v9M40 67v9M4 40h9M67 40h9M14 14l6 6M60 60l6 6M66 14l-6 6M20 60l-6 6" />
    </svg>
  );
}

/* Petits traits décoratifs */
function Strokes({
  className = "",
  color = "var(--blue-dark)",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      fill="none"
      stroke={color}
      strokeWidth="4.5"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M8 30l6-14" />
      <path d="M19 33l4-16" />
      <path d="M30 28l3-12" />
    </svg>
  );
}

export default function NewsHero() {
  const { lang } = useSiteLanguage();
  const t = copy[lang].newsPage.hero;

  return (
    <section
      className="relative overflow-hidden bg-[linear-gradient(180deg,#eef6fd_0%,#fff_70%)]"
      aria-labelledby="news-hero-title"
    >
      {/* Forme orange à gauche */}
      <span
        className="pointer-events-none absolute start-[-95px] top-[60px] z-[2] h-[260px] w-[150px] rounded-e-full bg-gradient-to-b from-[#ffb12b] to-[#f7871a] max-[560px]:hidden"
        aria-hidden="true"
      />

      <div className="container relative z-[3] grid min-h-[clamp(320px,40vw,420px)] items-center gap-6 py-[clamp(28px,4vw,48px)] lg:grid-cols-[0.85fr_1.15fr]">
        <div className="relative z-[4]">
          <PageBreadcrumb currentLabel={t.title} />
          <h1
            id="news-hero-title"
            className="m-0 mt-6 text-[clamp(44px,6vw,72px)] font-[850] leading-[1.05] tracking-[-0.04em] text-[var(--navy)]"
          >
            {t.title}
          </h1>
          <p className="mb-0 mt-4 max-w-[400px] text-[clamp(17px,2vw,22px)] font-[560] leading-[1.45] text-[var(--navy)]">
            {t.description}
          </p>
          <svg
            className="mt-5 rtl:-scale-x-100"
            width="150"
            height="14"
            viewBox="0 0 150 14"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M3 10 C40 2, 100 2, 147 8"
              stroke="var(--orange)"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Image : bord gauche arrondi, fondu vers le bas */}
        <div className="relative h-[clamp(240px,32vw,380px)] max-[560px]:h-[clamp(200px,60vw,280px)]">
          <Sun className="pointer-events-none absolute -start-4 -top-2 z-[5] hidden size-[72px] text-[var(--orange)] lg:block" />
          <Strokes
            className="pointer-events-none absolute start-[2%] top-[38%] z-[5] hidden size-[42px] lg:block"
            color="var(--blue-dark)"
          />
          <Strokes
            className="pointer-events-none absolute start-[4%] top-[58%] z-[5] hidden size-[40px] lg:block"
            color="#6cb82c"
          />

          <div className="absolute inset-0 overflow-hidden rounded-s-[45%] rounded-ee-[40px] rounded-se-[40px] [mask-image:linear-gradient(to_bottom,#000_82%,transparent_100%)] max-[560px]:rounded-[28px]">
            <Image
              src="/images/optimized/hero-students.webp"
              alt={t.imageAlt}
              fill
              preload
              sizes="(max-width: 700px) calc(100vw - 36px), 56vw"
              className="object-cover object-[center_25%]"
            />
          </div>

          {/* Vague orange / verte en bas */}
          <span
            className="pointer-events-none absolute -bottom-5 end-[-8%] z-[6] hidden h-[80px] w-[62%] rotate-[-5deg] rounded-[100%] bg-gradient-to-r from-[#f7871a] to-[#7cc42a] lg:block rtl:rotate-[5deg]"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}