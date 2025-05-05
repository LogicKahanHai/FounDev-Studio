
import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import TeamPreviewSection from "@/components/home/TeamPreviewSection";
import ContactSection from "@/components/home/ContactSection";
import ThreeDElements from "@/components/home/ThreeDElements";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [show3D, setShow3D] = useState(true);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  
  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };
    
    // Check on mount
    checkScreenSize();
    
    // Add window resize listener
    window.addEventListener("resize", checkScreenSize);
    
    // Handle 3D rendering errors
    const handleRenderingError = (e: ErrorEvent) => {
      if (e.message.includes("WebGL") || e.message.includes("THREE") || e.message.includes("lov")) {
        console.error("3D rendering error detected:", e);
        setShow3D(false);
        toast({
          title: "3D elements disabled",
          description: "We've disabled 3D elements for better performance",
          variant: "default",
        });
      }
    };
    
    window.addEventListener("error", handleRenderingError);
    
    return () => {
      window.removeEventListener("resize", checkScreenSize);
      window.removeEventListener("error", handleRenderingError);
    };
  }, [toast]);
  
  return (
    <div className="min-h-screen bg-logic-dark text-white">
      <Navbar />
      <main className="relative">
        {/* Only render 3D elements on larger screens and if no errors occurred */}
        {show3D && isLargeScreen && (
          <div className="hidden md:block">
            <ThreeDElements />
          </div>
        )}
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
