"use client";

import { useEffect, useRef } from "react";
import styles from "./MouseLight.module.scss";

export default function MouseLight() {
  const lightRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const light = lightRef.current;

    if (!light) return;

    const handleMouseMove = (event: MouseEvent) => {
      light.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div ref={lightRef} className={styles.light} />;
}