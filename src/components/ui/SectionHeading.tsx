interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="relative mb-14 animate-fade-in-up">
      {/* Acento decorativo */}
      <div className="absolute -left-6 top-1/2 hidden h-10 w-1.5 -translate-y-1/2 rounded-r-md bg-celeste sm:block" />
      
      <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-tinta dark:text-crema">
        {title}
      </h2>
      
      {subtitle && (
        <p className="mt-3 text-lg text-tinta/60 dark:text-crema/60 max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
