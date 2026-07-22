"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/customer", label: "Customers" },
  { href: "/owner", label: "Salon Owners" },
  { href: "/stylist", label: "Stylists" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-30 bg-brand-bg/95 backdrop-blur border-b border-brand-borderLight">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 md:h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-brand-primary text-brand-goldSoft flex items-center justify-center font-black text-lg">G</div>
          <span className="text-xl font-black tracking-tight">Glamgo</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className={`px-3 py-2 rounded-full text-sm font-semibold ${pathname === n.href ? "bg-brand-primary text-white" : "text-brand-text hover:bg-brand-goldTint"}`}>
              {n.label}
            </Link>
          ))}
          <Link href="#download" className="ml-2 px-4 py-2 rounded-full bg-brand-gold text-white text-sm font-bold shadow-gold hover:bg-brand-goldSoft">Get the app</Link>
        </nav>
        <Link href="#download" className="md:hidden px-3 py-1.5 rounded-full bg-brand-gold text-white text-xs font-bold">Get the app</Link>
      </div>
    </header>
  );
}
