"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Atom,
  BarChart3,
  BookOpen,
  Bus,
  Calculator,
  Check,
  Cog,
  FlaskConical,
  Globe2,
  GraduationCap,
  Handshake,
  Laptop,
  Leaf,
  Lightbulb,
  Palette,
  Trophy,
  UsersRound,
  Volleyball,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { useSiteLanguage } from "@/src/components/layout/SiteShell";
import { SchoolImage } from "@/src/components/ui/SchoolImage";
import { collegeActivityImages, collegePageCopy } from "@/src/data/college-page";
import { PageBreadcrumb } from "@/src/components/ui/PageBreadcrumb";

/* Drapeau UK (pas d'icône lucide pour ça) */
function UKFlagIcon({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={(size * 3) / 5}
      viewBox="0 0 60 36"
      aria-hidden="true"
      className="overflow-hidden rounded-[3px]"
    >
      <rect width="60" height="36" fill="#1b3a8c" />
      <path d="M0 0L60 36M60 0L0 36" stroke="#fff" strokeWidth="7" />
      <path d="M0 0L60 36M60 0L0 36" stroke="#d62839" strokeWidth="3" />
      <path d="M30 0V36M0 18H60" stroke="#fff" strokeWidth="12" />
      <path d="M30 0V36M0 18H60" stroke="#d62839" strokeWidth="7" />
    </svg>
  );
}

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

/* Ordre = celui de la capture :
   Maths, Sciences, Français, Anglais, Histoire-Géo, Informatique, Physique-Chimie, SVT */
const subjectIcons: (LucideIcon | "uk")[] = [
  Calculator,
  Atom,
  BookOpen,
  "uk",
  Globe2,
  Laptop,
  FlaskConical,
  Leaf,
];
const subjectTiles = [
  "from-[#0f3f86] to-[#123568]",
  "from-[#7cc42a] to-[#5fae1d]",
  "from-[#3bb4ee] to-[#1d8fd6]",
  "from-[#ffa124] to-[#f7871a]",
  "from-[#6cc236] to-[#4fa82a]",
  "from-[#1678c8] to-[#0f5fa8]",
  "from-[#ffb21a] to-[#fb9a0b]",
  "from-[#8bd04a] to-[#6cbb2f]",
];

const introIcons = [BookOpen, UsersRound, Trophy];
const introTints = [
  "bg-[#eaf5fc] text-[#1678c8]",
  "bg-[#eef7e6] text-[#5fae1d]",
  "bg-[#fff3e2] text-[#f7871a]",
];
const approachIcons = [Lightbulb, BarChart3, Handshake];
const activityIcons = [Volleyball, Cog, Palette, Bus];
const activityBars = [
  "bg-[#6cb82c]/95",
  "bg-[#1ea0e6]/95",
  "bg-[#f7961c]/95",
  "bg-[#6cb82c]/95",
];

export function CollegePage() {
  const { lang } = useSiteLanguage();
  const text = collegePageCopy[lang];

  return (
    <main className="overflow-x-clip">
      {/* ============ HERO ============ */}
            {/* ============ HERO ============ */}
      <section
        className="relative overflow-hidden bg-white"
        aria-labelledby="college-hero-title"
      >
        {/* Forme orange à gauche */}
        <span
          className="pointer-events-none absolute start-[-95px] top-[70px] z-[2] h-[250px] w-[150px] rounded-e-full bg-gradient-to-b from-[#ffb12b] to-[#f7871a] max-[560px]:hidden"
          aria-hidden="true"
        />

        {/* Image à droite, fondu vers la gauche */}
        <motion.div
          className="relative h-[250px] w-full lg:absolute lg:inset-y-0 lg:end-0 lg:h-auto lg:w-[64%] lg:[mask-image:linear-gradient(to_right,transparent_0%,#000_36%)] rtl:lg:[mask-image:linear-gradient(to_left,transparent_0%,#000_36%)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.65 }}
        >
          <SchoolImage
            src="/images/anas_school_images/college-hero.jpg"
            alt={text.hero.imageAlt}
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

        {/* Décor : toque */}
        <GraduationCap
          className="pointer-events-none absolute end-[34%] top-6 z-[3] hidden text-[var(--orange)] lg:block"
          size={78}
          strokeWidth={1.4}
          aria-hidden="true"
        />

        <div className="container relative z-[3] py-[clamp(32px,5vw,56px)] lg:min-h-[360px]">
          <motion.div
            className="max-w-[560px]"
            initial={{ opacity: 0, x: lang === "ar" ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <PageBreadcrumb currentLabel={text.hero.title} />
            <div className="flex items-start gap-3">
              <h1
                id="college-hero-title"
                className="m-0 mt-4 text-[clamp(40px,5.4vw,66px)] font-[850] leading-[1.05] tracking-[-0.04em] text-[var(--navy)]"
              >
                {text.hero.title}
              </h1>
              <Sparks className="mt-5 hidden size-[44px] shrink-0 text-[var(--orange)] lg:block" />
            </div>
            <p
              className={`mb-0 mt-3 text-[clamp(22px,2.6vw,32px)] font-[800] leading-[1.15] tracking-[-0.03em] text-[var(--orange)] ${
                lang === "ar" ? "font-[Tahoma,Arial,sans-serif]" : ""
              }`}
            >
              {text.hero.subtitle}
            </p>
            <p className="mb-6 mt-4 max-w-[440px] text-[15px] leading-[1.6] text-[var(--navy)]">
              {text.hero.description}
            </p>
            <Link
              className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full bg-[var(--orange)] px-6 text-[14px] font-[740] text-white shadow-[0_8px_20px_rgb(247_135_26_/_30%)] transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-[var(--orange-deep)] [&>svg:last-child]:rtl:rotate-180"
              href="#introduction"
              style={{ color: "#fff" }}
            >
              <GraduationCap size={18} aria-hidden="true" />
              {text.hero.action}
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ============ INTRODUCTION ============ */}
      <section
        id="introduction"
        className="section"
        aria-labelledby="college-intro-title"
      >
        <div className="container grid items-center gap-[clamp(28px,5vw,60px)] lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            className="relative min-h-[300px] overflow-hidden rounded-[26px] border-[5px] border-white shadow-[0_14px_38px_rgb(18_53_104_/_14%)] before:pointer-events-none before:absolute before:start-0 before:top-0 before:z-10 before:size-16 before:rounded-ss-[26px] before:border-s-[5px] before:border-t-[5px] before:border-[var(--orange)] max-[560px]:min-h-[230px]"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
          >
            <SchoolImage
              src="/images/anas_school_images/school-building.jpg"
              alt={text.introduction.imageAlt}
              sizes="(max-width: 560px) 100vw, (max-width: 1190px) 45vw, 560px"
              className="object-cover object-center"
            />
          </motion.div>

          <div>
            <p className="mb-3 inline-block rounded-full bg-[var(--orange)] px-4 py-1.5 text-[13px] font-[750] text-white">
              {text.introduction.eyebrow}
            </p>
            <h2
              id="college-intro-title"
              className="m-0 text-[clamp(26px,3vw,36px)] font-[800] leading-[1.2] tracking-[-0.03em] text-[var(--navy)]"
            >
              {text.introduction.title}
            </h2>
            <p className="mb-5 mt-3 text-[14px] leading-[1.7] text-[#3d4f66]">
              {text.introduction.description}
            </p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {text.introduction.cards.map((card, index) => {
                const Icon = introIcons[index];
                return (
                  <motion.article
                    className={`flex flex-col items-center gap-2 rounded-[16px] border border-white p-4 text-center shadow-[0_6px_18px_rgb(18_53_104_/_7%)] ${introTints[index]}`}
                    key={card.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.35, delay: index * 0.07 }}
                  >
                    <Icon size={28} aria-hidden="true" />
                    <h3 className="m-0 text-[12px] font-[750] leading-[1.35] text-[var(--navy)]">
                      {card.title}
                    </h3>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ============ MATIÈRES ============ */}
      <section
        id="subjects"
        className="section pt-0"
        aria-labelledby="college-subjects-title"
      >
        <div className="container grid items-center gap-[clamp(24px,4vw,48px)] lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2
              id="college-subjects-title"
              className="m-0 text-[clamp(26px,3vw,34px)] font-[800] tracking-[-0.03em] text-[var(--navy)]"
            >
              {text.subjects.title}
            </h2>
            <span
              className="mb-4 mt-2 block h-[3px] w-[70px] rounded-full bg-[var(--orange)]"
              aria-hidden="true"
            />
            <p className="mb-4 text-[14px] leading-[1.6] text-[#3d4f66]">
              {text.subjects.description}
            </p>
            <ul className="m-0 mb-5 grid list-none gap-1.5 p-0">
              {text.subjects.items.map((subject) => (
                <li
                  key={subject.id}
                  className="flex items-center gap-2 text-[14px] font-[520] text-[var(--navy)]"
                >
                  <span className="grid size-[18px] shrink-0 place-items-center rounded-full bg-[var(--orange)] text-white">
                    <Check size={12} strokeWidth={3.5} aria-hidden="true" />
                  </span>
                  {subject.title}
                </li>
              ))}
            </ul>
            <Link
              className="button min-h-[42px] gap-2 rounded-full bg-[var(--orange)] px-5 text-[12px] text-white shadow-[0_6px_16px_rgb(247_135_26_/_28%)] [&>svg:last-child]:rtl:rotate-180"
              href="#subjects"
            >
              {text.subjects.action}
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {text.subjects.items.map((subject, index) => {
              const Icon = subjectIcons[index];
              return (
                <motion.div
                  className={`flex min-h-[110px] flex-col items-center justify-center gap-2.5 rounded-[14px] bg-gradient-to-br p-3 text-center text-white shadow-[0_8px_20px_rgb(18_53_104_/_14%)] transition-transform duration-200 hover:-translate-y-1 ${subjectTiles[index]}`}
                  key={subject.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.32, delay: index * 0.035 }}
                >
                  {Icon === "uk" ? (
                    <UKFlagIcon size={42} />
                  ) : (
                    <Icon size={38} strokeWidth={1.6} aria-hidden="true" />
                  )}
                  <h3 className="m-0 text-[13px] font-[750] leading-[1.25]">
                    {subject.title}
                  </h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ APPROCHE ============ */}
      <section className="section pt-0" aria-labelledby="college-approach-title">
        <div className="container grid items-center gap-[clamp(26px,4.5vw,56px)] lg:grid-cols-[1fr_1fr]">
          <motion.div
            className="relative min-h-[260px] overflow-hidden rounded-[22px] border-[4px] border-white shadow-[0_14px_38px_rgb(18_53_104_/_14%)] max-[560px]:min-h-[220px]"
            initial={{ opacity: 0, x: lang === "ar" ? 18 : -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
          >
            <SchoolImage
              src="/images/anas_school_images/college-study.jpg"
              alt={text.approach.imageAlt}
              sizes="(max-width: 560px) 100vw, (max-width: 1190px) 50vw, 560px"
              className="object-cover object-center"
            />
          </motion.div>

          <div>
            <p className="mb-3 inline-block rounded-full bg-[var(--orange)] px-4 py-1.5 text-[13px] font-[750] text-white">
              {text.approach.eyebrow}
            </p>
            <h2
              id="college-approach-title"
              className="m-0 text-[clamp(26px,3vw,36px)] font-[800] leading-[1.2] tracking-[-0.03em] text-[var(--navy)]"
            >
              {text.approach.title}
            </h2>
            <p className="mb-5 mt-3 text-[14px] leading-[1.7] text-[#3d4f66]">
              {text.approach.description}
            </p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {text.approach.features.map((feature, index) => {
                const Icon = approachIcons[index];
                return (
                  <article
                    className="flex flex-col items-center gap-2 rounded-[14px] border border-[#e1eef6] bg-[#f4fafd] p-4 text-center shadow-[0_5px_15px_rgb(18_53_104_/_6%)]"
                    key={feature.title}
                  >
                    <Icon
                      size={26}
                      className="text-[#1678c8]"
                      aria-hidden="true"
                    />
                    <h3 className="m-0 text-[12px] font-[750] leading-[1.3] text-[var(--navy)]">
                      {feature.title}
                    </h3>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ============ ACTIVITÉS ============ */}
      <section className="section pt-0" aria-labelledby="college-activities-title">
        <div className="container">
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="h-[2px] w-[clamp(40px,12vw,190px)] bg-[var(--orange)]" aria-hidden="true" />
            <h2
              id="college-activities-title"
              className="m-0 text-center text-[clamp(26px,3.2vw,36px)] font-[800] tracking-[-0.03em] text-[var(--navy)]"
            >
              {text.activities.title}
            </h2>
            <span className="h-[2px] w-[clamp(40px,12vw,190px)] bg-[var(--orange)]" aria-hidden="true" />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {text.activities.items.map((activity, index) => {
              const Icon = activityIcons[index];
              const image = collegeActivityImages[activity.id];
              return (
                <motion.article
                  className="group relative aspect-[1.25/1] overflow-hidden rounded-[16px] shadow-[0_8px_24px_rgb(18_53_104_/_12%)]"
                  key={activity.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -4 }}
                  viewport={{ once: true, amount: 0.18 }}
                  transition={{ duration: 0.36, delay: index * 0.06 }}
                >
                  <SchoolImage
                    src={image}
                    alt={activity.imageAlt}
                    sizes="(max-width: 560px) 100vw, (max-width: 850px) 50vw, 280px"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.05]"
                  />
                  <div
                    className={`absolute inset-x-0 bottom-0 flex items-center justify-center gap-2 py-2.5 text-white ${activityBars[index]}`}
                  >
                    <Icon size={20} aria-hidden="true" />
                    <h3 className="m-0 text-[14px] font-[750]">{activity.title}</h3>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="px-4 pb-[64px] pt-0">
        <div className="container flex flex-col items-center gap-5 overflow-hidden rounded-[999px] bg-[linear-gradient(110deg,#0f3567,#17508a)] px-[clamp(24px,5vw,56px)] py-6 text-white shadow-[0_18px_42px_rgb(18_53_104_/_20%)] max-[860px]:rounded-[28px] max-[860px]:text-center md:flex-row md:justify-between">
          <div className="flex flex-col items-center gap-4 md:flex-row">
            <GraduationCap size={56} strokeWidth={1.4} aria-hidden="true" />
            <div>
              <h2 className="m-0 text-[clamp(20px,2.4vw,26px)] font-[800] tracking-[-0.02em]">
                {text.cta.title}
              </h2>
              <p className="mb-0 mt-1 max-w-[560px] text-[13px] leading-[1.6] text-white/85">
                {text.cta.description}
              </p>
            </div>
          </div>
          <Link
            className="button min-h-[46px] shrink-0 gap-2 rounded-full border-transparent bg-[var(--orange)] px-6 text-[13px] text-white shadow-[0_6px_18px_rgb(0_0_0_/_20%)] hover:bg-[var(--orange-deep)] [&>svg:last-child]:rtl:rotate-180"
            href="#contact"
          >
            <GraduationCap size={17} aria-hidden="true" />
            {text.cta.action}
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}