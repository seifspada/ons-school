"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  AtSign,
  ChevronDown,
  Clock3,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { useState, type FormEvent } from "react";
import { contactCopy } from "@/src/data/contact-copy";
import { copy } from "@/src/data/copy";
import { getOptimizedImageSrc } from "@/src/lib/images";
import { useSiteLanguage } from "@/src/components/layout/SiteShell";
import { PageBreadcrumb } from "@/src/components/ui/PageBreadcrumb";

type ContactField = "name" | "email" | "subject" | "message";

const formEndpoint = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT;
type ContactLanguageCopy = (typeof contactCopy)[keyof typeof contactCopy];
/* Petits traits décoratifs */
function Sparks({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 44 44"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M14 6l7 11" />
      <path d="M27 3l4 14" />
      <path d="M35 24l-15 5" />
    </svg>
  );
}
export default function ContactPage() {
  const { lang } = useSiteLanguage();
  const isArabic = lang === "ar";
  const text = contactCopy[lang];
  const address = copy[lang].footer.address;
  const mapQuery = "Jelma, Sidi Bouzid, Tunisia";
  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}`;
  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3257.5446617974694!2d9.41716331158925!3d35.26758215247149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12feb9d971a1b137%3A0x159be6750d1a4da3!2z2KfZhNmF2K_Ysdiz2Kkg2KfZhNin2KjYqtiv2KfYptmK2KkgLyBPTlMgU0NIT09MINin2YTYrtin2LXYqSDYp9mG2LMg2LPZg9mI2YQ!5e0!3m2!1sfr!2stn!4v1794252985166!5m2!1sfr!2stn";
  const details = [
    { Icon: MapPin, title: text.details[0].title, value: address },
    { Icon: Phone, title: text.details[1].title, value: text.details[1].value },
    { Icon: AtSign, title: text.details[2].title, value: text.details[2].value },
    { Icon: Clock3, title: text.details[3].title, value: text.details[3].value },
  ];

  return (
    <main lang={lang} dir={isArabic ? "rtl" : "ltr"} className="bg-white text-[#17243a]">
            <section
        className="relative overflow-hidden bg-white"
        aria-labelledby="contact-hero-title"
      >
        {/* Forme orange à gauche */}
        <span
          className="pointer-events-none absolute start-[-95px] top-[70px] z-[2] h-[250px] w-[150px] rounded-e-full bg-gradient-to-b from-[#ffb12b] to-[#f7871a] max-[560px]:hidden"
          aria-hidden="true"
        />

        {/* Image à droite, fondu vers la gauche */}
        <div className="relative h-[clamp(300px,70vw,420px)] w-full lg:absolute lg:inset-y-0 lg:end-0 lg:h-auto lg:w-[64%] lg:[mask-image:linear-gradient(to_right,transparent_0%,#000_36%)] rtl:lg:[mask-image:linear-gradient(to_left,transparent_0%,#000_36%)]">
          <Image
            src={getOptimizedImageSrc("/images/anas_school_images/hero-contact.png")}
            alt={text.imageAlt}
            fill
            priority
            sizes="(min-width: 1024px) 64vw, 100vw"
            className="object-cover object-top"
          />
        </div>

        {/* Vague orange → verte en bas à droite */}
        <span
          className="pointer-events-none absolute -bottom-9 end-[-6%] z-[2] hidden h-[90px] w-[44%] rotate-[-3deg] rounded-[100%] bg-gradient-to-r from-[#f7871a] to-[#7cc42a] lg:block rtl:rotate-[3deg]"
          aria-hidden="true"
        />

        <div className="mx-auto max-w-7xl px-4 py-[clamp(32px,5vw,56px)] sm:px-6 lg:min-h-[560px]">
          <div className="relative z-[3] max-w-[560px]">
            <PageBreadcrumb currentLabel={text.title} />
            <p className="mb-2 mt-4 text-sm font-bold uppercase tracking-[0.15em] text-[#eb9410]">
              {isArabic ? "أنس سكول" : "ONS School"}
            </p>
            <div className="flex items-start gap-3">
              <h1
                id="contact-hero-title"
                className="m-0 text-[clamp(40px,5.4vw,66px)] font-[850] leading-[1.05] tracking-[-0.04em] text-[#123568]"
              >
                {text.title}
              </h1>
              <Sparks className="mt-1 hidden size-[44px] shrink-0 text-[var(--orange)] lg:block" />
            </div>
            <p className="mb-0 mt-4 max-w-[440px] text-[clamp(16px,1.8vw,20px)] font-[560] leading-[1.6] text-[#123568]">
              {text.description}
            </p>
            <svg
              className="mt-4 rtl:-scale-x-100"
              width="150"
              height="14"
              viewBox="0 0 150 14"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 10 C40 2, 100 2, 147 8"
                stroke="#f5a623"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </section>

      <section aria-label={isArabic ? "معلومات الاتصال" : "Coordonnées"} className="relative z-10 mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-3 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:gap-4">
        {details.map(({ Icon, title, value }) => (
          <article key={title} className="flex min-h-28 items-center gap-4 rounded-2xl border border-[#dcecff] bg-white/95 p-4 shadow-[0_8px_24px_rgba(18,53,104,0.08)] sm:flex-col sm:justify-center sm:gap-2 sm:text-center">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#eaf4ff] text-[#123568]">
              <Icon size={23} strokeWidth={2.5} aria-hidden="true" />
            </span>
            <div>
              <h2 className="font-bold text-[#123568]">{title}</h2>
              <p className="mt-0.5 text-sm text-[#415877]">{value}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-4 py-8 sm:px-6 sm:py-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-6">
        <ContactForm text={text.form} isArabic={isArabic} />
        <div className="grid min-w-0 gap-5">
          <section aria-labelledby="contact-map-title" className="overflow-hidden rounded-[1.75rem] border border-[#dcecff] bg-white shadow-[0_10px_30px_rgba(18,53,104,0.08)]">
            <div className="flex items-center justify-between gap-3 px-5 pb-3 pt-5 sm:px-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#eb9410]">{isArabic ? "الموقع" : "Notre établissement"}</p>
                <h2 id="contact-map-title" className="mt-1 text-xl font-extrabold text-[#123568]">{text.map.title}</h2>
              </div>
              <MapPin className="shrink-0 text-[#eb9410]" size={25} aria-hidden="true" />
            </div>
            <iframe
              title={text.map.label}
              src={mapEmbedUrl}
              className="h-64 w-full border-0 sm:h-72"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
            <div className="flex items-center justify-between gap-3 px-5 py-3 text-sm text-[#415877] sm:px-6">
              <span>{address}</span>
              <a href={mapUrl} target="_blank" rel="noreferrer" className="shrink-0 font-bold text-[#123568] underline decoration-[#f5a623] decoration-2 underline-offset-4 hover:text-[#eb9410]">
                {text.map.open}
              </a>
            </div>
          </section>

          <Faq text={text.faq} isArabic={isArabic} />
        </div>
      </section>
    </main>
  );
}

function ContactForm({
  text,
  isArabic,
}: {
  text: ContactLanguageCopy["form"];
  isArabic: boolean;
}) {
  const [errors, setErrors] = useState<Partial<Record<ContactField, string>>>({});
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const values = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      subject: String(data.get("subject") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
    };
    const nextErrors: Partial<Record<ContactField, string>> = {};

    if (!values.name) nextErrors.name = text.required;
    if (!values.email) nextErrors.email = text.required;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) nextErrors.email = text.invalidEmail;
    if (!values.subject) nextErrors.subject = text.required;
    if (!values.message) nextErrors.message = text.required;

    setErrors(nextErrors);
    setStatus(null);
    if (Object.keys(nextErrors).length > 0) return;
    if (!formEndpoint) {
      setStatus({ type: "error", message: text.unavailable });
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error(`Contact endpoint returned ${response.status}`);
      setStatus({ type: "success", message: text.success });
      form.reset();
    } catch {
      setStatus({ type: "error", message: text.failed });
    } finally {
      setIsSubmitting(false);
    }
  }

  function fieldError(field: ContactField) {
    return errors[field] ? (
      <span id={`${field}-error`} className="mt-1 block text-sm font-medium text-red-700">{errors[field]}</span>
    ) : null;
  }

  const fieldClass = "mt-1 w-full rounded-xl border border-[#d7e5f7] bg-[#fbfdff] px-4 py-3 text-[#17243a] outline-none transition placeholder:text-[#8797ad] focus:border-[#1595c4] focus:ring-4 focus:ring-[#1595c4]/10 aria-[invalid=true]:border-red-500";

  return (
    <section aria-labelledby="contact-form-title" className="min-w-0 rounded-[1.75rem] border border-[#dcecff] bg-gradient-to-br from-[#eef7ff] to-white p-5 shadow-[0_10px_30px_rgba(18,53,104,0.08)] sm:p-7">
      <div className="mb-5 flex items-center gap-4">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#123568] text-white shadow-md">
          <Send size={23} aria-hidden="true" />
        </span>
        <div>
          <h2 id="contact-form-title" className="text-xl font-extrabold text-[#123568] sm:text-2xl">{text.title}</h2>
          <p className="mt-1 text-sm text-[#526783]">{text.description}</p>
        </div>
      </div>

      <form noValidate onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="contact-name" className="text-sm font-bold text-[#23436c]">{text.name} *</label>
            <input id="contact-name" name="name" autoComplete="name" required maxLength={120} className={fieldClass} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} />
            {fieldError("name")}
          </div>
          <div>
            <label htmlFor="contact-email" className="text-sm font-bold text-[#23436c]">{text.email} *</label>
            <input id="contact-email" name="email" type="email" dir="ltr" autoComplete="email" required maxLength={254} className={fieldClass} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} />
            {fieldError("email")}
          </div>
          <div>
            <label htmlFor="contact-phone" className="text-sm font-bold text-[#23436c]">{text.phone}</label>
            <input id="contact-phone" name="phone" type="tel" dir="ltr" autoComplete="tel" maxLength={40} className={fieldClass} />
          </div>
          <div>
            <label htmlFor="contact-subject" className="text-sm font-bold text-[#23436c]">{text.subject} *</label>
            <select id="contact-subject" name="subject" required defaultValue="" className={fieldClass} aria-invalid={Boolean(errors.subject)} aria-describedby={errors.subject ? "subject-error" : undefined}>
              <option value="" disabled>{text.subjectPlaceholder}</option>
              {text.subjects.map((subject) => <option key={subject} value={subject}>{subject}</option>)}
            </select>
            {fieldError("subject")}
          </div>
        </div>

        <div>
          <label htmlFor="contact-message" className="text-sm font-bold text-[#23436c]">{text.message} *</label>
          <textarea id="contact-message" name="message" required minLength={5} maxLength={5000} rows={5} className={`${fieldClass} resize-y`} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined} />
          {fieldError("message")}
        </div>

        {status ? (
          <p role={status.type === "error" ? "alert" : "status"} className={`rounded-xl px-4 py-3 text-sm font-semibold ${status.type === "success" ? "bg-green-50 text-green-800" : "bg-amber-50 text-amber-900"}`}>
            {status.message}
          </p>
        ) : null}

        <button type="submit" disabled={isSubmitting} className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#f5a623] to-[#f7941d] px-6 py-3 font-bold text-white shadow-[0_8px_18px_rgba(245,166,35,0.28)] transition hover:-translate-y-0.5 hover:shadow-lg disabled:cursor-wait disabled:opacity-70 sm:w-auto">
          <span>{isSubmitting ? text.sending : text.submit}</span>
          {!isSubmitting ? <ArrowRight size={19} className={isArabic ? "rotate-180" : ""} aria-hidden="true" /> : <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" aria-hidden="true" />}
        </button>
      </form>
    </section>
  );
}

function Faq({
  text,
  isArabic,
}: {
  text: ContactLanguageCopy["faq"];
  isArabic: boolean;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section aria-labelledby="contact-faq-title" className="rounded-[1.75rem] border border-[#dcecff] bg-gradient-to-br from-[#eff7ff] to-white p-5 shadow-[0_10px_30px_rgba(18,53,104,0.08)] sm:p-6">
      <div className="mb-4 flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-[#123568] text-lg font-black text-white" aria-hidden="true">?</span>
        <h2 id="contact-faq-title" className="text-xl font-extrabold text-[#123568]">{text.title}</h2>
      </div>
      <div className="space-y-2">
        {text.items.map((item, index) => {
          const isOpen = openIndex === index;
          const panelId = `contact-faq-answer-${index}`;
          return (
            <div key={item.question} className="overflow-hidden rounded-xl border border-[#dcecff] bg-white">
              <h3>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-3 px-4 py-3 text-start font-semibold text-[#173c70] transition hover:bg-[#f7fbff]"
                >
                  <span>{item.question}</span>
                  <ChevronDown size={18} className={`shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} aria-hidden="true" />
                </button>
              </h3>
              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.div
                    id={panelId}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 text-sm leading-relaxed text-[#526783]">
                      <p>{item.answer}</p>
                      {"link" in item ? (
                        <Link href="/inscription" className="mt-2 inline-flex items-center gap-1 font-bold text-[#123568] underline decoration-[#f5a623] decoration-2 underline-offset-4">
                          {item.link} <ArrowRight size={15} className={isArabic ? "rotate-180" : ""} aria-hidden="true" />
                        </Link>
                      ) : null}
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
