
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-logic-dark/90 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-5">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0 lg:mr-7">
            <Link to="/" className="flex items-center justify-center">
              <span className="xl:text-2xl lg:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-logic-blue to-logic-purple">
                FounDev
              </span>
              <span className="ml-2 lg:ml-1 xl:text-xl lg:text-lg font-medium text-white">Studio</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 lg:space-x-3">
            <Link to="/" className="text-white hover:text-logic-blue transition-colors">
              Home
            </Link>
            <Link to="/services" className="text-white hover:text-logic-blue transition-colors">
              Services
            </Link>
            <Link to="/team" className="text-white hover:text-logic-blue transition-colors">
              Team
            </Link>
            <Link to="/testimonials" className="text-white hover:text-logic-blue transition-colors">
              Testimonials
            </Link>
            <Link to="/portfolio" className="text-white hover:text-logic-blue transition-colors">
              Portfolio
            </Link>
            <Link to="/contact">
              <Button className="bg-logic-blue hover:bg-logic-blue/90 text-white">
                Contact Us
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
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
              to="/testimonials"
              className="block px-3 py-2 text-base font-medium text-white hover:bg-white/10 rounded-md"
              onClick={toggleMenu}
            >
              Testimonials
            </Link>
            <Link
              to="/portfolio"
              className="block px-3 py-2 text-base font-medium text-white hover:bg-white/10 rounded-md"
              onClick={toggleMenu}
            >
              Portfolio
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
