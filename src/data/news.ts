import type { Language } from "@/src/lib/types";

export const newsItems = [
  {
    id: "sport",
    image: "/images/anas_school_images/news-sport.jpg",
  },
  {
    id: "science",
    image: "/images/anas_school_images/news-science.jpg",
  },
  {
    id: "school",
    image: "/images/anas_school_images/news-school.jpg",
  },
] as const;

export type NewsId = (typeof newsItems)[number]["id"];
export type LocalizedText = Record<Language, string>;
