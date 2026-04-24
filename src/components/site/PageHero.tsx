import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SplitWords } from "@/components/motion/Reveal";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.25, 0]);
  return (
    <section ref={ref} className="relative overflow-hidden border-b border-[var(--gold)]/10">
      {image && (
        <>
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})`, y, scale, opacity }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)]/80 via-[var(--background)]/90 to-[var(--background)]" />
          {/* Floating accent orbs */}
          <motion.div
            className="absolute top-10 right-10 w-64 h-64 rounded-full bg-[var(--gold)]/10 blur-3xl"
            animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 left-10 w-72 h-72 rounded-full bg-[var(--gold-deep)]/15 blur-3xl"
            animate={{ y: [0, 20, 0], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </>
      )}
      <div className="relative mx-auto max-w-4xl px-6 py-20 lg:py-28 text-center">
        {eyebrow && (
          <motion.div
            initial={{ opacity: 0, y: 10, letterSpacing: "0.1em" }}
            animate={{ opacity: 1, y: 0, letterSpacing: "0.4em" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-cinzel text-[10px] text-[var(--gold)] mb-5 tracking-[0.4em]"
          >
            {eyebrow}
          </motion.div>
        )}
        <h1 className="font-display text-4xl md:text-6xl font-light text-gradient-gold leading-[1.05] tracking-tight">
          <SplitWords text={title} delay={0.2} />
        </h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + 0.08 * title.split(" ").length, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 max-w-xl mx-auto text-base text-[var(--foreground)]/70 leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 64, opacity: 1 }}
          transition={{ delay: 0.9, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="gold-divider mx-auto mt-8"
        />
      </div>
    </section>
  );
}