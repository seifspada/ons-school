import { motion } from "framer-motion";
import { BookOpenCheck, ShieldCheck, Sparkles } from "lucide-react";
import { copy } from "@/src/data/copy";
import type { Language } from "@/src/lib/types";
import { SchoolImage } from "@/src/components/ui/SchoolImage";
import { SectionHeading } from "@/src/components/ui/SectionHeading";

const advantageIcons = [BookOpenCheck, ShieldCheck, Sparkles];

export function About({ lang }: { lang: Language }) {
  const text = copy[lang];
  return (
    <section className="section bg-white pt-[62px] max-[560px]:pt-[46px]" id="about">
      <div className="container grid grid-cols-[0.98fr_1.02fr] items-center gap-[clamp(38px,6vw,76px)] max-[850px]:grid-cols-2 max-[850px]:gap-8 max-[560px]:grid-cols-1 max-[560px]:gap-[31px]">
        <motion.div
          className="relative pb-6 ps-5 max-[560px]:pb-[17px] max-[560px]:ps-3"
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
        >
          <div className="relative h-[305px] overflow-hidden rounded-3xl bg-[#e8f1f5] shadow-[0_14px_36px_rgb(18_53_104_/_10%)] max-[850px]:h-[260px] max-[560px]:h-[clamp(210px,61vw,290px)] max-[560px]:rounded-[19px] [&>img]:object-cover">
            <SchoolImage
              src="/images/anas_school_images/school-building.jpg"
              alt={lang === "fr" ? "Bâtiment scolaire ONS School" : "مبنى مدرسة أنس سكول"}
              sizes="(max-width: 560px) calc(100vw - 36px), (max-width: 850px) 45vw, 46vw"
            />
          </div>
          <div className="absolute end-0 bottom-0 flex items-center gap-[9px] rounded-[14px] border border-[#f3e7d2] bg-white px-[17px] py-3 text-xs font-[700] text-[var(--navy)] shadow-[0_7px_21px_rgb(27_43_63_/_9%)] max-[560px]:px-3 max-[560px]:py-[9px] max-[560px]:text-[10px]">
            <span className="text-[19px] text-[var(--orange)]" aria-hidden="true">✦</span>
            <p className="m-0">{lang === "fr" ? "Un cadre propice à l'épanouissement" : "بيئة تساعد على النمو"}</p>
          </div>
        </motion.div>
        <motion.div
          className="min-w-0"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
        >
          <SectionHeading eyebrow={text.about.eyebrow} title={text.about.title} />
          <p className="my-[19px] mb-[25px] max-w-[560px] text-sm leading-[1.85] text-[#56657a] max-[560px]:my-[14px] max-[560px]:mb-[21px] max-[560px]:text-[13px]">{text.about.description}</p>
          <ul className="m-0 grid list-none grid-cols-3 gap-[13px] p-0 max-[850px]:grid-cols-1 max-[850px]:gap-[10px] max-[560px]:grid-cols-2 max-[560px]:gap-3">
            {text.about.advantages.map((advantage, index) => {
              const Icon = advantageIcons[index];
              const iconClass = [
                "bg-[#e8f5fb] text-[var(--blue-dark)]",
                "bg-[#eff8e6] text-[var(--green-dark)]",
                "bg-[#fff5df] text-[#d48a10]",
              ][index];
              return (
                <li className="flex items-center gap-[9px] text-xs font-[650] leading-[1.35] text-[#34445a] max-[850px]:text-[13px] max-[560px]:gap-[7px] max-[560px]:text-[11px]" key={advantage}>
                  <span className={`grid size-[35px] shrink-0 place-items-center rounded-xl max-[560px]:size-8 ${iconClass}`}>
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <span>{advantage}</span>
                </li>
              );
            })}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
