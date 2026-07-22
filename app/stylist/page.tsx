export const metadata = { title: "Stylist Features — Glamgo" };

const FEATURES = [
  ["📅", "Today&apos;s Schedule", "Every booking assigned to you, live."],
  ["✂️", "Walk-in Composer", "Add walk-in guests when the counter is busy."],
  ["💰", "Earnings", "See your commission for every completed booking."],
  ["🧾", "Wallet", "Track earnings, deductions, and payouts."],
  ["🚪", "I Have Arrived (customer)", "Real-time customer arrival alerts on your device."],
  ["📊", "Performance", "Compare your monthly bookings, revenue and reviews."],
  ["⭐", "Reviews", "See what your customers say. Reply. Improve."],
  ["🔔", "Notifications", "New assignments, cancellations, and reminders."],
];

export default function StylistPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-20">
      <span className="text-xs uppercase tracking-widest text-brand-gold font-bold">For Stylists</span>
      <h1 className="mt-2 text-4xl md:text-5xl font-black">Your work, your commission, one app.</h1>
      <p className="mt-4 text-lg text-brand-textMuted max-w-2xl">
        Glamgo gives every stylist a personal dashboard — bookings, earnings, walk-ins and reviews.
      </p>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
        {FEATURES.map(([i, t, d]) => (
          <div key={t} className="p-6 rounded-2xl bg-white border border-brand-borderLight shadow-soft">
            <div className="text-2xl">{i}</div>
            <h3 className="mt-3 font-black" dangerouslySetInnerHTML={{ __html: String(t) }} />
            <p className="mt-2 text-sm text-brand-textMuted leading-relaxed" dangerouslySetInnerHTML={{ __html: String(d) }} />
          </div>
        ))}
      </div>
    </div>
  );
}
