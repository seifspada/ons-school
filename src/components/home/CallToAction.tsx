import { ArrowRight, Send } from "lucide-react";
import { copy } from "@/src/data/copy";
import type { Language } from "@/src/lib/types";

export function CallToAction({ lang }: { lang: Language }) {
  const text = copy[lang];
  const Arrow = lang === "ar" ? "←" : "→";
  return (
    <section
      className="relative overflow-hidden rounded-[48%_48%_0_0/15%_15%_0_0] bg-[radial-gradient(ellipse_at_5%_90%,rgb(31_104_169_/_65%),transparent_43%),linear-gradient(110deg,#123568,#0c2d5a_65%,#16467b)] py-[26px] text-white before:pointer-events-none before:absolute before:left-[15%] before:top-[-160px] before:size-[220px] before:rounded-full before:border before:border-white/10 before:content-[''] after:pointer-events-none after:absolute after:right-[8%] after:bottom-[-180px] after:size-[220px] after:rounded-full after:border after:border-white/10 after:content-[''] max-[560px]:rounded-[34%_34%_0_0/4%_4%_0_0]"
      id="enroll"
    >
      <div className="container relative z-[1] flex min-h-[87px] items-center gap-5 max-[560px]:min-h-0 max-[560px]:flex-wrap max-[560px]:gap-[13px]">
        <div className="grid size-[49px] shrink-0 rotate-[-7deg] place-items-center rounded-2xl border border-white/[0.21] bg-white/[0.09] text-[#ffc248] max-[560px]:size-[43px]"><Send size={27} aria-hidden="true" /></div>
        <div className="flex-1 max-[560px]:basis-[calc(100%-60px)]">
          <h2 className="mb-[2px] mt-0 text-[clamp(20px,2.5vw,29px)] font-[780] leading-[1.3] tracking-[-0.035em] max-[560px]:text-[21px]">{text.cta.title}</h2>
          <p className="m-0 text-xs text-[#e0eafa] max-[560px]:text-[11px]">{text.cta.description}</p>
        </div>
        <a className="button flex-none border-transparent bg-[var(--orange)] px-[23px] text-white shadow-[0_7px_18px_rgb(245_166_35_/_21%)] hover:bg-[var(--orange-deep)] hover:shadow-[0_10px_22px_rgb(245_166_35_/_29%)] max-[560px]:min-h-[41px] max-[560px]:ms-14" href="#contact">
          {text.cta.action}
          {Arrow === "→" ? <ArrowRight size={18} aria-hidden="true" /> : <span aria-hidden="true">←</span>}
        </a>
      </div>
    </section>
  );
}
