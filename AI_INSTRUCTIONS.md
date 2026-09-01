# AI Operational Guidelines - Portfolio Ezequiel Martínez

## Contexto del Proyecto
Estás trabajando en el portfolio personal de **Ezequiel Martínez**, Desarrollador de Software con fuerte enfoque en **Backend y Ciberseguridad**. 
El objetivo principal del sitio es proyectar un perfil sumamente técnico, profesional, limpio (cero humo/chamuyo) y orientado a reclutadores IT y líderes técnicos.

## Stack Tecnológico
- **Framework:** Next.js (App Router) + React
- **Estilos:** Tailwind CSS
- **Animaciones:** Framer Motion + CSS Keyframes
- **Tipografías:** Space Grotesk (Main / Sans) y JetBrains Mono (Accents / Code)

## Directrices de Diseño y UI (Estética "Hacker / Clean")
- **Paleta de Colores:** Tema oscuro absoluto. El fondo base es `bg-black` (#000000). Los textos son tonos de gris (`text-zinc-300`, `text-zinc-400`).
- **Bento Cards (Glassmorphism):** Absolutamente todas las tarjetas (Proyectos, Educación, Modal de Stack) usan la clase utilitaria `.bento-card` definida en `globals.css`. **Regla estricta:** NO usar colores sólidos de fondo. Usa siempre `bg-white/[0.02]` con bordes `border-white/5` y desenfoque (`backdrop-blur`).
- **Efectos Ambientales:** El sitio tiene orbes psicodélicos borrosos (`animate-blob`) y una cuadrícula estilo terminal (`bg-grid-pattern`) renderizados detrás del layout. **Regla estricta:** Al usar `z-index`, asegúrate de mantener el fondo visible. Usa máscaras de gradiente CSS en lugar de fondos negros sólidos para desvanecer elementos (como en el carrusel de Stack).
- **Botones y Enlaces:** Evitar botones gigantes de colores fuertes. Usar `border-white/10` y `hover:bg-white/10`.

## Gestión de Datos (Mantenibilidad)
Para agregar nuevos proyectos, habilidades o cambiar textos, **NO modifiques los componentes de React (`.tsx`)**. 
La arquitectura del proyecto extrae toda su información desde archivos estáticos tipados:
- `src/data/profile.ts`: Información personal, biografía, textos de educación (Incluye la ruta a los PDFs de certificados).
- `src/data/projects.ts`: Lista de proyectos (No incluyas enlaces a repositorios fuente por defecto por privacidad, a menos que el usuario lo pida).
- `src/data/stack.ts`: Tecnologías aprendidas con sus colores hexadecimales oficiales.
- `src/data/social-links.ts`: Enlaces de cabecera y footer.

## Componentes Clave y Comportamientos Especiales
1. **Header & Modal "Sobre Mí":** La foto de perfil en el Header abre un Modal con Framer Motion en lugar de navegar a otra sección.
2. **Marquesina de Tecnologías (`StackSection`):** Es una cinta que hace *auto-scroll* infinito con CSS puro. Al hacer hover, se pausa. Los iconos SVG se renderizan a color usando un truco avanzado de `mask-image` (ubicado en `StackIcon.tsx`) que inyecta el `item.color` del JSON en el SVG. **¡No cambies este comportamiento!**
3. **Internacionalización:** El proyecto usa un `LanguageContext` rudimentario (Español/Inglés). Al agregar textos nuevos en `src/data/`, asegúrate de incluir su variante `En` (ej: `description` y `descriptionEn`).

## Flujo de Trabajo (Git)
- Siempre revisa `npm run build` antes de realizar un commit para asegurar que TypeScript no detecte propiedades faltantes.
- Los PDFs estáticos (como el CV y certificados) deben ir en la raíz de `/public`.
