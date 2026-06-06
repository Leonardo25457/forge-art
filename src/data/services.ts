import {
  FiBox,
  FiCpu,
  FiHome,
  FiLayers,
  FiPenTool,
  FiTruck,
} from "react-icons/fi";
import type { IconType } from "react-icons";

export type Service = {
  id: number;
  slug: string;
  title: string;
  kicker: string;
  description: string;
  summary: string;
  image: string;
  gallery: string[];
  idealFor: string[];
  includes: string[];
  deliverables: string[];
  estimate: string;
  icon: IconType;
};

export const services: Service[] = [
  {
    id: 1,
    slug: "mobiliario-madera-metal",
    title: "Mobiliario en madera y metal",
    kicker: "Piezas a medida",
    description:
      "Mesas, consolas, barras, escritorios, bancas y piezas especiales con proporciones premium, estructura sólida y acabados pensados para durar.",
    summary:
      "Diseñamos piezas funcionales y visualmente protagonistas para hogares, oficinas, terrazas, restaurantes y espacios comerciales.",
    image: "https://images.unsplash.com/photo-1616627561950-9f746e330187",
    gallery: [
      "https://images.unsplash.com/photo-1618220179428-22790b461013",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
    ],
    idealFor: [
      "Mesas de comedor",
      "Barras para cocina o negocio",
      "Consolas decorativas",
      "Escritorios premium",
      "Bancas y mobiliario exterior",
    ],
    includes: [
      "Revisión de medidas y referencias",
      "Propuesta de materialidad",
      "Fabricación en madera y acero",
      "Acabado, sellado y protección",
      "Coordinación de entrega",
    ],
    deliverables: [
      "Propuesta visual",
      "Detalle de materiales",
      "Tiempo estimado de fabricación",
      "Presupuesto por pieza",
    ],
    estimate: "Desde 3 a 8 semanas según complejidad.",
    icon: FiBox,
  },
  {
    id: 2,
    slug: "escaleras-barandas-accesos",
    title: "Escaleras, barandas y accesos",
    kicker: "Arquitectura interior",
    description:
      "Elementos arquitectónicos que combinan seguridad, estructura y presencia visual para proyectos residenciales, comerciales o de remodelación.",
    summary:
      "Creamos soluciones estructurales con carácter: barandas metálicas, escaleras, pasamanos, cerramientos y accesos especiales.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    gallery: [
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e",
    ],
    idealFor: [
      "Escaleras interiores",
      "Barandas metálicas",
      "Pasamanos",
      "Accesos principales",
      "Divisiones arquitectónicas",
    ],
    includes: [
      "Toma de medidas",
      "Evaluación del espacio",
      "Definición de estructura",
      "Fabricación metálica",
      "Montaje e instalación",
    ],
    deliverables: [
      "Concepto técnico",
      "Propuesta de acabado",
      "Cronograma de fabricación",
      "Recomendaciones de instalación",
    ],
    estimate: "Desde 4 a 10 semanas según obra.",
    icon: FiLayers,
  },
  {
    id: 3,
    slug: "diseno-tecnico-visualizacion",
    title: "Diseño técnico y visualización",
    kicker: "Antes de fabricar",
    description:
      "Levantamiento, propuesta de concepto, planos de fabricación y revisión visual antes de iniciar producción.",
    summary:
      "Ayudamos a transformar una idea suelta en una pieza clara, medible y fabricable, reduciendo errores antes de cortar o soldar.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
    gallery: [
      "https://images.unsplash.com/photo-1581091870622-7c1a42a737b0",
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc",
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789",
    ],
    idealFor: [
      "Clientes con una idea inicial",
      "Proyectos comerciales",
      "Muebles a medida",
      "Remodelaciones",
      "Piezas con medidas especiales",
    ],
    includes: [
      "Brief del proyecto",
      "Análisis de referencias",
      "Propuesta de proporciones",
      "Selección de materiales",
      "Revisión visual previa",
    ],
    deliverables: [
      "Moodboard",
      "Propuesta conceptual",
      "Detalle funcional",
      "Base para cotización",
    ],
    estimate: "Desde 3 a 7 días para propuesta inicial.",
    icon: FiPenTool,
  },
  {
    id: 4,
    slug: "corte-cnc-detalles",
    title: "Corte CNC y detalles personalizados",
    kicker: "Precisión decorativa",
    description:
      "Patrones, piezas seriadas, placas decorativas, letras corpóreas y detalles personalizados con precisión para acabados de alto impacto.",
    summary:
      "Ideal para marcas, negocios y proyectos que necesitan piezas repetibles, detalles personalizados o elementos decorativos precisos.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122",
    gallery: [
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758",
      "https://images.unsplash.com/photo-1581092916357-5896ebc48073",
      "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0",
    ],
    idealFor: [
      "Letras corpóreas",
      "Paneles decorativos",
      "Piezas seriadas",
      "Placas metálicas",
      "Detalles para mobiliario",
    ],
    includes: [
      "Revisión de diseño",
      "Preparación de archivo",
      "Corte o fabricación",
      "Acabado base",
      "Entrega de piezas",
    ],
    deliverables: [
      "Archivo validado",
      "Detalle de medidas",
      "Muestra o referencia",
      "Piezas listas para instalación",
    ],
    estimate: "Desde 5 a 15 días según volumen.",
    icon: FiCpu,
  },
  {
    id: 5,
    slug: "equipamiento-comercial",
    title: "Equipamiento comercial",
    kicker: "Retail y negocios",
    description:
      "Mostradores, góndolas, mobiliario para tiendas, restaurantes, oficinas, hoteles y espacios de experiencia.",
    summary:
      "Diseñamos piezas que no solo decoran: ordenan, venden, reciben clientes y elevan la percepción del negocio.",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b",
    gallery: [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
      "https://images.unsplash.com/photo-1604328698692-f76ea9498e76",
    ],
    idealFor: [
      "Restaurantes",
      "Cafeterías",
      "Tiendas",
      "Oficinas",
      "Showrooms",
    ],
    includes: [
      "Análisis del espacio",
      "Propuesta funcional",
      "Diseño de mobiliario",
      "Fabricación",
      "Montaje final",
    ],
    deliverables: [
      "Distribución sugerida",
      "Listado de piezas",
      "Materialidad",
      "Presupuesto por etapa",
    ],
    estimate: "Desde 5 a 12 semanas según cantidad de piezas.",
    icon: FiHome,
  },
  {
    id: 6,
    slug: "instalacion-entrega-final",
    title: "Instalación y entrega final",
    kicker: "Cierre profesional",
    description:
      "Coordinación de medidas, traslado, montaje en obra, revisión de acabados y acompañamiento post-entrega.",
    summary:
      "Cuidamos que la pieza llegue, se instale y quede funcionando correctamente en el espacio final.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837",
    gallery: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd",
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789",
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122",
    ],
    idealFor: [
      "Piezas grandes",
      "Mobiliario comercial",
      "Escaleras",
      "Barandas",
      "Instalaciones en obra",
    ],
    includes: [
      "Coordinación previa",
      "Traslado de piezas",
      "Montaje",
      "Revisión final",
      "Recomendaciones de mantenimiento",
    ],
    deliverables: [
      "Entrega instalada",
      "Revisión de acabado",
      "Indicaciones de cuidado",
      "Cierre del proyecto",
    ],
    estimate: "Según ubicación, volumen y complejidad.",
    icon: FiTruck,
  },
];

export const productFamilies = [
  "Mesas de comedor",
  "Barras y counters",
  "Escaleras metálicas",
  "Barandas premium",
  "Puertas pivotantes",
  "Estanterías modulares",
  "Mobiliario comercial",
  "Detalles CNC",
];