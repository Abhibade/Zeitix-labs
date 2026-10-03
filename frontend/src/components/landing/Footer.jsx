import { Wordmark } from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-14 px-6 lg:px-10" data-testid="footer">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="flex flex-col gap-4">
          <Wordmark />
          <p className="text-neutral-500 text-sm font-light max-w-xs">
            A multi-vertical tech studio in Pune, India — building products that evolve with time.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-8 sm:gap-14">
          <div className="flex flex-col gap-2.5">
            <span className="font-mono-z text-[11px] tracking-[0.2em] uppercase text-neutral-600">Explore</span>
            <a href="#products" className="text-sm text-neutral-400 hover:text-white transition-colors" data-testid="footer-link-products">Products</a>
            <a href="#why-us" className="text-sm text-neutral-400 hover:text-white transition-colors" data-testid="footer-link-whyus">Why Us</a>
            <a href="#roadmap" className="text-sm text-neutral-400 hover:text-white transition-colors" data-testid="footer-link-roadmap">Roadmap</a>
          </div>
          <div className="flex flex-col gap-2.5">
            <span className="font-mono-z text-[11px] tracking-[0.2em] uppercase text-neutral-600">Connect</span>
            <a href="mailto:hello@zeitixlabs.com" className="text-sm text-neutral-400 hover:text-white transition-colors" data-testid="footer-link-email">hello@zeitixlabs.com</a>
            <a href="https://wa.me/919800000000" target="_blank" rel="noreferrer" className="text-sm text-neutral-400 hover:text-white transition-colors" data-testid="footer-link-whatsapp">WhatsApp</a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between gap-2">
        <span className="text-neutral-600 text-xs font-mono-z">© 2026 Zeitix Labs. All rights reserved.</span>
        <span className="text-neutral-600 text-xs font-mono-z">zeitixlabs.com · Pune, India</span>
      </div>
    </footer>
  );
}
