import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Reveal, SplitWords } from "@/components/motion/Reveal";
import { Typewriter } from "@/components/motion/Typewriter";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { Counter } from "@/components/motion/Counter";
import { Marquee } from "@/components/motion/Marquee";
import { HeritageBackdrop } from "@/components/motion/HeritageBackdrop";
import { OrnamentDivider } from "@/components/motion/OrnamentDivider";
import { FloatingDecor } from "@/components/motion/FloatingDecor";
import { Tilt } from "@/components/motion/Tilt";
import baganDawn from "@/assets/myanmar-bagan-dawn.jpg";
import shwedagonMonks from "@/assets/myanmar-shwedagon-monks.jpg";
import inleSunset from "@/assets/myanmar-inle-sunset.jpg";
import mandalayPalace from "@/assets/myanmar-mandalay-palace.jpg";
import myanmarDubaiBridge from "@/assets/myanmar-dubai-bridge.jpg";
import myanmarPattern from "@/assets/myanmar-pattern-ornate.jpg";
import patheinUmbrella from "@/assets/pathein-umbrella.jpg";
import heritageUbein from "@/assets/heritage-ubein.jpg";
import vipGala from "@/assets/vip-gala.jpg";
import dubai from "@/assets/dubai-skyline.jpg";
import goldAward from "@/assets/gold-award.jpg";
import sheTalks from "@/assets/she-talks.jpg";
import riseToSky from "@/assets/rise-to-sky.jpg";
import umbrellaPng from "@/assets/myanmar-umbrella.png";
import dubaiHero from "@/assets/dubai-skyline-hero.jpg";
import {
  Globe2,
  Megaphone,
  Mic2,
  Handshake,
  Sparkles,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Users,
  Award,
  Crown,
  Heart,
  MessageCircle,
  Play,
  Star,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Me2Connect · Connect. Collaborate. Succeed." },
      {
        name: "description",
        content:
          "UAE-based international platform for marketing, networking, branding and global events — bridging Myanmar heritage with Dubai's elite business community.",
      },
      { property: "og:title", content: "Me2Connect · Where Myanmar meets Dubai" },
      {
        property: "og:description",
        content:
          "Global networking, branding & events. Join a movement that turns connections into collaborations.",
      },
      { property: "og:image", content: dubaiHero },
      { property: "twitter:image", content: dubaiHero },
    ],
  }),
  component: Index,
});

const heroSlides = [
  {
    eyebrow: "Global Networking · Branding · Events",
    title: "Meet, Connect",
    italic: "Grow Together",
    body:
      "Me2Connect is your UAE-based international platform for marketing, networking, and business growth. Join a movement that turns connections into collaborations.",
    cta: "Coming Events",
    href: "/events",
    img: baganDawn,
  },
  {
    eyebrow: "Exhibitions · Summits · Meetups",
    title: "Hosting world-class",
    italic: "events.",
    body:
      "From Dubai to the world — we organize high-impact business gatherings that showcase innovation, leadership, and global opportunities.",
    cta: "Explore Events",
    href: "/events",
    img: vipGala,
  },
  {
    eyebrow: "Marketing · Podcasts · Visibility",
    title: "Build your brand",
    italic: "globally.",
    body:
      "Elevate your personal and corporate brand with storytelling, social campaigns, and media features that reach millions.",
    cta: "Get Branding Support",
    href: "/contact",
    img: dubai,
  },
  {
    eyebrow: "B2B Connections · Partnerships",
    title: "A network that drives",
    italic: "growth.",
    body:
      "We don't just host events — we build ecosystems. Access investors, collaborators, and growth programs tailored for your success.",
    cta: "Become a Partner",
    href: "/membership",
    img: myanmarDubaiBridge,
  },
];

const services = [
  {
    no: "01",
    icon: Globe2,
    title: "Networking Events & Global Meetups",
    points: [
      "Organize international networking sessions and business meetups",
      "Connect entrepreneurs and professionals across regions",
      "Build collaborations that drive success",
    ],
  },
  {
    no: "02",
    icon: Calendar,
    title: "Exhibitions & Business Summits",
    points: [
      "Host global exhibitions and leadership summits",
      "Showcase innovation and entrepreneurship",
      "Provide growth platforms for companies",
    ],
  },
  {
    no: "03",
    icon: Megaphone,
    title: "Branding & Marketing Solutions",
    points: [
      "Develop strong personal and corporate brands",
      "Drive digital marketing and storytelling",
      "Enhance brand visibility and reach",
    ],
  },
  {
    no: "04",
    icon: Mic2,
    title: "Podcasts & YouTube Shows",
    points: [
      "Feature inspiring business stories",
      "Amplify leadership voices",
      "Increase brand recognition through digital media",
    ],
  },
  {
    no: "05",
    icon: Handshake,
    title: "Business Support Programs",
    points: [
      "Promotional campaigns and B2B partnerships",
      "Enable sustainable market growth",
      "Long-term visibility & support",
    ],
  },
];

const events = [
  {
    img: vipGala,
    tag: "UPCOMING · AWARDS",
    title: "Cruise Food Festival & International Culinary Awards 2026",
    desc: "An exclusive culinary celebration aboard a luxury cruise.",
    date: "Feb 15, 2026",
    loc: "Cruise · Deira (opp. Radisson Blu), Dubai",
    status: "Registration Open",
  },
  {
    img: goldAward,
    tag: "UPCOMING · AWARDS",
    title: "Elite Leadership Awards 2026",
    desc: "Icon of Generation: Leaders of Yesterday, Today & Tomorrow.",
    date: "Feb 15, 2026",
    loc: "Cruise · Deira, Dubai",
    status: "Registration Open",
  },
  {
    img: dubai,
    tag: "ONGOING · BUSINESS",
    title: "Premium Business Networking — Star Cinemas",
    desc: "High-energy premium business networking event.",
    date: "Dec 22, 2025",
    loc: "Star Cinemas, Al Ghurair",
    status: "Invite Only",
  },
  {
    img: mandalayPalace,
    tag: "ONGOING · AWARDS",
    title: "International Brands & Icons Award",
    desc: "Celebrating global leaders & visionary brands redefining excellence.",
    date: "Dec 21, 2025",
    loc: "Royal Desert, Abu Dhabi",
    status: "Invite Only",
  },
  {
    img: sheTalks,
    tag: "COMPLETED · BEAUTY",
    title: "Mrs. India Middle East — Season 3",
    desc: "Who will be the next queen?",
    date: "Dec 21, 2025",
    loc: "Royal Desert, Abu Dhabi",
    status: "Closed",
  },
  {
    img: riseToSky,
    tag: "COMPLETED · AWARDS",
    title: "International Fashion Awards",
    desc: "A global celebration of creativity, innovation & excellence in fashion.",
    date: "Dec 21, 2025",
    loc: "Royal Desert, Abu Dhabi",
    status: "Closed",
  },
];

function Index() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const heroFade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const hero = heroSlides[0];

  return (
    <SiteLayout>
      {/* HERO */}
      <section ref={heroRef} className="relative min-h-[100svh] md:min-h-[92vh] flex items-end overflow-hidden">
        {/* Layer 1 — Dubai skyline (the city backdrop) */}
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <img src={dubaiHero} alt="Dubai skyline at dusk" className="w-full h-full object-cover" />
        </motion.div>

        {/* Subtle gradient — keep skyline visible, darken bottom-left for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[var(--background)]/85 via-[var(--background)]/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[var(--background)] to-transparent" />

        {/* Soft golden glow behind umbrella */}
        <div
          aria-hidden
          className="absolute right-[2%] md:right-[6%] top-[18%] md:top-[20%] w-[22rem] md:w-[36rem] lg:w-[44rem] h-[22rem] md:h-[36rem] lg:h-[44rem] rounded-full bg-[var(--gold)]/25 blur-3xl pointer-events-none animate-drift"
        />

        {/* === Floating umbrella — absolute, large, slightly tilted (matches reference) === */}
        <motion.img
          src={umbrellaPng}
          alt="Myanmar Pathein umbrella"
          aria-hidden
          initial={{ opacity: 0, scale: 0.85, x: 80, y: -20, rotate: 18 }}
          animate={{ opacity: 1, scale: 1, x: 0, y: 0, rotate: 8 }}
          transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-18%"])
          }}
          className="absolute z-[5] pointer-events-none animate-drift drop-shadow-[0_30px_60px_rgba(0,0,0,0.55)]
                     right-[-18%] sm:right-[-10%] md:right-[-6%] lg:right-[-4%] xl:right-[-2%]
                     top-[6%] md:top-[8%] lg:top-[10%]
                     w-[80%] sm:w-[68%] md:w-[58%] lg:w-[52%] xl:w-[48%] max-w-[820px]"
        />

        {/* === Golden particle trail — flows from under umbrella across the skyline === */}
        <svg
          aria-hidden
          className="absolute inset-0 w-full h-full pointer-events-none z-[4]"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <radialGradient id="dust" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="var(--gold)" stopOpacity="1" />
              <stop offset="100%" stopColor="var(--gold)" stopOpacity="0" />
            </radialGradient>
          </defs>
          {Array.from({ length: 70 }).map((_, i) => {
            // Curve trail from upper right (under umbrella) sweeping down-left across city
            const t = i / 70;
            const cx = 1180 - t * 760 + Math.sin(i * 1.7) * 28;
            const cy = 360 + Math.sin(t * Math.PI) * 180 + Math.cos(i * 2.1) * 18;
            const r = 1.4 + Math.random() * 2.6;
            const dur = 2.8 + (i % 6) * 0.4;
            const delay = (i * 0.05) % 3;
            return (
              <circle
                key={i}
                cx={cx}
                cy={cy}
                r={r}
                fill="url(#dust)"
                opacity={0.55 + Math.random() * 0.4}
              >
                <animate
                  attributeName="opacity"
                  values="0;1;0"
                  dur={`${dur}s`}
                  begin={`${delay}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="r"
                  values={`${r * 0.4};${r};${r * 0.4}`}
                  dur={`${dur}s`}
                  begin={`${delay}s`}
                  repeatCount="indefinite"
                />
              </circle>
            );
          })}
        </svg>

        <motion.div
          className="relative z-[6] mx-auto max-w-7xl px-6 lg:px-12 pb-14 md:pb-20 pt-28 md:pt-32 w-full"
          style={{ opacity: heroFade }}
        >
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-3 mb-4 md:mb-5"
            >
              <span className="h-px w-8 bg-[var(--gold)]" />
              <span className="font-cinzel text-[9px] md:text-[10px] text-[var(--gold)] tracking-[0.25em] md:tracking-[0.3em] glow-soft">
                {hero.eyebrow.toUpperCase()}
              </span>
            </motion.div>

            <h1 className="font-display font-light leading-[0.95] tracking-tight">
              <span className="block text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl text-[var(--foreground)]">
                <SplitWords text={hero.title} delay={0.1} />
              </span>
              <span className="block italic text-[3rem] sm:text-6xl md:text-7xl lg:text-8xl mt-1 text-gradient-gold glow-text">
                <SplitWords text={hero.italic} delay={0.5} />
              </span>
            </h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="mt-4 md:mt-5 font-cinzel text-[11px] md:text-sm text-[var(--gold-soft)] tracking-[0.2em] md:tracking-[0.25em]"
            >
              <Typewriter
                words={[
                  "WE BUILD CONNECTIONS",
                  "WE CRAFT BRANDS",
                  "WE HOST EXPERIENCES",
                  "WE GROW COMMUNITIES",
                ]}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.9 }}
              className="mt-5 md:mt-7 max-w-lg border-l border-[var(--gold)]/40 pl-4 md:pl-5 text-[13px] md:text-base text-[var(--foreground)]/80 leading-relaxed"
            >
              {hero.body}
            </motion.p>

            {/* Myanmar × International fusion strip */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="mt-5 md:mt-6 flex items-center gap-2 md:gap-3 flex-wrap"
            >
              {["◆ YANGON", "DUBAI ◆", "GLOBAL ◆"].map((t, i) => (
                <span key={t} className="contents">
                  <span className="font-cinzel text-[8px] md:text-[10px] text-[var(--gold)]/85 tracking-[0.25em] md:tracking-[0.3em] border border-[var(--gold)]/30 rounded-full px-2.5 md:px-3 py-1 bg-[var(--obsidian)]/40 backdrop-blur-sm">
                    {t}
                  </span>
                  {i < 2 && <span className="text-[var(--gold)]/50 text-xs">×</span>}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.7 }}
              className="mt-7 md:mt-8 flex flex-wrap gap-3 items-center"
            >
              <MagneticButton>
                <Link
                  to={hero.href}
                  className="group relative inline-flex items-center gap-2.5 px-6 md:px-8 py-3.5 md:py-4 bg-pill-cyan text-obsidian font-cinzel text-[10px] md:text-[11px] font-semibold rounded-full tracking-[0.2em] hover:scale-[1.03] transition-transform"
                >
                  <span className="relative z-10">{hero.cta.toUpperCase()}</span>
                  <ArrowRight className="relative z-10 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </MagneticButton>
              <MagneticButton strength={0.2}>
                <Link
                  to="/she-talks"
                  className="inline-flex items-center gap-2 px-6 md:px-8 py-3.5 md:py-4 bg-pill-cyan text-obsidian font-cinzel text-[10px] md:text-[11px] font-semibold rounded-full tracking-[0.2em] hover:scale-[1.03] transition-transform"
                >
                  MEDIA PRODUCTION
                </Link>
              </MagneticButton>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-cinzel text-[9px] text-[var(--gold)]/60 tracking-[0.4em]">SCROLL</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="h-8 w-px bg-gradient-to-b from-[var(--gold)] to-transparent"
          />
        </motion.div>
      </section>

      {/* ROTATING HERO MESSAGES */}
      <section className="border-y border-[var(--gold)]/10 bg-[var(--obsidian)] py-4 overflow-hidden">
        <Marquee>
          {[
            "CONNECT",
            "◆",
            "COLLABORATE",
            "◆",
            "SUCCEED",
            "◆",
            "GLOBAL NETWORKING",
            "◆",
            "BRANDING",
            "◆",
            "EVENTS",
            "◆",
            "DUBAI · YANGON",
            "◆",
          ].map((t, i) => (
            <span key={i} className="font-cinzel text-xs text-[var(--gold)]/70 tracking-[0.3em] mx-8">
              {t}
            </span>
          ))}
        </Marquee>
      </section>

      {/* SECONDARY HERO TILES */}
      <section className="relative mx-auto max-w-7xl px-6 lg:px-12 py-20 grid md:grid-cols-3 gap-6">
        <FloatingDecor positions={["top-right"]} size={180} opacity={0.18} />
        {heroSlides.slice(1).map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className={`group relative overflow-hidden border border-[var(--gold)]/15 hover:border-[var(--gold)]/50 transition-all hover-lift img-sweep ${
              i % 2 === 0 ? "soft-card" : "soft-card-alt"
            }`}
          >
            <div className="aspect-[4/5] overflow-hidden">
              <motion.img
                src={s.img}
                alt={s.title}
                loading="lazy"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--obsidian)] via-[var(--obsidian)]/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="font-cinzel text-[9px] text-[var(--gold)] tracking-[0.3em] mb-2">
                {s.eyebrow.toUpperCase()}
              </div>
              <h3 className="font-display text-2xl md:text-3xl leading-tight">
                <span className="text-[var(--foreground)]">{s.title}</span>{" "}
                <span className="italic text-gradient-gold">{s.italic}</span>
              </h3>
              <p className="mt-2 text-sm text-[var(--foreground)]/70 line-clamp-2">{s.body}</p>
              <Link
                to={s.href}
                className="link-underline inline-flex items-center gap-1.5 mt-4 font-cinzel text-[10px] text-[var(--gold)] tracking-[0.25em] hover:gap-3 transition-all"
              >
                {s.cta.toUpperCase()} <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </motion.div>
        ))}
      </section>

      {/* ONE VISION + ABOUT */}
      <HeritageBackdrop image={shwedagonMonks} intensity={0.08} overlay="default" className="border-y border-[var(--gold)]/10">
        <FloatingDecor positions={["bottom-left", "top-right"]} size={200} opacity={0.15} />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12 py-24 grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <OrnamentDivider label="ONE VISION" />
            <h2 className="font-display text-4xl md:text-5xl leading-tight mt-6">
              <span className="text-[var(--foreground)]">A global connector that bridges</span>{" "}
              <span className="italic text-gradient-gold">opportunities.</span>
            </h2>
            <p className="mt-6 text-[var(--foreground)]/75 leading-relaxed max-w-xl">
              To support businesses and inspire growth through meaningful relationships and
              innovative branding solutions — connecting Myanmar's craftsmanship with the
              ambition of the UAE.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Tilt intensity={5} className="relative">
            <div className="relative soft-card border border-[var(--gold)]/20 bg-[var(--ink)]/60 backdrop-blur-sm p-8 hover-lift">
              <div className="font-cinzel text-[10px] text-[var(--gold)] tracking-[0.3em] mb-3">ME2CONNECT</div>
              <p className="text-[var(--foreground)]/80 leading-relaxed">
                A UAE-based international platform focused on marketing, branding, and
                networking for businesses and professionals across the globe.
              </p>
              <ul className="mt-6 space-y-2.5">
                {[
                  "Networking Events & Global Meetups",
                  "Exhibitions & Business Summits",
                  "Branding & Marketing Solutions",
                  "Podcasts & YouTube Shows",
                  "Direct Marketing & Business Support",
                ].map((x) => (
                  <li key={x} className="flex items-start gap-3 text-sm text-[var(--foreground)]/85">
                    <Sparkles className="h-3.5 w-3.5 text-[var(--gold)] mt-1 shrink-0" />
                    {x}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex gap-2 flex-wrap">
                {["Branding", "Media", "Marketing"].map((t) => (
                  <span
                    key={t}
                    className="font-cinzel text-[9px] tracking-[0.25em] text-[var(--gold)] border border-[var(--gold)]/30 rounded-full px-3 py-1"
                  >
                    {t.toUpperCase()}
                  </span>
                ))}
              </div>
            </div>
            </Tilt>
          </Reveal>
        </div>
      </HeritageBackdrop>

      {/* STATS */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 py-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { n: 500, suffix: "+", l: "Events Managed" },
          { n: 50, suffix: "K+", l: "Attendees" },
          { n: 100, suffix: "+", l: "Brand Partners" },
          { n: 2, suffix: "", l: "Countries" },
        ].map((s, i) => (
          <Reveal key={s.l} delay={i * 0.08} className="text-center group">
            <div className="font-display text-4xl md:text-6xl text-gradient-gold leading-none font-light">
              <Counter to={s.n} suffix={s.suffix} />
            </div>
            <div className="gold-divider w-8 mx-auto mt-3 opacity-50 group-hover:opacity-100 transition-opacity" />
            <div className="font-cinzel text-[10px] text-[var(--muted-foreground)] mt-3 tracking-[0.25em]">
              {s.l}
            </div>
          </Reveal>
        ))}
        <div className="col-span-2 lg:col-span-4 flex flex-wrap gap-3 justify-center mt-4">
          <MagneticButton>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-gold text-obsidian font-cinzel text-[10px] font-semibold rounded-full shadow-gold tracking-[0.2em]"
            >
              LEARN MORE ABOUT US
            </Link>
          </MagneticButton>
          <MagneticButton strength={0.2}>
            <Link
              to="/events"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--gold)]/30 text-[var(--gold)] font-cinzel text-[10px] font-semibold rounded-full hover:bg-[var(--gold)]/10 transition-colors tracking-[0.2em]"
            >
              EXPLORE EVENTS
            </Link>
          </MagneticButton>
        </div>
      </section>

      {/* SERVICES */}
      <HeritageBackdrop image={baganDawn} intensity={0.14} overlay="vignette" className="border-y border-[var(--gold)]/10">
        <FloatingDecor positions={["top-left", "bottom-right"]} size={220} opacity={0.15} />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12 py-24">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <OrnamentDivider label="OUR SERVICES" />
            <h2 className="font-display text-4xl md:text-5xl leading-tight mt-6">
              <span className="text-[var(--foreground)]">Empowering professionals through</span>{" "}
              <span className="italic text-gradient-gold">impact.</span>
            </h2>
            <p className="mt-5 text-[var(--foreground)]/70 leading-relaxed">
              Events, branding, and digital engagement — building networks that create real growth.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <motion.div
                key={s.no}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                className={`group p-7 ${i % 2 === 0 ? "soft-card" : "soft-card-alt"} border border-[var(--gold)]/15 bg-[var(--ink)]/55 backdrop-blur-sm hover:border-[var(--gold)]/50 hover:bg-[var(--ink)]/80 transition-all relative overflow-hidden hover-lift`}
              >
                <div className="absolute -right-6 -top-6 w-28 h-28 rounded-full bg-[var(--gold)]/0 group-hover:bg-[var(--gold)]/10 blur-2xl transition-all duration-700" />
                <div className="flex items-center justify-between mb-5">
                  <span className="font-cinzel text-3xl text-[var(--gold)]/40">{s.no}</span>
                  <s.icon className="h-6 w-6 text-[var(--gold)]" strokeWidth={1.4} />
                </div>
                <h3 className="font-display text-xl italic leading-snug text-[var(--foreground)]">
                  {s.title}
                </h3>
                <ul className="mt-4 space-y-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-[var(--foreground)]/70">
                      <span className="h-1 w-1 rounded-full bg-[var(--gold)] mt-2 shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-1.5 mt-6 font-cinzel text-[10px] text-[var(--gold)] tracking-[0.25em] hover:gap-3 transition-all"
                >
                  LEARN MORE <ArrowRight className="h-3 w-3" />
                </Link>
                <div className="mt-5 h-px w-0 group-hover:w-full bg-gradient-to-r from-[var(--gold)] to-transparent transition-all duration-700" />
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 justify-center mt-12">
            <MagneticButton>
              <Link
                to="/events"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-gold text-obsidian font-cinzel text-[10px] font-semibold rounded-full shadow-gold tracking-[0.2em]"
              >
                EXPLORE EVENTS
              </Link>
            </MagneticButton>
            <MagneticButton strength={0.2}>
              <Link
                to="/membership"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--gold)]/30 text-[var(--gold)] font-cinzel text-[10px] font-semibold rounded-full hover:bg-[var(--gold)]/10 tracking-[0.2em]"
              >
                BECOME A PARTNER
              </Link>
            </MagneticButton>
          </div>
        </div>
      </HeritageBackdrop>

      {/* HERITAGE STRIP — Myanmar */}
      <section className="relative mx-auto max-w-7xl px-6 lg:px-12 py-24 overflow-hidden">
        <FloatingDecor positions={["mid-right"]} size={280} opacity={0.12} />
        <OrnamentDivider label="HERITAGE" />
        <Reveal className="flex items-end justify-between flex-wrap gap-6 mb-10 mt-8">
          <h2 className="font-display text-4xl md:text-5xl leading-tight max-w-xl">
            <span className="text-[var(--foreground)]">Rooted in</span>{" "}
            <span className="italic text-gradient-gold">Myanmar,</span>{" "}
            <span className="text-[var(--foreground)]">rising in</span>{" "}
            <span className="italic shimmer-text">Dubai.</span>
          </h2>
          <p className="max-w-md text-sm text-[var(--foreground)]/65 leading-relaxed">
            From the spires of Shwedagon to the towers of the desert — a bridge of culture,
            craft and commerce.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { img: baganDawn, title: "Bagan", caption: "Plains of a thousand pagodas", span: "lg:col-span-3 lg:row-span-2" },
            { img: shwedagonMonks, title: "Shwedagon", caption: "Golden heart of Yangon", span: "lg:col-span-3" },
            { img: heritageUbein, title: "U Bein", caption: "Teak bridge at sunset", span: "lg:col-span-2" },
            { img: inleSunset, title: "Inle Lake", caption: "The silent leg-rower", span: "lg:col-span-2" },
            { img: patheinUmbrella, title: "Pathein", caption: "Hand-painted heritage", span: "lg:col-span-2" },
          ].map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className={`group overflow-hidden border border-[var(--gold)]/15 hover:border-[var(--gold)]/50 transition-all hover-lift img-sweep ${
                i % 3 === 0 ? "soft-card" : i % 3 === 1 ? "soft-card-alt" : "rounded-[28px]"
              } ${c.span}`}
            >
              <div className="aspect-[4/5] lg:aspect-auto lg:h-full overflow-hidden relative min-h-[260px]">
                <motion.img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--obsidian)] via-[var(--obsidian)]/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="font-cinzel text-[9px] text-[var(--gold)] tracking-[0.3em] mb-1.5">
                    CULTURAL ICON
                  </div>
                  <h3 className="font-display text-2xl italic">{c.title}</h3>
                  <p className="text-xs text-[var(--foreground)]/60 mt-1">{c.caption}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURED EVENTS */}
      <HeritageBackdrop image={mandalayPalace} intensity={0.16} overlay="vignette" className="border-y border-[var(--gold)]/10">
        <FloatingDecor positions={["bottom-left"]} size={240} opacity={0.13} />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12 py-24">
          <Reveal className="flex items-end justify-between flex-wrap gap-6 mb-12">
            <div>
              <OrnamentDivider label="FEATURED EVENTS" />
              <h2 className="font-display text-4xl md:text-5xl leading-tight mt-6">
                <span className="text-[var(--foreground)]">Upcoming &</span>{" "}
                <span className="italic text-gradient-gold">ongoing.</span>
              </h2>
            </div>
            <Link
              to="/events"
              className="inline-flex items-center gap-2 font-cinzel text-[10px] text-[var(--gold)] tracking-[0.25em] hover:gap-3 transition-all"
            >
              VIEW ALL EVENTS <ArrowRight className="h-3 w-3" />
            </Link>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {events.map((e, i) => (
              <motion.div
                key={e.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative overflow-hidden border border-[var(--gold)]/15 hover:border-[var(--gold)]/50 transition-all bg-[var(--ink)]/55 backdrop-blur-sm hover-lift img-sweep ${
                  i % 2 === 0 ? "soft-card" : "soft-card-alt"
                }`}
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
                  <span className="absolute top-4 left-4 font-cinzel text-[9px] tracking-[0.25em] text-[var(--gold)] bg-[var(--obsidian)]/70 backdrop-blur-sm px-3 py-1.5 rounded-full border border-[var(--gold)]/30">
                    {e.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl italic text-[var(--foreground)] leading-snug">
                    {e.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--foreground)]/65 leading-relaxed">{e.desc}</p>
                  <div className="mt-4 space-y-1.5 text-xs text-[var(--muted-foreground)]">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-3 w-3 text-[var(--gold)]" /> {e.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-3 w-3 text-[var(--gold)]" /> {e.loc}
                    </div>
                  </div>
                  <div className="mt-5 flex items-center justify-between border-t border-[var(--gold)]/10 pt-4">
                    <span className="font-cinzel text-[9px] text-[var(--gold)] tracking-[0.25em]">
                      FREE EVENT
                    </span>
                    <span className="font-cinzel text-[9px] text-[var(--foreground)]/60 tracking-[0.25em]">
                      {e.status.toUpperCase()}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </HeritageBackdrop>

      {/* CUSTOMER CARE — how we treat our clients (video showcase) */}
      <section className="relative overflow-hidden border-y border-[var(--gold)]/10 bg-gradient-to-b from-[var(--obsidian)] via-[var(--ink)]/40 to-[var(--obsidian)]">
        <FloatingDecor positions={["top-right", "bottom-left"]} size={220} opacity={0.12} />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12 py-24">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <OrnamentDivider label="OUR CLIENTS · OUR FAMILY" />
            <h2 className="font-display text-4xl md:text-5xl leading-tight mt-6">
              <span className="text-[var(--foreground)]">We don't serve clients —</span>{" "}
              <span className="italic text-gradient-gold glow-text">we celebrate them.</span>
            </h2>
            <p className="mt-5 text-[var(--foreground)]/70 leading-relaxed">
              <Heart className="inline h-4 w-4 text-[var(--gold)] mr-1.5 -mt-0.5" />
              Every brand we host, every leader we feature — their story becomes our story.
              Watch how Me2Connect treats every member like royalty.
            </p>
          </Reveal>

          {/* Featured large video tile + 3 smaller */}
          <div className="grid lg:grid-cols-12 gap-5">
            {/* Hero tile */}
            <Reveal delay={0.05} className="lg:col-span-7">
              <div className="group video-frame aspect-video relative cursor-pointer hover-glow">
                <img
                  src={vipGala}
                  alt="VIP gala for our valued partners"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--obsidian)] via-[var(--obsidian)]/30 to-transparent" />
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative h-20 w-20 rounded-full bg-[var(--gold)]/95 flex items-center justify-center glow-pulse">
                    <Play className="h-7 w-7 text-[var(--obsidian)] ml-1" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <span className="font-cinzel text-[9px] text-[var(--gold)] tracking-[0.3em]">
                    SIGNATURE STORY · 04:12
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl italic text-[var(--foreground)] mt-2 leading-tight">
                    Behind every member, a journey worth honouring.
                  </h3>
                  <p className="mt-2 text-sm text-[var(--foreground)]/75 max-w-lg">
                    From private welcome dinners to on-stage tributes — the Me2Connect family experience.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* 3 smaller tiles stacked */}
            <div className="lg:col-span-5 grid sm:grid-cols-1 gap-5">
              {[
                {
                  img: sheTalks,
                  tag: "SHE TALKS · 02:38",
                  title: "Voices that shape the future.",
                  desc: "Featured women leaders share what membership unlocked for them.",
                },
                {
                  img: riseToSky,
                  tag: "RISE TO SKY · 03:21",
                  title: "Documentaries that elevate icons.",
                  desc: "Cinematic features that turn entrepreneurs into household names.",
                },
                {
                  img: goldAward,
                  tag: "AWARDS NIGHT · 01:54",
                  title: "Recognition. Carefully crafted.",
                  desc: "Stage tributes, mementos and press coverage — for every honoree.",
                },
              ].map((v, i) => (
                <Reveal key={v.title} delay={0.1 + i * 0.08}>
                  <div className="group video-frame aspect-[16/9] relative cursor-pointer hover-glow">
                    <img
                      src={v.img}
                      alt={v.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[var(--obsidian)]/85 via-[var(--obsidian)]/35 to-transparent" />
                    <div className="absolute right-4 top-4 h-10 w-10 rounded-full bg-[var(--gold)]/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <Play className="h-3.5 w-3.5 text-[var(--obsidian)] ml-0.5" fill="currentColor" />
                    </div>
                    <div className="absolute inset-0 flex flex-col justify-center p-5">
                      <span className="font-cinzel text-[9px] text-[var(--gold)] tracking-[0.3em] glow-soft">
                        {v.tag}
                      </span>
                      <h4 className="font-display text-lg md:text-xl italic mt-1.5 leading-tight">
                        {v.title}
                      </h4>
                      <p className="mt-1.5 text-[11px] text-[var(--foreground)]/70 max-w-[18rem] leading-relaxed">
                        {v.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Care promise strip */}
          <Reveal delay={0.2} className="mt-14">
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { icon: Heart, title: "Personal Care", desc: "A dedicated relationship manager for every member." },
                { icon: MessageCircle, title: "Always Reachable", desc: "WhatsApp lines open 7 days a week." },
                { icon: Star, title: "On-Stage Tribute", desc: "Public recognition at every flagship event." },
                { icon: Sparkles, title: "Cinematic Coverage", desc: "Pro shoots, reels & documentaries — included." },
              ].map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -4 }}
                  className={`group p-5 ${i % 2 === 0 ? "soft-card" : "soft-card-alt"} border border-[var(--gold)]/15 bg-[var(--ink)]/60 backdrop-blur-sm hover-glow`}
                >
                  <p.icon className="icon-spin-hover h-6 w-6 text-[var(--gold)] mb-3" strokeWidth={1.4} />
                  <h4 className="font-display text-lg italic text-[var(--foreground)]">{p.title}</h4>
                  <p className="mt-1.5 text-xs text-[var(--foreground)]/65 leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* NETWORK IMPACT */}
      <section className="relative overflow-hidden border-y border-[var(--gold)]/10">
        <motion.div
          initial={{ scale: 1.15, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.4 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <img src={myanmarDubaiBridge} alt="" className="w-full h-full object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)]/80 via-[var(--background)]/60 to-[var(--background)]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12 py-24">
          <Reveal className="text-center mb-12">
            <OrnamentDivider label="OUR NETWORK IMPACT" />
            <h2 className="font-display text-4xl md:text-5xl leading-tight mt-6">
              <span className="text-[var(--foreground)]">Reach that</span>{" "}
              <span className="italic text-gradient-gold">resonates.</span>
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { n: 5000, suffix: "+", l: "Professionals Connected", icon: Users },
              { n: 150, suffix: "+", l: "Events Hosted", icon: Calendar },
              { n: 50, suffix: "+", l: "Countries Reached", icon: Globe2 },
              { n: 98, suffix: "%", l: "Satisfaction Rate", icon: Award },
            ].map((s, i) => (
              <Reveal key={s.l} delay={i * 0.08} className="text-center">
                <s.icon className="h-7 w-7 text-[var(--gold)] mx-auto mb-3" strokeWidth={1.3} />
                <div className="font-display text-4xl md:text-5xl text-gradient-gold leading-none font-light">
                  <Counter to={s.n} suffix={s.suffix} />
                </div>
                <div className="font-cinzel text-[10px] text-[var(--muted-foreground)] mt-3 tracking-[0.25em]">
                  {s.l}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 py-24">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <OrnamentDivider label="GET IN TOUCH" />
          <h2 className="font-display text-4xl md:text-5xl leading-tight mt-6">
            <span className="text-[var(--foreground)]">Let's create something</span>{" "}
            <span className="italic shimmer-text">amazing.</span>
          </h2>
          <p className="mt-5 text-[var(--foreground)]/70">
            Ready to organize your next event? Get in touch with our expert team.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5">
          {[
            { icon: Phone, title: "Call Us", sub: "Speak directly with our specialists", val: "+971 50 123 4567" },
            { icon: Mail, title: "Email Us", sub: "Send us your event requirements", val: "info@me2connect.com" },
            { icon: MapPin, title: "Visit Us", sub: "Meet us at our Dubai office", val: "Dubai, UAE" },
          ].map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className={`group text-center p-8 ${i % 2 === 0 ? "soft-card" : "soft-card-alt"} border border-[var(--gold)]/15 bg-[var(--ink)]/60 backdrop-blur-sm hover:border-[var(--gold)]/50 transition-all hover-lift relative overflow-hidden`}
            >
              <motion.div
                className="absolute -right-6 -top-6 w-32 h-32 rounded-full bg-[var(--gold)]/0 group-hover:bg-[var(--gold)]/15 blur-2xl transition-all duration-700"
              />
              <c.icon className="h-7 w-7 text-[var(--gold)] mx-auto mb-4" strokeWidth={1.3} />
              <h3 className="font-display text-xl italic">{c.title}</h3>
              <p className="text-xs text-[var(--muted-foreground)] mt-1.5">{c.sub}</p>
              <div className="mt-4 font-cinzel text-sm text-[var(--gold)] tracking-[0.15em]">{c.val}</div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 justify-center mt-12">
          <MagneticButton>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 bg-gradient-gold text-obsidian font-cinzel text-[11px] font-semibold rounded-full shadow-gold tracking-[0.2em]"
            >
              CONTACT US TODAY
            </Link>
          </MagneticButton>
          <MagneticButton strength={0.2}>
            <Link
              to="/events"
              className="inline-flex items-center gap-2 px-7 py-4 border border-[var(--gold)]/30 text-[var(--gold)] font-cinzel text-[11px] font-semibold rounded-full hover:bg-[var(--gold)]/10 tracking-[0.2em]"
            >
              BROWSE EVENTS
            </Link>
          </MagneticButton>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden border-t border-[var(--gold)]/10">
        <motion.img
          src={inleSunset}
          alt="Inle Lake at sunset"
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
            <Crown className="h-8 w-8 text-[var(--gold)] mx-auto mb-5" strokeWidth={1.3} />
            <h2 className="font-display text-5xl md:text-6xl leading-[0.95] tracking-tight">
              <span className="text-[var(--foreground)]">Your seat at the</span>{" "}
              <span className="italic shimmer-text">circle awaits.</span>
            </h2>
            <p className="mt-6 text-base text-[var(--foreground)]/70 max-w-md mx-auto">
              Join Me2Connect — where Myanmar's craft meets Dubai's ambition.
            </p>
            <MagneticButton>
              <Link
                to="/membership"
                className="group inline-flex items-center gap-2.5 mt-9 px-9 py-4 bg-gradient-gold text-obsidian font-cinzel text-[11px] font-semibold rounded-full shadow-gold"
              >
                <span>BEGIN APPLICATION</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </MagneticButton>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
