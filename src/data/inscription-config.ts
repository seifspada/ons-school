// Configuration propre à chaque établissement : niveaux, documents, années scolaires.

export type FormKind = "primary" | "college";

export interface FormConfig {
  kind: FormKind;
  levels: string[]; // clés de copy.levels
  documents: string[]; // clés de copy.documents.items
  schoolYears: string[];
}

export const FILE_RULES = {
  accept: ".pdf,.jpg,.jpeg,.png",
  mimeTypes: ["application/pdf", "image/jpeg", "image/png"],
  maxBytes: 5 * 1024 * 1024,
} as const;

// À ajuster avec l’administration si besoin
const SCHOOL_YEARS = ["2026/2027", "2027/2028"];

export const formConfigs: Record<FormKind, FormConfig> = {
  primary: {
    kind: "primary",
    levels: ["1", "2", "3", "4", "5", "6"],
    documents: ["birthExtract", "photo", "schoolCertificate", "healthRecord", "other"],
    schoolYears: SCHOOL_YEARS,
  },
  college: {
    kind: "college",
    levels: ["7", "8", "9"],
    documents: ["birthExtract", "photo", "schoolCertificate", "reportCards", "other"],
    schoolYears: SCHOOL_YEARS,
  },
};

export const formKinds: FormKind[] = ["primary", "college"];
