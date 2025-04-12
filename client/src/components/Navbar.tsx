import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      id="navbar"
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="px-4 sm:px-6 lg:px-8 bg-background/80 backdrop-blur-md">
        <div className="flex justify-between items-center">
          <a href="#hero" className="text-2xl font-bold font-montserrat tracking-wide bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            chtnnh
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#hero" className="text-foreground hover:text-secondary transition-colors font-medium">Home</a>
            <a href="#music" className="text-foreground hover:text-secondary transition-colors font-medium">Music</a>
            <a href="#videos" className="text-foreground hover:text-secondary transition-colors font-medium">Videos</a>
            <a href="#contact" className="text-foreground hover:text-secondary transition-colors font-medium">Contact</a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground focus:outline-none" 
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div 
            className="md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-4 pt-4 pb-4">
              <a 
                href="#hero" 
                className="text-foreground hover:text-secondary transition-colors font-medium"
                onClick={closeMobileMenu}
              >
                Home
              </a>
              <a 
                href="#music" 
                className="text-foreground hover:text-secondary transition-colors font-medium"
                onClick={closeMobileMenu}
              >
                Music
              </a>
              <a 
                href="#videos" 
                className="text-foreground hover:text-secondary transition-colors font-medium"
                onClick={closeMobileMenu}
              >
                Videos
              </a>
              <a 
                href="#contact" 
                className="text-foreground hover:text-secondary transition-colors font-medium"
                onClick={closeMobileMenu}
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
