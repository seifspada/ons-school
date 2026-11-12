"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CalendarDays } from "lucide-react";
import { useSiteLanguage } from "@/src/components/layout/SiteShell";
import { copy } from "@/src/data/copy";
import { getOptimizedImageSrc } from "@/src/lib/images";
import { categoryStyle, formatNewsDate } from "@/src/lib/news/format";
import type { NewsArticle } from "@/src/lib/news/types";

export default function NewsCard({ article, priority = false }: { article: NewsArticle; priority?: boolean }) {
  const { lang } = useSiteLanguage();
  const t = copy[lang].newsPage;
  const Arrow = lang === "ar" ? ArrowLeft : ArrowRight;

  return (
    <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-[20px] border border-[#edf0f3] bg-white p-[9px] shadow-[0_7px_22px_rgb(18_53_104_/_7%)] transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-[0_14px_28px_rgb(18_53_104_/_12%)]">
      <Link href={`/actualites/${article.slug}`} className="relative block h-[210px] overflow-hidden rounded-[14px] bg-[#eef2f5] max-[560px]:h-[clamp(190px,58vw,250px)]" tabIndex={-1} aria-hidden="true">
        <Image
          src={getOptimizedImageSrc(article.image.src)}
          alt=""
          fill
          priority={priority}
          sizes="(max-width: 700px) calc(100vw - 54px), (max-width: 1000px) 46vw, 360px"
          className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.05]"
        />
      </Link>
      <div className="relative -mt-[210px] h-[210px] pointer-events-none max-[560px]:-mt-[clamp(190px,58vw,250px)] max-[560px]:h-[clamp(190px,58vw,250px)]">
        <time
          dateTime={article.publishedAt}
          className="absolute start-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-[700] text-[var(--navy)] shadow-sm"
        >
          <CalendarDays size={14} aria-hidden="true" />
          {formatNewsDate(article.publishedAt, lang)}
        </time>
        <span className={`absolute bottom-3 start-3 rounded-full px-3 py-1 text-xs font-[750] ${categoryStyle[article.category]}`}>
          {t.categories[article.category]}
        </span>
      </div>
      <div className="flex flex-1 flex-col px-2 pb-3 pt-4">
        <h3 className="m-0 text-[18px] font-[780] leading-snug text-[var(--navy)]">{article.title[lang]}</h3>
        <p className="mb-3 mt-2 text-[13px] leading-[1.75] text-[#58677b]">{article.excerpt[lang]}</p>
        <Link
          href={`/actualites/${article.slug}`}
          className="mt-auto inline-flex min-h-11 items-center gap-2 self-start text-sm font-[740] text-[var(--orange)] hover:underline"
        >
          {t.readMore}
          <Arrow size={16} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
