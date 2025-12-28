import React from 'react';
import { Car, Fuel, Gauge, Calendar } from 'lucide-react';

const Inventory = () => {
  // This is our "Database" for now
  const cars = [
    {
      id: 1,
      title: "2020 Ford F-150 XLT",
      price: "$32,900",
      mileage: "45,000",
      fuel: "Gasoline",
      image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "2019 Toyota Camry SE",
      price: "$21,500",
      mileage: "32,000",
      fuel: "Hybrid",
      image: "https://images.unsplash.com/photo-1621007947382-bb3c3968e3bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "2021 Honda CR-V EX",
      price: "$28,400",
      mileage: "15,000",
      fuel: "Gasoline",
      image: "https://images.unsplash.com/photo-1568844293986-8d0400bd4745?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "2018 BMW 330i",
      price: "$26,000",
      mileage: "55,000",
      fuel: "Gasoline",
      image: "https://images.unsplash.com/photo-1555215695-3004980adade?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-navy-900 sm:text-4xl">
            Current <span className="text-gold-500">Inventory</span>
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Quality inspected vehicles ready for the road.
          </p>
        </div>

        {/* Car Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cars.map((car) => (
            <div key={car.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              
              {/* Image */}
              <div className="h-48 w-full overflow-hidden relative">
                <img 
                  src={car.image} 
                  alt={car.title} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-0 right-0 bg-gold-500 text-navy-900 font-bold px-3 py-1 m-2 rounded text-sm">
                  Certified
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy-900 mb-2">{car.title}</h3>
                <div className="text-2xl font-extrabold text-gold-600 mb-4">{car.price}</div>
                
                {/* Specs */}
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Gauge className="w-4 h-4 mr-2 text-gold-500" />
                    {car.mileage} mi
                  </div>
                  <div className="flex items-center">
                    <Fuel className="w-4 h-4 mr-2 text-gold-500" />
                    {car.fuel}
                  </div>
                </div>

                <button className="w-full bg-navy-900 hover:bg-navy-800 text-white font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Inventory;