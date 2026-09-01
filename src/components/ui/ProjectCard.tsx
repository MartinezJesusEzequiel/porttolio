"use client";

import type { Project } from "@/types";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const { lang } = useLanguage();

  if (project.featured) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
        className="w-full mb-6 bento-card overflow-hidden flex flex-col group md:col-span-2"
      >
        <div className="w-full p-8 md:p-12 flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-bold text-green-400 uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.5)]" />
                {lang === "es" ? "Proyecto Destacado" : "Featured Project"}
              </span>
              {project.mainLanguage && (
                <span className="text-xs font-bold text-zinc-300 uppercase flex items-center gap-1.5">
                  <span className={`w-1.5 h-1.5 rounded-full ${project.languageColor || "bg-orange-500"}`} />
                  {project.mainLanguage}
                </span>
              )}
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight group-hover:text-zinc-200 transition-colors">
              {project.title}
            </h3>
            
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-10 max-w-3xl">
              {lang === "es" ? project.description : (project.descriptionEn || project.description)}
            </p>

            <div className="flex flex-wrap gap-2 mb-10">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="flex items-center gap-1.5 text-sm font-medium text-zinc-400 bg-white/5 border border-white/5 px-3 py-1.5 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 mt-auto">
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white border border-white/10 hover:bg-white/10 rounded-md transition-colors bg-white/5 backdrop-blur-md">
                {lang === "es" ? "Ver proyecto" : "View project"}
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7z"/></svg>
              </a>
            )}
            {project.repoUrl && (
              <a href={project.repoUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-zinc-300 border border-white/5 hover:border-white/20 hover:text-white rounded-md transition-all bg-transparent">
                <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 fill-current"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>
                {lang === "es" ? "Repositorio" : "Repository"}
              </a>
            )}
          </div>
        </div>
      </motion.article>
    );
  }

  // Normal Grid Card
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="bento-card p-6 md:p-8 flex flex-col group h-full"
    >
      <div className="flex justify-between items-start mb-6">
        {project.mainLanguage && (
          <span className="text-xs font-medium text-zinc-300 flex items-center gap-1.5 uppercase tracking-wide">
            <span className={`w-1.5 h-1.5 rounded-full ${project.languageColor || "bg-blue-500"}`} />
            {project.mainLanguage}
          </span>
        )}
        <div className="flex gap-2">
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noreferrer" className="p-1.5 rounded-md text-zinc-500 hover:text-white hover:bg-white/10 transition-colors" aria-label="Demo">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7z"/></svg>
            </a>
          )}
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noreferrer" className="p-1.5 rounded-md text-zinc-500 hover:text-white hover:bg-white/10 transition-colors" aria-label="Repo">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>
            </a>
          )}
        </div>
      </div>

      <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-zinc-200 transition-colors">
        {project.title}
      </h3>
      
      <p className="text-zinc-400 text-sm leading-relaxed mb-8 flex-grow">
        {lang === "es" ? project.description : (project.descriptionEn || project.description)}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="flex items-center gap-1.5 text-xs font-medium text-zinc-400 bg-white/5 border border-white/5 px-2.5 py-1 rounded-md"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
