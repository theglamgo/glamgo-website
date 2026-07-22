export const metadata = { title: "Terms & Conditions — Glamgo" };

export default function TermsPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 md:px-8 py-12 md:py-20">
      <h1 className="text-4xl font-black">Terms &amp; Conditions</h1>
      <p className="text-sm text-brand-textMuted"><em>Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long" })}</em></p>

      <p className="mt-6">These Terms govern your use of the Glamgo application, the theglamgo.com website, and all related services operated by Theglamgo (the &quot;Platform&quot;). By using the Platform, you agree to these Terms.</p>

      <h2 className="mt-8 text-2xl font-black">1. Eligibility</h2>
      <p>You must be at least 18 years old (or use the Platform with parental consent) and legally capable of entering into contracts.</p>

      <h2 className="mt-6 text-2xl font-black">2. Platform Role</h2>
      <p>Glamgo is a marketplace that connects customers to independent salons and stylists. The salon/stylist is the service provider. Glamgo facilitates discovery, booking, payment, and settlement.</p>

      <h2 className="mt-6 text-2xl font-black">3. Bookings &amp; Payments</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>All online customer bookings are prepaid from the customer&apos;s Wallet.</li>
        <li>Wallet top-ups are processed through Razorpay. Gateway fees, when applicable, are borne by the payer.</li>
        <li>Once confirmed, a booking may be cancelled subject to the cancellation policy.</li>
      </ul>

      <h2 className="mt-6 text-2xl font-black">4. Coupons &amp; Referrals</h2>
      <p>Coupons are sponsored 100% by Glamgo and do not reduce salon revenue. Referral rewards are credited to a non-withdrawable referral balance and may only be used towards future bookings.</p>

      <h2 className="mt-6 text-2xl font-black">5. Cancellations, No-Show &amp; Refunds</h2>
      <p>See our <a className="link-gold" href="/refund/">Cancellation &amp; Refund Policy</a> for full details.</p>

      <h2 className="mt-6 text-2xl font-black">6. Salon Owner &amp; Stylist Terms</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Providers must complete KYC (Aadhaar/PAN/GST/bank) before accepting bookings.</li>
        <li>Platform commission, discount charge, referral share, and stylist commission are governed by the published Money Engine.</li>
        <li>Providers are solely responsible for the quality and safety of the service delivered at the salon.</li>
      </ul>

      <h2 className="mt-6 text-2xl font-black">7. Acceptable Use</h2>
      <p>You agree not to misuse the Platform, upload unlawful content, harass staff, or attempt to circumvent security. Violations may result in suspension or account termination.</p>

      <h2 className="mt-6 text-2xl font-black">8. Intellectual Property</h2>
      <p>The Glamgo name, logo, app design, code, and content are the property of Theglamgo. All rights reserved.</p>

      <h2 className="mt-6 text-2xl font-black">9. Disclaimers</h2>
      <p>The Platform is provided &quot;as is&quot;. To the extent permitted by law, Glamgo is not liable for indirect or consequential damages.</p>

      <h2 className="mt-6 text-2xl font-black">10. Governing Law</h2>
      <p>These Terms are governed by the laws of India. Courts at Ahmedabad, Gujarat shall have exclusive jurisdiction.</p>

      <h2 className="mt-6 text-2xl font-black">11. Contact</h2>
      <p>Email: <a className="link-gold" href="mailto:support@theglamgo.com">support@theglamgo.com</a></p>
    </article>
  );
}
