import { motion } from "framer-motion";

/**
 * OrnamentDivider — Burmese-inspired decorative section break.
 * Uses lotus/diamond motifs and gold gradient lines.
 */
export function OrnamentDivider({ label }: { label?: string }) {
  return (
    <div className="flex items-center justify-center gap-6 py-8" aria-hidden={!label}>
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "100%", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="flex-1 h-px max-w-[200px] bg-gradient-to-r from-transparent to-[var(--gold)]/60"
      />
      <motion.div
        initial={{ scale: 0, rotate: -180, opacity: 0 }}
        whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex items-center gap-3"
      >
        {/* Lotus/diamond motif */}
        <svg width="14" height="14" viewBox="0 0 14 14" className="text-[var(--gold)]">
          <path
            d="M7 0 L10 7 L7 14 L4 7 Z"
            fill="currentColor"
            opacity="0.5"
          />
        </svg>
        <svg width="20" height="20" viewBox="0 0 20 20" className="text-[var(--gold)]">
          <path
            d="M10 0 L13 7 L20 10 L13 13 L10 20 L7 13 L0 10 L7 7 Z"
            fill="currentColor"
          />
        </svg>
        <svg width="14" height="14" viewBox="0 0 14 14" className="text-[var(--gold)]">
          <path
            d="M7 0 L10 7 L7 14 L4 7 Z"
            fill="currentColor"
            opacity="0.5"
          />
        </svg>
        {label && (
          <span className="ml-3 font-cinzel text-[10px] text-[var(--gold)] tracking-[0.4em]">
            {label}
          </span>
        )}
      </motion.div>
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "100%", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="flex-1 h-px max-w-[200px] bg-gradient-to-l from-transparent to-[var(--gold)]/60"
      />
    </div>
  );
}

/**
 * PagodaSpire — animated SVG silhouette for backgrounds
 */
export function PagodaSpire({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 100 200"
      className={className}
      aria-hidden
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
    >
      <defs>
        <linearGradient id="spireGold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--gold-soft)" />
          <stop offset="100%" stopColor="var(--gold-deep)" />
        </linearGradient>
      </defs>
      <path
        d="M50 0 L48 20 L52 20 L50 30 L46 35 L54 35 L50 45 L42 55 L58 55 L50 65 L38 80 L62 80 L50 95 L32 120 L68 120 L50 140 L25 175 L75 175 L100 200 L0 200 L25 175 Z"
        fill="url(#spireGold)"
        opacity="0.9"
      />
    </motion.svg>
  );
}