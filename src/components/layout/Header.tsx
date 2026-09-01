"use client";

import { useState, useEffect, useRef } from "react";
import { navItems } from "@/data/social-links";
import { profileData as profile } from "@/data/profile";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

const NavIcons: Record<string, React.ReactNode> = {
  github: (
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  ),
  linkedin: (
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  )
};

export default function Header() {
  const [activeSection, setActiveSection] = useState("inicio");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navRef = useRef<HTMLUListElement>(null);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.replace("#", ""));
      let current = "inicio";

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 inset-x-0 z-40 flex justify-center mt-6 px-4">
        <header className="flex h-12 items-center justify-between rounded-full border border-white/10 bg-black/40 px-6 backdrop-blur-md shadow-2xl max-w-4xl w-full">
          
          {/* Avatar/Name (Opens Modal) */}
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-3 group focus:outline-none relative"
            aria-label="About Me"
          >
            <div className="relative">
              <img
                src="https://avatars.githubusercontent.com/u/180470723?v=4"
                alt="Avatar"
                className="h-6 w-6 rounded-full object-cover filter grayscale opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all shadow-[0_0_10px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-green-500 rounded-full border border-black/50 animate-pulse" />
            </div>
            <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors border-b border-transparent group-hover:border-zinc-500 pb-0.5">
              ezequiel
            </span>

            {/* Tooltip */}
            <span className="absolute -bottom-10 left-0 whitespace-nowrap rounded bg-[#111111] px-2.5 py-1 text-[11px] font-medium text-zinc-300 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-1 border border-white/10 pointer-events-none shadow-lg">
              {lang === "es" ? "Leer Sobre Mí" : "Read About Me"}
            </span>
          </button>

          {/* Links */}
          <nav className="hidden sm:block">
            <ul ref={navRef} className="flex gap-1 items-center">
              {navItems.map((item) => {
                const sectionId = item.href.replace("#", "");
                const isActive = activeSection === sectionId;
                
                // Find translation key based on original label
                const tKey = `nav.${item.href.replace("#", "")}`;

                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                        isActive ? "bg-white/10 text-white" : "text-zinc-400 hover:text-zinc-200 hover:bg-white/5"
                      }`}
                    >
                      {t(tKey)}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Icons & Lang Toggle */}
          <div className="flex gap-4 items-center">
            <div className="flex items-center gap-1 text-xs font-medium">
              <button 
                onClick={() => setLang('es')}
                className={`transition-colors ${lang === 'es' ? 'text-white' : 'text-zinc-600 hover:text-zinc-400'}`}
                aria-label="Cambiar a Español"
              >
                ES
              </button>
              <span className="text-zinc-600">/</span>
              <button 
                onClick={() => setLang('en')}
                className={`transition-colors ${lang === 'en' ? 'text-white' : 'text-zinc-600 hover:text-zinc-400'}`}
                aria-label="Switch to English"
              >
                EN
              </button>
            </div>
            <div className="w-px h-4 bg-white/10" />
            <div className="flex gap-3 items-center">
              <a href="https://github.com/MartinezJesusEzequiel" className="text-zinc-400 hover:text-white transition-colors" target="_blank" rel="noreferrer">
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">{NavIcons.github}</svg>
              </a>
              <a href="https://www.linkedin.com/in/ezequiel-martinezz/" className="text-zinc-400 hover:text-white transition-colors" target="_blank" rel="noreferrer">
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">{NavIcons.linkedin}</svg>
              </a>
            </div>
          </div>
        </header>
      </div>

      {/* About Me Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-lg bento-card p-8 bg-[#0a0a0a] shadow-2xl rounded-3xl z-10 overflow-hidden"
            >
              {/* Close Button */}
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 text-zinc-500 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>
              </button>

              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border border-white/10 ring-4 ring-white/5">
                  <img
                    src="https://avatars.githubusercontent.com/u/180470723?v=4"
                    alt={profile.firstName}
                    className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                
                <h2 className="text-2xl font-bold text-white mb-2">
                  {profile.firstName} {profile.lastName}
                </h2>
                
                <p className="text-sm font-medium text-green-400 mb-6 uppercase tracking-wider">
                  {lang === "es" ? "Sobre Mí" : "About Me"}
                </p>

                <div className="text-zinc-400 text-sm leading-relaxed space-y-4 max-w-md">
                  {(lang === "es" ? profile.aboutText : (profile.aboutTextEn || profile.aboutText)).map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>

                <div className="mt-8 flex gap-3">
                  <a href={profile.email.includes("@") ? `mailto:${profile.email}` : profile.email} className="px-6 py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-zinc-200 transition-colors">
                    {lang === "es" ? "Contactar" : "Contact Me"}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
