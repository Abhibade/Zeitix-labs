import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

const lines = [
  { text: "We build products", italic: false },
  { text: "that evolve", italic: true },
  { text: "with time.", italic: false },
];

const lineReveal = {
  hidden: { y: "110%" },
  visible: (i) => ({
    y: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.35 + i * 0.14 },
  }),
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (d) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: d },
  }),
};

const stats = [
  { value: "5", label: "Product verticals" },
  { value: "Mar '26", label: "Founded, Pune" },
  { value: "01", label: "First launch soon" },
];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  return (
    <section ref={ref} id="top" className="relative min-h-screen flex flex-col justify-end overflow-hidden" data-testid="hero-section">
      <motion.div style={{ y: bgY, opacity: bgOpacity }} className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1709626011485-6fe000ea2dbc?crop=entropy&cs=srgb&fm=jpg&q=85&w=2200"
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/70 via-[#050505]/40 to-[#050505]" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-10 pb-20 pt-40">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="font-mono-z text-xs tracking-[0.3em] uppercase text-[#D4FF4F] mb-8"
          data-testid="hero-eyebrow"
        >
          Zeitix Labs · Multi-vertical tech studio · Pune, India
        </motion.p>

        <h1 className="font-display font-bold tracking-tighter leading-[0.95] text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] mb-10" data-testid="hero-heading">
          {lines.map((line, i) => (
            <span key={i} className="block overflow-hidden pb-1">
              <motion.span
                variants={lineReveal}
                initial="hidden"
                animate="visible"
                custom={i}
                className={`block ${line.italic ? "italic text-[#D4FF4F]" : "text-white"}`}
              >
                {line.text}
              </motion.span>
            </span>
          ))}
        </h1>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.9}
            className="max-w-xl text-neutral-400 text-base md:text-lg leading-relaxed font-light"
            data-testid="hero-subtext"
          >
            Games, CRM platforms, utility apps, marketing services and custom software —
            five verticals, one studio, each product designed to grow smarter as the
            world changes.
          </motion.p>

          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={1.05} className="flex items-center gap-4">
            <a
              href="#products"
              data-testid="hero-cta-products"
              className="group inline-flex items-center gap-2 bg-white text-black font-medium px-7 py-4 rounded-full hover:bg-[#D4FF4F] transition-colors duration-300"
            >
              Explore Products
              <ArrowDownRight size={18} className="transition-transform duration-300 group-hover:rotate-45" />
            </a>
            <a
              href="#contact"
              data-testid="hero-cta-contact"
              className="inline-flex items-center gap-2 border border-white/20 text-white px-7 py-4 rounded-full hover:border-white/60 transition-colors duration-300"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1.2}
          className="mt-20 grid grid-cols-3 gap-6 border-t border-white/10 pt-8"
          data-testid="hero-stats"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display font-bold text-3xl md:text-4xl tracking-tight">{s.value}</div>
              <div className="text-neutral-500 text-xs md:text-sm mt-1 tracking-wide">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
