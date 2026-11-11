import Image from "next/image";
import type { InscriptionCopy } from "@/src/data/inscription-copy";
import { PageBreadcrumb } from "@/src/components/ui/PageBreadcrumb";

export default function InscriptionHero({ t }: { t: InscriptionCopy }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#eaf4ff] to-white">
      <div className="mx-auto grid max-w-7xl items-center gap-6 px-4 pb-10 pt-8 sm:px-6 lg:grid-cols-2 lg:pb-0">
        <div className="relative z-10">
          <PageBreadcrumb currentLabel={t.hero.current} />
          <h1 className="text-5xl font-extrabold text-[#0b2e6b] sm:text-6xl lg:text-7xl">{t.hero.title}</h1>
          <p className="mt-4 max-w-md text-lg text-[#0b2e6b]">{t.hero.subtitle}</p>
          <span className="mt-4 block h-1 w-40 rounded-full bg-[#f7941d]" aria-hidden />
        </div>

        <div className="relative h-64 sm:h-80 lg:h-[26rem]">
          <Image
            src="/images/optimized/hero-students.webp"
            alt={t.hero.imageAlt}
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="rounded-3xl object-cover object-top lg:rounded-none lg:rounded-es-[4rem]"
          />
        </div>
      </div>
    </section>
  );
}
