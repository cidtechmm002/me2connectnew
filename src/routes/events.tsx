import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { Counter } from "@/components/motion/Counter";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { Calendar, MapPin, ArrowRight, CheckCircle2, Clock, XCircle } from "lucide-react";
import vipGala from "@/assets/vip-gala.jpg";
import goldAward from "@/assets/gold-award.jpg";
import dubai from "@/assets/dubai-skyline.jpg";
import sheTalks from "@/assets/she-talks.jpg";
import riseToSky from "@/assets/rise-to-sky.jpg";
import mandalayPalace from "@/assets/myanmar-mandalay-palace.jpg";
import inleSunset from "@/assets/myanmar-inle-sunset.jpg";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events & Exhibitions · Me2Connect" },
      { name: "description", content: "Discover our upcoming and ongoing international events — culinary awards, leadership summits, fashion weeks and premium business networking across the UAE." },
      { property: "og:title", content: "Events · Me2Connect" },
      { property: "og:description", content: "Curated international events across Dubai and Abu Dhabi." },
      { property: "og:image", content: vipGala },
    ],
  }),
  component: Events,
});

type Status = "Upcoming" | "Ongoing" | "Completed";

type EventItem = {
  img: string;
  category: string;
  status: Status;
  title: string;
  desc: string;
  date: string;
  loc: string;
  cta: string;
  featured?: boolean;
};

const events: EventItem[] = [
  { img: vipGala, category: "Awards", status: "Upcoming", title: "Cruise Food Festival & International Culinary Awards 2026", desc: "An exclusive culinary celebration aboard a luxury cruise.", date: "Feb 15, 2026", loc: "Cruise · Deira (opp. Radisson Blu), Dubai", cta: "Register Now", featured: true },
  { img: goldAward, category: "Awards", status: "Upcoming", title: "Elite Leadership Awards 2026", desc: "Icon of Generation: Leaders of Yesterday, Today & Tomorrow.", date: "Feb 15, 2026", loc: "Cruise · Deira, Dubai", cta: "Register Now", featured: true },
  { img: dubai, category: "Business", status: "Ongoing", title: "Premium Business Networking — Star Cinemas Edition", desc: "High-energy premium business networking event.", date: "Dec 22, 2025", loc: "Star Cinemas, Al Ghurair", cta: "Invite Only" },
  { img: mandalayPalace, category: "Awards", status: "Ongoing", title: "International Brands & Icons Award", desc: "Celebrating global leaders & visionary brands redefining excellence.", date: "Dec 21, 2025", loc: "Royal Desert, Abu Dhabi", cta: "Invite Only" },
  { img: sheTalks, category: "Beauty", status: "Completed", title: "Mrs. India Middle East — Season 3", desc: "Who will be the next queen?", date: "Dec 21, 2025", loc: "Royal Desert, Abu Dhabi", cta: "Closed" },
  { img: riseToSky, category: "Awards", status: "Completed", title: "International Fashion Awards", desc: "A global celebration of creativity, innovation & excellence in fashion.", date: "Dec 21, 2025", loc: "Royal Desert, Abu Dhabi", cta: "Closed" },
  { img: inleSunset, category: "Fashion", status: "Completed", title: "International Desert Fashion Week — Designers & Brands Showcase", desc: "Showcase your brand at the International Desert Fashion Week.", date: "Dec 21, 2025", loc: "Royal Desert, Abu Dhabi", cta: "Closed" },
  { img: dubai, category: "Business", status: "Completed", title: "Premium Business Networking & IDFW Kids Pre-Show", desc: "Premium business networking with IDFW Kids Pre-Show.", date: "Dec 06, 2025", loc: "Dubai", cta: "Closed" },
  { img: vipGala, category: "Fashion", status: "Completed", title: "Ramp to Stardom — International Desert Fashion Week", desc: "Aspiring models walking the ramp at IDFW.", date: "Dec 21, 2025", loc: "Royal Desert, Abu Dhabi", cta: "Closed" },
];

const statuses = ["All", "Upcoming", "Ongoing", "Completed"] as const;
type Filter = typeof statuses[number];

const statusBadge: Record<Status, { icon: typeof CheckCircle2; cls: string }> = {
  Upcoming: { icon: Clock, cls: "text-[var(--gold)] border-[var(--gold)]/40 bg-[var(--gold)]/10" },
  Ongoing: { icon: CheckCircle2, cls: "text-emerald-300 border-emerald-400/40 bg-emerald-400/10" },
  Completed: { icon: XCircle, cls: "text-[var(--muted-foreground)] border-[var(--muted-foreground)]/30 bg-[var(--muted-foreground)]/10" },
};

function Events() {
  const [filter, setFilter] = useState<Filter>("All");
  const filtered = useMemo(
    () => (filter === "All" ? events : events.filter((e) => e.status === filter)),
    [filter],
  );

  const counts = {
    total: events.length,
    upcoming: events.filter((e) => e.status === "Upcoming").length,
    ongoing: events.filter((e) => e.status === "Ongoing").length,
    completed: events.filter((e) => e.status === "Completed").length,
  };

  return (
    <SiteLayout>
      <PageHero
        eyebrow="EVENTS & EXHIBITIONS"
        title="Discover Amazing Events"
        subtitle="Join thousands of professionals at our carefully curated international events across the UAE."
        image={vipGala}
      />

      {/* STATS */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 py-14 grid grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { n: counts.total, l: "Total Events" },
          { n: counts.upcoming, l: "Upcoming" },
          { n: counts.ongoing, l: "Ongoing" },
          { n: counts.completed, l: "Completed" },
        ].map((s, i) => (
          <Reveal key={s.l} delay={i * 0.06} className="text-center">
            <div className="font-display text-4xl md:text-5xl text-gradient-gold leading-none font-light">
              <Counter to={s.n} />
            </div>
            <div className="font-cinzel text-[10px] text-[var(--muted-foreground)] mt-2 tracking-[0.25em]">
              {s.l.toUpperCase()}
            </div>
          </Reveal>
        ))}
      </section>

      {/* FILTERS */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 pb-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {statuses.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`font-cinzel text-[10px] tracking-[0.25em] px-5 py-2.5 rounded-full border transition-colors ${
                filter === f
                  ? "bg-gradient-gold text-obsidian border-transparent shadow-gold"
                  : "border-[var(--gold)]/25 text-[var(--gold)] hover:bg-[var(--gold)]/10"
              }`}
            >
              {f.toUpperCase()}
            </button>
          ))}
        </div>
      </section>

      {/* GRID */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((e, i) => {
            const Sb = statusBadge[e.status];
            return (
              <motion.div
                key={e.title + i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: (i % 6) * 0.07, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-sm border border-[var(--gold)]/15 hover:border-[var(--gold)]/40 transition-colors bg-[var(--ink)]/60 backdrop-blur-sm"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <motion.img
                    src={e.img}
                    alt={e.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] to-transparent" />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    <span className={`inline-flex items-center gap-1.5 font-cinzel text-[9px] tracking-[0.25em] px-2.5 py-1 rounded-full border ${Sb.cls}`}>
                      <Sb.icon className="h-3 w-3" /> {e.status.toUpperCase()}
                    </span>
                    <span className="font-cinzel text-[9px] tracking-[0.25em] px-2.5 py-1 rounded-full border border-[var(--gold)]/30 text-[var(--gold)] bg-[var(--obsidian)]/70">
                      {e.category.toUpperCase()}
                    </span>
                    {e.featured && (
                      <span className="font-cinzel text-[9px] tracking-[0.25em] px-2.5 py-1 rounded-full bg-gradient-gold text-obsidian">
                        FEATURED
                      </span>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl italic text-[var(--foreground)] leading-snug">{e.title}</h3>
                  <p className="mt-2 text-sm text-[var(--foreground)]/65 leading-relaxed line-clamp-2">{e.desc}</p>
                  <div className="mt-4 space-y-1.5 text-xs text-[var(--muted-foreground)]">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-3 w-3 text-[var(--gold)]" /> {e.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-3 w-3 text-[var(--gold)]" /> {e.loc}
                    </div>
                  </div>
                  <div className="mt-5 flex items-center justify-between border-t border-[var(--gold)]/10 pt-4">
                    <span className="font-cinzel text-[9px] text-[var(--gold)] tracking-[0.25em]">FREE EVENT</span>
                    <button
                      disabled={e.cta === "Closed"}
                      className={`inline-flex items-center gap-1.5 font-cinzel text-[10px] tracking-[0.2em] ${
                        e.cta === "Closed" ? "text-[var(--muted-foreground)]" : "text-[var(--gold)] hover:gap-3"
                      } transition-all`}
                    >
                      {e.cta.toUpperCase()} {e.cta !== "Closed" && <ArrowRight className="h-3 w-3" />}
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-14 flex justify-center">
          <MagneticButton>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 bg-gradient-gold text-obsidian font-cinzel text-[11px] font-semibold rounded-full shadow-gold tracking-[0.2em]"
            >
              HOST AN EVENT WITH US <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </MagneticButton>
        </div>
      </section>
    </SiteLayout>
  );
}
