export default function Divider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center py-20 ${className}`} aria-hidden="true">
      {/* Contenedor de la línea mágica inspirada en tu imagen */}
      <div className="relative flex w-full max-w-3xl items-center justify-center">
        
        {/* El brillo (Glow) desenfocado por detrás */}
        <div 
          className="absolute h-1 w-full blur-[12px] opacity-70"
          style={{
            background: "linear-gradient(to right, transparent, #2dd4bf, #c084fc, #fbbf24, #60a5fa, transparent)"
          }}
        />
        
        {/* La línea principal sólida */}
        <div 
          className="relative h-[2px] w-full rounded-full opacity-90"
          style={{
            background: "linear-gradient(to right, transparent, #2dd4bf, #c084fc, #fbbf24, #60a5fa, transparent)"
          }}
        />

        {/* Un punto de luz intenso en el medio (para darle más realismo al láser) */}
        <div className="absolute h-1 w-32 bg-white/40 blur-[4px]" />
      </div>
    </div>
  );
}
