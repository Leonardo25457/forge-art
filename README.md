# Forge & Art

Landing page premium para vender servicios de diseño y fabricación de productos personalizados en madera y metal.

## Cambios aplicados

- Se eliminó el uso de Three.js y React Three Fiber.
- El hero ahora utiliza un video local (`public/videos/forge.mp4`) con marco visual premium.
- Se ajustó la proporción visual del hero para dar más equilibrio entre texto y contenido audiovisual.
- La sección de contacto ahora incluye un formulario que abre WhatsApp con el mensaje listo para enviar al número `930783601`.

## Ejecutar en local

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build
```

## Despliegue en Vercel

Vercel detecta Next.js automáticamente.

Configuración recomendada:

- Framework Preset: Next.js
- Build Command: `npm run build`
- Install Command: `npm install`

