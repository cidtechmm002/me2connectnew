import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { Counter } from "@/components/motion/Counter";
import { Search, Image as ImageIcon, Video, FileText, Play, Download } from "lucide-react";
import vipGala from "@/assets/vip-gala.jpg";
import sheTalks from "@/assets/she-talks.jpg";
import goldAward from "@/assets/gold-award.jpg";
import dubai from "@/assets/dubai-skyline.jpg";
import riseToSky from "@/assets/rise-to-sky.jpg";
import mandalayPalace from "@/assets/myanmar-mandalay-palace.jpg";
import inleSunset from "@/assets/myanmar-inle-sunset.jpg";
import baganDawn from "@/assets/myanmar-bagan-dawn.jpg";
import myanmarDubaiBridge from "@/assets/myanmar-dubai-bridge.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Event Gallery · Me2Connect" },
      { name: "description", content: "Explore stunning moments from Me2Connect fashion events, runway shows, awards and exclusive behind-the-scenes content." },
      { property: "og:title", content: "Event Gallery · Me2Connect" },
      { property: "og:description", content: "Photos, videos and highlights from our international events." },
      { property: "og:image", content: vipGala },
    ],
  }),
  component: Gallery,
});

type Item = {
  src: string;
  type: "Photo" | "Video" | "Document";
  title: string;
  desc: string;
  span?: string;
};

const items: Item[] = [
  { src: vipGala, type: "Photo", title: "Fashion Week 2025 — Opening Ceremony", desc: "Grand opening with stunning runway setup", span: "md:col-span-2 md:row-span-2" },
  { src: goldAward, type: "Photo", title: "Designer Showcase — Luxury Collection", desc: "Exclusive luxury collection presentation" },
  { src: sheTalks, type: "Video", title: "Runway Moments — Evening Wear", desc: "Breathtaking evening wear collection" },
  { src: dubai, type: "Photo", title: "Fashion Photography Session", desc: "Professional session capturing modern style", span: "md:row-span-2" },
  { src: mandalayPalace, type: "Photo", title: "Backstage Preparations", desc: "Behind-the-scenes preparations", span: "md:col-span-2" },
  { src: riseToSky, type: "Video", title: "VIP Lounge Experience", desc: "Exclusive networking opportunities" },
  { src: inleSunset, type: "Photo", title: "International Models Showcase", desc: "Diverse fashion collections" },
  { src: vipGala, type: "Document", title: "Fashion Week Gala Dinner", desc: "Press kit and event programme" },
  { src: baganDawn, type: "Photo", title: "Avant-Garde Collection", desc: "Pushing creative boundaries", span: "md:col-span-2" },
  { src: myanmarDubaiBridge, type: "Photo", title: "Sustainable Fashion Initiative", desc: "Eco-friendly fashion showcase" },
  { src: goldAward, type: "Video", title: "Fashion Technology Integration", desc: "Cutting-edge tech in design" },
  { src: sheTalks, type: "Photo", title: "Cultural Fashion Fusion", desc: "Tradition meets contemporary" },
];

const filters = ["All", "Photos", "Videos", "Documents"] as const;
type Filter = typeof filters[number];

const typeIcon = { Photo: ImageIcon, Video: Video, Document: FileText };

function Gallery() {
  const [filter, setFilter] = useState<Filter>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return items.filter((it) => {
      if (filter === "Photos" && it.type !== "Photo") return false;
      if (filter === "Videos" && it.type !== "Video") return false;
      if (filter === "Documents" && it.type !== "Document") return false;
      if (query && !it.title.toLowerCase().includes(query.toLowerCase())) return false;
      return true;
    });
  }, [filter, query]);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="EVENT GALLERY"
        title="Moments of Brilliance"
        subtitle="Explore stunning moments from our fashion events, runway shows and exclusive behind-the-scenes content."
        image={vipGala}
      />

      {/* STATS */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 py-14 grid grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { n: 500, suffix: "+", l: "Photos", icon: ImageIcon },
          { n: 50, suffix: "+", l: "Videos", icon: Video },
          { n: 25, suffix: "+", l: "Events", icon: FileText },
          { n: 100, suffix: "+", l: "Downloads", icon: Download },
        ].map((s, i) => (
          <Reveal key={s.l} delay={i * 0.06} className="text-center group">
            <s.icon className="h-6 w-6 text-[var(--gold)] mx-auto mb-3" strokeWidth={1.3} />
            <div className="font-display text-4xl text-gradient-gold leading-none font-light">
              <Counter to={s.n} suffix={s.suffix} />
            </div>
            <div className="font-cinzel text-[10px] text-[var(--muted-foreground)] mt-2 tracking-[0.25em]">{s.l}</div>
          </Reveal>
        ))}
      </section>

      {/* FILTERS */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 pb-8">
        <div className="rounded-sm border border-[var(--gold)]/15 bg-[var(--ink)]/60 backdrop-blur-sm p-5 flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2 flex-1 min-w-[220px] border border-[var(--gold)]/15 rounded-full px-4 py-2.5 bg-[var(--obsidian)]/60">
            <Search className="h-4 w-4 text-[var(--gold)]/70" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search gallery..."
              className="flex-1 bg-transparent text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`font-cinzel text-[10px] tracking-[0.2em] px-4 py-2 rounded-full border transition-colors ${
                  filter === f
                    ? "bg-gradient-gold text-obsidian border-transparent shadow-gold"
                    : "border-[var(--gold)]/25 text-[var(--gold)] hover:bg-[var(--gold)]/10"
                }`}
              >
                {f.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between mt-4 px-1">
          <span className="font-cinzel text-[10px] text-[var(--muted-foreground)] tracking-[0.25em]">
            SHOWING {filtered.length} OF {items.length} ITEMS
          </span>
          <span className="font-cinzel text-[10px] text-[var(--gold)]/80 tracking-[0.25em]">NEWEST FIRST</span>
        </div>
      </section>

      {/* MASONRY */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 pb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[220px] gap-4">
          {filtered.map((it, idx) => {
            const Icon = typeIcon[it.type];
            return (
              <motion.div
                key={it.title + idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.7, delay: (idx % 8) * 0.05, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -3 }}
                className={`${it.span ?? ""} group relative overflow-hidden rounded-sm border border-[var(--gold)]/15 hover:border-[var(--gold)]/40 transition-colors`}
              >
                <motion.img
                  src={it.src}
                  alt={it.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--obsidian)] via-[var(--obsidian)]/30 to-transparent" />
                <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 font-cinzel text-[9px] tracking-[0.25em] text-[var(--gold)] bg-[var(--obsidian)]/70 backdrop-blur-sm px-2.5 py-1 rounded-full border border-[var(--gold)]/30">
                  <Icon className="h-3 w-3" /> {it.type.toUpperCase()}
                </span>
                {it.type === "Video" && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                    <span className="h-12 w-12 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold">
                      <Play className="h-5 w-5 text-obsidian" fill="currentColor" />
                    </span>
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-display text-base italic text-[var(--foreground)] leading-snug">{it.title}</h3>
                  <p className="text-xs text-[var(--foreground)]/65 mt-1 line-clamp-2">{it.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 font-cinzel text-xs text-[var(--muted-foreground)] tracking-[0.25em]">
            NO RESULTS FOUND
          </div>
        )}
      </section>
    </SiteLayout>
  );
}
