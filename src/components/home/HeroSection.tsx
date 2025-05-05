
import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const rect = heroRef.current.getBoundingClientRect();
      
      const x = ((clientX - rect.left) / rect.width) * 100;
      const y = ((clientY - rect.top) / rect.height) * 100;
      
      heroRef.current.style.setProperty("--x", `${x}%`);
      heroRef.current.style.setProperty("--y", `${y}%`);
    };
    
    document.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  
  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center glow-effect grid-pattern overflow-hidden pt-20 pb-10"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-gradient animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-gradient animate-pulse-glow" style={{ animationDelay: "1s" }} />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 backdrop-blur-sm bg-logic-dark/30 rounded-xl p-8 border border-white/5">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-logic-gray-light">
            Building Digital Experiences That <span className="text-logic-blue">Transform</span> Ideas
          </h1>
          <p className="text-xl md:text-2xl text-logic-gray-light mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            We craft exceptional websites and mobile applications that bring your vision to life with cutting-edge technology and stunning design.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button 
              size="lg" 
              className="group bg-logic-blue hover:bg-logic-blue/90 text-white text-lg px-8 py-6 shadow-lg shadow-logic-blue/20 hover:shadow-logic-blue/40 transition-all"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="text-white border-white/20 hover:bg-white/5 text-lg px-8 py-6 shadow-lg shadow-white/5 hover:shadow-white/10 transition-all"
            >
              Our Services
            </Button>
          </div>
        </div>
        
        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <div className="p-4 text-center backdrop-blur-md bg-logic-dark/40 rounded-lg border border-white/5 hover:border-logic-blue/30 transition-all duration-300 hover:-translate-y-1">
            <div className="text-4xl font-bold text-logic-blue mb-2">100+</div>
            <div className="text-logic-gray-light">Projects Delivered</div>
          </div>
          <div className="p-4 text-center backdrop-blur-md bg-logic-dark/40 rounded-lg border border-white/5 hover:border-logic-green/30 transition-all duration-300 hover:-translate-y-1">
            <div className="text-4xl font-bold text-logic-green mb-2">50+</div>
            <div className="text-logic-gray-light">Happy Clients</div>
          </div>
          <div className="p-4 text-center backdrop-blur-md bg-logic-dark/40 rounded-lg border border-white/5 hover:border-logic-purple/30 transition-all duration-300 hover:-translate-y-1">
            <div className="text-4xl font-bold text-logic-purple mb-2">15+</div>
            <div className="text-logic-gray-light">Team Members</div>
          </div>
          <div className="p-4 text-center backdrop-blur-md bg-logic-dark/40 rounded-lg border border-white/5 hover:border-logic-pink/30 transition-all duration-300 hover:-translate-y-1">
            <div className="text-4xl font-bold text-logic-pink mb-2">5+</div>
            <div className="text-logic-gray-light">Years Experience</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
