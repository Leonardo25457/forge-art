"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";

declare global {
  interface Window {
    __forgeLenis?: Lenis;
  }
}

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      wheelMultiplier: 0.85,
      touchMultiplier: 1.5,
    });

    window.__forgeLenis = lenis;

    const isScrollLocked = () => {
      return (
        document.documentElement.classList.contains("is-modal-open") ||
        document.body.classList.contains("is-modal-open") ||
        document.documentElement.classList.contains("is-menu-open") ||
        document.body.classList.contains("is-menu-open")
      );
    };

    const syncLenisState = () => {
      if (isScrollLocked()) {
        lenis.stop();
      } else {
        lenis.start();
      }
    };

    lenis.on("scroll", ScrollTrigger.update);

    const observer = new MutationObserver(syncLenisState);

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    window.addEventListener("forge:scroll-lock-change", syncLenisState);

    let rafId = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    syncLenisState();

    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
      window.removeEventListener("forge:scroll-lock-change", syncLenisState);

      lenis.destroy();

      if (window.__forgeLenis === lenis) {
        window.__forgeLenis = undefined;
      }
    };
  }, []);
}