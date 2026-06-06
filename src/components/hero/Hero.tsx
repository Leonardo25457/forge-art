import Button from "../ui/Button";
import styles from "./Hero.module.scss";

const categories = [
  "Mesas a medida",
  "Barras comerciales",
  "Escaleras & barandas",
  "Puertas premium",
];

export default function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.marquee}>
        <span>Madera maciza · Acero artesanal · Diseño a medida · Instalación profesional ·</span>
        <span>Madera maciza · Acero artesanal · Diseño a medida · Instalación profesional ·</span>
      </div>

      <div className={styles.inner}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>Atelier de madera y metal</span>

          <h1>
            <span>Piezas únicas</span>
            <span>para espacios</span>
            <span>con carácter.</span>
          </h1>

          <p>
            Diseñamos y fabricamos mobiliario, estructuras decorativas y elementos
            arquitectónicos combinando madera natural, acero trabajado y acabados
            de alto impacto visual.
          </p>

          <div className={styles.actions}>
            <Button href="#proyectos">Ver proyectos</Button>
            <Button href="#contacto" variant="secondary">
              Cotizar una pieza
            </Button>
          </div>
        </div>

        <div className={`${styles.visual} reveal`}>
          <div className={styles.videoShell}>
            <div className={styles.videoFrame}>
              <video
                src="/videos/forge.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Proceso artesanal de fabricación en madera y metal"
              />
              <div className={styles.videoOverlay} />
              <div className={styles.videoLabel}>
                <span>Proceso real</span>
                <strong>Madera · Metal · Acabado</strong>
              </div>
            </div>
          </div>

          <div className={styles.deliveryCard}>
            <strong>10-12</strong>
            <span>semanas estimadas para proyectos personalizados</span>
          </div>

          <div className={styles.materialCard}>
            <span>Materialidad</span>
            <strong>Madera natural + acero trabajado</strong>
          </div>
        </div>

        <div className={styles.categories}>
          {categories.map((category) => (
            <a key={category} href="#servicios">
              {category}
              <span>→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
