import Image from "next/image";
import Link from "next/link";
import { getOptimizedImageSrc } from "@/src/lib/images";

export function BrandLockup({ footer = false }: { footer?: boolean }) {
  return (
    <Link
      href="/acceuil"
      className={`brand-lockup${footer ? " brand-lockup--footer" : ""}`}
      aria-label="ONS School — Accueil"
    >
      <span className="brand-symbol">
        <Image
          src={getOptimizedImageSrc("/images/anas_school_images/logo.png")}
          alt="Logo ONS School"
          width={608}
          height={411}
          priority={!footer}
        />
      </span>
      <span className="brand-copy">
        <span className="brand-arabic" lang="ar" dir="rtl">
          أنس سكول
        </span>
        <span className="brand-english">ONS School</span>
      </span>
    </Link>
  );
}
