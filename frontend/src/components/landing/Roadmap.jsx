import { motion } from "framer-motion";

const roadmap = [
  { name: "Zeitix Play", progress: 78, note: "Zmerge 2048 — polishing for launch" },
  { name: "Zeitix CRM", progress: 55, note: "Salon platform in active build" },
  { name: "Zeitix Tools", progress: 52, note: "Geolocation Attendance beta" },
  { name: "Zeitix Grow", progress: 41, note: "Marketing division setup" },
  { name: "Zeitix Build", progress: 35, note: "Client platforms in scoping" },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-24 md:py-32 px-6 lg:px-10 max-w-7xl mx-auto" data-testid="roadmap-section">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
      >
        <div>
          <p className="font-mono-z text-xs tracking-[0.3em] uppercase text-[#D4FF4F] mb-5">Product roadmap</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tighter leading-tight">
            Where we are <span className="text-neutral-500">right now.</span>
          </h2>
        </div>
        <span className="font-mono-z text-xs text-neutral-500 tracking-widest uppercase">Updated · Mar 2026</span>
      </motion.div>

      <div className="flex flex-col divide-y divide-white/10 border-y border-white/10">
        {roadmap.map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-center"
            data-testid={`roadmap-item-${item.name.toLowerCase().replace(" ", "-")}`}
          >
            <h3 className="font-display font-bold text-xl md:text-2xl tracking-tight md:col-span-3">{item.name}</h3>
            <p className="text-neutral-500 text-sm font-light md:col-span-4">{item.note}</p>
            <div className="md:col-span-4 h-[3px] bg-white/10 overflow-hidden rounded-full">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${item.progress}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 + i * 0.1 }}
                className="h-full bg-[#D4FF4F]"
              />
            </div>
            <span className="font-mono-z text-sm text-neutral-400 md:col-span-1 md:text-right">{item.progress}%</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
