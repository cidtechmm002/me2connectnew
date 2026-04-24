import { Link } from "@tanstack/react-router";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`group inline-flex items-center gap-3 ${className}`}>
      <div className="relative h-10 w-10 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold transition-transform group-hover:scale-105">
        <span className="font-cinzel text-obsidian text-sm font-bold">MW</span>
        <div className="absolute inset-0 rounded-full ring-1 ring-[var(--gold-soft)]/40" />
      </div>
      <div className="leading-tight">
        <div className="font-display text-lg tracking-wide text-gradient-gold">MEET2CONNECT</div>
        <div className="font-cinzel text-[9px] text-[var(--muted-foreground)]">DUBAI · MYANMAR</div>
      </div>
    </Link>
  );
}