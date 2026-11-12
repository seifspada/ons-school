"use client";

import Image from "next/image";
import { ImageOff } from "lucide-react";
import { useState } from "react";
import { getOptimizedImageSrc } from "@/src/lib/images";

type SchoolImageProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  preload?: boolean;
  loading?: "eager" | "lazy";
  quality?: number;
  unoptimized?: boolean;
};

export function SchoolImage({
  src,
  alt,
  className,
  sizes = "(max-width: 560px) 100vw, (max-width: 850px) 100vw, 50vw",
  preload = false,
  loading,
  quality = 82,
  unoptimized = false,
}: SchoolImageProps) {
  const [unavailable, setUnavailable] = useState(false);
  const optimizedSrc = getOptimizedImageSrc(src);

  if (unavailable) {
    return (
      <div className={`image-fallback ${className ?? ""}`} role="img" aria-label={alt}>
        <ImageOff size={28} aria-hidden="true" />
      </div>
    );
  }

  return (
    <Image
      src={optimizedSrc}
      alt={alt}
      fill
      preload={preload}
      quality={quality}
      loading={loading}
      unoptimized={unoptimized}
      sizes={sizes}
      className={className}
      onError={() => setUnavailable(true)}
    />
  );
}
