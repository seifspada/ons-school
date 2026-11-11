import type { Metadata } from "next";
import ContactPage from "@/src/components/contact/ContactPage";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez ONS School à Jelma, Sidi Bouzid. Retrouvez nos coordonnées et envoyez votre message à l’établissement.",
};

export default function Page() {
  return <ContactPage />;
}
