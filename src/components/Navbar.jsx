import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calculator } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleEstimateClick = () => {
    setIsOpen(false);
    if (location.pathname === '/services') {
      const element = document.getElementById('estimate');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-navy-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section - Constrained Image Size */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3 group">
                {/* The class 'h-12' forces the image to be small (approx 48px high) */}
                <img 
                  src="/yellow-car.png" 
                  alt="Quality Auto Services Logo" 
                  className="h-12 w-auto object-contain" 
                />
                <span className="text-2xl font-bold tracking-wider italic text-gold-500">
                  Quality Auto Services
                </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-center items-center space-x-8">
            <Link to="/" className="hover:text-gold-500 transition-colors font-medium">Home</Link>
            <Link to="/inventory" className="hover:text-gold-500 transition-colors font-medium">Inventory</Link>
            <Link to="/services" className="hover:text-gold-500 transition-colors font-medium">Services</Link>
            <Link 
              to="/services#estimate" 
              onClick={handleEstimateClick}
              className="flex items-center space-x-1 text-gold-500 hover:text-white transition-colors font-medium"
            >
              <Calculator size={18} />
              <span>Get Estimate</span>
            </Link>
          </div>

          {/* Phone Number */}
          <div className="hidden md:flex flex-shrink-0 items-center">
            <div className="flex items-center space-x-2 bg-gold-500 text-navy-900 px-4 py-2 rounded-md font-bold hover:bg-gold-400 transition-colors cursor-pointer">
              <Phone size={18} />
              <span>(313) 273-2100</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-gold-500 focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-navy-800 border-t border-navy-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md hover:bg-navy-700 hover:text-gold-500" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/inventory" className="block px-3 py-2 rounded-md hover:bg-navy-700 hover:text-gold-500" onClick={() => setIsOpen(false)}>Inventory</Link>
            <Link to="/services" className="block px-3 py-2 rounded-md hover:bg-navy-700 hover:text-gold-500" onClick={() => setIsOpen(false)}>Services</Link>
            <Link to="/services#estimate" className="block px-3 py-2 rounded-md hover:bg-navy-700 text-gold-500 font-bold" onClick={handleEstimateClick}>Get Estimate</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;