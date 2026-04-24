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
  Camera,
  Users,
  MessagesSquare,
  Building2,
  Award,
  Megaphone,
  Newspaper,
  Film,
  Globe2,
  Sparkles,
  ArrowRight,
  Quote,
  Phone,
} from "lucide-react";
import rise from "@/assets/rise-to-sky.jpg";
import dubai from "@/assets/dubai-skyline.jpg";
import vipGala from "@/assets/vip-gala.jpg";
import goldAward from "@/assets/gold-award.jpg";
import sheTalks from "@/assets/she-talks.jpg";

export const Route = createFileRoute("/rise-to-sky")({
  head: () => ({
    meta: [
      { title: "Rise to Sky · UAE Icon Talk Show · Me2Connect" },
      { name: "description", content: "A documentary-style podcast celebrating the journeys of UAE's icons — every episode inspires, elevates, and celebrates the leaders shaping the UAE." },
      { property: "og:title", content: "Rise to Sky · UAE Icon Talk Show" },
      { property: "og:description", content: "Documentary podcast featuring UAE business icons." },
      { property: "og:image", content: rise },
    ],
  }),
  component: RiseToSky,
});

const stories = [
  { icon: Users, t: "Personal Journeys", d: "How our guests started, their sacrifices, passion, and remarkable rise to becoming UAE icons." },
  { icon: MessagesSquare, t: "Support Systems", d: "Family, friends, mentors, and key clients who shaped their path to success." },
  { icon: Quote, t: "Authentic Testimonials", d: "From clients, staff, and collaborators highlighting their real impact across the UAE." },
  { icon: Building2, t: "Behind-the-Scenes", d: "A glimpse into offices, products, and operations — see how UAE icons work and create." },
  { icon: Award, t: "On-Stage Honours", d: "Celebrating achievements with recognition and awards at prestigious international events in Abu Dhabi." },
  { icon: Megaphone, t: "Brand Showcase", d: "Showcase your brand and products during the show, with media features in UAE Times." },
];

const packageItems = [
  { icon: Camera, t: "1 Hour Professional Shoot", points: ["Office coverage", "Client testimonials", "Staff testimonials", "Family clips (if required)", "4K professional equipment"] },
  { icon: Film, t: "4 Promotional Reels", points: ["Instagram & LinkedIn optimised", "Professional editing & graphics", "Music and sound design", "Multiple format exports"] },
  { icon: Megaphone, t: "30–40 min Documentary Podcast", points: ["Published on official channel", "Professional audio & video editing", "YouTube distribution", "Podcast platform distribution"] },
  { icon: Newspaper, t: "Feature in UAE Times", points: ["Professional journalist interview", "High-quality photography", "Digital and print distribution", "Social media promotion"] },
  { icon: Award, t: "Memento on Stage", points: ["Stage presentation in Abu Dhabi", "November 23rd ceremony", "International Desert Fashion Week", "Certificate of recognition"] },
  { icon: Globe2, t: "Pre & Post Promotions", points: ["All media platforms coverage", "Social media campaigns", "Press release distribution", "Email marketing support"] },
];

const testimonials = [
  { name: "Ahmed Al Mansouri", role: "CEO & Founder, Emirates Innovation Hub", quote: "Rise to Sky captured my journey authentically. The documentary showcased not just my success, but the real struggles and the people who made it possible. It opened doors I never imagined." },
  { name: "Fatima Al Zahra", role: "Founder & Chairwoman, Dubai Tech Ventures", quote: "The professional quality exceeded all expectations. My story reached audiences across the globe, and the International Brand Icons Award ceremony was unforgettable." },
  { name: "Mohammed Al Rashid", role: "Chairman, Gulf Business Network", quote: "An investment that transformed my personal brand. The behind-the-scenes footage and testimonials from my team created powerful content for business development." },
  { name: "Layla Al Maktoum", role: "Managing Director, UAE Future Enterprises", quote: "The feature article in UAE Times and the promotional reels gave my brand incredible visibility. The whole experience was professionally managed." },
];

function RiseToSky() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="UAE'S PREMIER BUSINESS DOCUMENTARY SERIES"
        title="Rise to Sky"
        subtitle="The UAE Icon Talk Show — a documentary-style podcast celebrating the journeys of leaders shaping the nation."
        image={rise}
      />

      {/* HERO STATS */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 -mt-10 pb-16">
        <Reveal>
          <div className="rounded-sm border border-[var(--gold)]/20 bg-[var(--ink)]/70 backdrop-blur-sm p-8 grid md:grid-cols-4 gap-6 text-center">
            {[
              { n: 500, suffix: "+", l: "Success Stories Documented" },
              { n: 50, suffix: "M+", l: "Total Video Views" },
              { n: 25, suffix: "+", l: "Countries Reached" },
              { n: 98, suffix: "%", l: "Client Satisfaction" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl md:text-4xl text-gradient-gold leading-none font-light">
                  <Counter to={s.n} suffix={s.suffix} />
                </div>
                <div className="font-cinzel text-[10px] text-[var(--muted-foreground)] mt-2 tracking-[0.25em]">
                  {s.l.toUpperCase()}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* WHAT MAKES YOUR STORY */}
      <HeritageBackdrop image={dubai} intensity={0.07} overlay="default" className="border-y border-[var(--gold)]/10">
        <section className="mx-auto max-w-7xl px-6 lg:px-12 py-24">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <OrnamentDivider label="WHAT MAKES YOUR STORY EXTRAORDINARY" />
            <h2 className="font-display text-4xl md:text-5xl mt-6 leading-tight">
              <span className="text-[var(--foreground)]">Cinematic quality.</span>{" "}
              <span className="italic text-gradient-gold">Authentic storytelling.</span>
            </h2>
            <p className="mt-5 text-[var(--foreground)]/70">
              We capture every aspect of your journey, from the first spark to the legacy you build.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {stories.map((s, i) => (
              <motion.div
                key={s.t}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.07, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                className="group p-7 rounded-sm border border-[var(--gold)]/15 bg-[var(--ink)]/60 backdrop-blur-sm hover:border-[var(--gold)]/40 transition-all"
              >
                <s.icon className="h-7 w-7 text-[var(--gold)]" strokeWidth={1.4} />
                <h3 className="font-display text-xl italic mt-4">{s.t}</h3>
                <p className="text-sm text-[var(--foreground)]/70 mt-2 leading-relaxed">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </HeritageBackdrop>

      {/* PACKAGE */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 py-24">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <OrnamentDivider label="COMPLETE DOCUMENTARY PACKAGE" />
          <h2 className="font-display text-4xl md:text-5xl mt-6 leading-tight">
            <span className="text-[var(--foreground)]">Everything to showcase</span>{" "}
            <span className="italic text-gradient-gold">your story.</span>
          </h2>
          <div className="mt-6 inline-flex items-baseline gap-2">
            <span className="font-display text-5xl text-gradient-gold">AED 10,000</span>
            <span className="font-cinzel text-[10px] text-[var(--muted-foreground)] tracking-[0.25em]">ONE-TIME</span>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {packageItems.map((it, i) => (
            <motion.div
              key={it.t}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.07, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="group p-7 rounded-sm border border-[var(--gold)]/15 bg-[var(--ink)]/60 backdrop-blur-sm hover:border-[var(--gold)]/40 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <it.icon className="h-6 w-6 text-[var(--gold)]" strokeWidth={1.4} />
                <h3 className="font-display text-lg italic leading-tight">{it.t}</h3>
              </div>
              <ul className="space-y-2">
                {it.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-[var(--foreground)]/70">
                    <span className="h-1 w-1 rounded-full bg-[var(--gold)] mt-2 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA BAND */}
      <HeritageBackdrop image={vipGala} intensity={0.07} overlay="default" className="border-y border-[var(--gold)]/10">
        <section className="mx-auto max-w-7xl px-6 lg:px-12 py-20">
          <Reveal className="text-center mb-10">
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              <span className="text-[var(--foreground)]">Ready to become a</span>{" "}
              <span className="italic shimmer-text">UAE Icon?</span>
            </h2>
            <p className="mt-5 text-[var(--foreground)]/70 max-w-xl mx-auto">
              Join the exclusive circle of UAE's most celebrated business leaders. Your story
              deserves to inspire the next generation.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: Award, t: "Exclusive Recognition", d: "International Brand Icons Award ceremony in Abu Dhabi" },
              { icon: Globe2, t: "Global Exposure", d: "International stage display and media coverage" },
              { icon: Sparkles, t: "Brand Elevation", d: "Complete documentary and promotional package" },
            ].map((b, i) => (
              <motion.div
                key={b.t}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="text-center p-6 rounded-sm border border-[var(--gold)]/15 bg-[var(--ink)]/60 backdrop-blur-sm"
              >
                <b.icon className="h-7 w-7 text-[var(--gold)] mx-auto mb-3" strokeWidth={1.3} />
                <h3 className="font-display text-lg italic">{b.t}</h3>
                <p className="text-sm text-[var(--foreground)]/65 mt-2">{b.d}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <MagneticButton>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-4 bg-gradient-gold text-obsidian font-cinzel text-[11px] font-semibold rounded-full shadow-gold tracking-[0.2em]"
              >
                APPLY NOW <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </MagneticButton>
            <MagneticButton strength={0.2}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-4 border border-[var(--gold)]/30 text-[var(--gold)] font-cinzel text-[11px] font-semibold rounded-full hover:bg-[var(--gold)]/10 tracking-[0.2em]"
              >
                DISCUSS DETAILS
              </Link>
            </MagneticButton>
          </div>
        </section>
      </HeritageBackdrop>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 py-24">
        <Reveal className="text-center mb-12">
          <OrnamentDivider label="SUCCESS STORIES" />
          <h2 className="font-display text-4xl md:text-5xl mt-6 leading-tight">
            <span className="text-[var(--foreground)]">From the leaders who</span>{" "}
            <span className="italic text-gradient-gold">trusted us.</span>
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -3 }}
              className="p-8 rounded-sm border border-[var(--gold)]/15 bg-[var(--ink)]/60 backdrop-blur-sm hover:border-[var(--gold)]/40 transition-all"
            >
              <Quote className="h-7 w-7 text-[var(--gold)]/60" strokeWidth={1.3} />
              <p className="mt-4 text-[var(--foreground)]/80 leading-relaxed italic font-display text-lg">
                "{t.quote}"
              </p>
              <div className="mt-5 pt-5 border-t border-[var(--gold)]/10">
                <div className="font-display text-lg italic">{t.name}</div>
                <div className="font-cinzel text-[10px] text-[var(--muted-foreground)] mt-1 tracking-[0.2em]">
                  {t.role.toUpperCase()}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY DIFFERENT */}
      <HeritageBackdrop image={goldAward} intensity={0.06} overlay="default" className="border-y border-[var(--gold)]/10">
        <section className="mx-auto max-w-7xl px-6 lg:px-12 py-24">
          <Reveal className="text-center mb-14">
            <OrnamentDivider label="WHY RISE TO SKY IS DIFFERENT" />
            <h2 className="font-display text-4xl md:text-5xl mt-6 leading-tight">
              <span className="text-[var(--foreground)]">We don't just create content —</span>
              <br />
              <span className="italic text-gradient-gold">we craft legacies.</span>
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: Award, t: "International Recognition", d: "Be honoured at the prestigious International Brand Icons Award alongside global leaders in Abu Dhabi." },
              { icon: Globe2, t: "Multi-Platform Reach", d: "Your story reaches millions through our official channels, UAE Times, and international media partnerships." },
              { icon: Sparkles, t: "Complete Package", d: "From documentary filming to international stage presentation — everything in one comprehensive package." },
            ].map((p, i) => (
              <motion.div
                key={p.t}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="p-7 rounded-sm border border-[var(--gold)]/15 bg-[var(--ink)]/60 backdrop-blur-sm"
              >
                <p.icon className="h-7 w-7 text-[var(--gold)]" strokeWidth={1.3} />
                <h3 className="font-display text-xl italic mt-4">{p.t}</h3>
                <p className="text-sm text-[var(--foreground)]/70 mt-2 leading-relaxed">{p.d}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </HeritageBackdrop>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden border-t border-[var(--gold)]/10">
        <motion.img
          src={sheTalks}
          alt=""
          loading="lazy"
          initial={{ scale: 1.15 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)] via-[var(--background)]/85 to-[var(--background)]" />
        <div className="relative mx-auto max-w-3xl px-6 py-24 text-center">
          <Reveal>
            <h2 className="font-display text-5xl md:text-6xl leading-[0.95]">
              <SplitWords text="Your story." className="text-[var(--foreground)]" />
              <br />
              <SplitWords text="Your legacy." className="italic text-gradient-gold" delay={0.2} />
              <br />
              <SplitWords text="Your time." className="italic shimmer-text" delay={0.4} />
            </h2>
            <p className="mt-6 text-base text-[var(--foreground)]/70 max-w-md mx-auto">
              Every great leader has a story worth telling. Don't let yours remain untold.
            </p>
            <div className="mt-8 inline-flex items-baseline gap-2">
              <span className="font-display text-4xl text-gradient-gold">AED 10,000</span>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <MagneticButton>
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2.5 px-9 py-4 bg-gradient-gold text-obsidian font-cinzel text-[11px] font-semibold rounded-full shadow-gold tracking-[0.2em]"
                >
                  SECURE YOUR SPOT <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </MagneticButton>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-4 border border-[var(--gold)]/30 text-[var(--gold)] font-cinzel text-[11px] rounded-full hover:bg-[var(--gold)]/10 tracking-[0.2em]"
              >
                <Phone className="h-3.5 w-3.5" /> CALL FOR DETAILS
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
