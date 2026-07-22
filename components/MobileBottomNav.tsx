"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const TABS = [
  { href: "/", label: "Discover", icon: "🔎" },
  { href: "/customer", label: "Bookings", icon: "📅" },
  { href: "/owner", label: "Wallet", icon: "💰" },
  { href: "/contact", label: "Profile", icon: "👤" },
];

export default function MobileBottomNav() {
  const pathname = usePathname();
  return (
    <nav className="mobile-only fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur border-t border-brand-borderLight">
      <div className="grid grid-cols-4 max-w-screen-sm mx-auto">
        {TABS.map((t) => {
          const active = pathname === t.href;
          return (
            <Link key={t.href} href={t.href} className={`flex flex-col items-center py-2.5 gap-1 ${active ? "text-brand-primary" : "text-brand-textMuted"}`}>
              <span className="text-lg leading-none">{t.icon}</span>
              <span className={`text-[11px] font-semibold ${active ? "" : ""}`}>{t.label}</span>
            </Link>
          );
        })}
      </div>
      <div className="h-[env(safe-area-inset-bottom)]" />
    </nav>
  );
}
