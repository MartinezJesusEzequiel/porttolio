import SectionHeading from "@/components/ui/SectionHeading";

export default function AboutSection() {
  return (
    <section id="sobre-mi" className="mx-auto max-w-4xl px-6 py-16">
      <SectionHeading title="Sobre mí" />

      <div className="max-w-2xl space-y-4 text-tinta/80 leading-relaxed dark:text-crema/80">
        <p>
          Soy una persona curiosa y creativa, siempre con ganas de aprender algo
          nuevo. Disfruto el proceso de pensar ideas y convertirlas en soluciones
          útiles para los demás.
        </p>
        <p>
          Actualmente curso la Tecnicatura en Software Informático en ITEC
          &quot;El Molino&quot; (Esperanza, Santa Fe), donde vengo trabajando con
          Python, Java, Kotlin y JavaScript en proyectos que van desde sistemas de
          gestión hasta aplicaciones móviles. Mi enfoque principal es el backend,
          pero también me muevo en el frontend con React y TypeScript.
        </p>
        <p>
          Me manejo con la terminal de Linux y uso Git como parte de mi flujo de
          trabajo diario. Estoy buscando bootcamps y oportunidades de aprendizaje
          para seguir creciendo, especialmente en el área de{" "}
          <strong className="text-celeste font-medium">ciberseguridad</strong>
          {" "} — entender cómo proteger los sistemas que construyo y pensar la
          seguridad desde el diseño.
        </p>
        <p>
          Me gusta enfrentar desafíos, trabajar de manera autodidacta y colaborar
          con otras personas para crecer juntos.
        </p>
      </div>
    </section>
  );
}
