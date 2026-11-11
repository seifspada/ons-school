import type { Metadata } from "next";
import { PrimaryPage } from "@/src/components/primary/PrimaryPage";

export const metadata: Metadata = {
  title: "École primaire",
  description:
    "Découvrez le cycle primaire d’ONS School à Jelma : apprentissage, accompagnement, niveaux enseignés et activités éducatives.",
  openGraph: {
    title: "École primaire | ONS School",
    description:
      "Apprendre, découvrir et grandir à l’école primaire ONS School, à Jelma, Sidi Bouzid.",
  },
};

export default function PrimaryRoute() {
  return <PrimaryPage />;
}
