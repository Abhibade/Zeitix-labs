import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Wordmark } from "./Logo";

const links = [
  { label: "Products", href: "#products" },
  { label: "Why Us", href: "#why-us" },
  { label: "Roadmap", href: "#roadmap" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-black/60 backdrop-blur-xl border-b border-white/10" : "bg-transparent"
      }`}
      data-testid="navbar"
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-[72px] flex items-center justify-between">
        <a href="#top" data-testid="nav-logo" aria-label="Zeitix Labs home">
          <Wordmark />
        </a>

        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-link-${l.label.toLowerCase().replace(" ", "-")}`}
              className="text-sm text-neutral-400 hover:text-white transition-colors duration-300 tracking-wide"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            data-testid="nav-contact-btn"
            className="text-sm font-medium bg-white text-black px-5 py-2.5 rounded-full hover:bg-[#D4FF4F] transition-colors duration-300"
          >
            Start a Project
          </a>
        </div>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          data-testid="nav-mobile-toggle"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-neutral-300 text-base"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="text-sm font-medium bg-white text-black px-5 py-3 rounded-full text-center"
          >
            Start a Project
          </a>
        </div>
      )}
    </motion.header>
  );
}
