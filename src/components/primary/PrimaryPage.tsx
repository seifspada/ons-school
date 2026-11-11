"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Brain,
  Compass,
  Heart,
  Lightbulb,
  NotebookPen,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";
import Link from "next/link";
import { primaryActivities, primaryLevels, primaryPageCopy } from "@/src/data/primary-page";
import { useSiteLanguage } from "@/src/components/layout/SiteShell";
import { SchoolImage } from "@/src/components/ui/SchoolImage";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { PageBreadcrumb } from "@/src/components/ui/PageBreadcrumb";

const valueIcons = [Lightbulb, Heart, Sparkles];
const principleIcons = [NotebookPen, Compass, Brain];
const benefitIcons = [UsersRound, BookOpen, ShieldCheck];
const principleIconClasses = [
  "bg-[#f0f8e9] text-[var(--green-dark)]",
  "bg-[#fff4dc] text-[#c98512]",
  "bg-[#e9f5fc] text-[var(--blue-dark)]",
];
const benefitIconClasses = [
  "bg-[#e9f5fc] text-[var(--blue-dark)]",
  "bg-[#f0f8e9] text-[var(--green-dark)]",
  "bg-[#fff4dc] text-[#c98512]",
];

export function PrimaryPage() {
  const { lang } = useSiteLanguage();
  const text = primaryPageCopy[lang];

  return (
    <main className="primary-page">
      <section className="primary-hero" aria-labelledby="primary-hero-title">
        <div className="container primary-hero-inner">
          <motion.div
            className="primary-hero-copy"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <PageBreadcrumb currentLabel={text.hero.title} />
            <p className="primary-hero-kicker">
              <span aria-hidden="true">✦</span>
              {lang === "fr" ? "Le premier pas vers l’avenir" : "الخطوة الأولى نحو المستقبل"}
            </p>
            <h1 id="primary-hero-title">{text.hero.title}</h1>
            <p className="primary-hero-subtitle">{text.hero.subtitle}</p>
            <p className="primary-hero-description">{text.hero.description}</p>
            <Link className="button button--orange" href="/a-propos">
              {text.hero.action}<ArrowRight size={17} aria-hidden="true" />
            </Link>
          </motion.div>
          <motion.div
            className="primary-hero-photo"
            initial={{ opacity: 0, x: lang === "ar" ? -22 : 22 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <SchoolImage
              src="/images/anas_school_images/primary-hero.jpg"
              alt={text.hero.imageAlt}
              preload
              sizes="(max-width: 560px) calc(100vw - 36px), (max-width: 850px) 46vw, 46vw"
            />
            <span className="primary-hero-sticker" aria-hidden="true">
              <Sparkles size={18} />
              <span>{lang === "fr" ? "Découvrir" : "نكتشف"}</span>
            </span>
          </motion.div>
        </div>
      </section>

      <section className="primary-intro section" aria-labelledby="primary-intro-title">
        <div className="container">
          <SectionHeading
            eyebrow={text.introduction.eyebrow}
            title={text.introduction.title}
            titleId="primary-intro-title"
            align="center"
          />
          <p className="primary-intro-description">{text.introduction.description}</p>
          <div className="primary-intro-photo">
            <SchoolImage
              src="/images/anas_school_images/primary-study.jpg"
              sizes="(max-width: 560px) calc(100vw - 36px), (max-width: 850px) 70vw, 65vw"
              alt={lang === "fr"
                ? "Une élève du primaire écrit dans son cahier en classe"
                : "تلميذة في المرحلة الابتدائية تكتب في دفترها داخل الفصل"}
            />
          </div>
          <div className="primary-values">
            {text.introduction.values.map((value, index) => {
              const Icon = valueIcons[index];
              return (
                <motion.article
                  className={`primary-value primary-value--${index + 1}`}
                  key={value.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -4 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.38, delay: index * 0.07 }}
                >
                  <span className="primary-value-icon"><Icon size={22} aria-hidden="true" /></span>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
        </section>

      <section
        className="section bg-[#f7fafc] max-[560px]:py-12"
        aria-labelledby="primary-levels-title"
      >
        <div className="container grid grid-cols-[minmax(0,0.95fr)_minmax(0,0.9fr)_minmax(0,1.15fr)] items-start gap-[clamp(20px,3vw,42px)] max-[850px]:grid-cols-1 max-[850px]:gap-6">
          <div>
            <SectionHeading
              eyebrow={text.levels.eyebrow}
              title={text.levels.title}
              titleId="primary-levels-title"
              align="left"
            />
            {primaryLevels.length > 0 ? (
              <div className="flex flex-wrap justify-center gap-[14px]">
                {primaryLevels.map((grade, index) => (
                  <motion.div
                    className="flex min-h-[100px] min-w-[165px] flex-col items-center justify-center rounded-[17px] border border-[#dfe9d4] bg-[linear-gradient(145deg,#f8fbed,#fff)] px-5 py-[14px] shadow-[0_5px_17px_rgb(18_53_104_/_5%)]"
                    key={grade}
                    initial={{ opacity: 0, scale: 0.94 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.35, delay: index * 0.06 }}
                  >
                    <span className="text-[11px] font-[760] text-[var(--green-dark)]">{String(index + 1).padStart(2, "0")}</span>
                    <h3 className="mt-[5px] text-[15px] text-[var(--navy)]">{grade}</h3>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="flex items-start gap-[10px]">
                <span className="grid size-[42px] shrink-0 place-items-center rounded-[14px] bg-[#edf6e4] text-[var(--green-dark)]"><BookOpen size={23} aria-hidden="true" /></span>
                <p className="m-0 text-[13px] leading-[1.65] text-[#415168]">{text.levels.pending}</p>
              </div>
            )}
          </div>
          <div className="relative mt-[18px] aspect-[1.4/1] w-full overflow-hidden rounded-[22px] bg-[#f3f5f2] max-[850px]:mx-auto max-[850px]:mt-0 max-[850px]:aspect-[2/1] max-[850px]:w-full max-[850px]:max-w-[520px] max-[560px]:rounded-2xl">
            <SchoolImage
              src="/images/anas_school_images/primary-supplies.jpg"
              sizes="(max-width: 560px) calc(100vw - 36px), (max-width: 850px) 100vw, (max-width: 1190px) 30vw, 450px"
              className="object-cover object-center"
              alt={lang === "fr"
                ? "Des livres, des crayons et une pomme pour illustrer les fournitures scolaires"
                : "كتب وأقلام وتفاحة توضح اللوازم المدرسية"}
            />
          </div>
          <motion.div
            className="w-full rounded-[20px] border border-[#e0edf5] bg-[linear-gradient(145deg,#edf7fc,#e6f3fb)] p-[clamp(18px,2vw,26px)] shadow-[0_8px_22px_rgb(18_53_104_/_6%)] max-[560px]:rounded-[17px] max-[560px]:p-[18px]"
            aria-labelledby="primary-approach-title"
            initial={{ opacity: 0, y: 17 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5 }}
          >
            <p className="eyebrow">{text.approach.eyebrow}</p>
            <h2 id="primary-approach-title" className="m-0 text-[clamp(21px,2vw,27px)] font-[790] leading-[1.22] tracking-[-0.035em] text-[var(--navy)] max-[560px]:text-[27px]">{text.approach.title}</h2>
            <p className="my-[10px] mb-[14px] text-[12px] leading-[1.65] text-[#5e6d80]">{text.approach.description}</p>
            <div className="grid gap-[10px]">
              {text.approach.principles.map((principle, index) => {
                const Icon = principleIcons[index];
                return (
                  <article className="flex items-start gap-3" key={principle.title}>
                    <span className={`grid size-10 shrink-0 place-items-center rounded-[13px] ${principleIconClasses[index]}`}>
                      <Icon size={19} aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="m-0 text-[13px] font-[730] text-[#243650]">{principle.title}</h3>
                      <p className="mt-[3px] mb-0 text-[11px] leading-[1.55] text-[#6a778a]">{principle.description}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      <section
        className="section bg-[#f7fafc] max-[560px]:py-[49px]"
        aria-labelledby="primary-activities-title"
      >
        <div className="container">
          <div className="mx-auto mb-[26px] max-w-[760px] text-center max-[560px]:mb-[19px]">
            <SectionHeading
              eyebrow={text.activities.eyebrow}
              title={text.activities.title}
              titleId="primary-activities-title"
              align="center"
            />
            <p className="mt-[10px] mb-0 text-[11px] leading-[1.6] text-[#8a641c] max-[560px]:text-[10px]">{text.activities.note}</p>
          </div>
          <div className="mx-auto grid w-full max-w-[980px] grid-cols-3 gap-4 max-[850px]:grid-cols-2 max-[560px]:gap-[11px]">
            {primaryActivities.map((activity, index) => {
              const item = text.activities.items[index];
              return (
                <motion.article
                  className="overflow-hidden rounded-2xl border border-[#e8edf2] bg-white shadow-[0_6px_18px_rgb(18_53_104_/_5%)] max-[560px]:rounded-[13px] [&:last-child:nth-child(odd)]:max-[850px]:col-span-full [&:last-child:nth-child(odd)]:max-[850px]:w-[calc(50%_-_8px)] [&:last-child:nth-child(odd)]:max-[850px]:justify-self-center"
                  key={activity.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -4 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.38, delay: index * 0.06 }}
                >
                  <div className="relative h-[168px] overflow-hidden bg-[#eaf0f4] max-[850px]:h-[190px] max-[560px]:h-[clamp(116px,36vw,165px)] [&>img]:object-cover [&>img]:transition-transform [&>img]:duration-[450ms] [&>img]:ease-[ease] group">
                    <SchoolImage
                      src={activity.image}
                      alt={item.imageAlt}
                      sizes="(max-width: 560px) 46vw, (max-width: 850px) 48vw, (max-width: 1100px) 30vw, 310px"
                      className="transition-transform duration-[450ms] group-hover:scale-105"
                    />
                    <span className="absolute right-2 bottom-2 left-2 w-fit rounded-[7px] border border-white/70 bg-white/95 px-2 py-[5px] text-[9px] font-bold text-[#79550e] max-[560px]:right-[5px] max-[560px]:bottom-[5px] max-[560px]:left-[5px] max-[560px]:px-[5px] max-[560px]:py-1 max-[560px]:text-[8px] rtl:left-auto rtl:right-2">{text.activities.pending}</span>
                  </div>
                  <h3 className="m-0 px-[13px] pt-3 pb-[14px] text-[14px] font-[730] text-[var(--navy)] max-[560px]:px-[9px] max-[560px]:pt-[9px] max-[560px]:pb-[11px] max-[560px]:text-xs">{item.title}</h3>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section bg-white max-[560px]:py-12">
        <div className="container grid grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] items-stretch gap-[18px] max-[850px]:grid-cols-1">
          <section className="rounded-[20px] border border-[#e0edf5] bg-[linear-gradient(145deg,#edf7fc,#e6f3fb)] p-[clamp(20px,2.5vw,30px)] shadow-[0_8px_22px_rgb(18_53_104_/_6%)]" aria-labelledby="primary-benefits-title">
            <div className="mb-[18px] max-[560px]:mb-5">
              <SectionHeading
                eyebrow={text.reasons.eyebrow}
                title={text.reasons.title}
                titleId="primary-benefits-title"
                align="left"
              />
            </div>
            <div className="grid gap-[11px]">
              {text.reasons.items.map((benefit, index) => {
                const Icon = benefitIcons[index];
                return (
                  <motion.article
                    className="grid grid-cols-[25px_minmax(0,1fr)] items-center gap-x-[9px]"
                    key={benefit.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4, delay: index * 0.07 }}
                  >
                    <span className={`row-span-2 grid size-[25px] place-items-center rounded-full [&>svg]:size-[15px] ${benefitIconClasses[index]}`}>
                      <Icon size={22} aria-hidden="true" />
                    </span>
                    <h3 className="m-0 mb-0.5 text-xs font-[740] text-[var(--navy)] max-[560px]:text-[13px]">{benefit.title}</h3>
                    <p className="m-0 text-[10px] leading-[1.5] text-[#6a778a]">{benefit.description}</p>
                  </motion.article>
                );
              })}
            </div>
          </section>

          <section className="relative flex min-h-full items-center overflow-hidden rounded-[20px] bg-[radial-gradient(ellipse_at_0%_100%,rgb(29_111_169_/_43%),transparent_48%),linear-gradient(110deg,#123568,#0b2d5a_65%,#16467b)] p-[clamp(22px,2.5vw,32px)] text-white max-[560px]:min-h-0 max-[560px]:p-[22px] after:absolute after:top-[-150px] after:right-[12%] after:size-[250px] after:rounded-full after:border after:border-white/10 after:content-['']" aria-labelledby="primary-enrollment-title">
            <div className="relative z-[1] flex flex-col items-start gap-[18px] max-[560px]:gap-[17px]">
              <div>
                <p className="m-0 mb-[5px] text-[11px] font-[710] text-[#f9c95f]">{lang === "fr" ? "Une nouvelle aventure commence ici" : "مغامرة جديدة تبدأ هنا"}</p>
                <h2 id="primary-enrollment-title" className="m-0 text-[clamp(21px,2.4vw,29px)] font-[790] leading-[1.25] tracking-[-0.04em] text-white max-[560px]:text-[26px]">{text.cta.title}</h2>
                <span className="mt-[6px] block text-xs text-[#d7e3f2] max-[560px]:text-[11px]">{text.cta.subtitle}</span>
              </div>
              <Link className="button flex-none border-transparent bg-[var(--orange)] text-white shadow-[0_7px_18px_rgb(0_0_0_/_14%)] hover:bg-[var(--orange-deep)]" href="/acceuil#contact">
                {text.cta.action}<ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
