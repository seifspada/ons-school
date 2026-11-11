"use client";

import dynamic from "next/dynamic";
import { useMemo, useRef, useState } from "react";
import { useSiteLanguage } from "@/src/components/layout/SiteShell";
import { copy } from "@/src/data/copy";
import { filterPhotos, paginate } from "@/src/lib/gallery/filter";
import type { GalleryFilter, GalleryPhoto } from "@/src/lib/gallery/types";
import GalleryFilters from "./GalleryFilters";
import GalleryGrid from "./GalleryGrid";
import GalleryPagination from "./GalleryPagination";

const GalleryLightbox = dynamic(() => import("./GalleryLightbox"), { ssr: false });

export default function GalleryBrowser({ photos }: { photos: GalleryPhoto[] }) {
  const { lang } = useSiteLanguage();
  const t = copy[lang].galleryPage;
  const [filter, setFilter] = useState<GalleryFilter>("all");
  const [page, setPage] = useState(1);
  const [openIndex, setOpenIndex] = useState(-1);
  const gridRef = useRef<HTMLElement>(null);

  const filtered = useMemo(() => filterPhotos(photos, filter), [photos, filter]);
  const view = paginate(filtered, page);

  function changeFilter(f: GalleryFilter) {
    setFilter(f);
    setPage(1);
  }
  function changePage(p: number) {
    setPage(p);
    gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <GalleryFilters active={filter} labels={t.filters} groupLabel={t.filtersLabel} onChange={changeFilter} />
      <section ref={gridRef} className="scroll-mt-24 py-[28px] pb-[56px]" aria-label={t.hero.title}>
        <div className="container">
          <GalleryGrid
            photos={view.items}
            lang={lang}
            openLabel={t.open}
            emptyLabel={t.empty}
            onOpen={(i) => setOpenIndex(view.start + i)}
          />
          <GalleryPagination
            page={view.page}
            pageCount={view.pageCount}
            labels={t.pagination}
            isRtl={lang === "ar"}
            onChange={changePage}
          />
        </div>
      </section>
      {openIndex >= 0 && (
        <GalleryLightbox
          photos={filtered}
          index={openIndex}
          lang={lang}
          labels={t.lightbox}
          onClose={() => setOpenIndex(-1)}
        />
      )}
    </>
  );
}
