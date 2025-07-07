import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import Button from './Button';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
            <img src="/images/logo.png" alt="Doculan Logo" className="h-10 w-auto" />
            <h4 className="text-2xl text-[#004080] select-none" style={{ fontFamily: 'Impact, sans-serif' }}>
                Doculan 
            </h4>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">Features</a>
          <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">Pricing</a>
          <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">Testimonials</a>
          <a href="#faq" className="text-gray-700 hover:text-blue-600 transition-colors">FAQ</a>
          <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
          <Button onClick={() => window.location.href = "https://app.doculan.ai/login"}  variant="secondary" size="sm"> Log in </Button>
          <Button onClick={() => window.location.href = "https://app.doculan.ai/register"}  variant="primary" size="sm"> Sign up </Button>
        </nav>

        {/* Mobile Navigation Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Features
            </a>
            <a 
              href="#pricing" 
              className="text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </a>
            <a 
              href="#testimonials" 
              className="text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#faq" 
              className="text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </a>
            <a 
              href="#about" 
              className="text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <div className="flex flex-col space-y-2">
              <Button variant="secondary" size="sm">Log in</Button>
              <Button variant="primary" size="sm">Sign up</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;