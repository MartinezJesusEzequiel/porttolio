import type { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "TypeScout",
    description:
      "Aplicación interactiva para explorar, previsualizar y comparar fuentes tipográficas de Google Fonts de forma visual.",
    stack: ["React", "Node.js", "TypeScript", "Google Fonts API"],
    featured: true,
  },
  {
    title: "Sistema Gestión Biblioteca",
    description:
      "Lógica de programación y resolución de problemas complejos aplicados a la gestión bibliotecaria.",
    stack: ["Python"],
    repoUrl: "https://github.com/Tabacoman/TP_Integrador_Programacion",
    featured: false,
  },
  {
    title: "Control de Insumos Agrícolas",
    description:
      "Arquitectura e implementación completa de aplicación móvil para gestión de insumos agrícolas.",
    stack: ["Kotlin"],
    featured: false,
  },
  {
    title: "Sitio Web — Café Únilo",
    description:
      "Desarrollo responsive para marca de café con Firebase y diseño optimizado.",
    stack: ["HTML5", "JavaScript", "Firebase"],
    featured: false,
  },
];
