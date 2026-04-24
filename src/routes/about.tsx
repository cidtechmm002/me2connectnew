import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal, SplitWords } from "@/components/motion/Reveal";
import shwedagonMonks from "@/assets/myanmar-shwedagon-monks.jpg";
import baganDawn from "@/assets/myanmar-bagan-dawn.jpg";
import myanmarDubaiBridge from "@/assets/myanmar-dubai-bridge.jpg";
import inleSunset from "@/assets/myanmar-inle-sunset.jpg";
import myanmarPattern from "@/assets/myanmar-pattern-ornate.jpg";
import { HeritageBackdrop, GoldenParticles } from "@/components/motion/HeritageBackdrop";
import { OrnamentDivider } from "@/components/motion/OrnamentDivider";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us · Media Wave" },
      { name: "description", content: "Media Wave — a subsidiary of Dubai's leading network, building bridges between Myanmar's elite and the world's most prestigious circles." },
      { property: "og:title", content: "About Us · Media Wave" },
      { property: "og:description", content: "A subsidiary of Dubai's leading network, building bridges between Myanmar's elite and the world." },
      { property: "og:image", content: shwedagonMonks },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="OUR STORY"
        title="A Bridge Between Two Worlds"
        subtitle="Born from Dubai's most prestigious media institution, designed for Myanmar's most ambitious leaders."
        image={shwedagonMonks}
      />
      <HeritageBackdrop
        image={baganDawn}
        intensity={0.08}
        overlay="default"
        pattern
        patternImage={myanmarPattern}
      >
        <section className="mx-auto max-w-5xl px-6 lg:px-10 py-24 grid lg:grid-cols-2 gap-16 items-start">
          <Reveal>
            <div className="font-cinzel text-xs text-[var(--gold)] mb-4">◆ HERITAGE ◆</div>
            <h2 className="font-display text-4xl text-gradient-gold mb-6">
              <SplitWords text="Under the Wing of Media Wave Dubai" />
            </h2>
            <p className="text-[var(--foreground)]/75 leading-relaxed">
              Media Wave Myanmar is a subsidiary of Media Wave Dubai — one of the largest networks
              in the Emirates. We do not sell advertising. We curate access. Our purpose is to
              elevate Myanmar's most distinguished entrepreneurs into a global circle of influence.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="font-cinzel text-xs text-[var(--gold)] mb-4">◆ MISSION ◆</div>
            <h2 className="font-display text-4xl text-gradient-gold mb-6">
              <SplitWords text="More Than Membership" delay={0.2} />
            </h2>
            <p className="text-[var(--foreground)]/75 leading-relaxed">
              Membership begins at 25 lakh MMK and ascends to 100 lakh, granting tiered access to
              official awards, private galas, real-estate consortiums, and direct networking with
              Dubai's leading tycoons in property, hospitality, and lifestyle.
            </p>
          </Reveal>
        </section>
      </HeritageBackdrop>

      <OrnamentDivider label="EAST · MEETS · EAST" />

      {/* Fusion banner */}
      <section className="relative overflow-hidden">
        <motion.img
          src={myanmarDubaiBridge}
          alt="Dubai meets Myanmar"
          className="w-full h-[70vh] object-cover"
          loading="lazy"
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/30 to-[var(--background)]/60" />
        <GoldenParticles count={8} />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <Reveal>
            <p className="font-display italic text-3xl md:text-5xl text-gradient-gold max-w-3xl mx-auto text-center leading-tight">
              "Prestige is not announced — it is recognized."
            </p>
          </Reveal>
        </div>
      </section>

      {/* Cultural roots — U Bein silhouette */}
      <section className="relative overflow-hidden border-t border-[var(--gold)]/10">
        <motion.img
          src={inleSunset}
          alt="Inle Lake at sunset"
          className="w-full h-[60vh] object-cover opacity-50"
          loading="lazy"
          initial={{ scale: 1.15 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)]/40 via-transparent to-[var(--background)]" />
        <div className="absolute inset-x-0 top-1/3 text-center px-6">
          <Reveal>
            <div className="font-cinzel text-[10px] text-[var(--gold)] mb-3 tracking-[0.4em]">SINCE THE GOLDEN AGE</div>
            <h2 className="font-display text-4xl md:text-6xl text-[var(--foreground)]">
              <span className="italic shimmer-text">A heritage</span> that walks <br/> across centuries.
            </h2>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}