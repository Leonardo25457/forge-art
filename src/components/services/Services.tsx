"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { services, type Service } from "@/data/services";
import styles from "./Services.module.scss";

const WHATSAPP_PHONE = "51930783601";
const AUTOPLAY_DELAY = 4200;

type ForgeWindow = Window & {
  __forgeLenis?: {
    stop: () => void;
    start: () => void;
  };
};

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);

  const carouselRef = useRef<HTMLDivElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const detailContentRef = useRef<HTMLDivElement | null>(null);

  const selectedIndex = useMemo(() => {
    if (!selectedService) return -1;
    return services.findIndex((service) => service.id === selectedService.id);
  }, [selectedService]);

  const resetModalScroll = () => {
    requestAnimationFrame(() => {
      dialogRef.current?.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });

      detailContentRef.current?.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });
    });
  };

  const scrollCarousel = (direction: "prev" | "next") => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const card = carousel.querySelector<HTMLElement>("[data-service-card]");
    if (!card) return;

    const stylesComputed = window.getComputedStyle(carousel);
    const gap = Number.parseFloat(
      stylesComputed.columnGap || stylesComputed.gap || "16",
    );

    const distance = card.offsetWidth + gap;

    const isAtEnd =
      carousel.scrollLeft + carousel.clientWidth >=
      carousel.scrollWidth - distance * 0.6;

    const isAtStart = carousel.scrollLeft <= 8;

    if (direction === "next" && isAtEnd) {
      carousel.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }

    if (direction === "prev" && isAtStart) {
      carousel.scrollTo({ left: carousel.scrollWidth, behavior: "smooth" });
      return;
    }

    carousel.scrollBy({
      left: direction === "next" ? distance : -distance,
      behavior: "smooth",
    });
  };

  const openWhatsApp = (service: Service) => {
    const message = encodeURIComponent(
      `Hola, quiero cotizar un proyecto de ${service.title}.\n\n` +
        `Servicio: ${service.title}\n` +
        `Tipo: ${service.kicker}\n\n` +
        `Me gustaría recibir más información sobre materiales, tiempos y presupuesto.`,
    );

    window.open(
      `https://wa.me/${WHATSAPP_PHONE}?text=${message}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const openNextService = () => {
    if (selectedIndex < 0) return;

    const nextIndex =
      selectedIndex === services.length - 1 ? 0 : selectedIndex + 1;

    setSelectedService(services[nextIndex]);
  };

  const openPrevService = () => {
    if (selectedIndex < 0) return;

    const prevIndex =
      selectedIndex === 0 ? services.length - 1 : selectedIndex - 1;

    setSelectedService(services[prevIndex]);
  };

  useEffect(() => {
    if (selectedService || isCarouselPaused) return;

    const interval = window.setInterval(() => {
      scrollCarousel("next");
    }, AUTOPLAY_DELAY);

    return () => window.clearInterval(interval);
  }, [selectedService, isCarouselPaused]);

  useEffect(() => {
    if (!selectedService) return;

    resetModalScroll();
  }, [selectedService?.id]);

  useEffect(() => {
    if (!selectedService) return;

    const html = document.documentElement;
    const body = document.body;
    const forgeWindow = window as ForgeWindow;

    const originalHtmlOverflow = html.style.overflow;
    const originalBodyOverflow = body.style.overflow;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedService(null);
      }

      if (event.key === "ArrowRight") {
        openNextService();
      }

      if (event.key === "ArrowLeft") {
        openPrevService();
      }
    };

    html.classList.add("is-modal-open");
    body.classList.add("is-modal-open");

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";

    forgeWindow.__forgeLenis?.stop();
    window.dispatchEvent(new Event("forge:scroll-lock-change"));

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      html.classList.remove("is-modal-open");
      body.classList.remove("is-modal-open");

      html.style.overflow = originalHtmlOverflow;
      body.style.overflow = originalBodyOverflow;

      forgeWindow.__forgeLenis?.start();
      window.dispatchEvent(new Event("forge:scroll-lock-change"));

      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedService, selectedIndex]);

  return (
    <section id="servicios" className={styles.services}>
      <div className={styles.inner}>
        <div className={`${styles.header} reveal`}>
          <span>Servicios</span>

          <div>
            <h2>Diseñamos piezas que resuelven espacios.</h2>

            <p>
              Creamos mobiliario, estructuras, detalles arquitectónicos y
              equipamiento comercial combinando madera natural, acero trabajado,
              precisión técnica e instalación final.
            </p>
          </div>

          <div className={styles.controls} aria-label="Controles del carrusel">
            <button
              type="button"
              onClick={() => scrollCarousel("prev")}
              aria-label="Servicio anterior"
            >
              ←
            </button>

            <button
              type="button"
              onClick={() => scrollCarousel("next")}
              aria-label="Servicio siguiente"
            >
              →
            </button>
          </div>
        </div>

        <div
          ref={carouselRef}
          className={styles.carousel}
          onMouseEnter={() => setIsCarouselPaused(true)}
          onMouseLeave={() => setIsCarouselPaused(false)}
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.id}
                data-service-card
                className={`${styles.card} reveal`}
              >
                <div className={styles.imageBox}>
                  <img
                    src={`${service.image}?auto=format&fit=crop&w=1100&q=82`}
                    alt={service.title}
                  />
                </div>

                <div className={styles.cardOverlay} />

                <div className={styles.cardTop}>
                  <div className={styles.icon}>
                    <Icon />
                  </div>
                </div>

                <div className={styles.cardContent}>
                  <span>{service.kicker}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>

                  <div className={styles.cardActions}>
                    <button
                      type="button"
                      onClick={() => setSelectedService(service)}
                    >
                      Ver más detalles
                    </button>

                    <button type="button" onClick={() => openWhatsApp(service)}>
                      Cotizar
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {selectedService && (
        <div className={styles.modal} role="dialog" aria-modal="true">
          <button
            type="button"
            className={styles.backdrop}
            onClick={() => setSelectedService(null)}
            aria-label="Cerrar detalle"
          />

          <div
            key={selectedService.id}
            ref={dialogRef}
            className={styles.dialog}
            data-service-dialog="true"
            onWheelCapture={(event) => event.stopPropagation()}
            onTouchMoveCapture={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className={styles.close}
              onClick={() => setSelectedService(null)}
              aria-label="Cerrar"
            >
              ×
            </button>

            <div className={styles.detailMedia}>
              <img
                src={`${selectedService.image}?auto=format&fit=crop&w=1400&q=86`}
                alt={selectedService.title}
              />

              <div className={styles.detailBadge}>
                <span>Servicio</span>
                <strong>{String(selectedIndex + 1).padStart(2, "0")}</strong>
              </div>
            </div>

            <div ref={detailContentRef} className={styles.detailContent}>
              <span className={styles.detailKicker}>
                {selectedService.kicker}
              </span>

              <h3>{selectedService.title}</h3>

              <p className={styles.detailSummary}>{selectedService.summary}</p>

              <div className={styles.detailGallery}>
                {selectedService.gallery.map((image, index) => (
                  <img
                    key={image}
                    src={`${image}?auto=format&fit=crop&w=520&q=76`}
                    alt={`${selectedService.title} referencia ${index + 1}`}
                  />
                ))}
              </div>

              <div className={styles.detailGrid}>
                <div>
                  <h4>Ideal para</h4>

                  <ul>
                    {selectedService.idealFor.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4>Incluye</h4>

                  <ul>
                    {selectedService.includes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className={styles.deliverables}>
                <h4>Entregables</h4>

                <div>
                  {selectedService.deliverables.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>

              <div className={styles.detailFooter}>
                <p>
                  <strong>Tiempo estimado:</strong> {selectedService.estimate}
                </p>

                <button
                  type="button"
                  onClick={() => openWhatsApp(selectedService)}
                >
                  Cotizar este servicio
                </button>
              </div>

              <div className={styles.modalNav}>
                <button type="button" onClick={openPrevService}>
                  ← Anterior
                </button>

                <button type="button" onClick={openNextService}>
                  Siguiente →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
