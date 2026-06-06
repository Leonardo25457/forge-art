"use client";

import { useEffect, useRef } from "react";
import styles from "./Cursor.module.scss";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const followerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    if (!cursor || !follower) return;

    let mouseX = -100;
    let mouseY = -100;
    let followerX = -100;
    let followerY = -100;
    let rafId = 0;

    const moveCursor = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;

      cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    const animateFollower = () => {
      followerX += (mouseX - followerX) * 0.28;
      followerY += (mouseY - followerY) * 0.28;

      follower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0)`;

      rafId = requestAnimationFrame(animateFollower);
    };

    const addHover = () => {
      document.body.classList.add("is-cursor-hover");
    };

    const removeHover = () => {
      document.body.classList.remove("is-cursor-hover");
    };

    const interactiveElements = document.querySelectorAll(
      "a, button, input, textarea, select"
    );

    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", addHover);
      element.addEventListener("mouseleave", removeHover);
    });

    window.addEventListener("mousemove", moveCursor);
    rafId = requestAnimationFrame(animateFollower);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      cancelAnimationFrame(rafId);

      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", addHover);
        element.removeEventListener("mouseleave", removeHover);
      });

      document.body.classList.remove("is-cursor-hover");
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className={styles.cursor} />
      <div ref={followerRef} className={styles.follower} />
    </>
  );
}