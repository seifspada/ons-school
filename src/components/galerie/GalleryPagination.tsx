"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  page: number;
  pageCount: number;
  labels: { nav: string; page: string; next: string; previous: string };
  isRtl: boolean;
  onChange: (page: number) => void;
};

export default function GalleryPagination({ page, pageCount, labels, isRtl, onChange }: Props) {
  if (pageCount <= 1) return null; // pas de page vide ni de pagination inutile

  const Next = isRtl ? ChevronLeft : ChevronRight;
  const Prev = isRtl ? ChevronRight : ChevronLeft;
  const base = "grid size-11 place-items-center rounded-full text-sm font-[740] shadow-[0_5px_14px_rgb(18_53_104_/_10%)] transition-colors";

  return (
    <nav aria-label={labels.nav} className="mt-9 flex items-center justify-center gap-2.5">
      {page > 1 && (
        <button type="button" aria-label={labels.previous} onClick={() => onChange(page - 1)} className={`${base} bg-white text-[var(--navy)] hover:bg-[#eaf3fc]`}>
          <Prev size={18} aria-hidden="true" />
        </button>
      )}
      {Array.from({ length: pageCount }, (_, i) => i + 1).map((n) => (
        <button
          key={n}
          type="button"
          aria-label={`${labels.page} ${n}`}
          aria-current={n === page ? "page" : undefined}
          onClick={() => onChange(n)}
          className={`${base} ${n === page ? "bg-[var(--blue-dark)] text-white" : "bg-white text-[var(--navy)] hover:bg-[#eaf3fc]"}`}
        >
          {n}
        </button>
      ))}
      {page < pageCount && (
        <button type="button" aria-label={labels.next} onClick={() => onChange(page + 1)} className={`${base} bg-white text-[var(--navy)] hover:bg-[#eaf3fc]`}>
          <Next size={18} aria-hidden="true" />
        </button>
      )}
    </nav>
  );
}
