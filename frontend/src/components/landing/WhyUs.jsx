import { motion } from "framer-motion";
import { Timer, Network, HeartHandshake } from "lucide-react";

const items = [
  {
    icon: Timer,
    num: "01",
    title: "Time-aware products",
    desc: "Every product adapts through data, feedback and the passage of time — shipped once, improved forever.",
  },
  {
    icon: Network,
    num: "02",
    title: "Cross-vertical thinking",
    desc: "Insights from games inform our CRM UX. Marketing knowledge sharpens utility apps. Five verticals, one brain.",
  },
  {
    icon: HeartHandshake,
    num: "03",
    title: "Human at the core",
    desc: "Warm design, clear interfaces and honest communication — always. We build for people first.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 md:py-32 border-t border-white/10 bg-[#0C0C0C]" data-testid="whyus-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4"
          >
            <p className="font-mono-z text-xs tracking-[0.3em] uppercase text-[#D4FF4F] mb-5">Why us</p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tighter leading-tight">
              Built different, <span className="text-neutral-500">by design.</span>
            </h2>
          </motion.div>

          <div className="lg:col-span-8 flex flex-col divide-y divide-white/10">
            {items.map((item, i) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
                className="group flex items-start gap-6 md:gap-10 py-10 first:pt-0 last:pb-0"
                data-testid={`whyus-item-${item.num}`}
              >
                <span className="font-mono-z text-sm text-neutral-600 pt-1.5">{item.num}</span>
                <item.icon size={28} className="text-[#D4FF4F] shrink-0 mt-0.5" strokeWidth={1.5} />
                <div>
                  <h3 className="font-display font-bold text-xl md:text-2xl tracking-tight mb-2 group-hover:text-[#D4FF4F] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-neutral-400 font-light leading-relaxed max-w-lg">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
