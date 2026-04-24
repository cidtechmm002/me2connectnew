import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal, SplitWords } from "@/components/motion/Reveal";
import { Counter } from "@/components/motion/Counter";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { OrnamentDivider } from "@/components/motion/OrnamentDivider";
import { HeritageBackdrop } from "@/components/motion/HeritageBackdrop";
import {
  Crown,
  Sparkles,
  Globe2,
  Megaphone,
  Film,
  Mic2,
  Award,
  Users,
  Calendar,
  ArrowRight,
  Check,
  Star,
  Briefcase,
  Newspaper,
  Trophy,
  Network,
  Phone,
} from "lucide-react";
import dubai from "@/assets/dubai-skyline.jpg";
import vipGala from "@/assets/vip-gala.jpg";
import goldAward from "@/assets/gold-award.jpg";
import sheTalks from "@/assets/she-talks.jpg";
import riseToSky from "@/assets/rise-to-sky.jpg";

export const Route = createFileRoute("/sponsorship")({
  head: () => ({
    meta: [
      { title: "Sponsorship Packages · Me2Connect" },
      { name: "description", content: "Partner with Me2Connect for maximum brand impact across 4 international events, continuous talk shows and year-round digital promotion." },
      { property: "og:title", content: "Sponsorship · Me2Connect" },
      { property: "og:description", content: "Strategic partnership opportunities with Gold and Silver tiers." },
      { property: "og:image", content: vipGala },
    ],
  }),
  component: Sponsorship,
});

const packages = [
  {
    name: "Gold Sponsor Package",
    price: "AED 15,000",
    sub: "Premium sponsorship with maximum visibility and engagement",
    popular: true,
    points: [
      "Sponsorship Tag in 4 International Events",
      "Continuous Talk Show Sponsorships: She Talks, Rise to Sky — UAE Icon",
      "Sponsor Memento Presentation in 4 Major International Events (Kids, Business, Influencers, Leadership)",
      "4 Panel Opportunities on International Stages (within one year)",
      "Logo Promotion on Website and Social Media for One Year",
      "25 Promotional Reels throughout the Year",
      "10 Hours of Professional Shoot (with Editing)",
      "Media Coverage & Exclusive Interviews",
      "1 Feature Article in Khaleej Times",
    ],
  },
  {
    name: "Silver Sponsor Package",
    price: "AED 6,000",
    sub: "Comprehensive co-sponsorship with excellent brand exposure",
    points: [
      "Co-Sponsor Title in All Related Promotions",
      "1 Feature Article in UAE Times",
      "15 Promotional Reels",
      "5 Hours of Professional Shoot (with Editing)",
      "2 Stage Honour Moments during International Events",
      "Logo Display as Co-Sponsor on Event Materials and Social Media",
    ],
  },
];

const benefits = [
  { tag: "4 Events", icon: Globe2, t: "Global Reach", d: "4 international events spanning Kids, Business, Influencers and Leadership domains." },
  { tag: "Year-round", icon: Newspaper, t: "Media Exposure", d: "Continuous talk show sponsorships, interviews and feature articles in major publications." },
  { tag: "25+ Reels", icon: Film, t: "Digital Content", d: "Professional video production, promotional reels and social media campaigns." },
  { tag: "4+ Panels", icon: Mic2, t: "Stage Presence", d: "Panel opportunities, stage honours and memento presentations at prestigious events." },
  { tag: "365 Days", icon: Megaphone, t: "Brand Integration", d: "Logo promotion across all platforms, materials and year-round digital presence." },
  { tag: "Premium", icon: Network, t: "Strategic Partnership", d: "Collaborative opportunities with industry leaders and exclusive networking access." },
];

const eventCategories = [
  { icon: Sparkles, t: "Kids Excellence Awards", d: "Celebrating young talents and educational achievements" },
  { icon: Briefcase, t: "Business Leadership Summit", d: "Recognizing outstanding business leaders and entrepreneurs" },
  { icon: Star, t: "Influencers Impact Awards", d: "Honouring digital influencers and content creators" },
  { icon: Crown, t: "Women in Leadership Awards", d: "Empowering and celebrating women leaders across industries" },
];

const talkShows = [
  { img: sheTalks, t: "She Talks UAE", sub: "50+ Women Leaders Featured", d: "Empowering women in leadership platform" },
  { img: riseToSky, t: "Rise to Sky — UAE Icon", sub: "UAE Business Icons", d: "Celebrating UAE business icons and their journeys" },
];

function Sponsorship() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="STRATEGIC PARTNERSHIP OPPORTUNITIES"
        title="Sponsorship Packages"
        subtitle="Partner with Me2Connect for maximum brand impact — 4 international events, continuous talk shows and 365 days of digital promotion."
        image={dubai}
      />

      {/* HERO QUICK STATS */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 -mt-10 pb-16">
        <Reveal>
          <div className="rounded-sm border border-[var(--gold)]/20 bg-[var(--ink)]/70 backdrop-blur-sm p-8 grid md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2 grid sm:grid-cols-3 gap-6">
              {[
                { icon: Globe2, l: "4 International Events" },
                { icon: Mic2, l: "Continuous Talk Shows" },
                { icon: Award, l: "Premium Recognition" },
              ].map((x) => (
                <div key={x.l} className="flex items-center gap-3">
                  <x.icon className="h-5 w-5 text-[var(--gold)]" strokeWidth={1.4} />
                  <span className="font-cinzel text-[10px] text-[var(--foreground)]/85 tracking-[0.25em]">
                    {x.l.toUpperCase()}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex md:justify-end">
              <MagneticButton>
                <a
                  href="#packages"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-gold text-obsidian font-cinzel text-[10px] font-semibold rounded-full shadow-gold tracking-[0.2em]"
                >
                  VIEW PACKAGES <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </MagneticButton>
            </div>
          </div>
        </Reveal>
      </section>

      {/* IMPACT */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 pb-20">
        <Reveal className="text-center mb-12">
          <OrnamentDivider label="OUR IMPACT" />
          <h2 className="font-display text-4xl md:text-5xl mt-6 leading-tight">
            <span className="text-[var(--foreground)]">A network that delivers</span>{" "}
            <span className="italic text-gradient-gold">real results.</span>
          </h2>
        </Reveal>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { n: 4, suffix: "", l: "International Events" },
            { n: 50, suffix: "+", l: "Featured Leaders" },
            { n: 100, suffix: "K+", l: "Digital Reach" },
            { n: 365, suffix: "", l: "Days Promotion" },
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

      {/* PACKAGES */}
      <HeritageBackdrop image={vipGala} intensity={0.07} overlay="default" className="border-y border-[var(--gold)]/10">
        <section id="packages" className="mx-auto max-w-6xl px-6 lg:px-12 py-24">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <OrnamentDivider label="CHOOSE YOUR LEVEL" />
            <h2 className="font-display text-4xl md:text-5xl mt-6 leading-tight">
              <span className="text-[var(--foreground)]">Aligned to your</span>{" "}
              <span className="italic text-gradient-gold">brand goals.</span>
            </h2>
            <p className="mt-5 text-[var(--foreground)]/70">
              Select the sponsorship package that matches your ambition and budget.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            {packages.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                className={`relative p-9 rounded-sm border bg-[var(--ink)]/70 backdrop-blur-sm transition-all ${
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
                <div className="mt-3 font-display text-5xl text-gradient-gold leading-none">{p.price}</div>
                <p className="text-sm text-[var(--foreground)]/65 mt-3">{p.sub}</p>
                <ul className="mt-7 space-y-2.5">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-sm text-[var(--foreground)]/85">
                      <Check className="h-3.5 w-3.5 text-[var(--gold)] mt-1 shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <MagneticButton>
                  <Link
                    to="/contact"
                    className={`mt-8 inline-flex items-center justify-center gap-2 w-full px-5 py-3.5 font-cinzel text-[10px] rounded-full tracking-[0.25em] ${
                      p.popular
                        ? "bg-gradient-gold text-obsidian shadow-gold"
                        : "border border-[var(--gold)]/30 text-[var(--gold)] hover:bg-[var(--gold)]/10"
                    }`}
                  >
                    SELECT {p.name.split(" ")[0].toUpperCase()} PACKAGE
                  </Link>
                </MagneticButton>
              </motion.div>
            ))}
          </div>
        </section>
      </HeritageBackdrop>

      {/* WHY PARTNER */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 py-24">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <OrnamentDivider label="WHY PARTNER WITH ME2CONNECT" />
          <h2 className="font-display text-4xl md:text-5xl mt-6 leading-tight">
            <span className="text-[var(--foreground)]">Comprehensive benefits.</span>{" "}
            <span className="italic text-gradient-gold">Real growth.</span>
          </h2>
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
              className="group p-7 rounded-sm border border-[var(--gold)]/15 bg-[var(--ink)]/60 backdrop-blur-sm hover:border-[var(--gold)]/40 transition-all relative overflow-hidden"
            >
              <span className="absolute top-4 right-4 font-cinzel text-[9px] tracking-[0.25em] text-[var(--gold)] border border-[var(--gold)]/30 rounded-full px-2.5 py-0.5">
                {b.tag.toUpperCase()}
              </span>
              <b.icon className="h-7 w-7 text-[var(--gold)]" strokeWidth={1.4} />
              <h3 className="font-display text-xl italic mt-4">{b.t}</h3>
              <p className="text-sm text-[var(--foreground)]/70 mt-2 leading-relaxed">{b.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4 EVENT CATEGORIES */}
      <HeritageBackdrop image={goldAward} intensity={0.07} overlay="default" className="border-y border-[var(--gold)]/10">
        <section className="mx-auto max-w-7xl px-6 lg:px-12 py-24">
          <Reveal className="text-center mb-14">
            <OrnamentDivider label="4 INTERNATIONAL EVENTS COVERAGE" />
            <h2 className="font-display text-4xl md:text-5xl mt-6 leading-tight">
              <span className="text-[var(--foreground)]">Featured across our</span>{" "}
              <span className="italic text-gradient-gold">event portfolio.</span>
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {eventCategories.map((e, i) => (
              <motion.div
                key={e.t}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                className="text-center p-7 rounded-sm border border-[var(--gold)]/15 bg-[var(--ink)]/60 backdrop-blur-sm hover:border-[var(--gold)]/40 transition-all"
              >
                <e.icon className="h-8 w-8 text-[var(--gold)] mx-auto mb-3" strokeWidth={1.3} />
                <h3 className="font-display text-lg italic">{e.t}</h3>
                <p className="text-sm text-[var(--foreground)]/65 mt-2">{e.d}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </HeritageBackdrop>

      {/* TALK SHOWS */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 py-24">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <OrnamentDivider label="CONTINUOUS TALK SHOWS" />
          <h2 className="font-display text-4xl md:text-5xl mt-6 leading-tight">
            <span className="text-[var(--foreground)]">Year-round</span>{" "}
            <span className="italic text-gradient-gold">brand exposure.</span>
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-5">
          {talkShows.map((ts, i) => (
            <motion.div
              key={ts.t}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-sm border border-[var(--gold)]/15 hover:border-[var(--gold)]/40 transition-colors"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <motion.img
                  src={ts.img}
                  alt={ts.t}
                  loading="lazy"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--obsidian)] via-[var(--obsidian)]/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="font-cinzel text-[9px] text-[var(--gold)] tracking-[0.25em] border border-[var(--gold)]/40 rounded-full px-2.5 py-0.5">
                  {ts.sub.toUpperCase()}
                </span>
                <h3 className="font-display text-2xl italic mt-3">{ts.t}</h3>
                <p className="text-sm text-[var(--foreground)]/70 mt-1">{ts.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CUSTOM */}
      <HeritageBackdrop image={dubai} intensity={0.07} overlay="default" className="border-y border-[var(--gold)]/10">
        <section className="mx-auto max-w-5xl px-6 lg:px-12 py-24 text-center">
          <Reveal>
            <OrnamentDivider label="CUSTOM SOLUTIONS" />
            <h2 className="font-display text-4xl md:text-5xl mt-6 leading-tight">
              <span className="text-[var(--foreground)]">Need a</span>{" "}
              <span className="italic text-gradient-gold">tailored partnership?</span>
            </h2>
            <p className="mt-5 text-[var(--foreground)]/70 max-w-2xl mx-auto">
              We design tailored sponsorship packages to match your brand goals, budget and
              objectives — from exclusive event partnerships to year-round campaigns.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {["Custom Packages", "ROI Focused", "Strategic Partnership"].map((t) => (
                <span
                  key={t}
                  className="font-cinzel text-[10px] tracking-[0.25em] text-[var(--gold)] border border-[var(--gold)]/30 rounded-full px-4 py-2"
                >
                  {t.toUpperCase()}
                </span>
              ))}
            </div>
            <div className="mt-9 flex flex-wrap gap-3 justify-center">
              <MagneticButton>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-4 bg-gradient-gold text-obsidian font-cinzel text-[11px] font-semibold rounded-full shadow-gold tracking-[0.2em]"
                >
                  SCHEDULE CONSULTATION <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </MagneticButton>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-4 border border-[var(--gold)]/30 text-[var(--gold)] font-cinzel text-[11px] rounded-full hover:bg-[var(--gold)]/10 tracking-[0.2em]"
              >
                CONTACT US
              </Link>
            </div>
          </Reveal>
        </section>
      </HeritageBackdrop>

      {/* SUCCESS NETWORK */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 py-24">
        <Reveal className="text-center mb-12">
          <OrnamentDivider label="JOIN OUR SUCCESS NETWORK" />
          <h2 className="font-display text-4xl md:text-5xl mt-6 leading-tight">
            <span className="text-[var(--foreground)]">A trusted ecosystem of</span>{" "}
            <span className="italic text-gradient-gold">brands and leaders.</span>
          </h2>
        </Reveal>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: Briefcase, l: "Corporate Partners" },
            { icon: Newspaper, l: "Media Partners" },
            { icon: Trophy, l: "Award Partners" },
            { icon: Users, l: "Global Network" },
          ].map((x, i) => (
            <motion.div
              key={x.l}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-center p-6 rounded-sm border border-[var(--gold)]/15 bg-[var(--ink)]/60 backdrop-blur-sm"
            >
              <x.icon className="h-8 w-8 text-[var(--gold)] mx-auto mb-3" strokeWidth={1.3} />
              <div className="font-cinzel text-[10px] text-[var(--foreground)]/85 tracking-[0.25em]">
                {x.l.toUpperCase()}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden border-t border-[var(--gold)]/10">
        <motion.img
          src={dubai}
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
            <Crown className="h-8 w-8 text-[var(--gold)] mx-auto mb-5" strokeWidth={1.3} />
            <h2 className="font-display text-5xl md:text-6xl leading-[0.95]">
              <SplitWords text="Ready to elevate" className="text-[var(--foreground)]" />
              <br />
              <SplitWords text="your brand?" className="italic shimmer-text" delay={0.3} />
            </h2>
            <p className="mt-6 text-base text-[var(--foreground)]/70 max-w-md mx-auto">
              Join the elite circle of sponsors who trust Me2Connect to deliver exceptional
              brand visibility and measurable results.
            </p>
            <div className="mt-9 flex flex-wrap gap-3 justify-center">
              <MagneticButton>
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2.5 px-9 py-4 bg-gradient-gold text-obsidian font-cinzel text-[11px] font-semibold rounded-full shadow-gold tracking-[0.2em]"
                >
                  START PARTNERSHIP <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </MagneticButton>
              <a
                href="tel:+971545620456"
                className="inline-flex items-center gap-2 px-7 py-4 border border-[var(--gold)]/30 text-[var(--gold)] font-cinzel text-[11px] rounded-full hover:bg-[var(--gold)]/10 tracking-[0.2em]"
              >
                <Phone className="h-3.5 w-3.5" /> CALL FOR DETAILS
              </a>
            </div>
            <div className="mt-6 font-cinzel text-[10px] text-[var(--muted-foreground)] tracking-[0.3em]">
              ✦ TRUSTED BY LEADING BRANDS WORLDWIDE ✦
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
