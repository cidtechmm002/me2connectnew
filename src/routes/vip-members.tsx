import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import vipGala from "@/assets/vip-gala.jpg";
import mandalayPalace from "@/assets/myanmar-mandalay-palace.jpg";
import shwedagonMonks from "@/assets/myanmar-shwedagon-monks.jpg";
import myanmarPattern from "@/assets/myanmar-pattern-ornate.jpg";
import { HeritageBackdrop } from "@/components/motion/HeritageBackdrop";
import { OrnamentDivider } from "@/components/motion/OrnamentDivider";
import { Crown } from "lucide-react";

export const Route = createFileRoute("/vip-members")({
  head: () => ({
    meta: [
      { title: "VIP Members · Media Wave" },
      { name: "description", content: "Meet the distinguished circle of VIP members shaping the Myanmar-Dubai network." },
      { property: "og:title", content: "VIP Members · Media Wave" },
      { property: "og:description", content: "The distinguished circle shaping the Myanmar-Dubai network." },
      { property: "og:image", content: vipGala },
    ],
  }),
  component: VipMembers,
});

const tiers = [
  { name: "Sapphire", price: "25 Lakh", perks: ["Quarterly gala access", "Awards eligibility", "Member directory"] },
  { name: "Emerald", price: "50 Lakh", perks: ["All Sapphire", "Private dinners with tycoons", "Concierge desk"] },
  { name: "Ruby", price: "75 Lakh", perks: ["All Emerald", "Real-estate consortium", "Personal advisor"] },
  { name: "Diamond", price: "100 Lakh", perks: ["All Ruby", "Founder's table", "Lifetime status"] },
];

function VipMembers() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="THE CIRCLE"
        title="VIP Members"
        subtitle="A confidential network of leaders, founders, and visionaries — bound by excellence."
        image={shwedagonMonks}
      />
      <HeritageBackdrop
        image={mandalayPalace}
        intensity={0.08}
        overlay="default"
        pattern
        patternImage={myanmarPattern}
      >
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
        <OrnamentDivider label="THE TIERS" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 50, rotateX: -8 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.9, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              style={{ transformPerspective: 1000 }}
              className="ornate-frame p-8 bg-[var(--ink)]/85 backdrop-blur-md hover:shadow-gold transition-shadow"
            >
              <motion.div
                animate={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 0.3 }}
              >
                <Crown className="h-7 w-7 text-[var(--gold)]" />
              </motion.div>
              <div className="font-cinzel text-[10px] text-[var(--muted-foreground)] mt-4">TIER</div>
              <h3 className="font-display text-3xl text-gradient-gold mt-1">{t.name}</h3>
              <div className="mt-4 font-display text-2xl text-[var(--foreground)]">{t.price} <span className="text-sm text-[var(--muted-foreground)]">MMK</span></div>
              <div className="gold-divider my-5" />
              <ul className="space-y-2 text-sm text-[var(--foreground)]/80">
                {t.perks.map((p) => <li key={p}>◆ {p}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
      </HeritageBackdrop>
      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <Reveal>
          <p className="font-display italic text-2xl text-[var(--foreground)]/80">
            Membership is by invitation and council review only. All identities remain confidential.
          </p>
        </Reveal>
      </section>
    </SiteLayout>
  );
}