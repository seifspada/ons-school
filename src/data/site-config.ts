export const siteConfig = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, ""),
  copyrightYear: process.env.NEXT_PUBLIC_COPYRIGHT_YEAR ?? "2026",
};
