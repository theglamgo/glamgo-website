export default function Footer() {
  return (
    <footer className="mt-16 md:mt-24 bg-brand-primary text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-9 h-9 rounded-xl bg-brand-gold text-brand-primary flex items-center justify-center font-black text-lg">G</div>
            <span className="text-xl font-black">Glamgo</span>
          </div>
          <p className="text-white/70 text-sm leading-relaxed">Book premium salons and grooming services from trusted studios near you.</p>
          <p className="text-white/50 text-xs mt-4">Operated by <span className="font-bold text-white">Theglamgo</span></p>
        </div>
        <div>
          <h4 className="font-bold text-white/90 mb-3 uppercase text-xs tracking-widest">Company</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><a href="/about/" className="hover:text-brand-gold">About Glamgo</a></li>
            <li><a href="/contact/" className="hover:text-brand-gold">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white/90 mb-3 uppercase text-xs tracking-widest">For You</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><a href="/customer/" className="hover:text-brand-gold">Customer Features</a></li>
            <li><a href="/owner/" className="hover:text-brand-gold">Salon Owner Features</a></li>
            <li><a href="/stylist/" className="hover:text-brand-gold">Stylist Features</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white/90 mb-3 uppercase text-xs tracking-widest">Legal</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><a href="/privacy/" className="hover:text-brand-gold">Privacy Policy</a></li>
            <li><a href="/terms/" className="hover:text-brand-gold">Terms &amp; Conditions</a></li>
            <li><a href="/refund/" className="hover:text-brand-gold">Cancellation &amp; Refund</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex flex-col md:flex-row justify-between text-xs text-white/60 gap-2">
          <p>© {new Date().getFullYear()} Theglamgo. All rights reserved.</p>
          <p>theglamgo.com · support@theglamgo.com</p>
        </div>
      </div>
    </footer>
  );
}
