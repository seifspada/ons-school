"use client";

import Image from "next/image";
import { ZoomIn } from "lucide-react";
import type { Language } from "@/src/lib/types";
import type { GalleryPhoto } from "@/src/lib/gallery/types";

type Props = { photo: GalleryPhoto; lang: Language; openLabel: string; onOpen: () => void };

export default function GalleryCard({ photo, lang, openLabel, onOpen }: Props) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`${openLabel} : ${photo.title[lang]}`}
      className="group relative block aspect-[3/2] w-full overflow-hidden rounded-[20px] bg-[#e7f1f8] shadow-[0_10px_26px_rgb(18_53_104_/_12%)] transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgb(18_53_104_/_18%)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--blue-dark)]"
    >
      <Image
        src={photo.image}
        alt={photo.alt[lang]}
        fill
        sizes="(max-width: 700px) calc(100vw - 36px), (max-width: 1000px) 46vw, 360px"
        className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.05]"
      />
      <span
        className="absolute end-3 top-3 grid size-9 place-items-center rounded-full bg-white/90 text-[var(--blue-dark)] shadow-sm transition-transform duration-200 group-hover:scale-110"
        aria-hidden="true"
      >
        <ZoomIn size={18} />
      </span>
    </button>
  );
}
