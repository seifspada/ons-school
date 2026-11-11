"use client";

import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/counter.css";
import type { Language } from "@/src/lib/types";
import type { GalleryPhoto } from "@/src/lib/gallery/types";

type Props = {
  photos: GalleryPhoto[];
  index: number;
  lang: Language;
  labels: { previous: string; next: string; close: string };
  onClose: () => void;
};

// Chargé à la demande (next/dynamic) : aucun JS de lightbox avant le premier clic.
// La librairie gère : flèches clavier, Échap, gestes tactiles, blocage du scroll.
export default function GalleryLightbox({ photos, index, lang, labels, onClose }: Props) {
  return (
    <Lightbox
      open
      close={onClose}
      index={index}
      plugins={[Captions, Counter]}
      slides={photos.map((p) => ({
        src: p.fullImage ?? p.image,
        alt: p.alt[lang],
        title: p.title[lang],
        description: p.description[lang],
      }))}
      labels={{ Previous: labels.previous, Next: labels.next, Close: labels.close }}
      controller={{ closeOnBackdropClick: true }}
      styles={{ container: { backgroundColor: "rgb(8 20 44 / 90%)" } }}
    />
  );
}
