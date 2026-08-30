import { projects } from "@/data/projects";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";

export default function ProjectsSection() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="proyectos" className="mx-auto max-w-4xl px-6 py-16">
      <SectionHeading
        title="Proyectos"
        subtitle="Algunos de los proyectos en los que trabajé"
      />

      {/* Proyecto destacado */}
      <div className="mb-6 grid gap-4">
        {featured.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      {/* Otros proyectos */}
      <div className="grid gap-4 sm:grid-cols-2">
        {rest.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
