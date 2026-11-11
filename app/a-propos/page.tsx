import type { Metadata } from "next";
import { AboutPage } from "@/src/components/about/AboutPage";

export const metadata: Metadata = {
  title: "À propos de notre école",
  description:
    "Découvrez ONS School à Jelma : notre mission éducative, nos valeurs, notre approche et les niveaux primaire et collège.",
  openGraph: {
    title: "À propos de notre école | ONS School",
    description:
      "Découvrez la mission, les valeurs et l'approche éducative d'ONS School à Jelma, Sidi Bouzid.",
  },
};

export default function AboutRoute() {
  return <AboutPage />;
}
