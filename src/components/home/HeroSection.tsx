
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative min-h-[85vh] flex items-center bg-gradient-to-b from-choco-light to-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 h-40 w-40 bg-choco-gold opacity-20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-20 h-64 w-64 bg-choco-green opacity-10 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="block text-choco-green animate-fade-in">Tesoros del Chocó</span>
              <span className="block text-choco-blue mt-2">Artesanía con Historia</span>
            </h1>
            
            <p className="text-lg text-gray-700 mb-8 max-w-lg mx-auto lg:mx-0">
              Descubre la riqueza cultural del Pacífico colombiano a través de productos artesanales auténticos, creados por manos que preservan tradiciones ancestrales.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Link
                to="/productos"
                className="btn-primary text-lg px-8 py-3 rounded-lg flex items-center justify-center"
              >
                Explorar Productos
              </Link>
              <Link
                to="/artesanos"
                className="btn-outline text-lg px-8 py-3 rounded-lg flex items-center justify-center"
              >
                Conoce los Artesanos
                <ChevronRight className="ml-1 h-5 w-5" />
              </Link>
            </div>
          </div>
          
          <div className="lg:col-span-6 relative">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl animate-float">
              <div className="absolute inset-0 bg-gradient-to-r from-choco-brown/30 to-transparent z-10"></div>
              <img
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?q=80&w=2073&auto=format&fit=crop"
                alt="Artesanía del Chocó"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-choco-blue opacity-20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
