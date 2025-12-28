import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Phone, 
  ChevronLeft, 
  ChevronRight, 
  Calendar, 
  Gauge, 
  Palette, 
  Armchair, 
  Zap, 
  Fuel, 
  Hash 
} from 'lucide-react';
import { inventory } from '../data';

const CarDetails = () => {
  const { id } = useParams();
  const [activeImage, setActiveImage] = useState(0);
  
  const car = inventory.find(c => c.id === parseInt(id));

  if (!car) {
    return <div className="text-center py-20 text-xl">Car not found!</div>;
  }

  const nextImage = () => {
    setActiveImage((prev) => (prev === car.images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev === 0 ? car.images.length - 1 : prev - 1));
  };

  // Helper for Status Badge Color
  const getStatusColor = (status) => {
    switch(status.toLowerCase()) {
      case 'sold': return 'bg-red-100 text-red-800';
      case 'pending': return 'bg-orange-100 text-orange-800';
      default: return 'bg-green-100 text-green-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link to="/inventory" className="inline-flex items-center text-navy-900 hover:text-gold-500 mb-6 font-medium transition-colors">
          <ArrowLeft className="w-5 h-5 mr-2" /> Back to Inventory
        </Link>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            
            {/* LEFT COLUMN: IMAGE GALLERY */}
            <div className="bg-gray-100 flex flex-col">
              <div className="relative h-96 md:h-[500px] bg-black">
                <img 
                  src={car.images[activeImage]} 
                  alt={`${car.year} ${car.make}`} 
                  className="w-full h-full object-contain"
                />
                {car.images.length > 1 && (
                  <>
                    <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors">
                      <ChevronLeft size={24} />
                    </button>
                    <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors">
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnail Strip */}
              {car.images.length > 1 && (
                <div className="flex gap-2 p-4 overflow-x-auto bg-white border-t border-gray-200">
                  {car.images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImage(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                        activeImage === index ? 'border-gold-500 opacity-100' : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* RIGHT COLUMN: DETAILS */}
            <div className="p-8 md:p-12">
              
              {/* Header Section */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${getStatusColor(car.status)}`}>
                    {car.status}
                  </span>
                  <span className="text-gray-400 text-sm">Stock #{car.id}</span>
                </div>
                <h1 className="text-3xl font-bold text-navy-900 mb-2">
                  {car.year} {car.make} {car.model}
                </h1>
                <div className="text-3xl font-extrabold text-gold-600">
                  ${car.price.toLocaleString()}
                </div>
              </div>

              {/* Specifications Grid */}
              <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-100">
                <h3 className="text-lg font-bold text-navy-900 mb-4 border-b border-gray-200 pb-2">Specifications</h3>
                <div className="grid grid-cols-2 gap-y-4 gap-x-4">
                  
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white rounded-lg shadow-sm text-gold-500"><Calendar size={20} /></div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase">Year</p>
                      <p className="font-semibold text-navy-900">{car.year}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white rounded-lg shadow-sm text-gold-500"><Gauge size={20} /></div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase">Mileage</p>
                      <p className="font-semibold text-navy-900">{car.mileage}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white rounded-lg shadow-sm text-gold-500"><Palette size={20} /></div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase">Exterior</p>
                      <p className="font-semibold text-navy-900">{car.exterior || 'N/A'}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white rounded-lg shadow-sm text-gold-500"><Armchair size={20} /></div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase">Interior</p>
                      <p className="font-semibold text-navy-900">{car.interior || 'N/A'}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white rounded-lg shadow-sm text-gold-500"><Zap size={20} /></div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase">Engine</p>
                      <p className="font-semibold text-navy-900">{car.engine || 'N/A'}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white rounded-lg shadow-sm text-gold-500"><Fuel size={20} /></div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase">Fuel Type</p>
                      <p className="font-semibold text-navy-900">{car.fuel || 'Gasoline'}</p>
                    </div>
                  </div>

                  <div className="col-span-2 flex items-center gap-3 border-t border-gray-200 pt-4 mt-2">
                    <div className="p-2 bg-white rounded-lg shadow-sm text-gold-500"><Hash size={20} /></div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase">VIN</p>
                      <p className="font-mono font-semibold text-navy-900">{car.vin || 'Call for VIN'}</p>
                    </div>
                  </div>

                </div>
              </div>

              <h3 className="text-lg font-bold text-navy-900 mb-3">Vehicle Description</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {car.description}
              </p>

              <h3 className="text-lg font-bold text-navy-900 mb-3">Key Features</h3>
              <ul className="grid grid-cols-2 gap-3 mb-8">
                {car.features && car.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-gold-500 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full bg-navy-900 hover:bg-navy-800 text-white font-bold py-4 px-6 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <Phone className="w-5 h-5" />
                Contact Us About This Car
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;