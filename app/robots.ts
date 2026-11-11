import type { MetadataRoute } from "next";
import { siteConfig } from "@/src/data/site-config";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = siteConfig.siteUrl;
  return {
    rules: { userAgent: "*", allow: "/" },
    ...(siteUrl ? { sitemap: `${siteUrl.replace(/\/$/, "")}/sitemap.xml` } : {}),
  };
}
