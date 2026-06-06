"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useReveal() {
  useEffect(() => {
    const elements = gsap.utils.toArray<HTMLElement>(".reveal");

    elements.forEach((element) => {
      gsap.set(element, {
        opacity: 1,
        y: 0,
      });

      gsap.from(element, {
        y: 60,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 88%",
          once: true,
        },
      });
    });

    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
}