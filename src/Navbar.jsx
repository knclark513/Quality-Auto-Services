import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-navy-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Links to Home */}
          <Link to="/" className="flex items-center space-x-2">
            <Wrench className="h-8 w-8 text-gold-500" />
            <span className="text-2xl font-bold tracking-wide">Quality Auto</span>
          </Link>
          
          {/* Links */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="hover:text-gold-500 transition-colors">Home</Link>
            <a href="#" className="hover:text-gold-500 transition-colors">Services</a>
            <Link to="/inventory" className="hover:text-gold-500 transition-colors">Inventory</Link>
            <a href="#" className="hover:text-gold-500 transition-colors">Reviews</a>
            <button className="bg-gold-500 hover:bg-gold-600 text-navy-900 px-5 py-2 rounded-full font-bold transition-all transform hover:scale-105">
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;