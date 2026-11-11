import type { Language } from "@/src/lib/types";

type PrimaryPageCopy = {
  hero: { title: string; subtitle: string; description: string; imageAlt: string; action: string };
  introduction: {
    eyebrow: string;
    title: string;
    description: string;
    values: { title: string; description: string }[];
  };
  levels: { eyebrow: string; title: string; pending: string };
  approach: {
    eyebrow: string;
    title: string;
    description: string;
    principles: { title: string; description: string }[];
  };
  activities: {
    eyebrow: string;
    title: string;
    note: string;
    pending: string;
    items: { id: string; title: string; imageAlt: string }[];
  };
  reasons: { eyebrow: string; title: string; items: { title: string; description: string }[] };
  cta: { title: string; subtitle: string; action: string };
};

export const primaryPageCopy = {
  fr: {
    hero: {
      title: "École primaire",
      subtitle: "Apprendre, découvrir et grandir",
      description:
        "Un cycle pour acquérir les bases, nourrir sa curiosité et prendre confiance dans ses apprentissages.",
      imageAlt: "Une élève du primaire souriante dans sa classe",
      action: "Découvrir notre école",
    },
    introduction: {
      eyebrow: "Le cycle primaire",
      title: "Une base solide pour l’avenir",
      description:
        "À l’école primaire, les enfants développent leurs connaissances et leurs compétences dans un parcours qui encourage la découverte, la participation et la progression de chacun.",
      values: [
        {
          title: "Pédagogie active",
          description: "Apprendre en participant, en explorant et en pratiquant.",
        },
        {
          title: "Suivi personnalisé",
          description: "Prendre en compte le rythme et les besoins de chaque élève.",
        },
        {
          title: "Développement des talents",
          description: "Encourager les intérêts et les capacités de chaque enfant.",
        },
      ],
    },
    levels: {
      eyebrow: "Le parcours scolaire",
      title: "Les niveaux enseignés",
      pending: "Les niveaux exacts sont à confirmer auprès de l’école.",
    },
    approach: {
      eyebrow: "Apprendre avec confiance",
      title: "Notre approche pédagogique",
      description:
        "Nous souhaitons donner à chaque élève l’envie d’apprendre et les repères nécessaires pour progresser, avec une place pour la curiosité, l’autonomie et l’accompagnement.",
      principles: [
        {
          title: "Apprendre en pratiquant",
          description: "Expérimenter et participer activement aux apprentissages.",
        },
        {
          title: "Cultiver la curiosité",
          description: "Encourager les questions, les idées et la découverte.",
        },
        {
          title: "Grandir en autonomie",
          description: "Aider chaque enfant à prendre confiance et à avancer à son rythme.",
        },
      ],
    },
    activities: {
      eyebrow: "Explorer et s’exprimer",
      title: "Nos activités éducatives",
      note: "Ces exemples sont à confirmer par l’école avant d’être présentés comme des activités proposées.",
      pending: "Exemple — offre à confirmer",
      items: [
        { id: "sport", title: "Sport", imageAlt: "Des élèves jouent au football sur le terrain de l’école" },
        { id: "art", title: "Arts plastiques", imageAlt: "Une élève dessine et peint en classe" },
        { id: "outdoor", title: "Activités en plein air", imageAlt: "Des élèves profitent de la cour de récréation" },
      ],
    },
    reasons: {
      eyebrow: "Grandir ensemble",
      title: "Pourquoi choisir notre école primaire ?",
      items: [
        {
          title: "Une équipe pédagogique attentive",
          description: "Une attention portée aux apprentissages et aux besoins de chaque élève.",
        },
        {
          title: "Un cadre pour apprendre",
          description: "Un environnement scolaire pensé pour accompagner le parcours des enfants.",
        },
        {
          title: "Une éducation bienveillante",
          description: "Encourager le respect, la confiance et le plaisir d’apprendre.",
        },
      ],
    },
    cta: {
      title: "Inscrivez votre enfant dès maintenant !",
      subtitle: "Offrez-lui le meilleur départ pour son avenir.",
      action: "Préinscrire mon enfant",
    },
  },
  ar: {
    hero: {
      title: "المدرسة الابتدائية",
      subtitle: "نتعلم، نكتشف وننمو",
      description:
        "مرحلة لاكتساب الأساسيات وتنمية حب الاستطلاع وتعزيز الثقة في التعلم.",
      imageAlt: "تلميذة مبتسمة في المرحلة الابتدائية داخل فصلها",
      action: "اكتشفوا مدرستنا",
    },
    introduction: {
      eyebrow: "المرحلة الابتدائية",
      title: "أساس متين للمستقبل",
      description:
        "يطور الأطفال معارفهم ومهاراتهم في مسار يشجع على الاكتشاف والمشاركة والتقدم وفق إيقاع كل تلميذ.",
      values: [
        {
          title: "تعلم تفاعلي",
          description: "التعلم بالمشاركة والاستكشاف والممارسة.",
        },
        {
          title: "متابعة شخصية",
          description: "مراعاة إيقاع كل تلميذ واحتياجاته.",
        },
        {
          title: "تنمية المواهب",
          description: "تشجيع اهتمامات كل طفل وقدراته.",
        },
      ],
    },
    levels: {
      eyebrow: "المسار الدراسي",
      title: "المستويات التعليمية",
      pending: "يرجى تأكيد المستويات الدراسية مع المدرسة.",
    },
    approach: {
      eyebrow: "نتعلم بثقة",
      title: "نهجنا التربوي",
      description:
        "نسعى إلى تنمية رغبة كل تلميذ في التعلم وتوفير ما يساعده على التقدم، مع الاهتمام بحب الاستطلاع والاستقلالية والمرافقة.",
      principles: [
        {
          title: "التعلم بالممارسة",
          description: "التجربة والمشاركة الفعالة في التعلم.",
        },
        {
          title: "تنمية حب الاستطلاع",
          description: "تشجيع الأسئلة والأفكار والاكتشاف.",
        },
        {
          title: "النمو باستقلالية",
          description: "مساعدة كل طفل على اكتساب الثقة والتقدم بإيقاعه.",
        },
      ],
    },
    activities: {
      eyebrow: "نستكشف ونعبر",
      title: "أنشطتنا التعليمية",
      note: "هذه أمثلة تحتاج إلى تأكيد المدرسة قبل عرضها كأنشطة متاحة.",
      pending: "مثال — النشاط قيد التأكيد",
      items: [
        { id: "sport", title: "الرياضة", imageAlt: "تلاميذ يلعبون كرة القدم في ملعب المدرسة" },
        { id: "art", title: "الفنون التشكيلية", imageAlt: "تلميذة ترسم وتلوّن في الفصل" },
        { id: "outdoor", title: "أنشطة في الهواء الطلق", imageAlt: "تلاميذ يستمتعون بساحة الاستراحة" },
      ],
    },
    reasons: {
      eyebrow: "ننمو معاً",
      title: "لماذا تختارون مدرستنا الابتدائية؟",
      items: [
        {
          title: "فريق تربوي يهتم بالتلاميذ",
          description: "الاهتمام بتعلم كل تلميذ واحتياجاته.",
        },
        {
          title: "إطار يساعد على التعلم",
          description: "بيئة مدرسية ترافق مسيرة الأطفال التعليمية.",
        },
        {
          title: "تعليم قائم على الرعاية",
          description: "تشجيع الاحترام والثقة ومتعة التعلم.",
        },
      ],
    },
    cta: {
      title: "سجلوا طفلكم الآن!",
      subtitle: "امنحوه أفضل بداية لمستقبله.",
      action: "التسجيل المسبق لطفلي",
    },
  },
} as const satisfies Record<Language, PrimaryPageCopy>;

export const primaryLevels: string[] = [];

export const primaryActivities = [
  {
    id: "sport",
    image: "/images/anas_school_images/primary-sport.jpg",
  },
  {
    id: "art",
    image: "/images/anas_school_images/primary-arts.jpg",
  },
  {
    id: "outdoor",
    image: "/images/anas_school_images/primary-playground.jpg",
  },
] as const;
