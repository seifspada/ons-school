import { Suspense } from "react";
import type { Metadata } from "next";
import NewsPageShell from "@/src/components/actualites/NewsPageShell";
import NewsHero from "@/src/components/actualites/NewsHero";
import NewsGrid from "@/src/components/actualites/NewsGrid";
import NewsGridSkeleton from "@/src/components/actualites/NewsGridSkeleton";
import Newsletter from "@/src/components/actualites/Newsletter";
import { getAllNews } from "@/src/lib/news/provider";

export const metadata: Metadata = {
  title: "Actualités | ONS School",
  description: "Restez informé de la vie de notre école et de nos dernières actualités.",
  openGraph: {
    title: "Actualités | ONS School",
    description: "Restez informé de la vie de notre école et de nos dernières actualités.",
    type: "website",
    images: ["/images/optimized/hero-students.webp"],
  },
};

async function NewsList() {
  const articles = await getAllNews();
  return <NewsGrid articles={articles} />;
}

export default function Page() {
  return (
    <NewsPageShell>
      <NewsHero />
      <Suspense fallback={<NewsGridSkeleton />}>
        <NewsList />
      </Suspense>
      <Newsletter />
    </NewsPageShell>
  );
}
