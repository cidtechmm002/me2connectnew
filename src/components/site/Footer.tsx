import { Link } from "@tanstack/react-router";
import {
  Info,
  Calendar,
  Mic2,
  Sparkles,
  Handshake,
  Mail,
  MapPin,
  Phone,
  AtSign,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
} from "lucide-react";
import weLogo from "@/assets/we-marketing-logo.png";
import { Logo } from "./Logo";

const navLinks = [
  { to: "/about", label: "About", icon: Info },
  { to: "/events", label: "Events & Exhibitions", icon: Calendar },
  { to: "/she-talks", label: "She Talks", icon: Mic2 },
  { to: "/rise-to-sky", label: "Rise to Sky", icon: Sparkles },
  { to: "/sponsorship", label: "Sponsorship", icon: Handshake },
  { to: "/contact", label: "Contact Us", icon: Mail },
] as const;

const socials = [
  { href: "https://instagram.com", label: "Instagram", icon: Instagram },
  { href: "https://facebook.com", label: "Facebook", icon: Facebook },
  { href: "https://linkedin.com", label: "LinkedIn", icon: Linkedin },
  { href: "https://youtube.com", label: "YouTube", icon: Youtube },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-[var(--gold)]/10 bg-[var(--obsidian)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-14 grid gap-10 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Logo />
          <p className="mt-5 max-w-md text-sm leading-relaxed text-[var(--muted-foreground)]">
            Me2Connect — Meetups & Events To Connect. A UAE-based global networking and event
            platform focused on marketing, branding and business connections. Empowering
            connections, inspiring growth.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="group h-9 w-9 rounded-full border border-[var(--gold)]/25 flex items-center justify-center hover:border-[var(--gold)] hover:bg-[var(--gold)]/10 transition-all hover:-translate-y-0.5"
              >
                <s.icon className="h-4 w-4 text-[var(--gold)]/80 group-hover:text-[var(--gold)] transition-colors" strokeWidth={1.5} />
              </a>
            ))}
          </div>
          <div className="mt-7">
            <div className="font-cinzel text-[10px] text-[var(--muted-foreground)] mb-3 tracking-[0.3em]">DIGITAL PARTNER</div>
            <a
              href="https://wemarketing.com.mm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-[var(--gold)]/20 px-4 py-2.5 rounded-sm hover:border-[var(--gold)]/50 transition-colors"
            >
              <img src={weLogo} alt="WE Marketing Group" className="h-8 w-auto" loading="lazy" />
            </a>
          </div>
        </div>

        <div>
          <div className="font-cinzel text-[10px] text-[var(--gold)] mb-4 tracking-[0.3em]">NAVIGATE</div>
          <ul className="space-y-2.5 font-display text-sm text-[var(--foreground)]/75">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="group inline-flex items-center gap-2.5 hover:text-[var(--gold)] transition-colors"
                >
                  <l.icon className="h-3.5 w-3.5 text-[var(--gold)]/70 transition-transform group-hover:translate-x-0.5" strokeWidth={1.5} />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="font-cinzel text-[10px] text-[var(--gold)] mb-4 tracking-[0.3em]">CONTACT</div>
          <ul className="space-y-2.5 font-display text-sm text-[var(--foreground)]/75">
            <li className="flex items-center gap-2.5">
              <MapPin className="h-3.5 w-3.5 text-[var(--gold)]/70" strokeWidth={1.5} /> Dubai, UAE
            </li>
            <li>
              <a href="mailto:info@me2connect.com" className="group inline-flex items-center gap-2.5 hover:text-[var(--gold)] transition-colors">
                <AtSign className="h-3.5 w-3.5 text-[var(--gold)]/70 transition-transform group-hover:scale-110" strokeWidth={1.5} />
                info@me2connect.com
              </a>
            </li>
            <li>
              <a href="tel:+971545620456" className="group inline-flex items-center gap-2.5 hover:text-[var(--gold)] transition-colors">
                <Phone className="h-3.5 w-3.5 text-[var(--gold)]/70 transition-transform group-hover:rotate-12" strokeWidth={1.5} />
                +971 54 562 0456
              </a>
            </li>
            <li>
              <a href="tel:+971554506995" className="group inline-flex items-center gap-2.5 hover:text-[var(--gold)] transition-colors">
                <Phone className="h-3.5 w-3.5 text-[var(--gold)]/70 transition-transform group-hover:rotate-12" strokeWidth={1.5} />
                +971 55 450 6995
              </a>
            </li>
            <li>
              <a href="tel:+971589917404" className="group inline-flex items-center gap-2.5 hover:text-[var(--gold)] transition-colors">
                <Phone className="h-3.5 w-3.5 text-[var(--gold)]/70 transition-transform group-hover:rotate-12" strokeWidth={1.5} />
                +971 58 991 7404
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[var(--gold)]/10 py-5 text-center font-cinzel text-[10px] text-[var(--muted-foreground)] tracking-[0.3em]">
        © {new Date().getFullYear()} ZYPER ZONE TECHNOLOGY L.L.C · ME2CONNECT · ALL RIGHTS RESERVED
      </div>
    </footer>
  );
}