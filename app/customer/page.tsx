export const metadata = { title: "Customer Features — Glamgo" };

const FEATURES = [
  ["📍", "Nearby Salons", "GPS + City + Area filter to discover trusted salons around you."],
  ["🔎", "Search & Filters", "Filter by service, gender, rating, price, distance and availability."],
  ["📅", "Real-time Booking", "Live slot availability, stylist of choice, instant confirmation."],
  ["🎟️", "Coupons", "Admin-sponsored coupons never reduce salon revenue."],
  ["💳", "Wallet", "Add money once via Razorpay. Book unlimited times. Never enter card details on booking."],
  ["🎁", "Referral Rewards", "Invite friends. Earn on every completed booking they make."],
  ["🚪", "I Have Arrived", "Notify your salon & stylist instantly when you reach the venue."],
  ["🧾", "Transparent Pricing", "See coupon, wallet, and referral deductions before you pay."],
  ["🕒", "Booking History", "All upcoming, past and cancelled bookings in one place."],
  ["🔔", "Notifications", "Booking confirmations, reminders, wallet credits and offers."],
  ["🔐", "Secure OTP Login", "Firebase Phone Authentication — no passwords, no leaks."],
  ["💸", "Wallet Withdrawals", "Withdraw your wallet balance to bank/UPI anytime."],
];

export default function CustomerPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-20">
      <span className="text-xs uppercase tracking-widest text-brand-gold font-bold">For Customers</span>
      <h1 className="mt-2 text-4xl md:text-5xl font-black">Everything you need to book premium salons.</h1>
      <p className="mt-4 text-lg text-brand-textMuted max-w-2xl">
        Glamgo puts the entire booking experience — from discovery to check-in to payment — on one screen.
      </p>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
        {FEATURES.map(([i, t, d]) => (
          <div key={t} className="p-6 rounded-2xl bg-white border border-brand-borderLight shadow-soft">
            <div className="text-2xl">{i}</div>
            <h3 className="mt-3 font-black">{t}</h3>
            <p className="mt-2 text-sm text-brand-textMuted leading-relaxed">{d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
