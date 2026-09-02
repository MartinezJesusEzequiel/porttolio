import type { StackItem } from "@/types";

export const stack: StackItem[] = [
  // Lenguajes
  { name: "Python", icon: "python", category: "language", status: "proficient", color: "#3776AB" },
  { name: "TypeScript", icon: "typescript", category: "language", status: "proficient", color: "#3178C6" },
  { name: "JavaScript", icon: "javascript", category: "language", status: "proficient", color: "#F7DF1E" },
  { name: "Kotlin", icon: "kotlin", category: "language", status: "proficient", color: "#7F52FF" },
  { name: "Java", icon: "java", category: "language", status: "proficient", color: "#007396" },

  // Frontend
  { name: "React", icon: "react", category: "frontend", status: "proficient", color: "#61DAFB" },
  { name: "Next.js", icon: "nextjs", category: "frontend", status: "learning", color: "#ffffff" },
  { name: "Tailwind CSS", icon: "tailwindcss", category: "frontend", status: "learning", color: "#06B6D4" },
  { name: "HTML5", icon: "html5", category: "frontend", status: "proficient", color: "#E34F26" },
  { name: "CSS3", icon: "css3", category: "frontend", status: "proficient", color: "#1572B6" },

  // Backend
  { name: "Node.js", icon: "nodejs", category: "backend", status: "proficient", color: "#339933" },

  // Bases de datos
  { name: "SQL Server", icon: "sqlserver", category: "database", status: "proficient", color: "#CC292B" },
  { name: "SQLite", icon: "sqlite", category: "database", status: "proficient", color: "#003B57" },

  // Herramientas
  { name: "Git", icon: "git", category: "tool", status: "proficient", color: "#F05032" },
  { name: "GitHub", icon: "github", category: "tool", status: "proficient", color: "#ffffff" },
  { name: "Linux", icon: "linux", category: "tool", status: "proficient", color: "#FCC624" },
  { name: "Docker", icon: "docker", category: "tool", status: "learning", color: "#2496ED" },
];
