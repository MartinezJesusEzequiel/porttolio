import { socialLinks } from "@/data/social-links";
import SocialLink from "@/components/ui/SocialLink";

export default function HeroSection() {
  return (
    <section id="inicio" className="relative mx-auto max-w-4xl px-6 pb-20 pt-32 sm:pb-32 sm:pt-48">
      <div className="relative z-10 animate-fade-in-up">
        {/* Badge */}
        <p className="mb-8 inline-flex items-center gap-2 rounded-full border border-tierra/30 bg-tierra/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-tierra">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-tierra opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-tierra"></span>
          </span>
          Esperanza, Santa Fe
        </p>

        {/* Nombre y Sol de Mayo */}
        <div className="flex items-center gap-5 sm:gap-8">
          <h1 className="text-6xl font-extrabold tracking-tighter sm:text-7xl lg:text-8xl">
            <span className="block text-tinta dark:text-crema">Ezequiel</span>
            {/* APELLIDO ANIMADO */}
            <span className="block animate-gradient bg-gradient-to-r from-celeste via-purple-400 to-celeste bg-[length:200%_auto] bg-clip-text pb-2 text-transparent">
              Martínez
            </span>
          </h1>

          {/* El Sol de Mayo con brillo dorado y giro súper lento */}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/89/Sol_de_Mayo-Bandera_de_Argentina.svg"
            alt="Sol de Mayo"
            className="h-16 w-16 select-none drop-shadow-[0_0_15px_rgba(251,191,36,0.5)] sm:h-24 sm:w-24 animate-[spin_40s_linear_infinite]"
          />
        </div>

        {/* Rol */}
        <p className="mt-8 text-2xl font-light text-tinta/80 dark:text-crema/80 sm:text-3xl">
          Desarrollador de Software <span className="font-semibold italic text-celeste">Backend Focus</span>
        </p>

        {/* Bio */}
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-tinta/60 dark:text-crema/60">
          Estudiante de Desarrollo de Software con enfoque en backend. Trabajo con Python y JavaScript, y estoy creciendo en React, TypeScript y ciberseguridad. Construyo software que resuelve problemas reales de forma simple y eficaz.
        </p>

        {/* Botones Call to Action */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#proyectos"
            className="rounded-full bg-celeste px-7 py-3 text-sm font-semibold text-white transition-all hover:bg-celeste/80 hover:shadow-lg hover:shadow-celeste/20"
          >
            Ver Proyectos
          </a>
          <a
            href="#contacto"
            className="rounded-full border border-tinta/10 bg-transparent px-7 py-3 text-sm font-semibold text-tinta transition-all hover:bg-tinta/5 dark:border-crema/20 dark:text-crema dark:hover:bg-crema/10"
          >
            Contacto
          </a>
        </div>
      </div>
    </section>
  );
}
