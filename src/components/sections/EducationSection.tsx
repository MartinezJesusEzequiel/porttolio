import { education } from "@/data/social-links";
import SectionHeading from "@/components/ui/SectionHeading";

export default function EducationSection() {
  return (
    <section id="educacion" className="mx-auto max-w-4xl px-6 py-16">
      <SectionHeading title="Educación" />

      <div className="grid gap-4 sm:grid-cols-2">
        {education.map((item) => (
          <article
            key={item.title}
            className="rounded-lg border border-tinta/5 p-6 dark:border-crema/5"
          >
            {/* Ícono según tipo */}
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-celeste/10 text-celeste">
              {item.type === "degree" ? (
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                  <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                </svg>
              )}
            </div>

            {/* Institución */}
            <h3 className="font-semibold">{item.institution}</h3>

            {/* Título */}
            <p className="mt-1 text-sm text-tinta/70 dark:text-crema/70">
              {item.title}
            </p>

            {/* Período */}
            <p className="mt-2 text-xs font-medium text-tierra">{item.period}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
