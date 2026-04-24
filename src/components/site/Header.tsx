import { Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Home,
  Info,
  Crown,
  Award,
  Image as ImageIcon,
  Calendar,
  Mic2,
  Sparkles,
  Users,
  Handshake,
  Mail,
  Compass,
  Network,
  Camera,
  PhoneCall,
  type LucideIcon,
} from "lucide-react";
import { Logo } from "./Logo";

type MenuGroup = {
  label: string;
  icon: LucideIcon;
  items: ReadonlyArray<{ to: string; label: string; icon: LucideIcon }>;
};

const menus: ReadonlyArray<MenuGroup> = [
  {
    label: "Explore",
    icon: Compass,
    items: [
      { to: "/", label: "Home", icon: Home },
      { to: "/about", label: "About Us", icon: Info },
    ],
  },
  {
    label: "Network",
    icon: Network,
    items: [
      { to: "/vip-members", label: "VIP Members", icon: Crown },
      { to: "/awards", label: "Awards", icon: Award },
    ],
  },
  {
    label: "Experiences",
    icon: Camera,
    items: [
      { to: "/gallery", label: "Gallery", icon: ImageIcon },
      { to: "/events", label: "Events", icon: Calendar },
      { to: "/she-talks", label: "She Talks", icon: Mic2 },
      { to: "/rise-to-sky", label: "Rise to Sky", icon: Sparkles },
    ],
  },
  {
    label: "Connect",
    icon: PhoneCall,
    items: [
      { to: "/membership", label: "Membership", icon: Users },
      { to: "/sponsorship", label: "Sponsorship", icon: Handshake },
      { to: "/contact", label: "Contact", icon: Mail },
    ],
  },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-[var(--obsidian)]/80 border-b border-[var(--gold)]/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 h-16 flex items-center justify-between">
        <Logo />

        <nav className="hidden lg:flex items-center gap-0.5">
          {menus.map((menu) => (
            <div
              key={menu.label}
              className="relative"
              onMouseEnter={() => setActiveMenu(menu.label)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="group px-3 py-2 text-[11px] font-cinzel tracking-[0.2em] text-[var(--foreground)]/75 hover:text-[var(--gold)] transition-colors flex items-center gap-1.5">
                <menu.icon className="icon-spin-hover h-3.5 w-3.5 text-[var(--gold)]/70 group-hover:text-[var(--gold)]" strokeWidth={1.5} />
                {menu.label}
                <ChevronDown className="h-3 w-3 opacity-50 transition-transform group-hover:rotate-180" />
              </button>
              {activeMenu === menu.label && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 min-w-[210px]">
                  <div className="rounded-sm border border-[var(--gold)]/20 bg-[var(--ink)] shadow-deep py-1.5">
                    {menu.items.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className="group/item flex items-center gap-2.5 px-4 py-2 text-sm font-display text-[var(--foreground)]/85 hover:bg-[var(--gold)]/10 hover:text-[var(--gold)] transition-colors"
                        activeProps={{ className: "text-[var(--gold)] bg-[var(--gold)]/5" }}
                      >
                        <item.icon className="h-3.5 w-3.5 text-[var(--gold)]/70 transition-transform group-hover/item:translate-x-0.5" strokeWidth={1.5} />
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <Link
          to="/membership"
          className="hidden lg:inline-flex items-center px-5 py-2 rounded-full bg-gradient-gold text-obsidian font-cinzel text-[11px] font-semibold tracking-[0.15em] shadow-gold hover:scale-[1.03] transition-transform"
        >
          JOIN NETWORK
        </Link>

        <button
          className="lg:hidden text-[var(--gold)]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[var(--gold)]/15 bg-[var(--obsidian)]">
          <div className="px-6 py-6 space-y-6 max-h-[80vh] overflow-y-auto">
            {menus.map((menu) => (
              <div key={menu.label}>
                <div className="flex items-center gap-2 font-cinzel text-xs text-[var(--gold)] mb-3">
                  <menu.icon className="h-3.5 w-3.5" strokeWidth={1.5} /> {menu.label}
                </div>
                <div className="space-y-2 pl-3 border-l border-[var(--gold)]/20">
                  {menu.items.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-2.5 py-1.5 font-display text-lg text-[var(--foreground)]/85 hover:text-[var(--gold)]"
                    >
                      <item.icon className="h-4 w-4 text-[var(--gold)]/70" strokeWidth={1.5} />
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}