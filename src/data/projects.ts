import type { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Sistema de Gestión Agrónomo Don Elio",
    description:
      "Arquitectura e implementación completa de un sistema móvil para la gestión integral agrícola. Control y trazabilidad detallada de entradas y salidas de stock e insumos de siembra.",
    descriptionEn: "Complete architecture and implementation of an agricultural management system. Traceability and detailed control of stock inputs and outputs for planting.",
    stack: ["Kotlin", "Android", "SQLite"],
    featured: true,
    mainLanguage: "Kotlin",
    languageColor: "bg-purple-500",
    stars: 12,
    forks: 3,
    updatedAt: "Actualizado recientemente",
  },
  {
    title: "TypeScout - Explorador de Tipografías",
    description:
      "Aplicación web interactiva para explorar fuentes tipográficas mediante la API de Google Fonts. Interfaz minimalista y código modular con tiempos de carga reducidos.",
    descriptionEn: "Interactive web application to explore typefaces using the Google Fonts API. Minimalist interface and modular code with reduced loading times.",
    stack: ["React", "Vite", "TypeScript"],
    demoUrl: "https://typescout.demo.com",
    featured: false,
    mainLanguage: "TypeScript",
    languageColor: "bg-blue-500",
    stars: 8,
    forks: 1,
    updatedAt: "Actualizado 20 de ago de 2026",
  },
  {
    title: "Sistema Gestión Biblioteca",
    description:
      "Lógica de programación y resolución de problemas complejos aplicados a la gestión bibliotecaria. Desarrollo integral del flujo de datos.",
    descriptionEn: "Programming logic and complex problem solving applied to library management. Integral development of the data flow.",
    stack: ["Python", "CLI"],
    featured: false,
    mainLanguage: "Python",
    languageColor: "bg-yellow-500",
    stars: 5,
    forks: 0,
    updatedAt: "Actualizado 10 de jul de 2026",
  },
  {
    title: "Café Únilo - E-commerce",
    description:
      "Sitio web responsivo orientado a la venta de productos con base de datos en tiempo real (Firebase). Interfaz priorizando accesibilidad y navegación intuitiva.",
    descriptionEn: "Responsive website aimed at selling products with a real-time database (Firebase). Interface prioritizing accessibility and intuitive navigation.",
    stack: ["JavaScript", "HTML5", "Firebase"],
    featured: false,
    mainLanguage: "JavaScript",
    languageColor: "bg-yellow-400",
    stars: 3,
    forks: 0,
    updatedAt: "Actualizado Dic 2023",
  },
];
