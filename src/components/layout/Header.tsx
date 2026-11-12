"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { navigation } from "@/src/data/navigation";
import { copy } from "@/src/data/copy";
import type { Language } from "@/src/lib/types";
import { BrandLockup } from "./BrandLockup";

const flagClass = "h-4 w-6 shrink-0 rounded-[3px] ring-1 ring-black/15";

function FlagFR() {
  return (
    <svg className={flagClass} viewBox="0 0 3 2" aria-hidden="true" focusable="false">
      <rect width="1" height="2" fill="#0055a4" />
      <rect x="1" width="1" height="2" fill="#fff" />
      <rect x="2" width="1" height="2" fill="#ef4135" />
    </svg>
  );
}

function FlagTN() {
  return (
    <svg className={flagClass} viewBox="0 0 900 600" aria-hidden="true" focusable="false">
      <rect width="900" height="600" fill="#e70013" />
      <circle cx="450" cy="300" r="150" fill="#fff" />
      <circle cx="450" cy="300" r="120" fill="#e70013" />
      <circle cx="480" cy="300" r="96" fill="#fff" />
      <polygon
        fill="#e70013"
        points="490,240 504.1,280.6 547.1,281.5 512.8,307.4 525.3,348.5 490,324 454.7,348.5 467.2,307.4 432.9,281.5 475.9,280.6"
      />
    </svg>
  );
}

type HeaderProps = {
  lang: Language;
  onLanguageChange: (language: Language) => void;
};

export function Header({ lang, onLanguageChange }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const text = copy[lang];

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="header-inner">
        <BrandLockup />
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? text.closeMenu : text.menu}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
        <nav
          id="primary-navigation"
          className={`main-nav${menuOpen ? " main-nav--open" : ""}`}
          aria-label={lang === "fr" ? "Navigation principale" : "التنقل الرئيسي"}
        >
          {navigation.map((item) => {
            const { id, key } = item;
            const label = text.nav[key as keyof typeof text.nav];
            const isActive = "route" in item && pathname === item.route;
            const href = "route" in item
              ? item.route
              : pathname === "/acceuil"
                ? `#${id}`
                : `/acceuil#${id}`;

            return (
              <Link
                href={href}
                key={id}
                className={[
                  "nav-link",
                  "relative inline-flex items-center justify-center rounded-full px-4 py-2",
                  "text-[14px] font-[700] transition-[background-color,color,box-shadow] duration-200",
                  // supprime toute ligne / soulignement (pseudo-éléments)
                  "after:hidden before:hidden border-b-0",
                  isActive
                    ? // Mobile : orange foncé + texte blanc / Desktop (md+) : orange d'origine + texte noir
                      "is-active !bg-[#ffb12b] !text-white !shadow-[0_6px_16px_rgb(194_87_12_/_35%)] " +
                      "md:!bg-[var(--orange)] md:!text-black md:!shadow-[0_6px_16px_rgb(247_135_26_/_30%)]"
                    : "text-[var(--navy)] hover:bg-[#fff3e3] hover:text-[var(--orange-deep)]",
                ].join(" ")}
                aria-current={isActive ? "page" : undefined}
                onClick={closeMenu}
              >
                {label}
              </Link>
            );
          })}
          <div className="language-switch" role="group" aria-label={text.language}>
            <button
              type="button"
              onClick={() => {
                onLanguageChange("fr");
                closeMenu();
              }}
              aria-pressed={lang === "fr"}
              aria-label="Français"
              className="inline-flex items-center gap-1.5"
            >
              <FlagFR />
              FR
            </button>
            <span aria-hidden="true">/</span>
            <button
              type="button"
              onClick={() => {
                onLanguageChange("ar");
                closeMenu();
              }}
              aria-pressed={lang === "ar"}
              aria-label="العربية"
              className="inline-flex items-center gap-1.5"
            >
              <FlagTN />
              AR
            </button>
          </div>
        </nav>
      </div>
      <AnimatePresence>
        {menuOpen ? (
          <motion.button
            className="mobile-backdrop"
            type="button"
            aria-label={text.closeMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMenu}
          />
        ) : null}
      </AnimatePresence>
    </header>
  );
}