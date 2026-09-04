"use client";

import { useState } from "react";
import { EducationItem } from "@/types";
import SectionHeading from "@/components/ui/SectionHeading";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { useLanguage } from "@/context/LanguageContext";
import PdfModal from "@/components/ui/PdfModal";

interface EducationSectionProps {
  education: EducationItem[];
}

export default function EducationSection({ education }: EducationSectionProps) {
  const { t, lang } = useLanguage();
  const [activePdf, setActivePdf] = useState<string | null>(null);

  return (
    <section id="educacion" className="mb-24">
      <SectionHeading title={t("education.title")} subtitle={t("education.subtitle")} />

      <div className="grid gap-4 sm:grid-cols-2 mt-12">
        {education.map((item, index) => (
          <SpotlightCard
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            className="p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-medium text-white/50 bg-white/5 px-2.5 py-1 rounded-md tracking-wide">
                  {item.type === "degree" ? (lang === "es" ? "Título" : "Degree") : (lang === "es" ? "Certificado" : "Certificate")}
                </span>
                <span className="text-sm text-zinc-500">
                  {item.period}
                </span>
              </div>
              
              <h3 className="text-lg font-bold text-white tracking-tight mb-1">
                {item.institution}
              </h3>
              <p className="text-zinc-400">
                {lang === "es" ? item.title : (item.titleEn || item.title)}
              </p>

              {item.certificateUrl && (
                <button 
                  onClick={() => setActivePdf(item.certificateUrl!)}
                  className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-zinc-300 hover:text-white transition-colors cursor-pointer"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
                  {lang === "es" ? "Ver Certificado" : "View Certificate"}
                </button>
              )}
            </div>
          </SpotlightCard>
        ))}
      </div>

      <PdfModal
        isOpen={!!activePdf}
        onClose={() => setActivePdf(null)}
        pdfUrl={activePdf || ""}
        title={lang === "es" ? "Certificado" : "Certificate"}
      />
    </section>
  );
}
