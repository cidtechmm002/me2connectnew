import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef } from "react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Upload, FileCheck2, AlertCircle, CheckCircle2 } from "lucide-react";
import { z } from "zod";
import shwedagonMonks from "@/assets/myanmar-shwedagon-monks.jpg";
import baganDawn from "@/assets/myanmar-bagan-dawn.jpg";
import myanmarPattern from "@/assets/myanmar-pattern-ornate.jpg";
import { HeritageBackdrop } from "@/components/motion/HeritageBackdrop";
import { OrnamentDivider } from "@/components/motion/OrnamentDivider";

export const Route = createFileRoute("/membership")({
  head: () => ({
    meta: [
      { title: "Membership Application · Media Wave" },
      { name: "description", content: "Apply for Media Wave VIP Membership — submit your CV or business profile for council review." },
      { property: "og:title", content: "Membership · Media Wave" },
      { property: "og:description", content: "Submit your CV or business profile for council review." },
      { property: "og:image", content: shwedagonMonks },
    ],
  }),
  component: Membership,
});

const MAX_SIZE = 5 * 1024 * 1024;

const schema = z.object({
  fullName: z.string().trim().min(2, "Name is required").max(100),
  email: z.string().trim().email("Valid email required").max(255),
  phone: z.string().trim().min(6, "Phone required").max(30),
  company: z.string().trim().max(150).optional(),
  tier: z.enum(["sapphire", "emerald", "ruby", "diamond"]),
  notes: z.string().trim().max(800).optional(),
});

function Membership() {
  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = (f: File | null) => {
    setFileError("");
    if (!f) return setFile(null);
    if (f.type !== "application/pdf") {
      setFileError("Only PDF files are accepted.");
      return;
    }
    if (f.size > MAX_SIZE) {
      setFileError("File must be under 5MB.");
      return;
    }
    setFile(f);
  };

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    const fd = new FormData(e.currentTarget);
    const data = {
      fullName: String(fd.get("fullName") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      company: String(fd.get("company") || ""),
      tier: String(fd.get("tier") || "sapphire"),
      notes: String(fd.get("notes") || ""),
    };
    const result = schema.safeParse(data);
    if (!result.success) {
      const errs: Record<string, string> = {};
      for (const issue of result.error.issues) {
        errs[String(issue.path[0])] = issue.message;
      }
      setErrors(errs);
      return;
    }
    if (!file) {
      setFileError("Please upload your CV or business profile (PDF).");
      return;
    }

    // Save to admin backend (localStorage for frontend-only build)
    try {
      const existing = JSON.parse(localStorage.getItem("mw_applications") || "[]");
      existing.push({
        ...result.data,
        fileName: file.name,
        fileSize: file.size,
        submittedAt: new Date().toISOString(),
      });
      localStorage.setItem("mw_applications", JSON.stringify(existing));
    } catch {
      // ignore storage errors
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <SiteLayout>
        <section className="mx-auto max-w-2xl px-6 py-32 text-center">
          <CheckCircle2 className="h-16 w-16 text-[var(--gold)] mx-auto" />
          <h1 className="font-display text-5xl text-gradient-gold mt-6">Application Received</h1>
          <p className="mt-6 text-[var(--foreground)]/75 leading-relaxed">
            Thank you. Your profile has been forwarded to our membership council. A confidential
            response will reach you within 7 business days.
          </p>
        </section>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <PageHero
        eyebrow="APPLY"
        title="Membership Application"
        subtitle="A discreet review process. Submit your CV or business profile to be considered."
        image={shwedagonMonks}
      />
      <HeritageBackdrop
        image={baganDawn}
        intensity={0.08}
        overlay="default"
        pattern
        patternImage={myanmarPattern}
      >
      <section className="mx-auto max-w-3xl px-6 lg:px-10 py-16">
        <OrnamentDivider label="APPLICATION" />
        <form onSubmit={submit} className="ornate-frame p-8 md:p-12 bg-[var(--ink)]/90 backdrop-blur-md space-y-6 mt-10">
          <Field label="Full Name" name="fullName" error={errors.fullName} />
          <div className="grid md:grid-cols-2 gap-6">
            <Field label="Email" name="email" type="email" error={errors.email} />
            <Field label="Phone / WhatsApp" name="phone" error={errors.phone} />
          </div>
          <Field label="Company / Organization" name="company" error={errors.company} />

          <div>
            <label className="font-cinzel text-[10px] text-[var(--gold)]">PREFERRED TIER</label>
            <select
              name="tier"
              defaultValue="sapphire"
              className="mt-2 w-full bg-[var(--obsidian)] border border-[var(--gold)]/25 rounded-sm px-4 py-3 text-[var(--foreground)] focus:border-[var(--gold)] focus:outline-none"
            >
              <option value="sapphire">Sapphire — 25 Lakh MMK</option>
              <option value="emerald">Emerald — 50 Lakh MMK</option>
              <option value="ruby">Ruby — 75 Lakh MMK</option>
              <option value="diamond">Diamond — 100 Lakh MMK</option>
            </select>
          </div>

          {/* CV Upload */}
          <div>
            <label className="font-cinzel text-[10px] text-[var(--gold)]">CV / BUSINESS PROFILE (PDF, max 5MB)</label>
            <div
              onClick={() => inputRef.current?.click()}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                handleFile(e.dataTransfer.files?.[0] ?? null);
              }}
              className="mt-2 cursor-pointer border-2 border-dashed border-[var(--gold)]/30 hover:border-[var(--gold)]/70 rounded-sm p-10 text-center transition-colors"
            >
              {file ? (
                <div className="flex items-center justify-center gap-3 text-[var(--gold)]">
                  <FileCheck2 className="h-6 w-6" />
                  <div className="text-left">
                    <div className="font-display text-base">{file.name}</div>
                    <div className="text-xs text-[var(--muted-foreground)]">
                      {(file.size / 1024 / 1024).toFixed(2)} MB · Click to change
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <Upload className="h-7 w-7 text-[var(--gold)] mx-auto" />
                  <div className="mt-3 font-display text-lg">Drop PDF here or click to browse</div>
                  <div className="text-xs text-[var(--muted-foreground)] mt-1">PDF only · 5MB maximum</div>
                </div>
              )}
              <input
                ref={inputRef}
                type="file"
                accept="application/pdf"
                onChange={(e) => handleFile(e.target.files?.[0] ?? null)}
                className="hidden"
              />
            </div>
            {fileError && (
              <div className="mt-2 flex items-center gap-2 text-sm text-[var(--destructive)]">
                <AlertCircle className="h-4 w-4" /> {fileError}
              </div>
            )}
          </div>

          <div>
            <label className="font-cinzel text-[10px] text-[var(--gold)]">A WORD ABOUT YOU (OPTIONAL)</label>
            <textarea
              name="notes"
              rows={4}
              maxLength={800}
              className="mt-2 w-full bg-[var(--obsidian)] border border-[var(--gold)]/25 rounded-sm px-4 py-3 text-[var(--foreground)] focus:border-[var(--gold)] focus:outline-none resize-none"
            />
            {errors.notes && <p className="text-sm text-[var(--destructive)] mt-1">{errors.notes}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-gradient-gold text-obsidian font-cinzel text-xs font-semibold rounded-full shadow-gold hover:scale-[1.02] transition-transform"
          >
            SUBMIT FOR COUNCIL REVIEW
          </button>
        </form>
      </section>
      </HeritageBackdrop>
    </SiteLayout>
  );
}

function Field({
  label, name, type = "text", error,
}: { label: string; name: string; type?: string; error?: string }) {
  return (
    <div>
      <label className="font-cinzel text-[10px] text-[var(--gold)]">{label.toUpperCase()}</label>
      <input
        type={type}
        name={name}
        className="mt-2 w-full bg-[var(--obsidian)] border border-[var(--gold)]/25 rounded-sm px-4 py-3 text-[var(--foreground)] focus:border-[var(--gold)] focus:outline-none"
      />
      {error && <p className="text-sm text-[var(--destructive)] mt-1">{error}</p>}
    </div>
  );
}