import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * HeritageBackdrop — cinematic Myanmar cultural background with
 * Ken Burns parallax, atmospheric overlays, and floating gold particles.
 *
 * Use as a section wrapper. Children render above the backdrop.
 */
export function HeritageBackdrop({
  image,
  overlay = "default",
  intensity = 0.3,
  pattern = false,
  patternImage,
  children,
  className = "",
  parallax = true,
}: {
  image: string;
  overlay?: "default" | "dark" | "vignette" | "side" | "none";
  intensity?: number;
  pattern?: boolean;
  patternImage?: string;
  children?: React.ReactNode;
  className?: string;
  parallax?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], parallax ? ["-5%", "10%"] : ["0%", "0%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.1]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {/* Ken Burns parallax image */}
      <motion.div className="absolute inset-0 will-change-transform" style={{ y, scale }}>
        <img
          src={image}
          alt=""
          aria-hidden
          loading="lazy"
          className="w-full h-full object-cover"
          style={{ opacity: intensity }}
        />
      </motion.div>

      {/* Ornament pattern layer */}
      {pattern && patternImage && (
        <div
          className="absolute inset-0 opacity-[0.025] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url(${patternImage})`,
            backgroundSize: "320px",
            backgroundRepeat: "repeat",
          }}
        />
      )}

      {/* Atmospheric overlay */}
      {overlay === "default" && (
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)] via-[var(--background)]/92 to-[var(--background)]" />
      )}
      {overlay === "dark" && (
        <div className="absolute inset-0 bg-[var(--background)]/94" />
      )}
      {overlay === "vignette" && (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)]/80 via-[var(--background)]/40 to-[var(--background)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,var(--background)_90%)]" />
        </>
      )}
      {overlay === "side" && (
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--background)] via-[var(--background)]/80 to-[var(--background)]/40" />
      )}

      {/* Subtle gold ambient glow — single, soft */}
      <div
        aria-hidden
        className="absolute top-1/3 right-[8%] w-96 h-96 rounded-full bg-[var(--gold)]/[0.04] blur-3xl pointer-events-none"
      />

      {/* Content */}
      <div className="relative">{children}</div>
    </div>
  );
}

/**
 * GoldenParticles — floating ember/incense particle effect
 */
export function GoldenParticles({ count = 20 }: { count?: number }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {Array.from({ length: count }).map((_, i) => {
        const left = (i * 37) % 100;
        const delay = (i * 0.6) % 8;
        const duration = 8 + (i % 5) * 2;
        const size = 2 + (i % 3);
        return (
          <motion.span
            key={i}
            className="absolute rounded-full bg-[var(--gold)]"
            style={{
              left: `${left}%`,
              bottom: "-10px",
              width: size,
              height: size,
              boxShadow: "0 0 8px var(--gold)",
            }}
            animate={{
              y: [0, -800],
              opacity: [0, 0.8, 0],
              x: [0, (i % 2 === 0 ? 40 : -40)],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        );
      })}
    </div>
  );
}