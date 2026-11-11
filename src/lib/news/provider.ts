import { cacheLife, cacheTag } from "next/cache";
import { mapApiArticle } from "./mapper";
import { mockNews } from "./mock-data";
import type { NewsArticle } from "./types";

async function fetchFromApi(): Promise<NewsArticle[]> {
  const url = process.env.NEWS_API_URL;
  if (!url) throw new Error("NEWS_API_URL is not set");

  const headers: HeadersInit = { Accept: "application/json" };
  if (process.env.NEWS_API_KEY) headers.Authorization = `Bearer ${process.env.NEWS_API_KEY}`;

  const res = await fetch(url, { headers, signal: AbortSignal.timeout(5000) });
  if (!res.ok) throw new Error(`News API responded ${res.status}`);

  const json: unknown = await res.json();
  // Accepte [...] ou { data: [...] } : adapte si besoin.
  const list = Array.isArray(json) ? json : (json as { data?: unknown })?.data;
  if (!Array.isArray(list)) throw new Error("Unexpected news API shape");

  const articles = list.map(mapApiArticle).filter((a): a is NewsArticle => a !== null);
  if (articles.length === 0) throw new Error("News API returned no valid article");
  return articles;
}

async function loadNews(): Promise<NewsArticle[]> {
  "use cache";
  cacheLife("minutes");
  cacheTag("news");

  let articles = mockNews;
  if (process.env.NEWS_SOURCE === "api") {
    try {
      articles = await fetchFromApi();
    } catch (error) {
      console.error("[news] API failed, using mock data:", error);
    }
  }
  return [...articles].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export async function getAllNews(): Promise<NewsArticle[]> {
  return loadNews();
}

export async function getNewsBySlug(slug: string): Promise<NewsArticle | null> {
  return (await loadNews()).find((a) => a.slug === slug) ?? null;
}

export async function getRelatedNews(slug: string, limit = 3): Promise<NewsArticle[]> {
  const all = await loadNews();
  const current = all.find((a) => a.slug === slug);
  const others = all.filter((a) => a.slug !== slug);
  const same = others.filter((a) => a.category === current?.category);
  const rest = others.filter((a) => a.category !== current?.category);
  return [...same, ...rest].slice(0, limit);
}
