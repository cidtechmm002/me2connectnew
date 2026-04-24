import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal, SplitWords } from "@/components/motion/Reveal";
import { Counter } from "@/components/motion/Counter";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { OrnamentDivider } from "@/components/motion/OrnamentDivider";
import { HeritageBackdrop } from "@/components/motion/HeritageBackdrop";
import { VideoCard } from "@/components/motion/VideoCard";
import { FloatingDecor } from "@/components/motion/FloatingDecor";
import {
  Camera,
  Film,
  Youtube,
  Mic2,
  Award,
  Users,
  ArrowRight,
  Phone,
  Check,
  Crown,
  Calendar,
  MapPin,
  Clock,
  Search,
} from "lucide-react";
import sheTalks from "@/assets/she-talks.jpg";
import vipGala from "@/assets/vip-gala.jpg";
import dubai from "@/assets/dubai-skyline.jpg";
import goldAward from "@/assets/gold-award.jpg";
import inleSunset from "@/assets/myanmar-inle-sunset.jpg";
import patheinUmbrella from "@/assets/pathein-umbrella.jpg";

export const Route = createFileRoute("/she-talks")({
  head: () => ({
    meta: [
      { title: "She Talks UAE · Me2Connect" },
      { name: "description", content: "An inspiring podcast initiative empowering women in leadership across the UAE — featuring 50+ remarkable women leaders." },
      { property: "og:title", content: "She Talks UAE · Me2Connect" },
      { property: "og:description", content: "Empowering Women in Leadership — podcast & summit platform." },
      { property: "og:image", content: sheTalks },
    ],
  }),
  component: SheTalks,
});

const benefits = [
  { icon: Camera, t: "Professional Studio Shoot", d: "One-hour exclusive shoot with experienced host in professional studio." },
  { icon: Film, t: "Social Media Content", d: "Professionally edited short reels optimised for social platforms." },
  { icon: Youtube, t: "YouTube Feature", d: "20–30 minute feature video published on our official YouTube channel." },
  { icon: Mic2, t: "Panel Participation", d: "Live panel participation opportunities at prestigious global events." },
  { icon: Award, t: "Recognition & Awards", d: "On-stage honour as a Women Icon with certificate and standee display." },
  { icon: Users, t: "Networking Access", d: "Exclusive access to networking groups and ongoing updates via WhatsApp." },
];

const packages = [
  {
    name: "Gold Package",
    price: "AED 8,000",
    sub: "Complete media package with global exposure",
    popular: true,
    points: [
      "All Silver Package Benefits",
      "Premiere in Star Cinemas with VIP Guests",
      "15–20 minute Full-Length Feature Video",
      "6–8 professionally edited reels",
      "Live panel participation at global events",
      "Product/service display opportunities",
      "Media assistance and press coverage",
      "Presentation video creation",
      "Priority networking access",
    ],
    cta: "Select Gold Package",
  },
  {
    name: "Silver Package",
    price: "AED 2,000",
    sub: "1-hour interview shoot with professional editing",
    points: [
      "One-hour exclusive shoot with the host in-studio",
      "Professionally edited short reels for social media",
      "On-stage honour as a Women Icon",
      "Display & standee space at events",
      "Access to networking group via WhatsApp",
      "Digital certificate of participation",
    ],
    cta: "Select Silver Package",
  },
  {
    name: "Monthly Promotion",
    price: "AED 1,000/mo",
    sub: "Ongoing visibility and marketing support",
    points: [
      "Extra reels and exclusive content",
      "Exclusive networking opportunities",
      "Direct marketing assistance",
      "Ongoing visibility support",
      "Monthly performance reports",
      "Social media campaign management",
    ],
    cta: "Select Monthly",
  },
];

const events = [
  { t: "Women in Leadership Awards 2025", d: "Business Fiesta Awards — celebrating exceptional women leaders.", date: "August 9, 2025", time: "10 AM – 7 PM", loc: "Millennium Plaza, Downtown Dubai" },
  { t: "Global Summit Panel", d: "Featured women speak on global summit stages.", date: "Coming Soon", time: "TBA", loc: "International Convention Center" },
  { t: "Networking & Recognition Event", d: "Exclusive networking opportunities for participants.", date: "Quarterly", time: "Various Times", loc: "Multiple UAE Locations" },
];

const featuredTalks = [
  { poster: sheTalks, title: "The Quiet Power of Patience", speaker: "DAW THIRI · FOUNDER, AURA HOLDINGS", duration: "04:12", category: "Leadership", season: "S2" },
  { poster: vipGala, title: "Building Across Borders", speaker: "MS. NOOR AL-MANSOURI · DUBAI", duration: "03:48", category: "Business", season: "S2" },
  { poster: dubai, title: "From Silk to Skyscraper", speaker: "DR. SOE MYAT · INVESTOR", duration: "06:01", category: "Business", season: "S1" },
  { poster: patheinUmbrella, title: "Craft, Then Capital", speaker: "DAW MOE · ARTISAN-CEO", duration: "04:55", category: "Heritage", season: "S2" },
  { poster: goldAward, title: "The Mentor's Mirror", speaker: "PANEL · ANNUAL SUMMIT", duration: "07:30", category: "Leadership", season: "S1" },
  { poster: inleSunset, title: "Heritage as Currency", speaker: "MA HNIN · CULTURAL CURATOR", duration: "05:22", category: "Heritage", season: "S2" },
];

const categories = ["All", "Leadership", "Business", "Heritage"] as const;

function SheTalks() {
  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState<typeof categories[number]>("All");

  const filteredTalks = useMemo(() => {
    const q = query.trim().toLowerCase();
    return featuredTalks.filter((t) => {
      const matchCat = activeCat === "All" || t.category === activeCat;
      const matchQ = !q || t.title.toLowerCase().includes(q) || t.speaker.toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  }, [query, activeCat]);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="A ME2CONNECT INITIATIVE"
        title="SHE TALKS UAE"
        subtitle="Empowering Women in Leadership — a podcast and summit platform celebrating the voices, journeys and achievements of women who lead."
        image={sheTalks}
      />

      {/* HERO SUB-CTA */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 -mt-10 pb-16">
        <Reveal>
          <div className="rounded-sm border border-[var(--gold)]/20 bg-[var(--ink)]/70 backdrop-blur-sm p-8 grid md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2 flex flex-wrap gap-6">
              {[
                { n: "50+", l: "Women Leaders Featured" },
                { n: "Global", l: "Summit Stages" },
                { n: "Awards", l: "International Recognition" },
              ].map((x) => (
                <div key={x.l} className="flex items-center gap-3">
                  <span className="font-display text-2xl text-gradient-gold">{x.n}</span>
                  <span className="font-cinzel text-[10px] text-[var(--muted-foreground)] tracking-[0.25em]">
                    {x.l.toUpperCase()}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 md:justify-end">
              <MagneticButton>
                <Link to="/contact" className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-gold text-obsidian font-cinzel text-[10px] font-semibold rounded-full shadow-gold tracking-[0.2em]">
                  JOIN SHE TALKS
                </Link>
              </MagneticButton>
              <a href="#talks" className="inline-flex items-center gap-2 px-5 py-3 border border-[var(--gold)]/30 text-[var(--gold)] font-cinzel text-[10px] rounded-full hover:bg-[var(--gold)]/10 tracking-[0.2em]">
                VIEW FEATURED
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ABOUT */}
      <HeritageBackdrop image={dubai} intensity={0.16} overlay="vignette" className="border-y border-[var(--gold)]/10">
        <FloatingDecor positions={["top-left"]} size={220} opacity={0.13} />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12 py-24 grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <OrnamentDivider label="ABOUT SHE TALKS" />
            <h2 className="font-display text-4xl md:text-5xl mt-6 leading-tight">
              <SplitWords text="A platform for the" />
              <br />
              <span className="italic text-gradient-gold"><SplitWords text="women who lead." delay={0.3} /></span>
            </h2>
            <p className="mt-6 text-[var(--foreground)]/75 leading-relaxed">
              SHE TALKS UAE is an inspiring podcast initiative by Me2Connect, designed to empower
              women in leadership and create a space where their voices, journeys and achievements
              are celebrated.
            </p>
            <p className="mt-4 text-[var(--foreground)]/70 leading-relaxed">
              Featured women are invited to speak on global summit stages, are honoured for their
              impact, and gain opportunities to showcase their products and services, as well as
              lead international discussion panels.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative">
              <div className="absolute -inset-4 bg-[var(--gold)]/10 blur-3xl rounded-full" />
              <div className="relative soft-card border border-[var(--gold)]/20 overflow-hidden hover-lift img-sweep">
                <img src={sheTalks} alt="She Talks stage" className="w-full aspect-[4/5] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--obsidian)] via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="font-cinzel text-[10px] text-[var(--gold)] tracking-[0.3em]">SEASONS 1 & 2</div>
                  <div className="font-display text-3xl italic mt-1">50+ Leaders Featured</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </HeritageBackdrop>

      {/* IMPACT */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 py-20">
        <Reveal className="text-center mb-12">
          <OrnamentDivider label="OUR IMPACT" />
          <h2 className="font-display text-4xl md:text-5xl mt-6 leading-tight">
            <span className="text-[var(--foreground)]">Celebrating</span>{" "}
            <span className="italic text-gradient-gold">achievement.</span>
          </h2>
        </Reveal>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { n: 50, suffix: "+", l: "Women Leaders Featured" },
            { n: 100, suffix: "+", l: "YouTube Interviews Published" },
            { n: 2, suffix: "", l: "Successful Seasons" },
            { n: 2025, suffix: "", l: "Leadership Awards" },
          ].map((s, i) => (
            <Reveal key={s.l} delay={i * 0.07} className="text-center">
              <div className="font-display text-4xl md:text-5xl text-gradient-gold leading-none font-light">
                <Counter to={s.n} suffix={s.suffix} />
              </div>
              <div className="font-cinzel text-[10px] text-[var(--muted-foreground)] mt-3 tracking-[0.25em]">
                {s.l.toUpperCase()}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FEATURED TALKS — VIDEOS */}
      <HeritageBackdrop image={vipGala} intensity={0.16} overlay="vignette" className="border-y border-[var(--gold)]/10">
        <FloatingDecor positions={["top-right", "bottom-left"]} size={200} opacity={0.14} />
        <section id="talks" className="relative mx-auto max-w-7xl px-6 lg:px-12 py-24">
          <Reveal className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div>
              <OrnamentDivider label="FEATURED TALKS" />
              <h2 className="font-display text-4xl md:text-5xl mt-6 leading-tight">
                <span className="text-[var(--foreground)]">Watch the</span>{" "}
                <span className="italic shimmer-text">voices.</span>
              </h2>
            </div>
            <span className="font-cinzel text-[10px] text-[var(--muted-foreground)] tracking-[0.25em]">
              CLICK TO PLAY · MUTED BY DEFAULT
            </span>
          </Reveal>

          {/* Search + filter bar */}
          <Reveal className="mb-10">
            <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
              <div className="relative flex-1 max-w-xl">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--gold)]/70" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search talks, speakers..."
                  className="w-full soft-card border border-[var(--gold)]/25 bg-[var(--ink)]/70 backdrop-blur-sm pl-11 pr-4 py-3 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)]/70 font-cinzel tracking-[0.1em] focus:outline-none focus:border-[var(--gold)]/60 transition-colors"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((c) => (
                  <motion.button
                    key={c}
                    onClick={() => setActiveCat(c)}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.96 }}
                    className={`px-4 py-2.5 font-cinzel text-[10px] tracking-[0.25em] rounded-full border transition-all ${
                      activeCat === c
                        ? "bg-gradient-gold text-obsidian border-[var(--gold)] shadow-gold"
                        : "border-[var(--gold)]/25 text-[var(--gold)] hover:bg-[var(--gold)]/10 hover:border-[var(--gold)]/50"
                    }`}
                  >
                    {c.toUpperCase()}
                  </motion.button>
                ))}
              </div>
            </div>
            <div className="mt-4 font-cinzel text-[10px] text-[var(--muted-foreground)] tracking-[0.2em]">
              SHOWING {filteredTalks.length} OF {featuredTalks.length} TALKS
            </div>
          </Reveal>

          {filteredTalks.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredTalks.map((t, i) => (
                <VideoCard key={t.title + i} {...t} index={i} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 soft-card border border-[var(--gold)]/15 bg-[var(--ink)]/50 backdrop-blur-sm">
              <p className="font-display text-2xl italic text-[var(--foreground)]/70">No talks match your search.</p>
              <button
                onClick={() => { setQuery(""); setActiveCat("All"); }}
                className="mt-4 font-cinzel text-[10px] text-[var(--gold)] tracking-[0.25em] link-underline"
              >
                CLEAR FILTERS
              </button>
            </div>
          )}
        </section>
      </HeritageBackdrop>

      {/* WHAT PARTICIPANTS GET */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 py-24">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <OrnamentDivider label="WHAT YOU GET" />
          <h2 className="font-display text-4xl md:text-5xl mt-6 leading-tight">
            <span className="text-[var(--foreground)]">Comprehensive support &</span>{" "}
            <span className="italic text-gradient-gold">opportunity.</span>
          </h2>
          <p className="mt-5 text-[var(--foreground)]/70">
            Designed to elevate your leadership profile across the UAE and beyond.
          </p>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b, i) => (
            <motion.div
              key={b.t}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.07, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className={`group p-7 ${i % 2 === 0 ? "soft-card" : "soft-card-alt"} border border-[var(--gold)]/15 bg-[var(--ink)]/60 backdrop-blur-sm hover:border-[var(--gold)]/50 transition-all hover-lift relative overflow-hidden`}
            >
              <div className="absolute -right-6 -top-6 w-28 h-28 rounded-full bg-[var(--gold)]/0 group-hover:bg-[var(--gold)]/12 blur-2xl transition-all duration-700" />
              <b.icon className="h-7 w-7 text-[var(--gold)]" strokeWidth={1.4} />
              <h3 className="font-display text-xl italic mt-4">{b.t}</h3>
              <p className="text-sm text-[var(--foreground)]/70 mt-2 leading-relaxed">{b.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PACKAGES */}
      <HeritageBackdrop image={inleSunset} intensity={0.16} overlay="vignette" className="border-y border-[var(--gold)]/10">
        <FloatingDecor positions={["bottom-right"]} size={240} opacity={0.13} />
        <section className="relative mx-auto max-w-7xl px-6 lg:px-12 py-24">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <OrnamentDivider label="PARTICIPATION PACKAGES" />
            <h2 className="font-display text-4xl md:text-5xl mt-6 leading-tight">
              <span className="text-[var(--foreground)]">Choose your</span>{" "}
              <span className="italic text-gradient-gold">tier.</span>
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {packages.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                className={`relative p-8 ${i % 2 === 0 ? "soft-card" : "soft-card-alt"} border bg-[var(--ink)]/70 backdrop-blur-sm transition-all hover-lift ${
                  p.popular ? "border-[var(--gold)]/60 shadow-gold" : "border-[var(--gold)]/15 hover:border-[var(--gold)]/40"
                }`}
              >
                {p.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 font-cinzel text-[9px] tracking-[0.3em] bg-gradient-gold text-obsidian px-3 py-1 rounded-full shadow-gold">
                    MOST POPULAR
                  </span>
                )}
                <div className="font-cinzel text-[10px] text-[var(--gold)] tracking-[0.3em]">
                  {p.name.toUpperCase()}
                </div>
                <div className="mt-3 font-display text-4xl text-gradient-gold leading-none">{p.price}</div>
                <p className="text-sm text-[var(--foreground)]/65 mt-2">{p.sub}</p>
                <ul className="mt-6 space-y-2.5">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-sm text-[var(--foreground)]/80">
                      <Check className="h-3.5 w-3.5 text-[var(--gold)] mt-1 shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <MagneticButton>
                  <Link
                    to="/contact"
                    className={`mt-7 inline-flex items-center justify-center gap-2 w-full px-5 py-3.5 font-cinzel text-[10px] rounded-full tracking-[0.25em] ${
                      p.popular
                        ? "bg-gradient-gold text-obsidian shadow-gold"
                        : "border border-[var(--gold)]/30 text-[var(--gold)] hover:bg-[var(--gold)]/10"
                    }`}
                  >
                    {p.cta.toUpperCase()}
                  </Link>
                </MagneticButton>
              </motion.div>
            ))}
          </div>
        </section>
      </HeritageBackdrop>

      {/* SEASON 3 SPOTLIGHT */}
      <section className="relative overflow-hidden border-y border-[var(--gold)]/10">
        <motion.div
          initial={{ scale: 1.15, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.35 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <img src={vipGala} alt="" className="w-full h-full object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)]/85 via-[var(--background)]/65 to-[var(--background)]" />
        <div className="relative mx-auto max-w-5xl px-6 py-24 text-center">
          <Reveal>
            <Crown className="h-8 w-8 text-[var(--gold)] mx-auto mb-4" strokeWidth={1.3} />
            <div className="font-cinzel text-[10px] text-[var(--gold)] tracking-[0.4em]">
              SEASON 3 · 2025 FLAGSHIP EVENT
            </div>
            <h2 className="font-display text-5xl md:text-6xl mt-5 leading-[0.95]">
              <span className="text-[var(--foreground)]">SHE TALKS</span>{" "}
              <span className="italic shimmer-text">Global Awards Gala</span>
            </h2>
            <p className="mt-5 text-base text-[var(--foreground)]/75 max-w-2xl mx-auto">
              The most prestigious celebration of women leadership in the Middle East.
              <br />
              100+ Global Leaders · 20 Countries · Live on International Media.
            </p>
            <div className="mt-8 grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
              {[
                { icon: Calendar, l: "Date", v: "November 23, 2025" },
                { icon: Clock, l: "Time", v: "10 AM – 7 PM" },
                { icon: MapPin, l: "Venue", v: "Millennium Plaza, Dubai" },
              ].map((x) => (
                <div key={x.l} className="rounded-sm border border-[var(--gold)]/20 bg-[var(--ink)]/60 backdrop-blur-sm p-4 text-center">
                  <x.icon className="h-4 w-4 text-[var(--gold)] mx-auto mb-2" />
                  <div className="font-cinzel text-[9px] text-[var(--muted-foreground)] tracking-[0.25em]">
                    {x.l.toUpperCase()}
                  </div>
                  <div className="text-sm text-[var(--foreground)]/90 mt-1">{x.v}</div>
                </div>
              ))}
            </div>
            <div className="mt-8 font-cinzel text-[9px] text-[var(--muted-foreground)] tracking-[0.3em]">
              AS FEATURED IN
            </div>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mt-3 font-cinzel text-xs text-[var(--gold)]/80 tracking-[0.2em]">
              <span>KHALEEJ TIMES</span>
              <span>·</span>
              <span>GULF NEWS</span>
              <span>·</span>
              <span>EMIRATES WOMAN</span>
              <span>·</span>
              <span>ARABIAN BUSINESS</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* UPCOMING EVENTS */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 py-24">
        <Reveal className="text-center mb-12">
          <OrnamentDivider label="SHE TALKS · UPCOMING" />
          <h2 className="font-display text-4xl md:text-5xl mt-6 leading-tight">
            <span className="text-[var(--foreground)]">Awards &</span>{" "}
            <span className="italic text-gradient-gold">recognition.</span>
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-5">
          {events.map((e, i) => (
            <motion.div
              key={e.t}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="p-7 rounded-sm border border-[var(--gold)]/15 bg-[var(--ink)]/60 backdrop-blur-sm hover:border-[var(--gold)]/40 transition-all"
            >
              <h3 className="font-display text-xl italic">{e.t}</h3>
              <p className="text-sm text-[var(--foreground)]/65 mt-2">{e.d}</p>
              <div className="mt-5 space-y-1.5 text-xs text-[var(--muted-foreground)]">
                <div className="flex items-center gap-2"><Calendar className="h-3 w-3 text-[var(--gold)]" /> {e.date}</div>
                <div className="flex items-center gap-2"><Clock className="h-3 w-3 text-[var(--gold)]" /> {e.time}</div>
                <div className="flex items-center gap-2"><MapPin className="h-3 w-3 text-[var(--gold)]" /> {e.loc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* APPLY CTA */}
      <section className="relative overflow-hidden border-t border-[var(--gold)]/10">
        <motion.img
          src={sheTalks}
          alt=""
          loading="lazy"
          initial={{ scale: 1.15 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)] via-[var(--background)]/85 to-[var(--background)]" />
        <div className="relative mx-auto max-w-3xl px-6 py-24 text-center">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              <span className="text-[var(--foreground)]">Ready to share your</span>{" "}
              <span className="italic shimmer-text">story?</span>
            </h2>
            <p className="mt-5 text-base text-[var(--foreground)]/70">
              Become part of a movement celebrating women in leadership.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center text-sm">
              {["+971 543 791 093", "+971 589 917 404", "+971 501 026 082"].map((p) => (
                <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 text-[var(--gold)] font-cinzel text-xs tracking-[0.15em] hover:text-[var(--gold-soft)]">
                  <Phone className="h-3.5 w-3.5" /> {p}
                </a>
              ))}
            </div>
            <MagneticButton>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2.5 mt-9 px-9 py-4 bg-gradient-gold text-obsidian font-cinzel text-[11px] font-semibold rounded-full shadow-gold tracking-[0.2em]"
              >
                APPLY NOW <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </MagneticButton>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
