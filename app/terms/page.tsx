export const metadata = { title: "Terms & Conditions — Glamgo" };

export default function TermsPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 md:px-8 py-12 md:py-20">
      <h1 className="text-4xl font-black">Terms &amp; Conditions</h1>
      <p className="text-sm text-brand-textMuted">
        <em>Last updated: June 2026</em>
      </p>

      <p className="mt-6">
        These Terms govern your use of the Glamgo app, the theglamgo.com
        website, and related services operated by Theglamgo (the
        &quot;Platform&quot;). By using the Platform you agree to these Terms.
      </p>

      <h2 className="mt-8 text-2xl font-black">1. Eligibility</h2>
      <p>
        You must be at least 18 years old (or use the Platform with
        parental/guardian consent) and legally able to enter into contracts.
      </p>

      <h2 className="mt-6 text-2xl font-black">2. What Glamgo Is</h2>
      <p>
        Glamgo is a marketplace that connects customers with independent
        salons and stylists. The salon/stylist is the actual service provider
        and is solely responsible for the quality and safety of the service.
        Glamgo facilitates discovery, booking, payments, and settlement.
      </p>

      <h2 className="mt-6 text-2xl font-black">3. Accounts &amp; Login</h2>
      <p>
        Customers, salon owners, and stylists log in using their mobile number
        via OTP (Firebase Phone Authentication). A stylist account can be used
        only after the salon owner links that stylist&apos;s mobile number to a
        stylist profile in the owner app. Admin accounts use email and
        password. You are responsible for keeping your device and number
        secure.
      </p>

      <h2 className="mt-6 text-2xl font-black">4. Bookings &amp; Payments</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          Online (non walk-in) bookings are prepaid from your Glamgo Wallet
          and referral balance, if you opt in. If your wallet balance is
          insufficient, the booking cannot be confirmed until you add money.
        </li>
        <li>
          You add money to the wallet via Razorpay. Your wallet is credited
          only after Razorpay confirms the payment via a signed webhook.
        </li>
        <li>
          Booking amounts are held in escrow and released to the salon/stylist
          after the service is completed and reviewed, or auto-released after
          a configured timeout.
        </li>
        <li>
          Any payment-gateway fee is borne by the person adding money or
          withdrawing.
        </li>
      </ul>

      <h2 className="mt-6 text-2xl font-black">
        5. Coupons &amp; Referrals
      </h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          Coupons are fully sponsored by Glamgo and do not reduce salon
          revenue.
        </li>
        <li>
          Referral rewards are credited to a non-withdrawable referral balance
          that can only be used towards future bookings.
        </li>
      </ul>

      <h2 className="mt-6 text-2xl font-black">
        6. Cancellations, No-Show &amp; Refunds
      </h2>
      <p>
        Full details are in our{" "}
        <a className="link-gold" href="/refund/">
          Cancellation &amp; Refund Policy
        </a>
        . In summary: a customer may cancel a confirmed booking only up to a
        fixed number of minutes (Admin-configured, currently 60 minutes)
        before the appointment start time; a cancellation charge (Admin-set
        percentage, captured at booking time) is deducted and the remainder is
        refunded to the wallet; no-shows are not refunded.
      </p>

      <h2 className="mt-6 text-2xl font-black">
        7. Salon Owner &amp; Stylist Terms
      </h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          KYC is optional. Providers may create an account and start using the
          Platform without submitting Aadhaar, PAN, GST, or bank details. KYC
          may be submitted later from within the app if the provider chooses.
          Submitted KYC is visible only to authorised Glamgo Admin staff and is
          used solely for verification and payout compliance.
        </li>
        <li>
          Platform commission, promotional (coupon) commission, referral
          share, stylist commission, and cancellation/no-show splits are
          governed by Glamgo&apos;s Money Engine and the percentages configured
          by Admin.
        </li>
        <li>
          Salon owners may subscribe to a paid plan via Razorpay; access
          follows the subscription status reported by Razorpay.
        </li>
        <li>
          Providers are solely responsible for services delivered and for
          compliance with applicable laws.
        </li>
      </ul>

      <h2 className="mt-6 text-2xl font-black">
        8. Wallet &amp; Withdrawals
      </h2>
      <p>
        Withdrawable wallet balance can be requested for payout to bank/UPI,
        subject to Admin approval and available balance. Referral balance is
        not withdrawable. Glamgo does not guarantee any minimum earnings.
      </p>

      <h2 className="mt-6 text-2xl font-black">9. Reviews &amp; Conduct</h2>
      <p>
        Customers may review completed bookings; submitting a review releases
        the escrow to the provider. You agree not to post unlawful content,
        harass staff, misuse the Platform, or attempt to bypass security.
        Violations may lead to suspension or termination.
      </p>

      <h2 className="mt-6 text-2xl font-black">10. Notifications</h2>
      <p>
        By using the Platform you agree to receive booking and account
        notifications (in-app and push). Marketing messages are sent only with
        your consent and can be turned off.
      </p>

      <h2 className="mt-6 text-2xl font-black">11. Intellectual Property</h2>
      <p>
        The Glamgo name, logo, design, code, and content belong to Theglamgo.
        All rights reserved.
      </p>

      <h2 className="mt-6 text-2xl font-black">
        12. Disclaimers &amp; Liability
      </h2>
      <p>
        The Platform is provided &quot;as is&quot;. To the extent permitted by
        law, Glamgo is not liable for the acts of independent providers or for
        indirect/consequential damages.
      </p>

      <h2 className="mt-6 text-2xl font-black">13. Governing Law</h2>
      <p>
        These Terms are governed by the laws of India, with courts at
        Ahmedabad, Gujarat having exclusive jurisdiction.
      </p>

      <h2 className="mt-6 text-2xl font-black">14. Contact</h2>
      <p>
        Email:{" "}
        <a className="link-gold" href="mailto:theglamgoapp@gmail.com">
          theglamgoapp@gmail.com
        </a>
      </p>
    </article>
  );
}
