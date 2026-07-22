import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";

export const metadata: Metadata = {
  title: "Glamgo — Book Premium Salons Near You",
  description:
    "Discover, book and pay for premium salon and grooming appointments with Glamgo. Trusted salons, transparent pricing, wallet payments, coupons and referrals.",
  keywords: [
    "salon booking", "beauty appointments", "hair salon", "grooming", "Glamgo", "Theglamgo",
    "book stylist", "book salon", "beauty app India",
  ],
  openGraph: {
    title: "Glamgo — Book Premium Salons",
    description: "Book premium salons and grooming near you.",
    url: "https://theglamgo.com",
    siteName: "Glamgo",
    type: "website",
  },
  metadataBase: new URL("https://theglamgo.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-brand-bg text-brand-text pb-16 md:pb-0">
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileBottomNav />
      </body>
    </html>
  );
}
