import { motion } from "framer-motion";
import umbrella from "@/assets/myanmar-umbrella.png";

/**
 * FloatingDecor — scatters the Myanmar umbrella PNG (with its native gold-particle trail)
 * around the page as a soft, drifting cultural accent. Pointer-events disabled.
 */
export function FloatingDecor({
  positions = ["top-right"],
  size = 220,
  opacity = 0.25,
}: {
  positions?: Array<"top-right" | "top-left" | "bottom-right" | "bottom-left" | "mid-right" | "mid-left">;
  size?: number;
  opacity?: number;
}) {
  const map: Record<string, string> = {
    "top-right": "top-[-40px] right-[-40px] rotate-[12deg]",
    "top-left": "top-[-30px] left-[-50px] -rotate-[18deg] scale-x-[-1]",
    "bottom-right": "bottom-[-60px] right-[-30px] rotate-[-8deg]",
    "bottom-left": "bottom-[-40px] left-[-60px] rotate-[20deg] scale-x-[-1]",
    "mid-right": "top-1/2 right-[-80px] -translate-y-1/2 rotate-[5deg]",
    "mid-left": "top-1/3 left-[-90px] -rotate-[10deg] scale-x-[-1]",
  };
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {positions.map((p, i) => (
        <motion.img
          key={p + i}
          src={umbrella}
          alt=""
          className={`absolute ${map[p]} ${i % 2 === 0 ? "animate-drift" : "animate-drift-r"}`}
          style={{ width: size, opacity, filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.5))" }}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        />
      ))}
    </div>
  );
}