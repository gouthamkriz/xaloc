import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Navigation from './Navigation';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-dark backdrop-blur-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <img
              src="/assets/images/logo/xaloc-logo-main.png"
              alt="Xaloc DIGITAL"
              className="h-12 w-auto transition-all duration-300 group-hover:drop-shadow-[0_0_20px_rgba(255,107,53,0.8)] group-hover:scale-105"
            />
            <div className="hidden sm:block">
              <div className="flex flex-col items-center">
                <span className="text-xl font-display font-bold text-white transition-all duration-300 group-hover:text-shadow-[0_0_20px_rgba(255,255,255,0.8)] group-hover:scale-105">XALOC</span>
                <span className="text-lg font-display font-bold text-xaloc-orange transition-all duration-300 group-hover:text-shadow-[0_0_20px_rgba(255,107,53,0.8)] group-hover:scale-105">DIGITAL</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <Navigation />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white hover:text-xaloc-orange transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <Navigation mobile={true} onItemClick={() => setIsMobileMenuOpen(false)} />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;