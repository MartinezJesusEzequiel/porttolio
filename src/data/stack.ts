import type { StackItem } from "@/types";

export const stack: StackItem[] = [
  // Backend (foco principal)
  { name: "Python", icon: "python", category: "backend", status: "proficient" },
  { name: "JavaScript", icon: "javascript", category: "backend", status: "proficient" },
  { name: "Node.js", icon: "nodejs", category: "backend", status: "proficient" },

  // Frontend
  { name: "React", icon: "react", category: "frontend", status: "proficient" },
  { name: "TypeScript", icon: "typescript", category: "frontend", status: "proficient" },
  { name: "HTML5", icon: "html5", category: "frontend", status: "proficient" },
  { name: "CSS3", icon: "css3", category: "frontend", status: "proficient" },

  // Lenguajes adicionales
  { name: "Java", icon: "java", category: "language", status: "proficient" },
  { name: "Kotlin", icon: "kotlin", category: "language", status: "proficient" },
  { name: "PHP", icon: "php", category: "language", status: "proficient" },

  // Bases de datos
  { name: "SQL Server", icon: "sqlserver", category: "database", status: "proficient" },
  { name: "SQLite", icon: "sqlite", category: "database", status: "proficient" },

  // Herramientas
  { name: "Git", icon: "git", category: "tool", status: "proficient" },
  { name: "GitHub", icon: "github", category: "tool", status: "proficient" },
  { name: "Linux", icon: "linux", category: "tool", status: "proficient" },
  { name: "Docker", icon: "docker", category: "tool", status: "learning" },

  // En aprendizaje
  { name: "Next.js", icon: "nextjs", category: "frontend", status: "learning" },
  { name: "Tailwind CSS", icon: "tailwindcss", category: "frontend", status: "learning" },
];
