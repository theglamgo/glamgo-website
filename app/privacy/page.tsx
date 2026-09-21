export const metadata = { title: "Privacy Policy — Glamgo" };

export default function PrivacyPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 md:px-8 py-12 md:py-20">
      <h1 className="text-4xl font-black">Privacy Policy</h1>
      <p className="text-sm text-brand-textMuted">
        <em>Last updated: June 2026</em>
      </p>

      <p className="mt-6">
        Theglamgo (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) operates the
        Glamgo mobile application and the website theglamgo.com. This Privacy
        Policy explains what data we collect, how we use it, and your choices.
      </p>

      <h2 className="mt-8 text-2xl font-black">1. Information We Collect</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <b>Account information:</b> Your mobile phone number used for login,
          your name, optional email, optional profile photo, and your role
          (customer, salon owner, or stylist).
        </li>
        <li>
          <b>Authentication data:</b> Login is done via mobile OTP using
          Firebase Phone Authentication. Firebase processes your phone number
          and a verification token to sign you in. Admin accounts use an email
          and password.
        </li>
        <li>
          <b>Booking &amp; transaction data:</b> Salons and services you view
          or book, appointment date/time, chosen stylist, wallet balance and
          wallet transaction history, coupons applied, and referral codes.
        </li>
        <li>
          <b>Payment data:</b> Wallet top-ups and salon-owner subscriptions
          are processed through Razorpay. Payment card/UPI details are entered
          on Razorpay&apos;s secure checkout. We do not store your full card or
          UPI credentials. We store the transaction reference, amount, and
          status.
        </li>
        <li>
          <b>Location data:</b> With your permission, your device GPS location
          is used to show nearby salons and to power the &quot;I Have
          Arrived&quot; check-in, which compares your location to the salon
          within a configured radius. You can decline location; nearby-salon
          and one-tap check-in features will then be limited.
        </li>
        <li>
          <b>Device &amp; usage data:</b> Device model, OS/app version, IP
          address for security and fraud prevention, and a push-notification
          token for booking alerts.
        </li>
        <li>
          <b>KYC data (salon owners &amp; stylists — OPTIONAL):</b> Providers
          can create an account and use Glamgo without submitting any KYC. If
          a provider chooses to submit KYC, we collect documents such as
          Aadhaar, PAN, GST, or bank/UPI details, used only for verification
          and payout compliance. KYC documents are visible only to authorised
          Glamgo Admin staff.
        </li>
      </ul>

      <h2 className="mt-6 text-2xl font-black">
        2. How We Use Your Information
      </h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>To create your account and log you in via OTP.</li>
        <li>
          To operate bookings, the queue, wallet, coupons, referrals, escrow,
          and settlements.
        </li>
        <li>
          To process wallet top-ups, subscriptions, refunds, and withdrawals
          through Razorpay.
        </li>
        <li>
          To show nearby salons and enable location-based check-in with your
          consent.
        </li>
        <li>
          To send booking updates and account notifications, including
          in-app and push notifications.
        </li>
        <li>
          To prevent fraud, enforce our Terms, and meet legal/tax obligations.
        </li>
      </ul>

      <h2 className="mt-6 text-2xl font-black">3. How Payments Work</h2>
      <p>
        All in-app money movement is wallet-based. You add money to your
        Glamgo Wallet via Razorpay, and your wallet is credited only after
        Razorpay confirms the payment through a secure server-to-server signed
        webhook. Online (non walk-in) bookings are paid from your wallet
        balance and referral balance, if you choose. We never charge you more
        than the amount you requested; any applicable gateway fee is borne by
        the payer.
      </p>

      <h2 className="mt-6 text-2xl font-black">4. Sharing of Information</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          With the salon/stylist for your specific booking, including your
          name, booking details, and contact information as needed to serve
          you. Stylists are not shown your full phone number where privacy
          rules apply.
        </li>
        <li>
          With Razorpay for payment processing, and with Firebase (Google) for
          phone-number OTP verification and push notifications.
        </li>
        <li>
          When required by law, or to protect the rights and safety of users
          and the platform.
        </li>
        <li>We do not sell your personal data.</li>
      </ul>

      <h2 className="mt-6 text-2xl font-black">5. Data Security</h2>
      <p>
        Data is transmitted over HTTPS/TLS. Admin passwords are stored only as
        secure hashes. Payment and OTP credentials are handled by Razorpay and
        Firebase using their security measures. KYC documents are
        access-controlled and visible only to authorised admin staff.
      </p>

      <h2 className="mt-6 text-2xl font-black">
        6. Data Retention &amp; Account Deletion
      </h2>
      <p>
        You can delete your account at any time from within the app
        (Profile → Delete Account) or by writing to{" "}
        <a className="link-gold" href="mailto:theglamgoapp@gmail.com">
          theglamgoapp@gmail.com
        </a>
        . On deletion, your login account and active sessions are removed and
        your personal identifiers are anonymised. Historical booking, review,
        and financial records are retained in anonymised form for accounting,
        tax, and dispute-resolution purposes, and for periods required by law.
        You cannot delete your account while you have active/ongoing bookings;
        please complete or cancel them first.
      </p>

      <h2 className="mt-6 text-2xl font-black">7. Your Rights</h2>
      <p>
        You may access or correct your profile, withdraw consent for location
        or marketing, and request account deletion. For any request, contact{" "}
        <a className="link-gold" href="mailto:theglamgoapp@gmail.com">
          theglamgoapp@gmail.com
        </a>
        .
      </p>

      <h2 className="mt-6 text-2xl font-black">8. Children</h2>
      <p>
        Glamgo is not intended for children under 13, and we do not knowingly
        collect their data.
      </p>

      <h2 className="mt-6 text-2xl font-black">9. Contact</h2>
      <p>
        Email:{" "}
        <a className="link-gold" href="mailto:theglamgoapp@gmail.com">
          theglamgoapp@gmail.com
        </a>{" "}
        · Website: theglamgo.com
      </p>
    </article>
  );
}
