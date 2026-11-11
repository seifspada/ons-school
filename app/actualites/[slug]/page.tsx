import type { Metadata } from "next";
import { notFound } from "next/navigation";
import NewsPageShell from "@/src/components/actualites/NewsPageShell";
import NewsArticleView from "@/src/components/actualites/NewsArticleView";
import { getAllNews, getNewsBySlug, getRelatedNews } from "@/src/lib/news/provider";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const articles = await getAllNews();
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await getNewsBySlug(slug);
  if (!article) return {};
  return {
    title: `${article.title.fr} | ONS School`,
    description: article.excerpt.fr,
    openGraph: {
      title: article.title.fr,
      description: article.excerpt.fr,
      type: "article",
      publishedTime: article.publishedAt,
      images: [article.image.src],
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const article = await getNewsBySlug(slug);
  if (!article) notFound();
  const related = await getRelatedNews(slug, 3);

  return (
    <NewsPageShell>
      <NewsArticleView article={article} related={related} />
    </NewsPageShell>
  );
}
