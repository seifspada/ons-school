import { motion } from "framer-motion";
import { ArrowDown, ArrowLeft, ArrowRight, GraduationCap } from "lucide-react";
import { copy } from "@/src/data/copy";
import type { Language } from "@/src/lib/types";
import { SchoolImage } from "@/src/components/ui/SchoolImage";

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

export function Hero({ lang }: { lang: Language }) {
  const text = copy[lang];
  const isArabic = lang === "ar";
  const Arrow = isArabic ? ArrowLeft : ArrowRight;

  return (
    <section
      className="relative overflow-hidden bg-white"
      id="home"
      aria-labelledby="hero-title"
    >
      {/* Forme orange à gauche */}
      <span
        className="pointer-events-none absolute start-[-95px] top-[70px] z-[2] h-[250px] w-[150px] rounded-e-full bg-gradient-to-b from-[#ffb12b] to-[#f7871a] max-[560px]:hidden"
        aria-hidden="true"
      />

      {/* Image à droite, fondu vers la gauche */}
      <motion.div
        className="relative h-[270px] w-full lg:absolute lg:inset-y-0 lg:end-0 lg:h-auto lg:w-[64%] lg:[mask-image:linear-gradient(to_right,transparent_0%,#000_36%)] rtl:lg:[mask-image:linear-gradient(to_left,transparent_0%,#000_36%)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.65 }}
      >
        <SchoolImage
          src="/images/anas_school_images/hero-students.jpg"
          alt={
            lang === "fr"
              ? "Deux élèves souriants devant leur école"
              : "تلميذان سعيدان أمام مدرستهما"
          }
          preload
          sizes="(max-width: 1024px) 100vw, 64vw"
          className="object-cover object-[center_30%]"
        />
      </motion.div>

      {/* Vague orange → verte en bas à droite */}
      <span
        className="pointer-events-none absolute -bottom-9 end-[-6%] z-[2] hidden h-[90px] w-[44%] rotate-[-3deg] rounded-[100%] bg-gradient-to-r from-[#f7871a] to-[#7cc42a] lg:block rtl:rotate-[3deg]"
        aria-hidden="true"
      />

      <div className="mx-auto w-[min(1260px,calc(100%-56px))] max-[560px]:w-[calc(100%-36px)]">
        <div className="relative z-[3] py-[clamp(32px,5vw,60px)] lg:min-h-[470px] lg:flex lg:items-center">
          <motion.div
            className="max-w-[540px]"
            initial={{ opacity: 0, x: isArabic ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
          >
            <p className="mb-2 mt-0 text-[clamp(20px,2.2vw,28px)] font-[780] tracking-[-0.04em] text-[var(--navy)]">
              {text.hero.eyebrow}
            </p>

            <div className="flex items-start gap-3">
              <h1
                id="hero-title"
                className="m-0 flex flex-col leading-[1.05]"
              >
                <span
                  className="w-fit font-[Tahoma,Arial,sans-serif] text-[clamp(42px,5.4vw,68px)] font-[850] tracking-[-0.04em] text-[var(--navy)]"
                  lang="ar"
                  dir="rtl"
                >
                  {text.hero.name}
                </span>
                <span className="mt-[3px] text-[clamp(30px,3.6vw,48px)] font-[820] tracking-[-0.04em] text-[var(--orange)]">
                  {text.hero.englishName}
                </span>
              </h1>
              <Sparks className="mt-1 hidden size-[44px] text-[var(--orange)] lg:block" />
            </div>

            <p className="mb-6 mt-4 max-w-[440px] text-[clamp(15px,1.6vw,18px)] font-[600] italic leading-[1.55] text-[var(--navy)]">
              {text.hero.slogan}
            </p>

            <div className="flex flex-wrap gap-[10px]">
              <a
                className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full bg-[var(--orange)] px-6 text-[14px] font-[740] text-white shadow-[0_8px_20px_rgb(247_135_26_/_30%)] transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-[var(--orange-deep)] max-[560px]:px-4 max-[560px]:text-[12px]"
                href="#about"
                style={{ color: "#fff" }}
              >
                <GraduationCap size={18} aria-hidden="true" />
                {text.hero.discover}
                <Arrow size={16} aria-hidden="true" />
              </a>
              <a
                className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full border-2 border-[var(--navy)] bg-white/90 px-6 text-[14px] font-[740] text-[var(--navy)] transition-colors duration-200 hover:bg-[var(--navy)] hover:text-white max-[560px]:px-4 max-[560px]:text-[12px]"
                href="#contact"
              >
                {text.hero.enroll}
                <Arrow size={16} aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        </div>

        <a
          className="relative z-[3] mx-auto mb-3 flex w-fit items-center gap-[7px] text-[11px] font-[650] text-[#77869a]"
          href="#about"
        >
          <span>{text.hero.scroll}</span>
          <ArrowDown
            className="text-[var(--orange-deep)] animate-[nudge-down_1.8s_ease-in-out_infinite]"
            size={16}
            aria-hidden="true"
          />
        </a>
      </div>
    </section>
  );
}

export default Hero;