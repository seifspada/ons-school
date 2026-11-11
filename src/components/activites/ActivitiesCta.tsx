"use client";

import Link from "next/link";
import { GraduationCap, type LucideIcon } from "lucide-react";
import type { SiteCopy } from "@/src/data/copy";
import { Sparks } from "./ActivitiesDecor";

type Props = {
  t: SiteCopy["activitiesPage"]["cta"];
  ActionIcon: LucideIcon;
};

export default function ActivitiesCta({ t, ActionIcon }: Props) {
  return (
    <section
      className="px-4 pb-[56px] pt-[clamp(12px,2vw,20px)]"
      aria-labelledby="activities-cta-title"
    >
      <div className="container flex flex-col items-center gap-5 rounded-[999px] bg-[linear-gradient(110deg,#0f3567,#17508a)] px-[clamp(24px,5vw,56px)] py-6 text-white shadow-[0_18px_42px_rgb(18_53_104_/_20%)] max-[860px]:rounded-[28px] max-[860px]:text-center md:flex-row md:justify-between">
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-5">
          <GraduationCap size={56} strokeWidth={1.4} aria-hidden="true" />
          <span
            className="hidden h-12 w-px bg-white/25 md:block"
            aria-hidden="true"
          />
          <div>
            <h2
              id="activities-cta-title"
              className="m-0 text-[clamp(20px,2.4vw,28px)] font-[800] tracking-[-0.02em] text-white"
            >
              {t.title}
            </h2>
            <p className="mb-0 mt-1 max-w-[560px] text-[14px] leading-[1.5] text-white/90">
              {t.description}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Sparks className="hidden size-9 text-[var(--orange)] md:block" />
          <Link
            className="inline-flex min-h-[48px] shrink-0 items-center justify-center gap-2 rounded-full bg-[var(--orange)] px-6 text-[14px] font-[740] text-white shadow-[0_6px_18px_rgb(0_0_0_/_20%)] transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-[var(--orange-deep)]"
            href="#contact"
            style={{ color: "#fff" }}
          >
            <GraduationCap size={18} aria-hidden="true" />
            {t.action}
            <ActionIcon size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}