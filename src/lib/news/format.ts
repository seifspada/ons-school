import type { Language } from "@/src/lib/types";

export function formatNewsDate(iso: string, lang: Language) {
  return new Intl.DateTimeFormat(lang === "ar" ? "ar-TN" : "fr-FR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(iso));
}

export const categoryStyle = {
  events: "bg-[var(--orange)] text-[#25354d]",
  pedagogy: "bg-[var(--green)] text-white",
  activities: "bg-[var(--blue)] text-white",
  projects: "bg-[var(--green)] text-white",
  "school-life": "bg-[var(--blue)] text-white",
  trips: "bg-[var(--orange)] text-[#25354d]",
} as const;
