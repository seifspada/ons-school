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
                className={`nav-link${isActive ? " is-active" : ""}${pathname === "/contact" ? " nav-link--contact-active" : ""}`}
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
            >
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
            >
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
