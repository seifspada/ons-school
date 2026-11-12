// Demonstration content, replace by API data.
// Les images pointent vers des photos existantes du projet : remplace-les par
// /images/news/news-awards.jpg, etc. quand tu auras les vraies photos.
import type { NewsArticle } from "./types";

export const mockNews: NewsArticle[] = [
  {
    id: "1",
    slug: "ceremonie-remise-prix",
    category: "events",
    publishedAt: "2025-11-12",
    image: {
      src: "/images/optimized/school-classroom.webp",
      alt: {
        fr: "Un élève reçoit un trophée lors de la cérémonie de remise des prix",
        ar: "تلميذ يتسلم كأسًا خلال حفل توزيع الجوائز",
      },
    },
    title: { fr: "Cérémonie de remise des prix", ar: "حفل توزيع الجوائز" },
    excerpt: {
      fr: "Nos élèves brillent encore une fois lors de la cérémonie annuelle de remise des prix.",
      ar: "يتألق تلاميذنا مرة أخرى خلال الحفل السنوي لتوزيع الجوائز.",
    },
    content: {
      fr: [
        "Contenu de démonstration. La cérémonie annuelle met à l'honneur les efforts et les réussites des élèves de tous les niveaux.",
        "Familles, enseignants et élèves se retrouvent pour partager un moment de fierté et d'encouragement.",
      ],
      ar: [
        "محتوى تجريبي. يكرّم الحفل السنوي جهود ونجاحات التلاميذ من مختلف المستويات.",
        "تلتقي العائلات والمعلمون والتلاميذ لقضاء لحظة فخر وتشجيع.",
      ],
    },
  },
  {
    id: "2",
    slug: "pedagogie-active",
    category: "pedagogy",
    publishedAt: "2025-11-05",
    image: {
      src: "/images/optimized/pedagogy-teacher.webp",
      alt: {
        fr: "Une enseignante aide des élèves pendant une activité de classe",
        ar: "معلمة تساعد تلاميذ خلال نشاط داخل القسم",
      },
    },
    title: { fr: "Une pédagogie active et bienveillante", ar: "بيداغوجيا نشطة ومحفّزة" },
    excerpt: {
      fr: "À ONS School, nous croyons en une éducation qui éveille la curiosité et développe les talents.",
      ar: "في أنس سكول، نؤمن بتعليم يوقظ الفضول وينمّي المواهب.",
    },
    content: {
      fr: [
        "Contenu de démonstration. Notre approche place l'élève au centre de son apprentissage.",
        "Les enseignants accompagnent chaque enfant avec bienveillance, à son rythme.",
      ],
      ar: [
        "محتوى تجريبي. يضع نهجنا التلميذ في قلب عملية التعلم.",
        "يرافق المعلمون كل طفل بلطف وبحسب إيقاعه.",
      ],
    },
  },
  {
    id: "3",
    slug: "tournoi-sportif",
    category: "activities",
    publishedAt: "2025-11-02",
    image: {
      src: "/images/optimized/primary-sport.webp",
      alt: {
        fr: "Des élèves jouent au football lors du tournoi inter-classes",
        ar: "تلاميذ يلعبون كرة القدم خلال الدورة بين الأقسام",
      },
    },
    title: { fr: "Tournoi sportif à ONS School", ar: "دورة رياضية في أنس سكول" },
    excerpt: {
      fr: "Nos élèves ont participé avec enthousiasme au tournoi sportif inter-classes.",
      ar: "شارك تلاميذنا بحماس في الدورة الرياضية بين الأقسام.",
    },
    content: {
      fr: [
        "Contenu de démonstration. Le tournoi favorise l'esprit d'équipe, le fair-play et le plaisir de jouer ensemble.",
        "Chaque classe a défendu ses couleurs dans une ambiance joyeuse.",
      ],
      ar: [
        "محتوى تجريبي. تعزز الدورة روح الفريق والروح الرياضية ومتعة اللعب معًا.",
        "دافع كل قسم عن ألوانه في أجواء مرحة.",
      ],
    },
  },
  {
    id: "4",
    slug: "projet-scientifique",
    category: "projects",
    publishedAt: "2025-10-28",
    image: {
      src: "/images/optimized/primary-study.webp",
      alt: {
        fr: "Une élève réalise une expérience scientifique",
        ar: "تلميذة تجري تجربة علمية",
      },
    },
    title: { fr: "Projet scientifique innovant", ar: "مشروع علمي مبتكر" },
    excerpt: {
      fr: "Nos élèves découvrent la science à travers des projets créatifs et stimulants.",
      ar: "يكتشف تلاميذنا العلوم من خلال مشاريع إبداعية ومحفزة.",
    },
    content: {
      fr: [
        "Contenu de démonstration. Expériences, observations et manipulations : les élèves apprennent en faisant.",
        "Le projet développe la curiosité et l'esprit critique.",
      ],
      ar: [
        "محتوى تجريبي. تجارب وملاحظات وتطبيقات: يتعلم التلاميذ بالممارسة.",
        "ينمّي المشروع الفضول والتفكير النقدي.",
      ],
    },
  },
  {
    id: "5",
    slug: "lecture-cle-reussite",
    category: "school-life",
    publishedAt: "2025-10-25",
    image: {
      src: "/images/optimized/school-library.webp",
      alt: {
        fr: "Un élève lit dans la bibliothèque de l'école",
        ar: "تلميذ يقرأ في مكتبة المدرسة",
      },
    },
    title: { fr: "La lecture, une clé pour réussir", ar: "القراءة مفتاح النجاح" },
    excerpt: {
      fr: "À ONS School, la lecture fait partie intégrante de notre démarche éducative.",
      ar: "في أنس سكول، تُعدّ القراءة جزءًا أساسيًا من نهجنا التربوي.",
    },
    content: {
      fr: [
        "Contenu de démonstration. La bibliothèque est un lieu de découverte ouvert à tous les élèves.",
        "Lire régulièrement enrichit le vocabulaire et nourrit l'imagination.",
      ],
      ar: [
        "محتوى تجريبي. المكتبة فضاء للاكتشاف مفتوح لجميع التلاميذ.",
        "القراءة المنتظمة تثري المفردات وتغذي الخيال.",
      ],
    },
  },
  {
    id: "6",
    slug: "sortie-site-historique",
    category: "trips",
    publishedAt: "2025-10-20",
    image: {
      src: "/images/optimized/school-playground.webp",
      alt: {
        fr: "Un groupe d'élèves pendant une sortie éducative",
        ar: "مجموعة من التلاميذ خلال رحلة تربوية",
      },
    },
    title: { fr: "Sortie éducative au site historique", ar: "رحلة تربوية إلى موقع تاريخي" },
    excerpt: {
      fr: "Une belle sortie pour enrichir nos connaissances et découvrir notre patrimoine.",
      ar: "رحلة جميلة لإثراء معارفنا واكتشاف تراثنا.",
    },
    content: {
      fr: [
        "Contenu de démonstration. Les élèves ont découvert un site historique en compagnie de leurs enseignants.",
        "Une journée pour apprendre autrement et mieux connaître notre patrimoine.",
      ],
      ar: [
        "محتوى تجريبي. اكتشف التلاميذ موقعًا تاريخيًا برفقة معلميهم.",
        "يوم للتعلم بطريقة مختلفة والتعرف أكثر على تراثنا.",
      ],
    },
  },
];
