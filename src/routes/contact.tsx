import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { z } from "zod";
import myanmarDubaiBridge from "@/assets/myanmar-dubai-bridge.jpg";
import inleSunset from "@/assets/myanmar-inle-sunset.jpg";
import myanmarPattern from "@/assets/myanmar-pattern-ornate.jpg";
import { HeritageBackdrop } from "@/components/motion/HeritageBackdrop";
import { OrnamentDivider } from "@/components/motion/OrnamentDivider";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact · Media Wave" },
      { name: "description", content: "Reach the Media Wave concierge desk in Dubai or Yangon — for inquiries, partnerships, and private requests." },
      { property: "og:title", content: "Contact · Media Wave" },
      { property: "og:description", content: "Reach the Media Wave concierge desk in Dubai or Yangon." },
      { property: "og:image", content: myanmarDubaiBridge },
    ],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100),
  email: z.string().trim().email("Valid email required").max(255),
  message: z.string().trim().min(5, "Message is required").max(1000),
});

function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      message: String(fd.get("message") || ""),
    };
    const result = schema.safeParse(data);
    if (!result.success) {
      const errs: Record<string, string> = {};
      for (const issue of result.error.issues) errs[String(issue.path[0])] = issue.message;
      setErrors(errs);
      return;
    }
    try {
      const existing = JSON.parse(localStorage.getItem("mw_contacts") || "[]");
      existing.push({ ...result.data, submittedAt: new Date().toISOString() });
      localStorage.setItem("mw_contacts", JSON.stringify(existing));
    } catch {
      // ignore
    }
    setSubmitted(true);
  };

  return (
    <SiteLayout>
      <PageHero eyebrow="REACH US" title="Contact" subtitle="Discreet correspondence — for members, partners, and the curious few." image={myanmarDubaiBridge} />
      <HeritageBackdrop
        image={inleSunset}
        intensity={0.08}
        overlay="default"
        pattern
        patternImage={myanmarPattern}
      >
      <section className="mx-auto max-w-6xl px-6 lg:px-10 py-16">
        <OrnamentDivider label="CORRESPONDENCE" />
        <div className="mt-12 grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <Info icon={MapPin} title="Headquarters" lines={["Downtown Dubai, UAE", "Yangon, Myanmar"]} />
          <Info icon={Phone} title="Telephone" lines={["+971 50 000 0000", "+95 9 000 000 000"]} />
          <Info icon={Mail} title="Correspondence" lines={["info@mediawave.vip", "council@mediawave.vip"]} />
          <div className="ornate-frame p-6 bg-[var(--ink)]/90 backdrop-blur-md">
            <div className="font-cinzel text-[10px] text-[var(--gold)]">◆ PARTNERSHIPS ◆</div>
            <p className="mt-3 text-sm text-[var(--muted-foreground)]">
              Brand alliances, sponsorships, and cross-border ventures are reviewed quarterly.
              Direct inquiries to <span className="text-[var(--gold)]">partners@mediawave.vip</span>.
            </p>
          </div>
        </div>

        <div>
          {submitted ? (
            <div className="ornate-frame p-12 bg-[var(--ink)]/90 backdrop-blur-md text-center">
              <CheckCircle2 className="h-12 w-12 text-[var(--gold)] mx-auto" />
              <h3 className="font-display text-3xl text-gradient-gold mt-4">Message Received</h3>
              <p className="mt-3 text-[var(--muted-foreground)]">Our concierge will respond within 48 hours.</p>
            </div>
          ) : (
            <form onSubmit={submit} className="ornate-frame p-8 bg-[var(--ink)]/90 backdrop-blur-md space-y-5">
              <div>
                <label className="font-cinzel text-[10px] text-[var(--gold)]">YOUR NAME</label>
                <input name="name" className="mt-2 w-full bg-[var(--obsidian)] border border-[var(--gold)]/25 rounded-sm px-4 py-3 focus:border-[var(--gold)] focus:outline-none" />
                {errors.name && <p className="text-sm text-[var(--destructive)] mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="font-cinzel text-[10px] text-[var(--gold)]">EMAIL</label>
                <input name="email" type="email" className="mt-2 w-full bg-[var(--obsidian)] border border-[var(--gold)]/25 rounded-sm px-4 py-3 focus:border-[var(--gold)] focus:outline-none" />
                {errors.email && <p className="text-sm text-[var(--destructive)] mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="font-cinzel text-[10px] text-[var(--gold)]">MESSAGE</label>
                <textarea name="message" rows={6} maxLength={1000} className="mt-2 w-full bg-[var(--obsidian)] border border-[var(--gold)]/25 rounded-sm px-4 py-3 focus:border-[var(--gold)] focus:outline-none resize-none" />
                {errors.message && <p className="text-sm text-[var(--destructive)] mt-1">{errors.message}</p>}
              </div>
              <button type="submit" className="w-full py-4 bg-gradient-gold text-obsidian font-cinzel text-xs font-semibold rounded-full shadow-gold hover:scale-[1.02] transition-transform">
                SEND MESSAGE
              </button>
              <p className="text-[10px] text-[var(--muted-foreground)] text-center">
                Submissions are saved to our admin desk for confidential review.
              </p>
            </form>
          )}
        </div>
        </div>
      </section>
      </HeritageBackdrop>
    </SiteLayout>
  );
}

function Info({ icon: Icon, title, lines }: { icon: typeof Mail; title: string; lines: string[] }) {
  return (
    <div className="flex gap-5">
      <div className="h-12 w-12 shrink-0 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/30 flex items-center justify-center">
        <Icon className="h-5 w-5 text-[var(--gold)]" />
      </div>
      <div>
        <div className="font-cinzel text-[10px] text-[var(--gold)]">{title.toUpperCase()}</div>
        {lines.map((l) => <div key={l} className="font-display text-lg text-[var(--foreground)]/90">{l}</div>)}
      </div>
    </div>
  );
}