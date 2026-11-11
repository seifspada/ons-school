import { MessageCircle } from "lucide-react";
import { copy } from "@/src/data/copy";
import { siteConfig } from "@/src/data/site-config";
import type { Language } from "@/src/lib/types";

export function FloatingContact({ lang }: { lang: Language }) {
  const text = copy[lang];
  const whatsappNumber = siteConfig.whatsappNumber;
  return (
    <a
      className="floating-contact"
      href={
        whatsappNumber
          ? `https://wa.me/${whatsappNumber}`
          : "#contact"
      }
      target={whatsappNumber ? "_blank" : undefined}
      rel={whatsappNumber ? "noreferrer" : undefined}
      aria-label={whatsappNumber ? text.whatsapp : text.whatsappPending}
      title={whatsappNumber ? text.whatsapp : text.whatsappPending}
    >
      <MessageCircle size={25} strokeWidth={2.3} aria-hidden="true" />
    </a>
  );
}
