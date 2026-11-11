"use client";

import { useState, type KeyboardEvent } from "react";
import { School, GraduationCap } from "lucide-react";
import EnrollmentForm from "./EnrollmentForm";
import { formKinds, type FormKind } from "@/src/data/inscription-config";
import type { InscriptionCopy } from "@/src/data/inscription-copy";

interface Props {
  t: InscriptionCopy;
  isRtl: boolean;
}

export default function EnrollmentTabs({ t, isRtl }: Props) {
  const [active, setActive] = useState<FormKind>("primary");

  const icons: Record<FormKind, typeof School> = { primary: School, college: GraduationCap };

  function onKeyDown(e: KeyboardEvent<HTMLButtonElement>) {
    if (!["ArrowLeft", "ArrowRight"].includes(e.key)) return;
    e.preventDefault();
    const i = formKinds.indexOf(active);
    const step = (e.key === "ArrowRight" ? 1 : -1) * (isRtl ? -1 : 1);
    setActive(formKinds[(i + step + formKinds.length) % formKinds.length]);
  }

  return (
    <div className="relative rounded-[2rem] border border-white/80 bg-white/70 p-5 shadow-[0_10px_40px_rgba(11,46,107,0.08)] backdrop-blur sm:p-8">
      <div
        role="tablist"
        aria-label={t.tabs.ariaLabel}
        className="mx-auto -mt-12 mb-6 flex w-fit max-w-full rounded-full bg-white p-1 shadow-md"
      >
        {formKinds.map((kind) => {
          const Icon = icons[kind];
          const selected = active === kind;
          return (
            <button
              key={kind}
              role="tab"
              id={`tab-${kind}`}
              aria-selected={selected}
              aria-controls={`panel-${kind}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(kind)}
              onKeyDown={onKeyDown}
              className={`flex items-center gap-2 rounded-full px-6 py-3 text-base font-bold transition sm:px-10 ${
                selected ? "bg-[#0b2e6b] text-white shadow" : "text-[#0b2e6b] hover:bg-[#eef4fb]"
              }`}
            >
              <Icon className="h-5 w-5" aria-hidden />
              {t.tabs[kind]}
            </button>
          );
        })}
      </div>

      {/* Les deux formulaires restent montés : chacun garde son propre état. */}
      {formKinds.map((kind) => (
        <div
          key={kind}
          role="tabpanel"
          id={`panel-${kind}`}
          aria-labelledby={`tab-${kind}`}
          hidden={active !== kind}
        >
          <EnrollmentForm kind={kind} t={t} isRtl={isRtl} />
        </div>
      ))}
    </div>
  );
}
