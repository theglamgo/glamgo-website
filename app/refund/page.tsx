export const metadata = { title: "Cancellation & Refund Policy — Glamgo" };

export default function RefundPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 md:px-8 py-12 md:py-20">
      <h1 className="text-4xl font-black">Cancellation &amp; Refund Policy</h1>
      <p className="text-sm text-brand-textMuted"><em>Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long" })}</em></p>

      <p className="mt-6">We want every booking to end happily. If plans change, the following rules apply.</p>

      <h2 className="mt-8 text-2xl font-black">1. Customer Cancellations</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><b>≥ 24 hours before the slot</b> (or the salon-configured free-cancel window): 100% refund to your Glamgo Wallet.</li>
        <li><b>&lt; 24 hours before the slot</b>: A cancellation fee (set by the salon, typically 20%) is retained. The remainder is refunded to your Wallet.</li>
        <li>Refunds hit your Wallet instantly. Referral balance used is returned to the referral bucket; the rest goes to the withdrawable wallet balance.</li>
      </ul>

      <h2 className="mt-6 text-2xl font-black">2. Salon Cancellations</h2>
      <p>If a salon cancels or the stylist is unavailable, you receive a 100% refund with no fee.</p>

      <h2 className="mt-6 text-2xl font-black">3. No-Show</h2>
      <p>A booking is auto-marked as No-Show only after the service end time plus the admin-configured grace period (default 15 minutes). No-show bookings are not refunded — they settle to the salon normally.</p>

      <h2 className="mt-6 text-2xl font-black">4. Dispute Resolution</h2>
      <p>If you disagree with the outcome of a booking (quality, safety, or amount), file a dispute within 24 hours of the booking status COMPLETED. Our team resolves within 5 business days.</p>

      <h2 className="mt-6 text-2xl font-black">5. Wallet Withdrawals</h2>
      <p>You may withdraw your Wallet balance to bank / UPI at any time. Withdrawal fees, when applicable, are borne by the payee. Referral balance is not withdrawable.</p>

      <h2 className="mt-6 text-2xl font-black">6. Chargebacks</h2>
      <p>All payments are processed via Razorpay. In case of a payment failure, the amount is auto-reversed to the source (bank / UPI) by Razorpay within 5–7 business days.</p>

      <h2 className="mt-6 text-2xl font-black">7. Contact</h2>
      <p>For any refund query: <a className="link-gold" href="mailto:support@theglamgo.com">support@theglamgo.com</a></p>
    </article>
  );
}
