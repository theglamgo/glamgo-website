export const metadata = { title: "About Glamgo — Our Mission" };

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-20">
      <span className="text-xs uppercase tracking-widest text-brand-gold font-bold">About</span>
      <h1 className="mt-2 text-4xl md:text-5xl font-black">About Glamgo</h1>
      <p className="mt-6 text-lg text-brand-textMuted leading-relaxed">
        Glamgo is India&apos;s premium salon booking platform. We connect discerning customers to
        verified salons and independent stylists, and we power those businesses with a modern,
        transparent, mobile-first operations toolkit.
      </p>
      <div className="mt-10 grid md:grid-cols-2 gap-6">
        {[
          { h: "Mission", b: "Make quality grooming reliable, discoverable, and instantly bookable for every customer in every city." },
          { h: "Vision", b: "Become the most trusted brand for beauty and wellness bookings, where every stakeholder wins." },
          { h: "Values", b: "Fair settlements, verified salons, transparent pricing, and premium user experience — always." },
          { h: "Operated by", b: "Theglamgo (theglamgo.com). Support: support@theglamgo.com" },
        ].map((v) => (
          <div key={v.h} className="p-6 bg-white rounded-2xl border border-brand-borderLight shadow-soft">
            <h3 className="text-xl font-black">{v.h}</h3>
            <p className="mt-2 text-sm text-brand-textMuted leading-relaxed">{v.b}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 p-6 bg-brand-goldTint rounded-2xl border border-brand-border">
        <h3 className="text-xl font-black">The Glamgo Money Engine</h3>
        <p className="mt-2 text-sm text-brand-textMuted">
          A centralized, audited settlement engine ensures every rupee is split correctly between
          the salon, the stylist, referral partners, and the platform. Coupons are 100% sponsored by
          Glamgo, so salons never lose revenue. Cancellation, no-show, and refund flows follow a
          published, versioned rulebook.
        </p>
      </div>
    </div>
  );
}
