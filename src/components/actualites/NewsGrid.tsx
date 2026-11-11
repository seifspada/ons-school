"use client";

import { useSiteLanguage } from "@/src/components/layout/SiteShell";
import { copy } from "@/src/data/copy";
import type { NewsArticle } from "@/src/lib/news/types";
import NewsCard from "./NewsCard";

export default function NewsGrid({ articles }: { articles: NewsArticle[] }) {
  const { lang } = useSiteLanguage();
  const t = copy[lang].newsPage;

  return (
    <section className="py-[56px] max-[560px]:py-[40px]" aria-label={t.hero.title}>
      <div className="container">
        {articles.length === 0 ? (
          <p className="rounded-2xl bg-[var(--wash)] p-8 text-center text-sm text-[#58677b]">{t.empty}</p>
        ) : (
          <div className="grid grid-cols-3 gap-[22px] max-[1000px]:grid-cols-2 max-[700px]:grid-cols-1">
            {articles.map((a) => (
              <NewsCard key={a.id} article={a} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
