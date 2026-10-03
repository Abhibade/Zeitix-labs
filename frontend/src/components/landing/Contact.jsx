import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "sonner";
import { Mail, Phone, MessageCircle, ArrowUpRight, Loader2 } from "lucide-react";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const directLinks = [
  { icon: Mail, label: "Email us", value: "hello@zeitixlabs.com", href: "mailto:hello@zeitixlabs.com", testId: "contact-email-link" },
  { icon: Phone, label: "Call us", value: "+91 98XXX XXXXX", href: "tel:+919800000000", testId: "contact-phone-link" },
  { icon: MessageCircle, label: "WhatsApp", value: "Chat with the team", href: "https://wa.me/919800000000", testId: "contact-whatsapp-link" },
];

const interests = ["Games", "CRM & Platforms", "Utility Apps", "Marketing", "Custom Software", "Other"];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", interest: "", message: "" });
  const [loading, setLoading] = useState(false);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in your name, email and message.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/inquiries`, form);
      toast.success("Thanks! We'll get back to you within 24 hours.");
      setForm({ name: "", email: "", company: "", interest: "", message: "" });
    } catch {
      toast.error("Something went wrong. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 border-t border-white/10 bg-[#0C0C0C]" data-testid="contact-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <p className="font-mono-z text-xs tracking-[0.3em] uppercase text-[#D4FF4F] mb-5">Contact</p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl tracking-tighter leading-[1.05] max-w-3xl">
            Ready to build something that <span className="italic text-[#D4FF4F]">lasts?</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col divide-y divide-white/10"
          >
            {directLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                data-testid={l.testId}
                className="group flex items-center justify-between py-8 first:pt-0"
              >
                <div className="flex items-center gap-5">
                  <l.icon size={24} className="text-[#D4FF4F]" strokeWidth={1.5} />
                  <div>
                    <div className="text-neutral-500 text-xs tracking-[0.2em] uppercase font-mono-z mb-1">{l.label}</div>
                    <div className="font-display font-bold text-xl md:text-2xl tracking-tight group-hover:text-[#D4FF4F] transition-colors duration-300">
                      {l.value}
                    </div>
                  </div>
                </div>
                <ArrowUpRight size={20} className="text-neutral-600 group-hover:text-[#D4FF4F] group-hover:rotate-45 transition-all duration-300" />
              </a>
            ))}
            <div className="py-8 text-neutral-500 text-sm font-light leading-relaxed">
              Based in Pune, India — working with clients everywhere. We usually reply within one business day.
            </div>
          </motion.div>

          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-5"
            data-testid="contact-form"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input className="z-input" placeholder="Your name *" value={form.name} onChange={set("name")} data-testid="contact-input-name" />
              <input className="z-input" type="email" placeholder="Email address *" value={form.email} onChange={set("email")} data-testid="contact-input-email" />
            </div>
            <input className="z-input" placeholder="Company (optional)" value={form.company} onChange={set("company")} data-testid="contact-input-company" />
            <select
              className="z-input appearance-none cursor-pointer [&>option]:bg-[#0C0C0C]"
              value={form.interest}
              onChange={set("interest")}
              data-testid="contact-select-interest"
            >
              <option value="">What are you interested in?</option>
              {interests.map((i) => (
                <option key={i} value={i}>{i}</option>
              ))}
            </select>
            <textarea
              className="z-input min-h-[140px] resize-none"
              placeholder="Tell us about your project *"
              value={form.message}
              onChange={set("message")}
              data-testid="contact-input-message"
            />
            <button
              type="submit"
              disabled={loading}
              data-testid="contact-submit-btn"
              className="group inline-flex items-center justify-center gap-2 bg-white text-black font-medium px-8 py-4 rounded-full hover:bg-[#D4FF4F] transition-colors duration-300 disabled:opacity-60 mt-2"
            >
              {loading ? <Loader2 size={18} className="animate-spin" /> : null}
              {loading ? "Sending..." : "Send Inquiry"}
              {!loading && <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:rotate-45" />}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
