import Marquee from "react-fast-marquee";

const items = [
  "Zeitix Labs",
  "Evolving with Time",
  "Games",
  "CRM & Platforms",
  "Utility Apps",
  "Marketing",
  "Custom Software",
  "Pune, India",
];

export default function EditorialMarquee() {
  return (
    <div className="border-y border-white/10 py-6 bg-[#0C0C0C]" data-testid="editorial-marquee">
      <Marquee speed={28} gradient={false} autoFill>
        {items.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="font-display text-xl md:text-2xl font-medium tracking-wide text-neutral-400 uppercase">
              {item}
            </span>
            <span className="mx-16 text-[#D4FF4F]">✦</span>
          </span>
        ))}
      </Marquee>
    </div>
  );
}
