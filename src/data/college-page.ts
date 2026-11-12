import type { Language } from "@/src/lib/types";

type CollegePageCopy = {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    action: string;
    imageAlt: string;
  };
  introduction: {
    eyebrow: string;
    title: string;
    description: string;
    imageAlt: string;
    cards: { title: string; description: string }[];
  };
  subjects: {
    eyebrow: string;
    title: string;
    description: string;
    note: string;
    action: string;
    items: { id: string; title: string }[];
  };
  approach: {
    eyebrow: string;
    title: string;
    description: string;
    imageAlt: string;
    features: { title: string; description: string }[];
  };
  activities: {
    eyebrow: string;
    title: string;
    note: string;
    pending: string;
    items: { id: string; title: string; imageAlt: string }[];
  };
  support: {
    eyebrow: string;
    title: string;
    description: string;
    imageAlt: string;
    benefits: { title: string; description: string }[];
  };
  testimonials: {
    eyebrow: string;
    title: string;
    placeholder: string;
    pending: string;
  };
  cta: { title: string; description: string; action: string };
};

export const collegeActivityImages: Record<string, string> = {
  sport: "/images/anas_school_images/activity-sport.jpg",
  robotics: "/images/anas_school_images/robotique_.jpg",
  arts: "/images/anas_school_images/art.jpg",
  trips: "/images/anas_school_images/rondonne.jpg",
};

export const collegePageCopy = {
  fr: {
    hero: {
      title: "Collège",
      subtitle: "Construire les bases de la réussite",
      description:
        "Un enseignement de qualité et un accompagnement renforcé pour préparer l’avenir de nos élèves.",
      action: "Découvrir notre collège",
      imageAlt: "Un élève de collège travaille dans son cahier en classe",
    },
    introduction: {
      eyebrow: "Le cycle collège",
      title: "Une étape clé vers l’avenir",
      description:
        "Le collège accompagne les élèves dans la consolidation de leurs connaissances, le développement de leur autonomie et la découverte de nouveaux domaines d’apprentissage.",
      imageAlt: "Le bâtiment de l’école ONS School",
      cards: [
        {
          title: "Enseignement de qualité",
          description: "Des apprentissages structurés pour consolider les connaissances.",
        },
        {
          title: "Accompagnement personnalisé",
          description: "Une attention portée au parcours et aux besoins de chaque élève.",
        },
        {
          title: "Préparation aux examens",
          description: "Aider les élèves à organiser leur travail et leurs révisions.",
        },
      ],
    },
    subjects: {
      eyebrow: "Les apprentissages",
      title: "Les matières enseignées",
      description:
        "Le collège permet d’explorer plusieurs domaines et de développer des compétences variées.",
      note: "Liste indicative, à confirmer avec l’établissement. Aucun programme détaillé n’est publié ici.",
      action: "Voir le programme",
      items: [
        { id: "math", title: "Mathématiques" },
        { id: "french", title: "Français" },
        { id: "arabic", title: "Arabe" },
        { id: "science", title: "Sciences" },
        { id: "english", title: "Anglais" },
        { id: "computing", title: "Informatique" },
        { id: "history", title: "Histoire-Géographie" },
        { id: "civics", title: "Éducation civique" },
      ],
    },
    approach: {
      eyebrow: "Notre approche",
      title: "Apprendre, progresser, s’épanouir",
      description:
        "La participation, la réflexion et l’accompagnement aident les élèves à prendre part à leurs apprentissages, à progresser et à développer leur autonomie.",
      imageAlt: "Une salle de classe d’ONS School prête pour les apprentissages",
      features: [
        {
          title: "Méthodes modernes",
          description: "Encourager l’activité, la participation et la découverte.",
        },
        {
          title: "Suivi personnalisé",
          description: "Être attentif au parcours et au rythme de chaque élève.",
        },
        {
          title: "Développement des compétences",
          description: "Favoriser la réflexion, l’autonomie et l’expression des idées.",
        },
      ],
    },
    activities: {
      eyebrow: "Découvrir et partager",
      title: "Nos activités au collège",
      note: "Exemples illustrés — les activités réellement proposées sont à confirmer auprès de l’école.",
      pending: "Exemple — offre à confirmer",
      items: [
        {
          id: "sport",
          title: "Sport",
          imageAlt: "Des élèves jouent au football sur un terrain",
        },
        {
          id: "robotics",
          title: "Robotique",
          imageAlt: "Un élève construit un petit robot en classe",
        },
        {
          id: "arts",
          title: "Arts et créativité",
          imageAlt: "Une activité de peinture et de création artistique",
        },
        {
          id: "trips",
          title: "Randonnée",
          imageAlt: "Un groupe d’élèves en randonnée",
        },
      ],
    },
    support: {
      eyebrow: "Être accompagné",
      title: "Notre accompagnement",
      description:
        "Le dialogue et l’attention portée à chaque élève contribuent à créer un cadre encourageant pendant son parcours au collège.",
      imageAlt: "Une enseignante accompagne des élèves pendant une activité en classe",
      benefits: [
        {
          title: "Suivi individualisé",
          description: "Prendre en compte les besoins et le cheminement de chaque élève.",
        },
        {
          title: "Encadrement bienveillant",
          description: "Favoriser l’écoute, le respect et un climat de confiance.",
        },
        {
          title: "Orientation adaptée",
          description: "Accompagner la réflexion sur les intérêts et les prochaines étapes.",
        },
      ],
    },
    testimonials: {
      eyebrow: "La parole aux familles",
      title: "Témoignages",
      placeholder:
        "Cet espace accueillera les témoignages authentiques des familles, avec leur accord.",
      pending: "Témoignages à venir",
    },
    cta: {
      title: "Rejoignez notre communauté !",
      description:
        "Pour plus d'informations ou une préinscription, n'hésitez pas à nous contacter.",
      action: "Nous contacter",
    },
  },
  ar: {
    hero: {
      title: "المرحلة الإعدادية",
      subtitle: "نبني أسس النجاح",
      description:
        "تعليم جيد ومرافقة مستمرة لمساعدة تلاميذنا على الاستعداد للمستقبل.",
      action: "اكتشفوا المرحلة الإعدادية",
      imageAlt: "تلميذ في المرحلة الإعدادية يكتب في كراسه داخل الفصل",
    },
    introduction: {
      eyebrow: "المرحلة الإعدادية",
      title: "خطوة مهمة نحو المستقبل",
      description:
        "ترافق المرحلة الإعدادية التلاميذ في ترسيخ معارفهم وتنمية استقلاليتهم واكتشاف مجالات جديدة للتعلم.",
      imageAlt: "مبنى مدرسة أنس سكول",
      cards: [
        {
          title: "تعليم جيد",
          description: "تعلمات منظمة لترسيخ المعارف.",
        },
        {
          title: "مرافقة شخصية",
          description: "الاهتمام بمسار كل تلميذ واحتياجاته.",
        },
        {
          title: "الاستعداد للامتحانات",
          description: "مساعدة التلاميذ على تنظيم العمل والمراجعة.",
        },
      ],
    },
    subjects: {
      eyebrow: "التعلمات",
      title: "المواد الدراسية",
      description:
        "تتيح المرحلة الإعدادية استكشاف مجالات متعددة وتنمية مهارات متنوعة.",
      note: "قائمة إرشادية تحتاج إلى تأكيد من المؤسسة. لا ننشر هنا برامج تفصيلية.",
      action: "عرض البرنامج",
      items: [
        { id: "math", title: "الرياضيات" },
        { id: "french", title: "اللغة الفرنسية" },
        { id: "arabic", title: "اللغة العربية" },
        { id: "science", title: "العلوم" },
        { id: "english", title: "اللغة الإنجليزية" },
        { id: "computing", title: "الإعلامية" },
        { id: "history", title: "التاريخ والجغرافيا" },
        { id: "civics", title: "التربية المدنية" },
      ],
    },
    approach: {
      eyebrow: "نهجنا",
      title: "نتعلم ونتقدم وننمو",
      description:
        "تساعد المشاركة والتفكير والمرافقة التلاميذ على الانخراط في تعلمهم والتقدم وتنمية استقلاليتهم.",
      imageAlt: "قاعة دراسية في مدرسة أنس سكول جاهزة للتعلم",
      features: [
        {
          title: "أساليب حديثة",
          description: "تشجيع النشاط والمشاركة والاكتشاف.",
        },
        {
          title: "متابعة شخصية",
          description: "الاهتمام بمسار كل تلميذ ووتيرة تعلمه.",
        },
        {
          title: "تنمية المهارات",
          description: "تعزيز التفكير والاستقلالية والتعبير عن الأفكار.",
        },
      ],
    },
    activities: {
      eyebrow: "نكتشف ونتشارك",
      title: "أنشطة المرحلة الإعدادية",
      note: "أمثلة مصورة — يجب تأكيد الأنشطة المقدمة فعلياً من قبل المدرسة.",
      pending: "مثال — النشاط يحتاج إلى تأكيد",
      items: [
        {
          id: "sport",
          title: "الرياضة",
          imageAlt: "تلاميذ يلعبون كرة القدم في الملعب",
        },
        {
          id: "robotics",
          title: "الروبوتيك",
          imageAlt: "تلميذ يصنع روبوتاً صغيراً في الفصل",
        },
        {
          id: "arts",
          title: "الفنون والإبداع",
          imageAlt: "نشاط للرسم والأعمال الفنية",
        },
        {
          id: "trips",
          title: "المشي لمسافات طويلة",
          imageAlt: "مجموعة من التلاميذ في نزهة مشياً على الأقدام",
        },
      ],
    },
    support: {
      eyebrow: "المرافقة",
      title: "مرافقتنا للتلاميذ",
      description:
        "يساعد الحوار والاهتمام بكل تلميذ على توفير بيئة مشجعة خلال مساره في المرحلة الإعدادية.",
      imageAlt: "معلمة ترافق التلاميذ أثناء نشاط داخل الفصل",
      benefits: [
        {
          title: "متابعة فردية",
          description: "مراعاة احتياجات كل تلميذ ومساره.",
        },
        {
          title: "تأطير إيجابي",
          description: "تعزيز الإصغاء والاحترام ومناخ الثقة.",
        },
        {
          title: "توجيه مناسب",
          description: "مرافقة التفكير في الاهتمامات والخطوات القادمة.",
        },
      ],
    },
    testimonials: {
      eyebrow: "آراء العائلات",
      title: "شهادات",
      placeholder: "سيُخصص هذا المكان لشهادات حقيقية من العائلات بعد موافقتها.",
      pending: "الشهادات قريباً",
    },
    cta: {
      title: "انضموا إلى مجتمعنا!",
      description: "للمزيد من المعلومات أو للتسجيل المسبق، لا تترددوا في التواصل معنا.",
      action: "اتصلوا بنا",
    },
  },
} as const satisfies Record<Language, CollegePageCopy>;
