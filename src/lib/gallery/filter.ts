import type { GalleryFilter, GalleryPhoto } from "./types";

export const PAGE_SIZE = 9;

export function filterPhotos(photos: GalleryPhoto[], filter: GalleryFilter) {
  return filter === "all" ? photos : photos.filter((p) => p.category === filter);
}

export function paginate<T>(items: T[], page: number, pageSize = PAGE_SIZE) {
  const pageCount = Math.max(1, Math.ceil(items.length / pageSize));
  const current = Math.min(Math.max(1, page), pageCount);
  const start = (current - 1) * pageSize;
  return { items: items.slice(start, start + pageSize), page: current, pageCount, start };
}
