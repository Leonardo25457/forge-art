"use client";

import styles from "./PortfolioCard.module.scss";

interface PortfolioCardProps {
  title: string;
  category: string;
  material: string;
  image: string;
  index: number;
}

export default function PortfolioCard({
  title,
  category,
  material,
  image,
  index,
}: PortfolioCardProps) {
  return (
    <article
      className={`${styles.card} reveal ${
        index === 0 || index === 3 ? styles.large : ""
      }`}
    >
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} loading="lazy" />
      </div>

      <div className={styles.overlay} />

      <div className={styles.number}>{String(index + 1).padStart(2, "0")}</div>

      <a
        className={styles.cta}
        href="#contacto"
        aria-label={`Cotizar un proyecto similar a ${title}`}
      >
        Cotizar similar
      </a>

      <div className={styles.content}>
        <span className={styles.category}>{category}</span>
        <h3>{title}</h3>
        <p>{material}</p>
      </div>
    </article>
  );
}