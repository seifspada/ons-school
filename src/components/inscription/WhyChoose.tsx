import { GraduationCap, Users, Trophy, Heart } from "lucide-react";
import type { InscriptionCopy } from "@/src/data/inscription-copy";

const icons = [
  { Icon: GraduationCap, bg: "bg-[#1e9bf0]" }, // bleu
  { Icon: Users, bg: "bg-[#6bb52b]" }, // vert
  { Icon: Trophy, bg: "bg-[#f7941d]" }, // orange
  { Icon: Heart, bg: "bg-[#0aa5c9]" }, // cyan
];

export default function WhyChoose({ t }: { t: InscriptionCopy }) {
  return (
    <aside className="rounded-[2rem] bg-gradient-to-b from-[#e6f1fc] to-[#f3f8fe] p-6 shadow-[0_10px_40px_rgba(11,46,107,0.06)]">
      <h2 className="mb-5 max-w-[12rem] text-3xl font-extrabold leading-tight text-[#0b2e6b]">
        {t.why.title}
      </h2>
      <ul className="space-y-3">
        {t.why.items.map((item, i) => {
          const { Icon, bg } = icons[i];
          return (
            <li key={item.title} className="flex items-center gap-4 rounded-2xl bg-white p-3 shadow-sm">
              <span className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full text-white ${bg}`}>
                <Icon className="h-8 w-8" aria-hidden />
              </span>
              <div>
                <h3 className="text-base font-bold text-[#0b2e6b]">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.text}</p>
              </div>
            </li>
          );
        })}
      </ul>
      <p className="mt-6 text-lg font-bold italic text-[#0b2e6b]">{t.why.tagline}</p>
      <span className="mt-1 block h-1 w-36 rounded-full bg-[#f7941d]" aria-hidden />
    </aside>
  );
}
