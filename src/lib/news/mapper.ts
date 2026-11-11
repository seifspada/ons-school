import type { NewsArticle, NewsCategory } from "./types";

const CATEGORIES: NewsCategory[] = [
  "events", "pedagogy", "activities", "projects", "school-life", "trips",
];

const str = (v: unknown, fallback = "") => (typeof v === "string" ? v : fallback);
const rec = (v: unknown): Record<string, unknown> =>
  v && typeof v === "object" ? (v as Record<string, unknown>) : {};
const paragraphs = (v: unknown): string[] =>
  Array.isArray(v) ? v.filter((p): p is string => typeof p === "string") : [];

/**
 * SEUL endroit qui connaît le format de l'API.
 * Les noms de champs à gauche (raw.xxx) sont des HYPOTHÈSES : adapte-les.
 *
 *   raw.id            -> id
 *   raw.slug          -> slug
 *   raw.category      -> category (events | pedagogy | activities | projects | school-life | trips)
 *   raw.published_at  -> publishedAt (ISO 8601)
 *   raw.image_url     -> image.src      raw.image_alt_fr/_ar -> image.alt
 *   raw.title_fr/_ar  -> title          raw.excerpt_fr/_ar   -> excerpt
 *   raw.content_fr/_ar (string[])       -> content
 *
 * Retourne null si l'article est inutilisable (il sera ignoré).
 */
export function mapApiArticle(input: unknown): NewsArticle | null {
  const raw = rec(input);
  const slug = str(raw.slug);
  const category = str(raw.category) as NewsCategory;
  const publishedAt = str(raw.published_at);
  const imageSrc = str(raw.image_url);

  if (!slug || !CATEGORIES.includes(category) || Number.isNaN(Date.parse(publishedAt)) || !imageSrc) {
    return null;
  }

  return {
    id: str(raw.id, slug),
    slug,
    category,
    publishedAt,
    image: {
      src: imageSrc,
      alt: { fr: str(raw.image_alt_fr), ar: str(raw.image_alt_ar) },
    },
    title: { fr: str(raw.title_fr), ar: str(raw.title_ar) },
    excerpt: { fr: str(raw.excerpt_fr), ar: str(raw.excerpt_ar) },
    content: { fr: paragraphs(raw.content_fr), ar: paragraphs(raw.content_ar) },
  };
}
