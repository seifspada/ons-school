"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CalendarDays } from "lucide-react";
import { useSiteLanguage } from "@/src/components/layout/SiteShell";
import { copy } from "@/src/data/copy";
import { categoryStyle, formatNewsDate } from "@/src/lib/news/format";
import type { NewsArticle } from "@/src/lib/news/types";
import NewsCard from "./NewsCard";
import { PageBreadcrumb } from "@/src/components/ui/PageBreadcrumb";

export default function NewsArticleView({ article, related }: { article: NewsArticle; related: NewsArticle[] }) {
  const { lang } = useSiteLanguage();
  const t = copy[lang].newsPage;
  const isAr = lang === "ar";
  const Back = isAr ? ArrowRight : ArrowLeft;

  return (
    <>
      <article className="bg-[linear-gradient(180deg,#f5faff,#fff_320px)] py-[34px] pb-[56px]">
        <div className="container max-w-[860px]">
          <PageBreadcrumb
            currentLabel={article.title[lang]}
            parent={{ href: "/actualites", label: t.hero.title }}
          />

          <div className="flex flex-wrap items-center gap-3">
            <span className={`rounded-full px-3 py-1 text-xs font-[750] ${categoryStyle[article.category]}`}>
              {t.categories[article.category]}
            </span>
            <time dateTime={article.publishedAt} className="inline-flex items-center gap-1.5 text-sm font-[650] text-[#58677b]">
              <CalendarDays size={15} aria-hidden="true" />
              {formatNewsDate(article.publishedAt, lang)}
            </time>
          </div>

          <h1 className="mb-0 mt-3 text-[clamp(30px,4vw,46px)] font-[820] leading-[1.15] tracking-[-0.04em] text-[var(--navy)]">
            {article.title[lang]}
          </h1>

          <div className="relative my-7 h-[clamp(220px,42vw,430px)] overflow-hidden rounded-[22px] bg-[#e7f1f8] shadow-[0_16px_36px_rgb(18_53_104_/_12%)]">
            <Image
              src={article.image.src}
              alt={article.image.alt[lang]}
              fill
              preload
              sizes="(max-width: 900px) calc(100vw - 36px), 860px"
              className="object-cover object-center"
            />
          </div>

          <div className="space-y-4 text-[15px] leading-[1.95] text-[#35506f]">
            {article.content[lang].map((p, i) => (
              <p key={i} className="m-0">{p}</p>
            ))}
          </div>

          <Link
            href="/actualites"
            className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-[var(--navy)] px-6 text-sm font-[720] text-white transition-colors hover:bg-[var(--blue-dark)]"
            style={{ color: "#fff" }}
          >
            <Back size={17} aria-hidden="true" />
            {t.backToNews}
          </Link>
        </div>
      </article>

      {related.length > 0 && (
        <section className="bg-[var(--wash)] py-[56px]" aria-labelledby="related-title">
          <div className="container">
            <h2 id="related-title" className="mb-6 mt-0 text-[clamp(24px,3vw,32px)] font-[790] text-[var(--navy)]">
              {t.related}
            </h2>
            <div className="grid grid-cols-3 gap-[22px] max-[1000px]:grid-cols-2 max-[700px]:grid-cols-1">
              {related.map((a) => (
                <NewsCard key={a.id} article={a} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
