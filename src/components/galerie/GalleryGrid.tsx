"use client";

import type { Language } from "@/src/lib/types";
import type { GalleryPhoto } from "@/src/lib/gallery/types";
import GalleryCard from "./GalleryCard";

type Props = {
  photos: GalleryPhoto[];
  lang: Language;
  openLabel: string;
  emptyLabel: string;
  onOpen: (indexOnPage: number) => void;
};

export default function GalleryGrid({ photos, lang, openLabel, emptyLabel, onOpen }: Props) {
  if (photos.length === 0) {
    return <p className="rounded-2xl bg-[var(--wash)] p-8 text-center text-sm text-[#58677b]">{emptyLabel}</p>;
  }
  return (
    <div className="grid grid-cols-3 gap-[22px] max-[1000px]:grid-cols-2 max-[560px]:grid-cols-1 max-[560px]:gap-4">
      {photos.map((photo, i) => (
        <GalleryCard key={photo.id} photo={photo} lang={lang} openLabel={openLabel} onOpen={() => onOpen(i)} />
      ))}
    </div>
  );
}
