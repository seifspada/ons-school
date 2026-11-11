import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteShell } from "@/src/components/layout/SiteShell";
import { siteConfig } from "@/src/data/site-config";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: siteConfig.siteUrl ? new URL(siteConfig.siteUrl) : undefined,
  title: {
    default: "ONS School — أونس سكول | Jelma, Sidi Bouzid",
    template: "%s | ONS School",
  },
  description:
    "ONS School (أونس سكول), école privée à Jelma, Sidi Bouzid. Enseignement primaire et collège dans un environnement bienveillant.",
  openGraph: {
    title: "ONS School — أونس سكول",
    description:
      "L'éducation d'aujourd'hui, les réussites de demain. École primaire et collège à Jelma, Sidi Bouzid.",
    locale: "fr_TN",
    type: "website",
    ...(siteConfig.siteUrl
      ? {
          images: [
            {
              url: "/images/optimized/hero-students.webp",
              width: 634,
              height: 390,
              alt: "Élèves d’ONS School",
            },
          ],
        }
      : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: "ONS School — أونس سكول",
    description: "École privée à Jelma, Sidi Bouzid.",
    ...(siteConfig.siteUrl
      ? { images: ["/images/optimized/hero-students.webp"] }
      : {}),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
