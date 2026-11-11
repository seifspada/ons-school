import { Camera, Globe2, Mail, MapPin, Phone } from "lucide-react";
import { navigation } from "@/src/data/navigation";
import { copy } from "@/src/data/copy";
import { siteConfig } from "@/src/data/site-config";
import Link from "next/link";
import type { Language } from "@/src/lib/types";
import { BrandLockup } from "./BrandLockup";
import { usePathname } from "next/navigation";

const socialLinks = [
  { label: "Facebook", Icon: Globe2 },
  { label: "Instagram", Icon: Camera },
];

export function Footer({ lang }: { lang: Language }) {
  const text = copy[lang];
  const pathname = usePathname();
  const socialLabel = `${text.footer.socialPending} — ${text.footer.contact}`;

  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <BrandLockup footer />
          <p>{text.hero.slogan}</p>
        </div>
        <div className="footer-column">
          <h2>{text.footer.navigation}</h2>
          <ul>
            {navigation.slice(0, 6).map(({ id, key, ...item }) => (
              <li key={id}>
                <Link href={
                  "route" in item
                    ? item.route
                    : pathname === "/acceuil"
                      ? `#${id}`
                      : `/acceuil#${id}`
                }>
                  {text.nav[key as keyof typeof text.nav]}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-column footer-contact">
          <h2>{text.footer.contact}</h2>
          <p><MapPin size={16} aria-hidden="true" />{text.footer.address}</p>
          <p><Phone size={16} aria-hidden="true" />{text.footer.phone}</p>
          <p><Mail size={16} aria-hidden="true" />{text.footer.email}</p>
        </div>
        <div className="footer-column">
          <h2>{text.footer.social}</h2>
          <div className="social-links">
            {socialLinks.map(({ label, Icon }) => (
              <Link href="/acceuil#contact" key={label} aria-label={`${label} — ${socialLabel}`}>
                <Icon size={18} aria-hidden="true" />
                <span>{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {siteConfig.copyrightYear} ONS School. {text.footer.rights}</p>
        <div>
          <a href="#contact">{text.footer.legal}</a>
          <span aria-hidden="true">·</span>
          <a href="#contact">{text.footer.privacy}</a>
        </div>
      </div>
    </footer>
  );
}
