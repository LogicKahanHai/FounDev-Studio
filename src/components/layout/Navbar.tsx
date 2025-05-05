
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-logic-dark/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-logic-blue to-logic-purple">
                LOGIC
              </span>
              <span className="ml-2 text-xl font-medium text-white">Warehouse</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-logic-blue transition-colors">
              Home
            </Link>
            <Link to="/services" className="text-white hover:text-logic-blue transition-colors">
              Services
            </Link>
            <Link to="/team" className="text-white hover:text-logic-blue transition-colors">
              Team
            </Link>
            <Link to="/contact" className="text-white hover:text-logic-blue transition-colors">
              Contact
            </Link>
            <Button className="bg-logic-blue hover:bg-logic-blue/90 text-white">
              Get Started
            </Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu} 
              className="text-white hover:bg-white/10"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-logic-dark-light animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/"
              className="block px-3 py-2 text-base font-medium text-white hover:bg-white/10 rounded-md"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/services"
              className="block px-3 py-2 text-base font-medium text-white hover:bg-white/10 rounded-md"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link 
              to="/team"
              className="block px-3 py-2 text-base font-medium text-white hover:bg-white/10 rounded-md"
              onClick={toggleMenu}
            >
              Team
            </Link>
            <Link 
              to="/contact"
              className="block px-3 py-2 text-base font-medium text-white hover:bg-white/10 rounded-md"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <div className="px-3 py-2">
              <Button className="w-full bg-logic-blue hover:bg-logic-blue/90 text-white">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
