import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

// Cambiamos a Outfit, una tipografía súper moderna y geométrica
const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ezequiel Martínez — Desarrollador de Software",
  description:
    "Portafolio de Ezequiel Martínez. Estudiante de Desarrollo de Software con enfoque en backend (Python & JavaScript), React, TypeScript y ciberseguridad. Esperanza, Santa Fe, Argentina.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`${outfit.variable} h-full antialiased scroll-smooth`}
    >
      <body className="flex min-h-screen flex-col overflow-x-hidden bg-crema font-sans text-tinta dark:bg-tinta dark:text-crema relative">
        
        {/* Blobs de fondo globales */}
        <div className="pointer-events-none fixed -left-[20%] top-0 h-[600px] w-[600px] animate-float rounded-full bg-celeste/20 blur-[120px] dark:bg-celeste/10" />
        <div className="pointer-events-none fixed -right-[20%] bottom-0 h-[600px] w-[600px] animate-float-delayed rounded-full bg-tierra/15 blur-[120px] dark:bg-tierra/10" />

        <a
          href="#inicio"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-celeste focus:px-4 focus:py-2 focus:text-white"
        >
          Ir al contenido principal
        </a>
        
        <Header />
        
        <main className="relative z-10 flex-1">{children}</main>
        
        <Footer />
      </body>
    </html>
  );
}
