export const metadata = { title: "Cancellation & Refund Policy — Glamgo" };

export default function RefundPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 md:px-8 py-12 md:py-20">
      <h1 className="text-4xl font-black">Cancellation &amp; Refund Policy</h1>
      <p className="text-sm text-brand-textMuted"><em>Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long" })}</em></p>

      <p className="mt-6">We want every booking to end happily. If plans change, the following rules apply.</p>

      <h2 className="mt-8 text-2xl font-black">1. How the Cancellation Charge is Decided</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>The cancellation charge percentage is set by <b>Glamgo Admin</b> — not by individual salons.</li>
        <li>The applicable percentage is shown to the customer on the booking confirmation screen, <b>before</b> the booking is confirmed.</li>
        <li>Once a booking is confirmed, the cancellation terms captured for that booking remain fixed <b>even if Admin later changes the percentage</b>. New bookings will follow the new percentage; existing bookings will follow the percentage that was shown at booking time.</li>
      </ul>

      <h2 className="mt-6 text-2xl font-black">2. Customer Cancellations</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>If you cancel <b>before</b> the free-cancel window shown at booking time: 100% refund to your Glamgo Wallet.</li>
        <li>If you cancel <b>after</b> the free-cancel window: the cancellation charge captured at booking time is retained; the remainder is refunded to your Wallet.</li>
        <li>Refunds credit your Wallet instantly. Referral balance used is returned to the referral bucket; the rest goes to the withdrawable Wallet balance.</li>
      </ul>

      <h2 className="mt-6 text-2xl font-black">3. Salon Cancellations</h2>
      <p>If a salon cancels or the assigned stylist is unavailable, you receive a <b>100% refund</b> with no charge.</p>

      <h2 className="mt-6 text-2xl font-black">4. No-Show</h2>
      <p>A booking is auto-marked as No-Show only after the service end time plus the Admin-configured grace period (default 15 minutes). No-show bookings are not refunded — they settle to the salon under the Glamgo Money Engine.</p>

      <h2 className="mt-6 text-2xl font-black">5. Dispute Resolution</h2>
      <p>If you disagree with the outcome of a booking (quality, safety, or amount), file a dispute within 24 hours of the booking becoming COMPLETED. Our team responds within 5 business days.</p>

      <h2 className="mt-6 text-2xl font-black">6. Wallet Withdrawals</h2>
      <p>You may withdraw your Wallet balance to bank / UPI at any time, subject to KYC (where applicable) and available balance. Referral balance is not withdrawable and can only be used for future bookings.</p>

      <h2 className="mt-6 text-2xl font-black">7. Payments &amp; Chargebacks</h2>
      <p>All payments are processed via <b>Razorpay</b>. In case of a payment failure at gateway level, the amount is auto-reversed by Razorpay to the source (bank / UPI) within 5–7 business days.</p>

      <h2 className="mt-6 text-2xl font-black">8. Contact</h2>
      <p>For any refund query: <a className="link-gold" href="mailto:theglamgoapp@gmail.com">theglamgoapp@gmail.com</a></p>
    </article>
  );
}
