import { motion } from "framer-motion";
import { ArrowDown, ArrowLeft, ArrowRight, GraduationCap, Sparkles } from "lucide-react";
import { copy } from "@/src/data/copy";
import type { Language } from "@/src/lib/types";
import { SchoolImage } from "@/src/components/ui/SchoolImage";

export function Hero({ lang }: { lang: Language }) {
  const text = copy[lang];
  const Arrow = lang === "ar" ? ArrowLeft : ArrowRight;

  return (
    <section
      className="relative isolate min-h-[514px] bg-[radial-gradient(ellipse_at_68%_7%,rgb(226_240_255_/_76%),transparent_36%),linear-gradient(110deg,#fffdfa_1%,#fff_42%,#f5faff_100%)] py-[34px] pb-5 before:absolute before:-top-px before:start-[-88px] before:z-[-1] before:h-[82%] before:w-[185px] before:rounded-[0_0_90%_0] before:bg-[linear-gradient(160deg,#ffe9be,#fff6e6_68%,transparent)] before:content-[''] max-[850px]:min-h-0 max-[850px]:py-[23px] max-[850px]:pb-4 max-[560px]:pt-[14px]"
      id="home"
      aria-labelledby="hero-title"
    >
      <div className="mx-auto grid min-h-[425px] w-[min(1260px,calc(100%-56px))] grid-cols-[minmax(340px,0.79fr)_minmax(0,1.21fr)] items-center gap-[30px] max-[1100px]:grid-cols-[minmax(300px,0.82fr)_minmax(0,1.18fr)] max-[850px]:min-h-0 max-[850px]:w-[calc(100%-42px)] max-[850px]:grid-cols-[minmax(260px,0.85fr)_minmax(0,1.15fr)] max-[850px]:gap-[15px] max-[560px]:w-[calc(100%-36px)] max-[560px]:grid-cols-1 max-[560px]:gap-0">
        <div className="relative z-[2] py-7 max-[560px]:px-[3px] max-[560px]:pt-5 max-[560px]:pb-3">
          <motion.div
            className="max-w-[470px] max-[560px]:max-w-full"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <p className="mb-[10px] mt-0 text-[clamp(22px,2.4vw,31px)] font-[780] tracking-[-0.04em] text-[var(--navy)] max-[850px]:text-2xl max-[560px]:mb-[6px] max-[560px]:text-[21px]">{text.hero.eyebrow}</p>
            <h1 className="m-0 flex flex-col gap-0 leading-[1.05]" id="hero-title">
              <span className="w-fit font-[Tahoma,Arial,sans-serif] text-[clamp(40px,5vw,66px)] font-[850] tracking-[-0.045em] text-[var(--orange)] max-[850px]:text-[clamp(40px,6vw,54px)] max-[560px]:text-[clamp(45px,13vw,60px)]" lang="ar" dir="rtl">{text.hero.name}</span>
              <span className="mt-[3px] text-[clamp(36px,4vw,54px)] font-[820] tracking-[-0.055em] text-[var(--brown)] max-[850px]:text-[clamp(34px,5vw,44px)] max-[560px]:text-[clamp(37px,10.5vw,50px)]">{text.hero.englishName}</span>
            </h1>
            <p className="mb-[23px] mt-[18px] max-w-[440px] text-[clamp(16px,1.7vw,20px)] font-[650] italic leading-[1.5] text-[var(--navy)] max-[850px]:text-base max-[560px]:mb-4 max-[560px]:mt-3 max-[560px]:max-w-[360px] max-[560px]:text-[15px]">{text.hero.slogan}</p>
            <div className="flex flex-wrap gap-[10px] max-[850px]:flex-col max-[850px]:items-start max-[560px]:flex-row max-[560px]:gap-2">
              <a className="button border-transparent bg-[var(--orange)] text-white shadow-[0_7px_18px_rgb(245_166_35_/_21%)] hover:bg-[var(--orange-deep)] hover:shadow-[0_10px_22px_rgb(245_166_35_/_29%)] max-[850px]:min-h-[43px] max-[850px]:text-xs max-[560px]:min-h-[42px] max-[560px]:gap-[6px] max-[560px]:px-3 max-[560px]:text-[11px]" href="#about">
                <GraduationCap size={19} aria-hidden="true" />
                {text.hero.discover}
                <Arrow size={17} aria-hidden="true" />
              </a>
              <a className="button border-[#d7e0eb] bg-white text-[var(--navy)] hover:border-[var(--navy)] hover:shadow-[0_6px_18px_rgb(18_53_104_/_9%)] max-[850px]:min-h-[43px] max-[850px]:text-xs max-[560px]:min-h-[42px] max-[560px]:gap-[6px] max-[560px]:px-3 max-[560px]:text-[11px]" href="#contact">
                {text.hero.enroll}
                <Arrow size={17} aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="relative flex min-w-0 items-center self-stretch max-[560px]:mt-[5px] max-[560px]:min-h-[250px]"
          initial={{ opacity: 0, x: 28, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.12, ease: "easeOut" }}
        >
          <div className="relative h-[min(405px,39vw)] min-h-[310px] w-full overflow-hidden rounded-[40%_15px_15px_15px] bg-[#e8f2f7] shadow-[0_22px_50px_rgb(35_70_107_/_11%)] max-[850px]:h-[350px] max-[850px]:min-h-[280px] max-[560px]:h-[clamp(250px,72vw,350px)] max-[560px]:min-h-0 max-[560px]:rounded-[33%_13px_13px_13px]">
            <SchoolImage
              src="/images/anas_school_images/hero-students.jpg"
              alt={lang === "fr" ? "Deux élèves souriants devant leur école" : "تلميذان سعيدان أمام مدرستهما"}
              preload
              sizes="(max-width: 560px) calc(100vw - 36px), (max-width: 850px) 57vw, (max-width: 1100px) 58vw, 735px"
              className="object-cover object-center"
            />
          </div>
          <span className="pointer-events-none absolute start-[3%] top-[15px] z-[1] grid size-[55px] place-items-center text-[var(--orange)] animate-[float_5s_ease-in-out_infinite]" aria-hidden="true"><Sparkles /></span>
          <span className="pointer-events-none absolute end-[4%] top-[16%] z-[1] text-[44px] text-[var(--blue)] animate-[float_4s_ease-in-out_infinite_reverse]" aria-hidden="true">✦</span>
          <div className="absolute end-[-9px] bottom-[25px] flex rotate-[-5deg] flex-col rounded-[12px_30px_12px_30px] bg-white/[0.94] px-[18px] py-[10px] pb-3 text-[17px] font-[780] italic leading-[1.25] text-[var(--navy)] shadow-[0_9px_22px_rgb(18_53_104_/_10%)] rtl:rotate-[5deg] max-[560px]:end-px max-[560px]:bottom-4 max-[560px]:px-[13px] max-[560px]:py-2 max-[560px]:text-sm">
            <span>{lang === "fr" ? "Apprendre" : "نتعلم"}</span>
            <span>{lang === "fr" ? "Grandir" : "ننمو"}</span>
            <span>{lang === "fr" ? "Réussir" : "ننجح"}</span>
          </div>
        </motion.div>
      </div>
      <a className="mx-auto mt-[6px] flex w-fit items-center gap-[7px] text-[11px] font-[650] text-[#77869a] max-[560px]:mt-[9px]" href="#about">
        <span>{text.hero.scroll}</span>
        <ArrowDown className="text-[var(--orange-deep)] animate-[nudge-down_1.8s_ease-in-out_infinite]" size={16} aria-hidden="true" />
      </a>
    </section>
  );
}
