
import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
    
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

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };
  
  // Animation variants for staggered animations
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, -0.01, 0.9]
      }
    }
  };

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center glow-effect grid-pattern overflow-hidden pt-20 pb-10"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-gradient animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-gradient animate-pulse-glow" style={{ animationDelay: "1s" }} />
        <div className="absolute top-3/4 left-1/2 w-64 h-64 rounded-full blur-gradient animate-pulse-glow" style={{ animationDelay: "1.5s", background: "radial-gradient(circle at center, rgba(139, 92, 246, 0.15), transparent 70%)" }} />
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 backdrop-blur-sm bg-logic-dark/30 rounded-xl p-8 border border-white/5"
      >
        <motion.div 
          variants={container}
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h1 
            variants={item}
            className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-logic-gray-light"
          >
            Building Digital Experiences That <span className="text-logic-blue animate-pulse-text">Transform</span> Ideas
          </motion.h1>
          
          <motion.p 
            variants={item}
            className="text-xl md:text-2xl text-logic-gray-light mb-10"
          >
            We craft exceptional websites and mobile applications that bring your vision to life with cutting-edge technology and stunning design.
          </motion.p>
          
          <motion.div 
            variants={item}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Button 
              size="lg" 
              className="group bg-logic-blue hover:bg-logic-blue/90 text-white text-lg px-8 py-6 shadow-lg shadow-logic-blue/20 hover:shadow-logic-blue/40 transition-all hover:scale-105"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="text-white border-white/20 hover:bg-white/5 text-lg px-8 py-6 shadow-lg shadow-white/5 hover:shadow-white/10 transition-all hover:scale-105"
            >
              <Play className="mr-2 h-4 w-4" />
              Watch Demo
            </Button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
          className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <motion.div 
            variants={item}
            whileHover={{ y: -8, scale: 1.03 }}
            className="p-4 text-center backdrop-blur-md bg-logic-dark/40 rounded-lg border border-white/5 hover:border-logic-blue/30 transition-all duration-300"
          >
            <div className="text-4xl font-bold text-logic-blue mb-2">100+</div>
            <div className="text-logic-gray-light">Projects Delivered</div>
          </motion.div>
          
          <motion.div 
            variants={item}
            whileHover={{ y: -8, scale: 1.03 }}
            className="p-4 text-center backdrop-blur-md bg-logic-dark/40 rounded-lg border border-white/5 hover:border-logic-green/30 transition-all duration-300"
          >
            <div className="text-4xl font-bold text-logic-green mb-2">50+</div>
            <div className="text-logic-gray-light">Happy Clients</div>
          </motion.div>
          
          <motion.div 
            variants={item}
            whileHover={{ y: -8, scale: 1.03 }}
            className="p-4 text-center backdrop-blur-md bg-logic-dark/40 rounded-lg border border-white/5 hover:border-logic-purple/30 transition-all duration-300"
          >
            <div className="text-4xl font-bold text-logic-purple mb-2">15+</div>
            <div className="text-logic-gray-light">Team Members</div>
          </motion.div>
          
          <motion.div 
            variants={item}
            whileHover={{ y: -8, scale: 1.03 }}
            className="p-4 text-center backdrop-blur-md bg-logic-dark/40 rounded-lg border border-white/5 hover:border-logic-pink/30 transition-all duration-300"
          >
            <div className="text-4xl font-bold text-logic-pink mb-2">5+</div>
            <div className="text-logic-gray-light">Years Experience</div>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToNextSection}
        >
          <ChevronDown className="animate-bounce w-8 h-8 text-white/70" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
