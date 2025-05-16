import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const ThankYou = () => {
  const navigate = useNavigate();
  
  // Automatically redirect to home page after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 10000);
    
    return () => clearTimeout(timer);
  }, [navigate]);
  
  return (
    <div className="min-h-screen bg-logic-dark text-white">
      <Navbar />
      
      <main>
        <div className="pt-32 pb-20 relative">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-gradient animate-pulse-glow" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full blur-gradient animate-pulse-glow" style={{ animationDelay: "1s" }} />
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <div className="bg-logic-green/20 p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-8">
                <svg className="h-12 w-12 text-logic-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Thank You for Applying!</h1>
              <p className="text-xl text-logic-gray-light mb-8">
                Your application has been successfully submitted to FounDev Studio. Our team will review your application and get back to you soon.
              </p>
              
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Button
                  onClick={() => navigate("/careers")}
                  className="bg-logic-blue hover:bg-logic-blue/90 text-white"
                >
                  View More Positions
                </Button>
                
                <Button
                  onClick={() => navigate("/")}
                  variant="outline"
                  className="border-white/20 hover:bg-white/5"
                >
                  Return to Home
                </Button>
              </div>
              
              <p className="text-sm text-logic-gray-light mt-8">
                You will be automatically redirected to the home page in 10 seconds.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ThankYou;
