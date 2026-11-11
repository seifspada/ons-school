"use client";

import { Bus, BookOpen, GraduationCap, LayoutGrid, Star, Trophy, type LucideIcon } from "lucide-react";
import type { GalleryFilter } from "@/src/lib/gallery/types";

const FILTERS: { key: GalleryFilter; Icon: LucideIcon }[] = [
  { key: "all", Icon: LayoutGrid },
  { key: "events", Icon: Star },
  { key: "activities", Icon: Trophy },
  { key: "pedagogy", Icon: GraduationCap },
  { key: "trips", Icon: Bus },
  { key: "school-life", Icon: BookOpen },
];

type Props = {
  active: GalleryFilter;
  labels: Record<GalleryFilter, string>;
  groupLabel: string;
  onChange: (f: GalleryFilter) => void;
};

function Sparks({ className }: { className?: string }) {
  return (
    <svg className={className} width="30" height="36" viewBox="0 0 30 36" fill="none" aria-hidden="true">
      <path d="M4 12 L12 18" stroke="var(--orange)" strokeWidth="4" strokeLinecap="round" />
      <path d="M2 24 L12 24" stroke="var(--orange)" strokeWidth="4" strokeLinecap="round" />
      <path d="M16 4 L22 14" stroke="var(--blue)" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

export default function GalleryFilters({ active, labels, groupLabel, onChange }: Props) {
  return (
    <div className="container relative pt-[34px]">
      <Sparks className="absolute start-0 top-[34px] max-[1100px]:hidden" />
      <Sparks className="absolute end-0 top-[34px] max-[1100px]:hidden" />
      <div
        role="group"
        aria-label={groupLabel}
        className="flex justify-center gap-3 overflow-x-auto px-1 pb-3 pt-1 [scrollbar-width:none] max-[1100px]:justify-start [&::-webkit-scrollbar]:hidden"
      >
        {FILTERS.map(({ key, Icon }) => {
          const isActive = key === active;
          return (
            <button
              key={key}
              type="button"
              aria-pressed={isActive}
              onClick={() => onChange(key)}
              className={`inline-flex min-h-12 shrink-0 items-center gap-2 rounded-full px-5 text-sm font-[720] shadow-[0_6px_16px_rgb(18_53_104_/_8%)] transition-[background-color,color,transform] duration-200 hover:-translate-y-0.5 ${
                isActive
                  ? "bg-[var(--blue-dark)] text-white"
                  : "bg-[#eaf3fc] text-[var(--navy)] hover:bg-[#dcebfa]"
              }`}
            >
              <Icon size={17} aria-hidden="true" />
              {labels[key]}
            </button>
          );
        })}
      </div>
    </div>
  );
}
