export type NewsCategory =
  | "events"
  | "pedagogy"
  | "activities"
  | "projects"
  | "school-life"
  | "trips";

export type Bilingual<T> = { fr: T; ar: T };

export type NewsArticle = {
  id: string;
  slug: string;
  category: NewsCategory;
  /** ISO 8601, ex. "2025-11-12". Jamais une date déjà formatée. */
  publishedAt: string;
  image: { src: string; alt: Bilingual<string> };
  title: Bilingual<string>;
  excerpt: Bilingual<string>;
  /** Un tableau de paragraphes par langue. */
  content: Bilingual<string[]>;
};
