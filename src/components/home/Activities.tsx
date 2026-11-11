import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { activities } from "@/src/data/activities";
import { copy } from "@/src/data/copy";
import type { Language } from "@/src/lib/types";
import { SchoolImage } from "@/src/components/ui/SchoolImage";
import { SectionHeading } from "@/src/components/ui/SectionHeading";

export function Activities({ lang }: { lang: Language }) {
  const text = copy[lang];
  return (
    <section className="section bg-white py-[68px] pb-[74px] max-[560px]:py-[51px]" id="activities">
      <div className="container">
        <div className="mb-6 flex items-end justify-between gap-6 max-[560px]:mb-[18px] max-[560px]:flex-col max-[560px]:items-start max-[560px]:gap-3">
          <SectionHeading
            eyebrow={text.activities.eyebrow}
            title={text.activities.title}
            subtitle={text.activities.subtitle}
          />
          <a className="inline-flex w-fit items-center gap-[7px] text-xs font-[730] text-[var(--navy)] transition-[gap,color] duration-[180ms] hover:gap-[11px] hover:text-[var(--orange-deep)]" href="#contact">
            {lang === "fr" ? "Découvrir nos activités" : "اكتشفوا أنشطتنا"}
            <ArrowRight size={17} aria-hidden="true" />
          </a>
        </div>
        <div className="grid grid-cols-4 gap-[19px] px-[2px] py-[5px] pb-2 max-[1100px]:gap-[13px] max-[850px]:grid-cols-2 max-[850px]:gap-4 max-[560px]:gap-[11px]" id="gallery">
          {activities.map((activity, index) => (
            <motion.a
              className="group min-w-0 rounded-[17px] border border-[#edf0f3] bg-white p-2 shadow-[0_6px_17px_rgb(18_53_104_/_7%)] transition-shadow duration-[180ms] hover:shadow-[0_13px_24px_rgb(18_53_104_/_13%)] max-[560px]:rounded-[13px] max-[560px]:p-[6px]"
              href="#contact"
              key={activity.id}
              initial={{ opacity: 0, y: 18, rotate: index % 2 ? 1 : -1 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              whileHover={{ y: -7, rotate: index % 2 ? 1.2 : -1.2 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
            >
              <div className="relative h-[177px] overflow-hidden rounded-[11px] bg-[#eef2f5] max-[1100px]:h-[150px] max-[850px]:h-[190px] max-[560px]:h-[clamp(115px,38vw,175px)] max-[560px]:rounded-[9px] [&>img]:object-cover">
                <SchoolImage
                  src={activity.image}
                  alt={activity.title[lang]}
                  sizes="(max-width: 560px) 42vw, (max-width: 850px) 44vw, (max-width: 1100px) 23vw, 300px"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.07]"
                />
                <span className="absolute end-[10px] bottom-[10px] grid size-[34px] place-items-center rounded-xl border border-white/75 bg-white/[0.94] text-[19px] text-[var(--orange-deep)] max-[560px]:end-[6px] max-[560px]:bottom-[6px] max-[560px]:size-[29px]" aria-hidden="true">{activity.icon}</span>
              </div>
              <h3 className="mb-[3px] mt-2 px-[5px] pt-1 pb-px text-sm font-[720] text-[var(--navy)] max-[560px]:px-[3px] max-[560px]:text-xs">{activity.title[lang]}</h3>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
