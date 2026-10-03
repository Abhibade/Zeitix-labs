import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import EditorialMarquee from "@/components/landing/EditorialMarquee";
import Products from "@/components/landing/Products";
import WhyUs from "@/components/landing/WhyUs";
import Roadmap from "@/components/landing/Roadmap";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";

export default function LandingPage() {
  return (
    <main data-testid="landing-page" className="bg-[#050505] text-white">
      <Navbar />
      <Hero />
      <EditorialMarquee />
      <Products />
      <WhyUs />
      <Roadmap />
      <Contact />
      <Footer />
    </main>
  );
}
