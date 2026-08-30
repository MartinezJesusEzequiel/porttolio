import type { StackItem } from "@/types";

interface StackIconProps {
  item: StackItem;
}

export default function StackIcon({ item }: StackIconProps) {
  return (
    <div
      className={`group relative flex flex-col items-center gap-3 rounded-xl border border-tinta/10 bg-white/40 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-celeste/40 hover:bg-white/80 hover:shadow-lg dark:border-crema/10 dark:bg-tinta/40 dark:hover:bg-tinta/80 ${
        item.status === "learning" ? "opacity-75" : ""
      }`}
    >
      {/* Ícono SVG con rebote suave */}
      <img
        src={`/icons/${item.icon}.svg`}
        alt=""
        aria-hidden="true"
        className="h-10 w-10 text-tinta transition-transform duration-300 group-hover:scale-110 dark:text-crema"
      />

      {/* Nombre */}
      <span className="text-sm font-semibold tracking-wide text-tinta/80 dark:text-crema/80">
        {item.name}
      </span>

      {/* Badge "Aprendiendo" más estilizado */}
      {item.status === "learning" && (
        <span className="absolute -top-2 -right-2 rounded-full bg-celeste px-2 py-0.5 text-[10px] font-bold text-white shadow-sm">
          LEARNING
        </span>
      )}
    </div>
  );
}
