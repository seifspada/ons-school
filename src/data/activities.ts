import type { Language } from "@/src/lib/types";

export const activities = [
  {
    id: "sport",
    image: "/images/anas_school_images/activity-sport.jpg",
    title: { fr: "Sport", ar: "الرياضة" },
    icon: "⚽",
  },
  {
    id: "robotics",
    image: "/images/anas_school_images/activity-robotics.jpg",
    title: { fr: "Robotique & informatique", ar: "الروبوتيك والإعلامية" },
    icon: "✦",
  },
  {
    id: "art",
    image: "/images/optimized/activities/activity-arts.webp",
    title: { fr: "Arts & créativité", ar: "الفنون والإبداع" },
    icon: "✿",
  },
  
 
] satisfies {
  id: string;
  image: string;
  title: Record<Language, string>;
  icon: string;
}[];
