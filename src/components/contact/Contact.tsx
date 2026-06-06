"use client";

import {
  FormEvent,
  TouchEvent,
  WheelEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./Contact.module.scss";

const whatsappNumber = "51930783601";

const checklist = [
  "Medidas o fotos del espacio",
  "Tipo de pieza que necesitas",
  "Material preferido: madera, metal o ambos",
  "Fecha estimada de instalación",
];

const projectOptions = [
  "Mueble a medida",
  "Mesa en madera y metal",
  "Barra comercial",
  "Escalera o baranda",
  "Puerta o estructura decorativa",
  "Otro proyecto",
];

type ForgeWindow = Window & {
  __forgeLenis?: {
    stop: () => void;
    start: () => void;
  };
};

export default function Contact() {
  const [isProjectOpen, setIsProjectOpen] = useState(false);
  const projectSelectRef = useRef<HTMLDivElement | null>(null);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    projectType: "Mueble a medida",
    measurements: "",
    message: "",
  });

  const shouldKeepLenisStopped = () => {
    return (
      document.documentElement.classList.contains("is-modal-open") ||
      document.body.classList.contains("is-modal-open") ||
      document.documentElement.classList.contains("is-menu-open") ||
      document.body.classList.contains("is-menu-open")
    );
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        projectSelectRef.current &&
        !projectSelectRef.current.contains(event.target as Node)
      ) {
        setIsProjectOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsProjectOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    const forgeWindow = window as ForgeWindow;

    if (isProjectOpen) {
      forgeWindow.__forgeLenis?.stop();
      window.dispatchEvent(new Event("forge:scroll-lock-change"));
      return;
    }

    if (!shouldKeepLenisStopped()) {
      forgeWindow.__forgeLenis?.start();
    }

    window.dispatchEvent(new Event("forge:scroll-lock-change"));

    return () => {
      if (!shouldKeepLenisStopped()) {
        forgeWindow.__forgeLenis?.start();
      }

      window.dispatchEvent(new Event("forge:scroll-lock-change"));
    };
  }, [isProjectOpen]);

  const handleDropdownWheel = (event: WheelEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  const handleDropdownTouchMove = (event: TouchEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const text = [
      "Hola, quiero cotizar un proyecto en madera y metal.",
      "",
      `Nombre: ${form.name || "No indicado"}`,
      `Teléfono: ${form.phone || "No indicado"}`,
      `Tipo de proyecto: ${form.projectType}`,
      `Medidas / espacio: ${form.measurements || "No indicado"}`,
      "",
      `Descripción: ${form.message || "No indicada"}`,
    ].join("\n");

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section id="contacto" className={styles.contact}>
      <div className={styles.inner}>
        <div className={`${styles.content} reveal`}>
          <span>Solicita una cotización</span>

          <h2>Convirtamos tu idea en una pieza fabricable.</h2>

          <p>
            Para cotizar con precisión, cuéntanos qué pieza necesitas, las
            medidas aproximadas y el tipo de acabado que imaginas. El formulario
            abrirá WhatsApp con toda la información lista para enviar.
          </p>

          <div className={styles.briefBox}>
            <h3>Para una mejor propuesta</h3>

            <ul>
              {checklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <form className={`${styles.form} reveal`} onSubmit={handleSubmit}>
          <div className={styles.formHeader}>
            <span>Brief express</span>

            <h3>Cotiza por WhatsApp</h3>

            <p>
              Completa los datos y envíanos tu solicitud directamente al 930 783
              601.
            </p>
          </div>

          <div className={styles.gridTwo}>
            <label>
              Nombre
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={(event) =>
                  setForm({ ...form, name: event.target.value })
                }
                placeholder="Ej. Leonardo"
                autoComplete="name"
              />
            </label>

            <label>
              Celular
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={(event) =>
                  setForm({ ...form, phone: event.target.value })
                }
                placeholder="Ej. 930783601"
                autoComplete="tel"
              />
            </label>
          </div>

          <div
            className={`${styles.fieldFull} ${
              isProjectOpen ? styles.fieldFullOpen : ""
            }`}
          >
            <span className={styles.fieldLabel}>Tipo de proyecto</span>

            <input type="hidden" name="projectType" value={form.projectType} />

            <div ref={projectSelectRef} className={styles.customSelect}>
              <button
                type="button"
                className={`${styles.selectButton} ${
                  isProjectOpen ? styles.selectButtonOpen : ""
                }`}
                onClick={() => setIsProjectOpen((current) => !current)}
                aria-haspopup="listbox"
                aria-expanded={isProjectOpen}
              >
                <span>{form.projectType || "Selecciona una opción"}</span>

                <span className={styles.selectIcon} aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>

              {isProjectOpen && (
                <div
                  className={styles.selectDropdown}
                  role="listbox"
                  onWheelCapture={handleDropdownWheel}
                  onTouchMoveCapture={handleDropdownTouchMove}
                >
                  {projectOptions.map((option) => {
                    const isActive = form.projectType === option;

                    return (
                      <button
                        key={option}
                        type="button"
                        role="option"
                        aria-selected={isActive}
                        className={`${styles.selectOption} ${
                          isActive ? styles.selectOptionActive : ""
                        }`}
                        onClick={() => {
                          setForm((current) => ({
                            ...current,
                            projectType: option,
                          }));

                          setIsProjectOpen(false);
                        }}
                      >
                        <strong>{option}</strong>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          <label>
            Medidas o espacio
            <input
              type="text"
              name="measurements"
              value={form.measurements}
              onChange={(event) =>
                setForm({ ...form, measurements: event.target.value })
              }
              placeholder="Ej. 2.40 m x 0.90 m / sala / local comercial"
            />
          </label>

          <label>
            Describe tu idea
            <textarea
              name="message"
              value={form.message}
              onChange={(event) =>
                setForm({ ...form, message: event.target.value })
              }
              placeholder="Cuéntanos el estilo, material, acabado, uso y fecha aproximada de instalación."
              rows={5}
            />
          </label>

          <button type="submit" className={styles.submitButton}>
            Enviar datos por WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}