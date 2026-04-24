import { useEffect, useState } from "react";
import { motion } from "framer-motion";

/**
 * Typewriter — lightweight typing effect that respects SSR.
 * Optionally cycles through multiple strings.
 */
export function Typewriter({
  words,
  className,
  cursorClassName = "text-[var(--gold)]",
  speed = 55,
  pause = 1600,
  loop = true,
}: {
  words: string[];
  className?: string;
  cursorClassName?: string;
  speed?: number;
  pause?: number;
  loop?: boolean;
}) {
  const [i, setI] = useState(0);
  const [display, setDisplay] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    let t: ReturnType<typeof setTimeout>;
    if (!deleting && display.length < word.length) {
      t = setTimeout(() => setDisplay(word.slice(0, display.length + 1)), speed);
    } else if (!deleting && display.length === word.length) {
      if (!loop && i === words.length - 1) return;
      t = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && display.length > 0) {
      t = setTimeout(() => setDisplay(word.slice(0, display.length - 1)), speed / 2);
    } else {
      setDeleting(false);
      setI((p) => (p + 1) % words.length);
      return;
    }
    return () => clearTimeout(t);
  }, [display, deleting, i, words, speed, pause, loop]);

  return (
    <span className={className}>
      {display}
      <motion.span
        aria-hidden
        className={`inline-block w-[2px] h-[0.9em] align-[-0.05em] ml-1 bg-current ${cursorClassName}`}
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
      />
    </span>
  );
}