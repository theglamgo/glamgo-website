export const metadata = { title: "Privacy Policy — Glamgo" };

export default function PrivacyPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 md:px-8 py-12 md:py-20 prose prose-lg">
      <h1 className="text-4xl font-black">Privacy Policy</h1>
      <p className="text-sm text-brand-textMuted"><em>Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long" })}</em></p>

      <p>Theglamgo (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) operates the Glamgo mobile application and the website theglamgo.com. This Privacy Policy describes what personal information we collect, how we use it, and the choices you have.</p>

      <h2 className="mt-8 text-2xl font-black">1. Information We Collect</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><b>Account info:</b> Phone number, name, email (optional), profile photo (optional), role (customer / owner / stylist).</li>
        <li><b>Bookings & payments:</b> Salon &amp; service selection, timings, wallet balance, coupon usage, referral codes, transaction history.</li>
        <li><b>Location:</b> With your permission, GPS coordinates for &quot;Nearby salons&quot; and &quot;I Have Arrived&quot; features.</li>
        <li><b>Device data:</b> Device model, OS version, app version, push-notification token (FCM), IP address for security.</li>
        <li><b>KYC (owners/stylists, optional):</b> If a salon owner or stylist chooses to submit KYC, we collect documents such as Aadhaar, PAN, GST, or bank account information solely for provider verification and payout compliance. Providers may use Glamgo without submitting KYC; KYC documents, once submitted, are visible only to authorised Glamgo Admin personnel.</li>
      </ul>

      <h2 className="mt-8 text-2xl font-black">2. How We Use Information</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>To operate bookings, wallet, notifications, and settlements.</li>
        <li>To verify identity via OTP (Firebase Phone Authentication).</li>
        <li>To process payments through Razorpay in accordance with RBI norms.</li>
        <li>To send booking updates, marketing offers (with your consent), and legal notices.</li>
        <li>To detect fraud, enforce our Terms and comply with law.</li>
      </ul>

      <h2 className="mt-8 text-2xl font-black">3. Sharing</h2>
      <p>We share the minimum data required with salon owners (customer name, phone, service) for the specific booking. Payment data is shared only with Razorpay for gateway processing. We never sell your personal data.</p>

      <h2 className="mt-8 text-2xl font-black">4. Security</h2>
      <p>All data is transmitted over HTTPS/TLS. Passwords / secrets are hashed. Firebase and Razorpay handle sensitive credentials to industry standards. KYC documents are stored in access-controlled encrypted storage.</p>

      <h2 className="mt-8 text-2xl font-black">5. Retention</h2>
      <p>We retain account and transaction data for the duration of your account, plus 7 years for tax/GST compliance. You may request deletion of your account at any time by writing to <a className="link-gold" href="mailto:theglamgoapp@gmail.com">theglamgoapp@gmail.com</a>.</p>

      <h2 className="mt-8 text-2xl font-black">6. Your Rights</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Access, correct, or delete your personal data.</li>
        <li>Withdraw consent for marketing at any time.</li>
        <li>Complain to India&apos;s Data Protection Board once operational.</li>
      </ul>

      <h2 className="mt-8 text-2xl font-black">7. Children</h2>
      <p>Glamgo is not directed to children under 13. We do not knowingly collect data from children.</p>

      <h2 className="mt-8 text-2xl font-black">8. Contact</h2>
      <p>Email: <a className="link-gold" href="mailto:theglamgoapp@gmail.com">theglamgoapp@gmail.com</a> · Website: <a className="link-gold" href="https://theglamgo.com">theglamgo.com</a></p>
    </article>
  );
}
