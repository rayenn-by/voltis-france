import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Projects from "@/components/Projects";
import Sustainability from "@/components/Sustainability";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <WhyUs />
      <Projects />
      <Sustainability />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  );
}
