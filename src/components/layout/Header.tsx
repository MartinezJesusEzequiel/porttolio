"use client";

import { useState, useEffect, useRef } from "react";
import { navItems } from "@/data/social-links";
import MobileMenu from "./MobileMenu";

// Íconos SVG para la barra flotante
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
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const navRef = useRef<HTMLUListElement>(null);

  // Lógica para detectar en qué sección estamos (Scrollspy)
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

  // Lógica para mover la línea deslizante matemáticamente
  useEffect(() => {
    const updateIndicator = () => {
      if (!navRef.current) return;
      
      const activeElement = navRef.current.querySelector(
        `[data-section="${activeSection}"]`
      ) as HTMLElement;

      if (activeElement) {
        setIndicatorStyle({
          left: activeElement.offsetLeft,
          width: activeElement.offsetWidth,
          opacity: 1,
        });
      }
    };

    // Actualizamos al cambiar de sección
    updateIndicator();
    
    // Y también si el usuario redimensiona la pantalla
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeSection]);

  return (
    <div className="fixed left-1/2 top-4 z-50 w-[95%] max-w-5xl -translate-x-1/2">
      <header className="flex h-14 items-center justify-between rounded-2xl border border-tinta/10 bg-white/60 px-3 shadow-lg shadow-black/5 backdrop-blur-xl dark:border-crema/10 dark:bg-[#111111]/70">
        
        {/* Izquierda: Avatar y Nombre */}
        <a href="#inicio" className="flex items-center gap-3 pl-1 pr-2 rounded-xl transition-colors hover:bg-tinta/5 dark:hover:bg-crema/5 py-1">
          <img
            src="https://avatars.githubusercontent.com/u/180470723?v=4"
            alt="Avatar"
            className="h-8 w-8 rounded-lg object-cover border border-tinta/10 dark:border-crema/10"
          />
          <span className="hidden text-[13px] font-bold tracking-wide text-tinta dark:text-crema sm:block">
            ezequielmartinez
          </span>
        </a>

        {/* Centro: Links de Navegación con Línea Deslizante */}
        <nav className="hidden lg:block">
          <ul ref={navRef} className="relative flex items-center gap-1">
            
            {/* La línea mágica que se desliza */}
            <div
              className="absolute -bottom-1 h-0.5 flex justify-center transition-all duration-300 ease-out"
              style={{
                left: indicatorStyle.left,
                width: indicatorStyle.width,
                opacity: indicatorStyle.opacity,
              }}
            >
              <div className="h-full w-3/4 rounded-full bg-celeste shadow-[0_0_8px_rgba(91,141,184,0.6)]" />
            </div>

            {navItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    data-section={sectionId}
                    className={`block rounded-lg px-4 py-2 text-[13px] font-semibold transition-colors hover:text-tinta dark:hover:text-crema ${
                      isActive
                        ? "text-tinta dark:text-crema"
                        : "text-tinta/50 dark:text-crema/50"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Derecha: Redes, Bandera y Menú Móvil */}
        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 sm:flex">
            {/* GitHub */}
            <a
              href="https://github.com/MartinezJesusEzequiel"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-tinta/10 text-tinta/70 transition-colors hover:bg-tinta/5 hover:text-tinta dark:border-crema/10 dark:text-crema/70 dark:hover:bg-crema/5 dark:hover:text-crema"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                {NavIcons.github}
              </svg>
            </a>
            
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/ezequiel-martinezz/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-tinta/10 text-tinta/70 transition-colors hover:bg-tinta/5 hover:text-tinta dark:border-crema/10 dark:text-crema/70 dark:hover:bg-crema/5 dark:hover:text-crema"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                {NavIcons.linkedin}
              </svg>
            </a>
          </div>

          {/* Separador */}
          <div className="hidden h-5 w-px bg-tinta/10 dark:bg-crema/10 sm:block" />

          {/* Bandera Argentina */}
          <div
            className="flex h-8 w-10 items-center justify-center rounded-lg border border-tinta/10 bg-tinta/5 text-lg select-none dark:border-crema/10 dark:bg-crema/5"
            title="Argentina"
          >
            🇦🇷
          </div>

          {/* Botón hamburguesa (Móvil) */}
          <MobileMenu items={navItems} />
        </div>
      </header>
    </div>
  );
}
