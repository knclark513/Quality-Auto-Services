import React from 'react';
import { Link } from 'react-router-dom';
import { Gauge, Tag } from 'lucide-react'; // Swapped Fuel for Tag
import { inventory } from '../data'; // CORRECTED IMPORT

const Inventory = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-navy-900 sm:text-4xl">
            Current <span className="text-gold-500">Inventory</span>
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Quality inspected vehicles ready for the road.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* CORRECTED: Mapping over 'inventory' */}
          {inventory.map((car) => (
            <div key={car.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              
              <div className="h-48 w-full overflow-hidden relative">
                {/* CORRECTED: Using images[0] */}
                <img 
                  src={car.images[0]} 
                  alt={`${car.year} ${car.make} ${car.model}`} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-0 right-0 bg-gold-500 text-navy-900 font-bold px-3 py-1 m-2 rounded text-sm">
                  {car.status}
                </div>
              </div>

              <div className="p-6">
                {/* CORRECTED: Constructing title from data */}
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  {car.year} {car.make} {car.model}
                </h3>
                <div className="text-2xl font-extrabold text-gold-600 mb-4">
                  ${car.price.toLocaleString()}
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Gauge className="w-4 h-4 mr-2 text-gold-500" />
                    {car.mileage} mi
                  </div>
                  <div className="flex items-center">
                    <Tag className="w-4 h-4 mr-2 text-gold-500" />
                    {/* Using Status since Fuel isn't in data */}
                    {car.status}
                  </div>
                </div>

                <Link to={`/inventory/${car.id}`} className="w-full bg-navy-900 hover:bg-navy-800 text-white font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Inventory;