import styles from "./Footer.module.scss";

const links = [
  { label: "Proyectos", href: "#proyectos" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Contacto", href: "#contacto" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div>
          <a href="#inicio" className={styles.logo}>
            FORGE<span>&</span>ART
          </a>
          <p className={styles.claim}>Madera, metal y fabricación a medida para espacios con carácter.</p>
        </div>

        <nav className={styles.links} aria-label="Enlaces del footer">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        {/* <div className={styles.social}>
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
          <a href="#">Behance</a>
        </div> */}
      </div>

      <div className={styles.bottom}>
        <span>© 2026 Forge & Art. Todos los derechos reservados.</span>
        <span>Diseño artesanal · Precisión técnica · Instalación profesional</span>
      </div>
    </footer>
  );
}
