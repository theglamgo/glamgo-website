export const metadata = {
  title: "Cancellation & Refund Policy — Glamgo",
};

export default function RefundPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 md:px-8 py-12 md:py-20">
      <h1 className="text-4xl font-black">
        Cancellation &amp; Refund Policy
      </h1>

      <p className="text-sm text-brand-textMuted">
        <em>Last updated: June 2026</em>
      </p>

      <h2 className="mt-8 text-2xl font-black">
        1. How the Cancellation Charge is Decided
      </h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          The cancellation-charge percentage is set by Glamgo Admin, not by
          individual salons.
        </li>
        <li>
          The applicable percentage is captured at the time your booking is
          confirmed. If Admin later changes the percentage, your
          already-confirmed booking still follows the percentage captured at
          booking time; only new bookings follow the new percentage.
        </li>
      </ul>

      <h2 className="mt-6 text-2xl font-black">
        2. Customer Cancellations
      </h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          You may cancel a confirmed booking only up to a fixed cut-off before
          the appointment start time (Admin-configured, currently 60 minutes
          before). After that cut-off, the booking can no longer be cancelled
          from the app.
        </li>
        <li>
          When you cancel within the allowed window, a cancellation charge
          (the Admin-set percentage captured at booking time) is deducted from
          your booking amount, and the remaining amount is refunded to your
          Glamgo Wallet instantly.
        </li>
        <li>
          If any part of the booking was paid using referral balance, that
          portion is returned to your referral balance first; the rest goes to
          your withdrawable wallet balance.
        </li>
      </ul>

      <h2 className="mt-6 text-2xl font-black">3. No-Show</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          If you do not check in (&quot;I Have Arrived&quot;) at the salon, the
          booking is automatically marked as No-Show after the service end time
          plus an Admin-configured grace period (currently 15 minutes). A salon
          owner/admin can also mark a genuine no-show.
        </li>
        <li>
          No-show bookings are not refunded (refund = ₹0). The amount is
          settled to the salon and platform under Glamgo&apos;s Money Engine.
        </li>
      </ul>

      <h2 className="mt-6 text-2xl font-black">
        4. Salon / Admin-Initiated Cancellations
      </h2>
      <p>
        If a salon owner or Glamgo Admin cancels a booking, it is settled
        through the same cancellation engine and any refund due is credited to
        your wallet.
      </p>

      <h2 className="mt-6 text-2xl font-black">
        5. Refund Method &amp; Timing
      </h2>
      <p>
        All refunds are credited to your Glamgo Wallet, not back to the
        original card/UPI. Wallet credits are instant. You may later withdraw
        your withdrawable wallet balance to bank/UPI, subject to Admin approval
        and available balance. Referral balance is not withdrawable and can
        only be used for future bookings.
      </p>

      <h2 className="mt-6 text-2xl font-black">
        6. Payment-Gateway Failures
      </h2>
      <p>
        Wallet top-ups are processed via Razorpay. If money is debited but the
        top-up fails at the gateway, Razorpay auto-reverses the amount to your
        source (bank/UPI), typically within 5–7 business days.
      </p>

      <h2 className="mt-6 text-2xl font-black">7. Disputes</h2>
      <p>
        If you disagree with the outcome of a completed booking (quality,
        safety, or amount), raise it with us within 24 hours of completion.
        Contact{" "}
        <a className="link-gold" href="mailto:theglamgoapp@gmail.com">
          theglamgoapp@gmail.com
        </a>
        ; our team responds within 5 business days.
      </p>

      <h2 className="mt-6 text-2xl font-black">8. Contact</h2>
      <p>
        For any cancellation or refund query:{" "}
        <a className="link-gold" href="mailto:theglamgoapp@gmail.com">
          theglamgoapp@gmail.com
        </a>
      </p>
    </article>
  );
}
