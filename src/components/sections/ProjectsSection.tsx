"use client";

import { Project } from "@/types";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import { useLanguage } from "@/context/LanguageContext";

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  const { t } = useLanguage();

  // Sort featured projects to the front
  const sortedProjects = [...projects].sort((a, b) => 
    (b.featured ? 1 : 0) - (a.featured ? 1 : 0)
  );

  return (
    <section id="proyectos" className="mb-24">
      <SectionHeading title={t("projects.title")} subtitle={t("projects.subtitle")} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
        {sortedProjects.map((project, idx) => (
          <ProjectCard key={project.title} project={project} index={idx} />
        ))}
      </div>
    </section>
  );
}
