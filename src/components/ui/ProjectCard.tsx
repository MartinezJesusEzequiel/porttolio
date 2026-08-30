import type { Project } from "@/types";
import { socialLinks } from "@/data/social-links";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
        project.featured
          ? "border-celeste/40 bg-gradient-to-br from-celeste/10 to-transparent dark:from-celeste/20 dark:to-transparent"
          : "border-tinta/10 bg-white/40 backdrop-blur-md hover:border-celeste/30 dark:border-crema/10 dark:bg-tinta/40"
      }`}
    >
      {/* Brillo sutil de fondo en el hover para destacados */}
      {project.featured && (
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-celeste/20 blur-3xl transition-opacity opacity-0 group-hover:opacity-100" />
      )}

      <div className="relative z-10">
        {project.featured && (
          <span className="mb-4 inline-block rounded-full bg-celeste/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-celeste dark:bg-celeste/30 dark:text-crema">
            ⭐ Destacado
          </span>
        )}

        <h3 className="text-2xl font-bold tracking-tight text-tinta transition-colors group-hover:text-celeste dark:text-crema">
          {project.title}
        </h3>

        <p className="mt-3 text-base leading-relaxed text-tinta/70 dark:text-crema/70">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-tinta/5 px-2.5 py-1 text-xs font-medium text-tinta/70 backdrop-blur-sm dark:bg-crema/10 dark:text-crema/80"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {(project.repoUrl || project.demoUrl) && (
        <div className="relative z-10 mt-8 flex items-center gap-5 pt-6 border-t border-tinta/10 dark:border-crema/10">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-tinta/60 transition-colors hover:text-celeste dark:text-crema/60 dark:hover:text-celeste"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              Código fuente
            </a>
          )}
        </div>
      )}
    </article>
  );
}
