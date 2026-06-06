"use client";

import styles from "./Process.module.scss";

const processSteps = [
  {
    number: "01",
    eyebrow: "Brief",
    title: "Entendemos la idea",
    text: "Recibimos medidas, fotos, referencias, uso del espacio y estilo deseado para definir el punto de partida.",
    tags: ["Medidas", "Fotos", "Referencias"],
  },
  {
    number: "02",
    eyebrow: "Concepto",
    title: "Aterrizamos la propuesta",
    text: "Definimos proporciones, materialidad, sistema constructivo, acabados y una dirección visual clara.",
    tags: ["Materiales", "Acabados", "Presupuesto"],
  },
  {
    number: "03",
    eyebrow: "Validación",
    title: "Revisamos antes de fabricar",
    text: "Alineamos detalles técnicos y visuales para evitar improvisaciones durante corte, soldadura o ensamblaje.",
    tags: ["Planos", "Moodboard", "Ajustes"],
  },
  {
    number: "04",
    eyebrow: "Taller",
    title: "Fabricamos con precisión",
    text: "Trabajamos corte, soldadura, ensamble, lijado, sellado, pintura y control de acabados.",
    tags: ["Corte", "Soldadura", "Acabado"],
  },
  {
    number: "05",
    eyebrow: "Entrega",
    title: "Instalamos y cerramos",
    text: "Coordinamos traslado, montaje, revisión final y recomendaciones de cuidado para mantener la pieza.",
    tags: ["Montaje", "Revisión", "Cuidado"],
  },
];

export default function Process() {
  return (
    <section id="proceso" className={styles.process}>
      <div className={styles.inner}>
        <div className={`${styles.header} reveal`}>
          <span className={styles.eyebrow}>Proceso</span>

          <div className={styles.intro}>
            <span className={styles.label}>De idea a pieza instalada</span>

            <h2>Una experiencia clara, visual y controlada desde el primer mensaje.</h2>

            <p>
              Cada proyecto avanza con una ruta ordenada: entendemos la necesidad,
              proponemos materialidad, validamos antes de fabricar y entregamos una pieza
              lista para ocupar su espacio.
            </p>
          </div>

          <div className={styles.visual}>
            <div className={styles.badge}>
              <strong>05</strong>
              <span>etapas para reducir dudas, errores y retrabajos.</span>
            </div>

            <div className={styles.visualGrid}>
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>

        <div className={`${styles.stats} reveal`}>
          <div>
            <strong>01</strong>
            <span>responsable de seguimiento</span>
          </div>

          <div>
            <strong>100%</strong>
            <span>proceso personalizado</span>
          </div>

          <div>
            <strong>360°</strong>
            <span>diseño, fabricación e instalación</span>
          </div>
        </div>

        <div className={styles.workflow}>
          <div className={styles.rail} aria-hidden="true" />

          {processSteps.map((step) => (
            <article key={step.number} className={`${styles.step} reveal`}>
              <div className={styles.stepTop}>
                <span className={styles.stepNumber}>{step.number}</span>
                <span className={styles.stepDot} />
              </div>

              <div className={styles.stepContent}>
                <span>{step.eyebrow}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>

                <div className={styles.tags}>
                  {step.tags.map((tag) => (
                    <small key={tag}>{tag}</small>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className={`${styles.note} reveal`}>
          <div>
            <span>Resultado</span>
            <h3>Menos improvisación. Más claridad. Mejor acabado final.</h3>
          </div>

          <p>
            La diferencia no está solo en fabricar: está en acompañar el proceso para
            que el cliente sepa qué recibirá, cómo se verá y qué necesita el espacio.
          </p>

          <a href="#contacto">Iniciar proyecto →</a>
        </div>
      </div>
    </section>
  );
}