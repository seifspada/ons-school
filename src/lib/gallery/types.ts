import type { Bilingual } from "@/src/lib/news/types";

/** Les catégories affichées dans les filtres (hors "all"). */
export type GalleryCategory = "events" | "activities" | "pedagogy" | "trips" | "school-life";
export type GalleryFilter = "all" | GalleryCategory;

export interface GalleryPhoto {
  id: string;
  title: Bilingual<string>;
  /** Miniature affichée dans la grille (optimisée, WebP). */
  image: string;
  /** Version haute résolution ouverte dans la lightbox (optionnelle). */
  fullImage?: string;
  category: GalleryCategory;
  /** ISO 8601 */
  date: string;
  description: Bilingual<string>;
  alt: Bilingual<string>;
  albumId: string;
}
