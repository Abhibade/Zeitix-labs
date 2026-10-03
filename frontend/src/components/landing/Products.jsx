import { motion } from "framer-motion";
import { Gamepad2, LayoutDashboard, Wrench, TrendingUp, Code2, ArrowUpRight } from "lucide-react";

const reveal = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
  }),
};

const Card = ({ className, children, index, testId }) => (
  <motion.div
    variants={reveal}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-80px" }}
    custom={index}
    data-testid={testId}
    className={`group relative overflow-hidden border border-white/10 bg-[#0C0C0C] hover:border-white/30 hover:-translate-y-1 transition-all duration-500 ${className}`}
  >
    {children}
  </motion.div>
);

const CardHeader = ({ icon: Icon, tag, title }) => (
  <div>
    <div className="flex items-center justify-between mb-6">
      <span className="inline-flex items-center gap-2 font-mono-z text-[11px] tracking-[0.2em] uppercase text-neutral-500">
        <Icon size={14} className="text-[#D4FF4F]" /> {tag}
      </span>
      <ArrowUpRight size={18} className="text-neutral-600 group-hover:text-[#D4FF4F] group-hover:rotate-45 transition-all duration-300" />
    </div>
    <h3 className="font-display font-bold text-2xl sm:text-3xl tracking-tight mb-3">{title}</h3>
  </div>
);

export default function Products() {
  return (
    <section id="products" className="py-24 md:py-32 px-6 lg:px-10 max-w-7xl mx-auto" data-testid="products-section">
      <motion.div
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}
        className="mb-16 max-w-2xl"
      >
        <p className="font-mono-z text-xs tracking-[0.3em] uppercase text-[#D4FF4F] mb-5">What we build</p>
        <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tighter leading-tight">
          Five verticals. <span className="text-neutral-500">One vision.</span>
        </h2>
        <p className="text-neutral-400 font-light mt-5 text-base md:text-lg leading-relaxed">
          Each product solves a distinct problem — and every one is built to evolve from day one.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <Card className="md:col-span-8 md:row-span-2 min-h-[420px] flex flex-col justify-end" index={0} testId="product-card-play">
          <img
            src="https://images.unsplash.com/photo-1645109870868-e1b6f909e444?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400"
            alt="Mobile gaming"
            className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className="relative p-8 md:p-10">
            <CardHeader icon={Gamepad2} tag="Gaming" title="Zeitix Play" />
            <p className="text-neutral-300 font-light leading-relaxed max-w-md">
              Deep, engaging puzzle experiences like <span className="text-white font-medium">Zmerge 2048</span> —
              fun, strategic, and designed to keep players coming back.
            </p>
          </div>
        </Card>

        <Card className="md:col-span-4 p-8" index={1} testId="product-card-crm">
          <CardHeader icon={LayoutDashboard} tag="CRM · Platforms" title="Zeitix CRM" />
          <p className="text-neutral-400 font-light leading-relaxed text-sm">
            Management platforms and marketplaces tailored for specific industries — starting with the salon ecosystem.
          </p>
        </Card>

        <Card className="md:col-span-4 p-8" index={2} testId="product-card-tools">
          <CardHeader icon={Wrench} tag="Utility · Apps" title="Zeitix Tools" />
          <p className="text-neutral-400 font-light leading-relaxed text-sm">
            Everyday utility apps like Geolocation Attendance that solve real business problems efficiently.
          </p>
        </Card>

        <Card className="md:col-span-6 p-8" index={3} testId="product-card-grow">
          <CardHeader icon={TrendingUp} tag="Marketing" title="Zeitix Grow" />
          <p className="text-neutral-400 font-light leading-relaxed text-sm">
            Our marketing division — growth strategy, performance campaigns and brand work. Launching soon.
          </p>
        </Card>

        <Card className="md:col-span-6 min-h-[260px] flex flex-col justify-end" index={4} testId="product-card-build">
          <img
            src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200"
            alt="Software agency team"
            className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          <div className="relative p-8">
            <CardHeader icon={Code2} tag="Custom Software" title="Zeitix Build" />
            <p className="text-neutral-300 font-light leading-relaxed text-sm max-w-sm">
              Custom platforms — food delivery apps, hotel management systems — designed for scale and industry needs.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}
