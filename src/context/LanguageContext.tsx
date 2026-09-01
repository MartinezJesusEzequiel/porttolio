"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "es" | "en";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const dictionary = {
  es: {
    // Nav
    "nav.inicio": "Inicio",
    "nav.proyectos": "Proyectos",
    "nav.stack": "Stack",
    "nav.sobre-mi": "Sobre mí",
    "nav.educacion": "Educación",
    "nav.contacto": "Contacto",
    
    // Hero
    "hero.available": "Disponible para trabajar",
    "hero.headline": "Software Developer en formación | Ecosistema Python & TypeScript | Linux CLI | Buscando sumarme a un equipo como Junior / Trainee",
    "hero.viewProjects": "Ver Proyectos",
    "hero.downloadCv": "Descargar CV",

    // Projects
    "projects.title": "Trabajos Destacados",
    "projects.subtitle": "Una colección de mis proyectos recientes.",
    
    // Stack
    "stack.title": "Tecnologías",
    "stack.subtitle": "Las herramientas que utilizo en mi día a día.",

    // About (No longer used, but kept for dictionary completeness)
    "about.title": "Sobre Mí",
    "about.subtitle": "Una breve introducción.",

    // Education
    "education.title": "Educación",
    "education.subtitle": "Mi historial académico.",

    // Contact
    "contact.title": "Hablemos",
    "contact.subtitle": "Ya sea que tengas una pregunta o solo quieras saludar, ¡intentaré responderte lo antes posible!",
  },
  en: {
    // Nav
    "nav.inicio": "Home",
    "nav.proyectos": "Projects",
    "nav.stack": "Stack",
    "nav.sobre-mi": "About",
    "nav.educacion": "Education",
    "nav.contacto": "Contact",
    
    // Hero
    "hero.available": "Available for work",
    "hero.headline": "Software Developer in training | Python & TypeScript Ecosystem | Linux CLI | Looking to join a team as Junior / Trainee",
    "hero.viewProjects": "View Projects",
    "hero.downloadCv": "Download CV",

    // Projects
    "projects.title": "Selected Work",
    "projects.subtitle": "A collection of recent projects.",
    
    // Stack
    "stack.title": "Tech Stack",
    "stack.subtitle": "Technologies I work with.",

    // About
    "about.title": "About Me",
    "about.subtitle": "A brief introduction.",

    // Education
    "education.title": "Education",
    "education.subtitle": "Academic background.",

    // Contact
    "contact.title": "Let's connect",
    "contact.subtitle": "Whether you have a question or just want to say hi, I'll try my best to get back to you!",
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("es");

  useEffect(() => {
    // Load preference from localStorage if available
    const saved = localStorage.getItem("lang") as Language;
    if (saved && (saved === "es" || saved === "en")) {
      setLang(saved);
    }
  }, []);

  const handleSetLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  const t = (key: string): string => {
    // @ts-ignore
    return dictionary[lang][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}