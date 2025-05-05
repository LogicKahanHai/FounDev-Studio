
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import TeamPreviewSection from "@/components/home/TeamPreviewSection";
import ContactSection from "@/components/home/ContactSection";
import ThreeDElements from "@/components/home/ThreeDElements";

const Index = () => {
  return (
    <div className="min-h-screen bg-logic-dark text-white">
      <Navbar />
      <main className="relative">
        <ThreeDElements />
        <HeroSection />
        <ServicesSection />
        <TeamPreviewSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
