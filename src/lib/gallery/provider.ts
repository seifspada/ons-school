import { cacheLife, cacheTag } from "next/cache";
import { mockPhotos } from "./mock-data";
import type { GalleryPhoto } from "./types";

/**
 * Point d'intégration futur : remplace par un appel à ta base de données
 * ou à ton panneau d'administration. Les composants n'ont pas à changer.
 */
export async function getGalleryPhotos(): Promise<GalleryPhoto[]> {
  "use cache";
  cacheLife("hours");
  cacheTag("gallery");
  return [...mockPhotos].sort((a, b) => b.date.localeCompare(a.date));
}
