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
    image: "/images/optimized/activities/robotique.webp",
    title: { fr: "Robotique & informatique", ar: "الروبوتيك والإعلامية" },
    icon: "✦",
  },
  {
    id: "art",
    image: "/images/optimized/activities/paint.webp",
    title: { fr: "Arts & créativité", ar: "الفنون والإبداع" },
    icon: "✿",
  },
  {
  id: "hiking",
  image: "/images/optimized/rondonne.webp",
  title: {
    fr: "Randonnée & découverte de la nature",
    ar: "الرحلات الاستكشافية واكتشاف الطبيعة"
  },
  icon: "🥾",
},


  
 
] satisfies {
  id: string;
  image: string;
  title: Record<Language, string>;
  icon: string;
}[];
