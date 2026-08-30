import { socialLinks } from "@/data/social-links";
import SectionHeading from "@/components/ui/SectionHeading";
import SocialLink from "@/components/ui/SocialLink";

export default function ContactSection() {
  return (
    <section id="contacto" className="mx-auto max-w-4xl px-6 py-16">
      <SectionHeading
        title="Contacto"
        subtitle="¿Querés trabajar juntos o tenés alguna consulta?"
      />

      <div className="max-w-md space-y-6">
        {/* Links de contacto */}
        <div className="flex flex-col gap-4">
          {socialLinks.map((link) => (
            <SocialLink
              key={link.label}
              link={link}
              showLabel
              className="text-base"
            />
          ))}
        </div>

        {/* Ubicación */}
        <div className="flex items-center gap-2 text-tinta/60 dark:text-crema/60">
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5 fill-current"
            aria-hidden="true"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" />
          </svg>
          <span className="text-sm">Esperanza, Santa Fe, Argentina</span>
        </div>
      </div>
    </section>
  );
}
