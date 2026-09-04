"use client";

import { useState } from "react";
import { Profile } from "@/types";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import PdfModal from "@/components/ui/PdfModal";

interface HeroSectionProps {
  profile: Profile;
}

export default function HeroSection({ profile }: HeroSectionProps) {
  const { t } = useLanguage();
  const [isPdfOpen, setIsPdfOpen] = useState(false);

  return (
    <section id="inicio" className="relative flex flex-col items-center text-center pt-20 pb-32">
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
      >
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-xs font-medium text-zinc-300 tracking-wide uppercase">{t("hero.available")}</span>
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-12 max-w-4xl leading-snug md:leading-tight"
      >
        {t("hero.headline").split("|").map((part, i, arr) => (
          <span key={i}>
            <span className={i === 0 ? "text-white" : i === arr.length - 1 ? "text-gradient" : "text-zinc-300"}>
              {part.trim()}
            </span>
            {i < arr.length - 1 && <span className="text-zinc-600 mx-2 md:mx-3">|</span>}
          </span>
        ))}
      </motion.h1>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        className="flex flex-col sm:flex-row gap-4 mb-20"
      >
        <a href="#proyectos" className="px-8 py-3 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]">
          {t("hero.viewProjects")}
        </a>
        <button 
          onClick={() => setIsPdfOpen(true)}
          className="relative overflow-hidden px-8 py-3 rounded-full border border-white/10 bg-white/5 text-white font-medium hover:bg-white/10 transition-colors flex items-center gap-2 group cursor-pointer"
        >
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer pointer-events-none" />
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-zinc-400 group-hover:text-white transition-colors relative z-10"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
          <span className="relative z-10">{t("hero.downloadCv")}</span>
        </button>
      </motion.div>

      <PdfModal
        isOpen={isPdfOpen}
        onClose={() => setIsPdfOpen(false)}
        pdfUrl="/Ezequiel_Martinez_CV.pdf"
        title="Curriculum Vitae"
      />

    </section>
  );
}

