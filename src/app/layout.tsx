import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { LanguageProvider } from "@/context/LanguageContext";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Mi portafolio personal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${spaceGrotesk.variable} ${jetBrainsMono.variable} h-full antialiased scroll-smooth dark`}
    >
      <body className="flex flex-col font-sans bg-black text-zinc-300 selection:bg-white/20 min-h-screen relative">
        <LanguageProvider>
          {/* Psychedelic Ambient Background */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none bg-[#020202]">
            {/* Deep glow base overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
            
            {/* Animated Orbs */}
            <div className="absolute top-[-10%] left-[-10%] w-[45vw] h-[45vw] rounded-full bg-emerald-900/30 blur-[100px] mix-blend-screen animate-blob" />
            <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-purple-900/30 blur-[100px] mix-blend-screen animate-blob animation-delay-2000" />
            <div className="absolute bottom-[-10%] left-[15%] w-[50vw] h-[50vw] rounded-full bg-indigo-900/30 blur-[100px] mix-blend-screen animate-blob animation-delay-4000" />
          </div>
          
          <div className="fixed inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

          <div className="relative z-10 flex flex-col min-h-screen">
            <Header />
            
            <main className="flex-1 w-full max-w-6xl mx-auto px-4 md:px-8 mt-32">
              {children}
            </main>

            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
