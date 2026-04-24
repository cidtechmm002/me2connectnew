import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";

interface VideoCardProps {
  poster: string;
  videoSrc?: string;
  title: string;
  speaker: string;
  duration: string;
  index?: number;
}

export function VideoCard({ poster, videoSrc, title, speaker, duration, index = 0 }: VideoCardProps) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggle = () => {
    if (!videoRef.current) {
      setPlaying((p) => !p);
      return;
    }
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotateX: -12 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className="group relative ornate-frame overflow-hidden bg-[var(--ink)] cursor-pointer"
      style={{ transformPerspective: 1000 }}
      onClick={toggle}
    >
      <div className="relative aspect-[9/16] md:aspect-[3/4] overflow-hidden">
        {videoSrc ? (
          <video
            ref={videoRef}
            src={videoSrc}
            poster={poster}
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
        ) : (
          <img
            src={poster}
            alt={title}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
        )}
        {/* Cinematic gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--obsidian)] via-[var(--obsidian)]/30 to-transparent" />

        {/* Play button — animated */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ opacity: playing ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            className="relative h-16 w-16 rounded-full bg-[var(--gold)]/95 flex items-center justify-center shadow-gold"
          >
            {/* pulse rings */}
            <motion.span
              className="absolute inset-0 rounded-full bg-[var(--gold)]/40"
              animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
            />
            <motion.span
              className="absolute inset-0 rounded-full bg-[var(--gold)]/30"
              animate={{ scale: [1, 1.9, 1], opacity: [0.4, 0, 0.4] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut", delay: 0.6 }}
            />
            {playing ? (
              <Pause className="h-6 w-6 text-[var(--obsidian)] relative z-10" fill="currentColor" />
            ) : (
              <Play className="h-6 w-6 text-[var(--obsidian)] ml-1 relative z-10" fill="currentColor" />
            )}
          </motion.div>
        </motion.div>

        {/* Bottom info */}
        <div className="absolute inset-x-0 bottom-0 p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="font-cinzel text-[9px] text-[var(--gold)] tracking-[0.3em]">SHE TALKS</span>
            <span className="font-cinzel text-[9px] text-[var(--foreground)]/70">{duration}</span>
          </div>
          <h3 className="font-display text-xl text-[var(--foreground)] leading-tight">{title}</h3>
          <p className="text-[11px] text-[var(--gold-soft)]/80 mt-1 font-cinzel tracking-wider">{speaker}</p>
        </div>
      </div>
    </motion.div>
  );
}
