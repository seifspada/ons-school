import { Suspense } from "react";
import type { Metadata } from "next";
import NewsPageShell from "@/src/components/actualites/NewsPageShell";
import Newsletter from "@/src/components/actualites/Newsletter";
import GalleryHero from "@/src/components/galerie/GalleryHero";
import GalleryBrowser from "@/src/components/galerie/GalleryBrowser";
import { getGalleryPhotos } from "@/src/lib/gallery/provider";

export const metadata: Metadata = {
  title: "Galerie | ONS School",
  description: "Découvrez en images la vie riche et dynamique de notre école.",
  openGraph: {
    title: "Galerie | ONS School",
    description: "Découvrez en images la vie riche et dynamique de notre école.",
    type: "website",
    images: ["/images/optimized/hero-students.webp"],
  },
};

async function Photos() {
  const photos = await getGalleryPhotos();
  return <GalleryBrowser photos={photos} />;
}

export default function Page() {
  return (
    <NewsPageShell>
      <GalleryHero />
      <Suspense fallback={<div className="container py-[56px]"><div className="h-[480px] animate-pulse rounded-[20px] bg-[#f3f6f9]" /></div>}>
        <Photos />
      </Suspense>
      <Newsletter />
    </NewsPageShell>
  );
}
