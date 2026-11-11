# ONS School

Responsive French/Arabic ONS School website built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, and Lucide. The homepage is at `/acceuil` (`/` redirects there), the school presentation is at `/a-propos`, the primary and collège pages are at `/primaire` and `/college`, and contact details are at `/contact`.

## Run locally

```bash
npm install
npm run dev
```

## School settings

Set these public environment variables when the school confirms the details:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical website URL used by metadata, sitemap, and robots |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp number in international format, digits only |
| `NEXT_PUBLIC_COPYRIGHT_YEAR` | Footer copyright year (defaults to `2026`) |
| `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT` | Optional URL accepting contact submissions as JSON via `POST`; a successful HTTP response must use a 2xx status |

Until configured, the sitemap contains no canonical URL and the floating WhatsApp button points to the contact section. The contact form does not claim delivery until an endpoint is configured and confirms success. The phone, email, social profile links, and legal pages remain placeholders rather than invented details.

Update the school statistics in `src/data/statistics.ts` only when verified figures are available. News dates are marked as pending, and testimonial copy is explicitly identified as fictional until replaced with approved parent feedback.

The provided image assets are in `public/images/anas_school_images/`. The standalone official logo file was not included; the current header and footer use a text-based brand lockup until `public/images/logo.png` is supplied.

## Image optimization

Run `npm run optimize:images` to create local WebP copies in `public/images/optimized/`. The script uses Sharp at quality 83, preserves each source aspect ratio and never enlarges an image. `npm run dev` and `npm run build` run this step automatically; original files remain unchanged. `next/image` serves responsive WebP output at quality 82, with only each page's hero image preloaded. Next.js's default image loader remains enabled for Vercel CDN caching.

The source photographs are mostly under 500 pixels wide, and some activity/news thumbnails are under 200 pixels wide. WebP conversion reduces transfer size but cannot restore missing image detail; request larger originals for those assets before increasing their display resolution. `homepage-mockup-reference.jpg` is a design reference, not a website image, and is intentionally not converted or referenced by the site.

The About page reuses the supplied student and school-building photos. Its teacher-and-students visual and facility photos are intentionally replaceable placeholders because no matching photos or facility confirmations were provided. Replace them in `src/components/about/AboutPage.tsx` and `src/data/about-page.ts` after the school supplies approved images and confirms the spaces.

The primary grade list is intentionally empty until the school confirms the levels offered. Add verified grade names to `primaryLevels` in `src/data/primary-page.ts`. Example activities in that file are marked as pending confirmation in the interface; update their labels or confirmation wording when the school verifies the actual offering.
