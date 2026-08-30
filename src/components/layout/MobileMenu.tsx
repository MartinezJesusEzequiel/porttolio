"use client";

import { useState } from "react";
import type { NavItem } from "@/types";

interface MobileMenuProps {
  items: NavItem[];
}

export default function MobileMenu({ items }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Botón hamburguesa */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        className="relative z-50 flex h-10 w-10 items-center justify-center rounded-md transition-colors hover:bg-tinta/5 dark:hover:bg-crema/5"
      >
        <div className="flex h-5 w-6 flex-col items-center justify-center gap-1.5">
          <span
            className={`block h-0.5 w-full bg-current transition-all duration-300 ${
              isOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-current transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-current transition-all duration-300 ${
              isOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </div>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-tinta/20 backdrop-blur-sm dark:bg-crema/10"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Panel del menú */}
      <nav
        id="mobile-menu"
        className={`fixed right-0 top-0 z-40 flex h-full w-64 flex-col bg-crema pt-20 shadow-xl transition-transform duration-300 dark:bg-tinta ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Menú de navegación móvil"
      >
        <ul className="flex flex-col gap-1 px-4">
          {items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-md px-4 py-3 text-lg transition-colors hover:bg-celeste/10 hover:text-celeste"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
