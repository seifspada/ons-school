import { motion } from "framer-motion";
import { ArrowRight, CalendarDays } from "lucide-react";
import { newsItems } from "@/src/data/news";
import { copy } from "@/src/data/copy";
import type { Language } from "@/src/lib/types";
import { SchoolImage } from "@/src/components/ui/SchoolImage";
import { SectionHeading } from "@/src/components/ui/SectionHeading";

export function News({ lang }: { lang: Language }) {
  const text = copy[lang];
  return (
    <section id="news">
      <SectionHeading
        className="mb-5 [&_h2]:text-[clamp(23px,2.5vw,29px)]"
        eyebrow={text.news.eyebrow}
        title={text.news.title}
      />
      <div className="grid grid-cols-3 gap-[14px] max-[850px]:grid-cols-2 max-[560px]:grid-cols-1 max-[560px]:gap-[13px]">
          {newsItems.map(({ id, image }, index) => {
            const article = text.news.items[id];
            return (
              <motion.article
                className="group min-w-0 overflow-hidden rounded-[14px] border border-[#ebeff3] bg-white shadow-[0_4px_13px_rgb(18_53_104_/_5%)] transition-[box-shadow,transform] duration-[180ms] hover:-translate-y-[3px] hover:shadow-[0_11px_24px_rgb(18_53_104_/_10%)] max-[560px]:grid max-[560px]:grid-cols-[37%_1fr]"
                key={id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
              >
                <a className="relative block h-32 overflow-hidden bg-[#eef2f5] max-[850px]:h-[170px] max-[560px]:h-full max-[560px]:min-h-[165px]" href="#contact" aria-label={`${text.news.readMore} : ${article.title}`}>
                  <SchoolImage
                    src={image}
                    alt={article.title}
                    loading="eager"
                    sizes="(max-width: 560px) 37vw, (max-width: 850px) 48vw, 33vw"
                    className="object-cover transition-transform duration-[450ms] group-hover:scale-[1.06]"
                  />
                </a>
                <div className="px-[13px] py-3 pb-[14px] max-[560px]:p-[11px]">
                  <p className="mb-[6px] mt-0 flex items-center gap-[5px] text-[10px] font-[650] text-[#8a641c]">
                    <CalendarDays size={14} aria-hidden="true" />
                    {text.news.datePending}
                  </p>
                  <h3 className="mb-[6px] mt-0 text-sm font-[760] leading-[1.4] text-[var(--navy)]"><a href="#contact">{article.title}</a></h3>
                  <p className="mb-[10px] mt-0 min-h-[55px] text-[11px] leading-[1.6] text-[#667489] max-[560px]:mb-2 max-[560px]:min-h-0">{article.description}</p>
                  <a className="inline-flex w-fit items-center gap-[7px] text-[11px] font-[730] text-[var(--navy)] transition-[gap,color] duration-[180ms] hover:gap-[11px] hover:text-[var(--orange-deep)]" href="#contact">
                    {text.news.readMore}<ArrowRight size={16} aria-hidden="true" />
                  </a>
                </div>
              </motion.article>
            );
          })}
      </div>
    </section>
  );
}
