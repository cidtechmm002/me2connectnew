import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import goldAward from "@/assets/gold-award.jpg";
import mandalayPalace from "@/assets/myanmar-mandalay-palace.jpg";
import myanmarPattern from "@/assets/myanmar-pattern-ornate.jpg";
import { HeritageBackdrop } from "@/components/motion/HeritageBackdrop";
import { OrnamentDivider } from "@/components/motion/OrnamentDivider";

export const Route = createFileRoute("/awards")({
  head: () => ({
    meta: [
      { title: "Awards · Media Wave" },
      { name: "description", content: "Official recognition for excellence — Media Wave Awards honor leaders shaping Myanmar's future." },
      { property: "og:title", content: "Awards · Media Wave" },
      { property: "og:description", content: "Official recognition for excellence in business, culture, and impact." },
      { property: "og:image", content: goldAward },
    ],
  }),
  component: Awards,
});

const categories = [
  { t: "Entrepreneur of the Year", d: "Visionary leadership in business expansion." },
  { t: "Real Estate Excellence", d: "Outstanding development across Myanmar & UAE." },
  { t: "Cultural Ambassador", d: "Championing Myanmar heritage on the world stage." },
  { t: "Women in Leadership", d: "Honoring trailblazing female executives." },
  { t: "Hospitality & Lifestyle", d: "Defining the new luxury experience." },
  { t: "Lifetime Achievement", d: "A legacy of impact across decades." },
];

function Awards() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="OFFICIAL HONORS"
        title="Awards of Distinction"
        subtitle="Formally bestowed at our annual gala in Dubai — recognizing the most extraordinary among us."
        image={mandalayPalace}
      />
      <HeritageBackdrop
        image={mandalayPalace}
        intensity={0.08}
        overlay="default"
        pattern
        patternImage={myanmarPattern}
      >
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
      <OrnamentDivider label="THE HONORS" />
      <div className="mt-12 grid lg:grid-cols-3 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -60, rotate: -3 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-1"
        >
          <motion.img
            src={goldAward}
            alt="Gold award trophy"
            loading="lazy"
            className="rounded-sm shadow-deep ornate-frame"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-5">
          {categories.map((c, i) => (
            <motion.div
              key={c.t}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="border-l-2 border-[var(--gold)] pl-5 py-2 hover:border-l-4 hover:pl-4 transition-all"
            >
              <h3 className="font-display text-xl text-gradient-gold">{c.t}</h3>
              <p className="text-sm text-[var(--muted-foreground)] mt-1.5 leading-relaxed">{c.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
      </section>
      </HeritageBackdrop>
    </SiteLayout>
  );
}