"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Mail } from "lucide-react";
import { useSiteLanguage } from "@/src/components/layout/SiteShell";
import { copy } from "@/src/data/copy";
import { isValidEmail, submitNewsletter } from "@/src/lib/news/newsletter";

type Status = "idle" | "empty" | "invalid" | "not-configured" | "error" | "success";

export default function Newsletter() {
  const { lang } = useSiteLanguage();
  const t = copy[lang].newsPage.newsletter;
  const Arrow = lang === "ar" ? ArrowLeft : ArrowRight;
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return setStatus("empty");
    if (!isValidEmail(email)) return setStatus("invalid");
    setLoading(true);
    try {
      const result = await submitNewsletter(email.trim());
      setStatus(result.ok ? "success" : result.reason);
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  const message = status === "idle" ? "" : t.messages[status];
  const isError = status !== "idle" && status !== "success";

  return (
    <section className="pb-[56px] max-[560px]:pb-[40px]" aria-labelledby="newsletter-title">
      <div className="container">
        <div className="grid grid-cols-[auto_1fr_minmax(0,1.1fr)] items-center gap-6 rounded-[26px] bg-[linear-gradient(120deg,#e6f1fd,#dbeafb)] p-[clamp(22px,3vw,34px)] shadow-[0_10px_26px_rgb(18_53_104_/_7%)] max-[900px]:grid-cols-1 max-[900px]:gap-5">
          <span className="grid size-[72px] place-items-center rounded-2xl bg-white text-[var(--blue-dark)] max-[900px]:size-[60px]" aria-hidden="true">
            <Mail size={34} />
          </span>
          <div>
            <h2 id="newsletter-title" className="m-0 text-[clamp(21px,2.4vw,28px)] font-[790] leading-[1.25] text-[var(--navy)]">
              {t.title}
            </h2>
            <p className="mb-0 mt-2 text-sm leading-[1.7] text-[#35506f]">{t.description}</p>
          </div>
          <form onSubmit={onSubmit} noValidate>
            <div className="flex gap-2 rounded-full bg-white p-1.5 max-[560px]:flex-col max-[560px]:rounded-2xl">
              <label htmlFor="newsletter-email" className="sr-only">{t.placeholder}</label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setStatus("idle"); }}
                placeholder={t.placeholder}
                autoComplete="email"
                aria-invalid={isError}
                aria-describedby="newsletter-msg"
                className="min-h-12 min-w-0 flex-1 rounded-full bg-transparent px-4 text-sm text-[var(--navy)] outline-none"
              />
              <button
                type="submit"
                disabled={loading}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[var(--orange)] px-6 text-sm font-[740] text-[#25354d] transition-colors hover:bg-[#ffc15a] disabled:opacity-60"
              >
                {t.button}
                <Arrow size={16} aria-hidden="true" />
              </button>
            </div>
            <p
              id="newsletter-msg"
              role="status"
              aria-live="polite"
              className={`mb-0 mt-2 min-h-5 px-2 text-[13px] font-[600] ${isError ? "text-[#b42318]" : "text-[#2f7a1f]"}`}
            >
              {message}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
