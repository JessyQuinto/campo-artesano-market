
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-b from-choco-light to-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="pt-10 mx-auto max-w-7xl px-4 sm:pt-12 sm:px-6 md:pt-16 lg:pt-20 lg:px-8 xl:pt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-bold text-choco-dark sm:text-5xl md:text-6xl">
                <span className="block text-choco-green xl:inline">Tesoros ancestrales</span>{' '}
                <span className="block text-choco-blue xl:inline">del Pacífico colombiano</span>
              </h1>
              <p className="mt-3 text-base text-gray-700 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Descubre productos artesanales auténticos, hechos a mano por artesanos del Chocó que mantienen vivas tradiciones ancestrales y la riqueza cultural afrocolombiana.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    to="/productos"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-choco-green hover:bg-opacity-90 md:py-4 md:text-lg md:px-10"
                  >
                    Ver productos
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link
                    to="/artesanos"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-choco-green bg-white hover:bg-choco-cream md:py-4 md:text-lg md:px-10"
                  >
                    Conoce artesanos
                    <ChevronRight className="ml-1 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent z-10"></div>
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?q=80&w=2073&auto=format&fit=crop"
          alt="Artesano chocoano trabajando"
        />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 h-20 w-20 bg-choco-gold opacity-20 rounded-full blur-xl"></div>
      <div className="absolute top-20 right-1/4 h-32 w-32 bg-choco-blue opacity-10 rounded-full blur-xl"></div>
    </div>
  );
};

export default HeroSection;
