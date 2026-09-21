import Link from "next/link";

const FEATURES = [
  { title: "Nearby salons", desc: "GPS location + city + area filters find trusted salons around you in seconds.", icon: "📍" },
  { title: "Real-time booking", desc: "Live slot availability, stylist-of-choice, and instant confirmation.", icon: "⚡" },
  { title: "Secure wallet", desc: "Add money once, book unlimited times. Referrals, coupons, and rewards baked in.", icon: "💳" },
  { title: "Optional KYC for providers", desc: "Salon owners and stylists can start free; KYC (GST / PAN / Aadhaar) is optional and submitted only when they choose.", icon: "✅" },
  { title: "I Have Arrived", desc: "Tap once you reach the salon — stylist and owner get notified instantly.", icon: "🚪" },
  { title: "Transparent settlements", desc: "Money Engine splits every rupee fairly — customer, owner, stylist, admin.", icon: "🧾" },
];

const APP_SCREENS = [
  { title: "Discover", body: "Browse curated salons, categories, and offers near you." },
  { title: "Book & Pay", body: "Pick a slot, apply a coupon, pay from wallet — done in 30 seconds." },
  { title: "Wallet", body: "Add money, view referral rewards, and withdraw to your bank." },
];

export default function HomePage() {
  return (
    <>
      {/* DESKTOP HERO — clean, no fake stats, no demo card */}
      <section className="desktop-only relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-[560px] h-[560px] rounded-full bg-gradient-to-br from-brand-goldTint to-transparent blur-3xl opacity-70" />
          <div className="absolute -bottom-32 -left-24 w-[480px] h-[480px] rounded-full bg-gradient-to-tr from-brand-goldTint to-transparent blur-3xl opacity-60" />
        </div>
        <div className="relative max-w-5xl mx-auto px-8 py-28 text-center">
          <span className="inline-block px-3 py-1 bg-brand-goldTint text-brand-gold rounded-full text-xs font-bold uppercase tracking-widest">Premium Salon Marketplace · India</span>
          <h1 className="mt-6 text-6xl md:text-7xl font-black leading-[1.05] tracking-tight">Book premium salons, <span className="text-brand-gold">effortlessly.</span></h1>
          <p className="mt-6 text-lg md:text-xl text-brand-textMuted max-w-2xl mx-auto">Glamgo helps you discover salons, pick services and stylists, check live slot availability, book appointments, pay through the wallet and manage your full salon journey — all in one clean app.</p>
          <div className="mt-8 flex gap-3 justify-center flex-wrap">
            <a href="#download" className="px-7 py-3.5 rounded-full bg-brand-primary text-white font-bold hover:bg-black">Get the App</a>
            <Link href="/about/" className="px-7 py-3.5 rounded-full border-2 border-brand-primary font-bold hover:bg-brand-primary hover:text-white">Explore Glamgo</Link>
          </div>
        </div>
      </section>

      {/* MOBILE HERO */}
      <section className="mobile-only px-4 pt-4">
        <div className="rounded-3xl bg-gradient-to-tr from-brand-primary to-brand-gold text-white p-6 shadow-soft">
          <p className="text-xs uppercase tracking-widest opacity-80">Welcome to</p>
          <p className="text-4xl font-black mt-1">Glamgo</p>
          <p className="mt-2 text-sm opacity-90">Book premium salons and stylists near you.</p>
          <a href="#download" className="mt-5 inline-block px-4 py-2 rounded-full bg-white text-brand-primary text-sm font-bold">Download the app</a>
        </div>
        <div className="mt-5 grid grid-cols-3 gap-3 text-center">
          {[["📍","Nearby"],["💳","Wallet"],["🎁","Rewards"]].map(([i,l]) => (
            <div key={l} className="bg-white rounded-2xl p-4 shadow-soft border border-brand-borderLight">
              <p className="text-2xl">{i}</p>
              <p className="text-xs font-bold mt-1">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block px-3 py-1 bg-brand-goldTint text-brand-gold rounded-full text-xs font-bold uppercase tracking-widest">Why Glamgo</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-black">Everything the app offers, in one place.</h2>
          <p className="mt-4 text-brand-textMuted">Customers, salon owners, and stylists all get a purpose-built experience.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
          {FEATURES.map((f) => (
            <div key={f.title} className="p-6 rounded-2xl bg-white border border-brand-borderLight shadow-soft">
              <div className="text-3xl">{f.icon}</div>
              <h3 className="mt-3 font-black text-lg">{f.title}</h3>
              <p className="mt-2 text-sm text-brand-textMuted leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GLAMGO AI SECTION */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="rounded-3xl bg-gradient-to-br from-brand-primary via-black to-brand-primary text-white p-8 md:p-14 relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-96 h-96 rounded-full bg-brand-gold opacity-20 blur-3xl" />
          <span className="inline-block px-3 py-1 bg-brand-gold/20 text-brand-gold rounded-full text-xs font-bold uppercase tracking-widest">Glamgo AI</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-black leading-tight">Preview Your Next Hairstyle With Glamgo AI</h2>
          <p className="mt-4 max-w-2xl text-white/80 text-base md:text-lg">Upload your photo and explore different hairstyles before visiting the salon. Personalised previews, multiple styles, salon-quality visualisation — helping you decide before you book.</p>
          <ul className="mt-6 grid md:grid-cols-2 gap-3 max-w-2xl text-sm text-white/85">
            <li>• AI hairstyle preview from your own selfie</li>
            <li>• Multiple styles curated by hair category</li>
            <li>• Salon-style visual previews</li>
            <li>• Decide with confidence before booking</li>
          </ul>
          <a href="#download" className="mt-8 inline-block px-7 py-3.5 rounded-full bg-brand-gold text-brand-primary font-bold hover:bg-white">Try Glamgo AI</a>
          <p className="mt-3 text-xs text-white/60">AI previews are indicative. Real-world results depend on your stylist.</p>
        </div>
      </section>

      {/* APP FLOW */}
      <section className="bg-white border-y border-brand-borderLight py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-black">Book in 3 taps</h2>
            <p className="mt-3 text-brand-textMuted">Same journey inside the app — this is what customers experience.</p>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {APP_SCREENS.map((s, i) => (
              <div key={s.title} className="rounded-2xl border border-brand-border bg-brand-bg p-6">
                <div className="w-10 h-10 rounded-full bg-brand-gold text-white flex items-center justify-center font-black">{i + 1}</div>
                <h3 className="mt-4 text-xl font-black">{s.title}</h3>
                <p className="mt-2 text-sm text-brand-textMuted">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOWNLOAD CTA */}
      <section id="download" className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 text-center">
        <h2 className="text-3xl md:text-5xl font-black">Ready to look premium?</h2>
        <p className="mt-4 text-brand-textMuted">Download Glamgo and book your first appointment today.</p>
        <div className="mt-8 flex flex-col md:flex-row gap-3 justify-center items-center">
          <a className="px-6 py-3 rounded-full bg-brand-primary text-white font-bold min-w-[220px]" href="#">Google Play (coming soon)</a>
          <a className="px-6 py-3 rounded-full border-2 border-brand-primary font-bold min-w-[220px]" href="#">App Store (coming soon)</a>
        </div>
      </section>
    </>
  );
}
