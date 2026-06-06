"use client";

import { projects } from "@/data/projects";
import PortfolioCard from "./PortfolioCard";
import styles from "./Portfolio.module.scss";

export default function Portfolio() {
  return (
    <section id="proyectos" className={styles.portfolio}>
      <div className={styles.inner}>
        <div className={`${styles.header} reveal`}>
          <span>Portfolio</span>

          <div>
            <h2>Proyectos que venden por imagen, material y detalle.</h2>
            <p>
              La sección se plantea como galería editorial: grandes imágenes, categorías claras y materiales visibles para que el visitante imagine su propio proyecto.
            </p>
          </div>
        </div>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <PortfolioCard
              key={project.id}
              title={project.title}
              category={project.category}
              material={project.material}
              image={project.image}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
