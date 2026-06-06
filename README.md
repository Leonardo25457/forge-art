# Forge & Art — Landing Page Premium para Atelier de Madera y Metal

Forge & Art es una landing page profesional de estilo premium desarrollada para presentar servicios de diseño, fabricación e instalación de piezas personalizadas en madera y metal. El enfoque visual combina una estética oscura, editorial y sofisticada con interacciones modernas, animaciones suaves y una experiencia responsive pensada para transmitir confianza, carácter artesanal y alto valor comercial.

El proyecto está orientado a negocios o talleres que fabrican mobiliario a medida, estructuras metálicas, barras comerciales, escaleras, barandas, puertas decorativas, piezas CNC y equipamiento personalizado para espacios residenciales o comerciales.

## Demo

Próximamente en Vercel:

```txt
https://forge-art.vercel.app/
```

## Objetivo del proyecto

El objetivo principal fue construir una página web con apariencia de agencia profesional, capaz de comunicar de forma clara y visualmente impactante los servicios de un atelier especializado en madera y metal.

La página busca:

* Presentar una marca con estética premium.
* Mostrar servicios de forma visual e interactiva.
* Guiar al usuario por el proceso de trabajo.
* Exponer proyectos con imagen, materialidad y detalle.
* Facilitar solicitudes de cotización por WhatsApp.
* Mantener una experiencia fluida en desktop, tablet y mobile.
* Preparar el proyecto para despliegue en Vercel.

## Tecnologías utilizadas

El proyecto fue desarrollado con un stack moderno basado en Next.js, React y TypeScript.

### Frontend

* **Next.js 16** — Framework principal para la aplicación.
* **React 19** — Construcción de componentes interactivos.
* **TypeScript** — Tipado estático y mayor mantenibilidad.
* **Sass / SCSS Modules** — Estilos modulares, escalables y organizados.
* **GSAP** — Animaciones de entrada y revelado por scroll.
* **Lenis** — Scroll suave con experiencia fluida tipo editorial.
* **Framer Motion** — Base para animaciones declarativas e interacciones futuras.
* **React Icons** — Iconografía ligera para servicios y elementos visuales.
* **Vercel** — Plataforma recomendada para despliegue.

## Enfoque visual

La web fue diseñada con una dirección visual inspirada en sitios de alto nivel editorial y páginas reconocidas por Awwwards. El estilo combina:

* Fondo oscuro premium.
* Tipografía grande y contundente.
* Uso de dorado como color de acento.
* Imágenes con tratamiento visual cinematográfico.
* Bordes finos, overlays y transparencias.
* Diseño modular por secciones.
* Composición asimétrica para dar sensación de marca sofisticada.
* Microinteracciones en botones, cards y elementos navegables.

## Secciones principales

### 1. Navbar responsive

La navegación cuenta con versión desktop y mobile.

En desktop se muestra una barra de navegación central con enlaces a las secciones principales y un botón de cotización.

En mobile se implementó un menú hamburguesa personalizado con diseño tipo panel premium. Este menú permite navegar entre:

* Inicio
* Proyectos
* Servicios
* Proceso
* Contacto
* Cotizar proyecto

Además, el menú mobile bloquea correctamente el scroll de fondo y mantiene una experiencia ordenada al navegar entre secciones.

### 2. Hero principal

El Hero presenta el mensaje central de la marca:

```txt
Piezas únicas para espacios con carácter.
```

Se trabajó una composición visual con:

* Título de alto impacto.
* Texto comercial descriptivo.
* Botones de acción.
* Video o imagen de proceso en el lado visual.
* Tarjetas flotantes con datos de valor.
* Tratamiento oscuro, overlays y bordes premium.

Inicialmente se evaluó el uso de Three.js, pero se decidió priorizar un diseño más limpio y performante usando video, imagen, composición visual y animaciones CSS/GSAP.

### 3. Servicios con carrusel interactivo

La sección de servicios fue transformada en un carrusel horizontal premium. Cada servicio se muestra como una card visual con imagen, categoría, descripción y acciones.

Servicios incluidos:

* Mobiliario en madera y metal
* Escaleras, barandas y accesos
* Diseño técnico y visualización
* Corte CNC y detalles personalizados
* Equipamiento comercial
* Instalación y entrega final

Cada card permite:

* Ver más detalles
* Cotizar por WhatsApp

### 4. Modal de detalle de servicio

Cada servicio cuenta con un modal ampliado que muestra información más completa:

* Imagen principal
* Galería de referencia
* Descripción del servicio
* Usos ideales
* Qué incluye
* Entregables
* Tiempo estimado
* Botón de cotización por WhatsApp
* Navegación entre servicios con “Anterior” y “Siguiente”

Se corrigió el comportamiento del scroll interno para que el modal funcione correctamente en desktop y mobile, evitando que el fondo se mueva mientras el usuario interactúa con el contenido.

### 5. Proyectos

La sección de proyectos presenta una galería editorial con imágenes grandes y textos superpuestos.

Se ajustó el efecto hover para eliminar movimientos laterales o rotaciones excesivas, conservando únicamente el efecto visual más elegante:

* Profundidad de imagen
* Zoom sutil
* Overlay oscuro
* Texto superpuesto
* CTA para cotizar un proyecto similar

En mobile, el efecto visual queda activo por defecto para mantener el impacto sin depender del hover.

### 6. Proceso

La sección de proceso explica de forma clara cómo avanza un proyecto desde la idea inicial hasta la instalación final.

Etapas del proceso:

1. Brief inicial
2. Concepto
3. Validación
4. Fabricación
5. Entrega

La sección fue rediseñada para verse más impactante, con una composición visual más editorial, cards de etapa, numeración grande, métricas y un cierre comercial orientado a generar confianza.

### 7. Formulario de contacto con WhatsApp

La sección de contacto permite generar una cotización directa por WhatsApp.

El formulario recopila:

* Nombre
* Celular
* Tipo de proyecto
* Medidas o espacio
* Descripción de la idea

Al enviar, se abre WhatsApp con un mensaje prellenado listo para enviar al número configurado:

```txt
930 783 601
```

También se implementó un selector personalizado para el tipo de proyecto, reemplazando el select nativo del navegador por un componente visual premium acorde al diseño general.

## Animaciones e interacciones

El proyecto utiliza animaciones suaves y controladas para reforzar la experiencia premium sin afectar la usabilidad.

### GSAP

Se usa GSAP con ScrollTrigger para animaciones de revelado al hacer scroll. Los elementos con clase `reveal` aparecen de forma progresiva con movimiento vertical y opacidad.

### Lenis

Lenis se utiliza para ofrecer scroll suave en toda la página. También se implementó lógica para pausar Lenis cuando:

* Se abre el menú mobile.
* Se abre un modal.
* Se interactúa con elementos que requieren scroll interno.

Esto evita conflictos entre el scroll global y los scrolls internos de modales o selectores.

### CSS / SCSS

Las microinteracciones se manejan con transiciones CSS:

* Hover en cards.
* Zoom de imágenes.
* Botones con cambio de fondo.
* Dropdown personalizado.
* Menú mobile animado.
* Modal con overlay y composición responsive.

## Arquitectura del proyecto

El proyecto está organizado por componentes, manteniendo una estructura clara, escalable y fácil de mantener.

```txt
src/
├── app/
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── Navbar/
│   ├── Hero/
│   ├── Portfolio/
│   ├── Services/
│   ├── Process/
│   ├── Contact/
│   └── Footer/
│
├── data/
│   ├── services.ts
│   └── site.ts
│
├── hooks/
│   ├── useLenis.ts
│   └── useReveal.ts
│
└── styles/
    ├── abstracts/
    │   ├── variables.scss
    │   └── mixins.scss
    ├── base/
    │   ├── reset.scss
    │   ├── typography.scss
    │   └── globals.scss
    └── globals.scss
```

## Componentes principales

### `Navbar`

Gestiona la navegación principal, el menú responsive y el bloqueo del scroll cuando el menú mobile está abierto.

### `Hero`

Presenta el mensaje principal de marca y la composición visual inicial.

### `Services`

Renderiza el carrusel de servicios, el modal de detalle y la integración con WhatsApp.

### `Portfolio`

Muestra proyectos con estilo editorial, imagen protagonista y CTA.

### `Process`

Explica el flujo de trabajo desde la solicitud hasta la entrega final.

### `Contact`

Contiene el formulario de cotización, el selector personalizado y la generación del mensaje automático para WhatsApp.

### `Footer`

Cierre visual de la landing con información de marca y navegación complementaria.

## Instalación local

Clonar el repositorio:

```bash
git clone URL_REPOSITORIO
cd forge-art
```

Instalar dependencias:

```bash
npm install
```

Ejecutar en desarrollo:

```bash
npm run dev
```

Abrir en el navegador:

```txt
http://localhost:3000
```

## Build de producción

Generar build:

```bash
npm run build
```

Ejecutar build localmente:

```bash
npm run start
```

## Scripts disponibles

```json
{
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "eslint"
}
```

## Despliegue en Vercel

El proyecto está preparado para desplegarse en Vercel como aplicación Next.js.

Configuración recomendada:

```txt
Framework Preset: Next.js
Install Command: npm install
Build Command: npm run build
Output Directory: dejar vacío
```

Cada push a la rama principal puede generar un nuevo despliegue automático si el repositorio está conectado a Vercel.

## Personalización

El proyecto puede adaptarse fácilmente modificando:

* Textos comerciales.
* Imágenes de servicios.
* Proyectos destacados.
* Número de WhatsApp.
* Colores principales.
* Servicios disponibles.
* Secciones visibles.
* Animaciones de entrada.

El número de WhatsApp se encuentra configurado en los componentes donde se genera la cotización.

## Estado del proyecto

El proyecto cuenta actualmente con:

* Diseño premium responsive.
* Navbar desktop y mobile.
* Hero visual con enfoque comercial.
* Carrusel de servicios.
* Modales de detalle por servicio.
* Galería de proyectos.
* Proceso visual.
* Formulario de cotización por WhatsApp.
* Scroll suave con Lenis.
* Animaciones con GSAP.
* Arquitectura modular con componentes reutilizables.
* Preparación para despliegue en Vercel.

## Enfoque final

Forge & Art no es solo una landing page informativa. Es una experiencia visual pensada para transmitir calidad, oficio, diseño y confianza. Su estructura está orientada a convertir visitantes en potenciales clientes mediante una presentación clara de servicios, una narrativa visual fuerte y una ruta directa hacia la cotización por WhatsApp.
