export const metadata = { title: "Salon Owner Features — Glamgo" };

const FEATURES = [
  ["📊", "Owner Dashboard", "Today&apos;s bookings, revenue, walk-ins and pending payouts at a glance."],
  ["👥", "Stylist Management", "Add, edit, and set 0–100% commission per stylist."],
  ["📅", "Online + Walk-in Bookings", "Two strictly separate queues. Owners see only what matters."],
  ["🕐", "Slot Management", "Working hours, breaks, and per-stylist availability."],
  ["🖼️", "Salon Photos", "Manage cover, thumbnail and gallery — customers see a live slideshow."],
  ["💰", "Wallet & Payouts", "Instant withdrawals to bank/UPI. Full ledger, no delays."],
  ["🧾", "Money Engine", "Fair splits every time. Platform, stylist, referrer, and you — all transparent."],
  ["🎯", "Commission Override", "Custom per-salon commission with admin approval."],
  ["📈", "Analytics", "Booking trends, stylist performance and revenue reports."],
  ["🔔", "Instant Notifications", "New booking, cancellation, walk-in and payout alerts."],
  ["🔐", "KYC Onboarding", "GST / PAN / Aadhaar for compliance. Approved once, ready for good."],
  ["✂️", "Walk-in Composer", "Add a walk-in guest booking in seconds — cash / UPI / card."],
];

export default function OwnerPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-20">
      <span className="text-xs uppercase tracking-widest text-brand-gold font-bold">For Salon Owners</span>
      <h1 className="mt-2 text-4xl md:text-5xl font-black">Run your salon like a modern business.</h1>
      <p className="mt-4 text-lg text-brand-textMuted max-w-2xl">
        Glamgo brings scheduling, staff, payments, and reporting into one mobile app you already know how to use.
      </p>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
        {FEATURES.map(([i, t, d]) => (
          <div key={t} className="p-6 rounded-2xl bg-white border border-brand-borderLight shadow-soft">
            <div className="text-2xl">{i}</div>
            <h3 className="mt-3 font-black">{t}</h3>
            <p className="mt-2 text-sm text-brand-textMuted leading-relaxed" dangerouslySetInnerHTML={{ __html: String(d) }} />
          </div>
        ))}
      </div>
    </div>
  );
}
