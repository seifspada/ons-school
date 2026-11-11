"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Lightbulb,
  School,
  ShieldCheck,
  Sparkles,
  Trophy,
  UsersRound,
} from "lucide-react";
import Link from "next/link";
import { aboutPageCopy } from "@/src/data/about-page";
import { useSiteLanguage } from "@/src/components/layout/SiteShell";
import { SchoolImage } from "@/src/components/ui/SchoolImage";
import { PageBreadcrumb } from "@/src/components/ui/PageBreadcrumb";
import { copy } from "@/src/data/copy";

const valueIcons = [BookOpen, ShieldCheck, Trophy];
const principleIcons = [BookOpen, UsersRound, Lightbulb];
const facilityIcons = [School, BookOpen, Sparkles];

export function AboutPage() {
  const { lang } = useSiteLanguage();
  const text = aboutPageCopy[lang];

  return (
    <main className="bg-white">
      <section
        className="relative overflow-hidden bg-[radial-gradient(ellipse_at_72%_8%,rgb(222_239_255_/_86%),transparent_38%),linear-gradient(110deg,#fffdfa_1%,#fff_47%,#f5faff_100%)] py-[24px] pb-[34px] before:absolute before:top-[-35px] before:start-[-90px] before:h-[115%] before:w-[130px] before:rounded-[0_0_85%_0] before:bg-[linear-gradient(150deg,#ffb12b,#ffd37c_60%,transparent)] before:content-[''] after:absolute after:bottom-[-68px] after:end-[-40px] after:h-[110px] after:w-[48%] after:rounded-[100%_0_0_0] after:bg-[linear-gradient(155deg,#6daa28,#9aca4b)] after:content-[''] max-[850px]:py-[22px] max-[850px]:pb-[30px] max-[560px]:pt-[18px] max-[560px]:pb-[25px] max-[560px]:after:h-[60px]"
        aria-labelledby="about-hero-title"
      >
        <div className="container relative z-[1] grid min-h-[320px] grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] items-center gap-[clamp(28px,5vw,68px)] max-[850px]:min-h-[290px] max-[850px]:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] max-[850px]:gap-[24px] max-[560px]:min-h-0 max-[560px]:grid-cols-1 max-[560px]:gap-[18px]">
          <motion.div
            className="relative z-[1]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <PageBreadcrumb currentLabel={copy[lang].nav.about} />
            <h1 id="about-hero-title" className="m-0 max-w-[440px] text-[clamp(32px,3.8vw,48px)] font-[820] leading-[1.03] tracking-[-0.045em] text-[var(--navy)] max-[850px]:text-[clamp(29px,4.2vw,39px)] max-[560px]:max-w-[440px] max-[560px]:text-[clamp(32px,9vw,42px)]">
              {lang === "fr" ? <>Une école pour<br />apprendre, grandir<br /><span className="text-[var(--orange)]">et réussir</span></> : text.hero.title}
            </h1>
            <p className="mb-0 mt-[13px] w-fit font-[Tahoma,Arial,sans-serif] text-[clamp(18px,2vw,24px)] font-[730] leading-[1.5] text-[var(--navy)] max-[560px]:mt-[9px] max-[560px]:text-[19px]" lang="ar" dir="rtl">{text.hero.subtitle}</p>
            <span className="ms-[45px] mt-[7px] block h-[4px] w-[120px] rounded-[100%] bg-[var(--orange)] max-[560px]:ms-8" aria-hidden="true" />
          </motion.div>
          <motion.div
            className="relative h-[clamp(250px,31vw,370px)] overflow-hidden rounded-[36%_18px_18px_18px] bg-[#e7f1f8] shadow-[0_20px_46px_rgb(18_53_104_/_12%)] max-[850px]:h-[280px] max-[560px]:h-[clamp(220px,64vw,300px)] max-[560px]:rounded-[30%_15px_15px_15px] [&>img]:object-cover [&>img]:object-center"
            initial={{ opacity: 0, x: lang === "ar" ? -24 : 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <SchoolImage
              src="/images/optimized/a-propos.webp"
              alt={text.hero.imageAlt}
              preload
              sizes="(max-width: 560px) calc(100vw - 36px), (max-width: 850px) 52vw, 54vw"
            />
            <span className="absolute start-[14px] top-[15px] grid size-[46px] place-items-center rounded-2xl bg-white/90 text-[var(--orange)] shadow-[0_7px_20px_rgb(18_53_104_/_11%)] animate-[float_5s_ease-in-out_infinite] max-[560px]:size-[38px]" aria-hidden="true"><Sparkles /></span>
          </motion.div>
        </div>
      </section>

      <section className="section py-[72px] max-[560px]:py-[49px]" id="about" aria-labelledby="about-school-title">
        <div className="container grid grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] items-center gap-[clamp(38px,6vw,78px)] max-[850px]:gap-[31px] max-[560px]:grid-cols-1 max-[560px]:gap-[30px]">
          <motion.div
            className="relative h-[clamp(270px,33vw,370px)] overflow-visible rounded-[22px] bg-[#e7eff4] shadow-[0_15px_34px_rgb(18_53_104_/_11%)] max-[850px]:h-[290px] max-[560px]:h-[clamp(230px,63vw,300px)] max-[560px]:rounded-[18px] [&>img]:overflow-hidden [&>img]:rounded-[inherit] [&>img]:object-cover"
            initial={{ opacity: 0, x: lang === "ar" ? 22 : -22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5 }}
          >
            <SchoolImage
              src="/images/anas_school_images/school-building.jpg"
              alt={lang === "fr" ? "Le bâtiment d’ONS School" : "مبنى أونس سكول"}
              sizes="(max-width: 560px) calc(100vw - 36px), (max-width: 850px) 47vw, 46vw"
            />
            <span className="absolute right-[15px] bottom-[-14px] inline-flex items-center gap-2 rounded-xl border border-[#f1e7d6] bg-white px-[14px] py-[9px] text-xs font-[730] text-[var(--brown)] shadow-[0_6px_19px_rgb(18_53_104_/_10%)]">
              <span className="text-[17px] text-[var(--orange)]" aria-hidden="true">✦</span> ONS School
            </span>
          </motion.div>
          <motion.div
            className="relative z-[1]"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5 }}
          >
            <p className="eyebrow">{text.school.eyebrow}</p>
            <h2 id="about-school-title" className="m-0 text-[clamp(28px,3.2vw,38px)] font-[790] leading-[1.23] tracking-[-0.045em] text-[var(--navy)] max-[560px]:text-[27px]">{text.school.title}</h2>
            <p className="my-[15px] mb-[23px] text-sm leading-[1.85] text-[#58677b] max-[560px]:my-3 max-[560px]:mb-[17px] max-[560px]:text-[13px]">{text.school.description}</p>
            <div className="grid grid-cols-3 gap-[11px] max-[850px]:grid-cols-1 max-[560px]:gap-[9px]">
              {text.school.values.map((value, index) => {
                const Icon = valueIcons[index];
                const valueIconClass = [
                  "bg-[#e5f4fb] text-[var(--blue-dark)]",
                  "bg-[#eef7e5] text-[var(--green-dark)]",
                  "bg-[#fff4df] text-[#e78a0a]",
                ][index];
                return (
                  <article className="flex min-h-[104px] flex-col items-center justify-center rounded-[15px] border border-[#edf0f3] bg-white px-[10px] py-[11px] text-center shadow-[0_5px_15px_rgb(18_53_104_/_5%)] transition-[box-shadow,transform] duration-[180ms] hover:-translate-y-[3px] hover:shadow-[0_11px_22px_rgb(18_53_104_/_9%)] max-[850px]:min-h-0 max-[850px]:items-center max-[850px]:gap-1 max-[850px]:p-[9px] max-[560px]:min-h-[78px]" key={value.title}>
                    <span className={`grid size-[28px] place-items-center rounded-lg max-[560px]:shrink-0 ${valueIconClass}`}><Icon size={18} aria-hidden="true" /></span>
                    <div>
                      <h3 className="mb-0 mt-[5px] text-xs font-[760] leading-tight text-[var(--navy)] max-[850px]:mt-0">{value.title}</h3>
                      <p className="m-0 font-[Tahoma,Arial,sans-serif] text-[10px] font-[650] leading-tight text-[var(--navy)]" lang="ar" dir="rtl">{value.arabic}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section bg-[#f7fafc] max-[560px]:py-[49px]" id="approach" aria-labelledby="about-approach-title">
        <div className="container grid grid-cols-[minmax(0,0.82fr)_minmax(0,1.2fr)_minmax(170px,0.64fr)] items-center gap-[clamp(20px,3vw,40px)] max-[850px]:grid-cols-1 max-[850px]:gap-6 max-[560px]:gap-[22px]">
          <motion.div
            className="min-w-0"
            initial={{ opacity: 0, x: lang === "ar" ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <p className="eyebrow">{text.approach.eyebrow}</p>
            <h2 id="about-approach-title" className="m-0 max-w-[560px] text-[clamp(28px,3.2vw,38px)] font-[790] leading-[1.23] tracking-[-0.045em] text-[var(--navy)] max-[560px]:text-[27px]">{text.approach.title}</h2>
            <p className="mt-[15px] mb-[19px] text-sm leading-[1.75] text-[#58677b] max-[560px]:my-3 max-[560px]:mb-4 max-[560px]:text-[13px]">{text.approach.description}</p>
            <Link className="button min-h-[40px] gap-[7px] border-transparent bg-[var(--orange)] px-[15px] py-2 text-[11px] text-white shadow-[0_6px_16px_rgb(245_166_35_/_20%)] hover:bg-[var(--orange-deep)]" href="#facilities">
              {lang === "fr" ? "En savoir plus" : "اعرف المزيد"}
              <ArrowRight className="rtl:rotate-180" size={15} aria-hidden="true" />
            </Link>
          </motion.div>
          <motion.div
            className="relative min-h-[285px] self-stretch overflow-hidden rounded-[22px] border border-[#e8edf2] bg-[#eaf3f8] shadow-[0_12px_30px_rgb(18_53_104_/_8%)] max-[850px]:min-h-[300px] max-[560px]:min-h-[235px] max-[560px]:rounded-[19px] [&>img]:object-cover [&>img]:object-[center_45%]"
            initial={{ opacity: 0, x: lang === "ar" ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <SchoolImage
              src="/images/anas_school_images/pedagogy-teacher.jpg"
              alt={text.approach.imageAlt}
              sizes="(max-width: 560px) calc(100vw - 36px), (max-width: 850px) 90vw, 48vw"
            />
          </motion.div>
          <div className="grid gap-[10px] max-[850px]:grid-cols-3 max-[850px]:gap-[11px] max-[560px]:grid-cols-1">
            {text.approach.principles.map((principle, index) => {
              const Icon = principleIcons[index];
              const principleIconClass = [
                "bg-[#fff0d4] text-[#e78a0a]",
                "bg-[#e8f4df] text-[var(--green-dark)]",
                "bg-[#e3f3fb] text-[var(--blue-dark)]",
              ][index];
              return (
                <article className="flex min-h-[76px] items-center gap-[11px] rounded-[15px] border border-[#e8edf2] bg-white px-[11px] py-[10px] shadow-[0_5px_15px_rgb(18_53_104_/_6%)] max-[850px]:min-h-[105px] max-[850px]:flex-col max-[850px]:items-start max-[850px]:justify-center max-[850px]:gap-[7px] max-[850px]:p-[10px] max-[560px]:min-h-[65px] max-[560px]:flex-row max-[560px]:items-center" key={principle.title}>
                  <span className={`grid size-[44px] shrink-0 place-items-center rounded-full ${principleIconClass} max-[850px]:size-[37px] max-[850px]:rounded-[13px]`}>
                    <Icon size={21} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="m-0 text-[11px] font-[760] leading-[1.35] text-[var(--navy)] max-[850px]:text-[10px] max-[560px]:text-[11px]">{principle.title}</h3>
                    <p className="mb-0 mt-[3px] text-[9px] leading-[1.4] text-[#647286] max-[850px]:text-[8px] max-[560px]:text-[10px]">{principle.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section" id="facilities" aria-labelledby="facilities-title">
        <div className="container grid grid-cols-[minmax(0,0.82fr)_minmax(0,2fr)] items-center gap-[clamp(24px,4vw,55px)] max-[850px]:grid-cols-1 max-[850px]:gap-[22px]">
          <div className="max-w-[360px] max-[850px]:max-w-[620px]">
            <p className="eyebrow">{text.facilities.eyebrow}</p>
            <h2 id="facilities-title" className="m-0 text-[clamp(26px,2.7vw,35px)] font-[790] leading-[1.23] tracking-[-0.045em] text-[var(--navy)] max-[560px]:text-[27px]">{text.facilities.title}</h2>
            <p className="mb-0 mt-3 max-w-[330px] text-xs leading-[1.65] text-[#68778b] max-[560px]:text-[11px]">{text.facilities.note}</p>
            <span className="ms-[10px] mt-[10px] block h-[4px] w-[100px] rounded-[100%] bg-[var(--orange)]" aria-hidden="true" />
          </div>
          <div className="grid grid-cols-3 gap-[14px] max-[560px]:grid-cols-1 max-[560px]:gap-[13px]">
            {text.facilities.cards.map((facility, index) => {
              const FacilityIcon = facilityIcons[index];
              const labelClass = [
                "bg-[var(--green-dark)]",
                "bg-[#079dcc]",
                "bg-[#ff9d12]",
              ][index];
              return (
                <motion.article
                  className="group overflow-hidden rounded-[16px] border border-[#e8edf2] bg-white shadow-[0_6px_19px_rgb(18_53_104_/_6%)] transition-shadow hover:shadow-[0_11px_24px_rgb(18_53_104_/_11%)] max-[560px]:grid max-[560px]:grid-cols-[38%_1fr] max-[560px]:rounded-[14px]"
                  key={facility.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -4 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: index * 0.07 }}
                >
                  <div className="relative h-[clamp(150px,15vw,190px)] overflow-hidden bg-[radial-gradient(ellipse_at_80%_18%,rgb(255_255_255_/_82%),transparent_37%),linear-gradient(145deg,#eff4f7,#e7eef3)] max-[850px]:h-[180px] max-[560px]:h-full max-[560px]:min-h-[130px]">
                    <SchoolImage
                      src={facility.image}
                      alt={facility.imageAlt}
                      sizes="(max-width: 560px) 38vw, (max-width: 850px) 30vw, 28vw"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    <div className={`absolute inset-x-0 bottom-0 flex min-h-[34px] items-center justify-center gap-[7px] px-2 text-center text-[11px] font-[740] text-white max-[560px]:hidden ${labelClass}`}>
                      <FacilityIcon size={15} aria-hidden="true" />
                      <span>{facility.title}</span>
                    </div>
                  </div>
                  <div className="hidden p-3 max-[560px]:block max-[560px]:self-center">
                    <h3 className="mt-0 mb-[6px] text-base font-[740] text-[var(--navy)] max-[560px]:text-sm">{facility.title}</h3>
                    <p className="m-0 text-[10px] leading-[1.55] text-[#758296] max-[560px]:text-[9px]">{facility.imagePlaceholder}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-[18px] max-[560px]:py-3" aria-labelledby="about-levels-title">
        <div className="container relative flex min-h-[112px] items-center gap-[22px] overflow-hidden rounded-[24px] bg-[radial-gradient(ellipse_at_0%_100%,rgb(29_111_169_/_43%),transparent_48%),linear-gradient(110deg,#123568,#0b2d5a_65%,#16467b)] px-[26px] py-5 text-white shadow-[0_8px_24px_rgb(18_53_104_/_18%)] after:absolute after:end-[12%] after:top-[-140px] after:size-[240px] after:rounded-full after:border after:border-white/10 after:content-[''] max-[560px]:min-h-0 max-[560px]:flex-wrap max-[560px]:gap-3 max-[560px]:rounded-[18px] max-[560px]:px-[17px] max-[560px]:py-[17px]">
          <div className="relative z-[1] grid size-[78px] shrink-0 place-items-center text-[#fff3ce] max-[560px]:size-[54px]">
            <BookOpen size={54} strokeWidth={1.4} aria-hidden="true" />
            <Sparkles className="absolute -end-1 top-0 text-[#ffc04a]" size={17} aria-hidden="true" />
          </div>
          <div className="relative z-[1] min-w-0 flex-1">
            <p className="mt-0 mb-[3px] text-[11px] font-[730] text-[#f9c95f]">{lang === "fr" ? "Primaire & collège" : "الابتدائي والإعدادي"}</p>
            <h2 id="about-levels-title" className="m-0 text-[clamp(23px,2.7vw,32px)] font-[790] leading-[1.2] tracking-[-0.04em] text-white max-[560px]:text-[21px]">{text.levels.title}</h2>
            <p className="mb-0 mt-1 text-[10px] leading-[1.45] text-[#e2eaf5] max-[560px]:text-[9px]">{lang === "fr" ? "Primaire ou Collège, nous accompagnons votre enfant à chaque étape." : "نرافق طفلكم في كل خطوة من مسيرته التعليمية."}</p>
          </div>
          <div className="relative z-[1] flex shrink-0 flex-wrap gap-[9px] max-[560px]:w-full max-[560px]:flex-col">
            <Link className="button min-h-[40px] gap-[7px] border-transparent bg-[var(--green)] px-[14px] py-2 text-[10px] text-white shadow-[0_4px_12px_rgb(0_0_0_/_10%)] hover:bg-[var(--green-dark)] max-[560px]:justify-start [&>svg:last-child]:rtl:scale-x-[-1]" href="/acceuil#primary">
              <BookOpen size={18} aria-hidden="true" />
              {text.levels.primary}
              <ArrowRight className={lang === "ar" ? "scale-x-[-1]" : ""} size={17} aria-hidden="true" />
            </Link>
            <Link className="button min-h-[40px] gap-[7px] border-transparent bg-[#079dcc] px-[14px] py-2 text-[10px] text-white shadow-[0_4px_12px_rgb(0_0_0_/_10%)] hover:bg-[#087ba8] max-[560px]:justify-start [&>svg:last-child]:rtl:scale-x-[-1]" href="/college">
              <Sparkles size={18} aria-hidden="true" />
              {text.levels.college}
              <ArrowRight className={lang === "ar" ? "scale-x-[-1]" : ""} size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
