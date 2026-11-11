"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight, Home } from "lucide-react";
import { useSiteLanguage } from "@/src/components/layout/SiteShell";
import { copy } from "@/src/data/copy";

type Props = {
  currentLabel: string;
  parent?: { href: string; label: string };
};

export function PageBreadcrumb({ currentLabel, parent }: Props) {
  const { lang } = useSiteLanguage();
  const isArabic = lang === "ar";
  const Chevron = isArabic ? ChevronLeft : ChevronRight;

  return (
    <nav
      aria-label={isArabic ? "مسار التنقل" : "Fil d’Ariane"}
      className="mb-5 flex min-w-0 flex-wrap items-center gap-3 text-sm font-semibold text-[var(--navy)]"
    >
      <Link
        href="/acceuil"
        className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-[#dce7f3] bg-white/80 px-3 py-1.5 text-[#526783] transition hover:border-[#f5a623] hover:text-[var(--navy)]"
      >
        <Home size={14} aria-hidden="true" />
        {copy[lang].nav.home}
      </Link>
      <ol className="flex min-w-0 list-none flex-wrap items-center gap-2 p-0">
        {parent ? (
          <>
            <li className="min-w-0">
              <Link href={parent.href} className="hover:underline">
                {parent.label}
              </Link>
            </li>
            <li aria-hidden="true">
              <Chevron size={14} />
            </li>
          </>
        ) : null}
        <li aria-current="page" className="min-w-0 break-words">
          {currentLabel}
        </li>
      </ol>
    </nav>
  );
}
