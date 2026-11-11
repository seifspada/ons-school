"use client";

import { motion, animate, useInView } from "framer-motion";
import { Smile, Sparkles, Trophy, UsersRound } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { copy } from "@/src/data/copy";
import { statistics } from "@/src/data/statistics";
import type { Language } from "@/src/lib/types";
import { SectionHeading } from "@/src/components/ui/SectionHeading";

const icons = [UsersRound, Sparkles, Trophy, Smile];

function Counter({
  value,
  fallback,
}: {
  value: number | null;
  fallback: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.7 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (value === null || !isInView) return;
    const controls = animate(0, value, {
      duration: 1.25,
      ease: "easeOut",
      onUpdate: (latest) => setCount(Math.round(latest)),
    });
    return () => controls.stop();
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-lg font-[820] leading-[1.25] tracking-[-0.04em] text-[var(--ink)] max-[560px]:text-[15px]">
      {value === null ? fallback : count}
      {value === 100 ? "%" : value !== null && value > 0 ? "+" : ""}
    </span>
  );
}

export function Statistics({ lang }: { lang: Language }) {
  const text = copy[lang];
  return (
    <section className="bg-[linear-gradient(105deg,#fff7e8,#fffaf1_48%,#f4faff)] py-8 pb-[38px] max-[560px]:py-[31px] max-[560px]:pb-[27px]" aria-label={text.statistics.title}>
      <div className="container">
        <div className="mb-[22px] max-[560px]:mb-[14px] [&_h2]:text-[clamp(22px,2.5vw,29px)] max-[560px]:[&_h2]:text-[22px]">
          <SectionHeading
            eyebrow={text.statistics.eyebrow}
            title={text.statistics.title}
            align="center"
          />
        </div>
        <div className="grid grid-cols-4 max-[560px]:grid-cols-2">
          {statistics.map(({ id, value }, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                className={`flex min-h-[73px] items-center justify-center gap-[14px] px-4 py-[10px] max-[560px]:min-h-[68px] max-[560px]:justify-start max-[560px]:gap-[10px] max-[560px]:px-[5px] max-[560px]:py-[9px] max-[560px]:[&:nth-child(even)]:border-s-[1px] max-[560px]:[&:nth-child(even)]:border-[#e8c98d] ${index > 0 ? "border-s border-[#e8c98d] max-[560px]:border-s-0" : ""}`}
                key={id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
              >
                <span className={`grid size-[45px] shrink-0 place-items-center rounded-[15px] bg-white shadow-[0_4px_12px_rgb(32_54_74_/_5%)] max-[560px]:size-[37px] max-[560px]:rounded-xl ${index === 0 || index === 3 ? "text-[var(--orange-deep)]" : index === 1 ? "text-[var(--blue-dark)]" : "text-[var(--green-dark)]"}`}>
                  <Icon size={23} aria-hidden="true" />
                </span>
                <div className="flex flex-col items-start">
                  <Counter value={value} fallback={text.statistics.pending} />
                  <span className="text-[11px] font-[570] text-[#536176] max-[560px]:text-[10px]">
                    {text.statistics.labels[index]}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
