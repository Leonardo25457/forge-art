"use client";

import { useEffect, useState } from "react";
import styles from "./Navbar.module.scss";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    const lenis = (
      window as Window & {
        __forgeLenis?: {
          stop: () => void;
          start: () => void;
        };
      }
    ).__forgeLenis;

    if (isOpen) {
      html.classList.add("is-menu-open");
      body.classList.add("is-menu-open");
      lenis?.stop();
    } else {
      html.classList.remove("is-menu-open");
      body.classList.remove("is-menu-open");
      lenis?.start();
    }

    window.dispatchEvent(new Event("forge:scroll-lock-change"));

    return () => {
      html.classList.remove("is-menu-open");
      body.classList.remove("is-menu-open");
      lenis?.start();
      window.dispatchEvent(new Event("forge:scroll-lock-change"));
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <header className={styles.navbar}>
      <div className={styles.inner}>
        <a href="#inicio" className={styles.logo} onClick={closeMenu}>
          FORGE <span>&</span> ART
        </a>

        <nav className={styles.desktopNav} aria-label="Navegación principal">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className={styles.desktopCta} href="#contacto">
          Cotizar <span>→</span>
        </a>

        <button
          type="button"
          className={`${styles.menuButton} ${isOpen ? styles.menuButtonHidden : ""}`}
          onClick={() => setIsOpen((current) => !current)}
          aria-label="Abrir menú"
          aria-expanded={isOpen}
        >
          <span />
          <span />
        </button>
      </div>

      <aside
        className={`${styles.mobilePanel} ${isOpen ? styles.mobilePanelOpen : ""}`}
        aria-hidden={!isOpen}
      >
        <div className={styles.mobileGlow} />

        <div className={styles.mobileShell}>
          <div className={styles.mobileTop}>
            <a href="#inicio" className={styles.mobileLogo} onClick={closeMenu}>
              FORGE <span>&</span> ART
            </a>

            <button
              type="button"
              className={styles.mobileClose}
              onClick={closeMenu}
              aria-label="Cerrar menú"
            >
              ×
            </button>
          </div>

          <div className={styles.mobileIntro}>
            <span>Menú</span>
            <p>Madera natural, acero trabajado y piezas hechas a medida.</p>
          </div>

          <nav className={styles.mobileNav} aria-label="Navegación móvil">
            {navItems.map((item, index) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>
                <small>{String(index + 1).padStart(2, "0")}</small>
                <strong>{item.label}</strong>
                <span>→</span>
              </a>
            ))}
          </nav>

          <div className={styles.mobileServices}>
            <span>Especialidades</span>

            <div>
              <small>Mesas</small>
              <small>Barandas</small>
              <small>Barras</small>
              <small>CNC</small>
            </div>
          </div>

          <a className={styles.mobileCta} href="#contacto" onClick={closeMenu}>
            Cotizar proyecto <span>→</span>
          </a>

          <div className={styles.mobileFooter}>
            <span>Diseño · Fabricación · Instalación</span>
            <span>Atelier de madera y metal</span>
          </div>
        </div>
      </aside>
    </header>
  );
}
