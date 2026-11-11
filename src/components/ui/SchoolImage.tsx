"use client";

import Image from "next/image";
import { ImageOff } from "lucide-react";
import { useState } from "react";

type SchoolImageProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  preload?: boolean;
};

export function SchoolImage({
  src,
  alt,
  className,
  sizes = "(max-width: 560px) 100vw, (max-width: 850px) 100vw, 50vw",
  preload = false,
}: SchoolImageProps) {
  const [unavailable, setUnavailable] = useState(false);
  const optimizedSrc = src.startsWith("/images/anas_school_images/")
    ? src
        .replace("/images/anas_school_images/", "/images/optimized/")
        .replace(/\.(?:jpe?g|png)$/i, ".webp")
    : src;

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
      quality={82}
      sizes={sizes}
      className={className}
      onError={() => setUnavailable(true)}
    />
  );
}
