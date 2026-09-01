"use client";

import { useState } from "react";
import { StackItem } from "@/types";
import SectionHeading from "@/components/ui/SectionHeading";
import StackIcon from "@/components/ui/StackIcon";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const categories = [
  { id: "backend", label: "Backend", enLabel: "Backend" },
  { id: "frontend", label: "Frontend", enLabel: "Frontend" },
  { id: "database", label: "Base de Datos", enLabel: "Database" },
  { id: "tool", label: "Herramientas", enLabel: "Tools" },
  { id: "language", label: "Lenguajes", enLabel: "Languages" },
] as const;

interface StackSectionProps {
  stack: StackItem[];
}

export default function StackSection({ stack }: StackSectionProps) {
  const { t, lang } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Duplicamos el array para el efecto de bucle infinito perfecto
  const marqueeItems = [...stack, ...stack];

  return (
    <section id="stack" className="mb-24 relative">
      <div className="flex justify-between items-end mb-12">
        <SectionHeading title={t("stack.title")} subtitle={t("stack.subtitle")} />
        
        <button 
          onClick={() => setIsModalOpen(true)}
          className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-sm font-medium text-zinc-300 hover:text-white transition-all mb-4"
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/></svg>
          {lang === "es" ? "Ver Todo" : "View All"}
        </button>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full relative cursor-pointer py-4"
        onClick={() => setIsModalOpen(true)}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        title={lang === "es" ? "Clic para ver todas las tecnologías" : "Click to view all technologies"}
      >
        <div 
          className="overflow-hidden w-full flex"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
          }}
        >
          <div className={`flex w-[200%] gap-4 ${isPaused ? 'pause-animation' : 'animate-marquee'}`}>
            {marqueeItems.map((item, index) => (
              <div key={`${item.name}-${index}`} className="w-28 shrink-0">
                <StackIcon item={item} />
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Botón visible solo en móviles para no depender del clic en el carrusel */}
      <div className="mt-8 flex justify-center sm:hidden">
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-zinc-300"
        >
          {lang === "es" ? "Ver todas ordenadas" : "View all ordered"}
        </button>
      </div>

      {/* Modal de Tecnologías Organizadas */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto custom-scrollbar bento-card p-6 md:p-10 bg-[#0a0a0a] shadow-2xl rounded-3xl z-10"
            >
              {/* Close Button */}
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 text-zinc-500 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10 z-20"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>
              </button>

              <div className="mb-10 text-center">
                <h2 className="text-3xl font-bold text-white mb-2">
                  {t("stack.title")}
                </h2>
                <p className="text-zinc-400">
                  {lang === "es" ? "Clasificadas por área de especialización" : "Categorized by area of expertise"}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {categories.map((category) => {
                  const categoryItems = stack.filter(
                    (item) => item.category === category.id
                  );

                  if (categoryItems.length === 0) return null;

                  return (
                    <div key={category.id} className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                      <h3 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider opacity-80 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500/50" />
                        {lang === "es" ? category.label : category.enLabel}
                      </h3>

                      <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                        {categoryItems.map((item) => (
                          <StackIcon key={item.name} item={item} />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
