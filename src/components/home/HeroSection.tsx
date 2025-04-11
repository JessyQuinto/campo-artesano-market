
import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-campo-cream overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 bg-campo-cream">
          <div className="absolute inset-0 overflow-hidden z-0">
            <div className="absolute inset-y-0 right-0 w-1/2 h-full bg-campo-cream transform origin-top-right skew-x-6"></div>
          </div>
          <main className="pt-10 mx-auto max-w-7xl px-4 sm:pt-12 sm:px-6 md:pt-16 lg:pt-20 lg:px-8 xl:pt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block text-campo-brown xl:inline">Arte y tradición</span>{' '}
                <span className="block text-campo-green xl:inline">desde el campo</span>
              </h1>
              <p className="mt-3 text-base text-campo-dark sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Descubre productos artesanales auténticos, hechos a mano por artesanos rurales que mantienen vivas tradiciones ancestrales.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    to="/productos"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-campo-brown hover:bg-opacity-90 md:py-4 md:text-lg md:px-10"
                  >
                    Ver productos
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link
                    to="/artesanos"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-campo-brown bg-white hover:bg-campo-cream md:py-4 md:text-lg md:px-10"
                  >
                    Conoce artesanos
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1594761051371-b0ed644c517c?q=80&w=2069&auto=format&fit=crop"
          alt="Artesano trabajando"
        />
      </div>
    </div>
  );
};

export default HeroSection;
