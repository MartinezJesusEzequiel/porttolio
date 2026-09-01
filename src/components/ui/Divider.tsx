export default function Divider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center py-16 md:py-24 ${className}`} aria-hidden="true">
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50" />
    </div>
  );
}
