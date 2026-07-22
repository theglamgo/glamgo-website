import Link from "next/link";

const FEATURES = [
  { title: "Nearby salons", desc: "GPS location + city + area filters find trusted salons around you in seconds.", icon: "📍" },
  { title: "Real-time booking", desc: "Live slot availability, stylist-of-choice, and instant confirmation.", icon: "⚡" },
  { title: "Secure wallet", desc: "Add money once, book unlimited times. Referrals, coupons, and rewards baked in.", icon: "💳" },
  { title: "Verified salons only", desc: "Every salon is KYC-verified. Owners onboard with GST / PAN / Aadhaar checks.", icon: "✅" },
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
      {/* DESKTOP HERO */}
      <section className="desktop-only relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 py-24 grid grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-3 py-1 bg-brand-goldTint text-brand-gold rounded-full text-xs font-bold uppercase tracking-widest">Premium Salon Marketplace</span>
            <h1 className="mt-4 text-6xl font-black leading-tight tracking-tight">Book premium salons, <span className="text-brand-gold">effortlessly.</span></h1>
            <p className="mt-6 text-lg text-brand-textMuted max-w-lg">Glamgo brings verified salons, top stylists, wallet payments, coupons and referrals into one clean app. Loved by customers, trusted by owners.</p>
            <div className="mt-8 flex gap-3">
              <a href="#download" className="px-6 py-3 rounded-full bg-brand-primary text-white font-bold hover:bg-black">Download the app</a>
              <Link href="/about/" className="px-6 py-3 rounded-full border-2 border-brand-primary font-bold hover:bg-brand-primary hover:text-white">Learn more</Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              <div><p className="text-3xl font-black">500+</p><p className="text-xs text-brand-textMuted uppercase tracking-widest mt-1">Salons</p></div>
              <div><p className="text-3xl font-black">1200+</p><p className="text-xs text-brand-textMuted uppercase tracking-widest mt-1">Stylists</p></div>
              <div><p className="text-3xl font-black">15k+</p><p className="text-xs text-brand-textMuted uppercase tracking-widest mt-1">Bookings</p></div>
            </div>
          </div>
          {/* App preview panel */}
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-br from-brand-goldTint to-transparent rounded-[48px] blur-3xl opacity-70" />
            <div className="relative bg-white rounded-[36px] shadow-soft border border-brand-border p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-2xl font-black">Glamgo</p>
                  <p className="text-xs text-brand-textMuted">Discover · Bandra West</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-brand-goldTint" />
              </div>
              <div className="rounded-2xl h-40 bg-gradient-to-tr from-brand-primary to-brand-gold p-5 flex flex-col justify-end text-white">
                <p className="text-xs uppercase tracking-widest opacity-80">Featured</p>
                <p className="text-xl font-black">Diwali damaka — up to 50% off</p>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                {["Hair", "Nails", "Facial"].map((c) => (
                  <div key={c} className="rounded-xl bg-brand-goldTint py-4">
                    <p className="text-sm font-bold text-brand-primary">{c}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 space-y-3">
                {[1, 2].map((i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl border border-brand-borderLight">
                    <div className="w-14 h-14 rounded-lg bg-brand-goldTint" />
                    <div className="flex-1">
                      <p className="font-bold text-sm">Elegance Studio #{i}</p>
                      <p className="text-xs text-brand-textMuted">4.8 ★ · 1.2 km · from ₹399</p>
                    </div>
                    <button className="px-3 py-1.5 rounded-full bg-brand-primary text-white text-xs font-bold">Book</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE HERO — app-frame feel */}
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
