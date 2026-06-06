"use client";

import CountUp from "react-countup";
import styles from "./Stats.module.scss";

const stats = [
  {
    value: 3,
    suffix: " áreas",
    label: "Diseño, fabricación e instalación",
  },
  {
    value: 5,
    suffix: " etapas",
    label: "Proceso claro para cotizar y producir",
  },
  {
    value: 2,
    suffix: " materiales",
    label: "Madera y metal como sello visual",
  },
];

export default function Stats() {
  return (
    <section className={styles.stats} aria-label="Resumen de propuesta de valor">
      <div className={styles.inner}>
        {stats.map((stat) => (
          <article key={stat.label} className={`${styles.item} reveal`}>
            <h3>
              <CountUp end={stat.value} duration={2.2} enableScrollSpy />
              <span>{stat.suffix}</span>
            </h3>

            <p>{stat.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
