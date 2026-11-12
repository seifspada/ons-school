"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Brain, CheckCircle2, Heart, Users } from "lucide-react";
import type { SiteCopy } from "@/src/data/copy";
import { getOptimizedImageSrc } from "@/src/lib/images";

const benefitsImage = "/images/activities/together.jpg";
const benefitIcons = [Brain, Users, Heart] as const;

type Props = {
  t: SiteCopy["activitiesPage"]["benefits"];
  isArabic: boolean;
};

export default function ActivitiesBenefits({ t, isArabic }: Props) {
  return (
    <section
      className="bg-[var(--wash)] py-[76px] max-[850px]:py-[60px] max-[560px]:py-[48px]"
      aria-labelledby="activities-benefits-title"
    >
      <div className="container grid grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] items-center gap-[clamp(38px,6vw,78px)] max-[850px]:gap-[31px] max-[560px]:grid-cols-1 max-[560px]:gap-[30px]">
        <motion.div
          className="relative h-[360px] overflow-hidden rounded-[22px] border border-[#e5edf3] bg-[#e7f1f8] shadow-[0_15px_34px_rgb(18_53_104_/_9%)] max-[850px]:h-[300px] max-[560px]:h-[260px]"
          initial={{ opacity: 0, x: isArabic ? 18 : -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={getOptimizedImageSrc(benefitsImage)}
            alt={t.imageAlt}
            fill
            sizes="(max-width: 560px) calc(100vw - 36px), (max-width: 850px) 90vw, 50vw"
            className="object-cover object-center"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow">{t.eyebrow}</p>
          <h2
            id="activities-benefits-title"
            className="m-0 text-[clamp(28px,3.2vw,38px)] font-[790] leading-[1.23] tracking-[-0.045em] text-[var(--navy)] max-[560px]:text-[27px]"
          >
            {t.title}
          </h2>
          <p className="mb-6 mt-3 text-sm leading-[1.85] text-[#58677b]">
            {t.description}
          </p>
          <ul className="m-0 grid list-none gap-3 p-0">
            {t.items.map((title, index) => {
              const Icon = benefitIcons[index];
              return (
                <li
                  key={title}
                  className="flex items-center gap-3 rounded-[15px] border border-[#edf0f3] bg-white px-4 py-[14px] shadow-[0_5px_15px_rgb(18_53_104_/_5%)]"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#e5f4fb] text-[var(--blue-dark)]">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <span className="flex-1 text-sm font-[680] leading-[1.6] text-[#263953]">
                    {title}
                  </span>
                  <CheckCircle2
                    className="shrink-0 text-[var(--green)]"
                    size={19}
                    aria-hidden="true"
                  />
                </li>
              );
            })}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}