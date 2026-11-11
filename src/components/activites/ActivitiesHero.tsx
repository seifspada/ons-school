"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import type { SiteCopy } from "@/src/data/copy";
import { PageBreadcrumb } from "@/src/components/ui/PageBreadcrumb";
import { Sparks } from "./ActivitiesDecor";

const heroImage = "/images/activities/okii.jpg";

type Props = {
  t: SiteCopy["activitiesPage"]["hero"];
  isArabic: boolean;
  ActionIcon: LucideIcon;
};

export default function ActivitiesHero({ t, isArabic, ActionIcon }: Props) {
  return (
    <section
      className="relative overflow-hidden bg-white"
      aria-labelledby="activities-hero-title"
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
        <Image
          src={heroImage}
          alt={t.imageAlt}
          fill
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

      <div className="container relative z-[3] py-[clamp(32px,5vw,56px)] lg:min-h-[360px]">
        <motion.div
          className="max-w-[560px]"
          initial={{ opacity: 0, x: isArabic ? 20 : -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <PageBreadcrumb currentLabel={t.title} />
          <div className="flex items-start gap-3">
            <h1
              id="activities-hero-title"
              className="m-0 text-[clamp(40px,5.4vw,66px)] font-[850] leading-[1.05] tracking-[-0.04em] text-[var(--navy)]"
            >
              {t.title}
            </h1>
            <Sparks className="mt-1 hidden size-[44px] text-[var(--orange)] lg:block" />
          </div>
          <p
            className={`mb-0 mt-3 text-[clamp(22px,2.6vw,32px)] font-[800] leading-[1.15] tracking-[-0.03em] text-[var(--orange)] lg:w-[120%] ${
              isArabic ? "font-[Tahoma,Arial,sans-serif]" : ""
            }`}
          >
            {t.subtitle}
          </p>
          <p className="mb-6 mt-4 max-w-[440px] text-[15px] leading-[1.6] text-[var(--navy)]">
            {t.description}
          </p>
          <Link
            className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full bg-[var(--orange)] px-6 text-[14px] font-[740] text-white shadow-[0_8px_20px_rgb(247_135_26_/_30%)] transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-[var(--orange-deep)]"
            href="#activities-grid"
            style={{ color: "#fff" }}
          >
            {t.action}
            <ActionIcon size={17} aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}