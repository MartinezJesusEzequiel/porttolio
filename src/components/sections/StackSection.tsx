import { stack } from "@/data/stack";
import SectionHeading from "@/components/ui/SectionHeading";
import StackIcon from "@/components/ui/StackIcon";

const categories = [
  { id: "backend", label: "Backend" },
  { id: "frontend", label: "Frontend & Web" },
  { id: "language", label: "Lenguajes Adicionales" },
  { id: "database", label: "Bases de Datos" },
  { id: "tool", label: "Herramientas & Entorno" },
] as const;

export default function StackSection() {
  return (
    <section id="stack" className="mx-auto max-w-4xl px-6 py-16">
      <SectionHeading
        title="Stack Tecnológico"
        subtitle="Las herramientas con las que trabajo día a día y las que sigo explorando"
      />

      <div className="flex flex-col gap-14">
        {categories.map((category) => {
          const categoryItems = stack.filter(
            (item) => item.category === category.id
          );

          if (categoryItems.length === 0) return null;

          return (
            <div key={category.id} className="animate-fade-in-up">
              {/* Título de la categoría con línea separadora */}
              <div className="mb-6 flex items-center gap-4">
                <h3 className="text-xl font-bold tracking-tight text-tinta dark:text-crema">
                  {category.label}
                </h3>
                <div className="h-px flex-1 bg-tinta/10 dark:bg-crema/10" />
              </div>

              {/* Cuadrícula de iconos */}
              <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
                {categoryItems.map((item) => (
                  <StackIcon key={item.name} item={item} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
