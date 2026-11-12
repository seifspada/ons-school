import Link from "next/link";
import { Headset, Phone } from "lucide-react";
import type { InscriptionCopy } from "@/src/data/inscription-copy";

export default function ContactBanner({ t }: { t: InscriptionCopy }) {
  return (
<section className="mx-auto mt-8 mb-8 max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-4 rounded-[2rem] bg-gradient-to-r from-[#dcecfb] to-[#eaf4ff] px-6 py-6 text-center sm:flex-row sm:text-start">
        <Headset className="h-14 w-14 shrink-0 text-[#0b2e6b]" aria-hidden />
        <div className="flex-1">
          <h2 className="text-xl font-extrabold text-[#0b2e6b]">{t.contact.title}</h2>
          <p className="text-sm text-[#0b2e6b]">{t.contact.text}</p>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#0b2e6b] shadow transition hover:bg-[#0b2e6b] hover:text-white"
        >
          <Phone className="h-4 w-4" aria-hidden />
          {t.contact.cta}
        </Link>
      </div>
    </section>
  );
}
