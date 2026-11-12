import type { Language } from "@/src/lib/types";

export const newsItems = [
  {
    id: "openDay",
    image: "/images/anas_school_images/journee-ouvert.jpg",
  },
  {
    id: "schoolYear",
    image: "/images/anas_school_images/rentre-scolaire.jpg",
  },
  {
    id: "sportsDay",
    image: "/images/anas_school_images/journee-sportive.jpg",
  },
] as const;

export type NewsId = (typeof newsItems)[number]["id"];
export type LocalizedText = Record<Language, string>;
