
export const metadata = { title: "Contact — Glamgo" };

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-20">
      <span className="text-xs uppercase tracking-widest text-brand-gold font-bold">
        Contact
      </span>

      <h1 className="mt-2 text-4xl md:text-5xl font-black">
        Get in touch
      </h1>

      <p className="mt-4 text-lg text-brand-textMuted max-w-2xl">
        We&apos;re here to help — whether you&apos;re a customer, a salon owner, or a curious stylist.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-white rounded-2xl border border-brand-borderLight shadow-soft">
          <h3 className="text-xl font-black">Customer Support</h3>
          <p className="mt-2 text-sm text-brand-textMuted">
            Booking, wallet, and payment questions.
          </p>
          <p className="mt-4">
            <b>Email:</b>{" "}
            <a
              className="link-gold"
              href="mailto:theglamgoapp@gmail.com"
            >
              theglamgoapp@gmail.com
            </a>
          </p>
          <p className="mt-2">
            <b>Hours:</b> Mon–Sat, 10:00 – 19:00 IST
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-brand-borderLight shadow-soft">
          <h3 className="text-xl font-black">Salon / Stylist Onboarding</h3>
          <p className="mt-2 text-sm text-brand-textMuted">
            Join Glamgo or get KYC help.
          </p>
          <p className="mt-4">
            <b>Email:</b>{" "}
            <a
              className="link-gold"
              href="mailto:theglamgoapp@gmail.com"
            >
              theglamgoapp@gmail.com
            </a>
          </p>
          <p className="mt-2">
            <b>WhatsApp:</b> Coming soon
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-brand-borderLight shadow-soft">
          <h3 className="text-xl font-black">Business / Press</h3>
          <p className="mt-4">
            <b>Email:</b>{" "}
            <a
              className="link-gold"
              href="mailto:theglamgoapp@gmail.com"
            >
              theglamgoapp@gmail.com
            </a>
          </p>
        </div>

        <div className="p-6 bg-brand-goldTint rounded-2xl border border-brand-border">
          <h3 className="text-xl font-black">Registered Office</h3>
          <p className="mt-3 text-sm text-brand-textMuted whitespace-pre-line">
            Theglamgo{"\n"}
            Ahmedabad, Gujarat 380001{"\n"}
            India
          </p>
          <p className="mt-3 text-xs text-brand-textMuted">
            GSTIN / CIN: To be updated after registration.
          </p>
        </div>
      </div>
    </div>
  );
}
