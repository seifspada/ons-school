import Image from "next/image";
import type { InscriptionCopy } from "@/src/data/inscription-copy";
import { getOptimizedImageSrc } from "@/src/lib/images";
import { PageBreadcrumb } from "@/src/components/ui/PageBreadcrumb";

/* Petits traits décoratifs */
function Sparks({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 44 44"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M14 6l7 11" />
      <path d="M27 3l4 14" />
      <path d="M35 24l-15 5" />
    </svg>
  );
}

export default function InscriptionHero({ t }: { t: InscriptionCopy }) {
  return (
    <section
      className="relative overflow-hidden bg-white"
      aria-labelledby="inscription-hero-title"
    >
      {/* Forme orange à gauche */}
      <span
        className="pointer-events-none absolute start-[-95px] top-[70px] z-[2] h-[250px] w-[150px] rounded-e-full bg-gradient-to-b from-[#ffb12b] to-[#f7871a] max-[560px]:hidden"
        aria-hidden="true"
      />

      {/* Image à droite, fondu vers la gauche */}
      <div className="relative h-[250px] w-full lg:absolute lg:inset-y-0 lg:end-0 lg:h-auto lg:w-[64%] lg:[mask-image:linear-gradient(to_right,transparent_0%,#000_36%)] rtl:lg:[mask-image:linear-gradient(to_left,transparent_0%,#000_36%)]">
        <Image
          src={getOptimizedImageSrc("/images/anas_school_images/hero-inscription.png")}
          alt={t.hero.imageAlt}
          fill
          priority
          sizes="(min-width: 1024px) 64vw, 100vw"
          className="object-cover object-[center_20%]"
        />
      </div>

      {/* Vague orange → verte en bas à droite */}
      <span
        className="pointer-events-none absolute -bottom-9 end-[-6%] z-[2] hidden h-[90px] w-[44%] rotate-[-3deg] rounded-[100%] bg-gradient-to-r from-[#f7871a] to-[#7cc42a] lg:block rtl:rotate-[3deg]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 py-[clamp(32px,5vw,56px)] sm:px-6 lg:min-h-[390px]">
        <div className="relative z-[3] max-w-[560px]">
          <PageBreadcrumb currentLabel={t.hero.current} />
          <div className="flex items-start gap-3">
            <h1
              id="inscription-hero-title"
              className="m-0 mt-4 text-[clamp(40px,5.4vw,66px)] font-[850] leading-[1.05] tracking-[-0.04em] text-[#0b2e6b]"
            >
              {t.hero.title}
            </h1>
            <Sparks className="mt-5 hidden size-[44px] shrink-0 text-[#f7941d] lg:block" />
          </div>
          <p className="mb-0 mt-4 max-w-[440px] text-[clamp(16px,1.8vw,20px)] font-[560] leading-[1.6] text-[#0b2e6b]">
            {t.hero.subtitle}
          </p>
          <svg
            className="mt-4 rtl:-scale-x-100"
            width="150"
            height="14"
            viewBox="0 0 150 14"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M3 10 C40 2, 100 2, 147 8"
              stroke="#f7941d"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}