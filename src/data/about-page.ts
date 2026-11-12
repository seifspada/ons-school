import type { Language } from "@/src/lib/types";

type AboutPageCopy = {
  hero: { title: string; subtitle: string; imageAlt: string };
  school: {
    eyebrow: string;
    title: string;
    description: string;
    values: { title: string; arabic: string; description: string }[];
  };
  approach: {
    eyebrow: string;
    title: string;
    description: string;
    imageAlt: string;
    principles: { title: string; description: string }[];
  };
  facilities: {
    eyebrow: string;
    title: string;
    note: string;
    cards: { title: string; image: string; imageAlt: string; imagePlaceholder: string }[];
  };
  levels: { title: string; primary: string; college: string };
};

export const aboutPageCopy = {
  fr: {
    hero: {
      title: "Une école pour apprendre, grandir et réussir",
      subtitle: "مدرسة للتعلّم والنمو والنجاح",
      imageAlt: "Deux élèves souriants en uniforme dans leur classe",
    },
    school: {
      eyebrow: "ONS School",
      title: "ONS School, bien plus qu’une école",
      description:
        "ONS School accompagne les élèves du primaire et du collège dans leur apprentissage et leur épanouissement. Notre mission : offrir à chaque enfant un cadre bienveillant pour apprendre, développer ses talents et construire son avenir.",
      values: [
        {
          title: "Respect",
          arabic: "احترام",
          description: "Écouter, accueillir et valoriser chaque élève.",
        },
        {
          title: "Confiance",
          arabic: "ثقة",
          description: "Encourager chacun à avancer et à croire en ses capacités.",
        },
        {
          title: "Réussite",
          arabic: "نجاح",
          description: "Accompagner les progrès et célébrer chaque étape.",
        },
      ],
    },
    approach: {
      eyebrow: "Notre approche",
      title: "Apprendre autrement pour mieux réussir",
      description:
        "Chaque enfant apprend à sa manière. Nous privilégions une approche qui encourage la participation, l'accompagnement et l'envie de découvrir.",
      imageAlt: "Une enseignante accompagne deux élèves dans leur travail en classe",
      principles: [
        {
          title: "Apprendre en pratiquant",
          description: "Découvrir les notions par l'observation et l'expérience.",
        },
        {
          title: "Accompagner chaque élève",
          description: "Être à l'écoute du rythme et des besoins de chacun.",
        },
        {
          title: "Développer la curiosité",
          description: "Donner envie de poser des questions et d'explorer.",
        },
      ],
    },
    facilities: {
      eyebrow: "Nos espaces",
      title: "Un environnement idéal pour s’épanouir",
      note: "Découvrez les espaces d’apprentissage et de détente de l’école.",
      cards: [
        { title: "Salles de classe", image: "/images/anas_school_images/school-classroom.jpg", imageAlt: "Une salle de classe lumineuse avec des tables et des chaises", imagePlaceholder: "Un espace lumineux pour apprendre" },
        { title: "Bibliothèque", image: "/images/anas_school_images/school-library.jpg", imageAlt: "Des étagères de livres dans une bibliothèque scolaire", imagePlaceholder: "Un espace pour lire et découvrir" },
        { title: "Cour de récréation", image: "/images/anas_school_images/school-playground.jpg", imageAlt: "Des jeux colorés dans la cour de l’école", imagePlaceholder: "Un espace extérieur pour jouer" },
      ],
    },
    levels: {
      title: "Découvrez nos niveaux",
      primary: "École primaire",
      college: "Collège",
    },
  },
  ar: {
    hero: {
      title: "نتعلّم، ننمو وننجح معاً",
      subtitle: "مدرسة للتعلّم والنمو والنجاح",
      imageAlt: "تلميذان مبتسمان بالزي المدرسي داخل الفصل",
    },
    school: {
      eyebrow: "أنس سكول",
      title: "أنس سكول، أكثر من مجرد مدرسة",
      description:
        "ترافق أنس سكول تلاميذ المرحلة الابتدائية والإعدادية في مسيرتهم التعليمية ونموهم. رسالتنا هي توفير بيئة مشجعة لكل طفل ليتعلم وينمّي مواهبه ويبني مستقبله.",
      values: [
        {
          title: "الاحترام",
          arabic: "احترام",
          description: "الإصغاء إلى كل تلميذ والترحيب به وتقديره.",
        },
        {
          title: "الثقة",
          arabic: "ثقة",
          description: "تشجيع كل تلميذ على التقدم والثقة بقدراته.",
        },
        {
          title: "النجاح",
          arabic: "نجاح",
          description: "مرافقة خطوات التقدم والاحتفاء بكل مرحلة.",
        },
      ],
    },
    approach: {
      eyebrow: "نهجنا",
      title: "نتعلم بطرق مختلفة لنحقق نجاحاً أفضل",
      description:
        "يتعلم كل طفل بطريقته. نشجع المشاركة والمرافقة والرغبة في الاكتشاف.",
      imageAlt: "معلمة ترافق تلميذين أثناء العمل داخل الفصل",
      principles: [
        {
          title: "التعلّم بالممارسة",
          description: "اكتشاف المفاهيم من خلال الملاحظة والتجربة.",
        },
        {
          title: "مرافقة كل تلميذ",
          description: "مراعاة إيقاع كل تلميذ واحتياجاته.",
        },
        {
          title: "تنمية حب الاستطلاع",
          description: "تشجيع طرح الأسئلة والاستكشاف.",
        },
      ],
    },
    facilities: {
      eyebrow: "فضاءاتنا",
      title: "بيئة مثالية للنمو",
      note: "اكتشفوا فضاءات التعلم والاستراحة في المدرسة.",
      cards: [
        { title: "قاعات الدراسة", image: "/images/anas_school_images/school-classroom.jpg", imageAlt: "قاعة دراسية مضيئة تضم طاولات وكراسٍ", imagePlaceholder: "فضاء مضيء للتعلم" },
        { title: "المكتبة", image: "/images/anas_school_images/school-library.jpg", imageAlt: "رفوف كتب في مكتبة مدرسية", imagePlaceholder: "فضاء للقراءة والاكتشاف" },
        { title: "ساحة الاستراحة", image: "/images/anas_school_images/school-playground.jpg", imageAlt: "ألعاب ملونة في ساحة المدرسة", imagePlaceholder: "فضاء خارجي للعب" },
      ],
    },
    levels: {
      title: "اكتشفوا مراحلنا التعليمية",
      primary: "المدرسة الابتدائية",
      college: "المرحلة الإعدادية",
    },
  },
} as const satisfies Record<Language, AboutPageCopy>;
