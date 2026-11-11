"use client";

import { useId, useRef } from "react";
import { Paperclip, UploadCloud, X } from "lucide-react";
import { FILE_RULES } from "@/src/data/inscription-config";
import type { InscriptionCopy } from "@/src/data/inscription-copy";

interface Props {
  label: string;
  hint: string;
  file: File | null;
  error?: string;
  t: InscriptionCopy;
  onChange: (file: File | null, error?: string) => void;
}

export default function FileUpload({ label, hint, file, error, t, onChange }: Props) {
  const id = useId();
  const inputRef = useRef<HTMLInputElement>(null);

  function handlePick(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (!f) return;
    if (!(FILE_RULES.mimeTypes as readonly string[]).includes(f.type)) {
      onChange(null, t.errors.fileType);
    } else if (f.size > FILE_RULES.maxBytes) {
      onChange(null, t.errors.fileSize);
    } else {
      onChange(f);
    }
    e.target.value = ""; // permet de re-sélectionner le même fichier
  }

  return (
    <div>
      <div
        className={`flex flex-wrap items-center gap-3 rounded-2xl border bg-white/70 px-4 py-3 ${
          error ? "border-red-400" : "border-[#d6e4f5]"
        }`}
      >
        <Paperclip className="h-5 w-5 shrink-0 text-[#0b2e6b]" aria-hidden />
        <div className="min-w-0 flex-1">
          <label htmlFor={id} className="block text-sm font-semibold text-[#0b2e6b]">
            {label}
          </label>
          {file ? (
            <p className="truncate text-xs text-slate-600" dir="ltr">
              {file.name} · {(file.size / 1024).toFixed(0)} Ko
            </p>
          ) : (
            <p className="text-xs text-slate-500">{hint}</p>
          )}
        </div>

        <input
          ref={inputRef}
          id={id}
          type="file"
          accept={FILE_RULES.accept}
          className="sr-only"
          onChange={handlePick}
        />

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className="inline-flex items-center gap-2 rounded-xl border border-dashed border-[#0aa5c9] bg-white px-3 py-2 text-xs font-semibold text-[#0b2e6b] transition hover:bg-[#eaf8fc]"
          >
            <UploadCloud className="h-4 w-4 text-[#0aa5c9]" aria-hidden />
            {file ? t.documents.change : t.documents.choose}
          </button>
          {file && (
            <button
              type="button"
              onClick={() => onChange(null)}
              aria-label={t.documents.remove}
              title={t.documents.remove}
              className="rounded-full p-2 text-red-500 transition hover:bg-red-50"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
      {error && (
        <p role="alert" className="mt-1 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
