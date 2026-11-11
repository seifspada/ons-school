import type { MetadataRoute } from "next";
import { siteConfig } from "@/src/data/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteConfig.siteUrl;
  if (!siteUrl) return [];

  return [
    {
      url: `${siteUrl.replace(/\/$/, "")}/acceuil`,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl.replace(/\/$/, "")}/a-propos`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl.replace(/\/$/, "")}/primaire`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl.replace(/\/$/, "")}/college`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
