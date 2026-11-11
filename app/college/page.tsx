import type { Metadata } from "next";
import { CollegePage } from "@/src/components/college/CollegePage";

export const metadata: Metadata = {
  title: "Collège",
  description:
    "Découvrez le cycle collège d’ONS School à Jelma : les apprentissages, l’accompagnement et la vie scolaire.",
  openGraph: {
    title: "Collège | ONS School",
    description:
      "Un enseignement de qualité et un accompagnement pour préparer l’avenir des élèves à ONS School, Jelma.",
  },
};

export default function CollegeRoute() {
  return <CollegePage />;
}
