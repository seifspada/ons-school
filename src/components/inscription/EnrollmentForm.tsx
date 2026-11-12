"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import {
  User, UserRound, Cake, Phone, Mail, MapPin, GraduationCap, CalendarDays,
  ChevronDown, Send, ArrowRight, ArrowLeft, CheckCircle2, Loader2,
} from "lucide-react";
import FileUpload from "./FileUpload";
import { formConfigs } from "@/src/data/inscription-config";
import type { FormKind } from "@/src/data/inscription-config";
import { InscriptionCopy } from "@/src/data/inscription-copy";

interface Props {
  kind: FormKind;
  t: InscriptionCopy;
  isRtl: boolean;
  /** Branchez ici l’envoi réel (API, Supabase, e-mail…). Par défaut : simulation. */
  onSubmit?: (payload: FormData, kind: FormKind) => Promise<void>;
}

type Values = {
  lastName: string; firstName: string; birthDate: string; sex: string;
  phone: string; email: string; address: string; level: string; schoolYear: string;
};
type Errors = Partial<Record<keyof Values, string>>;

const EMPTY: Values = {
  lastName: "", firstName: "", birthDate: "", sex: "",
  phone: "", email: "", address: "", level: "", schoolYear: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^\+?[0-9\s.-]{8,16}$/;

/* 16px sur mobile (évite le zoom auto iOS), 14px dès sm */
const inputBase =
  "block w-full min-h-[52px] rounded-2xl border bg-white/80 py-3 ps-11 pe-4 " +
  "text-base sm:text-sm text-[#0b2e6b] placeholder:text-slate-500 appearance-none " +
  "outline-none transition focus:border-[#0aa5c9] focus:ring-2 focus:ring-[#0aa5c9]/30";

/* Date : corrige l'alignement/hauteur du rendu natif iOS/Android */
const dateExtra =
  "text-start [&::-webkit-date-and-time-value]:text-start " +
  "[&::-webkit-date-and-time-value]:min-h-[1.5em] [&::-webkit-calendar-picker-indicator]:opacity-60";

const selectExtra = "pe-10 text-ellipsis";

const border = (err?: string) => (err ? "border-red-400" : "border-[#d6e4f5]");

function Field({
  id, label, required = true, icon, error, children, full, chevron,
}: {
  id: string; label: string; required?: boolean; icon: ReactNode;
  error?: string; children: ReactNode; full?: boolean; chevron?: boolean;
}) {
  return (
    <div className={full ? "sm:col-span-2" : ""}>
      <label htmlFor={id} className="mb-1.5 block ps-1 text-xs font-semibold text-[#0b2e6b]">
        {label}
        {required && <span className="text-red-500" aria-hidden> *</span>}
      </label>
      <div className="relative">
        <span className="pointer-events-none absolute start-4 top-1/2 z-10 -translate-y-1/2 text-[#0b2e6b]/70">
          {icon}
        </span>
        {children}
        {chevron && (
          <ChevronDown
            className="pointer-events-none absolute end-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#0b2e6b]/70"
            aria-hidden
          />
        )}
      </div>
      {error && (
        <p role="alert" className="mt-1 ps-2 text-xs text-red-600">{error}</p>
      )}
    </div>
  );
}

export default function EnrollmentForm({ kind, t, isRtl, onSubmit }: Props) {
  const config = formConfigs[kind];
  const copy = t.forms[kind];

  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [files, setFiles] = useState<Record<string, File | null>>({});
  const [fileErrors, setFileErrors] = useState<Record<string, string | undefined>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const Arrow = isRtl ? ArrowLeft : ArrowRight;

  function set<K extends keyof Values>(key: K, value: string) {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function validate(v: Values): Errors {
    const e: Errors = {};
    const today = new Date().toISOString().split("T")[0]; // dans un gestionnaire d’événement : autorisé
    const req = t.errors.required;
    if (!v.lastName.trim()) e.lastName = req;
    else if (v.lastName.trim().length < 2) e.lastName = t.errors.name;
    if (!v.firstName.trim()) e.firstName = req;
    else if (v.firstName.trim().length < 2) e.firstName = t.errors.name;
    if (!v.birthDate) e.birthDate = req;
    else if (v.birthDate > today || v.birthDate < "1990-01-01") e.birthDate = t.errors.birthDate;
    if (!v.sex) e.sex = req;
    if (!v.phone.trim()) e.phone = req;
    else if (!PHONE_RE.test(v.phone.trim())) e.phone = t.errors.phone;
    if (!v.email.trim()) e.email = req;
    else if (!EMAIL_RE.test(v.email.trim())) e.email = t.errors.email;
    if (!v.address.trim()) e.address = req;
    else if (v.address.trim().length < 5) e.address = t.errors.address;
    if (!v.level) e.level = req;
    if (!v.schoolYear) e.schoolYear = req;
    return e;
  }

  async function handleSubmit(ev: FormEvent) {
    ev.preventDefault();
    const e = validate(values);
    setErrors(e);
    if (Object.keys(e).length > 0 || Object.values(fileErrors).some(Boolean)) {
      setStatus("error");
      return;
    }
    setStatus("submitting");
    try {
      const data = new FormData();
      data.append("establishment", kind);
      Object.entries(values).forEach(([k, val]) => data.append(k, val.trim()));
      Object.entries(files).forEach(([docId, f]) => f && data.append(`doc_${docId}`, f, f.name));

      if (onSubmit) await onSubmit(data, kind);
      else await new Promise((r) => setTimeout(r, 800)); // simulation : à remplacer

      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  function reset() {
    setValues(EMPTY);
    setErrors({});
    setFiles({});
    setFileErrors({});
    setStatus("idle");
  }

  if (status === "success") {
    return (
      <div role="status" className="flex flex-col items-center gap-4 px-4 py-12 text-center">
        <CheckCircle2 className="h-16 w-16 text-[#6bb52b]" aria-hidden />
        <h3 className="text-2xl font-extrabold text-[#0b2e6b]">{t.success.title}</h3>
        <p className="max-w-md text-sm text-slate-600">{t.success.text}</p>
        <button
          type="button"
          onClick={reset}
          className="rounded-full border border-[#0b2e6b] px-6 py-2.5 text-sm font-semibold text-[#0b2e6b] transition hover:bg-[#0b2e6b] hover:text-white"
        >
          {t.success.again}
        </button>
      </div>
    );
  }

  const ids = (n: string) => `${kind}-${n}`;

  return (
    <form onSubmit={handleSubmit} noValidate aria-labelledby={ids("title")}>
      <h2 id={ids("title")} className="text-2xl font-extrabold text-[#0b2e6b] sm:text-3xl">
        {copy.title}
      </h2>
      <p className="mb-6 mt-1 text-sm text-[#0b2e6b]/80">{copy.intro}</p>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field id={ids("lastName")} label={t.fields.lastName} icon={<User className="h-5 w-5" />} error={errors.lastName}>
          <input
            id={ids("lastName")} className={`${inputBase} ${border(errors.lastName)}`}
            placeholder={t.fields.lastName} autoComplete="family-name"
            aria-invalid={!!errors.lastName} value={values.lastName}
            onChange={(e) => set("lastName", e.target.value)}
          />
        </Field>

        <Field id={ids("firstName")} label={t.fields.firstName} icon={<User className="h-5 w-5" />} error={errors.firstName}>
          <input
            id={ids("firstName")} className={`${inputBase} ${border(errors.firstName)}`}
            placeholder={t.fields.firstName} autoComplete="given-name"
            aria-invalid={!!errors.firstName} value={values.firstName}
            onChange={(e) => set("firstName", e.target.value)}
          />
        </Field>

        {/* Date de naissance */}
        <Field
          id={ids("birthDate")}
          label={`${t.fields.birthDate} (${t.fields.birthDateHint})`}
          icon={<Cake className="h-5 w-5" />}
          error={errors.birthDate}
        >
          <input
            id={ids("birthDate")} type="date" min="1990-01-01"
            className={`${inputBase} ${dateExtra} ${border(errors.birthDate)} ${values.birthDate ? "" : "text-slate-500"}`}
            aria-invalid={!!errors.birthDate} value={values.birthDate}
            onChange={(e) => set("birthDate", e.target.value)}
          />
        </Field>

        {/* Sexe */}
        <Field
          id={ids("sex")} label={t.fields.sex}
          icon={<UserRound className="h-5 w-5" />} error={errors.sex} chevron
        >
          <select
            id={ids("sex")}
            className={`${inputBase} ${selectExtra} ${border(errors.sex)} ${values.sex ? "" : "text-slate-500"}`}
            aria-invalid={!!errors.sex} value={values.sex}
            onChange={(e) => set("sex", e.target.value)}
          >
            <option value="">{t.fields.select}</option>
            <option value="male">{t.fields.male}</option>
            <option value="female">{t.fields.female}</option>
          </select>
        </Field>

        <Field id={ids("phone")} label={t.fields.phone} icon={<Phone className="h-5 w-5" />} error={errors.phone}>
          <input
            id={ids("phone")} type="tel" inputMode="tel" dir="ltr"
            className={`${inputBase} text-start ${border(errors.phone)}`}
            placeholder="+216 ..." autoComplete="tel"
            aria-invalid={!!errors.phone} value={values.phone}
            onChange={(e) => set("phone", e.target.value)}
          />
        </Field>

        <Field id={ids("email")} label={t.fields.email} icon={<Mail className="h-5 w-5" />} error={errors.email}>
          <input
            id={ids("email")} type="email" inputMode="email" dir="ltr"
            className={`${inputBase} text-start ${border(errors.email)}`}
            placeholder="exemple@mail.com" autoComplete="email"
            aria-invalid={!!errors.email} value={values.email}
            onChange={(e) => set("email", e.target.value)}
          />
        </Field>

        <Field full id={ids("address")} label={t.fields.address} icon={<MapPin className="h-5 w-5" />} error={errors.address}>
          <input
            id={ids("address")} className={`${inputBase} ${border(errors.address)}`}
            placeholder={t.fields.address} autoComplete="street-address"
            aria-invalid={!!errors.address} value={values.address}
            onChange={(e) => set("address", e.target.value)}
          />
        </Field>

        <Field id={ids("level")} label={t.fields.level} icon={<GraduationCap className="h-5 w-5" />} error={errors.level} chevron>
          <select
            id={ids("level")}
            className={`${inputBase} ${selectExtra} ${border(errors.level)} ${values.level ? "" : "text-slate-500"}`}
            aria-invalid={!!errors.level} value={values.level}
            onChange={(e) => set("level", e.target.value)}
          >
            <option value="">{t.fields.select}</option>
            {config.levels.map((l) => (
              <option key={l} value={l}>{t.levels[l]}</option>
            ))}
          </select>
        </Field>

        <Field id={ids("schoolYear")} label={t.fields.schoolYear} icon={<CalendarDays className="h-5 w-5" />} error={errors.schoolYear} chevron>
          <select
            id={ids("schoolYear")}
            className={`${inputBase} ${selectExtra} ${border(errors.schoolYear)} ${values.schoolYear ? "" : "text-slate-500"}`}
            aria-invalid={!!errors.schoolYear} value={values.schoolYear}
            onChange={(e) => set("schoolYear", e.target.value)}
          >
            <option value="">{t.fields.select}</option>
            {config.schoolYears.map((y) => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
        </Field>
      </div>

      <fieldset className="mt-6">
        <legend className="text-sm font-bold text-[#0b2e6b]">{t.documents.title}</legend>
        <p className="mb-3 text-xs text-slate-500">{t.documents.hint}</p>
        <div className="grid gap-3">
          {config.documents.map((docId) => (
            <FileUpload
              key={docId}
              t={t}
              label={t.documents.items[docId].label}
              hint={t.documents.items[docId].hint}
              file={files[docId] ?? null}
              error={fileErrors[docId]}
              onChange={(f, err) => {
                setFiles((s) => ({ ...s, [docId]: f }));
                setFileErrors((s) => ({ ...s, [docId]: err }));
              }}
            />
          ))}
        </div>
      </fieldset>

      {status === "error" && (
        <p role="alert" className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
          {Object.keys(errors).length > 0 ? t.errors.fix : t.errors.submit}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mx-auto mt-6 flex items-center justify-center gap-3 rounded-full bg-gradient-to-b from-[#ffa726] to-[#f7941d] px-10 py-3.5 text-base font-bold text-white shadow-lg shadow-orange-300/50 transition hover:brightness-105 disabled:opacity-70 w-full sm:w-3/4"
      >
        {status === "submitting" ? (
          <><Loader2 className="h-5 w-5 animate-spin" aria-hidden />{t.submitting}</>
        ) : (
          <><Send className="h-5 w-5 rtl:-scale-x-100" aria-hidden />{t.submit}<Arrow className="h-5 w-5" aria-hidden /></>
        )}
      </button>
    </form>
  );
}