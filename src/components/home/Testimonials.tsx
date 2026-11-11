"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";
import { useState } from "react";
import { testimonials } from "@/src/data/testimonials";
import { copy } from "@/src/data/copy";
import type { Language } from "@/src/lib/types";
import { SchoolImage } from "@/src/components/ui/SchoolImage";
import { SectionHeading } from "@/src/components/ui/SectionHeading";

export function Testimonials({ lang }: { lang: Language }) {
  const [current, setCurrent] = useState(0);
  const text = copy[lang];
  const previous = () => setCurrent((index) => (index - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((index) => (index + 1) % testimonials.length);
  const testimonial = testimonials[current];

  return (
    <section aria-labelledby="testimonials-heading">
        <SectionHeading
          className="mb-5 [&_h2]:text-[clamp(23px,2.5vw,29px)]"
          eyebrow={text.testimonials.eyebrow}
          title={text.testimonials.title}
          titleId="testimonials-heading"
        />
        <div className="relative min-h-[308px] rounded-[19px] border border-[#e7ebf0] bg-[linear-gradient(145deg,#fff,#f9fbfd)] px-5 pt-5 pb-[15px] shadow-[0_8px_24px_rgb(18_53_104_/_7%)] max-[850px]:min-h-0 max-[560px]:px-4 max-[560px]:pt-[17px] max-[560px]:pb-[13px]" aria-roledescription={lang === "fr" ? "carrousel" : "عرض دوار"}>
          <AnimatePresence mode="wait">
            <motion.div
              className="min-h-[220px] max-[850px]:min-h-[175px] max-[560px]:min-h-[186px]"
              key={`${lang}-${testimonial.id}`}
              initial={{ opacity: 0, x: lang === "ar" ? -12 : 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: lang === "ar" ? 12 : -12 }}
              transition={{ duration: 0.25 }}
              aria-live="polite"
            >
              <div className="flex items-center gap-3">
                <div className="relative size-[61px] shrink-0 overflow-hidden rounded-full border-[3px] border-white bg-[#eef2f5] shadow-[0_3px_10px_rgb(18_53_104_/_12%)]">
                  <SchoolImage
                    src={testimonial.image}
                    alt={lang === "fr" ? "Portrait illustratif d'un parent" : "صورة توضيحية لولي"}
                    sizes="61px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="mb-[5px] mt-0 text-[11px] font-[650] text-[#5b687a]">{text.testimonials.role}</p>
                  <div className="flex gap-[2px] text-[var(--orange)]" aria-label="5 étoiles sur 5">
                    {Array.from({ length: 5 }, (_, index) => (
                      <Star key={index} size={15} fill="currentColor" aria-hidden="true" />
                    ))}
                  </div>
                </div>
              </div>
              <Quote className="absolute end-5 top-5 fill-[#fff5da] text-[#f1c56d]" size={28} aria-hidden="true" />
              <blockquote className="my-[18px] mb-[9px] text-sm font-[600] leading-[1.75] text-[#344258] max-[560px]:text-[13px]">{text.testimonials.items[current]}</blockquote>
              <p className="m-0 text-[10px] font-[580] leading-[1.5] text-[#8a6c36]">{text.testimonials.placeholder}</p>
            </motion.div>
          </AnimatePresence>
          <div className="flex items-center justify-between">
            <button className="grid size-[34px] place-items-center rounded-full border border-[#dfe6ee] bg-white text-[var(--navy)] transition-colors duration-[180ms] hover:bg-[var(--navy)] hover:text-white" type="button" onClick={previous} aria-label={text.testimonials.previous}>
              <ArrowLeft size={17} aria-hidden="true" />
            </button>
            <div className="flex items-center gap-[7px]" aria-label={`${current + 1} / ${testimonials.length}`}>
              {testimonials.map((item, index) => (
                <button
                  type="button"
                  key={item.id}
                  className={`h-[7px] w-[7px] rounded-full bg-[#cbd4df] transition-[width,background] duration-[180ms] ${index === current ? "w-[19px] rounded-md bg-[var(--orange)]" : ""}`}
                  aria-label={`${index + 1} / ${testimonials.length}`}
                  aria-pressed={index === current}
                  onClick={() => setCurrent(index)}
                />
              ))}
            </div>
            <button className="grid size-[34px] place-items-center rounded-full border border-[#dfe6ee] bg-white text-[var(--navy)] transition-colors duration-[180ms] hover:bg-[var(--navy)] hover:text-white" type="button" onClick={next} aria-label={text.testimonials.next}>
              <ArrowRight size={17} aria-hidden="true" />
            </button>
        </div>
      </div>
    </section>
  );
}
