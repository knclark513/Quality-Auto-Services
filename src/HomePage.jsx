import React from 'react';
import { Link } from 'react-router-dom'; // We need Link for the button
import { Clock, MapPin, ShieldCheck } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      
      {/* NOTE: Navbar is removed from here because it's now in App.jsx */}

      {/* Hero Section */}
      <div className="relative bg-navy-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center" />
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Expert Care for <span className="text-gold-500">Your Vehicle</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mb-10">
            Trusted mechanics, transparent pricing, and premium service. We treat your car like it's our own.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            {/* FIXED: Changed button to Link so it actually works */}
            <Link to="/inventory" className="bg-gold-500 hover:bg-gold-600 text-navy-900 px-8 py-4 rounded-lg font-bold text-lg shadow-lg transition-all inline-block">
              View Inventory
            </Link>
            <button className="border-2 border-white hover:bg-white hover:text-navy-900 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all">
              Our Services
            </button>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: "Certified Mechanics", desc: "ASE certified technicians with years of experience." },
              { icon: Clock, title: "Fast Turnaround", desc: "Same-day service available for most standard repairs." },
              { icon: MapPin, title: "Convenient Location", desc: "Easy access right off the main highway." }
            ].map((feature, index) => (
              <div key={index} className="p-6 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
                <feature.icon className="h-12 w-12 text-gold-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-navy-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Preview */}
      <footer className="bg-navy-900 text-gray-400 py-8 text-center">
        <p>© 2025 Quality Auto Services. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;