"use client";

import { useEffect } from "react";

const revealSelector = "h1, h2, h3, p, article, form, img, a[href], button, input, select, textarea";

export function ScrollAnimations() {
  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }

    const site = document.querySelector(".website");
    if (!site) return;
    const siteRoot: Element = site;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target;
            const variant = target.getAttribute("data-scroll-reveal");
            if (variant?.endsWith("-pending")) {
              target.setAttribute(
                "data-scroll-reveal",
                variant.slice(0, -"-pending".length),
              );
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.12 },
    );

    function observeElements(root: ParentNode) {
      const candidates: HTMLElement[] = [];

      if (root instanceof HTMLElement && root.matches(revealSelector)) {
        candidates.push(root);
      }

      candidates.push(...root.querySelectorAll<HTMLElement>(revealSelector));

      const groups = new Map<Element, HTMLElement[]>();

      candidates.forEach((element) => {
        if (
          element.hasAttribute("data-scroll-reveal") ||
          element.closest(".site-header, .floating-contact, .sr-only") ||
          element.style.opacity !== "" ||
          element.style.transform !== ""
        ) {
          return;
        }

        const region =
          element.closest("section, main, .site-footer, form") ?? siteRoot;
        const group = groups.get(region) ?? [];
        group.push(element);
        groups.set(region, group);
      });

      groups.forEach((elements) => {
        elements.forEach((element, index) => {
          const variant = element.matches("img")
            ? "image"
            : element.matches("article, form")
              ? "card"
              : element.matches("a[href], button, input, select, textarea")
                ? "action"
                : "content";

          element.setAttribute("data-scroll-reveal", `${variant}-pending`);
          element.style.setProperty(
            "--reveal-delay",
            `${Math.min(index * 55, 385)}ms`,
          );

          observer.observe(element);
        });
      });
    }

    observeElements(siteRoot);
    document.documentElement.classList.add("has-scroll-reveals");

    const mutations = new MutationObserver((records) => {
      records.forEach((record) => {
        record.addedNodes.forEach((node) => {
          if (node instanceof Element) observeElements(node);
        });
      });
    });

    mutations.observe(siteRoot, { childList: true, subtree: true });

    return () => {
      mutations.disconnect();
      observer.disconnect();
      document.documentElement.classList.remove("has-scroll-reveals");
    };
  }, []);

  return null;
}
