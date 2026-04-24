import { motion, type Variants } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";

/**
 * useMounted — guards SSR/hydration.
 * Returns false on the server and during the very first client render,
 * then flips to true. Use to skip framer-motion `initial` variants on SSR
 * so the markup matches between server and client.
 */
function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}

const variants: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const mounted = useMounted();
  return (
    <motion.div
      className={className}
      initial={mounted ? "hidden" : false}
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SplitWords({
  text,
  className,
  wordClassName,
  delay = 0,
}: {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
}) {
  const mounted = useMounted();
  const words = text.split(" ");
  return (
    <span className={className} aria-label={text}>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom mr-[0.25em]">
          <motion.span
            className={`inline-block ${wordClassName ?? ""}`}
            initial={mounted ? { y: "110%", opacity: 0 } : false}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              duration: 0.9,
              delay: delay + i * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {w}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/**
 * RevealMask — Burmese silk curtain reveal. A gold band sweeps across,
 * unmasking the content beneath. Cinematic alternative to plain fade.
 */
export function RevealMask({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const mounted = useMounted();
  return (
    <span className={`relative inline-block overflow-hidden ${className ?? ""}`}>
      <motion.span
        className="block"
        initial={mounted ? { y: "100%", opacity: 0 } : false}
        whileInView={{ y: "0%", opacity: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.span>
      <motion.span
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-[var(--gold-deep)] via-[var(--gold)] to-[var(--gold-soft)]"
        initial={mounted ? { x: "-101%" } : false}
        whileInView={{ x: ["-101%", "0%", "101%"] }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1.4, delay, times: [0, 0.5, 1], ease: [0.7, 0, 0.3, 1] }}
      />
    </span>
  );
}