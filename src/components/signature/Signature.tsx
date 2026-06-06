import { productFamilies } from "@/data/services";
import styles from "./Signature.module.scss";

const pillars = [
  {
    value: "01",
    title: "Hecho a medida",
    text: "Cada pieza nace desde el espacio real: medidas, uso, materialidad, proporción y estilo del cliente.",
  },
  {
    value: "02",
    title: "Madera + acero",
    text: "Combinamos calidez natural y resistencia estructural para lograr piezas duraderas con presencia arquitectónica.",
  },
  {
    value: "03",
    title: "Acabado premium",
    text: "Cuidamos textura, uniones, pintura, sellado, cantos y detalles visibles para que el resultado se sienta de alta gama.",
  },
  {
    value: "04",
    title: "Acompañamiento",
    text: "Te guiamos desde la idea inicial hasta la instalación, con comunicación clara y decisiones visuales antes de fabricar.",
  },
];

export default function Signature() {
  return (
    <section className={styles.signature} aria-label="Diferenciales de fabricación">
      <div className={styles.inner}>
        <div className={`${styles.editorial} reveal`}>
          <span>Fabricación con carácter</span>
          <h2>Muebles y estructuras que parecen diseñadas para una revista, pero pensadas para uso real.</h2>
          <p>
            La propuesta toma la estética cálida de la madera artesanal y la fuerza del metal para vender un servicio de fabricación personalizado, confiable y visualmente memorable.
          </p>
        </div>

        <div className={styles.pillars}>
          {pillars.map((pillar) => (
            <article key={pillar.value} className={`${styles.pillar} reveal`}>
              <span>{pillar.value}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>

        <div className={`${styles.catalog} reveal`}>
          <div>
            <span>Productos solicitados</span>
            <h3>Desde una mesa única hasta equipamiento completo para un local.</h3>
          </div>

          <div className={styles.familyGrid}>
            {productFamilies.map((family) => (
              <a key={family} href="#contacto">
                {family}
                <span>↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
